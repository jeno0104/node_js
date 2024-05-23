// fs 모듈의 readFile 연습하기
const fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //   console.log(data);
  fs.writeFile("./test.txt", data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("test.txt is saved.");
  });
});
