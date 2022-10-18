//const mysql = require('mysql')

// conexion con la base de datos

const mysql = require('mysql');
const fs = require('fs');

/*var config =
{
    host: 'proyecto3.mysql.database.azure.com',
    user: 'proyecto3',
    password: 'Solcor123',
    database: 'proyecto3',
    port: 3306,
    ssl: {ca: fs.readFileSync("C:\\Users\\simon\\Downloads\\DigiCertGlobalRootCA.crt.pem")}
};*/

var config ={
  host: "localhost",
  user: "root",
  password: "pinguino",
  database: 'proyecto3',
};

const dbConection = new mysql.createConnection(config);

dbConection.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});



module.exports = dbConection;
