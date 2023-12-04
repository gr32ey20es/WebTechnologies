import pkg from 'pg';
const { Client } = pkg;

export const db = new Client({
    user: 'kim',
    host: 'database',
    database: 'db',
    password: '2003',
    port: 5432,
})
   
await db.connect();

export default db;

// import mysql from "mysql";

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   database:"blog"
// })