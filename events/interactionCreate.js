const client = require("..");
module.exports = {
  name: "interactionCreate",
  once: false,
  code: async(interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.slashCommands.get(interaction.commandName);
    if (!command) return;
    try {
      await command.code(client, interaction);
    } catch (err) {
      console.log(err);
    }
  }
};