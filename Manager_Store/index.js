const express = require("express");

const models = require("./models"); // loads index.js
const Account = models.account;
const Owner = models.owner;
const Freelance = models.freelance;
const Store = models.store;
const Contract = models.contract;
const Request = models.request;

const app = express();

app.get("/", (req, res) => {
  Freelance.findAll().then((person) => res.send(person));
});

const PORT = 3000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

//test
/* app.listen(
  PORT,
  (async () => {
    await Owner.sync({ force: true });
    // Table created
    await Owner.create({
      fullName: "long cu",
      phoneNumber: "0909",
      emailAddress: "sieunhan@gmail",
      birthday: "03-03-2001",
      avatar: "http",
      gender: true,
      accountID: 1,
    });
    const ow = await Owner.findAll();
    console.log(ow);
  })()
); */
