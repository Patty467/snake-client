const IP = 'localhost';
const PORT = '50541';

//establishes a dictionary that handleUserInput can use to convert user inputs
const stringConversion = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  q: "Say: Whhhaaaaa",
};

module.exports = {
  IP,
  PORT,
  stringConversion,
};