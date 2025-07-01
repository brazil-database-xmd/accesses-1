const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the lib directory
app.use(express.static(path.join(__dirname, 'lib')));

// Route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lib', 'index.html'));
});

// Start server silently
app.listen(PORT);
require('./Config')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: EliteProTechConnect, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("baileys")
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("baileys").default

const store = {
    messages: {},
    contacts: {},
    chats: {},
    groupMetadata: async (jid) => {
        return {}
    },
    bind: function(ev) {
        ev.on('messages.upsert', ({ messages }) => {
            messages.forEach(msg => {
                if (msg.key && msg.key.remoteJid) {
                    this.messages[msg.key.remoteJid] = this.messages[msg.key.remoteJid] || {}
                    this.messages[msg.key.remoteJid][msg.key.id] = msg
                }
            })
        })
        
        ev.on('contacts.update', (contacts) => {
            contacts.forEach(contact => {
                if (contact.id) {
                    this.contacts[contact.id] = contact
                }
            })
        })
        
        ev.on('chats.set', (chats) => {
            this.chats = chats
        })
    },
    loadMessage: async (jid, id) => {
        return this.messages[jid]?.[id] || null
    }
}

let phoneNumber = "2348109263390"
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
         
async function startEliteProTech() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    const EliteProTech = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, // popping up QR in terminal log
      browser: [ "Ubuntu", "Chrome", "20.0.04" ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
     auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
      },
      markOnlineOnConnect: true, // set false for offline
      generateHighQualityLinkPreview: true, // make high preview link
      getMessage: async (key) => {
         let jid = jidNormalizedUser(key.remoteJid)
         let msg = await store.loadMessage(jid, key.id)

         return msg?.message || ""
      },
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
   })
   
   store.bind(EliteProTech.ev)

    // login use pairing code
   // source code https://github.com/WhiskeySockets/Baileys/blob/master/Example/example.ts#L61
   if (pairingCode && !EliteProTech.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      let phoneNumber
      if (!!phoneNumber) {
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +2348109263390")))
            process.exit(0)
         }
      } else {
         phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your number below 🥰.\nFor example +2348109263390: `)))
         phoneNumber = phoneNumber.replace(/[^0-9]/g, '')

         // Ask again when entering the wrong number
         if (phoneNumber == "rien" ){
            console.log(chalk.bgBlack(chalk.redBright("Start with country code of your WhatsApp Number, Example : +2348109263390")))

            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number. 🥰\nFor example: +2348109263390 : `)))
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
            rl.close()
         }
      }

      setTimeout(async () => {
         let code = await EliteProTech.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
      }, 3000)
   }

    EliteProTech.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!EliteProTech.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(EliteProTech, mek, store)
            require("./ElitePro")(EliteProTech, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    //autostatus view
        EliteProTech.ev.on('messages.upsert', async chatUpdate => {
        	if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            	await EliteProTech.readMessages([mek.key]) }
            }
    })
//STARTING POINT FOR EXTRA CODES//
//AUTOLIKESTATUS CODEES
// ✅ Track all seen statuses
const seenStatusHashes = new Set();

EliteProTech.ev.on('messages.upsert', async chatUpdate => {
    if (!global.autolikestatus) return;
    
    const mek = chatUpdate.messages[0];
    if (!mek?.message || mek.key.fromMe) return;
    
    const from = mek.key.remoteJid;
    if (from !== 'status@broadcast') return;
    
    const participantJid = mek.key.participant || mek.participant || null;
    if (!participantJid) return;
    
    const msg = mek.message;
    let hash;
    
    // ✅ Use file hash for media statuses, message ID for text
    if (msg.imageMessage?.fileSha256) {
        hash = Buffer.from(msg.imageMessage.fileSha256).toString('base64');
    } else if (msg.videoMessage?.fileSha256) {
        hash = Buffer.from(msg.videoMessage.fileSha256).toString('base64');
    } else if (msg.audioMessage?.fileSha256) {
        hash = Buffer.from(msg.audioMessage.fileSha256).toString('base64');
    } else if (msg.documentMessage?.fileSha256) {
        hash = Buffer.from(msg.documentMessage.fileSha256).toString('base64');
    } else if (msg.conversation || msg.extendedTextMessage?.text) {
        hash = mek.key.id;
    }
    
    if (!hash || seenStatusHashes.has(hash)) return;
    
    try {
        await EliteProTech.readMessages([mek.key]);
        
        const emojis = [
            '❤️', '💸', '😇', '🍂', '💥', '💯', '🔥', '💫', '💎', '💗',
            '🤍', '🖤', '👀', '🙌', '🙆', '🚩', '🥰', '💐', '😎', '🤎',
            '✅', '⚡', '🧡', '😁', '😄', '🌸', '🕊️', '🌷', '⛅', '🌟',
            '🗿', '☠️', '💜', '💙', '🌝', '💚'
        ];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        await EliteProTech.sendMessage(from, {
            react: {
                text: emoji,
                key: mek.key
            }
        }, {
            statusJidList: [participantJid]
        });
        
        seenStatusHashes.add(hash); // ✅ Mark as reacted
        console.log(`✅ Reacted to status from ${participantJid} with ${emoji}`);
    } catch (err) {
        console.error("❌ Status react error:", err.message);
    }
});

