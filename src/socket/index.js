export const newConnectionHandler = (socket) => {
  // "connection" is NOT A CUSTOM EVENT. This is a socket.io event, it's triggered every time a new client connects!
  console.log("A new client connected! it's id is:", socket.id);
  // 1. Emit a "welcome" event to the connected client
  socket.emit("welcome", { message: `HELLO ${socket.id}` });
};
