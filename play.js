const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function () {
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  if (key === '\u0003') {
    process.exit();
  }
  return stdin;
};
console.log("connecting");
connect();
