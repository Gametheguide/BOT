const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "/";
Client.on("ready", ()=>{
    console.log("MONEY MONEY MONEY!")
Client.user.setActivity("BTWbs do /Help")
})

Client.on("message", (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "Help")){
        message.channel.send(message.author + " Here yah go squad fam! (use '/' for all these different commands)");
        message.channel.send("'SafeROM' for safe ROM sites.");
        message.channel.send("'NoBuenoROM' for bad ROM sites.");
        message.channel.send("'Emulators' for link to emulators.");
        message.channel.send("'Performance' for ways to improve preformance in whatever game.");
        message.channel.send("REMEMBER - If you don't know what you are doing, use a virtual machine (and avoid .exe for ROMS).");
    }

    if(message.content.startsWith(prefix + "SafeROM")){
       message.channel.send(message.author + " PIRACY iS N0w LeGAL!");
       message.channel.send("edgeemu.net | Edge Emulation");
       message.channel.send("Message @Gameguide to add sum m0re");
    }

    if(message.content.startsWith(prefix + "NoBuenoROM")){
        message.channel.send(message.author + " THESE ARE THE GREAT SINS OF THE PERSONS REEE!");
        message.channel.send("Romsmania (no link 4 u)");
        message.channel.send ("Message @Gameguide to add sum m0re");
    }

    if(message.content.startsWith(prefix + "Emulators")){
        message.channel.send(message.author + " YOU HAVE BEEN BLESED BY THE EMULATORS!");
        message.channel.send("https://www.emuparadise.me/Emulators.php | EMU PARADISE (my OC)");
    }

    if(message.content.startsWith(prefix + "Performance")){
        message.channel.send(message.author + " TOaSTer BEgoNE!");
        message.channel.send("https://www.youtube.com/watch?v=GlmTSVUYNrs | FOR TF2");
        message.channel.send("Message @Gameguide to add sum m0re");
    }

    if(message.content.startsWith(prefix + "Alfaro")){
        message.channel.send("Guess what, " + message.author + " THERE'S A NEW QUIZLET SET!!!");

    }
})
Client.login(process.env.token);

