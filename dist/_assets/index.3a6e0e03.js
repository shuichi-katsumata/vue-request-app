function e(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t={},n=[],r=()=>{},i=()=>!1,s=/^on[^a-z]/,o=e=>s.test(e),a=e=>e.startsWith("onUpdate:"),l=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,h=(e,t)=>u.call(e,t),d=Array.isArray,p=e=>"[object Map]"===E(e),f=e=>"[object Set]"===E(e),m=e=>"[object Date]"===E(e),g=e=>"function"==typeof e,_=e=>"string"==typeof e,y=e=>"symbol"==typeof e,v=e=>null!==e&&"object"==typeof e,b=e=>v(e)&&g(e.then)&&g(e.catch),w=Object.prototype.toString,E=e=>w.call(e),C=e=>E(e).slice(8,-1),T=e=>"[object Object]"===E(e),I=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,S=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},R=/-(\w)/g,O=k((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,x=k((e=>e.replace(P,"-$1").toLowerCase())),A=k((e=>e.charAt(0).toUpperCase()+e.slice(1))),N=k((e=>e?`on${A(e)}`:"")),D=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},M=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let j;const F=()=>j||(j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function q(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?z(r):q(r);if(i)for(const e in i)t[e]=i[e]}return t}return _(e)||v(e)?e:void 0}const B=/;(?![^(]*\))/g,V=/:([^]+)/,W=/\/\*[^]*?\*\//g;function z(e){const t={};return e.replace(W,"").split(B).forEach((e=>{if(e){const n=e.split(V);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function H(e){let t="";if(_(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const r=H(e[n]);r&&(t+=r+" ")}else if(v(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function G(e){return!!e||""===e}function K(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=y(e),r=y(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=K(e[r],t[r]);return n}(e,t);if(n=v(e),r=v(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!K(e[n],t[n]))return!1}}return String(e)===String(t)}function J(e,t){return e.findIndex((e=>K(e,t)))}const Y=e=>_(e)?e:null==e?"":d(e)||v(e)&&(e.toString===w||!g(e.toString))?JSON.stringify(e,Q,2):String(e),Q=(e,t)=>t&&t.__v_isRef?Q(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:f(t)?{[`Set(${t.size})`]:[...t.values()]}:!v(t)||d(t)||T(t)?t:String(t);let X;class Z{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=X,!e&&X&&(this.index=(X.scopes||(X.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=X;try{return X=this,e()}finally{X=t}}}on(){X=this}off(){X=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const ee=e=>{const t=new Set(e);return t.w=0,t.n=0,t},te=e=>(e.w&se)>0,ne=e=>(e.n&se)>0,re=new WeakMap;let ie=0,se=1;const oe=30;let ae;const le=Symbol(""),ce=Symbol("");class ue{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=X){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ae,t=de;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ae,ae=this,de=!0,se=1<<++ie,ie<=oe?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=se})(this):he(this),this.fn()}finally{ie<=oe&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];te(i)&&!ne(i)?i.delete(e):t[n++]=i,i.w&=~se,i.n&=~se}t.length=n}})(this),se=1<<--ie,ae=this.parent,de=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let de=!0;const pe=[];function fe(){pe.push(de),de=!1}function me(){const e=pe.pop();de=void 0===e||e}function ge(e,t,n){if(de&&ae){let t=re.get(e);t||re.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=ee()),_e(r)}}function _e(e,t){let n=!1;ie<=oe?ne(e)||(e.n|=se,n=!te(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e))}function ye(e,t,n,r,i,s){const o=re.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&d(e)){const e=Number(r);o.forEach(((t,n)=>{("length"===n||n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":d(e)?I(n)&&a.push(o.get("length")):(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"delete":d(e)||(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"set":p(e)&&a.push(o.get(le))}if(1===a.length)a[0]&&ve(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);ve(ee(e))}}function ve(e,t){const n=d(e)?e:[...e];for(const e of n)e.computed&&be(e);for(const e of n)e.computed||be(e)}function be(e,t){(e!==ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const we=e("__proto__,__v_isRef,__isVue"),Ee=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(y)),Ce=Oe(),Te=Oe(!1,!0),Ie=Oe(!0),Se=ke();function ke(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=pt(this);for(let e=0,t=this.length;e<t;e++)ge(n,0,e+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(pt)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){fe();const n=pt(this)[t].apply(this,e);return me(),n}})),e}function Re(e){const t=pt(this);return ge(t,0,e),t.hasOwnProperty(e)}function Oe(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&i===(e?t?it:rt:t?nt:tt).get(n))return n;const s=d(n);if(!e){if(s&&h(Se,r))return Reflect.get(Se,r,i);if("hasOwnProperty"===r)return Re}const o=Reflect.get(n,r,i);return(y(r)?Ee.has(r):we(r))?o:(e||ge(n,0,r),t?o:vt(o)?s&&I(r)?o:o.value:v(o)?e?at(o):st(o):o)}}function Pe(e=!1){return function(t,n,r,i){let s=t[n];if(ut(s)&&vt(s)&&!vt(r))return!1;if(!e&&(ht(r)||ut(r)||(s=pt(s),r=pt(r)),!d(t)&&vt(s)&&!vt(r)))return s.value=r,!0;const o=d(t)&&I(n)?Number(n)<t.length:h(t,n),a=Reflect.set(t,n,r,i);return t===pt(i)&&(o?D(r,s)&&ye(t,"set",n,r):ye(t,"add",n,r)),a}}const xe={get:Ce,set:Pe(),deleteProperty:function(e,t){const n=h(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ye(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return y(t)&&Ee.has(t)||ge(e,0,t),n},ownKeys:function(e){return ge(e,0,d(e)?"length":le),Reflect.ownKeys(e)}},Ae={get:Ie,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ne=l({},xe,{get:Te,set:Pe(!0)}),De=e=>e,Le=e=>Reflect.getPrototypeOf(e);function Me(e,t,n=!1,r=!1){const i=pt(e=e.__v_raw),s=pt(t);n||(t!==s&&ge(i,0,t),ge(i,0,s));const{has:o}=Le(i),a=r?De:n?gt:mt;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,r=pt(n),i=pt(e);return t||(e!==i&&ge(r,0,e),ge(r,0,i)),e===i?n.has(e):n.has(e)||n.has(i)}function je(e,t=!1){return e=e.__v_raw,!t&&ge(pt(e),0,le),Reflect.get(e,"size",e)}function Fe(e){e=pt(e);const t=pt(this);return Le(t).has.call(t,e)||(t.add(e),ye(t,"add",e,e)),this}function qe(e,t){t=pt(t);const n=pt(this),{has:r,get:i}=Le(n);let s=r.call(n,e);s||(e=pt(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?D(t,o)&&ye(n,"set",e,t):ye(n,"add",e,t),this}function Be(e){const t=pt(this),{has:n,get:r}=Le(t);let i=n.call(t,e);i||(e=pt(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ye(t,"delete",e,void 0),s}function Ve(){const e=pt(this),t=0!==e.size,n=e.clear();return t&&ye(e,"clear",void 0,void 0),n}function We(e,t){return function(n,r){const i=this,s=i.__v_raw,o=pt(s),a=t?De:e?gt:mt;return!e&&ge(o,0,le),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ze(e,t,n){return function(...r){const i=this.__v_raw,s=pt(i),o=p(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?De:t?gt:mt;return!t&&ge(s,0,l?ce:le),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return"delete"!==e&&this}}function $e(){const e={get(e){return Me(this,e)},get size(){return je(this)},has:Ue,add:Fe,set:qe,delete:Be,clear:Ve,forEach:We(!1,!1)},t={get(e){return Me(this,e,!1,!0)},get size(){return je(this)},has:Ue,add:Fe,set:qe,delete:Be,clear:Ve,forEach:We(!1,!0)},n={get(e){return Me(this,e,!0)},get size(){return je(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!1)},r={get(e){return Me(this,e,!0,!0)},get size(){return je(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=ze(i,!1,!1),n[i]=ze(i,!0,!1),t[i]=ze(i,!1,!0),r[i]=ze(i,!0,!0)})),[e,n,t,r]}const[Ge,Ke,Je,Ye]=$e();function Qe(e,t){const n=t?e?Ye:Je:e?Ke:Ge;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(h(n,r)&&r in t?n:t,r,i)}const Xe={get:Qe(!1,!1)},Ze={get:Qe(!1,!0)},et={get:Qe(!0,!1)},tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap;function st(e){return ut(e)?e:lt(e,!1,xe,Xe,tt)}function ot(e){return lt(e,!1,Ne,Ze,nt)}function at(e){return lt(e,!0,Ae,et,rt)}function lt(e,t,n,r,i){if(!v(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(C(a));var a;if(0===o)return e;const l=new Proxy(e,2===o?r:n);return i.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!(!e||!e.__v_isReactive)}function ut(e){return!(!e||!e.__v_isReadonly)}function ht(e){return!(!e||!e.__v_isShallow)}function dt(e){return ct(e)||ut(e)}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function ft(e){return M(e,"__v_skip",!0),e}const mt=e=>v(e)?st(e):e,gt=e=>v(e)?at(e):e;function _t(e){de&&ae&&_e((e=pt(e)).dep||(e.dep=ee()))}function yt(e,t){const n=(e=pt(e)).dep;n&&ve(n)}function vt(e){return!(!e||!0!==e.__v_isRef)}function bt(e,t){return vt(e)?e:new wt(e,t)}class wt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:pt(e),this._value=t?e:mt(e)}get value(){return _t(this),this._value}set value(e){const t=this.__v_isShallow||ht(e)||ut(e);e=t?e:pt(e),D(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mt(e),yt(this))}}function Et(e){return vt(e)?e.value:e}const Ct={get:(e,t,n)=>Et(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return vt(i)&&!vt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Tt(e){return ct(e)?e:new Proxy(e,Ct)}class It{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ue(e,(()=>{this._dirty||(this._dirty=!0,yt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=pt(this);return _t(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function St(e,t,n,r){let i;try{i=r?e(...r):e()}catch(e){Rt(e,t,n)}return i}function kt(e,t,n,r){if(g(e)){const i=St(e,t,n,r);return i&&b(i)&&i.catch((e=>{Rt(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(kt(e[s],t,n,r));return i}function Rt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void St(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Ot=!1,Pt=!1;const xt=[];let At=0;const Nt=[];let Dt=null,Lt=0;const Mt=Promise.resolve();let Ut=null;function jt(e){const t=Ut||Mt;return e?t.then(this?e.bind(this):e):t}function Ft(e){xt.length&&xt.includes(e,Ot&&e.allowRecurse?At+1:At)||(null==e.id?xt.push(e):xt.splice(function(e){let t=At+1,n=xt.length;for(;t<n;){const r=t+n>>>1;Wt(xt[r])<e?t=r+1:n=r}return t}(e.id),0,e),qt())}function qt(){Ot||Pt||(Pt=!0,Ut=Mt.then(Ht))}function Bt(e,t=(Ot?At+1:0)){for(;t<xt.length;t++){const e=xt[t];e&&e.pre&&(xt.splice(t,1),t--,e())}}function Vt(e){if(Nt.length){const e=[...new Set(Nt)];if(Nt.length=0,Dt)return void Dt.push(...e);for(Dt=e,Dt.sort(((e,t)=>Wt(e)-Wt(t))),Lt=0;Lt<Dt.length;Lt++)Dt[Lt]();Dt=null,Lt=0}}const Wt=e=>null==e.id?1/0:e.id,zt=(e,t)=>{const n=Wt(e)-Wt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ht(e){Pt=!1,Ot=!0,xt.sort(zt);try{for(At=0;At<xt.length;At++){const e=xt[At];e&&!1!==e.active&&St(e,null,14)}}finally{At=0,xt.length=0,Vt(),Ot=!1,Ut=null,(xt.length||Nt.length)&&Ht()}}function $t(e,n,...r){if(e.isUnmounted)return;const i=e.vnode.props||t;let s=r;const o=n.startsWith("update:"),a=o&&n.slice(7);if(a&&a in i){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:n,trim:o}=i[e]||t;o&&(s=r.map((e=>_(e)?e.trim():e))),n&&(s=r.map(U))}let l,c=i[l=N(n)]||i[l=N(O(n))];!c&&o&&(c=i[l=N(x(n))]),c&&kt(c,e,6,s);const u=i[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,kt(u,e,6,s)}}function Gt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!g(e)){const r=e=>{const n=Gt(e,t,!0);n&&(a=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(d(s)?s.forEach((e=>o[e]=null)):l(o,s),v(e)&&r.set(e,o),o):(v(e)&&r.set(e,null),null)}function Kt(e,t){return!(!e||!o(t))&&(t=t.slice(2).replace(/Once$/,""),h(e,t[0].toLowerCase()+t.slice(1))||h(e,x(t))||h(e,t))}let Jt=null,Yt=null;function Qt(e){const t=Jt;return Jt=e,Yt=e&&e.type.__scopeId||null,t}function Xt(e,t=Jt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ar(-1);const i=Qt(t);let s;try{s=e(...n)}finally{Qt(i),r._d&&Ar(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Zt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,data:p,setupState:f,ctx:m,inheritAttrs:g}=e;let _,y;const v=Qt(e);try{if(4&n.shapeFlag){const e=i||r;_=Hr(h.call(e,e,d,s,f,p,m)),y=c}else{const e=t;0,_=Hr(e.length>1?e(s,{attrs:c,slots:l,emit:u}):e(s,null)),y=t.props?c:en(c)}}catch(t){Rr.length=0,Rt(t,e,1),_=Br(Sr)}let b=_;if(y&&!1!==g){const e=Object.keys(y),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(a)&&(y=tn(y,o)),b=Vr(b,y))}return n.dirs&&(b=Vr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),_=b,Qt(v),_}const en=e=>{let t;for(const n in e)("class"===n||"style"===n||o(n))&&((t||(t={}))[n]=e[n]);return t},tn=(e,t)=>{const n={};for(const r in e)a(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function nn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Kt(n,s))return!0}return!1}const rn={};function sn(e,t,n){return on(e,t,n)}function on(e,n,{immediate:i,deep:s,flush:o,onTrack:a,onTrigger:l}=t){var u;const h=X===(null==(u=Zr)?void 0:u.scope)?Zr:null;let p,f,m=!1,_=!1;if(vt(e)?(p=()=>e.value,m=ht(e)):ct(e)?(p=()=>e,s=!0):d(e)?(_=!0,m=e.some((e=>ct(e)||ht(e))),p=()=>e.map((e=>vt(e)?e.value:ct(e)?cn(e):g(e)?St(e,h,2):void 0))):p=g(e)?n?()=>St(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),kt(e,h,3,[v])}:r,n&&s){const e=p;p=()=>cn(e())}let y,v=e=>{f=C.onStop=()=>{St(e,h,4)}};if(si){if(v=r,n?i&&kt(n,h,3,[p(),_?[]:void 0,v]):p(),"sync"!==o)return r;{const e=di();y=e.__watcherHandles||(e.__watcherHandles=[])}}let b=_?new Array(e.length).fill(rn):rn;const w=()=>{if(C.active)if(n){const e=C.run();(s||m||(_?e.some(((e,t)=>D(e,b[t]))):D(e,b)))&&(f&&f(),kt(n,h,3,[e,b===rn?void 0:_&&b[0]===rn?[]:b,v]),b=e)}else C.run()};let E;w.allowRecurse=!!n,"sync"===o?E=w:"post"===o?E=()=>br(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),E=()=>Ft(w));const C=new ue(p,E);n?i?w():b=C.run():"post"===o?br(C.run.bind(C),h&&h.suspense):C.run();const T=()=>{C.stop(),h&&h.scope&&c(h.scope.effects,C)};return y&&y.push(T),T}function an(e,t,n){const r=this.proxy,i=_(e)?e.includes(".")?ln(r,e):()=>r[e]:e.bind(r,r);let s;g(t)?s=t:(s=t.handler,n=t);const o=Zr;ti(this);const a=on(i,s.bind(r),n);return o?ti(o):ni(),a}function ln(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function cn(e,t){if(!v(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),vt(e))cn(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(f(e)||p(e))e.forEach((e=>{cn(e,t)}));else if(T(e))for(const n in e)cn(e[n],t);return e}function un(e,n){const r=Jt;if(null===r)return e;const i=li(r)||r.proxy,s=e.dirs||(e.dirs=[]);for(let e=0;e<n.length;e++){let[r,o,a,l=t]=n[e];r&&(g(r)&&(r={mounted:r,updated:r}),r.deep&&cn(o),s.push({dir:r,instance:i,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function hn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(fe(),kt(l,n,8,[e.el,a,e,t]),me())}}function dn(e,t){return g(e)?(()=>l({name:e.name},t,{setup:e}))():e}const pn=e=>!!e.type.__asyncLoader,fn=e=>e.type.__isKeepAlive;function mn(e,t){_n(e,"a",t)}function gn(e,t){_n(e,"da",t)}function _n(e,t,n=Zr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(vn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)fn(e.parent.vnode)&&yn(r,t,n,e),e=e.parent}}function yn(e,t,n,r){const i=vn(t,e,r,!0);Sn((()=>{c(r[t],i)}),n)}function vn(e,t,n=Zr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;fe(),ti(n);const i=kt(t,n,e,r);return ni(),me(),i});return r?i.unshift(s):i.push(s),s}}const bn=e=>(t,n=Zr)=>(!si||"sp"===e)&&vn(e,((...e)=>t(...e)),n),wn=bn("bm"),En=bn("m"),Cn=bn("bu"),Tn=bn("u"),In=bn("bum"),Sn=bn("um"),kn=bn("sp"),Rn=bn("rtg"),On=bn("rtc");function Pn(e,t=Zr){vn("ec",e,t)}const xn="components";function An(e,t){return function(e,t,n=!0,r=!1){const i=Jt||Zr;if(i){const n=i.type;if(e===xn){const e=function(e,t=!0){return g(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===O(t)||e===A(O(t))))return n}const s=Dn(i[e]||n[e],t)||Dn(i.appContext[e],t);return!s&&r?n:s}}(xn,e,!0,t)||e}const Nn=Symbol.for("v-ndc");function Dn(e,t){return e&&(e[t]||e[O(t)]||e[A(O(t))])}function Ln(e,t,n,r){let i;const s=n&&n[r];if(d(e)||_(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const Mn=e=>e?ri(e)?li(e)||e.proxy:Mn(e.parent):null,Un=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mn(e.parent),$root:e=>Mn(e.root),$emit:e=>e.emit,$options:e=>Hn(e),$forceUpdate:e=>e.f||(e.f=()=>Ft(e.update)),$nextTick:e=>e.n||(e.n=jt.bind(e.proxy)),$watch:e=>an.bind(e)}),jn=(e,n)=>e!==t&&!e.__isScriptSetup&&h(e,n),Fn={get({_:e},n){const{ctx:r,setupState:i,data:s,props:o,accessCache:a,type:l,appContext:c}=e;let u;if("$"!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return i[n];case 2:return s[n];case 4:return r[n];case 3:return o[n]}else{if(jn(i,n))return a[n]=1,i[n];if(s!==t&&h(s,n))return a[n]=2,s[n];if((u=e.propsOptions[0])&&h(u,n))return a[n]=3,o[n];if(r!==t&&h(r,n))return a[n]=4,r[n];Bn&&(a[n]=0)}}const d=Un[n];let p,f;return d?("$attrs"===n&&ge(e,0,n),d(e)):(p=l.__cssModules)&&(p=p[n])?p:r!==t&&h(r,n)?(a[n]=4,r[n]):(f=c.config.globalProperties,h(f,n)?f[n]:void 0)},set({_:e},n,r){const{data:i,setupState:s,ctx:o}=e;return jn(s,n)?(s[n]=r,!0):i!==t&&h(i,n)?(i[n]=r,!0):!h(e.props,n)&&(("$"!==n[0]||!(n.slice(1)in e))&&(o[n]=r,!0))},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:s,propsOptions:o}},a){let l;return!!r[a]||e!==t&&h(e,a)||jn(n,a)||(l=o[0])&&h(l,a)||h(i,a)||h(Un,a)||h(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qn(e){return d(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Bn=!0;function Vn(e){const t=Hn(e),n=e.proxy,i=e.ctx;Bn=!1,t.beforeCreate&&Wn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:p,mounted:f,beforeUpdate:m,updated:_,activated:y,deactivated:b,beforeDestroy:w,beforeUnmount:E,destroyed:C,unmounted:T,render:I,renderTracked:S,renderTriggered:k,errorCaptured:R,serverPrefetch:O,expose:P,inheritAttrs:x,components:A,directives:N,filters:D}=t;if(u&&function(e,t,n=r){d(e)&&(e=Jn(e));for(const n in e){const r=e[n];let i;i=v(r)?"default"in r?ir(r.from||n,r.default,!0):ir(r.from||n):ir(r),vt(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}(u,i,null),a)for(const e in a){const t=a[e];g(t)&&(i[e]=t.bind(n))}if(s){const t=s.call(n,n);v(t)&&(e.data=st(t))}if(Bn=!0,o)for(const e in o){const t=o[e],s=g(t)?t.bind(n,n):g(t.get)?t.get.bind(n,n):r,a=!g(t)&&g(t.set)?t.set.bind(n):r,l=ci({get:s,set:a});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(l)for(const e in l)zn(l[e],i,n,e);if(c){const e=g(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{rr(t,e[t])}))}function L(e,t){d(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Wn(h,e,"c"),L(wn,p),L(En,f),L(Cn,m),L(Tn,_),L(mn,y),L(gn,b),L(Pn,R),L(On,S),L(Rn,k),L(In,E),L(Sn,T),L(kn,O),d(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===r&&(e.render=I),null!=x&&(e.inheritAttrs=x),A&&(e.components=A),N&&(e.directives=N)}function Wn(e,t,n){kt(d(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function zn(e,t,n,r){const i=r.includes(".")?ln(n,r):()=>n[r];if(_(e)){const n=t[e];g(n)&&sn(i,n)}else if(g(e))sn(i,e.bind(n));else if(v(e))if(d(e))e.forEach((e=>zn(e,t,n,r)));else{const r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&sn(i,r,e)}}function Hn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>$n(l,e,o,!0))),$n(l,t,o)):l=t,v(t)&&s.set(t,l),l}function $n(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&$n(e,s,n,!0),i&&i.forEach((t=>$n(e,t,n,!0)));for(const i in t)if(r&&"expose"===i);else{const r=Gn[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}const Gn={data:Kn,props:Xn,emits:Xn,methods:Qn,computed:Qn,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:Qn,directives:Qn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=l(Object.create(null),e);for(const r in t)n[r]=Yn(e[r],t[r]);return n},provide:Kn,inject:function(e,t){return Qn(Jn(e),Jn(t))}};function Kn(e,t){return t?e?function(){return l(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function Jn(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yn(e,t){return e?[...new Set([].concat(e,t))]:t}function Qn(e,t){return e?l(Object.create(null),e,t):t}function Xn(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:l(Object.create(null),qn(e),qn(null!=t?t:{})):t}function Zn(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function tr(e,t){return function(n,r=null){g(n)||(n=l({},n)),null==r||v(r)||(r=null);const i=Zn(),s=new Set;let o=!1;const a=i.app={_uid:er++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:pi,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&g(e.install)?(s.add(e),e.install(a,...t)):g(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=Br(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,li(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a),runWithContext(e){nr=a;try{return e()}finally{nr=null}}};return a}}let nr=null;function rr(e,t){if(Zr){let n=Zr.provides;const r=Zr.parent&&Zr.parent.provides;r===n&&(n=Zr.provides=Object.create(r)),n[e]=t}else;}function ir(e,t,n=!1){const r=Zr||Jt;if(r||nr){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}function sr(e,n,r,i){const[s,o]=e.propsOptions;let a,l=!1;if(n)for(let t in n){if(S(t))continue;const c=n[t];let u;s&&h(s,u=O(t))?o&&o.includes(u)?(a||(a={}))[u]=c:r[u]=c:Kt(e.emitsOptions,t)||t in i&&c===i[t]||(i[t]=c,l=!0)}if(o){const n=pt(r),i=a||t;for(let t=0;t<o.length;t++){const a=o[t];r[a]=or(s,n,a,i[a],e,!h(i,a))}}return l}function or(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=h(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(ti(i),r=s[n]=e.call(null,t),ni())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==x(n)||(r=!0))}return r}function ar(e,r,i=!1){const s=r.propsCache,o=s.get(e);if(o)return o;const a=e.props,c={},u=[];let p=!1;if(!g(e)){const t=e=>{p=!0;const[t,n]=ar(e,r,!0);l(c,t),n&&u.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!a&&!p)return v(e)&&s.set(e,n),n;if(d(a))for(let e=0;e<a.length;e++){const n=O(a[e]);lr(n)&&(c[n]=t)}else if(a)for(const e in a){const t=O(e);if(lr(t)){const n=a[e],r=c[t]=d(n)||g(n)?{type:n}:l({},n);if(r){const e=hr(Boolean,r.type),n=hr(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||h(r,"default"))&&u.push(t)}}}const f=[c,u];return v(e)&&s.set(e,f),f}function lr(e){return"$"!==e[0]}function cr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ur(e,t){return cr(e)===cr(t)}function hr(e,t){return d(t)?t.findIndex((t=>ur(t,e))):g(t)&&ur(t,e)?0:-1}const dr=e=>"_"===e[0]||"$stable"===e,pr=e=>d(e)?e.map(Hr):[Hr(e)],fr=(e,t,n)=>{if(t._n)return t;const r=Xt(((...e)=>pr(t(...e))),n);return r._c=!1,r},mr=(e,t,n)=>{const r=e._ctx;for(const n in e){if(dr(n))continue;const i=e[n];if(g(i))t[n]=fr(0,i,r);else if(null!=i){const e=pr(i);t[n]=()=>e}}},gr=(e,t)=>{const n=pr(t);e.slots.default=()=>n},_r=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=pt(t),M(t,"_",n)):mr(t,e.slots={})}else e.slots={},t&&gr(e,t);M(e.slots,Ur,1)},yr=(e,n,r)=>{const{vnode:i,slots:s}=e;let o=!0,a=t;if(32&i.shapeFlag){const e=n._;e?r&&1===e?o=!1:(l(s,n),r||1!==e||delete s._):(o=!n.$stable,mr(n,s)),a=n}else n&&(gr(e,n),a={default:1});if(o)for(const e in s)dr(e)||e in a||delete s[e]};function vr(e,n,r,i,s=!1){if(d(e))return void e.forEach(((e,t)=>vr(e,n&&(d(n)?n[t]:n),r,i,s)));if(pn(i)&&!s)return;const o=4&i.shapeFlag?li(i.component)||i.component.proxy:i.el,a=s?null:o,{i:l,r:u}=e,p=n&&n.r,f=l.refs===t?l.refs={}:l.refs,m=l.setupState;if(null!=p&&p!==u&&(_(p)?(f[p]=null,h(m,p)&&(m[p]=null)):vt(p)&&(p.value=null)),g(u))St(u,l,12,[a,f]);else{const t=_(u),n=vt(u);if(t||n){const i=()=>{if(e.f){const n=t?h(m,u)?m[u]:f[u]:u.value;s?d(n)&&c(n,o):d(n)?n.includes(o)||n.push(o):t?(f[u]=[o],h(m,u)&&(m[u]=f[u])):(u.value=[o],e.k&&(f[e.k]=u.value))}else t?(f[u]=a,h(m,u)&&(m[u]=a)):n&&(u.value=a,e.k&&(f[e.k]=a))};a?(i.id=-1,br(i,r)):i()}}}const br=function(e,t){var n;t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):(d(n=e)?Nt.push(...n):Dt&&Dt.includes(n,n.allowRecurse?Lt+1:Lt)||Nt.push(n),qt())};function wr(e){return function(e,i){F().__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:d,setElementText:p,parentNode:f,nextSibling:m,setScopeId:g=r,insertStaticContent:_}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mr(e,t)&&(r=ee(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ir:v(e,t,n,r);break;case Sr:w(e,t,n,r);break;case kr:null==e&&E(t,n,r,o);break;case Tr:U(e,t,n,r,i,s,o,a,l);break;default:1&h?I(e,t,n,r,i,s,o,a,l):6&h?j(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,ne)}null!=u&&i&&vr(u,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},C=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=m(e),s(e,n,r),e=i;s(t,n,r)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),o(e),e=n;o(t)},I=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,l):A(e,t,i,s,o,a,l)},k=(e,t,n,r,i,o,c,u)=>{let h,d;const{type:f,props:m,shapeFlag:g,transition:_,dirs:y}=e;if(h=e.el=l(e.type,o,m&&m.is,m),8&g?p(h,e.children):16&g&&P(e.children,h,null,r,i,o&&"foreignObject"!==f,c,u),y&&hn(e,null,r,"created"),R(h,e,e.scopeId,c,r),m){for(const t in m)"value"===t||S(t)||a(h,t,null,m[t],o,e.children,r,i,X);"value"in m&&a(h,"value",null,m.value),(d=m.onVnodeBeforeMount)&&Kr(d,r,e)}y&&hn(e,null,r,"beforeMount");const v=(!i||i&&!i.pendingBranch)&&_&&!_.persisted;v&&_.beforeEnter(h),s(h,t,n),((d=m&&m.onVnodeMounted)||v||y)&&br((()=>{d&&Kr(d,r,e),v&&_.enter(h),y&&hn(e,null,r,"mounted")}),i)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){if(t===i.subTree){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},P=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?$r(e[c]):Hr(e[c]);y(null,l,t,n,r,i,s,o,a)}},A=(e,n,r,i,s,o,l)=>{const c=n.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=n;u|=16&e.patchFlag;const f=e.props||t,m=n.props||t;let g;r&&Er(r,!1),(g=m.onVnodeBeforeUpdate)&&Kr(g,r,n,e),d&&hn(n,e,r,"beforeUpdate"),r&&Er(r,!0);const _=s&&"foreignObject"!==n.type;if(h?N(e.dynamicChildren,h,c,r,i,_,o):l||z(e,n,c,null,r,i,_,o,!1),u>0){if(16&u)D(c,n,f,m,r,i,s);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,s),4&u&&a(c,"style",f.style,m.style,s),8&u){const t=n.dynamicProps;for(let n=0;n<t.length;n++){const o=t[n],l=f[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,r,i,X)}}1&u&&e.children!==n.children&&p(c,n.children)}else l||null!=h||D(c,n,f,m,r,i,s);((g=m.onVnodeUpdated)||d)&&br((()=>{g&&Kr(g,r,n,e),d&&hn(n,e,r,"updated")}),i)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Tr||!Mr(l,c)||70&l.shapeFlag)?f(l.el):n;y(l,c,u,null,r,i,s,o,!0)}},D=(e,n,r,i,s,o,l)=>{if(r!==i){if(r!==t)for(const t in r)S(t)||t in i||a(e,t,r[t],null,l,n.children,s,o,X);for(const t in i){if(S(t))continue;const c=i[t],u=r[t];c!==u&&"value"!==t&&a(e,t,u,c,l,n.children,s,o,X)}"value"in i&&a(e,"value",r.value,i.value)}},U=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(s(h,n,r),s(d,n,r),P(t.children,n,d,i,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(N(e.dynamicChildren,f,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&Cr(e,t,!0)):z(e,t,n,d,i,o,a,l,u)},j=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):q(t,n,r,i,s,o,l):B(e,t,l)},q=(e,n,r,i,s,o,a)=>{const l=e.component=function(e,n,r){const i=e.type,s=(n?n.appContext:e.appContext)||Jr,o={uid:Yr++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Z(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ar(i,s),emitsOptions:Gt(i,s),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};o.ctx={_:o},o.root=n?n.root:o,o.emit=$t.bind(null,o),e.ce&&e.ce(o);return o}(e,i,s);if(fn(e)&&(l.ctx.renderer=ne),function(e,t=!1){si=t;const{props:n,children:r}=e.vnode,i=ri(e);(function(e,t,n,r=!1){const i={},s={};M(s,Ur,1),e.propsDefaults=Object.create(null),sr(e,t,i,s);for(const t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:ot(i):e.type.props?e.props=i:e.props=s,e.attrs=s})(e,n,i,t),_r(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ft(new Proxy(e.ctx,Fn));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(ge(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;ti(e),fe();const i=St(r,e,0,[e.props,n]);if(me(),ni(),b(i)){if(i.then(ni,ni),t)return i.then((n=>{oi(e,n,t)})).catch((t=>{Rt(t,e,0)}));e.asyncDep=i}else oi(e,i,t)}else ai(e,t)}(e,t):void 0;si=!1}(l),l.asyncDep){if(s&&s.registerDep(l,V),!e.el){const e=l.subTree=Br(Sr);w(null,e,n,r)}}else V(l,e,n,r,s,o,a)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||nn(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?nn(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Kt(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,function(e){const t=xt.indexOf(e);t>At&&xt.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:l,vnode:c}=e,u=n;Er(e,!1),n?(n.el=c.el,W(e,n,o)):n=c,r&&L(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Kr(t,l,n,c),Er(e,!0);const h=Zt(e),d=e.subTree;e.subTree=h,y(d,h,f(d.el),ee(d),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&br(a,i),(t=n.props&&n.props.onVnodeUpdated)&&br((()=>Kr(t,l,n,c)),i)}else{let o;const{el:a,props:l}=t,{bm:c,m:u,parent:h}=e,d=pn(t);if(Er(e,!1),c&&L(c),!d&&(o=l&&l.onVnodeBeforeMount)&&Kr(o,h,t),Er(e,!0),a&&ie){const n=()=>{e.subTree=Zt(e),ie(a,e.subTree,e,i,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Zt(e);y(null,o,n,r,e,i,s),t.el=o.el}if(u&&br(u,i),!d&&(o=l&&l.onVnodeMounted)){const e=t;br((()=>Kr(o,h,e)),i)}(256&t.shapeFlag||h&&pn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&br(e.a,i),e.isMounted=!0,t=n=r=null}},l=e.effect=new ue(a,(()=>Ft(c)),e.scope),c=e.update=()=>l.run();c.id=e.uid,Er(e,!0),c()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=pt(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;sr(e,t,i,s)&&(c=!0);for(const s in a)t&&(h(t,s)||(r=x(s))!==s&&h(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=or(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&h(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Kt(e.emitsOptions,o))continue;const u=t[o];if(l)if(h(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=O(o);i[t]=or(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&ye(e,"set","$attrs")}(e,t.props,r,n),yr(e,t.children,n),fe(),Bt(),me()},z=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:f}=t;if(d>0){if(128&d)return void $(c,h,n,r,i,s,o,a,l);if(256&d)return void H(c,h,n,r,i,s,o,a,l)}8&f?(16&u&&X(c,i,s),h!==c&&p(n,h)):16&u?16&f?$(c,h,n,r,i,s,o,a,l):X(c,i,s,!0):(8&u&&p(n,""),16&f&&P(h,n,r,i,s,o,a,l))},H=(e,t,r,i,s,o,a,l,c)=>{t=t||n;const u=(e=e||n).length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const n=t[p]=c?$r(t[p]):Hr(t[p]);y(e[p],n,r,null,s,o,a,l,c)}u>h?X(e,s,o,!0,!1,d):P(t,r,i,s,o,a,l,c,d)},$=(e,t,r,i,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;for(;u<=d&&u<=p;){const n=e[u],i=t[u]=c?$r(t[u]):Hr(t[u]);if(!Mr(n,i))break;y(n,i,r,null,s,o,a,l,c),u++}for(;u<=d&&u<=p;){const n=e[d],i=t[p]=c?$r(t[p]):Hr(t[p]);if(!Mr(n,i))break;y(n,i,r,null,s,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,n=e<h?t[e].el:i;for(;u<=p;)y(null,t[u]=c?$r(t[u]):Hr(t[u]),r,n,s,o,a,l,c),u++}}else if(u>p)for(;u<=d;)K(e[u],s,o,!0),u++;else{const f=u,m=u,g=new Map;for(u=m;u<=p;u++){const e=t[u]=c?$r(t[u]):Hr(t[u]);null!=e.key&&g.set(e.key,u)}let _,v=0;const b=p-m+1;let w=!1,E=0;const C=new Array(b);for(u=0;u<b;u++)C[u]=0;for(u=f;u<=d;u++){const n=e[u];if(v>=b){K(n,s,o,!0);continue}let i;if(null!=n.key)i=g.get(n.key);else for(_=m;_<=p;_++)if(0===C[_-m]&&Mr(n,t[_])){i=_;break}void 0===i?K(n,s,o,!0):(C[i-m]=u+1,i>=E?E=i:w=!0,y(n,t[i],r,null,s,o,a,l,c),v++)}const T=w?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(C):n;for(_=T.length-1,u=b-1;u>=0;u--){const e=m+u,n=t[e],d=e+1<h?t[e+1].el:i;0===C[u]?y(null,n,r,d,s,o,a,l,c):w&&(_<0||u!==T[_]?G(n,r,d,2):_--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Tr){s(o,t,n);for(let e=0;e<c.length;e++)G(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===kr)return void C(e,t,n);if(2!==r&&1&u&&l)if(0===r)l.beforeEnter(o),s(o,t,n),br((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&vr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!pn(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&Kr(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&hn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ne,r):c&&(s!==Tr||h>0&&64&h)?X(c,t,n,!1,!0):(s===Tr&&384&h||!i&&16&u)&&X(l,t,n),r&&J(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&br((()=>{m&&Kr(m,t,e),p&&hn(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Tr)return void Y(n,r);if(t===kr)return void T(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Y=(e,t)=>{let n;for(;e!==t;)n=m(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&L(r),i.stop(),s&&(s.active=!1,K(o,e,t,n)),a&&br(a,t),br((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},ee=e=>6&e.shapeFlag?ee(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),te=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Bt(),Vt(),t._vnode=e},ne={p:y,um:K,m:G,r:J,mt:q,mc:P,pc:z,pbc:N,n:ee,o:e};let re,ie;i&&([re,ie]=i(ne));return{render:te,hydrate:re,createApp:tr(te,re)}}(e)}function Er({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Cr(e,t,n=!1){const r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){const t=r[e];let s=i[e];1&s.shapeFlag&&!s.dynamicChildren&&((s.patchFlag<=0||32===s.patchFlag)&&(s=i[e]=$r(i[e]),s.el=t.el),n||Cr(t,s)),s.type===Ir&&(s.el=t.el)}}const Tr=Symbol.for("v-fgt"),Ir=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),Rr=[];let Or=null;function Pr(e=!1){Rr.push(Or=e?null:[])}let xr=1;function Ar(e){xr+=e}function Nr(e){return e.dynamicChildren=xr>0?Or||n:null,Rr.pop(),Or=Rr[Rr.length-1]||null,xr>0&&Or&&Or.push(e),e}function Dr(e,t,n,r,i,s){return Nr(qr(e,t,n,r,i,s,!0))}function Lr(e){return!!e&&!0===e.__v_isVNode}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Ur="__vInternal",jr=({key:e})=>null!=e?e:null,Fr=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?_(e)||vt(e)||g(e)?{i:Jt,r:e,k:t,f:!!n}:e:null);function qr(e,t=null,n=null,r=0,i=null,s=(e===Tr?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jr(t),ref:t&&Fr(t),scopeId:Yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Gr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=_(n)?8:16),xr>0&&!o&&Or&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Or.push(l),l}const Br=function(e,t=null,n=null,r=0,i=null,s=!1){e&&e!==Nn||(e=Sr);if(Lr(e)){const r=Vr(e,t,!0);return n&&Gr(r,n),xr>0&&!s&&Or&&(6&r.shapeFlag?Or[Or.indexOf(e)]=r:Or.push(r)),r.patchFlag|=-2,r}o=e,g(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?dt(e)||Ur in e?l({},e):e:null}(t);let{class:e,style:n}=t;e&&!_(e)&&(t.class=H(e)),v(n)&&(dt(n)&&!d(n)&&(n=l({},n)),t.style=q(n))}const a=_(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:v(e)?4:g(e)?2:0;return qr(e,t,n,r,i,a,s,!0)};function Vr(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=H([t.class,r.class]));else if("style"===e)t.style=q([t.style,r.style]);else if(o(e)){const n=t[e],i=r[e];!i||n===i||d(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&jr(l),ref:t&&t.ref?n&&i?d(i)?i.concat(Fr(t)):[i,Fr(t)]:Fr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Tr?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vr(e.ssContent),ssFallback:e.ssFallback&&Vr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wr(e=" ",t=0){return Br(Ir,null,e,t)}function zr(e="",t=!1){return t?(Pr(),Nr(Br(Sr,null,e,n,r,!0))):Br(Sr,null,e);var n,r}function Hr(e){return null==e||"boolean"==typeof e?Br(Sr):d(e)?Br(Tr,null,e.slice()):"object"==typeof e?$r(e):Br(Ir,null,String(e))}function $r(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Vr(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(d(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Gr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Ur in t?3===r&&Jt&&(1===Jt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Jt}}else g(t)?(t={default:t,_ctx:Jt},n=32):(t=String(t),64&r?(n=16,t=[Wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kr(e,t,n,r=null){kt(e,t,7,[n,r])}const Jr=Zn();let Yr=0;let Qr,Xr,Zr=null,ei="__VUE_INSTANCE_SETTERS__";(Xr=F()[ei])||(Xr=F()[ei]=[]),Xr.push((e=>Zr=e)),Qr=e=>{Xr.length>1?Xr.forEach((t=>t(e))):Xr[0](e)};const ti=e=>{Qr(e),e.scope.on()},ni=()=>{Zr&&Zr.scope.off(),Qr(null)};function ri(e){return 4&e.vnode.shapeFlag}let ii,si=!1;function oi(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Tt(t)),ai(e,n)}function ai(e,t,n){const i=e.type;if(!e.render){if(!t&&ii&&!i.render){const t=i.template||Hn(e).template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:o}=i,a=l(l({isCustomElement:n,delimiters:s},r),o);i.render=ii(t,a)}}e.render=i.render||r}ti(e),fe(),Vn(e),me(),ni()}function li(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Tt(ft(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Un?Un[n](e):void 0,has:(e,t)=>t in e||t in Un}))}const ci=(e,t)=>function(e,t,n=!1){let i,s;const o=g(e);return o?(i=e,s=r):(i=e.get,s=e.set),new It(i,s,o||!s,n)}(e,0,si);function ui(e,t,n){const r=arguments.length;return 2===r?v(t)&&!d(t)?Lr(t)?Br(e,null,[t]):Br(e,t):Br(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Lr(n)&&(n=[n]),Br(e,t,n))}const hi=Symbol.for("v-scx"),di=()=>ir(hi),pi="3.3.4",fi="undefined"!=typeof document?document:null,mi=fi&&fi.createElement("template"),gi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?fi.createElementNS("http://www.w3.org/2000/svg",e):fi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>fi.createTextNode(e),createComment:e=>fi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==s&&(i=i.nextSibling););else{mi.innerHTML=r?`<svg>${e}</svg>`:e;const i=mi.content;if(r){const e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const _i=/\s*!important$/;function yi(e,t,n){if(d(n))n.forEach((n=>yi(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=bi[t];if(n)return n;let r=O(t);if("filter"!==r&&r in e)return bi[t]=r;r=A(r);for(let n=0;n<vi.length;n++){const i=vi[n]+r;if(i in e)return bi[t]=i}return t}(e,t);_i.test(n)?e.setProperty(x(r),n.replace(_i,""),"important"):e[r]=n}}const vi=["Webkit","Moz","ms"],bi={};const wi="http://www.w3.org/1999/xlink";function Ei(e,t,n,r){e.addEventListener(t,n,r)}function Ci(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Ti.test(e)){let n;for(t={};n=e.match(Ti);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):x(e.slice(2));return[n,t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();kt(function(e,t){if(d(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=ki(),n}(r,i);Ei(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const Ti=/(?:Once|Passive|Capture)$/;let Ii=0;const Si=Promise.resolve(),ki=()=>Ii||(Si.then((()=>Ii=0)),Ii=Date.now());const Ri=/^on[a-z]/;const Oi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return d(t)?e=>L(t,e):t};function Pi(e){e.target.composing=!0}function xi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ai={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Oi(i);const s=r||i.props&&"number"===i.props.type;Ei(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),s&&(r=U(r)),e._assign(r)})),n&&Ei(e,"change",(()=>{e.value=e.value.trim()})),t||(Ei(e,"compositionstart",Pi),Ei(e,"compositionend",xi),Ei(e,"change",xi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Oi(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&U(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Ni={deep:!0,created(e,t,n){e._assign=Oi(n),Ei(e,"change",(()=>{const t=e._modelValue,n=Mi(e),r=e.checked,i=e._assign;if(d(t)){const e=J(t,n),s=-1!==e;if(r&&!s)i(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),i(n)}}else if(f(t)){const e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Ui(e,r))}))},mounted:Di,beforeUpdate(e,t,n){e._assign=Oi(n),Di(e,t,n)}};function Di(e,{value:t,oldValue:n},r){e._modelValue=t,d(t)?e.checked=J(t,r.props.value)>-1:f(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=K(t,Ui(e,!0)))}const Li={created(e,{value:t},n){e.checked=K(t,n.props.value),e._assign=Oi(n),Ei(e,"change",(()=>{e._assign(Mi(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Oi(r),t!==n&&(e.checked=K(t,r.props.value))}};function Mi(e){return"_value"in e?e._value:e.value}function Ui(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ji=["ctrl","shift","alt","meta"],Fi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ji.some((n=>e[`${n}Key`]&&!t.includes(n)))},qi=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Fi[t[e]];if(r&&r(n,t))return}return e(n,...r)},Bi={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Vi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Vi(e,!0),r.enter(e)):r.leave(e,(()=>{Vi(e,!1)})):Vi(e,t))},beforeUnmount(e,{value:t}){Vi(e,t)}};function Vi(e,t){e.style.display=t?e._vod:"none"}const Wi=l({patchProp:(e,t,n,r,i=!1,s,l,c,u)=>{"class"===t?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,i):"style"===t?function(e,t,n){const r=e.style,i=_(n);if(n&&!i){if(t&&!_(t))for(const e in t)null==n[e]&&yi(r,e,"");for(const e in n)yi(r,e,n[e])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}(e,n,r):o(t)?a(t)||Ci(e,t,0,r,l):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Ri.test(t)&&g(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Ri.test(t)&&_(n))return!1;return t in e}(e,t,r,i))?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const r=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=G(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(e){}l&&e.removeAttribute(t)}(e,t,r,s,l,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(wi,t.slice(6,t.length)):e.setAttributeNS(wi,t,n);else{const r=$(t);null==n||r&&!G(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,i))}},gi);let zi;var Hi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAArCAYAAADyijE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAORJREFUeNrs2NEJgzAQBuA0dICO0G6QEcwGXaEjdIJmA1doN+gGcYSO4Ahu0N5B8iLkVDCnhT8QIkRyn+cZiMbsqB3yRQjB0XCqFKen9fslmG/Fhx6oe4rxWYJh/WtlyGMuaIzpaPRrStK6QyoBEWSVapOD3xIopvrcDMMZek6BrOanOwWy2nuJBFLHSKCjUnxHAWNh/8kgr4HJARvhHp6/amAunBkpa9RblddE6efMdMK82bSASw0YYIABBhhggAEGGGCAAQaYP8KMj7dnOm42ygZXxFCPe8jM3dT7KT2nvX8CDAAAAEh+BRIlOQAAAABJRU5ErkJggg==";function $i(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const Gi="function"==typeof Proxy,Ki="devtools-plugin:setup";let Ji,Yi;function Qi(){return void 0!==Ji||("undefined"!=typeof window&&window.performance?(Ji=!0,Yi=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(Ji=!0,Yi=global.perf_hooks.performance):Ji=!1),Ji?Yi.now():Date.now();var e}class Xi{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const r=e.settings[t];n[t]=r.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(e){}this.fallbacks={getSettings:()=>i,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}i=e},now:()=>Qi()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function Zi(e,t){const n=e,r=$i(),i=$i().__VUE_DEVTOOLS_GLOBAL_HOOK__,s=Gi&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const e=s?new Xi(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else i.emit(Ki,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var es="store";function ts(e){return void 0===e&&(e=null),ir(null!==e?e:es)}function ns(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function rs(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function is(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;os(e,n,[],e._modules.root,!0),ss(e,n,t)}function ss(e,t,n){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={},a={},l=new Z(!0);l.run((function(){ns(s,(function(t,n){o[n]=function(e,t){return function(){return e(t)}}(t,e),a[n]=ci((function(){return o[n]()})),Object.defineProperty(e.getters,n,{get:function(){return a[n].value},enumerable:!0})}))})),e._state=st({data:t}),e._scope=l,e.strict&&function(e){sn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null})),i&&i.stop()}function os(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=ls(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=cs(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=cs(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return as(e,t)}},state:{get:function(){return ls(e.state,n)}}}),i}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;!function(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i,s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,r,i,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,s){os(e,t,n.concat(s),r,i)}))}function as(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function ls(e,t){return t.reduce((function(e,t){return e[t]}),e)}function cs(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var us="vuex:mutations",hs="vuex:actions",ds="vuex",ps=0;function fs(e,t){Zi({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:us,label:"Vuex Mutations",color:ms}),n.addTimelineLayer({id:hs,label:"Vuex Actions",color:ms}),n.addInspector({id:ds,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===ds)if(n.filter){var r=[];vs(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[ys(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===ds){var r=n.nodeId;as(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=bs((function(){return e[n]}))}else t[n]=bs((function(){return e[n]}))})),t}(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?_s(e):e,editable:!1,value:bs((function(){return s[e]}))}}))}return i}((i=t._modules,(o=(s=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?r:r._children}),"root"===s?i:i.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var i,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===ds){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(ds),n.sendInspectorState(ds),n.addTimelineEvent({layerId:us,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=ps++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:hs,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:hs,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var ms=8702998,gs={label:"namespaced",textColor:16777215,backgroundColor:6710886};function _s(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function ys(e,t){return{id:t||"root",label:_s(t),tags:e.namespaced?[gs]:[],children:Object.keys(e._children).map((function(n){return ys(e._children[n],t+n+"/")}))}}function vs(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[gs]:[]}),Object.keys(t._children).forEach((function(i){vs(e,t._children[i],n,r+i+"/")}))}function bs(e){try{return e()}catch(e){return e}}var ws=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Es={namespaced:{configurable:!0}};Es.namespaced.get=function(){return!!this._rawModule.namespaced},ws.prototype.addChild=function(e,t){this._children[e]=t},ws.prototype.removeChild=function(e){delete this._children[e]},ws.prototype.getChild=function(e){return this._children[e]},ws.prototype.hasChild=function(e){return e in this._children},ws.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},ws.prototype.forEachChild=function(e){ns(this._children,e)},ws.prototype.forEachGetter=function(e){this._rawModule.getters&&ns(this._rawModule.getters,e)},ws.prototype.forEachAction=function(e){this._rawModule.actions&&ns(this._rawModule.actions,e)},ws.prototype.forEachMutation=function(e){this._rawModule.mutations&&ns(this._rawModule.mutations,e)},Object.defineProperties(ws.prototype,Es);var Cs=function(e){this.register([],e,!1)};function Ts(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Ts(e.concat(r),t.getChild(r),n.modules[r])}}Cs.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Cs.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},Cs.prototype.update=function(e){Ts([],this.root,e)},Cs.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new ws(t,n);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i);t.modules&&ns(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Cs.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Cs.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Is=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Cs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;os(this,l,[],this._modules.root),ss(this,l),n.forEach((function(e){return e(t)}))},Ss={state:{configurable:!0}};Is.prototype.install=function(e,t){e.provide(t||es,this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&fs(e,this)},Ss.state.get=function(){return this._state.data},Ss.state.set=function(e){},Is.prototype.commit=function(e,t,n){var r=this,i=cs(e,t,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Is.prototype.dispatch=function(e,t){var n=this,r=cs(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(e){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(e){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(e){}t(e)}))}))}},Is.prototype.subscribe=function(e,t){return rs(e,this._subscribers,t)},Is.prototype.subscribeAction=function(e,t){return rs("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Is.prototype.watch=function(e,t,n){var r=this;return sn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},Is.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Is.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),os(this,this.state,e,this._modules.get(e),n.preserveState),ss(this,this.state)},Is.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete ls(t.state,e.slice(0,-1))[e[e.length-1]]})),is(this)},Is.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Is.prototype.hotUpdate=function(e){this._modules.update(e),is(this,!0)},Is.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Is.prototype,Ss);
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
const ks=!1,Rs="${JSCORE_VERSION}",Os=function(e,t){if(!e)throw Ps(t)},Ps=function(e){return new Error("Firebase Database ("+Rs+") INTERNAL ASSERT FAILED: "+e)},xs=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xs(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new Ns;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class Ns extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ds=function(e){const t=xs(e);return As.encodeByteArray(t,!0)},Ls=function(e){return Ds(e).replace(/\./g,"")},Ms=function(e){try{return As.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function Us(e){return js(void 0,e)}function js(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=js(e[n],t[n]));return e}
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,qs=()=>{try{return Fs()||(()=>{if("undefined"==typeof process||void 0==={NODE_ENV:"production"})return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ms(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Bs=e=>{var t,n;return null===(n=null===(t=qs())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Vs=e=>{const t=Bs(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ws=()=>{var e;return null===(e=qs())||void 0===e?void 0:e.config},zs=e=>{var t;return null===(t=qs())||void 0===t?void 0:t[`_${e}`]};
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
class Hs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function $s(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ls(JSON.stringify({alg:"none",type:"JWT"})),Ls(JSON.stringify(s)),""].join(".")}
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
 */function Gs(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ks(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gs())}function Js(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ys(){return!0===ks}class Qs extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Qs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xs.prototype.create)}}class Xs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Zs,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Qs(r,o,n)}}const Zs=/\{\$([^}]+)}/g;
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
 */function eo(e){return JSON.parse(e)}function to(e){return JSON.stringify(e)}
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
 */const no=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=eo(Ms(s[0])||""),n=eo(Ms(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
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
function ro(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function io(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function so(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oo(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function ao(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(lo(n)&&lo(s)){if(!ao(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function lo(e){return null!==e&&"object"==typeof e}
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
 */function co(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function uo(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ho(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}class fo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=mo),void 0===r.error&&(r.error=mo),void 0===r.complete&&(r.complete=mo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function mo(){}function go(e,t){return`${e} failed: ${t} argument `}
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
function yo(e){return e&&e._delegate?e._delegate:e}class vo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const bo="[DEFAULT]";
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
 */class wo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Hs;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:bo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=bo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=bo){return this.instances.has(e)}getOptions(e=bo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===bo?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=bo){return this.component?this.component.multipleInstances?e:bo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Eo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var Co,To;(To=Co||(Co={}))[To.DEBUG=0]="DEBUG",To[To.VERBOSE=1]="VERBOSE",To[To.INFO=2]="INFO",To[To.WARN=3]="WARN",To[To.ERROR=4]="ERROR",To[To.SILENT=5]="SILENT";const Io={debug:Co.DEBUG,verbose:Co.VERBOSE,info:Co.INFO,warn:Co.WARN,error:Co.ERROR,silent:Co.SILENT},So=Co.INFO,ko={[Co.DEBUG]:"log",[Co.VERBOSE]:"log",[Co.INFO]:"info",[Co.WARN]:"warn",[Co.ERROR]:"error"},Ro=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ko[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Oo{constructor(e){this.name=e,this._logLevel=So,this._logHandler=Ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Co))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Io[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Co.DEBUG,...e),this._logHandler(this,Co.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Co.VERBOSE,...e),this._logHandler(this,Co.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Co.INFO,...e),this._logHandler(this,Co.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Co.WARN,...e),this._logHandler(this,Co.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Co.ERROR,...e),this._logHandler(this,Co.ERROR,...e)}}const Po=(e,t)=>t.some((t=>e instanceof t));let xo,Ao;const No=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Mo=new WeakMap,Uo=new WeakMap;let jo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Do.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Lo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bo(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ao||(Ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Vo(this),t),Bo(No.get(this))}:function(...t){return Bo(e.apply(Vo(this),t))}:function(t,...n){const r=e.call(Vo(this),t,...n);return Lo.set(r,t.sort?t.sort():[t]),Bo(r)}}function qo(e){return"function"==typeof e?Fo(e):(e instanceof IDBTransaction&&function(e){if(Do.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Do.set(e,t)}(e),Po(e,xo||(xo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,jo):e)}function Bo(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Bo(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&No.set(t,e)})).catch((()=>{})),Uo.set(t,e),t}(e);if(Mo.has(e))return Mo.get(e);const t=qo(e);return t!==e&&(Mo.set(e,t),Uo.set(t,e)),t}const Vo=e=>Uo.get(e);const Wo=["get","getKey","getAll","getAllKeys","count"],zo=["put","add","delete","clear"],Ho=new Map;function $o(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ho.get(t))return Ho.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=zo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Wo.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ho.set(t,s),s}jo=(e=>({...e,get:(t,n,r)=>$o(t,n)||e.get(t,n,r),has:(t,n)=>!!$o(t,n)||e.has(t,n)}))(jo);
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
class Go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ko="@firebase/app",Jo="0.9.13",Yo=new Oo("@firebase/app"),Qo="[DEFAULT]",Xo={[Ko]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Zo=new Map,ea=new Map;function ta(e,t){try{e.container.addComponent(t)}catch(n){Yo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function na(e){const t=e.name;if(ea.has(t))return Yo.debug(`There were multiple attempts to register component ${t}.`),!1;ea.set(t,e);for(const t of Zo.values())ta(t,e);return!0}function ra(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const ia=new Xs("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class sa{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ia.create("app-deleted",{appName:this._name})}}
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
 */const oa="9.23.0";function aa(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ia.create("bad-app-name",{appName:String(i)});if(n||(n=Ws()),!n)throw ia.create("no-options");const s=Zo.get(i);if(s){if(ao(n,s.options)&&ao(r,s.config))return s;throw ia.create("duplicate-app",{appName:i})}const o=new Eo(i);for(const e of ea.values())o.addComponent(e);const a=new sa(n,r,o);return Zo.set(i,a),a}function la(e=Qo){const t=Zo.get(e);if(!t&&e===Qo&&Ws())return aa();if(!t)throw ia.create("no-app",{appName:e});return t}function ca(e,t,n){var r;let i=null!==(r=Xo[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Yo.warn(e.join(" "))}na(new vo(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */const ua="firebase-heartbeat-database",ha=1,da="firebase-heartbeat-store";let pa=null;function fa(){return pa||(pa=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Bo(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Bo(o.result),e.oldVersion,e.newVersion,Bo(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(ua,ha,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(da)}}).catch((e=>{throw ia.create("idb-open",{originalErrorMessage:e.message})}))),pa}async function ma(e,t){try{const n=(await fa()).transaction(da,"readwrite"),r=n.objectStore(da);await r.put(t,ga(e)),await n.done}catch(e){if(e instanceof Qs)Yo.warn(e.message);else{const t=ia.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}function ga(e){return`${e.name}!${e.options.appId}`}
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
 */class _a{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new va(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ya();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ya(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ba(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ba(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Ls(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ya(){return(new Date).toISOString().substring(0,10)}class va{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await fa();return await t.transaction(da).objectStore(da).get(ga(e))}catch(e){if(e instanceof Qs)Yo.warn(e.message);else{const t=ia.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ma(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ma(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ba(e){return Ls(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var wa;wa="",na(new vo("platform-logger",(e=>new Go(e)),"PRIVATE")),na(new vo("heartbeat",(e=>new _a(e)),"PRIVATE")),ca(Ko,Jo,wa),ca(Ko,Jo,"esm2017"),ca("fire-js","");const Ea="@firebase/database",Ca="0.14.4";
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
let Ta="";
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
class Ia{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),to(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class Sa{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ro(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const ka=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ia(t)}}catch(e){}return new Sa},Ra=ka("localStorage"),Oa=ka("sessionStorage"),Pa=new Oo("@firebase/database"),xa=function(){let e=1;return function(){return e++}}(),Aa=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,Os(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new po;n.update(t);const r=n.digest();return As.encodeByteArray(r)},Na=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Na.apply(null,r):t+="object"==typeof r?to(r):r,t+=" "}return t};let Da=null,La=!0;const Ma=function(...e){var t,n;if(!0===La&&(La=!1,null===Da&&!0===Oa.get("logging_enabled")&&(t=!0,Os(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Pa.logLevel=Co.VERBOSE,Da=Pa.log.bind(Pa),n&&Oa.set("logging_enabled",!0)):"function"==typeof t?Da=t:(Da=null,Oa.remove("logging_enabled")))),Da){const t=Na.apply(null,e);Da(t)}},Ua=function(e){return function(...t){Ma(e,...t)}},ja=function(...e){const t="FIREBASE INTERNAL ERROR: "+Na(...e);Pa.error(t)},Fa=function(...e){const t=`FIREBASE FATAL ERROR: ${Na(...e)}`;throw Pa.error(t),new Error(t)},qa=function(...e){const t="FIREBASE WARNING: "+Na(...e);Pa.warn(t)},Ba=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Va="[MIN_NAME]",Wa="[MAX_NAME]",za=function(e,t){if(e===t)return 0;if(e===Va||t===Wa)return-1;if(t===Va||e===Wa)return 1;{const n=Xa(e),r=Xa(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ha=function(e,t){return e===t?0:e<t?-1:1},$a=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+to(t))},Ga=function(e){if("object"!=typeof e||null===e)return to(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=to(t[r]),n+=":",n+=Ga(e[t[r]]);return n+="}",n},Ka=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Ja(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ya=function(e){Os(!Ba(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Qa=new RegExp("^-?(0*)\\d{1,10}$"),Xa=function(e){if(Qa.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Za=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw qa("Exception was thrown by user callback.",t),e}),Math.floor(0))}},el=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class tl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){qa(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class nl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ma("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qa(e)}}class rl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rl.OWNER="owner";
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
const il=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sl="ac",ol="websocket",al="long_polling";
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
class ll{constructor(e,t,n,r,i=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ra.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cl(e,t,n){let r;if(Os("string"==typeof t,"typeof type must == string"),Os("object"==typeof n,"typeof params must == object"),t===ol)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==al)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Ja(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class ul{constructor(){this.counters_={}}incrementCounter(e,t=1){ro(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Us(this.counters_)}}
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
 */const hl={},dl={};function pl(e){const t=e.toString();return hl[t]||(hl[t]=new ul),hl[t]}
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
class fl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Za((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const ml="start";class gl{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=pl(t),this.urlFn=e=>(this.appCheckToken&&(e[sl]=this.appCheckToken),cl(t,al,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _l(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ml)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ml]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[sl]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&il.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gl.forceAllow_=!0}static forceDisallow(){gl.forceDisallow_=!0}static isAvailable(){return!!gl.forceAllow_||!(gl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ds(t),r=Ka(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=to(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _l{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xa(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=_l.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Ma("frame writing exception"),e.stack&&Ma(e.stack),Ma(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ma("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ma("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let yl=null;"undefined"!=typeof MozWebSocket?yl=MozWebSocket:"undefined"!=typeof WebSocket&&(yl=WebSocket);class vl{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=pl(t),this.connURL=vl.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&il.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[sl]=r),i&&(s.p=i),cl(e,ol,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ra.set("previous_websocket_failure",!0);try{let e;Ys(),this.mySock=new yl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){vl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==yl&&!vl.forceDisallow_}static previouslyFailed(){return Ra.isInMemoryStorage||!0===Ra.get("previous_websocket_failure")}markConnectionHealthy(){Ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=eo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Os(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ka(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vl.responsesRequiredToBeHealthy=2,vl.healthyTimeout=3e4;
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
class bl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gl,vl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=vl&&vl.isAvailable();let n=t&&!vl.previouslyFailed();if(e.webSocketOnly&&(t||qa("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[vl];else{const e=this.transports_=[];for(const t of bl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bl.globalTransportInitialized_=!1;class wl{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new bl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=el((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$a("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ja("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ja("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&qa("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),el((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):el((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class El{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Cl{constructor(e){this.allowedEvents_=e,this.listeners_={},Os(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){Os(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Tl extends Cl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ks()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Tl}getInitialEvent(e){return Os("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const Il=32,Sl=768;class kl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Rl(){return new kl("")}function Ol(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Pl(e){return e.pieces_.length-e.pieceNum_}function xl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new kl(e.pieces_,t)}function Al(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Nl(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Dl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new kl(t,0)}function Ll(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof kl)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new kl(n,0)}function Ml(e){return e.pieceNum_>=e.pieces_.length}function Ul(e,t){const n=Ol(e),r=Ol(t);if(null===n)return t;if(n===r)return Ul(xl(e),xl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function jl(e,t){const n=Nl(e,0),r=Nl(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=za(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function Fl(e,t){if(Pl(e)!==Pl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ql(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Pl(e)>Pl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Bl{constructor(e,t){this.errorPrefix_=t,this.parts_=Nl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=_o(this.parts_[e]);Vl(this)}}function Vl(e){if(e.byteLength_>Sl)throw new Error(e.errorPrefix_+"has a key path longer than "+Sl+" bytes ("+e.byteLength_+").");if(e.parts_.length>Il)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Il+") or object contains a cycle "+Wl(e))}function Wl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class zl extends Cl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new zl}getInitialEvent(e){return Os("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const Hl=1e3;class $l extends El{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=$l.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hl,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ys())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(to(i)),Os(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Hs,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Os(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Os(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;$l.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ro(e,"w")){const n=io(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();qa(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=no(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=no(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Os(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+to(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ja("Unrecognized action received from server: "+to(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Os(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Hl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$l.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Os(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Ma("getToken() completed but was canceled"):(Ma("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new wl(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{qa(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&qa(e),a())}}}interrupt(e){Ma("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ma("Resuming connection for reason: "+e),delete this.interruptReasons_[e],so(this.interruptReasons_)&&(this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ga(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new kl(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Ma("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ma("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ta.replace(/\./g,"-")]=1,Ks()?e["framework.cordova"]=1:Js()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tl.getInstance().currentlyOnline();return so(this.interruptReasons_)&&e}}$l.nextPersistentConnectionId_=0,$l.nextConnectionId_=0;
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
class Gl{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Gl(e,t)}}
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
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Gl(Va,e),r=new Gl(Va,t);return 0!==this.compare(n,r)}minPost(){return Gl.MIN}}
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
 */let Jl;class Yl extends Kl{static get __EMPTY_NODE(){return Jl}static set __EMPTY_NODE(e){Jl=e}compare(e,t){return za(e.name,t.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,Jl)}makePost(e,t){return Os("string"==typeof e,"KeyIndex indexValue must always be a string."),new Gl(e,Jl)}toString(){return".key"}}const Ql=new Yl;
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
 */class Xl{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zl{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Zl.RED,this.left=null!=r?r:ec.EMPTY_NODE,this.right=null!=i?i:ec.EMPTY_NODE}copy(e,t,n,r,i){return new Zl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ec.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ec.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zl.RED=!0,Zl.BLACK=!1;class ec{constructor(e,t=ec.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ec(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zl.BLACK,null,null))}remove(e){return new ec(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}
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
function tc(e,t){return za(e.name,t.name)}function nc(e,t){return za(e,t)}
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
 */let rc;ec.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Zl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ic=function(e){return"number"==typeof e?"number:"+Ya(e):"string:"+e},sc=function(e){if(e.isLeafNode()){const t=e.val();Os("string"==typeof t||"number"==typeof t||"object"==typeof t&&ro(t,".sv"),"Priority must be a string or number.")}else Os(e===rc||e.isEmpty(),"priority of unexpected type.");Os(e===rc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let oc,ac,lc;class cc{constructor(e,t=cc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Os(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sc(this.priorityNode_)}static set __childrenNodeConstructor(e){oc=e}static get __childrenNodeConstructor(){return oc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new cc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ml(e)?this:".priority"===Ol(e)?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ol(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Os(".priority"!==n||1===Pl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,cc.__childrenNodeConstructor.EMPTY_NODE.updateChild(xl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ic(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ya(this.value_):this.value_,this.lazyHash_=Aa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===cc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cc.__childrenNodeConstructor?-1:(Os(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=cc.VALUE_TYPE_ORDER.indexOf(t),i=cc.VALUE_TYPE_ORDER.indexOf(n);return Os(r>=0,"Unknown leaf type: "+t),Os(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}cc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const uc=new class extends Kl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,new cc("[PRIORITY-POST]",lc))}makePost(e,t){const n=ac(e);return new Gl(t,new cc("[PRIORITY-POST]",n))}toString(){return".priority"}},hc=Math.log(2);
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
 */class dc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hc,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new Zl(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Zl.BLACK):(a(r,Zl.BLACK),a(r,Zl.RED))}return s}(new dc(e.length));return new ec(r||t,s)};
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
 */let fc;const mc={};class gc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Os(mc&&uc,"ChildrenNode.ts has not been loaded"),fc=fc||new gc({".priority":mc},{".priority":uc}),fc}get(e){const t=io(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ec?t:null}hasIndex(e){return ro(this.indexSet_,e.toString())}addIndex(e,t){Os(e!==Ql,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Gl.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?pc(n,e.getCompare()):mc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new gc(c,l)}addToIndexes(e,t){const n=oo(this.indexes_,((n,r)=>{const i=io(this.indexSet_,r);if(Os(i,"Missing index implementation for "+r),n===mc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Gl.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),pc(n,i.getCompare())}return mc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Gl(e.name,r))),i.insert(e,e.node)}}));return new gc(n,this.indexSet_)}removeFromIndexes(e,t){const n=oo(this.indexes_,(n=>{if(n===mc)return n;{const r=t.get(e.name);return r?n.remove(new Gl(e.name,r)):n}}));return new gc(n,this.indexSet_)}}
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
 */let _c;class yc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&sc(this.priorityNode_),this.children_.isEmpty()&&Os(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _c||(_c=new yc(new ec(nc),null,gc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_c}updatePriority(e){return this.children_.isEmpty()?this:new yc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?_c:t}}getChild(e){const t=Ol(e);return null===t?this:this.getImmediateChild(t).getChild(xl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Os(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Gl(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?_c:this.priorityNode_;return new yc(r,s,i)}}updateChild(e,t){const n=Ol(e);if(null===n)return t;{Os(".priority"!==Ol(e)||1===Pl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xl(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(uc,((s,o)=>{t[s]=o.val(e),n++,i&&yc.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ic(this.getPriority().val())+":"),this.forEachChild(uc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Aa(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Gl(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Gl(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Gl(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Gl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Gl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vc?-1:0}withIndex(e){if(e===Ql||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new yc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ql||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(uc),n=t.getIterator(uc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ql?null:this.indexMap_.get(e.toString())}}yc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const vc=new class extends yc{constructor(){super(new ec(nc),yc.EMPTY_NODE,gc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return yc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Gl,{MIN:{value:new Gl(Va,yc.EMPTY_NODE)},MAX:{value:new Gl(Wa,vc)}}),Yl.__EMPTY_NODE=yc.EMPTY_NODE,cc.__childrenNodeConstructor=yc,rc=vc,function(e){lc=e}(vc);
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
const bc=!0;function wc(e,t=null){if(null===e)return yc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Os(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new cc(e,wc(t))}if(e instanceof Array||!bc){let n=yc.EMPTY_NODE;return Ja(e,((t,r)=>{if(ro(e,t)&&"."!==t.substring(0,1)){const e=wc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(wc(t))}{const n=[];let r=!1;if(Ja(e,((e,t)=>{if("."!==e.substring(0,1)){const i=wc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Gl(e,i)))}})),0===n.length)return yc.EMPTY_NODE;const i=pc(n,tc,(e=>e.name),nc);if(r){const e=pc(n,uc.getCompare());return new yc(i,wc(t),new gc({".priority":e},{".priority":uc}))}return new yc(i,wc(t),gc.Default)}}!function(e){ac=e}(wc);
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
class Ec extends Kl{constructor(e){super(),this.indexPath_=e,Os(!Ml(e)&&".priority"!==Ol(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}makePost(e,t){const n=wc(e),r=yc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Gl(t,r)}maxPost(){const e=yc.EMPTY_NODE.updateChild(this.indexPath_,vc);return new Gl(Wa,e)}toString(){return Nl(this.indexPath_,0).join("/")}}
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
 */const Cc=new class extends Kl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?za(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Gl.MIN}maxPost(){return Gl.MAX}makePost(e,t){const n=wc(e);return new Gl(t,n)}toString(){return".value"}};
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
 */function Tc(e){return{type:"value",snapshotNode:e}}function Ic(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Sc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Rc{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Os(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Sc(t,o)):Os(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Ic(t,n)):s.trackChildChange(kc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(uc,((e,r)=>{t.hasChild(e)||n.trackChildChange(Sc(e,r))})),t.isLeafNode()||t.forEachChild(uc,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(kc(t,r,i))}else n.trackChildChange(Ic(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?yc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class Oc{constructor(e){this.indexedFilter_=new Rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Oc.getStartPost_(e),this.endPost_=Oc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new Gl(t,n))||(n=yc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=yc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(yc.EMPTY_NODE);const i=this;return t.forEachChild(uc,((e,t)=>{i.matches(new Gl(e,t))||(r=r.updateImmediateChild(e,yc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Pc{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Oc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Gl(t,n))||(n=yc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=yc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=yc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(yc.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,yc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Os(o.numChildren()===this.limit_,"");const a=new Gl(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(kc(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Sc(t,e));const n=o.updateImmediateChild(t,yc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Ic(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Sc(l.name,l.node)),i.trackChildChange(Ic(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,yc.EMPTY_NODE)):e}}
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
 */class xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=uc}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Os(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Os(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Va}hasEnd(){return this.endSet_}getIndexEndValue(){return Os(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Os(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Os(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===uc}copy(){const e=new xc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ac(e){const t={};if(e.isDefault())return t;let n;if(e.index_===uc?n="$priority":e.index_===Cc?n="$value":e.index_===Ql?n="$key":(Os(e.index_ instanceof Ec,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=to(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=to(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+to(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=to(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+to(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Nc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==uc&&(t.i=e.index_.toString()),t}
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
 */class Dc extends El{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Os(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Dc.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ac(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),io(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Dc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ac(e._queryParams),n=e._path.toString(),r=new Hs;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+co(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eo(o.responseText)}catch(e){qa("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&qa("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class Lc{constructor(){this.rootNode_=yc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function Mc(){return{value:null,children:new Map}}function Uc(e,t,n){if(Ml(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Ol(t);e.children.has(r)||e.children.set(r,Mc());Uc(e.children.get(r),t=xl(t),n)}}function jc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{jc(r,new kl(t.toString()+"/"+e),n)}))}class Fc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ja(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class qc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fc(e);const n=1e4+2e4*Math.random();el(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ja(e,((e,r)=>{r>0&&ro(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),el(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var Bc,Vc;function Wc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Vc=Bc||(Bc={}))[Vc.OVERWRITE=0]="OVERWRITE",Vc[Vc.MERGE=1]="MERGE",Vc[Vc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Vc[Vc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class zc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Bc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ml(this.path)){if(null!=this.affectedTree.value)return Os(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new kl(e));return new zc(Rl(),t,this.revert)}}return Os(Ol(this.path)===e,"operationForChild called for unrelated child."),new zc(xl(this.path),this.affectedTree,this.revert)}}
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
 */class Hc{constructor(e,t){this.source=e,this.path=t,this.type=Bc.LISTEN_COMPLETE}operationForChild(e){return Ml(this.path)?new Hc(this.source,Rl()):new Hc(this.source,xl(this.path))}}
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
 */class $c{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Bc.OVERWRITE}operationForChild(e){return Ml(this.path)?new $c(this.source,Rl(),this.snap.getImmediateChild(e)):new $c(this.source,xl(this.path),this.snap)}}
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
 */class Gc{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Bc.MERGE}operationForChild(e){if(Ml(this.path)){const t=this.children.subtree(new kl(e));return t.isEmpty()?null:t.value?new $c(this.source,Rl(),t.value):new Gc(this.source,Rl(),t)}return Os(Ol(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gc(this.source,xl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Kc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ml(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ol(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Jc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yc(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ps("Should only compare child_ events.");const r=new Gl(t.childName,t.snapshotNode),i=new Gl(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Qc(e,t){return{eventCache:e,serverCache:t}}function Xc(e,t,n,r){return Qc(new Kc(t,n,r),e.serverCache)}function Zc(e,t,n,r){return Qc(e.eventCache,new Kc(t,n,r))}function eu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let nu;class ru{constructor(e,t=(()=>(nu||(nu=new ec(Ha)),nu))()){this.value=e,this.children=t}static fromObject(e){let t=new ru(null);return Ja(e,((e,n)=>{t=t.set(new kl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Rl(),value:this.value};if(Ml(e))return null;{const n=Ol(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(xl(e),t);if(null!=i){return{path:Ll(new kl(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ml(e))return this;{const t=Ol(e),n=this.children.get(t);return null!==n?n.subtree(xl(e)):new ru(null)}}set(e,t){if(Ml(e))return new ru(t,this.children);{const n=Ol(e),r=(this.children.get(n)||new ru(null)).set(xl(e),t),i=this.children.insert(n,r);return new ru(this.value,i)}}remove(e){if(Ml(e))return this.children.isEmpty()?new ru(null):new ru(null,this.children);{const t=Ol(e),n=this.children.get(t);if(n){const r=n.remove(xl(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ru(null):new ru(this.value,i)}return this}}get(e){if(Ml(e))return this.value;{const t=Ol(e),n=this.children.get(t);return n?n.get(xl(e)):null}}setTree(e,t){if(Ml(e))return t;{const n=Ol(e),r=(this.children.get(n)||new ru(null)).setTree(xl(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ru(this.value,i)}}fold(e){return this.fold_(Rl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Ll(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Rl(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Ml(e))return null;{const r=Ol(e),i=this.children.get(r);return i?i.findOnPath_(xl(e),Ll(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Rl(),t)}foreachOnPath_(e,t,n){if(Ml(e))return this;{this.value&&n(t,this.value);const r=Ol(e),i=this.children.get(r);return i?i.foreachOnPath_(xl(e),Ll(t,r),n):new ru(null)}}foreach(e){this.foreach_(Rl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ll(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class iu{constructor(e){this.writeTree_=e}static empty(){return new iu(new ru(null))}}function su(e,t,n){if(Ml(t))return new iu(new ru(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Ul(i,t);return s=s.updateChild(o,n),new iu(e.writeTree_.set(i,s))}{const r=new ru(n),i=e.writeTree_.setTree(t,r);return new iu(i)}}}function ou(e,t,n){let r=e;return Ja(n,((e,n)=>{r=su(r,Ll(t,e),n)})),r}function au(e,t){if(Ml(t))return iu.empty();{const n=e.writeTree_.setTree(t,new ru(null));return new iu(n)}}function lu(e,t){return null!=cu(e,t)}function cu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ul(n.path,t)):null}function uu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(uc,((e,n)=>{t.push(new Gl(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Gl(e,n.value))})),t}function hu(e,t){if(Ml(t))return e;{const n=cu(e,t);return new iu(null!=n?new ru(n):e.writeTree_.subtree(t))}}function du(e){return e.writeTree_.isEmpty()}function pu(e,t){return fu(Rl(),e.writeTree_,t)}function fu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(Os(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=fu(Ll(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ll(e,".priority"),r)),n}}
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
 */function mu(e,t){return Ru(t,e)}function gu(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Os(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&_u(t,r.path)?i=!1:ql(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=vu(e.allWrites,yu,Rl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=au(e.visibleWrites,r.path);else{Ja(r.children,(t=>{e.visibleWrites=au(e.visibleWrites,Ll(r.path,t))}))}return!0}return!1}function _u(e,t){if(e.snap)return ql(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ql(Ll(e.path,n),t))return!0;return!1}function yu(e){return e.visible}function vu(e,t,n){let r=iu.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)ql(n,e)?(t=Ul(n,e),r=su(r,t,s.snap)):ql(e,n)&&(t=Ul(e,n),r=su(r,Rl(),s.snap.getChild(t)));else{if(!s.children)throw Ps("WriteRecord should have .snap or .children");if(ql(n,e))t=Ul(n,e),r=ou(r,t,s.children);else if(ql(e,n))if(t=Ul(e,n),Ml(t))r=ou(r,Rl(),s.children);else{const e=io(s.children,Ol(t));if(e){const n=e.getChild(xl(t));r=su(r,Rl(),n)}}}}}return r}function bu(e,t,n,r,i){if(r||i){const s=hu(e.visibleWrites,t);if(!i&&du(s))return n;if(i||null!=n||lu(s,Rl())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(ql(e.path,t)||ql(t,e.path))};return pu(vu(e.allWrites,s,t),n||yc.EMPTY_NODE)}return null}{const r=cu(e.visibleWrites,t);if(null!=r)return r;{const r=hu(e.visibleWrites,t);if(du(r))return n;if(null!=n||lu(r,Rl())){return pu(r,n||yc.EMPTY_NODE)}return null}}}function wu(e,t,n,r){return bu(e.writeTree,e.treePath,t,n,r)}function Eu(e,t){return function(e,t,n){let r=yc.EMPTY_NODE;const i=cu(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(uc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=hu(e.visibleWrites,t);return n.forEachChild(uc,((e,t)=>{const n=pu(hu(i,new kl(e)),t);r=r.updateImmediateChild(e,n)})),uu(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return uu(hu(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Cu(e,t,n,r){return function(e,t,n,r,i){Os(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ll(t,n);if(lu(e.visibleWrites,s))return null;{const t=hu(e.visibleWrites,s);return du(t)?i.getChild(n):pu(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Tu(e,t){return function(e,t){return cu(e.visibleWrites,t)}(e.writeTree,Ll(e.treePath,t))}function Iu(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=hu(e.visibleWrites,t),c=cu(l,Rl());if(null!=c)a=c;else{if(null==n)return[];a=pu(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Su(e,t,n){return function(e,t,n,r){const i=Ll(t,n),s=cu(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return pu(hu(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ku(e,t){return Ru(Ll(e.treePath,t),e.writeTree)}function Ru(e,t){return{treePath:e,writeTree:t}}
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
 */class Ou{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Os("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Os(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,kc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Sc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Ic(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Ps("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,kc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Pu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class xu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Su(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tu(this.viewCache_),i=Iu(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function Au(e,t,n,r,i){const s=new Ou;let o,a;if(n.type===Bc.OVERWRITE){const l=n;l.source.fromUser?o=Lu(e,t,l.path,l.snap,r,i,s):(Os(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ml(l.path),o=Du(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===Bc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Ll(n,r);Mu(t,Ol(c))&&(a=Lu(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Ll(n,r);Mu(t,Ol(c))||(a=Lu(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(Os(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ju(e,t,l.path,l.children,r,i,a,s))}else if(n.type===Bc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Tu(r,n))return t;{const a=new xu(r,t,i),l=t.eventCache.getNode();let c;if(Ml(n)||".priority"===Ol(n)){let n;if(t.serverCache.isFullyInitialized())n=wu(r,tu(t));else{const e=t.serverCache.getNode();Os(e instanceof yc,"serverChildren would be complete if leaf node"),n=Eu(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=Ol(n);let u=Su(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,xl(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,yc.EMPTY_NODE,xl(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=wu(r,tu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Tu(r,Rl()),Xc(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Tu(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Ml(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Du(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Ml(n)){let r=new ru(null);return l.getNode().forEachChild(Ql,((e,t)=>{r=r.set(new kl(e),t)})),ju(e,t,n,r,i,s,a,o)}return t}{let c=new ru(null);return r.foreach(((e,t)=>{const r=Ll(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),ju(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==Bc.LISTEN_COMPLETE)throw Ps("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Zc(t,s.getNode(),s.isFullyInitialized()||Ml(n),s.isFiltered());return Nu(e,o,n,r,Pu,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=eu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Tc(eu(t)))}}(t,o,l),{viewCache:o,changes:l}}function Nu(e,t,n,r,i,s){const o=t.eventCache;if(null!=Tu(r,n))return t;{let a,l;if(Ml(n))if(Os(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=tu(t),i=Eu(r,n instanceof yc?n:yc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=wu(r,tu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Ol(n);if(".priority"===c){Os(1===Pl(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Cu(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=xl(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Cu(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Su(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return Xc(t,a,o.isFullyInitialized()||Ml(n),e.filter.filtersNodes())}}function Du(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ml(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Ol(n);if(!l.isCompleteForPath(n)&&Pl(n)>1)return t;const i=xl(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Pu,null)}const h=Zc(t,c,l.isFullyInitialized()||Ml(n),u.filtersNodes());return Nu(e,h,n,i,new xu(i,h,s),a)}function Lu(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new xu(i,t,s);if(Ml(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Xc(t,c,!0,e.filter.filtersNodes());else{const i=Ol(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Xc(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=xl(n),c=a.getNode().getImmediateChild(i);let h;if(Ml(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Al(s)&&e.getChild(Dl(s)).isEmpty()?e:e.updateChild(s,r):yc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Xc(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Mu(e,t){return e.eventCache.isCompleteForChild(t)}function Uu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ju(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ml(n)?r:new ru(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Du(e,c,new kl(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Du(e,c,new kl(n),l,i,s,o,a)}})),c}class Fu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Rc(n.getIndex()),i=(s=n).loadsAllData()?new Rc(s.getIndex()):s.hasLimit()?new Pc(s):new Oc(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(yc.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(yc.EMPTY_NODE,a.getNode(),null),u=new Kc(l,o.isFullyInitialized(),r.filtersNodes()),h=new Kc(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Qc(h,u),this.eventGenerator_=new Jc(this.query_)}get query(){return this.query_}}function qu(e,t){const n=tu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ml(t)&&!n.getImmediateChild(Ol(t)).isEmpty())?n.getChild(t):null}function Bu(e){return 0===e.eventRegistrations_.length}function Vu(e,t,n){const r=[];if(n){Os(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Wu(e,t,n,r){t.type===Bc.MERGE&&null!==t.source.queryId&&(Os(tu(e.viewCache_),"We should always have a full cache before handling merges"),Os(eu(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Au(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,Os(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Os(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Os(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,zu(e,s.changes,s.viewCache.eventCache.getNode(),null)}function zu(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Yc(e,i,"child_removed",t,r,n),Yc(e,i,"child_added",t,r,n),Yc(e,i,"child_moved",s,r,n),Yc(e,i,"child_changed",t,r,n),Yc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let Hu,$u;class Gu{constructor(){this.views=new Map}}function Ku(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Os(null!=s,"SyncTree gave us an op for an invalid query."),Wu(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Wu(s,t,n,r));return i}}function Ju(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=wu(n,i?r:null),s=!1;e?s=!0:r instanceof yc?(e=Eu(n,r),s=!1):(e=yc.EMPTY_NODE,s=!1);const o=Qc(new Kc(e,s,!1),new Kc(r,i,!1));return new Fu(t,o)}return o}function Yu(e,t,n,r,i,s){const o=Ju(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(uc,((e,t)=>{r.push(Ic(e,t))}));return n.isFullyInitialized()&&r.push(Tc(n.getNode())),zu(e,r,n.getNode(),t)}(o,n)}function Qu(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=nh(e);if("default"===i)for(const[t,i]of e.views.entries())o=o.concat(Vu(i,n,r)),Bu(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||s.push(i.query));else{const t=e.views.get(i);t&&(o=o.concat(Vu(t,n,r)),Bu(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!nh(e)&&s.push(new(Os(Hu,"Reference.ts has not been loaded"),Hu)(t._repo,t._path)),{removed:s,events:o}}function Xu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Zu(e,t){let n=null;for(const r of e.views.values())n=n||qu(r,t);return n}function eh(e,t){if(t._queryParams.loadsAllData())return rh(e);{const n=t._queryIdentifier;return e.views.get(n)}}function th(e,t){return null!=eh(e,t)}function nh(e){return null!=rh(e)}function rh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let ih=1;class sh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ru(null),this.pendingWriteTree_={visibleWrites:iu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(e,t,n,r,i){return function(e,t,n,r,i){Os(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=su(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?mh(e,new $c({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ah(e,t,n,r){!function(e,t,n,r){Os(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=ou(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=ru.fromObject(n);return mh(e,new Gc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function lh(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(gu(e.pendingWriteTree_,t)){let t=new ru(null);return null!=r.snap?t=t.set(Rl(),!0):Ja(r.children,(e=>{t=t.set(new kl(e),!0)})),mh(e,new zc(r.path,t,n))}return[]}function ch(e,t,n){return mh(e,new $c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function uh(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||th(o,t))){const l=Qu(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>nh(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&nh(t)){return[rh(t)]}{let e=[];return t&&(e=Xu(t)),Ja(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=yh(e,r);e.listenProvider_.startListening(Th(i),vh(e,i),s.hashFn,s.onComplete)}}}if(!i&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Th(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(bh(t));e.listenProvider_.stopListening(Th(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=bh(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function hh(e,t,n,r){const i=wh(e,r);if(null!=i){const r=Eh(i),s=r.path,o=r.queryId,a=Ul(s,t);return Ch(e,s,new $c(Wc(o),a,n))}return[]}function dh(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Ul(e,i);s=s||Zu(t,n),o=o||nh(t)}));let a,l=e.syncPointTree_.get(i);if(l?(o=o||nh(l),s=s||Zu(l,Rl())):(l=new Gu,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=s)a=!0;else{a=!1,s=yc.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Zu(t,Rl());n&&(s=s.updateImmediateChild(e,n))}))}const c=th(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=bh(t);Os(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=ih++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=Yu(l,t,n,mu(e.pendingWriteTree_,i),s,a);if(!c&&!o&&!r){const n=eh(l,t);u=u.concat(function(e,t,n){const r=t._path,i=vh(e,t),s=yh(e,n),o=e.listenProvider_.startListening(Th(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)Os(!nh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ml(e)&&t&&nh(t))return[rh(t).query];{let e=[];return t&&(e=e.concat(Xu(t).map((e=>e.query)))),Ja(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Th(r),vh(e,r))}}return o}
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
 */(e,t,n))}return u}function ph(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Zu(n,Ul(e,t));if(r)return r}));return bu(r,t,i,n,!0)}function fh(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=Ul(e,n);r=r||Zu(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||Zu(i,Rl()):(i=new Gu,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=null!=r,o=s?new Kc(r,!0,!1):null;return function(e){return eu(e.viewCache_)}(Ju(i,t,mu(e.pendingWriteTree_,t._path),s?o.getNode():yc.EMPTY_NODE,s))}function mh(e,t){return gh(t,e.syncPointTree_,null,mu(e.pendingWriteTree_,Rl()))}function gh(e,t,n,r){if(Ml(e.path))return _h(e,t,n,r);{const i=t.get(Rl());null==n&&null!=i&&(n=Zu(i,Rl()));let s=[];const o=Ol(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ku(r,o);s=s.concat(gh(a,l,e,t))}return i&&(s=s.concat(Ku(i,e,r,n))),s}}function _h(e,t,n,r){const i=t.get(Rl());null==n&&null!=i&&(n=Zu(i,Rl()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=ku(r,t),l=e.operationForChild(t);l&&(s=s.concat(_h(l,i,o,a)))})),i&&(s=s.concat(Ku(i,e,r,n))),s}function yh(e,t){const n=t.query,r=vh(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||yc.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=wh(e,n);if(r){const n=Eh(r),i=n.path,s=n.queryId,o=Ul(i,t);return Ch(e,i,new Hc(Wc(s),o))}return[]}(e,n._path,r):function(e,t){return mh(e,new Hc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return uh(e,n,null,r)}}}}function vh(e,t){const n=bh(t);return e.queryToTagMap.get(n)}function bh(e){return e._path.toString()+"$"+e._queryIdentifier}function wh(e,t){return e.tagToQueryMap.get(t)}function Eh(e){const t=e.indexOf("$");return Os(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new kl(e.substr(0,t))}}function Ch(e,t,n){const r=e.syncPointTree_.get(t);Os(r,"Missing sync point for query tag that we're tracking");return Ku(r,n,mu(e.pendingWriteTree_,t),null)}function Th(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Os($u,"Reference.ts has not been loaded"),$u)(e._repo,e._path):e}class Ih{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ih(t)}node(){return this.node_}}class Sh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ll(this.path_,e);return new Sh(this.syncTree_,t)}node(){return ph(this.syncTree_,this.path_)}}const kh=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Rh=function(e,t,n){return e&&"object"==typeof e?(Os(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Oh(e[".sv"],t,n):"object"==typeof e[".sv"]?Ph(e[".sv"],t):void Os(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Oh=function(e,t,n){if("timestamp"===e)return n.timestamp;Os(!1,"Unexpected server value: "+e)},Ph=function(e,t,n){e.hasOwnProperty("increment")||Os(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Os(!1,"Unexpected increment value: "+r);const i=t.node();if(Os(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},xh=function(e,t,n,r){return Nh(t,new Sh(n,e),r)},Ah=function(e,t,n){return Nh(e,new Ih(t),n)};function Nh(e,t,n){const r=e.getPriority().val(),i=Rh(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Rh(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new cc(s,wc(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new cc(i))),r.forEachChild(uc,((e,r)=>{const i=Nh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class Dh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Lh(e,t){let n=t instanceof kl?t:new kl(t),r=e,i=Ol(n);for(;null!==i;){const e=io(r.node.children,i)||{children:{},childCount:0};r=new Dh(i,r,e),n=xl(n),i=Ol(n)}return r}function Mh(e){return e.node.value}function Uh(e,t){e.node.value=t,Vh(e)}function jh(e){return e.node.childCount>0}function Fh(e,t){Ja(e.node.children,((n,r)=>{t(new Dh(n,e,r))}))}function qh(e,t,n,r){n&&!r&&t(e),Fh(e,(e=>{qh(e,t,!0,r)})),n&&r&&t(e)}function Bh(e){return new kl(null===e.parent?e.name:Bh(e.parent)+"/"+e.name)}function Vh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Mh(e)&&!jh(e)}(n),i=ro(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Vh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Vh(e))}
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
 */(e.parent,e.name,e)}const Wh=/[\[\].#$\/\u0000-\u001F\u007F]/,zh=/[\[\].#$\u0000-\u001F\u007F]/,Hh=10485760,$h=function(e){return"string"==typeof e&&0!==e.length&&!Wh.test(e)},Gh=function(e){return"string"==typeof e&&0!==e.length&&!zh.test(e)},Kh=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Ba(e)||e&&"object"==typeof e&&ro(e,".sv")},Jh=function(e,t,n,r){r&&void 0===t||Yh(go(e,"value"),t,n)},Yh=function(e,t,n){const r=n instanceof kl?new Bl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Wl(r));if("function"==typeof t)throw new Error(e+"contains a function "+Wl(r)+" with contents = "+t.toString());if(Ba(t))throw new Error(e+"contains "+t.toString()+" "+Wl(r));if("string"==typeof t&&t.length>Hh/3&&_o(t)>Hh)throw new Error(e+"contains a string greater than "+Hh+" utf8 bytes "+Wl(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Ja(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!$h(t)))throw new Error(e+" contains an invalid key ("+t+") "+Wl(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=_o(a),Vl(o),Yh(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=_o(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Wl(r)+" in addition to actual children.")}},Qh=function(e,t,n,r){if(r&&void 0===t)return;const i=go(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ja(t,((e,t)=>{const r=new kl(e);if(Yh(i,t,Ll(n,r)),".priority"===Al(r)&&!Kh(t))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=Nl(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!$h(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(jl);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&ql(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},Xh=function(e,t,n,r){if(!(r&&void 0===n||Gh(n)))throw new Error(go(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zh=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xh(e,t,n,r)},ed=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!$h(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Gh(e)}(n))throw new Error(go(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class td{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nd(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Fl(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function rd(e,t,n){nd(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(id(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]);e.recursionDepth_--}(e,(e=>ql(e,t)||ql(t,e)))}function id(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Da&&Ma("event: "+n.toString()),Za(r)}}}
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
 */const sd="repo_interrupt",od=25;class ad{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new td,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new Dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ld(e,t,n){if(e.stats_=pl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dc(e.repoInfo_,((t,n,r,i)=>{hd(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>dd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{to(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new $l(e.repoInfo_,t,((t,n,r,i)=>{hd(e,t,n,r,i)}),(t=>{dd(e,t)}),(t=>{!function(e,t){Ja(t,((t,n)=>{pd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return dl[n]||(dl[n]=t()),dl[n]}(e.repoInfo_,(()=>new qc(e.stats_,e.server_))),e.infoData_=new Lc,e.infoSyncTree_=new sh({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ch(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),pd(e,"connected",!1),e.serverSyncTree_=new sh({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);rd(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function cd(e){const t=e.infoData_.getNode(new kl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ud(e){return kh({timestamp:cd(e)})}function hd(e,t,n,r,i){e.dataUpdateCount++;const s=new kl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=oo(n,(e=>wc(e)));o=function(e,t,n,r){const i=wh(e,r);if(i){const r=Eh(i),s=r.path,o=r.queryId,a=Ul(s,t),l=ru.fromObject(n);return Ch(e,s,new Gc(Wc(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=wc(n);o=hh(e.serverSyncTree_,s,t,i)}else if(r){const t=oo(n,(e=>wc(e)));o=function(e,t,n){const r=ru.fromObject(n);return mh(e,new Gc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=wc(n);o=ch(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=vd(e,s)),rd(e.eventQueue_,a,o)}function dd(e,t){pd(e,"connected",t),!1===t&&function(e){md(e,"onDisconnectEvents");const t=ud(e),n=Mc();jc(e.onDisconnect_,Rl(),((r,i)=>{const s=xh(r,i,e.serverSyncTree_,t);Uc(n,r,s)}));let r=[];jc(n,Rl(),((t,n)=>{r=r.concat(ch(e.serverSyncTree_,t,n));const i=Td(e,t);vd(e,i)})),e.onDisconnect_=Mc(),rd(e.eventQueue_,Rl(),r)}(e)}function pd(e,t,n){const r=new kl("/.info/"+t),i=wc(n);e.infoData_.updateSnapshot(r,i);const s=ch(e.infoSyncTree_,r,i);rd(e.eventQueue_,r,s)}function fd(e){return e.nextWriteId_++}function md(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ma(n,...t)}function gd(e,t,n,r){t&&Za((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function _d(e,t,n){return ph(e.serverSyncTree_,t,n)||yc.EMPTY_NODE}function yd(e,t=e.transactionQueueTree_){if(t||Cd(e,t),Mh(t)){const n=wd(e,t);Os(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=_d(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];Os(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=Ul(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{md(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(lh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Cd(e,Lh(e.transactionQueueTree_,t)),yd(e,e.transactionQueueTree_),rd(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Za(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{qa("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}vd(e,t)}}),o)}(e,Bh(t),n)}else jh(t)&&Fh(t,(t=>{yd(e,t)}))}function vd(e,t){const n=bd(e,t),r=Bh(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=Ul(n,l.path);let u,h=!1;if(Os(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=od)h=!0,u="maxretry",i=i.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else{const n=_d(e,l.path,o);l.currentInputSnapshot=n;const r=t[s].update(n.val());if(void 0!==r){Yh("transaction failed: Data returned ",r,l.path);let t=wc(r);"object"==typeof r&&null!=r&&ro(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=ud(e),c=Ah(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=fd(e),o.splice(o.indexOf(s),1),i=i.concat(oh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(lh(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",i=i.concat(lh(e.serverSyncTree_,l.currentWriteId,!0))}rd(e.eventQueue_,n,i),i=[],h&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===u?r.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):r.push((()=>t[s].onComplete(new Error(u),!1,null)))))}var a;Cd(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Za(r[e]);yd(e,e.transactionQueueTree_)}(e,wd(e,n),r),r}function bd(e,t){let n,r=e.transactionQueueTree_;for(n=Ol(t);null!==n&&void 0===Mh(r);)r=Lh(r,n),n=Ol(t=xl(t));return r}function wd(e,t){const n=[];return Ed(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ed(e,t,n){const r=Mh(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Fh(t,(t=>{Ed(e,t,n)}))}function Cd(e,t){const n=Mh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Uh(t,n.length>0?n:void 0)}Fh(t,(t=>{Cd(e,t)}))}function Td(e,t){const n=Bh(bd(e,t)),r=Lh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Id(e,t)})),Id(e,r),qh(r,(t=>{Id(e,t)})),n}function Id(e,t){const n=Mh(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Os(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Os(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(lh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Uh(t,void 0):n.length=s+1,rd(e.eventQueue_,Bh(t),i);for(let e=0;e<r.length;e++)Za(r[e])}}
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
 */const Sd=function(e,t){const n=kd(e),r=n.namespace;"firebase.com"===n.domain&&Fa(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Fa("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&qa("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ll(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new kl(n.pathString)}},kd=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qa(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Rd{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+to(this.snapshot.exportVal())}}class Od{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Pd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Os(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class xd{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Ml(this._path)?null:Al(this._path)}get ref(){return new Dd(this._repo,this._path)}get _queryIdentifier(){const e=Nc(this._queryParams),t=Ga(e);return"{}"===t?"default":t}get _queryObject(){return Nc(this._queryParams)}isEqual(e){if(!((e=yo(e))instanceof xd))return!1;const t=this._repo===e._repo,n=Fl(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function Ad(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ql){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Va)throw new Error(r);if("string"!=typeof t)throw new Error(i)}if(e.hasEnd()){if(e.getIndexEndName()!==Wa)throw new Error(r);if("string"!=typeof n)throw new Error(i)}}else if(e.getIndex()===uc){if(null!=t&&!Kh(t)||null!=n&&!Kh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Os(e.getIndex()instanceof Ec||e.getIndex()===Cc,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Nd(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dd extends xd{constructor(e,t){super(e,t,new xc,!1)}get parent(){const e=Dl(this._path);return null===e?null:new Dd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ld{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new kl(e),n=Ud(this.ref,e);return new Ld(this._node.getChild(t),n,uc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ld(n,Ud(this.ref,t),uc))))}hasChild(e){const t=new kl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Md(e,t){return(e=yo(e))._checkNotDeleted("ref"),void 0!==t?Ud(e._root,t):e._root}function Ud(e,t){return null===Ol((e=yo(e))._path)?Zh("child","path",t,!1):Xh("child","path",t,!1),new Dd(e._repo,Ll(e._path,t))}function jd(e,t){(function(e,t){if(".info"===Ol(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=yo(e))._path),Jh("set",t,e._path,!1);const n=new Hs;return function(e,t,n,r,i){md(e,"set",{path:t.toString(),value:n,priority:r});const s=ud(e),o=wc(n,r),a=ph(e.serverSyncTree_,t),l=Ah(o,a,s),c=fd(e),u=oh(e.serverSyncTree_,t,l,c,!0);nd(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||qa("set at "+t+" failed: "+n);const o=lh(e.serverSyncTree_,c,!s);rd(e.eventQueue_,t,o),gd(0,i,n,r)}));const h=Td(e,t);vd(e,h),rd(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Fd(e,t){Qh("update",t,e._path,!1);const n=new Hs;return function(e,t,n,r){md(e,"update",{path:t.toString(),value:n});let i=!0;const s=ud(e),o={};if(Ja(n,((n,r)=>{i=!1,o[n]=xh(Ll(t,n),wc(r),e.serverSyncTree_,s)})),i)Ma("update() called with empty data.  Don't do anything."),gd(0,r,"ok",void 0);else{const i=fd(e),s=ah(e.serverSyncTree_,t,o,i);nd(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||qa("update at "+t+" failed: "+n);const a=lh(e.serverSyncTree_,i,!o),l=a.length>0?vd(e,t):t;rd(e.eventQueue_,l,a),gd(0,r,n,s)})),Ja(n,(n=>{const r=Td(e,Ll(t,n));vd(e,r)})),rd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function qd(e){e=yo(e);const t=new Pd((()=>{})),n=new Bd(t);return function(e,t,n){const r=fh(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const i=wc(r).withIndex(t._queryParams.getIndex());let s;if(dh(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=ch(e.serverSyncTree_,t._path,i);else{const n=vh(e.serverSyncTree_,t);s=hh(e.serverSyncTree_,t._path,i,n)}return rd(e.eventQueue_,t._path,s),uh(e.serverSyncTree_,t,n,null,!0),i}),(n=>(md(e,"get for query "+to(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ld(t,new Dd(e._repo,e._path),e._queryParams.getIndex())))}class Bd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Rd("value",this,new Ld(e.snapshotNode,new Dd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Od(this,e,t):null}matches(e){return e instanceof Bd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Vd{}class Wd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Jh("endAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}(e._queryParams,this._value,this._key);if(Nd(t),Ad(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new xd(e._repo,e._path,t,e._orderByCalled)}}class zd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Jh("startAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}(e._queryParams,this._value,this._key);if(Nd(t),Ad(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new xd(e._repo,e._path,t,e._orderByCalled)}}class Hd extends Vd{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new kl(this._path);if(Ml(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Ec(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return Ad(r),new xd(e._repo,e._path,r,!0)}}function $d(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Xh("orderByChild","path",e,!1),new Hd(e)}class Gd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Jh("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Wd(this._value,this._key)._apply(new zd(this._value,this._key)._apply(e))}}function Kd(e,t){return function(e,t,n,r){if(!(r&&void 0===n||$h(n)))throw new Error(go(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}("equalTo","key",t,!0),new Gd(e,t)}function Jd(e,...t){let n=yo(e);for(const e of t)n=e._apply(n);return n}!function(e){Os(!Hu,"__referenceConstructor has already been defined"),Hu=e}(Dd),function(e){Os(!$u,"__referenceConstructor has already been defined"),$u=e}(Dd);
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
const Yd="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let Xd=!1;function Zd(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Fa("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ma("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Sd(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a={NODE_ENV:"production"}[Yd]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Sd(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new rl(rl.OWNER):new nl(e.name,e.options,t);ed("Invalid Firebase Database URL",l),Ml(l.path)||Fa("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Qd[t.name];i||(i={},Qd[t.name]=i);let s=i[e.toURLString()];s&&Fa("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new ad(e,Xd,n,r),i[e.toURLString()]=s,s}(c,e,u,new tl(e.name,n));return new tp(h,e)}function ep(e,t){const n=Qd[t];n&&n[e.key]===e||Fa(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(sd)}(e),delete n[e.key]}class tp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ld(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dd(this._repo,Rl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ep(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Fa("Cannot call "+e+" on a deleted database.")}}function np(e=la(),t){const n=ra(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Vs("database");e&&function(e,t,n,r={}){e=yo(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Fa("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Fa('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rl(rl.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:$s(r.mockUserToken,e.app.options.projectId);s=new rl(t)}!function(e,t,n,r){e.repoInfo_=new ll(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}
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
 */(n,...e)}return n}$l.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},$l.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Ta=oa,na(new vo("database",((e,{instanceIdentifier:t})=>Zd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ca(Ea,Ca,e),ca(Ea,Ca,"esm2017")}();
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
ca("firebase","9.23.0","app");
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
const rp="firebasestorage.googleapis.com",ip="storageBucket";
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
class sp extends Qs{constructor(e,t,n=0){super(up(e),`Firebase Storage: ${t} (${up(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sp.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return up(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var op,ap,lp,cp;function up(e){return"storage/"+e}function hp(){return new sp(op.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function dp(){return new sp(op.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pp(){return new sp(op.CANCELED,"User canceled the upload/download.")}function fp(){return new sp(op.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mp(e){return new sp(op.INVALID_ARGUMENT,e)}function gp(){return new sp(op.APP_DELETED,"The Firebase app was deleted.")}function _p(e,t){return new sp(op.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function yp(e){throw new sp(op.INTERNAL_ERROR,"Internal error: "+e)}
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
 */(ap=op||(op={})).UNKNOWN="unknown",ap.OBJECT_NOT_FOUND="object-not-found",ap.BUCKET_NOT_FOUND="bucket-not-found",ap.PROJECT_NOT_FOUND="project-not-found",ap.QUOTA_EXCEEDED="quota-exceeded",ap.UNAUTHENTICATED="unauthenticated",ap.UNAUTHORIZED="unauthorized",ap.UNAUTHORIZED_APP="unauthorized-app",ap.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",ap.INVALID_CHECKSUM="invalid-checksum",ap.CANCELED="canceled",ap.INVALID_EVENT_NAME="invalid-event-name",ap.INVALID_URL="invalid-url",ap.INVALID_DEFAULT_BUCKET="invalid-default-bucket",ap.NO_DEFAULT_BUCKET="no-default-bucket",ap.CANNOT_SLICE_BLOB="cannot-slice-blob",ap.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",ap.NO_DOWNLOAD_URL="no-download-url",ap.INVALID_ARGUMENT="invalid-argument",ap.INVALID_ARGUMENT_COUNT="invalid-argument-count",ap.APP_DELETED="app-deleted",ap.INVALID_ROOT_OPERATION="invalid-root-operation",ap.INVALID_FORMAT="invalid-format",ap.INTERNAL_ERROR="internal-error",ap.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class vp{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=vp.makeFromUrl(e,t)}catch(t){return new vp(e,"")}if(""===n.path)return n;throw r=e,new sp(op.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${t===rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const r=a[t],i=r.regex.exec(e);if(i){const e=i[r.indices.bucket];let t=i[r.indices.path];t||(t=""),n=new vp(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new sp(op.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class bp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function wp(e){return"string"==typeof e||e instanceof String}function Ep(e){return Cp()&&e instanceof Blob}function Cp(){return"undefined"!=typeof Blob&&!function(){var e;const t=null===(e=qs())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function Tp(e,t,n,r){if(r<t)throw mp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw mp(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function Ip(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function Sp(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
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
function kp(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}
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
 */(cp=lp||(lp={}))[cp.NO_ERROR=0]="NO_ERROR",cp[cp.NETWORK_ERROR=1]="NETWORK_ERROR",cp[cp.ABORT=2]="ABORT";class Rp{constructor(e,t,n,r,i,s,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Op(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===lp.NO_ERROR,i=n.getStatus();if(!t||kp(i,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===lp.ABORT;return void e(!1,new Op(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new Op(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==i){const e=hp();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){r(this.appDelete_?gp():pp())}else{r(dp())}};this.canceled_?t(0,new Op(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(p,l())}),t)}function d(){s&&clearTimeout(s)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function m(e){f||(f=!0,d(),c||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Op{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Pp(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Cp())return new Blob(e);throw new sp(op.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
function xp(e){if("undefined"==typeof atob)throw t="base-64",new sp(op.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
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
 */const Ap={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Np{constructor(e,t){this.data=e,this.contentType=t||null}}function Dp(e,t){switch(e){case Ap.RAW:return new Np(Lp(t));case Ap.BASE64:case Ap.BASE64URL:return new Np(Mp(e,t));case Ap.DATA_URL:return new Np(function(e){const t=new Up(e);return t.base64?Mp(Ap.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw _p(Ap.DATA_URL,"Malformed data URL.")}return Lp(t)}(t.rest)}(t),new Up(t).contentType)}throw hp()}function Lp(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Mp(e,t){switch(e){case Ap.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw _p(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Ap.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw _p(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xp(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw _p(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Up{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw _p(Ap.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class jp{constructor(e,t){let n=0,r="";Ep(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ep(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new jp(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new jp(n,!0)}var n,r,i}static getBlob(...e){if(Cp()){const t=e.map((e=>e instanceof jp?e.data_:e));return new jp(Pp.apply(null,t))}{const t=e.map((e=>wp(e)?Dp(Ap.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new jp(r,!0)}}uploadData(){return this.data_}}
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
 */function Fp(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
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
 */function qp(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function Bp(e,t){return t}class Vp{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Bp}}let Wp=null;function zp(){if(Wp)return Wp;const e=[];e.push(new Vp("bucket")),e.push(new Vp("generation")),e.push(new Vp("metageneration")),e.push(new Vp("name","fullPath",!0));const t=new Vp("name");t.xform=function(e,t){return function(e){return!wp(e)||e.length<2?e:qp(e)}(t)},e.push(t);const n=new Vp("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Vp("timeCreated")),e.push(new Vp("updated")),e.push(new Vp("md5Hash",null,!0)),e.push(new Vp("cacheControl",null,!0)),e.push(new Vp("contentDisposition",null,!0)),e.push(new Vp("contentEncoding",null,!0)),e.push(new Vp("contentLanguage",null,!0)),e.push(new Vp("contentType",null,!0)),e.push(new Vp("metadata","customMetadata",!0)),Wp=e,Wp}function Hp(e,t,n){const r={type:"file"},i=n.length;for(let e=0;e<i;e++){const i=n[e];r[i.local]=i.xform(r,t[i.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new vp(n,r);return t._makeStorageReference(i)}})}(r,e),r}function $p(e,t,n){const r=Fp(t);if(null===r)return null;return Hp(e,r,n)}function Gp(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Kp="prefixes",Jp="items";function Yp(e,t,n){const r=Fp(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Kp])for(const i of n[Kp]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new vp(t,n));r.prefixes.push(s)}if(n[Jp])for(const i of n[Jp]){const n=e._makeStorageReference(new vp(t,i.name));r.items.push(n)}return r}(e,t,r)}class Qp{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Xp(e){if(!e)throw hp()}function Zp(e,t){return function(n,r){const i=$p(e,r,t);return Xp(null!==i),i}}function ef(e,t){return function(n,r){const i=$p(e,r,t);return Xp(null!==i),function(e,t,n,r){const i=Fp(t);if(null===i)return null;if(!wp(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return Ip("/b/"+o(i)+"/o/"+o(s),n,r)+Sp({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function tf(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new sp(op.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new sp(op.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new sp(op.QUOTA_EXCEEDED,"Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new sp(op.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function nf(e){const t=tf(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new sp(op.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function rf(e,t,n,r,i){const s={};t.isRoot?s.prefix="":s.prefix=t.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=Ip(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Qp(o,"GET",function(e,t){return function(n,r){const i=Yp(e,t,r);return Xp(null!==i),i}}(e,t.bucket),a);return l.urlParams=s,l.errorHandler=tf(t),l}function sf(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class of{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function af(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Xp(!1)}return Xp(!!n&&-1!==(t||["active"]).indexOf(n)),n}const lf=262144;function cf(e,t,n,r,i,s,o,a){const l=new of(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new sp(op.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,d=h+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(h,d);if(null===m)throw fp();const g=t.maxUploadRetryTime,_=new Qp(n,"POST",(function(e,n){const i=af(e,["active","final"]),o=l.current+u,a=r.size();let c;return c="final"===i?Zp(t,s)(e,n):null,new of(o,a,"final"===i,c)}),g);return _.headers=f,_.body=m.uploadData(),_.progressCallback=a||null,_.errorHandler=tf(e),_}const uf="running",hf="paused",df="success",pf="canceled",ff="error";function mf(e){switch(e){case"running":case"pausing":case"canceling":return uf;case"paused":return hf;case"success":return df;case"canceled":return pf;default:return ff}}
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
 */class gf{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function _f(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class yf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lp.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=lp.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=lp.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw yp("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yp("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yp("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw yp("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw yp("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class vf extends yf{initXhr(){this.xhr_.responseType="text"}}function bf(){return new vf}
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
 */class wf{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=zp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(op.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(kp(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=dp()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(op.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=sf(t,r,i),a={name:o.fullPath},l=Ip(s,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Gp(o,n),h=e.maxUploadRetryTime,d=new Qp(l,"POST",(function(e){let t;af(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Xp(!1)}return Xp(wp(t)),t}),h);return d.urlParams=a,d.headers=c,d.body=u,d.errorHandler=tf(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new Qp(n,"POST",(function(e){const t=af(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Xp(!1)}n||Xp(!1);const i=Number(n);return Xp(!isNaN(i)),new of(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=tf(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,bf,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=lf*this._chunkMultiplier,t=new of(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=cf(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(s,bf,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(lf*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=function(e,t,n){const r=Ip(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Qp(r,"GET",Zp(e,n),i);return s.errorHandler=nf(t),s}(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=sf(t,r,i),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Gp(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=jp.getBlob(c,r,u);if(null===h)throw fp();const d={name:l.fullPath},p=Ip(s,e.host,e._protocol),f=e.maxUploadRetryTime,m=new Qp(p,"POST",Zp(e,n),f);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=tf(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=pp(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=mf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new gf(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(mf(this._state)){case df:_f(this._resolve.bind(null,this.snapshot))();break;case pf:case ff:_f(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mf(this._state)){case uf:case hf:e.next&&_f(e.next.bind(e,this.snapshot))();break;case df:e.complete&&_f(e.complete.bind(e))();break;default:e.error&&_f(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class Ef{constructor(e,t){this._service=e,this._location=t instanceof vp?t:vp.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ef(e,t)}get root(){const e=new vp(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qp(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new vp(this._location.bucket,e);return new Ef(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new sp(op.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Cf(e){const t={prefixes:[],items:[]};return Tf(e,t).then((()=>t))}async function Tf(e,t,n){const r={pageToken:n},i=await function(e,t){null!=t&&"number"==typeof t.maxResults&&Tp("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=rf(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,bf)}(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await Tf(e,t,i.nextPageToken)}function If(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Ip(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new Qp(r,"GET",ef(e,n),i);return s.errorHandler=nf(t),s}(e.storage,e._location,zp());return e.storage.makeRequestWithTokens(t,bf).then((e=>{if(null===e)throw new sp(op.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Sf(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Ip(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Qp(n,"DELETE",(function(e,t){}),r);return i.successCodes=[200,204],i.errorHandler=nf(t),i}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,bf)}function kf(e,t){if(e instanceof Pf){const n=e;if(null==n._bucket)throw new sp(op.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ip+"' property when initializing the app?");const r=new Ef(n,n._bucket);return null!=t?kf(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new vp(e._location.bucket,n);return new Ef(e.storage,r)}
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
 */(e,t):e}function Rf(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Pf)return new Ef(e,t);throw mp("To use ref(service, url), the first argument must be a Storage instance.")}return kf(e,t)}function Of(e,t){const n=null==t?void 0:t[ip];return null==n?null:vp.makeFromBucketSpec(n,e)}class Pf{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?vp.makeFromBucketSpec(r,this._host):Of(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=vp.makeFromBucketSpec(this._url,e):this._bucket=Of(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ef(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new bp(gp());{const s=function(e,t,n,r,i,s,o=!0){const a=Sp(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new Rp(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
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
 */(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const xf="@firebase/storage",Af="0.11.2",Nf="storage";function Df(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new wf(e,new jp(t),n)}(e=yo(e),t,n)}function Lf(e){return Cf(e=yo(e))}function Mf(e){return If(e=yo(e))}function Uf(e,t){return Rf(e=yo(e),t)}function jf(e=la(),t){const n=ra(e=yo(e),Nf).getImmediate({identifier:t}),r=Vs("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"==typeof i?i:$s(i,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function Ff(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Pf(n,r,i,t,oa)}na(new vo(Nf,Ff,"PUBLIC").setMultipleInstances(!0)),ca(xf,Af,""),ca(xf,Af,"esm2017");const qf={class:"container"},Bf=qr("h2",null,"レタッチ依頼",-1),Vf={class:"alert alert-warning"},Wf={class:"form-group"},zf={class:"input-group align-items-center mb-3"},Hf=qr("h5",{class:"me-3"},"店舗：",-1),$f={class:"btn-group"},Gf={class:"me-4"},Kf={class:"me-4"},Jf={class:"me-4"},Yf={class:"input-group align-items-center mb-3"},Qf=qr("h5",{class:"me-3"},"担当者：",-1),Xf={class:"input-group align-items-center mb-3"},Zf=qr("h5",{class:"me-3"},"キャスト名：",-1),em={class:"row mb-3"},tm=qr("div",{class:"col"},[qr("h5",null,"修正箇所：")],-1),nm={class:"btn-group flex-column"},rm={class:"me-4"},im={class:"me-4"},sm={class:"me-4"},om={class:"me-4"},am={class:"input-group align-items-center"},lm={class:"me-4"},cm=["disabled"],um={class:"input-group align-items-center mb-3"},hm=qr("h5",{class:"me-3"},"顔の処理：",-1),dm={class:"row mb-3"},pm=qr("div",{class:"col"},[qr("h5",null,"提出期限：")],-1),fm={class:"btn-group flex-column"},mm={class:"me-4"},gm={class:"me-4"},_m={class:"me-4"},ym={class:"me-4"},vm={class:"input-group align-items-center"},bm={class:"me-4"},wm=["disabled"],Em={class:"img_post"},Cm=qr("h5",null," レタッチ画像：",-1),Tm={class:"pc_area"},Im=["onDrop"],Sm={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},km=["onClick"],Rm=qr("div",{class:"position-relative"},[qr("span",{class:"position-absolute delete-mark"},"×"),qr("img",{class:"file_icon",src:Hi})],-1),Om={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},Pm={class:"z-3 bg-white .text-secondary w-25 h-25 rounded mt-4"},xm={class:"d-flex flex-column p-3"},Am={class:"d-flex justify-content-center items-center"},Nm={class:"fs-3 lh-lg"},Dm={class:"bg-secondary rounded mt-3",style:{height:"20px"}},Lm={class:"w-100 h2",style:{height:"20px"}},Mm={class:"mt-4 d-flex justify-content-end items-center"},Um={class:"btn btn-secondary px-4 py-2 fw-bold"},jm=qr("h3",null,"依頼中",-1),Fm={class:"table-responsive mb-4"},qm={class:"table table-striped text-nowrap",style:{width:"1296px"}},Bm=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"キャスト名"),qr("th",{scope:"col"},"修正箇所"),qr("th",{scope:"col"},"顔の処理"),qr("th",{scope:"col"},"提出期限")])],-1),Vm={class:"text-wrap"},Wm={class:"text-wrap"},zm={class:"text-wrap"},Hm={class:"text-wrap"},$m={class:"text-wrap"},Gm={class:"text-wrap"},Km={name:"retouch"};var Jm=Object.assign(Km,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),r=Md(n,"retouch"),i=st({checked:!1}),s=st({checked:!1}),o=st({manager:"",retouching:[],otherRetouching:[],retouchings:[],castName:"",faceRetouching:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ts(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const r=[],i={contentType:"image/jpeg"},s=jf(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(s,o.castName+"/"+e.name);await Df(t,e,i);const n=await Mf(t);if(r.push(n),r.length==o.files.length){console.log("got all paths here now:",r);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),jd(Md(n,"retouch/"+e),{manager:o.manager,retouchings:o.retouching+","+o.otherRetouching,castName:o.castName,faceRetouching:o.faceRetouching,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=ci((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=ci((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=ci({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),g=()=>{m.value++},_=()=>{m.value--};return En((()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Pr(),Dr("section",null,[qr("div",qf,[Bf,qr("div",Vf,[qr("div",Wf,[qr("div",zf,[Hf,qr("div",$f,[qr("label",Gf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Li,o.shop]]),Wr(" DG ")]),qr("label",Kf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Li,o.shop]]),Wr(" KPG ")]),qr("label",Jf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Li,o.shop]]),Wr(" GG ")])])]),qr("div",Yf,[Qf,un(qr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ai,o.manager]])]),qr("div",Xf,[Zf,un(qr("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.castName=e),class:"form-control"},null,512),[[Ai,o.castName]])]),qr("div",em,[tm,qr("div",nm,[qr("div",null,[qr("label",rm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.retouching=e),value:"ほくろ"},null,512),[[Ni,o.retouching]]),Wr(" ほくろ ")]),qr("label",im,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>o.retouching=e),value:"しわ"},null,512),[[Ni,o.retouching]]),Wr(" しわ ")]),qr("label",sm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>o.retouching=e),value:"傷"},null,512),[[Ni,o.retouching]]),Wr(" 傷 ")]),qr("label",om,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>o.retouching=e),value:"細身"},null,512),[[Ni,o.retouching]]),Wr(" 細身 ")])]),qr("div",am,[qr("label",lm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>i.checked=e)},null,512),[[Ni,i.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.otherRetouching=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"髪色やネイルの修正等"},null,8,cm),[[Ai,o.otherRetouching]])])])]),qr("div",um,[hm,un(qr("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.faceRetouching=e),class:"form-control"},null,512),[[Ai,o.faceRetouching]])]),qr("div",dm,[pm,qr("div",fm,[qr("div",null,[qr("label",mm,[un(qr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Li,o.deadline]]),Wr(" 大至急 ")]),qr("label",gm,[un(qr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Li,o.deadline]]),Wr(" ～３日 ")]),qr("label",_m,[un(qr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Li,o.deadline]]),Wr(" ～７日 ")]),qr("label",ym,[un(qr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Li,o.deadline]]),Wr(" お任せ ")]),qr("div",vm,[qr("label",bm,[un(qr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>s.checked=e)},null,512),[[Ni,s.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,wm),[[Ai,o.otherDeadline]])])])])]),qr("div",Em,[Cm,qr("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qr("div",Tm,[qr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qi((()=>{}),["prevent"])),onDrop:qi(h,["prevent"])},"ファイルアップロード",42,Im)]),qr("div",null,[qr("ul",Sm,[(Pr(!0),Dr(Tr,null,Ln(l.value,((e,t)=>(Pr(),Dr("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[Rm,qr("span",null,Y(e.name),1)],8,km)))),128))])]),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])]),un(qr("div",null,[qr("div",Om,[qr("div",Pm,[qr("div",xm,[qr("div",Am,[qr("h2",Nm,Y(o.send),1)]),un(qr("div",Dm,[qr("div",Lm,[qr("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Bi,o.progressBar]]),qr("div",Mm,[un(qr("button",Um," 完了 ",512),[[Bi,o.sending]]),un(qr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Bi,o.send_completed]])])])])])],512),[[Bi,o.uploadModal]])]),jm,qr("div",Fm,[qr("table",qm,[Bm,qr("tbody",null,[(Pr(!0),Dr(Tr,null,Ln(f.value,(e=>(Pr(),Dr("tr",null,[qr("td",Vm,Y(e.shop),1),qr("td",Wm,Y(e.manager),1),qr("td",zm,Y(e.castName),1),qr("td",Hm,Y(e.retouchings),1),qr("td",$m,Y(e.faceRetouching),1),qr("td",Gm,Y(e.deadlines),1)])))),256))])])]),qr("div",{class:"text-center mb-5"},[qr("span",{class:"btn btn-secondary me-4",onClick:_},"< prev"),qr("span",{class:"btn btn-secondary ms-4",onClick:g},"next >")])]))}}),Ym={name:"App",components:{RequestRetouch:Jm}};const Qm={key:0,class:"btnBox text-center"};Ym.render=function(e,t,n,r,i,s){const o=An("router-link"),a=An("router-view");return Pr(),Dr(Tr,null,["index"==e.$route.name||"retouch"==e.$route.name?(Pr(),Dr("div",Qm,[Br(o,{to:"/",class:"btn btn-primary mx-2"},{default:Xt((()=>[Wr("バナー依頼")])),_:1}),Br(o,{to:"/retouch",class:"btn btn-warning mx-2"},{default:Xt((()=>[Wr("レタッチ依頼")])),_:1})])):zr("",!0),Br(a)],64)};const Xm=new Is({state:()=>({page:0}),mutations:{set_page:(e,t)=>{e.page=t}}});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zm="undefined"!=typeof window;const eg=Object.assign;function tg(e,t){const n={};for(const r in t){const i=t[r];n[r]=rg(i)?i.map(e):e(i)}return n}const ng=()=>{},rg=Array.isArray,ig=/\/$/,sg=e=>e.replace(ig,"");function og(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function ag(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function lg(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cg(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ug(e[n],t[n]))return!1;return!0}function ug(e,t){return rg(e)?hg(e,t):rg(t)?hg(t,e):e===t}function hg(e,t){return rg(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var dg,pg,fg,mg;(pg=dg||(dg={})).pop="pop",pg.push="push",(mg=fg||(fg={})).back="back",mg.forward="forward",mg.unknown="";const gg=/^[^#]+#/;function _g(e,t){return e.replace(gg,"#")+t}const yg=()=>({left:window.pageXOffset,top:window.pageYOffset});function vg(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function bg(e,t){return(history.state?history.state.position-t:-1)+e}const wg=new Map;let Eg=()=>location.protocol+"//"+location.host;function Cg(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),ag(n,"")}return ag(n,e)+r+i}function Tg(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?yg():null}}function Ig(e){return"string"==typeof e||"symbol"==typeof e}const Sg={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},kg=Symbol("");var Rg,Og;function Pg(e,t){return eg(new Error,{type:e,[kg]:!0},t)}function xg(e,t){return e instanceof Error&&kg in e&&(null==t||!!(e.type&t))}(Og=Rg||(Rg={}))[Og.aborted=4]="aborted",Og[Og.cancelled=8]="cancelled",Og[Og.duplicated=16]="duplicated";const Ag="[^/]+?",Ng={sensitive:!1,strict:!1,start:!0,end:!0},Dg=/[.+*?^${}()[\]/\\]/g;function Lg(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Mg(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Lg(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Ug(r))return 1;if(Ug(i))return-1}return i.length-r.length}function Ug(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jg={type:0,value:""},Fg=/[a-zA-Z0-9_]/;function qg(e,t,n){const r=function(e,t){const n=eg({},Ng,t),r=[];let i=n.start?"^":"";const s=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(i+="/");for(let r=0;r<t.length;r++){const o=t[r];let a=40+(n.sensitive?.25:0);if(0===o.type)r||(i+="/"),i+=o.value.replace(Dg,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:n,optional:l,regexp:c}=o;s.push({name:e,repeatable:n,optional:l});const u=c||Ag;if(u!==Ag){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(h=l&&t.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),i+=h,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",i=s[e-1];n[i.name]=r&&i.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(rg(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=rg(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[jg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Fg.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=eg(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Bg(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=$g(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(eg({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=qg(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!zg(h)&&s(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&o(h)}return d?()=>{s(d)}:ng}function s(e){if(Ig(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&Mg(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Gg(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!zg(e)&&r.set(e.record.name,e)}return t=$g({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Pg(1,{location:e});o=i.record.name,a=eg(Vg(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&Vg(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Pg(1,{location:e,currentLocation:t});o=i.record.name,a=eg({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:Hg(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Vg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function zg(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hg(e){return e.reduce(((e,t)=>eg(e,t.meta)),{})}function $g(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Gg(e,t){return t.children.some((t=>t===e||Gg(e,t)))}const Kg=/#/g,Jg=/&/g,Yg=/\//g,Qg=/=/g,Xg=/\?/g,Zg=/\+/g,e_=/%5B/g,t_=/%5D/g,n_=/%5E/g,r_=/%60/g,i_=/%7B/g,s_=/%7C/g,o_=/%7D/g,a_=/%20/g;function l_(e){return encodeURI(""+e).replace(s_,"|").replace(e_,"[").replace(t_,"]")}function c_(e){return l_(e).replace(Zg,"%2B").replace(a_,"+").replace(Kg,"%23").replace(Jg,"%26").replace(r_,"`").replace(i_,"{").replace(o_,"}").replace(n_,"^")}function u_(e){return null==e?"":function(e){return l_(e).replace(Kg,"%23").replace(Xg,"%3F")}(e).replace(Yg,"%2F")}function h_(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function d_(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(Zg," "),i=r.indexOf("="),s=h_(i<0?r:r.slice(0,i)),o=i<0?null:h_(r.slice(i+1));if(s in t){let e=t[s];rg(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function p_(e){let t="";for(let n in e){const r=e[n];if(n=c_(n).replace(Qg,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(rg(r)?r.map((e=>e&&c_(e))):[r&&c_(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function f_(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=rg(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const m_=Symbol(""),g_=Symbol(""),__=Symbol(""),y_=Symbol(""),v_=Symbol("");function b_(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function w_(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Pg(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Pg(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function E_(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(w_(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&w_(l,n,r,o,e)()}))))}}var s;return i}function C_(e){const t=ir(__),n=ir(y_),r=ci((()=>t.resolve(Et(e.to)))),i=ci((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(lg.bind(null,i));if(o>-1)return o;const a=S_(e[t-2]);return t>1&&S_(i)===a&&s[s.length-1].path!==a?s.findIndex(lg.bind(null,e[t-2])):o})),s=ci((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!rg(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ci((()=>i.value>-1&&i.value===n.matched.length-1&&cg(n.params,r.value.params)));return{route:r,href:ci((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Et(e.replace)?"replace":"push"](Et(e.to)).catch(ng):Promise.resolve()}}}const T_=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:C_,setup(e,{slots:t}){const n=st(C_(e)),{options:r}=ir(__),i=ci((()=>({[k_(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[k_(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ui("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),I_=T_;function S_(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const k_=(e,t,n)=>null!=e?e:null!=t?t:n,R_=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ir(v_),i=ci((()=>e.route||r.value)),s=ir(g_,0),o=ci((()=>{let e=Et(s);const{matched:t}=i.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=ci((()=>i.value.matched[o.value]));rr(g_,ci((()=>o.value+1))),rr(m_,a),rr(v_,i);const l=bt(c,!1);var c;return sn((()=>[l.value,a.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&lg(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=e.name,o=a.value,c=o&&o.components[s];if(!c)return O_(n.default,{Component:c,route:r});const u=o.props[s],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ui(c,eg({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[s]=null)},ref:l}));return O_(n.default,{Component:d,route:r})||d}}});function O_(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const P_=R_;function x_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function A_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const N_=A_,D_=new Xs("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),L_=new Oo("@firebase/auth");function M_(e,...t){L_.logLevel<=Co.ERROR&&L_.error(`Auth (${oa}): ${e}`,...t)}
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
 */function U_(e,...t){throw F_(e,...t)}function j_(e,...t){return F_(e,...t)}function F_(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return D_.create(e,...t)}function q_(e,t,...n){if(!e)throw F_(t,...n)}function B_(e){const t="INTERNAL ASSERTION FAILED: "+e;throw M_(t),new Error(t)}function V_(e,t){e||B_(t)}
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
 */function W_(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function z_(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function H_(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==z_()&&"https:"!==z_()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class $_{constructor(e,t){this.shortDelay=e,this.longDelay=t,V_(t>e,"Short delay should be less than long delay!"),this.isMobile=Ks()||Js()}get(){return H_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function G_(e,t){V_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class K_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void B_("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void B_("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void B_("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const J_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Y_=new $_(3e4,6e4);
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
 */function Q_(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function X_(e,t,n,r,i={}){return Z_(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=co(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),K_.fetch()(ty(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Z_(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},J_),t);try{const t=new ny(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ry(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ry(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ry(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ry(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},N_()),{[t]:n});return new Xs("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);U_(e,a)}}catch(t){if(t instanceof Qs)throw t;U_(e,"network-request-failed",{message:String(t)})}}async function ey(e,t,n,r,i={}){const s=await X_(e,t,n,r,i);return"mfaPendingCredential"in s&&U_(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ty(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?G_(e.config,i):`${e.config.apiScheme}://${i}`}class ny{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(j_(this.auth,"network-request-failed"))),Y_.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ry(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=j_(e,t,r);return i.customData._tokenResponse=n,i}
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
function iy(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function sy(e){return 1e3*Number(e)}function oy(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return M_("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ms(n);return e?JSON.parse(e):(M_("Failed to decode base64 JWT payload"),null)}catch(e){return M_("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ay(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Qs&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ly{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class cy{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=iy(this.lastLoginAt),this.creationTime=iy(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function uy(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ay(e,async function(e,t){return X_(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));q_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=x_(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cy(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class hy{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q_(e.idToken,"internal-error"),q_(void 0!==e.idToken,"internal-error"),q_(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=oy(e);return q_(t,"internal-error"),q_(void 0!==t.exp,"internal-error"),q_(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return q_(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
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
 */await async function(e,t){const n=await Z_(e,{},(async()=>{const n=co({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=ty(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",K_.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new hy;return n&&(q_("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(q_("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(q_("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hy,this.toJSON())}_performRefresh(){return B_("not implemented")}}
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
 */function dy(e,t){q_("string"==typeof e||void 0===e,"internal-error",{appName:t})}class py{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=x_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ly(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ay(this,this.stsTokenManager.getToken(this.auth,e));return q_(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=yo(e),r=await n.getIdToken(t),i=oy(r);q_(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:iy(sy(i.auth_time)),issuedAtTime:iy(sy(i.iat)),expirationTime:iy(sy(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=yo(e);await uy(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(q_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new py(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await uy(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ay(this,async function(e,t){return X_(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:v,isAnonymous:b,providerData:w,stsTokenManager:E}=t;q_(y&&E,e,"internal-error");const C=hy.fromJSON(this.name,E);q_("string"==typeof y,e,"internal-error"),dy(u,e.name),dy(h,e.name),q_("boolean"==typeof v,e,"internal-error"),q_("boolean"==typeof b,e,"internal-error"),dy(d,e.name),dy(p,e.name),dy(f,e.name),dy(m,e.name),dy(g,e.name),dy(_,e.name);const T=new py({uid:y,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:C,createdAt:g,lastLoginAt:_});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new hy;r.updateFromServerResponse(t);const i=new py({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await uy(i),i}}
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
 */const fy=new Map;function my(e){V_(e instanceof Function,"Expected a class definition");let t=fy.get(e);return t?(V_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fy.set(e,t),t)}
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
 */class gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gy.type="NONE";const _y=gy;
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
 */function yy(e,t,n){return`firebase:${e}:${t}:${n}`}class vy{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=yy(this.userKey,r.apiKey,i),this.fullPersistenceKey=yy("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?py._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new vy(my(_y),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||my(_y);const s=yy(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=py._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new vy(i,e,n)):new vy(i,e,n)}}
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
 */function by(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ty(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sy(t))return"Blackberry";if(ky(t))return"Webos";if(Ey(t))return"Safari";if((t.includes("chrome/")||Cy(t))&&!t.includes("edge/"))return"Chrome";if(Iy(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wy(e=Gs()){return/firefox\//i.test(e)}function Ey(e=Gs()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cy(e=Gs()){return/crios\//i.test(e)}function Ty(e=Gs()){return/iemobile/i.test(e)}function Iy(e=Gs()){return/android/i.test(e)}function Sy(e=Gs()){return/blackberry/i.test(e)}function ky(e=Gs()){return/webos/i.test(e)}function Ry(e=Gs()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Oy(){return function(){const e=Gs();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Py(e=Gs()){return Ry(e)||Iy(e)||ky(e)||Sy(e)||/windows phone/i.test(e)||Ty(e)}
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
function xy(e,t=[]){let n;switch(e){case"Browser":n=by(Gs());break;case"Worker":n=`${by(Gs())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${r}`}async function Ay(e,t){return X_(e,"GET","/v2/recaptchaConfig",Q_(e,t))}function Ny(e){return void 0!==e&&void 0!==e.enterprise}class Dy{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Ly(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=j_("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}class My{constructor(e){this.type="recaptcha-enterprise",this.auth=qy(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Ny(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ay(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Dy(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Ny(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Ly("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Uy(e,t,n,r=!1){const i=new My(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class jy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Fy{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new By(this),this.idTokenSubscription=new By(this),this.beforeStateQueue=new jy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=my(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await vy.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q_(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uy(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?yo(e):null;return t&&q_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(my(e))}))}async initializeRecaptchaConfig(){const e=await Ay(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Dy(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new My(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&my(e)||this._popupRedirectResolver;q_(t,this,"argument-error"),this.redirectPersistenceManager=await vy.create(this,[my(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return q_(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q_(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){L_.logLevel<=Co.WARN&&L_.warn(`Auth (${oa}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function qy(e){return yo(e)}class By{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return q_(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Vy(e,t,n){const r=qy(e);q_(r._canInitEmulator,r,"emulator-config-failed"),q_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Wy(t),{host:o,port:a}=function(e){const t=Wy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:zy(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:zy(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Wy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zy(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Hy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return B_("not implemented")}_getIdTokenResponse(e){return B_("not implemented")}_linkToIdToken(e,t){return B_("not implemented")}_getReauthenticationResolver(e){return B_("not implemented")}}
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
async function $y(e,t){return ey(e,"POST","/v1/accounts:signInWithPassword",Q_(e,t))}
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
class Gy extends Hy{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gy(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Gy(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Uy(e,n,"signInWithPassword");return $y(e,t)}return $y(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Uy(e,n,"signInWithPassword");return $y(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return ey(e,"POST","/v1/accounts:signInWithEmailLink",Q_(e,t))}(e,{email:this._email,oobCode:this._password});default:U_(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return X_(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ey(e,"POST","/v1/accounts:signInWithEmailLink",Q_(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:U_(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ky(e,t){return ey(e,"POST","/v1/accounts:signInWithIdp",Q_(e,t))}
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
 */class Jy extends Hy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jy(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):U_("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=x_(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jy(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ky(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ky(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ky(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=co(t)}return e}}
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
 */class Yy{constructor(e){var t,n,r,i,s,o;const a=uo(ho(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);q_(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=uo(ho(e)).link,n=t?uo(ho(t)).deep_link_id:null,r=uo(ho(e)).deep_link_id;return(r?uo(ho(r)).link:null)||r||n||t||e}(e);try{return new Yy(t)}catch(e){return null}}}
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
 */class Qy{constructor(){this.providerId=Qy.PROVIDER_ID}static credential(e,t){return Gy._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Yy.parseLink(t);return q_(n,"argument-error"),Gy._fromEmailAndCode(e,n.code,n.tenantId)}}Qy.PROVIDER_ID="password",Qy.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qy.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Xy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Zy extends Xy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class ev extends Zy{constructor(){super("facebook.com")}static credential(e){return Jy._fromParams({providerId:ev.PROVIDER_ID,signInMethod:ev.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ev.credentialFromTaggedObject(e)}static credentialFromError(e){return ev.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ev.credential(e.oauthAccessToken)}catch(e){return null}}}ev.FACEBOOK_SIGN_IN_METHOD="facebook.com",ev.PROVIDER_ID="facebook.com";
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
class tv extends Zy{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jy._fromParams({providerId:tv.PROVIDER_ID,signInMethod:tv.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tv.credentialFromTaggedObject(e)}static credentialFromError(e){return tv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tv.credential(t,n)}catch(e){return null}}}tv.GOOGLE_SIGN_IN_METHOD="google.com",tv.PROVIDER_ID="google.com";
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
class nv extends Zy{constructor(){super("github.com")}static credential(e){return Jy._fromParams({providerId:nv.PROVIDER_ID,signInMethod:nv.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nv.credentialFromTaggedObject(e)}static credentialFromError(e){return nv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nv.credential(e.oauthAccessToken)}catch(e){return null}}}nv.GITHUB_SIGN_IN_METHOD="github.com",nv.PROVIDER_ID="github.com";
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
class rv extends Zy{constructor(){super("twitter.com")}static credential(e,t){return Jy._fromParams({providerId:rv.PROVIDER_ID,signInMethod:rv.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rv.credentialFromTaggedObject(e)}static credentialFromError(e){return rv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rv.credential(t,n)}catch(e){return null}}}rv.TWITTER_SIGN_IN_METHOD="twitter.com",rv.PROVIDER_ID="twitter.com";
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
class iv{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await py._fromIdTokenResponse(e,n,r),s=sv(n);return new iv({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=sv(n);return new iv({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function sv(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class ov extends Qs{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ov.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ov(e,t,n,r)}}function av(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ov._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function lv(e,t,n=!1){const r="signIn",i=await av(e,r,t),s=await iv._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function cv(e,t,n){return async function(e,t){return lv(qy(e),t)}(yo(e),Qy.credential(t,n))}
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
 */const uv="__sak";
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
 */class hv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uv,"1"),this.storage.removeItem(uv),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class dv extends hv{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gs();return Ey(e)||Ry(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Py(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Oy()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dv.type="LOCAL";const pv=dv;
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
 */class fv extends hv{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fv.type="SESSION";const mv=fv;
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
class gv{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new gv(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function _v(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */gv.receivers=[];class yv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=_v("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function vv(){return window}
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
function bv(){return void 0!==vv().WorkerGlobalScope&&"function"==typeof vv().importScripts}
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
const wv="firebaseLocalStorageDb",Ev="firebaseLocalStorage",Cv="fbase_key";class Tv{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Iv(e,t){return e.transaction([Ev],t?"readwrite":"readonly").objectStore(Ev)}function Sv(){const e=indexedDB.open(wv,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ev,{keyPath:Cv})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ev)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(wv);return new Tv(e).toPromise()}(),t(await Sv()))}))}))}async function kv(e,t,n){const r=Iv(e,!0).put({[Cv]:t,value:n});return new Tv(r).toPromise()}function Rv(e,t){const n=Iv(e,!0).delete(t);return new Tv(n).toPromise()}class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Sv()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gv._getInstance(bv()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sv();return await kv(e,uv,"1"),await Rv(e,uv),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>kv(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Iv(e,!1).get(t),r=await new Tv(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Rv(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Iv(e,!1).getAll();return new Tv(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ov.type="LOCAL";const Pv=Ov;new $_(3e4,6e4);
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
class xv extends Hy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ky(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ky(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ky(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Av(e){return lv(e.auth,new xv(e),e.bypassAuthState)}function Nv(e){const{auth:t,user:n}=e;return q_(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ay(e,av(r,i,t,e),n);q_(s.idToken,r,"internal-error");const o=oy(s.idToken);q_(o,r,"internal-error");const{sub:a}=o;return q_(e.uid===a,r,"user-mismatch"),iv._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&U_(r,"user-mismatch"),e}}(n,new xv(e),e.bypassAuthState)}async function Dv(e){const{auth:t,user:n}=e;return q_(n,t,"internal-error"),async function(e,t,n=!1){const r=await ay(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return iv._forOperation(e,"link",r)}(n,new xv(e),e.bypassAuthState)}
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
 */class Lv{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Av;case"linkViaPopup":case"linkViaRedirect":return Dv;case"reauthViaPopup":case"reauthViaRedirect":return Nv;default:U_(this.auth,"internal-error")}}resolve(e){V_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){V_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Mv=new $_(2e3,1e4);class Uv extends Lv{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Uv.currentPopupAction&&Uv.currentPopupAction.cancel(),Uv.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q_(e,this.auth,"internal-error"),e}async onExecution(){V_(1===this.filter.length,"Popup operations only handle one event");const e=_v();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(j_(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(j_(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Uv.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(j_(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Mv.get())};e()}}Uv.currentPopupAction=null;
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
const jv="pendingRedirect",Fv=new Map;class qv extends Lv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Fv.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return yy(jv,e.config.apiKey,e.name)}(t),r=function(e){return my(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Fv.set(this.auth._key(),e)}return this.bypassAuthState||Fv.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Bv(e,t){Fv.set(e._key(),t)}async function Vv(e,t,n=!1){const r=qy(e),i=
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
function(e,t){return t?my(t):(q_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new qv(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class Wv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hv(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hv(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(j_(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zv(e))}saveEventToCache(e){this.cachedEventUids.add(zv(e)),this.lastProcessedEventTime=Date.now()}}function zv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hv({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gv=/^https?/;async function Kv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return X_(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Jv(e))return}catch(e){}U_(e,"unauthorized-domain")}function Jv(e){const t=W_(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Gv.test(n))return!1;if($v.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Yv=new $_(3e4,6e4);function Qv(){const e=vv().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Xv(e){return new Promise(((t,n)=>{var r,i,s;function o(){Qv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qv(),n(j_(e,"network-request-failed"))},timeout:Yv.get()})}if(null===(i=null===(r=vv().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=vv().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return vv()[t]=()=>{gapi.load?o():n(j_(e,"network-request-failed"))},Ly(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Zv=null,e}))}let Zv=null;
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
const eb=new $_(5e3,15e3),tb="__/auth/iframe",nb="emulator/auth/iframe",rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sb(e){const t=e.config;q_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?G_(t,nb):`https://${e.config.authDomain}/${tb}`,r={apiKey:t.apiKey,appName:e.name,v:oa},i=ib.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${co(r).slice(1)}`}async function ob(e){const t=await function(e){return Zv=Zv||Xv(e),Zv}(e),n=vv().gapi;return q_(n,e,"internal-error"),t.open({where:document.body,url:sb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rb,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=j_(e,"network-request-failed"),s=vv().setTimeout((()=>{r(i)}),eb.get());function o(){vv().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class lb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cb(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ab),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Gs().toLowerCase();n&&(a=Cy(c)?"_blank":n),wy(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gs()){var t;return Ry(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new lb(null);const h=window.open(t||"",a,u);q_(h,e,"popup-blocked");try{h.focus()}catch(e){}return new lb(h)}const ub="__/auth/handler",hb="emulator/auth/handler",db=encodeURIComponent("fac");async function pb(e,t,n,r,i,s){q_(e.config.authDomain,e,"auth-domain-config-required"),q_(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oa,eventId:i};if(t instanceof Xy){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",so(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Zy){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${db}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${ub}`;return G_(e,hb)}
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
 */(e)}?${co(a).slice(1)}${c}`}const fb="webStorageSupport";const mb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=Vv,this._overrideRedirectResult=Bv}async _openPopup(e,t,n,r){var i;V_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return cb(e,await pb(e,t,n,W_(),r),_v())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){vv().location.href=e}(await pb(e,t,n,W_(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(V_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ob(e),n=new Wv(e);return t.register("authEvent",(t=>{q_(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fb,{type:fb},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[fb];void 0!==i&&t(!!i),U_(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Kv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Py()||Ey()||Ry()}};var gb="@firebase/auth",_b="0.23.2";
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
class yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const vb=zs("authIdTokenMaxAge")||300;let bb=null;function wb(e=la()){const t=ra(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ra(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ao(n.getOptions(),null!=t?t:{}))return e;U_(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:mb,persistence:[Pv,pv,mv]}),r=zs("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>vb)return;const r=null==t?void 0:t.token;bb!==r&&(bb=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){yo(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){yo(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=Bs("auth");return s&&Vy(n,`http://${s}`),n}var Eb;function Cb(e,t){return function(){return e.apply(t,arguments)}}Eb="Browser",na(new vo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;q_(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Eb,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xy(Eb)},l=new Fy(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(my);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),na(new vo("auth-internal",(e=>{const t=qy(e.getProvider("auth").getImmediate());return new yb(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ca(gb,_b,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Eb)),ca(gb,_b,"esm2017");const{toString:Tb}=Object.prototype,{getPrototypeOf:Ib}=Object,Sb=(kb=Object.create(null),e=>{const t=Tb.call(e);return kb[t]||(kb[t]=t.slice(8,-1).toLowerCase())});var kb;const Rb=e=>(e=e.toLowerCase(),t=>Sb(t)===e),Ob=e=>t=>typeof t===e,{isArray:Pb}=Array,xb=Ob("undefined");const Ab=Rb("ArrayBuffer");const Nb=Ob("string"),Db=Ob("function"),Lb=Ob("number"),Mb=e=>null!==e&&"object"==typeof e,Ub=e=>{if("object"!==Sb(e))return!1;const t=Ib(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},jb=Rb("Date"),Fb=Rb("File"),qb=Rb("Blob"),Bb=Rb("FileList"),Vb=Rb("URLSearchParams");function Wb(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),Pb(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function zb(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Hb="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,$b=e=>!xb(e)&&e!==Hb;const Gb=(Kb="undefined"!=typeof Uint8Array&&Ib(Uint8Array),e=>Kb&&e instanceof Kb);var Kb;const Jb=Rb("HTMLFormElement"),Yb=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Qb=Rb("RegExp"),Xb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wb(n,((n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)})),Object.defineProperties(e,r)},Zb="abcdefghijklmnopqrstuvwxyz",ew="0123456789",tw={DIGIT:ew,ALPHA:Zb,ALPHA_DIGIT:Zb+Zb.toUpperCase()+ew};const nw=Rb("AsyncFunction");var rw={isArray:Pb,isArrayBuffer:Ab,isBuffer:function(e){return null!==e&&!xb(e)&&null!==e.constructor&&!xb(e.constructor)&&Db(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||Db(e.append)&&("formdata"===(t=Sb(e))||"object"===t&&Db(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ab(e.buffer),t},isString:Nb,isNumber:Lb,isBoolean:e=>!0===e||!1===e,isObject:Mb,isPlainObject:Ub,isUndefined:xb,isDate:jb,isFile:Fb,isBlob:qb,isRegExp:Qb,isFunction:Db,isStream:e=>Mb(e)&&Db(e.pipe),isURLSearchParams:Vb,isTypedArray:Gb,isFileList:Bb,forEach:Wb,merge:function e(){const{caseless:t}=$b(this)&&this||{},n={},r=(r,i)=>{const s=t&&zb(n,i)||i;Ub(n[s])&&Ub(r)?n[s]=e(n[s],r):Ub(r)?n[s]=e({},r):Pb(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Wb(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(Wb(t,((t,r)=>{n&&Db(t)?e[r]=Cb(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&Ib(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Sb,kindOfTest:Rb,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Pb(e))return e;let t=e.length;if(!Lb(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Jb,hasOwnProperty:Yb,hasOwnProp:Yb,reduceDescriptors:Xb,freezeMethods:e=>{Xb(e,((t,n)=>{if(Db(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Db(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Pb(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:zb,global:Hb,isContextDefined:$b,ALPHABET:tw,generateString:(e=16,t=tw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Db(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Mb(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=Pb(e)?[]:{};return Wb(e,((e,t)=>{const s=n(e,r+1);!xb(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:nw,isThenable:e=>e&&(Mb(e)||Db(e))&&Db(e.then)&&Db(e.catch)};function iw(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}rw.inherits(iw,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:rw.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const sw=iw.prototype,ow={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ow[e]={value:e}})),Object.defineProperties(iw,ow),Object.defineProperty(sw,"isAxiosError",{value:!0}),iw.from=(e,t,n,r,i,s)=>{const o=Object.create(sw);return rw.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),iw.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};function aw(e){return rw.isPlainObject(e)||rw.isArray(e)}function lw(e){return rw.endsWith(e,"[]")?e.slice(0,-2):e}function cw(e,t,n){return e?e.concat(t).map((function(e,t){return e=lw(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const uw=rw.toFlatObject(rw,{},null,(function(e){return/^is[A-Z]/.test(e)}));function hw(e,t,n){if(!rw.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=rw.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!rw.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&rw.isSpecCompliantForm(t);if(!rw.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(rw.isDate(e))return e.toISOString();if(!a&&rw.isBlob(e))throw new iw("Blob is not supported. Use a Buffer instead.");return rw.isArrayBuffer(e)||rw.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(rw.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(rw.isArray(e)&&function(e){return rw.isArray(e)&&!e.some(aw)}(e)||(rw.isFileList(e)||rw.endsWith(n,"[]"))&&(a=rw.toArray(e)))return n=lw(n),a.forEach((function(e,r){!rw.isUndefined(e)&&null!==e&&t.append(!0===o?cw([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!aw(e)||(t.append(cw(i,n,s),l(e)),!1)}const u=[],h=Object.assign(uw,{defaultVisitor:c,convertValue:l,isVisitable:aw});if(!rw.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!rw.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),rw.forEach(n,(function(n,s){!0===(!(rw.isUndefined(n)||null===n)&&i.call(t,n,rw.isString(s)?s.trim():s,r,h))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function dw(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function pw(e,t){this._pairs=[],e&&hw(e,this,t)}const fw=pw.prototype;function mw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gw(e,t,n){if(!t)return e;const r=n&&n.encode||mw,i=n&&n.serialize;let s;if(s=i?i(t,n):rw.isURLSearchParams(t)?t.toString():new pw(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}fw.append=function(e,t){this._pairs.push([e,t])},fw.toString=function(e){const t=e?function(t){return e.call(this,t,dw)}:dw;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var _w=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){rw.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},yw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var vw={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:pw,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function bw(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&rw.isArray(r)?r.length:s,a)return rw.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&rw.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&rw.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(rw.isFormData(e)&&rw.isFunction(e.entries)){const n={};return rw.forEachEntry(e,((e,r)=>{t(function(e){return rw.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ww={transitional:yw,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=rw.isObject(e);i&&rw.isHTMLForm(e)&&(e=new FormData(e));if(rw.isFormData(e))return r&&r?JSON.stringify(bw(e)):e;if(rw.isArrayBuffer(e)||rw.isBuffer(e)||rw.isStream(e)||rw.isFile(e)||rw.isBlob(e))return e;if(rw.isArrayBufferView(e))return e.buffer;if(rw.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return hw(e,new vw.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return vw.isNode&&rw.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=rw.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return hw(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(rw.isString(e))try{return(t||JSON.parse)(e),rw.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ww.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&rw.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw iw.from(e,iw.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vw.classes.FormData,Blob:vw.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};rw.forEach(["delete","get","head","post","put","patch"],(e=>{ww.headers[e]={}}));var Ew=ww;const Cw=rw.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const Tw=Symbol("internals");function Iw(e){return e&&String(e).trim().toLowerCase()}function Sw(e){return!1===e||null==e?e:rw.isArray(e)?e.map(Sw):String(e)}function kw(e,t,n,r,i){return rw.isFunction(r)?r.call(this,t,n):(i&&(t=n),rw.isString(t)?rw.isString(r)?-1!==t.indexOf(r):rw.isRegExp(r)?r.test(t):void 0:void 0)}class Rw{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Iw(t);if(!i)throw new Error("header name must be a non-empty string");const s=rw.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Sw(e))}const s=(e,t)=>rw.forEach(e,((e,n)=>i(e,n,t)));return rw.isPlainObject(e)||e instanceof this.constructor?s(e,t):rw.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Cw[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=Iw(e)){const n=rw.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(rw.isFunction(t))return t.call(this,e,n);if(rw.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Iw(e)){const n=rw.findKey(this,e);return!(!n||void 0===this[n]||t&&!kw(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Iw(e)){const i=rw.findKey(n,e);!i||t&&!kw(0,n[i],i,t)||(delete n[i],r=!0)}}return rw.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!kw(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return rw.forEach(this,((r,i)=>{const s=rw.findKey(n,i);if(s)return t[s]=Sw(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=Sw(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return rw.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&rw.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Tw]=this[Tw]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Iw(e);t[r]||(!function(e,t){const n=rw.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return rw.isArray(e)?e.forEach(r):r(e),this}}Rw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),rw.reduceDescriptors(Rw.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),rw.freezeMethods(Rw);var Ow=Rw;function Pw(e,t){const n=this||Ew,r=t||n,i=Ow.from(r.headers);let s=r.data;return rw.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function xw(e){return!(!e||!e.__CANCEL__)}function Aw(e,t,n){iw.call(this,null==e?"canceled":e,iw.ERR_CANCELED,t,n),this.name="CanceledError"}rw.inherits(Aw,iw,{__CANCEL__:!0});var Nw=vw.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),rw.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),rw.isString(r)&&o.push("path="+r),rw.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Dw(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Lw=vw.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=rw.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Mw(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}var Uw="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=Ow.from(e.headers).normalize(),s=e.responseType;let o,a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}rw.isFormData(r)&&(vw.isStandardBrowserEnv||vw.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?rw.isString(a=i.getContentType())&&i.setContentType(a.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=Dw(e.baseURL,e.url);function h(){if(!c)return;const r=Ow.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new iw("Request failed with status code "+n.status,[iw.ERR_BAD_REQUEST,iw.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),gw(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new iw("Request aborted",iw.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new iw("Network Error",iw.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||yw;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new iw(t,r.clarifyTimeoutError?iw.ETIMEDOUT:iw.ECONNABORTED,e,c)),c=null},vw.isStandardBrowserEnv){const t=(e.withCredentials||Lw(u))&&e.xsrfCookieName&&Nw.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&rw.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),rw.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Mw(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Mw(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Aw(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);d&&-1===vw.protocols.indexOf(d)?n(new iw("Unsupported protocol "+d+":",iw.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const jw={http:null,xhr:Uw};rw.forEach(jw,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Fw=e=>`- ${e}`,qw=e=>rw.isFunction(e)||null===e||!1===e;var Bw=e=>{e=rw.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!qw(n)&&(r=jw[(t=String(n)).toLowerCase()],void 0===r))throw new iw(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+s]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new iw("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Fw).join("\n"):" "+Fw(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Vw(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Aw(null,e)}function Ww(e){Vw(e),e.headers=Ow.from(e.headers),e.data=Pw.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Bw(e.adapter||Ew.adapter)(e).then((function(t){return Vw(e),t.data=Pw.call(e,e.transformResponse,t),t.headers=Ow.from(t.headers),t}),(function(t){return xw(t)||(Vw(e),t&&t.response&&(t.response.data=Pw.call(e,e.transformResponse,t.response),t.response.headers=Ow.from(t.response.headers))),Promise.reject(t)}))}const zw=e=>e instanceof Ow?e.toJSON():e;function Hw(e,t){t=t||{};const n={};function r(e,t,n){return rw.isPlainObject(e)&&rw.isPlainObject(t)?rw.merge.call({caseless:n},e,t):rw.isPlainObject(t)?rw.merge({},t):rw.isArray(t)?t.slice():t}function i(e,t,n){return rw.isUndefined(t)?rw.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!rw.isUndefined(t))return r(void 0,t)}function o(e,t){return rw.isUndefined(t)?rw.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(zw(e),zw(t),!0)};return rw.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=l[r]||i,o=s(e[r],t[r],r);rw.isUndefined(o)&&s!==a||(n[r]=o)})),n}const $w="1.5.1",Gw={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Gw[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Kw={};Gw.transitional=function(e,t,n){function r(e,t){return"[Axios v1.5.1] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new iw(r(i," has been removed"+(t?" in "+t:"")),iw.ERR_DEPRECATED);return t&&!Kw[i]&&(Kw[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Jw={assertOptions:function(e,t,n){if("object"!=typeof e)throw new iw("options must be an object",iw.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new iw("option "+s+" must be "+n,iw.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new iw("Unknown option "+s,iw.ERR_BAD_OPTION)}},validators:Gw};const Yw=Jw.validators;class Qw{constructor(e){this.defaults=e,this.interceptors={request:new _w,response:new _w}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Hw(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Jw.assertOptions(n,{silentJSONParsing:Yw.transitional(Yw.boolean),forcedJSONParsing:Yw.transitional(Yw.boolean),clarifyTimeoutError:Yw.transitional(Yw.boolean)},!1),null!=r&&(rw.isFunction(r)?t.paramsSerializer={serialize:r}:Jw.assertOptions(r,{encode:Yw.function,serialize:Yw.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=i&&rw.merge(i.common,i[t.method]);i&&rw.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Ow.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Ww.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Ww.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return gw(Dw((e=Hw(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}rw.forEach(["delete","get","head","options"],(function(e){Qw.prototype[e]=function(t,n){return this.request(Hw(n||{},{method:e,url:t,data:(n||{}).data}))}})),rw.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(Hw(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Qw.prototype[e]=t(),Qw.prototype[e+"Form"]=t(!0)}));var Xw=Qw;class Zw{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Aw(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Zw((function(t){e=t})),cancel:e}}}var eE=Zw;const tE={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(tE).forEach((([e,t])=>{tE[t]=e}));var nE=tE;const rE=function e(t){const n=new Xw(t),r=Cb(Xw.prototype.request,n);return rw.extend(r,Xw.prototype,n,{allOwnKeys:!0}),rw.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Hw(t,n))},r}(Ew);rE.Axios=Xw,rE.CanceledError=Aw,rE.CancelToken=eE,rE.isCancel=xw,rE.VERSION=$w,rE.toFormData=hw,rE.AxiosError=iw,rE.Cancel=rE.CanceledError,rE.all=function(e){return Promise.all(e)},rE.spread=function(e){return function(t){return e.apply(null,t)}},rE.isAxiosError=function(e){return rw.isObject(e)&&!0===e.isAxiosError},rE.mergeConfig=Hw,rE.AxiosHeaders=Ow,rE.formToJSON=e=>bw(rw.isHTMLForm(e)?new FormData(e):e),rE.getAdapter=Bw,rE.HttpStatusCode=nE,rE.default=rE;var iE,sE=rE,oE="undefined"!=typeof Symbol&&Symbol,aE={foo:{}},lE=Object,cE=Array.prototype.slice,uE=Object.prototype.toString,hE=Function.prototype.bind||function(e){var t=this;if("function"!=typeof t||"[object Function]"!==uE.call(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var n,r=cE.call(arguments,1),i=Math.max(0,t.length-r.length),s=[],o=0;o<i;o++)s.push("$"+o);if(n=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof n){var i=t.apply(this,r.concat(cE.call(arguments)));return Object(i)===i?i:this}return t.apply(e,r.concat(cE.call(arguments)))})),t.prototype){var a=function(){};a.prototype=t.prototype,n.prototype=new a,a.prototype=null}return n},dE=hE.call(Function.call,Object.prototype.hasOwnProperty),pE=SyntaxError,fE=Function,mE=TypeError,gE=function(e){try{return fE('"use strict"; return ('+e+").constructor;")()}catch(e){}},_E=Object.getOwnPropertyDescriptor;if(_E)try{_E({},"")}catch(e){_E=null}var yE=function(){throw new mE},vE=_E?function(){try{return yE}catch(e){try{return _E(arguments,"callee").get}catch(e){return yE}}}():yE,bE="function"==typeof oE&&"function"==typeof Symbol&&"symbol"==typeof oE("foo")&&"symbol"==typeof Symbol("bar")&&function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),n=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var r=Object.getOwnPropertySymbols(e);if(1!==r.length||r[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(e,t);if(42!==i.value||!0!==i.enumerable)return!1}return!0}(),wE={__proto__:aE}.foo===aE.foo&&!({__proto__:null}instanceof lE),EE=Object.getPrototypeOf||(wE?function(e){return e.__proto__}:null),CE={},TE="undefined"!=typeof Uint8Array&&EE?EE(Uint8Array):iE,IE={"%AggregateError%":"undefined"==typeof AggregateError?iE:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?iE:ArrayBuffer,"%ArrayIteratorPrototype%":bE&&EE?EE([][Symbol.iterator]()):iE,"%AsyncFromSyncIteratorPrototype%":iE,"%AsyncFunction%":CE,"%AsyncGenerator%":CE,"%AsyncGeneratorFunction%":CE,"%AsyncIteratorPrototype%":CE,"%Atomics%":"undefined"==typeof Atomics?iE:Atomics,"%BigInt%":"undefined"==typeof BigInt?iE:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?iE:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?iE:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?iE:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?iE:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?iE:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?iE:FinalizationRegistry,"%Function%":fE,"%GeneratorFunction%":CE,"%Int8Array%":"undefined"==typeof Int8Array?iE:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?iE:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?iE:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":bE&&EE?EE(EE([][Symbol.iterator]())):iE,"%JSON%":"object"==typeof JSON?JSON:iE,"%Map%":"undefined"==typeof Map?iE:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&bE&&EE?EE((new Map)[Symbol.iterator]()):iE,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?iE:Promise,"%Proxy%":"undefined"==typeof Proxy?iE:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?iE:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?iE:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&bE&&EE?EE((new Set)[Symbol.iterator]()):iE,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?iE:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":bE&&EE?EE(""[Symbol.iterator]()):iE,"%Symbol%":bE?Symbol:iE,"%SyntaxError%":pE,"%ThrowTypeError%":vE,"%TypedArray%":TE,"%TypeError%":mE,"%Uint8Array%":"undefined"==typeof Uint8Array?iE:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?iE:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?iE:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?iE:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?iE:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?iE:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?iE:WeakSet};if(EE)try{null.error}catch(e){var SE=EE(EE(e));IE["%Error.prototype%"]=SE}var kE=function e(t){var n;if("%AsyncFunction%"===t)n=gE("async function () {}");else if("%GeneratorFunction%"===t)n=gE("function* () {}");else if("%AsyncGeneratorFunction%"===t)n=gE("async function* () {}");else if("%AsyncGenerator%"===t){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if("%AsyncIteratorPrototype%"===t){var i=e("%AsyncGenerator%");i&&EE&&(n=EE(i.prototype))}return IE[t]=n,n},RE={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},OE=hE.call(Function.call,Array.prototype.concat),PE=hE.call(Function.apply,Array.prototype.splice),xE=hE.call(Function.call,String.prototype.replace),AE=hE.call(Function.call,String.prototype.slice),NE=hE.call(Function.call,RegExp.prototype.exec),DE=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,LE=/\\(\\)?/g,ME=function(e,t){var n,r=e;if(dE(RE,r)&&(r="%"+(n=RE[r])[0]+"%"),dE(IE,r)){var i=IE[r];if(i===CE&&(i=kE(r)),void 0===i&&!t)throw new mE("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:n,name:r,value:i}}throw new pE("intrinsic "+e+" does not exist!")},UE=function(e,t){if("string"!=typeof e||0===e.length)throw new mE("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new mE('"allowMissing" argument must be a boolean');if(null===NE(/^%?[^%]*%?$/,e))throw new pE("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=function(e){var t=AE(e,0,1),n=AE(e,-1);if("%"===t&&"%"!==n)throw new pE("invalid intrinsic syntax, expected closing `%`");if("%"===n&&"%"!==t)throw new pE("invalid intrinsic syntax, expected opening `%`");var r=[];return xE(e,DE,(function(e,t,n,i){r[r.length]=n?xE(i,LE,"$1"):t||e})),r}(e),r=n.length>0?n[0]:"",i=ME("%"+r+"%",t),s=i.name,o=i.value,a=!1,l=i.alias;l&&(r=l[0],PE(n,OE([0,1],l)));for(var c=1,u=!0;c<n.length;c+=1){var h=n[c],d=AE(h,0,1),p=AE(h,-1);if(('"'===d||"'"===d||"`"===d||'"'===p||"'"===p||"`"===p)&&d!==p)throw new pE("property names with quotes must have matching quotes");if("constructor"!==h&&u||(a=!0),dE(IE,s="%"+(r+="."+h)+"%"))o=IE[s];else if(null!=o){if(!(h in o)){if(!t)throw new mE("base intrinsic for "+e+" exists, but the property is not available.");return}if(_E&&c+1>=n.length){var f=_E(o,h);o=(u=!!f)&&"get"in f&&!("originalValue"in f.get)?f.get:o[h]}else u=dE(o,h),o=o[h];u&&!a&&(IE[s]=o)}}return o};function jE(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})})),t}var FE,qE,BE,VE=(FE=function(e){var t=UE("%Function.prototype.apply%"),n=UE("%Function.prototype.call%"),r=UE("%Reflect.apply%",!0)||hE.call(n,t),i=UE("%Object.getOwnPropertyDescriptor%",!0),s=UE("%Object.defineProperty%",!0),o=UE("%Math.max%");if(s)try{s({},"a",{value:1})}catch(e){s=null}e.exports=function(e){var t=r(hE,n,arguments);return i&&s&&i(t,"length").configurable&&s(t,"length",{value:1+o(0,e.length-(arguments.length-1))}),t};var a=function(){return r(hE,t,arguments)};s?s(e.exports,"apply",{value:a}):e.exports.apply=a},FE(BE={path:qE,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&BE.path)}},BE.exports),BE.exports),WE=VE(UE("String.prototype.indexOf")),zE=function(e,t){var n=UE(e,!!t);return"function"==typeof n&&WE(e,".prototype.")>-1?VE(n):n},HE=jE(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"}))),$E="function"==typeof Map&&Map.prototype,GE=Object.getOwnPropertyDescriptor&&$E?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,KE=$E&&GE&&"function"==typeof GE.get?GE.get:null,JE=$E&&Map.prototype.forEach,YE="function"==typeof Set&&Set.prototype,QE=Object.getOwnPropertyDescriptor&&YE?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,XE=YE&&QE&&"function"==typeof QE.get?QE.get:null,ZE=YE&&Set.prototype.forEach,eC="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,tC="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,nC="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,rC=Boolean.prototype.valueOf,iC=Object.prototype.toString,sC=Function.prototype.toString,oC=String.prototype.match,aC=String.prototype.slice,lC=String.prototype.replace,cC=String.prototype.toUpperCase,uC=String.prototype.toLowerCase,hC=RegExp.prototype.test,dC=Array.prototype.concat,pC=Array.prototype.join,fC=Array.prototype.slice,mC=Math.floor,gC="function"==typeof BigInt?BigInt.prototype.valueOf:null,_C=Object.getOwnPropertySymbols,yC="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,vC="function"==typeof Symbol&&"object"==typeof Symbol.iterator,bC="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===vC||"symbol")?Symbol.toStringTag:null,wC=Object.prototype.propertyIsEnumerable,EC=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null);function CC(e,t){if(e===1/0||e===-1/0||e!=e||e&&e>-1e3&&e<1e3||hC.call(/e/,t))return t;var n=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof e){var r=e<0?-mC(-e):mC(e);if(r!==e){var i=String(r),s=aC.call(t,i.length+1);return lC.call(i,n,"$&_")+"."+lC.call(lC.call(s,/([0-9]{3})/g,"$&_"),/_$/,"")}}return lC.call(t,n,"$&_")}var TC=HE.custom,IC=PC(TC)?TC:null;function SC(e,t,n){var r="double"===(n.quoteStyle||t)?'"':"'";return r+e+r}function kC(e){return lC.call(String(e),/"/g,"&quot;")}function RC(e){return!("[object Array]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}function OC(e){return!("[object RegExp]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}function PC(e){if(vC)return e&&"object"==typeof e&&e instanceof Symbol;if("symbol"==typeof e)return!0;if(!e||"object"!=typeof e||!yC)return!1;try{return yC.call(e),!0}catch(e){}return!1}var xC=Object.prototype.hasOwnProperty||function(e){return e in this};function AC(e,t){return xC.call(e,t)}function NC(e){return iC.call(e)}function DC(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function LC(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return LC(aC.call(e,0,t.maxStringLength),t)+r}return SC(lC.call(lC.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,MC),"single",t)}function MC(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+cC.call(t.toString(16))}function UC(e){return"Object("+e+")"}function jC(e){return e+" { ? }"}function FC(e,t,n,r){return e+" ("+t+") {"+(r?qC(n,r):pC.call(n,", "))+"}"}function qC(e,t){if(0===e.length)return"";var n="\n"+t.prev+t.base;return n+pC.call(e,","+n)+"\n"+t.prev}function BC(e,t){var n=RC(e),r=[];if(n){r.length=e.length;for(var i=0;i<e.length;i++)r[i]=AC(e,i)?t(e[i],e):""}var s,o="function"==typeof _C?_C(e):[];if(vC){s={};for(var a=0;a<o.length;a++)s["$"+o[a]]=o[a]}for(var l in e)AC(e,l)&&(n&&String(Number(l))===l&&l<e.length||vC&&s["$"+l]instanceof Symbol||(hC.call(/[^\w$]/,l)?r.push(t(l,e)+": "+t(e[l],e)):r.push(l+": "+t(e[l],e))));if("function"==typeof _C)for(var c=0;c<o.length;c++)wC.call(e,o[c])&&r.push("["+t(o[c])+"]: "+t(e[o[c]],e));return r}var VC=function e(t,n,r,i){var s=n||{};if(AC(s,"quoteStyle")&&"single"!==s.quoteStyle&&"double"!==s.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(AC(s,"maxStringLength")&&("number"==typeof s.maxStringLength?s.maxStringLength<0&&s.maxStringLength!==1/0:null!==s.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var o=!AC(s,"customInspect")||s.customInspect;if("boolean"!=typeof o&&"symbol"!==o)throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(AC(s,"indent")&&null!==s.indent&&"\t"!==s.indent&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(AC(s,"numericSeparator")&&"boolean"!=typeof s.numericSeparator)throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var a=s.numericSeparator;if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return LC(t,s);if("number"==typeof t){if(0===t)return 1/0/t>0?"0":"-0";var l=String(t);return a?CC(t,l):l}if("bigint"==typeof t){var c=String(t)+"n";return a?CC(t,c):c}var u=void 0===s.depth?5:s.depth;if(void 0===r&&(r=0),r>=u&&u>0&&"object"==typeof t)return RC(t)?"[Array]":"[Object]";var h=function(e,t){var n;if("\t"===e.indent)n="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;n=pC.call(Array(e.indent+1)," ")}return{base:n,prev:pC.call(Array(t+1),n)}}(s,r);if(void 0===i)i=[];else if(DC(i,t)>=0)return"[Circular]";function d(t,n,o){if(n&&(i=fC.call(i)).push(n),o){var a={depth:s.depth};return AC(s,"quoteStyle")&&(a.quoteStyle=s.quoteStyle),e(t,a,r+1,i)}return e(t,s,r+1,i)}if("function"==typeof t&&!OC(t)){var p=function(e){if(e.name)return e.name;var t=oC.call(sC.call(e),/^function\s*([\w$]+)/);if(t)return t[1];return null}(t),f=BC(t,d);return"[Function"+(p?": "+p:" (anonymous)")+"]"+(f.length>0?" { "+pC.call(f,", ")+" }":"")}if(PC(t)){var m=vC?lC.call(String(t),/^(Symbol\(.*\))_[^)]*$/,"$1"):yC.call(t);return"object"!=typeof t||vC?m:UC(m)}if(function(e){if(!e||"object"!=typeof e)return!1;if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return!0;return"string"==typeof e.nodeName&&"function"==typeof e.getAttribute}(t)){for(var g="<"+uC.call(String(t.nodeName)),_=t.attributes||[],y=0;y<_.length;y++)g+=" "+_[y].name+"="+SC(kC(_[y].value),"double",s);return g+=">",t.childNodes&&t.childNodes.length&&(g+="..."),g+="</"+uC.call(String(t.nodeName))+">"}if(RC(t)){if(0===t.length)return"[]";var v=BC(t,d);return h&&!function(e){for(var t=0;t<e.length;t++)if(DC(e[t],"\n")>=0)return!1;return!0}(v)?"["+qC(v,h)+"]":"[ "+pC.call(v,", ")+" ]"}if(function(e){return!("[object Error]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}(t)){var b=BC(t,d);return"cause"in Error.prototype||!("cause"in t)||wC.call(t,"cause")?0===b.length?"["+String(t)+"]":"{ ["+String(t)+"] "+pC.call(b,", ")+" }":"{ ["+String(t)+"] "+pC.call(dC.call("[cause]: "+d(t.cause),b),", ")+" }"}if("object"==typeof t&&o){if(IC&&"function"==typeof t[IC]&&HE)return HE(t,{depth:u-r});if("symbol"!==o&&"function"==typeof t.inspect)return t.inspect()}if(function(e){if(!KE||!e||"object"!=typeof e)return!1;try{KE.call(e);try{XE.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var w=[];return JE&&JE.call(t,(function(e,n){w.push(d(n,t,!0)+" => "+d(e,t))})),FC("Map",KE.call(t),w,h)}if(function(e){if(!XE||!e||"object"!=typeof e)return!1;try{XE.call(e);try{KE.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var E=[];return ZE&&ZE.call(t,(function(e){E.push(d(e,t))})),FC("Set",XE.call(t),E,h)}if(function(e){if(!eC||!e||"object"!=typeof e)return!1;try{eC.call(e,eC);try{tC.call(e,tC)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return jC("WeakMap");if(function(e){if(!tC||!e||"object"!=typeof e)return!1;try{tC.call(e,tC);try{eC.call(e,eC)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return jC("WeakSet");if(function(e){if(!nC||!e||"object"!=typeof e)return!1;try{return nC.call(e),!0}catch(e){}return!1}(t))return jC("WeakRef");if(function(e){return!("[object Number]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}(t))return UC(d(Number(t)));if(function(e){if(!e||"object"!=typeof e||!gC)return!1;try{return gC.call(e),!0}catch(e){}return!1}(t))return UC(d(gC.call(t)));if(function(e){return!("[object Boolean]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}(t))return UC(rC.call(t));if(function(e){return!("[object String]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}(t))return UC(d(String(t)));if(!function(e){return!("[object Date]"!==NC(e)||bC&&"object"==typeof e&&bC in e)}(t)&&!OC(t)){var C=BC(t,d),T=EC?EC(t)===Object.prototype:t instanceof Object||t.constructor===Object,I=t instanceof Object?"":"null prototype",S=!T&&bC&&Object(t)===t&&bC in t?aC.call(NC(t),8,-1):I?"Object":"",k=(T||"function"!=typeof t.constructor?"":t.constructor.name?t.constructor.name+" ":"")+(S||I?"["+pC.call(dC.call([],S||[],I||[]),": ")+"] ":"");return 0===C.length?k+"{}":h?k+"{"+qC(C,h)+"}":k+"{ "+pC.call(C,", ")+" }"}return String(t)},WC=UE("%TypeError%"),zC=UE("%WeakMap%",!0),HC=UE("%Map%",!0),$C=zE("WeakMap.prototype.get",!0),GC=zE("WeakMap.prototype.set",!0),KC=zE("WeakMap.prototype.has",!0),JC=zE("Map.prototype.get",!0),YC=zE("Map.prototype.set",!0),QC=zE("Map.prototype.has",!0),XC=function(e,t){for(var n,r=e;null!==(n=r.next);r=n)if(n.key===t)return r.next=n.next,n.next=e.next,e.next=n,n},ZC=function(){var e,t,n,r={assert:function(e){if(!r.has(e))throw new WC("Side channel does not contain "+VC(e))},get:function(r){if(zC&&r&&("object"==typeof r||"function"==typeof r)){if(e)return $C(e,r)}else if(HC){if(t)return JC(t,r)}else if(n)return function(e,t){var n=XC(e,t);return n&&n.value}(n,r)},has:function(r){if(zC&&r&&("object"==typeof r||"function"==typeof r)){if(e)return KC(e,r)}else if(HC){if(t)return QC(t,r)}else if(n)return function(e,t){return!!XC(e,t)}(n,r);return!1},set:function(r,i){zC&&r&&("object"==typeof r||"function"==typeof r)?(e||(e=new zC),GC(e,r,i)):HC?(t||(t=new HC),YC(t,r,i)):(n||(n={key:{},next:null}),function(e,t,n){var r=XC(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}}(n,r,i))}};return r},eT=String.prototype.replace,tT=/%20/g,nT="RFC3986",rT={default:nT,formatters:{RFC1738:function(e){return eT.call(e,tT,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:nT},iT=Object.prototype.hasOwnProperty,sT=Array.isArray,oT=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),aT=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)void 0!==e[r]&&(n[r]=e[r]);return n},lT={arrayToObject:aT,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var i=t[r],s=i.obj[i.prop],o=Object.keys(s),a=0;a<o.length;++a){var l=o[a],c=s[l];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(t.push({obj:s,prop:l}),n.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(sT(n)){for(var r=[],i=0;i<n.length;++i)void 0!==n[i]&&r.push(n[i]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(e){return r}},encode:function(e,t,n,r,i){if(0===e.length)return e;var s=e;if("symbol"==typeof e?s=Symbol.prototype.toString.call(e):"string"!=typeof e&&(s=String(e)),"iso-8859-1"===n)return escape(s).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<s.length;++a){var l=s.charCodeAt(a);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||i===rT.RFC1738&&(40===l||41===l)?o+=s.charAt(a):l<128?o+=oT[l]:l<2048?o+=oT[192|l>>6]+oT[128|63&l]:l<55296||l>=57344?o+=oT[224|l>>12]+oT[128|l>>6&63]+oT[128|63&l]:(a+=1,l=65536+((1023&l)<<10|1023&s.charCodeAt(a)),o+=oT[240|l>>18]+oT[128|l>>12&63]+oT[128|l>>6&63]+oT[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(sT(e)){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)},merge:function e(t,n,r){if(!n)return t;if("object"!=typeof n){if(sT(t))t.push(n);else{if(!t||"object"!=typeof t)return[t,n];(r&&(r.plainObjects||r.allowPrototypes)||!iT.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(n);var i=t;return sT(t)&&!sT(n)&&(i=aT(t,r)),sT(t)&&sT(n)?(n.forEach((function(n,i){if(iT.call(t,i)){var s=t[i];s&&"object"==typeof s&&n&&"object"==typeof n?t[i]=e(s,n,r):t.push(n)}else t[i]=n})),t):Object.keys(n).reduce((function(t,i){var s=n[i];return iT.call(t,i)?t[i]=e(t[i],s,r):t[i]=s,t}),i)}},cT=Object.prototype.hasOwnProperty,uT={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},hT=Array.isArray,dT=String.prototype.split,pT=Array.prototype.push,fT=function(e,t){pT.apply(e,hT(t)?t:[t])},mT=Date.prototype.toISOString,gT=rT.default,_T={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:lT.encode,encodeValuesOnly:!1,format:gT,formatter:rT.formatters[gT],indices:!1,serializeDate:function(e){return mT.call(e)},skipNulls:!1,strictNullHandling:!1},yT={},vT=function e(t,n,r,i,s,o,a,l,c,u,h,d,p,f,m,g){for(var _,y=t,v=g,b=0,w=!1;void 0!==(v=v.get(yT))&&!w;){var E=v.get(t);if(b+=1,void 0!==E){if(E===b)throw new RangeError("Cyclic object value");w=!0}void 0===v.get(yT)&&(b=0)}if("function"==typeof l?y=l(n,y):y instanceof Date?y=h(y):"comma"===r&&hT(y)&&(y=lT.maybeMap(y,(function(e){return e instanceof Date?h(e):e}))),null===y){if(s)return a&&!f?a(n,_T.encoder,m,"key",d):n;y=""}if("string"==typeof(_=y)||"number"==typeof _||"boolean"==typeof _||"symbol"==typeof _||"bigint"==typeof _||lT.isBuffer(y)){if(a){var C=f?n:a(n,_T.encoder,m,"key",d);if("comma"===r&&f){for(var T=dT.call(String(y),","),I="",S=0;S<T.length;++S)I+=(0===S?"":",")+p(a(T[S],_T.encoder,m,"value",d));return[p(C)+(i&&hT(y)&&1===T.length?"[]":"")+"="+I]}return[p(C)+"="+p(a(y,_T.encoder,m,"value",d))]}return[p(n)+"="+p(String(y))]}var k,R=[];if(void 0===y)return R;if("comma"===r&&hT(y))k=[{value:y.length>0?y.join(",")||null:void 0}];else if(hT(l))k=l;else{var O=Object.keys(y);k=c?O.sort(c):O}for(var P=i&&hT(y)&&1===y.length?n+"[]":n,x=0;x<k.length;++x){var A=k[x],N="object"==typeof A&&void 0!==A.value?A.value:y[A];if(!o||null!==N){var D=hT(y)?"function"==typeof r?r(P,A):P:P+(u?"."+A:"["+A+"]");g.set(t,b);var L=ZC();L.set(yT,g),fT(R,e(N,D,r,i,s,o,a,l,c,u,h,d,p,f,m,L))}}return R},bT=(Object.prototype.hasOwnProperty,Array.isArray,function(e,t){var n,r=e,i=function(e){if(!e)return _T;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||_T.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=rT.default;if(void 0!==e.format){if(!cT.call(rT.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=rT.formatters[n],i=_T.filter;return("function"==typeof e.filter||hT(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:_T.addQueryPrefix,allowDots:void 0===e.allowDots?_T.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:_T.charsetSentinel,delimiter:void 0===e.delimiter?_T.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:_T.encode,encoder:"function"==typeof e.encoder?e.encoder:_T.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:_T.encodeValuesOnly,filter:i,format:n,formatter:r,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:_T.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:_T.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:_T.strictNullHandling}}(t);"function"==typeof i.filter?r=(0,i.filter)("",r):hT(i.filter)&&(n=i.filter);var s,o=[];if("object"!=typeof r||null===r)return"";s=t&&t.arrayFormat in uT?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var a=uT[s];if(t&&"commaRoundTrip"in t&&"boolean"!=typeof t.commaRoundTrip)throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var l="comma"===a&&t&&t.commaRoundTrip;n||(n=Object.keys(r)),i.sort&&n.sort(i.sort);for(var c=ZC(),u=0;u<n.length;++u){var h=n[u];i.skipNulls&&null===r[h]||fT(o,vT(r[h],h,a,l,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.format,i.formatter,i.encodeValuesOnly,i.charset,c))}var d=o.join(i.delimiter),p=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),d.length>0?p+d:""});const wT={class:"container"},ET=qr("h2",null,"バナー依頼",-1),CT={class:"alert alert-primary"},TT={class:"form-group"},IT={class:"input-group align-items-center mb-3"},ST=qr("h5",{class:"me-3"},"店舗：",-1),kT={class:"btn-group"},RT={class:"me-4"},OT={class:"me-4"},PT={class:"me-4"},xT={class:"input-group align-items-center mb-3"},AT=qr("h5",{class:"me-3"},"担当者：",-1),NT={class:"row mb-3"},DT=qr("div",{class:"col"},[qr("h5",null,"サイズ：")],-1),LT={class:"btn-group flex-column"},MT={class:"me-4"},UT={class:"me-4"},jT={class:"input-group align-items-center"},FT={class:"me-4"},qT=["disabled"],BT={class:"input-group align-items-center mb-3"},VT=qr("h5",{class:"me-3"},"イベント名：",-1),WT={class:"mb-3"},zT=qr("h5",{class:"me-3"},"イベント内容：",-1),HT={class:"mb-3"},$T=qr("h5",{class:"me-3"},"入れたい文言：",-1),GT={class:"mb-3"},KT=qr("h5",{class:"me-3"},"その他要望：",-1),JT={class:"row mb-3"},YT=qr("div",{class:"col"},[qr("h5",null,"提出期限：")],-1),QT={class:"btn-group flex-column"},XT={class:"me-4"},ZT={class:"me-4"},eI={class:"me-4"},tI={class:"me-4"},nI={class:"input-group align-items-center"},rI={class:"me-4"},iI=["disabled"],sI={class:"img_post"},oI=qr("h5",null," 参考画像や使用素材：",-1),aI={class:"pc_area"},lI=["onDrop"],cI={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},uI=["onClick"],hI=qr("div",{class:"position-relative"},[qr("span",{class:"position-absolute delete-mark"},"×"),qr("img",{class:"file_icon",src:Hi})],-1),dI={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},pI={class:"z-3 bg-white .text-secondary w-25 h-25 rounded mt-4"},fI={class:"d-flex flex-column p-3"},mI={class:"d-flex justify-content-center items-center"},gI={class:"fs-3 lh-lg"},_I={class:"bg-secondary rounded mt-3",style:{height:"20px"}},yI={class:"w-100 h2",style:{height:"20px"}},vI={class:"mt-4 d-flex justify-content-end items-center"},bI={class:"btn btn-secondary px-4 py-2 fw-bold"},wI=qr("h3",null,"依頼中",-1),EI={class:"table-responsive mb-4"},CI={class:"table table-striped text-nowrap",style:{width:"1296px"}},TI=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"サイズ"),qr("th",{scope:"col"},"イベント名"),qr("th",{scope:"col"},"内容"),qr("th",{scope:"col"},"文言"),qr("th",{scope:"col"},"その他要望"),qr("th",{scope:"col"},"提出期限")])],-1),II={class:"text-wrap"},SI={class:"text-wrap"},kI={class:"text-wrap"},RI={class:"text-wrap"},OI={class:"text-wrap"},PI={class:"text-wrap"},xI={class:"text-wrap"},AI={class:"text-wrap"},NI={name:"index"};var DI=Object.assign(NI,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),r=Md(n,"banner"),i=st({checked:!1}),s=st({checked:!1}),o=st({manager:"",size:[],otherSize:[],sizes:[],eventName:"",eventDetails:"",wording:"",others:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ts(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{let e={baseURL:"https://notify-api.me",url:"/api/notifys",method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer FDic9TvvW5oaLTmnjzUgviTEos08HTZahtXbRVqWnZQ"},data:bT({message:"テスト"})};sE.request(e).then((e=>{console.log("success"),console.log(e.status)})).catch((e=>{console.log(e)})),o.uploadModal=!0;let r=(new Date).getTime();const i=[],s={contentType:"image/jpeg"},a=jf(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(a,o.eventName+"/"+e.name);await Df(t,e,s);const n=await Mf(t);if(i.push(n),i.length==o.files.length){console.log("got all paths here now:",i);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),jd(Md(n,"banner/"+r),{manager:o.manager,sizes:o.size+","+o.otherSize,eventName:o.eventName,eventDetails:o.eventDetails,wording:o.wording,others:o.others,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:r,img:o.img})},l=ci((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=ci((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=ci({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),g=()=>{m.value++},_=()=>{m.value--};return En((()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Pr(),Dr("section",null,[qr("div",wT,[ET,qr("div",CT,[qr("div",TT,[qr("div",IT,[ST,qr("div",kT,[qr("label",RT,[un(qr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Li,o.shop]]),Wr(" DG ")]),qr("label",OT,[un(qr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Li,o.shop]]),Wr(" KPG ")]),qr("label",PT,[un(qr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Li,o.shop]]),Wr(" GG ")])])]),qr("div",xT,[AT,un(qr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ai,o.manager]])]),qr("div",NT,[DT,qr("div",LT,[qr("div",null,[qr("label",MT,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>o.size=e),value:"700*400"},null,512),[[Ni,o.size]]),Wr(" 700 * 400 ")]),qr("label",UT,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.size=e),value:"640*640"},null,512),[[Ni,o.size]]),Wr(" 640 * 640 ")])]),qr("div",jT,[qr("label",FT,[un(qr("input",{type:"checkbox",name:"size","onUpdate:modelValue":t[6]||(t[6]=e=>i.checked=e)},null,512),[[Ni,i.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>o.otherSize=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他サイズはこちら"},null,8,qT),[[Ai,o.otherSize]])])])]),qr("div",BT,[VT,un(qr("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>o.eventName=e),class:"form-control"},null,512),[[Ai,o.eventName]])]),qr("div",WT,[zT,un(qr("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.eventDetails=e),class:"form-control"},null,512),[[Ai,o.eventDetails]])]),qr("div",HT,[$T,un(qr("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.wording=e),class:"form-control"},null,512),[[Ai,o.wording]])]),qr("div",GT,[KT,un(qr("textarea",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.others=e),class:"form-control"},null,512),[[Ai,o.others]])]),qr("div",JT,[YT,qr("div",QT,[qr("div",null,[qr("label",XT,[un(qr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Li,o.deadline]]),Wr(" 大至急 ")]),qr("label",ZT,[un(qr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Li,o.deadline]]),Wr(" ～３日 ")]),qr("label",eI,[un(qr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Li,o.deadline]]),Wr(" ～７日 ")]),qr("label",tI,[un(qr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Li,o.deadline]]),Wr(" お任せ ")]),qr("div",nI,[qr("label",rI,[un(qr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>s.checked=e)},null,512),[[Ni,s.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,iI),[[Ai,o.otherDeadline]])])])])]),qr("div",sI,[oI,qr("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qr("div",aI,[qr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qi((()=>{}),["prevent"])),onDrop:qi(h,["prevent"])},"ファイルアップロード",42,lI)]),qr("div",null,[qr("ul",cI,[(Pr(!0),Dr(Tr,null,Ln(l.value,((e,t)=>(Pr(),Dr("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[hI,qr("span",null,Y(e.name),1)],8,uI)))),128))])]),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])])]),un(qr("div",null,[qr("div",dI,[qr("div",pI,[qr("div",fI,[qr("div",mI,[qr("h2",gI,Y(o.send),1)]),un(qr("div",_I,[qr("div",yI,[qr("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Bi,o.progressBar]]),qr("div",vI,[un(qr("button",bI," 完了 ",512),[[Bi,o.sending]]),un(qr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Bi,o.send_completed]])])])])])],512),[[Bi,o.uploadModal]]),wI,qr("div",EI,[qr("table",CI,[TI,qr("tbody",null,[(Pr(!0),Dr(Tr,null,Ln(f.value,(e=>(Pr(),Dr("tr",null,[qr("td",II,Y(e.shop),1),qr("td",SI,Y(e.manager),1),qr("td",kI,Y(e.sizes),1),qr("td",RI,Y(e.eventName),1),qr("td",OI,Y(e.eventDetails),1),qr("td",PI,Y(e.wording),1),qr("td",xI,Y(e.others),1),qr("td",AI,Y(e.deadlines),1)])))),256))])])]),qr("div",{class:"text-center mb-5"},[qr("span",{class:"btn btn-secondary me-4",onClick:_},"< prev"),qr("span",{class:"btn btn-secondary ms-4",onClick:g},"next >")])]))}});const LI=qr("h3",null,"バナータスク",-1),MI={class:"table-responsive mb-4"},UI={class:"table table-striped text-nowrap",style:{width:"1296px"}},jI=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"サイズ"),qr("th",{scope:"col"},"イベント名"),qr("th",{scope:"col"},"内容"),qr("th",{scope:"col"},"文言"),qr("th",{scope:"col"},"その他要望"),qr("th",{scope:"col"},"提出期限")])],-1),FI={class:"text-wrap"},qI={class:"text-wrap"},BI={class:"text-wrap"},VI={class:"text-wrap"},WI={class:"text-wrap"},zI={class:"text-wrap"},HI={class:"text-wrap"},$I={class:"text-wrap"},GI={key:0,class:"btn btn_space btn-secondary pe-none"},KI=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],JI=["onClick"],YI=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],QI=["onClick"],XI=qr("h3",null,"レタッチタスク",-1),ZI={class:"table-responsive mb-4"},eS={class:"table table-striped text-nowrap",style:{width:"1296px"}},tS=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"キャスト名"),qr("th",{scope:"col"},"修正箇所"),qr("th",{scope:"col"},"顔の処理"),qr("th",{scope:"col"},"提出期限")])],-1),nS={class:"text-wrap"},rS={class:"text-wrap"},iS={class:"text-wrap"},sS={class:"text-wrap"},oS={class:"text-wrap"},aS={class:"text-wrap"},lS={class:"text-end"},cS={key:0,class:"btn btn_space btn-secondary pe-none"},uS=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],hS=["onClick"],dS=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],pS=["onClick"],fS={name:"manager-page"};var mS=Object.assign(fS,{setup(e){const t=np(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),n=Md(t,"banner"),r=Md(t,"retouch"),i=st({fire_data:[],completed:""}),s=()=>{qd(Jd(n,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);i.fire_data=t}))},o=ci((function(){return i.fire_data}));async function a(e){const t=Uf(jf(),e),n=await Lf(t),r=await Promise.all(n.items.map((e=>Mf(e))));for(let e=1;e<r.length+1;e++){const t=r[e-1],i=new XMLHttpRequest;i.responseType="blob",i.open("GET",t),i.send(),i.onload=function(){const t=i.response,r=window.URL.createObjectURL(t),s=document.createElement("a");document.body.appendChild(s),s.href=r,s.download=n.items[e-1].name,s.click()}}}function l(e){Lf(Uf(jf(),e+"/")).then((e=>{e.items.forEach((e=>{Sf(yo(e))}))}))}const c=st({fire_data:[]}),u=()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);c.fire_data=t}))},h=ci((function(){return c.fire_data}));return En((()=>{s(),u()})),(e,n)=>(Pr(),Dr("section",null,[LI,qr("div",MI,[qr("table",UI,[jI,qr("tbody",null,[(Pr(!0),Dr(Tr,null,Ln(o.value,(e=>(Pr(),Dr("tr",null,[qr("td",FI,Y(e.shop),1),qr("td",qI,Y(e.manager),1),qr("td",BI,Y(e.sizes),1),qr("td",VI,Y(e.eventName),1),qr("td",WI,Y(e.eventDetails),1),qr("td",zI,Y(e.wording),1),qr("td",HI,Y(e.others),1),qr("td",$I,Y(e.deadlines),1),qr("td",null,["false"==e.img?(Pr(),Dr("button",GI,KI)):zr("",!0),"true"==e.img?(Pr(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.eventName)},YI,8,JI)):zr("",!0),qr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,Fd(Md(t,"banner/"+r),{completed:"true"}),s(),l(e.eventName)}},"完了",8,QI)])])))),256))])])]),XI,qr("div",ZI,[qr("table",eS,[tS,qr("tbody",null,[(Pr(!0),Dr(Tr,null,Ln(h.value,(e=>(Pr(),Dr("tr",null,[qr("td",nS,Y(e.shop),1),qr("td",rS,Y(e.manager),1),qr("td",iS,Y(e.castName),1),qr("td",sS,Y(e.retouchings),1),qr("td",oS,Y(e.faceRetouching),1),qr("td",aS,Y(e.deadlines),1),qr("td",lS,["false"==e.img?(Pr(),Dr("button",cS,uS)):zr("",!0),"true"==e.img?(Pr(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.castName)},dS,8,hS)):zr("",!0),qr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,Fd(Md(t,"retouch/"+r),{completed:"true"}),u(),l(e.castName)}},"完了",8,pS)])])))),256))])])])]))}});const gS={class:"mx-auto col-sm-6"},_S=qr("h2",null,"ログイン",-1),yS={class:"mb-3"},vS=qr("label",{class:"form-label"},"メールアドレス：",-1),bS={class:"mb-3"},wS=qr("label",{class:"form-label"},"パスワード：",-1);var ES={__name:"Login",setup(e){aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"});const t=st({mailAddress:"",password:""}),n=wb(),r=async()=>{await function(e,t){return yo(e).setPersistence(t)}(n,mv).then((()=>cv(n,t.mailAddress,t.password))).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n)})),location.reload()};return(e,n)=>(Pr(),Dr("div",gS,[_S,qr("form",{onSubmit:n[2]||(n[2]=qi((()=>{}),["prevent"]))},[qr("div",yS,[vS,un(qr("input",{type:"email",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>t.mailAddress=e),autocomplete:"on"},null,512),[[Ai,t.mailAddress]])]),qr("div",bS,[wS,un(qr("input",{type:"password",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>t.password=e),autocomplete:"on"},null,512),[[Ai,t.password]])])],32),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:r,class:"btn btn-info text-white fw-bold"},"ログイン")])]))}};const CS=new function(e){const t=Bg(e.routes,e),n=e.parseQuery||d_,r=e.stringifyQuery||p_,i=e.history,s=b_(),o=b_(),a=b_(),l=bt(Sg,!0);let c=Sg;Zm&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tg.bind(null,(e=>""+e)),h=tg.bind(null,u_),d=tg.bind(null,h_);function p(e,s){if(s=eg({},s||l.value),"string"==typeof e){const r=og(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return eg(r,o,{params:d(o.params),hash:h_(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=eg({},e,{path:og(n,e.path,s.path).path});else{const t=eg({},e.params);for(const e in t)null==t[e]&&delete t[e];o=eg({},e,{params:h(t)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,eg({},e,{hash:(f=c,l_(f).replace(i_,"{").replace(o_,"}").replace(n_,"^")),path:a.path}));var f;const m=i.createHref(p);return eg({fullPath:p,hash:c,query:r===p_?f_(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function f(e){return"string"==typeof e?og(n,e,l.value.path):eg({},e)}function m(e,t){if(c!==e)return Pg(8,{from:t,to:e})}function g(e){return y(e)}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),eg({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function y(e,t){const n=c=p(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=_(n);if(u)return y(eg(f(u),{state:"object"==typeof u?eg({},s,u.state):s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&lg(t.matched[r],n.matched[i])&&cg(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=Pg(16,{to:h,from:i}),x(i,i,!0,!1)),(d?Promise.resolve(d):w(h,i)).catch((e=>xg(e)?xg(e,2)?e:P(e):O(e,h,i))).then((e=>{if(e){if(xg(e,2))return y(eg({replace:a},f(e.to),{state:"object"==typeof e.to?eg({},s,e.to.state):s,force:o}),t||h)}else e=C(h,i,!0,a,s);return E(h,i,e),e}))}function v(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=D.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function w(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>lg(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>lg(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=E_(r.reverse(),"beforeRouteLeave",e,t);for(const i of r)i.leaveGuards.forEach((r=>{n.push(w_(r,e,t))}));const l=v.bind(null,e,t);return n.push(l),L(n).then((()=>{n=[];for(const r of s.list())n.push(w_(r,e,t));return n.push(l),L(n)})).then((()=>{n=E_(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(w_(r,e,t))}));return n.push(l),L(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(rg(r.beforeEnter))for(const i of r.beforeEnter)n.push(w_(i,e,t));else n.push(w_(r.beforeEnter,e,t));return n.push(l),L(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=E_(a,"beforeRouteEnter",e,t),n.push(l),L(n)))).then((()=>{n=[];for(const r of o.list())n.push(w_(r,e,t));return n.push(l),L(n)})).catch((e=>xg(e,8)?e:Promise.reject(e)))}function E(e,t,n){a.list().forEach((r=>b((()=>r(e,t,n)))))}function C(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Sg,c=Zm?history.state:{};n&&(r||a?i.replace(e.fullPath,eg({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,x(e,t,n,a),P()}let T;function I(){T||(T=i.listen(((e,t,n)=>{const r=p(e),s=_(r);if(s)return void y(eg(s,{replace:!0}),r).catch(ng);c=r;const o=l.value;var a,u;Zm&&(a=bg(o.fullPath,n.delta),u=yg(),wg.set(a,u)),w(r,o).catch((e=>xg(e,12)?e:xg(e,2)?(y(e.to,r).then((e=>{xg(e,20)&&!n.delta&&n.type===dg.pop&&i.go(-1,!1)})).catch(ng),Promise.reject()):(n.delta&&i.go(-n.delta,!1),O(e,r,o)))).then((e=>{(e=e||C(r,o,!1))&&(n.delta&&!xg(e,8)?i.go(-n.delta,!1):n.type===dg.pop&&xg(e,20)&&i.go(-1,!1)),E(r,o,e)})).catch(ng)})))}let S,k=b_(),R=b_();function O(e,t,n){P(e);const r=R.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function P(e){return S||(S=!e,I(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset()),e}function x(t,n,r,i){const{scrollBehavior:s}=e;if(!Zm||!s)return Promise.resolve();const o=!r&&function(e){const t=wg.get(e);return wg.delete(e),t}(bg(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return jt().then((()=>s(t,n,o))).then((e=>e&&vg(e))).catch((e=>O(e,t,n)))}const A=e=>i.go(e);let N;const D=new Set;function L(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return{currentRoute:l,listening:!0,addRoute:function(e,n){let r,i;return Ig(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:g,replace:function(e){return g(eg(f(e),{replace:!0}))},go:A,back:()=>A(-1),forward:()=>A(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:R.add,isReady:function(){return S&&l.value!==Sg?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",I_),e.component("RouterView",P_),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Et(l)}),Zm&&!N&&l.value===Sg&&(N=!0,g(i.location).catch((e=>{})));const t={};for(const e in Sg)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(__,this),e.provide(y_,ot(t)),e.provide(v_,l);const n=e.unmount;D.add(e),e.unmount=function(){D.delete(e),D.size<1&&(c=Sg,T&&T(),T=null,l.value=Sg,N=!1,S=!1),n()}}}}({history:function(e){const t=function(e){const{history:t,location:n}=window,r={value:Cg(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:Eg()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(e){console.error(e),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=eg({},i.value,t.state,{forward:e,scroll:yg()});s(o.current,o,!0),s(e,eg({},Tg(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,eg({},t.state,Tg(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(Zm){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),sg(e)}(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Cg(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:dg.pop,direction:u?u>0?fg.forward:fg.back:fg.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(eg({},e.state,{scroll:yg()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace),r=eg({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:_g.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:[{path:"/",name:"index",component:DI,meta:{requiresAuth:!0}},{path:"/retouch",name:"retouch",component:Jm,meta:{requiresAuth:!0}},{path:"/manager-page",name:"manager-page",component:mS,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ES,meta:{requiresAuth:!1}}]});wb(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),CS.beforeEach((async(e,t)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),r=new Promise((e=>{const t=wb().onAuthStateChanged((n=>{t(),e(!!n)}))}));return n&&!await r?"/login":"login"==e.name&&await r?"/":void 0}));var TS=((...e)=>{const t=(zi||(zi=wr(Wi))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(_(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;g(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t})(Ym);TS.use(Xm),TS.use(CS),TS.mount("#app");
