module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Jagdeep singh", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/zByJCqZd/received-741404894627174.jpg","https://i.imgur.com/Ppm5jiR.jpg","https://i.imgur.com/hQ45jI3.jpg", "https://i.imgur.com/MZiD17h.jpg", "https://i.imgur.com/T7Nu29q.jpg"];
var callback = () => api.sendMessage({body:`❤𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 


☄️Bot Name︎︎︎☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝐁𝐨𝐭 𝐨𝐰𝐧𝐞𝐫 🔥☞︎︎︎ 𝐉𝐚𝐠𝐝𝐞𝐞𝐩 𝐬𝐢𝐧𝐠𝐡 ☜︎︎︎✰ 
●▬▬▬▬๑۩۩๑▬▬▬▬
🙈𝐨𝐰𝐧𝐞𝐫 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐋𝐢𝐧𝐤🙈➪  https://www.facebook.com/jagdeep.448 💞🕊️
   ⃟ Other contacts ☑  ⃠
✅𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦👉 https://www.instagram.com/jagdeep2213k9?igsh=Y25rbWxkbXByMnFo
✅𝐘𝐨𝐮𝐓𝐮𝐛𝐞 🗡 https://www.youtube.com/Jagdeep448
✧══════•❁❀❁•══════✧

🌸𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱🌸☞︎︎︎ ${global.config.PREFIX} ☜︎︎︎✰

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
