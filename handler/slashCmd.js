const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Slash', 'Status').setBorder('|', '=', "0", "0");

module.exports = (client) => {
  if (!fs.existsSync(path.join(process.cwd(), './slash/'))) return;
  fs.readdirSync('./slash/').forEach(dir => {
    const files = fs.readdirSync(`./slash/${dir}/`).filter(file => file.endsWith('.js'));
    if(!files || files.length <= 0) console.log(chalk.red("Slash - 0"));
    files.forEach((file) => {
      let command = require(`../slash/${dir}/${file}`);
      if(command) {
        client.slashCommands.set(command.name, command);
        table.addRow(command.name, '✅');
      } else {
        table.addRow(file, '⛔');
      }
    });
  });
  console.log(chalk.blue(table.toString()));
};