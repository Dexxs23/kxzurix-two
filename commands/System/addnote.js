const { addnote } = require('../../lib/scraper')

module.exports = {
   name: 'addnote',
   category: 'owner',
   desc: 'Adds a note on db.',
   async exec(citel, Void,args) {
    if (!args) return citel.reply("🔍 Please provide me a valid gist url.")
       await addnote(args.join(" "))
       citel.reply(`New note ${args.join(" ")} added in mongodb.`)

   }
}
