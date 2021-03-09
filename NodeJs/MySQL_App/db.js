var mysql  = require('mysql');

exports.exec = (sql,data,callback) => {
    const connection = mysql.createConnection({
        host:'10.0.100.182',
        user:'user',
        password:'User_1234',
        database:'mask'
    });
    connection.connect();

    connection.query(sql,data,function(error,results,fields){
        if(error) {
            console.log(error)
        };
        callback(results, fields);
    })
    connection.end();
}