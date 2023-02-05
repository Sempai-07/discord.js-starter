module.exports = {
  name: "ready",
  once: true,
  code: async(client) => {
    client.user.setPresence({
      activities: [{name: `на разработчика💃`, type: 3 }],
      status: 3
    });
    setTimeout(async() => {
      if(client.slashCommands.size != 0) {
        await client.application.commands.set(client.slashCommands);
        console.log("Слэш зарегистрированы");
      }
    }, 8000);
    console.log("Бот запустился " + client.user.tag);
  }
};