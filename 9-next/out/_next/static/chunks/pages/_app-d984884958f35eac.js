(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8397)}])},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let r=n(8754),o=(n(7294),r._(n(4304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=o.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let s=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=s?s().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete r.webpack,delete r.modules,noSSR(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return s}});let r=n(8754),o=r._(n(7294)),s=o.default.createContext(null)},4304:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let r=n(8754),o=r._(n(7294)),s=n(43);function resolve(e){return e&&e.default?e.default:e}let i=[],l=[],d=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}function createLoadableComponent(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function init(){if(!r){let t=new LoadableSubscription(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!d){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return init()})}function useLoadableModule(){init();let e=o.default.useContext(s.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}function LoadableComponent(e,t){useLoadableModule();let s=o.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),o.default.useMemo(()=>s.loading||s.error?o.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?o.default.createElement(resolve(s.loaded),e):null,[e,s])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",o.default.forwardRef(LoadableComponent)}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return createLoadableComponent(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(i).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(d=!0,t());flushInitializers(l,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let c=Loadable},8397:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return MyApp}});var r=n(5893),o=n(1163);n(8781);var s=n(7294),i=n(3457),l=n.n(i),d=n(5152),c=n.n(d);let p=c()(()=>n.e(95).then(n.bind(n,3095)),{loadableGenerated:{webpack:()=>[3095]},ssr:!1});function MyApp(e){let{Component:t,pageProps:n}=e,i=(0,o.useRouter)(),[d,c]=(0,s.useState)(!1),loadingOn=()=>c(!0),loadingOff=()=>c(!1);return(0,s.useEffect)(()=>(i.events.on("routeChangeStart",loadingOn),i.events.on("routeChangeComplete",loadingOff),()=>{i.events.off("routeChangeStart",loadingOn),i.events.off("routeChangeComplete",loadingOff)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)(p,{}),d&&"Loading .......",(0,r.jsx)(l(),{}),(0,r.jsx)(t,{...n})]})}},8781:function(){},5152:function(e,t,n){e.exports=n(1342)},1163:function(e,t,n){e.exports=n(9974)},3457:function(e,t,n){var r,o=Object.create,s=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,d=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,P=e=>s(e,"__esModule",{value:!0}),a=(e,t)=>s(e,"name",{value:t,configurable:!0}),y=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of l(t))!c.call(e,o)&&(n||"default"!==o)&&s(e,o,{get:()=>t[o],enumerable:!(r=i(t,o))||r.enumerable});return e},u=(e,t)=>y(P(s(null!=e?o(d(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),p=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>r&&r.get(e)||(t=y(P({}),e,1),r&&r.set(e,t),t)),f={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(f,{default:()=>v});var m=u(n(1163)),h=u(n(4865)),g=u(n(5697)),b=u(n(7294)),_=a(({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:r=3,showOnShallow:o=!0,options:s,nonce:i,transformCSS:l=a(e=>b.createElement("style",{nonce:i},e),"transformCSS")})=>{let d=null;b.useEffect(()=>(s&&h.configure(s),m.default.events.on("routeChangeStart",c),m.default.events.on("routeChangeComplete",p),m.default.events.on("routeChangeError",f),()=>{m.default.events.off("routeChangeStart",c),m.default.events.off("routeChangeComplete",p),m.default.events.off("routeChangeError",f)}),[]);let c=a((e,{shallow:n})=>{(!n||o)&&(h.set(t),h.start())},"routeChangeStart"),p=a((e,{shallow:t})=>{(!t||o)&&(d&&clearTimeout(d),d=setTimeout(()=>{h.done(!0)},n))},"routeChangeEnd"),f=a((e,t,{shallow:r})=>{(!r||o)&&(d&&clearTimeout(d),d=setTimeout(()=>{h.done(!0)},n))},"routeChangeError");return l(`
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100%;
      height: ${r}px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogresss-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `)},"NextNProgress");_.propTypes={color:g.string,startPosition:g.number,stopDelayMs:g.number,height:g.number,showOnShallow:g.bool,options:g.object,nonce:g.string,transformCSS:g.func};var v=b.memo(_);e.exports=p(f)},4865:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){var e,t,n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function clamp(e,t,n){return e<t?t:e>n?n:e}function barPositionCSS(e,t,n){var o;return(o="translate3d"===r.positionUsing?{transform:"translate3d("+(-1+e)*100+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+(-1+e)*100+"%,0)"}:{"margin-left":(-1+e)*100+"%"}).transition="all "+t+"ms "+n,o}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=clamp(e,r.minimum,1),n.status=1===e?null:e;var i=n.render(!t),l=i.querySelector(r.barSelector),d=r.speed,c=r.easing;return i.offsetWidth,o(function(t){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),s(l,barPositionCSS(e,d,c)),1===e?(s(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){s(i,{transition:"all "+d+"ms linear",opacity:0}),setTimeout(function(){n.remove(),t()},d)},d)):setTimeout(t,d)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var work=function(){setTimeout(function(){n.status&&(n.trickle(),work())},r.trickleSpeed)};return r.trickle&&work(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*clamp(Math.random()*t,.1,.95)),t=clamp(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},e=0,t=0,n.promise=function(r){return r&&"resolved"!==r.state()&&(0===t&&n.start(),e++,t++,r.always(function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=r.template;var o,i,l=t.querySelector(r.barSelector),d=e?"-100":(-1+(n.status||0))*100,c=document.querySelector(r.parent);return s(l,{transition:"all 0 linear",transform:"translate3d("+d+"%,0,0)"}),!r.showSpinner&&(i=t.querySelector(r.spinnerSelector))&&removeElement(i),c!=document.body&&addClass(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&removeElement(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var o=function(){var e=[];function next(){var t=e.shift();t&&t(next)}return function(t){e.push(t),1==e.length&&next()}}(),s=function(){var e=["Webkit","O","Moz","ms"],t={};function camelCase(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function getVendorProp(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}function getStyleProp(e){return t[e=camelCase(e)]||(t[e]=getVendorProp(e))}function applyCss(e,t,n){t=getStyleProp(t),e.style[t]=n}return function(e,t){var n,r,o=arguments;if(2==o.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&applyCss(e,n,r);else applyCss(e,o[1],o[2])}}();function hasClass(e,t){return("string"==typeof e?e:classList(e)).indexOf(" "+t+" ")>=0}function addClass(e,t){var n=classList(e),r=n+t;hasClass(n,t)||(e.className=r.substring(1))}function removeClass(e,t){var n,r=classList(e);hasClass(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function classList(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function removeElement(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n})?r.call(t,n,t,e):r)&&(e.exports=o)},2703:function(e,t,n){"use strict";var r=n(414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,s,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=e.O()}]);