(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,a){"use strict";var n=a(113),s=a(2),l=a.n(s);Object(n.a)({},l.a,{ID:l.a.oneOfType([l.a.string,l.a.number]).isRequired,component:l.a.oneOfType([l.a.string,l.a.func]),date:l.a.oneOfType([l.a.instanceOf(Date),l.a.string])})},112:function(e,t,a){"use strict";var n=a(40),s=a(17),l=a(4),r=a.n(l),c=a(1),o=a.n(c),i=(a(111),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var t,a=e.tag,l=e.className,c=e.type,m=Object(s.a)(e,["tag","className","type"]),u=r()(Object(n.a)({},c,!!c),l);return t=a||(!a&&i[c]?i[c]:"p"),o.a.createElement(t,Object.assign({},m,{className:u}))};m.defaultProps={type:"p"},t.a=m},113:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(40);function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){Object(n.a)(e,t,a[t])})}return e}},114:function(e,t,a){"use strict";var n=a(17),s=a(1),l=a.n(s),r=(a(111),a(19)),c=a(112),o=r.a.create("page"),i=function(e){var t=e.title,a=e.breadcrumbs,s=e.tag,r=e.className,i=e.children,m=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),u=o.b("px-3",r);return l.a.createElement(s,Object.assign({className:u},m),l.a.createElement("div",{className:o.e("header")},t&&"string"===typeof t?l.a.createElement(c.a,{type:"h4",className:o.e("title")},t):t,a&&a),i)};i.defaultProps={tag:"div",title:""},t.a=i},125:function(e,t,a){"use strict";var n=a(5),s=a(7),l=a(1),r=a.n(l),c=a(2),o=a.n(c),i=a(4),m=a.n(i),u=a(3),d={tag:u.n,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},E=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,c=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.j)(m()(t,"card-body"),a);return r.a.createElement(c,Object(n.a)({},o,{className:i,ref:l}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},127:function(e,t,a){"use strict";var n=a(5),s=a(7),l=a(1),r=a.n(l),c=a(2),o=a.n(c),i=a(4),m=a.n(i),u=a(3),d={tag:u.n,className:o.a.string,cssModule:o.a.object},E=function(e){var t=e.className,a=e.cssModule,l=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.j)(m()(t,"card-header"),a);return r.a.createElement(l,Object(n.a)({},c,{className:o}))};E.propTypes=d,E.defaultProps={tag:"div"},t.a=E},143:function(e,t,a){"use strict";a.r(t);var n,s=a(9),l=a(10),r=a(12),c=a(11),o=a(13),i=a(25),m=a(1),u=a.n(m),d=a(108),E=a(92),h=a(105),f=a(106),p=a(107),b=a(127),g=a(125),y=a(27),N=a(114),k=a(26),v=a.n(k),C=a(16),P=a(6),x=a(41),j=a(28),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={records:"",bet:"",time:"",redirectToLogin:!1,result:"",level:0,reload:!1,auto:!1},a.onPostResult=function(e){return function(){10==e?e=0:11===e?e=1:12===e&&(e=5),fetch("/api/enjoy-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({guess:a.state.guess,number:e,level:a.state.level})}).then(function(t){t.status<400?t.json().then(function(t){t.error?a.notificationSystem.addNotification({title:u.a.createElement(P.A,null),message:t.error,level:"info"}):a.setter.setState({result:e})}):a.setter.setState({redirectToLogin:!0})})}},a.onTimeDecrease=function(){fetch("/api/enjoy-admin/"+a.state.level,{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}}).then(function(e){e.status<400?e.json().then(function(e){e.time>15e4?a.setter.setState({log_time:e.log_time,bet:e.bet,time:18e4-parseInt(e.time),result:e.number,auto:e.auto}):a.setter.setState({bet:e.bet,time:18e4-parseInt(e.time),log_time:e.log_time,result:e.number,auto:e.auto}),n=setTimeout(a.onTimeDecrease,1e3)}):a.setter.setState({redirectToLogin:!0})})},a.onCategoryClick=function(e){return function(){a.setter.setState({reload:!0}),clearTimeout(n),fetch("/api/enjoy-admin/"+e,{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}}).then(function(t){t.status<400?t.json().then(function(t){t.time>15e4?a.setter.setState({reload:!1,log_time:t.log_time,bet:t.bet,time:18e4-parseInt(t.time),result:t.number,auto:t.auto,level:e}):a.setter.setState({reload:!1,bet:t.bet,time:18e4-parseInt(t.time),log_time:t.log_time,result:t.number,auto:t.auto,level:e}),n=setTimeout(a.onTimeDecrease,1e3)}):a.setter.setState({redirectToLogin:!0})})}},a.onReload=function(){a.setter.setState({reload:!0}),clearTimeout(n),fetch("/api/enjoy-admin/"+a.state.level,{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}}).then(function(e){e.status<400?e.json().then(function(e){a.setter.setState({reload:!1}),e.time>15e4?a.setter.setState({log_time:e.log_time,bet:e.bet,time:18e4-parseInt(e.time),result:e.number,auto:e.auto}):a.setter.setState({bet:e.bet,time:18e4-parseInt(e.time),log_time:e.log_time,result:e.number,auto:e.auto}),n=setTimeout(a.onTimeDecrease,1e3)}):a.setter.setState({redirectToLogin:!0})})},a.setTop=function(e){return function(){fetch("/api/enjoy-admin",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({guess:a.state.guess,number:e,level:a.state.level})}).then(function(t){t.status<400?t.json().then(function(t){t.error?a.notificationSystem.addNotification({title:u.a.createElement(P.A,null),message:t.error,level:"info"}):a.setter.setState({result:e})}):a.setter.setState({redirectToLogin:!0})})}},a.onAutoMax=function(){fetch("/api/enjoy-admin-auto",{method:"POST",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken},body:JSON.stringify({auto:!a.state.auto})}).then(function(e){e.status<400?a.setState({auto:!a.state.auto}):a.setter.setState({redirectToLogin:!0})})},a.setter=Object(x.a)(Object(i.a)(Object(i.a)(a))),a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(n),this.setter.cancel()}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/enjoy-admin/"+this.state.level,{method:"GET",headers:{"content-type":"application/json",Authorization:JSON.parse(localStorage.getItem("auth")).userToken}}).then(function(t){t.status<400?t.json().then(function(t){t.time>15e4?e.setter.setState({log_time:t.log_time,bet:t.bet,time:18e4-parseInt(t.time),result:t.number,auto:t.auto}):e.setter.setState({bet:t.bet,time:18e4-parseInt(t.time),log_time:t.log_time,result:t.number,auto:t.auto}),n=setTimeout(e.onTimeDecrease,1e3)}):e.setter.setState({redirectToLogin:!0})})}},{key:"render",value:function(){var e=this;if(0!==this.state.bet.length&&!1===this.state.reload&&this.state.level<4){if(this.state.redirectToLogin)return u.a.createElement(d.a,{to:"/login"});r=this.state.time<=3e4?"red":"black";for(var t=[0,0,0,0,0,0,0,0,0,0,0,0,0],a=0,n=0,s=0;s<this.state.bet.length;s++)for(var l=0;l<13;l++)t[l]+=parseInt(this.state.bet[s][2][l]);for(s=0;s<10;s++){if(s%5===0){T=Math.floor(7.82*t[s]+3.41*t[12]+.47*t[11-s%2]),x=0;for(l=0;l<13;l++)x+=t[l];x=Math.floor(x-T-t[s]-t[12]-t[11-s%2])}else if(s%2===0){for(T=Math.floor(7.82*t[s]+.96*t[11]),x=0,l=0;l<13;l++)x+=t[l];x=Math.floor(x-T-t[s]-t[11])}else{for(T=Math.floor(7.82*t[s]+.96*t[10]),x=0,l=0;l<13;l++)x+=t[l];x=x-T-t[s]-t[10]}s===parseInt(this.state.result)?(a=T,n=x):void 0===i?(i=x,o=s):i<x&&(i=x,o=s),void 0===m?(m=x,k=s):m>x&&(m=x,k=s)}return u.a.createElement(N.a,{className:"EnjoyPage AdminEnjoy",title:"Admin panel - Enjoy",breadcrumbs:u.a.createElement("div",{style:{width:"100%"}},u.a.createElement(E.a,{color:"primary",onClick:this.onAutoMax,style:{float:"left"}},this.state.auto?"Manual":"Auto"),u.a.createElement(E.a,{color:"link",onClick:this.onReload,style:{float:"right"}},u.a.createElement(C.s,null)))},u.a.createElement(h.a,null,u.a.createElement(f.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(E.a,{className:4===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(4)},"All"),u.a.createElement(E.a,{className:0===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(0)},"Parity"),u.a.createElement(E.a,{className:1===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(1)},"Sapre"),u.a.createElement(E.a,{className:2===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(2)},"Bcone"),u.a.createElement(E.a,{className:3===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(3)},"Emerd"))),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(p.a,{className:"mb-3"},u.a.createElement(b.a,null,"Count Down : ",u.a.createElement("span",{style:{color:r}},parseInt(this.state.time/1e3/60)+" : "+parseInt(this.state.time/1e3%60))),u.a.createElement(g.a,null,u.a.createElement(h.a,null,t.map(function(t,a){return a<10?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},a," ","\xa0\xa0",a%2===1?u.a.createElement("span",{className:"green-circle"}):u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0",a%5===0?u.a.createElement("span",{className:"violet-circle"}):"","\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):10===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"green-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):11===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"violet-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t)})),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:12,sm:12,xs:12},"Current Result:\xa0",this.state.result),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Price Predict:\xa0",a),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Profit Predict:\xa0",n),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Top Profit:\xa0",i),u.a.createElement(f.a,{md:6,sm:6,xs:6,onClick:this.setTop(o),className:"number-line"},"Top Profit Number:\xa0",o),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit:\xa0",m),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit Number:\xa0",k)))))),u.a.createElement(h.a,null,u.a.createElement("div",{style:{height:"60px"}})),u.a.createElement(v.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:j.a}))}if(4===this.state.level&&0!==this.state.bet.length&&!1===this.state.reload){if(console.log(this.state.bet),this.state.redirectToLogin)return u.a.createElement(d.a,{to:"/login"});var r;r=this.state.time<=3e4?"red":"black";t=[];for(var c=0;c<4;c++)t[c]=[0,0,0,0,0,0,0,0,0,0,0,0,0];a=[0,0,0,0],n=[0,0,0,0];for(var o=[],i=[],m=[],k=[],P=0;P<4;P++){for(s=0;s<this.state.bet[P].length;s++)for(l=0;l<13;l++)console.log(this.state.bet[P][s]),t[P][l]+=parseInt(this.state.bet[P][s][2][l]);var x,T;for(s=0;s<10;s++){if(s%5===0){T=Math.floor(7.82*t[P][s]+3.41*t[P][12]+.47*t[P][11-s%2]),x=0;for(l=0;l<13;l++)x+=t[P][l];x=Math.floor(x-T-t[P][s]-t[P][12]-t[P][11-s%2])}else if(s%2===0){for(T=Math.floor(7.82*t[P][s]+.96*t[P][11]),x=0,l=0;l<13;l++)x+=t[P][l];x=Math.floor(x-T-t[P][s]-t[P][11])}else{for(T=Math.floor(7.82*t[P][s]+.96*t[P][10]),x=0,l=0;l<13;l++)x+=t[P][l];x=x-T-t[P][s]-t[P][10]}s===parseInt(this.state.result)?(a[P]=T,n[P]=x):void 0===i[P]?(i[P]=x,o[P]=s):i[P]<x&&(i[P]=x,o[P]=s),void 0===m[P]?(m[P]=x,k[P]=s):m[P]>x&&(m[P]=x,k[P]=s)}}return u.a.createElement(N.a,{className:"EnjoyPage AdminEnjoy",title:"Admin panel - Enjoy",breadcrumbs:u.a.createElement("div",{style:{width:"100%"}},u.a.createElement(E.a,{color:"primary",onClick:this.onAutoMax,style:{float:"left"}},this.state.auto?"Manual":"Auto"),u.a.createElement(E.a,{color:"link",onClick:this.onReload,style:{float:"right"}},u.a.createElement(C.s,null)))},u.a.createElement(h.a,null,u.a.createElement(f.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(E.a,{className:4===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(4)},"All"),u.a.createElement(E.a,{className:0===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(0)},"Parity"),u.a.createElement(E.a,{className:1===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(1)},"Sapre"),u.a.createElement(E.a,{className:2===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(2)},"Bcone"),u.a.createElement(E.a,{className:3===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(3)},"Emerd"))),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(p.a,{className:"mb-3"},u.a.createElement(b.a,null,"Count Down : ",u.a.createElement("span",{style:{color:r}},parseInt(this.state.time/1e3/60)+" : "+parseInt(this.state.time/1e3%60))),u.a.createElement(g.a,null,u.a.createElement(h.a,null,u.a.createElement("h4",null,"Parity"),t[0].map(function(t,a){return a<10?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},a," ","\xa0\xa0",a%2===1?u.a.createElement("span",{className:"green-circle"}):u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0",a%5===0?u.a.createElement("span",{className:"violet-circle"}):"","\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):10===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"green-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):11===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"violet-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t)})),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:12,sm:12,xs:12},"Current Result:\xa0",this.state.result[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Price Predict:\xa0",a[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Profit Predict:\xa0",n[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Top Profit:\xa0",i[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6,className:"number-line"},"Top Profit Number:\xa0",o[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit:\xa0",m[0]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit Number:\xa0",k[0])),u.a.createElement(h.a,null,u.a.createElement("h4",null,"Sapre"),t[1].map(function(t,a){return a<10?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},a," ","\xa0\xa0",a%2===1?u.a.createElement("span",{className:"green-circle"}):u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0",a%5===0?u.a.createElement("span",{className:"violet-circle"}):"","\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):10===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"green-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):11===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"violet-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t)})),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:12,sm:12,xs:12},"Current Result:\xa0",this.state.result[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Price Predict:\xa0",a[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Profit Predict:\xa0",n[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Top Profit:\xa0",i[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6,className:"number-line"},"Top Profit Number:\xa0",o[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit:\xa0",m[1]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit Number:\xa0",k[1])),u.a.createElement(h.a,null,u.a.createElement("h4",null,"Bcone"),t[2].map(function(t,a){return a<10?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},a," ","\xa0\xa0",a%2===1?u.a.createElement("span",{className:"green-circle"}):u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0",a%5===0?u.a.createElement("span",{className:"violet-circle"}):"","\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):10===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"green-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):11===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"violet-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t)})),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:12,sm:12,xs:12},"Current Result:\xa0",this.state.result[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Price Predict:\xa0",a[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Profit Predict:\xa0",n[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Top Profit:\xa0",i[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6,className:"number-line"},"Top Profit Number:\xa0",o[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit:\xa0",m[2]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit Number:\xa0",k[2])),u.a.createElement(h.a,null,u.a.createElement("h4",null,"Emerd"),t[3].map(function(t,a){return a<10?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},a," ","\xa0\xa0",a%2===1?u.a.createElement("span",{className:"green-circle"}):u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0",a%5===0?u.a.createElement("span",{className:"violet-circle"}):"","\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):10===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"green-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):11===a?u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"red-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t):u.a.createElement(f.a,{md:3,sm:6,xs:6,key:a,onClick:e.onPostResult(a),className:"number-line"},u.a.createElement("span",{className:"violet-circle"})," ","\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0"," "," ",t)})),u.a.createElement(h.a,null,u.a.createElement(f.a,{md:12,sm:12,xs:12},"Current Result:\xa0",this.state.result[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Price Predict:\xa0",a[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Profit Predict:\xa0",n[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Top Profit:\xa0",i[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6,className:"number-line"},"Top Profit Number:\xa0",o[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit:\xa0",m[3]),u.a.createElement(f.a,{md:6,sm:6,xs:6},"Lowest Profit Number:\xa0",k[3])))))),u.a.createElement(h.a,null,u.a.createElement("div",{style:{height:"60px"}})),u.a.createElement(v.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:j.a}))}return u.a.createElement(N.a,{className:"EnjoyPage",title:"Admin panel - Enjoy"},u.a.createElement(h.a,null,u.a.createElement(f.a,{md:"12",sm:"12",xs:"12"},u.a.createElement(E.a,{className:4===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(4)},"All"),u.a.createElement(E.a,{className:0===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(0)},"Parity"),u.a.createElement(E.a,{className:1===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(1)},"Sapre"),u.a.createElement(E.a,{className:2===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(2)},"Bcone"),u.a.createElement(E.a,{className:3===this.state.level&&"btn-active",color:"link",onClick:this.onCategoryClick(3)},"Emerd"))),u.a.createElement(h.a,null,u.a.createElement(y.a,null)),u.a.createElement(v.a,{dismissible:!1,ref:function(t){return e.notificationSystem=t},style:j.a}))}}]),t}(u.a.Component);t.default=T}}]);
//# sourceMappingURL=19.6195d7a4.chunk.js.map