const express = require("express"); //웹서버 생성
const mysql = require("mysql"); // 데이터베이스
const bodyParser = require("body-parser"); // 요청정보 처리
const cors = require("cors"); // 교차 출처 리소스 공유(Cross-Origin Resource Sharing, CORS)

const app = express(); // 익스프레스 설정
const PORT = process.env.port || 8005; // 포트번호 설정 포트번호는 0부터 16비트

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
  database: "project",
  // port번호 생략하면 기본값 3306 지정되어있음
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery =
    "select count(*) as 'cnt' from user_tbl where id=? and pw=?;"; //count의 별칭 = 'cnt'
  db.query(sqlQuery, [id, pw], (err, result) => {
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
  // var mobile2 = req.body.mobile2;
  // var mobile3 = req.body.mobile3;
  console.log(id, pw, nickname, addr, tel);
  const sqlQuery =
    "insert into user_tbl(id, pw, nickname, addr, tel) values (?,?,?,?,?);";
  db.query(sqlQuery, [id, pw, nickname, addr, tel], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.post("/board/list", (req, res) => {
  console.log("list!!!");
  var page_num = parseInt(req.body.page_num);
  var page_size = parseInt(req.body.page_size);

  console.log("list!!!(page_num, page_size)", page_num, ", ", page_size);

  const start_limit = (page_num - 1) * page_size;
  console.log("list!!!(start_limit, end_limit)", start_limit, ", ", page_size);

  const sqlQuery =
    "SELECT BOARD_NUM, TITLE, CONTENTS, WRITER, DATE_FORMAT(TIME, '%Y-%m-%d') AS TIME FROM BOARD_TBL order by num desc limit ?,?;";
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

app.post("/board/insert", (req, res) => {
  console.log("/insert", req.body);
  var writer = req.body.writer;
  var title = req.body.title;
  var contents = req.body.contents;

  const sqlQuery =
    "INSERT INTO BOARD_TBL (WRITER, TITLE, CONTENTS) values(?,?,?);";
  // ? : 파라미터로 전달받겠다
  // [writer, title, content]
  db.query(sqlQuery, [writer, title, contents], (err, result) => {
    // insert는 반환 x
    // null값 반환
    res.send(result);
  });
});

app.post("/board/detail", (req, res) => {
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery =
    "SELECT NUM, WRITER, TITLE,CONTENTS, DATE_FORMAT(TIME,'%Y-%m-%d') AS TIME FROM BOARD_TBL where NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.post("/board/update", (req, res) => {
  console.log("/update", req.body);
  var title = req.body.article.board_title;
  var contents = req.body.article.board_contents;
  var num = req.body.article.board_num;

  const sqlQuery =
    "update BOARD_TBL set TITLE=?, CONTENTS=?,TIME=now() where num=?;";
  db.query(sqlQuery, [title, contents, num], (err, result) => {
    res.send(result);
    console.log("result=", result);
  });
});

app.post("/board/delete", (req, res) => {
  const num = req.body.num;
  console.log("/delete(id) => ", num);

  const sqlQuery = "DELETE FROM BOARD_TBL WHERE NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    console.log(err);
    res.send(result);
  });
});
app.get("/flowers", (req, res) => {
  console.log("flower!!!");
  const sqlQuery =
    "SELECT num, irum, S_name, F_langauge, flowering, contents, price, image_url FROM flower_tbl order by num desc";
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
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
