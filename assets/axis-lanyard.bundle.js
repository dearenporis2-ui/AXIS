var AxisLanyard=(()=>{var AS=Object.create;var Yl=Object.defineProperty;var bS=Object.getOwnPropertyDescriptor;var CS=Object.getOwnPropertyNames;var RS=Object.getPrototypeOf,PS=Object.prototype.hasOwnProperty;var Wi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),IS=(t,e)=>{for(var n in e)Yl(t,n,{get:e[n],enumerable:!0})},Eg=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of CS(e))!PS.call(t,r)&&r!==n&&Yl(t,r,{get:()=>e[r],enumerable:!(i=bS(e,r))||i.enumerable});return t};var ts=(t,e,n)=>(n=t!=null?AS(RS(t)):{},Eg(e||!t||!t.__esModule?Yl(n,"default",{value:t,enumerable:!0}):n,t)),LS=t=>Eg(Yl({},"__esModule",{value:!0}),t);var Ug=Wi(at=>{"use strict";var ra=Symbol.for("react.element"),NS=Symbol.for("react.portal"),DS=Symbol.for("react.fragment"),US=Symbol.for("react.strict_mode"),FS=Symbol.for("react.profiler"),OS=Symbol.for("react.provider"),BS=Symbol.for("react.context"),zS=Symbol.for("react.forward_ref"),kS=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),HS=Symbol.for("react.lazy"),wg=Symbol.iterator;function GS(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var bg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cg=Object.assign,Rg={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||bg}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Pg(){}Pg.prototype=Ds.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=Rg,this.updater=n||bg}var xd=yd.prototype=new Pg;xd.constructor=yd;Cg(xd,Ds.prototype);xd.isPureReactComponent=!0;var Tg=Array.isArray,Ig=Object.prototype.hasOwnProperty,Sd={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ig.call(e,i)&&!Lg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:Sd.current}}function WS(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ag=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case NS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vd(o,0):i,Tg(r)?(n="",t!=null&&(n=t.replace(Ag,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Md(r)&&(r=WS(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ag,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+vd(s,a);o+=Zl(s,e,n,l,r)}else if(l=GS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+vd(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $l(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yn={current:null},Jl={transition:null},YS={ReactCurrentDispatcher:yn,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Sd};function Dg(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:$l,forEach:function(t,e,n){$l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $l(t,function(){e++}),e},toArray:function(t){return $l(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=Ds;at.Fragment=DS;at.Profiler=FS;at.PureComponent=yd;at.StrictMode=US;at.Suspense=kS;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YS;at.act=Dg;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Cg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ig.call(e,l)&&!Lg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(t){return t={$$typeof:BS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OS,_context:t},t.Consumer=t};at.createElement=Ng;at.createFactory=function(t){var e=Ng.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:zS,render:t}};at.isValidElement=Md;at.lazy=function(t){return{$$typeof:HS,_payload:{_status:-1,_result:t},_init:qS}};at.memo=function(t,e){return{$$typeof:VS,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};at.unstable_act=Dg;at.useCallback=function(t,e){return yn.current.useCallback(t,e)};at.useContext=function(t){return yn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return yn.current.useDeferredValue(t)};at.useEffect=function(t,e){return yn.current.useEffect(t,e)};at.useId=function(){return yn.current.useId()};at.useImperativeHandle=function(t,e,n){return yn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return yn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return yn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return yn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return yn.current.useReducer(t,e,n)};at.useRef=function(t){return yn.current.useRef(t)};at.useState=function(t){return yn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return yn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return yn.current.useTransition()};at.version="18.3.1"});var sa=Wi((AR,Fg)=>{"use strict";Fg.exports=Ug()});var qg=Wi(wt=>{"use strict";function Ad(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Kl(r,e))t[i]=e,t[n]=r,n=i;else break e}}function hi(t){return t.length===0?null:t[0]}function Ql(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Kl(a,n))l<r&&0>Kl(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Kl(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Kl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(Og=performance,wt.unstable_now=function(){return Og.now()}):(Ed=Date,Bg=Ed.now(),wt.unstable_now=function(){return Ed.now()-Bg});var Og,Ed,Bg,Ci=[],mr=[],$S=1,Zn=null,hn=3,ec=!1,ns=!1,aa=!1,Vg=typeof setTimeout=="function"?setTimeout:null,Hg=typeof clearTimeout=="function"?clearTimeout:null,zg=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function bd(t){for(var e=hi(mr);e!==null;){if(e.callback===null)Ql(mr);else if(e.startTime<=t)Ql(mr),e.sortIndex=e.expirationTime,Ad(Ci,e);else break;e=hi(mr)}}function Cd(t){if(aa=!1,bd(t),!ns)if(hi(Ci)!==null)ns=!0,Pd(Rd);else{var e=hi(mr);e!==null&&Id(Cd,e.startTime-t)}}function Rd(t,e){ns=!1,aa&&(aa=!1,Hg(la),la=-1),ec=!0;var n=hn;try{for(bd(e),Zn=hi(Ci);Zn!==null&&(!(Zn.expirationTime>e)||t&&!Xg());){var i=Zn.callback;if(typeof i=="function"){Zn.callback=null,hn=Zn.priorityLevel;var r=i(Zn.expirationTime<=e);e=wt.unstable_now(),typeof r=="function"?Zn.callback=r:Zn===hi(Ci)&&Ql(Ci),bd(e)}else Ql(Ci);Zn=hi(Ci)}if(Zn!==null)var s=!0;else{var o=hi(mr);o!==null&&Id(Cd,o.startTime-e),s=!1}return s}finally{Zn=null,hn=n,ec=!1}}var tc=!1,jl=null,la=-1,Gg=5,Wg=-1;function Xg(){return!(wt.unstable_now()-Wg<Gg)}function wd(){if(jl!==null){var t=wt.unstable_now();Wg=t;var e=!0;try{e=jl(!0,t)}finally{e?oa():(tc=!1,jl=null)}}else tc=!1}var oa;typeof zg=="function"?oa=function(){zg(wd)}:typeof MessageChannel<"u"?(Td=new MessageChannel,kg=Td.port2,Td.port1.onmessage=wd,oa=function(){kg.postMessage(null)}):oa=function(){Vg(wd,0)};var Td,kg;function Pd(t){jl=t,tc||(tc=!0,oa())}function Id(t,e){la=Vg(function(){t(wt.unstable_now())},e)}wt.unstable_IdlePriority=5;wt.unstable_ImmediatePriority=1;wt.unstable_LowPriority=4;wt.unstable_NormalPriority=3;wt.unstable_Profiling=null;wt.unstable_UserBlockingPriority=2;wt.unstable_cancelCallback=function(t){t.callback=null};wt.unstable_continueExecution=function(){ns||ec||(ns=!0,Pd(Rd))};wt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gg=0<t?Math.floor(1e3/t):5};wt.unstable_getCurrentPriorityLevel=function(){return hn};wt.unstable_getFirstCallbackNode=function(){return hi(Ci)};wt.unstable_next=function(t){switch(hn){case 1:case 2:case 3:var e=3;break;default:e=hn}var n=hn;hn=e;try{return t()}finally{hn=n}};wt.unstable_pauseExecution=function(){};wt.unstable_requestPaint=function(){};wt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=hn;hn=t;try{return e()}finally{hn=n}};wt.unstable_scheduleCallback=function(t,e,n){var i=wt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:$S++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Ad(mr,t),hi(Ci)===null&&t===hi(mr)&&(aa?(Hg(la),la=-1):aa=!0,Id(Cd,n-i))):(t.sortIndex=r,Ad(Ci,t),ns||ec||(ns=!0,Pd(Rd))),t};wt.unstable_shouldYield=Xg;wt.unstable_wrapCallback=function(t){var e=hn;return function(){var n=hn;hn=e;try{return t.apply(this,arguments)}finally{hn=n}}}});var $g=Wi((CR,Yg)=>{"use strict";Yg.exports=qg()});var jv=Wi(Vn=>{"use strict";var ZS=sa(),zn=$g();function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t_=new Set,Pa={};function ms(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(Pa[t]=e,t=0;t<e.length;t++)t_.add(e[t])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,JS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zg={},Jg={};function KS(t){return ef.call(Jg,t)?!0:ef.call(Zg,t)?!1:JS.test(t)?Jg[t]=!0:(Zg[t]=!0,!1)}function jS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QS(t,e,n,i){if(e===null||typeof e>"u"||jS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,$f);an[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,$f);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,$f);an[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zf(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QS(e,n,r,i)&&(n=null),i||r===null?KS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=ZS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nc=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),n_=Symbol.for("react.provider"),i_=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),jf=Symbol.for("react.memo"),_r=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var r_=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Kg=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,Ld;function _a(t){if(Ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ld=e&&e[1]||""}return`
`+Ld+t}var Nd=!1;function Dd(t,e){if(!t||Nd)return"";Nd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_a(t):""}function eM(t){switch(t.tag){case 5:return _a(t.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return t=Dd(t.type,!1),t;case 11:return t=Dd(t.type.render,!1),t;case 1:return t=Dd(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bs:return"Fragment";case Os:return"Portal";case tf:return"Profiler";case Jf:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case i_:return(t.displayName||"Context")+".Consumer";case n_:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jf:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function tM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nM(t){var e=s_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ic(t){t._valueTracker||(t._valueTracker=nM(t))}function o_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=s_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a_(t,e){e=e.checked,e!=null&&Zf(t,"checked",e,!1)}function af(t,e){a_(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function e0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(va(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function l_(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function t0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var rc,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(rc=rc||document.createElement("div"),rc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=rc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iM=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(t){iM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Sa[e]=Sa[t]})});function h_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Sa.hasOwnProperty(t)&&Sa[t]?(""+e).trim():e+"px"}function d_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=h_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rM=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(rM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ff=null;function Qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,Js=null,Ks=null;function n0(t){if(t=Za(t)){if(typeof pf!="function")throw Error(se(280));var e=t.stateNode;e&&(e=su(e),pf(t.stateNode,t.type,e))}}function f_(t){Js?Ks?Ks.push(t):Ks=[t]:Js=t}function p_(){if(Js){var t=Js,e=Ks;if(Ks=Js=null,n0(t),e)for(t=0;t<e.length;t++)n0(e[t])}}function m_(t,e){return t(e)}function g_(){}var Ud=!1;function __(t,e,n){if(Ud)return t(e,n);Ud=!0;try{return m_(t,e,n)}finally{Ud=!1,(Js!==null||Ks!==null)&&(g_(),p_())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var mf=!1;if(Ji)try{Us={},Object.defineProperty(Us,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{mf=!1}var Us;function sM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ma=!1,Lc=null,Nc=!1,gf=null,oM={onError:function(t){Ma=!0,Lc=t}};function aM(t,e,n,i,r,s,o,a,l){Ma=!1,Lc=null,sM.apply(oM,arguments)}function lM(t,e,n,i,r,s,o,a,l){if(aM.apply(this,arguments),Ma){if(Ma){var c=Lc;Ma=!1,Lc=null}else throw Error(se(198));Nc||(Nc=!0,gf=c)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function i0(t){if(gs(t)!==t)throw Error(se(188))}function cM(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return i0(r),t;if(s===i)return i0(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function y_(t){return t=cM(t),t!==null?x_(t):null}function x_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x_(t);if(e!==null)return e;t=t.sibling}return null}var S_=zn.unstable_scheduleCallback,r0=zn.unstable_cancelCallback,uM=zn.unstable_shouldYield,hM=zn.unstable_requestPaint,zt=zn.unstable_now,dM=zn.unstable_getCurrentPriorityLevel,ep=zn.unstable_ImmediatePriority,M_=zn.unstable_UserBlockingPriority,Dc=zn.unstable_NormalPriority,fM=zn.unstable_LowPriority,E_=zn.unstable_IdlePriority,tu=null,Li=null;function pM(t){if(Li&&typeof Li.onCommitFiberRoot=="function")try{Li.onCommitFiberRoot(tu,t,void 0,(t.current.flags&128)===128)}catch{}}var gi=Math.clz32?Math.clz32:_M,mM=Math.log,gM=Math.LN2;function _M(t){return t>>>=0,t===0?32:31-(mM(t)/gM|0)|0}var sc=64,oc=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=n&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-gi(e),r=1<<n,i|=t[n],e&=~r;return i}function vM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gi(s),a=1<<o,l=r[o];l===-1?((a&n)===0||(a&i)!==0)&&(r[o]=vM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w_(){var t=sc;return sc<<=1,(sc&4194240)===0&&(sc=64),t}function Fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gi(e),t[e]=n}function xM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-gi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var xt=0;function T_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var A_,np,b_,C_,R_,vf=!1,ac=[],Er=null,wr=null,Tr=null,Na=new Map,Da=new Map,yr=[],SM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s0(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function MM(t,e,n,i,r){switch(e){case"focusin":return Er=ua(Er,t,e,n,i,r),!0;case"dragenter":return wr=ua(wr,t,e,n,i,r),!0;case"mouseover":return Tr=ua(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Na.set(s,ua(Na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,ua(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function P_(t){var e=ss(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=v_(n),e!==null){t.blockedOn=e,R_(t.priority,function(){b_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ff=i,n.target.dispatchEvent(i),ff=null}else return e=Za(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function o0(t,e,n){Sc(t)&&n.delete(e)}function EM(){vf=!1,Er!==null&&Sc(Er)&&(Er=null),wr!==null&&Sc(wr)&&(wr=null),Tr!==null&&Sc(Tr)&&(Tr=null),Na.forEach(o0),Da.forEach(o0)}function ha(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,EM)))}function Ua(t){function e(r){return ha(r,t)}if(0<ac.length){ha(ac[0],t);for(var n=1;n<ac.length;n++){var i=ac[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&ha(Er,t),wr!==null&&ha(wr,t),Tr!==null&&ha(Tr,t),Na.forEach(e),Da.forEach(e),n=0;n<yr.length;n++)i=yr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)P_(n),n.blockedOn===null&&yr.shift()}var js=er.ReactCurrentBatchConfig,Fc=!0;function wM(t,e,n,i){var r=xt,s=js.transition;js.transition=null;try{xt=1,ip(t,e,n,i)}finally{xt=r,js.transition=s}}function TM(t,e,n,i){var r=xt,s=js.transition;js.transition=null;try{xt=4,ip(t,e,n,i)}finally{xt=r,js.transition=s}}function ip(t,e,n,i){if(Fc){var r=yf(t,e,n,i);if(r===null)Gd(t,e,i,Oc,n),s0(t,i);else if(MM(r,t,e,n,i))i.stopPropagation();else if(s0(t,i),e&4&&-1<SM.indexOf(t)){for(;r!==null;){var s=Za(r);if(s!==null&&A_(s),s=yf(t,e,n,i),s===null&&Gd(t,e,i,Oc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gd(t,e,i,null,n)}}var Oc=null;function yf(t,e,n,i){if(Oc=null,t=Qf(i),t=ss(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oc=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dM()){case ep:return 1;case M_:return 4;case Dc:case fM:return 16;case E_:return 536870912;default:return 16}default:return 16}}var Sr=null,rp=null,Mc=null;function L_(){if(Mc)return Mc;var t,e=rp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Mc=r.slice(t,1<i?1-i:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lc(){return!0}function a0(){return!1}function kn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lc:a0,this.isPropagationStopped=a0,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=kn(lo),$a=Ft({},lo,{view:0,detail:0}),AM=kn($a),Od,Bd,da,nu=Ft({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Od=t.screenX-da.screenX,Bd=t.screenY-da.screenY):Bd=Od=0,da=t),Od)},movementY:function(t){return"movementY"in t?t.movementY:Bd}}),l0=kn(nu),bM=Ft({},nu,{dataTransfer:0}),CM=kn(bM),RM=Ft({},$a,{relatedTarget:0}),zd=kn(RM),PM=Ft({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),IM=kn(PM),LM=Ft({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NM=kn(LM),DM=Ft({},lo,{data:0}),c0=kn(DM),UM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},OM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=OM[t])?!!e[t]:!1}function op(){return BM}var zM=Ft({},$a,{key:function(t){if(t.key){var e=UM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kM=kn(zM),VM=Ft({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u0=kn(VM),HM=Ft({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),GM=kn(HM),WM=Ft({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),XM=kn(WM),qM=Ft({},nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YM=kn(qM),$M=[9,13,27,32],ap=Ji&&"CompositionEvent"in window,Ea=null;Ji&&"documentMode"in document&&(Ea=document.documentMode);var ZM=Ji&&"TextEvent"in window&&!Ea,N_=Ji&&(!ap||Ea&&8<Ea&&11>=Ea),h0=" ",d0=!1;function D_(t,e){switch(t){case"keyup":return $M.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function JM(t,e){switch(t){case"compositionend":return U_(e);case"keypress":return e.which!==32?null:(d0=!0,h0);case"textInput":return t=e.data,t===h0&&d0?null:t;default:return null}}function KM(t,e){if(zs)return t==="compositionend"||!ap&&D_(t,e)?(t=L_(),Mc=rp=Sr=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N_&&e.locale!=="ko"?null:e.data;default:return null}}var jM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jM[t.type]:e==="textarea"}function F_(t,e,n,i){f_(i),e=Bc(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wa=null,Fa=null;function QM(t){Y_(t,0)}function iu(t){var e=Hs(t);if(o_(e))return t}function e1(t,e){if(t==="change")return e}var O_=!1;Ji&&(Ji?(uc="oninput"in document,uc||(kd=document.createElement("div"),kd.setAttribute("oninput","return;"),uc=typeof kd.oninput=="function"),cc=uc):cc=!1,O_=cc&&(!document.documentMode||9<document.documentMode));var cc,uc,kd;function p0(){wa&&(wa.detachEvent("onpropertychange",B_),Fa=wa=null)}function B_(t){if(t.propertyName==="value"&&iu(Fa)){var e=[];F_(e,Fa,t,Qf(t)),__(QM,e)}}function t1(t,e,n){t==="focusin"?(p0(),wa=e,Fa=n,wa.attachEvent("onpropertychange",B_)):t==="focusout"&&p0()}function n1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return iu(Fa)}function i1(t,e){if(t==="click")return iu(e)}function r1(t,e){if(t==="input"||t==="change")return iu(e)}function s1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:s1;function Oa(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ef.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function m0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,e){var n=m0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=m0(n)}}function z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k_(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o1(t){var e=k_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z_(n.ownerDocument.documentElement,n)){if(i!==null&&lp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=g0(n,s);var o=g0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a1=Ji&&"documentMode"in document&&11>=document.documentMode,ks=null,xf=null,Ta=null,Sf=!1;function _0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||ks==null||ks!==Ic(i)||(i=ks,"selectionStart"in i&&lp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&Oa(Ta,i)||(Ta=i,i=Bc(xf,"onSelect"),0<i.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ks)))}function hc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:hc("Animation","AnimationEnd"),animationiteration:hc("Animation","AnimationIteration"),animationstart:hc("Animation","AnimationStart"),transitionend:hc("Transition","TransitionEnd")},Vd={},V_={};Ji&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function ru(t){if(Vd[t])return Vd[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V_)return Vd[t]=e[n];return t}var H_=ru("animationend"),G_=ru("animationiteration"),W_=ru("animationstart"),X_=ru("transitionend"),q_=new Map,v0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){q_.set(t,e),ms(e,[t])}for(dc=0;dc<v0.length;dc++)fc=v0[dc],y0=fc.toLowerCase(),x0=fc[0].toUpperCase()+fc.slice(1),Nr(y0,"on"+x0);var fc,y0,x0,dc;Nr(H_,"onAnimationEnd");Nr(G_,"onAnimationIteration");Nr(W_,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(X_,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l1=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function S0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lM(i,e,void 0,t),t.currentTarget=null}function Y_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;S0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;S0(r,a,c),s=l}}}if(Nc)throw t=gf,Nc=!1,gf=null,t}function At(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var i=t+"__bubble";n.has(i)||($_(e,t,2,!1),n.add(i))}function Hd(t,e,n){var i=0;e&&(i|=4),$_(n,t,i,e)}var pc="_reactListening"+Math.random().toString(36).slice(2);function Ba(t){if(!t[pc]){t[pc]=!0,t_.forEach(function(n){n!=="selectionchange"&&(l1.has(n)||Hd(n,!1,t),Hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pc]||(e[pc]=!0,Hd("selectionchange",!1,e))}}function $_(t,e,n,i){switch(I_(e)){case 1:var r=wM;break;case 4:r=TM;break;default:r=ip}n=r.bind(null,e,n,t),r=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gd(t,e,n,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}__(function(){var c=s,u=Qf(n),f=[];e:{var h=q_.get(t);if(h!==void 0){var p=sp,_=t;switch(t){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":p=kM;break;case"focusin":_="focus",p=zd;break;case"focusout":_="blur",p=zd;break;case"beforeblur":case"afterblur":p=zd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=l0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=CM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GM;break;case H_:case G_:case W_:p=IM;break;case X_:p=XM;break;case"scroll":p=AM;break;case"wheel":p=YM;break;case"copy":case"cut":case"paste":p=NM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=u0}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?h!==null?h+"Capture":null:h;M=[];for(var m=c,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,d!==null&&(x=La(m,d),x!=null&&M.push(za(m,x,y)))),g)break;m=m.return}0<M.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:M}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ff&&(_=n.relatedTarget||n.fromElement)&&(ss(_)||_[Ki]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?ss(_):null,_!==null&&(g=gs(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=l0,x="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=u0,x="onPointerLeave",d="onPointerEnter",m="pointer"),g=p==null?h:Hs(p),y=_==null?h:Hs(_),h=new M(x,m+"leave",p,n,u),h.target=g,h.relatedTarget=y,x=null,ss(u)===c&&(M=new M(d,m+"enter",_,n,u),M.target=y,M.relatedTarget=g,x=M),g=x,p&&_)t:{for(M=p,d=_,m=0,y=M;y;y=Fs(y))m++;for(y=0,x=d;x;x=Fs(x))y++;for(;0<m-y;)M=Fs(M),m--;for(;0<y-m;)d=Fs(d),y--;for(;m--;){if(M===d||d!==null&&M===d.alternate)break t;M=Fs(M),d=Fs(d)}M=null}else M=null;p!==null&&M0(f,h,p,M,!1),_!==null&&g!==null&&M0(f,g,_,M,!0)}}e:{if(h=c?Hs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=e1;else if(f0(h))if(O_)A=r1;else{A=n1;var T=t1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=i1);if(A&&(A=A(t,c))){F_(f,A,n,u);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&lf(h,"number",h.value)}switch(T=c?Hs(c):window,t){case"focusin":(f0(T)||T.contentEditable==="true")&&(ks=T,xf=c,Ta=null);break;case"focusout":Ta=xf=ks=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,_0(f,n,u);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":_0(f,n,u)}var v;if(ap)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else zs?D_(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(N_&&n.locale!=="ko"&&(zs||w!=="onCompositionStart"?w==="onCompositionEnd"&&zs&&(v=L_()):(Sr=u,rp="value"in Sr?Sr.value:Sr.textContent,zs=!0)),T=Bc(c,w),0<T.length&&(w=new c0(w,t,null,n,u),f.push({event:w,listeners:T}),v?w.data=v:(v=U_(n),v!==null&&(w.data=v)))),(v=ZM?JM(t,n):KM(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(u=new c0("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=v))}Y_(f,e)})}function za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(za(t,s,r)),s=La(t,e),s!=null&&i.push(za(t,s,r))),t=t.return}return i}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function M0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=La(n,s),l!=null&&o.unshift(za(n,l,a))):r||(l=La(n,s),l!=null&&o.push(za(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var c1=/\r\n?/g,u1=/\u0000|\uFFFD/g;function E0(t){return(typeof t=="string"?t:""+t).replace(c1,`
`).replace(u1,"")}function mc(t,e,n){if(e=E0(e),E0(t)!==e&&n)throw Error(se(425))}function zc(){}var Mf=null,Ef=null;function wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(f1)}:Tf;function f1(t){setTimeout(function(){throw t})}function Wd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ua(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),Ii="__reactFiber$"+co,ka="__reactProps$"+co,Ki="__reactContainer$"+co,Af="__reactEvents$"+co,p1="__reactListeners$"+co,m1="__reactHandles$"+co;function ss(t){var e=t[Ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T0(t);t!==null;){if(n=t[Ii])return n;t=T0(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Ii]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function su(t){return t[ka]||null}var bf=[],Gs=-1;function Dr(t){return{current:t}}function bt(t){0>Gs||(t.current=bf[Gs],bf[Gs]=null,Gs--)}function Tt(t,e){Gs++,bf[Gs]=t.current,t.current=e}var Lr={},mn=Dr(Lr),In=Dr(!1),us=Lr;function no(t,e){var n=t.type.contextTypes;if(!n)return Lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Ln(t){return t=t.childContextTypes,t!=null}function kc(){bt(In),bt(mn)}function A0(t,e,n){if(mn.current!==Lr)throw Error(se(168));Tt(mn,e),Tt(In,n)}function Z_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,tM(t)||"Unknown",r));return Ft({},n,i)}function Vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Lr,us=mn.current,Tt(mn,t),Tt(In,In.current),!0}function b0(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Z_(t,e,us),i.__reactInternalMemoizedMergedChildContext=t,bt(In),bt(mn),Tt(mn,t)):bt(In),Tt(In,n)}var qi=null,ou=!1,Xd=!1;function J_(t){qi===null?qi=[t]:qi.push(t)}function g1(t){ou=!0,J_(t)}function Ur(){if(!Xd&&qi!==null){Xd=!0;var t=0,e=xt;try{var n=qi;for(xt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}qi=null,ou=!1}catch(r){throw qi!==null&&(qi=qi.slice(t+1)),S_(ep,Ur),r}finally{xt=e,Xd=!1}}return null}var Ws=[],Xs=0,Hc=null,Gc=0,Jn=[],Kn=0,hs=null,Yi=1,$i="";function is(t,e){Ws[Xs++]=Gc,Ws[Xs++]=Hc,Hc=t,Gc=e}function K_(t,e,n){Jn[Kn++]=Yi,Jn[Kn++]=$i,Jn[Kn++]=hs,hs=t;var i=Yi;t=$i;var r=32-gi(i)-1;i&=~(1<<r),n+=1;var s=32-gi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-gi(e)+r|n<<r|i,$i=s+t}else Yi=1<<s|n<<r|i,$i=t}function cp(t){t.return!==null&&(is(t,1),K_(t,1,0))}function up(t){for(;t===Hc;)Hc=Ws[--Xs],Ws[Xs]=null,Gc=Ws[--Xs],Ws[Xs]=null;for(;t===hs;)hs=Jn[--Kn],Jn[Kn]=null,$i=Jn[--Kn],Jn[Kn]=null,Yi=Jn[--Kn],Jn[Kn]=null}var Bn=null,On=null,Rt=!1,mi=null;function j_(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function C0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bn=t,On=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bn=t,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Yi,overflow:$i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bn=t,On=null,!0):!1;default:return!1}}function Cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Rf(t){if(Rt){var e=On;if(e){var n=e;if(!C0(t,e)){if(Cf(t))throw Error(se(418));e=Ar(n.nextSibling);var i=Bn;e&&C0(t,e)?j_(i,n):(t.flags=t.flags&-4097|2,Rt=!1,Bn=t)}}else{if(Cf(t))throw Error(se(418));t.flags=t.flags&-4097|2,Rt=!1,Bn=t}}}function R0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bn=t}function gc(t){if(t!==Bn)return!1;if(!Rt)return R0(t),Rt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wf(t.type,t.memoizedProps)),e&&(e=On)){if(Cf(t))throw Q_(),Error(se(418));for(;e;)j_(t,e),e=Ar(e.nextSibling)}if(R0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){On=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}On=null}}else On=Bn?Ar(t.stateNode.nextSibling):null;return!0}function Q_(){for(var t=On;t;)t=Ar(t.nextSibling)}function io(){On=Bn=null,Rt=!1}function hp(t){mi===null?mi=[t]:mi.push(t)}var _1=er.ReactCurrentBatchConfig;function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function _c(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function P0(t){var e=t._init;return e(t._payload)}function ev(t){function e(d,m){if(t){var y=d.deletions;y===null?(d.deletions=[m],d.flags|=16):y.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function i(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function r(d,m){return d=Pr(d,m),d.index=0,d.sibling=null,d}function s(d,m,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<m?(d.flags|=2,m):y):(d.flags|=2,m)):(d.flags|=1048576,m)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,y,x){return m===null||m.tag!==6?(m=jd(y,d.mode,x),m.return=d,m):(m=r(m,y),m.return=d,m)}function l(d,m,y,x){var A=y.type;return A===Bs?u(d,m,y.props.children,x,y.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_r&&P0(A)===m.type)?(x=r(m,y.props),x.ref=fa(d,m,y),x.return=d,x):(x=Pc(y.type,y.key,y.props,null,d.mode,x),x.ref=fa(d,m,y),x.return=d,x)}function c(d,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Qd(y,d.mode,x),m.return=d,m):(m=r(m,y.children||[]),m.return=d,m)}function u(d,m,y,x,A){return m===null||m.tag!==7?(m=cs(y,d.mode,x,A),m.return=d,m):(m=r(m,y),m.return=d,m)}function f(d,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jd(""+m,d.mode,y),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nc:return y=Pc(m.type,m.key,m.props,null,d.mode,y),y.ref=fa(d,null,m),y.return=d,y;case Os:return m=Qd(m,d.mode,y),m.return=d,m;case _r:var x=m._init;return f(d,x(m._payload),y)}if(va(m)||ca(m))return m=cs(m,d.mode,y,null),m.return=d,m;_c(d,m)}return null}function h(d,m,y,x){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(d,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case nc:return y.key===A?l(d,m,y,x):null;case Os:return y.key===A?c(d,m,y,x):null;case _r:return A=y._init,h(d,m,A(y._payload),x)}if(va(y)||ca(y))return A!==null?null:u(d,m,y,x,null);_c(d,y)}return null}function p(d,m,y,x,A){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(y)||null,a(m,d,""+x,A);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case nc:return d=d.get(x.key===null?y:x.key)||null,l(m,d,x,A);case Os:return d=d.get(x.key===null?y:x.key)||null,c(m,d,x,A);case _r:var T=x._init;return p(d,m,y,T(x._payload),A)}if(va(x)||ca(x))return d=d.get(y)||null,u(m,d,x,A,null);_c(m,x)}return null}function _(d,m,y,x){for(var A=null,T=null,v=m,w=m=0,U=null;v!==null&&w<y.length;w++){v.index>w?(U=v,v=null):U=v.sibling;var C=h(d,v,y[w],x);if(C===null){v===null&&(v=U);break}t&&v&&C.alternate===null&&e(d,v),m=s(C,m,w),T===null?A=C:T.sibling=C,T=C,v=U}if(w===y.length)return n(d,v),Rt&&is(d,w),A;if(v===null){for(;w<y.length;w++)v=f(d,y[w],x),v!==null&&(m=s(v,m,w),T===null?A=v:T.sibling=v,T=v);return Rt&&is(d,w),A}for(v=i(d,v);w<y.length;w++)U=p(v,d,w,y[w],x),U!==null&&(t&&U.alternate!==null&&v.delete(U.key===null?w:U.key),m=s(U,m,w),T===null?A=U:T.sibling=U,T=U);return t&&v.forEach(function(R){return e(d,R)}),Rt&&is(d,w),A}function M(d,m,y,x){var A=ca(y);if(typeof A!="function")throw Error(se(150));if(y=A.call(y),y==null)throw Error(se(151));for(var T=A=null,v=m,w=m=0,U=null,C=y.next();v!==null&&!C.done;w++,C=y.next()){v.index>w?(U=v,v=null):U=v.sibling;var R=h(d,v,C.value,x);if(R===null){v===null&&(v=U);break}t&&v&&R.alternate===null&&e(d,v),m=s(R,m,w),T===null?A=R:T.sibling=R,T=R,v=U}if(C.done)return n(d,v),Rt&&is(d,w),A;if(v===null){for(;!C.done;w++,C=y.next())C=f(d,C.value,x),C!==null&&(m=s(C,m,w),T===null?A=C:T.sibling=C,T=C);return Rt&&is(d,w),A}for(v=i(d,v);!C.done;w++,C=y.next())C=p(v,d,w,C.value,x),C!==null&&(t&&C.alternate!==null&&v.delete(C.key===null?w:C.key),m=s(C,m,w),T===null?A=C:T.sibling=C,T=C);return t&&v.forEach(function(k){return e(d,k)}),Rt&&is(d,w),A}function g(d,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case nc:e:{for(var A=y.key,T=m;T!==null;){if(T.key===A){if(A=y.type,A===Bs){if(T.tag===7){n(d,T.sibling),m=r(T,y.props.children),m.return=d,d=m;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===_r&&P0(A)===T.type){n(d,T.sibling),m=r(T,y.props),m.ref=fa(d,T,y),m.return=d,d=m;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===Bs?(m=cs(y.props.children,d.mode,x,y.key),m.return=d,d=m):(x=Pc(y.type,y.key,y.props,null,d.mode,x),x.ref=fa(d,m,y),x.return=d,d=x)}return o(d);case Os:e:{for(T=y.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(d,m.sibling),m=r(m,y.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=Qd(y,d.mode,x),m.return=d,d=m}return o(d);case _r:return T=y._init,g(d,m,T(y._payload),x)}if(va(y))return _(d,m,y,x);if(ca(y))return M(d,m,y,x);_c(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(d,m.sibling),m=r(m,y),m.return=d,d=m):(n(d,m),m=jd(y,d.mode,x),m.return=d,d=m),o(d)):n(d,m)}return g}var ro=ev(!0),tv=ev(!1),Wc=Dr(null),Xc=null,qs=null,dp=null;function fp(){dp=qs=Xc=null}function pp(t){var e=Wc.current;bt(Wc),t._currentValue=e}function Pf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Xc=t,dp=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Pn=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Xc===null)throw Error(se(308));qs=t,Xc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var os=null;function mp(t){os===null?os=[t]:os.push(t)}function nv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mp(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function br(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(ft&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,mp(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}function I0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,M=a;switch(h=e,p=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=Ft({},f,h);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);fs|=o,t.lanes=o,t.memoizedState=f}}function L0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ja={},Ni=Dr(Ja),Va=Dr(Ja),Ha=Dr(Ja);function as(t){if(t===Ja)throw Error(se(174));return t}function _p(t,e){switch(Tt(Ha,e),Tt(Va,t),Tt(Ni,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}bt(Ni),Tt(Ni,e)}function so(){bt(Ni),bt(Va),bt(Ha)}function rv(t){as(Ha.current);var e=as(Ni.current),n=uf(e,t.type);e!==n&&(Tt(Va,t),Tt(Ni,n))}function vp(t){Va.current===t&&(bt(Ni),bt(Va))}var Dt=Dr(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qd=[];function yp(){for(var t=0;t<qd.length;t++)qd[t]._workInProgressVersionPrimary=null;qd.length=0}var Tc=er.ReactCurrentDispatcher,Yd=er.ReactCurrentBatchConfig,ds=0,Ut=null,qt=null,jt=null,$c=!1,Aa=!1,Ga=0,v1=0;function dn(){throw Error(se(321))}function xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function Sp(t,e,n,i,r,s){if(ds=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tc.current=t===null||t.memoizedState===null?M1:E1,t=n(i,r),Aa){s=0;do{if(Aa=!1,Ga=0,25<=s)throw Error(se(301));s+=1,jt=qt=null,e.updateQueue=null,Tc.current=w1,t=n(i,r)}while(Aa)}if(Tc.current=Zc,e=qt!==null&&qt.next!==null,ds=0,jt=qt=Ut=null,$c=!1,e)throw Error(se(300));return t}function Mp(){var t=Ga!==0;return Ga=0,t}function Pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ut.memoizedState=jt=t:jt=jt.next=t,jt}function ti(){if(qt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var e=jt===null?Ut.memoizedState:jt.next;if(e!==null)jt=e,qt=t;else{if(t===null)throw Error(se(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},jt===null?Ut.memoizedState=jt=t:jt=jt.next=t}return jt}function Wa(t,e){return typeof e=="function"?e(t):e}function $d(t){var e=ti(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=qt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ds&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Ut.lanes|=u,fs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(Pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ut.lanes|=s,fs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zd(t){var e=ti(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sv(){}function ov(t,e){var n=Ut,i=ti(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Pn=!0),i=i.queue,Ep(cv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Xa(9,lv.bind(null,n,i,r,e),void 0,null),Qt===null)throw Error(se(349));(ds&30)!==0||av(n,e,r)}return r}function av(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lv(t,e,n,i){e.value=n,e.getSnapshot=i,uv(e)&&hv(t)}function cv(t,e,n){return n(function(){uv(e)&&hv(t)})}function uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function hv(t){var e=ji(t,1);e!==null&&_i(e,t,1,-1)}function N0(t){var e=Pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:t},e.queue=t,t=t.dispatch=S1.bind(null,Ut,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dv(){return ti().memoizedState}function Ac(t,e,n,i){var r=Pi();Ut.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function au(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(qt!==null){var o=qt.memoizedState;if(s=o.destroy,i!==null&&xp(i,o.deps)){r.memoizedState=Xa(e,n,s,i);return}}Ut.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function D0(t,e){return Ac(8390656,8,t,e)}function Ep(t,e){return au(2048,8,t,e)}function fv(t,e){return au(4,2,t,e)}function pv(t,e){return au(4,4,t,e)}function mv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gv(t,e,n){return n=n!=null?n.concat([t]):null,au(4,4,mv.bind(null,e,t),n)}function wp(){}function _v(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vv(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yv(t,e,n){return(ds&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=n):(vi(n,e)||(n=w_(),Ut.lanes|=n,fs|=n,t.baseState=!0),e)}function y1(t,e){var n=xt;xt=n!==0&&4>n?n:4,t(!0);var i=Yd.transition;Yd.transition={};try{t(!1),e()}finally{xt=n,Yd.transition=i}}function xv(){return ti().memoizedState}function x1(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Sv(t))Mv(e,n);else if(n=nv(t,e,n,i),n!==null){var r=Sn();_i(n,t,i,r),Ev(n,e,i)}}function S1(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sv(t))Mv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,mp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=nv(t,e,r,i),n!==null&&(r=Sn(),_i(n,t,i,r),Ev(n,e,i))}}function Sv(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function Mv(t,e){Aa=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ev(t,e,n){if((n&4194240)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,tp(t,n)}}var Zc={readContext:ei,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useInsertionEffect:dn,useLayoutEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useMutableSource:dn,useSyncExternalStore:dn,useId:dn,unstable_isNewReconciler:!1},M1={readContext:ei,useCallback:function(t,e){return Pi().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:D0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ac(4194308,4,mv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ac(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ac(4,2,t,e)},useMemo:function(t,e){var n=Pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=x1.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=Pi();return t={current:t},e.memoizedState=t},useState:N0,useDebugValue:wp,useDeferredValue:function(t){return Pi().memoizedState=t},useTransition:function(){var t=N0(!1),e=t[0];return t=y1.bind(null,t[1]),Pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=Pi();if(Rt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Qt===null)throw Error(se(349));(ds&30)!==0||av(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,D0(cv.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,lv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Pi(),e=Qt.identifierPrefix;if(Rt){var n=$i,i=Yi;n=(i&~(1<<32-gi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ga++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=v1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},E1={readContext:ei,useCallback:_v,useContext:ei,useEffect:Ep,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:$d,useRef:dv,useState:function(){return $d(Wa)},useDebugValue:wp,useDeferredValue:function(t){var e=ti();return yv(e,qt.memoizedState,t)},useTransition:function(){var t=$d(Wa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1},w1={readContext:ei,useCallback:_v,useContext:ei,useEffect:Ep,useImperativeHandle:gv,useInsertionEffect:fv,useLayoutEffect:pv,useMemo:vv,useReducer:Zd,useRef:dv,useState:function(){return Zd(Wa)},useDebugValue:wp,useDeferredValue:function(t){var e=ti();return qt===null?e.memoizedState=t:yv(e,qt.memoizedState,t)},useTransition:function(){var t=Zd(Wa)[0],e=ti().memoizedState;return[t,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:xv,unstable_isNewReconciler:!1};function fi(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function If(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lu={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Rr(t),s=Zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(_i(e,t,r,i),wc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Sn(),r=Rr(t),s=Zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=br(t,s,r),e!==null&&(_i(e,t,r,i),wc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Sn(),i=Rr(t),r=Zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=br(t,r,i),e!==null&&(_i(e,t,i,n),wc(e,t,i))}};function U0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,s):!0}function wv(t,e,n){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=Ln(e)?us:mn.current,i=e.contextTypes,s=(i=i!=null)?no(t,r):Lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function F0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lu.enqueueReplaceState(e,e.state,null)}function Lf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=Ln(e)?us:mn.current,r.context=no(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(If(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lu.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",i=e;do n+=eM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var T1=typeof WeakMap=="function"?WeakMap:Map;function Tv(t,e,n){n=Zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kc||(Kc=!0,Gf=i),Nf(t,e)},n}function Av(t,e,n){n=Zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function O0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new T1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=z1.bind(null,t,e,n),e.then(t,t))}function B0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function z0(t,e,n,i,r){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zi(-1,1),e.tag=2,br(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var A1=er.ReactCurrentOwner,Pn=!1;function xn(t,e,n,i){e.child=t===null?tv(e,null,n,i):ro(e,t.child,n,i)}function k0(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=Sp(t,e,n,i,s,r),n=Mp(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(Rt&&n&&cp(e),e.flags|=1,xn(t,e,i,r),e.child)}function V0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bv(t,e,s,i,r)):(t=Pc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&r)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,i)&&t.ref===e.ref)return Qi(t,e,r)}return e.flags|=1,t=Pr(s,i),t.ref=e.ref,t.return=e,e.child=t}function bv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oa(s,i)&&t.ref===e.ref)if(Pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)(t.flags&131072)!==0&&(Pn=!0);else return e.lanes=t.lanes,Qi(t,e,r)}return Df(t,e,n,i,r)}function Cv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt($s,Fn),Fn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt($s,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Tt($s,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Tt($s,Fn),Fn|=i;return xn(t,e,r,n),e.child}function Rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Df(t,e,n,i,r){var s=Ln(n)?us:mn.current;return s=no(e,s),Qs(e,r),n=Sp(t,e,n,i,s,r),i=Mp(),t!==null&&!Pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Qi(t,e,r)):(Rt&&i&&cp(e),e.flags|=1,xn(t,e,n,r),e.child)}function H0(t,e,n,i,r){if(Ln(n)){var s=!0;Vc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)bc(t,e),wv(e,n,i),Lf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=Ln(n)?us:mn.current,c=no(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&F0(e,o,i,c),vr=!1;var h=e.memoizedState;o.state=h,qc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||In.current||vr?(typeof u=="function"&&(If(e,n,u,i),l=e.memoizedState),(a=vr||U0(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=Ln(n)?us:mn.current,l=no(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&F0(e,o,i,l),vr=!1,h=e.memoizedState,o.state=h,qc(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||In.current||vr?(typeof p=="function"&&(If(e,n,p,i),_=e.memoizedState),(c=vr||U0(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Uf(t,e,n,i,s,r)}function Uf(t,e,n,i,r,s){Rv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&b0(e,n,!1),Qi(t,e,s);i=e.stateNode,A1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):xn(t,e,a,s),e.memoizedState=i.state,r&&b0(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?A0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&A0(t,e.context,!1),_p(t,e.containerInfo)}function G0(t,e,n,i,r){return io(),hp(r),e.flags|=256,xn(t,e,n,i),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var i=e.pendingProps,r=Dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Tt(Dt,r&1),t===null)return Rf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hu(o,i,0,null),t=cs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Of(n),e.memoizedState=Ff,t):Tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return b1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=cs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,i}return s=t.child,t=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tp(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vc(t,e,n,i){return i!==null&&hp(i),ro(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function b1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jd(Error(se(422))),vc(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hu({mode:"visible",children:i.children},r,0,null),s=cs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ro(e,t.child,null,o),e.child.memoizedState=Of(o),e.memoizedState=Ff,s);if((e.mode&1)===0)return vc(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Jd(s,i,void 0),vc(t,e,o,i)}if(a=(o&t.childLanes)!==0,Pn||a){if(i=Qt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),_i(i,t,r,-1))}return Ip(),i=Jd(Error(se(421))),vc(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=k1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,On=Ar(r.nextSibling),Bn=e,Rt=!0,mi=null,t!==null&&(Jn[Kn++]=Yi,Jn[Kn++]=$i,Jn[Kn++]=hs,Yi=t.id,$i=t.overflow,hs=e),e=Tp(e,i.children),e.flags|=4096,e)}function W0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Pf(t.return,e,n)}function Kd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=Dt.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&W0(t,n,e);else if(t.tag===19)W0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(Dt,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kd(e,!0,n,null,s);break;case"together":Kd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fs|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function C1(t,e,n){switch(e.tag){case 3:Pv(e),io();break;case 5:rv(e);break;case 1:Ln(e.type)&&Vc(e);break;case 4:_p(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(Wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Dt,Dt.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Iv(t,e,n):(Tt(Dt,Dt.current&1),t=Qi(t,e,n),t!==null?t.sibling:null);Tt(Dt,Dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,(t.flags&128)!==0){if(i)return Lv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Dt,Dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Cv(t,e,n)}return Qi(t,e,n)}var Nv,Bf,Dv,Uv;Nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bf=function(){};Dv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,as(Ni.current);var s=null;switch(n){case"input":r=of(t,r),i=of(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=cf(t,r),i=cf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}hf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&At("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!Rt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function R1(t,e,n){var i=e.pendingProps;switch(up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return Ln(e.type)&&kc(),fn(e),null;case 3:return i=e.stateNode,so(),bt(In),bt(mn),yp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mi!==null&&(qf(mi),mi=null))),Bf(t,e),fn(e),null;case 5:vp(e);var r=as(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)Dv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return fn(e),null}if(t=as(Ni.current),gc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ii]=e,i[ka]=s,t=(e.mode&1)!==0,n){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)At(xa[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":jg(i,s),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},At("invalid",i);break;case"textarea":e0(i,s),At("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&mc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mc(i.textContent,a,t),r=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&At("scroll",i)}switch(n){case"input":ic(i),Qg(i,s,!0);break;case"textarea":ic(i),t0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ii]=e,t[ka]=i,Nv(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,i),n){case"dialog":At("cancel",t),At("close",t),r=i;break;case"iframe":case"object":case"embed":At("load",t),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)At(xa[r],t);r=i;break;case"source":At("error",t),r=i;break;case"img":case"image":case"link":At("error",t),At("load",t),r=i;break;case"details":At("toggle",t),r=i;break;case"input":jg(t,i),r=of(t,i),At("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),At("invalid",t);break;case"textarea":e0(t,i),r=cf(t,i),At("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?d_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&u_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ia(t,l):typeof l=="number"&&Ia(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",t):l!=null&&Zf(t,s,l,o))}switch(n){case"input":ic(t),Qg(t,i,!1);break;case"textarea":ic(t),t0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)Uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=as(Ha.current),as(Ni.current),gc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ii]=e,(s=i.nodeValue!==n)&&(t=Bn,t!==null))switch(t.tag){case 3:mc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ii]=e,e.stateNode=i}return fn(e),null;case 13:if(bt(Dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Rt&&On!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Q_(),io(),e.flags|=98560,s=!1;else if(s=gc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ii]=e}else io(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;fn(e),s=!1}else mi!==null&&(qf(mi),mi=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Dt.current&1)!==0?Yt===0&&(Yt=3):Ip())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return so(),Bf(t,e),t===null&&Ba(e.stateNode.containerInfo),fn(e),null;case 10:return pp(e.type._context),fn(e),null;case 17:return Ln(e.type)&&kc(),fn(e),null;case 19:if(bt(Dt),s=e.memoizedState,s===null)return fn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)pa(s,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,pa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(Dt,Dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&zt()>ao&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Rt)return fn(e),null}else 2*zt()-s.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=zt(),e.sibling=null,n=Dt.current,Tt(Dt,i?n&1|2:n&1),e):(fn(e),null);case 22:case 23:return Pp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Fn&1073741824)!==0&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function P1(t,e){switch(up(e),e.tag){case 1:return Ln(e.type)&&kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return so(),bt(In),bt(mn),yp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return vp(e),null;case 13:if(bt(Dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));io()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return bt(Dt),null;case 4:return so(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Pp(),null;case 24:return null;default:return null}}var yc=!1,pn=!1,I1=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Bt(t,e,i)}else n.current=null}function zf(t,e,n){try{n()}catch(i){Bt(t,e,i)}}var X0=!1;function L1(t,e){if(Mf=Fc,t=k_(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ef={focusedElem:t,selectionRange:n},Fc=!1,Pe=e;Pe!==null;)if(e=Pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Pe=t;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:fi(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){Bt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}return _=X0,X0=!1,_}function ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,n,s)}r=r.next}while(r!==i)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fv(t){var e=t.alternate;e!==null&&(t.alternate=null,Fv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ii],delete e[ka],delete e[Af],delete e[p1],delete e[m1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ov(t){return t.tag===5||t.tag===3||t.tag===4}function q0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(Vf(t,e,n),t=t.sibling;t!==null;)Vf(t,e,n),t=t.sibling}function Hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hf(t,e,n),t=t.sibling;t!==null;)Hf(t,e,n),t=t.sibling}var sn=null,pi=!1;function gr(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if(Li&&typeof Li.onCommitFiberUnmount=="function")try{Li.onCommitFiberUnmount(tu,n)}catch{}switch(n.tag){case 5:pn||Ys(n,e);case 6:var i=sn,r=pi;sn=null,gr(t,e,n),sn=i,pi=r,sn!==null&&(pi?(t=sn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):sn.removeChild(n.stateNode));break;case 18:sn!==null&&(pi?(t=sn,n=n.stateNode,t.nodeType===8?Wd(t.parentNode,n):t.nodeType===1&&Wd(t,n),Ua(t)):Wd(sn,n.stateNode));break;case 4:i=sn,r=pi,sn=n.stateNode.containerInfo,pi=!0,gr(t,e,n),sn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&zf(n,e,o),r=r.next}while(r!==i)}gr(t,e,n);break;case 1:if(!pn&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Bt(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(pn=(i=pn)||n.memoizedState!==null,gr(t,e,n),pn=i):gr(t,e,n);break;default:gr(t,e,n)}}function Y0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I1),e.forEach(function(i){var r=V1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function di(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:sn=a.stateNode,pi=!1;break e;case 3:sn=a.stateNode.containerInfo,pi=!0;break e;case 4:sn=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(sn===null)throw Error(se(160));Bv(s,o,r),sn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,t),e=e.sibling}function zv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(di(e,t),Ri(t),i&4){try{ba(3,t,t.return),cu(3,t)}catch(M){Bt(t,t.return,M)}try{ba(5,t,t.return)}catch(M){Bt(t,t.return,M)}}break;case 1:di(e,t),Ri(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if(di(e,t),Ri(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{Ia(r,"")}catch(M){Bt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a_(r,s),df(a,o);var c=df(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?d_(r,f):u==="dangerouslySetInnerHTML"?u_(r,f):u==="children"?Ia(r,f):Zf(r,u,f,c)}switch(a){case"input":af(r,s);break;case"textarea":l_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ka]=s}catch(M){Bt(t,t.return,M)}}break;case 6:if(di(e,t),Ri(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Bt(t,t.return,M)}}break;case 3:if(di(e,t),Ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(M){Bt(t,t.return,M)}break;case 4:di(e,t),Ri(t);break;case 13:di(e,t),Ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cp=zt())),i&4&&Y0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(pn=(c=pn)||u,di(e,t),pn=c):di(e,t),Ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&(t.mode&1)!==0)for(Pe=t,u=t.child;u!==null;){for(f=Pe=u;Pe!==null;){switch(h=Pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:ba(4,h,h.return);break;case 1:Ys(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Bt(i,n,M)}}break;case 5:Ys(h,h.return);break;case 22:if(h.memoizedState!==null){Z0(f);continue}}p!==null?(p.return=h,Pe=p):Z0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=h_("display",o))}catch(M){Bt(t,t.return,M)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){Bt(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:di(e,t),Ri(t),i&4&&Y0(t);break;case 21:break;default:di(e,t),Ri(t)}}function Ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ov(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ia(r,""),i.flags&=-33);var s=q0(t);Hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=q0(t);Vf(t,a,o);break;default:throw Error(se(161))}}catch(l){Bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function N1(t,e,n){Pe=t,kv(t,e,n)}function kv(t,e,n){for(var i=(t.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=yc;var c=pn;if(yc=o,(pn=l)&&!c)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?J0(r):l!==null?(l.return=o,Pe=l):J0(r);for(;s!==null;)Pe=s,kv(s,e,n),s=s.sibling;Pe=r,yc=a,pn=c}$0(t,e,n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,Pe=s):$0(t,e,n)}}function $0(t){for(;Pe!==null;){var e=Pe;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:pn||cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}L0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}pn||e.flags&512&&kf(e)}catch(h){Bt(e,e.return,h)}}if(e===t){Pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function Z0(t){for(;Pe!==null;){var e=Pe;if(e===t){Pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Pe=n;break}Pe=e.return}}function J0(t){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){Bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{kf(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{kf(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===t){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var D1=Math.ceil,Jc=er.ReactCurrentDispatcher,Ap=er.ReactCurrentOwner,Qn=er.ReactCurrentBatchConfig,ft=0,Qt=null,Vt=null,on=0,Fn=0,$s=Dr(0),Yt=0,qa=null,fs=0,uu=0,bp=0,Ca=null,Rn=null,Cp=0,ao=1/0,Xi=null,Kc=!1,Gf=null,Cr=null,xc=!1,Mr=null,jc=0,Ra=0,Wf=null,Cc=-1,Rc=0;function Sn(){return(ft&6)!==0?zt():Cc!==-1?Cc:Cc=zt()}function Rr(t){return(t.mode&1)===0?1:(ft&2)!==0&&on!==0?on&-on:_1.transition!==null?(Rc===0&&(Rc=w_()),Rc):(t=xt,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t)}function _i(t,e,n,i){if(50<Ra)throw Ra=0,Wf=null,Error(se(185));Ya(t,n,i),((ft&2)===0||t!==Qt)&&(t===Qt&&((ft&2)===0&&(uu|=n),Yt===4&&xr(t,on)),Nn(t,i),n===1&&ft===0&&(e.mode&1)===0&&(ao=zt()+500,ou&&Ur()))}function Nn(t,e){var n=t.callbackNode;yM(t,e);var i=Uc(t,t===Qt?on:0);if(i===0)n!==null&&r0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&r0(n),e===1)t.tag===0?g1(K0.bind(null,t)):J_(K0.bind(null,t)),d1(function(){(ft&6)===0&&Ur()}),n=null;else{switch(T_(i)){case 1:n=ep;break;case 4:n=M_;break;case 16:n=Dc;break;case 536870912:n=E_;break;default:n=Dc}n=$v(n,Vv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vv(t,e){if(Cc=-1,Rc=0,(ft&6)!==0)throw Error(se(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=Uc(t,t===Qt?on:0);if(i===0)return null;if((i&30)!==0||(i&t.expiredLanes)!==0||e)e=Qc(t,i);else{e=i;var r=ft;ft|=2;var s=Gv();(Qt!==t||on!==e)&&(Xi=null,ao=zt()+500,ls(t,e));do try{O1();break}catch(a){Hv(t,a)}while(!0);fp(),Jc.current=s,ft=r,Vt!==null?e=0:(Qt=null,on=0,e=Yt)}if(e!==0){if(e===2&&(r=_f(t),r!==0&&(i=r,e=Xf(t,r))),e===1)throw n=qa,ls(t,0),xr(t,i),Nn(t,zt()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,(i&30)===0&&!U1(r)&&(e=Qc(t,i),e===2&&(s=_f(t),s!==0&&(i=s,e=Xf(t,s))),e===1))throw n=qa,ls(t,0),xr(t,i),Nn(t,zt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:rs(t,Rn,Xi);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=Cp+500-zt(),10<e)){if(Uc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tf(rs.bind(null,t,Rn,Xi),e);break}rs(t,Rn,Xi);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-gi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*D1(i/1960))-i,10<i){t.timeoutHandle=Tf(rs.bind(null,t,Rn,Xi),i);break}rs(t,Rn,Xi);break;case 5:rs(t,Rn,Xi);break;default:throw Error(se(329))}}}return Nn(t,zt()),t.callbackNode===n?Vv.bind(null,t):null}function Xf(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=Rn,Rn=n,e!==null&&qf(e)),t}function qf(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function U1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~bp,e&=~uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gi(e),i=1<<n;t[n]=-1,e&=~i}}function K0(t){if((ft&6)!==0)throw Error(se(327));eo();var e=Uc(t,0);if((e&1)===0)return Nn(t,zt()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var i=_f(t);i!==0&&(e=i,n=Xf(t,i))}if(n===1)throw n=qa,ls(t,0),xr(t,e),Nn(t,zt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rs(t,Rn,Xi),Nn(t,zt()),null}function Rp(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(ao=zt()+500,ou&&Ur())}}function ps(t){Mr!==null&&Mr.tag===0&&(ft&6)===0&&eo();var e=ft;ft|=1;var n=Qn.transition,i=xt;try{if(Qn.transition=null,xt=1,t)return t()}finally{xt=i,Qn.transition=n,ft=e,(ft&6)===0&&Ur()}}function Pp(){Fn=$s.current,bt($s)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h1(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kc();break;case 3:so(),bt(In),bt(mn),yp();break;case 5:vp(i);break;case 4:so();break;case 13:bt(Dt);break;case 19:bt(Dt);break;case 10:pp(i.type._context);break;case 22:case 23:Pp()}n=n.return}if(Qt=t,Vt=t=Pr(t.current,null),on=Fn=e,Yt=0,qa=null,bp=uu=fs=0,Rn=Ca=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}os=null}return t}function Hv(t,e){do{var n=Vt;try{if(fp(),Tc.current=Zc,$c){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$c=!1}if(ds=0,jt=qt=Ut=null,Aa=!1,Ga=0,Ap.current=null,n===null||n.return===null){Yt=1,qa=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=on,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if((u.mode&1)===0&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=B0(o);if(p!==null){p.flags&=-257,z0(p,o,a,s,e),p.mode&1&&O0(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if((e&1)===0){O0(s,c,e),Ip();break e}l=Error(se(426))}}else if(Rt&&a.mode&1){var g=B0(o);if(g!==null){(g.flags&65536)===0&&(g.flags|=256),z0(g,o,a,s,e),hp(oo(l,a));break e}}s=l=oo(l,a),Yt!==4&&(Yt=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Tv(s,l,e);I0(s,d);break e;case 1:a=l;var m=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Cr===null||!Cr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Av(s,a,e);I0(s,x);break e}}s=s.return}while(s!==null)}Xv(n)}catch(A){e=A,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function Gv(){var t=Jc.current;return Jc.current=Zc,t===null?Zc:t}function Ip(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),Qt===null||(fs&268435455)===0&&(uu&268435455)===0||xr(Qt,on)}function Qc(t,e){var n=ft;ft|=2;var i=Gv();(Qt!==t||on!==e)&&(Xi=null,ls(t,e));do try{F1();break}catch(r){Hv(t,r)}while(!0);if(fp(),ft=n,Jc.current=i,Vt!==null)throw Error(se(261));return Qt=null,on=0,Yt}function F1(){for(;Vt!==null;)Wv(Vt)}function O1(){for(;Vt!==null&&!uM();)Wv(Vt)}function Wv(t){var e=Yv(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Xv(t):Vt=e,Ap.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=R1(n,e,Fn),n!==null){Vt=n;return}}else{if(n=P1(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Vt=null;return}}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Yt===0&&(Yt=5)}function rs(t,e,n){var i=xt,r=Qn.transition;try{Qn.transition=null,xt=1,B1(t,e,n,i)}finally{Qn.transition=r,xt=i}return null}function B1(t,e,n,i){do eo();while(Mr!==null);if((ft&6)!==0)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xM(t,s),t===Qt&&(Vt=Qt=null,on=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xc||(xc=!0,$v(Dc,function(){return eo(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Qn.transition,Qn.transition=null;var o=xt;xt=1;var a=ft;ft|=4,Ap.current=null,L1(t,n),zv(n,t),o1(Ef),Fc=!!Mf,Ef=Mf=null,t.current=n,N1(n,t,r),hM(),ft=a,xt=o,Qn.transition=s}else t.current=n;if(xc&&(xc=!1,Mr=t,jc=r),s=t.pendingLanes,s===0&&(Cr=null),pM(n.stateNode,i),Nn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kc)throw Kc=!1,t=Gf,Gf=null,t;return(jc&1)!==0&&t.tag!==0&&eo(),s=t.pendingLanes,(s&1)!==0?t===Wf?Ra++:(Ra=0,Wf=t):Ra=0,Ur(),null}function eo(){if(Mr!==null){var t=T_(jc),e=Qn.transition,n=xt;try{if(Qn.transition=null,xt=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,jc=0,(ft&6)!==0)throw Error(se(331));var r=ft;for(ft|=4,Pe=t.current;Pe!==null;){var s=Pe,o=s.child;if((Pe.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Pe=c;Pe!==null;){var u=Pe;switch(u.tag){case 0:case 11:case 15:ba(8,u,s)}var f=u.child;if(f!==null)f.return=u,Pe=f;else for(;Pe!==null;){u=Pe;var h=u.sibling,p=u.return;if(Fv(u),u===c){Pe=null;break}if(h!==null){h.return=p,Pe=h;break}Pe=p}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Pe=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var m=t.current;for(Pe=m;Pe!==null;){o=Pe;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,Pe=y;else e:for(o=m;Pe!==null;){if(a=Pe,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:cu(9,a)}}catch(A){Bt(a,a.return,A)}if(a===o){Pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Pe=x;break e}Pe=a.return}}if(ft=r,Ur(),Li&&typeof Li.onPostCommitFiberRoot=="function")try{Li.onPostCommitFiberRoot(tu,t)}catch{}i=!0}return i}finally{xt=n,Qn.transition=e}}return!1}function j0(t,e,n){e=oo(n,e),e=Tv(t,e,1),t=br(t,e,1),e=Sn(),t!==null&&(Ya(t,1,e),Nn(t,e))}function Bt(t,e,n){if(t.tag===3)j0(t,t,n);else for(;e!==null;){if(e.tag===3){j0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=oo(n,t),t=Av(e,t,1),e=br(e,t,1),t=Sn(),e!==null&&(Ya(e,1,t),Nn(e,t));break}}e=e.return}}function z1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Sn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(on&n)===n&&(Yt===4||Yt===3&&(on&130023424)===on&&500>zt()-Cp?ls(t,0):bp|=n),Nn(t,e)}function qv(t,e){e===0&&((t.mode&1)===0?e=1:(e=oc,oc<<=1,(oc&130023424)===0&&(oc=4194304)));var n=Sn();t=ji(t,e),t!==null&&(Ya(t,e,n),Nn(t,n))}function k1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qv(t,n)}function V1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),qv(t,n)}var Yv;Yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||In.current)Pn=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Pn=!1,C1(t,e,n);Pn=(t.flags&131072)!==0}else Pn=!1,Rt&&(e.flags&1048576)!==0&&K_(e,Gc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bc(t,e),t=e.pendingProps;var r=no(e,mn.current);Qs(e,n),r=Sp(null,e,i,t,r,n);var s=Mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(s=!0,Vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gp(e),r.updater=lu,e.stateNode=r,r._reactInternals=e,Lf(e,i,t,n),e=Uf(null,e,i,!0,s,n)):(e.tag=0,Rt&&s&&cp(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=G1(i),t=fi(i,t),r){case 0:e=Df(null,e,i,t,n);break e;case 1:e=H0(null,e,i,t,n);break e;case 11:e=k0(null,e,i,t,n);break e;case 14:e=V0(null,e,i,fi(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Df(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),H0(t,e,i,r,n);case 3:e:{if(Pv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iv(t,e),qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=oo(Error(se(423)),e),e=G0(t,e,i,n,r);break e}else if(i!==r){r=oo(Error(se(424)),e),e=G0(t,e,i,n,r);break e}else for(On=Ar(e.stateNode.containerInfo.firstChild),Bn=e,Rt=!0,mi=null,n=tv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),i===r){e=Qi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return rv(e),t===null&&Rf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wf(i,r)?o=null:s!==null&&wf(i,s)&&(e.flags|=32),Rv(t,e),xn(t,e,o,n),e.child;case 6:return t===null&&Rf(e),null;case 13:return Iv(t,e,n);case 4:return _p(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ro(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),k0(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(Wc,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!In.current){e=Qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=ei(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),V0(t,e,i,r,n);case 15:return bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),bc(t,e),e.tag=1,Ln(i)?(t=!0,Vc(e)):t=!1,Qs(e,n),wv(e,i,r),Lf(e,i,r,n),Uf(null,e,i,!0,t,n);case 19:return Lv(t,e,n);case 22:return Cv(t,e,n)}throw Error(se(156,e.tag))};function $v(t,e){return S_(t,e)}function H1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new H1(t,e,n,i)}function Lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G1(t){if(typeof t=="function")return Lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===jf)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Pc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bs:return cs(n.children,r,s,e);case Jf:o=8,r|=8;break;case tf:return t=jn(12,n,e,r|2),t.elementType=tf,t.lanes=s,t;case nf:return t=jn(13,n,e,r),t.elementType=nf,t.lanes=s,t;case rf:return t=jn(19,n,e,r),t.elementType=rf,t.lanes=s,t;case r_:return hu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n_:o=10;break e;case i_:o=9;break e;case Kf:o=11;break e;case jf:o=14;break e;case _r:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function cs(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function hu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function jd(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function W1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fd(0),this.expirationTimes=Fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Np(t,e,n,i,r,s,o,a,l){return t=new W1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function X1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Zv(t){if(!t)return Lr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Z_(t,n,e)}return e}function Jv(t,e,n,i,r,s,o,a,l){return t=Np(n,i,!0,t,r,s,o,a,l),t.context=Zv(null),n=t.current,i=Sn(),r=Rr(n),s=Zi(i,r),s.callback=e??null,br(n,s,r),t.current.lanes=r,Ya(t,r,i),Nn(t,i),t}function du(t,e,n,i){var r=e.current,s=Sn(),o=Rr(r);return n=Zv(n),e.context===null?e.context=n:e.pendingContext=n,e=Zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=br(r,e,o),t!==null&&(_i(t,r,o,s),wc(t,r,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Q0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dp(t,e){Q0(t,e),(t=t.alternate)&&Q0(t,e)}function q1(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Up(t){this._internalRoot=t}fu.prototype.render=Up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));du(t,e,null,null)};fu.prototype.unmount=Up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){du(null,t,null,null)}),e[Ki]=null}};function fu(t){this._internalRoot=t}fu.prototype.unstable_scheduleHydration=function(t){if(t){var e=C_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&P_(t)}};function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function e_(){}function Y1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=eu(o);s.call(c)}}var o=Jv(e,i,t,0,null,!1,!1,"",e_);return t._reactRootContainer=o,t[Ki]=o.current,Ba(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=eu(l);a.call(c)}}var l=Np(t,0,!1,null,null,!1,!1,"",e_);return t._reactRootContainer=l,t[Ki]=l.current,Ba(t.nodeType===8?t.parentNode:t),ps(function(){du(e,l,n,i)}),l}function mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=eu(o);a.call(l)}}du(e,o,t,r)}else o=Y1(n,e,t,r,i);return eu(o)}A_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(tp(e,n|1),Nn(e,zt()),(ft&6)===0&&(ao=zt()+500,Ur()))}break;case 13:ps(function(){var i=ji(t,1);if(i!==null){var r=Sn();_i(i,t,1,r)}}),Dp(t,1)}};np=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=Sn();_i(e,t,134217728,n)}Dp(t,134217728)}};b_=function(t){if(t.tag===13){var e=Rr(t),n=ji(t,e);if(n!==null){var i=Sn();_i(n,t,e,i)}Dp(t,e)}};C_=function(){return xt};R_=function(t,e){var n=xt;try{return xt=t,e()}finally{xt=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(se(90));o_(i),af(i,r)}}}break;case"textarea":l_(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};m_=Rp;g_=ps;var $1={usingClientEntryPoint:!1,Events:[Za,Hs,su,f_,p_,Rp]},ma={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=y_(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ga=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ga.isDisabled&&ga.supportsFiber))try{tu=ga.inject(Z1),Li=ga}catch{}var ga;Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fp(e))throw Error(se(200));return X1(t,e,null,n)};Vn.createRoot=function(t,e){if(!Fp(t))throw Error(se(299));var n=!1,i="",r=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Np(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,Ba(t.nodeType===8?t.parentNode:t),new Up(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=y_(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return ps(t)};Vn.hydrate=function(t,e,n){if(!pu(e))throw Error(se(200));return mu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!Fp(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,Ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fu(e)};Vn.render=function(t,e,n){if(!pu(e))throw Error(se(200));return mu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!pu(t))throw Error(se(40));return t._reactRootContainer?(ps(function(){mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Vn.unstable_batchedUpdates=Rp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return mu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426"});var ty=Wi((PR,ey)=>{"use strict";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(t){console.error(t)}}Qv(),ey.exports=jv()});var iy=Wi(Op=>{"use strict";var ny=ty();Op.createRoot=ny.createRoot,Op.hydrateRoot=ny.hydrateRoot;var IR});var oS=Wi(pd=>{"use strict";var qC=sa(),YC=Symbol.for("react.element"),$C=Symbol.for("react.fragment"),ZC=Object.prototype.hasOwnProperty,JC=qC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KC={key:!0,ref:!0,__self:!0,__source:!0};function sS(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ZC.call(e,i)&&!KC.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:YC,type:t,key:s,ref:o,props:r,_owner:JC.current}}pd.Fragment=$C;pd.jsx=sS;pd.jsxs=sS});var kl=Wi((t2,aS)=>{"use strict";aS.exports=oS()});var ER={};IS(ER,{mount:()=>MR});var r2=ts(sa()),wS=ts(iy());var Is=ts(sa());var Mh="187";var Uy=0,Sm=1,Fy=2;var bl=1,Oy=2,Wo=3,Jr=0,bn=1,$n=2,As=0,Xo=1,Mm=2,Em=3,wm=4,By=5;var bs=100,zy=101,ky=102,Vy=103,Hy=104,Gy=200,Wy=201,Xy=202,qy=203,Tm=204,Am=205,Yy=206,$y=207,Zy=208,Jy=209,Ky=210,jy=211,Qy=212,ex=213,tx=214,ku=0,Vu=1,Hu=2,To=3,Gu=4,Wu=5,Xu=6,qu=7,bm=0,nx=1,ix=2,ki=0,Cm=1,Rm=2,Pm=3,Im=4,Lm=5,Nm=6,Cl=7;var Dm=300,Cs=301,qo=302,Eh=303,wh=304,Oi=1e3,ii=1001,Yu=1002,tn=1003,rx=1004;var Rl=1005;var cn=1006,Th=1007;var Ei=1008;var Un=1009,Um=1010,Fm=1011,Yo=1012,Ah=1013,wi=1014,Ti=1015,Ai=1016,bh=1017,Ch=1018,Rs=1020,Om=35902,Bm=35899,zm=1021,km=1022,bi=1023,ar=1026,ur=1027,Vm=1028,Rh=1029,Kr=1030,Ph=1031;var Ih=1033,Pl=33776,Il=33777,Ll=33778,Nl=33779,Lh=35840,Nh=35841,Dh=35842,Uh=35843,Fh=36196,Oh=37492,Bh=37496,zh=37488,kh=37489,Dl=37490,Vh=37491,Hh=37808,Gh=37809,Wh=37810,Xh=37811,qh=37812,Yh=37813,$h=37814,Zh=37815,Jh=37816,Kh=37817,jh=37818,Qh=37819,ed=37820,td=37821,nd=36492,id=36494,rd=36495,sd=36283,od=36284,Ul=36285,ad=36286;var rl=2300,$u=2301,Bu=2302,cm=2303,um=2400,hm=2401,dm=2402;var sx=3200;var ld=0,ox=1,hr="",ln="srgb",sl="srgb-linear",ol="linear",vt="srgb";var zu=7680;var ax=519,lx=512,cx=513,ux=514,Hm=515,hx=516,dx=517,Gm=518,Wm=519,fx=35044;var Xm="300 es",ri=2e3,Ao=2001;function J1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function K1(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function al(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function px(){let t=al("canvas");return t.style.display="block",t}var ry={},bo=null;function qm(...t){let e="THREE."+t.shift();bo?bo("log",e,...t):console.log(e,...t)}function mx(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=mx(t);let e="THREE."+t.shift();if(bo)bo("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Xe(...t){t=mx(t);let e="THREE."+t.shift();if(bo)bo("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ss(...t){let e=t.join(" ");e in ry||(ry[e]=!0,Ge(...t))}function gx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var _x={[ku]:ku,[Hu]:Xu,[Gu]:Gu,[To]:Wu,[Vu]:Vu,[Xu]:Hu,[qu]:qu,[Wu]:To},Bi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bp=Math.PI/180,Zu=180/Math.PI;function $o(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[t&255]+gn[t>>8&255]+gn[t>>16&255]+gn[t>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[n&63|128]+gn[n>>8&255]+"-"+gn[n>>16&255]+gn[n>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function ot(t,e,n){return Math.max(e,Math.min(n,t))}function j1(t,e){return(t%e+e)%e}function zp(t,e,n){return(1-n)*t+n*e}function vx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ym(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Q1(t,e){if(e.constructor===Float32Array)return t;let n=Ym(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function eE(t,e){if(e.constructor===Float32Array)return t;let n=Ym(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}var Qm=class Qm{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qm.prototype.isVector2=!0;var ve=Qm,wn=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o+0],p=s[o+1],_=s[o+2],M=s[o+3];if(f!==M||l!==h||c!==p||u!==_){let g=l*h+c*p+u*_+f*M;g<0&&(h=-h,p=-p,_=-_,M=-M,g=-g);let d=1-a;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);d=Math.sin(d*m)/y,a=Math.sin(a*m)/y,l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+M*a}else{l=l*d+h*a,c=c*d+p*a,u=u*d+_*a,f=f*d+M*a;let m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eg=class eg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sy.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kp.copy(this).projectOnVector(e),this.sub(kp)}reflect(e){return this.sub(kp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eg.prototype.isVector3=!0;var D=eg,kp=new D,sy=new wn,tg=class tg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],M=r[0],g=r[3],d=r[6],m=r[1],y=r[4],x=r[7],A=r[2],T=r[5],v=r[8];return s[0]=o*M+a*m+l*A,s[3]=o*g+a*y+l*T,s[6]=o*d+a*x+l*v,s[1]=c*M+u*m+f*A,s[4]=c*g+u*y+f*T,s[7]=c*d+u*x+f*v,s[2]=h*M+p*m+_*A,s[5]=h*g+p*y+_*T,s[8]=h*d+p*x+_*v,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vp.makeScale(e,n)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vp.makeRotation(-e)),this}translate(e,n){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vp.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tg.prototype.isMatrix3=!0;var Ze=tg,Vp=new Ze,oy=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ay=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tE(){let t={enabled:!0,workingColorSpace:sl,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=wo(r.r),r.g=wo(r.g),r.b=wo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?ol:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[sl]:{primaries:e,whitePoint:i,transfer:ol,toXYZ:oy,fromXYZ:ay,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:oy,fromXYZ:ay,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),t}var lt=tE();function or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var uo,Ju=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{uo===void 0&&(uo=al("canvas")),uo.width=e.width,uo.height=e.height;let r=uo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=uo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=al("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(or(n[i]/255)*255):n[i]=or(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nE=0,Co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hp(r[o].image)):s.push(Hp(r[o]))}else s=Hp(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function Hp(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ju.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var iE=0,Gp=new D,Tn=class t extends Bi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ii,r=ii,s=cn,o=Ei,a=bi,l=Un,c=t.DEFAULT_ANISOTROPY,u=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=$o(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gp).x}get height(){return this.source.getSize(Gp).y}get depth(){return this.source.getSize(Gp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Yu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Yu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Dm;Tn.DEFAULT_ANISOTROPY=1;var ng=class ng{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(p+1)/2,A=(d+1)/2,T=(u+h)/4,v=(f+M)/4,w=(_+g)/4;return y>x&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=v/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=w/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=w/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(f-M)/m,this.z=(h-u)/m,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this.w=ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this.w=ot(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ng.prototype.isVector4=!0;var Pt=ng,Ku=class extends Bi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Tn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let r=Object.assign({},e.textures[n].image);this.textures[n].source=new Co(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Ku{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},ll=class extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ju=class extends Tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sh=class Sh{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,M,g)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,M,g){let d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sh().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,r=1/ho.setFromMatrixColumn(e,0).length(),s=1/ho.setFromMatrixColumn(e,1).length(),o=1/ho.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let h=o*u,p=o*f,_=a*u,M=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-M*c,n[9]=-a*l,n[2]=M-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){let h=l*u,p=l*f,_=c*u,M=c*f;n[0]=h+M*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=M+h*a,n[10]=o*l}else if(e.order==="ZXY"){let h=l*u,p=l*f,_=c*u,M=c*f;n[0]=h-M*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=M-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let h=o*u,p=o*f,_=a*u,M=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=M-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-M*f}else if(e.order==="XZY"){let h=o*l,p=o*c,_=a*l,M=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+M,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rE,e,sE)}lookAt(e,n,i){let r=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Fr.crossVectors(i,Hn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Fr.crossVectors(i,Hn)),Fr.normalize(),gu.crossVectors(Hn,Fr),r[0]=Fr.x,r[4]=gu.x,r[8]=Hn.x,r[1]=Fr.y,r[5]=gu.y,r[9]=Hn.y,r[2]=Fr.z,r[6]=gu.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],M=i[6],g=i[10],d=i[14],m=i[3],y=i[7],x=i[11],A=i[15],T=r[0],v=r[4],w=r[8],U=r[12],C=r[1],R=r[5],k=r[9],X=r[13],L=r[2],z=r[6],$=r[10],V=r[14],ne=r[3],G=r[7],K=r[11],ee=r[15];return s[0]=o*T+a*C+l*L+c*ne,s[4]=o*v+a*R+l*z+c*G,s[8]=o*w+a*k+l*$+c*K,s[12]=o*U+a*X+l*V+c*ee,s[1]=u*T+f*C+h*L+p*ne,s[5]=u*v+f*R+h*z+p*G,s[9]=u*w+f*k+h*$+p*K,s[13]=u*U+f*X+h*V+p*ee,s[2]=_*T+M*C+g*L+d*ne,s[6]=_*v+M*R+g*z+d*G,s[10]=_*w+M*k+g*$+d*K,s[14]=_*U+M*X+g*V+d*ee,s[3]=m*T+y*C+x*L+A*ne,s[7]=m*v+y*R+x*z+A*G,s[11]=m*w+y*k+x*$+A*K,s[15]=m*U+y*X+x*V+A*ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],M=e[7],g=e[11],d=e[15],m=l*p-c*h,y=a*p-c*f,x=a*h-l*f,A=o*p-c*u,T=o*h-l*u,v=o*f-a*u;return n*(M*m-g*y+d*x)-i*(_*m-g*A+d*T)+r*(_*y-M*A+d*v)-s*(_*x-M*T+g*v)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],M=e[13],g=e[14],d=e[15],m=n*a-i*o,y=n*l-r*o,x=n*c-s*o,A=i*l-r*a,T=i*c-s*a,v=r*c-s*l,w=u*M-f*_,U=u*g-h*_,C=u*d-p*_,R=f*g-h*M,k=f*d-p*M,X=h*d-p*g,L=m*X-y*k+x*R+A*C-T*U+v*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/L;return e[0]=(a*X-l*k+c*R)*z,e[1]=(r*k-i*X-s*R)*z,e[2]=(M*v-g*T+d*A)*z,e[3]=(h*T-f*v-p*A)*z,e[4]=(l*C-o*X-c*U)*z,e[5]=(n*X-r*C+s*U)*z,e[6]=(g*x-_*v-d*y)*z,e[7]=(u*v-h*x+p*y)*z,e[8]=(o*k-a*C+c*w)*z,e[9]=(i*C-n*k-s*w)*z,e[10]=(_*T-M*x+d*m)*z,e[11]=(f*x-u*T-p*m)*z,e[12]=(a*U-o*R-l*w)*z,e[13]=(n*R-i*U+r*w)*z,e[14]=(M*y-_*A-g*m)*z,e[15]=(u*A-f*y+h*m)*z,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,M=o*u,g=o*f,d=a*f,m=l*c,y=l*u,x=l*f,A=i.x,T=i.y,v=i.z;return r[0]=(1-(M+d))*A,r[1]=(p+x)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(h+d))*T,r[6]=(g+m)*T,r[7]=0,r[8]=(_+y)*v,r[9]=(g-m)*v,r[10]=(1-(h+M))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=ho.set(r[0],r[1],r[2]).length(),a=ho.set(r[4],r[5],r[6]).length(),l=ho.set(r[8],r[9],r[10]).length();s<0&&(o=-o),yi.copy(this);let c=1/o,u=1/a,f=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,n.setFromRotationMatrix(yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=ri,l=!1){let c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r),_,M;if(l)_=s/(o-s),M=o*s/(o-s);else if(a===ri)_=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Ao)_=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ri,l=!1){let c=this.elements,u=2/(n-e),f=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r),_,M;if(l)_=1/(o-s),M=o/(o-s);else if(a===ri)_=-2/(o-s),M=-(o+s)/(o-s);else if(a===Ao)_=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Sh.prototype.isMatrix4=!0;var Mt=Sh,ho=new D,yi=new Mt,rE=new D(0,0,0),sE=new D(1,1,1),Fr=new D,gu=new D,Hn=new D,ly=new Mt,cy=new wn,lr=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ly.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ly,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cy.setFromEuler(this),this.setFromQuaternion(cy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lr.DEFAULT_ORDER="XYZ";var Ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},oE=0,uy=new D,fo=new wn,tr=new Mt,_u=new D,Ka=new D,aE=new D,lE=new wn,hy=new D(1,0,0),dy=new D(0,1,0),fy=new D(0,0,1),py={type:"added"},cE={type:"removed"},po={type:"childadded",child:null},Wp={type:"childremoved",child:null},An=class t extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new D,n=new lr,i=new wn,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,n){return fo.setFromAxisAngle(e,n),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis(hy,e)}rotateY(e){return this.rotateOnAxis(dy,e)}rotateZ(e){return this.rotateOnAxis(fy,e)}translateOnAxis(e,n){return uy.copy(e).applyQuaternion(this.quaternion),this.position.add(uy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hy,e)}translateY(e){return this.translateOnAxis(dy,e)}translateZ(e){return this.translateOnAxis(fy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_u.copy(e):_u.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ka,_u,this.up):tr.lookAt(_u,Ka,this.up),this.quaternion.setFromRotationMatrix(tr),r&&(tr.extractRotation(r.matrixWorld),fo.setFromRotationMatrix(tr),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(py),po.child=e,this.dispatchEvent(po),po.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cE),Wp.child=e,this.dispatchEvent(Wp),Wp.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(py),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,aE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,lE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};An.DEFAULT_UP=new D(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ui=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}},uE={type:"move"},Po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},vu={h:0,s:0,l:0};function Xp(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=j1(e,1),n=ot(n,0,1),i=ot(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Xp(o,s,e+1/3),this.g=Xp(o,s,e),this.b=Xp(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){let i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return lt.workingToColorSpace(_n.copy(this),e),Math.round(ot(_n.r*255,0,255))*65536+Math.round(ot(_n.g*255,0,255))*256+Math.round(ot(_n.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),n);let i=_n.r,r=_n.g,s=_n.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ln){lt.workingToColorSpace(_n.copy(this),e);let n=_n.r,i=_n.g,r=_n.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+n,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Or),e.getHSL(vu);let i=zp(Or.h,vu.h,n),r=zp(Or.s,vu.s,n),s=zp(Or.l,vu.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new et;et.NAMES=yx;var Io=class extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},xi=new D,nr=new D,qp=new D,ir=new D,mo=new D,go=new D,my=new D,Yp=new D,$p=new D,Zp=new D,Jp=new Pt,Kp=new Pt,jp=new Pt,Vr=class t{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),xi.subVectors(e,n),r.cross(xi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){xi.subVectors(r,n),nr.subVectors(i,n),qp.subVectors(e,n);let o=xi.dot(xi),a=xi.dot(nr),l=xi.dot(qp),c=nr.dot(nr),u=nr.dot(qp),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(o,ir.y),l.addScaledVector(a,ir.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Jp.setScalar(0),Kp.setScalar(0),jp.setScalar(0),Jp.fromBufferAttribute(e,n),Kp.fromBufferAttribute(e,i),jp.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jp,s.x),o.addScaledVector(Kp,s.y),o.addScaledVector(jp,s.z),o}static isFrontFacing(e,n,i,r){return xi.subVectors(i,n),nr.subVectors(e,n),xi.cross(nr).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),xi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;mo.subVectors(r,i),go.subVectors(s,i),Yp.subVectors(e,i);let l=mo.dot(Yp),c=go.dot(Yp);if(l<=0&&c<=0)return n.copy(i);$p.subVectors(e,r);let u=mo.dot($p),f=go.dot($p);if(u>=0&&f<=u)return n.copy(r);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),n.copy(i).addScaledVector(mo,o);Zp.subVectors(e,s);let p=mo.dot(Zp),_=go.dot(Zp);if(_>=0&&p<=_)return n.copy(s);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(go,a);let g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return my.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(my,a);let d=1/(g+M+h);return o=M*d,a=h*d,n.copy(i).addScaledVector(mo,o).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hr=class{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yu.copy(i.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),xu.subVectors(this.max,ja),_o.subVectors(e.a,ja),vo.subVectors(e.b,ja),yo.subVectors(e.c,ja),Br.subVectors(vo,_o),zr.subVectors(yo,vo),_s.subVectors(_o,yo);let n=[0,-Br.z,Br.y,0,-zr.z,zr.y,0,-_s.z,_s.y,Br.z,0,-Br.x,zr.z,0,-zr.x,_s.z,0,-_s.x,-Br.y,Br.x,0,-zr.y,zr.x,0,-_s.y,_s.x,0];return!Qp(n,_o,vo,yo,xu)||(n=[1,0,0,0,1,0,0,0,1],!Qp(n,_o,vo,yo,xu))?!1:(Su.crossVectors(Br,zr),n=[Su.x,Su.y,Su.z],Qp(n,_o,vo,yo,xu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new D,new D,new D,new D,new D,new D,new D,new D],Si=new D,yu=new Hr,_o=new D,vo=new D,yo=new D,Br=new D,zr=new D,_s=new D,ja=new D,xu=new D,Su=new D,vs=new D;function Qp(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){vs.fromArray(t,s);let a=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),l=e.dot(vs),c=n.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ht=new D,Mu=new ve,hE=0,Dn=class extends Bi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fx,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=e!==void 0?Ym(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mu.fromBufferAttribute(this,n),Mu.applyMatrix3(e),this.setXY(n,Mu.x,Mu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Q1(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):eE(e,this.array)}};var cl=class extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var ul=class extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Gt=class extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}},dE=new Hr,Qa=new D,em=new D,Lo=class{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):dE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);let n=Qa.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(em.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(em)),this.expandByPoint(Qa.copy(e.center).sub(em))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fE=0,ni=new Mt,tm=new An,xo=new D,Gn=new Hr,el=new Hr,en=new D,Xn=class t extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J1(e)?ul:cl)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return tm.lookAt(e),tm.updateMatrix(),this.applyMatrix4(tm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(i,3))}else{let i=Math.min(e.length,n.count);for(let r=0;r<i;r++){let s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];el.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Gn.min,el.min),Gn.expandByPoint(en),en.addVectors(Gn.max,el.max),Gn.expandByPoint(en)):(Gn.expandByPoint(el.min),Gn.expandByPoint(el.max))}Gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(en));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(xo.fromBufferAttribute(e,c),en.add(xo)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let U=0;U<i.count;U++)a[U]=new D,l[U]=new D;let u=new D,f=new D,h=new D,p=new ve,_=new ve,M=new ve,g=new D,d=new D;function m(U,C,R){c[U]=c[C]=c[R]=1,u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,R),p.fromBufferAttribute(s,U),_.fromBufferAttribute(s,C),M.fromBufferAttribute(s,R),f.sub(u),h.sub(u),_.sub(p),M.sub(p);let k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(g.copy(f).multiplyScalar(M.y).addScaledVector(h,-_.y).multiplyScalar(k),d.copy(h).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(k),a[U].add(g),a[C].add(g),a[R].add(g),l[U].add(d),l[C].add(d),l[R].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let U=0,C=y.length;U<C;++U){let R=y[U],k=R.start,X=R.count;for(let L=k,z=k+X;L<z;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let x=new D,A=new D,T=new D,v=new D;function w(U){T.fromBufferAttribute(r,U),v.copy(T);let C=a[U];x.copy(C),x.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(v,C);let k=A.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,k)}for(let U=0,C=i.count;U<C;++U)c[U]&&w(U);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){let _=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),p=0,_=0;for(let M=0,g=l.length;M<g;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Dn(h,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(n))}let s=e.morphAttributes;for(let c in s){let u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nm=new D,pE=new D,mE=new Ze,Mi=class{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=nm.subVectors(i,n).cross(pE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let r=e.delta(nm),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||mE.getNormalMatrix(e),r=this.coplanarPoint(nm).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gE=0,Gr=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Xo,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tm,this.blendDst=Am,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zu,this.stencilZFail=zu,this.stencilZPass=zu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ve().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var sr=new D,im=new D,Eu=new D,wu=new D,hl=class{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){im.copy(e).add(n).multiplyScalar(.5),Eu.copy(n).sub(e).normalize(),wu.copy(this.origin).sub(im);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Eu),a=wu.dot(this.direction),l=-wu.dot(Eu),c=wu.lengthSq(),u=Math.abs(1-o*o),f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){let M=1/u;f*=M,h*=M,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(im).addScaledVector(Eu,h),p}intersectSphere(e,n){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);let i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,p=e.z-o.z,_=n.x-o.x,M=n.y-o.y,g=n.z-o.z,d=i.x-o.x,m=i.y-o.y,y=i.z-o.z,x=Math.abs(l),A=Math.abs(c),T=Math.abs(u),v,w,U,C,R,k,X,L,z,$,V,ne;if(x>=A&&x>=T?(U=l,k=f,z=_,ne=d,l>=0?(v=c,w=u,C=h,R=p,X=M,L=g,$=m,V=y):(v=u,w=c,C=p,R=h,X=g,L=M,$=y,V=m)):A>=T?(U=c,k=h,z=M,ne=m,c>=0?(v=u,w=l,C=p,R=f,X=g,L=_,$=y,V=d):(v=l,w=u,C=f,R=p,X=_,L=g,$=d,V=y)):(U=u,k=p,z=g,ne=y,u>=0?(v=l,w=c,C=f,R=h,X=_,L=M,$=d,V=m):(v=c,w=l,C=h,R=f,X=M,L=_,$=m,V=d)),U===0)return null;let G=v/U,K=w/U,ee=1/U,be=C-G*k,Oe=R-K*k,q=X-G*z,ye=L-K*z,Ae=$-G*ne,Be=V-K*ne,Se=Ae*ye-Be*q,ke=be*Be-Oe*Ae,gt=q*Oe-ye*be;if(r){if(Se<0||ke<0||gt<0)return null}else if((Se<0||ke<0||gt<0)&&(Se>0||ke>0||gt>0))return null;let Ve=Se+ke+gt;if(Ve===0)return null;let Ye=ee*(Se*k+ke*z+gt*ne);return(Ve>0?Ye<0:Ye>0)?null:this.at(Ye/Ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},No=class extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},gy=new Mt,ys=new hl,Tu=new Lo,_y=new D,Au=new D,bu=new D,Cu=new D,rm=new D,Ru=new D,vy=new D,Pu=new D,$t=class extends An{constructor(e=new Xn,n=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ru.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(rm.fromBufferAttribute(f,e),o?Ru.addScaledVector(rm,u):Ru.addScaledVector(rm.sub(n),u))}n.add(Ru)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tu.copy(i.boundingSphere),Tu.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(Tu.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Tu,_y)===null||ys.origin.distanceToSquared(_y)>(e.far-e.near)**2))&&(gy.copy(s).invert(),ys.copy(e.ray).applyMatrix4(gy),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ys)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let g=h[_],d=o[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,A=y;x<A;x+=3){let T=a.getX(x),v=a.getX(x+1),w=a.getX(x+2);r=Iu(this,d,e,i,c,u,f,T,v,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let g=_,d=M;g<d;g+=3){let m=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=Iu(this,o,e,i,c,u,f,m,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=h.length;_<M;_++){let g=h[_],d=o[g.materialIndex],m=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=m,A=y;x<A;x+=3){let T=x,v=x+1,w=x+2;r=Iu(this,d,e,i,c,u,f,T,v,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,d=M;g<d;g+=3){let m=g,y=g+1,x=g+2;r=Iu(this,o,e,i,c,u,f,m,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}};function _E(t,e,n,i,r,s,o,a){let l;if(e.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Jr,a),l===null)return null;Pu.copy(a),Pu.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Pu);return c<n.near||c>n.far?null:{distance:c,point:Pu.clone(),object:t}}function Iu(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Au),t.getVertexPosition(l,bu),t.getVertexPosition(c,Cu);let u=_E(t,e,n,i,Au,bu,Cu,vy);if(u){let f=new D;Vr.getBarycoord(vy,Au,bu,Cu,f),r&&(u.uv=Vr.getInterpolatedAttribute(r,a,l,c,f,new ve)),s&&(u.uv1=Vr.getInterpolatedAttribute(s,a,l,c,f,new ve)),o&&(u.normal=Vr.getInterpolatedAttribute(o,a,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new D,materialIndex:0};Vr.getNormal(Au,bu,Cu,h.normal),u.face=h,u.barycoord=f}return u}var Do=class extends Tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=tn,u=tn,f,h){super(null,o,a,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=new Lo,vE=new ve(.5,.5),Lu=new D,Wr=class{constructor(e=new Mi,n=new Mi,i=new Mi,r=new Mi,s=new Mi,o=new Mi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],_=s[8],M=s[9],g=s[10],d=s[11],m=s[12],y=s[13],x=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,d-_,A-m).normalize(),r[1].setComponents(c+o,p+u,d+_,A+m).normalize(),r[2].setComponents(c+a,p+f,d+M,A+y).normalize(),r[3].setComponents(c-a,p-f,d-M,A-y).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,p-h,d-g,A-x).normalize();else if(r[4].setComponents(c-l,p-h,d-g,A-x).normalize(),n===ri)r[5].setComponents(c+l,p+h,d+g,A+x).normalize();else if(n===Ao)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);let n=vE.distanceTo(e.center);return xs.radius=.7071067811865476+n,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Lu.x=r.normal.x>0?e.max.x:e.min.x,Lu.y=r.normal.y>0?e.max.y:e.min.y,Lu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yy=new Mt,Qu=class t{constructor(){this.coordinateSystem=ri,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){let s=n[r];yy.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Wr),i[r].setFromProjectionMatrix(yy,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Wr),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new t().copy(this)}};var dl=class extends Tn{constructor(e=[],n=Cs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ms=class extends Tn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cr=class extends Tn{constructor(e,n,i=wi,r,s,o,a=tn,l=tn,c,u=ar,f=1){if(u!==ar&&u!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},fl=class extends cr{constructor(e,n=wi,i=Cs,r,s,o=tn,a=tn,l,c=ar){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pl=class extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Uo=class t extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2));function _(M,g,d,m,y,x,A,T,v,w,U){let C=x/v,R=A/w,k=x/2,X=A/2,L=T/2,z=v+1,$=w+1,V=0,ne=0,G=new D;for(let K=0;K<$;K++){let ee=K*R-X;for(let be=0;be<z;be++){let Oe=be*C-k;G[M]=Oe*m,G[g]=ee*y,G[d]=L,c.push(G.x,G.y,G.z),G[M]=0,G[g]=0,G[d]=T>0?1:-1,u.push(G.x,G.y,G.z),f.push(be/v),f.push(1-K/w),V+=1}}for(let K=0;K<w;K++)for(let ee=0;ee<v;ee++){let be=h+ee+z*K,Oe=h+ee+z*(K+1),q=h+(ee+1)+z*(K+1),ye=h+(ee+1)+z*K;l.push(be,Oe,ye),l.push(Oe,q,ye),ne+=6}a.addGroup(p,ne,U),p+=ne,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ve:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){let i=new D,r=[],s=[],o=[],a=new D,l=new Mt;for(let p=0;p<=e;p++){let _=p/e;r[p]=this.getTangentAt(_,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(ot(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Fo=class extends qn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ve){let i=n,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eh=class extends Fo{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $m(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var xy=new D,Sy=new D,sm=new $m,om=new $m,am=new $m,Oo=class extends qn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Sy.subVectors(r[0],r[1]).add(r[0]),c=Sy);let f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(xy.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xy),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(u),p);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),sm.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,M,g),om.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,M,g),am.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,M,g)}else this.curveType==="catmullrom"&&(sm.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),om.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),am.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(sm.calc(l),om.calc(l),am.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function My(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function yE(t,e){let n=1-t;return n*n*e}function xE(t,e){return 2*(1-t)*t*e}function SE(t,e){return t*t*e}function nl(t,e,n,i){return yE(t,e)+xE(t,n)+SE(t,i)}function ME(t,e){let n=1-t;return n*n*n*e}function EE(t,e){let n=1-t;return 3*n*n*t*e}function wE(t,e){return 3*(1-t)*t*t*e}function TE(t,e){return t*t*t*e}function il(t,e,n,i,r){return ME(t,e)+EE(t,n)+wE(t,i)+TE(t,r)}var ml=class extends qn{constructor(e=new ve,n=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ve){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(il(e,r.x,s.x,o.x,a.x),il(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},th=class extends qn{constructor(e=new D,n=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new D){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(il(e,r.x,s.x,o.x,a.x),il(e,r.y,s.y,o.y,a.y),il(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends qn{constructor(e=new ve,n=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ve){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ve){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nh=class extends qn{constructor(e=new D,n=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new D){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new D){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends qn{constructor(e=new ve,n=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ve){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(nl(e,r.x,s.x,o.x),nl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ih=class extends qn{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(nl(e,r.x,s.x,o.x),nl(e,r.y,s.y,o.y),nl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ve){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(My(a,l.x,c.x,u.x,f.x),My(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new ve().fromArray(r))}return this}},fm=Object.freeze({__proto__:null,ArcCurve:eh,CatmullRomCurve3:Oo,CubicBezierCurve:ml,CubicBezierCurve3:th,EllipseCurve:Fo,LineCurve:gl,LineCurve3:nh,QuadraticBezierCurve:_l,QuadraticBezierCurve3:ih,SplineCurve:vl}),rh=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fm[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new fm[r.type]().fromJSON(r))}return this.cacheLengths=null,this}},Es=class extends rh{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new gl(this.currentPoint.clone(),new ve(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new _l(this.currentPoint.clone(),new ve(e,n),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new ml(this.currentPoint.clone(),new ve(e,n),new ve(i,r),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new vl(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Fo(e,n,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xr=class extends Es{constructor(e){super(e),this.uuid=$o(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new Es().fromJSON(r))}return this}};function AE(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=xx(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=IE(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let u=a,f=l;for(let h=n;h<r;h+=n){let p=t[h],_=t[h+1];p<a&&(a=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return yl(s,o,n,a,l,c,0),o}function xx(t,e,n,i,r){let s;if(r===HE(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=Ey(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=Ey(o/i|0,t[o],t[o+1],s);return s&&Bo(s,s.next)&&(Sl(s),s=s.next),s}function ws(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Bo(n,n.next)||Ot(n.prev,n,n.next)===0)){if(Sl(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function yl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&FE(t,i,r,s);let a=t;for(;t.prev!==t.next;){let l=t.prev,c=t.next;if(s?CE(t,i,r,s):bE(t)){e.push(l.i,t.i,c.i),Sl(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=RE(ws(t),e),yl(t,e,n,i,r,s,2)):o===2&&PE(t,e,n,i,r,s):yl(ws(t),e,n,i,r,s,1);break}}}function bE(t){let e=t.prev,n=t,i=t.next;if(Ot(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),h=Math.max(r,s,o),p=Math.max(a,l,c),_=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&tl(r,a,s,l,o,c,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function CE(t,e,n,i){let r=t.prev,s=t,o=t.next;if(Ot(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,l,c),_=Math.min(u,f,h),M=Math.max(a,l,c),g=Math.max(u,f,h),d=pm(p,_,e,n,i),m=pm(M,g,e,n,i),y=t.prevZ,x=t.nextZ;for(;y&&y.z>=d&&x&&x.z<=m;){if(y.x>=p&&y.x<=M&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&tl(a,u,l,f,c,h,y.x,y.y)&&Ot(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=M&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&tl(a,u,l,f,c,h,x.x,x.y)&&Ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=M&&y.y>=_&&y.y<=g&&y!==r&&y!==o&&tl(a,u,l,f,c,h,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=m;){if(x.x>=p&&x.x<=M&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&tl(a,u,l,f,c,h,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function RE(t,e){let n=t;do{let i=n.prev,r=n.next.next;!Bo(i,r)&&Mx(i,n,n.next,r)&&xl(i,r)&&xl(r,i)&&(e.push(i.i,n.i,r.i),Sl(n),Sl(n.next),n=t=r),n=n.next}while(n!==t);return ws(n)}function PE(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zE(o,a)){let l=Ex(o,a);o=ws(o,o.next),l=ws(l,l.next),yl(o,e,n,i,r,s,0),yl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function IE(t,e,n,i){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=xx(t,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(BE(c))}r.sort(LE);for(let s=0;s<r.length;s++)n=NE(r[s],n);return n}function LE(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){let i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function NE(t,e){let n=DE(t,e);if(!n)return e;let i=Ex(n,t);return ws(i,i.next),ws(n,n.next)}function DE(t,e){let n=e,i=t.x,r=t.y,s=-1/0,o;if(Bo(t,n))return n;do{if(Bo(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){let f=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>s&&(s=f,o=n.x<n.next.x?n:n.next,f===i))return o}n=n.next}while(n!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Sx(r<c?i:s,r,l,c,r<c?s:i,r,n.x,n.y)){let f=Math.abs(r-n.y)/(i-n.x);xl(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&UE(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o}function UE(t,e){return Ot(t.prev,t,e.prev)<0&&Ot(e.next,t,t.next)<0}function FE(t,e,n,i){let r=t;do r.z===0&&(r.z=pm(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,OE(r)}function OE(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function pm(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function BE(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Sx(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function tl(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&Sx(t,e,n,i,r,s,o,a)}function zE(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!kE(t,e)&&(xl(t,e)&&xl(e,t)&&VE(t,e)&&(Ot(t.prev,t,e.prev)||Ot(t,e.prev,e))||Bo(t,e)&&Ot(t.prev,t,t.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Bo(t,e){return t.x===e.x&&t.y===e.y}function Mx(t,e,n,i){let r=Du(Ot(t,e,n)),s=Du(Ot(t,e,i)),o=Du(Ot(n,i,t)),a=Du(Ot(n,i,e));return!!(r!==s&&o!==a||r===0&&Nu(t,n,e)||s===0&&Nu(t,i,e)||o===0&&Nu(n,t,i)||a===0&&Nu(n,e,i))}function Nu(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Du(t){return t>0?1:t<0?-1:0}function kE(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Mx(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function xl(t,e){return Ot(t.prev,t,t.next)<0?Ot(t,e,t.next)>=0&&Ot(t,t.prev,e)>=0:Ot(t,e,t.prev)<0||Ot(t,t.next,e)<0}function VE(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Ex(t,e){let n=mm(t.i,t.x,t.y),i=mm(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function Ey(t,e,n,i){let r=mm(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Sl(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function mm(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function HE(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var gm=class{static triangulate(e,n,i=2){return AE(e,n,i)}},Fi=class t{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];wy(e),Ty(i,e);let o=e.length;n.forEach(wy);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Ty(i,n[l]);let a=gm.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function wy(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Ty(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var zo=class t extends Xn{constructor(e=new Xr([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Gt(r,3)),this.setAttribute("uv",new Gt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1,h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,d=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:GE,y,x=!1,A,T,v,w;if(d){y=d.getSpacedPoints(u),x=!0,h=!1;let Q=d.isCatmullRomCurve3?d.closed:!1;A=d.computeFrenetFrames(u,Q),T=new D,v=new D,w=new D}h||(g=0,p=0,_=0,M=0);let U=a.extractPoints(c),C=U.shape,R=U.holes;if(!Fi.isClockWise(C)){C=C.reverse();for(let Q=0,le=R.length;Q<le;Q++){let ae=R[Q];Fi.isClockWise(ae)&&(R[Q]=ae.reverse())}}function X(Q){let ae=10000000000000001e-36,we=Q[0];for(let ce=1;ce<=Q.length;ce++){let qe=ce%Q.length,Ie=Q[qe],tt=Ie.x-we.x,nt=Ie.y-we.y,st=tt*tt+nt*nt,N=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(we.x),Math.abs(we.y)),Fe=ae*N*N;if(st<=Fe){Q.splice(qe,1),ce--;continue}we=Ie}}X(C),R.forEach(X);let L=R.length,z=C;for(let Q=0;Q<L;Q++){let le=R[Q];C=C.concat(le)}function $(Q,le,ae){return le||Xe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(le,ae)}let V=C.length;function ne(Q,le,ae){let we,ce,qe,Ie=Q.x-le.x,tt=Q.y-le.y,nt=ae.x-Q.x,st=ae.y-Q.y,N=Ie*Ie+tt*tt,Fe=Ie*st-tt*nt;if(Math.abs(Fe)>Number.EPSILON){let Qe=Math.sqrt(N),mt=Math.sqrt(nt*nt+st*st),_e=le.x-tt/Qe,Et=le.y+Ie/Qe,De=ae.x-st/mt,Le=ae.y+nt/mt,b=((De-_e)*st-(Le-Et)*nt)/(Ie*st-tt*nt);we=_e+Ie*b-Q.x,ce=Et+tt*b-Q.y;let S=we*we+ce*ce;if(S<=2)return new ve(we,ce);qe=Math.sqrt(S/2)}else{let Qe=!1;Ie>Number.EPSILON?nt>Number.EPSILON&&(Qe=!0):Ie<-Number.EPSILON?nt<-Number.EPSILON&&(Qe=!0):Math.sign(tt)===Math.sign(st)&&(Qe=!0),Qe?(we=-tt,ce=Ie,qe=Math.sqrt(N)):(we=Ie,ce=tt,qe=Math.sqrt(N/2))}return new ve(we/qe,ce/qe)}let G=[];for(let Q=0,le=z.length,ae=le-1,we=Q+1;Q<le;Q++,ae++,we++)ae===le&&(ae=0),we===le&&(we=0),G[Q]=ne(z[Q],z[ae],z[we]);let K=[],ee,be=G.concat();for(let Q=0,le=L;Q<le;Q++){let ae=R[Q];ee=[];for(let we=0,ce=ae.length,qe=ce-1,Ie=we+1;we<ce;we++,qe++,Ie++)qe===ce&&(qe=0),Ie===ce&&(Ie=0),ee[we]=ne(ae[we],ae[qe],ae[Ie]);K.push(ee),be=be.concat(ee)}let Oe;if(g===0)Oe=Fi.triangulateShape(z,R);else{let Q=[],le=[];for(let ae=0;ae<g;ae++){let we=ae/g,ce=p*Math.cos(we*Math.PI/2),qe=_*Math.sin(we*Math.PI/2)+M;for(let Ie=0,tt=z.length;Ie<tt;Ie++){let nt=$(z[Ie],G[Ie],qe);ke(nt.x,nt.y,-ce),we===0&&Q.push(nt)}for(let Ie=0,tt=L;Ie<tt;Ie++){let nt=R[Ie];ee=K[Ie];let st=[];for(let N=0,Fe=nt.length;N<Fe;N++){let Qe=$(nt[N],ee[N],qe);ke(Qe.x,Qe.y,-ce),we===0&&st.push(Qe)}we===0&&le.push(st)}}Oe=Fi.triangulateShape(Q,le)}let q=Oe.length,ye=_+M;for(let Q=0;Q<V;Q++){let le=h?$(C[Q],be[Q],ye):C[Q];x?(v.copy(A.normals[0]).multiplyScalar(le.x),T.copy(A.binormals[0]).multiplyScalar(le.y),w.copy(y[0]).add(v).add(T),ke(w.x,w.y,w.z)):ke(le.x,le.y,0)}for(let Q=1;Q<=u;Q++)for(let le=0;le<V;le++){let ae=h?$(C[le],be[le],ye):C[le];x?(v.copy(A.normals[Q]).multiplyScalar(ae.x),T.copy(A.binormals[Q]).multiplyScalar(ae.y),w.copy(y[Q]).add(v).add(T),ke(w.x,w.y,w.z)):ke(ae.x,ae.y,f/u*Q)}for(let Q=g-1;Q>=0;Q--){let le=Q/g,ae=p*Math.cos(le*Math.PI/2),we=_*Math.sin(le*Math.PI/2)+M;for(let ce=0,qe=z.length;ce<qe;ce++){let Ie=$(z[ce],G[ce],we);ke(Ie.x,Ie.y,f+ae)}for(let ce=0,qe=R.length;ce<qe;ce++){let Ie=R[ce];ee=K[ce];for(let tt=0,nt=Ie.length;tt<nt;tt++){let st=$(Ie[tt],ee[tt],we);x?ke(st.x,st.y+y[u-1].y,y[u-1].x+ae):ke(st.x,st.y,f+ae)}}}Ae(),Be();function Ae(){let Q=r.length/3;if(h){let le=0,ae=V*le;for(let we=0;we<q;we++){let ce=Oe[we];gt(ce[2]+ae,ce[1]+ae,ce[0]+ae)}le=u+g*2,ae=V*le;for(let we=0;we<q;we++){let ce=Oe[we];gt(ce[0]+ae,ce[1]+ae,ce[2]+ae)}}else{for(let le=0;le<q;le++){let ae=Oe[le];gt(ae[2],ae[1],ae[0])}for(let le=0;le<q;le++){let ae=Oe[le];gt(ae[0]+V*u,ae[1]+V*u,ae[2]+V*u)}}i.addGroup(Q,r.length/3-Q,0)}function Be(){let Q=r.length/3,le=0;Se(z,le),le+=z.length;for(let ae=0,we=R.length;ae<we;ae++){let ce=R[ae];Se(ce,le),le+=ce.length}i.addGroup(Q,r.length/3-Q,1)}function Se(Q,le){let ae=Q.length;for(;--ae>=0;){let we=ae,ce=ae-1;ce<0&&(ce=Q.length-1);for(let qe=0,Ie=u+g*2;qe<Ie;qe++){let tt=V*qe,nt=V*(qe+1),st=le+we+tt,N=le+ce+tt,Fe=le+ce+nt,Qe=le+we+nt;Ve(st,N,Fe,Qe)}}}function ke(Q,le,ae){l.push(Q),l.push(le),l.push(ae)}function gt(Q,le,ae){Ye(Q),Ye(le),Ye(ae);let we=r.length/3,ce=m.generateTopUV(i,r,we-3,we-2,we-1);Ke(ce[0]),Ke(ce[1]),Ke(ce[2])}function Ve(Q,le,ae,we){Ye(Q),Ye(le),Ye(we),Ye(le),Ye(ae),Ye(we);let ce=r.length/3,qe=m.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);Ke(qe[0]),Ke(qe[1]),Ke(qe[3]),Ke(qe[1]),Ke(qe[2]),Ke(qe[3])}function Ye(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Ke(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return WE(n,i,e)}static fromJSON(e,n){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=n[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new fm[r.type]().fromJSON(r)),new t(i,e.options)}},GE={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ve(s,o),new ve(a,l),new ve(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],M=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ve(o,1-l),new ve(c,1-f),new ve(h,1-_),new ve(M,1-d)]:[new ve(a,1-l),new ve(u,1-f),new ve(p,1-_),new ve(g,1-d)]}};function WE(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Ts=class t extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],M=[],g=[];for(let d=0;d<u;d++){let m=d*h-o;for(let y=0;y<c;y++){let x=y*f-s;_.push(x,-m,0),M.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<a;m++){let y=m+c*d,x=m+c*(d+1),A=m+1+c*(d+1),T=m+1+c*d;p.push(y,x,T),p.push(x,A,T)}this.setIndex(p),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(M,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ml=class t extends Xn{constructor(e=new Xr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(s,3)),this.setAttribute("uv",new Gt(o,2));function c(u){let f=r.length/3,h=u.extractPoints(n),p=h.shape,_=h.holes;Fi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=_.length;g<d;g++){let m=_[g];Fi.isClockWise(m)===!0&&(_[g]=m.reverse())}let M=Fi.triangulateShape(p,_);for(let g=0,d=_.length;g<d;g++){let m=_[g];p=p.concat(m)}for(let g=0,d=p.length;g<d;g++){let m=p[g];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let g=0,d=M.length;g<d;g++){let m=M[g],y=m[0]+f,x=m[1]+f,A=m[2]+f;i.push(y,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes;return XE(n,e)}static fromJSON(e,n){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=n[e.shapes[r]];i.push(o)}return new t(i,e.curveSegments)}};function XE(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var ko=class t extends Xn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);let l=[],c=[],u=[],f=[],h=new D,p=new D,_=new D;for(let M=0;M<=i;M++){let g=o+M/i*a;for(let d=0;d<=r;d++){let m=d/r*s;p.x=(e+n*Math.cos(g))*Math.cos(m),p.y=(e+n*Math.cos(g))*Math.sin(m),p.z=n*Math.sin(g),c.push(p.x,p.y,p.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),_.subVectors(p,h).normalize(),u.push(_.x,_.y,_.z),f.push(d/r),f.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=r;g++){let d=(r+1)*M+g-1,m=(r+1)*(M-1)+g-1,y=(r+1)*(M-1)+g,x=(r+1)*M+g;l.push(d,m,x),l.push(m,y,x)}this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ps(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];if(Ay(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ay(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function vn(t){let e={};for(let n=0;n<t.length;n++){let i=Ps(t[n]);for(let r in i)e[r]=i[r]}return e}function Ay(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function qE(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zm(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var wx={clone:Ps,merge:vn},YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zi=class extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new ve().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sh=class extends zi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vo=class extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qr=class extends Vo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ss('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var oh=class extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ah=class extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function So(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Uu(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Yr=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lh=class extends Yr{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:um,endingEnd:um}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case hm:s=e,a=2*n-i;break;case dm:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hm:o=e,l=2*i-n;break;case dm:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(r-n),M=_*_,g=M*_,d=-h*g+2*h*M-h*_,m=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*_+1,y=(-1-p)*g+(1.5+p)*M+.5*_,x=p*g-p*M;for(let A=0;A!==a;++A)s[A]=d*o[u+A]+m*o[c+A]+y*o[l+A]+x*o[f+A];return s}},ch=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}},uh=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},hh=class extends Yr{interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(i-n)/(r-n),M=1-_;for(let g=0;g!==a;++g)s[g]=o[c+g]*M+o[l+g]*_;return s}let h=a*2,p=e-1;for(let _=0;_!==a;++_){let M=o[c+_],g=o[l+_],d=p*h+_*2,m=f[d],y=f[d+1],x=e*h+_*2,A=u[x],T=u[x+1],v=JE(i,n,m,A,r);s[_]=Tx(v,M,y,T,g)}return s}};function Tx(t,e,n,i,r){let s=1-t;return s*s*s*e+3*s*s*t*n+3*s*t*t*i+t*t*t*r}function ZE(t,e,n,i,r){let s=1-t;return 3*s*s*(n-e)+6*s*t*(i-n)+3*t*t*(r-i)}function JE(t,e,n,i,r){let s=(t-e)/(r-e);for(let o=0;o<8;o++){let a=Tx(s,e,n,i,r)-t;if(Math.abs(a)<1e-10)break;let l=ZE(s,e,n,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Yn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(n,this.TimeBufferType),this.values=So(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Uu(e.settings)&&(i.settings={inTangents:So(e.settings.inTangents,Array),outTangents:So(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new hh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case rl:n=this.InterpolantFactoryMethodDiscrete;break;case $u:n=this.InterpolantFactoryMethodLinear;break;case Bu:n=this.InterpolantFactoryMethodSmooth;break;case cm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rl;case this.InterpolantFactoryMethodLinear:return $u;case this.InterpolantFactoryMethodSmooth:return Bu;case this.InterpolantFactoryMethodBezier:return cm}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e;Uu(this.settings)&&(by(this.settings.inTangents,e),by(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e;Uu(this.settings)&&(Cy(this.settings.inTangents,e),Cy(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&K1(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Bu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,h=f-i,p=f+i;for(let _=0;_!==i;++_){let M=n[f+_];if(M!==n[h+_]||M!==n[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let p=0;p!==i;++p)n[h+p]=n[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,Uu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function by(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function Cy(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=$u;var $r=class extends Yn{constructor(e,n,i){super(e,n,i)}};$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=rl;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var dh=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};dh.prototype.ValueTypeName="color";var fh=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};fh.prototype.ValueTypeName="number";var ph=class extends Yr{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let u=c+a;c!==u;c+=4)wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},El=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}};El.prototype.ValueTypeName="quaternion";El.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends Yn{constructor(e,n,i){super(e,n,i)}};Zr.prototype.ValueTypeName="string";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=rl;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends Yn{constructor(e,n,i,r){super(e,n,i,r)}};mh.prototype.ValueTypeName="vector";var gh=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ax=new gh,_h=class{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};_h.DEFAULT_MATERIAL_NAME="__DEFAULT";var vh=class extends An{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var lm=new Mt,Ry=new D,Py=new D,yh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;Ry.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ry),Py.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Py),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){lm.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(lm,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ao||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(lm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fu=new D,Ou=new wn,Di=new D,wl=class extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fu,Ou,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fu,Ou,Di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fu,Ou,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fu,Ou,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},kr=new D,Iy=new ve,Ly=new ve,En=class extends wl{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Zu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zu*2*Math.atan(Math.tan(Bp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,n){return this.getViewBounds(e,Iy,Ly),n.subVectors(Ly,Iy)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Bp*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Tl=class extends wl{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},_m=class extends yh{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ho=class extends vh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new _m}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Mo=-90,Eo=1,Go=class extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new En(Mo,Eo,e,n);r.layers=this.layers,this.add(r);let s=new En(Mo,Eo,e,n);s.layers=this.layers,this.add(s);let o=new En(Mo,Eo,e,n);o.layers=this.layers,this.add(o);let a=new En(Mo,Eo,e,n);a.layers=this.layers,this.add(a);let l=new En(Mo,Eo,e,n);l.layers=this.layers,this.add(l);let c=new En(Mo,Eo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},xh=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Jm="\\[\\]\\.:\\/",KE=new RegExp("["+Jm+"]","g"),Km="[^"+Jm+"]",jE="[^"+Jm.replace("\\.","")+"]",QE=/((?:WC+[\/:])*)/.source.replace("WC",Km),ew=/(WCOD+)?/.source.replace("WCOD",jE),tw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Km),nw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Km),iw=new RegExp("^"+QE+ew+tw+nw+"$"),rw=["material","materials","bones","map"],vm=class{constructor(e,n,i){let r=i||Ct.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Ct=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KE,"")}static parseTrackName(e){let n=iw.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);rw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=vm;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NR=new Float32Array(1);var Ny=new Mt,Al=class{constructor(e,n,i=0,r=1/0){this.ray=new hl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Xe("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ny.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ny),this}intersectObject(e,n=!0,i=[]){return ym(e,this,i,n),i.sort(Dy),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ym(e[r],this,i,n);return i.sort(Dy),i}};function Dy(t,e){return t.distance-e.distance}function ym(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){let s=t.children;for(let o=0,a=s.length;o<a;o++)ym(s[o],e,n,!0)}}var ig=class ig{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){let s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};ig.prototype.isMatrix2=!0;var xm=ig;function jm(t,e,n,i){let r=sw(i);switch(n){case zm:return t*e;case Vm:return t*e/r.components*r.byteLength;case Rh:return t*e/r.components*r.byteLength;case Kr:return t*e*2/r.components*r.byteLength;case Ph:return t*e*2/r.components*r.byteLength;case km:return t*e*3/r.components*r.byteLength;case bi:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case Pl:case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Uh:return Math.max(t,16)*Math.max(e,8)/4;case Lh:case Dh:return Math.max(t,8)*Math.max(e,8)/2;case Fh:case Oh:case zh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bh:case Dl:case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case nd:case id:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ul:case ad:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sw(t){switch(t){case Un:case Um:return{byteLength:1,components:1};case Yo:case Fm:case Ai:return{byteLength:2,components:1};case bh:case Ch:return{byteLength:2,components:4};case wi:case Ah:case Ti:return{byteLength:4,components:1};case Om:case Bm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);function $x(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ow(t){let e=new WeakMap;function n(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){let _=f[h],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){let M=f[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var aw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lw=`#ifdef USE_ALPHAHASH
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
#endif`,cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fw=`#ifdef USE_AOMAP
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
#endif`,pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xw=`#ifdef USE_IRIDESCENCE
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
#endif`,Sw=`#ifdef USE_BUMPMAP
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
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ew=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pw=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Iw=`vec3 transformedNormal = objectNormal;
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
#endif`,Lw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ow=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,kw=`#ifdef USE_ENVMAP
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
#endif`,Vw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yw=`#ifdef USE_GRADIENTMAP
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
}`,$w=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kw=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,jw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Qw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,rT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sT=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gT=`#if defined( USE_POINTS_UV )
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
#endif`,_T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xT=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ST=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,ET=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,XT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YT=`#ifdef USE_SKINNING
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
#endif`,$T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,fA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pA=`#define DISTANCE
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
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
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
}`,yA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#define LAMBERT
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
}`,EA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,wA=`#define MATCAP
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
}`,TA=`#define MATCAP
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
}`,AA=`#define NORMAL
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
}`,bA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,CA=`#define PHONG
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
}`,RA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,PA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,LA=`#define TOON
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
}`,NA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,DA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,OA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,BA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,zA=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:aw,alphahash_pars_fragment:lw,alphamap_fragment:cw,alphamap_pars_fragment:uw,alphatest_fragment:hw,alphatest_pars_fragment:dw,aomap_fragment:fw,aomap_pars_fragment:pw,batching_pars_vertex:mw,batching_vertex:gw,begin_vertex:_w,beginnormal_vertex:vw,bsdfs:yw,iridescence_fragment:xw,bumpmap_pars_fragment:Sw,clipping_planes_fragment:Mw,clipping_planes_pars_fragment:Ew,clipping_planes_pars_vertex:ww,clipping_planes_vertex:Tw,color_fragment:Aw,color_pars_fragment:bw,color_pars_vertex:Cw,color_vertex:Rw,common:Pw,defaultnormal_vertex:Iw,displacementmap_pars_vertex:Lw,displacementmap_vertex:Nw,emissivemap_fragment:Dw,emissivemap_pars_fragment:Uw,colorspace_fragment:Fw,colorspace_pars_fragment:Ow,envmap_fragment:Bw,envmap_common_pars_fragment:zw,envmap_pars_fragment:kw,envmap_pars_vertex:Vw,envmap_physical_pars_fragment:jw,envmap_vertex:Hw,fog_vertex:Gw,fog_pars_vertex:Ww,fog_fragment:Xw,fog_pars_fragment:qw,gradientmap_pars_fragment:Yw,lightmap_pars_fragment:$w,lights_lambert_fragment:Zw,lights_lambert_pars_fragment:Jw,lights_pars_begin:Kw,lights_toon_fragment:Qw,lights_toon_pars_fragment:eT,lights_phong_fragment:tT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:rT,lights_fragment_begin:sT,lights_fragment_maps:oT,lights_fragment_end:aT,lightprobes_pars_fragment:lT,logdepthbuf_fragment:cT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:dT,map_fragment:fT,map_pars_fragment:pT,map_particle_fragment:mT,map_particle_pars_fragment:gT,metalnessmap_fragment:_T,metalnessmap_pars_fragment:vT,morphinstance_vertex:yT,morphcolor_vertex:xT,morphnormal_vertex:ST,morphtarget_pars_vertex:MT,morphtarget_vertex:ET,normal_fragment_begin:wT,normal_fragment_maps:TT,normal_pars_fragment:AT,normal_pars_vertex:bT,normal_vertex:CT,normalmap_pars_fragment:RT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:NT,opaque_fragment:DT,packing:UT,premultiplied_alpha_fragment:FT,project_vertex:OT,dithering_fragment:BT,dithering_pars_fragment:zT,roughnessmap_fragment:kT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:GT,shadowmap_vertex:WT,shadowmask_pars_fragment:XT,skinbase_vertex:qT,skinning_pars_vertex:YT,skinning_vertex:$T,skinnormal_vertex:ZT,specularmap_fragment:JT,specularmap_pars_fragment:KT,tonemapping_fragment:jT,tonemapping_pars_fragment:QT,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:aA,backgroundCube_vert:lA,backgroundCube_frag:cA,cube_vert:uA,cube_frag:hA,depth_vert:dA,depth_frag:fA,distance_vert:pA,distance_frag:mA,equirect_vert:gA,equirect_frag:_A,linedashed_vert:vA,linedashed_frag:yA,meshbasic_vert:xA,meshbasic_frag:SA,meshlambert_vert:MA,meshlambert_frag:EA,meshmatcap_vert:wA,meshmatcap_frag:TA,meshnormal_vert:AA,meshnormal_frag:bA,meshphong_vert:CA,meshphong_frag:RA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:LA,meshtoon_frag:NA,points_vert:DA,points_frag:UA,shadow_vert:FA,shadow_frag:OA,sprite_vert:BA,sprite_frag:zA},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Hi={basic:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:vn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:vn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:vn([Te.points,Te.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:vn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:vn([Te.common,Te.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:vn([Te.sprite,Te.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:vn([Te.common,Te.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:vn([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Hi.physical={uniforms:vn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var cd={r:0,b:0,g:0},kA=new Mt,Zx=new Ze;Zx.set(-1,0,0,0,1,0,0,0,1);function VA(t,e,n,i,r,s){let o=new et(0),a=r===!0?0:1,l,c,u=null,f=0,h=null;function p(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let x=m.backgroundBlurriness>0;y=e.get(y,x)}return y}function _(m){let y=!1,x=p(m);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,y){let x=p(y);x&&x.isCubeTexture?(c===void 0&&(c=new $t(new Uo(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Ps(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kA.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zx),c.material.toneMapped=lt.getTransfer(x.colorSpace)!==vt,(u!==x||f!==x.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $t(new Ts(2,2),new zi({name:"BackgroundMaterial",uniforms:Ps(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=lt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(cd,Zm(t)),n.buffers.color.setClear(cd.r,cd.g,cd.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:_,addToRenderList:M,dispose:d}}function HA(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null),s=r,o=!1;function a(R,k,X,L,z){let $=!1,V=f(R,L,X,k);s!==V&&(s=V,c(s.object)),$=p(R,L,X,z),$&&_(R,L,X,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(R,k,X,L),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function f(R,k,X,L){let z=L.wireframe===!0,$=i[k.id];$===void 0&&($={},i[k.id]=$);let V=R.isInstancedMesh===!0?R.id:0,ne=$[V];ne===void 0&&(ne={},$[V]=ne);let G=ne[X.id];G===void 0&&(G={},ne[X.id]=G);let K=G[z];return K===void 0&&(K=h(l()),G[z]=K),K}function h(R){let k=[],X=[],L=[];for(let z=0;z<n;z++)k[z]=0,X[z]=0,L[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:L,object:R,attributes:{},index:null}}function p(R,k,X,L){let z=s.attributes,$=k.attributes,V=0,ne=X.getAttributes();for(let G in ne)if(ne[G].location>=0){let ee=z[G],be=$[G];if(be===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(be=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(be=R.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function _(R,k,X,L){let z={},$=k.attributes,V=0,ne=X.getAttributes();for(let G in ne)if(ne[G].location>=0){let ee=$[G];ee===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));let be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),z[G]=be,V++}s.attributes=z,s.attributesNum=V,s.index=L}function M(){let R=s.newAttributes;for(let k=0,X=R.length;k<X;k++)R[k]=0}function g(R){d(R,0)}function d(R,k){let X=s.newAttributes,L=s.enabledAttributes,z=s.attributeDivisors;X[R]=1,L[R]===0&&(t.enableVertexAttribArray(R),L[R]=1),z[R]!==k&&(t.vertexAttribDivisor(R,k),z[R]=k)}function m(){let R=s.newAttributes,k=s.enabledAttributes;for(let X=0,L=k.length;X<L;X++)k[X]!==R[X]&&(t.disableVertexAttribArray(X),k[X]=0)}function y(R,k,X,L,z,$,V){V===!0?t.vertexAttribIPointer(R,k,X,z,$):t.vertexAttribPointer(R,k,X,L,z,$)}function x(R,k,X,L){M();let z=L.attributes,$=X.getAttributes(),V=k.defaultAttributeValues;for(let ne in $){let G=$[ne];if(G.location>=0){let K=z[ne];if(K===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),K!==void 0){let ee=K.normalized,be=K.itemSize,Oe=e.get(K);if(Oe===void 0)continue;let q=Oe.buffer,ye=Oe.type,Ae=Oe.bytesPerElement,Be=ye===t.INT||ye===t.UNSIGNED_INT||K.gpuType===Ah;if(K.isInterleavedBufferAttribute){let Se=K.data,ke=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,gt=K.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ve=0;Ve<G.locationSize;Ve++)d(G.location+Ve,Se.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ve=0;Ve<G.locationSize;Ve++)g(G.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,q);for(let Ve=0;Ve<G.locationSize;Ve++)y(G.location+Ve,be/G.locationSize,ye,ee,ke*Ae,(gt+be/G.locationSize*Ve)*Ae,Be)}else{if(K.isInstancedBufferAttribute){for(let Se=0;Se<G.locationSize;Se++)d(G.location+Se,K.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se);t.bindBuffer(t.ARRAY_BUFFER,q);for(let Se=0;Se<G.locationSize;Se++)y(G.location+Se,be/G.locationSize,ye,ee,be*Ae,be/G.locationSize*Se*Ae,Be)}}else if(V!==void 0){let ee=V[ne];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(G.location,ee);break;case 3:t.vertexAttrib3fv(G.location,ee);break;case 4:t.vertexAttrib4fv(G.location,ee);break;default:t.vertexAttrib1fv(G.location,ee)}}}}m()}function A(){U();for(let R in i){let k=i[R];for(let X in k){let L=k[X];for(let z in L){let $=L[z];for(let V in $)u($[V].object),delete $[V];delete L[z]}}delete i[R]}}function T(R){if(i[R.id]===void 0)return;let k=i[R.id];for(let X in k){let L=k[X];for(let z in L){let $=L[z];for(let V in $)u($[V].object),delete $[V];delete L[z]}}delete i[R.id]}function v(R){for(let k in i){let X=i[k];for(let L in X){let z=X[L];if(z[R.id]===void 0)continue;let $=z[R.id];for(let V in $)u($[V].object),delete $[V];delete z[R.id]}}}function w(R){for(let k in i){let X=i[k],L=R.isInstancedMesh===!0?R.id:0,z=X[L];if(z!==void 0){for(let $ in z){let V=z[$];for(let ne in V)u(V[ne].object),delete V[ne];delete z[$]}delete X[L],Object.keys(X).length===0&&delete i[k]}}}function U(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function GA(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function WA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(v){return!(v!==bi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let w=v===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Un&&v!==Ti&&!w&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:A,samples:T}}function XA(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Mi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){let _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{let m=s?0:i,y=m*4,x=d.clippingState||null;l.value=x,x=u(_,h,y,p);for(let A=0;A!==y;++A)x[A]=n[A];d.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,_!==!0||g===null){let d=p+M*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,x=p;y!==M;++y,x+=4)o.copy(f[y]).applyMatrix4(m,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var Bl=class extends Wn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dl(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Uo(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:As});s.uniforms.tEquirect.value=n;let o=new $t(r,s),a=n.minFilter;return n.minFilter===Ei&&(n.minFilter=cn),new Go(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},bx=256,qA=3,YA=20,Jx=256,Kx=16,$A=3,ZA=new D,JA=new et,Jo=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Go(1,10,null),this._boxMesh=new $t(new Uo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){let{size:o=256,position:a=ZA}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,h=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(JA));let g=new Go(i,r,u);return g.position.copy(a),g.update(l,e),l.autoClear=f,l.autoClearColor=h,l.autoClearDepth=p,l.autoClearStencil=_,e.background=M,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(bx,vx(e))}_fromTexture(e,n){e.mapping===Cs||e.mapping===qo?this._setSize(e.image.length===0?bx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=Cx(e,!1,!1),i=Math.log2(e)-qA;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Cx(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;let o=e.width>>n;e.viewport.set(0,0,o,o),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Cs||e.mapping===qo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rx()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=KA(),this._integrationMaterial=jA());let n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Kx);for(let o=0;o<=i;o++){let a=t.lodToRoughness(o,i);if(o>i-$A)s.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(n)+.5*Math.log2(6/(Jx*Math.pow(a,4)))+.5:0;r.roughness.value=a,r.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=QA());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}};function Cx(t,e,n){return new Bl(t,{minFilter:Ei,generateMipmaps:e,type:Ai,colorSpace:sl,depthBuffer:n})}function zl(t,e,n){return new zi({name:t,uniforms:e,vertexShader:rt.cube_vert,fragmentShader:n,side:bn,blending:As,depthTest:!1,depthWrite:!1})}function KA(){return zl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function jA(){return zl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function QA(){return zl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${YA}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Rx(){return zl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Px(){return zl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function eb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){let p=h.mapping;if(p===Eh||p===wh)if(e.has(h)){let _=e.get(h).texture;return a(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let M=new Bl(_.height);return M.fromEquirectangularTexture(t,h),e.set(h,M),h.addEventListener("dispose",c),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let p=h.mapping,_=p===Eh||p===wh,M=p===Cs||p===qo;if(_||M){let g=n.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Jo(t)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{let m=h.image;return _&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Jo(t)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,p){return p===Eh?h.mapping=Cs:p===wh&&(h.mapping=qo),h}function l(h){let p=0,_=6;for(let M=0;M<_;M++)h[M]!==void 0&&p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function tb(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&Ss("WebGLRenderer: "+i+" extension not supported."),r}}}function nb(t,e,n,i){let r={},s=new WeakMap,o=new FinalizationRegistry(_=>delete r[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",a),delete r[_.id],o.unregister(_);let M=s.get(_);M&&(e.remove(M),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,M){return r[M.id]!==void 0||(M.addEventListener("dispose",a),r[M.id]=new WeakRef(M),o.register(M,M.id,M),n.memory.geometries++),M}function u(_){let M=_.attributes;for(let g in M)e.update(M[g],t.ARRAY_BUFFER)}function f(_){let M=_.index,g=_.attributes.position,d=0;if(g===void 0)return;let m=M!==null?M.array.length:g.array.length/3-1,y=g.count>=65535?ul:cl,x=new y(Math.ceil(m/3)*6,1),A=x.array;if(M!==null){let v=M.array;d=M.version;for(let w=0,U=0;w<m;w+=3){let C=v[w+0],R=v[w+1],k=v[w+2];A[U++]=C,A[U++]=R,A[U++]=R,A[U++]=k,A[U++]=k,A[U++]=C}}else{d=g.version;for(let v=0,w=0;v<m;v+=3){let U=v+0,C=v+1,R=v+2;A[w++]=U,A[w++]=C,A[w++]=C,A[w++]=R,A[w++]=R,A[w++]=U}}x.version=d;let T=s.get(_);T&&e.remove(T),s.set(_,x)}function h(_){let M=s.get(_);if(M){let g=_.index;g!==null&&M.version<g.version&&f(_)}else f(_);return s.get(_)}function p(){for(let _ in r){let M=r[_].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:h,dispose:p}}function ib(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,s,f*o),n.update(h,i,1)}function c(f,h,p){p!==0&&(t.drawElementsInstanced(i,h,s,f*o,p),n.update(h,i,p))}function u(f,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,p);let M=0;for(let g=0;g<p;g++)M+=h[g];n.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function rb(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sb(t,e,n){let i=new WeakMap,r=new Pt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let U=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",U)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],m=a.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),M===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*A*4*f),v=new ll(T,x,A,f);v.type=Ti,v.needsUpdate=!0;let w=y*4;for(let C=0;C<f;C++){let R=g[C],k=d[C],X=m[C],L=x*A*4*C;for(let z=0;z<R.count;z++){let $=z*w;p===!0&&(r.fromBufferAttribute(R,z),T[L+$+0]=r.x,T[L+$+1]=r.y,T[L+$+2]=r.z,T[L+$+3]=0),_===!0&&(r.fromBufferAttribute(k,z),T[L+$+4]=r.x,T[L+$+5]=r.y,T[L+$+6]=r.z,T[L+$+7]=0),M===!0&&(r.fromBufferAttribute(X,z),T[L+$+8]=r.x,T[L+$+9]=r.y,T[L+$+10]=r.z,T[L+$+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:v,size:new ve(x,A)},i.set(a,h),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function ob(t,e,n,i,r){let s=new WeakMap;function o(c){let u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}var ab={[Cm]:"LINEAR_TONE_MAPPING",[Rm]:"REINHARD_TONE_MAPPING",[Pm]:"CINEON_TONE_MAPPING",[Im]:"ACES_FILMIC_TONE_MAPPING",[Nm]:"AGX_TONE_MAPPING",[Cl]:"NEUTRAL_TONE_MAPPING",[Lm]:"CUSTOM_TONE_MAPPING"};function lb(t,e,n,i,r,s){let o=new Wn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Xn;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let f=new sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new $t(u,f),p=new Tl(-1,1,1,-1,0,1),_=null,M=null,g=!1,d,m=null,y=[],x=!1;this.setSize=function(A,T){o.setSize(A,T),a!==null&&a.setSize(A,T),l!==null&&l.setSize(A,T);for(let v=0;v<y.length;v++){let w=y[v];w.setSize&&w.setSize(A,T)}},this.setEffects=function(A){y=A,x=y.length>0&&y[0].isRenderPass===!0;let T=o.width,v=o.height;y.length>0&&a===null&&(a=new Wn(T,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),l=new Wn(T,v,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));let w=r===!0&&y.some(U=>U.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new cr(T,v),s===!0&&(c.format=ur,c.type=Rs)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let U=0;U<y.length;U++){let C=y[U];C.setSize&&C.setSize(T,v),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(g||A.toneMapping===ki&&y.length===0)return!1;if(m=T,T!==null){let v=T.width,w=T.height;(o.width!==v||o.height!==w)&&this.setSize(v,w)}return x===!1&&A.setRenderTarget(o),d=A.toneMapping,A.toneMapping=ki,!0},this.hasRenderPass=function(){return x},this.end=function(A,T){A.toneMapping=d,g=!0;let v=o,w=a;for(let U=0;U<y.length;U++){let C=y[U];C.enabled!==!1&&(C.render(A,w,v,T),C.needsSwap!==!1&&(v=w,w=w===a?l:a))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,f.defines={},lt.getTransfer(_)===vt&&(f.defines.SRGB_TRANSFER="");let U=ab[M];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(m),A.render(h,p),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var jx=new Tn,Qx=new cr(1,1),eS=new fl(1),tS=new ll,nS=new ju,iS=new dl,Ix=[],Lx=[],Nx=new Float32Array(16),Dx=new Float32Array(9),Ux=new Float32Array(4);function Ko(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=Ix[r];if(s===void 0&&(s=new Float32Array(r),Ix[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dd(t,e){let n=Lx[e];n===void 0&&(n=new Int32Array(e),Lx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function cb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ub(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function hb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function db(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function fb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;Ux.set(i),t.uniformMatrix2fv(this.addr,!1,Ux),Jt(n,i)}}function pb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;Dx.set(i),t.uniformMatrix3fv(this.addr,!1,Dx),Jt(n,i)}}function mb(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Zt(n,i))return;Nx.set(i),t.uniformMatrix4fv(this.addr,!1,Nx),Jt(n,i)}}function gb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _b(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function vb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function yb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function xb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function Mb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function Eb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function fd(t){return t.version===0&&(t.compareFunction=Wm,t.needsUpdate=!0),t}function wb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=fd(Qx):s=jx,n.setTexture2D(e||s,r)}function Tb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nS,r)}function Ab(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=fd(eS):s=iS,n.setTextureCube(e||s,r)}function bb(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tS,r)}function Cb(t){switch(t){case 5126:return cb;case 35664:return ub;case 35665:return hb;case 35666:return db;case 35674:return fb;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return xb;case 36294:return Sb;case 36295:return Mb;case 36296:return Eb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return bb}}function Rb(t,e){t.uniform1fv(this.addr,e)}function Pb(t,e){let n=Ko(e,this.size,2);t.uniform2fv(this.addr,n)}function Ib(t,e){let n=Ko(e,this.size,3);t.uniform3fv(this.addr,n)}function Lb(t,e){let n=Ko(e,this.size,4);t.uniform4fv(this.addr,n)}function Nb(t,e){let n=Ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Db(t,e){let n=Ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ub(t,e){let n=Ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fb(t,e){t.uniform1iv(this.addr,e)}function Ob(t,e){t.uniform2iv(this.addr,e)}function Bb(t,e){t.uniform3iv(this.addr,e)}function zb(t,e){t.uniform4iv(this.addr,e)}function kb(t,e){t.uniform1uiv(this.addr,e)}function Vb(t,e){t.uniform2uiv(this.addr,e)}function Hb(t,e){t.uniform3uiv(this.addr,e)}function Gb(t,e){t.uniform4uiv(this.addr,e)}function Wb(t,e,n){let i=this.cache,r=e.length,s=dd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=fd(Qx):o=jx;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Xb(t,e,n){let i=this.cache,r=e.length,s=dd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||nS,s[o])}function qb(t,e,n){let i=this.cache,r=e.length,s=dd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));let o;this.type===t.SAMPLER_CUBE_SHADOW?o=fd(eS):o=iS;for(let a=0;a!==r;++a)n.setTextureCube(e[a]||o,s[a])}function Yb(t,e,n){let i=this.cache,r=e.length,s=dd(n,r);Zt(i,s)||(t.uniform1iv(this.addr,s),Jt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||tS,s[o])}function $b(t){switch(t){case 5126:return Rb;case 35664:return Pb;case 35665:return Ib;case 35666:return Lb;case 35674:return Nb;case 35675:return Db;case 35676:return Ub;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return kb;case 36294:return Vb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}var og=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cb(n.type)}},ag=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$b(n.type)}},lg=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},rg=/(\w+)(\])?(\[|\.)?/g;function Fx(t,e){t.seq.push(e),t.map[e.id]=e}function Zb(t,e,n){let i=t.name,r=i.length;for(rg.lastIndex=0;;){let s=rg.exec(i),o=rg.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fx(n,c===void 0?new og(a,t,e):new ag(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new lg(a),Fx(n,f)),n=f}}}var Zo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Zb(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function Ox(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Jb=37297,Kb=0;function jb(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Bx=new Ze;function Qb(t){lt._getMatrix(Bx,lt.workingColorSpace,t);let e=`mat3( ${Bx.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case ol:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zx(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+jb(t.getShaderSource(e),a)}else return s}function eC(t,e){let n=Qb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var tC={[Cm]:"Linear",[Rm]:"Reinhard",[Pm]:"Cineon",[Im]:"ACESFilmic",[Nm]:"AgX",[Cl]:"Neutral",[Lm]:"Custom"};function nC(t,e){let n=tC[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ud=new D;function iC(){lt.getLuminanceCoefficients(ud);let t=ud.x.toFixed(4),e=ud.y.toFixed(4),n=ud.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function sC(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oC(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ol(t){return t!==""}function kx(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function cg(t){return t.replace(aC,lC)}function lC(t,e){let n=rt[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cg(n)}var cC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hx(t){return t.replace(cC,uC)}function uC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
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
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var hC={[bl]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function dC(t){return hC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fC={[qo]:"ENVMAP_MODE_REFRACTION"};function pC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var mC={[bm]:"ENVMAP_BLENDING_MULTIPLY",[nx]:"ENVMAP_BLENDING_MIX",[ix]:"ENVMAP_BLENDING_ADD"};function gC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":mC[t.combine]||"ENVMAP_BLENDING_NONE"}function _C(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=dC(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=pC(n),f=gC(n),h=rC(n),p=sC(s),_=r.createProgram(),M,g,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ol).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(Ol).join(`
`),g.length>0&&(g+=`
`)):(M=[Gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),g=[Gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?rt.tonemapping_pars_fragment:"",n.toneMapping!==ki?nC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,eC("linearToOutputTexel",n.outputColorSpace),iC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ol).join(`
`)),o=cg(o),o=kx(o,n),o=Vx(o,n),a=cg(a),a=kx(a,n),a=Vx(a,n),o=Hx(o),a=Hx(a),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=d+M+o,y=d+g+a,x=Ox(r,r.VERTEX_SHADER,m),A=Ox(r,r.FRAGMENT_SHADER,y);r.attachShader(_,x),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(C){if(t.debug.checkShaderErrors){let R=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(x)||"",X=r.getShaderInfoLog(A)||"",L=R.trim(),z=k.trim(),$=X.trim(),V=!0,ne=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,x,A);else{let G=zx(r,x,"vertex"),K=zx(r,A,"fragment");Xe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+G+`
`+K)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(z===""||$==="")&&(ne=!1);ne&&(C.diagnostics={runnable:V,programLog:L,vertexShader:{log:z,prefix:M},fragmentShader:{log:$,prefix:g}})}r.deleteShader(x),r.deleteShader(A),v=new Zo(r,_),w=oC(r,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,Jb)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=A,this}var vC=0,ug=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new hg(e),n.set(e,i)),i}},hg=class{constructor(e){this.id=vC++,this.code=e,this.usedTimes=0}};function yC(t){return t===Kr||t===Dl||t===Ul}function xC(t,e,n,i,r,s){let o=new Ro,a=new ug,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,U,C,R,k){let X=C.fog,L=R.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||z,$),ne=h[v.type],G=i.precision;v.precision!==null&&(G=i.getMaxPrecision(v.precision),G!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",G,"instead."));let K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=K!==void 0?K.length:0,be=0;L.morphAttributes.position!==void 0&&(be=1),L.morphAttributes.normal!==void 0&&(be=2),L.morphAttributes.color!==void 0&&(be=3);let Oe,q,ye,Ae;if(ne){let Ee=Hi[ne];Oe=Ee.vertexShader,q=Ee.fragmentShader}else{Oe=v.vertexShader,q=v.fragmentShader;let Ee=a.getVertexShaderStage(v),pt=a.getFragmentShaderStage(v);a.update(v,Ee,pt),ye=Ee.id,Ae=pt.id}let Be=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),ke=R.isInstancedMesh===!0,gt=R.isBatchedMesh===!0,Ve=!!v.map,Ye=!!v.matcap,Ke=!!V,Q=Ke&&V.isPMREMTexture===!0,le=!!v.aoMap,ae=!!v.lightMap,we=!!v.bumpMap&&v.wireframe===!1,ce=!!v.normalMap,qe=!!v.displacementMap,Ie=!!v.emissiveMap,tt=!!v.metalnessMap,nt=!!v.roughnessMap,st=v.anisotropy>0,N=v.clearcoat>0,Fe=v.diffuseRoughness>0,Qe=v.dispersion>0,mt=v.retroreflectivity>0,_e=v.iridescence>0,Et=v.sheen>0,De=v.transmission>0,Le=st&&!!v.anisotropyMap,b=N&&!!v.clearcoatMap,S=N&&!!v.clearcoatNormalMap,O=N&&!!v.clearcoatRoughnessMap,te=Fe&&!!v.diffuseRoughnessMap,j=_e&&!!v.iridescenceMap,ue=_e&&!!v.iridescenceThicknessMap,fe=Et&&!!v.sheenColorMap,Y=Et&&!!v.sheenRoughnessMap,Z=!!v.specularMap,he=!!v.specularColorMap,P=!!v.specularIntensityMap,J=De&&!!v.transmissionMap,W=De&&!!v.thicknessMap,pe=!!v.gradientMap,oe=!!v.alphaMap,me=v.alphaTest>0,Ue=!!v.alphaHash,$e=!!v.extensions,re=ki;v.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(re=t.toneMapping);let He=Q?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,We={shaderID:ne,shaderType:v.type,shaderName:v.name,vertexShader:Oe,fragmentShader:q,defines:v.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:G,batching:gt,batchingColor:gt&&R._colorsTexture!==null,instancing:ke,instancingColor:ke&&R.instanceColor!==null,instancingMorph:ke&&R.morphTexture!==null,outputColorSpace:Be===null?t.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Ye,envMap:Ke,envMapMode:Ke&&V.mapping,envMapPMREM:Q,envMapMaxLod:Q?He.length-1:null,envMapSize:Q?He[0].width:null,aoMap:le,lightMap:ae,bumpMap:we,normalMap:ce,displacementMap:qe,emissiveMap:Ie,normalMapObjectSpace:ce&&v.normalMapType===ox,normalMapTangentSpace:ce&&v.normalMapType===ld,packedNormalMap:ce&&v.normalMapType===ld&&yC(v.normalMap.format),metalnessMap:tt,roughnessMap:nt,anisotropy:st,anisotropyMap:Le,clearcoat:N,clearcoatMap:b,clearcoatNormalMap:S,clearcoatRoughnessMap:O,diffuseRoughness:Fe,diffuseRoughnessMap:te,dispersion:Qe,retroreflection:mt,iridescence:_e,iridescenceMap:j,iridescenceThicknessMap:ue,sheen:Et,sheenColorMap:fe,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:he,specularIntensityMap:P,transmission:De,transmissionMap:J,thicknessMap:W,gradientMap:pe,opaque:v.transparent===!1&&v.blending===Xo&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:me,alphaHash:Ue,combine:v.combine,mapUv:Ve&&p(v.map.channel),aoMapUv:le&&p(v.aoMap.channel),lightMapUv:ae&&p(v.lightMap.channel),bumpMapUv:we&&p(v.bumpMap.channel),normalMapUv:ce&&p(v.normalMap.channel),displacementMapUv:qe&&p(v.displacementMap.channel),emissiveMapUv:Ie&&p(v.emissiveMap.channel),metalnessMapUv:tt&&p(v.metalnessMap.channel),roughnessMapUv:nt&&p(v.roughnessMap.channel),anisotropyMapUv:Le&&p(v.anisotropyMap.channel),clearcoatMapUv:b&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&p(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(v.sheenRoughnessMap.channel),specularMapUv:Z&&p(v.specularMap.channel),specularColorMapUv:he&&p(v.specularColorMap.channel),specularIntensityMapUv:P&&p(v.specularIntensityMap.channel),transmissionMapUv:J&&p(v.transmissionMap.channel),thicknessMapUv:W&&p(v.thicknessMap.channel),alphaMapUv:oe&&p(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ce||st),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(Ve||oe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&ce===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Se,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:be,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(Ee=>Ee.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:Ie&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$n,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:$e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&v.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function M(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(g(w,v),d(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function g(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function d(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function m(v){let w=h[v.type],U;if(w){let C=Hi[w];U=wx.clone(C.uniforms)}else U=v.uniforms;return U}function y(v,w){let U=u.get(w);return U!==void 0?++U.usedTimes:(U=new _C(t,w,v,r),c.push(U),u.set(w,U)),U}function x(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:m,acquireProgram:y,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:T}}function SC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Wx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xx(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,_,M,g,d){let m=t[e];return m===void 0?(m={id:h.id,object:h,geometry:p,material:_,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:d},t[e]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=_,m.materialVariant=o(h),m.groupOrder=M,m.renderOrder=h.renderOrder,m.z=g,m.group=d),e++,m}function l(h,p,_,M,g,d,m){m.reversedDepth===!0&&(g=-g);let y=a(h,p,_,M,g,d);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(h,p,_,M,g,d){let m=a(h,p,_,M,g,d);_.transmission>0?i.unshift(m):_.transparent===!0?r.unshift(m):n.unshift(m)}function u(h,p){n.length>1&&n.sort(h||MC),i.length>1&&i.sort(p||Wx),r.length>1&&r.sort(p||Wx)}function f(){for(let h=e,p=t.length;h<p;h++){let _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function EC(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new Xx,t.set(i,[o])):r>=s.length?(o=new Xx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wC(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new et};break;case"SpotLight":n={position:new D,direction:new D,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function TC(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var AC=0;function bC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CC(t){let e=new wC,n=TC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let r=new D,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,_=0,M=0,g=0,d=0,m=0,y=0,x=0,A=0,T=0,v=0,w=0,U=0,C=0;c.sort(bC);for(let k=0,X=c.length;k<X;k++){let L=c[k],z=L.color,$=L.intensity,V=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Kr?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=z.r*$,f+=z.g*$,h+=z.b*$;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],$);C++}else if(L.isSunLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,ee=n.get(L);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[_]=ee,i.sunShadowMap[_]=ne;let be=K.getViewportCount();for(let Oe=0;Oe<be;Oe++)i.sunShadowMatrix[M+Oe]=K.getMatrix(Oe),i.sunShadowCascade[M+Oe]=K._cascadeData[Oe];M+=be,_++}i.sun[p]=G,p++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,ee=n.get(L);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.directionalShadow[g]=ee,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=L.shadow.matrix,A++}i.directional[g]=G,g++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(z).multiplyScalar($),G.distance=V,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[m]=G;let K=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,K.updateMatrices(L),L.castShadow&&U++),i.spotLightMatrix[m]=K.matrix,L.castShadow){let ee=n.get(L);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,i.spotShadow[m]=ee,i.spotShadowMap[m]=ne,v++}m++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(z).multiplyScalar($),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=G,y++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let K=L.shadow,ee=n.get(L);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,i.pointShadow[d]=ee,i.pointShadowMap[d]=ne,i.pointShadowMatrix[d]=L.shadow.matrix,T++}i.point[d]=G,d++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar($),G.groundColor.copy(L.groundColor).multiplyScalar($),i.hemi[x]=G,x++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let R=i.hash;(R.sunLength!==p||R.directionalLength!==g||R.pointLength!==d||R.spotLength!==m||R.rectAreaLength!==y||R.hemiLength!==x||R.numSunShadows!==_||R.numDirectionalShadows!==A||R.numPointShadows!==T||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=d,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+w-U,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=C,R.sunLength=p,R.directionalLength=g,R.pointLength=d,R.spotLength=m,R.rectAreaLength=y,R.hemiLength=x,R.numSunShadows=_,R.numDirectionalShadows=A,R.numPointShadows=T,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=C,i.version=AC++)}function l(c,u){let f=0,h=0,p=0,_=0,M=0,g=0,d=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(d),f++}else if(x.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),h++}else if(x.isSpotLight){let A=i.spot[_];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),_++}else if(x.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),M++}else if(x.isPointLight){let A=i.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:i}}function qx(t){let e=new CC(t),n=[],i=[],r=[];function s(f){u.camera=f,n.length=0,i.length=0,r.length=0}function o(f){f.isLightProbeGrid?r.push(f):n.push(f)}function a(f){i.push(f)}function l(){e.setup(n),r.sort((f,h)=>f.priority-h.priority||f.id-h.id)}function c(f){e.setupView(n,f)}let u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function RC(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new qx(t),e.set(r,[a])):s>=o.length?(a=new qx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LC=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],NC=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Yx=new Mt,Fl=new D,sg=new D;function DC(t,e,n){let i=new Wr,r=new ve,s=new ve,o=new Pt,a=new oh,l=new ah,c={},u=n.maxTextureSize,f={[Jr]:bn,[bn]:Jr,[$n]:$n},h=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:PC,fragmentShader:IC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Xn;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $t(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let d=this.type;this.render=function(T,v,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Oy&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bl);let U=t.getRenderTarget(),C=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),k=t.state;k.setBlending(As),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let X=d!==this.type;X&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=T.length;L<z;L++){let $=T[L],V=$.shadow;if(V===void 0){Ge("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let ne=V.getFrameExtents();r.multiply(ne),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,V.mapSize.y=s.y));let G=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=G,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Wo){if($.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Wn(r.x,r.y,{format:Kr,type:Ai,minFilter:cn,magFilter:cn,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new cr(r.x,r.y,Ti),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=ar,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn}else $.isPointLight?(V.map=new Bl(r.x),V.map.depthTexture=new fl(r.x,wi)):(V.map=new Wn(r.x,r.y),V.map.depthTexture=new cr(r.x,r.y,wi)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=ar,this.type===bl?(V.map.depthTexture.compareFunction=G?Gm:Hm,V.map.depthTexture.minFilter=cn,V.map.depthTexture.magFilter=cn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=tn,V.map.depthTexture.magFilter=tn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);let K=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,w);let ee=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:w.layers;for(let be=0;be<K;be++){let Oe=V.getCamera(be);if($.isPointLight){let q=V.camera,ye=V.matrix,Ae=$.distance||q.far;Ae!==q.far&&(q.far=Ae,q.updateProjectionMatrix()),Fl.setFromMatrixPosition($.matrixWorld),q.position.copy(Fl),sg.copy(q.position),sg.add(LC[be]),q.up.copy(NC[be]),q.lookAt(sg),q.updateMatrixWorld(),ye.makeTranslation(-Fl.x,-Fl.y,-Fl.z),Yx.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Yx,q.coordinateSystem,q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,be),t.clear();else{be===0&&(t.setRenderTarget(V.map),t.clear());let q=V.getViewport(be);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),k.viewport(o)}i=V.getFrustum(be),x(v,w,Oe,$,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Wo&&m(V,w),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(U,C,R)};function m(T,v){let w=e.update(M);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Wn(r.x,r.y,{format:Kr,type:Ai}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(v,null,w,h,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(v,null,w,p,M,null)}function y(T,v,w,U){let C=null,R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)C=R;else if(C=w.isPointLight===!0?l:a,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let k=C.uuid,X=v.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let z=L[X];z===void 0&&(z=C.clone(),L[X]=z,v.addEventListener("dispose",A)),C=z}if(C.visible=v.visible,C.wireframe=v.wireframe,U===Wo?C.side=v.shadowSide!==null?v.shadowSide:v.side:C.side=v.shadowSide!==null?v.shadowSide:f[v.side],C.alphaMap=v.alphaMap,C.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,C.map=v.map,C.clipShadows=v.clipShadows,C.clippingPlanes=v.clippingPlanes,C.clipIntersection=v.clipIntersection,C.displacementMap=v.displacementMap,C.displacementScale=v.displacementScale,C.displacementBias=v.displacementBias,C.wireframeLinewidth=v.wireframeLinewidth,C.linewidth=v.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=t.properties.get(C);k.light=w}return C}function x(T,v,w,U,C,R){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Wo)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let L=e.update(T),z=T.material;if(Array.isArray(z)){let $=L.groups;for(let V=0,ne=$.length;V<ne;V++){let G=$[V],K=z[G.materialIndex];if(K&&K.visible){let ee=y(T,K,U,R);T.onBeforeShadow(t,T,v,w,L,ee,G),t.renderBufferDirect(w,null,L,ee,T,G),T.onAfterShadow(t,T,v,w,L,ee,G)}}}else if(z.visible){let $=y(T,z,U,R);T.onBeforeShadow(t,T,v,w,L,$,null),t.renderBufferDirect(w,null,L,$,T,null),T.onAfterShadow(t,T,v,w,L,$,null)}}let X=T.children;for(let L=0,z=X.length;L<z;L++)x(X[L],v,w,U,C,R)}function A(T){T.target.removeEventListener("dispose",A);for(let w in c){let U=c[w],C=T.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function UC(t,e){function n(){let P=!1,J=new Pt,W=null,pe=new Pt(0,0,0,0);return{setMask:function(oe){W!==oe&&!P&&(t.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){P=oe},setClear:function(oe,me,Ue,$e,re){re===!0&&(oe*=$e,me*=$e,Ue*=$e),J.set(oe,me,Ue,$e),pe.equals(J)===!1&&(t.clearColor(oe,me,Ue,$e),pe.copy(J))},reset:function(){P=!1,W=null,pe.set(-1,0,0,0)}}}function i(){let P=!1,J=!1,W=null,pe=null,oe=null;return{setReversed:function(me){if(J!==me){let Ue=e.get("EXT_clip_control");me?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),J=me;let $e=oe;oe=null,this.setClear($e)}},getReversed:function(){return J},setTest:function(me){me?Se(t.DEPTH_TEST):ke(t.DEPTH_TEST)},setMask:function(me){W!==me&&!P&&(t.depthMask(me),W=me)},setFunc:function(me){if(J&&(me=_x[me]),pe!==me){switch(me){case ku:t.depthFunc(t.NEVER);break;case Vu:t.depthFunc(t.ALWAYS);break;case Hu:t.depthFunc(t.LESS);break;case To:t.depthFunc(t.LEQUAL);break;case Gu:t.depthFunc(t.EQUAL);break;case Wu:t.depthFunc(t.GEQUAL);break;case Xu:t.depthFunc(t.GREATER);break;case qu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=me}},setLocked:function(me){P=me},setClear:function(me){oe!==me&&(oe=me,J&&(me=1-me),t.clearDepth(me))},reset:function(){P=!1,W=null,pe=null,oe=null,J=!1}}}function r(){let P=!1,J=null,W=null,pe=null,oe=null,me=null,Ue=null,$e=null,re=null;return{setTest:function(He){P||(He?Se(t.STENCIL_TEST):ke(t.STENCIL_TEST))},setMask:function(He){J!==He&&!P&&(t.stencilMask(He),J=He)},setFunc:function(He,We,Ee){(W!==He||pe!==We||oe!==Ee)&&(t.stencilFunc(He,We,Ee),W=He,pe=We,oe=Ee)},setOp:function(He,We,Ee){(me!==He||Ue!==We||$e!==Ee)&&(t.stencilOp(He,We,Ee),me=He,Ue=We,$e=Ee)},setLocked:function(He){P=He},setClear:function(He){re!==He&&(t.clearStencil(He),re=He)},reset:function(){P=!1,J=null,W=null,pe=null,oe=null,me=null,Ue=null,$e=null,re=null}}}let s=new n,o=new i,a=new r,l={},c=new WeakMap,u={},f={},h={},p=new WeakMap,_=[],M=null,g=!1,d=null,m=null,y=null,x=null,A=null,T=null,v=null,w=new et(0,0,0),U=0,C=!1,R=null,k=null,X=null,L=null,z=null,$=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=ne>=2);let K=null,ee={},be=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),q=new Pt().fromArray(be),ye=new Pt().fromArray(Oe);function Ae(P,J,W,pe){let oe=new Uint8Array(4),me=t.createTexture();t.bindTexture(P,me),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<W;Ue++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(J,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(J+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return me}let Be={};Be[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),Be[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Be[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(t.DEPTH_TEST),o.setFunc(To),we(!1),ce(Sm),Se(t.CULL_FACE),le(As);function Se(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function ke(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function gt(P,J){return h[P]!==J?(t.bindFramebuffer(P,J),h[P]=J,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=J),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=J),!0):!1}function Ve(P,J){let W=_,pe=!1;if(P){W=p.get(J),W===void 0&&(W=[],p.set(J,W));let oe=P.textures;if(W.length!==oe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ue=oe.length;me<Ue;me++)W[me]=t.COLOR_ATTACHMENT0+me;W.length=oe.length,pe=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,pe=!0);pe&&t.drawBuffers(W)}function Ye(P){return M!==P?(t.useProgram(P),M=P,!0):!1}let Ke={[bs]:t.FUNC_ADD,[zy]:t.FUNC_SUBTRACT,[ky]:t.FUNC_REVERSE_SUBTRACT};Ke[Vy]=t.MIN,Ke[Hy]=t.MAX;let Q={[Gy]:t.ZERO,[Wy]:t.ONE,[Xy]:t.SRC_COLOR,[Tm]:t.SRC_ALPHA,[Ky]:t.SRC_ALPHA_SATURATE,[Zy]:t.DST_COLOR,[Yy]:t.DST_ALPHA,[qy]:t.ONE_MINUS_SRC_COLOR,[Am]:t.ONE_MINUS_SRC_ALPHA,[Jy]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[jy]:t.CONSTANT_COLOR,[Qy]:t.ONE_MINUS_CONSTANT_COLOR,[ex]:t.CONSTANT_ALPHA,[tx]:t.ONE_MINUS_CONSTANT_ALPHA};function le(P,J,W,pe,oe,me,Ue,$e,re,He){if(P===As){g===!0&&(ke(t.BLEND),g=!1);return}if(g===!1&&(Se(t.BLEND),g=!0),P!==By){if(P!==d||He!==C){if((m!==bs||A!==bs)&&(t.blendEquation(t.FUNC_ADD),m=bs,A=bs),He)switch(P){case Xo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFunc(t.ONE,t.ONE);break;case Em:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Xe("WebGLState: Invalid blending: ",P);break}else switch(P){case Xo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Em:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wm:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",P);break}y=null,x=null,T=null,v=null,w.set(0,0,0),U=0,d=P,C=He}return}oe=oe||J,me=me||W,Ue=Ue||pe,(J!==m||oe!==A)&&(t.blendEquationSeparate(Ke[J],Ke[oe]),m=J,A=oe),(W!==y||pe!==x||me!==T||Ue!==v)&&(t.blendFuncSeparate(Q[W],Q[pe],Q[me],Q[Ue]),y=W,x=pe,T=me,v=Ue),($e.equals(w)===!1||re!==U)&&(t.blendColor($e.r,$e.g,$e.b,re),w.copy($e),U=re),d=P,C=!1}function ae(P,J){P.side===$n?ke(t.CULL_FACE):Se(t.CULL_FACE);let W=P.side===bn;J&&(W=!W),we(W),P.blending===Xo&&P.transparent===!1?le(As):le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),s.setMask(P.colorWrite);let pe=P.stencilWrite;a.setTest(pe),pe&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(P){R!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),R=P)}function ce(P){P!==Uy?(Se(t.CULL_FACE),P!==k&&(P===Sm?t.cullFace(t.BACK):P===Fy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ke(t.CULL_FACE),k=P}function qe(P){P!==X&&(V&&t.lineWidth(P),X=P)}function Ie(P,J,W){P?(Se(t.POLYGON_OFFSET_FILL),(L!==J||z!==W)&&(L=J,z=W,o.getReversed()&&(J=-J,W=-W),t.polygonOffset(J,W))):ke(t.POLYGON_OFFSET_FILL)}function tt(P){P?Se(t.SCISSOR_TEST):ke(t.SCISSOR_TEST)}function nt(P){P===void 0&&(P=t.TEXTURE0+$-1),K!==P&&(t.activeTexture(P),K=P)}function st(P,J,W){W===void 0&&(K===null?W=t.TEXTURE0+$-1:W=K);let pe=ee[W];pe===void 0&&(pe={type:void 0,texture:void 0},ee[W]=pe),(pe.type!==P||pe.texture!==J)&&(K!==W&&(t.activeTexture(W),K=W),t.bindTexture(P,J||Be[P]),pe.type=P,pe.texture=J)}function N(){let P=ee[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Fe(){try{t.compressedTexImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Qe(){try{t.compressedTexImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function mt(){try{t.texSubImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function _e(){try{t.texSubImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Et(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function Le(){try{t.texStorage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function b(){try{t.texStorage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function S(){try{t.texImage2D(...arguments)}catch(P){Xe("WebGLState:",P)}}function O(){try{t.texImage3D(...arguments)}catch(P){Xe("WebGLState:",P)}}function te(P){return f[P]!==void 0?f[P]:t.getParameter(P)}function j(P,J){f[P]!==J&&(t.pixelStorei(P,J),f[P]=J)}function ue(P){q.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function fe(P){ye.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ye.copy(P))}function Y(P,J){let W=c.get(J);W===void 0&&(W=new WeakMap,c.set(J,W));let pe=W.get(P);pe===void 0&&(pe=t.getUniformBlockIndex(J,P.name),t.uniformBlockBinding(J,pe,pe),W.set(P,pe))}function Z(P,J,W){let oe=c.get(J).get(P);l[oe]!==W&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,W),l[oe]=W)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,ee={},h={},l={},p=new WeakMap,_=[],M=null,g=!1,d=null,m=null,y=null,x=null,A=null,T=null,v=null,w=new et(0,0,0),U=0,C=!1,R=null,k=null,X=null,L=null,z=null,q.set(0,0,t.canvas.width,t.canvas.height),ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Se,disable:ke,bindFramebuffer:gt,drawBuffers:Ve,useProgram:Ye,setBlending:le,setMaterial:ae,setFlipSided:we,setCullFace:ce,setLineWidth:qe,setPolygonOffset:Ie,setScissorTest:tt,activeTexture:nt,bindTexture:st,unbindTexture:N,compressedTexImage2D:Fe,compressedTexImage3D:Qe,texImage2D:S,texImage3D:O,pixelStorei:j,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Le,texStorage3D:b,texSubImage2D:mt,texSubImage3D:_e,compressedTexSubImage2D:Et,compressedTexSubImage3D:De,scissor:ue,viewport:fe,reset:he}}function FC(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,f=new Set,h,p=new WeakMap,_=new Set,M=new FinalizationRegistry(b=>_.delete(b)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(b,S){return g?new OffscreenCanvas(b,S):al("canvas")}function m(b,S,O){let te=1,j=Le(b);if((j.width>O||j.height>O)&&(te=O/Math.max(j.width,j.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ue=Math.floor(te*j.width),fe=Math.floor(te*j.height);h===void 0&&(h=d(ue,fe));let Y=S?d(ue,fe):h;return Y.width=ue,Y.height=fe,Y.getContext("2d").drawImage(b,0,0,ue,fe),Ge("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+fe+")."),Y}else return"data"in b&&Ge("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function y(b){return b.generateMipmaps}function x(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(b,S,O,te,j,ue=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe;te&&(fe=e.get("EXT_texture_norm16"),fe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===t.RED&&(O===t.FLOAT&&(Y=t.R32F),O===t.HALF_FLOAT&&(Y=t.R16F),O===t.UNSIGNED_BYTE&&(Y=t.R8),O===t.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),O===t.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.R8UI),O===t.UNSIGNED_SHORT&&(Y=t.R16UI),O===t.UNSIGNED_INT&&(Y=t.R32UI),O===t.BYTE&&(Y=t.R8I),O===t.SHORT&&(Y=t.R16I),O===t.INT&&(Y=t.R32I)),S===t.RG&&(O===t.FLOAT&&(Y=t.RG32F),O===t.HALF_FLOAT&&(Y=t.RG16F),O===t.UNSIGNED_BYTE&&(Y=t.RG8),O===t.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),O===t.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RG8UI),O===t.UNSIGNED_SHORT&&(Y=t.RG16UI),O===t.UNSIGNED_INT&&(Y=t.RG32UI),O===t.BYTE&&(Y=t.RG8I),O===t.SHORT&&(Y=t.RG16I),O===t.INT&&(Y=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),O===t.UNSIGNED_INT&&(Y=t.RGB32UI),O===t.BYTE&&(Y=t.RGB8I),O===t.SHORT&&(Y=t.RGB16I),O===t.INT&&(Y=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),O===t.UNSIGNED_INT&&(Y=t.RGBA32UI),O===t.BYTE&&(Y=t.RGBA8I),O===t.SHORT&&(Y=t.RGBA16I),O===t.INT&&(Y=t.RGBA32I)),S===t.RGB&&(O===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),O===t.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),S===t.RGBA){let Z=ue?ol:lt.getTransfer(j);O===t.FLOAT&&(Y=t.RGBA32F),O===t.HALF_FLOAT&&(Y=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Y=Z===vt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),O===t.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(b,S){let O;return b?S===null||S===wi||S===Rs?O=t.DEPTH24_STENCIL8:S===Ti?O=t.DEPTH32F_STENCIL8:S===Yo&&(O=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===Rs?O=t.DEPTH_COMPONENT24:S===Ti?O=t.DEPTH_COMPONENT32F:S===Yo&&(O=t.DEPTH_COMPONENT16),O}function w(b,S){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function U(b){let S=new WeakRef(b);i.get(b).__ref=S,_.add(S),M.register(b,S,S)}function C(b){let S=i.get(b).__ref;S!==void 0&&(_.delete(S),M.unregister(S))}function R(b){X(b.target)}function k(b){L(b.target)}function X(b){b.removeEventListener("dispose",R),C(b),$(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function L(b){b.removeEventListener("dispose",k),C(b),ne(b)}function z(){for(let b of _){let S=b.deref();S!==void 0&&(S.isRenderTarget===!0?L(S):X(S))}_.clear(),f.clear()}function $(b){let S=i.get(b);if(S.__webglInit===void 0)return;let O=b.source,te=p.get(O);if(te){let j=te[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&V(b),Object.keys(te).length===0&&p.delete(O)}i.remove(b)}function V(b){let S=i.get(b);t.deleteTexture(S.__webglTexture);let O=b.source,te=p.get(O);delete te[S.__cacheKey],o.memory.textures--}function ne(b){let S=i.get(b);S.__depthDisposeCallback&&S.__depthDisposeCallback();let O=b.depthTexture;if(O&&O.renderTarget===b&&X(O),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ue=0;ue<S.__webglFramebuffer[j].length;ue++)t.deleteFramebuffer(S.__webglFramebuffer[j][ue]);else t.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)t.deleteFramebuffer(S.__webglFramebuffer[j]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let te=b.textures;for(let j=0,ue=te.length;j<ue;j++){let fe=i.get(te[j]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(te[j])}i.remove(b)}let G=0;function K(){G=0}function ee(){return G}function be(b){G=b}function Oe(){let b=G;return b>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,b}function q(b){let S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.mipmapsAutoUpdate),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function ye(b,S){let O=i.get(b);if(b.isVideoTexture&&Et(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let te=b.image;if(te===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,b,S);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Ae(b,S){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ae(O,b,S);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function Be(b,S){let O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ae(O,b,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function Se(b,S){let O=i.get(b);if(b.version>0&&O.__version!==b.version){we(O,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}let ke={[Oi]:t.REPEAT,[ii]:t.CLAMP_TO_EDGE,[Yu]:t.MIRRORED_REPEAT},gt={[tn]:t.NEAREST,[rx]:t.NEAREST_MIPMAP_NEAREST,[Rl]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Th]:t.LINEAR_MIPMAP_NEAREST,[Ei]:t.LINEAR_MIPMAP_LINEAR},Ve={[lx]:t.NEVER,[Wm]:t.ALWAYS,[cx]:t.LESS,[Hm]:t.LEQUAL,[ux]:t.EQUAL,[Gm]:t.GEQUAL,[hx]:t.GREATER,[dx]:t.NOTEQUAL};function Ye(b,S){if(S.type===Ti&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===Th||S.magFilter===Rl||S.magFilter===Ei||S.minFilter===cn||S.minFilter===Th||S.minFilter===Rl||S.minFilter===Ei)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ke[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ke[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ke[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,gt[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,gt[S.minFilter]),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==Rl&&S.minFilter!==Ei||S.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(b,S){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",R),U(S));let te=S.source,j=p.get(te);j===void 0&&(j={},p.set(te,j));let ue=q(S);if(ue!==b.__cacheKey){j[ue]===void 0&&(j[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[ue].usedTimes++;let fe=j[b.__cacheKey];fe!==void 0&&(j[b.__cacheKey].usedTimes--,fe.usedTimes===0&&V(S)),b.__cacheKey=ue,b.__webglTexture=j[ue].texture}return O}function Q(b,S,O){return Math.floor(Math.floor(b/O)/S)}function le(b,S,O,te){let ue=b.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,O,te,S.data);else{ue.sort((P,J)=>P.start-J.start);let fe=0;for(let P=1;P<ue.length;P++){let J=ue[fe],W=ue[P],pe=J.start+J.count,oe=Q(W.start,S.width,4),me=Q(J.start,S.width,4);W.start<=pe+1&&oe===me&&Q(W.start+W.count-1,S.width,4)===oe?J.count=Math.max(J.count,W.start+W.count-J.start):(++fe,ue[fe]=W)}ue.length=fe+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let P=0,J=ue.length;P<J;P++){let W=ue[P],pe=Math.floor(W.start/4),oe=Math.ceil(W.count/4),me=pe%S.width,Ue=Math.floor(pe/S.width),$e=oe,re=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ue),n.texSubImage2D(t.TEXTURE_2D,0,me,Ue,$e,re,O,te,S.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function ae(b,S,O){let te=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=t.TEXTURE_3D);let j=Ke(b,S),ue=S.source;n.bindTexture(te,b.__webglTexture,t.TEXTURE0+O);let fe=i.get(ue);if(ue.version!==fe.__version||j===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=lt.getPrimaries(lt.workingColorSpace),He=S.colorSpace===hr?null:lt.getPrimaries(S.colorSpace),We=S.colorSpace===hr||re===He?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=m(S.image,!1,r.maxTextureSize);Z=De(S,Z);let he=s.convert(S.format,S.colorSpace),P=s.convert(S.type),J=T(S.internalFormat,he,P,S.normalized,S.colorSpace,S.isVideoTexture);Ye(te,S);let W,pe=S.mipmaps,oe=S.isVideoTexture!==!0,me=fe.__version===void 0||j===!0,Ue=ue.dataReady,$e=w(S,Z);if(S.isDepthTexture)J=v(S.format===ur,S.type),me&&(oe?n.texStorage2D(t.TEXTURE_2D,1,J,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,J,Z.width,Z.height,0,he,P,null));else if(S.isDataTexture)if(pe.length>0){oe&&me&&n.texStorage2D(t.TEXTURE_2D,$e,J,pe[0].width,pe[0].height);for(let re=0,He=pe.length;re<He;re++)W=pe[re],oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,W.width,W.height,he,P,W.data):n.texImage2D(t.TEXTURE_2D,re,J,W.width,W.height,0,he,P,W.data);S.generateMipmaps=!1}else oe?(me&&n.texStorage2D(t.TEXTURE_2D,$e,J,Z.width,Z.height),Ue&&le(S,Z,he,P)):n.texImage2D(t.TEXTURE_2D,0,J,Z.width,Z.height,0,he,P,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){oe&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,J,pe[0].width,pe[0].height,Z.depth);for(let re=0,He=pe.length;re<He;re++)if(W=pe[re],S.format!==bi)if(he!==null)if(oe){if(Ue)if(S.layerUpdates.size>0){let We=jm(W.width,W.height,S.format,S.type);for(let Ee of S.layerUpdates){let pt=W.data.subarray(Ee*We/W.data.BYTES_PER_ELEMENT,(Ee+1)*We/W.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ee,W.width,W.height,1,he,pt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,Z.depth,he,W.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,J,W.width,W.height,Z.depth,0,W.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,W.width,W.height,Z.depth,he,P,W.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,J,W.width,W.height,Z.depth,0,he,P,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{oe&&me&&n.texStorage2D(t.TEXTURE_2D,$e,J,pe[0].width,pe[0].height);for(let re=0,He=pe.length;re<He;re++)W=pe[re],S.format!==bi?he!==null?oe?Ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,W.width,W.height,he,W.data):n.compressedTexImage2D(t.TEXTURE_2D,re,J,W.width,W.height,0,W.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,W.width,W.height,he,P,W.data):n.texImage2D(t.TEXTURE_2D,re,J,W.width,W.height,0,he,P,W.data)}else if(S.isDataArrayTexture)if(oe){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,J,Z.width,Z.height,Z.depth),Ue)if(S.layerUpdates.size>0){let re=jm(Z.width,Z.height,S.format,S.type);for(let He of S.layerUpdates){let We=Z.data.subarray(He*re/Z.data.BYTES_PER_ELEMENT,(He+1)*re/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,He,Z.width,Z.height,1,he,P,We)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,P,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,he,P,Z.data);else if(S.isData3DTexture)oe?(me&&n.texStorage3D(t.TEXTURE_3D,$e,J,Z.width,Z.height,Z.depth),Ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,P,Z.data)):n.texImage3D(t.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,he,P,Z.data);else if(S.isFramebufferTexture){if(me)if(oe)n.texStorage2D(t.TEXTURE_2D,$e,J,Z.width,Z.height);else{let re=Z.width,He=Z.height;for(let We=0;We<$e;We++)n.texImage2D(t.TEXTURE_2D,We,J,re,He,0,he,P,null),re>>=1,He>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),f.add(S),re.onpaint=He=>{let We=He.changedElements;for(let Ee of f)We.includes(Ee.image)&&(Ee.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{let We=t.RGBA,Ee=t.RGBA,pt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,We,Ee,pt,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(pe.length>0){if(oe&&me){let re=Le(pe[0]);n.texStorage2D(t.TEXTURE_2D,$e,J,re.width,re.height)}for(let re=0,He=pe.length;re<He;re++)W=pe[re],oe?Ue&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,he,P,W):n.texImage2D(t.TEXTURE_2D,re,J,he,P,W);S.generateMipmaps=!1}else if(oe){if(me){let re=Le(Z);n.texStorage2D(t.TEXTURE_2D,$e,J,re.width,re.height)}Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,P,Z)}else n.texImage2D(t.TEXTURE_2D,0,J,he,P,Z);y(S)&&S.mipmapsAutoUpdate===!0&&x(te),fe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function we(b,S,O){if(S.image.length!==6)return;let te=Ke(b,S),j=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+O);let ue=i.get(j);if(j.version!==ue.__version||te===!0){n.activeTexture(t.TEXTURE0+O);let fe=lt.getPrimaries(lt.workingColorSpace),Y=S.colorSpace===hr?null:lt.getPrimaries(S.colorSpace),Z=S.colorSpace===hr||fe===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=S.isCompressedTexture||S.image[0].isCompressedTexture,P=S.image[0]&&S.image[0].isDataTexture,J=[];for(let Ee=0;Ee<6;Ee++)!he&&!P?J[Ee]=m(S.image[Ee],!0,r.maxCubemapSize):J[Ee]=P?S.image[Ee].image:S.image[Ee],J[Ee]=De(S,J[Ee]);let W=J[0],pe=s.convert(S.format,S.colorSpace),oe=s.convert(S.type),me=T(S.internalFormat,pe,oe,S.normalized,S.colorSpace),Ue=S.isVideoTexture!==!0,$e=ue.__version===void 0||te===!0,re=j.dataReady,He=w(S,W);Ye(t.TEXTURE_CUBE_MAP,S);let We;if(S.isDepthTexture){if(me=v(S.format===ur,S.type),$e)if(Ue)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,W.width,W.height);else for(let Ee=0;Ee<6;Ee++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,W.width,W.height,0,pe,oe,null)}else if(he){Ue&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,He,me,W.width,W.height);for(let Ee=0;Ee<6;Ee++){We=J[Ee].mipmaps;for(let pt=0;pt<We.length;pt++){let kt=We[pt];S.format!==bi?pe!==null?Ue?re&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt,0,0,kt.width,kt.height,pe,kt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt,me,kt.width,kt.height,0,kt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt,0,0,kt.width,kt.height,pe,oe,kt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt,me,kt.width,kt.height,0,pe,oe,kt.data)}}}else{if(We=S.mipmaps,Ue&&$e){We.length>0&&He++;let Ee=Le(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,He,me,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(P){Ue?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,J[Ee].width,J[Ee].height,pe,oe,J[Ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,J[Ee].width,J[Ee].height,0,pe,oe,J[Ee].data);for(let pt=0;pt<We.length;pt++){let si=We[pt].image[Ee].image;Ue?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt+1,0,0,si.width,si.height,pe,oe,si.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt+1,me,si.width,si.height,0,pe,oe,si.data)}}else{Ue?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,pe,oe,J[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,me,pe,oe,J[Ee]);for(let pt=0;pt<We.length;pt++){let kt=We[pt];Ue?re&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt+1,0,0,pe,oe,kt.image[Ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,pt+1,me,pe,oe,kt.image[Ee])}}}y(S)&&S.mipmapsAutoUpdate===!0&&x(t.TEXTURE_CUBE_MAP),ue.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ce(b,S,O,te,j,ue){let fe=s.convert(O.format,O.colorSpace),Y=s.convert(O.type),Z=T(O.internalFormat,fe,Y,O.normalized,O.colorSpace),he=i.get(S),P=i.get(O);if(P.__renderTarget=S,!he.__hasExternalTextures){let J=Math.max(1,S.width>>ue),W=Math.max(1,S.height>>ue);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,ue,Z,J,W,S.depth,0,fe,Y,null):n.texImage2D(j,ue,Z,J,W,0,fe,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,j,P.__webglTexture,0,mt(S)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,j,P.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(b,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer){let te=S.depthTexture,j=te&&te.isDepthTexture?te.type:null,ue=v(S.stencilBuffer,j),fe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(S),ue,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(S),ue,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ue,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,b)}else{let te=S.textures;for(let j=0;j<te.length;j++){let ue=te[j],fe=s.convert(ue.format,ue.colorSpace),Y=s.convert(ue.type),Z=T(ue.internalFormat,fe,Y,ue.normalized,ue.colorSpace);_e(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,mt(S),Z,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,mt(S),Z,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Z,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(b,S,O){let te=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let ue=te?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||ue.width!==S.width||ue.height!==S.height)&&(ue.width=S.width,ue.height=S.height,S.depthTexture.needsUpdate=!0),te?Se(S.depthTexture,0):ye(S.depthTexture,0);let fe=j.__webglTexture,Y=mt(S),Z=te?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,he=S.depthTexture.format===ur?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ar)_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,Z,fe,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,he,Z,fe,0);else if(S.depthTexture.format===ur)_e(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,Z,fe,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,he,Z,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(b){let S=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){let te=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),te){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,te.removeEventListener("dispose",j)};te.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=te}if(b.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let te=0;te<6;te++)Ie(S.__webglFramebuffer[te],b,te);else b.texture.mipmaps.length>0?Ie(S.__webglFramebuffer[0],b,0):Ie(S.__webglFramebuffer,b,0);else if(O){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]===void 0)S.__webglDepthbuffer[te]=t.createRenderbuffer(),qe(S.__webglDepthbuffer[te],b,!1);else{let j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ue)}}else if(b.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),qe(S.__webglDepthbuffer,b,!1);else{let j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,ue)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(b,S,O){let te=i.get(b);S!==void 0&&ce(te.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&tt(b)}function st(b){let S=b.texture,O=i.get(b),te=i.get(S);b.addEventListener("dispose",k),U(b);let j=b.textures,ue=b.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=S.version,o.memory.textures++),ue){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<S.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=t.createFramebuffer()}else O.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(S.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)O.__webglFramebuffer[Y]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(fe)for(let Y=0,Z=j.length;Y<Z;Y++){let he=i.get(j[Y]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&_e(b)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let Z=j[Y];O.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);let he=s.convert(Z.format,Z.colorSpace),P=s.convert(Z.type),J=T(Z.internalFormat,he,P,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),W=mt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,J,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)ce(O.__webglFramebuffer[Y][Z],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else ce(O.__webglFramebuffer[Y],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(S)?x(t.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(fe){for(let Y=0,Z=j.length;Y<Z;Y++){let he=j[Y],P=i.get(he),J=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,P.__webglTexture),Ye(J,he),ce(O.__webglFramebuffer,b,he,t.COLOR_ATTACHMENT0+Y,J,0),y(he)&&x(J)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,te.__webglTexture),Ye(Y,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)ce(O.__webglFramebuffer[Z],b,S,t.COLOR_ATTACHMENT0,Y,Z);else ce(O.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,Y,0);y(S)?x(Y):S.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}b.depthBuffer&&tt(b)}function N(b){let S=b.textures;for(let O=0,te=S.length;O<te;O++){let j=S[O];if(y(j)&&j.mipmapsAutoUpdate===!0){let ue=A(b),fe=i.get(j).__webglTexture;n.bindTexture(ue,fe),x(ue),n.unbindTexture()}}}let Fe=[];function Qe(b){if(b.samples>0){if(_e(b)===!1){let S=b.textures,O=b.width,te=b.height,j=t.COLOR_BUFFER_BIT,ue=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(b),Y=S.length>1;if(Y)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<S.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let P=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,P,0)}t.blitFramebuffer(0,0,O,te,0,0,O,te,j,t.NEAREST),l===!0&&(Fe.length=0,Fe.push(t.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Fe.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let P=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,P,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let S=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function mt(b){return Math.min(r.maxSamples,b.samples)}function _e(b){let S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Et(b){let S=o.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function De(b,S){let O=b.colorSpace,te=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==sl&&O!==hr&&(lt.getTransfer(O)===vt?(te!==bi||j!==Un)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",O)),S}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=K,this.getTextureUnits=ee,this.setTextureUnits=be,this.setTexture2D=ye,this.setTexture2DArray=Ae,this.setTexture3D=Be,this.setTextureCube=Se,this.rebindTextures=nt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=_e,this.dispose=z}function OC(t,e){function n(i,r=hr){let s,o=lt.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===bh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Om)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bm)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Um)return t.BYTE;if(i===Fm)return t.SHORT;if(i===Yo)return t.UNSIGNED_SHORT;if(i===Ah)return t.INT;if(i===wi)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===zm)return t.ALPHA;if(i===km)return t.RGB;if(i===bi)return t.RGBA;if(i===ar)return t.DEPTH_COMPONENT;if(i===ur)return t.DEPTH_STENCIL;if(i===Vm)return t.RED;if(i===Rh)return t.RED_INTEGER;if(i===Kr)return t.RG;if(i===Ph)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===Pl||i===Il||i===Ll||i===Nl)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lh||i===Nh||i===Dh||i===Uh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fh||i===Oh||i===Bh||i===zh||i===kh||i===Dl||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fh||i===Oh)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zh)return s.COMPRESSED_R11_EAC;if(i===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Dl)return s.COMPRESSED_RG11_EAC;if(i===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hh||i===Gh||i===Wh||i===Xh||i===qh||i===Yh||i===$h||i===Zh||i===Jh||i===Kh||i===jh||i===Qh||i===ed||i===td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$h)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ed)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nd||i===id||i===rd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===nd)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===id)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sd||i===od||i===Ul||i===ad)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===od)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var BC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new pl(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new zi({vertexShader:BC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $t(new Ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fg=class extends Bi{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null,M=typeof XRWebGLBinding<"u",g=new dg,d={},m=n.getContextAttributes(),y=null,x=null,A=[],T=[],v=new ve,w=null,U=null,C=new En;C.viewport=new Pt;let R=new En;R.viewport=new Pt;let k=[C,R],X=new xh,L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ye=A[q];return ye===void 0&&(ye=new Po,A[q]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(q){let ye=A[q];return ye===void 0&&(ye=new Po,A[q]=ye),ye.getGripSpace()},this.getHand=function(q){let ye=A[q];return ye===void 0&&(ye=new Po,A[q]=ye),ye.getHandSpace()};function $(q){let ye=T.indexOf(q.inputSource);if(ye===-1)return;let Ae=A[ye];Ae!==void 0&&(Ae.update(q.inputSource,q.frame,c||o),Ae.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",ne);for(let q=0;q<A.length;q++){let ye=T[q];ye!==null&&(T[q]=null,A[q].disconnect(ye))}L=null,z=null,g.reset();for(let q in d)delete d[q];if(e.setRenderTarget(y),p=null,h=null,f=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),U!==null){let q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",V),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,Se=null;m.depth&&(Se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=m.stencil?ur:ar,Be=m.stencil?Rs:wi);let ke={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(ke),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Wn(h.textureWidth,h.textureHeight,{format:bi,type:Un,depthTexture:new cr(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Wn(p.framebufferWidth,p.framebufferHeight,{format:bi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(q){for(let ye=0;ye<q.removed.length;ye++){let Ae=q.removed[ye],Be=T.indexOf(Ae);Be>=0&&(T[Be]=null,A[Be].disconnect(Ae))}for(let ye=0;ye<q.added.length;ye++){let Ae=q.added[ye],Be=T.indexOf(Ae);if(Be===-1){for(let ke=0;ke<A.length;ke++)if(ke>=T.length){T.push(Ae),Be=ke;break}else if(T[ke]===null){T[ke]=Ae,Be=ke;break}if(Be===-1)break}let Se=A[Be];Se&&Se.connect(Ae)}}function G(q,ye){ye===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ye.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ye=q.near,Ae=q.far;g.texture!==null&&(g.depthNear>0&&(ye=g.depthNear),g.depthFar>0&&(Ae=g.depthFar)),X.near=R.near=C.near=ye,X.far=R.far=C.far=Ae,(L!==X.near||z!==X.far)&&(r.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,z=X.far),X.layers.mask=q.layers.mask|6,C.layers.mask=X.layers.mask&-5,R.layers.mask=X.layers.mask&-3;let Be=q.parent,Se=X.cameras;G(X,Be);for(let ke=0;ke<Se.length;ke++)G(Se[ke],Be);X.projectionMatrix.copy(C.projectionMatrix),X.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),K(q,X,Be)};function K(q,ye,Ae){Ae===null?q.matrix.copy(ye.matrixWorld):(q.matrix.copy(Ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(ye.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ye.projectionMatrix),q.projectionMatrixInverse.copy(ye.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(q){return d[q]};let ee=null;function be(q,ye){if(u=ye.getViewerPose(c||o),_=ye,u!==null){let Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Be=!1;Ae.length!==X.cameras.length&&(X.cameras.length=0,Be=!0);for(let Ve=0;Ve<Ae.length;Ve++){let Ye=Ae[Ve],Ke=null;if(p!==null)Ke=p.getViewport(Ye);else{let le=f.getViewSubImage(h,Ye);Ke=le.viewport,Ve===0&&(e.setRenderTargetTextures(x,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(x))}let Q=k[Ve];Q===void 0&&(Q=new En,Q.layers.enable(Ve),Q.viewport=new Pt,k[Ve]=Q),Q.matrix.fromArray(Ye.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ye.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ve===0&&(X.matrix.copy(Q.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Be===!0&&X.cameras.push(Q)}let Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Ve=f.getDepthInformation(Ae[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,r.renderState)}if(Se&&Se.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let Ve=0;Ve<Ae.length;Ve++){let Ye=Ae[Ve].camera;if(Ye){let Ke=d[Ye];Ke||(Ke=new pl,d[Ye]=Ke);let Q=f.getCameraImage(Ye);Ke.sourceTexture=Q}}}}for(let Ae=0;Ae<A.length;Ae++){let Be=T[Ae],Se=A[Ae];Be!==null&&Se!==void 0&&Se.update(Be,ye,c||o)}ee&&ee(q,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),_=null}let Oe=new $x;Oe.setAnimationLoop(be),this.setAnimationLoop=function(q){ee=q},this.dispose=function(){}}},kC=new Mt,rS=new Ze;rS.set(-1,0,0,0,1,0,0,0,1);function VC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Zm(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,m,y,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,m,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===bn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===bn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=e.get(d),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(kC.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rS),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=y*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,m){g.ior.value=d.ior,d.diffuseRoughness>0&&(g.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HC(t,e,n,i){let r={},s={};function o(m,y){let x=y.program;i.uniformBlockBinding(m,x,r[m.id])}function a(m,y){let x=r[m.id];x===void 0&&(_(m),x=l(m),r[m.id]=x,m.addEventListener("dispose",g));let A=y.program;i.updateUBOMapping(m,A);let T=e.render.frame;s[m.id]!==T&&(c(m),s[m.id]=T)}function l(m){let y=t.createBuffer(),x=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,x,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(m){let y=r[m.id],x=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,v=x.length;T<v;T++){let w=x[T];if(Array.isArray(w))for(let U=0,C=w.length;U<C;U++)u(w[U],T,U,A);else u(w,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(m,y,x,A){if(h(m,y,x,A)===!0){let T=m.__offset,v=m.value;if(Array.isArray(v)){let w=0;for(let U=0;U<v.length;U++){let C=v[U],R=M(C,!0);f(C,m.__data,w),w+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,m.__data)}}function f(m,y,x){typeof m=="number"||typeof m=="boolean"?y[x]=m:m.isMatrix3?(y[x]=m.elements[0],y[x+1]=m.elements[1],y[x+2]=m.elements[2],y[x+3]=0,y[x+4]=m.elements[3],y[x+5]=m.elements[4],y[x+6]=m.elements[5],y[x+7]=0,y[x+8]=m.elements[6],y[x+9]=m.elements[7],y[x+10]=m.elements[8],y[x+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-x),x):m.toArray(y,x)}function h(m,y,x,A){let T=m.value,v=y+"_"+x;if(Array.isArray(T)){A[v]===void 0&&(A[v]=[]);let w=A[v],U=!1;for(let C=0;C<T.length;C++)p(T[C],w,C)===!0&&(U=!0);return U}return p(T,A,v)}function p(m,y,x){if(y[x]===void 0)return typeof m=="number"||typeof m=="boolean"?y[x]=m:ArrayBuffer.isView(m)?y[x]=m.slice():y[x]=m.clone(),!0;{let A=y[x];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function _(m){let y=m.uniforms,x=0,A=16;for(let v=0,w=y.length;v<w;v++){let U=Array.isArray(y[v])?y[v]:[y[v]];for(let C=0,R=U.length;C<R;C++){let k=U[C],X=Array.isArray(k.value)?k.value:[k.value],L=Array.isArray(y[v])||Array.isArray(k.value),z=x;for(let V=0,ne=X.length;V<ne;V++){let G=X[V],K=M(G,L),ee=x%A,be=ee%K.boundary,Oe=ee+be;x+=be,Oe!==0&&A-Oe<K.storage&&(x+=A-Oe),V===0&&(z=x),x+=K.storage}let $=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new $((x-z)/Float32Array.BYTES_PER_ELEMENT),k.__offset=z}}let T=x%A;return T>0&&(x+=A-T),m.__size=x,m.__cache={},this}function M(m,y){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(m){let y=m.target;y.removeEventListener("dispose",g),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(let m in r)t.deleteBuffer(r[m]);r={},s={}}return{bind:o,update:a,dispose:d}}var GC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function WC(){return Vi===null&&(Vi=new Do(GC,16,16,Kr,Ai),Vi.name="DFG_LUT",Vi.minFilter=cn,Vi.magFilter=cn,Vi.wrapS=ii,Vi.wrapT=ii,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var hd=class{constructor(e={}){let{canvas:n=px(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Un}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let M=p,g=new Set([Ih,Ph,Rh]),d=new Set([Un,wi,Yo,Rs,bh,Ch]),m=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},A=null,T=null,v=[],w=[],U=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,R=!1,k=null,X=null,L=null,z=null;this._outputColorSpace=ln;let $=0,V=0,ne=null,G=-1,K=null,ee=new Pt,be=new Pt,Oe=null,q=new et(0),ye=0,Ae=n.width,Be=n.height,Se=1,ke=null,gt=null,Ve=new Pt(0,0,Ae,Be),Ye=new Pt(0,0,Ae,Be),Ke=!1,Q=new Wr,le=new Qu,ae=!1,we=!1,ce=new Mt,qe=new D,Ie=new Pt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function st(){return ne===null?Se:1}let N=i;function Fe(E,I){return n.getContext(E,I)}let Qe,mt,_e,Et,De,Le,b,S,O,te,j,ue,fe,Y,Z,he,P,J,W,pe,oe,me,Ue;try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mh}`),n.addEventListener("webglcontextlost",He,!1),n.addEventListener("webglcontextrestored",We,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),N===null){let I="webgl2";if(N=Fe(I,E),N===null)throw Fe(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(E){throw n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),Xe("WebGLRenderer: "+E.message),E}function $e(){Qe=new tb(N),Qe.init(),oe=new OC(N,Qe),mt=new WA(N,Qe,e,oe),_e=new UC(N,Qe),mt.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),X=N.createFramebuffer(),L=N.createFramebuffer(),z=N.createFramebuffer(),Et=new rb(N),De=new SC,Le=new FC(N,Qe,_e,De,mt,oe,Et),b=new eb(C),S=new ow(N),me=new HA(N,S),O=new nb(N,S,Et,me),te=new ob(N,O,S,me,Et),J=new sb(N,mt,Le),Z=new XA(De),j=new xC(C,b,Qe,mt,me,Z),ue=new VC(C,De),fe=new EC,Y=new RC(Qe),P=new VA(C,b,_e,te,_,l),he=new DC(C,te,mt),Ue=new HC(N,Et,mt,_e),W=new GA(N,Qe,Et),pe=new ib(N,Qe,Et),Et.programs=j.programs,C.capabilities=mt,C.extensions=Qe,C.properties=De,C.renderLists=fe,C.shadowMap=he,C.state=_e,C.info=Et}M!==Un&&(U=new lb(M,n.width,n.height,a,r,s));let re=new fg(C,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(Ae,Be,!1))},this.getSize=function(E){return E.set(Ae,Be)},this.setSize=function(E,I,H=!0){if(re.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,Be=I,n.width=Math.floor(E*Se),n.height=Math.floor(I*Se),H===!0&&(n.style.width=E+"px",n.style.height=I+"px"),U!==null&&U.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Ae*Se,Be*Se).floor()},this.setDrawingBufferSize=function(E,I,H){Ae=E,Be=I,Se=H,n.width=Math.floor(E*H),n.height=Math.floor(I*H),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===Un){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ee)},this.getViewport=function(E){return E.copy(Ve)},this.setViewport=function(E,I,H,F){E.isVector4?Ve.set(E.x,E.y,E.z,E.w):Ve.set(E,I,H,F),_e.viewport(ee.copy(Ve).multiplyScalar(st()).round())},this.getScissor=function(E){return E.copy(Ye)},this.setScissor=function(E,I,H,F){E.isVector4?Ye.set(E.x,E.y,E.z,E.w):Ye.set(E,I,H,F),_e.scissor(be.copy(Ye).multiplyScalar(st()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(E){_e.setScissorTest(Ke=E)},this.setOpaqueSort=function(E){ke=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,H=!0){let F=0;if(E){let B=!1;if(ne!==null){let ge=ne.texture.format;B=g.has(ge)}if(B){let ge=ne.texture.type,Ce=d.has(ge),xe=P.getClearColor(),Me=P.getClearAlpha(),Ne=xe.r,ze=xe.g,Je=xe.b;Ce?(m[0]=Ne,m[1]=ze,m[2]=Je,m[3]=Me,N.clearBufferuiv(N.COLOR,0,m)):(y[0]=Ne,y[1]=ze,y[2]=Je,y[3]=Me,N.clearBufferiv(N.COLOR,0,y))}else F|=N.COLOR_BUFFER_BIT}I&&(F|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&N.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),k=E},this.dispose=function(){n.removeEventListener("webglcontextlost",He,!1),n.removeEventListener("webglcontextrestored",We,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),P.dispose(),fe.dispose(),Y.dispose(),Le.dispose(),De.dispose(),b.dispose(),te.dispose(),O.dispose(),me.dispose(),Ue.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ls),re.removeEventListener("sessionend",Ns),ai.stop()};function He(E){E.preventDefault(),qm("WebGLRenderer: Context Lost."),R=!0}function We(){qm("WebGLRenderer: Context Restored."),R=!1;let E=Et.autoReset,I=he.enabled,H=he.autoUpdate,F=he.needsUpdate,B=he.type;$e(),Et.autoReset=E,he.enabled=I,he.autoUpdate=H,he.needsUpdate=F,he.type=B}function Ee(E){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){let I=E.target;I.removeEventListener("dispose",pt),kt(I)}function kt(E){si(E),De.remove(E)}function si(E){let I=De.get(E).programs;I!==void 0&&(I.forEach(function(H){j.releaseProgram(H)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,H,F,B,ge){I===null&&(I=tt);let Ce=B.isMesh&&B.matrixWorld.determinantAffine()<0,xe=it(E,I,H,F,B);_e.setMaterial(F,Ce);let Me=H.index,Ne=1;if(F.wireframe===!0){if(Me=O.getWireframeAttribute(H),Me===void 0)return;Ne=2}let ze=H.drawRange,Je=H.attributes.position,de=ze.start*Ne,je=(ze.start+ze.count)*Ne;ge!==null&&(de=Math.max(de,ge.start*Ne),je=Math.min(je,(ge.start+ge.count)*Ne)),Me!==null?(de=Math.max(de,0),je=Math.min(je,Me.count)):Je!=null&&(de=Math.max(de,0),je=Math.min(je,Je.count));let It=je-de;if(It<0||It===1/0)return;me.setup(B,F,xe,H,Me);let _t,yt=W;if(Me!==null&&(_t=S.get(Me),yt=pe,yt.setIndex(_t)),B.isMesh)F.wireframe===!0?(_e.setLineWidth(F.wireframeLinewidth*st()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(B.isLine){let Lt=F.linewidth;Lt===void 0&&(Lt=1),_e.setLineWidth(Lt*st()),B.isLineSegments?yt.setMode(N.LINES):B.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else B.isPoints?yt.setMode(N.POINTS):B.isSprite&&yt.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Lt=B._multiDrawStarts,Re=B._multiDrawCounts,Xt=B._multiDrawCount,ct=Me?S.get(Me).bytesPerElement:1,ci=De.get(F).currentProgram.getUniforms();for(let un=0;un<Xt;un++)ci.setValue(N,"_gl_DrawID",un),yt.render(Lt[un]/ct,Re[un])}else if(B.isInstancedMesh)yt.renderInstances(de,It,B.count);else if(H.isInstancedBufferGeometry){let Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Re=Math.min(H.instanceCount,Lt);yt.renderInstances(de,It,Re)}else yt.render(de,It)};function oi(E,I,H,F){k!==null&&E.isNodeMaterial&&k.setObject(F,E),ae===!0&&Z.setState(E,H,!1),E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=bn,E.needsUpdate=!0,fr(E,I,F),E.side=Jr,E.needsUpdate=!0,fr(E,I,F),E.side=$n):fr(E,I,F)}this.compile=function(E,I,H=null){H===null&&(H=E),k!==null&&k.renderStart(E,I,H),T=Y.get(H),T.init(I),w.push(T),H.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),we=this.localClippingEnabled,ae=Z.init(this.clippingPlanes,we),ae===!0&&Z.setGlobalState(this.clippingPlanes,I),k!==null&&he.render(T.state.shadowsArray,H,I);let F=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ge=B.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){let xe=ge[Ce];oi(xe,H,I,B),F.add(xe)}else oi(ge,H,I,B),F.add(ge)}),T=w.pop(),k!==null&&k.renderEnd(),F},this.compileAsync=function(E,I,H=null){let F=this.compile(E,I,H);return new Promise(B=>{function ge(){if(F.forEach(function(Ce){let Me=De.get(Ce).currentProgram;(Me===void 0||Me.isReady())&&F.delete(Ce)}),F.size===0){B(E);return}setTimeout(ge,10)}Qe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Qr=null;function Wl(E){Qr&&Qr(E)}function Ls(){ai.stop()}function Ns(){ai.start()}let ai=new $x;ai.setAnimationLoop(Wl),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Qr=E,re.setAnimationLoop(E),E===null?ai.stop():ai.start()},re.addEventListener("sessionstart",Ls),re.addEventListener("sessionend",Ns),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;k!==null&&k.renderStart(E,I);let H=re.enabled===!0&&re.isPresenting===!0,F=U!==null&&(ne===null||H)&&U.begin(C,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(I),I=re.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,I,ne),T=Y.get(E,w.length),T.init(I),T.state.textureUnits=Le.getTextureUnits(),w.push(T),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?le.setFromArrayCamera(I):Q.setFromProjectionMatrix(ce,ri,I.reversedDepth),we=this.localClippingEnabled,ae=Z.init(this.clippingPlanes,we),A=fe.get(E,v.length),A.init(),v.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&jo(Ce,I,-1/0,C.sortObjects)}jo(E,I,0,C.sortObjects),A.finish(),k!==null&&k.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(ke,gt),nt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,nt&&P.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),ae===!0&&Z.beginShadows();let B=T.state.shadowsArray;if(he.render(B,E,I),ae===!0&&Z.endShadows(),(F&&U.hasRenderPass())===!1){let Ce=A.opaque,xe=A.transmissive;if(T.setupLights(),I.isArrayCamera){let Me=I.cameras;if(xe.length>0)for(let Ne=0,ze=Me.length;Ne<ze;Ne++){let Je=Me[Ne];ea(Ce,xe,E,Je)}nt&&P.render(E);for(let Ne=0,ze=Me.length;Ne<ze;Ne++){let Je=Me[Ne];Qo(A,E,Je,Je.viewport)}}else xe.length>0&&ea(Ce,xe,E,I),nt&&P.render(E),Qo(A,E,I)}ne!==null&&V===0&&(Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne)),F&&U.end(C),E.isScene===!0&&E.onAfterRender(C,E,I),me.resetDefaultState(),G=-1,K=null,w.pop(),w.length>0?(T=w[w.length-1],Le.setTextureUnits(T.state.textureUnits),ae===!0&&Z.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,k!==null&&k.renderEnd()};function jo(E,I,H,F){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ce=I.isArrayCamera?le:Q;if(!E.frustumCulled||E.intersectsFrustum(Ce)){F&&Ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);let xe=te.update(E),Me=E.material;Me.visible&&A.push(E,xe,Me,H,Ie.z,null,I)}}else if(E.isMesh||E.isLine||E.isPoints){let Ce=I.isArrayCamera?le:Q;if(!E.frustumCulled||E.intersectsFrustum(Ce)){let xe=te.update(E),Me=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ie.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Me)){let Ne=xe.groups;for(let ze=0,Je=Ne.length;ze<Je;ze++){let de=Ne[ze],je=Me[de.materialIndex];je&&je.visible&&A.push(E,xe,je,H,Ie.z,de,I)}}else Me.visible&&A.push(E,xe,Me,H,Ie.z,null,I)}}}let ge=E.children;for(let Ce=0,xe=ge.length;Ce<xe;Ce++)jo(ge[Ce],I,H,F)}function Qo(E,I,H,F){let{opaque:B,transmissive:ge,transparent:Ce}=E;T.setupLightsView(H),ae===!0&&Z.setGlobalState(C.clippingPlanes,H),F&&_e.viewport(ee.copy(F)),B.length>0&&li(B,I,H),ge.length>0&&li(ge,I,H),Ce.length>0&&li(Ce,I,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ea(E,I,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){let de=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new Wn(1,1,{generateMipmaps:!0,type:de?Ai:Un,minFilter:Ei,samples:Math.max(4,mt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let ge=T.state.transmissionRenderTarget[F.id],Ce=F.viewport||ee;ge.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let xe=C.getRenderTarget(),Me=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(q),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),nt&&P.render(H);let ze=C.toneMapping;C.toneMapping=ki;let Je=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),ae===!0&&Z.setGlobalState(C.clippingPlanes,F),li(E,H,F),Le.updateMultisampleRenderTarget(ge),Le.updateRenderTargetMipmap(ge),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let je=0,It=I.length;je<It;je++){let _t=I[je],{object:yt,geometry:Lt,material:Re,group:Xt}=_t;if(Re.side===$n&&yt.layers.test(F.layers)){let ct=Re.side;Re.side=bn,Re.needsUpdate=!0,ta(yt,H,F,Lt,Re,Xt),Re.side=ct,Re.needsUpdate=!0,de=!0}}de===!0&&(Le.updateMultisampleRenderTarget(ge),Le.updateRenderTargetMipmap(ge))}C.setRenderTarget(xe,Me,Ne),C.setClearColor(q,ye),Je!==void 0&&(F.viewport=Je),C.toneMapping=ze}function li(E,I,H){let F=I.isScene===!0?I.overrideMaterial:null;for(let B=0,ge=E.length;B<ge;B++){let Ce=E[B],{object:xe,geometry:Me,group:Ne}=Ce,ze=Ce.material;ze.allowOverride===!0&&F!==null&&(ze=F),xe.layers.test(H.layers)&&ta(xe,I,H,Me,ze,Ne)}}function ta(E,I,H,F,B,ge){k!==null&&B.isNodeMaterial&&k.setObject(E,B),E.onBeforeRender(C,I,H,F,B,ge),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(C,I,H,F,E,ge),B.transparent===!0&&B.side===$n&&B.forceSinglePass===!1?(B.side=bn,B.needsUpdate=!0,C.renderBufferDirect(H,I,F,B,E,ge),B.side=Jr,B.needsUpdate=!0,C.renderBufferDirect(H,I,F,B,E,ge),B.side=$n):C.renderBufferDirect(H,I,F,B,E,ge),E.onAfterRender(C,I,H,F,B,ge)}function na(E){let I=0;for(let H of E)H.texture!==null&&I++;return I}function fr(E,I,H){I.isScene!==!0&&(I=tt);let F=De.get(E),B=T.state.lights,ge=T.state.shadowsArray,Ce=B.state.version,xe=j.getParameters(E,B.state,ge,I,H,T.state.lightProbeGridArray),Me=j.getProgramCacheKey(xe),Ne=F.programs;F.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,F.fog=I.fog;let ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;F.envMap=b.get(E.envMap||F.environment,ze),F.envMapRotation=F.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",pt),Ne=new Map,F.programs=Ne,F.programVariants=new Map);let Je=Ne.get(Me);if(Je!==void 0){if(F.currentProgram===Je&&F.lightsStateVersion===Ce)return ie(E,xe),Je}else xe.uniforms=j.getUniforms(E),k!==null&&E.isNodeMaterial&&k.build(E,H,xe),E.onBeforeCompile(xe,C),Je=j.acquireProgram(xe,Me),Ne.set(Me,Je),F.uniforms=xe.uniforms;let de=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(de.clippingPlanes=Z.uniform),ie(E,xe),F.needsLights=ut(E),F.lightsStateVersion=Ce,F.needsLights&&(de.ambientLightColor.value=B.state.ambient,de.lightProbe.value=B.state.probe,de.sunLights.value=B.state.sun,de.sunLightShadows.value=B.state.sunShadow,de.directionalLights.value=B.state.directional,de.directionalLightShadows.value=B.state.directionalShadow,de.spotLights.value=B.state.spot,de.spotLightShadows.value=B.state.spotShadow,de.rectAreaLights.value=B.state.rectArea,de.ltc_1.value=B.state.rectAreaLTC1,de.ltc_2.value=B.state.rectAreaLTC2,de.pointLights.value=B.state.point,de.pointLightShadows.value=B.state.pointShadow,de.hemisphereLights.value=B.state.hemi,de.sunShadowMatrix.value=B.state.sunShadowMatrix,de.sunShadowCascade.value=B.state.sunShadowCascade,de.directionalShadowMatrix.value=B.state.directionalShadowMatrix,de.spotLightMatrix.value=B.state.spotLightMatrix,de.spotLightMap.value=B.state.spotLightMap,de.pointShadowMatrix.value=B.state.pointShadowMatrix),F.numLightProbeGrids=na(T.state.lightProbeGridArray),F.currentProgram=Je,F.uniformsList=null,Je}function Xl(E,I,H,F,B){let ge=De.get(E),Ce=ge.currentProgram.id+","+F+","+B,xe=ge.programVariants.get(Ce);return xe===void 0?(xe=fr(E,I,H),ge.programVariants.set(Ce,xe)):(ge.currentProgram=xe,ge.uniformsList=null,ge.outputColorSpace=F,ge.toneMapping=B),xe}function ia(E){if(E.uniformsList===null){let I=E.currentProgram.getUniforms();E.uniformsList=Zo.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function ie(E,I){let H=De.get(E);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function it(E,I,H,F,B){I.isScene!==!0&&(I=tt),Le.resetTextureUnits();let ge=I.fog,Ce=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?I.environment:null,xe=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:lt.workingColorSpace,Me=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Ne=b.get(F.envMap||Ce,Me),ze=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Je=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),de=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,It=!!H.morphAttributes.color,_t=ki;F.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(_t=C.toneMapping);let yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Lt=yt!==void 0?yt.length:0,Re=De.get(F),Xt=T.state.lights;if(ae===!0&&(we===!0||E!==K)){let Nt=E===K&&F.id===G;Z.setState(F,E,Nt)}let ct=!1,ci=!1;F.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==Xt.state.version||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==Ne||F.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Z.numPlanes||Re.numIntersection!==Z.numIntersection)||Re.vertexAlphas!==ze||Re.vertexTangents!==Je||Re.morphTargets!==de||Re.morphNormals!==je||Re.morphColors!==It||Re.morphTargetsCount!==Lt||Re.numLightProbeGrids!==na(T.state.lightProbeGridArray)?ct=!0:(Re.outputColorSpace!==xe||Re.toneMapping!==_t)&&(ci=!0):(ct=!0,Re.__version=F.version);let un=Re.currentProgram;(ct===!0||ci===!0)&&(un=ci===!0?Xl(F,I,B,xe,_t):fr(F,I,B),k&&F.isNodeMaterial&&k.onUpdateProgram(F,un,Re));let ql=!1,pr=!1,es=!1,dt=un.getUniforms(),rn=Re.uniforms;if(_e.useProgram(un.program)&&(ql=!0,pr=!0,es=!0),F.id!==G&&(G=F.id,pr=!0),ql||K!==E){_e.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),dt.setValue(N,"projectionMatrix",E.projectionMatrix),dt.setValue(N,"viewMatrix",E.matrixWorldInverse);let Kt=dt.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,qe.setFromMatrixPosition(E.matrixWorld)),mt.logarithmicDepthBuffer&&dt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&dt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),K!==E&&(K=E,pr=!0,es=!0)}if(Re.needsLights&&(Xt.state.sunShadowMap.length>0&&dt.setValue(N,"sunShadowMap",Xt.state.sunShadowMap,Le),Xt.state.directionalShadowMap.length>0&&dt.setValue(N,"directionalShadowMap",Xt.state.directionalShadowMap,Le),Xt.state.spotShadowMap.length>0&&dt.setValue(N,"spotShadowMap",Xt.state.spotShadowMap,Le),Xt.state.pointShadowMap.length>0&&dt.setValue(N,"pointShadowMap",Xt.state.pointShadowMap,Le)),B.isSkinnedMesh){dt.setOptional(N,B,"bindMatrix"),dt.setOptional(N,B,"bindMatrixInverse");let Nt=B.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),dt.setValue(N,"boneTexture",Nt.boneTexture,Le))}B.isBatchedMesh&&(dt.setOptional(N,B,"batchingTexture"),dt.setValue(N,"batchingTexture",B._matricesTexture,Le),dt.setOptional(N,B,"batchingIdTexture"),dt.setValue(N,"batchingIdTexture",B._indirectTexture,Le),dt.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(N,"batchingColorTexture",B._colorsTexture,Le));let ui=H.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&J.update(B,H,un),(pr||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,dt.setValue(N,"receiveShadow",B.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&I.environment!==null&&(rn.envMapIntensity.value=I.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=WC()),pr){if(dt.setValue(N,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&ht(rn,es),ge&&F.fog===!0&&ue.refreshFogUniforms(rn,ge),ue.refreshMaterialUniforms(rn,F,Se,Be,T.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.numLightProbeGrids>0){let Nt=x,Kt=0;for(let Gi of T.state.lightProbeGridArray)Gi.texture!==null&&(Nt.textures[Kt]=Gi.texture,Nt.min[Kt]=Gi.boundingBox.min,Nt.max[Kt]=Gi.boundingBox.max,Nt.resolution[Kt]=Gi.resolution,Kt++);for(let Gi in Nt)Nt[Gi].length=Kt;rn.probesSH.value=Nt.textures,rn.probesMin.value=Nt.min,rn.probesMax.value=Nt.max,rn.probesResolution.value=Nt.resolution}Zo.upload(N,ia(Re),rn,Le)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Zo.upload(N,ia(Re),rn,Le),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&dt.setValue(N,"center",B.center),dt.setValue(N,"modelViewMatrix",B.modelViewMatrix),dt.setValue(N,"normalMatrix",B.normalMatrix),dt.setValue(N,"modelMatrix",B.matrixWorld),F.uniformsGroups!==void 0){let Nt=F.uniformsGroups;for(let Kt=0,Gi=Nt.length;Kt<Gi;Kt++){let Mg=Nt[Kt];Ue.update(Mg,un),Ue.bind(Mg,un)}}return un}function ht(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function ut(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,I,H){let F=De.get(E);F.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),De.get(E.texture).__webglTexture=I,De.get(E.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){let H=De.get(E);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,H=0){ne=E,$=I,V=H;let F=null,B=!1,ge=!1;if(E){let xe=De.get(E);if(xe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,xe.__webglFramebuffer),ee.copy(E.viewport),be.copy(E.scissor),Oe=E.scissorTest,_e.viewport(ee),_e.scissor(be),_e.setScissorTest(Oe),G=-1;return}else if(xe.__webglFramebuffer===void 0)Le.setupRenderTarget(E);else if(xe.__hasExternalTextures)Le.rebindTextures(E,De.get(E.texture).__webglTexture,De.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ze=E.depthTexture;if(xe.__boundDepthTexture!==ze){if(ze!==null&&De.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(E)}}let Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);let Ne=De.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[I])?F=Ne[I][H]:F=Ne[I],B=!0):E.samples>0&&Le.useMultisampledRTT(E)===!1?F=De.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[H]:F=Ne,ee.copy(E.viewport),be.copy(E.scissor),Oe=E.scissorTest}else ee.copy(Ve).multiplyScalar(Se).floor(),be.copy(Ye).multiplyScalar(Se).floor(),Oe=Ke;if(H!==0&&(F=X),_e.bindFramebuffer(N.FRAMEBUFFER,F)&&_e.drawBuffers(E,F),_e.viewport(ee),_e.scissor(be),_e.setScissorTest(Oe),B){let xe=De.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,H)}else if(ge){let xe=I;for(let Me=0;Me<E.textures.length;Me++){let Ne=De.get(E.textures[Me]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Me,Ne.__webglTexture,H,xe)}}else if(E!==null&&H!==0){let xe=De.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xe.__webglTexture,H)}G=-1};function nn(E){let I=De.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=mt.textureFormatReadable(E.format),I.__typeReadable=mt.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,H,F,B,ge,Ce,xe=0){if(!(E&&E.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce],Array.isArray(Me)&&(Me=Me[0])),Me){_e.bindFramebuffer(N.FRAMEBUFFER,Me);try{let Ne=E.textures[xe],ze=Ne.format,Je=Ne.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let de=nn(Ne);if(de.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(de.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-F&&H>=0&&H<=E.height-B&&N.readPixels(I,H,F,B,oe.convert(ze),oe.convert(Je),ge)}finally{let Ne=ne!==null?De.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,I,H,F,B,ge,Ce,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=De.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Me=Me[Ce],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=E.width-F&&H>=0&&H<=E.height-B){_e.bindFramebuffer(N.FRAMEBUFFER,Me);let Ne=E.textures[xe],ze=Ne.format,Je=Ne.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xe);let de=nn(Ne);if(de.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(de.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(I,H,F,B,oe.convert(ze),oe.convert(Je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let It=ne!==null?De.get(ne).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,It);let _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gx(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(je),N.deleteSync(_t),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,H=0){let F=Math.pow(2,-H),B=Math.floor(E.image.width*F),ge=Math.floor(E.image.height*F),Ce=I!==null?I.x:0,xe=I!==null?I.y:0;Le.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,Ce,xe,B,ge),_e.unbindTexture()},this.copyTextureToTexture=function(E,I,H=null,F=null,B=0,ge=0){let Ce,xe,Me,Ne,ze,Je,de,je,It,_t=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(H!==null)Ce=H.max.x-H.min.x,xe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Ne=H.min.x,ze=H.min.y,Je=H.isBox3?H.min.z:0;else{let dt=Math.pow(2,-B);Ce=Math.floor(_t.width*dt),xe=Math.floor(_t.height*dt),E.isDataArrayTexture?Me=_t.depth:E.isData3DTexture?Me=Math.floor(_t.depth*dt):Me=1,Ne=0,ze=0,Je=0}F!==null?(de=F.x,je=F.y,It=F.z):(de=0,je=0,It=0);let yt=oe.convert(I.format),Lt=oe.convert(I.type),Re;I.isData3DTexture?(Le.setTexture3D(I,0),Re=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Le.setTexture2DArray(I,0),Re=N.TEXTURE_2D_ARRAY):(Le.setTexture2D(I,0),Re=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Xt=_e.getParameter(N.UNPACK_ROW_LENGTH),ct=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),ci=_e.getParameter(N.UNPACK_SKIP_PIXELS),un=_e.getParameter(N.UNPACK_SKIP_ROWS),ql=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,_t.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Ne),_e.pixelStorei(N.UNPACK_SKIP_ROWS,ze),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);let pr=E.isDataArrayTexture||E.isData3DTexture,es=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){let dt=De.get(E),rn=De.get(I),ui=De.get(dt.__renderTarget),Nt=De.get(rn.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,ui.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Kt=0;Kt<Me;Kt++)pr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(E).__webglTexture,B,Je+Kt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.get(I).__webglTexture,ge,It+Kt)),N.blitFramebuffer(Ne,ze,Ne+Ce,ze+xe,de,je,de+Ce,je+xe,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||De.has(E)){let dt=De.get(E),rn=De.get(I);_e.bindFramebuffer(N.READ_FRAMEBUFFER,L),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let ui=0;ui<Me;ui++)pr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,dt.__webglTexture,B,Je+ui):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,dt.__webglTexture,B),es?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,ge,It+ui):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,ge),B!==0?N.blitFramebuffer(Ne,ze,Ne+Ce,ze+xe,de,je,de+Ce,je+xe,N.COLOR_BUFFER_BIT,N.NEAREST):es?N.copyTexSubImage3D(Re,ge,de,je,It+ui,Ne,ze,Ce,xe):N.copyTexSubImage2D(Re,ge,de,je,Ne,ze,Ce,xe);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else es?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Re,ge,de,je,It,Ce,xe,Me,yt,Lt,_t.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,ge,de,je,It,Ce,xe,Me,yt,_t.data):N.texSubImage3D(Re,ge,de,je,It,Ce,xe,Me,yt,Lt,_t):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,de,je,Ce,xe,yt,Lt,_t.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,de,je,_t.width,_t.height,yt,_t.data):N.texSubImage2D(N.TEXTURE_2D,ge,de,je,Ce,xe,yt,Lt,_t);_e.pixelStorei(N.UNPACK_ROW_LENGTH,Xt),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ct),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,ci),_e.pixelStorei(N.UNPACK_SKIP_ROWS,un),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,ql),ge===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Re),_e.unbindTexture()},this.initRenderTarget=function(E){De.get(E).__webglFramebuffer===void 0&&Le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Le.setTextureCube(E,0):E.isData3DTexture?Le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Le.setTexture2DArray(E,0):Le.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){$=0,V=0,ne=null,_e.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}};var ES=ts(kl()),lS={portrait:[1.6,2.25],landscape:[2.25,1.6]},jC={left:.27,center:.5,right:.73},Gl=.018,Cn=.007,Wt=4,cS=1/.05,QC=1/960,eR=2,dr=72,uS=24,pg=.36,_S=.095,tR=.0135,md=.036,Hl=.15,hS=1024,dS={glossy:{roughness:.42,metalness:0,clearcoat:1,clearcoatRoughness:.06,foil:0,anisotropy:0},matte:{roughness:.85,metalness:0,clearcoat:0,clearcoatRoughness:.6,foil:0,anisotropy:0},holographic:{roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.04,foil:1,anisotropy:0},metallic:{roughness:.36,metalness:.75,clearcoat:.5,clearcoatRoughness:.18,foil:0,anisotropy:.7}},gd=[0,.07,.93,1],nR=[-.95,-.28,.28,.95],iR=9,rR=`
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`,sR=`
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`,oR=`
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`,aR=`
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`,fS={silver:{color:"#d9dce2",roughness:.16},gold:{color:"#e4b965",roughness:.2},graphite:{color:"#4d4f55",roughness:.28}},jr=(t,e,n)=>Math.min(n,Math.max(e,t)),Vl=(t,e,n)=>t+(e-t)*n,mg=(t,e)=>{try{let n=document.createElement("canvas").getContext("2d");if(!n)return e;n.fillStyle="#000000",n.fillStyle=t;let i=n.fillStyle;if(i.startsWith("#")){let s=parseInt(i.slice(1),16);return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}let r=i.match(/[\d.]+/g);return!r||r.length<3?e:[Number(r[0])/255,Number(r[1])/255,Number(r[2])/255]}catch{return e}},lR=t=>.2126*t[0]+.7152*t[1]+.0722*t[2],_d=(t,e=1)=>`rgba(${Math.round(t[0]*255)}, ${Math.round(t[1]*255)}, ${Math.round(t[2]*255)}, ${e})`,vS=t=>{let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}},yg=(t,e,n,i,r,s)=>{let o=Math.max(0,Math.min(s,i/2,r/2)),a=o*.4477;t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.bezierCurveTo(e+i-a,n,e+i,n+a,e+i,n+o),t.lineTo(e+i,n+r-o),t.bezierCurveTo(e+i,n+r-a,e+i-a,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.bezierCurveTo(e+a,n+r,e,n+r-a,e,n+r-o),t.lineTo(e,n+o),t.bezierCurveTo(e,n+a,e+a,n,e+o,n)},gg=(t,e)=>{if(!e)return Promise.resolve(null);let n=t.get(e);if(n)return n;let i=new Promise(r=>{let s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>r(s),s.onerror=()=>r(null),s.src=e});return t.set(e,i),i},pS=(t,e)=>{let[n,i]=lS[t]||lS.portrait,r=Vl(.03,Math.min(n,i)*.2,jr(e,0,1)),s={width:.34,height:.07,y:i/2-.13},o=i/2-.055;return{width:n,height:i,radius:r,slot:s,ringY:o,hangY:o+_S}},cR=t=>{let{width:e,height:n,radius:i,slot:r}=t,s=new Xr;yg(s,-e/2+Cn,-n/2+Cn,e-Cn*2,n-Cn*2,Math.max(i-Cn,.005));let o=new Es;yg(o,-r.width/2-Cn,r.y-r.height/2-Cn,r.width+Cn*2,r.height+Cn*2,r.height/2+Cn),s.holes.push(o);let a=new zo(s,{depth:Gl,bevelEnabled:!0,bevelThickness:Cn,bevelSize:Cn,bevelSegments:5,curveSegments:24});a.translate(0,0,-Gl/2);let l=new Ml(s,24),c=l.getAttribute("position"),u=l.getAttribute("uv");for(let f=0;f<c.count;f++)u.setXY(f,(c.getX(f)+e/2)/e,(c.getY(f)+n/2)/n);return u.needsUpdate=!0,{body:a,face:l}},mS=t=>{let e=new Xr,n=t*1.16;yg(e,-n/2+.014,-Hl/2+.014,n-.028,Hl-.028,.024);let i=new zo(e,{depth:.02,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:6,curveSegments:10});return i.translate(0,0,-.01),i},uR=t=>{let e=gd.length,n=new Xn;n.setAttribute("position",new Dn(new Float32Array(t*e*3),3)),n.setAttribute("normal",new Dn(new Float32Array(t*e*3),3)),n.setAttribute("uv",new Dn(new Float32Array(t*e*2),2));let i=[];for(let r=0;r<t-1;r++)for(let s=0;s<e-1;s++){let o=r*e+s;i.push(o,o+e,o+1,o+1,o+e,o+e+1)}return n.setIndex(i),n},hR=t=>{let e=new Io;e.background=new et(.035,.035,.04);let n=new Ts(1,1),i=[],r=(a,l,c,u=0)=>{let f=new No({color:new et(a,a,a),side:$n});i.push(f);let h=new $t(n,f);h.position.set(...l),h.scale.set(c[0],c[1],1),h.lookAt(0,0,0),h.rotateZ(u),e.add(h)};r(2.6,[0,4.5,8],[9,4]),r(6,[-5.5,.5,7],[.9,14]),r(4,[5,-.5,8],[.6,14]),r(3.5,[0,-1,9],[24,.35],Math.PI/3),r(2.5,[1,2.5,9],[24,.2],Math.PI/3),r(1.4,[0,6,-6],[12,4]),r(.5,[0,-7,1],[16,6]),r(.9,[8,0,-2],[4,10]);let s=new Jo(t),o=s.fromScene(e,.035);return s.dispose(),n.dispose(),i.forEach(a=>a.dispose()),o},_g=(t,e)=>{let n=new Ms(t);return n.colorSpace=ln,n.anisotropy=e,n},dR=()=>{let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");if(!n)return new Ms(e);let i=vS(7),r=Float32Array.from({length:128*128},()=>i()),s=(l,c)=>{let u=0;for(let f=-1;f<=1;f++)for(let h=-1;h<=1;h++)u+=r[(c+f+128)%128*128+(l+h+128)%128];return u/9*1.6},o=n.createImageData(128,128);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=s((c-1+128)%128,l)-s((c+1)%128,l),f=s(c,(l-1+128)%128)-s(c,(l+1)%128),h=Math.hypot(u,f,1),p=(l*128+c)*4;o.data[p]=(u/h*.5+.5)*255,o.data[p+1]=(f/h*.5+.5)*255,o.data[p+2]=(1/h*.5+.5)*255,o.data[p+3]=255}n.putImageData(o,0,0);let a=new Ms(e);return a.wrapS=Oi,a.wrapT=Oi,a.repeat.set(5,7),a},fR=()=>{let n=vS(19),i=Float32Array.from({length:128*128},()=>n()),r=l=>Math.sqrt(Math.max(0,1-4*l*l)),s=(l,c)=>{let u=(l%128+128)%128,f=(c%128+128)%128,h=u/128*8,p=f/128*8,_=Math.floor(h),M=Math.floor(p),g=h-_-.5,d=p-M-.5,m=(_+M)%2===0,y=r(g)*(.55+.45*Math.cos(d*Math.PI*(m?1:.6))),x=r(d)*(.55+.45*Math.cos(g*Math.PI*(m?.6:1)));return(m?Math.max(y,x*.7):Math.max(x,y*.7))+i[f*128+u]*.08},o=new Uint8Array(128*128*4);for(let l=0;l<128;l++)for(let c=0;c<128;c++){let u=(s(c-1,l)-s(c+1,l))*1.6,f=(s(c,l-1)-s(c,l+1))*1.6,h=Math.hypot(u,f,1),p=(l*128+c)*4;o[p]=(u/h*.5+.5)*255,o[p+1]=(f/h*.5+.5)*255,o[p+2]=(1/h*.5+.5)*255,o[p+3]=255}let a=new Do(o,128,128);return a.wrapS=Oi,a.wrapT=Oi,a.magFilter=cn,a.minFilter=Ei,a.generateMipmaps=!0,a.needsUpdate=!0,a},pR=(t,e,n,i,r)=>{let s=(r==="contain"?Math.min:Math.max)(n/e.width,i/e.height),o=e.width*s,a=e.height*s;t.drawImage(e,(n-o)/2,(i-a)/2,o,a)},gS=(t,e,n,i)=>{let r=t.getContext("2d");r&&(r.fillStyle=_d(n),r.fillRect(0,0,t.width,t.height),e&&pR(r,e,t.width,t.height,i))},mR=(t,e,n)=>{let r=e?Math.max(64,Math.round(e.width/e.height*192)):384;t.width=192,t.height=r;let s=t.getContext("2d");if(!s)return r/192;if(s.fillStyle=_d(n),s.fillRect(0,0,192,r),e)return s.save(),s.translate(192,0),s.rotate(Math.PI/2),s.drawImage(e,0,0,r,192),s.restore(),r/192;let o=lR(n)>.5?[0,0,0]:[1,1,1];s.fillStyle=_d(o,.05);for(let a=0;a<r;a+=4)s.fillRect(0,a,192,1);s.fillStyle=_d(o,.2);for(let a=0;a<r;a+=14)s.fillRect(192*.075,a,2,8),s.fillRect(192*.925-2,a,2,8);return r/192},gR=()=>{let t=()=>Array.from({length:Wt+1},()=>new D);return{nodes:t(),previous:t(),velocities:t(),lengths:new Float64Array(Wt),impulses:new Float64Array(Wt),rest:1,anchor:new D,body:{position:new D,previous:new D,velocity:new D,quaternion:new wn,previousQuaternion:new wn,angular:new D,mass:1,inverseInertia:new D(1,1,1),hang:new D},grab:null,turn:0,twist:0,twistRaw:0,calm:0}},St={a:new D,b:new D,c:new D,d:new D,e:new D,f:new D,g:new D,pin:new D,q:new wn,r:new wn},xg=(t,e,n)=>(St.r.copy(t.quaternion).invert(),n.copy(e).applyQuaternion(St.r),n.set(n.x*t.inverseInertia.x,n.y*t.inverseInertia.y,n.z*t.inverseInertia.z),n.applyQuaternion(t.quaternion)),yS=(t,e)=>{let{x:n,y:i,z:r,w:s}=t;t.x+=.5*(e.x*s+e.y*r-e.z*i),t.y+=.5*(e.y*s+e.z*n-e.x*r),t.z+=.5*(e.z*s+e.x*i-e.y*n),t.w+=.5*(-e.x*n-e.y*i-e.z*r),t.normalize()},xS=(t,e,n)=>{let i=St.c.crossVectors(e,n);return 1/t.mass+i.dot(xg(t,i,St.d))},SS=(t,e,n)=>{t.position.addScaledVector(n,1/t.mass),yS(t.quaternion,xg(t,St.e.crossVectors(e,n),St.f))},_R=(t,e,n,i)=>{let{nodes:r,body:s}=t,o=r[e],a=e===0?0:cS,l=e===Wt-1,c=St.g,u=r[e+1];l&&(c.copy(s.hang).applyQuaternion(s.quaternion),u=St.b.copy(s.position).add(c));let f=St.a.subVectors(u,o),h=f.length(),p=h-t.rest;if(p<=0||h<1e-9)return;let _=f.divideScalar(h),M=l?xS(s,c,_):cS,g=(h-t.lengths[e])/n,m=(i.hold*Math.tanh(i.stiffness*p/i.hold)+i.spring*p+i.bandDamping*Math.max(0,g))*n*n-t.impulses[e];if(m<=0)return;let y=Math.min(p/(a+M),m);t.impulses[e]+=y,a&&o.addScaledVector(_,y*a),l?SS(s,c,_.multiplyScalar(-y)):u.addScaledVector(_,-y*M)},vR=(t,e,n)=>{let i=St.g.copy(e.local).applyQuaternion(t.quaternion),r=St.a.copy(n).sub(t.position).sub(i),s=r.length();if(s<1e-9)return;let o=r.divideScalar(s),a=s/xS(t,i,o);SS(t,i,o.multiplyScalar(a))},vg=(t,e,n)=>{let{nodes:i,previous:r,velocities:s,body:o,anchor:a}=t;i[0].copy(a);for(let c=1;c<=Wt;c++)i[c].copy(i[c-1]),n?i[c].x+=t.rest:i[c].y-=t.rest;o.quaternion.identity(),n&&o.quaternion.setFromAxisAngle(new D(0,0,1),Math.PI/2),o.hang.set(0,e.hangY,0);let l=St.a.copy(o.hang).applyQuaternion(o.quaternion);o.position.copy(i[Wt]).sub(l),o.previous.copy(o.position),o.previousQuaternion.copy(o.quaternion),o.velocity.set(0,0,0),o.angular.set(0,0,0);for(let c=0;c<=Wt;c++)r[c].copy(i[c]),s[c].set(0,0,0);t.lengths.fill(t.rest),t.turn=0,t.twist=0,t.twistRaw=0,t.calm=0},yR=(t,e,n)=>{t.rest=n/Wt;let{width:i,height:r}=e,s=t.body,o=Gl+Cn*2;s.mass=1,s.inverseInertia.set(12/(r*r+o*o),12/(i*i+o*o),12/(i*i+r*r)),s.hang.set(0,e.hangY,0)},xR=(t,e,n,i)=>{let r=Math.max(1,Math.ceil(e/QC-1e-6)),s=e/r,{nodes:o,previous:a,velocities:l,body:c}=t,u=n.breeze*(Math.sin(i*.53)*.7+Math.sin(i*1.31+1.7)*.3)*3,f=n.breeze*Math.sin(i*.37+.6)*2,h=t.grab,p=St.pin,_=Math.exp(-n.nodeDrag*s),M=Math.exp(-n.linearDrag*s),g=Math.exp(-n.angularDrag*s);for(let m=0;m<r;m++){for(let C=1;C<Wt;C++){let R=l[C];R.y-=n.gravity*s,R.x+=u*s,R.z+=f*s,a[C].copy(o[C]),o[C].addScaledVector(R,s)}c.previous.copy(c.position),c.previousQuaternion.copy(c.quaternion);let y=c.quaternion;if(h){let C=St.q.copy(h.rotation).multiply(St.r.copy(y).invert());C.w<0&&C.set(-C.x,-C.y,-C.z,-C.w);let R=St.a.set(C.x,C.y,C.z).multiplyScalar(2*n.grip);R.addScaledVector(c.angular,-n.gripDamping),c.angular.addScaledVector(xg(c,R,St.b),s)}let x=St.a.set(0,1,0).applyQuaternion(y),A=St.b.set(-x.x*x.z,-x.y*x.z,1-x.z*x.z);if(A.lengthSq()>.001){let C=St.d.set(0,0,1).applyQuaternion(y),R=Math.atan2(St.e.crossVectors(A,C).dot(x),A.dot(C)),k=R-t.twistRaw;k>Math.PI?k-=Math.PI*2:k<-Math.PI&&(k+=Math.PI*2),t.twist+=k,t.twistRaw=R}if(!h){let C=c.angular.dot(x);c.angular.addScaledVector(x,(n.twist*(t.turn-t.twist)-n.twistDamping*C)*s)}c.velocity.y-=n.gravity*s,c.velocity.x+=u*.35*s,c.velocity.z+=f*.35*s,c.position.addScaledVector(c.velocity,s),yS(c.quaternion,St.f.copy(c.angular).multiplyScalar(s)),t.impulses.fill(0),h&&p.lerpVectors(h.from,h.target,(m+1)/r);for(let C=0;C<eR;C++){for(let R=0;R<Wt;R++)_R(t,R,s,n);h&&vR(c,h,p)}for(let C=1;C<Wt;C++){let R=l[C].subVectors(o[C],a[C]).divideScalar(s).multiplyScalar(_);R.multiplyScalar(1/(1+n.nodeAir*R.length()*s))}c.velocity.subVectors(c.position,c.previous).divideScalar(s);let T=St.q.copy(c.previousQuaternion).invert().premultiply(c.quaternion);c.angular.set(T.x,T.y,T.z).multiplyScalar(2/s*(T.w<0?-1:1));let v=St.a.set(0,0,1).applyQuaternion(c.quaternion),w=c.velocity.dot(v),U=St.b.copy(c.velocity).addScaledVector(v,-w);U.multiplyScalar(1/(1+n.air*U.length()*s)),c.velocity.copy(U).addScaledVector(v,w/(1+n.broadside*Math.abs(w)*s)).multiplyScalar(M),c.angular.multiplyScalar(g/(1+n.spinAir*c.angular.length()*s)),c.velocity.lengthSq()>3600&&c.velocity.setLength(60),c.angular.lengthSq()>1600&&c.angular.setLength(40),o[Wt].copy(c.hang).applyQuaternion(c.quaternion).add(c.position);for(let C=0;C<Wt;C++)t.lengths[C]=o[C].distanceTo(o[C+1])}h&&h.from.copy(h.target);let d=c.velocity.lengthSq()+c.angular.lengthSq()*.3;for(let m=1;m<Wt;m++)d+=l[m].lengthSq()*.05;t.calm=d<2e-4?t.calm+e:0},SR=({frontImage:t,backImage:e,imageFit:n="cover",cardColor:i="#ffffff",orientation:r="portrait",finish:s="glossy",cornerRadius:o=.3,size:a=.6,anchor:l="center",strapLength:c=.5,strapImage:u,strapColor:f="#111111",strapWidth:h=.65,metal:p="silver",gravity:_=1,damping:M=.5,elasticity:g=.5,breeze:d=.5,interactive:m=!0,intro:y=!0,className:x="",style:A})=>{let T=(0,Is.useRef)(null),v=(0,Is.useRef)(null),w=(0,Is.useRef)(null);return v.current={frontImage:t,backImage:e,imageFit:n==="contain"?"contain":"cover",cardColor:i,orientation:r==="landscape"?"landscape":"portrait",finish:s,cornerRadius:o,size:a,anchor:l,strapLength:c,strapImage:u,strapColor:f,strapWidth:h,metal:p,gravity:_,damping:M,elasticity:g,breeze:d,interactive:m,intro:y},(0,Is.useEffect)(()=>{w.current?.()}),(0,Is.useEffect)(()=>{let U=T.current;if(!U)return;let C;try{C=new hd({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return}C.setClearColor(0,0),C.outputColorSpace=ln,C.toneMapping=Cl,C.toneMappingExposure=1;let R=C.domElement;R.className="lanyard-canvas",R.setAttribute("aria-hidden","true"),U.appendChild(R);let k=Math.min(8,C.capabilities.getMaxAnisotropy()),X=new Io,L=hR(C);X.environment=L.texture;let z=new En(uS,1,.1,200),$=new Ho(16777215,1.6);$.position.set(-2.5,4,6);let V=new Ho(16777215,.35);V.position.set(3,-1,4),X.add($,V);let ne=new Map,G={front:null,back:null,strap:null},K=document.createElement("canvas"),ee=document.createElement("canvas"),be=document.createElement("canvas"),Oe=_g(K,k),q=_g(ee,k),ye=_g(be,k);ye.wrapS=ii,ye.wrapT=Oi;let Ae=dR(),Be=fR(),Se={foilStrength:{value:0},foilAspect:{value:1.4},foilKey:{value:new D},foilFill:{value:new D},foilTop:{value:new D}},ke=ie=>{Object.assign(ie.uniforms,Se),ie.vertexShader=ie.vertexShader.replace("#include <common>",`#include <common>
${rR}`).replace("#include <project_vertex>",`#include <project_vertex>
${sR}`),ie.fragmentShader=ie.fragmentShader.replace("#include <common>",`#include <common>
${oR}`).replace("#include <opaque_fragment>",`${aR}
#include <opaque_fragment>`)},gt=new qr({map:Oe,normalMap:Ae,normalScale:new ve(.06,.06)}),Ve=new qr({map:q,normalMap:Ae,normalScale:new ve(.06,.06)});gt.onBeforeCompile=ke,Ve.onBeforeCompile=ke;let Ye=new qr,Ke=new Vo({metalness:1}),Q=new qr({map:ye,normalMap:Be,normalScale:new ve(.7,.7),roughness:.68,sheen:1,sheenRoughness:.42,sheenColor:new et(.32,.32,.34),side:$n}),le=new Ui,ae=new $t(void 0,Ye),we=new $t(void 0,gt),ce=new $t(void 0,Ve),qe=new $t(new ko(_S,tR,18,72),Ke);qe.rotation.y=Math.PI/2-.7,le.add(ae,we,ce,qe),X.add(le);let Ie=uR(dr),tt=new $t(Ie,Q);tt.frustumCulled=!1,X.add(tt);let nt=new Ui,st=new $t(mS(pg),Ke);st.position.y=md+Hl/2-.004;let N=new $t(new ko(md,.0105,14,40),Ke);nt.add(st,N),X.add(nt);let Fe=gR(),Qe=[],mt=new D,_e=new D,Et=new Oo(Qe,!1,"centripetal"),De={width:1,height:1},Le=pS("portrait",.3),b={},S=pg,O=2,te=0,j=performance.now(),ue=0,fe=!0,Y=!0,Z=!1,he=!1,P=null,J=0,W=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,pe=()=>{let ie=v.current,it=mg(ie.cardColor,[1,1,1]),ht=hS,ut=Math.round(hS*Le.height/Le.width);(K.width!==ht||K.height!==ut)&&(K.width=ht,K.height=ut,ee.width=ht,ee.height=ut,Oe.dispose(),q.dispose()),gS(K,G.front,it,ie.imageFit),gS(ee,G.back||G.front,it,ie.imageFit),Oe.needsUpdate=!0,q.needsUpdate=!0,oi()},oe=()=>{let ie=v.current;O=mR(be,G.strap,mg(ie.strapColor,[.07,.07,.07])),Be.repeat.set(2,2*O),ye.dispose(),ye.needsUpdate=!0,oi()},me=()=>{let ie=v.current,it=De.width/De.height,ht=Le.height/jr(ie.size,.15,.9),ut=Le.width/.72;ht*it<ut&&(ht=ut/it);let nn=ht*it;z.aspect=it,z.position.set(0,0,ht/2/Math.tan(uS*Math.PI/360)),z.lookAt(0,0,0),z.updateProjectionMatrix(),z.updateMatrixWorld(),Se.foilKey.value.set(-2.5,4,6).normalize().transformDirection(z.matrixWorldInverse),Se.foilFill.value.set(3,-1,4).normalize().transformDirection(z.matrixWorldInverse),Se.foilTop.value.set(.5,4.5,8).normalize().transformDirection(z.matrixWorldInverse);let E=((jC[ie.anchor]??.5)-.5)*nn,I=ht/2+.2,F=ht/2-ht*Vl(.12,.42,jr(ie.strapLength,0,1))+(Le.hangY-Le.height/2);Fe.anchor.set(E,I,0),yR(Fe,Le,I-F),Fe.nodes[0].copy(Fe.anchor),Fe.previous[0].copy(Fe.anchor)},Ue=()=>{let ie=v.current,it=`${ie.orientation}|${ie.cornerRadius}`;if(it!==b.layoutKey){Le=pS(ie.orientation,ie.cornerRadius);let F=cR(Le);ae.geometry.dispose(),we.geometry.dispose(),ce.geometry.dispose(),ae.geometry=F.body,we.geometry=F.face,ce.geometry=F.face.clone(),we.position.z=Gl/2+Cn+6e-4,ce.rotation.y=Math.PI,ce.position.z=-(Gl/2+Cn+6e-4),qe.position.set(0,Le.ringY,0),b.framingKey=""}let ht=`${it}|${ie.size}|${ie.anchor}|${ie.strapLength}|${De.width}|${De.height}`;ht!==b.framingKey&&(me(),Z?it!==b.layoutKey&&vg(Fe,Le,!1):(vg(Fe,Le,ie.intro&&!W),Z=!0));let ut=`${ie.frontImage}|${ie.backImage}|${ie.strapImage}`;if(ut!==b.imageKey){let F=++J;Promise.all([gg(ne,ie.frontImage),gg(ne,ie.backImage),gg(ne,ie.strapImage)]).then(([B,ge,Ce])=>{!Y||F!==J||(G.front=B,G.back=ge,G.strap=Ce,pe(),oe())})}let nn=`${it}|${ie.cardColor}|${ie.imageFit}`;nn!==b.faceKey&&pe(),ie.strapColor!==b.strapColor&&oe();let E=dS[ie.finish]||dS.glossy,I=mg(ie.cardColor,[1,1,1]);[gt,Ve].forEach(F=>{F.roughness=E.roughness,F.metalness=E.metalness,F.clearcoat=E.clearcoat,F.clearcoatRoughness=E.clearcoatRoughness,F.anisotropy=E.anisotropy}),Se.foilStrength.value=E.foil,Se.foilAspect.value=Le.height/Le.width,Ye.color.setRGB(I[0]*.92,I[1]*.92,I[2]*.92,ln),Ye.roughness=Math.min(E.roughness,.35),Ye.metalness=E.metalness,Ye.clearcoat=1,Ye.clearcoatRoughness=.08;let H=fS[ie.metal]||fS.silver;Ke.color.set(H.color),Ke.roughness=H.roughness,S=pg*jr(ie.strapWidth,.4,2),S!==b.strapScale&&(st.geometry.dispose(),st.geometry=mS(S)),R.style.touchAction=ie.interactive?"pan-y":"auto",b={layoutKey:it,framingKey:ht,imageKey:ut,faceKey:nn,strapColor:ie.strapColor,strapScale:S},oi()},$e=Array.from({length:dr},()=>new D),re=Array.from({length:dr},()=>new D),He=nR.map(ie=>[Math.cos(ie),Math.sin(ie)]),We={tangent:new D,toCamera:new D,basis:new Mt,up:new D,across:new D,facing:new D,end:new D},Ee=()=>{let ie=Fe.nodes[Wt],it=md+Hl+.05,ht=Wt-1;for(;ht>0&&Fe.nodes[ht].distanceTo(ie)<it*1.1;)ht--;let ut=We.up.subVectors(Fe.nodes[ht],ie);ut.lengthSq()<1e-8&&ut.set(0,1,0).applyQuaternion(Fe.body.quaternion),ut.normalize(),mt.copy(ie).addScaledVector(ut,it),_e.copy(ie).addScaledVector(ut,md+Hl*.35),Qe.length=0;for(let de=0;de<=ht;de++)Qe.push(Fe.nodes[de]);Qe.push(mt,_e),Et.updateArcLengths();for(let de=0;de<dr;de++)Et.getPointAt(de/(dr-1),$e[de]);let nn=Et.getLength(),E=1-mt.distanceTo(_e)/Math.max(nn,.001),I=Ie.getAttribute("position"),H=Ie.getAttribute("normal"),F=Ie.getAttribute("uv"),B=gd.length,ge=Fe.rest*Wt,Ce=ge/(S*O),xe=S/Math.pow(Math.max(1,nn/Math.max(ge,.001)),.35),{tangent:Me,toCamera:Ne,across:ze,facing:Je}=We;for(let de=0;de<dr;de++){Me.subVectors($e[Math.min(dr-1,de+1)],$e[Math.max(0,de-1)]),Me.lengthSq()<1e-12&&Me.set(0,-1,0),Me.normalize(),Ne.subVectors(z.position,$e[de]).normalize();let je=re[de].crossVectors(Ne,Me);je.lengthSq()<1e-10&&je.copy(de>0?re[de-1]:St.a.set(1,0,0)),je.normalize(),de>0&&je.dot(re[de-1])<0&&je.negate();let It=-Fe.twist*Math.pow(Math.min(1,de/(dr-1)/E),1.3);Je.crossVectors(Me,je),ze.copy(je).multiplyScalar(Math.cos(It)).addScaledVector(Je,Math.sin(It)),Je.crossVectors(Me,ze);let _t=$e[de],yt=(1-de/(dr-1))*Ce;for(let Lt=0;Lt<B;Lt++){let Re=de*B+Lt,Xt=(gd[Lt]-.5)*xe,[ct,ci]=He[Lt];I.setXYZ(Re,_t.x+ze.x*Xt,_t.y+ze.y*Xt,_t.z+ze.z*Xt),H.setXYZ(Re,Je.x*ct+ze.x*ci,Je.y*ct+ze.y*ci,Je.z*ct+ze.z*ci),F.setXY(Re,gd[Lt],yt)}}We.end.copy(ze),I.needsUpdate=!0,H.needsUpdate=!0,F.needsUpdate=!0,ze.copy(We.end).addScaledVector(ut,-We.end.dot(ut)).normalize(),Je.crossVectors(ze,ut).normalize(),We.basis.makeBasis(ze,ut,Je),nt.quaternion.setFromRotationMatrix(We.basis),nt.position.copy(ie)},pt=()=>{le.position.copy(Fe.body.position),le.quaternion.copy(Fe.body.quaternion),Ee(),C.render(X,z)},kt=()=>{let ie=v.current,it=40*jr(ie.gravity,0,3),ht=Math.max(it,20),ut=jr(ie.elasticity,0,1),nn=jr(ie.damping,0,1);return{gravity:it,hold:ht*Vl(2.2,5.5,ut),stiffness:ht*10*Wt,spring:ht*Vl(.1,.4,ut)*Wt,bandDamping:ht*Vl(.3,.08,ut)*Wt,linearDrag:.25*Math.pow(16,nn),angularDrag:.5*Math.pow(12,nn),air:.15,broadside:.5,spinAir:.03,nodeDrag:2,nodeAir:.2,twist:30,twistDamping:3,grip:40,gripDamping:6,breeze:W?0:jr(ie.breeze,0,1)}},si=ie=>{if(te=0,!Y)return;let it=Math.min(1/30,Math.max(1/240,(ie-j)/1e3));j=ie,ue+=it;let ht=kt();xR(Fe,it,ht,ue);let ut=Fe.body;Number.isFinite(ut.position.x+ut.position.y+ut.position.z+ut.quaternion.w)||(Fe.grab=null,vg(Fe,Le,!1)),pt();let nn=Fe.calm>1.2&&!Fe.grab&&ht.breeze===0;fe&&!nn&&(te=requestAnimationFrame(si))},oi=()=>{te||!fe||!Y||(Fe.calm=0,j=performance.now(),te=requestAnimationFrame(si))},Qr=new Al,Wl=new ve,Ls=ie=>{let it=R.getBoundingClientRect();Wl.set((ie.clientX-it.left)/it.width*2-1,-((ie.clientY-it.top)/it.height)*2+1),Qr.setFromCamera(Wl,z)},Ns=()=>(le.updateMatrixWorld(),Qr.intersectObjects([ae,we,ce],!1)[0]||null),ai=ie=>{R.style.cursor!==ie&&(R.style.cursor=ie)},jo=ie=>{let it=Fe.body,ht=St.a.set(0,1,0).applyQuaternion(it.quaternion),ut=Fe.turn>0?-1:1;if(Fe.turn===0){let nn=St.c.subVectors(ie,z.position).normalize();ut=St.b.subVectors(ie,it.position).cross(nn).dot(ht)<0?-1:1}Fe.turn=Fe.turn===0?Math.PI*ut:0,it.angular.addScaledVector(ht,iR*ut)},Qo=ie=>{if(!v.current.interactive||ie.button>0)return;Ls(ie);let it=Ns();it&&(Fe.grab={local:it.point.clone().sub(Fe.body.position).applyQuaternion(Fe.body.quaternion.clone().invert()),rotation:Fe.body.quaternion.clone(),reach:it.distance,from:it.point.clone(),target:it.point.clone()},P={x:ie.clientX,y:ie.clientY,time:performance.now(),point:it.point.clone()},R.setPointerCapture?.(ie.pointerId),ai("grabbing"),ie.preventDefault(),oi())},ea=ie=>{if(v.current.interactive){if(Ls(ie),Fe.grab){P&&Math.hypot(ie.clientX-P.x,ie.clientY-P.y)>6&&(P=null),Qr.ray.at(Fe.grab.reach,Fe.grab.target),oi();return}ie.pointerType!=="touch"&&(he=!!Ns(),ai(he?"grab":""))}},li=ie=>{Fe.grab&&(Fe.grab=null,P&&ie.type==="pointerup"&&performance.now()-P.time<450&&jo(P.point),P=null,R.releasePointerCapture?.(ie.pointerId),ai(he&&ie.pointerType!=="touch"?"grab":""),oi())},ta=ie=>{!v.current.interactive||ie.touches.length!==1||(Ls(ie.touches[0]),Ns()&&ie.preventDefault())};R.addEventListener("pointerdown",Qo),R.addEventListener("pointermove",ea),R.addEventListener("pointerup",li),R.addEventListener("pointercancel",li),R.addEventListener("lostpointercapture",li),R.addEventListener("touchstart",ta,{passive:!1});let na=()=>{De.width=Math.max(1,U.clientWidth),De.height=Math.max(1,U.clientHeight),C.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),C.setSize(De.width,De.height,!1),Ue(),pt()},fr=new ResizeObserver(na);fr.observe(U);let Xl=new IntersectionObserver(([ie])=>{fe=ie.isIntersecting,fe&&oi()});Xl.observe(U);let ia=()=>{document.hidden||oi()};return document.addEventListener("visibilitychange",ia),w.current=Ue,na(),()=>{Y=!1,cancelAnimationFrame(te),w.current=null,fr.disconnect(),Xl.disconnect(),document.removeEventListener("visibilitychange",ia),R.removeEventListener("pointerdown",Qo),R.removeEventListener("pointermove",ea),R.removeEventListener("pointerup",li),R.removeEventListener("pointercancel",li),R.removeEventListener("lostpointercapture",li),R.removeEventListener("touchstart",ta),[ae,we,ce,qe,st,N,tt].forEach(ie=>ie.geometry?.dispose()),[gt,Ve,Ye,Ke,Q].forEach(ie=>ie.dispose()),[Oe,q,ye,Ae,Be].forEach(ie=>ie.dispose()),L.dispose(),C.dispose(),R.parentNode&&R.parentNode.removeChild(R)}},[]),(0,ES.jsx)("div",{ref:T,className:`lanyard ${x}`.trim(),style:A})},MS=SR;var TS=ts(kl()),Sg=new WeakMap;function MR(t,e={}){let n=Sg.get(t);n&&n.unmount();let i=(0,wS.createRoot)(t);return Sg.set(t,i),i.render((0,TS.jsx)(MS,{frontImage:"assets/axis-lanyard-front.svg",backImage:"assets/axis-lanyard-back.svg",imageFit:"cover",orientation:"portrait",finish:"holographic",cardColor:"#10131a",cornerRadius:.28,size:.49,anchor:"center",strapLength:.48,strapColor:"#b8a98a",strapWidth:.7,metal:"graphite",gravity:1.05,damping:.36,elasticity:.42,breeze:.08,interactive:!0,intro:!0,...e,style:{width:"100%",height:"100%",...e.style||{}}})),()=>{i.unmount(),Sg.delete(t)}}return LS(ER);})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
