(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),c=a("iSRb"),m=a.n(c),r=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:m.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:m.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?i.a.createElement("h1",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:m.a.author__title},i.a.createElement(l.Link,{className:m.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:m.a.author__subtitle},t.bio))},o=a("7Qib"),s=a("euHg"),u=a.n(s),_=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:u.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),h=a.n(d),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:h.a.contacts},i.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:h.a["contacts__list-item"],key:e},i.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(o.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(_,{name:e,icon:Object(o.b)(e)}))):null}))))},b=a("Nrk+"),E=a.n(b),g=function(e){var t=e.copyright;return i.a.createElement("div",{className:E.a.copyright},t)},f=a("je8k"),v=a.n(f),N=function(e){var t=e.menu;return i.a.createElement("nav",{className:v.a.menu},i.a.createElement("ul",{className:v.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:v.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:v.a["menu__list-item-link"],activeClassName:v.a["menu__list-item-link--active"]},e.label))}))))},k=a("SySy"),x=a.n(k),y=a("gGy4"),w=function(e){var t=e.isIndex,a=Object(y.b)(),n=a.author,l=a.copyright,c=a.menu;return i.a.createElement("div",{className:x.a.sidebar},i.a.createElement("div",{className:x.a.sidebar__inner},i.a.createElement(r,{author:n,isIndex:t}),i.a.createElement(N,{menu:c}),i.a.createElement(p,{contacts:n.contacts}),i.a.createElement(g,{copyright:l})))}},"1U39":function(e,t,a){e.exports={main__image:"main-module--main__image--27uWk",main__text:"main-module--main__text--2k2-h",main__text__title:"main-module--main__text__title--KRak6",main__text__body:"main-module--main__text__body--3nn8L"}},Ceqq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("/d1K"),c=a("Zttt"),m=a("RXmK"),r=a("gGy4"),o=a("1U39"),s=a.n(o),u=function(){return i.a.createElement("div",{className:s.a.main},i.a.createElement("img",{src:"/media/mainBanner.jpg",className:s.a.main__image}),i.a.createElement("div",{className:s.a.main__text},i.a.createElement("h3",{className:s.a.main__title},"안녕하세요 오승석입니다! 👋"),i.a.createElement("div",{className:s.a.main__body},"기록의 중요성을 믿고 이곳에서 실천하고자 합니다.")))};t.default=function(){var e=Object(r.b)(),t=e.title,a=e.subtitle;return i.a.createElement(c.a,{title:"Main - "+t,description:a},i.a.createElement(l.a,null),i.a.createElement(m.a,{disableScroll:!0},i.a.createElement(u,null)))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),c=a.n(l),m=function(e){var t=e.title,a=e.disableScroll,l=e.children,m=Object(n.useRef)();return Object(n.useEffect)((function(){a||m.current.scrollIntoView()})),i.a.createElement("div",{ref:m,className:c.a.page},i.a.createElement("div",{className:c.a.page__inner},t&&i.a.createElement("h1",{className:c.a.page__title},t),i.a.createElement("div",{className:c.a.page__body},l)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-templates-main-template-js-e9ff9e5b7eddc50ba53a.js.map