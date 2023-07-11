module.exports = [{
    name:"c.register",
    code:`  
//This command just create "Slash Command (/register) for all servers where bot is"
$createApplicationCommand[global;register;makes you register;true;slash;[{
    "name": "user",
    "description": "Please select user",
    "required": "true",
    "type": 6
  },{
    "name": "name",
    "description": "Please Write User Real Name",
    "required": "true",
    "type": 3
  },{
    "name": "age",
    "description": "Please Write User Real Age",
    "required": "true",
    "type": 10
  }]]
    `
},{
    name:"register",
    type:"interaction",
    prototype:"slash",
    code:`
    //The part that sends a message to the channel used by the command
    $interactionReply[;{newEmbed:{title:Register Completed!}{description:
    User Real Name#COLON# **$slashOption[name]**
    User Nick Name#COLON# **$username[$slashOption[user]]**
    User Age#COLON# **$slashOption[age]**
    Moderator#COLON# <@$authorID> 
    }{timestamp}{color:Random}{thumbnail:$userAvatar[$slashOption[user]]}}]
//The part that sends a message to log channel
$channelSendMessage[$getGuildVar[logchannelid];{newEmbed:{title:New Register}{description:**$username[$slashOption[user]]** (**$slashOption[user]**) registered successfully. Registered authority#COLON# **$username[$authorID]** (**$authorID**)}{thumbnail:$userAvatar[$slashOption[user]]}{color:Random}}]
//The part that sends a message to welcome channel
$channelSendMessage[$getGuildVar[welcomechannelid];{newEmbed:{title:Welcome}{description:<@$slashOption[user]> has joined us! Dont forget to have fun and follow the rules!}{thumbnail:$userAvatar[$slashOption[user]]}{color:Random}}]
//This part set user nickname
$setUserNickname[$slashOption[user];$slashOption[name] $getGuildVar[tag] $slashOption[age]
//This part remove "unregister" role on user
$removeRole[$guildID;$slashOption[user];$getGuildVar[unregisterroleid]]
//This part give "member" role
$giveRole[$guildID;$slashOption[user];$getGuildVar[memberroleid]]
//This part makes the command only for "Register Moderators"
$onlyForRoles[$getGuildVar[moderatorroleid];Only Register Moderators!{options:{ephemeral: true}}
{extraOptions:{interaction: true}}]    
    `
}]
