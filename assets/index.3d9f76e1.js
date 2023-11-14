import{_ as g,o as s,c as o,p as S,b as k,d as e,e as f,t as _,r as w,f as c,w as b,n as d,F as m,g as u,u as p,h as x,i as B}from"./entry.6c760854.js";import{_ as $}from"./client-only.f37b2dfd.js";const I={},y=t=>(S("data-v-b6521d5f"),t=t(),k(),t),T={class:"flex flex-col items-center gap-y-10 max-sm:gap-y-6"},H=y(()=>e("h1",{id:"title",class:"font-bold text-4xl max-md:text-3xl max-sm:text-2xl"}," One Stop To All Your Rushes ",-1)),C=y(()=>e("h3",{id:"headline",class:"text-bgray-400 text-2xl w-auto text-center max-md:text-xl max-sm:text-lg"},[f(" Pakistan's First And Only Bike Renting "),e("br"),f(" Service ")],-1)),M=y(()=>e("a",{id:"button",class:"bg-bred-200 text-white px-4 py-2 rounded-lg font-semibold max-md:px-3",href:"https://wa.me/+923224334086",target:"_blank"},"Try it now",-1)),A=[H,C,M];function j(t,a){return s(),o("div",T,A)}const R=g(I,[["render",j],["__scopeId","data-v-b6521d5f"]]),W={class:"flex flex-col gap-y-2 mb-20 max-md:mb-12"},q={class:"font-semibold text-center max-md:text-sm"},E={class:"text-3xl font-bold max-md:text-xl"},O={__name:"SectionHeader",props:{sectHeader:String,sectHeadline:String},setup(t){return(a,l)=>(s(),o("div",W,[e("h3",q,_(t.sectHeader),1),e("h1",E,_(t.sectHeadline),1)]))}},h=O,Y={id:"icon-circle",class:"h-20 w-20 rounded-full bg-bred-200 flex items-center justify-center"},K={class:"font-bold text-xl"},F={class:"text-center text-[0.9rem]"},N=`
max-md:w-9/12
max-sm:w-full
max-sm:px-2
max-sm:py-6
`,U={__name:"Service",props:{icon:String,title:String,description:String},setup(t){return(a,l)=>{const r=w("font-awesome-icon"),i=$;return s(),o("div",{class:d(`w-1/4 px-6 py-8 flex flex-col items-center gap-y-4 rounded-lg bg-bgray-100 ${N}`)},[e("div",Y,[c(i,null,{default:b(()=>[c(r,{icon:`fa-solid fa-${t.icon}`,class:"text-3xl text-white"},null,8,["icon"])]),_:1})]),e("h1",K,_(t.title),1),e("p",F,_(t.description),1)],2)}}},V=U,L=[{icon:"lock",title:"E-lock System",description:"Unlock Your Ride with a Simple Text! Our WhatsApp-Powered E-Lock System Reads Your Message and Sets You Free on Two Wheels."},{icon:"laptop",title:"AI Chat Bot",description:"Experience Seamless Assistance with our free AI Chatbot: Your Friendly Companion for all your Rental, Monetary and Life's Inquiries."},{icon:"bolt",title:"Charge/Km",description:"Say Goodbye to Soaring Fares! With BikeChaiye, You Pay as You Go. Rent a Ride and Be Billed Only for the Kilometers You Travel."}],Q={id:"services",class:"flex flex-col items-center"},z=`
max-md:flex-col
max-md:gap-y-12 
max-md:items-center
max-lg:gap-x-6
`,G={__name:"Services",setup(t){return(a,l)=>{const r=h,i=V;return s(),o("div",Q,[c(r,{sectHeader:"SERVICES",sectHeadline:"What Sets Us Apart"}),e("div",{class:d(`flex gap-x-16 justify-center ${z}`)},[(s(!0),o(m,null,u(p(L),n=>(s(),x(i,{icon:n.icon,title:n.title,description:n.description,class:"shadow-bbs basis-1/3"},null,8,["icon","title","description"]))),256))],2)])}}},D=G,P=["src"],J={id:"divider",class:"flex flex-col items-center"},X=e("div",{class:"h-4 w-4 bg-black mt-0"},null,-1),Z={id:"description",class:"flex flex-col"},ee={class:"w-fit"},te="max-md:flex-col  max-md:items-center max-md:gap-y-4",se="max-md:w-70",ne="max-md:w-full",oe="max-md:h-0",ie=" max-md:text-xl",ce={__name:"RentaBikeStep",props:{img:String,title:String,description:String,last:Boolean},setup(t){return(a,l)=>(s(),o("div",{class:d(`flex items-start justify-center gap-x-24 ${te}`)},[e("img",{src:`images/${t.img}`,alt:"",class:d(`object-contain w-60 h-48 flex justify-center ${se}`),loading:"lazy"},null,10,P),e("div",{class:d(`flex items-baseline gap-x-4 ${ne} w-1/3`)},[e("div",J,[X,t.last!==!0?(s(),o("div",{key:0,class:d(`h-48 w-0 border-l-2 border-black  ${oe}`)},null,2)):B("",!0)]),e("div",Z,[e("h2",{class:d(`font-bold text-2xl ${ie} `)},_(t.title),3),e("div",ee,_(t.description),1)])],2)],2))}},ae=ce,re=[{img:"wsSignup.png",title:"Signup on Whatsapp",description:'Text "1" to on our WhatsApp (03224334086) to get registered, our AI chat bot will walk you  through the resgistration.',last:!1},{img:"docVerif.png",title:"Documents Verification",description:"Your documents will be verified within 12 hours of your submission after which will be to access our services.",last:!1},{img:"lock.png",title:"Unlock Bike",description:'Simply unlock your bike by texting "Khul ja <bike number>" on our WhatsApp. Our E-lock system will unlock your ride.',last:!1},{img:"payGen.jpg",title:"Payment Generation",description:"Bill will be shared with you shortly after your ride on WhatsApp number. Wen accept digital payments only.",last:!0}],le={id:"rentabike",class:"flex flex-col justify-center items-center"},de={class:"flex flex-col items-center"},_e={__name:"RentaBike",setup(t){return(a,l)=>{const r=h,i=ae;return s(),o("div",le,[c(r,{sectHeader:"RENT A BIKE",sectHeadline:"How Does It Work"}),e("div",de,[(s(!0),o(m,null,u(p(re),n=>(s(),x(i,{img:n.img,title:n.title,description:n.description,last:n.last},null,8,["img","title","description","last"]))),256))])])}}},me=_e,ue={class:"flex justify-center relative pt-12"},pe=["src"],xe={class:"bg-bred-200 text-white pt-12 pb-6 px-6 rounded-2xl h-fit"},he={class:"font-semibold text-center"},fe={class:"text-center text-sm"},ge={__name:"Testimonial",props:{name:String,description:String},setup(t){return(a,l)=>(s(),o("div",ue,[e("img",{src:"images/default.jpg",alt:"",class:"w-[4.5rem] h-[4.5rem] rounded-full absolute top-0",loading:"lazy"},null,8,pe),e("div",xe,[e("h2",he,_(t.name),1),e("p",fe,_(t.description),1)])]))}},ye=ge,we=[{name:"M. Umar Shehzad",description:"I was the first customer of Bike Chaiye and enrolled in their service just to learn to ride a bike. Abdul Basit was really professional in his conduct and I thoroughly enjoyed utilizing Bike Chaiye's services. "},{name:"Ali Kamran",description:"Bike Chaiye started at LUMS when I was in my senior year, I wished it existed before. I along with my friends used it bunch of times and service was always great."},{name:"M. Hayan khawaja",description:"Used BikeChahiye a few times, excellent service and very convenient. Therefore, I would recommend this to anyone who needs affordable rental commute of their own."}],be={id:"testimonials",class:"flex flex-col items-center"},$e="max-sm:flex-col max-sm:gap-y-8 max-md:gap-x-6",ve={__name:"Testimonials",setup(t){return(a,l)=>{const r=h,i=ye;return s(),o("div",be,[c(r,{sectHeader:"TESTIMONIALS",sectHeadline:"Read What Others Have To Say"}),e("div",{class:d(`flex gap-x-12 ${$e}`)},[(s(!0),o(m,null,u(p(we),n=>(s(),x(i,{name:n.name,description:n.description,class:"basis-1/3"},null,8,["name","description"]))),256))],2)])}}},Se=ve;const ke={id:"menu",class:d("w-full bg-bgray-200 rounded-b-lg height-fit")},Be={class:"py-3 px-3 text-start"},Ie="max-md:w-full",Te={__name:"TopQuestion",props:{query:String,answer:String},setup(t){const a=`touch-${Math.random().toString(36).substring(7)}`;return(l,r)=>{const i=w("font-awesome-icon"),n=$;return s(),o("div",{id:"dropdown",class:d(`flex flex-col items-center w-3/5 ${Ie}`)},[e("label",{class:"py-3 px-3 w-full bg-bgray-200 flex justify-between items-center cursor-pointer rounded-t-lg mt-4",for:a},[f(_(t.query)+" ",1),c(n,null,{default:b(()=>[c(i,{icon:"fa-solid fa-angle-down",class:"text-xl"})]),_:1})]),e("input",{type:"checkbox",id:a,class:"hidden"}),e("div",ke,[e("p",Be,_(t.answer),1)])],2)}}},He=g(Te,[["__scopeId","data-v-90fad980"]]),Ce=[{query:"Where are bikes located",answer:"Currently our bikes are located at LUMS parking behind M1."},{query:"From Where Should I Get The Bike Keys",answer:"Keys are already attached in bike."},{query:"How do we charge our customers",answer:`Our price is as follows: Base + (Km * Rate ).
 To know the exact rates please, WhatsApp at 03224334086. Note: Min charges of 8 km applies per hour.`},{query:"Do you provides helmets with bike",answer:"Helmets provided upon request."}],Me={id:"faqs",class:"flex flex-col items-center justify-center"},Ae={class:"w-full flex flex-col items-center"},je={__name:"TopQuestions",setup(t){return(a,l)=>{const r=h,i=He;return s(),o("div",Me,[c(r,{sectHeader:"Top Questions",sectHeadline:"Clear All Your Confusions"}),e("div",Ae,[(s(!0),o(m,null,u(p(Ce),n=>(s(),x(i,{query:n.query,answer:n.answer},null,8,["query","answer"]))),256))])])}}},Re=je,We={},qe={class:"flex flex-col gap-y-32 my-32 max-md:mt-16"};function Ee(t,a){const l=R,r=D,i=me,n=Se,v=Re;return s(),o("div",qe,[c(l),c(r),c(i),c(n),c(v)])}const Ke=g(We,[["render",Ee]]);export{Ke as default};