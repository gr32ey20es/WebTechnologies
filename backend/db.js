import pkg from "pg";
const { Client } = pkg;

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "962002",
  port: 5432,
});

await db
  .connect()
  .then(() => {
    console.log("Đã kết nối thành công đến cơ sở dữ liệu PostgreSQL");
  })
  .catch((error) => {
    console.error("Lỗi kết nối đến cơ sở dữ liệu PostgreSQL:", error);
  });
export default db;
