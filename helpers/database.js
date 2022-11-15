//const mysql = require('mysql')

// conexion con la base de datos

const mysql = require('mysql');
const fs = require('fs');

var config =
{
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b5ab2966588d51',
    password: '29f8dd57',
    database: 'heroku_dc84d822bdd3b25',
    port: 3306,
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
