import{d as ue,u as de,r as c,o as he,a as ve,b as d,c as h,e as a,t as v,f as j,F as U,g as ge,w as G,v as W,h as fe,i as pe,j as _e,T as me,n as J,k as T,l as E,m as z,_ as Me}from"./index-00e69fa6.js";import{A as g,W as n,C as R,a as P,b as ye,M as B,S as Se,c as K,d as Ce,e as ke,f as Q,g as we,P as X,h as xe}from"./APIClient-5c5bd9aa.js";const Te={class:"chat"},be={class:"header"},Ie={class:"center"},De={class:"right"},Ne=["id"],qe={key:0,class:"status"},Le={class:"bubble right"},Ue={class:"text"},Ee={class:"avatar"},Re=["id"],Pe={class:"avatar"},Be={class:"bubble"},Ke={class:"text"},Ve={class:"footer"},$e=["placeholder","onKeydown"],Fe={class:"switch"},Ae={class:"item"},He=["onClick","checked"],Oe={class:"item"},je=["onClick","checked"],Ge=["placeholder"],We=ue({__name:"Chat",setup(Je){const M=de(),b=c(null),f=c(!1),x=c(""),p=c("");c();const y=c(""),i=c(!0),l=c(new P("",0)),S=c("请输入对方登录名"),_=c(!1),I=c(!1),D=c(!1),V=c("请输入消息"),m=c(),r=c(new Array),C=M.currentRoute.value.query.uid||void 0,$=M.currentRoute.value.query.token||"token111";x.value=`${C||""}(未连接)`;let N,q,L;he(()=>{(!g.shared.config.apiURL||g.shared.config.apiURL==="")&&(n.shared().connectManager.disconnect(),M.push({path:"/"})),g.shared.get("/route",{param:{uid:M.currentRoute.value.query.uid}}).then(e=>{console.log(e);let s=e.wss_addr;(!s||s==="")&&(s=e.ws_addr),Y(s)}).catch(e=>{console.log(e),alert(e.msg)})});const Y=e=>{const s=n.shared().config;C&&$&&(s.uid=C,s.token=$),s.addr=e,n.shared().config=s,n.shared().config.provider.syncMessagesCallback=async(t,o)=>await g.shared.syncMessages(t,o),N=t=>{t==ye.Connected?x.value=`${C||""}(连接成功)`:x.value=`${C||""}(断开)`},n.shared().connectManager.addConnectStatusListener(N),q=t=>{if(t.streamOn){let o=!1;for(const u of r.value)if(u.streamNo===t.streamNo){let k=u.streams;const w=new we;w.clientMsgNo=t.clientMsgNo,w.streamSeq=t.streamSeq||0,w.content=t.content,k&&k.length>0?k.push(w):k=[w],u.streams=k,o=!0;break}o||r.value.push(t)}else r.value.push(t);F()},n.shared().chatManager.addMessageListener(q),L=t=>{console.log(t),r.value.forEach(o=>{if(o.clientSeq==t.clientSeq){o.status=t.reasonCode==1?B.Normal:B.Fail;return}})},n.shared().chatManager.addMessageStatusListener(L),n.shared().connect()};ve(()=>{n.shared().connectManager.removeConnectStatusListener(N),n.shared().chatManager.removeMessageListener(q),n.shared().chatManager.removeMessageStatusListener(L),n.shared().disconnect()});const Z=e=>{i.value=e.target.checked,i.value?S.value="请输入对方登录名":S.value="请输入群组ID"},ee=e=>{i.value=!e.target.checked,i.value?S.value="请输入对方登录名":S.value="请输入群组ID"},F=()=>{const e=b.value;e&&J(function(){e.scrollTop=e.scrollHeight})},te=async()=>{_.value=!0;const e=await n.shared().chatManager.syncMessages(l.value,{limit:15,startMessageSeq:0,endMessageSeq:0,pullMode:X.Up});_.value=!1,e&&e.length>0&&e.forEach(s=>{r.value.push(s)}),F()},se=async()=>{if(r.value.length==0)return;const e=r.value[0];if(e.messageSeq==1){I.value=!0;return}const s=15,t=await n.shared().chatManager.syncMessages(l.value,{limit:s,startMessageSeq:e.messageSeq-1,endMessageSeq:0,pullMode:X.Down});t.length<s&&(I.value=!0),t&&t.length>0&&t.reverse().forEach(o=>{r.value.unshift(o)}),J(function(){const o=b.value,u=document.getElementById(e.clientMsgNo);u&&(o.scrollTop=u.offsetTop)})},A=()=>{f.value=!f.value},ae=()=>{i.value?l.value=new P(y.value,Q):l.value=new P(y.value,R),i.value||g.shared.joinChannel(l.value.channelID,l.value.channelType,n.shared().config.uid||""),f.value=!1,r.value=[],te()},H=()=>{if(!p.value||p.value.trim()==="")return;const e=Se.fromUint8(0);if(l.value&&l.value.channelID!=""){var s;m.value&&m.value!==""&&(e.streamNo=m.value),s=new K(p.value),n.shared().chatManager.send(s,l.value,e),p.value=""}else f.value=!0},ne=async()=>{if(!l.value||l.value.channelID===""){f.value=!0;return}const e=!D.value;if(e){const s=JSON.stringify({type:Ce.text,content:"我是流消息"}),t=await g.shared.messageStreamStart({header:{red_dot:1},from_uid:n.shared().config.uid||"",channel_id:l.value.channelID,channel_type:l.value.channelType,payload:ke.Buffer.from(s).toString("base64")}).catch(o=>{alert(o.msg)});t&&oe(t.stream_no)}else le();D.value=e,V.value=e?"现在开始你输入的消息是流式消息，多次输入试试。":"请输入消息"},oe=e=>{m.value=e},le=async()=>{await g.shared.messageStreamEnd({stream_no:m.value||"",channel_id:y.value,channel_type:i.value?Q:R}),m.value=void 0},ce=()=>{n.shared().connectManager.disconnect(),M.push({path:"/"})},O=e=>{if(e instanceof xe){const s=e.streams;let t="";if(e.content instanceof K&&(t=e.content.text||""),s&&s.length>0){for(const o of s)if(o.content instanceof K){const u=o.content;t=t+(u.text||"")}}return t}return"未知消息"},re=e=>{const s=e.target.scrollTop;if(e.target.scrollHeight-(s+e.target.clientHeight),s<=250){if(_.value||I.value)return;_.value=!0,se().then(()=>{_.value=!1}).catch(()=>{_.value=!1})}},ie=()=>{H()};return(e,s)=>(d(),h(U,null,[a("div",Te,[a("div",be,[a("div",{class:"left"},[a("button",{onClick:ce},"退出")]),a("div",Ie,v(x.value),1),a("div",De,[a("button",{onClick:A},v(l.value.channelID.length==0?"与谁会话？":`${l.value.channelType==j(R)?"群":"单聊"}${l.value.channelID}`),1)])]),a("div",{class:"content",onScroll:re,ref_key:"chatRef",ref:b},[(d(!0),h(U,null,ge(r.value,t=>(d(),h(U,null,[t.send?(d(),h("div",{key:0,class:"message right",id:t.clientMsgNo},[t.status!=j(B).Normal?(d(),h("div",qe,"发送中")):T("",!0),a("div",Le,[a("div",Ue,v(O(t)),1)]),a("div",Ee,v(t.fromUID.substring(0,1).toUpperCase()),1)],8,Ne)):T("",!0),t.send?T("",!0):(d(),h("div",{key:1,class:"message",id:t.clientMsgNo},[a("div",Pe,v(t.fromUID.substring(0,1).toUpperCase()),1),a("div",Be,[a("div",Ke,v(O(t)),1)])],8,Re))],64))),256))],544),a("div",Ve,[G(a("input",{placeholder:V.value,"onUpdate:modelValue":s[0]||(s[0]=t=>p.value=t),style:{height:"40px"},onKeydown:fe(ie,["enter"])},null,40,$e),[[W,p.value]]),a("button",{class:"message-stream",onClick:ne},v(D.value?"停止流消息":"开启流消息"),1),a("button",{onClick:H},"发送")])]),pe(me,{name:"fade"},{default:_e(()=>[f.value?(d(),h("div",{key:0,class:"setting",onClick:A},[a("div",{class:"setting-content",onClick:s[2]||(s[2]=E(()=>{},["stop"]))},[a("div",Fe,[a("div",Ae,[a("input",{type:"radio",onClick:E(Z,["stop"]),checked:i.value},null,8,He),z("单聊 ")]),a("div",Oe,[a("input",{type:"radio",onClick:E(ee,["stop"]),checked:!i.value},null,8,je),z("群聊 ")])]),G(a("input",{placeholder:S.value,class:"to","onUpdate:modelValue":s[1]||(s[1]=t=>y.value=t)},null,8,Ge),[[W,y.value]]),a("button",{class:"ok",onClick:ae},"确定")])])):T("",!0)]),_:1})],64))}});const Xe=Me(We,[["__scopeId","data-v-eaa2d565"]]);export{Xe as default};