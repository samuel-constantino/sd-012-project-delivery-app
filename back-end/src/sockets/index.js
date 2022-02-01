const status = require('./status');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário ${socket.id} conectado`);

    status(io, socket);
  });
};