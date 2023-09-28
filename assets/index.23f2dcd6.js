import{_ as g,o as s,c as n,p as q,e as k,a as e,d as h,t as d,r as $,b as c,w as v,n as m,F as u,f as _,g as p,h as x,i as T}from"./entry.9c3c1282.js";import{_ as w}from"./client-only.6b1d16a7.js";const B={},b=t=>(q("data-v-d7e58dc3"),t=t(),k(),t),H={class:"flex flex-col items-center gap-y-10 max-sm:gap-y-6"},I=b(()=>e("h1",{id:"title",class:"font-bold text-4xl max-md:text-3xl max-sm:text-2xl"}," One Stop To All Your Rushes ",-1)),L=b(()=>e("h3",{id:"headline",class:"text-bgray-400 text-2xl w-auto text-center max-md:text-xl max-sm:lg"},[h(" Pakistan's First And Only Bike Renting "),e("br"),h(" Service ")],-1)),R=b(()=>e("a",{id:"button",class:"bg-bred-200 text-white px-4 py-2 rounded-lg font-semibold max-md:px-3",href:"https://wa.me/03224334086",target:"_blank"},"Try it now",-1)),j=[I,L,R];function C(t,a){return s(),n("div",H,j)}const D=g(B,[["render",C],["__scopeId","data-v-d7e58dc3"]]),V={class:"flex flex-col gap-y-2 mb-20 max-md:mb-12"},A={class:"font-semibold text-center"},M={class:"text-3xl font-bold max-md:text-2xl"},O={__name:"SectionHeader",props:{sectHeader:String,sectHeadline:String},setup(t){return(a,r)=>(s(),n("div",V,[e("h3",A,d(t.sectHeader),1),e("h1",M,d(t.sectHeadline),1)]))}},f=O,N={id:"icon-circle",class:"h-20 w-20 rounded-full bg-bred-200 flex items-center justify-center"},W={class:"font-bold text-xl"},E={class:"text-center text-[0.9rem]"},F=`
max-md:w-9/12



`,G={__name:"Service",props:{icon:String,title:String,description:String},setup(t){return(a,r)=>{const l=$("font-awesome-icon"),o=w;return s(),n("div",{class:m(`w-1/4 px-6 py-12 flex flex-col items-center gap-y-4 rounded-lg bg-bgray-100 ${F}`)},[e("div",N,[c(o,null,{default:v(()=>[c(l,{icon:`fa-solid fa-${t.icon}`,class:"text-3xl text-white"},null,8,["icon"])]),_:1})]),e("h1",W,d(t.title),1),e("p",E,d(t.description),1)],2)}}},K=G,Q=[{icon:"lock",title:"E-lock System",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores saepe porro fugiat praesentium error aliquam"},{icon:"laptop",title:"AI Chat Bot",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores saepe porro fugiat praesentium error aliquam"},{icon:"bolt",title:"Charge/Km",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores saepe porro fugiat praesentium error aliquam"}],z={id:"services",class:"flex flex-col items-center"},U=`
max-md:flex-col
max-md:gap-y-12 
max-md:items-center
`,P={__name:"Services",setup(t){return(a,r)=>{const l=f,o=K;return s(),n("div",z,[c(l,{sectHeader:"SERVICES",sectHeadline:"What Sets Us Apart"}),e("div",{class:m(`flex gap-x-20 justify-center ${U}`)},[(s(!0),n(u,null,_(p(Q),i=>(s(),x(o,{icon:i.icon,title:i.title,description:i.description,class:"shadow-bbs"},null,8,["icon","title","description"]))),256))],2)])}}},Y=P,J=["src"],X={id:"divider",class:"flex flex-col items-center"},Z=e("div",{class:"h-4 w-4 bg-black"},null,-1),ee={id:"description",class:"flex flex-col"},te={class:"font-bold text-2xl"},se={class:""},ie=` 
    max-md:flex-col 
    max-md:items-center
`,y=`
  max-md:w-70
`,ne=`
  max-md:w-full
`,oe=`
  h-0
`,ce={__name:"RentaBikeStep",props:{img:String,title:String,description:String,last:Boolean},setup(t){return console.log(y),(a,r)=>(s(),n("div",{class:m(`flex items-start justify-center gap-x-16 ${ie}`)},[e("div",{id:"image",class:m(`w-80 max-h-52 flex justify-center ${y}`)},[e("img",{src:`images/${t.img}`,alt:"",class:"object-contain",loading:"lazy"},null,8,J)],2),e("div",{class:m(`flex items-baseline self-auto gap-x-4 w-1/2 ${ne}`)},[e("div",X,[Z,t.last!==!0?(s(),n("div",{key:0,class:m(`h-52 w-0 border-l-2 border-black mt-2 ${oe}`)},null,2)):T("",!0)]),e("div",ee,[e("h2",te,d(t.title),1),e("div",se,d(t.description),1)])],2)],2))}},ae=ce,le=[{img:"wsSignup.png",title:"Signup on Whatsapp",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo. Distinctio nulla delectus itaque similique? Voluptatum soluta laudantium, tenetur id rerum omnis natus doloremque, facilis impedit nostrum non magni sapiente!",last:!1},{img:"docVerif.png",title:"Documents Verification",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo. Distinctio nulla delectus itaque similique? Voluptatum soluta laudantium, tenetur id rerum omnis natus doloremque, facilis impedit nostrum non magni sapiente!",last:!1},{img:"lock.png",title:"Unlock Bike",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo. Distinctio nulla delectus itaque similique? Voluptatum soluta laudantium, tenetur id rerum omnis natus doloremque, facilis impedit nostrum non magni sapiente!",last:!1},{img:"payGen.jpg",title:"Payment Generation",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo. Distinctio nulla delectus itaque similique? Voluptatum soluta laudantium, tenetur id rerum omnis natus doloremque, facilis impedit nostrum non magni sapiente!",last:!0}],re={id:"rentabike",class:"flex flex-col justify-center items-center"},de={class:"flex flex-col items-center"},me={__name:"RentaBike",setup(t){return(a,r)=>{const l=f,o=ae;return s(),n("div",re,[c(l,{sectHeader:"RENT A BIKE",sectHeadline:"How Does It Work"}),e("div",de,[(s(!0),n(u,null,_(p(le),i=>(s(),x(o,{img:i.img,title:i.title,description:i.description,last:i.last},null,8,["img","title","description","last"]))),256))])])}}},ue=me,_e={class:"flex justify-center relative pt-12"},pe=["src"],xe={class:"bg-bred-200 text-white pt-12 pb-6 px-6 rounded-2xl min-h-52"},fe={class:"font-semibold text-center"},he={class:"text-center text-sm"},ge={__name:"Testimonial",props:{name:String,description:String},setup(t){return(a,r)=>(s(),n("div",_e,[e("img",{src:"images/default.jpg",alt:"",class:"w-[4.5rem] h-[4.5rem] rounded-full absolute top-0",loading:"lazy"},null,8,pe),e("div",xe,[e("h2",fe,d(t.name),1),e("p",he,d(t.description),1)])]))}},be=ge,ye=[{name:"Abdul Basit",description:"Lorem ipsum dolor sit amet, hello bye kasparov consectetur adipiscing elit. hello woNunc ullamcorper scelerisque mi, im qas in malesuada felis malesuada vel. "},{name:"Umar Amin",description:"Lorem ipsum dolor sit amet, hello bye kasparov consectetur adipiscing elit. hello woNunc ullamcorper scelerisque mi, im qas in malesuada felis malesuada vel. "},{name:"Babar Azam",description:"Lorem ipsum dolor sit amet, hello bye kasparov consectetur adipiscing elit. hello woNunc ullamcorper scelerisque mi, im qas in malesuada felis malesuada vel. "}],$e={id:"testimonials",class:"flex flex-col items-center"},ve=`
max-md:flex-col
max-md:gap-y-8
`,we={__name:"Testimonials",setup(t){return(a,r)=>{const l=f,o=be;return s(),n("div",$e,[c(l,{sectHeader:"TESTIMONIALS",sectHeadline:"Read What Others Have To Say"}),e("div",{class:m(`flex gap-x-20 ${ve}`)},[(s(!0),n(u,null,_(p(ye),i=>(s(),x(o,{name:i.name,description:i.description},null,8,["name","description"]))),256))],2)])}}},Se=we;const qe={id:"menu",class:m(" w-full bg-bgray-200 rounded-b-lg")},ke={class:"py-3 px-3 text-start"},Te="max-md:w-full",Be={__name:"TopQuestion",props:{query:String,answer:String},setup(t){const a=`touch-${Math.random().toString(36).substring(7)}`;return(r,l)=>{const o=$("font-awesome-icon"),i=w;return s(),n("div",{id:"dropdown",class:m(`flex flex-col items-center w-3/5 ${Te}`)},[e("label",{class:"py-3 px-3 w-full bg-bgray-200 flex justify-between items-center cursor-pointer rounded-t-lg mt-4",for:a},[h(d(t.query)+" ",1),c(i,null,{default:v(()=>[c(o,{icon:"fa-solid fa-angle-down",class:"text-xl"})]),_:1})]),e("input",{type:"checkbox",id:a,class:"hidden"}),e("div",qe,[e("p",ke,d(t.answer),1)])],2)}}},He=g(Be,[["__scopeId","data-v-fa6b942b"]]),Ie=[{query:"From Where Should I Get The Bike Keys?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat dolor culpa obcaecati voluptas, eos nihil neque temporibus, nemo"},{query:"From Where Should I Get The Bike Keys?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat dolor culpa obcaecati voluptas, eos nihil neque temporibus, nemo"},{query:"From Where Should I Get The Bike Keys?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat dolor culpa obcaecati voluptas, eos nihil neque temporibus, nemo"},{query:"From Where Should I Get The Bike Keys?",answer:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quaerat dolor culpa obcaecati voluptas, eos nihil neque temporibus, nemo"}],Le={id:"faqs",class:"flex flex-col items-center justify-center"},Re={class:"w-full flex flex-col items-center"},je={__name:"TopQuestions",setup(t){return(a,r)=>{const l=f,o=He;return s(),n("div",Le,[c(l,{sectHeader:"Top Questions",sectHeadline:"Clear All Your Confusions"}),e("div",Re,[(s(!0),n(u,null,_(p(Ie),i=>(s(),x(o,{query:i.query,answer:i.answer},null,8,["query","answer"]))),256))])])}}},Ce=je,De={},Ve={class:"flex flex-col gap-y-32 my-32 max-md:mt-16"};function Ae(t,a){const r=D,l=Y,o=ue,i=Se,S=Ce;return s(),n("div",Ve,[c(r),c(l),c(o),c(i),c(S)])}const Ne=g(De,[["render",Ae]]);export{Ne as default};
