const discord = require('discord.js');
exports.run = async (client, message, args) => {
  const gweepembed = new discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setDescription(`https://discord.com/channels/${message.guild.id}/${message.author.lastMessageChannelID}/${message.author.lastMessageID}`)
  message.channel.send(gweepembed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["son-mesaj"],
  permLevel: 0
}

exports.help = {
  name: 'sonmesaj'
};