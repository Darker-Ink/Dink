import Client from '../../src/index'

const client = new Client({
    intents: ["All"],
    debug: false
})

client.on('Ready', async (cl) => {
    console.log(`${cl.user.tag} is ready!`)
})

client.on('MessageCreate', async (msg) => {
    if (msg.author.bot) return;

    if (msg.content == '?ping') {
        msg.channel.send(`The ping is ${client.ws.ping}ms`)
    } else if (msg.content == '?uptime') {
        let seconds = Math.floor((Date.now() - client.uptime) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;
       
        msg.channel.send(`The bot has been online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
    }
})


client.login("")