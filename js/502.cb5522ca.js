/*! For license information please see 502.cb5522ca.js.LICENSE.txt */
(self.webpackChunkgame=self.webpackChunkgame||[]).push([[502],{4587:function(e,t,i){var r,n;r=function(){var e,t,i,r,n,s="2.0.6",a={},o={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(i){var r,n,s,o;if(e.isNumeral(i))r=i.value();else if(0===i||void 0===i)r=0;else if(null===i||t.isNaN(i))r=null;else if("string"==typeof i)if(c.zeroFormat&&i===c.zeroFormat)r=0;else if(c.nullFormat&&i===c.nullFormat||!i.replace(/[^0-9]+/g,"").length)r=null;else{for(n in a)if((o="function"==typeof a[n].regexps.unformat?a[n].regexps.unformat():a[n].regexps.unformat)&&i.match(o)){s=a[n].unformat;break}r=(s=s||e._.stringToNumber)(i)}else r=Number(i)||null;return new u(i,r)}).version=s,e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,i,r){var n,s,a,l,c,u,d,h=o[e.options.currentLocale],m=!1,f=!1,p=0,g="",b=1e12,y=1e9,w=1e6,_=1e3,v="",k=!1;if(t=t||0,s=Math.abs(t),e._.includes(i,"(")?(m=!0,i=i.replace(/[\(|\)]/g,"")):(e._.includes(i,"+")||e._.includes(i,"-"))&&(c=e._.includes(i,"+")?i.indexOf("+"):t<0?i.indexOf("-"):-1,i=i.replace(/[\+|\-]/g,"")),e._.includes(i,"a")&&(n=!!(n=i.match(/a(k|m|b|t)?/))&&n[1],e._.includes(i," a")&&(g=" "),i=i.replace(new RegExp(g+"a[kmbt]?"),""),s>=b&&!n||"t"===n?(g+=h.abbreviations.trillion,t/=b):s<b&&s>=y&&!n||"b"===n?(g+=h.abbreviations.billion,t/=y):s<y&&s>=w&&!n||"m"===n?(g+=h.abbreviations.million,t/=w):(s<w&&s>=_&&!n||"k"===n)&&(g+=h.abbreviations.thousand,t/=_)),e._.includes(i,"[.]")&&(f=!0,i=i.replace("[.]",".")),a=t.toString().split(".")[0],l=i.split(".")[1],u=i.indexOf(","),p=(i.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),v=e._.toFixed(t,l[0].length+l[1].length,r,l[1].length)):v=e._.toFixed(t,l.length,r),a=v.split(".")[0],v=e._.includes(v,".")?h.delimiters.decimal+v.split(".")[1]:"",f&&0===Number(v.slice(1))&&(v="")):a=e._.toFixed(t,0,r),g&&!n&&Number(a)>=1e3&&g!==h.abbreviations.trillion)switch(a=String(Number(a)/1e3),g){case h.abbreviations.thousand:g=h.abbreviations.million;break;case h.abbreviations.million:g=h.abbreviations.billion;break;case h.abbreviations.billion:g=h.abbreviations.trillion}if(e._.includes(a,"-")&&(a=a.slice(1),k=!0),a.length<p)for(var C=p-a.length;C>0;C--)a="0"+a;return u>-1&&(a=a.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+h.delimiters.thousands)),0===i.indexOf(".")&&(a=""),d=a+v+(g||""),m?d=(m&&k?"(":"")+d+(m&&k?")":""):c>=0?d=0===c?(k?"-":"+")+d:d+(k?"-":"+"):k&&(d="-"+d),d},stringToNumber:function(e){var t,i,r,n=o[c.currentLocale],s=e,a={thousand:3,million:6,billion:9,trillion:12};if(c.zeroFormat&&e===c.zeroFormat)i=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)i=null;else{for(t in i=1,"."!==n.delimiters.decimal&&(e=e.replace(/\./g,"").replace(n.delimiters.decimal,".")),a)if(r=new RegExp("[^a-zA-Z]"+n.abbreviations[t]+"(?:\\)|(\\"+n.currency.symbol+")?(?:\\))?)?$"),s.match(r)){i*=Math.pow(10,a[t]);break}i*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),i*=Number(e)}return i},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,i){return e.slice(0,i)+t+e.slice(i)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var i,r=Object(e),n=r.length>>>0,s=0;if(3===arguments.length)i=arguments[2];else{for(;s<n&&!(s in r);)s++;if(s>=n)throw new TypeError("Reduce of empty array with no initial value");i=r[s++]}for(;s<n;s++)s in r&&(i=t(i,r[s],s,r));return i},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,i){var r=t.multiplier(i);return e>r?e:r}),1)},toFixed:function(e,t,i,r){var n,s,a,o,l=e.toString().split("."),c=t-(r||0);return n=2===l.length?Math.min(Math.max(l[1].length,c),t):c,a=Math.pow(10,n),o=(i(e+"e+"+n)/a).toFixed(n),r>t-n&&(s=new RegExp("\\.?0{1,"+(r-(t-n))+"}$"),o=o.replace(s,"")),o}},e.options=c,e.formats=a,e.locales=o,e.locale=function(e){return e&&(c.currentLocale=e.toLowerCase()),c.currentLocale},e.localeData=function(e){if(!e)return o[c.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in l)c[e]=l[e]},e.zeroFormat=function(e){c.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){c.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){c.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,i){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=i,i},e.validate=function(t,i){var r,n,s,a,o,l,c,u;if("string"!=typeof t&&(t+="",console.warn),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{c=e.localeData(i)}catch(t){c=e.localeData(e.locale())}return s=c.currency.symbol,o=c.abbreviations,r=c.delimiters.decimal,n="."===c.delimiters.thousands?"\\.":c.delimiters.thousands,!(null!==(u=t.match(/^[^\d]+/))&&(t=t.substr(1),u[0]!==s)||null!==(u=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),u[0]!==o.thousand&&u[0]!==o.million&&u[0]!==o.billion&&u[0]!==o.trillion)||(l=new RegExp(n+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(r)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(l):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(l)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(l)||!a[1].match(/^\d+$/))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,i){var r,n,s,o=this._value,l=t||c.defaultFormat;if(i=i||Math.round,0===o&&null!==c.zeroFormat)n=c.zeroFormat;else if(null===o&&null!==c.nullFormat)n=c.nullFormat;else{for(r in a)if(l.match(a[r].regexps.format)){s=a[r].format;break}n=(s=s||e._.numberToFormat)(o,l,i)}return n},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var i=t.correctionFactor.call(null,this._value,e);function r(e,t,r,n){return e+Math.round(i*t)}return this._value=t.reduce([this._value,e],r,0)/i,this},subtract:function(e){var i=t.correctionFactor.call(null,this._value,e);function r(e,t,r,n){return e-Math.round(i*t)}return this._value=t.reduce([e],r,Math.round(this._value*i))/i,this},multiply:function(e){function i(e,i,r,n){var s=t.correctionFactor(e,i);return Math.round(e*s)*Math.round(i*s)/Math.round(s*s)}return this._value=t.reduce([this._value,e],i,1),this},divide:function(e){function i(e,i,r,n){var s=t.correctionFactor(e,i);return Math.round(e*s)/Math.round(i*s)}return this._value=t.reduce([this._value,e],i),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,i,r){var n,s=e._.includes(i," BPS")?" ":"";return t*=1e4,i=i.replace(/\s?BPS/,""),n=e._.numberToFormat(t,i,r),e._.includes(n,")")?((n=n.split("")).splice(-1,0,s+"BPS"),n=n.join("")):n=n+s+"BPS",n},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n="("+(n=(i={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(r.suffixes.filter((function(e){return i.suffixes.indexOf(e)<0}))).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(t,n,s){var a,o,l,c=e._.includes(n,"ib")?r:i,u=e._.includes(n," b")||e._.includes(n," ib")?" ":"";for(n=n.replace(/\s?i?b/,""),a=0;a<=c.suffixes.length;a++)if(o=Math.pow(c.base,a),l=Math.pow(c.base,a+1),null===t||0===t||t>=o&&t<l){u+=c.suffixes[a],o>0&&(t/=o);break}return e._.numberToFormat(t,n,s)+u},unformat:function(t){var n,s,a=e._.stringToNumber(t);if(a){for(n=i.suffixes.length-1;n>=0;n--){if(e._.includes(t,i.suffixes[n])){s=Math.pow(i.base,n);break}if(e._.includes(t,r.suffixes[n])){s=Math.pow(r.base,n);break}}a*=s||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,i,r){var n,s,a=e.locales[e.options.currentLocale],o={before:i.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:i.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(i=i.replace(/\s?\$\s?/,""),n=e._.numberToFormat(t,i,r),t>=0?(o.before=o.before.replace(/[\-\(]/,""),o.after=o.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(o.before,"-")&&!e._.includes(o.before,"(")&&(o.before="-"+o.before),s=0;s<o.before.length;s++)switch(o.before[s]){case"$":n=e._.insert(n,a.currency.symbol,s);break;case" ":n=e._.insert(n," ",s+a.currency.symbol.length-1)}for(s=o.after.length-1;s>=0;s--)switch(o.after[s]){case"$":n=s===o.after.length-1?n+a.currency.symbol:e._.insert(n,a.currency.symbol,-(o.after.length-(1+s)));break;case" ":n=s===o.after.length-1?n+" ":e._.insert(n," ",-(o.after.length-(1+s)+a.currency.symbol.length-1))}return n}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,i,r){var n=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return i=i.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(n[0]),i,r)+"e"+n[1]},unformat:function(t){var i=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),r=Number(i[0]),n=Number(i[1]);function s(t,i,r,n){var s=e._.correctionFactor(t,i);return t*s*(i*s)/(s*s)}return n=e._.includes(t,"e-")?n*=-1:n,e._.reduce([r,Math.pow(10,n)],s,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,i,r){var n=e.locales[e.options.currentLocale],s=e._.includes(i," o")?" ":"";return i=i.replace(/\s?o/,""),s+=n.ordinal(t),e._.numberToFormat(t,i,r)+s}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,i,r){var n,s=e._.includes(i," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),i=i.replace(/\s?\%/,""),n=e._.numberToFormat(t,i,r),e._.includes(n,")")?((n=n.split("")).splice(-1,0,s+"%"),n=n.join("")):n=n+s+"%",n},unformat:function(t){var i=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*i:i}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,i){var r=Math.floor(e/60/60),n=Math.floor((e-60*r*60)/60),s=Math.round(e-60*r*60-60*n);return r+":"+(n<10?"0"+n:n)+":"+(s<10?"0"+s:s)},unformat:function(e){var t=e.split(":"),i=0;return 3===t.length?(i+=60*Number(t[0])*60,i+=60*Number(t[1]),i+=Number(t[2])):2===t.length&&(i+=60*Number(t[0]),i+=Number(t[1])),Number(i)}}),e},void 0===(n="function"==typeof r?r.call(t,i,t,e):r)||(e.exports=n)},4502:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return tt}});var r=i(6440);const n={class:"layout"},s={class:"layout-inner radius-box"},a={class:"container"},o={class:"dashboard-page"};var l=i(9756),c={props:{tabChange:{type:Function,default:null},hot:{type:Object,default:null},activeName:{type:Object}},data(){return{activeItem:this.activeName}},components:{},computed:{...(0,l.Se)(["currentNetwork","networkList"])},methods:{tabChange(e,t){if("trade"===e.props.name)this.$router.push({path:"/trade/"+this.currentNetwork.chains});else this.$router.push({path:"/"+e.props.name});document.title=e.props.label}}},u=i(7650);var d=(0,u.Z)(c,[["render",function(e,t,i,l,c,u){const d=(0,r.up)("el-tab-pane"),h=(0,r.up)("el-tabs");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",s,[(0,r._)("div",a,[(0,r._)("div",o,[(0,r.Wm)(h,{class:"dashboard-item",modelValue:c.activeItem,"onUpdate:modelValue":t[0]||(t[0]=e=>c.activeItem=e),onTabClick:u.tabChange},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{label:e.$t("dashboardNav.hot"),name:"hot",lazy:""},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(i.hot),{ref:"hot"},null,512))],1024))])),_:1},8,["label"])])),_:1},8,["modelValue","onTabClick"])])])])])}]]),h=i(1040),m=i(1254),f=i(6633);const p=e=>((0,r.dD)("data-v-493f8de8"),e=e(),(0,r.Cn)(),e),g={class:"layout-content fixed-layout"},b={class:"filter-view"},y={class:"title"},w=p((()=>(0,r._)("div",{class:"space"},null,-1))),_=p((()=>(0,r._)("a",{style:{"margin-right":"10px"}},"Clear Filter",-1))),v={class:"filter-item filter-hide"},k=[p((()=>(0,r._)("span",{class:"arrow"},null,-1))),p((()=>(0,r._)("span",{class:"title-text"},"查询",-1)))],C={class:"filter-content"},S={class:"sub-filter-item"},x={class:"search-list"},F={class:"v-popover"},T={class:"trigger",style:{display:"inline-block"}},U={class:"input-view"},L=p((()=>(0,r._)("img",{src:f,class:"icon"},null,-1))),D={class:"sub-filter-item"},N=[p((()=>(0,r._)("span",{class:"text-inner"},"前往交易",-1)))],P={class:"filter-item"},A=[p((()=>(0,r._)("span",{class:"arrow"},null,-1))),p((()=>(0,r._)("span",{class:"title-text"},"过滤",-1)))],V={class:"filter-content"},z={class:"sub-filter-item"},M={class:"checkbox-list"},B=["onClick"],$={class:""},q={class:"right-content"},E={class:"datas-list"},I={class:"top-search"},R=p((()=>(0,r._)("div",{class:"total"},null,-1))),H=p((()=>(0,r._)("div",{class:"loading-outer"},[(0,r._)("div",{class:"common-loading"},[(0,r._)("div",{class:"animate-inner"})])],-1))),O={class:"downlist"},Q={class:"v-popover"},j={class:"trigger",style:{display:"inline-block"}},Y={class:"search-list",style:{margin:"auto","padding-bottom":"10px"}},Z={class:"v-popover"},W={class:"trigger",style:{display:"inline-block"}},K={class:"input-view"},G=p((()=>(0,r._)("img",{src:f,class:"icon"},null,-1))),J={class:"avg-prices"},X=p((()=>(0,r._)("div",{class:"title"},"选择不同趋势实时加密货币",-1))),ee={class:"sold-view"},te={class:"sold-list"},ie=["onClick"],re={class:"infos"},ne={class:"info-title"},se=["src"],ae={class:"title-text"},oe={class:"title-identity"},le={key:0,class:"title-identitySpan"},ce={key:0,style:{color:"red"}},ue={key:1},de={style:{color:"yellow"}},he={style:{color:"yellow"}},me={style:{color:"yellow"}},fe={style:{color:"yellow"}},pe={style:{color:"yellow"}},ge={key:2,style:{color:"green"}},be={key:3,style:{color:"yellow"}},ye={style:{color:"yellow"}},we={class:"info-datas"},_e={class:"data-item"},ve=p((()=>(0,r._)("span",null,"Price",-1))),ke=["innerHTML"],Ce={class:"data-item"},Se=p((()=>(0,r._)("span",null,"24h成交量",-1))),xe={class:"data-item"},Fe=p((()=>(0,r._)("span",{style:{"font-size":"13px"}},"成交量趋势",-1))),Te={class:"right-info"},Ue={class:"price-value"},Le={class:"valut-top"},De={key:0,class:"amount"},Ne=["innerHTML"],Pe={key:1,class:"amount"},Ae=["innerHTML"],Ve={key:0,class:"usd-value",style:{color:"green"}},ze={key:1,class:"usd-value",style:{color:"red"}},Me={class:"times"},Be=p((()=>(0,r._)("span",null," 流动性 ",-1)));var $e=i(299),qe=i.n($e);let Ee=0;const Ie="webkit moz ms o".split(" ");let Re,He;if("undefined"==typeof window)Re=function(){},He=function(){};else{let e;Re=window.requestAnimationFrame,He=window.cancelAnimationFrame;for(let t=0;t<Ie.length&&(!Re||!He);t++)e=Ie[t],Re=Re||window[e+"RequestAnimationFrame"],He=He||window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];Re&&He||(Re=function(e){const t=(new Date).getTime(),i=Math.max(0,16-(t-Ee)),r=window.setTimeout((()=>{e(t+i)}),i);return Ee=t+i,r},He=function(e){window.clearTimeout(e)})}var Oe={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(e){return e>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(e,t,i,r){return i*(1-Math.pow(2,-10*e/r))*1024/1023+t}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=Re(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){He(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,Re(this.count)},reset(){this.startTime=null,He(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(e){this.startTime||(this.startTime=e),this.timestamp=e;const t=e-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=Re(this.count):this.$emit("callback")},isNumber(e){return!isNaN(parseFloat(e))},formatNumber(e){e.toFixed||(e-=0),e=e.toFixed(this.decimals);const t=(e+="").split(".");let i=t[0];const r=t.length>1?this.decimal+t[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(i);)i=i.replace(n,"$1"+this.separator+"$2");return this.prefix+i+r+this.suffix}},destroyed(){He(this.rAF)}};var Qe=(0,u.Z)(Oe,[["render",function(e,t,i,n,s,a){return(0,r.wg)(),(0,r.iD)("span",null,(0,h.zw)(s.displayValue),1)}]]),je=Qe;"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",Qe);var Ye=i(936),Ze=i(4587),We=i.n(Ze),Ke={data(){return{callTime:!1,gotPrice:Ye.ph,showPrice:Ye.S2,isHidden:!1,isRefreshing:!1,rankList:[],selectList:[],inputTimeout:null,showCoinList:[],filterList:{honeypot:{title:"蜜罐",hidden:!1},hidden_owner:{title:"隐藏权限",hidden:!1},transfer_pausable:{title:"交易开关",hidden:!1},drops:{title:"看空",hidden:!1},unlockLp:{title:"解锁Lp",hidden:!1},owner_address:{title:"弃权",hidden:!1}},contractAddress:"",coinSelectQuery:"size=100",coinSelect:{searchPhrase:"",priceUsd:{},marketCapUsd:{},volume24hUsd:{},totalLiquidityUsd:{from:7e3,to:1e8},trades24h:{from:200},firstTradingDate:{},chainIds:[parseInt(window.wallet.ChainID,16)]}}},components:{countTo:je},computed:{...(0,l.Se)(["currentCoinList","currentNetwork"])},activated(){this.coinSelect.chainIds=[parseInt(this.currentNetwork.ChainID,16)],this.isRefreshing=!0,this.callInterval(1)},deactivated(){this.isRefreshing=!1,clearTimeout(this.callTime)},methods:{...(0,l.nv)(["setChainCoins"]),async callInterval(e){this.callTime=setTimeout((async()=>{await this.refreshList(),this.isRefreshing&&this.callInterval(3e4)}),e)},async refreshList(){await this.getRankList(),this.getCoinList(),await this.getCoinInfo(),await window.wallet.getToken_security(this.showCoinList)},async getCoinInfo(){const e=this.showCoinList.map((e=>e.address));window.wallet.getUnitPrice(e)},isOwner(e){return"0x000000000000000000000000000000000000dead"!=e&&"0x0000000000000000000000000000000000000000"!=e&&""!=e},getCoinList(){let e=null;if(e=this.contractAddress.length>0?this.selectList:this.currentCoinList,e){var t=e.filter((e=>{if(null==e.token_security)return e;var t=e.token_security;return this.filterList.unlockLp.hidden&&"1"==t.lp_lost||this.filterList.drops.hidden&&e.volume24hUsd24hAgo-e.volume24hUsd<0||this.filterList.hidden_owner.hidden&&"1"==t.hidden_owner||this.filterList.honeypot.hidden&&"1"==t.is_honeypot||this.filterList.owner_address.hidden&&this.isOwner(t.owner_address)||this.filterList.transfer_pausable.hidden&&"1"==t.transfer_pausable?void 0:e}));t=t.filter((e=>{if(null!=this.coinSelect.volume24hUsd.from&&this.coinSelect.volume24hUsd.from>e.volume24hUsd)return;if(null!=this.coinSelect.trades24h.from&&this.coinSelect.trades24h.from>e.trades24h)return;if(null!=this.coinSelect.totalLiquidityUsd.from&&e.totalLiquidityUsd>this.coinSelect.totalLiquidityUsd.from&&this.coinSelect.totalLiquidityUsd.to<e.totalLiquidityUsd)return;let t=Date.parse(e.firstTradingDate);if(null!=this.coinSelect.firstTradingDate.from){if(Date.parse(this.coinSelect.firstTradingDate)>t)return}return e})),t.forEach((e=>{const t=(e.priceUsd-e.priceUsd24hAgo)/e.priceUsd24hAgo*100;e.pricePercent=null==e.priceUsd24hAgo?0:t;let i=Date.parse(e.firstTradingDate);e.time=i})),this.coinSelectQuery.includes("age")?(t=t.filter((e=>{let t=Date.parse(e.firstTradingDate);if(null!=this.coinSelect.firstTradingDate.from){if(Date.parse(this.coinSelect.firstTradingDate.from)>t)return}return e})),t=this.coinSelectQuery.includes("desc")?t.sort(((e,t)=>t.time-e.time)).sort(((e,t)=>t.pricePercent-e.pricePercent)):t.sort(((e,t)=>e.time-t.time)).sort(((e,t)=>e.pricePercent-t.pricePercent))):this.coinSelectQuery.includes("volume24hUsd")?(t=(t=t.sort(((e,t)=>e.volume24hUsd-t.volume24hUsd)).slice(0,100)).sort(((e,t)=>t.trades24h-e.trades24h)),t=this.coinSelectQuery.includes("desc")?t.sort(((e,t)=>t.pricePercent-e.pricePercent)):t.sort(((e,t)=>e.pricePercent-t.pricePercent))):this.coinSelectQuery.includes("priceChange7d")?(t.forEach((e=>{const t=(e.priceUsd-e.priceUsd7dAgo)/e.priceUsd7dAgo*100;e.priceChangePercent=null==e.priceUsd7dAgo?0:t})),t=this.coinSelectQuery.includes("desc")?t.sort(((e,t)=>t.priceChangePercent-e.priceChangePercent)).sort(((e,t)=>t.pricePercent-e.pricePercent)):t.sort(((e,t)=>e.priceChangePercent-t.priceChangePercent)).sort(((e,t)=>e.pricePercent-t.pricePercent))):this.coinSelectQuery.includes("priceChange24h")&&(t.forEach((e=>{const t=(e.priceUsd-e.priceUsd24hAgo)/e.priceUsd24hAgo*100;e.priceChangePercent=null==e.priceUsd24hAgo?0:t})),t=this.coinSelectQuery.includes("desc")?t.sort(((e,t)=>t.priceChangePercent-e.priceChangePercent)).sort(((e,t)=>t.pricePercent-e.pricePercent)):t.sort(((e,t)=>e.priceChangePercent-t.priceChangePercent)).sort(((e,t)=>e.pricePercent-t.pricePercent))),this.showCoinList=t.slice(0,40)}},filterHidder(e,t){e.currentTarget.className.includes("checkbox-item")&&(e.currentTarget.className="common-checkbox checkbox-item"==e.currentTarget.className?"common-checkbox checkbox-item selected":"common-checkbox checkbox-item"),t.hidden=e.currentTarget.className.includes("selected")},filterClick(e){e.currentTarget.parentElement.className.includes("filter-item")&&(e.currentTarget.parentElement.className="filter-item"==e.currentTarget.parentElement.className?"filter-item item-hidden":"filter-item")},refreshPage(e){this.isRefreshing=!1,this.$router.push({path:"/trade/"+this.currentNetwork.chains,query:{outputCurrency:e.address}})},nFormatter(e){return We()(e).format("0a")},formatMoney(e,t=0,i=".",r=","){e=(e+"").replace(/[^0-9+-Ee.]/g,"");let n=isFinite(+e)?+e:0,s=isFinite(+t)?Math.abs(t):0,a=void 0===r?",":r,o=void 0===i?".":i,l="";l=(s?function(e,t){let i=Math.pow(10,t);return""+Math.ceil(e*i)/i}(n,s):""+Math.round(n)).split(".");let c=/(-?\d+)(\d{3})/;for(;c.test(l[0]);)l[0]=l[0].replace(c,"$1"+a+"$2");return(l[1]||"").length<s&&(l[1]=l[1]||"",l[1]+=new Array(s-l[1].length+1).join("0")),l.join(o)},async buttonSelectChange(e){this.contractAddress="";let t=e.currentTarget.attributes.datas.value;"yellow"==e.currentTarget.style.borderColor?e.currentTarget.style.borderColor="red":"red"==e.currentTarget.style.borderColor?e.currentTarget.style.borderColor="green":e.currentTarget.style.borderColor="yellow";let i=e.currentTarget.style.borderColor;switch(this.coinSelect.firstTradingDate={},t){case"1":this.coinSelect.totalLiquidityUsd={from:15e3,to:1e8},this.coinSelect.trades24h={from:200},this.coinSelect.volume24hUsd={},this.coinSelectQuery="yellow"!=i&&"red"!=i?"size=100":"yellow"==i?"size=100&sort=priceChange7d%3Adesc":"size=100&sort=priceChange7d%3Aasc";break;case"2":this.coinSelect.totalLiquidityUsd={from:15e3,to:1e8},this.coinSelect.trades24h={from:100},this.coinSelect.volume24hUsd={from:1e4},this.coinSelectQuery="yellow"!=i&&"red"!=i?"size=100":"yellow"==i?"size=100&sort=volume24hUsd%3Adesc":"size=100&sort=volume24hUsd%3Aasc";break;case"3":let e=Ge.formatUTC();this.coinSelect.totalLiquidityUsd={from:2e4,to:1e8},this.coinSelect.trades24h={from:300},this.coinSelect.volume24hUsd={from:1e4},this.coinSelect.firstTradingDate={from:e},this.coinSelectQuery="yellow"!=i&&"red"!=i?"size=100":"yellow"==i?"size=100&sort=age%3Adesc":"size=100&sort=age%3Aasc";break;case"4":this.coinSelect.totalLiquidityUsd={from:7e3,to:1e8},this.coinSelect.trades24h={from:200},this.coinSelect.volume24hUsd={},this.coinSelect.firstTradingDate={},this.coinSelectQuery="yellow"!=i&&"red"!=i?"size=100":"yellow"==i?"size=100&sort=priceChange24h%3Adesc":"size=100&sort=priceChange24h%3Aasc"}this.getCoinList(),await this.getRankList()},async contractAddressChange(){if(this.contractAddress.length<=0)return;clearTimeout(this.inputTimeout);this.inputTimeout=setTimeout((async()=>{this.coinSelect.totalLiquidityUsd={},this.coinSelect.trades24h={},this.coinSelect.volume24hUsd={},this.coinSelect.firstTradingDate={},this.selectList=await window.wallet.selectCoinInfo(this.contractAddress)}),350)},setCoinsDiff(e){let t=this.currentCoinList;if(0==t.length)t=e;else{e.forEach((e=>{let i=t.find((t=>t.address==e.address));i||t.push(e)}))}return this.setChainCoins(t),t},async getRankList(e=""){if(this.contractAddress.length>0)return;const t=await qe().post("https://api.coinbrain.com/cointoaster/coins?"+this.coinSelectQuery+e,this.coinSelect);var i=t.data.endCursor;this.setCoinsDiff(t.data.items),t.data.items.length>=100&&"size=100"==this.coinSelectQuery&&await this.getRankList("&after="+encodeURIComponent(i))}}};const Ge={format(e,t=new Date){let i,r={"Y+":(t=new Date(t)).getFullYear().toString(),"M+":(t.getMonth()+1).toString(),"D+":t.getDate().toString(),"h+":t.getHours().toString(),"m+":t.getMinutes().toString(),"s+":t.getSeconds().toString()};for(let t in r)i=new RegExp("("+t+")").exec(e),i&&(e=e.replace(i[1],1===i[1].length?r[t]:r[t].padStart(i[1].length,"0")));return e},formatUTC:()=>{let e=Ge.format("YYYY-MM-DD hh:mm:ss",(new Date).getTime()-288e5-1728e5);return e=e.replace(/\//g,"-"),e=e.replace(" ","T"),e+=".435Z",e}},Je=(0,u.Z)(Ke,[["render",function(e,t,i,n,s,a){const o=(0,r.up)("el-button"),l=(0,r.up)("countTo");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",{class:(0,h.C_)(["left-aside",this.isHidden?"":"aside-hide"])},[(0,r._)("div",b,[(0,r._)("div",y,[(0,r.Uk)(" Filter "),w,_,(0,r._)("a",{onClick:t[0]||(t[0]=()=>{this.isHidden=!this.isHidden}),class:"dropdown common-button button-black button-30"},"Filter")]),(0,r._)("div",v,[(0,r._)("div",{class:"filter-title",onClick:t[1]||(t[1]=e=>a.filterClick(e))},k),(0,r._)("div",C,[(0,r._)("div",S,[(0,r._)("div",x,[(0,r._)("div",F,[(0,r._)("div",T,[(0,r._)("div",U,[(0,r.wy)((0,r._)("input",{placeholder:"查找合约或代币符号","onUpdate:modelValue":t[2]||(t[2]=e=>s.contractAddress=e),onInput:t[3]||(t[3]=(...e)=>a.contractAddressChange&&a.contractAddressChange(...e)),maxlength:"200",class:"common-input"},null,544),[[m.nr,s.contractAddress]]),L])])])])]),(0,r._)("div",D,[42==s.contractAddress.length?((0,r.wg)(),(0,r.iD)("a",{key:0,onClick:t[4]||(t[4]=e=>a.refreshPage({address:s.contractAddress})),class:"common-button button-primary button-44 disabled"},N)):(0,r.kq)("",!0)])])]),(0,r._)("div",P,[(0,r._)("div",{class:"filter-title",onClick:t[5]||(t[5]=e=>a.filterClick(e))},A),(0,r._)("div",V,[(0,r._)("div",z,[(0,r._)("div",M,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.filterList,(e=>((0,r.wg)(),(0,r.iD)("a",{class:"common-checkbox checkbox-item",key:e.title,onClick:t=>a.filterHidder(t,e)},[(0,r._)("span",$,(0,h.zw)(e.title),1)],8,B)))),128))])])])])])],2),(0,r._)("div",q,[(0,r._)("div",E,[(0,r._)("div",I,[R,H,(0,r._)("div",O,[(0,r._)("div",Q,[(0,r._)("div",j,[(0,r._)("a",{onClick:t[6]||(t[6]=()=>{this.isHidden=!this.isHidden}),class:"dropdown common-button button-black button-30"},"Filter")])])])]),(0,r._)("div",Y,[(0,r._)("div",Z,[(0,r._)("div",W,[(0,r._)("div",K,[(0,r.wy)((0,r._)("input",{placeholder:"查找合约或代币符号","onUpdate:modelValue":t[7]||(t[7]=e=>s.contractAddress=e),onInput:t[8]||(t[8]=(...e)=>a.contractAddressChange&&a.contractAddressChange(...e)),maxlength:"200",class:"common-input"},null,544),[[m.nr,s.contractAddress]]),G])])])]),(0,r._)("div",J,[X,(0,r.Wm)(o,{datas:"1",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:a.buttonSelectChange},{default:(0,r.w5)((()=>[(0,r.Uk)("默认")])),_:1},8,["onClick"]),(0,r.Wm)(o,{datas:"2",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:a.buttonSelectChange},{default:(0,r.w5)((()=>[(0,r.Uk)("热门硬币")])),_:1},8,["onClick"]),(0,r.Wm)(o,{datas:"3",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:a.buttonSelectChange},{default:(0,r.w5)((()=>[(0,r.Uk)("顶级新币")])),_:1},8,["onClick"]),(0,r.Wm)(o,{datas:"4",style:{background:"#1b1b1b"},class:"common-button button-44 add-button",onClick:a.buttonSelectChange},{default:(0,r.w5)((()=>[(0,r.Uk)("赢家/输家")])),_:1},8,["onClick"])])]),(0,r._)("div",ee,[(0,r._)("div",te,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.showCoinList,((e,t)=>((0,r.wg)(),(0,r.iD)("a",{key:e.address,onClick:t=>a.refreshPage(e),class:"sold-item"},[(0,r._)("div",re,[(0,r._)("div",ne,[e.logo?((0,r.wg)(),(0,r.iD)("img",{key:0,src:e.logo},null,8,se)):((0,r.wg)(),(0,r.iD)("div",{key:1,class:"rank-lst__item--logo",style:(0,h.j5)({background:"#"+t+e.symbol.length+t})},(0,h.zw)(e.symbol.substr(0,1)),5)),(0,r._)("div",ae,(0,h.zw)(e.symbol),1),(0,r._)("div",oe,[(0,r.Uk)((0,h.zw)(e.name)+" ",1),e.token_security?((0,r.wg)(),(0,r.iD)("span",le,[(0,r.Uk)(" ("+(0,h.zw)(e.volume24hUsd24hAgo-e.volume24hUsd>0?"看多":"看空")+") (买卖税: "+(0,h.zw)((100*e.token_security.buy_tax).toFixed(1))+"/ "+(0,h.zw)((100*e.token_security.sell_tax).toFixed(1))+") 交易数:("+(0,h.zw)(e.trades24h)+") ",1),"1"===e.token_security.is_honeypot||(100*e.token_security.buy_tax).toFixed(1)>50||(100*e.token_security.sell_tax).toFixed(1)>50?((0,r.wg)(),(0,r.iD)("span",ce," 高税/貔貅 ")):a.isOwner(e.token_security.owner_address)||"1"==e.token_security.is_proxy||"1"==e.token_security.hidden_owner?((0,r.wg)(),(0,r.iD)("span",ue,[(0,r._)("span",de,(0,h.zw)("1"==e.token_security.is_proxy?"代理合约":""),1),(0,r._)("span",he,(0,h.zw)("1"==e.token_security.transfer_pausable?"存在交易开关":""),1),(0,r._)("span",me,(0,h.zw)("1"==e.token_security.is_blacklisted?"存在黑名单":""),1),(0,r._)("span",fe,(0,h.zw)("1"==e.token_security.slippage_modifiable?"可调税":""),1),(0,r._)("span",pe,(0,h.zw)("1"==e.token_security.hidden_owner?"隐藏权限":a.isOwner(e.token_security.owner_address)?"未弃权":""),1)])):((0,r.wg)(),(0,r.iD)("span",ge,(0,h.zw)(a.isOwner(e.token_security.owner_address)?"未弃权":"已弃权"),1)),"1"==e.token_security.lp_lost?((0,r.wg)(),(0,r.iD)("span",be,"Lp未锁定")):(0,r.kq)("",!0),(0,r._)("span",ye,(0,h.zw)("1"==e.token_security.cannot_sell_all?"卖不掉完":""),1)])):(0,r.kq)("",!0)])]),(0,r._)("div",we,[(0,r._)("div",_e,[ve,(0,r.Uk)(" $"),e.priceUsd>.001?((0,r.wg)(),(0,r.j4)(l,{key:0,startVal:0,endVal:s.gotPrice(e.priceUsd),duration:"1000",decimals:"3"},null,8,["endVal"])):((0,r.wg)(),(0,r.iD)("span",{key:1,innerHTML:s.showPrice(e.priceUsd)},null,8,ke))]),(0,r._)("div",Ce,[Se,(0,r.Uk)(" $"+(0,h.zw)(this.nFormatter(e.volume24hUsd)),1)]),(0,r._)("div",xe,[Fe,(0,r.Uk)(" $"+(0,h.zw)(this.nFormatter(e.volume24hUsd24hAgo-e.volume24hUsd)),1)])])]),(0,r._)("div",Te,[(0,r._)("div",Ue,[(0,r._)("div",Le,[e.priceUsd>.001?((0,r.wg)(),(0,r.iD)("span",De,[(0,r._)("div",{innerHTML:s.gotPrice(e.priceUsd-e.priceUsd24hAgo)},null,8,Ne)])):((0,r.wg)(),(0,r.iD)("span",Pe,[(0,r._)("div",{innerHTML:s.showPrice(e.priceUsd-e.priceUsd24hAgo)},null,8,Ae)]))]),e.priceUsd>e.priceUsd24hAgo?((0,r.wg)(),(0,r.iD)("span",Ve,(0,h.zw)(s.showPrice(e.pricePercent,2))+"%",1)):(0,r.kq)("",!0),e.priceUsd24hAgo>e.priceUsd?((0,r.wg)(),(0,r.iD)("span",ze,(0,h.zw)(s.showPrice(e.pricePercent,2))+"%",1)):(0,r.kq)("",!0)]),(0,r._)("div",Me,[Be,(0,r.Uk)(" $"+(0,h.zw)(this.formatMoney(e.totalLiquidityUsd,0)),1)])])],8,ie)))),128))])])])])}],["__scopeId","data-v-493f8de8"]]);var Xe=Je,et={name:"element",data(){return{activeName:"hot",hot:Xe}},components:{elItem:d},computed:{},beforeMount(){this.activeName=this.$route.params.key},mounted(){},methods:{}};var tt=(0,u.Z)(et,[["render",function(e,t,i,n,s,a){const o=(0,r.up)("elItem");return(0,r.wg)(),(0,r.j4)(o,{hot:s.hot,activeName:s.activeName},null,8,["hot","activeName"])}],["__scopeId","data-v-82502d92"]])},6633:function(e,t,i){"use strict";e.exports=i.p+"img/icon-search.47dc0a11.svg"}}]);