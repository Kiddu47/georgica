// Packages Needed
const Discord = require('discord.js');
const client = new Discord.Client();
let tokenfile = require('./token.json');

// Variables
const prefix = '=';
const ownerID = '320577538399404032';

const serverStats = {
  guildID: '500224890033537024',
  totalUsersID: '503230014834212891',
  memberCountID: '503230056554823684',
  botCountID: '503230079351128064',
};

// Listener Events
client.on('message', message => {

  // Variables
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();

  // Return Statements
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  // Comand Handler
  try {

    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);

  } catch (e) {
    console.log(e.stack)
  }

});

client.on('ready', () => console.log ('Launched'));


// Login to discord
client.login(tokenfile.TOKEN);


client.on('message', message => {
    if(message.content.startsWith('-mass')) {
    if(message.author.id === "320577538399404032" ||
message.author.id === "320577538399404032"){
       let args = message.content.split(" ").slice(1);
       var argresult = args.join(" ")
const argsresult = args.join(" ")
       let reason = args.join(" ")
    if(!args[1]) {  }
    if(args[1]) {
message.channel.guild.members.forEach(member => {{
member.send(reason)
message.delete() }})}}} });

client.on('ready', () => {
  client.user.setGame('https://discord.gg/PW8FdcS - OXYGEN', 'https://www.twitch.tv/streamerhouse')
})
