const { stringConversion } = require("./constants");

let connection;

//sets the conditions to connect with the server
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

//converts user input into strings the server can use to trigger game functions
const handleUserInput = function(key) {
  let values = Object.keys(stringConversion)
  if (values.includes(key)) {
    let output = stringConversion[key];
    connection.write(output);
  } if (key === '\u0003') {
    process.exit();
  } else {
    console.log("Enter a correct value (W,S,A,D To Move, Q to Chat, Ctrl + C to Quit)")
  }
};

module.exports = {
  setupInput,
};
