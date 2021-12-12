"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init(
    {
      contractState: DataTypes.BOOLEAN,
      createDate: DataTypes.DATE,
      storeID: DataTypes.INTEGER,
      freelanceID: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "contract",
    }
  );

  return Contract;
};
