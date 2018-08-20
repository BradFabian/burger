var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
  host: "localhost",
  port:  3600,
  user: "root",
  password: "Flyingslow88!",
  socketPath: 'mysql-socket-path',
  database: "burgers_db"
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;