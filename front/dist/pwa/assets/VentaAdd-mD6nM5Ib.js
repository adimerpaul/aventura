import{aA as L,g as N,r as s,l as U,x as F,c as B,o as c,w as o,b as t,a as e,f as v,Q as x,e as b,ap as C,b2 as M,u as T,a4 as V,a5 as _,a6 as $,Z as O,a0 as k,t as u,a1 as Z,ao as j,h as G,aw as H}from"./index-CA1MPuH5.js";import{c as J,Q as K,a as z,b as w}from"./QList-Cv5DZRpc.js";import{Q as W}from"./QMarkupTable-BBGNlyfr.js";import{Q as X}from"./QSpace-D0jR5TXR.js";import{Q as Y}from"./QForm-IUpnMKCy.js";import{Q as ee}from"./QPage-CK3pvUhf.js";const ae={class:"row"},le={class:"col-12"},te={class:"col-12 col-md-7"},oe={class:"col-12 col-md-5"},ne={class:"text-bold"},pe={__name:"VentaAdd",setup(re){const I=L(),{proxy:d}=N(),f=s({nombre:"",fecha:new Date().toISOString().slice(0,10)}),g=s([]),S=s([]),r=s([]);let i=s("");const p=s(!1),m=s(!1);U(()=>{P()});function P(){d.$axios.get("/productos").then(n=>{g.value=n.data,S.value=n.data})}const h=F(()=>r.value.reduce((n,l)=>n+l.cantidadVenta*l.precioVenta,0).toFixed(2));function q(){g.value=S.value.filter(n=>n.nombre.toLowerCase().includes(i.value.toLowerCase()))}function A(n){const l=r.value.find(a=>a.id===n.id);l?l.cantidadVenta++:r.value.push({...n,cantidadVenta:1,precioVenta:n.precio})}function D(n){r.value.splice(n,1)}function R(){if(r.value.length===0){d.$alert.error("El carrito está vacío","Error");return}p.value=!0,f.value={nombre:"SN"}}function E(){if(r.value.length===0){d.$alert.error("El carrito está vacío");return}m.value=!0,d.$axios.post("/ventas",{...f.value,total:h.value,productos:r.value}).then(async()=>{r.value=[],f.value={nombre:"",fecha:new Date().toISOString().slice(0,10)},p.value=!1,d.$alert.success("Venta realizada con éxito","Éxito"),I.push("/ventas"),i.value=""}).catch(n=>{d.$alert.error(n.response.data.message,"Error")}).finally(()=>{m.value=!1})}return(n,l)=>(c(),B(ee,{class:"q-pa-xs"},{default:o(()=>[t("div",ae,[t("div",le,[e(v,{label:"Atras",color:"primary",onClick:l[0]||(l[0]=a=>n.$router.push("/ventas")),"no-caps":"",icon:"arrow_back"})]),t("div",te,[e(x,{flat:"",bordered:"",class:"q-ma-xs"},{default:o(()=>[e(b,null,{default:o(()=>[e(C,{modelValue:T(i),"onUpdate:modelValue":[l[1]||(l[1]=a=>M(i)?i.value=a:i=a),q],label:"Buscar producto",outlined:"",dense:"",debounce:"300"},null,8,["modelValue"]),e(J,{bordered:"",padding:"",dense:""},{default:o(()=>[(c(!0),V(_,null,$(g.value,a=>(c(),V(_,{key:a.id},[O((c(),B(K,{clickable:"",onClick:Q=>A(a)},{default:o(()=>[e(z,null,{default:o(()=>[e(w,null,{default:o(()=>[k(u(a.nombre),1)]),_:2},1024),e(w,{caption:""},{default:o(()=>[k(u(a.precio)+" Bs",1)]),_:2},1024)]),_:2},1024),e(z,{side:""},{default:o(()=>[e(w,{caption:""},{default:o(()=>[k(u(a.stock),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Z]]),e(j,{spaced:"",inset:""})],64))),128))]),_:1})]),_:1})]),_:1})]),t("div",oe,[e(x,{flat:"",bordered:"",class:"q-ma-xs"},{default:o(()=>[e(b,null,{default:o(()=>[e(W,{"wrap-cells":"",dense:"",flat:"",bordered:""},{default:o(()=>[l[7]||(l[7]=t("thead",null,[t("tr",null,[t("th",null,"Producto"),t("th",null,"Cantidad"),t("th",null,"Precio"),t("th",null,"Subtotal"),t("th",null,"Acciones")])],-1)),t("tbody",null,[(c(!0),V(_,null,$(r.value,(a,Q)=>(c(),V("tr",{key:Q},[t("td",null,u(a.nombre),1),t("td",null,[e(C,{modelValue:a.cantidadVenta,"onUpdate:modelValue":y=>a.cantidadVenta=y,modelModifiers:{number:!0},type:"number",dense:"",outlined:""},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,u(a.precio)+" Bs ",1),t("td",null,u((a.cantidadVenta*a.precioVenta).toFixed(2))+" Bs",1),t("td",null,[e(v,{icon:"delete",color:"red",dense:"",onClick:y=>D(Q),loading:m.value,size:"10px"},null,8,["onClick","loading"])])]))),128))]),t("tfoot",null,[t("tr",null,[l[5]||(l[5]=t("td",{colspan:"3",class:"text-right text-bold"},"Total",-1)),t("td",ne,u(h.value)+" Bs",1),l[6]||(l[6]=t("td",null,null,-1))])])]),_:1}),e(v,{label:"Realizar Venta",color:"positive",class:"full-width q-mt-md","no-caps":"",onClick:R,loading:m.value},null,8,["loading"])]),_:1})]),_:1})])]),e(G,{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=a=>p.value=a)},{default:o(()=>[e(x,{flat:"",bordered:""},{default:o(()=>[e(b,{class:"q-pb-none row items-center"},{default:o(()=>[l[8]||(l[8]=t("div",{class:"text-bold"}," Realizar Venta ",-1)),e(X),e(v,{flat:"",dense:"",round:"",icon:"close",onClick:l[2]||(l[2]=a=>p.value=!1)})]),_:1}),e(b,null,{default:o(()=>[e(Y,{onSubmit:H(E,["prevent"])},{default:o(()=>[e(C,{modelValue:f.value.nombre,"onUpdate:modelValue":l[3]||(l[3]=a=>f.value.nombre=a),label:"Nombre Cliente",outlined:"",dense:"",rules:[a=>!!a||"Campo requerido"]},null,8,["modelValue","rules"]),e(v,{label:"Realizar Venta",color:"positive",type:"submit","no-caps":"",loading:m.value},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{pe as default};
