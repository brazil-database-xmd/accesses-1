const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsEliteProTecheUser, getContentType } = require('baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const {translate} = require('@vitalets/google-translate-api')
const googleTTS = require('google-tts-api')
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const isAdmin = require('./lib/isAdmin')
//bug database
const { bugvip1 } = require('./bug/bugvip1')
const { bugvip2 } = require('./bug/bugvip2')
const { bugvip3 } = require('./bug/bugvip3')
const { bugvip4 } = require('./bug/bugvip4')
const { bugvip5 } = require('./bug/bugvip5')
const { bugvip6 } = require('./bug/bugvip6')
const wkwk = fs.readFileSync(`./bug/bug.mp3`)
const xsteek = fs.readFileSync(`./bug/bug.webp`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteelite = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const Stickerelite = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const Imageelite = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const Videoelite = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const Docelite = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const Zipelite = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const Apkelite = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var eliteytimewisher = `Life is what you make of it.`
 }
 if(time2 < "19:00:00"){
var eliteytimewisher = `Dreams don't work unless you do.`
 }
 if(time2 < "18:00:00"){
var eliteytimewisher = `Believe you can, and you're halfway there.`
 }
 if(time2 < "15:00:00"){
var eliteytimewisher = `Create your own luck.`
 }
 if(time2 < "11:00:00"){
var eliteytimewisher = `Do more, worry less.`
 }
 if(time2 < "05:00:00"){
var eliteytimewisher = `Make it happen.`
 } 
module.exports = EliteProTech = async (EliteProTech, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await EliteProTech.decodeJid(EliteProTech.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await EliteProTech.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(EliteProTech, m, premium);
        const { isSenderAdmin, isBotAdmin } = m.isGroup ?
    await isAdmin(EliteProTech, m.chat, m.sender) :
    { isSenderAdmin: false, isBotAdmin: false };

//DEFAULT REPLY SETTINGS//
const reply = (teks) => {
EliteProTech.sendMessage(m.chat,
{ text: teks,
contextInfo:{
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
newsletterJid: "120363287352245413@newsletter",
},  
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `𝗘𝗟𝗜𝗧𝗘-𝗣𝗥𝗢-𝗩𝟭`,
"body": `Multiple Devices WhatsApp Bot`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./EliteProMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}


const eliteimun = (texto) => {
EliteProTech.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}


async function loading () {
var elitelod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"*🧑‍💻𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳🧑‍💻*"
]
let { key } = await EliteProTech.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < elitelod.length; i++) {
await EliteProTech.sendMessage(from, {text: elitelod[i], edit: key });
}
}

async function loadingbug() {
    const elitelods = [
    "⏳ [░░░░░░░░░░] 10%",
    "⏳ [█░░░░░░░░░] 10%",
    "⏳ [███░░░░░░░] 30%",
    "⏳ [█████░░░░░] 50%",
    "⏳ [███████░░░] 50%",
    "⏳ [█████████░] 80%",
    "✅ [██████████] 100%",
    "*🚀 Loading Completed Successfully! 🚀*",
    "*Update not yet publish*",
];
    let { key } = await EliteProTech.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' })
    
    for (let i = 0; i < elitelods.length; i++) {
        await EliteProTech.sendMessage(from, { text: elitelods[i], edit: key });
    }
}

        if (!EliteProTech.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            EliteProTech.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        EliteProTech.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        EliteProTech.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        EliteProTech.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let eliterecordin = ['recording','composing']
        let eliterecordinfinal = eliterecordin[Math.floor(Math.random() * eliterecordin.length)]
        EliteProTech.sendPresenceUpdate(eliterecordinfinal, from)

        }
        
        if (autobio) {
          EliteProTech.updateProfileStatus(`ᴇʟɪᴛᴇᴘʀᴏ ɪꜱ ᴏɴʟɪɴᴇ ❯ ϙᴜᴏᴛᴇꜱ: ᴅᴏɴ'ᴛ ᴡᴀᴛᴄʜ ᴛʜᴇ ᴄʟᴏᴄᴋ; ᴅᴏ ᴡʜᴀᴛ ɪᴛ ᴅᴏᴇꜱ. ᴋᴇᴇᴘ ɢᴏɪɴɢ.✨`).catch(_ => _)
        }
        
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return EliteProTech.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await EliteProTech.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await EliteProTech.getName(i)}\nFN:${await EliteProTech.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
//CHAT COUNTER COUNSEL (CONSOLE LOG)//
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let Bhosdikaelite of VoiceNoteelite) {
if (budy === Bhosdikaelite) {
let audiobuffy = fs.readFileSync(`./EliteProMedia/audio/${Bhosdikaelite}.mp3`)
EliteProTech.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let Bhosdikaelite of Stickerelite){
if (budy === Bhosdikaelite){
let stickerbuffy = fs.readFileSync(`./EliteProMedia/sticker/${Bhosdikaelite}.webp`)
EliteProTech.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let Bhosdikaelite of Imageelite){
if (budy === Bhosdikaelite){
let imagebuffy = fs.readFileSync(`./EliteProMedia/image/${Bhosdikaelite}.jpg`)
EliteProTech.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let Bhosdikaelite of Videoelite){
if (budy === Bhosdikaelite){
let videobuffy = fs.readFileSync(`./EliteProMedia/video/${Bhosdikaelite}.mp4`)
EliteProTech.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
EliteProTech.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let Bhosdikaelite of Apkelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./EliteProMedia/apk/${Bhosdikaelite}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
EliteProTech.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let Bhosdikaelite of Zipelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./EliteProMedia/zip/${Bhosdikaelite}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let Bhosdikaelite of Docelite) {
if (budy === Bhosdikaelite) {
let buffer = fs.readFileSync(`./EliteProMedia/doc/${Bhosdikaelite}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    reply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                EliteProTech.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
//STARTING POINT FOR ALL CMDS//      
switch (command) {
case 'addprem':
if (!isCreator) return reply(mess.owner)
if (args.length < 2)
return reply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
if (m.mentionedJid.length !== 0) {
for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    reply("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    reply("Success")
                }
break                
case 'ping': {
  const start = Date.now();
  await EliteProTech.sendMessage(m.chat, {
  react: { text: "🚀", key: m.key }
});
  const latency = Date.now() - start;

  EliteProTech.sendMessage(m.chat, {
    text: `*BOT PINGING:* *${latency}MS*`,
    contextInfo: {
forwardingScore: 2025,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
newsletterJid: "120363287352245413@newsletter",},      
      externalAdReply: {
        showAdAttribution: true,
        title: `${botname}`,
        body: `${pushname}, BOT IS ACTIVE: ${runtime(process.uptime())}`,
        thumbnailUrl: 'https://i.ibb.co/svNLtkqf/20250128-021109.jpg',
        sourceUrl: global.link,
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: m });
  break;
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    EliteProTech.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
			break
			case 'define': 
if (!q) return reply(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return reply(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   EliteProTech.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return reply(`*${q}* isn't a valid text`)
    }
    
//Savecontacts in group
break
case 'savecontact': case 'svcontact': case 'vcf': {
if (!m.isGroup) return reply(mess.group)
                  if (!isSenderAdmin) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
let cmiggc = await EliteProTech.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
EliteProTech.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '*Group: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}

//Send contacts in group
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return reply(mess.group)
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
EliteProTech.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}

//Contact tag
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!m.mentionedJid[0]) return reply('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
EliteProTech.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
//Alive message
break
case 'alive': {
  await EliteProTech.sendMessage(m.chat, {
    react: { text: "🎶", key: m.key }
  });
  
  try {
    // Fetch music URLs from API
    const response = await fetch('https://raw.githubusercontent.com/Cyrilix-XMD/cyrilix-store/refs/heads/main/music-url.json');
    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error("No music found in API.");
    }
    
    // Select a random audio from the API response
    const randomAudio = data[Math.floor(Math.random() * data.length)];
    
    EliteProTech.sendMessage(m.chat, {
      audio: { url: randomAudio }, // Sends a random audio file
      mimetype: 'audio/mp4',
      ptt: true, // Set to true for voice note style
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
          newsletterJid: "120363287352245413@newsletter",
        },
        externalAdReply: {
          showAdAttribution: true,
          title: "😱Message: 🌀ElitePro Is Alive And Active",
          body: `for: ${runtime(process.uptime())}`,
          thumbnailUrl: 'https://i.ibb.co/CNFGVhK/20250204-154801.jpg', // Replace with your thumbnail URL
          sourceUrl: link, // Replace with your channel link
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    });
    
  } catch (error) {
    console.error("Error fetching music:", error);
    reply("❌ Failed to get music from API.");
  }
  break;
}
break
case 'flux':{
  if (!text) return reply(`*Prefix* flux Cat\n\n*Example:* .flux cat`);
}

try {

    const apiUrl = `https://apis.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;
 await EliteProTech.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `👨‍💻 *Flux Image Generator*\n\n📦 *Prompt:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`,
    }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
  
  case 'mediafire': {
    if (!text) return reply(`*Example*: ${prefix + command} https://www.mediafire.com/file/rmpx6iv7kiboki3/ELITEPRO-master+(2).zip/file`);

    try {
        
        await EliteProTech.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const apiUrl = `https://apis.davidcyriltech.my.id/mediafire?url=${encodeURIComponent(text)}`;
        const apiResponse = await axios.get(apiUrl);

    
        if (apiResponse.data && apiResponse.data.downloadLink) {
            const { fileName, mimeType, downloadLink } = apiResponse.data;


            await EliteProTech.sendMessage(m.chat, {
                document: { url: downloadLink },
                mimetype: mimeType,
                fileName: fileName,
                caption: `📦 *File Name:* ${fileName}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
            }, { quoted: m });
        } else {

            reply(`*Failed to fetch file details! Please check the MediaFire URL and try again.*`);
        }
    } catch (error) {

        console.error('Error during MediaFire command:', error);
        reply(`*An error occurred while processing your request. Please try again later.*`);
    }
    break;
}

case 'wallpaper': {
  if (!text) {
    return reply(`*𝙿𝚛𝚎𝚏𝚒𝚡:* ${command} Naruto`);
  }
  
  function getRandomIndexes(max, count) {
    const indexes = [];
    while (indexes.length < count && indexes.length < max) {
      const rand = Math.floor(Math.random() * max);
      if (!indexes.includes(rand)) indexes.push(rand);
    }
    return indexes;
  }
  
  try {
    const apiUrl = `https://weeb-api.vercel.app/wallpaper?query=${encodeURIComponent(text)}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      return reply(`*ERROR!!*\n\n> Failed to fetch wallpapers. Status: ${response.status}`);
    }
    
    const imageUrls = await response.json();
    
    if (!imageUrls.length) {
      return reply(`No wallpapers found for "${text}". Try a different keyword.`);
    }
    
    const maxResults = Math.min(imageUrls.length, 5); // send up to 5 wallpapers
    const randomIndexes = getRandomIndexes(imageUrls.length, maxResults);
    const selectedImages = randomIndexes.map(i => imageUrls[i]);
    
    for (let i = 0; i < selectedImages.length; i++) {
      await EliteProTech.sendMessage(m.chat, {
        image: { url: selectedImages[i] },
        caption: `🎨 *Wallpaper Search*\n\n📄 Search: "${text}"\n🖼 Wallpaper ${i + 1}/${maxResults}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`,
      }, { quoted: m });
    }
  } catch (error) {
    console.error('Wallpaper Error:', error);
    reply(`*AN ERROR OCCURRED!!*\n\n> ${error.message || error}`);
  }
  break;
}
//Facebook Ig tiktok
case 'tiktok':
case 'facebook':
case 'aio':
case 'instagram': {
  if (!text) return reply(`Give Me A Video Link \n\n*Example:* ${prefix + command} https://www.facebook.com/reel/123456`);
  await EliteProTech.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });

  try {


    const apiUrl = `https://apis.davidcyriltech.my.id/download/aio?url=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);

    if (response.data.success) {
      const { title, low_quality, high_quality } = response.data.video;

      const isDirectDownloadHD = high_quality.includes("tinyurl");
      const isDirectDownloadSD = low_quality.includes("tinyurl");

      if (isDirectDownloadHD || isDirectDownloadSD) {
        if (isDirectDownloadHD) {
          await EliteProTech.sendMessage(m.chat, {
            video: { url: high_quality },
            mimetype: 'video/mp4',
            fileName: `${title}_HD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
          }, { quoted: m });
        }
        if (isDirectDownloadSD) {
          await EliteProTech.sendMessage(m.chat, {
            video: { url: low_quality },
            mimetype: 'video/mp4',
            fileName: `${title}_SD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
          }, { quoted: m });
        }
      } else {
        await EliteProTech.sendMessage(m.chat, { react: { text: `📥`, key: m?.key } });


        const hdBuffer = await axios.get(high_quality, { responseType: 'arraybuffer' });
        const sdBuffer = await axios.get(low_quality, { responseType: 'arraybuffer' });

        if (high_quality) {
          await EliteProTech.sendMessage(m.chat, {
            video: Buffer.from(hdBuffer.data),
            mimetype: 'video/mp4',
            fileName: `${title}_HD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* HD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
          }, { quoted: m });
        }
        if (low_quality) {
          await EliteProTech.sendMessage(m.chat, {
            video: Buffer.from(sdBuffer.data),
            mimetype: 'video/mp4',
            fileName: `${title}_SD.mp4`,
            caption: `🎥 *Title:* ${title}\n*Quality:* SD\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
          }, { quoted: m });
        }
      }
    } else {
      reply("❌ Unable to fetch the video. Please check the URL and try again.");
    }
  } catch (error) {
    console.error('Error in AIO Downloader:', error.message);
    reply("❌ An error occurred while processing your request. Please try again later.");
  }
  break;
}
//Cmd for profile picture 
case 'getpp': {
  let target;
  
  // If it's a reply to someone in a group or private chat
  if (m.message?.extendedTextMessage?.contextInfo?.participant) {
    target = m.message.extendedTextMessage.contextInfo.participant;
  }
  // If in a private chat, get the other person's profile picture
  else if (!m.isGroup) {
    target = m.chat;
  }
  // If user mentions someone, get their profile picture
  else if (m.message?.extendedTextMessage?.contextInfo?.mentionedJid) {
    target = m.message.extendedTextMessage.contextInfo.mentionedJid[0];
  }
  // If user provides a number (for private chat)
  else if (args[0]) {
    target = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  }
  // Otherwise, get sender's own profile picture
  else {
    target = m.sender;
  }
  
  let username = target.split('@')[0];
  let profileCaption = `*@${username} profile picture*`;
  
  try {
    ppuser = await EliteProTech.profilePictureUrl(target, 'image');
  } catch (err) {
    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
  }
  
  ppelite = await getBuffer(ppuser);
  
  EliteProTech.sendMessage(from, {
    image: ppelite,
    caption: profileCaption,
    mentions: [target]
  }, { quoted: m });
}
break;
break
case 'quotes':
const quoteelitey = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteelitey.data.quote.body}\n\n*${themeemoji} Author:* ${quoteelitey.data.quote.author}`
return reply(textquotes)

   break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return reply(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
break
case 'play': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });
        
        const yts = require("yt-search");
        const search = await yts(text);
        const video = search.videos[0];
        
        if (!video) return reply(`*No results found for:* ${text}`);
        
        // 🎨 Send video info preview
        const body = `╭━━━━━━━━━\n` +
            `┃ *ELITEPRO MUSIC - DOWNLOADER*\n\n` +
            `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
            `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
            `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
            `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
            `> *ᴜʀʟ:* ${video.url}\n\n` +
            `┃ *Enjoy your music®*\n` +
            `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
            `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });
        
        // 🎧 Try first API (nexoracle)
        const api1 = `https://api.nexoracle.com/downloader/yt-audio2?apikey=bde27483eae0f54a6e&url=${encodeURIComponent(video.url)}`;
        let response = await axios.get(api1);
        let title, audio, mimetype;
        
        if (response.data?.status === 200 && response.data.result?.audio) {
            title = response.data.result.title;
            audio = response.data.result.audio;
            mimetype = response.data.result.mimetype || 'audio/mp4';
        } else {
            // 🔁 Try fallback API (baguss)
            const api2 = `https://apii.baguss.web.id/downloader/ytmp3?apikey=bagus&url=${encodeURIComponent(video.url)}`;
            response = await axios.get(api2);
            
            if (response.data?.success && response.data.link) {
                title = response.data.title;
                audio = response.data.link;
                mimetype = 'audio/mp4'; // Fallback API doesn't specify, use default
            }
        }
        
        if (!audio) return reply(`*Failed to fetch the song! Please try again later.*`);
        
        // ✅ Send audio with external preview
        await EliteProTech.sendMessage(m.chat, {
            audio: { url: audio },
            mimetype,
            fileName: `${title}.mp3`,
            ptt: false,
            contextInfo: {
                externalAdReply: {
                    title,
                    body: `🎵 High Quality • ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ`,
                    thumbnailUrl: video.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error in play:', error);
        reply(`_*An error occurred while downloading.*_\n> Please try again later.`);
    }
    break;
}
case "ytmp3": {
  if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);

  try {

    await EliteProTech.sendMessage(m.chat, { react: { text: `🎵`, key: m.key } });


    const yts = require("yt-search");
    const search = await yts(text);
    const video = search.videos[0];

    if (!video) {
      reply(`*No results found for:* ${text}`);
      return;
    }


    const body = `╭━━━━━━━━━\n` +
      `┃ *ELITEPRO MUSIC - DOWNLOADER*\n\n` +
      `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
      `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
      `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
      `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
      `> *ᴜʀʟ:* ${video.url}\n\n` +
      `┃ *Enjoy your music®*\n` +
      `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
      `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;

    await EliteProTech.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption: body
    }, { quoted: m });


    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiResponse = await axios.get(apiUrl);

    if (apiResponse.data.success) {
      const { download_url, title, thumbnail } = apiResponse.data.result;

      await EliteProTech.sendMessage(m.chat, {
        audio: { url: download_url },
        mimetype: 'audio/mp4',
        fileName: `${title}.mp3`,
        caption: `🎧 *Here's your song:*\n> *Title:* ${title}`
      }, { quoted: m });
    } else {
      reply(`*Failed to fetch the song! Please try again later.*`);
    }
  } catch (error) {
    console.error('Error during /play command:', error);
    reply(`_*An error occur while downloading*_> Please try ytmp3`);
  }
  break;
} 
case 'video': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker\nOr: ${prefix + command} https://youtube.com/watch?v=abc123`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: "📽️", key: m?.key } });
        
        const yts = require("yt-search");
        
        function extractYouTubeID(url) {
            const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
            return match ? match[1] : null;
        }
        
        const isUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(text);
        let video;
        
        if (isUrl) {
            const videoId = extractYouTubeID(text);
            if (!videoId) return reply("❌ Invalid YouTube URL.");
            const info = await yts({ videoId });
            if (!info || !info.title) return reply("❌ Couldn't fetch video info from the link.");
            video = info;
        } else {
            const search = await yts(text);
            if (!search || !search.all || search.all.length === 0) {
                return reply("❌ Couldn't find a video. Try another search.");
            }
            video = search.all[0];
        }
        
        const body = `╭━━━━━━━━━\n` +
            `┃ *ELITEPRO VIDEO - DOWNLOADER*\n\n` +
            `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
            `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
            `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
            `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
            `> *ᴜʀʟ:* ${video.url}\n\n` +
            `┃ *Enjoy your video®*\n` +
            `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
            `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });
        
        let result;
        
        // 🔹 First: NexOracle
        try {
            const nx = await axios.get(`https://api.nexoracle.com/downloader/yt-video2?apikey=34e93682c3603be0f9&url=${encodeURIComponent(video.url)}`);
            if (nx.data?.result?.video) {
                result = {
                    title: nx.data.result.title,
                    url: nx.data.result.video,
                    quality: nx.data.result.quality
                };
            } else throw new Error();
        } catch {
            // 🔸 Fallback 1: Dycoders
            try {
                const dy = await axios.get(`https://restapi.dycoders.xyz/api/ytdl?url=${encodeURIComponent(video.url)}&format=mp4&apikey=memberdycoders`);
                if (dy.data?.status && dy.data.result?.download) {
                    result = {
                        title: dy.data.result.title,
                        url: dy.data.result.download,
                        quality: dy.data.result.format
                    };
                } else throw new Error();
            } catch {
                // 🔸 Fallback 2: GiftedTech
                try {
                    const gift = await axios.get(`https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(video.url)}`);
                    if (gift.data?.result?.download_url) {
                        result = {
                            title: gift.data.result.title,
                            url: gift.data.result.download_url,
                            quality: gift.data.result.quality
                        };
                    } else throw new Error();
                } catch {
                    return reply(`❌ Download failed. Please try again later.`);
                }
            }
        }
        
        await EliteProTech.sendMessage(m.chat, {
            video: { url: result.url },
            mimetype: 'video/mp4',
            caption: `🎬 *Title:* ${result.title}\n🎞 *Quality:* ${result.quality}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`,
            contextInfo: {
                externalAdReply: {
                    title: result.title,
                    body: `🎥 ${result.quality}`,
                    thumbnailUrl: video.thumbnail,
                    mediaType: 2,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
        
    } catch {
        reply(`❌ *An error occurred while processing your request.* Try again later.`);
    }
    
    break;
}
case 'ytmp4': {
    if (!text) return reply(`*Example:* ${prefix + command} Alan Walker - Alone`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: "🎬", key: m.key } });
        
        const yts = require('yt-search');
        const search = await yts(text);
        const video = search.videos[0];
        
        if (!video) return reply(`*No results found for:* ${text}`);
        
        const body = `╭━━━━━━━━━\n` +
            `┃ *ELITEPRO VIDEO - DOWNLOADER*\n\n` +
            `> *ᴛɪᴛʟᴇ:* ${video.title}\n\n` +
            `┃ *ᴠɪᴇᴡꜱ:* ${video.views}\n` +
            `┃ *ᴅᴜʀᴀᴛɪᴏɴ:* ${video.timestamp}\n` +
            `┃ *ᴜᴘʟᴏᴀᴅᴇᴅ:* ${video.ago}\n\n` +
            `> *ᴜʀʟ:* ${video.url}\n\n` +
            `┃ *Enjoy your video®*\n` +
            `╰━━━━━━━━━━━━━━━━━━┈⊷\n` +
            `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;
        
        await EliteProTech.sendMessage(m.chat, {
            image: { url: video.thumbnail },
            caption: body
        }, { quoted: m });
        
        // Use GiftedTech API to get video download link
        const apiUrl = `https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(video.url)}`;
        const response = await axios.get(apiUrl);
        
        const result = response.data?.result;
        if (!result?.download_url) return reply("❌ Failed to get video. Try again later.");
        
        await EliteProTech.sendMessage(m.chat, {
            video: { url: result.download_url },
            caption: `🎬 *${result.title}*\n📥 Quality: ${result.quality}`,
            mimetype: "video/mp4",
            fileName: `${result.title}.mp4`,
            contextInfo: {
                externalAdReply: {
                    title: `${result.title}`,
                    body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ`,
                    thumbnailUrl: result.thumbnail,
                    mediaType: 2,
                    renderLargerThumbnail: true
                },
            },
        }, { quoted: m });
        
    } catch (error) {
        console.error('Error during /video command:', error);
        reply(`❌ *An error occurred while processing your request.* Please try again later.`);
    }
}
break
case 'img': case 'anime': case 'image': {
  if (!text) return reply(`*Example*: ${prefix + command} Anime`);
  
  try {
    await EliteProTech.sendMessage(m.chat, { react: { text: `🎨`, key: m.key } });
    
    const apiUrlForImages = `https://img.hazex.workers.dev/?prompt=${encodeURIComponent(text)}`;
    
    // Generate and send 5 images
    const footer = "\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*";
    for (let i = 0; i < 5; i++) {
      await EliteProTech.sendMessage(m.chat, {
        image: { url: apiUrlForImages }, // URL is already constructed
        caption: footer
      }, { quoted: m });
    }
    
  } catch (error) {
    console.error('Error fetching images:', error);
    reply(`*An error occurred while fetching images. Please try again later.*`);
  }
  break;
}
case 'url': {
  try {
    // Required libraries
    const axios = require('axios');
    const FormData = require('form-data');
    const fs = require('fs-extra');
    
    // Function to upload a file to Catbox and return the URL
    async function uploadToCatbox(filePath) {
      if (!fs.existsSync(filePath)) throw new Error("File does not exist");
      try {
        const data = new FormData();
        data.append('reqtype', 'fileupload');
        data.append('userhash', '');
        data.append('fileToUpload', fs.createReadStream(filePath));
        
        const config = {
          method: 'POST',
          url: 'https://catbox.moe/user/api.php',
          headers: {
            ...data.getHeaders(),
          },
          data: data,
        };
        
        const api = await axios.request(config);
        return api.data.trim();
      } catch (error) {
        console.error('Error uploading to Catbox:', error.message);
        throw new Error('Failed to upload to Catbox');
      }
    }
    
    // Check if a reply message exists (image, video, or audio)
    if (!m.quoted) return reply("Please reply to an image, video, or audio file.");
    
    let mediaPath;
    try {
      // Attempt to download the media file
      mediaPath = await EliteProTech.downloadAndSaveMediaMessage(m.quoted);
    } catch (err) {
      console.error("Error while downloading media:", err);
      return reply("❌ Unable to download the media file. Please try again.");
    }
    
    if (!mediaPath) {
      return reply("❌ No media file detected. Please reply to an image, video, or audio message.");
    }
    
    // Upload the file using the integrated function
    const fileUrl = await uploadToCatbox(mediaPath);
    
    // Delete the local file after uploading
    fs.unlinkSync(mediaPath);
    
    // Send the uploaded URL as a reply
    reply(`✅ Successfully uploaded! Here is your URL:\n${fileUrl}`);
  } catch (error) {
    console.error("Error while uploading to Catbox:", error);
    reply("❌ Oops, something went wrong while creating your URL.");
  }
  break;
}
break
case 'chatgpt':
case 'ai':
case 'gpt': {
  if (!text) return m.reply("Hi dear, how can i help you today?")
  let prompt = `
Your ElitePro, an artificial intelligence created by Chinedu. Chinedu other name is Cyrilix-XMD. Chat naturally without asking repetitive questions, and do not ask, 'How can I assist you?'

- **Owner & Creator:** Chinedu
- **WhatsApp:** [2347047504860](https://wa.me/2347047504860)  
- **Telegram:** [t.me/elitepro_md](https://t.me/elitepro_md)  
- **Company Website:** [https://eliteprotech.vercel.app/](https://eliteprotech.vercel.app/)  
- **Personal Portfolio:** [https://eliteprotech.vercel.app/](https://eliteprotech.vercel.app/)  
- **WhatsApp Channel:** [https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g](https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g)  
- **GitHub Project Site:** [https://eliteproverified.vercel.app/](https://eliteproverified.vercel.app/)  
- **YouTube Channel:** [https://www.youtube.com/@eliteprotech](https://www.youtube.com/@eliteprotech)  

### About ElitePro 
ElitePro was founded by Chinwo Chinedu Emmanuel on April 21, 2024. We specialize in innovative digital solutions, offering services in graphics design, web development, APIs, and automation tools. At ElitePro, creativity meets technology to help businesses and individuals thrive in the digital world.

### Bot Responses:  
- If someone requests a song, reply: ".play [song name]".  
- If someone requests a video, reply: ".video [video name]".  
- If someone requests an image, reply: ".img [image name]".  
- If someone requests menu, reply: ".menu".
- If someone requests an song, reply: ".song [song name]".`
  try {
    let { data } = await axios({
      "method": "GET",
      "url": "https://mannoffc-x.hf.space/ai/logic",
      "params": {
        "q": text,
        "logic": prompt
      }
    })
    m.reply(data.result);
  } catch (e) {
    m.reply(e.message);
    console.log(e);
  }
}
//Code for lyrics downloader
break
case 'lyrics1': {
  if (!text) return reply(`*Example:* ${prefix + command} faded | Alan Walker`);

  try {
    const [title, artist] = text.split('|').map(str => str.trim());
    if (!title || !artist) return reply(`*Please provide both song title and artist, e.g.:* ${prefix + command} faded | Alan Walker`);

    await EliteProTech.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
    const apiUrl = `https://apis.davidcyriltech.my.id/lyrics?t=${encodeURIComponent(title)}&a=${encodeURIComponent(artist)}`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.lyrics) {
      const { title, artist, lyrics } = response.data;

      const lyricsMessage = `🎵 *LYRICS DOWNLOADER*\n\n` +
        `*🎶 Title:* ${title}\n` +
        `*🎤 Artist:* ${artist}\n\n` +
        `${lyrics}\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;


      m.reply(lyricsMessage);
    } else {
      reply(`*No lyrics found for:* ${title} by ${artist}`);
    }
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    reply(`*Failed to fetch lyrics. Possible reasons:*\n1. Invalid title or artist.\n2. API issues.\n\n*Error Details:* ${error.message}`);
  }
  break;
}
case 'truth': {
  try {
    const apiUrl = 'https://apis.davidcyriltech.my.id/truth';
    const imagePath = 'https://i.ibb.co/gLNc5SGK/ce5871f200bb421678c982f5af52d7fd.jpg'; // 
    const userTag = `@${m.sender.split('@')[0]}`;


    const response = await axios.get(apiUrl);

    if (response.data.status === 200 && response.data.success) {
      const truthQuestion = response.data.question;


      EliteProTech.sendMessage(from, {
        image: { url: imagePath },
        caption: `${userTag}, you chose *TRUTH*!\n\n*Question:* ${truthQuestion}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`,
        mentions: [m.sender],
      }, { quoted: m });
    } else {

      reply('Failed to fetch a truth question. Please try again later.');
    }
  } catch (error) {

    if (error.response) {
      reply(`API Error: ${error.response.data.message || 'Unknown API error.'}`);
    } else if (error.request) {
      reply('No response received from the API. Please try again later.');
    } else {
      reply(`An error occurred: ${error.message}`);
    }
  }
  break;
}
//Code for downloading apps
break
case 'apk': {
  if (!text) return reply(`*Example:* ${prefix + command} WhatsApp`);
  
  try {
    const apiUrl = `https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl, { timeout: 10000 });
    
    // Validate API response
    if (!response.data || !response.data.success) {
      return reply('❌ *Failed to fetch APK. Try again later.*');
    }
    
    const { apk_name, thumbnail, download_link } = response.data;
    
    // Send APK details with thumbnail
    await EliteProTech.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `📥 *APK Downloader* 📥\n` +
        `📌 *Name:* ${apk_name}\n` +
        `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
    }, { quoted: m });
    
    // Send APK file immediately after
    await EliteProTech.sendMessage(m.chat, {
      document: { url: download_link },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${apk_name}.apk`
    }, { quoted: m }).catch(err => {
      console.error('Error sending APK:', err);
      reply('❌ *Failed to send APK file. It might be too large or restricted by WhatsApp.*');
    });
    
  } catch (error) {
    console.error('Error in APK Downloader:', error?.response?.data || error.message);
    
    // Handle specific errors
    if (error.code === 'ECONNABORTED') {
      reply('⚠️ *API request timed out. Please try again.*');
    } else if (error.response && error.response.status === 404) {
      reply('❌ *APK not found. Please check the name and try again.*');
    } else {
      reply('❌ *An unexpected error occurred. Try again later.*');
    }
  }
  
  break;
}
break
case 'yts': case 'ytsearch': {
  if (!text) return reply(`Example : ${prefix + command} Alan walker alone`)
  let yts = require("yt-search")
  let search = await yts(text)
  let teks = '*YOUTUBE SEARCH*\n\nSEARCH: ' + text + '\n\n'
  let no = 1
  for (let i of search.all) {
    teks += `*NO:* ${no++}\n*Type:* ${i.type}\n*Video ID:* ${i.videoId}\n*Title:* ${i.title}\n*Views:* ${i.views}\n*Duration:* ${i.timestamp}\n*Uploaded:* ${i.ago}\n\n*Url:* ${i.url}\n\n`
  }
  EliteProTech.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
}
break
case 'tiny': {
  try {
    if (!text) {
      return reply(`Please provide a URL to shorten.\n*Usage:*\n.tiny https://example.com`);
    }
    
    const urlToShorten = text.trim();
    
    if (!urlToShorten) {
      return reply('Please provide a valid URL to shorten.');
    }
    
    // Construct the API URL for TinyURL
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(urlToShorten)}`;
    
    // Fetch the shortened URL
    const response = await axios.get(apiUrl);
    
    console.log('API Response:', response.data);
    
    // Send the shortened URL as a message
    await EliteProTech.sendMessage(from, {
      text: `Here is your shortened URL: ${response.data}`,
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error shortening URL:', error.message);
    await EliteProTech.sendMessage(from, {
      text: 'Error shortening URL. Please check the URL format or try again later.',
    }, { quoted: m });
  }
  break;
}
case 'google': {
  try {
    if (!text) {
      return reply('Provide a search term!\nEg: .Google What is treason');
    }
    
    const axios = require("axios");
    const { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?q=${text}&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5`);
    
    if (data.items.length === 0) {
      return reply("❌ Unable to find a result");
    }
    
    let tex = `*GOOGLE SEARCH*\n🔍 *Term:* ${text}\n\n`;
    for (let i = 0; i < data.items.length; i++) {
      tex += `🪧 *Title:* ${data.items[i].title}\n🖥 *Description:* ${data.items[i].snippet}\n🌐 *Link:* ${data.items[i].link}\n\n`;
    }
    
    await EliteProTech.sendMessage(from, {
      text: tex.trim(),
    }, { quoted: m });
    
  } catch (error) {
    console.error('Error occurred:', error);
    await EliteProTech.sendMessage(from, {
      text: '❌ Something went wrong with the Google search.',
    }, { quoted: m });
  }
  break;
}
break
case 'gitclone':
if (!args[0]) return reply(`*Usage:* ${prefix}${command} https://github.com/EliteProTech/ELITE-PRO-V1`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
EliteProTech.sendMessage(m.chat, { document: { url: url }, fileName: filename + '.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
case 'welcome': {
  if (!m.isGroup) return reply("This command is for group use only.");
  if (!isAdmins && !botNumber) return reply("This command is made for admins.");
  if (args.length < 1) return reply('on/off?');
  
  if (args[0] === 'on') {
    global.welcome = true;
    reply(`${command}. is enabled`);
  } else if (args[0] === 'off') {
    global.welcome = false;
    reply(`${command}. is disabled`);
  } else {
    reply('Please use: on / off');
  }
  break;
}
break
            case 'pickupline': {
              try {
                let res = await fetch(`https://api.popcat.xyz/pickuplines`)
                if (!res.ok) {
                  throw new Error(`API request failed with status ${res.status}`)
                }
                let json = await res.json()
                let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
                reply(pickupLine)
              } catch (error) {
                console.error(error)
                // Handle the error appropriately
              }
            }
break
case 'loli': {
  let baseUrl = 'https://weeb-api.vercel.app/'
  const response = await fetch(baseUrl + command)
  const imageBuffer = await response.buffer() // Get the image data as a buffer
  EliteProTech.sendMessage(m.chat, { image: imageBuffer, caption: `Random ${command} for you!✨` }, { quoted: m })
}
break
case 'waifu': {
  let baseUrl = 'https://weeb-api.vercel.app/'
  const response = await fetch(baseUrl + command)
  const imageBuffer = await response.buffer() // Get the image data as a buffer
  EliteProTech.sendMessage(m.chat, { image: imageBuffer, caption: `Random ${command} for you!✨` }, { quoted: m })
}
break
case 'neko': {
  let baseUrl = 'https://weeb-api.vercel.app/'
  const response = await fetch(baseUrl + command)
  const imageBuffer = await response.buffer() // Get the image data as a buffer
  EliteProTech.sendMessage(m.chat, { image: imageBuffer, caption: `Random ${command} for you!✨` }, { quoted: m })
}   
//Screenshot of Website
break
case 'ssweb': {
  if (!args[0]) return m.reply(`Please provide a link\n\n Example: ${prefix + command}.`);
  await EliteProTech.sendMessage(m?.chat, { react: { text: `📸`, key: m?.key } });
  
  let apiUrl = `https://apis.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(args[0])}`;
  
  try {
    await EliteProTech.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🖼️ Screenshot of ${args[0]}` }, { quoted: m });
  } catch (error) {
    console.error(error);
    m.reply('Failed to capture the screenshot. Please try again later.');
  }
  break;
}
case 'tzai': {
  if (!text) {
    return reply(`*🧑‍💻 Enter a text to generate your image as you like*`);
  }
  
  await EliteProTech.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
  await EliteProTech.sendMessage(m.chat, { text: '*🧑‍💻 Please wait, we are generating your image*' }, { quoted: m });
  
  try {
    const imageUrl = `https://eliasar-yt-api.vercel.app/api/ai/text2img?prompt=${encodeURIComponent(text)}`;
    const caption = `*Results for:* ${text}`;
    
    await EliteProTech.sendMessage(m.chat, {
      image: { url: imageUrl },
      caption: caption
    }, { quoted: m });
    
    await EliteProTech.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); // done reaction
  } catch (error) {
    console.error(error);
    reply(`*🚨 Sorry, an error occurred 😔*`);
  }
  break;
}
const { downloadMediaMessage } = require('baileys');
case 'vv': {
  if (!m.quoted) return reply(`Reply to a view-once image, video, or audio.`);
  try {
    // Check if message has media (image, video, or audio)
    let media = await quoted.download();
    let caption = quoted.text || quoted.caption || ''; // Extract caption if present
    
    if (/image/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { image: media, caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else if (/video/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { video: media, caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else if (/audio/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { audio: media, mimetype: 'audio/mp4', caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else {
      return reply(`Please reply to an image, video, or audio.`);
    }
    
  } catch (error) {
    console.error("Error processing media:", error); // Logs error but does not send a message to the user
  }
}
break
case 'song': {
    if (!text) return reply(`*Example*: ${prefix + command} Faded by Alan Walker`);
    
    try {
        await EliteProTech.sendMessage(m.chat, { react: { text: `🎶`, key: m.key } });
        
        const yts = require("yt-search");
        const search = await yts(text);
        const video = search.videos[0];
        
        if (!video) {
            return reply(`*No results found for:* ${text}`);
        }
        
        const apiUrl = `https://apii.baguss.web.id/downloader/ytmp3?apikey=bagus&url=${encodeURIComponent(video.url)}`;
        const { data } = await axios.get(apiUrl);
        
        if (data.success && data.link) {
            const { title, link } = data;
            
            await EliteProTech.sendMessage(m.chat, {
                document: { url: link },
                fileName: `${title}.mp3`,
                mimetype: 'audio/mp3',
                caption: `🎶 *Here's your song:*\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`,
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: `🎵 High Quality • ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ`,
                        thumbnailUrl: video.thumbnail,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
            
        } else {
            reply(`*Failed to fetch the song from Bagus API.*`);
        }
        
    } catch (error) {
        console.error('Error in play2:', error);
        reply(`_*An error occurred while downloading.*_\n> Please try again later.`);
    }
    break;
}
  case 'animeavatar': {
    waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)
    await EliteProTech.sendMessage(m.chat, { image: { url: waifudd.data.url }, caption: mess.success }, { quoted: m }).catch(err => {
      return ('Error!')
    })
  }
  break
  case '8ballpool': {
    waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)
    await EliteProTech.sendMessage(m.chat, { image: { url: waifudd.data.url }, caption: mess.success }, { quoted: m }).catch(err => {
      return ('Error!')
    })
  }  
break
case 'stickkill': {
  axios.get(`https://api.waifu.pics/sfw/kill`)
  .then(({ data }) => {
    EliteProTech.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
  })
}  
break
case 'animeblush':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await EliteProTech.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
  break
  case 'bible': {
    const { translate } = require('@vitalets/google-translate-api')
    const BASE_URL = 'https://bible-api.com'
    try {
      // Extract the chapter number or name from the command text.
      let chapterInput = m.text.split(' ').slice(1).join('').trim()
      if (!chapterInput) {
        throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
      }
      // Encode the chapterInput to handle special characters
      chapterInput = encodeURIComponent(chapterInput);
      // Make an API request to fetch the chapter information.
      let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
      if (!chapterRes.ok) {
        throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
      }
      let chapterData = await chapterRes.json();
      let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
      let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
      let bibleChapter = `*THE HOLY BIBLE*\n
*Chapter ${chapterData.reference}*
Version: ${chapterData.translation_name}
Number of verses: ${chapterData.verses.length}\n
*Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
*Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
      reply(bibleChapter)
    } catch (error) {
      reply(`Error: ${error.message}`)
    }
  }
//Still processing\\
  break
  case 'translate':
  case 'trt': {
    if (!q) return reply(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} language id text*\n*${prefix + command} Hello dear how are you?*`)
    const defaultLang = 'en'
    const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* id text
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
      lang = defaultLang
      text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
      let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
      reply(result.text)
    } catch (e) {
      return reply(err)
    }
  }
  break
  case 'quran': {
    try {
      // Extract the surah number or name from the command text.
      let surahInput = m.text.split(' ')[1]
      if (!surahInput) {
        throw new Error(`Please specify the surah number or name`)
      }
      let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
      let surahList = await surahListRes.json()
      let surahData = surahList.data.find(surah =>
        surah.number === Number(surahInput) ||
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() ||
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
      )
      if (!surahData) {
        throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
      }
      let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
      if (!res.ok) {
        let error = await res.json();
        throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
      }
      
      let json = await res.json()
      
      // Translate tafsir from Bahasa Indonesia to Urdu
      let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })
      
      // Translate tafsir from Bahasa Indonesia to English
      let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })
      
      let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`
      
      reply(quranSurah)
      
      if (json.data.recitation.full) {
        EliteProTech.sendMessage(m.chat, { audio: { url: json.data.recitation.full }, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, { quoted: m })
      }
    } catch (error) {
      reply(`Error: ${error.message}`)
    }
  }
  break
  case 'tagadmin': {
    if (!m.isGroup) return reply("This command is for group use only.")
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-` [0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    EliteProTech.sendMessage(m.chat, { text: text, mentions: [...groupAdmins.map(v => v.id), owner] }, { quoted: m })
  }  
break
case 'statusd': {
const { downloadMediaMessage } = require('baileys');  
  if (!m.quoted) return reply(`Reply to a view-once image, video, or audio.`);
  try {
    // Check if message has media (image, video, or audio)
    let media = await quoted.download();
    let caption = quoted.text || quoted.caption || ''; // Extract caption if present
    
    if (/image/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { image: media, caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else if (/video/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { video: media, caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else if (/audio/.test(mime)) {
      await EliteProTech.sendMessage(m.chat, { audio: media, mimetype: 'audio/mp4', caption: `${caption}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*` }, { quoted: m });
    } else {
      return reply(`Please reply to status, video, or audio.`);
    }
    
  } catch (error) {
    console.error("Error processing media:", error); // Logs error but does not send a message to the user
  }
}
break;
break
case 'tts': {
  const googleTTS = require('google-tts-api')
  
  if (!text) return reply('Where is the text?')
  
  const texttts = text
  const eliterl = googleTTS.getAudioUrl(texttts, {
    lang: "en",
    slow: false,
    host: "https://translate.google.com",
  })
  
  return EliteProTech.sendMessage(m.chat, {
    audio: {
      url: eliterl,
    },
    mimetype: 'audio/mp4',
    ptt: true,
    fileName: `${text}.mp3`,
    contextInfo: {
      externalAdReply: {
        title: 'TEXT TO SPEECH AI',
        body: 'Powered by EliteProTech',
        thumbnailUrl: 'https://files.catbox.moe/phngeu.jpg', // Customize image
        mediaType: 1,
        renderLargerThumbnail: false,
        sourceUrl: 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g', // Customize URL
      }
    }
  }, {
    quoted: m,
  })
}
break
case "spotify-search": case "sps": {
  if (!text) return reply("Please enter a search keyword");
  
  const url = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
  
  fetch(url)
  .then(response => response.json())
  .then(async data => {
    if (data.length == 0) return reply("No results found.");
    
    let textOutput = '\n*SPOTIFY SEARCH*\n*🔎 Search Results*\n\n';
    for (let i of data) {
      textOutput += `*◦ Title:* ${i.title}
  *◦ Artist:* ${i.artist || "unknown"}
  *◦ Album:* ${i.album || "unknown"}
  *◦ Duration:* ${i.duration || "unknown"}
  *◦ Link:* ${i.url}\n\n`;
    }
    reply(textOutput);
  })
  .catch(err => reply("An error occurred: " + err.toString()));
}
break
case "spoty-download": case "spotifydl": case "spdl": {
  
  if (!text) return reply('where is the link??');
  // Mengambil URL dari API download
  let apiURL = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(text)}`;
  
  try {
    // Mendapatkan data dari API
    let response = await fetch(apiURL);
    
    // Memastikan respon adalah tipe audio
    if (response.headers.get("content-type") === "audio/mpeg") {
      // Mengirim audio melalui WhatsApp
      await EliteProTech.sendMessage(m.chat, { audio: { url: apiURL }, mimetype: 'audio/mpeg' }, { quoted: m });
    } else {
      reply("An error occur, use .splay");
    }
  } catch (error) {
    console.error(error);
    reply("An error occur while downloading audio file");
  }
}
break
case "splay": {
  const axios = require("axios");
  if (!text) return reply('Provide spotify url or text');
  
  try {
    // URL API untuk pencarian lagu
    const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
    const searchData = (await axios.get(searchApiUrl)).data;
    
    // Pilih hasil pertama dari data pencarian
    const data = searchData[0];
    if (!data) return reply("please just keep calm");
    
    // Teks yang akan dikirimkan
    const tekswait = `╭━━━━━━━━━
┃ *SPOTIFY MUSIC - DOWNLOADER*

> *ᴛɪᴛʟᴇ:* ${data.title}

┃ *ᴀʀᴛɪꜱᴛ* ${data.artist}

> *ᴜʀʟ:* ${data.url}

┃ *Enjoy your music®*
╰━━━━━━━━━━━━━━━━━━┈⊷
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`;
    
    // Mengirim pesan informasi lagu
    await EliteProTech.sendMessage(m.chat, {
      text: `${tekswait}`,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: `${data.title}`,
          body: "SPOTIFY SEARCH & DOWNLOAD",
          thumbnailUrl: data.thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
    
    // URL API untuk download lagu
    const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
    // Mendapatkan data dari API
    let response = await fetch(downloadApiUrl);
    
    // Memastikan respon adalah tipe audio
    if (response.headers.get("content-type") === "audio/mpeg") {
      // Mengirim audio melalui WhatsApp
      await EliteProTech.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
    } else {
      reply("lol, its your music or not??");
    }
  } catch (error) {
    console.error(error);
    reply("failed to download youre audio");
  }
}
break
case 'autoreact':
    case 'auto_react':{
             if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoreact = true
                  reply(`✅ ${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoreact = false
                  reply(`🌀 ${command} is disabled`)
               }
            }
break
case 'chatbot': {
  if (!isCreator) return reply(mess.owner);
  if (args.length < 1) return reply('on/off?');
  
  // Load chatbot settings
  let chatbotData = {};
  try {
    chatbotData = JSON.parse(fs.readFileSync('./database/chatbot.json'));
  } catch (err) {
    console.error('Error loading chatbot.json:', err);
  }
  
  // Toggle chatbot globally
  if (args[0] === 'on') {
    chatbotData.global = true;
    fs.writeFileSync('./database/chatbot.json', JSON.stringify(chatbotData, null, 2));
    reply(`☑️ Chatbot has been enabled for all chats.`);
  } else if (args[0] === 'off') {
    chatbotData.global = false;
    fs.writeFileSync('./database/chatbot.json', JSON.stringify(chatbotData, null, 2));
    reply(`♻️ Chatbot has been disabled.`);
  } else {
    reply('Usage: .chatbot "on" or "off"');
  }
}
break;
////ANTILINK DETECT/////
case 'antilink': {
if (!m.isGroup) return reply(mess.group);



if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin); 
  
  // Load anti-link settings
  let antilinkData = {};
  try {
    antilinkData = JSON.parse(fs.readFileSync('./lib/antilink.json'));
  } catch (err) {
    console.error('Error loading antilink.json:', err);
  }
  
  if (!antilinkData[m.chat]) {
    antilinkData[m.chat] = { enabled: false, action: "warn", warnings: {} };
  }
  
  if (!args[0]) {
    return reply(`
⿻ *ANTILINK SETTINGS*
╭───────────────━⊷
║ _*.Antilink action delete*_
║ _*.Antilink action warn*_
║ _*.Antilink action kick*_
╰───────────────━⊷
_*Usage:* .antilink "on" or "off"_`);
  }
  
  if (args[0].toLowerCase() === "on") {
    antilinkData[m.chat].enabled = true;
    fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilinkData, null, 2));
    return reply(`✅ *ANTILINK ACTIVATED:* Options
╭───────────────━⊷
║ _*.Antilink action delete:* only delete_
║ _*.Antilink action warn:* Limit 4 then kick_
║ _*.Antilink action kick:* instant kick_
╰───────────────━⊷
_*Antilink is enable in this group chat*_`);
  }
  
  if (args[0].toLowerCase() === "off") {
    antilinkData[m.chat].enabled = false;
    fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilinkData, null, 2));
    return reply("🔄 *AntiLink Disabled!* Links are now allowed.");
  }
  
  if (args[0] === "action" && args[1]) {
    antilinkData[m.chat].action = args[1].toLowerCase();
    fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilinkData, null, 2));
    return reply(`⚙️ *Antilink:* set to ${args[1]}`);
  }
  
  return reply("Invalid command! Use: antilink on/off");
}
break;
/////ANTILINK END////
break
case 'autolikestatus': {
             if (!isCreator) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autolikestatus = true
                  reply(`✅ Autolikestatus has been enabled`)
               } else if (args[0] === 'off') {
                  autolikestatus = false
                  reply(`🔕 Autolikestatus has been disabled`)
               }
            }
