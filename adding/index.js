
const sqlite3=require("sqlite3").verbose();
const sqlite=require("sqlite");

const db=new sqlite3.Database("./new.db",sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);

    console.log("connection successful");
});

// creating a table
// db.run(`CREATE TABLE testing(
//     username VARCHAR(250),
//     password VARCHAR(250),
//     studentid VARCHAR(250)
// )`)
const username="bharath";
const sqlquery=`SELECT *
                FROM testing
                WHERE username="${username}"`;

const dbuser=db.get(sqlquery,[]);
console.log(dbuser.length);
console.log(dbuser);
