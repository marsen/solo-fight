import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/auth/login", (req, res) => {
  const { username, password } = req.body;
  // 簡單的驗證
  if (username === "user" && password === "password") {
    // 登入成功，返回一個 JWT token
    const token = "yourjwttoken";
    res.json({ token });
  } else {
    // 登入失敗
    res.status(401).json({ message: "Incorrect username or password" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  // 執行登出動作，這裡先返回成功的訊息
  res.json({ message: "Logout success" });
});

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
