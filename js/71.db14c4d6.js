"use strict";(self.webpackChunkgame=self.webpackChunkgame||[]).push([[71],{7566:function(e,t,i){i.r(t),i.d(t,{default:function(){return rt}});var s=i(6440);var a=i(5177),r=i(1040),n=i(1254),o=i(6483),l=i(8843);const c={class:"trade"},d={key:0,class:"trade-left MR-20"},m={class:"flex-row-start align-center rank-lst__info"},h=["onClick"],p=["src"],u={key:1,class:"rank-lst__item--logo"},g={key:0,class:"market-info"},w={class:"flex-row-start align-center rank-lst__info",style:{"font-size":"0.15rem"}},k={style:{"font-size":"0.12rem"}},f={key:0,style:{color:"green","margin-right":"5px"}},y={key:1,style:{color:"red","margin-right":"5px"}},_={key:2,class:"title-identitySpan"},v={key:0,style:{color:"red"}},b={key:1},x={style:{color:"yellow","margin-right":"1px"}},C={style:{color:"yellow","margin-right":"1px"}},z={style:{color:"yellow","margin-right":"1px"}},A={style:{color:"yellow","margin-right":"1px"}},L={style:{color:"yellow","margin-right":"1px"}},M={key:2,style:{color:"green"}},S={key:3,style:{color:"yellow"}},U={style:{color:"yellow"}},I=["src"],D=["src"],W={class:"trade-info PB-20"},T={class:"trade-top"},O={class:"trade-info__title MB-5"},N={class:"trade-info__title-info"},H={class:"trade-item"},R={class:"trade-item__top flex-row-between"},P={class:"flex-row-start align-center pointer"},B={class:"trade-item__top-icon MR-10"},J={class:"trade-item__top-name text-overflow__1"},j={key:0},F=["disabled"],V={class:"trade-item__input-usdt"},q={class:"trade-item"},E={class:"trade-item__top flex-row-between"},Y={class:"flex-row-start align-center pointer"},G={class:"trade-item__top-icon MR-10"},K={class:"trade-item__top-name text-overflow__1"},$={key:0},Q=["disabled"],Z={class:"trade-item__input-usdt"},X={class:"trade-slippage PL-20 PR-20 MT-5"},ee={class:"trade-slippage__select flex-row-between pointer"},te={class:"flex-row-end"},ie=(0,s._)("div",{class:"text-12 MR-10"},"GWEI",-1),se={class:"PL-30 PR-30 MT-5"},ae={class:"flex-row-between"},re={class:"text-white"},ne={class:"text-green"},oe={key:4,class:"flex-row-between ML-15 MR-15 MT-5 text-white"},le={class:"flex-row-center"},ce={target:"_blank",href:"https://docs.teadao.app/chan-pin/jiao-huan/ru-he-jiao-yi-how-to-trade#zhuan-ye-mo-shi",style:{"margin-right":"5px"}},de={key:5,class:"flex-row-between ML-15 MR-15 MT-5 text-white"},me={class:"flex-row-center"},he={target:"_blank",href:"https://docs.teadao.app/chan-pin/jiao-huan/ru-he-jiao-yi-how-to-trade#zhuan-ye-mo-shi",style:{"margin-right":"5px"}},pe={key:6,class:"flex-row-between ML-15 MR-15 MT-5 text-white"},ue={class:"flex-row-center"},ge={target:"_blank",href:"https://docs.teadao.app/chan-pin/jiao-huan/ru-he-jiao-yi-how-to-trade#zhuan-ye-mo-shi",style:{"margin-right":"5px"}},we={class:"flex-row-start align-center MB-5 MT-20 MR-20"},ke={class:"flex-row-start align-center rank-lst__info"},fe=["onClick"],ye=["src"],_e={key:1,class:"rank-lst__item--logo"},ve=["src"];var be=i(936),xe=i(2762);const Ce={class:"flex-row-between confirm-item"},ze={class:"flex-row-start align-center"},Ae={class:"confirm-item__icon MR-5"},Le={class:"flex-row-between confirm-item"},Me={class:"flex-row-start align-center"},Se={class:"confirm-item__icon MR-5"},Ue={class:"confirm-info"},Ie={class:"flex-row-between MB-10"},De={class:"flex-row-end"},We={class:"flex-row-between MB-10"},Te={class:"flex-row-start align-center"},Oe=(0,s._)("br",null,null,-1),Ne={class:"flex-row-end"};var He=i(1279),Re={name:"swapConfirm",props:{amountOutMin:String,confirm:Function},data(){return{utils:He,getBit:be.qD,getLogo:be.R7,dialogVisible:!1,item1:{},item2:{},loading:!1}},methods:{open(e,t){this.item1=e,this.item2=t,this.dialogVisible=!0},confirmHandler(){this.loading=!0,this.confirm().finally((()=>{this.loading=!1,this.dialogVisible=!1}))}}},Pe=i(7650);var Be=(0,Pe.Z)(Re,[["render",function(e,t,i,a,n,o){const l=(0,s.up)("Bottom"),c=(0,s.up)("el-icon"),d=(0,s.up)("QuestionFilled"),m=(0,s.up)("el-tooltip"),h=(0,s.up)("el-button"),p=(0,s.up)("el-dialog"),u=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.j4)(p,{modelValue:n.dialogVisible,"onUpdate:modelValue":t[0]||(t[0]=e=>n.dialogVisible=e),title:e.$t("swap.confirmSwap"),width:"620px","custom-class":"confirm"},{default:(0,s.w5)((()=>[(0,s._)("div",Ce,[(0,s._)("div",ze,[(0,s.wy)((0,s._)("img",Ae,null,512),[[u,n.getLogo(n.item1.address)]]),(0,s.Uk)(" "+(0,r.zw)(n.getBit(n.item1.price,9)),1)]),(0,s._)("div",null,(0,r.zw)(n.item1.symbol),1)]),(0,s.Wm)(c,{color:"#fff",size:20,class:"MT-20 MB-20"},{default:(0,s.w5)((()=>[(0,s.Wm)(l)])),_:1}),(0,s._)("div",Le,[(0,s._)("div",Me,[(0,s.wy)((0,s._)("img",Se,null,512),[[u,n.getLogo(n.item2.address)]]),(0,s.Uk)(" "+(0,r.zw)(n.getBit(n.item2.price,9)),1)]),(0,s._)("div",null,(0,r.zw)(n.item2.symbol),1)]),(0,s._)("div",Ue,[(0,s._)("div",Ie,[(0,s._)("div",null,(0,r.zw)(e.t("swap.price")),1),(0,s._)("div",De,(0,r.zw)(n.getBit(n.item2.price/n.item1.price,5))+" "+(0,r.zw)(n.item2.symbol)+" / "+(0,r.zw)(n.item1.symbol),1)]),(0,s._)("div",We,[(0,s._)("div",Te,[(0,s._)("div",null,(0,r.zw)(e.t("swap.minimum")),1),(0,s.Wm)(m,{placement:"right"},{content:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.t("swap.tips1"))+",",1),Oe,(0,s.Uk)(" "+(0,r.zw)(e.t("swap.tips2"))+". ",1)])),default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"ML-5 pointer"},{default:(0,s.w5)((()=>[(0,s.Wm)(d)])),_:1})])),_:1})]),(0,s._)("div",Ne,(0,r.zw)(i.amountOutMin)+" "+(0,r.zw)(n.item2.symbol),1)])]),(0,s.Wm)(h,{class:"confirm-btn MT-30",loading:n.loading,onClick:o.confirmHandler},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e.t("swap.confirmSwap")),1)])),_:1},8,["loading","onClick"])])),_:1},8,["modelValue","title"])}]]),Je=i(8709),je=i(9011),Fe=i(6120),Ve=i(9239),qe=i(5546),Ee=i(9657),Ye=i(570),Ge=i(9756),Ke=i(6494),$e=i(2811),Qe=i(5101),Ze=(i(9854),i(1218)),Xe=(i(6761),i(299)),et=i.n(Xe);const{t:tt}=Ke.default.global;var it={data(){return{t:tt,checkLowerCase:be.YG,utils:He,gotPrice:be.ph,getLogo:be.R7,getBit:be.qD,callTime:0,mainKey:"item1",chartUrl:"",rankList:[],isLogin:!1,useDex:"",autoDexAddress:"",inputTimeout:null,loginTimeout:null,isRefreshing:!1,refreshLoading:!1,priceImpact:"",pathHas:"",pathNames:"",baseRoute:null,chartShow:!1,routes:null,exchange:Ze.Z,swapLoading:!1,approveLoading:!1,progress:10,gWei:3,gWeiList:[3,6,9,12],hasApprove:!1,type:"",item1:{},item2:{},token0:null,token1:null}},components:{Tokens:xe.Z,History:Fe.Z,SwapConfirm:Be,RpcList:Je.Z,Setting:je.Z},computed:{...(0,Ge.Se)(["currentNetwork","currentConfig","accountChange","connectState"]),amountOutMin(){if(!this.item2.price)return Ee.O$.from(0);let e=Ye.vz(this.item2.price.toString(),this.item2.decimals),t=Ye.vz(this.item2.price.toString(),this.item2.decimals),i=Ye.vz(this.progress.toString(),this.item2.decimals),s=Ye.vz("100",this.item2.decimals);return t.sub(e.mul(i).div(s)).toString()},getChartUrl(){const e=this.currentNetwork.transferChartToken.find((e=>!!e&&e.address===this.item2.address));let t=this.item1.address.toLowerCase();e||(t=this.item2.address.toLowerCase());let i="";return et().get("https://api.coinbrain.com/cointoaster/coins/liquidity-pools-page/?chainId="+wallet.network.ChainDex+"&baseToken="+t+"&pagination=%7B%22limit%22%3A50%7D").then((e=>{let t=e.data.items.filter((e=>{if(wallet.network.TransferTokens.find((t=>t.address.toLocaleLowerCase()==e.target.address.toLocaleLowerCase())))return e}));i=t[0].poolTokenAddress,this.chartUrl="https://www.dextools.io/widgets/en/"+wallet.network.ChainSymbol+"/pe-light/"+i+"?theme=dark&chartType=1&chartResolution=30&drawingToolbars=false"})),this.tradesUrl="https://coinbrain.com/embed/"+wallet.network.coinbrainSymbol+"-"+t+"?theme=custom&padding=16&background=181818&chart=0&trades=1",this.chartUrl}},activated(){this.exchange=Ze.Z;let e=localStorage.getItem("progress");this.progress=e?JSON.parse(e):10,this.isRefreshing=!0,this.callInterval(1),this.handleAccount()},deactivated(){this.isRefreshing=!1,clearTimeout(this.callTime)},watch:{accountChange:{handler(e,t){this.handleAccount()},deep:!0},"currentNetwork.ChainID":{immediate:!0,handler(){const{Token:e}=this.currentNetwork,t=e[0],i=e[1]||e[0];this.item1={...this.item1,...t},this.item2={...this.item2,...i},this.gWei=3*this.currentNetwork.GWEI,this.gWeiList=[3*this.currentNetwork.GWEI,6*this.currentNetwork.GWEI,9*this.currentNetwork.GWEI,12*this.currentNetwork.GWEI]}}},mounted(){this.$watch("$route.params.key",(e=>{this.loginCallBack()}))},methods:{...(0,Ge.nv)(["setConnectDialog"]),handleAccount(){let e=this.getAccount();this.hasApprove=!1,this.pathHas=[],this.item1.price="",this.item2.price="",e?(this.isLogin=!0,this.loginCallBack()):this.isLogin=!1},async callInterval(e){this.callTime=setTimeout((async()=>{await this.refreshPrice(),this.isRefreshing&&this.callInterval(6e3)}),e)},getPrices(e){if(void 0===this[e].price||""==this[e].price.trim())return this[e].price="",!1;let t=this[e].price.toString();const i=Ye.vz("0",18);let s=Ye.vz(t,this[e].decimals);return!s.lte(i)&&s},getAmount(){var e=this.item1;return""==e.price||!e.balance||e.balance.gte(Ye.vz(e.price,e.decimals))},getAccount(){let e=window.wallet.getByAccount();return e?.address},getUsdt(e,t,i){if(e&&t){var s=window.wallet.getUsdAddress(),a=window.wallet.getByUnitPrice(t.toLocaleLowerCase());if(a&&(this[i].uprice=a.priceUsd),s.find((e=>t.toLocaleLowerCase()==e.toLowerCase())))return this[i].uprice="1",void(this[i].usdt=(0,be.ph)(this[i].uprice*e));null!=this[i].uprice&&""!=this[i].uprice&&(this[i].usdt=(0,be.ph)(this[i].uprice*e))}else this.priceImpact=""},openSetting(){this.$refs.setting.open()},openRpcList(){this.$refs.rpcList.open()},refreshPage(e){this.type="item2",this.$refs.tokens.fastImport(e.address,!1)},addTokenHandler(){const{symbol:e,address:t}=this.item2;window.wallet.addTokenToMeta(t,e,(0,be.R7)(t))},progressChange(){localStorage.setItem("progress",this.progress)},tokenUpdate({address:e,name:t,symbol:i}){this.item1.address==e?(this.item1.name=t,this.item1.symbol=i):this.item2.address==e&&(this.item2.name=t,this.item2.symbol=i),this.isLogin&&this.loginCallBack()},async tokenChange(e,t){"item1"==(t=t||this.type)?this.item2.address==e.address&&(this.item2=JSON.parse(JSON.stringify(this.item1))):this.item1.address==e.address&&this.item1.address==e.address&&(this.item1=JSON.parse(JSON.stringify(this.item2))),e.price=e.price||"0",this[t]=e,this.isLogin&&this.loginCallBack()},transformHandler(){const e=(0,$e.IU)(this.item1);this.item1=(0,$e.IU)(this.item2),this.item2=e,this.isLogin&&this.loginCallBack()},maxHandler(){let e=(0,$e.IU)(this.item1.balance);if(this.checkLowerCase(this.item1.address,window.wallet.getWrappedAddress())){const t=Ye.vz("0.001",this.item1.decimals);e=e.sub(t)}this.item1.price=(0,be.qD)(Ye.bM(e,this.item1.decimals)),this.price1Change("item1",!0)},async approveHandler(){this.approveLoading=!0;try{let e=this.baseRoute?.route;if(null==e)return;let t=this.getAccount(),i=(await e.getPrep({account:t})).transaction,s=[this.getRouteAddress(),Ee.O$.from("115792089237316195423570985008687907853269984665640564039457584007913129639935",0)],a=await(0,Qe.Z)({blockchain:i.blockchain,address:i.to,method:i.method,api:i.api,params:s});try{await a.wait(),(0,qe.bM)({type:tt("success"),title:tt("success"),message:tt("exchange")+tt("success")}),this.$refs.history.pushItem({item1:JSON.parse(JSON.stringify(this.item1)),item2:JSON.parse(JSON.stringify(this.item2)),action:"approve",tx:JSON.parse(JSON.stringify(a)),status:1}),await this.swapHandler()}catch(e){this.$refs.history.pushItem({item1:JSON.parse(JSON.stringify(this.item1)),item2:JSON.parse(JSON.stringify(this.item2)),action:"approve",tx:JSON.parse(JSON.stringify(a)),status:0}),(0,qe.bM)({title:"提示 swapHistory",message:e.message,type:"error",duration:3e3})}this.checkApprove()}catch(e){(0,be.CR)(e)}this.approveLoading=!1},async swapHandler(){this.swapLoading=!0;let e=this.baseRoute?.route;if(!e)return void(this.swapLoading=!1);let t=this.getAccount(),i=await e.getTransaction({account:t});"v3"==e.exchange.type?i.params.params.amountOutMinimum=this.amountOutMin:i.params.amountOutMin=this.amountOutMin;let s=Ye.vz(this.gWei.toString(),9),a=null;try{let e={blockchain:i.blockchain,address:i.to,method:i.method,api:i.api,params:i.params,gasPrice:s};i.hasOwnProperty("value")&&(e.value=i.value),a=await(0,Qe.Z)(e)}catch(e){(0,be.CR)(e)}if(a){try{const e=await a;try{await e.wait(),(0,qe.bM)({type:tt("success"),title:tt("success"),message:tt("exchange")+tt("success")}),this.$refs.history.pushItem({item1:JSON.parse(JSON.stringify(this.item1)),item2:JSON.parse(JSON.stringify(this.item2)),action:"trade",tx:JSON.parse(JSON.stringify(e)),status:1});let t=this.item1.price;this.item1.price="",await this.loginCallBack(),this.item1.price=t}catch(t){this.$refs.history.pushItem({item1:JSON.parse(JSON.stringify(this.item1)),item2:JSON.parse(JSON.stringify(this.item2)),action:"trade",tx:JSON.parse(JSON.stringify(e)),status:0}),(0,qe.bM)({title:"提示 tradeHistory",message:t.message,type:"error",duration:3e3})}localStorage.setItem(window.wallet.accounts[0]+this.currentNetwork.chains+"swapHistory",JSON.stringify(this.swapHistory))}catch(e){(0,qe.bM)({title:"提示",message:e.message,type:"error",duration:3e3})}this.swapLoading=!1}else this.swapLoading=!1},async getRoute(e){let t=Ee.O$;return this.routes=await this.exchange.route({blockchain:window.wallet.getNetwork.chains,tokenIn:this.item1.address,tokenOut:this.item2.address,amountIn:"item1"==this.mainKey?e:void 0,amountOut:"item2"==this.mainKey?e:void 0}),this.routes.reduce(((e,i)=>{const s=t.from("item1"==this.mainKey?i.amountOutMin:i.amountInMax);if("item1"==this.mainKey){if(!e||s.gt(e.value))return{route:i,value:s}}else if(!e||s.lt(e.value))return{route:i,value:s};return e}),null)},async price1Change(e,t=!1){t&&(this.mainKey=e),clearTimeout(this.inputTimeout);let i=this.getPrices(e);if(!i)return;let s="item1"==e?"item2":"item1";this.inputTimeout=setTimeout((async()=>{if(this.baseRoute=await this.getRoute(i),null==this.baseRoute)return;let e=this.baseRoute.route;this.autoDexAddress=e.exchange.router.address;var t=Ye.bM(this.baseRoute.value,this[s].decimals);this[s].price=(0,be.ph)(t),await this.checkApprove()}),350)},async checkApprove(){if(!this.isLogin)return;let e=this.getRouteAddress(),t=this.getAccount(),i=!0;if(this.checkLowerCase(this.item1.address,window.wallet.getWrappedAddress()))this.hasApprove=!0;else{if(this.token0&&this.checkLowerCase(this.token0.address,this.item1.address)){(await this.token0.token.allowance(t,e)).lt(this.item1.balance)&&(i=!1)}else if(this.token1&&this.checkLowerCase(this.token1.address,this.item1.address)){(await this.token1.token.allowance(t,e)).lt(this.item1.balance)&&(i=!1)}this.hasApprove!=i&&(this.hasApprove=i)}},checkPathHas(){let e=this.item1.address,t=this.item2.address;if(this.pathHas.length>=2){let i=this.pathHas[0],s=this.pathHas[this.pathHas.length-1];return this.checkLowerCase(e,i)&&this.checkLowerCase(t,s)}return!1},getRouteAddress(){return this.currentConfig?.autoRoute?this.autoDexAddress:this.currentConfig?.dex?.address},async refreshPrice(){if(!this.refreshLoading){try{this.refreshLoading=!0,await this.checkApprove();let e=await this.getRoute(Ye.vz("1",this.item1.decimals));if(!e)return void(this.refreshLoading=!1);if(this.useDex=e.route.exchange.label,this.autoDexAddress=e.route.exchange.router.address,this.token0=await window.wallet.getByToken(this.item1.address),this.token0?.balance?.gt(0)&&(this.item1.balance=this.token0.balance),this.token1=await window.wallet.getByToken(this.item2.address),this.token1?.balance?.gt(0)&&(this.item2.balance=this.token1.balance),this.checkPathHas()||await this.getPathNames(e.route.path),0!=this.getPrices(this.mainKey)&&(await this.getImpact(),await window.wallet.getUnitPrice([this.item1.address,this.item2.address]),this.getUsdt(this.item1.price,this.item1.address,"item1"),this.getUsdt(this.item2.price,this.item2.address,"item2")),this.chartShow){let e=await window.wallet.getHotCoins();e&&(this.rankList=e.slice(0,10))}await this.price1Change(this.mainKey)}catch(e){}this.refreshLoading=!1}},async getImpact(){let e=this.baseRoute?.route;if(null!=e)if(e.exchange&&"v2"===e.exchange.type){let t,i=this.exchange,s=e.path,a=this.getPrices("item1"),r=e.exchange[window.wallet.getNetwork.chains].router.address;for(let e=0;e<s.length-1;e++){let n=[s[e],s[e+1]];const o=await i.getReserves({blockchain:window.wallet.getNetwork.chains,path:n,routeAddress:r});t=await this.calculatePriceImpactAndAmountOut(a,o.reserves,n,o.originalReserveOrder),a=t.amountOut,this.priceImpact=t.priceImpact}}else this.priceImpact=""},async calculatePriceImpactAndAmountOut(e,t,i,s){if(!e.gt(0)||2!==t.length||t.some((e=>!e.gt(0))))throw new Error("Invalid input parameters");if(2!==i.length||2!==s.length)throw new Error("Invalid path or reserve order");const[a,r]=s;let[n,o]=i[0]===a?t:t.reverse();const l=e;let c=l.mul(o).div(n.add(l));const d=c.mul(9975).div(o);return{amountOut:c,priceImpact:Ye.bM(d,2)}},async getPathNames(e){const t=Object.values(e),i=await Promise.all(t.map((async e=>{let{name:t,symbol:i,decimals:s,balance:a}=await window.wallet.getByToken(e);return i})));this.pathHas=e,this.pathNames=i.join(" > ")},async loginCallBack(e=!0){clearTimeout(this.loginTimeout);this.loginTimeout=setTimeout((async()=>{this.item1.loading=e,this.item2.loading=e,await this.getItemBalance(this.item1.address,"item1"),await this.getItemBalance(this.item2.address,"item2"),await this.refreshPrice()}),500)},async getItemBalance(e,t){if(!e)return!1;if(!this.isLogin)return!1;let{name:i,symbol:s,decimals:a,balance:r}=await window.wallet.getByToken(e);return this[t].balance=r,this[t].decimals=a,this[t].name=i,this[t].symbol=s,this[t].loading=!1,{balance:r,decimals:a}},copyHandler(e){(0,Ve.Z)(e),(0,qe.bM)({type:tt("success"),title:tt("success"),message:tt("copy")+tt("success")})},toggleGwei(e){this.gWei=e,window.wallet.setGasGwei(e)},openHistory(){this.$refs.history.open()},openTokensDialog(e){this.type=e,this.$refs.tokens.open([this.item1.address,this.item2.address])},swapSubmit(){this.currentConfig?.professional?this.swapHandler():this.$refs.swapConfirm.open(this.item1,this.item2)},loginFn(){this.setConnectDialog(!0)}}};var st=(0,Pe.Z)(it,[["render",function(e,t,i,a,be,xe){const Ce=(0,s.up)("marquee"),ze=(0,s.up)("Histogram"),Ae=(0,s.up)("el-icon"),Le=(0,s.up)("Operation"),Me=(0,s.up)("Link"),Se=(0,s.up)("Clock"),Ue=(0,s.up)("ArrowDown"),Ie=(0,s.up)("CopyDocument"),De=(0,s.up)("Loading"),We=(0,s.up)("el-tag"),Te=(0,s.up)("el-slider"),Oe=(0,s.up)("el-button"),Ne=(0,s.up)("QuestionFilled"),He=(0,s.up)("CircleCloseFilled"),Re=(0,s.up)("el-drawer"),Pe=(0,s.up)("Tokens"),Be=(0,s.up)("SwapConfirm"),Je=(0,s.up)("History"),je=(0,s.up)("RpcList"),Fe=(0,s.up)("Setting"),Ve=(0,s.Q2)("lazy");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",c,[be.chartShow?((0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(Ce,{class:"rank-lst flex-row-center sold-item",behavior:"scroll",onmouseover:"this.stop()",onmouseout:"this.start()"},{default:(0,s.w5)((()=>[(0,s._)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.rankList,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"rank-lst__item flex-row-start align-center pointer",key:e.address,onClick:t=>xe.refreshPage(e)},[e.logo?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.logo,class:"rank-lst__item--logo"},null,8,p)):((0,s.wg)(),(0,s.iD)("div",u,(0,r.zw)(e.symbol.substr(0,1)),1)),(0,s._)("div",null,(0,r.zw)(e.symbol),1)],8,h)))),128))])])),_:1}),e.token_security?((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",w,[(0,s._)("span",k,(0,r.zw)(be.t("trade.VolumeTrends"))+"("+(0,r.zw)(e.price24h.volume>0?be.t("trade.TrendsBullish"):be.t("trade.TrendsDrops"))+") $"+(0,r.zw)(e.price24h.volumeForma),1),e.price24h.is_up?((0,s.wg)(),(0,s.iD)("span",f,"(24h:"+(0,r.zw)(e.price24h.price)+"%)",1)):(0,s.kq)("",!0),e.price24h.is_up?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",y,"(24h:-"+(0,r.zw)(e.price24h.price)+"%)",1)),e.token_security?((0,s.wg)(),(0,s.iD)("span",_,[(0,s.Uk)(" ("+(0,r.zw)(be.t("trade.TrendsTax"))+": "+(0,r.zw)((100*e.token_security.buy_tax).toFixed(1))+"%/ "+(0,r.zw)((100*e.token_security.sell_tax).toFixed(1))+"%) ",1),"1"===e.token_security.is_honeypot||(100*e.token_security.buy_tax).toFixed(1)>50||(100*e.token_security.sell_tax).toFixed(1)>50?((0,s.wg)(),(0,s.iD)("span",v,(0,r.zw)(be.t("trade.honeypot"))+"; ",1)):e.token_security.is_owner&&"1"!=e.token_security.is_proxy&&"1"!=e.token_security.hidden_owner?((0,s.wg)(),(0,s.iD)("span",M,(0,r.zw)(e.token_security.is_owner?be.t("trade.owner_yes"):""),1)):((0,s.wg)(),(0,s.iD)("span",b,[(0,s._)("span",x,(0,r.zw)("1"==e.token_security.is_proxy?be.t("trade.proxy"):""),1),(0,s._)("span",C,(0,r.zw)("1"==e.token_security.transfer_pausable?be.t("trade.transfer_pausable"):""),1),(0,s._)("span",z,(0,r.zw)("1"==e.token_security.is_blacklisted?be.t("trade.is_blacklisted"):""),1),(0,s._)("span",A,(0,r.zw)("1"==e.token_security.slippage_modifiable?be.t("trade.slippage_modifiable"):""),1),(0,s._)("span",L,(0,r.zw)("1"==e.token_security.hidden_owner?be.t("trade.hidden_owner"):be.t("trade.owner_not")),1)])),"1"==e.token_security.lp_lost?((0,s.wg)(),(0,s.iD)("span",S,(0,r.zw)(be.t("trade.lp_lost")),1)):(0,s.kq)("",!0),(0,s._)("span",U,(0,r.zw)("1"==e.token_security.cannot_sell_all?be.t("trade.cannot_sell_all"):""),1)])):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),(0,s._)("div",null,[(0,s._)("iframe",{id:"dextools-widget",title:"DEXTools Trading Chart",class:"trade-iframe",src:xe.getChartUrl,frameborder:"0"},null,8,I),(0,s._)("iframe",{class:"trade-iframe",width:"100%",frameBorder:"0",scrolling:"no",style:{position:"relative",height:"200px",border:"1px solid #3c3c3c",background:"#181818",bottom:"100px","margin-bottom":"-100px"},src:this.tradesUrl},null,8,D)])])):(0,s.kq)("",!0),(0,s._)("div",W,[(0,s._)("div",T,[(0,s.Wm)(Ae,{size:30,class:"trade-top__icon",onClick:t[0]||(t[0]=e=>be.chartShow=!be.chartShow)},{default:(0,s.w5)((()=>[(0,s.Wm)(ze)])),_:1}),(0,s._)("div",O,(0,r.zw)(be.t("trade.title")),1),(0,s._)("div",N,(0,r.zw)(be.t("current")+be.t("route"))+' "'+(0,r.zw)(e.currentConfig?.autoRoute?be.useDex:e.currentConfig?.dex?.symbol)+'"',1),(0,s.Wm)(Ae,{size:30,class:"trade-top__icon operation pointer",onClick:t[1]||(t[1]=t=>e.$refs.setting.open())},{default:(0,s.w5)((()=>[(0,s.Wm)(Le)])),_:1}),(0,s.Wm)(Ae,{size:30,class:"trade-top__icon rpc pointer",onClick:t[2]||(t[2]=t=>e.$refs.rpcList.open())},{default:(0,s.w5)((()=>[(0,s.Wm)(Me)])),_:1}),be.isLogin?((0,s.wg)(),(0,s.j4)(Ae,{key:0,size:30,class:"trade-top__icon right pointer",onClick:t[3]||(t[3]=t=>e.$refs.history.open())},{default:(0,s.w5)((()=>[(0,s.Wm)(Se)])),_:1})):(0,s.kq)("",!0)]),(0,s._)("div",H,[(0,s._)("div",R,[(0,s._)("div",P,[(0,s._)("div",{class:"flex-row-start align-center",onClick:t[4]||(t[4]=e=>xe.openTokensDialog("item1"))},[(0,s.wy)((0,s._)("img",B,null,512),[[Ve,be.getLogo(be.item1.address)]]),(0,s._)("div",J,(0,r.zw)(be.item1.symbol),1),(0,s.Wm)(Ae,{class:"ML-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ue)])),_:1})]),(0,s.Wm)(Ae,{class:"ML-5",onClick:t[5]||(t[5]=e=>xe.copyHandler(be.item1.address))},{default:(0,s.w5)((()=>[(0,s.Wm)(Ie)])),_:1})]),be.isLogin?((0,s.wg)(),(0,s.iD)("div",j,[be.item1.loading?((0,s.wg)(),(0,s.j4)(Ae,{key:0,class:"is-loading"},{default:(0,s.w5)((()=>[(0,s.Wm)(De)])),_:1})):be.item1.balance?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Uk)((0,r.zw)(be.t("balance"))+"："+(0,r.zw)(be.gotPrice(be.utils.formatUnits(be.item1.balance,be.item1.decimals))),1)],64)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)]),(0,s._)("div",{class:(0,r.C_)(["trade-item__input MT-10 flex-row-start align-center",{"is-disabled":!be.isLogin}])},[(0,s.wy)((0,s._)("input",{disabled:!be.isLogin||be.approveLoading,class:"text-right flex-1",onInput:t[6]||(t[6]=e=>xe.price1Change("item1",!0)),"onUpdate:modelValue":t[7]||(t[7]=e=>be.item1.price=e),placeholder:"0.00"},null,40,F),[[n.nr,be.item1.price]]),be.isLogin?((0,s.wg)(),(0,s.j4)(We,{key:0,class:"ML-10 ml-2 pointer",effect:"light",onClick:xe.maxHandler,type:"warning",size:"small"},{default:(0,s.w5)((()=>[(0,s.Uk)("MAX")])),_:1},8,["onClick"])):(0,s.kq)("",!0),(0,s._)("div",V,[(0,s.Uk)((0,r.zw)(xe.getUsdt(be.item1.price,be.item1.address,"item1"))+" ",1),be.item1.usdt&&be.item1.price?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Uk)("~$"+(0,r.zw)(be.item1.usdt),1)],64)):(0,s.kq)("",!0)])],2)]),(0,s._)("img",{src:o,class:"trade-transform pointer",onClick:t[8]||(t[8]=(...e)=>xe.transformHandler&&xe.transformHandler(...e))}),(0,s._)("div",q,[(0,s._)("div",E,[(0,s._)("div",Y,[(0,s._)("div",{class:"flex-row-start align-center",onClick:t[9]||(t[9]=e=>xe.openTokensDialog("item2"))},[(0,s.wy)((0,s._)("img",G,null,512),[[Ve,be.getLogo(be.item2.address)]]),(0,s._)("div",K,(0,r.zw)(be.item2.symbol),1),(0,s.Wm)(Ae,{class:"ML-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ue)])),_:1})]),(0,s.Wm)(Ae,{class:"ML-5",onClick:t[10]||(t[10]=e=>xe.copyHandler(be.item2.address))},{default:(0,s.w5)((()=>[(0,s.Wm)(Ie)])),_:1}),be.isLogin&&1==e.connectState?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"ML-5 trade-item__top-wallet",src:l,onClick:t[11]||(t[11]=(...e)=>xe.addTokenHandler&&xe.addTokenHandler(...e))})):(0,s.kq)("",!0)]),be.isLogin?((0,s.wg)(),(0,s.iD)("div",$,[be.item2.loading?((0,s.wg)(),(0,s.j4)(Ae,{key:0,class:"is-loading"},{default:(0,s.w5)((()=>[(0,s.Wm)(De)])),_:1})):be.item2.balance?((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[(0,s.Uk)((0,r.zw)(be.t("balance"))+": "+(0,r.zw)(be.gotPrice(be.utils.formatUnits(be.item2.balance,be.item2.decimals))),1)],64)):(0,s.kq)("",!0)])):(0,s.kq)("",!0)]),(0,s._)("div",{class:(0,r.C_)(["trade-item__input MT-5 flex-row-start align-center",{"is-disabled":!be.isLogin}])},[(0,s.wy)((0,s._)("input",{disabled:!be.isLogin||be.approveLoading,"onUpdate:modelValue":t[12]||(t[12]=e=>be.item2.price=e),class:"text-right flex-1",onInput:t[13]||(t[13]=e=>xe.price1Change("item2",!0)),placeholder:"0.00"},null,40,Q),[[n.nr,be.item2.price]]),(0,s._)("div",Z,[(0,s.Uk)((0,r.zw)(xe.getUsdt(be.item2.price,be.item2.address,"item2"))+" ",1),be.item2.usdt&&be.item2.price?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Uk)("~$"+(0,r.zw)(be.item2.usdt),1)],64)):(0,s.kq)("",!0)])],2)]),(0,s._)("div",X,[(0,s._)("div",ee,[(0,s._)("div",te,[ie,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.gWeiList,(e=>((0,s.wg)(),(0,s.j4)(We,{class:"trade-slippage__select-tag",type:"success",effect:be.gWei==e?"dark":"light",onClick:t=>xe.toggleGwei(e),key:e},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(e),1)])),_:2},1032,["effect","onClick"])))),128)),(0,s.wy)((0,s._)("input",{type:"number",class:"trade-slippage__select-input",placeholder:"5","onUpdate:modelValue":t[14]||(t[14]=e=>be.gWei=e)},null,512),[[n.nr,be.gWei,void 0,{number:!0}]])])])]),(0,s._)("div",se,[(0,s._)("div",ae,[(0,s._)("div",re,(0,r.zw)(be.t("trade.slippage")),1),(0,s._)("div",ne,(0,r.zw)(be.progress)+"%",1)]),(0,s._)("div",null,[(0,s.Wm)(Te,{modelValue:be.progress,"onUpdate:modelValue":t[15]||(t[15]=e=>be.progress=e),min:1,max:e.currentConfig?.professional?99:49,onInput:xe.progressChange},null,8,["modelValue","max","onInput"])])]),be.isLogin?0==xe.getPrices("item1")?((0,s.wg)(),(0,s.j4)(Oe,{key:1,disabled:"",class:"trade-btn"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("pleaseEnter")+be.t("amount")),1)])),_:1})):be.hasApprove?((0,s.wg)(),(0,s.iD)(s.HY,{key:3},[xe.getAmount()?((0,s.wg)(),(0,s.j4)(Oe,{key:0,class:(0,r.C_)(["trade-btn",{impactButton:""!=be.priceImpact&&be.priceImpact>5}]),loading:be.swapLoading,onClick:xe.swapSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(""!=be.priceImpact&&be.priceImpact>5&&3==this.connectState?be.t("trade.priceImpact"):be.t("trade.title")),1)])),_:1},8,["class","loading","onClick"])):((0,s.wg)(),(0,s.j4)(Oe,{key:1,disabled:"",class:"trade-btn"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("balance")+be.t("notEnough")),1)])),_:1}))],64)):((0,s.wg)(),(0,s.j4)(Oe,{key:2,loading:be.approveLoading,class:"trade-btn",onClick:xe.approveHandler},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("approve")),1)])),_:1},8,["loading","onClick"])):((0,s.wg)(),(0,s.j4)(Oe,{key:0,class:"trade-btn",onClick:xe.loginFn},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("connect")+be.t("wallet")),1)])),_:1},8,["onClick"])),xe.getPrices("item1")&&""!=this.priceImpact?((0,s.wg)(),(0,s.iD)("div",oe,[(0,s._)("div",le,[(0,s._)("a",ce,[(0,s.Wm)(Ae,{class:"ML-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ne)])),_:1})]),(0,s.Uk)(" "+(0,r.zw)(e.$t("trade.amountOutMin"))+" "+(0,r.zw)(be.utils.formatUnits(this.amountOutMin,be.item2.decimals)),1)])])):(0,s.kq)("",!0),""!=be.pathNames?((0,s.wg)(),(0,s.iD)("div",de,[(0,s._)("div",me,[(0,s._)("a",he,[(0,s.Wm)(Ae,{class:"ML-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ne)])),_:1})]),(0,s.Uk)(" "+(0,r.zw)(e.$t("trade.pathRoute"))+" "+(0,r.zw)(be.pathNames),1)])])):(0,s.kq)("",!0),xe.getPrices("item1")&&""!=this.priceImpact?((0,s.wg)(),(0,s.iD)("div",pe,[(0,s._)("div",ue,[(0,s._)("a",ge,[(0,s.Wm)(Ae,{class:"ML-5"},{default:(0,s.w5)((()=>[(0,s.Wm)(Ne)])),_:1})]),(0,s.Uk)(" "+(0,r.zw)(e.$t("trade.priceImpact"))+" "+(0,r.zw)(this.priceImpact)+"% ",1)])])):(0,s.kq)("",!0)])]),(0,s.Wm)(Re,{modelValue:be.chartShow,"onUpdate:modelValue":t[17]||(t[17]=e=>be.chartShow=e),direction:"btt","show-close":!1,"custom-class":"trade-drawer","modal-class":"trade-drawer__modal","append-to-body":"","with-header":!1},{default:(0,s.w5)((()=>[(0,s._)("div",we,[be.isLogin?0==xe.getPrices("item1")?((0,s.wg)(),(0,s.j4)(Oe,{key:1,disabled:"",class:"trade-btn"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("pleaseEnter")+be.t("amount")),1)])),_:1})):be.hasApprove?((0,s.wg)(),(0,s.iD)(s.HY,{key:3},[be.item1.price?xe.getAmount()?((0,s.wg)(),(0,s.j4)(Oe,{key:1,class:"trade-btn",loading:be.swapLoading,onClick:xe.swapSubmit},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("exchange")),1)])),_:1},8,["loading","onClick"])):(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(Oe,{key:0,disabled:"",class:"trade-btn"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("pleaseEnter")+be.t("amount")),1)])),_:1}))],64)):((0,s.wg)(),(0,s.j4)(Oe,{key:2,loading:be.approveLoading,class:"trade-btn",onClick:xe.approveHandler},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("approve")),1)])),_:1},8,["loading","onClick"])):((0,s.wg)(),(0,s.j4)(Oe,{key:0,class:"trade-btn",onClick:xe.loginFn},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.zw)(be.t("connect")+be.t("wallet")),1)])),_:1},8,["onClick"])),(0,s.Wm)(Ae,{size:30,color:"#fff",class:"el-icon--left",onClick:t[16]||(t[16]=e=>be.chartShow=!1)},{default:(0,s.w5)((()=>[(0,s.Wm)(He)])),_:1})]),(0,s.Wm)(Ce,{class:"rank-lst flex-row-center",behavior:"scroll",onmouseover:"this.stop()",onmouseout:"this.start()"},{default:(0,s.w5)((()=>[(0,s._)("div",ke,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(be.rankList,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"rank-lst__item flex-row-start align-center pointer",key:e.address,onClick:t=>xe.refreshPage(e)},[e.logo?((0,s.wg)(),(0,s.iD)("img",{key:0,src:e.logo,class:"rank-lst__item--logo"},null,8,ye)):((0,s.wg)(),(0,s.iD)("div",_e,(0,r.zw)(e.symbol.substr(0,1)),1)),(0,s._)("div",null,(0,r.zw)(e.symbol),1)],8,fe)))),128))])])),_:1}),(0,s._)("iframe",{id:"dextools-widget",title:"DEXTools Trading Chart",class:"trade-iframe",src:xe.getChartUrl,frameborder:"0"},null,8,ve)])),_:1},8,["modelValue"]),(0,s.Wm)(Pe,{ref:"tokens",onChange:xe.tokenChange,onUpdate:xe.tokenUpdate},null,8,["onChange","onUpdate"]),(0,s.Wm)(Be,{ref:"swapConfirm",confirm:xe.swapHandler,amountOutMin:be.gotPrice(be.utils.formatUnits(xe.amountOutMin.toString(),be.item2.decimals))},null,8,["confirm","amountOutMin"]),(0,s.Wm)(Je,{ref:"history"},null,512),(0,s.Wm)(je,{ref:"rpcList"},null,512),(0,s.Wm)(Fe,{ref:"setting"},null,512)],64)}]]),at={data(){return{activeName:"trade",trade:st}},components:{swapv3:st,elItem:a.Z},methods:{}};var rt=(0,Pe.Z)(at,[["render",function(e,t,i,a,r,n){const o=(0,s.up)("elItem");return(0,s.wg)(),(0,s.j4)(o,{trade:r.trade,activeName:r.activeName},null,8,["trade","activeName"])}]])},6483:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcf///////7Tt8v///////////////////////yPI1ifJ1yDH1Ybi6T3P3FrX4EbR3TDM2Gzb5DTN2ivK2B/H1Zrtt7QAAAAVdFJOUwAaBzINHgMkIRTl0PdDi2J7rFKgveadq0oAAAKDSURBVFjDtZmJkoMgDEBVigfI4fX/v7qc3doKRI3Mzk6nTt+8NFFCWlXJ1bbN6zUMdV1T2ptFqXk5DK9X07bV+fXGWVrnlmdeQzqagfURFpc1NVDLPIczbvSL9UGl1hOMtLia9klciL6GIh0vSwtMINHrdYDlJYt6UFxE5iVbWLT7uNssj3YnF00TbTZO8xwxEfY1nidixZuL+jrvmHiHd0Q09XeDZ4lfiWle5+rvtx73iWlv8hyxxQv4J+jmtuA+6HsZPsh0M9wXdM+JBisjX3lpMAIOeQnfYFGQzJJzOZOCov8WIRETNTE2KQKJGVSDQvNx5FpAahGUEiEtUApIWkxRd1jAzhY3qKihQFPcFSDHcKDJcwW6S8DAesAH1pDbBArsaP0AsMcE9nVFcYG0SkVMiBCEHAN3175irlKCYtZazYL8AomYldbzsW6fBCq9rpOevcgnkJBZT+uq1UmgXvjI1kD8AFreyka+6NNAtm3MOu6Azs9eSQJTSVHSfGxzjjug9bMXpEokJVU2Qk3ug87xDQx+5m0lEmWTKmxC1BIchd1SLHAmIvgt6rhs+tytR/4dI/Dfj1y5l6PjpJUHqsBbktuVAeYeX29HuVjgIgt+5edhdOScjaP9n/dzwPwWEBw3ZoH+VW577t2eQvNbvHPcRveX9/ObVGkbjY5+FdoHu40WN/roWPbzG325Ffl3LLU3vi0u9yLRseAXG0RAO2ccOWO81H6Fdg7ScBIll0WW2rnQcEL6LyLMQ18JAjyqYDft+McK9IMP/tEM/fCIf7zFP4Cjjwjwhxj4Yxb8QRD+qAp9mPbAuA9/IIk/Mn1gqIs/dsYfjD8wun/gx4XrP3/8AfUYnCeR/F3+AAAAAElFTkSuQmCC"}}]);