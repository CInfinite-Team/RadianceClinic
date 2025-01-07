const express = require('express');
const formRouter = express.Router();

const { skinForm, hairForm, contactUsForm,consultationForm } = require('../controllers/forms');

formRouter.post("/skin", skinForm);
formRouter.post("/hair", hairForm);
formRouter.post("/contactUs", contactUsForm);
formRouter.post("/consultation", consultationForm);

module.exports = formRouter;