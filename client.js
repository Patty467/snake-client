const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541'
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Connection Established");
    conn.write("Name: PJA");
    // conn.write("Move: up");
  });

  conn.on("data", (stream) => {
    console.log(`message: ${stream}`)
  });

  return conn;
};

module.exports = {
  connect,
};