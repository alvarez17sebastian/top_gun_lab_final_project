(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){},50:function(e,t,n){e.exports=n(77)},55:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),o=n.n(c),i=(n(55),n(5)),l=n(6),u=n(8),s=n(7),m=n(9),p=n(18),f=n(14),d=n.n(f),h=n(20),b="https://team-int-rewards.herokuapp.com/api/v1",E="/prizes",g=n(11),v=n(12);function x(){var e=Object(g.a)(["\npadding: 0 1rem;\nfont-size: 16px;\nfont-weight: 400;\n"]);return x=function(){return e},e}function j(){var e=Object(g.a)(["\n    background-color: #253746;\n    text-decoration: none;\n    color: #fff;\n    padding: 0.5px;\n"]);return j=function(){return e},e}function y(){var e=Object(g.a)(["\n    width: 200px;\n    height: 200px;  \n    vertical-align: middle;\n    display: inline-block;\n    \n"]);return y=function(){return e},e}function O(){var e=Object(g.a)(["\n\nwidth: 300px;\nborder-radius: 9px;\nheight: 300px;\nbox-shadow:  0 1px 5px rgba(0, 0, 0, 100);\ndisplay: inline-block;\nmargin:15px;\ntext-align: center;\ntransition: all 0.25s;\n\n"]);return O=function(){return e},e}var k=v.a.figure(O()),w=v.a.img(y()),S=v.a.figcaption(j()),z=v.a.h1(x()),C=function(e){var t=e.imgSrc,n=e.name,a=e.points;return r.a.createElement(k,null,r.a.createElement(w,{src:t,alt:""}),r.a.createElement(S,null,"Name: ",n),r.a.createElement(z,null,"Total points: ",a))};function T(){var e=Object(g.a)(["\n\nwidth: 200px;\nheight: 50px;\nmaxweight:200px;\nbackground: #2b303b;\nborder: none;\nfont-size: 10pt;\nvertical-align: middle;\nwhite-space: nowrap;\nposition: absolute;\ncolor: #63717f;\npadding-left: 5px;\n-webkit-border-radius: 5px;\n-moz-border-radius: 5px;\nborder-radius: 5px;\nmargin-left: 0px;\n  margin-top: 17px;\n"]);return T=function(){return e},e}var N=v.a.input(T()),I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getEmployees=function(){d.a.get("".concat(b,"/employees")).then(function(e){console.log(e.data),n.setState({Employees:{content:e.data,error:""},createEmployeeError:!1})}).catch(function(e){n.setState({Employees:{error:e.message}})})},n.handleTextChange=function(e,t){var a=e.target.value;n.setState(Object(p.a)({},t,a))},n.orderArray=function(e){return e.sort(function(e,t){return e.points<t.points?1:e.points>t.points?-1:0})},n.state={Employees:{content:[],error:!1},filterText:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){var e=this,t=this.state,n=t.Employees,a=n.content,c=n.error,o=t.filterText;if(c)return r.a.createElement("div",null,"Fetch Error: ",c);var i=this.orderArray(a).filter(function(e){return e.name.includes(o)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(N,{onChange:function(t){return e.handleTextChange(t,"filterText")},placeholder:"Filter by name",type:"text",value:o})),r.a.createElement("div",{className:"desplazar"},i.map(function(e){var t=e.id,n=e.name,a=e.imgSrc,c=e.points;return r.a.createElement(h.b,{key:t,to:"/employees/".concat(t)},r.a.createElement(C,{imgSrc:a,name:n,points:c}))})))}}]),t}(a.Component);function A(){var e=Object(g.a)(["\n background-color: #63717f;\n color: #fff;\n overflow: auto;\n \n \n"]);return A=function(){return e},e}function F(){var e=Object(g.a)(["\ntext-align: center;\n\n "]);return F=function(){return e},e}var P=v.a.div(F()),D=v.a.header(A()),L=n(45);function M(){var e=Object(g.a)(["\n    color: #fff;\n    padding: 5px;\n    background-color: #2b303b;\n    margin-top:0px;\n"]);return M=function(){return e},e}function B(){var e=Object(g.a)(["\n    margin: 5px;\n    border-radius: 5px;\n    border: 1px solid ##fcfff7;\n    font-size: 16px;\n    padding: 5px 5px 5px 10px;\n"]);return B=function(){return e},e}function J(){var e=Object(g.a)(["\n  \n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    grid-template-rows: repeat(4, auto);\n    \n  \n    button {\n        cursor: pointer;\n        background: transparent;\n        background:#b5b8b0;\n        border: 1px solid #fcfff7;\n        align:center;\n        font-size: 16px;\n        color: #white;\n        border-radius: 5px;\n        transition: background 0.37s ease-in-out;\n        margin: 5px;\n\n        :hover {\n            background: #fcfff7;\n            transition: background 0.37s ease-in-out;\n        }\n    }\n"]);return J=function(){return e},e}var W=v.a.form(J()),q=v.a.input(B()),$=v.a.div(M()),_=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).createEmployee=function(e){e.preventDefault();var t=n.state.newEmployeesForm,a=t.name,r=t.points,c=t.job,o=t.area,i=t.imgSrc;d.a.post("".concat(b,"/employees"),{name:a,points:r,job:c,area:o,imgSrc:i},{headers:{"Content-Type":"application/json"}}).then(function(){n.getEmployees()}).catch(function(){n.setState({createEmployeeError:!0})})},n.createTextInput=function(e,t){return r.a.createElement(q,{required:!0,type:"text",placeholder:t,onChange:function(e){return n.handleInputChange(e.target.value,t)},value:e})},n.handleInputChange=function(e,t){n.setState(function(n){return{newEmployeesForm:Object(L.a)({},n.newEmployeesForm,Object(p.a)({},t,e))}})},n.state={newEmployeesForm:{name:"",points:"",job:"",area:"",imgSrc:""},createEmployeeError:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.createEmployeeError,a=t.newEmployeesForm,c=a.name,o=a.points,i=a.job,l=a.area,u=a.imgSrc;return r.a.createElement($,null,r.a.createElement("h2",null,"Create Employee"),n&&r.a.createElement("p",null,"An error ocurred creating Employee"),r.a.createElement(W,{onSubmit:function(t){return e.createEmployee(t)}},this.createTextInput(c,"name"),this.createTextInput(o,"points"),this.createTextInput(i,"job"),this.createTextInput(l,"area"),this.createTextInput(u,"imgSrc"),r.a.createElement("button",{type:"submit"},"Create")))}}]),t}(a.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(D,null,r.a.createElement("p",null,"Employees List")),r.a.createElement(_,null),r.a.createElement(I,null))}}]),t}(a.Component),H=function(e){var t=e.name,n=e.points;return r.a.createElement("div",null,r.a.createElement("h1",null,"Name: ",t),r.a.createElement("h2",null,"Total points: ",n))},K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).getAchievements=function(){d.a.get("".concat(b,"/achievements/")).then(function(e){n.setState({Achievements:{content:e.data,error:""},createAchievementsError:!1})}).catch(function(e){n.setState({Achievements:{error:e.message}})})},n.handleTextChange=function(e,t){var a=e.target.value;n.setState(Object(p.a)({},t,a))},n.state={Achievements:{content:[],error:!1},filterText:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getAchievements()}},{key:"render",value:function(){var e=this,t=this.state,n=t.Achievements,a=n.content,c=n.error,o=t.filterText;if(c)return r.a.createElement("div",null,"Fetch Error: ",c);var i=a.filter(function(e){return e.name.includes(o)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(N,{onChange:function(t){return e.handleTextChange(t,"filterText")},placeholder:"Filter by name",type:"text",value:o})),r.a.createElement("div",{className:"desplazar"},i.map(function(e){var t=e.name,n=e.points;return r.a.createElement(H,{name:t,points:n})})))}}]),t}(a.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Achievement List"),r.a.createElement(K,null))}}]),t}(a.Component),R=function(){return r.a.createElement("h1",null,"Sorry, you're lost... \u2620")},U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){var e=n.props.match.params.id;d.a.get("".concat(b,"/employees/").concat(e)).then(function(e){n.setState({employeesInfo:e.data,error:""})}).catch(function(e){n.setState({error:e.message})})},n.state={employeesInfo:{name:"",points:"",job:"",area:"",imgSrc:""},error:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.employeesInfo,t=e.name,n=e.points,a=e.job,c=e.area,o=e.imgSrc;return r.a.createElement("div",null,r.a.createElement("img",{src:o,alt:""}),r.a.createElement("p",null,r.a.createElement("b",null),t),r.a.createElement("p",null,r.a.createElement("b",null),n),r.a.createElement("p",null,r.a.createElement("b",null,"job: "),a),r.a.createElement("p",null,r.a.createElement("b",null,"areaText: "),c))}}]),t}(a.Component),V=n(19);n(38);var X=function(e){var t=e.prizeName,n=e.imgSrc,a=e.points;return r.a.createElement("div",{className:"personal-card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:n,alt:t}))),r.a.createElement("p",{className:"title is-5"},t),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-content"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"https://image.freepik.com/vector-gratis/comienzo_53876-25533.jpg"}),r.a.createElement("p",{className:"subtitle is-6 over-text"},a))))))},Y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){n.getPrizes()},n.getPrizes=function(){d.a.get("".concat(b).concat(E)).then(function(e){n.setState({prizesList:e.data})})},n.state={prizesList:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.prizesList;return console.log(e),r.a.createElement("div",{className:"card-container"},e.map(function(e){var t=e.id,n=e.name,a=e.imgSrc,c=e.points;return r.a.createElement(h.b,{key:t,to:"/prizes/".concat(t)},r.a.createElement(X,{prizeName:n,imgSrc:a,points:c}))}))}}]),t}(a.Component),Z=n(79),ee=n(80),te=n(81),ne=n(82),ae=n(83),re=n(84),ce=n(85),oe=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).componentDidMount=function(){var e=n.props.match.params.id;d.a.get("".concat(b,"/prizes/").concat(e)).then(function(e){n.setState({Prize:e.data})})},n.deletePrize=function(){var e=n.props.match.params.id;d.a.delete("".concat(b,"/prizes/").concat(e)).then(function(e){n.setState({Prize:e.data})})},n.state={Prize:{id:"",name:"",description:"",points:"0",imgSrc:""},editing:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.Prize,t=(e.id,e.name),n=e.description,a=(e.points,e.imgSrc);return r.a.createElement(Z.a,{className:"card-container"},r.a.createElement(ee.a,{sm:"4"},r.a.createElement(te.a,{body:!0},r.a.createElement(ne.a,{className:"text-center"},r.a.createElement(ae.a,null,t)),r.a.createElement("img",{width:"100%",src:a,alt:"Card image cap"}),r.a.createElement(ne.a,null,r.a.createElement(re.a,null,n),r.a.createElement(ce.a,{href:"#"},"Editar"),r.a.createElement(ce.a,{onClick:this.deletePrize,href:"#"},"Eliminar")))))}}]),t}(a.Component);n(39),n(76);var ie=function(){return r.a.createElement(h.a,null,r.a.createElement(V.d,null,r.a.createElement(V.b,{exact:!0,path:"/",render:function(){return r.a.createElement(V.a,{to:"/employees"})}}),r.a.createElement(V.b,{exact:!0,path:"/employees",component:G}),r.a.createElement(V.b,{exact:!0,path:"/employees/:id",component:U}),r.a.createElement(V.b,{exact:!0,path:"/achievements/",component:Q}),r.a.createElement(V.b,{exact:!0,path:"/prizes",component:Y}),r.a.createElement(V.b,{exact:!0,path:"/prizes/:id",component:oe}),r.a.createElement(V.b,{component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[50,1,2]]]);
//# sourceMappingURL=main.83e98f34.chunk.js.map