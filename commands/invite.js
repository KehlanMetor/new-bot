const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    return message.member
      .send(
        `https://discord.com/oauth2/authorize?client_id=894630184114855966&scope=bot%20applications.commands&permissions=2147483647 made by ESA/kardon
    `
      )
      .catch(console.error);
  }
};
