
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as J}from"./index-28c56e4d.js";import{A as U}from"./chat-b48f1715.js";import{d as $,r as _,Q as E,x as Q,o,c,e as a,f as t,R as f,S as v,b as S,k as g,w as W,I as i,a as b,P as X,h as s,X as G,t as D,J as I,E as H,q as A}from"./index-f34b0b87.js";import{R as K,a as Y}from"./index-39bad72e.js";const Z={class:"flex draw_container"},ee={class:"draw_head"},le={class:"draw_footer flex mt-3 justify-between items-center"},ae=$({__name:"midjourney",setup(te){const p=_(!1),k=_(),x=_(0),C=_([]),n=E({userId:"",rec:"",status:3,page:1,size:10}),V=_([]);async function u(){p.value=!0;try{const r=await U.queryMjDrawAll(n),{rows:l,count:d}=r.data;p.value=!1,x.value=d,V.value=l}catch{p.value=!1}}async function M(r){const l=await U.recMjDrawImg({id:r});H.success(l.data),u()}async function j(r){const l=await X.queryAllUser({size:30,username:r});C.value=l.data.rows}function R(r){r==null||r.resetFields(),u()}return Q(()=>{u()}),(r,l)=>{const d=s("el-option"),y=s("el-select"),m=s("el-form-item"),w=s("el-button"),T=s("el-form"),h=J,N=s("el-image"),P=s("el-tag"),q=s("Plus"),z=s("el-icon"),B=s("Minus"),L=s("el-pagination"),O=s("el-row"),F=G("loading");return o(),c("div",null,[a(h,null,{default:t(()=>[a(T,{ref_key:"formRef",ref:k,inline:!0,model:n},{default:t(()=>[a(m,{label:"用户名称",prop:"userId"},{default:t(()=>[a(y,{modelValue:n.userId,"onUpdate:modelValue":l[0]||(l[0]=e=>n.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"用户姓名[模糊搜索]","remote-show-suffix":"","remote-method":j},{default:t(()=>[(o(!0),c(f,null,v(C.value,e=>(o(),i(d,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"推荐状态",prop:"rec"},{default:t(()=>[a(y,{modelValue:n.rec,"onUpdate:modelValue":l[1]||(l[1]=e=>n.rec=e),placeholder:"请选择推荐状态",clearable:""},{default:t(()=>[(o(!0),c(f,null,v(S(K),e=>(o(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"绘制状态",prop:"status"},{default:t(()=>[a(y,{modelValue:n.status,"onUpdate:modelValue":l[2]||(l[2]=e=>n.status=e),placeholder:"请选择图片绘制状态",clearable:""},{default:t(()=>[(o(!0),c(f,null,v(S(Y),e=>(o(),i(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:t(()=>[a(w,{type:"primary",onClick:u},{default:t(()=>[g(" 查询 ")]),_:1}),a(w,{onClick:l[3]||(l[3]=e=>R(k.value))},{default:t(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),W((o(),i(h,{style:{width:"100%"}},{default:t(()=>[b("div",Z,[(o(!0),c(f,null,v(V.value,e=>(o(),c("div",{key:e.id,style:{height:"280px"},class:"draw_img_container flex border"},[b("div",ee,[a(N,{fit:"contain","preview-src-list":[e.drawUrl],src:e.drawUrl,lazy:"",class:"draw_img","hide-on-click-modal":""},null,8,["preview-src-list","src"])]),b("div",le,[a(P,{class:"ml-2",type:e.rec?"success":"info"},{default:t(()=>[g(D(e.rec?"已推荐":"未推荐"),1)]),_:2},1032,["type"]),a(w,{type:"warning",plain:"",size:"small",onClick:ne=>M(e.id)},{default:t(()=>[g(D(e.rec?"取消推荐":"加入推荐")+" ",1),e.rec?I("",!0):(o(),i(z,{key:0},{default:t(()=>[a(q)]),_:1})),e.rec?(o(),i(z,{key:1},{default:t(()=>[a(B)]),_:1})):I("",!0)]),_:2},1032,["onClick"])])]))),128))]),a(O,{class:"flex justify-end mt-5"},{default:t(()=>[a(L,{"current-page":n.page,"onUpdate:currentPage":l[4]||(l[4]=e=>n.page=e),"page-size":n.size,"onUpdate:pageSize":l[5]||(l[5]=e=>n.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:x.value,onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})),[[F,p.value]])])}}});typeof A=="function"&&A(ae);export{ae as default};