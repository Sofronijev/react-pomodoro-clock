(this.webpackJsonpreact_pomodoro=this.webpackJsonpreact_pomodoro||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/bell.10737d28.mp3"},function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),o=n.n(a),i=(n(10),n(1));var s=function(e){return c.a.createElement("div",{className:"timerControl"},c.a.createElement("div",{onClick:e.changeTime,id:e.decrementId,style:{backgroundColor:e.secondColor},className:"decrement buttons"},"-"),c.a.createElement("p",{id:e.labelId},e.title),c.a.createElement("div",{onClick:e.changeTime,id:e.incrementId,style:{backgroundColor:e.secondColor},className:"increment buttons"},"+"),c.a.createElement("p",{id:e.lengthId},e.length))};var l=function(e){return c.a.createElement("div",{className:"timer"},c.a.createElement("div",{id:"timer-label"},e.timerType),c.a.createElement("div",{id:"time-left"},e.createTimer()))};var u=function(e){return c.a.createElement("div",{className:"controlButtons"},c.a.createElement("div",{onClick:e.resetTime,className:"buttons",style:{backgroundColor:e.secondColor},id:"reset"},c.a.createElement("i",{class:"material-icons"},"restore")),c.a.createElement("div",{onClick:e.toggleCountdown,className:"buttons",style:{backgroundColor:e.secondColor},id:"start_stop"},c.a.createElement("i",{class:"material-icons"},"play_arrow"),c.a.createElement("i",{class:"material-icons"},"pause")))},m=n(4),d=n.n(m);var b=function(e,t){var n=Object(r.useRef)();Object(r.useEffect)((function(){n.current=e}),[e]),Object(r.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])};var f=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(25),m=Object(i.a)(o,2),f=m[0],g=m[1],v=Object(r.useState)(1500),h=Object(i.a)(v,2),k=h[0],E=h[1],p=Object(r.useState)(!1),j=Object(i.a)(p,2),O=j[0],C=j[1],I=Object(r.useState)("Session"),S=Object(i.a)(I,2),w=S[0],y=S[1],T=Object(r.useState)("#d53d32"),N=Object(i.a)(T,2),B=N[0],L=N[1],_=Object(r.useState)("#f75f54"),R=Object(i.a)(_,2),x=R[0],J=R[1],W=Object(r.useState)(!0),q=Object(i.a)(W,2),A=q[0],M=q[1],P=Object(r.useRef)(null);function $(e){if(A)switch(e.target.id){case"break-increment":var t=n<60?1:0;a((function(e){return e+t}));break;case"break-decrement":var r=n>1?1:0;a((function(e){return e-r}));break;case"session-increment":var c=f<60?1:0;g((function(e){return e+c})),E((function(e){return e+60*c}));break;default:var o=f>1?1:0;g((function(e){return e-o})),E((function(e){return e-60*o}))}}function z(){C(!1),M(!0)}return Object(r.useEffect)((function(){"Session"===w?(L("#d53d32"),J("#f75f54")):(L("#52bc6e"),J("#78de93"))}),[w]),Object(r.useEffect)((function(){document.querySelector("#root").style.backgroundColor=x}),[x]),Object(r.useEffect)((function(){0===k&&(P.current.currentTime=0,P.current.play())}),[k]),b((function(){"Session"===w?k>0?E((function(e){return e-1})):(y("Break"),E(60*n)):"Break"===w&&(k>0?E((function(e){return e-1})):(y("Session"),E(60*f)))}),O?1e3:null),c.a.createElement("div",{className:"App",style:{backgroundColor:B}},c.a.createElement("h1",null,"Pomodoro clock"),c.a.createElement(l,{timerType:w,breakLength:n,sessionLength:f,timer:k,createTimer:function(){var e=Math.floor(k/60),t=k-60*e;return t=t<10?"0"+t:t,"".concat(e=e<10?"0"+e:e,":").concat(t)}}),c.a.createElement(s,{labelId:"break-label",incrementId:"break-increment",decrementId:"break-decrement",lengthId:"break-length",title:"Break Length",length:n,changeTime:$,secondColor:x}),c.a.createElement(s,{labelId:"session-label",incrementId:"session-increment",decrementId:"session-decrement",lengthId:"session-length",title:"Session Length",length:f,changeTime:$,secondColor:x}),c.a.createElement(u,{resetTime:function(){z(),P.current.pause(),P.current.currentTime=0,a(5),g(25),E(1500),C(!1),y("Session")},toggleCountdown:function(){O?(C(!1),z()):C(!0),M(!1)},stopCountdown:z,isRunning:O,secondColor:x}),c.a.createElement("audio",{id:"beep",src:d.a,ref:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.1ce441d4.chunk.js.map