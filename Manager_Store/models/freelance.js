"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Freelance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Freelance.init(
    {
      phoneNumber: DataTypes.STRING,
      fullName: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      birthday: DataTypes.DATE,
      avatar: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      address: DataTypes.STRING,
      isWorking: DataTypes.BOOLEAN,
      accountID: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "freelance",
    }
  );

  return Freelance;
};
