import{j as y,r as w,o as n,c as o,e as t,w as r,k,v as A,u as m,b as e,F as f,g as p,d as g,t as x,l as v,h as $,n as h,m as N,q as j,_ as F,s as z}from"./entry.efea56cc.js";import{_ as C}from"./client-only.f611fddc.js";const S=[{name:"Home",href:"/"},{name:"Services",href:"/#services"},{name:"Renting Procedure",href:"/#rentabike"},{name:"Contact us",href:"#contactus"},{name:"About us",href:"/about"}],B={id:"dropdown",class:"relative md:hidden"},E={id:"menu",class:"absolute py-4 rounded-lg right-0 top-6 z-10"},P={class:"flex flex-col text-bred-200 w-32 border px-4 gap-y-2 py-2 rounded-lg bg-bgray-100"},T={class:"text-center w-full hover:opacity-60"},q={__name:"Dropdown",setup(d){const l=y(!1);function _(s){l.value=!l.value}return(s,c)=>{const i=w("font-awesome-icon"),u=C,b=v;return n(),o("div",B,[t(u,null,{default:r(()=>[t(i,{onClick:_,icon:"fa-solid fa-bars",class:"text-3xl text-bred-200 cursor-pointer"})]),_:1}),k(e("div",E,[e("ul",P,[(n(!0),o(f,null,p(m(S),a=>(n(),o("li",T,[t(b,{to:a.href},{default:r(()=>[g(x(a.name),1)]),_:2},1032,["to"])]))),256))])],512),[[A,m(l)]])])}}},D=q,V={class:"flex justify-between items-center my-4"},H=["src"],M={class:"flex text-bred-200 gap-x-12 font-bold text-lg max-md:hidden"},Z={__name:"Navbar",setup(d){return(l,_)=>{const s=v,c=D;return n(),o("nav",V,[e("img",{src:"/images/bikeChaiye.jpg",alt:"",class:"h-24 w-24",loading:"lazy"},null,8,H),e("ul",M,[(n(!0),o(f,null,p(m(S),i=>(n(),o("li",null,[t(s,{to:i.href},{default:r(()=>[g(x(i.name),1)]),_:2},1032,["to"])]))),256))]),t(c)])}}},O=Z,R={class:"mb-8 font-bold tracking-wider"},U={class:"flex flex-col gap-y-2"},G="max-md:mt-6",I={__name:"FooterNavigator",props:{title:String,links:Array},setup(d){return(l,_)=>{const s=v;return n(),o("div",{class:h(`${G}`)},[e("h2",R,x(d.title),1),e("div",U,[(n(!0),o(f,null,p(d.links,c=>(n(),$(s,{to:c.href},{default:r(()=>[g(x(c.name),1)]),_:2},1032,["to"]))),256))])],2)}}},K=I,L=[{title:"Company",links:[{name:"Home",href:"/"},{name:"About Us",href:"/about"},{name:"Privacy Policy",href:"/privacy-policy"},{name:"Terms and Condition",href:"/terms-and-conditions"}]},{title:"Product",links:[{name:"Services",href:"/#services"},{name:"Testimonials",href:"/#testimonials"},{name:"FAQs",href:"/#faqs"}]}],Q=[{icon:"square-whatsapp",link:"https://wa.me/+923224334086"},{icon:"linkedin",link:"https://www.linkedin.com/company/bike-chaiye/"},{icon:"square-facebook",link:"https://www.facebook.com/p/Bike-Chahiye-100083448692468"},{icon:"square-instagram",link:"https://www.instagram.com/bikechaiye/"}],Y={id:"contactus",class:h("bg-bgray-300 flex flex-col gap-y-12 py-12")},J={class:"flex flex-col gap-y-6 mx-4 justify-around border border-2 rounded-lg p-4 md:flex-row md:mx-12"},W={class:"flex gap-x-4 items-center"},X=e("div",null,[e("p",{class:"font-bold"},"Call us"),e("p",null,"03224334086")],-1),ee=e("p",{class:"border"},null,-1),te={class:"flex gap-x-4 items-center"},ne=e("div",null,[e("p",{class:"font-bold"},"Email us"),e("p",null,"bikechaiye@gmail.com")],-1),oe=e("p",{class:"border"},null,-1),se={class:"flex gap-x-4 items-center"},le=e("div",null,[e("p",{class:"font-bold"},"Address"),e("p",null,"St 2 Asghar Colony, Gujranwala ")],-1),ae=e("h1",{class:"tracking-wider font-bold text-xl mb-1"},"BIKE CHAIYE",-1),ce={class:"flex gap-x-5"},ie=["href"],re=e("h1",{class:"font-bold"},"Stay update on the latest news from us",-1),de=e("p",{class:"font-medium mb-4"},"Enter your email address",-1),_e="max-md:justify-between max-md:px-6",ue="max-md:mt-6",me={__name:"Footer",setup(d){const l=y(null),_=s=>{/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(l.value)?(s.target.innerText="Signed up",s.target.disabled=!0):s.target.innerText="Invalid Email"};return(s,c)=>{const i=w("font-awesome-icon"),u=C,b=K;return n(),o("div",Y,[e("div",J,[e("div",W,[t(u,null,{default:r(()=>[t(i,{icon:"fa-solid fa-phone-volume",class:"text-2xl md:text-4xl text-bred-200 cursor-pointer"})]),_:1}),X]),ee,e("div",te,[t(u,null,{default:r(()=>[t(i,{icon:"fa-solid fa-envelope",class:"text-2xl md:text-4xl text-bred-200 cursor-pointer"})]),_:1}),ne]),oe,e("div",se,[t(u,null,{default:r(()=>[t(i,{icon:"fa-solid fa-location-dot",class:"text-2xl md:text-4xl text-bred-200 cursor-pointer"})]),_:1}),le])]),e("div",{class:h(` flex justify-around items-baseline flex-wrap gap-x-6  ${_e}`)},[e("div",null,[ae,t(u,null,{default:r(()=>[e("div",ce,[(n(!0),o(f,null,p(m(Q),a=>(n(),o("a",{href:a.link,target:"_blank"},[t(i,{icon:`fa-brands fa-${a.icon}`,class:"text-xl"},null,8,["icon"])],8,ie))),256))])]),_:1})]),(n(!0),o(f,null,p(m(L),a=>(n(),$(b,{title:a.title,links:a.links},null,8,["title","links"]))),256)),e("div",{class:h(`flex flex-col gap-y-6 ${ue}`)},[re,e("div",null,[de,k(e("input",{type:"text",class:"border-b-2 border-black w-full bg-inherit outline-0","onUpdate:modelValue":c[0]||(c[0]=a=>j(l)?l.value=a:null)},null,512),[[N,m(l)]])]),e("button",{class:"py-2 px-3 bg-bred-200 w-1/2 text-white hover:opacity-90",onClick:_}," Sign up ")],2)],2)])}}},fe=me,pe={},xe={class:""},he={class:"font-roboto mx-20 max-lg:mx-8 max-md:mx-12 max-sm:mx-4"};function be(d,l){const _=O,s=fe;return n(),o("div",xe,[e("div",he,[t(_),e("div",null,[z(d.$slots,"default")])]),t(s,{class:""})])}const ye=F(pe,[["render",be]]);export{ye as default};