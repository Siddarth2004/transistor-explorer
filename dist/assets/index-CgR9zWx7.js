(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var kp={exports:{}},hl={},zp={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To=Symbol.for("react.element"),F_=Symbol.for("react.portal"),O_=Symbol.for("react.fragment"),k_=Symbol.for("react.strict_mode"),z_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),V_=Symbol.for("react.suspense"),W_=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),Jf=Symbol.iterator;function X_(t){return t===null||typeof t!="object"?null:(t=Jf&&t[Jf]||t["@@iterator"],typeof t=="function"?t:null)}var Bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,Gp={};function ws(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vp(){}Vp.prototype=ws.prototype;function Yu(t,e,n){this.props=t,this.context=e,this.refs=Gp,this.updater=n||Bp}var qu=Yu.prototype=new Vp;qu.constructor=Yu;Hp(qu,ws.prototype);qu.isPureReactComponent=!0;var ed=Array.isArray,Wp=Object.prototype.hasOwnProperty,$u={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wp.call(e,i)&&!jp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:To,type:t,key:s,ref:o,props:r,_owner:$u.current}}function Y_(t,e){return{$$typeof:To,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ku(t){return typeof t=="object"&&t!==null&&t.$$typeof===To}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var td=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function Ta(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case To:case F_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ol(o,0):i,ed(r)?(n="",t!=null&&(n=t.replace(td,"$&/")+"/"),Ta(r,e,n,"",function(c){return c})):r!=null&&(Ku(r)&&(r=Y_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(td,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ed(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ol(s,a);o+=Ta(s,e,n,l,r)}else if(l=X_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ol(s,a++),o+=Ta(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fo(t,e,n){if(t==null)return t;var i=[],r=0;return Ta(t,i,"","",function(s){return e.call(n,s,r++)}),i}function $_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},wa={transition:null},K_={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:wa,ReactCurrentOwner:$u};function Yp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!Ku(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ws;Ge.Fragment=O_;Ge.Profiler=z_;Ge.PureComponent=Yu;Ge.StrictMode=k_;Ge.Suspense=V_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K_;Ge.act=Yp;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=$u.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wp.call(e,l)&&!jp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:To,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};Ge.createElement=Xp;Ge.createFactory=function(t){var e=Xp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:G_,render:t}};Ge.isValidElement=Ku;Ge.lazy=function(t){return{$$typeof:j_,_payload:{_status:-1,_result:t},_init:$_}};Ge.memo=function(t,e){return{$$typeof:W_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};Ge.unstable_act=Yp;Ge.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ge.useContext=function(t){return Yt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ge.useId=function(){return Yt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Yt.current.useRef(t)};Ge.useState=function(t){return Yt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Yt.current.useTransition()};Ge.version="18.3.1";zp.exports=Ge;var lt=zp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=lt,Q_=Symbol.for("react.element"),J_=Symbol.for("react.fragment"),ev=Object.prototype.hasOwnProperty,tv=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nv={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ev.call(e,i)&&!nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Q_,type:t,key:s,ref:o,props:r,_owner:tv.current}}hl.Fragment=J_;hl.jsx=qp;hl.jsxs=qp;kp.exports=hl;var T=kp.exports,$p={exports:{}},hn={},Kp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var V=D.length;D.push(O);e:for(;0<V;){var K=V-1>>>1,se=D[K];if(0<r(se,O))D[K]=O,D[V]=se,V=K;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],V=D.pop();if(V!==O){D[0]=V;e:for(var K=0,se=D.length,we=se>>>1;K<we;){var H=2*(K+1)-1,Q=D[H],ce=H+1,Se=D[ce];if(0>r(Q,V))ce<se&&0>r(Se,Q)?(D[K]=Se,D[ce]=V,K=ce):(D[K]=Q,D[H]=V,K=H);else if(ce<se&&0>r(Se,V))D[K]=Se,D[ce]=V,K=ce;else break e}}return O}function r(D,O){var V=D.sortIndex-O.sortIndex;return V!==0?V:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,v=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=D)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function M(D){if(y=!1,g(D),!v)if(n(l)!==null)v=!0,X(b);else{var O=n(c);O!==null&&$(M,O.startTime-D)}}function b(D,O){v=!1,y&&(y=!1,u(P),P=-1),m=!0;var V=d;try{for(g(O),h=n(l);h!==null&&(!(h.expirationTime>O)||D&&!C());){var K=h.callback;if(typeof K=="function"){h.callback=null,d=h.priorityLevel;var se=K(h.expirationTime<=O);O=t.unstable_now(),typeof se=="function"?h.callback=se:h===n(l)&&i(l),g(O)}else i(l);h=n(l)}if(h!==null)var we=!0;else{var H=n(c);H!==null&&$(M,H.startTime-O),we=!1}return we}finally{h=null,d=V,m=!1}}var R=!1,w=null,P=-1,j=5,x=-1;function C(){return!(t.unstable_now()-x<j)}function te(){if(w!==null){var D=t.unstable_now();x=D;var O=!0;try{O=w(!0,D)}finally{O?Z():(R=!1,w=null)}}else R=!1}var Z;if(typeof _=="function")Z=function(){_(te)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Y=L.port2;L.port1.onmessage=te,Z=function(){Y.postMessage(null)}}else Z=function(){p(te,0)};function X(D){w=D,R||(R=!0,Z())}function $(D,O){P=p(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,X(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var V=d;d=O;try{return D()}finally{d=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=d;d=D;try{return O()}finally{d=V}},t.unstable_scheduleCallback=function(D,O,V){var K=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?K+V:K):V=K,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,D={id:f++,callback:O,priorityLevel:D,startTime:V,expirationTime:se,sortIndex:-1},V>K?(D.sortIndex=V,e(c,D),n(l)===null&&D===n(c)&&(y?(u(P),P=-1):y=!0,$(M,V-K))):(D.sortIndex=se,e(l,D),v||m||(v=!0,X(b))),D},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(D){var O=d;return function(){var V=d;d=O;try{return D.apply(this,arguments)}finally{d=V}}}})(Zp);Kp.exports=Zp;var iv=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=lt,dn=iv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,so={};function Ar(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(so[t]=e,t=0;t<e.length;t++)Qp.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=Object.prototype.hasOwnProperty,sv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},id={};function ov(t){return Wc.call(id,t)?!0:Wc.call(nd,t)?!1:sv.test(t)?id[t]=!0:(nd[t]=!0,!1)}function av(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lv(t,e,n,i){if(e===null||typeof e>"u"||av(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function Qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zu,Qu);Nt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zu,Qu);Nt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zu,Qu);Nt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ju(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lv(e,n,r,i)&&(n=null),i||r===null?ov(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),jr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),jc=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),rd=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=rd&&t[rd]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,kl;function Xs(t){if(kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kl=e&&e[1]||""}return`
`+kl+t}var zl=!1;function Bl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xs(t):""}function cv(t){switch(t.tag){case 5:return Xs(t.type);case 16:return Xs("Lazy");case 13:return Xs("Suspense");case 19:return Xs("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case jr:return"Portal";case jc:return"Profiler";case ef:return"StrictMode";case Xc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case em:return(t.displayName||"Context")+".Consumer";case Jp:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:qc(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return qc(t(e))}catch{}}return null}function uv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fv(t){var e=nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){t._valueTracker||(t._valueTracker=fv(t))}function im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=nm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $c(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rm(t,e){e=e.checked,e!=null&&Ju(t,"checked",e,!1)}function Kc(t,e){rm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zc(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ad(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Ys(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function sm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ld(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function om(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?om(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zo,am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dv=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(t){dv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ks[e]=Ks[t]})});function lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ks.hasOwnProperty(t)&&Ks[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hv=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eu(t,e){if(e){if(hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nu=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var iu=null,as=null,ls=null;function cd(t){if(t=Ro(t)){if(typeof iu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=vl(e),iu(t.stateNode,t.type,e))}}function um(t){as?ls?ls.push(t):ls=[t]:as=t}function fm(){if(as){var t=as,e=ls;if(ls=as=null,cd(t),e)for(t=0;t<e.length;t++)cd(e[t])}}function dm(t,e){return t(e)}function hm(){}var Hl=!1;function pm(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return dm(t,e,n)}finally{Hl=!1,(as!==null||ls!==null)&&(hm(),fm())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var i=vl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var ru=!1;if(di)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{ru=!1}function pv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Zs=!1,ka=null,za=!1,su=null,mv={onError:function(t){Zs=!0,ka=t}};function gv(t,e,n,i,r,s,o,a,l){Zs=!1,ka=null,pv.apply(mv,arguments)}function _v(t,e,n,i,r,s,o,a,l){if(gv.apply(this,arguments),Zs){if(Zs){var c=ka;Zs=!1,ka=null}else throw Error(ee(198));za||(za=!0,su=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ud(t){if(Rr(t)!==t)throw Error(ee(188))}function vv(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ud(r),t;if(s===i)return ud(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function gm(t){return t=vv(t),t!==null?_m(t):null}function _m(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_m(t);if(e!==null)return e;t=t.sibling}return null}var vm=dn.unstable_scheduleCallback,fd=dn.unstable_cancelCallback,xv=dn.unstable_shouldYield,yv=dn.unstable_requestPaint,mt=dn.unstable_now,Sv=dn.unstable_getCurrentPriorityLevel,sf=dn.unstable_ImmediatePriority,xm=dn.unstable_UserBlockingPriority,Ba=dn.unstable_NormalPriority,Mv=dn.unstable_LowPriority,ym=dn.unstable_IdlePriority,pl=null,Yn=null;function Ev(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Av,Tv=Math.log,wv=Math.LN2;function Av(t){return t>>>=0,t===0?32:31-(Tv(t)/wv|0)|0}var Bo=64,Ho=4194304;function qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qs(a):(s&=o,s!==0&&(i=qs(s)))}else o=n&~r,o!==0?i=qs(o):s!==0&&(i=qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-In(e),r=1<<n,i|=t[n],e&=~r;return i}function Rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Rv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Sm(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-In(e),t[e]=n}function bv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-In(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Em,af,Tm,wm,Am,au=!1,Go=[],Ni=null,Ui=null,Ii=null,lo=new Map,co=new Map,Ri=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dd(t,e){switch(t){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ro(e),e!==null&&af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Lv(t,e,n,i,r){switch(e){case"focusin":return Ni=Us(Ni,t,e,n,i,r),!0;case"dragenter":return Ui=Us(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Us(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return lo.set(s,Us(lo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,co.set(s,Us(co.get(s)||null,t,e,n,i,r)),!0}return!1}function Rm(t){var e=dr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=mm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){Tm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nu=i,n.target.dispatchEvent(i),nu=null}else return e=Ro(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function hd(t,e,n){Aa(t)&&n.delete(e)}function Dv(){au=!1,Ni!==null&&Aa(Ni)&&(Ni=null),Ui!==null&&Aa(Ui)&&(Ui=null),Ii!==null&&Aa(Ii)&&(Ii=null),lo.forEach(hd),co.forEach(hd)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,au||(au=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Dv)))}function uo(t){function e(r){return Is(r,t)}if(0<Go.length){Is(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ni!==null&&Is(Ni,t),Ui!==null&&Is(Ui,t),Ii!==null&&Is(Ii,t),lo.forEach(e),co.forEach(e),n=0;n<Ri.length;n++)i=Ri[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)Rm(n),n.blockedOn===null&&Ri.shift()}var cs=_i.ReactCurrentBatchConfig,Ga=!0;function Nv(t,e,n,i){var r=Ke,s=cs.transition;cs.transition=null;try{Ke=1,lf(t,e,n,i)}finally{Ke=r,cs.transition=s}}function Uv(t,e,n,i){var r=Ke,s=cs.transition;cs.transition=null;try{Ke=4,lf(t,e,n,i)}finally{Ke=r,cs.transition=s}}function lf(t,e,n,i){if(Ga){var r=lu(t,e,n,i);if(r===null)Ql(t,e,i,Va,n),dd(t,i);else if(Lv(r,t,e,n,i))i.stopPropagation();else if(dd(t,i),e&4&&-1<Pv.indexOf(t)){for(;r!==null;){var s=Ro(r);if(s!==null&&Em(s),s=lu(t,e,n,i),s===null&&Ql(t,e,i,Va,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ql(t,e,i,null,n)}}var Va=null;function lu(t,e,n,i){if(Va=null,t=rf(i),t=dr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function Cm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sv()){case sf:return 1;case xm:return 4;case Ba:case Mv:return 16;case ym:return 536870912;default:return 16}default:return 16}}var Pi=null,cf=null,Ra=null;function bm(){if(Ra)return Ra;var t,e=cf,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function pd(){return!1}function pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:pd,this.isPropagationStopped=pd,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=pn(As),Ao=ft({},As,{view:0,detail:0}),Iv=pn(Ao),Vl,Wl,Fs,ml=ft({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Vl=t.screenX-Fs.screenX,Wl=t.screenY-Fs.screenY):Wl=Vl=0,Fs=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),md=pn(ml),Fv=ft({},ml,{dataTransfer:0}),Ov=pn(Fv),kv=ft({},Ao,{relatedTarget:0}),jl=pn(kv),zv=ft({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=pn(zv),Hv=ft({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gv=pn(Hv),Vv=ft({},As,{data:0}),gd=pn(Vv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xv[t])?!!e[t]:!1}function ff(){return Yv}var qv=ft({},Ao,{key:function(t){if(t.key){var e=Wv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=pn(qv),Kv=ft({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=pn(Kv),Zv=ft({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),Qv=pn(Zv),Jv=ft({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=pn(Jv),t0=ft({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=pn(t0),i0=[9,13,27,32],df=di&&"CompositionEvent"in window,Qs=null;di&&"documentMode"in document&&(Qs=document.documentMode);var r0=di&&"TextEvent"in window&&!Qs,Pm=di&&(!df||Qs&&8<Qs&&11>=Qs),vd=" ",xd=!1;function Lm(t,e){switch(t){case"keyup":return i0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function s0(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(xd=!0,vd);case"textInput":return t=e.data,t===vd&&xd?null:t;default:return null}}function o0(t,e){if(Yr)return t==="compositionend"||!df&&Lm(t,e)?(t=bm(),Ra=cf=Pi=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pm&&e.locale!=="ko"?null:e.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a0[t.type]:e==="textarea"}function Nm(t,e,n,i){um(i),e=Wa(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Js=null,fo=null;function l0(t){Wm(t,0)}function gl(t){var e=Kr(t);if(im(e))return t}function c0(t,e){if(t==="change")return e}var Um=!1;if(di){var Xl;if(di){var Yl="oninput"in document;if(!Yl){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Yl=typeof Sd.oninput=="function"}Xl=Yl}else Xl=!1;Um=Xl&&(!document.documentMode||9<document.documentMode)}function Md(){Js&&(Js.detachEvent("onpropertychange",Im),fo=Js=null)}function Im(t){if(t.propertyName==="value"&&gl(fo)){var e=[];Nm(e,fo,t,rf(t)),pm(l0,e)}}function u0(t,e,n){t==="focusin"?(Md(),Js=e,fo=n,Js.attachEvent("onpropertychange",Im)):t==="focusout"&&Md()}function f0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(fo)}function d0(t,e){if(t==="click")return gl(e)}function h0(t,e){if(t==="input"||t==="change")return gl(e)}function p0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:p0;function ho(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wc.call(e,r)||!On(t[r],e[r]))return!1}return!0}function Ed(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Td(t,e){var n=Ed(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ed(n)}}function Fm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Om(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m0(t){var e=Om(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fm(n.ownerDocument.documentElement,n)){if(i!==null&&hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Td(n,s);var o=Td(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g0=di&&"documentMode"in document&&11>=document.documentMode,qr=null,cu=null,eo=null,uu=!1;function wd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uu||qr==null||qr!==Oa(i)||(i=qr,"selectionStart"in i&&hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),eo&&ho(eo,i)||(eo=i,i=Wa(cu,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $r={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},ql={},km={};di&&(km=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function _l(t){if(ql[t])return ql[t];if(!$r[t])return t;var e=$r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in km)return ql[t]=e[n];return t}var zm=_l("animationend"),Bm=_l("animationiteration"),Hm=_l("animationstart"),Gm=_l("transitionend"),Vm=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qi(t,e){Vm.set(t,e),Ar(e,[t])}for(var $l=0;$l<Ad.length;$l++){var Kl=Ad[$l],_0=Kl.toLowerCase(),v0=Kl[0].toUpperCase()+Kl.slice(1);qi(_0,"on"+v0)}qi(zm,"onAnimationEnd");qi(Bm,"onAnimationIteration");qi(Hm,"onAnimationStart");qi("dblclick","onDoubleClick");qi("focusin","onFocus");qi("focusout","onBlur");qi(Gm,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Rd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_v(i,e,void 0,t),t.currentTarget=null}function Wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rd(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rd(r,a,c),s=l}}}if(za)throw t=su,za=!1,su=null,t}function tt(t,e){var n=e[mu];n===void 0&&(n=e[mu]=new Set);var i=t+"__bubble";n.has(i)||(jm(e,t,2,!1),n.add(i))}function Zl(t,e,n){var i=0;e&&(i|=4),jm(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function po(t){if(!t[jo]){t[jo]=!0,Qp.forEach(function(n){n!=="selectionchange"&&(x0.has(n)||Zl(n,!1,t),Zl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,Zl("selectionchange",!1,e))}}function jm(t,e,n,i){switch(Cm(e)){case 1:var r=Nv;break;case 4:r=Uv;break;default:r=lf}n=r.bind(null,e,n,t),r=void 0,!ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ql(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}pm(function(){var c=s,f=rf(n),h=[];e:{var d=Vm.get(t);if(d!==void 0){var m=uf,v=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":m=$v;break;case"focusin":v="focus",m=jl;break;case"focusout":v="blur",m=jl;break;case"beforeblur":case"afterblur":m=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Qv;break;case zm:case Bm:case Hm:m=Bv;break;case Gm:m=e0;break;case"scroll":m=Iv;break;case"wheel":m=n0;break;case"copy":case"cut":case"paste":m=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_d}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ao(_,u),M!=null&&y.push(mo(_,M,g)))),p)break;_=_.return}0<y.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==nu&&(v=n.relatedTarget||n.fromElement)&&(dr(v)||v[hi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?dr(v):null,v!==null&&(p=Rr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=md,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=_d,M="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?d:Kr(m),g=v==null?d:Kr(v),d=new y(M,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,M=null,dr(f)===c&&(y=new y(u,_+"enter",v,n,f),y.target=g,y.relatedTarget=p,M=y),p=M,m&&v)t:{for(y=m,u=v,_=0,g=y;g;g=Cr(g))_++;for(g=0,M=u;M;M=Cr(M))g++;for(;0<_-g;)y=Cr(y),_--;for(;0<g-_;)u=Cr(u),g--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Cr(y),u=Cr(u)}y=null}else y=null;m!==null&&Cd(h,d,m,y,!1),v!==null&&p!==null&&Cd(h,p,v,y,!0)}}e:{if(d=c?Kr(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=c0;else if(yd(d))if(Um)b=h0;else{b=f0;var R=u0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=d0);if(b&&(b=b(t,c))){Nm(h,b,n,f);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Zc(d,"number",d.value)}switch(R=c?Kr(c):window,t){case"focusin":(yd(R)||R.contentEditable==="true")&&(qr=R,cu=c,eo=null);break;case"focusout":eo=cu=qr=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,wd(h,n,f);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":wd(h,n,f)}var w;if(df)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Yr?Lm(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Pm&&n.locale!=="ko"&&(Yr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Yr&&(w=bm()):(Pi=f,cf="value"in Pi?Pi.value:Pi.textContent,Yr=!0)),R=Wa(c,P),0<R.length&&(P=new gd(P,t,null,n,f),h.push({event:P,listeners:R}),w?P.data=w:(w=Dm(n),w!==null&&(P.data=w)))),(w=r0?s0(t,n):o0(t,n))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(f=new gd("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}Wm(h,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ao(t,n),s!=null&&i.unshift(mo(t,s,r)),s=ao(t,e),s!=null&&i.push(mo(t,s,r))),t=t.return}return i}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ao(n,s),l!=null&&o.unshift(mo(n,l,a))):r||(l=ao(n,s),l!=null&&o.push(mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var y0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(y0,`
`).replace(S0,"")}function Xo(t,e,n){if(e=bd(e),bd(t)!==e&&n)throw Error(ee(425))}function ja(){}var fu=null,du=null;function hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,E0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(t){return Pd.resolve(null).then(t).catch(T0)}:pu;function T0(t){setTimeout(function(){throw t})}function Jl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),uo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);uo(e)}function Fi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ld(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),jn="__reactFiber$"+Rs,go="__reactProps$"+Rs,hi="__reactContainer$"+Rs,mu="__reactEvents$"+Rs,w0="__reactListeners$"+Rs,A0="__reactHandles$"+Rs;function dr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ld(t);t!==null;){if(n=t[jn])return n;t=Ld(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[jn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function vl(t){return t[go]||null}var gu=[],Zr=-1;function $i(t){return{current:t}}function it(t){0>Zr||(t.current=gu[Zr],gu[Zr]=null,Zr--)}function et(t,e){Zr++,gu[Zr]=t.current,t.current=e}var ji={},Bt=$i(ji),en=$i(!1),yr=ji;function ms(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Xa(){it(en),it(Bt)}function Dd(t,e,n){if(Bt.current!==ji)throw Error(ee(168));et(Bt,e),et(en,n)}function Xm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,uv(t)||"Unknown",r));return ft({},n,i)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,yr=Bt.current,et(Bt,t),et(en,en.current),!0}function Nd(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Xm(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,it(en),it(Bt),et(Bt,t)):it(en),et(en,n)}var ii=null,xl=!1,ec=!1;function Ym(t){ii===null?ii=[t]:ii.push(t)}function R0(t){xl=!0,Ym(t)}function Ki(){if(!ec&&ii!==null){ec=!0;var t=0,e=Ke;try{var n=ii;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ii=null,xl=!1}catch(r){throw ii!==null&&(ii=ii.slice(t+1)),vm(sf,Ki),r}finally{Ke=e,ec=!1}}return null}var Qr=[],Jr=0,qa=null,$a=0,vn=[],xn=0,Sr=null,oi=1,ai="";function or(t,e){Qr[Jr++]=$a,Qr[Jr++]=qa,qa=t,$a=e}function qm(t,e,n){vn[xn++]=oi,vn[xn++]=ai,vn[xn++]=Sr,Sr=t;var i=oi;t=ai;var r=32-In(i)-1;i&=~(1<<r),n+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,oi=1<<32-In(e)+r|n<<r|i,ai=s+t}else oi=1<<s|n<<r|i,ai=t}function pf(t){t.return!==null&&(or(t,1),qm(t,1,0))}function mf(t){for(;t===qa;)qa=Qr[--Jr],Qr[Jr]=null,$a=Qr[--Jr],Qr[Jr]=null;for(;t===Sr;)Sr=vn[--xn],vn[xn]=null,ai=vn[--xn],vn[xn]=null,oi=vn[--xn],vn[xn]=null}var fn=null,un=null,ot=!1,Dn=null;function $m(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ud(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,un=Fi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:oi,overflow:ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,un=null,!0):!1;default:return!1}}function _u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vu(t){if(ot){var e=un;if(e){var n=e;if(!Ud(t,e)){if(_u(t))throw Error(ee(418));e=Fi(n.nextSibling);var i=fn;e&&Ud(t,e)?$m(i,n):(t.flags=t.flags&-4097|2,ot=!1,fn=t)}}else{if(_u(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ot=!1,fn=t}}}function Id(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Yo(t){if(t!==fn)return!1;if(!ot)return Id(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hu(t.type,t.memoizedProps)),e&&(e=un)){if(_u(t))throw Km(),Error(ee(418));for(;e;)$m(t,e),e=Fi(e.nextSibling)}if(Id(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Fi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=fn?Fi(t.stateNode.nextSibling):null;return!0}function Km(){for(var t=un;t;)t=Fi(t.nextSibling)}function gs(){un=fn=null,ot=!1}function gf(t){Dn===null?Dn=[t]:Dn.push(t)}var C0=_i.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fd(t){var e=t._init;return e(t._payload)}function Zm(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Bi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,M){return _===null||_.tag!==6?(_=ac(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var b=g.type;return b===Xr?f(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wi&&Fd(b)===_.type)?(M=r(_,g.props),M.ref=Os(u,_,g),M.return=u,M):(M=Ia(g.type,g.key,g.props,null,u.mode,M),M.ref=Os(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=lc(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,M,b){return _===null||_.tag!==7?(_=_r(g,u.mode,M,b),_.return=u,_):(_=r(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ac(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:return g=Ia(_.type,_.key,_.props,null,u.mode,g),g.ref=Os(u,null,_),g.return=u,g;case jr:return _=lc(_,u.mode,g),_.return=u,_;case wi:var M=_._init;return h(u,M(_._payload),g)}if(Ys(_)||Ds(_))return _=_r(_,u.mode,g,null),_.return=u,_;qo(u,_)}return null}function d(u,_,g,M){var b=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return g.key===b?l(u,_,g,M):null;case jr:return g.key===b?c(u,_,g,M):null;case wi:return b=g._init,d(u,_,b(g._payload),M)}if(Ys(g)||Ds(g))return b!==null?null:f(u,_,g,M,null);qo(u,g)}return null}function m(u,_,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(_,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Oo:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,b);case jr:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,b);case wi:var R=M._init;return m(u,_,g,R(M._payload),b)}if(Ys(M)||Ds(M))return u=u.get(g)||null,f(_,u,M,b,null);qo(_,M)}return null}function v(u,_,g,M){for(var b=null,R=null,w=_,P=_=0,j=null;w!==null&&P<g.length;P++){w.index>P?(j=w,w=null):j=w.sibling;var x=d(u,w,g[P],M);if(x===null){w===null&&(w=j);break}t&&w&&x.alternate===null&&e(u,w),_=s(x,_,P),R===null?b=x:R.sibling=x,R=x,w=j}if(P===g.length)return n(u,w),ot&&or(u,P),b;if(w===null){for(;P<g.length;P++)w=h(u,g[P],M),w!==null&&(_=s(w,_,P),R===null?b=w:R.sibling=w,R=w);return ot&&or(u,P),b}for(w=i(u,w);P<g.length;P++)j=m(w,u,P,g[P],M),j!==null&&(t&&j.alternate!==null&&w.delete(j.key===null?P:j.key),_=s(j,_,P),R===null?b=j:R.sibling=j,R=j);return t&&w.forEach(function(C){return e(u,C)}),ot&&or(u,P),b}function y(u,_,g,M){var b=Ds(g);if(typeof b!="function")throw Error(ee(150));if(g=b.call(g),g==null)throw Error(ee(151));for(var R=b=null,w=_,P=_=0,j=null,x=g.next();w!==null&&!x.done;P++,x=g.next()){w.index>P?(j=w,w=null):j=w.sibling;var C=d(u,w,x.value,M);if(C===null){w===null&&(w=j);break}t&&w&&C.alternate===null&&e(u,w),_=s(C,_,P),R===null?b=C:R.sibling=C,R=C,w=j}if(x.done)return n(u,w),ot&&or(u,P),b;if(w===null){for(;!x.done;P++,x=g.next())x=h(u,x.value,M),x!==null&&(_=s(x,_,P),R===null?b=x:R.sibling=x,R=x);return ot&&or(u,P),b}for(w=i(u,w);!x.done;P++,x=g.next())x=m(w,u,P,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),_=s(x,_,P),R===null?b=x:R.sibling=x,R=x);return t&&w.forEach(function(te){return e(u,te)}),ot&&or(u,P),b}function p(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Xr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:e:{for(var b=g.key,R=_;R!==null;){if(R.key===b){if(b=g.type,b===Xr){if(R.tag===7){n(u,R.sibling),_=r(R,g.props.children),_.return=u,u=_;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wi&&Fd(b)===R.type){n(u,R.sibling),_=r(R,g.props),_.ref=Os(u,R,g),_.return=u,u=_;break e}n(u,R);break}else e(u,R);R=R.sibling}g.type===Xr?(_=_r(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=Ia(g.type,g.key,g.props,null,u.mode,M),M.ref=Os(u,_,g),M.return=u,u=M)}return o(u);case jr:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=lc(g,u.mode,M),_.return=u,u=_}return o(u);case wi:return R=g._init,p(u,_,R(g._payload),M)}if(Ys(g))return v(u,_,g,M);if(Ds(g))return y(u,_,g,M);qo(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=ac(g,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return p}var _s=Zm(!0),Qm=Zm(!1),Ka=$i(null),Za=null,es=null,_f=null;function vf(){_f=es=Za=null}function xf(t){var e=Ka.current;it(Ka),t._currentValue=e}function xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Za=t,_f=es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},es===null){if(Za===null)throw Error(ee(308));es=t,Za.dependencies={lanes:0,firstContext:t}}else es=es.next=t;return e}var hr=null;function yf(t){hr===null?hr=[t]:hr.push(t)}function Jm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ui(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Oi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function Od(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qa(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=ft({},h,d);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=h}}function kd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Co={},qn=$i(Co),_o=$i(Co),vo=$i(Co);function pr(t){if(t===Co)throw Error(ee(174));return t}function Mf(t,e){switch(et(vo,e),et(_o,t),et(qn,Co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jc(e,t)}it(qn),et(qn,e)}function vs(){it(qn),it(_o),it(vo)}function tg(t){pr(vo.current);var e=pr(qn.current),n=Jc(e,t.type);e!==n&&(et(_o,t),et(qn,n))}function Ef(t){_o.current===t&&(it(qn),it(_o))}var ct=$i(0);function Ja(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function Tf(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var Pa=_i.ReactCurrentDispatcher,nc=_i.ReactCurrentBatchConfig,Mr=0,ut=null,yt=null,At=null,el=!1,to=!1,xo=0,b0=0;function It(){throw Error(ee(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Af(t,e,n,i,r,s){if(Mr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?N0:U0,t=n(i,r),to){s=0;do{if(to=!1,xo=0,25<=s)throw Error(ee(301));s+=1,At=yt=null,e.updateQueue=null,Pa.current=I0,t=n(i,r)}while(to)}if(Pa.current=tl,e=yt!==null&&yt.next!==null,Mr=0,At=yt=ut=null,el=!1,e)throw Error(ee(300));return t}function Rf(){var t=xo!==0;return xo=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ut.memoizedState=At=t:At=At.next=t,At}function wn(){if(yt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=At===null?ut.memoizedState:At.next;if(e!==null)At=e,yt=t;else{if(t===null)throw Error(ee(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},At===null?ut.memoizedState=At=t:At=At.next=t}return At}function yo(t,e){return typeof e=="function"?e(t):e}function ic(t){var e=wn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Mr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,ut.lanes|=f,Er|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,On(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rc(t){var e=wn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);On(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ng(){}function ig(t,e){var n=ut,i=wn(),r=e(),s=!On(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Cf(og.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,So(9,sg.bind(null,n,i,r,e),void 0,null),Rt===null)throw Error(ee(349));Mr&30||rg(n,e,r)}return r}function rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sg(t,e,n,i){e.value=n,e.getSnapshot=i,ag(e)&&lg(t)}function og(t,e,n){return n(function(){ag(e)&&lg(t)})}function ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function lg(t){var e=pi(t,1);e!==null&&Fn(e,t,1,-1)}function zd(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=D0.bind(null,ut,t),[e.memoizedState,t]}function So(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cg(){return wn().memoizedState}function La(t,e,n,i){var r=Gn();ut.flags|=t,r.memoizedState=So(1|e,n,void 0,i===void 0?null:i)}function yl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&wf(i,o.deps)){r.memoizedState=So(e,n,s,i);return}}ut.flags|=t,r.memoizedState=So(1|e,n,s,i)}function Bd(t,e){return La(8390656,8,t,e)}function Cf(t,e){return yl(2048,8,t,e)}function ug(t,e){return yl(4,2,t,e)}function fg(t,e){return yl(4,4,t,e)}function dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hg(t,e,n){return n=n!=null?n.concat([t]):null,yl(4,4,dg.bind(null,e,t),n)}function bf(){}function pg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return Mr&21?(On(n,e)||(n=Sm(),ut.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function P0(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=nc.transition;nc.transition={};try{t(!1),e()}finally{Ke=n,nc.transition=i}}function _g(){return wn().memoizedState}function L0(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))xg(e,n);else if(n=Jm(t,e,n,i),n!==null){var r=jt();Fn(n,t,i,r),yg(n,e,i)}}function D0(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))xg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,On(a,o)){var l=e.interleaved;l===null?(r.next=r,yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jm(t,e,r,i),n!==null&&(r=jt(),Fn(n,t,i,r),yg(n,e,i))}}function vg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function xg(t,e){to=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var tl={readContext:Tn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},N0={readContext:Tn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:Bd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=L0.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:zd,useDebugValue:bf,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=zd(!1),e=t[0];return t=P0.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Gn();if(ot){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Rt===null)throw Error(ee(349));Mr&30||rg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bd(og.bind(null,i,s,t),[t]),i.flags|=2048,So(9,sg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Rt.identifierPrefix;if(ot){var n=ai,i=oi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U0={readContext:Tn,useCallback:pg,useContext:Tn,useEffect:Cf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:ic,useRef:cg,useState:function(){return ic(yo)},useDebugValue:bf,useDeferredValue:function(t){var e=wn();return gg(e,yt.memoizedState,t)},useTransition:function(){var t=ic(yo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:_g,unstable_isNewReconciler:!1},I0={readContext:Tn,useCallback:pg,useContext:Tn,useEffect:Cf,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:fg,useMemo:mg,useReducer:rc,useRef:cg,useState:function(){return rc(yo)},useDebugValue:bf,useDeferredValue:function(t){var e=wn();return yt===null?e.memoizedState=t:gg(e,yt.memoizedState,t)},useTransition:function(){var t=rc(yo)[0],e=wn().memoizedState;return[t,e]},useMutableSource:ng,useSyncExternalStore:ig,useId:_g,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=jt(),r=zi(t),s=ui(i,r);s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Fn(e,t,r,i),ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=jt(),r=zi(t),s=ui(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Oi(t,s,r),e!==null&&(Fn(e,t,r,i),ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),i=zi(t),r=ui(n,i);r.tag=2,e!=null&&(r.callback=e),e=Oi(t,r,i),e!==null&&(Fn(e,t,i,n),ba(e,t,i))}};function Hd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ho(n,i)||!ho(r,s):!0}function Sg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Tn(s):(r=tn(e)?yr:Bt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function Su(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Tn(s):(s=tn(e)?yr:Bt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sl.enqueueReplaceState(r,r.state,null),Qa(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=cv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var F0=typeof WeakMap=="function"?WeakMap:Map;function Mg(t,e,n){n=ui(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Du=i),Mu(t,e)},n}function Eg(t,e,n){n=ui(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Mu(t,e),typeof i!="function"&&(ki===null?ki=new Set([this]):ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new F0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=K0.bind(null,t,e,n),e.then(t,t))}function Wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ui(-1,1),e.tag=2,Oi(n,e,1))),n.lanes|=1),t)}var O0=_i.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,i){e.child=t===null?Qm(e,null,n,i):_s(e,t.child,n,i)}function Xd(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=Af(t,e,n,i,s,r),n=Rf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&n&&pf(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Yd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tg(t,e,s,i,r)):(t=Ia(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ho,n(o,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Tg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ho(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Eu(t,e,n,i,r)}function wg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ns,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(ns,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(ns,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(ns,cn),cn|=i;return Vt(t,e,r,n),e.child}function Ag(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Eu(t,e,n,i,r){var s=tn(n)?yr:Bt.current;return s=ms(e,s),us(e,r),n=Af(t,e,n,i,s,r),i=Rf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ot&&i&&pf(e),e.flags|=1,Vt(t,e,n,r),e.child)}function qd(t,e,n,i,r){if(tn(n)){var s=!0;Ya(e)}else s=!1;if(us(e,r),e.stateNode===null)Da(t,e),Sg(e,n,i),Su(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Tn(c):(c=tn(n)?yr:Bt.current,c=ms(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Gd(e,o,i,c),Ai=!1;var d=e.memoizedState;o.state=d,Qa(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||Ai?(typeof f=="function"&&(yu(e,n,f,i),l=e.memoizedState),(a=Ai||Hd(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,eg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Pn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=tn(n)?yr:Bt.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Gd(e,o,i,l),Ai=!1,d=e.memoizedState,o.state=d,Qa(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||en.current||Ai?(typeof m=="function"&&(yu(e,n,m,i),v=e.memoizedState),(c=Ai||Hd(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Tu(t,e,n,i,s,r)}function Tu(t,e,n,i,r,s){Ag(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Nd(e,n,!1),mi(t,e,s);i=e.stateNode,O0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):Vt(t,e,a,s),e.memoizedState=i.state,r&&Nd(e,n,!0),e.child}function Rg(t){var e=t.stateNode;e.pendingContext?Dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dd(t,e.context,!1),Mf(t,e.containerInfo)}function $d(t,e,n,i,r){return gs(),gf(r),e.flags|=256,Vt(t,e,n,i),e.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cg(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ct,r&1),t===null)return vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Au(n),e.memoizedState=wu,t):Pf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return k0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Au(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pf(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,i){return i!==null&&gf(i),_s(e,t.child,null,n),t=Pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function k0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=sc(Error(ee(422))),$o(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Tl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Au(o),e.memoizedState=wu,s);if(!(e.mode&1))return $o(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=sc(s,i,void 0),$o(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Rt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),Fn(i,t,r,-1))}return Ff(),i=sc(Error(ee(421))),$o(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Z0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Fi(r.nextSibling),fn=e,ot=!0,Dn=null,t!==null&&(vn[xn++]=oi,vn[xn++]=ai,vn[xn++]=Sr,oi=t.id,ai=t.overflow,Sr=e),e=Pf(e,i.children),e.flags|=4096,e)}function Kd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xu(t.return,e,n)}function oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kd(t,n,e);else if(t.tag===19)Kd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ja(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ja(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}oc(e,!0,n,null,s);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z0(t,e,n){switch(e.tag){case 3:Rg(e),gs();break;case 5:tg(e);break;case 1:tn(e.type)&&Ya(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(Ka,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Cg(t,e,n):(et(ct,ct.current&1),t=mi(t,e,n),t!==null?t.sibling:null);et(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,wg(t,e,n)}return mi(t,e,n)}var Pg,Ru,Lg,Dg;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ru=function(){};Lg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(qn.current);var s=null;switch(n){case"input":r=$c(t,r),i=$c(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=Qc(t,r),i=Qc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}eu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(so.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(so.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&tt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function B0(t,e,n){var i=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&Xa(),Ft(e),null;case 3:return i=e.stateNode,vs(),it(en),it(Bt),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(Iu(Dn),Dn=null))),Ru(t,e),Ft(e),null;case 5:Ef(e);var r=pr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Lg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ft(e),null}if(t=pr(qn.current),Yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[go]=s,t=(e.mode&1)!==0,n){case"dialog":tt("cancel",i),tt("close",i);break;case"iframe":case"object":case"embed":tt("load",i);break;case"video":case"audio":for(r=0;r<$s.length;r++)tt($s[r],i);break;case"source":tt("error",i);break;case"img":case"image":case"link":tt("error",i),tt("load",i);break;case"details":tt("toggle",i);break;case"input":sd(i,s),tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},tt("invalid",i);break;case"textarea":ad(i,s),tt("invalid",i)}eu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",""+a]):so.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&tt("scroll",i)}switch(n){case"input":ko(i),od(i,s,!0);break;case"textarea":ko(i),ld(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=om(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[jn]=e,t[go]=i,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(o=tu(n,i),n){case"dialog":tt("cancel",t),tt("close",t),r=i;break;case"iframe":case"object":case"embed":tt("load",t),r=i;break;case"video":case"audio":for(r=0;r<$s.length;r++)tt($s[r],t);r=i;break;case"source":tt("error",t),r=i;break;case"img":case"image":case"link":tt("error",t),tt("load",t),r=i;break;case"details":tt("toggle",t),r=i;break;case"input":sd(t,i),r=$c(t,i),tt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),tt("invalid",t);break;case"textarea":ad(t,i),r=Qc(t,i),tt("invalid",t);break;default:r=i}eu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?cm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&am(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oo(t,l):typeof l=="number"&&oo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(so.hasOwnProperty(s)?l!=null&&s==="onScroll"&&tt("scroll",t):l!=null&&Ju(t,s,l,o))}switch(n){case"input":ko(t),od(t,i,!1);break;case"textarea":ko(t),ld(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Dg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=pr(vo.current),pr(qn.current),Yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:Xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Ft(e),null;case 13:if(it(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&un!==null&&e.mode&1&&!(e.flags&128))Km(),gs(),e.flags|=98560,s=!1;else if(s=Yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[jn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Dn!==null&&(Iu(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?St===0&&(St=3):Ff())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return vs(),Ru(t,e),t===null&&po(e.stateNode.containerInfo),Ft(e),null;case 10:return xf(e.type._context),Ft(e),null;case 17:return tn(e.type)&&Xa(),Ft(e),null;case 19:if(it(ct),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ks(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ja(t),o!==null){for(e.flags|=128,ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&mt()>ys&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ja(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Ft(e),null}else 2*mt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=mt(),e.sibling=null,n=ct.current,et(ct,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return If(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function H0(t,e){switch(mf(e),e.tag){case 1:return tn(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),it(en),it(Bt),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ef(e),null;case 13:if(it(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(ct),null;case 4:return vs(),null;case 10:return xf(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var Ko=!1,zt=!1,G0=typeof WeakSet=="function"?WeakSet:Set,he=null;function ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function Cu(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Zd=!1;function V0(t,e){if(fu=Ga,t=Om(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(du={focusedElem:t,selectionRange:n},Ga=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Pn(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){dt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Zd,Zd=!1,v}function no(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cu(e,n,s)}r=r.next}while(r!==i)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ng(t){var e=t.alternate;e!==null&&(t.alternate=null,Ng(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[go],delete e[mu],delete e[w0],delete e[A0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ug(t){return t.tag===5||t.tag===3||t.tag===4}function Qd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ug(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Pu(t,e,n),t=t.sibling;t!==null;)Pu(t,e,n),t=t.sibling}function Lu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Lu(t,e,n),t=t.sibling;t!==null;)Lu(t,e,n),t=t.sibling}var Pt=null,Ln=!1;function vi(t,e,n){for(n=n.child;n!==null;)Ig(t,e,n),n=n.sibling}function Ig(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:zt||ts(n,e);case 6:var i=Pt,r=Ln;Pt=null,vi(t,e,n),Pt=i,Ln=r,Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Ln?(t=Pt,n=n.stateNode,t.nodeType===8?Jl(t.parentNode,n):t.nodeType===1&&Jl(t,n),uo(t)):Jl(Pt,n.stateNode));break;case 4:i=Pt,r=Ln,Pt=n.stateNode.containerInfo,Ln=!0,vi(t,e,n),Pt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cu(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!zt&&(ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,vi(t,e,n),zt=i):vi(t,e,n);break;default:vi(t,e,n)}}function Jd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G0),e.forEach(function(i){var r=Q0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Ln=!1;break e;case 3:Pt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Pt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Pt===null)throw Error(ee(160));Ig(s,o,r),Pt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fg(e,t),e=e.sibling}function Fg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Bn(t),i&4){try{no(3,t,t.return),Ml(3,t)}catch(y){dt(t,t.return,y)}try{no(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:An(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return);break;case 5:if(An(e,t),Bn(t),i&512&&n!==null&&ts(n,n.return),t.flags&32){var r=t.stateNode;try{oo(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rm(r,s),tu(a,o);var c=tu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?cm(r,h):f==="dangerouslySetInnerHTML"?am(r,h):f==="children"?oo(r,h):Ju(r,f,h,c)}switch(a){case"input":Kc(r,s);break;case"textarea":sm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?os(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[go]=s}catch(y){dt(t,t.return,y)}}break;case 6:if(An(e,t),Bn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){dt(t,t.return,y)}}break;case 3:if(An(e,t),Bn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{uo(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:An(e,t),Bn(t);break;case 13:An(e,t),Bn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nf=mt())),i&4&&Jd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(c=zt)||f,An(e,t),zt=c):An(e,t),Bn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(he=t,f=t.child;f!==null;){for(h=he=f;he!==null;){switch(d=he,m=d.child,d.tag){case 0:case 11:case 14:case 15:no(4,d,d.return);break;case 1:ts(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:ts(d,d.return);break;case 22:if(d.memoizedState!==null){th(h);continue}}m!==null?(m.return=d,he=m):th(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lm("display",o))}catch(y){dt(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){dt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(e,t),Bn(t),i&4&&Jd(t);break;case 21:break;default:An(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ug(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oo(r,""),i.flags&=-33);var s=Qd(t);Lu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Qd(t);Pu(t,a,o);break;default:throw Error(ee(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W0(t,e,n){he=t,Og(t)}function Og(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Ko;var c=zt;if(Ko=o,(zt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?nh(r):l!==null?(l.return=o,he=l):nh(r);for(;s!==null;)he=s,Og(s),s=s.sibling;he=r,Ko=a,zt=c}eh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):eh(t)}}function eh(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Ml(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&uo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&bu(e)}catch(d){dt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function th(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function nh(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var s=e.return;try{bu(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{bu(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var j0=Math.ceil,nl=_i.ReactCurrentDispatcher,Lf=_i.ReactCurrentOwner,Mn=_i.ReactCurrentBatchConfig,Xe=0,Rt=null,xt=null,Dt=0,cn=0,ns=$i(0),St=0,Mo=null,Er=0,El=0,Df=0,io=null,Zt=null,Nf=0,ys=1/0,ni=null,il=!1,Du=null,ki=null,Zo=!1,Li=null,rl=0,ro=0,Nu=null,Na=-1,Ua=0;function jt(){return Xe&6?mt():Na!==-1?Na:Na=mt()}function zi(t){return t.mode&1?Xe&2&&Dt!==0?Dt&-Dt:C0.transition!==null?(Ua===0&&(Ua=Sm()),Ua):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Cm(t.type)),t):1}function Fn(t,e,n,i){if(50<ro)throw ro=0,Nu=null,Error(ee(185));wo(t,n,i),(!(Xe&2)||t!==Rt)&&(t===Rt&&(!(Xe&2)&&(El|=n),St===4&&Ci(t,Dt)),nn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(ys=mt()+500,xl&&Ki()))}function nn(t,e){var n=t.callbackNode;Cv(t,e);var i=Ha(t,t===Rt?Dt:0);if(i===0)n!==null&&fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&fd(n),e===1)t.tag===0?R0(ih.bind(null,t)):Ym(ih.bind(null,t)),E0(function(){!(Xe&6)&&Ki()}),n=null;else{switch(Mm(i)){case 1:n=sf;break;case 4:n=xm;break;case 16:n=Ba;break;case 536870912:n=ym;break;default:n=Ba}n=jg(n,kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kg(t,e){if(Na=-1,Ua=0,Xe&6)throw Error(ee(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=Ha(t,t===Rt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=Xe;Xe|=2;var s=Bg();(Rt!==t||Dt!==e)&&(ni=null,ys=mt()+500,gr(t,e));do try{q0();break}catch(a){zg(t,a)}while(!0);vf(),nl.current=s,Xe=r,xt!==null?e=0:(Rt=null,Dt=0,e=St)}if(e!==0){if(e===2&&(r=ou(t),r!==0&&(i=r,e=Uu(t,r))),e===1)throw n=Mo,gr(t,0),Ci(t,i),nn(t,mt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!X0(r)&&(e=sl(t,i),e===2&&(s=ou(t),s!==0&&(i=s,e=Uu(t,s))),e===1))throw n=Mo,gr(t,0),Ci(t,i),nn(t,mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ar(t,Zt,ni);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Nf+500-mt(),10<e)){if(Ha(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=pu(ar.bind(null,t,Zt,ni),e);break}ar(t,Zt,ni);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*j0(i/1960))-i,10<i){t.timeoutHandle=pu(ar.bind(null,t,Zt,ni),i);break}ar(t,Zt,ni);break;case 5:ar(t,Zt,ni);break;default:throw Error(ee(329))}}}return nn(t,mt()),t.callbackNode===n?kg.bind(null,t):null}function Uu(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Iu(e)),t}function Iu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function X0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!On(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Df,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-In(e),i=1<<n;t[n]=-1,e&=~i}}function ih(t){if(Xe&6)throw Error(ee(327));fs();var e=Ha(t,0);if(!(e&1))return nn(t,mt()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=ou(t);i!==0&&(e=i,n=Uu(t,i))}if(n===1)throw n=Mo,gr(t,0),Ci(t,e),nn(t,mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Zt,ni),nn(t,mt()),null}function Uf(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ys=mt()+500,xl&&Ki())}}function Tr(t){Li!==null&&Li.tag===0&&!(Xe&6)&&fs();var e=Xe;Xe|=1;var n=Mn.transition,i=Ke;try{if(Mn.transition=null,Ke=1,t)return t()}finally{Ke=i,Mn.transition=n,Xe=e,!(Xe&6)&&Ki()}}function If(){cn=ns.current,it(ns)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,M0(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xa();break;case 3:vs(),it(en),it(Bt),Tf();break;case 5:Ef(i);break;case 4:vs();break;case 13:it(ct);break;case 19:it(ct);break;case 10:xf(i.type._context);break;case 22:case 23:If()}n=n.return}if(Rt=t,xt=t=Bi(t.current,null),Dt=cn=e,St=0,Mo=null,Df=El=Er=0,Zt=io=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function zg(t,e){do{var n=xt;try{if(vf(),Pa.current=tl,el){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(Mr=0,At=yt=ut=null,to=!1,xo=0,Lf.current=null,n===null||n.return===null){St=1,Mo=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Wd(o);if(m!==null){m.flags&=-257,jd(m,o,a,s,e),m.mode&1&&Vd(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Vd(s,c,e),Ff();break e}l=Error(ee(426))}}else if(ot&&a.mode&1){var p=Wd(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),jd(p,o,a,s,e),gf(xs(l,a));break e}}s=l=xs(l,a),St!==4&&(St=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Mg(s,l,e);Od(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ki===null||!ki.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Eg(s,a,e);Od(s,M);break e}}s=s.return}while(s!==null)}Gg(n)}catch(b){e=b,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function Bg(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Ff(){(St===0||St===3||St===2)&&(St=4),Rt===null||!(Er&268435455)&&!(El&268435455)||Ci(Rt,Dt)}function sl(t,e){var n=Xe;Xe|=2;var i=Bg();(Rt!==t||Dt!==e)&&(ni=null,gr(t,e));do try{Y0();break}catch(r){zg(t,r)}while(!0);if(vf(),Xe=n,nl.current=i,xt!==null)throw Error(ee(261));return Rt=null,Dt=0,St}function Y0(){for(;xt!==null;)Hg(xt)}function q0(){for(;xt!==null&&!xv();)Hg(xt)}function Hg(t){var e=Wg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Gg(t):xt=e,Lf.current=null}function Gg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=H0(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=B0(n,e,cn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function ar(t,e,n){var i=Ke,r=Mn.transition;try{Mn.transition=null,Ke=1,$0(t,e,n,i)}finally{Mn.transition=r,Ke=i}return null}function $0(t,e,n,i){do fs();while(Li!==null);if(Xe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bv(t,s),t===Rt&&(xt=Rt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,jg(Ba,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=Ke;Ke=1;var a=Xe;Xe|=4,Lf.current=null,V0(t,n),Fg(n,t),m0(du),Ga=!!fu,du=fu=null,t.current=n,W0(n),yv(),Xe=a,Ke=o,Mn.transition=s}else t.current=n;if(Zo&&(Zo=!1,Li=t,rl=r),s=t.pendingLanes,s===0&&(ki=null),Ev(n.stateNode),nn(t,mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Du,Du=null,t;return rl&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Nu?ro++:(ro=0,Nu=t):ro=0,Ki(),null}function fs(){if(Li!==null){var t=Mm(rl),e=Mn.transition,n=Ke;try{if(Mn.transition=null,Ke=16>t?16:t,Li===null)var i=!1;else{if(t=Li,Li=null,rl=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var f=he;switch(f.tag){case 0:case 11:case 15:no(8,f,s)}var h=f.child;if(h!==null)h.return=f,he=h;else for(;he!==null;){f=he;var d=f.sibling,m=f.return;if(Ng(f),f===c){he=null;break}if(d!==null){d.return=m,he=d;break}he=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,he=u;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(b){dt(a,a.return,b)}if(a===o){he=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,he=M;break e}he=a.return}}if(Xe=r,Ki(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(pl,t)}catch{}i=!0}return i}finally{Ke=n,Mn.transition=e}}return!1}function rh(t,e,n){e=xs(n,e),e=Mg(t,e,1),t=Oi(t,e,1),e=jt(),t!==null&&(wo(t,1,e),nn(t,e))}function dt(t,e,n){if(t.tag===3)rh(t,t,n);else for(;e!==null;){if(e.tag===3){rh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ki===null||!ki.has(i))){t=xs(n,t),t=Eg(e,t,1),e=Oi(e,t,1),t=jt(),e!==null&&(wo(e,1,t),nn(e,t));break}}e=e.return}}function K0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,Rt===t&&(Dt&n)===n&&(St===4||St===3&&(Dt&130023424)===Dt&&500>mt()-Nf?gr(t,0):Df|=n),nn(t,e)}function Vg(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=jt();t=pi(t,e),t!==null&&(wo(t,e,n),nn(t,n))}function Z0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vg(t,n)}function Q0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Vg(t,n)}var Wg;Wg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,z0(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ot&&e.flags&1048576&&qm(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Da(t,e),t=e.pendingProps;var r=ms(e,Bt.current);us(e,n),r=Af(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sf(e),r.updater=Sl,e.stateNode=r,r._reactInternals=e,Su(e,i,t,n),e=Tu(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&pf(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ex(i),t=Pn(i,t),r){case 0:e=Eu(null,e,i,t,n);break e;case 1:e=qd(null,e,i,t,n);break e;case 11:e=Xd(null,e,i,t,n);break e;case 14:e=Yd(null,e,i,Pn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Eu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),qd(t,e,i,r,n);case 3:e:{if(Rg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,eg(t,e),Qa(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ee(423)),e),e=$d(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ee(424)),e),e=$d(t,e,i,n,r);break e}else for(un=Fi(e.stateNode.containerInfo.firstChild),fn=e,ot=!0,Dn=null,n=Qm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=mi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return tg(e),t===null&&vu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hu(i,r)?o=null:s!==null&&hu(i,s)&&(e.flags|=32),Ag(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&vu(e),null;case 13:return Cg(t,e,n);case 4:return Mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Xd(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(Ka,i._currentValue),i._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===r.children&&!en.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ui(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Tn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Pn(i,e.pendingProps),r=Pn(i.type,r),Yd(t,e,i,r,n);case 15:return Tg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Pn(i,r),Da(t,e),e.tag=1,tn(i)?(t=!0,Ya(e)):t=!1,us(e,n),Sg(e,i,r),Su(e,i,r,n),Tu(null,e,i,!0,t,n);case 19:return bg(t,e,n);case 22:return wg(t,e,n)}throw Error(ee(156,e.tag))};function jg(t,e){return vm(t,e)}function J0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new J0(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ex(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ia(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return _r(n.children,r,s,e);case ef:o=8,r|=8;break;case jc:return t=Sn(12,n,e,r|2),t.elementType=jc,t.lanes=s,t;case Xc:return t=Sn(13,n,e,r),t.elementType=Xc,t.lanes=s,t;case Yc:return t=Sn(19,n,e,r),t.elementType=Yc,t.lanes=s,t;case tm:return Tl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jp:o=10;break e;case em:o=9;break e;case tf:o=11;break e;case nf:o=14;break e;case wi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Sn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Tl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=tm,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,i,r,s,o,a,l){return t=new tx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sf(s),t}function nx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xg(t){if(!t)return ji;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(tn(n))return Xm(t,n,e)}return e}function Yg(t,e,n,i,r,s,o,a,l){return t=kf(n,i,!0,t,r,s,o,a,l),t.context=Xg(null),n=t.current,i=jt(),r=zi(n),s=ui(i,r),s.callback=e??null,Oi(n,s,r),t.current.lanes=r,wo(t,r,i),nn(t,i),t}function wl(t,e,n,i){var r=e.current,s=jt(),o=zi(r);return n=Xg(n),e.context===null?e.context=n:e.pendingContext=n,e=ui(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Oi(r,e,o),t!==null&&(Fn(t,r,o,s),ba(t,r,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){sh(t,e),(t=t.alternate)&&sh(t,e)}function ix(){return null}var qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}Al.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));wl(t,e,null,null)};Al.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){wl(null,t,null,null)}),e[hi]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ri.length&&e!==0&&e<Ri[n].priority;n++);Ri.splice(n,0,t),n===0&&Rm(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function oh(){}function rx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ol(o);s.call(c)}}var o=Yg(e,i,t,0,null,!1,!1,"",oh);return t._reactRootContainer=o,t[hi]=o.current,po(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ol(l);a.call(c)}}var l=kf(t,0,!1,null,null,!1,!1,"",oh);return t._reactRootContainer=l,t[hi]=l.current,po(t.nodeType===8?t.parentNode:t),Tr(function(){wl(e,l,n,i)}),l}function Cl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ol(o);a.call(l)}}wl(e,o,t,r)}else o=rx(n,e,t,r,i);return ol(o)}Em=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qs(e.pendingLanes);n!==0&&(of(e,n|1),nn(e,mt()),!(Xe&6)&&(ys=mt()+500,Ki()))}break;case 13:Tr(function(){var i=pi(t,1);if(i!==null){var r=jt();Fn(i,t,1,r)}}),zf(t,1)}};af=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=jt();Fn(e,t,134217728,n)}zf(t,134217728)}};Tm=function(t){if(t.tag===13){var e=zi(t),n=pi(t,e);if(n!==null){var i=jt();Fn(n,t,e,i)}zf(t,e)}};wm=function(){return Ke};Am=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};iu=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vl(i);if(!r)throw Error(ee(90));im(i),Kc(i,r)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};dm=Uf;hm=Tr;var sx={usingClientEntryPoint:!1,Events:[Ro,Kr,vl,um,fm,Uf]},zs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ox={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gm(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{pl=Qo.inject(ox),Yn=Qo}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(ee(200));return nx(t,e,null,n)};hn.createRoot=function(t,e){if(!Hf(t))throw Error(ee(299));var n=!1,i="",r=qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,po(t.nodeType===8?t.parentNode:t),new Bf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=gm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Tr(t)};hn.hydrate=function(t,e,n){if(!Rl(e))throw Error(ee(200));return Cl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=qg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yg(e,null,t,1,n??null,r,!1,s,o),t[hi]=e.current,po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Al(e)};hn.render=function(t,e,n){if(!Rl(e))throw Error(ee(200));return Cl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Rl(t))throw Error(ee(40));return t._reactRootContainer?(Tr(function(){Cl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};hn.unstable_batchedUpdates=Uf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Rl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Cl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(t){console.error(t)}}$g(),$p.exports=hn;var ax=$p.exports,Kg,ah=ax;Kg=ah.createRoot,ah.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="162",lx=0,lh=1,cx=2,Zg=1,ux=2,ti=3,Xi=0,rn=1,ri=2,Hi=0,ds=1,ch=2,uh=3,fh=4,fx=5,ur=100,dx=101,hx=102,dh=103,hh=104,px=200,mx=201,gx=202,_x=203,Fu=204,Ou=205,vx=206,xx=207,yx=208,Sx=209,Mx=210,Ex=211,Tx=212,wx=213,Ax=214,Rx=0,Cx=1,bx=2,al=3,Px=4,Lx=5,Dx=6,Nx=7,Qg=0,Ux=1,Ix=2,Gi=0,Fx=1,Ox=2,kx=3,zx=4,Bx=5,Hx=6,Gx=7,Jg=300,Ss=301,Ms=302,ku=303,zu=304,bl=306,Bu=1e3,Nn=1001,Hu=1002,Wt=1003,ph=1004,Bs=1005,Kt=1006,cc=1007,mr=1008,Vi=1009,Vx=1010,Wx=1011,Vf=1012,e_=1013,Di=1014,si=1015,Eo=1016,t_=1017,n_=1018,vr=1020,jx=1021,Un=1023,Xx=1024,Yx=1025,xr=1026,Es=1027,qx=1028,i_=1029,$x=1030,r_=1031,s_=1033,uc=33776,fc=33777,dc=33778,hc=33779,mh=35840,gh=35841,_h=35842,vh=35843,o_=36196,xh=37492,yh=37496,Sh=37808,Mh=37809,Eh=37810,Th=37811,wh=37812,Ah=37813,Rh=37814,Ch=37815,bh=37816,Ph=37817,Lh=37818,Dh=37819,Nh=37820,Uh=37821,pc=36492,Ih=36494,Fh=36495,Kx=36283,Oh=36284,kh=36285,zh=36286,Zx=3200,Qx=3201,Jx=0,ey=1,bi="",Vn="srgb",Zi="srgb-linear",Wf="display-p3",Pl="display-p3-linear",ll="linear",nt="srgb",cl="rec709",ul="p3",br=7680,Bh=519,ty=512,ny=513,iy=514,a_=515,ry=516,sy=517,oy=518,ay=519,Hh=35044,Gh="300 es",Gu=1035,li=2e3,fl=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,Vu=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function ly(t,e){return(t%e+e)%e}function gc(t,e,n){return(1-n)*t+n*e}function Vh(t){return(t&t-1)===0&&t!==0}function Wu(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],y=r[0],p=r[3],u=r[6],_=r[1],g=r[4],M=r[7],b=r[2],R=r[5],w=r[8];return s[0]=o*y+a*_+l*b,s[3]=o*p+a*g+l*R,s[6]=o*u+a*M+l*w,s[1]=c*y+f*_+h*b,s[4]=c*p+f*g+h*R,s[7]=c*u+f*M+h*w,s[2]=d*y+m*_+v*b,s[5]=d*p+m*g+v*R,s[8]=d*u+m*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new Fe;function l_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cy(){const t=dl("canvas");return t.style.display="block",t}const Wh={};function uy(t){t in Wh||(Wh[t]=!0,console.warn(t))}const jh=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xh=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jo={[Zi]:{transfer:ll,primaries:cl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:nt,primaries:cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pl]:{transfer:ll,primaries:ul,toReference:t=>t.applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh)},[Wf]:{transfer:nt,primaries:ul,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xh),fromReference:t=>t.applyMatrix3(jh).convertLinearToSRGB()}},fy=new Set([Zi,Pl]),Ze={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Jo[e].toReference,r=Jo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Jo[t].primaries},getTransfer:function(t){return t===bi?ll:Jo[t].transfer}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=dl("canvas")),Pr.width=e.width,Pr.height=e.height;const i=Pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class u_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xc(r[o].image)):s.push(xc(r[o]))}else s=xc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?c_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;class sn extends Cs{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Nn,r=Nn,s=Kt,o=mr,a=Un,l=Vi,c=sn.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=bo(),this.name="",this.source=new u_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bu:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bu:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Jg;sn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,b=(u+1)/2,R=(f+d)/4,w=(h+y)/4,P=(v+p)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=w/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(h-y)/_,this.z=(d-f)/_,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new u_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends py{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f_ extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class my extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==d||c!==m||f!==v){let p=1-a;const u=l*d+c*m+f*v+h*y,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),R=Math.atan2(b,u*_);p=Math.sin(p*R)/b,a=Math.sin(a*R)/b}const M=a*_;if(l=l*p+d*M,c=c*p+m*M,f=f*p+v*M,h=h*p+y*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-c*d,e[n+1]=l*v+f*d+c*h-a*m,e[n+2]=c*v+f*m+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"YZX":this._x=d*f*h+c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h-d*m*v;break;case"XZY":this._x=d*f*h-c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new F,Yh=new Po;class Lo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ta.subVectors(this.max,Gs),Lr.subVectors(e.a,Gs),Dr.subVectors(e.b,Gs),Nr.subVectors(e.c,Gs),xi.subVectors(Dr,Lr),yi.subVectors(Nr,Dr),er.subVectors(Lr,Nr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-er.z,er.y,xi.z,0,-xi.x,yi.z,0,-yi.x,er.z,0,-er.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-er.y,er.x,0];return!Sc(n,Lr,Dr,Nr,ta)||(n=[1,0,0,0,1,0,0,0,1],!Sc(n,Lr,Dr,Nr,ta))?!1:(na.crossVectors(xi,yi),n=[na.x,na.y,na.z],Sc(n,Lr,Dr,Nr,ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,ea=new Lo,Lr=new F,Dr=new F,Nr=new F,xi=new F,yi=new F,er=new F,Gs=new F,ta=new F,na=new F,tr=new F;function Sc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),f=i.dot(tr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const gy=new Lo,Vs=new F,Mc=new F;class Do{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const n=Vs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Vs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Mc)),this.expandByPoint(Vs.copy(e.center).sub(Mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new F,Ec=new F,ia=new F,Si=new F,Tc=new F,ra=new F,wc=new F;class jf{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,n),Zn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ec.copy(e).add(n).multiplyScalar(.5),ia.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Ec);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ia),a=Si.dot(this.direction),l=-Si.dot(ia),c=Si.lengthSq(),f=Math.abs(1-o*o);let h,d,m,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const y=1/f;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ec).addScaledVector(ia,d),m}intersectSphere(e,n){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),r=Zn.dot(Zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,n,i,r,s){Tc.subVectors(n,e),ra.subVectors(i,e),wc.crossVectors(Tc,ra);let o=this.direction.dot(wc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(Si,ra));if(l<0)return null;const c=a*this.direction.dot(Tc.cross(Si));if(c<0||l+c>o)return null;const f=-a*Si.dot(wc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=v,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d+y*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=v*c-m,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=y-d*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+v,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,vy)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Mi.crossVectors(i,an),Mi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Mi.crossVectors(i,an)),Mi.normalize(),sa.crossVectors(an,Mi),r[0]=Mi.x,r[4]=sa.x,r[8]=an.x,r[1]=Mi.y,r[5]=sa.y,r[9]=an.y,r[2]=Mi.z,r[6]=sa.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],y=i[6],p=i[10],u=i[14],_=i[3],g=i[7],M=i[11],b=i[15],R=r[0],w=r[4],P=r[8],j=r[12],x=r[1],C=r[5],te=r[9],Z=r[13],L=r[2],Y=r[6],X=r[10],$=r[14],D=r[3],O=r[7],V=r[11],K=r[15];return s[0]=o*R+a*x+l*L+c*D,s[4]=o*w+a*C+l*Y+c*O,s[8]=o*P+a*te+l*X+c*V,s[12]=o*j+a*Z+l*$+c*K,s[1]=f*R+h*x+d*L+m*D,s[5]=f*w+h*C+d*Y+m*O,s[9]=f*P+h*te+d*X+m*V,s[13]=f*j+h*Z+d*$+m*K,s[2]=v*R+y*x+p*L+u*D,s[6]=v*w+y*C+p*Y+u*O,s[10]=v*P+y*te+p*X+u*V,s[14]=v*j+y*Z+p*$+u*K,s[3]=_*R+g*x+M*L+b*D,s[7]=_*w+g*C+M*Y+b*O,s[11]=_*P+g*te+M*X+b*V,s[15]=_*j+g*Z+M*$+b*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],y=e[7],p=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+y*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*f-s*l*f)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],y=e[13],p=e[14],u=e[15],_=h*p*c-y*d*c+y*l*m-a*p*m-h*l*u+a*d*u,g=v*d*c-f*p*c-v*l*m+o*p*m+f*l*u-o*d*u,M=f*y*c-v*h*c+v*a*m-o*y*m-f*a*u+o*h*u,b=v*h*l-f*y*l-v*a*d+o*y*d+f*a*p-o*h*p,R=n*_+i*g+r*M+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=_*w,e[1]=(y*d*s-h*p*s-y*r*m+i*p*m+h*r*u-i*d*u)*w,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*s-v*d*s+v*r*m-n*p*m-f*r*u+n*d*u)*w,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*m+n*l*m)*w,e[8]=M*w,e[9]=(v*h*s-f*y*s-v*i*m+n*y*m+f*i*u-n*h*u)*w,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*m-n*a*m)*w,e[12]=b*w,e[13]=(f*y*r-v*h*r+v*i*d-n*y*d-f*i*p+n*h*p)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,v=s*h,y=o*f,p=o*h,u=a*h,_=l*c,g=l*f,M=l*h,b=i.x,R=i.y,w=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+M)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(d+u))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(v+g)*w,r[9]=(p-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,f=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=f,Cn.elements[5]*=f,Cn.elements[6]*=f,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=li){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===li)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===fl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=li){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,m=(i+r)*f;let v,y;if(a===li)v=(o+s)*h,y=-2*h;else if(a===fl)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new F,Cn=new gt,_y=new F(0,0,0),vy=new F(1,1,1),Mi=new F,sa=new F,an=new F,qh=new gt,$h=new Po;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class d_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const Kh=new F,Ir=new Po,Qn=new gt,oa=new F,Ws=new F,yy=new F,Sy=new Po,Zh=new F(1,0,0),Qh=new F(0,1,0),Jh=new F(0,0,1),My={type:"added"},Ey={type:"removed"},Ac={type:"childadded",child:null},Rc={type:"childremoved",child:null};class Xt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new F,n=new gi,i=new Po,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(Jh,e)}translateOnAxis(e,n){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(Jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oa.copy(e):oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Ws,oa,this.up):Qn.lookAt(oa,Ws,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(My),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ey),Rc.child=e,this.dispatchEvent(Rc),Rc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new F(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new F,Jn=new F,Cc=new F,ei=new F,Fr=new F,Or=new F,ep=new F,bc=new F,Pc=new F,Lc=new F;class Xn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Jn.subVectors(i,n),Cc.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Jn),l=bn.dot(Cc),c=Jn.dot(Jn),f=Jn.dot(Cc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Jn.subVectors(e,n),bn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),bn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Or.subVectors(s,i),bc.subVectors(e,i);const l=Fr.dot(bc),c=Or.dot(bc);if(l<=0&&c<=0)return n.copy(i);Pc.subVectors(e,r);const f=Fr.dot(Pc),h=Or.dot(Pc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Fr,o);Lc.subVectors(e,s);const m=Fr.dot(Lc),v=Or.dot(Lc);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Or,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return ep.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(ep,a);const u=1/(p+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=ly(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=h_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ze.fromWorkingColorSpace(kt.copy(this),e),Math.round(Qt(kt.r*255,0,255))*65536+Math.round(Qt(kt.g*255,0,255))*256+Math.round(Qt(kt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Vn){Ze.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(aa);const i=gc(Ei.h,aa.h,n),r=gc(Ei.s,aa.s,n),s=gc(Ei.l,aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new qe;qe.NAMES=h_;let Ty=0;class bs extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=ds,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fu,this.blendDst=Ou,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fu&&(i.blendSrc=this.blendSrc),this.blendDst!==Ou&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class p_ extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Qg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,la=new Ye;class En{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)la.fromBufferAttribute(this,n),la.applyMatrix3(e),this.setXY(n,la.x,la.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hh&&(e.usage=this.usage),e}}class m_ extends En{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g_ extends En{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fi extends En{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wy=0;const _n=new gt,Nc=new Xt,kr=new F,ln=new Lo,js=new Lo,wt=new F;class kn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?g_:m_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(ln.min,js.min),ln.expandByPoint(wt),wt.addVectors(ln.max,js.max),ln.expandByPoint(wt)):(ln.expandByPoint(js.min),ln.expandByPoint(js.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)wt.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),wt.add(kr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,f=new F,h=new F,d=new Ye,m=new Ye,v=new Ye,y=new F,p=new F;function u(P,j,x){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,j),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,j),v.fromBufferAttribute(s,x),f.sub(c),h.sub(c),m.sub(d),v.sub(d);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(C),a[P].add(y),a[j].add(y),a[x].add(y),l[P].add(p),l[j].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,j=_.length;P<j;++P){const x=_[P],C=x.start,te=x.count;for(let Z=C,L=C+te;Z<L;Z+=3)u(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const g=new F,M=new F,b=new F,R=new F;function w(P){b.fromBufferAttribute(r,P),R.copy(b);const j=a[P];g.copy(j),g.sub(b.multiplyScalar(b.dot(j))).normalize(),M.crossVectors(R,j);const C=M.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,C)}for(let P=0,j=_.length;P<j;++P){const x=_[P],C=x.start,te=x.count;for(let Z=C,L=C+te;Z<L;Z+=3)w(e.getX(Z+0)),w(e.getX(Z+1)),w(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F,h=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)d[v++]=c[m++]}return new En(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tp=new gt,nr=new jf,ca=new Do,np=new F,zr=new F,Br=new F,Hr=new F,Uc=new F,ua=new F,fa=new Ye,da=new Ye,ha=new Ye,ip=new F,rp=new F,sp=new F,pa=new F,ma=new F;class ci extends Xt{constructor(e=new kn,n=new p_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Uc.fromBufferAttribute(h,e),o?ua.addScaledVector(Uc,f):ua.addScaledVector(Uc.sub(n),f))}n.add(ua)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(ca.containsPoint(nr.origin)===!1&&(nr.intersectSphere(ca,np)===null||nr.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(s).invert(),nr.copy(e.ray).applyMatrix4(tp),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,b=g;M<b;M+=3){const R=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);r=ga(this,u,e,i,c,f,h,R,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=ga(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,b=g;M<b;M+=3){const R=M,w=M+1,P=M+2;r=ga(this,u,e,i,c,f,h,R,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const _=p,g=p+1,M=p+2;r=ga(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Ay(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,zr),t.getVertexPosition(l,Br),t.getVertexPosition(c,Hr);const f=Ay(t,e,n,i,zr,Br,Hr,pa);if(f){r&&(fa.fromBufferAttribute(r,a),da.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),f.uv=Xn.getInterpolation(pa,zr,Br,Hr,fa,da,ha,new Ye)),s&&(fa.fromBufferAttribute(s,a),da.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),f.uv1=Xn.getInterpolation(pa,zr,Br,Hr,fa,da,ha,new Ye)),o&&(ip.fromBufferAttribute(o,a),rp.fromBufferAttribute(o,l),sp.fromBufferAttribute(o,c),f.normal=Xn.getInterpolation(pa,zr,Br,Hr,ip,rp,sp,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Xn.getNormal(zr,Br,Hr,h.normal),f.face=h}return f}class No extends kn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(f,3)),this.setAttribute("uv",new fi(h,2));function v(y,p,u,_,g,M,b,R,w,P,j){const x=M/w,C=b/P,te=M/2,Z=b/2,L=R/2,Y=w+1,X=P+1;let $=0,D=0;const O=new F;for(let V=0;V<X;V++){const K=V*C-Z;for(let se=0;se<Y;se++){const we=se*x-te;O[y]=we*_,O[p]=K*g,O[u]=L,c.push(O.x,O.y,O.z),O[y]=0,O[p]=0,O[u]=R>0?1:-1,f.push(O.x,O.y,O.z),h.push(se/w),h.push(1-V/P),$+=1}}for(let V=0;V<P;V++)for(let K=0;K<w;K++){const se=d+K+Y*V,we=d+K+Y*(V+1),H=d+(K+1)+Y*(V+1),Q=d+(K+1)+Y*V;l.push(se,we,Q),l.push(we,H,Q),D+=6}a.addGroup(m,D,j),m+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function Ry(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function __(t){return t.getRenderTarget()===null?t.outputColorSpace:Ze.workingColorSpace}const Cy={clone:Ts,merge:Gt};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class v_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,op=new Ye,ap=new Ye;class yn extends v_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vu*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,op,ap),n.subVectors(ap,op)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Vr=1;class Ly extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Gr,Vr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Gr,Vr,e,n);s.layers=this.layers,this.add(s);const o=new yn(Gr,Vr,e,n);o.layers=this.layers,this.add(o);const a=new yn(Gr,Vr,e,n);a.layers=this.layers,this.add(a);const l=new yn(Gr,Vr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Gr,Vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class x_ extends sn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dy extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new x_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new No(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Hi});s.uniforms.tEquirect.value=n;const o=new ci(r,s),a=n.minFilter;return n.minFilter===mr&&(n.minFilter=Kt),new Ly(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ic=new F,Ny=new F,Uy=new Fe;class lr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(Ny.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Uy.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Do,_a=new F;class y_{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],y=r[10],p=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-u).normalize(),i[1].setComponents(l+s,d+c,p+m,M+u).normalize(),i[2].setComponents(l+o,d+f,p+v,M+_).normalize(),i[3].setComponents(l-o,d-f,p-v,M-_).normalize(),i[4].setComponents(l-a,d-h,p-y,M-g).normalize(),n===li)i[5].setComponents(l+a,d+h,p+y,M+g).normalize();else if(n===fl)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function S_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Iy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,m=h.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,h,d),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,f,h){const d=f.array,m=f._updateRange,v=f.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&v.length===0&&t.bufferSubData(h,0,d),v.length!==0){for(let y=0,p=v.length;y<p;y++){const u=v[y];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class Ll extends kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],v=[],y=[],p=[];for(let u=0;u<f;u++){const _=u*d-o;for(let g=0;g<c;g++){const M=g*h-s;v.push(M,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,M=_+c*(u+1),b=_+1+c*(u+1),R=_+1+c*u;m.push(g,M,R),m.push(M,b,R)}this.setIndex(m),this.setAttribute("position",new fi(v,3)),this.setAttribute("normal",new fi(y,3)),this.setAttribute("uv",new fi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$y=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,US=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,SM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,WM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$M=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:ky,alphamap_pars_fragment:zy,alphatest_fragment:By,alphatest_pars_fragment:Hy,aomap_fragment:Gy,aomap_pars_fragment:Vy,batching_pars_vertex:Wy,batching_vertex:jy,begin_vertex:Xy,beginnormal_vertex:Yy,bsdfs:qy,iridescence_fragment:$y,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:oS,defaultnormal_vertex:aS,displacementmap_pars_vertex:lS,displacementmap_vertex:cS,emissivemap_fragment:uS,emissivemap_pars_fragment:fS,colorspace_fragment:dS,colorspace_pars_fragment:hS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:_S,envmap_physical_pars_fragment:bS,envmap_vertex:vS,fog_vertex:xS,fog_pars_vertex:yS,fog_fragment:SS,fog_pars_fragment:MS,gradientmap_pars_fragment:ES,lightmap_fragment:TS,lightmap_pars_fragment:wS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:RS,lights_pars_begin:CS,lights_toon_fragment:PS,lights_toon_pars_fragment:LS,lights_phong_fragment:DS,lights_phong_pars_fragment:NS,lights_physical_fragment:US,lights_physical_pars_fragment:IS,lights_fragment_begin:FS,lights_fragment_maps:OS,lights_fragment_end:kS,logdepthbuf_fragment:zS,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:HS,logdepthbuf_vertex:GS,map_fragment:VS,map_pars_fragment:WS,map_particle_fragment:jS,map_particle_pars_fragment:XS,metalnessmap_fragment:YS,metalnessmap_pars_fragment:qS,morphinstance_vertex:$S,morphcolor_vertex:KS,morphnormal_vertex:ZS,morphtarget_pars_vertex:QS,morphtarget_vertex:JS,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:fM,premultiplied_alpha_fragment:dM,project_vertex:hM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:_M,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:xM,shadowmap_vertex:yM,shadowmask_pars_fragment:SM,skinbase_vertex:MM,skinning_pars_vertex:EM,skinning_vertex:TM,skinnormal_vertex:wM,specularmap_fragment:AM,specularmap_pars_fragment:RM,tonemapping_fragment:CM,tonemapping_pars_fragment:bM,transmission_fragment:PM,transmission_pars_fragment:LM,uv_pars_fragment:DM,uv_pars_vertex:NM,uv_vertex:UM,worldpos_vertex:IM,background_vert:FM,background_frag:OM,backgroundCube_vert:kM,backgroundCube_frag:zM,cube_vert:BM,cube_frag:HM,depth_vert:GM,depth_frag:VM,distanceRGBA_vert:WM,distanceRGBA_frag:jM,equirect_vert:XM,equirect_frag:YM,linedashed_vert:qM,linedashed_frag:$M,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:QM,meshlambert_frag:JM,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:rE,meshphong_frag:sE,meshphysical_vert:oE,meshphysical_frag:aE,meshtoon_vert:lE,meshtoon_frag:cE,points_vert:uE,points_frag:fE,shadow_vert:dE,shadow_frag:hE,sprite_vert:pE,sprite_frag:mE},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Wn={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Wn.physical={uniforms:Gt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const va={r:0,b:0,g:0},rr=new gi,gE=new gt;function _E(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,f,h=null,d=0,m=null;function v(p,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===bl)?(f===void 0&&(f=new ci(new No(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Ts(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),rr.copy(u.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gE.makeRotationFromEuler(rr)),f.material.toneMapped=Ze.getTransfer(g.colorSpace)!==nt,(h!==g||d!==g.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ci(new Ll(2,2),new Yi({name:"BackgroundMaterial",uniforms:Ts(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(g.colorSpace)!==nt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(va,__(t)),i.buffers.color.setClear(va.r,va.g,va.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:v}}function vE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(L,Y,X,$,D){let O=!1;if(o){const V=y($,X,Y);c!==V&&(c=V,m(c.object)),O=u(L,$,X,D),O&&_(L,$,X,D)}else{const V=Y.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==V)&&(c.geometry=$.id,c.program=X.id,c.wireframe=V,O=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,P(L,Y,X,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,Y,X){const $=X.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let O=D[Y.id];O===void 0&&(O={},D[Y.id]=O);let V=O[$];return V===void 0&&(V=p(d()),O[$]=V),V}function p(L){const Y=[],X=[],$=[];for(let D=0;D<r;D++)Y[D]=0,X[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:X,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,Y,X,$){const D=c.attributes,O=Y.attributes;let V=0;const K=X.getAttributes();for(const se in K)if(K[se].location>=0){const H=D[se];let Q=O[se];if(Q===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),H===void 0||H.attribute!==Q||Q&&H.data!==Q.data)return!0;V++}return c.attributesNum!==V||c.index!==$}function _(L,Y,X,$){const D={},O=Y.attributes;let V=0;const K=X.getAttributes();for(const se in K)if(K[se].location>=0){let H=O[se];H===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(H=L.instanceColor));const Q={};Q.attribute=H,H&&H.data&&(Q.data=H.data),D[se]=Q,V++}c.attributes=D,c.attributesNum=V,c.index=$}function g(){const L=c.newAttributes;for(let Y=0,X=L.length;Y<X;Y++)L[Y]=0}function M(L){b(L,0)}function b(L,Y){const X=c.newAttributes,$=c.enabledAttributes,D=c.attributeDivisors;X[L]=1,$[L]===0&&(t.enableVertexAttribArray(L),$[L]=1),D[L]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,Y),D[L]=Y)}function R(){const L=c.newAttributes,Y=c.enabledAttributes;for(let X=0,$=Y.length;X<$;X++)Y[X]!==L[X]&&(t.disableVertexAttribArray(X),Y[X]=0)}function w(L,Y,X,$,D,O,V){V===!0?t.vertexAttribIPointer(L,Y,X,D,O):t.vertexAttribPointer(L,Y,X,$,D,O)}function P(L,Y,X,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=$.attributes,O=X.getAttributes(),V=Y.defaultAttributeValues;for(const K in O){const se=O[K];if(se.location>=0){let we=D[K];if(we===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),we!==void 0){const H=we.normalized,Q=we.itemSize,ce=n.get(we);if(ce===void 0)continue;const Se=ce.buffer,ve=ce.type,pe=ce.bytesPerElement,$e=i.isWebGL2===!0&&(ve===t.INT||ve===t.UNSIGNED_INT||we.gpuType===e_);if(we.isInterleavedBufferAttribute){const Ce=we.data,I=Ce.stride,Ct=we.offset;if(Ce.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)b(se.location+ye,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ye=0;ye<se.locationSize;ye++)M(se.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let ye=0;ye<se.locationSize;ye++)w(se.location+ye,Q/se.locationSize,ve,H,I*pe,(Ct+Q/se.locationSize*ye)*pe,$e)}else{if(we.isInstancedBufferAttribute){for(let Ce=0;Ce<se.locationSize;Ce++)b(se.location+Ce,we.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ce=0;Ce<se.locationSize;Ce++)M(se.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ce=0;Ce<se.locationSize;Ce++)w(se.location+Ce,Q/se.locationSize,ve,H,Q*pe,Q/se.locationSize*Ce*pe,$e)}}else if(V!==void 0){const H=V[K];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(se.location,H);break;case 3:t.vertexAttrib3fv(se.location,H);break;case 4:t.vertexAttrib4fv(se.location,H);break;default:t.vertexAttrib1fv(se.location,H)}}}}R()}function j(){te();for(const L in a){const Y=a[L];for(const X in Y){const $=Y[X];for(const D in $)v($[D].object),delete $[D];delete Y[X]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const Y=a[L.id];for(const X in Y){const $=Y[X];for(const D in $)v($[D].object),delete $[D];delete Y[X]}delete a[L.id]}function C(L){for(const Y in a){const X=a[Y];if(X[L.id]===void 0)continue;const $=X[L.id];for(const D in $)v($[D].object),delete $[D];delete X[L.id]}}function te(){Z(),f=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:te,resetDefaultState:Z,dispose:j,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:R}}function xE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(f[v],h[v]);else{m.multiDrawArraysWEBGL(s,f,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=h[y];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,M=o||e.has("OES_texture_float"),b=g&&M,R=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:R}}function SE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=f(v,d,g,m);for(let b=0;b!==g;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const u=m+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==y;++g,M+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function ME(t){let e=new WeakMap;function n(o,a){return a===ku?o.mapping=Ss:a===zu&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ku||a===zu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class EE extends v_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=4,lp=[.125,.215,.35,.446,.526,.582],fr=20,Fc=new EE,cp=new qe;let Oc=null,kc=0,zc=0;const cr=(1+Math.sqrt(5))/2,Wr=1/cr,up=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,cr,Wr),new F(0,cr,-Wr),new F(Wr,0,cr),new F(-Wr,0,cr),new F(cr,Wr,0),new F(-cr,Wr,0)];class fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,kc,zc),e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Eo,format:Un,colorSpace:Zi,depthBuffer:!1},r=dp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TE(s)),this._blurMaterial=wE(s,e,n)}return r}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,Fc)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cp),f.toneMapping=Gi,f.autoClear=!1;const m=new p_({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new ci(new No,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(cp),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;xa(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),y&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ci(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=up[(r-1)%up.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ci(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),y=s/v,p=isFinite(s)?1+Math.floor(f*y):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const u=[];let _=0;for(let w=0;w<fr;++w){const P=w/y,j=Math.exp(-P*P/2);u.push(j),w===0?_+=j:w<p&&(_+=2*j)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-is?r-g+is:0),R=4*(this._cubeSize-M);xa(n,b,R,3*M,2*M),l.setRenderTarget(n),l.render(h,Fc)}}function TE(t){const e=[],n=[],i=[];let r=t;const s=t-is+1+lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-is?l=lp[o-t+is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,y=3,p=2,u=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),M=new Float32Array(u*v*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,P=R>2?0:-1,j=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(j,y*v*R),g.set(d,p*v*R);const x=[R,R,R,R,R,R];M.set(x,u*v*R)}const b=new kn;b.setAttribute("position",new En(_,y)),b.setAttribute("uv",new En(g,p)),b.setAttribute("faceIndex",new En(M,u)),e.push(b),r>is&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wE(t,e,n){const i=new Float32Array(fr),r=new F(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function hp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function pp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Xf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function AE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ku||l===zu,f=l===Ss||l===Ms;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new fp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new fp(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const y=m[v];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,M=_.length;g<M;g+=3){const b=_[g+0],R=_[g+1],w=_[g+2];d.push(b,R,R,w,w,b)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const b=g+0,R=g+1,w=g+2;d.push(b,R,R,w,w,b)}}else return;const p=new(l_(d)?g_:m_)(d,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function bE(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function f(m,v){t.drawElements(s,v,a,m*l),n.update(v,s,1)}function h(m,v,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,a,m*l,y),n.update(v,s,y)}function d(m,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(m[u]/l,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,a,m,0,y);let u=0;for(let _=0;_<y;_++)u+=v[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function PE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function LE(t,e){return t[0]-e[0]}function DE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function NE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let p=s.get(f);if(p===void 0||p.count!==y){let Z=function(){C.dispose(),s.delete(f),f.removeEventListener("dispose",Z)};var m=Z;p!==void 0&&p.texture.dispose();const u=f.morphAttributes.position!==void 0,_=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;u===!0&&(w=1),_===!0&&(w=2),g===!0&&(w=3);let P=f.attributes.position.count*w,j=1;P>e.maxTextureSize&&(j=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const x=new Float32Array(P*j*4*y),C=new f_(x,P,j,y);C.type=si,C.needsUpdate=!0;const te=w*4;for(let L=0;L<y;L++){const Y=M[L],X=b[L],$=R[L],D=P*j*4*L;for(let O=0;O<Y.count;O++){const V=O*te;u===!0&&(o.fromBufferAttribute(Y,O),x[D+V+0]=o.x,x[D+V+1]=o.y,x[D+V+2]=o.z,x[D+V+3]=0),_===!0&&(o.fromBufferAttribute(X,O),x[D+V+4]=o.x,x[D+V+5]=o.y,x[D+V+6]=o.z,x[D+V+7]=0),g===!0&&(o.fromBufferAttribute($,O),x[D+V+8]=o.x,x[D+V+9]=o.y,x[D+V+10]=o.z,x[D+V+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:C,size:new Ye(P,j)},s.set(f,p),f.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let g=0;g<d.length;g++)u+=d[g];const _=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",_),h.getUniforms().setValue(t,"morphTargetInfluences",d)}h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let y=i[f.id];if(y===void 0||y.length!==v){y=[];for(let M=0;M<v;M++)y[M]=[M,0];i[f.id]=y}for(let M=0;M<v;M++){const b=y[M];b[0]=M,b[1]=d[M]}y.sort(DE);for(let M=0;M<8;M++)M<v&&y[M][1]?(a[M][0]=y[M][0],a[M][1]=y[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(LE);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const b=a[M],R=b[0],w=b[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&f.getAttribute("morphTarget"+M)!==p[R]&&f.setAttribute("morphTarget"+M,p[R]),u&&f.getAttribute("morphNormal"+M)!==u[R]&&f.setAttribute("morphNormal"+M,u[R]),r[M]=w,_+=w):(p&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),u&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const g=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function UE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class M_ extends sn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:xr,f!==xr&&f!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===xr&&(i=Di),i===void 0&&f===Es&&(i=vr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const E_=new sn,T_=new M_(1,1);T_.compareFunction=a_;const w_=new f_,A_=new my,R_=new x_,mp=[],gp=[],_p=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Dl(t,e){let n=gp[e];n===void 0&&(n=new Int32Array(e),gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function IE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function FE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function zE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;xp.set(i),t.uniformMatrix2fv(this.addr,!1,xp),Et(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;vp.set(i),t.uniformMatrix3fv(this.addr,!1,vp),Et(n,i)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;_p.set(i),t.uniformMatrix4fv(this.addr,!1,_p),Et(n,i)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?T_:E_;n.setTexture2D(e||s,r)}function ZE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||A_,r)}function QE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||R_,r)}function JE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w_,r)}function e1(t){switch(t){case 5126:return IE;case 35664:return FE;case 35665:return OE;case 35666:return kE;case 35674:return zE;case 35675:return BE;case 35676:return HE;case 5124:case 35670:return GE;case 35667:case 35671:return VE;case 35668:case 35672:return WE;case 35669:case 35673:return jE;case 5125:return XE;case 36294:return YE;case 36295:return qE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return JE}}function t1(t,e){t.uniform1fv(this.addr,e)}function n1(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function i1(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function r1(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function s1(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function o1(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function a1(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l1(t,e){t.uniform1iv(this.addr,e)}function c1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function f1(t,e){t.uniform4iv(this.addr,e)}function d1(t,e){t.uniform1uiv(this.addr,e)}function h1(t,e){t.uniform2uiv(this.addr,e)}function p1(t,e){t.uniform3uiv(this.addr,e)}function m1(t,e){t.uniform4uiv(this.addr,e)}function g1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||E_,s[o])}function _1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||A_,s[o])}function v1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||R_,s[o])}function x1(t,e,n){const i=this.cache,r=e.length,s=Dl(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||w_,s[o])}function y1(t){switch(t){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return f1;case 5125:return d1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}class S1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e1(n.type)}}class M1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y1(n.type)}}class E1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function yp(t,e){t.seq.push(e),t.map[e.id]=e}function T1(t,e,n){const i=t.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),o=Bc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yp(n,c===void 0?new S1(a,t,e):new M1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new E1(a),yp(n,h)),n=h}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);T1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const w1=37297;let A1=0;function R1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function C1(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===ul&&n===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&n===ul&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Pl:return[i,"LinearTransferOETF"];case Vn:case Wf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Mp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+R1(t.getShaderSource(e),o)}else return r}function b1(t,e){const n=C1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function P1(t,e){let n;switch(e){case Fx:n="Linear";break;case Ox:n="Reinhard";break;case kx:n="OptimizedCineon";break;case zx:n="ACESFilmic";break;case Hx:n="AgX";break;case Gx:n="Neutral";break;case Bx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function L1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function D1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function N1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function U1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function rs(t){return t!==""}function Ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(t){return t.replace(I1,O1)}const F1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function O1(t,e){let n=Ie[e];if(n===void 0){const i=F1.get(e);if(i!==void 0)n=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ju(n)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(t){return t.replace(k1,z1)}function z1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ap(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ux?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function H1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function G1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function V1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ux:e="ENVMAP_BLENDING_MIX";break;case Ix:e="ENVMAP_BLENDING_ADD";break}return e}function W1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function j1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=B1(n),c=H1(n),f=G1(n),h=V1(n),d=W1(n),m=n.isWebGL2?"":L1(n),v=D1(n),y=N1(s),p=r.createProgram();let u,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),u.length>0&&(u+=`
`),_=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(rs).join(`
`),_.length>0&&(_+=`
`)):(u=[Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),_=[m,Ap(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Ie.tonemapping_pars_fragment:"",n.toneMapping!==Gi?P1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,b1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rs).join(`
`)),o=ju(o),o=Ep(o,n),o=Tp(o,n),a=ju(a),a=Ep(a,n),a=Tp(a,n),o=wp(o),a=wp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+u+o,b=g+_+a,R=Sp(r,r.VERTEX_SHADER,M),w=Sp(r,r.FRAGMENT_SHADER,b);r.attachShader(p,R),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function P(te){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(w).trim();let X=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,w);else{const D=Mp(r,R,"vertex"),O=Mp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+te.name+`
Material Type: `+te.type+`

Program Info Log: `+Z+`
`+D+`
`+O)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||Y==="")&&($=!1);$&&(te.diagnostics={runnable:X,programLog:Z,vertexShader:{log:L,prefix:u},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(R),r.deleteShader(w),j=new Fa(r,p),x=U1(r,p)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,w1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let X1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new q1(e),n.set(e,i)),i}}class q1{constructor(e){this.id=X1++,this.code=e,this.usedTimes=0}}function $1(t,e,n,i,r,s,o){const a=new d_,l=new Y1,c=new Set,f=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,C,te,Z,L){const Y=Z.fog,X=L.geometry,$=x.isMeshStandardMaterial?Z.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||$),O=D&&D.mapping===bl?D.image.height:null,V=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=K!==void 0?K.length:0;let we=0;X.morphAttributes.position!==void 0&&(we=1),X.morphAttributes.normal!==void 0&&(we=2),X.morphAttributes.color!==void 0&&(we=3);let H,Q,ce,Se;if(V){const Qe=Wn[V];H=Qe.vertexShader,Q=Qe.fragmentShader}else H=x.vertexShader,Q=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),Se=l.getFragmentShaderID(x);const ve=t.getRenderTarget(),pe=L.isInstancedMesh===!0,$e=L.isBatchedMesh===!0,Ce=!!x.map,I=!!x.matcap,Ct=!!D,ye=!!x.aoMap,ze=!!x.lightMap,Ee=!!x.bumpMap,We=!!x.normalMap,Oe=!!x.displacementMap,Be=!!x.emissiveMap,ht=!!x.metalnessMap,A=!!x.roughnessMap,S=x.anisotropy>0,W=x.clearcoat>0,q=x.iridescence>0,ne=x.sheen>0,J=x.transmission>0,De=S&&!!x.anisotropyMap,Te=W&&!!x.clearcoatMap,ae=W&&!!x.clearcoatNormalMap,ue=W&&!!x.clearcoatRoughnessMap,Ne=q&&!!x.iridescenceMap,ie=q&&!!x.iridescenceThicknessMap,_t=ne&&!!x.sheenColorMap,He=ne&&!!x.sheenRoughnessMap,xe=!!x.specularMap,me=!!x.specularColorMap,ge=!!x.specularIntensityMap,je=J&&!!x.transmissionMap,Pe=J&&!!x.thicknessMap,rt=!!x.gradientMap,N=!!x.alphaMap,le=x.alphaTest>0,z=!!x.alphaHash,re=!!x.extensions;let fe=Gi;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Ve={isWebGL2:h,shaderID:V,shaderType:x.type,shaderName:x.name,vertexShader:H,fragmentShader:Q,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:$e,instancing:pe,instancingColor:pe&&L.instanceColor!==null,instancingMorph:pe&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Zi,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:I,envMap:Ct,envMapMode:Ct&&D.mapping,envMapCubeUVHeight:O,aoMap:ye,lightMap:ze,bumpMap:Ee,normalMap:We,displacementMap:m&&Oe,emissiveMap:Be,normalMapObjectSpace:We&&x.normalMapType===ey,normalMapTangentSpace:We&&x.normalMapType===Jx,metalnessMap:ht,roughnessMap:A,anisotropy:S,anisotropyMap:De,clearcoat:W,clearcoatMap:Te,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:ie,sheen:ne,sheenColorMap:_t,sheenRoughnessMap:He,specularMap:xe,specularColorMap:me,specularIntensityMap:ge,transmission:J,transmissionMap:je,thicknessMap:Pe,gradientMap:rt,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:N,alphaTest:le,alphaHash:z,combine:x.combine,mapUv:Ce&&p(x.map.channel),aoMapUv:ye&&p(x.aoMap.channel),lightMapUv:ze&&p(x.lightMap.channel),bumpMapUv:Ee&&p(x.bumpMap.channel),normalMapUv:We&&p(x.normalMap.channel),displacementMapUv:Oe&&p(x.displacementMap.channel),emissiveMapUv:Be&&p(x.emissiveMap.channel),metalnessMapUv:ht&&p(x.metalnessMap.channel),roughnessMapUv:A&&p(x.roughnessMap.channel),anisotropyMapUv:De&&p(x.anisotropyMap.channel),clearcoatMapUv:Te&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(x.sheenRoughnessMap.channel),specularMapUv:xe&&p(x.specularMap.channel),specularColorMapUv:me&&p(x.specularColorMap.channel),specularIntensityMapUv:ge&&p(x.specularIntensityMap.channel),transmissionMapUv:je&&p(x.transmissionMap.channel),thicknessMapUv:Pe&&p(x.thicknessMap.channel),alphaMapUv:N&&p(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(We||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(Ce||N),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ri,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:re&&x.extensions.derivatives===!0,extensionFragDepth:re&&x.extensions.fragDepth===!0,extensionDrawBuffers:re&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:re&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:re&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function _(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const te in x.defines)C.push(te),C.push(x.defines[te]);return x.isRawShaderMaterial===!1&&(g(C,x),M(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function g(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function M(x,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.instancingMorph&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.normalMapObjectSpace&&a.enable(7),C.normalMapTangentSpace&&a.enable(8),C.clearcoat&&a.enable(9),C.iridescence&&a.enable(10),C.alphaTest&&a.enable(11),C.vertexColors&&a.enable(12),C.vertexAlphas&&a.enable(13),C.vertexUv1s&&a.enable(14),C.vertexUv2s&&a.enable(15),C.vertexUv3s&&a.enable(16),C.vertexTangents&&a.enable(17),C.anisotropy&&a.enable(18),C.alphaHash&&a.enable(19),C.batching&&a.enable(20),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const C=y[x.type];let te;if(C){const Z=Wn[C];te=Cy.clone(Z.uniforms)}else te=x.uniforms;return te}function R(x,C){let te;for(let Z=0,L=f.length;Z<L;Z++){const Y=f[Z];if(Y.cacheKey===C){te=Y,++te.usedTimes;break}}return te===void 0&&(te=new j1(t,C,x,s),f.push(te)),te}function w(x){if(--x.usedTimes===0){const C=f.indexOf(x);f[C]=f[f.length-1],f.pop(),x.destroy()}}function P(x){l.remove(x)}function j(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:b,acquireProgram:R,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:j}}function K1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Z1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,v,y,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:y,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=y,u.group=p),e++,u}function a(h,d,m,v,y,p){const u=o(h,d,m,v,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,d,m,v,y,p){const u=o(h,d,m,v,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||Z1),i.length>1&&i.sort(d||Rp),r.length>1&&r.sort(d||Rp)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function Q1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cp,t.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function eT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tT=0;function nT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iT(t,e){const n=new J1,i=eT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new gt,a=new gt;function l(f,h){let d=0,m=0,v=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,u=0,_=0,g=0,M=0,b=0,R=0,w=0,P=0,j=0;f.sort(nT);const x=h===!0?Math.PI:1;for(let te=0,Z=f.length;te<Z;te++){const L=f[te],Y=L.color,X=L.intensity,$=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=Y.r*X*x,m+=Y.g*X*x,v+=Y.b*X*x;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],X);j++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=D,r.directionalShadowMatrix[y]=L.shadow.matrix,M++}r.directional[y]=O,y++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(Y).multiplyScalar(X*x),O.distance=$,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[u]=O;const V=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,V.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[u]=V.matrix,L.castShadow){const K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=D,R++}u++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(Y).multiplyScalar(X),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=O,_++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*x),O.distance=L.distance,O.decay=L.decay,L.castShadow){const V=L.shadow,K=i.get(L);K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=L.shadow.matrix,b++}r.point[p]=O,p++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar(X*x),O.groundColor.copy(L.groundColor).multiplyScalar(X*x),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==y||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==_||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==R||C.numSpotMaps!==w||C.numLightProbes!==j)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=_,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=j,C.directionalLength=y,C.pointLength=p,C.spotLength=u,C.rectAreaLength=_,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=R,C.numSpotMaps=w,C.numLightProbes=j,r.version=tT++)}function c(f,h){let d=0,m=0,v=0,y=0,p=0;const u=h.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const M=f[_];if(M.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),d++}else if(M.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const b=r.rectArea[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){const b=r.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function bp(t,e){const n=new iT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function rT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new bp(t,e),n.set(s,[l])):o>=a.length?(l=new bp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sT extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cT(t,e,n){let i=new y_;const r=new Ye,s=new Ye,o=new Lt,a=new sT({depthPacking:Qx}),l=new oT,c={},f=n.maxTextureSize,h={[Xi]:rn,[rn]:Xi,[ri]:ri},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:aT,fragmentShader:lT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ci(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let u=this.type;this.render=function(R,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const j=t.getRenderTarget(),x=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),te=t.state;te.setBlending(Hi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=u!==ti&&this.type===ti,L=u===ti&&this.type!==ti;for(let Y=0,X=R.length;Y<X;Y++){const $=R[Y],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||Z===!0||L===!0){const K=this.type!==ti?{minFilter:Wt,magFilter:Wt}:{};D.map!==null&&D.map.dispose(),D.map=new wr(r.x,r.y,K),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const V=D.getViewportCount();for(let K=0;K<V;K++){const se=D.getViewport(K);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),te.viewport(o),D.updateMatrices($,K),i=D.getFrustum(),M(w,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===ti&&_(D,P),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(j,x,C)};function _(R,w){const P=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wr(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,P,m,y,null)}function g(R,w,P,j){let x=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const te=x.uuid,Z=w.uuid;let L=c[te];L===void 0&&(L={},c[te]=L);let Y=L[Z];Y===void 0&&(Y=x.clone(),L[Z]=Y,w.addEventListener("dispose",b)),x=Y}if(x.visible=w.visible,x.wireframe=w.wireframe,j===ti?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const te=t.properties.get(x);te.light=P}return x}function M(R,w,P,j,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ti)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),L=R.material;if(Array.isArray(L)){const Y=Z.groups;for(let X=0,$=Y.length;X<$;X++){const D=Y[X],O=L[D.materialIndex];if(O&&O.visible){const V=g(R,O,j,x);R.onBeforeShadow(t,R,w,P,Z,V,D),t.renderBufferDirect(P,null,Z,V,R,D),R.onAfterShadow(t,R,w,P,Z,V,D)}}}else if(L.visible){const Y=g(R,L,j,x);R.onBeforeShadow(t,R,w,P,Z,Y,null),t.renderBufferDirect(P,null,Z,Y,R,null),R.onAfterShadow(t,R,w,P,Z,Y,null)}}const te=R.children;for(let Z=0,L=te.length;Z<L;Z++)M(te[Z],w,P,j,x)}function b(R){R.target.removeEventListener("dispose",b);for(const P in c){const j=c[P],x=R.target.uuid;x in j&&(j[x].dispose(),delete j[x])}}}function uT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const le=new Lt;let z=null;const re=new Lt(0,0,0,0);return{setMask:function(fe){z!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),z=fe)},setLocked:function(fe){N=fe},setClear:function(fe,Ve,Qe,bt,mn){mn===!0&&(fe*=bt,Ve*=bt,Qe*=bt),le.set(fe,Ve,Qe,bt),re.equals(le)===!1&&(t.clearColor(fe,Ve,Qe,bt),re.copy(le))},reset:function(){N=!1,z=null,re.set(-1,0,0,0)}}}function s(){let N=!1,le=null,z=null,re=null;return{setTest:function(fe){fe?pe(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(fe){le!==fe&&!N&&(t.depthMask(fe),le=fe)},setFunc:function(fe){if(z!==fe){switch(fe){case Rx:t.depthFunc(t.NEVER);break;case Cx:t.depthFunc(t.ALWAYS);break;case bx:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case Px:t.depthFunc(t.EQUAL);break;case Lx:t.depthFunc(t.GEQUAL);break;case Dx:t.depthFunc(t.GREATER);break;case Nx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}z=fe}},setLocked:function(fe){N=fe},setClear:function(fe){re!==fe&&(t.clearDepth(fe),re=fe)},reset:function(){N=!1,le=null,z=null,re=null}}}function o(){let N=!1,le=null,z=null,re=null,fe=null,Ve=null,Qe=null,bt=null,mn=null;return{setTest:function(Je){N||(Je?pe(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Je){le!==Je&&!N&&(t.stencilMask(Je),le=Je)},setFunc:function(Je,Ht,zn){(z!==Je||re!==Ht||fe!==zn)&&(t.stencilFunc(Je,Ht,zn),z=Je,re=Ht,fe=zn)},setOp:function(Je,Ht,zn){(Ve!==Je||Qe!==Ht||bt!==zn)&&(t.stencilOp(Je,Ht,zn),Ve=Je,Qe=Ht,bt=zn)},setLocked:function(Je){N=Je},setClear:function(Je){mn!==Je&&(t.clearStencil(Je),mn=Je)},reset:function(){N=!1,le=null,z=null,re=null,fe=null,Ve=null,Qe=null,bt=null,mn=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},m={},v=new WeakMap,y=[],p=null,u=!1,_=null,g=null,M=null,b=null,R=null,w=null,P=null,j=new qe(0,0,0),x=0,C=!1,te=null,Z=null,L=null,Y=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=O>=2);let K=null,se={};const we=t.getParameter(t.SCISSOR_BOX),H=t.getParameter(t.VIEWPORT),Q=new Lt().fromArray(we),ce=new Lt().fromArray(H);function Se(N,le,z,re){const fe=new Uint8Array(4),Ve=t.createTexture();t.bindTexture(N,Ve),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<z;Qe++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(le,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(le+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return Ve}const ve={};ve[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),pe(t.DEPTH_TEST),l.setFunc(al),Oe(!1),Be(lh),pe(t.CULL_FACE),Ee(Hi);function pe(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function $e(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Ce(N,le){return m[N]!==le?(t.bindFramebuffer(N,le),m[N]=le,i&&(N===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=le),N===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=le)),!0):!1}function I(N,le){let z=y,re=!1;if(N){z=v.get(le),z===void 0&&(z=[],v.set(le,z));const fe=N.textures;if(z.length!==fe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let Ve=0,Qe=fe.length;Ve<Qe;Ve++)z[Ve]=t.COLOR_ATTACHMENT0+Ve;z.length=fe.length,re=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,re=!0);if(re)if(n.isWebGL2)t.drawBuffers(z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ct(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const ye={[ur]:t.FUNC_ADD,[dx]:t.FUNC_SUBTRACT,[hx]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[dh]=t.MIN,ye[hh]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ye[dh]=N.MIN_EXT,ye[hh]=N.MAX_EXT)}const ze={[px]:t.ZERO,[mx]:t.ONE,[gx]:t.SRC_COLOR,[Fu]:t.SRC_ALPHA,[Mx]:t.SRC_ALPHA_SATURATE,[yx]:t.DST_COLOR,[vx]:t.DST_ALPHA,[_x]:t.ONE_MINUS_SRC_COLOR,[Ou]:t.ONE_MINUS_SRC_ALPHA,[Sx]:t.ONE_MINUS_DST_COLOR,[xx]:t.ONE_MINUS_DST_ALPHA,[Ex]:t.CONSTANT_COLOR,[Tx]:t.ONE_MINUS_CONSTANT_COLOR,[wx]:t.CONSTANT_ALPHA,[Ax]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(N,le,z,re,fe,Ve,Qe,bt,mn,Je){if(N===Hi){u===!0&&($e(t.BLEND),u=!1);return}if(u===!1&&(pe(t.BLEND),u=!0),N!==fx){if(N!==_||Je!==C){if((g!==ur||R!==ur)&&(t.blendEquation(t.FUNC_ADD),g=ur,R=ur),Je)switch(N){case ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.ONE,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ch:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,w=null,P=null,j.set(0,0,0),x=0,_=N,C=Je}return}fe=fe||le,Ve=Ve||z,Qe=Qe||re,(le!==g||fe!==R)&&(t.blendEquationSeparate(ye[le],ye[fe]),g=le,R=fe),(z!==M||re!==b||Ve!==w||Qe!==P)&&(t.blendFuncSeparate(ze[z],ze[re],ze[Ve],ze[Qe]),M=z,b=re,w=Ve,P=Qe),(bt.equals(j)===!1||mn!==x)&&(t.blendColor(bt.r,bt.g,bt.b,mn),j.copy(bt),x=mn),_=N,C=!1}function We(N,le){N.side===ri?$e(t.CULL_FACE):pe(t.CULL_FACE);let z=N.side===rn;le&&(z=!z),Oe(z),N.blending===ds&&N.transparent===!1?Ee(Hi):Ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const re=N.stencilWrite;c.setTest(re),re&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){te!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),te=N)}function Be(N){N!==lx?(pe(t.CULL_FACE),N!==Z&&(N===lh?t.cullFace(t.BACK):N===cx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),Z=N}function ht(N){N!==L&&(D&&t.lineWidth(N),L=N)}function A(N,le,z){N?(pe(t.POLYGON_OFFSET_FILL),(Y!==le||X!==z)&&(t.polygonOffset(le,z),Y=le,X=z)):$e(t.POLYGON_OFFSET_FILL)}function S(N){N?pe(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function W(N){N===void 0&&(N=t.TEXTURE0+$-1),K!==N&&(t.activeTexture(N),K=N)}function q(N,le,z){z===void 0&&(K===null?z=t.TEXTURE0+$-1:z=K);let re=se[z];re===void 0&&(re={type:void 0,texture:void 0},se[z]=re),(re.type!==N||re.texture!==le)&&(K!==z&&(t.activeTexture(z),K=z),t.bindTexture(N,le||ve[N]),re.type=N,re.texture=le)}function ne(){const N=se[K];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){Q.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function ge(N){ce.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function je(N,le){let z=h.get(le);z===void 0&&(z=new WeakMap,h.set(le,z));let re=z.get(N);re===void 0&&(re=t.getUniformBlockIndex(le,N.name),z.set(N,re))}function Pe(N,le){const re=h.get(le).get(N);f.get(le)!==re&&(t.uniformBlockBinding(le,re,N.__bindingPointIndex),f.set(le,re))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},K=null,se={},m={},v=new WeakMap,y=[],p=null,u=!1,_=null,g=null,M=null,b=null,R=null,w=null,P=null,j=new qe(0,0,0),x=0,C=!1,te=null,Z=null,L=null,Y=null,X=null,Q.set(0,0,t.canvas.width,t.canvas.height),ce.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:pe,disable:$e,bindFramebuffer:Ce,drawBuffers:I,useProgram:Ct,setBlending:Ee,setMaterial:We,setFlipSided:Oe,setCullFace:Be,setLineWidth:ht,setPolygonOffset:A,setScissorTest:S,activeTexture:W,bindTexture:q,unbindTexture:ne,compressedTexImage2D:J,compressedTexImage3D:De,texImage2D:He,texImage3D:xe,updateUBOMapping:je,uniformBlockBinding:Pe,texStorage2D:ie,texStorage3D:_t,texSubImage2D:Te,texSubImage3D:ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ne,scissor:me,viewport:ge,reset:rt}}function fT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,h=new WeakMap;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return v?new OffscreenCanvas(A,S):dl("canvas")}function p(A,S,W,q){let ne=1;const J=ht(A);if((J.width>q||J.height>q)&&(ne=q/Math.max(J.width,J.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const De=S?Wu:Math.floor,Te=De(ne*J.width),ae=De(ne*J.height);d===void 0&&(d=y(Te,ae));const ue=W?y(Te,ae):d;return ue.width=Te,ue.height=ae,ue.getContext("2d").drawImage(A,0,0,Te,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Te+"x"+ae+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function u(A){const S=ht(A);return Vh(S.width)&&Vh(S.height)}function _(A){return a?!1:A.wrapS!==Nn||A.wrapT!==Nn||A.minFilter!==Wt&&A.minFilter!==Kt}function g(A,S){return A.generateMipmaps&&S&&A.minFilter!==Wt&&A.minFilter!==Kt}function M(A){t.generateMipmap(A)}function b(A,S,W,q,ne=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=S;if(S===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8)),S===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),S===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8)),S===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),S===t.RGBA){const De=ne?ll:Ze.getTransfer(q);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=De===nt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(A,S,W){return g(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==Kt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){return A===Wt||A===ph||A===Bs?t.NEAREST:t.LINEAR}function P(A){const S=A.target;S.removeEventListener("dispose",P),x(S),S.isVideoTexture&&h.delete(S)}function j(A){const S=A.target;S.removeEventListener("dispose",j),te(S)}function x(A){const S=i.get(A);if(S.__webglInit===void 0)return;const W=A.source,q=m.get(W);if(q){const ne=q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(A),Object.keys(q).length===0&&m.delete(W)}i.remove(A)}function C(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const W=A.source,q=m.get(W);delete q[S.__cacheKey],o.memory.textures--}function te(A){const S=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ne=0;ne<S.__webglFramebuffer[q].length;ne++)t.deleteFramebuffer(S.__webglFramebuffer[q][ne]);else t.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)t.deleteFramebuffer(S.__webglFramebuffer[q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=A.textures;for(let q=0,ne=W.length;q<ne;q++){const J=i.get(W[q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(W[q])}i.remove(A)}let Z=0;function L(){Z=0}function Y(){const A=Z;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Z+=1,A}function X(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const W=i.get(A);if(A.isVideoTexture&&Oe(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(W,A,S);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+S)}function D(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ce(W,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+S)}function O(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){ce(W,A,S);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+S)}function V(A,S){const W=i.get(A);if(A.version>0&&W.__version!==A.version){Se(W,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+S)}const K={[Bu]:t.REPEAT,[Nn]:t.CLAMP_TO_EDGE,[Hu]:t.MIRRORED_REPEAT},se={[Wt]:t.NEAREST,[ph]:t.NEAREST_MIPMAP_NEAREST,[Bs]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},we={[ty]:t.NEVER,[ay]:t.ALWAYS,[ny]:t.LESS,[a_]:t.LEQUAL,[iy]:t.EQUAL,[oy]:t.GEQUAL,[ry]:t.GREATER,[sy]:t.NOTEQUAL};function H(A,S,W){if(S.type===si&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kt||S.magFilter===cc||S.magFilter===Bs||S.magFilter===mr||S.minFilter===Kt||S.minFilter===cc||S.minFilter===Bs||S.minFilter===mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(t.texParameteri(A,t.TEXTURE_WRAP_S,K[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,K[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,K[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,se[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,se[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Nn||S.wrapT!==Nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,we[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Bs&&S.minFilter!==mr||S.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Q(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let ne=m.get(q);ne===void 0&&(ne={},m.set(q,ne));const J=X(S);if(J!==A.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ne[J].usedTimes++;const De=ne[A.__cacheKey];De!==void 0&&(ne[A.__cacheKey].usedTimes--,De.usedTimes===0&&C(S)),A.__cacheKey=J,A.__webglTexture=ne[J].texture}return W}function ce(A,S,W){let q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=t.TEXTURE_3D);const ne=Q(A,S),J=S.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+W);const De=i.get(J);if(J.version!==De.__version||ne===!0){n.activeTexture(t.TEXTURE0+W);const Te=Ze.getPrimaries(Ze.workingColorSpace),ae=S.colorSpace===bi?null:Ze.getPrimaries(S.colorSpace),ue=S.colorSpace===bi||Te===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ne=_(S)&&u(S.image)===!1;let ie=p(S.image,Ne,!1,r.maxTextureSize);ie=Be(S,ie);const _t=u(ie)||a,He=s.convert(S.format,S.colorSpace);let xe=s.convert(S.type),me=b(S.internalFormat,He,xe,S.colorSpace,S.isVideoTexture);H(q,S,_t);let ge;const je=S.mipmaps,Pe=a&&S.isVideoTexture!==!0&&me!==o_,rt=De.__version===void 0||ne===!0,N=J.dataReady,le=R(S,ie,_t);if(S.isDepthTexture)me=t.DEPTH_COMPONENT,a?S.type===si?me=t.DEPTH_COMPONENT32F:S.type===Di?me=t.DEPTH_COMPONENT24:S.type===vr?me=t.DEPTH24_STENCIL8:me=t.DEPTH_COMPONENT16:S.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===xr&&me===t.DEPTH_COMPONENT&&S.type!==Vf&&S.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Di,xe=s.convert(S.type)),S.format===Es&&me===t.DEPTH_COMPONENT&&(me=t.DEPTH_STENCIL,S.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=vr,xe=s.convert(S.type))),rt&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,He,xe,null));else if(S.isDataTexture)if(je.length>0&&_t){Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,le,me,je[0].width,je[0].height);for(let z=0,re=je.length;z<re;z++)ge=je[z],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ge.width,ge.height,He,xe,ge.data):n.texImage2D(t.TEXTURE_2D,z,me,ge.width,ge.height,0,He,xe,ge.data);S.generateMipmaps=!1}else Pe?(rt&&n.texStorage2D(t.TEXTURE_2D,le,me,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,He,xe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,He,xe,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,me,je[0].width,je[0].height,ie.depth);for(let z=0,re=je.length;z<re;z++)ge=je[z],S.format!==Un?He!==null?Pe?N&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ge.width,ge.height,ie.depth,He,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,me,ge.width,ge.height,ie.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,ge.width,ge.height,ie.depth,He,xe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,me,ge.width,ge.height,ie.depth,0,He,xe,ge.data)}else{Pe&&rt&&n.texStorage2D(t.TEXTURE_2D,le,me,je[0].width,je[0].height);for(let z=0,re=je.length;z<re;z++)ge=je[z],S.format!==Un?He!==null?Pe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,ge.width,ge.height,He,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,z,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ge.width,ge.height,He,xe,ge.data):n.texImage2D(t.TEXTURE_2D,z,me,ge.width,ge.height,0,He,xe,ge.data)}else if(S.isDataArrayTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,me,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,He,xe,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,He,xe,ie.data);else if(S.isData3DTexture)Pe?(rt&&n.texStorage3D(t.TEXTURE_3D,le,me,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,He,xe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,He,xe,ie.data);else if(S.isFramebufferTexture){if(rt)if(Pe)n.texStorage2D(t.TEXTURE_2D,le,me,ie.width,ie.height);else{let z=ie.width,re=ie.height;for(let fe=0;fe<le;fe++)n.texImage2D(t.TEXTURE_2D,fe,me,z,re,0,He,xe,null),z>>=1,re>>=1}}else if(je.length>0&&_t){if(Pe&&rt){const z=ht(je[0]);n.texStorage2D(t.TEXTURE_2D,le,me,z.width,z.height)}for(let z=0,re=je.length;z<re;z++)ge=je[z],Pe?N&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,He,xe,ge):n.texImage2D(t.TEXTURE_2D,z,me,He,xe,ge);S.generateMipmaps=!1}else if(Pe){if(rt){const z=ht(ie);n.texStorage2D(t.TEXTURE_2D,le,me,z.width,z.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,xe,ie)}else n.texImage2D(t.TEXTURE_2D,0,me,He,xe,ie);g(S,_t)&&M(q),De.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Se(A,S,W){if(S.image.length!==6)return;const q=Q(A,S),ne=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const J=i.get(ne);if(ne.version!==J.__version||q===!0){n.activeTexture(t.TEXTURE0+W);const De=Ze.getPrimaries(Ze.workingColorSpace),Te=S.colorSpace===bi?null:Ze.getPrimaries(S.colorSpace),ae=S.colorSpace===bi||De===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,Ne=S.image[0]&&S.image[0].isDataTexture,ie=[];for(let z=0;z<6;z++)!ue&&!Ne?ie[z]=p(S.image[z],!1,!0,r.maxCubemapSize):ie[z]=Ne?S.image[z].image:S.image[z],ie[z]=Be(S,ie[z]);const _t=ie[0],He=u(_t)||a,xe=s.convert(S.format,S.colorSpace),me=s.convert(S.type),ge=b(S.internalFormat,xe,me,S.colorSpace),je=a&&S.isVideoTexture!==!0,Pe=J.__version===void 0||q===!0,rt=ne.dataReady;let N=R(S,_t,He);H(t.TEXTURE_CUBE_MAP,S,He);let le;if(ue){je&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ge,_t.width,_t.height);for(let z=0;z<6;z++){le=ie[z].mipmaps;for(let re=0;re<le.length;re++){const fe=le[re];S.format!==Un?xe!==null?je?rt&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,0,0,fe.width,fe.height,xe,fe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,ge,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,0,0,fe.width,fe.height,xe,me,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re,ge,fe.width,fe.height,0,xe,me,fe.data)}}}else{if(le=S.mipmaps,je&&Pe){le.length>0&&N++;const z=ht(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,ge,z.width,z.height)}for(let z=0;z<6;z++)if(Ne){je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ie[z].width,ie[z].height,xe,me,ie[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ge,ie[z].width,ie[z].height,0,xe,me,ie[z].data);for(let re=0;re<le.length;re++){const Ve=le[re].image[z].image;je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,0,0,Ve.width,Ve.height,xe,me,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,ge,Ve.width,Ve.height,0,xe,me,Ve.data)}}else{je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,xe,me,ie[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ge,xe,me,ie[z]);for(let re=0;re<le.length;re++){const fe=le[re];je?rt&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,0,0,xe,me,fe.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,re+1,ge,xe,me,fe.image[z])}}}g(S,He)&&M(t.TEXTURE_CUBE_MAP),J.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,W,q,ne,J){const De=s.convert(W.format,W.colorSpace),Te=s.convert(W.type),ae=b(W.internalFormat,De,Te,W.colorSpace);if(!i.get(S).__hasExternalTextures){const Ne=Math.max(1,S.width>>J),ie=Math.max(1,S.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,ae,Ne,ie,S.depth,0,De,Te,null):n.texImage2D(ne,J,ae,Ne,ie,0,De,Te,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,ne,i.get(W).__webglTexture,0,Ee(S)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,ne,i.get(W).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(A,S,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||We(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===si?q=t.DEPTH_COMPONENT32F:ne.type===Di&&(q=t.DEPTH_COMPONENT24));const J=Ee(S);We(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,q,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,q,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const q=Ee(S);W&&We(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):We(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const q=S.textures;for(let ne=0;ne<q.length;ne++){const J=q[ne],De=s.convert(J.format,J.colorSpace),Te=s.convert(J.type),ae=b(J.internalFormat,De,Te,J.colorSpace),ue=Ee(S);W&&We(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ae,S.width,S.height):We(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const q=i.get(S.depthTexture).__webglTexture,ne=Ee(S);if(S.depthTexture.format===xr)We(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(S.depthTexture.format===Es)We(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ce(A){const S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$e(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]=t.createRenderbuffer(),pe(S.__webglDepthbuffer[q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),pe(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(A,S,W){const q=i.get(A);S!==void 0&&ve(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ce(A)}function Ct(A){const S=A.texture,W=i.get(A),q=i.get(S);A.addEventListener("dispose",j);const ne=A.textures,J=A.isWebGLCubeRenderTarget===!0,De=ne.length>1,Te=u(A)||a;if(De||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=S.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)W.__webglFramebuffer[ae][ue]=t.createFramebuffer()}else W.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)W.__webglFramebuffer[ae]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(De)if(r.drawBuffers)for(let ae=0,ue=ne.length;ae<ue;ae++){const Ne=i.get(ne[ae]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&We(A)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ae=0;ae<ne.length;ae++){const ue=ne[ae];W.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ae]);const Ne=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),_t=b(ue.internalFormat,Ne,ie,ue.colorSpace,A.isXRRenderTarget===!0),He=Ee(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_t,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,W.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),H(t.TEXTURE_CUBE_MAP,S,Te);for(let ae=0;ae<6;ae++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ve(W.__webglFramebuffer[ae][ue],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ve(W.__webglFramebuffer[ae],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(S,Te)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let ae=0,ue=ne.length;ae<ue;ae++){const Ne=ne[ae],ie=i.get(Ne);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),H(t.TEXTURE_2D,Ne,Te),ve(W.__webglFramebuffer,A,Ne,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),g(Ne,Te)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,q.__webglTexture),H(ae,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ve(W.__webglFramebuffer[ue],A,S,t.COLOR_ATTACHMENT0,ae,ue);else ve(W.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ae,0);g(S,Te)&&M(ae),n.unbindTexture()}A.depthBuffer&&Ce(A)}function ye(A){const S=u(A)||a,W=A.textures;for(let q=0,ne=W.length;q<ne;q++){const J=W[q];if(g(J,S)){const De=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(J).__webglTexture;n.bindTexture(De,Te),M(De),n.unbindTexture()}}}function ze(A){if(a&&A.samples>0&&We(A)===!1){const S=A.textures,W=A.width,q=A.height;let ne=t.COLOR_BUFFER_BIT;const J=[],De=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(A),ae=S.length>1;if(ae)for(let ue=0;ue<S.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){J.push(t.COLOR_ATTACHMENT0+ue),A.depthBuffer&&J.push(De);const Ne=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;if(Ne===!1&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ae&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]),Ne===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[De]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[De])),ae){const ie=i.get(S[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,W,q,0,0,W,q,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<S.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ue]);const Ne=i.get(S[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}}function Ee(A){return Math.min(r.maxSamples,A.samples)}function We(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Be(A,S){const W=A.colorSpace,q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Gu||W!==Zi&&W!==bi&&(Ze.getTransfer(W)===nt?a===!1?e.has("EXT_sRGB")===!0&&q===Un?(A.format=Gu,A.minFilter=Kt,A.generateMipmaps=!1):S=c_.sRGBToLinear(S):(q!==Un||ne!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(f.width=A.naturalWidth||A.width,f.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(f.width=A.displayWidth,f.height=A.displayHeight):(f.width=A.width,f.height=A.height),f}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=D,this.setTexture3D=O,this.setTextureCube=V,this.rebindTextures=I,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=We}function dT(t,e,n){const i=n.isWebGL2;function r(s,o=bi){let a;const l=Ze.getTransfer(o);if(s===Vi)return t.UNSIGNED_BYTE;if(s===t_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===n_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Vx)return t.BYTE;if(s===Wx)return t.SHORT;if(s===Vf)return t.UNSIGNED_SHORT;if(s===e_)return t.INT;if(s===Di)return t.UNSIGNED_INT;if(s===si)return t.FLOAT;if(s===Eo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jx)return t.ALPHA;if(s===Un)return t.RGBA;if(s===Xx)return t.LUMINANCE;if(s===Yx)return t.LUMINANCE_ALPHA;if(s===xr)return t.DEPTH_COMPONENT;if(s===Es)return t.DEPTH_STENCIL;if(s===Gu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===qx)return t.RED;if(s===i_)return t.RED_INTEGER;if(s===$x)return t.RG;if(s===r_)return t.RG_INTEGER;if(s===s_)return t.RGBA_INTEGER;if(s===uc||s===fc||s===dc||s===hc)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mh||s===gh||s===_h||s===vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xh)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sh||s===Mh||s===Eh||s===Th||s===wh||s===Ah||s===Rh||s===Ch||s===bh||s===Ph||s===Lh||s===Dh||s===Nh||s===Uh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ch)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ph)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uh)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pc||s===Ih||s===Fh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===pc)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Kx||s===Oh||s===kh||s===zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===pc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ya;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _T{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Yi({extensions:{fragDepth:!0},vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ci(new Ll(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class vT extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,v=null;const y=new _T,p=n.getContextAttributes();let u=null,_=null;const g=[],M=[],b=new Ye;let R=null;const w=new yn;w.layers.enable(1),w.viewport=new Lt;const P=new yn;P.layers.enable(2),P.viewport=new Lt;const j=[w,P],x=new hT;x.layers.enable(1),x.layers.enable(2);let C=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=g[H];return Q===void 0&&(Q=new Hc,g[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=g[H];return Q===void 0&&(Q=new Hc,g[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=g[H];return Q===void 0&&(Q=new Hc,g[H]=Q),Q.getHandSpace()};function Z(H){const Q=M.indexOf(H.inputSource);if(Q===-1)return;const ce=g[Q];ce!==void 0&&(ce.update(H.inputSource,H.frame,c||o),ce.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",Y);for(let H=0;H<g.length;H++){const Q=M[H];Q!==null&&(M[H]=null,g[H].disconnect(Q))}C=null,te=null,y.reset(),e.setRenderTarget(u),m=null,d=null,h=null,r=null,_=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",L),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new wr(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ce=null,Se=null;p.depth&&(Se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=p.stencil?Es:xr,ce=p.stencil?vr:Di);const ve={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new wr(d.textureWidth,d.textureHeight,{format:Un,type:Vi,depthTexture:new M_(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const pe=e.properties.get(_);pe.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(H){for(let Q=0;Q<H.removed.length;Q++){const ce=H.removed[Q],Se=M.indexOf(ce);Se>=0&&(M[Se]=null,g[Se].disconnect(ce))}for(let Q=0;Q<H.added.length;Q++){const ce=H.added[Q];let Se=M.indexOf(ce);if(Se===-1){for(let pe=0;pe<g.length;pe++)if(pe>=M.length){M.push(ce),Se=pe;break}else if(M[pe]===null){M[pe]=ce,Se=pe;break}if(Se===-1)break}const ve=g[Se];ve&&ve.connect(ce)}}const X=new F,$=new F;function D(H,Q,ce){X.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const Se=X.distanceTo($),ve=Q.projectionMatrix.elements,pe=ce.projectionMatrix.elements,$e=ve[14]/(ve[10]-1),Ce=ve[14]/(ve[10]+1),I=(ve[9]+1)/ve[5],Ct=(ve[9]-1)/ve[5],ye=(ve[8]-1)/ve[0],ze=(pe[8]+1)/pe[0],Ee=$e*ye,We=$e*ze,Oe=Se/(-ye+ze),Be=Oe*-ye;Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Be),H.translateZ(Oe),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const ht=$e+Oe,A=Ce+Oe,S=Ee-Be,W=We+(Se-Be),q=I*Ce/A*ht,ne=Ct*Ce/A*ht;H.projectionMatrix.makePerspective(S,W,q,ne,ht,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function O(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;y.texture!==null&&(H.near=y.depthNear,H.far=y.depthFar),x.near=P.near=w.near=H.near,x.far=P.far=w.far=H.far,(C!==x.near||te!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,te=x.far,w.near=C,w.far=te,P.near=C,P.far=te,w.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const Q=H.parent,ce=x.cameras;O(x,Q);for(let Se=0;Se<ce.length;Se++)O(ce[Se],Q);ce.length===2?D(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),V(H,x,Q)};function V(H,Q,ce){ce===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(ce.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vu*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function se(H,Q){if(f=Q.getViewerPose(c||o),v=Q,f!==null){const ce=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Se=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,Se=!0);for(let pe=0;pe<ce.length;pe++){const $e=ce[pe];let Ce=null;if(m!==null)Ce=m.getViewport($e);else{const Ct=h.getViewSubImage(d,$e);Ce=Ct.viewport,pe===0&&(e.setRenderTargetTextures(_,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(_))}let I=j[pe];I===void 0&&(I=new yn,I.layers.enable(pe),I.viewport=new Lt,j[pe]=I),I.matrix.fromArray($e.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray($e.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),pe===0&&(x.matrix.copy(I.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Se===!0&&x.cameras.push(I)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const pe=h.getDepthInformation(ce[0]);pe&&pe.isValid&&pe.texture&&y.init(e,pe,r.renderState)}}for(let ce=0;ce<g.length;ce++){const Se=M[ce],ve=g[ce];Se!==null&&ve!==void 0&&ve.update(Se,Q,c||o)}y.render(e,x),K&&K(H,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),v=null}const we=new S_;we.setAnimationLoop(se),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}const sr=new gi,xT=new gt;function yT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,__(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,M=_.envMapRotation;if(g&&(p.envMap.value=g,sr.copy(M),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),p.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(sr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*b,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(_,b);const R=e.render.frame;s[_.id]!==R&&(d(_),s[_.id]=R)}function f(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),b=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,w=M.length;R<w;R++){const P=Array.isArray(M[R])?M[R]:[M[R]];for(let j=0,x=P.length;j<x;j++){const C=P[j];if(m(C,R,j,b)===!0){const te=C.__offset,Z=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let Y=0;Y<Z.length;Y++){const X=Z[Y],$=y(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,te+L,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,b){const R=_.value,w=g+"_"+M;if(b[w]===void 0)return typeof R=="number"||typeof R=="boolean"?b[w]=R:b[w]=R.clone(),!0;{const P=b[w];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return b[w]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function v(_){const g=_.uniforms;let M=0;const b=16;for(let w=0,P=g.length;w<P;w++){const j=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,C=j.length;x<C;x++){const te=j[x],Z=Array.isArray(te.value)?te.value:[te.value];for(let L=0,Y=Z.length;L<Y;L++){const X=Z[L],$=y(X),D=M%b;D!==0&&b-D<$.boundary&&(M+=b-D),te.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=M,M+=$.storage}}}const R=M%b;return R>0&&(M+=b-R),_.__size=M,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class C_{constructor(e={}){const{canvas:n=cy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this._useLegacyLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1;const g=this;let M=!1,b=0,R=0,w=null,P=-1,j=null;const x=new Lt,C=new Lt;let te=null;const Z=new qe(0);let L=0,Y=n.width,X=n.height,$=1,D=null,O=null;const V=new Lt(0,0,Y,X),K=new Lt(0,0,Y,X);let se=!1;const we=new y_;let H=!1,Q=!1,ce=null;const Se=new gt,ve=new Ye,pe=new F,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return w===null?$:1}let I=i;function Ct(E,U){for(let B=0;B<E.length;B++){const G=E[B],k=n.getContext(G,U);if(k!==null)return k}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",le,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),I=Ct(U,E),I===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,ze,Ee,We,Oe,Be,ht,A,S,W,q,ne,J,De,Te,ae,ue,Ne,ie,_t,He,xe,me,ge;function je(){ye=new RE(I),ze=new yE(I,ye,e),ye.init(ze),xe=new dT(I,ye,ze),Ee=new uT(I,ye,ze),We=new PE(I),Oe=new K1,Be=new fT(I,ye,Ee,Oe,ze,xe,We),ht=new ME(g),A=new AE(g),S=new Iy(I,ze),me=new vE(I,ye,S,ze),W=new CE(I,S,We,me),q=new UE(I,W,S,We),ie=new NE(I,ze,Be),ae=new SE(Oe),ne=new $1(g,ht,A,ye,ze,me,ae),J=new yT(g,Oe),De=new Q1,Te=new rT(ye,ze),Ne=new _E(g,ht,A,Ee,q,d,l),ue=new cT(g,q,ze),ge=new ST(I,We,ze,Ee),_t=new xE(I,ye,We,ze),He=new bE(I,ye,We,ze),We.programs=ne.programs,g.capabilities=ze,g.extensions=ye,g.properties=Oe,g.renderLists=De,g.shadowMap=ue,g.state=Ee,g.info=We}je();const Pe=new vT(g,I);this.xr=Pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(Y,X,!1))},this.getSize=function(E){return E.set(Y,X)},this.setSize=function(E,U,B=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,X=U,n.width=Math.floor(E*$),n.height=Math.floor(U*$),B===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Y*$,X*$).floor()},this.setDrawingBufferSize=function(E,U,B){Y=E,X=U,$=B,n.width=Math.floor(E*B),n.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,U,B,G){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,U,B,G),Ee.viewport(x.copy(V).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,U,B,G){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,U,B,G),Ee.scissor(C.copy(K).multiplyScalar($).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){Ee.setScissorTest(se=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,U=!0,B=!0){let G=0;if(E){let k=!1;if(w!==null){const de=w.texture.format;k=de===s_||de===r_||de===i_}if(k){const de=w.texture.type,_e=de===Vi||de===Di||de===Vf||de===vr||de===t_||de===n_,Me=Ne.getClearColor(),Ae=Ne.getClearAlpha(),ke=Me.r,be=Me.g,Le=Me.b;_e?(m[0]=ke,m[1]=be,m[2]=Le,m[3]=Ae,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=ke,v[1]=be,v[2]=Le,v[3]=Ae,I.clearBufferiv(I.COLOR,0,v))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),B&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",le,!1),De.dispose(),Te.dispose(),Oe.dispose(),ht.dispose(),A.dispose(),q.dispose(),me.dispose(),ge.dispose(),ne.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",mn),Pe.removeEventListener("sessionend",Je),ce&&(ce.dispose(),ce=null),Ht.stop()};function rt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=We.autoReset,U=ue.enabled,B=ue.autoUpdate,G=ue.needsUpdate,k=ue.type;je(),We.autoReset=E,ue.enabled=U,ue.autoUpdate=B,ue.needsUpdate=G,ue.type=k}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function z(E){const U=E.target;U.removeEventListener("dispose",z),re(U)}function re(E){fe(E),Oe.remove(E)}function fe(E){const U=Oe.get(E).programs;U!==void 0&&(U.forEach(function(B){ne.releaseProgram(B)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,G,k,de){U===null&&(U=$e);const _e=k.isMesh&&k.matrixWorld.determinant()<0,Me=D_(E,U,B,G,k);Ee.setMaterial(G,_e);let Ae=B.index,ke=1;if(G.wireframe===!0){if(Ae=W.getWireframeAttribute(B),Ae===void 0)return;ke=2}const be=B.drawRange,Le=B.attributes.position;let pt=be.start*ke,on=(be.start+be.count)*ke;de!==null&&(pt=Math.max(pt,de.start*ke),on=Math.min(on,(de.start+de.count)*ke)),Ae!==null?(pt=Math.max(pt,0),on=Math.min(on,Ae.count)):Le!=null&&(pt=Math.max(pt,0),on=Math.min(on,Le.count));const Tt=on-pt;if(Tt<0||Tt===1/0)return;me.setup(k,G,Me,B,Ae);let $n,at=_t;if(Ae!==null&&($n=S.get(Ae),at=He,at.setIndex($n)),k.isMesh)G.wireframe===!0?(Ee.setLineWidth(G.wireframeLinewidth*Ce()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(k.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Ee.setLineWidth(Ue*Ce()),k.isLineSegments?at.setMode(I.LINES):k.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else k.isPoints?at.setMode(I.POINTS):k.isSprite&&at.setMode(I.TRIANGLES);if(k.isBatchedMesh)at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)at.renderInstances(pt,Tt,k.count);else if(B.isInstancedBufferGeometry){const Ue=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Nl=Math.min(B.instanceCount,Ue);at.renderInstances(pt,Tt,Nl)}else at.render(pt,Tt)};function Ve(E,U,B){E.transparent===!0&&E.side===ri&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,Io(E,U,B),E.side=Xi,E.needsUpdate=!0,Io(E,U,B),E.side=ri):Io(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),p=Te.get(B),p.init(),_.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==B&&E.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(g._useLegacyLights);const G=new Set;return E.traverse(function(k){const de=k.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Me=de[_e];Ve(Me,B,k),G.add(Me)}else Ve(de,B,k),G.add(de)}),_.pop(),p=null,G},this.compileAsync=function(E,U,B=null){const G=this.compile(E,U,B);return new Promise(k=>{function de(){if(G.forEach(function(_e){Oe.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){k(E);return}setTimeout(de,10)}ye.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Qe=null;function bt(E){Qe&&Qe(E)}function mn(){Ht.stop()}function Je(){Ht.start()}const Ht=new S_;Ht.setAnimationLoop(bt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){Qe=E,Pe.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Pe.addEventListener("sessionstart",mn),Pe.addEventListener("sessionend",Je),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(U),U=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),p=Te.get(E,_.length),p.init(),_.push(p),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),we.setFromProjectionMatrix(Se),Q=this.localClippingEnabled,H=ae.init(this.clippingPlanes,Q),y=De.get(E,u.length),y.init(),u.push(y),zn(E,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,O),this.info.render.frame++,H===!0&&ae.beginShadows();const B=p.state.shadowsArray;if(ue.render(B,E,U),H===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Ne.render(y,E),p.setupLights(g._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let k=0,de=G.length;k<de;k++){const _e=G[k];Yf(y,E,_e,_e.viewport)}}else Yf(y,E,U);w!==null&&(Be.updateMultisampleRenderTarget(w),Be.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),me.resetDefaultState(),P=-1,j=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function zn(E,U,B,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||we.intersectsSprite(E)){G&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const _e=q.update(E),Me=E.material;Me.visible&&y.push(E,_e,Me,B,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||we.intersectsObject(E))){const _e=q.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),pe.copy(_e.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(Me)){const Ae=_e.groups;for(let ke=0,be=Ae.length;ke<be;ke++){const Le=Ae[ke],pt=Me[Le.materialIndex];pt&&pt.visible&&y.push(E,_e,pt,B,pe.z,Le)}}else Me.visible&&y.push(E,_e,Me,B,pe.z,null)}}const de=E.children;for(let _e=0,Me=de.length;_e<Me;_e++)zn(de[_e],U,B,G)}function Yf(E,U,B,G){const k=E.opaque,de=E.transmissive,_e=E.transparent;p.setupLightsView(B),H===!0&&ae.setGlobalState(g.clippingPlanes,B),de.length>0&&L_(k,de,U,B),G&&Ee.viewport(x.copy(G)),k.length>0&&Uo(k,U,B),de.length>0&&Uo(de,U,B),_e.length>0&&Uo(_e,U,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function L_(E,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const de=ze.isWebGL2;ce===null&&(ce=new wr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Eo:Vi,minFilter:mr,samples:de?4:0})),g.getDrawingBufferSize(ve),de?ce.setSize(ve.x,ve.y):ce.setSize(Wu(ve.x),Wu(ve.y));const _e=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(Z),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Me=g.toneMapping;g.toneMapping=Gi,Uo(E,B,G),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce);let Ae=!1;for(let ke=0,be=U.length;ke<be;ke++){const Le=U[ke],pt=Le.object,on=Le.geometry,Tt=Le.material,$n=Le.group;if(Tt.side===ri&&pt.layers.test(G.layers)){const at=Tt.side;Tt.side=rn,Tt.needsUpdate=!0,qf(pt,B,G,on,Tt,$n),Tt.side=at,Tt.needsUpdate=!0,Ae=!0}}Ae===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce)),g.setRenderTarget(_e),g.setClearColor(Z,L),g.toneMapping=Me}function Uo(E,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let k=0,de=E.length;k<de;k++){const _e=E[k],Me=_e.object,Ae=_e.geometry,ke=G===null?_e.material:G,be=_e.group;Me.layers.test(B.layers)&&qf(Me,U,B,Ae,ke,be)}}function qf(E,U,B,G,k,de){E.onBeforeRender(g,U,B,G,k,de),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(g,U,B,G,E,de),k.transparent===!0&&k.side===ri&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,g.renderBufferDirect(B,U,G,k,E,de),k.side=Xi,k.needsUpdate=!0,g.renderBufferDirect(B,U,G,k,E,de),k.side=ri):g.renderBufferDirect(B,U,G,k,E,de),E.onAfterRender(g,U,B,G,k,de)}function Io(E,U,B){U.isScene!==!0&&(U=$e);const G=Oe.get(E),k=p.state.lights,de=p.state.shadowsArray,_e=k.state.version,Me=ne.getParameters(E,k.state,de,U,B),Ae=ne.getProgramCacheKey(Me);let ke=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?A:ht).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",z),ke=new Map,G.programs=ke);let be=ke.get(Ae);if(be!==void 0){if(G.currentProgram===be&&G.lightsStateVersion===_e)return Kf(E,Me),be}else Me.uniforms=ne.getUniforms(E),E.onBuild(B,Me,g),E.onBeforeCompile(Me,g),be=ne.acquireProgram(Me,Ae),ke.set(Ae,be),G.uniforms=Me.uniforms;const Le=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ae.uniform),Kf(E,Me),G.needsLights=U_(E),G.lightsStateVersion=_e,G.needsLights&&(Le.ambientLightColor.value=k.state.ambient,Le.lightProbe.value=k.state.probe,Le.directionalLights.value=k.state.directional,Le.directionalLightShadows.value=k.state.directionalShadow,Le.spotLights.value=k.state.spot,Le.spotLightShadows.value=k.state.spotShadow,Le.rectAreaLights.value=k.state.rectArea,Le.ltc_1.value=k.state.rectAreaLTC1,Le.ltc_2.value=k.state.rectAreaLTC2,Le.pointLights.value=k.state.point,Le.pointLightShadows.value=k.state.pointShadow,Le.hemisphereLights.value=k.state.hemi,Le.directionalShadowMap.value=k.state.directionalShadowMap,Le.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Le.spotShadowMap.value=k.state.spotShadowMap,Le.spotLightMatrix.value=k.state.spotLightMatrix,Le.spotLightMap.value=k.state.spotLightMap,Le.pointShadowMap.value=k.state.pointShadowMap,Le.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=be,G.uniformsList=null,be}function $f(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Fa.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Kf(E,U){const B=Oe.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function D_(E,U,B,G,k){U.isScene!==!0&&(U=$e),Be.resetTextureUnits();const de=U.fog,_e=G.isMeshStandardMaterial?U.environment:null,Me=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zi,Ae=(G.isMeshStandardMaterial?A:ht).get(G.envMap||_e),ke=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,be=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!B.morphAttributes.position,pt=!!B.morphAttributes.normal,on=!!B.morphAttributes.color;let Tt=Gi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Tt=g.toneMapping);const $n=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=$n!==void 0?$n.length:0,Ue=Oe.get(G),Nl=p.state.lights;if(H===!0&&(Q===!0||E!==j)){const gn=E===j&&G.id===P;ae.setState(G,E,gn)}let st=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Nl.state.version||Ue.outputColorSpace!==Me||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==Ae||G.fog===!0&&Ue.fog!==de||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ae.numPlanes||Ue.numIntersection!==ae.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==be||Ue.morphTargets!==Le||Ue.morphNormals!==pt||Ue.morphColors!==on||Ue.toneMapping!==Tt||ze.isWebGL2===!0&&Ue.morphTargetsCount!==at)&&(st=!0):(st=!0,Ue.__version=G.version);let Qi=Ue.currentProgram;st===!0&&(Qi=Io(G,U,k));let Zf=!1,Ls=!1,Ul=!1;const Ut=Qi.getUniforms(),Ji=Ue.uniforms;if(Ee.useProgram(Qi.program)&&(Zf=!0,Ls=!0,Ul=!0),G.id!==P&&(P=G.id,Ls=!0),Zf||j!==E){Ut.setValue(I,"projectionMatrix",E.projectionMatrix),Ut.setValue(I,"viewMatrix",E.matrixWorldInverse);const gn=Ut.map.cameraPosition;gn!==void 0&&gn.setValue(I,pe.setFromMatrixPosition(E.matrixWorld)),ze.logarithmicDepthBuffer&&Ut.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ut.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Ls=!0,Ul=!0)}if(k.isSkinnedMesh){Ut.setOptional(I,k,"bindMatrix"),Ut.setOptional(I,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(ze.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ut.setValue(I,"boneTexture",gn.boneTexture,Be)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Ut.setOptional(I,k,"batchingTexture"),Ut.setValue(I,"batchingTexture",k._matricesTexture,Be));const Il=B.morphAttributes;if((Il.position!==void 0||Il.normal!==void 0||Il.color!==void 0&&ze.isWebGL2===!0)&&ie.update(k,B,Qi),(Ls||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,Ut.setValue(I,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ji.envMap.value=Ae,Ji.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Ls&&(Ut.setValue(I,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&N_(Ji,Ul),de&&G.fog===!0&&J.refreshFogUniforms(Ji,de),J.refreshMaterialUniforms(Ji,G,$,X,ce),Fa.upload(I,$f(Ue),Ji,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fa.upload(I,$f(Ue),Ji,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ut.setValue(I,"center",k.center),Ut.setValue(I,"modelViewMatrix",k.modelViewMatrix),Ut.setValue(I,"normalMatrix",k.normalMatrix),Ut.setValue(I,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const gn=G.uniformsGroups;for(let Fl=0,I_=gn.length;Fl<I_;Fl++)if(ze.isWebGL2){const Qf=gn[Fl];ge.update(Qf,Qi),ge.bind(Qf,Qi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qi}function N_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function U_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,B){Oe.get(E.texture).__webglTexture=U,Oe.get(E.depthTexture).__webglTexture=B;const G=Oe.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Oe.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){w=E,b=U,R=B;let G=!0,k=null,de=!1,_e=!1;if(E){const Ae=Oe.get(E);Ae.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Ae.__webglFramebuffer===void 0?Be.setupRenderTarget(E):Ae.__hasExternalTextures&&Be.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(_e=!0);const be=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[U])?k=be[U][B]:k=be[U],de=!0):ze.isWebGL2&&E.samples>0&&Be.useMultisampledRTT(E)===!1?k=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[B]:k=be,x.copy(E.viewport),C.copy(E.scissor),te=E.scissorTest}else x.copy(V).multiplyScalar($).floor(),C.copy(K).multiplyScalar($).floor(),te=se;if(Ee.bindFramebuffer(I.FRAMEBUFFER,k)&&ze.drawBuffers&&G&&Ee.drawBuffers(E,k),Ee.viewport(x),Ee.scissor(C),Ee.setScissorTest(te),de){const Ae=Oe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,B)}else if(_e){const Ae=Oe.get(E.texture),ke=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,B||0,ke)}P=-1},this.readRenderTargetPixels=function(E,U,B,G,k,de,_e){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Ee.bindFramebuffer(I.FRAMEBUFFER,Me);try{const Ae=E.texture,ke=Ae.format,be=Ae.type;if(ke!==Un&&xe.convert(ke)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=be===Eo&&(ye.has("EXT_color_buffer_half_float")||ze.isWebGL2&&ye.has("EXT_color_buffer_float"));if(be!==Vi&&xe.convert(be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===si&&(ze.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&B>=0&&B<=E.height-k&&I.readPixels(U,B,G,k,xe.convert(ke),xe.convert(be),de)}finally{const Ae=w!==null?Oe.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(E,U,B=0){const G=Math.pow(2,-B),k=Math.floor(U.image.width*G),de=Math.floor(U.image.height*G);Be.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,E.x,E.y,k,de),Ee.unbindTexture()},this.copyTextureToTexture=function(E,U,B,G=0){const k=U.image.width,de=U.image.height,_e=xe.convert(B.format),Me=xe.convert(B.type);Be.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,E.x,E.y,k,de,_e,Me,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,_e,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,E.x,E.y,_e,Me,U.image),G===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B,G,k=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=Math.round(E.max.x-E.min.x),_e=Math.round(E.max.y-E.min.y),Me=E.max.z-E.min.z+1,Ae=xe.convert(G.format),ke=xe.convert(G.type);let be;if(G.isData3DTexture)Be.setTexture3D(G,0),be=I.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)Be.setTexture2DArray(G,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),on=I.getParameter(I.UNPACK_SKIP_PIXELS),Tt=I.getParameter(I.UNPACK_SKIP_ROWS),$n=I.getParameter(I.UNPACK_SKIP_IMAGES),at=B.isCompressedTexture?B.mipmaps[k]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(be,k,U.x,U.y,U.z,de,_e,Me,Ae,ke,at.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(be,k,U.x,U.y,U.z,de,_e,Me,Ae,at.data):I.texSubImage3D(be,k,U.x,U.y,U.z,de,_e,Me,Ae,ke,at),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,on),I.pixelStorei(I.UNPACK_SKIP_ROWS,Tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$n),k===0&&G.generateMipmaps&&I.generateMipmap(be),Ee.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){b=0,R=0,w=null,Ee.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wf?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===Pl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MT extends C_{}MT.prototype.isWebGL1Renderer=!0;class ET extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class b_ extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pp=new F,Lp=new F,Dp=new gt,Gc=new jf,Sa=new Do;class TT extends Xt{constructor(e=new kn,n=new b_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pp.fromBufferAttribute(n,r-1),Lp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pp.distanceTo(Lp);e.setAttribute("lineDistance",new fi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;Dp.copy(r).invert(),Gc.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,f=new F,h=new F,d=new F,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=u,M=_-1;g<M;g+=m){const b=v.getX(g),R=v.getX(g+1);if(c.fromBufferAttribute(p,b),f.fromBufferAttribute(p,R),Gc.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||n.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=u,M=_-1;g<M;g+=m){if(c.fromBufferAttribute(p,g),f.fromBufferAttribute(p,g+1),Gc.distanceSqToSegment(c,f,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||n.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Np=new F,Up=new F;class wT extends TT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Np.fromBufferAttribute(n,r),Up.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Np.distanceTo(Up);e.setAttribute("lineDistance",new fi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P_ extends bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ip=new gt,Xu=new jf,Ma=new Do,Ea=new F;class AT extends Xt{constructor(e=new kn,n=new P_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ma.radius+=s,e.ray.intersectsSphere(Ma)===!1)return;Ip.copy(r).invert(),Xu.copy(e.ray).applyMatrix4(Ip);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,y=m;v<y;v++){const p=c.getX(v);Ea.fromBufferAttribute(h,p),Fp(Ea,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,y=m;v<y;v++)Ea.fromBufferAttribute(h,v),Fp(Ea,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fp(t,e,n,i,r,s,o){const a=Xu.distanceSqToPoint(t);if(a<n){const l=new F;Xu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);function RT(){const t=lt.useRef(null),e=lt.useRef({x:0,y:0});return lt.useEffect(()=>{const n=t.current;if(!n)return;const i=new C_({canvas:n,alpha:!0,antialias:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2));const r=()=>n.clientWidth,s=()=>n.clientHeight;i.setSize(r(),s(),!1);const o=new ET,a=new yn(55,r()/s(),.1,100);a.position.set(0,0,12);const l=220,c=9,f=2.6,h=3500,d=new Float32Array(l*3),m=new Float32Array(l*3);for(let j=0;j<l;j++)d[j*3]=(Math.random()-.5)*c*2,d[j*3+1]=(Math.random()-.5)*c*2,d[j*3+2]=(Math.random()-.5)*c*2,m[j*3]=(Math.random()-.5)*.007,m[j*3+1]=(Math.random()-.5)*.007,m[j*3+2]=(Math.random()-.5)*.005;const v=new kn;v.setAttribute("position",new En(d,3));const y=new P_({color:1920728,size:.075,sizeAttenuation:!0,transparent:!0,opacity:.8});o.add(new AT(v,y));const p=new Float32Array(h*6),u=new kn;u.setAttribute("position",new En(p,3));const _=new b_({color:223649,transparent:!0,opacity:.25}),g=new wT(u,_);o.add(g);const M=j=>{e.current.x=(j.clientX/window.innerWidth-.5)*2,e.current.y=(j.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",M,{passive:!0});const b=()=>{i.setSize(r(),s(),!1),a.aspect=r()/s(),a.updateProjectionMatrix()};window.addEventListener("resize",b);let R;const w=f*f,P=()=>{R=requestAnimationFrame(P);for(let x=0;x<l;x++)d[x*3]+=m[x*3],d[x*3+1]+=m[x*3+1],d[x*3+2]+=m[x*3+2],Math.abs(d[x*3])>c&&(m[x*3]*=-1),Math.abs(d[x*3+1])>c&&(m[x*3+1]*=-1),Math.abs(d[x*3+2])>c&&(m[x*3+2]*=-1);v.attributes.position.needsUpdate=!0;let j=0;e:for(let x=0;x<l;x++)for(let C=x+1;C<l;C++){const te=d[x*3]-d[C*3],Z=d[x*3+1]-d[C*3+1],L=d[x*3+2]-d[C*3+2];if(te*te+Z*Z+L*L<w&&(p[j++]=d[x*3],p[j++]=d[x*3+1],p[j++]=d[x*3+2],p[j++]=d[C*3],p[j++]=d[C*3+1],p[j++]=d[C*3+2],j>=h*6))break e}u.attributes.position.needsUpdate=!0,u.setDrawRange(0,j/3),a.position.x+=(e.current.x*1.8-a.position.x)*.025,a.position.y+=(-e.current.y*1.8-a.position.y)*.025,a.lookAt(o.position),i.render(o,a)};return P(),()=>{cancelAnimationFrame(R),window.removeEventListener("mousemove",M),window.removeEventListener("resize",b),v.dispose(),u.dispose(),y.dispose(),_.dispose(),i.dispose()}},[]),T.jsxs("section",{className:"hero",id:"hero",children:[T.jsx("canvas",{ref:t,className:"hero-canvas","aria-hidden":"true"}),T.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"radial-gradient(ellipse 74% 64% at 50% 50%, rgba(210,227,252,0) 24%, rgba(241,248,255,1) 100%)",pointerEvents:"none",zIndex:1}}),T.jsxs("div",{className:"hero-content",children:[T.jsx("p",{className:"hero-kicker",children:"The transistor"}),T.jsxs("h1",{className:"hero-title",children:["The invention that"," ",T.jsx("span",{className:"hero-accent",children:"changes everything"}),T.jsx("br",{}),T.jsx("span",{className:"hero-dayline",children:"every single day"})]})]}),T.jsx("div",{className:"hero-scroll","aria-hidden":"true",children:"scroll to explore ↓"})]})}const Vc=[{id:1,year:1947,date:"December 23, 1947",title:"The Point-Contact Transistor",subtitle:"John Bardeen & Walter Brattain — Bell Labs, Murray Hill, NJ",description:"Two gold-foil contacts, just 50 micrometers apart, pressed against a germanium crystal. A small signal went in — and a larger one came out. Bardeen and Brattain had demonstrated solid-state amplification for the first time, replacing fragile vacuum tubes with something the size of a fingertip.",impact:"The first transistor — proving that solid-state devices could amplify, not just detect.",refs:[1,2],color:"#6366f1"},{id:2,year:1948,date:"January 23, 1948",title:"The Bipolar Junction Transistor",subtitle:"William Shockley — Bell Labs, Murray Hill, NJ",description:"Shockley led the Bell Labs research group and shared the 1956 Nobel Prize with Bardeen and Brattain, but the specific point-contact transistor was their experimental work. Soon after that result, he worked out the bipolar junction transistor concept while staying in a hotel room during a period of intense competition inside the group. The three-layer design was more reliable, easier to mass-produce, and became the dominant transistor of the 1950s and 60s.",impact:"All three — Bardeen, Brattain, and Shockley — shared the 1956 Nobel Prize in Physics for their transistor research.",refs:[3],color:"#8b5cf6"},{id:3,year:1954,date:"May 10, 1954",title:"The Silicon Transistor",subtitle:"Gordon Teal — Texas Instruments, Dallas, TX",description:"Germanium transistors failed above 75°C — useless for most real-world environments. At a conference, Teal dunked a germanium radio into hot oil — it went silent — then played the same music through his silicon transistor in the same boiling oil. It kept playing. Silicon's higher operating temperature and abundance made germanium obsolete overnight.",impact:"Silicon replaced germanium as the semiconductor material of choice and has held that position for 70 years.",refs:[4],color:"#06b6d4"},{id:4,year:1958,date:"September 12, 1958",title:"The Integrated Circuit",subtitle:"Jack Kilby (TI) & Robert Noyce (Fairchild) — independently",description:"What if an entire circuit — transistors, resistors, capacitors — could be built on a single piece of silicon, without any connecting wires? Kilby proved it at TI in September 1958; Noyce independently invented a cleaner, fully planar version at Fairchild. The IC collapsed the cost of electronics by orders of magnitude.",impact:"The integrated circuit is arguably the most economically significant invention of the 20th century.",refs:[5,6],color:"#10b981"},{id:5,year:1959,date:"1959",title:"The MOSFET",subtitle:"Mohamed Atalla & Dawon Kahng — Bell Labs, Murray Hill, NJ",description:"Instead of a current controlling a current (the BJT approach), Atalla and Kahng's metal-oxide-semiconductor field-effect transistor uses a voltage applied through an insulating oxide to switch electron flow. It draws near-zero power when idle, scales to smaller sizes more easily, and can be packed far more densely than any prior design.",impact:"The MOSFET is the fundamental unit of all modern digital logic. Your phone contains roughly 15 billion of them.",refs:[7],color:"#f59e0b"},{id:6,year:1962,date:"1962",title:"The First Visible-Light LED",subtitle:"Nick Holonyak Jr. — General Electric, Syracuse, NY",description:"LEDs existed before 1962, but only emitting invisible infrared light. Holonyak's gallium arsenide phosphide junction emitted visible red light — the first LED you could actually see. At the time, he publicly predicted LEDs would one day replace incandescent bulbs entirely.",impact:"He was right — it took 50 years. LEDs now light our homes, backlight every screen, and enable all fiber-optic communication.",refs:[8],color:"#ef4444"},{id:7,year:1963,date:"1963",title:"CMOS — The Low-Power Switch",subtitle:"Frank Wanlass — Fairchild Semiconductor",description:"Every switching transistor wastes power. Wanlass found that pairing an N-channel and P-channel MOSFET — so one turns on only when the other turns off — draws near-zero current when idle. He called it Complementary MOS (CMOS) and demonstrated it dissipated roughly 1/1000th the power of existing logic families.",impact:"Without CMOS, every chip in your phone would generate enough heat to destroy itself. It is the reason portable electronics exist.",refs:[9],color:"#0ea5e9"},{id:8,year:1966,date:"1966",title:"DRAM",subtitle:"Robert H. Dennard — IBM T.J. Watson Research Center",description:"One transistor plus one capacitor equals one bit of data. The capacitor holds charge (1) or doesn't (0); the transistor lets you access it. Dennard's one-transistor cell was so compact that billions could be packed on a single chip, replacing the large and expensive magnetic-core memory of the era.",impact:"DRAM remains the dominant technology for computer main memory worldwide — unchanged in fundamental principle after nearly 60 years.",refs:[10],color:"#a78bfa"},{id:9,year:1971,date:"November 15, 1971",title:"The First Microprocessor",subtitle:"Faggin, Hoff & Mazor — Intel, Santa Clara, CA",description:"The Intel 4004 put an entire CPU — arithmetic unit, registers, and control logic — onto a single chip. 2,300 transistors. 4-bit. 740 kHz. Designed for a Japanese calculator, its creators quickly saw they had built a general-purpose computing engine that anyone could program.",impact:"The microprocessor made personal computing possible. The 4004 ran at 740 kHz; today's chips run at 5 GHz with 50 billion transistors — in the same footprint.",refs:[11],color:"#6366f1"},{id:10,year:1984,date:"1984",title:"Flash Memory",subtitle:"Fujio Masuoka — Toshiba Corporation, Japan",description:"Masuoka invented a transistor with two gates: a normal control gate on top and a 'floating' gate surrounded by oxide on all sides. Push electrons into the floating gate and they stay there without any power — storing data indefinitely. Erasing all cells at once was nearly instantaneous, like a camera flash. Toshiba's management initially dismissed the idea.",impact:"Every SSD, USB drive, and smartphone storage chip is built on Masuoka's floating-gate principle. Flash memory changed how the world stores information.",refs:[12],color:"#f97316"},{id:11,year:1993,date:"March 22, 1993",title:"The Pentium Processor",subtitle:"Intel — Santa Clara, CA",description:"3.1 million transistors. Dual integer pipelines. A dedicated floating-point unit. The Pentium ran at 60–66 MHz — fast enough for real-time audio, early 3D graphics, and the first wave of web browsers. 'Intel Inside' became the most recognizable ingredient brand in history, and the x86 architecture the Pentium ran would dominate for the next 30 years.",impact:"The Pentium generation brought workstation-class performance to the home, triggering the 1990s PC revolution.",refs:[12],color:"#6366f1"},{id:12,year:1998,date:"1998",title:"Copper Interconnects",subtitle:"IBM — East Fishkill, NY",description:"Since the 1960s, chips had used aluminum to wire transistors together. IBM replaced it with copper — twice as conductive — allowing narrower traces with less resistance and less heat. The transition required an entirely new manufacturing process, since copper can't be etched the way aluminum can. But the gains unlocked another decade of scaling.",impact:"Every high-performance chip made since 1998 uses copper wiring. A quiet materials change that enabled the internet age.",refs:[12],color:"#b87333"},{id:13,year:2007,date:"2007",title:"High-κ / Metal Gate",subtitle:"Intel — 45 nm process node",description:"Intel's 45nm generation replaced the SiO₂ gate dielectric — essentially unchanged since 1959 — with hafnium oxide (HfO₂, κ ≈ 25 vs. SiO₂'s 3.9). A thicker HfO₂ layer delivers the same gate capacitance as a 1nm SiO₂ layer, but with 10× less quantum-tunneling leakage. The metal gate replaced polysilicon at the same time, eliminating a related performance loss.",impact:"The largest material change in transistors in 50 years, enabling further scaling when the prior approach had hit a physical wall.",refs:[13,18],color:"#8b5cf6"},{id:14,year:2011,date:"April 2011",title:"FinFET — Transistors Go 3D",subtitle:"Intel — 22 nm Tri-Gate process",description:"Planar transistors were leaking current they shouldn't — the flat gate had too little control over a short, shallow channel. Intel's solution: stand the silicon channel upright into a thin fin and wrap the gate around three sides. The result was 50% lower active power at equivalent performance, or 37% higher performance at equivalent power.",impact:"FinFETs broke through the planar transistor wall and dominated high-performance chips from 2012 through roughly 2022.",refs:[13],color:"#06b6d4"},{id:15,year:2022,date:"2022 – Present",title:"Gate-All-Around (GAA)",subtitle:"Samsung (3 nm), TSMC & Intel (2 nm)",description:"FinFETs have reached their own scaling limit. GAA transistors replace the vertical fin with horizontal silicon nanosheets stacked on top of each other, with gate material wrapping all four sides of every sheet. Samsung shipped their version (MBCFET) at 3nm in 2022; TSMC and Intel are following at 2nm.",impact:"At 2nm, chips pack ~100 million transistors per mm². GAA is the current frontier — powering the AI accelerators reshaping computing today.",refs:[14],color:"#10b981"}],Op=9e3,CT={1:{badge:"Birth of the transistor"},2:{badge:"Manufacturing breakthrough"},3:{badge:"Material transition"},4:{badge:"Integration era begins"},5:{badge:"Modern switch is born"},6:{badge:"Semiconductor light"},7:{badge:"Low-power logic"},8:{badge:"Memory at scale"},9:{badge:"CPU on a chip"},10:{badge:"Non-volatile storage"},11:{badge:"Personal-computing boom"},12:{badge:"Interconnect upgrade"},13:{badge:"Leakage wall solved"},14:{badge:"3D transistor era"},15:{badge:"Current frontier"}},bT={1:"The first transistor proved a tiny solid-state device could boost a weak signal.",2:"A cleaner transistor design made mass production possible and accelerated adoption.",3:"Switching from germanium to silicon made transistors rugged enough for daily products.",4:"Multiple components were combined onto one chip, collapsing size and cost.",5:"MOSFETs enabled dense, low-power digital logic and became the dominant transistor type.",6:"The first visible LED turned semiconductor physics into practical light you could see.",7:"CMOS drastically reduced idle power, which made modern portable electronics practical.",8:"A one-transistor, one-capacitor memory cell made high-density RAM possible.",9:"An entire CPU on one chip started the general-purpose microprocessor era.",10:"Floating-gate transistors stored data without power, enabling flash memory.",11:"Desktop chips reached performance levels that drove mainstream consumer computing.",12:"Copper wiring reduced resistance, helping chips keep scaling without overheating.",13:"High-k dielectrics and metal gates reduced leakage when old gate stacks hit limits.",14:"FinFET moved channels into 3D fins for better control at smaller sizes.",15:"Gate-all-around wraps the channel fully, extending scaling beyond FinFET."};function PT(t){return t.replace(/^The\s+/,"").replace(/\s+/g," ").trim()}function LT(t){const e=t.match(/^[^.]+\./);return e?e[0]:t}function DT({eventId:t,accent:e}){switch(t){case 1:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"84",ry:"14",fill:"#020617",fillOpacity:"0.45"}),T.jsx("rect",{x:"104",y:"130",width:"152",height:"48",rx:"10",fill:"#1e293b",stroke:"#475569"}),T.jsx("line",{x1:"124",y1:"74",x2:"154",y2:"130",stroke:"#e2e8f0",strokeWidth:"4",strokeLinecap:"round"}),T.jsx("line",{x1:"236",y1:"130",x2:"266",y2:"74",stroke:"#e2e8f0",strokeWidth:"4",strokeLinecap:"round"}),T.jsx("circle",{cx:"154",cy:"130",r:"6",fill:e}),T.jsx("circle",{cx:"236",cy:"130",r:"6",fill:e}),T.jsx("line",{x1:"176",y1:"178",x2:"176",y2:"214",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("line",{x1:"204",y1:"178",x2:"204",y2:"214",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("text",{x:"180",y:"60",textAnchor:"middle",fill:"#93c5fd",fontSize:"13",children:"Point-contact transistor"})]});case 2:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"88",ry:"12",fill:"#020617",fillOpacity:"0.4"}),T.jsx("rect",{x:"110",y:"74",width:"140",height:"32",rx:"8",fill:"#1d4ed8"}),T.jsx("rect",{x:"110",y:"108",width:"140",height:"24",rx:"6",fill:"#93c5fd"}),T.jsx("rect",{x:"110",y:"134",width:"140",height:"32",rx:"8",fill:"#1d4ed8"}),T.jsx("text",{x:"180",y:"95",textAnchor:"middle",fill:"#e2e8f0",fontSize:"14",fontWeight:"700",children:"N"}),T.jsx("text",{x:"180",y:"124",textAnchor:"middle",fill:"#0f172a",fontSize:"13",fontWeight:"700",children:"P"}),T.jsx("text",{x:"180",y:"156",textAnchor:"middle",fill:"#e2e8f0",fontSize:"14",fontWeight:"700",children:"N"}),T.jsx("line",{x1:"78",y1:"120",x2:"110",y2:"120",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("line",{x1:"180",y1:"52",x2:"180",y2:"74",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("line",{x1:"180",y1:"166",x2:"180",y2:"198",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("text",{x:"180",y:"44",textAnchor:"middle",fill:"#bfdbfe",fontSize:"13",children:"Bipolar transistor"})]});case 3:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"88",ry:"12",fill:"#020617",fillOpacity:"0.45"}),T.jsx("ellipse",{cx:"180",cy:"134",rx:"86",ry:"44",fill:"#334155",stroke:"#94a3b8",strokeWidth:"2.2"}),T.jsx("ellipse",{cx:"180",cy:"128",rx:"78",ry:"38",fill:"#475569"}),T.jsx("ellipse",{cx:"160",cy:"116",rx:"20",ry:"10",fill:"#cbd5e1",fillOpacity:"0.36"}),T.jsx("ellipse",{cx:"180",cy:"134",rx:"56",ry:"26",fill:"none",stroke:"#e2e8f0",strokeOpacity:"0.35"}),T.jsx("text",{x:"180",y:"62",textAnchor:"middle",fill:"#cbd5e1",fontSize:"13",children:"Silicon wafer"})]});case 4:return T.jsxs("g",{children:[T.jsx("rect",{x:"108",y:"68",width:"144",height:"112",rx:"18",fill:"#0b1324",stroke:e,strokeWidth:"2.2"}),[0,1,2,3,4,5].map(n=>T.jsx("rect",{x:"96",y:82+n*15,width:"10",height:"7",rx:"2",fill:"#e2e8f0"},`lt${n}`)),[0,1,2,3,4,5].map(n=>T.jsx("rect",{x:"252",y:82+n*15,width:"10",height:"7",rx:"2",fill:"#e2e8f0"},`rt${n}`)),T.jsx("rect",{x:"128",y:"88",width:"104",height:"72",rx:"10",fill:"#111827"}),[0,1,2].map(n=>[0,1,2].map(i=>T.jsx("rect",{x:138+n*30,y:98+i*20,width:"16",height:"14",rx:"3",fill:"#1e3a5f",stroke:"#7dd3fc",strokeOpacity:"0.5"},`${n}${i}`))),T.jsx("text",{x:"180",y:"52",textAnchor:"middle",fill:"#bfdbfe",fontSize:"13",children:"Integrated circuit"})]});case 5:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"202",rx:"90",ry:"12",fill:"#020617",fillOpacity:"0.42"}),T.jsx("rect",{x:"92",y:"154",width:"176",height:"30",rx:"8",fill:"#334155"}),T.jsx("rect",{x:"92",y:"126",width:"44",height:"28",rx:"6",fill:"#f59e0b"}),T.jsx("rect",{x:"224",y:"126",width:"44",height:"28",rx:"6",fill:"#f59e0b"}),T.jsx("rect",{x:"144",y:"114",width:"72",height:"10",rx:"4",fill:"#c4b5fd"}),T.jsx("rect",{x:"138",y:"84",width:"84",height:"30",rx:"8",fill:"#e2e8f0"}),T.jsx("path",{d:"M 140 150 Q 180 161 220 150",stroke:e,strokeWidth:"3",fill:"none"}),T.jsx("text",{x:"180",y:"64",textAnchor:"middle",fill:"#cbd5e1",fontSize:"13",children:"MOSFET gate control"})]});case 6:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"182",cy:"201",rx:"82",ry:"14",fill:"#020617",fillOpacity:"0.48"}),T.jsx("rect",{x:"146",y:"62",width:"72",height:"100",rx:"34",fill:"#fef2f2",fillOpacity:"0.86",stroke:"#fecaca",strokeWidth:"2.5"}),T.jsx("rect",{x:"158",y:"78",width:"48",height:"62",rx:"22",fill:"#fb7185",fillOpacity:"0.9"}),T.jsx("rect",{x:"156",y:"140",width:"52",height:"15",rx:"6",fill:"#e2e8f0"}),T.jsx("line",{x1:"168",y1:"155",x2:"168",y2:"212",stroke:"#cbd5e1",strokeWidth:"3.2"}),T.jsx("line",{x1:"196",y1:"155",x2:"196",y2:"204",stroke:"#94a3b8",strokeWidth:"2.7"}),T.jsx("line",{x1:"196",y1:"204",x2:"182",y2:"204",stroke:"#94a3b8",strokeWidth:"2.7"}),[0,1,2].map(n=>T.jsx("line",{x1:214+n*10,y1:96-n*18,x2:244+n*10,y2:72-n*18,stroke:e,strokeWidth:"3",strokeLinecap:"round"},n)),T.jsx("text",{x:"182",y:"48",textAnchor:"middle",fill:"#fda4af",fontSize:"13",children:"Visible-light LED"})]});case 7:return T.jsxs("g",{children:[T.jsx("rect",{x:"104",y:"76",width:"152",height:"92",rx:"14",fill:"#0f172a",stroke:"#94a3b8"}),T.jsx("rect",{x:"120",y:"92",width:"120",height:"24",rx:"8",fill:"#a78bfa",fillOpacity:"0.85"}),T.jsx("rect",{x:"120",y:"128",width:"120",height:"24",rx:"8",fill:"#22d3ee",fillOpacity:"0.85"}),T.jsx("line",{x1:"136",y1:"54",x2:"136",y2:"188",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("line",{x1:"224",y1:"54",x2:"224",y2:"188",stroke:"#cbd5e1",strokeWidth:"2.5"}),T.jsx("text",{x:"180",y:"47",textAnchor:"middle",fill:"#c4b5fd",fontSize:"13",children:"CMOS low-power logic"}),T.jsx("text",{x:"180",y:"108",textAnchor:"middle",fill:"#111827",fontSize:"11",children:"PMOS"}),T.jsx("text",{x:"180",y:"144",textAnchor:"middle",fill:"#083344",fontSize:"11",children:"NMOS"})]});case 8:return T.jsxs("g",{children:[T.jsx("rect",{x:"74",y:"88",width:"216",height:"92",rx:"14",fill:"#1e293b",stroke:"#60a5fa",strokeWidth:"2"}),T.jsx("rect",{x:"88",y:"104",width:"188",height:"44",rx:"8",fill:"#0f172a"}),[0,1,2,3,4,5].map(n=>T.jsx("rect",{x:98+n*30,y:"112",width:"22",height:"28",rx:"4",fill:"#1e3a5f",stroke:"#93c5fd",strokeOpacity:"0.5"},n)),[0,1,2,3,4,5,6,7,8,9].map(n=>T.jsx("rect",{x:86+n*19,y:"180",width:"12",height:"8",rx:"2",fill:"#cbd5e1"},`pin${n}`)),T.jsx("text",{x:"182",y:"74",textAnchor:"middle",fill:"#bfdbfe",fontSize:"13",children:"DRAM memory module"}),T.jsx("text",{x:"182",y:"160",textAnchor:"middle",fill:"#e2e8f0",fontSize:"12",children:"Billions of tiny memory cells"})]});case 9:return T.jsxs("g",{children:[T.jsx("rect",{x:"108",y:"66",width:"144",height:"112",rx:"18",fill:"#0f172a",stroke:e,strokeWidth:"2.3"}),[0,1,2,3,4,5,6].map(n=>T.jsx("rect",{x:"95",y:78+n*14,width:"12",height:"8",rx:"2",fill:"#e2e8f0"},`lp${n}`)),[0,1,2,3,4,5,6].map(n=>T.jsx("rect",{x:"252",y:78+n*14,width:"12",height:"8",rx:"2",fill:"#e2e8f0"},`rp${n}`)),T.jsx("rect",{x:"126",y:"88",width:"108",height:"68",rx:"10",fill:"#111827"}),T.jsx("text",{x:"180",y:"120",textAnchor:"middle",fill:"#f8fafc",fontSize:"24",fontWeight:"700",children:"4004"}),T.jsx("text",{x:"180",y:"144",textAnchor:"middle",fill:"#7dd3fc",fontSize:"12",children:"First microprocessor"})]});case 10:return T.jsxs("g",{children:[T.jsx("rect",{x:"84",y:"84",width:"206",height:"96",rx:"14",fill:"#111827",stroke:"#fbbf24",strokeWidth:"2.2"}),T.jsx("rect",{x:"96",y:"98",width:"132",height:"68",rx:"10",fill:"#1f2937",stroke:"#c4b5fd",strokeOpacity:"0.5"}),T.jsx("text",{x:"162",y:"134",textAnchor:"middle",fill:"#f8fafc",fontSize:"18",fontWeight:"700",children:"FLASH"}),T.jsx("rect",{x:"228",y:"114",width:"50",height:"36",rx:"6",fill:"#d1d5db"}),T.jsx("rect",{x:"278",y:"120",width:"16",height:"24",rx:"2",fill:"#e5e7eb"}),[0,1,2,3].map(n=>T.jsx("rect",{x:295+n*6,y:122+n*6,width:"4",height:"10",rx:"1",fill:"#9ca3af"},n)),T.jsx("text",{x:"188",y:"70",textAnchor:"middle",fill:"#fde68a",fontSize:"13",children:"Flash storage"})]});case 11:return T.jsxs("g",{children:[T.jsx("rect",{x:"96",y:"72",width:"140",height:"90",rx:"12",fill:"#0f172a",stroke:"#94a3b8"}),T.jsx("rect",{x:"108",y:"84",width:"116",height:"62",rx:"8",fill:"#1e293b"}),T.jsx("rect",{x:"128",y:"162",width:"76",height:"8",rx:"3",fill:"#cbd5e1"}),T.jsx("rect",{x:"248",y:"88",width:"30",height:"88",rx:"6",fill:"#334155"}),T.jsx("circle",{cx:"263",cy:"102",r:"4",fill:"#7dd3fc"}),T.jsx("circle",{cx:"263",cy:"116",r:"4",fill:"#a5b4fc"}),T.jsx("text",{x:"180",y:"52",textAnchor:"middle",fill:"#bfdbfe",fontSize:"13",children:"Personal-computing era"})]});case 12:return T.jsxs("g",{children:[T.jsx("rect",{x:"80",y:"68",width:"204",height:"128",rx:"14",fill:"#0f172a",stroke:"#334155"}),T.jsx("path",{d:"M 104 92 H 260",stroke:"#b87333",strokeWidth:"6",strokeLinecap:"round"}),T.jsx("path",{d:"M 104 130 H 192 V 170 H 260",stroke:"#b87333",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),T.jsx("path",{d:"M 104 160 H 176 V 106 H 232",stroke:"#b87333",strokeWidth:"6",fill:"none",strokeLinecap:"round"}),[0,1,2,3,4].map(n=>T.jsx("circle",{cx:112+n*36,cy:92,r:"4",fill:"#fdba74"},n)),T.jsx("text",{x:"182",y:"56",textAnchor:"middle",fill:"#fdba74",fontSize:"13",children:"Copper interconnect wiring"})]});case 13:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"88",ry:"12",fill:"#020617",fillOpacity:"0.45"}),T.jsx("rect",{x:"94",y:"156",width:"172",height:"26",rx:"8",fill:"#374151"}),T.jsx("rect",{x:"108",y:"136",width:"144",height:"12",rx:"4",fill:"#f59e0b"}),T.jsx("rect",{x:"108",y:"112",width:"144",height:"22",rx:"8",fill:"#7c3aed"}),T.jsx("rect",{x:"102",y:"82",width:"156",height:"28",rx:"8",fill:"#cbd5e1"}),T.jsx("circle",{cx:"292",cy:"116",r:"16",fill:"#ef4444",fillOpacity:"0.92"}),T.jsx("line",{x1:"292",y1:"106",x2:"292",y2:"126",stroke:"#fee2e2",strokeWidth:"3"}),T.jsx("line",{x1:"282",y1:"116",x2:"302",y2:"116",stroke:"#fee2e2",strokeWidth:"3"}),T.jsx("text",{x:"180",y:"64",textAnchor:"middle",fill:"#c4b5fd",fontSize:"13",children:"High-k + metal gate"})]});case 14:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"88",ry:"12",fill:"#020617",fillOpacity:"0.45"}),T.jsx("rect",{x:"96",y:"156",width:"168",height:"30",rx:"8",fill:"#312e81"}),[0,1,2].map(n=>T.jsx("rect",{x:132+n*34,y:"92",width:"18",height:"92",rx:"6",fill:"#64748b"},n)),T.jsx("rect",{x:"118",y:"78",width:"108",height:"14",rx:"6",fill:"#cbd5e1"}),T.jsx("rect",{x:"118",y:"92",width:"12",height:"58",rx:"6",fill:"#cbd5e1"}),T.jsx("rect",{x:"214",y:"92",width:"12",height:"58",rx:"6",fill:"#cbd5e1"}),T.jsx("text",{x:"180",y:"58",textAnchor:"middle",fill:"#7dd3fc",fontSize:"13",children:"FinFET 3D fins"})]});case 15:return T.jsxs("g",{children:[T.jsx("ellipse",{cx:"180",cy:"198",rx:"90",ry:"12",fill:"#020617",fillOpacity:"0.45"}),T.jsx("rect",{x:"102",y:"78",width:"156",height:"108",rx:"16",fill:"#cbd5e1",fillOpacity:"0.25",stroke:"#cbd5e1"}),[0,1,2].map(n=>T.jsx("rect",{x:"124",y:100+n*25,width:"112",height:"14",rx:"7",fill:"#64748b"},n)),T.jsx("rect",{x:"90",y:"90",width:"20",height:"82",rx:"7",fill:"#f59e0b"}),T.jsx("rect",{x:"250",y:"90",width:"20",height:"82",rx:"7",fill:"#f59e0b"}),T.jsx("text",{x:"180",y:"60",textAnchor:"middle",fill:"#93c5fd",fontSize:"13",children:"Gate-all-around"})]});default:return null}}function NT({event:t}){const e=t.color||"#22d3ee",n=`tlx-gradient-${t.id}`,i=`tlx-grid-${t.id}`;return T.jsxs("svg",{viewBox:"0 0 360 240",className:"tlx-glyph","aria-hidden":"true",children:[T.jsxs("defs",{children:[T.jsxs("linearGradient",{id:n,x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[T.jsx("stop",{offset:"0%",stopColor:"#071429"}),T.jsx("stop",{offset:"56%",stopColor:"#0d1e39"}),T.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.45"})]}),T.jsx("pattern",{id:i,width:"16",height:"16",patternUnits:"userSpaceOnUse",children:T.jsx("path",{d:"M 16 0 L 0 0 0 16",fill:"none",stroke:"#7dd3fc",strokeOpacity:"0.08",strokeWidth:"1"})})]}),T.jsx("rect",{x:"2",y:"2",width:"356",height:"236",rx:"24",fill:`url(#${n})`}),T.jsx("rect",{x:"2",y:"2",width:"356",height:"236",rx:"24",fill:`url(#${i})`}),T.jsx("rect",{x:"28",y:"20",width:"304",height:"200",rx:"22",fill:"#031022",fillOpacity:"0.52",stroke:e,strokeOpacity:"0.55"}),T.jsx(DT,{eventId:t.id,accent:e})]})}function UT(){const[t,e]=lt.useState(0),[n,i]=lt.useState(!1),[r,s]=lt.useState(0),o=lt.useRef(null),a=lt.useRef(null),l=Vc.length,c=n,f=lt.useCallback(y=>{var _;const p=(y%l+l)%l;e(p),s(g=>g+1);const u=(_=o.current)==null?void 0:_.querySelector(`[data-index="${p}"]`);u==null||u.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[l]),h=lt.useCallback(y=>{o.current&&o.current.scrollBy({left:y*320,behavior:"smooth"})},[]);lt.useEffect(()=>{if(c){clearInterval(a.current);return}return a.current=setInterval(()=>f(t+1),Op),()=>clearInterval(a.current)},[t,c,f]),lt.useEffect(()=>{const y=p=>{p.key==="ArrowRight"&&f(t+1),p.key==="ArrowLeft"&&f(t-1)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[t,f]);const d=Vc[t],m=bT[d.id]||LT(d.description),v=CT[d.id]||{badge:"Milestone"};return T.jsx("section",{className:"tlx-section",id:"timeline",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:T.jsxs("div",{className:"container",children:[T.jsxs("header",{className:"tlx-header",children:[T.jsx("span",{className:"tlx-label",children:"Timeline"}),T.jsx("h2",{className:"tlx-heading",children:"How One Device Scaled Into The Digital World"}),T.jsx("p",{className:"tlx-subhead",children:"Start at Bell Labs in 1947, then move through the breakthroughs that enabled modern computers, phones, AI hardware, and data centers."})]}),T.jsxs("div",{className:"tlx-track-shell",children:[T.jsx("button",{className:"tlx-track-arrow",type:"button","aria-label":"Scroll timeline left",onClick:()=>h(-1),children:"←"}),T.jsx("div",{className:"tlx-track",ref:o,"aria-label":"Timeline milestones",children:Vc.map((y,p)=>T.jsxs("button",{"data-index":p,className:`tlx-marker ${t===p?"active":""}`,style:{"--item-color":y.color},onClick:()=>f(p),"aria-current":t===p?"step":void 0,children:[T.jsx("span",{className:"tlx-marker-dot"}),T.jsx("span",{className:"tlx-marker-year",children:y.year}),T.jsx("span",{className:"tlx-marker-label",children:PT(y.title)})]},y.id))}),T.jsx("button",{className:"tlx-track-arrow",type:"button","aria-label":"Scroll timeline right",onClick:()=>h(1),children:"→"})]}),T.jsxs("article",{className:"tlx-stage",style:{"--accent":d.color},children:[T.jsx("div",{className:"tlx-stage-top",children:T.jsx("span",{className:"tlx-badge tlx-badge-main",children:v.badge})}),T.jsxs("div",{className:"tlx-stage-body",children:[T.jsx("div",{className:"tlx-visual-pane",children:T.jsx(NT,{event:d})}),T.jsxs("div",{className:"tlx-copy-pane",children:[T.jsx("p",{className:"tlx-date-inline",children:d.date}),T.jsx("h3",{className:"tlx-title",children:d.title}),T.jsx("p",{className:"tlx-source",children:d.subtitle}),T.jsxs("p",{className:"tlx-plain",children:[T.jsx("strong",{children:"In plain English:"})," ",m]}),T.jsx("p",{className:"tlx-detail",children:d.description}),T.jsxs("blockquote",{className:"tlx-impact",children:[T.jsx("strong",{children:"Why this mattered:"})," ",d.impact]}),T.jsxs("div",{className:"tlx-refs",children:["Sources:",d.refs.map(y=>T.jsxs("a",{href:"#references",children:["[",y,"]"]},y))]})]})]}),T.jsx("div",{className:"tlx-progress-track",children:T.jsx("div",{className:`tlx-progress-fill ${c?"paused":""}`,style:{background:d.color,animationDuration:`${Op}ms`}},r)})]},r)]})})}const Re={substrate:"#475569",sio2:"#a78bfa",photoresist:"#4ade80",ndope:"#fb923c",gateOxide:"#c4b5fd",poly:"#94a3b8",metal:"#e2e8f0",uvRay:"#bfdbfe",ion:"#fbbf24",bg:"#0e0e1f"},Hn={id:"substrate",x:30,y:110,w:460,h:60,fill:Re.substrate,label:"p-Si",labelX:240,labelY:144},ss=[{id:0,title:"Silicon Wafer Preparation",subtitle:"Starting material",description:"Everything starts with silicon — the second-most abundant element in Earth's crust, right after oxygen. Raw silicon is purified to an astonishing 99.9999999% purity using the Czochralski process: a seed crystal is dipped into molten silicon and slowly pulled upward while rotating, growing a cylindrical ingot of perfectly ordered crystal. The ingot is sliced into thin wafers (~775 μm thick) and mirror-polished.",techNote:"The substrate here is doped p-type by adding trace amounts of boron during crystal growth. This creates a slight deficit of electrons ('holes') throughout the material — the starting condition for an n-channel MOSFET.",animation:"spin",refs:[15,16],layers:[Hn]},{id:1,title:"Thermal Oxidation",subtitle:"Grow the insulating oxide",description:"The wafer is loaded into a furnace heated to around 1000 °C and exposed to steam or oxygen. The silicon atoms at the surface react with oxygen to form silicon dioxide (SiO₂) — ordinary glass. This ~100 nm layer of oxide is not just any insulator; it is one of the most perfect insulator-semiconductor interfaces known to science, and it is why silicon (not germanium, not gallium arsenide) became the material of choice.",techNote:"This is 'thermal oxidation' — the oxide grows by consuming the silicon surface, not by depositing material on top. Approximately 44% of the grown oxide thickness actually extends below the original silicon surface.",animation:"oxidize",refs:[15,16],layers:[Hn,{id:"sio2_full",x:30,y:95,w:460,h:15,fill:Re.sio2,label:"SiO₂",labelX:240,labelY:105}]},{id:2,title:"Photoresist Coating",subtitle:"Apply the light-sensitive layer",description:"A liquid plastic called photoresist is poured onto the spinning wafer (typically 2,000–4,000 RPM). The centrifugal force spreads it into a uniform layer just 1–2 μm thick — thinner than a human hair. The wafer is then briefly heated ('soft-baked') to evaporate the solvent, leaving a solid, light-sensitive film. Think of it like spreading a very thin coat of light-sensitive sunscreen on the wafer.",techNote:"We use positive photoresist here. UV light breaks chemical bonds in the exposed regions, making them soluble in developer solution. Negative photoresist does the opposite — UV light crosslinks and hardens the resist.",animation:"spin",refs:[15,17],layers:[Hn,{id:"sio2_full",x:30,y:95,w:460,h:15,fill:Re.sio2},{id:"pr_full",x:30,y:75,w:460,h:20,fill:Re.photoresist,label:"Photoresist",labelX:240,labelY:88}]},{id:3,title:"Photolithography — UV Exposure",subtitle:"Print the pattern with light",description:"A photomask — a glass plate printed with the circuit pattern in chrome — is placed above the wafer. Ultraviolet light shines through the transparent parts of the mask and strikes the photoresist below, chemically altering it. The areas under the chrome pattern are shielded and remain unchanged. This is essentially photography at the nanometer scale.",techNote:"Modern fabs use extreme ultraviolet (EUV) light at 13.5 nm wavelength, enabling features below 5 nm. For the planar process shown here, a UV wavelength of 365 nm (i-line) was typical. The mask is typically 4× larger than the final pattern, then optically reduced by the stepper lens.",animation:"uvExpose",refs:[15,17],layers:[Hn,{id:"sio2_full",x:30,y:95,w:460,h:15,fill:Re.sio2},{id:"pr_left",x:30,y:75,w:155,h:20,fill:Re.photoresist},{id:"pr_right",x:335,y:75,w:155,h:20,fill:Re.photoresist},{id:"pr_exposed",x:185,y:75,w:150,h:20,fill:"#86efac",opacity:.45,label:"UV-exposed",labelX:260,labelY:72},{id:"uv_label",x:185,y:40,w:150,h:0,fill:"none",label:"UV Light ↓",labelX:260,labelY:55,labelFill:Re.uvRay}]},{id:4,title:"Photoresist Development",subtitle:"Wash away the exposed resist",description:"The wafer is immersed in a developer solution — a mild alkaline liquid. The UV-exposed regions of the photoresist dissolve away, leaving windows in the photoresist film that expose the oxide layer beneath. The unexposed regions remain firmly in place, acting as a stencil for the next etch step.",techNote:"The developer is typically tetramethylammonium hydroxide (TMAH) solution. Development is followed by a rinse in deionized water and a 'hard bake' at ~120 °C to harden the remaining resist.",animation:"develop",refs:[15,17],layers:[Hn,{id:"sio2_full",x:30,y:95,w:460,h:15,fill:Re.sio2},{id:"pr_left",x:30,y:75,w:155,h:20,fill:Re.photoresist},{id:"pr_right",x:335,y:75,w:155,h:20,fill:Re.photoresist,label:"Photoresist",labelX:400,labelY:88},{id:"pr_window_label",x:185,y:75,w:150,h:20,fill:"none",label:"window",labelX:260,labelY:88,labelFill:"#94a3b8"}]},{id:5,title:"Oxide Etch (HF)",subtitle:"Open windows to the silicon",description:"Hydrofluoric acid (HF) is used to dissolve the silicon dioxide exposed in the resist windows. HF attacks SiO₂ rapidly but leaves silicon and photoresist essentially untouched — an impressive chemical selectivity. The result: two openings in the oxide layer where the source and drain of the transistor will be formed. This step is sometimes called 'wet etching.'",techNote:"HF etches SiO₂ isotropically (equally in all directions), which can undercut the oxide slightly beneath the resist edge. Modern fabs often use dry (plasma) etching instead for better dimensional control, but wet HF is still used for oxide cleaning.",animation:"etch",refs:[15,16],layers:[Hn,{id:"sio2_left",x:30,y:95,w:155,h:15,fill:Re.sio2},{id:"sio2_right",x:335,y:95,w:155,h:15,fill:Re.sio2,label:"SiO₂",labelX:400,labelY:105},{id:"pr_left",x:30,y:75,w:155,h:20,fill:Re.photoresist},{id:"pr_right",x:335,y:75,w:155,h:20,fill:Re.photoresist,label:"Photoresist",labelX:400,labelY:88},{id:"etch_label",x:185,y:95,w:150,h:15,fill:"none",label:"etched window",labelX:260,labelY:88,labelFill:"#f87171"}]},{id:6,title:"Photoresist Strip",subtitle:"Remove the resist mask",description:"The photoresist has done its job. Now it has to go — it's an organic material and cannot survive the high temperatures of the next steps. It is stripped away using either oxygen plasma (which 'ashes' the resist) or a hot chemical solvent. What remains is the silicon wafer with a patterned oxide mask: the oxide sits over the field regions, and bare silicon is exposed where the source and drain will go.",techNote:"Oxygen plasma ashing converts the photoresist into CO₂ and H₂O gas that is pumped away. It is preferred over wet stripping in modern fabs because it leaves no residue and avoids liquid waste handling.",animation:"strip",refs:[15,16],layers:[Hn,{id:"sio2_left",x:30,y:95,w:155,h:15,fill:Re.sio2},{id:"sio2_right",x:335,y:95,w:155,h:15,fill:Re.sio2,label:"SiO₂ mask",labelX:400,labelY:105}]},{id:7,title:"Ion Implantation",subtitle:"Dope the source and drain",description:"To make the transistor switch, we need to create electrically different regions of silicon. A beam of phosphorus or arsenic ions is accelerated to high energies (10–200 keV) and slammed into the exposed silicon. The ions embed themselves in the crystal lattice, donating extra electrons (making those regions n-type). These become the source and drain of the transistor. The oxide acts as a mask, shielding the channel region beneath it.",techNote:"After implantation, the wafer is annealed at 900–1000 °C in nitrogen to 'heal' the crystal damage caused by the ion bombardment and to electrically activate the implanted dopants (move them onto crystal lattice sites).",animation:"implant",refs:[15,16,17],layers:[Hn,{id:"ndope_left",x:30,y:110,w:155,h:25,fill:Re.ndope},{id:"ndope_right",x:335,y:110,w:155,h:25,fill:Re.ndope,label:"n⁺ drain",labelX:400,labelY:126},{id:"ndope_left_label",x:30,y:110,w:155,h:25,fill:"none",label:"n⁺ source",labelX:107,labelY:126},{id:"sio2_left",x:30,y:95,w:155,h:15,fill:Re.sio2},{id:"sio2_right",x:335,y:95,w:155,h:15,fill:Re.sio2,label:"SiO₂ mask",labelX:400,labelY:105}]},{id:8,title:"Gate Oxide Growth",subtitle:"Grow the critical thin dielectric",description:"The heart of the MOSFET is an ultra-thin layer of silicon dioxide — the gate dielectric. It is grown by re-oxidizing the exposed channel region at high temperature. This layer is only 5–10 nm thick (in older processes; modern high-κ dielectrics can be as thin as 1 nm). Its job is to electrically isolate the metal gate from the silicon channel while still allowing the gate's electric field to reach through and control the flow of electrons.",techNote:"The 1998 Nobel laureate Horst Störmer noted that the SiO₂/Si interface is the most important interface in the world. For modern nodes below 45 nm, SiO₂ has been replaced by high-κ dielectrics such as hafnium oxide (HfO₂) to reduce quantum tunneling leakage.",animation:"gateOxide",refs:[15,16,18],layers:[Hn,{id:"ndope_left",x:30,y:110,w:155,h:25,fill:Re.ndope,label:"n⁺",labelX:107,labelY:126},{id:"ndope_right",x:335,y:110,w:155,h:25,fill:Re.ndope,label:"n⁺",labelX:412,labelY:126},{id:"sio2_left",x:30,y:95,w:155,h:15,fill:Re.sio2},{id:"sio2_right",x:335,y:95,w:155,h:15,fill:Re.sio2,label:"Field SiO₂",labelX:412,labelY:105},{id:"gate_ox",x:185,y:100,w:150,h:10,fill:Re.gateOxide,label:"Gate SiO₂",labelX:260,labelY:95}]},{id:9,title:"Gate Electrode & Metal Contacts",subtitle:"Complete the transistor",description:"A layer of polysilicon (or metal, in modern processes) is deposited over the gate oxide to form the gate electrode. Then, contact windows are opened through the oxide over the source and drain, and metal (aluminum or copper) is deposited and patterned. Three metal contacts now sit atop the three terminals — Source, Gate, and Drain. Apply a voltage to the gate contact and electrons flow through the channel from source to drain. The transistor is complete.",techNote:"This simplified view shows a planar NMOSFET. A real CMOS circuit would pair this with a PMOSFET in a p-well. Modern metallization uses copper with barrier layers of tantalum nitride, deposited by electroplating and planarized by chemical-mechanical planarization (CMP).",animation:"metal",refs:[15,16,17],layers:[Hn,{id:"ndope_left",x:30,y:110,w:155,h:25,fill:Re.ndope},{id:"ndope_right",x:335,y:110,w:155,h:25,fill:Re.ndope},{id:"sio2_left",x:30,y:95,w:155,h:15,fill:Re.sio2},{id:"sio2_right",x:335,y:95,w:155,h:15,fill:Re.sio2},{id:"gate_ox",x:185,y:100,w:150,h:10,fill:Re.gateOxide,label:"Gate SiO₂",labelX:260,labelY:97},{id:"gate",x:185,y:75,w:150,h:25,fill:Re.poly,label:"Gate",labelX:260,labelY:91},{id:"metal_s",x:65,y:55,w:70,h:40,fill:Re.metal,label:"S",labelX:100,labelY:80,rx:2},{id:"metal_g",x:225,y:40,w:70,h:35,fill:Re.metal,label:"G",labelX:260,labelY:62,rx:2},{id:"metal_d",x:365,y:55,w:70,h:40,fill:Re.metal,label:"D",labelX:400,labelY:80,rx:2}]}];function IT({step:t}){const e=new Set;ss.forEach(o=>o.layers.forEach(a=>e.add(a.id)));const n={};t.layers.forEach(o=>{n[o.id]=o});const i={};ss.forEach(o=>o.layers.forEach(a=>{i[a.id]||(i[a.id]=a)}));const r=t.animation==="uvExpose",s=t.animation==="implant";return T.jsxs("svg",{viewBox:"0 0 520 200",xmlns:"http://www.w3.org/2000/svg","aria-label":`Cross-section diagram: ${t.title}`,style:{display:"block",width:"100%"},children:[T.jsx("rect",{width:"520",height:"200",fill:Re.bg,rx:"10"}),T.jsx("text",{x:"260",y:"18",textAnchor:"middle",fontSize:"9",fill:"#475569",fontFamily:"monospace",letterSpacing:"1",children:"CROSS-SECTION VIEW — not to scale"}),Object.values(i).map(o=>{const a=!!n[o.id],l=a?n[o.id]:o;return T.jsx("g",{style:{transition:"opacity 0.45s ease"},opacity:a?1:0,children:T.jsx("rect",{x:l.x,y:l.y,width:l.w,height:l.h,fill:l.fill,rx:l.rx??1,fillOpacity:l.opacity??1})},o.id)}),t.layers.map(o=>o.label&&T.jsx("text",{x:o.labelX??o.x+o.w/2,y:o.labelY??o.y+o.h/2+4,textAnchor:"middle",fontSize:"9",fill:o.labelFill??"#f1f5f9",fontFamily:"monospace",fontWeight:"600",style:{pointerEvents:"none",userSelect:"none"},children:o.label},`lbl-${o.id}`)),T.jsx("line",{x1:"30",y1:"185",x2:"490",y2:"185",stroke:"#1e1e40",strokeWidth:"1"}),T.jsx("text",{x:"260",y:"197",textAnchor:"middle",fontSize:"8",fill:"#334155",fontFamily:"monospace",children:"← silicon wafer (not to scale) →"}),r&&T.jsxs("g",{children:[T.jsx("rect",{x:"185",y:"28",width:"150",height:"8",fill:"#1e293b",rx:"2",opacity:"0.9"}),T.jsx("rect",{x:"30",y:"28",width:"155",height:"8",fill:"#334155",rx:"0",opacity:"0.7"}),T.jsx("rect",{x:"335",y:"28",width:"155",height:"8",fill:"#334155",rx:"0",opacity:"0.7"}),T.jsx("text",{x:"260",y:"23",textAnchor:"middle",fontSize:"8",fill:Re.uvRay,fontFamily:"monospace",children:"photomask"}),[195,210,225,240,255,270,285,300,315,325].map((o,a)=>T.jsx("g",{children:T.jsx("line",{x1:o,y1:"36",x2:o,y2:"75",stroke:Re.uvRay,strokeWidth:"1",opacity:"0.6",strokeDasharray:"3 3",children:T.jsx("animate",{attributeName:"y1",values:"32;36;32",dur:"1.2s",repeatCount:"indefinite"})})},a)),T.jsx("text",{x:"260",y:"58",textAnchor:"middle",fontSize:"8",fill:Re.uvRay,fontFamily:"monospace",opacity:"0.8",children:"UV →"})]}),s&&T.jsxs("g",{children:[[60,75,90,105,120,135,350,365,380,395,410,425].map((o,a)=>T.jsxs("g",{children:[T.jsxs("line",{x1:o,y1:"45",x2:o,y2:"108",stroke:Re.ion,strokeWidth:"1.2",opacity:"0.7",children:[T.jsx("animate",{attributeName:"y1",values:"35;55;35",dur:`${.8+a%3*.2}s`,repeatCount:"indefinite"}),T.jsx("animate",{attributeName:"opacity",values:"0.3;0.9;0.3",dur:`${.8+a%3*.2}s`,repeatCount:"indefinite"})]}),T.jsx("polygon",{points:`${o},108 ${o-3},98 ${o+3},98`,fill:Re.ion,opacity:"0.8"})]},a)),T.jsx("text",{x:"85",y:"40",textAnchor:"middle",fontSize:"8",fill:Re.ion,fontFamily:"monospace",children:"P⁺ ions"}),T.jsx("text",{x:"390",y:"40",textAnchor:"middle",fontSize:"8",fill:Re.ion,fontFamily:"monospace",children:"P⁺ ions"})]}),t.animation==="spin"&&t.id===2&&T.jsxs("g",{children:[T.jsx("text",{x:"480",y:"72",textAnchor:"end",fontSize:"8",fill:Re.photoresist,fontFamily:"monospace",opacity:"0.7",children:"↻ spinning"}),T.jsx("text",{x:"480",y:"82",textAnchor:"end",fontSize:"8",fill:Re.photoresist,fontFamily:"monospace",opacity:"0.5",children:"~3000 RPM"})]}),t.animation==="etch"&&T.jsxs("g",{children:[[200,220,240,260,280,300,320].map((o,a)=>T.jsxs("circle",{cx:o,cy:100,r:"3",fill:"none",stroke:"#f87171",strokeWidth:"1",opacity:"0.6",children:[T.jsx("animate",{attributeName:"cy",values:"100;85;100",dur:`${1+a*.15}s`,repeatCount:"indefinite"}),T.jsx("animate",{attributeName:"opacity",values:"0.1;0.7;0.1",dur:`${1+a*.15}s`,repeatCount:"indefinite"})]},a)),T.jsx("text",{x:"260",y:"70",textAnchor:"middle",fontSize:"8",fill:"#f87171",fontFamily:"monospace",children:"HF etch ↑"})]}),t.animation==="oxidize"&&T.jsxs("g",{opacity:"0.5",children:[T.jsx("text",{x:"40",y:"88",fontSize:"8",fill:"#a78bfa",fontFamily:"monospace",children:"900–1100 °C O₂"}),T.jsx("line",{x1:"30",y1:"93",x2:"490",y2:"93",stroke:"#a78bfa",strokeWidth:"0.5",strokeDasharray:"2 4",opacity:"0.4"})]})]})}function FT(){const[t,e]=lt.useState(0),n=lt.useRef(null),i=lt.useRef(null),r=ss[t],s=ss.length,o=lt.useCallback(a=>{e(Math.max(0,Math.min(s-1,a))),window.innerWidth<900&&n.current&&n.current.scrollIntoView({behavior:"smooth",block:"start"})},[s]);return lt.useEffect(()=>{const a=i.current;if(!a)return;const l=new IntersectionObserver(([c])=>{c.isIntersecting&&(a.classList.add("visible"),l.disconnect())},{threshold:.1});return l.observe(a),()=>l.disconnect()},[]),lt.useEffect(()=>{const a=l=>{(l.key==="ArrowRight"||l.key==="ArrowDown")&&o(t+1),(l.key==="ArrowLeft"||l.key==="ArrowUp")&&o(t-1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[t,o]),T.jsx("section",{className:"section section-alt",id:"fabrication",children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{className:"section-head reveal",ref:i,children:[T.jsx("div",{className:"section-label",children:"Fabrication"}),T.jsx("h2",{children:"How a transistor is made"}),T.jsx("p",{children:"The planar process — the same fundamental approach used from the 1960s through today's multi-billion-dollar fabs. Each step builds on the last, nanometer by nanometer. Use the steps on the left (or arrow keys) to walk through the process."})]}),T.jsxs("div",{className:"fab-shell",children:[T.jsx("nav",{className:"fab-steps-nav","aria-label":"Fabrication steps",children:T.jsx("ul",{className:"fab-steps-list",children:ss.map((a,l)=>T.jsx("li",{children:T.jsxs("button",{className:`fab-step-btn ${l===t?"active":""}`,onClick:()=>o(l),"aria-current":l===t?"step":void 0,children:[T.jsx("span",{className:"fab-step-num",children:l+1}),T.jsx("span",{children:a.title})]})},a.id))})}),T.jsxs("div",{className:"fab-detail",ref:n,children:[T.jsx("div",{className:"fab-progress","aria-hidden":"true",children:ss.map((a,l)=>T.jsx("div",{className:`fab-progress-dot ${l<t?"done":l===t?"active":""}`},l))}),T.jsx("div",{className:"fab-visual",children:T.jsx(IT,{step:r})}),T.jsxs("div",{className:"fab-detail-subtitle",children:["Step ",t+1," of ",s]}),T.jsx("h3",{className:"fab-detail-title",children:r.title}),T.jsx("p",{className:"fab-detail-desc",children:r.description}),T.jsxs("div",{className:"fab-tech-note",children:[T.jsx("strong",{children:"Technical note — "}),r.techNote,r.refs.map(a=>T.jsxs("sup",{children:["[",a,"]"]},a))]}),T.jsxs("div",{className:"fab-nav-btns",children:[T.jsx("button",{className:"fab-btn",onClick:()=>o(t-1),disabled:t===0,"aria-label":"Previous step",children:"← Previous"}),T.jsx("button",{className:"fab-btn primary",onClick:()=>o(t+1),disabled:t===s-1,"aria-label":"Next step",children:"Next step →"})]})]})]})]})})}const OT=[{num:1,tag:"Primary Source",cite:'Bardeen, J. & Brattain, W. H. (1948). "The transistor, a semi-conductor triode." Physical Review, 74(2), 230–231.',doi:"https://doi.org/10.1103/PhysRev.74.230",open:!1},{num:2,tag:"Primary Source",cite:'Brattain, W. H. & Bardeen, J. (1948). "Nature of the forward current in germanium point contacts." Physical Review, 74(2), 231–232.',doi:"https://doi.org/10.1103/PhysRev.74.231",open:!1},{num:3,tag:"Primary Source",cite:'Shockley, W. (1949). "The theory of p-n junctions in semiconductors and p-n junction transistors." Bell System Technical Journal, 28(3), 435–489.',doi:"https://doi.org/10.1002/j.1538-7305.1949.tb03645.x",open:!1},{num:4,tag:"Historical Account",cite:'Teal, G. K. (1976). "Single crystals of germanium and silicon — basic to the transistor and integrated circuit." IEEE Transactions on Electron Devices, 23(7), 621–639.',doi:"https://doi.org/10.1109/T-ED.1976.18464",open:!1},{num:5,tag:"Primary Source",cite:'Kilby, J. S. (1976). "Invention of the integrated circuit." IEEE Transactions on Electron Devices, 23(7), 648–654.',doi:"https://doi.org/10.1109/T-ED.1976.18467",open:!1},{num:6,tag:"Nobel Lecture",cite:'Kilby, J. S. (2000). "Turning potential into reality: the invention of the integrated circuit." Nobel Lecture, December 8, 2000. Nobel Prize in Physics.',doi:"https://www.nobelprize.org/prizes/physics/2000/kilby/lecture/",open:!0},{num:7,tag:"Primary Source",cite:'Kahng, D. & Atalla, M. M. (1960). "Silicon-silicon dioxide field induced surface devices." IRE-AIEE Solid-State Device Research Conference, Pittsburgh, PA.',doi:null,note:"Unpublished conference paper; described in: Kahng, D. (1976). IEEE Trans. Electron Devices, 23(7), 655–657.",open:!1},{num:8,tag:"Primary Source",cite:'Holonyak, N. Jr. & Bevacqua, S. F. (1962). "Coherent (visible) light emission from Ga(As₁₋ₓPₓ) junctions." Applied Physics Letters, 1(4), 82–83.',doi:"https://doi.org/10.1063/1.1753706",open:!1},{num:9,tag:"Primary Source",cite:'Wanlass, F. M. & Sah, C. T. (1963). "Nanowatt logic using field-effect metal-oxide-semiconductor triodes." 1963 IEEE International Solid-State Circuits Conference, vol. VI, pp. 32–33.',doi:"https://doi.org/10.1109/ISSCC.1963.1157450",open:!1},{num:10,tag:"Patent",cite:'Dennard, R. H. (1968). "Field-effect transistor memory." U.S. Patent 3,387,286. Filed: August 14, 1967; Issued: June 4, 1968. IBM Corporation.',doi:"https://patents.google.com/patent/US3387286A",open:!0},{num:11,tag:"Historical Account",cite:'Faggin, F., Hoff, M. E., Mazor, S. & Shima, M. (1996). "The history of the 4004." IEEE Micro, 16(6), 10–20.',doi:"https://doi.org/10.1109/40.546561",open:!1},{num:12,tag:"Primary Source",cite:'Moore, G. E. (1965). "Cramming more components onto integrated circuits." Electronics, 38(8), 114–117. Reprinted in Proc. IEEE, 86(1), 82–85 (1998).',doi:"https://doi.org/10.1109/JPROC.1998.658762",open:!1},{num:13,tag:"Engineering Paper",cite:'Natarajan, S. et al. (2012). "A 22nm high performance and low-power CMOS technology featuring fully-depleted tri-gate transistors, self-aligned contacts and high density MIM capacitors." IEEE Symposium on VLSI Technology, pp. 165–166.',doi:"https://doi.org/10.1109/VLSIT.2012.6242496",open:!1},{num:14,tag:"Engineering Paper",cite:'Barraud, S. et al. (2020). "FDSOI and nanowire/nanosheet: how far can they go? A perspective." IEEE Transactions on Electron Devices, 67(4), 1425–1432.',doi:"https://doi.org/10.1109/TED.2020.2968259",open:!1},{num:15,tag:"Textbook",cite:"Plummer, J. D., Deal, M. D. & Griffin, P. B. (2000). Silicon VLSI Technology: Fundamentals, Practice and Modeling. Prentice Hall. ISBN 978-0-13-085461-0.",doi:null,open:!1},{num:16,tag:"Textbook",cite:"Jaeger, R. C. (2002). Introduction to Microelectronic Fabrication (Vol. 5, 2nd ed.). Prentice Hall. ISBN 978-0-201-44494-2.",doi:null,open:!1},{num:17,tag:"Textbook",cite:"Madou, M. J. (2011). Fundamentals of Microfabrication and Nanotechnology (3rd ed.). CRC Press. ISBN 978-0-8493-8205-4.",doi:null,open:!1},{num:18,tag:"Review Article",cite:'Wilk, G. D., Wallace, R. M. & Anthony, J. M. (2001). "High-κ gate dielectrics: current status and materials properties considerations." Journal of Applied Physics, 89(10), 5243–5275.',doi:"https://doi.org/10.1063/1.1361065",open:!1}];function kT({r:t}){return T.jsxs("div",{className:"ref-item",children:[T.jsxs("div",{className:"ref-num",children:["[",t.num,"]"]}),T.jsxs("div",{className:"ref-body",children:[T.jsx("div",{className:"ref-tag",children:t.tag}),T.jsxs("div",{children:[T.jsxs("strong",{children:[t.cite.split(".")[0],"."]}),t.cite.slice(t.cite.indexOf(".")+1)]}),t.doi&&T.jsx("div",{style:{marginTop:4},children:T.jsx("a",{href:t.doi,target:"_blank",rel:"noopener noreferrer",children:t.open?"↗ Open Access":"↗ "+t.doi})}),t.note&&T.jsx("div",{style:{marginTop:4,opacity:.7,fontStyle:"italic"},children:t.note})]})]})}function zT(){const t=lt.useRef(null);return lt.useEffect(()=>{const e=t.current;if(!e)return;const n=new IntersectionObserver(([i])=>{i.isIntersecting&&(e.classList.add("visible"),n.disconnect())},{threshold:.1});return n.observe(e),()=>n.disconnect()},[]),T.jsx("section",{className:"section",id:"references",children:T.jsxs("div",{className:"container",children:[T.jsxs("div",{className:"section-head reveal",ref:t,children:[T.jsx("div",{className:"section-label",children:"References"}),T.jsx("h2",{children:"Sources & further reading"}),T.jsx("p",{children:"Every claim on this site is grounded in peer-reviewed literature, patents, or Nobel Prize lectures. Primary sources are preferred wherever possible."})]}),T.jsx("div",{className:"refs-grid",children:OT.map(e=>T.jsx(kT,{r:e},e.num))})]})})}function BT(){return T.jsxs(T.Fragment,{children:[T.jsxs("main",{children:[T.jsx(RT,{}),T.jsx(UT,{}),T.jsx(FT,{}),T.jsx(zT,{})]}),T.jsx("footer",{className:"footer",children:T.jsxs("div",{className:"container",children:[T.jsxs("p",{children:["Transistor Explorer is an educational resource.",T.jsx("br",{}),"All historical claims are cited — see the References section above.",T.jsx("br",{}),"Content does not represent the views of any institution or company."]}),T.jsxs("p",{style:{marginTop:12},children:["Built with curiosity. Hosted at"," ",T.jsx("a",{href:"https://transistor-explorer.com",children:"transistor-explorer.com"})]})]})})]})}Kg(document.getElementById("root")).render(T.jsx(lt.StrictMode,{children:T.jsx(BT,{})}));
