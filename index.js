//Configs 
const { AoiClient,LoadCommands,Util } = require("aoi.js");
const { setup } = require("@akarui/aoi.parser");

setup(Util);

const bot = new AoiClient({
    token: "YOUR TOKEN", //If you are using Replit or Glitch, please read "For Replit and Glitch" on information.md
    prefix: ".", //Like .help (You change prefix if you want)
    intents: ["MessageContent", "Guilds", "GuildMessages","GuildMembers"],
    events: ["onMessage", "onInteractionCreate","onJoin"],
  suppressAllErrors:true,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

bot.joinCommand({
  code:`
  $giveRole[$guildID;$authorID;$getGuildVar[autoroleroleid]]
  `
})

bot.readyCommand({
  code:`
  $log[Im ready.]
  `
})
//Fiil yourself
bot.variables({
    "memberroleid":"",
  "autoroleroleid":"",
    "unregisterroleid":"",
    "tag":"",   
    "welcomechannelid":"",
    "logchannelid":"",
    "moderatorroleid":""
})
