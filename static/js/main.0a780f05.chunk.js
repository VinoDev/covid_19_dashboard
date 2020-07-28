(this.webpackJsonpcovid_19_dashboard=this.webpackJsonpcovid_19_dashboard||[]).push([[0],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(60),o=a.n(c),s=(a(80),a(6)),i=a.n(s),u=a(9),l=a(61),d=a(62),f=a(73),p=a(72),m="https://covid19.mathdro.id/api",h=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t?"".concat(m,"/countries/").concat(t):m,e.prev=1,e.next=4,fetch(a).then((function(e){return e.json()}));case 4:return n=e.sent,console.log(n),r={confirmed:n.confirmed.value,deaths:n.deaths.value,recovered:n.recovered.value,lastUpdate:n.lastUpdate},e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/daily")).then((function(e){return e.json()}));case 3:return t=e.sent,a=t.map((function(e){var t=e.totalConfirmed,a=e.deaths,n=e.reportDate;return{totalConfirmed:t,deaths:a.total,reportDate:n}})),e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/countries")).then((function(e){return e.json()}));case 3:return t=e.sent,a=t.countries.map((function(e){return e.name})),e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),y=a(63),E=a.n(y),x=a(64),_=a.n(x),g=a(205),k=a(199),w=a(200),j=a(201),S=function(e){var t=e.cardInfo.Data;return r.a.createElement(g.a,{className:E.a[e.cardInfo.Title]},r.a.createElement(k.a,null,r.a.createElement(w.a,{color:"textSecondary",gutterBottom:!0},e.cardInfo.Title),t?r.a.createElement("div",null,r.a.createElement(w.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:t,duration:2,separator:","})),r.a.createElement(w.a,{color:"textSecondary"},new Date(e.cardInfo.lastUpdate).toDateString())):r.a.createElement(j.a,null)))},C=a(29),O=a(40),I=a(41),D=a.n(I),U=function(e){var t=e.data,a=t.data,c=a.confirmed,o=a.deaths,s=a.recovered,l=t.country,d=Object(n.useState)([]),f=Object(C.a)(d,2),p=f[0],m=f[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=c?r.a.createElement(O.a,{data:{labels:["Infected","Deaths","Recovered"],datasets:[{label:"People",backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(0, 0, 0, 0.5)","rgba(0, 255, 0, 0.5)"],data:[c,o,s]}]},options:{maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:.7}],yAxes:[{ticks:{beginAtZero:!1,callback:function(e,t,a){return e.toLocaleString()}}}]},tooltips:{callbacks:{label:function(e,t){return t.labels[e.index]+": "+t.datasets[0].data[e.index].toLocaleString()}}},legend:{display:!1}}}):null,b=p[0]?r.a.createElement(O.b,{data:{labels:p.map((function(e){return e.reportDate})),datasets:[{data:p.map((function(e){return e.totalConfirmed})),label:"Infected",borderColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:p.map((function(e){return e.deaths})),label:"deaths",borderColor:"rgba(0, 0, 0, 0.5)",fill:!0}]},options:{maintainAspectRatio:!1,scales:{yAxes:[{ticks:{callback:function(e,t,a){return e.toLocaleString()}}}]},tooltips:{callbacks:{label:function(e,t){return t.datasets[e.datasetIndex].label+": "+t.datasets[0].data[e.index].toLocaleString()}}}}}):null;return r.a.createElement("div",{className:D.a.container},r.a.createElement("div",{className:D.a.chart},l?h:b))},A=a(42),N=a.n(A),P=a(204),R=a(203),T=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:N.a.container},r.a.createElement(P.a,{className:N.a.formControl},r.a.createElement(R.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},W=a(70),L=a.n(W),B=a(202),J=function(e){var t=e.data,a={Title:"Infected",Data:t.confirmed,lastUpdate:t.lastUpdate},n={Title:"Deaths",Data:t.deaths,lastUpdate:t.lastUpdate},c={Title:"Recovered",Data:t.recovered,lastUpdate:t.lastUpdate};return r.a.createElement("div",{className:L.a.infoSection},r.a.createElement(B.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(B.a,{item:!0,xs:10,md:3},r.a.createElement(S,{cardInfo:a})),r.a.createElement(B.a,{item:!0,xs:10,md:3},r.a.createElement(S,{cardInfo:n})),r.a.createElement(B.a,{item:!0,xs:10,md:3},r.a.createElement(S,{cardInfo:c}))))},Q=a(71),q=a.n(Q),G=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:q.a.container},r.a.createElement(J,{data:this.state.data}),r.a.createElement(T,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:this.state}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e,t,a){e.exports={container:"chart_container__157Qq",chart:"chart_chart__30RrH"}},42:function(e,t,a){e.exports={container:"countryPicker_container__2v3bg",formControl:"countryPicker_formControl__3k5PW"}},63:function(e,t,a){e.exports={cardStyled:"cardStyled_cardStyled__1EgIQ",Infected:"cardStyled_Infected__6UoeW",Deaths:"cardStyled_Deaths__JiKPY",Recovered:"cardStyled_Recovered__278EW"}},70:function(e,t,a){e.exports={infoSection:"infoSection_infoSection__2CcPA"}},71:function(e,t,a){e.exports={container:"App_container__3UkUx"}},75:function(e,t,a){e.exports=a(181)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.0a780f05.chunk.js.map