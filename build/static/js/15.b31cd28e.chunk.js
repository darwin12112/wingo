(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{111:function(t,e,r){"use strict";var n=r(113),a=r(2),o=r.n(a);Object(n.a)({},o.a,{ID:o.a.oneOfType([o.a.string,o.a.number]).isRequired,component:o.a.oneOfType([o.a.string,o.a.func]),date:o.a.oneOfType([o.a.instanceOf(Date),o.a.string])})},112:function(t,e,r){"use strict";var n=r(40),a=r(17),o=r(4),i=r.n(o),c=r(1),l=r.n(c),s=(r(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(t){var e,r=t.tag,o=t.className,c=t.type,u=Object(a.a)(t,["tag","className","type"]),f=i()(Object(n.a)({},c,!!c),o);return e=r||(!r&&s[c]?s[c]:"p"),l.a.createElement(e,Object.assign({},u,{className:f}))};u.defaultProps={type:"p"},e.a=u},113:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(40);function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){Object(n.a)(t,e,r[e])})}return t}},114:function(t,e,r){"use strict";var n=r(17),a=r(1),o=r.n(a),i=(r(111),r(19)),c=r(112),l=i.a.create("page"),s=function(t){var e=t.title,r=t.breadcrumbs,a=t.tag,i=t.className,s=t.children,u=Object(n.a)(t,["title","breadcrumbs","tag","className","children"]),f=l.b("px-3",i);return o.a.createElement(a,Object.assign({className:f},u),o.a.createElement("div",{className:l.e("header")},e&&"string"===typeof e?o.a.createElement(c.a,{type:"h4",className:l.e("title")},e):e,r&&r),s)};s.defaultProps={tag:"div",title:""},e.a=s},115:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(e,"a",function(){return n})},116:function(t,e,r){t.exports=r(118)},117:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise(function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,l,"next",t)}function l(t){n(i,a,o,c,l,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return a})},118:function(t,e,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(119),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(i){n.regeneratorRuntime=void 0}},119:function(t,e){!function(e){"use strict";var r,n=Object.prototype,a=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",s="object"===typeof t,u=e.regeneratorRuntime;if(u)s&&(t.exports=u);else{(u=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",y={},d={};d[i]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==n&&a.call(g,i)&&(d=g);var b=j.prototype=x.prototype=Object.create(d);O.prototype=b.constructor=j,j.constructor=O,j[l]=O.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},L(N.prototype),N.prototype[c]=function(){return this},u.AsyncIterator=N,u.async=function(t,e,r,n){var a=new N(w(t,e,r,n));return u.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(b),b[l]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return c.type="throw",c.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,e,r,n){var a=e&&e.prototype instanceof x?e:x,o=Object.create(a.prototype),i=new _(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw o;return R()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=E(t,e,r);if("normal"===l.type){if(n=r.done?m:h,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function E(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function O(){}function j(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function N(t){var e;this._invoke=function(r,n){function o(){return new Promise(function(e,o){!function e(r,n,o,i){var c=E(t[r],t,n);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"===typeof s&&a.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,o,i)},function(t){e("throw",t,o,i)}):Promise.resolve(s).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,i)})}i(c.arg)}(r,n,e,o)})}return e=e?e.then(o,o):o()}}function k(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=E(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(a.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},167:function(t,e,r){"use strict";r.r(e);var n=r(116),a=r.n(n),o=r(117),i=r(115),c=r(114),l=r(1),s=r.n(l),u=r(105),f=r(92),h=r(106),p=r(16),m=r(38),y=r(112),d=r(19).a.create("page");e.default=function(t){var e=Object(l.useState)(""),r=Object(i.a)(e,2),n=r[0],v=r[1],g=Object(l.useState)(!0),b=Object(i.a)(g,2),w=b[0],E=b[1];return Object(l.useEffect)(function(){Object(o.a)(a.a.mark(function e(){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/bonus/100",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(r=e.sent).status&&t.history.push("/login"),e.next=6,r.json();case 6:return n=e.sent,e.next=9,v(n);case 9:case"end":return e.stop()}},e)}))()},[]),s.a.createElement(c.a,{title:s.a.createElement(m.a,{to:"/promotion"},s.a.createElement(y.a,{type:"h4",className:d.e("title")},s.a.createElement(p.a,null)," Promotion List")),className:"MyPage"},s.a.createElement(u.a,{style:{flexFlow:"row wrap",justifyContent:"space-between"},className:"category-bar"},s.a.createElement(f.a,{className:!0===w&&"btn-active",color:"link",onClick:function(){return E(!0)}},"Level 1"),s.a.createElement(f.a,{className:!1===w&&"btn-active",color:"link",onClick:function(){return E(!1)}},"Level 2")),s.a.createElement(u.a,null,s.a.createElement(h.a,{xl:12,lg:12,md:12},n&&w?n.bonus1.map(function(t,e){return s.a.createElement("div",{key:e,style:{padding:"2px 5px",border:"1px solid #aaa",margin:"1px 2px",fontSize:"0.9rem"},className:"form-control"},s.a.createElement("span",{style:{float:"left",fontSize:"2rem"}},t.applied?s.a.createElement(p.n,{style:{color:"green"}}):s.a.createElement(p.o,{style:{color:"red"}})),s.a.createElement("span",{className:"ml-2 mt-2",style:{fontSize:"1.1rem",fontWeight:"400"}},"\u20b9 ",t.money," "," ",t.applied?"Applied":"Not applied"),s.a.createElement("br",null),s.a.createElement("span",{className:"ml-2"}," ",t.createdAt," "))}):n&&!w?n.bonus2.map(function(t,e){return s.a.createElement("div",{key:e,style:{padding:"2px 5px",border:"1px solid #aaa",margin:"1px 2px",fontSize:"0.9rem"},className:"form-control"},s.a.createElement("span",{style:{float:"left",fontSize:"2rem"}},t.applied?s.a.createElement(p.n,{style:{color:"green"}}):s.a.createElement(p.o,{style:{color:"red"}})),s.a.createElement("span",{className:"ml-2 mt-2",style:{fontSize:"1.1rem",fontWeight:"400"}},"\u20b9 ",t.money," "," "," ",t.applied?"Applied":"Not applied"),s.a.createElement("br",null),s.a.createElement("span",{className:"ml-2"},t.createdAt))}):"")))}}}]);
//# sourceMappingURL=15.b31cd28e.chunk.js.map