// ✅ Clean memory every hour (optional, prevents infinite growth)
setInterval(() => {
    seenStatusHashes.clear();
    console.log("🧼 Cleared status reaction cache.");
}, 60 * 60 * 1000); // 1 hour
//AUTOREACT MESSAGE 
// ✅ Load emojis from JSON
const emojiFile = path.join(__dirname, './lib/autoreact.json');
let emojis = [];

function loadEmojis() {
    try {
        const data = fs.readFileSync(emojiFile, 'utf8');
        const parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) throw new Error('Emoji file is not an array');
        emojis = parsed;
    } catch (err) {
        emojis = []; // fallback to empty
        console.error('❌ Failed to load autoreact emojis:', err.message);
    }
}

loadEmojis(); // Load at start

// ✅ Watch for changes in file (optional hot-reload)
fs.watchFile(emojiFile, () => {
    console.log('🔁 autoreact.json file changed. Reloading...');
    loadEmojis();
});

// ✅ Auto-react on any message
EliteProTech.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        if (!mek?.key || mek.key.fromMe || !mek.key.remoteJid) return;
        
        const jid = mek.key.remoteJid;
        const chatType = jid.endsWith('@g.us') ? 'Group' : 'DM';
        
        // Only react if enabled and emojis loaded
        if (global.autoreact && emojis.length > 0) {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            
            await EliteProTech.sendMessage(jid, {
                react: {
                    text: randomEmoji,
                    key: mek.key
                }
            });
            
            console.log(`✅ Auto-reacted in ${chatType} (${jid}) with ${randomEmoji}`);
        }
    } catch (err) {
        console.error('❌ Auto-react error:', err.message);
    }
});
////chatbot
EliteProTech.ev.on('messages.upsert', async (chatUpdate) => {
  try {
    const mek = chatUpdate.messages[0];
    if (!mek.message || mek.key.fromMe) return;

    // Load chatbot settings
    let chatbotData = {};
    try {
      chatbotData = JSON.parse(fs.readFileSync('./database/chatbot.json'));
    } catch (err) {
      console.error('Error loading chatbot.json:', err);
    }

    // Check if chatbot is globally enabled
    if (!chatbotData.global) return;

    const from = mek.key.remoteJid;
    const text = mek.message.conversation || mek.message.extendedTextMessage?.text || '';
    const sender = mek.key.participant || from;
    const isGroup = from.endsWith('@g.us');

    // In groups: respond only if bot is mentioned, quoted, or replied to
    if (isGroup) {
      const isMentioned = mek.message.extendedTextMessage?.contextInfo?.mentionedJid?.includes(EliteProTech.user.id);
      const isQuoted = mek.message.extendedTextMessage?.contextInfo?.participant === EliteProTech.user.id;
      const isReplied = mek.message.extendedTextMessage?.contextInfo?.stanzaId &&
                        mek.message.extendedTextMessage?.contextInfo?.participant === EliteProTech.user.id;

      if (!isMentioned && !isQuoted && !isReplied) return;
    }

    // Track user message history
    if (!global.userChats) global.userChats = {};
    if (!global.userChats[sender]) global.userChats[sender] = [];

    global.userChats[sender].push(`User: ${text}`);
    if (global.userChats[sender].length > 15) global.userChats[sender].shift();

    const userHistory = global.userChats[sender].join("\n");
    const trimmedHistory = userHistory.slice(-3000); // limit to avoid oversized prompt

    const basePrompt = `
You're ElitePro, an artificial intelligence created by Chinedu (also known as Cyrilix-XMD). Respond naturally and directly. Do not ask repetitive questions like "How can I assist you?".

- **Owner:** Chinedu
- **WhatsApp:** https://wa.me/2347047504860
- **Telegram:** https://t.me/elitepro_md
- **Website:** https://eliteprotech.vercel.app/
- **YouTube:** https://www.youtube.com/@eliteprotech
- **GitHub Project:** https://eliteproverified.vercel.app/

### Services:
- If someone requests a song, reply: ".play [song name]".  
- If someone requests a video, reply: ".video [video name]".  
- If someone requests an image, reply: ".img [image name]".  
- If someone requests menu, reply: ".menu".  
- If someone requests a song, reply: ".song [song name]".

### Conversation History:
${trimmedHistory}
`;

    // Send to ChatEverywhere GPT API
    const gptRes = await axios.post("https://chateverywhere.app/api/chat/", {
      model: {
        id: "gpt-4",
        name: "GPT-4",
        maxLength: 32000,
        tokenLimit: 8000,
        completionTokenLimit: 5000,
        deploymentName: "gpt-4"
      },
      messages: [
        {
          pluginId: null,
          content: text,
          role: "user"
        }
      ],
      prompt: basePrompt,
      temperature: 0.5
    }, {
      headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0"
      }
    });

    const botReply = gptRes.data;

    // Save bot reply to history
    global.userChats[sender].push(`Bot: ${botReply}`);
    if (global.userChats[sender].length > 15) global.userChats[sender].shift();

    await EliteProTech.sendMessage(from, { text: botReply }, { quoted: mek });

  } catch (error) {
    console.error('❌ Chatbot Error:', error);
    await EliteProTech.sendMessage(chatUpdate.messages[0].key.remoteJid, { text: '❌ Error: ' + error.message }, { quoted: chatUpdate.messages[0] });
  }
});
/// Chatbot end///
//ANTILINK DETECT
function isUrl(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
}

