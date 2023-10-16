const { stringConversion } = require("./constants");

let connection;

//sets the conditions to connect with the server
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //converts user input into strings the server can use to trigger game functions
  const handleUserInput = function (key) {
    output = stringConversion[key];
    connection.write(output);
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};