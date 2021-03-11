(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{37:function(n,e,t){},61:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),i=t(15),a=t.n(i),c=(t(37),t(2)),l=t(11),s=t.n(l),u=t(6),d=t(32),f=t(4),b=t(7),h=t(8),p=t(30),m=t.n(p),j=function(){function n(){Object(b.a)(this,n)}return Object(h.a)(n,null,[{key:"get",value:function(n){return this.axios.get(n)}}]),n}();j.axios=m.a.create({baseURL:"http://gateway.marvel.com/"});var x=j,O=new(function(){function n(){Object(b.a)(this,n),this.currentItensCount=0,this.currentItensLimit=20,this.currentTotalOfItens=0}return Object(h.a)(n,[{key:"totalOfItens",get:function(){return this.currentTotalOfItens},set:function(n){this.currentTotalOfItens=n}},{key:"itensCount",get:function(){return this.currentItensCount},set:function(n){this.currentItensCount=n}},{key:"getPaginationParams",value:function(){var n="?limit=".concat(this.currentItensLimit,"&offset=").concat(this.currentItensCount);return this.currentItensCount+=this.currentItensLimit,n}}]),n}()),g=function(){function n(){Object(b.a)(this,n)}return Object(h.a)(n,null,[{key:"getComics",value:function(){var n="/marvel/v1/public/comics".concat(O.getPaginationParams(),"&orderBy=focDate&apiKey=").concat(this.key);return x.get(n)}},{key:"getComicsEnvDev",value:function(){var n="/marvel/v1/public/comics".concat(O.getPaginationParams(),"&orderBy=focDate");return x.get(n)}}]),n}();g.key="58627ff15e710c9a405b6beafb830df9";var C,v,y,w,k=g,S=Object(o.createContext)({}),I=function(){return Object(o.useContext)(S)},F=t(3),L=function(n){var e=n.theme;return Object(c.css)(C||(C=Object(F.a)(["\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),e.font.family,e.font.sizes.cta,e.font.weights.regular)},P=function(n){var e=n.theme;return Object(c.css)(v||(v=Object(F.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n\n\n  &:hover {\n    opacity: 0.8;\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),e.colors.mainColor,e.colors.textColorContrast,e.colors.mainColor,e.colors.mainColorContrast,e.colors.mainColor,e.colors.mainColor,e.colors.mainColor,e.colors.textColorContrast)},E=function(n){var e=n.theme;return Object(c.css)(y||(y=Object(F.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n  }\n\n  &:disabled {\n    opacity: 0.3;\n    cursor: not-allowed;\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n      border: 1px solid ",";\n    }\n  }\n"])),e.colors.mainColorContrast,e.colors.mainColor,e.colors.mainColor,e.colors.mainColorContrast,e.colors.mainColorBackground,e.colors.mainColorBackground,e.colors.mainColorContrast,e.colors.mainColor,e.colors.mainColor)},z={Button:c.default.button(w||(w=Object(F.a)(["\n  border: none;\n  outline: none;\n  padding: 15px;\n  min-width: 120px;\n  border-radius: 4px;\n  background-color: ",";\n  color: ",";\n  margin: 5px;\n  cursor: pointer;\n  ","\n  ","\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.colors.textColorContrast}),L,(function(n){var e=n.secondary;return e&&"true"===e.toString()?E:P}))},D=t(0),B=function(n){var e=n.id,t=n.children,o=n.type,r=n.onClick,i=n.dataTestId,a=n.className,c=n.secondary,l=n.disabled;return Object(D.jsx)(z.Button,{id:e,className:a,type:o,secondary:c,onClick:r,disabled:l,"data-testid":i,children:t})};B.defaultProps={id:"",className:"",secondary:!1,disabled:!1,dataTestId:"",onClick:function(){}};var T,M,R,V=B,H={ButtonsContainer:c.default.div(T||(T=Object(F.a)(["\n  margin: 35px 0;\n"])))},N=function(n){var e=n.isLoading,t=n.onClickLoad,o=n.onClickSend,r=I().selectedComics;return Object(D.jsx)(u.Row,{children:Object(D.jsx)(u.Col,{justify:"center",align:"center",children:Object(D.jsxs)(H.ButtonsContainer,{children:[Object(D.jsx)(V,{id:"button-more-comics",type:"button",disabled:e,onClick:t,children:"Load More Comics"}),Object(D.jsx)(V,{id:"button-more-comics",type:"button",secondary:!0,disabled:0===r.length,onClick:o,children:"Send e-mail"})]})})})},_=Object(o.memo)(N),K={Title:c.default.h3(M||(M=Object(F.a)(["\n  text-align: center;\n"])))},U=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(K.Title,{children:"Not found results for your search."})})},W=Object(o.memo)(U),Z={Card:c.default.div(R||(R=Object(F.a)(["\n  border: 1px solid transparent;\n  border-radius: 2px;\n  background: ",";\n"])),(function(n){return n.theme.colors.mainColorContrast}))},A={children:Object(D.jsx)(D.Fragment,{}),className:""},J=function(n){var e=n.children,t=n.className;return Object(D.jsx)(Z.Card,{className:t,children:e})};J.defaultProps=A;var q,G,Q,X,Y=J,$=Object(c.css)(q||(q=Object(F.a)(["\n  border-color: ",";\n  &:after {\n    border-color: ",";\n  }\n\n  &:hover {\n    border-color: ",";\n\n    &:after {\n      border-color: ","\n    }\n  }\n"])),(function(n){return n.theme.colors.textColorContrast}),(function(n){return n.theme.colors.textColorContrast}),(function(n){return n.theme.colors.textColorDisabled}),(function(n){return n.theme.colors.textColorDisabled})),nn=c.default.label(G||(G=Object(F.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 35px;\n  right: -20px;\n  position: absolute;\n  top: 0;\n  width: 35px;\n  z-index: 2;\n\n  &:after {\n    border: 6px solid ",';\n    z-index: 1;\n    border-top: none;\n    border-right: none;\n    content: "";\n    height: 5px;\n    left: 7px;\n    position: absolute;\n    top: 10px;\n    transform: rotate(-45deg);\n    width: 16px;\n  }\n\n  &:hover {\n    border-color: ',";\n\n    &:after {\n      border-color: ","\n    }\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.colors.textColorDisabled}),(function(n){return n.theme.colors.textColorDisabled}),(function(n){return n.theme.colors.textColorContrast}),(function(n){return n.theme.colors.textColorContrast}),(function(n){var e=n.checked;return e&&"true"===e.toString()?$:""})),en={Wrapper:c.default.div(Q||(Q=Object(F.a)(['\n  position: relative;\n\n  input[type="checkbox"] {\n    visibility: hidden;\n  }\n']))),Container:c.default.div(X||(X=Object(F.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]))),Label:nn},tn=function(n){var e=n.id,t=n.checked,o=n.onChange,r=n.className;return Object(D.jsx)(en.Container,{className:r,children:Object(D.jsx)(en.Wrapper,{children:Object(D.jsx)(en.Label,{htmlFor:e,checked:t,children:Object(D.jsx)("input",{id:e,type:"checkbox",checked:t,onChange:o})})})})};tn.defaultProps={className:"",checked:!1,onChange:function(){}};var on,rn=tn,an=function(n){var e=n.theme;return Object(c.css)(on||(on=Object(F.a)(["\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),e.font.family,e.font.sizes.paragraph,e.font.weights.regular)};function cn(){return(cn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function ln(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var sn=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.08334 2C5.17155 2 2 5.17155 2 9.08334C2 12.9951 5.17155 16.1667 9.08334 16.1667C10.8892 16.1667 12.5373 15.4908 13.7885 14.3781L21.2887 21.8784C21.4514 22.0411 21.7153 22.0411 21.878 21.8784C22.0407 21.7157 22.0407 21.4518 21.878 21.2891L14.3777 13.7889C15.4906 12.5377 16.1667 10.8894 16.1667 9.08334C16.1667 5.17155 12.9951 2 9.08334 2ZM2.83333 9.08334C2.83333 5.63179 5.63179 2.83333 9.08334 2.83333C12.5349 2.83333 15.3333 5.63179 15.3333 9.08334C15.3333 12.5349 12.5349 15.3333 9.08334 15.3333C5.63179 15.3333 2.83333 12.5349 2.83333 9.08334Z",fill:"#FF5533"});function un(n,e){var t=n.title,r=n.titleId,i=ln(n,["title","titleId"]);return o.createElement("svg",cn({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,sn)}var dn=o.forwardRef(un);t.p;function fn(){return(fn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function bn(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var hn=o.createElement("g",{id:"icon/controls/eye"},o.createElement("path",{id:"eye",fillRule:"evenodd",clipRule:"evenodd",d:"M15.9999 18.0002C14.8972 18.0002 13.9999 17.1028 13.9999 16.0002C13.9999 14.8975 14.8972 14.0002 15.9999 14.0002C17.1026 14.0002 17.9999 14.8975 17.9999 16.0002C17.9999 17.1028 17.1026 18.0002 15.9999 18.0002ZM15.9999 11.3335C13.4266 11.3335 11.3332 13.4268 11.3332 16.0002C11.3332 18.5735 13.4266 20.6668 15.9999 20.6668C18.5732 20.6668 20.6666 18.5735 20.6666 16.0002C20.6666 13.4268 18.5732 11.3335 15.9999 11.3335ZM16.2928 22.6637C10.5515 22.797 6.80617 17.8863 5.5635 15.9943C6.9315 13.8543 10.3768 9.47299 15.7075 9.33699C21.4262 9.19165 25.1928 14.1143 26.4355 16.0063C25.0688 18.1463 21.6222 22.5277 16.2928 22.6637ZM29.1568 15.337C28.3062 13.8543 23.6075 6.42232 15.6395 6.67166C8.26884 6.85832 3.98217 13.3517 2.8435 15.337C2.6075 15.7477 2.6075 16.253 2.8435 16.6637C3.68217 18.1263 8.2155 25.333 16.0328 25.333C16.1422 25.333 16.2515 25.3317 16.3608 25.329C23.7302 25.141 28.0182 18.649 29.1568 16.6637C29.3915 16.253 29.3915 15.7477 29.1568 15.337Z",fill:"#007DFA"}));function pn(n,e){var t=n.title,r=n.titleId,i=bn(n,["title","titleId"]);return o.createElement("svg",fn({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,hn)}var mn,jn,xn,On,gn,Cn,vn,yn,wn,kn,Sn,In=o.forwardRef(pn),Fn=(t.p,Object(c.default)(dn)(mn||(mn=Object(F.a)(["\n  path {\n    fill: ",";\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.mainColorContrast}),(function(n){return n.theme.colors.mainColor})),Object(c.default)(In)(jn||(jn=Object(F.a)(["\n  path {\n    fill: ",";\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(n){return n.theme.colors.textColorDisabled}),(function(n){return n.theme.colors.mainColorContrast}))),Ln=c.default.div(xn||(xn=Object(F.a)(["\n  background-color: ",";\n  position: relative;\n  top: -12px;\n  left: 15px;\n  border-radius: 2px;\n"])),(function(n){return n.theme.colors.mainColor})),Pn=c.default.p(On||(On=Object(F.a)(["\n  margin: 10px;\n  color: ",";\n  ",";\n"])),(function(n){return n.theme.colors.textColorContrast}),an),En=c.default.div(gn||(gn=Object(F.a)(["\n  width: 100%;\n  position: relative;\n  padding-top: 75%;\n  background-color: ",";\n"])),(function(n){return n.theme.colors.mainColorBackground})),zn=c.default.div(Cn||(Cn=Object(F.a)(["\n  width: 100%;\n  height: 300px;\n  display: flex;\n"]))),Dn=c.default.img(vn||(vn=Object(F.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: -webkit-filter 0.2s ease-in-out 0s;\n  transition: filter 0.2s ease-in-out 0s;\n  transition: filter 0.2s ease-in-out 0s,-webkit-filter 0.2s ease-in-out 0s;\n  -webkit-filter: grayscale(.5);\n  -moz-filter: grayscale(.5);\n  -ms-filter: grayscale(.5);\n  -o-filter: grayscale(.5);\n  filter: ",";\n"])),(function(n){var e=n.checked;return e&&"true"===e.toString()?"grayscale(0)":"grayscale(.5)"})),Bn=Object(c.default)(rn)(yn||(yn=Object(F.a)(["\n  label {\n    display: block;\n    top: 20px;\n    right: -30px;\n    transform-origin: 50% 50%;\n    transform: translate(-50%, -50%) ",";\n    transition: .1s;\n    transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n  }\n\n  "," {\n    filter: ",";\n  }\n"])),(function(n){var e=n.checked;return e&&"true"===e.toString()?"scale(1) ":"scale(0)"}),Dn,(function(n){var e=n.checked;return e&&"true"===e.toString()?"grayscale(0)":"grayscale(.5)"})),Tn=Object(c.default)(Fn)(wn||(wn=Object(F.a)(["\n  position: absolute;\n  z-index: 1;\n  top: 60px;\n  right: -30px;\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  cursor: pointer;\n  transform-origin: 50% 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: .1s;\n  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n  background-color: ",";\n  border: 2px solid ",";\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.colors.textColorDisabled})),Mn=c.default.div(kn||(kn=Object(F.a)(["\n  position: relative;\n"]))),Rn={Card:Object(c.default)(Y)(Sn||(Sn=Object(F.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n\n  &:hover {\n    "," {\n      label {\n        transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        transform: translate(-50%, -50%) scale(1);\n        transition: .2s;\n      }\n    }\n\n    "," {\n      filter: grayscale(0);\n    }\n\n    "," {\n      transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n      transform: translate(-50%, -50%) scale(1);\n      transition: .2s;\n    }\n  }\n\n  @media only screen and (min-width: 48rem) {\n    max-width: 220px;\n    max-height: 380px;\n  }\n\n  @media only screen and (min-width: 1rem) {\n    max-width: 185px;\n    height: 380px;\n  }\n"])),Bn,Dn,Tn),Img:Dn,ImgWrapper:En,ImgContainer:zn,Footer:Ln,Paragraph:Pn,Checkbox:Bn,Icon:Tn,Actions:Mn},Vn=function(n){var e=n.comic,t=n.onCheck,o=n.checked,r=n.onDetail;return Object(D.jsxs)(Rn.Card,{children:[Object(D.jsxs)(Rn.Actions,{children:[Object(D.jsx)(Rn.Checkbox,{id:"checkbox-".concat(e.id),checked:o,onChange:function(){return t(e.id)}}),Object(D.jsx)(Rn.Icon,{onClick:function(){return r(e)}})]}),Object(D.jsx)(Rn.ImgContainer,{children:Object(D.jsx)(Rn.ImgWrapper,{children:Object(D.jsx)(Rn.Img,{checked:o,src:"".concat(e.thumbnail.path,"/portrait_fantastic.").concat(e.thumbnail.extension)})})}),Object(D.jsx)(Rn.Footer,{children:Object(D.jsx)(Rn.Paragraph,{children:e.title})})]})};Vn.defaultProps={checked:!1};var Hn=Vn,Nn=function(n){var e=n.onClickDetail,t=n.onCheckComic,o=I(),r=o.viewComics,i=o.isComicSelected;return Object(D.jsx)(u.Row,{children:r.map((function(n){return Object(D.jsx)(u.Col,{xs:2,sm:2,lg:2,align:"center",justify:"center",children:Object(D.jsx)(Hn,{comic:n,checked:i(n.id),onCheck:t,onDetail:function(){return e(n)}})},"comic-".concat(n.id))}))})},_n=Object(o.memo)(Nn),Kn=function(n){var e=n.isLoading,t=n.onClickLoad,o=n.onClickSend,r=n.onClickDetail,i=I(),a=i.viewComics,c=i.updateSelectedComics;return Object(D.jsx)(D.Fragment,{children:a.length>0?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(_n,{onCheckComic:function(n){c(n)},onClickDetail:r}),Object(D.jsx)(_,{isLoading:e,onClickLoad:t,onClickSend:o})]}):Object(D.jsx)(W,{})})},Un=Object(o.memo)(Kn);function Wn(){return(Wn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function Zn(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var An=o.createElement("rect",{fill:"#EC1D24",width:"100%",height:"100%"}),Jn=o.createElement("path",{fill:"#FEFEFE",d:"M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"}),qn=o.createElement("path",{fill:"#EC1D24",d:"M0 0h30v52H0z"}),Gn=o.createElement("path",{fill:"#FEFEFE",d:"M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"});function Qn(n,e){var t=n.title,r=n.titleId,i=Zn(n,["title","titleId"]);return o.createElement("svg",Wn({width:130,height:52,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,An,Jn,qn,Gn)}var Xn,Yn,$n,ne,ee,te,oe,re,ie,ae,ce,le,se,ue,de,fe=o.forwardRef(Qn),be=(t.p,c.default.header(Xn||(Xn=Object(F.a)(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  border-bottom: 1px solid white;\n  background-color: ",";\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"])),(function(n){return n.theme.colors.mainColorBackground}))),he=c.default.label(Yn||(Yn=Object(F.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 10px;\n  cursor: pointer;\n\n  @media only screen and (max-width: 48rem) {\n    padding-top: 10px;\n  }\n"]))),pe=c.default.div($n||($n=Object(F.a)(["\n  display: flex;\n  \n  @media only screen and (max-width: 48rem) {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),me=c.default.div(ne||(ne=Object(F.a)(["\n  display: flex;\n\n  @media only screen and (min-width: 48rem) {\n    width: 100%;\n    max-width: 400px;\n    margin: 5px 10px 0 10px;\n  }\n\n  @media only screen and (max-width: 48rem) {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    margin: 0 15px;\n  }\n"]))),je={Header:be,Logo:Object(c.default)(fe)(ee||(ee=Object(F.a)(["\n  margin: 15px;\n"]))),LContainer:pe,RContainer:me,Label:he},xe=Object(c.css)(re||(re=Object(F.a)(["\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  border: 2px solid ",";\n"])),(function(n){return n.theme.colors.mainColor})),Oe=Object(c.css)(ie||(ie=Object(F.a)(["\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.statusColorProblem})),ge=Object(c.css)(ae||(ae=Object(F.a)(["\n  border: 1px solid ",";\n"])),(function(n){return n.theme.colors.textColorDisabled})),Ce=Object(c.css)(ce||(ce=Object(F.a)(["\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  border: 2px solid ",";\n"])),(function(n){return n.theme.colors.statusColorAlert})),ve=function(n){return"true"===n.typing?Ce:xe},ye=c.default.label(le||(le=Object(F.a)(["\n  display: ",";\n  top: -29px;\n  left: 0; \n  right: 0;\n  position: relative;\n  z-index: 0;\n  cursor: text;\n  padding: 0 12px 8px 12px;\n  transition: .2s ease-in-out;\n  color: ",";\n  ",";\n"])),(function(n){return"true"===n.display?"block":"none"}),(function(n){return n.theme.colors.textColorSecondary}),an),we=c.default.span(se||(se=Object(F.a)(["\n  display: ",";\n  position: absolute;\n  color: ",";\n  width: 100%;\n  bottom: -5px;\n  left: 12px;\n  ",";\n"])),(function(n){return"true"===n.error?"block":"none"}),(function(n){return n.theme.colors.statusColorProblem}),(function(n){var e=n.theme;return Object(c.css)(te||(te=Object(F.a)(["\nfont-family: ",";\nfont-size: ",";\nfont-weight: ",";\n"])),e.font.family,e.font.sizes.hint,e.font.weights.regular)})),ke=c.default.input(ue||(ue=Object(F.a)(["\n  outline: none;\n  transition: .2s ease-in-out;\n  box-sizing: border-box;\n  padding: 8px 12px 8px 12px;\n  width: 100%;\n  height: 40px;\n  border-radius: 4px;\n  font-size: 16px;\n  caret-color: ",";\n  color: ",";\n  ",";\n  ",";\n\n  &:disabled {\n    cursor: not-allowed;\n\n    &  ~ label {\n      cursor: not-allowed;\n      color: ",";\n    }\n  }\n\n  &:read-only {\n    pointer-events: none;\n    border: 1px solid ",";\n    background-color: ",";\n    color: ",";\n\n    & ~ label {\n      top: -47px;\n      left: 10px; \n      font-size: 12px;\n      padding: 0 5px 0px 5px;\n      pointer-events: none;\n      color: ",";\n      background-color:  ",";\n      ",";\n    }\n  }\n\n  &::placeholder {\n    opacity: ",";\n    transition: .2s ease-in-out;\n  }\n\n  &:focus {\n    ",";\n    :empty {\n      &::placeholder {\n        opacity: 1;\n        transition: .2s ease-in-out;\n      }\n    }\n  }\n\n \n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.colors.textColor}),(function(n){return"true"===n.error?Oe:ge}),an,(function(n){return n.theme.colors.textColorDisabled}),(function(n){return n.theme.colors.textColorContrast}),(function(n){return n.theme.colors.textColorContrast}),(function(n){return n.theme.colors.textColorSecondary}),(function(n){var e=n.theme;return"true"===n.error?e.colors.statusColorProblem:e.colors.mainColor}),(function(n){return n.theme.colors.mainColorContrast}),(function(n){var e=n.theme;return Object(c.css)(oe||(oe=Object(F.a)(["\nfont-family: ",";\nfont-size: ",";\nfont-weight: ",";\n"])),e.font.family,e.font.sizes.hint,e.font.weights.fw700)}),(function(n){var e=n.hasLabel;return e&&"true"===e?0:1}),(function(n){return"true"===n.error?Oe:ve})),Se={Wrapper:c.default.div(de||(de=Object(F.a)(['\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  margin-top: 12px;\n  width: 100%;\n  height: 40px;\n  padding: 4px 0 8px 0;\n\n  input:not([value=""]):not(:focus):invalid ~ label {\n    top: -47px;\n    left: 10px; \n    font-size: 12px;\n    padding: 0 5px 0px 5px;\n    pointer-events: none;\n    color: ',";\n    background-color:  ",";\n  }\n\n\n  input:valid ~ label,\n  input:focus ~ label {\n    top: -47px;\n    left: 10px; \n    font-size: 12px;\n    padding: 0 5px 0px 5px;\n    pointer-events: none;\n    color: ",";\n    background-color:  ",";\n  }\n"])),(function(n){var e=n.theme;return"true"===n.error?e.colors.statusColorProblem:e.colors.mainColor}),(function(n){return n.theme.colors.mainColorContrast}),(function(n){var e=n.theme;return"true"===n.error?e.colors.statusColorProblem:e.colors.mainColor}),(function(n){return n.theme.colors.mainColorContrast})),Input:ke,Message:we,Label:ye},Ie=function(n){var e=n.type,t=n.id,r=n.name,i=n.label,a=n.placeholder,c=n.value,l=n.disabled,s=n.error,u=n.className,d=n.message,b=n.readOnly,h=n.maxLength,p=n.dataTestId,m=n.style,j=n.onChange,x=n.onBlur,O=n.onKeyUp,g=n.onKeyDown,C=Object(o.useState)(!1),v=Object(f.a)(C,2),y=v[0],w=v[1];return Object(D.jsxs)(Se.Wrapper,{error:s?s.toString():"false",children:[Object(D.jsx)(Se.Input,{className:u,id:t,type:e,name:r,value:c,disabled:l,readOnly:b,placeholder:a,error:s?s.toString():"false",maxLength:h,style:m,pattern:".+",required:!0,formNoValidate:!0,"data-testid":p,onChange:j,onBlur:x,onKeyDown:function(n){n.persist(),w(!0),g&&g(n)},onKeyUp:function(n){n.persist(),setTimeout((function(){w(!1)}),200),O&&O(n)},autoComplete:"off",hasLabel:""!==i?"true":"false",typing:y?y.toString():"false"}),Object(D.jsx)(Se.Label,{htmlFor:t,display:""!==i?"true":"false",children:i}),Object(D.jsx)(Se.Message,{error:s?s.toString():"false",children:d})]})};Ie.defaultProps={className:"",type:"text",name:"",value:"",label:"",placeholder:"",id:"",message:"",disabled:!1,error:!1,readOnly:!1,dataTestId:"",maxLength:void 0,style:void 0,onBlur:function(){},onChange:function(){},onKeyUp:function(){},onKeyDown:function(){}};var Fe,Le,Pe,Ee,ze,De,Be,Te,Me,Re,Ve,He,Ne,_e,Ke,Ue,We,Ze,Ae=Ie,Je=function(){var n=Object(o.useState)(""),e=Object(f.a)(n,2),t=e[0],r=e[1],i=I(),a=i.filterViewComics,c=i.resetFilterdViewComics;return Object(D.jsxs)(je.Header,{children:[Object(D.jsx)(je.LContainer,{children:Object(D.jsx)(je.Logo,{})}),Object(D.jsx)(je.RContainer,{children:Object(D.jsx)(Ae,{id:"search",placeholder:"Search for some comics here",value:t,onChange:function(n){var e;r(n.target.value),(e=n.target.value).length>3&&a(e),function(n){0===n.length&&c()}(n.target.value)}})})]})},qe=Object(o.memo)(Je),Ge={Footer:c.default.footer(Fe||(Fe=Object(F.a)(["\n  margin-top: 10px;\n  width: 100%;\n  margin-bottom: 10px;\n  text-align: center;\n\n"]))),Link:c.default.a(Le||(Le=Object(F.a)(["\n  text-decoration: none;\n  color: ",";\n  ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.colors.textColor}),an)},Qe=function(n){var e=n.copyright;return Object(D.jsx)(Ge.Footer,{children:Object(D.jsx)(Ge.Link,{href:"http://marvel.com",target:"_blank",rel:"noreferrer",children:e})})},Xe={Container:c.default.div(Pe||(Pe=Object(F.a)(["\n  margin-top: 90px;\n  min-height: calc(100vh - 150px);\n\n  @media only screen and (max-width: 48rem) {\n    margin-top: 165px;\n  }\n\n"])))},Ye=Object(c.css)(Ee||(Ee=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 400px;\n  min-width: 300px;\n  max-width: 700px;\n  background-color: ",";\n  border-radius: 4px;\n  padding: 10px;\n  justify-content: space-around;\n"])),(function(n){return n.theme.colors.mainColorContrast})),$e={Modal:s.a.styled(ze||(ze=Object(F.a)(["\n  ",";\n"])),Ye)},nt=function(n){var e=n.open,t=n.children;return Object(D.jsx)($e.Modal,{isOpen:e,children:t})},et=c.default.div(De||(De=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  \n  @media only screen and (max-width: 48rem) {\n    flex-wrap: wrap;\n  }\n"]))),tt=c.default.div(Be||(Be=Object(F.a)(["\n  display: flex;\n  margin: 10px;\n\n  @media only screen and (max-width: 48rem) {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 10px;\n  }\n"]))),ot=c.default.div(Te||(Te=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n"]))),rt=c.default.p(Me||(Me=Object(F.a)(["\n  ",";\n  color: ",";\n"])),an,(function(n){return n.theme.colors.textColor})),it={Container:et,LContent:tt,RContent:ot,Footer:c.default.footer(Re||(Re=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row-reverse;\n  position: relative;\n  bottom: 0;\n  padding-top: 10px;\n  border-top: 1px solid ",";\n"])),(function(n){return n.theme.colors.mainColor})),Paragraph:rt,Img:c.default.img(Ve||(Ve=Object(F.a)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.mainColorBackground}))},at=function(n){var e=n.comic,t=n.open,o=n.onClose;return Object(D.jsxs)(nt,{open:t,children:[Object(D.jsxs)(it.Container,{children:[Object(D.jsx)(it.LContent,{children:Object(D.jsx)(it.Img,{src:"".concat(e.thumbnail.path,"/portrait_uncanny.").concat(e.thumbnail.extension),alt:"Comic first page"})}),Object(D.jsxs)(it.RContent,{children:[Object(D.jsx)("h4",{children:e.title}),Object(D.jsx)(it.Paragraph,{dangerouslySetInnerHTML:{__html:e.description||"This comic dont have description registered."}}),Object(D.jsx)(it.Paragraph,{children:e.creators.available>0&&Object(D.jsxs)("strong",{children:["Created By:"," ",e.creators.available>1?e.creators.items.map((function(n){return n.name})).join(", "):e.creators.items[0].name,"."]})})]})]}),Object(D.jsx)(it.Footer,{children:Object(D.jsx)(V,{type:"button",secondary:!0,onClick:o,children:"Voltar"})})]})},ct=Object(o.memo)(at),lt=t(31),st=c.default.div(He||(He=Object(F.a)(["\n  display: flex;\n  overflow-y: auto;\n  overflow-x: auto;\n  flex-direction: column;\n  max-height: 400px;\n"]))),ut=c.default.header(Ne||(Ne=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n  margin-bottom: 10px;\n"]))),dt={Container:st,Footer:c.default.footer(_e||(_e=Object(F.a)(["\n  display: flex;\n  width: 100%;\n  flex-direction: row-reverse;\n  position: relative;\n  bottom: 0;\n  padding-top: 10px;\n  border-top: 1px solid ",";\n"])),(function(n){return n.theme.colors.mainColor})),EmailContent:c.default.div(Ke||(Ke=Object(F.a)(["\n  padding: 10px;\n  display: flex;\n"]))),Paragraph:c.default.p(Ue||(Ue=Object(F.a)(["\n  ",";\n"])),an),RContent:c.default.div(We||(We=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: 15px;\n"]))),Header:ut,Title:c.default.h3(Ze||(Ze=Object(F.a)(["\n  margin: 5px;\n  color: ",";\n"])),(function(n){return n.theme.colors.mainColor}))},ft=function(n){var e=n.open,t=n.onClose,r=n.onSend,i=Object(o.useState)(""),a=Object(f.a)(i,2),c=a[0],l=a[1],s=Object(o.useState)(!0),u=Object(f.a)(s,2),d=u[0],b=u[1],h=Object(o.useState)(!1),p=Object(f.a)(h,2),m=p[0],j=p[1],x=I().selectedComics,O=function(n){return"".concat(n.thumbnail.path,"/portrait_fantastic.").concat(n.thumbnail.extension)},g=function(){l(""),b(!0),j(!1)};return Object(D.jsxs)(nt,{open:e,children:[Object(D.jsxs)(dt.Header,{children:[Object(D.jsx)(dt.Title,{children:"Send E-mail"}),Object(D.jsx)(Ae,{id:"email",placeholder:"john.doe@teste.com",label:"E-mail",type:"email",value:c,error:m&&d,message:"Invalid E-mail",onBlur:function(){j(!0),b(!Object(lt.a)(c))},onChange:function(n){l(n.target.value)}})]}),Object(D.jsx)(dt.Container,{children:x&&x.length>0&&x.map((function(n){return Object(D.jsxs)(dt.EmailContent,{children:[Object(D.jsx)("img",{src:O(n),alt:n.title}),Object(D.jsxs)(dt.RContent,{children:[Object(D.jsx)("h4",{children:n.title}),Object(D.jsx)(dt.Paragraph,{dangerouslySetInnerHTML:{__html:n.description||"This comic dont have description registered."}})]})]},"comic-email".concat(n.id))}))}),Object(D.jsxs)(dt.Footer,{children:[Object(D.jsx)(V,{type:"button",onClick:function(n){g(),r(n)},disabled:d,children:"Enviar"}),Object(D.jsx)(V,{type:"button",secondary:!0,onClick:function(n){g(),t(n)},children:"Voltar"})]})]})},bt={creators:{available:0},thumbnail:{path:""}},ht=function(){var n=Object(o.useState)(Object(d.a)({},bt)),e=Object(f.a)(n,2),t=e[0],r=e[1],i=Object(o.useState)(""),a=Object(f.a)(i,2),c=a[0],l=a[1],s=Object(o.useState)(!1),b=Object(f.a)(s,2),h=b[0],p=b[1],m=Object(o.useState)(!0),j=Object(f.a)(m,2),x=j[0],g=j[1],C=Object(o.useState)(!1),v=Object(f.a)(C,2),y=v[0],w=v[1],S=Object(o.useState)(!1),F=Object(f.a)(S,2),L=F[0],P=F[1],E=I(),z=E.comics,B=E.updateComics,T=function(n){var e=n.data;O.totalOfItens=e.data.total,B(e.data.results),p(!1)};return Object(o.useEffect)((function(){x&&(k.getComics().then((function(n){var e=n.data;B(e.data.results),l(e.attributionText),O.totalOfItens=e.data.total})),g(!1))}),[x,B]),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.Row,{children:Object(D.jsxs)(u.Col,{children:[Object(D.jsx)(qe,{}),Object(D.jsxs)(Xe.Container,{children:[z.length>0&&Object(D.jsx)(Un,{isLoading:h,onClickLoad:function(){p(!0),k.getComics().then(T)},onClickSend:function(){P(!0)},onClickDetail:function(n){r(n),w(!0)}}),Object(D.jsx)(ct,{open:y,comic:t,onClose:function(){return w(!1)}}),Object(D.jsx)(ft,{open:L,onSend:function(){P(!1)},onClose:function(){return P(!1)}})]})]})}),Object(D.jsx)(u.Row,{children:Object(D.jsx)(Qe,{copyright:c})})]})},pt=Object(o.memo)(ht),mt={colors:{mainColor:"#EC1D24",mainColorBackground:"#202020",mainColorContrast:"#FFFFFF",statusColorProblem:"#e62429",statusColorAlert:"#FF9500",textColor:"#1C1C1C",textColorDisabled:"#E5E5E5",textColorContrast:"#FFFFFF"},font:{family:"'Roboto', sans-serif;",sizes:{hint:"10px",paragraph:"16px",cta:"14px"},weights:{regular:400,bold:700}}},jt=t(9),xt=function(n){var e=n.children,t=Object(o.useState)([]),r=Object(f.a)(t,2),i=r[0],a=r[1],c=Object(o.useState)([]),l=Object(f.a)(c,2),s=l[0],u=l[1],d=Object(o.useState)([]),b=Object(f.a)(d,2),h=b[0],p=b[1],m=function(n){return h.some((function(e){return e.id===n}))},j={comics:i,setComics:a,viewComics:s,setViewComics:u,selectedComics:h,setSelectedComics:p,filterViewComics:function(n){var e=s.filter((function(e){return e.title.trim().toUpperCase().includes(n.trim().toUpperCase())}));u(e)},resetFilterdViewComics:function(){u(Object(jt.a)(i))},updateSelectedComics:function(n){m(n)?p((function(e){return Object(jt.a)(e.filter((function(e){return e.id!==n})))})):p((function(e){var t=i.filter((function(e){return e.id===n}));return e.push(t[0]),Object(jt.a)(e)}))},updateComics:function(n){var e=i.concat(n).filter((function(n,e,t){return t.findIndex((function(e){return e.id===n.id}))===e}));a(Object(jt.a)(e)),u(Object(jt.a)(e))},isComicSelected:m};return Object(D.jsx)(S.Provider,{value:j,children:e})};var Ot=function(){return Object(D.jsx)(c.ThemeProvider,{theme:mt,children:Object(D.jsx)(l.ModalProvider,{children:Object(D.jsx)(xt,{children:Object(D.jsx)(u.Container,{fluid:!0,children:Object(D.jsx)(pt,{})})})})})},gt=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),o(n),r(n),i(n),a(n)}))};a.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(Ot,{})}),document.getElementById("root")),gt()}},[[61,1,2]]]);
//# sourceMappingURL=main.2363d7e7.chunk.js.map