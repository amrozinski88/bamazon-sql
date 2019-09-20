const inquirer = require("inquirer");
const mysql = require("mysql");
const dotenv = require("dotenv").config();
const keys = require("./keys.js");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.mysql.key,
    database: "bamazon"
});



connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId} `)
})

const getAll = function () {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.log(res[0].product_name)
        res.map(({ item_id, product_name, price }) => {
            console.log(`--------------------------------------------`)
            console.log(`ID #:  ${item_id} ,Product Name: ${product_name}, Price: ${price}`)
        })
    })
}

getAll()