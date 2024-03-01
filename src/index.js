import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";
import App from "./component/App";

const conv2 = [
{title: "Özel Ders - Hande ve Azra",
 audio: "OzelDers_06.mp3",
 sentences: [{TR: "Vay be, gerçekten çalışıyormuş.", EN: "Wow, she really works.", audio: {start: 1000 , end: 3540} }
,{TR: "Bu mesleğin bir adı falan var mı?", EN: "Does this profession have a name?", audio: {start: 3541 , end: 5821 } }
]
}
];

const conv = [
{title: "Özel Ders - Hande ve Azra",
 audio: "OzelDers_06.mp3",
 sentences: [{TR: "Vay be, gerçekten çalışıyormuş.", EN: "Wow, she really works.", audio: {start: 1000 , end: 3540 } }
,{TR: "Bu mesleğin bir adı falan var mı?", EN: "Does this profession have a name?", audio: {start: 3541 , end: 5821 } }
,{TR: "İyi para vardır ha bu işte.", EN: "There's good money in this business.", audio: {start: 7200 , end: 8900 } }
,{TR: "Hande! Seni hiç ilgilendirmez.", EN: "Hande! It's none of your business.", audio: {start: 8900 , end: 12137 } }
,{TR: "Niye böyle bir meslek yapar ki insan?", EN: "Why does a person do such a profession?", audio: {start: 21500 , end: 23677 } }
,{TR: "Senin travman falan mı var?", EN: "Do you have a trauma or something?", audio: {start: 23678 , end: 25473 } }
,{TR: "Ay, müşteri geldi! Ay, sana müşteri geldi Azra!", EN: "Oh, a customer has arrived! Oh, you have a customer Azra!", audio: {start: 26500 , end: 29300 } }
,{TR: "Ne yapıyorsun ya?", EN: "What are you doing?", audio: {start: 29301 , end: 30500 } }
,{TR: "Ya sınır nedir bilmez misin sen?", EN: "Don't you know what limits are?", audio: {start: 32000 , end: 34500 } }
,{TR: "Ha demek böyle buluyorlar seni.", EN: "Oh, so that's how they find you.", audio: {start: 34401 , end: 37100 } }
,{TR: "Söyleseydin ben de mesaj atardım ya.", EN: "If you had told me, I would have texted you too.", audio: {start: 37101 , end: 40000 } }
,{TR: "Amma tantana yaptın yani.", EN: "But you made such a fuss.", audio: {start: 39701 , end: 41200 } }
,{TR: "Öyle kolay zannediyorsun tabii.", EN: "Of course you think it's that easy.", audio: {start: 41201 , end: 43173 } }
,{TR: "Referans nereden bulacaktın?", EN: "Where would you find a reference?", audio: {start: 43174 , end: 45473 } }
,{TR: "Teyzem referans olurdu bence bana.", EN: "I think my aunt would be a reference for me.", audio: {start: 46000 , end: 48478 } }
,{TR: "Hatta… Neydi, dur, kızın adı? Dur. Sakın söyleme.", EN: "Even… What was, wait, the girl's name? Stop. Don't say it.", audio: {start: 50000 , end: 53082 } }
,{TR: "Melisa da referans olurdu bence.", EN: "I think Melisa would also be a reference.", audio: {start: 53100 , end: 57320 } }
,{TR: "Hani velisi gibi aradığın var ya?", EN: "You know the one you acted as a parent for?", audio: {start: 57301 , end: 59770 } }
,{TR: "Tamam, anlaşıldı. Senden kurtuluş yok.", EN: "OK, got it. One can't get away from you.", audio: {start: 61070 , end: 64396 } }
,{TR: "Bu akşam Utku'nun evinde bir parti var.", EN: "There is a party at Utku's house this evening.", audio: {start: 66030 , end: 68816 } }
,{TR: "Bilmiyorum haberin var mı.", EN: "I don't know if you heard about it.", audio: {start: 68817 , end: 70355 } }
,{TR: "Onunla başlayım bakalım.", EN: "Let's start with that.", audio: {start: 72000 , end: 73612 } }
,{TR: "Kural bir. Söylediklerime harfiyen uyacaksın.", EN: "There's one rule. You will obey exactly what I say.", audio: {start: 73650 , end: 78207 } }
,{TR: "Tamam, söz.", EN: "OK promise.", audio: {start: 77700 , end: 79000 } }
,{TR: "Hayatı kitaplardan öğrenemezsin.", EN: "You can't learn life from books.", audio: {start: 79151 , end: 81100 } }
,{TR: "Pratik lazım sana.", EN: "You need practice.", audio: {start: 82000 , end: 83300 } }
]
}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App conv={conv[0]} />
);
