var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "futureworld"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Forbundet!");

  
  var sql = "INSERT INTO fattigdom VALUES ('test', 'test', 'test')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record indsat");
  });
});


