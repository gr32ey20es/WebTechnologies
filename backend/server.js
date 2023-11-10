import pkg from 'pg';
const { Pool, Client } = pkg;

import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

import { getAssignment } from './assignment/get.js';
import { postAssignment } from './assignment/post.js';
getAssignment(app)
postAssignment(app)

// const pool = new Pool({
// 	user: 'kim',
// 	host: 'database',
// 	database: 'db',
// 	password: '2003',
// 	port: 5432,
// })
 
// console.log(await pool.query('SELECT NOW()'))
 
// const client = new Client({
// 	user: 'kim',
// 	host: 'database',
// 	database: 'db',
// 	password: '2003',
// 	port: 5432,
// })
 
// await client.connect()
 
// var data = await client.query('SELECT ten, mssv FROM data');

// app.get('/', (req, res) => {
//   	res.json([data][0]['rows']);
// })

app.get('*', (req, res) => {
    res.send("404 NOT FOUND!")
})

app.listen(4000, () => {
  	console.log('listening for requests on port 4000')
})

// await client.end()

