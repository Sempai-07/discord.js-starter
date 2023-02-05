const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Button', 'Status').setBorder('|', '=', "0", "0");

module.exports = (client) => {
  if (!fs.existsSync(path.join(process.cwd(), './button/'))) return;
  fs.readdirSync('./button/').filter((file) => file.endsWith('.js')).forEach((file) => {
    const button = require(`../button/${file}`);
    client.buttons.set(button.id, button);
    table.addRow(button.id, '✅');
  });
  console.log(chalk.cyanBright(table.toString()));
};