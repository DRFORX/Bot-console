const chalk = require("chalk")
const fs = require("fs")


global.botname = "𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝"
global.botdesc = "𝙲𝚘𝚗𝚜𝚘𝚕𝚎 𝕿𝖍𝖊 𝕵𝖆𝖐𝖊𝖗"
global.numeroOwner = '573012340668'
global.numeroOwner2 = ["573012340668"]
global.ownername = '〣ᴵᴬᴹ⃟⌬𝐂𝚳𝐃〨𝐉𝚲𝚱𝚵𝐑᭄⃟〢'
global.canal = "https://whatsapp.com/channel/0029Vae39C3HAdNQfTjmSD31"
global.themeemoji = '🥀'
global.wm = "CMDBot."
global.packname = "𝙲𝙼𝙳𝕵𝖆𝖐𝖊𝖗𝕲𝖔𝖉 𝚍𝚞𝚎ñ𝚘 𝚍𝚎𝚕 𝚋𝚘𝚝"
global.author = "𝕿𝖍𝖊-𝕵𝖆𝖐𝖊𝖗-𝙲𝚘𝚗𝚜𝚘𝚕𝚎-𝙱𝚘𝚝"
global.creador = "5352531124@s.whatsapp.net"
global.prefixo = ["."]

// MENSAJES DE RESPUESTAS
global.mess = {
  admin: '*Necesitas ser administrador para usar esta función.* ✨',
  botAdmins: '*Necesito ser administrador para realizar esta función.* 🌟',
  creador: '*Este comando es solo para mi creador.* 👑',
  grupo: '*Este comando es solo para grupos.* 📢',
  private: '*Este comando solo se puede usar en privado.* 🔒',
  espere: '*En proceso... ⏳\nPor favor, espera un momento.*',
  nsfw: '*Los comandos NSFW están desactivados.* 🚫🔞',
  listo: '*Realizado correctamente.* ✅',
  error: '*Error inesperado.* ❌',
  enviado: '*Aquí tienes tu pedido.* 📨'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.cyanBright(`EL ARCHIVO '${__filename}'FUE ACTUALIZADO`))
    delete require.cache[file]
    require(file)
})