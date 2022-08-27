const express = require("express"); //웹서버 생성
const mysql = require("mysql"); // 데이터베이스
const bodyParser = require("body-parser"); // 요청정보 처리
const cors = require("cors"); // 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

const app = express(); // 익스프레스 설정
const PORT = process.env.port || 8005; // 포트번호 설정 포트번호는 0부터 16비트
const iconv = require("iconv-lite");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // 객체 형식 처리

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키, ...등) 접근
};

app.use(cors(corsOptions)); // 미들웨어 설정 작업

const db = mysql.createPool({
  // mysql 연결 설정
  host: "localhost",
  user: "root",
  password: "123456",
  database: "projectDB",
  // port번호 생략하면 기본값 3306 지정되어있음
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var nickname = req.body.nickname;
  var addr = req.body.addr;
  var tel = req.body.tel;
  const sqlQuery =
    "select nickname, tel, addr, count(*) as 'cnt' from user_tbl where id=? and pw=?;"; //count의 별칭 = 'cnt'
  db.query(sqlQuery, [id, pw, nickname, addr, tel], (err, result) => {
    res.send(result); //
  });
});
app.post("/member", (req, res) => {
  console.log("/member", req.body);
  var id = req.body.id;
  var pw = req.body.pw;
  var nickname = req.body.nickname;
  var addr = req.body.addr;
  var tel = req.body.tel;

  console.log(id, pw, nickname, addr, tel);
  const sqlQuery =
    "insert into user_tbl(id, pw, nickname, addr, tel) values (?,?,?,?,?);";
  db.query(sqlQuery, [id, pw, nickname, addr, tel], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

// 라이브러리 multer= 파일업로드 path = 경로 fs = 페스
const multer = require("multer");
const path = require("path");
const fs = require("fs");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);

      done(
        null,
        path.basename(
          iconv.decode(file.originalname, "utf-8").toString(),
          ext // 확장자 제외한 이름
        ) +
          Date.now() +
          ext
      ); // 날짜 포함해서 새로운 이름 생성
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

// 이미지가 저장된 경로를 static으로 지정하면 불러올 수 있다.
app.use("/uploads", express.static("uploads")); // 정적으로 처리 해서 외부에서 접근가능 // 경로

app.post("/insert", upload.single("image"), (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var contents = req.body.contents;
  var image = req.body.image;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (WRITER, TITLE, CONTENTS, BOARD_IMAGE) values (?,?,?,?);";
  db.query(sqlQuery, [writer, title, contents, image], (err, result) => {
    res.send(result);
  });
});

app.post("/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);

  console.log("list!!!(page_num, page_size)", page_num, ", ", page_size);

  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, end_limit)", start_limit, ", ", page_size);

  const sqlQuery =
    "SELECT BOARD_NUM, TITLE, CONTENTS, WRITER, DATE_FORMAT(TIME, '%Y-%m-%d') AS TIME FROM BOARD_TBL order by BOARD_NUM desc limit ?,?;";
  // "SELECT BOARD_NUM, TITLE, CONTENTS, WRITER FROM BOARD_TBL;";
  db.query(sqlQuery, [start_limit, page_size], (err, result) => {
    // select문 결과를 클라이언트에게 반환
    res.send(result);
  });
});

app.get("/board/count", (req, res) => {
  console.log("count!!!");
  const sqlQuery = "select count(*) as COUNT from board_tbl;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT BOARD_NUM, WRITER, TITLE,CONTENTS,board_image, DATE_FORMAT(TIME,'%Y-%m-%d') AS TIME FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.title;
  var contents = req.body.article.contents;
  var num = req.body.article.num;

  const sqlQuery =
    "update BOARD_TBL set TITLE=?, CONTENTS=?,TIME=now() where BOARD_NUM=?;";
  db.query(sqlQuery, [title, contents, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});

app.get("/flowers", (req, res) => {
  console.log("flower!!!");
  const sqlQuery =
    "SELECT num, irum, S_name, F_langauge, flowering, contents, price, image_url FROM flower_tbl order by num asc";
  db.query(sqlQuery, (err, result) => {
    // select문 결과를 클라이언트에게 반환
    console.log(result);
    res.send(result);
  });
});

app.get("/pulips", (req, res) => {
  console.log("pulip!!!");
  const sqlQuery =
    "SELECT num, irum, contents, price, image_url FROM pulip_tbl order by num desc";
  db.query(sqlQuery, (err, result) => {
    // select문 결과를 클라이언트에게 반환
    console.log(result);
    res.send(result);
  });
});

app.get("/products", (req, res) => {
  console.log("product!!!");
  const sqlQuery = "SELECT num, irum, price, image_url FROM product_list";
  db.query(sqlQuery, (err, result) => {
    // select문 결과를 클라이언트에게 반환
    console.log(result);
    res.send(result);
  });
});

app.post("/orders", (req, res) => {
  const { orders } = req.body;
  console.log("@@@@", orders);

  orders.map((order) => {
    console.log("num@@", order.num);
    console.log("irum@@", order.irum);
    console.log("price@@", order.price);
    console.log("image_url@@", order.image_url);
    console.log("quantity@@", order.quantity);

    var num = order.num;
    var irum = order.irum;
    var price = order.price;
    var image_url = order.image_url;
    var quantity = order.quantity;

    const sqlQuery = "insert into order_list values(?,?,?,?,?);";

    db.query(
      sqlQuery,
      [num, irum, price, image_url, quantity],
      (err, result) => {}
    );
  });
  res.send("OK");
});

app.post("/payment", (req, res) => {
  console.log("/payment");
  const sqlQuery =
    "select num, irum, price, image_url, quantity from order_list;";
  db.query(sqlQuery, (err, result) => {
    console.log("/payment(result) =>", result);
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
