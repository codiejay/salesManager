(this.webpackJsonpsalesmag=this.webpackJsonpsalesmag||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/googleIcon.20608d5e.svg"},33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/userIcon.6b4c7eba.svg"},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(30),l=a.n(o),r=(a(38),a(10)),s=a(2),i=a(15),m=a(3),u=(a(39),a(5)),d=a(6),p=(a(40),a(41),function(e){var t={background:"url(".concat(e.bttImg,") no-repeat center/contain"),width:"25px",height:"25px"};return c.a.createElement("div",{id:"bigBttn"},c.a.createElement("div",{className:"bttnImg",style:t}),c.a.createElement("button",null,c.a.createElement("h1",null,e.bttnTitle)))}),E=a(31),h=a.n(E),g=a(24),b=a.n(g);b.a.initializeApp({apiKey:"AIzaSyDbCEi0Mynj3hvW_x73fwybaRqjwAUGNBg",authDomain:"storemanager-dfe02.firebaseapp.com",databaseURL:"https://storemanager-dfe02.firebaseio.com",projectId:"storemanager-dfe02",storageBucket:"storemanager-dfe02.appspot.com",messagingSenderId:"279517551995",appId:"1:279517551995:web:e0751015370fce690571de",measurementId:"G-6LWQR0VLZH"});var f=b.a,v=function(e){var t=function(t){t.preventDefault(),l&&f.firestore().collection("approved").doc(e.approvedUser).get().then((function(t){if(t.data().secretPin.toString()===l){var a=new f.auth.GoogleAuthProvider;f.auth().signInWithPopup(a).then((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("admins").doc("".concat(t.user.displayName.split(" ")[0])).set({admin:t.user.displayName,adminEmail:t.user.email})}))}else alert("fuck off")}))},a=Object(n.useState)(),o=Object(s.a)(a,2),l=o[0],r=o[1];return c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"userIcon"}),c.a.createElement("form",{onSubmit:t},c.a.createElement("input",{placeholder:"your approved pin",onChange:function(e){r(e.target.value)},type:"password"}),c.a.createElement(p,{bttImg:h.a,bttnTitle:"login with a google account",onClick:t})))},k=(a(52),function(e){var t=function(e){console.log()},a=Object(n.useState)(window.location.href.split("/")[3]),o=Object(s.a)(a,2),l=o[0];o[1];return c.a.createElement("div",{id:"sideBar"},c.a.createElement(u.b,{onClick:t,id:"addstock"===l?"currentBttn":"",to:"/addstock","data-name":"newstock"},"New Stock"),c.a.createElement(u.b,{to:"/addstore",onClick:t,id:"addstore"===l?"currentBttn":"","data-name":"newstore"},"New Store"),c.a.createElement(u.b,{onClick:t,to:"/manage",id:"manage"===l?"currentBttn":"","data-name":"manage"},"Manage"),c.a.createElement(u.b,{onClick:t,to:"/stocks",id:"stocks"===l?"currentBttn":"","data-name":"stocks"},"Stocks"))}),O=(a(57),a(58),function(e){var t={background:"url(".concat(e.userImg,") no-repeat center/contain"),borderRadius:"12px",transform:"scale(0.8)"};return c.a.createElement("nav",{id:"nav"},c.a.createElement(u.b,{to:"/store"},c.a.createElement("div",{id:"menuButton"},c.a.createElement("div",null))),c.a.createElement("div",{className:"userAvatar"},c.a.createElement("div",{style:t})),c.a.createElement("button",{onClick:e.signOut},"sign out"))}),S=(a(59),function(e){return e.loggedIn?c.a.createElement("div",{id:"storePage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"storeBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"storeMain"},c.a.createElement("div",{id:"cashStatus"},c.a.createElement("h3",null,e.cashTotal),c.a.createElement("p",null,"Today's sales in cash")),c.a.createElement("div",{id:"cashStatus"},c.a.createElement("h3",null,e.cashReturn),c.a.createElement("p",null,"Expected Cash Return")),c.a.createElement("div",{id:"cashStatus"},c.a.createElement("h3",null,e.cashProfit),c.a.createElement("p",null,"Expected Profit"))))):c.a.createElement(d.a,{to:"/"})}),j=(a(60),function(e){var t=function(e){switch(e.target.id){case"itemName":p(Object(m.a)(Object(m.a)({},u),{},{stockName:"".concat(e.target.value)}));break;case"itemQuantity":p(Object(m.a)(Object(m.a)({},u),{},{stockQuantity:parseInt(e.target.value)}));break;case"watchQuantity":p(Object(m.a)(Object(m.a)({},u),{},{stockWatchQuantity:parseInt(e.target.value)}));break;case"salesPrice":p(Object(m.a)(Object(m.a)({},u),{},{purchasePrice:parseInt(e.target.value)}));break;case"sellingPrice":p(Object(m.a)(Object(m.a)({},u),{},{sellingPrice:parseInt(e.target.value)}));break;case"purchaseStore":p(Object(m.a)(Object(m.a)({},u),{},{purchaseStore:e.target.value}))}},a=Object(n.useState)({buttonState:"regularButton",buttonClick:"formSubmitted"}),o=Object(s.a)(a,2),l=o[0],r=(o[1],Object(n.useState)({stockName:"",stockQuantity:0,stockWatchQuantity:0,sellingPrice:0,purchasePrice:0,lastUpdate:0,purchaseStore:""})),i=Object(s.a)(r,2),u=i[0],p=i[1],E=Object(n.useState)(e.addedStock),h=Object(s.a)(E,2),g=h[0],b=(h[1],Object(n.useState)("add to store")),f=Object(s.a)(b,2),v=(f[0],f[1],Object(n.useState)(e.ShowSucess)),S=Object(s.a)(v,2);S[0],S[1];return e.loggedIn?c.a.createElement("div",{id:"addStockPage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"addStockBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"addStockMain"},c.a.createElement("div",{id:"header"},c.a.createElement("p",{className:"heading"},"add new item to store"),c.a.createElement("div",{className:"postStatus",style:{opacity:"".concat(e.ShowSucess?"1":"0")}},c.a.createElement("div",{className:"S"===g[0]?"success":"error"}),c.a.createElement("p",null,g))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u.stockName&&e.PushItem(u)}},c.a.createElement("div",{className:"formContent"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemName"},"item's name"),c.a.createElement("input",{onChange:t,type:"text",id:"itemName",placeholder:"techno 2020"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemQuantity"},"item's quantity"),c.a.createElement("input",{onChange:t,type:"number",id:"itemQuantity",placeholder:"30"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"watchQuantity"},"watch quantity"),c.a.createElement("input",{type:"number",onChange:t,id:"watchQuantity",placeholder:"4"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"salesPrice"},"purchase price"),c.a.createElement("input",{onChange:t,type:"number",id:"salesPrice",placeholder:"purchase price",maxLength:"8"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"sellingPrice"},"selling price"),c.a.createElement("input",{onChange:t,type:"number",id:"sellingPrice",placeholder:"selling price",maxLength:"8"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemName"},"purchase store"),c.a.createElement("input",{onChange:t,type:"text",id:"purchaseStore",placeholder:"emcee solutons"}))),c.a.createElement("button",{className:l.buttonState},e.addStockBttn))))):c.a.createElement(d.a,{to:"/"})}),N=(a(61),a(62),function(e){return c.a.createElement(u.b,{id:e.itemId,className:"stockItem",to:"".concat(e.location).concat(e.itemId)},c.a.createElement("div",{className:"mainItem"},c.a.createElement("h3",{id:"itemName"}," ",e.itemName," "),c.a.createElement("h3",{id:"itemQuantity"}," ",e.itemQuantity," "),c.a.createElement("h3",{id:"itemLastUpdate"}," ",e.lastUpdate===parseInt(0)?e.itemLastUpdate.split(" ").join("/"):e.lastUpdate.split(" ").join("/")," ")))}),y=function(e){Object(n.useEffect)((function(){E(1)}),[]);var t=function(t){switch(t.target.getAttribute("id")){case"currentStocks":i("current"),E(e.stocksList.length);break;case"runningOut":i("runningout"),E(e.runningOutStocks.length);break;case"outofstock":i("outofstock"),E(e.outOfStock.length)}},a=Object(n.useState)("current"),o=Object(s.a)(a,2),l=o[0],i=o[1],m=Object(n.useState)(1),u=Object(s.a)(m,2),p=u[0],E=u[1];return e.loggedIn?c.a.createElement("div",{id:"stocksPage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"stocksBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"stocksMain"},c.a.createElement("div",{className:"header"},c.a.createElement("h3",null,"Stocks")),c.a.createElement("div",{className:"options"},c.a.createElement("div",{onClick:t,id:"current"===l?"current":"currentStocks"},"Current Stocks"),c.a.createElement("div",{onClick:t,id:"runningout"===l?"current":"runningOut"},"Running Out"),c.a.createElement("div",{onClick:t,id:"outofstock"===l?"current":"outofstock"},"Out Of Stock")),c.a.createElement("div",{className:"stocksList"},c.a.createElement("div",{className:"top"},c.a.createElement("h3",null,"Item Name"),c.a.createElement("h3",null,"Item Quantity"),c.a.createElement("h3",null,"Updated Date")),c.a.createElement("div",{className:"loadingBox",style:{display:p>0?"none":"grid"}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{className:"stockBox",id:"mainStock",style:{display:"".concat("current"===l?"block":"none")}},e.stocksList.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,{location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a})}))),c.a.createElement("div",{className:"stockBox",id:"runningOut",style:{display:"".concat("runningout"===l?"block":"none")}},e.runningOutStocks.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,{location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a})}))),c.a.createElement("div",{className:"stockBox",id:"outOfStock",style:{display:"".concat("outofstock"===l?"block":"none")}},e.outOfStock.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,Object(r.a)({location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a},"lastUpdate",e.lastUpdate))}))))))):c.a.createElement(d.a,{to:"/store"})},I=(a(63),function(e){e.redirectStockPageHandler(!0);var t=Object(d.g)(),a=new Date,o="".concat(a.getDate()," ").concat(a.getMonth()," ").concat(a.getFullYear()),l=function(e){switch(e.target.id){case"stockName":u(m,m.stockName=e.target.value),u(m,m.lastUpdate=o);break;case"stockQuantity":u(m,m.stockQuantity=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"sellingPrice":u(m,m.sellingPrice=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"purchasePrice":u(m,m.purchasePrice=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"stockWatchQuantity":u(m,m.stockWatchQuantity=parseInt(e.target.value)),u(m,m.lastUpdate=o)}};Object(n.useEffect)((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("stock").where("id","==",t.id).get().then((function(e){e.docs.forEach((function(e){var t=e.data();u(t),g(h=e.id)}))}))}),[]);var r=Object(n.useState)([]),i=Object(s.a)(r,2),m=i[0],u=i[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),h=E[0],g=E[1],b=Object(n.useState)("update item"),v=Object(s.a)(b,2),S=v[0],j=v[1],N=Object(n.useState)(!0),y=Object(s.a)(N,2);y[0],y[1];return e.redirectStockPage?c.a.createElement("div",{id:"stockPage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"stockpageBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"stockPageMain"},c.a.createElement("div",{id:"heading"},c.a.createElement("div",null,c.a.createElement("h1",null,m.stockName),c.a.createElement("p",null,"added by ",m.adminInCharge),c.a.createElement("p",null,"date added: ",m.date?m.date.split(" ").join("/"):"")),c.a.createElement("div",{onClick:function(){f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(h).delete().then((function(t){e.storesList.forEach((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(t.storeName).collection("stocks").doc(h).delete().then((function(e){console.log("deleted")})),e.redirectStockPageHandler(!1)}))}))},className:"bin"})),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),j("Updating...");f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(h).update(m).then((function(t){e.storesList.forEach((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(t.storeName).collection("stocks").doc(h).update({sellingPrice:m.sellingPrice,purchaseStore:m.purchasePrice})})),j("Update item")}))}},c.a.createElement("div",{id:"inputs"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockQuantity"},"Item Quantity"),c.a.createElement("input",{onChange:l,type:"number",id:"stockQuantity",placeholder:m.stockQuantity})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockSelling"},"Selling Price"),c.a.createElement("input",{onChange:l,type:"number",id:"sellingPrice",placeholder:m.sellingPrice})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockSelling"},"Watch Quantity"),c.a.createElement("input",{onChange:l,type:"number",id:"stockWatchQuantity",placeholder:m.stockWatchQuantity})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockPrice"},"Purchase Price"),c.a.createElement("input",{onChange:l,type:"number",id:"purchasePrice",placeholder:m.purchasePrice})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockPrice"},"Purchase Store"),c.a.createElement("input",{onChange:l,type:"text",id:"purchaseStore",placeholder:m.purchaseStore}))),c.a.createElement("button",null," ",S," "))))):c.a.createElement(d.a,{to:"/stocks"})}),w=(a(64),function(e){var t=function(t){t.preventDefault(),e.makeNewStore(r,p)},a=function(e){switch(e.target.id){case"storeName":i(e.target.value);break;case"attendantName":E(Object(m.a)(Object(m.a)({},p),{},{name:e.target.value}));break;case"attendantPin":E(Object(m.a)(Object(m.a)({},p),{},{pin:e.target.value}))}},o=Object(n.useState)(""),l=Object(s.a)(o,2),r=l[0],i=l[1],u=Object(n.useState)({name:"",pin:0}),d=Object(s.a)(u,2),p=d[0],E=d[1],h=Object(n.useState)(e.buttonText),g=Object(s.a)(h,2),b=g[0];g[1];return c.a.createElement("div",{id:"AddStorePage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"addStoreBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"addStoreMain"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"Add a new store")),c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{id:"storeData"},c.a.createElement("label",{htmlFor:"storeName"},"Store Name"),c.a.createElement("input",{id:"storeName",type:"text",onChange:a,placeholder:"Pota"})),c.a.createElement("div",{className:"attendantsBox"},c.a.createElement("div",{id:"attendant"},c.a.createElement("label",{htmlFor:"attendantName"},"attendant's name"),c.a.createElement("input",{id:"attendantName",type:"text",onChange:a,placeholder:"Jim"})),c.a.createElement("div",{id:"attendant"},c.a.createElement("label",{htmlFor:"attendantPin"},"attendant's secret pin"),c.a.createElement("input",{id:"attendantPin",type:"number",onChange:a,placeholder:"29384",maxLength:5}))),c.a.createElement("button",{onClick:t},b)))))}),P=(a(65),function(e){var t=function(t){e.deleteStore(t.target.id)},a=Object(n.useState)(""),o=Object(s.a)(a,2);o[0],o[1];return c.a.createElement("div",{className:"managePage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"managePageBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"managePageMain"},c.a.createElement("div",{id:"storeList"},e.storeList.map((function(e,a){return c.a.createElement("div",{className:"Store",key:a},c.a.createElement(u.b,{to:"/manage/".concat(e.storeName),id:"Store"},c.a.createElement("div",null),c.a.createElement("p",null,e.storeName)),c.a.createElement("div",{id:e.storeName,className:"bin",onClick:t}))}))))))}),C=(a(66),a(67),function(e){return c.a.createElement("div",{className:"expenses"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"expenseHead"},c.a.createElement("h3",null,e.attendant),c.a.createElement("h3",null,"\u20a6".concat(e.cost))),c.a.createElement("h1",null,e.expenseTitle),c.a.createElement("p",null," ",e.expenseBody," "),c.a.createElement("div",{className:"time"},c.a.createElement("p",null,e.expenseDate),c.a.createElement("p",null,e.expenseTime))),c.a.createElement("div",{id:e.id,className:"delBttn",onClick:e.deleteExpense}))}),x=function(e){var t,a,o=Object(d.g)().id,l=new Date,m="".concat(l.getDate()," ").concat(l.getMonth()+1," ").concat(l.getFullYear()),u=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(o.toLowerCase()).collection("transactions").doc(m).collection("expenses"),p=function(t){var a=parseInt(t.target.id),n=parseInt(t.target.previousElementSibling.value),c=t.target.dataset.name,l=f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(c.toLowerCase()),r=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(o).collection("stocks").doc(c.toLowerCase());n>=0?n!==a&&(n>a?l.get().then((function(e){var t=e.data().stockQuantity;t>=parseInt(n)&&(r.update({stockQuantity:n}),l.update({stockQuantity:t-parseInt(n-a)}))})):n<a&&l.get().then((function(e){e.data().stockQuantity,l.update({stockQuantity:e.data().stockQuantity+parseInt(n+a)}),r.update({stockQuantity:n})}))):console.log("nothign was inputed")},E=function(e){switch(e.target.id){case"stocks":I("allStocks");break;case"sales":I("sales");break;case"expenses":I("expenses")}};Object(n.useEffect)((function(){e.setCurrentStore(o);var t=[],a=[],n=[],c=0;f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(o).collection("stocks").onSnapshot((function(e){e.docs.forEach((function(e){a.push(e.data())})),v(Object(i.a)(a)),a=[]})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(o.toLowerCase()).collection("transactions").doc(m).collection("sales").onSnapshot((function(e){e.forEach((function(e){c+=e.data().sellingPrice-e.data().purchasePrice,t.push(e.data())})),A("\u20a6".concat(c.toLocaleString())),c=0,U(Object(i.a)(t)),t=[]})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(o.toLowerCase()).collection("transactions").doc(m).collection("expenses").onSnapshot((function(e){e.forEach((function(e){n.push(e.data())})),B(Object(i.a)(n)),n=[]}))}),[]);var h=Object(n.useState)([]),g=Object(s.a)(h,2),b=g[0],v=g[1],S=Object(n.useState)("allStocks"),j=Object(s.a)(S,2),y=j[0],I=j[1],w=Object(n.useState)([]),P=Object(s.a)(w,2),x=P[0],U=P[1],Q=Object(n.useState)([]),L=Object(s.a)(Q,2),F=L[0],B=L[1],D=Object(n.useState)(0),T=Object(s.a)(D,2),M=T[0],A=T[1];return c.a.createElement("div",{className:"StorePage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"storePageBody"},c.a.createElement(k,null),c.a.createElement("div",{className:"storePageMain"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,o),c.a.createElement("h3",{style:{color:"white",fontSize:"1.em",marginBottom:"2em"}},"Today's Profit: ",M),c.a.createElement("div",{className:"options"},c.a.createElement("p",{id:"stocks",onClick:E,style:{opacity:"".concat("allStocks"===y?"1":"0.2")}},"current stocks"),c.a.createElement("p",{id:"sales",onClick:E,style:{opacity:"".concat("sales"===y?"1":"0.2")}},"today sales"),c.a.createElement("p",{id:"expenses",onClick:E,style:{opacity:"".concat("expenses"===y?"1":"0.2")}},"today expenses"))),c.a.createElement("div",{style:{display:"".concat("allStocks"===y?"block":"none")},className:"allStocks"},b.map((function(e,t){return c.a.createElement("div",{id:"storeStockItem",key:t},c.a.createElement("h3",null,e.stockName),c.a.createElement("input",{type:"number",id:"input",placeholder:e.stockQuantity}),c.a.createElement("div",{"data-name":e.stockName,id:e.stockQuantity,className:"done",onClick:p}))}))),c.a.createElement("div",{style:{display:"".concat("sales"===y?"block":"none")},className:"sales"},c.a.createElement("div",{className:"top"},c.a.createElement("h3",null,"Item Name"),c.a.createElement("h3",null,"Item Quantity"),c.a.createElement("h3",null,"Updated Date")),x.length>0?x.map((function(e){return c.a.createElement(N,{location:o,itemId:"/".concat(e.id),itemName:e.stockName,itemQuantity:e.stockQuantity,lastUpdate:e.date,itemLastUpdate:"0"})})):c.a.createElement("h1",{style:(t={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(t,"color","black"),Object(r.a)(t,"marginTop","2em"),Object(r.a)(t,"borderRadius","300px"),t)},"no sales to display")),c.a.createElement("div",{style:{display:"".concat("expenses"===y?"block":"none")},className:"expense"},F.length>0?F.map((function(e){return c.a.createElement(C,{cost:e.expenses.cost,attendant:e.attendant,expenseTitle:e.expenses.title,expenseBody:e.expenses.body,expenseDate:e.date,expenseTime:e.time,id:e.id,deleteExpense:function(){return function(e){u.where("id","==",e).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))}(e.id)}})})):c.a.createElement("h1",{style:(a={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(a,"color","black"),Object(r.a)(a,"marginTop","2em"),Object(r.a)(a,"borderRadius","300px"),a)},"no expenses to display")))))},U=(a(68),function(e){var t=new Date,a="".concat(t.getDate()," ").concat(t.getMonth()+1," ").concat(t.getFullYear()),o=Object(d.g)().id,l=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("transactions").doc(a).collection("sales");Object(n.useEffect)((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("transactions").doc(a).collection("sales").where("id","==",parseInt(o)).get().then((function(e){e.docs.forEach((function(e){u(e.data())}))}))}),[]);var r=Object(n.useState)(),i=Object(s.a)(r,2),m=i[0],u=i[1],p=Object(n.useState)(!0),E=Object(s.a)(p,2),h=E[0],g=E[1],b=Object(n.useState)(""),v=Object(s.a)(b,2),k=v[0],S=v[1];return h?c.a.createElement("div",{id:"soldstockpage"},c.a.createElement(O,{signOut:e.signOut,userImg:e.userImg}),m?c.a.createElement("div",{className:"soldstockMain"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"itemDetails"},c.a.createElement("div",{className:"itemDetailsHeader"},c.a.createElement("h3",{className:"label"},"Item Details"),c.a.createElement("div",{onClick:function(){var t=window.location.href.split("/").length-2,a=window.location.href.split("/")[t];S(a),l.where("id","==",parseInt(o)).get().then((function(t){t.forEach((function(t){t.ref.delete().then((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("stocks").doc(m.stockName.toLowerCase()).get().then((function(e){e.ref.update({stockQuantity:f.firestore.FieldValue.increment(m.stockQuantity)}).then((function(){g(!1)}))}))}))}))}))},className:"del"})),c.a.createElement("div",{className:"detailItems"},c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"stockName"},"Stock Name"),c.a.createElement("input",{id:"stockName","data-fill":"false",value:m.stockName})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"attendant"},"Attendant"),c.a.createElement("input",{id:"attendant","data-fill":"false",value:m.staffInCharge})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"Quantity"},"Quantity"),c.a.createElement("input",{id:"Quantity","data-fill":"false",value:m.stockQuantity})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"sellingPrice"},"Selling Price"),c.a.createElement("input",{id:"sellingPrice","data-fill":"false",value:m.sellingPrice})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"purchasePrice"},"Purchase Price"),c.a.createElement("input",{id:"purchasePrice","data-fill":"false",value:m.purchasePrice})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"totalPrice"},"Total Price"),c.a.createElement("input",{id:"totalPrice","data-fill":"false",value:m.totalAmount})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"totalPrice"},"IMEI"),c.a.createElement("input",{id:"IMEI","data-fill":"false",value:m.imei})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"dateofsale"},"Date Of Sale"),c.a.createElement("input",{id:"dateofsale","data-fill":"false",value:a.split(" ").join("/")})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"timesold"},"Time Sold"),c.a.createElement("input",{id:"dateofsale","data-fill":"false",value:m.time}))),c.a.createElement("h3",{className:"label",style:{marginTop:"3em"}},"Customer Details"),c.a.createElement("div",{id:"detailItems"},c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerName"},"Customer Name"),c.a.createElement("input",{id:"customerName","data-fill":"false",value:m.customerName})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerAddress"},"Customer Address"),c.a.createElement("input",{id:"customerAddress","data-fill":"false",value:m.customerAddress})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerPhoneNumber"},"Customer Phone No."),c.a.createElement("input",{id:"stoccustomerPhoneNumberkName","data-fill":"false",value:m.customerPhoneNumber}))))),c.a.createElement("div",{className:"printWindow"})):c.a.createElement("h2",null,"fetching data")):c.a.createElement(d.a,{to:"/manage/".concat(k)})}),Q=function(){var e=f.auth().currentUser,t=function(e){N(e)},a=function(e){f.firestore().collection("approved").doc("bolu").collection("store").doc(e).delete().then((function(e){console.log("deleted")}))};Object(n.useEffect)((function(){var e=[];f.firestore().collection("approved").doc("bolu").collection("store").where("show","==",!0).onSnapshot((function(t){t.docs.forEach((function(t){e.push(t.data())})),Ce(e),e=[]}))}),[]);var o=function(e){Oe(e)},l=function(t,a){if(t.length>0&&a.pin.length>4){var n=new Date,c="".concat(n.getDate()," ").concat(n.getMonth()," ").concat(n.getFullYear());ye("processing");f.firestore().collection("approved").doc("bolu").collection("store").doc(t.toLowerCase()).set({storeName:t.toLowerCase(),attendants:[{name:a.name,pin:a.pin}],createdBy:e.displayName,dateAdded:c,show:!0}).then((function(e){f.firestore().collection("approved").doc("bolu").collection("stock").get().then((function(e){e.docs.forEach((function(e){f.firestore().collection("approved").doc("bolu").collection("store").doc(t.toLowerCase()).collection("stocks").doc(e.data().stockName.toLowerCase()).set(Object(m.a)(Object(m.a)({},e.data()),{},{stockQuantity:0})).then((function(e){console.log("fuckong legend")}))}))})),ye("done"),setTimeout((function(){ye("create store")}),1e3)}))}},p=f.firestore().collection("approved").doc("bolu").collection("stock").where("stockQuantity",">",0),E=f.firestore().collection("approved").doc("bolu").collection("stock").where("stockQuantity","<=",3),h=f.firestore().collection("approved").doc("bolu").collection("stock").where("stockQuantity","<=",0);Object(n.useEffect)((function(){var e=[];p.onSnapshot((function(t){t.docs.forEach((function(t,a){e.push(t.data())})),re(Object(i.a)(e)),e=[]}))}),[]),Object(n.useEffect)((function(){var e=[];E.onSnapshot((function(t){t.docs.forEach((function(t){e.push(t.data())})),ue(Object(i.a)(e)),e=[]}))}),[]),Object(n.useEffect)((function(){h.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(e.data())})),he(Object(i.a)(t)),t=[]}))}),[]);var g=function(t){var a=new Date;ne("please wait");var n="".concat(a.getDate()," ").concat(a.getMonth()," ").concat(a.getFullYear());f.firestore().collection("approved").doc("bolu").collection("stock").doc(t.stockName.toLowerCase()).set(Object(m.a)(Object(m.a)({},t),{},{date:n,id:"".concat(a.getTime()),adminInCharge:e.displayName})).then((function(c){Pe.forEach((function(c){f.firestore().collection("approved").doc("bolu").collection("store").doc(c.storeName).collection("stocks").doc(t.stockName.toLowerCase()).set(Object(m.a)(Object(m.a)({},t),{},{date:n,id:"".concat(a.getTime()),adminInCharge:e.displayName,stockQuantity:0}))})),ne("done"),K("Stock has been added successfully"),X(!0);var o=setInterval((function(){X(!1),ne("add to store"),l()}),1e3),l=function(){clearInterval(o)}})).catch((function(e){K("There was an error, try again.")}))},b=Object(n.useState)(""),k=Object(s.a)(b,2),O=k[0],N=k[1],C=function(e){f.auth().signOut().then((function(){return B(!1)})).catch((function(e){console.error(e)}))};f.auth().onAuthStateChanged((function(e){e?(B(!0),A(e.photoURL)):B(!1)}));var Q=Object(n.useState)(!1),L=Object(s.a)(Q,2),F=L[0],B=L[1],D=Object(n.useState)(""),T=Object(s.a)(D,2),M=T[0],A=T[1],R=Object(n.useState)(0),W=Object(s.a)(R,2),H=W[0],z=(W[1],Object(n.useState)({cashTotal:12e3,cashReturn:89503,cashProfit:28990})),Y=Object(s.a)(z,2),q=Y[0],G=(Y[1],Object(n.useState)("Stock has been added successfully")),J=Object(s.a)(G,2),V=J[0],K=J[1],Z=Object(n.useState)(!1),$=Object(s.a)(Z,2),_=$[0],X=$[1],ee=Object(n.useState)("add to store"),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)([]),oe=Object(s.a)(ce,2),le=oe[0],re=oe[1],se=Object(n.useState)([]),ie=Object(s.a)(se,2),me=ie[0],ue=ie[1],de=Object(n.useState)([]),pe=Object(s.a)(de,2),Ee=pe[0],he=pe[1],ge=Object(n.useState)([]),be=Object(s.a)(ge,2),fe=(be[0],be[1],Object(n.useState)(!0)),ve=Object(s.a)(fe,2),ke=ve[0],Oe=ve[1],Se=Object(n.useState)("create store"),je=Object(s.a)(Se,2),Ne=je[0],ye=je[1],Ie=Object(n.useState)([]),we=Object(s.a)(Ie,2),Pe=we[0],Ce=we[1],xe=Object(n.useState)([]),Ue=Object(s.a)(xe,2),Qe=Ue[0];Ue[1];return F?c.a.createElement(u.a,null,c.a.createElement(d.b,null,c.a.createElement(d.a,{to:"/stocks"})),c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/store",component:function(){var e;return c.a.createElement(S,(e={loggedIn:F,userImg:M,cashTotal:H,signOut:C},Object(r.a)(e,"cashTotal",q.cashTotal),Object(r.a)(e,"cashReturn",q.cashReturn),Object(r.a)(e,"cashProfit",q.cashProfit),e))}}),c.a.createElement(d.b,{path:"/addstock",component:function(){return c.a.createElement(j,{loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu",PushItem:g,addedStock:V,ShowSucess:_,addStockBttn:ae})}}),c.a.createElement(d.b,{exact:!0,path:"/stocks",component:function(){return c.a.createElement(y,{loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu",stocksList:le,runningOutStocks:me,outOfStock:Ee})}}),c.a.createElement(d.b,{exact:!0,path:"/stocks/:id",component:function(){return c.a.createElement(I,{storesList:Pe,loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu",redirectStockPage:ke,redirectStockPageHandler:o})}}),c.a.createElement(d.b,{exact:!0,path:"/addstore",component:function(){return c.a.createElement(w,{loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu",makeNewStore:l,buttonText:Ne})}}),c.a.createElement(d.b,{exact:!0,path:"/manage",component:function(){return c.a.createElement(P,{loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu",storeList:Pe,deleteStore:a})}}),c.a.createElement(d.b,{exact:!0,path:"/manage/:id",component:function(){return c.a.createElement(x,{setCurrentStore:t,StoreStock:Qe,loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu"})}}),c.a.createElement(d.b,{path:"/manage/:id/:id",component:function(){return c.a.createElement(U,{storeName:O,loggedIn:F,signOut:C,userImg:M,approvedUser:"bolu"})}}))):c.a.createElement(u.a,{className:"App"},c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/",component:function(){return c.a.createElement(v,{approvedUser:"bolu"})}}),c.a.createElement(d.b,{exact:!0,path:"/store",component:S}),c.a.createElement(d.b,{path:"/addstock",component:j}),c.a.createElement(d.b,{path:"/",component:y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.5037dbb9.chunk.js.map