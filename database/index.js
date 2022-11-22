var mysql = require('mysql');
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyparser.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "futureworld"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Make SQL statement:
  var sql = "INSERT INTO fattigdom (beskrivelse, quote, ide) VALUES ?";
  //Make an array of values:
  var values = [
    ['John', 'Highway 71', 'Highway 71'],
    ['Peter', 'Lowstreet 4', 'Highway 71'],
    ['Amy', 'Apple st 652', 'Highway 71'],
    ['Hannah', 'Mountain 21', 'Highway 71'],
    ['Michael', 'Valley 345', 'Highway 71'],
    ['Sandy', 'Ocean blvd 2', 'Highway 71'],
    ['Betty', 'Green Grass 1', 'Highway 71'],
    ['Richard', 'Sky st 331', 'Highway 71'],
    ['Susan', 'One way 98', 'Highway 71',],
    ['Vicky', 'Yellow Garden 2', 'Highway 71'],
    ['Ben', 'Park Lane 38', 'Highway 71',],
    ['William', 'Central st 954', 'Highway 71'],
    ['Chuck', 'Main Road 989', 'Highway 71'],
    ['Viola', 'Sideway 1633', 'Highway 71']
  ];

  // var sql = "UPDATE fattigdom SET ide = 'dummydata';"

  //Execute the SQL statement, with the value array:
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});