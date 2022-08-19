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
  database: "bbs",
  // port번호 생략하면 기본값 3306 지정되어있음
});

app.post("/login", (req, res) => {
  console.log("/login", req.body);
  var id = req.body.id;
  var pw = req.body.pw;

  const sqlQuery = "select count(*) as 'cnt' from member where id=? and pw=?;"; //count의 별칭 = 'cnt'
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
  var mobile1 = req.body.mobile1;
  var mobile2 = req.body.mobile2;
  var mobile3 = req.body.mobile3;
  console.log(id, pw, nickname, addr, mobile1, mobile2, mobile3);
  const sqlQuery =
    "insert into member(id, pw, nickname, addr, mobile1, mobile2, mobile3) values (?,?,?,?,?,?,?);";
  db.query(
    sqlQuery,
    [id, pw, nickname, addr, mobile1, mobile2, mobile3],
    (err, result) => {
      console.log(result);
      res.send(result);
    }
  );
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
