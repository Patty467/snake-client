const { connect } = require('./client.js');
const { setupInput } = require('./input.js');

// informs player that client is attempting to connect, then establishes a connection with the game server
console.log("Connecting ...");
let conn = connect();

setupInput(conn);