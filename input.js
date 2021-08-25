const { movementKeys } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  if (movementKeys[key] === process.exit) {
    process.exit();
  }

  if (movementKeys[key]) {
    connection.write(movementKeys[key]);
  }
};

module.exports = { setupInput };
