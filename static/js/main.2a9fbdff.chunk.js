(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=(n(25),n(26),n(2)),s=n(8),l=n.n(s),u=n(12),h=n(17),d=function(e){var t=e.email,n=e.name,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"robots"}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},b=a.a.memo((function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))})),g=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"}},e.children)},p=n(13),m=n(14),E=n(19),v=n(18),O=function(e){Object(E.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(m.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"That is not good!"):this.props.children}}]),n}(r.Component),w=(n(33),a.a.memo((function(){return a.a.createElement("h1",{className:"f2"},"Robofriends")})));var S=function(e){var t=Object(r.useState)([]),n=Object(h.a)(t,2),o=n[0],c=n[1],i=e.searchField,s=e.onSearchChange,d=e.robots,p=e.onRequestRobots,m=e.isPending;function E(){return(E=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===d.length&&p(),d.length>0&&c(d);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[d.length]),Object(r.useEffect)((function(){d.length&&c(function(e){return e.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}))}(d))}),[i.length]),m?a.a.createElement("h1",{name:"loading"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement(w,null),a.a.createElement(b,{searchChange:s}),a.a.createElement(g,null,a.a.createElement(O,null,a.a.createElement(f,{robots:o}))))};var j=function(){var e=Object(i.c)((function(e){return e.searchRobots.searchField})),t=Object(i.c)((function(e){return e.requestRobots.robots})),n=Object(i.c)((function(e){return e.requestRobots.isPending})),r=Object(i.b)(),o={searchField:e,robots:t,isPending:n,onRequestRobots:function(){!function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}(r)},onSearchChange:function(e){r({type:"CHANGE_SEARCH_FIELD",payload:e.target.value})}};return a.a.createElement(S,o)},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(34);var C=n(3),k=n(15),_=n(16),T=n(1),N={searchField:""},A={isPending:!1,robots:[]},P=Object(_.createLogger)(),U=Object(C.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(T.a)(Object(T.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(T.a)(Object(T.a)({},e),{},{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(T.a)(Object(T.a)({},e),{},{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(T.a)(Object(T.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),L=Object(C.d)(U,Object(C.a)(k.a,P));c.a.render(a.a.createElement(i.a,{store:L},a.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends-pwa","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.2a9fbdff.chunk.js.map