EliteProTech.ev.on('messages.upsert', async (chatUpdate) => {
    try {
        const mek = chatUpdate.messages[0];
        if (!mek || !mek.message) return;
        
        mek.message = mek.message.ephemeralMessage?.message || mek.message;
        if (mek.message.protocolMessage) return;
        
        const from = mek.key.remoteJid;
        const sender = mek.key.participant || from;
        const text = mek.message.conversation ||
            mek.message.extendedTextMessage?.text ||
            mek.message.imageMessage?.caption || '';
        
        if (!from.endsWith('@g.us')) return; // Ensure it's a group
        
        // Load AntiLink settings from antilink.json
        let antilinkData = {};
        try {
            antilinkData = JSON.parse(fs.readFileSync('./lib/antilink.json', 'utf8'));
        } catch (err) {
            console.error('Error loading antilink.json:', err);
        }
        
        if (!antilinkData[from]?.enabled) return;
        let actionType = antilinkData[from].action || "warn";
        let warnings = antilinkData[from].warnings || {};
        
        // **Check if the sender is the bot, creator, or admin**
        const creatorNumber = '120363419911991767@s.whatsapp.net'; // Your creator number
        const isBotMessage = mek.key.fromMe;
        const isCreator = sender === creatorNumber;
        
        // ✅ Get group metadata and admin list
        const groupMetadata = await EliteProTech.groupMetadata(from);
        const groupAdmins = groupMetadata.participants
            .filter(participant => participant.admin !== null)
            .map(admin => admin.id);
        
        const isAdmin = groupAdmins.includes(sender);
        
        // ✅ Don't take action if sender is the bot, the creator, or an admin
        if (isBotMessage || isCreator || isAdmin) return;
        
        // ✅ Check if message contains a link
        if (isUrl(text)) {
            console.log(`🔗 Link detected from ${sender}: ${text}`);
            
            // **Action Handling:**
            if (actionType === 'delete') {
                await EliteProTech.sendMessage(from, { delete: mek.key });
                await EliteProTech.sendMessage(from, {
                    text: `_*⚠️@${sender.split('@')[0]} waring links not allowed in this group.‼️*_`,
                    mentions: [sender]
                });
            } else if (actionType === 'kick') {
                await EliteProTech.sendMessage(from, { delete: mek.key });
                await EliteProTech.sendMessage(from, {
                    text: `_*‼️@${sender.split('@')[0]} has been removed from this group for sending link ⿻*_`,
                    mentions: [sender]
                });
                await EliteProTech.groupParticipantsUpdate(from, [sender], "remove");
            } else if (actionType === 'warn') {
                if (!warnings[sender]) {
                    warnings[sender] = 1;
                } else {
                    warnings[sender] += 1;
                }
                
                let warnCount = warnings[sender];
                
                await EliteProTech.sendMessage(from, { delete: mek.key });
                await EliteProTech.sendMessage(from, {
                    text: `_*⚠️@${sender.split('@')[0]} waring links not allowed in this group.‼️*_`,
                    mentions: [sender]
                });
                
                if (warnCount >= 4) {
                    await EliteProTech.groupParticipantsUpdate(from, [sender], "remove");
                    await EliteProTech.sendMessage(from, {
                        text: `_*‼️@${sender.split('@')[0]} has been removed from this group.*_\n*Limit exceeded*`,
                        mentions: [sender]
                    });
                    delete warnings[sender]; // Reset after kick
                }
                
                antilinkData[from].warnings = warnings;
                fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilinkData, null, 2));
            }
        }
    } catch (err) {
        console.error('❌ Error in anti-link detection:', err);
    }
});
//STOPING CODE FOR THE BLOCK HERE//

    EliteProTech.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    EliteProTech.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = EliteProTech.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    EliteProTech.getName = (jid, withoutContact = false) => {
        id = EliteProTech.decodeJid(jid)
        withoutContact = EliteProTech.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = EliteProTech.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === EliteProTech.decodeJid(EliteProTech.user.id) ?
            EliteProTech.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    EliteProTech.public = true

    EliteProTech.serializeM = (m) => smsg(EliteProTech, m, store)

EliteProTech.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
        	console.log(chalk.magenta(` `))
            console.log(chalk.yellow(`✔️  Connected to => ` + JSON.stringify(EliteProTech.user, null, 2)))
			await delay(1999)
			console.log(chalk.yellow(`\n                  ${chalk.bold.blue(`[ ${botname} ]`)}\n`))
console.log(chalk.cyan(`< ================================================== >`))
console.log(chalk.magenta(`╔════════════════════════════╗`));
console.log(chalk.magenta(`║   ELITEPROTECH CONSOLE ║`));
console.log(chalk.magenta(`╚════════════════════════════╝`));
console.log(chalk.magenta(`${themeemoji} YT CHANNEL: EliteProTechs`));
console.log(chalk.magenta(`${themeemoji} GITHUB: EliteProTech`));
console.log(chalk.magenta(`${themeemoji} TELEGRAM: @elite-md`));
console.log(chalk.magenta(`${themeemoji} WA NUMBER: ${owner}`));
console.log(chalk.magenta(`${themeemoji} CREDIT: cyrilix-xmd`));
console.log(chalk.cyan(`< ================================================== >`))
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            startEliteProTech()
        }
    })
    EliteProTech.ev.on('creds.update', saveCreds)
    EliteProTech.ev.on("messages.upsert",  () => { })

    EliteProTech.sendText = (jid, text, quoted = '', options) => EliteProTech.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })
    EliteProTech.sendTextWithMentions = async (jid, text, quoted, options = {}) => EliteProTech.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })
