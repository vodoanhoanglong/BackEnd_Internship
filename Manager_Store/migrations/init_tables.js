"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create table account
    await queryInterface.createTable("accounts", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    // create table Owner
    await queryInterface.createTable("owners", {
      ownerID: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
        primaryKey: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emailAddress: Sequelize.STRING,
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      avatar: Sequelize.STRING,
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      accountID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "accounts", key: "id" },
      },
    });
    // create table freelance
    await queryInterface.createTable("freelances", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emailAddress: Sequelize.STRING,
      birthday: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      avatar: Sequelize.STRING,
      gender: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isWorking: Sequelize.BOOLEAN,
      accountID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "accounts", key: "id" },
      },
    });
    // create table store
    await queryInterface.createTable("stores", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logo: Sequelize.STRING,
      email: Sequelize.STRING,
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      haveStaff: Sequelize.BOOLEAN,
      ownerID: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "owners", key: "ownerID" },
      },
    });
    // create table contract
    await queryInterface.createTable("contracts", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      contractState: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
      storeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "stores", key: "id" },
      },
      freelanceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "freelances", key: "id" },
      },
    });
    // create table request
    await queryInterface.createTable("requests", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      requestState: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sentDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
      storeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "stores", key: "id" },
      },
      freelanceID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "freelances", key: "id" },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropAllTables();
  },
};
