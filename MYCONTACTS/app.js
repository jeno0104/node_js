// post, put, delete
// post: 서버로 정보를 보낼 때
// put: 기존 서버에 있던 데이터 수정
// delete: 서버에 있는 자료를 삭제할 때

const express = require("express");
const dbConnect = require("./config/dbconnect");
const app = express(); // express 함수를 실행시켜 app 이라는 서버를 만듬
const methodOverride = require("method-override");
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public")); // 정적인 파일 위치, 그리고 css, js, 이미지들을 public에서 꺼내서 사용하게 된다.
app.use(methodOverride("_method"));
dbConnect();
app.get("/", (req, res) => {
  res.send("Contacts");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/contacts", require("./routes/contactRoutes")); // 루트 경로를 요청했을 때, 사용할 미들웨어 모듈 위치 작성

app.listen(3000, () => {
  console.log("서버 실행중");
});
