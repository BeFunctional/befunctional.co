// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*! response.js 0.7.11 | responsejs.com | MIT License 2014 Ryan Van Etten */
(function(h,p,u){var v=h.jQuery||h.Zepto||h.ender||h.elo;"undefined"!=typeof module&&module.exports?module.exports=u(v):h[p]=u(v)})(this,"Response",function(h){function p(a){throw new TypeError(a?q+"."+a:q);}function u(a){return"number"==typeof a&&a===a}function v(a,b,c){for(var f=[],e=a.length,d=0;d<e;)f[d]=b.call(c,a[d],d++,a);return f}function C(a){return a?t("string"==typeof a?a.split(" "):a):[]}function l(a,b,c){if(null==a)return a;for(var f=a.length,e=0;e<f;)b.call(c||a[e],a[e],e++,a);return a}
function Q(a,b,c){null==b&&(b="");null==c&&(c="");for(var f=[],e=a.length,d=0;d<e;d++)null==a[d]||f.push(b+a[d]+c);return f}function t(a,b,c){var f,e,d,r=[],h=0,g=0,l="function"==typeof b,k=!0===c;e=a&&a.length;for(c=k?null:c;g<e;g++)d=a[g],f=l?!b.call(c,d,g,a):b?typeof d!==b:!d,f===k&&(r[h++]=d);return r}function R(a,b){if(null==a||null==b)return a;if("object"==typeof b&&u(b.length))ra.apply(a,t(b,"undefined",!0));else for(var c in b)sa.call(b,c)&&void 0!==b[c]&&(a[c]=b[c]);return a}function w(a,
b,c){if(null==a)return a;"object"==typeof a&&!a.nodeType&&u(a.length)?l(a,b,c):b.call(c||a,a);return a}function D(a){return function(b,c){var f=a();return f>=(b||0)&&(!c||f<=c)}}function x(a){var b=k.devicePixelRatio;if(null==a)return b||(x(2)?2:x(1.5)?1.5:x(1)?1:0);if(!isFinite(a))return!1;if(b&&0<b)return b>=a;a="only all and (min--moz-device-pixel-ratio:"+a+")";return S(a).matches?!0:!!S(a.replace("-moz-","")).matches}function aa(a){return a.replace(T,"$1").replace(ta,function(a,c){return c.toUpperCase()})}
function E(a){return"data-"+(a?a.replace(T,"$1").replace(ua,"$1-$2").toLowerCase():a)}function ba(a){var b;return a&&"string"==typeof a?"true"===a?!0:"false"===a?!1:"undefined"===a?b:"null"===a?null:(b=parseFloat(a))===+b?b:a:a}function F(a){return a?1===a.nodeType?a:a[0]&&1===a[0].nodeType?a[0]:!1:!1}function G(a,b){var c,f=arguments.length,e=F(this),d={},r=!1;if(f){ca(a)&&(r=!0,a=a[0]);if("string"===typeof a){a=E(a);if(1===f)return d=e.getAttribute(a),r?ba(d):d;if(this===e||2>(c=this.length||1))e.setAttribute(a,
b);else for(;c--;)c in this&&G.apply(this[c],arguments)}else if(a instanceof Object)for(c in a)a.hasOwnProperty(c)&&G.call(this,c,a[c]);return this}if(e.dataset&&DOMStringMap)return e.dataset;l(e.attributes,function(a){a&&(c=String(a.name).match(T))&&(d[aa(c[1])]=a.value)});return d}function da(a){this&&"string"===typeof a&&(a=C(a),w(this,function(b){l(a,function(a){a&&b.removeAttribute(E(a))})}));return this}function H(a){return G.apply(a,va.call(arguments,1))}function ea(a,b){return da.call(a,b)}
function fa(a){for(var b,c=[],f=0,e=a.length;f<e;)(b=a[f++])&&c.push("["+E(b.replace(U,"").replace(".","\\."))+"]");return c.join()}function V(a,b){var c=a.getBoundingClientRect?a.getBoundingClientRect():{};b="number"==typeof b?b||0:0;return{top:(c.top||0)-b,left:(c.left||0)-b,bottom:(c.bottom||0)+b,right:(c.right||0)+b}}function W(a,b){var c=V(F(a),b);return!!c&&0<=c.bottom&&c.top<=I()&&0<=c.right&&c.left<=J()}function ga(a){var b={img:1,input:1,source:3,embed:3,track:3,iframe:5,audio:5,video:5,
script:5}[a.nodeName.toLowerCase()]||-1;return 4>b?b:null!=a.getAttribute("src")?5:-5}function ha(a,b,c){var f;a&&null!=b||p("store");c="string"==typeof c&&c;w(a,function(a){f=c?a.getAttribute(c):0<ga(a)?a.getAttribute("src"):a.innerHTML;null==f?ea(a,b):H(a,b,f)});return g}function X(a,b){var c=[];a&&b&&l(C(b),function(b){c.push(H(a,b))},a);return c}function Y(a){y.on("resize",a);return g}function ia(a){w(a,function(a){"object"==typeof a||p("create @args");var c=Z(ja).configure(a),f,e=c.verge;a=c.breakpoints;
var d=K("scroll"),r=K("resize");a.length&&(f=a[0]||a[1]||!1,L(function(){function a(){c.reset();l(c.$e,function(a,b){c[b].decideValue().updateDOM()}).trigger(g)}function b(){l(c.$e,function(a,b){W(c[b].$e,e)&&c[b].updateDOM()})}var g=$.allLoaded,h=!!c.lazy;l(c.target().$e,function(a,b){c[b]=Z(c).prepareData(a);h&&!W(c[b].$e,e)||c[b].updateDOM()});c.dynamic&&(c.custom||f<z)&&Y(a,r);h&&(y.on(d,b),c.$e.one(g,function(){y.off(d,b)}))}))});return g}function wa(a,b,c){l(["inX","inY","inViewport"],function(f){!c&&
b[f]||(b[f]=function(b,c){return a(t(this,function(a){return!!a&&!c===g[f](a,b)}))})})}function ka(a,b){if("function"==typeof a&&a.fn){if(b||void 0===a.fn.dataset)a.fn.dataset=G;if(b||void 0===a.fn.deletes)a.fn.deletes=da;wa(a,a.fn,b)}return g}if("function"!=typeof h)try{console.log("Response was unable to run due to missing dependency.")}catch(Da){}var g,M=this,q="Response",xa=M[q],la="init"+q,k=window,ma=document,n=ma.documentElement,L=h.domReady||h,y=h(k),A=k.screen,m=Array.prototype,B=Object.prototype,
ra=m.push,va=m.slice,ya=m.concat,za=B.toString,sa=B.hasOwnProperty,ca=Array.isArray||function(a){return"[object Array]"===za.call(a)},na={width:[0,320,481,641,961,1025,1281],height:[0,481],ratio:[1,1.5,2]},ja,m={},s={},oa={},N={all:[]},Aa=1,O=A.width,P=A.height,z=O>P?O:P,Ba=O+P-z,pa=function(){return O},qa=function(){return P},Ca=/[^a-z0-9_\-\.]/gi,U=/^[\W\s]+|[\W\s]+$|/g,ua=/([a-z])([A-Z])/g,ta=/-(.)/g,T=/^data-(.+)$/,Z=Object.create||function(a){function b(){}b.prototype=a;return new b},K=function(a,
b){b=b||q;return a.replace(U,"")+"."+b.replace(U,"")},$={allLoaded:K("allLoaded"),crossover:K("crossover")},S=k.matchMedia||k.msMatchMedia||function(){return{}},J=n.clientWidth<k.innerWidth?function(){return k.innerWidth}:function(){return n.clientWidth},I=n.clientHeight<k.innerHeight?function(){return k.innerHeight}:function(){return n.clientHeight},A=D(J),B=D(I);m.band=D(pa);m.wave=D(qa);ja=function(){function a(a){return"string"==typeof a?a.toLowerCase().replace(Ca,""):""}var b=$.crossover,c=Math.min;
return{$e:0,mode:0,breakpoints:null,prefix:null,prop:"width",keys:[],dynamic:null,custom:0,values:[],fn:0,verge:null,newValue:0,currValue:1,aka:null,lazy:null,i:0,uid:null,reset:function(){for(var a=this.breakpoints,c=a.length,d=0;!d&&c--;)this.fn(a[c])&&(d=c);d!==this.i&&(y.trigger(b).trigger(this.prop+b),this.i=d||0);return this},configure:function(b){R(this,b);var e,d,g=!0;e=this.prop;this.uid=Aa++;null==this.verge&&(this.verge=c(z,500));this.fn=s[e]||p("create @fn");null==this.dynamic&&(this.dynamic=
"device"!==e.slice(0,6));this.custom=oa[e];d=this.prefix?t(v(C(this.prefix),a)):["min-"+e+"-"];b=1<d.length?d.slice(1):0;this.prefix=d[0];d=this.breakpoints;ca(d)?(l(d,function(a){if(!a&&0!==a)throw"invalid breakpoint";g=g&&isFinite(a)}),d=g?d.sort(function(a,b){return a-b}):d,d.length||p("create @breakpoints")):d=na[e]||na[e.split("-").pop()]||p("create @prop");this.breakpoints=g?t(d,function(a){return a<=z}):d;this.keys=Q(this.breakpoints,this.prefix);this.aka=null;if(b){d=[];for(e=b.length;e--;)d.push(Q(this.breakpoints,
b[e]));this.aka=d;this.keys=ya.apply(this.keys,d)}N.all=N.all.concat(N[this.uid]=this.keys);return this},target:function(){this.$e=h(fa(N[this.uid]));ha(this.$e,la);this.keys.push(la);return this},decideValue:function(){for(var a=null,b=this.breakpoints,c=b.length,g=c;null==a&&g--;)this.fn(b[g])&&(a=this.values[g]);this.newValue="string"===typeof a?a:this.values[c];return this},prepareData:function(a){this.$e=h(a);this.mode=ga(a);this.values=X(this.$e,this.keys);if(this.aka)for(a=this.aka.length;a--;)this.values=
R(this.values,X(this.$e,this.aka[a]));return this.decideValue()},updateDOM:function(){if(this.currValue===this.newValue)return this;this.currValue=this.newValue;0<this.mode?this.$e[0].setAttribute("src",this.newValue):null==this.newValue?this.$e.empty&&this.$e.empty():this.$e.html?this.$e.html(this.newValue):(this.$e.empty&&this.$e.empty(),this.$e[0].innerHTML=this.newValue);return this}}}();s.width=A;s.height=B;s["device-width"]=m.band;s["device-height"]=m.wave;s["device-pixel-ratio"]=x;g={deviceMin:function(){return Ba},
deviceMax:function(){return z},noConflict:function(a){M[q]===g&&(M[q]=xa);"function"==typeof a&&a.call(M,g);return g},chain:function(a,b){a=arguments.length?a:h;return ka(a,b)},bridge:ka,create:ia,addTest:function(a,b){"string"==typeof a&&"function"==typeof b&&(s[a]=b,oa[a]=1);return g},datatize:E,camelize:aa,render:ba,store:ha,access:X,target:function(a){return h(fa(C(a)))},object:Z,crossover:function(a,b){var c,f=$.crossover;"function"==typeof a&&(c=b,b=a,a=c);y.on(a?""+a+f:f,b);return g},action:function(a){w(a,
function(a){L(a);Y(a)});return g},resize:Y,ready:L,affix:Q,sift:t,dpr:x,deletes:ea,scrollX:function(){return window.pageXOffset||n.scrollLeft},scrollY:function(){return window.pageYOffset||n.scrollTop},deviceW:pa,deviceH:qa,device:m,inX:function(a,b){var c=V(F(a),b);return!!c&&0<=c.right&&c.left<=J()},inY:function(a,b){var c=V(F(a),b);return!!c&&0<=c.bottom&&c.top<=I()},route:w,merge:R,media:S,wave:B,band:A,map:v,each:l,inViewport:W,dataset:H,viewportH:I,viewportW:J};L(function(){var a=H(ma.body,
"responsejs"),b=k.JSON&&JSON.parse||h.parseJSON;(a=a&&b?b(a):a)&&a.create&&ia(a.create);n.className=n.className.replace(/(^|\s)(no-)?responsejs(\s|$)/,"$1$3")+" responsejs "});return g});

