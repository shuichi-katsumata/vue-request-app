function e(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t={},n=[],r=()=>{},s=()=>!1,i=/^on[^a-z]/,o=e=>i.test(e),a=e=>e.startsWith("onUpdate:"),l=Object.assign,c=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,h=(e,t)=>u.call(e,t),d=Array.isArray,p=e=>"[object Map]"===C(e),f=e=>"[object Set]"===C(e),m=e=>"[object Date]"===C(e),_=e=>"function"==typeof e,g=e=>"string"==typeof e,v=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,b=e=>y(e)&&_(e.then)&&_(e.catch),w=Object.prototype.toString,C=e=>w.call(e),E=e=>C(e).slice(8,-1),T=e=>"[object Object]"===C(e),I=e=>g(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,k=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},R=/-(\w)/g,x=S((e=>e.replace(R,((e,t)=>t?t.toUpperCase():"")))),O=/\B([A-Z])/g,N=S((e=>e.replace(O,"-$1").toLowerCase())),P=S((e=>e.charAt(0).toUpperCase()+e.slice(1))),A=S((e=>e?`on${P(e)}`:"")),D=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},M=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},U=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let F;const j=()=>F||(F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function q(e){if(d(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=g(r)?z(r):q(r);if(s)for(const e in s)t[e]=s[e]}return t}return g(e)||y(e)?e:void 0}const B=/;(?![^(]*\))/g,V=/:([^]+)/,W=/\/\*[^]*?\*\//g;function z(e){const t={};return e.replace(W,"").split(B).forEach((e=>{if(e){const n=e.split(V);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function H(e){let t="";if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){const r=H(e[n]);r&&(t+=r+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function G(e){return!!e||""===e}function K(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=v(e),r=v(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=K(e[r],t[r]);return n}(e,t);if(n=y(e),r=y(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!K(e[n],t[n]))return!1}}return String(e)===String(t)}function J(e,t){return e.findIndex((e=>K(e,t)))}const Y=e=>g(e)?e:null==e?"":d(e)||y(e)&&(e.toString===w||!_(e.toString))?JSON.stringify(e,Q,2):String(e),Q=(e,t)=>t&&t.__v_isRef?Q(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:f(t)?{[`Set(${t.size})`]:[...t.values()]}:!y(t)||d(t)||T(t)?t:String(t);let X;class Z{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=X,!e&&X&&(this.index=(X.scopes||(X.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=X;try{return X=this,e()}finally{X=t}}}on(){X=this}off(){X=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const ee=e=>{const t=new Set(e);return t.w=0,t.n=0,t},te=e=>(e.w&ie)>0,ne=e=>(e.n&ie)>0,re=new WeakMap;let se=0,ie=1;const oe=30;let ae;const le=Symbol(""),ce=Symbol("");class ue{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=X){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ae,t=de;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ae,ae=this,de=!0,ie=1<<++se,se<=oe?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ie})(this):he(this),this.fn()}finally{se<=oe&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];te(s)&&!ne(s)?s.delete(e):t[n++]=s,s.w&=~ie,s.n&=~ie}t.length=n}})(this),ie=1<<--se,ae=this.parent,de=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ae===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let de=!0;const pe=[];function fe(){pe.push(de),de=!1}function me(){const e=pe.pop();de=void 0===e||e}function _e(e,t,n){if(de&&ae){let t=re.get(e);t||re.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=ee()),ge(r)}}function ge(e,t){let n=!1;se<=oe?ne(e)||(e.n|=ie,n=!te(e)):n=!e.has(ae),n&&(e.add(ae),ae.deps.push(e))}function ve(e,t,n,r,s,i){const o=re.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&d(e)){const e=Number(r);o.forEach(((t,n)=>{("length"===n||n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":d(e)?I(n)&&a.push(o.get("length")):(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"delete":d(e)||(a.push(o.get(le)),p(e)&&a.push(o.get(ce)));break;case"set":p(e)&&a.push(o.get(le))}if(1===a.length)a[0]&&ye(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);ye(ee(e))}}function ye(e,t){const n=d(e)?e:[...e];for(const e of n)e.computed&&be(e);for(const e of n)e.computed||be(e)}function be(e,t){(e!==ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const we=e("__proto__,__v_isRef,__isVue"),Ce=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(v)),Ee=xe(),Te=xe(!1,!0),Ie=xe(!0),ke=Se();function Se(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=pt(this);for(let e=0,t=this.length;e<t;e++)_e(n,0,e+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(pt)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){fe();const n=pt(this)[t].apply(this,e);return me(),n}})),e}function Re(e){const t=pt(this);return _e(t,0,e),t.hasOwnProperty(e)}function xe(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_isShallow"===r)return t;if("__v_raw"===r&&s===(e?t?st:rt:t?nt:tt).get(n))return n;const i=d(n);if(!e){if(i&&h(ke,r))return Reflect.get(ke,r,s);if("hasOwnProperty"===r)return Re}const o=Reflect.get(n,r,s);return(v(r)?Ce.has(r):we(r))?o:(e||_e(n,0,r),t?o:yt(o)?i&&I(r)?o:o.value:y(o)?e?at(o):it(o):o)}}function Oe(e=!1){return function(t,n,r,s){let i=t[n];if(ut(i)&&yt(i)&&!yt(r))return!1;if(!e&&(ht(r)||ut(r)||(i=pt(i),r=pt(r)),!d(t)&&yt(i)&&!yt(r)))return i.value=r,!0;const o=d(t)&&I(n)?Number(n)<t.length:h(t,n),a=Reflect.set(t,n,r,s);return t===pt(s)&&(o?D(r,i)&&ve(t,"set",n,r):ve(t,"add",n,r)),a}}const Ne={get:Ee,set:Oe(),deleteProperty:function(e,t){const n=h(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ve(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return v(t)&&Ce.has(t)||_e(e,0,t),n},ownKeys:function(e){return _e(e,0,d(e)?"length":le),Reflect.ownKeys(e)}},Pe={get:Ie,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ae=l({},Ne,{get:Te,set:Oe(!0)}),De=e=>e,Le=e=>Reflect.getPrototypeOf(e);function Me(e,t,n=!1,r=!1){const s=pt(e=e.__v_raw),i=pt(t);n||(t!==i&&_e(s,0,t),_e(s,0,i));const{has:o}=Le(s),a=r?De:n?_t:mt;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void(e!==s&&e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,r=pt(n),s=pt(e);return t||(e!==s&&_e(r,0,e),_e(r,0,s)),e===s?n.has(e):n.has(e)||n.has(s)}function Fe(e,t=!1){return e=e.__v_raw,!t&&_e(pt(e),0,le),Reflect.get(e,"size",e)}function je(e){e=pt(e);const t=pt(this);return Le(t).has.call(t,e)||(t.add(e),ve(t,"add",e,e)),this}function qe(e,t){t=pt(t);const n=pt(this),{has:r,get:s}=Le(n);let i=r.call(n,e);i||(e=pt(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?D(t,o)&&ve(n,"set",e,t):ve(n,"add",e,t),this}function Be(e){const t=pt(this),{has:n,get:r}=Le(t);let s=n.call(t,e);s||(e=pt(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ve(t,"delete",e,void 0),i}function Ve(){const e=pt(this),t=0!==e.size,n=e.clear();return t&&ve(e,"clear",void 0,void 0),n}function We(e,t){return function(n,r){const s=this,i=s.__v_raw,o=pt(i),a=t?De:e?_t:mt;return!e&&_e(o,0,le),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function ze(e,t,n){return function(...r){const s=this.__v_raw,i=pt(s),o=p(i),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=s[e](...r),u=n?De:t?_t:mt;return!t&&_e(i,0,l?ce:le),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function He(e){return function(...t){return"delete"!==e&&this}}function $e(){const e={get(e){return Me(this,e)},get size(){return Fe(this)},has:Ue,add:je,set:qe,delete:Be,clear:Ve,forEach:We(!1,!1)},t={get(e){return Me(this,e,!1,!0)},get size(){return Fe(this)},has:Ue,add:je,set:qe,delete:Be,clear:Ve,forEach:We(!1,!0)},n={get(e){return Me(this,e,!0)},get size(){return Fe(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!1)},r={get(e){return Me(this,e,!0,!0)},get size(){return Fe(this,!0)},has(e){return Ue.call(this,e,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:We(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((s=>{e[s]=ze(s,!1,!1),n[s]=ze(s,!0,!1),t[s]=ze(s,!1,!0),r[s]=ze(s,!0,!0)})),[e,n,t,r]}const[Ge,Ke,Je,Ye]=$e();function Qe(e,t){const n=t?e?Ye:Je:e?Ke:Ge;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(h(n,r)&&r in t?n:t,r,s)}const Xe={get:Qe(!1,!1)},Ze={get:Qe(!1,!0)},et={get:Qe(!0,!1)},tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,st=new WeakMap;function it(e){return ut(e)?e:lt(e,!1,Ne,Xe,tt)}function ot(e){return lt(e,!1,Ae,Ze,nt)}function at(e){return lt(e,!0,Pe,et,rt)}function lt(e,t,n,r,s){if(!y(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(E(a));var a;if(0===o)return e;const l=new Proxy(e,2===o?r:n);return s.set(e,l),l}function ct(e){return ut(e)?ct(e.__v_raw):!(!e||!e.__v_isReactive)}function ut(e){return!(!e||!e.__v_isReadonly)}function ht(e){return!(!e||!e.__v_isShallow)}function dt(e){return ct(e)||ut(e)}function pt(e){const t=e&&e.__v_raw;return t?pt(t):e}function ft(e){return M(e,"__v_skip",!0),e}const mt=e=>y(e)?it(e):e,_t=e=>y(e)?at(e):e;function gt(e){de&&ae&&ge((e=pt(e)).dep||(e.dep=ee()))}function vt(e,t){const n=(e=pt(e)).dep;n&&ye(n)}function yt(e){return!(!e||!0!==e.__v_isRef)}function bt(e,t){return yt(e)?e:new wt(e,t)}class wt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:pt(e),this._value=t?e:mt(e)}get value(){return gt(this),this._value}set value(e){const t=this.__v_isShallow||ht(e)||ut(e);e=t?e:pt(e),D(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:mt(e),vt(this))}}function Ct(e){return yt(e)?e.value:e}const Et={get:(e,t,n)=>Ct(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Tt(e){return ct(e)?e:new Proxy(e,Et)}class It{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ue(e,(()=>{this._dirty||(this._dirty=!0,vt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=pt(this);return gt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function kt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(e){Rt(e,t,n)}return s}function St(e,t,n,r){if(_(e)){const s=kt(e,t,n,r);return s&&b(s)&&s.catch((e=>{Rt(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(St(e[i],t,n,r));return s}function Rt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const s=t.proxy,i=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,i))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void kt(o,null,10,[e,s,i])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let xt=!1,Ot=!1;const Nt=[];let Pt=0;const At=[];let Dt=null,Lt=0;const Mt=Promise.resolve();let Ut=null;function Ft(e){const t=Ut||Mt;return e?t.then(this?e.bind(this):e):t}function jt(e){Nt.length&&Nt.includes(e,xt&&e.allowRecurse?Pt+1:Pt)||(null==e.id?Nt.push(e):Nt.splice(function(e){let t=Pt+1,n=Nt.length;for(;t<n;){const r=t+n>>>1;Wt(Nt[r])<e?t=r+1:n=r}return t}(e.id),0,e),qt())}function qt(){xt||Ot||(Ot=!0,Ut=Mt.then(Ht))}function Bt(e,t=(xt?Pt+1:0)){for(;t<Nt.length;t++){const e=Nt[t];e&&e.pre&&(Nt.splice(t,1),t--,e())}}function Vt(e){if(At.length){const e=[...new Set(At)];if(At.length=0,Dt)return void Dt.push(...e);for(Dt=e,Dt.sort(((e,t)=>Wt(e)-Wt(t))),Lt=0;Lt<Dt.length;Lt++)Dt[Lt]();Dt=null,Lt=0}}const Wt=e=>null==e.id?1/0:e.id,zt=(e,t)=>{const n=Wt(e)-Wt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ht(e){Ot=!1,xt=!0,Nt.sort(zt);try{for(Pt=0;Pt<Nt.length;Pt++){const e=Nt[Pt];e&&!1!==e.active&&kt(e,null,14)}}finally{Pt=0,Nt.length=0,Vt(),xt=!1,Ut=null,(Nt.length||At.length)&&Ht()}}function $t(e,n,...r){if(e.isUnmounted)return;const s=e.vnode.props||t;let i=r;const o=n.startsWith("update:"),a=o&&n.slice(7);if(a&&a in s){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:n,trim:o}=s[e]||t;o&&(i=r.map((e=>g(e)?e.trim():e))),n&&(i=r.map(U))}let l,c=s[l=A(n)]||s[l=A(x(n))];!c&&o&&(c=s[l=A(N(n))]),c&&St(c,e,6,i);const u=s[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,St(u,e,6,i)}}function Gt(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const i=e.emits;let o={},a=!1;if(!_(e)){const r=e=>{const n=Gt(e,t,!0);n&&(a=!0,l(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return i||a?(d(i)?i.forEach((e=>o[e]=null)):l(o,i),y(e)&&r.set(e,o),o):(y(e)&&r.set(e,null),null)}function Kt(e,t){return!(!e||!o(t))&&(t=t.slice(2).replace(/Once$/,""),h(e,t[0].toLowerCase()+t.slice(1))||h(e,N(t))||h(e,t))}let Jt=null,Yt=null;function Qt(e){const t=Jt;return Jt=e,Yt=e&&e.type.__scopeId||null,t}function Xt(e,t=Jt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Pr(-1);const s=Qt(t);let i;try{i=e(...n)}finally{Qt(s),r._d&&Pr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Zt(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:c,emit:u,render:h,renderCache:d,data:p,setupState:f,ctx:m,inheritAttrs:_}=e;let g,v;const y=Qt(e);try{if(4&n.shapeFlag){const e=s||r;g=Hr(h.call(e,e,d,i,f,p,m)),v=c}else{const e=t;0,g=Hr(e.length>1?e(i,{attrs:c,slots:l,emit:u}):e(i,null)),v=t.props?c:en(c)}}catch(t){Rr.length=0,Rt(t,e,1),g=Br(kr)}let b=g;if(v&&!1!==_){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(a)&&(v=tn(v,o)),b=Vr(b,v))}return n.dirs&&(b=Vr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),g=b,Qt(y),g}const en=e=>{let t;for(const n in e)("class"===n||"style"===n||o(n))&&((t||(t={}))[n]=e[n]);return t},tn=(e,t)=>{const n={};for(const r in e)a(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function nn(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Kt(n,i))return!0}return!1}const rn={};function sn(e,t,n){return on(e,t,n)}function on(e,n,{immediate:s,deep:i,flush:o,onTrack:a,onTrigger:l}=t){var u;const h=X===(null==(u=Zr)?void 0:u.scope)?Zr:null;let p,f,m=!1,g=!1;if(yt(e)?(p=()=>e.value,m=ht(e)):ct(e)?(p=()=>e,i=!0):d(e)?(g=!0,m=e.some((e=>ct(e)||ht(e))),p=()=>e.map((e=>yt(e)?e.value:ct(e)?cn(e):_(e)?kt(e,h,2):void 0))):p=_(e)?n?()=>kt(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),St(e,h,3,[y])}:r,n&&i){const e=p;p=()=>cn(e())}let v,y=e=>{f=E.onStop=()=>{kt(e,h,4)}};if(is){if(y=r,n?s&&St(n,h,3,[p(),g?[]:void 0,y]):p(),"sync"!==o)return r;{const e=ds();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(rn):rn;const w=()=>{if(E.active)if(n){const e=E.run();(i||m||(g?e.some(((e,t)=>D(e,b[t]))):D(e,b)))&&(f&&f(),St(n,h,3,[e,b===rn?void 0:g&&b[0]===rn?[]:b,y]),b=e)}else E.run()};let C;w.allowRecurse=!!n,"sync"===o?C=w:"post"===o?C=()=>br(w,h&&h.suspense):(w.pre=!0,h&&(w.id=h.uid),C=()=>jt(w));const E=new ue(p,C);n?s?w():b=E.run():"post"===o?br(E.run.bind(E),h&&h.suspense):E.run();const T=()=>{E.stop(),h&&h.scope&&c(h.scope.effects,E)};return v&&v.push(T),T}function an(e,t,n){const r=this.proxy,s=g(e)?e.includes(".")?ln(r,e):()=>r[e]:e.bind(r,r);let i;_(t)?i=t:(i=t.handler,n=t);const o=Zr;ts(this);const a=on(s,i.bind(r),n);return o?ts(o):ns(),a}function ln(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function cn(e,t){if(!y(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),yt(e))cn(e.value,t);else if(d(e))for(let n=0;n<e.length;n++)cn(e[n],t);else if(f(e)||p(e))e.forEach((e=>{cn(e,t)}));else if(T(e))for(const n in e)cn(e[n],t);return e}function un(e,n){const r=Jt;if(null===r)return e;const s=ls(r)||r.proxy,i=e.dirs||(e.dirs=[]);for(let e=0;e<n.length;e++){let[r,o,a,l=t]=n[e];r&&(_(r)&&(r={mounted:r,updated:r}),r.deep&&cn(o),i.push({dir:r,instance:s,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function hn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(fe(),St(l,n,8,[e.el,a,e,t]),me())}}function dn(e,t){return _(e)?(()=>l({name:e.name},t,{setup:e}))():e}const pn=e=>!!e.type.__asyncLoader,fn=e=>e.type.__isKeepAlive;function mn(e,t){gn(e,"a",t)}function _n(e,t){gn(e,"da",t)}function gn(e,t,n=Zr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(yn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)fn(e.parent.vnode)&&vn(r,t,n,e),e=e.parent}}function vn(e,t,n,r){const s=yn(t,e,r,!0);kn((()=>{c(r[t],s)}),n)}function yn(e,t,n=Zr,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;fe(),ts(n);const s=St(t,n,e,r);return ns(),me(),s});return r?s.unshift(i):s.push(i),i}}const bn=e=>(t,n=Zr)=>(!is||"sp"===e)&&yn(e,((...e)=>t(...e)),n),wn=bn("bm"),Cn=bn("m"),En=bn("bu"),Tn=bn("u"),In=bn("bum"),kn=bn("um"),Sn=bn("sp"),Rn=bn("rtg"),xn=bn("rtc");function On(e,t=Zr){yn("ec",e,t)}const Nn="components";function Pn(e,t){return function(e,t,n=!0,r=!1){const s=Jt||Zr;if(s){const n=s.type;if(e===Nn){const e=function(e,t=!0){return _(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===x(t)||e===P(x(t))))return n}const i=Dn(s[e]||n[e],t)||Dn(s.appContext[e],t);return!i&&r?n:i}}(Nn,e,!0,t)||e}const An=Symbol.for("v-ndc");function Dn(e,t){return e&&(e[t]||e[x(t)]||e[P(x(t))])}function Ln(e,t,n,r){let s;const i=n&&n[r];if(d(e)||g(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,i&&i[n])}else if("number"==typeof e){s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,i&&i[n])}else if(y(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,i&&i[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];s[r]=t(e[o],o,r,i&&i[r])}}else s=[];return n&&(n[r]=s),s}const Mn=e=>e?rs(e)?ls(e)||e.proxy:Mn(e.parent):null,Un=l(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mn(e.parent),$root:e=>Mn(e.root),$emit:e=>e.emit,$options:e=>Hn(e),$forceUpdate:e=>e.f||(e.f=()=>jt(e.update)),$nextTick:e=>e.n||(e.n=Ft.bind(e.proxy)),$watch:e=>an.bind(e)}),Fn=(e,n)=>e!==t&&!e.__isScriptSetup&&h(e,n),jn={get({_:e},n){const{ctx:r,setupState:s,data:i,props:o,accessCache:a,type:l,appContext:c}=e;let u;if("$"!==n[0]){const l=a[n];if(void 0!==l)switch(l){case 1:return s[n];case 2:return i[n];case 4:return r[n];case 3:return o[n]}else{if(Fn(s,n))return a[n]=1,s[n];if(i!==t&&h(i,n))return a[n]=2,i[n];if((u=e.propsOptions[0])&&h(u,n))return a[n]=3,o[n];if(r!==t&&h(r,n))return a[n]=4,r[n];Bn&&(a[n]=0)}}const d=Un[n];let p,f;return d?("$attrs"===n&&_e(e,0,n),d(e)):(p=l.__cssModules)&&(p=p[n])?p:r!==t&&h(r,n)?(a[n]=4,r[n]):(f=c.config.globalProperties,h(f,n)?f[n]:void 0)},set({_:e},n,r){const{data:s,setupState:i,ctx:o}=e;return Fn(i,n)?(i[n]=r,!0):s!==t&&h(s,n)?(s[n]=r,!0):!h(e.props,n)&&(("$"!==n[0]||!(n.slice(1)in e))&&(o[n]=r,!0))},has({_:{data:e,setupState:n,accessCache:r,ctx:s,appContext:i,propsOptions:o}},a){let l;return!!r[a]||e!==t&&h(e,a)||Fn(n,a)||(l=o[0])&&h(l,a)||h(s,a)||h(Un,a)||h(i.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:h(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function qn(e){return d(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Bn=!0;function Vn(e){const t=Hn(e),n=e.proxy,s=e.ctx;Bn=!1,t.beforeCreate&&Wn(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:a,watch:l,provide:c,inject:u,created:h,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:v,deactivated:b,beforeDestroy:w,beforeUnmount:C,destroyed:E,unmounted:T,render:I,renderTracked:k,renderTriggered:S,errorCaptured:R,serverPrefetch:x,expose:O,inheritAttrs:N,components:P,directives:A,filters:D}=t;if(u&&function(e,t,n=r){d(e)&&(e=Jn(e));for(const n in e){const r=e[n];let s;s=y(r)?"default"in r?sr(r.from||n,r.default,!0):sr(r.from||n):sr(r),yt(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[n]=s}}(u,s,null),a)for(const e in a){const t=a[e];_(t)&&(s[e]=t.bind(n))}if(i){const t=i.call(n,n);y(t)&&(e.data=it(t))}if(Bn=!0,o)for(const e in o){const t=o[e],i=_(t)?t.bind(n,n):_(t.get)?t.get.bind(n,n):r,a=!_(t)&&_(t.set)?t.set.bind(n):r,l=cs({get:i,set:a});Object.defineProperty(s,e,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(l)for(const e in l)zn(l[e],s,n,e);if(c){const e=_(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{rr(t,e[t])}))}function L(e,t){d(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Wn(h,e,"c"),L(wn,p),L(Cn,f),L(En,m),L(Tn,g),L(mn,v),L(_n,b),L(On,R),L(xn,k),L(Rn,S),L(In,C),L(kn,T),L(Sn,x),d(O))if(O.length){const t=e.exposed||(e.exposed={});O.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===r&&(e.render=I),null!=N&&(e.inheritAttrs=N),P&&(e.components=P),A&&(e.directives=A)}function Wn(e,t,n){St(d(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function zn(e,t,n,r){const s=r.includes(".")?ln(n,r):()=>n[r];if(g(e)){const n=t[e];_(n)&&sn(s,n)}else if(_(e))sn(s,e.bind(n));else if(y(e))if(d(e))e.forEach((e=>zn(e,t,n,r)));else{const r=_(e.handler)?e.handler.bind(n):t[e.handler];_(r)&&sn(s,r,e)}}function Hn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:s.length||n||r?(l={},s.length&&s.forEach((e=>$n(l,e,o,!0))),$n(l,t,o)):l=t,y(t)&&i.set(t,l),l}function $n(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&$n(e,i,n,!0),s&&s.forEach((t=>$n(e,t,n,!0)));for(const s in t)if(r&&"expose"===s);else{const r=Gn[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Gn={data:Kn,props:Xn,emits:Xn,methods:Qn,computed:Qn,beforeCreate:Yn,created:Yn,beforeMount:Yn,mounted:Yn,beforeUpdate:Yn,updated:Yn,beforeDestroy:Yn,beforeUnmount:Yn,destroyed:Yn,unmounted:Yn,activated:Yn,deactivated:Yn,errorCaptured:Yn,serverPrefetch:Yn,components:Qn,directives:Qn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=l(Object.create(null),e);for(const r in t)n[r]=Yn(e[r],t[r]);return n},provide:Kn,inject:function(e,t){return Qn(Jn(e),Jn(t))}};function Kn(e,t){return t?e?function(){return l(_(e)?e.call(this,this):e,_(t)?t.call(this,this):t)}:t:e}function Jn(e){if(d(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yn(e,t){return e?[...new Set([].concat(e,t))]:t}function Qn(e,t){return e?l(Object.create(null),e,t):t}function Xn(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:l(Object.create(null),qn(e),qn(null!=t?t:{})):t}function Zn(){return{app:null,config:{isNativeTag:s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let er=0;function tr(e,t){return function(n,r=null){_(n)||(n=l({},n)),null==r||y(r)||(r=null);const s=Zn(),i=new Set;let o=!1;const a=s.app={_uid:er++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ps,get config(){return s.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&_(e.install)?(i.add(e),e.install(a,...t)):_(e)&&(i.add(e),e(a,...t))),a),mixin:e=>(s.mixins.includes(e)||s.mixins.push(e),a),component:(e,t)=>t?(s.components[e]=t,a):s.components[e],directive:(e,t)=>t?(s.directives[e]=t,a):s.directives[e],mount(i,l,c){if(!o){const u=Br(n,r);return u.appContext=s,l&&t?t(u,i):e(u,i,c),o=!0,a._container=i,i.__vue_app__=a,ls(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(s.provides[e]=t,a),runWithContext(e){nr=a;try{return e()}finally{nr=null}}};return a}}let nr=null;function rr(e,t){if(Zr){let n=Zr.provides;const r=Zr.parent&&Zr.parent.provides;r===n&&(n=Zr.provides=Object.create(r)),n[e]=t}else;}function sr(e,t,n=!1){const r=Zr||Jt;if(r||nr){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nr._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&_(t)?t.call(r&&r.proxy):t}}function ir(e,n,r,s){const[i,o]=e.propsOptions;let a,l=!1;if(n)for(let t in n){if(k(t))continue;const c=n[t];let u;i&&h(i,u=x(t))?o&&o.includes(u)?(a||(a={}))[u]=c:r[u]=c:Kt(e.emitsOptions,t)||t in s&&c===s[t]||(s[t]=c,l=!0)}if(o){const n=pt(r),s=a||t;for(let t=0;t<o.length;t++){const a=o[t];r[a]=or(i,n,a,s[a],e,!h(s,a))}}return l}function or(e,t,n,r,s,i){const o=e[n];if(null!=o){const e=h(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&_(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(ts(s),r=i[n]=e.call(null,t),ns())}else r=e}o[0]&&(i&&!e?r=!1:!o[1]||""!==r&&r!==N(n)||(r=!0))}return r}function ar(e,r,s=!1){const i=r.propsCache,o=i.get(e);if(o)return o;const a=e.props,c={},u=[];let p=!1;if(!_(e)){const t=e=>{p=!0;const[t,n]=ar(e,r,!0);l(c,t),n&&u.push(...n)};!s&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!a&&!p)return y(e)&&i.set(e,n),n;if(d(a))for(let e=0;e<a.length;e++){const n=x(a[e]);lr(n)&&(c[n]=t)}else if(a)for(const e in a){const t=x(e);if(lr(t)){const n=a[e],r=c[t]=d(n)||_(n)?{type:n}:l({},n);if(r){const e=hr(Boolean,r.type),n=hr(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||h(r,"default"))&&u.push(t)}}}const f=[c,u];return y(e)&&i.set(e,f),f}function lr(e){return"$"!==e[0]}function cr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function ur(e,t){return cr(e)===cr(t)}function hr(e,t){return d(t)?t.findIndex((t=>ur(t,e))):_(t)&&ur(t,e)?0:-1}const dr=e=>"_"===e[0]||"$stable"===e,pr=e=>d(e)?e.map(Hr):[Hr(e)],fr=(e,t,n)=>{if(t._n)return t;const r=Xt(((...e)=>pr(t(...e))),n);return r._c=!1,r},mr=(e,t,n)=>{const r=e._ctx;for(const n in e){if(dr(n))continue;const s=e[n];if(_(s))t[n]=fr(0,s,r);else if(null!=s){const e=pr(s);t[n]=()=>e}}},_r=(e,t)=>{const n=pr(t);e.slots.default=()=>n},gr=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=pt(t),M(t,"_",n)):mr(t,e.slots={})}else e.slots={},t&&_r(e,t);M(e.slots,Ur,1)},vr=(e,n,r)=>{const{vnode:s,slots:i}=e;let o=!0,a=t;if(32&s.shapeFlag){const e=n._;e?r&&1===e?o=!1:(l(i,n),r||1!==e||delete i._):(o=!n.$stable,mr(n,i)),a=n}else n&&(_r(e,n),a={default:1});if(o)for(const e in i)dr(e)||e in a||delete i[e]};function yr(e,n,r,s,i=!1){if(d(e))return void e.forEach(((e,t)=>yr(e,n&&(d(n)?n[t]:n),r,s,i)));if(pn(s)&&!i)return;const o=4&s.shapeFlag?ls(s.component)||s.component.proxy:s.el,a=i?null:o,{i:l,r:u}=e,p=n&&n.r,f=l.refs===t?l.refs={}:l.refs,m=l.setupState;if(null!=p&&p!==u&&(g(p)?(f[p]=null,h(m,p)&&(m[p]=null)):yt(p)&&(p.value=null)),_(u))kt(u,l,12,[a,f]);else{const t=g(u),n=yt(u);if(t||n){const s=()=>{if(e.f){const n=t?h(m,u)?m[u]:f[u]:u.value;i?d(n)&&c(n,o):d(n)?n.includes(o)||n.push(o):t?(f[u]=[o],h(m,u)&&(m[u]=f[u])):(u.value=[o],e.k&&(f[e.k]=u.value))}else t?(f[u]=a,h(m,u)&&(m[u]=a)):n&&(u.value=a,e.k&&(f[e.k]=a))};a?(s.id=-1,br(s,r)):s()}}}const br=function(e,t){var n;t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):(d(n=e)?At.push(...n):Dt&&Dt.includes(n,n.allowRecurse?Lt+1:Lt)||At.push(n),qt())};function wr(e){return function(e,s){j().__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:d,setElementText:p,parentNode:f,nextSibling:m,setScopeId:_=r,insertStaticContent:g}=e,v=(e,t,n,r=null,s=null,i=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mr(e,t)&&(r=ee(e),K(e,s,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ir:y(e,t,n,r);break;case kr:w(e,t,n,r);break;case Sr:null==e&&C(t,n,r,o);break;case Tr:U(e,t,n,r,s,i,o,a,l);break;default:1&h?I(e,t,n,r,s,i,o,a,l):6&h?F(e,t,n,r,s,i,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,s,i,o,a,l,ne)}null!=u&&s&&yr(u,e&&e.ref,i,t||e,!t)},y=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&d(n,t.children)}},w=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},C=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let s;for(;e&&e!==t;)s=m(e),i(e,n,r),e=s;i(t,n,r)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),o(e),e=n;o(t)},I=(e,t,n,r,s,i,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,r,s,i,o,a,l):P(e,t,s,i,o,a,l)},S=(e,t,n,r,s,o,c,u)=>{let h,d;const{type:f,props:m,shapeFlag:_,transition:g,dirs:v}=e;if(h=e.el=l(e.type,o,m&&m.is,m),8&_?p(h,e.children):16&_&&O(e.children,h,null,r,s,o&&"foreignObject"!==f,c,u),v&&hn(e,null,r,"created"),R(h,e,e.scopeId,c,r),m){for(const t in m)"value"===t||k(t)||a(h,t,null,m[t],o,e.children,r,s,X);"value"in m&&a(h,"value",null,m.value),(d=m.onVnodeBeforeMount)&&Kr(d,r,e)}v&&hn(e,null,r,"beforeMount");const y=(!s||s&&!s.pendingBranch)&&g&&!g.persisted;y&&g.beforeEnter(h),i(h,t,n),((d=m&&m.onVnodeMounted)||y||v)&&br((()=>{d&&Kr(d,r,e),y&&g.enter(h),v&&hn(e,null,r,"mounted")}),s)},R=(e,t,n,r,s)=>{if(n&&_(e,n),r)for(let t=0;t<r.length;t++)_(e,r[t]);if(s){if(t===s.subTree){const t=s.vnode;R(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},O=(e,t,n,r,s,i,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?$r(e[c]):Hr(e[c]);v(null,l,t,n,r,s,i,o,a)}},P=(e,n,r,s,i,o,l)=>{const c=n.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=n;u|=16&e.patchFlag;const f=e.props||t,m=n.props||t;let _;r&&Cr(r,!1),(_=m.onVnodeBeforeUpdate)&&Kr(_,r,n,e),d&&hn(n,e,r,"beforeUpdate"),r&&Cr(r,!0);const g=i&&"foreignObject"!==n.type;if(h?A(e.dynamicChildren,h,c,r,s,g,o):l||z(e,n,c,null,r,s,g,o,!1),u>0){if(16&u)D(c,n,f,m,r,s,i);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,i),4&u&&a(c,"style",f.style,m.style,i),8&u){const t=n.dynamicProps;for(let n=0;n<t.length;n++){const o=t[n],l=f[o],u=m[o];u===l&&"value"!==o||a(c,o,l,u,i,e.children,r,s,X)}}1&u&&e.children!==n.children&&p(c,n.children)}else l||null!=h||D(c,n,f,m,r,s,i);((_=m.onVnodeUpdated)||d)&&br((()=>{_&&Kr(_,r,n,e),d&&hn(n,e,r,"updated")}),s)},A=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Tr||!Mr(l,c)||70&l.shapeFlag)?f(l.el):n;v(l,c,u,null,r,s,i,o,!0)}},D=(e,n,r,s,i,o,l)=>{if(r!==s){if(r!==t)for(const t in r)k(t)||t in s||a(e,t,r[t],null,l,n.children,i,o,X);for(const t in s){if(k(t))continue;const c=s[t],u=r[t];c!==u&&"value"!==t&&a(e,t,u,c,l,n.children,i,o,X)}"value"in s&&a(e,"value",r.value,s.value)}},U=(e,t,n,r,s,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(l=l?l.concat(m):m),null==e?(i(h,n,r),i(d,n,r),O(t.children,n,d,s,o,a,l,u)):p>0&&64&p&&f&&e.dynamicChildren?(A(e.dynamicChildren,f,n,s,o,a,l),(null!=t.key||s&&t===s.subTree)&&Er(e,t,!0)):z(e,t,n,d,s,o,a,l,u)},F=(e,t,n,r,s,i,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,l):q(t,n,r,s,i,o,l):B(e,t,l)},q=(e,n,r,s,i,o,a)=>{const l=e.component=function(e,n,r){const s=e.type,i=(n?n.appContext:e.appContext)||Jr,o={uid:Yr++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Z(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ar(s,i),emitsOptions:Gt(s,i),emit:null,emitted:null,propsDefaults:t,inheritAttrs:s.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};o.ctx={_:o},o.root=n?n.root:o,o.emit=$t.bind(null,o),e.ce&&e.ce(o);return o}(e,s,i);if(fn(e)&&(l.ctx.renderer=ne),function(e,t=!1){is=t;const{props:n,children:r}=e.vnode,s=rs(e);(function(e,t,n,r=!1){const s={},i={};M(i,Ur,1),e.propsDefaults=Object.create(null),ir(e,t,s,i);for(const t in e.propsOptions[0])t in s||(s[t]=void 0);n?e.props=r?s:ot(s):e.type.props?e.props=s:e.props=i,e.attrs=i})(e,n,s,t),gr(e,r);const i=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ft(new Proxy(e.ctx,jn));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(_e(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;ts(e),fe();const s=kt(r,e,0,[e.props,n]);if(me(),ns(),b(s)){if(s.then(ns,ns),t)return s.then((n=>{os(e,n,t)})).catch((t=>{Rt(t,e,0)}));e.asyncDep=s}else os(e,s,t)}else as(e,t)}(e,t):void 0;is=!1}(l),l.asyncDep){if(i&&i.registerDep(l,V),!e.el){const e=l.subTree=Br(kr);w(null,e,n,r)}}else V(l,e,n,r,i,o,a)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||nn(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?nn(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Kt(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void W(r,t,n);r.next=t,function(e){const t=Nt.indexOf(e);t>Pt&&Nt.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,r,s,i,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:l,vnode:c}=e,u=n;Cr(e,!1),n?(n.el=c.el,W(e,n,o)):n=c,r&&L(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Kr(t,l,n,c),Cr(e,!0);const h=Zt(e),d=e.subTree;e.subTree=h,v(d,h,f(d.el),ee(d),e,s,i),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&br(a,s),(t=n.props&&n.props.onVnodeUpdated)&&br((()=>Kr(t,l,n,c)),s)}else{let o;const{el:a,props:l}=t,{bm:c,m:u,parent:h}=e,d=pn(t);if(Cr(e,!1),c&&L(c),!d&&(o=l&&l.onVnodeBeforeMount)&&Kr(o,h,t),Cr(e,!0),a&&se){const n=()=>{e.subTree=Zt(e),se(a,e.subTree,e,s,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Zt(e);v(null,o,n,r,e,s,i),t.el=o.el}if(u&&br(u,s),!d&&(o=l&&l.onVnodeMounted)){const e=t;br((()=>Kr(o,h,e)),s)}(256&t.shapeFlag||h&&pn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&br(e.a,s),e.isMounted=!0,t=n=r=null}},l=e.effect=new ue(a,(()=>jt(c)),e.scope),c=e.update=()=>l.run();c.id=e.uid,Cr(e,!0),c()},W=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=pt(s),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;ir(e,t,s,i)&&(c=!0);for(const i in a)t&&(h(t,i)||(r=N(i))!==i&&h(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=or(l,a,i,void 0,e,!0)):delete s[i]);if(i!==a)for(const e in i)t&&h(t,e)||(delete i[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Kt(e.emitsOptions,o))continue;const u=t[o];if(l)if(h(i,o))u!==i[o]&&(i[o]=u,c=!0);else{const t=x(o);s[t]=or(l,a,t,u,e,!1)}else u!==i[o]&&(i[o]=u,c=!0)}}c&&ve(e,"set","$attrs")}(e,t.props,r,n),vr(e,t.children,n),fe(),Bt(),me()},z=(e,t,n,r,s,i,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:f}=t;if(d>0){if(128&d)return void $(c,h,n,r,s,i,o,a,l);if(256&d)return void H(c,h,n,r,s,i,o,a,l)}8&f?(16&u&&X(c,s,i),h!==c&&p(n,h)):16&u?16&f?$(c,h,n,r,s,i,o,a,l):X(c,s,i,!0):(8&u&&p(n,""),16&f&&O(h,n,r,s,i,o,a,l))},H=(e,t,r,s,i,o,a,l,c)=>{t=t||n;const u=(e=e||n).length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const n=t[p]=c?$r(t[p]):Hr(t[p]);v(e[p],n,r,null,i,o,a,l,c)}u>h?X(e,i,o,!0,!1,d):O(t,r,s,i,o,a,l,c,d)},$=(e,t,r,s,i,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;for(;u<=d&&u<=p;){const n=e[u],s=t[u]=c?$r(t[u]):Hr(t[u]);if(!Mr(n,s))break;v(n,s,r,null,i,o,a,l,c),u++}for(;u<=d&&u<=p;){const n=e[d],s=t[p]=c?$r(t[p]):Hr(t[p]);if(!Mr(n,s))break;v(n,s,r,null,i,o,a,l,c),d--,p--}if(u>d){if(u<=p){const e=p+1,n=e<h?t[e].el:s;for(;u<=p;)v(null,t[u]=c?$r(t[u]):Hr(t[u]),r,n,i,o,a,l,c),u++}}else if(u>p)for(;u<=d;)K(e[u],i,o,!0),u++;else{const f=u,m=u,_=new Map;for(u=m;u<=p;u++){const e=t[u]=c?$r(t[u]):Hr(t[u]);null!=e.key&&_.set(e.key,u)}let g,y=0;const b=p-m+1;let w=!1,C=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=f;u<=d;u++){const n=e[u];if(y>=b){K(n,i,o,!0);continue}let s;if(null!=n.key)s=_.get(n.key);else for(g=m;g<=p;g++)if(0===E[g-m]&&Mr(n,t[g])){s=g;break}void 0===s?K(n,i,o,!0):(E[s-m]=u+1,s>=C?C=s:w=!0,v(n,t[s],r,null,i,o,a,l,c),y++)}const T=w?function(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(E):n;for(g=T.length-1,u=b-1;u>=0;u--){const e=m+u,n=t[e],d=e+1<h?t[e+1].el:s;0===E[u]?v(null,n,r,d,i,o,a,l,c):w&&(g<0||u!==T[g]?G(n,r,d,2):g--)}}},G=(e,t,n,r,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,ne);if(a===Tr){i(o,t,n);for(let e=0;e<c.length;e++)G(c[e],t,n,r);return void i(e.anchor,t,n)}if(a===Sr)return void E(e,t,n);if(2!==r&&1&u&&l)if(0===r)l.beforeEnter(o),i(o,t,n),br((()=>l.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=l,a=()=>i(o,t,n),c=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,c):c()}else i(o,t,n)},K=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&yr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!pn(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&Kr(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&hn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,ne,r):c&&(i!==Tr||h>0&&64&h)?X(c,t,n,!1,!0):(i===Tr&&384&h||!s&&16&u)&&X(l,t,n),r&&J(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&br((()=>{m&&Kr(m,t,e),p&&hn(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Tr)return void Y(n,r);if(t===Sr)return void T(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,o=()=>t(n,i);r?r(e.el,i,o):o()}else i()},Y=(e,t)=>{let n;for(;e!==t;)n=m(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:i,subTree:o,um:a}=e;r&&L(r),s.stop(),i&&(i.active=!1,K(o,e,t,n)),a&&br(a,t),br((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)K(e[o],t,n,r,s)},ee=e=>6&e.shapeFlag?ee(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),te=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),Bt(),Vt(),t._vnode=e},ne={p:v,um:K,m:G,r:J,mt:q,mc:O,pc:z,pbc:A,n:ee,o:e};let re,se;s&&([re,se]=s(ne));return{render:te,hydrate:re,createApp:tr(te,re)}}(e)}function Cr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Er(e,t,n=!1){const r=e.children,s=t.children;if(d(r)&&d(s))for(let e=0;e<r.length;e++){const t=r[e];let i=s[e];1&i.shapeFlag&&!i.dynamicChildren&&((i.patchFlag<=0||32===i.patchFlag)&&(i=s[e]=$r(s[e]),i.el=t.el),n||Er(t,i)),i.type===Ir&&(i.el=t.el)}}const Tr=Symbol.for("v-fgt"),Ir=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),Sr=Symbol.for("v-stc"),Rr=[];let xr=null;function Or(e=!1){Rr.push(xr=e?null:[])}let Nr=1;function Pr(e){Nr+=e}function Ar(e){return e.dynamicChildren=Nr>0?xr||n:null,Rr.pop(),xr=Rr[Rr.length-1]||null,Nr>0&&xr&&xr.push(e),e}function Dr(e,t,n,r,s,i){return Ar(qr(e,t,n,r,s,i,!0))}function Lr(e){return!!e&&!0===e.__v_isVNode}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Ur="__vInternal",Fr=({key:e})=>null!=e?e:null,jr=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?g(e)||yt(e)||_(e)?{i:Jt,r:e,k:t,f:!!n}:e:null);function qr(e,t=null,n=null,r=0,s=null,i=(e===Tr?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fr(t),ref:t&&jr(t),scopeId:Yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Gr(l,n),128&i&&e.normalize(l)):n&&(l.shapeFlag|=g(n)?8:16),Nr>0&&!o&&xr&&(l.patchFlag>0||6&i)&&32!==l.patchFlag&&xr.push(l),l}const Br=function(e,t=null,n=null,r=0,s=null,i=!1){e&&e!==An||(e=kr);if(Lr(e)){const r=Vr(e,t,!0);return n&&Gr(r,n),Nr>0&&!i&&xr&&(6&r.shapeFlag?xr[xr.indexOf(e)]=r:xr.push(r)),r.patchFlag|=-2,r}o=e,_(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?dt(e)||Ur in e?l({},e):e:null}(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=H(e)),y(n)&&(dt(n)&&!d(n)&&(n=l({},n)),t.style=q(n))}const a=g(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:y(e)?4:_(e)?2:0;return qr(e,t,n,r,s,a,i,!0)};function Vr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:a}=e,l=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=H([t.class,r.class]));else if("style"===e)t.style=q([t.style,r.style]);else if(o(e)){const n=t[e],s=r[e];!s||n===s||d(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Fr(l),ref:t&&t.ref?n&&s?d(s)?s.concat(jr(t)):[s,jr(t)]:jr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Tr?-1===i?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vr(e.ssContent),ssFallback:e.ssFallback&&Vr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Wr(e=" ",t=0){return Br(Ir,null,e,t)}function zr(e="",t=!1){return t?(Or(),Ar(Br(kr,null,e,n,r,!0))):Br(kr,null,e);var n,r}function Hr(e){return null==e||"boolean"==typeof e?Br(kr):d(e)?Br(Tr,null,e.slice()):"object"==typeof e?$r(e):Br(Ir,null,String(e))}function $r(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Vr(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(d(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Gr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Ur in t?3===r&&Jt&&(1===Jt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Jt}}else _(t)?(t={default:t,_ctx:Jt},n=32):(t=String(t),64&r?(n=16,t=[Wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kr(e,t,n,r=null){St(e,t,7,[n,r])}const Jr=Zn();let Yr=0;let Qr,Xr,Zr=null,es="__VUE_INSTANCE_SETTERS__";(Xr=j()[es])||(Xr=j()[es]=[]),Xr.push((e=>Zr=e)),Qr=e=>{Xr.length>1?Xr.forEach((t=>t(e))):Xr[0](e)};const ts=e=>{Qr(e),e.scope.on()},ns=()=>{Zr&&Zr.scope.off(),Qr(null)};function rs(e){return 4&e.vnode.shapeFlag}let ss,is=!1;function os(e,t,n){_(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=Tt(t)),as(e,n)}function as(e,t,n){const s=e.type;if(!e.render){if(!t&&ss&&!s.render){const t=s.template||Hn(e).template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:i,compilerOptions:o}=s,a=l(l({isCustomElement:n,delimiters:i},r),o);s.render=ss(t,a)}}e.render=s.render||r}ts(e),fe(),Vn(e),me(),ns()}function ls(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Tt(ft(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Un?Un[n](e):void 0,has:(e,t)=>t in e||t in Un}))}const cs=(e,t)=>function(e,t,n=!1){let s,i;const o=_(e);return o?(s=e,i=r):(s=e.get,i=e.set),new It(s,i,o||!i,n)}(e,0,is);function us(e,t,n){const r=arguments.length;return 2===r?y(t)&&!d(t)?Lr(t)?Br(e,null,[t]):Br(e,t):Br(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Lr(n)&&(n=[n]),Br(e,t,n))}const hs=Symbol.for("v-scx"),ds=()=>sr(hs),ps="3.3.4",fs="undefined"!=typeof document?document:null,ms=fs&&fs.createElement("template"),_s={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?fs.createElementNS("http://www.w3.org/2000/svg",e):fs.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>fs.createTextNode(e),createComment:e=>fs.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),s!==i&&(s=s.nextSibling););else{ms.innerHTML=r?`<svg>${e}</svg>`:e;const s=ms.content;if(r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const gs=/\s*!important$/;function vs(e,t,n){if(d(n))n.forEach((n=>vs(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=bs[t];if(n)return n;let r=x(t);if("filter"!==r&&r in e)return bs[t]=r;r=P(r);for(let n=0;n<ys.length;n++){const s=ys[n]+r;if(s in e)return bs[t]=s}return t}(e,t);gs.test(n)?e.setProperty(N(r),n.replace(gs,""),"important"):e[r]=n}}const ys=["Webkit","Moz","ms"],bs={};const ws="http://www.w3.org/1999/xlink";function Cs(e,t,n,r){e.addEventListener(t,n,r)}function Es(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Ts.test(e)){let n;for(t={};n=e.match(Ts);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):N(e.slice(2));return[n,t]}(t);if(r){const o=i[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();St(function(e,t){if(d(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=Ss(),n}(r,s);Cs(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),i[t]=void 0)}}const Ts=/(?:Once|Passive|Capture)$/;let Is=0;const ks=Promise.resolve(),Ss=()=>Is||(ks.then((()=>Is=0)),Is=Date.now());const Rs=/^on[a-z]/;const xs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return d(t)?e=>L(t,e):t};function Os(e){e.target.composing=!0}function Ns(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ps={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=xs(s);const i=r||s.props&&"number"===s.props.type;Cs(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),i&&(r=U(r)),e._assign(r)})),n&&Cs(e,"change",(()=>{e.value=e.value.trim()})),t||(Cs(e,"compositionstart",Os),Cs(e,"compositionend",Ns),Cs(e,"change",Ns))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e._assign=xs(i),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===t)return;if((s||"number"===e.type)&&U(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},As={deep:!0,created(e,t,n){e._assign=xs(n),Cs(e,"change",(()=>{const t=e._modelValue,n=Ms(e),r=e.checked,s=e._assign;if(d(t)){const e=J(t,n),i=-1!==e;if(r&&!i)s(t.concat(n));else if(!r&&i){const n=[...t];n.splice(e,1),s(n)}}else if(f(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(Us(e,r))}))},mounted:Ds,beforeUpdate(e,t,n){e._assign=xs(n),Ds(e,t,n)}};function Ds(e,{value:t,oldValue:n},r){e._modelValue=t,d(t)?e.checked=J(t,r.props.value)>-1:f(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=K(t,Us(e,!0)))}const Ls={created(e,{value:t},n){e.checked=K(t,n.props.value),e._assign=xs(n),Cs(e,"change",(()=>{e._assign(Ms(e))}))},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=xs(r),t!==n&&(e.checked=K(t,r.props.value))}};function Ms(e){return"_value"in e?e._value:e.value}function Us(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Fs=["ctrl","shift","alt","meta"],js={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Fs.some((n=>e[`${n}Key`]&&!t.includes(n)))},qs=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=js[t[e]];if(r&&r(n,t))return}return e(n,...r)},Bs={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Vs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Vs(e,!0),r.enter(e)):r.leave(e,(()=>{Vs(e,!1)})):Vs(e,t))},beforeUnmount(e,{value:t}){Vs(e,t)}};function Vs(e,t){e.style.display=t?e._vod:"none"}const Ws=l({patchProp:(e,t,n,r,s=!1,i,l,c,u)=>{"class"===t?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,s):"style"===t?function(e,t,n){const r=e.style,s=g(n);if(n&&!s){if(t&&!g(t))for(const e in t)null==n[e]&&vs(r,e,"");for(const e in n)vs(r,e,n[e])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}(e,n,r):o(t)?a(t)||Es(e,t,0,r,l):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Rs.test(t)&&_(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Rs.test(t)&&g(n))return!1;return t in e}(e,t,r,s))?function(e,t,n,r,s,i,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,s,i),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const r=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=G(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{e[t]=n}catch(e){}l&&e.removeAttribute(t)}(e,t,r,i,l,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(ws,t.slice(6,t.length)):e.setAttributeNS(ws,t,n);else{const r=$(t);null==n||r&&!G(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,s))}},_s);let zs;var Hs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAArCAYAAADyijE0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAORJREFUeNrs2NEJgzAQBuA0dICO0G6QEcwGXaEjdIJmA1doN+gGcYSO4Ahu0N5B8iLkVDCnhT8QIkRyn+cZiMbsqB3yRQjB0XCqFKen9fslmG/Fhx6oe4rxWYJh/WtlyGMuaIzpaPRrStK6QyoBEWSVapOD3xIopvrcDMMZek6BrOanOwWy2nuJBFLHSKCjUnxHAWNh/8kgr4HJARvhHp6/amAunBkpa9RblddE6efMdMK82bSASw0YYIABBhhggAEGGGCAAQaYP8KMj7dnOm42ygZXxFCPe8jM3dT7KT2nvX8CDAAAAEh+BRIlOQAAAABJRU5ErkJggg==";function $s(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}const Gs="function"==typeof Proxy,Ks="devtools-plugin:setup";let Js,Ys;function Qs(){return void 0!==Js||("undefined"!=typeof window&&window.performance?(Js=!0,Ys=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(Js=!0,Ys=global.perf_hooks.performance):Js=!1),Js?Ys.now():Date.now();var e}class Xs{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const r=e.settings[t];n[t]=r.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(e){}this.fallbacks={getSettings:()=>s,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(e){}s=e},now:()=>Qs()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function Zs(e,t){const n=e,r=$s(),s=$s().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=Gs&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new Xs(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit(Ks,e,t)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var ei="store";function ti(e){return void 0===e&&(e=null),sr(null!==e?e:ei)}function ni(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function ri(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function si(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;oi(e,n,[],e._modules.root,!0),ii(e,n,t)}function ii(e,t,n){var r=e._state,s=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,o={},a={},l=new Z(!0);l.run((function(){ni(i,(function(t,n){o[n]=function(e,t){return function(){return e(t)}}(t,e),a[n]=cs((function(){return o[n]()})),Object.defineProperty(e.getters,n,{get:function(){return a[n].value},enumerable:!0})}))})),e._state=it({data:t}),e._scope=l,e.strict&&function(e){sn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null})),s&&s.stop()}function oi(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=li(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=ci(n,r,s),o=i.payload,a=i.options,l=i.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,s){var i=ci(n,r,s),o=i.payload,a=i.options,l=i.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return ai(e,t)}},state:{get:function(){return li(e.state,n)}}}),s}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){var s=e._mutations[t]||(e._mutations[t]=[]);s.push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;!function(e,t,n,r){var s=e._actions[t]||(e._actions[t]=[]);s.push((function(t){var s,i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(s=i)&&"function"==typeof s.then||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}(e,r,s,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,i){oi(e,t,n.concat(i),r,s)}))}function ai(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function li(e,t){return t.reduce((function(e,t){return e[t]}),e)}function ci(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var ui="vuex:mutations",hi="vuex:actions",di="vuex",pi=0;function fi(e,t){Zs({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:ui,label:"Vuex Mutations",color:mi}),n.addTimelineLayer({id:hi,label:"Vuex Actions",color:mi}),n.addInspector({id:di,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===di)if(n.filter){var r=[];yi(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[vi(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===di){var r=n.nodeId;ai(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=bi((function(){return e[n]}))}else t[n]=bi((function(){return e[n]}))})),t}(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?gi(e):e,editable:!1,value:bi((function(){return i[e]}))}}))}return s}((s=t._modules,(o=(i=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+i+'".');return n===o.length-1?r:r._children}),"root"===i?s:s.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var s,i,o})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===di){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(di),n.sendInspectorState(di),n.addTimelineEvent({layerId:ui,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=pi++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:hi,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:hi,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var mi=8702998,_i={label:"namespaced",textColor:16777215,backgroundColor:6710886};function gi(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function vi(e,t){return{id:t||"root",label:gi(t),tags:e.namespaced?[_i]:[],children:Object.keys(e._children).map((function(n){return vi(e._children[n],t+n+"/")}))}}function yi(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[_i]:[]}),Object.keys(t._children).forEach((function(s){yi(e,t._children[s],n,r+s+"/")}))}function bi(e){try{return e()}catch(e){return e}}var wi=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Ci={namespaced:{configurable:!0}};Ci.namespaced.get=function(){return!!this._rawModule.namespaced},wi.prototype.addChild=function(e,t){this._children[e]=t},wi.prototype.removeChild=function(e){delete this._children[e]},wi.prototype.getChild=function(e){return this._children[e]},wi.prototype.hasChild=function(e){return e in this._children},wi.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},wi.prototype.forEachChild=function(e){ni(this._children,e)},wi.prototype.forEachGetter=function(e){this._rawModule.getters&&ni(this._rawModule.getters,e)},wi.prototype.forEachAction=function(e){this._rawModule.actions&&ni(this._rawModule.actions,e)},wi.prototype.forEachMutation=function(e){this._rawModule.mutations&&ni(this._rawModule.mutations,e)},Object.defineProperties(wi.prototype,Ci);var Ei=function(e){this.register([],e,!1)};function Ti(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Ti(e.concat(r),t.getChild(r),n.modules[r])}}Ei.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Ei.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},Ei.prototype.update=function(e){Ti([],this.root,e)},Ei.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new wi(t,n);0===e.length?this.root=s:this.get(e.slice(0,-1)).addChild(e[e.length-1],s);t.modules&&ni(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},Ei.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Ei.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Ii=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Ei(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var i=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(i,e,t)},this.commit=function(e,t,n){return a.call(i,e,t,n)},this.strict=r;var l=this._modules.root.state;oi(this,l,[],this._modules.root),ii(this,l),n.forEach((function(e){return e(t)}))},ki={state:{configurable:!0}};Ii.prototype.install=function(e,t){e.provide(t||ei,this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&fi(e,this)},ki.state.get=function(){return this._state.data},ki.state.set=function(e){},Ii.prototype.commit=function(e,t,n){var r=this,s=ci(e,t,n),i=s.type,o=s.payload,a={type:i,payload:o},l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Ii.prototype.dispatch=function(e,t){var n=this,r=ci(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(e){}var l=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(e){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(e){}t(e)}))}))}},Ii.prototype.subscribe=function(e,t){return ri(e,this._subscribers,t)},Ii.prototype.subscribeAction=function(e,t){return ri("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Ii.prototype.watch=function(e,t,n){var r=this;return sn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},Ii.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Ii.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),oi(this,this.state,e,this._modules.get(e),n.preserveState),ii(this,this.state)},Ii.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete li(t.state,e.slice(0,-1))[e[e.length-1]]})),si(this)},Ii.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Ii.prototype.hotUpdate=function(e){this._modules.update(e),si(this,!0)},Ii.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Ii.prototype,ki);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Si=!1,Ri="${JSCORE_VERSION}",xi=function(e,t){if(!e)throw Oi(t)},Oi=function(e){return new Error("Firebase Database ("+Ri+") INTERNAL ASSERT FAILED: "+e)},Ni=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Pi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ni(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==i||null==o||null==a)throw new Ai;const l=s<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Di=function(e){const t=Ni(e);return Pi.encodeByteArray(t,!0)},Li=function(e){return Di(e).replace(/\./g,"")},Mi=function(e){try{return Pi.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,qi=()=>{try{return ji()||(()=>{if("undefined"==typeof process||void 0==={NODE_ENV:"production"})return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Mi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Bi=e=>{var t,n;return null===(n=null===(t=qi())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Vi=e=>{const t=Bi(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Wi=()=>{var e;return null===(e=qi())||void 0===e?void 0:e.config},zi=e=>{var t;return null===(t=qi())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $i(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Li(JSON.stringify({alg:"none",type:"JWT"})),Li(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ki(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Gi())}function Ji(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Yi(){return!0===Si}class Qi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Qi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(Zi,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Qi(r,o,n)}}const Zi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const no=function(e){let t={},n={},r={},s="";try{const i=e.split(".");t=eo(Mi(i[0])||""),n=eo(Mi(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function ro(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function so(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function io(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oo(e,t,n){const r={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=t.call(n,e[s],s,e));return r}function ao(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(lo(n)&&lo(i)){if(!ao(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function lo(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class po{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,s,i=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),s=1518500249):(r=o^a^l,s=1859775393):e<60?(r=o&a|l&(o|a),s=2400959708):(r=o^a^l,s=3395469782);const t=(i<<5|i>>>27)+r+c+s+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=i,i=t}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let i=this.inbuf_;for(;r<t;){if(0===i)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(s[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}else for(;r<t;)if(s[i]=e[r],++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}class fo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=mo),void 0===r.error&&(r.error=mo),void 0===r.complete&&(r.complete=mo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function mo(){}function _o(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
 */class wo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Hi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:bo})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=bo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=bo){return this.instances.has(e)}getOptions(e=bo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===bo?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=bo){return this.component?this.component.multipleInstances?e:bo:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Co{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo,To;(To=Eo||(Eo={}))[To.DEBUG=0]="DEBUG",To[To.VERBOSE=1]="VERBOSE",To[To.INFO=2]="INFO",To[To.WARN=3]="WARN",To[To.ERROR=4]="ERROR",To[To.SILENT=5]="SILENT";const Io={debug:Eo.DEBUG,verbose:Eo.VERBOSE,info:Eo.INFO,warn:Eo.WARN,error:Eo.ERROR,silent:Eo.SILENT},ko=Eo.INFO,So={[Eo.DEBUG]:"log",[Eo.VERBOSE]:"log",[Eo.INFO]:"info",[Eo.WARN]:"warn",[Eo.ERROR]:"error"},Ro=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=So[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class xo{constructor(e){this.name=e,this._logLevel=ko,this._logHandler=Ro,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Eo))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Io[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Eo.DEBUG,...e),this._logHandler(this,Eo.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Eo.VERBOSE,...e),this._logHandler(this,Eo.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Eo.INFO,...e),this._logHandler(this,Eo.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Eo.WARN,...e),this._logHandler(this,Eo.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Eo.ERROR,...e),this._logHandler(this,Eo.ERROR,...e)}}const Oo=(e,t)=>t.some((t=>e instanceof t));let No,Po;const Ao=new WeakMap,Do=new WeakMap,Lo=new WeakMap,Mo=new WeakMap,Uo=new WeakMap;let Fo={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Do.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Lo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bo(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function jo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Vo(this),t),Bo(Ao.get(this))}:function(...t){return Bo(e.apply(Vo(this),t))}:function(t,...n){const r=e.call(Vo(this),t,...n);return Lo.set(r,t.sort?t.sort():[t]),Bo(r)}}function qo(e){return"function"==typeof e?jo(e):(e instanceof IDBTransaction&&function(e){if(Do.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));Do.set(e,t)}(e),Oo(e,No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Fo):e)}function Bo(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Bo(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Ao.set(t,e)})).catch((()=>{})),Uo.set(t,e),t}(e);if(Mo.has(e))return Mo.get(e);const t=qo(e);return t!==e&&(Mo.set(e,t),Uo.set(t,e)),t}const Vo=e=>Uo.get(e);const Wo=["get","getKey","getAll","getAllKeys","count"],zo=["put","add","delete","clear"],Ho=new Map;function $o(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ho.get(t))return Ho.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=zo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Wo.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return Ho.set(t,i),i}Fo=(e=>({...e,get:(t,n,r)=>$o(t,n)||e.get(t,n,r),has:(t,n)=>!!$o(t,n)||e.has(t,n)}))(Fo);
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
class Go{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ko="@firebase/app",Jo="0.9.13",Yo=new xo("@firebase/app"),Qo="[DEFAULT]",Xo={[Ko]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Zo=new Map,ea=new Map;function ta(e,t){try{e.container.addComponent(t)}catch(n){Yo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function na(e){const t=e.name;if(ea.has(t))return Yo.debug(`There were multiple attempts to register component ${t}.`),!1;ea.set(t,e);for(const t of Zo.values())ta(t,e);return!0}function ra(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const sa=new Xi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ia{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sa.create("app-deleted",{appName:this._name})}}
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
 */const oa="9.23.0";function aa(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw sa.create("bad-app-name",{appName:String(s)});if(n||(n=Wi()),!n)throw sa.create("no-options");const i=Zo.get(s);if(i){if(ao(n,i.options)&&ao(r,i.config))return i;throw sa.create("duplicate-app",{appName:s})}const o=new Co(s);for(const e of ea.values())o.addComponent(e);const a=new ia(n,r,o);return Zo.set(s,a),a}function la(e=Qo){const t=Zo.get(e);if(!t&&e===Qo&&Wi())return aa();if(!t)throw sa.create("no-app",{appName:e});return t}function ca(e,t,n){var r;let s=null!==(r=Xo[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Yo.warn(e.join(" "))}na(new yo(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
 */const ua="firebase-heartbeat-database",ha=1,da="firebase-heartbeat-store";let pa=null;function fa(){return pa||(pa=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Bo(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Bo(o.result),e.oldVersion,e.newVersion,Bo(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(ua,ha,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(da)}}).catch((e=>{throw sa.create("idb-open",{originalErrorMessage:e.message})}))),pa}async function ma(e,t){try{const n=(await fa()).transaction(da,"readwrite"),r=n.objectStore(da);await r.put(t,_a(e)),await n.done}catch(e){if(e instanceof Qi)Yo.warn(e.message);else{const t=sa.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}function _a(e){return`${e.name}!${e.options.appId}`}
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
 */class ga{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ya(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=va();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=va(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),ba(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ba(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Li(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function va(){return(new Date).toISOString().substring(0,10)}class ya{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await fa();return await t.transaction(da).objectStore(da).get(_a(e))}catch(e){if(e instanceof Qi)Yo.warn(e.message);else{const t=sa.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Yo.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ma(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ma(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ba(e){return Li(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var wa;wa="",na(new yo("platform-logger",(e=>new Go(e)),"PRIVATE")),na(new yo("heartbeat",(e=>new ga(e)),"PRIVATE")),ca(Ko,Jo,wa),ca(Ko,Jo,"esm2017"),ca("fire-js","");const Ca="@firebase/database",Ea="0.14.4";
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
 */class ka{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ro(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ia(t)}}catch(e){}return new ka},Ra=Sa("localStorage"),xa=Sa("sessionStorage"),Oa=new xo("@firebase/database"),Na=function(){let e=1;return function(){return e++}}(),Pa=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,xi(r<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(r)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new po;n.update(t);const r=n.digest();return Pi.encodeByteArray(r)},Aa=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Aa.apply(null,r):t+="object"==typeof r?to(r):r,t+=" "}return t};let Da=null,La=!0;const Ma=function(...e){var t,n;if(!0===La&&(La=!1,null===Da&&!0===xa.get("logging_enabled")&&(t=!0,xi(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Oa.logLevel=Eo.VERBOSE,Da=Oa.log.bind(Oa),n&&xa.set("logging_enabled",!0)):"function"==typeof t?Da=t:(Da=null,xa.remove("logging_enabled")))),Da){const t=Aa.apply(null,e);Da(t)}},Ua=function(e){return function(...t){Ma(e,...t)}},Fa=function(...e){const t="FIREBASE INTERNAL ERROR: "+Aa(...e);Oa.error(t)},ja=function(...e){const t=`FIREBASE FATAL ERROR: ${Aa(...e)}`;throw Oa.error(t),new Error(t)},qa=function(...e){const t="FIREBASE WARNING: "+Aa(...e);Oa.warn(t)},Ba=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Va="[MIN_NAME]",Wa="[MAX_NAME]",za=function(e,t){if(e===t)return 0;if(e===Va||t===Wa)return-1;if(t===Va||e===Wa)return 1;{const n=Xa(e),r=Xa(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ha=function(e,t){return e===t?0:e<t?-1:1},$a=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+to(t))},Ga=function(e){if("object"!=typeof e||null===e)return to(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=to(t[r]),n+=":",n+=Ga(e[t[r]]);return n+="}",n},Ka=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let s=0;s<n;s+=t)s+t>n?r.push(e.substring(s,n)):r.push(e.substring(s,s+t));return r};function Ja(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ya=function(e){xi(!Ba(e),"Invalid JSON number");const t=1023;let n,r,s,i,o;0===e?(r=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(i=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=i+t,s=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(r=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Qa=new RegExp("^-?(0*)\\d{1,10}$"),Xa=function(e){if(Qa.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Za=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw qa("Exception was thrown by user callback.",t),e}),Math.floor(0))}},el=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
const sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,il="ac",ol="websocket",al="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ll{constructor(e,t,n,r,s=!1,i="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ra.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ra.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cl(e,t,n){let r;if(xi("string"==typeof t,"typeof type must == string"),xi("object"==typeof n,"typeof params must == object"),t===ol)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==al)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Ja(n,((e,t)=>{s.push(e+"="+t)})),r+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.counters_={}}incrementCounter(e,t=1){ro(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ui(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ml="start";class _l{constructor(e,t,n,r,s,i,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ua(e),this.stats_=pl(t),this.urlFn=e=>(this.appCheckToken&&(e[il]=this.appCheckToken),cl(t,al,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new fl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new gl(((...e)=>{const[t,n,r,s,i]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ml)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ml]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[il]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&sl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_l.forceAllow_=!0}static forceDisallow(){_l.forceDisallow_=!0}static isAvailable(){return!!_l.forceAllow_||!(_l.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Di(t),r=Ka(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=to(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gl{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Na(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=gl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){Ma("frame writing exception"),e.stack&&Ma(e.stack),Ma(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ma("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ma("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl=null;"undefined"!=typeof MozWebSocket?vl=MozWebSocket:"undefined"!=typeof WebSocket&&(vl=WebSocket);class yl{constructor(e,t,n,r,s,i,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ua(this.connId),this.stats_=pl(t),this.connURL=yl.connectionURL_(t,i,o,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,s){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&sl.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i[il]=r),s&&(i.p=s),cl(e,ol,i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ra.set("previous_websocket_failure",!0);try{let e;Yi(),this.mySock=new vl(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){yl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==vl&&!yl.forceDisallow_}static previouslyFailed(){return Ra.isInMemoryStorage||!0===Ra.get("previous_websocket_failure")}markConnectionHealthy(){Ra.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=eo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(xi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=to(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ka(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yl.responsesRequiredToBeHealthy=2,yl.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class bl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_l,yl]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=yl&&yl.isAvailable();let n=t&&!yl.previouslyFailed();if(e.webSocketOnly&&(t||qa("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[yl];else{const e=this.transports_=[];for(const t of bl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bl.globalTransportInitialized_=!1;class wl{constructor(e,t,n,r,s,i,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ua("c:"+this.id+":"),this.transportManager_=new bl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=el((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$a("t",e),n=$a("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$a("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Fa("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fa("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&qa("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),el((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):el((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ra.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.allowedEvents_=e,this.listeners_={},xi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){xi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends El{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ki()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Tl}getInitialEvent(e){return xi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=32,kl=768;class Sl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Rl(){return new Sl("")}function xl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ol(e){return e.pieces_.length-e.pieceNum_}function Nl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Sl(e.pieces_,t)}function Pl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Al(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Dl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Sl(t,0)}function Ll(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Sl)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Sl(n,0)}function Ml(e){return e.pieceNum_>=e.pieces_.length}function Ul(e,t){const n=xl(e),r=xl(t);if(null===n)return t;if(n===r)return Ul(Nl(e),Nl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Fl(e,t){const n=Al(e,0),r=Al(t,0);for(let e=0;e<n.length&&e<r.length;e++){const t=za(n[e],r[e]);if(0!==t)return t}return n.length===r.length?0:n.length<r.length?-1:1}function jl(e,t){if(Ol(e)!==Ol(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function ql(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Ol(e)>Ol(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Bl{constructor(e,t){this.errorPrefix_=t,this.parts_=Al(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=go(this.parts_[e]);Vl(this)}}function Vl(e){if(e.byteLength_>kl)throw new Error(e.errorPrefix_+"has a key path longer than "+kl+" bytes ("+e.byteLength_+").");if(e.parts_.length>Il)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Il+") or object contains a cycle "+Wl(e))}function Wl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends El{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new zl}getInitialEvent(e){return xi("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=1e3;class $l extends Cl{constructor(e,t,n,r,s,i,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=$l.nextPersistentConnectionId_++,this.log_=Ua("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hl,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Yi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Tl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r:r,a:e,b:t};this.log_(to(s)),xi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Hi,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+s),this.listens.has(i)||this.listens.set(i,new Map),xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),xi(!this.listens.get(i).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(i).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const i=s.d,o=s.s;$l.warnOnListenWarnings_(i,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,i))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ro(e,"w")){const n=so(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();qa(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=no(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=no(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e};r&&(s.q=n,s.t=r),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const i={p:t,d:n};void 0!==s&&(i.h=s),this.outstandingPuts_.push({action:e,request:i,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+to(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Fa("Unrecognized action received from server: "+to(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){xi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Hl),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$l.nextConnectionId_++,s=this.lastSessionId;let i=!1,o=null;const a=function(){o?o.close():(i=!0,n())},l=function(e){xi(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);i?Ma("getToken() completed but was canceled"):(Ma("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new wl(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{qa(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),i||(this.repoInfo_.nodeAdmin&&qa(e),a())}}}interrupt(e){Ma("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ma("Resuming connection for reason: "+e),delete this.interruptReasons_[e],io(this.interruptReasons_)&&(this.reconnectDelay_=Hl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ga(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Sl(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Ma("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ma("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ta.replace(/\./g,"-")]=1,Ki()?e["framework.cordova"]=1:Ji()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tl.getInstance().currentlyOnline();return io(this.interruptReasons_)&&e}}$l.nextPersistentConnectionId_=0,$l.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Jl;class Yl extends Kl{static get __EMPTY_NODE(){return Jl}static set __EMPTY_NODE(e){Jl=e}compare(e,t){return za(e.name,t.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,Jl)}makePost(e,t){return xi("string"==typeof e,"KeyIndex indexValue must always be a string."),new Gl(e,Jl)}toString(){return".key"}}const Ql=new Yl;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse_?e.left:e.right;else{if(0===i){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zl{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Zl.RED,this.left=null!=r?r:ec.EMPTY_NODE,this.right=null!=s?s:ec.EMPTY_NODE}copy(e,t,n,r,s){return new Zl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ec.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ec.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zl.RED=!0,Zl.BLACK=!1;class ec{constructor(e,t=ec.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ec(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zl.BLACK,null,null))}remove(e){return new ec(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xl(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let rc;ec.EMPTY_NODE=new class{copy(e,t,n,r,s){return this}insert(e,t,n){return new Zl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const sc=function(e){return"number"==typeof e?"number:"+Ya(e):"string:"+e},ic=function(e){if(e.isLeafNode()){const t=e.val();xi("string"==typeof t||"number"==typeof t||"object"==typeof t&&ro(t,".sv"),"Priority must be a string or number.")}else xi(e===rc||e.isEmpty(),"priority of unexpected type.");xi(e===rc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
let oc,ac,lc;class cc{constructor(e,t=cc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,xi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ic(this.priorityNode_)}static set __childrenNodeConstructor(e){oc=e}static get __childrenNodeConstructor(){return oc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new cc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ml(e)?this:".priority"===xl(e)?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=xl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(xi(".priority"!==n||1===Ol(e),".priority must be the last token in a path"),this.updateImmediateChild(n,cc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Nl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+sc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ya(this.value_):this.value_,this.lazyHash_=Pa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===cc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cc.__childrenNodeConstructor?-1:(xi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=cc.VALUE_TYPE_ORDER.indexOf(t),s=cc.VALUE_TYPE_ORDER.indexOf(n);return xi(r>=0,"Unknown leaf type: "+t),xi(s>=0,"Unknown leaf type: "+n),r===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}cc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const uc=new class extends Kl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return 0===s?za(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Gl.MIN}maxPost(){return new Gl(Wa,new cc("[PRIORITY-POST]",lc))}makePost(e,t){const n=ac(e);return new Gl(t,new cc("[PRIORITY-POST]",n))}toString(){return".priority"}},hc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hc,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(e,t,n,r){e.sort(t);const s=function(t,r){const i=r-t;let o,a;if(0===i)return null;if(1===i)return o=e[t],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,null,null);{const l=parseInt(i/2,10)+t,c=s(t,l),u=s(l+1,r);return o=e[l],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,c,u)}},i=function(t){let r=null,i=null,o=e.length;const a=function(t,r){const i=o-t,a=o;o-=t;const c=s(i+1,a),u=e[i],h=n?n(u):u;l(new Zl(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(i=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Zl.BLACK):(a(r,Zl.BLACK),a(r,Zl.RED))}return i}(new dc(e.length));return new ec(r||t,i)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const mc={};class _c{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return xi(mc&&uc,"ChildrenNode.ts has not been loaded"),fc=fc||new _c({".priority":mc},{".priority":uc}),fc}get(e){const t=so(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ec?t:null}hasIndex(e){return ro(this.indexSet_,e.toString())}addIndex(e,t){xi(e!==Ql,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(Gl.Wrap);let i,o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();i=r?pc(n,e.getCompare()):mc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=i,new _c(c,l)}addToIndexes(e,t){const n=oo(this.indexes_,((n,r)=>{const s=so(this.indexSet_,r);if(xi(s,"Missing index implementation for "+r),n===mc){if(s.isDefinedOn(e.node)){const n=[],r=t.getIterator(Gl.Wrap);let i=r.getNext();for(;i;)i.name!==e.name&&n.push(i),i=r.getNext();return n.push(e),pc(n,s.getCompare())}return mc}{const r=t.get(e.name);let s=n;return r&&(s=s.remove(new Gl(e.name,r))),s.insert(e,e.node)}}));return new _c(n,this.indexSet_)}removeFromIndexes(e,t){const n=oo(this.indexes_,(n=>{if(n===mc)return n;{const r=t.get(e.name);return r?n.remove(new Gl(e.name,r)):n}}));return new _c(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class vc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ic(this.priorityNode_),this.children_.isEmpty()&&xi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gc||(gc=new vc(new ec(nc),null,_c.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gc}updatePriority(e){return this.children_.isEmpty()?this:new vc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gc:t}}getChild(e){const t=xl(e);return null===t?this:this.getImmediateChild(t).getChild(Nl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(xi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Gl(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const i=r.isEmpty()?gc:this.priorityNode_;return new vc(r,i,s)}}updateChild(e,t){const n=xl(e);if(null===n)return t;{xi(".priority"!==xl(e)||1===Ol(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Nl(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(uc,((i,o)=>{t[i]=o.val(e),n++,s&&vc.INTEGER_REGEXP_.test(i)?r=Math.max(r,Number(i)):s=!1})),!e&&s&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+sc(this.getPriority().val())+":"),this.forEachChild(uc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Pa(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Gl(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Gl(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Gl(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Gl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Gl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yc?-1:0}withIndex(e){if(e===Ql||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ql||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(uc),n=t.getIterator(uc);let r=e.getNext(),s=n.getNext();for(;r&&s;){if(r.name!==s.name||!r.node.equals(s.node))return!1;r=e.getNext(),s=n.getNext()}return null===r&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ql?null:this.indexMap_.get(e.toString())}}vc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const yc=new class extends vc{constructor(){super(new ec(nc),vc.EMPTY_NODE,_c.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Gl,{MIN:{value:new Gl(Va,vc.EMPTY_NODE)},MAX:{value:new Gl(Wa,yc)}}),Yl.__EMPTY_NODE=vc.EMPTY_NODE,cc.__childrenNodeConstructor=vc,rc=yc,function(e){lc=e}(yc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const bc=!0;function wc(e,t=null){if(null===e)return vc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),xi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new cc(e,wc(t))}if(e instanceof Array||!bc){let n=vc.EMPTY_NODE;return Ja(e,((t,r)=>{if(ro(e,t)&&"."!==t.substring(0,1)){const e=wc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(wc(t))}{const n=[];let r=!1;if(Ja(e,((e,t)=>{if("."!==e.substring(0,1)){const s=wc(t);s.isEmpty()||(r=r||!s.getPriority().isEmpty(),n.push(new Gl(e,s)))}})),0===n.length)return vc.EMPTY_NODE;const s=pc(n,tc,(e=>e.name),nc);if(r){const e=pc(n,uc.getCompare());return new vc(s,wc(t),new _c({".priority":e},{".priority":uc}))}return new vc(s,wc(t),_c.Default)}}!function(e){ac=e}(wc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Cc extends Kl{constructor(e){super(),this.indexPath_=e,xi(!Ml(e)&&".priority"!==xl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return 0===s?za(e.name,t.name):s}makePost(e,t){const n=wc(e),r=vc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Gl(t,r)}maxPost(){const e=vc.EMPTY_NODE.updateChild(this.indexPath_,yc);return new Gl(Wa,e)}toString(){return Al(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new class extends Kl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?za(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Gl.MIN}maxPost(){return Gl.MAX}makePost(e,t){const n=wc(e);return new Gl(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){return{type:"value",snapshotNode:e}}function Ic(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function kc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Rc{constructor(e){this.index_=e}updateChild(e,t,n,r,s,i){xi(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=i&&(n.isEmpty()?e.hasChild(t)?i.trackChildChange(kc(t,o)):xi(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?i.trackChildChange(Ic(t,n)):i.trackChildChange(Sc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(uc,((e,r)=>{t.hasChild(e)||n.trackChildChange(kc(e,r))})),t.isLeafNode()||t.forEachChild(uc,((t,r)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(r)||n.trackChildChange(Sc(t,r,s))}else n.trackChildChange(Ic(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.indexedFilter_=new Rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xc.getStartPost_(e),this.endPost_=xc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,s,i){return this.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,i)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(vc.EMPTY_NODE);const s=this;return t.forEachChild(uc,((e,t)=>{s.matches(new Gl(e,t))||(r=r.updateImmediateChild(e,vc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new xc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,s,i){return this.rangedFilter_.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,i):this.fullLimitUpdateChild_(e,t,n,s,i)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=vc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=vc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(vc.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,vc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let i;if(this.reverse_){const e=this.index_.getCompare();i=(t,n)=>e(n,t)}else i=this.index_.getCompare();const o=e;xi(o.numChildren()===this.limit_,"");const a=new Gl(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:i(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=s&&s.trackChildChange(Sc(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(kc(t,e));const n=o.updateImmediateChild(t,vc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=s&&s.trackChildChange(Ic(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&i(l,a)>=0?(null!=s&&(s.trackChildChange(kc(l.name,l.node)),s.trackChildChange(Ic(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,vc.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=uc}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return xi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return xi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Va}hasEnd(){return this.endSet_}getIndexEndValue(){return xi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return xi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return xi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===uc}copy(){const e=new Nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pc(e){const t={};if(e.isDefault())return t;let n;if(e.index_===uc?n="$priority":e.index_===Ec?n="$value":e.index_===Ql?n="$key":(xi(e.index_ instanceof Cc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=to(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=to(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+to(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=to(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+to(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ac(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==uc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc extends Cl{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ua("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(xi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const i=Dc.getListenId_(e,n),o={};this.listens_[i]=o;const a=Pc(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),so(this.listens_,i)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Dc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Pc(e._queryParams),n=e._path.toString(),r=new Hi;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),r.resolve(s)):r.reject(new Error(s))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+co(t);this.log_("Sending REST request for "+i);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+i+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=eo(o.responseText)}catch(e){qa("Failed to parse JSON response for "+i+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&qa("Got unsuccessful REST response for "+i+" Status: "+o.status),n(o.status);n=null}},o.open("GET",i,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Mc(){return{value:null,children:new Map}}function Uc(e,t,n){if(Ml(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=xl(t);e.children.has(r)||e.children.set(r,Mc());Uc(e.children.get(r),t=Nl(t),n)}}function Fc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{Fc(r,new Sl(t.toString()+"/"+e),n)}))}class jc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ja(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new jc(e);const n=1e4+2e4*Math.random();el(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ja(e,((e,r)=>{r>0&&ro(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),el(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */(Vc=Bc||(Bc={}))[Vc.OVERWRITE=0]="OVERWRITE",Vc[Vc.MERGE=1]="MERGE",Vc[Vc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Vc[Vc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class zc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Bc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ml(this.path)){if(null!=this.affectedTree.value)return xi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Sl(e));return new zc(Rl(),t,this.revert)}}return xi(xl(this.path)===e,"operationForChild called for unrelated child."),new zc(Nl(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.source=e,this.path=t,this.type=Bc.LISTEN_COMPLETE}operationForChild(e){return Ml(this.path)?new Hc(this.source,Rl()):new Hc(this.source,Nl(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Bc.OVERWRITE}operationForChild(e){return Ml(this.path)?new $c(this.source,Rl(),this.snap.getImmediateChild(e)):new $c(this.source,Nl(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Bc.MERGE}operationForChild(e){if(Ml(this.path)){const t=this.children.subtree(new Sl(e));return t.isEmpty()?null:t.value?new $c(this.source,Rl(),t.value):new Gc(this.source,Rl(),t)}return xi(xl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gc(this.source,Nl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yc(e,t,n,r,s,i){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Oi("Should only compare child_ events.");const r=new Gl(t.childName,t.snapshotNode),s=new Gl(n.childName,n.snapshotNode);return e.index_.compare(r,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,i);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(r,e.query_))}))}))}function Qc(e,t){return{eventCache:e,serverCache:t}}function Xc(e,t,n,r){return Qc(new Kc(t,n,r),e.serverCache)}function Zc(e,t,n,r){return Qc(e.eventCache,new Kc(t,n,r))}function eu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;class ru{constructor(e,t=(()=>(nu||(nu=new ec(Ha)),nu))()){this.value=e,this.children=t}static fromObject(e){let t=new ru(null);return Ja(e,((e,n)=>{t=t.set(new Sl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Rl(),value:this.value};if(Ml(e))return null;{const n=xl(e),r=this.children.get(n);if(null!==r){const s=r.findRootMostMatchingPathAndValue(Nl(e),t);if(null!=s){return{path:Ll(new Sl(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ml(e))return this;{const t=xl(e),n=this.children.get(t);return null!==n?n.subtree(Nl(e)):new ru(null)}}set(e,t){if(Ml(e))return new ru(t,this.children);{const n=xl(e),r=(this.children.get(n)||new ru(null)).set(Nl(e),t),s=this.children.insert(n,r);return new ru(this.value,s)}}remove(e){if(Ml(e))return this.children.isEmpty()?new ru(null):new ru(null,this.children);{const t=xl(e),n=this.children.get(t);if(n){const r=n.remove(Nl(e));let s;return s=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&s.isEmpty()?new ru(null):new ru(this.value,s)}return this}}get(e){if(Ml(e))return this.value;{const t=xl(e),n=this.children.get(t);return n?n.get(Nl(e)):null}}setTree(e,t){if(Ml(e))return t;{const n=xl(e),r=(this.children.get(n)||new ru(null)).setTree(Nl(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ru(this.value,s)}}fold(e){return this.fold_(Rl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,s)=>{n[r]=s.fold_(Ll(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Rl(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Ml(e))return null;{const r=xl(e),s=this.children.get(r);return s?s.findOnPath_(Nl(e),Ll(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Rl(),t)}foreachOnPath_(e,t,n){if(Ml(e))return this;{this.value&&n(t,this.value);const r=xl(e),s=this.children.get(r);return s?s.foreachOnPath_(Nl(e),Ll(t,r),n):new ru(null)}}foreach(e){this.foreach_(Rl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Ll(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.writeTree_=e}static empty(){return new su(new ru(null))}}function iu(e,t,n){if(Ml(t))return new su(new ru(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const s=r.path;let i=r.value;const o=Ul(s,t);return i=i.updateChild(o,n),new su(e.writeTree_.set(s,i))}{const r=new ru(n),s=e.writeTree_.setTree(t,r);return new su(s)}}}function ou(e,t,n){let r=e;return Ja(n,((e,n)=>{r=iu(r,Ll(t,e),n)})),r}function au(e,t){if(Ml(t))return su.empty();{const n=e.writeTree_.setTree(t,new ru(null));return new su(n)}}function lu(e,t){return null!=cu(e,t)}function cu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ul(n.path,t)):null}function uu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(uc,((e,n)=>{t.push(new Gl(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Gl(e,n.value))})),t}function hu(e,t){if(Ml(t))return e;{const n=cu(e,t);return new su(null!=n?new ru(n):e.writeTree_.subtree(t))}}function du(e){return e.writeTree_.isEmpty()}function pu(e,t){return fu(Rl(),e.writeTree_,t)}function fu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(xi(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=fu(Ll(e,t),s,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Ll(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(e,t){return Ru(t,e)}function _u(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));xi(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let s=r.visible,i=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&gu(t,r.path)?s=!1:ql(r.path,t.path)&&(i=!0)),o--}if(s){if(i)return function(e){e.visibleWrites=yu(e.allWrites,vu,Rl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=au(e.visibleWrites,r.path);else{Ja(r.children,(t=>{e.visibleWrites=au(e.visibleWrites,Ll(r.path,t))}))}return!0}return!1}function gu(e,t){if(e.snap)return ql(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&ql(Ll(e.path,n),t))return!0;return!1}function vu(e){return e.visible}function yu(e,t,n){let r=su.empty();for(let s=0;s<e.length;++s){const i=e[s];if(t(i)){const e=i.path;let t;if(i.snap)ql(n,e)?(t=Ul(n,e),r=iu(r,t,i.snap)):ql(e,n)&&(t=Ul(e,n),r=iu(r,Rl(),i.snap.getChild(t)));else{if(!i.children)throw Oi("WriteRecord should have .snap or .children");if(ql(n,e))t=Ul(n,e),r=ou(r,t,i.children);else if(ql(e,n))if(t=Ul(e,n),Ml(t))r=ou(r,Rl(),i.children);else{const e=so(i.children,xl(t));if(e){const n=e.getChild(Nl(t));r=iu(r,Rl(),n)}}}}}return r}function bu(e,t,n,r,s){if(r||s){const i=hu(e.visibleWrites,t);if(!s&&du(i))return n;if(s||null!=n||lu(i,Rl())){const i=function(e){return(e.visible||s)&&(!r||!~r.indexOf(e.writeId))&&(ql(e.path,t)||ql(t,e.path))};return pu(yu(e.allWrites,i,t),n||vc.EMPTY_NODE)}return null}{const r=cu(e.visibleWrites,t);if(null!=r)return r;{const r=hu(e.visibleWrites,t);if(du(r))return n;if(null!=n||lu(r,Rl())){return pu(r,n||vc.EMPTY_NODE)}return null}}}function wu(e,t,n,r){return bu(e.writeTree,e.treePath,t,n,r)}function Cu(e,t){return function(e,t,n){let r=vc.EMPTY_NODE;const s=cu(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(uc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const s=hu(e.visibleWrites,t);return n.forEachChild(uc,((e,t)=>{const n=pu(hu(s,new Sl(e)),t);r=r.updateImmediateChild(e,n)})),uu(s).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return uu(hu(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Eu(e,t,n,r){return function(e,t,n,r,s){xi(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ll(t,n);if(lu(e.visibleWrites,i))return null;{const t=hu(e.visibleWrites,i);return du(t)?s.getChild(n):pu(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Tu(e,t){return function(e,t){return cu(e.visibleWrites,t)}(e.writeTree,Ll(e.treePath,t))}function Iu(e,t,n,r,s,i){return function(e,t,n,r,s,i,o){let a;const l=hu(e.visibleWrites,t),c=cu(l,Rl());if(null!=c)a=c;else{if(null==n)return[];a=pu(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,s,i)}function ku(e,t,n){return function(e,t,n,r){const s=Ll(t,n),i=cu(e.visibleWrites,s);if(null!=i)return i;if(r.isCompleteForChild(n))return pu(hu(e.visibleWrites,s),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Su(e,t){return Ru(Ll(e.treePath,t),e.writeTree)}function Ru(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;xi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),xi(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Sc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,kc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Ic(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw Oi("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Sc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Nu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ku(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tu(this.viewCache_),s=Iu(this.writes_,r,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(e,t,n,r,s){const i=new xu;let o,a;if(n.type===Bc.OVERWRITE){const l=n;l.source.fromUser?o=Lu(e,t,l.path,l.snap,r,s,i):(xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ml(l.path),o=Du(e,t,l.path,l.snap,r,s,a,i))}else if(n.type===Bc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,s,i,o){let a=t;return r.foreach(((r,l)=>{const c=Ll(n,r);Mu(t,xl(c))&&(a=Lu(e,a,c,l,s,i,o))})),r.foreach(((r,l)=>{const c=Ll(n,r);Mu(t,xl(c))||(a=Lu(e,a,c,l,s,i,o))})),a}(e,t,l.path,l.children,r,s,i):(xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Fu(e,t,l.path,l.children,r,s,a,i))}else if(n.type===Bc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,s,i){let o;if(null!=Tu(r,n))return t;{const a=new Nu(r,t,s),l=t.eventCache.getNode();let c;if(Ml(n)||".priority"===xl(n)){let n;if(t.serverCache.isFullyInitialized())n=wu(r,tu(t));else{const e=t.serverCache.getNode();xi(e instanceof vc,"serverChildren would be complete if leaf node"),n=Cu(r,e)}c=e.filter.updateFullNode(l,n,i)}else{const s=xl(n);let u=ku(r,s,t.serverCache);null==u&&t.serverCache.isCompleteForChild(s)&&(u=l.getImmediateChild(s)),c=null!=u?e.filter.updateChild(l,s,u,Nl(n),a,i):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,vc.EMPTY_NODE,Nl(n),a,i):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=wu(r,tu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,i)))}return o=t.serverCache.isFullyInitialized()||null!=Tu(r,Rl()),Xc(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,r,s,i):function(e,t,n,r,s,i,o){if(null!=Tu(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Ml(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Du(e,t,n,l.getNode().getChild(n),s,i,a,o);if(Ml(n)){let r=new ru(null);return l.getNode().forEachChild(Ql,((e,t)=>{r=r.set(new Sl(e),t)})),Fu(e,t,n,r,s,i,a,o)}return t}{let c=new ru(null);return r.foreach(((e,t)=>{const r=Ll(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Fu(e,t,n,c,s,i,a,o)}}(e,t,a.path,a.affectedTree,r,s,i)}else{if(n.type!==Bc.LISTEN_COMPLETE)throw Oi("Unknown operation type: "+n.type);o=function(e,t,n,r,s){const i=t.serverCache,o=Zc(t,i.getNode(),i.isFullyInitialized()||Ml(n),i.isFiltered());return Au(e,o,n,r,Ou,s)}(e,t,n.path,r,i)}const l=i.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=eu(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Tc(eu(t)))}}(t,o,l),{viewCache:o,changes:l}}function Au(e,t,n,r,s,i){const o=t.eventCache;if(null!=Tu(r,n))return t;{let a,l;if(Ml(n))if(xi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=tu(t),s=Cu(r,n instanceof vc?n:vc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,i)}else{const n=wu(r,tu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,i)}else{const c=xl(n);if(".priority"===c){xi(1===Ol(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const i=Eu(r,n,s,l);a=null!=i?e.filter.updatePriority(s,i):o.getNode()}else{const u=Nl(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Eu(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=ku(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,s,i):o.getNode()}}return Xc(t,a,o.isFullyInitialized()||Ml(n),e.filter.filtersNodes())}}function Du(e,t,n,r,s,i,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ml(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=xl(n);if(!l.isCompleteForPath(n)&&Ol(n)>1)return t;const s=Nl(n),i=l.getNode().getImmediateChild(e).updateChild(s,r);c=".priority"===e?u.updatePriority(l.getNode(),i):u.updateChild(l.getNode(),e,i,s,Ou,null)}const h=Zc(t,c,l.isFullyInitialized()||Ml(n),u.filtersNodes());return Au(e,h,n,s,new Nu(s,h,i),a)}function Lu(e,t,n,r,s,i,o){const a=t.eventCache;let l,c;const u=new Nu(s,t,i);if(Ml(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Xc(t,c,!0,e.filter.filtersNodes());else{const s=xl(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Xc(t,c,a.isFullyInitialized(),a.isFiltered());else{const i=Nl(n),c=a.getNode().getImmediateChild(s);let h;if(Ml(i))h=r;else{const e=u.getCompleteChild(s);h=null!=e?".priority"===Pl(i)&&e.getChild(Dl(i)).isEmpty()?e:e.updateChild(i,r):vc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Xc(t,e.filter.updateChild(a.getNode(),s,h,i,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Mu(e,t){return e.eventCache.isCompleteForChild(t)}function Uu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Fu(e,t,n,r,s,i,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ml(n)?r:new ru(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Du(e,c,new Sl(n),l,s,i,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!l){const l=Uu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Du(e,c,new Sl(n),l,s,i,o,a)}})),c}class ju{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Rc(n.getIndex()),s=(i=n).loadsAllData()?new Rc(i.getIndex()):i.hasLimit()?new Oc(i):new xc(i);var i;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(vc.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(vc.EMPTY_NODE,a.getNode(),null),u=new Kc(l,o.isFullyInitialized(),r.filtersNodes()),h=new Kc(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Qc(h,u),this.eventGenerator_=new Jc(this.query_)}get query(){return this.query_}}function qu(e,t){const n=tu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ml(t)&&!n.getImmediateChild(xl(t)).isEmpty())?n.getChild(t):null}function Bu(e){return 0===e.eventRegistrations_.length}function Vu(e,t,n){const r=[];if(n){xi(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const s=e.eventRegistrations_[r];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Wu(e,t,n,r){t.type===Bc.MERGE&&null!==t.source.queryId&&(xi(tu(e.viewCache_),"We should always have a full cache before handling merges"),xi(eu(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,i=Pu(e.processor_,s,t,n,r);var o,a;return o=e.processor_,a=i.viewCache,xi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),xi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),xi(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=i.viewCache,zu(e,i.changes,i.viewCache.eventCache.getNode(),null)}function zu(e,t,n,r){const s=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const s=[],i=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&i.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Yc(e,s,"child_removed",t,r,n),Yc(e,s,"child_added",t,r,n),Yc(e,s,"child_moved",i,r,n),Yc(e,s,"child_changed",t,r,n),Yc(e,s,"value",t,r,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,$u;class Gu{constructor(){this.views=new Map}}function Ku(e,t,n,r){const s=t.source.queryId;if(null!==s){const i=e.views.get(s);return xi(null!=i,"SyncTree gave us an op for an invalid query."),Wu(i,t,n,r)}{let s=[];for(const i of e.views.values())s=s.concat(Wu(i,t,n,r));return s}}function Ju(e,t,n,r,s){const i=t._queryIdentifier,o=e.views.get(i);if(!o){let e=wu(n,s?r:null),i=!1;e?i=!0:r instanceof vc?(e=Cu(n,r),i=!1):(e=vc.EMPTY_NODE,i=!1);const o=Qc(new Kc(e,i,!1),new Kc(r,s,!1));return new ju(t,o)}return o}function Yu(e,t,n,r,s,i){const o=Ju(e,t,r,s,i);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(uc,((e,t)=>{r.push(Ic(e,t))}));return n.isFullyInitialized()&&r.push(Tc(n.getNode())),zu(e,r,n.getNode(),t)}(o,n)}function Qu(e,t,n,r){const s=t._queryIdentifier,i=[];let o=[];const a=nh(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(Vu(s,n,r)),Bu(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||i.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(Vu(t,n,r)),Bu(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||i.push(t.query)))}return a&&!nh(e)&&i.push(new(xi(Hu,"Reference.ts has not been loaded"),Hu)(t._repo,t._path)),{removed:i,events:o}}function Xu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Zu(e,t){let n=null;for(const r of e.views.values())n=n||qu(r,t);return n}function eh(e,t){if(t._queryParams.loadsAllData())return rh(e);{const n=t._queryIdentifier;return e.views.get(n)}}function th(e,t){return null!=eh(e,t)}function nh(e){return null!=rh(e)}function rh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ru(null),this.pendingWriteTree_={visibleWrites:su.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oh(e,t,n,r,s){return function(e,t,n,r,s){xi(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:s}),s&&(e.visibleWrites=iu(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,s),s?mh(e,new $c({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ah(e,t,n,r){!function(e,t,n,r){xi(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=ou(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const s=ru.fromObject(n);return mh(e,new Gc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,s))}function lh(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(_u(e.pendingWriteTree_,t)){let t=new ru(null);return null!=r.snap?t=t.set(Rl(),!0):Ja(r.children,(e=>{t=t.set(new Sl(e),!0)})),mh(e,new zc(r.path,t,n))}return[]}function ch(e,t,n){return mh(e,new $c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function uh(e,t,n,r,s=!1){const i=t._path,o=e.syncPointTree_.get(i);let a=[];if(o&&("default"===t._queryIdentifier||th(o,t))){const l=Qu(o,t,n,r);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(i,((e,t)=>nh(t)));if(n&&!s){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&nh(t)){return[rh(t)]}{let e=[];return t&&(e=Xu(t)),Ja(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],s=r.query,i=vh(e,r);e.listenProvider_.startListening(Th(s),yh(e,s),i.hashFn,i.onComplete)}}}if(!s&&c.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Th(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(bh(t));e.listenProvider_.stopListening(Th(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=bh(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function hh(e,t,n,r){const s=wh(e,r);if(null!=s){const r=Ch(s),i=r.path,o=r.queryId,a=Ul(i,t);return Eh(e,i,new $c(Wc(o),a,n))}return[]}function dh(e,t,n,r=!1){const s=t._path;let i=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Ul(e,s);i=i||Zu(t,n),o=o||nh(t)}));let a,l=e.syncPointTree_.get(s);if(l?(o=o||nh(l),i=i||Zu(l,Rl())):(l=new Gu,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=i)a=!0;else{a=!1,i=vc.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Zu(t,Rl());n&&(i=i.updateImmediateChild(e,n))}))}const c=th(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=bh(t);xi(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=sh++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let u=Yu(l,t,n,mu(e.pendingWriteTree_,s),i,a);if(!c&&!o&&!r){const n=eh(l,t);u=u.concat(function(e,t,n){const r=t._path,s=yh(e,t),i=vh(e,n),o=e.listenProvider_.startListening(Th(t),s,i.hashFn,i.onComplete),a=e.syncPointTree_.subtree(r);if(s)xi(!nh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ml(e)&&t&&nh(t))return[rh(t).query];{let e=[];return t&&(e=e.concat(Xu(t).map((e=>e.query)))),Ja(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Th(r),yh(e,r))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function ph(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Zu(n,Ul(e,t));if(r)return r}));return bu(r,t,s,n,!0)}function fh(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Ul(e,n);r=r||Zu(t,s)}));let s=e.syncPointTree_.get(n);s?r=r||Zu(s,Rl()):(s=new Gu,e.syncPointTree_=e.syncPointTree_.set(n,s));const i=null!=r,o=i?new Kc(r,!0,!1):null;return function(e){return eu(e.viewCache_)}(Ju(s,t,mu(e.pendingWriteTree_,t._path),i?o.getNode():vc.EMPTY_NODE,i))}function mh(e,t){return _h(t,e.syncPointTree_,null,mu(e.pendingWriteTree_,Rl()))}function _h(e,t,n,r){if(Ml(e.path))return gh(e,t,n,r);{const s=t.get(Rl());null==n&&null!=s&&(n=Zu(s,Rl()));let i=[];const o=xl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Su(r,o);i=i.concat(_h(a,l,e,t))}return s&&(i=i.concat(Ku(s,e,r,n))),i}}function gh(e,t,n,r){const s=t.get(Rl());null==n&&null!=s&&(n=Zu(s,Rl()));let i=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Su(r,t),l=e.operationForChild(t);l&&(i=i.concat(gh(l,s,o,a)))})),s&&(i=i.concat(Ku(s,e,r,n))),i}function vh(e,t){const n=t.query,r=yh(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||vc.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=wh(e,n);if(r){const n=Ch(r),s=n.path,i=n.queryId,o=Ul(s,t);return Eh(e,s,new Hc(Wc(i),o))}return[]}(e,n._path,r):function(e,t){return mh(e,new Hc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return uh(e,n,null,r)}}}}function yh(e,t){const n=bh(t);return e.queryToTagMap.get(n)}function bh(e){return e._path.toString()+"$"+e._queryIdentifier}function wh(e,t){return e.tagToQueryMap.get(t)}function Ch(e){const t=e.indexOf("$");return xi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Sl(e.substr(0,t))}}function Eh(e,t,n){const r=e.syncPointTree_.get(t);xi(r,"Missing sync point for query tag that we're tracking");return Ku(r,n,mu(e.pendingWriteTree_,t),null)}function Th(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(xi($u,"Reference.ts has not been loaded"),$u)(e._repo,e._path):e}class Ih{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ih(t)}node(){return this.node_}}class kh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ll(this.path_,e);return new kh(this.syncTree_,t)}node(){return ph(this.syncTree_,this.path_)}}const Sh=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Rh=function(e,t,n){return e&&"object"==typeof e?(xi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?xh(e[".sv"],t,n):"object"==typeof e[".sv"]?Oh(e[".sv"],t):void xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},xh=function(e,t,n){if("timestamp"===e)return n.timestamp;xi(!1,"Unexpected server value: "+e)},Oh=function(e,t,n){e.hasOwnProperty("increment")||xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&xi(!1,"Unexpected increment value: "+r);const s=t.node();if(xi(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const i=s.getValue();return"number"!=typeof i?r:i+r},Nh=function(e,t,n,r){return Ah(t,new kh(n,e),r)},Ph=function(e,t,n){return Ah(e,new Ih(t),n)};function Ah(e,t,n){const r=e.getPriority().val(),s=Rh(r,t.getImmediateChild(".priority"),n);let i;if(e.isLeafNode()){const r=e,i=Rh(r.getValue(),t,n);return i!==r.getValue()||s!==r.getPriority().val()?new cc(i,wc(s)):e}{const r=e;return i=r,s!==r.getPriority().val()&&(i=i.updatePriority(new cc(s))),r.forEachChild(uc,((e,r)=>{const s=Ah(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))})),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Lh(e,t){let n=t instanceof Sl?t:new Sl(t),r=e,s=xl(n);for(;null!==s;){const e=so(r.node.children,s)||{children:{},childCount:0};r=new Dh(s,r,e),n=Nl(n),s=xl(n)}return r}function Mh(e){return e.node.value}function Uh(e,t){e.node.value=t,Vh(e)}function Fh(e){return e.node.childCount>0}function jh(e,t){Ja(e.node.children,((n,r)=>{t(new Dh(n,e,r))}))}function qh(e,t,n,r){n&&!r&&t(e),jh(e,(e=>{qh(e,t,!0,r)})),n&&r&&t(e)}function Bh(e){return new Sl(null===e.parent?e.name:Bh(e.parent)+"/"+e.name)}function Vh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Mh(e)&&!Fh(e)}(n),s=ro(e.node.children,t);r&&s?(delete e.node.children[t],e.node.childCount--,Vh(e)):r||s||(e.node.children[t]=n.node,e.node.childCount++,Vh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Wh=/[\[\].#$\/\u0000-\u001F\u007F]/,zh=/[\[\].#$\u0000-\u001F\u007F]/,Hh=10485760,$h=function(e){return"string"==typeof e&&0!==e.length&&!Wh.test(e)},Gh=function(e){return"string"==typeof e&&0!==e.length&&!zh.test(e)},Kh=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!Ba(e)||e&&"object"==typeof e&&ro(e,".sv")},Jh=function(e,t,n,r){r&&void 0===t||Yh(_o(e,"value"),t,n)},Yh=function(e,t,n){const r=n instanceof Sl?new Bl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Wl(r));if("function"==typeof t)throw new Error(e+"contains a function "+Wl(r)+" with contents = "+t.toString());if(Ba(t))throw new Error(e+"contains "+t.toString()+" "+Wl(r));if("string"==typeof t&&t.length>Hh/3&&go(t)>Hh)throw new Error(e+"contains a string greater than "+Hh+" utf8 bytes "+Wl(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Ja(t,((t,i)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!$h(t)))throw new Error(e+" contains an invalid key ("+t+") "+Wl(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=go(a),Vl(o),Yh(e,i,r),function(e){const t=e.parts_.pop();e.byteLength_-=go(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&s)throw new Error(e+' contains ".value" child '+Wl(r)+" in addition to actual children.")}},Qh=function(e,t,n,r){if(r&&void 0===t)return;const s=_o(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ja(t,((e,t)=>{const r=new Sl(e);if(Yh(s,t,Ll(n,r)),".priority"===Pl(r)&&!Kh(t))throw new Error(s+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const s=Al(r);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!$h(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Fl);let s=null;for(n=0;n<t.length;n++){if(r=t[n],null!==s&&ql(s,r))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}}(s,i)},Xh=function(e,t,n,r){if(!(r&&void 0===n||Gh(n)))throw new Error(_o(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Zh=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Xh(e,t,n,r)},ed=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!$h(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Gh(e)}(n))throw new Error(_o(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class td{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nd(e,t){let n=null;for(let r=0;r<t.length;r++){const s=t[r],i=s.getPath();null===n||jl(i,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:i}),n.events.push(s)}n&&e.eventLists_.push(n)}function rd(e,t,n){nd(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const s=e.eventLists_[r];if(s){t(s.path)?(sd(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]);e.recursionDepth_--}(e,(e=>ql(e,t)||ql(t,e)))}function sd(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Da&&Ma("event: "+n.toString()),Za(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="repo_interrupt",od=25;class ad{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new td,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new Dh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ld(e,t,n){if(e.stats_=pl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dc(e.repoInfo_,((t,n,r,s)=>{hd(e,t,n,r,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>dd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{to(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new $l(e.repoInfo_,t,((t,n,r,s)=>{hd(e,t,n,r,s)}),(t=>{dd(e,t)}),(t=>{!function(e,t){Ja(t,((t,n)=>{pd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return dl[n]||(dl[n]=t()),dl[n]}(e.repoInfo_,(()=>new qc(e.stats_,e.server_))),e.infoData_=new Lc,e.infoSyncTree_=new ih({startListening:(t,n,r,s)=>{let i=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(i=ch(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),i},stopListening:()=>{}}),pd(e,"connected",!1),e.serverSyncTree_=new ih({startListening:(t,n,r,s)=>(e.server_.listen(t,r,n,((n,r)=>{const i=s(n,r);rd(e.eventQueue_,t._path,i)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function cd(e){const t=e.infoData_.getNode(new Sl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ud(e){return Sh({timestamp:cd(e)})}function hd(e,t,n,r,s){e.dataUpdateCount++;const i=new Sl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(r){const t=oo(n,(e=>wc(e)));o=function(e,t,n,r){const s=wh(e,r);if(s){const r=Ch(s),i=r.path,o=r.queryId,a=Ul(i,t),l=ru.fromObject(n);return Eh(e,i,new Gc(Wc(o),a,l))}return[]}(e.serverSyncTree_,i,t,s)}else{const t=wc(n);o=hh(e.serverSyncTree_,i,t,s)}else if(r){const t=oo(n,(e=>wc(e)));o=function(e,t,n){const r=ru.fromObject(n);return mh(e,new Gc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,i,t)}else{const t=wc(n);o=ch(e.serverSyncTree_,i,t)}let a=i;o.length>0&&(a=yd(e,i)),rd(e.eventQueue_,a,o)}function dd(e,t){pd(e,"connected",t),!1===t&&function(e){md(e,"onDisconnectEvents");const t=ud(e),n=Mc();Fc(e.onDisconnect_,Rl(),((r,s)=>{const i=Nh(r,s,e.serverSyncTree_,t);Uc(n,r,i)}));let r=[];Fc(n,Rl(),((t,n)=>{r=r.concat(ch(e.serverSyncTree_,t,n));const s=Td(e,t);yd(e,s)})),e.onDisconnect_=Mc(),rd(e.eventQueue_,Rl(),r)}(e)}function pd(e,t,n){const r=new Sl("/.info/"+t),s=wc(n);e.infoData_.updateSnapshot(r,s);const i=ch(e.infoSyncTree_,r,s);rd(e.eventQueue_,r,i)}function fd(e){return e.nextWriteId_++}function md(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ma(n,...t)}function _d(e,t,n,r){t&&Za((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;r&&(s+=": "+r);const i=new Error(s);i.code=e,t(i)}}))}function gd(e,t,n){return ph(e.serverSyncTree_,t,n)||vc.EMPTY_NODE}function vd(e,t=e.transactionQueueTree_){if(t||Ed(e,t),Mh(t)){const n=wd(e,t);xi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),s=gd(e,t,r);let i=s;const o=s.hash();for(let e=0;e<n.length;e++){const r=n[e];xi(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const s=Ul(t,r.path);i=i.updateChild(s,r.currentOutputSnapshotRaw)}const a=i.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{md(e,"transaction put response",{path:l.toString(),status:r});let s=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(lh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ed(e,Lh(e.transactionQueueTree_,t)),vd(e,e.transactionQueueTree_),rd(e.eventQueue_,t,s);for(let e=0;e<r.length;e++)Za(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{qa("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}yd(e,t)}}),o)}(e,Bh(t),n)}else Fh(t)&&jh(t,(t=>{vd(e,t)}))}function yd(e,t){const n=bd(e,t),r=Bh(n);return function(e,t,n){if(0===t.length)return;const r=[];let s=[];const i=t.filter((e=>0===e.status)),o=i.map((e=>e.currentWriteId));for(let i=0;i<t.length;i++){const l=t[i],c=Ul(n,l.path);let u,h=!1;if(xi(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,s=s.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=od)h=!0,u="maxretry",s=s.concat(lh(e.serverSyncTree_,l.currentWriteId,!0));else{const n=gd(e,l.path,o);l.currentInputSnapshot=n;const r=t[i].update(n.val());if(void 0!==r){Yh("transaction failed: Data returned ",r,l.path);let t=wc(r);"object"==typeof r&&null!=r&&ro(r,".priority")||(t=t.updatePriority(n.getPriority()));const i=l.currentWriteId,a=ud(e),c=Ph(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=fd(e),o.splice(o.indexOf(i),1),s=s.concat(oh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(lh(e.serverSyncTree_,i,!0))}else h=!0,u="nodata",s=s.concat(lh(e.serverSyncTree_,l.currentWriteId,!0))}rd(e.eventQueue_,n,s),s=[],h&&(t[i].status=2,a=t[i].unwatcher,setTimeout(a,Math.floor(0)),t[i].onComplete&&("nodata"===u?r.push((()=>t[i].onComplete(null,!1,t[i].currentInputSnapshot))):r.push((()=>t[i].onComplete(new Error(u),!1,null)))))}var a;Ed(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Za(r[e]);vd(e,e.transactionQueueTree_)}(e,wd(e,n),r),r}function bd(e,t){let n,r=e.transactionQueueTree_;for(n=xl(t);null!==n&&void 0===Mh(r);)r=Lh(r,n),n=xl(t=Nl(t));return r}function wd(e,t){const n=[];return Cd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Cd(e,t,n){const r=Mh(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);jh(t,(t=>{Cd(e,t,n)}))}function Ed(e,t){const n=Mh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Uh(t,n.length>0?n:void 0)}jh(t,(t=>{Ed(e,t)}))}function Td(e,t){const n=Bh(bd(e,t)),r=Lh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Id(e,t)})),Id(e,r),qh(r,(t=>{Id(e,t)})),n}function Id(e,t){const n=Mh(t);if(n){const r=[];let s=[],i=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(xi(i===t-1,"All SENT items should be at beginning of queue."),i=t,n[t].status=3,n[t].abortReason="set"):(xi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(lh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===i?Uh(t,void 0):n.length=i+1,rd(e.eventQueue_,Bh(t),s);for(let e=0;e<r.length;e++)Za(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(e,t){const n=Sd(e),r=n.namespace;"firebase.com"===n.domain&&ja(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ja("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&qa("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ll(n.host,n.secure,r,s,t,"",r!==n.subdomain),path:new Sl(n.pathString)}},Sd=function(e){let t="",n="",r="",s="",i="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qa(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),i=r}"ns"in d&&(i=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Rd{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+to(this.snapshot.exportVal())}}class xd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return xi(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Nd{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Ml(this._path)?null:Pl(this._path)}get ref(){return new Dd(this._repo,this._path)}get _queryIdentifier(){const e=Ac(this._queryParams),t=Ga(e);return"{}"===t?"default":t}get _queryObject(){return Ac(this._queryParams)}isEqual(e){if(!((e=vo(e))instanceof Nd))return!1;const t=this._repo===e._repo,n=jl(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}function Pd(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Ql){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!==Va)throw new Error(r);if("string"!=typeof t)throw new Error(s)}if(e.hasEnd()){if(e.getIndexEndName()!==Wa)throw new Error(r);if("string"!=typeof n)throw new Error(s)}}else if(e.getIndex()===uc){if(null!=t&&!Kh(t)||null!=n&&!Kh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(xi(e.getIndex()instanceof Cc||e.getIndex()===Ec,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Ad(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Dd extends Nd{constructor(e,t){super(e,t,new Nc,!1)}get parent(){const e=Dl(this._path);return null===e?null:new Dd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Ld{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Sl(e),n=Ud(this.ref,e);return new Ld(this._node.getChild(t),n,uc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Ld(n,Ud(this.ref,t),uc))))}hasChild(e){const t=new Sl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Md(e,t){return(e=vo(e))._checkNotDeleted("ref"),void 0!==t?Ud(e._root,t):e._root}function Ud(e,t){return null===xl((e=vo(e))._path)?Zh("child","path",t,!1):Xh("child","path",t,!1),new Dd(e._repo,Ll(e._path,t))}function Fd(e,t){(function(e,t){if(".info"===xl(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=vo(e))._path),Jh("set",t,e._path,!1);const n=new Hi;return function(e,t,n,r,s){md(e,"set",{path:t.toString(),value:n,priority:r});const i=ud(e),o=wc(n,r),a=ph(e.serverSyncTree_,t),l=Ph(o,a,i),c=fd(e),u=oh(e.serverSyncTree_,t,l,c,!0);nd(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const i="ok"===n;i||qa("set at "+t+" failed: "+n);const o=lh(e.serverSyncTree_,c,!i);rd(e.eventQueue_,t,o),_d(0,s,n,r)}));const h=Td(e,t);yd(e,h),rd(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function jd(e,t){Qh("update",t,e._path,!1);const n=new Hi;return function(e,t,n,r){md(e,"update",{path:t.toString(),value:n});let s=!0;const i=ud(e),o={};if(Ja(n,((n,r)=>{s=!1,o[n]=Nh(Ll(t,n),wc(r),e.serverSyncTree_,i)})),s)Ma("update() called with empty data.  Don't do anything."),_d(0,r,"ok",void 0);else{const s=fd(e),i=ah(e.serverSyncTree_,t,o,s);nd(e.eventQueue_,i),e.server_.merge(t.toString(),n,((n,i)=>{const o="ok"===n;o||qa("update at "+t+" failed: "+n);const a=lh(e.serverSyncTree_,s,!o),l=a.length>0?yd(e,t):t;rd(e.eventQueue_,l,a),_d(0,r,n,i)})),Ja(n,(n=>{const r=Td(e,Ll(t,n));yd(e,r)})),rd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function qd(e){e=vo(e);const t=new Od((()=>{})),n=new Bd(t);return function(e,t,n){const r=fh(e.serverSyncTree_,t);return null!=r?Promise.resolve(r):e.server_.get(t).then((r=>{const s=wc(r).withIndex(t._queryParams.getIndex());let i;if(dh(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())i=ch(e.serverSyncTree_,t._path,s);else{const n=yh(e.serverSyncTree_,t);i=hh(e.serverSyncTree_,t._path,s,n)}return rd(e.eventQueue_,t._path,i),uh(e.serverSyncTree_,t,n,null,!0),s}),(n=>(md(e,"get for query "+to(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Ld(t,new Dd(e._repo,e._path),e._queryParams.getIndex())))}class Bd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Rd("value",this,new Ld(e.snapshotNode,new Dd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xd(this,e,t):null}matches(e){return e instanceof Bd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Vd{}class Wd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Jh("endAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.endSet_=!0,void 0===t&&(t=null),r.indexEndValue_=t,void 0!==n?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}(e._queryParams,this._value,this._key);if(Ad(t),Pd(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Nd(e._repo,e._path,t,e._orderByCalled)}}class zd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Jh("startAt",this._value,e._path,!0);const t=function(e,t,n){const r=e.copy();return r.startSet_=!0,void 0===t&&(t=null),r.indexStartValue_=t,null!=n?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}(e._queryParams,this._value,this._key);if(Ad(t),Pd(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Nd(e._repo,e._path,t,e._orderByCalled)}}class Hd extends Vd{constructor(e){super(),this._path=e}_apply(e){!function(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}(e,"orderByChild");const t=new Sl(this._path);if(Ml(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Cc(t),r=function(e,t){const n=e.copy();return n.index_=t,n}(e._queryParams,n);return Pd(r),new Nd(e._repo,e._path,r,!0)}}function $d(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Xh("orderByChild","path",e,!1),new Hd(e)}class Gd extends Vd{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Jh("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Wd(this._value,this._key)._apply(new zd(this._value,this._key)._apply(e))}}function Kd(e,t){return function(e,t,n,r){if(!(r&&void 0===n||$h(n)))throw new Error(_o(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}("equalTo","key",t,!0),new Gd(e,t)}function Jd(e,...t){let n=vo(e);for(const e of t)n=e._apply(n);return n}!function(e){xi(!Hu,"__referenceConstructor has already been defined"),Hu=e}(Dd),function(e){xi(!$u,"__referenceConstructor has already been defined"),$u=e}(Dd);
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
const Yd="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let Xd=!1;function Zd(e,t,n,r,s){let i=r||e.options.databaseURL;void 0===i&&(e.options.projectId||ja("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ma("Using default host for project ",e.options.projectId),i=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=kd(i,s),c=l.repoInfo;"undefined"!=typeof process&&(a={NODE_ENV:"production"}[Yd]),a?(o=!0,i=`http://${a}?ns=${c.namespace}`,l=kd(i,s),c=l.repoInfo):o=!l.repoInfo.secure;const u=s&&o?new rl(rl.OWNER):new nl(e.name,e.options,t);ed("Invalid Firebase Database URL",l),Ml(l.path)||ja("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let s=Qd[t.name];s||(s={},Qd[t.name]=s);let i=s[e.toURLString()];i&&ja("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return i=new ad(e,Xd,n,r),s[e.toURLString()]=i,i}(c,e,u,new tl(e.name,n));return new tp(h,e)}function ep(e,t){const n=Qd[t];n&&n[e.key]===e||ja(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(id)}(e),delete n[e.key]}class tp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ld(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dd(this._repo,Rl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(ep(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ja("Cannot call "+e+" on a deleted database.")}}function np(e=la(),t){const n=ra(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=Vi("database");e&&function(e,t,n,r={}){e=vo(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ja("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&ja('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new rl(rl.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:$i(r.mockUserToken,e.app.options.projectId);i=new rl(t)}!function(e,t,n,r){e.repoInfo_=new ll(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(s,t,n,i)}
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
 */(n,...e)}return n}$l.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},$l.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Ta=oa,na(new yo("database",((e,{instanceIdentifier:t})=>Zd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ca(Ca,Ea,e),ca(Ca,Ea,"esm2017")}();
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
const rp="firebasestorage.googleapis.com",sp="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ip extends Qi{constructor(e,t,n=0){super(up(e),`Firebase Storage: ${t} (${up(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ip.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return up(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var op,ap,lp,cp;function up(e){return"storage/"+e}function hp(){return new ip(op.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function dp(){return new ip(op.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pp(){return new ip(op.CANCELED,"User canceled the upload/download.")}function fp(){return new ip(op.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mp(e){return new ip(op.INVALID_ARGUMENT,e)}function _p(){return new ip(op.APP_DELETED,"The Firebase app was deleted.")}function gp(e,t){return new ip(op.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function vp(e){throw new ip(op.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ap=op||(op={})).UNKNOWN="unknown",ap.OBJECT_NOT_FOUND="object-not-found",ap.BUCKET_NOT_FOUND="bucket-not-found",ap.PROJECT_NOT_FOUND="project-not-found",ap.QUOTA_EXCEEDED="quota-exceeded",ap.UNAUTHENTICATED="unauthenticated",ap.UNAUTHORIZED="unauthorized",ap.UNAUTHORIZED_APP="unauthorized-app",ap.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",ap.INVALID_CHECKSUM="invalid-checksum",ap.CANCELED="canceled",ap.INVALID_EVENT_NAME="invalid-event-name",ap.INVALID_URL="invalid-url",ap.INVALID_DEFAULT_BUCKET="invalid-default-bucket",ap.NO_DEFAULT_BUCKET="no-default-bucket",ap.CANNOT_SLICE_BLOB="cannot-slice-blob",ap.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",ap.NO_DOWNLOAD_URL="no-download-url",ap.INVALID_ARGUMENT="invalid-argument",ap.INVALID_ARGUMENT_COUNT="invalid-argument-count",ap.APP_DELETED="app-deleted",ap.INVALID_ROOT_OPERATION="invalid-root-operation",ap.INVALID_FORMAT="invalid-format",ap.INTERNAL_ERROR="internal-error",ap.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class yp{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=yp.makeFromUrl(e,t)}catch(t){return new yp(e,"")}if(""===n.path)return n;throw r=e,new ip(op.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${t===rp?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let t=0;t<a.length;t++){const r=a[t],s=r.regex.exec(e);if(s){const e=s[r.indices.bucket];let t=s[r.indices.path];t||(t=""),n=new yp(e,t),r.postModify(n);break}}if(null==n)throw function(e){return new ip(op.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class bp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){return"string"==typeof e||e instanceof String}function Cp(e){return Ep()&&e instanceof Blob}function Ep(){return"undefined"!=typeof Blob&&!function(){var e;const t=null===(e=qi())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()}function Tp(e,t,n,r){if(r<t)throw mp(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw mp(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function kp(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Sp(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(cp=lp||(lp={}))[cp.NO_ERROR=0]="NO_ERROR",cp[cp.NETWORK_ERROR=1]="NETWORK_ERROR",cp[cp.ABORT=2]="ABORT";class Rp{constructor(e,t,n,r,s,i,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new xp(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===lp.NO_ERROR,s=n.getStatus();if(!t||Sp(s,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===lp.ABORT;return void e(!1,new xp(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new xp(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==s){const e=hp();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?_p():pp())}else{r(dp())}};this.canceled_?t(0,new xp(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(p,l())}),t)}function d(){i&&clearTimeout(i)}function p(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let f=!1;function m(e){f||(f=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class xp{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Op(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(Ep())return new Blob(e);throw new ip(op.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
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
 */const Pp={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ap{constructor(e,t){this.data=e,this.contentType=t||null}}function Dp(e,t){switch(e){case Pp.RAW:return new Ap(Lp(t));case Pp.BASE64:case Pp.BASE64URL:return new Ap(Mp(e,t));case Pp.DATA_URL:return new Ap(function(e){const t=new Up(e);return t.base64?Mp(Pp.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw gp(Pp.DATA_URL,"Malformed data URL.")}return Lp(t)}(t.rest)}(t),new Up(t).contentType)}throw hp()}function Lp(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function Mp(e,t){switch(e){case Pp.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw gp(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case Pp.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw gp(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Np(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw gp(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r}class Up{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw gp(Pp.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class Fp{constructor(e,t){let n=0,r="";Cp(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Cp(this.data_)){const i=this.data_,o=(r=e,s=t,(n=i).webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===o?null:new Fp(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new Fp(n,!0)}var n,r,s}static getBlob(...e){if(Ep()){const t=e.map((e=>e instanceof Fp?e.data_:e));return new Fp(Op.apply(null,t))}{const t=e.map((e=>wp(e)?Dp(Pp.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new Fp(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Bp(e,t){return t}class Vp{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Bp}}let Wp=null;function zp(){if(Wp)return Wp;const e=[];e.push(new Vp("bucket")),e.push(new Vp("generation")),e.push(new Vp("metageneration")),e.push(new Vp("name","fullPath",!0));const t=new Vp("name");t.xform=function(e,t){return function(e){return!wp(e)||e.length<2?e:qp(e)}(t)},e.push(t);const n=new Vp("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Vp("timeCreated")),e.push(new Vp("updated")),e.push(new Vp("md5Hash",null,!0)),e.push(new Vp("cacheControl",null,!0)),e.push(new Vp("contentDisposition",null,!0)),e.push(new Vp("contentEncoding",null,!0)),e.push(new Vp("contentLanguage",null,!0)),e.push(new Vp("contentType",null,!0)),e.push(new Vp("metadata","customMetadata",!0)),Wp=e,Wp}function Hp(e,t,n){const r={type:"file"},s=n.length;for(let e=0;e<s;e++){const s=n[e];r[s.local]=s.xform(r,t[s.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new yp(n,r);return t._makeStorageReference(s)}})}(r,e),r}function $p(e,t,n){const r=jp(t);if(null===r)return null;return Hp(e,r,n)}function Gp(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Kp="prefixes",Jp="items";function Yp(e,t,n){const r=jp(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Kp])for(const s of n[Kp]){const n=s.replace(/\/$/,""),i=e._makeStorageReference(new yp(t,n));r.prefixes.push(i)}if(n[Jp])for(const s of n[Jp]){const n=e._makeStorageReference(new yp(t,s.name));r.items.push(n)}return r}(e,t,r)}class Qp{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(e){if(!e)throw hp()}function Zp(e,t){return function(n,r){const s=$p(e,r,t);return Xp(null!==s),s}}function ef(e,t){return function(n,r){const s=$p(e,r,t);return Xp(null!==s),function(e,t,n,r){const s=jp(t);if(null===s)return null;if(!wp(s.downloadTokens))return null;const i=s.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const s=e.bucket,i=e.fullPath;return Ip("/b/"+o(s)+"/o/"+o(i),n,r)+kp({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function tf(e){return function(t,n){let r;var s,i;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new ip(op.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new ip(op.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new ip(op.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new ip(op.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function nf(e){const t=tf(e);return function(n,r){let s=t(n,r);var i;return 404===n.getStatus()&&(i=e.path,s=new ip(op.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function rf(e,t,n,r,s){const i={};t.isRoot?i.prefix="":i.prefix=t.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=Ip(t.bucketOnlyServerUrl(),e.host,e._protocol),a=e.maxOperationRetryTime,l=new Qp(o,"GET",function(e,t){return function(n,r){const s=Yp(e,t,r);return Xp(null!==s),s}}(e,t.bucket),a);return l.urlParams=i,l.errorHandler=tf(t),l}function sf(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class of{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function af(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){Xp(!1)}return Xp(!!n&&-1!==(t||["active"]).indexOf(n)),n}const lf=262144;function cf(e,t,n,r,s,i,o,a){const l=new of(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new ip(op.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.");const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,d=h+u;let p="";p=0===u?"finalize":c===u?"upload, finalize":"upload";const f={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=r.slice(h,d);if(null===m)throw fp();const _=t.maxUploadRetryTime,g=new Qp(n,"POST",(function(e,n){const s=af(e,["active","final"]),o=l.current+u,a=r.size();let c;return c="final"===s?Zp(t,i)(e,n):null,new of(o,a,"final"===s,c)}),_);return g.headers=f,g.body=m.uploadData(),g.progressCallback=a||null,g.errorHandler=tf(e),g}const uf="running",hf="paused",df="success",pf="canceled",ff="error";function mf(e){switch(e){case"running":case"pausing":case"canceling":return uf;case"paused":return hf;case"success":return df;case"canceled":return pf;default:return ff}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class vf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lp.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=lp.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=lp.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw vp("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const e in r)r.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,r[e].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vp("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vp("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw vp("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vp("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class yf extends vf{initXhr(){this.xhr_.responseType="text"}}function bf(){return new yf}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=zp(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(op.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(Sp(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=dp()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(op.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o=sf(t,r,s),a={name:o.fullPath},l=Ip(i,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},u=Gp(o,n),h=e.maxUploadRetryTime,d=new Qp(l,"POST",(function(e){let t;af(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){Xp(!1)}return Xp(wp(t)),t}),h);return d.urlParams=a,d.headers=c,d.body=u,d.errorHandler=tf(t),d}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const s=e.maxUploadRetryTime,i=new Qp(n,"POST",(function(e){const t=af(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){Xp(!1)}n||Xp(!1);const s=Number(n);return Xp(!isNaN(s)),new of(s,r.size(),"final"===t)}),s);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=tf(t),i}(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,bf,t,n);this._request=s,s.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=lf*this._chunkMultiplier,t=new of(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,s)=>{let i;try{i=cf(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const o=this._ref.storage._makeRequest(i,bf,r,s,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(lf*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=function(e,t,n){const r=Ip(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new Qp(r,"GET",Zp(e,n),s);return i.errorHandler=nf(t),i}(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=sf(t,r,s),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+Gp(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",u="\r\n--"+a+"--",h=Fp.getBlob(c,r,u);if(null===h)throw fp();const d={name:l.fullPath},p=Ip(i,e.host,e._protocol),f=e.maxUploadRetryTime,m=new Qp(p,"POST",Zp(e,n),f);return m.urlParams=d,m.headers=o,m.body=h.uploadData(),m.errorHandler=tf(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,bf,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=pp(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=mf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const s=new _f(t||void 0,n||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(mf(this._state)){case df:gf(this._resolve.bind(null,this.snapshot))();break;case pf:case ff:gf(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mf(this._state)){case uf:case hf:e.next&&gf(e.next.bind(e,this.snapshot))();break;case df:e.complete&&gf(e.complete.bind(e))();break;default:e.error&&gf(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class Cf{constructor(e,t){this._service=e,this._location=t instanceof yp?t:yp.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cf(e,t)}get root(){const e=new yp(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qp(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new yp(this._location.bucket,e);return new Cf(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new ip(op.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function Ef(e){const t={prefixes:[],items:[]};return Tf(e,t).then((()=>t))}async function Tf(e,t,n){const r={pageToken:n},s=await function(e,t){null!=t&&"number"==typeof t.maxResults&&Tp("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=rf(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,bf)}(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await Tf(e,t,s.nextPageToken)}function If(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=Ip(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new Qp(r,"GET",ef(e,n),s);return i.errorHandler=nf(t),i}(e.storage,e._location,zp());return e.storage.makeRequestWithTokens(t,bf).then((e=>{if(null===e)throw new ip(op.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function kf(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=Ip(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,s=new Qp(n,"DELETE",(function(e,t){}),r);return s.successCodes=[200,204],s.errorHandler=nf(t),s}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,bf)}function Sf(e,t){if(e instanceof Of){const n=e;if(null==n._bucket)throw new ip(op.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sp+"' property when initializing the app?");const r=new Cf(n,n._bucket);return null!=t?Sf(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new yp(e._location.bucket,n);return new Cf(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function Rf(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Of)return new Cf(e,t);throw mp("To use ref(service, url), the first argument must be a Storage instance.")}return Sf(e,t)}function xf(e,t){const n=null==t?void 0:t[sp];return null==n?null:yp.makeFromBucketSpec(n,e)}class Of{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=rp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?yp.makeFromBucketSpec(r,this._host):xf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=yp.makeFromBucketSpec(this._url,e):this._bucket=xf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cf(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new bp(_p());{const i=function(e,t,n,r,s,i,o=!0){const a=kp(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new Rp(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Nf="@firebase/storage",Pf="0.11.2",Af="storage";function Df(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new wf(e,new Fp(t),n)}(e=vo(e),t,n)}function Lf(e){return Ef(e=vo(e))}function Mf(e){return If(e=vo(e))}function Uf(e,t){return Rf(e=vo(e),t)}function Ff(e=la(),t){const n=ra(e=vo(e),Af).getImmediate({identifier:t}),r=Vi("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:$i(s,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function jf(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Of(n,r,s,t,oa)}na(new yo(Af,jf,"PUBLIC").setMultipleInstances(!0)),ca(Nf,Pf,""),ca(Nf,Pf,"esm2017");const qf={class:"container"},Bf=qr("h2",null,"レタッチ依頼",-1),Vf={class:"alert alert-warning"},Wf={class:"form-group"},zf={class:"input-group align-items-center mb-3"},Hf=qr("h5",{class:"me-3"},"店舗：",-1),$f={class:"btn-group"},Gf={class:"me-4"},Kf={class:"me-4"},Jf={class:"me-4"},Yf={class:"input-group align-items-center mb-3"},Qf=qr("h5",{class:"me-3"},"担当者：",-1),Xf={class:"input-group align-items-center mb-3"},Zf=qr("h5",{class:"me-3"},"キャスト名：",-1),em={class:"row mb-3"},tm=qr("div",{class:"col"},[qr("h5",null,"修正箇所：")],-1),nm={class:"btn-group flex-column"},rm={class:"me-4"},sm={class:"me-4"},im={class:"me-4"},om={class:"me-4"},am={class:"input-group align-items-center"},lm={class:"me-4"},cm=["disabled"],um={class:"input-group align-items-center mb-3"},hm=qr("h5",{class:"me-3"},"顔の処理：",-1),dm={class:"row mb-3"},pm=qr("div",{class:"col"},[qr("h5",null,"提出期限：")],-1),fm={class:"btn-group flex-column"},mm={class:"me-4"},_m={class:"me-4"},gm={class:"me-4"},vm={class:"me-4"},ym={class:"input-group align-items-center"},bm={class:"me-4"},wm=["disabled"],Cm={class:"img_post"},Em=qr("h5",null," レタッチ画像：",-1),Tm={class:"pc_area"},Im=["onDrop"],km={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},Sm=["onClick"],Rm=qr("div",{class:"position-relative"},[qr("span",{class:"position-absolute delete-mark"},"×"),qr("img",{class:"file_icon",src:Hs})],-1),xm={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},Om={class:"z-3 bg-white .text-secondary w-25 h-25 rounded mt-4"},Nm={class:"d-flex flex-column p-3"},Pm={class:"d-flex justify-content-center items-center"},Am={class:"fs-3 lh-lg"},Dm={class:"bg-secondary rounded mt-3",style:{height:"20px"}},Lm={class:"w-100 h2",style:{height:"20px"}},Mm={class:"mt-4 d-flex justify-content-end items-center"},Um={class:"btn btn-secondary px-4 py-2 fw-bold"},Fm=qr("h3",null,"依頼中",-1),jm={class:"table-responsive mb-4"},qm={class:"table table-striped text-nowrap",style:{width:"1296px"}},Bm=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"キャスト名"),qr("th",{scope:"col"},"修正箇所"),qr("th",{scope:"col"},"顔の処理"),qr("th",{scope:"col"},"提出期限")])],-1),Vm={class:"text-wrap"},Wm={class:"text-wrap"},zm={class:"text-wrap"},Hm={class:"text-wrap"},$m={class:"text-wrap"},Gm={class:"text-wrap"},Km={name:"retouch"};var Jm=Object.assign(Km,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),r=Md(n,"retouch"),s=it({checked:!1}),i=it({checked:!1}),o=it({manager:"",retouching:[],otherRetouching:[],retouchings:[],castName:"",faceRetouching:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ti(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{o.uploadModal=!0;let e=(new Date).getTime();const r=[],s={contentType:"image/jpeg"},i=Ff(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(i,o.castName+"/"+e.name);await Df(t,e,s);const n=await Mf(t);if(r.push(n),r.length==o.files.length){console.log("got all paths here now:",r);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Fd(Md(n,"retouch/"+e),{manager:o.manager,retouchings:o.retouching+","+o.otherRetouching,castName:o.castName,faceRetouching:o.faceRetouching,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:e,img:o.img})},l=cs((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=cs((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=cs({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),_=()=>{m.value++},g=()=>{m.value--};return Cn((()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Or(),Dr("section",null,[qr("div",qf,[Bf,qr("div",Vf,[qr("div",Wf,[qr("div",zf,[Hf,qr("div",$f,[qr("label",Gf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Ls,o.shop]]),Wr(" DG ")]),qr("label",Kf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Ls,o.shop]]),Wr(" KPG ")]),qr("label",Jf,[un(qr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Ls,o.shop]]),Wr(" GG ")])])]),qr("div",Yf,[Qf,un(qr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ps,o.manager]])]),qr("div",Xf,[Zf,un(qr("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.castName=e),class:"form-control"},null,512),[[Ps,o.castName]])]),qr("div",em,[tm,qr("div",nm,[qr("div",null,[qr("label",rm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.retouching=e),value:"ほくろ"},null,512),[[As,o.retouching]]),Wr(" ほくろ ")]),qr("label",sm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>o.retouching=e),value:"しわ"},null,512),[[As,o.retouching]]),Wr(" しわ ")]),qr("label",im,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=e=>o.retouching=e),value:"傷"},null,512),[[As,o.retouching]]),Wr(" 傷 ")]),qr("label",om,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[8]||(t[8]=e=>o.retouching=e),value:"細身"},null,512),[[As,o.retouching]]),Wr(" 細身 ")])]),qr("div",am,[qr("label",lm,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>s.checked=e)},null,512),[[As,s.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.otherRetouching=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"髪色やネイルの修正等"},null,8,cm),[[Ps,o.otherRetouching]])])])]),qr("div",um,[hm,un(qr("input",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.faceRetouching=e),class:"form-control"},null,512),[[Ps,o.faceRetouching]])]),qr("div",dm,[pm,qr("div",fm,[qr("div",null,[qr("label",mm,[un(qr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Ls,o.deadline]]),Wr(" 大至急 ")]),qr("label",_m,[un(qr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Ls,o.deadline]]),Wr(" ～３日 ")]),qr("label",gm,[un(qr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Ls,o.deadline]]),Wr(" ～７日 ")]),qr("label",vm,[un(qr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Ls,o.deadline]]),Wr(" お任せ ")]),qr("div",ym,[qr("label",bm,[un(qr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>i.checked=e)},null,512),[[As,i.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,wm),[[Ps,o.otherDeadline]])])])])]),qr("div",Cm,[Em,qr("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qr("div",Tm,[qr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qs((()=>{}),["prevent"])),onDrop:qs(h,["prevent"])},"ファイルアップロード",42,Im)]),qr("div",null,[qr("ul",km,[(Or(!0),Dr(Tr,null,Ln(l.value,((e,t)=>(Or(),Dr("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[Rm,qr("span",null,Y(e.name),1)],8,Sm)))),128))])]),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])]),un(qr("div",null,[qr("div",xm,[qr("div",Om,[qr("div",Nm,[qr("div",Pm,[qr("h2",Am,Y(o.send),1)]),un(qr("div",Dm,[qr("div",Lm,[qr("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Bs,o.progressBar]]),qr("div",Mm,[un(qr("button",Um," 完了 ",512),[[Bs,o.sending]]),un(qr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Bs,o.send_completed]])])])])])],512),[[Bs,o.uploadModal]])]),Fm,qr("div",jm,[qr("table",qm,[Bm,qr("tbody",null,[(Or(!0),Dr(Tr,null,Ln(f.value,(e=>(Or(),Dr("tr",null,[qr("td",Vm,Y(e.shop),1),qr("td",Wm,Y(e.manager),1),qr("td",zm,Y(e.castName),1),qr("td",Hm,Y(e.retouchings),1),qr("td",$m,Y(e.faceRetouching),1),qr("td",Gm,Y(e.deadlines),1)])))),256))])])]),qr("div",{class:"text-center mb-5"},[qr("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),qr("span",{class:"btn btn-secondary ms-4",onClick:_},"next >")])]))}}),Ym={name:"App",components:{RequestRetouch:Jm}};const Qm={key:0,class:"btnBox text-center"};Ym.render=function(e,t,n,r,s,i){const o=Pn("router-link"),a=Pn("router-view");return Or(),Dr(Tr,null,["index"==e.$route.name||"retouch"==e.$route.name?(Or(),Dr("div",Qm,[Br(o,{to:"/",class:"btn btn-primary mx-2"},{default:Xt((()=>[Wr("バナー依頼")])),_:1}),Br(o,{to:"/retouch",class:"btn btn-warning mx-2"},{default:Xt((()=>[Wr("レタッチ依頼")])),_:1})])):zr("",!0),Br(a)],64)};const Xm=new Ii({state:()=>({page:0}),mutations:{set_page:(e,t)=>{e.page=t}}});
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Zm="undefined"!=typeof window;const e_=Object.assign;function t_(e,t){const n={};for(const r in t){const s=t[r];n[r]=r_(s)?s.map(e):e(s)}return n}const n_=()=>{},r_=Array.isArray,s_=/\/$/,i_=e=>e.replace(s_,"");function o_(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];".."!==s&&"."!==s||r.push("");let i,o,a=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function a_(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function l_(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function c_(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!u_(e[n],t[n]))return!1;return!0}function u_(e,t){return r_(e)?h_(e,t):r_(t)?h_(t,e):e===t}function h_(e,t){return r_(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var d_,p_,f_,m_;(p_=d_||(d_={})).pop="pop",p_.push="push",(m_=f_||(f_={})).back="back",m_.forward="forward",m_.unknown="";const __=/^[^#]+#/;function g_(e,t){return e.replace(__,"#")+t}const v_=()=>({left:window.pageXOffset,top:window.pageYOffset});function y_(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),s="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function b_(e,t){return(history.state?history.state.position-t:-1)+e}const w_=new Map;let C_=()=>location.protocol+"//"+location.host;function E_(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let t=s.includes(e.slice(i))?e.slice(i).length:1,n=s.slice(t);return"/"!==n[0]&&(n="/"+n),a_(n,"")}return a_(n,e)+r+s}function T_(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?v_():null}}function I_(e){return"string"==typeof e||"symbol"==typeof e}const k_={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},S_=Symbol("");var R_,x_;function O_(e,t){return e_(new Error,{type:e,[S_]:!0},t)}function N_(e,t){return e instanceof Error&&S_ in e&&(null==t||!!(e.type&t))}(x_=R_||(R_={}))[x_.aborted=4]="aborted",x_[x_.cancelled=8]="cancelled",x_[x_.duplicated=16]="duplicated";const P_="[^/]+?",A_={sensitive:!1,strict:!1,start:!0,end:!0},D_=/[.+*?^${}()[\]/\\]/g;function L_(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function M_(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const e=L_(r[n],s[n]);if(e)return e;n++}if(1===Math.abs(s.length-r.length)){if(U_(r))return 1;if(U_(s))return-1}return s.length-r.length}function U_(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const F_={type:0,value:""},j_=/[a-zA-Z0-9_]/;function q_(e,t,n){const r=function(e,t){const n=e_({},A_,t),r=[];let s=n.start?"^":"";const i=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(s+="/");for(let r=0;r<t.length;r++){const o=t[r];let a=40+(n.sensitive?.25:0);if(0===o.type)r||(s+="/"),s+=o.value.replace(D_,"\\$&"),a+=40;else if(1===o.type){const{value:e,repeatable:n,optional:l,regexp:c}=o;i.push({name:e,repeatable:n,optional:l});const u=c||P_;if(u!==P_){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let h=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(h=l&&t.length<2?`(?:/${h})`:"/"+h),l&&(h+="?"),s+=h,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");return{re:o,score:r,keys:i,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",s=i[e-1];n[s.name]=r&&s.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,l=i in t?t[i]:"";if(r_(l)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const c=r_(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[F_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,l=0,c="",u="";function h(){c&&(0===n?i.push({type:0,value:c}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:j_.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}(e.path),n),s=e_(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function B_(e,t){const n=[],r=new Map;function s(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:W_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=$_(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(e_({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=q_(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!z_(h)&&i(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&o(h)}return d?()=>{i(d)}:n_}function i(e){if(I_(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function o(e){let t=0;for(;t<n.length&&M_(e,n[t])>=0&&(e.record.path!==n[t].record.path||!G_(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!z_(e)&&r.set(e.record.name,e)}return t=$_({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:function(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw O_(1,{location:e});o=s.record.name,a=e_(V_(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&V_(e.params,s.keys.map((e=>e.name)))),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw O_(1,{location:e,currentLocation:t});o=s.record.name,a=e_({},t.params,e.params),i=s.stringify(a)}const l=[];let c=s;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:i,params:a,matched:l,meta:H_(l)}},removeRoute:i,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function V_(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function W_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function z_(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H_(e){return e.reduce(((e,t)=>e_(e,t.meta)),{})}function $_(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function G_(e,t){return t.children.some((t=>t===e||G_(e,t)))}const K_=/#/g,J_=/&/g,Y_=/\//g,Q_=/=/g,X_=/\?/g,Z_=/\+/g,eg=/%5B/g,tg=/%5D/g,ng=/%5E/g,rg=/%60/g,sg=/%7B/g,ig=/%7C/g,og=/%7D/g,ag=/%20/g;function lg(e){return encodeURI(""+e).replace(ig,"|").replace(eg,"[").replace(tg,"]")}function cg(e){return lg(e).replace(Z_,"%2B").replace(ag,"+").replace(K_,"%23").replace(J_,"%26").replace(rg,"`").replace(sg,"{").replace(og,"}").replace(ng,"^")}function ug(e){return null==e?"":function(e){return lg(e).replace(K_,"%23").replace(X_,"%3F")}(e).replace(Y_,"%2F")}function hg(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function dg(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(Z_," "),s=r.indexOf("="),i=hg(s<0?r:r.slice(0,s)),o=s<0?null:hg(r.slice(s+1));if(i in t){let e=t[i];r_(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function pg(e){let t="";for(let n in e){const r=e[n];if(n=cg(n).replace(Q_,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(r_(r)?r.map((e=>e&&cg(e))):[r&&cg(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function fg(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=r_(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const mg=Symbol(""),_g=Symbol(""),gg=Symbol(""),vg=Symbol(""),yg=Symbol("");function bg(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function wg(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(O_(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(O_(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"==typeof e&&i.push(e),o())},c=e.call(r&&r.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Cg(e,t,n,r){const s=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(i=a)||"displayName"in i||"props"in i||"__vccOpts"in i){const i=(a.__vccOpts||a)[t];i&&s.push(wg(i,n,r,o,e))}else{let i=a();s.push((()=>i.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const i=(a=s).__esModule||"Module"===a[Symbol.toStringTag]?s.default:s;var a;o.components[e]=i;const l=(i.__vccOpts||i)[t];return l&&wg(l,n,r,o,e)()}))))}}var i;return s}function Eg(e){const t=sr(gg),n=sr(vg),r=cs((()=>t.resolve(Ct(e.to)))),s=cs((()=>{const{matched:e}=r.value,{length:t}=e,s=e[t-1],i=n.matched;if(!s||!i.length)return-1;const o=i.findIndex(l_.bind(null,s));if(o>-1)return o;const a=kg(e[t-2]);return t>1&&kg(s)===a&&i[i.length-1].path!==a?i.findIndex(l_.bind(null,e[t-2])):o})),i=cs((()=>s.value>-1&&function(e,t){for(const n in t){const r=t[n],s=e[n];if("string"==typeof r){if(r!==s)return!1}else if(!r_(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}(n.params,r.value.params))),o=cs((()=>s.value>-1&&s.value===n.matched.length-1&&c_(n.params,r.value.params)));return{route:r,href:cs((()=>r.value.href)),isActive:i,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[Ct(e.replace)?"replace":"push"](Ct(e.to)).catch(n_):Promise.resolve()}}}const Tg=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Eg,setup(e,{slots:t}){const n=it(Eg(e)),{options:r}=sr(gg),s=cs((()=>({[Sg(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sg(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:us("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Ig=Tg;function kg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sg=(e,t,n)=>null!=e?e:null!=t?t:n,Rg=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=sr(yg),s=cs((()=>e.route||r.value)),i=sr(_g,0),o=cs((()=>{let e=Ct(i);const{matched:t}=s.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=cs((()=>s.value.matched[o.value]));rr(_g,cs((()=>o.value+1))),rr(mg,a),rr(yg,s);const l=bt(c,!1);var c;return sn((()=>[l.value,a.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&l_(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,i=e.name,o=a.value,c=o&&o.components[i];if(!c)return xg(n.default,{Component:c,route:r});const u=o.props[i],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=us(c,e_({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[i]=null)},ref:l}));return xg(n.default,{Component:d,route:r})||d}}});function xg(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Og=Rg;function Ng(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function Pg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}"function"==typeof SuppressedError&&SuppressedError;const Ag=Pg,Dg=new Xi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Lg=new xo("@firebase/auth");function Mg(e,...t){Lg.logLevel<=Eo.ERROR&&Lg.error(`Auth (${oa}): ${e}`,...t)}
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
 */function Ug(e,...t){throw jg(e,...t)}function Fg(e,...t){return jg(e,...t)}function jg(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Dg.create(e,...t)}function qg(e,t,...n){if(!e)throw jg(t,...n)}function Bg(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mg(t),new Error(t)}function Vg(e,t){e||Bg(t)}
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
class $g{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vg(t>e,"Short delay should be less than long delay!"),this.isMobile=Ki()||Ji()}get(){return Hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Gg(e,t){Vg(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Kg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Bg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Bg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Bg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Yg=new $g(3e4,6e4);
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
 */function Qg(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xg(e,t,n,r,s={}){return Zg(e,s,(async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=co(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Kg.fetch()(tv(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Zg(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jg),t);try{const t=new nv(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw rv(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw rv(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw rv(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw rv(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Ag()),{[t]:n});return new Xi("auth","Firebase",r).create(t,{appName:e.name})}(e,a,o);Ug(e,a)}}catch(t){if(t instanceof Qi)throw t;Ug(e,"network-request-failed",{message:String(t)})}}async function ev(e,t,n,r,s={}){const i=await Xg(e,t,n,r,s);return"mfaPendingCredential"in i&&Ug(e,"multi-factor-auth-required",{_serverResponse:i}),i}function tv(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Gg(e.config,s):`${e.config.apiScheme}://${s}`}class nv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Fg(this.auth,"network-request-failed"))),Yg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function rv(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fg(e,t,r);return s.customData._tokenResponse=n,s}
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
function sv(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function iv(e){return 1e3*Number(e)}function ov(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Mg("JWT malformed, contained fewer than 3 sections"),null;try{const e=Mi(n);return e?JSON.parse(e):(Mg("Failed to decode base64 JWT payload"),null)}catch(e){return Mg("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
 */class cv{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sv(this.lastLoginAt),this.creationTime=sv(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function uv(e){var t;const n=e.auth,r=await e.getIdToken(),s=await av(e,async function(e,t){return Xg(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));qg(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ng(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new cv(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class hv{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qg(e.idToken,"internal-error"),qg(void 0!==e.idToken,"internal-error"),qg(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ov(e);return qg(t,"internal-error"),qg(void 0!==t.exp,"internal-error"),qg(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qg(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=
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
 */await async function(e,t){const n=await Zg(e,{},(async()=>{const n=co({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=tv(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Kg.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new hv;return n&&(qg("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(qg("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(qg("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hv,this.toJSON())}_performRefresh(){return Bg("not implemented")}}
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
 */function dv(e,t){qg("string"==typeof e||void 0===e,"internal-error",{appName:t})}class pv{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=Ng(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await av(this,this.stsTokenManager.getToken(this.auth,e));return qg(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=vo(e),r=await n.getIdToken(t),s=ov(r);qg(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sv(iv(s.auth_time)),issuedAtTime:sv(iv(s.iat)),expirationTime:sv(iv(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=vo(e);await uv(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qg(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pv(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){qg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await uv(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await av(this,async function(e,t){return Xg(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:C}=t;qg(v&&C,e,"internal-error");const E=hv.fromJSON(this.name,C);qg("string"==typeof v,e,"internal-error"),dv(u,e.name),dv(h,e.name),qg("boolean"==typeof y,e,"internal-error"),qg("boolean"==typeof b,e,"internal-error"),dv(d,e.name),dv(p,e.name),dv(f,e.name),dv(m,e.name),dv(_,e.name),dv(g,e.name);const T=new pv({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new hv;r.updateFromServerResponse(t);const s=new pv({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await uv(s),s}}
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
 */const fv=new Map;function mv(e){Vg(e instanceof Function,"Expected a class definition");let t=fv.get(e);return t?(Vg(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,fv.set(e,t),t)}
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
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_v.type="NONE";const gv=_v;
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
 */function vv(e,t,n){return`firebase:${e}:${t}:${n}`}class yv{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=vv(this.userKey,r.apiKey,s),this.fullPersistenceKey=vv("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pv._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new yv(mv(gv),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||mv(gv);const i=vv(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const r=pv._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(e){}}))),new yv(s,e,n)):new yv(s,e,n)}}
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
 */function bv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kv(t))return"Blackberry";if(Sv(t))return"Webos";if(Cv(t))return"Safari";if((t.includes("chrome/")||Ev(t))&&!t.includes("edge/"))return"Chrome";if(Iv(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wv(e=Gi()){return/firefox\//i.test(e)}function Cv(e=Gi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ev(e=Gi()){return/crios\//i.test(e)}function Tv(e=Gi()){return/iemobile/i.test(e)}function Iv(e=Gi()){return/android/i.test(e)}function kv(e=Gi()){return/blackberry/i.test(e)}function Sv(e=Gi()){return/webos/i.test(e)}function Rv(e=Gi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xv(){return function(){const e=Gi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Ov(e=Gi()){return Rv(e)||Iv(e)||Sv(e)||kv(e)||/windows phone/i.test(e)||Tv(e)}
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
function Nv(e,t=[]){let n;switch(e){case"Browser":n=bv(Gi());break;case"Worker":n=`${bv(Gi())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${oa}/${r}`}async function Pv(e,t){return Xg(e,"GET","/v2/recaptchaConfig",Qg(e,t))}function Av(e){return void 0!==e&&void 0!==e.enterprise}class Dv{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Lv(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Fg("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}class Mv{constructor(e){this.type="recaptcha-enterprise",this.auth=qv(e)}async verify(e="verify",t=!1){function n(t,n,r){const s=window.grecaptcha;Av(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Pv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Dv(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&Av(window.grecaptcha))n(s,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Lv("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Uv(e,t,n,r=!1){const s=new Mv(e);let i;try{i=await s.verify(n)}catch(e){i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Fv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class jv{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bv(this),this.idTokenSubscription=new Bv(this),this.beforeStateQueue=new Fv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mv(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await yv.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return qg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uv(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?vo(e):null;return t&&qg(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qg(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(mv(e))}))}async initializeRecaptchaConfig(){const e=await Pv(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Dv(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Mv(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mv(e)||this._popupRedirectResolver;qg(t,this,"argument-error"),this.redirectPersistenceManager=await yv.create(this,[mv(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return qg(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Lg.logLevel<=Eo.WARN&&Lg.warn(`Auth (${oa}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function qv(e){return vo(e)}class Bv{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return qg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Vv(e,t,n){const r=qv(e);qg(r._canInitEmulator,r,"emulator-config-failed"),qg(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),i=Wv(t),{host:o,port:a}=function(e){const t=Wv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:zv(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:zv(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Wv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function zv(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Hv{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bg("not implemented")}_getIdTokenResponse(e){return Bg("not implemented")}_linkToIdToken(e,t){return Bg("not implemented")}_getReauthenticationResolver(e){return Bg("not implemented")}}
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
class Gv extends Hv{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gv(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Gv(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Uv(e,n,"signInWithPassword");return $v(e,t)}return $v(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Uv(e,n,"signInWithPassword");return $v(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{email:this._email,oobCode:this._password});default:Ug(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Xg(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",Qg(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ug(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */class Jv extends Hv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jv(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ug("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=Ng(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new Jv(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return Kv(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Kv(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kv(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=co(t)}return e}}
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
 */class Yv{constructor(e){var t,n,r,s,i,o;const a=uo(ho(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);qg(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=uo(ho(e)).link,n=t?uo(ho(t)).deep_link_id:null,r=uo(ho(e)).deep_link_id;return(r?uo(ho(r)).link:null)||r||n||t||e}(e);try{return new Yv(t)}catch(e){return null}}}
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
 */class Qv{constructor(){this.providerId=Qv.PROVIDER_ID}static credential(e,t){return Gv._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Yv.parseLink(t);return qg(n,"argument-error"),Gv._fromEmailAndCode(e,n.code,n.tenantId)}}Qv.PROVIDER_ID="password",Qv.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qv.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
 */class ey extends Zv{constructor(){super("facebook.com")}static credential(e){return Jv._fromParams({providerId:ey.PROVIDER_ID,signInMethod:ey.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ey.credentialFromTaggedObject(e)}static credentialFromError(e){return ey.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ey.credential(e.oauthAccessToken)}catch(e){return null}}}ey.FACEBOOK_SIGN_IN_METHOD="facebook.com",ey.PROVIDER_ID="facebook.com";
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
class ty extends Zv{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jv._fromParams({providerId:ty.PROVIDER_ID,signInMethod:ty.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ty.credentialFromTaggedObject(e)}static credentialFromError(e){return ty.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ty.credential(t,n)}catch(e){return null}}}ty.GOOGLE_SIGN_IN_METHOD="google.com",ty.PROVIDER_ID="google.com";
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
class ny extends Zv{constructor(){super("github.com")}static credential(e){return Jv._fromParams({providerId:ny.PROVIDER_ID,signInMethod:ny.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ny.credentialFromTaggedObject(e)}static credentialFromError(e){return ny.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ny.credential(e.oauthAccessToken)}catch(e){return null}}}ny.GITHUB_SIGN_IN_METHOD="github.com",ny.PROVIDER_ID="github.com";
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
class ry extends Zv{constructor(){super("twitter.com")}static credential(e,t){return Jv._fromParams({providerId:ry.PROVIDER_ID,signInMethod:ry.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ry.credentialFromTaggedObject(e)}static credentialFromError(e){return ry.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ry.credential(t,n)}catch(e){return null}}}ry.TWITTER_SIGN_IN_METHOD="twitter.com",ry.PROVIDER_ID="twitter.com";
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
class sy{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await pv._fromIdTokenResponse(e,n,r),i=iy(n);return new sy({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=iy(n);return new sy({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function iy(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class oy extends Qi{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,oy.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new oy(e,t,n,r)}}function ay(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw oy._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function ly(e,t,n=!1){const r="signIn",s=await ay(e,r,t),i=await sy._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function cy(e,t,n){return async function(e,t){return ly(qv(e),t)}(vo(e),Qv.credential(t,n))}
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
 */class dy extends hy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Gi();return Cv(e)||Rv(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);xv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const py=dy;
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
 */class fy extends hy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fy.type="SESSION";const my=fy;
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
class _y{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _y(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
 */_y.receivers=[];class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const l=gy("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
const wy="firebaseLocalStorageDb",Cy="firebaseLocalStorage",Ey="fbase_key";class Ty{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Iy(e,t){return e.transaction([Cy],t?"readwrite":"readonly").objectStore(Cy)}function ky(){const e=indexedDB.open(wy,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Cy,{keyPath:Ey})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Cy)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(wy);return new Ty(e).toPromise()}(),t(await ky()))}))}))}async function Sy(e,t,n){const r=Iy(e,!0).put({[Ey]:t,value:n});return new Ty(r).toPromise()}function Ry(e,t){const n=Iy(e,!0).delete(t);return new Ty(n).toPromise()}class xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ky()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return by()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_y._getInstance(by()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ky();return await Sy(e,uy,"1"),await Ry(e,uy),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sy(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Iy(e,!1).get(t),r=await new Ty(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ry(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Iy(e,!1).getAll();return new Ty(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}xy.type="LOCAL";const Oy=xy;new $g(3e4,6e4);
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
class Ny extends Hv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kv(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kv(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kv(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Py(e){return ly(e.auth,new Ny(e),e.bypassAuthState)}function Ay(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await av(e,ay(r,s,t,e),n);qg(i.idToken,r,"internal-error");const o=ov(i.idToken);qg(o,r,"internal-error");const{sub:a}=o;return qg(e.uid===a,r,"user-mismatch"),sy._forOperation(e,s,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ug(r,"user-mismatch"),e}}(n,new Ny(e),e.bypassAuthState)}async function Dy(e){const{auth:t,user:n}=e;return qg(n,t,"internal-error"),async function(e,t,n=!1){const r=await av(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sy._forOperation(e,"link",r)}(n,new Ny(e),e.bypassAuthState)}
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
 */class Ly{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Py;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return Ay;default:Ug(this.auth,"internal-error")}}resolve(e){Vg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const My=new $g(2e3,1e4);class Uy extends Ly{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Uy.currentPopupAction&&Uy.currentPopupAction.cancel(),Uy.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return qg(e,this.auth,"internal-error"),e}async onExecution(){Vg(1===this.filter.length,"Popup operations only handle one event");const e=gy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Fg(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Fg(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Uy.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Fg(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,My.get())};e()}}Uy.currentPopupAction=null;
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
const Fy="pendingRedirect",jy=new Map;class qy extends Ly{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=jy.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return vv(Fy,e.config.apiKey,e.name)}(t),r=function(e){return mv(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}jy.set(this.auth._key(),e)}return this.bypassAuthState||jy.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function By(e,t){jy.set(e._key(),t)}async function Vy(e,t,n=!1){const r=qv(e),s=
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
function(e,t){return t?mv(t):(qg(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new qy(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hy(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Fg(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zy(e))}saveEventToCache(e){this.cachedEventUids.add(zy(e)),this.lastProcessedEventTime=Date.now()}}function zy(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hy({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $y=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gy=/^https?/;async function Ky(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Xg(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Jy(e))return}catch(e){}Ug(e,"unauthorized-domain")}function Jy(e){const t=Wg(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Gy.test(n))return!1;if($y.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
 */const Yy=new $g(3e4,6e4);function Qy(){const e=yy().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Xy(e){return new Promise(((t,n)=>{var r,s,i;function o(){Qy(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qy(),n(Fg(e,"network-request-failed"))},timeout:Yy.get()})}if(null===(s=null===(r=yy().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=yy().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return yy()[t]=()=>{gapi.load?o():n(Fg(e,"network-request-failed"))},Lv(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Zy=null,e}))}let Zy=null;
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
const eb=new $g(5e3,15e3),tb="__/auth/iframe",nb="emulator/auth/iframe",rb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ib(e){const t=e.config;qg(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gg(t,nb):`https://${e.config.authDomain}/${tb}`,r={apiKey:t.apiKey,appName:e.name,v:oa},s=sb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function ob(e){const t=await function(e){return Zy=Zy||Xy(e),Zy}(e),n=yy().gapi;return qg(n,e,"internal-error"),t.open({where:document.body,url:ib(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rb,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=Fg(e,"network-request-failed"),i=yy().setTimeout((()=>{r(s)}),eb.get());function o(){yy().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
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
 */const ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class lb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function cb(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ab),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Gi().toLowerCase();n&&(a=Ev(c)?"_blank":n),wv(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Gi()){var t;return Rv(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new lb(null);const h=window.open(t||"",a,u);qg(h,e,"popup-blocked");try{h.focus()}catch(e){}return new lb(h)}const ub="__/auth/handler",hb="emulator/auth/handler",db=encodeURIComponent("fac");async function pb(e,t,n,r,s,i){qg(e.config.authDomain,e,"auth-domain-config-required"),qg(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:oa,eventId:s};if(t instanceof Xv){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",io(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Zv){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${db}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${ub}`;return Gg(e,hb)}
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
 */(e)}?${co(a).slice(1)}${c}`}const fb="webStorageSupport";const mb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=my,this._completeRedirectFn=Vy,this._overrideRedirectResult=By}async _openPopup(e,t,n,r){var s;Vg(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return cb(e,await pb(e,t,n,Wg(),r),gy())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){yy().location.href=e}(await pb(e,t,n,Wg(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Vg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ob(e),n=new Wy(e);return t.register("authEvent",(t=>{qg(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fb,{type:fb},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[fb];void 0!==s&&t(!!s),Ug(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ky(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ov()||Cv()||Rv()}};var _b="@firebase/auth",gb="0.23.2";
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
const yb=zi("authIdTokenMaxAge")||300;let bb=null;function wb(e=la()){const t=ra(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ra(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ao(n.getOptions(),null!=t?t:{}))return e;Ug(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:mb,persistence:[Oy,py,my]}),r=zi("authTokenSyncURL");if(r){const e=(s=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>yb)return;const r=null==t?void 0:t.token;bb!==r&&(bb=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){vo(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){vo(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var s;const i=Bi("auth");return i&&Vv(n,`http://${i}`),n}var Cb;function Eb(e,t){return function(){return e.apply(t,arguments)}}Cb="Browser",na(new yo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;qg(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:Cb,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(Cb)},l=new jv(n,r,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mv);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),na(new yo("auth-internal",(e=>{const t=qv(e.getProvider("auth").getImmediate());return new vb(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ca(_b,gb,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Cb)),ca(_b,gb,"esm2017");const{toString:Tb}=Object.prototype,{getPrototypeOf:Ib}=Object,kb=(Sb=Object.create(null),e=>{const t=Tb.call(e);return Sb[t]||(Sb[t]=t.slice(8,-1).toLowerCase())});var Sb;const Rb=e=>(e=e.toLowerCase(),t=>kb(t)===e),xb=e=>t=>typeof t===e,{isArray:Ob}=Array,Nb=xb("undefined");const Pb=Rb("ArrayBuffer");const Ab=xb("string"),Db=xb("function"),Lb=xb("number"),Mb=e=>null!==e&&"object"==typeof e,Ub=e=>{if("object"!==kb(e))return!1;const t=Ib(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Fb=Rb("Date"),jb=Rb("File"),qb=Rb("Blob"),Bb=Rb("FileList"),Vb=Rb("URLSearchParams");function Wb(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,s;if("object"!=typeof e&&(e=[e]),Ob(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let o;for(r=0;r<i;r++)o=s[r],t.call(null,e[o],o,e)}}function zb(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,s=n.length;for(;s-- >0;)if(r=n[s],t===r.toLowerCase())return r;return null}const Hb="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,$b=e=>!Nb(e)&&e!==Hb;const Gb=(Kb="undefined"!=typeof Uint8Array&&Ib(Uint8Array),e=>Kb&&e instanceof Kb);var Kb;const Jb=Rb("HTMLFormElement"),Yb=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Qb=Rb("RegExp"),Xb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Wb(n,((n,s)=>{let i;!1!==(i=t(n,s,e))&&(r[s]=i||n)})),Object.defineProperties(e,r)},Zb="abcdefghijklmnopqrstuvwxyz",ew="0123456789",tw={DIGIT:ew,ALPHA:Zb,ALPHA_DIGIT:Zb+Zb.toUpperCase()+ew};const nw=Rb("AsyncFunction");var rw={isArray:Ob,isArrayBuffer:Pb,isBuffer:function(e){return null!==e&&!Nb(e)&&null!==e.constructor&&!Nb(e.constructor)&&Db(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||Db(e.append)&&("formdata"===(t=kb(e))||"object"===t&&Db(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Pb(e.buffer),t},isString:Ab,isNumber:Lb,isBoolean:e=>!0===e||!1===e,isObject:Mb,isPlainObject:Ub,isUndefined:Nb,isDate:Fb,isFile:jb,isBlob:qb,isRegExp:Qb,isFunction:Db,isStream:e=>Mb(e)&&Db(e.pipe),isURLSearchParams:Vb,isTypedArray:Gb,isFileList:Bb,forEach:Wb,merge:function e(){const{caseless:t}=$b(this)&&this||{},n={},r=(r,s)=>{const i=t&&zb(n,s)||s;Ub(n[i])&&Ub(r)?n[i]=e(n[i],r):Ub(r)?n[i]=e({},r):Ob(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Wb(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(Wb(t,((t,r)=>{n&&Db(t)?e[r]=Eb(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&Ib(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:kb,kindOfTest:Rb,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Ob(e))return e;let t=e.length;if(!Lb(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Jb,hasOwnProperty:Yb,hasOwnProp:Yb,reduceDescriptors:Xb,freezeMethods:e=>{Xb(e,((t,n)=>{if(Db(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];Db(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Ob(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:zb,global:Hb,isContextDefined:$b,ALPHABET:tw,generateString:(e=16,t=tw.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&Db(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Mb(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const s=Ob(e)?[]:{};return Wb(e,((e,t)=>{const i=n(e,r+1);!Nb(i)&&(s[t]=i)})),t[r]=void 0,s}}return e};return n(e,0)},isAsyncFn:nw,isThenable:e=>e&&(Mb(e)||Db(e))&&Db(e.then)&&Db(e.catch)};function sw(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}rw.inherits(sw,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:rw.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const iw=sw.prototype,ow={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ow[e]={value:e}})),Object.defineProperties(sw,ow),Object.defineProperty(iw,"isAxiosError",{value:!0}),sw.from=(e,t,n,r,s,i)=>{const o=Object.create(iw);return rw.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),sw.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};function aw(e){return rw.isPlainObject(e)||rw.isArray(e)}function lw(e){return rw.endsWith(e,"[]")?e.slice(0,-2):e}function cw(e,t,n){return e?e.concat(t).map((function(e,t){return e=lw(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const uw=rw.toFlatObject(rw,{},null,(function(e){return/^is[A-Z]/.test(e)}));function hw(e,t,n){if(!rw.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=rw.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!rw.isUndefined(t[e])}))).metaTokens,s=n.visitor||c,i=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&rw.isSpecCompliantForm(t);if(!rw.isFunction(s))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(rw.isDate(e))return e.toISOString();if(!a&&rw.isBlob(e))throw new sw("Blob is not supported. Use a Buffer instead.");return rw.isArrayBuffer(e)||rw.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,s){let a=e;if(e&&!s&&"object"==typeof e)if(rw.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(rw.isArray(e)&&function(e){return rw.isArray(e)&&!e.some(aw)}(e)||(rw.isFileList(e)||rw.endsWith(n,"[]"))&&(a=rw.toArray(e)))return n=lw(n),a.forEach((function(e,r){!rw.isUndefined(e)&&null!==e&&t.append(!0===o?cw([n],r,i):null===o?n:n+"[]",l(e))})),!1;return!!aw(e)||(t.append(cw(s,n,i),l(e)),!1)}const u=[],h=Object.assign(uw,{defaultVisitor:c,convertValue:l,isVisitable:aw});if(!rw.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!rw.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),rw.forEach(n,(function(n,i){!0===(!(rw.isUndefined(n)||null===n)&&s.call(t,n,rw.isString(i)?i.trim():i,r,h))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t}function dw(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function pw(e,t){this._pairs=[],e&&hw(e,this,t)}const fw=pw.prototype;function mw(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _w(e,t,n){if(!t)return e;const r=n&&n.encode||mw,s=n&&n.serialize;let i;if(i=s?s(t,n):rw.isURLSearchParams(t)?t.toString():new pw(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}fw.append=function(e,t){this._pairs.push([e,t])},fw.toString=function(e){const t=e?function(t){return e.call(this,t,dw)}:dw;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var gw=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){rw.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},vw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var yw={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:pw,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function bw(e){function t(e,n,r,s){let i=e[s++];const o=Number.isFinite(+i),a=s>=e.length;if(i=!i&&rw.isArray(r)?r.length:i,a)return rw.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!o;r[i]&&rw.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],s)&&rw.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}(r[i])),!o}if(rw.isFormData(e)&&rw.isFunction(e.entries)){const n={};return rw.forEachEntry(e,((e,r)=>{t(function(e){return rw.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ww={transitional:vw,adapter:yw.isNode?"http":"xhr",transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,s=rw.isObject(e);s&&rw.isHTMLForm(e)&&(e=new FormData(e));if(rw.isFormData(e))return r&&r?JSON.stringify(bw(e)):e;if(rw.isArrayBuffer(e)||rw.isBuffer(e)||rw.isStream(e)||rw.isFile(e)||rw.isBlob(e))return e;if(rw.isArrayBufferView(e))return e.buffer;if(rw.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return hw(e,new yw.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return yw.isNode&&rw.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=rw.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return hw(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return s||r?(t.setContentType("application/json",!1),function(e,t,n){if(rw.isString(e))try{return(t||JSON.parse)(e),rw.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ww.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&rw.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw sw.from(e,sw.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yw.classes.FormData,Blob:yw.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};rw.forEach(["delete","get","head","post","put","patch"],(e=>{ww.headers[e]={}}));var Cw=ww;const Ew=rw.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);const Tw=Symbol("internals");function Iw(e){return e&&String(e).trim().toLowerCase()}function kw(e){return!1===e||null==e?e:rw.isArray(e)?e.map(kw):String(e)}function Sw(e,t,n,r,s){return rw.isFunction(r)?r.call(this,t,n):(s&&(t=n),rw.isString(t)?rw.isString(r)?-1!==t.indexOf(r):rw.isRegExp(r)?r.test(t):void 0:void 0)}class Rw{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function s(e,t,n){const s=Iw(t);if(!s)throw new Error("header name must be a non-empty string");const i=rw.findKey(r,s);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=kw(e))}const i=(e,t)=>rw.forEach(e,((e,n)=>s(e,n,t)));return rw.isPlainObject(e)||e instanceof this.constructor?i(e,t):rw.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,s;return e&&e.split("\n").forEach((function(e){s=e.indexOf(":"),n=e.substring(0,s).trim().toLowerCase(),r=e.substring(s+1).trim(),!n||t[n]&&Ew[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&s(t,e,n),this}get(e,t){if(e=Iw(e)){const n=rw.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(rw.isFunction(t))return t.call(this,e,n);if(rw.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Iw(e)){const n=rw.findKey(this,e);return!(!n||void 0===this[n]||t&&!Sw(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function s(e){if(e=Iw(e)){const s=rw.findKey(n,e);!s||t&&!Sw(0,n[s],s,t)||(delete n[s],r=!0)}}return rw.isArray(e)?e.forEach(s):s(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const s=t[n];e&&!Sw(0,this[s],s,e,!0)||(delete this[s],r=!0)}return r}normalize(e){const t=this,n={};return rw.forEach(this,((r,s)=>{const i=rw.findKey(n,s);if(i)return t[i]=kw(r),void delete t[s];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(s):String(s).trim();o!==s&&delete t[s],t[o]=kw(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return rw.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&rw.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Tw]=this[Tw]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Iw(e);t[r]||(!function(e,t){const n=rw.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,s){return this[r].call(this,t,e,n,s)},configurable:!0})}))}(n,e),t[r]=!0)}return rw.isArray(e)?e.forEach(r):r(e),this}}Rw.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),rw.reduceDescriptors(Rw.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),rw.freezeMethods(Rw);var xw=Rw;function Ow(e,t){const n=this||Cw,r=t||n,s=xw.from(r.headers);let i=r.data;return rw.forEach(e,(function(e){i=e.call(n,i,s.normalize(),t?t.status:void 0)})),s.normalize(),i}function Nw(e){return!(!e||!e.__CANCEL__)}function Pw(e,t,n){sw.call(this,null==e?"canceled":e,sw.ERR_CANCELED,t,n),this.name="CanceledError"}rw.inherits(Pw,sw,{__CANCEL__:!0});var Aw=yw.isStandardBrowserEnv?{write:function(e,t,n,r,s,i){const o=[];o.push(e+"="+encodeURIComponent(t)),rw.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),rw.isString(r)&&o.push("path="+r),rw.isString(s)&&o.push("domain="+s),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Dw(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Lw=yw.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=rw.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Mw(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s,i=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];s||(s=l),n[i]=a,r[i]=l;let u=o,h=0;for(;u!==i;)h+=n[u++],u%=e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),l-s<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}}(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,l=r(a);n=i;const c={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&i<=o?(o-i)/l:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}var Uw="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const s=xw.from(e.headers).normalize(),i=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}rw.isFormData(r)&&(yw.isStandardBrowserEnv||yw.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(t+":"+n))}const c=Dw(e.baseURL,e.url);function u(){if(!l)return;const r=xw.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new sw("Request failed with status code "+n.status,[sw.ERR_BAD_REQUEST,sw.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),_w(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new sw("Request aborted",sw.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new sw("Network Error",sw.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||vw;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new sw(t,r.clarifyTimeoutError?sw.ETIMEDOUT:sw.ECONNABORTED,e,l)),l=null},yw.isStandardBrowserEnv){const t=(e.withCredentials||Lw(c))&&e.xsrfCookieName&&Aw.read(e.xsrfCookieName);t&&s.set(e.xsrfHeaderName,t)}void 0===r&&s.setContentType(null),"setRequestHeader"in l&&rw.forEach(s.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),rw.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&"json"!==i&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",Mw(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",Mw(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new Pw(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(c);h&&-1===yw.protocols.indexOf(h)?n(new sw("Unsupported protocol "+h+":",sw.ERR_BAD_REQUEST,e)):l.send(r||null)}))};const Fw={http:null,xhr:Uw};rw.forEach(Fw,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var jw=e=>{e=rw.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=rw.isString(n)?Fw[n.toLowerCase()]:n));s++);if(!r){if(!1===r)throw new sw(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(rw.hasOwnProp(Fw,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!rw.isFunction(r))throw new TypeError("adapter is not a function");return r};function qw(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pw(null,e)}function Bw(e){qw(e),e.headers=xw.from(e.headers),e.data=Ow.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return jw(e.adapter||Cw.adapter)(e).then((function(t){return qw(e),t.data=Ow.call(e,e.transformResponse,t),t.headers=xw.from(t.headers),t}),(function(t){return Nw(t)||(qw(e),t&&t.response&&(t.response.data=Ow.call(e,e.transformResponse,t.response),t.response.headers=xw.from(t.response.headers))),Promise.reject(t)}))}const Vw=e=>e instanceof xw?e.toJSON():e;function Ww(e,t){t=t||{};const n={};function r(e,t,n){return rw.isPlainObject(e)&&rw.isPlainObject(t)?rw.merge.call({caseless:n},e,t):rw.isPlainObject(t)?rw.merge({},t):rw.isArray(t)?t.slice():t}function s(e,t,n){return rw.isUndefined(t)?rw.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!rw.isUndefined(t))return r(void 0,t)}function o(e,t){return rw.isUndefined(t)?rw.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,s,i){return i in t?r(n,s):i in e?r(void 0,n):void 0}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>s(Vw(e),Vw(t),!0)};return rw.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=l[r]||s,o=i(e[r],t[r],r);rw.isUndefined(o)&&i!==a||(n[r]=o)})),n}const zw="1.5.0",Hw={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Hw[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const $w={};Hw.transitional=function(e,t,n){function r(e,t){return"[Axios v1.5.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,s,i)=>{if(!1===e)throw new sw(r(s," has been removed"+(t?" in "+t:"")),sw.ERR_DEPRECATED);return t&&!$w[s]&&($w[s]=!0,console.warn(r(s," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,s,i)}};var Gw={assertOptions:function(e,t,n){if("object"!=typeof e)throw new sw("options must be an object",sw.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const t=e[i],n=void 0===t||o(t,i,e);if(!0!==n)throw new sw("option "+i+" must be "+n,sw.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new sw("Unknown option "+i,sw.ERR_BAD_OPTION)}},validators:Hw};const Kw=Gw.validators;class Jw{constructor(e){this.defaults=e,this.interceptors={request:new gw,response:new gw}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ww(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:s}=t;void 0!==n&&Gw.assertOptions(n,{silentJSONParsing:Kw.transitional(Kw.boolean),forcedJSONParsing:Kw.transitional(Kw.boolean),clarifyTimeoutError:Kw.transitional(Kw.boolean)},!1),null!=r&&(rw.isFunction(r)?t.paramsSerializer={serialize:r}:Gw.assertOptions(r,{encode:Kw.function,serialize:Kw.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=s&&rw.merge(s.common,s[t.method]);s&&rw.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete s[e]})),t.headers=xw.concat(i,s);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Bw.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Bw.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return _w(Dw((e=Ww(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}rw.forEach(["delete","get","head","options"],(function(e){Jw.prototype[e]=function(t,n){return this.request(Ww(n||{},{method:e,url:t,data:(n||{}).data}))}})),rw.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,s){return this.request(Ww(s||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Jw.prototype[e]=t(),Jw.prototype[e+"Form"]=t(!0)}));var Yw=Jw;class Qw{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,s){n.reason||(n.reason=new Pw(e,r,s),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Qw((function(t){e=t})),cancel:e}}}var Xw=Qw;const Zw={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zw).forEach((([e,t])=>{Zw[t]=e}));var eC=Zw;const tC=function e(t){const n=new Yw(t),r=Eb(Yw.prototype.request,n);return rw.extend(r,Yw.prototype,n,{allOwnKeys:!0}),rw.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ww(t,n))},r}(Cw);tC.Axios=Yw,tC.CanceledError=Pw,tC.CancelToken=Xw,tC.isCancel=Nw,tC.VERSION=zw,tC.toFormData=hw,tC.AxiosError=sw,tC.Cancel=tC.CanceledError,tC.all=function(e){return Promise.all(e)},tC.spread=function(e){return function(t){return e.apply(null,t)}},tC.isAxiosError=function(e){return rw.isObject(e)&&!0===e.isAxiosError},tC.mergeConfig=Ww,tC.AxiosHeaders=xw,tC.formToJSON=e=>bw(rw.isHTMLForm(e)?new FormData(e):e),tC.getAdapter=jw,tC.HttpStatusCode=eC,tC.default=tC;var nC=tC;const rC="%[a-f0-9]{2}",sC=new RegExp("("+rC+")|([^%]+?)","gi"),iC=new RegExp("("+rC+")+","gi");function oC(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],oC(n),oC(r))}function aC(e){try{return decodeURIComponent(e)}catch{let t=e.match(sC)||[];for(let n=1;n<t.length;n++)t=(e=oC(t,n).join("")).match(sC)||[];return e}}function lC(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let n=iC.exec(e);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{const e=aC(n[0]);e!==n[0]&&(t[n[0]]=e)}n=iC.exec(e)}t["%C2"]="�";const r=Object.keys(t);for(const n of r)e=e.replace(new RegExp(n,"g"),t[n]);return e}(e)}}function cC(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const n=e.indexOf(t);return-1===n?[]:[e.slice(0,n),e.slice(n+t.length)]}function uC(e,t){const n={};if(Array.isArray(t))for(const r of t){const t=Object.getOwnPropertyDescriptor(e,r);t?.enumerable&&Object.defineProperty(n,r,t)}else for(const r of Reflect.ownKeys(e)){const s=Object.getOwnPropertyDescriptor(e,r);if(s.enumerable){t(r,e[r],e)&&Object.defineProperty(n,r,s)}}return n}const hC=e=>null==e,dC=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),pC=Symbol("encodeFragmentIdentifier");function fC(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function mC(e,t){return t.encode?t.strict?dC(e):encodeURIComponent(e):e}function _C(e,t){return t.decode?lC(e):e}function gC(e){return Array.isArray(e)?e.sort():"object"==typeof e?gC(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function vC(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function yC(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function bC(e){const t=(e=vC(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function wC(e,t){fC((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==r[e]?r[e]=[...r[e],n]:r[e]=[n]:r[e]=n};case"colon-list-separator":return(e,n,r)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==r[e]?r[e]=[...r[e],n]:r[e]=[n]:r[e]=n};case"comma":case"separator":return(t,n,r)=>{const s="string"==typeof n&&n.includes(e.arrayFormatSeparator),i="string"==typeof n&&!s&&_C(n,e).includes(e.arrayFormatSeparator);n=i?_C(n,e):n;const o=s||i?n.split(e.arrayFormatSeparator).map((t=>_C(t,e))):null===n?n:_C(n,e);r[t]=o};case"bracket-separator":return(t,n,r)=>{const s=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!s)return void(r[t]=n?_C(n,e):n);const i=null===n?[]:n.split(e.arrayFormatSeparator).map((t=>_C(t,e)));void 0!==r[t]?r[t]=[...r[t],...i]:r[t]=i};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[...[n[e]].flat(),t]:n[e]=t}}}(t),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const s of e.split("&")){if(""===s)continue;const e=t.decode?s.replace(/\+/g," "):s;let[i,o]=cC(e,"=");void 0===i&&(i=e),o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:_C(o,t),n(_C(i,t),o,r)}for(const[e,n]of Object.entries(r))if("object"==typeof n&&null!==n)for(const[e,r]of Object.entries(n))n[e]=yC(r,t);else r[e]=yC(n,t);return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=gC(n):e[t]=n,e}),Object.create(null))}function CC(e,t){if(!e)return"";fC((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const n=n=>t.skipNull&&hC(e[n])||t.skipEmptyString&&""===e[n],r=function(e){switch(e.arrayFormat){case"index":return t=>(n,r)=>{const s=n.length;return void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[mC(t,e),"[",s,"]"].join("")]:[...n,[mC(t,e),"[",mC(s,e),"]=",mC(r,e)].join("")]};case"bracket":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[mC(t,e),"[]"].join("")]:[...n,[mC(t,e),"[]=",mC(r,e)].join("")];case"colon-list-separator":return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,[mC(t,e),":list="].join("")]:[...n,[mC(t,e),":list=",mC(r,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return n=>(r,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?r:(s=null===s?"":s,0===r.length?[[mC(n,e),t,mC(s,e)].join("")]:[[r,mC(s,e)].join(e.arrayFormatSeparator)])}default:return t=>(n,r)=>void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r?n:null===r?[...n,mC(t,e)]:[...n,[mC(t,e),"=",mC(r,e)].join("")]}}(t),s={};for(const[t,r]of Object.entries(e))n(t)||(s[t]=r);const i=Object.keys(s);return!1!==t.sort&&i.sort(t.sort),i.map((n=>{const s=e[n];return void 0===s?"":null===s?mC(n,t):Array.isArray(s)?0===s.length&&"bracket-separator"===t.arrayFormat?mC(n,t)+"[]":s.reduce(r(n),[]).join("&"):mC(n,t)+"="+mC(s,t)})).filter((e=>e.length>0)).join("&")}function EC(e,t){t={decode:!0,...t};let[n,r]=cC(e,"#");return void 0===n&&(n=e),{url:n?.split("?")?.[0]??"",query:wC(bC(e),t),...t&&t.parseFragmentIdentifier&&r?{fragmentIdentifier:_C(r,t)}:{}}}function TC(e,t){t={encode:!0,strict:!0,[pC]:!0,...t};const n=vC(e.url).split("?")[0]||"";let r=CC({...wC(bC(e.url),{sort:!1}),...e.query},t);r&&(r=`?${r}`);let s=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);if(e.fragmentIdentifier){const r=new URL(n);r.hash=e.fragmentIdentifier,s=t[pC]?r.hash:`#${e.fragmentIdentifier}`}return`${n}${r}${s}`}function IC(e,t,n){n={parseFragmentIdentifier:!0,[pC]:!1,...n};const{url:r,query:s,fragmentIdentifier:i}=EC(e,n);return TC({url:r,query:uC(s,t),fragmentIdentifier:i},n)}var kC=Object.freeze(Object.defineProperty({__proto__:null,extract:bC,parse:wC,stringify:CC,parseUrl:EC,stringifyUrl:TC,pick:IC,exclude:function(e,t,n){return IC(e,Array.isArray(t)?e=>!t.includes(e):(e,n)=>!t(e,n),n)}},Symbol.toStringTag,{value:"Module"}));const SC={class:"container"},RC=qr("h2",null,"バナー依頼",-1),xC={class:"alert alert-primary"},OC={class:"form-group"},NC={class:"input-group align-items-center mb-3"},PC=qr("h5",{class:"me-3"},"店舗：",-1),AC={class:"btn-group"},DC={class:"me-4"},LC={class:"me-4"},MC={class:"me-4"},UC={class:"input-group align-items-center mb-3"},FC=qr("h5",{class:"me-3"},"担当者：",-1),jC={class:"row mb-3"},qC=qr("div",{class:"col"},[qr("h5",null,"サイズ：")],-1),BC={class:"btn-group flex-column"},VC={class:"me-4"},WC={class:"me-4"},zC={class:"input-group align-items-center"},HC={class:"me-4"},$C=["disabled"],GC={class:"input-group align-items-center mb-3"},KC=qr("h5",{class:"me-3"},"イベント名：",-1),JC={class:"mb-3"},YC=qr("h5",{class:"me-3"},"イベント内容：",-1),QC={class:"mb-3"},XC=qr("h5",{class:"me-3"},"入れたい文言：",-1),ZC={class:"mb-3"},eE=qr("h5",{class:"me-3"},"その他要望：",-1),tE={class:"row mb-3"},nE=qr("div",{class:"col"},[qr("h5",null,"提出期限：")],-1),rE={class:"btn-group flex-column"},sE={class:"me-4"},iE={class:"me-4"},oE={class:"me-4"},aE={class:"me-4"},lE={class:"input-group align-items-center"},cE={class:"me-4"},uE=["disabled"],hE={class:"img_post"},dE=qr("h5",null," 参考画像や使用素材：",-1),pE={class:"pc_area"},fE=["onDrop"],mE={class:"list-unstyled d-flex flex-wrap justify-content-between align-items-center mt-3 p-0"},_E=["onClick"],gE=qr("div",{class:"position-relative"},[qr("span",{class:"position-absolute delete-mark"},"×"),qr("img",{class:"file_icon",src:Hs})],-1),vE={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},yE={class:"z-3 bg-white .text-secondary w-25 h-25 rounded mt-4"},bE={class:"d-flex flex-column p-3"},wE={class:"d-flex justify-content-center items-center"},CE={class:"fs-3 lh-lg"},EE={class:"bg-secondary rounded mt-3",style:{height:"20px"}},TE={class:"w-100 h2",style:{height:"20px"}},IE={class:"mt-4 d-flex justify-content-end items-center"},kE={class:"btn btn-secondary px-4 py-2 fw-bold"},SE=qr("h3",null,"依頼中",-1),RE={class:"table-responsive mb-4"},xE={class:"table table-striped text-nowrap",style:{width:"1296px"}},OE=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"サイズ"),qr("th",{scope:"col"},"イベント名"),qr("th",{scope:"col"},"内容"),qr("th",{scope:"col"},"文言"),qr("th",{scope:"col"},"その他要望"),qr("th",{scope:"col"},"提出期限")])],-1),NE={class:"text-wrap"},PE={class:"text-wrap"},AE={class:"text-wrap"},DE={class:"text-wrap"},LE={class:"text-wrap"},ME={class:"text-wrap"},UE={class:"text-wrap"},FE={class:"text-wrap"},jE={name:"index"};var qE=Object.assign(jE,{setup(e){const t=aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"}),n=np(t),r=Md(n,"banner"),s=it({checked:!1}),i=it({checked:!1}),o=it({manager:"",size:[],otherSize:[],sizes:[],eventName:"",eventDetails:"",wording:"",others:"",deadline:[],otherDeadline:[],deadlines:[],shop:"",num_per_page:5,fire_data:[],completed:"",store:ti(),id:"",isEnter:!1,files:[],successWidth:0,uploadModal:!1,send:"送信完了",sending:!1,send_completed:!0,progressBar:!1,img:"false"}),a=()=>{let e={baseURL:"https://notify-api.line.me",url:"/api/notify",method:"post",headers:{"Content-type":"application/x-www-form-urlencoded",Authorization:"BearerFDic9TvvW5oaLTmnjzUgviTEos08HTZahtXbRVqWnZQ"},data:kC.stringify({message:"test"})};nC.request(e).then((e=>{console.log(e.status)})).catch((e=>{console.log(e)})),o.uploadModal=!0;let r=(new Date).getTime();const s=[],i={contentType:"image/jpeg"},a=Ff(t);o.files.map((async e=>{o.progressBar=!0,o.sending=!0,o.send_completed=!1,o.send="送信中",o.img="true";const t=Uf(a,o.eventName+"/"+e.name);await Df(t,e,i);const n=await Mf(t);if(s.push(n),s.length==o.files.length){console.log("got all paths here now:",s);Df(t,e).on("state_changed",(e=>{let t=e.bytesTransferred/e.totalBytes*100;o.successWidth=t,100==t&&(o.send="送信完了",o.sending=!1,o.send_completed=!0)}))}})),Fd(Md(n,"banner/"+r),{manager:o.manager,sizes:o.size+","+o.otherSize,eventName:o.eventName,eventDetails:o.eventDetails,wording:o.wording,others:o.others,deadlines:o.deadline+" "+o.otherDeadline,shop:o.shop,completed:"false",id:r,img:o.img})},l=cs((function(){return o.files})),c=()=>{o.isEnter=!0},u=()=>{o.isEnter=!1};function h(e){o.files.push(...e.dataTransfer.files),o.isEnter=!1}function d(e){for(let t=0;t<e.target.files.length;t++)o.files.push(e.target.files[t])}const p=()=>{o.uploadModal=!1,location.reload()},f=cs((function(){return o.fire_data.slice(o.num_per_page*o.store.state.page,o.num_per_page*(o.store.state.page+1))})),m=cs({get:()=>o.store.state.page,set:e=>{var t=e>(o.fire_data.length-1)/o.num_per_page?Math.ceil((o.fire_data.length-1)/o.num_per_page)-1:e;t=t<0?0:t,o.store.commit("set_page",t)}}),_=()=>{m.value++},g=()=>{m.value--};return Cn((()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);o.fire_data=t}))})),(e,t)=>(Or(),Dr("section",null,[qr("div",SC,[RC,qr("div",xC,[qr("div",OC,[qr("div",NC,[PC,qr("div",AC,[qr("label",DC,[un(qr("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=e=>o.shop=e),value:"DG"},null,512),[[Ls,o.shop]]),Wr(" DG ")]),qr("label",LC,[un(qr("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=e=>o.shop=e),value:"KPG"},null,512),[[Ls,o.shop]]),Wr(" KPG ")]),qr("label",MC,[un(qr("input",{type:"radio","onUpdate:modelValue":t[2]||(t[2]=e=>o.shop=e),value:"GG"},null,512),[[Ls,o.shop]]),Wr(" GG ")])])]),qr("div",UC,[FC,un(qr("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.manager=e),class:"form-control"},null,512),[[Ps,o.manager]])]),qr("div",jC,[qC,qr("div",BC,[qr("div",null,[qr("label",VC,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>o.size=e),value:"700*400"},null,512),[[As,o.size]]),Wr(" 700 * 400 ")]),qr("label",WC,[un(qr("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=e=>o.size=e),value:"640*640"},null,512),[[As,o.size]]),Wr(" 640 * 640 ")])]),qr("div",zC,[qr("label",HC,[un(qr("input",{type:"checkbox",name:"size","onUpdate:modelValue":t[6]||(t[6]=e=>s.checked=e)},null,512),[[As,s.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>o.otherSize=e),class:"form-control",disabled:!s.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他サイズはこちら"},null,8,$C),[[Ps,o.otherSize]])])])]),qr("div",GC,[KC,un(qr("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>o.eventName=e),class:"form-control"},null,512),[[Ps,o.eventName]])]),qr("div",JC,[YC,un(qr("textarea",{"onUpdate:modelValue":t[9]||(t[9]=e=>o.eventDetails=e),class:"form-control"},null,512),[[Ps,o.eventDetails]])]),qr("div",QC,[XC,un(qr("textarea",{"onUpdate:modelValue":t[10]||(t[10]=e=>o.wording=e),class:"form-control"},null,512),[[Ps,o.wording]])]),qr("div",ZC,[eE,un(qr("textarea",{"onUpdate:modelValue":t[11]||(t[11]=e=>o.others=e),class:"form-control"},null,512),[[Ps,o.others]])]),qr("div",tE,[nE,qr("div",rE,[qr("div",null,[qr("label",sE,[un(qr("input",{type:"radio","onUpdate:modelValue":t[12]||(t[12]=e=>o.deadline=e),name:"deadline",value:"大至急"},null,512),[[Ls,o.deadline]]),Wr(" 大至急 ")]),qr("label",iE,[un(qr("input",{type:"radio","onUpdate:modelValue":t[13]||(t[13]=e=>o.deadline=e),name:"deadline",value:"～３日"},null,512),[[Ls,o.deadline]]),Wr(" ～３日 ")]),qr("label",oE,[un(qr("input",{type:"radio","onUpdate:modelValue":t[14]||(t[14]=e=>o.deadline=e),name:"deadline",value:"～７日"},null,512),[[Ls,o.deadline]]),Wr(" ～７日 ")]),qr("label",aE,[un(qr("input",{type:"radio","onUpdate:modelValue":t[15]||(t[15]=e=>o.deadline=e),name:"deadline",value:"お任せ"},null,512),[[Ls,o.deadline]]),Wr(" お任せ ")]),qr("div",lE,[qr("label",cE,[un(qr("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":t[16]||(t[16]=e=>i.checked=e)},null,512),[[As,i.checked]]),Wr(" その他 ")]),un(qr("input",{"onUpdate:modelValue":t[17]||(t[17]=e=>o.otherDeadline=e),class:"form-control",disabled:!i.checked,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,uE),[[Ps,o.otherDeadline]])])])])]),qr("div",hE,[dE,qr("input",{class:"phone_area",type:"file",onChange:d,multiple:""},null,32)]),qr("div",pE,[qr("div",{class:H(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:o.isEnter}]),onDragenter:c,onDragleave:u,onDragover:t[18]||(t[18]=qs((()=>{}),["prevent"])),onDrop:qs(h,["prevent"])},"ファイルアップロード",42,fE)]),qr("div",null,[qr("ul",mE,[(Or(!0),Dr(Tr,null,Ln(l.value,((e,t)=>(Or(),Dr("li",{key:t,onClick:e=>function(e){o.files.splice(e,1)}(t),class:"cursor d-flex align-items-center flex-column fs-6 m-2"},[gE,qr("span",null,Y(e.name),1)],8,_E)))),128))])]),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:a,class:"btn btn-primary"},"投稿")])])])]),un(qr("div",null,[qr("div",vE,[qr("div",yE,[qr("div",bE,[qr("div",wE,[qr("h2",CE,Y(o.send),1)]),un(qr("div",EE,[qr("div",TE,[qr("div",{class:"bg-primary rounded h-100 block",style:q("width:"+o.successWidth+"%")},null,4)])],512),[[Bs,o.progressBar]]),qr("div",IE,[un(qr("button",kE," 完了 ",512),[[Bs,o.sending]]),un(qr("button",{class:"btn btn-primary px-4 py-2 fw-bold",onClick:p}," 完了 ",512),[[Bs,o.send_completed]])])])])])],512),[[Bs,o.uploadModal]]),SE,qr("div",RE,[qr("table",xE,[OE,qr("tbody",null,[(Or(!0),Dr(Tr,null,Ln(f.value,(e=>(Or(),Dr("tr",null,[qr("td",NE,Y(e.shop),1),qr("td",PE,Y(e.manager),1),qr("td",AE,Y(e.sizes),1),qr("td",DE,Y(e.eventName),1),qr("td",LE,Y(e.eventDetails),1),qr("td",ME,Y(e.wording),1),qr("td",UE,Y(e.others),1),qr("td",FE,Y(e.deadlines),1)])))),256))])])]),qr("div",{class:"text-center mb-5"},[qr("span",{class:"btn btn-secondary me-4",onClick:g},"< prev"),qr("span",{class:"btn btn-secondary ms-4",onClick:_},"next >")])]))}});const BE=qr("h3",null,"バナータスク",-1),VE={class:"table-responsive mb-4"},WE={class:"table table-striped text-nowrap",style:{width:"1296px"}},zE=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"サイズ"),qr("th",{scope:"col"},"イベント名"),qr("th",{scope:"col"},"内容"),qr("th",{scope:"col"},"文言"),qr("th",{scope:"col"},"その他要望"),qr("th",{scope:"col"},"提出期限")])],-1),HE={class:"text-wrap"},$E={class:"text-wrap"},GE={class:"text-wrap"},KE={class:"text-wrap"},JE={class:"text-wrap"},YE={class:"text-wrap"},QE={class:"text-wrap"},XE={class:"text-wrap"},ZE={key:0,class:"btn btn_space btn-secondary pe-none"},eT=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],tT=["onClick"],nT=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],rT=["onClick"],sT=qr("h3",null,"レタッチタスク",-1),iT={class:"table-responsive mb-4"},oT={class:"table table-striped text-nowrap",style:{width:"1296px"}},aT=qr("thead",null,[qr("tr",null,[qr("th",{scope:"col"},"店舗"),qr("th",{scope:"col"},"担当者"),qr("th",{scope:"col"},"キャスト名"),qr("th",{scope:"col"},"修正箇所"),qr("th",{scope:"col"},"顔の処理"),qr("th",{scope:"col"},"提出期限")])],-1),lT={class:"text-wrap"},cT={class:"text-wrap"},uT={class:"text-wrap"},hT={class:"text-wrap"},dT={class:"text-wrap"},pT={class:"text-wrap"},fT={class:"text-end"},mT={key:0,class:"btn btn_space btn-secondary pe-none"},_T=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],gT=["onClick"],vT=[qr("i",{class:"fa-solid fa-download",style:{color:"#ffffff"}},null,-1)],yT=["onClick"],bT={name:"manager-page"};var wT=Object.assign(bT,{setup(e){const t=np(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),n=Md(t,"banner"),r=Md(t,"retouch"),s=it({fire_data:[],completed:""}),i=()=>{qd(Jd(n,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);s.fire_data=t}))},o=cs((function(){return s.fire_data}));async function a(e){const t=Uf(Ff(),e),n=await Lf(t),r=await Promise.all(n.items.map((e=>Mf(e))));for(let e=1;e<r.length+1;e++){const t=r[e-1],s=new XMLHttpRequest;s.responseType="blob",s.open("GET",t),s.send(),s.onload=function(){const t=s.response,r=window.URL.createObjectURL(t),i=document.createElement("a");document.body.appendChild(i),i.href=r,i.download=n.items[e-1].name,i.click()}}}function l(e){Lf(Uf(Ff(),e+"/")).then((e=>{e.items.forEach((e=>{kf(vo(e))}))}))}const c=it({fire_data:[]}),u=()=>{qd(Jd(r,$d("completed"),Kd("false"))).then((e=>{let t=[],n=e.val();for(let e in n)t.unshift(n[e]);c.fire_data=t}))},h=cs((function(){return c.fire_data}));return Cn((()=>{i(),u()})),(e,n)=>(Or(),Dr("section",null,[BE,qr("div",VE,[qr("table",WE,[zE,qr("tbody",null,[(Or(!0),Dr(Tr,null,Ln(o.value,(e=>(Or(),Dr("tr",null,[qr("td",HE,Y(e.shop),1),qr("td",$E,Y(e.manager),1),qr("td",GE,Y(e.sizes),1),qr("td",KE,Y(e.eventName),1),qr("td",JE,Y(e.eventDetails),1),qr("td",YE,Y(e.wording),1),qr("td",QE,Y(e.others),1),qr("td",XE,Y(e.deadlines),1),qr("td",null,["false"==e.img?(Or(),Dr("button",ZE,eT)):zr("",!0),"true"==e.img?(Or(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.eventName)},nT,8,tT)):zr("",!0),qr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,jd(Md(t,"banner/"+r),{completed:"true"}),i(),l(e.eventName)}},"完了",8,rT)])])))),256))])])]),sT,qr("div",iT,[qr("table",oT,[aT,qr("tbody",null,[(Or(!0),Dr(Tr,null,Ln(h.value,(e=>(Or(),Dr("tr",null,[qr("td",lT,Y(e.shop),1),qr("td",cT,Y(e.manager),1),qr("td",uT,Y(e.castName),1),qr("td",hT,Y(e.retouchings),1),qr("td",dT,Y(e.faceRetouching),1),qr("td",pT,Y(e.deadlines),1),qr("td",fT,["false"==e.img?(Or(),Dr("button",mT,_T)):zr("",!0),"true"==e.img?(Or(),Dr("button",{key:1,class:"btn btn_space btn-success",onClick:t=>a(e.castName)},vT,8,gT)):zr("",!0),qr("button",{class:"btn btn-danger ms-3",onClick:n=>{var r;r=e.id,jd(Md(t,"retouch/"+r),{completed:"true"}),u(),l(e.castName)}},"完了",8,yT)])])))),256))])])])]))}});const CT={class:"mx-auto col-sm-6"},ET=qr("h2",null,"ログイン",-1),TT={class:"mb-3"},IT=qr("label",{class:"form-label"},"メールアドレス：",-1),kT={class:"mb-3"},ST=qr("label",{class:"form-label"},"パスワード：",-1);var RT={__name:"Login",setup(e){aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"});const t=it({mailAddress:"",password:""}),n=wb(),r=async()=>{await function(e,t){return vo(e).setPersistence(t)}(n,my).then((()=>cy(n,t.mailAddress,t.password))).catch((e=>{const t=e.code,n=e.message;console.log(t),console.log(n)})),location.reload()};return(e,n)=>(Or(),Dr("div",CT,[ET,qr("form",{onSubmit:n[2]||(n[2]=qs((()=>{}),["prevent"]))},[qr("div",TT,[IT,un(qr("input",{type:"email",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=e=>t.mailAddress=e),autocomplete:"on"},null,512),[[Ps,t.mailAddress]])]),qr("div",kT,[ST,un(qr("input",{type:"password",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=e=>t.password=e),autocomplete:"on"},null,512),[[Ps,t.password]])])],32),qr("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[qr("button",{onClick:r,class:"btn btn-info text-white fw-bold"},"ログイン")])]))}};const xT=new function(e){const t=B_(e.routes,e),n=e.parseQuery||dg,r=e.stringifyQuery||pg,s=e.history,i=bg(),o=bg(),a=bg(),l=bt(k_,!0);let c=k_;Zm&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=t_.bind(null,(e=>""+e)),h=t_.bind(null,ug),d=t_.bind(null,hg);function p(e,i){if(i=e_({},i||l.value),"string"==typeof e){const r=o_(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return e_(r,o,{params:d(o.params),hash:hg(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=e_({},e,{path:o_(n,e.path,i.path).path});else{const t=e_({},e.params);for(const e in t)null==t[e]&&delete t[e];o=e_({},e,{params:h(t)}),i.params=h(i.params)}const a=t.resolve(o,i),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,e_({},e,{hash:(f=c,lg(f).replace(sg,"{").replace(og,"}").replace(ng,"^")),path:a.path}));var f;const m=s.createHref(p);return e_({fullPath:p,hash:c,query:r===pg?fg(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function f(e){return"string"==typeof e?o_(n,e,l.value.path):e_({},e)}function m(e,t){if(c!==e)return O_(8,{from:t,to:e})}function _(e){return v(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),e_({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function v(e,t){const n=c=p(e),s=l.value,i=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return v(e_(f(u),{state:"object"==typeof u?e_({},i,u.state):i,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&l_(t.matched[r],n.matched[s])&&c_(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,s,n)&&(d=O_(16,{to:h,from:s}),N(s,s,!0,!1)),(d?Promise.resolve(d):w(h,s)).catch((e=>N_(e)?N_(e,2)?e:O(e):x(e,h,s))).then((e=>{if(e){if(N_(e,2))return v(e_({replace:a},f(e.to),{state:"object"==typeof e.to?e_({},i,e.to.state):i,force:o}),t||h)}else e=E(h,s,!0,a,i);return C(h,s,e),e}))}function y(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=D.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function w(e,t){let n;const[r,s,a]=function(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>l_(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>l_(e,a)))||s.push(a))}return[n,r,s]}(e,t);n=Cg(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(wg(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),L(n).then((()=>{n=[];for(const r of i.list())n.push(wg(r,e,t));return n.push(l),L(n)})).then((()=>{n=Cg(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(wg(r,e,t))}));return n.push(l),L(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(r_(r.beforeEnter))for(const s of r.beforeEnter)n.push(wg(s,e,t));else n.push(wg(r.beforeEnter,e,t));return n.push(l),L(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Cg(a,"beforeRouteEnter",e,t),n.push(l),L(n)))).then((()=>{n=[];for(const r of o.list())n.push(wg(r,e,t));return n.push(l),L(n)})).catch((e=>N_(e,8)?e:Promise.reject(e)))}function C(e,t,n){a.list().forEach((r=>b((()=>r(e,t,n)))))}function E(e,t,n,r,i){const o=m(e,t);if(o)return o;const a=t===k_,c=Zm?history.state:{};n&&(r||a?s.replace(e.fullPath,e_({scroll:a&&c&&c.scroll},i)):s.push(e.fullPath,i)),l.value=e,N(e,t,n,a),O()}let T;function I(){T||(T=s.listen(((e,t,n)=>{const r=p(e),i=g(r);if(i)return void v(e_(i,{replace:!0}),r).catch(n_);c=r;const o=l.value;var a,u;Zm&&(a=b_(o.fullPath,n.delta),u=v_(),w_.set(a,u)),w(r,o).catch((e=>N_(e,12)?e:N_(e,2)?(v(e.to,r).then((e=>{N_(e,20)&&!n.delta&&n.type===d_.pop&&s.go(-1,!1)})).catch(n_),Promise.reject()):(n.delta&&s.go(-n.delta,!1),x(e,r,o)))).then((e=>{(e=e||E(r,o,!1))&&(n.delta&&!N_(e,8)?s.go(-n.delta,!1):n.type===d_.pop&&N_(e,20)&&s.go(-1,!1)),C(r,o,e)})).catch(n_)})))}let k,S=bg(),R=bg();function x(e,t,n){O(e);const r=R.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function O(e){return k||(k=!e,I(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset()),e}function N(t,n,r,s){const{scrollBehavior:i}=e;if(!Zm||!i)return Promise.resolve();const o=!r&&function(e){const t=w_.get(e);return w_.delete(e),t}(b_(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Ft().then((()=>i(t,n,o))).then((e=>e&&y_(e))).catch((e=>x(e,t,n)))}const P=e=>s.go(e);let A;const D=new Set;function L(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return{currentRoute:l,listening:!0,addRoute:function(e,n){let r,s;return I_(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:_,replace:function(e){return _(e_(f(e),{replace:!0}))},go:P,back:()=>P(-1),forward:()=>P(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:R.add,isReady:function(){return k&&l.value!==k_?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",Ig),e.component("RouterView",Og),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Ct(l)}),Zm&&!A&&l.value===k_&&(A=!0,_(s.location).catch((e=>{})));const t={};for(const e in k_)Object.defineProperty(t,e,{get:()=>l.value[e],enumerable:!0});e.provide(gg,this),e.provide(vg,ot(t)),e.provide(yg,l);const n=e.unmount;D.add(e),e.unmount=function(){D.delete(e),D.size<1&&(c=k_,T&&T(),T=null,l.value=k_,A=!1,k=!1),n()}}}}({history:function(e){const t=function(e){const{history:t,location:n}=window,r={value:E_(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:C_()+e+r;try{t[o?"replaceState":"pushState"](i,"",l),s.value=i}catch(e){console.error(e),n[o?"replace":"assign"](l)}}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:function(e,n){const o=e_({},s.value,t.state,{forward:e,scroll:v_()});i(o.current,o,!0),i(e,e_({},T_(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){i(e,e_({},t.state,T_(s.value.back,e,s.value.forward,!0),n,{position:s.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(Zm){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),i_(e)}(e)),n=function(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=E_(e,location),l=n.value,c=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===l)return void(o=null);u=c?i.position-c.position:0}else r(a);s.forEach((e=>{e(n.value,l,{delta:u,type:d_.pop,direction:u?u>0?f_.forward:f_.back:f_.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(e_({},e.state,{scroll:v_()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace),r=e_({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:g_.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:[{path:"/",name:"index",component:qE,meta:{requiresAuth:!0}},{path:"/retouch",name:"retouch",component:Jm,meta:{requiresAuth:!0}},{path:"/manager-page",name:"manager-page",component:wT,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:RT,meta:{requiresAuth:!1}}]});wb(aa({apiKey:"AIzaSyClRCzHKuN0GAGN0qNn3jsj6pJL7qCREZo",authDomain:"nicoro-request-form.firebaseapp.com",databaseURL:"https://nicoro-request-form-default-rtdb.firebaseio.com",projectId:"nicoro-request-form",storageBucket:"nicoro-request-form.appspot.com",messagingSenderId:"771124177365",appId:"1:771124177365:web:d19a5c49a3a5750bb4b55c"})),xT.beforeEach((async(e,t)=>{const n=e.matched.some((e=>e.meta.requiresAuth)),r=new Promise((e=>{const t=wb().onAuthStateChanged((n=>{t(),e(!!n)}))}));return n&&!await r?"/login":"login"==e.name&&await r?"/":void 0}));var OT=((...e)=>{const t=(zs||(zs=wr(Ws))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(g(e)){return document.querySelector(e)}return e}(e);if(!r)return;const s=t._component;_(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t})(Ym);OT.use(Xm),OT.use(xT),OT.mount("#app");
