require('./config.js');
const { default: PHONENUMBER_MCC, makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore, generateWAMessageContent, downloadContentFromMessage, prepareWAMessageMedia } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const cfonts = require('cfonts');
const P = require('pino');
const chalk = require("chalk")
const fs = require("fs")
const readline = require('readline');
const clc = require('cli-color');
const yts = require('yt-search');
const moment = require('moment-timezone');
const colors = require("colors");
const os = require('os');
const { uncache, nocache } = require('./lib/loader')
const speed = require('performance-now');
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc');



const color = (text, color) => { return !color ? clc.bold(text) : clc.bold(text) }
function getgroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

require('./index.js')
nocache('../index.js', module => console.log(color('[ INFO ]', 'green'), color(`'${module}'`, 'green'), 'ACTULIZADO'))

    // BANNER
const banner = cfonts.render('The-Jaker\nConsole', {
    font: 'block',         
    align: 'center',          
    background: 'transparent',
    letterSpacing: 0,         
    lineHeight: 1,            
    space: true,              
    maxLength: '0',           
    gradient: ['magenta', 'red', 'yellow', 'green', 'cyan', 'blue', 'white'],
    independentGradient: true,    
    transitionGradient: true,
    env: 'node'
});


const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) });

async function createImage(url) {
			const { imageMessage } = await generateWAMessageContent(
				{ image: fs.readFileSync(url) },
				{ upload: nobest.waUploadToServer }
			);
			return imageMessage;
		}

async function DKBotX() {
    const { state, saveCreds } = await useMultiFileAuthState('./Console-Code-v1🥀');

	const nobest = makeWASocket({
		auth: state,
		logger: P({ level: 'silent' }),
		printQRInTerminal: true,
		mobile: false,
		browser: ['FireFox (linux)', '1.0.0'],
		patchMessageBeforeSending: (message) => {
		   const requiresPatch = !!(
			  message?.interactiveMessage
		   );
		   if (requiresPatch) {
			  message = {
				 viewOnceMessage: {
					message: {
					   messageContextInfo: {
						  deviceListMetadataVersion: 2,
						  deviceListMetadata: {},
					   },
					   ...message,
					},
				 },
			  };
		   }
		   return message;
		}
	  });

function a0_0x1e0b(){const _0x33468b=['$1$3','37384140uJSffi','\x0a~>','649868oDAPep','💻\x20TU\x20CÓDIGO\x20DE\x20EMPAREJAMIENTO:\x20','8010681MLziCC','replace','204502zUQTot','bold','1144VBrwgL','authState','12UgihZI','log','1906266vqoFPM','25344VpZukx','4LFzCMJ','\x0aESCRIBE\x20AQUI:\x20','requestPairingCode','registered','1474105qNlYoq','green'];a0_0x1e0b=function(){return _0x33468b;};return a0_0x1e0b();}const a0_0x24a94a=a0_0x45a5;function a0_0x45a5(_0x23d3ba,_0x17d142){const _0x1e0b3a=a0_0x1e0b();return a0_0x45a5=function(_0x45a5ec,_0x1cbd16){_0x45a5ec=_0x45a5ec-0xf8;let _0x28cf17=_0x1e0b3a[_0x45a5ec];return _0x28cf17;},a0_0x45a5(_0x23d3ba,_0x17d142);}(function(_0xbdd3c8,_0x4bcf44){const _0x52fb8e=a0_0x45a5,_0x12ccfb=_0xbdd3c8();while(!![]){try{const _0x34ce87=parseInt(_0x52fb8e(0x107))/0x1+parseInt(_0x52fb8e(0xfa))/0x2*(-parseInt(_0x52fb8e(0xf8))/0x3)+parseInt(_0x52fb8e(0x103))/0x4+-parseInt(_0x52fb8e(0xfe))/0x5*(parseInt(_0x52fb8e(0x10b))/0x6)+-parseInt(_0x52fb8e(0x105))/0x7+-parseInt(_0x52fb8e(0x109))/0x8*(parseInt(_0x52fb8e(0xf9))/0x9)+parseInt(_0x52fb8e(0x101))/0xa;if(_0x34ce87===_0x4bcf44)break;else _0x12ccfb['push'](_0x12ccfb['shift']());}catch(_0x440357){_0x12ccfb['push'](_0x12ccfb['shift']());}}}(a0_0x1e0b,0xaa5e2));function limpiarNumero(_0x5e1c5e){const _0x20b1d0=a0_0x45a5,_0x1fadef=_0x5e1c5e[_0x20b1d0(0x106)](/\D/g,''),_0x1459aa=_0x1fadef[_0x20b1d0(0x106)](/^(\d{2})(9)?(\d{8,9})$/,_0x20b1d0(0x100));return _0x1459aa;}store['bind'](nobest['ev']);if(!nobest[a0_0x24a94a(0x10a)]['creds'][a0_0x24a94a(0xfd)]){const phoneNumber=await question(clc['blue']('\x0a\x0a🟢\x20ESCRIBA\x20TU\x20NÚMERO\x20DE\x20TELÉFONO\x20DE\x20WHATSAPP.\x20\x0aEJEMPLO\x20:\x20'+clc['bold']('+5493772532373')
+a0_0x24a94a(0xfb))),numeroLimpo=limpiarNumero(phoneNumber),code=await nobest[a0_0x24a94a(0xfc)](numeroLimpo);console[a0_0x24a94a(0x10c)](clc[a0_0x24a94a(0xff)](a0_0x24a94a(0x104)+clc[a0_0x24a94a(0x108)](code)+a0_0x24a94a(0x102)));}

nobest.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;

        if (reason === DisconnectReason.badSession) {
            console.log(clc.red(`ARCHIVO DE SESIÓN CORRUPTO, POR FAVOR ELIMINA LA SESIÓN Y ESCANEA NUEVAMENTE.`));
            DKBotX();
        } else if (reason === DisconnectReason.connectionClosed) {
            console.log(clc.red(`CONEXIÓN CERRADA, RECONECTANDO...`));
            DKBotX();
        } else if (reason === DisconnectReason.connectionLost) {
            console.log(clc.red(`CONEXIÓN PERDIDA CON EL SERVIDOR, RECONECTANDO...`));
            DKBotX();
        } else if (reason === DisconnectReason.connectionReplaced) {
            console.log(clc.red(`CONEXIÓN REEMPLAZADA, SE HA ABIERTO OTRA SESIÓN NUEVA. POR FAVOR, CIERRA LA SESIÓN ACTUAL PRIMERO.`));
            DKBotX();
        } else if (reason === DisconnectReason.loggedOut) {
            console.log(clc.red(`EL DISPOSITIVO HA CERRADO LA SESIÓN. POR FAVOR, ESCANEA DE NUEVO Y EJECUTA.`));
            DKBotX();
        } else if (reason === DisconnectReason.restartRequired) {
            console.log(clc.red(`ES NECESARIO REINICIAR, REINICIANDO...`));
            DKBotX();
        } else if (reason === DisconnectReason.timedOut) {
            console.log(clc.red(`TIEMPO DE CONEXIÓN AGOTADO, RECONECTANDO...`));
            DKBotX();
        } else {
            nobest.end(clc.red(`RAZÓN DE DESCONEXIÓN DESCONOCIDA.: ${reason}|${connection}`));
        }
    } else if (connection == "connecting" || update.receivedPendingNotifications == "false") {
        console.log(clc.yellow(`\nINICIANDO 𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝...`));
    } else if (connection == "open" || update.receivedPendingNotifications == "true") {
        console.log(banner.string);
        console.log(clc.xterm(202)(`𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝`));
        console.log(clc.cyan(`\n╔═══════════════════════════════════════════════╗`));
        console.log(clc.cyan(`║              𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝            ║`));
        console.log(clc.cyan(`╚═══════════════════════════════════════════════╝`));
        console.log(clc.red(clc.blue(`\nBASE CREADA POR: 𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉`)));
        console.log(clc.blue(`\nINSTAGRAM: @jaker.el.tanke`));
    }
});

