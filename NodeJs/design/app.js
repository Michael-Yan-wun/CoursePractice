var express = require("express");
var express_session = require("express-session");
var bp = require("body-parser");

const app = express();
app.use(bp.urlencoded());
app.use(bp.json());
app.use(
    express_session({
        secret: "myPassWord@",
        resave: false,
        saveUninitialized: true,
    })
);
// Step2.1:掛上ejs引擎
app.set("view engine", "ejs");

// Step1:掛上靜態資源檔案
app.use(express.static("./public"));
app.listen(3000);

// Step2:製作路由，掛上views引擎(Step 2.1)，
//       接著新增views資料夾接著將index.html搬入views，最後把副檔名改成.ejs。
//       index.ejs將檔案內的路徑修改

// localhost:3000/home 首頁
app.get("/home", function (req, res) {
    let who = "Guest";
    if (req.session.userName) {
        who = req.session.userName;
    }
    res.render("index.ejs", { userName: who });
});
// localhost:3000/member/login 登入頁面
app.get("/member/login", function (req, res) {
    res.render("login.ejs", {});
});

// 將使用者送來的資料送出
app.post("/member/login", function (req, res) {
    let data = req.body.txtID;      // 取得使用者輸入
    req.session.userName = data;    // 將資料塞進session
    // res.send("i got form data  " + data);
    res.redirect("/home");         // 重新導向回首頁
});
// 清空session
app.get("/member/signout", function (req, res) {
    delete req.session.userName;
    // req.session.destroy;
    res.redirect("/home");         // 重新導向回首頁
});

// localhost:3000/member/secret 會員專屬頁面
app.get("/member/secret", function (req, res) {
    res.render("member.ejs", {});
});
