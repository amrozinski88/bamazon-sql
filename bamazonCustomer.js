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






const promptBuyer = () => {

    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "Please enter the ID # of the item you want to purchase:",
        validate: input => isNaN(input) === true ? false : true
    },
    {
        type: "input",
        name: "amount",
        message: "Please enter how many you would like to purchase: ",
        validate: input => isNaN(input) === true ? false : true
    }]).then(answers=>{ 

    })

};


const getAll = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        console.log(res[0].product_name)
        res.map(({ item_id, product_name, price }) => {
            console.log(`--------------------------------------------`)
            console.log(`ID #:  ${item_id} ,Product Name: ${product_name}, Price: ${price}`)
        })
        promptBuyer()
    })

}




connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId} `)
    getAll()
});



// * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
