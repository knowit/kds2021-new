(window.webpackJsonp=window.webpackJsonp||[]).push([[12,31],{"8lD5":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/FavouriteTalkButton",function(){return n("dewo")}])},dewo:function(t,e,n){"use strict";n.r(e);var o=n("0iUn"),a=n("sLSF"),i=n("MI3g"),r=n("a7VT"),c=n("AT/M"),l=n("Tit0"),u=n("vYYK"),s=n("q1tI"),d=n.n(s),p=d.a.createElement,f=function(t){function e(t){var n;return Object(o.a)(this,e),n=Object(i.a)(this,Object(r.a)(e).call(this,t)),Object(u.a)(Object(c.a)(n),"favouriteButtonClick",(function(){n.setState({clicked:!n.state.clicked},(function(){return n.props.onClick&&n.props.onClick(n.state.clicked)})),"undefined"==typeof localStorage||localStorage.getItem(n.props.talkId)?"undefined"!=typeof localStorage&&localStorage.removeItem(n.props.talkId):localStorage.setItem(n.props.talkId,n.props.talkId)})),n.state={clicked:!1},n}return Object(l.a)(e,t),Object(a.a)(e,[{key:"isFavorited",value:function(t){return"undefined"!=typeof localStorage&&localStorage.getItem(t)}},{key:"render",value:function(){var t=this,e="../static/heart.png";return this.isFavorited(this.props.talkId)&&(e="../static/heart-filled.png"),p("button",{onClick:function(){return t.favouriteButtonClick()},id:"favourite-talk-button"},p("img",{src:e}))}}]),e}(d.a.Component);e.default=f},vYYK:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("hfKm"),a=n.n(o);function i(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}},[["8lD5",0,1]]]);