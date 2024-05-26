const http = require("http");

const server = http.createServer((req, res) => {
  // req, res로 요청, 응답을 처리

  // req.url: 요청 경로
  // req.method: 요청 방식
  res.setHeader("Content-type", "text/plain"); // 응답 객체, text라고 하는 것
  const { url, method } = req;
  if (method === "GET" && url === "/") {
    res.write("HOME");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.write("ABOUT");
    res.end();
  } else {
    res.end("Not Found ");
  }
}); // http 모듈로 createServer() 함수로 서버를 만듬

// 서버를 실행할 때는 listen을 사용해줘야 한다.
server.listen(3000, () => {
  console.log(`서버가 실행 중`);
});
