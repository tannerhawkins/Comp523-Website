(this.webpackJsonpComp523Site=this.webpackJsonpComp523Site||[]).push([[0],{18:function(e,t,c){"use strict";var l=c(0),n=c(13),s=c(17),j=c(8);var a=[{index:!0,label:"Comp523 Site",path:"/home"},{label:"Project",path:"/home"},{label:"Team",path:"/team"},{label:"Journal",path:"/journal"},{label:"Deliverables",path:"/deliverables"}],i=c(1);const b=Object(l.lazy)((()=>c.e(3).then(c.t.bind(null,45,7))));var r=()=>{const[e,t]=Object(l.useState)(!1);return Object(i.jsxs)("div",{className:"hamburger-container",children:[Object(i.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(i.jsx)("ul",{children:e?Object(i.jsx)("li",{className:"menu close-menu",children:Object(i.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2715"})}):Object(i.jsx)("li",{className:"menu open-menu",children:Object(i.jsx)("div",{onClick:()=>t(!e),className:"menu-hover",children:"\u2630"})})})}),Object(i.jsx)(l.Suspense,{fallback:Object(i.jsx)(i.Fragment,{}),children:Object(i.jsx)(b,{right:!0,isOpen:e,children:Object(i.jsx)("ul",{className:"hamburger-ul",children:a.map((c=>Object(i.jsx)("li",{children:Object(i.jsx)(j.b,{to:c.path,onClick:()=>t(!e),children:Object(i.jsx)("h3",{className:c.index&&"index-li",children:c.label})})},c.label)))})})})]})};var d=()=>Object(i.jsxs)("header",{id:"header",children:[Object(i.jsx)("h1",{className:"index-link",children:a.filter((e=>e.index)).map((e=>Object(i.jsx)(s.a,{to:e.path,children:e.label})))}),Object(i.jsx)("nav",{className:"links",children:Object(i.jsx)("ul",{children:a.filter((e=>!e.index)).map((e=>Object(i.jsx)("li",{children:Object(i.jsx)(s.a,{to:e.path,children:e.label})},e.label)))})}),Object(i.jsx)(r,{})]});var h=()=>Object(i.jsxs)("section",{id:"sidebar",children:[Object(i.jsx)("section",{id:"intro",children:Object(i.jsx)("header",{children:Object(i.jsx)("h2",{children:"Ancient Path Adventures"})})}),Object(i.jsxs)("section",{className:"blurb",children:[Object(i.jsx)("h2",{children:"Project Summary"}),Object(i.jsx)("p",{children:"** Project Summary Goes Here **"})]})]}),o=c(3);var O=()=>{const{pathname:e}=Object(o.g)();return Object(l.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};const x=e=>Object(i.jsxs)(n.b,{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(n.a,{titleTemplate:"%s | Comp523 Site",defaultTitle:"Comp523 Site",defer:!1,children:[e.title&&Object(i.jsx)("title",{children:e.title}),Object(i.jsx)("meta",{name:"description",content:e.description})]}),Object(i.jsxs)("div",{id:"wrapper",children:[Object(i.jsx)(d,{}),Object(i.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(i.jsx)(h,{})]})]});x.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=x},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var l=c(0),n=c.n(l),s=c(12),j=c(8),a=c(3),i=c(18),b=(c(33),c(1));const{PUBLIC_URL:r}=Object({NODE_ENV:"production",PUBLIC_URL:"/Comp523-Website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),d=Object(l.lazy)((()=>c.e(8).then(c.bind(null,40)))),h=Object(l.lazy)((()=>c.e(5).then(c.bind(null,41)))),o=Object(l.lazy)((()=>c.e(7).then(c.bind(null,42)))),O=Object(l.lazy)((()=>c.e(6).then(c.bind(null,43)))),x=Object(l.lazy)((()=>c.e(4).then(c.bind(null,44))));var m=()=>Object(b.jsx)(j.a,{basename:r,children:Object(b.jsxs)(l.Suspense,{fallback:Object(b.jsx)(i.a,{}),children:[Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{exact:!0,path:"/home",component:h}),Object(b.jsx)(a.b,{path:"/team",component:d}),Object(b.jsx)(a.b,{path:"/journal",component:O}),Object(b.jsx)(a.b,{path:"/deliverables",component:x}),Object(b.jsx)(a.b,{component:o,status:404})]}),Object(b.jsx)(a.b,{exact:!0,path:"/",children:Object(b.jsx)(a.a,{to:"/home"})})]})});const u=()=>Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),p=document.getElementById("root");p.hasChildNodes()?Object(s.hydrate)(Object(b.jsx)(u,{}),p):Object(s.render)(Object(b.jsx)(u,{}),p)}},[[34,1,2]]]);
//# sourceMappingURL=main.7ec434f0.chunk.js.map