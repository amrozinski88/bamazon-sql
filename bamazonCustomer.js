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


const updateStock = (id,newStockQuantity)=>{
    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?",[newStockQuantity,id]
    
    )}



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
    }]).then(({id,amount})=>{ 
        console.log(id,amount)
        connection.query("SELECT * FROM products WHERE item_id=?",[id],(err,res)=>{
            if(err) throw err;
            console.log(res)
            if(res[0].stock_quantity < amount){
                console.log(`We do not have that many please try a different amount`)
                getAll()
            }else{
                console.log("Order confirmed")
                console.log(`You have been charged ${res[0].price} All transactions are Non-transferable and Non-refundable`)
                const newStockQuantity = res[0].stock_quantity - amount 
                console.log(newStockQuantity)
                updateStock(id,newStockQuantity)
            }
            


        })

    })

};


const getAll = () => {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
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
