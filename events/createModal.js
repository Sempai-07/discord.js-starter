const client = require("..");
module.exports = {
  name: "interactionCreate",
  once: false,
  code: async(interaction) => {
    if (!interaction.isModalSubmit()) return;
    const modal = client.modals.get(interaction.customId);
    if (!modal) return;
    try {
      await modal.code(client, interaction);
    } catch (err) {
      console.log(err);
    }
  }
};