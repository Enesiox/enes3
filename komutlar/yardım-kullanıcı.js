const AsreaperDiscord = require('discord.js');
const AsreaperClient = new AsreaperDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const AsreaperEmbed = new AsreaperDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **e!davet** \n-> Botu davet edersiniz.
 **e!shardbilgi** \n-> Botun shard bilgilerini gösterir.
 **e!pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **e!randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **e!öneri** \n-> Bota öneri belirtirsiniz.
 **e!istatistik** \n-> Botun istatistiğini gösterir.
 **e!sonmesaj** \n-> Yazdığınız son mesajı gösterir.
`)
 .setTimestamp()
 message.channel.send(AsreaperEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};