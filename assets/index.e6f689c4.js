var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&r(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&r(e,a,t[a]);return e};import{C as s,d as c,p as d,a as u,o as m,c as p,w as g,b as h,r as v,e as b,f,u as _,g as E,h as y,i as k,F as S,j as x,t as w,k as T,T as O,l as L,m as A,n as I,q as C,s as M,v as j,x as D,y as P,z as R,A as V,B as F,D as B,E as N,G as q,H,K as z,I as G,J as U,L as J,M as $,N as K,O as W,P as Q,R as X,_ as Y}from"./vendor.8acb95ea.js";var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{title:"VUE3-VITE-TEMPLATE",fixedHeader:!1,sideBarLogo:!0,showSettings:!0}});const{title:ee,fixedHeader:te,sideBarLogo:ae,showSettings:oe}=Z.default,ne={namespaced:!0,state:{title:ee,fixedHeader:te,sideBarLogo:ae,showSettings:oe,tableHeight:600},mutations:{setTableHeight:(e,t)=>{e.tableHeight=t}},actions:{}},le={namespaced:!0,state:{sidebar:{opened:!0,withoutAnimation:!1},device:"desktop"},mutations:{TOGGLE_SIDEBAR:e=>{e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?s.set("sidebarStatus",1):s.set("sidebarStatus",0)}},actions:{toggleSideBar({commit:e}){e("TOGGLE_SIDEBAR")}},getters:{getSidebarState:e=>e.sidebar.opened,getSidebarAnimation:e=>e.sidebar.withoutAnimation,getDeviceState:e=>e.device}},re={namespaced:!0,state:{messageNum:5},mutations:{UPDATE_MESSAGE:(e,t)=>{e.messageNum-=t.num}},actions:{updateMessageNum({commit:e}){e("UPDATE_MESSAGE",{num:1})}},getters:{getMessageNum:e=>e.messageNum}};let ie;const se={},ce=function(e,t){if(!t)return e();if(void 0===ie){const e=document.createElement("link").relList;ie=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in se)return;se[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":ie,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};var de=c({name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},emits:["toggleClick"],setup:(e,{emit:t})=>({toggleClick:()=>{t("toggleClick")}})});const ue=g();d("data-v-ce24e684");const me=h("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0\n      4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4\n       0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0\n       8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4\n        0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4\n        381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"},null,-1);u();const pe=ue(((e,t,a,o,n,l)=>(m(),p("div",{style:{padding:"0 15px"},onClick:t[1]||(t[1]=(...t)=>e.toggleClick&&e.toggleClick(...t))},[(m(),p("svg",{class:[{"is-active":e.isActive},"hamburger"],viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},[me],2))]))));de.render=pe,de.__scopeId="data-v-ce24e684";var ge=c({setup(){const e=v([]),t=_(),a=E(),o=()=>{const a=t.matched.filter((e=>e.meta&&e.meta.title));e.value=a.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))};return b((()=>{o()})),f(t,(()=>{o()})),{levelList:e,handleLink:e=>{const{redirect:o,path:n}=e;o&&a.push(o),a.push((e=>{const{params:a}=t;return y(e)(a)})(n))}}}});const he=g();d("data-v-41119dbf");const ve={key:0,class:"no-redirect"};u();const be=he(((e,t,a,o,n,l)=>{const r=k("el-breadcrumb-item"),i=k("el-breadcrumb");return m(),p(i,{class:"app-breadcremb","separator-class":"el-icon-arrow-right"},{default:he((()=>[h(O,{name:"breadcrumb"},{default:he((()=>[(m(!0),p(S,null,x(e.levelList,((t,a)=>(m(),p(r,{key:t.path},{default:he((()=>["noRedirect"===t.redirect||a==e.levelList.length-1?(m(),p("span",ve,w(t.meta.title),1)):(m(),p("a",{key:1,onClick:T((a=>e.handleLink(t)),["prevent"])},w(t.meta.title),9,["onClick"]))])),_:2},1024)))),128))])),_:1})])),_:1})}));ge.render=be,ge.__scopeId="data-v-41119dbf";var fe=c({setup(){const e=xt(),t=E(),a=v(),o=L((()=>e.state.permissionModule.routes)),n=A({options:[],value:""}),l={shouldSort:!0,threshold:.7,location:0,distance:150,maxPatternLength:32,minMatchCharLength:1,keys:[{name:"title",weight:.7},{name:"path",weight:.3}]},r=(e,t="/",a=[])=>{var o,n;let l=[];for(const i of e)if(!(null==(o=null==i?void 0:i.meta)?void 0:o.hidden)){const e={path:M.exports.resolve(t,i.path),title:[...a]};if((null==(n=null==i?void 0:i.meta)?void 0:n.title)&&(e.title=[...e.title,i.meta.title],l.push(e)),i.children){const t=r(i.children,e.path,e.title);t.length>=1&&(l=[...l,...t])}}return console.log("list is ",l),l};return I((()=>{console.log(o.value);const e=r(o.value);var t;t=e,a.value=new j(t,l)})),i({handleChange:e=>{t.push(e.path),n.value="",n.options=[]},querySearch:e=>{n.options=""!==e?a.value.search(e):[]}},C(n))}});const _e=g();d("data-v-48317674");const Ee={id:"Serach",class:"search-container"},ye=h("i",{class:"el-input__icon el-icon-search"},null,-1);u();const ke=_e(((e,t,a,o,n,l)=>{const r=k("el-option"),i=k("el-select");return m(),p("div",Ee,[h(i,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t),"remote-method":e.querySearch,filterable:"","default-first-option":"",remote:"",placeholder:"请输入关键字搜索",onChange:e.handleChange},{prefix:_e((()=>[ye])),default:_e((()=>[(m(!0),p(S,null,x(e.options,(({item:e})=>(m(),p(r,{key:e.path,value:e,label:e.title.join(" > ")},null,8,["value","label"])))),128))])),_:1},8,["modelValue","remote-method","onChange"])])}));fe.render=ke,fe.__scopeId="data-v-48317674";var Se="./assets/avatar-default.3812aa72.jpg";function xe(){const e=document.body;(null==e?void 0:e.webkitRequestFullScreen)?e.webkitRequestFullScreen():(null==e?void 0:e.mozRequestFullScreen)?e.mozRequestFullScreen():(null==e?void 0:e.requestFullscreen)||(null==e?void 0:e.requestFullScreen)?e.requestFullscreen():D.warning("浏览器不支持全屏！")}function we(){const e=window.parent.document;(null==e?void 0:e.webkitCancelFullScreen)?e.webkitCancelFullScreen():(null==e?void 0:e.mozCancelFullScreen)?e.mozCancelFullScreen():(null==e?void 0:e.cancelFullScreen)?e.cancelFullScreen():(null==e?void 0:e.msExitFullscreen)?e.msExitFullscreen():(null==e?void 0:e.exitFullscreen)?e.exitFullscreen():D.warning("浏览器不支持全屏！")}var Te=c({name:"Navbar",components:{Hamburger:de,Breadcrumb:ge,Search:fe},setup(){const e=E(),t=xt(),a=L((()=>t.getters["appModule/getSidebarState"])),o=L((()=>{var e,t;return null!=(t=null==(e=JSON.parse(localStorage.getItem("userInfo")))?void 0:e.userName)?t:"极客恰恰"})),n=v(!1);return{messageNum:L((()=>t.getters["messageModule/getMessageNum"])),toShowFullScreen:()=>{xe(),n.value=!0},toExitFullScreen:()=>{we(),n.value=!1},toFullScreen:xe,exitFullScreen:we,fullScreen:n,nickname:o,avatar:Se,toggleSideBar:()=>{console.log("into toggleSideBar"),t.dispatch("appModule/toggleSideBar")},opened:a,logout:()=>{sessionStorage.removeItem("auth"),e.replace("/login")}}}});const Oe=g();d("data-v-27046ce8");const Le={class:"navbar"},Ae={class:"right-menu"},Ie={id:"Message"},Ce=h("i",{class:"el-icon-message-solid"},null,-1),Me=V("mike 回复了你的邮件"),je=V("您有5个新任务"),De=V("您已经和Jone成为了好友"),Pe=V("项目验收通知"),Re=V("新会议通知"),Ve={class:"avatar-wrapper"},Fe={class:"nickname"},Be=V("首页"),Ne=V("个人中心"),qe=V("个人设置");u();const He=Oe(((e,t,a,o,n,l)=>{const r=k("hamburger"),i=k("breadcrumb"),s=k("search"),c=k("el-button"),d=k("el-badge"),u=k("el-dropdown-item"),g=k("el-dropdown-menu"),v=k("el-dropdown"),b=k("el-tooltip"),f=k("el-avatar"),_=k("router-link");return m(),p("div",Le,[h(r,{id:"Hamburger","is-active":e.opened,class:"hamburger-container",onToggleClick:e.toggleSideBar},null,8,["is-active","onToggleClick"]),h(i,{class:"breadcrumb-container"}),h("div",Ae,[h(s),h("div",Ie,[h(v,null,{dropdown:Oe((()=>[h(g,null,{default:Oe((()=>[h(u,{command:"a"},{default:Oe((()=>[Me])),_:1}),h(u,{command:"b"},{default:Oe((()=>[je])),_:1}),h(u,{command:"c"},{default:Oe((()=>[De])),_:1}),h(u,{command:"d"},{default:Oe((()=>[Pe])),_:1}),h(u,{command:"e",divided:""},{default:Oe((()=>[Re])),_:1})])),_:1})])),default:Oe((()=>[h(d,{value:e.messageNum,max:99,class:"message-badge",type:"danger"},{default:Oe((()=>[h(c,{class:"message"},{default:Oe((()=>[Ce])),_:1})])),_:1},8,["value"])])),_:1})]),h(c,{id:"fullScreen",class:"full-screen"},{default:Oe((()=>[h(b,{content:"全屏浏览",effect:"dark",placement:"left"},{default:Oe((()=>[P(h("i",{class:"el-icon-full-screen",onClick:t[1]||(t[1]=t=>e.toShowFullScreen())},null,512),[[R,0==e.fullScreen]])])),_:1}),h(b,{content:"退出全屏",effect:"dark",placement:"left"},{default:Oe((()=>[P(h("i",{class:"el-icon-bottom-left",onClick:t[2]||(t[2]=t=>e.toExitFullScreen())},null,512),[[R,1==e.fullScreen]])])),_:1})])),_:1}),h(v,{class:"avatar-container",trigger:"hover"},{dropdown:Oe((()=>[h(g,{class:"user-dropdown"},{default:Oe((()=>[h(_,{to:"/"},{default:Oe((()=>[h(u,null,{default:Oe((()=>[Be])),_:1})])),_:1}),h(_,{to:"/personal/personalCenter"},{default:Oe((()=>[h(u,null,{default:Oe((()=>[Ne])),_:1})])),_:1}),h(_,{to:"/personal/personalSetting"},{default:Oe((()=>[h(u,null,{default:Oe((()=>[qe])),_:1})])),_:1}),h(u,{divided:""},{default:Oe((()=>[h("span",{style:{display:"block"},onClick:t[3]||(t[3]=(...t)=>e.logout&&e.logout(...t))},"退出登录")])),_:1})])),_:1})])),default:Oe((()=>[h("div",Ve,[h(f,{src:e.avatar},null,8,["src"]),h("div",Fe,w(e.nickname),1)])])),_:1})])])}));Te.render=He,Te.__scopeId="data-v-27046ce8";var ze=c({name:"SidebarItem",props:{item:{type:Object,required:!0},isNested:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(e){const o=v(),n=F(e,"basePath");b((()=>{console.log("basePath.value",n.value)}));return{onlyOneChild:o,hasOneShowingChild:(e=[],n)=>{const l=e.filter((e=>{var t;return!(null==(t=null==e?void 0:e.meta)?void 0:t.hidden)&&(o.value=e,!0)}));return 1===l.length||0===l.length&&(o.value=(r=i({},n),t(r,a({noShowingChildren:!0}))),!0);var r}}}});const Ge={key:0,class:"menu-wrapper"};ze.render=function(e,t,a,o,n,l){const r=k("el-menu-item"),i=k("sidebar-item",!0),s=k("el-submenu");return e.item.meta.hidden?N("",!0):(m(),p("div",Ge,[e.hasOneShowingChild(e.item.children,e.item)?(m(),p(r,{key:e.item.path,index:e.item.path,route:e.item.path},{title:B((()=>[V(w(e.item.meta.title),1)])),default:B((()=>[h("i",{class:e.item.meta.icon},null,2)])),_:1},8,["index","route"])):(m(),p(s,{key:1,ref:"subMenu",index:e.item.path,"popper-append-to-body":""},{title:B((()=>[h("i",{class:e.item.meta.icon},null,2),h("span",null,w(e.item.meta.title),1)])),default:B((()=>[(m(!0),p(S,null,x(e.item.children,(e=>(m(),p(i,{key:e.path,"is-nest":!0,item:e,"base-path":e.path,class:"nest-menu"},null,8,["item","base-path"])))),128))])),_:1},8,["index"]))]))};var Ue="./assets/logo.03d6d6da.png",Je=c({name:"SidebarLogo",props:{collapse:{type:Boolean,required:!0}},setup(){const e=xt(),t=A({title:L((()=>{var t,a;return null==(a=null==(t=null==e?void 0:e.state)?void 0:t.settingsModule)?void 0:a.title}))});return i({logo:Ue},C(t))}});const $e=g();d("data-v-b501aa66");const Ke={class:"sidebar-logo-container"},We={key:1,class:"sidebar-title"},Qe={class:"sidebar-title"};u();const Xe=$e(((e,t,a,o,n,l)=>{const r=k("router-link");return m(),p("div",Ke,[h(q,{name:"sidebarLogoFade"},{default:$e((()=>[e.collapse?(m(),p(r,{key:"collapse",class:"sidebar-logo-link",to:"/"},{default:$e((()=>[e.logo?(m(),p("img",{key:0,src:e.logo,class:"sidebar-logo"},null,8,["src"])):(m(),p("h1",We,w(e.title),1))])),_:1})):(m(),p(r,{key:"expand",class:"sidebar-logo-link",to:"/"},{default:$e((()=>[e.logo?(m(),p("img",{key:0,src:e.logo,class:"sidebar-logo"},null,8,["src"])):N("",!0),h("h1",Qe,w(e.title),1)])),_:1}))])),_:1})])}));Je.render=Xe,Je.__scopeId="data-v-b501aa66";var Ye=c({components:{logo:Je,sidebarItem:ze},setup(){const e=E(),t=xt(),a=L((()=>!t.getters["appModule/getSidebarState"])),o=L((()=>t.state.settingsModule.sideBarLogo)),n=L((()=>t.state.permissionModule.routes)),l=L((()=>e.currentRoute.value.fullPath));b((()=>{console.log("activeMenu.value",l.value)}));return{activeMenu:l,resolvePath:e=>{if(/^(https?:|mailto:|tel:)/.test(e))return e},routes:n,showLogo:o,isCollapse:a,handleOpen:(e,t)=>{console.log("key is ",e),console.log("keyPath is ",t)},handleClose:(e,t)=>{console.log(e,t)},handleSelect:t=>{console.log("handleSelect is ",t),e.replace({path:t})}}}});const Ze=g(),et=Ze(((e,t,a,o,n,l)=>{const r=k("logo"),i=k("sidebar-item"),s=k("el-menu"),c=k("el-scrollbar");return m(),p("div",{class:{"has-logo":e.showLogo}},[e.showLogo?(m(),p(r,{key:0,collapse:e.isCollapse},null,8,["collapse"])):N("",!0),h(c,{"wrap-class":"scrollbar-wrapper"},{default:Ze((()=>[h(s,{router:!0,"unique-opened":!1,"default-active":e.activeMenu,class:"el-menu-vertical",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",onOpen:e.handleOpen,onClose:e.handleClose,onSelect:e.handleSelect},{default:Ze((()=>[(m(!0),p(S,null,x(e.routes,(e=>(m(),p(i,{key:e.path,item:e,"base-path":e.path},null,8,["item","base-path"])))),128))])),_:1},8,["default-active","collapse","onOpen","onClose","onSelect"])])),_:1})],2)}));Ye.render=et,Ye.__scopeId="data-v-bbe2e4ce";var tt=c({name:"AppMain",setup(){const e=xt(),t=L((()=>e.getters["tabModule/getTabsOption"]));console.log("tabsOption.value is ",t.value);const a=L((()=>e.getters["tabModule/getCurrentIndex"])),o=E();return{tabsOption:t,currentIndex:a,removeTab:n=>{"/home"!==n&&(e.commit("tabModule/DELETE_TAB",n),a.value===n&&(t.value&&t.value.length?(e.commit("tabModule/SET_TAB",t.value[t.value.length-1].route),o.replace({path:a.value})):o.replace({path:"/"})))},clickTab:t=>{e.commit("tabModule/SET_TAB",t.paneName),o.replace({path:a.value})}}}});const at=g();d("data-v-19035c17");const ot={class:"app-main"};u();const nt=at(((e,t,a,o,n,l)=>{const r=k("router-view"),i=k("el-tab-pane"),s=k("el-tabs");return m(),p("section",ot,[h(s,{id:"Tabs",modelValue:e.currentIndex,"onUpdate:modelValue":t[1]||(t[1]=t=>e.currentIndex=t),type:"card",closable:"",onTabClick:e.clickTab,onTabRemove:e.removeTab},{default:at((()=>[(m(!0),p(S,null,x(e.tabsOption,(t=>(m(),p(i,{key:t.route,closable:"/home"!==t.route,label:t.title,name:t.route},{default:at((()=>[e.$route.meta.keepAlive?(m(),p(r,{key:0},{default:at((({Component:e})=>[h(q,{name:"fade",mode:"out-in"},{default:at((()=>[(m(),p(H(e)))])),_:2},1024)])),_:1})):N("",!0),e.$route.meta.keepAlive?N("",!0):(m(),p(r,{key:1},{default:at((({Component:e})=>[h(q,{name:"fade",mode:"out-in"},{default:at((()=>[(m(),p(z,null,[(m(),p(H(e)))],1024))])),_:2},1024)])),_:1}))])),_:2},1032,["closable","label","name"])))),128))])),_:1},8,["modelValue","onTabClick","onTabRemove"])])}));tt.render=nt,tt.__scopeId="data-v-19035c17";var lt=c({name:"RightDrawer",props:{buttonTop:{default:250,type:Number}},setup:()=>({openDrawer:v(!1)})});const rt=g();d("data-v-fd5b97de");const it={class:"rightDrawer"},st={class:"slot-body"},ct={class:"rightPanel"};u();const dt=rt(((e,t,a,o,n,l)=>{const r=k("el-drawer");return m(),p("div",it,[h(r,{modelValue:e.openDrawer,"onUpdate:modelValue":t[1]||(t[1]=t=>e.openDrawer=t),"modal-append-to-body":!1,"with-header":!1},{default:rt((()=>[h("div",st,[G(e.$slots,"default",{},void 0,!0)])])),_:3},8,["modelValue"]),h("div",ct,[h("div",{class:["handle-button",{"handle-button-close":!e.openDrawer}],style:{top:e.buttonTop+"px"},onClick:t[2]||(t[2]=t=>e.openDrawer=!e.openDrawer)},[h("i",{class:e.openDrawer?"el-icon-close":"el-icon-setting"},null,2)],6)])])}));lt.render=dt,lt.__scopeId="data-v-fd5b97de";var ut=c({name:"Layout",components:{Navbar:Te,Sidebar:Ye,AppMain:tt,RightDrawer:lt},setup(){const e=xt();console.log(e);const t=A({fixedHeader:L((()=>{var t,a;return null==(a=null==(t=null==e?void 0:e.state)?void 0:t.settingsModule)?void 0:a.fixedHeader}))}),a=v("rgba(255, 69, 0, 0.68)"),o=v(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]),n=L((()=>e.state.settingsModule.showSettings)),l=L((()=>e.getters["appModule/getSidebarState"])),r=L((()=>e.getters["appModule/getDeviceState"])),s=L((()=>e.getters["appModule/getSidebarAnimation"])),c=L((()=>({hideSidebar:!l.value,openSidebar:l.value,withoutAnimation:s.value,mobile:"mobile"===r.value})));return i({color:a,predefineColors:o,classObj:c,handleChangeTheme:()=>{console.log("color",a.value)},showSetting:n},C(t))}});const mt=g();d("data-v-4a1f5c5f");const pt={class:"main-container"},gt={class:"setting-item"},ht=h("div",{class:"setting-draw-title"}," 主题色 ",-1),vt=h("div",{class:"divider"},null,-1);u();const bt=mt(((e,t,a,o,n,l)=>{const r=k("Sidebar"),i=k("navbar"),s=k("AppMain"),c=k("el-color-picker"),d=k("RightDrawer");return m(),p("div",{class:[e.classObj,"app-wrapper"]},[h(r,{class:"sidebar-container"}),h("div",pt,[h("div",{class:{"fixed-header":e.fixedHeader}},[h(i)],2),h(s),e.showSetting?(m(),p(d,{key:0},{default:mt((()=>[h("div",gt,[ht,h(c,{modelValue:e.color,"onUpdate:modelValue":t[1]||(t[1]=t=>e.color=t),"show-alpha":"",predefine:e.predefineColors,onChange:e.handleChangeTheme},null,8,["modelValue","predefine","onChange"]),vt])])),_:1})):N("",!0)])],2)}));ut.render=bt,ut.__scopeId="data-v-4a1f5c5f";const ft=[{path:"/",component:ut,redirect:"/home",meta:{title:"首页",icon:"el-icon-s-home"},children:[{path:"/home",name:"home",component:()=>ce((()=>import("./home.b760186e.js")),["./assets/home.b760186e.js","./assets/home.eca67fcb.css","./assets/request.b4a0e2d7.js","./assets/vendor.8acb95ea.js"]),meta:{title:"首页",icon:"home"}}]},{path:"/login",name:"登录",component:()=>ce((()=>import("./login.edf31c96.js")),["./assets/login.edf31c96.js","./assets/login.c87488b6.css","./assets/vendor.8acb95ea.js","./assets/request.b4a0e2d7.js"]),meta:{title:"登录",hidden:!0}},{path:"/noFound",name:"NoFound",component:()=>ce((()=>import("./noFound.6a561463.js")),["./assets/noFound.6a561463.js","./assets/noFound.2dcac2b1.css","./assets/vendor.8acb95ea.js"]),meta:{title:"404",hidden:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>ce((()=>import("./noFound.6a561463.js")),["./assets/noFound.6a561463.js","./assets/noFound.2dcac2b1.css","./assets/vendor.8acb95ea.js"]),meta:{title:"not-found",hidden:!0}}],_t=[{path:"/guide",component:ut,redirect:"/guide/guide",meta:{title:"引导页",icon:"el-icon-guide"},children:[{path:"/guide/guide",name:"guide",component:()=>ce((()=>import("./index.91f18026.js")),["./assets/index.91f18026.js","./assets/index.dfd64421.css","./assets/vendor.8acb95ea.js"]),meta:{title:"引导",icon:"el-icon-guide"}}]},{path:"/dashboard",component:ut,redirect:"/dashboard/workplace",meta:{title:"Dashboard",icon:"el-icon-data-analysis"},children:[{path:"/dashboard/workplace",name:"workplace",component:()=>ce((()=>import("./workplace.e67a3681.js")),["./assets/workplace.e67a3681.js","./assets/workplace.1ff7dbf2.css","./assets/vendor.8acb95ea.js"]),meta:{title:"工作台",icon:"home"}},{path:"/dashboard/analysis",name:"analysis",component:()=>ce((()=>import("./analysis.e947c29e.js")),["./assets/analysis.e947c29e.js","./assets/analysis.e7c054be.css","./assets/vendor.8acb95ea.js"]),meta:{title:"分析页",icon:"home"}}]},{path:"/copy",component:ut,redirect:"/copy/copyText",meta:{title:"复制文本",icon:"el-icon-edit-outline"},children:[{path:"/copy/copyText",name:"copyText",component:()=>ce((()=>import("./index.306ca802.js")),["./assets/index.306ca802.js","./assets/index.c5f8306f.css","./assets/vendor.8acb95ea.js"]),meta:{title:"复制文本",icon:"home"}}]},{path:"/excel",component:ut,redirect:"/excel/uploadExcel",meta:{title:"上传excel",icon:"el-icon-edit-outline"},children:[{path:"/excel/uploadExcel",name:"uploadExcel",component:()=>ce((()=>import("./uploadExcel.68edd204.js")),["./assets/uploadExcel.68edd204.js","./assets/uploadExcel.28f80ca2.css","./assets/vendor.8acb95ea.js","./assets/xlsx.30535f66.js"]),meta:{title:"上传excel",icon:"home"}},{path:"/excel/exportExcel",name:"exportExcel",component:()=>ce((()=>import("./exportExcel.71ee2fda.js")),["./assets/exportExcel.71ee2fda.js","./assets/vendor.8acb95ea.js"]),meta:{title:"导出excel",icon:"home"}}]},{path:"/table",component:ut,redirect:"/table/tableList",meta:{title:"列表页",icon:"el-icon-folder-opened"},children:[{path:"/table/tableList",name:"tableList",component:()=>ce((()=>import("./tableList.1a66a0e0.js")),["./assets/tableList.1a66a0e0.js","./assets/tableList.17543271.css","./assets/vendor.8acb95ea.js"]),meta:{title:"表格",icon:"el-icon-folder-opened"}}]},{path:"/form",component:ut,redirect:"/form/formInfo",meta:{title:"表单页",icon:"el-icon-s-grid"},children:[{path:"/form/formInfo",name:"formInfo",component:()=>ce((()=>import("./formInfo.bc7b7813.js")),["./assets/formInfo.bc7b7813.js","./assets/formInfo.385f1faa.css","./assets/vendor.8acb95ea.js"]),meta:{title:"基础表单",icon:"el-icon-s-grid"}},{path:"/form/stepForm",name:"stepForm",component:()=>ce((()=>import("./stepForm.3d2579e8.js")),["./assets/stepForm.3d2579e8.js","./assets/stepForm.80b0b8e0.css","./assets/vendor.8acb95ea.js"]),meta:{title:"分步表单",icon:"el-icon-s-grid"}},{path:"/form/advanceForm",name:"advanceForm",component:()=>ce((()=>import("./advanceForm.6c38094e.js")),["./assets/advanceForm.6c38094e.js","./assets/advanceForm.edbb2d0c.css","./assets/vendor.8acb95ea.js"]),meta:{title:"高级表单",icon:"el-icon-s-grid"}}]},{path:"/qrcode",component:ut,redirect:"/qrcode/qrcodeGen",meta:{title:"二维码",icon:"el-icon-c-scale-to-original"},children:[{path:"/qrcode/qrcodeGen",name:"qrcodeGen",component:()=>ce((()=>import("./qrcodeGen.2aefacd8.js")),["./assets/qrcodeGen.2aefacd8.js","./assets/qrcodeGen.cd9660bb.css","./assets/vendor.8acb95ea.js"]),meta:{title:"二维码",icon:"el-icon-c-scale-to-original"}}]},{path:"/dragable",component:ut,redirect:"/dragable/dragableComponent",meta:{title:"拖拽组件",icon:"el-icon-s-promotion"},children:[{path:"/dragable/dragableComponent",name:"dragableComponent",component:()=>ce((()=>import("./dragableComponent.5749f455.js")),["./assets/dragableComponent.5749f455.js","./assets/dragableComponent.6c487cba.css","./assets/vendor.8acb95ea.js"]),meta:{title:"拖拽组件",icon:"el-icon-s-promotion"}}]},{path:"/editor",component:ut,redirect:"/Editor/editorComponent",meta:{title:"编辑器组件",icon:"el-icon-edit"},children:[{path:"/Editor/markdownEditor",name:"markdownEditor",component:()=>ce((()=>import("./markdownEditor.c11a3e76.js")),["./assets/markdownEditor.c11a3e76.js","./assets/markdownEditor.a432e701.css","./assets/vendor.8acb95ea.js"]),meta:{title:"markdown编辑器",icon:"el-icon-edit"}},{path:"/Editor/richEditor",name:"richEditor",component:()=>ce((()=>import("./richEditor.7ec03498.js")),["./assets/richEditor.7ec03498.js","./assets/richEditor.8d19ea8e.css","./assets/vendor.8acb95ea.js"]),meta:{title:"富文本编辑器",icon:"el-icon-edit"}},{path:"/Editor/jsonEditor",name:"jsonEditor",component:()=>ce((()=>import("./jsonEditor.7db240ab.js")),["./assets/jsonEditor.7db240ab.js","./assets/jsonEditor.3dc015f8.css","./assets/vendor.8acb95ea.js"]),meta:{title:"json编辑器",icon:"el-icon-edit"}}]},{path:"/upload",component:ut,redirect:"/upload/uploadFile",meta:{title:"文件上传",icon:"el-icon-upload"},children:[{path:"/upload/uploadFile",name:"uploadFile",component:()=>ce((()=>import("./uplodFile.3b8932d5.js")),["./assets/uplodFile.3b8932d5.js","./assets/uplodFile.64e7a821.css","./assets/vendor.8acb95ea.js"]),meta:{title:"文件上传",icon:"home"}}]},{path:"/cropper",component:ut,redirect:"/cropper/cropFile",meta:{title:"图片裁剪",icon:"ic ic-tailor"},children:[{path:"/cropper/cropFile",name:"cropFile",component:()=>ce((()=>import("./cropFile.61ce769d.js")),["./assets/cropFile.61ce769d.js","./assets/cropFile.df6e9b52.css","./assets/vendor.8acb95ea.js"]),meta:{title:"图片裁剪",icon:"ic ic-tailor"}}]},{path:"/menu",component:ut,redirect:"/Menu/menuEdit",meta:{title:"菜单管理",icon:"ic ic-other"},children:[{path:"/Menu/menuEdit",name:"menuEdit",component:()=>ce((()=>import("./menuManage.548d38bd.js")),["./assets/menuManage.548d38bd.js","./assets/menuManage.8f0f2bf7.css","./assets/vendor.8acb95ea.js"]),meta:{title:"菜单管理",icon:"ic ic-other"}}]},{path:"/role",component:ut,redirect:"/Role/roleManage",meta:{title:"角色管理",icon:"ic ic-other"},children:[{path:"/Role/roleManage",name:"roleManage",component:()=>ce((()=>import("./rolesManage.c03b5eb5.js")),["./assets/rolesManage.c03b5eb5.js","./assets/rolesManage.19cf5028.css","./assets/vendor.8acb95ea.js"]),meta:{title:"角色管理",icon:"ic ic-other"}}]},{path:"/personal",component:ut,redirect:"/personal/personalCenter",meta:{title:"个人页",icon:"el-icon-user-solid"},children:[{path:"/personal/personalCenter",name:"personalCenter",component:()=>ce((()=>import("./personalCenter.64a18129.js")),["./assets/personalCenter.64a18129.js","./assets/personalCenter.0f3f2818.css","./assets/vendor.8acb95ea.js","./assets/request.b4a0e2d7.js"]),meta:{title:"个人中心",icon:"el-icon-user-solid"}},{path:"/personal/personalSetting",name:"personalSetting",component:()=>ce((()=>import("./personalSetting.61728a7f.js")),["./assets/personalSetting.61728a7f.js","./assets/personalSetting.ee4357e9.css","./assets/vendor.8acb95ea.js","./assets/request.b4a0e2d7.js"]),meta:{title:"个人设置",icon:"el-icon-user-solid"}}]}],Et=U({history:J(),scrollBehavior:()=>({top:0}),routes:ft});Et.beforeEach(((e,t,a)=>{kt.getters["tabModule/getTabsOption"].findIndex((t=>t.route===e.fullPath))>-1||e.meta.hidden||kt.commit("tabModule/ADD_TAB",{route:e.fullPath,title:e.meta.title,name:e.name}),kt.commit("tabModule/SET_TAB",e.fullPath),sessionStorage.getItem("auth")?(console.log("has authed"),a()):"/login"===e.path?(console.log("/login"),a()):(console.log("unauthed into login"),a({path:"/login",query:{redirect:e.fullPath}}))}));const yt={count:0},kt=$({state:()=>yt,mutations:{increment(e){e.count++}},actions:{increment(e){e.commit("increment")}},getters:{count:e=>e.count},modules:{settingsModule:ne,appModule:le,messageModule:re,permissionModule:{namespaced:!0,state:{roles:[],routes:ft},mutations:{SET_ROLES:(e,t)=>{e.roles=t},setRoutes:(e,t)=>{e.routes=ft.concat(t)}},actions:{getPermissonRoutes({commit:e}){const t=_t;for(const a of t)Et.addRoute(a);Et.options.routes=ft.concat(_t),e("setRoutes",t)}},getters:{getAccessRoutes:e=>e.routes}},tabModule:{namespaced:!0,state:{tabsOption:[{route:"/home",title:"首页",name:"home"}],currentIndex:"/home",breadcrumbList:[]},mutations:{ADD_TAB:(e,t)=>{e.tabsOption.push(t)},DELETE_TAB:(e,t)=>{const a=e.tabsOption.findIndex((e=>e.route===t));e.tabsOption.splice(a,1)},SET_TAB:(e,t)=>{e.currentIndex=t},CLEAR_TAB:e=>{e.tabsOption=[{route:"/home",title:"首页",name:"home"}]}},actions:{},getters:{getCurrentIndex:e=>e.currentIndex,getTabsOption:e=>e.tabsOption}}}}),St=Symbol("vue3-store");function xt(){return K(St)}var wt=c({name:"App",components:{},setup(){const e=xt();return(()=>{const{clientHeight:t}=document.body,a=Math.max(600,t-170);e.commit("settingsModule/setTableHeight",a)})(),{}}});const Tt={id:"app"};wt.render=function(e,t,a,o,n,l){const r=k("router-view");return m(),p("div",Tt,[h(r)])};Et.beforeEach(((e,t,a)=>{a()})),Et.afterEach((()=>{}));W.setup({timeout:"200-600"});W.mock("/api/auth/login","post",(e=>{const{account:t,password:a}=JSON.parse(e.body);return"admin"===t&&"admin"===a?{code:0,data:{userName:t},message:"成功"}:{code:1,data:null,message:"账户或者密码错误"}})),W.mock("/api/setting/basicInfo","post",(e=>{const{email:t,nickname:a,desc:o,mobile:n}=JSON.parse(e.body);return{code:0,data:{email:t,nickname:a,desc:o,mobile:n},message:"更新成功"}})),W.mock("/api/personal/tags","get",(()=>({code:0,data:{tags:["积极阳光","专注","认真负责","花痴"]},message:"成功"}))),W.mock("/api/data/world-population","get",(()=>({code:0,data:{dataSets:[{category:"frontEnd",value:1383222e4,x:"Vue-next"},{category:"frontEnd",value:1383221e4,x:"Vuex"},{category:"frontEnd",value:1383232300,x:"vue-router"},{category:"frontLib",value:1383221e4,x:"ElementPlus"},{category:"frontEnd",value:1383232200,x:"react"},{category:"frontEnd",value:13831322200,x:"antd"},{category:"frontEnd",value:13831322200,x:"antv"},{category:"lowcode",value:1383232400,x:"lowcode"},{category:"frontEnd",value:1383232400,x:"micro-frontend"},{category:"frontEnd",value:1383232400,x:"flutter"},{category:"frontEnd",value:1383232300,x:"微信小程序"},{category:"frontEnd",value:1383232e3,x:"Taro"},{category:"frontEnd",value:1383231e3,x:"抖音小程序"},{category:"frontEnd",value:1383236e3,x:"快手小程序"},{category:"frontEnd",value:138322e3,x:"UniApp"},{category:"frontEnd",value:138322e3,x:"NodeJS"},{category:"frontEnd",value:138322e3,x:"Koa"},{category:"frontEnd",value:130922e3,x:"Vite"},{category:"frontEnd",value:130922009,x:"VitePress"},{category:"frontEnd",value:130989e3,x:"TypeScript"},{category:"frontEnd",value:130989003,x:"stylus"},{category:"frontEnd",value:130989003,x:"less"},{category:"frontEnd",value:130989003,x:"sass"},{category:"frontEnd",value:130989010,x:"fidder"},{category:"frontEnd",value:130989015,x:"G2"},{category:"frontEnd",value:130989010,x:"mockjs"}]},message:"更新成功"}))),W.mock("/api/personal/tasks","get",(()=>({code:0,data:{tasks:[["2021-05-19",[{task:"读书看报"}]],["2021-05-20",[{task:"吃饭打屁"}]]]},message:"更新成功"}))),W.mock("/api/auth/roles","get",(()=>({code:0,data:["super","admin","nomal"],message:"成功"}))),W.mock("/api/home/swiperInfo","get",(()=>({code:0,data:[{name:"vue-next",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c588b8ab65a74d59aa379801136df4e0~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vuejs/docs-next-zh-cn"},{name:"vitejs",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7351d2dcd7846158604ac8bd57222b5~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/vitejs"},{name:"element-plus",itemSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48a7fd198df44cca9c0dc10a8047bbef~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/element-plus/element-plus"},{name:"tslang",itemSrc:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610fc57450884ceaae9578689663fe2f~tplv-k3u1fbpfcp-watermark.image",targetLink:"https://github.com/Microsoft/TypeScript"}],message:"成功"}))),kt.dispatch("permissionModule/getPermissonRoutes");const Ot=Q(wt).use(kt,St).use(Et).use(X,{locale:Y});Et.isReady().then((()=>Ot.mount("#app"))),Et.onError((e=>{console.error(e)})),window.process={env:{NODE_ENV:"dev"}};export{Se as _,ce as a,xt as u,Ue as v};