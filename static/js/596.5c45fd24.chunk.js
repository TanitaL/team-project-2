"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[596],{7185:function(e,t,n){n.d(t,{Z:function(){return o}});n(2791);var r="Container_containerMain__yFMrH",a=n(184),o=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},8854:function(e,t,n){var r=n(1413),a=n(1545),o=n(4818),i=n(7395),l=n(184);t.Z=function(e){var t=e.currentPage,n=e.totalPages,s=e.handlePaginationChange;return console.log("currentPage--\x3e",t),console.log("totalPages--\x3e",n),(0,l.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},children:0!==n&&(0,l.jsx)(o.Z,{page:t,onChange:function(e,t){s(t)},count:n>=99?99:n,variant:"outlined",size:"large",sx:{"Button.MuiPaginationItem-circular.Mui-selected":{bgcolor:"#54ADFF",color:"#fff",border:"1px solid #54ADFF"},button:{color:"#111111",backgroundColor:"#fff",border:"1px solid #54ADFF"}},renderItem:function(e){return(0,l.jsx)(i.Z,(0,r.Z)({components:{previous:a.a_L,next:a.Or2}},e))}})})}},9375:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9439),a=n(2791),o=n(184),i=function(e){var t=e.onSearch,n=e.onClearSearch,i=(0,a.useState)(""),l=(0,r.Z)(i,2),s=l[0],c=l[1];return(0,o.jsxs)("form",{className:"search-component",onSubmit:function(e){e.preventDefault(),t(s)},children:[(0,o.jsx)("input",{type:"text",placeholder:"Search",value:s,onChange:function(e){c(e.target.value)},className:"search-component__input"}),(0,o.jsx)("button",{type:"submit",className:"search-component__search-button",children:(0,o.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25V18.75C15.0563 18.75 18.75 15.0563 18.75 10.5H17.25ZM10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5H2.25C2.25 15.0563 5.94365 18.75 10.5 18.75V17.25ZM3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75V2.25C5.94365 2.25 2.25 5.94365 2.25 10.5H3.75ZM10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5H18.75C18.75 5.94365 15.0563 2.25 10.5 2.25V3.75ZM20.5303 19.4697L16.3428 15.2821L15.2821 16.3428L19.4697 20.5303L20.5303 19.4697Z",fill:"#54ADFF"})})}),s&&(0,o.jsx)("button",{type:"button",onClick:function(){c(""),n()},className:"search-component__clear-button",children:(0,o.jsx)("i",{className:"fas fa-times"})})]})}},5596:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var r,a=n(5861),o=n(9439),i=n(4687),l=n.n(i),s=n(2791),c=n(9435),u=n(9375),f=n(9434),d=n(7689),p=n(1087),h=n(4217),m=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t},g={publicCategories:[{id:m(),to:"/notices/sell",text:"sell"},{id:m(),to:"/notices/lost-found",text:"lost/found"},{id:m(),to:"/notices/for-free",text:"in good hands"}],privateCategories:[{id:m(),to:"/notices/favorite",text:"favorite ads"},{id:m(),to:"/notices/mypets",text:"my ads"}]},v="notices-categories-nav_wrapper__PNhqv",b="notices-categories-nav_list__7xerT",x="notices-categories-nav_button__GLUPy",j="notices-categories-nav_active__IXL23",y=n(184),w=g.publicCategories,_=g.privateCategories,O=function(e,t){return t===e?"".concat(x," ").concat(j):x},N=function(){var e=(0,d.TH)(),t=e.pathname,n=e.search,r=(0,f.v9)(h.aF);return(0,y.jsxs)("div",{className:v,children:[(0,y.jsx)("ul",{className:b,children:w.map((function(e){var r=e.to,a=e.text,o=e.id;return(0,y.jsx)("li",{children:(0,y.jsx)(p.rU,{to:{pathname:r,search:n},className:O(t,r),children:a})},o)}))}),r&&(0,y.jsx)("ul",{className:b,children:_.map((function(e){var r=e.to,a=e.text,o=e.id;return(0,y.jsx)("li",{children:(0,y.jsx)(p.rU,{to:{pathname:r,search:n},className:O(t,r),children:a})},o)}))})]})},k=n(3433),C=["title","titleId"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function L(e,t){var n=e.title,a=e.titleId,o=Z(e,C);return s.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},o),n?s.createElement("title",{id:a},n):null,r||(r=s.createElement("path",{d:"M4 4L9 12V18L15 21V12L20 4H4Z",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var S,F=s.forwardRef(L),E=(n.p,["title","titleId"]);function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,r=e.titleId,a=I(e,E);return s.createElement("svg",B({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,S||(S=s.createElement("path",{d:"M20 15L12 7L4 15",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var A,U=s.forwardRef(M),V=(n.p,["title","titleId"]);function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function H(e,t){var n=e.title,r=e.titleId,a=D(e,V);return s.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,A||(A=s.createElement("path",{d:"M4 9L12 17L20 9",stroke:"#54ADFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var R,T=s.forwardRef(H),W=(n.p,{wrapper:"notices-filters_wrapper__5jgHF",openBtn:"notices-filters_openBtn__kDKaV",openBtnLabel:"notices-filters_openBtnLabel__WM2MD",openBtnIcon:"notices-filters_openBtnIcon__f0MEG",dropdownContainer:"notices-filters_dropdownContainer__seDdq",text:"notices-filters_text__8wtZ9",submenu:"notices-filters_submenu__gZhTy",filterBtn:"notices-filters_filterBtn__AJ5Bm",btnLabel:"notices-filters_btnLabel__uhReY",form:"notices-filters_form__CgBvr",label:"notices-filters_label__ZOd-n",input:"notices-filters_input__qkQ3S"}),Y=function(e){var t=e.onFilter,n=(e.filters,(0,s.useState)(!1)),r=(0,o.Z)(n,2),a=r[0],i=r[1],l=(0,s.useState)(!1),c=(0,o.Z)(l,2),u=c[0],f=c[1],d=(0,s.useState)(!1),p=(0,o.Z)(d,2),h=p[0],m=p[1],g=(0,s.useState)([]),v=(0,o.Z)(g,2),b=v[0],x=v[1];(0,s.useEffect)((function(){0!==b.length&&t(b)}),[t,b]);var j=function(e){var t=e.target,n=t.name,r=t.value,a=t.checked;x(a?function(e){return[].concat((0,k.Z)(e),[{name:n,value:r}])}:function(e){return e.filter((function(e){return e.name!==n||e.value!==r}))})};return(0,y.jsxs)("div",{className:W.wrapper,children:[(0,y.jsxs)("button",{className:W.openBtn,type:"button",onClick:function(){i((function(e){return!e}))},"aria-label":"toggle filters",children:[(0,y.jsx)("span",{className:W.openBtnLabel,children:"Filter"}),(0,y.jsx)(F,{className:W.openBtnIcon,width:24,height:24})]}),a&&(0,y.jsx)("div",{className:W.dropdownContainer,children:(0,y.jsxs)("div",{className:W.dropdown,children:[(0,y.jsx)("p",{className:W.text,children:"Filters"}),(0,y.jsxs)("div",{className:W.submenu,children:[(0,y.jsxs)("button",{className:W.filterBtn,type:"button",onClick:function(){f((function(e){return!e}))},"aria-label":"toggle age options",children:[u?(0,y.jsx)(U,{className:W.icon,width:24,height:24}):(0,y.jsx)(T,{className:W.icon,width:24,height:24}),(0,y.jsx)("span",{className:W.btnLabel,children:"By age"})]}),u&&(0,y.jsxs)("form",{className:W.form,children:[(0,y.jsxs)("label",{className:W.label,children:[(0,y.jsx)("input",{onChange:j,className:W.input,type:"checkbox",name:"date",value:"3-12m"}),"3-12m"]}),(0,y.jsxs)("label",{className:W.label,children:[(0,y.jsx)("input",{className:W.input,onChange:j,type:"checkbox",name:"date",value:"1y"}),"1 year"]}),(0,y.jsxs)("label",{className:W.label,children:[(0,y.jsx)("input",{className:W.input,onChange:j,type:"checkbox",name:"date",value:"2y"}),"2 year"]})]})]}),(0,y.jsxs)("div",{className:W.submenu,children:[(0,y.jsxs)("button",{className:W.filterBtn,type:"button",onClick:function(){m((function(e){return!e}))},"aria-label":"toggle gender options",children:[h?(0,y.jsx)(U,{className:W.icon,width:24,height:24}):(0,y.jsx)(T,{className:W.icon,width:24,height:24}),(0,y.jsx)("span",{className:W.btnLabel,children:"By gender"})]}),h&&(0,y.jsxs)("form",{className:W.form,children:[(0,y.jsxs)("label",{className:W.label,children:[(0,y.jsx)("input",{onChange:j,className:W.input,type:"checkbox",name:"sex",value:"male"}),"male"]}),(0,y.jsxs)("label",{className:W.label,children:[(0,y.jsx)("input",{onChange:j,className:W.input,type:"checkbox",name:"sex",value:"female"}),"female"]})]})]})]})})]})},G=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function J(e,t){var n=e.title,r=e.titleId,a=z(e,G);return s.createElement("svg",Q({width:24,height:24,viewBox:"0 0 24 24",stroke:"#fff",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,R||(R=s.createElement("path",{d:"M12 20V12M12 12V4M12 12H20M12 12H4",stroke:"inherit",strokeWidth:2,strokeLinecap:"round"})))}var K,X=s.forwardRef(J),$=(n.p,["title","titleId"]);function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ne(e,t){var n=e.title,r=e.titleId,a=te(e,$);return s.createElement("svg",ee({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,K||(K=s.createElement("path",{d:"M12 7V17M7 12L17 12",stroke:"#FEF9F9",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var re=s.forwardRef(ne),ae=(n.p,"AddPetButton_button__N7iFS"),oe="AddPetButton_label__0VTTS",ie="AddPetButton_iconBig__6LmUY",le="AddPetButton_iconSmall__5nWMk",se=function(e){var t=e.modalOpen,n=(0,d.TH)(),r=(0,d.s0)(),a=(0,f.v9)(h.aF);return(0,y.jsxs)("button",{type:"button",state:{from:n},className:ae,onClick:function(){a?r("/add-pet"):t(!0)},children:[(0,y.jsx)(X,{className:ie,width:24,height:24}),(0,y.jsx)("span",{className:oe,children:"Add Pet"}),(0,y.jsx)(re,{className:le,width:24,height:24})]})},ce=n(8854),ue=n(1113),fe=n(4040),de=n(7321),pe=n(7758),he=n(7185),me=n(5948),ge=de.U.SELL,ve=de.U.LOSTFOUND,be=de.U.FORFREE,xe=de.U.MYPET,je=de.U.FAVORITE,ye=function(){var e=(0,f.v9)(ue.p2),t=(0,f.v9)(ue.UQ),n=(0,f.v9)(h.aF),r=(0,f.v9)(ue.tj),i=(0,s.useState)(!1),p=(0,o.Z)(i,2),m=p[0],g=p[1],v=(0,s.useState)(1),b=(0,o.Z)(v,2),x=b[0],j=b[1],w=(0,s.useState)(""),_=(0,o.Z)(w,2),O=_[0],k=_[1],C=(0,s.useState)(""),P=(0,o.Z)(C,2),Z=P[0],L=P[1],S=(0,d.UO)().categoryName,F=(0,f.I0)();(0,s.useEffect)((function(){n&&F((0,pe.gZ)())}),[F,n]),(0,s.useEffect)((function(){j(1)}),[S]),(0,s.useEffect)((function(){switch(S){case ge:F((0,pe.nx)({category:ge,query:Z,page:x,queryParams:O}));break;case xe:F((0,pe.nx)({category:xe,query:Z,page:x,queryParams:O}));break;case ve:F((0,pe.nx)({category:ve,query:Z,page:x,queryParams:O}));break;case be:F((0,pe.nx)({category:be,query:Z,page:x}));break;case je:F((0,pe.nx)({category:je,query:Z,page:x}))}}),[S,F,Z,x,O]),(0,s.useEffect)((function(){n&&(null===r||void 0===r?void 0:r.length)>0&&(null===e||void 0===e?void 0:e.length)>0&&F((0,pe.PT)())}),[F,r,n,null===e||void 0===e?void 0:e.length]);var E=function(){var e=(0,a.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=t.trim())&&(L(n),j(1));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)(he.Z,{children:[m&&!n&&(0,y.jsx)(me.Z,{modalOpen:g}),(0,y.jsx)("h1",{className:c.Z.textNoticesPage,children:"Find your favorite pet"}),(0,y.jsx)(u.Z,{onSearch:E,onClearSearch:function(){L("")}}),(0,y.jsx)("div",{className:c.Z.container,children:(0,y.jsxs)("div",{className:c.Z.categoryFilterWrapper,children:[(0,y.jsx)(N,{}),(0,y.jsxs)("div",{className:c.Z.noticeFilter,children:[(0,y.jsx)(Y,{onFilter:function(e){var t=e.map((function(e){return"".concat(e.name,"=").concat(e.value)})).join("&");console.log("\ud83d\ude80 ~ handleFilter ~ queryParams:",t),k(t)}}),(0,y.jsx)(se,{modalOpen:g})]})]})}),(0,y.jsx)(s.Suspense,{fallback:(0,y.jsx)(fe.Z,{}),children:(0,y.jsx)(d.j3,{})}),(0,y.jsx)(ce.Z,{currentPage:x,totalPages:t,handlePaginationChange:function(e){j(e)}})]})}}}]);
//# sourceMappingURL=596.5c45fd24.chunk.js.map