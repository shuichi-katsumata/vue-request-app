function e(e,t){const n=Object.create(null),s=e.split(",");for(let e=0;e<s.length;e++)n[s[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t={},n=[],s=()=>{},r=()=>!1,i=/^on[^a-z]/,o=e=>i.test(e),a=e=>e.startsWith("onUpdate:"),l=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,h=(e,t)=>u.call(e,t),d=Array.isArray,p=e=>"[object Map]"===C(e),f=e=>"[object Set]"===C(e),_=e=>"[object Date]"===C(e),m=e=>"function"==typeof e,g=e=>"string"==typeof e,v=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,b=e=>y(e)&&m(e.then)&&m(e.catch),w=Object.prototype.toString,C=e=>w.call(e),I=e=>C(e).slice(8,-1),E=e=>"[object Object]"===C(e),T=e=>g(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},R=/-(\w)/g,x=S((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),P=/\B([A-Z])/g,N=S((e=>e.replace(P,"-$1").toLowerCase())),O=S((e=>e.charAt(0).toUpperCase()+e.slice(1))),A=S((e=>e?`on${O(e)}`:"")),D=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},M=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let F;const j=()=>F||(F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function q(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=g(s)?z(s):q(s);if(r)for(const e in r)t[e]=r[e]}return t}return g(e)||y(e)?e:void 0}const V=/;(?![^(]*\))/g,B=/:([^]+)/,W=/\/\*[^]*?\*\//g;function z(e){const t={};return e.replace(W,"").split(V).forEach((e=>{if(e){const n=e.split(B);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function H(e){let t="";if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const s=H(e[n]);s&&(t+=s+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function G(e){return!!e||""===e}function K(e,t){if(e===t)return!0;let n=_(e),s=_(t);if(n||s)return!(!n||!s)&&e.getTime()===t.getTime();if(n=v(e),s=v(t),n||s)return e===t;if(n=d(e),s=d(t),n||s)return!(!n||!s)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=K(e[s],t[s]);return n}(e,t);if(n=y(e),s=y(t),n||s){if(!n||!s)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const s=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(s&&!r||!s&&r||!K(e[n],t[n]))return!1}}return String(e)===String(t)}function Y(e,t){return e.findIndex((e=>K(e,t)))}const J=e=>g(e)?e:null==e?"":d(e)||y(e)&&(e.toString===w||!m(e.toString))?JSON.stringify(e,Q,2):String(e),Q=(e,t)=>t&&t.__v_isRef?Q(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:f(t)?{[`Set(${t.size})`]:[...t.values()]}:!y(t)||d(t)||E(t)?t:String(t);let X;class Z{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=X,!e&&X&&(this.index=(X.scopes||(X.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=X;try{return X=this,e()}finally{X=t}}}on(){X=this}off(){X=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const ee=e=>{const t=new Set(e);return t.w=0,t.n=0,t},te=e=>(e.w&ie)>0,ne=e=>(e.n&ie)>0,se=new WeakMap;let re=0,ie=1;const oe=30;let ae;const le=Symbol(""),ce=Symbol("");class ue{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=X){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ae,t=de;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ae,ae=this,de=!0,ie=1<<++re,re<=oe?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ie})(this):he(this),this.fn()}finally{re<=oe&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];te(r)&&!ne(r)?r.delete(e):t[n++]=r,r.w&=~ie,r.n&=~ie}t.length=n}})(this),ie=1<<--re,ae=this.parent,de=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let de=!0;const pe=[];function fe(){pe.push(de),de=!1}function _e(){const e=pe.pop();de=void 0===e||e}function me(e,t,n){if(de&&ae){let t=se.get(e);t||se.set(e,t=new Map);let s=t.get(n);s||t.set(n,s=ee()),ge(s)}}function ge(e,t){let n=!1;re<=oe?ne(e)||(e.n|=ie,n=!te(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e))}function ve(e,t,n,s,r,i){const o=se.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&d(e)){const e=Number(s);o.forEach(((t,n)=>{("length"===n||n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":d(e)?T(n)&&a.push(o.get("length")):(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"delete":d(e)||(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"set":p(e)&&a.push(o.get(le))}if(1===a.length)a[0]&&ye(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);ye(ee(e))}}function ye(e,t){const n=d(e)?e:[...e];for(const e of n)e.computed&&be(e);for(const e of n)e.computed||be(e)}function be(e,t){(e!==ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const we=e("__proto__,__v_isRef,__isVue"),Ce=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(v)),Ie=xe(),Ee=xe(!1,!0),Te=xe(!0),ke=Se();function Se(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=pt(this);for(let e=0,t=this.length;e<t;e++)me(n,0,e+"");const s=n[t](...e);return-1===s||!1===s?n[t](...e.map(pt)):s}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){fe();const n=pt(this)[t].apply(this,e);return _e(),n}})),e}function Re(e){const t=pt(this);return me(t,0,e),t.hasOwnProperty(e)}function xe(e=!1,t=!1){return function(n,s,r){if("__v_isReactive"===s)return!e;if("__v_isReadonly"===s)return e;if("__v_isShallow"===s)return t;if("__v_raw"===s&&r===(e?t?rt:st:t?nt:tt).get(n))return n;const i=d(n);if(!e){if(i&&h(ke,s))return Reflect.get(ke,s,r);if("hasOwnProperty"===s)return Re}const o=Reflect.get(n,s,r);return(v(s)?Ce.has(s):we(s))?o:(e||me(n,0,s),t?o:yt(o)?i&&T(s)?o:o.value:y(o)?e?at(o):it(o):o)}}function Pe(e=!1){return function(t,n,s,r){let i=t[n];if(ut(i)&&yt(i)&&!yt(s))return!1;if(!e&&(ht(s)||ut(s)||(i=pt(i),s=pt(s)),!d(t)&&yt(i)&&!yt(s)))return i.value=s,!0;const o=d(t)&&T(n)?Number(n)<t.length:h(t,n),a=Reflect.set(t,n,s,r);return t===pt(r)&&(o?D(s,i)&&ve(t,"set",n,s):ve(t,"add",n,s)),a}}const Ne={get:Ie,set:Pe(),deleteProperty:function(e,t){const n=h(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&ve(e,"delete",t,void 0),s},has:function(e,t){const n=Reflect.has(e,t);return v(t)&&Ce.has(t)||me(e,0,t),n},ownKeys:function(e){return me(e,0,d(e)?"length":le),Reflect.ownKeys(e)}},Oe={get:Te,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ae=l({},Ne,{get:Ee,set:Pe(!0)}),De=e=>e,Le=e=>Reflect.getPrototypeOf(e);function Me(e,t,n=!1,s=!1){const r=pt(e=e.__v_raw),i=pt(t);n||(t!==i&&me(r,0,t),me(r,0,i));const{has:o}=Le(r),a=s?De:n?mt:_t;return o.call(r,t)?a(e.get(t)):o.call(r,i)?a(e.get(i)):void(e!==r&&e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,s=pt(n),r=pt(e);return t||(e!==r&&me(s,0,e),me(s,0,r)),e===r?n.has(e):n.has(e)||n.has(r)}function Fe(e,t=!1){return e=e.__v_raw,!t&&me(pt(e),0,le),Reflect.get(e,"size",e)}function je(e){e=pt(e);const t=pt(this);return Le(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function qe(e,t){t=pt(t);const n=pt(this),{has:s,get:r}=Le(n);let i=s.call(n,e);i||(e=pt(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?D(t,o)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function Ve(e){const t=pt(this),{has:n,get:s}=Le(t);let r=n.call(t,e);r||(e=pt(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&ve(t,"delete",e,void 0),i}function Be(){const e=pt(this),t=0!==e.size,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function We(e,t){return function(n,s){const r=this,i=r.__v_raw,o=pt(i),a=t?De:e?mt:_t;return!e&&me(o,0,le),i.forEach(((e,t)=>n.call(s,a(e),a(t),r)))}}function ze(e,t,n){return function(...s){const r=this.__v_raw,i=pt(r),o=p(i),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=r[e](...s),u=n?De:t?mt:_t;return!t&&me(i,0,l?ce:le),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return"delete"!==e&&this}}function $e(){const e={get(e){return Me(this,e)},get size(){return Fe(this)},has:Ue,add:je,set:qe,delete:Ve,clear:Be,forEach:We(!1,!1)},t={get(e){return Me(this,e,!1,!0)},get size(){return Fe(this)},has:Ue,add:je,set:qe,delete:Ve,clear:Be,forEach:We(!1,!0)},n={get(e){return Me(this,e,!0)},get size(){return Fe(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!1)},s={get(e){return Me(this,e,!0,!0)},get size(){return Fe(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=ze(r,!1,!1),n[r]=ze(r,!0,!1),t[r]=ze(r,!1,!0),s[r]=ze(r,!0,!0)})),[e,n,t,s]}const[Ge,Ke,Ye,Je]=$e();function Qe(e,t){const n=t?e?Je:Ye:e?Ke:Ge;return(t,s,r)=>"__v_isReactive"===s?!e:"__v_isReadonly"===s?e:"__v_raw"===s?t:Reflect.get(h(n,s)&&s in t?n:t,s,r)}const Xe={get:Qe(!1,!1)},Ze={get:Qe(!1,!0)},et={get:Qe(!0,!1)},tt=new WeakMap,nt=new WeakMap,st=new WeakMap,rt=new WeakMap;function it(e){return ut(e)?e:lt(e,!1,Ne,Xe,tt)}function ot(e){return lt(e,!1,Ae,Ze,nt)}function at(e){return lt(e,!0,Oe,et,st)}function lt(e,t,n,s,r){if(!y(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(I(a));var a;if(0===o)return e;const l=new Proxy(e,2===o?s:n);return r.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!(!e||!e.__v_isReactive)}function ut(e){return!(!e||!e.__v_isReadonly)}function ht(e){return!(!e||!e.__v_isShallow)}function dt(e){return ct(e)||ut(e)}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function ft(e){return M(e,"__v_skip",!0),e}const _t=e=>y(e)?it(e):e,mt=e=>y(e)?at(e):e;function gt(e){de&&ae&&ge((e=pt(e)).dep||(e.dep=ee()))}function vt(e,t){const n=(e=pt(e)).dep;n&&ye(n)}function yt(e){return!(!e||!0!==e.__v_isRef)}function bt(e,t){return yt(e)?e:new wt(e,t)}class wt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:pt(e),this._value=t?e:_t(e)}get value(){return gt(this),this._value}set value(e){const t=this.__v_isShallow||ht(e)||ut(e);e=t?e:pt(e),D(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:_t(e),vt(this))}}function Ct(e){return yt(e)?e.value:e}const It={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return yt(r)&&!yt(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Et(e){return ct(e)?e:new Proxy(e,It)}class Tt{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ue(e,(()=>{this._dirty||(this._dirty=!0,vt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=pt(this);return gt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kt(e,t,n,s){let r;try{r=s?e(...s):e()}catch(e){Rt(e,t,n)}return r}function St(e,t,n,s){if(m(e)){const r=kt(e,t,n,s);return r&&b(r)&&r.catch((e=>{Rt(e,t,n)})),r}const r=[];for(let i=0;i<e.length;i++)r.push(St(e[i],t,n,s));return r}function Rt(e,t,n,s=!0){t&&t.vnode;if(t){let s=t.parent;const r=t.proxy,i=n;for(;s;){const t=s.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,i))return;s=s.parent}const o=t.appContext.config.errorHandler;if(o)return void kt(o,null,10,[e,r,i])}!function(e,t,n,s=!0){console.error(e)}(e,0,0,s)}let xt=!1,Pt=!1;const Nt=[];let Ot=0;const At=[];let Dt=null,Lt=0;const Mt=Promise.resolve();let Ut=null;function Ft(e){const t=Ut||Mt;return e?t.then(this?e.bind(this):e):t}function jt(e){Nt.length&&Nt.includes(e,xt&&e.allowRecurse?Ot+1:Ot)||(null==e.id?Nt.push(e):Nt.splice(function(e){let t=Ot+1,n=Nt.length;for(;t<n;){const s=t+n>>>1;Wt(Nt[s])<e?t=s+1:n=s}return t}(e.id),0,e),qt())}function qt(){xt||Pt||(Pt=!0,Ut=Mt.then(Ht))}function Vt(e,t=(xt?Ot+1:0)){for(;t<Nt.length;t++){const e=Nt[t];e&&e.pre&&(Nt.splice(t,1),t--,e())}}function Bt(e){if(At.length){const e=[...new Set(At)];if(At.length=0,Dt)return void Dt.push(...e);for(Dt=e,Dt.sort(((e,t)=>Wt(e)-Wt(t))),Lt=0;Lt<Dt.length;Lt++)Dt[Lt]();Dt=null,Lt=0}}const Wt=e=>null==e.id?1/0:e.id,zt=(e,t)=>{const n=Wt(e)-Wt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ht(e){Pt=!1,xt=!0,Nt.sort(zt);try{for(Ot=0;Ot<Nt.length;Ot++){const e=Nt[Ot];e&&!1!==e.active&&kt(e,null,14)}}finally{Ot=0,Nt.length=0,Bt(),xt=!1,Ut=null,(Nt.length||At.length)&&Ht()}}function $t(e,n,...s){if(e.isUnmounted)return;const r=e.vnode.props||t;let i=s;const o=n.startsWith("update:"),a=o&&n.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:n,trim:o}=r[e]||t;o&&(i=s.map((e=>g(e)?e.trim():e))),n&&(i=s.map(U))}let l,c=r[l=A(n)]||r[l=A(x(n))];!c&&o&&(c=r[l=A(N(n))]),c&&St(c,e,6,i);const u=r[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,St(u,e,6,i)}}function Gt(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(void 0!==r)return r;const i=e.emits;let o={},a=!1;if(!m(e)){const s=e=>{const n=Gt(e,t,!0);n&&(a=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(s),e.extends&&s(e.extends),e.mixins&&e.mixins.forEach(s)}return i||a?(d(i)?i.forEach((e=>o[e]=null)):l(o,i),y(e)&&s.set(e,o),o):(y(e)&&s.set(e,null),null)}function Kt(e,t){return!(!e||!o(t))&&(t=t.slice(2).replace(/Once$/,""),h(e,t[0].toLowerCase()+t.slice(1))||h(e,N(t))||h(e,t))}let Yt=null,Jt=null;function Qt(e){const t=Yt;return Yt=e,Jt=e&&e.type.__scopeId||null,t}function Xt(e,t=Yt,n){if(!t)return e;if(e._n)return e;const s=(...n)=>{s._d&&Os(-1);const r=Qt(t);let i;try{i=e(...n)}finally{Qt(r),s._d&&Os(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function Zt(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,data:p,setupState:f,ctx:_,inheritAttrs:m}=e;let g,v;const y=Qt(e);try{if(4&n.shapeFlag){const e=r||s;g=Hs(h.call(e,e,d,i,f,p,_)),v=c}else{const e=t;0,g=Hs(e.length>1?e(i,{attrs:c,slots:l,emit:u}):e(i,null)),v=t.props?c:en(c)}}catch(t){Rs.length=0,Rt(t,e,1),g=Vs(ks)}let b=g;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(a)&&(v=tn(v,o)),b=Bs(b,v))}return n.dirs&&(b=Bs(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),g=b,Qt(y),g}const en=e=>{let t;for(const n in e)("class"===n||"style"===n||o(n))&&((t||(t={}))[n]=e[n]);return t},tn=(e,t)=>{const n={};for(const s in e)a(s)&&s.slice(9)in t||(n[s]=e[s]);return n};function nn(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Kt(n,i))return!0}return!1}const sn={};function rn(e,t,n){return on(e,t,n)}function on(e,n,{immediate:r,deep:i,flush:o,onTrack:a,onTrigger:l}=t){var u;const h=X===(null==(u=Zs)?void 0:u.scope)?Zs:null;let p,f,_=!1,g=!1;if(yt(e)?(p=()=>e.value,_=ht(e)):ct(e)?(p=()=>e,i=!0):d(e)?(g=!0,_=e.some((e=>ct(e)||ht(e))),p=()=>e.map((e=>yt(e)?e.value:ct(e)?cn(e):m(e)?kt(e,h,2):void 0))):p=m(e)?n?()=>kt(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),St(e,h,3,[y])}:s,n&&i){const e=p;p=()=>cn(e())}let v,y=e=>{f=I.onStop=()=>{kt(e,h,4)}};if(ir){if(y=s,n?r&&St(n,h,3,[p(),g?[]:void 0,y]):p(),"sync"!==o)return s;{const e=dr();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(sn):sn;const w=()=>{if(I.active)if(n){const e=I.run();(i||_||(g?e.some(((e,t)=>D(e,b[t]))):D(e,b)))&&(f&&f(),St(n,h,3,[e,b===sn?void 0:g&&b[0]===sn?[]:b,y]),b=e)}else I.run()};let C;w.allowRecurse=!!n,"sync"===o?C=w:"post"===o?C=()=>bs(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),C=()=>jt(w));const I=new ue(p,C);n?r?w():b=I.run():"post"===o?bs(I.run.bind(I),h&&h.suspense):I.run();const E=()=>{I.stop(),h&&h.scope&&c(h.scope.effects,I)};return v&&v.push(E),E}function an(e,t,n){const s=this.proxy,r=g(e)?e.includes(".")?ln(s,e):()=>s[e]:e.bind(s,s);let i;m(t)?i=t:(i=t.handler,n=t);const o=Zs;tr(this);const a=on(r,i.bind(s),n);return o?tr(o):nr(),a}function ln(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function cn(e,t){if(!y(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),yt(e))cn(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(f(e)||p(e))e.forEach((e=>{cn(e,t)}));else if(E(e))for(const n in e)cn(e[n],t);return e}function un(e,n){const s=Yt;if(null===s)return e;const r=lr(s)||s.proxy,i=e.dirs||(e.dirs=[]);for(let e=0;e<n.length;e++){let[s,o,a,l=t]=n[e];s&&(m(s)&&(s={mounted:s,updated:s}),s.deep&&cn(o),i.push({dir:s,instance:r,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function hn(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(fe(),St(l,n,8,[e.el,a,e,t]),_e())}}function dn(e,t){return m(e)?(()=>l({name:e.name},t,{setup:e}))():e}const pn=e=>!!e.type.__asyncLoader,fn=e=>e.type.__isKeepAlive;function _n(e,t){gn(e,"a",t)}function mn(e,t){gn(e,"da",t)}function gn(e,t,n=Zs){const s=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(yn(t,s,n),n){let e=n.parent;for(;e&&e.parent;)fn(e.parent.vnode)&&vn(s,t,n,e),e=e.parent}}function vn(e,t,n,s){const r=yn(t,e,s,!0);kn((()=>{c(s[t],r)}),n)}function yn(e,t,n=Zs,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;fe(),tr(n);const r=St(t,n,e,s);return nr(),_e(),r});return s?r.unshift(i):r.push(i),i}}const bn=e=>(t,n=Zs)=>(!ir||"sp"===e)&&yn(e,((...e)=>t(...e)),n),wn=bn("bm"),Cn=bn("m"),In=bn("bu"),En=bn("u"),Tn=bn("bum"),kn=bn("um"),Sn=bn("sp"),Rn=bn("rtg"),xn=bn("rtc");function Pn(e,t=Zs){yn("ec",e,t)}const Nn="components";function On(e,t){return function(e,t,n=!0,s=!1){const r=Yt||Zs;if(r){const n=r.type;if(e===Nn){const e=function(e,t=!0){return m(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===x(t)||e===O(x(t))))return n}const i=Dn(r[e]||n[e],t)||Dn(r.appContext[e],t);return!i&&s?n:i}}(Nn,e,!0,t)||e}const An=Symbol.for("v-ndc");function Dn(e,t){return e&&(e[t]||e[x(t)]||e[O(x(t))])}function Ln(e,t,n,s){let r;const i=n&&n[s];if(d(e)||g(e)){r=new Array(e.length);for(let n=0,s=e.length;n<s;n++)r[n]=t(e[n],n,void 0,i&&i[n])}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,i&&i[n])}else if(y(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,i&&i[n])));else{const n=Object.keys(e);r=new Array(n.length);for(let s=0,o=n.length;s<o;s++){const o=n[s];r[s]=t(e[o],o,s,i&&i[s])}}else r=[];return n&&(n[s]=r),r}const Mn=e=>e?sr(e)?lr(e)||e.proxy:Mn(e.parent):null,Un=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mn(e.parent),$root:e=>Mn(e.root),$emit:e=>e.emit,$options:e=>Hn(e),$forceUpdate:e=>e.f||(e.f=()=>jt(e.update)),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>an.bind(e)}),Fn=(e,n)=>e!==t&&!e.__isScriptSetup&&h(e,n),jn={get({_:e},n){const{ctx:s,setupState:r,data:i,props:o,accessCache:a,type:l,appContext:c}=e;let u;if("$"!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return r[n];case 2:return i[n];case 4:return s[n];case 3:return o[n]}else{if(Fn(r,n))return a[n]=1,r[n];if(i!==t&&h(i,n))return a[n]=2,i[n];if((u=e.propsOptions[0])&&h(u,n))return a[n]=3,o[n];if(s!==t&&h(s,n))return a[n]=4,s[n];Vn&&(a[n]=0)}}const d=Un[n];let p,f;return d?("$attrs"===n&&me(e,0,n),d(e)):(p=l.__cssModules)&&(p=p[n])?p:s!==t&&h(s,n)?(a[n]=4,s[n]):(f=c.config.globalProperties,h(f,n)?f[n]:void 0)},set({_:e},n,s){const{data:r,setupState:i,ctx:o}=e;return Fn(i,n)?(i[n]=s,!0):r!==t&&h(r,n)?(r[n]=s,!0):!h(e.props,n)&&(("$"!==n[0]||!(n.slice(1)in e))&&(o[n]=s,!0))},has({_:{data:e,setupState:n,accessCache:s,ctx:r,appContext:i,propsOptions:o}},a){let l;return!!s[a]||e!==t&&h(e,a)||Fn(n,a)||(l=o[0])&&h(l,a)||h(r,a)||h(Un,a)||h(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qn(e){return d(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Vn=!0;function Bn(e){const t=Hn(e),n=e.proxy,r=e.ctx;Vn=!1,t.beforeCreate&&Wn(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:p,mounted:f,beforeUpdate:_,updated:g,activated:v,deactivated:b,beforeDestroy:w,beforeUnmount:C,destroyed:I,unmounted:E,render:T,renderTracked:k,renderTriggered:S,errorCaptured:R,serverPrefetch:x,expose:P,inheritAttrs:N,components:O,directives:A,filters:D}=t;if(u&&function(e,t,n=s){d(e)&&(e=Yn(e));for(const n in e){const s=e[n];let r;r=y(s)?"default"in s?rs(s.from||n,s.default,!0):rs(s.from||n):rs(s),yt(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:e=>r.value=e}):t[n]=r}}(u,r,null),a)for(const e in a){const t=a[e];m(t)&&(r[e]=t.bind(n))}if(i){const t=i.call(n,n);y(t)&&(e.data=it(t))}if(Vn=!0,o)for(const e in o){const t=o[e],i=m(t)?t.bind(n,n):m(t.get)?t.get.bind(n,n):s,a=!m(t)&&m(t.set)?t.set.bind(n):s,l=cr({get:i,set:a});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(l)for(const e in l)zn(l[e],r,n,e);if(c){const e=m(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{ss(t,e[t])}))}function L(e,t){d(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Wn(h,e,"c"),L(wn,p),L(Cn,f),L(In,_),L(En,g),L(_n,v),L(mn,b),L(Pn,R),L(xn,k),L(Rn,S),L(Tn,C),L(kn,E),L(Sn,x),d(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===s&&(e.render=T),null!=N&&(e.inheritAttrs=N),O&&(e.components=O),A&&(e.directives=A)}function Wn(e,t,n){St(d(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function zn(e,t,n,s){const r=s.includes(".")?ln(n,s):()=>n[s];if(g(e)){const n=t[e];m(n)&&rn(r,n)}else if(m(e))rn(r,e.bind(n));else if(y(e))if(d(e))e.forEach((e=>zn(e,t,n,s)));else{const s=m(e.handler)?e.handler.bind(n):t[e.handler];m(s)&&rn(r,s,e)}}function Hn(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:r.length||n||s?(l={},r.length&&r.forEach((e=>$n(l,e,o,!0))),$n(l,t,o)):l=t,y(t)&&i.set(t,l),l}function $n(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&$n(e,i,n,!0),r&&r.forEach((t=>$n(e,t,n,!0)));for(const r in t)if(s&&"expose"===r);else{const s=Gn[r]||n&&n[r];e[r]=s?s(e[r],t[r]):t[r]}return e}const Gn={data:Kn,props:Xn,emits:Xn,methods:Qn,computed:Qn,beforeCreate:Jn,created:Jn,beforeMount:Jn,mounted:Jn,beforeUpdate:Jn,updated:Jn,beforeDestroy:Jn,beforeUnmount:Jn,destroyed:Jn,unmounted:Jn,activated:Jn,deactivated:Jn,errorCaptured:Jn,serverPrefetch:Jn,components:Qn,directives:Qn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=l(Object.create(null),e);for(const s in t)n[s]=Jn(e[s],t[s]);return n},provide:Kn,inject:function(e,t){return Qn(Yn(e),Yn(t))}};function Kn(e,t){return t?e?function(){return l(m(e)?e.call(this,this):e,m(t)?t.call(this,this):t)}:t:e}function Yn(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Jn(e,t){return e?[...new Set([].concat(e,t))]:t}function Qn(e,t){return e?l(Object.create(null),e,t):t}function Xn(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:l(Object.create(null),qn(e),qn(null!=t?t:{})):t}function Zn(){return{app:null,config:{isNativeTag:r,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let es=0;function ts(e,t){return function(n,s=null){m(n)||(n=l({},n)),null==s||y(s)||(s=null);const r=Zn(),i=new Set;let o=!1;const a=r.app={_uid:es++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:pr,get config(){return r.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&m(e.install)?(i.add(e),e.install(a,...t)):m(e)&&(i.add(e),e(a,...t))),a),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),a),component:(e,t)=>t?(r.components[e]=t,a):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,a):r.directives[e],mount(i,l,c){if(!o){const u=Vs(n,s);return u.appContext=r,l&&t?t(u,i):e(u,i,c),o=!0,a._container=i,i.__vue_app__=a,lr(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,a),runWithContext(e){ns=a;try{return e()}finally{ns=null}}};return a}}let ns=null;function ss(e,t){if(Zs){let n=Zs.provides;const s=Zs.parent&&Zs.parent.provides;s===n&&(n=Zs.provides=Object.create(s)),n[e]=t}else;}function rs(e,t,n=!1){const s=Zs||Yt;if(s||ns){const r=s?null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ns._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&m(t)?t.call(s&&s.proxy):t}}function is(e,n,s,r){const[i,o]=e.propsOptions;let a,l=!1;if(n)for(let t in n){if(k(t))continue;const c=n[t];let u;i&&h(i,u=x(t))?o&&o.includes(u)?(a||(a={}))[u]=c:s[u]=c:Kt(e.emitsOptions,t)||t in r&&c===r[t]||(r[t]=c,l=!0)}if(o){const n=pt(s),r=a||t;for(let t=0;t<o.length;t++){const a=o[t];s[a]=os(i,n,a,r[a],e,!h(r,a))}}return l}function os(e,t,n,s,r,i){const o=e[n];if(null!=o){const e=h(o,"default");if(e&&void 0===s){const e=o.default;if(o.type!==Function&&!o.skipFactory&&m(e)){const{propsDefaults:i}=r;n in i?s=i[n]:(tr(r),s=i[n]=e.call(null,t),nr())}else s=e}o[0]&&(i&&!e?s=!1:!o[1]||""!==s&&s!==N(n)||(s=!0))}return s}function as(e,s,r=!1){const i=s.propsCache,o=i.get(e);if(o)return o;const a=e.props,c={},u=[];let p=!1;if(!m(e)){const t=e=>{p=!0;const[t,n]=as(e,s,!0);l(c,t),n&&u.push(...n)};!r&&s.mixins.length&&s.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!a&&!p)return y(e)&&i.set(e,n),n;if(d(a))for(let e=0;e<a.length;e++){const n=x(a[e]);ls(n)&&(c[n]=t)}else if(a)for(const e in a){const t=x(e);if(ls(t)){const n=a[e],s=c[t]=d(n)||m(n)?{type:n}:l({},n);if(s){const e=hs(Boolean,s.type),n=hs(String,s.type);s[0]=e>-1,s[1]=n<0||e<n,(e>-1||h(s,"default"))&&u.push(t)}}}const f=[c,u];return y(e)&&i.set(e,f),f}function ls(e){return"$"!==e[0]}function cs(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function us(e,t){return cs(e)===cs(t)}function hs(e,t){return d(t)?t.findIndex((t=>us(t,e))):m(t)&&us(t,e)?0:-1}const ds=e=>"_"===e[0]||"$stable"===e,ps=e=>d(e)?e.map(Hs):[Hs(e)],fs=(e,t,n)=>{if(t._n)return t;const s=Xt(((...e)=>ps(t(...e))),n);return s._c=!1,s},_s=(e,t,n)=>{const s=e._ctx;for(const n in e){if(ds(n))continue;const r=e[n];if(m(r))t[n]=fs(0,r,s);else if(null!=r){const e=ps(r);t[n]=()=>e}}},ms=(e,t)=>{const n=ps(t);e.slots.default=()=>n},gs=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=pt(t),M(t,"_",n)):_s(t,e.slots={})}else e.slots={},t&&ms(e,t);M(e.slots,Us,1)},vs=(e,n,s)=>{const{vnode:r,slots:i}=e;let o=!0,a=t;if(32&r.shapeFlag){const e=n._;e?s&&1===e?o=!1:(l(i,n),s||1!==e||delete i._):(o=!n.$stable,_s(n,i)),a=n}else n&&(ms(e,n),a={default:1});if(o)for(const e in i)ds(e)||e in a||delete i[e]};function ys(e,n,s,r,i=!1){if(d(e))return void e.forEach(((e,t)=>ys(e,n&&(d(n)?n[t]:n),s,r,i)));if(pn(r)&&!i)return;const o=4&r.shapeFlag?lr(r.component)||r.component.proxy:r.el,a=i?null:o,{i:l,r:u}=e,p=n&&n.r,f=l.refs===t?l.refs={}:l.refs,_=l.setupState;if(null!=p&&p!==u&&(g(p)?(f[p]=null,h(_,p)&&(_[p]=null)):yt(p)&&(p.value=null)),m(u))kt(u,l,12,[a,f]);else{const t=g(u),n=yt(u);if(t||n){const r=()=>{if(e.f){const n=t?h(_,u)?_[u]:f[u]:u.value;i?d(n)&&c(n,o):d(n)?n.includes(o)||n.push(o):t?(f[u]=[o],h(_,u)&&(_[u]=f[u])):(u.value=[o],e.k&&(f[e.k]=u.value))}else t?(f[u]=a,h(_,u)&&(_[u]=a)):n&&(u.value=a,e.k&&(f[e.k]=a))};a?(r.id=-1,bs(r,s)):r()}}}const bs=function(e,t){var n;t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):(d(n=e)?At.push(...n):Dt&&Dt.includes(n,n.allowRecurse?Lt+1:Lt)||At.push(n),qt())};function ws(e){return function(e,r){j().__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:d,setElementText:p,parentNode:f,nextSibling:_,setScopeId:m=s,insertStaticContent:g}=e,v=(e,t,n,s=null,r=null,i=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ms(e,t)&&(s=ee(e),K(e,r,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ts:y(e,t,n,s);break;case ks:w(e,t,n,s);break;case Ss:null==e&&C(t,n,s,o);break;case Es:U(e,t,n,s,r,i,o,a,l);break;default:1&h?T(e,t,n,s,r,i,o,a,l):6&h?F(e,t,n,s,r,i,o,a,l):(64&h||128&h)&&c.process(e,t,n,s,r,i,o,a,l,ne)}null!=u&&r&&ys(u,e&&e.ref,i,t||e,!t)},y=(e,t,n,s)=>{if(null==e)i(t.el=c(t.children),n,s);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,s)=>{null==e?i(t.el=u(t.children||""),n,s):t.el=e.el},C=(e,t,n,s)=>{[e.el,e.anchor]=g(e.children,t,n,s,e.el,e.anchor)},I=({el:e,anchor:t},n,s)=>{let r;for(;e&&e!==t;)r=_(e),i(e,n,s),e=r;i(t,n,s)},E=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=_(e),o(e),e=n;o(t)},T=(e,t,n,s,r,i,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,s,r,i,o,a,l):O(e,t,r,i,o,a,l)},S=(e,t,n,s,r,o,c,u)=>{let h,d;const{type:f,props:_,shapeFlag:m,transition:g,dirs:v}=e;if(h=e.el=l(e.type,o,_&&_.is,_),8&m?p(h,e.children):16&m&&P(e.children,h,null,s,r,o&&"foreignObject"!==f,c,u),v&&hn(e,null,s,"created"),R(h,e,e.scopeId,c,s),_){for(const t in _)"value"===t||k(t)||a(h,t,null,_[t],o,e.children,s,r,X);"value"in _&&a(h,"value",null,_.value),(d=_.onVnodeBeforeMount)&&Ks(d,s,e)}v&&hn(e,null,s,"beforeMount");const y=(!r||r&&!r.pendingBranch)&&g&&!g.persisted;y&&g.beforeEnter(h),i(h,t,n),((d=_&&_.onVnodeMounted)||y||v)&&bs((()=>{d&&Ks(d,s,e),y&&g.enter(h),v&&hn(e,null,s,"mounted")}),r)},R=(e,t,n,s,r)=>{if(n&&m(e,n),s)for(let t=0;t<s.length;t++)m(e,s[t]);if(r){if(t===r.subTree){const t=r.vnode;R(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},P=(e,t,n,s,r,i,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?$s(e[c]):Hs(e[c]);v(null,l,t,n,s,r,i,o,a)}},O=(e,n,s,r,i,o,l)=>{const c=n.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=n;u|=16&e.patchFlag;const f=e.props||t,_=n.props||t;let m;s&&Cs(s,!1),(m=_.onVnodeBeforeUpdate)&&Ks(m,s,n,e),d&&hn(n,e,s,"beforeUpdate"),s&&Cs(s,!0);const g=i&&"foreignObject"!==n.type;if(h?A(e.dynamicChildren,h,c,s,r,g,o):l||z(e,n,c,null,s,r,g,o,!1),u>0){if(16&u)D(c,n,f,_,s,r,i);else if(2&u&&f.class!==_.class&&a(c,"class",null,_.class,i),4&u&&a(c,"style",f.style,_.style,i),8&u){const t=n.dynamicProps;for(let n=0;n<t.length;n++){const o=t[n],l=f[o],u=_[o];u===l&&"value"!==o||a(c,o,l,u,i,e.children,s,r,X)}}1&u&&e.children!==n.children&&p(c,n.children)}else l||null!=h||D(c,n,f,_,s,r,i);((m=_.onVnodeUpdated)||d)&&bs((()=>{m&&Ks(m,s,n,e),d&&hn(n,e,s,"updated")}),r)},A=(e,t,n,s,r,i,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Es||!Ms(l,c)||70&l.shapeFlag)?f(l.el):n;v(l,c,u,null,s,r,i,o,!0)}},D=(e,n,s,r,i,o,l)=>{if(s!==r){if(s!==t)for(const t in s)k(t)||t in r||a(e,t,s[t],null,l,n.children,i,o,X);for(const t in r){if(k(t))continue;const c=r[t],u=s[t];c!==u&&"value"!==t&&a(e,t,u,c,l,n.children,i,o,X)}"value"in r&&a(e,"value",s.value,r.value)}},U=(e,t,n,s,r,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(l=l?l.concat(_):_),null==e?(i(h,n,s),i(d,n,s),P(t.children,n,d,r,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(A(e.dynamicChildren,f,n,r,o,a,l),(null!=t.key||r&&t===r.subTree)&&Is(e,t,!0)):z(e,t,n,d,r,o,a,l,u)},F=(e,t,n,s,r,i,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,s,o,l):q(t,n,s,r,i,o,l):V(e,t,l)},q=(e,n,s,r,i,o,a)=>{const l=e.component=function(e,n,s){const r=e.type,i=(n?n.appContext:e.appContext)||Ys,o={uid:Js++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Z(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:as(r,i),emitsOptions:Gt(r,i),emit:null,emitted:null,propsDefaults:t,inheritAttrs:r.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};o.ctx={_:o},o.root=n?n.root:o,o.emit=$t.bind(null,o),e.ce&&e.ce(o);return o}(e,r,i);if(fn(e)&&(l.ctx.renderer=ne),function(e,t=!1){ir=t;const{props:n,children:s}=e.vnode,r=sr(e);(function(e,t,n,s=!1){const r={},i={};M(i,Us,1),e.propsDefaults=Object.create(null),is(e,t,r,i);for(const t in e.propsOptions[0])t in r||(r[t]=void 0);n?e.props=s?r:ot(r):e.type.props?e.props=r:e.props=i,e.attrs=i})(e,n,r,t),gs(e,s);const i=r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ft(new Proxy(e.ctx,jn));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(me(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;tr(e),fe();const r=kt(s,e,0,[e.props,n]);if(_e(),nr(),b(r)){if(r.then(nr,nr),t)return r.then((n=>{or(e,n,t)})).catch((t=>{Rt(t,e,0)}));e.asyncDep=r}else or(e,r,t)}else ar(e,t)}(e,t):void 0;ir=!1}(l),l.asyncDep){if(i&&i.registerDep(l,B),!e.el){const e=l.subTree=Vs(ks);w(null,e,n,s)}}else B(l,e,n,s,i,o,a)},V=(e,t,n)=>{const s=t.component=e.component;if(function(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||s!==o&&(s?!o||nn(s,o,c):!!o);if(1024&l)return!0;if(16&l)return s?nn(s,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==s[n]&&!Kt(c,n))return!0}}return!1}(e,t,n)){if(s.asyncDep&&!s.asyncResolved)return void W(s,t,n);s.next=t,function(e){const t=Nt.indexOf(e);t>Ot&&Nt.splice(t,1)}(s.update),s.update()}else t.el=e.el,s.vnode=t},B=(e,t,n,s,r,i,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:s,u:a,parent:l,vnode:c}=e,u=n;Cs(e,!1),n?(n.el=c.el,W(e,n,o)):n=c,s&&L(s),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Ks(t,l,n,c),Cs(e,!0);const h=Zt(e),d=e.subTree;e.subTree=h,v(d,h,f(d.el),ee(d),e,r,i),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&bs(a,r),(t=n.props&&n.props.onVnodeUpdated)&&bs((()=>Ks(t,l,n,c)),r)}else{let o;const{el:a,props:l}=t,{bm:c,m:u,parent:h}=e,d=pn(t);if(Cs(e,!1),c&&L(c),!d&&(o=l&&l.onVnodeBeforeMount)&&Ks(o,h,t),Cs(e,!0),a&&re){const n=()=>{e.subTree=Zt(e),re(a,e.subTree,e,r,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Zt(e);v(null,o,n,s,e,r,i),t.el=o.el}if(u&&bs(u,r),!d&&(o=l&&l.onVnodeMounted)){const e=t;bs((()=>Ks(o,h,e)),r)}(256&t.shapeFlag||h&&pn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&bs(e.a,r),e.isMounted=!0,t=n=s=null}},l=e.effect=new ue(a,(()=>jt(c)),e.scope),c=e.update=()=>l.run();c.id=e.uid,Cs(e,!0),c()},W=(e,t,n)=>{t.component=e;const s=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=pt(r),[l]=e.propsOptions;let c=!1;if(!(s||o>0)||16&o){let s;is(e,t,r,i)&&(c=!0);for(const i in a)t&&(h(t,i)||(s=N(i))!==i&&h(t,s))||(l?!n||void 0===n[i]&&void 0===n[s]||(r[i]=os(l,a,i,void 0,e,!0)):delete r[i]);if(i!==a)for(const e in i)t&&h(t,e)||(delete i[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let s=0;s<n.length;s++){let o=n[s];if(Kt(e.emitsOptions,o))continue;const u=t[o];if(l)if(h(i,o))u!==i[o]&&(i[o]=u,c=!0);else{const t=x(o);r[t]=os(l,a,t,u,e,!1)}else u!==i[o]&&(i[o]=u,c=!0)}}c&&ve(e,"set","$attrs")}(e,t.props,s,n),vs(e,t.children,n),fe(),Vt(),_e()},z=(e,t,n,s,r,i,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:f}=t;if(d>0){if(128&d)return void $(c,h,n,s,r,i,o,a,l);if(256&d)return void H(c,h,n,s,r,i,o,a,l)}8&f?(16&u&&X(c,r,i),h!==c&&p(n,h)):16&u?16&f?$(c,h,n,s,r,i,o,a,l):X(c,r,i,!0):(8&u&&p(n,""),16&f&&P(h,n,s,r,i,o,a,l))},H=(e,t,s,r,i,o,a,l,c)=>{t=t||n;const u=(e=e||n).length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const n=t[p]=c?$s(t[p]):Hs(t[p]);v(e[p],n,s,null,i,o,a,l,c)}u>h?X(e,i,o,!0,!1,d):P(t,s,r,i,o,a,l,c,d)},$=(e,t,s,r,i,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;for(;u<=d&&u<=p;){const n=e[u],r=t[u]=c?$s(t[u]):Hs(t[u]);if(!Ms(n,r))break;v(n,r,s,null,i,o,a,l,c),u++}for(;u<=d&&u<=p;){const n=e[d],r=t[p]=c?$s(t[p]):Hs(t[p]);if(!Ms(n,r))break;v(n,r,s,null,i,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,n=e<h?t[e].el:r;for(;u<=p;)v(null,t[u]=c?$s(t[u]):Hs(t[u]),s,n,i,o,a,l,c),u++}}else if(u>p)for(;u<=d;)K(e[u],i,o,!0),u++;else{const f=u,_=u,m=new Map;for(u=_;u<=p;u++){const e=t[u]=c?$s(t[u]):Hs(t[u]);null!=e.key&&m.set(e.key,u)}let g,y=0;const b=p-_+1;let w=!1,C=0;const I=new Array(b);for(u=0;u<b;u++)I[u]=0;for(u=f;u<=d;u++){const n=e[u];if(y>=b){K(n,i,o,!0);continue}let r;if(null!=n.key)r=m.get(n.key);else for(g=_;g<=p;g++)if(0===I[g-_]&&Ms(n,t[g])){r=g;break}void 0===r?K(n,i,o,!0):(I[r-_]=u+1,r>=C?C=r:w=!0,v(n,t[r],s,null,i,o,a,l,c),y++)}const E=w?function(e){const t=e.slice(),n=[0];let s,r,i,o,a;const l=e.length;for(s=0;s<l;s++){const l=e[s];if(0!==l){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(I):n;for(g=E.length-1,u=b-1;u>=0;u--){const e=_+u,n=t[e],d=e+1<h?t[e+1].el:r;0===I[u]?v(null,n,s,d,i,o,a,l,c):w&&(g<0||u!==E[g]?G(n,s,d,2):g--)}}},G=(e,t,n,s,r=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,s);if(128&u)return void e.suspense.move(t,n,s);if(64&u)return void a.move(e,t,n,ne);if(a===Es){i(o,t,n);for(let e=0;e<c.length;e++)G(c[e],t,n,s);return void i(e.anchor,t,n)}if(a===Ss)return void I(e,t,n);if(2!==s&&1&u&&l)if(0===s)l.beforeEnter(o),i(o,t,n),bs((()=>l.enter(o)),r);else{const{leave:e,delayLeave:s,afterLeave:r}=l,a=()=>i(o,t,n),c=()=>{e(o,(()=>{a(),r&&r()}))};s?s(o,a,c):c()}else i(o,t,n)},K=(e,t,n,s=!1,r=!1)=>{const{type:i,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&ys(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!pn(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&Ks(_,t,e),6&u)Q(e.component,n,s);else{if(128&u)return void e.suspense.unmount(n,s);p&&hn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,ne,s):c&&(i!==Es||h>0&&64&h)?X(c,t,n,!1,!0):(i===Es&&384&h||!r&&16&u)&&X(l,t,n),s&&Y(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&bs((()=>{_&&Ks(_,t,e),p&&hn(e,null,t,"unmounted")}),n)},Y=e=>{const{type:t,el:n,anchor:s,transition:r}=e;if(t===Es)return void J(n,s);if(t===Ss)return void E(e);const i=()=>{o(n),r&&!r.persisted&&r.afterLeave&&r.afterLeave()};if(1&e.shapeFlag&&r&&!r.persisted){const{leave:t,delayLeave:s}=r,o=()=>t(n,i);s?s(e.el,i,o):o()}else i()},J=(e,t)=>{let n;for(;e!==t;)n=_(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:s,scope:r,update:i,subTree:o,um:a}=e;s&&L(s),r.stop(),i&&(i.active=!1,K(o,e,t,n)),a&&bs(a,t),bs((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,s=!1,r=!1,i=0)=>{for(let o=i;o<e.length;o++)K(e[o],t,n,s,r)},ee=e=>6&e.shapeFlag?ee(e.component.subTree):128&e.shapeFlag?e.suspense.next():_(e.anchor||e.el),te=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Vt(),Bt(),t._vnode=e},ne={p:v,um:K,m:G,r:Y,mt:q,mc:P,pc:z,pbc:A,n:ee,o:e};let se,re;r&&([se,re]=r(ne));return{render:te,hydrate:se,createApp:ts(te,se)}}(e)}function Cs({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Is(e,t,n=!1){const s=e.children,r=t.children;if(d(s)&&d(r))for(let e=0;e<s.length;e++){const t=s[e];let i=r[e];1&i.shapeFlag&&!i.dynamicChildren&&((i.patchFlag<=0||32===i.patchFlag)&&(i=r[e]=$s(r[e]),i.el=t.el),n||Is(t,i)),i.type===Ts&&(i.el=t.el)}}const Es=Symbol.for("v-fgt"),Ts=Symbol.for("v-txt"),ks=Symbol.for("v-cmt"),Ss=Symbol.for("v-stc"),Rs=[];let xs=null;function Ps(e=!1){Rs.push(xs=e?null:[])}let Ns=1;function Os(e){Ns+=e}function As(e){return e.dynamicChildren=Ns>0?xs||n:null,Rs.pop(),xs=Rs[Rs.length-1]||null,Ns>0&&xs&&xs.push(e),e}function Ds(e,t,n,s,r,i){return As(qs(e,t,n,s,r,i,!0))}function Ls(e){return!!e&&!0===e.__v_isVNode}function Ms(e,t){return e.type===t.type&&e.key===t.key}const Us="__vInternal",Fs=({key:e})=>null!=e?e:null,js=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?g(e)||yt(e)||m(e)?{i:Yt,r:e,k:t,f:!!n}:e:null);function qs(e,t=null,n=null,s=0,r=null,i=(e===Es?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fs(t),ref:t&&js(t),scopeId:Jt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yt};return a?(Gs(l,n),128&i&&e.normalize(l)):n&&(l.shapeFlag|=g(n)?8:16),Ns>0&&!o&&xs&&(l.patchFlag>0||6&i)&&32!==l.patchFlag&&xs.push(l),l}const Vs=function(e,t=null,n=null,s=0,r=null,i=!1){e&&e!==An||(e=ks);if(Ls(e)){const s=Bs(e,t,!0);return n&&Gs(s,n),Ns>0&&!i&&xs&&(6&s.shapeFlag?xs[xs.indexOf(e)]=s:xs.push(s)),s.patchFlag|=-2,s}o=e,m(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?dt(e)||Us in e?l({},e):e:null}(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=H(e)),y(n)&&(dt(n)&&!d(n)&&(n=l({},n)),t.style=q(n))}const a=g(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:y(e)?4:m(e)?2:0;return qs(e,t,n,s,r,a,i,!0)};function Bs(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:a}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=H([t.class,s.class]));else if("style"===e)t.style=q([t.style,s.style]);else if(o(e)){const n=t[e],r=s[e];!r||n===r||d(n)&&n.includes(r)||(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=s[e])}return t}(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Fs(l),ref:t&&t.ref?n&&r?d(r)?r.concat(js(t)):[r,js(t)]:js(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Es?-1===i?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bs(e.ssContent),ssFallback:e.ssFallback&&Bs(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ws(e=" ",t=0){return Vs(Ts,null,e,t)}function zs(e="",t=!1){return t?(Ps(),As(Vs(ks,null,e,n,s,!0))):Vs(ks,null,e);var n,s}function Hs(e){return null==e||"boolean"==typeof e?Vs(ks):d(e)?Vs(Es,null,e.slice()):"object"==typeof e?$s(e):Vs(Ts,null,String(e))}function $s(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Bs(e)}function Gs(e,t){let n=0;const{shapeFlag:s}=e;if(null==t)t=null;else if(d(t))n=16;else if("object"==typeof t){if(65&s){const n=t.default;return void(n&&(n._c&&(n._d=!1),Gs(e,n()),n._c&&(n._d=!0)))}{n=32;const s=t._;s||Us in t?3===s&&Yt&&(1===Yt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Yt}}else m(t)?(t={default:t,_ctx:Yt},n=32):(t=String(t),64&s?(n=16,t=[Ws(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ks(e,t,n,s=null){St(e,t,7,[n,s])}const Ys=Zn();let Js=0;let Qs,Xs,Zs=null,er="__VUE_INSTANCE_SETTERS__";(Xs=j()[er])||(Xs=j()[er]=[]),Xs.push((e=>Zs=e)),Qs=e=>{Xs.length>1?Xs.forEach((t=>t(e))):Xs[0](e)};const tr=e=>{Qs(e),e.scope.on()},nr=()=>{Zs&&Zs.scope.off(),Qs(null)};function sr(e){return 4&e.vnode.shapeFlag}let rr,ir=!1;function or(e,t,n){m(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Et(t)),ar(e,n)}function ar(e,t,n){const r=e.type;if(!e.render){if(!t&&rr&&!r.render){const t=r.template||Hn(e).template;if(t){const{isCustomElement:n,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:o}=r,a=l(l({isCustomElement:n,delimiters:i},s),o);r.render=rr(t,a)}}e.render=r.render||s}tr(e),fe(),Bn(e),_e(),nr()}function lr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Et(ft(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Un?Un[n](e):void 0,has:(e,t)=>t in e||t in Un}))}const cr=(e,t)=>function(e,t,n=!1){let r,i;const o=m(e);return o?(r=e,i=s):(r=e.get,i=e.set),new Tt(r,i,o||!i,n)}(e,0,ir);function ur(e,t,n){const s=arguments.length;return 2===s?y(t)&&!d(t)?Ls(t)?Vs(e,null,[t]):Vs(e,t):Vs(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&Ls(n)&&(n=[n]),Vs(e,t,n))}const hr=Symbol.for("v-scx"),dr=()=>rs(hr),pr="3.3.4",fr="undefined"!=typeof document?document:null,_r=fr&&fr.createElement("template"),mr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?fr.createElementNS("http://www.w3.org/2000/svg",e):fr.createElement(e,n?{is:n}:void 0);return"select"===e&&s&&null!=s.multiple&&r.setAttribute("multiple",s.multiple),r},createText:e=>fr.createTextNode(e),createComment:e=>fr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),r!==i&&(r=r.nextSibling););else{_r.innerHTML=s?`<svg>${e}</svg>`:e;const r=_r.content;if(s){const e=r.firstChild;for(;e.firstChild;)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const gr=/\s*!important$/;function vr(e,t,n){if(d(n))n.forEach((n=>vr(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=function(e,t){const n=br[t];if(n)return n;let s=x(t);if("filter"!==s&&s in e)return br[t]=s;s=O(s);for(let n=0;n<yr.length;n++){const r=yr[n]+s;if(r in e)return br[t]=r}return t}(e,t);gr.test(n)?e.setProperty(N(s),n.replace(gr,""),"important"):e[s]=n}}const yr=["Webkit","Moz","ms"],br={};const wr="http://www.w3.org/1999/xlink";function Cr(e,t,n,s){e.addEventListener(t,n,s)}function Ir(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[n,a]=function(e){let t;if(Er.test(e)){let n;for(t={};n=e.match(Er);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):N(e.slice(2));return[n,t]}(t);if(s){const o=i[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();St(function(e,t){if(d(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=Sr(),n}(s,r);Cr(e,n,o,a)}else o&&(!function(e,t,n,s){e.removeEventListener(t,n,s)}(e,n,o,a),i[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;let Tr=0;const kr=Promise.resolve(),Sr=()=>Tr||(kr.then((()=>Tr=0)),Tr=Date.now());const Rr=/^on[a-z]/;const xr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return d(t)?e=>L(t,e):t};function Pr(e){e.target.composing=!0}function Nr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Or={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=xr(r);const i=s||r.props&&"number"===r.props.type;Cr(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=U(s)),e._assign(s)})),n&&Cr(e,"change",(()=>{e.value=e.value.trim()})),t||(Cr(e,"compositionstart",Pr),Cr(e,"compositionend",Nr),Cr(e,"change",Nr))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=xr(i),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(s&&e.value.trim()===t)return;if((r||"number"===e.type)&&U(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Ar={deep:!0,created(e,t,n){e._assign=xr(n),Cr(e,"change",(()=>{const t=e._modelValue,n=Mr(e),s=e.checked,r=e._assign;if(d(t)){const e=Y(t,n),i=-1!==e;if(s&&!i)r(t.concat(n));else if(!s&&i){const n=[...t];n.splice(e,1),r(n)}}else if(f(t)){const e=new Set(t);s?e.add(n):e.delete(n),r(e)}else r(Ur(e,s))}))},mounted:Dr,beforeUpdate(e,t,n){e._assign=xr(n),Dr(e,t,n)}};function Dr(e,{value:t,oldValue:n},s){e._modelValue=t,d(t)?e.checked=Y(t,s.props.value)>-1:f(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=K(t,Ur(e,!0)))}const Lr={created(e,{value:t},n){e.checked=K(t,n.props.value),e._assign=xr(n),Cr(e,"change",(()=>{e._assign(Mr(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e._assign=xr(s),t!==n&&(e.checked=K(t,s.props.value))}};function Mr(e){return"_value"in e?e._value:e.value}function Ur(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Fr=["ctrl","shift","alt","meta"],jr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Fr.some((n=>e[`${n}Key`]&&!t.includes(n)))},qr=(e,t)=>(n,...s)=>{for(let e=0;e<t.length;e++){const s=jr[t[e]];if(s&&s(n,t))return}return e(n,...s)},Vr={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Br(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),Br(e,!0),s.enter(e)):s.leave(e,(()=>{Br(e,!1)})):Br(e,t))},beforeUnmount(e,{value:t}){Br(e,t)}};function Br(e,t){e.style.display=t?e._vod:"none"}const Wr=l({patchProp:(e,t,n,s,r=!1,i,l,c,u)=>{"class"===t?function(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,r):"style"===t?function(e,t,n){const s=e.style,r=g(n);if(n&&!r){if(t&&!g(t))for(const e in t)null==n[e]&&vr(s,e,"");for(const e in n)vr(s,e,n[e])}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}(e,n,s):o(t)?a(t)||Ir(e,t,0,s,l):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,s){if(s)return"innerHTML"===t||"textContent"===t||!!(t in e&&Rr.test(t)&&m(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Rr.test(t)&&g(n))return!1;return t in e}(e,t,s,r))?function(e,t,n,s,r,i,o){if("innerHTML"===t||"textContent"===t)return s&&o(s,r,i),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const s=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==s&&(e.value=s),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=G(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch(e){}l&&e.removeAttribute(t)}(e,t,s,i,l,c,u):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,n,s,r){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(wr,t.slice(6,t.length)):e.setAttributeNS(wr,t,n);else{const s=$(t);null==n||s&&!G(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}(e,t,s,r))}},mr);let zr;var Hr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAArCAYAAADyijE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAORJREFUeNrs2NEJgzAQBuA0dICO0G6QEcwGXaEjdIJmA1doN+gGcYSO4Ahu0N5B8iLkVDCnhT8QIkRyn+cZiMbsqB3yRQjB0XCqFKen9fslmG/Fhx6oe4rxWYJh/WtlyGMuaIzpaPRrStK6QyoBEWSVapOD3xIopvrcDMMZek6BrOanOwWy2nuJBFLHSKCjUnxHAWNh/8kgr4HJARvhHp6/amAunBkpa9RblddE6efMdMK82bSASw0YYIABBhhggAEGGGCAAQaYP8KMj7dnOm42ygZXxFCPe8jM3dT7KT2nvX8CDAAAAEh+BRIlOQAAAABJRU5ErkJggg==";function $r(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const Gr="function"==typeof Proxy,Kr="devtools-plugin:setup";let Yr,Jr;function Qr(){return void 0!==Yr||("undefined"!=typeof window&&window.performance?(Yr=!0,Jr=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(Yr=!0,Jr=global.perf_hooks.performance):Yr=!1),Yr?Jr.now():Date.now();var e}class Xr{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const s=e.settings[t];n[t]=s.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const e=localStorage.getItem(s),t=JSON.parse(e);Object.assign(r,t)}catch(e){}this.fallbacks={getSettings:()=>r,setSettings(e){try{localStorage.setItem(s,JSON.stringify(e))}catch(e){}r=e},now:()=>Qr()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function Zr(e,t){const n=e,s=$r(),r=$r().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=Gr&&n.enableEarlyProxy;if(!r||!s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new Xr(n,r):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else r.emit(Kr,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var ei="store";function ti(e){return void 0===e&&(e=null),rs(null!==e?e:ei)}function ni(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function si(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function ri(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;oi(e,n,[],e._modules.root,!0),ii(e,n,t)}function ii(e,t,n){var s=e._state,r=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={},a={},l=new Z(!0);l.run((function(){ni(i,(function(t,n){o[n]=function(e,t){return function(){return e(t)}}(t,e),a[n]=cr((function(){return o[n]()})),Object.defineProperty(e.getters,n,{get:function(){return a[n].value},enumerable:!0})}))})),e._state=it({data:t}),e._scope=l,e.strict&&function(e){rn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),s&&n&&e._withCommit((function(){s.data=null})),r&&r.stop()}function oi(e,t,n,s,r){var i=!n.length,o=e._modules.getNamespace(n);if(s.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=s),!i&&!r){var a=li(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=s.state}))}var c=s.context=function(e,t,n){var s=""===t,r={dispatch:s?e.dispatch:function(n,s,r){var i=ci(n,s,r),o=i.payload,a=i.options,l=i.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:s?e.commit:function(n,s,r){var i=ci(n,s,r),o=i.payload,a=i.options,l=i.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:s?function(){return e.getters}:function(){return ai(e,t)}},state:{get:function(){return li(e.state,n)}}}),r}(e,o,n);s.forEachMutation((function(t,n){!function(e,t,n,s){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){n.call(e,s.state,t)}))}(e,o+n,t,c)})),s.forEachAction((function(t,n){var s=t.root?n:o+n,r=t.handler||t;!function(e,t,n,s){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r,i=n.call(e,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:e.getters,rootState:e.state},t);return(r=i)&&"function"==typeof r.then||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}(e,s,r,c)})),s.forEachGetter((function(t,n){!function(e,t,n,s){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(s.state,s.getters,e.state,e.getters)}}(e,o+n,t,c)})),s.forEachChild((function(s,i){oi(e,t,n.concat(i),s,r)}))}function ai(e,t){if(!e._makeLocalGettersCache[t]){var n={},s=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,s)===t){var i=r.slice(s);Object.defineProperty(n,i,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function li(e,t){return t.reduce((function(e,t){return e[t]}),e)}function ci(e,t,n){var s;return null!==(s=e)&&"object"==typeof s&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var ui="vuex:mutations",hi="vuex:actions",di="vuex",pi=0;function fi(e,t){Zr({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:ui,label:"Vuex Mutations",color:_i}),n.addTimelineLayer({id:hi,label:"Vuex Actions",color:_i}),n.addInspector({id:di,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===di)if(n.filter){var s=[];yi(s,t._modules.root,n.filter,""),n.rootNodes=s}else n.rootNodes=[vi(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===di){var s=n.nodeId;ai(t,s),n.state=function(e,t,n){t="root"===n?t:t[n];var s=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(s.length){var i=function(e){var t={};return Object.keys(e).forEach((function(n){var s=n.split("/");if(s.length>1){var r=t,i=s.pop();s.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[i]=bi((function(){return e[n]}))}else t[n]=bi((function(){return e[n]}))})),t}(t);r.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?gi(e):e,editable:!1,value:bi((function(){return i[e]}))}}))}return r}((r=t._modules,(o=(i=s).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var s=e[t];if(!s)throw new Error('Missing module "'+t+'" for path "'+i+'".');return n===o.length-1?s:s._children}),"root"===i?r:r.root._children)),"root"===s?t.getters:t._makeLocalGettersCache,s)}var r,i,o})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===di){var s=n.nodeId,r=n.path;"root"!==s&&(r=s.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var s={};e.payload&&(s.payload=e.payload),s.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(di),n.sendInspectorState(di),n.addTimelineEvent({layerId:ui,event:{time:Date.now(),title:e.type,data:s}})})),t.subscribeAction({before:function(e,t){var s={};e.payload&&(s.payload=e.payload),e._id=pi++,e._time=Date.now(),s.state=t,n.addTimelineEvent({layerId:hi,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:s}})},after:function(e,t){var s={},r=Date.now()-e._time;s.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(s.payload=e.payload),s.state=t,n.addTimelineEvent({layerId:hi,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:s}})}})}))}var _i=8702998,mi={label:"namespaced",textColor:16777215,backgroundColor:6710886};function gi(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function vi(e,t){return{id:t||"root",label:gi(t),tags:e.namespaced?[mi]:[],children:Object.keys(e._children).map((function(n){return vi(e._children[n],t+n+"/")}))}}function yi(e,t,n,s){s.includes(n)&&e.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:t.namespaced?[mi]:[]}),Object.keys(t._children).forEach((function(r){yi(e,t._children[r],n,s+r+"/")}))}function bi(e){try{return e()}catch(e){return e}}var wi=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Ci={namespaced:{configurable:!0}};Ci.namespaced.get=function(){return!!this._rawModule.namespaced},wi.prototype.addChild=function(e,t){this._children[e]=t},wi.prototype.removeChild=function(e){delete this._children[e]},wi.prototype.getChild=function(e){return this._children[e]},wi.prototype.hasChild=function(e){return e in this._children},wi.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},wi.prototype.forEachChild=function(e){ni(this._children,e)},wi.prototype.forEachGetter=function(e){this._rawModule.getters&&ni(this._rawModule.getters,e)},wi.prototype.forEachAction=function(e){this._rawModule.actions&&ni(this._rawModule.actions,e)},wi.prototype.forEachMutation=function(e){this._rawModule.mutations&&ni(this._rawModule.mutations,e)},Object.defineProperties(wi.prototype,Ci);var Ii=function(e){this.register([],e,!1)};function Ei(e,t,n){if(t.update(n),n.modules)for(var s in n.modules){if(!t.getChild(s))return;Ei(e.concat(s),t.getChild(s),n.modules[s])}}Ii.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Ii.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},Ii.prototype.update=function(e){Ei([],this.root,e)},Ii.prototype.register=function(e,t,n){var s=this;void 0===n&&(n=!0);var r=new wi(t,n);0===e.length?this.root=r:this.get(e.slice(0,-1)).addChild(e[e.length-1],r);t.modules&&ni(t.modules,(function(t,r){s.register(e.concat(r),t,n)}))},Ii.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],s=t.getChild(n);s&&s.runtime&&t.removeChild(n)},Ii.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Ti=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var s=e.strict;void 0===s&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ii(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=r;var i=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(i,e,t)},this.commit=function(e,t,n){return a.call(i,e,t,n)},this.strict=s;var l=this._modules.root.state;oi(this,l,[],this._modules.root),ii(this,l),n.forEach((function(e){return e(t)}))},ki={state:{configurable:!0}};Ti.prototype.install=function(e,t){e.provide(t||ei,this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&fi(e,this)},ki.state.get=function(){return this._state.data},ki.state.set=function(e){},Ti.prototype.commit=function(e,t,n){var s=this,r=ci(e,t,n),i=r.type,o=r.payload,a={type:i,payload:o},l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,s.state)})))},Ti.prototype.dispatch=function(e,t){var n=this,s=ci(e,t),r=s.type,i=s.payload,o={type:r,payload:i},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(e){}var l=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(e){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(e){}t(e)}))}))}},Ti.prototype.subscribe=function(e,t){return si(e,this._subscribers,t)},Ti.prototype.subscribeAction=function(e,t){return si("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Ti.prototype.watch=function(e,t,n){var s=this;return rn((function(){return e(s.state,s.getters)}),t,Object.assign({},n))},Ti.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Ti.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),oi(this,this.state,e,this._modules.get(e),n.preserveState),ii(this,this.state)},Ti.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete li(t.state,e.slice(0,-1))[e[e.length-1]]})),ri(this)},Ti.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Ti.prototype.hotUpdate=function(e){this._modules.update(e),ri(this,!0)},Ti.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Ti.prototype,ki);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Si=!1,Ri="${JSCORE_VERSION}",xi=function(e,t){if(!e)throw Pi(t)},Pi=function(e){return new Error("Firebase Database ("+Ri+") INTERNAL ASSERT FAILED: "+e)},Ni=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Oi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),s.push(n[c],n[u],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ni(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==o||null==a)throw new Ai;const l=r<<2|i>>4;if(s.push(l),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Di=function(e){const t=Ni(e);return Oi.encodeByteArray(t,!0)},Li=function(e){return Di(e).replace(/\./g,"")},Mi=function(e){try{return Oi.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Ui(e){return Fi(void 0,e)}function Fi(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Fi(e[n],t[n]));return e}
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
const ji=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,qi=()=>{try{return ji()||(()=>{if("undefined"==typeof process||void 0==={NODE_ENV:"production"})return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Mi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Vi=e=>{var t,n;return null===(n=null===(t=qi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Bi=e=>{const t=Vi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Wi=()=>{var e;return null===(e=qi())||void 0===e?void 0:e.config},zi=e=>{var t;return null===(t=qi())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function $i(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Li(JSON.stringify({alg:"none",type:"JWT"})),Li(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ki(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gi())}function Yi(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ji(){return!0===Si}class Qi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Zi,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new Qi(s,o,n)}}const Zi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const no=function(e){let t={},n={},s={},r="";try{const i=e.split(".");t=eo(Mi(i[0])||""),n=eo(Mi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:s,signature:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function so(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ro(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function io(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oo(e,t,n){const s={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(s[r]=t.call(n,e[r],r,e));return s}function ao(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(lo(n)&&lo(i)){if(!ao(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function lo(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function uo(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function ho(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let s=0;s<16;s++)n[s]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let s=0;s<16;s++)n[s]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let s,r,i=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(s=l^o&(a^l),r=1518500249):(s=o^a^l,r=1859775393):e<60?(s=o&a|l&(o|a),r=2400959708):(s=o^a^l,r=3395469782);const t=(i<<5|i>>>27)+s+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let s=0;const r=this.buf_;let i=this.inbuf_;for(;s<t;){if(0===i)for(;s<=n;)this.compress_(e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(r[i]=e.charCodeAt(s),++i,++s,i===this.blockSize){this.compress_(r),i=0;break}}else for(;s<t;)if(r[i]=e[s],++i,++s,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let s=24;s>=0;s-=8)e[n]=this.chain_[t]>>s&255,++n;return e}}class fo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=_o),void 0===s.error&&(s.error=_o),void 0===s.complete&&(s.complete=_o);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _o(){}function mo(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=function(e){let t=0;for(let n=0;n<e.length;n++){const s=e.charCodeAt(n);s<128?t++:s<2048?t+=2:s>=55296&&s<=56319?(t+=4,n++):t+=3}return t};
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
function vo(e){return e&&e._delegate?e._delegate:e}class yo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class wo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Hi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:bo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=bo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=bo){return this.instances.has(e)}getOptions(e=bo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===bo?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e=bo){return this.component?this.component.multipleInstances?e:bo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Co{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io,Eo;(Eo=Io||(Io={}))[Eo.DEBUG=0]="DEBUG",Eo[Eo.VERBOSE=1]="VERBOSE",Eo[Eo.INFO=2]="INFO",Eo[Eo.WARN=3]="WARN",Eo[Eo.ERROR=4]="ERROR",Eo[Eo.SILENT=5]="SILENT";const To={debug:Io.DEBUG,verbose:Io.VERBOSE,info:Io.INFO,warn:Io.WARN,error:Io.ERROR,silent:Io.SILENT},ko=Io.INFO,So={[Io.DEBUG]:"log",[Io.VERBOSE]:"log",[Io.INFO]:"info",[Io.WARN]:"warn",[Io.ERROR]:"error"},Ro=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=So[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class xo{constructor(e){this.name=e,this._logLevel=ko,this._logHandler=Ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Io))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?To[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Io.DEBUG,...e),this._logHandler(this,Io.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Io.VERBOSE,...e),this._logHandler(this,Io.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Io.INFO,...e),this._logHandler(this,Io.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Io.WARN,...e),this._logHandler(this,Io.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Io.ERROR,...e),this._logHandler(this,Io.ERROR,...e)}}const Po=(e,t)=>t.some((t=>e instanceof t));let No,Oo;const Ao=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Mo=new WeakMap,Uo=new WeakMap;let Fo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Do.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Lo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vo(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function jo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Oo||(Oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Bo(this),t),Vo(Ao.get(this))}:function(...t){return Vo(e.apply(Bo(this),t))}:function(t,...n){const s=e.call(Bo(this),t,...n);return Lo.set(s,t.sort?t.sort():[t]),Vo(s)}}function qo(e){return"function"==typeof e?jo(e):(e instanceof IDBTransaction&&function(e){if(Do.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));Do.set(e,t)}(e),Po(e,No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Fo):e)}function Vo(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(Vo(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Ao.set(t,e)})).catch((()=>{})),Uo.set(t,e),t}(e);if(Mo.has(e))return Mo.get(e);const t=qo(e);return t!==e&&(Mo.set(e,t),Uo.set(t,e)),t}const Bo=e=>Uo.get(e);const Wo=["get","getKey","getAll","getAllKeys","count"],zo=["put","add","delete","clear"],Ho=new Map;function $o(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ho.get(t))return Ho.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=zo.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!Wo.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return Ho.set(t,i),i}Fo=(e=>({...e,get:(t,n,s)=>$o(t,n)||e.get(t,n,s),has:(t,n)=>!!$o(t,n)||e.has(t,n)}))(Fo);
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
class Go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ko="@firebase/app",Yo="0.9.13",Jo=new xo("@firebase/app"),Qo="[DEFAULT]",Xo={[Ko]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Zo=new Map,ea=new Map;function ta(e,t){try{e.container.addComponent(t)}catch(n){Jo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function na(e){const t=e.name;if(ea.has(t))return Jo.debug(`There were multiple attempts to register component ${t}.`),!1;ea.set(t,e);for(const t of Zo.values())ta(t,e);return!0}function sa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const ra=new Xi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ia{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ra.create("app-deleted",{appName:this._name})}}
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
 */const oa="9.23.0";function aa(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw ra.create("bad-app-name",{appName:String(r)});if(n||(n=Wi()),!n)throw ra.create("no-options");const i=Zo.get(r);if(i){if(ao(n,i.options)&&ao(s,i.config))return i;throw ra.create("duplicate-app",{appName:r})}const o=new Co(r);for(const e of ea.values())o.addComponent(e);const a=new ia(n,s,o);return Zo.set(r,a),a}function la(e=Qo){const t=Zo.get(e);if(!t&&e===Qo&&Wi())return aa();if(!t)throw ra.create("no-app",{appName:e});return t}function ca(e,t,n){var s;let r=null!==(s=Xo[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Jo.warn(e.join(" "))}na(new yo(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
 */const ua="firebase-heartbeat-database",ha=1,da="firebase-heartbeat-store";let pa=null;function fa(){return pa||(pa=function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Vo(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(Vo(o.result),e.oldVersion,e.newVersion,Vo(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(ua,ha,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(da)}}).catch((e=>{throw ra.create("idb-open",{originalErrorMessage:e.message})}))),pa}async function _a(e,t){try{const n=(await fa()).transaction(da,"readwrite"),s=n.objectStore(da);await s.put(t,ma(e)),await n.done}catch(e){if(e instanceof Qi)Jo.warn(e.message);else{const t=ra.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Jo.warn(t.message)}}}function ma(e){return`${e.name}!${e.options.appId}`}
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
 */class ga{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ya(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=va();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=va(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),ba(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ba(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=Li(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function va(){return(new Date).toISOString().substring(0,10)}class ya{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await fa();return await t.transaction(da).objectStore(da).get(ma(e))}catch(e){if(e instanceof Qi)Jo.warn(e.message);else{const t=ra.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Jo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _a(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _a(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ba(e){return Li(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var wa;wa="",na(new yo("platform-logger",(e=>new Go(e)),"PRIVATE")),na(new yo("heartbeat",(e=>new ga(e)),"PRIVATE")),ca(Ko,Yo,wa),ca(Ko,Yo,"esm2017"),ca("fire-js","");const Ca="@firebase/database",Ia="0.14.4";
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
let Ea="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ta{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),to(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:eo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return so(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ta(t)}}catch(e){}return new ka},Ra=Sa("localStorage"),xa=Sa("sessionStorage"),Pa=new xo("@firebase/database"),Na=function(){let e=1;return function(){return e++}}(),Oa=function(e){const t=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);if(r>=55296&&r<=56319){const t=r-55296;s++,xi(s<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(s)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new po;n.update(t);const s=n.digest();return Oi.encodeByteArray(s)},Aa=function(...e){let t="";for(let n=0;n<e.length;n++){const s=e[n];Array.isArray(s)||s&&"object"==typeof s&&"number"==typeof s.length?t+=Aa.apply(null,s):t+="object"==typeof s?to(s):s,t+=" "}return t};let Da=null,La=!0;const Ma=function(...e){var t,n;if(!0===La&&(La=!1,null===Da&&!0===xa.get("logging_enabled")&&(t=!0,xi(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Pa.logLevel=Io.VERBOSE,Da=Pa.log.bind(Pa),n&&xa.set("logging_enabled",!0)):"function"==typeof t?Da=t:(Da=null,xa.remove("logging_enabled")))),Da){const t=Aa.apply(null,e);Da(t)}},Ua=function(e){return function(...t){Ma(e,...t)}},Fa=function(...e){const t="FIREBASE INTERNAL ERROR: "+Aa(...e);Pa.error(t)},ja=function(...e){const t=`FIREBASE FATAL ERROR: ${Aa(...e)}`;throw Pa.error(t),new Error(t)},qa=function(...e){const t="FIREBASE WARNING: "+Aa(...e);Pa.warn(t)},Va=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ba="[MIN_NAME]",Wa="[MAX_NAME]",za=function(e,t){if(e===t)return 0;if(e===Ba||t===Wa)return-1;if(t===Ba||e===Wa)return 1;{const n=Xa(e),s=Xa(t);return null!==n?null!==s?n-s==0?e.length-t.length:n-s:-1:null!==s?1:e<t?-1:1}},Ha=function(e,t){return e===t?0:e<t?-1:1},$a=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+to(t))},Ga=function(e){if("object"!=typeof e||null===e)return to(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let s=0;s<t.length;s++)0!==s&&(n+=","),n+=to(t[s]),n+=":",n+=Ga(e[t[s]]);return n+="}",n},Ka=function(e,t){const n=e.length;if(n<=t)return[e];const s=[];for(let r=0;r<n;r+=t)r+t>n?s.push(e.substring(r,n)):s.push(e.substring(r,r+t));return s};function Ya(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ja=function(e){xi(!Va(e),"Invalid JSON number");const t=1023;let n,s,r,i,o;0===e?(s=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),t),s=i+t,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(s=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Qa=new RegExp("^-?(0*)\\d{1,10}$"),Xa=function(e){if(Qa.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Za=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw qa("Exception was thrown by user callback.",t),e}),Math.floor(0))}},el=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
 */class nl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ma("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qa(e)}}class sl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}sl.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const rl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,il="ac",ol="websocket",al="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ll{constructor(e,t,n,s,r=!1,i="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ra.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cl(e,t,n){let s;if(xi("string"==typeof t,"typeof type must == string"),xi("object"==typeof n,"typeof params must == object"),t===ol)s=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==al)throw new Error("Unknown connection type: "+t);s=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ya(n,((e,t)=>{r.push(e+"="+t)})),s+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.counters_={}}incrementCounter(e,t=1){so(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ui(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l="start";class ml{constructor(e,t,n,s,r,i,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=pl(t),this.urlFn=e=>(this.appCheckToken&&(e[il]=this.appCheckToken),cl(t,al,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new gl(((...e)=>{const[t,n,s,r,i]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===_l)this.id=n,this.password=s;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[_l]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[il]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&rl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ml.forceAllow_=!0}static forceDisallow(){ml.forceDisallow_=!0}static isAvailable(){return!!ml.forceAllow_||!(ml.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Di(t),s=Ka(n,1840);for(let e=0;e<s.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=to(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gl{constructor(e,t,n,s){this.onDisconnect=n,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Na(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=gl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const s="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){Ma("frame writing exception"),e.stack&&Ma(e.stack),Ma(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ma("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",s=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+s+"="+e.seg+"&ts"+s+"="+e.ts+"&d"+s+"="+e.d,s++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(s),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ma("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl=null;"undefined"!=typeof MozWebSocket?vl=MozWebSocket:"undefined"!=typeof WebSocket&&(vl=WebSocket);class yl{constructor(e,t,n,s,r,i,o){this.connId=e,this.applicationId=n,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=pl(t),this.connURL=yl.connectionURL_(t,i,o,s,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,s,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&rl.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),s&&(i[il]=s),r&&(i.p=r),cl(e,ol,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ra.set("previous_websocket_failure",!0);try{let e;Ji(),this.mySock=new vl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){yl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==vl&&!yl.forceDisallow_}static previouslyFailed(){return Ra.isInMemoryStorage||!0===Ra.get("previous_websocket_failure")}markConnectionHealthy(){Ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=eo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(xi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ka(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yl.responsesRequiredToBeHealthy=2,yl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class bl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ml,yl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=yl&&yl.isAvailable();let n=t&&!yl.previouslyFailed();if(e.webSocketOnly&&(t||qa("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[yl];else{const e=this.transports_=[];for(const t of bl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bl.globalTransportInitialized_=!1;class wl{constructor(e,t,n,s,r,i,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new bl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=el((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$a("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Fa("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&qa("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),el((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):el((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{put(e,t,n,s){}merge(e,t,n,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.allowedEvents_=e,this.listeners_={},xi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const s=this.getInitialEvent(e);s&&t.apply(n,s)}off(e,t,n){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let e=0;e<s.length;e++)if(s[e].callback===t&&(!n||n===s[e].context))return void s.splice(e,1)}validateEventType_(e){xi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Il{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ki()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new El}getInitialEvent(e){return xi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=32,kl=768;class Sl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Rl(){return new Sl("")}function xl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Pl(e){return e.pieces_.length-e.pieceNum_}function Nl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Sl(e.pieces_,t)}function Ol(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Al(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Dl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Sl(t,0)}function Ll(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Sl)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Sl(n,0)}function Ml(e){return e.pieceNum_>=e.pieces_.length}function Ul(e,t){const n=xl(e),s=xl(t);if(null===n)return t;if(n===s)return Ul(Nl(e),Nl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Fl(e,t){const n=Al(e,0),s=Al(t,0);for(let e=0;e<n.length&&e<s.length;e++){const t=za(n[e],s[e]);if(0!==t)return t}return n.length===s.length?0:n.length<s.length?-1:1}function jl(e,t){if(Pl(e)!==Pl(t))return!1;for(let n=e.pieceNum_,s=t.pieceNum_;n<=e.pieces_.length;n++,s++)if(e.pieces_[n]!==t.pieces_[s])return!1;return!0}function ql(e,t){let n=e.pieceNum_,s=t.pieceNum_;if(Pl(e)>Pl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[s])return!1;++n,++s}return!0}class Vl{constructor(e,t){this.errorPrefix_=t,this.parts_=Al(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=go(this.parts_[e]);Bl(this)}}function Bl(e){if(e.byteLength_>kl)throw new Error(e.errorPrefix_+"has a key path longer than "+kl+" bytes ("+e.byteLength_+").");if(e.parts_.length>Tl)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tl+") or object contains a cycle "+Wl(e))}function Wl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Il{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new zl}getInitialEvent(e){return xi("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=1e3;class $l extends Cl{constructor(e,t,n,s,r,i,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=$l.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hl,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ji())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&El.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(to(r)),xi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[s]=n)}get(e){this.initConnection_();const t=new Hi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,s){this.initConnection_();const r=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+r),this.listens.has(i)||this.listens.set(i,new Map),xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),xi(!this.listens.get(i).has(r),"listen() called twice for same path/queryId.");const o={onComplete:s,hashFn:t,query:e,tag:n};this.listens.get(i).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+n+" for "+s);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const i=r.d,o=r.s;$l.warnOnListenWarnings_(i,t);(this.listens.get(n)&&this.listens.get(n).get(s))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,s),e.onComplete&&e.onComplete(o,i))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&so(e,"w")){const n=ro(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();qa(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=no(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=no(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,s=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,s))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+s),xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,s)&&this.connected_&&this.sendUnlisten_(n,s,e._queryObject,t)}sendUnlisten_(e,t,n,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e};s&&(r.q=n,r.t=s),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,s){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{s&&setTimeout((()=>{s(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,s){this.putInternal("p",e,t,n,s)}merge(e,t,n,s){this.putInternal("m",e,t,n,s)}putInternal(e,t,n,s,r){this.initConnection_();const i={p:t,d:n};void 0!==r&&(i.h=r),this.outstandingPuts_.push({action:e,request:i,onComplete:s}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),s&&s(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+to(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Fa("Unrecognized action received from server: "+to(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){xi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Hl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+$l.nextConnectionId_++,r=this.lastSessionId;let i=!1,o=null;const a=function(){o?o.close():(i=!0,n())},l=function(e){xi(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);i?Ma("getToken() completed but was canceled"):(Ma("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new wl(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{qa(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),i||(this.repoInfo_.nodeAdmin&&qa(e),a())}}}interrupt(e){Ma("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ma("Resuming connection for reason: "+e),delete this.interruptReasons_[e],io(this.interruptReasons_)&&(this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ga(e))).join("$"):"default";const s=this.removeListen_(e,n);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const n=new Sl(e).toString();let s;if(this.listens.has(n)){const e=this.listens.get(n);s=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else s=void 0;return s}onAuthRevoked_(e,t){Ma("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ma("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ea.replace(/\./g,"-")]=1,Ki()?e["framework.cordova"]=1:Yi()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=El.getInstance().currentlyOnline();return io(this.interruptReasons_)&&e}}$l.nextPersistentConnectionId_=0,$l.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Gl(Ba,e),s=new Gl(Ba,t);return 0!==this.compare(n,s)}minPost(){return Gl.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;class Jl extends Kl{static get __EMPTY_NODE(){return Yl}static set __EMPTY_NODE(e){Yl=e}compare(e,t){return za(e.name,t.name)}isDefinedOn(e){throw Pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,Yl)}makePost(e,t){return xi("string"==typeof e,"KeyIndex indexValue must always be a string."),new Gl(e,Yl)}toString(){return".key"}}const Ql=new Jl;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,s&&(i*=-1),i<0)e=this.isReverse_?e.left:e.right;else{if(0===i){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zl{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:Zl.RED,this.left=null!=s?s:ec.EMPTY_NODE,this.right=null!=r?r:ec.EMPTY_NODE}copy(e,t,n,s,r){return new Zl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ec.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,s;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ec.EMPTY_NODE;s=n.right.min_(),n=n.copy(s.key,s.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zl.RED=!0,Zl.BLACK=!1;class ec{constructor(e,t=ec.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ec(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zl.BLACK,null,null))}remove(e){return new ec(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,s=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return s?s.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(s=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let sc;ec.EMPTY_NODE=new class{copy(e,t,n,s,r){return this}insert(e,t,n){return new Zl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const rc=function(e){return"number"==typeof e?"number:"+Ja(e):"string:"+e},ic=function(e){if(e.isLeafNode()){const t=e.val();xi("string"==typeof t||"number"==typeof t||"object"==typeof t&&so(t,".sv"),"Priority must be a string or number.")}else xi(e===sc||e.isEmpty(),"priority of unexpected type.");xi(e===sc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
let oc,ac,lc;class cc{constructor(e,t=cc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,xi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ic(this.priorityNode_)}static set __childrenNodeConstructor(e){oc=e}static get __childrenNodeConstructor(){return oc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new cc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ml(e)?this:".priority"===xl(e)?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=xl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(xi(".priority"!==n||1===Pl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,cc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Nl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ja(this.value_):this.value_,this.lazyHash_=Oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===cc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cc.__childrenNodeConstructor?-1:(xi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,s=cc.VALUE_TYPE_ORDER.indexOf(t),r=cc.VALUE_TYPE_ORDER.indexOf(n);return xi(s>=0,"Unknown leaf type: "+t),xi(r>=0,"Unknown leaf type: "+n),s===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}cc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const uc=new class extends Kl{compare(e,t){const n=e.node.getPriority(),s=t.node.getPriority(),r=n.compareTo(s);return 0===r?za(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,new cc("[PRIORITY-POST]",lc))}makePost(e,t){const n=ac(e);return new Gl(t,new cc("[PRIORITY-POST]",n))}toString(){return".priority"}},hc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hc,10)),this.current_=this.count-1;const n=(s=this.count,parseInt(Array(s+1).join("1"),2));var s;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(e,t,n,s){e.sort(t);const r=function(t,s){const i=s-t;let o,a;if(0===i)return null;if(1===i)return o=e[t],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,null,null);{const l=parseInt(i/2,10)+t,c=r(t,l),u=r(l+1,s);return o=e[l],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,c,u)}},i=function(t){let s=null,i=null,o=e.length;const a=function(t,s){const i=o-t,a=o;o-=t;const c=r(i+1,a),u=e[i],h=n?n(u):u;l(new Zl(h,u.node,s,null,c))},l=function(e){s?(s.left=e,s=e):(i=e,s=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),s=Math.pow(2,t.count-(e+1));n?a(s,Zl.BLACK):(a(s,Zl.BLACK),a(s,Zl.RED))}return i}(new dc(e.length));return new ec(s||t,i)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const _c={};class mc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return xi(_c&&uc,"ChildrenNode.ts has not been loaded"),fc=fc||new mc({".priority":_c},{".priority":uc}),fc}get(e){const t=ro(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ec?t:null}hasIndex(e){return so(this.indexSet_,e.toString())}addIndex(e,t){xi(e!==Ql,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let s=!1;const r=t.getIterator(Gl.Wrap);let i,o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),n.push(o),o=r.getNext();i=s?pc(n,e.getCompare()):_c;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=i,new mc(c,l)}addToIndexes(e,t){const n=oo(this.indexes_,((n,s)=>{const r=ro(this.indexSet_,s);if(xi(r,"Missing index implementation for "+s),n===_c){if(r.isDefinedOn(e.node)){const n=[],s=t.getIterator(Gl.Wrap);let i=s.getNext();for(;i;)i.name!==e.name&&n.push(i),i=s.getNext();return n.push(e),pc(n,r.getCompare())}return _c}{const s=t.get(e.name);let r=n;return s&&(r=r.remove(new Gl(e.name,s))),r.insert(e,e.node)}}));return new mc(n,this.indexSet_)}removeFromIndexes(e,t){const n=oo(this.indexes_,(n=>{if(n===_c)return n;{const s=t.get(e.name);return s?n.remove(new Gl(e.name,s)):n}}));return new mc(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class vc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ic(this.priorityNode_),this.children_.isEmpty()&&xi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gc||(gc=new vc(new ec(nc),null,mc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gc}updatePriority(e){return this.children_.isEmpty()?this:new vc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gc:t}}getChild(e){const t=xl(e);return null===t?this:this.getImmediateChild(t).getChild(Nl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(xi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Gl(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const i=s.isEmpty()?gc:this.priorityNode_;return new vc(s,i,r)}}updateChild(e,t){const n=xl(e);if(null===n)return t;{xi(".priority"!==xl(e)||1===Pl(e),".priority must be the last token in a path");const s=this.getImmediateChild(n).updateChild(Nl(e),t);return this.updateImmediateChild(n,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,s=0,r=!0;if(this.forEachChild(uc,((i,o)=>{t[i]=o.val(e),n++,r&&vc.INTEGER_REGEXP_.test(i)?s=Math.max(s,Number(i)):r=!1})),!e&&r&&s<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+rc(this.getPriority().val())+":"),this.forEachChild(uc,((t,n)=>{const s=n.hash();""!==s&&(e+=":"+t+":"+s)})),this.lazyHash_=""===e?"":Oa(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const s=this.resolveIndex_(n);if(s){const n=s.getPredecessorKey(new Gl(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Gl(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Gl(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Gl.Wrap);let s=n.peek();for(;null!=s&&t.compare(s,e)<0;)n.getNext(),s=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Gl.Wrap);let s=n.peek();for(;null!=s&&t.compare(s,e)>0;)n.getNext(),s=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yc?-1:0}withIndex(e){if(e===Ql||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ql||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(uc),n=t.getIterator(uc);let s=e.getNext(),r=n.getNext();for(;s&&r;){if(s.name!==r.name||!s.node.equals(r.node))return!1;s=e.getNext(),r=n.getNext()}return null===s&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ql?null:this.indexMap_.get(e.toString())}}vc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const yc=new class extends vc{constructor(){super(new ec(nc),vc.EMPTY_NODE,mc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Gl,{MIN:{value:new Gl(Ba,vc.EMPTY_NODE)},MAX:{value:new Gl(Wa,yc)}}),Jl.__EMPTY_NODE=vc.EMPTY_NODE,cc.__childrenNodeConstructor=vc,sc=yc,function(e){lc=e}(yc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const bc=!0;function wc(e,t=null){if(null===e)return vc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),xi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new cc(e,wc(t))}if(e instanceof Array||!bc){let n=vc.EMPTY_NODE;return Ya(e,((t,s)=>{if(so(e,t)&&"."!==t.substring(0,1)){const e=wc(s);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(wc(t))}{const n=[];let s=!1;if(Ya(e,((e,t)=>{if("."!==e.substring(0,1)){const r=wc(t);r.isEmpty()||(s=s||!r.getPriority().isEmpty(),n.push(new Gl(e,r)))}})),0===n.length)return vc.EMPTY_NODE;const r=pc(n,tc,(e=>e.name),nc);if(s){const e=pc(n,uc.getCompare());return new vc(r,wc(t),new mc({".priority":e},{".priority":uc}))}return new vc(r,wc(t),mc.Default)}}!function(e){ac=e}(wc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Cc extends Kl{constructor(e){super(),this.indexPath_=e,xi(!Ml(e)&&".priority"!==xl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),s=this.extractChild(t.node),r=n.compareTo(s);return 0===r?za(e.name,t.name):r}makePost(e,t){const n=wc(e),s=vc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Gl(t,s)}maxPost(){const e=vc.EMPTY_NODE.updateChild(this.indexPath_,yc);return new Gl(Wa,e)}toString(){return Al(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new class extends Kl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?za(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Gl.MIN}maxPost(){return Gl.MAX}makePost(e,t){const n=wc(e);return new Gl(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e){return{type:"value",snapshotNode:e}}function Tc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function kc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Rc{constructor(e){this.index_=e}updateChild(e,t,n,s,r,i){xi(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(s).equals(n.getChild(s))&&o.isEmpty()===n.isEmpty()?e:(null!=i&&(n.isEmpty()?e.hasChild(t)?i.trackChildChange(kc(t,o)):xi(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?i.trackChildChange(Tc(t,n)):i.trackChildChange(Sc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(uc,((e,s)=>{t.hasChild(e)||n.trackChildChange(kc(e,s))})),t.isLeafNode()||t.forEachChild(uc,((t,s)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(s)||n.trackChildChange(Sc(t,s,r))}else n.trackChildChange(Tc(t,s))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.indexedFilter_=new Rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xc.getStartPost_(e),this.endPost_=xc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,s,r,i){return this.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,s,r,i)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vc.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(vc.EMPTY_NODE);const r=this;return t.forEachChild(uc,((e,t)=>{r.matches(new Gl(e,t))||(s=s.updateImmediateChild(e,vc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new xc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,s,r,i){return this.rangedFilter_.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,s,r,i):this.fullLimitUpdateChild_(e,t,n,r,i)}updateFullNode(e,t,n){let s;if(t.isLeafNode()||t.isEmpty())s=vc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;s=vc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;s=s.updateImmediateChild(t.name,t.node),n++}}}else{let e;s=t.withIndex(this.index_),s=s.updatePriority(vc.EMPTY_NODE),e=this.reverse_?s.getReverseIterator(this.index_):s.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:s=s.updateImmediateChild(t.name,vc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,s,r){let i;if(this.reverse_){const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else i=this.index_.getCompare();const o=e;xi(o.numChildren()===this.limit_,"");const a=new Gl(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=s.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:i(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(Sc(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(kc(t,e));const n=o.updateImmediateChild(t,vc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(Tc(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&i(l,a)>=0?(null!=r&&(r.trackChildChange(kc(l.name,l.node)),r.trackChildChange(Tc(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,vc.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=uc}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return xi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return xi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ba}hasEnd(){return this.endSet_}getIndexEndValue(){return xi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return xi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return xi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===uc}copy(){const e=new Nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Oc(e){const t={};if(e.isDefault())return t;let n;if(e.index_===uc?n="$priority":e.index_===Ic?n="$value":e.index_===Ql?n="$key":(xi(e.index_ instanceof Cc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=to(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=to(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+to(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=to(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+to(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ac(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==uc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Cl{constructor(e,t,n,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=s,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(xi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const i=Dc.getListenId_(e,n),o={};this.listens_[i]=o;const a=Oc(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ro(this.listens_,i)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",s(t,null)}}))}unlisten(e,t){const n=Dc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Oc(e._queryParams),n=e._path.toString(),s=new Hi;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),s.resolve(r)):s.reject(new Error(r))})),s.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+co(t);this.log_("Sending REST request for "+i);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+i+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eo(o.responseText)}catch(e){qa("Failed to parse JSON response for "+i+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&qa("Got unsuccessful REST response for "+i+" Status: "+o.status),n(o.status);n=null}},o.open("GET",i,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.rootNode_=vc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return{value:null,children:new Map}}function Uc(e,t,n){if(Ml(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const s=xl(t);e.children.has(s)||e.children.set(s,Mc());Uc(e.children.get(s),t=Nl(t),n)}}function Fc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,s)=>{Fc(s,new Sl(t.toString()+"/"+e),n)}))}class jc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ya(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jc(e);const n=1e4+2e4*Math.random();el(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ya(e,((e,s)=>{s>0&&so(this.statsToReport_,e)&&(t[e]=s,n=!0)})),n&&this.server_.reportStats(t),el(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vc,Bc;function Wc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Bc=Vc||(Vc={}))[Bc.OVERWRITE=0]="OVERWRITE",Bc[Bc.MERGE=1]="MERGE",Bc[Bc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Bc[Bc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class zc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Vc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ml(this.path)){if(null!=this.affectedTree.value)return xi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Sl(e));return new zc(Rl(),t,this.revert)}}return xi(xl(this.path)===e,"operationForChild called for unrelated child."),new zc(Nl(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.source=e,this.path=t,this.type=Vc.LISTEN_COMPLETE}operationForChild(e){return Ml(this.path)?new Hc(this.source,Rl()):new Hc(this.source,Nl(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Vc.OVERWRITE}operationForChild(e){return Ml(this.path)?new $c(this.source,Rl(),this.snap.getImmediateChild(e)):new $c(this.source,Nl(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Vc.MERGE}operationForChild(e){if(Ml(this.path)){const t=this.children.subtree(new Sl(e));return t.isEmpty()?null:t.value?new $c(this.source,Rl(),t.value):new Gc(this.source,Rl(),t)}return xi(xl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gc(this.source,Nl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ml(e))return this.isFullyInitialized()&&!this.filtered_;const t=xl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Jc(e,t,n,s,r,i){const o=s.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Pi("Should only compare child_ events.");const s=new Gl(t.childName,t.snapshotNode),r=new Gl(n.childName,n.snapshotNode);return e.index_.compare(s,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const s=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,i);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(s,e.query_))}))}))}function Qc(e,t){return{eventCache:e,serverCache:t}}function Xc(e,t,n,s){return Qc(new Kc(t,n,s),e.serverCache)}function Zc(e,t,n,s){return Qc(e.eventCache,new Kc(t,n,s))}function eu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;class su{constructor(e,t=(()=>(nu||(nu=new ec(Ha)),nu))()){this.value=e,this.children=t}static fromObject(e){let t=new su(null);return Ya(e,((e,n)=>{t=t.set(new Sl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Rl(),value:this.value};if(Ml(e))return null;{const n=xl(e),s=this.children.get(n);if(null!==s){const r=s.findRootMostMatchingPathAndValue(Nl(e),t);if(null!=r){return{path:Ll(new Sl(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ml(e))return this;{const t=xl(e),n=this.children.get(t);return null!==n?n.subtree(Nl(e)):new su(null)}}set(e,t){if(Ml(e))return new su(t,this.children);{const n=xl(e),s=(this.children.get(n)||new su(null)).set(Nl(e),t),r=this.children.insert(n,s);return new su(this.value,r)}}remove(e){if(Ml(e))return this.children.isEmpty()?new su(null):new su(null,this.children);{const t=xl(e),n=this.children.get(t);if(n){const s=n.remove(Nl(e));let r;return r=s.isEmpty()?this.children.remove(t):this.children.insert(t,s),null===this.value&&r.isEmpty()?new su(null):new su(this.value,r)}return this}}get(e){if(Ml(e))return this.value;{const t=xl(e),n=this.children.get(t);return n?n.get(Nl(e)):null}}setTree(e,t){if(Ml(e))return t;{const n=xl(e),s=(this.children.get(n)||new su(null)).setTree(Nl(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new su(this.value,r)}}fold(e){return this.fold_(Rl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((s,r)=>{n[s]=r.fold_(Ll(e,s),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Rl(),t)}findOnPath_(e,t,n){const s=!!this.value&&n(t,this.value);if(s)return s;if(Ml(e))return null;{const s=xl(e),r=this.children.get(s);return r?r.findOnPath_(Nl(e),Ll(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Rl(),t)}foreachOnPath_(e,t,n){if(Ml(e))return this;{this.value&&n(t,this.value);const s=xl(e),r=this.children.get(s);return r?r.foreachOnPath_(Nl(e),Ll(t,s),n):new su(null)}}foreach(e){this.foreach_(Rl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,s)=>{s.foreach_(Ll(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.writeTree_=e}static empty(){return new ru(new su(null))}}function iu(e,t,n){if(Ml(t))return new ru(new su(n));{const s=e.writeTree_.findRootMostValueAndPath(t);if(null!=s){const r=s.path;let i=s.value;const o=Ul(r,t);return i=i.updateChild(o,n),new ru(e.writeTree_.set(r,i))}{const s=new su(n),r=e.writeTree_.setTree(t,s);return new ru(r)}}}function ou(e,t,n){let s=e;return Ya(n,((e,n)=>{s=iu(s,Ll(t,e),n)})),s}function au(e,t){if(Ml(t))return ru.empty();{const n=e.writeTree_.setTree(t,new su(null));return new ru(n)}}function lu(e,t){return null!=cu(e,t)}function cu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ul(n.path,t)):null}function uu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(uc,((e,n)=>{t.push(new Gl(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Gl(e,n.value))})),t}function hu(e,t){if(Ml(t))return e;{const n=cu(e,t);return new ru(null!=n?new su(n):e.writeTree_.subtree(t))}}function du(e){return e.writeTree_.isEmpty()}function pu(e,t){return fu(Rl(),e.writeTree_,t)}function fu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let s=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(xi(null!==r.value,"Priority writes must always be leaf nodes"),s=r.value):n=fu(Ll(e,t),r,n)})),n.getChild(e).isEmpty()||null===s||(n=n.updateChild(Ll(e,".priority"),s)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(e,t){return Ru(t,e)}function mu(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));xi(n>=0,"removeWrite called with nonexistent writeId.");const s=e.allWrites[n];e.allWrites.splice(n,1);let r=s.visible,i=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&gu(t,s.path)?r=!1:ql(s.path,t.path)&&(i=!0)),o--}if(r){if(i)return function(e){e.visibleWrites=yu(e.allWrites,vu,Rl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(s.snap)e.visibleWrites=au(e.visibleWrites,s.path);else{Ya(s.children,(t=>{e.visibleWrites=au(e.visibleWrites,Ll(s.path,t))}))}return!0}return!1}function gu(e,t){if(e.snap)return ql(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ql(Ll(e.path,n),t))return!0;return!1}function vu(e){return e.visible}function yu(e,t,n){let s=ru.empty();for(let r=0;r<e.length;++r){const i=e[r];if(t(i)){const e=i.path;let t;if(i.snap)ql(n,e)?(t=Ul(n,e),s=iu(s,t,i.snap)):ql(e,n)&&(t=Ul(e,n),s=iu(s,Rl(),i.snap.getChild(t)));else{if(!i.children)throw Pi("WriteRecord should have .snap or .children");if(ql(n,e))t=Ul(n,e),s=ou(s,t,i.children);else if(ql(e,n))if(t=Ul(e,n),Ml(t))s=ou(s,Rl(),i.children);else{const e=ro(i.children,xl(t));if(e){const n=e.getChild(Nl(t));s=iu(s,Rl(),n)}}}}}return s}function bu(e,t,n,s,r){if(s||r){const i=hu(e.visibleWrites,t);if(!r&&du(i))return n;if(r||null!=n||lu(i,Rl())){const i=function(e){return(e.visible||r)&&(!s||!~s.indexOf(e.writeId))&&(ql(e.path,t)||ql(t,e.path))};return pu(yu(e.allWrites,i,t),n||vc.EMPTY_NODE)}return null}{const s=cu(e.visibleWrites,t);if(null!=s)return s;{const s=hu(e.visibleWrites,t);if(du(s))return n;if(null!=n||lu(s,Rl())){return pu(s,n||vc.EMPTY_NODE)}return null}}}function wu(e,t,n,s){return bu(e.writeTree,e.treePath,t,n,s)}function Cu(e,t){return function(e,t,n){let s=vc.EMPTY_NODE;const r=cu(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(uc,((e,t)=>{s=s.updateImmediateChild(e,t)})),s;if(n){const r=hu(e.visibleWrites,t);return n.forEachChild(uc,((e,t)=>{const n=pu(hu(r,new Sl(e)),t);s=s.updateImmediateChild(e,n)})),uu(r).forEach((e=>{s=s.updateImmediateChild(e.name,e.node)})),s}return uu(hu(e.visibleWrites,t)).forEach((e=>{s=s.updateImmediateChild(e.name,e.node)})),s}(e.writeTree,e.treePath,t)}function Iu(e,t,n,s){return function(e,t,n,s,r){xi(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ll(t,n);if(lu(e.visibleWrites,i))return null;{const t=hu(e.visibleWrites,i);return du(t)?r.getChild(n):pu(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,s)}function Eu(e,t){return function(e,t){return cu(e.visibleWrites,t)}(e.writeTree,Ll(e.treePath,t))}function Tu(e,t,n,s,r,i){return function(e,t,n,s,r,i,o){let a;const l=hu(e.visibleWrites,t),c=cu(l,Rl());if(null!=c)a=c;else{if(null==n)return[];a=pu(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,s)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,s,r,i)}function ku(e,t,n){return function(e,t,n,s){const r=Ll(t,n),i=cu(e.visibleWrites,r);if(null!=i)return i;if(s.isCompleteForChild(n))return pu(hu(e.visibleWrites,r),s.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Su(e,t){return Ru(Ll(e.treePath,t),e.writeTree)}function Ru(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;xi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),xi(".priority"!==n,"Only non-priority child changes can be tracked.");const s=this.changeMap.get(n);if(s){const r=s.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Sc(n,e.snapshotNode,s.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,kc(n,s.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Pi("Illegal combination of changes: "+e+" occurred after "+s);this.changeMap.set(n,Sc(n,e.snapshotNode,s.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Nu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ku(this.writes_,e,t)}}getChildAfterChild(e,t,n){const s=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tu(this.viewCache_),r=Tu(this.writes_,s,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e,t,n,s,r){const i=new xu;let o,a;if(n.type===Vc.OVERWRITE){const l=n;l.source.fromUser?o=Lu(e,t,l.path,l.snap,s,r,i):(xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ml(l.path),o=Du(e,t,l.path,l.snap,s,r,a,i))}else if(n.type===Vc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,s,r,i,o){let a=t;return s.foreach(((s,l)=>{const c=Ll(n,s);Mu(t,xl(c))&&(a=Lu(e,a,c,l,r,i,o))})),s.foreach(((s,l)=>{const c=Ll(n,s);Mu(t,xl(c))||(a=Lu(e,a,c,l,r,i,o))})),a}(e,t,l.path,l.children,s,r,i):(xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Fu(e,t,l.path,l.children,s,r,a,i))}else if(n.type===Vc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,s,r,i){let o;if(null!=Eu(s,n))return t;{const a=new Nu(s,t,r),l=t.eventCache.getNode();let c;if(Ml(n)||".priority"===xl(n)){let n;if(t.serverCache.isFullyInitialized())n=wu(s,tu(t));else{const e=t.serverCache.getNode();xi(e instanceof vc,"serverChildren would be complete if leaf node"),n=Cu(s,e)}c=e.filter.updateFullNode(l,n,i)}else{const r=xl(n);let u=ku(s,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,Nl(n),a,i):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,vc.EMPTY_NODE,Nl(n),a,i):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=wu(s,tu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,i)))}return o=t.serverCache.isFullyInitialized()||null!=Eu(s,Rl()),Xc(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,s,r,i):function(e,t,n,s,r,i,o){if(null!=Eu(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=s.value){if(Ml(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Du(e,t,n,l.getNode().getChild(n),r,i,a,o);if(Ml(n)){let s=new su(null);return l.getNode().forEachChild(Ql,((e,t)=>{s=s.set(new Sl(e),t)})),Fu(e,t,n,s,r,i,a,o)}return t}{let c=new su(null);return s.foreach(((e,t)=>{const s=Ll(n,e);l.isCompleteForPath(s)&&(c=c.set(e,l.getNode().getChild(s)))})),Fu(e,t,n,c,r,i,a,o)}}(e,t,a.path,a.affectedTree,s,r,i)}else{if(n.type!==Vc.LISTEN_COMPLETE)throw Pi("Unknown operation type: "+n.type);o=function(e,t,n,s,r){const i=t.serverCache,o=Zc(t,i.getNode(),i.isFullyInitialized()||Ml(n),i.isFiltered());return Au(e,o,n,s,Pu,r)}(e,t,n.path,s,i)}const l=i.getChanges();return function(e,t,n){const s=t.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=eu(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Ec(eu(t)))}}(t,o,l),{viewCache:o,changes:l}}function Au(e,t,n,s,r,i){const o=t.eventCache;if(null!=Eu(s,n))return t;{let a,l;if(Ml(n))if(xi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=tu(t),r=Cu(s,n instanceof vc?n:vc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,i)}else{const n=wu(s,tu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,i)}else{const c=xl(n);if(".priority"===c){xi(1===Pl(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const i=Iu(s,n,r,l);a=null!=i?e.filter.updatePriority(r,i):o.getNode()}else{const u=Nl(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Iu(s,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=ku(s,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,r,i):o.getNode()}}return Xc(t,a,o.isFullyInitialized()||Ml(n),e.filter.filtersNodes())}}function Du(e,t,n,s,r,i,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ml(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),e,null)}else{const e=xl(n);if(!l.isCompleteForPath(n)&&Pl(n)>1)return t;const r=Nl(n),i=l.getNode().getImmediateChild(e).updateChild(r,s);c=".priority"===e?u.updatePriority(l.getNode(),i):u.updateChild(l.getNode(),e,i,r,Pu,null)}const h=Zc(t,c,l.isFullyInitialized()||Ml(n),u.filtersNodes());return Au(e,h,n,r,new Nu(r,h,i),a)}function Lu(e,t,n,s,r,i,o){const a=t.eventCache;let l,c;const u=new Nu(r,t,i);if(Ml(n))c=e.filter.updateFullNode(t.eventCache.getNode(),s,o),l=Xc(t,c,!0,e.filter.filtersNodes());else{const r=xl(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),s),l=Xc(t,c,a.isFullyInitialized(),a.isFiltered());else{const i=Nl(n),c=a.getNode().getImmediateChild(r);let h;if(Ml(i))h=s;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===Ol(i)&&e.getChild(Dl(i)).isEmpty()?e:e.updateChild(i,s):vc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Xc(t,e.filter.updateChild(a.getNode(),r,h,i,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Mu(e,t){return e.eventCache.isCompleteForChild(t)}function Uu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Fu(e,t,n,s,r,i,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ml(n)?s:new su(null).setTree(n,s);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,s)=>{if(u.hasChild(n)){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),s);c=Du(e,c,new Sl(n),l,r,i,o,a)}})),l.children.inorderTraversal(((n,s)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===s.value;if(!u.hasChild(n)&&!l){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),s);c=Du(e,c,new Sl(n),l,r,i,o,a)}})),c}class ju{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,s=new Rc(n.getIndex()),r=(i=n).loadsAllData()?new Rc(i.getIndex()):i.hasLimit()?new Pc(i):new xc(i);var i;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(vc.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(vc.EMPTY_NODE,a.getNode(),null),u=new Kc(l,o.isFullyInitialized(),s.filtersNodes()),h=new Kc(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qc(h,u),this.eventGenerator_=new Yc(this.query_)}get query(){return this.query_}}function qu(e,t){const n=tu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ml(t)&&!n.getImmediateChild(xl(t)).isEmpty())?n.getChild(t):null}function Vu(e){return 0===e.eventRegistrations_.length}function Bu(e,t,n){const s=[];if(n){xi(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&s.push(t)}))}if(t){let n=[];for(let s=0;s<e.eventRegistrations_.length;++s){const r=e.eventRegistrations_[s];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(s+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return s}function Wu(e,t,n,s){t.type===Vc.MERGE&&null!==t.source.queryId&&(xi(tu(e.viewCache_),"We should always have a full cache before handling merges"),xi(eu(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,i=Ou(e.processor_,r,t,n,s);var o,a;return o=e.processor_,a=i.viewCache,xi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),xi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),xi(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=i.viewCache,zu(e,i.changes,i.viewCache.eventCache.getNode(),null)}function zu(e,t,n,s){const r=s?[s]:e.eventRegistrations_;return function(e,t,n,s){const r=[],i=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&i.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Jc(e,r,"child_removed",t,s,n),Jc(e,r,"child_added",t,s,n),Jc(e,r,"child_moved",i,s,n),Jc(e,r,"child_changed",t,s,n),Jc(e,r,"value",t,s,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,$u;class Gu{constructor(){this.views=new Map}}function Ku(e,t,n,s){const r=t.source.queryId;if(null!==r){const i=e.views.get(r);return xi(null!=i,"SyncTree gave us an op for an invalid query."),Wu(i,t,n,s)}{let r=[];for(const i of e.views.values())r=r.concat(Wu(i,t,n,s));return r}}function Yu(e,t,n,s,r){const i=t._queryIdentifier,o=e.views.get(i);if(!o){let e=wu(n,r?s:null),i=!1;e?i=!0:s instanceof vc?(e=Cu(n,s),i=!1):(e=vc.EMPTY_NODE,i=!1);const o=Qc(new Kc(e,i,!1),new Kc(s,r,!1));return new ju(t,o)}return o}function Ju(e,t,n,s,r,i){const o=Yu(e,t,s,r,i);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,s=[];n.getNode().isLeafNode()||n.getNode().forEachChild(uc,((e,t)=>{s.push(Tc(e,t))}));return n.isFullyInitialized()&&s.push(Ec(n.getNode())),zu(e,s,n.getNode(),t)}(o,n)}function Qu(e,t,n,s){const r=t._queryIdentifier,i=[];let o=[];const a=nh(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Bu(r,n,s)),Vu(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||i.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Bu(t,n,s)),Vu(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||i.push(t.query)))}return a&&!nh(e)&&i.push(new(xi(Hu,"Reference.ts has not been loaded"),Hu)(t._repo,t._path)),{removed:i,events:o}}function Xu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Zu(e,t){let n=null;for(const s of e.views.values())n=n||qu(s,t);return n}function eh(e,t){if(t._queryParams.loadsAllData())return sh(e);{const n=t._queryIdentifier;return e.views.get(n)}}function th(e,t){return null!=eh(e,t)}function nh(e){return null!=sh(e)}function sh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new su(null),this.pendingWriteTree_={visibleWrites:ru.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(e,t,n,s,r){return function(e,t,n,s,r){xi(s>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:s,visible:r}),r&&(e.visibleWrites=iu(e.visibleWrites,t,n)),e.lastWriteId=s}(e.pendingWriteTree_,t,n,s,r),r?_h(e,new $c({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ah(e,t,n,s){!function(e,t,n,s){xi(s>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:s,visible:!0}),e.visibleWrites=ou(e.visibleWrites,t,n),e.lastWriteId=s}(e.pendingWriteTree_,t,n,s);const r=su.fromObject(n);return _h(e,new Gc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function lh(e,t,n=!1){const s=function(e,t){for(let n=0;n<e.allWrites.length;n++){const s=e.allWrites[n];if(s.writeId===t)return s}return null}(e.pendingWriteTree_,t);if(mu(e.pendingWriteTree_,t)){let t=new su(null);return null!=s.snap?t=t.set(Rl(),!0):Ya(s.children,(e=>{t=t.set(new Sl(e),!0)})),_h(e,new zc(s.path,t,n))}return[]}function ch(e,t,n){return _h(e,new $c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function uh(e,t,n,s,r=!1){const i=t._path,o=e.syncPointTree_.get(i);let a=[];if(o&&("default"===t._queryIdentifier||th(o,t))){const l=Qu(o,t,n,s);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(i,((e,t)=>nh(t)));if(n&&!r){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&nh(t)){return[sh(t)]}{let e=[];return t&&(e=Xu(t)),Ya(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const s=n[t],r=s.query,i=vh(e,s);e.listenProvider_.startListening(Eh(r),yh(e,r),i.hashFn,i.onComplete)}}}if(!r&&c.length>0&&!s)if(n){const n=null;e.listenProvider_.stopListening(Eh(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(bh(t));e.listenProvider_.stopListening(Eh(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const s=t[n];if(!s._queryParams.loadsAllData()){const t=bh(s),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function hh(e,t,n,s){const r=wh(e,s);if(null!=r){const s=Ch(r),i=s.path,o=s.queryId,a=Ul(i,t);return Ih(e,i,new $c(Wc(o),a,n))}return[]}function dh(e,t,n,s=!1){const r=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ul(e,r);i=i||Zu(t,n),o=o||nh(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||nh(l),i=i||Zu(l,Rl())):(l=new Gu,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=i)a=!0;else{a=!1,i=vc.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Zu(t,Rl());n&&(i=i.updateImmediateChild(e,n))}))}const c=th(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=bh(t);xi(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const s=rh++;e.queryToTagMap.set(n,s),e.tagToQueryMap.set(s,n)}let u=Ju(l,t,n,_u(e.pendingWriteTree_,r),i,a);if(!c&&!o&&!s){const n=eh(l,t);u=u.concat(function(e,t,n){const s=t._path,r=yh(e,t),i=vh(e,n),o=e.listenProvider_.startListening(Eh(t),r,i.hashFn,i.onComplete),a=e.syncPointTree_.subtree(s);if(r)xi(!nh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ml(e)&&t&&nh(t))return[sh(t).query];{let e=[];return t&&(e=e.concat(Xu(t).map((e=>e.query)))),Ya(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const s=t[n];e.listenProvider_.stopListening(Eh(s),yh(e,s))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function ph(e,t,n){const s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const s=Zu(n,Ul(e,t));if(s)return s}));return bu(s,t,r,n,!0)}function fh(e,t){const n=t._path;let s=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Ul(e,n);s=s||Zu(t,r)}));let r=e.syncPointTree_.get(n);r?s=s||Zu(r,Rl()):(r=new Gu,e.syncPointTree_=e.syncPointTree_.set(n,r));const i=null!=s,o=i?new Kc(s,!0,!1):null;return function(e){return eu(e.viewCache_)}(Yu(r,t,_u(e.pendingWriteTree_,t._path),i?o.getNode():vc.EMPTY_NODE,i))}function _h(e,t){return mh(t,e.syncPointTree_,null,_u(e.pendingWriteTree_,Rl()))}function mh(e,t,n,s){if(Ml(e.path))return gh(e,t,n,s);{const r=t.get(Rl());null==n&&null!=r&&(n=Zu(r,Rl()));let i=[];const o=xl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Su(s,o);i=i.concat(mh(a,l,e,t))}return r&&(i=i.concat(Ku(r,e,s,n))),i}}function gh(e,t,n,s){const r=t.get(Rl());null==n&&null!=r&&(n=Zu(r,Rl()));let i=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=Su(s,t),l=e.operationForChild(t);l&&(i=i.concat(gh(l,r,o,a)))})),r&&(i=i.concat(Ku(r,e,s,n))),i}function vh(e,t){const n=t.query,s=yh(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||vc.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return s?function(e,t,n){const s=wh(e,n);if(s){const n=Ch(s),r=n.path,i=n.queryId,o=Ul(r,t);return Ih(e,r,new Hc(Wc(i),o))}return[]}(e,n._path,s):function(e,t){return _h(e,new Hc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const s=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const s=new Error(e+" at "+t._path.toString()+": "+n);return s.code=e.toUpperCase(),s}(t,n);return uh(e,n,null,s)}}}}function yh(e,t){const n=bh(t);return e.queryToTagMap.get(n)}function bh(e){return e._path.toString()+"$"+e._queryIdentifier}function wh(e,t){return e.tagToQueryMap.get(t)}function Ch(e){const t=e.indexOf("$");return xi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Sl(e.substr(0,t))}}function Ih(e,t,n){const s=e.syncPointTree_.get(t);xi(s,"Missing sync point for query tag that we're tracking");return Ku(s,n,_u(e.pendingWriteTree_,t),null)}function Eh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(xi($u,"Reference.ts has not been loaded"),$u)(e._repo,e._path):e}class Th{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Th(t)}node(){return this.node_}}class kh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ll(this.path_,e);return new kh(this.syncTree_,t)}node(){return ph(this.syncTree_,this.path_)}}const Sh=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Rh=function(e,t,n){return e&&"object"==typeof e?(xi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?xh(e[".sv"],t,n):"object"==typeof e[".sv"]?Ph(e[".sv"],t):void xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},xh=function(e,t,n){if("timestamp"===e)return n.timestamp;xi(!1,"Unexpected server value: "+e)},Ph=function(e,t,n){e.hasOwnProperty("increment")||xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const s=e.increment;"number"!=typeof s&&xi(!1,"Unexpected increment value: "+s);const r=t.node();if(xi(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const i=r.getValue();return"number"!=typeof i?s:i+s},Nh=function(e,t,n,s){return Ah(t,new kh(n,e),s)},Oh=function(e,t,n){return Ah(e,new Th(t),n)};function Ah(e,t,n){const s=e.getPriority().val(),r=Rh(s,t.getImmediateChild(".priority"),n);let i;if(e.isLeafNode()){const s=e,i=Rh(s.getValue(),t,n);return i!==s.getValue()||r!==s.getPriority().val()?new cc(i,wc(r)):e}{const s=e;return i=s,r!==s.getPriority().val()&&(i=i.updatePriority(new cc(r))),s.forEachChild(uc,((e,s)=>{const r=Ah(s,t.getImmediateChild(e),n);r!==s&&(i=i.updateImmediateChild(e,r))})),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Lh(e,t){let n=t instanceof Sl?t:new Sl(t),s=e,r=xl(n);for(;null!==r;){const e=ro(s.node.children,r)||{children:{},childCount:0};s=new Dh(r,s,e),n=Nl(n),r=xl(n)}return s}function Mh(e){return e.node.value}function Uh(e,t){e.node.value=t,Bh(e)}function Fh(e){return e.node.childCount>0}function jh(e,t){Ya(e.node.children,((n,s)=>{t(new Dh(n,e,s))}))}function qh(e,t,n,s){n&&!s&&t(e),jh(e,(e=>{qh(e,t,!0,s)})),n&&s&&t(e)}function Vh(e){return new Sl(null===e.parent?e.name:Vh(e.parent)+"/"+e.name)}function Bh(e){null!==e.parent&&function(e,t,n){const s=function(e){return void 0===Mh(e)&&!Fh(e)}(n),r=so(e.node.children,t);s&&r?(delete e.node.children[t],e.node.childCount--,Bh(e)):s||r||(e.node.children[t]=n.node,e.node.childCount++,Bh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Wh=/[\[\].#$\/\u0000-\u001F\u007F]/,zh=/[\[\].#$\u0000-\u001F\u007F]/,Hh=10485760,$h=function(e){return"string"==typeof e&&0!==e.length&&!Wh.test(e)},Gh=function(e){return"string"==typeof e&&0!==e.length&&!zh.test(e)},Kh=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Va(e)||e&&"object"==typeof e&&so(e,".sv")},Yh=function(e,t,n,s){s&&void 0===t||Jh(mo(e,"value"),t,n)},Jh=function(e,t,n){const s=n instanceof Sl?new Vl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Wl(s));if("function"==typeof t)throw new Error(e+"contains a function "+Wl(s)+" with contents = "+t.toString());if(Va(t))throw new Error(e+"contains "+t.toString()+" "+Wl(s));if("string"==typeof t&&t.length>Hh/3&&go(t)>Hh)throw new Error(e+"contains a string greater than "+Hh+" utf8 bytes "+Wl(s)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ya(t,((t,i)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!$h(t)))throw new Error(e+" contains an invalid key ("+t+") "+Wl(s)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=s).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=go(a),Bl(o),Jh(e,i,s),function(e){const t=e.parts_.pop();e.byteLength_-=go(t),e.parts_.length>0&&(e.byteLength_-=1)}(s)})),n&&r)throw new Error(e+' contains ".value" child '+Wl(s)+" in addition to actual children.")}},Qh=function(e,t,n,s){if(s&&void 0===t)return;const r=mo(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const i=[];Ya(t,((e,t)=>{const s=new Sl(e);if(Jh(r,t,Ll(n,s)),".priority"===Ol(s)&&!Kh(t))throw new Error(r+"contains an invalid value for '"+s.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(s)})),function(e,t){let n,s;for(n=0;n<t.length;n++){s=t[n];const r=Al(s);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!$h(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+s.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Fl);let r=null;for(n=0;n<t.length;n++){if(s=t[n],null!==r&&ql(r,s))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}}(r,i)},Xh=function(e,t,n,s){if(!(s&&void 0===n||Gh(n)))throw new Error(mo(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zh=function(e,t,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xh(e,t,n,s)},ed=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!$h(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Gh(e)}(n))throw new Error(mo(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class td{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nd(e,t){let n=null;for(let s=0;s<t.length;s++){const r=t[s],i=r.getPath();null===n||jl(i,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:i}),n.events.push(r)}n&&e.eventLists_.push(n)}function sd(e,t,n){nd(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let s=0;s<e.eventLists_.length;s++){const r=e.eventLists_[s];if(r){t(r.path)?(rd(e.eventLists_[s]),e.eventLists_[s]=null):n=!1}}n&&(e.eventLists_=[]);e.recursionDepth_--}(e,(e=>ql(e,t)||ql(t,e)))}function rd(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const s=n.getEventRunner();Da&&Ma("event: "+n.toString()),Za(s)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="repo_interrupt",od=25;class ad{constructor(e,t,n,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new td,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new Dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ld(e,t,n){if(e.stats_=pl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dc(e.repoInfo_,((t,n,s,r)=>{hd(e,t,n,s,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>dd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{to(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new $l(e.repoInfo_,t,((t,n,s,r)=>{hd(e,t,n,s,r)}),(t=>{dd(e,t)}),(t=>{!function(e,t){Ya(t,((t,n)=>{pd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return dl[n]||(dl[n]=t()),dl[n]}(e.repoInfo_,(()=>new qc(e.stats_,e.server_))),e.infoData_=new Lc,e.infoSyncTree_=new ih({startListening:(t,n,s,r)=>{let i=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(i=ch(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),i},stopListening:()=>{}}),pd(e,"connected",!1),e.serverSyncTree_=new ih({startListening:(t,n,s,r)=>(e.server_.listen(t,s,n,((n,s)=>{const i=r(n,s);sd(e.eventQueue_,t._path,i)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function cd(e){const t=e.infoData_.getNode(new Sl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ud(e){return Sh({timestamp:cd(e)})}function hd(e,t,n,s,r){e.dataUpdateCount++;const i=new Sl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(s){const t=oo(n,(e=>wc(e)));o=function(e,t,n,s){const r=wh(e,s);if(r){const s=Ch(r),i=s.path,o=s.queryId,a=Ul(i,t),l=su.fromObject(n);return Ih(e,i,new Gc(Wc(o),a,l))}return[]}(e.serverSyncTree_,i,t,r)}else{const t=wc(n);o=hh(e.serverSyncTree_,i,t,r)}else if(s){const t=oo(n,(e=>wc(e)));o=function(e,t,n){const s=su.fromObject(n);return _h(e,new Gc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,s))}(e.serverSyncTree_,i,t)}else{const t=wc(n);o=ch(e.serverSyncTree_,i,t)}let a=i;o.length>0&&(a=yd(e,i)),sd(e.eventQueue_,a,o)}function dd(e,t){pd(e,"connected",t),!1===t&&function(e){_d(e,"onDisconnectEvents");const t=ud(e),n=Mc();Fc(e.onDisconnect_,Rl(),((s,r)=>{const i=Nh(s,r,e.serverSyncTree_,t);Uc(n,s,i)}));let s=[];Fc(n,Rl(),((t,n)=>{s=s.concat(ch(e.serverSyncTree_,t,n));const r=Ed(e,t);yd(e,r)})),e.onDisconnect_=Mc(),sd(e.eventQueue_,Rl(),s)}(e)}function pd(e,t,n){const s=new Sl("/.info/"+t),r=wc(n);e.infoData_.updateSnapshot(s,r);const i=ch(e.infoSyncTree_,s,r);sd(e.eventQueue_,s,i)}function fd(e){return e.nextWriteId_++}function _d(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ma(n,...t)}function md(e,t,n,s){t&&Za((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;s&&(r+=": "+s);const i=new Error(r);i.code=e,t(i)}}))}function gd(e,t,n){return ph(e.serverSyncTree_,t,n)||vc.EMPTY_NODE}function vd(e,t=e.transactionQueueTree_){if(t||Id(e,t),Mh(t)){const n=wd(e,t);xi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const s=n.map((e=>e.currentWriteId)),r=gd(e,t,s);let i=r;const o=r.hash();for(let e=0;e<n.length;e++){const s=n[e];xi(0===s.status,"tryToSendTransactionQueue_: items in queue should all be run."),s.status=1,s.retryCount++;const r=Ul(t,s.path);i=i.updateChild(r,s.currentOutputSnapshotRaw)}const a=i.val(!0),l=t;e.server_.put(l.toString(),a,(s=>{_d(e,"transaction put response",{path:l.toString(),status:s});let r=[];if("ok"===s){const s=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(lh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&s.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Id(e,Lh(e.transactionQueueTree_,t)),vd(e,e.transactionQueueTree_),sd(e.eventQueue_,t,r);for(let e=0;e<s.length;e++)Za(s[e])}else{if("datastale"===s)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{qa("transaction at "+l.toString()+" failed: "+s);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=s}yd(e,t)}}),o)}(e,Vh(t),n)}else Fh(t)&&jh(t,(t=>{vd(e,t)}))}function yd(e,t){const n=bd(e,t),s=Vh(n);return function(e,t,n){if(0===t.length)return;const s=[];let r=[];const i=t.filter((e=>0===e.status)),o=i.map((e=>e.currentWriteId));for(let i=0;i<t.length;i++){const l=t[i],c=Ul(n,l.path);let u,h=!1;if(xi(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,r=r.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=od)h=!0,u="maxretry",r=r.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else{const n=gd(e,l.path,o);l.currentInputSnapshot=n;const s=t[i].update(n.val());if(void 0!==s){Jh("transaction failed: Data returned ",s,l.path);let t=wc(s);"object"==typeof s&&null!=s&&so(s,".priority")||(t=t.updatePriority(n.getPriority()));const i=l.currentWriteId,a=ud(e),c=Oh(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=fd(e),o.splice(o.indexOf(i),1),r=r.concat(oh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(lh(e.serverSyncTree_,i,!0))}else h=!0,u="nodata",r=r.concat(lh(e.serverSyncTree_,l.currentWriteId,!0))}sd(e.eventQueue_,n,r),r=[],h&&(t[i].status=2,a=t[i].unwatcher,setTimeout(a,Math.floor(0)),t[i].onComplete&&("nodata"===u?s.push((()=>t[i].onComplete(null,!1,t[i].currentInputSnapshot))):s.push((()=>t[i].onComplete(new Error(u),!1,null)))))}var a;Id(e,e.transactionQueueTree_);for(let e=0;e<s.length;e++)Za(s[e]);vd(e,e.transactionQueueTree_)}(e,wd(e,n),s),s}function bd(e,t){let n,s=e.transactionQueueTree_;for(n=xl(t);null!==n&&void 0===Mh(s);)s=Lh(s,n),n=xl(t=Nl(t));return s}function wd(e,t){const n=[];return Cd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Cd(e,t,n){const s=Mh(t);if(s)for(let e=0;e<s.length;e++)n.push(s[e]);jh(t,(t=>{Cd(e,t,n)}))}function Id(e,t){const n=Mh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Uh(t,n.length>0?n:void 0)}jh(t,(t=>{Id(e,t)}))}function Ed(e,t){const n=Vh(bd(e,t)),s=Lh(e.transactionQueueTree_,t);return function(e,t,n){let s=n?e:e.parent;for(;null!==s;){if(t(s))return!0;s=s.parent}}(s,(t=>{Td(e,t)})),Td(e,s),qh(s,(t=>{Td(e,t)})),n}function Td(e,t){const n=Mh(t);if(n){const s=[];let r=[],i=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(xi(i===t-1,"All SENT items should be at beginning of queue."),i=t,n[t].status=3,n[t].abortReason="set"):(xi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(lh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&s.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===i?Uh(t,void 0):n.length=i+1,sd(e.eventQueue_,Vh(t),r);for(let e=0;e<s.length;e++)Za(s[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(e,t){const n=Sd(e),s=n.namespace;"firebase.com"===n.domain&&ja(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),s&&"undefined"!==s||"localhost"===n.domain||ja("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&qa("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ll(n.host,n.secure,s,r,t,"",s!==n.subdomain),path:new Sl(n.pathString)}},Sd=function(e){let t="",n="",s="",r="",i="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let s=n[e];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch(e){}t+="/"+s}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const s=n.split("=");2===s.length?t[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qa(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");s=t.substring(0,e).toLowerCase(),n=t.substring(e+1),i=s}"ns"in d&&(i=d.ns)}return{host:t,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Rd{constructor(e,t,n,s){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=s}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+to(this.snapshot.exportVal())}}class xd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return xi(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Nd{constructor(e,t,n,s){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=s}get key(){return Ml(this._path)?null:Ol(this._path)}get ref(){return new Dd(this._repo,this._path)}get _queryIdentifier(){const e=Ac(this._queryParams),t=Ga(e);return"{}"===t?"default":t}get _queryObject(){return Ac(this._queryParams)}isEqual(e){if(!((e=vo(e))instanceof Nd))return!1;const t=this._repo===e._repo,n=jl(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&n&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function Od(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ql){const s="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Ba)throw new Error(s);if("string"!=typeof t)throw new Error(r)}if(e.hasEnd()){if(e.getIndexEndName()!==Wa)throw new Error(s);if("string"!=typeof n)throw new Error(r)}}else if(e.getIndex()===uc){if(null!=t&&!Kh(t)||null!=n&&!Kh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(xi(e.getIndex()instanceof Cc||e.getIndex()===Ic,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ad(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dd extends Nd{constructor(e,t){super(e,t,new Nc,!1)}get parent(){const e=Dl(this._path);return null===e?null:new Dd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ld{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Sl(e),n=Ud(this.ref,e);return new Ld(this._node.getChild(t),n,uc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ld(n,Ud(this.ref,t),uc))))}hasChild(e){const t=new Sl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Md(e,t){return(e=vo(e))._checkNotDeleted("ref"),void 0!==t?Ud(e._root,t):e._root}function Ud(e,t){return null===xl((e=vo(e))._path)?Zh("child","path",t,!1):Xh("child","path",t,!1),new Dd(e._repo,Ll(e._path,t))}function Fd(e,t){(function(e,t){if(".info"===xl(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=vo(e))._path),Yh("set",t,e._path,!1);const n=new Hi;return function(e,t,n,s,r){_d(e,"set",{path:t.toString(),value:n,priority:s});const i=ud(e),o=wc(n,s),a=ph(e.serverSyncTree_,t),l=Oh(o,a,i),c=fd(e),u=oh(e.serverSyncTree_,t,l,c,!0);nd(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,s)=>{const i="ok"===n;i||qa("set at "+t+" failed: "+n);const o=lh(e.serverSyncTree_,c,!i);sd(e.eventQueue_,t,o),md(0,r,n,s)}));const h=Ed(e,t);yd(e,h),sd(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function jd(e,t){Qh("update",t,e._path,!1);const n=new Hi;return function(e,t,n,s){_d(e,"update",{path:t.toString(),value:n});let r=!0;const i=ud(e),o={};if(Ya(n,((n,s)=>{r=!1,o[n]=Nh(Ll(t,n),wc(s),e.serverSyncTree_,i)})),r)Ma("update() called with empty data.  Don't do anything."),md(0,s,"ok",void 0);else{const r=fd(e),i=ah(e.serverSyncTree_,t,o,r);nd(e.eventQueue_,i),e.server_.merge(t.toString(),n,((n,i)=>{const o="ok"===n;o||qa("update at "+t+" failed: "+n);const a=lh(e.serverSyncTree_,r,!o),l=a.length>0?yd(e,t):t;sd(e.eventQueue_,l,a),md(0,s,n,i)})),Ya(n,(n=>{const s=Ed(e,Ll(t,n));yd(e,s)})),sd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function qd(e){e=vo(e);const t=new Pd((()=>{})),n=new Vd(t);return function(e,t,n){const s=fh(e.serverSyncTree_,t);return null!=s?Promise.resolve(s):e.server_.get(t).then((s=>{const r=wc(s).withIndex(t._queryParams.getIndex());let i;if(dh(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())i=ch(e.serverSyncTree_,t._path,r);else{const n=yh(e.serverSyncTree_,t);i=hh(e.serverSyncTree_,t._path,r,n)}return sd(e.eventQueue_,t._path,i),uh(e.serverSyncTree_,t,n,null,!0),r}),(n=>(_d(e,"get for query "+to(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ld(t,new Dd(e._repo,e._path),e._queryParams.getIndex())))}class Vd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Rd("value",this,new Ld(e.snapshotNode,new Dd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xd(this,e,t):null}matches(e){return e instanceof Vd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Bd{}class Wd extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Yh("endAt",this._value,e._path,!0);const t=function(e,t,n){const s=e.copy();return s.endSet_=!0,void 0===t&&(t=null),s.indexEndValue_=t,void 0!==n?(s.endNameSet_=!0,s.indexEndName_=n):(s.endNameSet_=!1,s.indexEndName_=""),s}(e._queryParams,this._value,this._key);if(Ad(t),Od(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Nd(e._repo,e._path,t,e._orderByCalled)}}class zd extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Yh("startAt",this._value,e._path,!0);const t=function(e,t,n){const s=e.copy();return s.startSet_=!0,void 0===t&&(t=null),s.indexStartValue_=t,null!=n?(s.startNameSet_=!0,s.indexStartName_=n):(s.startNameSet_=!1,s.indexStartName_=""),s}(e._queryParams,this._value,this._key);if(Ad(t),Od(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Nd(e._repo,e._path,t,e._orderByCalled)}}class Hd extends Bd{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Sl(this._path);if(Ml(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Cc(t),s=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return Od(s),new Nd(e._repo,e._path,s,!0)}}function $d(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Xh("orderByChild","path",e,!1),new Hd(e)}class Gd extends Bd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Yh("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Wd(this._value,this._key)._apply(new zd(this._value,this._key)._apply(e))}}function Kd(e,t){return function(e,t,n,s){if(!(s&&void 0===n||$h(n)))throw new Error(mo(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}("equalTo","key",t,!0),new Gd(e,t)}function Yd(e,...t){let n=vo(e);for(const e of t)n=e._apply(n);return n}!function(e){xi(!Hu,"__referenceConstructor has already been defined"),Hu=e}(Dd),function(e){xi(!$u,"__referenceConstructor has already been defined"),$u=e}(Dd);
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
const Jd="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let Xd=!1;function Zd(e,t,n,s,r){let i=s||e.options.databaseURL;void 0===i&&(e.options.projectId||ja("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ma("Using default host for project ",e.options.projectId),i=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=kd(i,r),c=l.repoInfo;"undefined"!=typeof process&&(a={NODE_ENV:"production"}[Jd]),a?(o=!0,i=`http://${a}?ns=${c.namespace}`,l=kd(i,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new sl(sl.OWNER):new nl(e.name,e.options,t);ed("Invalid Firebase Database URL",l),Ml(l.path)||ja("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,s){let r=Qd[t.name];r||(r={},Qd[t.name]=r);let i=r[e.toURLString()];i&&ja("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return i=new ad(e,Xd,n,s),r[e.toURLString()]=i,i}(c,e,u,new tl(e.name,n));return new tp(h,e)}function ep(e,t){const n=Qd[t];n&&n[e.key]===e||ja(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(id)}(e),delete n[e.key]}class tp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ld(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dd(this._repo,Rl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ep(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ja("Cannot call "+e+" on a deleted database.")}}function np(e=la(),t){const n=sa(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Bi("database");e&&function(e,t,n,s={}){e=vo(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ja("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&ja('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new sl(sl.OWNER);else if(s.mockUserToken){const t="string"==typeof s.mockUserToken?s.mockUserToken:$i(s.mockUserToken,e.app.options.projectId);i=new sl(t)}!function(e,t,n,s){e.repoInfo_=new ll(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),s&&(e.authTokenProvider_=s)}(r,t,n,i)}
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
 */(n,...e)}return n}$l.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},$l.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Ea=oa,na(new yo("database",((e,{instanceIdentifier:t})=>Zd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ca(Ca,Ia,e),ca(Ca,Ia,"esm2017")}();
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
const sp="firebasestorage.googleapis.com",rp="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ip extends Qi{constructor(e,t,n=0){super(up(e),`Firebase Storage: ${t} (${up(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ip.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return up(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var op,ap,lp,cp;function up(e){return"storage/"+e}function hp(){return new ip(op.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function dp(){return new ip(op.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pp(){return new ip(op.CANCELED,"User canceled the upload/download.")}function fp(){return new ip(op.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _p(e){return new ip(op.INVALID_ARGUMENT,e)}function mp(){return new ip(op.APP_DELETED,"The Firebase app was deleted.")}function gp(e,t){return new ip(op.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function vp(e){throw new ip(op.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ap=op||(op={})).UNKNOWN="unknown",ap.OBJECT_NOT_FOUND="object-not-found",ap.BUCKET_NOT_FOUND="bucket-not-found",ap.PROJECT_NOT_FOUND="project-not-found",ap.QUOTA_EXCEEDED="quota-exceeded",ap.UNAUTHENTICATED="unauthenticated",ap.UNAUTHORIZED="unauthorized",ap.UNAUTHORIZED_APP="unauthorized-app",ap.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",ap.INVALID_CHECKSUM="invalid-checksum",ap.CANCELED="canceled",ap.INVALID_EVENT_NAME="invalid-event-name",ap.INVALID_URL="invalid-url",ap.INVALID_DEFAULT_BUCKET="invalid-default-bucket",ap.NO_DEFAULT_BUCKET="no-default-bucket",ap.CANNOT_SLICE_BLOB="cannot-slice-blob",ap.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",ap.NO_DOWNLOAD_URL="no-download-url",ap.INVALID_ARGUMENT="invalid-argument",ap.INVALID_ARGUMENT_COUNT="invalid-argument-count",ap.APP_DELETED="app-deleted",ap.INVALID_ROOT_OPERATION="invalid-root-operation",ap.INVALID_FORMAT="invalid-format",ap.INTERNAL_ERROR="internal-error",ap.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class yp{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=yp.makeFromUrl(e,t)}catch(t){return new yp(e,"")}if(""===n.path)return n;throw s=e,new ip(op.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.");var s}static makeFromUrl(e,t){let n=null;const s="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+s+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${s}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${t===sp?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${s}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<a.length;t++){const s=a[t],r=s.regex.exec(e);if(r){const e=r[s.indices.bucket];let t=r[s.indices.path];t||(t=""),n=new yp(e,t),s.postModify(n);break}}if(null==n)throw function(e){return new ip(op.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class bp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){return"string"==typeof e||e instanceof String}function Cp(e){return Ip()&&e instanceof Blob}function Ip(){return"undefined"!=typeof Blob&&!function(){var e;const t=null===(e=qi())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function Ep(e,t,n,s){if(s<t)throw _p(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw _p(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e,t,n){let s=t;return null==n&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function kp(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){n=n+(t(s)+"="+t(e[s]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Sp(e,t){const n=e>=500&&e<600,s=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return n||s||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(cp=lp||(lp={}))[cp.NO_ERROR=0]="NO_ERROR",cp[cp.NETWORK_ERROR=1]="NETWORK_ERROR",cp[cp.ABORT=2]="ABORT";class Rp{constructor(e,t,n,s,r,i,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new xp(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const s=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(s),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(s),this.pendingConnection_=null;const t=n.getErrorCode()===lp.NO_ERROR,r=n.getStatus();if(!t||Sp(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===lp.ABORT;return void e(!1,new xp(!1,null,t))}const i=-1!==this.successCodes_.indexOf(r);e(!0,new xp(i,n))}))},t=(e,t)=>{const n=this.resolve_,s=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());void 0!==e?n(e):n()}catch(e){s(e)}else if(null!==r){const e=hp();e.serverResponse=r.getErrorText(),this.errorCallback_?s(this.errorCallback_(r,e)):s(e)}else if(t.canceled){s(this.appDelete_?mp():pp())}else{s(dp())}};this.canceled_?t(0,new xp(!1,null,!0)):this.backoffId_=function(e,t,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(p,l())}),t)}function d(){i&&clearTimeout(i)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;s<64&&(s*=2),1===a?(a=2,n=0):n=1e3*(s+Math.random()),h(n)}let f=!1;function _(e){f||(f=!0,d(),c||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,_(!0)}),n),_}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class xp{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Pp(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Ip())return new Blob(e);throw new ip(op.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
function Np(e){if("undefined"==typeof atob)throw t="base-64",new ip(op.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ap{constructor(e,t){this.data=e,this.contentType=t||null}}function Dp(e,t){switch(e){case Op.RAW:return new Ap(Lp(t));case Op.BASE64:case Op.BASE64URL:return new Ap(Mp(e,t));case Op.DATA_URL:return new Ap(function(e){const t=new Up(e);return t.base64?Mp(Op.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw gp(Op.DATA_URL,"Malformed data URL.")}return Lp(t)}(t.rest)}(t),new Up(t).contentType)}throw hp()}function Lp(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|63&s);else if(55296==(64512&s)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){s=65536|(1023&s)<<10|1023&e.charCodeAt(++n),t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|63&s)}else t.push(239,191,189)}else 56320==(64512&s)?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|63&s)}return new Uint8Array(t)}function Mp(e,t){switch(e){case Op.BASE64:{const n=-1!==t.indexOf("-"),s=-1!==t.indexOf("_");if(n||s){throw gp(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Op.BASE64URL:{const n=-1!==t.indexOf("+"),s=-1!==t.indexOf("/");if(n||s){throw gp(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Np(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw gp(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let e=0;e<n.length;e++)s[e]=n.charCodeAt(e);return s}class Up{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw gp(Op.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Fp{constructor(e,t){let n=0,s="";Cp(e)?(this.data_=e,n=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Cp(this.data_)){const i=this.data_,o=(s=e,r=t,(n=i).webkitSlice?n.webkitSlice(s,r):n.mozSlice?n.mozSlice(s,r):n.slice?n.slice(s,r):null);return null===o?null:new Fp(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Fp(n,!0)}var n,s,r}static getBlob(...e){if(Ip()){const t=e.map((e=>e instanceof Fp?e.data_:e));return new Fp(Pp.apply(null,t))}{const t=e.map((e=>wp(e)?Dp(Op.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const s=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)s[r++]=e[t]})),new Fp(s,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(e){let t;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Vp(e,t){return t}class Bp{constructor(e,t,n,s){this.server=e,this.local=t||e,this.writable=!!n,this.xform=s||Vp}}let Wp=null;function zp(){if(Wp)return Wp;const e=[];e.push(new Bp("bucket")),e.push(new Bp("generation")),e.push(new Bp("metageneration")),e.push(new Bp("name","fullPath",!0));const t=new Bp("name");t.xform=function(e,t){return function(e){return!wp(e)||e.length<2?e:qp(e)}(t)},e.push(t);const n=new Bp("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Bp("timeCreated")),e.push(new Bp("updated")),e.push(new Bp("md5Hash",null,!0)),e.push(new Bp("cacheControl",null,!0)),e.push(new Bp("contentDisposition",null,!0)),e.push(new Bp("contentEncoding",null,!0)),e.push(new Bp("contentLanguage",null,!0)),e.push(new Bp("contentType",null,!0)),e.push(new Bp("metadata","customMetadata",!0)),Wp=e,Wp}function Hp(e,t,n){const s={type:"file"},r=n.length;for(let e=0;e<r;e++){const r=n[e];s[r.local]=r.xform(s,t[r.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,s=e.fullPath,r=new yp(n,s);return t._makeStorageReference(r)}})}(s,e),s}function $p(e,t,n){const s=jp(t);if(null===s)return null;return Hp(e,s,n)}function Gp(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const s=t[r];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}
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
 */const Kp="prefixes",Yp="items";function Jp(e,t,n){const s=jp(n);if(null===s)return null;return function(e,t,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Kp])for(const r of n[Kp]){const n=r.replace(/\/$/,""),i=e._makeStorageReference(new yp(t,n));s.prefixes.push(i)}if(n[Yp])for(const r of n[Yp]){const n=e._makeStorageReference(new yp(t,r.name));s.items.push(n)}return s}(e,t,s)}class Qp{constructor(e,t,n,s){this.url=e,this.method=t,this.handler=n,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){if(!e)throw hp()}function Zp(e,t){return function(n,s){const r=$p(e,s,t);return Xp(null!==r),r}}function ef(e,t){return function(n,s){const r=$p(e,s,t);return Xp(null!==r),function(e,t,n,s){const r=jp(t);if(null===r)return null;if(!wp(r.downloadTokens))return null;const i=r.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const r=e.bucket,i=e.fullPath;return Tp("/b/"+o(r)+"/o/"+o(i),n,s)+kp({alt:"media",token:t})}))[0]}(r,s,e.host,e._protocol)}}function tf(e){return function(t,n){let s;var r,i;return 401===t.getStatus()?s=t.getErrorText().includes("Firebase App Check token is invalid")?new ip(op.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new ip(op.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,s=new ip(op.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(r=e.path,s=new ip(op.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")):s=n,s.status=t.getStatus(),s.serverResponse=n.serverResponse,s}}function nf(e){const t=tf(e);return function(n,s){let r=t(n,s);var i;return 404===n.getStatus()&&(i=e.path,r=new ip(op.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")),r.serverResponse=s.serverResponse,r}}function sf(e,t,n,s,r){const i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",n&&n.length>0&&(i.delimiter=n),s&&(i.pageToken=s),r&&(i.maxResults=r);const o=Tp(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Qp(o,"GET",function(e,t){return function(n,s){const r=Jp(e,t,s);return Xp(null!==r),r}}(e,t.bucket),a);return l.urlParams=i,l.errorHandler=tf(t),l}function rf(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),s}class of{constructor(e,t,n,s){this.current=e,this.total=t,this.finalized=!!n,this.metadata=s||null}}function af(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Xp(!1)}return Xp(!!n&&-1!==(t||["active"]).indexOf(n)),n}const lf=262144;function cf(e,t,n,s,r,i,o,a){const l=new of(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw new ip(op.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;r>0&&(u=Math.min(u,r));const h=l.current,d=h+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},_=s.slice(h,d);if(null===_)throw fp();const m=t.maxUploadRetryTime,g=new Qp(n,"POST",(function(e,n){const r=af(e,["active","final"]),o=l.current+u,a=s.size();let c;return c="final"===r?Zp(t,i)(e,n):null,new of(o,a,"final"===r,c)}),m);return g.headers=f,g.body=_.uploadData(),g.progressCallback=a||null,g.errorHandler=tf(e),g}const uf="running",hf="paused",df="success",pf="canceled",ff="error";function _f(e){switch(e){case"running":case"pausing":case"canceling":return uf;case"paused":return hf;case"success":return df;case"canceled":return pf;default:return ff}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class vf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lp.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=lp.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=lp.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,s){if(this.sent_)throw vp("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==s)for(const e in s)s.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,s[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vp("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vp("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw vp("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vp("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class yf extends vf{initXhr(){this.xhr_.responseType="text"}}function bf(){return new yf}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=zp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(op.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(Sp(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=dp()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(op.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o=rf(t,s,r),a={name:o.fullPath},l=Tp(i,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Gp(o,n),h=e.maxUploadRetryTime,d=new Qp(l,"POST",(function(e){let t;af(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Xp(!1)}return Xp(wp(t)),t}),h);return d.urlParams=a,d.headers=c,d.body=u,d.errorHandler=tf(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,bf,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const s=function(e,t,n,s){const r=e.maxUploadRetryTime,i=new Qp(n,"POST",(function(e){const t=af(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Xp(!1)}n||Xp(!1);const r=Number(n);return Xp(!isNaN(r)),new of(r,s.size(),"final"===t)}),r);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=tf(t),i}(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(s,bf,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=lf*this._chunkMultiplier,t=new of(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((s,r)=>{let i;try{i=cf(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(i,bf,s,r,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(lf*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=function(e,t,n){const s=Tp(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Qp(s,"GET",Zp(e,n),r);return i.errorHandler=nf(t),i}(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(n,bf,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=rf(t,s,r),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Gp(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=Fp.getBlob(c,s,u);if(null===h)throw fp();const d={name:l.fullPath},p=Tp(i,e.host,e._protocol),f=e.maxUploadRetryTime,_=new Qp(p,"POST",Zp(e,n),f);return _.urlParams=d,_.headers=o,_.body=h.uploadData(),_.errorHandler=tf(t),_}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(n,bf,e,t);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=pp(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=_f(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,s){const r=new mf(t||void 0,n||void 0,s||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(_f(this._state)){case df:gf(this._resolve.bind(null,this.snapshot))();break;case pf:case ff:gf(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(_f(this._state)){case uf:case hf:e.next&&gf(e.next.bind(e,this.snapshot))();break;case df:e.complete&&gf(e.complete.bind(e))();break;default:e.error&&gf(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class Cf{constructor(e,t){this._service=e,this._location=t instanceof yp?t:yp.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cf(e,t)}get root(){const e=new yp(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qp(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new yp(this._location.bucket,e);return new Cf(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new ip(op.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function If(e){const t={prefixes:[],items:[]};return Ef(e,t).then((()=>t))}async function Ef(e,t,n){const s={pageToken:n},r=await function(e,t){null!=t&&"number"==typeof t.maxResults&&Ep("options.maxResults",1,1e3,t.maxResults);const n=t||{},s=sf(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(s,bf)}(e,s);t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await Ef(e,t,r.nextPageToken)}function Tf(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const s=Tp(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,i=new Qp(s,"GET",ef(e,n),r);return i.errorHandler=nf(t),i}(e.storage,e._location,zp());return e.storage.makeRequestWithTokens(t,bf).then((e=>{if(null===e)throw new ip(op.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function kf(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Tp(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,r=new Qp(n,"DELETE",(function(e,t){}),s);return r.successCodes=[200,204],r.errorHandler=nf(t),r}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,bf)}function Sf(e,t){if(e instanceof Pf){const n=e;if(null==n._bucket)throw new ip(op.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rp+"' property when initializing the app?");const s=new Cf(n,n._bucket);return null!=t?Sf(s,t):s}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),s=new yp(e._location.bucket,n);return new Cf(e.storage,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function Rf(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Pf)return new Cf(e,t);throw _p("To use ref(service, url), the first argument must be a Storage instance.")}return Sf(e,t)}function xf(e,t){const n=null==t?void 0:t[rp];return null==n?null:yp.makeFromBucketSpec(n,e)}class Pf{constructor(e,t,n,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=sp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=s?yp.makeFromBucketSpec(s,this._host):xf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=yp.makeFromBucketSpec(this._url,e):this._bucket=xf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ep("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cf(this,e)}_makeRequest(e,t,n,s,r=!0){if(this._deleted)return new bp(mp());{const i=function(e,t,n,s,r,i,o=!0){const a=kp(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,s),new Rp(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,s,t,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,s).getPromise()}}const Nf="@firebase/storage",Of="0.11.2",Af="storage";function Df(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new wf(e,new Fp(t),n)}(e=vo(e),t,n)}function Lf(e){return If(e=vo(e))}function Mf(e){return Tf(e=vo(e))}function Uf(e,t){return Rf(e=vo(e),t)}function Ff(e=la(),t){const n=sa(e=vo(e),Af).getImmediate({identifier:t}),s=Bi("storage");return s&&function(e,t,n,s={}){!function(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken="string"==typeof r?r:$i(r,e.app.options.projectId))}(e,t,n,s)}(n,...s),n}function jf(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Pf(n,s,r,t,oa)}na(new yo(Af,jf,"PUBLIC").setMultipleInstances(!0)),ca(Nf,Of,""),ca(Nf,Of,"esm2017");const qf={class:"container"},Vf=qs("h2",null,"レタッチ依頼",-1),Bf={class:"alert alert-warning"},Wf={class:"form-group"},zf={class:"input-group align-items-center mb-3"},Hf=qs("h5",{class:"me-3"},"店舗：",-1),$f={class:"btn-group"},Gf={class:"me-4"},Kf={class:"me-4"},Yf={class:"me-4"},Jf={class:"input-group align-items-center mb-3"},Qf=qs("h5",{class:"me-3"},"担当者：",-1),Xf={class:"input-group align-items-center mb-3"},Zf=qs("h5",{class:"me-3"},"キャスト名：",-1),e_={class:"row mb-3"},t_=qs("div",{class:"col"},[qs("h5",null,"修正箇所：")],-1),n_={class:"btn-group flex-column"},s_={class:"me-4"},r_={class:"me-4"},i_={class:"me-4"},o_={class:"me-4"},a_={class:"input-group align-items-center"},l_={class:"me-4"},c_=["disabled"],u_={class:"input-group align-items-center mb-3"},h_=qs("h5",{class:"me-3"},"顔の処理：",-1),d_={class:"row mb-3"},p_=qs("div",{class:"col"},[qs("h5",null,"提出期限：")],-1),f_={class:"btn-group flex-column"},__={class:"me-4"},m_={class:"me-4"},g_={class:"me-4"},v_={class:"me-4"},y_={class:"input-group align-items-center"},b_={class:"me-4"},w_=["disabled"],C_={class:"img_post"},I_=qs("h5",null," レタッチ画像：",-1),E_={class:"pc_area"},T_=["onDrop"],k_={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},S_=["onClick"],R_=qs("div",{class:"position-relative"},[qs("span",{class:"position-absolute delete-mark"},"×"),qs("img",{class:"file_icon",src:Hr})],-1),x_={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},P_={class:"z-3 bg-white .text-secondary w-50 h-25 rounded mt-4"},N_={class:"d-flex flex-column p-3"},O_={class:"d-flex justify-content-center items-center"},A_={class:"fs-3 lh-lg"},D_={class:"bg-secondary rounded mt-3",style:{height:"20px"}},L_={class:"w-100 h2",style:{height:"20px"}},M_={class:"mt-4 d-flex justify-content-end items-center"},U_={class:"btn btn-secondary px-4 py-2 fw-bold"},F_=qs("h3",null,"依頼中",-1),j_={class:"table-responsive mb-4"},q_={class:"table table-striped text-nowrap",style:{width:"1296px"}},V_=qs("thead",null,[qs("tr",null,[qs("th",{scope:"col"},"店舗"),qs("th",{scope:"col"},"担当者"),qs("th",{scope:"col"},"キャスト名"),qs("th",{scope:"col"},"修正箇所"),qs("th",{scope:"col"},"顔の処理"),qs("th",{scope:"col"},"提出期限")])],-1),B_={class:"text-wrap"},W_={class:"text-wrap"},z_={class:"text-wrap"},H_={class:"text-wrap"},$_={class:"text-wrap"},G_={class:"text-wrap"},K_={name:"retouch"};var Y_=Object.assign(K_,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),s=Md(n,"retouch"),r=it({checked:!1}),i=it({checked:!1}),o=it({manager:"",retouching:[],otherRetouching:[],retouchings:[],castName:"",faceRetouching:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ti(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const s=[],r={contentType:"image/jpeg"},i=Ff(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(i,o.castName+"/"+e.name);await Df(t,e,r);const n=await Mf(t);if(s.push(n),s.length==o.files.length){console.log("got all paths here now:",s);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Fd(Md(n,"retouch/"+e),{manager:o.manager,retouchings:o.retouching+","+o.otherRetouching,castName:o.castName,faceRetouching:o.faceRetouching,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=cr((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=cr((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),_=cr({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),m=()=>{_.value++},g=()=>{_.value--};return Cn((()=>{qd(Yd(s,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Ps(),Ds("section",null,[qs("div",qf,[Vf,qs("div",Bf,[qs("div",Wf,[qs("div",zf,[Hf,qs("div",$f,[qs("label",Gf,[un(qs("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Lr,o.shop]]),Ws(" DG ")]),qs("label",Kf,[un(qs("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Lr,o.shop]]),Ws(" KPG ")]),qs("label",Yf,[un(qs("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Lr,o.shop]]),Ws(" GG ")])])]),qs("div",Jf,[Qf,un(qs("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Or,o.manager]])]),qs("div",Xf,[Zf,un(qs("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.castName=e),class:"form-control"},null,512),[[Or,o.castName]])]),qs("div",e_,[t_,qs("div",n_,[qs("div",null,[qs("label",s_,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.retouching=e),value:"ほくろ"},null,512),[[Ar,o.retouching]]),Ws(" ほくろ ")]),qs("label",r_,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>o.retouching=e),value:"しわ"},null,512),[[Ar,o.retouching]]),Ws(" しわ ")]),qs("label",i_,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>o.retouching=e),value:"傷"},null,512),[[Ar,o.retouching]]),Ws(" 傷 ")]),qs("label",o_,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>o.retouching=e),value:"細身"},null,512),[[Ar,o.retouching]]),Ws(" 細身 ")])]),qs("div",a_,[qs("label",l_,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>r.checked=e)},null,512),[[Ar,r.checked]]),Ws(" その他 ")]),un(qs("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.otherRetouching=e),class:"form-control",disabled:!r.checked,style:{border:"1px solid #e1e1e1"},placeholder:"髪色やピアス、ネイルの修正等"},null,8,c_),[[Or,o.otherRetouching]])])])]),qs("div",u_,[h_,un(qs("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.faceRetouching=e),class:"form-control"},null,512),[[Or,o.faceRetouching]])]),qs("div",d_,[p_,qs("div",f_,[qs("div",null,[qs("label",__,[un(qs("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Lr,o.deadline]]),Ws(" 大至急 ")]),qs("label",m_,[un(qs("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Lr,o.deadline]]),Ws(" ～３日 ")]),qs("label",g_,[un(qs("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Lr,o.deadline]]),Ws(" ～７日 ")]),qs("label",v_,[un(qs("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Lr,o.deadline]]),Ws(" お任せ ")]),qs("div",y_,[qs("label",b_,[un(qs("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>i.checked=e)},null,512),[[Ar,i.checked]]),Ws(" その他 ")]),un(qs("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,w_),[[Or,o.otherDeadline]])])])])]),qs("div",C_,[I_,qs("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qs("div",E_,[qs("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qr((()=>{}),["prevent"])),onDrop:qr(h,["prevent"])},"ファイルアップロード",42,T_)]),qs("div",null,[qs("ul",k_,[(Ps(!0),Ds(Es,null,Ln(l.value,((e,t)=>(Ps(),Ds("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[R_,qs("span",null,J(e.name),1)],8,S_)))),128))])]),qs("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qs("button",{onClick:a,class:"btn btn-primary"},"投稿")])])]),un(qs("div",null,[qs("div",x_,[qs("div",P_,[qs("div",N_,[qs("div",O_,[qs("h2",A_,J(o.send),1)]),un(qs("div",D_,[qs("div",L_,[qs("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Vr,o.progressBar]]),qs("div",M_,[un(qs("button",U_," 完了 ",512),[[Vr,o.sending]]),un(qs("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Vr,o.send_completed]])])])])])],512),[[Vr,o.uploadModal]])]),F_,qs("div",j_,[qs("table",q_,[V_,qs("tbody",null,[(Ps(!0),Ds(Es,null,Ln(f.value,(e=>(Ps(),Ds("tr",null,[qs("td",B_,J(e.shop),1),qs("td",W_,J(e.manager),1),qs("td",z_,J(e.castName),1),qs("td",H_,J(e.retouchings),1),qs("td",$_,J(e.faceRetouching),1),qs("td",G_,J(e.deadlines),1)])))),256))])])]),qs("div",{class:"text-center mb-5"},[qs("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),qs("span",{class:"btn btn-secondary ms-4",onClick:m},"next >")])]))}}),J_={name:"App",components:{RequestRetouch:Y_}};const Q_={key:0,class:"btnBox text-center"};J_.render=function(e,t,n,s,r,i){const o=On("router-link"),a=On("router-view");return Ps(),Ds(Es,null,["index"==e.$route.name||"retouch"==e.$route.name?(Ps(),Ds("div",Q_,[Vs(o,{to:"/",class:"btn btn-primary mx-2"},{default:Xt((()=>[Ws("バナー依頼")])),_:1}),Vs(o,{to:"/retouch",class:"btn btn-warning mx-2"},{default:Xt((()=>[Ws("レタッチ依頼")])),_:1})])):zs("",!0),Vs(a)],64)};const X_=new Ti({state:()=>({page:0}),mutations:{set_page:(e,t)=>{e.page=t}}});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Z_="undefined"!=typeof window;const em=Object.assign;function tm(e,t){const n={};for(const s in t){const r=t[s];n[s]=sm(r)?r.map(e):e(r)}return n}const nm=()=>{},sm=Array.isArray,rm=/\/$/,im=e=>e.replace(rm,"");function om(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];".."!==r&&"."!==r||s.push("");let i,o,a=n.length-1;for(i=0;i<s.length;i++)if(o=s[i],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}(null!=s?s:t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function am(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function lm(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cm(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!um(e[n],t[n]))return!1;return!0}function um(e,t){return sm(e)?hm(e,t):sm(t)?hm(t,e):e===t}function hm(e,t){return sm(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var dm,pm,fm,_m;(pm=dm||(dm={})).pop="pop",pm.push="push",(_m=fm||(fm={})).back="back",_m.forward="forward",_m.unknown="";const mm=/^[^#]+#/;function gm(e,t){return e.replace(mm,"#")+t}const vm=()=>({left:window.pageXOffset,top:window.pageYOffset});function ym(e){let t;if("el"in e){const n=e.el,s="string"==typeof n&&n.startsWith("#"),r="string"==typeof n?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function bm(e,t){return(history.state?history.state.position-t:-1)+e}const wm=new Map;let Cm=()=>location.protocol+"//"+location.host;function Im(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let t=r.includes(e.slice(i))?e.slice(i).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),am(n,"")}return am(n,e)+s+r}function Em(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?vm():null}}function Tm(e){return"string"==typeof e||"symbol"==typeof e}const km={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sm=Symbol("");var Rm,xm;function Pm(e,t){return em(new Error,{type:e,[Sm]:!0},t)}function Nm(e,t){return e instanceof Error&&Sm in e&&(null==t||!!(e.type&t))}(xm=Rm||(Rm={}))[xm.aborted=4]="aborted",xm[xm.cancelled=8]="cancelled",xm[xm.duplicated=16]="duplicated";const Om="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0},Dm=/[.+*?^${}()[\]/\\]/g;function Lm(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Mm(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const e=Lm(s[n],r[n]);if(e)return e;n++}if(1===Math.abs(r.length-s.length)){if(Um(s))return 1;if(Um(r))return-1}return r.length-s.length}function Um(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Fm={type:0,value:""},jm=/[a-zA-Z0-9_]/;function qm(e,t,n){const s=function(e,t){const n=em({},Am,t),s=[];let r=n.start?"^":"";const i=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(r+="/");for(let s=0;s<t.length;s++){const o=t[s];let a=40+(n.sensitive?.25:0);if(0===o.type)s||(r+="/"),r+=o.value.replace(Dm,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:n,optional:l,regexp:c}=o;i.push({name:e,repeatable:n,optional:l});const u=c||Om;if(u!==Om){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;s||(h=l&&t.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),r+=h,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}s.push(e)}if(n.strict&&n.end){const e=s.length-1;s[e][s[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");return{re:o,score:s,keys:i,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){const s=t[e]||"",r=i[e-1];n[r.name]=s&&r.repeatable?s.split("/"):s}return n},stringify:function(t){let n="",s=!1;for(const r of e){s&&n.endsWith("/")||(n+="/"),s=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,l=i in t?t[i]:"";if(sm(l)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const c=sm(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${i}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):s=!0)}n+=c}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[Fm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a,l=0,c="",u="";function h(){c&&(0===n?i.push({type:0,value:c}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:"("===a?n=2:jm.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else s=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}(e.path),n),r=em(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Vm(e,t){const n=[],s=new Map;function r(e,n,s){const a=!s,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Wm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=s&&s.record;const c=$m(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(em({},l,{components:s?s.record.components:l.components,path:e,aliasOf:s?s.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,s="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&s+u)}if(h=qm(t,n,c),s?s.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!zm(h)&&i(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)r(e[t],h,s&&s.children[t])}s=s||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&o(h)}return d?()=>{i(d)}:nm}function i(e){if(Tm(e)){const t=s.get(e);t&&(s.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&s.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function o(e){let t=0;for(;t<n.length&&Mm(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Gm(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!zm(e)&&s.set(e.record.name,e)}return t=$m({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>r(e))),{addRoute:r,resolve:function(e,t){let r,i,o,a={};if("name"in e&&e.name){if(r=s.get(e.name),!r)throw Pm(1,{location:e});o=r.record.name,a=em(Bm(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&Bm(e.params,r.keys.map((e=>e.name)))),i=r.stringify(a)}else if("path"in e)i=e.path,r=n.find((e=>e.re.test(i))),r&&(a=r.parse(i),o=r.record.name);else{if(r=t.name?s.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw Pm(1,{location:e,currentLocation:t});o=r.record.name,a=em({},t.params,e.params),i=r.stringify(a)}const l=[];let c=r;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:i,params:a,matched:l,meta:Hm(l)}},removeRoute:i,getRoutes:function(){return n},getRecordMatcher:function(e){return s.get(e)}}}function Bm(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Wm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]="object"==typeof n?n[s]:n;return t}function zm(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hm(e){return e.reduce(((e,t)=>em(e,t.meta)),{})}function $m(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Gm(e,t){return t.children.some((t=>t===e||Gm(e,t)))}const Km=/#/g,Ym=/&/g,Jm=/\//g,Qm=/=/g,Xm=/\?/g,Zm=/\+/g,eg=/%5B/g,tg=/%5D/g,ng=/%5E/g,sg=/%60/g,rg=/%7B/g,ig=/%7C/g,og=/%7D/g,ag=/%20/g;function lg(e){return encodeURI(""+e).replace(ig,"|").replace(eg,"[").replace(tg,"]")}function cg(e){return lg(e).replace(Zm,"%2B").replace(ag,"+").replace(Km,"%23").replace(Ym,"%26").replace(sg,"`").replace(rg,"{").replace(og,"}").replace(ng,"^")}function ug(e){return null==e?"":function(e){return lg(e).replace(Km,"%23").replace(Xm,"%3F")}(e).replace(Jm,"%2F")}function hg(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function dg(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const s=n[e].replace(Zm," "),r=s.indexOf("="),i=hg(r<0?s:s.slice(0,r)),o=r<0?null:hg(s.slice(r+1));if(i in t){let e=t[i];sm(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function pg(e){let t="";for(let n in e){const s=e[n];if(n=cg(n).replace(Qm,"%3D"),null==s){void 0!==s&&(t+=(t.length?"&":"")+n);continue}(sm(s)?s.map((e=>e&&cg(e))):[s&&cg(s)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function fg(e){const t={};for(const n in e){const s=e[n];void 0!==s&&(t[n]=sm(s)?s.map((e=>null==e?null:""+e)):null==s?s:""+s)}return t}const _g=Symbol(""),mg=Symbol(""),gg=Symbol(""),vg=Symbol(""),yg=Symbol("");function bg(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function wg(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Pm(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Pm(2,{from:t,to:e})):(i&&s.enterCallbacks[r]===i&&"function"==typeof e&&i.push(e),o())},c=e.call(s&&s.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Cg(e,t,n,s){const r=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(i=a)||"displayName"in i||"props"in i||"__vccOpts"in i){const i=(a.__vccOpts||a)[t];i&&r.push(wg(i,n,s,o,e))}else{let i=a();r.push((()=>i.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const i=(a=r).__esModule||"Module"===a[Symbol.toStringTag]?r.default:r;var a;o.components[e]=i;const l=(i.__vccOpts||i)[t];return l&&wg(l,n,s,o,e)()}))))}}var i;return r}function Ig(e){const t=rs(gg),n=rs(vg),s=cr((()=>t.resolve(Ct(e.to)))),r=cr((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(lm.bind(null,r));if(o>-1)return o;const a=kg(e[t-2]);return t>1&&kg(r)===a&&i[i.length-1].path!==a?i.findIndex(lm.bind(null,e[t-2])):o})),i=cr((()=>r.value>-1&&function(e,t){for(const n in t){const s=t[n],r=e[n];if("string"==typeof s){if(s!==r)return!1}else if(!sm(r)||r.length!==s.length||s.some(((e,t)=>e!==r[t])))return!1}return!0}(n.params,s.value.params))),o=cr((()=>r.value>-1&&r.value===n.matched.length-1&&cm(n.params,s.value.params)));return{route:s,href:cr((()=>s.value.href)),isActive:i,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(nm):Promise.resolve()}}}const Eg=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ig,setup(e,{slots:t}){const n=it(Ig(e)),{options:s}=rs(gg),r=cr((()=>({[Sg(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Sg(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=t.default&&t.default(n);return e.custom?s:ur("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Tg=Eg;function kg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sg=(e,t,n)=>null!=e?e:null!=t?t:n,Rg=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=rs(yg),r=cr((()=>e.route||s.value)),i=rs(mg,0),o=cr((()=>{let e=Ct(i);const{matched:t}=r.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=cr((()=>r.value.matched[o.value]));ss(mg,cr((()=>o.value+1))),ss(_g,a),ss(yg,r);const l=bt(c,!1);var c;return rn((()=>[l.value,a.value,e.name]),(([e,t,n],[s,r,i])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===s&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&lm(t,r)&&s||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const s=r.value,i=e.name,o=a.value,c=o&&o.components[i];if(!c)return xg(n.default,{Component:c,route:s});const u=o.props[i],h=u?!0===u?s.params:"function"==typeof u?u(s):u:null,d=ur(c,em({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[i]=null)},ref:l}));return xg(n.default,{Component:d,route:s})||d}}});function xg(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Pg=Rg;function Ng(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}function Og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const Ag=Og,Dg=new Xi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Lg=new xo("@firebase/auth");function Mg(e,...t){Lg.logLevel<=Io.ERROR&&Lg.error(`Auth (${oa}): ${e}`,...t)}
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
 */function Ug(e,...t){throw jg(e,...t)}function Fg(e,...t){return jg(e,...t)}function jg(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Dg.create(e,...t)}function qg(e,t,...n){if(!e)throw jg(t,...n)}function Vg(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mg(t),new Error(t)}function Bg(e,t){e||Vg(t)}
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
 */function Wg(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function zg(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Hg(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==zg()&&"https:"!==zg()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class $g{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bg(t>e,"Short delay should be less than long delay!"),this.isMobile=Ki()||Yi()}get(){return Hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Gg(e,t){Bg(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Kg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Vg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Vg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Vg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Yg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Jg=new $g(3e4,6e4);
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
 */function Qg(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xg(e,t,n,s,r={}){return Zg(e,r,(async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=co(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Kg.fetch()(tv(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Zg(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},Yg),t);try{const t=new nv(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw sv(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw sv(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw sv(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw sv(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const s=Object.assign(Object.assign({},Ag()),{[t]:n});return new Xi("auth","Firebase",s).create(t,{appName:e.name})}(e,a,o);Ug(e,a)}}catch(t){if(t instanceof Qi)throw t;Ug(e,"network-request-failed",{message:String(t)})}}async function ev(e,t,n,s,r={}){const i=await Xg(e,t,n,s,r);return"mfaPendingCredential"in i&&Ug(e,"multi-factor-auth-required",{_serverResponse:i}),i}function tv(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?Gg(e.config,r):`${e.config.apiScheme}://${r}`}class nv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Fg(this.auth,"network-request-failed"))),Jg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function sv(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Fg(e,t,s);return r.customData._tokenResponse=n,r}
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
function rv(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function iv(e){return 1e3*Number(e)}function ov(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return Mg("JWT malformed, contained fewer than 3 sections"),null;try{const e=Mi(n);return e?JSON.parse(e):(Mg("Failed to decode base64 JWT payload"),null)}catch(e){return Mg("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function av(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Qi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class cv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rv(this.lastLoginAt),this.creationTime=rv(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function uv(e){var t;const n=e.auth,s=await e.getIdToken(),r=await av(e,async function(e,t){return Xg(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));qg(null==r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ng(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cv(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class hv{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qg(e.idToken,"internal-error"),qg(void 0!==e.idToken,"internal-error"),qg(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ov(e);return qg(t,"internal-error"),qg(void 0!==t.exp,"internal-error"),qg(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qg(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=
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
 */await async function(e,t){const n=await Zg(e,{},(async()=>{const n=co({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=tv(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Kg.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new hv;return n&&(qg("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&(qg("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&(qg("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hv,this.toJSON())}_performRefresh(){return Vg("not implemented")}}
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
 */function dv(e,t){qg("string"==typeof e||void 0===e,"internal-error",{appName:t})}class pv{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new cv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await av(this,this.stsTokenManager.getToken(this.auth,e));return qg(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=vo(e),s=await n.getIdToken(t),r=ov(s);qg(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:rv(iv(r.auth_time)),issuedAtTime:rv(iv(r.iat)),expirationTime:rv(iv(r.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=vo(e);await uv(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qg(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pv(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){qg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await uv(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await av(this,async function(e,t){return Xg(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:C}=t;qg(v&&C,e,"internal-error");const I=hv.fromJSON(this.name,C);qg("string"==typeof v,e,"internal-error"),dv(u,e.name),dv(h,e.name),qg("boolean"==typeof y,e,"internal-error"),qg("boolean"==typeof b,e,"internal-error"),dv(d,e.name),dv(p,e.name),dv(f,e.name),dv(_,e.name),dv(m,e.name),dv(g,e.name);const E=new pv({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),_&&(E._redirectEventId=_),E}static async _fromIdTokenResponse(e,t,n=!1){const s=new hv;s.updateFromServerResponse(t);const r=new pv({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await uv(r),r}}
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
 */const fv=new Map;function _v(e){Bg(e instanceof Function,"Expected a class definition");let t=fv.get(e);return t?(Bg(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fv.set(e,t),t)}
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
 */class mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mv.type="NONE";const gv=mv;
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
 */function vv(e,t,n){return`firebase:${e}:${t}:${n}`}class yv{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=vv(this.userKey,s.apiKey,r),this.fullPersistenceKey=vv("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pv._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yv(_v(gv),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=s[0]||_v(gv);const i=vv(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const s=pv._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(e){}}))),new yv(r,e,n)):new yv(r,e,n)}}
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
 */function bv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ev(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kv(t))return"Blackberry";if(Sv(t))return"Webos";if(Cv(t))return"Safari";if((t.includes("chrome/")||Iv(t))&&!t.includes("edge/"))return"Chrome";if(Tv(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wv(e=Gi()){return/firefox\//i.test(e)}function Cv(e=Gi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Iv(e=Gi()){return/crios\//i.test(e)}function Ev(e=Gi()){return/iemobile/i.test(e)}function Tv(e=Gi()){return/android/i.test(e)}function kv(e=Gi()){return/blackberry/i.test(e)}function Sv(e=Gi()){return/webos/i.test(e)}function Rv(e=Gi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xv(){return function(){const e=Gi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Pv(e=Gi()){return Rv(e)||Tv(e)||Sv(e)||kv(e)||/windows phone/i.test(e)||Ev(e)}
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
function Nv(e,t=[]){let n;switch(e){case"Browser":n=bv(Gi());break;case"Worker":n=`${bv(Gi())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${s}`}async function Ov(e,t){return Xg(e,"GET","/v2/recaptchaConfig",Qg(e,t))}function Av(e){return void 0!==e&&void 0!==e.enterprise}class Dv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Lv(e){return new Promise(((t,n)=>{const s=document.createElement("script");var r,i;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=Fg("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}))}class Mv{constructor(e){this.type="recaptcha-enterprise",this.auth=qv(e)}async verify(e="verify",t=!1){function n(t,n,s){const r=window.grecaptcha;Av(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,s)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ov(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new Dv(s);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Av(window.grecaptcha))n(r,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));Lv("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}}async function Uv(e,t,n,s=!1){const r=new Mv(e);let i;try{i=await r.verify(n)}catch(e){i=await r.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class jv{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new Fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_v(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await yv.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return qg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uv(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?vo(e):null;return t&&qg(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qg(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_v(e))}))}async initializeRecaptchaConfig(){const e=await Ov(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Dv(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Mv(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_v(e)||this._popupRedirectResolver;qg(t,this,"argument-error"),this.redirectPersistenceManager=await yv.create(this,[_v(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return qg(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Lg.logLevel<=Io.WARN&&Lg.warn(`Auth (${oa}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function qv(e){return vo(e)}class Vv{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return qg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Bv(e,t,n){const s=qv(e);qg(s._canInitEmulator,s,"emulator-config-failed"),qg(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),i=Wv(t),{host:o,port:a}=function(e){const t=Wv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const e=r[1];return{host:e,port:zv(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:zv(t)}}}(t),l=null===a?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Wv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zv(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Hv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vg("not implemented")}_getIdTokenResponse(e){return Vg("not implemented")}_linkToIdToken(e,t){return Vg("not implemented")}_getReauthenticationResolver(e){return Vg("not implemented")}}
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
async function $v(e,t){return ev(e,"POST","/v1/accounts:signInWithPassword",Qg(e,t))}
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
class Gv extends Hv{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Gv(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Gv(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Uv(e,n,"signInWithPassword");return $v(e,t)}return $v(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Uv(e,n,"signInWithPassword");return $v(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{email:this._email,oobCode:this._password});default:Ug(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Xg(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ug(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Kv(e,t){return ev(e,"POST","/v1/accounts:signInWithIdp",Qg(e,t))}
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
 */class Yv extends Hv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yv(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ug("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Ng(t,["providerId","signInMethod"]);if(!n||!s)return null;const i=new Yv(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return Kv(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Kv(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kv(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=co(t)}return e}}
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
 */class Jv{constructor(e){var t,n,s,r,i,o;const a=uo(ho(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);qg(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=uo(ho(e)).link,n=t?uo(ho(t)).deep_link_id:null,s=uo(ho(e)).deep_link_id;return(s?uo(ho(s)).link:null)||s||n||t||e}(e);try{return new Jv(t)}catch(e){return null}}}
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
 */class Qv{constructor(){this.providerId=Qv.PROVIDER_ID}static credential(e,t){return Gv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Jv.parseLink(t);return qg(n,"argument-error"),Gv._fromEmailAndCode(e,n.code,n.tenantId)}}Qv.PROVIDER_ID="password",Qv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Xv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Zv extends Xv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class ey extends Zv{constructor(){super("facebook.com")}static credential(e){return Yv._fromParams({providerId:ey.PROVIDER_ID,signInMethod:ey.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ey.credentialFromTaggedObject(e)}static credentialFromError(e){return ey.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ey.credential(e.oauthAccessToken)}catch(e){return null}}}ey.FACEBOOK_SIGN_IN_METHOD="facebook.com",ey.PROVIDER_ID="facebook.com";
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
class ty extends Zv{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yv._fromParams({providerId:ty.PROVIDER_ID,signInMethod:ty.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ty.credentialFromTaggedObject(e)}static credentialFromError(e){return ty.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ty.credential(t,n)}catch(e){return null}}}ty.GOOGLE_SIGN_IN_METHOD="google.com",ty.PROVIDER_ID="google.com";
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
class ny extends Zv{constructor(){super("github.com")}static credential(e){return Yv._fromParams({providerId:ny.PROVIDER_ID,signInMethod:ny.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ny.credentialFromTaggedObject(e)}static credentialFromError(e){return ny.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ny.credential(e.oauthAccessToken)}catch(e){return null}}}ny.GITHUB_SIGN_IN_METHOD="github.com",ny.PROVIDER_ID="github.com";
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
class sy extends Zv{constructor(){super("twitter.com")}static credential(e,t){return Yv._fromParams({providerId:sy.PROVIDER_ID,signInMethod:sy.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sy.credentialFromTaggedObject(e)}static credentialFromError(e){return sy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sy.credential(t,n)}catch(e){return null}}}sy.TWITTER_SIGN_IN_METHOD="twitter.com",sy.PROVIDER_ID="twitter.com";
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
class ry{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await pv._fromIdTokenResponse(e,n,s),i=iy(n);return new ry({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=iy(n);return new ry({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function iy(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class oy extends Qi{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,oy.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new oy(e,t,n,s)}}function ay(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw oy._fromErrorAndOperation(e,n,t,s);throw n}))}
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
async function ly(e,t,n=!1){const s="signIn",r=await ay(e,s,t),i=await ry._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}function cy(e,t,n){return async function(e,t){return ly(qv(e),t)}(vo(e),Qv.credential(t,n))}
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
 */const uy="__sak";
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
 */class hy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uy,"1"),this.storage.removeItem(uy),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class dy extends hy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gi();return Cv(e)||Rv(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Pv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);xv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const py=dy;
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
 */class fy extends hy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fy.type="SESSION";const _y=fy;
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
class my{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new my(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function gy(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */my.receivers=[];class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise(((o,a)=>{const l=gy("",20);s.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
 */function yy(){return window}
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
function by(){return void 0!==yy().WorkerGlobalScope&&"function"==typeof yy().importScripts}
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
const wy="firebaseLocalStorageDb",Cy="firebaseLocalStorage",Iy="fbase_key";class Ey{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ty(e,t){return e.transaction([Cy],t?"readwrite":"readonly").objectStore(Cy)}function ky(){const e=indexedDB.open(wy,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Cy,{keyPath:Iy})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Cy)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(wy);return new Ey(e).toPromise()}(),t(await ky()))}))}))}async function Sy(e,t,n){const s=Ty(e,!0).put({[Iy]:t,value:n});return new Ey(s).toPromise()}function Ry(e,t){const n=Ty(e,!0).delete(t);return new Ey(n).toPromise()}class xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ky()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return by()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=my._getInstance(by()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ky();return await Sy(e,uy,"1"),await Ry(e,uy),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sy(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ty(e,!1).get(t),s=await new Ey(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ry(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ty(e,!1).getAll();return new Ey(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}xy.type="LOCAL";const Py=xy;new $g(3e4,6e4);
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
class Ny extends Hv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kv(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kv(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kv(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Oy(e){return ly(e.auth,new Ny(e),e.bypassAuthState)}function Ay(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await av(e,ay(s,r,t,e),n);qg(i.idToken,s,"internal-error");const o=ov(i.idToken);qg(o,s,"internal-error");const{sub:a}=o;return qg(e.uid===a,s,"user-mismatch"),ry._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ug(s,"user-mismatch"),e}}(n,new Ny(e),e.bypassAuthState)}async function Dy(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),async function(e,t,n=!1){const s=await av(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ry._forOperation(e,"link",s)}(n,new Ny(e),e.bypassAuthState)}
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
 */class Ly{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Oy;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return Ay;default:Ug(this.auth,"internal-error")}}resolve(e){Bg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const My=new $g(2e3,1e4);class Uy extends Ly{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,Uy.currentPopupAction&&Uy.currentPopupAction.cancel(),Uy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return qg(e,this.auth,"internal-error"),e}async onExecution(){Bg(1===this.filter.length,"Popup operations only handle one event");const e=gy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Fg(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Fg(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Uy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Fg(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,My.get())};e()}}Uy.currentPopupAction=null;
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
const Fy="pendingRedirect",jy=new Map;class qy extends Ly{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=jy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return vv(Fy,e.config.apiKey,e.name)}(t),s=function(e){return _v(e._redirectPersistence)}(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}jy.set(this.auth._key(),e)}return this.bypassAuthState||jy.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Vy(e,t){jy.set(e._key(),t)}async function By(e,t,n=!1){const s=qv(e),r=
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
function(e,t){return t?_v(t):(qg(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(s,t),i=new qy(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}
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
 */class Wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hy(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hy(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Fg(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gy=/^https?/;async function Ky(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Xg(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Yy(e))return}catch(e){}Ug(e,"unauthorized-domain")}function Yy(e){const t=Wg(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!Gy.test(n))return!1;if($y.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
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
 */const Jy=new $g(3e4,6e4);function Qy(){const e=yy().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Xy(e){return new Promise(((t,n)=>{var s,r,i;function o(){Qy(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(Fg(e,"network-request-failed"))},timeout:Jy.get()})}if(null===(r=null===(s=yy().gapi)||void 0===s?void 0:s.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=yy().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return yy()[t]=()=>{gapi.load?o():n(Fg(e,"network-request-failed"))},Lv(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Zy=null,e}))}let Zy=null;
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
const eb=new $g(5e3,15e3),tb="__/auth/iframe",nb="emulator/auth/iframe",sb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(e){const t=e.config;qg(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gg(t,nb):`https://${e.config.authDomain}/${tb}`,s={apiKey:t.apiKey,appName:e.name,v:oa},r=rb.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${co(s).slice(1)}`}async function ob(e){const t=await function(e){return Zy=Zy||Xy(e),Zy}(e),n=yy().gapi;return qg(n,e,"internal-error"),t.open({where:document.body,url:ib(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sb,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=Fg(e,"network-request-failed"),i=yy().setTimeout((()=>{s(r)}),eb.get());function o(){yy().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{s(r)}))}))))}
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
 */const ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class lb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cb(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ab),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Gi().toLowerCase();n&&(a=Iv(c)?"_blank":n),wv(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gi()){var t;return Rv(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
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
 */(t||"",a),new lb(null);const h=window.open(t||"",a,u);qg(h,e,"popup-blocked");try{h.focus()}catch(e){}return new lb(h)}const ub="__/auth/handler",hb="emulator/auth/handler",db=encodeURIComponent("fac");async function pb(e,t,n,s,r,i){qg(e.config.authDomain,e,"auth-domain-config-required"),qg(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:oa,eventId:r};if(t instanceof Xv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",io(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Zv){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${db}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${ub}`;return Gg(e,hb)}
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
 */(e)}?${co(a).slice(1)}${c}`}const fb="webStorageSupport";const _b=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_y,this._completeRedirectFn=By,this._overrideRedirectResult=Vy}async _openPopup(e,t,n,s){var r;Bg(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return cb(e,await pb(e,t,n,Wg(),s),gy())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){yy().location.href=e}(await pb(e,t,n,Wg(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Bg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ob(e),n=new Wy(e);return t.register("authEvent",(t=>{qg(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fb,{type:fb},(n=>{var s;const r=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[fb];void 0!==r&&t(!!r),Ug(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ky(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pv()||Cv()||Rv()}};var mb="@firebase/auth",gb="0.23.2";
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
class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qg(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const yb=zi("authIdTokenMaxAge")||300;let bb=null;function wb(e=la()){const t=sa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=sa(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ao(n.getOptions(),null!=t?t:{}))return e;Ug(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:_b,persistence:[Py,py,_y]}),s=zi("authTokenSyncURL");if(s){const e=(r=s,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>yb)return;const s=null==t?void 0:t.token;bb!==s&&(bb=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))});!function(e,t,n){vo(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){vo(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}var r;const i=Vi("auth");return i&&Bv(n,`http://${i}`),n}var Cb;Cb="Browser",na(new yo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;qg(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:Cb,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(Cb)},l=new jv(n,s,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_v);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),na(new yo("auth-internal",(e=>{const t=qv(e.getProvider("auth").getImmediate());return new vb(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ca(mb,gb,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Cb)),ca(mb,gb,"esm2017");const Ib={class:"container"},Eb=qs("h2",null,"バナー依頼",-1),Tb={class:"alert alert-primary"},kb={class:"form-group"},Sb={class:"input-group align-items-center mb-3"},Rb=qs("h5",{class:"me-3"},"店舗：",-1),xb={class:"btn-group"},Pb={class:"me-4"},Nb={class:"me-4"},Ob={class:"me-4"},Ab={class:"input-group align-items-center mb-3"},Db=qs("h5",{class:"me-3"},"担当者：",-1),Lb={class:"row mb-3"},Mb=qs("div",{class:"col"},[qs("h5",null,"サイズ：")],-1),Ub={class:"btn-group flex-column"},Fb={class:"me-4"},jb={class:"me-4"},qb={class:"input-group align-items-center"},Vb={class:"me-4"},Bb=["disabled"],Wb={class:"input-group align-items-center mb-3"},zb=qs("h5",{class:"me-3"},"イベント名：",-1),Hb={class:"mb-3"},$b=qs("h5",{class:"me-3"},"イベント内容：",-1),Gb={class:"mb-3"},Kb=qs("h5",{class:"me-3"},"入れたい文言：",-1),Yb={class:"mb-3"},Jb=qs("h5",{class:"me-3"},"その他要望：",-1),Qb={class:"row mb-3"},Xb=qs("div",{class:"col"},[qs("h5",null,"提出期限：")],-1),Zb={class:"btn-group flex-column"},ew={class:"me-4"},tw={class:"me-4"},nw={class:"me-4"},sw={class:"me-4"},rw={class:"input-group align-items-center"},iw={class:"me-4"},ow=["disabled"],aw={class:"img_post"},lw=qs("h5",null," 参考画像や使用素材：",-1),cw={class:"pc_area"},uw=["onDrop"],hw={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},dw=["onClick"],pw=qs("div",{class:"position-relative"},[qs("span",{class:"position-absolute delete-mark"},"×"),qs("img",{class:"file_icon",src:Hr})],-1),fw={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},_w={class:"z-3 bg-white .text-secondary w-50 h-25 rounded mt-4"},mw={class:"d-flex flex-column p-3"},gw={class:"d-flex justify-content-center items-center"},vw={class:"fs-3 lh-lg"},yw={class:"bg-secondary rounded mt-3",style:{height:"20px"}},bw={class:"w-100 h2",style:{height:"20px"}},ww={class:"mt-4 d-flex justify-content-end items-center"},Cw={class:"btn btn-secondary px-4 py-2 fw-bold"},Iw=qs("h3",null,"依頼中",-1),Ew={class:"table-responsive mb-4"},Tw={class:"table table-striped text-nowrap",style:{width:"1296px"}},kw=qs("thead",null,[qs("tr",null,[qs("th",{scope:"col"},"店舗"),qs("th",{scope:"col"},"担当者"),qs("th",{scope:"col"},"サイズ"),qs("th",{scope:"col"},"イベント名"),qs("th",{scope:"col"},"内容"),qs("th",{scope:"col"},"文言"),qs("th",{scope:"col"},"その他要望"),qs("th",{scope:"col"},"提出期限")])],-1),Sw={class:"text-wrap"},Rw={class:"text-wrap"},xw={class:"text-wrap"},Pw={class:"text-wrap"},Nw={class:"text-wrap"},Ow={class:"text-wrap"},Aw={class:"text-wrap"},Dw={class:"text-wrap"},Lw={name:"index"};var Mw=Object.assign(Lw,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),s=Md(n,"banner"),r=it({checked:!1}),i=it({checked:!1}),o=it({manager:"",size:[],otherSize:[],sizes:[],eventName:"",eventDetails:"",wording:"",others:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ti(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const s=[],r={contentType:"image/jpeg"},i=Ff(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(i,o.eventName+"/"+e.name);await Df(t,e,r);const n=await Mf(t);if(s.push(n),s.length==o.files.length){console.log("got all paths here now:",s);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Fd(Md(n,"banner/"+e),{manager:o.manager,sizes:o.size+","+o.otherSize,eventName:o.eventName,eventDetails:o.eventDetails,wording:o.wording,others:o.others,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=cr((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=cr((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),_=cr({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),m=()=>{_.value++},g=()=>{_.value--};return Cn((()=>{qd(Yd(s,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Ps(),Ds("section",null,[qs("div",Ib,[Eb,qs("div",Tb,[qs("div",kb,[qs("div",Sb,[Rb,qs("div",xb,[qs("label",Pb,[un(qs("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Lr,o.shop]]),Ws(" DG ")]),qs("label",Nb,[un(qs("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Lr,o.shop]]),Ws(" KPG ")]),qs("label",Ob,[un(qs("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Lr,o.shop]]),Ws(" GG ")])])]),qs("div",Ab,[Db,un(qs("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Or,o.manager]])]),qs("div",Lb,[Mb,qs("div",Ub,[qs("div",null,[qs("label",Fb,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>o.size=e),value:"700*400"},null,512),[[Ar,o.size]]),Ws(" 700 * 400 ")]),qs("label",jb,[un(qs("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.size=e),value:"640*640"},null,512),[[Ar,o.size]]),Ws(" 640 * 640 ")])]),qs("div",qb,[qs("label",Vb,[un(qs("input",{type:"checkbox",name:"size","onUpdate:modelValue":t[6]||(t[6]=e=>r.checked=e)},null,512),[[Ar,r.checked]]),Ws(" その他 ")]),un(qs("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>o.otherSize=e),class:"form-control",disabled:!r.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他サイズはこちら"},null,8,Bb),[[Or,o.otherSize]])])])]),qs("div",Wb,[zb,un(qs("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>o.eventName=e),class:"form-control"},null,512),[[Or,o.eventName]])]),qs("div",Hb,[$b,un(qs("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.eventDetails=e),class:"form-control"},null,512),[[Or,o.eventDetails]])]),qs("div",Gb,[Kb,un(qs("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.wording=e),class:"form-control"},null,512),[[Or,o.wording]])]),qs("div",Yb,[Jb,un(qs("textarea",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.others=e),class:"form-control"},null,512),[[Or,o.others]])]),qs("div",Qb,[Xb,qs("div",Zb,[qs("div",null,[qs("label",ew,[un(qs("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Lr,o.deadline]]),Ws(" 大至急 ")]),qs("label",tw,[un(qs("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Lr,o.deadline]]),Ws(" ～３日 ")]),qs("label",nw,[un(qs("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Lr,o.deadline]]),Ws(" ～７日 ")]),qs("label",sw,[un(qs("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Lr,o.deadline]]),Ws(" お任せ ")]),qs("div",rw,[qs("label",iw,[un(qs("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>i.checked=e)},null,512),[[Ar,i.checked]]),Ws(" その他 ")]),un(qs("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,ow),[[Or,o.otherDeadline]])])])])]),qs("div",aw,[lw,qs("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qs("div",cw,[qs("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qr((()=>{}),["prevent"])),onDrop:qr(h,["prevent"])},"ファイルアップロード",42,uw)]),qs("div",null,[qs("ul",hw,[(Ps(!0),Ds(Es,null,Ln(l.value,((e,t)=>(Ps(),Ds("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[pw,qs("span",null,J(e.name),1)],8,dw)))),128))])]),qs("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qs("button",{onClick:a,class:"btn btn-primary"},"投稿")])])])]),un(qs("div",null,[qs("div",fw,[qs("div",_w,[qs("div",mw,[qs("div",gw,[qs("h2",vw,J(o.send),1)]),un(qs("div",yw,[qs("div",bw,[qs("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Vr,o.progressBar]]),qs("div",ww,[un(qs("button",Cw," 完了 ",512),[[Vr,o.sending]]),un(qs("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Vr,o.send_completed]])])])])])],512),[[Vr,o.uploadModal]]),Iw,qs("div",Ew,[qs("table",Tw,[kw,qs("tbody",null,[(Ps(!0),Ds(Es,null,Ln(f.value,(e=>(Ps(),Ds("tr",null,[qs("td",Sw,J(e.shop),1),qs("td",Rw,J(e.manager),1),qs("td",xw,J(e.sizes),1),qs("td",Pw,J(e.eventName),1),qs("td",Nw,J(e.eventDetails),1),qs("td",Ow,J(e.wording),1),qs("td",Aw,J(e.others),1),qs("td",Dw,J(e.deadlines),1)])))),256))])])]),qs("div",{class:"text-center mb-5"},[qs("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),qs("span",{class:"btn btn-secondary ms-4",onClick:m},"next >")])]))}});const Uw=qs("h3",null,"バナータスク",-1),Fw={class:"table-responsive mb-4"},jw={class:"table table-striped text-nowrap",style:{width:"1296px"}},qw=qs("thead",null,[qs("tr",null,[qs("th",{scope:"col"},"店舗"),qs("th",{scope:"col"},"担当者"),qs("th",{scope:"col"},"サイズ"),qs("th",{scope:"col"},"イベント名"),qs("th",{scope:"col"},"内容"),qs("th",{scope:"col"},"文言"),qs("th",{scope:"col"},"その他要望"),qs("th",{scope:"col"},"提出期限")])],-1),Vw={class:"text-wrap"},Bw={class:"text-wrap"},Ww={class:"text-wrap"},zw={class:"text-wrap"},Hw={class:"text-wrap"},$w={class:"text-wrap"},Gw={class:"text-wrap"},Kw={class:"text-wrap"},Yw={key:0,class:"btn btn_space btn-secondary pe-none"},Jw=[qs("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],Qw=["onClick"],Xw=[qs("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],Zw=["onClick"],eC=qs("h3",null,"レタッチタスク",-1),tC={class:"table-responsive mb-4"},nC={class:"table table-striped text-nowrap",style:{width:"1296px"}},sC=qs("thead",null,[qs("tr",null,[qs("th",{scope:"col"},"店舗"),qs("th",{scope:"col"},"担当者"),qs("th",{scope:"col"},"キャスト名"),qs("th",{scope:"col"},"修正箇所"),qs("th",{scope:"col"},"顔の処理"),qs("th",{scope:"col"},"提出期限")])],-1),rC={class:"text-wrap"},iC={class:"text-wrap"},oC={class:"text-wrap"},aC={class:"text-wrap"},lC={class:"text-wrap"},cC={class:"text-wrap"},uC={key:0,class:"btn btn_space btn-secondary pe-none"},hC=[qs("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],dC=["onClick"],pC=[qs("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],fC=["onClick"],_C={name:"manager-page"};var mC=Object.assign(_C,{setup(e){const t=np(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),n=Md(t,"banner"),s=Md(t,"retouch"),r=it({fire_data:[],completed:""}),i=()=>{qd(Yd(n,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);r.fire_data=t}))},o=cr((function(){return r.fire_data}));async function a(e){const t=Uf(Ff(),e),n=await Lf(t),s=await Promise.all(n.items.map((e=>Mf(e))));for(let e=1;e<s.length+1;e++){const t=s[e-1],r=new XMLHttpRequest;r.responseType="blob",r.open("GET",t),r.send(),r.onload=function(){const t=r.response,s=window.URL.createObjectURL(t),i=document.createElement("a");document.body.appendChild(i),i.href=s,i.download=n.items[e-1].name,i.click()}}}function l(e){Lf(Uf(Ff(),e+"/")).then((e=>{e.items.forEach((e=>{kf(vo(e))}))}))}const c=it({fire_data:[]}),u=()=>{qd(Yd(s,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);c.fire_data=t}))},h=cr((function(){return c.fire_data}));return Cn((()=>{i(),u()})),(e,n)=>(Ps(),Ds("section",null,[Uw,qs("div",Fw,[qs("table",jw,[qw,qs("tbody",null,[(Ps(!0),Ds(Es,null,Ln(o.value,(e=>(Ps(),Ds("tr",null,[qs("td",Vw,J(e.shop),1),qs("td",Bw,J(e.manager),1),qs("td",Ww,J(e.sizes),1),qs("td",zw,J(e.eventName),1),qs("td",Hw,J(e.eventDetails),1),qs("td",$w,J(e.wording),1),qs("td",Gw,J(e.others),1),qs("td",Kw,J(e.deadlines),1),qs("td",null,["false"==e.img?(Ps(),Ds("button",Yw,Jw)):zs("",!0),"true"==e.img?(Ps(),Ds("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.eventName)},Xw,8,Qw)):zs("",!0),qs("button",{class:"btn btn-danger ms-3",onClick:n=>{var s;s=e.id,jd(Md(t,"banner/"+s),{completed:"true"}),i(),l(e.eventName)}},"完了",8,Zw)])])))),256))])])]),eC,qs("div",tC,[qs("table",nC,[sC,qs("tbody",null,[(Ps(!0),Ds(Es,null,Ln(h.value,(e=>(Ps(),Ds("tr",null,[qs("td",rC,J(e.shop),1),qs("td",iC,J(e.manager),1),qs("td",oC,J(e.castName),1),qs("td",aC,J(e.retouchings),1),qs("td",lC,J(e.faceRetouching),1),qs("td",cC,J(e.deadlines),1),qs("td",null,["false"==e.img?(Ps(),Ds("button",uC,hC)):zs("",!0),"true"==e.img?(Ps(),Ds("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.castName)},pC,8,dC)):zs("",!0),qs("button",{class:"btn btn-danger ms-3",onClick:n=>{var s;s=e.id,jd(Md(t,"retouch/"+s),{completed:"true"}),u(),l(e.castName)}},"完了",8,fC)])])))),256))])])])]))}});const gC={class:"mx-auto col-sm-6"},vC=qs("h2",null,"ログイン",-1),yC={class:"mb-3"},bC=qs("label",{class:"form-label"},"メールアドレス：",-1),wC={class:"mb-3"},CC=qs("label",{class:"form-label"},"パスワード：",-1);var IC={__name:"Login",setup(e){aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"});const t=it({mailAddress:"",password:""}),n=wb(),s=async()=>{await function(e,t){return vo(e).setPersistence(t)}(n,_y).then((()=>cy(n,t.mailAddress,t.password))).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n)})),location.reload()};return(e,n)=>(Ps(),Ds("div",gC,[vC,qs("form",{onSubmit:n[2]||(n[2]=qr((()=>{}),["prevent"]))},[qs("div",yC,[bC,un(qs("input",{type:"email",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>t.mailAddress=e),autocomplete:"on"},null,512),[[Or,t.mailAddress]])]),qs("div",wC,[CC,un(qs("input",{type:"password",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>t.password=e),autocomplete:"on"},null,512),[[Or,t.password]])])],32),qs("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qs("button",{onClick:s,class:"btn btn-info text-white fw-bold"},"ログイン")])]))}};const EC=new function(e){const t=Vm(e.routes,e),n=e.parseQuery||dg,s=e.stringifyQuery||pg,r=e.history,i=bg(),o=bg(),a=bg(),l=bt(km,!0);let c=km;Z_&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tm.bind(null,(e=>""+e)),h=tm.bind(null,ug),d=tm.bind(null,hg);function p(e,i){if(i=em({},i||l.value),"string"==typeof e){const s=om(n,e,i.path),o=t.resolve({path:s.path},i),a=r.createHref(s.fullPath);return em(s,o,{params:d(o.params),hash:hg(s.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=em({},e,{path:om(n,e.path,i.path).path});else{const t=em({},e.params);for(const e in t)null==t[e]&&delete t[e];o=em({},e,{params:h(t)}),i.params=h(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(s,em({},e,{hash:(f=c,lg(f).replace(rg,"{").replace(og,"}").replace(ng,"^")),path:a.path}));var f;const _=r.createHref(p);return em({fullPath:p,hash:c,query:s===pg?fg(e.query):e.query||{}},a,{redirectedFrom:void 0,href:_})}function f(e){return"string"==typeof e?om(n,e,l.value.path):em({},e)}function _(e,t){if(c!==e)return Pm(8,{from:t,to:e})}function m(e){return v(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let s="function"==typeof n?n(e):n;return"string"==typeof s&&(s=s.includes("?")||s.includes("#")?s=f(s):{path:s},s.params={}),em({query:e.query,hash:e.hash,params:"path"in s?{}:e.params},s)}}function v(e,t){const n=c=p(e),r=l.value,i=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return v(em(f(u),{state:"object"==typeof u?em({},i,u.state):i,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&lm(t.matched[s],n.matched[r])&&cm(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(s,r,n)&&(d=Pm(16,{to:h,from:r}),N(r,r,!0,!1)),(d?Promise.resolve(d):w(h,r)).catch((e=>Nm(e)?Nm(e,2)?e:P(e):x(e,h,r))).then((e=>{if(e){if(Nm(e,2))return v(em({replace:a},f(e.to),{state:"object"==typeof e.to?em({},i,e.to.state):i,force:o}),t||h)}else e=I(h,r,!0,a,i);return C(h,r,e),e}))}function y(e,t){const n=_(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=D.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function w(e,t){let n;const[s,r,a]=function(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>lm(e,i)))?s.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>lm(e,a)))||r.push(a))}return[n,s,r]}(e,t);n=Cg(s.reverse(),"beforeRouteLeave",e,t);for(const r of s)r.leaveGuards.forEach((s=>{n.push(wg(s,e,t))}));const l=y.bind(null,e,t);return n.push(l),L(n).then((()=>{n=[];for(const s of i.list())n.push(wg(s,e,t));return n.push(l),L(n)})).then((()=>{n=Cg(r,"beforeRouteUpdate",e,t);for(const s of r)s.updateGuards.forEach((s=>{n.push(wg(s,e,t))}));return n.push(l),L(n)})).then((()=>{n=[];for(const s of a)if(s.beforeEnter)if(sm(s.beforeEnter))for(const r of s.beforeEnter)n.push(wg(r,e,t));else n.push(wg(s.beforeEnter,e,t));return n.push(l),L(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Cg(a,"beforeRouteEnter",e,t),n.push(l),L(n)))).then((()=>{n=[];for(const s of o.list())n.push(wg(s,e,t));return n.push(l),L(n)})).catch((e=>Nm(e,8)?e:Promise.reject(e)))}function C(e,t,n){a.list().forEach((s=>b((()=>s(e,t,n)))))}function I(e,t,n,s,i){const o=_(e,t);if(o)return o;const a=t===km,c=Z_?history.state:{};n&&(s||a?r.replace(e.fullPath,em({scroll:a&&c&&c.scroll},i)):r.push(e.fullPath,i)),l.value=e,N(e,t,n,a),P()}let E;function T(){E||(E=r.listen(((e,t,n)=>{const s=p(e),i=g(s);if(i)return void v(em(i,{replace:!0}),s).catch(nm);c=s;const o=l.value;var a,u;Z_&&(a=bm(o.fullPath,n.delta),u=vm(),wm.set(a,u)),w(s,o).catch((e=>Nm(e,12)?e:Nm(e,2)?(v(e.to,s).then((e=>{Nm(e,20)&&!n.delta&&n.type===dm.pop&&r.go(-1,!1)})).catch(nm),Promise.reject()):(n.delta&&r.go(-n.delta,!1),x(e,s,o)))).then((e=>{(e=e||I(s,o,!1))&&(n.delta&&!Nm(e,8)?r.go(-n.delta,!1):n.type===dm.pop&&Nm(e,20)&&r.go(-1,!1)),C(s,o,e)})).catch(nm)})))}let k,S=bg(),R=bg();function x(e,t,n){P(e);const s=R.list();return s.length?s.forEach((s=>s(e,t,n))):console.error(e),Promise.reject(e)}function P(e){return k||(k=!e,T(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset()),e}function N(t,n,s,r){const{scrollBehavior:i}=e;if(!Z_||!i)return Promise.resolve();const o=!s&&function(e){const t=wm.get(e);return wm.delete(e),t}(bm(t.fullPath,0))||(r||!s)&&history.state&&history.state.scroll||null;return Ft().then((()=>i(t,n,o))).then((e=>e&&ym(e))).catch((e=>x(e,t,n)))}const O=e=>r.go(e);let A;const D=new Set;function L(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return{currentRoute:l,listening:!0,addRoute:function(e,n){let s,r;return Tm(e)?(s=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,s)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:m,replace:function(e){return m(em(f(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:R.add,isReady:function(){return k&&l.value!==km?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",Tg),e.component("RouterView",Pg),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(l)}),Z_&&!A&&l.value===km&&(A=!0,m(r.location).catch((e=>{})));const t={};for(const e in km)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(gg,this),e.provide(vg,ot(t)),e.provide(yg,l);const n=e.unmount;D.add(e),e.unmount=function(){D.delete(e),D.size<1&&(c=km,E&&E(),E=null,l.value=km,A=!1,k=!1),n()}}}}({history:function(e){const t=function(e){const{history:t,location:n}=window,s={value:Im(e,n)},r={value:t.state};function i(s,i,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+s:Cm()+e+s;try{t[o?"replaceState":"pushState"](i,"",l),r.value=i}catch(e){console.error(e),n[o?"replace":"assign"](l)}}return r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:s,state:r,push:function(e,n){const o=em({},r.value,t.state,{forward:e,scroll:vm()});i(o.current,o,!0),i(e,em({},Em(s.value,e,null),{position:o.position+1},n),!1),s.value=e},replace:function(e,n){i(e,em({},t.state,Em(r.value.back,e,r.value.forward,!0),n,{position:r.value.position}),!0),s.value=e}}}(e=function(e){if(!e)if(Z_){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),im(e)}(e)),n=function(e,t,n,s){let r=[],i=[],o=null;const a=({state:i})=>{const a=Im(e,location),l=n.value,c=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===l)return void(o=null);u=c?i.position-c.position:0}else s(a);r.forEach((e=>{e(n.value,l,{delta:u,type:dm.pop,direction:u?u>0?fm.forward:fm.back:fm.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(em({},e.state,{scroll:vm()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace),s=em({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:gm.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}(),routes:[{path:"/",name:"index",component:Mw,meta:{requiresAuth:!0}},{path:"/retouch",name:"retouch",component:Y_,meta:{requiresAuth:!0}},{path:"/manager-page",name:"manager-page",component:mC,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:IC,meta:{requiresAuth:!1}}]});wb(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),EC.beforeEach((async(e,t)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),s=new Promise((e=>{const t=wb().onAuthStateChanged((n=>{t(),e(!!n)}))}));return n&&!await s?"/login":"login"==e.name&&await s?"/":void 0}));var TC=((...e)=>{const t=(zr||(zr=ws(Wr))).createApp(...e),{mount:n}=t;return t.mount=e=>{const s=function(e){if(g(e)){return document.querySelector(e)}return e}(e);if(!s)return;const r=t._component;m(r)||r.render||r.template||(r.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t})(J_);TC.use(X_),TC.use(EC),TC.mount("#app");
