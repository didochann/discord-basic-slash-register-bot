# For Basic Setup
> First, search and go Discord Developer Portal on your browser. Login your account, click "Create Application".Fill in the fields such as name, profile photo, description according to yourself.Press the three lines in the upper right, select "Bot". Click "Create Bot". Then "Reset Token", then "Copy".Go to index.js file and delete YOUR TOKEN from token:"YOUR TOKEN" and paste your own token inside the quotation marks (If you are using Replit or Glitch, please read "For Replit and Glitch" on this file).

**Little reminder**: First use .c.register command on your server. (Just one time.)


# Advanced Setup
> If you don't want autorole: go to index.js, delete the code that says **"Autorole" ("bot.joinCommand({..codes})")**. (If you can use it later, just put "//" at the beginning of bot.joinCommand({..codes})
> You can use this logic for any command you want to disable. (Other features can also be commands/register.js.)

# For "Replit" and "Glitch"
> **Replit**: Replace (token:"YOUR TOKEN") with (token:process.env.TOKEN) [( ) are for indication only, do not write them.] and go Secrets > New Secret > Name: TOKEN > Value: Paste Your Token Here.

> **Glitch**: I don't use glitch but it sure looks similar. You can figure it out with a little digging.

**Still not working? Is the information here insufficient for your request? Please contact me on Discord (didochann) and we will solve your problem together.**

**Little reminder: I used "Google Translate" while writing these. If there are mistakes and omissions, I apologize for my English.**