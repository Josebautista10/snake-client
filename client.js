const { IP, PORT } = require("./constants");
const net = require('net');

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('successfully connected to game server');
    conn.write("Name: JAB");
  });

  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports =  connect;
