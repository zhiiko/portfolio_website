(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{791:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,347,23)),Promise.resolve().then(n.t.bind(n,9993,23)),Promise.resolve().then(n.t.bind(n,3628,23)),Promise.resolve().then(n.t.bind(n,1732,23)),Promise.resolve().then(n.bind(n,9646)),Promise.resolve().then(n.bind(n,9967))},6046:(e,t,n)=>{"use strict";var a=n(6658);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}}),n.o(a,"useRouter")&&n.d(t,{useRouter:function(){return a.useRouter}})},9646:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});var a=n(5155),i=n(5683),s=n(6046);function r(e){let{children:t}=e,n=(0,s.usePathname)();return(0,a.jsx)(i.N,{mode:"wait",children:(0,a.jsx)("main",{className:"pt-16",children:t},n)})}},9967:(e,t,n)=>{"use strict";n.d(t,{default:()=>y});var a=n(5155),i=n(2115),s=n(4057);let r=(0,s.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);var l=n(2582),o=n(4109),c=n(2472);let d=(0,s.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),u=(0,s.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var m=n(8173),h=n.n(m),p=n(6046),x=n(5683),f=n(3478);let y=()=>{let[e,t]=(0,i.useState)(!1),[n,s]=(0,i.useState)(!1),m=(0,p.usePathname)();(0,i.useEffect)(()=>{let e=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let y=[{name:"Home",icon:r,path:"/"},{name:"Full-Stack",icon:l.A,path:"/full-stack"},{name:"Machine Learning",icon:o.A,path:"/machine-learning"},{name:"About",icon:c.A,path:"/about"}];return(0,a.jsx)("nav",{className:"fixed w-full top-0 z-50 transition-all duration-300 ".concat(n?"py-2 glass shadow-lg":"py-4 bg-transparent"),children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(h(),{href:"/",className:"font-heading text-xl md:text-2xl font-bold transition-all duration-300",onClick:()=>t(!1),children:(0,a.jsx)("span",{className:"text-gradient",children:"Zakaria Sisalem"})})}),(0,a.jsx)("div",{className:"hidden md:flex items-center space-x-1",children:y.map(e=>{let{name:t,icon:n,path:i}=e;return(0,a.jsxs)(h(),{href:i,className:"flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ".concat(m===i?"bg-primary-500/20 text-primary-500":"hover:bg-primary-500/10 text-foreground/80 hover:text-primary-500"),children:[(0,a.jsx)(n,{size:16,className:"shrink-0"}),(0,a.jsx)("span",{children:t})]},t)})}),(0,a.jsx)("div",{className:"md:hidden flex items-center",children:(0,a.jsx)("button",{onClick:()=>t(!e),className:"p-2 rounded-full hover:bg-primary-500/10 transition-colors","aria-label":"Toggle menu",children:(0,a.jsx)(x.N,{mode:"wait",initial:!1,children:(0,a.jsx)(f.P.div,{initial:{opacity:0,rotate:e?-90:90},animate:{opacity:1,rotate:0},exit:{opacity:0,rotate:e?90:-90},transition:{duration:.2},children:e?(0,a.jsx)(d,{size:24,className:"text-primary-500"}):(0,a.jsx)(u,{size:24})},e?"open":"closed")})})})]}),(0,a.jsx)(x.N,{children:e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.P.div,{initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},className:"md:hidden fixed inset-0 bg-background",style:{top:"0px",zIndex:40},onClick:()=>t(!1)}),(0,a.jsx)(f.P.div,{initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0},transition:{type:"spring",bounce:.1,duration:.5},className:"md:hidden fixed inset-0 glass-card border-l border-border shadow-xl",style:{top:n?"52px":"68px",left:"auto",width:"280px",zIndex:50},children:(0,a.jsxs)(f.P.div,{className:"flex flex-col p-4 h-full",initial:"closed",animate:"open",variants:{closed:{opacity:0},open:{opacity:1,transition:{staggerChildren:.07}}},children:[(0,a.jsx)("div",{className:"mb-4 px-2 py-2 border-b border-border/40",children:(0,a.jsx)("h3",{className:"text-lg font-heading font-medium text-foreground/80",children:"Navigation"})}),(0,a.jsx)("div",{className:"space-y-1",children:y.map(e=>{let{name:n,icon:i,path:s}=e;return(0,a.jsx)(f.P.div,{variants:{closed:{x:20,opacity:0},open:{x:0,opacity:1}},className:"w-full",children:(0,a.jsxs)(h(),{href:s,onClick:()=>t(!1),className:"flex items-center w-full px-3 py-3 rounded-lg transition-all duration-300 ".concat(m===s?"bg-primary-500/20 text-primary-500":"text-foreground/80 hover:bg-primary-500/10 hover:text-primary-500"),children:[(0,a.jsx)(i,{size:18,className:"shrink-0"}),(0,a.jsx)("span",{className:"ml-3 font-medium",children:n})]})},s)})})]})})]})})]})})}},347:()=>{},1732:e=>{e.exports={style:{fontFamily:"'Fira Code', 'Fira Code Fallback'",fontStyle:"normal"},className:"__className_74c79e",variable:"__variable_74c79e"}},9993:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},3628:e=>{e.exports={style:{fontFamily:"'Outfit', 'Outfit Fallback'",fontStyle:"normal"},className:"__className_ad50fd",variable:"__variable_ad50fd"}},5683:(e,t,n)=>{"use strict";n.d(t,{N:()=>y});var a=n(5155),i=n(2115),s=n(4710),r=n(9234),l=n(9656),o=n(7249);class c extends i.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,a=this.props.sizeRef.current;a.height=t.offsetHeight||0,a.width=t.offsetWidth||0,a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function d(e){let{children:t,isPresent:n,anchorX:s}=e,r=(0,i.useId)(),l=(0,i.useRef)(null),d=(0,i.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:u}=(0,i.useContext)(o.Q);return(0,i.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:i,right:o}=d.current;if(n||!l.current||!e||!t)return;l.current.dataset.motionPopId=r;let c=document.createElement("style");return u&&(c.nonce=u),document.head.appendChild(c),c.sheet&&c.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            ").concat("left"===s?"left: ".concat(i):"right: ".concat(o),"px !important;\n            top: ").concat(a,"px !important;\n          }\n        ")),()=>{document.head.removeChild(c)}},[n]),(0,a.jsx)(c,{isPresent:n,childRef:l,sizeRef:d,children:i.cloneElement(t,{ref:l})})}let u=e=>{let{children:t,initial:n,isPresent:s,onExitComplete:o,custom:c,presenceAffectsLayout:u,mode:h,anchorX:p}=e,x=(0,r.M)(m),f=(0,i.useId)(),y=(0,i.useCallback)(e=>{for(let t of(x.set(e,!0),x.values()))if(!t)return;o&&o()},[x,o]),v=(0,i.useMemo)(()=>({id:f,initial:n,isPresent:s,custom:c,onExitComplete:y,register:e=>(x.set(e,!1),()=>x.delete(e))}),u?[Math.random(),y]:[s,y]);return(0,i.useMemo)(()=>{x.forEach((e,t)=>x.set(t,!1))},[s]),i.useEffect(()=>{s||x.size||!o||o()},[s]),"popLayout"===h&&(t=(0,a.jsx)(d,{isPresent:s,anchorX:p,children:t})),(0,a.jsx)(l.t.Provider,{value:v,children:t})};function m(){return new Map}var h=n(5087);let p=e=>e.key||"";function x(e){let t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}var f=n(5403);let y=e=>{let{children:t,custom:n,initial:l=!0,onExitComplete:o,presenceAffectsLayout:c=!0,mode:d="sync",propagate:m=!1,anchorX:y="left"}=e,[v,b]=(0,h.xQ)(m),g=(0,i.useMemo)(()=>x(t),[t]),j=m&&!v?[]:g.map(p),N=(0,i.useRef)(!0),k=(0,i.useRef)(g),w=(0,r.M)(()=>new Map),[P,_]=(0,i.useState)(g),[C,E]=(0,i.useState)(g);(0,f.E)(()=>{N.current=!1,k.current=g;for(let e=0;e<C.length;e++){let t=p(C[e]);j.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[C,j.length,j.join("-")]);let M=[];if(g!==P){let e=[...g];for(let t=0;t<C.length;t++){let n=C[t],a=p(n);j.includes(a)||(e.splice(t,0,n),M.push(n))}return"wait"===d&&M.length&&(e=M),E(x(e)),_(g),null}let{forceRender:z}=(0,i.useContext)(s.L);return(0,a.jsx)(a.Fragment,{children:C.map(e=>{let t=p(e),i=(!m||!!v)&&(g===C||j.includes(t));return(0,a.jsx)(u,{isPresent:i,initial:(!N.current||!!l)&&void 0,custom:n,presenceAffectsLayout:c,mode:d,onExitComplete:i?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==z||z(),E(k.current),m&&(null==b||b()),o&&o())},anchorX:y,children:e},t)})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[225,478,301,441,517,358],()=>t(791)),_N_E=e.O()}]);