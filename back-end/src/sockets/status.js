const { Sale } = require('../database/models');

module.exports = (io, socket) => {
  socket.on('statusUpdate', async ({ id, status }) => {
    await Sale.update({ status }, { where: { id } });
    io.emit('statusUpdate');
  });

  socket.on('disconnect', ({ id }) => {
    console.log(`Usuário ${id} desconectado`);
  });
};