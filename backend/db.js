import pkg from "pg";
const { Client } = pkg;

const db = new Client({
    user: 'kim',
    host: 'database',
    database: 'db',
    password: '2003',
    port: 5432,
})
   
await db.connect()

export default db;