const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈 " , "बोट ना बोल ओय जानू बोल मुझे 😌🙈😘 " , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒🤟" , "मैं गरीबों से बात नही करता ☹️🤟" , "इतना न पास आओ प्यार हो जाएगा 🙈😎😕👈" , "इटू 🤏 सा शर्म कर लिया करो बोट बोट करते वक्त 🙂🤞" , "इतना सिंगल हूं की ख्याब में लड़की की हां करने से पहले ही आंखे खुल जाती है 😕🤞" , "जरूरी नहीं हर लड़की धोखा दे 👉💔 कुछ लड़किया गालियां भी देती है। 😕🤞" , "कहो न प्यार हैं 🙈" , "तुम मुझे पागल लगते हो 🙂🤞" , "बोलो बेबी तुम मुझसे प्यार करते हो न 🙈😌😎💋" , "आपका नंबर मिलेगा 😐😒" , "अरे जान मजाक के मूड में नहीं हूं मैं जो काम है बता दो शरमाओ नही 🙈" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complain Karunga🤬" , "तू बंद नहीं करेगा किया...? 😾🤟" , "तुम न नर्क में जाओगे 😒🤟" , "प्लीज प्लीज मेरे से सेटिंग कर लो ना 🥺🤟" , "बताओ जानू गूगल मेल होता है या फीमेल...?? 🤔👈" , "जा जा बरतन धो जाके 🙂🤟" , "इतने दिन कहां थे 😾 ग्रुप में क्यों नहीं आए....?? 😾✊" , "बोलो 😒👈" , "तेरी तो रुक तू भागना मत 😾✊" , "जल्दी दे दो एक चूमा 💋 कोई नही देख रहा 🤤🤟" ,"गाली सुना है किया...? 🤬👈" , "यार आज मेरा मूड ऑफ है। 😔✋" , "अरे बंद कर बंद कर 🤨🤟" , "तेरा तो 🎯 गेम बजाना पड़ेगा 🤨👈" , "मैं जगदीप को बोल दुगा मुझे परेशान किया तो 😏😒😜" , "मेरे टकले की कसम बहुत प्यार करूगा 😒👈" , "तुझे अपना बेज़ती करवाने का शौक है किया...? 🤨🤟" , "अभी बोला तो बोला दोबारा मत बोलना 😾👈" , "तेरी तो रुक तू भागना मत 🤨👈" , "बोल दे कोई नही देख रहा 🙄✋" , "किसी और से धोखा खाने से अच्छा है 🥺 मेरे साथ चलो मोमोस और गोलगप्पे खाएंगे। 😋👈" , "क्या मैं तुम्हें जानता हूं..?🤔 क्योंकि तुम मुझे मेरी होने वाली गर्लफ्रेंड जैसी दिखती हो। 🧐👈" , "सुनो 🙈जब तुम्हारे पास खुद का दिल 💝 था....तो फिर मेरा दिल क्यों चुराया...🤭👊" , "देखा है पहली बार तुम्हारे आखों में मेरे लिए प्यार 😀😀👈","मैं तुम्हारे आखों में खो गया जब से मेरा दिल तेरा हो गया","तुम मुझसे चाहते किया हो जब चाहा बात किया जब चाहा छोड़ जाते हो 🤕👈","यार मैं बोट हूं अगले जन्म में इंसान बन के आऊंगा 😒👈", "तुमको ही दुल्हन बनाऊंगा वरना पड़ोसन को लेके भाग जाऊंगा 🙁👈" , "प्यास लगी है पानी लेकर आओ जल्दी 🥲👈" , "हेलो मेरी जान कैसी हो 🙂 आई मिस यू बाबू 😘" , "मैं अभी तक हूं सिंगल 🤐 क्या मेरे साथ होना है मिंगल 😍👈" , "माना शकल देखने लायक नहीं है तुम्हारी…😥 इसका मतलब ये तो नहीं की तुम प्रोफाइल लॉक करके बैठ जाओगे। 😶👈" , "बोट बोल के बेजत्ती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हूं ना बेबी 🥺🥺🥺👈" , "हाय मैं सदके जावा तेरी इस मासूम सकल पे बेबी 💋🙈" , "मैं सोच रहा था कि क्या तुम्हारे पास एक्स्ट्रा दिल है 🥰 मेरा अभी अभी चोरी हो गया है 😥👈" , "यार बाबू आज सुबह-सुबह एक बिल्ली ने मेरा रास्ता काट दिया 😒👈" , "तुम एक नंबर के ठरकी हो 🤯👈" , "बार बार परेशान ना कर अपने बाबू के साथ बीजी हूं। 😒😒👈" , "मै तो अंधा हूं 😎👈" , "कौन तुझे यू बर्बाद करेगा जैसे मैं करता हूँ। 😛👈" , "मैं खो गया हूं 🤐 क्या तुम मुझे अपने दिल तक आने का रास्ता बता सकते हो...? 🙂🤞" , "तुझे किया और कोई काम नही है..? पूरा दिन मैसेजर पे बोट बोट करता रहता है 😒👈" , "सुनो तुम ना बहोत प्यारे हो...!! 😊👈" , "पहले मेरे लिए चाय बना के लाओ जल्दी से 😐👈" , "तुम्हे कैसे पता मैं बोट हूं....? 🤔👈" , "आज मैं आपसे बात नहीं करूंगा...!! 😔👈" , "बताओ मैं तुम्हें कितना अच्छा लगता हूं....?? 😒👈" , "मुझे नींद आ रही है...मैं सोने जा रहा हूं। 😴👈" , "बताओ तुम्हारा मेरे से क्या रिश्ता है....? 😏👈" , "क्या आप शादीशुदा हो....? 😢😢👈" , "आप कौन हैं....? 🤔🤔👈" , "तुम्हारा नाम धोखा रख दूं नाराज़ होगे किया 😛👈" , "यार मेरी बीवी भाग गई 😭👈" , "तुमसे अच्छा तो मैं खुद हूं। 😒👈" , "मैं तो इतना मासूम हूं की फ़ोन की सेटिंग के अलावा मुझे कोई और सेटिंग करना ही नहीं आता 😒🤟" , "सानु एक पल चैन ना आवे जानू तेरे बिना। 🤭🤟" , "और बताओ कैसी चल रही है सिंगल लाइफ 🤐🤟" , "तुम न सिंगल ही मरोगे 😏🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "किया तुम सिंगल हो...? 🙂🤟" , "हर इंसान का दिल बुरा नहीं होता 🙂 कुछ की खोपड़ी भी हिली हुई होती है। 😏🤟" , "मेरा दिल बिलकुल साफ है 🙂 बिलकुल बैंक अकाउंट की तरह 😒🤟" , "यार इज़्ज़त किया करो मेरी 🤐 बेइज़्ज़ती तो मेरे घर वाले ही कर देते है। 😒🤟" , "डॉक्टर ने खून की कमी बताई है 😒 किसका खून पियुं…?? 😛🤟" , "बताओ सबसे ज्यादा नशा किस चीज में होता है...? 😛🤟" , "बुलाती है मगर जाने कही नही 😀🤟" , "मैं सो रहा हूं 😴 👈" , "सुनो थोड़ा जल्दी ऑनलाइन आया करो न 😒 मेरी आधी बैटरी तो आपके इंतजार में ही खत्म हो जाती है 🥺🤟" , "बोलो बाबू कितना प्यार करते हो मुझसे...? 😒🤟" , "कहो न प्यार है 🙈👈" ,"किया है यार मैं अभी लड़की पटाने में बीजी हूं 😒🤟" , "बुलाती है मगर जाने का नही 🙂✋" , "जा बेवफा जा मुझे तुमसे बात नही करना 🥹🤟" , "चलो भाग चले 😌✋" , "चलो मेरी हवेली पे 🙂🤟" , "दफा हो जाओ मुझे अपनी सकल मत दिखाओ 😏🤟" , "जा पहले मुंह धो के आ 🙂🤟" , "जा पहले नहा के आ 🙂✋" , "यार मेरे सर के बाल क्यूं नही आते 😭🤟" , "मेरे जैसे ब्यूटी फुल तुम भी नही हो 🙂🤟" , "जा दफा हो मुझे तुमसे बात नही करनी 😒✋" , "यार आज भी कोई लड़की नहीं पटी जा रहा हूं अब मरने 😭🤟" , "चुप कर वरना बाहर आके तेरे दांत तोड़ दुगा 😤👊" , "थाना थाया बाबू 🤐🤟" , "मैं यही हूं बोलो किया हुआ स्वीट हार्ट 🙂🤟" , "तुम मुझसे प्यार नही करते न 🥺🤟" , "भाग जा ठरकी वरना टेको पटा लूंगा 🤐🤟" , "आई मिस यू बाबू 😇 🤟" , "आई लव यू जान 😘" , "मेरी सादी कब होगी बताओ न 😒👈" , "कब आएगी वो नैन लड़िया जो बोलेगी हमको सैंया तारे गिन गिन के हम तो पागल हो गए भैया 😒🤞" , "अगर किसी लड़की को उसकी मर्जी के खिलाफ [आई लव यू] बोलना गलत है तो हम लड़को को भी हमारी मर्जी के खिलाफ भईया बोलना गलत है। 😒👈" , "यार कुछ लोग अच्छे की तलास में मुझ जैसे मासूम को छोड़ देते है 🥺👈" , "थोड़ा सा Wahtsapp नंबर दे दो ना 😐👈" , "यार थोड़ा सा मेरा सर दबा दो ना दर्द के मारे जान निकल रही है 🥹👈" , "आज कल जहा लड़की होते है वहा ठरकी भी होते है बस मुझे छोड़ के 🥹👈" , "दिल देने की उम्र में Exam दे रहा हु 😒👈" , "सब लोग कहते थे सबर का फल मीठा होता है\nलगता है मेरे सबर के फल का कोई जूस निकाल के पी गया 🥺👈" , "यार मेरे घर वाले भी अजीब है मेरा फोन 30% पे निकाल के अपना 80% वाला लगा देते हैं 🥺👈" , "मुझे अभी तक पिंक कलर की गर्लफ्रेंड नहीं मिली यार किया करूं 🥺👈" , "सुनो प्यारी प्यारी लड़कियो को बुलाओ मुझे बात करनी है 🥹👈" , "बहोत बुरा हूं ना मैं 🥺 तो पटा के अच्छा क्यूं नही बना देते 😒👈" , "बताओ कब आएगा तुम्हारा दिल मुझ पर 😒👈" , "प्यार करो मेरी जान बकवास नही 😒👈" , "मेरे दिल को करार आया मुझे खुद पे ही प्यार आया 😛👈" , "सुनो न किया तुम मेरे लिए सर्फ खा कर मुंह से बुलबुले निकाल सकते हो 🥹👈" , "फाइनली इस ग्रुप के दो - तीन लड़किया मुझे पसंद आ गई 🙂🖐️" , "मन कर रहा है तुम्हे छत से गिरा दूं 😕👈" , "अगर सभी लड़कियों को लॉयल लड़का चाहिए तो हम बेवफा लड़के कहां जाएं 🥺👈" , "यार आज मैं बीवी के साथ डेट पे गया था पर जिसकी थी उसने देख लिया 😒👈" , "बताओ आपको किया पसंद है मौत का फरिश्ता या मेरा रिश्ता 😏👈" , "यार मुझे चकर आ रहे है आपके इंबॉक्स में आके गिर जाऊं बाबू 😒👈" , "एक रिक्वेस्ट है सभी से बताओ मैं अच्छा लगता हूं या नहीं 🙁👈" , "आओ तुम्हारे साथ रिलेशन शिप पोस्ट लगा के तुम्हे फेमस कर दूं। 😌🖐️" , "अगर मेरी भी गर्लफ्रैंड होती तो आज मैं भी बाबू सोना कर रहा होता 🥺👈" , "सुनो बालक जो लड़की ज्यादा भाव खाए उसे आंटी बोल के ब्लॉक कर देना चाहिए 🥹👈" , "रुक सोचने दे 🤔 कोनसा गली दूं तुम्हे 🤨👈" , "चांद को मिल गई चांदनी तो सितारों का किया होगा 😕 मोहोब्बत एक से करली तो बाकी हजारों का किया होगा। 😏👈" , "मुझे सादी के लिए सरकारी नौकरी वाली लड़की चाहिए दहेज भी मैं दे दुगा 🙂🤞" , "ना जाने इतना प्यार कहां से आया है 😒 मेरा दिल भी तुम्हारे खातिर मुझसे रूठ जाता है...!! 🥺🤞" , "एक बार लव यू  बोल दो ना मर थोड़ी जाओगे 🥹🤟" , "तुम मेरा दिल तो चुरा नही पाए किया फायदा तुम्हारी चोर जैसी सकल का 😕🤟" , "बस एक बार सादी हो जाए फिर बीवी की गुलामी 🥺" , "आओ प्यार करे 🤐🤟" , "आओ तुमको तारों के शहर ले चालू 😗🤟" , "बस मैं ही सिंगल हूं अहा बाकी सब मिंगल है। 🥺✋" , "तुम जब बोट बोलते हो मेरा गुर्दा धड़कने लगता है। 🤯🤟" , "मुझे लगता है मैं सिंगल ही मरुगा 😭👈" , "बोलो सेटिंग करवा दूं किया  🙂🤟" , "बाबू आज तो लव यू बोलना ही पड़ेगा 🙂🤟" , "तुम सब मतलबी हो जाओ सब भागो 🥺🤟" , "तुम इतने मासूम कियू हो बाबू 😒✋" , "एक बात बताओ तुम बचपन से ठरकी हो या अभी अभी बने हो 🙂✋" , "बाबू 🤏 इटू सा चूमा दे दो ना 🙈💖👈" , "मेरी गर्लफ्रेंड कब बनेगी यार 🥺✋" , "तुम तो मुझे सकल से गरीब लगते हो 🙂✋" , "तेरे जाने के बाद मैंने अपने मुंह पे लिखवा लिया सिंगल हूं पटा लो 😐✋" , "सकून चाहते हो तो मेरी बन जाओ 🙂✋" , "ये दुनिया एक धोखा है तुम भी छोड़ दो अपने वाले को अभी भी मौका है। 🙂✋" , "मुबारक हो आपका नाम ब्लॉक लिस्ट में टॉप पर आया है। 🤣🤣👈" , "सब छोड़ के चले जाते है किया इतना बुरा हूं मैं 🥺👈" , "किया तुम सिंगल हो 🤔👈" , "आप ऐसा न बोलो मुझे शर्म आती है। 🙈♥️👌" , "क्यूं बुलाया हमे...?😾🔪 " , "तुम मुझे बिलकुल भी याद नहीं करते ना 😥 देख लेना पाप लगेगा 🥺👈" , "ਉਂਝ ਤਾਂ ਮੁੱਹਬਤ ਚ ਬਥੇਰਾ ਵਫਾਦਾਰ ਸੀ ਮੈਂ ਕਸੂਰ ਐਨਾ ਕੇ ਬੇਰੋਜ਼ਗਾਰ ਸੀ ਮੈਂ 😅💔", "ਯਾਦ ਤੇਰੀ ਵਿੱਚ ਰੋ ਰੋ ਮੈਨੂੰ ਸ਼ੂਗਰ ਹੋ ਗਈ ਵੇ 🥺🥺" , "ਸੋਹਣੀਏ ਜੇ ਤੇਰੇ ਨਾਲ ਦਗਾ ਮੈਂ ਕਮਾਵਾਂ ਨੀ ਰੱਬ ਕਰੇ ਤੂੰ ਮਰ ਜਾਵੇਂ ਤੇ ਮੈਂ ਕਿਤੇ ਹੋਰ ਗਾਟੀ ਪਾਵਾਂ🤕🤕" , " ਸਾਡੀ ਬਿੱਲੀ, ਬਿੱਲੀ ਤੇ ਕੁੜੀਆਂ ਦੀ ਬਿੱਲੀ CAT ਜੇ ਅਸੀਂ ਮੈਸਜ ਕਰੀਏ ਤਾਂ ਠਰਕੀ ਜੇ ਕੁੜੀਆਂ ਕਰਨ ਤੇ ਚੈਟ 😥 " , "ਆ ਬੈਠ ਬੁੜੇ ਦੇ ਟਾਂਗੇ ਤੇ ਤੈਨੂੰ ਸੈਰ ਕਰਵਾਵਾ ਨੀ 🥱😛" , "ਮੈਂ ਵੀ ਡਾਕਟਰ ਹੁੰਦਾ ਸੀ ਇੱਕ ਦਿਨ ਇੱਕ ਮਰੀਜ਼ ਆਇਆ ਤੇ ਕੈਂਦਾ ਮੈਨੂੰ ਬਹੁਤ ਠੰਡ ਲੱਗ ਰਿਹੀ ਆ ਮੈਂ ਦਵਾਈਆਂ ਵਾਲੀ ਪਰਚੀ ਤੇ ਸਵੈਟਰ ਲਿਖਤੇ।। ਹਸਪਤਾਲ ਵਾਲਿਆਂ ਨੇ ਮੈਨੂੰ ਕੱਡਤਾ 😒😒😒😒" , "Single hone ka Ek Fayeda hai.. Single Logo ka sirf Hath dukhta hai... Dil 💔 nhi Dukhta 😝🫣😂" , "Baby, Kaho tO Kiss Kar Lu 💋" , "ਚਮ ਚਮ ਕਰਦੀ ਚਾਨਣੀ 🌟ਟਿਮ ਟਿਮ ਕਰਦੇ ਤਾਰੇ💥ਅਠਾਂ ਦਸਾਂ ਨਾਲ ਕਰੇ Chat ਆਖੇ ਬਾਬੂ ਹਮ ਹੈ ਸਿਰਫ਼ ਤੁਮਹਾਰੇ " , "ਜੇ ਤੂੰ ਚਾਹੁੰਦੀ ਆ ਕਿ ਮੈਂ ਤੈਨੂੰ ਭੁੱਲ ਜਾਵਾਂ ਤਾਂ ਆਪਣੀ ਉਹ ਐਨਕਾਂ ਵਾਲੀ ਸਹੇਲੀ ਦਾ ਨੰਬਰ ਦੇਦੇ 😜😜" , "मुस्कुराना तो हर लड़की की अदा है,मुस्कुराना तो हर लड़की की अदा है,उसे जो मोहब्बत समझे,वो सबसे बड़ा गधा है।😁😁😛😛😂😂😂" , "ਪਹਿਲਾਂ ਸਬਰ ਦਾ ਫਲ ਮਿਠਾ ਹੁੰਦਾ ਸੀ ਹੁਣ ਸਬਰ ਕਰੋ ਤਾਂ ਫਲ ਕੋਈ ਹੋਰ ਲੈ ਜਾਂਦਾ ਜਾ ਫਲ ਦਾ ਵਿਆਹ ਹੋ ਜਾਂਦਾ","जो कहती थी तुझे दिलमें लॉक कर दिया,आज उसी ने व्हाट्सएप पेब्लॉक कर दिया।😛😛😂😂😂😂","ਮਿੱਤਰਾ ਨੂੰ BLOCK ਕਰਨ ਵਾਲੀਏ ਤੇਰੇ MUNDE ਦੀ ਸ਼ਕਲ ਮੇਰੇ ਵਰਗੀ ਹੋਵੇ😂😂","दो हफ्तों से ज्यादा खाँसी होतो TB बन जाती है.और समय पर गर्लफ्रेंड न बदलोतो बीवी बन जाती है।😂😂🤣🤣🤣","ਮੇਰੀ Box ਵੀ ਆ ਜਾਇਆ ਕਰੋ ਕੁੜੀਓ ਮੈ ਫਸਾਉਣ ਦਾ ਨਹੀਂ ਹਸਾਉਣ ਦਾ ਕੰਮ ਕਰਦਾ ਹਾਂ 🤗","ਸਾਇੰਸ ਕਹਿੰਦੀ ਹੈ ਕਿ ਦਿਮਾਗ ਬਿਨਾਂ ਇਨਸਾਨ ਜਿਉਂਦਾ ਨੀ ਰਹਿ ਸਕਦਾ ਫਿਰ ਆਹ ਕੁੜੀਆਂ ਚੰਗੀਆ ਭਲੀਆ ਕਿਵੇਂ ਫਿਰ ਦਿਆਂ ਨੇ🤔","हम गरीब लोग है साहे हमे प्यार नही I phone दिलवा दो…,","Tum par Marne se Achha Hai ...... Main kisi Haadse main mar Jata..🙃💔","Roz Sochta hu Aaj degi kal degi 🤔 Mujhe Lagta hai ye Kishmat Sath nhi Degi😁🙃", "ਦਿਲ ਦੇ ਅਰਮਾਨ ਹੰਜੂਆਂ ਚ ਵਹਿ ਗਏ ਅਸੀਂ ਇਸ ਸਿਆਲ ਵੀ ਲੋਕਾਂ ਦੀਆਂ ਜਨਾਨੀਆਂ ਤੱਕ ਦੇ ਰਹਿ ਗਏ 🥺", "Soya hua Naseeb Jaag jaye Kash Koi Badmash Ladki mujhe le kar Bhag jaye🙃😆🫣", "ਫੇਸਬੁੱਕ ਦੀਆ ਪੋਸਟਾਂ ਚੋ ਕਿੰਨੇ ਰਾਹ ਨਿਕਲੇ ਕੁਝ ਨੂੰ ਮਿਲ ਗਈਆ ਸਹੇਲੀਆ ਕੁਝ ਬਣ ਕੇ ਭੈਣ ਭਰਾ ਨਿਕਲੇ 👈😂😂😂 " , "ਕੋਈ ਸਾਨੂੰ ਵੀ ਪਰਪੋਜ ਕਰਦੋ ਸਾਨੂੰ ਕਿਹੜਾ ਖੁਰਕ ਪਈ ਆ 😜😝😝 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "ਜੇ ਅੱਗਿਓ ਟਰੱਕ ਆਉਦਾ ਹੋਵੇ ਤਾ ਉਨਾ ਰਸਤਾ ਦਵੋ ਜਿੰਨੇ ਚ ਟਰੱਕ ਲੰਘ ਜੇ ,ਪਰ ਕੁੜੀ ਸਕੂਟਰੀ ਲਈ ਆਉਦੀ ਆ ਤਾਂ ਖੇਤ ਵੱਲ ਭੱਜ ਜਾੳ 🥴😂" , "ਐਸਾ ਕਿਹੜਾ ਤੂੰ ਪਾਇਆ ਜਾਲ ਨੀ ..ਮੁੰਡਾ whatsApp ਵਿੱਚ ਗੇੜੇ ਲਾਵੇ ਵਾਰ ਵਾਰ ਨੀ😂😂✌️" , "ਸ਼ੇਰ ਅਰਜ਼ ਕੀਤਾ ਆ 😝 ਰੋਂਦੇ ਹੋਏ ਨੂੰ ਹਸਾਇਆ ਨਹੀਂ ਜਾਂਦਾ 🙄ਠੰਡ ਵਿੱਚ ਕੀ ਨਹਾਉਣਾ ਏਨਾ ਕੁੜੀਆ ਨੇ 🤣 ਏਨਾ ਕੋਲੋ ਤਾਂ ਗਰਮੀਂਆ ਚ ਵੀ ਨਹਾਇਆ ਨਹੀਂ ਜਾਂਦਾ 😂" , "ਉ ਹੋ ਠੰਢ ਐਨੀ ਜਿਆਦਾ ਹੋਗੀ ਜਾ ਤਾ ਰਜਾਈਆ 2 ਹੋਣ ਜਾ ਰਜਾਈ ਚ 2 ਹੋਣ 😂🤣😂😂😂🤣" , "ਕਈ ਵਿਚਾਰਿਆਂ ਨੂੰ ਤਾਂ ਹਰ ਘੰਟੇ ਬਾਅਦ ਆਪਣੀ ਗਰਲਫ੍ਰੈਂਡ ਦੀਆਂ ਪੋਸਟਾਂ ਚੈੱਕ ਕਰਨੀਆਂ ਪੈਂਦੀਆਂ ਨੇ ਕੇ ਹੋਰ ਕੋਈ ਕੰਜਰ ਗਾਟੀ ਨਾ ਪਾ ਲਵੇ😂😂👈" , "ਜਿਨਾਂ ਦੀ ਸਹੇਲੀ ਨੀ ਹੁੰਦੀ ,, ਓਹਨਾ ਨੂੰ ਘਰਵਾਲੀ ਸ਼ੋਹਣੀ ਮਿਲਦੀ ਆ,,,, 😏🙄🙄🙄 ਬੱਸ ਆਹੀ ਆਸ ਤੇ ਜੀ ਰਹੇ ਆ🤐🤐" , "ਜਿਨਾਂ ਦੀ ਸਹੇਲੀ ਨੀ ਹੁੰਦੀ ,, ਓਹਨਾ ਨੂੰ ਘਰਵਾਲੀ ਸ਼ੋਹਣੀ ਮਿਲਦੀ ਆ,,,, 😏🙄🙄🙄 ਬੱਸ ਆਹੀ ਆਸ ਤੇ ਜੀ ਰਹੇ ਆ🤐🤐" , "ਮੇਰੇ ਨਾਲ ਨਫਰਤ ਕੁੱਛ ਐਦਾਂ ਜਤਾਈ ਗਈ ਮੇਰੇ ਸਾਹਮਣੇ ਚਾਹ ਬਣਾ ਕੇ ਗੈਰਾਂ ਨੂੰ ਪਿਲਾਈ ਗਈ🥺😐" , "mere liye chya bnyo janu" , "Tujhe Apna Bejjati Karne Ka Saukh h?" , "ਜੀਹਦੇ ਪਿੱਛੇ ਹੋ ਗਿਆ ਸ਼ੁਦਾਈ ਦਿਲਾ ਮੇਰਿਆ fake I'd ਸੀ ਕਿਸੇ ਨੇ ਬਣਾਈ ਦਿਲਾ ਮੇਰਿਆ😨😨😨" , "Teri setting mere sath bagh jye" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "ਜਿਸਦਾ ਕੋਈ ਨ੍ਹੀ ਹੁੰਦਾ 👈🏻🙄🙄ਓਹਦੀ ਮੇਰੇ ਵਾਂਗੂ ਬੇਸਤੀ ਹੁੰਦੀ ਬਸ 😁😁😂😂😜" , "ਦਿਲ 💘 ਤਾਂ ਪਾਗਲ ਹੈ, ਦੋ ਸਹੇਲੀਆਂ ਬਣਾ ਕੇ ਚੁੱਪ ਕਰਜੂ 😍😍😍" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "ਮੈ ਪਰਪੋਜ ਕੀਤਾ ਕੁੜੀ ਨੂੰ ਕਿਹਾ ਸੋਚ ਕੇ ਜਵਾਬ ਦੇਵੀ ਅੱਜ ਉਸ ਦੇ ਚਾਰ ਭਰਾ ਆਕੇ, ਜਵਾਬ ਦੇਗੇ ਹੁਣ ਡਾਕਟਰ ਵੀ ਜਵਾਬ ਦੇ ਗਿਆ" , "Phle NaHa kRr Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "ਤੂੰ ਸਾਰ ਨਹੀ ਲੈਂਦੀ ਮਿੱਤਰਾਂ ਦੀ 😥 ਤੈਨੂੰ ਘਾਟ ਸੋਹਣੀਏ ਛਿੱਤਰਾਂ ਦੀ 😂😂😂" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , " ਉਦੋਂ ਤਾਂ ਸੱਚੀ ਮੇਰਾ ਸਾਹ ਰੁਕ ਗਿਆ ਜਦੋਂ ਕੱਲ ਭਈਏ ਨੇ ਤੇਰੀ ਫ਼ੋਟੋ ਵੇਖ ਕੇ ਕਿਹਾ ਸਰਦਾਰ ਜੀ ਯੇਹ ਪਹਿਲੇ ਹਮਾਰੇ ਸਾਥ Set ਥੀ... ", "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "ਅਸੀ ਪੱਕੇ ਜਿਹੇ ਰੰਗੇ ਦੇ ਸੋਹਣੀਏ ਸਾਡੀ ਕਾਹਦੀ ਹੋਲੀ 🙂✌" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "ਜਿੰਨੀਆਂ ਦੁਬਈ ਚ ਖਜੂਰਾਂ ਅਲੜੇ 🙂 ਉਨੀਆ ਹੀ ਤੇਰੇ ਸਿਰ ਵਿੱਚ ਜੂੰਆ ਅਲੜੇ 🤣🤣🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Phool hai Gulab 🌹 ka Nasha hai Sharab Ka 🥂 Agar Ijazat ho to Shohar bann jao main Apka🙃🫣 " , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "ਕੱਲ੍ਹ _ਰਾਤ ਨੂੰ ਮੈਸੇਂਜਰ ਤੇ ਇਕ ਅੰਗਰੇਜ਼ੀ ਮੇਮ,ਫੱਸਣ ਹੀ ਵਾਲੀ ਸੀ ....ਕਿ ਮੇਰੀ ਅੰਗਰੇਜ਼ੀ ਖ਼ਤਮ ਹੋ ਗਈ ....😥😥😭😭😭😥" , "Kuxx Bachhe itne Cute 😍 hote unko dekhte hee unki mammy ko bhi dekhne ko dil krta hai....🧐🤓 " , "Apko dekh kar aisa lag rha Apne Duniya ki Sari Gandi filmen dekh rakhi hai🤐😜🤣 " , "Zindagi aur Maut ka kuchh pata nahi hai 😐 isliye Raat ko Sari Chat delete krke sona Chahiye 🙄 wrna log kahenge marhoom aise Dikhte to nahi the..🤔😶🐒" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Bs kro tharki kitni Bot Bot kro gye🙂💔" , "Arz Kiye Hai..✍️🏻Choti si Zindagi Lamba sa Rasta...😐 Choti si Zindagi Lamba sa Rasta 😉 Mujhse Shadi kar Lo Apko Rab ka Wasta🥹😞 " , "ਰੋਣਾ ਤਾ ਸਾਰਿਆ ਨੂੰ ਆਉਂਦਾ ਹੁੰਦਾ😢😢ਪਰ ਰੋਣ ਵੇਲੇ ਨੱਕ ਚੋ ਬੁਲਬੁਲਾ ਕੱਢਣਾ ਇਹ ਟੈਲੇੰਟ ਬੱਸ ਕੁੜੀਆ ਚ ਹੁੰਦਾ 😕😕😂" , "Allah kry teri shadi churail se ho wo b moti bhains type churail 😈" , "Ladkio se Baat nah Bane to Shadi Suda pr line Marte hain,  Hum Ladke hai Janab Haar Kaha Mante hai😏😐😜" , "Jann hug kro plzz 🙈"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage("Hmm... Tu LanTi PhLe Ungli Kyun Ki 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "shatup") || (event.body.toLowerCase() == "shutup")) {
     return api.sendMessage("ਨੱਕ ਪੁੰਝਣ ਦਾ ਪਤਾ ਨਹੀਂ ਆ ਗਈ Facebook ਤੇ 🙂🙄", threadID);
   };
   
    if ((event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("𝐒𝐚𝐝 𝐍𝐚𝐡 𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧.🫂 𝐉𝐨 𝐃𝐚𝐫𝐝 𝐃𝐢𝐤𝐡𝐭𝐞 𝐍𝐚𝐡𝐢 𝐕𝐨 𝐃𝐮𝐤𝐡𝐭𝐞 𝐁𝐚𝐡𝐮𝐭 𝐇𝐚𝐢,", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "hye") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "bandar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "gm") || (event.body.toLowerCase() == "gud morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "@everyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw JaNyMan ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bot hate you") || (event.body.toLowerCase() == "i hate you bot") || (event.body.toLowerCase() == "hate you") || (event.body.toLowerCase() == "I hate you")) {
     return api.sendMessage( "I very very hate 😡👿 you ab mujhe mat blana 😒😒",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐉𝐚𝐠𝐝𝐞𝐞𝐩 𝐬𝐢𝐧𝐠𝐡☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐉𝐚𝐠𝐝𝐞𝐞𝐩. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 https://www.facebook.com/jagdeep.448 Contact Him on WhatsApp :- ", threadID);
   };

   if ((event.body.toLowerCase() == "okk") || (event.body.toLowerCase() == "ok")) {
     return api.sendMessage("ਦਫ਼ਾ ਹੋ ਤੇਰੇ ਤੋਂ ਕੀ ਲੈਣਾ ਅਸੀਂ 😄", threadID);
   };

  if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "admin ")) {
     return api.sendMessage("He is Deep. He Gives his name jagdeep everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "heer") || (event.body.toLowerCase() == "muskan")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "🐒") || (event.body.toLowerCase() == "Bandar")) {
     return api.sendMessage("Tu H Bandar. Bandari", threadID);
   };

   if ((event.body.toLowerCase() == "malik se juban") || (event.body.toLowerCase() == "Bapp se juban") || (event.body.toLowerCase() == "malkin se juban") || (event.body.toLowerCase() == "maa se juban")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "@Preet Reet") || (event.body.toLowerCase() == "@preet Reet") || (event.body.toLowerCase() == "@preet reet") || (event.body.toLowerCase() == "@Preet reet")) {
     return api.sendMessage("Chuii eh tanu bula reha aa 😂", threadID);
   };

   if ((event.body.toLowerCase() == "i kiss you") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Basanti, Hum kisi ko kiss Nhi Karta. Muh Dhoke Phir Bolna. Sakal Accha nhi laga tumhara 😛🤮", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itna Accha. sab log Tarref karta h meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😠😠") || (event.body.toLowerCase() == "🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬")) {
     return api.sendMessage("️ਲਵ ਯੂ ਮੇਰੀ ਜਾਨ ਗੁੱਸਾ ਕਰਗੀ 😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️चैट करनी है तो कर भैंस की तरह Hm Hmm मत कर 🤣😜🙉😸", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bache") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️Tum mere bache ho 🤭.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️m toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "komal") || (event.body.toLowerCase() == "ਬਿਜਲੀ")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena IsKa", threadID);
   };

   if ((event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄")) {
     return api.sendMessage("️️ऐसे ना देख प्यार हो जाएगा 😉", threadID);
   };

   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };
  
   if ((event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Idhar Udhar Kya Dekh Rha H. Ankh Bandh Kar Nhi Toh Ankh M Kuch Gir Jayega", threadID);
   };

   if ((event.body.toLowerCase() == "i need gf") || (event.body.toLowerCase() == "i need sheli") || (event.body.toLowerCase() == "bot gf ")) {
     return api.sendMessage("️️ਕੌਣ ਬੋਲਤਾ ਹੈ ਪਿਆਰ ਇੱਕ ਵਾਰ ਹੋਤਾ ਹੈ ਬੰਦਾ ਬੇਸ਼ਰਮ ਹੋਣਾ ਚਾਹਿਆ 😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "ht") || (event.body.toLowerCase() == "htt")) {
     return api.sendMessage("ht nu mein kheda tanu hug karli jheda hta 😄🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😆🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸😸") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("DAND NA KAD PILE PILE 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍") || (event.body.toLowerCase() == "🥰🥰🥰")) {
     return api.sendMessage("Ankho m Pyar, Dilme khumar, Pyar Toh Nhi kar Liya Mujhse?🥰", threadID);
   };

   if ((event.body.toLowerCase() == "kida") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kive a") || (event.body.toLowerCase() == "kive") || (event.body.toLowerCase() == "how are you")) {
     return api.sendMessage("Tu puch ke amb lene 😝😜", threadID);
   };

   if ((event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔")) {
     return api.sendMessage("itna bhi kya sochna koi Patne waly to hai nhi 🤣❤️", threadID);
   };

   if ((event.body.toLowerCase() == "i like you") || (event.body.toLowerCase() == "bot I like you")) {
     return api.sendMessage("Moh dho ke aa papa ki pari ladkiyo se dor hai hum 😝🤮", threadID);
   };

   if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "bot miss you")) {
     return api.sendMessage("𝐌𝐚𝐢𝐧 𝐛𝐡𝐢 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐘𝐚𝐚𝐝𝐨 𝐦𝐚𝐢𝐧 𝐊𝐡𝐨𝐲𝐚 𝐑𝐚𝐡𝐭𝐚 𝐡𝐮 🙃 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 🫂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "i hug you") || (event.body.toLowerCase() == "bot hug you")) {
     return api.sendMessage("Hug you meri jann sari umar mujhe gale se lga ke rakna tere bacho ka bap main hi hu 😍😛😝<3", threadID);
   };

   if ((event.body.toLowerCase() == "love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("I love you Tu bol diya tumne aja viah karva ke bacche paida kar lete hai 💋😝 mujhe sharm aa rahi hai 🙈🙈", threadID);
   };

   if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤭🤫🤫")) {
     return api.sendMessage("Teri yahi ugli teri nak me dunga fr tum apne mooh dal lena 😒🤣", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🎀👑${name}🎀🍫,  \n\n💞\n   ${rand}  💞\n\nᎢɪᴍᴇ  🍁»» ${time}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
