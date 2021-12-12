// write 3 API for app
// 1. GET: login() api/auth/login
// 2. POST: addStore() api/store/add
// 3. PUT: contractTermination() api/contract/termination
const express = require("express");
const cors = require("cors");

const verifyToken = require("./middleware/auth");
const authRouter = require("./routes/auth");
const storeRouter = require("./routes/store");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/store", verifyToken, storeRouter);

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