break            
    case 'imgsearch': case 'img1': {
      if (!text) {
        return reply(`*Usage:* .img <query>\n\n*Example:* .img laptop`);
      }
      
      try {
        await EliteProTech.sendMessage(m.chat, { react: { text: "🔍", key: m.key } });
        
        const apiResponse = await axios.get(`https://apis.davidcyriltech.my.id/googleimage`, {
          params: { query: text }
        });
        
        const { success, results } = apiResponse.data;
        
        if (!success || !results || results.length === 0) {
          return reply(`❌ No images found for "${text}". Try another search.`);
        }
        
        const maxImages = Math.min(results.length, 5);
        for (let i = 0; i < maxImages; i++) {
          await EliteProTech.sendMessage(m.chat, {
            image: { url: results[i] },
            caption: `📷 *Image Search*\n🔎 *Query:* "${text}"\n📄 *Result:* ${i + 1}/${maxImages}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇᴘʀᴏ*`,
          }, { quoted: m });
        }
        
        await EliteProTech.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
        
      } catch (error) {
        console.error("Error in Image Search:", error);
        reply(`❌ *Error fetching images. Try again later.*`);
      }
      break;
    }
    case 'imgpng': {
      if (!text) return reply(`*Example*: ${prefix + command} https://i.ibb.co/Y3cv9z7/20240917-072306.jpg`);
      
      try {
        await EliteProTech.sendMessage(m.chat, { react: { text: `🔄`, key: m.key } });
        
        const axios = require('axios');
        const apiUrl = `https://api.nexoracle.com/converter/image2png?apikey=63b406007be3e32b53&img=${encodeURIComponent(text)}`;
        
        const response = await axios.get(apiUrl);
        
        if (!response.data || !response.data.result) {
          return reply(`*An error occurred while converting the image. Please check the URL and try again.*`);
        }
        
        const pngImageUrl = response.data.result;
        
        await EliteProTech.sendMessage(m.chat, {
          image: { url: pngImageUrl },
          caption: `✅ *Image successfully converted to PNG.*`
        }, { quoted: m });
        
      } catch (error) {
        console.error('Error converting image to PNG:', error);
        reply(`❌ *An error occurred while converting the image. Please try again later.*`);
      }
      break;
    }  
