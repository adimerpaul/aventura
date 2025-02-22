import{j as I,k as C,l as ee,ac as le,g as ae,r as d,V as te,c as F,o as m,w as v,a as o,Q as K,e as N,b as c,aB as B,f as V,Z as T,t as f,a0 as M,a1 as g,a2 as j,a3 as P,a4 as oe,h as se,aW as re,aD as ne,W as ue}from"./index-DEbtOr7C.js";import{Q as ie}from"./QMarkupTable-rH2VDkqn.js";import{Q as ce}from"./QSpace-rOGDegqh.js";import{Q as ve}from"./QForm-BIWJhDDX.js";import{Q as de}from"./QPage-BHsL5-dn.js";import{C as me}from"./ClosePopup-DoJJOxg7.js";import{h as U}from"./moment-C5S46NFB.js";const fe=["top","middle","bottom"],z=I({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:r=>fe.includes(r)}},setup(r,{slots:i}){const y=C(()=>r.align!==void 0?{verticalAlign:r.align}:null),k=C(()=>{const h=r.outline===!0&&r.color||r.textColor;return`q-badge flex inline items-center no-wrap q-badge--${r.multiLine===!0?"multi":"single"}-line`+(r.outline===!0?" q-badge--outline":r.color!==void 0?` bg-${r.color}`:"")+(h!==void 0?` text-${h}`:"")+(r.floating===!0?" q-badge--floating":"")+(r.rounded===!0?" q-badge--rounded":"")+(r.transparent===!0?" q-badge--transparent":"")});return()=>ee("div",{class:k.value,style:y.value,role:"status","aria-label":r.label},le(i.default,r.label!==void 0?[r.label]:[]))}}),ge={class:"row"},be={class:"col-6 col-md-2"},pe={class:"col-6 col-md-2 flex flex-center"},$e={class:"col-6 col-md-2"},ye={class:"col-6 col-md-3 text-right"},ke={class:"col-6 col-md-3 text-right"},he={class:"text-right"},Se=["rowspan","onClick"],_e={key:0},Ve={key:1},Ce={class:"q-mt-md text-bold"},Re={__name:"Reservas",setup(r){const{proxy:i}=ae(),y=d(U().format("YYYY-MM-DD")),k=d([]),h=d([]),n=d({}),s=d({}),S=d(0),w=d(!1),_=d(""),$=d(1),Q=d(0),q=d(""),b=d(!1),O=C(()=>{const t=Math.floor(S.value/60),l=S.value%60;return`${String(t).padStart(2,"0")}:${String(l).padStart(2,"0")}`}),E=C(()=>S.value/30*5*($.value||1));te(()=>{for(let t=0;t<20;t++)k.value.push({sala:"Sala "+(t+1)});for(let t=8;t<23;t++)h.value.push({hora:`${t}:00`}),h.value.push({hora:`${t}:30`});D(),R(),i.$store.socketReservas||(i.$socket.on("reservas",()=>{R()}),i.$store.socketReservas=!0)});function R(){b.value=!0,i.$axios.get("/reservas",{params:{fecha:y.value}}).then(t=>{s.value=t.data||{},console.log("Reservas cargadas:",s.value)}).catch(t=>{i.$alert.error("Error al obtener reservas")}).finally(()=>{b.value=!1})}function L(){n.value={},S.value=0,_.value="",$.value=1,Q.value=0,q.value=""}const Y=C(()=>Object.keys(n.value).length===0?"-":Object.values(n.value).map(l=>U(l,"H:mm")).sort((l,e)=>l.diff(e))[0].format("H:mm")),A=C(()=>{if(Object.keys(n.value).length===0)return"-";const t=Object.values(n.value).map(e=>U(e,"H:mm")).sort((e,a)=>e.diff(a));return t[t.length-1].add(30,"minutes").format("H:mm")});function W(){if(S.value===0){i.$alert.error("Por favor","selecciona al menos 30 minutos.");return}w.value=!0,_.value="",$.value=1,Q.value=0,q.value=""}const G=(t,l)=>{const e=`${t}-${l}`,a=`${t-1}-${l}`;return s.value[e]?!(t>0&&s.value[a]&&s.value[a].nombre===s.value[e].nombre):!0},J=(t,l)=>{const e=`${t}-${l}`;if(!s.value[e])return 1;let a=1;for(;s.value[`${t+a}-${l}`]&&s.value[`${t+a}-${l}`].nombre===s.value[e].nombre;)a++;return a},Z=(t,l,e)=>{const a=`${t}-${l}`;if(s.value[a])return;if(Object.keys(n.value).length===0){n.value[a]=e,D();return}const H=new Set(Object.keys(n.value).map(p=>p.split("-")[1]));if(H.size>0&&!H.has(String(l))){i.$alert.error("Debes seleccionar en la misma sala.");return}const u=Object.keys(n.value).map(p=>parseInt(p.split("-")[0])).sort((p,x)=>p-x);if(u.length>0){const p=u[u.length-1];if(t!==p+1){i.$alert.error("Debes seleccionar horarios consecutivos.");return}}n.value[a]?delete n.value[a]:n.value[a]=e,D()},D=()=>{S.value=Object.keys(n.value).length*30},X=()=>{Object.keys(n.value).forEach(a=>{s.value[a]={nombre:_.value,personas:$.value,color:"yellow"}});const l=Object.keys(n.value)[0].split("-")[1],e=k.value[l]?.sala||"Desconocida";b.value=!0,i.$axios.post("/reservas",{nombre:_.value,numero_personas:$.value,observaciones:q.value,json:JSON.stringify(n.value),sala:e,total:E.value,adelanto:Q.value,tiempo:O.value,horario:`${Y.value} - ${A.value}`,fecha:y.value}).then(a=>{i.$alert.success("Reserva confirmada","Reserva"),L(),i.$socket.emit("reservas"),w.value=!1}).catch(a=>{i.$alert.error(a.response.data.message,"Error al confirmar reserva")}).finally(()=>{b.value=!1})};return(t,l)=>(m(),F(de,{class:"q-pa-xs"},{default:v(()=>[o(K,{flat:"",bordered:""},{default:v(()=>[o(N,{class:"q-pa-xs"},{default:v(()=>[c("div",ge,[c("div",be,[o(B,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=e=>y.value=e),type:"date",label:"Fecha",dense:"",outlined:""},null,8,["modelValue"])]),c("div",pe,[o(V,{color:"primary",label:"Consultar",onClick:R,size:"11px","no-caps":"",icon:"search",loading:b.value},null,8,["loading"])]),c("div",$e,[o(z,{color:"primary",class:"q-pa-sm"},{default:v(()=>[T(" Tiempo Seleccionado: "+f(O.value),1)]),_:1})]),c("div",ye,[Object.keys(n.value).length>0?(m(),F(V,{key:0,color:"red",label:"Limpiar",onClick:L,"no-caps":"",icon:"clear",size:"11px"})):M("",!0)]),c("div",ke,[o(V,{color:"green",label:"Reservar",onClick:W,"no-caps":"",icon:"save",size:"11px",loading:b.value},null,8,["loading"])])]),o(ie,{"wrap-cells":"",dense:"",bordered:"",flat:"",separator:"cell"},{default:v(()=>[c("thead",null,[c("tr",null,[l[7]||(l[7]=c("th",null,"Hora",-1)),(m(!0),g(j,null,P(k.value,e=>(m(),g("th",{key:e.sala},f(e.sala),1))),128))])]),c("tbody",null,[(m(!0),g(j,null,P(h.value,(e,a)=>(m(),g("tr",{key:a},[c("td",he,f(e.hora),1),(m(!0),g(j,null,P(k.value,(H,u)=>(m(),g(j,{key:u},[G(a,u)?(m(),g("td",{key:0,rowspan:J(a,u),class:oe([{"bg-green text-white":n.value[`${a}-${u}`]&&!s.value[`${a}-${u}`],"bg-red text-white":s.value[`${a}-${u}`]?.color==="red","bg-yellow text-black":s.value[`${a}-${u}`]?.color==="yellow","bg-grey-3":!n.value[`${a}-${u}`]&&!s.value[`${a}-${u}`]},"text-center cursor-pointer"]),onClick:p=>Z(a,u,e.hora)},[s.value[`${a}-${u}`]?(m(),g("div",_e,f(s.value[`${a}-${u}`].nombre),1)):M("",!0),s.value[`${a}-${u}`]&&s.value[`${a}-${u}`].fecha_confirmacion?(m(),g("div",Ve,f(s.value[`${a}-${u}`].fecha_confirmacion.substring(11,16)),1)):M("",!0)],10,Se)):M("",!0)],64))),128))]))),128))])]),_:1})]),_:1})]),_:1}),o(se,{modelValue:w.value,"onUpdate:modelValue":l[6]||(l[6]=e=>w.value=e)},{default:v(()=>[o(K,{style:{"min-width":"250px"}},{default:v(()=>[o(N,{class:"q-pb-none row items-center"},{default:v(()=>[l[8]||(l[8]=c("div",{class:"text-h6"},"Reservar Sala",-1)),o(ce),o(V,{flat:"",dense:"",round:"",icon:"close",class:"q-ml-auto",onClick:l[1]||(l[1]=e=>w.value=!1)})]),_:1}),o(N,null,{default:v(()=>[o(ve,{onSubmit:re(X,["prevent"])},{default:v(()=>[o(B,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=e=>_.value=e),label:"Nombre",dense:"",outlined:"",class:"",rules:[e=>!!e||"Por favor, ingresa un nombre."]},null,8,["modelValue","rules"]),o(B,{modelValue:$.value,"onUpdate:modelValue":l[3]||(l[3]=e=>$.value=e),modelModifiers:{number:!0},type:"number",label:"Número de Personas",dense:"",outlined:"",class:"",rules:[e=>e>0||"Por favor, ingresa un número válido."]},null,8,["modelValue","rules"]),o(B,{modelValue:Q.value,"onUpdate:modelValue":l[4]||(l[4]=e=>Q.value=e),modelModifiers:{number:!0},type:"number",label:"Adelanto",dense:"",outlined:"",class:"",rules:[e=>e>=0||"Por favor, ingresa un número válido."]},null,8,["modelValue","rules"]),o(B,{modelValue:q.value,"onUpdate:modelValue":l[5]||(l[5]=e=>q.value=e),label:"Observación",dense:"",outlined:"",class:"",hint:"",type:"textarea"},null,8,["modelValue"]),c("div",null,[o(z,{color:"indigo",class:"q-pa-sm"},{default:v(()=>[T(" Horario Seleccionado: Desde "+f(Y.value)+" hasta "+f(A.value),1)]),_:1})]),o(z,{color:"blue",class:"q-pa-sm"},{default:v(()=>[T(" Tiempo Total: "+f(O.value),1)]),_:1}),c("div",Ce," Monto Total: "+f(E.value)+" Bs ",1),o(ne,{align:"right"},{default:v(()=>[ue(o(V,{flat:"",label:"Cancelar","no-caps":"",loading:b.value},null,8,["loading"]),[[me]]),o(V,{color:"green",label:"Confirmar","no-caps":"",type:"submit",loading:b.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{Re as default};
