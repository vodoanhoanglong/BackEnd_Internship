"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init(
    {
      requestState: DataTypes.BOOLEAN,
      sender: DataTypes.STRING,
      sentDate: DataTypes.DATE,
      storeID: DataTypes.INTEGER,
      freelanceID: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "request",
    }
  );

  return Request;
};