case 'gcalert':
if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)

let message = args.join(" "); // The broadcast message
if (!message) return reply('Please provide a message to broadcast.');

// Fetch group participants
let groupParticipants = groupMetadata.participants.map(p => p.id);

// Notify user about the process
await reply(`📢 Sending message to ${groupParticipants.length} members. Please wait...`);

try {
  // Loop through participants in batches of 5 with a 2-second delay
  const batchSize = 5;
  for (let i = 0; i < groupParticipants.length; i += batchSize) {
    let batch = groupParticipants.slice(i, i + batchSize);
    
    // Send messages to the current batch
    await Promise.all(batch.map(participant =>
      EliteProTech.sendMessage(participant, { text: `*GROUP BROADCAST*\n*Message:* ${message}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`})
    ));
    
    // Add a delay before the next batch
    if (i + batchSize < groupParticipants.length) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
    }
  }
  
  // Send final confirmation message
  reply(`✅ Successfully sent the message to all ${groupParticipants.length} members.`);
} catch (err) {
  reply('❌ An error occurred while broadcasting: ' + json(err));
}   
break
    case 'demoteall':
    if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)
    
    // Fetch group participants and filter out bot and group owner
    let adminParticipants = groupMetadata.participants
      .filter(p => p.admin === 'admin') // Select only admins
      .map(p => p.id)
      .filter(id => id !== botNumber && id !== m.sender); // Exclude bot and group owner
    
    if (adminParticipants.length === 0) {
      return reply(`There's is no admin to demote just you.`);
    }
    
    // Notify the user about the demotion process
    reply(`🔄 Demoting ${adminParticipants.length} admin members. Please wait...`);
    
    try {
      let demotedCount = 0;
      // Demote admin participants with a delay
      for (let i = 0; i < adminParticipants.length; i++) {
        let participant = adminParticipants[i];
        await EliteProTech.groupParticipantsUpdate(m.chat, [participant], 'demote');
        demotedCount++;
        
        // Add a 1-second delay before the next demotion
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Send final confirmation message
      reply(`✅ Successfully demoted ${demotedCount} admin members!`);
      
    } catch (err) {
      reply('An error occurred while demoting members: ' + json(err));
    }
    break;
    
    //command to promote all members to be admins   
    case 'promoteall':
if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)
    
    // Filter non-admin members from group participants
    let nonAdmins = groupMetadata.participants.filter(p => !p.admin).map(p => p.id);
    
    if (nonAdmins.length === 0) return reply('All participants are already admins.');
    
    // Notify the user about the promotion
    reply(`Promoting ${nonAdmins.length} members to admin. Please wait...`);
    
    try {
      // Promote non-admin members to admin with a 1-second delay
      let successCount = 0;
      for (let i = 0; i < nonAdmins.length; i++) {
        let participant = nonAdmins[i];
        await EliteProTech.groupParticipantsUpdate(m.chat, [participant], 'promote');
        successCount++;
        
        // Add a 1-second delay before the next promotion
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Send final confirmation message
      reply(`✅ Successfully promoted ${successCount} members to admin!`);
      
    } catch (err) {
      reply('An error occurred while promoting members: ' + json(err));
    }
    break;
    
break   
case 'kickall':
if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)
    
    // Filter group participants to remove, excluding bot and command sender
    let participantsToRemove = groupMetadata.participants
      .map(p => p.id)
      .filter(id => id !== botNumber && id !== m.sender); // Exclude bot and sender
    
    // Check if there are participants to remove
    if (participantsToRemove.length === 0) {
      return reply('No eligible members to remove, or I cannot remove myself or the group creator.');
    }
    
    // Notify the user about the removal process
    reply(`🔄 Removing ${participantsToRemove.length} members from the group. Please wait...`);
    
    try {
      let removedCount = 0;
      // Remove participants with a delay to avoid WhatsApp server limits
      for (let i = 0; i < participantsToRemove.length; i++) {
        let participant = participantsToRemove[i];
        await EliteProTech.groupParticipantsUpdate(m.chat, [participant], 'remove');
        removedCount++;
        
        // Add a 1-second delay before the next removal
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Send final confirmation message
      reply(`✅ Successfully removed ${removedCount} members from the group!`);
      
    } catch (err) {
      reply('An error occurred while removing members: ' + json(err));
    }
    break;
break
case 'addall':
if (!m.isGroup) return reply(mess.group)
  if (!isSenderAdmin) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)