// FIN DE LA CONEXIÓN
    nobest.ev.on('creds.update', saveCreds);

    nobest.ev.on('chats.set', () => {
        console.log(clc.cyan('Chats en el equipo'), store.chats.all());
    });

    nobest.ev.on('contacts.set', () => {
        console.log(clc.cyan('Contactos en el equipo'), Object.values(store.contacts));
    });

nobest.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 const body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

const budy = (type === "conversation") ? info.message.conversation : (type === "viewOnceMessageV2") ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : (type === "imageMessage") ? info.message.imageMessage.caption : (type === "videoMessage") ? info.message.videoMessage.caption : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : (type === "viewOnceMessage") ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : (type === "documentWithCaptionMessage") ? info.message.documentWithCaptionMessage.message.documentMessage.caption : (type === "buttonsMessage") ? info.message.buttonsMessage.imageMessage.caption : (type === "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : (type === "listResponseMessage") ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type === "templateButtonReplyMessage") ? info.message.templateButtonReplyMessage.selectedId : (type === "groupInviteMessage") ? info.message.groupInviteMessage.caption : (type === "pollCreationMessageV3") ? info.message.pollCreationMessageV3 : (type === "interactiveResponseMessage") ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (type === "text") ? info.text : "" 

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// CONST isGroup, ETC...
const participants = m.isGroup ? await groupMetadata.participants : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
const isGroup = from.endsWith('@g.us');
const groupOwner = m.isGroup ? groupMetadata.isOwner : ''
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await nobest.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getgroupAdmins(groupMembers) : ''
const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null;
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const text = args.join(" ")
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || "";
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? nobest.sendMessage(from, {text: teks.trim(), mentions: memberr }) : nobest.sendMessage(from, {text: teks.trim(), mentions: memberr })}
const pushname = info.pushName ? info.pushName : ""
const nome = info.pushName ? info.pushName : '';
// OTRAS CONST...
const owner = JSON.parse(fs.readFileSync('./src/role/owner.json'))

