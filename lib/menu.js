const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
#INFO
	🎗--->ManyBot<---🎗
🤖 Nama: ManyBot
🤖 Owner: Lukman
🤖 Author: Arugaz
🤖 Aktif: 24Jam
🤖 Sytem operasi Mac OS

Dengan menggunakan bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Bot tidak menyimpan data anda di server kami.
- Bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Bot anda bisa dapatkan di https://wa.me/6281213816632

Instagram:
*Author https://www.instagram.com/ini.arga
*Owner  https://instagram.com/boyolanang_

Best regards, 🎗--->ManyBot<---🎗`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada
	🎗--->ManyBot<---🎗

Creator:
-➭ *${prefix}sticker*
-➭ *${prefix}stickergif*
-➭ *${prefix}stickergiphy*
-➭ *${prefix}meme*
-➭ *${prefix}quotemaker*
-➭ *${prefix}nulis*

Islam:
-➭ *${prefix}infosurah*
-➭ *${prefix}surah*
-➭ *${prefix}tafsir*
-➭ *${prefix}ALaudio*
-➭ *${prefix}jsolat*

18+:
-➭ *${prefix}nekopoi*

Fun Menu (Group):
-➭ *${prefix}simisimi*
-➭ *${prefix}katakasar*
	┷-➭ *${prefix}klasmen*

Download:
-➭ *${prefix}ytmp3*
-➭ *${prefix}ytmp4*
-➭ *${prefix}facebook*

Primbon:
-➭ *${prefix}artinama*
-➭ *${prefix}cekjodoh*

Search Any:
-➭ *${prefix}images*
-➭ *${prefix}sreddit*
-➭ *${prefix}resep*
-➭ *${prefix}stalkig*
-➭ *${prefix}wiki*
-➭ *${prefix}cuaca*
-➭ *${prefix}chord*
-➭ *${prefix}lirik*
-➭ *${prefix}ss*
-➭ *${prefix}play*
-➭ *${prefix}movie*
-➭ *${prefix}whatanime*

Random Teks:
-➭ *${prefix}fakta*
-➭ *${prefix}pantun*
-➭ *${prefix}katabijak*
-➭ *${prefix}quote*
-➭ *${prefix}cerpen*
-➭ *${prefix}cersex*
-➭ *${prefix}puisi*

Random Images:
-➭ *${prefix}anime*
-➭ *${prefix}kpop*
-➭ *${prefix}memes*

Lain-lain:
-➭ *${prefix}tts*
-➭ *${prefix}translate*
-➭ *${prefix}resi*
-➭ *${prefix}covidindo*
-➭ *${prefix}ceklokasi*
-➭ *${prefix}shortlink*
-➭ *${prefix}bapakfont*

Tentang Bot:
-➭ *${prefix}tnc*
-➭ *${prefix}donasi*
-➭ *${prefix}botstat*
-➭ *${prefix}ownerbot*
-➭ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Owner Bot:
-➭ *${prefix}ban* - banned
-➭ *${prefix}bc* - promosi
-➭ *${prefix}leaveall* - keluar semua grup
-➭ *${prefix}clearall* - hapus semua chat

Janagan lupa untuk *${prefix}donasi* agar bot ini tetap aktif

Hope you have a great day!✨`
	🎗--->ManyBot<---🎗
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada
	🎗--->ManyBot<---🎗

-➭ *${prefix}add*
-➭ *${prefix}kick* @tag
-➭ *${prefix}promote* @tag
-➭ *${prefix}demote* @tag
-➭ *${prefix}mutegrup*
-➭ *${prefix}tagall*
-➭ *${prefix}setprofile*
-➭ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-➭ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`🎗--->ManyBot<---🎗
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Fitur Donasi:
	🎗--->ManyBot<---🎗
🏧 *DANA	: 0813-2012-3492
🏧 *OVO		: 0813-2012-3492
🏧 *GOPAY	: 0813-2012-3492
🏧 *LINKAJA	: 0813-2012-3492

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. 🎗--->ManyBot<---🎗`
}
