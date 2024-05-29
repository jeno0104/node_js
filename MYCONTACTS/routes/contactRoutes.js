const express = require("express");
const app = express();
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  deleteContact,
  updateContact,
  addContactForm,
} = require("../controllers/contactController");

router.route("/add").get(addContactForm).post(createContact);
router.route("/").get(getAllContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
