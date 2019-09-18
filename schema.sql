-- run this code to create the database
DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;
-- this code below will create your products table
USE bamazon;
CREATE TABLE products (
 item_id  serial,
 product_name VARCHAR(200) NOT NULL,
 department_name VARCHAR(200) NULL,
 price DECIMAL(10,2) NOT NULL,
 stock_quantity int not null,
 PRIMARY KEY (item_id)
);
-- this code will populate your db

use bamazon;

insert into products (product_name, department_name, price, stock_quantity)
values ("shamWoa", "cleaning", 19.95, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Glassdex", "cleaning", 5.95, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Mrs Clean Cosmic Deleter", "cleaning", 10.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Swooper Mop", "cleaning", 30.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Tire Dr", "auto", 29.95, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Frances Fuel Cleaner", "auto", 19.95, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Air ionizer", "auto", 25.00, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Iphone XX", "electronics", 5000.00, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Cold Fusion Phone charger", "electronics", 9999.99, 1);

insert into products (product_name, department_name, price, stock_quantity)
values ("IphoneXX Case", "electronics", 499.99, 10);