const isBot = info.key.fromMe ? true : false;
const isOwner = global.numeroOwner.includes(sender);
const BotNumber = nobest.user.id.split(':')[0]+'@s.whatsapp.net';
const isGroupAdmins = groupAdmins.includes(sender) || false;
const isBotgroupAdmins = groupAdmins.includes(BotNumber) || false;
// CONST STATUS...
const JakerConsoleCreator = [BotNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const {
  quotedMsg,
  mentioned,
  now,
  fromMe
} = m

        //CONST STICKERS...
        const ConsoleStickWait = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/wait.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}
			const ConsoleStickAdmin = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/admin.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}
			const ConsoleStickBotAdmin = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/botadmin.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}
			const ConsoleStickOwner = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/owner.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}
			const ConsoleStickGroup = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/group.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}
			const ConsoleStickPrivate = () => {
			let ConsoleStick = fs.readFileSync('./ConsoleMedia/stickers/private.webp')
			nobest.sendMessage(from, { sticker: ConsoleStick }, { quoted: m })
			}

// OTROS...
 const reply = (content, type, options = {}) => {
  const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return nobest.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Error al enviar el mensaje");
})
}
 
const enviar = (texto) => {
nobest.sendMessage(from,{text : texto , contextInfo: {
      mentionedJid: [sender],
      "externalAdReply": {
        "title": '🥀🇦🇴𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝🇦🇴🥀',
        "body": '🥀🇦🇴𝑵𝒐 𝑯𝒂𝒄𝒆𝒎𝒐𝒔 𝑫𝒆𝒗𝒐𝒍𝒖𝒄𝒊𝒐𝒏𝒆𝒔🇦🇴🥀',
        "showAdAttribution": true,
        "thumbnailUrl": 'https://telegra.ph/file/fe8b0bed9e6a6a14960c2.jpg',
        "sourceUrl": 'https://whatsapp.com/channel/0029Vae39C3HAdNQfTjmSD31'
      }
    }})
    }    

// FECHA 
const dkhora = moment.tz('America/Havana').format('HH:mm:ss');
const dkfecha = moment.tz('America/Havana').format('DD/MM/YYYY');
const time2 = moment().tz('America/Havana').format('HH:mm:ss');

let horario;

if (time2 < "05:00:00") {
horario = `¡ʙᴜᴇɴᴀs ᴍᴀᴅʀᴜɢᴀᴅᴀs! 🌙`;
} else if (time2 < "12:00:00") {
horario = `¡ʙᴜᴇɴᴏs ᴅɪ́ᴀs! ☀️`;
} else if (time2 < "19:00:00") {
horario = `¡ʙᴜᴇɴᴀs ᴛᴀʀᴅᴇs! 🌅`;
} else if (time2 < "24:00:00") {
horario = `¡ʙᴜᴇɴᴀs ɴᴏᴄʜᴇs! 🌌`;
}

 // CONSTANTES ISSS 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}

async function createDocument(url, filename) {
const { documentMessage } = await generateWAMessageContent(
	{ document: fs.readFileSync(url), mimetype: 'application/pdf', fileName: filename },
	{ upload: nobest.waUploadToServer }
);
return documentMessage;
}

async function createAudio(url) {
const { audioMessage } = await generateWAMessageContent(
	{ audio: fs.readFileSync(url), mimetype: 'audio/mp4' },
	{ upload: nobest.waUploadToServer }
);
return audioMessage;
}

async function createSticker(url) {
const { stickerMessage } = await generateWAMessageContent(
	{ sticker: fs.readFileSync(url) },
	{ upload: nobest.waUploadToServer }
);
return stickerMessage;
}

async function createFile(url, mimetype, filename) {
const { documentMessage } = await generateWAMessageContent(
	{ document: fs.readFileSync(url), mimetype, fileName: filename },
	{ upload: nobest.waUploadToServer }
);
return documentMessage;
}



async function createImage(url) {
  const { imageMessage } = await generateWAMessageContent(
	{ image: fs.readFileSync(url) },
	{ upload: nobest.waUploadToServer }
  );
  return imageMessage;
}

async function createVideo(url) {
const { videoMessage } = await generateWAMessageContent(
	{ video: fs.readFileSync(url), mimetype: 'video/mp4' },
	{ upload: nobest.waUploadToServer }
);
return videoMessage;

}

 // MENSAJE DE CONSOLA
const TipoDeMensaje = comando ? "COMANDO" : type === "audioMessage" ? "AUDIO" : type === "stickerMessage" ? "STICKER" : type === "imageMessage" ? "IMAGEN" : type === "videoMessage" ? "VÍDEO" : type === "documentMessage" ? "DOCUMENTO" : type === "contactMessage" ? "CONTACTO" : type === "locationMessage" ? "UBICACIÓN" : type === "pollMessage" ? "ENCUESTA" : type === "pollCreationMessage" ? "ENCUESTA CREADA" : "MENSAJE";
const TipoDispositivo = info.key.id.length === 20 ? 'iPhone' : info.key.id.length === 32 ? 'Android' : info.key.id.length === 16 ? 'Baileys' : info.key.id.length === 22 ? 'Web Browser' : info.key.id.length === 18 ? 'Desktop' : info.key.id.length > 21 ? 'Android' : 'WhatsApp web';

