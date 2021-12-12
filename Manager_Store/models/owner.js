"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init(
    {
      ownerID: DataTypes.UUID,
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      birthday: DataTypes.DATE,
      avatar: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      accountID: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "owner",
    }
  );

  Owner.removeAttribute("id"); // remove for get data disabled auto select id
  return Owner;
};
