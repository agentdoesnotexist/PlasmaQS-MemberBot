const { client, whitelist } = require("../index");
const { enhancedSecurity } = require("../config.json");

client.on("guildMemberAdd", async member => {
    let welcomechannel = client.channels.cache.get("678272867707781120");

    let getWhitelist = await whitelist.findOne({ where: { id: member.id}});

    if (!getWhitelist) {
        if (enhancedSecurity === false) return;
        
        welcomechannel.send(`**${member.user.tag}** is not whitelisted! Removing from server`);
        member.kick("Not whitelisted");
        return;
    } else {
        welcomechannel.send(`Welcome to Clown HQ, ${member.user}!`);
        return;
    }
})