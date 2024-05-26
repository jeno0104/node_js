const express = require("express");
const app = express();
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Contacts Page");
  })
  .post((req, res) => {
    // console.log(req.body); // req 바디의 요청을 파싱해줘야 json 값을 가져가서 사용할 수 있다.
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.send("필수 값이 입력되지 않았습니다.");
    }
    res.send("Create Contacts");
  });
router
  .route("/:id")
  .get((req, res) => {
    res.send(`View Contact for ID : ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update Contact for ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Contact for ID : ${req.params.id}`);
  });

module.exports = router;
