// path 모듈 연습하기
const path = require("path");

// join
const fullPath = path.join("some", "word", "ex.txt");
console.log(fullPath);

// 경로만 추출 - dirname, 즉 파일 이름 뺴고 추출
const dir = path.dirname(fullPath);
console.log(dir);

// 파일 이름만 추출 - basename
const fn1 = path.basename(__filename);
console.log(`전체 경로(__filename): ${__filename}`);
console.log(fn1);
// 확장자 이름 제외하고 파일 이름 추출
const fn2 = path.basename(__filename, ".js");
console.log(fn2);
