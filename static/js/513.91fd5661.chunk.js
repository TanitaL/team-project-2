"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[513],{7185:function(e,r,n){n.d(r,{Z:function(){return s}});n(2791);var t="Container_containerMain__yFMrH",i=n(184),s=function(e){var r=e.children;return(0,i.jsx)("div",{className:t,children:r})}},5513:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(2791),i=n(7185),s=n(5861),l=n(9439),a=n(4687),c=n.n(a),o="ourFriendList_title__k5+8I",d="ourFriendList_friend__list__fddXa",u=["MN","TU","WE","TH","FR","SA","SU"],f=function(e,r){e.map((function(e,n){var t=e.isOpen,i=e.from,s=e.to;return t?r.push({day:u[n],hours:"".concat(i,"-").concat(s)}):null}))},m={friend__listitem:"OurFriendItem_friend__listitem__I6da9",friendtitle:"OurFriendItem_friendtitle__cDq1a",infolist:"OurFriendItem_infolist__M-o++",item__text:"OurFriendItem_item__text__s9vyO",item__info:"OurFriendItem_item__info__rbY2P",link__info:"OurFriendItem_link__info__PA9fR",helperbox:"OurFriendItem_helperbox__qwuV1",boxfriend__logo:"OurFriendItem_boxfriend__logo__cVetV",infolist__item:"OurFriendItem_infolist__item__Hx0Xr",modal:"OurFriendItem_modal__Z3HfF",modal__list:"OurFriendItem_modal__list__He3-0",modal__listitem:"OurFriendItem_modal__listitem__qhz0m"},_=n(184),h=function(e){var r=e.workDays,n=[];return f(r,n),(0,_.jsx)("p",{className:m.item__info,children:n[0].hours})},x=function(e){var r=e.workDays,n=[];return f(r,n),(0,_.jsx)("div",{className:m.modal,children:(0,_.jsx)("ul",{className:m.modal__list,children:n.map((function(e,r){var n=e.day,t=e.hours;return(0,_.jsxs)("li",{className:m.modal__listitem,children:[(0,_.jsx)("p",{children:n}),(0,_.jsx)("p",{children:t})]},r)}))})})},p=function(e){var r=e.title,n=e.url,i=e.addressUrl,s=e.imageUrl,a=e.address,c=e.workDays,o=e.phone,d=e.email,u=(0,t.useState)(!1),f=(0,l.Z)(u,2),p=f[0],w=f[1],j=function(e){var n=0,t=0;if(!(r.length>10))return r.replace(/'/g,"");for(var i=0;i<e.length;i++){var s=e[i];if(s===s.toUpperCase()&&s!==s.toLowerCase()&&2===++n){t=i;break}}return e.slice(t).replace(/'/g,"")}(r);return(0,_.jsxs)("li",{className:m.friend__listitem,href:n,children:[(0,_.jsx)("h2",{className:m.friendtitle,children:j.length>30?j.slice(0,29):j}),(0,_.jsxs)("div",{className:m.helperbox,children:[(0,_.jsx)("div",{className:m.boxfriend__logo,children:(0,_.jsx)("a",{href:n,target:"blank_",children:(0,_.jsx)("img",{src:s||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAllBMVEX///8eW70ATrkAULoaWbwAUroATLkASrgVV7wLVLsAR7fy9fvo7ff7/P66yOfu8vmDndXS2+94ldKar9wvZcFXfcmgs97a4vJPeMfAzekAQ7azwuRMdMYAPrWQp9ldgstoic1wj9Dc6PQ0bcLK1OyrvOIsYL+JqdmqwuOQr9t2m9OfuN9VhcsAObTA0+p7ptexzedVi8z6VhvdAAAHI0lEQVRogbVZ6YKiOBA25CDhEBAQVEa0Qfqwt2f2/V9uKwkoR+hWZ60f3Rrwo1Kp+upgsbhDsuVyGa6KsgxPmXvPD+8QN4tL5qTr7En4sIuw+ZXsn4dfl9ttunwafBAyJzk9Dd4LbSd5nvZZbrP8ebY/IerET0P3CgtX3tPg94zbzzvYpc1Z+DT0DHF8eBq6B+jp09CD5hvd3axerzd/cehBQ2Z0r0uOQSya+w+jR4zg0rAeOpwgKYTmwcPoGxtZq8nqyUYXEc3jptlbiI39PcAE9dAPD4MvCo6cEdGscQ8bEfzyMDioSZL+qWUlQwPh+cPgix1D+Bqq3pFxNBJr9zi6NEzUqc3EGBpk+3hyz8AwVfs54MQAzk3uOi9unOZ5ftReFoqrx6QToyjD3EOgGcWcCLw9qm+egwhpzzSkJnDE6puxd4wgYlXhqT2plUB43z52qw1DhuYhza2BWtsECdTTJWOIoFb1Oic2YzYhQ/vwGwO1tgB7yFcl7/lbEIEEbj7UnVe3uIxHATsf3rmxECnGOoxjiSx/ZMgA9suT8Spsxo6GSz4aeSWxULmPo2y+pPUajoiIxstHjsQ4o5YTryRcSJanQgvnIkmP8fKl3dEOVERsWnBt4EjFaG2Hx+DdM3rCObUYSsPdbl0pbEPSlzawRvsJiClaDcIpsxmmcqPW0WQusAEdF2EHY7RO9oHT17dzobZpTxOPlJgiMqbW0ERiE+xK0/07JtReG7EXGwzHNXKDpXUDtuhSyZuzn4viFwBiI6O7zs/g/BMC/OMsb/+cZTe/IYiOd7X62S70feFX2Jbo2T+zDJGQqadnV2eccxy++qoEcIN09croKq2WfFwgXVMHRPUcOrAJkKY8rlTMGX1Pp/SyqFpwunKn8dp/gnK0wp5rh/YCkQnltMxIgG9fhPrMsekhWJ5WgMScXaSjT8BjnZdUDv2wsBC4fPucoutUcsakmQEHhp2CZ7quw6/yi7f5CKF8+ppSjniHyy5szZ7xl0jiTFYLaQtC+9H1MfVPawPrb8D/eMbVT9gEXss4wufeimdLWuQg5EJs7AsuvMJD+cEMvhcm8MURlnG/lnxllKKkSEESKCCwgEeo0P5i8qnmRLKnRvCAEmL3wT/KV0iwKj34XvZ1DgvEfsnzlASCLHMJYnRFkJ1T/P7zbfL0X9TDFfiEtrVU3Ay++Pz9kb5/B96KKxP6NA6VALeYwbN/k9+3lBW+qhawiQE8rB5r2n9SNdbZsG5Qz5ifwecAHIjLdGmPyU31vwoAIwPIQAfKNeVAiN0hX379W+XvYCj/nFafm8uy6naIMGweChdET0bwYIvER+/7KxOEW5Xn5owTbl8uRYqI8LQN8aXBoOZamYY8TCWzTv5ovhHpQbMa684jYlf2HYhkKJmgd3sDODBSzwnylhW7MvjiY0vdYU5Vl1WELC08kzdCntC8qCQZl5Bt/nHpQSfD7Xj3koNUdCUG0oTzIPzSjFZjcKrBX53YU7oTMmxclblUObc31Hqy8uKX0Bt3TZ1ZKhwvlrZE59Xg59JXCJefPIMrqfR5MczbKFl0AVZYsSpoQZz+r2U/0BUWxZR6GmWIrk71q4HquqrQZpE7l+gDGlUtHNMru3ElvVi0vtfF3gvtWZ1fDOzaytOOdOgwAz7z2cSVdP9yaYQXK9bDviqZaDdOoI/oxaJSHHe0smZjq7clo/Xn8oMOXVRXx3DbwU1k9U/UE6pm6iDdcXMQtaOdnj5n5RWIFj2CXdrt3lMghcu6TJO6rGn1Gs1folZP2ovepZxt0LK/x0/ashu0O7ijs1oqdlUcrC6GftqBD1r0XSFE0ceOaFfMQbfflbR+M+H43a8Bw5y0Y5PtoHz3k6SfdDxOOlp2t6grvQ4CTVJf6vSV1K0RQV+Dexb7AT0H0SUTyp3aCuCkQ2poZW9Lr1q1TV2fdVvdxwuthFDKONLomaIaPCbak30Ze+26kDFmR5OkTZPIgHMVSRrqgZK1FvT+gZZZwbNb54u+q2omP+EGo6gbGuugP9Xr06YAz2WHG7E7hEoVrNN4B8mc3gx52STl/r4hml8obGwe0W8wPjw+JHYTjX2Yub5xaPLokLjW9v5mPB8z3kxmJ7dha+r59sXCySG2qRr4SVYt9vevFWpMcH7vhDurNF38+EIkQ4Kz/T3n6oaOHh0axvJjCUqL4OT2QfESabX5bfEc24SwG98UnrilucIqbjRmVFnQFiWnn9zSixOmobkzM9QxSSygu8a43Mwb393lVstwhKV3+UCwsiDPciYO62jKAkEUp9jqylJWbAwI34q3ktxIOPytwriuA1+KV9fxKuGYdqMTbj32HteLG/XCgXBBGds6TP+h4tJHE2wdbp+Ej8TfHGwszMNG2BNL4r97w+rXYcFtIfhgKCqYlRx2/8u7Wzi/MC2KIgGBf3l5jDfZLUH8H2YsY1trI1ztAAAAAElFTkSuQmCC",alt:"",className:m.friend__logo})})}),(0,_.jsxs)("ul",{className:m.infolist,children:[c&&c.length>0?(0,_.jsxs)("li",{className:m.infolist__item,onMouseEnter:function(){return w(!0)},onMouseLeave:function(){return w(!1)},children:[(0,_.jsx)("p",{className:m.item__text,children:"Time:"}),(0,_.jsx)(h,{workDays:c}),p&&(0,_.jsx)(x,{workDays:c})]}):null,(0,_.jsxs)("li",{className:m.infolist__item,children:[(0,_.jsx)("p",{className:m.item__text,children:"Address"}),null===a?(0,_.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:m.link__info,children:"Only site"}):(0,_.jsx)("p",{className:m.item__info,children:(0,_.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:m.link__info,children:a})})]}),(0,_.jsxs)("li",{className:m.infolist__item,children:[(0,_.jsx)("p",{className:m.item__text,children:"Email: "}),d?(0,_.jsx)("p",{className:m.item__info,children:(0,_.jsx)("a",{href:"mailto:".concat(d),className:m.link__info,children:d})}):(0,_.jsxs)("p",{className:m.item__info,children:[" ",(0,_.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:m.link__info,children:"Only wedsite"})]})]}),(0,_.jsxs)("li",{className:m.infolist__item,children:[(0,_.jsx)("p",{className:m.item__text,children:"Phone"}),null===o?(0,_.jsx)("p",{className:m.item__info,children:"No phone info"}):(0,_.jsx)("p",{className:m.item__info,children:(0,_.jsx)("a",{href:"tel:".concat(o),className:m.link__info,children:o})})]})]})]})]})},w=n(1243);w.Z.defaults.baseURL="https://eventregistry.org/api/v1/article/getArticles";var j=function(){var e=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Z.get("https://final-project-node-5vh7.onrender.com/sponsors.json").then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.useState)([]),r=(0,l.Z)(e,2),n=r[0],i=r[1];return(0,t.useEffect)((function(){var e=function(){var e=(0,s.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:r=e.sent,i(r.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch(console.error)}),[]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{className:o,children:"Our friends"}),(0,_.jsx)("ul",{className:d,children:n.map((function(e){var r=e.title,n=e.url,t=e.addressUrl,i=e.imageUrl,s=e.address,l=e.workDays,a=e.phone,c=e.email;return(0,_.jsx)(p,{title:r,url:n,addressUrl:t,imageUrl:i,address:s,workDays:l,phone:a,email:c},r)}))})]})},g=function(){return(0,_.jsx)(i.Z,{children:(0,_.jsx)(v,{})})}}}]);
//# sourceMappingURL=513.91fd5661.chunk.js.map