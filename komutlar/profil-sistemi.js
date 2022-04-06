const Discord = require ("discord.js");
let config = require("../utils/errors.js");

exports.run = (client, message) => {

const GweepEMBED = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" **| E N 3 S |**")
.setDescription(`

** Profil Sistemi | Komut Listesi**
**-------------------------------------------------**
**• e!bayrak-ayarla :**   Profil bayrağı belirtir.  
**• e!cinsiyet-ayarla :** Profil cinsiyet belirtir. 
**• e!isim-ayarla :** Profil ismini belirtir.       
**• e!soyisim-ayarla :**  Profil soy ismi belirtir. 
**• e!yaş-ayarla :** Profil yaşı belirtir.          
**• e!profil :**  Kişinin profilini gösterir.          
**-------------------------------------------------**
`)

.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(GweepEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'profilsistemi', 
    description: 'yardım',
    usage: 'yardım'
};