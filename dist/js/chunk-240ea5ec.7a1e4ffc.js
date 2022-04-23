(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-240ea5ec"],{4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"4f5a":function(e,t,n){"use strict";n.r(t);var i=n("7a23");const s=Object(i["h"])("Claves feature login"),r=Object(i["g"])("div",null,"Clave",-1),o=Object(i["g"])("div",null,"Status",-1);function a(e,t,n,a,l,c){const h=Object(i["y"])("ion-title"),u=Object(i["y"])("ion-toolbar"),d=Object(i["y"])("ion-header"),_=Object(i["y"])("ion-col"),p=Object(i["y"])("ion-row"),f=Object(i["y"])("ion-grid"),g=Object(i["y"])("ion-content"),m=Object(i["y"])("ion-page");return Object(i["r"])(),Object(i["e"])(m,null,{default:Object(i["D"])(()=>[Object(i["i"])(d,null,{default:Object(i["D"])(()=>[Object(i["i"])(u,null,{default:Object(i["D"])(()=>[Object(i["i"])(h,null,{default:Object(i["D"])(()=>[s]),_:1})]),_:1})]),_:1}),Object(i["i"])(g,{fullscreen:!0},{default:Object(i["D"])(()=>[Object(i["i"])(f,null,{default:Object(i["D"])(()=>[Object(i["i"])(p,null,{default:Object(i["D"])(()=>[Object(i["i"])(_,null,{default:Object(i["D"])(()=>[r]),_:1}),Object(i["i"])(_,null,{default:Object(i["D"])(()=>[o]),_:1})]),_:1}),(Object(i["r"])(!0),Object(i["f"])(i["a"],null,Object(i["x"])(l.listaClaves,(e,t)=>(Object(i["r"])(),Object(i["e"])(p,{key:t},{default:Object(i["D"])(()=>[Object(i["i"])(_,null,{default:Object(i["D"])(()=>[Object(i["g"])("div",null,Object(i["A"])(l.listaKeys[t]),1)]),_:2},1024),Object(i["i"])(_,null,{default:Object(i["D"])(()=>[Object(i["g"])("div",null,Object(i["A"])(e.status),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}var l=n("d867"),c=n("51b0"),h={name:"Tab1",components:{IonHeader:l["e"],IonToolbar:l["o"],IonTitle:l["n"],IonContent:l["c"],IonPage:l["h"],IonCol:l["b"],IonGrid:l["d"],IonRow:l["j"]},mounted(){const e=Object(c["a"])(),t=Object(c["c"])(e,"claves/");Object(c["b"])(t,e=>{const t=e.val();console.log(t);var n=0;e.forEach(e=>{this.listaKeys[n]=e.key,this.listaClaves[n]=e.toJSON(),n++})}),console.log("lista de claves",this.listaCaves)},data(){return{listaClaves:[{status:"",usuario:""}],listaKeys:[]}}},u=(n("a507"),n("6b0d")),d=n.n(u);const _=d()(h,[["render",a]]);t["default"]=_},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Bo})),n.d(t,"b",(function(){return qo})),n.d(t,"c",(function(){return Do}));var i=n("589b"),s=n("22e5"),r=n("1fd5"),o=n("e691");const a="@firebase/database",l="0.12.8";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function h(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(r["K"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(r["C"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(r["k"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},p=_("localStorage"),f=_("sessionStorage"),g=new o["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),y=function(e){const t=Object(r["J"])(e),n=new r["d"];n.update(t);const i=n.digest();return r["g"].encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?Object(r["K"])(i):i,t+=" "}return t};let C=null,b=!0;const w=function(e,t){Object(r["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,C=g.log.bind(g),t&&f.set("logging_enabled",!0)):"function"===typeof e?C=e:(C=null,f.remove("logging_enabled"))},T=function(...e){if(!0===b&&(b=!1,null===C&&!0===f.get("logging_enabled")&&w(!0)),C){const t=v.apply(null,e);C(t)}},I=function(e){return function(...t){T(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);g.error(t)},E=function(...e){const t="FIREBASE FATAL ERROR: "+v(...e);throw g.error(t),new Error(t)},O=function(...e){const t="FIREBASE WARNING: "+v(...e);g.warn(t)},N=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&O("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},P=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},S=function(e){if(Object(r["z"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},x="[MIN_NAME]",R="[MAX_NAME]",j=function(e,t){if(e===t)return 0;if(e===x||t===R)return-1;if(t===x||e===R)return 1;{const n=V(e),i=V(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(r["K"])(t))},F=function(e){if("object"!==typeof e||null===e)return Object(r["K"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(r["K"])(t[i]),n+=":",n+=F(e[t[i]]);return n+="}",n},A=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(r["e"])(!P(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,l,c;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(c=n;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(s?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(u.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function H(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const z=new RegExp("^-?(0*)\\d{1,10}$"),K=-2147483648,Y=2147483647,V=function(e){if(z.test(e)){const t=Number(e);if(t>=K&&t<=Y)return t}return null},B=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw O("Exception was thrown by user callback.",e),t},Math.floor(0))}},G=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Q=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){O(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(T("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',O(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",se=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,re="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(r["e"])("string"===typeof t,"typeof type must == string"),Object(r["e"])("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const s=[];return L(n,(e,t)=>{s.push(e+"="+t)}),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(r["k"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(r["n"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},fe={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new _e),pe[t]}function me(e,t){const n=e.toString();return fe[n]||(fe[n]=t()),fe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&B(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",Ce="close",be="pLPCommand",we="pRTLPCB",Te="id",Ie="pw",ke="ser",Ee="cb",Oe="seg",Ne="ts",Pe="d",Se="dframe",xe=1870,Re=30,je=xe-Re,De=25e3,Me=3e4;class Fe{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Me)),S(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ae((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==Ce)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ve]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[re]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fe.forceAllow_=!0}static forceDisallow(){Fe.forceDisallow_=!0}static isAvailable(){return!Object(r["z"])()&&(!!Fe.forceAllow_||!Fe.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(r["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(r["i"])(t),i=A(n,je);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(r["z"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Se]="t",n[Te]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(r["K"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ae{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(r["z"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[be+this.uniqueCallbackIdentifier]=e,window[we+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ae.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){T("frame writing exception"),s.stack&&T(s.stack),T(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||T("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Te]=this.myID,e[Ie]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=xe))break;{const e=this.pendingSegs.shift();n=n+"&"+Oe+i+"="+e.seg+"&"+Ne+i+"="+e.ts+"&"+Pe+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){Object(r["z"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{T("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=16384,qe=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class Ue{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=ge(t),this.connURL=Ue.connectionURL_(t,r,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const s={};return s[ee]=Z,!Object(r["z"])()&&"undefined"!==typeof location&&location.hostname&&se.test(location.hostname)&&(s[ne]=ie),t&&(s[te]=t),n&&(s[re]=n),i&&(s[ae]=i),de(e,le,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(r["z"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/"}),s=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];s&&(n["proxy"]={origin:s}),this.mySock=new We(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new We(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!Ue.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(r["C"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(r["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(r["K"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=A(t,Le);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fe,Ue]}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||O("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of He.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=6e4,Ke=5e3,Ye=10240,Ve=102400,Be="t",Ge="d",Qe="s",$e="r",Xe="e",Je="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new He(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Q(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ve?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ye?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Be in e){const t=e[Be];t===Ze?this.upgradeIfSecondaryHealthy_():t===$e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Be,e);if(Ge in e){const n=e[Ge];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qe?this.onConnectionShutdown_(n):t===$e?this.onReset_(n):t===Xe?k("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&O("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Q(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Q(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ke))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(r["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){Object(r["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends rt{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(r["y"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(r["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function _t(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ft(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function Ct(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return Ct(_t(e),_t(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function wt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(r["I"])(this.parts_[n]);Et(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(r["I"])(t),Et(e)}function kt(e){const t=e.parts_.pop();e.byteLength_-=Object(r["I"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends rt{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Nt}getInitialEvent(e){return Object(r["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=1e3,St=3e5,xt=3e3,Rt=3e4,jt=1.3,Dt=3e4,Mt="server_kill",Ft=3;class At extends st{constructor(e,t,n,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=At.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pt,this.maxReconnectDelay_=St,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Object(r["z"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Object(r["K"])(s)),Object(r["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new r["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},xt),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Object(r["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(r["e"])(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,s=>{const r=s["d"],o=s["s"];At.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(r["k"])(e,"w")){const n=Object(r["H"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();O(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(r["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(r["B"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(r["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(r["K"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+Object(r["K"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(r["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Dt&&(this.reconnectDelay_=Pt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){Object(r["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?T("getToken() completed but was canceled"):(T("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{O(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mt)},s))}catch(k){this.log_("Failed to get token: "+k),o||(this.repoInfo_.nodeAdmin&&O(k),l())}}}interrupt(e){T("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){T("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(r["v"])(this.interruptReasons_)&&(this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>F(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){T("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){T("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(r["z"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(r["y"])()?e["framework.cordova"]=1:Object(r["A"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(r["v"])(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0,At.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Lt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Lt(x,e),i=new Lt(x,t);return 0!==this.compare(n,i)}minPost(){return Lt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt;class Ut extends qt{static get __EMPTY_NODE(){return Wt}static set __EMPTY_NODE(e){Wt=e}compare(e,t){return j(e.name,t.name)}isDefinedOn(e){throw Object(r["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Lt.MIN}maxPost(){return new Lt(R,Wt)}makePost(e,t){return Object(r["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Lt(e,Wt)}toString(){return".key"}}const Ht=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(e=e,r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Kt{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Kt.RED,this.left=null!=i?i:Vt.EMPTY_NODE,this.right=null!=s?s:Vt.EMPTY_NODE}copy(e,t,n,i,s){return new Kt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Vt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Vt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Kt.RED=!0,Kt.BLACK=!1;class Yt{copy(e,t,n,i,s){return this}insert(e,t,n){return new Kt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Vt{constructor(e,t=Vt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Vt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new Vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bt(e,t){return j(e.name,t.name)}function Gt(e,t){return j(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qt;function $t(e){Qt=e}Vt.EMPTY_NODE=new Yt;const Xt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();Object(r["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(r["k"])(t,".sv"),"Priority must be a string or number.")}else Object(r["e"])(e===Qt||e.isEmpty(),"priority of unexpected type.");Object(r["e"])(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zt,en,tn;class nn{constructor(e,t=nn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(r["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Zt=e}static get __childrenNodeConstructor(){return Zt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ut(e)?this.priorityNode_:nn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(r["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nn.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nn.__childrenNodeConstructor?-1:(Object(r["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=nn.VALUE_TYPE_ORDER.indexOf(t),s=nn.VALUE_TYPE_ORDER.indexOf(n);return Object(r["e"])(i>=0,"Unknown leaf type: "+t),Object(r["e"])(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){en=e}function rn(e){tn=e}nn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class on extends qt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Lt.MIN}maxPost(){return new Lt(R,new nn("[PRIORITY-POST]",tn))}makePost(e,t){const n=en(e);return new Lt(t,new nn("[PRIORITY-POST]",n))}toString(){return".priority"}}const an=new on,ln=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/ln,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Kt(a,o.node,Kt.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new Kt(a,o.node,Kt.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new Kt(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Kt.BLACK):(a(i,Kt.BLACK),a(i,Kt.RED))}return r},o=new cn(e.length),a=r(o);return new Vt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;const dn={};class _n{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(r["e"])(dn&&an,"ChildrenNode.ts has not been loaded"),un=un||new _n({".priority":dn},{".priority":an}),un}get(e){const t=Object(r["H"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Vt?t:null}hasIndex(e){return Object(r["k"])(this.indexSet_,e.toString())}addIndex(e,t){Object(r["e"])(e!==Ht,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Lt.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?hn(n,e.getCompare()):dn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new _n(h,c)}addToIndexes(e,t){const n=Object(r["D"])(this.indexes_,(n,i)=>{const s=Object(r["H"])(this.indexSet_,i);if(Object(r["e"])(s,"Missing index implementation for "+i),n===dn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Lt.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),hn(n,s.getCompare())}return dn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Lt(e.name,i))),s.insert(e,e.node)}});return new _n(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(r["D"])(this.indexes_,n=>{if(n===dn)return n;{const i=t.get(e.name);return i?n.remove(new Lt(e.name,i)):n}});return new _n(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class fn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&Object(r["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new fn(new Vt(Gt),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new fn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(_t(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(r["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Lt(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?pn:this.priorityNode_;return new fn(i,r,s)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{Object(r["e"])(".priority"!==ut(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_t(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(an,(r,o)=>{t[r]=o.val(e),n++,s&&fn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(an,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Lt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Lt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Lt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Lt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===Ht||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ht||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(an),n=t.getIterator(an);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ht?null:this.indexMap_.get(e.toString())}}fn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gn extends fn{constructor(){super(new Vt(Gt),fn.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fn.EMPTY_NODE}isEmpty(){return!1}}const mn=new gn;Object.defineProperties(Lt,{MIN:{value:new Lt(x,fn.EMPTY_NODE)},MAX:{value:new Lt(R,mn)}}),Ut.__EMPTY_NODE=fn.EMPTY_NODE,nn.__childrenNodeConstructor=fn,$t(mn),rn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn=!0;function vn(e,t=null){if(null===e)return fn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(r["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new nn(n,vn(t))}if(e instanceof Array||!yn){let n=fn.EMPTY_NODE;return L(e,(t,i)=>{if(Object(r["k"])(e,t)&&"."!==t.substring(0,1)){const e=vn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(vn(t))}{const n=[];let i=!1;const s=e;if(L(s,(e,t)=>{if("."!==e.substring(0,1)){const s=vn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Lt(e,s)))}}),0===n.length)return fn.EMPTY_NODE;const r=hn(n,Bt,e=>e.name,Gt);if(i){const e=hn(n,an.getCompare());return new fn(r,vn(t),new _n({".priority":e},{".priority":an}))}return new fn(r,vn(t),_n.Default)}}sn(vn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends qt{constructor(e){super(),this.indexPath_=e,Object(r["e"])(!vt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}makePost(e,t){const n=vn(e),i=fn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Lt(t,i)}maxPost(){const e=fn.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Lt(R,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends qt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?j(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Lt.MIN}maxPost(){return Lt.MAX}makePost(e,t){const n=vn(e);return new Lt(t,n)}toString(){return".value"}}const wn=new bn,Tn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(e){return{type:"value",snapshotNode:e}}function kn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function On(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Nn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){Object(r["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(En(t,a)):Object(r["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(kn(t,n)):o.trackChildChange(On(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(an,(e,i)=>{t.hasChild(e)||n.trackChildChange(En(e,i))}),t.isLeafNode()||t.forEachChild(an,(t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(On(t,i,s))}else n.trackChildChange(kn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.indexedFilter_=new Pn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sn.getStartPost_(e),this.endPost_=Sn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fn.EMPTY_NODE);const s=this;return t.forEachChild(an,(e,t)=>{s.matches(new Lt(e,t))||(i=i.updateImmediateChild(e,fn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.rangedFilter_=new Sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Lt(t,n))||(n=fn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(fn.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&s(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,fn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(r["e"])(a.numChildren()===this.limit_,"");const l=new Lt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=r&&(r.name===t||a.hasChild(r.name)))r=i.getChildAfterChild(this.index_,r,this.reverse_);const u=null==r?1:o(r,l),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(On(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,fn.EMPTY_NODE),i=null!=r&&this.rangedFilter_.matches(r);return i?(null!=s&&s.trackChildChange(kn(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=s&&(s.trackChildChange(En(c.name,c.node)),s.trackChildChange(kn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,fn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=an}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(r["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(r["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(r["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(r["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(r["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===an}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jn(e){return e.loadsAllData()?new Pn(e.getIndex()):e.hasLimit()?new xn(e):new Sn(e)}function Dn(e){const t={};if(e.isDefault())return t;let n;return e.index_===an?n="$priority":e.index_===wn?n="$value":e.index_===Ht?n="$key":(Object(r["e"])(e.index_ instanceof Cn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(r["K"])(n),e.startSet_&&(t["startAt"]=Object(r["K"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(r["K"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(r["K"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(r["K"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Mn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==an&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends st{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(r["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fn.getListenId_(e,n),a={};this.listens_[o]=a;const l=Dn(e._queryParams);this.restRequest_(s+".json",l,(e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),Object(r["H"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=Fn.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Dn(e._queryParams),n=e._path.toString(),i=new r["a"];return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(r["F"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(r["C"])(a.responseText)}catch(e){O("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&O("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.rootNode_=fn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return{value:null,children:new Map}}function qn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,Ln());const s=e.children.get(i);t=_t(t),qn(s,t,n)}}function Wn(e,t,n){null!==e.value?n(t,e.value):Un(e,(e,i)=>{const s=new ct(t.toString()+"/"+e);Wn(i,s,n)})}function Un(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e4,Kn=3e4,Yn=3e5;class Vn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hn(e);const n=zn+(Kn-zn)*Math.random();Q(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,(e,i)=>{i>0&&Object(r["k"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),Q(this.reportStats_.bind(this),Math.floor(2*Math.random()*Yn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn;function Gn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $n(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Bn||(Bn={}));class Xn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Bn.ACK_USER_WRITE,this.source=Gn()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return Object(r["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Xn(ht(),t,this.revert)}}return Object(r["e"])(ut(this.path)===e,"operationForChild called for unrelated child."),new Xn(_t(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.source=e,this.path=t,this.type=Bn.LISTEN_COMPLETE}operationForChild(e){return vt(this.path)?new Jn(this.source,ht()):new Jn(this.source,_t(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Bn.OVERWRITE}operationForChild(e){return vt(this.path)?new Zn(this.source,ht(),this.snap.getImmediateChild(e)):new Zn(this.source,_t(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Bn.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Zn(this.source,ht(),t.value):new ei(this.source,ht(),t)}return Object(r["e"])(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,_t(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ii(e,t,n,i){const s=[],r=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Nn(t.childName,t.snapshotNode))}),si(e,s,"child_removed",t,i,n),si(e,s,"child_added",t,i,n),si(e,s,"child_moved",r,i,n),si(e,s,"child_changed",t,i,n),si(e,s,"value",t,i,n),s}function si(e,t,n,i,s,r){const o=i.filter(e=>e.type===n);o.sort((t,n)=>oi(e,t,n)),o.forEach(n=>{const i=ri(e,n,r);s.forEach(s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))})})}function ri(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function oi(e,t,n){if(null==t.childName||null==n.childName)throw Object(r["f"])("Should only compare child_ events.");const i=new Lt(t.childName,t.snapshotNode),s=new Lt(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(e,t){return{eventCache:e,serverCache:t}}function li(e,t,n,i){return ai(new ti(t,n,i),e.serverCache)}function ci(e,t,n,i){return ai(e.eventCache,new ti(t,n,i))}function hi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ui(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;const _i=()=>(di||(di=new Vt(D)),di);class pi{constructor(e,t=_i()){this.value=e,this.children=t}static fromObject(e){let t=new pi(null);return L(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(vt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(_t(e),t);if(null!=s){const e=yt(new ct(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(vt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(_t(e)):new pi(null)}}set(e,t){if(vt(e))return new pi(t,this.children);{const n=ut(e),i=this.children.get(n)||new pi(null),s=i.set(_t(e),t),r=this.children.insert(n,s);return new pi(this.value,r)}}remove(e){if(vt(e))return this.children.isEmpty()?new pi(null):new pi(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(_t(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new pi(null):new pi(this.value,s)}return this}}get(e){if(vt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(_t(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ut(e),i=this.children.get(n)||new pi(null),s=i.setTree(_t(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new pi(this.value,r)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(yt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ut(e),s=this.children.get(i);return s?s.findOnPath_(_t(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ut(e),s=this.children.get(i);return s?s.foreachOnPath_(_t(e),yt(t,i),n):new pi(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(yt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.writeTree_=e}static empty(){return new fi(new pi(null))}}function gi(e,t,n){if(vt(t))return new fi(new pi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Ct(s,t);return r=r.updateChild(o,n),new fi(e.writeTree_.set(s,r))}{const i=new pi(n),s=e.writeTree_.setTree(t,i);return new fi(s)}}}function mi(e,t,n){let i=e;return L(n,(e,n)=>{i=gi(i,yt(t,e),n)}),i}function yi(e,t){if(vt(t))return fi.empty();{const n=e.writeTree_.setTree(t,new pi(null));return new fi(n)}}function vi(e,t){return null!=Ci(e,t)}function Ci(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ct(n.path,t)):null}function bi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(an,(e,n)=>{t.push(new Lt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Lt(e,n.value))}),t}function wi(e,t){if(vt(t))return e;{const n=Ci(e,t);return new fi(null!=n?new pi(n):e.writeTree_.subtree(t))}}function Ti(e){return e.writeTree_.isEmpty()}function Ii(e,t){return ki(ht(),e.writeTree_,t)}function ki(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,s)=>{".priority"===t?(Object(r["e"])(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=ki(yt(e,t),s,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e,t){return Gi(t,e)}function Oi(e,t,n,i,s){Object(r["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=gi(e.visibleWrites,t,n)),e.lastWriteId=i}function Ni(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Pi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(r["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Si(t,i.path)?s=!1:wt(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return xi(e),!0;if(i.snap)e.visibleWrites=yi(e.visibleWrites,i.path);else{const t=i.children;L(t,t=>{e.visibleWrites=yi(e.visibleWrites,yt(i.path,t))})}return!0}return!1}function Si(e,t){if(e.snap)return wt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&wt(yt(e.path,n),t))return!0;return!1}function xi(e){e.visibleWrites=ji(e.allWrites,Ri,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ri(e){return e.visible}function ji(e,t,n){let i=fi.empty();for(let s=0;s<e.length;++s){const o=e[s];if(t(o)){const e=o.path;let t;if(o.snap)wt(n,e)?(t=Ct(n,e),i=gi(i,t,o.snap)):wt(e,n)&&(t=Ct(e,n),i=gi(i,ht(),o.snap.getChild(t)));else{if(!o.children)throw Object(r["f"])("WriteRecord should have .snap or .children");if(wt(n,e))t=Ct(n,e),i=mi(i,t,o.children);else if(wt(e,n))if(t=Ct(e,n),vt(t))i=mi(i,ht(),o.children);else{const e=Object(r["H"])(o.children,ut(t));if(e){const n=e.getChild(_t(t));i=gi(i,ht(),n)}}}}}return i}function Di(e,t,n,i,s){if(i||s){const r=wi(e.visibleWrites,t);if(!s&&Ti(r))return n;if(s||null!=n||vi(r,ht())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(wt(e.path,t)||wt(t,e.path))},o=ji(e.allWrites,r,t),a=n||fn.EMPTY_NODE;return Ii(o,a)}return null}{const i=Ci(e.visibleWrites,t);if(null!=i)return i;{const i=wi(e.visibleWrites,t);if(Ti(i))return n;if(null!=n||vi(i,ht())){const e=n||fn.EMPTY_NODE;return Ii(i,e)}return null}}}function Mi(e,t,n){let i=fn.EMPTY_NODE;const s=Ci(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(an,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const s=wi(e.visibleWrites,t);return n.forEachChild(an,(e,t)=>{const n=Ii(wi(s,new ct(e)),t);i=i.updateImmediateChild(e,n)}),bi(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=wi(e.visibleWrites,t);return bi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Fi(e,t,n,i,s){Object(r["e"])(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(vi(e.visibleWrites,o))return null;{const t=wi(e.visibleWrites,o);return Ti(t)?s.getChild(n):Ii(t,s.getChild(n))}}function Ai(e,t,n,i){const s=yt(t,n),r=Ci(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=wi(e.visibleWrites,s);return Ii(t,i.getNode().getImmediateChild(n))}return null}function Li(e,t){return Ci(e.visibleWrites,t)}function qi(e,t,n,i,s,r,o){let a;const l=wi(e.visibleWrites,t),c=Ci(l,ht());if(null!=c)a=c;else{if(null==n)return[];a=Ii(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<s)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function Wi(){return{visibleWrites:fi.empty(),allWrites:[],lastWriteId:-1}}function Ui(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function Hi(e,t){return Mi(e.writeTree,e.treePath,t)}function zi(e,t,n,i){return Fi(e.writeTree,e.treePath,t,n,i)}function Ki(e,t){return Li(e.writeTree,yt(e.treePath,t))}function Yi(e,t,n,i,s,r){return qi(e.writeTree,e.treePath,t,n,i,s,r)}function Vi(e,t,n){return Ai(e.writeTree,e.treePath,t,n)}function Bi(e,t){return Gi(yt(e.treePath,t),e.writeTree)}function Gi(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(r["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(r["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,On(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,En(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,kn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw Object(r["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,On(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Xi=new $i;class Ji{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ui(this.viewCache_),s=Yi(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){return{filter:e}}function es(e,t){Object(r["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(r["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ts(e,t,n,i,s){const o=new Qi;let a,l;if(n.type===Bn.OVERWRITE){const c=n;c.source.fromUser?a=rs(e,t,c.path,c.snap,i,s,o):(Object(r["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!vt(c.path),a=ss(e,t,c.path,c.snap,i,s,l,o))}else if(n.type===Bn.MERGE){const c=n;c.source.fromUser?a=as(e,t,c.path,c.children,i,s,o):(Object(r["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=cs(e,t,c.path,c.children,i,s,l,o))}else if(n.type===Bn.ACK_USER_WRITE){const r=n;a=r.revert?ds(e,t,r.path,i,s,o):hs(e,t,r.path,r.affectedTree,i,s,o)}else{if(n.type!==Bn.LISTEN_COMPLETE)throw Object(r["f"])("Unknown operation type: "+n.type);a=us(e,t,n.path,i,o)}const c=o.getChanges();return ns(t,a,c),{viewCache:a,changes:c}}function ns(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=hi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(In(hi(t)))}}function is(e,t,n,i,s,o){const a=t.eventCache;if(null!=Ki(i,n))return t;{let l,c;if(vt(n))if(Object(r["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ui(t),s=n instanceof fn?n:fn.EMPTY_NODE,r=Hi(i,s);l=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Ui(i,ui(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=ut(n);if(".priority"===h){Object(r["e"])(1===dt(n),"Can't have a priority with additional path components");const s=a.getNode();c=t.serverCache.getNode();const o=zi(i,n,s,c);l=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=_t(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=zi(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(r,e):a.getNode().getImmediateChild(h)}else u=Vi(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,r,s,o):a.getNode()}}return li(t,l,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function ss(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(vt(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=ut(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const s=_t(n),r=l.getNode().getImmediateChild(e),o=r.updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,s,Xi,null)}const u=ci(t,c,l.isFullyInitialized()||vt(n),h.filtersNodes()),d=new Ji(s,u,r);return is(e,u,n,s,d,a)}function rs(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new Ji(s,t,r);if(vt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=li(t,c,!0,e.filter.filtersNodes());else{const s=ut(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=li(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=_t(n),c=a.getNode().getImmediateChild(s);let u;if(vt(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===pt(r)&&e.getChild(mt(r)).isEmpty()?e:e.updateChild(r,i):fn.EMPTY_NODE}if(c.equals(u))l=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,h,o);l=li(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function os(e,t){return e.eventCache.isCompleteForChild(t)}function as(e,t,n,i,s,r,o){let a=t;return i.foreach((i,l)=>{const c=yt(n,i);os(t,ut(c))&&(a=rs(e,a,c,l,s,r,o))}),i.foreach((i,l)=>{const c=yt(n,i);os(t,ut(c))||(a=rs(e,a,c,l,s,r,o))}),a}function ls(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function cs(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=vt(n)?i:new pi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(h.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),h=ls(e,l,i);c=ss(e,c,new ct(n),h,s,r,o,a)}}),l.children.inorderTraversal((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),h=ls(e,l,i);c=ss(e,c,new ct(n),h,s,r,o,a)}}),c}function hs(e,t,n,i,s,r,o){if(null!=Ki(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(vt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ss(e,t,n,l.getNode().getChild(n),s,r,a,o);if(vt(n)){let i=new pi(null);return l.getNode().forEachChild(Ht,(e,t)=>{i=i.set(new ct(e),t)}),cs(e,t,n,i,s,r,a,o)}return t}{let c=new pi(null);return i.foreach((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))}),cs(e,t,n,c,s,r,a,o)}}function us(e,t,n,i,s){const r=t.serverCache,o=ci(t,r.getNode(),r.isFullyInitialized()||vt(n),r.isFiltered());return is(e,o,n,i,Xi,s)}function ds(e,t,n,i,s,o){let a;if(null!=Ki(i,n))return t;{const l=new Ji(i,t,s),c=t.eventCache.getNode();let h;if(vt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=Ui(i,ui(t));else{const e=t.serverCache.getNode();Object(r["e"])(e instanceof fn,"serverChildren would be complete if leaf node"),n=Hi(i,e)}n=n,h=e.filter.updateFullNode(c,n,o)}else{const s=ut(n);let r=Vi(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=c.getImmediateChild(s)),h=null!=r?e.filter.updateChild(c,s,r,_t(n),l,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,fn.EMPTY_NODE,_t(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Ui(i,ui(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=Ki(i,ht()),li(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Pn(n.getIndex()),s=jn(n);this.processor_=Zi(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(fn.EMPTY_NODE,r.getNode(),null),l=s.updateFullNode(fn.EMPTY_NODE,o.getNode(),null),c=new ti(a,r.isFullyInitialized(),i.filtersNodes()),h=new ti(l,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=ai(h,c),this.eventGenerator_=new ni(this.query_)}get query(){return this.query_}}function ps(e){return e.viewCache_.serverCache.getNode()}function fs(e,t){const n=ui(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function gs(e){return 0===e.eventRegistrations_.length}function ms(e,t){e.eventRegistrations_.push(t)}function ys(e,t,n){const i=[];if(n){Object(r["e"])(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function vs(e,t,n,i){t.type===Bn.MERGE&&null!==t.source.queryId&&(Object(r["e"])(ui(e.viewCache_),"We should always have a full cache before handling merges"),Object(r["e"])(hi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=ts(e.processor_,s,t,n,i);return es(e.processor_,o.viewCache),Object(r["e"])(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,bs(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Cs(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(an,(e,t)=>{i.push(kn(e,t))})}return n.isFullyInitialized()&&i.push(In(n.getNode())),bs(e,i,n.getNode(),t)}function bs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return ii(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws,Ts;class Is{constructor(){this.views=new Map}}function ks(e){Object(r["e"])(!ws,"__referenceConstructor has already been defined"),ws=e}function Es(){return Object(r["e"])(ws,"Reference.ts has not been loaded"),ws}function Os(e){return 0===e.views.size}function Ns(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return Object(r["e"])(null!=o,"SyncTree gave us an op for an invalid query."),vs(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(vs(r,t,n,i));return s}}function Ps(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Ui(n,s?i:null),r=!1;e?r=!0:i instanceof fn?(e=Hi(n,i),r=!1):(e=fn.EMPTY_NODE,r=!1);const o=ai(new ti(e,r,!1),new ti(i,s,!1));return new _s(t,o)}return o}function Ss(e,t,n,i,s,r){const o=Ps(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),ms(o,n),Cs(o,n)}function xs(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Fs(e);if("default"===s)for(const[l,c]of e.views.entries())o=o.concat(ys(c,n,i)),gs(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const t=e.views.get(s);t&&(o=o.concat(ys(t,n,i)),gs(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Fs(e)&&r.push(new(Es())(t._repo,t._path)),{removed:r,events:o}}function Rs(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function js(e,t){let n=null;for(const i of e.views.values())n=n||fs(i,t);return n}function Ds(e,t){const n=t._queryParams;if(n.loadsAllData())return As(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ms(e,t){return null!=Ds(e,t)}function Fs(e){return null!=As(e)}function As(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){Object(r["e"])(!Ts,"__referenceConstructor has already been defined"),Ts=e}function qs(){return Object(r["e"])(Ts,"Reference.ts has not been loaded"),Ts}let Ws=1;class Us{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pi(null),this.pendingWriteTree_=Wi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hs(e,t,n,i,s){return Oi(e.pendingWriteTree_,t,n,i,s),s?Zs(e,new Zn(Gn(),t,n)):[]}function zs(e,t,n=!1){const i=Ni(e.pendingWriteTree_,t),s=Pi(e.pendingWriteTree_,t);if(s){let t=new pi(null);return null!=i.snap?t=t.set(ht(),!0):L(i.children,e=>{t=t.set(new ct(e),!0)}),Zs(e,new Xn(i.path,t,n))}return[]}function Ks(e,t,n){return Zs(e,new Zn(Qn(),t,n))}function Ys(e,t,n){const i=pi.fromObject(n);return Zs(e,new ei(Qn(),t,i))}function Vs(e,t){return Zs(e,new Jn(Qn(),t))}function Bs(e,t,n){const i=rr(e,n);if(i){const n=or(i),s=n.path,r=n.queryId,o=Ct(s,t),a=new Jn($n(r),o);return ar(e,s,a)}return[]}function Gs(e,t,n,i){const s=t._path,r=e.syncPointTree_.get(s);let o=[];if(r&&("default"===t._queryIdentifier||Ms(r,t))){const a=xs(r,t,n,i);Os(r)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=a.removed;o=a.events;const c=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),h=e.syncPointTree_.findOnPath(s,(e,t)=>Fs(t));if(c&&!h){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=lr(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=nr(e,i);e.listenProvider_.startListening(cr(s),ir(e,s),r.hashFn,r.onComplete)}}}if(!h&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(cr(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(sr(t));e.listenProvider_.stopListening(cr(t),n)});hr(e,l)}return o}function Qs(e,t,n,i){const s=rr(e,i);if(null!=s){const i=or(s),r=i.path,o=i.queryId,a=Ct(r,t),l=new Zn($n(o),a,n);return ar(e,r,l)}return[]}function $s(e,t,n,i){const s=rr(e,i);if(s){const i=or(s),r=i.path,o=i.queryId,a=Ct(r,t),l=pi.fromObject(n),c=new ei($n(o),a,l);return ar(e,r,c)}return[]}function Xs(e,t,n){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=Ct(e,i);s=s||js(t,n),o=o||Fs(t)});let a,l=e.syncPointTree_.get(i);if(l?(o=o||Fs(l),s=s||js(l,ht())):(l=new Is,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=fn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=js(t,ht());n&&(s=s.updateImmediateChild(e,n))})}const c=Ms(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=sr(t);Object(r["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=ur();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ei(e.pendingWriteTree_,i);let u=Ss(l,t,n,h,s,a);if(!c&&!o){const n=Ds(l,t);u=u.concat(dr(e,t,n))}return u}function Js(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=Ct(e,t),s=js(n,i);if(s)return s});return Di(s,t,r,n,i)}function Zs(e,t){return er(t,e.syncPointTree_,null,Ei(e.pendingWriteTree_,ht()))}function er(e,t,n,i){if(vt(e.path))return tr(e,t,n,i);{const s=t.get(ht());null==n&&null!=s&&(n=js(s,ht()));let r=[];const o=ut(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Bi(i,o);r=r.concat(er(a,l,e,t))}return s&&(r=r.concat(Ns(s,e,i,n))),r}}function tr(e,t,n,i){const s=t.get(ht());null==n&&null!=s&&(n=js(s,ht()));let r=[];return t.children.inorderTraversal((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Bi(i,t),l=e.operationForChild(t);l&&(r=r.concat(tr(l,s,o,a)))}),s&&(r=r.concat(Ns(s,e,i,n))),r}function nr(e,t){const n=t.query,i=ir(e,n);return{hashFn:()=>{const e=ps(t)||fn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?Bs(e,n._path,i):Vs(e,n._path);{const i=H(t,n);return Gs(e,n,null,i)}}}}function ir(e,t){const n=sr(t);return e.queryToTagMap.get(n)}function sr(e){return e._path.toString()+"$"+e._queryIdentifier}function rr(e,t){return e.tagToQueryMap.get(t)}function or(e){const t=e.indexOf("$");return Object(r["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function ar(e,t,n){const i=e.syncPointTree_.get(t);Object(r["e"])(i,"Missing sync point for query tag that we're tracking");const s=Ei(e.pendingWriteTree_,t);return Ns(i,n,s,null)}function lr(e){return e.fold((e,t,n)=>{if(t&&Fs(t)){const e=As(t);return[e]}{let e=[];return t&&(e=Rs(t)),L(n,(t,n)=>{e=e.concat(n)}),e}})}function cr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qs())(e._repo,e._path):e}function hr(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=sr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function ur(){return Ws++}function dr(e,t,n){const i=t._path,s=ir(e,t),o=nr(e,n),a=e.listenProvider_.startListening(cr(t),s,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(s)Object(r["e"])(!Fs(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold((e,t,n)=>{if(!vt(e)&&t&&Fs(t))return[As(t).query];{let e=[];return t&&(e=e.concat(Rs(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(cr(i),ir(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _r(t)}node(){return this.node_}}class pr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new pr(this.syncTree_,t)}node(){return Js(this.syncTree_,this.path_)}}const fr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},gr=function(e,t,n){return e&&"object"===typeof e?(Object(r["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?mr(e[".sv"],t,n):"object"===typeof e[".sv"]?yr(e[".sv"],t):void Object(r["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},mr=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(r["e"])(!1,"Unexpected server value: "+e)}},yr=function(e,t,n){e.hasOwnProperty("increment")||Object(r["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(r["e"])(!1,"Unexpected increment value: "+i);const s=t.node();if(Object(r["e"])(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},vr=function(e,t,n,i){return br(t,new pr(n,e),i)},Cr=function(e,t,n){return br(e,new _r(t),n)};function br(e,t,n){const i=e.getPriority().val(),s=gr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=gr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new nn(r,vn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new nn(s))),i.forEachChild(an,(e,i)=>{const s=br(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Tr(e,t){let n=t instanceof ct?t:new ct(t),i=e,s=ut(n);while(null!==s){const e=Object(r["H"])(i.node.children,s)||{children:{},childCount:0};i=new wr(s,i,e),n=_t(n),s=ut(n)}return i}function Ir(e){return e.node.value}function kr(e,t){e.node.value=t,Rr(e)}function Er(e){return e.node.childCount>0}function Or(e){return void 0===Ir(e)&&!Er(e)}function Nr(e,t){L(e.node.children,(n,i)=>{t(new wr(n,e,i))})}function Pr(e,t,n,i){n&&!i&&t(e),Nr(e,e=>{Pr(e,t,!0,i)}),n&&i&&t(e)}function Sr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function xr(e){return new ct(null===e.parent?e.name:xr(e.parent)+"/"+e.name)}function Rr(e){null!==e.parent&&jr(e.parent,e.name,e)}function jr(e,t,n){const i=Or(n),s=Object(r["k"])(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Rr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Rr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=/[\[\].#$\/\u0000-\u001F\u007F]/,Mr=/[\[\].#$\u0000-\u001F\u007F]/,Fr=10485760,Ar=function(e){return"string"===typeof e&&0!==e.length&&!Dr.test(e)},Lr=function(e){return"string"===typeof e&&0!==e.length&&!Mr.test(e)},qr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Lr(e)},Wr=function(e,t,n){const i=n instanceof ct?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(i));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(i)+" with contents = "+t.toString());if(P(t))throw new Error(e+"contains "+t.toString()+" "+Ot(i));if("string"===typeof t&&t.length>Fr/3&&Object(r["I"])(t)>Fr)throw new Error(e+"contains a string greater than "+Fr+" utf8 bytes "+Ot(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(L(t,(t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Ar(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(i,t),Wr(e,r,i),kt(i)}),n&&s)throw new Error(e+' contains ".value" child '+Ot(i)+" in addition to actual children.")}},Ur=function(e,t,n,i){if((!i||void 0!==n)&&!Lr(n))throw new Error(Object(r["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Hr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ur(e,t,n,i)},zr=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ar(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qr(n))throw new Error(Object(r["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||bt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Vr(e,t,n){Yr(e,n),Gr(e,e=>bt(e,t))}function Br(e,t,n){Yr(e,n),Gr(e,e=>wt(e,t)||wt(t,e))}function Gr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Qr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Qr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();C&&T("event: "+n.toString()),B(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="repo_interrupt",Xr=25;class Jr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new wr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zr(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||G())e.server_=new Fn(e.repoInfo_,(t,n,i,s)=>{no(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>io(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(r["K"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new At(e.repoInfo_,t,(t,n,i,s)=>{no(e,t,n,i,s)},t=>{io(e,t)},t=>{so(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new Vn(e.stats_,e.server_)),e.infoData_=new An,e.infoSyncTree_=new Us({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ks(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening:()=>{}}),ro(e,"connected",!1),e.serverSyncTree_=new Us({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{const r=s(n,i);Br(e.eventQueue_,t._path,r)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function eo(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function to(e){return fr({timestamp:eo(e)})}function no(e,t,n,i,s){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=Object(r["D"])(n,e=>vn(e));a=$s(e.serverSyncTree_,o,t,s)}else{const t=vn(n);a=Qs(e.serverSyncTree_,o,t,s)}else if(i){const t=Object(r["D"])(n,e=>vn(e));a=Ys(e.serverSyncTree_,o,t)}else{const t=vn(n);a=Ks(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=go(e,o)),Br(e.eventQueue_,l,a)}function io(e,t){ro(e,"connected",t),!1===t&&ao(e)}function so(e,t){L(t,(t,n)=>{ro(e,t,n)})}function ro(e,t,n){const i=new ct("/.info/"+t),s=vn(n);e.infoData_.updateSnapshot(i,s);const r=Ks(e.infoSyncTree_,i,s);Br(e.eventQueue_,i,r)}function oo(e){return e.nextWriteId_++}function ao(e){uo(e,"onDisconnectEvents");const t=to(e),n=Ln();Wn(e.onDisconnect_,ht(),(i,s)=>{const r=vr(i,s,e.serverSyncTree_,t);qn(n,i,r)});let i=[];Wn(n,ht(),(t,n)=>{i=i.concat(Ks(e.serverSyncTree_,t,n));const s=wo(e,t);go(e,s)}),e.onDisconnect_=Ln(),Br(e.eventQueue_,ht(),i)}function lo(e,t,n){let i;i=".info"===ut(t._path)?Xs(e.infoSyncTree_,t,n):Xs(e.serverSyncTree_,t,n),Vr(e.eventQueue_,t._path,i)}function co(e,t,n){let i;i=".info"===ut(t._path)?Gs(e.infoSyncTree_,t,n):Gs(e.serverSyncTree_,t,n),Vr(e.eventQueue_,t._path,i)}function ho(e){e.persistentConnection_&&e.persistentConnection_.interrupt($r)}function uo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),T(n,...t)}function _o(e,t,n){return Js(e.serverSyncTree_,t,n)||fn.EMPTY_NODE}function po(e,t=e.transactionQueueTree_){if(t||bo(e,t),Ir(t)){const n=vo(e,t);Object(r["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&fo(e,xr(t),n)}else Er(t)&&Nr(t,t=>{po(e,t)})}function fo(e,t,n){const i=n.map(e=>e.currentWriteId),s=_o(e,t,i);let o=s;const a=s.hash();for(let h=0;h<n.length;h++){const e=n[h];Object(r["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Ct(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,i=>{uo(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(zs(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();bo(e,Tr(e.transactionQueueTree_,t)),po(e,e.transactionQueueTree_),Br(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)B(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{O("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}go(e,t)}},a)}function go(e,t){const n=yo(e,t),i=xr(n),s=vo(e,n);return mo(e,s,i),i}function mo(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){const o=t[l],c=Ct(n,o.path);let h,u=!1;if(Object(r["e"])(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,s=s.concat(zs(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Xr)u=!0,h="maxretry",s=s.concat(zs(e.serverSyncTree_,o.currentWriteId,!0));else{const n=_o(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){Wr("transaction failed: Data returned ",i,o.path);let t=vn(i);const l="object"===typeof i&&null!=i&&Object(r["k"])(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,h=to(e),u=Cr(t,n,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=oo(e),a.splice(a.indexOf(c),1),s=s.concat(Hs(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),s=s.concat(zs(e.serverSyncTree_,c,!0))}else u=!0,h="nodata",s=s.concat(zs(e.serverSyncTree_,o.currentWriteId,!0))}Br(e.eventQueue_,n,s),s=[],u&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===h?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(h),!1,null))))}bo(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)B(i[r]);po(e,e.transactionQueueTree_)}function yo(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Ir(i))i=Tr(i,n),t=_t(t),n=ut(t);return i}function vo(e,t){const n=[];return Co(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Co(e,t,n){const i=Ir(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Nr(t,t=>{Co(e,t,n)})}function bo(e,t){const n=Ir(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,kr(t,n.length>0?n:void 0)}Nr(t,t=>{bo(e,t)})}function wo(e,t){const n=xr(yo(e,t)),i=Tr(e.transactionQueueTree_,t);return Sr(i,t=>{To(e,t)}),To(e,i),Pr(i,t=>{To(e,t)}),n}function To(e,t){const n=Ir(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(r["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(r["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(zs(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?kr(t,void 0):n.length=o+1,Br(e.eventQueue_,xr(t),s);for(let e=0;e<i.length;e++)B(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function ko(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):O(`Invalid query segment '${n}' in query '${e}'`)}return t}const Eo=function(e,t){const n=Oo(e),i=n.namespace;"firebase.com"===n.domain&&E(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||E("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ct(n.pathString)}},Oo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=Io(e.substring(h,u)));const d=ko(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const _=t.slice(0,c);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(r["K"])(this.snapshot.exportVal())}}class Po{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(r["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:pt(this._path)}get ref(){return new Ro(this._repo,this._path)}get _queryIdentifier(){const e=Mn(this._queryParams),t=F(e);return"{}"===t?"default":t}get _queryObject(){return Mn(this._queryParams)}isEqual(e){if(e=Object(r["r"])(e),!(e instanceof xo))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ft(this._path)}}class Ro extends xo{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Ro(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class jo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Mo(this.ref,e);return new jo(this._node.getChild(t),n,an)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new jo(n,Mo(this.ref,t),an)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Do(e,t){return e=Object(r["r"])(e),e._checkNotDeleted("ref"),void 0!==t?Mo(e._root,t):e._root}function Mo(e,t){return e=Object(r["r"])(e),null===ut(e._path)?Hr("child","path",t,!1):Ur("child","path",t,!1),new Ro(e._repo,yt(e._path,t))}class Fo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new No("value",this,new jo(e.snapshotNode,new Ro(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Po(this,e,t):null}matches(e){return e instanceof Fo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ao{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Po(this,e,t):null}createEvent(e,t){Object(r["e"])(null!=e.childName,"Child events should have a childName.");const n=Mo(new Ro(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new No(e.type,this,new jo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ao&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Lo(e,t,n,i,s){let r;if("object"===typeof i&&(r=void 0,s=i),"function"===typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{co(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new So(n,r||void 0),a="value"===t?new Fo(o):new Ao(t,o);return lo(e._repo,e,a),()=>co(e._repo,e,a)}function qo(e,t,n,i){return Lo(e,"value",t,n,i)}ks(Ro),Ls(Ro);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wo="FIREBASE_DATABASE_EMULATOR_HOST",Uo={};let Ho=!1;function zo(t,n,i,s,r){let o=s||t.options.databaseURL;void 0===o&&(t.options.projectId||E("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),T("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,l=Eo(o,r),c=l.repoInfo,h=void 0;"undefined"!==typeof e&&Object({NODE_ENV:"production",BASE_URL:"/"})&&(h=Object({NODE_ENV:"production",BASE_URL:"/"})[Wo]),h?(a=!0,o=`http://${h}?ns=${c.namespace}`,l=Eo(o,r),c=l.repoInfo):a=!l.repoInfo.secure;const u=r&&a?new J(J.OWNER):new X(t.name,t.options,n);zr("Invalid Firebase Database URL",l),vt(l.path)||E("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Yo(c,t,u,new $(t.name,i));return new Vo(d,t)}function Ko(e,t){const n=Uo[t];n&&n[e.key]===e||E(`Database ${t}(${e.repoInfo_}) has already been deleted.`),ho(e),delete n[e.key]}function Yo(e,t,n,i){let s=Uo[t.name];s||(s={},Uo[t.name]=s);let r=s[e.toURLString()];return r&&E("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Jr(e,Ho,n,i),s[e.toURLString()]=r,r}class Vo{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ro(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ko(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&E("Cannot call "+e+" on a deleted database.")}}function Bo(e=Object(i["d"])(),t){return Object(i["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Go(e){h(i["a"]),Object(i["c"])(new s["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return zo(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,l,e),Object(i["f"])(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},At.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Go()}).call(this,n("4362"))},"51d2":function(e,t,n){},a507:function(e,t,n){"use strict";n("51d2")},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var s=e[i];"."===s?e.splice(i,1):".."===s?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,s=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!s){n=t+1;break}}else-1===i&&(s=!1,i=t+1);return-1===i?"":e.slice(n,i)}function s(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,r=arguments.length-1;r>=-1&&!i;r--){var o=r>=0?arguments[r]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(s(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===r(e,-1);return e=n(s(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(s(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var s=i(e.split("/")),r=i(n.split("/")),o=Math.min(s.length,r.length),a=o,l=0;l<o;l++)if(s[l]!==r[l]){a=l;break}var c=[];for(l=a;l<s.length;l++)c.push("..");return c=c.concat(r.slice(a)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,s=!0,r=e.length-1;r>=1;--r)if(t=e.charCodeAt(r),47===t){if(!s){i=r;break}}else s=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,s=!0,r=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(s=!1,i=o+1),46===a?-1===t?t=o:1!==r&&(r=1):-1!==t&&(r=-1);else if(!s){n=o+1;break}}return-1===t||-1===i||0===r||1===r&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))}}]);
//# sourceMappingURL=chunk-240ea5ec.7a1e4ffc.js.map