const numeroDono = '573046392280@s.whatsapp.net';
const isDono = numeroDono.includes(sender);

if (!isGroup && isCmd) {
    console.log(chalk.green(`
╭──────────────────────────────────────────────────────────────
│                🌟🌟🌟 MENSAJE PRIVADO 🌟🌟🌟
│ ─────────────────────────────────────────────────────────────
│ 🔢 〔 ID 〕: ${from}
│ 👤 〔 ENVIADO POR 〕: ${sender}
│ 💬 〔 NIICK 〕: ${pushname}
│ 📝 〔 COMANDO 〕: ${comando}
│ 📱 〔 DISPOSITIVO 〕: ${TipoDispositivo}
│ 📂 〔 TIPO 〕: ${TipoDeMensaje}
╰──────────────────────────────────────────────────────────────
`));
}

if (isCmd && isGroup) {
    console.log(chalk.green(`
╭──────────────────────────────────────────────────────────────
│                🌐🌐🌐 MENSAJE DE GRUPO 🌐🌐🌐
│ ─────────────────────────────────────────────────────────────
│ 🔢 〔 ID 〕: ${from}
│ 📚 〔 GRUPO 〕: ${groupName}
│ 👤 〔 ENVIADO POR 〕: ${sender}
│ 💬 〔 NIICK 〕: ${pushname}
│ 📝 〔 COMANDO 〕: ${comando}
│ 📱 〔 DISPOSITIVO 〕: ${TipoDispositivo}
│ 📂 〔 TIPO 〕: ${TipoDeMensaje}
╰──────────────────────────────────────────────────────────────
`));
}


