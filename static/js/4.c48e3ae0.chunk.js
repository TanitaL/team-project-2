"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[4],{3910:function(e,r,t){t.d(r,{Z:function(){return s}});t(2791);var a=t(5206),n="BgContainer_bgContainer__Am6QV",o=t(184),s=function(e){var r=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:n,children:r}),(0,o.jsx)(a.Ix,{position:"top-center",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}},3570:function(e,r,t){t(2791);var a=t(7704),n=t(184);r.Z=function(e){var r=e.children;return(0,n.jsx)("div",{className:a.Z.containerMain,children:r})}},1004:function(e,r,t){t.r(r);var a=t(2791),n=t(5705),o=t(6727),s=t(3370),i=t(1087),u=t(5654),m=t(8027),_=t(9434),c=t(3277),l=t(4217),d=t(5206),p=(t(5462),t(3910)),g=t(3570),h=t(184);r.default=function(){var e=(0,_.v9)(l.eH),r=(0,_.I0)(),t=o.Ry({email:o.Z_().required("Email is required").email("Invalid email address"),password:o.Z_().required("Password is required")});return(0,a.useEffect)((function(){if(e){!function(){var r;d.Am.error(null!==(r=e.data.message)&&void 0!==r?r:"",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}()}}),[e]),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.Z,{children:(0,h.jsxs)(g.Z,{children:[(0,h.jsx)(n.J9,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:function(e,t){var a=e.email,n=e.password;r((0,c.Y)({endpoint:"login",userInfo:{email:a,password:n},actions:t}))},children:function(e){return(0,h.jsxs)("div",{className:s.Z.ContainerForm,children:[(0,h.jsx)("h2",{className:s.Z.ContainerForm__Title,children:"Login"}),(0,h.jsxs)(n.l0,{className:s.Z.Form,onSubmit:e.handleSubmit,children:[(0,h.jsx)(u.Z,{placeholder:"Email",name:"email",id:"email",type:"text"}),(0,h.jsx)(m.C,{placeholder:"Password",name:"password",id:"imgPasswordInput",type:"password"}),(0,h.jsx)("button",{className:s.Z.FormRegister__Button_Login,type:"submit",children:"Login"}),(0,h.jsxs)("p",{className:s.Z.FormRegister__Text,children:["Don't have an account?",(0,h.jsx)(i.OL,{to:"/register",className:s.Z.FormRegister__Link,children:"Register"})]})]})]})}}),(0,h.jsx)(d.Ix,{})]})})})}},8027:function(e,r,t){t.d(r,{C:function(){return _}});var a=t(1413),n=t(9439),o=(t(2791),t(5705)),s=t(3370);var i=t.p+"static/media/register-form-eye-closed.af29198960072a3c37adcea33b1d3fbe.svg";var u=t.p+"static/media/register-form-cross-small.979527430babc874f1a86f2736f96771.svg",m=t(184),_=function(e){var r=Object.assign({},e),t=(0,o.U$)(r),_=(0,n.Z)(t,2),c=_[0],l=_[1],d=document.querySelector("#imgPasswordInput"),p=document.querySelector("#imgConfirmPasswordInput");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("label",{htmlFor:c.name}),(0,m.jsxs)("div",{name:c.name,className:l.touched&&l.error?s.Z.ErrorPasswordInput:s.Z.ImputContainer,children:[(0,m.jsx)("input",(0,a.Z)((0,a.Z)({className:s.Z.ContainerForm__Imput_Password,autoComplete:"off"},c),r)),(0,m.jsx)("button",{type:"button",onClick:l.touched&&l.error?function(e){switch(e.target.id){case"imgPasswordInput":d.value="",c.value="";break;case"imgConfirmPasswordInput":p.value="",c.value="";break;default:return}}:function(e){var r=e.target.id,t=c.value;"imgPasswordInput"===r&&""!==t&&("password"===d.type?d.type="text":d.type="password"),"imgConfirmPasswordInput"===r&&""!==t&&("password"===p.type?p.type="text":p.type="password")},className:s.Z.Button__EyeClosedIcon,children:(0,m.jsx)("img",{id:r.id,src:l.touched&&l.error?u:i,alt:"eyeClosedIcon"})})]}),(0,m.jsx)(o.Bc,{component:"div",name:c.name,className:s.Z.ErrorTextPassword})]})}},5654:function(e,r,t){var a=t(1413),n=t(9439),o=(t(2791),t(5705)),s=t(3370),i=t(184);r.Z=function(e){var r=Object.assign({},e),t=(0,o.U$)(r),u=(0,n.Z)(t,2),m=u[0],_=u[1];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("label",{htmlFor:m.name}),(0,i.jsx)("input",(0,a.Z)((0,a.Z)({className:_.touched&&_.error?s.Z.ErrorTextInput:s.Z.ContainerForm__Imput,autoComplete:"off"},m),r)),(0,i.jsx)(o.Bc,{component:"div",name:m.name,className:s.Z.ErrorText})]})}},7704:function(e,r){r.Z={containerMain:"Container_containerMain__yFMrH"}},3370:function(e,r){r.Z={ContainerForm:"AuthNavPage_ContainerForm__Okro9",Form:"AuthNavPage_Form__vM3ft",ContainerForm__Title:"AuthNavPage_ContainerForm__Title__KBZav",ContainerForm__Imput:"AuthNavPage_ContainerForm__Imput__UW0mm",ContainerForm__Imput_Password:"AuthNavPage_ContainerForm__Imput_Password__ar20p",ImputContainer:"AuthNavPage_ImputContainer__-Hhp+",FormRegister__Button:"AuthNavPage_FormRegister__Button__YSlyj",FormRegister__Button_Login:"AuthNavPage_FormRegister__Button_Login__sGjNI",FormRegister__Text:"AuthNavPage_FormRegister__Text__UZFX2",FormRegister__Link:"AuthNavPage_FormRegister__Link__54OWc",Button__EyeClosedIcon:"AuthNavPage_Button__EyeClosedIcon__W4FR-",ErrorText:"AuthNavPage_ErrorText__3cj2i",ErrorTextPassword:"AuthNavPage_ErrorTextPassword__Aev1V",ErrorTextInput:"AuthNavPage_ErrorTextInput__iBNlC",ErrorPasswordInput:"AuthNavPage_ErrorPasswordInput__iY4g0"}}}]);
//# sourceMappingURL=4.c48e3ae0.chunk.js.map