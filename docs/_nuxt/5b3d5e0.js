(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{364:function(t,e,n){"use strict";n.r(e);n(82),n(41),n(25),n(16),n(22),n(37),n(46),n(50),n(42);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={name:"TokenComponent",data:function(){return{colors:["white","","primary","green","red","pink","secondary"]}},methods:{getChipSet:function(text){var t,e=[],n=r(text.split(","));try{for(n.s();!(t=n.n()).done;){var o=t.value,l=this.getColor();e.push({txt:o.trim(),color:l.trim(),textColor:"white"===l.trim()?"black":"white"})}}catch(t){n.e(t)}finally{n.f()}return e},getColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}},props:["tokenText"]},c=n(66),f=n(101),d=n.n(f),m=n(396),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},t._l(t.getChipSet(t.tokenText),(function(e,r){return n("v-chip",{key:r,attrs:{color:e.color,"text-color":e.textColor}},[t._v("\n    "+t._s(e.txt)+"\n  ")])})),1)}),[],!1,null,"13767be8",null);e.default=component.exports;d()(component,{VChip:m.a})},401:function(t,e,n){"use strict";n.r(e);var r={name:"timelineComponent",components:{TokenComponent:n(364).default},data:function(){return{timelines:[{date:"2021-01 ~ 2020-02",workTitle:"각 Application 로그 통합 구축",workDescription:"ELK cluster 구축, 서비스 단위의 로그 통합 및 분류 - 분석을 위한 도메인 로그, 시스템 로그",skill:"Elastic stack, nuxt"},{date:"2020-10 ~ 2020-12",workTitle:"위아자 사이트 개편",workDescription:"개편 후 사용 ",skill:"java"},{date:"2020-02 ~ 2020-05",workTitle:"중앙데일리 서비스 및 WCMS 구축",workDescription:"gitlab, jenkins 서버 구축 및 기사 파트 개발",skill:"java"},{date:"2019-02 ~ 재직중",workTitle:"중앙그룹 WCMS 개발 및 운영",skill:"js, java, mssql"}]}}},o=n(66),l=n(101),c=n.n(l),f=n(353),d=n(352),m=n(397),v=n(398),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline",t._l(t.timelines,(function(e){return n("v-timeline-item",{key:e,attrs:{color:"red lighten-2",large:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[n("span",[t._v(t._s(e.date))]),t._v(" "),n("br"),t._v(" "),n("span",[t._v(t._s(e.workTitle))])]},proxy:!0}],null,!0)},[t._v(" "),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[n("TokenComponent",{attrs:{"token-text":e.skill}})],1),t._v(" "),n("v-card-text",[t._v("\n        "+t._s(e.workDescription)+"\n      ")])],1)],1)})),1)}),[],!1,null,"5160cd37",null);e.default=component.exports;c()(component,{TokenComponent:n(364).default}),c()(component,{VCard:f.a,VCardText:d.b,VCardTitle:d.c,VTimeline:m.a,VTimelineItem:v.a})}}]);