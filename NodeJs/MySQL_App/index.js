var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var app = express();
var db = require("./db");
var { Success, Error } = require("./response");
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//express使用ejs作為模板引擎
app.use(bodyParser.json())
app.set("view engine", "ejs");



const connection = mysql.createConnection({
    host: "10.0.100.182",
    user: "user",
    password: "User_1234",
    database: "mask",
    multipleStatements: true, //新增此項，同時執行兩個語句
});
//連線
connection.connect(function (error) {
    if (error) {
        console.log(error);
        console.log("連線失敗");
        return;
    }
    console.log("連線成功");
});

app.get("/", function (req, res) {
    //在inventory資料表中，查詢所有欄位的資料
    connection.query("SELECT * FROM inventory;", function (error, rows) {
        if (error) {
            console.log(error);
        }
        var data = rows;
        res.render("index", { data: data });
    });
});

app.get("/success", function (req, res) {
    res.end(JSON.stringify(new Success("success")));
});

app.get("/error", function (req, res) {
    res.end(JSON.stringify(new Error("error")));
});

app.get("/addform", function (req, res) {
    res.render('addform.ejs', {})
});

//在inventory資料表中，查詢分頁資料
app.get("/page/:page([0-9]+)", function (req, res) {
    var page = req.params.page;
    //把<=0的id強制改成1
    if (page <= 0) {
        res.redirect("/page/1");
        return;
    }
    //每頁資料數
    var nums_per_page = 10;
    //定義資料偏移量
    var offset = (page - 1) * nums_per_page;
    connection.query(
        `SELECT * FROM inventory LIMIT ${offset}, ${nums_per_page}`,
        function (error, data) {
            if (error) {
                console.log(error);
            }
            connection.query(
                "SELECT COUNT(*) AS COUNT FROM inventory",
                function (error, nums) {
                    if (error) {
                        console.log(error);
                    }
                    var last_page = Math.ceil(nums[0].COUNT / nums_per_page);

                    //避免請求超過最大頁數
                    if (page > last_page) {
                        res.redirect("/page/" + last_page);
                        return;
                    }

                    res.render("page", {
                        data: data,
                        curr_page: page,
                        //本頁資料數量
                        total_nums: nums[0].COUNT,
                        //總數除以每頁筆數，再無條件取整數
                        last_page: last_page,
                    });
                }
            );
        }
    );
});

//LAB01
app.get("/page/:page([0-9]+)", function (req, res) {
    var page = req.params.page;
    if (page <= 0) {
        res.redirect("/page/1");
        return;
    }
    var nums_per_page = 10;
    var offset = (page - 1) * nums_per_page;
    var sql = `SELECT * FROM inventory LIMIT ${offset}, ${nums_per_page};
                SELECT COUNT(*) AS COUNT FROM inventory;`;
    connection.query(sql, function (error, data) {
        if (error) {
            console.log(error);
        }
        var last_page = Math.ceil(data[1][0].COUNT / nums_per_page);

        if (page > last_page) {
            res.redirect("/page/" + last_page);
            return;
        }

        res.render("page", {
            data: data[0],
            curr_page: page,
            total_nums: data[1][0].COUNT,
            last_page: last_page,
        });
    });
});
//新增資料
app.post("/add", function (req, res) {
    let body = req.body;
    console.log('mybody:' + body);
    var sql = `INSERT INTO inventory(name, phone, address, adult_mask, child_mask) VALUES(?,?,?,?,?);`;
    var data = [
        body.name,
        body.phone,
        body.address,
        parseInt(body.adult_mask),
        parseInt(body.child_mask),
    ];
    db.exec(sql, data, function (results, fields) {
        if (results) {
            res.end(JSON.stringify(new Success("insert success")));
        } else {
            res.end(JSON.stringify(new Error("insert failed")));
        }
    });
});

//LAB02
// app.get('/page/:page([0-9]+)', function(req, res){
//     var page = req.params.page
//     if(page <= 0 ) {
//         res.redirect('/page/1')
//         return
//     }
//     var nums_per_page = 10
//     var start = ((page - 1) * nums_per_page) + 1
//     var end = start + nums_per_page

// var sql =   `SELECT * FROM inventory WHERE id >= ${start} AND id <= ${end};
//                 SELECT COUNT(*) AS COUNT FROM inventory;`
//     connection.query(sql, function(error, data) {
//         if (error) {
//             console.log(error);
//         }
//         var last_page = Math.ceil(data[1][0].COUNT / nums_per_page)

//         if(page > last_page) {
//             res.redirect('/page/'+last_page)
//             return
//         }

//         res.render('page',{
//             data: data[0],
//             curr_page: page,
//             total_nums: data[1][0].COUNT,
//             last_page: last_page
//         })
//     });
// })

app.listen(3000);
