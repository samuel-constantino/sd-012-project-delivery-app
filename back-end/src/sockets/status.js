const { Sale } = require('../database/models');

module.exports = (io, socket) => {
  socket.on('statusUpdate', async ({ saleId, statusMessage }) => {
    await Sale.update({ status: statusMessage }, { where: { id: saleId } });
    io.emit('statusUpdate', { statusMessage });
  });

  socket.on('disconnect', () => {
    console.log(`Usuário ${socket.id} desconectado`);
  });
};