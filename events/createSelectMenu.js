const client = require("..");
module.exports = {
  name: "interactionCreate",
  once: false,
  code: async(interaction) => {
    if (!interaction.isStringSelectMenu()) return;
    const select = client.selects.get(interaction.values.join(', '));
    if (!select) return;
    try {
      await select.code(client, interaction);
    } catch (err) {
      console.log(err);
    }
  }
};