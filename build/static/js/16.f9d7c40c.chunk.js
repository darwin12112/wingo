(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{111:function(t,e,r){"use strict";var n=r(113),o=r(2),a=r.n(o);Object(n.a)({},a.a,{ID:a.a.oneOfType([a.a.string,a.a.number]).isRequired,component:a.a.oneOfType([a.a.string,a.a.func]),date:a.a.oneOfType([a.a.instanceOf(Date),a.a.string])})},112:function(t,e,r){"use strict";var n=r(40),o=r(17),a=r(4),i=r.n(a),c=r(1),u=r.n(c),s=(r(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),l=function(t){var e,r=t.tag,a=t.className,c=t.type,l=Object(o.a)(t,["tag","className","type"]),f=i()(Object(n.a)({},c,!!c),a);return e=r||(!r&&s[c]?s[c]:"p"),u.a.createElement(e,Object.assign({},l,{className:f}))};l.defaultProps={type:"p"},e.a=l},113:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(40);function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(e){Object(n.a)(t,e,r[e])})}return t}},114:function(t,e,r){"use strict";var n=r(17),o=r(1),a=r.n(o),i=(r(111),r(19)),c=r(112),u=i.a.create("page"),s=function(t){var e=t.title,r=t.breadcrumbs,o=t.tag,i=t.className,s=t.children,l=Object(n.a)(t,["title","breadcrumbs","tag","className","children"]),f=u.b("px-3",i);return a.a.createElement(o,Object.assign({className:f},l),a.a.createElement("div",{className:u.e("header")},e&&"string"===typeof e?a.a.createElement(c.a,{type:"h4",className:u.e("title")},e):e,r&&r),s)};s.defaultProps={tag:"div",title:""},e.a=s},115:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(e,"a",function(){return n})},116:function(t,e,r){t.exports=r(118)},117:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return o})},118:function(t,e,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,a=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(119),o)n.regeneratorRuntime=a;else try{delete n.regeneratorRuntime}catch(i){n.regeneratorRuntime=void 0}},119:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{(l=e.regeneratorRuntime=s?t.exports:{}).wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",m={},d={};d[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==n&&o.call(g,i)&&(d=g);var w=j.prototype=E.prototype=Object.create(d);O.prototype=w.constructor=j,j.constructor=O,j[u]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},L(N.prototype),N.prototype[c]=function(){return this},l.AsyncIterator=N,l.async=function(t,e,r,n){var o=new N(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}}}function b(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return R()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function E(){}function O(){}function j(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){var e;this._invoke=function(r,n){function a(){return new Promise(function(e,a){!function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(s).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,i)})}i(c.arg)}(r,n,e,a)})}return e=e?e.then(a,a):a()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},168:function(t,e,r){"use strict";r.r(e);var n=r(116),o=r.n(n),a=r(117),i=r(115),c=r(114),u=r(1),s=r.n(u),l=r(105),f=r(92),h=r(106),p=r(16),y=r(38),m=r(112),d=r(7),v=r(19).a.create("page");e.default=function(t){var e=Object(u.useState)(""),r=Object(i.a)(e,2),n=r[0],g=r[1],w=Object(u.useState)(!0),b=Object(i.a)(w,2),x=b[0],E=b[1];Object(u.useEffect)(function(){Object(a.a)(o.a.mark(function e(){var r,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/refered/"+(x?0:1),{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(r=e.sent).status&&t.history.push("/login"),e.next=6,r.json();case 6:return n=e.sent,e.next=9,g(n.data);case 9:case"end":return e.stop()}},e)}))()},[]);var O=function(t){return function(){Object(a.a)(o.a.mark(function e(){var r,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/refered/"+(t?0:1),{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.next=8,g(n.data);case 8:case"end":return e.stop()}},e)}))(),E(t)}};return s.a.createElement(c.a,{title:s.a.createElement(y.a,{to:"/promotion"},s.a.createElement(m.a,{type:"h4",className:v.e("title")},s.a.createElement(p.a,null)," Referer")),className:"MyPage"},s.a.createElement(l.a,{style:{flexFlow:"row wrap",justifyContent:"space-between"},className:"category-bar"},s.a.createElement(f.a,{className:!0===x&&"btn-active",color:"link",onClick:O(!0)},"Level 1"),s.a.createElement(f.a,{className:!1===x&&"btn-active",color:"link",onClick:O(!1)},"Level 2")),s.a.createElement(l.a,null,s.a.createElement(h.a,{xl:12,lg:12,md:12},n&&n.map(function(t){return s.a.createElement("div",{style:{padding:"2px 5px",border:"1px solid #aaa",margin:"1px 2px",fontSize:"0.9rem"},className:"form-control"},s.a.createElement("span",{style:{fontSize:"2rem"}},s.a.createElement(d.o,null)),s.a.createElement("span",{style:{fontSize:"1.2rem"}},t))}))))}}}]);
//# sourceMappingURL=16.f9d7c40c.chunk.js.map