const mongoose = require("mongoose");
require("dotenv").config();

// db 접속 코드 -> 비동기 처리 해줘야 함
// async, await

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    // process.env env 파일에 있는 내용을 가져오는 객체
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
