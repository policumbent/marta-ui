(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(n,e,t){"use strict";var o,a=t(170),i=t.n(a),c={setup:function(){var n;n="3000"===window.location.port?"5000":window.location.port,(o=i()("http://"+document.domain+":"+n)).on("connection",function(){})},getData:function(n){o.on("data response",function(e){return n(JSON.parse(e))})},requestData:function(){o.emit("data request")},giveData:function(n){o.emit("give json",n)}};e.a=c},171:function(n,e,t){n.exports=t(281)},253:function(n,e,t){},256:function(n,e,t){},277:function(n,e){},281:function(n,e,t){"use strict";t.r(e);t(172),t(202),t(203),t(232),t(236),t(238);!function(){if("function"===typeof window.CustomEvent)return!1;function n(n,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(n,e.bubbles,e.cancelable,e.detail),t}n.prototype=window.Event.prototype,window.CustomEvent=n}();var o=t(1),a=t.n(o),i=t(101),c=t.n(i),r=(t(253),t(95)),u=t(96),l=t(99),d=t(97),s=t(98),m=t(285),p=t(286),f=t(283),w=t(64),v=t.n(w),b=(t(256),t(156)),h=function(){return a.a.createElement("div",{className:"animated fadeIn pt-3 text-center"},"Loading...")},E=v()({loader:function(){return Promise.all([t.e(6),t.e(44)]).then(t.bind(null,535))},loading:h}),g=v()({loader:function(){return Promise.all([t.e(9),t.e(47)]).then(t.bind(null,494))},loading:h}),y=v()({loader:function(){return Promise.all([t.e(10),t.e(48)]).then(t.bind(null,495))},loading:h}),j=function(n){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(s.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){b.a.setup()}},{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(p.a,null,a.a.createElement(f.a,{exact:!0,path:"/404",name:"Page 404",component:g}),a.a.createElement(f.a,{exact:!0,path:"/500",name:"Page 500",component:y}),a.a.createElement(f.a,{path:"/",name:"Home",component:E})))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[171,4,5]]]);
//# sourceMappingURL=main.a49667a6.chunk.js.map