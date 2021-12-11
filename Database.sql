CREATE DATABASE MANAGER_STORE;


CREATE TABLE Account
(
	accountID varchar(36) primary key,
	username varchar(255) unique not null,
	password varchar(255) not null
);


CREATE TABLE Owner
(
	ownerID varchar(36) primary key,
	fullName varchar(30) not null,
	phoneNumber varchar(10) not null,
	emailAddress varchar(255),
	birthday date not null,
	avatar varchar(255),
	gender boolean not null,
	accountID varchar(36) not null,
	foreign key (accountID) references Account (accountID)
);

CREATE TABLE Person
(
	phoneNumber varchar(10) primary key,
	fullName varchar(30) not null,
	emailAddress varchar(255),
	birthday date not null,
	gender boolean not null,
	avatar varchar(255),
	address varchar(255) not null,
	isWorking boolean,
	accountID varchar(36) not null,
	foreign key (accountID) references Account(accountID)
);

CREATE TABLE Store
(
	storeID varchar(36) primary key,
	name varchar(30) not null,
	logo varchar(255) not null,
	address varchar(255) not null,
	phoneNumber varchar(10) not null,
	emailAddress varchar(255),
	haveStaff boolean,
	ownerID varchar(36) not null,
	foreign key (ownerID) references Owner (ownerID)
);

CREATE TABLE Contract
(
	storeID varchar(36),
	personPhoneNumber varchar(10),
	contractState boolean default TRUE,
	createDate timestamp default CURRENT_TIMESTAMP,
	primary key (storeID, personPhoneNumber),
	foreign key (storeID) references Store (storeID),
	foreign key (personPhoneNumber) references Person (phoneNumber)
);

CREATE TABLE Request
(
	storeID varchar(36),
	personPhoneNumber varchar(10),
	requestState boolean default FALSE,
	sender varchar(36) not null,
	sentDate timestamp default CURRENT_TIMESTAMP,
	primary key (storeID, personPhoneNumber),
	foreign key (storeID) references Store (storeID),
	foreign key (personPhoneNumber) references Person (phoneNumber)
);



