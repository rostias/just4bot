const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {
  
    const user = message.mentions.users.first()
    if(!user) return message.channel.send("** Öpmek istediğin kişiyi etiketlemelisin**")
  
   message.channel.send({
     embeds: [
       new EmbedBuilder()
       .setColor("#36393F")
       .setDescription(`<@${user.id}> **adlı kişiyi öptün.**`)
       .setImage("https://giphy.com/gifs/bear-milk-and-mocha-Ie4CIIvQS0bk3zwZlM?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=https://giphy.com/")
     ]
   })

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "öp"
};
