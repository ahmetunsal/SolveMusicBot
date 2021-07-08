const Discord = require('discord.js');
const db = require('quick.db');

const mesaj = 

module.exports = {
name: 'rastgele',
description: 'rastgele işte',
async run (client, message, args){

const rastgelemesaj = mesaj[Math.floor(Math.random() *mesaj.length)]; //mesajların içinden rastgelemesaj verir<<<<<<<<<<

message.channel.send(rastgelemesaj); //rastgelemesajlardan birini mesaj olarak yaz.<<<<<<
}
}