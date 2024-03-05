A simple Discord bot package that responds commands with custom messages and activities.

### Installation

```bash
npm install discord-simple-command
```

### Usage

```javascript
const setup = require("discord-simple-command");

// Define your custom commands and responses
const commands = {
  ping: "pong",
  gm: "Good morning!",
  hi: "Hello!",
};

// Replace this with your Discord bot token
const token = "YOUR_DISCORD_BOT_TOKEN_HERE";

// Set up the bot activity
const activity = { setActivity: "Custom Status", typeActivity: "PLAYING" };

// Initialize the bot with the specified commands, token, and activity
setup({ commands, token, activity });
```

**`setup(params)`**

Function to set up the Discord bot.

**Parameters**:

- `params`: Object containing configuration for setting up the Discord bot.

  - `commands`: Object containing a list of commands and their responses.
  - `token`: String containing the [Discord bot token](./get-token.md).
  - `activity`: Object containing bot activity information (optional).

**Activity Types**

- `PLAYING`: Sets the bot's activity to "Playing \<setActivity>".
- `LISTENING`: Sets the bot's activity to "Listening to \<setActivity>".
- `STREAMING`: Sets the bot's activity to "Streaming \<setActivity>".
- `COMPETING`: Sets the bot's activity to "Competing in \<setActivity>".
- `WATCHING`: Sets the bot's activity to "Watching \<setActivity>".
