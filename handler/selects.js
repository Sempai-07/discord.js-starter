const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Select', 'Status').setBorder('|', '=', "0", "0");

module.exports = (client) => {
  if (!fs.existsSync(path.join(process.cwd(), './select/'))) return;
  fs.readdirSync('./select/').filter((file) => file.endsWith('.js')).forEach((file) => {
    const select = require(`../select/${file}`);
    client.selects.set(select.id, button);
    table.addRow(select.id, '✅');
  });
  console.log(chalk.cyanBright(table.toString()));
};