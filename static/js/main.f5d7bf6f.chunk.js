(this.webpackJsonpanahita=this.webpackJsonpanahita||[]).push([[0],{42:function(t,e,a){t.exports=a(61)},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},56:function(t,e,a){},60:function(t,e,a){},61:function(t,e,a){"use strict";a.r(e);var n={};a.r(n),a.d(n,"TADDNUM001",(function(){return x})),a.d(n,"TOPPMULT0",(function(){return C}));var r=a(0),s=a.n(r),i=a(18),c=a.n(i),l=(a(47),a(7)),o=a(8),u=a(10),m=a(9),h=(a(48),a(63)),d=a(67),p=a(68),f=a(40),E=(a(49),function(){return s.a.createElement(h.a,null,s.a.createElement(d.a,{expand:"lg",className:"navbar"},s.a.createElement(d.a.Brand,{href:"/"},"Anahita"),s.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(d.a.Collapse,null,s.a.createElement(p.a,{className:"mr-auto"},s.a.createElement(f.a,{href:"/tests"},"TESTS"),s.a.createElement(f.a,{href:"/results"},"RESULTS"),s.a.createElement(f.a,{href:"/login"},"LOGIN"),s.a.createElement(f.a,{href:"/settings"},"SETTINGS"))),s.a.createElement(d.a.Brand,null,"Georgiana"," ",s.a.createElement("img",{src:"avatar.png",width:"50",alt:"",className:"img"}))))}),b=(a(55),a(23)),v=a(5),O=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement("div",null,"Login"),s.a.createElement("div",null,"Test"))}}]),a}(r.Component),g=(a(56),function(t){return s.a.createElement("div",null,s.a.createElement(b.b,{to:t.path,className:"justify-content-md-center btn btn-primary"},t.title))}),w=a(64),j=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={testcategory:[{id:"ADDNUM001",title:"Adunari",path:"/test/ADDNUM001"},{id:"OPNUM002",title:"Scaderi",path:"/test/OPNUM002"},{id:"OPNUM001",title:"Inmultiri",path:"/test/OPNUM003"},{id:"OPPMULT0",title:"Operatii cu multimi",path:"/test/OPPMULT0"}]},t}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(w.a,{vertical:!0,className:"mb-3"},this.state.testcategory.map((function(t,e){return s.a.createElement(g,{key:e,title:t.title,path:t.path})}))))}}]),a}(s.a.Component),y=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(j,null))}}]),a}(r.Component),k=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,"Results")}}]),a}(r.Component),S=a(30),N=a(20),T=a(65),A=function(t){return s.a.createElement(T.a,{style:t.st},s.a.createElement("div",null,t.title))},M=a(66),P=(a(60),function(t){return s.a.createElement(M.a,{className:'btn btn-primary btn-block"',onClick:function(){return t.onClick(t.noBtn)},id:t.noBtn},t.title)}),U=a(41),x=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={questions:[[2,"+",3,5,4,3],[7,"-",5,2,3,1],[8,"-",2,6,7,4],[9,"+",3,6,12,10],[5,"-",2,7,3,2]],answers:[],stadiu:0,now:0,progressbar:!0},n.handleAnswer=n.handleAnswer.bind(Object(N.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.state.stadiu<4?(this.interval=setInterval((function(){t.setState({now:t.state.now+1})}),100),this.interval=setInterval((function(){t.setState({stadiu:t.state.stadiu+1,now:0}),t.state.stadiu>4&&t.setState({progressbar:!1})}),11e3)):this.setState({progressbar:!1}),console.log("stadiu: "+this.state.stadiu)}},{key:"handleAnswer",value:function(t,e){var a=this;this.setState({now:0}),this.state.stadiu<4?(this.setState({stadiu:this.state.stadiu+1}),this.setState({answers:[].concat(Object(S.a)(this.state.answers),[e])},(function(){console.log(a.state.answers)})),console.log(this.state.answers)):(this.setState({answers:[].concat(Object(S.a)(this.state.answers),[e])},(function(){console.log(a.state.answers)})),this.setState({progressbar:!1}))}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement(h.a,null,this.state.progressbar?s.a.createElement(U.a,{animated:!0,variant:"danger",now:this.state.now,style:{margin:"10px",textAlign:"center"}}):""),this.state.answers.length<5?s.a.createElement(w.a,{vertical:!0},this.state.questions[this.state.stadiu]?s.a.createElement(A,{st:{background:"black",color:"white",width:"400px",marginBottom:"0px",fontSize:"1.2rem"},title:this.state.questions[this.state.stadiu].map((function(t,e){return e<3?t:""}))}):"",this.state.questions[this.state.stadiu]?this.state.questions[this.state.stadiu].map((function(e,a){return a>2?s.a.createElement(P,{key:a,title:e,noBtn:a-2,anwsernumber:a,onClick:function(a){return t.handleAnswer(a,e)}}):""})):""):s.a.createElement("div",null," ",this.state.answers))}}]),a}(r.Component),C=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"TOPPMULT0"),s.a.createElement(w.a,{vertical:!0},s.a.createElement(A,{st:{background:"black",color:"white",width:"400px",marginBottom:"0px",fontSize:"1.2rem"}}),s.a.createElement(P,null),s.a.createElement(P,null),s.a.createElement(P,null)))}}]),a}(s.a.Component),B=function(t){console.log(t);var e=t.match.params.id;return s.a.createElement("div",null,function(t){var e="T"+t,a=n[e];return console.log(e),s.a.createElement(a,null)}(e))},D=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(E,null)),s.a.createElement(b.a,null,s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",component:O}),s.a.createElement(v.a,{exact:!0,path:"/tests",component:y}),s.a.createElement(v.a,{path:"/test/:id",component:B}),s.a.createElement(v.a,{exact:!0,path:"/results",component:k}))))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.f5d7bf6f.chunk.js.map