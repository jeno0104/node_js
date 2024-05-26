const http = require("http");

const server = http.createServer((req, res) => {
  // req, res로 요청, 응답을 처리
  console.log(req);
}); // http 모듈로 createServer() 함수로 서버를 만듬

// 서버를 실행할 때는 listen을 사용해줘야 한다.
server.listen(3000, () => {
  console.log(`서버가 실행 중`);
});