switch(comando) {
case 'prueba-reply':
reply('Esta es una prueba del comando con "Reply"')
break;

case 'menu': {
let ConsoleMenu2 = `╭⪫══════════════════════⪫
│ ✔️🚁 *𝖲𝗎𝗉𝗈𝗋𝗍𝖾:* 
│﹝𝑪𝑴𝑫 𝑱𝑨𝑲𝑬𝑹🇦🇴﹞
│ wa.me/+5352531124
│
│✔🔱 *𝖢𝗋𝖾𝖺𝖽𝗈𝗋:*
│﹝𝑪𝑴𝑫 𝑱𝑨𝑲𝑬𝑹🇦🇴﹞
│ wa.me/+5352531124
│
│﹝𝐑𝐉𝟏𝟓⍚𝚸𝚯𝐋𝚽⁶⁶⁶🇦🇴﹞
│wa.me/+573237946655
│
│COMANDOS PRUEBAS
│
│-${prefixo}prueba-reply
│-${prefixo}prueba-enviar
│-${prefixo}trava
│-${prefixo}crshgod
│-${prefixo}prueba
│-${prefixo}admin
│-${prefixo}credits
│-${prefixo}menu 
│===comandos definidos===
│-${prefixo}oof
│
│  𝚻𝐑𝚫𝛁𝚫𝐒 𝐃𝚯 𝐖𝚮𝚫𝚻𝐒𝚫𝚸𝚸
│〢〩𝙍𝘼𝙉𝙂𝙊 𝘿𝙀 𝙋𝙀𝙇𝙄𝙂𝙍𝙊〩〣
│➜𝚂𝚞𝚊𝚟𝚎       ✪
│➜𝙽𝚘𝚛𝚖𝚊𝚕    〄
│➜𝙶𝚛𝚊𝚗𝚍𝚎    ㋰
│➜𝙱𝚎𝚜𝚝𝚒𝚊    𖤍
│
│𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺 𝑷𝑨𝑹𝑨 𝑴𝑨𝑻𝑨𝑹
│
│𖤍➜ ${prefixo}oof
│🥀🇦🇴𝑵𝒐 𝑯𝒂𝒄𝒆𝒎𝒐𝒔 𝑫𝒆𝒗𝒐𝒍𝒖𝒄𝒊𝒐𝒏𝒆𝒔🇦🇴🥀
╰════════════════════════╯
`
  {
  let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
  "deviceListMetadata": {},
  "deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
  body: proto.Message.InteractiveMessage.Body.create({
    text: ConsoleMenu2
  }),
  footer: proto.Message.InteractiveMessage.Footer.create({
    text: botname
  }),
  header: proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia({ image : fs.readFileSync('./ConsoleMedia/menus/console.png')}, { upload: nobest.waUploadToServer})),
          title: ``,
          gifPlayback: true,
          subtitle: ownername,
          hasMediaAttachment: false
        }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
    buttons: [
      {
        "name": "single_select",
        "buttonParamsJson":
`{"title":"𝑴𝒆𝒏𝒖🌹💀💤",
"sections":[{"title":"${botname}",
"rows":[{"header":"𝑪𝑹𝑨𝑺𝑯 𝑴𝑬𝑵𝑼",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"𝕮𝖗𝖆𝖘𝖍 𝖇𝖞 𝕯𝖊𝖒𝖔𝖓 𝖝 𝕵𝖆𝖐𝖊𝖗",
"id":"${prefixo}bugmenu"},
{"header":"𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊𝖘 𝖇𝖞 𝕯𝖊𝖒𝖔𝖓 𝖝 𝕵𝖆𝖐𝖊𝖗",
"id":"${prefixo}databasemenu"},
{"header":"𝑶𝑾𝑵𝑬𝑹",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"𝕺𝖜𝖓𝖊𝖗 𝖇𝖞 𝕯𝖊𝖒𝖔𝖓 𝖝 𝕵𝖆𝖐𝖊𝖗",
"id":"${prefixo}ownermenu"},
{"header":"𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀs ʟᴀs ᴏᴘᴄɪᴏɴᴇs ᴅᴇ ᴅᴇsᴄᴀʀɢᴀs",
"id":"${prefixo}downloadmenu"},
{"header":"𝑰𝑵𝑻𝑬𝑳𝑰𝑮𝑬𝑵𝑪𝑰𝑨 𝑨𝑹𝑻𝑰𝑭𝑰𝑪𝑰𝑨𝑳 (𝑰𝑨)",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀs ʟᴀs ᴏᴘᴄɪᴏɴᴇs ᴅᴇ ɪᴀ",
"id":"${prefixo}aimenu"},
{"header":"𝑮𝑹𝑼𝑷𝑶𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀs ʟᴀs ᴏᴘᴄɪᴏɴᴇs sᴏʟᴏ ᴘᴀʀᴀ ɢʀᴜᴘᴏs",
"id":"${prefixo}groupmenu"},
{"header":"𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑰𝑫𝑶𝑹𝑬𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀs ʟᴀs ᴏᴘᴄɪᴏɴᴇs ᴅᴇ ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇs",
"id":"${prefixo}convertmenu"},
{"header":"𝑺𝑻𝑰𝑪𝑲𝑬𝑹𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴛᴏᴅᴀs ʟᴀs ᴏᴘᴄɪᴏɴᴇs ᴅᴇ sᴛɪᴄᴋᴇʀs",
"id":"${prefixo}stickermenu"},
{"header":"𝑶𝑻𝑹𝑶𝑺",
"title":"ᴄʟɪᴄᴋ ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀʟᴏ",
"description":"ᴍᴜᴇsᴛʀᴀ ᴏᴛʀᴀs ᴏᴘᴄɪᴏɴᴇs",
"id":"${prefixo}othermenu"}]
}]
}`
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"YouTube 🎥\",\"url\":\"https://youtube.com/@thedemonxzzz?si=-Aca3ud5S1gGz4_F\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"Telegram ☁️\",\"url\":\"https://t.me/+RzochQpC55wyODlh\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"Instagram 📱\",\"url\":\"https://www.instagram.com/demon.cdn?igsh=MTVxaWZkNHI5anhvZg==\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
         "name": "cta_url",
         "buttonParamsJson": "{\"display_text\":\"WhatsApp 🪀\",\"url\":\"https://whatsapp.com/channel/0029VaihokN6WaKsmXPE1h1W\",\"merchant_url\":\"https://www.google.com\"}"
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Owner 👤","id":"${prefixo}owner"}`
      },
      {
        "name": "quick_reply",
        "buttonParamsJson": `{"display_text":"Script 📃","id":"${prefixo}script"}`
      }
   ],
  }),
  contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363222395675670@newsletter',
          newsletterName: ownername,
          serverMessageId: 143
        }
        }
})
}
}
}, { quoted: m })

await nobest.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
}
break

case 'cmd':
reply(`

    🥀🇦🇴𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝🇦🇴🥀
    
╭⪫══════════════════════⪫
│   𝗰𝗺𝗱(comandos en desarrollo) 
│
│ -!s
│ -!play
│ -!playvideo
│ -!reporte
│
│
│ 
│
│
│  
│  𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡:
│𝗹𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗺𝗲𝗻𝗰𝗶𝗼𝗻𝗮𝗱𝗼𝘀 𝗲𝗻 𝗲𝗹 
│𝗺𝗲𝗻𝘂, 𝗲𝘀𝘁𝗮𝗻 𝗲𝗻 𝗽𝗿𝘂𝗲𝗯𝗮 𝗱𝗲 
│𝗱𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗼, 𝗹𝗼 𝗾𝘂𝗲 𝘀𝗶𝗴𝗻𝘂𝗳𝗶𝗰𝗮 𝗾𝘂𝗲 𝗹𝗼𝘀
│𝗱𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗲𝘀 𝗲𝘀𝘁𝗮𝗻 𝘁𝗿𝗮𝗯𝗮𝗷𝗮𝗻𝗱𝗼
│𝗲𝗹𝗹𝗼𝘀.
│
│ 
╰════════════════════════╯`);
break;

