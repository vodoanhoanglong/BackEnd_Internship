const models = require("../models"); // load file index.js
const Store = models.store;
const Owner = models.owner;

module.exports = async (req, res) => {
  const { phoneNumber, name, logo, email, address, haveStaff } = req.body;
  console.log(req.userId);
  try {
    let owner = await Owner.findOne({ where: { accountID: req.userId } });
    let { ownerID } = owner;
    await Store.sync({ force: true });
    // Table created
    await Store.create({
      phoneNumber,
      name,
      logo,
      email,
      address,
      haveStaff,
      ownerID,
    });
    res.json({ success: true, message: "Added store success" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error: store" });
  }
};
