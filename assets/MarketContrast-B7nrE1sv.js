import{r as s,j as t}from"./index-C_G_PzmE.js";const w=(...r)=>r.filter((e,i,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===i).join(" ").trim();const S=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const C=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,a)=>a?a.toUpperCase():i.toLowerCase());const v=r=>{const e=C(r);return e.charAt(0).toUpperCase()+e.slice(1)};var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const z=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const N=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:n="",children:o,iconNode:x,...m},l)=>s.createElement("svg",{ref:l,...A,width:e,height:e,stroke:r,strokeWidth:a?Number(i)*24/Number(e):i,className:w("lucide",n),...!o&&!z(m)&&{"aria-hidden":"true"},...m},[...x.map(([d,p])=>s.createElement(d,p)),...Array.isArray(o)?o:[o]]));const y=(r,e)=>{const i=s.forwardRef(({className:a,...n},o)=>s.createElement(N,{ref:o,iconNode:e,className:w(`lucide-${S(v(r))}`,`lucide-${r}`,a),...n}));return i.displayName=v(r),i};const M=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],I=y("arrow-up-right",M);const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],O=y("circle-alert",B);const L=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],D=y("circle-check",L);const E=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],R=y("trending-down",E),c={brazil:"#FF5C5C",usa:"#FFD700",bg:"#000000",cardBg:"#080808",cardBorder:"rgba(255, 255, 255, 0.08)",text:{secondary:"#a0a0a0"}},F=r=>{const e=s.useRef(null),[i,a]=s.useState({}),[n,o]=s.useState({});return{ref:e,style:i,contentStyle:n,handleMouseMove:l=>{if(!e.current)return;const{left:d,top:p,width:b,height:f}=e.current.getBoundingClientRect(),h=(l.clientX-d)/b,g=(l.clientY-p)/f,k=(g-.5)*5,u=(h-.5)*-5;a({transform:`perspective(1000px) rotateX(${k}deg) rotateY(${u}deg) scale3d(1.005, 1.005, 1.005)`,transition:"none"}),o({transform:`translateX(${(h-.5)*5}px) translateY(${(g-.5)*5}px)`,transition:"none"})},handleMouseLeave:()=>{a({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"}),o({transform:"translateX(0) translateY(0)",transition:"all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"})}}},j=({subtitle:r,title:e,items:i,flag:a,themeColor:n,icon:o,type:x})=>{const{ref:m,style:l,contentStyle:d,handleMouseMove:p,handleMouseLeave:b}=F();return t.jsxs("div",{className:"group",onMouseMove:p,onMouseLeave:b,style:{position:"relative",perspective:"1200px",cursor:"default",width:"100%",display:"flex",flexDirection:"column",height:"100%"},children:[t.jsx("div",{style:{position:"absolute",inset:"10%",borderRadius:"3rem",background:n,filter:"blur(50px)",opacity:0,transition:"opacity 0.8s ease",zIndex:-1},className:"hover-back-glow"}),t.jsx("style",{children:".group:hover .hover-back-glow { opacity: 0.1 !important; }"}),t.jsxs("div",{ref:m,className:"market-card-container",style:{...l,backgroundColor:c.cardBg,border:`1px solid ${c.cardBorder}`,borderRadius:"1.25rem",overflow:"hidden",width:"100%",flex:1,display:"flex",flexDirection:"column",zIndex:10,boxShadow:"0 0 0 1px rgba(0,0,0,1), 0 20px 40px -10px rgba(0,0,0,0.8)"},children:[t.jsxs("div",{className:"market-card-hero",style:{position:"relative",height:"180px",width:"100%",overflow:"hidden",backgroundColor:"#000",borderBottom:"1px solid rgba(255,255,255,0.03)",flexShrink:0},children:[t.jsx("div",{style:{position:"absolute",inset:0,opacity:.2,background:`radial-gradient(circle at 50% 120%, ${n}, transparent 60%)`}}),t.jsx("div",{style:{...d,position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:t.jsx("span",{style:{fontSize:"6rem",opacity:.1,filter:"grayscale(100%) blur(0.5px)",transform:"scale(1.1)",transition:"all 0.8s ease"},className:"flag-bg",children:a})})]}),t.jsxs("div",{className:"market-card-content",style:{padding:"2rem 2rem 2.5rem 2rem",flexGrow:1,display:"flex",flexDirection:"column",position:"relative",zIndex:5,alignItems:"flex-start",textAlign:"left"},children:[t.jsxs("div",{className:"market-card-badge",style:{marginTop:"-3rem",marginBottom:"1.5rem",alignSelf:"flex-start",background:"rgba(15,15,15,0.9)",backdropFilter:"blur(10px)",border:`1px solid ${n}30`,padding:"0.5rem 1rem",borderRadius:"0.75rem",display:"flex",alignItems:"center",gap:"0.5rem",boxShadow:"0 8px 16px -4px rgba(0,0,0,0.6)"},children:[t.jsx("div",{style:{color:n,display:"flex",alignItems:"center"},children:o}),t.jsx("span",{style:{color:"#fff",fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",fontFamily:"Plus Jakarta Sans, sans-serif"},children:r})]}),t.jsxs("div",{className:"market-card-header-group",style:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",gap:"0.2rem",alignItems:"flex-start",textAlign:"left"},children:[t.jsx("span",{style:{fontFamily:"var(--title-font)",fontStyle:"italic",fontSize:"1.1rem",color:c.text.secondary,opacity:.8},children:"Análise:"}),t.jsx("h2",{className:"market-card-title",style:{fontFamily:"var(--title-font)",fontSize:"2.2rem",fontWeight:700,color:"#fff",lineHeight:1,textAlign:"left"},children:e})]}),t.jsx("div",{style:{width:"100%",height:"1px",background:"rgba(255,255,255,0.08)",marginBottom:"1.5rem",position:"relative"},children:t.jsx("div",{style:{position:"absolute",left:0,top:-1,height:"3px",width:"0%",background:n,transition:"width 1s cubic-bezier(0.2, 0.8, 0.2, 1)"},className:"progress-line"})}),t.jsx("style",{children:".group:hover .progress-line { width: 100% !important; }"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},className:"market-card-list",children:i.map((f,h)=>{const g=f.split(":"),k=g[0],u=g.slice(1).join(":");return t.jsxs("div",{style:{display:"flex",gap:"0.8rem",alignItems:"flex-start"},className:"list-row",children:[t.jsx("div",{style:{marginTop:"0.3rem",color:n,opacity:.7,transform:"scale(0.85)",transition:"transform 0.3s",flexShrink:0,display:"flex",alignItems:"center"},className:"list-icon",children:x==="negative"?t.jsx(O,{size:16}):t.jsx(D,{size:16})}),t.jsx("p",{className:"list-text",style:{fontFamily:"Lexend, sans-serif",fontSize:"0.9rem",lineHeight:1.5,color:"#ccc",fontWeight:300,margin:0,textAlign:"left"},children:u?t.jsxs(t.Fragment,{children:[t.jsxs("strong",{style:{color:"#fff",fontWeight:600},children:[k,":"]}),u]}):f})]},h)})})]})]})]})},$=()=>t.jsxs("section",{id:"market-section",className:"market-pad",style:{backgroundColor:c.bg,paddingTop:"8rem",paddingBottom:"8rem",paddingLeft:"1rem",paddingRight:"1rem",position:"relative",overflow:"hidden"},children:[t.jsx("style",{children:`
            @media (max-width: 768px) {
                #market-section .market-pad { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
                #market-section .market-header { margin-bottom: 2.5rem !important; }
            #market-section .market-title { 
                font-size: var(--mobile-title-size) !important; 
                line-height: var(--mobile-title-line-height) !important; 
            }
            #market-section .market-desc { 
                font-size: var(--mobile-subtitle-size) !important; 
                line-height: var(--mobile-subtitle-line-height) !important;
                margin-bottom: 2rem !important; 
            }
            
            /* Mobile Card Adjustments: Strict Left Alignment */
            #market-section .market-grid { grid-template-columns: 1fr !important; } 
            
            #market-section .market-card-container { min-height: auto !important; }
            
            #market-section .market-card-content { 
                padding: 1.25rem 0.75rem !important; /* Balanced side padding */
                align-items: flex-start !important; 
                text-align: left !important;
            }
            
            #market-section .market-card-hero { height: 120px !important; }
            
            #market-section .market-card-header-group { 
                align-items: flex-start !important; 
                text-align: left !important; 
                width: 100% !important;
            }
            
            #market-section .market-card-title { 
                font-size: 1.8rem !important; 
                margin-bottom: 0.5rem !important; 
                text-align: left !important; 
            }
            
            /* Badge Fix: Strict packing */
            #market-section .market-card-badge { 
                margin-top: -2rem !important; 
                padding: 0.4rem 0.8rem !important; 
                font-size: 0.65rem !important; 
                margin-bottom: 1rem !important; 
                align-self: flex-start !important; 
                justify-content: flex-start !important; 
                display: inline-flex !important; /* Force hug content */
                width: fit-content !important;   /* Force hug content */
                min-width: 0 !important;
                flex-direction: row !important; 
                align-items: center !important;
                gap: 0.15rem !important; /* Ultra-tight gap */
                max-width: 100% !important;
                white-space: nowrap !important; /* Prevent text wrap */
            }
            
            #market-section .market-card-badge span {
                white-space: nowrap !important;
                text-align: left !important;
            }

            #market-section .market-card-list { 
                gap: 1rem !important; 
                align-items: flex-start !important; 
                width: 100% !important;
                padding-left: 0 !important; /* Reset padding to align left */
            }
            
            /* CSS GRID for Indestructible Layout */
            #market-section .list-row { 
                display: grid !important;
                grid-template-columns: 22px 1fr !important; /* Balanced icon column */
                gap: 0.8rem !important; /* More separation */
                align-items: start !important; 
                text-align: left !important; 
                width: 100% !important;
            }
             
             #market-section .list-icon {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                margin-top: 0.3rem !important; 
             }
             
             #market-section .list-text {
                font-size: 0.95rem !important; /* Larger text */
                line-height: 1.6 !important;    /* Better readability */
                color: #e5e5e5 !important;      /* Brighter text */
                letter-spacing: 0.02em !important;
                text-align: left !important;
             }
            
            #market-section .flag-bg { 
                font-size: 5rem !important; 
                opacity: 0.25 !important;
                filter: grayscale(30%) blur(0px) !important;
            }
        }
    `}),t.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none",opacity:.4}}),t.jsxs("div",{className:"market-header",style:{textAlign:"center",marginBottom:"5rem",position:"relative",zIndex:10},children:[t.jsx("div",{style:{display:"inline-flex",alignItems:"center",color:"#F5D060",fontSize:"0.9rem",fontWeight:600,letterSpacing:"0.05em",marginBottom:"1rem",textTransform:"uppercase"},children:"— A VIRADA DE CHAVE"}),t.jsxs("h2",{className:"market-title text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)]",style:{fontFamily:"var(--title-font)",fontWeight:700,color:"#fff",marginBottom:"1.5rem",lineHeight:"var(--desktop-title-line-height)",maxWidth:"1000px",margin:"0 auto",textTransform:"uppercase"},children:["O PROBLEMA NÃO É SUA CAPACIDADE.",t.jsx("br",{}),t.jsx("span",{style:{color:"#F5D060"},children:"É O MERCADO ONDE VOCÊ ESTÁ TENTANDO ESCALAR."})]})]}),t.jsxs("div",{className:"market-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",alignItems:"stretch",position:"relative",zIndex:10,maxWidth:"960px",margin:"0 auto"},children:[t.jsx(j,{type:"negative",subtitle:"O OCEANO VERMELHO",title:"NO BRASIL",items:["Poder de compra limitado","CPM alto","Público mais sensível a preço","Margens apertadas"],flag:"🇧🇷",themeColor:c.brazil,icon:t.jsx(R,{size:14})}),t.jsx(j,{type:"positive",subtitle:"O OCEANO AZUL",title:"NOS ESTADOS UNIDOS",items:["Maior mercado consumidor do mundo","Cultura consolidada de compra online","Decisão mais rápida","Maior tolerância a ticket elevado"],flag:"🇺🇸",themeColor:c.usa,icon:t.jsx(I,{size:14})})]}),t.jsx("div",{style:{position:"relative",zIndex:10,marginTop:"5rem",textAlign:"center"},children:t.jsxs("p",{style:{color:"rgba(255,255,255,0.7)",fontFamily:"var(--subtitle-font)",fontSize:"1.25rem",fontWeight:400,cursor:"default",maxWidth:"600px",margin:"0 auto",lineHeight:1.6},children:["Você não precisa trabalhar mais.",t.jsx("br",{}),t.jsx("strong",{style:{color:"#fff",fontWeight:600},children:"Precisa operar onde existe dinheiro circulando."})]})})]});export{$ as MarketContrast};
