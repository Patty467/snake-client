const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  //returns connection alert once connected, and establishes player name
  conn.on("connect", () => {
    console.log("Connection Established");
    conn.write("Name: PJA");
  });

  conn.on("data", (stream) => {
    console.log(`message: ${stream}`)
  });

  return conn;
};

module.exports = {
  connect,
};