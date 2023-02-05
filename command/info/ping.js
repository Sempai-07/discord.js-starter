module.exports = {
  name: "ping",
  code: async(client, message, args) => {
    message.reply("Мой пинг: " + client.ws.ping + "💣");
  }
};