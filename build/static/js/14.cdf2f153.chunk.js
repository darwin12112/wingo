(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{112:function(e,t,a){"use strict";var l=a(116),n=a(2),r=a.n(n);t.a=Object(l.a)({},r.a,{ID:r.a.oneOfType([r.a.string,r.a.number]).isRequired,component:r.a.oneOfType([r.a.string,r.a.func]),date:r.a.oneOfType([r.a.instanceOf(Date),r.a.string])})},113:function(e,t,a){"use strict";var l=a(43),n=a(18),r=a(4),c=a.n(r),m=a(1),o=a.n(m),u=(a(112),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),s=function(e){var t,a=e.tag,r=e.className,m=e.type,s=Object(n.a)(e,["tag","className","type"]),E=c()(Object(l.a)({},m,!!m),r);return t=a||(!a&&u[m]?u[m]:"p"),o.a.createElement(t,Object.assign({},s,{className:E}))};s.defaultProps={type:"p"},t.a=s},114:function(e,t,a){"use strict";var l=a(18),n=a(1),r=a.n(n),c=(a(112),a(20)),m=a(113),o=c.a.create("page"),u=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,c=e.className,u=e.children,s=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),E=o.b("px-3",c);return r.a.createElement(n,Object.assign({className:E},s),r.a.createElement("div",{className:o.e("header")},t&&"string"===typeof t?r.a.createElement(m.a,{type:"h4",className:o.e("title")},t):t,a&&a),u)};u.defaultProps={tag:"div",title:""},t.a=u},116:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var l=a(43);function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){Object(l.a)(e,t,a[t])})}return e}},118:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={tag:E.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},i=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,m=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(E.j)(s()(t,"card-body"),a);return c.a.createElement(m,Object(l.a)({},o,{className:u,ref:r}))};i.propTypes=d,i.defaultProps={tag:"div"},t.a=i},119:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={tag:E.n,className:o.a.string,cssModule:o.a.object},i=function(e){var t=e.className,a=e.cssModule,r=e.tag,m=Object(n.a)(e,["className","cssModule","tag"]),o=Object(E.j)(s()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},m,{className:o}))};i.propTypes=d,i.defaultProps={tag:"div"},t.a=i},180:function(e,t,a){"use strict";var l=a(5),n=a(6),r=a(1),c=a.n(r),m=a(2),o=a.n(m),u=a(4),s=a.n(u),E=a(3),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,inverse:Object(E.f)(o.a.bool,'Please use the prop "dark"'),dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:E.n,responsiveTag:E.n,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},i=function(e){var t=e.className,a=e.cssModule,r=e.size,m=e.bordered,o=e.borderless,u=e.striped,d=e.inverse,i=e.dark,h=e.hover,p=e.responsive,b=e.tag,C=e.responsiveTag,f=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(E.j)(s()(t,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!o&&"table-borderless",!!u&&"table-striped",!(!i&&!d)&&"table-dark",!!h&&"table-hover"),a),y=c.a.createElement(b,Object(l.a)({},g,{ref:f,className:N}));if(p){var w=!0===p?"table-responsive":"table-responsive-"+p;return c.a.createElement(C,{className:w},y)}return y};i.propTypes=d,i.defaultProps={tag:"table",responsiveTag:"div"},t.a=i},356:function(e,t,a){"use strict";a.r(t);var l=a(43),n=a(114),r=a(1),c=a.n(r),m=a(106),o=a(107),u=a(108),s=a(119),E=a(118),d=a(180),i=["","bordered","striped","hover"];t.default=function(){return c.a.createElement(n.a,{title:"Tables",breadcrumbs:[{name:"tables",active:!0}],className:"TablePage"},i.map(function(e,t){return c.a.createElement(m.a,{key:t},c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,e||"default"),c.a.createElement(E.a,null,c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{body:!0},c.a.createElement(d.a,Object(l.a)({},e||"default",!0),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{body:!0},c.a.createElement(d.a,{dark:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))))))}),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Contextual"),c.a.createElement(E.a,null,c.a.createElement(d.a,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Type"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"))),c.a.createElement("tbody",null,c.a.createElement("tr",{className:"table-active"},c.a.createElement("th",{scope:"row"},"Active"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Default"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-primary"},c.a.createElement("th",{scope:"row"},"Primary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-secondary"},c.a.createElement("th",{scope:"row"},"Secondary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-success"},c.a.createElement("th",{scope:"row"},"Success"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-danger"},c.a.createElement("th",{scope:"row"},"Danger"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-warning"},c.a.createElement("th",{scope:"row"},"Warning"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-info"},c.a.createElement("th",{scope:"row"},"Info"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-light"},c.a.createElement("th",{scope:"row"},"Light"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-dark"},c.a.createElement("th",{scope:"row"},"Dark"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"))))))),c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Contextual"),c.a.createElement(E.a,null,c.a.createElement(d.a,{dark:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Type"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"),c.a.createElement("th",{scope:"col"},"Column heading"))),c.a.createElement("tbody",null,c.a.createElement("tr",{className:"table-active"},c.a.createElement("th",{scope:"row"},"Active"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"Default"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-primary"},c.a.createElement("th",{scope:"row"},"Primary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-secondary"},c.a.createElement("th",{scope:"row"},"Secondary"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-success"},c.a.createElement("th",{scope:"row"},"Success"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-danger"},c.a.createElement("th",{scope:"row"},"Danger"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-warning"},c.a.createElement("th",{scope:"row"},"Warning"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-info"},c.a.createElement("th",{scope:"row"},"Info"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-light"},c.a.createElement("th",{scope:"row"},"Light"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")),c.a.createElement("tr",{className:"table-dark"},c.a.createElement("th",{scope:"row"},"Dark"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content"),c.a.createElement("td",null,"Column content")))))))),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Responsive"),c.a.createElement(E.a,null,c.a.createElement(d.a,{responsive:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))),c.a.createElement(m.a,null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"mb-3"},c.a.createElement(s.a,null,"Size"),c.a.createElement(E.a,null,c.a.createElement(d.a,{size:"sm"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#"),c.a.createElement("th",null,"First Name"),c.a.createElement("th",null,"Last Name"),c.a.createElement("th",null,"Username"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"1"),c.a.createElement("td",null,"Mark"),c.a.createElement("td",null,"Otto"),c.a.createElement("td",null,"@mdo")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"2"),c.a.createElement("td",null,"Jacob"),c.a.createElement("td",null,"Thornton"),c.a.createElement("td",null,"@fat")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},"3"),c.a.createElement("td",null,"Larry"),c.a.createElement("td",null,"the Bird"),c.a.createElement("td",null,"@twitter")))))))))}}}]);
//# sourceMappingURL=14.cdf2f153.chunk.js.map