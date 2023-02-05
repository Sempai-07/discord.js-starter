const client = require("..");
module.exports = {
  name: "interactionCreate",
  once: false,
  code: async(interaction) => {
    if (!interaction.isButton()) return;
    const button = client.buttons.get(interaction.customId);
    if (!button) return;
    try {
      await button.code(client, interaction);
    } catch (err) {
      console.log(err);
    }
  }
};