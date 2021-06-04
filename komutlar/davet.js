const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
exports.run = (client, message) => {
  const GweepEmbed = new GweepDiscord.MessageEmbed();
  GweepEmbed.setColor(0x36393F)
  GweepEmbed.setDescription(` Gweep Creative davet etmek için [buraya](Link) tıkla!`)

  message.channel.send(GweepEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};