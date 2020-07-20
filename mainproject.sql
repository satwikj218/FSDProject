create database mainproject;

use mainproject;

CREATE TABLE register1(
 id INT AUTO_INCREMENT,
 NAME VARCHAR(100) NOT NULL,
 mobile VARCHAR (100)NOT NULL ,
 username VARCHAR (100)NOT NULL ,
 PASSWORD VARCHAR (100)NOT NULL ,
 email VARCHAR (100)NOT NULL ,
 address varchar(100) not null,
 PRIMARY KEY(id)
);

select * from register1;

drop table register1;