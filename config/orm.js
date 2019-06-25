// Import MySQL connection.
var connection = require("../config/connection.js");

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     };
//     console.log('connected as id ' + connection.threadId);
//   });

  var orm = {
      selectAll: function(callBack){
          connection.query("SELECT * FROM burgers", function(err, result){
              if (err) throw err;
              callBack(result)
          });
      },
      insertOne: function(burger_name, callBack){
            connection.query("INSERT INTO burgers SET ?", {
                burger_name: burger_name,
                devoured: false
            }, function(err, result){
                if (err) throw err;
                callBack(result)
            });
      },
      updateOne: function(burger_id, callBack){
          console.log(burger_id)
          connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true ,burger_id], function(err, result){
              if (err) throw err;
              callBack(result)
          });
      }
  };


module.exports = orm;