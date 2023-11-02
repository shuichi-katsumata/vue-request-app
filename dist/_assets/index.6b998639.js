function e(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t={},n=[],r=()=>{},i=()=>!1,s=/^on[^a-z]/,o=e=>s.test(e),a=e=>e.startsWith("onUpdate:"),l=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,h=(e,t)=>u.call(e,t),d=Array.isArray,f=e=>"[object Map]"===k(e),p=e=>"[object Set]"===k(e),m=e=>"[object Date]"===k(e),_=e=>"function"==typeof e,g=e=>"string"==typeof e,v=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,b=e=>y(e)&&_(e.then)&&_(e.catch),w=Object.prototype.toString,k=e=>w.call(e),C=e=>k(e).slice(8,-1),E=e=>"[object Object]"===k(e),I=e=>g(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,T=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},x=/-(\w)/g,R=S((e=>e.replace(x,((e,t)=>t?t.toUpperCase():"")))),O=/\B([A-Z])/g,A=S((e=>e.replace(O,"-$1").toLowerCase())),N=S((e=>e.charAt(0).toUpperCase()+e.slice(1))),P=S((e=>e?`on${N(e)}`:"")),D=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},U=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},M=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let F;const z=()=>F||(F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function j(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=g(r)?V(r):j(r);if(i)for(const e in i)t[e]=i[e]}return t}return g(e)||y(e)?e:void 0}const B=/;(?![^(]*\))/g,q=/:([^]+)/,W=/\/\*[^]*?\*\//g;function V(e){const t={};return e.replace(W,"").split(B).forEach((e=>{if(e){const n=e.split(q);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function H(e){let t="";if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const r=H(e[n]);r&&(t+=r+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function G(e){return!!e||""===e}function K(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=v(e),r=v(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=K(e[r],t[r]);return n}(e,t);if(n=y(e),r=y(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!K(e[n],t[n]))return!1}}return String(e)===String(t)}function Y(e,t){return e.findIndex((e=>K(e,t)))}const Z=e=>g(e)?e:null==e?"":d(e)||y(e)&&(e.toString===w||!_(e.toString))?JSON.stringify(e,J,2):String(e),J=(e,t)=>t&&t.__v_isRef?J(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()]}:!y(t)||d(t)||E(t)?t:String(t);let X;class Q{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=X,!e&&X&&(this.index=(X.scopes||(X.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=X;try{return X=this,e()}finally{X=t}}}on(){X=this}off(){X=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const ee=e=>{const t=new Set(e);return t.w=0,t.n=0,t},te=e=>(e.w&se)>0,ne=e=>(e.n&se)>0,re=new WeakMap;let ie=0,se=1;const oe=30;let ae;const le=Symbol(""),ce=Symbol("");class ue{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=X){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ae,t=de;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ae,ae=this,de=!0,se=1<<++ie,ie<=oe?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=se})(this):he(this),this.fn()}finally{ie<=oe&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];te(i)&&!ne(i)?i.delete(e):t[n++]=i,i.w&=~se,i.n&=~se}t.length=n}})(this),se=1<<--ie,ae=this.parent,de=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let de=!0;const fe=[];function pe(){fe.push(de),de=!1}function me(){const e=fe.pop();de=void 0===e||e}function _e(e,t,n){if(de&&ae){let t=re.get(e);t||re.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=ee()),ge(r)}}function ge(e,t){let n=!1;ie<=oe?ne(e)||(e.n|=se,n=!te(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e))}function ve(e,t,n,r,i,s){const o=re.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&d(e)){const e=Number(r);o.forEach(((t,n)=>{("length"===n||n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":d(e)?I(n)&&a.push(o.get("length")):(a.push(o.get(le)),f(e)&&a.push(o.get(ce)));break;case"delete":d(e)||(a.push(o.get(le)),f(e)&&a.push(o.get(ce)));break;case"set":f(e)&&a.push(o.get(le))}if(1===a.length)a[0]&&ye(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);ye(ee(e))}}function ye(e,t){const n=d(e)?e:[...e];for(const e of n)e.computed&&be(e);for(const e of n)e.computed||be(e)}function be(e,t){(e!==ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const we=e("__proto__,__v_isRef,__isVue"),ke=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(v)),Ce=Re(),Ee=Re(!1,!0),Ie=Re(!0),Te=Se();function Se(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ft(this);for(let e=0,t=this.length;e<t;e++)_e(n,0,e+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ft)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){pe();const n=ft(this)[t].apply(this,e);return me(),n}})),e}function xe(e){const t=ft(this);return _e(t,0,e),t.hasOwnProperty(e)}function Re(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&i===(e?t?it:rt:t?nt:tt).get(n))return n;const s=d(n);if(!e){if(s&&h(Te,r))return Reflect.get(Te,r,i);if("hasOwnProperty"===r)return xe}const o=Reflect.get(n,r,i);return(v(r)?ke.has(r):we(r))?o:(e||_e(n,0,r),t?o:yt(o)?s&&I(r)?o:o.value:y(o)?e?at(o):st(o):o)}}function Oe(e=!1){return function(t,n,r,i){let s=t[n];if(ut(s)&&yt(s)&&!yt(r))return!1;if(!e&&(ht(r)||ut(r)||(s=ft(s),r=ft(r)),!d(t)&&yt(s)&&!yt(r)))return s.value=r,!0;const o=d(t)&&I(n)?Number(n)<t.length:h(t,n),a=Reflect.set(t,n,r,i);return t===ft(i)&&(o?D(r,s)&&ve(t,"set",n,r):ve(t,"add",n,r)),a}}const Ae={get:Ce,set:Oe(),deleteProperty:function(e,t){const n=h(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ve(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return v(t)&&ke.has(t)||_e(e,0,t),n},ownKeys:function(e){return _e(e,0,d(e)?"length":le),Reflect.ownKeys(e)}},Ne={get:Ie,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Pe=l({},Ae,{get:Ee,set:Oe(!0)}),De=e=>e,Le=e=>Reflect.getPrototypeOf(e);function Ue(e,t,n=!1,r=!1){const i=ft(e=e.__v_raw),s=ft(t);n||(t!==s&&_e(i,0,t),_e(i,0,s));const{has:o}=Le(i),a=r?De:n?_t:mt;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Me(e,t=!1){const n=this.__v_raw,r=ft(n),i=ft(e);return t||(e!==i&&_e(r,0,e),_e(r,0,i)),e===i?n.has(e):n.has(e)||n.has(i)}function Fe(e,t=!1){return e=e.__v_raw,!t&&_e(ft(e),0,le),Reflect.get(e,"size",e)}function ze(e){e=ft(e);const t=ft(this);return Le(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function je(e,t){t=ft(t);const n=ft(this),{has:r,get:i}=Le(n);let s=r.call(n,e);s||(e=ft(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?D(t,o)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function Be(e){const t=ft(this),{has:n,get:r}=Le(t);let i=n.call(t,e);i||(e=ft(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ve(t,"delete",e,void 0),s}function qe(){const e=ft(this),t=0!==e.size,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function We(e,t){return function(n,r){const i=this,s=i.__v_raw,o=ft(s),a=t?De:e?_t:mt;return!e&&_e(o,0,le),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Ve(e,t,n){return function(...r){const i=this.__v_raw,s=ft(i),o=f(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?De:t?_t:mt;return!t&&_e(s,0,l?ce:le),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return"delete"!==e&&this}}function $e(){const e={get(e){return Ue(this,e)},get size(){return Fe(this)},has:Me,add:ze,set:je,delete:Be,clear:qe,forEach:We(!1,!1)},t={get(e){return Ue(this,e,!1,!0)},get size(){return Fe(this)},has:Me,add:ze,set:je,delete:Be,clear:qe,forEach:We(!1,!0)},n={get(e){return Ue(this,e,!0)},get size(){return Fe(this,!0)},has(e){return Me.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!1)},r={get(e){return Ue(this,e,!0,!0)},get size(){return Fe(this,!0)},has(e){return Me.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Ve(i,!1,!1),n[i]=Ve(i,!0,!1),t[i]=Ve(i,!1,!0),r[i]=Ve(i,!0,!0)})),[e,n,t,r]}const[Ge,Ke,Ye,Ze]=$e();function Je(e,t){const n=t?e?Ze:Ye:e?Ke:Ge;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(h(n,r)&&r in t?n:t,r,i)}const Xe={get:Je(!1,!1)},Qe={get:Je(!1,!0)},et={get:Je(!0,!1)},tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap;function st(e){return ut(e)?e:lt(e,!1,Ae,Xe,tt)}function ot(e){return lt(e,!1,Pe,Qe,nt)}function at(e){return lt(e,!0,Ne,et,rt)}function lt(e,t,n,r,i){if(!y(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(C(a));var a;if(0===o)return e;const l=new Proxy(e,2===o?r:n);return i.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!(!e||!e.__v_isReactive)}function ut(e){return!(!e||!e.__v_isReadonly)}function ht(e){return!(!e||!e.__v_isShallow)}function dt(e){return ct(e)||ut(e)}function ft(e){const t=e&&e.__v_raw;return t?ft(t):e}function pt(e){return U(e,"__v_skip",!0),e}const mt=e=>y(e)?st(e):e,_t=e=>y(e)?at(e):e;function gt(e){de&&ae&&ge((e=ft(e)).dep||(e.dep=ee()))}function vt(e,t){const n=(e=ft(e)).dep;n&&ye(n)}function yt(e){return!(!e||!0!==e.__v_isRef)}function bt(e,t){return yt(e)?e:new wt(e,t)}class wt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ft(e),this._value=t?e:mt(e)}get value(){return gt(this),this._value}set value(e){const t=this.__v_isShallow||ht(e)||ut(e);e=t?e:ft(e),D(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mt(e),vt(this))}}function kt(e){return yt(e)?e.value:e}const Ct={get:(e,t,n)=>kt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return yt(i)&&!yt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Et(e){return ct(e)?e:new Proxy(e,Ct)}class It{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ue(e,(()=>{this._dirty||(this._dirty=!0,vt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=ft(this);return gt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Tt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(e){xt(e,t,n)}return i}function St(e,t,n,r){if(_(e)){const i=Tt(e,t,n,r);return i&&b(i)&&i.catch((e=>{xt(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(St(e[s],t,n,r));return i}function xt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Tt(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Rt=!1,Ot=!1;const At=[];let Nt=0;const Pt=[];let Dt=null,Lt=0;const Ut=Promise.resolve();let Mt=null;function Ft(e){const t=Mt||Ut;return e?t.then(this?e.bind(this):e):t}function zt(e){At.length&&At.includes(e,Rt&&e.allowRecurse?Nt+1:Nt)||(null==e.id?At.push(e):At.splice(function(e){let t=Nt+1,n=At.length;for(;t<n;){const r=t+n>>>1;Wt(At[r])<e?t=r+1:n=r}return t}(e.id),0,e),jt())}function jt(){Rt||Ot||(Ot=!0,Mt=Ut.then(Ht))}function Bt(e,t=(Rt?Nt+1:0)){for(;t<At.length;t++){const e=At[t];e&&e.pre&&(At.splice(t,1),t--,e())}}function qt(e){if(Pt.length){const e=[...new Set(Pt)];if(Pt.length=0,Dt)return void Dt.push(...e);for(Dt=e,Dt.sort(((e,t)=>Wt(e)-Wt(t))),Lt=0;Lt<Dt.length;Lt++)Dt[Lt]();Dt=null,Lt=0}}const Wt=e=>null==e.id?1/0:e.id,Vt=(e,t)=>{const n=Wt(e)-Wt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ht(e){Ot=!1,Rt=!0,At.sort(Vt);try{for(Nt=0;Nt<At.length;Nt++){const e=At[Nt];e&&!1!==e.active&&Tt(e,null,14)}}finally{Nt=0,At.length=0,qt(),Rt=!1,Mt=null,(At.length||Pt.length)&&Ht()}}function $t(e,n,...r){if(e.isUnmounted)return;const i=e.vnode.props||t;let s=r;const o=n.startsWith("update:"),a=o&&n.slice(7);if(a&&a in i){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:n,trim:o}=i[e]||t;o&&(s=r.map((e=>g(e)?e.trim():e))),n&&(s=r.map(M))}let l,c=i[l=P(n)]||i[l=P(R(n))];!c&&o&&(c=i[l=P(A(n))]),c&&St(c,e,6,s);const u=i[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,St(u,e,6,s)}}function Gt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!_(e)){const r=e=>{const n=Gt(e,t,!0);n&&(a=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(d(s)?s.forEach((e=>o[e]=null)):l(o,s),y(e)&&r.set(e,o),o):(y(e)&&r.set(e,null),null)}function Kt(e,t){return!(!e||!o(t))&&(t=t.slice(2).replace(/Once$/,""),h(e,t[0].toLowerCase()+t.slice(1))||h(e,A(t))||h(e,t))}let Yt=null,Zt=null;function Jt(e){const t=Yt;return Yt=e,Zt=e&&e.type.__scopeId||null,t}function Xt(e,t=Yt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Nr(-1);const i=Jt(t);let s;try{s=e(...n)}finally{Jt(i),r._d&&Nr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Qt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:_}=e;let g,v;const y=Jt(e);try{if(4&n.shapeFlag){const e=i||r;g=Hr(h.call(e,e,d,s,p,f,m)),v=c}else{const e=t;0,g=Hr(e.length>1?e(s,{attrs:c,slots:l,emit:u}):e(s,null)),v=t.props?c:en(c)}}catch(t){xr.length=0,xt(t,e,1),g=Br(Tr)}let b=g;if(v&&!1!==_){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(a)&&(v=tn(v,o)),b=qr(b,v))}return n.dirs&&(b=qr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),g=b,Jt(y),g}const en=e=>{let t;for(const n in e)("class"===n||"style"===n||o(n))&&((t||(t={}))[n]=e[n]);return t},tn=(e,t)=>{const n={};for(const r in e)a(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function nn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Kt(n,s))return!0}return!1}const rn={};function sn(e,t,n){return on(e,t,n)}function on(e,n,{immediate:i,deep:s,flush:o,onTrack:a,onTrigger:l}=t){var u;const h=X===(null==(u=Qr)?void 0:u.scope)?Qr:null;let f,p,m=!1,g=!1;if(yt(e)?(f=()=>e.value,m=ht(e)):ct(e)?(f=()=>e,s=!0):d(e)?(g=!0,m=e.some((e=>ct(e)||ht(e))),f=()=>e.map((e=>yt(e)?e.value:ct(e)?cn(e):_(e)?Tt(e,h,2):void 0))):f=_(e)?n?()=>Tt(e,h,2):()=>{if(!h||!h.isUnmounted)return p&&p(),St(e,h,3,[y])}:r,n&&s){const e=f;f=()=>cn(e())}let v,y=e=>{p=C.onStop=()=>{Tt(e,h,4)}};if(si){if(y=r,n?i&&St(n,h,3,[f(),g?[]:void 0,y]):f(),"sync"!==o)return r;{const e=di();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(rn):rn;const w=()=>{if(C.active)if(n){const e=C.run();(s||m||(g?e.some(((e,t)=>D(e,b[t]))):D(e,b)))&&(p&&p(),St(n,h,3,[e,b===rn?void 0:g&&b[0]===rn?[]:b,y]),b=e)}else C.run()};let k;w.allowRecurse=!!n,"sync"===o?k=w:"post"===o?k=()=>br(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),k=()=>zt(w));const C=new ue(f,k);n?i?w():b=C.run():"post"===o?br(C.run.bind(C),h&&h.suspense):C.run();const E=()=>{C.stop(),h&&h.scope&&c(h.scope.effects,C)};return v&&v.push(E),E}function an(e,t,n){const r=this.proxy,i=g(e)?e.includes(".")?ln(r,e):()=>r[e]:e.bind(r,r);let s;_(t)?s=t:(s=t.handler,n=t);const o=Qr;ti(this);const a=on(i,s.bind(r),n);return o?ti(o):ni(),a}function ln(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function cn(e,t){if(!y(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),yt(e))cn(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(p(e)||f(e))e.forEach((e=>{cn(e,t)}));else if(E(e))for(const n in e)cn(e[n],t);return e}function un(e,n){const r=Yt;if(null===r)return e;const i=li(r)||r.proxy,s=e.dirs||(e.dirs=[]);for(let e=0;e<n.length;e++){let[r,o,a,l=t]=n[e];r&&(_(r)&&(r={mounted:r,updated:r}),r.deep&&cn(o),s.push({dir:r,instance:i,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function hn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(pe(),St(l,n,8,[e.el,a,e,t]),me())}}function dn(e,t){return _(e)?(()=>l({name:e.name},t,{setup:e}))():e}const fn=e=>!!e.type.__asyncLoader,pn=e=>e.type.__isKeepAlive;function mn(e,t){gn(e,"a",t)}function _n(e,t){gn(e,"da",t)}function gn(e,t,n=Qr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(yn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)pn(e.parent.vnode)&&vn(r,t,n,e),e=e.parent}}function vn(e,t,n,r){const i=yn(t,e,r,!0);Tn((()=>{c(r[t],i)}),n)}function yn(e,t,n=Qr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;pe(),ti(n);const i=St(t,n,e,r);return ni(),me(),i});return r?i.unshift(s):i.push(s),s}}const bn=e=>(t,n=Qr)=>(!si||"sp"===e)&&yn(e,((...e)=>t(...e)),n),wn=bn("bm"),kn=bn("m"),Cn=bn("bu"),En=bn("u"),In=bn("bum"),Tn=bn("um"),Sn=bn("sp"),xn=bn("rtg"),Rn=bn("rtc");function On(e,t=Qr){yn("ec",e,t)}const An="components";function Nn(e,t){return function(e,t,n=!0,r=!1){const i=Yt||Qr;if(i){const n=i.type;if(e===An){const e=function(e,t=!0){return _(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===R(t)||e===N(R(t))))return n}const s=Dn(i[e]||n[e],t)||Dn(i.appContext[e],t);return!s&&r?n:s}}(An,e,!0,t)||e}const Pn=Symbol.for("v-ndc");function Dn(e,t){return e&&(e[t]||e[R(t)]||e[N(R(t))])}function Ln(e,t,n,r){let i;const s=n&&n[r];if(d(e)||g(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(y(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Un=e=>e?ri(e)?li(e)||e.proxy:Un(e.parent):null,Mn=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Un(e.parent),$root:e=>Un(e.root),$emit:e=>e.emit,$options:e=>Hn(e),$forceUpdate:e=>e.f||(e.f=()=>zt(e.update)),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>an.bind(e)}),Fn=(e,n)=>e!==t&&!e.__isScriptSetup&&h(e,n),zn={get({_:e},n){const{ctx:r,setupState:i,data:s,props:o,accessCache:a,type:l,appContext:c}=e;let u;if("$"!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return i[n];case 2:return s[n];case 4:return r[n];case 3:return o[n]}else{if(Fn(i,n))return a[n]=1,i[n];if(s!==t&&h(s,n))return a[n]=2,s[n];if((u=e.propsOptions[0])&&h(u,n))return a[n]=3,o[n];if(r!==t&&h(r,n))return a[n]=4,r[n];Bn&&(a[n]=0)}}const d=Mn[n];let f,p;return d?("$attrs"===n&&_e(e,0,n),d(e)):(f=l.__cssModules)&&(f=f[n])?f:r!==t&&h(r,n)?(a[n]=4,r[n]):(p=c.config.globalProperties,h(p,n)?p[n]:void 0)},set({_:e},n,r){const{data:i,setupState:s,ctx:o}=e;return Fn(s,n)?(s[n]=r,!0):i!==t&&h(i,n)?(i[n]=r,!0):!h(e.props,n)&&(("$"!==n[0]||!(n.slice(1)in e))&&(o[n]=r,!0))},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!r[a]||e!==t&&h(e,a)||Fn(n,a)||(l=o[0])&&h(l,a)||h(i,a)||h(Mn,a)||h(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function jn(e){return d(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Bn=!0;function qn(e){const t=Hn(e),n=e.proxy,i=e.ctx;Bn=!1,t.beforeCreate&&Wn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:b,beforeDestroy:w,beforeUnmount:k,destroyed:C,unmounted:E,render:I,renderTracked:T,renderTriggered:S,errorCaptured:x,serverPrefetch:R,expose:O,inheritAttrs:A,components:N,directives:P,filters:D}=t;if(u&&function(e,t,n=r){d(e)&&(e=Yn(e));for(const n in e){const r=e[n];let i;i=y(r)?"default"in r?ir(r.from||n,r.default,!0):ir(r.from||n):ir(r),yt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}(u,i,null),a)for(const e in a){const t=a[e];_(t)&&(i[e]=t.bind(n))}if(s){const t=s.call(n,n);y(t)&&(e.data=st(t))}if(Bn=!0,o)for(const e in o){const t=o[e],s=_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):r,a=!_(t)&&_(t.set)?t.set.bind(n):r,l=ci({get:s,set:a});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(l)for(const e in l)Vn(l[e],i,n,e);if(c){const e=_(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{rr(t,e[t])}))}function L(e,t){d(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Wn(h,e,"c"),L(wn,f),L(kn,p),L(Cn,m),L(En,g),L(mn,v),L(_n,b),L(On,x),L(Rn,T),L(xn,S),L(In,k),L(Tn,E),L(Sn,R),d(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===r&&(e.render=I),null!=A&&(e.inheritAttrs=A),N&&(e.components=N),P&&(e.directives=P)}function Wn(e,t,n){St(d(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Vn(e,t,n,r){const i=r.includes(".")?ln(n,r):()=>n[r];if(g(e)){const n=t[e];_(n)&&sn(i,n)}else if(_(e))sn(i,e.bind(n));else if(y(e))if(d(e))e.forEach((e=>Vn(e,t,n,r)));else{const r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&sn(i,r,e)}}function Hn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>$n(l,e,o,!0))),$n(l,t,o)):l=t,y(t)&&s.set(t,l),l}function $n(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$n(e,s,n,!0),i&&i.forEach((t=>$n(e,t,n,!0)));for(const i in t)if(r&&"expose"===i);else{const r=Gn[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const Gn={data:Kn,props:Xn,emits:Xn,methods:Jn,computed:Jn,beforeCreate:Zn,created:Zn,beforeMount:Zn,mounted:Zn,beforeUpdate:Zn,updated:Zn,beforeDestroy:Zn,beforeUnmount:Zn,destroyed:Zn,unmounted:Zn,activated:Zn,deactivated:Zn,errorCaptured:Zn,serverPrefetch:Zn,components:Jn,directives:Jn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=l(Object.create(null),e);for(const r in t)n[r]=Zn(e[r],t[r]);return n},provide:Kn,inject:function(e,t){return Jn(Yn(e),Yn(t))}};function Kn(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function Yn(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Zn(e,t){return e?[...new Set([].concat(e,t))]:t}function Jn(e,t){return e?l(Object.create(null),e,t):t}function Xn(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:l(Object.create(null),jn(e),jn(null!=t?t:{})):t}function Qn(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function tr(e,t){return function(n,r=null){_(n)||(n=l({},n)),null==r||y(r)||(r=null);const i=Qn(),s=new Set;let o=!1;const a=i.app={_uid:er++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:fi,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&_(e.install)?(s.add(e),e.install(a,...t)):_(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=Br(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,li(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a),runWithContext(e){nr=a;try{return e()}finally{nr=null}}};return a}}let nr=null;function rr(e,t){if(Qr){let n=Qr.provides;const r=Qr.parent&&Qr.parent.provides;r===n&&(n=Qr.provides=Object.create(r)),n[e]=t}else;}function ir(e,t,n=!1){const r=Qr||Yt;if(r||nr){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}function sr(e,n,r,i){const[s,o]=e.propsOptions;let a,l=!1;if(n)for(let t in n){if(T(t))continue;const c=n[t];let u;s&&h(s,u=R(t))?o&&o.includes(u)?(a||(a={}))[u]=c:r[u]=c:Kt(e.emitsOptions,t)||t in i&&c===i[t]||(i[t]=c,l=!0)}if(o){const n=ft(r),i=a||t;for(let t=0;t<o.length;t++){const a=o[t];r[a]=or(s,n,a,i[a],e,!h(i,a))}}return l}function or(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=h(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(ti(i),r=s[n]=e.call(null,t),ni())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==A(n)||(r=!0))}return r}function ar(e,r,i=!1){const s=r.propsCache,o=s.get(e);if(o)return o;const a=e.props,c={},u=[];let f=!1;if(!_(e)){const t=e=>{f=!0;const[t,n]=ar(e,r,!0);l(c,t),n&&u.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!a&&!f)return y(e)&&s.set(e,n),n;if(d(a))for(let e=0;e<a.length;e++){const n=R(a[e]);lr(n)&&(c[n]=t)}else if(a)for(const e in a){const t=R(e);if(lr(t)){const n=a[e],r=c[t]=d(n)||_(n)?{type:n}:l({},n);if(r){const e=hr(Boolean,r.type),n=hr(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||h(r,"default"))&&u.push(t)}}}const p=[c,u];return y(e)&&s.set(e,p),p}function lr(e){return"$"!==e[0]}function cr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ur(e,t){return cr(e)===cr(t)}function hr(e,t){return d(t)?t.findIndex((t=>ur(t,e))):_(t)&&ur(t,e)?0:-1}const dr=e=>"_"===e[0]||"$stable"===e,fr=e=>d(e)?e.map(Hr):[Hr(e)],pr=(e,t,n)=>{if(t._n)return t;const r=Xt(((...e)=>fr(t(...e))),n);return r._c=!1,r},mr=(e,t,n)=>{const r=e._ctx;for(const n in e){if(dr(n))continue;const i=e[n];if(_(i))t[n]=pr(0,i,r);else if(null!=i){const e=fr(i);t[n]=()=>e}}},_r=(e,t)=>{const n=fr(t);e.slots.default=()=>n},gr=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ft(t),U(t,"_",n)):mr(t,e.slots={})}else e.slots={},t&&_r(e,t);U(e.slots,Mr,1)},vr=(e,n,r)=>{const{vnode:i,slots:s}=e;let o=!0,a=t;if(32&i.shapeFlag){const e=n._;e?r&&1===e?o=!1:(l(s,n),r||1!==e||delete s._):(o=!n.$stable,mr(n,s)),a=n}else n&&(_r(e,n),a={default:1});if(o)for(const e in s)dr(e)||e in a||delete s[e]};function yr(e,n,r,i,s=!1){if(d(e))return void e.forEach(((e,t)=>yr(e,n&&(d(n)?n[t]:n),r,i,s)));if(fn(i)&&!s)return;const o=4&i.shapeFlag?li(i.component)||i.component.proxy:i.el,a=s?null:o,{i:l,r:u}=e,f=n&&n.r,p=l.refs===t?l.refs={}:l.refs,m=l.setupState;if(null!=f&&f!==u&&(g(f)?(p[f]=null,h(m,f)&&(m[f]=null)):yt(f)&&(f.value=null)),_(u))Tt(u,l,12,[a,p]);else{const t=g(u),n=yt(u);if(t||n){const i=()=>{if(e.f){const n=t?h(m,u)?m[u]:p[u]:u.value;s?d(n)&&c(n,o):d(n)?n.includes(o)||n.push(o):t?(p[u]=[o],h(m,u)&&(m[u]=p[u])):(u.value=[o],e.k&&(p[e.k]=u.value))}else t?(p[u]=a,h(m,u)&&(m[u]=a)):n&&(u.value=a,e.k&&(p[e.k]=a))};a?(i.id=-1,br(i,r)):i()}}}const br=function(e,t){var n;t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):(d(n=e)?Pt.push(...n):Dt&&Dt.includes(n,n.allowRecurse?Lt+1:Lt)||Pt.push(n),jt())};function wr(e){return function(e,i){z().__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:d,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=r,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ur(e,t)&&(r=ee(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ir:y(e,t,n,r);break;case Tr:w(e,t,n,r);break;case Sr:null==e&&k(t,n,r,o);break;case Er:M(e,t,n,r,i,s,o,a,l);break;default:1&h?I(e,t,n,r,i,s,o,a,l):6&h?F(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,ne)}null!=u&&i&&yr(u,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},C=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=m(e),s(e,n,r),e=i;s(t,n,r)},E=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),o(e),e=n;o(t)},I=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,l):N(e,t,i,s,o,a,l)},S=(e,t,n,r,i,o,c,u)=>{let h,d;const{type:p,props:m,shapeFlag:_,transition:g,dirs:v}=e;if(h=e.el=l(e.type,o,m&&m.is,m),8&_?f(h,e.children):16&_&&O(e.children,h,null,r,i,o&&"foreignObject"!==p,c,u),v&&hn(e,null,r,"created"),x(h,e,e.scopeId,c,r),m){for(const t in m)"value"===t||T(t)||a(h,t,null,m[t],o,e.children,r,i,X);"value"in m&&a(h,"value",null,m.value),(d=m.onVnodeBeforeMount)&&Kr(d,r,e)}v&&hn(e,null,r,"beforeMount");const y=(!i||i&&!i.pendingBranch)&&g&&!g.persisted;y&&g.beforeEnter(h),s(h,t,n),((d=m&&m.onVnodeMounted)||y||v)&&br((()=>{d&&Kr(d,r,e),y&&g.enter(h),v&&hn(e,null,r,"mounted")}),i)},x=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let t=0;t<r.length;t++)_(e,r[t]);if(i){if(t===i.subTree){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?$r(e[c]):Hr(e[c]);v(null,l,t,n,r,i,s,o,a)}},N=(e,n,r,i,s,o,l)=>{const c=n.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=n;u|=16&e.patchFlag;const p=e.props||t,m=n.props||t;let _;r&&kr(r,!1),(_=m.onVnodeBeforeUpdate)&&Kr(_,r,n,e),d&&hn(n,e,r,"beforeUpdate"),r&&kr(r,!0);const g=s&&"foreignObject"!==n.type;if(h?P(e.dynamicChildren,h,c,r,i,g,o):l||V(e,n,c,null,r,i,g,o,!1),u>0){if(16&u)D(c,n,p,m,r,i,s);else if(2&u&&p.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",p.style,m.style,s),8&u){const t=n.dynamicProps;for(let n=0;n<t.length;n++){const o=t[n],l=p[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,r,i,X)}}1&u&&e.children!==n.children&&f(c,n.children)}else l||null!=h||D(c,n,p,m,r,i,s);((_=m.onVnodeUpdated)||d)&&br((()=>{_&&Kr(_,r,n,e),d&&hn(n,e,r,"updated")}),i)},P=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Er||!Ur(l,c)||70&l.shapeFlag)?p(l.el):n;v(l,c,u,null,r,i,s,o,!0)}},D=(e,n,r,i,s,o,l)=>{if(r!==i){if(r!==t)for(const t in r)T(t)||t in i||a(e,t,r[t],null,l,n.children,s,o,X);for(const t in i){if(T(t))continue;const c=i[t],u=r[t];c!==u&&"value"!==t&&a(e,t,u,c,l,n.children,s,o,X)}"value"in i&&a(e,"value",r.value,i.value)}},M=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,r),s(d,n,r),O(t.children,n,d,i,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(P(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&Cr(e,t,!0)):V(e,t,n,d,i,o,a,l,u)},F=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):j(t,n,r,i,s,o,l):B(e,t,l)},j=(e,n,r,i,s,o,a)=>{const l=e.component=function(e,n,r){const i=e.type,s=(n?n.appContext:e.appContext)||Yr,o={uid:Zr++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ar(i,s),emitsOptions:Gt(i,s),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};o.ctx={_:o},o.root=n?n.root:o,o.emit=$t.bind(null,o),e.ce&&e.ce(o);return o}(e,i,s);if(pn(e)&&(l.ctx.renderer=ne),function(e,t=!1){si=t;const{props:n,children:r}=e.vnode,i=ri(e);(function(e,t,n,r=!1){const i={},s={};U(s,Mr,1),e.propsDefaults=Object.create(null),sr(e,t,i,s);for(const t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:ot(i):e.type.props?e.props=i:e.props=s,e.attrs=s})(e,n,i,t),gr(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=pt(new Proxy(e.ctx,zn));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(_e(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;ti(e),pe();const i=Tt(r,e,0,[e.props,n]);if(me(),ni(),b(i)){if(i.then(ni,ni),t)return i.then((n=>{oi(e,n,t)})).catch((t=>{xt(t,e,0)}));e.asyncDep=i}else oi(e,i,t)}else ai(e,t)}(e,t):void 0;si=!1}(l),l.asyncDep){if(s&&s.registerDep(l,q),!e.el){const e=l.subTree=Br(Tr);w(null,e,n,r)}}else q(l,e,n,r,s,o,a)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||nn(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?nn(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Kt(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,function(e){const t=At.indexOf(e);t>Nt&&At.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},q=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:l,vnode:c}=e,u=n;kr(e,!1),n?(n.el=c.el,W(e,n,o)):n=c,r&&L(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Kr(t,l,n,c),kr(e,!0);const h=Qt(e),d=e.subTree;e.subTree=h,v(d,h,p(d.el),ee(d),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&br(a,i),(t=n.props&&n.props.onVnodeUpdated)&&br((()=>Kr(t,l,n,c)),i)}else{let o;const{el:a,props:l}=t,{bm:c,m:u,parent:h}=e,d=fn(t);if(kr(e,!1),c&&L(c),!d&&(o=l&&l.onVnodeBeforeMount)&&Kr(o,h,t),kr(e,!0),a&&ie){const n=()=>{e.subTree=Qt(e),ie(a,e.subTree,e,i,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Qt(e);v(null,o,n,r,e,i,s),t.el=o.el}if(u&&br(u,i),!d&&(o=l&&l.onVnodeMounted)){const e=t;br((()=>Kr(o,h,e)),i)}(256&t.shapeFlag||h&&fn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&br(e.a,i),e.isMounted=!0,t=n=r=null}},l=e.effect=new ue(a,(()=>zt(c)),e.scope),c=e.update=()=>l.run();c.id=e.uid,kr(e,!0),c()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ft(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;sr(e,t,i,s)&&(c=!0);for(const s in a)t&&(h(t,s)||(r=A(s))!==s&&h(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=or(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&h(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Kt(e.emitsOptions,o))continue;const u=t[o];if(l)if(h(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=R(o);i[t]=or(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&ve(e,"set","$attrs")}(e,t.props,r,n),vr(e,t.children,n),pe(),Bt(),me()},V=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void $(c,h,n,r,i,s,o,a,l);if(256&d)return void H(c,h,n,r,i,s,o,a,l)}8&p?(16&u&&X(c,i,s),h!==c&&f(n,h)):16&u?16&p?$(c,h,n,r,i,s,o,a,l):X(c,i,s,!0):(8&u&&f(n,""),16&p&&O(h,n,r,i,s,o,a,l))},H=(e,t,r,i,s,o,a,l,c)=>{t=t||n;const u=(e=e||n).length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const n=t[f]=c?$r(t[f]):Hr(t[f]);v(e[f],n,r,null,s,o,a,l,c)}u>h?X(e,s,o,!0,!1,d):O(t,r,i,s,o,a,l,c,d)},$=(e,t,r,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;for(;u<=d&&u<=f;){const n=e[u],i=t[u]=c?$r(t[u]):Hr(t[u]);if(!Ur(n,i))break;v(n,i,r,null,s,o,a,l,c),u++}for(;u<=d&&u<=f;){const n=e[d],i=t[f]=c?$r(t[f]):Hr(t[f]);if(!Ur(n,i))break;v(n,i,r,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,n=e<h?t[e].el:i;for(;u<=f;)v(null,t[u]=c?$r(t[u]):Hr(t[u]),r,n,s,o,a,l,c),u++}}else if(u>f)for(;u<=d;)K(e[u],s,o,!0),u++;else{const p=u,m=u,_=new Map;for(u=m;u<=f;u++){const e=t[u]=c?$r(t[u]):Hr(t[u]);null!=e.key&&_.set(e.key,u)}let g,y=0;const b=f-m+1;let w=!1,k=0;const C=new Array(b);for(u=0;u<b;u++)C[u]=0;for(u=p;u<=d;u++){const n=e[u];if(y>=b){K(n,s,o,!0);continue}let i;if(null!=n.key)i=_.get(n.key);else for(g=m;g<=f;g++)if(0===C[g-m]&&Ur(n,t[g])){i=g;break}void 0===i?K(n,s,o,!0):(C[i-m]=u+1,i>=k?k=i:w=!0,v(n,t[i],r,null,s,o,a,l,c),y++)}const E=w?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(C):n;for(g=E.length-1,u=b-1;u>=0;u--){const e=m+u,n=t[e],d=e+1<h?t[e+1].el:i;0===C[u]?v(null,n,r,d,s,o,a,l,c):w&&(g<0||u!==E[g]?G(n,r,d,2):g--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Er){s(o,t,n);for(let e=0;e<c.length;e++)G(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===Sr)return void C(e,t,n);if(2!==r&&1&u&&l)if(0===r)l.beforeEnter(o),s(o,t,n),br((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&yr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!fn(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Kr(m,t,e),6&u)J(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&hn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ne,r):c&&(s!==Er||h>0&&64&h)?X(c,t,n,!1,!0):(s===Er&&384&h||!i&&16&u)&&X(l,t,n),r&&Y(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&br((()=>{m&&Kr(m,t,e),f&&hn(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Er)return void Z(n,r);if(t===Sr)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Z=(e,t)=>{let n;for(;e!==t;)n=m(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&L(r),i.stop(),s&&(s.active=!1,K(o,e,t,n)),a&&br(a,t),br((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},ee=e=>6&e.shapeFlag?ee(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),te=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Bt(),qt(),t._vnode=e},ne={p:v,um:K,m:G,r:Y,mt:j,mc:O,pc:V,pbc:P,n:ee,o:e};let re,ie;i&&([re,ie]=i(ne));return{render:te,hydrate:re,createApp:tr(te,re)}}(e)}function kr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cr(e,t,n=!1){const r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){const t=r[e];let s=i[e];1&s.shapeFlag&&!s.dynamicChildren&&((s.patchFlag<=0||32===s.patchFlag)&&(s=i[e]=$r(i[e]),s.el=t.el),n||Cr(t,s)),s.type===Ir&&(s.el=t.el)}}const Er=Symbol.for("v-fgt"),Ir=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),xr=[];let Rr=null;function Or(e=!1){xr.push(Rr=e?null:[])}let Ar=1;function Nr(e){Ar+=e}function Pr(e){return e.dynamicChildren=Ar>0?Rr||n:null,xr.pop(),Rr=xr[xr.length-1]||null,Ar>0&&Rr&&Rr.push(e),e}function Dr(e,t,n,r,i,s){return Pr(jr(e,t,n,r,i,s,!0))}function Lr(e){return!!e&&!0===e.__v_isVNode}function Ur(e,t){return e.type===t.type&&e.key===t.key}const Mr="__vInternal",Fr=({key:e})=>null!=e?e:null,zr=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?g(e)||yt(e)||_(e)?{i:Yt,r:e,k:t,f:!!n}:e:null);function jr(e,t=null,n=null,r=0,i=null,s=(e===Er?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fr(t),ref:t&&zr(t),scopeId:Zt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Gr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=g(n)?8:16),Ar>0&&!o&&Rr&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Rr.push(l),l}const Br=function(e,t=null,n=null,r=0,i=null,s=!1){e&&e!==Pn||(e=Tr);if(Lr(e)){const r=qr(e,t,!0);return n&&Gr(r,n),Ar>0&&!s&&Rr&&(6&r.shapeFlag?Rr[Rr.indexOf(e)]=r:Rr.push(r)),r.patchFlag|=-2,r}o=e,_(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?dt(e)||Mr in e?l({},e):e:null}(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=H(e)),y(n)&&(dt(n)&&!d(n)&&(n=l({},n)),t.style=j(n))}const a=g(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:y(e)?4:_(e)?2:0;return jr(e,t,n,r,i,a,s,!0)};function qr(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=H([t.class,r.class]));else if("style"===e)t.style=j([t.style,r.style]);else if(o(e)){const n=t[e],i=r[e];!i||n===i||d(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Fr(l),ref:t&&t.ref?n&&i?d(i)?i.concat(zr(t)):[i,zr(t)]:zr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Er?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qr(e.ssContent),ssFallback:e.ssFallback&&qr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wr(e=" ",t=0){return Br(Ir,null,e,t)}function Vr(e="",t=!1){return t?(Or(),Pr(Br(Tr,null,e,n,r,!0))):Br(Tr,null,e);var n,r}function Hr(e){return null==e||"boolean"==typeof e?Br(Tr):d(e)?Br(Er,null,e.slice()):"object"==typeof e?$r(e):Br(Ir,null,String(e))}function $r(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:qr(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(d(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Gr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Mr in t?3===r&&Yt&&(1===Yt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Yt}}else _(t)?(t={default:t,_ctx:Yt},n=32):(t=String(t),64&r?(n=16,t=[Wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kr(e,t,n,r=null){St(e,t,7,[n,r])}const Yr=Qn();let Zr=0;let Jr,Xr,Qr=null,ei="__VUE_INSTANCE_SETTERS__";(Xr=z()[ei])||(Xr=z()[ei]=[]),Xr.push((e=>Qr=e)),Jr=e=>{Xr.length>1?Xr.forEach((t=>t(e))):Xr[0](e)};const ti=e=>{Jr(e),e.scope.on()},ni=()=>{Qr&&Qr.scope.off(),Jr(null)};function ri(e){return 4&e.vnode.shapeFlag}let ii,si=!1;function oi(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Et(t)),ai(e,n)}function ai(e,t,n){const i=e.type;if(!e.render){if(!t&&ii&&!i.render){const t=i.template||Hn(e).template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:o}=i,a=l(l({isCustomElement:n,delimiters:s},r),o);i.render=ii(t,a)}}e.render=i.render||r}ti(e),pe(),qn(e),me(),ni()}function li(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Et(pt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Mn?Mn[n](e):void 0,has:(e,t)=>t in e||t in Mn}))}const ci=(e,t)=>function(e,t,n=!1){let i,s;const o=_(e);return o?(i=e,s=r):(i=e.get,s=e.set),new It(i,s,o||!s,n)}(e,0,si);function ui(e,t,n){const r=arguments.length;return 2===r?y(t)&&!d(t)?Lr(t)?Br(e,null,[t]):Br(e,t):Br(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Lr(n)&&(n=[n]),Br(e,t,n))}const hi=Symbol.for("v-scx"),di=()=>ir(hi),fi="3.3.4",pi="undefined"!=typeof document?document:null,mi=pi&&pi.createElement("template"),_i={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?pi.createElementNS("http://www.w3.org/2000/svg",e):pi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>pi.createTextNode(e),createComment:e=>pi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==s&&(i=i.nextSibling););else{mi.innerHTML=r?`<svg>${e}</svg>`:e;const i=mi.content;if(r){const e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const gi=/\s*!important$/;function vi(e,t,n){if(d(n))n.forEach((n=>vi(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=bi[t];if(n)return n;let r=R(t);if("filter"!==r&&r in e)return bi[t]=r;r=N(r);for(let n=0;n<yi.length;n++){const i=yi[n]+r;if(i in e)return bi[t]=i}return t}(e,t);gi.test(n)?e.setProperty(A(r),n.replace(gi,""),"important"):e[r]=n}}const yi=["Webkit","Moz","ms"],bi={};const wi="http://www.w3.org/1999/xlink";function ki(e,t,n,r){e.addEventListener(t,n,r)}function Ci(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Ei.test(e)){let n;for(t={};n=e.match(Ei);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):A(e.slice(2));return[n,t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();St(function(e,t){if(d(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=Si(),n}(r,i);ki(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const Ei=/(?:Once|Passive|Capture)$/;let Ii=0;const Ti=Promise.resolve(),Si=()=>Ii||(Ti.then((()=>Ii=0)),Ii=Date.now());const xi=/^on[a-z]/;const Ri=e=>{const t=e.props["onUpdate:modelValue"]||!1;return d(t)?e=>L(t,e):t};function Oi(e){e.target.composing=!0}function Ai(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ni={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Ri(i);const s=r||i.props&&"number"===i.props.type;ki(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=M(r)),e._assign(r)})),n&&ki(e,"change",(()=>{e.value=e.value.trim()})),t||(ki(e,"compositionstart",Oi),ki(e,"compositionend",Ai),ki(e,"change",Ai))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Ri(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&M(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Pi={deep:!0,created(e,t,n){e._assign=Ri(n),ki(e,"change",(()=>{const t=e._modelValue,n=Ui(e),r=e.checked,i=e._assign;if(d(t)){const e=Y(t,n),s=-1!==e;if(r&&!s)i(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),i(n)}}else if(p(t)){const e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Mi(e,r))}))},mounted:Di,beforeUpdate(e,t,n){e._assign=Ri(n),Di(e,t,n)}};function Di(e,{value:t,oldValue:n},r){e._modelValue=t,d(t)?e.checked=Y(t,r.props.value)>-1:p(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=K(t,Mi(e,!0)))}const Li={created(e,{value:t},n){e.checked=K(t,n.props.value),e._assign=Ri(n),ki(e,"change",(()=>{e._assign(Ui(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Ri(r),t!==n&&(e.checked=K(t,r.props.value))}};function Ui(e){return"_value"in e?e._value:e.value}function Mi(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Fi=["ctrl","shift","alt","meta"],zi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Fi.some((n=>e[`${n}Key`]&&!t.includes(n)))},ji=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=zi[t[e]];if(r&&r(n,t))return}return e(n,...r)},Bi={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):qi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),qi(e,!0),r.enter(e)):r.leave(e,(()=>{qi(e,!1)})):qi(e,t))},beforeUnmount(e,{value:t}){qi(e,t)}};function qi(e,t){e.style.display=t?e._vod:"none"}const Wi=l({patchProp:(e,t,n,r,i=!1,s,l,c,u)=>{"class"===t?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,i):"style"===t?function(e,t,n){const r=e.style,i=g(n);if(n&&!i){if(t&&!g(t))for(const e in t)null==n[e]&&vi(r,e,"");for(const e in n)vi(r,e,n[e])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}(e,n,r):o(t)?a(t)||Ci(e,t,0,r,l):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&xi.test(t)&&_(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(xi.test(t)&&g(n))return!1;return t in e}(e,t,r,i))?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const r=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=G(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(e){}l&&e.removeAttribute(t)}(e,t,r,s,l,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const r=$(t);null==n||r&&!G(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,i))}},_i);let Vi;function Hi(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const $i="function"==typeof Proxy,Gi="devtools-plugin:setup";let Ki,Yi;function Zi(){return void 0!==Ki||("undefined"!=typeof window&&window.performance?(Ki=!0,Yi=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(Ki=!0,Yi=global.perf_hooks.performance):Ki=!1),Ki?Yi.now():Date.now();var e}class Ji{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const r=e.settings[t];n[t]=r.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(e){}this.fallbacks={getSettings:()=>i,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}i=e},now:()=>Zi()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function Xi(e,t){const n=e,r=Hi(),i=Hi().__VUE_DEVTOOLS_GLOBAL_HOOK__,s=$i&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const e=s?new Ji(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(Gi,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Qi="store";function es(e){return void 0===e&&(e=null),ir(null!==e?e:Qi)}function ts(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function ns(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function rs(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ss(e,n,[],e._modules.root,!0),is(e,n,t)}function is(e,t,n){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={},a={},l=new Q(!0);l.run((function(){ts(s,(function(t,n){o[n]=function(e,t){return function(){return e(t)}}(t,e),a[n]=ci((function(){return o[n]()})),Object.defineProperty(e.getters,n,{get:function(){return a[n].value},enumerable:!0})}))})),e._state=st({data:t}),e._scope=l,e.strict&&function(e){sn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null})),i&&i.stop()}function ss(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=as(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=ls(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=ls(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return os(e,t)}},state:{get:function(){return as(e.state,n)}}}),i}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;!function(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i,s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,r,i,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,s){ss(e,t,n.concat(s),r,i)}))}function os(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function as(e,t){return t.reduce((function(e,t){return e[t]}),e)}function ls(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var cs="vuex:mutations",us="vuex:actions",hs="vuex",ds=0;function fs(e,t){Xi({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:cs,label:"Vuex Mutations",color:ps}),n.addTimelineLayer({id:us,label:"Vuex Actions",color:ps}),n.addInspector({id:hs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===hs)if(n.filter){var r=[];vs(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[gs(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===hs){var r=n.nodeId;os(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=ys((function(){return e[n]}))}else t[n]=ys((function(){return e[n]}))})),t}(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?_s(e):e,editable:!1,value:ys((function(){return s[e]}))}}))}return i}((i=t._modules,(o=(s=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?r:r._children}),"root"===s?i:i.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var i,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===hs){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(hs),n.sendInspectorState(hs),n.addTimelineEvent({layerId:cs,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=ds++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:us,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:us,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var ps=8702998,ms={label:"namespaced",textColor:16777215,backgroundColor:6710886};function _s(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function gs(e,t){return{id:t||"root",label:_s(t),tags:e.namespaced?[ms]:[],children:Object.keys(e._children).map((function(n){return gs(e._children[n],t+n+"/")}))}}function vs(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[ms]:[]}),Object.keys(t._children).forEach((function(i){vs(e,t._children[i],n,r+i+"/")}))}function ys(e){try{return e()}catch(e){return e}}var bs=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},ws={namespaced:{configurable:!0}};ws.namespaced.get=function(){return!!this._rawModule.namespaced},bs.prototype.addChild=function(e,t){this._children[e]=t},bs.prototype.removeChild=function(e){delete this._children[e]},bs.prototype.getChild=function(e){return this._children[e]},bs.prototype.hasChild=function(e){return e in this._children},bs.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},bs.prototype.forEachChild=function(e){ts(this._children,e)},bs.prototype.forEachGetter=function(e){this._rawModule.getters&&ts(this._rawModule.getters,e)},bs.prototype.forEachAction=function(e){this._rawModule.actions&&ts(this._rawModule.actions,e)},bs.prototype.forEachMutation=function(e){this._rawModule.mutations&&ts(this._rawModule.mutations,e)},Object.defineProperties(bs.prototype,ws);var ks=function(e){this.register([],e,!1)};function Cs(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Cs(e.concat(r),t.getChild(r),n.modules[r])}}ks.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},ks.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},ks.prototype.update=function(e){Cs([],this.root,e)},ks.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new bs(t,n);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i);t.modules&&ts(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},ks.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},ks.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Es=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ks(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;ss(this,l,[],this._modules.root),is(this,l),n.forEach((function(e){return e(t)}))},Is={state:{configurable:!0}};Es.prototype.install=function(e,t){e.provide(t||Qi,this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&fs(e,this)},Is.state.get=function(){return this._state.data},Is.state.set=function(e){},Es.prototype.commit=function(e,t,n){var r=this,i=ls(e,t,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Es.prototype.dispatch=function(e,t){var n=this,r=ls(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(e){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(e){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(e){}t(e)}))}))}},Es.prototype.subscribe=function(e,t){return ns(e,this._subscribers,t)},Es.prototype.subscribeAction=function(e,t){return ns("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Es.prototype.watch=function(e,t,n){var r=this;return sn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},Es.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Es.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),ss(this,this.state,e,this._modules.get(e),n.preserveState),is(this,this.state)},Es.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete as(t.state,e.slice(0,-1))[e[e.length-1]]})),rs(this)},Es.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Es.prototype.hotUpdate=function(e){this._modules.update(e),rs(this,!0)},Es.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Es.prototype,Is);
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
const Ts=!1,Ss="${JSCORE_VERSION}",xs=function(e,t){if(!e)throw Rs(t)},Rs=function(e){return new Error("Firebase Database ("+Ss+") INTERNAL ASSERT FAILED: "+e)},Os=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Os(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Ns;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ns extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ps=function(e){const t=Os(e);return As.encodeByteArray(t,!0)},Ds=function(e){return Ps(e).replace(/\./g,"")},Ls=function(e){try{return As.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Us(e){return Ms(void 0,e)}function Ms(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Ms(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
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
const Fs=()=>
/**
 * @license
 * Copyright 2022 Google LLC
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,zs=()=>{try{return Fs()||(()=>{if("undefined"==typeof process||void 0==={NODE_ENV:"production"})return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ls(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},js=e=>{var t,n;return null===(n=null===(t=zs())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Bs=e=>{const t=js(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},qs=()=>{var e;return null===(e=zs())||void 0===e?void 0:e.config},Ws=e=>{var t;return null===(t=zs())||void 0===t?void 0:t[`_${e}`]};
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
class Vs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function Hs(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ds(JSON.stringify({alg:"none",type:"JWT"})),Ds(JSON.stringify(s)),""].join(".")}
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
 */function $s(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Gs(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($s())}function Ks(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ys(){return!0===Ts}class Zs extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Zs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Xs,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Zs(r,o,n)}}const Xs=/\{\$([^}]+)}/g;
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
 */function Qs(e){return JSON.parse(e)}function eo(e){return JSON.stringify(e)}
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
 */const to=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Qs(Ls(s[0])||""),n=Qs(Ls(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
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
function no(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ro(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function io(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function so(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function oo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ao(n)&&ao(s)){if(!oo(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ao(e){return null!==e&&"object"==typeof e}
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
 */function lo(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function co(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function uo(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class ho{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}class fo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=po),void 0===r.error&&(r.error=po),void 0===r.complete&&(r.complete=po);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function po(){}function mo(e,t){return`${e} failed: ${t} argument `}
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
 */const _o=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function go(e){return e&&e._delegate?e._delegate:e}class vo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const yo="[DEFAULT]";
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
 */class bo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Vs;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:yo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=yo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=yo){return this.instances.has(e)}getOptions(e=yo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===yo?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=yo){return this.component?this.component.multipleInstances?e:yo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class wo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new bo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var ko,Co;(Co=ko||(ko={}))[Co.DEBUG=0]="DEBUG",Co[Co.VERBOSE=1]="VERBOSE",Co[Co.INFO=2]="INFO",Co[Co.WARN=3]="WARN",Co[Co.ERROR=4]="ERROR",Co[Co.SILENT=5]="SILENT";const Eo={debug:ko.DEBUG,verbose:ko.VERBOSE,info:ko.INFO,warn:ko.WARN,error:ko.ERROR,silent:ko.SILENT},Io=ko.INFO,To={[ko.DEBUG]:"log",[ko.VERBOSE]:"log",[ko.INFO]:"info",[ko.WARN]:"warn",[ko.ERROR]:"error"},So=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=To[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class xo{constructor(e){this.name=e,this._logLevel=Io,this._logHandler=So,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ko))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Eo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ko.DEBUG,...e),this._logHandler(this,ko.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ko.VERBOSE,...e),this._logHandler(this,ko.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ko.INFO,...e),this._logHandler(this,ko.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ko.WARN,...e),this._logHandler(this,ko.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ko.ERROR,...e),this._logHandler(this,ko.ERROR,...e)}}const Ro=(e,t)=>t.some((t=>e instanceof t));let Oo,Ao;const No=new WeakMap,Po=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Uo=new WeakMap;let Mo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Po.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Do.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jo(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Bo(this),t),jo(No.get(this))}:function(...t){return jo(e.apply(Bo(this),t))}:function(t,...n){const r=e.call(Bo(this),t,...n);return Do.set(r,t.sort?t.sort():[t]),jo(r)}}function zo(e){return"function"==typeof e?Fo(e):(e instanceof IDBTransaction&&function(e){if(Po.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Po.set(e,t)}(e),Ro(e,Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Mo):e)}function jo(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(jo(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&No.set(t,e)})).catch((()=>{})),Uo.set(t,e),t}(e);if(Lo.has(e))return Lo.get(e);const t=zo(e);return t!==e&&(Lo.set(e,t),Uo.set(t,e)),t}const Bo=e=>Uo.get(e);const qo=["get","getKey","getAll","getAllKeys","count"],Wo=["put","add","delete","clear"],Vo=new Map;function Ho(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Vo.get(t))return Vo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Wo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!qo.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Vo.set(t,s),s}Mo=(e=>({...e,get:(t,n,r)=>Ho(t,n)||e.get(t,n,r),has:(t,n)=>!!Ho(t,n)||e.has(t,n)}))(Mo);
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
class $o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Go="@firebase/app",Ko="0.9.13",Yo=new xo("@firebase/app"),Zo="[DEFAULT]",Jo={[Go]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Xo=new Map,Qo=new Map;function ea(e,t){try{e.container.addComponent(t)}catch(n){Yo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ta(e){const t=e.name;if(Qo.has(t))return Yo.debug(`There were multiple attempts to register component ${t}.`),!1;Qo.set(t,e);for(const t of Xo.values())ea(t,e);return!0}function na(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const ra=new Js("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ia{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ra.create("app-deleted",{appName:this._name})}}
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
 */const sa="9.23.0";function oa(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Zo,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ra.create("bad-app-name",{appName:String(i)});if(n||(n=qs()),!n)throw ra.create("no-options");const s=Xo.get(i);if(s){if(oo(n,s.options)&&oo(r,s.config))return s;throw ra.create("duplicate-app",{appName:i})}const o=new wo(i);for(const e of Qo.values())o.addComponent(e);const a=new ia(n,r,o);return Xo.set(i,a),a}function aa(e=Zo){const t=Xo.get(e);if(!t&&e===Zo&&qs())return oa();if(!t)throw ra.create("no-app",{appName:e});return t}function la(e,t,n){var r;let i=null!==(r=Jo[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Yo.warn(e.join(" "))}ta(new vo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */const ca="firebase-heartbeat-database",ua=1,ha="firebase-heartbeat-store";let da=null;function fa(){return da||(da=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=jo(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(jo(o.result),e.oldVersion,e.newVersion,jo(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(ca,ua,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ha)}}).catch((e=>{throw ra.create("idb-open",{originalErrorMessage:e.message})}))),da}async function pa(e,t){try{const n=(await fa()).transaction(ha,"readwrite"),r=n.objectStore(ha);await r.put(t,ma(e)),await n.done}catch(e){if(e instanceof Zs)Yo.warn(e.message);else{const t=ra.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}function ma(e){return`${e.name}!${e.options.appId}`}
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
 */class _a{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new va(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ga();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ga(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ya(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ya(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ds(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ga(){return(new Date).toISOString().substring(0,10)}class va{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await fa();return await t.transaction(ha).objectStore(ha).get(ma(e))}catch(e){if(e instanceof Zs)Yo.warn(e.message);else{const t=ra.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pa(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pa(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ya(e){return Ds(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ba;ba="",ta(new vo("platform-logger",(e=>new $o(e)),"PRIVATE")),ta(new vo("heartbeat",(e=>new _a(e)),"PRIVATE")),la(Go,Ko,ba),la(Go,Ko,"esm2017"),la("fire-js","");const wa="@firebase/database",ka="0.14.4";
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
let Ca="";
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
class Ea{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),eo(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Qs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class Ia{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return no(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const Ta=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ea(t)}}catch(e){}return new Ia},Sa=Ta("localStorage"),xa=Ta("sessionStorage"),Ra=new xo("@firebase/database"),Oa=function(){let e=1;return function(){return e++}}(),Aa=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,xs(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new ho;n.update(t);const r=n.digest();return As.encodeByteArray(r)},Na=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Na.apply(null,r):t+="object"==typeof r?eo(r):r,t+=" "}return t};let Pa=null,Da=!0;const La=function(...e){var t,n;if(!0===Da&&(Da=!1,null===Pa&&!0===xa.get("logging_enabled")&&(t=!0,xs(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Ra.logLevel=ko.VERBOSE,Pa=Ra.log.bind(Ra),n&&xa.set("logging_enabled",!0)):"function"==typeof t?Pa=t:(Pa=null,xa.remove("logging_enabled")))),Pa){const t=Na.apply(null,e);Pa(t)}},Ua=function(e){return function(...t){La(e,...t)}},Ma=function(...e){const t="FIREBASE INTERNAL ERROR: "+Na(...e);Ra.error(t)},Fa=function(...e){const t=`FIREBASE FATAL ERROR: ${Na(...e)}`;throw Ra.error(t),new Error(t)},za=function(...e){const t="FIREBASE WARNING: "+Na(...e);Ra.warn(t)},ja=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ba="[MIN_NAME]",qa="[MAX_NAME]",Wa=function(e,t){if(e===t)return 0;if(e===Ba||t===qa)return-1;if(t===Ba||e===qa)return 1;{const n=Ja(e),r=Ja(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Va=function(e,t){return e===t?0:e<t?-1:1},Ha=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+eo(t))},$a=function(e){if("object"!=typeof e||null===e)return eo(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=eo(t[r]),n+=":",n+=$a(e[t[r]]);return n+="}",n},Ga=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ka(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ya=function(e){xs(!ja(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Za=new RegExp("^-?(0*)\\d{1,10}$"),Ja=function(e){if(Za.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Xa=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw za("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Qa=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class el{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){za(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class tl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(La("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',za(e)}}class nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nl.OWNER="owner";
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
const rl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,il="ac",sl="websocket",ol="long_polling";
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
class al{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Sa.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Sa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ll(e,t,n){let r;if(xs("string"==typeof t,"typeof type must == string"),xs("object"==typeof n,"typeof params must == object"),t===sl)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ol)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Ka(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class cl{constructor(){this.counters_={}}incrementCounter(e,t=1){no(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Us(this.counters_)}}
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
 */const ul={},hl={};function dl(e){const t=e.toString();return ul[t]||(ul[t]=new cl),ul[t]}
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
class fl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Xa((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const pl="start";class ml{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=dl(t),this.urlFn=e=>(this.appCheckToken&&(e[il]=this.appCheckToken),ll(t,ol,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _l(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===pl)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[pl]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[il]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&rl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ml.forceAllow_=!0}static forceDisallow(){ml.forceDisallow_=!0}static isAvailable(){return!!ml.forceAllow_||!(ml.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ps(t),r=Ga(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=eo(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _l{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Oa(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=_l.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){La("frame writing exception"),e.stack&&La(e.stack),La(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||La("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{La("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let gl=null;"undefined"!=typeof MozWebSocket?gl=MozWebSocket:"undefined"!=typeof WebSocket&&(gl=WebSocket);class vl{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=dl(t),this.connURL=vl.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&rl.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[il]=r),i&&(s.p=i),ll(e,sl,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Sa.set("previous_websocket_failure",!0);try{let e;Ys(),this.mySock=new gl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){vl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==gl&&!vl.forceDisallow_}static previouslyFailed(){return Sa.isInMemoryStorage||!0===Sa.get("previous_websocket_failure")}markConnectionHealthy(){Sa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Qs(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(xs(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=eo(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ga(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vl.responsesRequiredToBeHealthy=2,vl.healthyTimeout=3e4;
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
class yl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ml,vl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=vl&&vl.isAvailable();let n=t&&!vl.previouslyFailed();if(e.webSocketOnly&&(t||za("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[vl];else{const e=this.transports_=[];for(const t of yl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yl.globalTransportInitialized_=!1;class bl{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new yl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Qa((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ha("t",e),n=Ha("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ha("t",e),n=Ha("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ha("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ma("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ma("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&za("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qa((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qa((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Sa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class wl{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class kl{constructor(e){this.allowedEvents_=e,this.listeners_={},xs(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){xs(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Cl extends kl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Gs()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Cl}getInitialEvent(e){return xs("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const El=32,Il=768;class Tl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Sl(){return new Tl("")}function xl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Rl(e){return e.pieces_.length-e.pieceNum_}function Ol(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Tl(e.pieces_,t)}function Al(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Nl(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Pl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Tl(t,0)}function Dl(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Tl)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Tl(n,0)}function Ll(e){return e.pieceNum_>=e.pieces_.length}function Ul(e,t){const n=xl(e),r=xl(t);if(null===n)return t;if(n===r)return Ul(Ol(e),Ol(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ml(e,t){const n=Nl(e,0),r=Nl(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=Wa(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function Fl(e,t){if(Rl(e)!==Rl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function zl(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Rl(e)>Rl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class jl{constructor(e,t){this.errorPrefix_=t,this.parts_=Nl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=_o(this.parts_[e]);Bl(this)}}function Bl(e){if(e.byteLength_>Il)throw new Error(e.errorPrefix_+"has a key path longer than "+Il+" bytes ("+e.byteLength_+").");if(e.parts_.length>El)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+El+") or object contains a cycle "+ql(e))}function ql(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Wl extends kl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Wl}getInitialEvent(e){return xs("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const Vl=1e3;class Hl extends wl{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Hl.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Vl,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ys())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(eo(i)),xs(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Vs,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),xs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),xs(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;Hl.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&no(e,"w")){const n=ro(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();za(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=to(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=to(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),xs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+eo(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ma("Unrecognized action received from server: "+eo(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){xs(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Vl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Vl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Vl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Hl.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){xs(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?La("getToken() completed but was canceled"):(La("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new bl(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{za(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&za(e),a())}}}interrupt(e){La("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){La("Resuming connection for reason: "+e),delete this.interruptReasons_[e],io(this.interruptReasons_)&&(this.reconnectDelay_=Vl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>$a(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Tl(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){La("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){La("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ca.replace(/\./g,"-")]=1,Gs()?e["framework.cordova"]=1:Ks()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cl.getInstance().currentlyOnline();return io(this.interruptReasons_)&&e}}Hl.nextPersistentConnectionId_=0,Hl.nextConnectionId_=0;
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
class $l{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new $l(e,t)}}
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
 */class Gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new $l(Ba,e),r=new $l(Ba,t);return 0!==this.compare(n,r)}minPost(){return $l.MIN}}
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
 */let Kl;class Yl extends Gl{static get __EMPTY_NODE(){return Kl}static set __EMPTY_NODE(e){Kl=e}compare(e,t){return Wa(e.name,t.name)}isDefinedOn(e){throw Rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return $l.MIN}maxPost(){return new $l(qa,Kl)}makePost(e,t){return xs("string"==typeof e,"KeyIndex indexValue must always be a string."),new $l(e,Kl)}toString(){return".key"}}const Zl=new Yl;
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
 */class Jl{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xl{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Xl.RED,this.left=null!=r?r:Ql.EMPTY_NODE,this.right=null!=i?i:Ql.EMPTY_NODE}copy(e,t,n,r,i){return new Xl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ql.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ql.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xl.RED=!0,Xl.BLACK=!1;class Ql{constructor(e,t=Ql.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ql(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Xl.BLACK,null,null))}remove(e){return new Ql(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jl(this.root_,null,this.comparator_,!0,e)}}
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
function ec(e,t){return Wa(e.name,t.name)}function tc(e,t){return Wa(e,t)}
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
 */let nc;Ql.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Xl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const rc=function(e){return"number"==typeof e?"number:"+Ya(e):"string:"+e},ic=function(e){if(e.isLeafNode()){const t=e.val();xs("string"==typeof t||"number"==typeof t||"object"==typeof t&&no(t,".sv"),"Priority must be a string or number.")}else xs(e===nc||e.isEmpty(),"priority of unexpected type.");xs(e===nc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let sc,oc,ac;class lc{constructor(e,t=lc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,xs(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ic(this.priorityNode_)}static set __childrenNodeConstructor(e){sc=e}static get __childrenNodeConstructor(){return sc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:lc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ll(e)?this:".priority"===xl(e)?this.priorityNode_:lc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:lc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=xl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(xs(".priority"!==n||1===Rl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,lc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ol(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ya(this.value_):this.value_,this.lazyHash_=Aa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lc.__childrenNodeConstructor?-1:(xs(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=lc.VALUE_TYPE_ORDER.indexOf(t),i=lc.VALUE_TYPE_ORDER.indexOf(n);return xs(r>=0,"Unknown leaf type: "+t),xs(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}lc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const cc=new class extends Gl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Wa(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return $l.MIN}maxPost(){return new $l(qa,new lc("[PRIORITY-POST]",ac))}makePost(e,t){const n=oc(e);return new $l(t,new lc("[PRIORITY-POST]",n))}toString(){return".priority"}},uc=Math.log(2);
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
 */class hc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/uc,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dc=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Xl(a,o.node,Xl.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new Xl(a,o.node,Xl.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new Xl(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Xl.BLACK):(a(r,Xl.BLACK),a(r,Xl.RED))}return s}(new hc(e.length));return new Ql(r||t,s)};
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
 */let fc;const pc={};class mc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return xs(pc&&cc,"ChildrenNode.ts has not been loaded"),fc=fc||new mc({".priority":pc},{".priority":cc}),fc}get(e){const t=ro(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ql?t:null}hasIndex(e){return no(this.indexSet_,e.toString())}addIndex(e,t){xs(e!==Zl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator($l.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?dc(n,e.getCompare()):pc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new mc(c,l)}addToIndexes(e,t){const n=so(this.indexes_,((n,r)=>{const i=ro(this.indexSet_,r);if(xs(i,"Missing index implementation for "+r),n===pc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator($l.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),dc(n,i.getCompare())}return pc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new $l(e.name,r))),i.insert(e,e.node)}}));return new mc(n,this.indexSet_)}removeFromIndexes(e,t){const n=so(this.indexes_,(n=>{if(n===pc)return n;{const r=t.get(e.name);return r?n.remove(new $l(e.name,r)):n}}));return new mc(n,this.indexSet_)}}
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
 */let _c;class gc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ic(this.priorityNode_),this.children_.isEmpty()&&xs(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _c||(_c=new gc(new Ql(tc),null,mc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_c}updatePriority(e){return this.children_.isEmpty()?this:new gc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_c:t}}getChild(e){const t=xl(e);return null===t?this:this.getImmediateChild(t).getChild(Ol(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(xs(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new $l(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?_c:this.priorityNode_;return new gc(r,s,i)}}updateChild(e,t){const n=xl(e);if(null===n)return t;{xs(".priority"!==xl(e)||1===Rl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Ol(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(cc,((s,o)=>{t[s]=o.val(e),n++,i&&gc.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+rc(this.getPriority().val())+":"),this.forEachChild(cc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Aa(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new $l(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new $l(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new $l(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,$l.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,$l.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vc?-1:0}withIndex(e){if(e===Zl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(cc),n=t.getIterator(cc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Zl?null:this.indexMap_.get(e.toString())}}gc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const vc=new class extends gc{constructor(){super(new Ql(tc),gc.EMPTY_NODE,mc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties($l,{MIN:{value:new $l(Ba,gc.EMPTY_NODE)},MAX:{value:new $l(qa,vc)}}),Yl.__EMPTY_NODE=gc.EMPTY_NODE,lc.__childrenNodeConstructor=gc,nc=vc,function(e){ac=e}(vc);
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
const yc=!0;function bc(e,t=null){if(null===e)return gc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),xs(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new lc(e,bc(t))}if(e instanceof Array||!yc){let n=gc.EMPTY_NODE;return Ka(e,((t,r)=>{if(no(e,t)&&"."!==t.substring(0,1)){const e=bc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(bc(t))}{const n=[];let r=!1;if(Ka(e,((e,t)=>{if("."!==e.substring(0,1)){const i=bc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new $l(e,i)))}})),0===n.length)return gc.EMPTY_NODE;const i=dc(n,ec,(e=>e.name),tc);if(r){const e=dc(n,cc.getCompare());return new gc(i,bc(t),new mc({".priority":e},{".priority":cc}))}return new gc(i,bc(t),mc.Default)}}!function(e){oc=e}(bc);
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
class wc extends Gl{constructor(e){super(),this.indexPath_=e,xs(!Ll(e)&&".priority"!==xl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Wa(e.name,t.name):i}makePost(e,t){const n=bc(e),r=gc.EMPTY_NODE.updateChild(this.indexPath_,n);return new $l(t,r)}maxPost(){const e=gc.EMPTY_NODE.updateChild(this.indexPath_,vc);return new $l(qa,e)}toString(){return Nl(this.indexPath_,0).join("/")}}
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
 */const kc=new class extends Gl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Wa(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return $l.MIN}maxPost(){return $l.MAX}makePost(e,t){const n=bc(e);return new $l(t,n)}toString(){return".value"}};
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
 */function Cc(e){return{type:"value",snapshotNode:e}}function Ec(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ic(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Tc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Sc{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){xs(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ic(t,o)):xs(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Ec(t,n)):s.trackChildChange(Tc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(cc,((e,r)=>{t.hasChild(e)||n.trackChildChange(Ic(e,r))})),t.isLeafNode()||t.forEachChild(cc,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Tc(t,r,i))}else n.trackChildChange(Ec(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class xc{constructor(e){this.indexedFilter_=new Sc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xc.getStartPost_(e),this.endPost_=xc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new $l(t,n))||(n=gc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(gc.EMPTY_NODE);const i=this;return t.forEachChild(cc,((e,t)=>{i.matches(new $l(e,t))||(r=r.updateImmediateChild(e,gc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Rc{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new xc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new $l(t,n))||(n=gc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=gc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=gc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(gc.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,gc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;xs(o.numChildren()===this.limit_,"");const a=new $l(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Tc(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Ic(t,e));const n=o.updateImmediateChild(t,gc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Ec(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Ic(l.name,l.node)),i.trackChildChange(Ec(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,gc.EMPTY_NODE)):e}}
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
 */class Oc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=cc}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return xs(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return xs(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ba}hasEnd(){return this.endSet_}getIndexEndValue(){return xs(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return xs(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return xs(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===cc}copy(){const e=new Oc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ac(e){const t={};if(e.isDefault())return t;let n;if(e.index_===cc?n="$priority":e.index_===kc?n="$value":e.index_===Zl?n="$key":(xs(e.index_ instanceof wc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=eo(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=eo(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+eo(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=eo(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+eo(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Nc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==cc&&(t.i=e.index_.toString()),t}
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
 */class Pc extends wl{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(xs(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Pc.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ac(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),ro(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Pc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ac(e._queryParams),n=e._path.toString(),r=new Vs;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lo(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Qs(o.responseText)}catch(e){za("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&za("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class Dc{constructor(){this.rootNode_=gc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function Lc(){return{value:null,children:new Map}}function Uc(e,t,n){if(Ll(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=xl(t);e.children.has(r)||e.children.set(r,Lc());Uc(e.children.get(r),t=Ol(t),n)}}function Mc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{Mc(r,new Tl(t.toString()+"/"+e),n)}))}class Fc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ka(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class zc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fc(e);const n=1e4+2e4*Math.random();Qa(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ka(e,((e,r)=>{r>0&&no(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Qa(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var jc,Bc;function qc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Bc=jc||(jc={}))[Bc.OVERWRITE=0]="OVERWRITE",Bc[Bc.MERGE=1]="MERGE",Bc[Bc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Bc[Bc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Wc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=jc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ll(this.path)){if(null!=this.affectedTree.value)return xs(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Tl(e));return new Wc(Sl(),t,this.revert)}}return xs(xl(this.path)===e,"operationForChild called for unrelated child."),new Wc(Ol(this.path),this.affectedTree,this.revert)}}
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
 */class Vc{constructor(e,t){this.source=e,this.path=t,this.type=jc.LISTEN_COMPLETE}operationForChild(e){return Ll(this.path)?new Vc(this.source,Sl()):new Vc(this.source,Ol(this.path))}}
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
 */class Hc{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=jc.OVERWRITE}operationForChild(e){return Ll(this.path)?new Hc(this.source,Sl(),this.snap.getImmediateChild(e)):new Hc(this.source,Ol(this.path),this.snap)}}
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
 */class $c{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=jc.MERGE}operationForChild(e){if(Ll(this.path)){const t=this.children.subtree(new Tl(e));return t.isEmpty()?null:t.value?new Hc(this.source,Sl(),t.value):new $c(this.source,Sl(),t)}return xs(xl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $c(this.source,Ol(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Gc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ll(e))return this.isFullyInitialized()&&!this.filtered_;const t=xl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Kc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yc(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Rs("Should only compare child_ events.");const r=new $l(t.childName,t.snapshotNode),i=new $l(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Zc(e,t){return{eventCache:e,serverCache:t}}function Jc(e,t,n,r){return Zc(new Gc(t,n,r),e.serverCache)}function Xc(e,t,n,r){return Zc(e.eventCache,new Gc(t,n,r))}function Qc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function eu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let tu;class nu{constructor(e,t=(()=>(tu||(tu=new Ql(Va)),tu))()){this.value=e,this.children=t}static fromObject(e){let t=new nu(null);return Ka(e,((e,n)=>{t=t.set(new Tl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Sl(),value:this.value};if(Ll(e))return null;{const n=xl(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Ol(e),t);if(null!=i){return{path:Dl(new Tl(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ll(e))return this;{const t=xl(e),n=this.children.get(t);return null!==n?n.subtree(Ol(e)):new nu(null)}}set(e,t){if(Ll(e))return new nu(t,this.children);{const n=xl(e),r=(this.children.get(n)||new nu(null)).set(Ol(e),t),i=this.children.insert(n,r);return new nu(this.value,i)}}remove(e){if(Ll(e))return this.children.isEmpty()?new nu(null):new nu(null,this.children);{const t=xl(e),n=this.children.get(t);if(n){const r=n.remove(Ol(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new nu(null):new nu(this.value,i)}return this}}get(e){if(Ll(e))return this.value;{const t=xl(e),n=this.children.get(t);return n?n.get(Ol(e)):null}}setTree(e,t){if(Ll(e))return t;{const n=xl(e),r=(this.children.get(n)||new nu(null)).setTree(Ol(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new nu(this.value,i)}}fold(e){return this.fold_(Sl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Dl(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Sl(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Ll(e))return null;{const r=xl(e),i=this.children.get(r);return i?i.findOnPath_(Ol(e),Dl(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Sl(),t)}foreachOnPath_(e,t,n){if(Ll(e))return this;{this.value&&n(t,this.value);const r=xl(e),i=this.children.get(r);return i?i.foreachOnPath_(Ol(e),Dl(t,r),n):new nu(null)}}foreach(e){this.foreach_(Sl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Dl(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class ru{constructor(e){this.writeTree_=e}static empty(){return new ru(new nu(null))}}function iu(e,t,n){if(Ll(t))return new ru(new nu(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Ul(i,t);return s=s.updateChild(o,n),new ru(e.writeTree_.set(i,s))}{const r=new nu(n),i=e.writeTree_.setTree(t,r);return new ru(i)}}}function su(e,t,n){let r=e;return Ka(n,((e,n)=>{r=iu(r,Dl(t,e),n)})),r}function ou(e,t){if(Ll(t))return ru.empty();{const n=e.writeTree_.setTree(t,new nu(null));return new ru(n)}}function au(e,t){return null!=lu(e,t)}function lu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ul(n.path,t)):null}function cu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(cc,((e,n)=>{t.push(new $l(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new $l(e,n.value))})),t}function uu(e,t){if(Ll(t))return e;{const n=lu(e,t);return new ru(null!=n?new nu(n):e.writeTree_.subtree(t))}}function hu(e){return e.writeTree_.isEmpty()}function du(e,t){return fu(Sl(),e.writeTree_,t)}function fu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(xs(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=fu(Dl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Dl(e,".priority"),r)),n}}
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
 */function pu(e,t){return Su(t,e)}function mu(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));xs(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&_u(t,r.path)?i=!1:zl(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=vu(e.allWrites,gu,Sl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=ou(e.visibleWrites,r.path);else{Ka(r.children,(t=>{e.visibleWrites=ou(e.visibleWrites,Dl(r.path,t))}))}return!0}return!1}function _u(e,t){if(e.snap)return zl(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&zl(Dl(e.path,n),t))return!0;return!1}function gu(e){return e.visible}function vu(e,t,n){let r=ru.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)zl(n,e)?(t=Ul(n,e),r=iu(r,t,s.snap)):zl(e,n)&&(t=Ul(e,n),r=iu(r,Sl(),s.snap.getChild(t)));else{if(!s.children)throw Rs("WriteRecord should have .snap or .children");if(zl(n,e))t=Ul(n,e),r=su(r,t,s.children);else if(zl(e,n))if(t=Ul(e,n),Ll(t))r=su(r,Sl(),s.children);else{const e=ro(s.children,xl(t));if(e){const n=e.getChild(Ol(t));r=iu(r,Sl(),n)}}}}}return r}function yu(e,t,n,r,i){if(r||i){const s=uu(e.visibleWrites,t);if(!i&&hu(s))return n;if(i||null!=n||au(s,Sl())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(zl(e.path,t)||zl(t,e.path))};return du(vu(e.allWrites,s,t),n||gc.EMPTY_NODE)}return null}{const r=lu(e.visibleWrites,t);if(null!=r)return r;{const r=uu(e.visibleWrites,t);if(hu(r))return n;if(null!=n||au(r,Sl())){return du(r,n||gc.EMPTY_NODE)}return null}}}function bu(e,t,n,r){return yu(e.writeTree,e.treePath,t,n,r)}function wu(e,t){return function(e,t,n){let r=gc.EMPTY_NODE;const i=lu(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(cc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=uu(e.visibleWrites,t);return n.forEachChild(cc,((e,t)=>{const n=du(uu(i,new Tl(e)),t);r=r.updateImmediateChild(e,n)})),cu(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return cu(uu(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function ku(e,t,n,r){return function(e,t,n,r,i){xs(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Dl(t,n);if(au(e.visibleWrites,s))return null;{const t=uu(e.visibleWrites,s);return hu(t)?i.getChild(n):du(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Cu(e,t){return function(e,t){return lu(e.visibleWrites,t)}(e.writeTree,Dl(e.treePath,t))}function Eu(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=uu(e.visibleWrites,t),c=lu(l,Sl());if(null!=c)a=c;else{if(null==n)return[];a=du(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Iu(e,t,n){return function(e,t,n,r){const i=Dl(t,n),s=lu(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return du(uu(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Tu(e,t){return Su(Dl(e.treePath,t),e.writeTree)}function Su(e,t){return{treePath:e,writeTree:t}}
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
 */class xu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;xs("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),xs(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Tc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ic(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Ec(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Rs("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Tc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Ru=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ou{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Gc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iu(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:eu(this.viewCache_),i=Eu(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function Au(e,t,n,r,i){const s=new xu;let o,a;if(n.type===jc.OVERWRITE){const l=n;l.source.fromUser?o=Du(e,t,l.path,l.snap,r,i,s):(xs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ll(l.path),o=Pu(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===jc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Dl(n,r);Lu(t,xl(c))&&(a=Du(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Dl(n,r);Lu(t,xl(c))||(a=Du(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(xs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Mu(e,t,l.path,l.children,r,i,a,s))}else if(n.type===jc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Cu(r,n))return t;{const a=new Ou(r,t,i),l=t.eventCache.getNode();let c;if(Ll(n)||".priority"===xl(n)){let n;if(t.serverCache.isFullyInitialized())n=bu(r,eu(t));else{const e=t.serverCache.getNode();xs(e instanceof gc,"serverChildren would be complete if leaf node"),n=wu(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=xl(n);let u=Iu(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Ol(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,gc.EMPTY_NODE,Ol(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=bu(r,eu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Cu(r,Sl()),Jc(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Cu(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Ll(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pu(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Ll(n)){let r=new nu(null);return l.getNode().forEachChild(Zl,((e,t)=>{r=r.set(new Tl(e),t)})),Mu(e,t,n,r,i,s,a,o)}return t}{let c=new nu(null);return r.foreach(((e,t)=>{const r=Dl(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Mu(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==jc.LISTEN_COMPLETE)throw Rs("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Xc(t,s.getNode(),s.isFullyInitialized()||Ll(n),s.isFiltered());return Nu(e,o,n,r,Ru,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Cc(Qc(t)))}}(t,o,l),{viewCache:o,changes:l}}function Nu(e,t,n,r,i,s){const o=t.eventCache;if(null!=Cu(r,n))return t;{let a,l;if(Ll(n))if(xs(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=eu(t),i=wu(r,n instanceof gc?n:gc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=bu(r,eu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=xl(n);if(".priority"===c){xs(1===Rl(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=ku(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Ol(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=ku(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Iu(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return Jc(t,a,o.isFullyInitialized()||Ll(n),e.filter.filtersNodes())}}function Pu(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ll(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=xl(n);if(!l.isCompleteForPath(n)&&Rl(n)>1)return t;const i=Ol(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Ru,null)}const h=Xc(t,c,l.isFullyInitialized()||Ll(n),u.filtersNodes());return Nu(e,h,n,i,new Ou(i,h,s),a)}function Du(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Ou(i,t,s);if(Ll(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Jc(t,c,!0,e.filter.filtersNodes());else{const i=xl(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Jc(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Ol(n),c=a.getNode().getImmediateChild(i);let h;if(Ll(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Al(s)&&e.getChild(Pl(s)).isEmpty()?e:e.updateChild(s,r):gc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Jc(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Lu(e,t){return e.eventCache.isCompleteForChild(t)}function Uu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Mu(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ll(n)?r:new nu(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Pu(e,c,new Tl(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Pu(e,c,new Tl(n),l,i,s,o,a)}})),c}class Fu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Sc(n.getIndex()),i=(s=n).loadsAllData()?new Sc(s.getIndex()):s.hasLimit()?new Rc(s):new xc(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(gc.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(gc.EMPTY_NODE,a.getNode(),null),u=new Gc(l,o.isFullyInitialized(),r.filtersNodes()),h=new Gc(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Zc(h,u),this.eventGenerator_=new Kc(this.query_)}get query(){return this.query_}}function zu(e,t){const n=eu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ll(t)&&!n.getImmediateChild(xl(t)).isEmpty())?n.getChild(t):null}function ju(e){return 0===e.eventRegistrations_.length}function Bu(e,t,n){const r=[];if(n){xs(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function qu(e,t,n,r){t.type===jc.MERGE&&null!==t.source.queryId&&(xs(eu(e.viewCache_),"We should always have a full cache before handling merges"),xs(Qc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Au(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,xs(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),xs(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),xs(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Wu(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Wu(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Yc(e,i,"child_removed",t,r,n),Yc(e,i,"child_added",t,r,n),Yc(e,i,"child_moved",s,r,n),Yc(e,i,"child_changed",t,r,n),Yc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let Vu,Hu;class $u{constructor(){this.views=new Map}}function Gu(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return xs(null!=s,"SyncTree gave us an op for an invalid query."),qu(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(qu(s,t,n,r));return i}}function Ku(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=bu(n,i?r:null),s=!1;e?s=!0:r instanceof gc?(e=wu(n,r),s=!1):(e=gc.EMPTY_NODE,s=!1);const o=Zc(new Gc(e,s,!1),new Gc(r,i,!1));return new Fu(t,o)}return o}function Yu(e,t,n,r,i,s){const o=Ku(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(cc,((e,t)=>{r.push(Ec(e,t))}));return n.isFullyInitialized()&&r.push(Cc(n.getNode())),Wu(e,r,n.getNode(),t)}(o,n)}function Zu(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=th(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(Bu(i,n,r)),ju(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(Bu(t,n,r)),ju(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!th(e)&&s.push(new(xs(Vu,"Reference.ts has not been loaded"),Vu)(t._repo,t._path)),{removed:s,events:o}}function Ju(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Xu(e,t){let n=null;for(const r of e.views.values())n=n||zu(r,t);return n}function Qu(e,t){if(t._queryParams.loadsAllData())return nh(e);{const n=t._queryIdentifier;return e.views.get(n)}}function eh(e,t){return null!=Qu(e,t)}function th(e){return null!=nh(e)}function nh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let rh=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nu(null),this.pendingWriteTree_={visibleWrites:ru.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sh(e,t,n,r,i){return function(e,t,n,r,i){xs(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=iu(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?ph(e,new Hc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function oh(e,t,n,r){!function(e,t,n,r){xs(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=su(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=nu.fromObject(n);return ph(e,new $c({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function ah(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(mu(e.pendingWriteTree_,t)){let t=new nu(null);return null!=r.snap?t=t.set(Sl(),!0):Ka(r.children,(e=>{t=t.set(new Tl(e),!0)})),ph(e,new Wc(r.path,t,n))}return[]}function lh(e,t,n){return ph(e,new Hc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ch(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||eh(o,t))){const l=Zu(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>th(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&th(t)){return[nh(t)]}{let e=[];return t&&(e=Ju(t)),Ka(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=gh(e,r);e.listenProvider_.startListening(Ch(i),vh(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Ch(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(yh(t));e.listenProvider_.stopListening(Ch(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=yh(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function uh(e,t,n,r){const i=bh(e,r);if(null!=i){const r=wh(i),s=r.path,o=r.queryId,a=Ul(s,t);return kh(e,s,new Hc(qc(o),a,n))}return[]}function hh(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Ul(e,i);s=s||Xu(t,n),o=o||th(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||th(l),s=s||Xu(l,Sl())):(l=new $u,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=gc.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Xu(t,Sl());n&&(s=s.updateImmediateChild(e,n))}))}const c=eh(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=yh(t);xs(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=rh++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=Yu(l,t,n,pu(e.pendingWriteTree_,i),s,a);if(!c&&!o&&!r){const n=Qu(l,t);u=u.concat(function(e,t,n){const r=t._path,i=vh(e,t),s=gh(e,n),o=e.listenProvider_.startListening(Ch(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)xs(!th(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ll(e)&&t&&th(t))return[nh(t).query];{let e=[];return t&&(e=e.concat(Ju(t).map((e=>e.query)))),Ka(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Ch(r),vh(e,r))}}return o}
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
 */(e,t,n))}return u}function dh(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Xu(n,Ul(e,t));if(r)return r}));return yu(r,t,i,n,!0)}function fh(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Ul(e,n);r=r||Xu(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Xu(i,Sl()):(i=new $u,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Gc(r,!0,!1):null;return function(e){return Qc(e.viewCache_)}(Ku(i,t,pu(e.pendingWriteTree_,t._path),s?o.getNode():gc.EMPTY_NODE,s))}function ph(e,t){return mh(t,e.syncPointTree_,null,pu(e.pendingWriteTree_,Sl()))}function mh(e,t,n,r){if(Ll(e.path))return _h(e,t,n,r);{const i=t.get(Sl());null==n&&null!=i&&(n=Xu(i,Sl()));let s=[];const o=xl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Tu(r,o);s=s.concat(mh(a,l,e,t))}return i&&(s=s.concat(Gu(i,e,r,n))),s}}function _h(e,t,n,r){const i=t.get(Sl());null==n&&null!=i&&(n=Xu(i,Sl()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Tu(r,t),l=e.operationForChild(t);l&&(s=s.concat(_h(l,i,o,a)))})),i&&(s=s.concat(Gu(i,e,r,n))),s}function gh(e,t){const n=t.query,r=vh(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||gc.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=bh(e,n);if(r){const n=wh(r),i=n.path,s=n.queryId,o=Ul(i,t);return kh(e,i,new Vc(qc(s),o))}return[]}(e,n._path,r):function(e,t){return ph(e,new Vc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return ch(e,n,null,r)}}}}function vh(e,t){const n=yh(t);return e.queryToTagMap.get(n)}function yh(e){return e._path.toString()+"$"+e._queryIdentifier}function bh(e,t){return e.tagToQueryMap.get(t)}function wh(e){const t=e.indexOf("$");return xs(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Tl(e.substr(0,t))}}function kh(e,t,n){const r=e.syncPointTree_.get(t);xs(r,"Missing sync point for query tag that we're tracking");return Gu(r,n,pu(e.pendingWriteTree_,t),null)}function Ch(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(xs(Hu,"Reference.ts has not been loaded"),Hu)(e._repo,e._path):e}class Eh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Eh(t)}node(){return this.node_}}class Ih{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Dl(this.path_,e);return new Ih(this.syncTree_,t)}node(){return dh(this.syncTree_,this.path_)}}const Th=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Sh=function(e,t,n){return e&&"object"==typeof e?(xs(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?xh(e[".sv"],t,n):"object"==typeof e[".sv"]?Rh(e[".sv"],t):void xs(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},xh=function(e,t,n){if("timestamp"===e)return n.timestamp;xs(!1,"Unexpected server value: "+e)},Rh=function(e,t,n){e.hasOwnProperty("increment")||xs(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&xs(!1,"Unexpected increment value: "+r);const i=t.node();if(xs(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Oh=function(e,t,n,r){return Nh(t,new Ih(n,e),r)},Ah=function(e,t,n){return Nh(e,new Eh(t),n)};function Nh(e,t,n){const r=e.getPriority().val(),i=Sh(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Sh(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new lc(s,bc(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new lc(i))),r.forEachChild(cc,((e,r)=>{const i=Nh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class Ph{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Dh(e,t){let n=t instanceof Tl?t:new Tl(t),r=e,i=xl(n);for(;null!==i;){const e=ro(r.node.children,i)||{children:{},childCount:0};r=new Ph(i,r,e),n=Ol(n),i=xl(n)}return r}function Lh(e){return e.node.value}function Uh(e,t){e.node.value=t,Bh(e)}function Mh(e){return e.node.childCount>0}function Fh(e,t){Ka(e.node.children,((n,r)=>{t(new Ph(n,e,r))}))}function zh(e,t,n,r){n&&!r&&t(e),Fh(e,(e=>{zh(e,t,!0,r)})),n&&r&&t(e)}function jh(e){return new Tl(null===e.parent?e.name:jh(e.parent)+"/"+e.name)}function Bh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Lh(e)&&!Mh(e)}(n),i=no(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Bh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Bh(e))}
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
 */(e.parent,e.name,e)}const qh=/[\[\].#$\/\u0000-\u001F\u007F]/,Wh=/[\[\].#$\u0000-\u001F\u007F]/,Vh=10485760,Hh=function(e){return"string"==typeof e&&0!==e.length&&!qh.test(e)},$h=function(e){return"string"==typeof e&&0!==e.length&&!Wh.test(e)},Gh=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!ja(e)||e&&"object"==typeof e&&no(e,".sv")},Kh=function(e,t,n,r){r&&void 0===t||Yh(mo(e,"value"),t,n)},Yh=function(e,t,n){const r=n instanceof Tl?new jl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ql(r));if("function"==typeof t)throw new Error(e+"contains a function "+ql(r)+" with contents = "+t.toString());if(ja(t))throw new Error(e+"contains "+t.toString()+" "+ql(r));if("string"==typeof t&&t.length>Vh/3&&_o(t)>Vh)throw new Error(e+"contains a string greater than "+Vh+" utf8 bytes "+ql(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Ka(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Hh(t)))throw new Error(e+" contains an invalid key ("+t+") "+ql(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=_o(a),Bl(o),Yh(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=_o(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+ql(r)+" in addition to actual children.")}},Zh=function(e,t,n,r){if(r&&void 0===t)return;const i=mo(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ka(t,((e,t)=>{const r=new Tl(e);if(Yh(i,t,Dl(n,r)),".priority"===Al(r)&&!Gh(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=Nl(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!Hh(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Ml);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&zl(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},Jh=function(e,t,n,r){if(!(r&&void 0===n||$h(n)))throw new Error(mo(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Xh=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jh(e,t,n,r)},Qh=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Hh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),$h(e)}(n))throw new Error(mo(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ed{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function td(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Fl(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function nd(e,t,n){td(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(rd(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]);e.recursionDepth_--}(e,(e=>zl(e,t)||zl(t,e)))}function rd(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Pa&&La("event: "+n.toString()),Xa(r)}}}
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
 */const id="repo_interrupt",sd=25;class od{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ed,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lc(),this.transactionQueueTree_=new Ph,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ad(e,t,n){if(e.stats_=dl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Pc(e.repoInfo_,((t,n,r,i)=>{ud(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>hd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{eo(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Hl(e.repoInfo_,t,((t,n,r,i)=>{ud(e,t,n,r,i)}),(t=>{hd(e,t)}),(t=>{!function(e,t){Ka(t,((t,n)=>{dd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return hl[n]||(hl[n]=t()),hl[n]}(e.repoInfo_,(()=>new zc(e.stats_,e.server_))),e.infoData_=new Dc,e.infoSyncTree_=new ih({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=lh(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),dd(e,"connected",!1),e.serverSyncTree_=new ih({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);nd(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ld(e){const t=e.infoData_.getNode(new Tl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function cd(e){return Th({timestamp:ld(e)})}function ud(e,t,n,r,i){e.dataUpdateCount++;const s=new Tl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=so(n,(e=>bc(e)));o=function(e,t,n,r){const i=bh(e,r);if(i){const r=wh(i),s=r.path,o=r.queryId,a=Ul(s,t),l=nu.fromObject(n);return kh(e,s,new $c(qc(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=bc(n);o=uh(e.serverSyncTree_,s,t,i)}else if(r){const t=so(n,(e=>bc(e)));o=function(e,t,n){const r=nu.fromObject(n);return ph(e,new $c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=bc(n);o=lh(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=vd(e,s)),nd(e.eventQueue_,a,o)}function hd(e,t){dd(e,"connected",t),!1===t&&function(e){pd(e,"onDisconnectEvents");const t=cd(e),n=Lc();Mc(e.onDisconnect_,Sl(),((r,i)=>{const s=Oh(r,i,e.serverSyncTree_,t);Uc(n,r,s)}));let r=[];Mc(n,Sl(),((t,n)=>{r=r.concat(lh(e.serverSyncTree_,t,n));const i=Cd(e,t);vd(e,i)})),e.onDisconnect_=Lc(),nd(e.eventQueue_,Sl(),r)}(e)}function dd(e,t,n){const r=new Tl("/.info/"+t),i=bc(n);e.infoData_.updateSnapshot(r,i);const s=lh(e.infoSyncTree_,r,i);nd(e.eventQueue_,r,s)}function fd(e){return e.nextWriteId_++}function pd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),La(n,...t)}function md(e,t,n,r){t&&Xa((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function _d(e,t,n){return dh(e.serverSyncTree_,t,n)||gc.EMPTY_NODE}function gd(e,t=e.transactionQueueTree_){if(t||kd(e,t),Lh(t)){const n=bd(e,t);xs(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=_d(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];xs(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Ul(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{pd(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(ah(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();kd(e,Dh(e.transactionQueueTree_,t)),gd(e,e.transactionQueueTree_),nd(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Xa(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{za("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}vd(e,t)}}),o)}(e,jh(t),n)}else Mh(t)&&Fh(t,(t=>{gd(e,t)}))}function vd(e,t){const n=yd(e,t),r=jh(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=Ul(n,l.path);let u,h=!1;if(xs(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(ah(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=sd)h=!0,u="maxretry",i=i.concat(ah(e.serverSyncTree_,l.currentWriteId,!0));else{const n=_d(e,l.path,o);l.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Yh("transaction failed: Data returned ",r,l.path);let t=bc(r);"object"==typeof r&&null!=r&&no(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=cd(e),c=Ah(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=fd(e),o.splice(o.indexOf(s),1),i=i.concat(sh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(ah(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",i=i.concat(ah(e.serverSyncTree_,l.currentWriteId,!0))}nd(e.eventQueue_,n,i),i=[],h&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===u?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(u),!1,null)))))}var a;kd(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Xa(r[e]);gd(e,e.transactionQueueTree_)}(e,bd(e,n),r),r}function yd(e,t){let n,r=e.transactionQueueTree_;for(n=xl(t);null!==n&&void 0===Lh(r);)r=Dh(r,n),n=xl(t=Ol(t));return r}function bd(e,t){const n=[];return wd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function wd(e,t,n){const r=Lh(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Fh(t,(t=>{wd(e,t,n)}))}function kd(e,t){const n=Lh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Uh(t,n.length>0?n:void 0)}Fh(t,(t=>{kd(e,t)}))}function Cd(e,t){const n=jh(yd(e,t)),r=Dh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Ed(e,t)})),Ed(e,r),zh(r,(t=>{Ed(e,t)})),n}function Ed(e,t){const n=Lh(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(xs(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(xs(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(ah(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Uh(t,void 0):n.length=s+1,nd(e.eventQueue_,jh(t),i);for(let e=0;e<r.length;e++)Xa(r[e])}}
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
 */const Id=function(e,t){const n=Td(e),r=n.namespace;"firebase.com"===n.domain&&Fa(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Fa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&za("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new al(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Tl(n.pathString)}},Td=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):za(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Sd{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+eo(this.snapshot.exportVal())}}class xd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Rd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return xs(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Od{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Ll(this._path)?null:Al(this._path)}get ref(){return new Pd(this._repo,this._path)}get _queryIdentifier(){const e=Nc(this._queryParams),t=$a(e);return"{}"===t?"default":t}get _queryObject(){return Nc(this._queryParams)}isEqual(e){if(!((e=go(e))instanceof Od))return!1;const t=this._repo===e._repo,n=Fl(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function Ad(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Zl){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Ba)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==qa)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===cc){if(null!=t&&!Gh(t)||null!=n&&!Gh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(xs(e.getIndex()instanceof wc||e.getIndex()===kc,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Nd(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Pd extends Od{constructor(e,t){super(e,t,new Oc,!1)}get parent(){const e=Pl(this._path);return null===e?null:new Pd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Dd{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Tl(e),n=Ud(this.ref,e);return new Dd(this._node.getChild(t),n,cc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Dd(n,Ud(this.ref,t),cc))))}hasChild(e){const t=new Tl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ld(e,t){return(e=go(e))._checkNotDeleted("ref"),void 0!==t?Ud(e._root,t):e._root}function Ud(e,t){return null===xl((e=go(e))._path)?Xh("child","path",t,!1):Jh("child","path",t,!1),new Pd(e._repo,Dl(e._path,t))}function Md(e,t){(function(e,t){if(".info"===xl(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=go(e))._path),Kh("set",t,e._path,!1);const n=new Vs;return function(e,t,n,r,i){pd(e,"set",{path:t.toString(),value:n,priority:r});const s=cd(e),o=bc(n,r),a=dh(e.serverSyncTree_,t),l=Ah(o,a,s),c=fd(e),u=sh(e.serverSyncTree_,t,l,c,!0);td(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||za("set at "+t+" failed: "+n);const o=ah(e.serverSyncTree_,c,!s);nd(e.eventQueue_,t,o),md(0,i,n,r)}));const h=Cd(e,t);vd(e,h),nd(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Fd(e,t){Zh("update",t,e._path,!1);const n=new Vs;return function(e,t,n,r){pd(e,"update",{path:t.toString(),value:n});let i=!0;const s=cd(e),o={};if(Ka(n,((n,r)=>{i=!1,o[n]=Oh(Dl(t,n),bc(r),e.serverSyncTree_,s)})),i)La("update() called with empty data.  Don't do anything."),md(0,r,"ok",void 0);else{const i=fd(e),s=oh(e.serverSyncTree_,t,o,i);td(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||za("update at "+t+" failed: "+n);const a=ah(e.serverSyncTree_,i,!o),l=a.length>0?vd(e,t):t;nd(e.eventQueue_,l,a),md(0,r,n,s)})),Ka(n,(n=>{const r=Cd(e,Dl(t,n));vd(e,r)})),nd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function zd(e){e=go(e);const t=new Rd((()=>{})),n=new jd(t);return function(e,t,n){const r=fh(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=bc(r).withIndex(t._queryParams.getIndex());let s;if(hh(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=lh(e.serverSyncTree_,t._path,i);else{const n=vh(e.serverSyncTree_,t);s=uh(e.serverSyncTree_,t._path,i,n)}return nd(e.eventQueue_,t._path,s),ch(e.serverSyncTree_,t,n,null,!0),i}),(n=>(pd(e,"get for query "+eo(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Dd(t,new Pd(e._repo,e._path),e._queryParams.getIndex())))}class jd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Sd("value",this,new Dd(e.snapshotNode,new Pd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xd(this,e,t):null}matches(e){return e instanceof jd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Bd{}class qd extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Kh("endAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}(e._queryParams,this._value,this._key);if(Nd(t),Ad(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Od(e._repo,e._path,t,e._orderByCalled)}}class Wd extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Kh("startAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}(e._queryParams,this._value,this._key);if(Nd(t),Ad(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Od(e._repo,e._path,t,e._orderByCalled)}}class Vd extends Bd{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Tl(this._path);if(Ll(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wc(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return Ad(r),new Od(e._repo,e._path,r,!0)}}function Hd(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Jh("orderByChild","path",e,!1),new Vd(e)}class $d extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Kh("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new qd(this._value,this._key)._apply(new Wd(this._value,this._key)._apply(e))}}function Gd(e,t){return function(e,t,n,r){if(!(r&&void 0===n||Hh(n)))throw new Error(mo(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}("equalTo","key",t,!0),new $d(e,t)}function Kd(e,...t){let n=go(e);for(const e of t)n=e._apply(n);return n}!function(e){xs(!Vu,"__referenceConstructor has already been defined"),Vu=e}(Pd),function(e){xs(!Hu,"__referenceConstructor has already been defined"),Hu=e}(Pd);
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
const Yd="FIREBASE_DATABASE_EMULATOR_HOST",Zd={};let Jd=!1;function Xd(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Fa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),La("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Id(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a={NODE_ENV:"production"}[Yd]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Id(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new nl(nl.OWNER):new tl(e.name,e.options,t);Qh("Invalid Firebase Database URL",l),Ll(l.path)||Fa("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Zd[t.name];i||(i={},Zd[t.name]=i);let s=i[e.toURLString()];s&&Fa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new od(e,Jd,n,r),i[e.toURLString()]=s,s}(c,e,u,new el(e.name,n));return new ef(h,e)}function Qd(e,t){const n=Zd[t];n&&n[e.key]===e||Fa(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(id)}(e),delete n[e.key]}class ef{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ad(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pd(this._repo,Sl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Qd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Fa("Cannot call "+e+" on a deleted database.")}}function tf(e=aa(),t){const n=na(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Bs("database");e&&function(e,t,n,r={}){e=go(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Fa("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Fa('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new nl(nl.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:Hs(r.mockUserToken,e.app.options.projectId);s=new nl(t)}!function(e,t,n,r){e.repoInfo_=new al(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}
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
 */(n,...e)}return n}Hl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Hl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Ca=sa,ta(new vo("database",((e,{instanceIdentifier:t})=>Xd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),la(wa,ka,e),la(wa,ka,"esm2017")}();
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
la("firebase","9.23.0","app");
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
const nf="firebasestorage.googleapis.com",rf="storageBucket";
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
class sf extends Zs{constructor(e,t,n=0){super(uf(e),`Firebase Storage: ${t} (${uf(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sf.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var of,af,lf,cf;function uf(e){return"storage/"+e}function hf(){return new sf(of.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function df(){return new sf(of.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ff(){return new sf(of.CANCELED,"User canceled the upload/download.")}function pf(){return new sf(of.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mf(e){return new sf(of.INVALID_ARGUMENT,e)}function _f(){return new sf(of.APP_DELETED,"The Firebase app was deleted.")}function gf(e,t){return new sf(of.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function vf(e){throw new sf(of.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(af=of||(of={})).UNKNOWN="unknown",af.OBJECT_NOT_FOUND="object-not-found",af.BUCKET_NOT_FOUND="bucket-not-found",af.PROJECT_NOT_FOUND="project-not-found",af.QUOTA_EXCEEDED="quota-exceeded",af.UNAUTHENTICATED="unauthenticated",af.UNAUTHORIZED="unauthorized",af.UNAUTHORIZED_APP="unauthorized-app",af.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",af.INVALID_CHECKSUM="invalid-checksum",af.CANCELED="canceled",af.INVALID_EVENT_NAME="invalid-event-name",af.INVALID_URL="invalid-url",af.INVALID_DEFAULT_BUCKET="invalid-default-bucket",af.NO_DEFAULT_BUCKET="no-default-bucket",af.CANNOT_SLICE_BLOB="cannot-slice-blob",af.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",af.NO_DOWNLOAD_URL="no-download-url",af.INVALID_ARGUMENT="invalid-argument",af.INVALID_ARGUMENT_COUNT="invalid-argument-count",af.APP_DELETED="app-deleted",af.INVALID_ROOT_OPERATION="invalid-root-operation",af.INVALID_FORMAT="invalid-format",af.INTERNAL_ERROR="internal-error",af.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class yf{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=yf.makeFromUrl(e,t)}catch(t){return new yf(e,"")}if(""===n.path)return n;throw r=e,new sf(of.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===nf?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new yf(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new sf(of.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class bf{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function wf(e){return"string"==typeof e||e instanceof String}function kf(e){return Cf()&&e instanceof Blob}function Cf(){return"undefined"!=typeof Blob&&!function(){var e;const t=null===(e=zs())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function Ef(e,t,n,r){if(r<t)throw mf(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw mf(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function If(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Tf(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
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
/**
 * @license
 * Copyright 2022 Google LLC
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
function Sf(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
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
 */(cf=lf||(lf={}))[cf.NO_ERROR=0]="NO_ERROR",cf[cf.NETWORK_ERROR=1]="NETWORK_ERROR",cf[cf.ABORT=2]="ABORT";class xf{constructor(e,t,n,r,i,s,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Rf(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===lf.NO_ERROR,i=n.getStatus();if(!t||Sf(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===lf.ABORT;return void e(!1,new Rf(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Rf(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){const e=hf();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?_f():ff())}else{r(df())}};this.canceled_?t(0,new Rf(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,l())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),c||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Rf{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Of(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Cf())return new Blob(e);throw new sf(of.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
function Af(e){if("undefined"==typeof atob)throw t="base-64",new sf(of.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
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
 */const Nf={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pf{constructor(e,t){this.data=e,this.contentType=t||null}}function Df(e,t){switch(e){case Nf.RAW:return new Pf(Lf(t));case Nf.BASE64:case Nf.BASE64URL:return new Pf(Uf(e,t));case Nf.DATA_URL:return new Pf(function(e){const t=new Mf(e);return t.base64?Uf(Nf.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw gf(Nf.DATA_URL,"Malformed data URL.")}return Lf(t)}(t.rest)}(t),new Mf(t).contentType)}throw hf()}function Lf(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Uf(e,t){switch(e){case Nf.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw gf(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Nf.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw gf(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Af(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw gf(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Mf{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw gf(Nf.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Ff{constructor(e,t){let n=0,r="";kf(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(kf(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new Ff(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Ff(n,!0)}var n,r,i}static getBlob(...e){if(Cf()){const t=e.map((e=>e instanceof Ff?e.data_:e));return new Ff(Of.apply(null,t))}{const t=e.map((e=>wf(e)?Df(Nf.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new Ff(r,!0)}}uploadData(){return this.data_}}
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
 */function zf(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
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
 */function jf(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function Bf(e,t){return t}class qf{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Bf}}let Wf=null;function Vf(){if(Wf)return Wf;const e=[];e.push(new qf("bucket")),e.push(new qf("generation")),e.push(new qf("metageneration")),e.push(new qf("name","fullPath",!0));const t=new qf("name");t.xform=function(e,t){return function(e){return!wf(e)||e.length<2?e:jf(e)}(t)},e.push(t);const n=new qf("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new qf("timeCreated")),e.push(new qf("updated")),e.push(new qf("md5Hash",null,!0)),e.push(new qf("cacheControl",null,!0)),e.push(new qf("contentDisposition",null,!0)),e.push(new qf("contentEncoding",null,!0)),e.push(new qf("contentLanguage",null,!0)),e.push(new qf("contentType",null,!0)),e.push(new qf("metadata","customMetadata",!0)),Wf=e,Wf}function Hf(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new yf(n,r);return t._makeStorageReference(i)}})}(r,e),r}function $f(e,t,n){const r=zf(t);if(null===r)return null;return Hf(e,r,n)}function Gf(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Kf="prefixes",Yf="items";function Zf(e,t,n){const r=zf(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Kf])for(const i of n[Kf]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new yf(t,n));r.prefixes.push(s)}if(n[Yf])for(const i of n[Yf]){const n=e._makeStorageReference(new yf(t,i.name));r.items.push(n)}return r}(e,t,r)}class Jf{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Xf(e){if(!e)throw hf()}function Qf(e,t){return function(n,r){const i=$f(e,r,t);return Xf(null!==i),i}}function ep(e,t){return function(n,r){const i=$f(e,r,t);return Xf(null!==i),function(e,t,n,r){const i=zf(t);if(null===i)return null;if(!wf(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return If("/b/"+o(i)+"/o/"+o(s),n,r)+Tf({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function tp(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new sf(of.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new sf(of.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new sf(of.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new sf(of.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function np(e){const t=tp(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new sf(of.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function rp(e,t,n){const r=If(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Jf(r,"GET",Qf(e,n),i);return s.errorHandler=np(t),s}function ip(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=If(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Jf(o,"GET",function(e,t){return function(n,r){const i=Zf(e,t,r);return Xf(null!==i),i}}(e,t.bucket),a);return l.urlParams=s,l.errorHandler=tp(t),l}function sp(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class op{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function ap(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Xf(!1)}return Xf(!!n&&-1!==(t||["active"]).indexOf(n)),n}const lp=262144;function cp(e,t,n,r,i,s,o,a){const l=new op(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new sf(of.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let f="";f=0===u?"finalize":c===u?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(h,d);if(null===m)throw pf();const _=t.maxUploadRetryTime,g=new Jf(n,"POST",(function(e,n){const i=ap(e,["active","final"]),o=l.current+u,a=r.size();let c;return c="final"===i?Qf(t,s)(e,n):null,new op(o,a,"final"===i,c)}),_);return g.headers=p,g.body=m.uploadData(),g.progressCallback=a||null,g.errorHandler=tp(e),g}const up="running",hp="paused",dp="success",fp="canceled",pp="error";function mp(e){switch(e){case"running":case"pausing":case"canceling":return up;case"paused":return hp;case"success":return dp;case"canceled":return fp;default:return pp}}
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
 */class _p{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function gp(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class vp{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lf.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=lf.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=lf.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw vf("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vf("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vf("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw vf("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vf("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class yp extends vp{initXhr(){this.xhr_.responseType="text"}}function bp(){return new yp}
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
 */class wp{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Vf(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(of.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(Sf(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=df()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(of.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=sp(t,r,i),a={name:o.fullPath},l=If(s,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Gf(o,n),h=e.maxUploadRetryTime,d=new Jf(l,"POST",(function(e){let t;ap(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Xf(!1)}return Xf(wf(t)),t}),h);return d.urlParams=a,d.headers=c,d.body=u,d.errorHandler=tp(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new Jf(n,"POST",(function(e){const t=ap(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Xf(!1)}n||Xf(!1);const i=Number(n);return Xf(!isNaN(i)),new op(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=tp(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,bp,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=lp*this._chunkMultiplier,t=new op(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=cp(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,bp,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(lp*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=rp(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,bp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=sp(t,r,i),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Gf(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=Ff.getBlob(c,r,u);if(null===h)throw pf();const d={name:l.fullPath},f=If(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new Jf(f,"POST",Qf(e,n),p);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=tp(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bp,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=ff(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=mp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new _p(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(mp(this._state)){case dp:gp(this._resolve.bind(null,this.snapshot))();break;case fp:case pp:gp(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mp(this._state)){case up:case hp:e.next&&gp(e.next.bind(e,this.snapshot))();break;case dp:e.complete&&gp(e.complete.bind(e))();break;default:e.error&&gp(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class kp{constructor(e,t){this._service=e,this._location=t instanceof yf?t:yf.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new kp(e,t)}get root(){const e=new yf(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jf(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new yf(this._location.bucket,e);return new kp(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new sf(of.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Cp(e){const t={prefixes:[],items:[]};return Ep(e,t).then((()=>t))}async function Ep(e,t,n){const r={pageToken:n},i=await function(e,t){null!=t&&"number"==typeof t.maxResults&&Ef("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=ip(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,bp)}(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Ep(e,t,i.nextPageToken)}function Ip(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=If(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Jf(r,"GET",ep(e,n),i);return s.errorHandler=np(t),s}(e.storage,e._location,Vf());return e.storage.makeRequestWithTokens(t,bp).then((e=>{if(null===e)throw new sf(of.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Tp(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=If(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Jf(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=np(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,bp)}function Sp(e,t){if(e instanceof Op){const n=e;if(null==n._bucket)throw new sf(of.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rf+"' property when initializing the app?");const r=new kp(n,n._bucket);return null!=t?Sp(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new yf(e._location.bucket,n);return new kp(e.storage,r)}
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
 */(e,t):e}function xp(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Op)return new kp(e,t);throw mf("To use ref(service, url), the first argument must be a Storage instance.")}return Sp(e,t)}function Rp(e,t){const n=null==t?void 0:t[rf];return null==n?null:yf.makeFromBucketSpec(n,e)}class Op{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=nf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?yf.makeFromBucketSpec(r,this._host):Rp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=yf.makeFromBucketSpec(this._url,e):this._bucket=Rp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ef("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ef("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new kp(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new bf(_f());{const s=function(e,t,n,r,i,s,o=!0){const a=Tf(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new xf(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
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
 */(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ap="@firebase/storage",Np="0.11.2",Pp="storage";function Dp(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new wp(e,new Ff(t),n)}(e=go(e),t,n)}function Lp(e){return function(e){e._throwIfRoot("getMetadata");const t=rp(e.storage,e._location,Vf());return e.storage.makeRequestWithTokens(t,bp)}(e=go(e))}function Up(e){return Cp(e=go(e))}function Mp(e){return Ip(e=go(e))}function Fp(e,t){return xp(e=go(e),t)}function zp(e=aa(),t){const n=na(e=go(e),Pp).getImmediate({identifier:t}),r=Bs("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:Hs(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function jp(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Op(n,r,i,t,sa)}ta(new vo(Pp,jp,"PUBLIC").setMultipleInstances(!0)),la(Ap,Np,""),la(Ap,Np,"esm2017");const Bp={class:"container"},qp=jr("h2",null,"レタッチ依頼",-1),Wp={class:"alert alert-warning"},Vp={class:"form-group"},Hp={class:"input-group align-items-center mb-3"},$p=jr("h5",{class:"me-3"},"店舗：",-1),Gp={class:"btn-group"},Kp={class:"me-4"},Yp={class:"me-4"},Zp={class:"me-4"},Jp={class:"input-group align-items-center mb-3"},Xp=jr("h5",{class:"me-3"},"担当者：",-1),Qp={class:"input-group align-items-center mb-3"},em=jr("h5",{class:"me-3"},"キャスト名：",-1),tm={class:"row mb-3"},nm=jr("div",{class:"col"},[jr("h5",null,"修正箇所：")],-1),rm={class:"btn-group flex-column"},im={class:"me-4"},sm={class:"me-4"},om={class:"me-4"},am={class:"me-4"},lm={class:"input-group align-items-center"},cm={class:"me-4"},um=["disabled"],hm={class:"input-group align-items-center mb-3"},dm=jr("h5",{class:"me-3"},"顔の処理：",-1),fm={class:"row mb-3"},pm=jr("div",{class:"col"},[jr("h5",null,"提出期限：")],-1),mm={class:"btn-group flex-column"},_m={class:"me-4"},gm={class:"me-4"},vm={class:"me-4"},ym={class:"me-4"},bm={class:"input-group align-items-center"},wm={class:"me-4"},km=["disabled"],Cm=jr("h5",null," レタッチ画像：",-1),Em={class:"phone_area"},Im={class:"select_file"},Tm={class:"pc_area"},Sm=["onDrop"],xm={class:"list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0"},Rm=["onClick"],Om=["src"],Am={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},Nm={class:"z-3 bg-white .text-secondary w-50 rounded mt-4",style:{height:"fit-content"}},Pm={class:"d-flex flex-column p-3"},Dm={class:"d-flex justify-content-center items-center"},Lm={class:"fs-3 lh-lg"},Um={class:"bg-secondary rounded mt-3",style:{height:"20px"}},Mm={class:"w-100 h2",style:{height:"20px"}},Fm={class:"mt-4 d-flex justify-content-end items-center"},zm={class:"btn btn-secondary px-4 py-2 fw-bold"},jm=jr("h3",null,"依頼中",-1),Bm={class:"table-responsive mb-4"},qm={class:"table table-striped text-nowrap",style:{width:"1296px"}},Wm=jr("thead",null,[jr("tr",null,[jr("th",{scope:"col"},"店舗"),jr("th",{scope:"col"},"担当者"),jr("th",{scope:"col"},"キャスト名"),jr("th",{scope:"col"},"修正箇所"),jr("th",{scope:"col"},"顔の処理"),jr("th",{scope:"col"},"提出期限")])],-1),Vm={class:"text-wrap"},Hm={class:"text-wrap"},$m={class:"text-wrap"},Gm={class:"text-wrap"},Km={class:"text-wrap"},Ym={class:"text-wrap"},Zm={name:"retouch"};var Jm=Object.assign(Zm,{setup(e){const t=oa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=tf(t),r=Ld(n,"retouch"),i=st({checked:!1}),s=st({checked:!1}),o=st({manager:"",retouching:[],otherRetouching:[],retouchings:[],castName:"",faceRetouching:"",deadline:"",otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:es(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false",imgUrls:[]}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const r=[],i={contentType:"image/jpeg"},s=zp(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Fp(s,o.castName+"/"+e.name);await Dp(t,e,i);const n=await Mp(t);if(r.push(n),r.length==o.files.length){console.log("got all paths here now:",r);Dp(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Md(Ld(n,"retouch/"+e),{manager:o.manager,retouchings:o.retouching+","+o.otherRetouching,castName:o.castName,faceRetouching:o.faceRetouching,deadlines:function(e){if(e){const t=new Date;t.setDate(t.getDate()+e);const n=t.getMonth()+1,r=t.getDate();return String(n)+"/"+String(r)}return o.deadline}(parseFloat(o.deadline))+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=o.imgUrls,c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){[].push(...e.dataTransfer.files),o.isEnter=!1;for(let t=0;t<e.dataTransfer.files.length;t++){const n=e.dataTransfer.files[t],r=new FileReader;r.onload=function(){l.push(r.result),o.files.push(n)},r.readAsDataURL(n)}e.preventDefault()}function d(e){for(let t=0;t<e.target.files.length;t++){const n=e.target.files[t],r=new FileReader;r.onload=function(){l.push(r.result),o.files.push(n)},r.readAsDataURL(n)}console.log(o.files),console.log(l),e.preventDefault()}const f=()=>{o.uploadModal=!1,location.reload()},p=ci((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=ci({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),_=()=>{m.value++},g=()=>{m.value--};return kn((()=>{zd(Kd(r,Hd("completed"),Gd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Or(),Dr("section",null,[jr("div",Bp,[qp,jr("div",Wp,[jr("div",Vp,[jr("div",Hp,[$p,jr("div",Gp,[jr("label",Kp,[un(jr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Li,o.shop]]),Wr(" DG ")]),jr("label",Yp,[un(jr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Li,o.shop]]),Wr(" KPG ")]),jr("label",Zp,[un(jr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Li,o.shop]]),Wr(" GG ")])])]),jr("div",Jp,[Xp,un(jr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ni,o.manager]])]),jr("div",Qp,[em,un(jr("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.castName=e),class:"form-control"},null,512),[[Ni,o.castName]])]),jr("div",tm,[nm,jr("div",rm,[jr("div",null,[jr("label",im,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.retouching=e),value:"ほくろ"},null,512),[[Pi,o.retouching]]),Wr(" ほくろ ")]),jr("label",sm,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>o.retouching=e),value:"しわ"},null,512),[[Pi,o.retouching]]),Wr(" しわ ")]),jr("label",om,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>o.retouching=e),value:"傷"},null,512),[[Pi,o.retouching]]),Wr(" 傷 ")]),jr("label",am,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>o.retouching=e),value:"細身"},null,512),[[Pi,o.retouching]]),Wr(" 細身 ")])]),jr("div",lm,[jr("label",cm,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>i.checked=e)},null,512),[[Pi,i.checked]]),Wr(" その他 ")]),un(jr("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.otherRetouching=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"髪色やピアス、ネイルの修正等"},null,8,um),[[Ni,o.otherRetouching]])])])]),jr("div",hm,[dm,un(jr("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.faceRetouching=e),class:"form-control"},null,512),[[Ni,o.faceRetouching]])]),jr("div",fm,[pm,jr("div",mm,[jr("div",null,[jr("label",_m,[un(jr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Li,o.deadline]]),Wr(" 大至急 ")]),jr("label",gm,[un(jr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"3"},null,512),[[Li,o.deadline]]),Wr(" ～３日 ")]),jr("label",vm,[un(jr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"7"},null,512),[[Li,o.deadline]]),Wr(" ～７日 ")]),jr("label",ym,[un(jr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Li,o.deadline]]),Wr(" お任せ ")]),jr("div",bm,[jr("label",wm,[un(jr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>s.checked=e)},null,512),[[Pi,s.checked]]),Wr(" その他 ")]),un(jr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,km),[[Ni,o.otherDeadline]])])])])]),Cm,jr("div",Em,[jr("label",Im,[jr("input",{type:"file",onChange:d,multiple:""},null,32),Wr("ファイル選択 ")])]),jr("div",Tm,[jr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=ji((()=>{}),["prevent"])),onDrop:ji(h,["prevent"])},"ファイルアップロード",42,Sm)]),jr("div",null,[jr("ul",xm,[(Or(!0),Dr(Er,null,Ln(kt(l),((e,t)=>(Or(),Dr("li",{key:t,class:"position-relative cursor d-flex flex-column fs-6 p-2 w-25"},[jr("div",null,[jr("span",{class:"position-absolute display-6 delete-mark",onClick:e=>function(e){o.imgUrls.splice(e,1),o.files.splice(e,1)}(t)},"×",8,Rm),(Or(),Dr("img",{id:"thumb",class:"w-100",key:e,src:e},null,8,Om))])])))),128))])]),jr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[jr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])]),un(jr("div",null,[jr("div",Am,[jr("div",Nm,[jr("div",Pm,[jr("div",Dm,[jr("h2",Lm,Z(o.send),1)]),un(jr("div",Um,[jr("div",Mm,[jr("div",{class:"bg-primary rounded h-100 block",style:j("width:"+o.successWidth+"%")},null,4)])],512),[[Bi,o.progressBar]]),jr("div",Fm,[un(jr("button",zm," 完了 ",512),[[Bi,o.sending]]),un(jr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:f}," 完了 ",512),[[Bi,o.send_completed]])])])])])],512),[[Bi,o.uploadModal]])]),jm,jr("div",Bm,[jr("table",qm,[Wm,jr("tbody",null,[(Or(!0),Dr(Er,null,Ln(p.value,(e=>(Or(),Dr("tr",null,[jr("td",Vm,Z(e.shop),1),jr("td",Hm,Z(e.manager),1),jr("td",$m,Z(e.castName),1),jr("td",Gm,Z(e.retouchings),1),jr("td",Km,Z(e.faceRetouching),1),jr("td",Ym,Z(e.deadlines),1)])))),256))])])]),jr("div",{class:"text-center mb-5"},[jr("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),jr("span",{class:"btn btn-secondary ms-4",onClick:_},"next >")])]))}}),Xm={name:"App",components:{RequestRetouch:Jm}};const Qm={key:0,class:"btnBox text-center"};Xm.render=function(e,t,n,r,i,s){const o=Nn("router-link"),a=Nn("router-view");return Or(),Dr(Er,null,["index"==e.$route.name||"retouch"==e.$route.name?(Or(),Dr("div",Qm,[Br(o,{to:"/",class:"btn btn-primary mx-2"},{default:Xt((()=>[Wr("バナー依頼")])),_:1}),Br(o,{to:"/retouch",class:"btn btn-warning mx-2"},{default:Xt((()=>[Wr("レタッチ依頼")])),_:1})])):Vr("",!0),Br(a)],64)};const e_=new Es({state:()=>({page:0}),mutations:{set_page:(e,t)=>{e.page=t}}});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const t_="undefined"!=typeof window;const n_=Object.assign;function r_(e,t){const n={};for(const r in t){const i=t[r];n[r]=s_(i)?i.map(e):e(i)}return n}const i_=()=>{},s_=Array.isArray,o_=/\/$/,a_=e=>e.replace(o_,"");function l_(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function c_(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function u_(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function h_(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!d_(e[n],t[n]))return!1;return!0}function d_(e,t){return s_(e)?f_(e,t):s_(t)?f_(t,e):e===t}function f_(e,t){return s_(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var p_,m_,__,g_;(m_=p_||(p_={})).pop="pop",m_.push="push",(g_=__||(__={})).back="back",g_.forward="forward",g_.unknown="";const v_=/^[^#]+#/;function y_(e,t){return e.replace(v_,"#")+t}const b_=()=>({left:window.pageXOffset,top:window.pageYOffset});function w_(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function k_(e,t){return(history.state?history.state.position-t:-1)+e}const C_=new Map;let E_=()=>location.protocol+"//"+location.host;function I_(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),c_(n,"")}return c_(n,e)+r+i}function T_(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?b_():null}}function S_(e){return"string"==typeof e||"symbol"==typeof e}const x_={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},R_=Symbol("");var O_,A_;function N_(e,t){return n_(new Error,{type:e,[R_]:!0},t)}function P_(e,t){return e instanceof Error&&R_ in e&&(null==t||!!(e.type&t))}(A_=O_||(O_={}))[A_.aborted=4]="aborted",A_[A_.cancelled=8]="cancelled",A_[A_.duplicated=16]="duplicated";const D_="[^/]+?",L_={sensitive:!1,strict:!1,start:!0,end:!0},U_=/[.+*?^${}()[\]/\\]/g;function M_(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function F_(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=M_(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(z_(r))return 1;if(z_(i))return-1}return i.length-r.length}function z_(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const j_={type:0,value:""},B_=/[a-zA-Z0-9_]/;function q_(e,t,n){const r=function(e,t){const n=n_({},L_,t),r=[];let i=n.start?"^":"";const s=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(i+="/");for(let r=0;r<t.length;r++){const o=t[r];let a=40+(n.sensitive?.25:0);if(0===o.type)r||(i+="/"),i+=o.value.replace(U_,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:n,optional:l,regexp:c}=o;s.push({name:e,repeatable:n,optional:l});const u=c||D_;if(u!==D_){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(h=l&&t.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),i+=h,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",i=s[e-1];n[i.name]=r&&i.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(s_(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=s_(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[j_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:B_.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=n_(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function W_(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:H_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=K_(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(n_({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=q_(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!$_(h)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&o(h)}return d?()=>{s(d)}:i_}function s(e){if(S_(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&F_(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Y_(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!$_(e)&&r.set(e.record.name,e)}return t=K_({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw N_(1,{location:e});o=i.record.name,a=n_(V_(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&V_(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw N_(1,{location:e,currentLocation:t});o=i.record.name,a=n_({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:G_(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function V_(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function H_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function $_(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function G_(e){return e.reduce(((e,t)=>n_(e,t.meta)),{})}function K_(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Y_(e,t){return t.children.some((t=>t===e||Y_(e,t)))}const Z_=/#/g,J_=/&/g,X_=/\//g,Q_=/=/g,eg=/\?/g,tg=/\+/g,ng=/%5B/g,rg=/%5D/g,ig=/%5E/g,sg=/%60/g,og=/%7B/g,ag=/%7C/g,lg=/%7D/g,cg=/%20/g;function ug(e){return encodeURI(""+e).replace(ag,"|").replace(ng,"[").replace(rg,"]")}function hg(e){return ug(e).replace(tg,"%2B").replace(cg,"+").replace(Z_,"%23").replace(J_,"%26").replace(sg,"`").replace(og,"{").replace(lg,"}").replace(ig,"^")}function dg(e){return null==e?"":function(e){return ug(e).replace(Z_,"%23").replace(eg,"%3F")}(e).replace(X_,"%2F")}function fg(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function pg(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(tg," "),i=r.indexOf("="),s=fg(i<0?r:r.slice(0,i)),o=i<0?null:fg(r.slice(i+1));if(s in t){let e=t[s];s_(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function mg(e){let t="";for(let n in e){const r=e[n];if(n=hg(n).replace(Q_,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(s_(r)?r.map((e=>e&&hg(e))):[r&&hg(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function _g(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=s_(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const gg=Symbol(""),vg=Symbol(""),yg=Symbol(""),bg=Symbol(""),wg=Symbol("");function kg(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Cg(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(N_(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(N_(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Eg(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(Cg(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&Cg(l,n,r,o,e)()}))))}}var s;return i}function Ig(e){const t=ir(yg),n=ir(bg),r=ci((()=>t.resolve(kt(e.to)))),i=ci((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(u_.bind(null,i));if(o>-1)return o;const a=xg(e[t-2]);return t>1&&xg(i)===a&&s[s.length-1].path!==a?s.findIndex(u_.bind(null,e[t-2])):o})),s=ci((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!s_(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ci((()=>i.value>-1&&i.value===n.matched.length-1&&h_(n.params,r.value.params)));return{route:r,href:ci((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[kt(e.replace)?"replace":"push"](kt(e.to)).catch(i_):Promise.resolve()}}}const Tg=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ig,setup(e,{slots:t}){const n=st(Ig(e)),{options:r}=ir(yg),i=ci((()=>({[Rg(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Rg(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ui("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Sg=Tg;function xg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Rg=(e,t,n)=>null!=e?e:null!=t?t:n,Og=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ir(wg),i=ci((()=>e.route||r.value)),s=ir(vg,0),o=ci((()=>{let e=kt(s);const{matched:t}=i.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=ci((()=>i.value.matched[o.value]));rr(vg,ci((()=>o.value+1))),rr(gg,a),rr(wg,i);const l=bt(c,!1);var c;return sn((()=>[l.value,a.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&u_(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=e.name,o=a.value,c=o&&o.components[s];if(!c)return Ag(n.default,{Component:c,route:r});const u=o.props[s],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ui(c,n_({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[s]=null)},ref:l}));return Ag(n.default,{Component:d,route:r})||d}}});function Ag(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ng=Og;function Pg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Dg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const Lg=Dg,Ug=new Js("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Mg=new xo("@firebase/auth");function Fg(e,...t){Mg.logLevel<=ko.ERROR&&Mg.error(`Auth (${sa}): ${e}`,...t)}
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
 */function zg(e,...t){throw Bg(e,...t)}function jg(e,...t){return Bg(e,...t)}function Bg(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ug.create(e,...t)}function qg(e,t,...n){if(!e)throw Bg(t,...n)}function Wg(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fg(t),new Error(t)}function Vg(e,t){e||Wg(t)}
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
 */function Hg(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $g(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Gg(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==$g()&&"https:"!==$g()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Kg{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vg(t>e,"Short delay should be less than long delay!"),this.isMobile=Gs()||Ks()}get(){return Gg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Yg(e,t){Vg(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Zg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Wg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Wg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Wg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Xg=new Kg(3e4,6e4);
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
 */function Qg(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ev(e,t,n,r,i={}){return tv(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=lo(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Zg.fetch()(rv(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function tv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jg),t);try{const t=new iv(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw sv(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw sv(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw sv(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw sv(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Lg()),{[t]:n});return new Js("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);zg(e,a)}}catch(t){if(t instanceof Zs)throw t;zg(e,"network-request-failed",{message:String(t)})}}async function nv(e,t,n,r,i={}){const s=await ev(e,t,n,r,i);return"mfaPendingCredential"in s&&zg(e,"multi-factor-auth-required",{_serverResponse:s}),s}function rv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Yg(e.config,i):`${e.config.apiScheme}://${i}`}class iv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(jg(this.auth,"network-request-failed"))),Xg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function sv(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jg(e,t,r);return i.customData._tokenResponse=n,i}
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
function ov(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function av(e){return 1e3*Number(e)}function lv(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Fg("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ls(n);return e?JSON.parse(e):(Fg("Failed to decode base64 JWT payload"),null)}catch(e){return Fg("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function cv(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Zs&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class uv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class hv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ov(this.lastLoginAt),this.creationTime=ov(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function dv(e){var t;const n=e.auth,r=await e.getIdToken(),i=await cv(e,async function(e,t){return ev(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));qg(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Pg(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hv(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class fv{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qg(e.idToken,"internal-error"),qg(void 0!==e.idToken,"internal-error"),qg(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=lv(e);return qg(t,"internal-error"),qg(void 0!==t.exp,"internal-error"),qg(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qg(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
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
 */await async function(e,t){const n=await tv(e,{},(async()=>{const n=lo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=rv(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Zg.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new fv;return n&&(qg("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(qg("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(qg("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fv,this.toJSON())}_performRefresh(){return Wg("not implemented")}}
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
 */function pv(e,t){qg("string"==typeof e||void 0===e,"internal-error",{appName:t})}class mv{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await cv(this,this.stsTokenManager.getToken(this.auth,e));return qg(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=go(e),r=await n.getIdToken(t),i=lv(r);qg(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ov(av(i.auth_time)),issuedAtTime:ov(av(i.iat)),expirationTime:ov(av(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=go(e);await dv(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qg(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mv(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){qg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await dv(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cv(this,async function(e,t){return ev(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:k}=t;qg(v&&k,e,"internal-error");const C=fv.fromJSON(this.name,k);qg("string"==typeof v,e,"internal-error"),pv(u,e.name),pv(h,e.name),qg("boolean"==typeof y,e,"internal-error"),qg("boolean"==typeof b,e,"internal-error"),pv(d,e.name),pv(f,e.name),pv(p,e.name),pv(m,e.name),pv(_,e.name),pv(g,e.name);const E=new mv({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:C,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new fv;r.updateFromServerResponse(t);const i=new mv({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await dv(i),i}}
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
 */const _v=new Map;function gv(e){Vg(e instanceof Function,"Expected a class definition");let t=_v.get(e);return t?(Vg(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_v.set(e,t),t)}
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
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vv.type="NONE";const yv=vv;
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
 */function bv(e,t,n){return`firebase:${e}:${t}:${n}`}class wv{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=bv(this.userKey,r.apiKey,i),this.fullPersistenceKey=bv("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mv._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new wv(gv(yv),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||gv(yv);const s=bv(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=mv._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new wv(i,e,n)):new wv(i,e,n)}}
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
 */function kv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xv(t))return"Blackberry";if(Rv(t))return"Webos";if(Ev(t))return"Safari";if((t.includes("chrome/")||Iv(t))&&!t.includes("edge/"))return"Chrome";if(Sv(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Cv(e=$s()){return/firefox\//i.test(e)}function Ev(e=$s()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Iv(e=$s()){return/crios\//i.test(e)}function Tv(e=$s()){return/iemobile/i.test(e)}function Sv(e=$s()){return/android/i.test(e)}function xv(e=$s()){return/blackberry/i.test(e)}function Rv(e=$s()){return/webos/i.test(e)}function Ov(e=$s()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Av(){return function(){const e=$s();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Nv(e=$s()){return Ov(e)||Sv(e)||Rv(e)||xv(e)||/windows phone/i.test(e)||Tv(e)}
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
function Pv(e,t=[]){let n;switch(e){case"Browser":n=kv($s());break;case"Worker":n=`${kv($s())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${sa}/${r}`}async function Dv(e,t){return ev(e,"GET","/v2/recaptchaConfig",Qg(e,t))}function Lv(e){return void 0!==e&&void 0!==e.enterprise}class Uv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Mv(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=jg("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}class Fv{constructor(e){this.type="recaptcha-enterprise",this.auth=qv(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Lv(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Dv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Uv(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Lv(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Mv("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function zv(e,t,n,r=!1){const i=new Fv(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class jv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Bv{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wv(this),this.idTokenSubscription=new Wv(this),this.beforeStateQueue=new jv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ug,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gv(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await wv.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return qg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dv(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?go(e):null;return t&&qg(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qg(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gv(e))}))}async initializeRecaptchaConfig(){const e=await Dv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Uv(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Fv(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gv(e)||this._popupRedirectResolver;qg(t,this,"argument-error"),this.redirectPersistenceManager=await wv.create(this,[gv(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return qg(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Mg.logLevel<=ko.WARN&&Mg.warn(`Auth (${sa}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function qv(e){return go(e)}class Wv{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return qg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Vv(e,t,n){const r=qv(e);qg(r._canInitEmulator,r,"emulator-config-failed"),qg(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Hv(t),{host:o,port:a}=function(e){const t=Hv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:$v(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:$v(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Hv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $v(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Gv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Wg("not implemented")}_getIdTokenResponse(e){return Wg("not implemented")}_linkToIdToken(e,t){return Wg("not implemented")}_getReauthenticationResolver(e){return Wg("not implemented")}}
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
async function Kv(e,t){return nv(e,"POST","/v1/accounts:signInWithPassword",Qg(e,t))}
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
class Yv extends Gv{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Yv(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Yv(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await zv(e,n,"signInWithPassword");return Kv(e,t)}return Kv(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await zv(e,n,"signInWithPassword");return Kv(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return nv(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{email:this._email,oobCode:this._password});default:zg(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return ev(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return nv(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:zg(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Zv(e,t){return nv(e,"POST","/v1/accounts:signInWithIdp",Qg(e,t))}
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
 */class Jv extends Gv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jv(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):zg("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Pg(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jv(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Zv(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Zv(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zv(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=lo(t)}return e}}
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
 */class Xv{constructor(e){var t,n,r,i,s,o;const a=co(uo(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);qg(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=co(uo(e)).link,n=t?co(uo(t)).deep_link_id:null,r=co(uo(e)).deep_link_id;return(r?co(uo(r)).link:null)||r||n||t||e}(e);try{return new Xv(t)}catch(e){return null}}}
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
 */class Qv{constructor(){this.providerId=Qv.PROVIDER_ID}static credential(e,t){return Yv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xv.parseLink(t);return qg(n,"argument-error"),Yv._fromEmailAndCode(e,n.code,n.tenantId)}}Qv.PROVIDER_ID="password",Qv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ey{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ty extends ey{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class ny extends ty{constructor(){super("facebook.com")}static credential(e){return Jv._fromParams({providerId:ny.PROVIDER_ID,signInMethod:ny.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ny.credentialFromTaggedObject(e)}static credentialFromError(e){return ny.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ny.credential(e.oauthAccessToken)}catch(e){return null}}}ny.FACEBOOK_SIGN_IN_METHOD="facebook.com",ny.PROVIDER_ID="facebook.com";
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
class ry extends ty{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jv._fromParams({providerId:ry.PROVIDER_ID,signInMethod:ry.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ry.credentialFromTaggedObject(e)}static credentialFromError(e){return ry.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ry.credential(t,n)}catch(e){return null}}}ry.GOOGLE_SIGN_IN_METHOD="google.com",ry.PROVIDER_ID="google.com";
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
class iy extends ty{constructor(){super("github.com")}static credential(e){return Jv._fromParams({providerId:iy.PROVIDER_ID,signInMethod:iy.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return iy.credentialFromTaggedObject(e)}static credentialFromError(e){return iy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return iy.credential(e.oauthAccessToken)}catch(e){return null}}}iy.GITHUB_SIGN_IN_METHOD="github.com",iy.PROVIDER_ID="github.com";
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
class sy extends ty{constructor(){super("twitter.com")}static credential(e,t){return Jv._fromParams({providerId:sy.PROVIDER_ID,signInMethod:sy.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sy.credentialFromTaggedObject(e)}static credentialFromError(e){return sy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sy.credential(t,n)}catch(e){return null}}}sy.TWITTER_SIGN_IN_METHOD="twitter.com",sy.PROVIDER_ID="twitter.com";
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
class oy{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await mv._fromIdTokenResponse(e,n,r),s=ay(n);return new oy({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ay(n);return new oy({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ay(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class ly extends Zs{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ly.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ly(e,t,n,r)}}function cy(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ly._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function uy(e,t,n=!1){const r="signIn",i=await cy(e,r,t),s=await oy._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function hy(e,t,n){return async function(e,t){return uy(qv(e),t)}(go(e),Qv.credential(t,n))}
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
 */const dy="__sak";
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
 */class fy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dy,"1"),this.storage.removeItem(dy),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class py extends fy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=$s();return Ev(e)||Ov(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Av()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}py.type="LOCAL";const my=py;
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
 */class _y extends fy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_y.type="SESSION";const gy=_y;
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
class vy{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new vy(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function yy(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */vy.receivers=[];class by{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=yy("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function wy(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function ky(){return void 0!==wy().WorkerGlobalScope&&"function"==typeof wy().importScripts}
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
const Cy="firebaseLocalStorageDb",Ey="firebaseLocalStorage",Iy="fbase_key";class Ty{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Sy(e,t){return e.transaction([Ey],t?"readwrite":"readonly").objectStore(Ey)}function xy(){const e=indexedDB.open(Cy,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ey,{keyPath:Iy})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ey)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Cy);return new Ty(e).toPromise()}(),t(await xy()))}))}))}async function Ry(e,t,n){const r=Sy(e,!0).put({[Iy]:t,value:n});return new Ty(r).toPromise()}function Oy(e,t){const n=Sy(e,!0).delete(t);return new Ty(n).toPromise()}class Ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await xy()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ky()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vy._getInstance(ky()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new by(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xy();return await Ry(e,dy,"1"),await Oy(e,dy),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ry(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Sy(e,!1).get(t),r=await new Ty(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Oy(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Sy(e,!1).getAll();return new Ty(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ay.type="LOCAL";const Ny=Ay;new Kg(3e4,6e4);
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
class Py extends Gv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zv(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zv(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zv(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dy(e){return uy(e.auth,new Py(e),e.bypassAuthState)}function Ly(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await cv(e,cy(r,i,t,e),n);qg(s.idToken,r,"internal-error");const o=lv(s.idToken);qg(o,r,"internal-error");const{sub:a}=o;return qg(e.uid===a,r,"user-mismatch"),oy._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&zg(r,"user-mismatch"),e}}(n,new Py(e),e.bypassAuthState)}async function Uy(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),async function(e,t,n=!1){const r=await cv(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return oy._forOperation(e,"link",r)}(n,new Py(e),e.bypassAuthState)}
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
 */class My{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return Uy;case"reauthViaPopup":case"reauthViaRedirect":return Ly;default:zg(this.auth,"internal-error")}}resolve(e){Vg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Fy=new Kg(2e3,1e4);class zy extends My{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zy.currentPopupAction&&zy.currentPopupAction.cancel(),zy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return qg(e,this.auth,"internal-error"),e}async onExecution(){Vg(1===this.filter.length,"Popup operations only handle one event");const e=yy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(jg(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(jg(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(jg(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fy.get())};e()}}zy.currentPopupAction=null;
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
const jy="pendingRedirect",By=new Map;class qy extends My{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=By.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return bv(jy,e.config.apiKey,e.name)}(t),r=function(e){return gv(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}By.set(this.auth._key(),e)}return this.bypassAuthState||By.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Wy(e,t){By.set(e._key(),t)}async function Vy(e,t,n=!1){const r=qv(e),i=
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
function(e,t){return t?gv(t):(qg(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new qy(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class Hy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gy(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gy(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(jg(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($y(e))}saveEventToCache(e){this.cachedEventUids.add($y(e)),this.lastProcessedEventTime=Date.now()}}function $y(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Gy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Ky=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yy=/^https?/;async function Zy(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ev(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Jy(e))return}catch(e){}zg(e,"unauthorized-domain")}function Jy(e){const t=Hg(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Yy.test(n))return!1;if(Ky.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Xy=new Kg(3e4,6e4);function Qy(){const e=wy().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function eb(e){return new Promise(((t,n)=>{var r,i,s;function o(){Qy(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(jg(e,"network-request-failed"))},timeout:Xy.get()})}if(null===(i=null===(r=wy().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=wy().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return wy()[t]=()=>{gapi.load?o():n(jg(e,"network-request-failed"))},Mv(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw tb=null,e}))}let tb=null;
/**
 * @license
 * Copyright 2020 Google LLC.
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
const nb=new Kg(5e3,15e3),rb="__/auth/iframe",ib="emulator/auth/iframe",sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ab(e){const t=e.config;qg(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yg(t,ib):`https://${e.config.authDomain}/${rb}`,r={apiKey:t.apiKey,appName:e.name,v:sa},i=ob.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${lo(r).slice(1)}`}async function lb(e){const t=await function(e){return tb=tb||eb(e),tb}(e),n=wy().gapi;return qg(n,e,"internal-error"),t.open({where:document.body,url:ab(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sb,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=jg(e,"network-request-failed"),s=wy().setTimeout((()=>{r(i)}),nb.get());function o(){wy().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ub{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function hb(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cb),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$s().toLowerCase();n&&(a=Iv(c)?"_blank":n),Cv(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=$s()){var t;return Ov(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new ub(null);const h=window.open(t||"",a,u);qg(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ub(h)}const db="__/auth/handler",fb="emulator/auth/handler",pb=encodeURIComponent("fac");async function mb(e,t,n,r,i,s){qg(e.config.authDomain,e,"auth-domain-config-required"),qg(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:sa,eventId:i};if(t instanceof ey){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",io(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ty){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${pb}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${db}`;return Yg(e,fb)}
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
 */(e)}?${lo(a).slice(1)}${c}`}const _b="webStorageSupport";const gb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gy,this._completeRedirectFn=Vy,this._overrideRedirectResult=Wy}async _openPopup(e,t,n,r){var i;Vg(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return hb(e,await mb(e,t,n,Hg(),r),yy())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){wy().location.href=e}(await mb(e,t,n,Hg(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Vg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await lb(e),n=new Hy(e);return t.register("authEvent",(t=>{qg(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_b,{type:_b},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[_b];void 0!==i&&t(!!i),zg(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nv()||Ev()||Ov()}};var vb="@firebase/auth",yb="0.23.2";
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
class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qg(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const wb=Ws("authIdTokenMaxAge")||300;let kb=null;function Cb(e=aa()){const t=na(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=na(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(oo(n.getOptions(),null!=t?t:{}))return e;zg(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gb,persistence:[Ny,my,gy]}),r=Ws("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>wb)return;const r=null==t?void 0:t.token;kb!==r&&(kb=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){go(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){go(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=js("auth");return s&&Vv(n,`http://${s}`),n}var Eb;Eb="Browser",ta(new vo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;qg(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Eb,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pv(Eb)},l=new Bv(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gv);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ta(new vo("auth-internal",(e=>{const t=qv(e.getProvider("auth").getImmediate());return new bb(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),la(vb,yb,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Eb)),la(vb,yb,"esm2017");const Ib={class:"container"},Tb=jr("h2",null,"バナー依頼",-1),Sb={class:"alert alert-primary"},xb={class:"form-group"},Rb={class:"input-group align-items-center mb-3"},Ob=jr("h5",{class:"me-3"},"店舗：",-1),Ab={class:"btn-group"},Nb={class:"me-4"},Pb={class:"me-4"},Db={class:"me-4"},Lb={class:"input-group align-items-center mb-3"},Ub=jr("h5",{class:"me-3"},"担当者：",-1),Mb={class:"row mb-3"},Fb=jr("div",{class:"col"},[jr("h5",null,"サイズ：")],-1),zb={class:"btn-group flex-column"},jb={class:"me-4"},Bb={class:"me-4"},qb={class:"input-group align-items-center"},Wb={class:"me-4"},Vb=["disabled"],Hb={class:"input-group align-items-center mb-3"},$b=jr("h5",{class:"me-3"},"イベント名：",-1),Gb={class:"mb-3"},Kb=jr("h5",{class:"me-3"},"イベント内容：",-1),Yb={class:"mb-3"},Zb=jr("h5",{class:"me-3"},"入れたい文言：",-1),Jb={class:"mb-3"},Xb=jr("h5",{class:"me-3"},"その他要望：",-1),Qb={class:"row mb-3"},ew=jr("div",{class:"col"},[jr("h5",null,"提出期限：")],-1),tw={class:"btn-group flex-column"},nw={class:"me-4"},rw={class:"me-4"},iw={class:"me-4"},sw={class:"me-4"},ow={class:"input-group align-items-center"},aw={class:"me-4"},lw=["disabled"],cw=jr("h5",null," 参考画像や使用素材：",-1),uw={class:"phone_area"},hw={class:"select_file"},dw={class:"pc_area"},fw=["onDrop"],pw={class:"list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0"},mw=["onClick"],_w=["src"],gw={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},vw={class:"z-3 bg-white .text-secondary w-50 rounded mt-4",style:{height:"fit-content"}},yw={class:"d-flex flex-column p-3"},bw={class:"d-flex justify-content-center items-center"},ww={class:"fs-3 lh-lg"},kw={class:"bg-secondary rounded mt-3",style:{height:"20px"}},Cw={class:"w-100 h2",style:{height:"20px"}},Ew={class:"mt-4 d-flex justify-content-end items-center"},Iw={class:"btn btn-secondary px-4 py-2 fw-bold"},Tw=jr("h3",null,"依頼中",-1),Sw={class:"table-responsive mb-4"},xw={class:"table table-striped text-nowrap",style:{width:"1296px"}},Rw=jr("thead",null,[jr("tr",null,[jr("th",{scope:"col"},"店舗"),jr("th",{scope:"col"},"担当者"),jr("th",{scope:"col"},"サイズ"),jr("th",{scope:"col"},"イベント名"),jr("th",{scope:"col"},"内容"),jr("th",{scope:"col"},"文言"),jr("th",{scope:"col"},"その他要望"),jr("th",{scope:"col"},"提出期限")])],-1),Ow={class:"text-wrap"},Aw={class:"text-wrap"},Nw={class:"text-wrap"},Pw={class:"text-wrap"},Dw={class:"text-wrap"},Lw={class:"text-wrap"},Uw={class:"text-wrap"},Mw={class:"text-wrap"},Fw={name:"index"};var zw=Object.assign(Fw,{setup(e){const t=oa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=tf(t),r=Ld(n,"banner"),i=st({checked:!1}),s=st({checked:!1}),o=st({manager:"",size:[],otherSize:[],sizes:[],eventName:"",eventDetails:"",wording:"",others:"",deadline:"",otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:es(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false",imgUrls:[]}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const r=[],i={contentType:"image/jpeg"},s=zp(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Fp(s,o.eventName+"/"+e.name);await Dp(t,e,i);const n=await Mp(t);if(r.push(n),r.length==o.files.length){console.log("got all paths here now:",r);Dp(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Md(Ld(n,"banner/"+e),{manager:o.manager,sizes:o.size+","+o.otherSize,eventName:o.eventName,eventDetails:o.eventDetails,wording:o.wording,others:o.others,deadlines:function(e){if(e){const t=new Date;t.setDate(t.getDate()+e);const n=t.getMonth()+1,r=t.getDate();return String(n)+"/"+String(r)}return o.deadline}(parseFloat(o.deadline))+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=o.imgUrls,c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){[].push(...e.dataTransfer.files),o.isEnter=!1;for(let t=0;t<e.dataTransfer.files.length;t++){const n=e.dataTransfer.files[t],r=new FileReader;r.onload=function(){l.push(r.result),o.files.push(n)},r.readAsDataURL(n)}e.preventDefault()}function d(e){for(let t=0;t<e.target.files.length;t++){const n=e.target.files[t],r=new FileReader;r.onload=function(){l.push(r.result),o.files.push(n)},r.readAsDataURL(n)}console.log(o.files),console.log(l),e.preventDefault()}const f=()=>{o.uploadModal=!1,location.reload()},p=ci((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=ci({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),_=()=>{m.value++},g=()=>{m.value--};return kn((()=>{zd(Kd(r,Hd("completed"),Gd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Or(),Dr("section",null,[jr("div",Ib,[Tb,jr("div",Sb,[jr("div",xb,[jr("div",Rb,[Ob,jr("div",Ab,[jr("label",Nb,[un(jr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Li,o.shop]]),Wr(" DG ")]),jr("label",Pb,[un(jr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Li,o.shop]]),Wr(" KPG ")]),jr("label",Db,[un(jr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Li,o.shop]]),Wr(" GG ")])])]),jr("div",Lb,[Ub,un(jr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ni,o.manager]])]),jr("div",Mb,[Fb,jr("div",zb,[jr("div",null,[jr("label",jb,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>o.size=e),value:"700*400"},null,512),[[Pi,o.size]]),Wr(" 700 * 400 ")]),jr("label",Bb,[un(jr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.size=e),value:"640*640"},null,512),[[Pi,o.size]]),Wr(" 640 * 640 ")])]),jr("div",qb,[jr("label",Wb,[un(jr("input",{type:"checkbox",name:"size","onUpdate:modelValue":t[6]||(t[6]=e=>i.checked=e)},null,512),[[Pi,i.checked]]),Wr(" その他 ")]),un(jr("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>o.otherSize=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他サイズはこちら"},null,8,Vb),[[Ni,o.otherSize]])])])]),jr("div",Hb,[$b,un(jr("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>o.eventName=e),class:"form-control"},null,512),[[Ni,o.eventName]])]),jr("div",Gb,[Kb,un(jr("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.eventDetails=e),class:"form-control"},null,512),[[Ni,o.eventDetails]])]),jr("div",Yb,[Zb,un(jr("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.wording=e),class:"form-control"},null,512),[[Ni,o.wording]])]),jr("div",Jb,[Xb,un(jr("textarea",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.others=e),class:"form-control"},null,512),[[Ni,o.others]])]),jr("div",Qb,[ew,jr("div",tw,[jr("div",null,[jr("label",nw,[un(jr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Li,o.deadline]]),Wr(" 大至急 ")]),jr("label",rw,[un(jr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"3"},null,512),[[Li,o.deadline]]),Wr(" ～３日 ")]),jr("label",iw,[un(jr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"7"},null,512),[[Li,o.deadline]]),Wr(" ～７日 ")]),jr("label",sw,[un(jr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Li,o.deadline]]),Wr(" お任せ ")]),jr("div",ow,[jr("label",aw,[un(jr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>s.checked=e)},null,512),[[Pi,s.checked]]),Wr(" その他 ")]),un(jr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,lw),[[Ni,o.otherDeadline]])])])])]),cw,jr("div",uw,[jr("label",hw,[jr("input",{type:"file",onChange:d,multiple:""},null,32),Wr("ファイル選択 ")])]),jr("div",dw,[jr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=ji((()=>{}),["prevent"])),onDrop:ji(h,["prevent"])},"ファイルアップロード",42,fw)]),jr("div",null,[jr("ul",pw,[(Or(!0),Dr(Er,null,Ln(kt(l),((e,t)=>(Or(),Dr("li",{key:t,class:"position-relative cursor d-flex flex-column fs-6 p-2 w-25"},[jr("div",null,[jr("span",{class:"position-absolute display-6 delete-mark",onClick:e=>function(e){o.imgUrls.splice(e,1),o.files.splice(e,1)}(t)},"×",8,mw),(Or(),Dr("img",{id:"thumb",class:"w-100",key:e,src:e},null,8,_w))])])))),128))])]),jr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[jr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])])]),un(jr("div",null,[jr("div",gw,[jr("div",vw,[jr("div",yw,[jr("div",bw,[jr("h2",ww,Z(o.send),1)]),un(jr("div",kw,[jr("div",Cw,[jr("div",{class:"bg-primary rounded h-100 block",style:j("width:"+o.successWidth+"%")},null,4)])],512),[[Bi,o.progressBar]]),jr("div",Ew,[un(jr("button",Iw," 完了 ",512),[[Bi,o.sending]]),un(jr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:f}," 完了 ",512),[[Bi,o.send_completed]])])])])])],512),[[Bi,o.uploadModal]]),Tw,jr("div",Sw,[jr("table",xw,[Rw,jr("tbody",null,[(Or(!0),Dr(Er,null,Ln(p.value,(e=>(Or(),Dr("tr",null,[jr("td",Ow,Z(e.shop),1),jr("td",Aw,Z(e.manager),1),jr("td",Nw,Z(e.sizes),1),jr("td",Pw,Z(e.eventName),1),jr("td",Dw,Z(e.eventDetails),1),jr("td",Lw,Z(e.wording),1),jr("td",Uw,Z(e.others),1),jr("td",Mw,Z(e.deadlines),1)])))),256))])])]),jr("div",{class:"text-center mb-5"},[jr("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),jr("span",{class:"btn btn-secondary ms-4",onClick:_},"next >")])]))}}),jw="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Bw(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return qw(null==t&&n.path)}},n.exports),n.exports}function qw(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var Ww=Bw((function(e,t){!function(){function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){a(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof jw&&jw.global===jw?jw:void 0,o=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(e,t,o){var a=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?i(l):r(l.href)?n(e,t,o):i(l,l.target="_blank")):(l.href=a.createObjectURL(e),setTimeout((function(){a.revokeObjectURL(l.href)}),4e4),setTimeout((function(){i(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,s,o){if(s=s||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),s);else if(r(e))n(e,s,o);else{var a=document.createElement("a");a.href=e,a.target="_blank",setTimeout((function(){i(a)}))}}:function(e,t,r,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,r);var a="application/octet-stream"===e.type,l=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&l||o)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},u.readAsDataURL(e)}else{var h=s.URL||s.webkitURL,d=h.createObjectURL(e);i?i.location=d:location.href=d,i=null,setTimeout((function(){h.revokeObjectURL(d)}),4e4)}});s.saveAs=a.saveAs=a,e.exports=a}()})),Vw=Bw((function(e,t){
/*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */
e.exports=function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){if(!a&&qw)return qw();if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[o]={exports:{}};t[o][0].call(c.exports,(function(e){return i(t[o][1][e]||e)}),c,c.exports,e,t,n,r)}return n[o].exports}for(var s=qw,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e("./utils"),i=e("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(e){for(var t,n,i,o,a,l,c,u=[],h=0,d=e.length,f=d,p="string"!==r.getTypeOf(e);h<e.length;)f=d-h,i=p?(t=e[h++],n=h<d?e[h++]:0,h<d?e[h++]:0):(t=e.charCodeAt(h++),n=h<d?e.charCodeAt(h++):0,h<d?e.charCodeAt(h++):0),o=t>>2,a=(3&t)<<4|n>>4,l=1<f?(15&n)<<2|i>>6:64,c=2<f?63&i:64,u.push(s.charAt(o)+s.charAt(a)+s.charAt(l)+s.charAt(c));return u.join("")},n.decode=function(e){var t,n,r,o,a,l,c=0,u=0,h="data:";if(e.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var d,f=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(e.charAt(e.length-1)===s.charAt(64)&&f--,e.charAt(e.length-2)===s.charAt(64)&&f--,f%1!=0)throw new Error("Invalid base64 input, bad content length.");for(d=i.uint8array?new Uint8Array(0|f):new Array(0|f);c<e.length;)t=s.indexOf(e.charAt(c++))<<2|(o=s.indexOf(e.charAt(c++)))>>4,n=(15&o)<<4|(a=s.indexOf(e.charAt(c++)))>>2,r=(3&a)<<6|(l=s.indexOf(e.charAt(c++))),d[u++]=t,64!==a&&(d[u++]=n),64!==l&&(d[u++]=r);return d}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e("./external"),i=e("./stream/DataWorker"),s=e("./stream/Crc32Probe"),o=e("./stream/DataLengthProbe");function a(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}a.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),t=this;return e.on("end",(function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")})),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},a.createWorkerFrom=function(e,t,n){return e.pipe(new s).pipe(new o("uncompressedSize")).pipe(t.compressWorker(n)).pipe(new o("compressedSize")).withStreamInfo("compression",t)},t.exports=a},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e("./utils"),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return void 0!==e&&e.length?"string"!==r.getTypeOf(e)?function(e,t,n,r){var s=i,o=r+n;e^=-1;for(var a=r;a<o;a++)e=e>>>8^s[255&(e^t[a])];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var s=i,o=r+n;e^=-1;for(var a=r;a<o;a++)e=e>>>8^s[255&(e^t.charCodeAt(a))];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r="undefined"!=typeof Promise?Promise:e("lie"),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,i=e("pako"),s=e("./utils"),o=e("./stream/GenericWorker"),a=r?"uint8array":"array";function l(e,t){o.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic="\b\0",s.inherits(l,o),l.prototype.processChunk=function(e){this.meta=e.meta,null===this._pako&&this._createPako(),this._pako.push(s.transformTo(a,e.data),!1)},l.prototype.flush=function(){o.prototype.flush.call(this),null===this._pako&&this._createPako(),this._pako.push([],!0)},l.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},l.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new l("Deflate",e)},n.uncompressWorker=function(){return new l("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r="";for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var h,d,f=e.file,p=e.compression,m=u!==a.utf8encode,_=s.transformTo("string",u(f.name)),g=s.transformTo("string",a.utf8encode(f.name)),v=f.comment,y=s.transformTo("string",u(v)),b=s.transformTo("string",a.utf8encode(v)),w=g.length!==f.name.length,k=b.length!==v.length,C="",E="",I="",T=f.dir,S=f.date,x={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(x.crc32=e.crc32,x.compressedSize=e.compressedSize,x.uncompressedSize=e.uncompressedSize);var R=0;t&&(R|=8),m||!w&&!k||(R|=2048);var O,A,N,P=0,D=0;T&&(P|=16),"UNIX"===o?(D=798,P|=(O=f.unixPermissions,A=T,N=O,O||(N=A?16893:33204),(65535&N)<<16)):(D=20,P|=function(e){return 63&(e||0)}(f.dosPermissions)),h=S.getUTCHours(),h<<=6,h|=S.getUTCMinutes(),h<<=5,h|=S.getUTCSeconds()/2,d=S.getUTCFullYear()-1980,d<<=4,d|=S.getUTCMonth()+1,d<<=5,d|=S.getUTCDate(),w&&(E=r(1,1)+r(l(_),4)+g,C+="up"+r(E.length,2)+E),k&&(I=r(1,1)+r(l(y),4)+b,C+="uc"+r(I.length,2)+I);var L="";return L+="\n\0",L+=r(R,2),L+=p.magic,L+=r(h,2),L+=r(d,2),L+=r(x.crc32,4),L+=r(x.compressedSize,4),L+=r(x.uncompressedSize,4),L+=r(_.length,2),L+=r(C.length,2),{fileRecord:c.LOCAL_FILE_HEADER+L+_+C,dirRecord:c.CENTRAL_FILE_HEADER+r(D,2)+L+r(y.length,2)+"\0\0\0\0"+r(P,4)+r(i,4)+_+C+y}}var s=e("../utils"),o=e("../stream/GenericWorker"),a=e("../utf8"),l=e("../crc32"),c=e("../signature");function u(e,t,n,r){o.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t,n=this.streamFiles&&!e.file.dir,s=i(e,n,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(s.dirRecord),n)this.push({data:(t=e,c.DATA_DESCRIPTOR+r(t.crc32,4)+r(t.compressedSize,4)+r(t.uncompressedSize,4)),meta:{percent:100}});else for(this.push({data:s.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n,i,o,a,l,u,h=this.bytesWritten-e,d=(n=this.dirRecords.length,i=h,o=e,a=this.zipComment,l=this.encodeFileName,u=s.transformTo("string",l(a)),c.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(n,2)+r(n,2)+r(i,4)+r(o,4)+r(u.length,2)+u);this.push({data:d,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",(function(e){t.processChunk(e)})),e.on("end",(function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()})),e.on("error",(function(e){t.error(e)})),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch(e){}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e("../compressions"),i=e("./ZipFileWorker");n.generateWorker=function(e,t,n){var s=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach((function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw new Error(n+" is not a valid compression method !");return i}(n.options.compression,t.compression),a=n.options.compressionOptions||t.compressionOptions||{},l=n.dir,c=n.date;n._compressWorker(i,a).withStreamInfo("file",{name:e,dir:l,date:c,comment:n.comment||"",unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(s)})),s.entriesCount=o}catch(e){s.error(e)}return s}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new r;for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t]);return e}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(e,t){return(new r).loadAsync(e,t)},r.external=e("./external"),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e("./utils"),i=e("./external"),s=e("./utf8"),o=e("./zipEntries"),a=e("./stream/Crc32Probe"),l=e("./nodejsUtils");function c(e){return new i.Promise((function(t,n){var r=e.decompressed.getContentWorker().pipe(new a);r.on("error",(function(e){n(e)})).on("end",(function(){r.streamInfo.crc32!==e.decompressed.crc32?n(new Error("Corrupted zip : CRC32 mismatch")):t()})).resume()}))}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),l.isNode&&l.isStream(e)?i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then((function(e){var n=new o(t);return n.load(e),n})).then((function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var s=0;s<r.length;s++)n.push(c(r[s]));return i.Promise.all(n)})).then((function(e){for(var i=e.shift(),s=i.files,o=0;o<s.length;o++){var a=s[o],l=a.fileNameStr,c=r.resolve(a.fileNameStr);n.file(c,a.decompressed,{binary:!0,optimizedBinaryString:!0,date:a.date,dir:a.dir,comment:a.fileCommentStr.length?a.fileCommentStr:null,unixPermissions:a.unixPermissions,dosPermissions:a.dosPermissions,createFolders:t.createFolders}),a.dir||(n.file(c).unsafeOriginalName=l)}return i.zipComment.length&&(n.comment=i.zipComment),n}))}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e("../utils"),i=e("../stream/GenericWorker");function s(e,t){i.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(s,i),s.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on("data",(function(e){t.push({data:e,meta:{percent:0}})})).on("error",(function(e){t.isPaused?this.generatedError=e:t.error(e)})).on("end",(function(){t.isPaused?t._upstreamEnded=!0:t.end()}))},s.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e("readable-stream").Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on("data",(function(e,t){i.push(e)||i._helper.pause(),n&&n(t)})).on("error",(function(e){i.emit("error",e)})).on("end",(function(){i.push(null)}))}e("../utils").inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:"undefined"!=typeof Buffer,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if("number"==typeof e)throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&"function"==typeof e.on&&"function"==typeof e.pause&&"function"==typeof e.resume}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=s.getTypeOf(t),a=s.extend(n||{},l);a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),"string"==typeof a.unixPermissions&&(a.unixPermissions=parseInt(a.unixPermissions,8)),a.unixPermissions&&16384&a.unixPermissions&&(a.dir=!0),a.dosPermissions&&16&a.dosPermissions&&(a.dir=!0),a.dir&&(e=m(e)),a.createFolders&&(r=p(e))&&_.call(this,r,!0);var h="string"===i&&!1===a.binary&&!1===a.base64;n&&void 0!==n.binary||(a.binary=!h),(t instanceof c&&0===t.uncompressedSize||a.dir||!t||0===t.length)&&(a.base64=!1,a.binary=!0,t="",a.compression="STORE",i="string");var g=null;g=t instanceof c||t instanceof o?t:d.isNode&&d.isStream(t)?new f(e,t):s.prepareContent(e,t,a.binary,a.optimizedBinaryString,a.base64);var v=new u(e,g,a);this.files[e]=v}var i=e("./utf8"),s=e("./utils"),o=e("./stream/GenericWorker"),a=e("./stream/StreamHelper"),l=e("./defaults"),c=e("./compressedObject"),u=e("./zipObject"),h=e("./generate"),d=e("./nodejsUtils"),f=e("./nodejs/NodejsStreamInputAdapter"),p=function(e){"/"===e.slice(-1)&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return 0<t?e.substring(0,t):""},m=function(e){return"/"!==e.slice(-1)&&(e+="/"),e},_=function(e,t){return t=void 0!==t?t:l.createFolders,e=m(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function g(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var v={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach((function(n,r){e(n,r)&&t.push(r)})),t},file:function(e,t,n){if(1!==arguments.length)return e=this.root+e,r.call(this,e,t,n),this;if(g(e)){var i=e;return this.filter((function(e,t){return!t.dir&&i.test(e)}))}var s=this.files[this.root+e];return s&&!s.dir?s:null},folder:function(e){if(!e)return this;if(g(e))return this.filter((function(t,n){return n.dir&&e.test(t)}));var t=this.root+e,n=_.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||("/"!==e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter((function(t,n){return n.name.slice(0,e.length)===e})),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,n={};try{if((n=s.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),"binarystring"===n.type&&(n.type="string"),!n.type)throw new Error("No output type specified.");s.checkSupport(n.type),"darwin"!==n.platform&&"freebsd"!==n.platform&&"linux"!==n.platform&&"sunos"!==n.platform||(n.platform="UNIX"),"win32"===n.platform&&(n.platform="DOS");var r=n.comment||this.comment||"";t=h.generateWorker(this,n,r)}catch(e){(t=new o("error")).error(e)}return new a(t,n.type||"string",n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e=e||{}).type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};t.exports=v},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e("stream")},{stream:void 0}],17:[function(e,t,n){var r=e("./DataReader");function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e("../utils").inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),s=this.length-4;0<=s;--s)if(this.data[s]===t&&this.data[s+1]===n&&this.data[s+2]===r&&this.data[s+3]===i)return s-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),s=this.readData(4);return t===s[0]&&n===s[1]&&r===s[2]&&i===s[3]},i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e("../utils");function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e("./Uint8ArrayReader");function i(e){r.call(this,e)}e("../utils").inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e("./DataReader");function i(e){r.call(this,e)}e("../utils").inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e("./ArrayReader");function i(e){r.call(this,e)}e("../utils").inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e("../utils"),i=e("../support"),s=e("./ArrayReader"),o=e("./StringReader"),a=e("./NodeBufferReader"),l=e("./Uint8ArrayReader");t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),"string"!==t||i.uint8array?"nodebuffer"===t?new a(e):i.uint8array?new l(r.transformTo("uint8array",e)):new s(r.transformTo("array",e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\b"},{}],24:[function(e,t,n){var r=e("./GenericWorker"),i=e("../utils");function s(e){r.call(this,"ConvertWorker to "+e),this.destType=e}i.inherits(s,r),s.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e("./GenericWorker"),i=e("../crc32");function s(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(s,r),s.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(s,i),s.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e("../utils"),i=e("./GenericWorker");function s(e){i.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then((function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()}),(function(e){t.error(e)}))}r.inherits(s,i),s.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":e=this.data.substring(this.index,t);break;case"uint8array":e=this.data.subarray(this.index,t);break;case"array":case"nodebuffer":e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",(function(e){t.processChunk(e)})),e.on("end",(function(){t.end()})),e.on("error",(function(e){t.error(e)})),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e("../utils"),i=e("./ConvertWorker"),s=e("./GenericWorker"),o=e("../base64"),a=e("../support"),l=e("../external"),c=null;if(a.nodestream)try{c=e("../nodejs/NodejsStreamOutputAdapter")}catch(e){}function u(e,t){return new l.Promise((function(n,i){var s=[],a=e._internalType,l=e._outputType,c=e._mimeType;e.on("data",(function(e,n){s.push(e),t&&t(n)})).on("error",(function(e){s=[],i(e)})).on("end",(function(){try{var e=function(e,t,n){switch(e){case"blob":return r.newBlob(r.transformTo("arraybuffer",t),n);case"base64":return o.encode(t);default:return r.transformTo(e,t)}}(l,function(e,t){var n,r=0,i=null,s=0;for(n=0;n<t.length;n++)s+=t[n].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(i=new Uint8Array(s),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}(a,s),c);n(e)}catch(e){i(e)}s=[]})).resume()}))}function h(e,t,n){var o=t;switch(t){case"blob":case"arraybuffer":o="uint8array";break;case"base64":o="string"}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new s("error"),this._worker.error(e)}}h.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return"data"===e?this._worker.on(e,(function(e){t.call(n,e.data,e.meta)})):this._worker.on(e,(function(){r.delay(t,arguments,n)})),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport("nodestream"),"nodebuffer"!==this._outputType)throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:"nodebuffer"!==this._outputType},e)}},t.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,n.nodebuffer="undefined"!=typeof Buffer,n.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=0===new Blob([r],{type:"application/zip"}).size}catch(e){try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=0===i.getBlob("application/zip").size}catch(e){n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch(e){n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e("./utils"),i=e("./support"),s=e("./nodejsUtils"),o=e("./stream/GenericWorker"),a=new Array(256),l=0;l<256;l++)a[l]=252<=l?6:248<=l?5:240<=l?4:224<=l?3:192<=l?2:1;function c(){o.call(this,"utf-8 decode"),this.leftOver=null}function u(){o.call(this,"utf-8 encode")}a[254]=a[254]=1,n.utf8encode=function(e){return i.nodebuffer?s.newBufferFrom(e,"utf-8"):function(e){var t,n,r,s,o,a=e.length,l=0;for(s=0;s<a;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),l+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(l):new Array(l),s=o=0;o<l;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(r=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(r-56320),s++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo("nodebuffer",e).toString("utf-8"):function(e){var t,n,i,s,o=e.length,l=new Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)l[n++]=i;else if(4<(s=a[i]))l[n++]=65533,t+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&t<o;)i=i<<6|63&e[t++],s--;1<s?l[n++]=65533:i<65536?l[n++]=i:(i-=65536,l[n++]=55296|i>>10&1023,l[n++]=56320|1023&i)}return l.length!==n&&(l.subarray?l=l.subarray(0,n):l.length=n),r.applyFromCharCode(l)}(e=r.transformTo(i.uint8array?"uint8array":"array",e))},r.inherits(c,o),c.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var s=t;(t=new Uint8Array(s.length+this.leftOver.length)).set(this.leftOver,0),t.set(s,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;0<=n&&128==(192&e[n]);)n--;return n<0||0===n?t:n+a[e[n]]>t?n:t}(t),l=t;o!==t.length&&(i.uint8array?(l=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(l=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(l),meta:e.meta})},c.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=c,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e("./support"),i=e("./base64"),s=e("./nodejsUtils"),o=e("./external");function a(e){return e}function l(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e("setimmediate"),n.newBlob=function(e,t){n.checkSupport("blob");try{return new Blob([e],{type:t})}catch(n){try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch(e){throw new Error("Bug : can't construct the Blob.")}}};var c={stringifyByChunk:function(e,t,n){var r=[],i=0,s=e.length;if(s<=n)return String.fromCharCode.apply(null,e);for(;i<s;)"array"===t||"nodebuffer"===t?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,s)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,s)))),i+=n;return r.join("")},stringifyByChar:function(e){for(var t="",n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&1===String.fromCharCode.apply(null,new Uint8Array(1)).length}catch(e){return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&1===String.fromCharCode.apply(null,s.allocBuffer(1)).length}catch(e){return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if("uint8array"===r?i=c.applyCanBeUsed.uint8array:"nodebuffer"===r&&(i=c.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return c.stringifyByChunk(e,r,t)}catch(e){t=Math.floor(t/2)}return c.stringifyByChar(e)}function h(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var d={};d.string={string:a,array:function(e){return l(e,new Array(e.length))},arraybuffer:function(e){return d.string.uint8array(e).buffer},uint8array:function(e){return l(e,new Uint8Array(e.length))},nodebuffer:function(e){return l(e,s.allocBuffer(e.length))}},d.array={string:u,array:a,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(e)}},d.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return h(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:a,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s.newBufferFrom(new Uint8Array(e))}},d.uint8array={string:u,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:a,nodebuffer:function(e){return s.newBufferFrom(e)}},d.nodebuffer={string:u,array:function(e){return h(e,new Array(e.length))},arraybuffer:function(e){return d.nodebuffer.uint8array(e).buffer},uint8array:function(e){return h(e,new Uint8Array(e.length))},nodebuffer:a},n.transformTo=function(e,t){if(t=t||"",!e)return t;n.checkSupport(e);var r=n.getTypeOf(t);return d[r][e](t)},n.resolve=function(e){for(var t=e.split("/"),n=[],r=0;r<t.length;r++){var i=t[r];"."===i||""===i&&0!==r&&r!==t.length-1||(".."===i?n.pop():n.push(i))}return n.join("/")},n.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":r.nodebuffer&&s.isBuffer(e)?"nodebuffer":r.uint8array&&e instanceof Uint8Array?"uint8array":r.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw new Error(e+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r="";for(n=0;n<(e||"").length;n++)r+="\\x"+((t=e.charCodeAt(n))<16?"0":"")+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate((function(){e.apply(n||null,t||[])}))},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&void 0===n[t]&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,s,a,c){return o.Promise.resolve(t).then((function(e){return r.blob&&(e instanceof Blob||-1!==["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(e)))&&"undefined"!=typeof FileReader?new o.Promise((function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)})):e})).then((function(t){var u,h=n.getTypeOf(t);return h?("arraybuffer"===h?t=n.transformTo("uint8array",t):"string"===h&&(c?t=i.decode(t):s&&!0!==a&&(t=l(u=t,r.uint8array?new Uint8Array(u.length):new Array(u.length)))),t):o.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))}))}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e("./reader/readerFor"),i=e("./utils"),s=e("./signature"),o=e("./zipEntry"),a=e("./support");function l(e){this.files=[],this.loadOptions=e}l.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+i.pretty(t)+", expected "+i.pretty(e)+")")}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=a.uint8array?"uint8array":"array",n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&0!==this.centralDirRecords&&0===this.files.length)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(e);var t=e;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,s.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw new Error("Corrupted zip: missing "+Math.abs(r)+" bytes.")},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=l},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e("./reader/readerFor"),i=e("./utils"),s=e("./compressedObject"),o=e("./crc32"),a=e("./utf8"),l=e("./compressions"),c=e("./support");function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),-1===this.compressedSize||-1===this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(null===(t=function(e){for(var t in l)if(Object.prototype.hasOwnProperty.call(l,t)&&l[t].magic===e)return l[t];return null}(this.compressionMethod)))throw new Error("Corrupted zip : compression "+i.pretty(this.compressionMethod)+" unknown (inner file : "+i.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),0==e&&(this.dosPermissions=63&this.externalFileAttributes),3==e&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileNameStr.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=a.utf8decode(this.fileName),this.fileCommentStr=a.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(null!==t)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(null!==r)this.fileCommentStr=r;else{var s=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(s)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return 1!==t.readInt(1)||o(this.fileName)!==t.readInt(4)?null:a.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return 1!==t.readInt(1)||o(this.fileComment)!==t.readInt(4)?null:a.utf8decode(t.readData(e.length-5))}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e("./stream/StreamHelper"),s=e("./stream/DataWorker"),o=e("./utf8"),a=e("./compressedObject"),l=e("./stream/GenericWorker");r.prototype={internalStream:function(e){var t=null,n="string";try{if(!e)throw new Error("No output type specified.");var r="string"===(n=e.toLowerCase())||"text"===n;"binarystring"!==n&&"text"!==n||(n="string"),t=this._decompressWorker();var s=!this._dataBinary;s&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!s&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new l("error")).error(e)}return new i(t,n,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof a&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),a.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof a?this._data.getContentWorker():this._data instanceof l?this._data:new s(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],u=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<c.length;h++)r.prototype[c[h]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var s=0,o=new i(u),a=e.document.createTextNode("");o.observe(a,{characterData:!0}),n=function(){a.data=s=++s%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var l=new e.MessageChannel;l.port1.onmessage=u,n=function(){l.port2.postMessage(0)}}var c=[];function u(){var e,t;r=!0;for(var n=c.length;n;){for(t=c,c=[],e=-1;++e<n;)t[e]();n=c.length}r=!1}t.exports=function(e){1!==c.push(e)||r||n()}}).call(this,void 0!==jw?jw:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,n){var r=e("immediate");function i(){}var s={},o=["REJECTED"],a=["FULFILLED"],l=["PENDING"];function c(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=l,this.queue=[],this.outcome=void 0,e!==i&&f(this,e)}function u(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function h(e,t,n){r((function(){var r;try{r=t(n)}catch(t){return s.reject(e,t)}r===e?s.reject(e,new TypeError("Cannot resolve promise with itself")):s.resolve(e,r)}))}function d(e){var t=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof t)return function(){t.apply(e,arguments)}}function f(e,t){var n=!1;function r(t){n||(n=!0,s.reject(e,t))}function i(t){n||(n=!0,s.resolve(e,t))}var o=p((function(){t(i,r)}));"error"===o.status&&r(o.value)}function p(e,t){var n={};try{n.value=e(t),n.status="success"}catch(e){n.status="error",n.value=e}return n}(t.exports=c).prototype.finally=function(e){if("function"!=typeof e)return this;var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))},c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,t){if("function"!=typeof e&&this.state===a||"function"!=typeof t&&this.state===o)return this;var n=new this.constructor(i);return this.state!==l?h(n,this.state===a?e:t,this.outcome):this.queue.push(new u(n,e,t)),n},u.prototype.callFulfilled=function(e){s.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){h(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){s.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){h(this.promise,this.onRejected,e)},s.resolve=function(e,t){var n=p(d,t);if("error"===n.status)return s.reject(e,n.value);var r=n.value;if(r)f(e,r);else{e.state=a,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},s.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},c.resolve=function(e){return e instanceof this?e:s.resolve(new this(i),e)},c.reject=function(e){var t=new this(i);return s.reject(t,e)},c.all=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=new Array(n),a=0,l=-1,c=new this(i);++l<n;)u(e[l],l);return c;function u(e,i){t.resolve(e).then((function(e){o[i]=e,++a!==n||r||(r=!0,s.resolve(c,o))}),(function(e){r||(r=!0,s.reject(c,e))}))}},c.race=function(e){var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o,a=-1,l=new this(i);++a<n;)o=e[a],t.resolve(o).then((function(e){r||(r=!0,s.resolve(l,e))}),(function(e){r||(r=!0,s.reject(l,e))}));return l}},{immediate:36}],38:[function(e,t,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e("./zlib/deflate"),i=e("./utils/common"),s=e("./utils/strings"),o=e("./zlib/messages"),a=e("./zlib/zstream"),l=Object.prototype.toString,c=0,u=-1,h=0,d=8;function f(e){if(!(this instanceof f))return new f(e);this.options=i.assign({level:u,method:d,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new a,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==c)throw new Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var p;if(p="string"==typeof t.dictionary?s.string2buf(t.dictionary):"[object ArrayBuffer]"===l.call(t.dictionary)?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,p))!==c)throw new Error(o[n]);this._dict_set=!0}}function p(e,t){var n=new f(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}f.prototype.push=function(e,t){var n,o,a=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,"string"==typeof e?a.input=s.string2buf(e):"[object ArrayBuffer]"===l.call(e)?a.input=new Uint8Array(e):a.input=e,a.next_in=0,a.avail_in=a.input.length;do{if(0===a.avail_out&&(a.output=new i.Buf8(u),a.next_out=0,a.avail_out=u),1!==(n=r.deflate(a,o))&&n!==c)return this.onEnd(n),!(this.ended=!0);0!==a.avail_out&&(0!==a.avail_in||4!==o&&2!==o)||("string"===this.options.to?this.onData(s.buf2binstring(i.shrinkBuf(a.output,a.next_out))):this.onData(i.shrinkBuf(a.output,a.next_out)))}while((0<a.avail_in||0===a.avail_out)&&1!==n);return 4===o?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===c):2!==o||(this.onEnd(c),!(a.avail_out=0))},f.prototype.onData=function(e){this.chunks.push(e)},f.prototype.onEnd=function(e){e===c&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=f,n.deflate=p,n.deflateRaw=function(e,t){return(t=t||{}).raw=!0,p(e,t)},n.gzip=function(e,t){return(t=t||{}).gzip=!0,p(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e("./zlib/inflate"),i=e("./utils/common"),s=e("./utils/strings"),o=e("./zlib/constants"),a=e("./zlib/messages"),l=e("./zlib/zstream"),c=e("./zlib/gzheader"),u=Object.prototype.toString;function h(e){if(!(this instanceof h))return new h(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw new Error(a[n]);this.header=new c,r.inflateGetHeader(this.strm,this.header)}function d(e,t){var n=new h(t);if(n.push(e,!0),n.err)throw n.msg||a[n.err];return n.result}h.prototype.push=function(e,t){var n,a,l,c,h,d,f=this.strm,p=this.options.chunkSize,m=this.options.dictionary,_=!1;if(this.ended)return!1;a=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,"string"==typeof e?f.input=s.binstring2buf(e):"[object ArrayBuffer]"===u.call(e)?f.input=new Uint8Array(e):f.input=e,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new i.Buf8(p),f.next_out=0,f.avail_out=p),(n=r.inflate(f,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&m&&(d="string"==typeof m?s.string2buf(m):"[object ArrayBuffer]"===u.call(m)?new Uint8Array(m):m,n=r.inflateSetDictionary(this.strm,d)),n===o.Z_BUF_ERROR&&!0===_&&(n=o.Z_OK,_=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);f.next_out&&(0!==f.avail_out&&n!==o.Z_STREAM_END&&(0!==f.avail_in||a!==o.Z_FINISH&&a!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(l=s.utf8border(f.output,f.next_out),c=f.next_out-l,h=s.buf2string(f.output,l),f.next_out=c,f.avail_out=p-c,c&&i.arraySet(f.output,f.output,l,c,0),this.onData(h)):this.onData(i.shrinkBuf(f.output,f.next_out)))),0===f.avail_in&&0===f.avail_out&&(_=!0)}while((0<f.avail_in||0===f.avail_out)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(a=o.Z_FINISH),a===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):a!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(f.avail_out=0))},h.prototype.onData=function(e){this.chunks.push(e)},h.prototype.onEnd=function(e){e===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=h,n.inflate=d,n.inflateRaw=function(e,t){return(t=t||{}).raw=!0,d(e,t)},n.ungzip=d},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var s=0;s<r;s++)e[i+s]=t[n+s]},flattenChunks:function(e){var t,n,r,i,s,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)s=e[t],o.set(s,i),i+=s.length;return o}},s={arraySet:function(e,t,n,r,i){for(var s=0;s<r;s++)e[i+s]=t[n+s]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,s))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(e){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){s=!1}for(var o=new r.Buf8(256),a=0;a<256;a++)o[a]=252<=a?6:248<=a?5:240<=a?4:224<=a?3:192<=a?2:1;function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n="",o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,s,o,a=e.length,l=0;for(s=0;s<a;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(i=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(i-56320),s++),l+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(l),s=o=0;o<l;s++)55296==(64512&(n=e.charCodeAt(s)))&&s+1<a&&56320==(64512&(i=e.charCodeAt(s+1)))&&(n=65536+(n-55296<<10)+(i-56320),s++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return l(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,s,a=t||e.length,c=new Array(2*a);for(n=r=0;n<a;)if((i=e[n++])<128)c[r++]=i;else if(4<(s=o[i]))c[r++]=65533,n+=s-1;else{for(i&=2===s?31:3===s?15:7;1<s&&n<a;)i=i<<6|63&e[n++],s--;1<s?c[r++]=65533:i<65536?c[r++]=i:(i-=65536,c[r++]=55296|i>>10&1023,c[r++]=56320|1023&i)}return l(c,r)},n.utf8border=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;0<=n&&128==(192&e[n]);)n--;return n<0||0===n?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,s=e>>>16&65535|0,o=0;0!==n;){for(n-=o=2e3<n?2e3:n;s=s+(i=i+t[r++]|0)|0,--o;);i%=65521,s%=65521}return i|s<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var s=r,o=i+n;e^=-1;for(var a=i;a<o;a++)e=e>>>8^s[255&(e^t[a])];return-1^e}},{}],46:[function(e,t,n){var r,i=e("../utils/common"),s=e("./trees"),o=e("./adler32"),a=e("./crc32"),l=e("./messages"),c=0,u=4,h=0,d=-2,f=-1,p=4,m=2,_=8,g=9,v=286,y=30,b=19,w=2*v+1,k=15,C=3,E=258,I=E+C+1,T=42,S=113,x=1,R=2,O=3,A=4;function N(e,t){return e.msg=l[t],t}function P(e){return(e<<1)-(4<e?9:0)}function D(e){for(var t=e.length;0<=--t;)e[t]=0}function L(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),0!==n&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,0===t.pending&&(t.pending_out=0))}function U(e,t){s._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,L(e.strm)}function M(e,t){e.pending_buf[e.pending++]=t}function F(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function z(e,t){var n,r,i=e.max_chain_length,s=e.strstart,o=e.prev_length,a=e.nice_match,l=e.strstart>e.w_size-I?e.strstart-(e.w_size-I):0,c=e.window,u=e.w_mask,h=e.prev,d=e.strstart+E,f=c[s+o-1],p=c[s+o];e.prev_length>=e.good_match&&(i>>=2),a>e.lookahead&&(a=e.lookahead);do{if(c[(n=t)+o]===p&&c[n+o-1]===f&&c[n]===c[s]&&c[++n]===c[s+1]){s+=2,n++;do{}while(c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&c[++s]===c[++n]&&s<d);if(r=E-(d-s),s=d-E,o<r){if(e.match_start=t,a<=(o=r))break;f=c[s+o-1],p=c[s+o]}}}while((t=h[t&u])>l&&0!=--i);return o<=e.lookahead?o:e.lookahead}function j(e){var t,n,r,s,l,c,u,h,d,f,p=e.w_size;do{if(s=e.window_size-e.lookahead-e.strstart,e.strstart>=p+(p-I)){for(i.arraySet(e.window,e.window,p,p,0),e.match_start-=p,e.strstart-=p,e.block_start-=p,t=n=e.hash_size;r=e.head[--t],e.head[t]=p<=r?r-p:0,--n;);for(t=n=p;r=e.prev[--t],e.prev[t]=p<=r?r-p:0,--n;);s+=p}if(0===e.strm.avail_in)break;if(c=e.strm,u=e.window,h=e.strstart+e.lookahead,f=void 0,(d=s)<(f=c.avail_in)&&(f=d),n=0===f?0:(c.avail_in-=f,i.arraySet(u,c.input,c.next_in,f,h),1===c.state.wrap?c.adler=o(c.adler,u,f,h):2===c.state.wrap&&(c.adler=a(c.adler,u,f,h)),c.next_in+=f,c.total_in+=f,f),e.lookahead+=n,e.lookahead+e.insert>=C)for(l=e.strstart-e.insert,e.ins_h=e.window[l],e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+C-1])&e.hash_mask,e.prev[l&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=l,l++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<I&&0!==e.strm.avail_in)}function B(e,t){for(var n,r;;){if(e.lookahead<I){if(j(e),e.lookahead<I&&t===c)return x;if(0===e.lookahead)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==n&&e.strstart-n<=e.w_size-I&&(e.match_length=z(e,n)),e.match_length>=C)if(r=s._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,0!=--e.match_length;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(U(e,!1),0===e.strm.avail_out))return x}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(U(e,!0),0===e.strm.avail_out?O:A):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?x:R}function q(e,t){for(var n,r,i;;){if(e.lookahead<I){if(j(e),e.lookahead<I&&t===c)return x;if(0===e.lookahead)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,0!==n&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-I&&(e.match_length=z(e,n),e.match_length<=5&&(1===e.strategy||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=s._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!=--e.prev_length;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(U(e,!1),0===e.strm.avail_out))return x}else if(e.match_available){if((r=s._tr_tally(e,0,e.window[e.strstart-1]))&&U(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return x}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=s._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(U(e,!0),0===e.strm.avail_out?O:A):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?x:R}function W(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function V(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*w),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),D(this.dyn_ltree),D(this.dyn_dtree),D(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(k+1),this.heap=new i.Buf16(2*v+1),D(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),D(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function H(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=m,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?T:S,e.adler=2===t.wrap?0:1,t.last_flush=c,s._tr_init(t),h):N(e,d)}function $(e){var t,n=H(e);return n===h&&((t=e.state).window_size=2*t.w_size,D(t.head),t.max_lazy_match=r[t.level].max_lazy,t.good_match=r[t.level].good_length,t.nice_match=r[t.level].nice_length,t.max_chain_length=r[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=C-1,t.match_available=0,t.ins_h=0),n}function G(e,t,n,r,s,o){if(!e)return d;var a=1;if(t===f&&(t=6),r<0?(a=0,r=-r):15<r&&(a=2,r-=16),s<1||g<s||n!==_||r<8||15<r||t<0||9<t||o<0||p<o)return N(e,d);8===r&&(r=9);var l=new V;return(e.state=l).strm=e,l.wrap=a,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=s+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+C-1)/C),l.window=new i.Buf8(2*l.w_size),l.head=new i.Buf16(l.hash_size),l.prev=new i.Buf16(l.w_size),l.lit_bufsize=1<<s+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new i.Buf8(l.pending_buf_size),l.d_buf=1*l.lit_bufsize,l.l_buf=3*l.lit_bufsize,l.level=t,l.strategy=o,l.method=n,$(e)}r=[new W(0,0,0,0,(function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(j(e),0===e.lookahead&&t===c)return x;if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((0===e.strstart||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,U(e,!1),0===e.strm.avail_out))return x;if(e.strstart-e.block_start>=e.w_size-I&&(U(e,!1),0===e.strm.avail_out))return x}return e.insert=0,t===u?(U(e,!0),0===e.strm.avail_out?O:A):(e.strstart>e.block_start&&(U(e,!1),e.strm.avail_out),x)})),new W(4,4,8,4,B),new W(4,5,16,8,B),new W(4,6,32,32,B),new W(4,4,16,16,q),new W(8,16,32,32,q),new W(8,16,128,128,q),new W(8,32,128,256,q),new W(32,128,258,1024,q),new W(32,258,258,4096,q)],n.deflateInit=function(e,t){return G(e,t,_,15,8,0)},n.deflateInit2=G,n.deflateReset=$,n.deflateResetKeep=H,n.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?d:(e.state.gzhead=t,h):d},n.deflate=function(e,t){var n,i,o,l;if(!e||!e.state||5<t||t<0)return e?N(e,d):d;if(i=e.state,!e.output||!e.input&&0!==e.avail_in||666===i.status&&t!==u)return N(e,0===e.avail_out?-5:d);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===T)if(2===i.wrap)e.adler=0,M(i,31),M(i,139),M(i,8),i.gzhead?(M(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),M(i,255&i.gzhead.time),M(i,i.gzhead.time>>8&255),M(i,i.gzhead.time>>16&255),M(i,i.gzhead.time>>24&255),M(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),M(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(M(i,255&i.gzhead.extra.length),M(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=a(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(M(i,0),M(i,0),M(i,0),M(i,0),M(i,0),M(i,9===i.level?2:2<=i.strategy||i.level<2?4:0),M(i,3),i.status=S);else{var f=_+(i.w_bits-8<<4)<<8;f|=(2<=i.strategy||i.level<2?0:i.level<6?1:6===i.level?2:3)<<6,0!==i.strstart&&(f|=32),f+=31-f%31,i.status=S,F(i,f),0!==i.strstart&&(F(i,e.adler>>>16),F(i,65535&e.adler)),e.adler=1}if(69===i.status)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),L(e),o=i.pending,i.pending!==i.pending_buf_size));)M(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(73===i.status)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),L(e),o=i.pending,i.pending===i.pending_buf_size)){l=1;break}l=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,M(i,l)}while(0!==l);i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),0===l&&(i.gzindex=0,i.status=91)}else i.status=91;if(91===i.status)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),L(e),o=i.pending,i.pending===i.pending_buf_size)){l=1;break}l=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,M(i,l)}while(0!==l);i.gzhead.hcrc&&i.pending>o&&(e.adler=a(e.adler,i.pending_buf,i.pending-o,o)),0===l&&(i.status=103)}else i.status=103;if(103===i.status&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&L(e),i.pending+2<=i.pending_buf_size&&(M(i,255&e.adler),M(i,e.adler>>8&255),e.adler=0,i.status=S)):i.status=S),0!==i.pending){if(L(e),0===e.avail_out)return i.last_flush=-1,h}else if(0===e.avail_in&&P(t)<=P(n)&&t!==u)return N(e,-5);if(666===i.status&&0!==e.avail_in)return N(e,-5);if(0!==e.avail_in||0!==i.lookahead||t!==c&&666!==i.status){var p=2===i.strategy?function(e,t){for(var n;;){if(0===e.lookahead&&(j(e),0===e.lookahead)){if(t===c)return x;break}if(e.match_length=0,n=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(U(e,!1),0===e.strm.avail_out))return x}return e.insert=0,t===u?(U(e,!0),0===e.strm.avail_out?O:A):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?x:R}(i,t):3===i.strategy?function(e,t){for(var n,r,i,o,a=e.window;;){if(e.lookahead<=E){if(j(e),e.lookahead<=E&&t===c)return x;if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=a[i=e.strstart-1])===a[++i]&&r===a[++i]&&r===a[++i]){o=e.strstart+E;do{}while(r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&r===a[++i]&&i<o);e.match_length=E-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=s._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=s._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(U(e,!1),0===e.strm.avail_out))return x}return e.insert=0,t===u?(U(e,!0),0===e.strm.avail_out?O:A):e.last_lit&&(U(e,!1),0===e.strm.avail_out)?x:R}(i,t):r[i.level].func(i,t);if(p!==O&&p!==A||(i.status=666),p===x||p===O)return 0===e.avail_out&&(i.last_flush=-1),h;if(p===R&&(1===t?s._tr_align(i):5!==t&&(s._tr_stored_block(i,0,0,!1),3===t&&(D(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),L(e),0===e.avail_out))return i.last_flush=-1,h}return t!==u?h:i.wrap<=0?1:(2===i.wrap?(M(i,255&e.adler),M(i,e.adler>>8&255),M(i,e.adler>>16&255),M(i,e.adler>>24&255),M(i,255&e.total_in),M(i,e.total_in>>8&255),M(i,e.total_in>>16&255),M(i,e.total_in>>24&255)):(F(i,e.adler>>>16),F(i,65535&e.adler)),L(e),0<i.wrap&&(i.wrap=-i.wrap),0!==i.pending?h:1)},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==T&&69!==t&&73!==t&&91!==t&&103!==t&&t!==S&&666!==t?N(e,d):(e.state=null,t===S?N(e,-3):h):d},n.deflateSetDictionary=function(e,t){var n,r,s,a,l,c,u,f,p=t.length;if(!e||!e.state)return d;if(2===(a=(n=e.state).wrap)||1===a&&n.status!==T||n.lookahead)return d;for(1===a&&(e.adler=o(e.adler,t,p,0)),n.wrap=0,p>=n.w_size&&(0===a&&(D(n.head),n.strstart=0,n.block_start=0,n.insert=0),f=new i.Buf8(n.w_size),i.arraySet(f,t,p-n.w_size,n.w_size,0),t=f,p=n.w_size),l=e.avail_in,c=e.next_in,u=e.input,e.avail_in=p,e.next_in=0,e.input=t,j(n);n.lookahead>=C;){for(r=n.strstart,s=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--s;);n.strstart=r,n.lookahead=C-1,j(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=c,e.input=u,e.avail_in=l,n.wrap=a,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n,r,i,s,o,a,l,c,u,h,d,f,p,m,_,g,v,y,b,w,k,C,E,I,T;n=e.state,r=e.next_in,I=e.input,i=r+(e.avail_in-5),s=e.next_out,T=e.output,o=s-(t-e.avail_out),a=s+(e.avail_out-257),l=n.dmax,c=n.wsize,u=n.whave,h=n.wnext,d=n.window,f=n.hold,p=n.bits,m=n.lencode,_=n.distcode,g=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{p<15&&(f+=I[r++]<<p,p+=8,f+=I[r++]<<p,p+=8),y=m[f&g];t:for(;;){if(f>>>=b=y>>>24,p-=b,0==(b=y>>>16&255))T[s++]=65535&y;else{if(!(16&b)){if(0==(64&b)){y=m[(65535&y)+(f&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}w=65535&y,(b&=15)&&(p<b&&(f+=I[r++]<<p,p+=8),w+=f&(1<<b)-1,f>>>=b,p-=b),p<15&&(f+=I[r++]<<p,p+=8,f+=I[r++]<<p,p+=8),y=_[f&v];n:for(;;){if(f>>>=b=y>>>24,p-=b,!(16&(b=y>>>16&255))){if(0==(64&b)){y=_[(65535&y)+(f&(1<<b)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(k=65535&y,p<(b&=15)&&(f+=I[r++]<<p,(p+=8)<b&&(f+=I[r++]<<p,p+=8)),l<(k+=f&(1<<b)-1)){e.msg="invalid distance too far back",n.mode=30;break e}if(f>>>=b,p-=b,(b=s-o)<k){if(u<(b=k-b)&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(E=d,(C=0)===h){if(C+=c-b,b<w){for(w-=b;T[s++]=d[C++],--b;);C=s-k,E=T}}else if(h<b){if(C+=c+h-b,(b-=h)<w){for(w-=b;T[s++]=d[C++],--b;);if(C=0,h<w){for(w-=b=h;T[s++]=d[C++],--b;);C=s-k,E=T}}}else if(C+=h-b,b<w){for(w-=b;T[s++]=d[C++],--b;);C=s-k,E=T}for(;2<w;)T[s++]=E[C++],T[s++]=E[C++],T[s++]=E[C++],w-=3;w&&(T[s++]=E[C++],1<w&&(T[s++]=E[C++]))}else{for(C=s-k;T[s++]=T[C++],T[s++]=T[C++],T[s++]=T[C++],2<(w-=3););w&&(T[s++]=T[C++],1<w&&(T[s++]=T[C++]))}break}}break}}while(r<i&&s<a);r-=w=p>>3,f&=(1<<(p-=w<<3))-1,e.next_in=r,e.next_out=s,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=s<a?a-s+257:257-(s-a),n.hold=f,n.bits=p}},{}],49:[function(e,t,n){var r=e("../utils/common"),i=e("./adler32"),s=e("./crc32"),o=e("./inffast"),a=e("./inftrees"),l=1,c=2,u=0,h=-2,d=1,f=852,p=592;function m(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function g(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=d,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(f),t.distcode=t.distdyn=new r.Buf32(p),t.sane=1,t.back=-1,u):h}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,g(e)):h}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?h:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):h}function b(e,t){var n,r;return e?(r=new _,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):h}var w,k,C=!0;function E(e){if(C){var t;for(w=new r.Buf32(512),k=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(a(l,e.lens,0,288,w,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;a(c,e.lens,0,32,k,0,e.work,{bits:5}),C=!1}e.lencode=w,e.lenbits=9,e.distcode=k,e.distbits=5}function I(e,t,n,i){var s,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(s=o.wsize-o.wnext)&&(s=i),r.arraySet(o.window,t,n-i,s,o.wnext),(i-=s)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=s,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=s))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=g,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,f,p,_,g,v,y,b,w,k,C,T,S,x,R,O,A,N,P,D,L,U,M,F,z=0,j=new r.Buf8(4),B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return h;12===(n=e.state).mode&&(n.mode=13),g=e.next_out,p=e.output,y=e.avail_out,_=e.next_in,f=e.input,v=e.avail_in,b=n.hold,w=n.bits,k=v,C=y,U=u;e:for(;;)switch(n.mode){case d:if(0===n.wrap){n.mode=13;break}for(;w<16;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(2&n.wrap&&35615===b){j[n.check=0]=255&b,j[1]=b>>>8&255,n.check=s(n.check,j,2,0),w=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg="incorrect header check",n.mode=30;break}if(8!=(15&b)){e.msg="unknown compression method",n.mode=30;break}if(w-=4,L=8+(15&(b>>>=4)),0===n.wbits)n.wbits=L;else if(L>n.wbits){e.msg="invalid window size",n.mode=30;break}n.dmax=1<<L,e.adler=n.check=1,n.mode=512&b?10:12,w=b=0;break;case 2:for(;w<16;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(n.flags=b,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=30;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(j[0]=255&b,j[1]=b>>>8&255,n.check=s(n.check,j,2,0)),w=b=0,n.mode=3;case 3:for(;w<32;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.head&&(n.head.time=b),512&n.flags&&(j[0]=255&b,j[1]=b>>>8&255,j[2]=b>>>16&255,j[3]=b>>>24&255,n.check=s(n.check,j,4,0)),w=b=0,n.mode=4;case 4:for(;w<16;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(j[0]=255&b,j[1]=b>>>8&255,n.check=s(n.check,j,2,0)),w=b=0,n.mode=5;case 5:if(1024&n.flags){for(;w<16;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(j[0]=255&b,j[1]=b>>>8&255,n.check=s(n.check,j,2,0)),w=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(T=n.length)&&(T=v),T&&(n.head&&(L=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),r.arraySet(n.head.extra,f,_,T,L)),512&n.flags&&(n.check=s(n.check,f,T,_)),v-=T,_+=T,n.length-=T),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===v)break e;for(T=0;L=f[_+T++],n.head&&L&&n.length<65536&&(n.head.name+=String.fromCharCode(L)),L&&T<v;);if(512&n.flags&&(n.check=s(n.check,f,T,_)),v-=T,_+=T,L)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===v)break e;for(T=0;L=f[_+T++],n.head&&L&&n.length<65536&&(n.head.comment+=String.fromCharCode(L)),L&&T<v;);if(512&n.flags&&(n.check=s(n.check,f,T,_)),v-=T,_+=T,L)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;w<16;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(b!==(65535&n.check)){e.msg="header crc mismatch",n.mode=30;break}w=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;w<32;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}e.adler=n.check=m(b),w=b=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=g,e.avail_out=y,e.next_in=_,e.avail_in=v,n.hold=b,n.bits=w,2;e.adler=n.check=1,n.mode=12;case 12:if(5===t||6===t)break e;case 13:if(n.last){b>>>=7&w,w-=7&w,n.mode=27;break}for(;w<3;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}switch(n.last=1&b,w-=1,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(E(n),n.mode=20,6!==t)break;b>>>=2,w-=2;break e;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=30}b>>>=2,w-=2;break;case 14:for(b>>>=7&w,w-=7&w;w<32;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if((65535&b)!=(b>>>16^65535)){e.msg="invalid stored block lengths",n.mode=30;break}if(n.length=65535&b,w=b=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(T=n.length){if(v<T&&(T=v),y<T&&(T=y),0===T)break e;r.arraySet(p,f,_,T,g),v-=T,_+=T,y-=T,g+=T,n.length-=T;break}n.mode=12;break;case 17:for(;w<14;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(n.nlen=257+(31&b),b>>>=5,w-=5,n.ndist=1+(31&b),b>>>=5,w-=5,n.ncode=4+(15&b),b>>>=4,w-=4,286<n.nlen||30<n.ndist){e.msg="too many length or distance symbols",n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;w<3;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.lens[B[n.have++]]=7&b,b>>>=3,w-=3}for(;n.have<19;)n.lens[B[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,M={bits:n.lenbits},U=a(0,n.lens,0,19,n.lencode,0,n.work,M),n.lenbits=M.bits,U){e.msg="invalid code lengths set",n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;O=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,A=65535&z,!((R=z>>>24)<=w);){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(A<16)b>>>=R,w-=R,n.lens[n.have++]=A;else{if(16===A){for(F=R+2;w<F;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(b>>>=R,w-=R,0===n.have){e.msg="invalid bit length repeat",n.mode=30;break}L=n.lens[n.have-1],T=3+(3&b),b>>>=2,w-=2}else if(17===A){for(F=R+3;w<F;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}w-=R,L=0,T=3+(7&(b>>>=R)),b>>>=3,w-=3}else{for(F=R+7;w<F;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}w-=R,L=0,T=11+(127&(b>>>=R)),b>>>=7,w-=7}if(n.have+T>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=30;break}for(;T--;)n.lens[n.have++]=L}}if(30===n.mode)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=30;break}if(n.lenbits=9,M={bits:n.lenbits},U=a(l,n.lens,0,n.nlen,n.lencode,0,n.work,M),n.lenbits=M.bits,U){e.msg="invalid literal/lengths set",n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,M={bits:n.distbits},U=a(c,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,M),n.distbits=M.bits,U){e.msg="invalid distances set",n.mode=30;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=g,e.avail_out=y,e.next_in=_,e.avail_in=v,n.hold=b,n.bits=w,o(e,C),g=e.next_out,p=e.output,y=e.avail_out,_=e.next_in,f=e.input,v=e.avail_in,b=n.hold,w=n.bits,12===n.mode&&(n.back=-1);break}for(n.back=0;O=(z=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,A=65535&z,!((R=z>>>24)<=w);){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(O&&0==(240&O)){for(N=R,P=O,D=A;O=(z=n.lencode[D+((b&(1<<N+P)-1)>>N)])>>>16&255,A=65535&z,!(N+(R=z>>>24)<=w);){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}b>>>=N,w-=N,n.back+=N}if(b>>>=R,w-=R,n.back+=R,n.length=A,0===O){n.mode=26;break}if(32&O){n.back=-1,n.mode=12;break}if(64&O){e.msg="invalid literal/length code",n.mode=30;break}n.extra=15&O,n.mode=22;case 22:if(n.extra){for(F=n.extra;w<F;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,w-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;O=(z=n.distcode[b&(1<<n.distbits)-1])>>>16&255,A=65535&z,!((R=z>>>24)<=w);){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(0==(240&O)){for(N=R,P=O,D=A;O=(z=n.distcode[D+((b&(1<<N+P)-1)>>N)])>>>16&255,A=65535&z,!(N+(R=z>>>24)<=w);){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}b>>>=N,w-=N,n.back+=N}if(b>>>=R,w-=R,n.back+=R,64&O){e.msg="invalid distance code",n.mode=30;break}n.offset=A,n.extra=15&O,n.mode=24;case 24:if(n.extra){for(F=n.extra;w<F;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,w-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=30;break}n.mode=25;case 25:if(0===y)break e;if(T=C-y,n.offset>T){if((T=n.offset-T)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=30;break}S=T>n.wnext?(T-=n.wnext,n.wsize-T):n.wnext-T,T>n.length&&(T=n.length),x=n.window}else x=p,S=g-n.offset,T=n.length;for(y<T&&(T=y),y-=T,n.length-=T;p[g++]=x[S++],--T;);0===n.length&&(n.mode=21);break;case 26:if(0===y)break e;p[g++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;w<32;){if(0===v)break e;v--,b|=f[_++]<<w,w+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?s(n.check,p,C,g-C):i(n.check,p,C,g-C)),C=y,(n.flags?b:m(b))!==n.check){e.msg="incorrect data check",n.mode=30;break}w=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;w<32;){if(0===v)break e;v--,b+=f[_++]<<w,w+=8}if(b!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=30;break}w=b=0}n.mode=29;case 29:U=1;break e;case 30:U=-3;break e;case 31:return-4;default:return h}return e.next_out=g,e.avail_out=y,e.next_in=_,e.avail_in=v,n.hold=b,n.bits=w,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||4!==t))&&I(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(k-=e.avail_in,C-=e.avail_out,e.total_in+=k,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?s(n.check,p,C,e.next_out-C):i(n.check,p,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(12===n.mode?128:0)+(20===n.mode||15===n.mode?256:0),(0==k&&0===C||4===t)&&U===u&&(U=-5),U)},n.inflateEnd=function(e){if(!e||!e.state)return h;var t=e.state;return t.window&&(t.window=null),e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state?0==(2&(n=e.state).wrap)?h:((n.head=t).done=!1,u):h},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?0!==(n=e.state).wrap&&11!==n.mode?h:11===n.mode&&i(1,t,r,0)!==n.check?-3:I(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e("../utils/common"),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],a=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,l,c,u,h,d){var f,p,m,_,g,v,y,b,w,k=d.bits,C=0,E=0,I=0,T=0,S=0,x=0,R=0,O=0,A=0,N=0,P=null,D=0,L=new r.Buf16(16),U=new r.Buf16(16),M=null,F=0;for(C=0;C<=15;C++)L[C]=0;for(E=0;E<l;E++)L[t[n+E]]++;for(S=k,T=15;1<=T&&0===L[T];T--);if(T<S&&(S=T),0===T)return c[u++]=20971520,c[u++]=20971520,d.bits=1,0;for(I=1;I<T&&0===L[I];I++);for(S<I&&(S=I),C=O=1;C<=15;C++)if(O<<=1,(O-=L[C])<0)return-1;if(0<O&&(0===e||1!==T))return-1;for(U[1]=0,C=1;C<15;C++)U[C+1]=U[C]+L[C];for(E=0;E<l;E++)0!==t[n+E]&&(h[U[t[n+E]]++]=E);if(v=0===e?(P=M=h,19):1===e?(P=i,D-=257,M=s,F-=257,256):(P=o,M=a,-1),C=I,g=u,R=E=N=0,m=-1,_=(A=1<<(x=S))-1,1===e&&852<A||2===e&&592<A)return 1;for(;;){for(y=C-R,w=h[E]<v?(b=0,h[E]):h[E]>v?(b=M[F+h[E]],P[D+h[E]]):(b=96,0),f=1<<C-R,I=p=1<<x;c[g+(N>>R)+(p-=f)]=y<<24|b<<16|w|0,0!==p;);for(f=1<<C-1;N&f;)f>>=1;if(0!==f?(N&=f-1,N+=f):N=0,E++,0==--L[C]){if(C===T)break;C=t[n+h[E]]}if(S<C&&(N&_)!==m){for(0===R&&(R=S),g+=I,O=1<<(x=C-R);x+R<T&&!((O-=L[x+R])<=0);)x++,O<<=1;if(A+=1<<x,1===e&&852<A||2===e&&592<A)return 1;c[m=N&_]=S<<24|x<<16|g-u|0}}return 0!==N&&(c[g+N]=C-R<<24|64<<16|0),d.bits=S,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,t,n){var r=e("../utils/common"),i=0,s=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var a=0,l=29,c=256,u=c+1+l,h=30,d=19,f=2*u+1,p=15,m=16,_=7,g=256,v=16,y=17,b=18,w=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],k=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],E=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],I=new Array(2*(u+2));o(I);var T=new Array(2*h);o(T);var S=new Array(512);o(S);var x=new Array(256);o(x);var R=new Array(l);o(R);var O,A,N,P=new Array(h);function D(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function L(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function U(e){return e<256?S[e]:S[256+(e>>>7)]}function M(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function F(e,t,n){e.bi_valid>m-n?(e.bi_buf|=t<<e.bi_valid&65535,M(e,e.bi_buf),e.bi_buf=t>>m-e.bi_valid,e.bi_valid+=n-m):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function z(e,t,n){F(e,n[2*t],n[2*t+1])}function j(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function B(e,t,n){var r,i,s=new Array(p+1),o=0;for(r=1;r<=p;r++)s[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var a=e[2*i+1];0!==a&&(e[2*i]=j(s[a]++,a))}}function q(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<h;t++)e.dyn_dtree[2*t]=0;for(t=0;t<d;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*g]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function W(e){8<e.bi_valid?M(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function V(e,t,n,r){var i=2*t,s=2*n;return e[i]<e[s]||e[i]===e[s]&&r[t]<=r[n]}function H(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&V(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!V(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function $(e,t,n){var r,i,s,o,a=0;if(0!==e.last_lit)for(;r=e.pending_buf[e.d_buf+2*a]<<8|e.pending_buf[e.d_buf+2*a+1],i=e.pending_buf[e.l_buf+a],a++,0===r?z(e,i,t):(z(e,(s=x[i])+c+1,t),0!==(o=w[s])&&F(e,i-=R[s],o),z(e,s=U(--r),n),0!==(o=k[s])&&F(e,r-=P[s],o)),a<e.last_lit;);z(e,g,t)}function G(e,t){var n,r,i,s=t.dyn_tree,o=t.stat_desc.static_tree,a=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1;for(e.heap_len=0,e.heap_max=f,n=0;n<l;n++)0!==s[2*n]?(e.heap[++e.heap_len]=c=n,e.depth[n]=0):s[2*n+1]=0;for(;e.heap_len<2;)s[2*(i=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[i]=0,e.opt_len--,a&&(e.static_len-=o[2*i+1]);for(t.max_code=c,n=e.heap_len>>1;1<=n;n--)H(e,s,n);for(i=l;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],H(e,s,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,s[2*i]=s[2*n]+s[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,s[2*n+1]=s[2*r+1]=i,e.heap[1]=i++,H(e,s,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,s,o,a,l=t.dyn_tree,c=t.max_code,u=t.stat_desc.static_tree,h=t.stat_desc.has_stree,d=t.stat_desc.extra_bits,m=t.stat_desc.extra_base,_=t.stat_desc.max_length,g=0;for(s=0;s<=p;s++)e.bl_count[s]=0;for(l[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<f;n++)_<(s=l[2*l[2*(r=e.heap[n])+1]+1]+1)&&(s=_,g++),l[2*r+1]=s,c<r||(e.bl_count[s]++,o=0,m<=r&&(o=d[r-m]),a=l[2*r],e.opt_len+=a*(s+o),h&&(e.static_len+=a*(u[2*r+1]+o)));if(0!==g){do{for(s=_-1;0===e.bl_count[s];)s--;e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[_]--,g-=2}while(0<g);for(s=_;0!==s;s--)for(r=e.bl_count[s];0!==r;)c<(i=e.heap[--n])||(l[2*i+1]!==s&&(e.opt_len+=(s-l[2*i+1])*l[2*i],l[2*i+1]=s),r--)}}(e,t),B(s,c,e.bl_count)}function K(e,t,n){var r,i,s=-1,o=t[1],a=0,l=7,c=4;for(0===o&&(l=138,c=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++a<l&&i===o||(a<c?e.bl_tree[2*i]+=a:0!==i?(i!==s&&e.bl_tree[2*i]++,e.bl_tree[2*v]++):a<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++,s=i,c=(a=0)===o?(l=138,3):i===o?(l=6,3):(l=7,4))}function Y(e,t,n){var r,i,s=-1,o=t[1],a=0,l=7,c=4;for(0===o&&(l=138,c=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++a<l&&i===o)){if(a<c)for(;z(e,i,e.bl_tree),0!=--a;);else 0!==i?(i!==s&&(z(e,i,e.bl_tree),a--),z(e,v,e.bl_tree),F(e,a-3,2)):a<=10?(z(e,y,e.bl_tree),F(e,a-3,3)):(z(e,b,e.bl_tree),F(e,a-11,7));s=i,c=(a=0)===o?(l=138,3):i===o?(l=6,3):(l=7,4)}}o(P);var Z=!1;function J(e,t,n,i){var s,o,l,c;F(e,(a<<1)+(i?1:0),3),o=t,l=n,c=!0,W(s=e),c&&(M(s,l),M(s,~l)),r.arraySet(s.pending_buf,s.window,o,l,s.pending),s.pending+=l}n._tr_init=function(e){Z||(function(){var e,t,n,r,i,s=new Array(p+1);for(r=n=0;r<l-1;r++)for(R[r]=n,e=0;e<1<<w[r];e++)x[n++]=r;for(x[n-1]=r,r=i=0;r<16;r++)for(P[r]=i,e=0;e<1<<k[r];e++)S[i++]=r;for(i>>=7;r<h;r++)for(P[r]=i<<7,e=0;e<1<<k[r]-7;e++)S[256+i++]=r;for(t=0;t<=p;t++)s[t]=0;for(e=0;e<=143;)I[2*e+1]=8,e++,s[8]++;for(;e<=255;)I[2*e+1]=9,e++,s[9]++;for(;e<=279;)I[2*e+1]=7,e++,s[7]++;for(;e<=287;)I[2*e+1]=8,e++,s[8]++;for(B(I,u+1,s),e=0;e<h;e++)T[2*e+1]=5,T[2*e]=j(e,5);O=new D(I,w,c+1,u,p),A=new D(T,k,0,h,p),N=new D(new Array(0),C,0,d,_)}(),Z=!0),e.l_desc=new L(e.dyn_ltree,O),e.d_desc=new L(e.dyn_dtree,A),e.bl_desc=new L(e.bl_tree,N),e.bi_buf=0,e.bi_valid=0,q(e)},n._tr_stored_block=J,n._tr_flush_block=function(e,t,n,r){var o,a,l=0;0<e.level?(2===e.strm.data_type&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&0!==e.dyn_ltree[2*t])return i;if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return s;for(t=32;t<c;t++)if(0!==e.dyn_ltree[2*t])return s;return i}(e)),G(e,e.l_desc),G(e,e.d_desc),l=function(e){var t;for(K(e,e.dyn_ltree,e.l_desc.max_code),K(e,e.dyn_dtree,e.d_desc.max_code),G(e,e.bl_desc),t=d-1;3<=t&&0===e.bl_tree[2*E[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(a=e.static_len+3+7>>>3)<=o&&(o=a)):o=a=n+5,n+4<=o&&-1!==t?J(e,t,n,r):4===e.strategy||a===o?(F(e,2+(r?1:0),3),$(e,I,T)):(F(e,4+(r?1:0),3),function(e,t,n,r){var i;for(F(e,t-257,5),F(e,n-1,5),F(e,r-4,4),i=0;i<r;i++)F(e,e.bl_tree[2*E[i]+1],3);Y(e,e.dyn_ltree,t-1),Y(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,l+1),$(e,e.dyn_ltree,e.dyn_dtree)),q(e),r&&W(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,0===t?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(x[n]+c+1)]++,e.dyn_dtree[2*U(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){var t;F(e,2,3),z(e,g,I),16===(t=e).bi_valid?(M(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):8<=t.bi_valid&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){!function(e,t){if(!e.setImmediate){var n,r,i,s,o=1,a={},l=!1,c=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n="[object process]"==={}.toString.call(e.process)?function(e){process.nextTick((function(){d(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(s="setImmediate$"+Math.random()+"$",e.addEventListener?e.addEventListener("message",f,!1):e.attachEvent("onmessage",f),function(t){e.postMessage(s+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){d(e.data)},function(e){i.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(r=c.documentElement,function(e){var t=c.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(d,0,e)},u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var i={callback:e,args:t};return a[o]=i,n(o),o++},u.clearImmediate=h}function h(e){delete a[e]}function d(e){if(l)setTimeout(d,0,e);else{var n=a[e];if(n){l=!0;try{!function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}}(n)}finally{h(e),l=!1}}}}function f(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(s)&&d(+t.data.slice(s.length))}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,void 0!==jw?jw:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[10])(10)}));const Hw=jr("h3",null,"バナータスク",-1),$w={class:"table-responsive mb-4"},Gw={class:"table table-striped text-nowrap",style:{width:"1296px"}},Kw=jr("thead",null,[jr("tr",null,[jr("th",{scope:"col"},"店舗"),jr("th",{scope:"col"},"担当者"),jr("th",{scope:"col"},"サイズ"),jr("th",{scope:"col"},"イベント名"),jr("th",{scope:"col"},"内容"),jr("th",{scope:"col"},"文言"),jr("th",{scope:"col"},"その他要望"),jr("th",{scope:"col"},"提出期限")])],-1),Yw={class:"text-wrap"},Zw={class:"text-wrap"},Jw={class:"text-wrap"},Xw={class:"text-wrap"},Qw={class:"text-wrap"},ek={class:"text-wrap"},tk={class:"text-wrap"},nk={class:"text-wrap"},rk={key:0,class:"btn btn_space btn-secondary pe-none"},ik=[jr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],sk=["onClick"],ok=[jr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],ak=["onClick"],lk=jr("h3",null,"レタッチタスク",-1),ck={class:"table-responsive mb-4"},uk={class:"table table-striped text-nowrap",style:{width:"1296px"}},hk=jr("thead",null,[jr("tr",null,[jr("th",{scope:"col"},"店舗"),jr("th",{scope:"col"},"担当者"),jr("th",{scope:"col"},"キャスト名"),jr("th",{scope:"col"},"修正箇所"),jr("th",{scope:"col"},"顔の処理"),jr("th",{scope:"col"},"提出期限")])],-1),dk={class:"text-wrap"},fk={class:"text-wrap"},pk={class:"text-wrap"},mk={class:"text-wrap"},_k={class:"text-wrap"},gk={class:"text-wrap"},vk={key:0,class:"btn btn_space btn-secondary pe-none"},yk=[jr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],bk=["onClick"],wk=[jr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],kk=["onClick"],Ck={name:"manager-page"};var Ek=Object.assign(Ck,{setup(e){const t=tf(oa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),n=Ld(t,"banner"),r=Ld(t,"retouch"),i=st({fire_data:[],completed:""}),s=()=>{zd(Kd(n,Hd("completed"),Gd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);i.fire_data=t}))},o=ci((function(){return i.fire_data}));async function a(e){const t=new Vw,n=zp(),r=Fp(n,e),i=(await Up(r)).items.map((async e=>{const r=await Lp(e),i=Fp(n,e.fullPath),s=await Mp(i).then((e=>fetch(e).then((e=>e.blob()))));t.file(r.name,s)})).reduce(((e,t)=>e.then((()=>t))),Promise.resolve());await i;const s=await t.generateAsync({type:"blob"});Ww.saveAs(s,e+".zip")}function l(e){Up(Fp(zp(),e+"/")).then((e=>{e.items.forEach((e=>{Tp(go(e))}))}))}const c=st({fire_data:[]}),u=()=>{zd(Kd(r,Hd("completed"),Gd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);c.fire_data=t}))},h=ci((function(){return c.fire_data}));return kn((()=>{s(),u()})),(e,n)=>(Or(),Dr("section",null,[Hw,jr("div",$w,[jr("table",Gw,[Kw,jr("tbody",null,[(Or(!0),Dr(Er,null,Ln(o.value,(e=>(Or(),Dr("tr",null,[jr("td",Yw,Z(e.shop),1),jr("td",Zw,Z(e.manager),1),jr("td",Jw,Z(e.sizes),1),jr("td",Xw,Z(e.eventName),1),jr("td",Qw,Z(e.eventDetails),1),jr("td",ek,Z(e.wording),1),jr("td",tk,Z(e.others),1),jr("td",nk,Z(e.deadlines),1),jr("td",null,["false"==e.img?(Or(),Dr("button",rk,ik)):Vr("",!0),"true"==e.img?(Or(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.eventName)},ok,8,sk)):Vr("",!0),jr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,Fd(Ld(t,"banner/"+r),{completed:"true"}),s(),l(e.eventName)}},"完了",8,ak)])])))),256))])])]),lk,jr("div",ck,[jr("table",uk,[hk,jr("tbody",null,[(Or(!0),Dr(Er,null,Ln(h.value,(e=>(Or(),Dr("tr",null,[jr("td",dk,Z(e.shop),1),jr("td",fk,Z(e.manager),1),jr("td",pk,Z(e.castName),1),jr("td",mk,Z(e.retouchings),1),jr("td",_k,Z(e.faceRetouching),1),jr("td",gk,Z(e.deadlines),1),jr("td",null,["false"==e.img?(Or(),Dr("button",vk,yk)):Vr("",!0),"true"==e.img?(Or(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.castName)},wk,8,bk)):Vr("",!0),jr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,Fd(Ld(t,"retouch/"+r),{completed:"true"}),u(),l(e.castName)}},"完了",8,kk)])])))),256))])])])]))}});const Ik={class:"mx-auto col-sm-6"},Tk=jr("h2",null,"ログイン",-1),Sk={class:"mb-3"},xk=jr("label",{class:"form-label"},"メールアドレス：",-1),Rk={class:"mb-3"},Ok=jr("label",{class:"form-label"},"パスワード：",-1);var Ak={__name:"Login",setup(e){oa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"});const t=st({mailAddress:"",password:""}),n=Cb(),r=async()=>{await function(e,t){return go(e).setPersistence(t)}(n,gy).then((()=>hy(n,t.mailAddress,t.password))).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n)})),location.reload()};return(e,n)=>(Or(),Dr("div",Ik,[Tk,jr("form",{onSubmit:n[2]||(n[2]=ji((()=>{}),["prevent"]))},[jr("div",Sk,[xk,un(jr("input",{type:"email",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>t.mailAddress=e),autocomplete:"on"},null,512),[[Ni,t.mailAddress]])]),jr("div",Rk,[Ok,un(jr("input",{type:"password",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>t.password=e),autocomplete:"on"},null,512),[[Ni,t.password]])])],32),jr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[jr("button",{onClick:r,class:"btn btn-info text-white fw-bold"},"ログイン")])]))}};const Nk=new function(e){const t=W_(e.routes,e),n=e.parseQuery||pg,r=e.stringifyQuery||mg,i=e.history,s=kg(),o=kg(),a=kg(),l=bt(x_,!0);let c=x_;t_&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=r_.bind(null,(e=>""+e)),h=r_.bind(null,dg),d=r_.bind(null,fg);function f(e,s){if(s=n_({},s||l.value),"string"==typeof e){const r=l_(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return n_(r,o,{params:d(o.params),hash:fg(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=n_({},e,{path:l_(n,e.path,s.path).path});else{const t=n_({},e.params);for(const e in t)null==t[e]&&delete t[e];o=n_({},e,{params:h(t)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const f=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,n_({},e,{hash:(p=c,ug(p).replace(og,"{").replace(lg,"}").replace(ig,"^")),path:a.path}));var p;const m=i.createHref(f);return n_({fullPath:f,hash:c,query:r===mg?_g(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function p(e){return"string"==typeof e?l_(n,e,l.value.path):n_({},e)}function m(e,t){if(c!==e)return N_(8,{from:t,to:e})}function _(e){return v(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=p(r):{path:r},r.params={}),n_({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function v(e,t){const n=c=f(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return v(n_(p(u),{state:"object"==typeof u?n_({},s,u.state):s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&u_(t.matched[r],n.matched[i])&&h_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=N_(16,{to:h,from:i}),A(i,i,!0,!1)),(d?Promise.resolve(d):w(h,i)).catch((e=>P_(e)?P_(e,2)?e:O(e):R(e,h,i))).then((e=>{if(e){if(P_(e,2))return v(n_({replace:a},p(e.to),{state:"object"==typeof e.to?n_({},s,e.to.state):s,force:o}),t||h)}else e=C(h,i,!0,a,s);return k(h,i,e),e}))}function y(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=D.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function w(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>u_(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>u_(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=Eg(r.reverse(),"beforeRouteLeave",e,t);for(const i of r)i.leaveGuards.forEach((r=>{n.push(Cg(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),L(n).then((()=>{n=[];for(const r of s.list())n.push(Cg(r,e,t));return n.push(l),L(n)})).then((()=>{n=Eg(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Cg(r,e,t))}));return n.push(l),L(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(s_(r.beforeEnter))for(const i of r.beforeEnter)n.push(Cg(i,e,t));else n.push(Cg(r.beforeEnter,e,t));return n.push(l),L(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Eg(a,"beforeRouteEnter",e,t),n.push(l),L(n)))).then((()=>{n=[];for(const r of o.list())n.push(Cg(r,e,t));return n.push(l),L(n)})).catch((e=>P_(e,8)?e:Promise.reject(e)))}function k(e,t,n){a.list().forEach((r=>b((()=>r(e,t,n)))))}function C(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===x_,c=t_?history.state:{};n&&(r||a?i.replace(e.fullPath,n_({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,A(e,t,n,a),O()}let E;function I(){E||(E=i.listen(((e,t,n)=>{const r=f(e),s=g(r);if(s)return void v(n_(s,{replace:!0}),r).catch(i_);c=r;const o=l.value;var a,u;t_&&(a=k_(o.fullPath,n.delta),u=b_(),C_.set(a,u)),w(r,o).catch((e=>P_(e,12)?e:P_(e,2)?(v(e.to,r).then((e=>{P_(e,20)&&!n.delta&&n.type===p_.pop&&i.go(-1,!1)})).catch(i_),Promise.reject()):(n.delta&&i.go(-n.delta,!1),R(e,r,o)))).then((e=>{(e=e||C(r,o,!1))&&(n.delta&&!P_(e,8)?i.go(-n.delta,!1):n.type===p_.pop&&P_(e,20)&&i.go(-1,!1)),k(r,o,e)})).catch(i_)})))}let T,S=kg(),x=kg();function R(e,t,n){O(e);const r=x.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function O(e){return T||(T=!e,I(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset()),e}function A(t,n,r,i){const{scrollBehavior:s}=e;if(!t_||!s)return Promise.resolve();const o=!r&&function(e){const t=C_.get(e);return C_.delete(e),t}(k_(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Ft().then((()=>s(t,n,o))).then((e=>e&&w_(e))).catch((e=>R(e,t,n)))}const N=e=>i.go(e);let P;const D=new Set;function L(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return{currentRoute:l,listening:!0,addRoute:function(e,n){let r,i;return S_(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:_,replace:function(e){return _(n_(p(e),{replace:!0}))},go:N,back:()=>N(-1),forward:()=>N(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:x.add,isReady:function(){return T&&l.value!==x_?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",Sg),e.component("RouterView",Ng),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>kt(l)}),t_&&!P&&l.value===x_&&(P=!0,_(i.location).catch((e=>{})));const t={};for(const e in x_)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(yg,this),e.provide(bg,ot(t)),e.provide(wg,l);const n=e.unmount;D.add(e),e.unmount=function(){D.delete(e),D.size<1&&(c=x_,E&&E(),E=null,l.value=x_,P=!1,T=!1),n()}}}}({history:function(e){const t=function(e){const{history:t,location:n}=window,r={value:I_(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:E_()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(e){console.error(e),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=n_({},i.value,t.state,{forward:e,scroll:b_()});s(o.current,o,!0),s(e,n_({},T_(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,n_({},t.state,T_(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(t_){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),a_(e)}(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=I_(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:p_.pop,direction:u?u>0?__.forward:__.back:__.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(n_({},e.state,{scroll:b_()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace),r=n_({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:y_.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:[{path:"/",name:"index",component:zw,meta:{requiresAuth:!0}},{path:"/retouch",name:"retouch",component:Jm,meta:{requiresAuth:!0}},{path:"/manager-page",name:"manager-page",component:Ek,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Ak,meta:{requiresAuth:!1}}]});Cb(oa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),Nk.beforeEach((async(e,t)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),r=new Promise((e=>{const t=Cb().onAuthStateChanged((n=>{t(),e(!!n)}))}));return n&&!await r?"/login":"login"==e.name&&await r?"/":void 0}));var Pk=((...e)=>{const t=(Vi||(Vi=wr(Wi))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(g(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;_(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t})(Xm);Pk.use(e_),Pk.use(Nk),Pk.mount("#app");
