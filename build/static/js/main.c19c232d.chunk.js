(this["webpackJsonpsee-temp"]=this["webpackJsonpsee-temp"]||[]).push([[0],{46:function(e,t,n){e.exports=n(90)},51:function(e,t,n){},52:function(e,t,n){},83:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(39),l=n.n(c),i=(n(51),n(11)),m=n(104),o=(n(52),n(40)),u=n.n(o),s=n(106),p=n(105),f=function(e){var t=r.a.createElement("h2",{style:{textAlign:"center"}},"NO SIGNAL"),n="#000000",a="undefined"!==typeof e.temp,c="";if(a){var l=e.temp.temp;c=e.temp.sensorID,l&&l<=37.5?(n="#41c847",t=r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"h5",style:{fontWeight:700,textAlign:"center"}},"No fever detected"),r.a.createElement(s.a,{variant:"h6",style:{fontWeight:700,textAlign:"center"}},l," \xb0C"))):l&&l>=37.5?(n="#e41414",t=r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"h5",style:{fontWeight:700,textAlign:"center"}},"Fever detected, Careful !!!"),r.a.createElement(s.a,{variant:"h6",style:{fontWeight:700,textAlign:"center"}},l," \xb0C"))):"undefined"!==typeof e.temp&&(n="#9c9696",t=r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"h6",style:{fontWeight:700,textAlign:"center"}},"Waiting for temperature reading...")))}return r.a.createElement(m.a,{item:!0,xs:6,style:{textAlign:"start",padding:6,height:"46.5vh"}},r.a.createElement(p.a,{style:{height:"100%",backgroundColor:n,color:"white"}},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{variant:"h4",style:{textAlign:"start",padding:15}},"Thermometer ",c)),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),t))},g=u()("http://localhost:8001");var E=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(),o=Object(i.a)(l,2),u=o[0],s=o[1],p=Object(a.useState)(),E=Object(i.a)(p,2),h=E[0],d=E[1],b=Object(a.useState)(),v=Object(i.a)(b,2),y=v[0],x=v[1];return Object(a.useEffect)((function(){g.on("temp",(function(e){return c(e)})),g.on("temp2",(function(e){return s(e)})),g.on("temp3",(function(e){return d(e)})),g.on("temp4",(function(e){return x(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{container:!0,direction:"row",style:{padding:10}},r.a.createElement(f,{temp:n}),r.a.createElement(f,{temp:u}),r.a.createElement(f,{temp:h}),r.a.createElement(f,{temp:y})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c19c232d.chunk.js.map