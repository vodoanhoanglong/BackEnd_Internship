const models = require("../models"); // load file index.js
const Contract = models.contract;
const Owner = models.owner;
const Store = models.store;

module.exports = async (req, res) => {
  try {
    let owner = await Owner.findOne({ where: { accountID: req.userId } });

    if (!owner)
      return res.json({
        success: false,
        message: "You aren't boss of the store",
      });

    let isBoss = await Store.findOne({ where: { ownerID: owner.ownerID } });

    if (!isBoss)
      return res.json({
        success: false,
        message: "You aren't boss of the store",
      });

    await Contract.findOne({ where: { storeID: req.params.id } })
      .then((record) => {
        if (!record)
          return res.json({ success: false, message: "StoreID not found" });

        let values = {
          contractState: false,
        };

        record
          .update(values)
          .then(() =>
            res.json({ success: true, message: "Updated successfully" })
          );
      })
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Server error: store" });
  }
};
