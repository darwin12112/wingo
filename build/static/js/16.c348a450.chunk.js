(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,a,n){"use strict";var t=n(116),r=n(2),c=n.n(r);a.a=Object(t.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},113:function(e,a,n){"use strict";var t=n(44),r=n(18),c=n(4),l=n.n(c),i=n(1),o=n.n(i),u=(n(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),s=function(e){var a,n=e.tag,c=e.className,i=e.type,s=Object(r.a)(e,["tag","className","type"]),m=l()(Object(t.a)({},i,!!i),c);return a=n||(!n&&u[i]?u[i]:"p"),o.a.createElement(a,Object.assign({},s,{className:m}))};s.defaultProps={type:"p"},a.a=s},114:function(e,a,n){"use strict";var t=n(18),r=n(1),c=n.n(r),l=(n(112),n(20)),i=n(113),o=l.a.create("page"),u=function(e){var a=e.title,n=e.breadcrumbs,r=e.tag,l=e.className,u=e.children,s=Object(t.a)(e,["title","breadcrumbs","tag","className","children"]),m=o.b("px-3",l);return c.a.createElement(r,Object.assign({className:m},s),c.a.createElement("div",{className:o.e("header")},a&&"string"===typeof a?c.a.createElement(i.a,{type:"h4",className:o.e("title")},a):a,n&&n),u)};u.defaultProps={tag:"div",title:""},a.a=u},125:function(e,a,n){"use strict";n.d(a,"a",function(){return t}),n.d(a,"b",function(){return r});var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},r=function(){return["primary","secondary","success","info","warning","danger"]}},333:function(e,a,n){var t=n(334);e.exports=function(e,a){return a&&(Array.isArray(a)&&a.length?t.seed_array(a):t.seed(a)),this.number=function(e){"number"===typeof e&&(e={max:e}),"undefined"===typeof(e=e||{}).min&&(e.min=0),"undefined"===typeof e.max&&(e.max=99999),"undefined"===typeof e.precision&&(e.precision=1);var a=e.max;return a>=0&&(a+=e.precision),e.precision*Math.floor(t.rand(a/e.precision,e.min/e.precision))},this.arrayElement=function(a){return(a=a||["a","b","c"])[e.random.number({max:a.length-1})]},this.objectElement=function(a,n){a=a||{foo:"bar",too:"car"};var t=Object.keys(a),r=e.random.arrayElement(t);return"key"===n?r:a[r]},this.uuid=function(){var e=this;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var n=e.number({min:0,max:15});return("x"==a?n:3&n|8).toString(16)})},this.boolean=function(){return!!e.random.number(1)},this.word=function(a){var n=e.random.arrayElement(["commerce.department","commerce.productName","commerce.productAdjective","commerce.productMaterial","commerce.product","commerce.color","company.catchPhraseAdjective","company.catchPhraseDescriptor","company.catchPhraseNoun","company.bsAdjective","company.bsBuzz","company.bsNoun","address.streetSuffix","address.county","address.country","address.state","finance.accountName","finance.transactionType","finance.currencyName","hacker.noun","hacker.verb","hacker.adjective","hacker.ingverb","hacker.abbreviation","name.jobDescriptor","name.jobArea","name.jobType"]);return e.fake("{{"+n+"}}")},this.words=function(a){var n=[];"undefined"===typeof a&&(a=e.random.number({min:1,max:3}));for(var t=0;t<a;t++)n.push(e.random.word());return n.join(" ")},this.image=function(){return e.image.image()},this.locale=function(){return e.random.arrayElement(Object.keys(e.locales))},this.alphaNumeric=function(a){"undefined"===typeof a&&(a=1);for(var n="",t=0;t<a;t++)n+=e.random.arrayElement(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);return n},this}},334:function(e,a){function n(){var e,a,n;e=624,a=397,n=2147483648;var t=new Array(e),r=625;function c(e){return e<0?(e^n)+n:e}function l(e,a){return c(e+a&4294967295)}function i(e,a){for(var n=0,t=0;t<32;++t)e>>>t&1&&(n=l(n,c(a<<t)));return n}this.init_genrand=function(a){for(t[0]=c(4294967295&a),r=1;r<e;r++)t[r]=l(i(1812433253,c(t[r-1]^t[r-1]>>>30)),r),t[r]=c(4294967295&t[r])},this.init_by_array=function(a,n){var r,o,u,s,m;for(this.init_genrand(19650218),r=1,o=0,u=e>n?e:n;u;u--)t[r]=l(l(c(t[r]^i(c(t[r-1]^t[r-1]>>>30),1664525)),a[o]),o),t[r]=c(4294967295&t[r]),o++,++r>=e&&(t[0]=t[623],r=1),o>=n&&(o=0);for(u=623;u;u--)t[r]=(s=c((dbg=t[r])^i(c(t[r-1]^t[r-1]>>>30),1566083941)))<(m=r)?c(4294967296-(m-s)&4294967295):s-m,t[r]=c(4294967295&t[r]),++r>=e&&(t[0]=t[623],r=1);t[0]=2147483648};var o=[0,2567483615];this.genrand_int32=function(){var l;if(r>=e){var i;for(625==r&&this.init_genrand(5489),i=0;i<227;i++)l=c(t[i]&n|2147483647&t[i+1]),t[i]=c(t[i+a]^l>>>1^o[1&l]);for(;i<623;i++)l=c(t[i]&n|2147483647&t[i+1]),t[i]=c(t[i+(a-e)]^l>>>1^o[1&l]);l=c(t[623]&n|2147483647&t[0]),t[623]=c(t[396]^l>>>1^o[1&l]),r=0}return l=c((l=t[r++])^l>>>11),l=c(l^l<<7&2636928640),l=c(l^l<<15&4022730752),l=c(l^l>>>18)},this.genrand_int31=function(){return this.genrand_int32()>>>1},this.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},this.genrand_real2=function(){return this.genrand_int32()*(1/4294967296)},this.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},this.genrand_res53=function(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*(1/9007199254740992)}}a.MersenneTwister19937=n;var t=new n;t.init_genrand((new Date).getTime()%1e9),a.rand=function(e,a){return void 0===e&&(a=0,e=32768),Math.floor(t.genrand_real2()*(e-a)+a)},a.seed=function(e){if("number"!=typeof e)throw new Error("seed(S) must take numeric argument; is "+typeof e);t.init_genrand(e)},a.seed_array=function(e){if("object"!=typeof e)throw new Error("seed_array(A) must take array of numbers; is "+typeof e);t.init_by_array(e)}},360:function(e,a,n){"use strict";n.r(a);var t=n(116),r=n(1),c=n.n(r),l=n(125),i=n(333),o=n.n(i),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return o()().number({min:e,max:a})},s=n(106),m=n(107),d=n(108),f=n(119),h=n(118),b=n(162),p=n(114),y=["January","February","March","April","May","June","July"],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{labels:y,datasets:[Object(t.a)({label:"Dataset 1",backgroundColor:Object(l.a)("primary"),borderColor:Object(l.a)("primary"),borderWidth:1,data:[u(),u(),u(),u(),u(),u(),u()]},e),Object(t.a)({label:"Dataset 2",backgroundColor:Object(l.a)("secondary"),borderColor:Object(l.a)("secondary"),borderWidth:1,data:[u(),u(),u(),u(),u(),u(),u()]},a)]}},E=function(){return{datasets:[{data:[u(),u(),u(),u(),u()],backgroundColor:[Object(l.a)("primary"),Object(l.a)("secondary"),Object(l.a)("success"),Object(l.a)("info"),Object(l.a)("danger")],label:"Dataset 1"}],labels:["Data 1","Data 2","Data 3","Data 4","Data 5"]}};a.default=function(){return c.a.createElement(p.a,{title:"Charts",breadcrumbs:[{name:"Charts",active:!0}]},c.a.createElement(s.a,null,c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Bar"),c.a.createElement(h.a,null,c.a.createElement(b.Bar,{data:g()})))),c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Line"),c.a.createElement(h.a,null,c.a.createElement(b.Line,{data:g({fill:!1},{fill:!1})}))))),c.a.createElement(s.a,null,c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Stacked Line"),c.a.createElement(h.a,null,c.a.createElement(b.Line,{data:g(),options:{scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Month"}}],yAxes:[{stacked:!0,scaleLabel:{display:!0,labelString:"Value"}}]}}})))),c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Combo Bar / Line"),c.a.createElement(h.a,null,c.a.createElement(b.Bar,{data:g({type:"line",fill:!1})}))))),c.a.createElement(s.a,null,c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Pie"),c.a.createElement(h.a,null,c.a.createElement(b.Pie,{data:E()})))),c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Doughnut"),c.a.createElement(h.a,null,c.a.createElement(b.Doughnut,{data:E()}))))),c.a.createElement(s.a,null,c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Polar"),c.a.createElement(h.a,null,c.a.createElement(b.Polar,{data:E()})))),c.a.createElement(m.a,{xl:6,lg:12,md:12},c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Radar"),c.a.createElement(h.a,null,c.a.createElement(b.Radar,{data:g()}))))))}}}]);
//# sourceMappingURL=16.c348a450.chunk.js.map