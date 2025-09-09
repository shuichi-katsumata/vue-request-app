(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},Cs=[],jt=()=>{},ld=()=>!1,mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),El=t=>t.startsWith("onUpdate:"),ut=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fm=Object.prototype.hasOwnProperty,xe=(t,e)=>fm.call(t,e),fe=Array.isArray,Is=t=>Ki(t)==="[object Map]",go=t=>Ki(t)==="[object Set]",Gc=t=>Ki(t)==="[object Date]",me=t=>typeof t=="function",Ke=t=>typeof t=="string",Kt=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",cd=t=>(Be(t)||me(t))&&me(t.then)&&me(t.catch),ud=Object.prototype.toString,Ki=t=>ud.call(t),pm=t=>Ki(t).slice(8,-1),hd=t=>Ki(t)==="[object Object]",Il=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_m=/-\w/g,Rt=vo(t=>t.replace(_m,e=>e.slice(1).toUpperCase())),mm=/\B([A-Z])/g,cs=vo(t=>t.replace(mm,"-$1").toLowerCase()),yo=vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jo=vo(t=>t?`on${yo(t)}`:""),An=(t,e)=>!Object.is(t,e),wr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dd=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Pa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kc;const bo=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wo(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ke(s)?bm(s):wo(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ke(t)||Be(t))return t}const gm=/;(?![^(]*\))/g,vm=/:([^]+)/,ym=/\/\*[^]*?\*\//g;function bm(t){const e={};return t.replace(ym,"").split(gm).forEach(n=>{if(n){const s=n.split(vm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function At(t){let e="";if(Ke(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const s=At(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Em=wl(wm);function fd(t){return!!t||t===""}function Cm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Os(t[s],e[s]);return n}function Os(t,e){if(t===e)return!0;let n=Gc(t),s=Gc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Kt(t),s=Kt(e),n||s)return t===e;if(n=fe(t),s=fe(e),n||s)return n&&s?Cm(t,e):!1;if(n=Be(t),s=Be(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Os(t[o],e[o]))return!1}}return String(t)===String(e)}function pd(t,e){return t.findIndex(n=>Os(n,e))}const _d=t=>!!(t&&t.__v_isRef===!0),be=t=>Ke(t)?t:t==null?"":fe(t)||Be(t)&&(t.toString===ud||!me(t.toString))?_d(t)?be(t.value):JSON.stringify(t,md,2):String(t),md=(t,e)=>_d(e)?md(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ea(s,r)+" =>"]=i,n),{})}:go(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ea(n))}:Kt(e)?ea(e):Be(e)&&!fe(e)&&!hd(e)?String(e):e,ea=(t,e="")=>{var n;return Kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let at;class gd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){++this._on===1&&(this.prevScope=at,at=this)}off(){this._on>0&&--this._on===0&&(at=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function vd(t){return new gd(t)}function yd(){return at}function Im(t,e=!1){at&&at.cleanups.push(t)}let Le;const ta=new WeakSet;class bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,at&&at.active&&at.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ta.has(this)&&(ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ed(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yc(this),Cd(this);const e=Le,n=Pt;Le=this,Pt=!0;try{return this.fn()}finally{Id(this),Le=e,Pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)kl(e);this.deps=this.depsTail=void 0,Yc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Na(this)&&this.run()}get dirty(){return Na(this)}}let wd=0,pi,_i;function Ed(t,e=!1){if(t.flags|=8,e){t.next=_i,_i=t;return}t.next=pi,pi=t}function Sl(){wd++}function Tl(){if(--wd>0)return;if(_i){let e=_i;for(_i=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Id(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),kl(s),Sm(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Na(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai)||(t.globalVersion=Ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Na(t))))return;t.flags|=2;const e=t.dep,n=Le,s=Pt;Le=t,Pt=!0;try{Cd(t);const i=t.fn(t._value);(e.version===0||An(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Le=n,Pt=s,Id(t),t.flags&=-3}}function kl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)kl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pt=!0;const Td=[];function cn(){Td.push(Pt),Pt=!1}function un(){const t=Td.pop();Pt=t===void 0?!0:t}function Yc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Ai=0;class Tm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Pt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Tm(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,kd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=s)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){Sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tl()}}}function kd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)kd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nr=new WeakMap,Zn=Symbol(""),Da=Symbol(""),Oi=Symbol("");function lt(t,e,n){if(Pt&&Le){let s=Nr.get(t);s||Nr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Rl),i.map=s,i.key=n),i.track()}}function en(t,e,n,s,i,r){const o=Nr.get(t);if(!o){Ai++;return}const a=l=>{l&&l.trigger()};if(Sl(),e==="clear")o.forEach(a);else{const l=fe(t),c=l&&Il(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===Oi||!Kt(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Oi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Zn)),Is(t)&&a(o.get(Da)));break;case"delete":l||(a(o.get(Zn)),Is(t)&&a(o.get(Da)));break;case"set":Is(t)&&a(o.get(Zn));break}}Tl()}function km(t,e){const n=Nr.get(t);return n&&n.get(e)}function _s(t){const e=Te(t);return e===t?e:(lt(e,"iterate",Oi),kt(t)?e:e.map(nt))}function Eo(t){return lt(t=Te(t),"iterate",Oi),t}const Rm={__proto__:null,[Symbol.iterator](){return na(this,Symbol.iterator,nt)},concat(...t){return _s(this).concat(...t.map(e=>fe(e)?_s(e):e))},entries(){return na(this,"entries",t=>(t[1]=nt(t[1]),t))},every(t,e){return Xt(this,"every",t,e,void 0,arguments)},filter(t,e){return Xt(this,"filter",t,e,n=>n.map(nt),arguments)},find(t,e){return Xt(this,"find",t,e,nt,arguments)},findIndex(t,e){return Xt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xt(this,"findLast",t,e,nt,arguments)},findLastIndex(t,e){return Xt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xt(this,"forEach",t,e,void 0,arguments)},includes(...t){return sa(this,"includes",t)},indexOf(...t){return sa(this,"indexOf",t)},join(t){return _s(this).join(t)},lastIndexOf(...t){return sa(this,"lastIndexOf",t)},map(t,e){return Xt(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return Zc(this,"reduce",t,e)},reduceRight(t,...e){return Zc(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return Xt(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return _s(this).toReversed()},toSorted(t){return _s(this).toSorted(t)},toSpliced(...t){return _s(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return na(this,"values",nt)}};function na(t,e,n){const s=Eo(t),i=s[e]();return s!==t&&!kt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const xm=Array.prototype;function Xt(t,e,n,s,i,r){const o=Eo(t),a=o!==t&&!kt(t),l=o[e];if(l!==xm[e]){const h=l.apply(t,r);return a?nt(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,nt(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Zc(t,e,n,s){const i=Eo(t);let r=n;return i!==t&&(kt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,nt(a),l,t)}),i[e](r,...s)}function sa(t,e,n){const s=Te(t);lt(s,"iterate",Oi);const i=s[e](...n);return(i===-1||i===!1)&&Ol(n[0])?(n[0]=Te(n[0]),s[e](...n)):i}function ti(t,e,n=[]){cn(),Sl();const s=Te(t)[e].apply(t,n);return Tl(),un(),s}const Am=wl("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kt));function Om(t){Kt(t)||(t=String(t));const e=Te(this);return lt(e,"has",t),e.hasOwnProperty(t)}class xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?zm:Nd:r?Pd:Od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=fe(e);if(!i){let l;if(o&&(l=Rm[n]))return l;if(n==="hasOwnProperty")return Om}const a=Reflect.get(e,n,Ve(e)?e:s);return(Kt(n)?Rd.has(n):Am(n))||(i||lt(e,"get",n),r)?a:Ve(a)?o&&Il(n)?a:a.value:Be(a)?i?Md(a):us(a):a}}class Ad extends xd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Ln(r);if(!kt(s)&&!Ln(s)&&(r=Te(r),s=Te(s)),!fe(e)&&Ve(r)&&!Ve(s))return l||(r.value=s),!0}const o=fe(e)&&Il(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,s,Ve(e)?e:i);return e===Te(i)&&(o?An(s,r)&&en(e,"set",n,s):en(e,"add",n,s)),a}deleteProperty(e,n){const s=xe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&en(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Kt(n)||!Rd.has(n))&&lt(e,"has",n),s}ownKeys(e){return lt(e,"iterate",fe(e)?"length":Zn),Reflect.ownKeys(e)}}class Pm extends xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nm=new Ad,Dm=new Pm,Mm=new Ad(!0);const Ma=t=>t,dr=t=>Reflect.getPrototypeOf(t);function Lm(t,e,n){return function(...s){const i=this.__v_raw,r=Te(i),o=Is(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ma:e?Dr:nt;return!e&&lt(r,"iterate",l?Da:Zn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Um(t,e){const n={get(i){const r=this.__v_raw,o=Te(r),a=Te(i);t||(An(i,a)&&lt(o,"get",i),lt(o,"get",a));const{has:l}=dr(o),c=e?Ma:t?Dr:nt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&lt(Te(i),"iterate",Zn),i.size},has(i){const r=this.__v_raw,o=Te(r),a=Te(i);return t||(An(i,a)&&lt(o,"has",i),lt(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=Te(a),c=e?Ma:t?Dr:nt;return!t&&lt(l,"iterate",Zn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return ut(n,t?{add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear")}:{add(i){!e&&!kt(i)&&!Ln(i)&&(i=Te(i));const r=Te(this);return dr(r).has.call(r,i)||(r.add(i),en(r,"add",i,i)),this},set(i,r){!e&&!kt(r)&&!Ln(r)&&(r=Te(r));const o=Te(this),{has:a,get:l}=dr(o);let c=a.call(o,i);c||(i=Te(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?An(r,u)&&en(o,"set",i,r):en(o,"add",i,r),this},delete(i){const r=Te(this),{has:o,get:a}=dr(r);let l=o.call(r,i);l||(i=Te(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&en(r,"delete",i,void 0),c},clear(){const i=Te(this),r=i.size!==0,o=i.clear();return r&&en(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Lm(i,t,e)}),n}function xl(t,e){const n=Um(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(xe(n,i)&&i in s?n:s,i,r)}const Fm={get:xl(!1,!1)},Bm={get:xl(!1,!0)},$m={get:xl(!0,!1)};const Od=new WeakMap,Pd=new WeakMap,Nd=new WeakMap,zm=new WeakMap;function jm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:jm(pm(t))}function us(t){return Ln(t)?t:Al(t,!1,Nm,Fm,Od)}function Dd(t){return Al(t,!1,Mm,Bm,Pd)}function Md(t){return Al(t,!0,Dm,$m,Nd)}function Al(t,e,n,s,i){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Wm(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function On(t){return Ln(t)?On(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function Ol(t){return t?!!t.__v_raw:!1}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function Pl(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&dd(t,"__v_skip",!0),t}const nt=t=>Be(t)?us(t):t,Dr=t=>Be(t)?Md(t):t;function Ve(t){return t?t.__v_isRef===!0:!1}function ye(t){return Ld(t,!1)}function Hm(t){return Ld(t,!0)}function Ld(t,e){return Ve(t)?t:new Vm(t,e)}class Vm{constructor(e,n){this.dep=new Rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Te(e),this._value=n?e:nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||kt(e)||Ln(e);e=s?e:Te(e),An(e,n)&&(this._rawValue=e,this._value=s?e:nt(e),this.dep.trigger())}}function W(t){return Ve(t)?t.value:t}const qm={get:(t,e,n)=>e==="__v_raw"?t:W(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ud(t){return On(t)?t:new Proxy(t,qm)}function Gm(t){const e=fe(t)?new Array(t.length):{};for(const n in t)e[n]=Ym(t,n);return e}class Km{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return km(Te(this._object),this._key)}}function Ym(t,e,n){const s=t[e];return Ve(s)?s:new Km(t,e,n)}class Zm{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return Ed(this,!0),!0}get value(){const e=this.dep.track();return Sd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xm(t,e,n=!1){let s,i;return me(t)?s=t:(s=t.get,i=t.set),new Zm(s,i,n)}const pr={},Mr=new WeakMap;let qn;function Qm(t,e=!1,n=qn){if(n){let s=Mr.get(n);s||Mr.set(n,s=[]),s.push(t)}}function Jm(t,e,n=Me){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=k=>i?k:kt(k)||i===!1||i===0?tn(k,1):tn(k);let u,h,f,p,g=!1,m=!1;if(Ve(t)?(h=()=>t.value,g=kt(t)):On(t)?(h=()=>c(t),g=!0):fe(t)?(m=!0,g=t.some(k=>On(k)||kt(k)),h=()=>t.map(k=>{if(Ve(k))return k.value;if(On(k))return c(k);if(me(k))return l?l(k,2):k()})):me(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){cn();try{f()}finally{un()}}const k=qn;qn=u;try{return l?l(t,3,[p]):t(p)}finally{qn=k}}:h=jt,e&&i){const k=h,A=i===!0?1/0:i;h=()=>tn(k(),A)}const b=yd(),v=()=>{u.stop(),b&&b.active&&Cl(b.effects,u)};if(r&&e){const k=e;e=(...A)=>{k(...A),v()}}let E=m?new Array(t.length).fill(pr):pr;const I=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const A=u.run();if(i||g||(m?A.some((H,j)=>An(H,E[j])):An(A,E))){f&&f();const H=qn;qn=u;try{const j=[A,E===pr?void 0:m&&E[0]===pr?[]:E,p];E=A,l?l(e,3,j):e(...j)}finally{qn=H}}}else u.run()};return a&&a(I),u=new bd(h),u.scheduler=o?()=>o(I,!1):I,p=k=>Qm(k,!1,u),f=u.onStop=()=>{const k=Mr.get(u);if(k){if(l)l(k,4);else for(const A of k)A();Mr.delete(u)}},e?s?I(!0):E=u.run():o?o(I.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function tn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ve(t))tn(t.value,e,n);else if(fe(t))for(let s=0;s<t.length;s++)tn(t[s],e,n);else if(go(t)||Is(t))t.forEach(s=>{tn(s,e,n)});else if(hd(t)){for(const s in t)tn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&tn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yi(t,e,n,s){try{return s?t(...s):t()}catch(i){Co(i,e,n)}}function Yt(t,e,n,s){if(me(t)){const i=Yi(t,e,n,s);return i&&cd(i)&&i.catch(r=>{Co(r,e,n)}),i}if(fe(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Yt(t[r],e,n,s));return i}}function Co(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){cn(),Yi(r,null,10,[t,l,c]),un();return}}eg(t,n,i,s,o)}function eg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const pt=[];let Ft=-1;const Ss=[];let vn=null,ys=0;const Fd=Promise.resolve();let Lr=null;function Nl(t){const e=Lr||Fd;return t?e.then(this?t.bind(this):t):e}function tg(t){let e=Ft+1,n=pt.length;for(;e<n;){const s=e+n>>>1,i=pt[s],r=Pi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Dl(t){if(!(t.flags&1)){const e=Pi(t),n=pt[pt.length-1];!n||!(t.flags&2)&&e>=Pi(n)?pt.push(t):pt.splice(tg(e),0,t),t.flags|=1,Bd()}}function Bd(){Lr||(Lr=Fd.then(zd))}function ng(t){fe(t)?Ss.push(...t):vn&&t.id===-1?vn.splice(ys+1,0,t):t.flags&1||(Ss.push(t),t.flags|=1),Bd()}function Xc(t,e,n=Ft+1){for(;n<pt.length;n++){const s=pt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;pt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $d(t){if(Ss.length){const e=[...new Set(Ss)].sort((n,s)=>Pi(n)-Pi(s));if(Ss.length=0,vn){vn.push(...e);return}for(vn=e,ys=0;ys<vn.length;ys++){const n=vn[ys];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,ys=0}}const Pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function zd(t){try{for(Ft=0;Ft<pt.length;Ft++){const e=pt[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<pt.length;Ft++){const e=pt[Ft];e&&(e.flags&=-2)}Ft=-1,pt.length=0,$d(),Lr=null,(pt.length||Ss.length)&&zd()}}let Ct=null,jd=null;function Ur(t){const e=Ct;return Ct=t,jd=t&&t.type.__scopeId||null,e}function Er(t,e=Ct,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&$r(-1);const r=Ur(e);let o;try{o=t(...i)}finally{Ur(r),s._d&&$r(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ge(t,e){if(Ct===null)return t;const n=ko(Ct),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Me]=e[i];r&&(me(r)&&(r={mounted:r,updated:r}),r.deep&&tn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Hn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(cn(),Yt(l,n,8,[t.el,a,t,e]),un())}}const sg=Symbol("_vte"),ig=t=>t.__isTeleport,rg=Symbol("_leaveCb");function Ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wd(t,e){return me(t)?ut({name:t.name},e,{setup:t}):t}function Hd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Fr=new WeakMap;function mi(t,e,n,s,i=!1){if(fe(t)){t.forEach((g,m)=>mi(g,e&&(fe(e)?e[m]:e),n,s,i));return}if(gi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mi(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?ko(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Me?a.refs={}:a.refs,h=a.setupState,f=Te(h),p=h===Me?ld:g=>xe(f,g);if(c!=null&&c!==l){if(Qc(e),Ke(c))u[c]=null,p(c)&&(h[c]=null);else if(Ve(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(me(l))Yi(l,a,12,[o,u]);else{const g=Ke(l),m=Ve(l);if(g||m){const b=()=>{if(t.f){const v=g?p(l)?h[l]:u[l]:l.value;if(i)fe(v)&&Cl(v,r);else if(fe(v))v.includes(r)||v.push(r);else if(g)u[l]=[r],p(l)&&(h[l]=u[l]);else{const E=[r];l.value=E,t.k&&(u[t.k]=E)}}else g?(u[l]=o,p(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const v=()=>{b(),Fr.delete(t)};v.id=-1,Fr.set(t,v),Et(v,n)}else Qc(t),b()}}}function Qc(t){const e=Fr.get(t);e&&(e.flags|=8,Fr.delete(t))}bo().requestIdleCallback;bo().cancelIdleCallback;const gi=t=>!!t.type.__asyncLoader,Vd=t=>t.type.__isKeepAlive;function og(t,e){qd(t,"a",e)}function ag(t,e){qd(t,"da",e)}function qd(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Io(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Vd(i.parent.vnode)&&lg(s,e,n,i),i=i.parent}}function lg(t,e,n,s){const i=Io(e,t,s,!0);Kd(()=>{Cl(s[e],i)},n)}function Io(t,e,n=ct,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{cn();const a=Zi(n),l=Yt(e,n,t,o);return a(),un(),l});return s?i.unshift(r):i.push(r),r}}const fn=t=>(e,n=ct)=>{(!Di||t==="sp")&&Io(t,(...s)=>e(...s),n)},cg=fn("bm"),Gd=fn("m"),ug=fn("bu"),hg=fn("u"),dg=fn("bum"),Kd=fn("um"),fg=fn("sp"),pg=fn("rtg"),_g=fn("rtc");function mg(t,e=ct){Io("ec",t,e)}const gg="components";function Jc(t,e){return yg(gg,t,!0,e)||t}const vg=Symbol.for("v-ndc");function yg(t,e,n=!0,s=!1){const i=Ct||ct;if(i){const r=i.type;{const a=lv(r,!1);if(a&&(a===e||a===Rt(e)||a===yo(Rt(e))))return r}const o=eu(i[t]||r[t],e)||eu(i.appContext[t],e);return!o&&s?r:o}}function eu(t,e){return t&&(t[e]||t[Rt(e)]||t[yo(Rt(e))])}function Pn(t,e,n,s){let i;const r=n,o=fe(t);if(o||Ke(t)){const a=o&&On(t);let l=!1,c=!1;a&&(l=!kt(t),c=Ln(t),t=Eo(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(l?c?Dr(nt(t[u])):nt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Be(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const La=t=>t?mf(t)?ko(t):La(t.parent):null,vi=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>La(t.parent),$root:t=>La(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Zd(t),$forceUpdate:t=>t.f||(t.f=()=>{Dl(t.update)}),$nextTick:t=>t.n||(t.n=Nl.bind(t.proxy)),$watch:t=>zg.bind(t)}),ia=(t,e)=>t!==Me&&!t.__isScriptSetup&&xe(t,e),bg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ia(s,e))return o[e]=1,s[e];if(i!==Me&&xe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&xe(c,e))return o[e]=3,r[e];if(n!==Me&&xe(n,e))return o[e]=4,n[e];Ua&&(o[e]=0)}}const u=vi[e];let h,f;if(u)return e==="$attrs"&&lt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Me&&xe(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,xe(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ia(i,e)?(i[e]=n,!0):s!==Me&&xe(s,e)?(s[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r,type:o}},a){let l,c;return!!(n[a]||t!==Me&&a[0]!=="$"&&xe(t,a)||ia(e,a)||(l=r[0])&&xe(l,a)||xe(s,a)||xe(vi,a)||xe(i.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tu(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ua=!0;function wg(t){const e=Zd(t),n=t.proxy,s=t.ctx;Ua=!1,e.beforeCreate&&nu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:m,deactivated:b,beforeDestroy:v,beforeUnmount:E,destroyed:I,unmounted:k,render:A,renderTracked:H,renderTriggered:j,errorCaptured:V,serverPrefetch:B,expose:Z,inheritAttrs:se,components:P,directives:Y,filters:_}=e;if(c&&Eg(c,s,null),o)for(const D in o){const K=o[D];me(K)&&(s[D]=K.bind(n))}if(i){const D=i.call(n,n);Be(D)&&(t.data=us(D))}if(Ua=!0,r)for(const D in r){const K=r[D],G=me(K)?K.bind(n,n):me(K.get)?K.get.bind(n,n):jt,ne=!me(K)&&me(K.set)?K.set.bind(n):jt,$=St({get:G,set:ne});Object.defineProperty(s,D,{enumerable:!0,configurable:!0,get:()=>$.value,set:F=>$.value=F})}if(a)for(const D in a)Yd(a[D],s,n,D);if(l){const D=me(l)?l.call(n):l;Reflect.ownKeys(D).forEach(K=>{Cr(K,D[K])})}u&&nu(u,t,"c");function q(D,K){fe(K)?K.forEach(G=>D(G.bind(n))):K&&D(K.bind(n))}if(q(cg,h),q(Gd,f),q(ug,p),q(hg,g),q(og,m),q(ag,b),q(mg,V),q(_g,H),q(pg,j),q(dg,E),q(Kd,k),q(fg,B),fe(Z))if(Z.length){const D=t.exposed||(t.exposed={});Z.forEach(K=>{Object.defineProperty(D,K,{get:()=>n[K],set:G=>n[K]=G,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===jt&&(t.render=A),se!=null&&(t.inheritAttrs=se),P&&(t.components=P),Y&&(t.directives=Y),B&&Hd(t)}function Eg(t,e,n=jt){fe(t)&&(t=Fa(t));for(const s in t){const i=t[s];let r;Be(i)?"default"in i?r=Wt(i.from||s,i.default,!0):r=Wt(i.from||s):r=Wt(i),Ve(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function nu(t,e,n){Yt(fe(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yd(t,e,n,s){let i=s.includes(".")?uf(n,s):()=>n[s];if(Ke(t)){const r=e[t];me(r)&&Qn(i,r)}else if(me(t))Qn(i,t.bind(n));else if(Be(t))if(fe(t))t.forEach(r=>Yd(r,e,n,s));else{const r=me(t.handler)?t.handler.bind(n):e[t.handler];me(r)&&Qn(i,r,t)}}function Zd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Br(l,c,o,!0)),Br(l,e,o)),Be(e)&&r.set(e,l),l}function Br(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Br(t,r,n,!0),i&&i.forEach(o=>Br(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Cg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cg={data:su,props:iu,emits:iu,methods:ui,computed:ui,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:ui,directives:ui,watch:Sg,provide:su,inject:Ig};function su(t,e){return e?t?function(){return ut(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function Ig(t,e){return ui(Fa(t),Fa(e))}function Fa(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?ut(Object.create(null),t,e):e}function iu(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ut(Object.create(null),tu(t),tu(e??{})):e}function Sg(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const s in e)n[s]=ft(t[s],e[s]);return n}function Xd(){return{app:null,config:{isNativeTag:ld,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tg=0;function kg(t,e){return function(s,i=null){me(s)||(s=ut({},s)),i!=null&&!Be(i)&&(i=null);const r=Xd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Tg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:uv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&me(u.install)?(o.add(u),u.install(c,...h)):me(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||it(s,i);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,ko(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Xn;Xn=c;try{return u()}finally{Xn=h}}};return c}}let Xn=null;function Cr(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function Wt(t,e,n=!1){const s=_f();if(s||Xn){let i=Xn?Xn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&me(e)?e.call(s&&s.proxy):e}}function Rg(){return!!(_f()||Xn)}const Qd={},Jd=()=>Object.create(Qd),ef=t=>Object.getPrototypeOf(t)===Qd;function xg(t,e,n,s=!1){const i={},r=Jd();t.propsDefaults=Object.create(null),tf(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Dd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ag(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(So(t.emitsOptions,f))continue;const p=e[f];if(l)if(xe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const g=Rt(f);i[g]=Ba(l,a,g,p,t,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{tf(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!xe(e,h)&&((u=cs(h))===h||!xe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ba(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!xe(e,h))&&(delete r[h],c=!0)}c&&en(t.attrs,"set","")}function tf(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fi(l))continue;const c=e[l];let u;i&&xe(i,u=Rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:So(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Te(n),c=a||Me;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ba(i,l,h,c[h],t,!xe(c,h))}}return o}function Ba(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Zi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===cs(n))&&(s=!0))}return s}const Og=new WeakMap;function nf(t,e,n=!1){const s=n?Og:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!me(t)){const u=h=>{l=!0;const[f,p]=nf(h,e,!0);ut(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Be(t)&&s.set(t,Cs),Cs;if(fe(r))for(let u=0;u<r.length;u++){const h=Rt(r[u]);ru(h)&&(o[h]=Me)}else if(r)for(const u in r){const h=Rt(u);if(ru(h)){const f=r[u],p=o[h]=fe(f)||me(f)?{type:f}:ut({},f),g=p.type;let m=!1,b=!0;if(fe(g))for(let v=0;v<g.length;++v){const E=g[v],I=me(E)&&E.name;if(I==="Boolean"){m=!0;break}else I==="String"&&(b=!1)}else m=me(g)&&g.name==="Boolean";p[0]=m,p[1]=b,(m||xe(p,"default"))&&a.push(h)}}const c=[o,a];return Be(t)&&s.set(t,c),c}function ru(t){return t[0]!=="$"&&!fi(t)}const Ll=t=>t==="_"||t==="_ctx"||t==="$stable",Ul=t=>fe(t)?t.map(Bt):[Bt(t)],Pg=(t,e,n)=>{if(e._n)return e;const s=Er((...i)=>Ul(e(...i)),n);return s._c=!1,s},sf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ll(i))continue;const r=t[i];if(me(r))e[i]=Pg(i,r,s);else if(r!=null){const o=Ul(r);e[i]=()=>o}}},rf=(t,e)=>{const n=Ul(e);t.slots.default=()=>n},of=(t,e,n)=>{for(const s in e)(n||!Ll(s))&&(t[s]=e[s])},Ng=(t,e,n)=>{const s=t.slots=Jd();if(t.vnode.shapeFlag&32){const i=e._;i?(of(s,e,n),n&&dd(s,"_",i,!0)):sf(e,s)}else e&&rf(t,e)},Dg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Me;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:of(i,e,n):(r=!e.$stable,sf(e,i)),o=e}else e&&(rf(t,e),o={default:1});if(r)for(const a in i)!Ll(a)&&o[a]==null&&delete i[a]},Et=Yg;function Mg(t){return Lg(t)}function Lg(t,e){const n=bo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=jt,insertStaticContent:g}=t,m=(S,x,d,O=null,R=null,y=null,w=void 0,T=null,L=!!x.dynamicChildren)=>{if(S===x)return;S&&!ni(S,x)&&(O=X(S),F(S,R,y,!0),S=null),x.patchFlag===-2&&(L=!1,x.dynamicChildren=null);const{type:M,ref:N,shapeFlag:z}=x;switch(M){case To:b(S,x,d,O);break;case Un:v(S,x,d,O);break;case oa:S==null&&E(x,d,O,w);break;case Qe:P(S,x,d,O,R,y,w,T,L);break;default:z&1?A(S,x,d,O,R,y,w,T,L):z&6?Y(S,x,d,O,R,y,w,T,L):(z&64||z&128)&&M.process(S,x,d,O,R,y,w,T,L,re)}N!=null&&R?mi(N,S&&S.ref,y,x||S,!x):N==null&&S&&S.ref!=null&&mi(S.ref,null,y,S,!0)},b=(S,x,d,O)=>{if(S==null)s(x.el=a(x.children),d,O);else{const R=x.el=S.el;x.children!==S.children&&c(R,x.children)}},v=(S,x,d,O)=>{S==null?s(x.el=l(x.children||""),d,O):x.el=S.el},E=(S,x,d,O)=>{[S.el,S.anchor]=g(S.children,x,d,O,S.el,S.anchor)},I=({el:S,anchor:x},d,O)=>{let R;for(;S&&S!==x;)R=f(S),s(S,d,O),S=R;s(x,d,O)},k=({el:S,anchor:x})=>{let d;for(;S&&S!==x;)d=f(S),i(S),S=d;i(x)},A=(S,x,d,O,R,y,w,T,L)=>{x.type==="svg"?w="svg":x.type==="math"&&(w="mathml"),S==null?H(x,d,O,R,y,w,T,L):B(S,x,R,y,w,T,L)},H=(S,x,d,O,R,y,w,T)=>{let L,M;const{props:N,shapeFlag:z,transition:J,dirs:Q}=S;if(L=S.el=o(S.type,y,N&&N.is,N),z&8?u(L,S.children):z&16&&V(S.children,L,null,O,R,ra(S,y),w,T),Q&&Hn(S,null,O,"created"),j(L,S,S.scopeId,w,O),N){for(const de in N)de!=="value"&&!fi(de)&&r(L,de,null,N[de],y,O);"value"in N&&r(L,"value",null,N.value,y),(M=N.onVnodeBeforeMount)&&Ut(M,O,S)}Q&&Hn(S,null,O,"beforeMount");const ae=Ug(R,J);ae&&J.beforeEnter(L),s(L,x,d),((M=N&&N.onVnodeMounted)||ae||Q)&&Et(()=>{M&&Ut(M,O,S),ae&&J.enter(L),Q&&Hn(S,null,O,"mounted")},R)},j=(S,x,d,O,R)=>{if(d&&p(S,d),O)for(let y=0;y<O.length;y++)p(S,O[y]);if(R){let y=R.subTree;if(x===y||df(y.type)&&(y.ssContent===x||y.ssFallback===x)){const w=R.vnode;j(S,w,w.scopeId,w.slotScopeIds,R.parent)}}},V=(S,x,d,O,R,y,w,T,L=0)=>{for(let M=L;M<S.length;M++){const N=S[M]=T?yn(S[M]):Bt(S[M]);m(null,N,x,d,O,R,y,w,T)}},B=(S,x,d,O,R,y,w)=>{const T=x.el=S.el;let{patchFlag:L,dynamicChildren:M,dirs:N}=x;L|=S.patchFlag&16;const z=S.props||Me,J=x.props||Me;let Q;if(d&&Vn(d,!1),(Q=J.onVnodeBeforeUpdate)&&Ut(Q,d,x,S),N&&Hn(x,S,d,"beforeUpdate"),d&&Vn(d,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&u(T,""),M?Z(S.dynamicChildren,M,T,d,O,ra(x,R),y):w||K(S,x,T,null,d,O,ra(x,R),y,!1),L>0){if(L&16)se(T,z,J,d,R);else if(L&2&&z.class!==J.class&&r(T,"class",null,J.class,R),L&4&&r(T,"style",z.style,J.style,R),L&8){const ae=x.dynamicProps;for(let de=0;de<ae.length;de++){const ue=ae[de],Ne=z[ue],qe=J[ue];(qe!==Ne||ue==="value")&&r(T,ue,Ne,qe,R,d)}}L&1&&S.children!==x.children&&u(T,x.children)}else!w&&M==null&&se(T,z,J,d,R);((Q=J.onVnodeUpdated)||N)&&Et(()=>{Q&&Ut(Q,d,x,S),N&&Hn(x,S,d,"updated")},O)},Z=(S,x,d,O,R,y,w)=>{for(let T=0;T<x.length;T++){const L=S[T],M=x[T],N=L.el&&(L.type===Qe||!ni(L,M)||L.shapeFlag&198)?h(L.el):d;m(L,M,N,null,O,R,y,w,!0)}},se=(S,x,d,O,R)=>{if(x!==d){if(x!==Me)for(const y in x)!fi(y)&&!(y in d)&&r(S,y,x[y],null,R,O);for(const y in d){if(fi(y))continue;const w=d[y],T=x[y];w!==T&&y!=="value"&&r(S,y,T,w,R,O)}"value"in d&&r(S,"value",x.value,d.value,R)}},P=(S,x,d,O,R,y,w,T,L)=>{const M=x.el=S?S.el:a(""),N=x.anchor=S?S.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:Q}=x;Q&&(T=T?T.concat(Q):Q),S==null?(s(M,d,O),s(N,d,O),V(x.children||[],d,N,R,y,w,T,L)):z>0&&z&64&&J&&S.dynamicChildren?(Z(S.dynamicChildren,J,d,R,y,w,T),(x.key!=null||R&&x===R.subTree)&&af(S,x,!0)):K(S,x,d,N,R,y,w,T,L)},Y=(S,x,d,O,R,y,w,T,L)=>{x.slotScopeIds=T,S==null?x.shapeFlag&512?R.ctx.activate(x,d,O,w,L):_(x,d,O,R,y,w,L):U(S,x,L)},_=(S,x,d,O,R,y,w)=>{const T=S.component=sv(S,O,R);if(Vd(S)&&(T.ctx.renderer=re),iv(T,!1,w),T.asyncDep){if(R&&R.registerDep(T,q,w),!S.el){const L=T.subTree=it(Un);v(null,L,x,d),S.placeholder=L.el}}else q(T,S,x,d,R,y,w)},U=(S,x,d)=>{const O=x.component=S.component;if(Gg(S,x,d))if(O.asyncDep&&!O.asyncResolved){D(O,x,d);return}else O.next=x,O.update();else x.el=S.el,O.vnode=x},q=(S,x,d,O,R,y,w)=>{const T=()=>{if(S.isMounted){let{next:z,bu:J,u:Q,parent:ae,vnode:de}=S;{const ot=lf(S);if(ot){z&&(z.el=de.el,D(S,z,w)),ot.asyncDep.then(()=>{S.isUnmounted||T()});return}}let ue=z,Ne;Vn(S,!1),z?(z.el=de.el,D(S,z,w)):z=de,J&&wr(J),(Ne=z.props&&z.props.onVnodeBeforeUpdate)&&Ut(Ne,ae,z,de),Vn(S,!0);const qe=au(S),He=S.subTree;S.subTree=qe,m(He,qe,h(He.el),X(He),S,R,y),z.el=qe.el,ue===null&&Kg(S,qe.el),Q&&Et(Q,R),(Ne=z.props&&z.props.onVnodeUpdated)&&Et(()=>Ut(Ne,ae,z,de),R)}else{let z;const{el:J,props:Q}=x,{bm:ae,m:de,parent:ue,root:Ne,type:qe}=S,He=gi(x);Vn(S,!1),ae&&wr(ae),!He&&(z=Q&&Q.onVnodeBeforeMount)&&Ut(z,ue,x),Vn(S,!0);{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(qe);const ot=S.subTree=au(S);m(null,ot,d,O,S,R,y),x.el=ot.el}if(de&&Et(de,R),!He&&(z=Q&&Q.onVnodeMounted)){const ot=x;Et(()=>Ut(z,ue,ot),R)}(x.shapeFlag&256||ue&&gi(ue.vnode)&&ue.vnode.shapeFlag&256)&&S.a&&Et(S.a,R),S.isMounted=!0,x=d=O=null}};S.scope.on();const L=S.effect=new bd(T);S.scope.off();const M=S.update=L.run.bind(L),N=S.job=L.runIfDirty.bind(L);N.i=S,N.id=S.uid,L.scheduler=()=>Dl(N),Vn(S,!0),M()},D=(S,x,d)=>{x.component=S;const O=S.vnode.props;S.vnode=x,S.next=null,Ag(S,x.props,O,d),Dg(S,x.children,d),cn(),Xc(S),un()},K=(S,x,d,O,R,y,w,T,L=!1)=>{const M=S&&S.children,N=S?S.shapeFlag:0,z=x.children,{patchFlag:J,shapeFlag:Q}=x;if(J>0){if(J&128){ne(M,z,d,O,R,y,w,T,L);return}else if(J&256){G(M,z,d,O,R,y,w,T,L);return}}Q&8?(N&16&&ve(M,R,y),z!==M&&u(d,z)):N&16?Q&16?ne(M,z,d,O,R,y,w,T,L):ve(M,R,y,!0):(N&8&&u(d,""),Q&16&&V(z,d,O,R,y,w,T,L))},G=(S,x,d,O,R,y,w,T,L)=>{S=S||Cs,x=x||Cs;const M=S.length,N=x.length,z=Math.min(M,N);let J;for(J=0;J<z;J++){const Q=x[J]=L?yn(x[J]):Bt(x[J]);m(S[J],Q,d,null,R,y,w,T,L)}M>N?ve(S,R,y,!0,!1,z):V(x,d,O,R,y,w,T,L,z)},ne=(S,x,d,O,R,y,w,T,L)=>{let M=0;const N=x.length;let z=S.length-1,J=N-1;for(;M<=z&&M<=J;){const Q=S[M],ae=x[M]=L?yn(x[M]):Bt(x[M]);if(ni(Q,ae))m(Q,ae,d,null,R,y,w,T,L);else break;M++}for(;M<=z&&M<=J;){const Q=S[z],ae=x[J]=L?yn(x[J]):Bt(x[J]);if(ni(Q,ae))m(Q,ae,d,null,R,y,w,T,L);else break;z--,J--}if(M>z){if(M<=J){const Q=J+1,ae=Q<N?x[Q].el:O;for(;M<=J;)m(null,x[M]=L?yn(x[M]):Bt(x[M]),d,ae,R,y,w,T,L),M++}}else if(M>J)for(;M<=z;)F(S[M],R,y,!0),M++;else{const Q=M,ae=M,de=new Map;for(M=ae;M<=J;M++){const tt=x[M]=L?yn(x[M]):Bt(x[M]);tt.key!=null&&de.set(tt.key,M)}let ue,Ne=0;const qe=J-ae+1;let He=!1,ot=0;const De=new Array(qe);for(M=0;M<qe;M++)De[M]=0;for(M=Q;M<=z;M++){const tt=S[M];if(Ne>=qe){F(tt,R,y,!0);continue}let Ge;if(tt.key!=null)Ge=de.get(tt.key);else for(ue=ae;ue<=J;ue++)if(De[ue-ae]===0&&ni(tt,x[ue])){Ge=ue;break}Ge===void 0?F(tt,R,y,!0):(De[Ge-ae]=M+1,Ge>=ot?ot=Ge:He=!0,m(tt,x[Ge],d,null,R,y,w,T,L),Ne++)}const Wn=He?Fg(De):Cs;for(ue=Wn.length-1,M=qe-1;M>=0;M--){const tt=ae+M,Ge=x[tt],Js=x[tt+1],ur=tt+1<N?Js.el||Js.placeholder:O;De[M]===0?m(null,Ge,d,ur,R,y,w,T,L):He&&(ue<0||M!==Wn[ue]?$(Ge,d,ur,2):ue--)}}},$=(S,x,d,O,R=null)=>{const{el:y,type:w,transition:T,children:L,shapeFlag:M}=S;if(M&6){$(S.component.subTree,x,d,O);return}if(M&128){S.suspense.move(x,d,O);return}if(M&64){w.move(S,x,d,re);return}if(w===Qe){s(y,x,d);for(let z=0;z<L.length;z++)$(L[z],x,d,O);s(S.anchor,x,d);return}if(w===oa){I(S,x,d);return}if(O!==2&&M&1&&T)if(O===0)T.beforeEnter(y),s(y,x,d),Et(()=>T.enter(y),R);else{const{leave:z,delayLeave:J,afterLeave:Q}=T,ae=()=>{S.ctx.isUnmounted?i(y):s(y,x,d)},de=()=>{y._isLeaving&&y[rg](!0),z(y,()=>{ae(),Q&&Q()})};J?J(y,ae,de):de()}else s(y,x,d)},F=(S,x,d,O=!1,R=!1)=>{const{type:y,props:w,ref:T,children:L,dynamicChildren:M,shapeFlag:N,patchFlag:z,dirs:J,cacheIndex:Q}=S;if(z===-2&&(R=!1),T!=null&&(cn(),mi(T,null,d,S,!0),un()),Q!=null&&(x.renderCache[Q]=void 0),N&256){x.ctx.deactivate(S);return}const ae=N&1&&J,de=!gi(S);let ue;if(de&&(ue=w&&w.onVnodeBeforeUnmount)&&Ut(ue,x,S),N&6)ie(S.component,d,O);else{if(N&128){S.suspense.unmount(d,O);return}ae&&Hn(S,null,x,"beforeUnmount"),N&64?S.type.remove(S,x,d,re,O):M&&!M.hasOnce&&(y!==Qe||z>0&&z&64)?ve(M,x,d,!1,!0):(y===Qe&&z&384||!R&&N&16)&&ve(L,x,d),O&&ce(S)}(de&&(ue=w&&w.onVnodeUnmounted)||ae)&&Et(()=>{ue&&Ut(ue,x,S),ae&&Hn(S,null,x,"unmounted")},d)},ce=S=>{const{type:x,el:d,anchor:O,transition:R}=S;if(x===Qe){oe(d,O);return}if(x===oa){k(S);return}const y=()=>{i(d),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(S.shapeFlag&1&&R&&!R.persisted){const{leave:w,delayLeave:T}=R,L=()=>w(d,y);T?T(S.el,y,L):L()}else y()},oe=(S,x)=>{let d;for(;S!==x;)d=f(S),i(S),S=d;i(x)},ie=(S,x,d)=>{const{bum:O,scope:R,job:y,subTree:w,um:T,m:L,a:M}=S;ou(L),ou(M),O&&wr(O),R.stop(),y&&(y.flags|=8,F(w,S,x,d)),T&&Et(T,x),Et(()=>{S.isUnmounted=!0},x)},ve=(S,x,d,O=!1,R=!1,y=0)=>{for(let w=y;w<S.length;w++)F(S[w],x,d,O,R)},X=S=>{if(S.shapeFlag&6)return X(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const x=f(S.anchor||S.el),d=x&&x[sg];return d?f(d):x};let te=!1;const ee=(S,x,d)=>{S==null?x._vnode&&F(x._vnode,null,null,!0):m(x._vnode||null,S,x,null,null,null,d),x._vnode=S,te||(te=!0,Xc(),$d(),te=!1)},re={p:m,um:F,m:$,r:ce,mt:_,mc:V,pc:K,pbc:Z,n:X,o:t};return{render:ee,hydrate:void 0,createApp:kg(ee)}}function ra({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function af(t,e,n=!1){const s=t.children,i=e.children;if(fe(s)&&fe(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=yn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&af(o,a)),a.type===To&&a.patchFlag!==-1&&(a.el=o.el),a.type===Un&&!a.el&&(a.el=o.el)}}function Fg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function lf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lf(e)}function ou(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Bg=Symbol.for("v-scx"),$g=()=>Wt(Bg);function Qn(t,e,n){return cf(t,e,n)}function cf(t,e,n=Me){const{immediate:s,deep:i,flush:r,once:o}=n,a=ut({},n),l=e&&s||!e&&r!=="post";let c;if(Di){if(r==="sync"){const p=$g();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=jt,p.resume=jt,p.pause=jt,p}}const u=ct;a.call=(p,g,m)=>Yt(p,u,g,m);let h=!1;r==="post"?a.scheduler=p=>{Et(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():Dl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Jm(t,e,a);return Di&&(c?c.push(f):l&&f()),f}function zg(t,e,n){const s=this.proxy,i=Ke(t)?t.includes(".")?uf(s,t):()=>s[t]:t.bind(s,s);let r;me(e)?r=e:(r=e.handler,n=e);const o=Zi(this),a=cf(i,r.bind(s),n);return o(),a}function uf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const jg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rt(e)}Modifiers`]||t[`${cs(e)}Modifiers`];function Wg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Me;let i=n;const r=e.startsWith("update:"),o=r&&jg(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Ke(u)?u.trim():u)),o.number&&(i=n.map(Pa)));let a,l=s[a=Jo(e)]||s[a=Jo(Rt(e))];!l&&r&&(l=s[a=Jo(cs(e))]),l&&Yt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Yt(c,t,6,i)}}const Hg=new WeakMap;function hf(t,e,n=!1){const s=n?Hg:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!me(t)){const l=c=>{const u=hf(c,e,!0);u&&(a=!0,ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Be(t)&&s.set(t,null),null):(fe(r)?r.forEach(l=>o[l]=null):ut(o,r),Be(t)&&s.set(t,o),o)}function So(t,e){return!t||!mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,cs(e))||xe(t,e))}function au(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:g,inheritAttrs:m}=t,b=Ur(t);let v,E;try{if(n.shapeFlag&4){const k=i||s,A=k;v=Bt(c.call(A,k,u,h,p,f,g)),E=a}else{const k=e;v=Bt(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),E=e.props?a:Vg(a)}}catch(k){yi.length=0,Co(k,t,1),v=it(Un)}let I=v;if(E&&m!==!1){const k=Object.keys(E),{shapeFlag:A}=I;k.length&&A&7&&(r&&k.some(El)&&(E=qg(E,r)),I=Ps(I,E,!1,!0))}return n.dirs&&(I=Ps(I,null,!1,!0),I.dirs=I.dirs?I.dirs.concat(n.dirs):n.dirs),n.transition&&Ml(I,n.transition),v=I,Ur(b),v}const Vg=t=>{let e;for(const n in t)(n==="class"||n==="style"||mo(n))&&((e||(e={}))[n]=t[n]);return e},qg=(t,e)=>{const n={};for(const s in t)(!El(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?lu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!So(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?lu(s,o,c):!0:!!o;return!1}function lu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!So(n,r))return!0}return!1}function Kg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const df=t=>t.__isSuspense;function Yg(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):ng(t)}const Qe=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),Un=Symbol.for("v-cmt"),oa=Symbol.for("v-stc"),yi=[];let It=null;function we(t=!1){yi.push(It=t?null:[])}function Zg(){yi.pop(),It=yi[yi.length-1]||null}let Ni=1;function $r(t,e=!1){Ni+=t,t<0&&It&&e&&(It.hasOnce=!0)}function ff(t){return t.dynamicChildren=Ni>0?It||Cs:null,Zg(),Ni>0&&It&&It.push(t),t}function Ie(t,e,n,s,i,r){return ff(C(t,e,n,s,i,r,!0))}function Xg(t,e,n,s,i){return ff(it(t,e,n,s,i,!0))}function zr(t){return t?t.__v_isVNode===!0:!1}function ni(t,e){return t.type===e.type&&t.key===e.key}const pf=({key:t})=>t??null,Ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||Ve(t)||me(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,s=0,i=null,r=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pf(e),ref:e&&Ir(e),scopeId:jd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ct};return a?(Fl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),Ni>0&&!o&&It&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&It.push(l),l}const it=Qg;function Qg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===vg)&&(t=Un),zr(t)){const a=Ps(t,e,!0);return n&&Fl(a,n),Ni>0&&!r&&It&&(a.shapeFlag&6?It[It.indexOf(t)]=a:It.push(a)),a.patchFlag=-2,a}if(cv(t)&&(t=t.__vccOpts),e){e=Jg(e);let{class:a,style:l}=e;a&&!Ke(a)&&(e.class=At(a)),Be(l)&&(Ol(l)&&!fe(l)&&(l=ut({},l)),e.style=wo(l))}const o=Ke(t)?1:df(t)?128:ig(t)?64:Be(t)?4:me(t)?2:0;return C(t,e,n,s,i,o,r,!0)}function Jg(t){return t?Ol(t)||ef(t)?ut({},t):t:null}function Ps(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?ev(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pf(c),ref:e&&e.ref?n&&r?fe(r)?r.concat(Ir(e)):[r,Ir(e)]:Ir(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ps(t.ssContent),ssFallback:t.ssFallback&&Ps(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ml(u,l.clone(u)),u}function Re(t=" ",e=0){return it(To,null,t,e)}function kn(t="",e=!1){return e?(we(),Xg(Un,null,t)):it(Un,null,t)}function Bt(t){return t==null||typeof t=="boolean"?it(Un):fe(t)?it(Qe,null,t.slice()):zr(t)?yn(t):it(To,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ps(t)}function Fl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Fl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!ef(e)?e._ctx=Ct:i===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),s&64?(n=16,e=[Re(e)]):n=8);t.children=e,t.shapeFlag|=n}function ev(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=At([e.class,s.class]));else if(i==="style")e.style=wo([e.style,s.style]);else if(mo(i)){const r=e[i],o=s[i];o&&r!==o&&!(fe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ut(t,e,n,s=null){Yt(t,e,7,[n,s])}const tv=Xd();let nv=0;function sv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||tv,r={uid:nv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nf(s,i),emitsOptions:hf(s,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:s.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wg.bind(null,r),t.ce&&t.ce(r),r}let ct=null;const _f=()=>ct||Ct;let jr,$a;{const t=bo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};jr=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),$a=e("__VUE_SSR_SETTERS__",n=>Di=n)}const Zi=t=>{const e=ct;return jr(t),t.scope.on(),()=>{t.scope.off(),jr(e)}},cu=()=>{ct&&ct.scope.off(),jr(null)};function mf(t){return t.vnode.shapeFlag&4}let Di=!1;function iv(t,e=!1,n=!1){e&&$a(e);const{props:s,children:i}=t.vnode,r=mf(t);xg(t,s,r,e),Ng(t,i,n||e);const o=r?rv(t,e):void 0;return e&&$a(!1),o}function rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bg);const{setup:s}=n;if(s){cn();const i=t.setupContext=s.length>1?av(t):null,r=Zi(t),o=Yi(s,t,0,[t.props,i]),a=cd(o);if(un(),r(),(a||t.sp)&&!gi(t)&&Hd(t),a){if(o.then(cu,cu),e)return o.then(l=>{uu(t,l)}).catch(l=>{Co(l,t,0)});t.asyncDep=o}else uu(t,o)}else gf(t)}function uu(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Ud(e)),gf(t)}function gf(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const i=Zi(t);cn();try{wg(t)}finally{un(),i()}}}const ov={get(t,e){return lt(t,"get",""),t[e]}};function av(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ov),slots:t.slots,emit:t.emit,expose:e}}function ko(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ud(Pl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function lv(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function cv(t){return me(t)&&"__vccOpts"in t}const St=(t,e)=>Xm(t,e,Di);function vf(t,e,n){const s=(r,o,a)=>{$r(-1);try{return it(r,o,a)}finally{$r(1)}},i=arguments.length;return i===2?Be(e)&&!fe(e)?zr(e)?s(t,null,[e]):s(t,e):s(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&zr(n)&&(n=[n]),s(t,e,n))}const uv="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let za;const hu=typeof window<"u"&&window.trustedTypes;if(hu)try{za=hu.createPolicy("vue",{createHTML:t=>t})}catch{}const yf=za?t=>za.createHTML(t):t=>t,hv="http://www.w3.org/2000/svg",dv="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,du=Jt&&Jt.createElement("template"),fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Jt.createElementNS(hv,t):e==="mathml"?Jt.createElementNS(dv,t):n?Jt.createElement(t,{is:n}):Jt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{du.innerHTML=yf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=du.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pv=Symbol("_vtc");function _v(t,e,n){const s=t[pv];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wr=Symbol("_vod"),bf=Symbol("_vsh"),Ro={name:"show",beforeMount(t,{value:e},{transition:n}){t[Wr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):si(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),si(t,!0),s.enter(t)):s.leave(t,()=>{si(t,!1)}):si(t,e))},beforeUnmount(t,{value:e}){si(t,e)}};function si(t,e){t.style.display=e?t[Wr]:"none",t[bf]=!e}const mv=Symbol(""),gv=/(?:^|;)\s*display\s*:/;function vv(t,e,n){const s=t.style,i=Ke(n);let r=!1;if(n&&!i){if(e)if(Ke(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Sr(s,a,"")}else for(const o in e)n[o]==null&&Sr(s,o,"");for(const o in n)o==="display"&&(r=!0),Sr(s,o,n[o])}else if(i){if(e!==n){const o=s[mv];o&&(n+=";"+o),s.cssText=n,r=gv.test(n)}}else e&&t.removeAttribute("style");Wr in t&&(t[Wr]=r?s.display:"",t[bf]&&(s.display="none"))}const fu=/\s*!important$/;function Sr(t,e,n){if(fe(n))n.forEach(s=>Sr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yv(t,e);fu.test(n)?t.setProperty(cs(s),n.replace(fu,""),"important"):t[s]=n}}const pu=["Webkit","Moz","ms"],aa={};function yv(t,e){const n=aa[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return aa[e]=s;s=yo(s);for(let i=0;i<pu.length;i++){const r=pu[i]+s;if(r in t)return aa[e]=r}return e}const _u="http://www.w3.org/1999/xlink";function mu(t,e,n,s,i,r=Em(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_u,e.slice(6,e.length)):t.setAttributeNS(_u,e,n):n==null||r&&!fd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Kt(n)?String(n):n)}function gu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yf(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=fd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function wn(t,e,n,s){t.addEventListener(e,n,s)}function bv(t,e,n,s){t.removeEventListener(e,n,s)}const vu=Symbol("_vei");function wv(t,e,n,s,i=null){const r=t[vu]||(t[vu]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ev(e);if(s){const c=r[e]=Sv(s,i);wn(t,a,c,l)}else o&&(bv(t,a,o,l),r[e]=void 0)}}const yu=/(?:Once|Passive|Capture)$/;function Ev(t){let e;if(yu.test(t)){e={};let s;for(;s=t.match(yu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let la=0;const Cv=Promise.resolve(),Iv=()=>la||(Cv.then(()=>la=0),la=Date.now());function Sv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Yt(Tv(s,n.value),e,5,[s])};return n.value=t,n.attached=Iv(),n}function Tv(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const bu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,kv=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?_v(t,s,o):e==="style"?vv(t,n,s):mo(e)?El(e)||wv(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rv(t,e,s,o))?(gu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(s))?gu(t,Rt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),mu(t,e,s,o))};function Rv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&bu(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return bu(e)&&Ke(n)?!1:e in t}const Ns=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>wr(e,n):e};function xv(t){t.target.composing=!0}function wu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),vt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[an]=Ns(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Pa(a)),t[an](a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",xv),wn(t,"compositionend",wu),wn(t,"change",wu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[an]=Ns(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Pa(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},$t={deep:!0,created(t,e,n){t[an]=Ns(n),wn(t,"change",()=>{const s=t._modelValue,i=wf(t),r=t.checked,o=t[an];if(fe(s)){const a=pd(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(go(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Ef(t,r))})},mounted:Eu,beforeUpdate(t,e,n){t[an]=Ns(n),Eu(t,e,n)}};function Eu(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(fe(e))i=pd(e,s.props.value)>-1;else if(go(e))i=e.has(s.props.value);else{if(e===n)return;i=Os(e,Ef(t,!0))}t.checked!==i&&(t.checked=i)}const yt={created(t,{value:e},n){t.checked=Os(e,n.props.value),t[an]=Ns(n),wn(t,"change",()=>{t[an](wf(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[an]=Ns(s),e!==n&&(t.checked=Os(e,s.props.value))}};function wf(t){return"_value"in t?t._value:t.value}function Ef(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Av=["ctrl","shift","alt","meta"],Ov={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Av.some(n=>t[`${n}Key`]&&!e.includes(n))},Mi=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=((i,...r)=>{for(let o=0;o<e.length;o++){const a=Ov[e[o]];if(a&&a(i,e))return}return t(i,...r)}))},Pv=ut({patchProp:kv},fv);let Cu;function Nv(){return Cu||(Cu=Mg(Pv))}const Dv=((...t)=>{const e=Nv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Lv(s);if(!i)return;const r=e._component;!me(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Mv(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function Mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lv(t){return Ke(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cf;const xo=t=>Cf=t,If=Symbol();function ja(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var bi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bi||(bi={}));function Uv(){const t=vd(!0),e=t.run(()=>ye({}));let n=[],s=[];const i=Pl({install(r){xo(i),i._a=r,r.provide(If,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Sf=()=>{};function Iu(t,e,n,s=Sf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&yd()&&Im(i),i}function ms(t,...e){t.slice().forEach(n=>{n(...e)})}const Fv=t=>t(),Su=Symbol(),ca=Symbol();function Wa(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ja(i)&&ja(s)&&t.hasOwnProperty(n)&&!Ve(s)&&!On(s)?t[n]=Wa(i,s):t[n]=s}return t}const Bv=Symbol();function $v(t){return!ja(t)||!Object.prototype.hasOwnProperty.call(t,Bv)}const{assign:gn}=Object;function zv(t){return!!(Ve(t)&&t.effect)}function jv(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Gm(n.state.value[t]);return gn(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Pl(St(()=>{xo(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return l=Tf(t,c,e,n,s,!0),l}function Tf(t,e,n={},s,i,r){let o;const a=gn({actions:{}},n),l={deep:!0};let c,u,h=[],f=[],p;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),ye({});let m;function b(V){let B;c=u=!1,typeof V=="function"?(V(s.state.value[t]),B={type:bi.patchFunction,storeId:t,events:p}):(Wa(s.state.value[t],V),B={type:bi.patchObject,payload:V,storeId:t,events:p});const Z=m=Symbol();Nl().then(()=>{m===Z&&(c=!0)}),u=!0,ms(h,B,s.state.value[t])}const v=r?function(){const{state:B}=n,Z=B?B():{};this.$patch(se=>{gn(se,Z)})}:Sf;function E(){o.stop(),h=[],f=[],s._s.delete(t)}const I=(V,B="")=>{if(Su in V)return V[ca]=B,V;const Z=function(){xo(s);const se=Array.from(arguments),P=[],Y=[];function _(D){P.push(D)}function U(D){Y.push(D)}ms(f,{args:se,name:Z[ca],store:A,after:_,onError:U});let q;try{q=V.apply(this&&this.$id===t?this:A,se)}catch(D){throw ms(Y,D),D}return q instanceof Promise?q.then(D=>(ms(P,D),D)).catch(D=>(ms(Y,D),Promise.reject(D))):(ms(P,q),q)};return Z[Su]=!0,Z[ca]=B,Z},k={_p:s,$id:t,$onAction:Iu.bind(null,f),$patch:b,$reset:v,$subscribe(V,B={}){const Z=Iu(h,V,B.detached,()=>se()),se=o.run(()=>Qn(()=>s.state.value[t],P=>{(B.flush==="sync"?u:c)&&V({storeId:t,type:bi.direct,events:p},P)},gn({},l,B)));return Z},$dispose:E},A=us(k);s._s.set(t,A);const j=(s._a&&s._a.runWithContext||Fv)(()=>s._e.run(()=>(o=vd()).run(()=>e({action:I}))));for(const V in j){const B=j[V];if(Ve(B)&&!zv(B)||On(B))r||(g&&$v(B)&&(Ve(B)?B.value=g[V]:Wa(B,g[V])),s.state.value[t][V]=B);else if(typeof B=="function"){const Z=I(B,V);j[V]=Z,a.actions[V]=B}}return gn(A,j),gn(Te(A),j),Object.defineProperty(A,"$state",{get:()=>s.state.value[t],set:V=>{b(B=>{gn(B,V)})}}),s._p.forEach(V=>{gn(A,o.run(()=>V({store:A,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(A.$state,g),c=!0,u=!0,A}/*! #__NO_SIDE_EFFECTS__ */function Ao(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,a){const l=Rg();return o=o||(l?Wt(If,null):null),o&&xo(o),o=Cf,o._s.has(t)||(i?Tf(t,e,s,o):jv(t,s,o)),o._s.get(t)}return r.$id=t,r}var Tu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=function(t,e){if(!t)throw Vs(e)},Vs=function(t){return new Error("Firebase Database ("+kf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Hv;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xf=function(t){const e=Rf(t);return Bl.encodeByteArray(e,!0)},Hr=function(t){return xf(t).replace(/\./g,"")},Vr=function(t){try{return Bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return Af(void 0,t)}function Af(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qv(n)||(t[n]=Af(t[n],e[n]));return t}function qv(t){return t!=="__proto__"}/**
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
 */function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kv=()=>Gv().__FIREBASE_DEFAULTS__,Yv=()=>{if(typeof process>"u"||typeof Tu>"u")return;const t=Tu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vr(t[1]);return e&&JSON.parse(e)},Oo=()=>{try{return Kv()||Yv()||Zv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Of=t=>{var e,n;return(n=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pf=t=>{const e=Of(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nf=()=>{var t;return(t=Oo())===null||t===void 0?void 0:t.config},Df=t=>{var e;return(e=Oo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Mf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Hr(JSON.stringify(n)),Hr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $l(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function Xv(){var t;const e=(t=Oo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jv(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ey(){return kf.NODE_ADMIN===!0}function ty(){try{return typeof indexedDB=="object"}catch{return!1}}function ny(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="FirebaseError";class pn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=sy,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?iy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,s)}}function iy(t,e){return t.replace(ry,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ry=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Li(Vr(r[0])||""),n=Li(Vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},oy=function(t){const e=Uf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ay=function(t){const e=Uf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ha(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ku(r)&&ku(o)){if(!Gr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ku(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function di(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function cy(t,e){const n=new uy(t,e);return n.subscribe.bind(n)}class uy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hy(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}function Po(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,le(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},No=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gn="[DEFAULT]";/**
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
 */class fy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_y(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:py(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function py(t){return t===Gn?void 0:t}function _y(t){return t.instantiationMode==="EAGER"}/**
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
 */class my{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new fy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const gy={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},vy=Oe.INFO,yy={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},by=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=yy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zl{constructor(e){this.name=e,this._logLevel=vy,this._logHandler=by,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const wy=(t,e)=>e.some(n=>t instanceof n);let Ru,xu;function Ey(){return Ru||(Ru=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cy(){return xu||(xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ff=new WeakMap,Va=new WeakMap,Bf=new WeakMap,ha=new WeakMap,jl=new WeakMap;function Iy(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ff.set(n,t)}).catch(()=>{}),jl.set(e,t),e}function Sy(t){if(Va.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Va.set(t,e)}let qa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ty(t){qa=t(qa)}function ky(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(da(this),e,...n);return Bf.set(s,e.sort?e.sort():[e]),Nn(s)}:Cy().includes(t)?function(...e){return t.apply(da(this),e),Nn(Ff.get(this))}:function(...e){return Nn(t.apply(da(this),e))}}function Ry(t){return typeof t=="function"?ky(t):(t instanceof IDBTransaction&&Sy(t),wy(t,Ey())?new Proxy(t,qa):t)}function Nn(t){if(t instanceof IDBRequest)return Iy(t);if(ha.has(t))return ha.get(t);const e=Ry(t);return e!==t&&(ha.set(t,e),jl.set(e,t)),e}const da=t=>jl.get(t);function xy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ay=["get","getKey","getAll","getAllKeys","count"],Oy=["put","add","delete","clear"],fa=new Map;function Au(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fa.get(e))return fa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Oy.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ay.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fa.set(e,r),r}Ty(t=>({...t,get:(e,n,s)=>Au(e,n)||t.get(e,n,s),has:(e,n)=>!!Au(e,n)||t.has(e,n)}));/**
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
 */class Py{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ny(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ny(t){const e=t.getComponent();return e?.type==="VERSION"}const Ga="@firebase/app",Ou="0.9.13";/**
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
 */const ts=new zl("@firebase/app"),Dy="@firebase/app-compat",My="@firebase/analytics-compat",Ly="@firebase/analytics",Uy="@firebase/app-check-compat",Fy="@firebase/app-check",By="@firebase/auth",$y="@firebase/auth-compat",zy="@firebase/database",jy="@firebase/database-compat",Wy="@firebase/functions",Hy="@firebase/functions-compat",Vy="@firebase/installations",qy="@firebase/installations-compat",Gy="@firebase/messaging",Ky="@firebase/messaging-compat",Yy="@firebase/performance",Zy="@firebase/performance-compat",Xy="@firebase/remote-config",Qy="@firebase/remote-config-compat",Jy="@firebase/storage",eb="@firebase/storage-compat",tb="@firebase/firestore",nb="@firebase/firestore-compat",sb="firebase",ib="9.23.0";/**
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
 */const Ka="[DEFAULT]",rb={[Ga]:"fire-core",[Dy]:"fire-core-compat",[Ly]:"fire-analytics",[My]:"fire-analytics-compat",[Fy]:"fire-app-check",[Uy]:"fire-app-check-compat",[By]:"fire-auth",[$y]:"fire-auth-compat",[zy]:"fire-rtdb",[jy]:"fire-rtdb-compat",[Wy]:"fire-fn",[Hy]:"fire-fn-compat",[Vy]:"fire-iid",[qy]:"fire-iid-compat",[Gy]:"fire-fcm",[Ky]:"fire-fcm-compat",[Yy]:"fire-perf",[Zy]:"fire-perf-compat",[Xy]:"fire-rc",[Qy]:"fire-rc-compat",[Jy]:"fire-gcs",[eb]:"fire-gcs-compat",[tb]:"fire-fst",[nb]:"fire-fst-compat","fire-js":"fire-js",[sb]:"fire-js-all"};/**
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
 */const Kr=new Map,Ya=new Map;function ob(t,e){try{t.container.addComponent(e)}catch(n){ts.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Ya.has(e))return ts.debug(`There were multiple attempts to register component ${e}.`),!1;Ya.set(e,t);for(const n of Kr.values())ob(n,t);return!0}function Do(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ab={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Qi("app","Firebase",ab);/**
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
 */class lb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const hs=ib;function $f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ka,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=Nf()),!n)throw Dn.create("no-options");const r=Kr.get(i);if(r){if(Gr(n,r.options)&&Gr(s,r.config))return r;throw Dn.create("duplicate-app",{appName:i})}const o=new my(i);for(const l of Ya.values())o.addComponent(l);const a=new lb(n,s,o);return Kr.set(i,a),a}function Wl(t=Ka){const e=Kr.get(t);if(!e&&t===Ka&&Nf())return $f();if(!e)throw Dn.create("no-app",{appName:t});return e}function Ht(t,e,n){var s;let i=(s=rb[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ts.warn(a.join(" "));return}ns(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const cb="firebase-heartbeat-database",ub=1,Ui="firebase-heartbeat-store";let pa=null;function zf(){return pa||(pa=xy(cb,ub,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),pa}async function hb(t){try{return await(await zf()).transaction(Ui).objectStore(Ui).get(jf(t))}catch(e){if(e instanceof pn)ts.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e?.message});ts.warn(n.message)}}}async function Pu(t,e){try{const s=(await zf()).transaction(Ui,"readwrite");await s.objectStore(Ui).put(e,jf(t)),await s.done}catch(n){if(n instanceof pn)ts.warn(n.message);else{const s=Dn.create("idb-set",{originalErrorMessage:n?.message});ts.warn(s.message)}}}function jf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const db=1024,fb=720*60*60*1e3;class pb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nu();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=fb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nu(),{heartbeatsToSend:n,unsentEntries:s}=_b(this._heartbeatsCache.heartbeats),i=Hr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Nu(){return new Date().toISOString().substring(0,10)}function _b(t,e=db){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Du(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Du(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ty()?ny().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await hb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Du(t){return Hr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gb(t){ns(new Fn("platform-logger",e=>new Py(e),"PRIVATE")),ns(new Fn("heartbeat",e=>new pb(e),"PRIVATE")),Ht(Ga,Ou,t),Ht(Ga,Ou,"esm2017"),Ht("fire-js","")}gb("");var vb="firebase",yb="9.23.0";/**
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
 */Ht(vb,yb,"app");var Mu={};const Lu="@firebase/database",Uu="0.14.4";/**
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
 */let Wf="";function bb(t){Wf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Li(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wb(e)}}catch{}return new Eb},Yn=Hf("localStorage"),Cb=Hf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=new zl("@firebase/database"),Ib=(function(){let t=1;return function(){return t++}})(),Vf=function(t){const e=dy(t),n=new ly;n.update(e);const s=n.digest();return Bl.encodeByteArray(s)},Ji=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ji.apply(null,s):typeof s=="object"?e+=et(s):e+=s,e+=" "}return e};let wi=null,Fu=!0;const Sb=function(t,e){le(!0,"Can't turn on custom loggers persistently."),Ts.logLevel=Oe.VERBOSE,wi=Ts.log.bind(Ts)},st=function(...t){if(Fu===!0&&(Fu=!1,wi===null&&Cb.get("logging_enabled")===!0&&Sb()),wi){const e=Ji.apply(null,t);wi(e)}},er=function(t){return function(...e){st(t,...e)}},Za=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ji(...t);Ts.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ji(...t)}`;throw Ts.error(e),new Error(e)},mt=function(...t){const e="FIREBASE WARNING: "+Ji(...t);Ts.warn(e)},Tb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ms="[MIN_NAME]",ss="[MAX_NAME]",ds=function(t,e){if(t===e)return 0;if(t===Ms||e===ss)return-1;if(e===Ms||t===ss)return 1;{const n=Bu(t),s=Bu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Rb=function(t,e){return t===e?0:t<e?-1:1},ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},Vl=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=et(e[s]),n+=":",n+=Vl(t[e[s]]);return n+="}",n},qf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gf=function(t){le(!Hl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},xb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ab=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ob(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Pb=new RegExp("^-?(0*)\\d{1,10}$"),Nb=-2147483648,Db=2147483647,Bu=function(t){if(Pb.test(t)){const e=Number(t);if(e>=Nb&&e<=Db)return e}return null},Gs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},Mb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Lb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class Tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="5",Kf="v",Yf="s",Zf="r",Xf="f",Qf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jf="ls",ep="p",Xa="ac",tp="websocket",np="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Fb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ip(t,e,n){le(typeof e=="string","typeof type must == string"),le(typeof n=="object","typeof params must == object");let s;if(e===tp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===np)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fb(t)&&(n.ns=t.namespace);const i=[];return rt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Vv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={},ma={};function Gl(t){const e=t.toString();return _a[e]||(_a[e]=new Bb),_a[e]}function $b(t,e){const n=t.toString();return ma[n]||(ma[n]=e()),ma[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Gs(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="start",jb="close",Wb="pLPCommand",Hb="pRTLPCB",rp="id",op="pw",ap="ser",Vb="cb",qb="seg",Gb="ts",Kb="d",Yb="dframe",lp=1870,cp=30,Zb=lp-cp,Xb=25e3,Qb=3e4;class ws{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=er(e),this.stats_=Gl(n),this.urlFn=l=>(this.appCheckToken&&(l[Xa]=this.appCheckToken),ip(n,np,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qb)),kb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$u)this.id=a,this.password=l;else if(o===jb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[$u]="t",s[ap]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Vb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kf]=ql,this.transportSessionId&&(s[Yf]=this.transportSessionId),this.lastSessionId&&(s[Jf]=this.lastSessionId),this.applicationId&&(s[ep]=this.applicationId),this.appCheckToken&&(s[Xa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qf.test(location.hostname)&&(s[Zf]=Xf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ws.forceAllow_=!0}static forceDisallow(){ws.forceDisallow_=!0}static isAvailable(){return ws.forceAllow_?!0:!ws.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!xb()&&!Ab()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=xf(n),i=qf(s,Zb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Yb]="t",s[rp]=e,s[op]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ib(),window[Wb+this.uniqueCallbackIdentifier]=e,window[Hb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){st("frame writing exception"),a.stack&&st(a.stack),st(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rp]=this.myID,e[op]=this.myPW,e[ap]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cp+s.length<=lp;){const o=this.pendingSegs.shift();s=s+"&"+qb+i+"="+o.seg+"&"+Gb+i+"="+o.ts+"&"+Kb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Xb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=16384,ew=45e3;let Yr=null;typeof MozWebSocket<"u"?Yr=MozWebSocket:typeof WebSocket<"u"&&(Yr=WebSocket);class xt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=er(this.connId),this.stats_=Gl(n),this.connURL=xt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kf]=ql,typeof location<"u"&&location.hostname&&Qf.test(location.hostname)&&(o[Zf]=Xf),n&&(o[Yf]=n),s&&(o[Jf]=s),i&&(o[Xa]=i),r&&(o[ep]=r),ip(e,tp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yn.set("previous_websocket_failure",!0);try{let s;ey(),this.mySock=new Yr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Yr!==null&&!xt.forceDisallow_}static previouslyFailed(){return Yn.isInMemoryStorage||Yn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Li(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qf(n,Jb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ew))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ws,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xt&&xt.isAvailable();let s=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xt];else{const i=this.transports_=[];for(const r of Fi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=6e4,nw=5e3,sw=10*1024,iw=100*1024,ga="t",zu="d",rw="s",ju="r",ow="e",Wu="o",Hu="a",Vu="n",qu="p",aw="h";class lw{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=er("c:"+this.id+":"),this.transportManager_=new Fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===Hu?this.upgradeIfSecondaryHealthy_():n===ju?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ii("t",e),s=ii("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ii("t",e),s=ii("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ii(ga,e);if(zu in e){const s=e[zu];if(n===aw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rw?this.onConnectionShutdown_(s):n===ju?this.onReset_(s):n===ow?Za("Server Error: "+s):n===Wu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Za("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ql!==s&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){le(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends hp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$l()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zr}getInitialEvent(e){return le(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=32,Ku=768;class Pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ke(){return new Pe("")}function Ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Pe(t.pieces_,e)}function Yl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function dp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Pe(e,0)}function je(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Pe(n,0)}function Se(t){return t.pieceNum_>=t.pieces_.length}function bt(t,e){const n=Ee(t),s=Ee(e);if(n===null)return e;if(n===s)return bt(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uw(t,e){const n=Bi(t,0),s=Bi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=ds(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Zl(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class hw{constructor(e,n){this.errorPrefix_=n,this.parts_=Bi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=No(this.parts_[s]);fp(this)}}function dw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=No(e),fp(t)}function fw(t){const e=t.parts_.pop();t.byteLength_-=No(e),t.parts_.length>0&&(t.byteLength_-=1)}function fp(t){if(t.byteLength_>Ku)throw new Error(t.errorPrefix_+"has a key path longer than "+Ku+" bytes ("+t.byteLength_+").");if(t.parts_.length>Gu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Gu+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends hp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xl}getInitialEvent(e){return le(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e3,pw=300*1e3,Yu=30*1e3,_w=1.3,mw=3e4,gw="server_kill",Zu=3;class ln extends up{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ln.nextPersistentConnectionId_++,this.log_=er("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=pw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(et(r)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ln.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const s=Ds(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ay(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Za("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mw&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_w)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ln.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){le(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new lw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{mt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(gw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&mt(h),l())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ha(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Vl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zu&&(this.reconnectDelay_=Yu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wf.replace(/\./g,"-")]=1,$l()?e["framework.cordova"]=1:Lf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zr.getInstance().currentlyOnline();return Ha(this.interruptReasons_)&&e}}ln.nextPersistentConnectionId_=0;ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ce(Ms,e),i=new Ce(Ms,n);return this.compare(s,i)!==0}minPost(){return Ce.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;class pp extends Mo{static get __EMPTY_NODE(){return _r}static set __EMPTY_NODE(e){_r=e}compare(e,n){return ds(e.name,n.name)}isDefinedOn(e){throw Vs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(ss,_r)}makePost(e,n){return le(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,_r)}toString(){return".key"}}const ks=new pp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=i??wt.EMPTY_NODE,this.right=r??wt.EMPTY_NODE}copy(e,n,s,i,r){return new Xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return wt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Xe.RED=!0;Xe.BLACK=!1;class vw{copy(e,n,s,i,r){return this}insert(e,n,s){return new Xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Xe.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new mr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new mr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new mr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new mr(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new vw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t,e){return ds(t.name,e.name)}function Ql(t,e){return ds(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa;function bw(t){Qa=t}const _p=function(t){return typeof t=="number"?"number:"+Gf(t):"string:"+t},mp=function(t){if(t.isLeafNode()){const e=t.val();le(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else le(t===Qa||t.isEmpty(),"priority of unexpected type.");le(t===Qa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,le(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mp(this.priorityNode_)}static set __childrenNodeConstructor(e){Xu=e}static get __childrenNodeConstructor(){return Xu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Se(e)?this:Ee(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(le(s!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_p(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gf(this.value_):e+=this.value_,this.lazyHash_=Vf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),r=Ze.VALUE_TYPE_ORDER.indexOf(s);return le(i>=0,"Unknown leaf type: "+n),le(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gp,vp;function ww(t){gp=t}function Ew(t){vp=t}class Cw extends Mo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ds(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(ss,new Ze("[PRIORITY-POST]",vp))}makePost(e,n){const s=gp(e);return new Ce(n,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const We=new Cw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=Math.log(2);class Sw{constructor(e){const n=r=>parseInt(Math.log(r)/Iw,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),m=i(p+1,c);return h=t[p],f=n?n(h):h,new Xe(f,h.node,Xe.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const f=function(g,m){const b=h-g,v=h;h-=g;const E=i(b+1,v),I=t[b],k=n?n(I):I;p(new Xe(k,I.node,m,null,E))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(g+1));m?f(b,Xe.BLACK):(f(b,Xe.BLACK),f(b,Xe.RED))}return u},o=new Sw(t.length),a=r(o);return new wt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;const gs={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return le(gs&&We,"ChildrenNode.ts has not been loaded"),va=va||new sn({".priority":gs},{".priority":We}),va}get(e){const n=Ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){le(e!==ks,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Ce.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Xr(s,e.getCompare()):a=gs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new sn(u,c)}addToIndexes(e,n){const s=qr(this.indexes_,(i,r)=>{const o=Ds(this.indexSet_,r);if(le(o,"Missing index implementation for "+r),i===gs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ce.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Xr(a,o.getCompare())}else return gs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Ce(e.name,a))),l.insert(e,e.node)}});return new sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=qr(this.indexes_,i=>{if(i===gs)return i;{const r=n.get(e.name);return r?i.remove(new Ce(e.name,r)):i}});return new sn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class pe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&mp(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new pe(new wt(Ql),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new pe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oi:n}}getChild(e){const n=Ee(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(le(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ce(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?oi:this.priorityNode_;return new pe(i,o,r)}}updateChild(e,n){const s=Ee(e);if(s===null)return n;{le(Ee(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Fe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(We,(o,a)=>{n[o]=a.val(e),s++,r&&pe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_p(this.getPriority().val())+":"),this.forEachChild(We,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Ce(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===tr?-1:0}withIndex(e){if(e===ks||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new pe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ks||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(We),i=n.getIterator(We);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ks?null:this.indexMap_.get(e.toString())}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tw extends pe{constructor(){super(new wt(Ql),pe.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return pe.EMPTY_NODE}isEmpty(){return!1}}const tr=new Tw;Object.defineProperties(Ce,{MIN:{value:new Ce(Ms,pe.EMPTY_NODE)},MAX:{value:new Ce(ss,tr)}});pp.__EMPTY_NODE=pe.EMPTY_NODE;Ze.__childrenNodeConstructor=pe;bw(tr);Ew(tr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=!0;function Je(t,e=null){if(t===null)return pe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),le(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,Je(e))}if(!(t instanceof Array)&&kw){const n=[];let s=!1;if(rt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Je(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Ce(o,l)))}}),n.length===0)return pe.EMPTY_NODE;const r=Xr(n,yw,o=>o.name,Ql);if(s){const o=Xr(n,We.getCompare());return new pe(r,Je(e),new sn({".priority":o},{".priority":We}))}else return new pe(r,Je(e),sn.Default)}else{let n=pe.EMPTY_NODE;return rt(t,(s,i)=>{if(Zt(t,s)&&s.substring(0,1)!=="."){const r=Je(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Je(e))}}ww(Je);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Mo{constructor(e){super(),this.indexPath_=e,le(!Se(e)&&Ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ds(e.name,n.name):r}makePost(e,n){const s=Je(e),i=pe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ce(n,i)}maxPost(){const e=pe.EMPTY_NODE.updateChild(this.indexPath_,tr);return new Ce(ss,e)}toString(){return Bi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw extends Mo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ds(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const s=Je(e);return new Ce(n,s)}toString(){return".value"}}const Aw=new xw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $i(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ow(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){le(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange($i(n,a)):le(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,s)):o.trackChildChange(zi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(We,(i,r)=>{n.hasChild(i)||s.trackChildChange($i(i,r))}),n.isLeafNode()||n.forEachChild(We,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zi(i,r,o))}else s.trackChildChange(Ls(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?pe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.indexedFilter_=new Jl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ji.getStartPost_(e),this.endPost_=ji.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Ce(n,s))||(s=pe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=pe.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(pe.EMPTY_NODE);const r=this;return n.forEachChild(We,(o,a)=>{r.matches(new Ce(o,a))||(i=i.updateImmediateChild(o,pe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Ce(n,s))||(s=pe.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=pe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=pe.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(pe.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,pe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;le(a.numChildren()===this.limit_,"");const l=new Ce(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r?.trackChildChange(zi(n,s,h)),a.updateImmediateChild(n,s);{r?.trackChildChange($i(n,h));const m=a.updateImmediateChild(n,pe.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r?.trackChildChange(Ls(f.name,f.node)),m.updateImmediateChild(f.name,f.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange($i(c.name,c.node)),r.trackChildChange(Ls(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,pe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=We}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ms}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===We}copy(){const e=new ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nw(t){return t.loadsAllData()?new Jl(t.getIndex()):t.hasLimit()?new Pw(t):new ji(t)}function Qu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===We?n="$priority":t.index_===Aw?n="$value":t.index_===ks?n="$key":(le(t.index_ instanceof Rw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=et(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+et(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=et(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ju(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==We&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends up{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=er("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Qu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ds(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Qr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Qu(e._queryParams),s=e._path.toString(),i=new Xi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Li(a.responseText)}catch{mt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&mt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.rootNode_=pe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(){return{value:null,children:new Map}}function bp(t,e,n){if(Se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Ee(e);t.children.has(s)||t.children.set(s,Jr());const i=t.children.get(s);e=Fe(e),bp(i,e,n)}}function Ja(t,e,n){t.value!==null?n(e,t.value):Mw(t,(s,i)=>{const r=new Pe(e.toString()+"/"+s);Ja(i,r,n)})}function Mw(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=10*1e3,Uw=30*1e3,Fw=300*1e3;class Bw{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Lw(e);const s=eh+(Uw-eh)*Math.random();Ei(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;rt(e,(i,r)=>{r>0&&Zt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ot||(Ot={}));function tc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ot.ACK_USER_WRITE,this.source=tc()}operationForChild(e){if(Se(this.path)){if(this.affectedTree.value!=null)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Pe(e));return new eo(ke(),n,this.revert)}}else return le(Ee(this.path)===e,"operationForChild called for unrelated child."),new eo(Fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.source=e,this.path=n,this.type=Ot.LISTEN_COMPLETE}operationForChild(e){return Se(this.path)?new Wi(this.source,ke()):new Wi(this.source,Fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ot.OVERWRITE}operationForChild(e){return Se(this.path)?new is(this.source,ke(),this.snap.getImmediateChild(e)):new is(this.source,Fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ot.MERGE}operationForChild(e){if(Se(this.path)){const n=this.children.subtree(new Pe(e));return n.isEmpty()?null:n.value?new is(this.source,ke(),n.value):new Us(this.source,ke(),n)}else return le(Ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Us(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Se(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zw(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ow(o.childName,o.snapshotNode))}),ai(t,i,"child_removed",e,s,n),ai(t,i,"child_added",e,s,n),ai(t,i,"child_moved",r,s,n),ai(t,i,"child_changed",e,s,n),ai(t,i,"value",e,s,n),i}function ai(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Ww(t,a,l)),o.forEach(a=>{const l=jw(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function jw(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ww(t,e,n){if(e.childName==null||n.childName==null)throw Vs("Should only compare child_ events.");const s=new Ce(e.childName,e.snapshotNode),i=new Ce(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,s){return Lo(new rs(e,n,s),t.serverCache)}function wp(t,e,n,s){return Lo(t.eventCache,new rs(e,n,s))}function el(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function os(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya;const Hw=()=>(ya||(ya=new wt(Rb)),ya);class Ue{constructor(e,n=Hw()){this.value=e,this.children=n}static fromObject(e){let n=new Ue(null);return rt(e,(s,i)=>{n=n.set(new Pe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ke(),value:this.value};if(Se(e))return null;{const s=Ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Fe(e),n);return r!=null?{path:je(new Pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Se(e))return this;{const n=Ee(e),s=this.children.get(n);return s!==null?s.subtree(Fe(e)):new Ue(null)}}set(e,n){if(Se(e))return new Ue(n,this.children);{const s=Ee(e),r=(this.children.get(s)||new Ue(null)).set(Fe(e),n),o=this.children.insert(s,r);return new Ue(this.value,o)}}remove(e){if(Se(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const n=Ee(e),s=this.children.get(n);if(s){const i=s.remove(Fe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ue(null):new Ue(this.value,r)}else return this}}get(e){if(Se(e))return this.value;{const n=Ee(e),s=this.children.get(n);return s?s.get(Fe(e)):null}}setTree(e,n){if(Se(e))return n;{const s=Ee(e),r=(this.children.get(s)||new Ue(null)).setTree(Fe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ue(this.value,o)}}fold(e){return this.fold_(ke(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(je(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ke(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Se(e))return null;{const r=Ee(e),o=this.children.get(r);return o?o.findOnPath_(Fe(e),je(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ke(),n)}foreachOnPath_(e,n,s){if(Se(e))return this;{this.value&&s(n,this.value);const i=Ee(e),r=this.children.get(i);return r?r.foreachOnPath_(Fe(e),je(n,i),s):new Ue(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(je(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.writeTree_=e}static empty(){return new Nt(new Ue(null))}}function Ii(t,e,n){if(Se(e))return new Nt(new Ue(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=bt(i,e);return r=r.updateChild(o,n),new Nt(t.writeTree_.set(i,r))}else{const i=new Ue(n),r=t.writeTree_.setTree(e,i);return new Nt(r)}}}function tl(t,e,n){let s=t;return rt(n,(i,r)=>{s=Ii(s,je(e,i),r)}),s}function th(t,e){if(Se(e))return Nt.empty();{const n=t.writeTree_.setTree(e,new Ue(null));return new Nt(n)}}function nl(t,e){return fs(t,e)!=null}function fs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(bt(n.path,e)):null}function nh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(We,(s,i)=>{e.push(new Ce(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Ce(s,i.value))}),e}function Mn(t,e){if(Se(e))return t;{const n=fs(t,e);return n!=null?new Nt(new Ue(n)):new Nt(t.writeTree_.subtree(e))}}function sl(t){return t.writeTree_.isEmpty()}function Fs(t,e){return Ep(ke(),t.writeTree_,e)}function Ep(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(le(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Ep(je(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(je(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e){return Tp(e,t)}function Vw(t,e,n,s,i){le(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ii(t.visibleWrites,e,n)),t.lastWriteId=s}function qw(t,e,n,s){le(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=tl(t.visibleWrites,e,n),t.lastWriteId=s}function Gw(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Kw(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);le(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Yw(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Zw(t),!0;if(s.snap)t.visibleWrites=th(t.visibleWrites,s.path);else{const a=s.children;rt(a,l=>{t.visibleWrites=th(t.visibleWrites,je(s.path,l))})}return!0}else return!1}function Yw(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(je(t.path,n),e))return!0;return!1}function Zw(t){t.visibleWrites=Cp(t.allWrites,Xw,ke()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Xw(t){return t.visible}function Cp(t,e,n){let s=Nt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=bt(n,o),s=Ii(s,a,r.snap)):Tt(o,n)&&(a=bt(o,n),s=Ii(s,ke(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=bt(n,o),s=tl(s,a,r.children);else if(Tt(o,n))if(a=bt(o,n),Se(a))s=tl(s,ke(),r.children);else{const l=Ds(r.children,Ee(a));if(l){const c=l.getChild(Fe(a));s=Ii(s,ke(),c)}}}else throw Vs("WriteRecord should have .snap or .children")}}return s}function Ip(t,e,n,s,i){if(!s&&!i){const r=fs(t.visibleWrites,e);if(r!=null)return r;{const o=Mn(t.visibleWrites,e);if(sl(o))return n;if(n==null&&!nl(o,ke()))return null;{const a=n||pe.EMPTY_NODE;return Fs(o,a)}}}else{const r=Mn(t.visibleWrites,e);if(!i&&sl(r))return n;if(!i&&n==null&&!nl(r,ke()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=Cp(t.allWrites,o,e),l=n||pe.EMPTY_NODE;return Fs(a,l)}}}function Qw(t,e,n){let s=pe.EMPTY_NODE;const i=fs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(We,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Mn(t.visibleWrites,e);return n.forEachChild(We,(o,a)=>{const l=Fs(Mn(r,new Pe(o)),a);s=s.updateImmediateChild(o,l)}),nh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Mn(t.visibleWrites,e);return nh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Jw(t,e,n,s,i){le(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=je(e,n);if(nl(t.visibleWrites,r))return null;{const o=Mn(t.visibleWrites,r);return sl(o)?i.getChild(n):Fs(o,i.getChild(n))}}function e0(t,e,n,s){const i=je(e,n),r=fs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Mn(t.visibleWrites,i);return Fs(o,s.getNode().getImmediateChild(n))}else return null}function t0(t,e){return fs(t.visibleWrites,e)}function n0(t,e,n,s,i,r,o){let a;const l=Mn(t.visibleWrites,e),c=fs(l,ke());if(c!=null)a=c;else if(n!=null)a=Fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function s0(){return{visibleWrites:Nt.empty(),allWrites:[],lastWriteId:-1}}function to(t,e,n,s){return Ip(t.writeTree,t.treePath,e,n,s)}function rc(t,e){return Qw(t.writeTree,t.treePath,e)}function sh(t,e,n,s){return Jw(t.writeTree,t.treePath,e,n,s)}function no(t,e){return t0(t.writeTree,je(t.treePath,e))}function i0(t,e,n,s,i,r){return n0(t.writeTree,t.treePath,e,n,s,i,r)}function oc(t,e,n){return e0(t.writeTree,t.treePath,e,n)}function Sp(t,e){return Tp(je(t.treePath,e),t.writeTree)}function Tp(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;le(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),le(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,$i(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ls(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zi(s,e.snapshotNode,i.oldSnap));else throw Vs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const kp=new o0;class ac{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:os(this.viewCache_),r=i0(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(t){return{filter:t}}function l0(t,e){le(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),le(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function c0(t,e,n,s,i){const r=new r0;let o,a;if(n.type===Ot.OVERWRITE){const c=n;c.source.fromUser?o=il(t,e,c.path,c.snap,s,i,r):(le(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Se(c.path),o=so(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ot.MERGE){const c=n;c.source.fromUser?o=h0(t,e,c.path,c.children,s,i,r):(le(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ot.ACK_USER_WRITE){const c=n;c.revert?o=p0(t,e,c.path,s,i,r):o=d0(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ot.LISTEN_COMPLETE)o=f0(t,e,n.path,s,r);else throw Vs("Unknown operation type: "+n.type);const l=r.getChanges();return u0(e,o,l),{viewCache:o,changes:l}}function u0(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=el(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(yp(el(e)))}}function Rp(t,e,n,s,i,r){const o=e.eventCache;if(no(s,n)!=null)return e;{let a,l;if(Se(n))if(le(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=os(e),u=c instanceof pe?c:pe.EMPTY_NODE,h=rc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=to(s,os(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Ee(n);if(c===".priority"){le(Bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=sh(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=sh(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=oc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ci(e,a,o.isFullyInitialized()||Se(n),t.filter.filtersNodes())}}function so(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Se(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=Ee(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const g=Fe(n),b=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,g,kp,null)}const h=wp(e,c,l.isFullyInitialized()||Se(n),u.filtersNodes()),f=new ac(i,h,r);return Rp(t,h,n,i,f,a)}function il(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ac(i,e,r);if(Se(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ci(e,c,!0,t.filter.filtersNodes());else{const h=Ee(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ci(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Fe(n),p=a.getNode().getImmediateChild(h);let g;if(Se(f))g=s;else{const m=u.getCompleteChild(h);m!=null?Yl(f)===".priority"&&m.getChild(dp(f)).isEmpty()?g=m:g=m.updateChild(f,s):g=pe.EMPTY_NODE}if(p.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,f,u,o);l=Ci(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ih(t,e){return t.eventCache.isCompleteForChild(e)}function h0(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=je(n,l);ih(e,Ee(u))&&(a=il(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=je(n,l);ih(e,Ee(u))||(a=il(t,a,u,c,i,r,o))}),a}function rh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function rl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Se(n)?c=s:c=new Ue(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=rh(t,p,f);l=so(t,l,new Pe(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),m=rh(t,g,f);l=so(t,l,new Pe(h),m,i,r,o,a)}}),l}function d0(t,e,n,s,i,r,o){if(no(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Se(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return so(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Se(n)){let c=new Ue(null);return l.getNode().forEachChild(ks,(u,h)=>{c=c.set(new Pe(u),h)}),rl(t,e,n,c,i,r,a,o)}else return e}else{let c=new Ue(null);return s.foreach((u,h)=>{const f=je(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),rl(t,e,n,c,i,r,a,o)}}function f0(t,e,n,s,i){const r=e.serverCache,o=wp(e,r.getNode(),r.isFullyInitialized()||Se(n),r.isFiltered());return Rp(t,o,n,s,kp,i)}function p0(t,e,n,s,i,r){let o;if(no(s,n)!=null)return e;{const a=new ac(s,e,i),l=e.eventCache.getNode();let c;if(Se(n)||Ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=to(s,os(e));else{const h=e.serverCache.getNode();le(h instanceof pe,"serverChildren would be complete if leaf node"),u=rc(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Ee(n);let h=oc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Fe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,pe.EMPTY_NODE,Fe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=to(s,os(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||no(s,ke())!=null,Ci(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Jl(s.getIndex()),r=Nw(s);this.processor_=a0(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(pe.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(pe.EMPTY_NODE,a.getNode(),null),u=new rs(l,o.isFullyInitialized(),i.filtersNodes()),h=new rs(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Lo(h,u),this.eventGenerator_=new $w(this.query_)}get query(){return this.query_}}function m0(t){return t.viewCache_.serverCache.getNode()}function g0(t,e){const n=os(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Se(e)&&!n.getImmediateChild(Ee(e)).isEmpty())?n.getChild(e):null}function oh(t){return t.eventRegistrations_.length===0}function v0(t,e){t.eventRegistrations_.push(e)}function ah(t,e,n){const s=[];if(n){le(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function lh(t,e,n,s){e.type===Ot.MERGE&&e.source.queryId!==null&&(le(os(t.viewCache_),"We should always have a full cache before handling merges"),le(el(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=c0(t.processor_,i,e,n,s);return l0(t.processor_,r.viewCache),le(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,xp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function y0(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(We,(r,o)=>{s.push(Ls(r,o))}),n.isFullyInitialized()&&s.push(yp(n.getNode())),xp(t,s,n.getNode(),e)}function xp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return zw(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class b0{constructor(){this.views=new Map}}function w0(t){le(!io,"__referenceConstructor has already been defined"),io=t}function E0(){return le(io,"Reference.ts has not been loaded"),io}function C0(t){return t.views.size===0}function lc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return le(r!=null,"SyncTree gave us an op for an invalid query."),lh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(lh(o,e,n,s));return r}}function I0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=to(n,i?s:null),l=!1;a?l=!0:s instanceof pe?(a=rc(n,s),l=!1):(a=pe.EMPTY_NODE,l=!1);const c=Lo(new rs(a,l,!1),new rs(s,i,!1));return new _0(e,c)}return o}function S0(t,e,n,s,i,r){const o=I0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),v0(o,n),y0(o,n)}function T0(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=$n(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ah(c,n,s)),oh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ah(l,n,s)),oh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!$n(t)&&r.push(new(E0())(e._repo,e._path)),{removed:r,events:o}}function Ap(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rs(t,e){let n=null;for(const s of t.views.values())n=n||g0(s,e);return n}function Op(t,e){if(e._queryParams.loadsAllData())return Uo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Pp(t,e){return Op(t,e)!=null}function $n(t){return Uo(t)!=null}function Uo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;function k0(t){le(!ro,"__referenceConstructor has already been defined"),ro=t}function R0(){return le(ro,"Reference.ts has not been loaded"),ro}let x0=1;class ch{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=s0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Np(t,e,n,s,i){return Vw(t.pendingWriteTree_,e,n,s,i),i?Ks(t,new is(tc(),e,n)):[]}function A0(t,e,n,s){qw(t.pendingWriteTree_,e,n,s);const i=Ue.fromObject(n);return Ks(t,new Us(tc(),e,i))}function Rn(t,e,n=!1){const s=Gw(t.pendingWriteTree_,e);if(Kw(t.pendingWriteTree_,e)){let r=new Ue(null);return s.snap!=null?r=r.set(ke(),!0):rt(s.children,o=>{r=r.set(new Pe(o),!0)}),Ks(t,new eo(s.path,r,n))}else return[]}function Fo(t,e,n){return Ks(t,new is(nc(),e,n))}function O0(t,e,n){const s=Ue.fromObject(n);return Ks(t,new Us(nc(),e,s))}function P0(t,e){return Ks(t,new Wi(nc(),e))}function N0(t,e,n){const s=uc(t,n);if(s){const i=hc(s),r=i.path,o=i.queryId,a=bt(r,e),l=new Wi(sc(o),a);return dc(t,r,l)}else return[]}function ol(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Pp(o,e))){const l=T0(o,e,n,s);C0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,p)=>$n(p));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=L0(f);for(let g=0;g<p.length;++g){const m=p[g],b=m.query,v=Lp(t,m);t.listenProvider_.startListening(Si(b),oo(t,b),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Si(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(Bo(f));t.listenProvider_.stopListening(Si(f),p)}))}U0(t,c)}return a}function D0(t,e,n,s){const i=uc(t,s);if(i!=null){const r=hc(i),o=r.path,a=r.queryId,l=bt(o,e),c=new is(sc(a),l,n);return dc(t,o,c)}else return[]}function M0(t,e,n,s){const i=uc(t,s);if(i){const r=hc(i),o=r.path,a=r.queryId,l=bt(o,e),c=Ue.fromObject(n),u=new Us(sc(a),l,c);return dc(t,o,u)}else return[]}function uh(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=bt(f,i);r=r||Rs(p,g),o=o||$n(p)});let a=t.syncPointTree_.get(i);a?(o=o||$n(a),r=r||Rs(a,ke())):(a=new b0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=pe.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,g)=>{const m=Rs(g,ke());m&&(r=r.updateImmediateChild(p,m))}));const c=Pp(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Bo(e);le(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=F0();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const u=ic(t.pendingWriteTree_,i);let h=S0(a,e,n,u,r,l);if(!c&&!o&&!s){const f=Op(a,e);h=h.concat(B0(t,e,f))}return h}function cc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=bt(o,e),c=Rs(a,l);if(c)return c});return Ip(i,e,r,n,!0)}function Ks(t,e){return Dp(e,t.syncPointTree_,null,ic(t.pendingWriteTree_,ke()))}function Dp(t,e,n,s){if(Se(t.path))return Mp(t,e,n,s);{const i=e.get(ke());n==null&&i!=null&&(n=Rs(i,ke()));let r=[];const o=Ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sp(s,o);r=r.concat(Dp(a,l,c,u))}return i&&(r=r.concat(lc(i,t,s,n))),r}}function Mp(t,e,n,s){const i=e.get(ke());n==null&&i!=null&&(n=Rs(i,ke()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Mp(u,a,l,c)))}),i&&(r=r.concat(lc(i,t,s,n))),r}function Lp(t,e){const n=e.query,s=oo(t,n);return{hashFn:()=>(m0(e)||pe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?N0(t,n._path,s):P0(t,n._path);{const r=Ob(i,n);return ol(t,n,null,r)}}}}function oo(t,e){const n=Bo(e);return t.queryToTagMap.get(n)}function Bo(t){return t._path.toString()+"$"+t._queryIdentifier}function uc(t,e){return t.tagToQueryMap.get(e)}function hc(t){const e=t.indexOf("$");return le(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Pe(t.substr(0,e))}}function dc(t,e,n){const s=t.syncPointTree_.get(e);le(s,"Missing sync point for query tag that we're tracking");const i=ic(t.pendingWriteTree_,e);return lc(s,n,i,null)}function L0(t){return t.fold((e,n,s)=>{if(n&&$n(n))return[Uo(n)];{let i=[];return n&&(i=Ap(n)),rt(s,(r,o)=>{i=i.concat(o)}),i}})}function Si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(R0())(t._repo,t._path):t}function U0(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Bo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function F0(){return x0++}function B0(t,e,n){const s=e._path,i=oo(t,e),r=Lp(t,n),o=t.listenProvider_.startListening(Si(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)le(!$n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!Se(c)&&u&&$n(u))return[Uo(u).query];{let f=[];return u&&(f=f.concat(Ap(u).map(p=>p.query))),rt(h,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Si(u),oo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fc(n)}node(){return this.node_}}class pc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new pc(this.syncTree_,n)}node(){return cc(this.syncTree_,this.path_)}}const $0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hh=function(t,e,n){if(!t||typeof t!="object")return t;if(le(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return z0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return j0(t[".sv"],e);le(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},z0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:le(!1,"Unexpected server value: "+t)}},j0=function(t,e,n){t.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&le(!1,"Unexpected increment value: "+s);const i=e.node();if(le(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Up=function(t,e,n,s){return _c(e,new pc(n,t),s)},Fp=function(t,e,n){return _c(t,new fc(e),n)};function _c(t,e,n){const s=t.getPriority().val(),i=hh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=hh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,Je(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ze(i))),o.forEachChild(We,(a,l)=>{const c=_c(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gc(t,e){let n=e instanceof Pe?e:new Pe(e),s=t,i=Ee(n);for(;i!==null;){const r=Ds(s.node.children,i)||{children:{},childCount:0};s=new mc(i,s,r),n=Fe(n),i=Ee(n)}return s}function Ys(t){return t.node.value}function Bp(t,e){t.node.value=e,al(t)}function $p(t){return t.node.childCount>0}function W0(t){return Ys(t)===void 0&&!$p(t)}function $o(t,e){rt(t.node.children,(n,s)=>{e(new mc(n,t,s))})}function zp(t,e,n,s){n&&e(t),$o(t,i=>{zp(i,e,!0)})}function H0(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function nr(t){return new Pe(t.parent===null?t.name:nr(t.parent)+"/"+t.name)}function al(t){t.parent!==null&&V0(t.parent,t.name,t)}function V0(t,e,n){const s=W0(n),i=Zt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,al(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,al(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/[\[\].#$\/\u0000-\u001F\u007F]/,G0=/[\[\].#$\u0000-\u001F\u007F]/,ba=10*1024*1024,vc=function(t){return typeof t=="string"&&t.length!==0&&!q0.test(t)},jp=function(t){return typeof t=="string"&&t.length!==0&&!G0.test(t)},K0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jp(t)},Y0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Hl(t)||t&&typeof t=="object"&&Zt(t,".sv")},Z0=function(t,e,n,s){zo(Po(t,"value"),e,n)},zo=function(t,e,n){const s=n instanceof Pe?new hw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(Hl(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>ba/3&&No(e)>ba)throw new Error(t+"contains a string greater than "+ba+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(rt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dw(s,o),zo(t,a,s),fw(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},X0=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Bi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!vc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uw);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Tt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Q0=function(t,e,n,s){const i=Po(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];rt(e,(o,a)=>{const l=new Pe(o);if(zo(i,a,je(n,l)),Yl(l)===".priority"&&!Y0(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),X0(i,r)},Wp=function(t,e,n,s){if(!jp(n))throw new Error(Po(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},J0=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wp(t,e,n)},eE=function(t,e){if(Ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!K0(n))throw new Error(Po(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Zl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hp(t,e,n){jo(t,n),Vp(t,s=>Zl(s,e))}function Dt(t,e,n){jo(t,n),Vp(t,s=>Tt(s,e)||Tt(e,s))}function Vp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(sE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();wi&&st("event: "+n.toString()),Gs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE="repo_interrupt",rE=25;class oE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jr(),this.transactionQueueTree_=new mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aE(t,e,n){if(t.stats_=Gl(t.repoInfo_),t.forceRestClient_||Mb())t.server_=new Qr(t.repoInfo_,(s,i,r,o)=>{dh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ln(t.repoInfo_,e,(s,i,r,o)=>{dh(t,s,i,r,o)},s=>{fh(t,s)},s=>{cE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=$b(t.repoInfo_,()=>new Bw(t.stats_,t.server_)),t.infoData_=new Dw,t.infoSyncTree_=new ch({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Fo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),yc(t,"connected",!1),t.serverSyncTree_=new ch({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function lE(t){const n=t.infoData_.getNode(new Pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wo(t){return $0({timestamp:lE(t)})}function dh(t,e,n,s,i){t.dataUpdateCount++;const r=new Pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=qr(n,c=>Je(c));o=M0(t.serverSyncTree_,r,l,i)}else{const l=Je(n);o=D0(t.serverSyncTree_,r,l,i)}else if(s){const l=qr(n,c=>Je(c));o=O0(t.serverSyncTree_,r,l)}else{const l=Je(n);o=Fo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Bs(t,r)),Dt(t.eventQueue_,a,o)}function fh(t,e){yc(t,"connected",e),e===!1&&dE(t)}function cE(t,e){rt(e,(n,s)=>{yc(t,n,s)})}function yc(t,e,n){const s=new Pe("/.info/"+e),i=Je(n);t.infoData_.updateSnapshot(s,i);const r=Fo(t.infoSyncTree_,s,i);Dt(t.eventQueue_,s,r)}function bc(t){return t.nextWriteId_++}function uE(t,e,n,s,i){Ho(t,"set",{path:e.toString(),value:n,priority:s});const r=Wo(t),o=Je(n,s),a=cc(t.serverSyncTree_,e),l=Fp(o,a,r),c=bc(t),u=Np(t.serverSyncTree_,e,l,c,!0);jo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||mt("set at "+e+" failed: "+f);const m=Rn(t.serverSyncTree_,c,!g);Dt(t.eventQueue_,e,m),ll(t,i,f,p)});const h=Ec(t,e);Bs(t,h),Dt(t.eventQueue_,h,[])}function hE(t,e,n,s){Ho(t,"update",{path:e.toString(),value:n});let i=!0;const r=Wo(t),o={};if(rt(n,(a,l)=>{i=!1,o[a]=Up(je(e,a),Je(l),t.serverSyncTree_,r)}),i)st("update() called with empty data.  Don't do anything."),ll(t,s,"ok",void 0);else{const a=bc(t),l=A0(t.serverSyncTree_,e,o,a);jo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||mt("update at "+e+" failed: "+c);const f=Rn(t.serverSyncTree_,a,!h),p=f.length>0?Bs(t,e):e;Dt(t.eventQueue_,p,f),ll(t,s,c,u)}),rt(n,c=>{const u=Ec(t,je(e,c));Bs(t,u)}),Dt(t.eventQueue_,e,[])}}function dE(t){Ho(t,"onDisconnectEvents");const e=Wo(t),n=Jr();Ja(t.onDisconnect_,ke(),(i,r)=>{const o=Up(i,r,t.serverSyncTree_,e);bp(n,i,o)});let s=[];Ja(n,ke(),(i,r)=>{s=s.concat(Fo(t.serverSyncTree_,i,r));const o=Ec(t,i);Bs(t,o)}),t.onDisconnect_=Jr(),Dt(t.eventQueue_,ke(),s)}function fE(t,e,n){let s;Ee(e._path)===".info"?s=uh(t.infoSyncTree_,e,n):s=uh(t.serverSyncTree_,e,n),Hp(t.eventQueue_,e._path,s)}function pE(t,e,n){let s;Ee(e._path)===".info"?s=ol(t.infoSyncTree_,e,n):s=ol(t.serverSyncTree_,e,n),Hp(t.eventQueue_,e._path,s)}function _E(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iE)}function Ho(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function ll(t,e,n,s){e&&Gs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function qp(t,e,n){return cc(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function wc(t,e=t.transactionQueueTree_){if(e||Vo(t,e),Ys(e)){const n=Kp(t,e);le(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mE(t,nr(e),n)}else $p(e)&&$o(e,n=>{wc(t,n)})}function mE(t,e,n){const s=n.map(c=>c.currentWriteId),i=qp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];le(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=bt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ho(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Rn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Vo(t,gc(t.transactionQueueTree_,e)),wc(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Gs(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{mt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Bs(t,e)}},o)}function Bs(t,e){const n=Gp(t,e),s=nr(n),i=Kp(t,n);return gE(t,i,s),s}function gE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=bt(n,l.path);let u=!1,h;if(le(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rE)u=!0,h="maxretry",i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=qp(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){zo("transaction failed: Data returned ",p,l.path);let g=Je(p);typeof p=="object"&&p!=null&&Zt(p,".priority")||(g=g.updatePriority(f.getPriority()));const b=l.currentWriteId,v=Wo(t),E=Fp(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=E,l.currentWriteId=bc(t),o.splice(o.indexOf(b),1),i=i.concat(Np(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(Rn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",i=i.concat(Rn(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Vo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Gs(s[a]);wc(t,t.transactionQueueTree_)}function Gp(t,e){let n,s=t.transactionQueueTree_;for(n=Ee(e);n!==null&&Ys(s)===void 0;)s=gc(s,n),e=Fe(e),n=Ee(e);return s}function Kp(t,e){const n=[];return Yp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yp(t,e,n){const s=Ys(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);$o(e,i=>{Yp(t,i,n)})}function Vo(t,e){const n=Ys(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Bp(e,n.length>0?n:void 0)}$o(e,s=>{Vo(t,s)})}function Ec(t,e){const n=nr(Gp(t,e)),s=gc(t.transactionQueueTree_,e);return H0(s,i=>{wa(t,i)}),wa(t,s),zp(s,i=>{wa(t,i)}),n}function wa(t,e){const n=Ys(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(le(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(le(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Bp(e,void 0):n.length=r+1,Dt(t.eventQueue_,nr(e),i);for(let o=0;o<s.length;o++)Gs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const ph=function(t,e){const n=bE(t),s=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Tb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Pe(n.pathString)}},bE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=vE(t.substring(u,h)));const f=yE(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class EE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return le(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Cc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Se(this._path)?null:Yl(this._path)}get ref(){return new zn(this._repo,this._path)}get _queryIdentifier(){const e=Ju(this._queryParams),n=Vl(e);return n==="{}"?"default":n}get _queryObject(){return Ju(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Cc))return!1;const n=this._repo===e._repo,s=Zl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cw(this._path)}}class zn extends Cc{constructor(e,n){super(e,n,new ec,!1)}get parent(){const e=dp(this._path);return e===null?null:new zn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ao{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Pe(e),s=cl(this.ref,e);return new ao(this._node.getChild(n),s,We)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ao(i,cl(this.ref,s),We)))}hasChild(e){const n=new Pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function $s(t,e){return t=Ye(t),t._checkNotDeleted("ref"),e!==void 0?cl(t._root,e):t._root}function cl(t,e){return t=Ye(t),Ee(t._path)===null?J0("child","path",e):Wp("child","path",e),new zn(t._repo,je(t._path,e))}function IE(t,e){t=Ye(t),eE("set",t._path),Z0("set",e,t._path);const n=new Xi;return uE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ul(t,e){Q0("update",e,t._path);const n=new Xi;return hE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Ic{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new wE("value",this,new ao(e.snapshotNode,new zn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new EE(this,e,n):null}matches(e){return e instanceof Ic?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function SE(t,e,n,s,i){const r=new CE(n,void 0),o=new Ic(r);return fE(t._repo,t,o),()=>pE(t._repo,t,o)}function TE(t,e,n,s){return SE(t,"value",e)}w0(zn);k0(zn);/**
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
 */const kE="FIREBASE_DATABASE_EMULATOR_HOST",hl={};let RE=!1;function xE(t,e,n,s){t.repoInfo_=new sp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function AE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ph(r,i),a=o.repoInfo,l;typeof process<"u"&&Mu&&(l=Mu[kE]),l?(r=`http://${l}?ns=${a.namespace}`,o=ph(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Ub(t.name,t.options,e);tE("Invalid Firebase Database URL",o),Se(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=PE(a,t,c,new Lb(t.name,n));return new NE(u,t)}function OE(t,e){const n=hl[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_E(t),delete n[t.key]}function PE(t,e,n,s){let i=hl[e.name];i||(i={},hl[e.name]=i);let r=i[t.toURLString()];return r&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oE(t,RE,n,s),i[t.toURLString()]=r,r}class NE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new zn(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(OE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function DE(t=Wl(),e){const n=Do(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Pf("database");s&&ME(n,...s)}return n}function ME(t,e,n,s={}){t=Ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tr(Tr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Mf(s.mockUserToken,t.app.options.projectId);r=new Tr(o)}xE(i,e,n,r)}/**
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
 */function LE(t){bb(hs),ns(new Fn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ht(Lu,Uu,t),Ht(Lu,Uu,"esm2017")}ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LE();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="firebasestorage.googleapis.com",Xp="storageBucket",UE=120*1e3,FE=600*1e3,BE=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends pn{constructor(e,n,s=0){super(Ea(e),`Firebase Storage: ${n} (${Ea(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ea(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function Ea(t){return"storage/"+t}function Sc(){const t="An unknown error occurred, please check the error payload for server response.";return new ze($e.UNKNOWN,t)}function $E(t){return new ze($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function zE(t){return new ze($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function jE(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze($e.UNAUTHENTICATED,t)}function WE(){return new ze($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HE(t){return new ze($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Qp(){return new ze($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Jp(){return new ze($e.CANCELED,"User canceled the upload/download.")}function VE(t){return new ze($e.INVALID_URL,"Invalid URL '"+t+"'.")}function qE(t){return new ze($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function GE(){return new ze($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xp+"' property when initializing the app?")}function e_(){return new ze($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KE(){return new ze($e.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function YE(){return new ze($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZE(t){return new ze($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function dl(t){return new ze($e.INVALID_ARGUMENT,t)}function t_(){return new ze($e.APP_DELETED,"The Firebase app was deleted.")}function XE(t){return new ze($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ti(t,e){return new ze($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function li(t){throw new ze($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=_t.makeFromUrl(e,n)}catch{return new _t(e,"")}if(s.path==="")return s;throw qE(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},m=n===Zp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${b}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:p,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let k=0;k<I.length;k++){const A=I[k],H=A.regex.exec(e);if(H){const j=H[A.indices.bucket];let V=H[A.indices.path];V||(V=""),s=new _t(j,V),A.postModify(s);break}}if(s==null)throw VE(e);return s}}class QE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...b){c||(c=!0,e.apply(null,b))}function h(b){i=setTimeout(()=>{i=null,t(p,l())},b)}function f(){r&&clearTimeout(r)}function p(b,...v){if(c){f();return}if(b){f(),u.call(null,b,...v);return}if(l()||o){f(),u.call(null,b,...v);return}s<64&&(s*=2);let I;a===1?(a=2,I=0):I=(s+Math.random())*1e3,h(I)}let g=!1;function m(b){g||(g=!0,f(),!c&&(i!==null?(b||(a=2),clearTimeout(i),h(0)):b||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function eC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return t!==void 0}function nC(t){return typeof t=="function"}function sC(t){return typeof t=="object"&&!Array.isArray(t)}function qo(t){return typeof t=="string"||t instanceof String}function _h(t){return Tc()&&t instanceof Blob}function Tc(){return typeof Blob<"u"&&!Xv()}function fl(t,e,n,s){if(s<e)throw dl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw dl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function n_(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jn||(Jn={}));/**
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
 */function s_(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new gr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Jn.NO_ERROR,l=r.getStatus();if(!a||s_(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Jn.ABORT;s(!1,new gr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new gr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tC(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Sc();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?t_():Jp();o(l)}else{const l=Qp();o(l)}};this.canceled_?n(!1,new gr(!1,null,!0)):this.backoffId_=JE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function rC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cC(t,e,n,s,i,r,o=!0){const a=n_(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return aC(c,e),rC(c,n),oC(c,r),lC(c,s),new iC(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hC(...t){const e=uC();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Tc())return new Blob(t);throw new ze($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function fC(t){if(typeof atob>"u")throw ZE("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ca{constructor(e,n){this.data=e,this.contentType=n||null}}function pC(t,e){switch(t){case zt.RAW:return new Ca(i_(e));case zt.BASE64:case zt.BASE64URL:return new Ca(r_(t,e));case zt.DATA_URL:return new Ca(mC(e),gC(e))}throw Sc()}function i_(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _C(t){let e;try{e=decodeURIComponent(t)}catch{throw Ti(zt.DATA_URL,"Malformed data URL.")}return i_(e)}function r_(t,e){switch(t){case zt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ti(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ti(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fC(e)}catch(i){throw i.message.includes("polyfill")?i:Ti(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class o_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ti(zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=vC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function mC(t){const e=new o_(t);return e.base64?r_(zt.BASE64,e.rest):_C(e.rest)}function gC(t){return new o_(t).contentType}function vC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){let s=0,i="";_h(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(_h(this.data_)){const s=this.data_,i=dC(s,e,n);return i===null?null:new En(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new En(s,!0)}}static getBlob(...e){if(Tc()){const n=e.map(s=>s instanceof En?s.data_:s);return new En(hC.apply(null,n))}else{const n=e.map(o=>qo(o)?pC(zt.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new En(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t){let e;try{e=JSON.parse(t)}catch{return null}return sC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bC(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function a_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){return e}class dt{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||wC}}let vr=null;function EC(t){return!qo(t)||t.length<2?t:a_(t)}function Rc(){if(vr)return vr;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(r,o){return EC(o)}const n=new dt("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new dt("size");return i.xform=s,t.push(i),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),vr=t,vr}function CC(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new _t(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function IC(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return CC(s,t),s}function l_(t,e,n){const s=kc(e);return s===null?null:IC(t,s,n)}function SC(t,e,n,s){const i=kc(e);if(i===null||!qo(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=ps(f,n,s),g=n_({alt:"media",token:c});return p+g})[0]}function c_(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}/**
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
 */const mh="prefixes",gh="items";function TC(t,e,n){const s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[mh])for(const i of n[mh]){const r=i.replace(/\/$/,""),o=t._makeStorageReference(new _t(e,r));s.prefixes.push(o)}if(n[gh])for(const i of n[gh]){const r=t._makeStorageReference(new _t(e,i.name));s.items.push(r)}return s}function kC(t,e,n){const s=kc(n);return s===null?null:TC(t,e,s)}class jn{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t){if(!t)throw Sc()}function xc(t,e){function n(s,i){const r=l_(t,i,e);return Vt(r!==null),r}return n}function RC(t,e){function n(s,i){const r=kC(t,e,i);return Vt(r!==null),r}return n}function xC(t,e){function n(s,i){const r=l_(t,i,e);return Vt(r!==null),SC(r,i,t.host,t._protocol)}return n}function Zs(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=WE():i=jE():n.getStatus()===402?i=zE(t.bucket):n.getStatus()===403?i=HE(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function Ac(t){const e=Zs(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=$E(t.path)),r.serverResponse=i.serverResponse,r}return n}function u_(t,e,n){const s=e.fullServerUrl(),i=ps(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new jn(i,r,xc(t,n),o);return a.errorHandler=Ac(e),a}function AC(t,e,n,s,i){const r={};e.isRoot?r.prefix="":r.prefix=e.path+"/",n.length>0&&(r.delimiter=n),s&&(r.pageToken=s),i&&(r.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ps(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new jn(a,l,RC(t,e.bucket),c);return u.urlParams=r,u.errorHandler=Zs(e),u}function OC(t,e,n){const s=e.fullServerUrl(),i=ps(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new jn(i,r,xC(t,n),o);return a.errorHandler=Ac(e),a}function PC(t,e){const n=e.fullServerUrl(),s=ps(n,t.host,t._protocol),i="DELETE",r=t.maxOperationRetryTime;function o(l,c){}const a=new jn(s,i,o,r);return a.successCodes=[200,204],a.errorHandler=Ac(e),a}function NC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function h_(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=NC(null,e)),s}function DC(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let k=0;k<2;k++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=h_(e,s,i),u=c_(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=En.getBlob(h,s,f);if(p===null)throw e_();const g={name:c.fullPath},m=ps(r,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,E=new jn(m,b,xc(t,n),v);return E.urlParams=g,E.headers=o,E.body=p.uploadData(),E.errorHandler=Zs(e),E}class lo{constructor(e,n,s,i){this.current=e,this.total=n,this.finalized=!!s,this.metadata=i||null}}function Oc(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Vt(!1)}return Vt(!!n&&(e||["active"]).indexOf(n)!==-1),n}function MC(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o=h_(e,s,i),a={name:o.fullPath},l=ps(r,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=c_(o,n),f=t.maxUploadRetryTime;function p(m){Oc(m);let b;try{b=m.getResponseHeader("X-Goog-Upload-URL")}catch{Vt(!1)}return Vt(qo(b)),b}const g=new jn(l,c,p,f);return g.urlParams=a,g.headers=u,g.body=h,g.errorHandler=Zs(e),g}function LC(t,e,n,s){const i={"X-Goog-Upload-Command":"query"};function r(c){const u=Oc(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Vt(!1)}h||Vt(!1);const f=Number(h);return Vt(!isNaN(f)),new lo(f,s.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new jn(n,o,r,a);return l.headers=i,l.errorHandler=Zs(e),l}const vh=256*1024;function UC(t,e,n,s,i,r,o,a){const l=new lo(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=s.size()),s.size()!==l.total)throw KE();const c=l.total-l.current;let u=c;i>0&&(u=Math.min(u,i));const h=l.current,f=h+u;let p="";u===0?p="finalize":c===u?p="upload, finalize":p="upload";const g={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},m=s.slice(h,f);if(m===null)throw e_();function b(k,A){const H=Oc(k,["active","final"]),j=l.current+u,V=s.size();let B;return H==="final"?B=xc(e,r)(k,A):B=null,new lo(j,V,H==="final",B)}const v="POST",E=e.maxUploadRetryTime,I=new jn(n,v,b,E);return I.headers=g,I.body=m.uploadData(),I.progressCallback=a||null,I.errorHandler=Zs(t),I}const gt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Ia(t){switch(t){case"running":case"pausing":case"canceling":return gt.RUNNING;case"paused":return gt.PAUSED;case"success":return gt.SUCCESS;case"canceled":return gt.CANCELED;case"error":return gt.ERROR;default:return gt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,s){if(nC(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const r=e;this.next=r.next,this.error=r.error,this.complete=r.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class BC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class $C extends BC{initXhr(){this.xhr_.responseType="text"}}function nn(){return new $C}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Rc(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals($e.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const r=this.isExponentialBackoffExpired();if(s_(i.status,[]))if(r)i=Qp();else{this.sleepTime=Math.max(this.sleepTime*2,BE),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals($e.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,r)=>{this._resolve=i,this._reject=r,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=MC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,nn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._uploadUrl=r,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const i=LC(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,nn,n,s);this._request=r,r.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=vh*this._chunkMultiplier,n=new lo(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((i,r)=>{let o;try{o=UC(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,nn,i,r,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){vh*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=u_(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(s,nn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=DC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(s,nn,e,n);this._request=i,i.getPromise().then(r=>{this._request=void 0,this._metadata=r,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Jp(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Ia(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,i){const r=new FC(n||void 0,s||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Ia(this._state)){case gt.SUCCESS:vs(this._resolve.bind(null,this.snapshot))();break;case gt.CANCELED:case gt.ERROR:const n=this._reject;vs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Ia(this._state)){case gt.RUNNING:case gt.PAUSED:e.next&&vs(e.next.bind(e,this.snapshot))();break;case gt.SUCCESS:e.complete&&vs(e.complete.bind(e))();break;case gt.CANCELED:case gt.ERROR:e.error&&vs(e.error.bind(e,this._error))();break;default:e.error&&vs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class as{constructor(e,n){this._service=e,n instanceof _t?this._location=n:this._location=_t.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new as(e,n)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return a_(this._location.path)}get storage(){return this._service}get parent(){const e=yC(this._location.path);if(e===null)return null;const n=new _t(this._location.bucket,e);return new as(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw XE(e)}}function jC(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new zC(t,new En(e),n)}function WC(t){const e={prefixes:[],items:[]};return d_(t,e).then(()=>e)}async function d_(t,e,n){const i=await HC(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await d_(t,e,i.nextPageToken)}function HC(t,e){e!=null&&typeof e.maxResults=="number"&&fl("options.maxResults",1,1e3,e.maxResults);const n=e||{},s=AC(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,nn)}function VC(t){t._throwIfRoot("getMetadata");const e=u_(t.storage,t._location,Rc());return t.storage.makeRequestWithTokens(e,nn)}function qC(t){t._throwIfRoot("getDownloadURL");const e=OC(t.storage,t._location,Rc());return t.storage.makeRequestWithTokens(e,nn).then(n=>{if(n===null)throw YE();return n})}function GC(t){t._throwIfRoot("deleteObject");const e=PC(t.storage,t._location);return t.storage.makeRequestWithTokens(e,nn)}function KC(t,e){const n=bC(t._location.path,e),s=new _t(t._location.bucket,n);return new as(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return/^[A-Za-z]+:\/\//.test(t)}function ZC(t,e){return new as(t,e)}function f_(t,e){if(t instanceof Pc){const n=t;if(n._bucket==null)throw GE();const s=new as(n,n._bucket);return e!=null?f_(s,e):s}else return e!==void 0?KC(t,e):t}function XC(t,e){if(e&&YC(e)){if(t instanceof Pc)return ZC(t,e);throw dl("To use ref(service, url), the first argument must be a Storage instance.")}else return f_(t,e)}function yh(t,e){const n=e?.[Xp];return n==null?null:_t.makeFromBucketSpec(n,t)}function QC(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Mf(i,t.app.options.projectId))}class Pc{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Zp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UE,this._maxUploadRetryTime=FE,this._requests=new Set,i!=null?this._bucket=_t.makeFromBucketSpec(i,this._host):this._bucket=yh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=yh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new as(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new QE(t_());{const o=cC(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const bh="@firebase/storage",wh="0.11.2";/**
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
 */const p_="storage";function Eh(t,e,n){return t=Ye(t),jC(t,e,n)}function JC(t){return t=Ye(t),VC(t)}function Ch(t){return t=Ye(t),WC(t)}function __(t){return t=Ye(t),qC(t)}function e1(t){return t=Ye(t),GC(t)}function pl(t,e){return t=Ye(t),XC(t,e)}function t1(t=Wl(),e){t=Ye(t);const s=Do(t,p_).getImmediate({identifier:e}),i=Pf("storage");return i&&n1(s,...i),s}function n1(t,e,n,s={}){QC(t,e,n,s)}function s1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pc(n,s,i,e,hs)}function i1(){ns(new Fn(p_,s1,"PUBLIC").setMultipleInstances(!0)),Ht(bh,wh,""),Ht(bh,wh,"esm2017")}i1();const r1={apiKey:"AIzaSyBOdd12L5VTc_1QuyuE5vO4EBeR_rQ3sSQ",authDomain:"test-request-form.firebaseapp.com",databaseURL:"https://test-request-form-default-rtdb.firebaseio.com",projectId:"test-request-form",storageBucket:"test-request-form.appspot.com",messagingSenderId:"491893541154",appId:"1:491893541154:web:67718278b1dc6666d6bd7b"},m_=$f(r1),zs=DE(m_),_l=t1(m_),sr=Ao("data",()=>{const t=v=>{const E=parseFloat(v);if(isNaN(E))return v||"";{const I=new Date;I.setDate(I.getDate()+E);const k=I.getMonth()+1,A=I.getDate();return`${k}/${A}`}},e=ye([]),n=ye([]),s=ye([]),i=ye([]),r=async()=>{[{ref:$s(zs,"/banner"),unfinished:e,finished:n},{ref:$s(zs,"/retouch"),unfinished:s,finished:i}].forEach(({ref:E,unfinished:I,finished:k})=>{TE(E,A=>{const H=A.val()||{},j=Object.values(H),V=[],B=[];j.forEach(Z=>{Z.completed==="false"?V.unshift(Z):Z.post==="false"&&B.unshift(Z)}),I.value=V,k.value=B})})},o=ye(0),a=ye(0),l=ye(0),c=ye(0),u=ye(5),h=(v,E,I,k)=>{E.value=Math.max(Math.ceil(k/u.value)-1,0);let A=I>E.value?E.value:I;A=A<0?0:A,v.value=A},f=(v,E)=>{if(!v||!v.length)return[];const I=E*u.value,k=I+u.value;return v.slice(I,k)},p=()=>{h(o,a,o.value+1,e.value.length)},g=()=>{h(o,a,o.value-1,e.value.length)},m=()=>{h(l,c,l.value+1,s.value.length)},b=()=>{h(l,c,l.value-1,s.value.length)};return Qn(e,v=>{h(o,a,o.value,v.length)}),Qn(s,v=>{h(l,c,l.value,v.length)}),{getDate:t,unfinishedBanners:e,finishedBanners:n,unfinishedRetouches:s,finishedRetouches:i,getRequestData:r,getPagedItems:f,bannerPage:o,bannerMaxPage:a,retouchPage:l,retouchMaxPage:c,nextBanner:p,prevBanner:g,nextRetouch:m,prevRetouch:b}}),o1={key:0,class:"btnBox text-center"},a1={__name:"App",setup(t){const e=sr();return Gd(()=>{e.getRequestData()}),(n,s)=>{const i=Jc("router-link"),r=Jc("router-view");return we(),Ie(Qe,null,[n.$route.meta.showNav!==!1?(we(),Ie("div",o1,[it(i,{to:"/",class:"btn btn-primary mx-2"},{default:Er(()=>[...s[0]||(s[0]=[Re("バナー依頼",-1)])]),_:1}),it(i,{to:"/retouch",class:"btn btn-warning mx-2"},{default:Er(()=>[...s[1]||(s[1]=[Re("レタッチ依頼",-1)])]),_:1}),it(i,{to:"/manager-page",class:"btn btn-success mx-2"},{default:Er(()=>[...s[2]||(s[2]=[Re("依頼管理",-1)])]),_:1})])):kn("",!0),it(r)],64)}}};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof window<"u";function l1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Sa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Mt(i)?i.map(t):t(i)}return n}const ki=()=>{},Mt=Array.isArray,c1=/\/$/,u1=t=>t.replace(c1,"");function Ta(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=p1(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function h1(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d1(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&js(e.matched[s],n.matched[i])&&g_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function g_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!f1(t[n],e[n]))return!1;return!0}function f1(t,e){return Mt(t)?Sh(t,e):Mt(e)?Sh(e,t):t===e}function Sh(t,e){return Mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function p1(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Hi;(function(t){t.pop="pop",t.push="push"})(Hi||(Hi={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function _1(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u1(t)}const m1=/^[^#]+#/;function g1(t,e){return t.replace(m1,"#")+e}function v1(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Go=()=>({left:window.pageXOffset,top:window.pageYOffset});function y1(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=v1(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Th(t,e){return(history.state?history.state.position-e:-1)+t}const ml=new Map;function b1(t,e){ml.set(t,e)}function w1(t){const e=ml.get(t);return ml.delete(t),e}let E1=()=>location.protocol+"//"+location.host;function v_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Ih(l,"")}return Ih(n,t)+s+i}function C1(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const p=v_(t,location),g=n.value,m=e.value;let b=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}b=m?f.position-m.position:0}else s(p);i.forEach(v=>{v(n.value,g,{delta:b,type:Hi.pop,direction:b?b>0?Ri.forward:Ri.back:Ri.unknown})})};function l(){o=n.value}function c(f){i.push(f);const p=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return r.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ae({},f.state,{scroll:Go()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function kh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Go():null}}function I1(t){const{history:e,location:n}=window,s={value:v_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:E1()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ae({},e.state,kh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ae({},i.value,e.state,{forward:l,scroll:Go()});r(u.current,u,!0);const h=Ae({},kh(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function S1(t){t=_1(t);const e=I1(t),n=C1(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ae({location:"",base:t,go:s,createHref:g1.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function T1(t){return typeof t=="string"||t&&typeof t=="object"}function y_(t){return typeof t=="string"||typeof t=="symbol"}const _n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},b_=Symbol("");var Rh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rh||(Rh={}));function Ws(t,e){return Ae(new Error,{type:t,[b_]:!0},e)}function Qt(t,e){return t instanceof Error&&b_ in t&&(e==null||!!(t.type&e))}const xh="[^/]+?",k1={sensitive:!1,strict:!1,start:!0,end:!0},R1=/[.+*?^${}()[\]/\\]/g;function x1(t,e){const n=Ae({},k1,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(R1,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:m,optional:b,regexp:v}=f;r.push({name:g,repeatable:m,optional:b});const E=v||xh;if(E!==xh){p+=10;try{new RegExp(`(${E})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+k.message)}}let I=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(I=b&&c.length<2?`(?:/${I})`:"/"+I),b&&(I+="?"),i+=I,p+=20,b&&(p+=-8),m&&(p+=-20),E===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=r[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:b}=p,v=g in c?c[g]:"";if(Mt(v)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Mt(v)?v.join("/"):v;if(!E)if(b)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function A1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function O1(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=A1(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ah(s))return 1;if(Ah(i))return-1}return i.length-s.length}function Ah(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P1={type:0,value:""},N1=/[a-zA-Z0-9_]/;function D1(t){if(!t)return[[]];if(t==="/")return[[P1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:N1.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function M1(t,e,n){const s=x1(D1(t.path),n),i=Ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function L1(t,e){const n=[],s=new Map;e=Nh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const p=!f,g=U1(u);g.aliasOf=f&&f.record;const m=Nh(e,u),b=[g];if("alias"in u){const I=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of I)b.push(Ae({},g,{components:f?f.record.components:g.components,path:k,aliasOf:f?f.record:g}))}let v,E;for(const I of b){const{path:k}=I;if(h&&k[0]!=="/"){const A=h.record.path,H=A[A.length-1]==="/"?"":"/";I.path=h.record.path+(k&&H+k)}if(v=M1(I,h,m),f?f.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),p&&u.name&&!Ph(v)&&o(u.name)),g.children){const A=g.children;for(let H=0;H<A.length;H++)r(A[H],v,f&&f.children[H])}f=f||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return E?()=>{o(E)}:ki}function o(u){if(y_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&O1(u,n[h])>=0&&(u.record.path!==n[h].record.path||!w_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Ph(u)&&s.set(u.record.name,u)}function c(u,h){let f,p={},g,m;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ws(1,{location:u});m=f.record.name,p=Ae(Oh(h.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Oh(u.params,f.keys.map(E=>E.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(E=>E.re.test(g)),f&&(p=f.parse(g),m=f.record.name);else{if(f=h.name?s.get(h.name):n.find(E=>E.re.test(h.path)),!f)throw Ws(1,{location:u,currentLocation:h});m=f.record.name,p=Ae({},h.params,u.params),g=f.stringify(p)}const b=[];let v=f;for(;v;)b.unshift(v.record),v=v.parent;return{name:m,path:g,params:p,matched:b,meta:B1(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Oh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function U1(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:F1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function F1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ph(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B1(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Nh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function w_(t,e){return e.children.some(n=>n===t||w_(t,n))}const E_=/#/g,$1=/&/g,z1=/\//g,j1=/=/g,W1=/\?/g,C_=/\+/g,H1=/%5B/g,V1=/%5D/g,I_=/%5E/g,q1=/%60/g,S_=/%7B/g,G1=/%7C/g,T_=/%7D/g,K1=/%20/g;function Nc(t){return encodeURI(""+t).replace(G1,"|").replace(H1,"[").replace(V1,"]")}function Y1(t){return Nc(t).replace(S_,"{").replace(T_,"}").replace(I_,"^")}function gl(t){return Nc(t).replace(C_,"%2B").replace(K1,"+").replace(E_,"%23").replace($1,"%26").replace(q1,"`").replace(S_,"{").replace(T_,"}").replace(I_,"^")}function Z1(t){return gl(t).replace(j1,"%3D")}function X1(t){return Nc(t).replace(E_,"%23").replace(W1,"%3F")}function Q1(t){return t==null?"":X1(t).replace(z1,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function J1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(C_," "),o=r.indexOf("="),a=co(o<0?r:r.slice(0,o)),l=o<0?null:co(r.slice(o+1));if(a in e){let c=e[a];Mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Dh(t){let e="";for(let n in t){const s=t[n];if(n=Z1(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(s)?s.map(r=>r&&gl(r)):[s&&gl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function eI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const tI=Symbol(""),Mh=Symbol(""),Dc=Symbol(""),k_=Symbol(""),vl=Symbol("");function ci(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):T1(h)?a(Ws(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ka(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(nI(a)){const c=(a.__vccOpts||a)[e];c&&i.push(bn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=l1(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&bn(f,n,s,r,o)()}))}}return i}function nI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lh(t){const e=Wt(Dc),n=Wt(k_),s=St(()=>e.resolve(W(t.to))),i=St(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(js.bind(null,u));if(f>-1)return f;const p=Uh(l[c-2]);return c>1&&Uh(u)===p&&h[h.length-1].path!==p?h.findIndex(js.bind(null,l[c-2])):f}),r=St(()=>i.value>-1&&oI(n.params,s.value.params)),o=St(()=>i.value>-1&&i.value===n.matched.length-1&&g_(n.params,s.value.params));function a(l={}){return rI(l)?e[W(t.replace)?"replace":"push"](W(t.to)).catch(ki):Promise.resolve()}return{route:s,href:St(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const sI=Wd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lh,setup(t,{slots:e}){const n=us(Lh(t)),{options:s}=Wt(Dc),i=St(()=>({[Fh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Fh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:vf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),iI=sI;function rI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Uh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fh=(t,e,n)=>t??e??n,aI=Wd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Wt(vl),i=St(()=>t.route||s.value),r=Wt(Mh,0),o=St(()=>{let c=W(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=St(()=>i.value.matched[o.value]);Cr(Mh,St(()=>o.value+1)),Cr(tI,a),Cr(vl,i);const l=ye();return Qn(()=>[l.value,a.value,t.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!js(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Bh(n.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=vf(f,Ae({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bh(n.default,{Component:b,route:c})||b}}});function Bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lI=aI;function cI(t){const e=L1(t.routes,t),n=t.parseQuery||J1,s=t.stringifyQuery||Dh,i=t.history,r=ci(),o=ci(),a=ci(),l=Hm(_n);let c=_n;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Sa.bind(null,X=>""+X),h=Sa.bind(null,Q1),f=Sa.bind(null,co);function p(X,te){let ee,re;return y_(X)?(ee=e.getRecordMatcher(X),re=te):re=X,e.addRoute(re,ee)}function g(X){const te=e.getRecordMatcher(X);te&&e.removeRoute(te)}function m(){return e.getRoutes().map(X=>X.record)}function b(X){return!!e.getRecordMatcher(X)}function v(X,te){if(te=Ae({},te||l.value),typeof X=="string"){const d=Ta(n,X,te.path),O=e.resolve({path:d.path},te),R=i.createHref(d.fullPath);return Ae(d,O,{params:f(O.params),hash:co(d.hash),redirectedFrom:void 0,href:R})}let ee;if("path"in X)ee=Ae({},X,{path:Ta(n,X.path,te.path).path});else{const d=Ae({},X.params);for(const O in d)d[O]==null&&delete d[O];ee=Ae({},X,{params:h(d)}),te.params=h(te.params)}const re=e.resolve(ee,te),he=X.hash||"";re.params=u(f(re.params));const S=h1(s,Ae({},X,{hash:Y1(he),path:re.path})),x=i.createHref(S);return Ae({fullPath:S,hash:he,query:s===Dh?eI(X.query):X.query||{}},re,{redirectedFrom:void 0,href:x})}function E(X){return typeof X=="string"?Ta(n,X,l.value.path):Ae({},X)}function I(X,te){if(c!==X)return Ws(8,{from:te,to:X})}function k(X){return j(X)}function A(X){return k(Ae(E(X),{replace:!0}))}function H(X){const te=X.matched[X.matched.length-1];if(te&&te.redirect){const{redirect:ee}=te;let re=typeof ee=="function"?ee(X):ee;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=E(re):{path:re},re.params={}),Ae({query:X.query,hash:X.hash,params:"path"in re?{}:X.params},re)}}function j(X,te){const ee=c=v(X),re=l.value,he=X.state,S=X.force,x=X.replace===!0,d=H(ee);if(d)return j(Ae(E(d),{state:typeof d=="object"?Ae({},he,d.state):he,force:S,replace:x}),te||ee);const O=ee;O.redirectedFrom=te;let R;return!S&&d1(s,re,ee)&&(R=Ws(16,{to:O,from:re}),$(re,re,!0,!1)),(R?Promise.resolve(R):Z(O,re)).catch(y=>Qt(y)?Qt(y,2)?y:ne(y):K(y,O,re)).then(y=>{if(y){if(Qt(y,2))return j(Ae({replace:x},E(y.to),{state:typeof y.to=="object"?Ae({},he,y.to.state):he,force:S}),te||O)}else y=P(O,re,!0,x,he);return se(O,re,y),y})}function V(X,te){const ee=I(X,te);return ee?Promise.reject(ee):Promise.resolve()}function B(X){const te=oe.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(X):X()}function Z(X,te){let ee;const[re,he,S]=uI(X,te);ee=ka(re.reverse(),"beforeRouteLeave",X,te);for(const d of re)d.leaveGuards.forEach(O=>{ee.push(bn(O,X,te))});const x=V.bind(null,X,te);return ee.push(x),ve(ee).then(()=>{ee=[];for(const d of r.list())ee.push(bn(d,X,te));return ee.push(x),ve(ee)}).then(()=>{ee=ka(he,"beforeRouteUpdate",X,te);for(const d of he)d.updateGuards.forEach(O=>{ee.push(bn(O,X,te))});return ee.push(x),ve(ee)}).then(()=>{ee=[];for(const d of S)if(d.beforeEnter)if(Mt(d.beforeEnter))for(const O of d.beforeEnter)ee.push(bn(O,X,te));else ee.push(bn(d.beforeEnter,X,te));return ee.push(x),ve(ee)}).then(()=>(X.matched.forEach(d=>d.enterCallbacks={}),ee=ka(S,"beforeRouteEnter",X,te),ee.push(x),ve(ee))).then(()=>{ee=[];for(const d of o.list())ee.push(bn(d,X,te));return ee.push(x),ve(ee)}).catch(d=>Qt(d,8)?d:Promise.reject(d))}function se(X,te,ee){a.list().forEach(re=>B(()=>re(X,te,ee)))}function P(X,te,ee,re,he){const S=I(X,te);if(S)return S;const x=te===_n,d=bs?history.state:{};ee&&(re||x?i.replace(X.fullPath,Ae({scroll:x&&d&&d.scroll},he)):i.push(X.fullPath,he)),l.value=X,$(X,te,ee,x),ne()}let Y;function _(){Y||(Y=i.listen((X,te,ee)=>{const re=v(X),he=H(re);if(he){j(Ae(he,{replace:!0}),re).catch(ki);return}c=re;const S=l.value;bs&&b1(Th(S.fullPath,ee.delta),Go()),Z(re,S).catch(x=>Qt(x,12)?x:Qt(x,2)?(j(x.to,re).then(d=>{Qt(d,20)&&!ee.delta&&ee.type===Hi.pop&&i.go(-1,!1)}).catch(ki),Promise.reject()):(ee.delta&&i.go(-ee.delta,!1),K(x,re,S))).then(x=>{x=x||P(re,S,!1),x&&(ee.delta&&!Qt(x,8)?i.go(-ee.delta,!1):ee.type===Hi.pop&&Qt(x,20)&&i.go(-1,!1)),se(re,S,x)}).catch(ki)}))}let U=ci(),q=ci(),D;function K(X,te,ee){ne(X);const re=q.list();return re.length?re.forEach(he=>he(X,te,ee)):console.error(X),Promise.reject(X)}function G(){return D&&l.value!==_n?Promise.resolve():new Promise((X,te)=>{U.add([X,te])})}function ne(X){return D||(D=!X,_(),U.list().forEach(([te,ee])=>X?ee(X):te()),U.reset()),X}function $(X,te,ee,re){const{scrollBehavior:he}=t;if(!bs||!he)return Promise.resolve();const S=!ee&&w1(Th(X.fullPath,0))||(re||!ee)&&history.state&&history.state.scroll||null;return Nl().then(()=>he(X,te,S)).then(x=>x&&y1(x)).catch(x=>K(x,X,te))}const F=X=>i.go(X);let ce;const oe=new Set,ie={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:b,getRoutes:m,resolve:v,options:t,push:k,replace:A,go:F,back:()=>F(-1),forward:()=>F(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:G,install(X){const te=this;X.component("RouterLink",iI),X.component("RouterView",lI),X.config.globalProperties.$router=te,Object.defineProperty(X.config.globalProperties,"$route",{enumerable:!0,get:()=>W(l)}),bs&&!ce&&l.value===_n&&(ce=!0,k(i.location).catch(he=>{}));const ee={};for(const he in _n)Object.defineProperty(ee,he,{get:()=>l.value[he],enumerable:!0});X.provide(Dc,te),X.provide(k_,Dd(ee)),X.provide(vl,l);const re=X.unmount;oe.add(X),X.unmount=function(){oe.delete(X),oe.size<1&&(c=_n,Y&&Y(),Y=null,l.value=_n,ce=!1,D=!1),re()}}};function ve(X){return X.reduce((te,ee)=>te.then(()=>B(ee)),Promise.resolve())}return ie}function uI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>js(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>js(c,l))||i.push(l))}return[n,s,i]}function Mc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function R_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hI=R_,x_=new Qi("auth","Firebase",R_());/**
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
 */const uo=new zl("@firebase/auth");function dI(t,...e){uo.logLevel<=Oe.WARN&&uo.warn(`Auth (${hs}): ${t}`,...e)}function kr(t,...e){uo.logLevel<=Oe.ERROR&&uo.error(`Auth (${hs}): ${t}`,...e)}/**
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
 */function Lt(t,...e){throw Lc(t,...e)}function qt(t,...e){return Lc(t,...e)}function fI(t,e,n){const s=Object.assign(Object.assign({},hI()),{[e]:n});return new Qi("auth","Firebase",s).create(e,{appName:t.name})}function Lc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return x_.create(t,...e)}function _e(t,e,...n){if(!t)throw Lc(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kr(e),new Error(e)}function dn(t,e){t||rn(e)}/**
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
 */function yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pI(){return $h()==="http:"||$h()==="https:"}function $h(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _I(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pI()||Qv()||"connection"in navigator)?navigator.onLine:!0}function mI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=$l()||Lf()}get(){return _I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uc(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class A_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vI=new ir(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,i={}){return O_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=qs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),A_.fetch()(P_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function O_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},gI),e);try{const i=new yI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw yr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fI(t,u,c);Lt(t,u)}}catch(i){if(i instanceof pn)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function Ko(t,e,n,s,i={}){const r=await Xs(t,e,n,s,i);return"mfaPendingCredential"in r&&Lt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function P_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Uc(t.config,i):`${t.config.apiScheme}://${i}`}class yI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qt(this.auth,"network-request-failed")),vI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=qt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function bI(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function wI(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EI(t,e=!1){const n=Ye(t),s=await n.getIdToken(e),i=Fc(s);_e(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:xi(Ra(i.auth_time)),issuedAtTime:xi(Ra(i.iat)),expirationTime:xi(Ra(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ra(t){return Number(t)*1e3}function Fc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return kr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vr(n);return i?JSON.parse(i):(kr("Failed to decode base64 JWT payload"),null)}catch(i){return kr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function CI(t){const e=Fc(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof pn&&II(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function II({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class N_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Vi(t,wI(n,{idToken:s}));_e(i?.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?RI(r.providerUserInfo):[],a=kI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!a?.length,u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new N_(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function TI(t){const e=Ye(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function RI(t){return t.map(e=>{var{providerId:n}=e,s=Mc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xI(t,e){const n=await O_(t,{},async()=>{const s=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=P_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _e(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await xI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new qi;return s&&(_e(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(_e(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(_e(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function mn(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new N_(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Vi(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EI(this,e)}reload(){return TI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vi(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:k,isAnonymous:A,providerData:H,stsTokenManager:j}=n;_e(I&&j,e,"internal-error");const V=qi.fromJSON(this.name,j);_e(typeof I=="string",e,"internal-error"),mn(h,e.name),mn(f,e.name),_e(typeof k=="boolean",e,"internal-error"),_e(typeof A=="boolean",e,"internal-error"),mn(p,e.name),mn(g,e.name),mn(m,e.name),mn(b,e.name),mn(v,e.name),mn(E,e.name);const B=new es({uid:I,auth:e,email:f,emailVerified:k,displayName:h,isAnonymous:A,photoURL:g,phoneNumber:p,tenantId:m,stsTokenManager:V,createdAt:v,lastLoginAt:E});return H&&Array.isArray(H)&&(B.providerData=H.map(Z=>Object.assign({},Z))),b&&(B._redirectEventId=b),B}static async _fromIdTokenResponse(e,n,s=!1){const i=new qi;i.updateFromServerResponse(n);const r=new es({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ho(r),r}}/**
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
 */const zh=new Map;function on(t){dn(t instanceof Function,"Expected a class definition");let e=zh.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zh.set(t,e),e)}/**
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
 */class D_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D_.type="NONE";const jh=D_;/**
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
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Rr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Rr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(on(jh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||on(jh);const o=Rr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=es._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xs(r,e,s))}}/**
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
 */function Wh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(M_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B_(e))return"Blackberry";if($_(e))return"Webos";if(Bc(e))return"Safari";if((e.includes("chrome/")||L_(e))&&!e.includes("edge/"))return"Chrome";if(F_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function M_(t=ht()){return/firefox\//i.test(t)}function Bc(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L_(t=ht()){return/crios\//i.test(t)}function U_(t=ht()){return/iemobile/i.test(t)}function F_(t=ht()){return/android/i.test(t)}function B_(t=ht()){return/blackberry/i.test(t)}function $_(t=ht()){return/webos/i.test(t)}function Yo(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AI(t=ht()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OI(){return Jv()&&document.documentMode===10}function z_(t=ht()){return Yo(t)||F_(t)||$_(t)||B_(t)||/windows phone/i.test(t)||U_(t)}function PI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function j_(t,e=[]){let n;switch(t){case"Browser":n=Wh(ht());break;case"Worker":n=`${Wh(ht())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${s}`}async function W_(t,e){return Xs(t,"GET","/v2/recaptchaConfig",rr(t,e))}function Hh(t){return t!==void 0&&t.enterprise!==void 0}class H_{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function NI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function V_(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=qt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",NI().appendChild(s)})}function DI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MI="https://www.google.com/recaptcha/enterprise.js?render=",LI="recaptcha-enterprise",UI="NO_RECAPTCHA";class q_{constructor(e){this.type=LI,this.auth=or(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{W_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new H_(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Hh(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(UI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Hh(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}V_(MI+a).then(()=>{i(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Vh(t,e,n,s=!1){const i=new q_(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class FI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */class BI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qh(this),this.idTokenSubscription=new qh(this),this.beforeStateQueue=new FI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}async initializeRecaptchaConfig(){const e=await W_(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new H_(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new q_(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _e(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&dI(`Error while retrieving App Check token: ${n.error}`),n?.token}}function or(t){return Ye(t)}class qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=cy(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function $I(t,e){const n=Do(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Gr(r,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function zI(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(on);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function jI(t,e,n){const s=or(t);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=G_(e),{host:o,port:a}=WI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),HI()}function G_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WI(t){const e=G_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Gh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Gh(o)}}}function Gh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function HI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $c{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function VI(t,e){return Xs(t,"POST","/v1/accounts:update",e)}/**
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
 */async function xa(t,e){return Ko(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}/**
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
 */async function qI(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function GI(t,e){return Ko(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
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
 */class Gi extends $c{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Gi(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gi(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Vh(e,s,"signInWithPassword");return xa(e,i)}else return xa(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Vh(e,s,"signInWithPassword");return xa(e,r)}else return Promise.reject(i)});case"emailLink":return qI(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return VI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return GI(e,{idToken:n,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function As(t,e){return Ko(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
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
 */const KI="http://localhost";class ls extends $c{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Mc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ls(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:KI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qs(n)}return e}}/**
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
 */function YI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZI(t){const e=hi(di(t)).link,n=e?hi(di(e)).deep_link_id:null,s=hi(di(t)).deep_link_id;return(s?hi(di(s)).link:null)||s||n||e||t}class zc{constructor(e){var n,s,i,r,o,a;const l=hi(di(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=YI((i=l.mode)!==null&&i!==void 0?i:null);_e(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZI(e);try{return new zc(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return Gi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=zc.parseLink(n);return _e(s,"argument-error"),Gi._fromEmailAndCode(e,s.code,s.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ar extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends ar{constructor(){super("facebook.com")}static credential(e){return ls._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class In extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ls._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Sn extends ar{constructor(){super("github.com")}static credential(e){return ls._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
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
 */class Tn extends ar{constructor(){super("twitter.com")}static credential(e,n){return ls._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */class Hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await es._fromIdTokenResponse(e,s,i),o=Kh(s);return new Hs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Kh(s);return new Hs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Kh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fo extends pn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new fo(e,n,s,i)}}function Y_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(t,r,e,s):r})}async function XI(t,e,n=!1){const s=await Vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hs._forOperation(t,"link",s)}/**
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
 */async function QI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Vi(t,Y_(s,i,e,t),n);_e(r.idToken,s,"internal-error");const o=Fc(r.idToken);_e(o,s,"internal-error");const{sub:a}=o;return _e(t.uid===a,s,"user-mismatch"),Hs._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&Lt(s,"user-mismatch"),r}}/**
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
 */async function Z_(t,e,n=!1){const s="signIn",i=await Y_(t,s,e),r=await Hs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function JI(t,e){return Z_(or(t),e)}function eS(t,e,n){return JI(Ye(t),Qs.credential(e,n))}/**
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
 */function tS(t,e){return Ye(t).setPersistence(e)}function nS(t,e,n,s){return Ye(t).onIdTokenChanged(e,n,s)}function sS(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}const po="__sak";/**
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
 */class X_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iS(){const t=ht();return Bc(t)||Yo(t)}const rS=1e3,oS=10;class Q_ extends X_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iS()&&PI(),this.fallbackToPolling=z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);OI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oS):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Q_.type="LOCAL";const aS=Q_;/**
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
 */class J_ extends X_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}J_.type="SESSION";const jc=J_;/**
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
 */function lS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Zo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await lS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
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
 */function Wc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Wc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gt(){return window}function uS(t){Gt().location.href=t}/**
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
 */function em(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function hS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dS(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fS(){return em()?self:null}/**
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
 */const tm="firebaseLocalStorageDb",pS=1,_o="firebaseLocalStorage",nm="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([_o],e?"readwrite":"readonly").objectStore(_o)}function _S(){const t=indexedDB.deleteDatabase(tm);return new lr(t).toPromise()}function bl(){const t=indexedDB.open(tm,pS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_o,{keyPath:nm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_o)?e(s):(s.close(),await _S(),e(await bl()))})})}async function Yh(t,e,n){const s=Xo(t,!0).put({[nm]:e,value:n});return new lr(s).toPromise()}async function mS(t,e){const n=Xo(t,!1).get(e),s=await new lr(n).toPromise();return s===void 0?null:s.value}function Zh(t,e){const n=Xo(t,!0).delete(e);return new lr(n).toPromise()}const gS=800,vS=3;class sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return em()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(fS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hS(),!this.activeServiceWorker)return;this.sender=new cS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await Yh(e,po,"1"),await Zh(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Xo(i,!1).getAll();return new lr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sm.type="LOCAL";const yS=sm;new ir(3e4,6e4);/**
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
 */function bS(t,e){return e?on(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hc extends $c{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wS(t){return Z_(t.auth,new Hc(t),t.bypassAuthState)}function ES(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),QI(n,new Hc(t),t.bypassAuthState)}async function CS(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),XI(n,new Hc(t),t.bypassAuthState)}/**
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
 */class im{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wS;case"linkViaPopup":case"linkViaRedirect":return CS;case"reauthViaPopup":case"reauthViaRedirect":return ES;default:Lt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IS=new ir(2e3,1e4);class Es extends im{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Wc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IS.get())};e()}}Es.currentPopupAction=null;/**
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
 */const SS="pendingRedirect",xr=new Map;class TS extends im{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const s=await kS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kS(t,e){const n=AS(e),s=xS(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function RS(t,e){xr.set(t._key(),e)}function xS(t){return on(t._redirectPersistence)}function AS(t){return Rr(SS,t.config.apiKey,t.name)}async function OS(t,e,n=!1){const s=or(t),i=bS(s,e),o=await new TS(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const PS=600*1e3;class NS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}}function Xh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rm({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function DS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rm(t);default:return!1}}/**
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
 */async function MS(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
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
 */const LS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,US=/^https?/;async function FS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MS(t);for(const n of e)try{if(BS(n))return}catch{}Lt(t,"unauthorized-domain")}function BS(t){const e=yl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!US.test(n))return!1;if(LS.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $S=new ir(3e4,6e4);function Qh(){const t=Gt().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zS(t){return new Promise((e,n)=>{var s,i,r;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(qt(t,"network-request-failed"))},timeout:$S.get()})}if(!((i=(s=Gt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Gt().gapi)===null||r===void 0)&&r.load)o();else{const a=DI("iframefcb");return Gt()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},V_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ar=null,e})}let Ar=null;function jS(t){return Ar=Ar||zS(t),Ar}/**
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
 */const WS=new ir(5e3,15e3),HS="__/auth/iframe",VS="emulator/auth/iframe",qS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KS(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uc(e,VS):`https://${t.config.authDomain}/${HS}`,s={apiKey:e.apiKey,appName:t.name,v:hs},i=GS.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${qs(s).slice(1)}`}async function YS(t){const e=await jS(t),n=Gt().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:KS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qS,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Gt().setTimeout(()=>{r(o)},WS.get());function l(){Gt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ZS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XS=500,QS=600,JS="_blank",eT="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tT(t,e,n,s=XS,i=QS){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZS),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ht().toLowerCase();n&&(a=L_(c)?JS:n),M_(c)&&(e=e||eT,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(AI(c)&&a!=="_self")return nT(e||"",a),new Jh(null);const h=window.open(e||"",a,u);_e(h,t,"popup-blocked");try{h.focus()}catch{}return new Jh(h)}function nT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const sT="__/auth/handler",iT="emulator/auth/handler",rT=encodeURIComponent("fac");async function ed(t,e,n,s,i,r){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hs,eventId:i};if(e instanceof K_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ha(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof ar){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rT}=${encodeURIComponent(l)}`:"";return`${oT(t)}?${qs(a).slice(1)}${c}`}function oT({config:t}){return t.emulator?Uc(t,iT):`https://${t.authDomain}/${sT}`}/**
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
 */const Aa="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jc,this._completeRedirectFn=OS,this._overrideRedirectResult=RS}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ed(e,n,s,yl(),i);return tT(e,o,Wc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ed(e,n,s,yl(),i);return uS(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await YS(e),s=new NS(e);return n.register("authEvent",i=>(_e(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Aa,{type:Aa},i=>{var r;const o=(r=i?.[0])===null||r===void 0?void 0:r[Aa];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return z_()||Bc()||Yo()}}const lT=aT;var td="@firebase/auth",nd="0.23.2";/**
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
 */class cT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hT(t){ns(new Fn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j_(t)},c=new BI(s,i,r,l);return zI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ns(new Fn("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(s=>new cT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(td,nd,uT(t)),Ht(td,nd,"esm2017")}/**
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
 */const dT=300,fT=Df("authIdTokenMaxAge")||dT;let sd=null;const pT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fT)return;const i=n?.token;sd!==i&&(sd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function om(t=Wl()){const e=Do(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$I(t,{popupRedirectResolver:lT,persistence:[yS,aS,jc]}),s=Df("authTokenSyncURL");if(s){const r=pT(s);sS(n,r,()=>r(n.currentUser)),nS(n,o=>r(o))}const i=Of("auth");return i&&jI(n,`http://${i}`),n}hT("Browser");const Qo=Ao("modal",()=>{const t=ye(!1),e=ye(!1),n=ye(""),s=l=>{e.value=!0,n.value=l},i=()=>{t.value=!1},r=()=>{e.value=!1};return{uploadModal:t,postModal:e,openPostModal:s,closeUploadModal:i,closeModal:r,postCheck:l=>{ul($s(zs,`${l}/${n.value}`),{post:"true"}),r()},confirmationCheck:(l,c,u)=>{const h=String(u);ul($s(zs,`${l}/${c}`),{shopConfirmation:h==="true"?"false":"true"})}}});var xn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function am(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Or={exports:{}},_T=Or.exports,id;function mT(){return id||(id=1,(function(t,e){(function(n,s){t.exports=s()})(_T,(function(){var n=1e3,s=6e4,i=36e5,r="millisecond",o="second",a="minute",l="hour",c="day",u="week",h="month",f="quarter",p="year",g="date",m="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,E={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(_){var U=["th","st","nd","rd"],q=_%100;return"["+_+(U[(q-20)%10]||U[q]||U[0])+"]"}},I=function(_,U,q){var D=String(_);return!D||D.length>=U?_:""+Array(U+1-D.length).join(q)+_},k={s:I,z:function(_){var U=-_.utcOffset(),q=Math.abs(U),D=Math.floor(q/60),K=q%60;return(U<=0?"+":"-")+I(D,2,"0")+":"+I(K,2,"0")},m:function _(U,q){if(U.date()<q.date())return-_(q,U);var D=12*(q.year()-U.year())+(q.month()-U.month()),K=U.clone().add(D,h),G=q-K<0,ne=U.clone().add(D+(G?-1:1),h);return+(-(D+(q-K)/(G?K-ne:ne-K))||0)},a:function(_){return _<0?Math.ceil(_)||0:Math.floor(_)},p:function(_){return{M:h,y:p,w:u,d:c,D:g,h:l,m:a,s:o,ms:r,Q:f}[_]||String(_||"").toLowerCase().replace(/s$/,"")},u:function(_){return _===void 0}},A="en",H={};H[A]=E;var j="$isDayjsObject",V=function(_){return _ instanceof P||!(!_||!_[j])},B=function _(U,q,D){var K;if(!U)return A;if(typeof U=="string"){var G=U.toLowerCase();H[G]&&(K=G),q&&(H[G]=q,K=G);var ne=U.split("-");if(!K&&ne.length>1)return _(ne[0])}else{var $=U.name;H[$]=U,K=$}return!D&&K&&(A=K),K||!D&&A},Z=function(_,U){if(V(_))return _.clone();var q=typeof U=="object"?U:{};return q.date=_,q.args=arguments,new P(q)},se=k;se.l=B,se.i=V,se.w=function(_,U){return Z(_,{locale:U.$L,utc:U.$u,x:U.$x,$offset:U.$offset})};var P=(function(){function _(q){this.$L=B(q.locale,null,!0),this.parse(q),this.$x=this.$x||q.x||{},this[j]=!0}var U=_.prototype;return U.parse=function(q){this.$d=(function(D){var K=D.date,G=D.utc;if(K===null)return new Date(NaN);if(se.u(K))return new Date;if(K instanceof Date)return new Date(K);if(typeof K=="string"&&!/Z$/i.test(K)){var ne=K.match(b);if(ne){var $=ne[2]-1||0,F=(ne[7]||"0").substring(0,3);return G?new Date(Date.UTC(ne[1],$,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,F)):new Date(ne[1],$,ne[3]||1,ne[4]||0,ne[5]||0,ne[6]||0,F)}}return new Date(K)})(q),this.init()},U.init=function(){var q=this.$d;this.$y=q.getFullYear(),this.$M=q.getMonth(),this.$D=q.getDate(),this.$W=q.getDay(),this.$H=q.getHours(),this.$m=q.getMinutes(),this.$s=q.getSeconds(),this.$ms=q.getMilliseconds()},U.$utils=function(){return se},U.isValid=function(){return this.$d.toString()!==m},U.isSame=function(q,D){var K=Z(q);return this.startOf(D)<=K&&K<=this.endOf(D)},U.isAfter=function(q,D){return Z(q)<this.startOf(D)},U.isBefore=function(q,D){return this.endOf(D)<Z(q)},U.$g=function(q,D,K){return se.u(q)?this[D]:this.set(K,q)},U.unix=function(){return Math.floor(this.valueOf()/1e3)},U.valueOf=function(){return this.$d.getTime()},U.startOf=function(q,D){var K=this,G=!!se.u(D)||D,ne=se.p(q),$=function(ee,re){var he=se.w(K.$u?Date.UTC(K.$y,re,ee):new Date(K.$y,re,ee),K);return G?he:he.endOf(c)},F=function(ee,re){return se.w(K.toDate()[ee].apply(K.toDate("s"),(G?[0,0,0,0]:[23,59,59,999]).slice(re)),K)},ce=this.$W,oe=this.$M,ie=this.$D,ve="set"+(this.$u?"UTC":"");switch(ne){case p:return G?$(1,0):$(31,11);case h:return G?$(1,oe):$(0,oe+1);case u:var X=this.$locale().weekStart||0,te=(ce<X?ce+7:ce)-X;return $(G?ie-te:ie+(6-te),oe);case c:case g:return F(ve+"Hours",0);case l:return F(ve+"Minutes",1);case a:return F(ve+"Seconds",2);case o:return F(ve+"Milliseconds",3);default:return this.clone()}},U.endOf=function(q){return this.startOf(q,!1)},U.$set=function(q,D){var K,G=se.p(q),ne="set"+(this.$u?"UTC":""),$=(K={},K[c]=ne+"Date",K[g]=ne+"Date",K[h]=ne+"Month",K[p]=ne+"FullYear",K[l]=ne+"Hours",K[a]=ne+"Minutes",K[o]=ne+"Seconds",K[r]=ne+"Milliseconds",K)[G],F=G===c?this.$D+(D-this.$W):D;if(G===h||G===p){var ce=this.clone().set(g,1);ce.$d[$](F),ce.init(),this.$d=ce.set(g,Math.min(this.$D,ce.daysInMonth())).$d}else $&&this.$d[$](F);return this.init(),this},U.set=function(q,D){return this.clone().$set(q,D)},U.get=function(q){return this[se.p(q)]()},U.add=function(q,D){var K,G=this;q=Number(q);var ne=se.p(D),$=function(oe){var ie=Z(G);return se.w(ie.date(ie.date()+Math.round(oe*q)),G)};if(ne===h)return this.set(h,this.$M+q);if(ne===p)return this.set(p,this.$y+q);if(ne===c)return $(1);if(ne===u)return $(7);var F=(K={},K[a]=s,K[l]=i,K[o]=n,K)[ne]||1,ce=this.$d.getTime()+q*F;return se.w(ce,this)},U.subtract=function(q,D){return this.add(-1*q,D)},U.format=function(q){var D=this,K=this.$locale();if(!this.isValid())return K.invalidDate||m;var G=q||"YYYY-MM-DDTHH:mm:ssZ",ne=se.z(this),$=this.$H,F=this.$m,ce=this.$M,oe=K.weekdays,ie=K.months,ve=K.meridiem,X=function(re,he,S,x){return re&&(re[he]||re(D,G))||S[he].slice(0,x)},te=function(re){return se.s($%12||12,re,"0")},ee=ve||function(re,he,S){var x=re<12?"AM":"PM";return S?x.toLowerCase():x};return G.replace(v,(function(re,he){return he||(function(S){switch(S){case"YY":return String(D.$y).slice(-2);case"YYYY":return se.s(D.$y,4,"0");case"M":return ce+1;case"MM":return se.s(ce+1,2,"0");case"MMM":return X(K.monthsShort,ce,ie,3);case"MMMM":return X(ie,ce);case"D":return D.$D;case"DD":return se.s(D.$D,2,"0");case"d":return String(D.$W);case"dd":return X(K.weekdaysMin,D.$W,oe,2);case"ddd":return X(K.weekdaysShort,D.$W,oe,3);case"dddd":return oe[D.$W];case"H":return String($);case"HH":return se.s($,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return ee($,F,!0);case"A":return ee($,F,!1);case"m":return String(F);case"mm":return se.s(F,2,"0");case"s":return String(D.$s);case"ss":return se.s(D.$s,2,"0");case"SSS":return se.s(D.$ms,3,"0");case"Z":return ne}return null})(re)||ne.replace(":","")}))},U.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},U.diff=function(q,D,K){var G,ne=this,$=se.p(D),F=Z(q),ce=(F.utcOffset()-this.utcOffset())*s,oe=this-F,ie=function(){return se.m(ne,F)};switch($){case p:G=ie()/12;break;case h:G=ie();break;case f:G=ie()/3;break;case u:G=(oe-ce)/6048e5;break;case c:G=(oe-ce)/864e5;break;case l:G=oe/i;break;case a:G=oe/s;break;case o:G=oe/n;break;default:G=oe}return K?G:se.a(G)},U.daysInMonth=function(){return this.endOf(h).$D},U.$locale=function(){return H[this.$L]},U.locale=function(q,D){if(!q)return this.$L;var K=this.clone(),G=B(q,D,!0);return G&&(K.$L=G),K},U.clone=function(){return se.w(this.$d,this)},U.toDate=function(){return new Date(this.valueOf())},U.toJSON=function(){return this.isValid()?this.toISOString():null},U.toISOString=function(){return this.$d.toISOString()},U.toString=function(){return this.$d.toUTCString()},_})(),Y=P.prototype;return Z.prototype=Y,[["$ms",r],["$s",o],["$m",a],["$H",l],["$W",c],["$M",h],["$y",p],["$D",g]].forEach((function(_){Y[_[1]]=function(U){return this.$g(U,_[0],_[1])}})),Z.extend=function(_,U){return _.$i||(_(U,P,Z),_.$i=!0),Z},Z.locale=B,Z.isDayjs=V,Z.unix=function(_){return Z(1e3*_)},Z.en=H[A],Z.Ls=H,Z.p={},Z}))})(Or)),Or.exports}var gT=mT();const vT=am(gT),rd=vT().format("MM/DD"),cr=Ao("request",()=>{const t=Qo(),e=sr(),n=ye(!1),s=ye(!1),i=ye([]),r=ye([]),o=ye(""),a=ye(""),l=ye(""),c=ye(""),u=ye(""),h=ye(""),f=ye(""),p=ye([]),g=ye("false"),m=ye("false"),b=ye([]),v=ye([]),E=ye(0),I=ye(""),k=ye(""),A=ye("false"),H=ye(""),j=ye(!1),V=ye(!1),B=ye(!0),Z=ye("送信完了"),se={contentType:"image/jpeg"};return{todayFormat:rd,isCheckedPlain:n,isCheckedPlain2:s,orderDetails:i,otherOrderDetails:r,eventDetails:o,eventText:a,otherText:l,faceRetouching:c,manager:u,shop:h,deadline:f,otherDeadline:p,completed:g,img:m,imgUrls:b,imgFiles:v,successWidth:E,requestTitle:I,completeDay:k,shopConfirmation:A,post:H,progressBar:j,sending:V,send_completed:B,sendingText:Z,saveRequest:Y=>{const _=new Date().getTime();t.uploadModal=!0;const U=[];v.value.map(async D=>{j.value=!0,V.value=!0,B.value=!1,Z.value="送信中",m.value="true";const K=pl(_l,`${I.value}/${D.name}`);await Eh(K,D,se);const G=await __(K);U.push(G),U.length===v.value.length&&Eh(K,D).on("state_changed",$=>{let F=$.bytesTransferred/$.totalBytes*100;E.value=F,F===100&&(Z.value="送信完了",V.value=!1,B.value=!0)})});const q={requestTitle:I.value,manager:u.value,orders:[i.value,r.value].filter(D=>D&&D.length>0).join(","),deadlines:[e.getDate(f.value),p.value].filter(D=>D&&D.length>0).join(","),shop:h.value,completed:g.value,id:_,img:m.value,requestDay:rd,completeDay:k.value,shopConfirmation:A.value,post:H.value};Y==="banner"?(q.eventDetails=o.value,q.eventText=a.value,q.otherText=l.value):q.faceRetouching=c.value,IE($s(zs,`${Y}/${_}`),q)}}}),yT={class:"position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},bT={class:"bg-white text-secondary w-50 rounded mt-4",style:{height:"fit-content"}},wT={class:"d-flex flex-column p-3"},ET={class:"d-flex justify-content-center items-center"},CT={class:"fs-3 lh-lg"},IT={key:0,class:"bg-secondary rounded mt-3",style:{height:"20px"}},ST={class:"w-100 h2",style:{height:"20px"}},TT={class:"mt-4 d-flex justify-content-end items-center"},kT={key:0,class:"btn btn-secondary px-4 py-2 fw-bold"},lm={__name:"UploadModal",props:{show:Boolean,message:{type:String,default:"送信完了"},progressBar:{type:Boolean,default:!1},progress:{type:Number,default:0},sending:{type:Boolean,default:!1},sendCompleted:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:e}){const n=cr(),s=e,i=()=>{n.isCheckedPlain=!1,n.isCheckedPlain2=!1,n.orderDetails=[],n.otherOrderDetails=[],n.eventDetails="",n.eventText="",n.otherText="",n.faceRetouching="",n.manager="",n.shop="",n.deadline="",n.otherDeadline=[],n.completed="false",n.img="false",n.imgUrls=[],n.imgFiles=[],n.successWidth=0,n.requestTitle="",n.completeDay="",n.shopConfirmation="false",n.post="",n.progressBar=!1,n.sending=!1,n.send_completed=!0,s("close")};return(r,o)=>ge((we(),Ie("div",null,[C("div",yT,[C("div",bT,[C("div",wT,[C("div",ET,[C("h2",CT,be(t.message),1)]),t.progressBar?(we(),Ie("div",IT,[C("div",ST,[C("div",{class:"bg-primary rounded h-100 block",style:wo({width:t.progress+"%"})},null,4)])])):kn("",!0),C("div",TT,[t.sending?(we(),Ie("button",kT," 完了 ")):kn("",!0),t.sendCompleted?(we(),Ie("button",{key:1,class:"btn btn-primary px-4 py-2 fw-bold",onClick:i}," 完了 ")):kn("",!0)])])])])],512)),[[Ro,t.show]])}},cm=Ao("registration",()=>{const t=cr(),e=ye(!1);return{isEnter:e,dragEnter:()=>{e.value=!0},dragLeave:()=>{e.value=!1},dropFile:a=>{const l=[...a.dataTransfer.files];t.imgFiles=l,e.value=!1;const c=[];l.forEach(u=>{const h=new FileReader;h.onload=()=>{c.push(h.result),t.imgUrls=[...c]},h.readAsDataURL(u)}),a.preventDefault()},uploadFile:a=>{const l=[...a.target.files];t.imgFiles=l;const c=[];l.forEach(u=>{const h=new FileReader;h.onload=function(){c.push(h.result),t.imgUrls=[...c]},h.readAsDataURL(u)}),a.preventDefault()},deleteFile:a=>{t.imgUrls.splice(a,1),t.imgFiles.splice(a,1)}}}),RT={class:"container"},xT={class:"alert alert-primary"},AT={class:"form-group"},OT={class:"input-group align-items-center mb-3"},PT={class:"btn-group"},NT={class:"me-4"},DT={class:"me-4"},MT={class:"me-4"},LT={class:"input-group align-items-center mb-3"},UT={class:"row mb-3"},FT={class:"btn-group flex-column"},BT={class:"me-4"},$T={class:"me-4"},zT={class:"input-group align-items-center"},jT={class:"me-4"},WT=["disabled"],HT={class:"input-group align-items-start mb-3"},VT={class:"mb-3"},qT={class:"mb-3"},GT={class:"mb-3"},KT={class:"row mb-3"},YT={class:"btn-group flex-column"},ZT={class:"me-4"},XT={class:"me-4"},QT={class:"me-4"},JT={class:"me-4"},ek={class:"input-group align-items-center"},tk={class:"me-4"},nk=["disabled"],sk={class:"phone_area"},ik={class:"select_file"},rk={class:"pc_area"},ok={class:"list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0"},ak=["onClick"],lk=["src"],ck={key:0,class:"d-grid gap-2 d-md-flex justify-content-md-end pe-none"},uk={key:1,class:"d-grid gap-2 d-md-flex justify-content-md-end"},hk={class:"table-responsive mb-4"},dk={class:"table table-striped text-nowrap",style:{width:"1296px"}},fk={class:"text-wrap"},pk={class:"text-wrap"},_k={class:"text-wrap"},mk={class:"text-wrap"},gk={class:"text-wrap"},vk={class:"text-wrap"},yk={class:"text-wrap"},bk={class:"text-wrap"},wk={class:"text-center mb-5"},Ek={class:"table-responsive mb-4"},Ck={class:"table table-striped text-nowrap",style:{width:"1296px"}},Ik={class:"align-middle"},Sk={class:"text-wrap"},Tk={class:"text-wrap"},kk={class:"text-wrap"},Rk={class:"text-wrap"},xk={class:"text-wrap"},Ak={class:"text-wrap"},Ok=["onClick"],Pk=["onClick"],Nk={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},Dk={class:"z-3 bg-white .text-secondary w-auto rounded mt-4 p-2",style:{height:"fit-content"}},Mk={class:"d-flex justify-content-center"},Lk={__name:"RequestBanner",setup(t){const e=sr(),n=Qo(),s=cm(),i=cr(),r=()=>{i.saveRequest("banner")};return(o,a)=>(we(),Ie("section",null,[C("div",RT,[a[49]||(a[49]=C("h2",null,"バナー依頼",-1)),C("div",xT,[C("div",AT,[C("div",OT,[a[30]||(a[30]=C("h5",{class:"me-3"},"店舗：",-1)),C("div",PT,[C("label",NT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[0]||(a[0]=l=>W(i).shop=l),value:"DG"},null,512),[[yt,W(i).shop]]),a[27]||(a[27]=Re(" DG ",-1))]),C("label",DT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=l=>W(i).shop=l),value:"KPG"},null,512),[[yt,W(i).shop]]),a[28]||(a[28]=Re(" KPG ",-1))]),C("label",MT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=l=>W(i).shop=l),value:"GG"},null,512),[[yt,W(i).shop]]),a[29]||(a[29]=Re(" GG ",-1))])])]),C("div",LT,[a[31]||(a[31]=C("h5",{class:"me-3"},"担当者：",-1)),ge(C("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>W(i).manager=l),class:"form-control"},null,512),[[vt,W(i).manager]])]),C("div",UT,[a[35]||(a[35]=C("div",{class:"col"},[C("h5",null,"サイズ：")],-1)),C("div",FT,[C("div",null,[C("label",BT,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=l=>W(i).orderDetails=l),value:"700*400"},null,512),[[$t,W(i).orderDetails]]),a[32]||(a[32]=Re(" 700 * 400 ",-1))]),C("label",$T,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=l=>W(i).orderDetails=l),value:"640*640"},null,512),[[$t,W(i).orderDetails]]),a[33]||(a[33]=Re(" 640 * 640 ",-1))])]),C("div",zT,[C("label",jT,[ge(C("input",{type:"checkbox",name:"size","onUpdate:modelValue":a[6]||(a[6]=l=>W(i).isCheckedPlain=l)},null,512),[[$t,W(i).isCheckedPlain]]),a[34]||(a[34]=Re(" その他 ",-1))]),ge(C("input",{"onUpdate:modelValue":a[7]||(a[7]=l=>W(i).otherOrderDetails=l),class:"form-control",disabled:!W(i).isCheckedPlain,style:{border:"1px solid #e1e1e1"},placeholder:"その他サイズはこちら"},null,8,WT),[[vt,W(i).otherOrderDetails]])])])]),C("div",HT,[a[36]||(a[36]=C("div",{class:"flex-column"},[C("h5",{class:"me-3 mb-0"},"イベント名："),C("p",{class:"required"},"※必須項目です")],-1)),ge(C("input",{"onUpdate:modelValue":a[8]||(a[8]=l=>W(i).requestTitle=l),class:"form-control"},null,512),[[vt,W(i).requestTitle]])]),C("div",VT,[a[37]||(a[37]=C("h5",{class:"me-3"},"イベント内容：",-1)),ge(C("textarea",{"onUpdate:modelValue":a[9]||(a[9]=l=>W(i).eventDetails=l),class:"form-control"},null,512),[[vt,W(i).eventDetails]])]),C("div",qT,[a[38]||(a[38]=C("h5",{class:"me-3"},"入れたい文言：",-1)),ge(C("textarea",{"onUpdate:modelValue":a[10]||(a[10]=l=>W(i).eventText=l),class:"form-control"},null,512),[[vt,W(i).eventText]])]),C("div",GT,[a[39]||(a[39]=C("h5",{class:"me-3"},"その他要望：",-1)),ge(C("textarea",{"onUpdate:modelValue":a[11]||(a[11]=l=>W(i).otherText=l),class:"form-control"},null,512),[[vt,W(i).otherText]])]),C("div",KT,[a[45]||(a[45]=C("div",{class:"col"},[C("h5",null,"提出期限：")],-1)),C("div",YT,[C("div",null,[C("label",ZT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[12]||(a[12]=l=>W(i).deadline=l),name:"deadline",value:"大至急"},null,512),[[yt,W(i).deadline]]),a[40]||(a[40]=Re(" 大至急 ",-1))]),C("label",XT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[13]||(a[13]=l=>W(i).deadline=l),name:"deadline",value:"3"},null,512),[[yt,W(i).deadline]]),a[41]||(a[41]=Re(" ～３日 ",-1))]),C("label",QT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[14]||(a[14]=l=>W(i).deadline=l),name:"deadline",value:"7"},null,512),[[yt,W(i).deadline]]),a[42]||(a[42]=Re(" ～７日 ",-1))]),C("label",JT,[ge(C("input",{type:"radio","onUpdate:modelValue":a[15]||(a[15]=l=>W(i).deadline=l),name:"deadline",value:"お任せ"},null,512),[[yt,W(i).deadline]]),a[43]||(a[43]=Re(" お任せ ",-1))]),C("div",ek,[C("label",tk,[ge(C("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":a[16]||(a[16]=l=>W(i).isCheckedPlain2=l)},null,512),[[$t,W(i).isCheckedPlain2]]),a[44]||(a[44]=Re(" その他 ",-1))]),ge(C("input",{"onUpdate:modelValue":a[17]||(a[17]=l=>W(i).otherDeadline=l),class:"form-control",disabled:!W(i).isCheckedPlain2,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,nk),[[vt,W(i).otherDeadline]])])])])]),a[48]||(a[48]=C("h5",null," 参考画像や使用素材：",-1)),C("div",sk,[C("label",ik,[C("input",{type:"file",onChange:a[18]||(a[18]=(...l)=>W(s).uploadFile&&W(s).uploadFile(...l)),multiple:""},null,32),a[46]||(a[46]=Re("ファイル選択 ",-1))])]),C("div",rk,[C("div",{class:At(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:W(s).isEnter}]),onDragenter:a[19]||(a[19]=(...l)=>W(s).dragEnter&&W(s).dragEnter(...l)),onDragleave:a[20]||(a[20]=(...l)=>W(s).dragLeave&&W(s).dragLeave(...l)),onDragover:a[21]||(a[21]=Mi(()=>{},["prevent"])),onDrop:a[22]||(a[22]=Mi((...l)=>W(s).dropFile&&W(s).dropFile(...l),["prevent"]))},"ファイルアップロード",34)]),C("div",null,[C("ul",ok,[(we(!0),Ie(Qe,null,Pn(W(i).imgUrls,(l,c)=>(we(),Ie("li",{key:c,class:"position-relative cursor d-flex flex-column fs-6 p-2 w-25"},[C("div",null,[C("span",{class:"position-absolute display-6 delete-mark",onClick:u=>W(s).deleteFile(c)},"×",8,ak),(we(),Ie("img",{id:"thumb",class:"w-100",key:l,src:l},null,8,lk))])]))),128))])]),W(i).requestTitle==""?(we(),Ie("div",ck,[...a[47]||(a[47]=[C("button",{class:"btn btn-secondary"},"投稿",-1)])])):(we(),Ie("div",uk,[C("button",{onClick:r,class:"btn btn-primary"},"投稿")]))])])]),a[53]||(a[53]=C("h3",null,"依頼中",-1)),C("div",hk,[C("table",dk,[a[50]||(a[50]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"サイズ"),C("th",{scope:"col"},"イベント名"),C("th",{scope:"col"},"内容"),C("th",{scope:"col"},"文言"),C("th",{scope:"col"},"その他要望"),C("th",{scope:"col"},"提出期限")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).getPagedItems(W(e).unfinishedBanners,W(e).bannerPage),l=>(we(),Ie("tr",null,[C("td",fk,be(l.shop),1),C("td",pk,be(l.manager),1),C("td",_k,be(l.orders),1),C("td",mk,be(l.requestTitle),1),C("td",gk,be(l.eventDetails),1),C("td",vk,be(l.eventText),1),C("td",yk,be(l.otherText),1),C("td",bk,be(l.deadlines),1)]))),256))])])]),C("div",wk,[C("span",{class:At(["btn",W(e).bannerPage<=0?["btn-secondary","pe-none"]:"btn-primary"]),onClick:a[23]||(a[23]=l=>W(e).prevBanner())},"< prev",2),C("span",{class:At(["btn ms-4",{"btn-secondary pe-none":W(e).bannerPage===W(e).bannerMaxPage,"btn-primary":W(e).bannerPage<W(e).bannerMaxPage}]),onClick:a[24]||(a[24]=l=>W(e).nextBanner())},"next >",2)]),a[54]||(a[54]=C("h3",null,"確認及び掲載",-1)),C("div",Ek,[C("table",Ck,[a[51]||(a[51]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"依頼日"),C("th",{scope:"col"},"納品日"),C("th",{scope:"col"},"イベント名"),C("th",{scope:"col"},"サイズ"),C("th",{scope:"col"},"確認及び掲載")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).finishedBanners,l=>(we(),Ie("tr",Ik,[C("td",Sk,be(l.shop),1),C("td",Tk,be(l.manager),1),C("td",kk,be(l.requestDay),1),C("td",Rk,be(l.completeDay),1),C("td",xk,be(l.requestTitle),1),C("td",Ak,be(l.sizes),1),C("td",null,[C("button",{class:At(["btn",[l.shopConfirmation==="true"?"btn-primary":"btn-outline-primary"]]),onClick:c=>W(n).confirmationCheck("banner",l.id,l.shopConfirmation)}," 確認 ",10,Ok),C("button",{class:"btn btn-outline-success ms-3",onClick:c=>W(n).openPostModal(l.id)}," 掲載 ",8,Pk)])]))),256))])])]),ge(C("div",null,[C("div",Nk,[C("div",Dk,[a[52]||(a[52]=C("p",{class:"text-center"},"掲載は完了しましたか？",-1)),C("div",Mk,[C("button",{class:"btn btn-primary me-3",onClick:a[25]||(a[25]=l=>{W(n).postCheck("banner")})}," はい "),C("button",{class:"btn btn_space btn-secondary",onClick:a[26]||(a[26]=l=>W(n).closeModal())}," いいえ ")])])])],512),[[Ro,W(n).postModal]]),it(lm,{show:W(n).uploadModal,message:W(i).sendingText,"progress-bar":W(i).progressBar,progress:W(i).successWidth,sending:W(i).sending,"send-completed":W(i).send_completed,onClose:W(n).closeUploadModal},null,8,["show","message","progress-bar","progress","sending","send-completed","onClose"])]))}},Uk={class:"container"},Fk={class:"alert alert-warning"},Bk={class:"form-group"},$k={class:"input-group align-items-center mb-3"},zk={class:"btn-group"},jk={class:"me-4"},Wk={class:"me-4"},Hk={class:"me-4"},Vk={class:"input-group align-items-center mb-3"},qk={class:"input-group align-items-center mb-3"},Gk={class:"row mb-3"},Kk={class:"btn-group flex-column"},Yk={class:"me-4"},Zk={class:"me-4"},Xk={class:"me-4"},Qk={class:"me-4"},Jk={class:"input-group align-items-center"},eR={class:"me-4"},tR=["disabled"],nR={class:"input-group align-items-center mb-3"},sR={class:"row mb-3"},iR={class:"btn-group flex-column"},rR={class:"me-4"},oR={class:"me-4"},aR={class:"me-4"},lR={class:"me-4"},cR={class:"input-group align-items-center"},uR={class:"me-4"},hR=["disabled"],dR={class:"phone_area"},fR={class:"select_file"},pR={class:"pc_area"},_R={class:"list-unstyled d-flex flex-wrap justify-content-start mt-3 p-0"},mR=["onClick"],gR=["src"],vR={key:0,class:"d-grid gap-2 d-md-flex justify-content-md-end pe-none"},yR={key:1,class:"d-grid gap-2 d-md-flex justify-content-md-end"},bR={class:"table-responsive mb-4"},wR={class:"table table-striped text-nowrap",style:{width:"1296px"}},ER={class:"text-wrap"},CR={class:"text-wrap"},IR={class:"text-wrap"},SR={class:"text-wrap"},TR={class:"text-wrap"},kR={class:"text-wrap"},RR={class:"text-center mb-5"},xR={class:"table-responsive mb-4"},AR={class:"table table-striped text-nowrap",style:{width:"1296px"}},OR={class:"align-middle"},PR={class:"text-wrap"},NR={class:"text-wrap"},DR={class:"text-wrap"},MR={class:"text-wrap"},LR={class:"text-wrap"},UR=["onClick"],FR=["onClick"],BR={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},$R={class:"z-3 bg-white .text-secondary w-auto rounded mt-4 p-2",style:{height:"fit-content"}},zR={class:"d-flex justify-content-center"},jR={__name:"RequestRetouch",setup(t){const e=sr(),n=Qo(),s=cm(),i=cr(),r=()=>{i.saveRequest("retouch")};return(o,a)=>(we(),Ie("section",null,[C("div",Uk,[a[49]||(a[49]=C("h2",null,"レタッチ依頼",-1)),C("div",Fk,[C("div",Bk,[C("div",$k,[a[30]||(a[30]=C("h5",{class:"me-3"},"店舗：",-1)),C("div",zk,[C("label",jk,[ge(C("input",{type:"radio","onUpdate:modelValue":a[0]||(a[0]=l=>W(i).shop=l),value:"DG"},null,512),[[yt,W(i).shop]]),a[27]||(a[27]=Re(" DG ",-1))]),C("label",Wk,[ge(C("input",{type:"radio","onUpdate:modelValue":a[1]||(a[1]=l=>W(i).shop=l),value:"KPG"},null,512),[[yt,W(i).shop]]),a[28]||(a[28]=Re(" KPG ",-1))]),C("label",Hk,[ge(C("input",{type:"radio","onUpdate:modelValue":a[2]||(a[2]=l=>W(i).shop=l),value:"GG"},null,512),[[yt,W(i).shop]]),a[29]||(a[29]=Re(" GG ",-1))])])]),C("div",Vk,[a[31]||(a[31]=C("h5",{class:"me-3"},"担当者：",-1)),ge(C("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>W(i).manager=l),class:"form-control"},null,512),[[vt,W(i).manager]])]),C("div",qk,[a[32]||(a[32]=C("div",{class:"flex-column"},[C("h5",{class:"me-3 mb-0"},"キャスト名："),C("p",{class:"required"},"※必須項目です")],-1)),ge(C("input",{"onUpdate:modelValue":a[4]||(a[4]=l=>W(i).requestTitle=l),class:"form-control"},null,512),[[vt,W(i).requestTitle]])]),C("div",Gk,[a[38]||(a[38]=C("div",{class:"col"},[C("h5",null,"修正箇所：")],-1)),C("div",Kk,[C("div",null,[C("label",Yk,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[5]||(a[5]=l=>W(i).orderDetails=l),value:"ほくろ"},null,512),[[$t,W(i).orderDetails]]),a[33]||(a[33]=Re(" ほくろ ",-1))]),C("label",Zk,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[6]||(a[6]=l=>W(i).orderDetails=l),value:"しわ"},null,512),[[$t,W(i).orderDetails]]),a[34]||(a[34]=Re(" しわ ",-1))]),C("label",Xk,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[7]||(a[7]=l=>W(i).orderDetails=l),value:"傷"},null,512),[[$t,W(i).orderDetails]]),a[35]||(a[35]=Re(" 傷 ",-1))]),C("label",Qk,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[8]||(a[8]=l=>W(i).orderDetails=l),value:"細身"},null,512),[[$t,W(i).orderDetails]]),a[36]||(a[36]=Re(" 細身 ",-1))])]),C("div",Jk,[C("label",eR,[ge(C("input",{type:"checkbox","onUpdate:modelValue":a[9]||(a[9]=l=>W(i).isCheckedPlain=l)},null,512),[[$t,W(i).isCheckedPlain]]),a[37]||(a[37]=Re(" その他 ",-1))]),ge(C("input",{"onUpdate:modelValue":a[10]||(a[10]=l=>W(i).otherOrderDetails=l),class:"form-control",disabled:!W(i).isCheckedPlain,style:{border:"1px solid #e1e1e1"},placeholder:"髪色やピアス、ネイルの修正等"},null,8,tR),[[vt,W(i).otherOrderDetails]])])])]),C("div",nR,[a[39]||(a[39]=C("h5",{class:"me-3"},"顔の処理：",-1)),ge(C("input",{"onUpdate:modelValue":a[11]||(a[11]=l=>W(i).faceRetouching=l),class:"form-control"},null,512),[[vt,W(i).faceRetouching]])]),C("div",sR,[a[45]||(a[45]=C("div",{class:"col"},[C("h5",null,"提出期限：")],-1)),C("div",iR,[C("div",null,[C("label",rR,[ge(C("input",{type:"radio","onUpdate:modelValue":a[12]||(a[12]=l=>W(i).deadline=l),name:"deadline",value:"大至急"},null,512),[[yt,W(i).deadline]]),a[40]||(a[40]=Re(" 大至急 ",-1))]),C("label",oR,[ge(C("input",{type:"radio","onUpdate:modelValue":a[13]||(a[13]=l=>W(i).deadline=l),name:"deadline",value:"3"},null,512),[[yt,W(i).deadline]]),a[41]||(a[41]=Re(" ～３日 ",-1))]),C("label",aR,[ge(C("input",{type:"radio","onUpdate:modelValue":a[14]||(a[14]=l=>W(i).deadline=l),name:"deadline",value:"7"},null,512),[[yt,W(i).deadline]]),a[42]||(a[42]=Re(" ～７日 ",-1))]),C("label",lR,[ge(C("input",{type:"radio","onUpdate:modelValue":a[15]||(a[15]=l=>W(i).deadline=l),name:"deadline",value:"お任せ"},null,512),[[yt,W(i).deadline]]),a[43]||(a[43]=Re(" お任せ ",-1))]),C("div",cR,[C("label",uR,[ge(C("input",{type:"checkbox",name:"deadline","onUpdate:modelValue":a[16]||(a[16]=l=>W(i).isCheckedPlain2=l)},null,512),[[$t,W(i).isCheckedPlain2]]),a[44]||(a[44]=Re(" その他 ",-1))]),ge(C("input",{"onUpdate:modelValue":a[17]||(a[17]=l=>W(i).otherDeadline=l),class:"form-control",disabled:!W(i).isCheckedPlain2,style:{border:"1px solid #e1e1e1"},placeholder:"その他要望はこちら"},null,8,hR),[[vt,W(i).otherDeadline]])])])])]),a[48]||(a[48]=C("h5",null," レタッチ画像：",-1)),C("div",dR,[C("label",fR,[C("input",{type:"file",onChange:a[18]||(a[18]=(...l)=>o.uploadFile&&o.uploadFile(...l)),multiple:""},null,32),a[46]||(a[46]=Re("ファイル選択 ",-1))])]),C("div",pR,[C("div",{class:At(["drop_area text-secondary fw-bold fs-4 d-flex justify-content-center align-items-center",{enter:W(s).isEnter}]),onDragenter:a[19]||(a[19]=(...l)=>W(s).dragEnter&&W(s).dragEnter(...l)),onDragleave:a[20]||(a[20]=(...l)=>W(s).dragLeave&&W(s).dragLeave(...l)),onDragover:a[21]||(a[21]=Mi(()=>{},["prevent"])),onDrop:a[22]||(a[22]=Mi((...l)=>W(s).dropFile&&W(s).dropFile(...l),["prevent"]))},"ファイルアップロード",34)]),C("div",null,[C("ul",_R,[(we(!0),Ie(Qe,null,Pn(W(i).imgUrls,(l,c)=>(we(),Ie("li",{key:c,class:"position-relative cursor d-flex flex-column fs-6 p-2 w-25"},[C("div",null,[C("span",{class:"position-absolute display-6 delete-mark",onClick:u=>W(s).deleteFile(c)},"×",8,mR),(we(),Ie("img",{id:"thumb",class:"w-100",key:l,src:l},null,8,gR))])]))),128))])]),W(i).requestTitle===""?(we(),Ie("div",vR,[...a[47]||(a[47]=[C("button",{class:"btn btn-secondary"},"投稿",-1)])])):(we(),Ie("div",yR,[C("button",{onClick:r,class:"btn btn-primary"},"投稿")]))])])]),a[53]||(a[53]=C("h3",null,"依頼中",-1)),C("div",bR,[C("table",wR,[a[50]||(a[50]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"キャスト名"),C("th",{scope:"col"},"修正箇所"),C("th",{scope:"col"},"顔の処理"),C("th",{scope:"col"},"提出期限")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).getPagedItems(W(e).unfinishedRetouches,W(e).retouchPage),l=>(we(),Ie("tr",null,[C("td",ER,be(l.shop),1),C("td",CR,be(l.manager),1),C("td",IR,be(l.requestTitle),1),C("td",SR,be(l.orders),1),C("td",TR,be(l.faceRetouching),1),C("td",kR,be(l.deadlines),1)]))),256))])])]),C("div",RR,[C("span",{class:At(["btn",W(e).retouchPage<=0?["btn-secondary","pe-none"]:"btn-primary"]),onClick:a[23]||(a[23]=(...l)=>W(e).prevRetouch&&W(e).prevRetouch(...l))},"< prev",2),C("span",{class:At(["btn ms-4",{"btn-secondary pe-none":W(e).retouchPage===W(e).retouchMaxPage,"btn-primary":W(e).retouchPage<W(e).retouchMaxPage}]),onClick:a[24]||(a[24]=(...l)=>W(e).nextRetouch&&W(e).nextRetouch(...l))},"next >",2)]),a[54]||(a[54]=C("h3",null,"確認及び掲載",-1)),C("div",xR,[C("table",AR,[a[51]||(a[51]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"依頼日"),C("th",{scope:"col"},"納品日"),C("th",{scope:"col"},"キャスト名"),C("th",{scope:"col"},"確認及び掲載")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).finishedRetouches,l=>(we(),Ie("tr",OR,[C("td",PR,be(l.shop),1),C("td",NR,be(l.manager),1),C("td",DR,be(l.requestDay),1),C("td",MR,be(l.completeDay),1),C("td",LR,be(l.requestTitle),1),C("td",null,[C("button",{class:At(["btn",l.shopConfirmation==="true"?["btn-warning","text-white"]:"btn-outline-warning"]),onClick:c=>W(n).confirmationCheck("retouch",l.id,l.shopConfirmation)}," 確認 ",10,UR),C("button",{class:"btn btn-outline-success ms-3",onClick:c=>W(n).openPostModal(l.id)}," 掲載 ",8,FR)])]))),256))])])]),ge(C("div",null,[C("div",BR,[C("div",$R,[a[52]||(a[52]=C("p",{class:"text-center"},"掲載は完了しましたか？",-1)),C("div",zR,[C("button",{class:"btn btn-warning text-white me-3",onClick:a[25]||(a[25]=l=>{W(n).postCheck("retouch")})}," はい "),C("button",{class:"btn btn_space btn-secondary",onClick:a[26]||(a[26]=(...l)=>o.closeModal&&o.closeModal(...l))}," いいえ ")])])])],512),[[Ro,W(n).postModal]]),it(lm,{show:W(n).uploadModal,message:W(i).sendingText,"progress-bar":W(i).progressBar,progress:W(i).successWidth,sending:W(i).sending,"send-completed":W(i).send_completed,onClose:W(n).closeUploadModal},null,8,["show","message","progress-bar","progress","sending","send-completed","onClose"])]))}},WR={class:"z-2 position-fixed top-0 start-0 h-100 w-100 d-flex items-center justify-content-center",style:{"background-color":"rgba(0,0,0,0.5)"}},HR={class:"z-3 bg-white .text-secondary w-auto rounded mt-4 p-2",style:{height:"fit-content"}},VR={class:"d-flex justify-content-end"},qR={__name:"TaskCompleteModal",props:{show:Boolean},emits:["close","confirm"],setup(t,{emit:e}){return(n,s)=>ge((we(),Ie("div",null,[C("div",WR,[C("div",HR,[s[2]||(s[2]=C("p",{class:"text-center"},"選択したタスクを完了させます",-1)),C("div",VR,[C("button",{class:"btn btn-danger me-3",onClick:s[0]||(s[0]=i=>n.$emit("confirm"))}," 完了 "),C("button",{class:"btn btn_space btn-secondary",onClick:s[1]||(s[1]=i=>n.$emit("close"))}," キャンセル ")])])])],512)),[[Ro,t.show]])}};var Pr={exports:{}},GR=Pr.exports,od;function KR(){return od||(od=1,(function(t,e){(function(n,s){s()})(GR,function(){function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function s(c,u,h){var f=new XMLHttpRequest;f.open("GET",c),f.responseType="blob",f.onload=function(){l(f.response,u,h)},f.onerror=function(){console.error("could not download file")},f.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function r(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof xn=="object"&&xn.global===xn?xn:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(c,u,h){var f=o.URL||o.webkitURL,p=document.createElement("a");u=u||c.name||"download",p.download=u,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?r(p):i(p.href)?s(c,u,h):r(p,p.target="_blank")):(p.href=f.createObjectURL(c),setTimeout(function(){f.revokeObjectURL(p.href)},4e4),setTimeout(function(){r(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,h){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,h),u);else if(i(c))s(c,u,h);else{var f=document.createElement("a");f.href=c,f.target="_blank",setTimeout(function(){r(f)})}}:function(c,u,h,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof c=="string")return s(c,u,h);var p=c.type==="application/octet-stream",g=/constructor/i.test(o.HTMLElement)||o.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||p&&g||a)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var I=b.result;I=m?I:I.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=I:location=I,f=null},b.readAsDataURL(c)}else{var v=o.URL||o.webkitURL,E=v.createObjectURL(c);f?f.location=E:location.href=E,f=null,setTimeout(function(){v.revokeObjectURL(E)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})})(Pr)),Pr.exports}var YR=KR();function br(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Oa={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var ad;function ZR(){return ad||(ad=1,(function(t,e){(function(n){t.exports=n()})(function(){return(function n(s,i,r){function o(c,u){if(!i[c]){if(!s[c]){var h=typeof br=="function"&&br;if(!u&&h)return h(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[c]={exports:{}};s[c][0].call(p.exports,function(g){var m=s[c][1][g];return o(m||g)},p,p.exports,n,s,i,r)}return i[c].exports}for(var a=typeof br=="function"&&br,l=0;l<r.length;l++)o(r[l]);return o})({1:[function(n,s,i){var r=n("./utils"),o=n("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,u,h,f,p,g,m,b=[],v=0,E=l.length,I=E,k=r.getTypeOf(l)!=="string";v<l.length;)I=E-v,h=k?(c=l[v++],u=v<E?l[v++]:0,v<E?l[v++]:0):(c=l.charCodeAt(v++),u=v<E?l.charCodeAt(v++):0,v<E?l.charCodeAt(v++):0),f=c>>2,p=(3&c)<<4|u>>4,g=1<I?(15&u)<<2|h>>6:64,m=2<I?63&h:64,b.push(a.charAt(f)+a.charAt(p)+a.charAt(g)+a.charAt(m));return b.join("")},i.decode=function(l){var c,u,h,f,p,g,m=0,b=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var E,I=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&I--,l.charAt(l.length-2)===a.charAt(64)&&I--,I%1!=0)throw new Error("Invalid base64 input, bad content length.");for(E=o.uint8array?new Uint8Array(0|I):new Array(0|I);m<l.length;)c=a.indexOf(l.charAt(m++))<<2|(f=a.indexOf(l.charAt(m++)))>>4,u=(15&f)<<4|(p=a.indexOf(l.charAt(m++)))>>2,h=(3&p)<<6|(g=a.indexOf(l.charAt(m++))),E[b++]=c,p!==64&&(E[b++]=u),g!==64&&(E[b++]=h);return E}},{"./support":30,"./utils":32}],2:[function(n,s,i){var r=n("./external"),o=n("./stream/DataWorker"),a=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function c(u,h,f,p,g){this.compressedSize=u,this.uncompressedSize=h,this.crc32=f,this.compression=p,this.compressedContent=g}c.prototype={getContentWorker:function(){var u=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return u.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,h,f){return u.pipe(new a).pipe(new l("uncompressedSize")).pipe(h.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},s.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,s,i){var r=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,s,i){var r=n("./utils"),o=(function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l})();s.exports=function(a,l){return a!==void 0&&a.length?r.getTypeOf(a)!=="string"?(function(c,u,h,f){var p=o,g=f+h;c^=-1;for(var m=f;m<g;m++)c=c>>>8^p[255&(c^u[m])];return-1^c})(0|l,a,a.length,0):(function(c,u,h,f){var p=o,g=f+h;c^=-1;for(var m=f;m<g;m++)c=c>>>8^p[255&(c^u.charCodeAt(m))];return-1^c})(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(n,s,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,s,i){var r=null;r=typeof Promise<"u"?Promise:n("lie"),s.exports={Promise:r}},{lie:37}],7:[function(n,s,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=n("pako"),a=n("./utils"),l=n("./stream/GenericWorker"),c=r?"uint8array":"array";function u(h,f){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=f,this.meta={}}i.magic="\b\0",a.inherits(u,l),u.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,h.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(f){h.push({data:f,meta:h.meta})}},i.compressWorker=function(h){return new u("Deflate",h)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,s,i){function r(p,g){var m,b="";for(m=0;m<g;m++)b+=String.fromCharCode(255&p),p>>>=8;return b}function o(p,g,m,b,v,E){var I,k,A=p.file,H=p.compression,j=E!==c.utf8encode,V=a.transformTo("string",E(A.name)),B=a.transformTo("string",c.utf8encode(A.name)),Z=A.comment,se=a.transformTo("string",E(Z)),P=a.transformTo("string",c.utf8encode(Z)),Y=B.length!==A.name.length,_=P.length!==Z.length,U="",q="",D="",K=A.dir,G=A.date,ne={crc32:0,compressedSize:0,uncompressedSize:0};g&&!m||(ne.crc32=p.crc32,ne.compressedSize=p.compressedSize,ne.uncompressedSize=p.uncompressedSize);var $=0;g&&($|=8),j||!Y&&!_||($|=2048);var F=0,ce=0;K&&(F|=16),v==="UNIX"?(ce=798,F|=(function(ie,ve){var X=ie;return ie||(X=ve?16893:33204),(65535&X)<<16})(A.unixPermissions,K)):(ce=20,F|=(function(ie){return 63&(ie||0)})(A.dosPermissions)),I=G.getUTCHours(),I<<=6,I|=G.getUTCMinutes(),I<<=5,I|=G.getUTCSeconds()/2,k=G.getUTCFullYear()-1980,k<<=4,k|=G.getUTCMonth()+1,k<<=5,k|=G.getUTCDate(),Y&&(q=r(1,1)+r(u(V),4)+B,U+="up"+r(q.length,2)+q),_&&(D=r(1,1)+r(u(se),4)+P,U+="uc"+r(D.length,2)+D);var oe="";return oe+=`
\0`,oe+=r($,2),oe+=H.magic,oe+=r(I,2),oe+=r(k,2),oe+=r(ne.crc32,4),oe+=r(ne.compressedSize,4),oe+=r(ne.uncompressedSize,4),oe+=r(V.length,2),oe+=r(U.length,2),{fileRecord:h.LOCAL_FILE_HEADER+oe+V+U,dirRecord:h.CENTRAL_FILE_HEADER+r(ce,2)+oe+r(se.length,2)+"\0\0\0\0"+r(F,4)+r(b,4)+V+U+se}}var a=n("../utils"),l=n("../stream/GenericWorker"),c=n("../utf8"),u=n("../crc32"),h=n("../signature");function f(p,g,m,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=m,this.encodeFileName=b,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(p){var g=p.meta.percent||0,m=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:m?(g+100*(m-b-1))/m:100}}))},f.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var m=o(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,m=o(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),g)this.push({data:(function(b){return h.DATA_DESCRIPTOR+r(b.crc32,4)+r(b.compressedSize,4)+r(b.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var m=this.bytesWritten-p,b=(function(v,E,I,k,A){var H=a.transformTo("string",A(k));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(v,2)+r(v,2)+r(E,4)+r(I,4)+r(H.length,2)+H})(this.dirRecords.length,m,p,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(m){g.processChunk(m)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(m){g.error(m)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(p){var g=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var m=0;m<g.length;m++)try{g[m].error(p)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},s.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,s,i){var r=n("../compressions"),o=n("./ZipFileWorker");i.generateWorker=function(a,l,c){var u=new o(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{a.forEach(function(f,p){h++;var g=(function(E,I){var k=E||I,A=r[k];if(!A)throw new Error(k+" is not a valid compression method !");return A})(p.options.compression,l.compression),m=p.options.compressionOptions||l.compressionOptions||{},b=p.dir,v=p.date;p._compressWorker(g,m).withStreamInfo("file",{name:f,dir:b,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=h}catch(f){u.error(f)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,s,i){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(r.prototype=n("./object")).loadAsync=n("./load"),r.support=n("./support"),r.defaults=n("./defaults"),r.version="3.10.1",r.loadAsync=function(o,a){return new r().loadAsync(o,a)},r.external=n("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,s,i){var r=n("./utils"),o=n("./external"),a=n("./utf8"),l=n("./zipEntries"),c=n("./stream/Crc32Probe"),u=n("./nodejsUtils");function h(f){return new o.Promise(function(p,g){var m=f.decompressed.getContentWorker().pipe(new c);m.on("error",function(b){g(b)}).on("end",function(){m.streamInfo.crc32!==f.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}s.exports=function(f,p){var g=this;return p=r.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(f)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",f,!0,p.optimizedBinaryString,p.base64).then(function(m){var b=new l(p);return b.load(m),b}).then(function(m){var b=[o.Promise.resolve(m)],v=m.files;if(p.checkCRC32)for(var E=0;E<v.length;E++)b.push(h(v[E]));return o.Promise.all(b)}).then(function(m){for(var b=m.shift(),v=b.files,E=0;E<v.length;E++){var I=v[E],k=I.fileNameStr,A=r.resolve(I.fileNameStr);g.file(A,I.decompressed,{binary:!0,optimizedBinaryString:!0,date:I.date,dir:I.dir,comment:I.fileCommentStr.length?I.fileCommentStr:null,unixPermissions:I.unixPermissions,dosPermissions:I.dosPermissions,createFolders:p.createFolders}),I.dir||(g.file(A).unsafeOriginalName=k)}return b.zipComment.length&&(g.comment=b.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,s,i){var r=n("../utils"),o=n("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}r.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,s,i){var r=n("readable-stream").Readable;function o(a,l,c){r.call(this,l),this._helper=a;var u=this;a.on("data",function(h,f){u.push(h)||u._helper.pause(),c&&c(f)}).on("error",function(h){u.emit("error",h)}).on("end",function(){u.push(null)})}n("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},s.exports=o},{"../utils":32,"readable-stream":16}],14:[function(n,s,i){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(n,s,i){function r(A,H,j){var V,B=a.getTypeOf(H),Z=a.extend(j||{},u);Z.date=Z.date||new Date,Z.compression!==null&&(Z.compression=Z.compression.toUpperCase()),typeof Z.unixPermissions=="string"&&(Z.unixPermissions=parseInt(Z.unixPermissions,8)),Z.unixPermissions&&16384&Z.unixPermissions&&(Z.dir=!0),Z.dosPermissions&&16&Z.dosPermissions&&(Z.dir=!0),Z.dir&&(A=v(A)),Z.createFolders&&(V=b(A))&&E.call(this,V,!0);var se=B==="string"&&Z.binary===!1&&Z.base64===!1;j&&j.binary!==void 0||(Z.binary=!se),(H instanceof h&&H.uncompressedSize===0||Z.dir||!H||H.length===0)&&(Z.base64=!1,Z.binary=!0,H="",Z.compression="STORE",B="string");var P=null;P=H instanceof h||H instanceof l?H:g.isNode&&g.isStream(H)?new m(A,H):a.prepareContent(A,H,Z.binary,Z.optimizedBinaryString,Z.base64);var Y=new f(A,P,Z);this.files[A]=Y}var o=n("./utf8"),a=n("./utils"),l=n("./stream/GenericWorker"),c=n("./stream/StreamHelper"),u=n("./defaults"),h=n("./compressedObject"),f=n("./zipObject"),p=n("./generate"),g=n("./nodejsUtils"),m=n("./nodejs/NodejsStreamInputAdapter"),b=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var H=A.lastIndexOf("/");return 0<H?A.substring(0,H):""},v=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},E=function(A,H){return H=H!==void 0?H:u.createFolders,A=v(A),this.files[A]||r.call(this,A,null,{dir:!0,createFolders:H}),this.files[A]};function I(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var k={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var H,j,V;for(H in this.files)V=this.files[H],(j=H.slice(this.root.length,H.length))&&H.slice(0,this.root.length)===this.root&&A(j,V)},filter:function(A){var H=[];return this.forEach(function(j,V){A(j,V)&&H.push(V)}),H},file:function(A,H,j){if(arguments.length!==1)return A=this.root+A,r.call(this,A,H,j),this;if(I(A)){var V=A;return this.filter(function(Z,se){return!se.dir&&V.test(Z)})}var B=this.files[this.root+A];return B&&!B.dir?B:null},folder:function(A){if(!A)return this;if(I(A))return this.filter(function(B,Z){return Z.dir&&A.test(B)});var H=this.root+A,j=E.call(this,H),V=this.clone();return V.root=j.name,V},remove:function(A){A=this.root+A;var H=this.files[A];if(H||(A.slice(-1)!=="/"&&(A+="/"),H=this.files[A]),H&&!H.dir)delete this.files[A];else for(var j=this.filter(function(B,Z){return Z.name.slice(0,A.length)===A}),V=0;V<j.length;V++)delete this.files[j[V].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var H,j={};try{if((j=a.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=j.type.toLowerCase(),j.compression=j.compression.toUpperCase(),j.type==="binarystring"&&(j.type="string"),!j.type)throw new Error("No output type specified.");a.checkSupport(j.type),j.platform!=="darwin"&&j.platform!=="freebsd"&&j.platform!=="linux"&&j.platform!=="sunos"||(j.platform="UNIX"),j.platform==="win32"&&(j.platform="DOS");var V=j.comment||this.comment||"";H=p.generateWorker(this,j,V)}catch(B){(H=new l("error")).error(B)}return new c(H,j.type||"string",j.mimeType)},generateAsync:function(A,H){return this.generateInternalStream(A).accumulate(H)},generateNodeStream:function(A,H){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(H)}};s.exports=k},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,s,i){s.exports=n("stream")},{stream:void 0}],17:[function(n,s,i){var r=n("./DataReader");function o(a){r.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}n("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===c&&this.data[f+2]===u&&this.data[f+3]===h)return f-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),h=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&c===f[1]&&u===f[2]&&h===f[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},s.exports=o},{"../utils":32,"./DataReader":18}],18:[function(n,s,i){var r=n("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return r.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},s.exports=o},{"../utils":32}],19:[function(n,s,i){var r=n("./Uint8ArrayReader");function o(a){r.call(this,a)}n("../utils").inherits(o,r),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},s.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,s,i){var r=n("./DataReader");function o(a){r.call(this,a)}n("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},s.exports=o},{"../utils":32,"./DataReader":18}],21:[function(n,s,i){var r=n("./ArrayReader");function o(a){r.call(this,a)}n("../utils").inherits(o,r),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},s.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(n,s,i){var r=n("../utils"),o=n("../support"),a=n("./ArrayReader"),l=n("./StringReader"),c=n("./NodeBufferReader"),u=n("./Uint8ArrayReader");s.exports=function(h){var f=r.getTypeOf(h);return r.checkSupport(f),f!=="string"||o.uint8array?f==="nodebuffer"?new c(h):o.uint8array?new u(r.transformTo("uint8array",h)):new a(r.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,s,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,s,i){var r=n("./GenericWorker"),o=n("../utils");function a(l){r.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,r),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},s.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(n,s,i){var r=n("./GenericWorker"),o=n("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(a,r),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},s.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,s,i){var r=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}r.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},s.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(n,s,i){var r=n("../utils"),o=n("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=r.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}r.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(n,s,i){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},s.exports=r},{}],29:[function(n,s,i){var r=n("../utils"),o=n("./ConvertWorker"),a=n("./GenericWorker"),l=n("../base64"),c=n("../support"),u=n("../external"),h=null;if(c.nodestream)try{h=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(g,m){return new u.Promise(function(b,v){var E=[],I=g._internalType,k=g._outputType,A=g._mimeType;g.on("data",function(H,j){E.push(H),m&&m(j)}).on("error",function(H){E=[],v(H)}).on("end",function(){try{var H=(function(j,V,B){switch(j){case"blob":return r.newBlob(r.transformTo("arraybuffer",V),B);case"base64":return l.encode(V);default:return r.transformTo(j,V)}})(k,(function(j,V){var B,Z=0,se=null,P=0;for(B=0;B<V.length;B++)P+=V[B].length;switch(j){case"string":return V.join("");case"array":return Array.prototype.concat.apply([],V);case"uint8array":for(se=new Uint8Array(P),B=0;B<V.length;B++)se.set(V[B],Z),Z+=V[B].length;return se;case"nodebuffer":return Buffer.concat(V);default:throw new Error("concat : unsupported type '"+j+"'")}})(I,E),A);b(H)}catch(j){v(j)}E=[]}).resume()})}function p(g,m,b){var v=m;switch(m){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=m,this._mimeType=b,r.checkSupport(v),this._worker=g.pipe(new o(v)),g.lock()}catch(E){this._worker=new a("error"),this._worker.error(E)}}p.prototype={accumulate:function(g){return f(this,g)},on:function(g,m){var b=this;return g==="data"?this._worker.on(g,function(v){m.call(b,v.data,v.meta)}):this._worker.on(g,function(){r.delay(m,arguments,b)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},g)}},s.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,s,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var r=new ArrayBuffer(0);try{i.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,s,i){for(var r=n("./utils"),o=n("./support"),a=n("./nodejsUtils"),l=n("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):(function(g){var m,b,v,E,I,k=g.length,A=0;for(E=0;E<k;E++)(64512&(b=g.charCodeAt(E)))==55296&&E+1<k&&(64512&(v=g.charCodeAt(E+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),E++),A+=b<128?1:b<2048?2:b<65536?3:4;for(m=o.uint8array?new Uint8Array(A):new Array(A),E=I=0;I<A;E++)(64512&(b=g.charCodeAt(E)))==55296&&E+1<k&&(64512&(v=g.charCodeAt(E+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),E++),b<128?m[I++]=b:(b<2048?m[I++]=192|b>>>6:(b<65536?m[I++]=224|b>>>12:(m[I++]=240|b>>>18,m[I++]=128|b>>>12&63),m[I++]=128|b>>>6&63),m[I++]=128|63&b);return m})(p)},i.utf8decode=function(p){return o.nodebuffer?r.transformTo("nodebuffer",p).toString("utf-8"):(function(g){var m,b,v,E,I=g.length,k=new Array(2*I);for(m=b=0;m<I;)if((v=g[m++])<128)k[b++]=v;else if(4<(E=c[v]))k[b++]=65533,m+=E-1;else{for(v&=E===2?31:E===3?15:7;1<E&&m<I;)v=v<<6|63&g[m++],E--;1<E?k[b++]=65533:v<65536?k[b++]=v:(v-=65536,k[b++]=55296|v>>10&1023,k[b++]=56320|1023&v)}return k.length!==b&&(k.subarray?k=k.subarray(0,b):k.length=b),r.applyFromCharCode(k)})(p=r.transformTo(o.uint8array?"uint8array":"array",p))},r.inherits(h,l),h.prototype.processChunk=function(p){var g=r.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var m=g;(g=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),g.set(m,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var b=(function(E,I){var k;for((I=I||E.length)>E.length&&(I=E.length),k=I-1;0<=k&&(192&E[k])==128;)k--;return k<0||k===0?I:k+c[E[k]]>I?k:I})(g),v=g;b!==g.length&&(o.uint8array?(v=g.subarray(0,b),this.leftOver=g.subarray(b,g.length)):(v=g.slice(0,b),this.leftOver=g.slice(b,g.length))),this.push({data:i.utf8decode(v),meta:p.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,r.inherits(f,l),f.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,s,i){var r=n("./support"),o=n("./base64"),a=n("./nodejsUtils"),l=n("./external");function c(m){return m}function u(m,b){for(var v=0;v<m.length;++v)b[v]=255&m.charCodeAt(v);return b}n("setimmediate"),i.newBlob=function(m,b){i.checkSupport("blob");try{return new Blob([m],{type:b})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(m),v.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(m,b,v){var E=[],I=0,k=m.length;if(k<=v)return String.fromCharCode.apply(null,m);for(;I<k;)b==="array"||b==="nodebuffer"?E.push(String.fromCharCode.apply(null,m.slice(I,Math.min(I+v,k)))):E.push(String.fromCharCode.apply(null,m.subarray(I,Math.min(I+v,k)))),I+=v;return E.join("")},stringifyByChar:function(m){for(var b="",v=0;v<m.length;v++)b+=String.fromCharCode(m[v]);return b},applyCanBeUsed:{uint8array:(function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function f(m){var b=65536,v=i.getTypeOf(m),E=!0;if(v==="uint8array"?E=h.applyCanBeUsed.uint8array:v==="nodebuffer"&&(E=h.applyCanBeUsed.nodebuffer),E)for(;1<b;)try{return h.stringifyByChunk(m,v,b)}catch{b=Math.floor(b/2)}return h.stringifyByChar(m)}function p(m,b){for(var v=0;v<m.length;v++)b[v]=m[v];return b}i.applyFromCharCode=f;var g={};g.string={string:c,array:function(m){return u(m,new Array(m.length))},arraybuffer:function(m){return g.string.uint8array(m).buffer},uint8array:function(m){return u(m,new Uint8Array(m.length))},nodebuffer:function(m){return u(m,a.allocBuffer(m.length))}},g.array={string:f,array:c,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(m)}},g.arraybuffer={string:function(m){return f(new Uint8Array(m))},array:function(m){return p(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:c,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return a.newBufferFrom(new Uint8Array(m))}},g.uint8array={string:f,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:c,nodebuffer:function(m){return a.newBufferFrom(m)}},g.nodebuffer={string:f,array:function(m){return p(m,new Array(m.length))},arraybuffer:function(m){return g.nodebuffer.uint8array(m).buffer},uint8array:function(m){return p(m,new Uint8Array(m.length))},nodebuffer:c},i.transformTo=function(m,b){if(b=b||"",!m)return b;i.checkSupport(m);var v=i.getTypeOf(b);return g[v][m](b)},i.resolve=function(m){for(var b=m.split("/"),v=[],E=0;E<b.length;E++){var I=b[E];I==="."||I===""&&E!==0&&E!==b.length-1||(I===".."?v.pop():v.push(I))}return v.join("/")},i.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":r.nodebuffer&&a.isBuffer(m)?"nodebuffer":r.uint8array&&m instanceof Uint8Array?"uint8array":r.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(m){if(!r[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(m){var b,v,E="";for(v=0;v<(m||"").length;v++)E+="\\x"+((b=m.charCodeAt(v))<16?"0":"")+b.toString(16).toUpperCase();return E},i.delay=function(m,b,v){setImmediate(function(){m.apply(v||null,b||[])})},i.inherits=function(m,b){function v(){}v.prototype=b.prototype,m.prototype=new v},i.extend=function(){var m,b,v={};for(m=0;m<arguments.length;m++)for(b in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],b)&&v[b]===void 0&&(v[b]=arguments[m][b]);return v},i.prepareContent=function(m,b,v,E,I){return l.Promise.resolve(b).then(function(k){return r.blob&&(k instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(k))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,H){var j=new FileReader;j.onload=function(V){A(V.target.result)},j.onerror=function(V){H(V.target.error)},j.readAsArrayBuffer(k)}):k}).then(function(k){var A=i.getTypeOf(k);return A?(A==="arraybuffer"?k=i.transformTo("uint8array",k):A==="string"&&(I?k=o.decode(k):v&&E!==!0&&(k=(function(H){return u(H,r.uint8array?new Uint8Array(H.length):new Array(H.length))})(k))),k):l.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,s,i){var r=n("./reader/readerFor"),o=n("./utils"),a=n("./signature"),l=n("./zipEntry"),c=n("./support");function u(h){this.files=[],this.loadOptions=h}u.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(f)+", expected "+o.pretty(h)+")")}},isSignature:function(h,f){var p=this.reader.index;this.reader.setIndex(h);var g=this.reader.readString(4)===f;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),f=c.uint8array?"uint8array":"array",p=o.transformTo(f,h);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,f,p,g=this.zip64EndOfCentralSize-44;0<g;)h=this.reader.readInt(2),f=this.reader.readInt(4),p=this.reader.readData(f),this.zip64ExtensibleData[h]={id:h,length:f,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,f;for(h=0;h<this.files.length;h++)f=this.files[h],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var f=h;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=f-p;if(0<g)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(h){this.reader=r(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,s,i){var r=n("./reader/readerFor"),o=n("./utils"),a=n("./compressedObject"),l=n("./crc32"),c=n("./utf8"),u=n("./compressions"),h=n("./support");function f(p,g){this.options=p,this.loadOptions=g}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,m;if(p.skip(22),this.fileNameLength=p.readInt(2),m=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(b){for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v)&&u[v].magic===b)return u[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,m,b,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)g=p.readInt(2),m=p.readInt(2),b=p.readData(m),this.extraFields[g]={id:g,length:m,value:b};p.setIndex(v)},handleUTF8:function(){var p=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var m=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var v=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=r(p.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=r(p.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null}},s.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,s,i){function r(g,m,b){this.name=g,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=m,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var o=n("./stream/StreamHelper"),a=n("./stream/DataWorker"),l=n("./utf8"),c=n("./compressedObject"),u=n("./stream/GenericWorker");r.prototype={internalStream:function(g){var m=null,b="string";try{if(!g)throw new Error("No output type specified.");var v=(b=g.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),m=this._decompressWorker();var E=!this._dataBinary;E&&!v&&(m=m.pipe(new l.Utf8EncodeWorker)),!E&&v&&(m=m.pipe(new l.Utf8DecodeWorker))}catch(I){(m=new u("error")).error(I)}return new o(m,b,"")},async:function(g,m){return this.internalStream(g).accumulate(m)},nodeStream:function(g,m){return this.internalStream(g||"nodebuffer").toNodejsStream(m)},_compressWorker:function(g,m){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(b,g,m)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<h.length;p++)r.prototype[h[p]]=f;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,s,i){(function(r){var o,a,l=r.MutationObserver||r.WebKitMutationObserver;if(l){var c=0,u=new l(g),h=r.document.createTextNode("");u.observe(h,{characterData:!0}),o=function(){h.data=c=++c%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var m=r.document.createElement("script");m.onreadystatechange=function(){g(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},r.document.documentElement.appendChild(m)}:function(){setTimeout(g,0)};else{var f=new r.MessageChannel;f.port1.onmessage=g,o=function(){f.port2.postMessage(0)}}var p=[];function g(){var m,b;a=!0;for(var v=p.length;v;){for(b=p,p=[],m=-1;++m<v;)b[m]();v=p.length}a=!1}s.exports=function(m){p.push(m)!==1||a||o()}}).call(this,typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,s,i){var r=n("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function h(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,v!==o&&m(this,v)}function f(v,E,I){this.promise=v,typeof E=="function"&&(this.onFulfilled=E,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}function p(v,E,I){r(function(){var k;try{k=E(I)}catch(A){return a.reject(v,A)}k===v?a.reject(v,new TypeError("Cannot resolve promise with itself")):a.resolve(v,k)})}function g(v){var E=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof E=="function")return function(){E.apply(v,arguments)}}function m(v,E){var I=!1;function k(j){I||(I=!0,a.reject(v,j))}function A(j){I||(I=!0,a.resolve(v,j))}var H=b(function(){E(A,k)});H.status==="error"&&k(H.value)}function b(v,E){var I={};try{I.value=v(E),I.status="success"}catch(k){I.status="error",I.value=k}return I}(s.exports=h).prototype.finally=function(v){if(typeof v!="function")return this;var E=this.constructor;return this.then(function(I){return E.resolve(v()).then(function(){return I})},function(I){return E.resolve(v()).then(function(){throw I})})},h.prototype.catch=function(v){return this.then(null,v)},h.prototype.then=function(v,E){if(typeof v!="function"&&this.state===c||typeof E!="function"&&this.state===l)return this;var I=new this.constructor(o);return this.state!==u?p(I,this.state===c?v:E,this.outcome):this.queue.push(new f(I,v,E)),I},f.prototype.callFulfilled=function(v){a.resolve(this.promise,v)},f.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},f.prototype.callRejected=function(v){a.reject(this.promise,v)},f.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},a.resolve=function(v,E){var I=b(g,E);if(I.status==="error")return a.reject(v,I.value);var k=I.value;if(k)m(v,k);else{v.state=c,v.outcome=E;for(var A=-1,H=v.queue.length;++A<H;)v.queue[A].callFulfilled(E)}return v},a.reject=function(v,E){v.state=l,v.outcome=E;for(var I=-1,k=v.queue.length;++I<k;)v.queue[I].callRejected(E);return v},h.resolve=function(v){return v instanceof this?v:a.resolve(new this(o),v)},h.reject=function(v){var E=new this(o);return a.reject(E,v)},h.all=function(v){var E=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=v.length,k=!1;if(!I)return this.resolve([]);for(var A=new Array(I),H=0,j=-1,V=new this(o);++j<I;)B(v[j],j);return V;function B(Z,se){E.resolve(Z).then(function(P){A[se]=P,++H!==I||k||(k=!0,a.resolve(V,A))},function(P){k||(k=!0,a.reject(V,P))})}},h.race=function(v){var E=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=v.length,k=!1;if(!I)return this.resolve([]);for(var A=-1,H=new this(o);++A<I;)j=v[A],E.resolve(j).then(function(V){k||(k=!0,a.resolve(H,V))},function(V){k||(k=!0,a.reject(H,V))});var j;return H}},{immediate:36}],38:[function(n,s,i){var r={};(0,n("./lib/utils/common").assign)(r,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,s,i){var r=n("./zlib/deflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/messages"),c=n("./zlib/zstream"),u=Object.prototype.toString,h=0,f=-1,p=0,g=8;function m(v){if(!(this instanceof m))return new m(v);this.options=o.assign({level:f,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var E=this.options;E.raw&&0<E.windowBits?E.windowBits=-E.windowBits:E.gzip&&0<E.windowBits&&E.windowBits<16&&(E.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var I=r.deflateInit2(this.strm,E.level,E.method,E.windowBits,E.memLevel,E.strategy);if(I!==h)throw new Error(l[I]);if(E.header&&r.deflateSetHeader(this.strm,E.header),E.dictionary){var k;if(k=typeof E.dictionary=="string"?a.string2buf(E.dictionary):u.call(E.dictionary)==="[object ArrayBuffer]"?new Uint8Array(E.dictionary):E.dictionary,(I=r.deflateSetDictionary(this.strm,k))!==h)throw new Error(l[I]);this._dict_set=!0}}function b(v,E){var I=new m(E);if(I.push(v,!0),I.err)throw I.msg||l[I.err];return I.result}m.prototype.push=function(v,E){var I,k,A=this.strm,H=this.options.chunkSize;if(this.ended)return!1;k=E===~~E?E:E===!0?4:0,typeof v=="string"?A.input=a.string2buf(v):u.call(v)==="[object ArrayBuffer]"?A.input=new Uint8Array(v):A.input=v,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(H),A.next_out=0,A.avail_out=H),(I=r.deflate(A,k))!==1&&I!==h)return this.onEnd(I),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||k!==4&&k!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(A.output,A.next_out))):this.onData(o.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&I!==1);return k===4?(I=r.deflateEnd(this.strm),this.onEnd(I),this.ended=!0,I===h):k!==2||(this.onEnd(h),!(A.avail_out=0))},m.prototype.onData=function(v){this.chunks.push(v)},m.prototype.onEnd=function(v){v===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Deflate=m,i.deflate=b,i.deflateRaw=function(v,E){return(E=E||{}).raw=!0,b(v,E)},i.gzip=function(v,E){return(E=E||{}).gzip=!0,b(v,E)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,s,i){var r=n("./zlib/inflate"),o=n("./utils/common"),a=n("./utils/strings"),l=n("./zlib/constants"),c=n("./zlib/messages"),u=n("./zlib/zstream"),h=n("./zlib/gzheader"),f=Object.prototype.toString;function p(m){if(!(this instanceof p))return new p(m);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},m||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||m&&m.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=r.inflateInit2(this.strm,b.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new h,r.inflateGetHeader(this.strm,this.header)}function g(m,b){var v=new p(b);if(v.push(m,!0),v.err)throw v.msg||c[v.err];return v.result}p.prototype.push=function(m,b){var v,E,I,k,A,H,j=this.strm,V=this.options.chunkSize,B=this.options.dictionary,Z=!1;if(this.ended)return!1;E=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof m=="string"?j.input=a.binstring2buf(m):f.call(m)==="[object ArrayBuffer]"?j.input=new Uint8Array(m):j.input=m,j.next_in=0,j.avail_in=j.input.length;do{if(j.avail_out===0&&(j.output=new o.Buf8(V),j.next_out=0,j.avail_out=V),(v=r.inflate(j,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&B&&(H=typeof B=="string"?a.string2buf(B):f.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,v=r.inflateSetDictionary(this.strm,H)),v===l.Z_BUF_ERROR&&Z===!0&&(v=l.Z_OK,Z=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);j.next_out&&(j.avail_out!==0&&v!==l.Z_STREAM_END&&(j.avail_in!==0||E!==l.Z_FINISH&&E!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(I=a.utf8border(j.output,j.next_out),k=j.next_out-I,A=a.buf2string(j.output,I),j.next_out=k,j.avail_out=V-k,k&&o.arraySet(j.output,j.output,I,k,0),this.onData(A)):this.onData(o.shrinkBuf(j.output,j.next_out)))),j.avail_in===0&&j.avail_out===0&&(Z=!0)}while((0<j.avail_in||j.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(E=l.Z_FINISH),E===l.Z_FINISH?(v=r.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):E!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(j.avail_out=0))},p.prototype.onData=function(m){this.chunks.push(m)},p.prototype.onEnd=function(m){m===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},i.Inflate=p,i.inflate=g,i.inflateRaw=function(m,b){return(b=b||{}).raw=!0,g(m,b)},i.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,s,i){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var h in u)u.hasOwnProperty(h)&&(l[h]=u[h])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,u,h,f){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+h),f);else for(var p=0;p<h;p++)l[f+p]=c[u+p]},flattenChunks:function(l){var c,u,h,f,p,g;for(c=h=0,u=l.length;c<u;c++)h+=l[c].length;for(g=new Uint8Array(h),c=f=0,u=l.length;c<u;c++)p=l[c],g.set(p,f),f+=p.length;return g}},a={arraySet:function(l,c,u,h,f){for(var p=0;p<h;p++)l[f+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(r)},{}],42:[function(n,s,i){var r=n("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new r.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(h,f){if(f<65537&&(h.subarray&&a||!h.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(h,f));for(var p="",g=0;g<f;g++)p+=String.fromCharCode(h[g]);return p}l[254]=l[254]=1,i.string2buf=function(h){var f,p,g,m,b,v=h.length,E=0;for(m=0;m<v;m++)(64512&(p=h.charCodeAt(m)))==55296&&m+1<v&&(64512&(g=h.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),E+=p<128?1:p<2048?2:p<65536?3:4;for(f=new r.Buf8(E),m=b=0;b<E;m++)(64512&(p=h.charCodeAt(m)))==55296&&m+1<v&&(64512&(g=h.charCodeAt(m+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),m++),p<128?f[b++]=p:(p<2048?f[b++]=192|p>>>6:(p<65536?f[b++]=224|p>>>12:(f[b++]=240|p>>>18,f[b++]=128|p>>>12&63),f[b++]=128|p>>>6&63),f[b++]=128|63&p);return f},i.buf2binstring=function(h){return u(h,h.length)},i.binstring2buf=function(h){for(var f=new r.Buf8(h.length),p=0,g=f.length;p<g;p++)f[p]=h.charCodeAt(p);return f},i.buf2string=function(h,f){var p,g,m,b,v=f||h.length,E=new Array(2*v);for(p=g=0;p<v;)if((m=h[p++])<128)E[g++]=m;else if(4<(b=l[m]))E[g++]=65533,p+=b-1;else{for(m&=b===2?31:b===3?15:7;1<b&&p<v;)m=m<<6|63&h[p++],b--;1<b?E[g++]=65533:m<65536?E[g++]=m:(m-=65536,E[g++]=55296|m>>10&1023,E[g++]=56320|1023&m)}return u(E,g)},i.utf8border=function(h,f){var p;for((f=f||h.length)>h.length&&(f=h.length),p=f-1;0<=p&&(192&h[p])==128;)p--;return p<0||p===0?f:p+l[h[p]]>f?p:f}},{"./common":41}],43:[function(n,s,i){s.exports=function(r,o,a,l){for(var c=65535&r|0,u=r>>>16&65535|0,h=0;a!==0;){for(a-=h=2e3<a?2e3:a;u=u+(c=c+o[l++]|0)|0,--h;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(n,s,i){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,s,i){var r=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();s.exports=function(o,a,l,c){var u=r,h=c+l;o^=-1;for(var f=c;f<h;f++)o=o>>>8^u[255&(o^a[f])];return-1^o}},{}],46:[function(n,s,i){var r,o=n("../utils/common"),a=n("./trees"),l=n("./adler32"),c=n("./crc32"),u=n("./messages"),h=0,f=4,p=0,g=-2,m=-1,b=4,v=2,E=8,I=9,k=286,A=30,H=19,j=2*k+1,V=15,B=3,Z=258,se=Z+B+1,P=42,Y=113,_=1,U=2,q=3,D=4;function K(d,O){return d.msg=u[O],O}function G(d){return(d<<1)-(4<d?9:0)}function ne(d){for(var O=d.length;0<=--O;)d[O]=0}function $(d){var O=d.state,R=O.pending;R>d.avail_out&&(R=d.avail_out),R!==0&&(o.arraySet(d.output,O.pending_buf,O.pending_out,R,d.next_out),d.next_out+=R,O.pending_out+=R,d.total_out+=R,d.avail_out-=R,O.pending-=R,O.pending===0&&(O.pending_out=0))}function F(d,O){a._tr_flush_block(d,0<=d.block_start?d.block_start:-1,d.strstart-d.block_start,O),d.block_start=d.strstart,$(d.strm)}function ce(d,O){d.pending_buf[d.pending++]=O}function oe(d,O){d.pending_buf[d.pending++]=O>>>8&255,d.pending_buf[d.pending++]=255&O}function ie(d,O){var R,y,w=d.max_chain_length,T=d.strstart,L=d.prev_length,M=d.nice_match,N=d.strstart>d.w_size-se?d.strstart-(d.w_size-se):0,z=d.window,J=d.w_mask,Q=d.prev,ae=d.strstart+Z,de=z[T+L-1],ue=z[T+L];d.prev_length>=d.good_match&&(w>>=2),M>d.lookahead&&(M=d.lookahead);do if(z[(R=O)+L]===ue&&z[R+L-1]===de&&z[R]===z[T]&&z[++R]===z[T+1]){T+=2,R++;do;while(z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&z[++T]===z[++R]&&T<ae);if(y=Z-(ae-T),T=ae-Z,L<y){if(d.match_start=O,M<=(L=y))break;de=z[T+L-1],ue=z[T+L]}}while((O=Q[O&J])>N&&--w!=0);return L<=d.lookahead?L:d.lookahead}function ve(d){var O,R,y,w,T,L,M,N,z,J,Q=d.w_size;do{if(w=d.window_size-d.lookahead-d.strstart,d.strstart>=Q+(Q-se)){for(o.arraySet(d.window,d.window,Q,Q,0),d.match_start-=Q,d.strstart-=Q,d.block_start-=Q,O=R=d.hash_size;y=d.head[--O],d.head[O]=Q<=y?y-Q:0,--R;);for(O=R=Q;y=d.prev[--O],d.prev[O]=Q<=y?y-Q:0,--R;);w+=Q}if(d.strm.avail_in===0)break;if(L=d.strm,M=d.window,N=d.strstart+d.lookahead,z=w,J=void 0,J=L.avail_in,z<J&&(J=z),R=J===0?0:(L.avail_in-=J,o.arraySet(M,L.input,L.next_in,J,N),L.state.wrap===1?L.adler=l(L.adler,M,J,N):L.state.wrap===2&&(L.adler=c(L.adler,M,J,N)),L.next_in+=J,L.total_in+=J,J),d.lookahead+=R,d.lookahead+d.insert>=B)for(T=d.strstart-d.insert,d.ins_h=d.window[T],d.ins_h=(d.ins_h<<d.hash_shift^d.window[T+1])&d.hash_mask;d.insert&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[T+B-1])&d.hash_mask,d.prev[T&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=T,T++,d.insert--,!(d.lookahead+d.insert<B)););}while(d.lookahead<se&&d.strm.avail_in!==0)}function X(d,O){for(var R,y;;){if(d.lookahead<se){if(ve(d),d.lookahead<se&&O===h)return _;if(d.lookahead===0)break}if(R=0,d.lookahead>=B&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+B-1])&d.hash_mask,R=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart),R!==0&&d.strstart-R<=d.w_size-se&&(d.match_length=ie(d,R)),d.match_length>=B)if(y=a._tr_tally(d,d.strstart-d.match_start,d.match_length-B),d.lookahead-=d.match_length,d.match_length<=d.max_lazy_match&&d.lookahead>=B){for(d.match_length--;d.strstart++,d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+B-1])&d.hash_mask,R=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart,--d.match_length!=0;);d.strstart++}else d.strstart+=d.match_length,d.match_length=0,d.ins_h=d.window[d.strstart],d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+1])&d.hash_mask;else y=a._tr_tally(d,0,d.window[d.strstart]),d.lookahead--,d.strstart++;if(y&&(F(d,!1),d.strm.avail_out===0))return _}return d.insert=d.strstart<B-1?d.strstart:B-1,O===f?(F(d,!0),d.strm.avail_out===0?q:D):d.last_lit&&(F(d,!1),d.strm.avail_out===0)?_:U}function te(d,O){for(var R,y,w;;){if(d.lookahead<se){if(ve(d),d.lookahead<se&&O===h)return _;if(d.lookahead===0)break}if(R=0,d.lookahead>=B&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+B-1])&d.hash_mask,R=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart),d.prev_length=d.match_length,d.prev_match=d.match_start,d.match_length=B-1,R!==0&&d.prev_length<d.max_lazy_match&&d.strstart-R<=d.w_size-se&&(d.match_length=ie(d,R),d.match_length<=5&&(d.strategy===1||d.match_length===B&&4096<d.strstart-d.match_start)&&(d.match_length=B-1)),d.prev_length>=B&&d.match_length<=d.prev_length){for(w=d.strstart+d.lookahead-B,y=a._tr_tally(d,d.strstart-1-d.prev_match,d.prev_length-B),d.lookahead-=d.prev_length-1,d.prev_length-=2;++d.strstart<=w&&(d.ins_h=(d.ins_h<<d.hash_shift^d.window[d.strstart+B-1])&d.hash_mask,R=d.prev[d.strstart&d.w_mask]=d.head[d.ins_h],d.head[d.ins_h]=d.strstart),--d.prev_length!=0;);if(d.match_available=0,d.match_length=B-1,d.strstart++,y&&(F(d,!1),d.strm.avail_out===0))return _}else if(d.match_available){if((y=a._tr_tally(d,0,d.window[d.strstart-1]))&&F(d,!1),d.strstart++,d.lookahead--,d.strm.avail_out===0)return _}else d.match_available=1,d.strstart++,d.lookahead--}return d.match_available&&(y=a._tr_tally(d,0,d.window[d.strstart-1]),d.match_available=0),d.insert=d.strstart<B-1?d.strstart:B-1,O===f?(F(d,!0),d.strm.avail_out===0?q:D):d.last_lit&&(F(d,!1),d.strm.avail_out===0)?_:U}function ee(d,O,R,y,w){this.good_length=d,this.max_lazy=O,this.nice_length=R,this.max_chain=y,this.func=w}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=E,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*j),this.dyn_dtree=new o.Buf16(2*(2*A+1)),this.bl_tree=new o.Buf16(2*(2*H+1)),ne(this.dyn_ltree),ne(this.dyn_dtree),ne(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(V+1),this.heap=new o.Buf16(2*k+1),ne(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*k+1),ne(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function he(d){var O;return d&&d.state?(d.total_in=d.total_out=0,d.data_type=v,(O=d.state).pending=0,O.pending_out=0,O.wrap<0&&(O.wrap=-O.wrap),O.status=O.wrap?P:Y,d.adler=O.wrap===2?0:1,O.last_flush=h,a._tr_init(O),p):K(d,g)}function S(d){var O=he(d);return O===p&&(function(R){R.window_size=2*R.w_size,ne(R.head),R.max_lazy_match=r[R.level].max_lazy,R.good_match=r[R.level].good_length,R.nice_match=r[R.level].nice_length,R.max_chain_length=r[R.level].max_chain,R.strstart=0,R.block_start=0,R.lookahead=0,R.insert=0,R.match_length=R.prev_length=B-1,R.match_available=0,R.ins_h=0})(d.state),O}function x(d,O,R,y,w,T){if(!d)return g;var L=1;if(O===m&&(O=6),y<0?(L=0,y=-y):15<y&&(L=2,y-=16),w<1||I<w||R!==E||y<8||15<y||O<0||9<O||T<0||b<T)return K(d,g);y===8&&(y=9);var M=new re;return(d.state=M).strm=d,M.wrap=L,M.gzhead=null,M.w_bits=y,M.w_size=1<<M.w_bits,M.w_mask=M.w_size-1,M.hash_bits=w+7,M.hash_size=1<<M.hash_bits,M.hash_mask=M.hash_size-1,M.hash_shift=~~((M.hash_bits+B-1)/B),M.window=new o.Buf8(2*M.w_size),M.head=new o.Buf16(M.hash_size),M.prev=new o.Buf16(M.w_size),M.lit_bufsize=1<<w+6,M.pending_buf_size=4*M.lit_bufsize,M.pending_buf=new o.Buf8(M.pending_buf_size),M.d_buf=1*M.lit_bufsize,M.l_buf=3*M.lit_bufsize,M.level=O,M.strategy=T,M.method=R,S(d)}r=[new ee(0,0,0,0,function(d,O){var R=65535;for(R>d.pending_buf_size-5&&(R=d.pending_buf_size-5);;){if(d.lookahead<=1){if(ve(d),d.lookahead===0&&O===h)return _;if(d.lookahead===0)break}d.strstart+=d.lookahead,d.lookahead=0;var y=d.block_start+R;if((d.strstart===0||d.strstart>=y)&&(d.lookahead=d.strstart-y,d.strstart=y,F(d,!1),d.strm.avail_out===0)||d.strstart-d.block_start>=d.w_size-se&&(F(d,!1),d.strm.avail_out===0))return _}return d.insert=0,O===f?(F(d,!0),d.strm.avail_out===0?q:D):(d.strstart>d.block_start&&(F(d,!1),d.strm.avail_out),_)}),new ee(4,4,8,4,X),new ee(4,5,16,8,X),new ee(4,6,32,32,X),new ee(4,4,16,16,te),new ee(8,16,32,32,te),new ee(8,16,128,128,te),new ee(8,32,128,256,te),new ee(32,128,258,1024,te),new ee(32,258,258,4096,te)],i.deflateInit=function(d,O){return x(d,O,E,15,8,0)},i.deflateInit2=x,i.deflateReset=S,i.deflateResetKeep=he,i.deflateSetHeader=function(d,O){return d&&d.state?d.state.wrap!==2?g:(d.state.gzhead=O,p):g},i.deflate=function(d,O){var R,y,w,T;if(!d||!d.state||5<O||O<0)return d?K(d,g):g;if(y=d.state,!d.output||!d.input&&d.avail_in!==0||y.status===666&&O!==f)return K(d,d.avail_out===0?-5:g);if(y.strm=d,R=y.last_flush,y.last_flush=O,y.status===P)if(y.wrap===2)d.adler=0,ce(y,31),ce(y,139),ce(y,8),y.gzhead?(ce(y,(y.gzhead.text?1:0)+(y.gzhead.hcrc?2:0)+(y.gzhead.extra?4:0)+(y.gzhead.name?8:0)+(y.gzhead.comment?16:0)),ce(y,255&y.gzhead.time),ce(y,y.gzhead.time>>8&255),ce(y,y.gzhead.time>>16&255),ce(y,y.gzhead.time>>24&255),ce(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),ce(y,255&y.gzhead.os),y.gzhead.extra&&y.gzhead.extra.length&&(ce(y,255&y.gzhead.extra.length),ce(y,y.gzhead.extra.length>>8&255)),y.gzhead.hcrc&&(d.adler=c(d.adler,y.pending_buf,y.pending,0)),y.gzindex=0,y.status=69):(ce(y,0),ce(y,0),ce(y,0),ce(y,0),ce(y,0),ce(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),ce(y,3),y.status=Y);else{var L=E+(y.w_bits-8<<4)<<8;L|=(2<=y.strategy||y.level<2?0:y.level<6?1:y.level===6?2:3)<<6,y.strstart!==0&&(L|=32),L+=31-L%31,y.status=Y,oe(y,L),y.strstart!==0&&(oe(y,d.adler>>>16),oe(y,65535&d.adler)),d.adler=1}if(y.status===69)if(y.gzhead.extra){for(w=y.pending;y.gzindex<(65535&y.gzhead.extra.length)&&(y.pending!==y.pending_buf_size||(y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),$(d),w=y.pending,y.pending!==y.pending_buf_size));)ce(y,255&y.gzhead.extra[y.gzindex]),y.gzindex++;y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),y.gzindex===y.gzhead.extra.length&&(y.gzindex=0,y.status=73)}else y.status=73;if(y.status===73)if(y.gzhead.name){w=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),$(d),w=y.pending,y.pending===y.pending_buf_size)){T=1;break}T=y.gzindex<y.gzhead.name.length?255&y.gzhead.name.charCodeAt(y.gzindex++):0,ce(y,T)}while(T!==0);y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),T===0&&(y.gzindex=0,y.status=91)}else y.status=91;if(y.status===91)if(y.gzhead.comment){w=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),$(d),w=y.pending,y.pending===y.pending_buf_size)){T=1;break}T=y.gzindex<y.gzhead.comment.length?255&y.gzhead.comment.charCodeAt(y.gzindex++):0,ce(y,T)}while(T!==0);y.gzhead.hcrc&&y.pending>w&&(d.adler=c(d.adler,y.pending_buf,y.pending-w,w)),T===0&&(y.status=103)}else y.status=103;if(y.status===103&&(y.gzhead.hcrc?(y.pending+2>y.pending_buf_size&&$(d),y.pending+2<=y.pending_buf_size&&(ce(y,255&d.adler),ce(y,d.adler>>8&255),d.adler=0,y.status=Y)):y.status=Y),y.pending!==0){if($(d),d.avail_out===0)return y.last_flush=-1,p}else if(d.avail_in===0&&G(O)<=G(R)&&O!==f)return K(d,-5);if(y.status===666&&d.avail_in!==0)return K(d,-5);if(d.avail_in!==0||y.lookahead!==0||O!==h&&y.status!==666){var M=y.strategy===2?(function(N,z){for(var J;;){if(N.lookahead===0&&(ve(N),N.lookahead===0)){if(z===h)return _;break}if(N.match_length=0,J=a._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++,J&&(F(N,!1),N.strm.avail_out===0))return _}return N.insert=0,z===f?(F(N,!0),N.strm.avail_out===0?q:D):N.last_lit&&(F(N,!1),N.strm.avail_out===0)?_:U})(y,O):y.strategy===3?(function(N,z){for(var J,Q,ae,de,ue=N.window;;){if(N.lookahead<=Z){if(ve(N),N.lookahead<=Z&&z===h)return _;if(N.lookahead===0)break}if(N.match_length=0,N.lookahead>=B&&0<N.strstart&&(Q=ue[ae=N.strstart-1])===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]){de=N.strstart+Z;do;while(Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&Q===ue[++ae]&&ae<de);N.match_length=Z-(de-ae),N.match_length>N.lookahead&&(N.match_length=N.lookahead)}if(N.match_length>=B?(J=a._tr_tally(N,1,N.match_length-B),N.lookahead-=N.match_length,N.strstart+=N.match_length,N.match_length=0):(J=a._tr_tally(N,0,N.window[N.strstart]),N.lookahead--,N.strstart++),J&&(F(N,!1),N.strm.avail_out===0))return _}return N.insert=0,z===f?(F(N,!0),N.strm.avail_out===0?q:D):N.last_lit&&(F(N,!1),N.strm.avail_out===0)?_:U})(y,O):r[y.level].func(y,O);if(M!==q&&M!==D||(y.status=666),M===_||M===q)return d.avail_out===0&&(y.last_flush=-1),p;if(M===U&&(O===1?a._tr_align(y):O!==5&&(a._tr_stored_block(y,0,0,!1),O===3&&(ne(y.head),y.lookahead===0&&(y.strstart=0,y.block_start=0,y.insert=0))),$(d),d.avail_out===0))return y.last_flush=-1,p}return O!==f?p:y.wrap<=0?1:(y.wrap===2?(ce(y,255&d.adler),ce(y,d.adler>>8&255),ce(y,d.adler>>16&255),ce(y,d.adler>>24&255),ce(y,255&d.total_in),ce(y,d.total_in>>8&255),ce(y,d.total_in>>16&255),ce(y,d.total_in>>24&255)):(oe(y,d.adler>>>16),oe(y,65535&d.adler)),$(d),0<y.wrap&&(y.wrap=-y.wrap),y.pending!==0?p:1)},i.deflateEnd=function(d){var O;return d&&d.state?(O=d.state.status)!==P&&O!==69&&O!==73&&O!==91&&O!==103&&O!==Y&&O!==666?K(d,g):(d.state=null,O===Y?K(d,-3):p):g},i.deflateSetDictionary=function(d,O){var R,y,w,T,L,M,N,z,J=O.length;if(!d||!d.state||(T=(R=d.state).wrap)===2||T===1&&R.status!==P||R.lookahead)return g;for(T===1&&(d.adler=l(d.adler,O,J,0)),R.wrap=0,J>=R.w_size&&(T===0&&(ne(R.head),R.strstart=0,R.block_start=0,R.insert=0),z=new o.Buf8(R.w_size),o.arraySet(z,O,J-R.w_size,R.w_size,0),O=z,J=R.w_size),L=d.avail_in,M=d.next_in,N=d.input,d.avail_in=J,d.next_in=0,d.input=O,ve(R);R.lookahead>=B;){for(y=R.strstart,w=R.lookahead-(B-1);R.ins_h=(R.ins_h<<R.hash_shift^R.window[y+B-1])&R.hash_mask,R.prev[y&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=y,y++,--w;);R.strstart=y,R.lookahead=B-1,ve(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=B-1,R.match_available=0,d.next_in=M,d.input=N,d.avail_in=L,R.wrap=T,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,s,i){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,s,i){s.exports=function(r,o){var a,l,c,u,h,f,p,g,m,b,v,E,I,k,A,H,j,V,B,Z,se,P,Y,_,U;a=r.state,l=r.next_in,_=r.input,c=l+(r.avail_in-5),u=r.next_out,U=r.output,h=u-(o-r.avail_out),f=u+(r.avail_out-257),p=a.dmax,g=a.wsize,m=a.whave,b=a.wnext,v=a.window,E=a.hold,I=a.bits,k=a.lencode,A=a.distcode,H=(1<<a.lenbits)-1,j=(1<<a.distbits)-1;e:do{I<15&&(E+=_[l++]<<I,I+=8,E+=_[l++]<<I,I+=8),V=k[E&H];t:for(;;){if(E>>>=B=V>>>24,I-=B,(B=V>>>16&255)===0)U[u++]=65535&V;else{if(!(16&B)){if((64&B)==0){V=k[(65535&V)+(E&(1<<B)-1)];continue t}if(32&B){a.mode=12;break e}r.msg="invalid literal/length code",a.mode=30;break e}Z=65535&V,(B&=15)&&(I<B&&(E+=_[l++]<<I,I+=8),Z+=E&(1<<B)-1,E>>>=B,I-=B),I<15&&(E+=_[l++]<<I,I+=8,E+=_[l++]<<I,I+=8),V=A[E&j];n:for(;;){if(E>>>=B=V>>>24,I-=B,!(16&(B=V>>>16&255))){if((64&B)==0){V=A[(65535&V)+(E&(1<<B)-1)];continue n}r.msg="invalid distance code",a.mode=30;break e}if(se=65535&V,I<(B&=15)&&(E+=_[l++]<<I,(I+=8)<B&&(E+=_[l++]<<I,I+=8)),p<(se+=E&(1<<B)-1)){r.msg="invalid distance too far back",a.mode=30;break e}if(E>>>=B,I-=B,(B=u-h)<se){if(m<(B=se-B)&&a.sane){r.msg="invalid distance too far back",a.mode=30;break e}if(Y=v,(P=0)===b){if(P+=g-B,B<Z){for(Z-=B;U[u++]=v[P++],--B;);P=u-se,Y=U}}else if(b<B){if(P+=g+b-B,(B-=b)<Z){for(Z-=B;U[u++]=v[P++],--B;);if(P=0,b<Z){for(Z-=B=b;U[u++]=v[P++],--B;);P=u-se,Y=U}}}else if(P+=b-B,B<Z){for(Z-=B;U[u++]=v[P++],--B;);P=u-se,Y=U}for(;2<Z;)U[u++]=Y[P++],U[u++]=Y[P++],U[u++]=Y[P++],Z-=3;Z&&(U[u++]=Y[P++],1<Z&&(U[u++]=Y[P++]))}else{for(P=u-se;U[u++]=U[P++],U[u++]=U[P++],U[u++]=U[P++],2<(Z-=3););Z&&(U[u++]=U[P++],1<Z&&(U[u++]=U[P++]))}break}}break}}while(l<c&&u<f);l-=Z=I>>3,E&=(1<<(I-=Z<<3))-1,r.next_in=l,r.next_out=u,r.avail_in=l<c?c-l+5:5-(l-c),r.avail_out=u<f?f-u+257:257-(u-f),a.hold=E,a.bits=I}},{}],49:[function(n,s,i){var r=n("../utils/common"),o=n("./adler32"),a=n("./crc32"),l=n("./inffast"),c=n("./inftrees"),u=1,h=2,f=0,p=-2,g=1,m=852,b=592;function v(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function E(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function I(P){var Y;return P&&P.state?(Y=P.state,P.total_in=P.total_out=Y.total=0,P.msg="",Y.wrap&&(P.adler=1&Y.wrap),Y.mode=g,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new r.Buf32(m),Y.distcode=Y.distdyn=new r.Buf32(b),Y.sane=1,Y.back=-1,f):p}function k(P){var Y;return P&&P.state?((Y=P.state).wsize=0,Y.whave=0,Y.wnext=0,I(P)):p}function A(P,Y){var _,U;return P&&P.state?(U=P.state,Y<0?(_=0,Y=-Y):(_=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?p:(U.window!==null&&U.wbits!==Y&&(U.window=null),U.wrap=_,U.wbits=Y,k(P))):p}function H(P,Y){var _,U;return P?(U=new E,(P.state=U).window=null,(_=A(P,Y))!==f&&(P.state=null),_):p}var j,V,B=!0;function Z(P){if(B){var Y;for(j=new r.Buf32(512),V=new r.Buf32(32),Y=0;Y<144;)P.lens[Y++]=8;for(;Y<256;)P.lens[Y++]=9;for(;Y<280;)P.lens[Y++]=7;for(;Y<288;)P.lens[Y++]=8;for(c(u,P.lens,0,288,j,0,P.work,{bits:9}),Y=0;Y<32;)P.lens[Y++]=5;c(h,P.lens,0,32,V,0,P.work,{bits:5}),B=!1}P.lencode=j,P.lenbits=9,P.distcode=V,P.distbits=5}function se(P,Y,_,U){var q,D=P.state;return D.window===null&&(D.wsize=1<<D.wbits,D.wnext=0,D.whave=0,D.window=new r.Buf8(D.wsize)),U>=D.wsize?(r.arraySet(D.window,Y,_-D.wsize,D.wsize,0),D.wnext=0,D.whave=D.wsize):(U<(q=D.wsize-D.wnext)&&(q=U),r.arraySet(D.window,Y,_-U,q,D.wnext),(U-=q)?(r.arraySet(D.window,Y,_-U,U,0),D.wnext=U,D.whave=D.wsize):(D.wnext+=q,D.wnext===D.wsize&&(D.wnext=0),D.whave<D.wsize&&(D.whave+=q))),0}i.inflateReset=k,i.inflateReset2=A,i.inflateResetKeep=I,i.inflateInit=function(P){return H(P,15)},i.inflateInit2=H,i.inflate=function(P,Y){var _,U,q,D,K,G,ne,$,F,ce,oe,ie,ve,X,te,ee,re,he,S,x,d,O,R,y,w=0,T=new r.Buf8(4),L=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return p;(_=P.state).mode===12&&(_.mode=13),K=P.next_out,q=P.output,ne=P.avail_out,D=P.next_in,U=P.input,G=P.avail_in,$=_.hold,F=_.bits,ce=G,oe=ne,O=f;e:for(;;)switch(_.mode){case g:if(_.wrap===0){_.mode=13;break}for(;F<16;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if(2&_.wrap&&$===35615){T[_.check=0]=255&$,T[1]=$>>>8&255,_.check=a(_.check,T,2,0),F=$=0,_.mode=2;break}if(_.flags=0,_.head&&(_.head.done=!1),!(1&_.wrap)||(((255&$)<<8)+($>>8))%31){P.msg="incorrect header check",_.mode=30;break}if((15&$)!=8){P.msg="unknown compression method",_.mode=30;break}if(F-=4,d=8+(15&($>>>=4)),_.wbits===0)_.wbits=d;else if(d>_.wbits){P.msg="invalid window size",_.mode=30;break}_.dmax=1<<d,P.adler=_.check=1,_.mode=512&$?10:12,F=$=0;break;case 2:for(;F<16;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if(_.flags=$,(255&_.flags)!=8){P.msg="unknown compression method",_.mode=30;break}if(57344&_.flags){P.msg="unknown header flags set",_.mode=30;break}_.head&&(_.head.text=$>>8&1),512&_.flags&&(T[0]=255&$,T[1]=$>>>8&255,_.check=a(_.check,T,2,0)),F=$=0,_.mode=3;case 3:for(;F<32;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.head&&(_.head.time=$),512&_.flags&&(T[0]=255&$,T[1]=$>>>8&255,T[2]=$>>>16&255,T[3]=$>>>24&255,_.check=a(_.check,T,4,0)),F=$=0,_.mode=4;case 4:for(;F<16;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.head&&(_.head.xflags=255&$,_.head.os=$>>8),512&_.flags&&(T[0]=255&$,T[1]=$>>>8&255,_.check=a(_.check,T,2,0)),F=$=0,_.mode=5;case 5:if(1024&_.flags){for(;F<16;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.length=$,_.head&&(_.head.extra_len=$),512&_.flags&&(T[0]=255&$,T[1]=$>>>8&255,_.check=a(_.check,T,2,0)),F=$=0}else _.head&&(_.head.extra=null);_.mode=6;case 6:if(1024&_.flags&&(G<(ie=_.length)&&(ie=G),ie&&(_.head&&(d=_.head.extra_len-_.length,_.head.extra||(_.head.extra=new Array(_.head.extra_len)),r.arraySet(_.head.extra,U,D,ie,d)),512&_.flags&&(_.check=a(_.check,U,ie,D)),G-=ie,D+=ie,_.length-=ie),_.length))break e;_.length=0,_.mode=7;case 7:if(2048&_.flags){if(G===0)break e;for(ie=0;d=U[D+ie++],_.head&&d&&_.length<65536&&(_.head.name+=String.fromCharCode(d)),d&&ie<G;);if(512&_.flags&&(_.check=a(_.check,U,ie,D)),G-=ie,D+=ie,d)break e}else _.head&&(_.head.name=null);_.length=0,_.mode=8;case 8:if(4096&_.flags){if(G===0)break e;for(ie=0;d=U[D+ie++],_.head&&d&&_.length<65536&&(_.head.comment+=String.fromCharCode(d)),d&&ie<G;);if(512&_.flags&&(_.check=a(_.check,U,ie,D)),G-=ie,D+=ie,d)break e}else _.head&&(_.head.comment=null);_.mode=9;case 9:if(512&_.flags){for(;F<16;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if($!==(65535&_.check)){P.msg="header crc mismatch",_.mode=30;break}F=$=0}_.head&&(_.head.hcrc=_.flags>>9&1,_.head.done=!0),P.adler=_.check=0,_.mode=12;break;case 10:for(;F<32;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}P.adler=_.check=v($),F=$=0,_.mode=11;case 11:if(_.havedict===0)return P.next_out=K,P.avail_out=ne,P.next_in=D,P.avail_in=G,_.hold=$,_.bits=F,2;P.adler=_.check=1,_.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(_.last){$>>>=7&F,F-=7&F,_.mode=27;break}for(;F<3;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}switch(_.last=1&$,F-=1,3&($>>>=1)){case 0:_.mode=14;break;case 1:if(Z(_),_.mode=20,Y!==6)break;$>>>=2,F-=2;break e;case 2:_.mode=17;break;case 3:P.msg="invalid block type",_.mode=30}$>>>=2,F-=2;break;case 14:for($>>>=7&F,F-=7&F;F<32;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if((65535&$)!=($>>>16^65535)){P.msg="invalid stored block lengths",_.mode=30;break}if(_.length=65535&$,F=$=0,_.mode=15,Y===6)break e;case 15:_.mode=16;case 16:if(ie=_.length){if(G<ie&&(ie=G),ne<ie&&(ie=ne),ie===0)break e;r.arraySet(q,U,D,ie,K),G-=ie,D+=ie,ne-=ie,K+=ie,_.length-=ie;break}_.mode=12;break;case 17:for(;F<14;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if(_.nlen=257+(31&$),$>>>=5,F-=5,_.ndist=1+(31&$),$>>>=5,F-=5,_.ncode=4+(15&$),$>>>=4,F-=4,286<_.nlen||30<_.ndist){P.msg="too many length or distance symbols",_.mode=30;break}_.have=0,_.mode=18;case 18:for(;_.have<_.ncode;){for(;F<3;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.lens[L[_.have++]]=7&$,$>>>=3,F-=3}for(;_.have<19;)_.lens[L[_.have++]]=0;if(_.lencode=_.lendyn,_.lenbits=7,R={bits:_.lenbits},O=c(0,_.lens,0,19,_.lencode,0,_.work,R),_.lenbits=R.bits,O){P.msg="invalid code lengths set",_.mode=30;break}_.have=0,_.mode=19;case 19:for(;_.have<_.nlen+_.ndist;){for(;ee=(w=_.lencode[$&(1<<_.lenbits)-1])>>>16&255,re=65535&w,!((te=w>>>24)<=F);){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if(re<16)$>>>=te,F-=te,_.lens[_.have++]=re;else{if(re===16){for(y=te+2;F<y;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if($>>>=te,F-=te,_.have===0){P.msg="invalid bit length repeat",_.mode=30;break}d=_.lens[_.have-1],ie=3+(3&$),$>>>=2,F-=2}else if(re===17){for(y=te+3;F<y;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}F-=te,d=0,ie=3+(7&($>>>=te)),$>>>=3,F-=3}else{for(y=te+7;F<y;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}F-=te,d=0,ie=11+(127&($>>>=te)),$>>>=7,F-=7}if(_.have+ie>_.nlen+_.ndist){P.msg="invalid bit length repeat",_.mode=30;break}for(;ie--;)_.lens[_.have++]=d}}if(_.mode===30)break;if(_.lens[256]===0){P.msg="invalid code -- missing end-of-block",_.mode=30;break}if(_.lenbits=9,R={bits:_.lenbits},O=c(u,_.lens,0,_.nlen,_.lencode,0,_.work,R),_.lenbits=R.bits,O){P.msg="invalid literal/lengths set",_.mode=30;break}if(_.distbits=6,_.distcode=_.distdyn,R={bits:_.distbits},O=c(h,_.lens,_.nlen,_.ndist,_.distcode,0,_.work,R),_.distbits=R.bits,O){P.msg="invalid distances set",_.mode=30;break}if(_.mode=20,Y===6)break e;case 20:_.mode=21;case 21:if(6<=G&&258<=ne){P.next_out=K,P.avail_out=ne,P.next_in=D,P.avail_in=G,_.hold=$,_.bits=F,l(P,oe),K=P.next_out,q=P.output,ne=P.avail_out,D=P.next_in,U=P.input,G=P.avail_in,$=_.hold,F=_.bits,_.mode===12&&(_.back=-1);break}for(_.back=0;ee=(w=_.lencode[$&(1<<_.lenbits)-1])>>>16&255,re=65535&w,!((te=w>>>24)<=F);){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if(ee&&(240&ee)==0){for(he=te,S=ee,x=re;ee=(w=_.lencode[x+(($&(1<<he+S)-1)>>he)])>>>16&255,re=65535&w,!(he+(te=w>>>24)<=F);){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}$>>>=he,F-=he,_.back+=he}if($>>>=te,F-=te,_.back+=te,_.length=re,ee===0){_.mode=26;break}if(32&ee){_.back=-1,_.mode=12;break}if(64&ee){P.msg="invalid literal/length code",_.mode=30;break}_.extra=15&ee,_.mode=22;case 22:if(_.extra){for(y=_.extra;F<y;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.length+=$&(1<<_.extra)-1,$>>>=_.extra,F-=_.extra,_.back+=_.extra}_.was=_.length,_.mode=23;case 23:for(;ee=(w=_.distcode[$&(1<<_.distbits)-1])>>>16&255,re=65535&w,!((te=w>>>24)<=F);){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if((240&ee)==0){for(he=te,S=ee,x=re;ee=(w=_.distcode[x+(($&(1<<he+S)-1)>>he)])>>>16&255,re=65535&w,!(he+(te=w>>>24)<=F);){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}$>>>=he,F-=he,_.back+=he}if($>>>=te,F-=te,_.back+=te,64&ee){P.msg="invalid distance code",_.mode=30;break}_.offset=re,_.extra=15&ee,_.mode=24;case 24:if(_.extra){for(y=_.extra;F<y;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}_.offset+=$&(1<<_.extra)-1,$>>>=_.extra,F-=_.extra,_.back+=_.extra}if(_.offset>_.dmax){P.msg="invalid distance too far back",_.mode=30;break}_.mode=25;case 25:if(ne===0)break e;if(ie=oe-ne,_.offset>ie){if((ie=_.offset-ie)>_.whave&&_.sane){P.msg="invalid distance too far back",_.mode=30;break}ve=ie>_.wnext?(ie-=_.wnext,_.wsize-ie):_.wnext-ie,ie>_.length&&(ie=_.length),X=_.window}else X=q,ve=K-_.offset,ie=_.length;for(ne<ie&&(ie=ne),ne-=ie,_.length-=ie;q[K++]=X[ve++],--ie;);_.length===0&&(_.mode=21);break;case 26:if(ne===0)break e;q[K++]=_.length,ne--,_.mode=21;break;case 27:if(_.wrap){for(;F<32;){if(G===0)break e;G--,$|=U[D++]<<F,F+=8}if(oe-=ne,P.total_out+=oe,_.total+=oe,oe&&(P.adler=_.check=_.flags?a(_.check,q,oe,K-oe):o(_.check,q,oe,K-oe)),oe=ne,(_.flags?$:v($))!==_.check){P.msg="incorrect data check",_.mode=30;break}F=$=0}_.mode=28;case 28:if(_.wrap&&_.flags){for(;F<32;){if(G===0)break e;G--,$+=U[D++]<<F,F+=8}if($!==(4294967295&_.total)){P.msg="incorrect length check",_.mode=30;break}F=$=0}_.mode=29;case 29:O=1;break e;case 30:O=-3;break e;case 31:return-4;case 32:default:return p}return P.next_out=K,P.avail_out=ne,P.next_in=D,P.avail_in=G,_.hold=$,_.bits=F,(_.wsize||oe!==P.avail_out&&_.mode<30&&(_.mode<27||Y!==4))&&se(P,P.output,P.next_out,oe-P.avail_out)?(_.mode=31,-4):(ce-=P.avail_in,oe-=P.avail_out,P.total_in+=ce,P.total_out+=oe,_.total+=oe,_.wrap&&oe&&(P.adler=_.check=_.flags?a(_.check,q,oe,P.next_out-oe):o(_.check,q,oe,P.next_out-oe)),P.data_type=_.bits+(_.last?64:0)+(_.mode===12?128:0)+(_.mode===20||_.mode===15?256:0),(ce==0&&oe===0||Y===4)&&O===f&&(O=-5),O)},i.inflateEnd=function(P){if(!P||!P.state)return p;var Y=P.state;return Y.window&&(Y.window=null),P.state=null,f},i.inflateGetHeader=function(P,Y){var _;return P&&P.state?(2&(_=P.state).wrap)==0?p:((_.head=Y).done=!1,f):p},i.inflateSetDictionary=function(P,Y){var _,U=Y.length;return P&&P.state?(_=P.state).wrap!==0&&_.mode!==11?p:_.mode===11&&o(1,Y,U,0)!==_.check?-3:se(P,Y,U,U)?(_.mode=31,-4):(_.havedict=1,f):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,s,i){var r=n("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(u,h,f,p,g,m,b,v){var E,I,k,A,H,j,V,B,Z,se=v.bits,P=0,Y=0,_=0,U=0,q=0,D=0,K=0,G=0,ne=0,$=0,F=null,ce=0,oe=new r.Buf16(16),ie=new r.Buf16(16),ve=null,X=0;for(P=0;P<=15;P++)oe[P]=0;for(Y=0;Y<p;Y++)oe[h[f+Y]]++;for(q=se,U=15;1<=U&&oe[U]===0;U--);if(U<q&&(q=U),U===0)return g[m++]=20971520,g[m++]=20971520,v.bits=1,0;for(_=1;_<U&&oe[_]===0;_++);for(q<_&&(q=_),P=G=1;P<=15;P++)if(G<<=1,(G-=oe[P])<0)return-1;if(0<G&&(u===0||U!==1))return-1;for(ie[1]=0,P=1;P<15;P++)ie[P+1]=ie[P]+oe[P];for(Y=0;Y<p;Y++)h[f+Y]!==0&&(b[ie[h[f+Y]]++]=Y);if(j=u===0?(F=ve=b,19):u===1?(F=o,ce-=257,ve=a,X-=257,256):(F=l,ve=c,-1),P=_,H=m,K=Y=$=0,k=-1,A=(ne=1<<(D=q))-1,u===1&&852<ne||u===2&&592<ne)return 1;for(;;){for(V=P-K,Z=b[Y]<j?(B=0,b[Y]):b[Y]>j?(B=ve[X+b[Y]],F[ce+b[Y]]):(B=96,0),E=1<<P-K,_=I=1<<D;g[H+($>>K)+(I-=E)]=V<<24|B<<16|Z|0,I!==0;);for(E=1<<P-1;$&E;)E>>=1;if(E!==0?($&=E-1,$+=E):$=0,Y++,--oe[P]==0){if(P===U)break;P=h[f+b[Y]]}if(q<P&&($&A)!==k){for(K===0&&(K=q),H+=_,G=1<<(D=P-K);D+K<U&&!((G-=oe[D+K])<=0);)D++,G<<=1;if(ne+=1<<D,u===1&&852<ne||u===2&&592<ne)return 1;g[k=$&A]=q<<24|D<<16|H-m|0}}return $!==0&&(g[H+$]=P-K<<24|64<<16|0),v.bits=q,0}},{"../utils/common":41}],51:[function(n,s,i){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,s,i){var r=n("../utils/common"),o=0,a=1;function l(w){for(var T=w.length;0<=--T;)w[T]=0}var c=0,u=29,h=256,f=h+1+u,p=30,g=19,m=2*f+1,b=15,v=16,E=7,I=256,k=16,A=17,H=18,j=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],V=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],se=new Array(2*(f+2));l(se);var P=new Array(2*p);l(P);var Y=new Array(512);l(Y);var _=new Array(256);l(_);var U=new Array(u);l(U);var q,D,K,G=new Array(p);function ne(w,T,L,M,N){this.static_tree=w,this.extra_bits=T,this.extra_base=L,this.elems=M,this.max_length=N,this.has_stree=w&&w.length}function $(w,T){this.dyn_tree=w,this.max_code=0,this.stat_desc=T}function F(w){return w<256?Y[w]:Y[256+(w>>>7)]}function ce(w,T){w.pending_buf[w.pending++]=255&T,w.pending_buf[w.pending++]=T>>>8&255}function oe(w,T,L){w.bi_valid>v-L?(w.bi_buf|=T<<w.bi_valid&65535,ce(w,w.bi_buf),w.bi_buf=T>>v-w.bi_valid,w.bi_valid+=L-v):(w.bi_buf|=T<<w.bi_valid&65535,w.bi_valid+=L)}function ie(w,T,L){oe(w,L[2*T],L[2*T+1])}function ve(w,T){for(var L=0;L|=1&w,w>>>=1,L<<=1,0<--T;);return L>>>1}function X(w,T,L){var M,N,z=new Array(b+1),J=0;for(M=1;M<=b;M++)z[M]=J=J+L[M-1]<<1;for(N=0;N<=T;N++){var Q=w[2*N+1];Q!==0&&(w[2*N]=ve(z[Q]++,Q))}}function te(w){var T;for(T=0;T<f;T++)w.dyn_ltree[2*T]=0;for(T=0;T<p;T++)w.dyn_dtree[2*T]=0;for(T=0;T<g;T++)w.bl_tree[2*T]=0;w.dyn_ltree[2*I]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function ee(w){8<w.bi_valid?ce(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function re(w,T,L,M){var N=2*T,z=2*L;return w[N]<w[z]||w[N]===w[z]&&M[T]<=M[L]}function he(w,T,L){for(var M=w.heap[L],N=L<<1;N<=w.heap_len&&(N<w.heap_len&&re(T,w.heap[N+1],w.heap[N],w.depth)&&N++,!re(T,M,w.heap[N],w.depth));)w.heap[L]=w.heap[N],L=N,N<<=1;w.heap[L]=M}function S(w,T,L){var M,N,z,J,Q=0;if(w.last_lit!==0)for(;M=w.pending_buf[w.d_buf+2*Q]<<8|w.pending_buf[w.d_buf+2*Q+1],N=w.pending_buf[w.l_buf+Q],Q++,M===0?ie(w,N,T):(ie(w,(z=_[N])+h+1,T),(J=j[z])!==0&&oe(w,N-=U[z],J),ie(w,z=F(--M),L),(J=V[z])!==0&&oe(w,M-=G[z],J)),Q<w.last_lit;);ie(w,I,T)}function x(w,T){var L,M,N,z=T.dyn_tree,J=T.stat_desc.static_tree,Q=T.stat_desc.has_stree,ae=T.stat_desc.elems,de=-1;for(w.heap_len=0,w.heap_max=m,L=0;L<ae;L++)z[2*L]!==0?(w.heap[++w.heap_len]=de=L,w.depth[L]=0):z[2*L+1]=0;for(;w.heap_len<2;)z[2*(N=w.heap[++w.heap_len]=de<2?++de:0)]=1,w.depth[N]=0,w.opt_len--,Q&&(w.static_len-=J[2*N+1]);for(T.max_code=de,L=w.heap_len>>1;1<=L;L--)he(w,z,L);for(N=ae;L=w.heap[1],w.heap[1]=w.heap[w.heap_len--],he(w,z,1),M=w.heap[1],w.heap[--w.heap_max]=L,w.heap[--w.heap_max]=M,z[2*N]=z[2*L]+z[2*M],w.depth[N]=(w.depth[L]>=w.depth[M]?w.depth[L]:w.depth[M])+1,z[2*L+1]=z[2*M+1]=N,w.heap[1]=N++,he(w,z,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],(function(ue,Ne){var qe,He,ot,De,Wn,tt,Ge=Ne.dyn_tree,Js=Ne.max_code,ur=Ne.stat_desc.static_tree,hm=Ne.stat_desc.has_stree,dm=Ne.stat_desc.extra_bits,qc=Ne.stat_desc.extra_base,ei=Ne.stat_desc.max_length,hr=0;for(De=0;De<=b;De++)ue.bl_count[De]=0;for(Ge[2*ue.heap[ue.heap_max]+1]=0,qe=ue.heap_max+1;qe<m;qe++)ei<(De=Ge[2*Ge[2*(He=ue.heap[qe])+1]+1]+1)&&(De=ei,hr++),Ge[2*He+1]=De,Js<He||(ue.bl_count[De]++,Wn=0,qc<=He&&(Wn=dm[He-qc]),tt=Ge[2*He],ue.opt_len+=tt*(De+Wn),hm&&(ue.static_len+=tt*(ur[2*He+1]+Wn)));if(hr!==0){do{for(De=ei-1;ue.bl_count[De]===0;)De--;ue.bl_count[De]--,ue.bl_count[De+1]+=2,ue.bl_count[ei]--,hr-=2}while(0<hr);for(De=ei;De!==0;De--)for(He=ue.bl_count[De];He!==0;)Js<(ot=ue.heap[--qe])||(Ge[2*ot+1]!==De&&(ue.opt_len+=(De-Ge[2*ot+1])*Ge[2*ot],Ge[2*ot+1]=De),He--)}})(w,T),X(z,de,w.bl_count)}function d(w,T,L){var M,N,z=-1,J=T[1],Q=0,ae=7,de=4;for(J===0&&(ae=138,de=3),T[2*(L+1)+1]=65535,M=0;M<=L;M++)N=J,J=T[2*(M+1)+1],++Q<ae&&N===J||(Q<de?w.bl_tree[2*N]+=Q:N!==0?(N!==z&&w.bl_tree[2*N]++,w.bl_tree[2*k]++):Q<=10?w.bl_tree[2*A]++:w.bl_tree[2*H]++,z=N,de=(Q=0)===J?(ae=138,3):N===J?(ae=6,3):(ae=7,4))}function O(w,T,L){var M,N,z=-1,J=T[1],Q=0,ae=7,de=4;for(J===0&&(ae=138,de=3),M=0;M<=L;M++)if(N=J,J=T[2*(M+1)+1],!(++Q<ae&&N===J)){if(Q<de)for(;ie(w,N,w.bl_tree),--Q!=0;);else N!==0?(N!==z&&(ie(w,N,w.bl_tree),Q--),ie(w,k,w.bl_tree),oe(w,Q-3,2)):Q<=10?(ie(w,A,w.bl_tree),oe(w,Q-3,3)):(ie(w,H,w.bl_tree),oe(w,Q-11,7));z=N,de=(Q=0)===J?(ae=138,3):N===J?(ae=6,3):(ae=7,4)}}l(G);var R=!1;function y(w,T,L,M){oe(w,(c<<1)+(M?1:0),3),(function(N,z,J,Q){ee(N),ce(N,J),ce(N,~J),r.arraySet(N.pending_buf,N.window,z,J,N.pending),N.pending+=J})(w,T,L)}i._tr_init=function(w){R||((function(){var T,L,M,N,z,J=new Array(b+1);for(N=M=0;N<u-1;N++)for(U[N]=M,T=0;T<1<<j[N];T++)_[M++]=N;for(_[M-1]=N,N=z=0;N<16;N++)for(G[N]=z,T=0;T<1<<V[N];T++)Y[z++]=N;for(z>>=7;N<p;N++)for(G[N]=z<<7,T=0;T<1<<V[N]-7;T++)Y[256+z++]=N;for(L=0;L<=b;L++)J[L]=0;for(T=0;T<=143;)se[2*T+1]=8,T++,J[8]++;for(;T<=255;)se[2*T+1]=9,T++,J[9]++;for(;T<=279;)se[2*T+1]=7,T++,J[7]++;for(;T<=287;)se[2*T+1]=8,T++,J[8]++;for(X(se,f+1,J),T=0;T<p;T++)P[2*T+1]=5,P[2*T]=ve(T,5);q=new ne(se,j,h+1,f,b),D=new ne(P,V,0,p,b),K=new ne(new Array(0),B,0,g,E)})(),R=!0),w.l_desc=new $(w.dyn_ltree,q),w.d_desc=new $(w.dyn_dtree,D),w.bl_desc=new $(w.bl_tree,K),w.bi_buf=0,w.bi_valid=0,te(w)},i._tr_stored_block=y,i._tr_flush_block=function(w,T,L,M){var N,z,J=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=(function(Q){var ae,de=4093624447;for(ae=0;ae<=31;ae++,de>>>=1)if(1&de&&Q.dyn_ltree[2*ae]!==0)return o;if(Q.dyn_ltree[18]!==0||Q.dyn_ltree[20]!==0||Q.dyn_ltree[26]!==0)return a;for(ae=32;ae<h;ae++)if(Q.dyn_ltree[2*ae]!==0)return a;return o})(w)),x(w,w.l_desc),x(w,w.d_desc),J=(function(Q){var ae;for(d(Q,Q.dyn_ltree,Q.l_desc.max_code),d(Q,Q.dyn_dtree,Q.d_desc.max_code),x(Q,Q.bl_desc),ae=g-1;3<=ae&&Q.bl_tree[2*Z[ae]+1]===0;ae--);return Q.opt_len+=3*(ae+1)+5+5+4,ae})(w),N=w.opt_len+3+7>>>3,(z=w.static_len+3+7>>>3)<=N&&(N=z)):N=z=L+5,L+4<=N&&T!==-1?y(w,T,L,M):w.strategy===4||z===N?(oe(w,2+(M?1:0),3),S(w,se,P)):(oe(w,4+(M?1:0),3),(function(Q,ae,de,ue){var Ne;for(oe(Q,ae-257,5),oe(Q,de-1,5),oe(Q,ue-4,4),Ne=0;Ne<ue;Ne++)oe(Q,Q.bl_tree[2*Z[Ne]+1],3);O(Q,Q.dyn_ltree,ae-1),O(Q,Q.dyn_dtree,de-1)})(w,w.l_desc.max_code+1,w.d_desc.max_code+1,J+1),S(w,w.dyn_ltree,w.dyn_dtree)),te(w),M&&ee(w)},i._tr_tally=function(w,T,L){return w.pending_buf[w.d_buf+2*w.last_lit]=T>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&T,w.pending_buf[w.l_buf+w.last_lit]=255&L,w.last_lit++,T===0?w.dyn_ltree[2*L]++:(w.matches++,T--,w.dyn_ltree[2*(_[L]+h+1)]++,w.dyn_dtree[2*F(T)]++),w.last_lit===w.lit_bufsize-1},i._tr_align=function(w){oe(w,2,3),ie(w,I,se),(function(T){T.bi_valid===16?(ce(T,T.bi_buf),T.bi_buf=0,T.bi_valid=0):8<=T.bi_valid&&(T.pending_buf[T.pending++]=255&T.bi_buf,T.bi_buf>>=8,T.bi_valid-=8)})(w)}},{"../utils/common":41}],53:[function(n,s,i){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,s,i){(function(r){(function(o,a){if(!o.setImmediate){var l,c,u,h,f=1,p={},g=!1,m=o.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(o);b=b&&b.setTimeout?b:o,l={}.toString.call(o.process)==="[object process]"?function(k){process.nextTick(function(){E(k)})}:(function(){if(o.postMessage&&!o.importScripts){var k=!0,A=o.onmessage;return o.onmessage=function(){k=!1},o.postMessage("","*"),o.onmessage=A,k}})()?(h="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",I,!1):o.attachEvent("onmessage",I),function(k){o.postMessage(h+k,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(k){E(k.data)},function(k){u.port2.postMessage(k)}):m&&"onreadystatechange"in m.createElement("script")?(c=m.documentElement,function(k){var A=m.createElement("script");A.onreadystatechange=function(){E(k),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(k){setTimeout(E,0,k)},b.setImmediate=function(k){typeof k!="function"&&(k=new Function(""+k));for(var A=new Array(arguments.length-1),H=0;H<A.length;H++)A[H]=arguments[H+1];var j={callback:k,args:A};return p[f]=j,l(f),f++},b.clearImmediate=v}function v(k){delete p[k]}function E(k){if(g)setTimeout(E,0,k);else{var A=p[k];if(A){g=!0;try{(function(H){var j=H.callback,V=H.args;switch(V.length){case 0:j();break;case 1:j(V[0]);break;case 2:j(V[0],V[1]);break;case 3:j(V[0],V[1],V[2]);break;default:j.apply(a,V)}})(A)}finally{v(k),g=!1}}}}function I(k){k.source===o&&typeof k.data=="string"&&k.data.indexOf(h)===0&&E(+k.data.slice(h.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof xn<"u"?xn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Oa)),Oa.exports}var XR=ZR();const QR=am(XR),JR={class:"table-responsive mb-4"},ex={class:"table table-striped text-nowrap",style:{width:"1296px"}},tx={class:"align-middle"},nx={class:"text-wrap"},sx={class:"text-wrap"},ix={class:"text-wrap"},rx={class:"text-wrap"},ox={class:"text-wrap"},ax={class:"text-wrap"},lx={class:"text-wrap"},cx={class:"text-wrap"},ux={key:0,class:"btn btn_space btn-secondary pe-none"},hx=["onClick"],dx=["onClick"],fx={class:"table-responsive mb-4"},px={class:"table table-striped text-nowrap",style:{width:"1296px"}},_x={class:"align-middle"},mx={class:"text-wrap"},gx={class:"text-wrap"},vx={class:"text-wrap"},yx={class:"text-wrap"},bx={class:"text-wrap"},wx={class:"text-wrap"},Ex={key:0,class:"btn btn_space btn-secondary pe-none"},Cx=["onClick"],Ix=["onClick"],Sx={__name:"ManagerPage",setup(t){const e=sr(),n=cr(),s=Qo(),i=us({uploadModal:!1,id:"",requestTitle:"",type:""}),r=async u=>{const h=new QR,f=pl(_l,u),p=await Ch(f);await Promise.all(p.items.map(async m=>{const b=await JC(m),v=await __(m),I=await(await fetch(v)).blob();h.file(b.name,I)}));const g=await h.generateAsync({type:"blob"});YR.saveAs(g,u+".zip")},o=(u,h,f)=>{s.uploadModal=!0,i.id=u,i.requestTitle=h,i.type=f},a=()=>{s.uploadModal=!1},l=u=>{const h=pl(_l,`${u}/`);Ch(h).then(f=>{f.items.forEach(p=>{e1(p)})})},c=()=>{ul($s(zs,`${i.type}/${i.id}`),{completed:"true",completeDay:n.todayFormat,post:"false"}),l(i.requestTitle),a()};return(u,h)=>(we(),Ie("section",null,[h[6]||(h[6]=C("h2",null,"バナータスク",-1)),C("div",JR,[C("table",ex,[h[2]||(h[2]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"サイズ"),C("th",{scope:"col"},"イベント名"),C("th",{scope:"col"},"内容"),C("th",{scope:"col"},"文言"),C("th",{scope:"col"},"その他要望"),C("th",{scope:"col"},"提出期限")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).unfinishedBanners,f=>(we(),Ie("tr",tx,[C("td",nx,be(f.shop),1),C("td",sx,be(f.manager),1),C("td",ix,be(f.sizes),1),C("td",rx,be(f.requestTitle),1),C("td",ox,be(f.eventDetails),1),C("td",ax,be(f.eventText),1),C("td",lx,be(f.otherText),1),C("td",cx,be(f.deadlines),1),C("td",null,[f.img=="false"?(we(),Ie("button",ux,[...h[0]||(h[0]=[C("i",{class:"fa-solid fa-download",style:{color:"#fff"}},null,-1)])])):kn("",!0),f.img=="true"?(we(),Ie("button",{key:1,class:"btn btn_space btn-success",onClick:p=>r(f.requestTitle)},[...h[1]||(h[1]=[C("i",{class:"fa-solid fa-download",style:{color:"#fff"}},null,-1)])],8,hx)):kn("",!0),C("button",{class:"btn btn-danger ms-3",onClick:p=>o(f.id,f.requestTitle,"banner")},"完了",8,dx)])]))),256))])])]),h[7]||(h[7]=C("h2",null,"レタッチタスク",-1)),C("div",fx,[C("table",px,[h[5]||(h[5]=C("thead",null,[C("tr",null,[C("th",{scope:"col"},"店舗"),C("th",{scope:"col"},"担当者"),C("th",{scope:"col"},"キャスト名"),C("th",{scope:"col"},"修正箇所"),C("th",{scope:"col"},"顔の処理"),C("th",{scope:"col"},"提出期限")])],-1)),C("tbody",null,[(we(!0),Ie(Qe,null,Pn(W(e).unfinishedRetouches,f=>(we(),Ie("tr",_x,[C("td",mx,be(f.shop),1),C("td",gx,be(f.manager),1),C("td",vx,be(f.requestTitle),1),C("td",yx,be(f.retouchings),1),C("td",bx,be(f.faceRetouching),1),C("td",wx,be(f.deadlines),1),C("td",null,[f.img=="false"?(we(),Ie("button",Ex,[...h[3]||(h[3]=[C("i",{class:"fa-solid fa-download",style:{color:"#fff"}},null,-1)])])):kn("",!0),f.img=="true"?(we(),Ie("button",{key:1,class:"btn btn_space btn-success",onClick:p=>r(f.requestTitle)},[...h[4]||(h[4]=[C("i",{class:"fa-solid fa-download",style:{color:"#fff"}},null,-1)])],8,Cx)):kn("",!0),C("button",{class:"btn btn-danger ms-3",onClick:p=>o(f.id,f.requestTitle,"retouch")},"完了",8,Ix)])]))),256))])])]),it(qR,{show:W(s).uploadModal,type:i.type,id:i.id,name:i.requestTitle,onClose:a,onConfirm:c},null,8,["show","type","id","name"])]))}},Tx={class:"mx-auto col-sm-6"},kx={class:"mb-3"},Rx={class:"mb-3"},xx={__name:"Login",setup(t){const e=us({mailAddress:"",password:""}),n=om(),s=async()=>{await tS(n,jc).then(()=>eS(n,e.mailAddress,e.password)).catch(i=>{const r=i.code,o=i.message;console.log(r),console.log(o)}),location.reload()};return(i,r)=>(we(),Ie("div",Tx,[r[5]||(r[5]=C("h2",null,"ログイン",-1)),C("form",{onSubmit:r[2]||(r[2]=Mi(()=>{},["prevent"]))},[C("div",kx,[r[3]||(r[3]=C("label",{class:"form-label"},"メールアドレス：",-1)),ge(C("input",{type:"email",class:"form-control","onUpdate:modelValue":r[0]||(r[0]=o=>e.mailAddress=o),autocomplete:"on"},null,512),[[vt,e.mailAddress]])]),C("div",Rx,[r[4]||(r[4]=C("label",{class:"form-label"},"パスワード：",-1)),ge(C("input",{type:"password",class:"form-control","onUpdate:modelValue":r[1]||(r[1]=o=>e.password=o),autocomplete:"on"},null,512),[[vt,e.password]])])],32),C("div",{class:"d-grid gap-2 d-md-flex justify-content-md-end"},[C("button",{onClick:s,class:"btn btn-info text-white fw-bold"},"ログイン")])]))}},um=new cI({history:S1(),routes:[{path:"/",name:"index",component:Lk,meta:{requiresAuth:!0}},{path:"/retouch",name:"retouch",component:jR,meta:{requiresAuth:!0}},{path:"/manager-page",name:"manager-page",component:Sx,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:xx,meta:{requiresAuth:!1,showNav:!1}}]});um.beforeEach(async(t,e)=>{const n=t.matched.some(i=>i.meta.requiresAuth),s=new Promise(i=>{const r=om().onAuthStateChanged(o=>{r(),i(!!o)})});if(n&&!await s)return"/login";if(t.name=="login"&&await s)return"/"});const Vc=Dv(a1),Ax=Uv();Vc.use(Ax);Vc.use(um);Vc.mount("#app");
