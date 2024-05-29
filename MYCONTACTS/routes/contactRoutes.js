const express = require("express");
const app = express();
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
