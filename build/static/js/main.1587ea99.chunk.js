(this.webpackJsonpsalesmag=this.webpackJsonpsalesmag||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/googleIcon.20608d5e.svg"},33:function(e,t,a){e.exports=a(69)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){e.exports=a.p+"static/media/userIcon.6b4c7eba.svg"},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(30),l=a.n(o),r=(a(38),a(3)),i=a(2),s=a(4),m=(a(39),a(6)),d=a(7),u=(a(40),a(41),function(e){var t={background:"url(".concat(e.bttImg,") no-repeat center/contain"),width:"25px",height:"25px"};return c.a.createElement("div",{id:"bigBttn"},c.a.createElement("div",{className:"bttnImg",style:t}),c.a.createElement("button",null,c.a.createElement("h1",null,e.bttnTitle)))}),p=a(31),E=a.n(p),b=a(24),h=a.n(b);h.a.initializeApp({apiKey:"AIzaSyDbCEi0Mynj3hvW_x73fwybaRqjwAUGNBg",authDomain:"storemanager-dfe02.firebaseapp.com",databaseURL:"https://storemanager-dfe02.firebaseio.com",projectId:"storemanager-dfe02",storageBucket:"storemanager-dfe02.appspot.com",messagingSenderId:"279517551995",appId:"1:279517551995:web:e0751015370fce690571de",measurementId:"G-6LWQR0VLZH"});var f=h.a,g=function(e){var t=function(t){t.preventDefault(),l&&f.firestore().collection("approved").doc(e.approvedUser).get().then((function(t){if(t.data().secretPin.toString()===l){var a=new f.auth.GoogleAuthProvider;f.auth().signInWithPopup(a).then((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("admins").doc("".concat(t.user.displayName.split(" ")[0])).set({admin:t.user.displayName,adminEmail:t.user.email})}))}else alert("wrong, password")}))},a=Object(n.useState)(),o=Object(i.a)(a,2),l=o[0],r=o[1];return c.a.createElement("div",{id:"login"},c.a.createElement("div",{className:"userIcon"}),c.a.createElement("form",{onSubmit:t},c.a.createElement("input",{placeholder:"your approved pin",onChange:function(e){r(e.target.value)},type:"password"}),c.a.createElement(u,{bttImg:E.a,bttnTitle:"login with a google account",onClick:t})))},v=(a(52),function(e){var t=function(e){console.log()},a=Object(n.useState)(window.location.href.split("/")[3]),o=Object(i.a)(a,2),l=o[0];o[1];return c.a.createElement("div",{id:"sideBar"},c.a.createElement(m.b,{onClick:t,id:"addstock"===l?"currentBttn":"",to:"/addstock","data-name":"newstock"},"New Stock"),c.a.createElement(m.b,{to:"/addstore",onClick:t,id:"addstore"===l?"currentBttn":"","data-name":"newstore"},"New Store"),c.a.createElement(m.b,{onClick:t,to:"/manage",id:"manage"===l?"currentBttn":"","data-name":"manage"},"Manage"),c.a.createElement(m.b,{onClick:t,to:"/stocks",id:"stocks"===l?"currentBttn":"","data-name":"stocks"},"Stocks"))}),k=(a(57),a(58),function(e){var t={background:"url(".concat(e.userImg,") no-repeat center/contain"),borderRadius:"12px",transform:"scale(0.8)"};return c.a.createElement("nav",{id:"nav","data-print":"noPrint"},c.a.createElement(m.b,{to:"/store"},c.a.createElement("div",{id:"menuButton"},c.a.createElement("div",null))),c.a.createElement("div",{className:"userAvatar"},c.a.createElement("div",{style:t})),c.a.createElement("button",{onClick:e.signOut,"data-print":"noPrint"},"sign out"))}),O=(a(59),function(e){var t=f.firestore().collection("approved").doc(e.approvedUser).collection("stock");Object(n.useEffect)((function(){var e=0,a=0,n=!0;return t.where("stockQuantity",">",0).get().then((function(e){e.docs.forEach((function(e){a+=e.data().stockQuantity})),n&&r(a)})),t.where("stockQuantity",">",0).get().then((function(t){t.docs.forEach((function(t){e+=t.data().sellingPrice})),n&&p(e)})),function(){return n=!1}}),[]);var a=Object(n.useState)("loading"),o=Object(i.a)(a,2),l=o[0],r=o[1],s=Object(n.useState)("loading"),m=Object(i.a)(s,2),u=m[0],p=m[1];return e.loggedIn?c.a.createElement("div",{id:"storePage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"storeBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"storeMain"},c.a.createElement("div",{id:"cashStatus"},c.a.createElement("h3",null,l),c.a.createElement("p",null,"Stocks Available")),c.a.createElement("div",{id:"cashStatus"},c.a.createElement("h3",null,u.toLocaleString()),c.a.createElement("p",null,"Estimated Cash Return"))))):c.a.createElement(d.a,{to:"/"})}),j=(a(60),function(e){var t=function(e){switch(e.target.id){case"itemName":p(Object(s.a)(Object(s.a)({},u),{},{stockName:"".concat(e.target.value)}));break;case"itemQuantity":p(Object(s.a)(Object(s.a)({},u),{},{stockQuantity:parseInt(e.target.value)}));break;case"watchQuantity":p(Object(s.a)(Object(s.a)({},u),{},{stockWatchQuantity:parseInt(e.target.value)}));break;case"salesPrice":p(Object(s.a)(Object(s.a)({},u),{},{purchasePrice:parseInt(e.target.value)}));break;case"sellingPrice":p(Object(s.a)(Object(s.a)({},u),{},{sellingPrice:parseInt(e.target.value)}));break;case"purchaseStore":p(Object(s.a)(Object(s.a)({},u),{},{purchaseStore:e.target.value}))}},a=Object(n.useState)({buttonState:"regularButton",buttonClick:"formSubmitted"}),o=Object(i.a)(a,2),l=o[0],r=(o[1],Object(n.useState)({stockName:"",stockQuantity:0,stockWatchQuantity:0,sellingPrice:0,purchasePrice:0,lastUpdate:0,purchaseStore:""})),m=Object(i.a)(r,2),u=m[0],p=m[1],E=Object(n.useState)(e.addedStock),b=Object(i.a)(E,2),h=b[0],f=(b[1],Object(n.useState)("add to store")),g=Object(i.a)(f,2),O=(g[0],g[1],Object(n.useState)(e.ShowSucess)),j=Object(i.a)(O,2);j[0],j[1];return e.loggedIn?c.a.createElement("div",{id:"addStockPage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"addStockBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"addStockMain"},c.a.createElement("div",{id:"header"},c.a.createElement("p",{className:"heading"},"add new item to store"),c.a.createElement("div",{className:"postStatus",style:{opacity:"".concat(e.ShowSucess?"1":"0")}},c.a.createElement("div",{className:"S"===h[0]?"success":"error"}),c.a.createElement("p",null,h))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u.stockName&&e.PushItem(u)}},c.a.createElement("div",{className:"formContent"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemName"},"item's name"),c.a.createElement("input",{onChange:t,type:"text",id:"itemName",placeholder:"techno 2020"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemQuantity"},"item's quantity"),c.a.createElement("input",{onChange:t,type:"number",id:"itemQuantity",placeholder:"30"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"watchQuantity"},"watch quantity"),c.a.createElement("input",{type:"number",onChange:t,id:"watchQuantity",placeholder:"4"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"salesPrice"},"purchase price"),c.a.createElement("input",{onChange:t,type:"number",id:"salesPrice",placeholder:"purchase price",maxLength:"8"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"sellingPrice"},"selling price"),c.a.createElement("input",{onChange:t,type:"number",id:"sellingPrice",placeholder:"selling price",maxLength:"8"})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"itemName"},"purchase store"),c.a.createElement("input",{onChange:t,type:"text",id:"purchaseStore",placeholder:"emcee solutons"}))),c.a.createElement("button",{className:l.buttonState},e.addStockBttn))))):c.a.createElement(d.a,{to:"/"})}),y=a(14),N=(a(61),function(e){return c.a.createElement(m.b,{id:e.itemId,className:"stockItem",to:"".concat(e.location).concat(e.itemId)},c.a.createElement("div",{className:"mainItem"},c.a.createElement("h3",{id:"itemName"}," ",e.itemName," "),c.a.createElement("h3",{id:"itemQuantity"}," ",e.itemQuantity," "),c.a.createElement("h3",{id:"itemLastUpdate"}," ",e.lastUpdate===parseInt(0)?e.itemLastUpdate.split(" ").join("/"):e.lastUpdate.split(" ").join("/")," ")))}),S=(a(62),function(e){var t=f.firestore().collection("approved").doc("bolu").collection("stock");Object(n.useEffect)((function(){b(1)}),[]);var a=function(e){switch(e.target.getAttribute("id")){case"currentStocks":m("current"),b(O.length);break;case"runningOut":m("runningout"),b(I.length);break;case"outofstock":m("outofstock"),b(Q.length)}};Object(n.useEffect)((function(){var e=!0,a=[];return t.where("stockQuantity",">",0).onSnapshot((function(t){t.docs.forEach((function(e){a.push(e.data())})),e&&j([].concat(a))})),function(){return e=!1}}),[]),Object(n.useEffect)((function(){var e=[],a=!0;return t.get().then((function(t){t.docs.forEach((function(t){t.data().stockWatchQuantity===t.data().stockQuantity&&e.push(t.data())})),a&&(P(Object(y.a)(e)),e=[])})),function(){return a=!1}}),[]),Object(n.useEffect)((function(){var e=[],t=!0;return f.firestore().collection("approved").doc("bolu").collection("stock").where("stockQuantity","==",0).get().then((function(a){a.docs.forEach((function(t){e.push(t.data())})),t&&U(Object(y.a)(e)),e=[]})),function(){return t=!1}}),[]);var o=Object(n.useState)("current"),l=Object(i.a)(o,2),s=l[0],m=l[1],u=Object(n.useState)(1),p=Object(i.a)(u,2),E=p[0],b=p[1],h=Object(n.useState)([]),g=Object(i.a)(h,2),O=g[0],j=g[1],S=Object(n.useState)([]),w=Object(i.a)(S,2),I=w[0],P=w[1],x=Object(n.useState)([]),C=Object(i.a)(x,2),Q=C[0],U=C[1];return e.loggedIn?c.a.createElement("div",{id:"stocksPage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{id:"stocksBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"stocksMain"},c.a.createElement("div",{className:"header"},c.a.createElement("h3",null,"Stocks")),c.a.createElement("div",{className:"options"},c.a.createElement("div",{onClick:a,id:"current"===s?"current":"currentStocks"},"Current Stocks"),c.a.createElement("div",{onClick:a,id:"runningout"===s?"current":"runningOut"},"Running Out"),c.a.createElement("div",{onClick:a,id:"outofstock"===s?"current":"outofstock"},"Out Of Stock")),c.a.createElement("div",{className:"stocksList"},c.a.createElement("div",{className:"top"},c.a.createElement("h3",null,"Item Name"),c.a.createElement("h3",null,"Item Quantity"),c.a.createElement("h3",null,"Updated Date")),c.a.createElement("div",{className:"loadingBox",style:{display:E>0?"none":"grid"}},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)),c.a.createElement("div",{className:"stockBox",id:"mainStock",style:{display:"".concat("current"===s?"block":"none")}},O.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,{location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a})}))),c.a.createElement("div",{className:"stockBox",id:"runningOut",style:{display:"".concat("runningout"===s?"block":"none")}},I.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,{location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a})}))),c.a.createElement("div",{className:"stockBox",id:"outOfStock",style:{display:"".concat("outofstock"===s?"block":"none")}},Q.map((function(e,t){var a=e.date.split(" ").join("/");return c.a.createElement(N,Object(r.a)({location:"/stocks/",lastUpdate:e.lastUpdate,key:t,itemId:e.id,itemName:e.stockName,itemQuantity:e.stockQuantity,itemLastUpdate:a},"lastUpdate",e.lastUpdate))}))))))):c.a.createElement(d.a,{to:"/store"})}),w=(a(63),function(e){e.redirectStockPageHandler(!0);var t=Object(d.g)(),a=new Date,o="".concat(a.getDate()," ").concat(a.getMonth()," ").concat(a.getFullYear()),l=function(e){switch(e.target.id){case"stockName":u(m,m.stockName=e.target.value),u(m,m.lastUpdate=o);break;case"stockQuantity":u(m,m.stockQuantity=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"sellingPrice":u(m,m.sellingPrice=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"purchasePrice":u(m,m.purchasePrice=parseInt(e.target.value)),u(m,m.lastUpdate=o);break;case"stockWatchQuantity":u(m,m.stockWatchQuantity=parseInt(e.target.value)),u(m,m.lastUpdate=o)}};Object(n.useEffect)((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("stock").where("id","==",t.id).get().then((function(e){e.docs.forEach((function(e){var t=e.data();u(t),h(b=e.id)}))}))}),[]);var r=Object(n.useState)([]),s=Object(i.a)(r,2),m=s[0],u=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)("update item"),O=Object(i.a)(g,2),j=O[0],y=O[1],N=Object(n.useState)(!0),S=Object(i.a)(N,2);S[0],S[1];return e.redirectStockPage?c.a.createElement("div",{id:"stockPage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"stockpageBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"stockPageMain"},c.a.createElement("div",{id:"heading"},c.a.createElement("div",null,c.a.createElement("h1",null,m.stockName),c.a.createElement("p",null,"added by ",m.adminInCharge),c.a.createElement("p",null,"date added: ",m.date?m.date.split(" ").join("/"):"")),e.admin?c.a.createElement("div",{onClick:function(){f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(b).delete().then((function(t){e.storesList.forEach((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(t.storeName).collection("stocks").doc(b).delete().then((function(e){console.log("deleted")})),e.redirectStockPageHandler(!1)}))}))},className:"bin"}):""),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),y("Updating...");f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(b).update(m).then((function(t){e.storesList.forEach((function(t){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(t.storeName).collection("stocks").doc(b).update({sellingPrice:m.sellingPrice,purchaseStore:m.purchasePrice})})),y("Update item")}))}},c.a.createElement("div",{id:"inputs"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockQuantity"},"Item Quantity"),c.a.createElement("input",{onChange:l,type:"number",id:"stockQuantity",placeholder:m.stockQuantity})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockSelling"},"Selling Price"),c.a.createElement("input",{onChange:l,type:"number",id:"sellingPrice",placeholder:m.sellingPrice})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockSelling"},"Watch Quantity"),c.a.createElement("input",{onChange:l,type:"number",id:"stockWatchQuantity",placeholder:m.stockWatchQuantity})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockPrice"},"Purchase Price"),c.a.createElement("input",{onChange:l,type:"number",id:"purchasePrice",placeholder:m.purchasePrice})),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"stockPrice"},"Purchase Store"),c.a.createElement("input",{onChange:l,type:"text",id:"purchaseStore",placeholder:m.purchaseStore}))),c.a.createElement("button",null,j))))):c.a.createElement(d.a,{to:"/stocks"})}),I=(a(64),function(e){var t=function(t){t.preventDefault(),e.makeNewStore(r,p)},a=function(e){switch(e.target.id){case"storeName":m(e.target.value);break;case"attendantName":E(Object(s.a)(Object(s.a)({},p),{},{name:e.target.value}));break;case"attendantPin":E(Object(s.a)(Object(s.a)({},p),{},{pin:e.target.value}))}},o=Object(n.useState)(""),l=Object(i.a)(o,2),r=l[0],m=l[1],d=Object(n.useState)({name:"",pin:0}),u=Object(i.a)(d,2),p=u[0],E=u[1],b=Object(n.useState)(e.buttonText),h=Object(i.a)(b,2),f=h[0];h[1];return c.a.createElement("div",{id:"AddStorePage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"addStoreBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"addStoreMain"},c.a.createElement("div",{className:"heading"},c.a.createElement("h1",null,"Add a new store")),c.a.createElement("form",{onSubmit:t},c.a.createElement("div",{id:"storeData"},c.a.createElement("label",{htmlFor:"storeName"},"Store Name"),c.a.createElement("input",{id:"storeName",type:"text",onChange:a,placeholder:"Pota"})),c.a.createElement("div",{className:"attendantsBox"},c.a.createElement("div",{id:"attendant"},c.a.createElement("label",{htmlFor:"attendantName"},"attendant's name"),c.a.createElement("input",{id:"attendantName",type:"text",onChange:a,placeholder:"Jim"})),c.a.createElement("div",{id:"attendant"},c.a.createElement("label",{htmlFor:"attendantPin"},"attendant's secret pin"),c.a.createElement("input",{id:"attendantPin",type:"number",onChange:a,placeholder:"29384",maxLength:5}))),c.a.createElement("button",{onClick:t},f)))))}),P=(a(65),function(e){var t=function(t){e.deleteStore(t.target.id)},a=Object(n.useState)(""),o=Object(i.a)(a,2);o[0],o[1];return c.a.createElement("div",{className:"managePage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"managePageBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"managePageMain"},c.a.createElement("div",{id:"storeList"},e.storeList.map((function(e,a){return c.a.createElement("div",{className:"Store",key:a},c.a.createElement(m.b,{to:"/manage/".concat(e.storeName),id:"Store"},c.a.createElement("div",null),c.a.createElement("p",null,e.storeName)),c.a.createElement("div",{id:e.storeName,className:"bin",onClick:t}))}))))))}),x=(a(66),a(67),function(e){return c.a.createElement("div",{className:"expenses"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"expenseHead"},c.a.createElement("h3",null,e.attendant),c.a.createElement("h3",null,"\u20a6".concat(e.cost))),c.a.createElement("h1",null,e.expenseTitle),c.a.createElement("p",null," ",e.expenseBody," "),c.a.createElement("div",{className:"time"},c.a.createElement("p",null,e.expenseDate),c.a.createElement("p",null,e.expenseTime))),c.a.createElement("div",{id:e.id,className:"delBttn",onClick:e.deleteExpense}))}),C=function(e){var t,a,o,l,s,m=Object(d.g)().id,u=new Date,p="".concat(u.getDate()," ").concat(u.getMonth()+1," ").concat(u.getFullYear()),E=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m.toLowerCase()).collection("transactions").doc(p).collection("expenses"),b=function(t){var a=parseInt(t.target.id),n=parseInt(t.target.previousElementSibling.value),c=t.target.dataset.name,o=f.firestore().collection("approved").doc(e.approvedUser).collection("stock").doc(c.toLowerCase()),l=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m).collection("stocks").doc(c.toLowerCase());n>=0&&n!==a&&(n>a?o.get().then((function(e){var t=e.data().stockQuantity;t>=parseInt(n)-parseInt(a)?(l.update({stockQuantity:n}),o.update({stockQuantity:t-parseInt(n-a)})):console.log("it got here")})):n<a&&o.get().then((function(e){n<e.data().stockQuantity?(o.update({stockQuantity:e.data().stockQuantity+parseInt(n+a)}),l.update({stockQuantity:n})):(o.update({stockQuantity:e.data().stockQuantity+parseInt(n-a)}),l.update({stockQuantity:n}))})))},h=function(e){switch(e.target.id){case"stocks":Q("allStocks");break;case"sales":Q("sales");break;case"expenses":Q("expenses");break;case"overview":Q("overview")}};Object(n.useEffect)((function(){var t="".concat(u.getFullYear(),"-").concat(u.getMonth()+1,"-").concat(u.getDate()),a=!0;q(t),e.setCurrentStore(m);var n=[],c=[],o=[],l=0,r=0;return f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m).collection("stocks").where("stockQuantity",">",0).get().then((function(e){e.docs.forEach((function(e){r+=e.data().stockQuantity})),a&&he(r)})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m).collection("stocks").onSnapshot((function(e){e.docs.forEach((function(e){c.push(e.data())})),a&&(w(Object(y.a)(c)),c=[])})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m.toLowerCase()).collection("transactions").doc(p).collection("sales").get().then((function(e){e.forEach((function(e){l+=e.data().totalAmount,n.push(e.data())})),a&&(H("\u20a6".concat(l.toLocaleString())),l=0,F(Object(y.a)(n)),n=[])})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m.toLowerCase()).collection("transactions").doc(p).collection("expenses").onSnapshot((function(e){e.forEach((function(e){o.push(e.data())})),a&&(M(Object(y.a)(o)),o=[])})),function(){a=!1}}),[0]);var g=function(e){E.where("id","==",e).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))},O=Object(n.useState)([]),j=Object(i.a)(O,2),S=j[0],w=j[1],I=Object(n.useState)(),P=Object(i.a)(I,2),C=P[0],Q=P[1],U=Object(n.useState)([]),L=Object(i.a)(U,2),B=L[0],F=L[1],T=Object(n.useState)([]),D=Object(i.a)(T,2),A=D[0],M=D[1],R=Object(n.useState)(0),W=Object(i.a)(R,2),z=W[0],H=W[1],Y=Object(n.useState)(),V=Object(i.a)(Y,2),G=V[0],q=V[1],J=Object(n.useState)([]),K=Object(i.a)(J,2),Z=K[0],$=K[1],_=Object(n.useState)([]),X=Object(i.a)(_,2),ee=X[0],te=X[1],ae=Object(n.useState)("sales"),ne=Object(i.a)(ae,2),ce=ne[0],oe=(ne[1],Object(n.useState)(!1)),le=Object(i.a)(oe,2),re=le[0],ie=le[1],se=Object(n.useState)(0),me=Object(i.a)(se,2),de=me[0],ue=me[1],pe=Object(n.useState)(0),Ee=Object(i.a)(pe,2),be=Ee[0],he=Ee[1];return c.a.createElement("div",{className:"StorePage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),c.a.createElement("div",{className:"storePageBody"},c.a.createElement(v,null),c.a.createElement("div",{className:"storePageMain"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,m),e.admin?c.a.createElement("h3",{style:{color:"white",fontSize:"1.em",marginBottom:"0em"}},"Today's Profit: ",z):"",c.a.createElement("h3",{style:{color:"white",fontSize:"1.em",marginBottom:"2em"}},"Stock Available: ",be),c.a.createElement("div",{className:"options"},c.a.createElement("p",{id:"stocks",onClick:h,style:{opacity:"".concat("allStocks"===C?"1":"0.2")}},"current stocks"),c.a.createElement("p",{id:"sales",onClick:h,style:{opacity:"".concat("sales"===C?"1":"0.2")}},"today sales"),c.a.createElement("p",{id:"expenses",onClick:h,style:{opacity:"".concat("expenses"===C?"1":"0.2")}},"today expenses"),c.a.createElement("p",{id:"overview",onClick:h,style:{opacity:"".concat("overview"===C?"1":"0.2")}},"overview"))),c.a.createElement("div",{style:{display:"".concat("allStocks"===C?"block":"none")},className:"allStocks"},S.map((function(e,t){return c.a.createElement("div",{id:"storeStockItem",key:t},c.a.createElement("h3",null,e.stockName),c.a.createElement("input",{type:"number",id:"input",placeholder:e.stockQuantity}),c.a.createElement("div",{"data-name":e.stockName,id:e.stockQuantity,className:"done",onClick:b}))}))),c.a.createElement("div",{style:{display:"".concat("sales"===C?"block":"none")},className:"sales"},c.a.createElement("div",{className:"top"},c.a.createElement("h3",null,"Item Name"),c.a.createElement("h3",null,"Item Quantity"),c.a.createElement("h3",null,"Updated Date")),B.length>0?B.map((function(e,t){return c.a.createElement(N,{key:t,location:m,itemId:"/".concat(e.id),itemName:e.stockName,itemQuantity:e.stockQuantity,lastUpdate:e.date,itemLastUpdate:"0"})})):c.a.createElement("h1",{style:(t={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(t,"color","black"),Object(r.a)(t,"marginTop","2em"),Object(r.a)(t,"borderRadius","300px"),t)},"no sales to display")),c.a.createElement("div",{style:{display:"".concat("expenses"===C?"block":"none")},className:"expense"},A.length>0?A.map((function(e,t){return c.a.createElement(x,{key:t,cost:e.expenses.cost,attendant:e.attendant,expenseTitle:e.expenses.title,expenseBody:e.expenses.body,expenseDate:e.date,expenseTime:e.time,id:e.id,deleteExpense:function(){return g(e.id)}})})):c.a.createElement("h1",{style:(a={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(a,"color","black"),Object(r.a)(a,"marginTop","2em"),Object(r.a)(a,"borderRadius","300px"),a)},"no expenses to display")),c.a.createElement("div",{className:"overview",style:{display:"".concat("overview"===C?"block":"none")}},c.a.createElement("form",null,c.a.createElement("input",{max:"".concat(u.getFullYear(),"-").concat(u.getMonth()+1,"-").concat(u.getDate()),min:"2020-11-15",type:"date",value:G||"",onChange:function(t){q(t.target.value);var a=t.target.value.split("-").reverse().join(" ");ie(!0);var n=[],c=0;te([]),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m.toLowerCase()).collection("transactions").doc(a).collection("sales").get().then((function(e){e.docs.forEach((function(e){c+=e.data().totalAmount,n.push(e.data())})),ue(c),$(Object(y.a)(n)),c=0,n=[]})),f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(m.toLowerCase()).collection("transactions").doc(a).collection("expenses").get().then((function(e){e.docs.forEach((function(e){n.push(e.data())})),te(Object(y.a)(n)),n=[]}))}})),c.a.createElement("div",{style:{display:"".concat(re?"block":"none")},className:"OverViewData"},c.a.createElement("div",{className:"profit"},c.a.createElement("h1",{style:(o={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(o,"color","black"),Object(r.a)(o,"marginTop","2em"),Object(r.a)(o,"marginBottom","1em"),Object(r.a)(o,"borderRadius","300px"),o)},G," Cash At Hand: \u20a6",de.toLocaleString())),c.a.createElement("div",{id:"overViewSales",style:{display:"".concat("sales"===ce?"block":"none")}},c.a.createElement("div",{className:"top"},c.a.createElement("h3",null,"Item Name"),c.a.createElement("h3",null,"Item Quantity"),c.a.createElement("h3",null,"Updated Date")),Z.length>0?Z.map((function(e,t){return c.a.createElement(N,{key:t,location:m,itemId:"/".concat(e.id,"&").concat(e.date),itemName:e.stockName,itemQuantity:e.stockQuantity,lastUpdate:e.date,itemLastUpdate:"0"})})):c.a.createElement("h1",{style:(l={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(l,"color","black"),Object(r.a)(l,"marginTop","2em"),Object(r.a)(l,"borderRadius","300px"),l)},"no sales to display"),ee.length>0?ee.map((function(e){var t;return c.a.createElement("div",null,c.a.createElement("h1",{style:(t={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(t,"color","black"),Object(r.a)(t,"marginTop","2em"),Object(r.a)(t,"marginBottom","1em"),Object(r.a)(t,"borderRadius","300px"),t)},G," Expenses"),c.a.createElement(x,{cost:e.expenses.cost,attendant:e.attendant,expenseTitle:e.expenses.title,expenseBody:e.expenses.body,expenseDate:e.date,expenseTime:e.time,id:e.id,deleteExpense:function(){return g(e.id)}}))})):c.a.createElement("h1",{style:(s={color:"white",fontSize:"1em",textTransform:"uppercase",width:"fit-content",padding:"0.5em 0.9em",backgroundColor:"white"},Object(r.a)(s,"color","black"),Object(r.a)(s,"marginTop","2em"),Object(r.a)(s,"borderRadius","300px"),s)},"no expenses to display")))))))},Q=(a(68),function(e){var t=new Date,a="".concat(t.getDate()," ").concat(t.getMonth()+1," ").concat(t.getFullYear()),o=Object(d.g)().id;console.log(o);var l=f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("transactions").doc(a).collection("sales");Object(n.useEffect)((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("transactions").doc(a).collection("sales").where("id","==",parseInt(o)).get().then((function(e){e.docs.forEach((function(e){u(e.data())}))}))}),[]);var r=Object(n.useState)(),s=Object(i.a)(r,2),m=s[0],u=s[1],p=Object(n.useState)(!0),E=Object(i.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)(""),v=Object(i.a)(g,2),O=v[0],j=v[1];return b?c.a.createElement("div",{id:"soldstockpage"},c.a.createElement(k,{signOut:e.signOut,userImg:e.userImg}),m?c.a.createElement("div",{className:"soldstockMain"},c.a.createElement("div",{className:"details","data-print":"noPrint"},c.a.createElement("div",{className:"itemDetails"},c.a.createElement("div",{className:"itemDetailsHeader"},c.a.createElement("h3",{className:"label"},"Item Details"),c.a.createElement("div",{onClick:function(){var t=window.location.href.split("/").length-2,a=window.location.href.split("/")[t];j(a),l.where("id","==",parseInt(o)).get().then((function(t){t.forEach((function(t){t.ref.delete().then((function(){f.firestore().collection("approved").doc(e.approvedUser).collection("store").doc(e.storeName).collection("stocks").doc(m.stockName.toLowerCase()).get().then((function(e){e.ref.update({stockQuantity:f.firestore.FieldValue.increment(m.stockQuantity)}).then((function(){h(!1)}))}))}))}))}))},className:"del"})),c.a.createElement("div",{className:"detailItems"},c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"stockName"},"Stock Name"),c.a.createElement("input",{id:"stockName","data-fill":"false",value:m.stockName})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"attendant"},"Attendant"),c.a.createElement("input",{id:"attendant","data-fill":"false",value:m.staffInCharge})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"Quantity"},"Quantity"),c.a.createElement("input",{id:"Quantity","data-fill":"false",value:m.stockQuantity})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"sellingPrice"},"Selling Price"),c.a.createElement("input",{id:"sellingPrice","data-fill":"false",value:m.sellingPrice})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"purchasePrice"},"Purchase Price"),c.a.createElement("input",{id:"purchasePrice","data-fill":"false",value:m.purchasePrice})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"totalPrice"},"Total Price"),c.a.createElement("input",{id:"totalPrice","data-fill":"false",value:m.totalAmount})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"totalPrice"},"IMEI"),c.a.createElement("input",{id:"IMEI","data-fill":"false",value:m.imei})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"dateofsale"},"Date Of Sale"),c.a.createElement("input",{id:"dateofsale","data-fill":"false",value:a.split(" ").join("/")})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"timesold"},"Time Sold"),c.a.createElement("input",{id:"dateofsale","data-fill":"false",value:m.time}))),c.a.createElement("h3",{className:"label",style:{marginTop:"3em"}},"Customer Details"),c.a.createElement("div",{id:"detailItems"},c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerName"},"Customer Name"),c.a.createElement("input",{id:"customerName","data-fill":"false",value:m.customerName})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerAddress"},"Customer Address"),c.a.createElement("input",{id:"customerAddress","data-fill":"false",value:m.customerAddress})),c.a.createElement("div",{className:"inputItems"},c.a.createElement("label",{htmlFor:"customerPhoneNumber"},"Customer Phone No."),c.a.createElement("input",{id:"stoccustomerPhoneNumberkName","data-fill":"false",value:m.customerPhoneNumber}))))),c.a.createElement("div",{className:"printWindow"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Leumastek Phones"),c.a.createElement("h3",null," ",e.storeName," branch "),c.a.createElement("h3",null,"FOR INQUIRES, PLEASE CALL ",c.a.createElement("br",null)," 070-8162-1699"),c.a.createElement("h5",null,c.a.createElement("b",null,"Date: "),m.date.split(" ").join("/")),c.a.createElement("h5",null,c.a.createElement("b",null,"Time: "),m.time),c.a.createElement("h5",null,c.a.createElement("b",null,"Customer Name: "),m.customerName),c.a.createElement("h5",null,c.a.createElement("b",null,"imei: "),m.imei)),c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"top"},c.a.createElement("p",null,"Goods Bought"),c.a.createElement("p",null,"Qty"),c.a.createElement("p",null,"Unit Price")),c.a.createElement("div",{className:"data"},c.a.createElement("h3",null," ",m.stockName," "),c.a.createElement("h3",null," ",m.stockQuantity," "),c.a.createElement("h3",null," ",m.sellingPrice.toLocaleString()," ")),c.a.createElement("div",{className:"total"},c.a.createElement("h2",null,"Total:"),c.a.createElement("h2",null,m.totalAmount.toLocaleString())),c.a.createElement("p",{id:"note"},"NB: Customers are advised to check their goods properly before acceptance as we take no responsibility of acceptance of returned goods. Goods sold in good condition are not returnable. No refund of money after payment.")),c.a.createElement("button",{onClick:function(){window.print()}},c.a.createElement("div",{id:"printer"}),"Print Receipt"))):c.a.createElement("h2",{"data-print":"noPrint"},"fetching data")):c.a.createElement(d.a,{to:"/manage/".concat(O)})}),U=function(){var e=f.auth().currentUser,t=function(e){h(e)},a=function(e){f.firestore().collection("approved").doc("bolu").collection("store").doc(e).delete().then((function(e){}))};Object(n.useEffect)((function(){var e=[];f.firestore().collection("approved").doc("bolu").collection("store").where("show","==",!0).get().then((function(t){t.docs.forEach((function(t){e.push(t.data())})),pe(e),e=[]}))}),[]);var o=function(e){oe(e)},l=function(t,a){if(t.length>0&&a.pin.length>4){var n=new Date,c="".concat(n.getDate()," ").concat(n.getMonth()," ").concat(n.getFullYear());se("processing");f.firestore().collection("approved").doc("bolu").collection("store").doc(t.toLowerCase()).set({storeName:t.toLowerCase(),attendants:[{name:a.name,pin:a.pin}],createdBy:e.displayName,dateAdded:c,show:!0}).then((function(e){f.firestore().collection("approved").doc("bolu").collection("stock").get().then((function(e){e.docs.forEach((function(e){f.firestore().collection("approved").doc("bolu").collection("store").doc(t.toLowerCase()).collection("stocks").doc(e.data().stockName.toLowerCase()).set(Object(s.a)(Object(s.a)({},e.data()),{},{stockQuantity:0})).then((function(e){}))}))})),se("done"),setTimeout((function(){se("create store")}),1e3)}))}},u=function(t){var a=new Date;X("please wait");var n="".concat(a.getDate()," ").concat(a.getMonth()," ").concat(a.getFullYear());f.firestore().collection("approved").doc("bolu").collection("stock").doc(t.stockName.toLowerCase()).set(Object(s.a)(Object(s.a)({},t),{},{date:n,id:"".concat(a.getTime()),adminInCharge:e.displayName})).then((function(c){ue.forEach((function(c){f.firestore().collection("approved").doc("bolu").collection("store").doc(c.storeName).collection("stocks").doc(t.stockName.toLowerCase()).set(Object(s.a)(Object(s.a)({},t),{},{date:n,id:"".concat(a.getTime()),adminInCharge:e.displayName,stockQuantity:0}))})),X("done"),V("Stock has been added successfully"),K(!0);var o=setInterval((function(){K(!1),X("add to store"),l()}),1e3),l=function(){clearInterval(o)}})).catch((function(e){V("There was an error, try again.")}))},p=Object(n.useState)(""),E=Object(i.a)(p,2),b=E[0],h=E[1],v=function(e){f.auth().signOut().then((function(){return x(!1)})).catch((function(e){console.error(e)}))};f.auth().onAuthStateChanged((function(e){e?(f.auth().currentUser.displayName.toLowerCase().split(" ").forEach((function(e){"akpan"!==e&&"james"!==e&&"samuel"!==e&&"boluwatife"!==e&&"leumastek"!==e||Ne(!0)})),x(!0),F(e.photoURL)):x(!1)}));var k=Object(n.useState)(!1),y=Object(i.a)(k,2),N=y[0],x=y[1],U=Object(n.useState)(""),L=Object(i.a)(U,2),B=L[0],F=L[1],T=Object(n.useState)(0),D=Object(i.a)(T,2),A=D[0],M=(D[1],Object(n.useState)({})),R=Object(i.a)(M,2),W=R[0],z=(R[1],Object(n.useState)("Stock has been added successfully")),H=Object(i.a)(z,2),Y=H[0],V=H[1],G=Object(n.useState)(!1),q=Object(i.a)(G,2),J=q[0],K=q[1],Z=Object(n.useState)("add to store"),$=Object(i.a)(Z,2),_=$[0],X=$[1],ee=Object(n.useState)([]),te=Object(i.a)(ee,2),ae=(te[0],te[1],Object(n.useState)(!0)),ne=Object(i.a)(ae,2),ce=ne[0],oe=ne[1],le=Object(n.useState)("create store"),re=Object(i.a)(le,2),ie=re[0],se=re[1],me=Object(n.useState)([]),de=Object(i.a)(me,2),ue=de[0],pe=de[1],Ee=Object(n.useState)([]),be=Object(i.a)(Ee,2),he=be[0],fe=(be[1],Object(n.useState)()),ge=Object(i.a)(fe,2),ve=ge[0],ke=ge[1],Oe=Object(n.useState)(!1),je=Object(i.a)(Oe,2),ye=je[0],Ne=je[1];return N?c.a.createElement(m.a,null,c.a.createElement(d.b,null,c.a.createElement(d.a,{to:"/manage"})),c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/store",component:function(){var e;return c.a.createElement(O,(e={approvedUser:"bolu",admin:ye,loggedIn:N,userImg:B,cashTotal:A,signOut:v},Object(r.a)(e,"cashTotal",W.cashTotal),Object(r.a)(e,"cashReturn",W.cashReturn),Object(r.a)(e,"cashProfit",W.cashProfit),e))}}),c.a.createElement(d.b,{path:"/addstock",component:function(){return c.a.createElement(j,{loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu",PushItem:u,addedStock:Y,ShowSucess:J,addStockBttn:_})}}),c.a.createElement(d.b,{exact:!0,path:"/stocks",component:function(){return c.a.createElement(S,{loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu"})}}),c.a.createElement(d.b,{exact:!0,path:"/stocks/:id",component:function(){return c.a.createElement(w,{admin:ye,storesList:ue,loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu",redirectStockPage:ce,redirectStockPageHandler:o})}}),c.a.createElement(d.b,{exact:!0,path:"/addstore",component:function(){return c.a.createElement(I,{loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu",makeNewStore:l,buttonText:ie})}}),c.a.createElement(d.b,{exact:!0,path:"/manage",component:function(){return c.a.createElement(P,{loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu",storeList:ue,deleteStore:a})}}),c.a.createElement(d.b,{exact:!0,path:"/manage/:id",component:function(){return c.a.createElement(C,{admin:ye,setCurrentStore:t,StoreStock:he,loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu",setOverViewDate:function(e){return ke(e)}})}}),c.a.createElement(d.b,{path:"/manage/:id/:id",component:function(){return c.a.createElement(Q,{overViewDate:ve,storeName:b,loggedIn:N,signOut:v,userImg:B,approvedUser:"bolu"})}}))):c.a.createElement(m.a,{className:"App"},c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/",component:function(){return c.a.createElement(g,{approvedUser:"bolu"})}}),c.a.createElement(d.b,{exact:!0,path:"/store",component:function(){return c.a.createElement(O,{approvedUser:"bolu"})}}),c.a.createElement(d.b,{path:"/addstock",component:j}),c.a.createElement(d.b,{path:"/",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.1587ea99.chunk.js.map