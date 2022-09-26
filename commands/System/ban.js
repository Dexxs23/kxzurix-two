const { sck1 } = require('../../lib/core')
const { tlang } = require('../../lib/scraper')

module.exports = {
   name: 'tempban',
   category: 'owner',
   desc: 'Bans user from using bot.',
   async exec(citel, Void,args,isCreator) {
    if (!isCreator) return citel.reply(tlang().owner)
    const mentionByTag = citel.mtype == "extendedTextMessage" && citel.message.extendedTextMessage.contextInfo != null ? citel.message.extendedTextMessage.contextInfo.mentionedJid : [];
    try {
     let mention = mentionByTag
     let users = await (mention[0]) || citel.msg.contextInfo.participant
   if (!users) return citel.reply(`❌ Bitte Markiere eine Person ${tlang().greet}.`)
let pushnamer = Void.getName(users);
  sck1.findOne({ id : users }).then(async(usr) => {
        if (!usr) {
  
      await new sck1({ id: users, ban: "true" }).save()

return citel.reply(` ${pushnamer} wurde 7 Tage Gebannt`)
    } else {
     // console.log(usr.ban)
    if(usr.ban == "true") return citel.reply(`${pushnamer} _Permanent GEBANNT_`)
                 await sck1.updateOne({ id: users }, {ban: "true"})
        //   console.log("user banned")
             return citel.reply(`Erfolgreich wurde ${pushnamer} für 7 tage Gebannt`)
           }
       })
            } catch (e) {
              console.log(e)
return citel.reply("Please mention any user.❌ ")
    }


   }
}