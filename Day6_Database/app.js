const { Pool } = require("pg");

// Cấu hình kết nối với PostgreSQL
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "123456789",
    port: 5432,
});

// Đọc dữ liệu từ bảng
pool.query("SELECT * FROM profile ORDER BY id ASC", (error, results) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Profile Records:", results.rows);
});

// Thêm một người dùng mới vào bảng
const name = "Myna";
const email = "caomyna2003@gmail.com";
pool.query(
    "INSERT INTO profile (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log("New profile added.");
    }
);
