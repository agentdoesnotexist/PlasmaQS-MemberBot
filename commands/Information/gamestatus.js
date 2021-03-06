module.exports = class gamestatus {
    constructor() {
        this.settings = {
            name: "gamestatus",
            alias: ["gs"],
            permlevel: 1,
            disabled: false
        }
        this.about = {
            usage: "gamestatus [--flag (game/group)]",
            info: "Shows group/game status of the scifi community",
            category: "Information"
        }
    }
    async run(client, message, args) {
        const fetch = require(`node-fetch`);
        const { MessageEmbed } = require("discord.js");

        let flag = args[1];

        if (!flag) return message.channel.send(`category must be specified, stupid \`game\`, \`group\``);

        if (flag.toLowerCase() === "game") {

            let games = await fetch("https://games.roblox.com/v1/games?universeIds=1276997182%2C1096507818%2C31874845%2C123069416").then(res => res.json());

            let bhnpsPlaying = games.data[0].playing;
            let qserfPlaying = games.data[1].playing;
            let pbccPlaying = games.data[2].playing;
            let iisPlaying = games.data[3].playing;

            let info = new MessageEmbed()
                .setAuthor(`Game Statistics`, client.user.avatarURL({ size: 2048, format: "png" }))
                .setDescription(`**[PB]** PBCC: ${pbccPlaying}
**[QS]** QSERF: ${qserfPlaying}
**[II]** IIS: ${iisPlaying}
**[PI]** BHNPS: ${bhnpsPlaying}
`)
                .setFooter(`Total users playing: ${iisPlaying + pbccPlaying + bhnpsPlaying + qserfPlaying}`);

            return message.channel.send(info)

        } else if (flag.toLowerCase() === "group") {
            let plasmaMembers = await fetch(`https://groups.roblox.com/v1/groups/4192306`).then(res => res.json());
            let quantumMembers = await fetch(`https://groups.roblox.com/v1/groups/2847031`).then(res => res.json());
            let pinewoodMembers = await fetch(`https://groups.roblox.com/v1/groups/159511`).then(res => res.json());
            let innovationMembers = await fetch(`https://groups.roblox.com/v1/groups/157764`).then(res => res.json());

            let groupInfo = new MessageEmbed()
                .setAuthor("Group Statistics", client.user.avatarURL({ size: 2048, format: "png" }))
                .setDescription(`
**Plasma Inc:** ${plasmaMembers.memberCount}
**Quantum Science:** ${quantumMembers.memberCount}
**Pinewood Builders:** ${pinewoodMembers.memberCount}
**Innovation Inc:** ${innovationMembers.memberCount}`);

            return message.channel.send(groupInfo);
        } else return message.channel.send(`invalid category, smartass \`game\`, \`group\``);
    }
}