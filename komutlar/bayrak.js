const Discord = require("discord.js");
const db = require("quick.db");
let config = require("../utils/errors.js");

exports.run = async (client, message, args) => {

let bayrak = args.slice(0).join(" ");
if (!bayrak)

return message.channel.send(
 "**| E N 3 S  |** \n\n **Bayrak belirtin.** `(Emoji)` \**Örnek:** **!bayrak-ayarla** :flag_tr: \n `**Tüm komutlara erişmek için -> e!yardım** \n\n**ÜlkücüOcakları**"
    );
db.set(`Asreaperbayrak_${message.author.id}`, bayrak)
return message.channel.send(
    "**Ülkücü En3s** \n **------------------------------------** \n**• Bayrak başarıyla ayarlandı.** \n **• Belirtilen Bayrak ->** `" +
    bayrak +
    "` \n`• !yardım` **Yazarak tüm komutlara erişebilirsiniz.** \n **------------------------------------**\n**| E N 3 S |**"
    );

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};

exports.help = {
  name: "bayrak-ayarla",
  description: "bayrak-ayarla",
  usage: "bayrak-ayarla",
  kategori: "Profil"
};