case 'menucrash':
  enviar(`

    🥀🇦🇴𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝🇦🇴🥀
    
╭⪫══════════════════════⪫
│ 
│
│
│
│vacio por el momento
│
│
│
│
│
│
│
│
│
│
│
│
│
│
│ 
╰════════════════════════╯`)

case 'prueba-enviar':
enviar('Esta es una prueba del comando con "Enviar"')
break

case "spamlnk": {
  if (!args[0])
  return reply(
    `Use ${prefixo + comando} numero\nEjemplo ${
      prefixo + comando
    } 5352xxxxxx`
  );
  victim = text.split("|")[0] + "@s.whatsapp.net";
  for (let _0x1c91ca = 0; _0x1c91ca < 1; _0x1c91ca++) {
    const _0x1745e3 = {};
    _0x1745e3.fromMe = true;
    _0x1745e3.remoteJid = "status@broadcast";
    _0x1745e3.participant = "9929999999999@s.whatsapp.net";
    _0x1745e3.quotedMessage = {};
    _0x1745e3.quotedMessage.listResponseMessage = {};
    _0x1745e3.quotedMessage.listResponseMessage.title = `✨👑💀🌹🏴‍☠『𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉』🇦🇱❄💀👑💤
                      «📱𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉🖥»

<𝘎𝘳𝘶𝘱𝘰 𝘰𝘧𝘪𝘤𝘪𝘢𝘭 𝘑𝘢𝘬𝘦𝘯𝘦𝘪𝘵𝘰𝘳>

💠𝐄𝐍𝐒𝐄Ñ𝐀𝐍𝐙𝐀𝐒🔱

🇷 🇪 🇬 🇱 🇦 🇸 
🚫𝙿𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘🚫
🤬𝙾𝚏𝚎𝚗𝚜𝚊𝚜🤬
☠𝙰𝚖𝚎𝚗𝚊𝚣𝚊𝚜☠
👀𝚅𝚎𝚗𝚝𝚊 𝚍𝚎 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 𝚏𝚛𝚊𝚞𝚍𝚞𝚕𝚒𝚎𝚗𝚝𝚘 𝚢 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗👀
👨🏽‍💻𝚃𝚛𝚊𝚋𝚊𝚜/𝙰𝚝𝚊𝚚𝚞𝚎𝚜 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘👨🏽‍💻
🏳‍🌈𝙲𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 +18/𝙽𝚂𝙵𝚆/𝙲𝙿/𝙶𝚘𝚛𝚎🏳‍🌈
📌𝙻𝚒𝚗𝚔𝚜 𝚍𝚎 𝚘𝚝𝚛𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚘 𝚌𝚊𝚗𝚊𝚕𝚎𝚜 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗📍
📣𝚂𝚙𝚊𝚖📣
🚸𝙰𝚌𝚘𝚜𝚘🚸
🤖𝙱𝚘𝚝𝚜 (𝚎𝚡𝚌𝚎𝚙𝚝𝚘 𝚎𝚕 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚘𝚛 𝚍𝚎𝚏𝚎𝚌𝚝𝚘)🤖
⚠𝙽𝚞𝚖𝚎𝚛𝚘𝚜 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜⚠
👁𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚎𝚗 𝚜𝚙𝚊𝚖👁
🌀𝙰𝚙𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚍𝚊ñ𝚒𝚗𝚊𝚜🌀
📱𝙰𝚛𝚌𝚑𝚒𝚟𝚘𝚜 𝚍𝚊ñ𝚒𝚗𝚘𝚜📱

🙌🏼𝙿𝚎𝚛𝚖𝚒𝚝𝚒𝚍𝚘🙌🏼
🖼𝚅𝚒𝚍𝚎𝚘𝚜🖼
📷𝙵𝚘𝚝𝚘𝚜📷
🎵𝙼𝚞𝚜𝚒𝚌𝚊𝚜🎵

❄🌹🄰🄳🄼🄸🄽💀🅂🅄🄿🅁🄴🄼🄾💤✨
𝕿𝖍𝖊 𝕵𝖆𝖐𝖊𝖗 𝕲𝖔𝖉🌹❄💀💤✨

❄🄰🄳🄼🄸🄽🅂☠🅂🅄🄿🄴🅁🄸🄾🅁💤
𝑩𝒍𝒂𝒖_. ❄☠💤💙
POLO❄☠💤

🌹🄰🄳🄼🄸🄽🅂🏴‍☠🄲🄰🄳🄴🅃🄴✨

🇱 🇮 🇳 🇰 ┊🇪 🇳 🇱 🇦 🇨 🇪 
💎亗᭄×͜×➣〘 https://chat.whatsapp.com/J1uu4xQF8F2AXRD6A5HMDw 〙×᷼×᭄亗💎

┊ 𝚨𝐋𝚰𝚫𝚴𝚭𝚨 ┊

𝐁𝐋𝐀𝐂𝐊 𝐒𝐊𝐔𝐋𝐋𝐒 [ 𝐁𝐊 ]

ꪶ𝚫𝚻𝚻𝚵ꫂ⫶ 𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉`;
    const _0x3f0435 = {};
    _0x3f0435.text = `✨👑💀🌹🏴‍☠『𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉』🇦🇱❄💀👑💤
                      «📱𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉🖥»

<𝘎𝘳𝘶𝘱𝘰 𝘰𝘧𝘪𝘤𝘪𝘢𝘭 𝘑𝘢𝘬𝘦𝘯𝘦𝘪𝘵𝘰𝘳>

💠𝐄𝐍𝐒𝐄Ñ𝐀𝐍𝐙𝐀𝐒🔱

🇷 🇪 🇬 🇱 🇦 🇸 
🚫𝙿𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘🚫
🤬𝙾𝚏𝚎𝚗𝚜𝚊𝚜🤬
☠𝙰𝚖𝚎𝚗𝚊𝚣𝚊𝚜☠
👀𝚅𝚎𝚗𝚝𝚊 𝚍𝚎 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 𝚏𝚛𝚊𝚞𝚍𝚞𝚕𝚒𝚎𝚗𝚝𝚘 𝚢 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗👀
👨🏽‍💻𝚃𝚛𝚊𝚋𝚊𝚜/𝙰𝚝𝚊𝚚𝚞𝚎𝚜 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘👨🏽‍💻
🏳‍🌈𝙲𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 +18/𝙽𝚂𝙵𝚆/𝙲𝙿/𝙶𝚘𝚛𝚎🏳‍🌈
📌𝙻𝚒𝚗𝚔𝚜 𝚍𝚎 𝚘𝚝𝚛𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚘 𝚌𝚊𝚗𝚊𝚕𝚎𝚜 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗📍
📣𝚂𝚙𝚊𝚖📣
🚸𝙰𝚌𝚘𝚜𝚘🚸
🤖𝙱𝚘𝚝𝚜 (𝚎𝚡𝚌𝚎𝚙𝚝𝚘 𝚎𝚕 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚘𝚛 𝚍𝚎𝚏𝚎𝚌𝚝𝚘)🤖
⚠𝙽𝚞𝚖𝚎𝚛𝚘𝚜 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜⚠
👁𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚎𝚗 𝚜𝚙𝚊𝚖👁
🌀𝙰𝚙𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚍𝚊ñ𝚒𝚗𝚊𝚜🌀
📱𝙰𝚛𝚌𝚑𝚒𝚟𝚘𝚜 𝚍𝚊ñ𝚒𝚗𝚘𝚜📱

🙌🏼𝙿𝚎𝚛𝚖𝚒𝚝𝚒𝚍𝚘🙌🏼
🖼𝚅𝚒𝚍𝚎𝚘𝚜🖼
📷𝙵𝚘𝚝𝚘𝚜📷
🎵𝙼𝚞𝚜𝚒𝚌𝚊𝚜🎵

❄🌹🄰🄳🄼🄸🄽💀🅂🅄🄿🅁🄴🄼🄾💤✨
𝕿𝖍𝖊 𝕵𝖆𝖐𝖊𝖗 𝕲𝖔𝖉🌹❄💀💤✨

❄🄰🄳🄼🄸🄽🅂☠🅂🅄🄿🄴🅁🄸🄾🅁💤
𝑩𝒍𝒂𝒖_. ❄☠💤💙
POLO❄☠💤

🌹🄰🄳🄼🄸🄽🅂🏴‍☠🄲🄰🄳🄴🅃🄴✨

🇱 🇮 🇳 🇰 ┊🇪 🇳 🇱 🇦 🇨 🇪 
💎亗᭄×͜×➣〘 https://chat.whatsapp.com/J1uu4xQF8F2AXRD6A5HMDw 〙×᷼×᭄亗💎

┊ 𝚨𝐋𝚰𝚫𝚴𝚭𝚨 ┊

𝐁𝐋𝐀𝐂𝐊 𝐒𝐊𝐔𝐋𝐋𝐒 [ 𝐁𝐊 ]

ꪶ𝚫𝚻𝚻𝚵ꫂ⫶ 𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉`;
    _0x3f0435.contextInfo = _0x1745e3;
    const _0xe75982 = { extendedTextMessage: _0x3f0435 };
    var _0xccbce4 = _0xe75982;
    await nobest.relayMessage(victim, _0xccbce4, {
      participant: { jid: from },
    });
    await sleep(300);
    await nobest.relayMessage(victim, _0xccbce4, {
      participant: { jid: from },
    });
    const _0x46dd60 = {};
    _0x46dd60.text = `✨👑💀🌹🏴‍☠『𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉』🇦🇱❄💀👑💤
                      «📱𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉🖥»

<𝘎𝘳𝘶𝘱𝘰 𝘰𝘧𝘪𝘤𝘪𝘢𝘭 𝘑𝘢𝘬𝘦𝘯𝘦𝘪𝘵𝘰𝘳>

💠𝐄𝐍𝐒𝐄Ñ𝐀𝐍𝐙𝐀𝐒🔱

🇷 🇪 🇬 🇱 🇦 🇸 
🚫𝙿𝚛𝚘𝚑𝚒𝚋𝚒𝚍𝚘🚫
🤬𝙾𝚏𝚎𝚗𝚜𝚊𝚜🤬
☠𝙰𝚖𝚎𝚗𝚊𝚣𝚊𝚜☠
👀𝚅𝚎𝚗𝚝𝚊 𝚍𝚎 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 𝚏𝚛𝚊𝚞𝚍𝚞𝚕𝚒𝚎𝚗𝚝𝚘 𝚢 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗👀
👨🏽‍💻𝚃𝚛𝚊𝚋𝚊𝚜/𝙰𝚝𝚊𝚚𝚞𝚎𝚜 𝚊𝚕 𝚐𝚛𝚞𝚙𝚘👨🏽‍💻
🏳‍🌈𝙲𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘 +18/𝙽𝚂𝙵𝚆/𝙲𝙿/𝙶𝚘𝚛𝚎🏳‍🌈
📌𝙻𝚒𝚗𝚔𝚜 𝚍𝚎 𝚘𝚝𝚛𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚘 𝚌𝚊𝚗𝚊𝚕𝚎𝚜 𝚜𝚒𝚗 𝚙𝚎𝚛𝚖𝚒𝚜𝚘 𝚍𝚎𝚕 𝚊𝚍𝚖𝚒𝚗📍
📣𝚂𝚙𝚊𝚖📣
🚸𝙰𝚌𝚘𝚜𝚘🚸
🤖𝙱𝚘𝚝𝚜 (𝚎𝚡𝚌𝚎𝚙𝚝𝚘 𝚎𝚕 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚘𝚛 𝚍𝚎𝚏𝚎𝚌𝚝𝚘)🤖
⚠𝙽𝚞𝚖𝚎𝚛𝚘𝚜 𝚟𝚒𝚛𝚝𝚞𝚊𝚕𝚎𝚜⚠
👁𝙴𝚝𝚒𝚚𝚞𝚎𝚝𝚊𝚛 𝚊 𝚕𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜 𝚎𝚗 𝚜𝚙𝚊𝚖👁
🌀𝙰𝚙𝚕𝚒𝚌𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚍𝚊ñ𝚒𝚗𝚊𝚜🌀
📱𝙰𝚛𝚌𝚑𝚒𝚟𝚘𝚜 𝚍𝚊ñ𝚒𝚗𝚘𝚜📱

🙌🏼𝙿𝚎𝚛𝚖𝚒𝚝𝚒𝚍𝚘🙌🏼
🖼𝚅𝚒𝚍𝚎𝚘𝚜🖼
📷𝙵𝚘𝚝𝚘𝚜📷
🎵𝙼𝚞𝚜𝚒𝚌𝚊𝚜🎵

❄🌹🄰🄳🄼🄸🄽💀🅂🅄🄿🅁🄴🄼🄾💤✨
𝕿𝖍𝖊 𝕵𝖆𝖐𝖊𝖗 𝕲𝖔𝖉🌹❄💀💤✨

❄🄰🄳🄼🄸🄽🅂☠🅂🅄🄿🄴🅁🄸🄾🅁💤
𝑩𝒍𝒂𝒖_. ❄☠💤💙
POLO❄☠💤

🌹🄰🄳🄼🄸🄽🅂🏴‍☠🄲🄰🄳🄴🅃🄴✨

🇱 🇮 🇳 🇰 ┊🇪 🇳 🇱 🇦 🇨 🇪 
💎亗᭄×͜×➣〘 https://chat.whatsapp.com/J1uu4xQF8F2AXRD6A5HMDw 〙×᷼×᭄亗💎

┊ 𝚨𝐋𝚰𝚫𝚴𝚭𝚨 ┊

𝐁𝐋𝐀𝐂𝐊 𝐒𝐊𝐔𝐋𝐋𝐒 [ 𝐁𝐊 ]

ꪶ𝚫𝚻𝚻𝚵ꫂ⫶ 𝙲𝙼𝙳 𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉`;
    nobest.sendMessage(victim, _0x46dd60);
  }

  break;
}


default:



} 

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('INDEX A SIDO MODIFICADO, REINICIANDO. . . 🔄');
process.exit()
}
}) 


} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("No se pudo encontrar MIME para Buffer <null>") && !e.includes("No se puede leer la propiedad 'conversation' de null") && !e.includes("No se puede leer la propiedad 'contextInfo' de indefinido") && !e.includes("No se puede establecer la propiedad 'mtype' de indefinido") && !e.includes("jid no está definido")) {
console.log('Error : %s', color(e, 'red'))
}}})}
DKBotX()