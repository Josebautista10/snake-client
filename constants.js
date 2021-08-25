const IP = 'localhost';
const PORT = 50541;

const movementKeys = {
  //stops the server
  '\u0003': process.exit, //ctrl c

  //keys to move
  w: 'Move: up',
  s: 'Move: down',
  a: 'Move: left',
  d: 'Move: right',

  // //send message
  m: 'Say: Sheesh!'
};

module.exports = {
  IP,
  PORT,
  movementKeys
};
