const jwt = require("jsonwebtoken");
const models = require("../models"); // load file index.js
const Account = models.account;

module.exports = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.json({
      success: false,
      message: "Missing username or password",
    });

  try {
    const account = await Account.findOne({ where: { username, password } });
    if (!account)
      return res.json({
        success: false,
        message: "Invalid username or password",
      });

    const accessToken = jwt.sign(
      { userId: account.id },
      "shafaskjfhjaskhsakjfhjkas"
    );

    res.json({
      success: true,
      message: "User logged successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error: auth" });
  }
};
