(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(e,t,a){"use strict";var r=a(113),n=a(2),c=a.n(n);Object(r.a)({},c.a,{ID:c.a.oneOfType([c.a.string,c.a.number]).isRequired,component:c.a.oneOfType([c.a.string,c.a.func]),date:c.a.oneOfType([c.a.instanceOf(Date),c.a.string])})},112:function(e,t,a){"use strict";var r=a(40),n=a(17),c=a(4),l=a.n(c),s=a(1),i=a.n(s),o=(a(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,c=e.className,s=e.type,u=Object(n.a)(e,["tag","className","type"]),m=l()(Object(r.a)({},s,!!s),c);return t=a||(!a&&o[s]?o[s]:"p"),i.a.createElement(t,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},t.a=u},114:function(e,t,a){"use strict";var r=a(17),n=a(1),c=a.n(n),l=(a(111),a(19)),s=a(112),i=l.a.create("page"),o=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,l=e.className,o=e.children,u=Object(r.a)(e,["title","breadcrumbs","tag","className","children"]),m=i.b("px-3",l);return c.a.createElement(n,Object.assign({className:m},u),c.a.createElement("div",{className:i.e("header")},t&&"string"===typeof t?c.a.createElement(s.a,{type:"h4",className:i.e("title")},t):t,a&&a),o)};o.defaultProps={tag:"div",title:""},t.a=o},149:function(e,t,a){"use strict";a.r(t);var r=a(116),n=a.n(r),c=a(117),l=a(115),s=a(114),i=a(1),o=a.n(i),u=a(105),m=a(106),p=a(136),d=a(175),h=a(96),g=a(92),b=a(16),y=a(38),f=a(112),E=a(19).a.create("page");t.default=function(e){var t=Object(i.useRef)(null),a=Object(i.useState)(JSON.parse(localStorage.getItem("auth")).user.email),r=Object(l.a)(a,2),x=r[0],N=r[1],O=Object(i.useState)(JSON.parse(localStorage.getItem("auth")).user.budget),S=Object(l.a)(O,2),A=S[0],k=S[1],j=Object(i.useState)(""),v=Object(l.a)(j,2),w=v[0],C=v[1];return Object(i.useEffect)(function(){Object(c.a)(n.a.mark(function t(){var a,r,c;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/budget",{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}});case 2:return 401==(a=t.sent).status&&e.history.push("/login"),t.next=6,a.json();case 6:r=t.sent,(c=JSON.parse(localStorage.getItem("auth"))).user.budget=r.budget,localStorage.setItem("auth",JSON.stringify(c)),k(r.budget);case 11:case"end":return t.stop()}},t)}))()},[]),o.a.createElement(s.a,{title:o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{to:"/my"},o.a.createElement(f.a,{type:"h4",className:E.e("title")},o.a.createElement(b.a,null)," Recharge")),o.a.createElement(y.a,{color:"link",to:"/rechargeList",style:{padding:"20px"}},o.a.createElement(b.b,null))),className:"MyPage"},o.a.createElement(u.a,null,o.a.createElement(m.a,{md:12,style:{textAlign:"center"},className:"mt-3"},o.a.createElement("h3",null,"Balance: \u20b9 ",A)),o.a.createElement(m.a,{xl:12,lg:12,md:12},o.a.createElement(p.a,null,o.a.createElement(d.a,{addonType:"prepend"},o.a.createElement("span",{className:"input-group-text"},"\u20b9")),o.a.createElement(h.a,{value:w,type:"number",max:"15000",min:"0",placeholder:"Enter Recharge amount",onChange:function(e){C(e.target.value)}}))),o.a.createElement(m.a,{xl:12,lg:12,md:12},o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(100)}},"\u20b9 100"),o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(1e3)}},"\u20b9 1000"),o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(2e3)}},"\u20b9 2000"),o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(5e3)}},"\u20b9 5000"),o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(1e4)}},"\u20b9 10000"),o.a.createElement(g.a,{color:"primary",className:"ml-3 mr-3 mt-2",style:{width:"80px",padding:"4px 4px"},onClick:function(){return C(15e3)}},"\u20b9 15000")),o.a.createElement(m.a,{xl:12,lg:12,md:12},o.a.createElement(p.a,null,o.a.createElement(d.a,{addonType:"prepend"},o.a.createElement("span",{className:"input-group-text"},"Email")),o.a.createElement(h.a,{value:x,type:"email",placeholder:"Enter your email",onChange:function(e){N(e.target.value)}}))),o.a.createElement(m.a,{md:12,style:{textAlign:"center"},className:"mt-3"},o.a.createElement(g.a,{onClick:function(){Object(c.a)(n.a.mark(function e(){var a,r,c,l,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=w&&""!=x){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/recharge",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({amount:w,email:x})});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,200==a.status?((c=JSON.parse(localStorage.getItem("auth"))).user.email=r.email,localStorage.setItem("auth",JSON.stringify(c)),(l=document.createElement("form")).setAttribute("method","post"),l.setAttribute("action",r.url),(s=document.createElement("script")).setAttribute("src","https://checkout.razorpay.com/v1/checkout.js"),s.setAttribute("data-key",r.key),s.setAttribute("data-amount",r.order.amount),s.setAttribute("data-currency",r.order.currency),s.setAttribute("data-order_id",r.order.id),s.setAttribute("data-name","Shoptraders.in"),s.setAttribute("data-description","Transaction"),s.setAttribute("data-image",""),s.setAttribute("data-prefill.name",JSON.parse(localStorage.getItem("auth")).user.nickname),s.setAttribute("data-prefill.email",r.email),s.setAttribute("data-prefill.contact",JSON.parse(localStorage.getItem("auth")).user.phone),s.setAttribute("data-theme.color","#F37254"),l.appendChild(s),(s=document.createElement("input")).setAttribute("type","hidden"),s.setAttribute("custom","Hidden Element"),s.setAttribute("name","hidden"),l.appendChild(s),console.log(t),t.current.hasChildNodes()&&t.current.removeChild(t.current.firstChild),t.current.appendChild(l)):alert(r.error);case 9:case"end":return e.stop()}},e)}))()},color:"success"}," Add to Wallet ")),o.a.createElement("div",{className:"mt-3 col-md-12",ref:t,style:{textAlign:"center"}})))}}}]);
//# sourceMappingURL=39.2a1069aa.chunk.js.map