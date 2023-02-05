### Установка

```
git clone https://github.com/Sempai-07/discord.js-starter
cd discord.js-starter
npm install
```


### Commands
command => info => ping.js
```js
module.exports = {
  name: "ping",
  code: async(client, message, args) => {
    message.reply("Мой пинг: " + client.ws.ping + "💣");
  }
};
```

### Slash cmd
slash => info => ping.js
```js
module.exports = {
  name: "ping",
  description: "Задержка бота",
  code: async(client, interaction) => {
    return interaction.reply("Мой пинг: " + client.ws.ping + "💣");
  }
};
```

### Button
command => button => button.js
```js
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
module.exports = {
  name: 'button',
  code: (client, message, args) => {
  const button = new ActionRowBuilder()
      .addComponents([
         new ButtonBuilder()
	  .setCustomId('lol')
	  .setDisabled(false)
	  .setLabel('Invite')
	  .setStyle(3)
		])
   message.reply({ content: 'Button', components: [button] })
     }
    }
```

button => button.js
```js
module.exports = {
  id: 'lol',
  code: async(client, interaction) => {
    interaction.reply('Hello')
  }
}
```

### Select menu
command => select => select.js
```js
const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  name: "select",
  code: async(client, message, args) => {
  const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						}
					)
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
}
```

select => select.js

```js
module.exports = {
  id: 'first_option',
  code: async(client, interaction) => {
    interaction.reply('Hello')
  }
}
```

### Event
events => ready.js
```js
module.exports = {
   name: "ready",
   once: true,
   code: async(client) => {
     console.log("Бот запустился: " + client.user.tag)
   }
}
```

### Примечание
Название папок должны быть: `command`, `slash`, `modal`, `button`, `select`. Изменить их вы можете в исходном коде