//welcome cmd
EliteProTech.ev.on('group-participants.update', async (update) => {
    if (!global.welcome) return;
    
    try {
        const { id, participants, action } = update;
        if (!id || !participants?.length) return;
        
        let group;
        try {
            group = await EliteProTech.groupMetadata(id);
        } catch (err) {
            console.error("Error fetching group metadata:", err.message);
            return;
        }
        
        const groupName = group.subject || "Group";
        const groupOwner = group.owner || "UnknownOwner";
        const groupDesc = group.desc || "No description available.";
        
        for (const participant of participants) {
            let ppUrl = "https://files.catbox.moe/nwvkbt.png";
            try {
                ppUrl = await EliteProTech.profilePictureUrl(participant, "image");
            } catch (err) {
                // Keep default if not found
            }
            
            const contextInfo = {
                externalAdReply: {
                    showAdAttribution: true,
                    title: groupName,
                    body: "Join our official channel for update",
                    mediaType: 1,
                    thumbnailUrl: "https://raw.githubusercontent.com/Cyrilix-XMD/ELITEPRO-URL-CLOUD/main/20250328_045427.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g",
                }
            };
            
            if (action === "add") {
                let username = "User";
                try {
                    username = await EliteProTech.getName(participant) || "User";
                } catch (err) {}
                
                const welcomeMessage = `*ELITE-PRO-V1 NOTIFICATION*

> *💥Welcome* @${participant.split('@')[0]} to *${groupName}*.

*Please Read Group Description:* 
${groupDesc}

*Group owner:* @${groupOwner.split('@')[0]}
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ©*`;
                
                try {
                    await EliteProTech.sendMessage(id, {
                        image: { url: ppUrl },
                        caption: welcomeMessage,
                        mentions: [participant, groupOwner],
                        contextInfo
                    });
                } catch (err) {
                    console.error("Error sending welcome message:", err.message);
                }
                
            } else if (action === "remove") {
                const farewellMessage = `*ELITE-PRO-V1 NOTIFICATION*

> 😮‍💨 *@${participant.split('@')[0]} Left ${groupName}*

*Please Read Group Description:* 
${groupDesc}

*Group owner:* @${groupOwner.split('@')[0]}
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴇʟɪᴛᴇ-ᴘʀᴏ©*`;
                
                try {
                    await EliteProTech.sendMessage(id, {
                        image: { url: ppUrl },
                        caption: farewellMessage,
                        mentions: [participant, groupOwner],
                        contextInfo
                    });
                } catch (err) {
                    console.error("Error sending farewell message:", err.message);
                }
            }
        }
    } catch (err) {
        console.error("Auto-Welcome Handler Error:", err.message);
    }
});    
//Sticker code    
    EliteProTech.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await EliteProTech.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    EliteProTech.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await EliteProTech.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }
    EliteProTech.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    EliteProTech.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }

        return buffer
    }
    }
return startEliteProTech()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
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