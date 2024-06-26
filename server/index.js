// 필요한 패키지를 불러옵니다.
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const mysqlPromise = require("mysql2/promise");
const bcrypt = require("bcrypt");

const session = require("express-session"); 
const MySQLStore = require("express-mysql-session")(session); 
const dotenv = require("dotenv"); 
const multer = require("multer");
const path = require("path");

const fs = require('fs')

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage,
  // limits: { fileSize: 1000000 } // 파일 최대 용량
});

// 환경변수 설정 파일을 불러옵니다.
dotenv.config(); 

// Express 애플리케이션을 생성합니다.
const app = express();

const port = 8000;

// URL 인코딩된 데이터를 해석하는 미들웨어를 설정합니다.
app.use(express.urlencoded({ extended: false })); 
// JSON 데이터를 해석하는 미들웨어를 설정합니다.
app.use(express.json()); 

// CORS 설정을 추가합니다. 클라이언트 측 URL을 허용합니다.
app.use(cors());

// 정적 파일을 제공하기 위해 디렉토리를 설정합니다.
app.use(express.static(path.join(__dirname + "/uploads")));


// 환경변수에서 데이터베이스 연결 정보를 가져옵니다.
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

// 데이터베이스에 연결합니다. 단일 연결을 생성하고 간단한 작업수행
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: 'c2c',
  port: 3306,
});

// 프로미스를 지원하는 데이터베이스 연결 풀을 생성합니다. 프로미스 기반 비동기 처리
const PromiseConnection = mysqlPromise.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
});


// MySQL 연결
connection.connect((err) => {
  if (err) {
    console.error(" MySQL 접속에러: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});

app.get("/", (req, res) => res.send(`안녕~~`));

app.get('/movie', (req, res) => { //영화 게시판 목록 불러오기
  const sql = 'SELECT * FROM board_movie';
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});


app.post('/movie/write', upload.single('img'), (req, res) => { //영화 게시판 글쓰기
  const { title, movie_status, content } = req.body;
  const img = req.file ? req.file.filename : null;

  console.log({ title, movie_status, content } +',...'+ req.file.filename)

  const sql = 'INSERT INTO board_movie (title, movie_status, img, content) VALUES (?, ?, ?, ?)';
  connection.query(sql, [title, movie_status, img, content], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json({ id: results.insertId, title, movie_status, img, content });
  });
});

app.get('/movie/post/:id', (req, res) => { //영화게시판 게시글 상세페이지
  const postId = req.params.id;
  const sql = 'SELECT * FROM board_movie WHERE id = ?';
  connection.query(sql, [postId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Post not found');
    }
    res.json(results[0]);
  });
});



app.post('/movie/edit/:id', upload.single('img'), (req, res) => { //영화 게시판 수정
  const { id } = req.params;
  const { title, movie_status, content } = req.body;
  const img = req.file ? req.file.filename : req.body.existingImg; // 이미지 교체 시 replace

  const sql = 'UPDATE board_movie SET title = ?, movie_status = ?, img = ?, content = ? WHERE id = ?';
  connection.query(sql, [title, movie_status, img, content, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if(req.file){
      fs.unlink(`${__dirname}/uploads/${req.body.existingImg}`, function(err) {
       
        res.status(200).json({ id, title, movie_status, img, content });
      }) 
    }
  });
});

app.post("/movie/post/delete", (req, res) => {//영화게시판 게시글 삭제
  const { id, img } = req.body;
  // const value = [id];
  console.log(req.body)
  const sqlQuery = "DELETE FROM board_movie WHERE id = ?";
  connection.query(sqlQuery, id, (err, result) => {
    if (err) {
      console.error("에러", err);
      res.status(500).send("서버에러");
    } else {
      fs.unlink(`${__dirname}/uploads/${img}`, function(err) {

        res.json({isDeleted:"true"});
      })
    }
    
  });

  
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  