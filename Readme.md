# Dink

This is pretty much a joke Discord wrapper, I use it myself for some stuff but I wouldn't recommend using it. Its horrible and while I will update it its never going to be good as any other project, Check out Discord.js or Eris if you want a good wrapper.

This handles reconnects and stuff. It also caches guilds & channels.

## Credits

I used Collections from discord.js thats about all I can remember as of writing this

# Examples

Since I'm too lazy to add to npm you'll need to git clone this repo and then run `npm install` in the directory.
Then you can import the code

```js
import Dink from './src/index.js'

const client = new Dink({
    intents: ["ALL"] // use what you want (I do not suggest using all)
})

client.on('Ready', (cl) => {
    console.log(`Logged in as ${cl.user.username}`)
})

client.on('MessageCreate', (msg) => {
    if (msg.content === 'ping') {
        msg.channel.send('pong')
    }
})

client.login('token')
```

### Facts

The name came from Panda (A Owner of wick bot)