// 연락처 정보가 어떻게 구성되어 있는지 지정 -> 스키마 생성, 스키마도 mongoose를 이용

const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema(
  {
    // 필요로 하는 형식 지정
    name: {
      type: String,
      required: true, // 필수
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "전화번호는 꼭 기입해 주세요."],
    },
  },
  {
    timestamps: true, // 자료가 작성되거나 자료가 수정되면 자동으로 그 시간을 기록해주는 속성
    // up
  }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
// 스키마 -> 모델
// mongoose.model(모델명, 스키마명)