if (!text) return reply('Please provide numbers to add, separated by commas.\nExample: addall 2347047504860,2347047504861')

let numbers = text.match(/\d{10,}/g) || []
if (numbers.length === 0) return reply('No valid numbers found.')

let addedCount = 0
let failed = []

reply(`🔄 Adding ${numbers.length} members to the group...`)

for (let number of numbers) {
  let jid = number + '@s.whatsapp.net'
  try {
    await EliteProTech.groupParticipantsUpdate(m.chat, [jid], 'add')
    addedCount++
    await new Promise(resolve => setTimeout(resolve, 1000)) // 1s delay
  } catch (err) {
    failed.push(number)
  }
}

reply(`✅ Added: ${addedCount}\n❌ Failed: ${failed.length > 0 ? failed.join(', ') : 'None'}`)
break
case 'pinterest': {
    await EliteProTech.sendMessage(m.chat, { react: { text: "📌", key: m.key } });
    
    if (!text) {
        return reply(`Example: ${prefix + command} https://pin.it/3LVHerUzD`);
    }
    
    try {
        let apiUrl = `https://api.giftedtech.web.id/api/download/pinterestdl?apikey=gifted&url=${encodeURIComponent(text)}`;
        let res = await fetchJson(apiUrl);
        
        if (!res || !res.success || !res.result || !res.result.media || res.result.media.length === 0) {
            return reply("Download failed or invalid URL. Please check and try again.");
        }
        
        // Get video
        let title = res.result.title || "Pinterest Media";
        let video = res.result.media.find(m => m.format === "MP4");
        
        if (!video || !video.download_url) {
            return reply("Video not found in this Pinterest link.");
        }
        
        // Send video
        await EliteProTech.sendMessage(m.chat, {
            video: { url: video.download_url },
            fileName: `${title}.mp4`,
            mimetype: "video/mp4",
            caption: `🎬 *Title:* ${title}\n*Format:* ${video.type}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Pinterest download error:", err);
        reply("An error occurred while downloading the Pinterest media.");
    }
}
break
case '+18vid':
reply(`Confirmation Type: .xvideos`)
break
case 'xvideos': {
    if (!text) return reply(`🔞 Example: ${prefix + command} https://cdn77-vid-mp4.xvideos-cdn.com`);
    
    try {
        let apiUrl = `https://api.giftedtech.web.id/api/download/xvideosdl?apikey=gifted&url=${encodeURIComponent(text)}`;
        let res = await fetchJson(apiUrl);
        
        if (!res || !res.success || !res.result || !res.result.download_url) {
            return reply("❌ Failed to retrieve video. Please check the URL.");
        }
        
        let { title, views, votes, likes, dislikes, size, thumbnail, download_url } = res.result;
        
        await EliteProTech.sendMessage(m.chat, {
            video: { url: download_url },
            fileName: `${title}.mp4`,
            mimetype: "video/mp4",
            caption: `🔞 *${title}*\n👁️ ${views}\n👍 ${likes} | 👎 ${dislikes}\n📦 ${size}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("XVideos error:", err);
        reply("❌ Error occurred while downloading the video.");
    }
}
break
case 'flirt': {
    try {
        let apiUrl = `https://api.giftedtech.web.id/api/fun/flirt?apikey=gifted`;
        let res = await fetchJson(apiUrl);
        
        if (!res || !res.success || !res.result) {
            return reply("❌ Failed to fetch a flirt line. Try again later.");
        }
        
        await EliteProTech.sendMessage(m.chat, {
            text: `💘 *Flirty Line:*\n\n${res.result}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Flirt API error:", err);
        reply("❌ Error occurred while getting flirt line.");
    }
}
break
case 'hdwallpaper': {
    if (!text) {
        return reply(`Example: ${prefix + command} Mountains`);
    }
    
    try {
        let apiUrl = `https://api.giftedtech.web.id/api/search/wallpaper?apikey=gifted&query=${encodeURIComponent(text)}`;
        let res = await fetchJson(apiUrl);
        
        if (!res || !res.success || !res.results || res.results.length === 0) {
            return reply("❌ No wallpaper results found.");
        }
        
        // Shuffle and pick 5 random wallpapers
        let shuffled = res.results.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 5);
        
        for (let i = 0; i < selected.length; i++) {
            let img = selected[i];
            let imageUrl = img.image[0] || img.image;
            let type = img.type || 'Wallpaper';
            
            let imgRes = await fetch(imageUrl);
            let buffer = await imgRes.buffer();
            
            await EliteProTech.sendMessage(m.chat, {
                image: buffer,
                caption: `🖼️ *Wallpaper Result ${i + 1}/5*\n\n📌 *Type:* ${type}\n🔍 *Query:* ${text}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
            }, { quoted: m });
        }
        
    } catch (err) {
        console.error("Wallpaper API error:", err);
        reply("❌ Error occurred while fetching wallpapers.");
    }
}
break
case 'lyrics': {
    if (!text) {
        return reply(`Example: ${prefix + command} Faded Alan Walker`);
    }
    
    try {
        let apiUrl = `https://api.nexoracle.com/search/lyrics?apikey=34e93682c3603be0f9&q=${encodeURIComponent(text)}`;
        let res = await fetchJson(apiUrl);
        
        if (!res || res.status !== 200 || !res.result || !res.result.lyrics) {
            return reply(`Please provide both song title and artist, e.g.:* ${prefix + command} faded | Alan Walker`);
        }
        
        let { title, lyrics } = res.result;
        
        await EliteProTech.sendMessage(m.chat, {
            text: `🎶 *Lyrics Found!*\n\n🎤 *Title:* ${title}\n\n📝 *Lyrics:*\n${lyrics}\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("NexOracle Lyrics API error:", err);
        reply("❌ Error occurred while fetching lyrics.");
    }
}
break
case 'aovavatar': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/shimmering-aov-avaters?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Custom helper to fetch image as buffer
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🧩 *AOV Avatar Generated!*\n👤 *Name:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("AOV Avatar API error:", err);
        reply("❌ Failed to generate AOV Avatar. Try again later.");
    }
}
break
case 'avengers': {
    if (!text.includes('|')) {
        return reply(`Example: ${prefix + command} Company|EliteProTech`);
    }
    
    try {
        let [text1, text2] = text.split('|').map(t => t.trim());
        
        if (!text1 || !text2) {
            return reply(`Please provide both text1 and text2.\nExample: ${prefix + command} Company|EliteProTech`);
        }
        
        const apiUrl = `https://api.nexoracle.com/ephoto360/avengers?apikey=34e93682c3603be0f9&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
        
        const buffer = await getBuffer(apiUrl); // getBuffer defined earlier
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🦸 *Avengers Logo Created!*\n🔤 *Text1:* ${text1}\n🅰️ *Text2:* ${text2}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Avengers API error:", err);
        reply("❌ Failed to generate Avengers logo. Please try again.");
    }
}
break
case 'americanflag': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/american-flag-3d?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Assumes getBuffer is already defined
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🇺🇸 *American Flag 3D Effect Created!*\n🔤 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("American Flag API error:", err);
        reply("❌ Failed to generate American Flag effect. Please try again.");
    }
}
break
case 'angelwings': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/angel-wings?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Make sure getBuffer is defined elsewhere in your code
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `👼 *Angel Wings Effect Created!*\n🔤 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Angel Wings API error:", err);
        reply("❌ Failed to generate Angel Wings effect. Please try again.");
    }
}
break
case 'angelwings2': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/angel-wings2?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Assumes getBuffer function is defined
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `👼 *Angel Wings 2 Effect Created!*\n🔤 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Angel Wings 2 API error:", err);
        reply("❌ Failed to generate Angel Wings 2 effect. Please try again.");
    }
}
break
case 'anonymoushacker': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/annonymous-hacker?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Make sure getBuffer is defined
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🕵️ *Anonymous Hacker Effect Generated!*\n🔤 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Anonymous Hacker API error:", err);
        reply("❌ Failed to generate Anonymous Hacker effect. Please try again.");
    }
}
break
case 'anniversarycake': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/anniversary-cake?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        
        const buffer = await getBuffer(apiUrl); // Make sure getBuffer is defined in your project
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🎉 *Anniversary Cake Effect Generated!*\n🎂 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("Anniversary Cake API error:", err);
        reply("❌ Failed to generate Anniversary Cake effect. Please try again.");
    }
}
break
case 'blackpink': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/blackpink?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        const buffer = await getBuffer(apiUrl); // Ensure getBuffer is defined in your project
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🎀 *BlackPink Effect Generated!*\n📝 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("BlackPink API error:", err);
        reply("❌ Failed to generate BlackPink effect. Please try again later.");
    }
}
break
case 'blackpink2': {
    if (!text) {
        return reply(`Example: ${prefix + command} EliteProTech`);
    }
    
    try {
        const apiUrl = `https://api.nexoracle.com/ephoto360/blackpink2?apikey=34e93682c3603be0f9&text=${encodeURIComponent(text)}`;
        const buffer = await getBuffer(apiUrl); // Make sure getBuffer is defined to fetch buffer data
        
        await EliteProTech.sendMessage(m.chat, {
            image: buffer,
            caption: `🎀 *BlackPink 2 Effect Generated!*\n📝 *Text:* ${text}\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ*`
        }, { quoted: m });
        
    } catch (err) {
        console.error("BlackPink2 API error:", err);
        reply("❌ Failed to generate BlackPink 2 effect. Please try again later.");
    }
}
case 'notifications': {
    try {
        const url = 'https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/notification';
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('❌ Failed to fetch data from GitHub.');
        
        const json = await response.json();
        if (!Array.isArray(json)) {
            return EliteProTech.sendMessage(from, { text: "❌ Invalid JSON format. Expected an array." }, { quoted: m });
        }
        
        const randomNote = json[Math.floor(Math.random() * json.length)];
        
        // 🔇 Silent in group unless sender is botNumber
        if (m.isGroup && m.sender !== botNumber) return;
        
        await EliteProTech.sendMessage(from, {
            text: `📢 *Notification:*\n${randomNote}`
        }, { quoted: m });
        
    } catch (err) {
        console.error(err);
        if (!m.isGroup || m.sender === botNumber) {
            await EliteProTech.sendMessage(from, {
                text: "🚫 Error fetching notification."
            }, { quoted: m });
        }
    }
}
//=========================
//DEFAULT STOPPING POINTS//
                break
            case 'delprem':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    reply("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    reply("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return reply(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                EliteProTech.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!botNumber) return reply(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    reply(teks)
                    await sleep(2000)
                    reply("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    reply("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'joingc':
                try {
                    if (!isCreator) return reply(mess.owner)
                    if (!text) return reply('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
                    reply(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await EliteProTech.groupAcceptInvite(result).then((res) => reply(json(res))).catch((err) => reply(json(err)))
                } catch {
                    reply('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return reply(mess.owner)
                reply('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                EliteProTech.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'restart':
                if (!isCreator) return reply(mess.owner)
                reply(`Restarting will be completed in 10sec`)
                await sleep(3000)
                process.exit()
                break
            case 'autoread':
                if (!isCreator) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    reply(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    reply(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!botNumber) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    reply(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    reply(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!botNumber) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    reply(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    reply(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtype':
                if (!botNumber) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    reply(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    reply(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!botNumber) return reply(mess.owner)
               if (args.length < 1) return reply('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  reply(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  reply(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!botNumber) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    reply(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    reply(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!botNumber) return reply(mess.owner)
                if (args.length < 1) return reply(`Example ${prefix + command} public/private`)
                if (q == 'public') {
                    EliteProTech.public = true
                    reply(mess.done)
                } else if (q == 'private') {
                    EliteProTech.public = false
                    reply(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                reply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProTech.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProTech.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProTech.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return reply(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.updateBlockStatus(blockw, 'block').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'unblock':
                if (!isCreator) return reply(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.updateBlockStatus(blockww, 'unblock').then((res) => reply(json(res))).catch((err) => reply(json(err)))
                break
            case 'leftgc':
                if (!botNumber) return reply(mess.owner)
                if (!m.isGroup) return reply(mess.group)
                reply('Good bye suckers🫠')
                await EliteProTech.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return reply(mess.owner)
                if (m.isGroup) return reply(mess.private)
                reply(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await EliteProTech.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await EliteProTech.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    EliteProTech.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By ElitePro',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://graph.org/file/3e81c19e2e4424a41eca2.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                reply(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return reply(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("ElitePro.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
 break
case 'delete': case 'del': {
  if (!isAdmins && !isGroupOwner && !botNumber) return reply('This features can only be used by me or admins')
  let key = {}
  try {
    key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
    key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
    key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
    key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
  } catch (e) {
    console.error(e)
  }
  EliteProTech.sendMessage(m.chat, { delete: key })
}
            break
            case 'closetime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    EliteProTech.groupSettingUpdate(m.chat, 'announcement')
                    reply(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return reply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                reply(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    EliteProTech.groupSettingUpdate(m.chat, 'not_announcement')
                    reply(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                reply(mess.done)
                break
            case 'add':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                reply(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                reply(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await EliteProTech.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                reply(mess.done)
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return reply(mess.group)
                  if (!isSenderAdmin) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await EliteProTech.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return reply(mess.group)
                  if (!isSenderAdmin) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (!text) return 'Text ?'
                await EliteProTech.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await EliteProTech.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await EliteProTech.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                } else {
                    var memeg = await EliteProTech.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.done)
                }
break
case 'tag':
case 'tagall': {
    if (!m.isGroup) return reply(mess.group);
    
    if (!isSenderAdmin) return reply(mess.admin)
    if (!isBotAdmin) return reply(mess.botAdmin); // ✅ Only one check
    
    let me = m.sender;
    let teks = `
╭──────────
┃• *ELITEPRO TAGGED YOU* 
╰──────────\n\n🎁 *Admin:* @${me.split('@')[0]}\n✨ *Message:* ${q ? q : 'blank'}\n\n${readmore}`;
    
    for (let mem of participants) {
        teks += `🫟 @${mem.id.split('@')[0]}\n`;
    }
    
    EliteProTech.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map(a => a.id)
    }, { quoted: m });
    
    break;
}
            case 'hidetag':
                if (!m.isGroup) return reply(mess.group)
                  if (!isSenderAdmin) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                EliteProTech.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!m.quoted) return reply(`Reply messages with captions ${prefix + command}`)
                EliteProTech.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'gc':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (args[0] === 'close') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`🔒 Group has been *closed* — only admins can send messages.`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'open') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`✅ Group has been *opened* — members can now send messages.`)).catch((err) => reply(json(err)))
                } else {
                  reply(`⚙️ Usage: - *gc open - gc close*`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                if (args[0] === 'open') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Group Edit Info🧑‍💻️`)).catch((err) => reply(json(err)))
                } else if (args[0] === 'close') {
                    await EliteProTech.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Group Edit Info🕊️`)).catch((err) => reply(json(err)))
                } else {
                    reply(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'gclink':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
if (!isBotAdmin) return reply(mess.botAdmin)

let response = await EliteProTech.groupInviteCode(m.chat);
let groupLink = `https://chat.whatsapp.com/${response}`;
let profilePicUrl;

try {
  profilePicUrl = await EliteProTech.profilePictureUrl(m.chat, 'image');
} catch (err) {
  profilePicUrl = 'https://telegra.ph/file/7ad44b43e2b10a1d3a848.jpg'; // Default image if no profile pic found
}

let caption = `👥 *GROUP INVITATION LINK*\n📛 *Name:* ${groupMetadata.subject}\n👤 *Owner:* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID:* ${groupMetadata.id}\n👥 *Members:* ${groupMetadata.participants.length}\n🔗 *Chat Link:* ${groupLink}`;

EliteProTech.sendMessage(m.chat, {
  text: caption,
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true, // Enables a full-screen preview
      mediaType: 1, // Image type
      thumbnailUrl: profilePicUrl, // Uses the group profile picture as thumbnail
      sourceUrl: global.link, // Clickable link
      title: groupMetadata.subject,
      body: "Join our group now!",
      renderLargerThumbnail: true // Makes thumbnail full-screen
    }
  }
}, { detectLink: true })              
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isGroupOwner && !botNumber) return reply(mess.admin)
                if (!isBotAdmin) return reply(mess.botAdmin)
                await EliteProTech.groupRevokeInvite(m.chat)
                    .then(res => {
                        reply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => reply(json(err)))
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hey ${pushname}👋\nDo you want too purchase premium? Just DM ElitePro wa.me/2348109263390👨‍💻`
                await EliteProTech.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://graph.org/file/3e81c19e2e4424a41eca2.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
            case 'uptime':
  await EliteProTech.sendMessage(m.chat, { react: { text: "⚙️",key: m.key,}})
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                EliteProTech.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                          forwardingScore: 5,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
        newsletterJid: "120363287352245413@newsletter",
      },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `💢Bot processing uptime. Enjoy the view ${pushname}💢`,
                            thumbnailUrl: 'https://graph.org/file/3e81c19e2e4424a41eca2.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'repo':
  await EliteProTech.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})
                EliteProTech.sendMessage(m.chat, {
                    text: `╭━━━━━━━━━
┃ *ELITE-PRO-V1 REPOSITORY*

> *ɢɪᴛʜᴜʙ:* github.com/EliteProTech/ELITE-PRO-V1

┃ *Fork and star the GitHub repository*
┃ *Deploy on any platforms*

> *ʏᴛ ᴄʜᴀɴɴᴇʟ:* www.youtube.com/@eliteprotech

┃ *Developer:* Cyrilix-xmd
╰━━━━━━━━━━━━━━━━━━┈⊷
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`,
                    contextInfo: {
                          forwardingScore: 5,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
        newsletterJid: "120363287352245413@newsletter",
      },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `Click here for latest repository details`,
                            thumbnailUrl: 'https://files.catbox.moe/nx8v3q.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'bankacc':
                let textnate = `
*Bank:* OPay Digital Services Limited *(OPay)*
*OPay Account:* 7047504860 
*Name:* STELLA NYEGWUSIRIM CHINWO
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
                EliteProTech.sendMessage(m.chat, {
                    text: '*BANK ACCOUNT DETAILS*' + textnate
                }, {
                    quoted: m
                })
break
case 'owner': {
const repf = await EliteProTech.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await EliteProTech.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await EliteProTech.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return reply(respond)
                if (!text) return reply(respond)
                reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await EliteProTech.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return reply(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
EliteProTech.downloadAndSaveMediaMessage(quoted, "gifee")
EliteProTech.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await EliteProTech.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await EliteProTech.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
reply(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    EliteProTech.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProTech.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `Elite.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                reply(mess.wait)
                let media = await EliteProTech.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                EliteProTech.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await EliteProTech.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await EliteProTech.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return reply(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return reply(`Example : ${prefix + command} 😅+🤔`)
                reply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await EliteProTech.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return reply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                    EliteProTech.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                    EliteProTech.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return reply(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await EliteProTech.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return reply(`Example:\n${prefix}fliptext ElitPro`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteelite.length}*`
                reply(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of Stickerelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Stickerelite.length}*`
                reply(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of Imageelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Imageelite.length}*`
                reply(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of Videoelite) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${Videoelite.length}*`
                reply(teks)
            }
            break
            case 'addowner':
                if (!botNumber) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await EliteProTech.onWhatsApp(bnnd)
if (ceknye.length == 0) return reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!botNumber) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 2348109263390`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`The Number ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Video Name?')
                if (Videoelite.includes(q)) return reply("The name you entered already exists")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Videoelite.push(q)
                await fsx.copy(delb, `./EliteProMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videoelite))
                fs.unlinkSync(delb)
                reply(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Video Name')
                if (!Videoelite.includes(q)) return reply("Name Does Not Exist in Database")
                let wanu = Videoelite.indexOf(q)
                Videoelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(Videoelite))
                fs.unlinkSync(`./EliteProMedia/video/${q}.mp4`)
                reply(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('The name of the image?')
                if (Imageelite.includes(q)) return reply("The name you entered is already registered in the database")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Imageelite.push(q)
                await fsx.copy(delb, `./EliteProMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imageelite))
                fs.unlinkSync(delb)
                reply(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Image Name')
                if (!Imageelite.includes(q)) return reply("The image name you entered is not registered")
                let wanu = Imageelite.indexOf(q)
                Imageelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(Imageelite))
                fs.unlinkSync(`./EliteProMedia/image/${q}.jpg`)
                reply(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker?')
                if (Stickerelite.includes(q)) return reply("Name Already In Use")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                Stickerelite.push(q)
                await fsx.copy(delb, `./EliteProMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickerelite))
                fs.unlinkSync(delb)
                reply(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the name of the sticker')
                if (!Stickerelite.includes(q)) return reply("Name Not Registered in Database")
                let wanu = Stickerelite.indexOf(q)
                StickerEliteProTech.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(Stickerelite))
                fs.unlinkSync(`./EliteProMedia/sticker/${q}.webp`)
                reply(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name?')
                if (VoiceNoteelite.includes(q)) return reply("Name Already In Use")
                let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
                VoiceNoteelite.push(q)
                await fsx.copy(delb, `./EliteProMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteelite))
                fs.unlinkSync(delb)
                reply(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return reply(mess.prem)
                if (args.length < 1) return reply('Enter the Name')
                if (!VoiceNoteelite.includes(q)) return reply("Name Not Registered in Database")
                let wanu = VoiceNoteelite.indexOf(q)
                VoiceNoteelite.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteelite))
                fs.unlinkSync(`./EliteProMedia/audio/${q}.mp3`)
                reply(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply(`What's the zip name?`)
let teks = `${text}`
{
if (Zipelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
Zipelite.push(teks)
await fsx.copy(delb, `./EliteProMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipelite))
fs.unlinkSync(delb)
reply(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the text in the zip list')
let teks = `${text}`
{
if (!Zipelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = Zipelite.indexOf(teks)
Zipelite.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(Zipelite))
fs.unlinkSync(`./EliteProMedia/zip/${teks}.zip`)
reply(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of Zipelite) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${Zipelite.length}*`
reply(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the apk?')
let teks = `${text}`
{
if (Apkelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./EliteProMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkelite))
fs.unlinkSync(delb)
reply(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Name of the apk?')
let teks = `${text}`
{
if (!Apkelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = Apkelite.indexOf(teks)
Apkelite.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(Apkelite))
fs.unlinkSync(`./EliteProMedia/apk/${teks}.apk`)
reply(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of Apkelite) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${Apkelite.length}`
reply(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('What is the name of the pdf')
let teks = `${text}`
{
if (Docelite.includes(teks)) return reply("This name is already in use")
let delb = await EliteProTech.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./EliteProMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Docelite))
fs.unlinkSync(delb)
reply(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return reply(mess.prem)
await loading()
if (args.length < 1) return reply('Enter the name')
let teks = `${text}`
{
if (!Docelite.includes(teks)) return reply("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(Docelite))
fs.unlinkSync(`./EliteProMedia/doc/${teks}.pdf`)
reply(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
reply(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return reply(mess.group)
                if (isAfkOn) return reply("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                reply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
//BUG COMMANDS//
break
//bug cases
case 'clearchat':
eliteimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
function getRandomFact() {
  const facts = [
  "🔥 You weren’t born to blend in — set the world on fire with your passion.",
  "🌌 Big dreams need bold moves — don’t shrink to fit spaces you’ve outgrown.",
  "🚦Start where you are. Use what you have. Do what you can — just move.",
  "⚙️ Progress is better than perfection — keep building, one step at a time.",
  "🎇 Your light doesn’t need permission to shine — let it glow unapologetically.",
  "🛠️ Failure isn’t the opposite of success — it’s part of the process.",
  "🌍 The world needs your voice — don’t silence it with doubt.",
  "⏳ Don’t count the days — make the days count.",
  "🎤 Speak your truth, even if your voice shakes — courage grows in the cracks.",
  "🌠 Chase goals, not people — your journey is yours alone.",
  "⚡ You have what it takes — you’ve had it all along.",
  "🚁 Sometimes you have to take a leap — even if the ground isn’t in sight.",
  "🧭 Stay true to your direction, even when the road isn’t clear.",
  "🌻 Let your growth surprise the ones who doubted your roots.",
  "⛰️ The strongest souls rise from the hardest climbs.",
  "🔥 Keep your fire alive — even in the winds of doubt.",
  "🎯 Your focus determines your reality — guard it fiercely.",
  "🌊 Don’t fight the waves — learn to ride them with purpose.",
  "🧠 Smart work beats hard work when you play to your strengths.",
  "☀️ Rise with intention, move with purpose, rest with pride."
];
  return facts[Math.floor(Math.random() * facts.length)];
}                
                
break
case 'menu':
let timestampe = speed()
let latensie = speed() - timestampe
let elitemenuoh = `╭━━━━━《 *𝗘𝗟𝗜𝗧𝗘-𝗣𝗥𝗢-𝗩𝟭* 》━━━┈⊷
┃★╭──────────────
┃★┃• *ᴜꜱᴇʀ* : ${pushname}
┃★┃• *ᴍᴏᴅᴇ* : Public
┃★┃• *ᴘʀᴇғɪx* : [multi]
┃★┃• *ᴄᴏᴍᴍᴀɴᴅꜱ* : 274
┃★┃• *ᴠᴇʀꜱɪᴏɴ* : 1.0.5
┃★┃• *ʀᴀᴍ* : 25.02 GB/61.79 GB
┃★┃• *sᴘᴇᴇᴅ* : ${latensie.toFixed(4)}MS
┃★╰──────────────
╰━━━━━━━━━━━━━━━━━━┈⊷
*🫟Inspiration:* ${getRandomFact()}${readmore}
┏━━━━━━━━━━━━━━━▣
┣━━❍「 owner 」❍
│★ Mode
│★ Autorecording
│★ Autorecordtype
│★ Autoswview 
│★ Addowner
│★ Delowner 
│★ Block 
│★ Unblock
│★ Owner 
│★ Joingc
│★ Autoread
│★ Getsession
│★ Deletesession
│★ Join
│★ Notifications
│★ Shutdown
│★ Restart
│★ Autobio
│★ Backup
│★ Getcase
│★ Autoreact
│★ Chatbot
│★ Autotyping
│★ Clearsession
│★ Autolikestatus
╰─┬────❍${readmore}
╭─┴❍「 groups 」❍
│★ Opentime 
│★ Closetime 
│★ leftgc
│★ Promote 
│★ Demote
│★ Setdesc
│★ Setppgc
│★ Tagall
│★ Hidetag
│★ Totag
│★ Kick 
│★ Add
│★ Gc
│★ Promoteall
│★ Demoteall
│★ Addall
│★ Gcalert
│★ Kickall
│★ Editinfo
│★ Linkgc
│★ Revoke
│★ Listonline
│★ Savecontact
│★ Sendcontact
│★ Contacttag
│★ Welcome
│★ Antilink
│★ Tagadmin
╰─┬────❍
╭─┴❍「 anime 」❍
│★ Animeblush
│★ Animewave
│★ Animesmile
│★ Neko
│★ Waifu
│★ Loli
│★ Animeavatar
│★ Animepoke
│★ Animewink
│★ Animebonk
│★ Animebully
╰─┬────❍
╭─┴❍「 img maker 」❍
│★ Aovavatar
│★ Avengers
│★ Americanflag
│★ angelwings
│★ Angelwings2
│★ Blackpink
│★ Blackpink2
│★ Anonymoushacker
│★ Anniversarycake
╰─┬────❍
╭─┴❍「 convert 」❍
│★ Sticker
│★ Take
│★ Toimage
│★ Tovideo
│★ Toaudio
│★ Tomp3
│★ Tovn
│★ Togif
│★ Toqr
│★ url
│★ Fliptext
│★ Emojimix
│★ Tiny
│★ Ssweb
│★ Tts
│★ Translate
│★ Imgpng
│★ Toviewonce
╰─┬────❍
╭─┴❍「 fun 」❍
│★ Readmore
│★ Define
│★ Flux
│★ Quotes
│★ Fact
│★ Truth
│★ Google
│★ Pickupline
│★ Tzai
│★ Flirt
│★ Stickkill
╰─┬────❍
╭─┴❍「 database 」❍
│★ Addvideo
│★ Addimage
│★ Addsticker
│★ Addvn
│★ Addzip
│★ Addapk
│★ Addpdf
│★ Delvideo
│★ Delimage
│★ Delsticker
│★ Delvn
│★ Delvip
│★ Delapk
│★ Delpdf
│★ Listvideo
│★ Listimage
│★ Liststicker
│★ Listvn
│★ Listzip
│★ Listapk
│★ Listpdf
╰─┬────❍
╭─┴❍「 others 」❍
│★ Menu
│★ Tempban
│★ Buypermium
│★ Runtime
│★ Script
│★ Donate
│★ Clearchat
│★ Alive
│★ Delete
│★ Getpp
│★ Chatgpt
│★ Lyrics
│★ Yts
│★ Vv
│★ 8ballpool
│★ Bible
│★ Quran
│★ Statusd
╰─┬────❍
╭─┴❍「 downloads 」❍
│★ Play
│★ ytmp3
│★ ytmp4
│★ Mediafire
│★ Wallpaper 
│★ Tiktok 
│★ Instagram
│★ Facebook
│★ img
│★ Imgsearch
│★ Song
│★ Song1
│★ Apk
│★ Pinterest
│★ Gitclone
│★ Spotify-search
│★ Splay
│★ +18vid
│★ Hdwallpaper
│★ Spoty-download
┗━━━━━━━━━━━━━━━▣
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ-ᴛᴇᴄʜ©*`
if (typemenu === 'v1') {
  EliteProTech.sendMessage(m.chat, {
    text: elitemenuoh,
    contextInfo: {
      externalAdReply: {
        title: botname,
        body: ownername,
        thumbnailUrl: 'https://graph.org/file/3e81c19e2e4424a41eca2.jpg',
        sourceUrl: link,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, {
    quoted: m
  })
} else if (typemenu === 'v2') {
  const axios = require('axios'); // Import axios inside the block
  
  // Array of image links
  const images = [
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250327.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250327_17355.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250328_04494.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250328_04542.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250327_175224.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250327_175330.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250328_045041.jpg",
"https://raw.githubusercontent.com/Cyrilix-XMD/CYRILIX-STORE/main/img-url/20250328_045239.jpg"
  ];
  
  // Array of reaction emojis
  const reactions = ["✅", "🔥", "😎", "👌", "😏", "🌟", "⚡", "💥", "🎉", "🧘", "🥺", "😉", "🔔", "🤫"];
  
  // Select a random image and reaction
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
  
  // React to the command first with a random emoji
  EliteProTech.sendMessage(m.chat, {
    react: { text: randomReaction, key: m.key } // Random reaction emoji
  });
  
  // Send the image immediately after reacting
  EliteProTech.sendMessage(m.chat, {
      image: { url: randomImage }, // Randomly selected image
      caption: elitemenuoh,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterName: "ᴇʟɪᴛᴇᴘʀᴏ-ᴛᴇᴄʜ-ꜱᴜᴘᴘᴏʀᴛ",
          newsletterJid: "120363287352245413@newsletter",
        },
        externalAdReply: {
          title: '𝗘𝗟𝗜𝗧𝗘-𝗣𝗥𝗢-𝗩𝟭',
          body: 'Tap here to join our official channel',
          thumbnailUrl: elitepropp,
          sourceUrl: global.link,
          mediaType: 1,
          renderLargerThumbnail: false
        }
      }
    }, { quoted: m })
    .then(() => {
      // Fetch the audio URLs from the API *after* the image has been sent
      return axios.get('https://raw.githubusercontent.com/Cyrilix-XMD/cyrilix-store/refs/heads/main/music-url.json');
    })
    .then(response => {
      const audios = response.data; // Assuming the response is an array of URLs
      if (Array.isArray(audios) && audios.length > 0) {
        const randomAudio = audios[Math.floor(Math.random() * audios.length)];
        
        // Send the random audio
        return EliteProTech.sendMessage(m.chat, {
          audio: { url: randomAudio }, // Randomly selected audio
          mimetype: 'audio/mp4', // Ensure proper MIME type
          ptt: true // Set to true if you want it as a voice note
        }, { quoted: m });
      } else {
        console.error('No audio URLs found in the API response.');
      }
    })
    .catch(error => {
      console.error('Error fetching audio URLs:', error);
    });
} else if (typemenu === 'v3') {
                    EliteProTech.sendMessage(m.chat, {
                        video: fs.readFileSync('./EliteProMedia/thumb2.mp4'),
                        caption: elitemenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    EliteProTech.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: elitemenuoh
                        }
                    }, {})
                }
                break
                break
            default:
if (budy.startsWith('=>')) {
    if (!isCreator) return;
    function Return(sul) {
        sat = JSON.stringify(sul, null, 2);
        bang = util.format(sat);
        if (sat == undefined) {
            bang = util.format(sul);
        }
        return; // silenced
    }
    try {
        eval(`(async () => { return ${budy.slice(3)} })()`);
    } catch (e) {
        // silently ignore errors
    }
}

if (budy.startsWith('>')) {
    if (!isCreator) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        // silent
    } catch (err) {
        // silent
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return;
    exec(budy.slice(2), (err, stdout) => {
        // silent
    });
}                
        }
    } catch (err) {
    console.log(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function(err) {
    let e = String(err)
    if (e.includes("conflict")) return
    if (e.includes("Socket connection timeout")) return
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    console.log('Caught exception: ', err)
})