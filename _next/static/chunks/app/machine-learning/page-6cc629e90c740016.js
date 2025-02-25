(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{3576:(e,t,i)=>{Promise.resolve().then(i.bind(i,9464))},6046:(e,t,i)=>{"use strict";var n=i(6658);i.o(n,"usePathname")&&i.d(t,{usePathname:function(){return n.usePathname}}),i.o(n,"useRouter")&&i.d(t,{useRouter:function(){return n.useRouter}})},9464:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(5155),a=i(6826),r=i(3925),s=i(6559),o=i(3478);function l(){let e=Object.values(r.d).filter(e=>"Machine Learning"===e.category);return(0,n.jsx)(s.A,{children:(0,n.jsxs)("div",{className:"min-h-screen relative overflow-hidden",children:[(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-light-gradient-1 to-background dark:from-dark-300/30 dark:to-background z-0"}),(0,n.jsx)("div",{className:"absolute top-40 right-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl"}),(0,n.jsx)("div",{className:"absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl"}),(0,n.jsx)("div",{className:"relative z-10 container mx-auto py-24 px-4 sm:px-6 lg:px-8",children:(0,n.jsxs)(o.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[(0,n.jsx)(o.P.h1,{className:"text-4xl md:text-5xl font-heading font-bold mb-4",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1,duration:.5},children:"Machine Learning"}),(0,n.jsx)(o.P.p,{className:"max-w-3xl text-lg text-muted mb-12",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.5},children:"Discover my machine learning projects that demonstrate expertise in AI, data science, and advanced algorithms for solving complex problems."}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-2",children:e.map((e,t)=>(0,n.jsx)(a.A,{project:e,index:t},e.id))})]})})]})})}},6559:(e,t,i)=>{"use strict";i.d(t,{A:()=>r});var n=i(5155),a=i(3478);function r(e){let{children:t}=e;return(0,n.jsx)(a.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:260,damping:20},children:t})}},6826:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(5155),a=i(6046),r=i(3478);let s=(0,i(4057).A)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),o=e=>{let{project:t,index:i=0}=e,o=(0,a.useRouter)();return(0,n.jsx)(r.P.div,{className:"glass-card group overflow-hidden cursor-pointer relative",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*i,ease:[.4,0,.2,1]},whileHover:{y:-5,transition:{duration:.2}},onClick:()=>{o.push("/projects/".concat(t.id))},children:(0,n.jsxs)("div",{className:"p-6 relative",children:[(0,n.jsxs)("div",{className:"flex flex-col mb-3 sm:flex-row sm:items-start sm:justify-between",children:[(0,n.jsx)("h3",{className:"font-heading text-xl font-semibold group-hover:text-primary-500 transition-colors mb-2 sm:mb-0",children:t.title}),(0,n.jsx)("div",{className:"flex-shrink-0 mt-1 sm:mt-0 sm:ml-2",children:(0,n.jsx)("span",{className:"inline-block px-2 py-1 text-xs font-semibold rounded-full ".concat("Machine Learning"===t.category?"bg-secondary-500/20 text-secondary-500":"Systems Programming"===t.category?"bg-orange-500/20 text-orange-500":"bg-accent-500/20 text-accent-500"),children:t.category})})]}),(0,n.jsx)("p",{className:"mb-6 text-muted line-clamp-2",children:t.shortDescription}),(0,n.jsxs)("div",{className:"flex flex-wrap gap-x-4 gap-y-2 mb-6",children:[t.technologies.slice(0,3).map(e=>(0,n.jsx)("span",{className:"text-sm text-primary-400",children:e},e)),t.technologies.length>3&&(0,n.jsxs)("button",{className:"text-sm text-primary-500 hover:text-primary-400",onClick:e=>{e.stopPropagation(),o.push("/projects/".concat(t.id))},children:["+",t.technologies.length-3," more"]})]}),(0,n.jsxs)("div",{className:"flex items-center text-primary-500 text-sm font-medium group-hover:text-primary-400 transition-all",children:["View project details ",(0,n.jsx)(s,{size:16,className:"ml-1 group-hover:translate-x-1 transition-transform"})]})]})})}},3925:(e,t,i)=>{"use strict";i.d(t,{d:()=>n});let n={"market-liquidity":{id:"market-liquidity",title:"Market Liquidity Analysis",category:"Machine Learning",shortDescription:"Implemented liquidity-gap detection using Spark's MLlib across FX pairs and commodities.",description:"Developed a sophisticated market liquidity analysis system utilizing distributed computing and machine learning to optimize trading operations. This research project focused on improving trading efficiency during off-peak hours through advanced data analysis and predictive modeling.",challenge:"Traditional methods struggled to accurately predict and respond to liquidity gaps in off-peak trading hours, leading to suboptimal execution prices and increased trading costs. The system needed to process massive amounts of market data in real-time while maintaining low latency.",solution:"Engineered a distributed ML pipeline using Spark MLlib that processes real-time market data to identify potential liquidity gaps and optimize trade execution timing. Implemented intelligent order splitting algorithms and developed custom metrics for liquidity assessment.",impact:"15% improvement in fill rates during off-peak trading hours and 25% reduction in market impact for large block trades. The system successfully processes over 1 million market events per second with sub-millisecond latency.",technologies:["Apache Spark","Python","TensorFlow","pandas","MLlib","SQL","Docker"],architecture:"Distributed processing pipeline with real-time data ingestion and ML-based analysis",implementation:["Developed data ingestion layer using Kafka for real-time market data processing","Implemented Spark Streaming for continuous data processing and analysis","Created custom ML models for liquidity prediction using historical and real-time data","Built automated trading signal generation system based on liquidity predictions","Implemented comprehensive monitoring and alerting system"]},"unix-shell":{id:"unix-shell",title:"Custom Unix-like Shell",category:"Systems Programming",shortDescription:"Developed a Unix-like shell implementing system-level commands and process management.",description:"Built a complete Unix-like shell environment with support for process management, virtual memory, and file system operations. The project demonstrates deep understanding of operating system principles and low-level system programming.",challenge:"Creating a reliable and efficient shell that could handle complex system operations while maintaining proper synchronization and memory management. The system needed to support multiple concurrent processes and handle resource allocation efficiently.",solution:"Implemented a robust shell system using C and Assembly, featuring comprehensive process management and virtual memory systems. Developed custom synchronization primitives and memory management algorithms.",impact:"Successfully implemented all core Unix shell functionalities with proper concurrency handling and memory management. The shell can handle multiple concurrent processes with minimal overhead.",technologies:["C","Assembly","Linux","GCC","GDB","Make","BOCHS"],architecture:"Modular shell system with separate components for process management, memory handling, and file operations",implementation:["Implemented process creation and management using fork() and exec()","Developed thread scheduling system with support for multitasking","Created virtual memory management system with demand paging","Built file system support with directory structures","Implemented synchronization primitives for concurrent operations"]},"story-generator":{id:"story-generator",title:"Neural Story Generator",category:"Machine Learning",shortDescription:"Built story generation systems using FlanT5-large transformer models.",description:"Developed an advanced neural story generation system using state-of-the-art transformer models and natural language processing techniques. The system can generate coherent, engaging stories while maintaining narrative consistency.",challenge:"Generating coherent and engaging stories while maintaining narrative consistency and logical flow throughout the text. Ensuring the generated content remains contextually relevant and maintains character consistency.",solution:"Leveraged FlanT5-large transformer models with custom prompt engineering and coherence checking mechanisms. Implemented specialized attention mechanisms and control tokens for better narrative control.",impact:"Achieved 85% human evaluation scores for story coherence and engagement. The system can generate diverse stories while maintaining consistent character development and plot progression.",technologies:["PyTorch","Hugging Face","BERT","TensorFlow","Python","Docker"],architecture:"Multi-stage pipeline for story generation and validation",implementation:["Implemented custom fine-tuning pipeline for FlanT5-large model","Developed prompt engineering system for coherent story generation","Created semantic consistency checking module","Built story evaluation pipeline using BERT-based metrics","Implemented interactive story modification interface"]},"halal-food-app":{id:"halal-food-app",title:"Halal Food Mobile App",category:"Full-Stack Development",shortDescription:"Led development of a full-stack mobile application for Halal food discovery.",description:"Created a comprehensive mobile application for discovering and reviewing Halal food options, featuring real-time updates and social features. The app helps users find, review, and share Halal food options in their area.",challenge:"Building a scalable platform that could handle real-time updates while maintaining data consistency and fast response times. Ensuring reliable handling of user-generated content and implementing efficient search functionality.",solution:"Implemented a modern tech stack with MongoDB, Node.js, and React Native, utilizing AWS services for scalability. Created a sophisticated caching layer and implemented efficient data indexing strategies.",impact:"Successfully launched with 1000+ initial users and 50+ registered restaurants. Achieved sub-second response times for all major operations.",technologies:["MongoDB","Express","React Native","Node.js","AWS S3","AWS EC2","Redis"],architecture:"Microservices architecture with separate services for authentication, data management, and file handling",implementation:["Developed RESTful API using Node.js and Express","Implemented real-time updates using WebSocket connections","Created responsive UI components with React Native","Built secure authentication system with JWT","Integrated AWS S3 for image storage and CDN delivery"]}}},4057:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var n=i(2115);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter((e,t,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,n.forwardRef)((e,t)=>{let{color:i="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:m,...p}=e;return(0,n.createElement)("svg",{ref:t,...s,width:a,height:a,stroke:i,strokeWidth:l?24*Number(o)/Number(a):o,className:r("lucide",c),...p},[...m.map(e=>{let[t,i]=e;return(0,n.createElement)(t,i)}),...Array.isArray(d)?d:[d]])}),l=(e,t)=>{let i=(0,n.forwardRef)((i,s)=>{let{className:l,...c}=i;return(0,n.createElement)(o,{ref:s,iconNode:t,className:r("lucide-".concat(a(e)),l),...c})});return i.displayName="".concat(e),i}}},e=>{var t=t=>e(e.s=t);e.O(0,[478,441,517,358],()=>t(3576)),_N_E=e.O()}]);