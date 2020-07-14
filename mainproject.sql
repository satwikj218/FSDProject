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
drop table register1;

CREATE TABLE login1(
 id INT AUTO_INCREMENT,
 username VARCHAR (100)NOT NULL ,
 PASSWORD VARCHAR (100)NOT NULL ,
 PRIMARY KEY(id)
);
drop table login1;

call getdata1('satwik','9921855503','satwikj21','sarita@123','satwikj21@gmail.com','shivdham, MP');

select * from register1;
delete from register1;

select * from login1;
delete from login1;

select * from register1 where username = 'venug' and password = 'Venu@123';