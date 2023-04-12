const net = require("net");
const {connect} = require("./client");
// establishes a connection with the game server

conn.on("connect", () => {
console.log(data);
})
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;


console.log("Connecting ...");
connect();