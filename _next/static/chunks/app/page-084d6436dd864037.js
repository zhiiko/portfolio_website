(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3369:(e,t,a)=>{Promise.resolve().then(a.bind(a,2797))},2797:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var i=a(5155),n=a(2115);let r=e=>{let t;let a=new Set,i=(e,i)=>{let n="function"==typeof e?e(t):e;if(!Object.is(n,t)){let e=t;t=(null!=i?i:"object"!=typeof n||null===n)?n:Object.assign({},t,n),a.forEach(a=>a(t,e))}},n=()=>t,r={setState:i,getState:n,getInitialState:()=>l,subscribe:e=>(a.add(e),()=>a.delete(e))},l=t=e(i,n,r);return r},l=e=>e?r(e):r,s=e=>e,o=e=>{let t=l(e),a=e=>(function(e,t=s){let a=n.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return n.useDebugValue(a),a})(t,e);return Object.assign(a,t),a},c=e=>e?o(e):o,d=e=>t=>{try{let a=e(t);if(a instanceof Promise)return a;return{then:e=>d(e)(a),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>d(t)(e)}}},m=(e,t)=>(a,i,n)=>{let r,l={storage:function(e,t){let a;try{a=e()}catch(e){return}return{getItem:e=>{var t;let i=e=>null===e?null:JSON.parse(e,void 0),n=null!=(t=a.getItem(e))?t:null;return n instanceof Promise?n.then(i):i(n)},setItem:(e,t)=>a.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>a.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,o=new Set,c=new Set,m=l.storage;if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),a(...e)},i,n);let u=()=>{let e=l.partialize({...i()});return m.setItem(l.name,{state:e,version:l.version})},h=n.setState;n.setState=(e,t)=>{h(e,t),u()};let p=e((...e)=>{a(...e),u()},i,n);n.getInitialState=()=>p;let g=()=>{var e,t;if(!m)return;s=!1,o.forEach(e=>{var t;return e(null!=(t=i())?t:p)});let n=(null==(t=l.onRehydrateStorage)?void 0:t.call(l,null!=(e=i())?e:p))||void 0;return d(m.getItem.bind(m))(l.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===l.version)return[!1,e.state];if(l.migrate){let t=l.migrate(e.state,e.version);return t instanceof Promise?t.then(e=>[!0,e]):[!0,t]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;let[n,s]=e;if(a(r=l.merge(s,null!=(t=i())?t:p),!0),n)return u()}).then(()=>{null==n||n(r,void 0),r=i(),s=!0,c.forEach(e=>e(r))}).catch(e=>{null==n||n(void 0,e)})};return n.persist={setOptions:e=>{l={...l,...e},e.storage&&(m=e.storage)},clearStorage:()=>{null==m||m.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(o.add(e),()=>{o.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},l.skipHydration||g(),r||p},u=c(m(e=>({isComplete:!1,lines:[],commandHistory:[],historyIndex:-1,loading:!1,loadingProgress:0,awaitingLoadResponse:!0,hasCalledPrompt:!1,setComplete:t=>e({isComplete:t}),setLines:t=>e({lines:t}),addLine:t=>e(e=>({lines:[...e.lines,t]})),clearLines:()=>e({lines:[]}),addToHistory:t=>e(e=>({commandHistory:[...e.commandHistory,t],historyIndex:-1})),setHistoryIndex:t=>e({historyIndex:t}),setLoading:t=>e({loading:t}),setLoadingProgress:t=>e({loadingProgress:t}),setAwaitingLoadResponse:t=>e({awaitingLoadResponse:t}),setHasCalledPrompt:t=>e({hasCalledPrompt:t})}),{name:"terminal-storage"})),h=[{text:"> Initializing portfolio interface...",delay:1e3},{text:"> Loading credentials...",delay:800},{text:"> Welcome to Zakaria Sisalem's portfolio",delay:1200},{text:"> Computer Science & Mathematics @ UT Austin",delay:800},{text:"> Specializing in ML/AI and Full-Stack Development",delay:800}],p=e=>{let{onComplete:t}=e,[a,r]=(0,n.useState)(""),l=(0,n.useRef)(null),{lines:s,commandHistory:o,historyIndex:c,addLine:d,clearLines:m,addToHistory:p,setHistoryIndex:g,loading:x,loadingProgress:y,awaitingLoadResponse:f,setAwaitingLoadResponse:v,isComplete:b,setLoading:j,setLoadingProgress:w,hasCalledPrompt:k,setHasCalledPrompt:N,setComplete:S}=u();(0,n.useEffect)(()=>{0!==s.length||b||k||(m(),d("Do you want to load? (Y/n)"),v(!0),N(!0))},[s.length,b,k,d,m,v,N]),(0,n.useLayoutEffect)(()=>{l.current&&(l.current.scrollTop=l.current.scrollHeight)},[s,x,y,a]);let L=async()=>{j(!0),w(0),m();try{for(let e=0;e<h.length;e++){let{text:t,delay:a}=h[e];await new Promise(e=>setTimeout(e,a)),d(t);let i=Math.round((e+1)/h.length*90);w(i)}}catch(e){d("Error during loading. Please try again."),j(!1);return}w(100),d("Load complete."),d("Type 'help' for available commands"),j(!1),S(!0),t()},P=e=>{let t=e.trim().toLowerCase();if(p(t),d("> ".concat(e)),f){"yes"===t||"y"===t?(L(),v(!1)):("clear"===t?(m(),d("Do you want to load? (Y/n)")):d("Load cancelled. Type 'yes' to load."),v(!0));return}let a={help:"Available commands:\n  - projects: View all projects\n  - skills: List technical skills\n  - contact: Get contact info\n  - clear: Clear terminal",projects:"Featured projects:\n  - Market Liquidity Analysis (ML)\n  - Custom Unix Shell (Systems)\n  - Neural Story Generator (NLP)\n\nNavigate to Projects section for more details.",skills:"Technical Skills:\n  Languages: Python, JavaScript, Java, C/C++\n  ML/AI: PyTorch, TensorFlow, Spark MLlib\n  Web: React, Node.js, MongoDB\n  Cloud: AWS, Docker",contact:"Email: sisalemzakaria@gmail.com\nLinkedIn: /in/zakaria-sisalem\n\nFeel free to reach out!",clear:""};if("clear"===t){m();return}t in a?d(a[t]):d('Command not found. Type "help" for available commands.')};return(0,i.jsxs)("div",{className:"bg-gray-900 p-4 rounded-lg shadow-2xl w-full max-w-4xl h-96 overflow-auto font-mono text-sm",children:[(0,i.jsxs)("div",{className:"flex space-x-2 mb-4",children:[(0,i.jsx)("div",{className:"w-3 h-3 rounded-full bg-red-500"}),(0,i.jsx)("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),(0,i.jsx)("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),(0,i.jsxs)("div",{className:"text-green-400",ref:l,children:[x&&(0,i.jsx)("div",{className:"sticky top-0 bg-gray-900 pb-1 mb-1 whitespace-pre-wrap",children:"Loading: ".concat((e=>{let t=Math.round(e/100*10);return"[".concat("#".repeat(t)).concat(" ".repeat(10-t),"] ").concat(e,"%")})(y))}),s.map((e,t)=>(0,i.jsx)("div",{className:"mb-1 whitespace-pre-wrap",children:e},t)),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"text-green-400",children:"> "}),(0,i.jsx)("input",{type:"text",value:a,onChange:e=>r(e.target.value),onKeyDown:e=>{if("Enter"===e.key)P(a),r("");else if("ArrowUp"===e.key){if(e.preventDefault(),c<o.length-1){let e=c+1;g(e),r(o[o.length-1-e])}}else if("ArrowDown"===e.key){if(e.preventDefault(),c>0){let e=c-1;g(e),r(o[o.length-1-e])}else g(-1),r("")}},className:"flex-1 bg-transparent outline-none text-green-400 ml-1",autoFocus:!0})]})]})]})};var g=a(2582),x=a(4109),y=a(2472),f=a(4057);let v=(0,f.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),b=(0,f.A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),j=(0,f.A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),w=(0,f.A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var k=a(8173),N=a.n(k),S=a(3478),L=a(6559);let P=c(m(e=>({hasAnimatedOnce:!1,setHasAnimatedOnce:t=>e({hasAnimatedOnce:t})}),{name:"animation-storage"}));function A(){let{hasAnimatedOnce:e,setHasAnimatedOnce:t}=P(),[a,r]=(0,n.useState)(e),l=[{name:"Full-Stack",icon:g.A,path:"/full-stack",description:"Web & Mobile Development"},{name:"Machine Learning",icon:x.A,path:"/machine-learning",description:"AI & Data Science"},{name:"About Me",icon:y.A,path:"/about",description:"Background & Experience"}];return(0,i.jsx)(L.A,{children:(0,i.jsxs)("div",{className:"min-h-screen relative overflow-hidden",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 dark:from-dark-300/50 dark:via-dark-400/50 dark:to-dark-500/70 z-0"}),(0,i.jsx)("div",{className:"absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse"}),(0,i.jsx)("div",{className:"absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse",style:{animationDelay:"1s"}}),(0,i.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl animate-pulse",style:{animationDelay:"2s"}}),(0,i.jsxs)("div",{className:"relative z-10 container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center",children:[(0,i.jsx)(p,{onComplete:()=>{e||t(!0),r(!0)}}),a&&(0,i.jsxs)(S.P.div,{className:"w-full max-w-5xl mt-16",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[(0,i.jsxs)(S.P.div,{className:"text-center mb-20",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.7},children:[(0,i.jsxs)(S.P.h1,{className:"font-heading text-5xl md:text-7xl font-bold mb-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.7},children:[(0,i.jsx)("span",{className:"text-gradient",children:"Building the Future"})," ",(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"text-foreground",children:"with Code"})]}),(0,i.jsx)(S.P.p,{className:"text-xl text-foreground/70 max-w-3xl mx-auto mb-8",initial:{opacity:0},animate:{opacity:1},transition:{delay:.6,duration:.7},children:"Combining full-stack development expertise with machine learning innovation to create impactful solutions."}),(0,i.jsx)(S.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.5},children:(0,i.jsxs)(N(),{href:"/projects",className:"inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all duration-300 shadow-glow hover:shadow-glow-lg",children:["View Projects ",(0,i.jsx)(w,{size:16,className:"ml-2"})]})})]}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16",children:l.map((e,t)=>{let{name:a,icon:n,path:r,description:l}=e;return(0,i.jsx)(S.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3+.2*t,duration:.5},className:"relative",children:(0,i.jsx)(N(),{href:r,className:"block group",children:(0,i.jsxs)("div",{className:"glass-card p-8 h-full flex flex-col items-center text-center group-hover:border-primary-500/30 transition-all duration-300",children:[(0,i.jsxs)(S.P.div,{animate:{y:[0,-10,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut",delay:.3*t},className:"relative mb-6",children:[(0,i.jsx)("div",{className:"absolute inset-0 bg-primary-500/20 rounded-full filter blur-md transform scale-110 group-hover:scale-150 group-hover:bg-primary-500/30 transition-all duration-300"}),(0,i.jsx)(n,{className:"w-16 h-16 text-primary-500 relative z-10"})]}),(0,i.jsx)("h2",{className:"text-xl font-heading font-semibold text-foreground group-hover:text-primary-500 transition-colors duration-300 mb-2",children:a}),(0,i.jsx)("p",{className:"text-foreground/70 mb-4",children:l}),(0,i.jsx)("div",{className:"mt-auto",children:(0,i.jsxs)("span",{className:"inline-flex items-center text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300",children:["Explore ",(0,i.jsx)(I,{size:16,className:"ml-1"})]})})]})})},r)})}),(0,i.jsxs)(S.P.div,{className:"flex flex-col items-center mt-16",initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.5},children:[(0,i.jsx)(S.P.p,{className:"text-foreground/70 mb-4 font-medium",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.1,duration:.5},children:"Connect with me"}),(0,i.jsx)("div",{className:"flex space-x-6",children:[{name:"GitHub",icon:v,url:"https://github.com/zhiiko"},{name:"LinkedIn",icon:b,url:"https://linkedin.com/in/zakaria-sisalem"},{name:"Email",icon:j,url:"mailto:sisalemzakaria@gmail.com"}].map((e,t)=>{let{name:a,icon:n,url:r}=e;return(0,i.jsxs)(S.P.a,{href:r,target:"_blank",rel:"noopener noreferrer",className:"group flex flex-col items-center",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:1.1+.1*t,duration:.3},whileHover:{y:-3,transition:{duration:.2}},children:[(0,i.jsx)(S.P.div,{className:"p-3 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-colors duration-300",animate:{y:[0,-5,0]},transition:{duration:3,repeat:1/0,ease:"easeInOut",delay:.3*t},children:(0,i.jsx)(n,{className:"w-5 h-5"})}),(0,i.jsx)("span",{className:"mt-2 text-xs text-foreground/70 group-hover:text-primary-500 transition-colors duration-300",children:a})]},a)})})]})]})]})]})})}function I(e){let{size:t,...a}=e;return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:t,height:t,...a,children:[(0,i.jsx)("path",{d:"M5 12h14"}),(0,i.jsx)("path",{d:"m12 5 7 7-7 7"})]})}},6559:(e,t,a)=>{"use strict";a.d(t,{A:()=>r});var i=a(5155),n=a(3478);function r(e){let{children:t}=e;return(0,i.jsx)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:260,damping:20},children:t})}}},e=>{var t=t=>e(e.s=t);e.O(0,[478,301,441,517,358],()=>t(3369)),_N_E=e.O()}]);