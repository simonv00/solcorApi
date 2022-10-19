//const mysql = require('mysql')

// conexion con la base de datos

const mysql = require('mysql');
const fs = require('fs');

var config =
{
    host: 'solcorapi.mysql.database.azure.com',
    user: 'solcorapi',
    password: 'Proyecto3',
    database: 'proyecto3',
    port: 3306,
};

/*
var config ={
  host: "localhost",
  user: "root",
  password: "pinguino",
  database: 'proyecto3',
};*/

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
