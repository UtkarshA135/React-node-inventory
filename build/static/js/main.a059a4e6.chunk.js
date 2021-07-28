(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,a){},35:function(e,t,a){e.exports=a(53)},40:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),i=(a(40),a(6)),o=a(7),m=a(9),s=a(8),u=(a(28),a(11)),h=a(4),d=a(65),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={isOpen:!1},n.toggle=n.toggle.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(h.q,{color:"dark",dark:!0,expand:"md"},r.a.createElement(h.r,{tag:d.a,to:"/"},"My Inventory"),r.a.createElement(h.s,{onClick:this.toggle}),r.a.createElement(h.d,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(h.n,{className:"ml-auto",navbar:!0},r.a.createElement(h.o,null,r.a.createElement(h.p,{href:"https://utkarsha135.github.io/cmd-port/"},"My Portfolio")),r.a.createElement(h.o,null,r.a.createElement(h.p,{href:"https://github.com/UtkarshA135/React-node-inventory"},"GitHub Repo")))))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h.e,{fluid:!0},r.a.createElement(h.a,{color:"link"},r.a.createElement(d.a,{to:"/items"},"Manage Item List"))))}}]),a}(n.Component),f=a(67),v=a(69),g=a(66),k=a(12),b=a.n(k),y=a(21),O=a(15),j=a(18),w=a.n(j),C=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={items:[],isLoading:!0},n.remove=n.remove.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/items").then((function(e){return e.json()})).then((function(t){return e.setState({items:t,isLoading:!1})}))}},{key:"remove",value:function(){var e=Object(O.a)(b.a.mark((function e(t){var a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/item/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){console.log("Remove Done!");var e=Object(y.a)(a.state.items).filter((function(e){return e._id!==t}));a.setState({items:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.items;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),r.a.createElement("td",null,t.item_id),r.a.createElement("td",null,t.open_stock,r.a.createElement("span",null,t.open_stock<t.limit_stock?r.a.createElement(w.a,{color:"error",fontSize:"small"}):r.a.createElement("div",null))),r.a.createElement("td",null,t.category),r.a.createElement("td",null,t.limit_stock),r.a.createElement("td",null,"\u20b9 ",t.price*t.open_stock),r.a.createElement("td",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{size:"sm",color:"primary",tag:d.a,to:"/items/"+t._id},"Edit"),r.a.createElement(h.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t._id)}},"Delete"))))}));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h.e,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(h.a,{color:"success",tag:d.a,to:"/items/new"},"Add Item")),r.a.createElement("div",{className:"float-right"},r.a.createElement(h.a,{outlined:!0,style:{marginRight:"2px"},tag:d.a,to:"/limititems"},"Show Low Stock")),r.a.createElement("h3",null,"Item List"),r.a.createElement(h.t,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Item Name"),r.a.createElement("th",{width:"10%"},"Item ID"),r.a.createElement("th",{width:"20%"},"Availabe Stock"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Limit"),r.a.createElement("th",{width:"10%"},"Price"),r.a.createElement("th",{width:"10%"},"Actions"))),r.a.createElement("tbody",null,n))))}}]),a}(n.Component),_=a(26),S=a(68),I=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).emptyItem={name:"",item_id:"",open_stock:"",limit_stock:"",price:"",_id:"",category:"",dropDownOpen:""},n.toggle=function(){n.setState({dropDownOpen:!n.state.dropDownOpen})},n.handle=function(e){var t=Object(_.a)({},n.state.item);t.category=e,n.setState({item:t})},n.state={item:n.emptyItem},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/api/item/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name,r=Object(_.a)({},this.state.item);r[n]=a,this.setState({item:r})}},{key:"handleSubmit",value:function(){var e=Object(O.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.state.item,e.next=4,fetch("/api/item",{method:a._id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 4:this.props.history.push("/items");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.item,a=r.a.createElement("h2",null,t._id?"Edit Item":"Add Item");return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h.e,null,a,r.a.createElement(h.j,{onSubmit:this.handleSubmit},r.a.createElement(h.k,null,r.a.createElement(h.m,{for:"name"},"Item Name"),r.a.createElement(h.l,{type:"text",name:"name",id:"name",value:t.name||"",onChange:this.handleChange,autoComplete:"name"})),r.a.createElement(h.k,null,r.a.createElement(h.m,{for:"item_id"},"Item Id"),r.a.createElement(h.l,{type:"text",name:"item_id",id:"item_id",value:t.item_id||"",onChange:this.handleChange,autoComplete:"item_id"})),r.a.createElement(h.k,null,r.a.createElement(h.b,{name:"category"},r.a.createElement(h.f,{isOpen:this.state.dropDownOpen,toggle:this.toggle},r.a.createElement(h.i,{color:"primary",caret:!0,className:"dropdown-toggle"},"Select Category"),r.a.createElement(h.h,{className:"category-dropdown"},r.a.createElement(h.g,{onClick:function(){return e.handle("Panel")},dropDownValue:"Panel"},"Panel"),r.a.createElement(h.g,{onClick:function(){return e.handle("Inverter")},dropDownValue:"Inverter"},"Inverter"),r.a.createElement(h.g,{onClick:function(){return e.handle("Wire")},dropDownValue:"Wire"},"Wire"),r.a.createElement(h.g,{onClick:function(){return e.handle("MCU4 Connector")},dropDownValue:"MCU4 Connector"},"MCU4 Connector"))))),r.a.createElement(h.k,null,r.a.createElement(h.m,{for:"open_stock"},"Available Stock"),r.a.createElement(h.l,{type:"text",name:"open_stock",id:"open_stock",value:t.open_stock||"",onChange:this.handleChange,autoComplete:"open_stock"})),r.a.createElement(h.k,null,r.a.createElement(h.m,{for:"limit_stock"}," Stock Limit"),r.a.createElement(h.l,{type:"text",name:"limit_stock",id:"limit_stock",value:t.limit_stock||"",onChange:this.handleChange,autoComplete:"address"})),r.a.createElement(h.k,null,r.a.createElement(h.m,{for:"price"},"Price (per piece)"),r.a.createElement(h.l,{type:"text",name:"price",id:"price",value:t.price||"",onChange:this.handleChange,autoComplete:"address"})),r.a.createElement(h.k,null,r.a.createElement(h.a,{color:"primary",type:"submit"},"Save")," ",r.a.createElement(h.a,{color:"secondary",tag:d.a,to:"/items"},"Cancel")))))}}]),a}(n.Component),x=Object(S.a)(I),D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={items:[],isLoading:!0},n.remove=n.remove.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("/api/limititems").then((function(e){return e.json()})).then((function(t){return e.setState({items:t,isLoading:!1})}))}},{key:"remove",value:function(){var e=Object(O.a)(b.a.mark((function e(t){var a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/item/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){console.log("Remove Done!");var e=Object(y.a)(a.state.items).filter((function(e){return e._id!==t}));a.setState({items:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.items;if(t.isLoading)return r.a.createElement("p",null,"Loading...");var n=a.map((function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),r.a.createElement("td",null,t.item_id),r.a.createElement("td",null,t.open_stock,r.a.createElement("span",null,t.open_stock<t.limit_stock?r.a.createElement(w.a,{color:"error",fontSize:"small"}):r.a.createElement("div",null))),r.a.createElement("td",null,t.category),r.a.createElement("td",null,t.limit_stock),r.a.createElement("td",null,"\u20b9 ",t.price*t.open_stock),r.a.createElement("td",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{size:"sm",color:"primary",tag:d.a,to:"/items/"+t._id},"Edit"),r.a.createElement(h.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t._id)}},"Delete"))))}));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(h.e,{fluid:!0},r.a.createElement("div",{className:"float-right"},r.a.createElement(h.a,{color:"success",tag:d.a,to:"/items/new"},"Add Item")),r.a.createElement("div",{className:"float-right"},r.a.createElement(h.a,{outlined:!0,style:{marginRight:"2px"},tag:d.a,to:"/items"},"Show All")),r.a.createElement("h3",null,"Item List"),r.a.createElement(h.t,{className:"mt-4"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"20%"},"Item Name"),r.a.createElement("th",{width:"10%"},"Item ID"),r.a.createElement("th",{width:"20%"},"Availabe Stock"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Limit"),r.a.createElement("th",{width:"10%"},"Price"),r.a.createElement("th",{width:"10%"},"Actions"))),r.a.createElement("tbody",null,n))))}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,{path:"/",exact:!0,component:E}),r.a.createElement(g.a,{path:"/items",exact:!0,component:C}),r.a.createElement(g.a,{path:"/items/:id",component:x}),r.a.createElement(g.a,{path:"/limititems",component:D})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(51);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a059a4e6.chunk.js.map