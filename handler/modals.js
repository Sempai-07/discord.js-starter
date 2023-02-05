const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
var AsciiTable = require('ascii-table');
var table = new AsciiTable();
table.setHeading('Modal', 'Status').setBorder('|', '=', "0", "0");

module.exports = (client) => {
  if (!fs.existsSync(path.join(process.cwd(), './modal/'))) return;
  fs.readdirSync('./modal/').filter((file) => file.endsWith('.js')).forEach((file) => {
    const modal = require(`../modal/${file}`);
    client.modals.set(modal.id, modal);
    table.addRow(modal.id, '✅');
  });
  console.log(chalk.cyanBright(table.toString()));
};