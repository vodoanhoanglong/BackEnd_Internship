const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader;

  if (!token)
    return res.json({ success: false, message: "Access token not found" });

  try {
    const decoded = jwt.verify(token, "shafaskjfhjaskhsakjfhjkas");

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Invalid token" });
  }
};
