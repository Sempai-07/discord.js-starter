module.exports = {
  name: "ping",
  description: "Задержка бота",
  code: async(client, interaction) => {
    return interaction.reply("Мой пинг: " + client.ws.ping + "💣");
  }
};