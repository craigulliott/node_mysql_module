// Generated by CoffeeScript 1.4.0
var mysql, pool, settings;

settings = require('node_settings_module');

mysql = require('mysql');

pool = mysql.createPool({
  host: settings.get("mysql").host,
  user: settings.get("mysql").user,
  password: settings.get("mysql").password,
  database: settings.get("mysql").database,
  connectionLimit: settings.get("mysql").connectionLimit
});

exports.query = function(sql, callback) {
  return pool.getConnection(function(error, connection) {
    if (error) {
      return callback(error);
    }
    return connection.query(sql, function(error, rows) {
      if (error) {
        return callback(error);
      }
      callback(null, rows);
      return connection.end();
    });
  });
};
