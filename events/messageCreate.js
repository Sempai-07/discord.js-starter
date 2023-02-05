const client = require("..");
module.exports = {
  name: "messageCreate",
  once: false,
  code: async(message) => {
    let prefixed = ["?", "!"];
    prefixed = typeof prefixed === "string" ? [prefixed] : prefixed;
    let prefixes = [];
    for (const prefix of prefixed) {
      prefixes.push(prefix);
    }
    const prefix = prefixes
    .find((prefix) =>
    message.content.toLowerCase().startsWith(prefix.toLowerCase())
    );
    if(message.author.bot) return;
    if(message.channel.type !== 0 ) return;
    if(!message.content.startsWith(prefix)) return; 
    const args = message.content.slice(prefix.length).trim().split(/ +/g); 
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(!command) return;
    try {
      command.code(client, message, args);
    } catch(err) {
      console.error(err);
    }
  }
};