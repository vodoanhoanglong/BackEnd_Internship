const models = require("./models"); // load file index.js
const Account = models.account;
const Freelance = models.freelance;
const Owner = models.owner;
const Store = models.store;
const Contract = models.contract;

module.exports = async (req, res) => {
  try {
    await Account.create({
      username: "tester",
      password: "123",
    });
    await Account.create({
      username: "boss",
      password: "123",
    });
    await Freelance.create({
      phoneNumber: "09327650780",
      fullName: "Võ Đoàn Hoàng Long",
      emailAddress: "vodoanhoanglong@gmail.com",
      birthday: "03-03-2001",
      avatar: "https://github",
      gender: true,
      address: "183 Thu Duc",
      isWorking: false,
      accountID: 1,
    });
    await Owner.create({
      fullName: "Tieu Loi",
      phoneNumber: "0909230102",
      emailAddress: "vodoanhoanglong@gmail.com",
      birthday: "03-03-2001",
      avatar: "https://github",
      gender: true,
      accountID: 2,
    });

    let owner = await Owner.findOne({ where: { accountID: 2 } });
    let { ownerID } = owner;
    await Store.create({
      phoneNumber: "0909230102",
      name: "Pets Store",
      logo: "https://github",
      email: "vodoanhoanglong@gmail.com",
      address: "193 Thu Duc",
      haveStaff: false,
      ownerID,
    });
    await Contract.create({
      storeID: 1,
      freelanceID: 1,
    });
    console.log("Added data successfully");
  } catch (error) {
    console.log("Error init data");
  }
};
