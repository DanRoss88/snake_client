const net = require("net");

// establishes a connection with the game server
const connect = function (data) {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541"
  });
};

console.log("Connecting ...");
connect();

module.exports = {connect};