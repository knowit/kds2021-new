(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+jru":function(t,e,r){r("aPfg")("WeakMap")},"/eQG":function(t,e,r){r("v5Dd");var n=r("WEpk").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}},"/h46":function(t,e,r){r("cHUd")("Map")},"/jkW":function(t,e,r){"use strict";r("hfKm")(e,"__esModule",{value:!0});var n=/\/\[[^/]+?\](?=\/|$)/;e.isDynamicRoute=function(t){return n.test(t)}},"0Bsm":function(t,e,r){"use strict";var n=r("KI45");e.__esModule=!0,e.default=function(t){function e(e){return a.default.createElement(t,(0,o.default)({router:(0,i.useRouter)()},e))}e.getInitialProps=t.getInitialProps,e.origGetInitialProps=t.origGetInitialProps,!1;return e};var o=n(r("htGi")),a=n(r("q1tI")),i=r("nOHt")},"16Al":function(t,e,r){"use strict";var n=r("WbBG");function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},"17x9":function(t,e,r){t.exports=r("16Al")()},"4JlD":function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,c){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(i(t),(function(i){var c=encodeURIComponent(n(i))+r;return o(t[i])?a(t[i],(function(t){return c+encodeURIComponent(n(t))})).join(e):c+encodeURIComponent(n(t[i]))})).join(e):c?encodeURIComponent(n(c))+r+encodeURIComponent(n(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},"5Uuq":function(t,e,r){var n=r("Jo+v"),o=r("hfKm"),a=r("iZP3"),i=r("G4HQ");function c(){if("function"!==typeof i)return null;var t=new i;return c=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var r={},i=o&&n;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var s=i?n(t,u):null;s&&(s.get||s.set)?o(r,u,s):r[u]=t[u]}return r.default=t,e&&e.set(t,r),r}},"8+Nu":function(t,e,r){var n=r("8bdy"),o=r("fprZ"),a=r("Bh1o");t.exports=function(t,e){return n(t)||o(t,e)||a()}},"8bdy":function(t,e,r){var n=r("p0XB");t.exports=function(t){if(n(t))return t}},BURE:function(t,e,r){r("cHUd")("WeakMap")},Bh1o:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},G4HQ:function(t,e,r){t.exports=r("m5qO")},"Jo+v":function(t,e,r){t.exports=r("/eQG")},LX0d:function(t,e,r){t.exports=r("UDep")},M623:function(t,e,r){"use strict";r.r(e);var n=r("0iUn"),o=r("sLSF"),a=r("MI3g"),i=r("a7VT"),c=r("Tit0"),u=r("q1tI"),s=r.n(u),f=r("YFqc"),l=r.n(f),p=(r("jkxm"),s.a.createElement),h=function(t){function e(){return Object(n.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return p("nav",{role:"navigation"},p("div",{id:"menuToggle"},p("input",{type:"checkbox",className:"menu"}),p("div",{className:"menuButton"},p("span",{className:"top"}),p("span",{className:"middle"}),p("span",{className:"bottom"})),p("div",{id:"filter"}),p("div",{id:"menu"},p("h1",{className:"menuHeader"},"Menu"),p(l.a,{href:"/practicalities"},p("a",{className:"link practicalities"},"Practicalities")),p(l.a,{href:"/schedule"},p("a",{className:"link schedule"},"Schedule")),p(l.a,{href:"/talksAndSpeakers"},p("a",{className:"link talksAndSpeakers"},"Talks and speakers")),p(l.a,{href:"/location"},p("a",{className:"link location"},"Location")),p(l.a,{href:"/codeOfConduct"},p("a",{className:"link codeOfConduct"},"Code of conduct")),p(l.a,{href:"/static/old/index_2019.html"},p("a",{className:"link"},"Last years program")))))}}]),e}(s.a.Component);e.default=h},Oc8Q:function(t,e,r){"use strict";var n,o=r("5T2Y"),a=r("V7Et")(0),i=r("kTiW"),c=r("6/1s"),u=r("kwZ1"),s=r("kB4c"),f=r("93I4"),l=r("n3ko"),p=r("n3ko"),h=!o.ActiveXObject&&"ActiveXObject"in o,v=c.getWeak,d=Object.isExtensible,y=s.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var e=v(t);return!0===e?y(l(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return s.def(l(this,"WeakMap"),t,e)}},w=t.exports=r("raTm")("WeakMap",m,g,s,!0,!0);p&&h&&(u((n=s.getConstructor(m,"WeakMap")).prototype,g),c.NEED=!0,a(["delete","has","get","set"],(function(t){var e=w.prototype,r=e[t];i(e,t,(function(e,o){if(f(e)&&!d(e)){this._f||(this._f=new n);var a=this._f[t](e,o);return"set"==t?this:a}return r.call(this,e,o)}))})))},P5f7:function(t,e,r){"use strict";var n=r("8+Nu");r("hfKm")(e,"__esModule",{value:!0}),e.rewriteUrlForNextExport=function(t){var e=t.split("#"),r=n(e,2),o=r[0],a=r[1],i=o.split("?"),c=n(i,2),u=c[0],s=c[1];return u=u.replace(/\/$/,""),/\.[^/]+\/?$/.test(u)||(u+="/"),s&&(u+="?"+s),a&&(u+="#"+a),u}},QmWs:function(t,e,r){var n,o=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,a=/https?|ftp|gopher|file/;function i(t){"string"==typeof t&&(t=y(t));var e=function(t,e,r){var n=t.auth,o=t.hostname,a=t.protocol||"",i=t.pathname||"",c=t.hash||"",u=t.query||"",s=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",t.host?s=n+t.host:o&&(s=n+(~o.indexOf(":")?"["+o+"]":o),t.port&&(s+=":"+t.port)),u&&"object"==typeof u&&(u=e.encode(u));var f=t.search||u&&"?"+u||"";return a&&":"!==a.substr(-1)&&(a+=":"),t.slashes||(!a||r.test(a))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),c&&"#"!==c[0]&&(c="#"+c),f&&"?"!==f[0]&&(f="?"+f),{protocol:a,host:s,pathname:i=i.replace(/[?#]/g,encodeURIComponent),search:f=f.replace("#","%23"),hash:c}}(t,o,a);return""+e.protocol+e.host+e.pathname+e.search+e.hash}var c="http://",u="w.w",s=c+u,f=/^https?|ftp|gopher|file/,l=/^(.+?)([#?].*)/,p=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,h=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(t){try{return decodeURI(t)}catch(o){return t}}function y(t,e,r){void 0===e&&(e=!1),void 0===r&&(r=!1);var n=(t=d(t.trim())).match(l);t=n?n[1].replace(/\\/g,"/")+n[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var a=!/(^javascript)/.test(t)&&t.match(p),c=h.test(t),y="";a&&(f.test(a[1])||(y=a[1].toLowerCase(),t=""+a[2]+a[3]),a[2]||(c=!1,f.test(a[1])?(y=a[1],t=""+a[3]):t="//"+a[3]),3!==a[2].length&&1!==a[2].length||(y=a[1],t="/"+a[3]));var m,g=t.match(/(:[0-9]+)/),w="";g&&g[1]&&3===g[1].length&&(t=t.replace(w=g[1],w+"00"));var b={},x="",_="";try{m=new URL(t)}catch(o){x=o,y||r||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(_="/",t=t.substr(1));try{m=new URL(t,s)}catch(t){return b.protocol=y,b.href=y,b}}b.slashes=c&&!_,b.host=~m.host.indexOf(u)?"":m.host,b.hostname=~m.hostname.indexOf(u)?"":m.hostname.replace(/(\[|\])/g,""),b.protocol=x?y||null:m.protocol,b.search=m.search.replace(/\\/g,"%5C"),b.hash=m.hash.replace(/\\/g,"%5C");var k=t.split("#");!b.search&&~k[0].indexOf("?")&&(b.search="?"),b.hash||""!==k[1]||(b.hash="#"),b.query=e?o.decode(m.search.substr(1)):b.search.substr(1),b.pathname=_+d(m.pathname).replace(/"/g,"%22"),"about:"===b.protocol&&"blank"===b.pathname&&(b.protocol="",b.pathname=""),x&&"/"!==t[0]&&(b.pathname=b.pathname.substr(1)),y&&!f.test(y)&&"/"!==t.slice(-1)&&"/"===b.pathname&&(b.pathname=""),b.path=b.pathname+b.search,b.auth=[m.username,m.password].map(decodeURIComponent).filter(Boolean).join(":"),b.port=m.port,w&&(b.host=b.host.replace(w+"00",w),b.port=b.port.slice(0,-2)),b.href=_?""+b.pathname+b.search+b.hash:i(b);var E=/^(file)/.test(b.href)?["host","hostname"]:[];return Object.keys(b).forEach((function(t){~E.indexOf(t)||(b[t]=b[t]||null)})),b}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,g=/https?|ftp|gopher|file/;function w(t,e){var r="string"==typeof t?y(t):t;t="object"==typeof t?i(t):t;var n=y(e),o="";r.protocol&&!r.slashes&&(o=r.protocol,t=t.replace(r.protocol,""),o+="/"===e[0]||"/"===t[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,e=e.replace(n.protocol,"")));var a=t.match(m);a&&!n.protocol&&(t=t.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^\/]/.test(e)&&(o=o.slice(0,-1)));var u=new URL(t,s+"/"),f=new URL(e,u).toString().replace(s,""),l=n.protocol||r.protocol;return l+=r.slashes||n.slashes?"//":"",!o&&l?f=f.replace(c,l):o&&(f=f.replace(c,"")),g.test(f)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),o&&(f=o+("/"===f[0]?f.substr(1):f)),f}e.parse=y,e.format=i,e.resolve=w,e.resolveObject=function(t,e){return y(w(t,e))}},UDep:function(t,e,r){r("wgeU"),r("FlQf"),r("bBy9"),r("g33z"),r("XLbu"),r("/h46"),r("dVTT"),t.exports=r("WEpk").Map},UXZV:function(t,e,r){t.exports=r("UbbE")},UbbE:function(t,e,r){r("o8NH"),t.exports=r("WEpk").Object.assign},WbBG:function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},XLbu:function(t,e,r){var n=r("Y7ZC");n(n.P+n.R,"Map",{toJSON:r("8iia")("Map")})},YFqc:function(t,e,r){t.exports=r("cTJO")},YTqd:function(t,e,r){"use strict";r("hfKm")(e,"__esModule",{value:!0}),e.getRouteRegex=function(t){var e=(t.replace(/\/$/,"")||"/").replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&"),r={},n=1,o=e.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g,(function(t,e){var o=/^(\\\.){3}/.test(e);return r[e.replace(/\\([|\\{}()[\]^$+*?.-])/g,"$1").replace(/^\.{3}/,"")]={pos:n++,repeat:o},o?"/(.+?)":"/([^/]+?)"}));return{re:new RegExp("^"+o+"(?:/)?$","i"),groups:r}}},b3CU:function(t,e,r){var n=r("pbKT"),o=r("vjea");function a(e,r,i){return!function(){if("undefined"===typeof Reflect||!n)return!1;if(n.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(n(Date,[],(function(){}))),!0}catch(t){return!1}}()?t.exports=a=function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&o(a,r.prototype),a}:t.exports=a=n,a.apply(null,arguments)}t.exports=a},cTJO:function(t,e,r){"use strict";var n=r("/HRN"),o=r("WaGi"),a=r("ZDA2"),i=r("/+P4"),c=r("N9n2"),u=r("5Uuq"),s=r("KI45");e.__esModule=!0,e.default=void 0;var f,l=s(r("LX0d")),p=r("QmWs"),h=u(r("q1tI")),v=(s(r("17x9")),s(r("nOHt"))),d=(r("P5f7"),r("g/15"));function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var m=new l.default,g=window.IntersectionObserver;function w(){return f||(g?f=new g((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){function e(t){var r;return n(this,e),(r=a(this,i(e).call(this,t))).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(t){var e=null,r=null,n=null;return function(o,a){if(n&&o===e&&a===r)return n;var i=t(o,a);return e=o,r=a,n=i,i}}((function(t,e){return{href:y(t),as:e?y(e):e}})),r.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,o=e.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=r.formatUrls(r.props.href,r.props.as),i=a.href,c=a.as;if(function(t){var e=(0,p.parse)(t,!1,!0),r=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(i)){var u=window.location.pathname;i=(0,p.resolve)(u,i),c=c?(0,p.resolve)(u,c):i,t.preventDefault();var s=r.props.scroll;null==s&&(s=c.indexOf("#")<0),v.default[r.props.replace?"replace":"push"](i,c,{shallow:r.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==t.prefetch,r}return c(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var r=w();return r?(r.observe(t),m.set(t,e),function(){try{r.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()})))}},{key:"prefetch",value:function(){if(this.p){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=(0,p.resolve)(t,e);v.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var a=h.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch()},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),h.default.cloneElement(a,i)}}]),e}(h.Component);b.propTypes=void 0;var x=b;e.default=x},czwh:function(t,e,r){var n=r("Y7ZC"),o=r("oVml"),a=r("eaoh"),i=r("5K7Z"),c=r("93I4"),u=r("KUxP"),s=r("wYmx"),f=(r("5T2Y").Reflect||{}).construct,l=u((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!u((function(){f((function(){}))}));n(n.S+n.F*(l||p),"Reflect",{construct:function(t,e){a(t),i(e);var r=arguments.length<3?t:a(arguments[2]);if(p&&!l)return f(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(s.apply(t,n))}var u=r.prototype,h=o(c(u)?u:Object.prototype),v=Function.apply.call(t,h,e);return c(v)?v:h}})},dVTT:function(t,e,r){r("aPfg")("Map")},dZ6Y:function(t,e,r){"use strict";var n=r("SqZg");r("hfKm")(e,"__esModule",{value:!0}),e.default=function(){var t=n(null);return{on:function(e,r){(t[e]||(t[e]=[])).push(r)},off:function(e,r){t[e]&&t[e].splice(t[e].indexOf(r)>>>0,1)},emit:function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];(t[e]||[]).slice().map((function(t){t.apply(void 0,n)}))}}}},elyg:function(t,e,r){"use strict";var n=r("ln6h"),o=r("8+Nu"),a=r("eVuF"),i=r("Qetd"),c=r("/HRN"),u=r("WaGi"),s=r("hfKm"),f=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};s(e,"__esModule",{value:!0});var l=r("QmWs"),p=f(r("dZ6Y")),h=r("g/15"),v=r("P5f7"),d=r("/jkW"),y=r("gguc"),m=r("YTqd");function g(t){return t.replace(/\/$/,"")||"/"}var w=function(){function t(e,r,n,o){var a=this,i=o.initialProps,u=o.pageLoader,s=o.App,f=o.wrapApp,l=o.Component,p=o.err,v=o.subscription;c(this,t),this.onPopState=function(t){if(t.state){if((!t.state||!a.isSsr||t.state.url!==a.pathname||t.state.as!==a.asPath)&&(!a._bps||a._bps(t.state))){var e=t.state,r=e.url,n=e.as,o=e.options;0,a.replace(r,n,o)}}else{var i=a.pathname,c=a.query;a.changeState("replaceState",h.formatWithValidation({pathname:i,query:c}),h.getURL())}},this.route=g(e),this.components={},"/_error"!==e&&(this.components[this.route]={Component:l,props:i,err:p}),this.components["/_app"]={Component:s},this.events=t.events,this.pageLoader=u,this.pathname=e,this.query=r,this.asPath=d.isDynamicRoute(e)&&__NEXT_DATA__.autoExport?e:n,this.sub=v,this.clc=null,this._wrapApp=f,this.isSsr=!0,this.changeState("replaceState",h.formatWithValidation({pathname:e,query:r}),n),window.addEventListener("popstate",this.onPopState)}return u(t,[{key:"update",value:function(t,e){var r=e.default||e,n=this.components[t];if(!n)throw new Error("Cannot update unavailable route: ".concat(t));var o=i(i({},n),{Component:r});this.components[t]=o,"/_app"!==t?t===this.route&&this.notify(o):this.notify(this.components[this.route])}},{key:"reload",value:function(){window.location.reload()}},{key:"back",value:function(){window.history.back()}},{key:"push",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("pushState",t,e,r)}},{key:"replace",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.change("replaceState",t,e,r)}},{key:"change",value:function(e,r,n,o){var c=this;return new a((function(a,u){o._h||(c.isSsr=!1),h.SUPPORTS_PERFORMANCE_USER_TIMING&&performance.mark("routeChange");var s="object"===typeof r?h.formatWithValidation(r):r,f="object"===typeof n?h.formatWithValidation(n):n;if(c.abortComponentLoad(f),!o._h&&c.onlyAHashChange(f))return c.asPath=f,t.events.emit("hashChangeStart",f),c.changeState(e,s,f),c.scrollToHash(f),t.events.emit("hashChangeComplete",f),a(!0);var p=l.parse(s,!0),v=p.pathname,w=p.query,b=p.protocol;if(!v||b)return a(!1);c.urlIsNew(f)||(e="replaceState");var x=g(v),_=o.shallow,k=void 0!==_&&_;if(d.isDynamicRoute(x)){var E=l.parse(f).pathname,O=y.getRouteMatcher(m.getRouteRegex(x))(E);if(!O){var C="The provided `as` value (".concat(E,") is incompatible with the `href` value (").concat(x,"). ")+"Read more: https://err.sh/zeit/next.js/incompatible-href-as";return console.error(C),a(!1)}i(w,O)}t.events.emit("routeChangeStart",f),c.getRouteInfo(x,v,w,f,k).then((function(r){var n=r.error;if(n&&n.cancelled)return a(!1);t.events.emit("beforeHistoryChange",f),c.changeState(e,s,f,o);var u=window.location.hash.substring(1);if(c.set(x,v,w,f,i(i({},r),{hash:u})),n)throw t.events.emit("routeChangeError",n,f),n;return t.events.emit("routeChangeComplete",f),a(!0)}),u)}))}},{key:"changeState",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};"pushState"===t&&h.getURL()===r||window.history[t]({url:e,as:r,options:n},null,r)}},{key:"getRouteInfo",value:function(t,e,r,n){var o=this,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=this.components[t];return i&&c&&this.route===t?a.resolve(c):new a((function(e,r){if(c)return e(c);o.fetchComponent(t).then((function(t){return e({Component:t})}),r)})).then((function(i){var c=i.Component;return new a((function(a,u){o.getInitialProps(c,{pathname:e,query:r,asPath:n}).then((function(e){i.props=e,o.components[t]=i,a(i)}),u)}))})).catch((function(t){return new a((function(i){return"PAGE_LOAD_ERROR"===t.code?(window.location.href=n,t.cancelled=!0,i({error:t})):t.cancelled?i({error:t}):void i(o.fetchComponent("/_error").then((function(n){var i={Component:n,err:t};return new a((function(a){o.getInitialProps(n,{err:t,pathname:e,query:r}).then((function(e){i.props=e,i.error=t,a(i)}),(function(e){console.error("Error in error page `getInitialProps`: ",e),i.error=t,i.props={},a(i)}))}))})))}))}))}},{key:"set",value:function(t,e,r,n,o){this.route=t,this.pathname=e,this.query=r,this.asPath=n,this.notify(o)}},{key:"beforePopState",value:function(t){this._bps=t}},{key:"onlyAHashChange",value:function(t){if(!this.asPath)return!1;var e=this.asPath.split("#"),r=o(e,2),n=r[0],a=r[1],i=t.split("#"),c=o(i,2),u=c[0],s=c[1];return!(!s||n!==u||a!==s)||n===u&&a!==s}},{key:"scrollToHash",value:function(t){var e=t.split("#"),r=o(e,2)[1];if(""!==r){var n=document.getElementById(r);if(n)n.scrollIntoView();else{var a=document.getElementsByName(r)[0];a&&a.scrollIntoView()}}else window.scrollTo(0,0)}},{key:"urlIsNew",value:function(t){return this.asPath!==t}},{key:"prefetch",value:function(t){var e=this;return new a((function(r,n){var o=l.parse(t),a=o.pathname,i=o.protocol;if(a&&!i){0;var c=g(a);e.pageLoader.prefetch(c).then(r,n)}}))}},{key:"fetchComponent",value:function(t){var e,r,o,a;return n.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=!1,r=this.clc=function(){e=!0},i.next=4,n.awrap(this.pageLoader.loadPage(t));case 4:if(o=i.sent,!e){i.next=9;break}throw(a=new Error('Abort fetching component for route: "'.concat(t,'"'))).cancelled=!0,a;case 9:return r===this.clc&&(this.clc=null),i.abrupt("return",o);case 11:case"end":return i.stop()}}),null,this)}},{key:"getInitialProps",value:function(t,e){var r,o,i,c,u,s,f,p,v;return n.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(r=!1,o=function(){r=!0},this.clc=o,i=this.components["/_app"].Component,!t.__NEXT_SPR){d.next=12;break}return s=l.parse(e.asPath||e.pathname),f=(f=s.pathname)&&"/"!==f?f:"/index",d.next=9,n.awrap(fetch("/_next/data/".concat(__NEXT_DATA__.buildId).concat(f,".json")).then((function(t){if(!t.ok)throw u=t.status,new Error("failed to load prerender data");return t.json()})).catch((function(t){return console.error("Failed to load data",u,t),window.location.href=f,new a((function(){}))})));case 9:c=d.sent,d.next=17;break;case 12:return p=this._wrapApp(i),e.AppTree=p,d.next=16,n.awrap(h.loadGetInitialProps(i,{AppTree:p,Component:t,router:this,ctx:e}));case 16:c=d.sent;case 17:if(o===this.clc&&(this.clc=null),!r){d.next=22;break}throw(v=new Error("Loading initial props cancelled")).cancelled=!0,v;case 22:return d.abrupt("return",c);case 23:case"end":return d.stop()}}),null,this)}},{key:"abortComponentLoad",value:function(e){if(this.clc){var r=new Error("Route Cancelled");r.cancelled=!0,t.events.emit("routeChangeError",r,e),this.clc(),this.clc=null}}},{key:"notify",value:function(t){this.sub(t,this.components["/_app"].Component)}}],[{key:"_rewriteUrlForNextExport",value:function(t){return v.rewriteUrlForNextExport(t)}}]),t}();e.default=w,w.events=p.default()},fprZ:function(t,e,r){var n=r("XXOK"),o=r("yLu3");t.exports=function(t,e){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],a=!0,i=!1,c=void 0;try{for(var u,s=n(t);!(a=(u=s.next()).done)&&(r.push(u.value),!e||r.length!==e);a=!0);}catch(f){i=!0,c=f}finally{try{a||null==s.return||s.return()}finally{if(i)throw c}}return r}}},"g/15":function(t,e,r){"use strict";var n=r("ln6h");r("pLtp");r("hfKm")(e,"__esModule",{value:!0});var o=r("QmWs");function a(){var t=window.location,e=t.protocol,r=t.hostname,n=t.port;return"".concat(e,"//").concat(r).concat(n?":"+n:"")}function i(t){return"string"===typeof t?t:t.displayName||t.name||"Unknown"}function c(t){return t.finished||t.headersSent}e.execOnce=function(t){var e=this,r=!1,n=null;return function(){if(!r){r=!0;for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];n=t.apply(e,a)}return n}},e.getLocationOrigin=a,e.getURL=function(){var t=window.location.href,e=a();return t.substring(e.length)},e.getDisplayName=i,e.isResSent=c,e.loadGetInitialProps=function t(e,r){var o,a,u;return n.async((function(s){for(;;)switch(s.prev=s.next){case 0:s.next=4;break;case 4:if(o=r.res||r.ctx&&r.ctx.res,e.getInitialProps){s.next=12;break}if(!r.ctx||!r.Component){s.next=11;break}return s.next=9,n.awrap(t(r.Component,r.ctx));case 9:return s.t0=s.sent,s.abrupt("return",{pageProps:s.t0});case 11:return s.abrupt("return",{});case 12:return s.next=14,n.awrap(e.getInitialProps(r));case 14:if(a=s.sent,!o||!c(o)){s.next=17;break}return s.abrupt("return",a);case 17:if(a){s.next=20;break}throw u='"'.concat(i(e),'.getInitialProps()" should resolve to an object. But found "').concat(a,'" instead.'),new Error(u);case 20:return s.abrupt("return",a);case 22:case"end":return s.stop()}}))},e.urlObjectKeys=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"],e.formatWithValidation=function(t,e){return o.format(t,e)},e.SUPPORTS_PERFORMANCE="undefined"!==typeof performance,e.SUPPORTS_PERFORMANCE_USER_TIMING=e.SUPPORTS_PERFORMANCE&&"function"===typeof performance.mark&&"function"===typeof performance.measure},g33z:function(t,e,r){"use strict";var n=r("Wu5q"),o=r("n3ko");t.exports=r("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=n.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return n.def(o(this,"Map"),0===t?0:t,e)}},n,!0)},gguc:function(t,e,r){"use strict";var n=r("pLtp");r("hfKm")(e,"__esModule",{value:!0}),e.getRouteMatcher=function(t){var e=t.re,r=t.groups;return function(t){var o=e.exec(t);if(!o)return!1;var a=decodeURIComponent,i={};return n(r).forEach((function(t){var e=r[t],n=o[e.pos];void 0!==n&&(i[t]=~n.indexOf("/")?n.split("/").map((function(t){return a(t)})):e.repeat?[a(n)]:a(n))})),i}}},htGi:function(t,e,r){var n=r("UXZV");function o(){return t.exports=o=n||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}t.exports=o},kB4c:function(t,e,r){"use strict";var n=r("XJU/"),o=r("6/1s").getWeak,a=r("5K7Z"),i=r("93I4"),c=r("EXMj"),u=r("oioR"),s=r("V7Et"),f=r("B+OT"),l=r("n3ko"),p=s(5),h=s(6),v=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,e){return p(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var r=m(this,t);r?r[1]=e:this.a.push([t,e])},delete:function(t){var e=h(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,a){var s=t((function(t,n){c(t,s,e,"_i"),t._t=e,t._i=v++,t._l=void 0,void 0!=n&&u(n,r,t[a],t)}));return n(s.prototype,{delete:function(t){if(!i(t))return!1;var r=o(t);return!0===r?d(l(this,e)).delete(t):r&&f(r,this._i)&&delete r[this._i]},has:function(t){if(!i(t))return!1;var r=o(t);return!0===r?d(l(this,e)).has(t):r&&f(r,this._i)}}),s},def:function(t,e,r){var n=o(a(e),!0);return!0===n?d(t).set(e,r):n[t._i]=r,t},ufstore:d}},kd2E:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var i={};if("string"!==typeof t||0===t.length)return i;var c=/\+/g;t=t.split(e);var u=1e3;a&&"number"===typeof a.maxKeys&&(u=a.maxKeys);var s=t.length;u>0&&s>u&&(s=u);for(var f=0;f<s;++f){var l,p,h,v,d=t[f].replace(c,"%20"),y=d.indexOf(r);y>=0?(l=d.substr(0,y),p=d.substr(y+1)):(l=d,p=""),h=decodeURIComponent(l),v=decodeURIComponent(p),n(i,h)?o(i[h])?i[h].push(v):i[h]=[i[h],v]:i[h]=v}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},kwZ1:function(t,e,r){"use strict";var n=r("jmDH"),o=r("w6GO"),a=r("mqlF"),i=r("NV0k"),c=r("JB68"),u=r("M1xp"),s=Object.assign;t.exports=!s||r("KUxP")((function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=s({},t)[r]||Object.keys(s({},e)).join("")!=n}))?function(t,e){for(var r=c(t),s=arguments.length,f=1,l=a.f,p=i.f;s>f;)for(var h,v=u(arguments[f++]),d=l?o(v).concat(l(v)):o(v),y=d.length,m=0;y>m;)h=d[m++],n&&!p.call(v,h)||(r[h]=v[h]);return r}:s},ln6h:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new R(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?h:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",p="executing",h="completed",v={};function d(){}function y(){}function m(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,a)&&(g=b);var x=m.prototype=d.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o){var a=new k(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},m5qO:function(t,e,r){r("wgeU"),r("bBy9"),r("Oc8Q"),r("BURE"),r("+jru"),t.exports=r("WEpk").WeakMap},nOHt:function(t,e,r){"use strict";var n=r("XXOK"),o=r("b3CU"),a=r("5Uuq"),i=r("KI45");e.__esModule=!0,e.useRouter=function(){return s.default.useContext(l.RouterContext)},e.makePublicRouterInstance=function(t){var e=t,r={},o=!0,a=!1,i=void 0;try{for(var u,s=n(v);!(o=(u=s.next()).done);o=!0){var l=u.value;"object"!==typeof e[l]?r[l]=e[l]:r[l]=(0,c.default)({},e[l])}}catch(p){a=!0,i=p}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return r.events=f.default.events,d.forEach((function(t){r[t]=function(){return e[t].apply(e,arguments)}})),r},e.createRouter=e.withRouter=e.default=void 0;var c=i(r("htGi")),u=i(r("hfKm")),s=i(r("q1tI")),f=a(r("elyg"));e.Router=f.default,e.NextRouter=f.NextRouter;var l=r("qOIg"),p=i(r("0Bsm"));e.withRouter=p.default;var h={router:null,readyCallbacks:[],ready:function(t){if(this.router)return t();this.readyCallbacks.push(t)}},v=["pathname","route","query","asPath","components"],d=["push","replace","reload","back","prefetch","beforePopState"];function y(){if(!h.router){throw new Error('No router instance found.\nYou should only use "next/router" inside the client side of your app.\n')}return h.router}(0,u.default)(h,"events",{get:function(){return f.default.events}}),v.forEach((function(t){(0,u.default)(h,t,{get:function(){return y()[t]}})})),d.forEach((function(t){h[t]=function(){var e=y();return e[t].apply(e,arguments)}})),["routeChangeStart","beforeHistoryChange","routeChangeComplete","routeChangeError","hashChangeStart","hashChangeComplete"].forEach((function(t){h.ready((function(){f.default.events.on(t,(function(){var e="on"+t.charAt(0).toUpperCase()+t.substring(1),r=h;if(r[e])try{r[e].apply(r,arguments)}catch(n){console.error("Error when running the Router event: "+e),console.error(n.message+"\n"+n.stack)}}))}))}));var m=h;e.default=m;e.createRouter=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return h.router=o(f.default,e),h.readyCallbacks.forEach((function(t){return t()})),h.readyCallbacks=[],h.router}},o8NH:function(t,e,r){var n=r("Y7ZC");n(n.S+n.F,"Object",{assign:r("kwZ1")})},pbKT:function(t,e,r){t.exports=r("qijr")},qOIg:function(t,e,r){"use strict";var n=r("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};n(e,"__esModule",{value:!0});var a=o(r("q1tI"));e.RouterContext=a.createContext(null)},qijr:function(t,e,r){r("czwh"),t.exports=r("WEpk").Reflect.construct},s4NR:function(t,e,r){"use strict";e.decode=e.parse=r("kd2E"),e.encode=e.stringify=r("4JlD")},v5Dd:function(t,e,r){var n=r("NsO/"),o=r("vwuL").f;r("zn7N")("getOwnPropertyDescriptor",(function(){return function(t,e){return o(n(t),e)}}))},wYmx:function(t,e,r){"use strict";var n=r("eaoh"),o=r("93I4"),a=r("MCSJ"),i=[].slice,c={},u=function(t,e,r){if(!(e in c)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";c[e]=Function("F,a","return new F("+n.join(",")+")")}return c[e](t,r)};t.exports=Function.bind||function(t){var e=n(this),r=i.call(arguments,1),c=function(){var n=r.concat(i.call(arguments));return this instanceof c?u(e,n.length,n):a(e,n,t)};return o(e.prototype)&&(c.prototype=e.prototype),c}},weVA:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Menu",function(){return r("M623")}])}},[["weVA",0,1,2]]]);