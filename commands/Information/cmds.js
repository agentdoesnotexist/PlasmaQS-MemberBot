module.exports = class cmds {
    constructor() {
        this.name = `cmds`,
            this.alias = [`help`, `commands`],
            this.usage = `cmds`,
            this.permlevel = 1
    }
    run(client, message, args, config) {
        const Discord = require(`discord.js`);

        const cmdembed = new Discord.MessageEmbed()
            .setAuthor(`Commands`, client.user.avatarURL())
            .addField(`Fun`, '`cat`, `dog`, `donate`, `say`, `slut`')
            .addField(`Information`, '`cmds`, `currentinfo`, `ping`, `rbinfo`, `stats`, `uptime`, `yesoryes`')
            .addField(`Other`, '`banritual`, `eval`')
            .setFooter(`Powered by a heavily modified but totally not Discord.js`);
        return message.channel.send(cmdembed)
    }
}