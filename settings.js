require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6283869453279"
global.namaowner = "LatipGanteng"

//======== Setting Bot & Link ========//
global.namabot = "VINTRZY HOSTING" 
global.idsaluran = "120363388630858326@newsletter"
global.linkgc = 'https://chat.whatsapp.com/CvgcSUSCwepJUu1f3X06sR'
global.packname = "BOT VINTRZY HOSTING ANTI KENON✨"
global.author = "VINTRZY"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 1000
global.delayjpm = 5500

//========= Setting Url Foto =========//
global.image = "https://k.top4top.io/p_3312s70dh0.png"

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://punyavin.privatex.my.id"
global.apikey = "ptla_koboWsky1AjxJ3hsYJyZdnCO3rofmBVK57qKSwmDAh5"
global.capikey = "ptlc_3eIRp62WCkLcYCFUHXxz6MA4VypmY4yNKgpiC6MmGM7"

//========= Setting Payment =========//
global.dana = "083153419618"
global.gopay = false
global.ovo = false
global.qris = "https://d.top4top.io/p_3312nrqv90.jpg"


//=========== Api Domain ===========//
global.zone1 = "36780caba208189a0ca3f2da24f5e8ad";
global.apitoken1 = "sSVFZr8WXsRbpiU_nRFGqPigyOQHaDVoVtwmsu5B";
global.tld1 = "privatex.my.id";
//========== Api Domain 2 ==========//
global.zone2 = "509e86af7602f5e1c68f22fd05218536";
global.apitoken2 = "BMleWs5u15jjRBVkWgUzaV578iDI7tOUNwkTIzIf";
global.tld2 = "vintrzy.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "78d4eac11b7feace75adf5c22ef4a88c";
global.apitoken3 = "GZujzO9-fvTOqkWjKNjjoAiIDOjYPk_PjtQ-ilNu";
global.tld3 = "vintrzy.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "0a6664184f1b8544b3c9ea9cb58df002";
global.apitoken4 = "mzgpIWEqN1BQX2mnEZ48B7SW3mjDWG_ej2MePtzJ";
global.tld4 = "xstore.biz.id";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Berhasil mengambil data ✅", 
"wait": "✅Proses bang Latip....🗿🚬", 
"group": "Fitur Ini Hanya Untuk Didalam Grup❗", 
"private": "Fitur Ini Hanya Untuk Didalam Private Chat❗", 
"admin": "Fitur Ini Hanya Untuk Admin Grup❗", 
"adminbot": "Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin❗", 
"owner": "Fitur Ini Hanya Untuk Owner Bot❗", 
"developer": "Fitur Ini Hanya Untuk Developer❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})