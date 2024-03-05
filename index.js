const { Client, Intents } = require("discord.js");

/**
 * setup - Function to set up the Discord bot.
 * @param {Object} params - Object containing configuration for setting up the Discord bot.
 *                          Expected properties:
 *                            - commands: Object containing a list of commands and their responses.
 *                            - token: String containing the Discord bot token.
 *                            - activity: Object containing bot activity information (optional).
 */

function setup(params) {
  const { commands, token, activity } = params;
  const { setActivity = "", typeActivity = "" } = activity;

  console.log("Commands:", commands);
  console.log("Token:", "xxxxxxx");
  console.log("Set Activity:", setActivity);
  console.log("Type Activity:", typeActivity);

  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });
  client.once("ready", () => {
    console.log("Ready!");
    client.user.setActivity(setActivity, {
      type: typeActivity,
    });
  });

  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    for (const [cmd, res] of Object.entries(commands)) {
      console.log(`${cmd} + ${res}`);
      if (message.content.toLowerCase() == cmd) {
        message.reply(res);
      }
    }
  });

  client.login(token);
}

module.exports = setup;
