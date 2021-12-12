// write 3 API for app
// 1. POST: login() api/auth/login
// 2. POST: addStore() api/store/add
// 3. PUT: terminationContract() api/contract/termination
const express = require("express");
const cors = require("cors");

const initData = require("./init_data");

initData();

const verifyToken = require("./middleware/auth");
const authRouter = require("./routes/auth");
const storeRouter = require("./routes/store");
const contractRouter = require("./routes/contract");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/store", verifyToken, storeRouter);
app.use("/api/contract", verifyToken, contractRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
