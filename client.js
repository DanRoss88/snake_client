const net = require("net");

// establishes a connection with the game server
const connect = function () {
  console.log("connecting to server")
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DR");
   // conn.write("Move: up");
  });
      
  conn.on("data", (data) => {
    console.log(data);
   });
  
  return conn;
};


module.exports = {connect};