import{j as t}from"./index-BisuN_qM.js";import{T as k,A as j,C as w,b as z,a as f}from"./icons-4uR_Kw0A.js";import"./react-vendor-CMzK1eAr.js";const a={brazil:"#FF5C5C",usa:"#FFD700",bg:"#000000",cardBg:"#080808",cardBorder:"rgba(255, 255, 255, 0.08)"},S=c=>{const i=f.useRef(null),[d,e]=f.useState({}),[p,n]=f.useState({});return{ref:i,style:d,contentStyle:p,handleMouseMove:o=>{if(!i.current)return;const{left:g,top:s,width:x,height:l}=i.current.getBoundingClientRect(),m=(o.clientX-g)/x,r=(o.clientY-s)/l,b=(r-.5)*5,v=(m-.5)*-5;e({transform:`perspective(1000px) rotateX(${b}deg) rotateY(${v}deg) scale3d(1.005, 1.005, 1.005)`,transition:"none"}),n({transform:`translateX(${(m-.5)*5}px) translateY(${(r-.5)*5}px)`,transition:"none"})},handleMouseLeave:()=>{e({transform:"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:"all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"}),n({transform:"translateX(0) translateY(0)",transition:"all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"})}}},y=({title:c,items:i,flag:d,themeColor:e,type:p})=>{const{ref:n,style:h,contentStyle:u,handleMouseMove:o,handleMouseLeave:g}=S();return t.jsxs("div",{className:"group",onMouseMove:o,onMouseLeave:g,style:{position:"relative",perspective:"1200px",cursor:"default",width:"100%",display:"flex",flexDirection:"column",height:"100%"},children:[t.jsx("div",{style:{position:"absolute",inset:"10%",borderRadius:"3rem",background:e,filter:"blur(50px)",opacity:0,transition:"opacity 0.8s ease",zIndex:-1},className:"hover-back-glow"}),t.jsx("style",{children:".group:hover .hover-back-glow { opacity: 0.1 !important; }"}),t.jsxs("div",{ref:n,className:"market-card-container",style:{...h,backgroundColor:a.cardBg,border:`1px solid ${a.cardBorder}`,borderRadius:"1.25rem",overflow:"hidden",width:"100%",flex:1,display:"flex",flexDirection:"column",zIndex:10,boxShadow:"0 0 0 1px rgba(0,0,0,1), 0 20px 40px -10px rgba(0,0,0,0.8)"},children:[t.jsxs("div",{className:"market-card-hero",style:{position:"relative",height:"180px",width:"100%",overflow:"hidden",backgroundColor:"#000",borderBottom:"1px solid rgba(255,255,255,0.03)",flexShrink:0},children:[t.jsx("div",{style:{position:"absolute",inset:0,opacity:.2,background:`radial-gradient(circle at 50% 120%, ${e}, transparent 60%)`}}),t.jsx("div",{style:{...u,position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:t.jsx("span",{style:{fontSize:"6rem",opacity:.1,filter:"grayscale(100%) blur(0.5px)",transform:"scale(1.1)",transition:"all 0.8s ease"},className:"flag-bg",children:d})})]}),t.jsxs("div",{className:"market-card-content",style:{padding:"2rem 2rem 2.5rem 2rem",flexGrow:1,display:"flex",flexDirection:"column",position:"relative",zIndex:5,alignItems:"flex-start",textAlign:"left"},children:[t.jsx("div",{className:"market-card-header-group",style:{marginBottom:"1.5rem",display:"flex",flexDirection:"column",gap:"0.2rem",alignItems:"flex-start",textAlign:"left"},children:t.jsx("h2",{className:"market-card-title",style:{fontFamily:"var(--title-font)",fontSize:"2.2rem",fontWeight:700,color:"#fff",lineHeight:1,textAlign:"left"},children:c})}),t.jsx("div",{style:{width:"100%",height:"1px",background:"rgba(255,255,255,0.08)",marginBottom:"1.5rem",position:"relative"},children:t.jsx("div",{style:{position:"absolute",left:0,top:-1,height:"3px",width:"0%",background:e,transition:"width 1s cubic-bezier(0.2, 0.8, 0.2, 1)"},className:"progress-line"})}),t.jsx("style",{children:".group:hover .progress-line { width: 100% !important; }"}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},className:"market-card-list",children:i.map((s,x)=>{const l=s.split(":"),m=l[0],r=l.slice(1).join(":");return t.jsxs("div",{style:{display:"flex",gap:"0.8rem",alignItems:"flex-start"},className:"list-row",children:[t.jsx("div",{style:{marginTop:"0.3rem",color:e,opacity:.7,transform:"scale(0.85)",transition:"transform 0.3s",flexShrink:0,display:"flex",alignItems:"center"},className:"list-icon",children:p==="negative"?t.jsx(w,{size:16}):t.jsx(z,{size:16})}),t.jsx("p",{className:"list-text",style:{fontFamily:"Lexend, sans-serif",fontSize:"0.9rem",lineHeight:1.5,color:"#ccc",fontWeight:300,margin:0,textAlign:"left"},children:r?t.jsxs(t.Fragment,{children:[t.jsxs("strong",{style:{color:"#fff",fontWeight:600},children:[m,":"]}),r]}):s})]},x)})})]})]})]})},M=()=>t.jsxs("section",{id:"market-section",className:"relative w-full py-[var(--section-py-mobile)] md:py-[var(--section-py)] px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden z-20",style:{backgroundColor:a.bg,position:"relative",overflow:"hidden"},children:[t.jsx("style",{children:`
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
    `}),t.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",backgroundSize:"80px 80px",pointerEvents:"none",opacity:.4}}),t.jsxs("div",{className:"market-header",style:{textAlign:"center",marginBottom:"3rem",position:"relative",zIndex:10},children:[t.jsx("div",{style:{display:"inline-flex",alignItems:"center",color:"#F5D060",fontSize:"0.9rem",fontWeight:600,letterSpacing:"0.05em",marginBottom:"1rem",textTransform:"uppercase"},children:"— A VIRADA DE CHAVE"}),t.jsxs("h2",{className:"market-title text-[length:var(--mobile-title-size)] sm:text-[length:var(--desktop-title-size)]",style:{fontFamily:"var(--title-font)",fontWeight:700,color:"#fff",marginBottom:"1.5rem",lineHeight:"var(--desktop-title-line-height)",maxWidth:"1000px",margin:"0 auto",textTransform:"uppercase"},children:["O PROBLEMA NÃO É SUA CAPACIDADE.",t.jsx("br",{}),t.jsx("span",{style:{color:"#F5D060"},children:"É O MERCADO ONDE VOCÊ ESTÁ TENTANDO ESCALAR."})]})]}),t.jsxs("div",{className:"market-grid",style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"2rem",alignItems:"stretch",position:"relative",zIndex:10,maxWidth:"960px",margin:"0 auto"},children:[t.jsx(y,{type:"negative",title:"NO BRASIL",items:["Poder de compra limitado","CPM alto","Público mais sensível a preço","Margens apertadas"],flag:"🇧🇷",themeColor:a.brazil,icon:t.jsx(k,{size:14})}),t.jsx(y,{type:"positive",title:"NOS ESTADOS UNIDOS",items:["Maior mercado consumidor do mundo","Cultura consolidada de compra online","Decisão mais rápida","Maior tolerância a ticket elevado"],flag:"🇺🇸",themeColor:a.usa,icon:t.jsx(j,{size:14})})]}),t.jsxs("div",{style:{position:"relative",zIndex:10,marginTop:"2.5rem",marginBottom:"0rem",textAlign:"center"},children:[t.jsxs("p",{id:"market-final-text",style:{color:"rgba(255,255,255,0.7)",fontFamily:"var(--subtitle-font)",fontSize:"1.4rem",fontWeight:400,cursor:"default",maxWidth:"800px",margin:"0 auto",lineHeight:1.4},children:["Você não precisa trabalhar mais.",t.jsx("br",{}),t.jsx("strong",{style:{color:"#fff",fontWeight:600},children:"Precisa operar onde existe dinheiro circulando."})]}),t.jsx("style",{children:`
                    @media (max-width: 768px) {
                        #market-final-text {
                            font-size: 1.1rem !important;
                            line-height: 1.3 !important;
                        }
                    }
                `})]})]});export{M as MarketContrast};
