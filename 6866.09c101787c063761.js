"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6866],{6866:(F,b,l)=>{l.r(b),l.d(b,{DepositEditPageModule:()=>Y});var x=l(6814),h=l(95),r=l(2912),Z=l(7168),T=l(5861),y=l(5083),C=l(6676),t=l(5678),_=l(8439),S=l(4387);function w(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"ion-datetime",22),t.NdJ("ngModelChange",function(o){t.CHM(n);const a=t.oxw(2);return t.KtG(a.newDepositDate=o)})("ionChange",function(o){t.CHM(n);const a=t.oxw(2);return t.KtG(a.changeDepositFilterDate(o))}),t.qZA()}if(2&i){const n=t.oxw(2);t.Q6J("ngModel",n.newDepositDate)}}function D(i,g){1&i&&(t.TgZ(0,"h6",23),t._uU(1),t.qZA()),2&i&&(t.xp6(1),t.hij(" ","No hay registros para esta busqueda"," "))}function P(i,g){1&i&&(t.TgZ(0,"ion-row",24)(1,"ion-col",25)(2,"strong"),t._uU(3,"Cliente"),t.qZA()(),t.TgZ(4,"ion-col",26)(5,"ion-grid",27)(6,"ion-row",27)(7,"ion-col",28)(8,"strong"),t._uU(9," Abono"),t.qZA()(),t.TgZ(10,"ion-col",28)(11,"strong"),t._uU(12,"Saldo Actual"),t.qZA()(),t.TgZ(13,"ion-col",28)(14,"strong"),t._uU(15,"Nuevo Saldo"),t.qZA()()()()()())}const A=i=>({syncRequired:i});function M(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"ion-item",34)(1,"ion-grid")(2,"ion-row")(3,"ion-col",35),t._uU(4),t.qZA(),t.TgZ(5,"ion-col",36)(6,"ion-grid")(7,"ion-row",37)(8,"ion-col",38)(9,"input",39),t.NdJ("keyup",function(){t.CHM(n);const o=t.oxw().$implicit,a=t.oxw(3);return t.KtG(a.modifySyncronizeTransaction(o))})("ngModelChange",function(o){t.CHM(n);const a=t.oxw().$implicit;return t.KtG(a.price=o)}),t.qZA()(),t.TgZ(10,"ion-col",38),t._uU(11),t.ALo(12,"COP"),t.qZA(),t.TgZ(13,"ion-col",38)(14,"strong"),t._uU(15),t.ALo(16,"COP"),t.qZA()()()()()()()()}if(2&i){const n=t.oxw().$implicit;t.xp6(4),t.hij(" ",null==n.transaction.client?null:n.transaction.client.name," "),t.xp6(5),t.Q6J("ngClass",t.VKq(9,A,n.isEdited))("ngModel",n.price),t.xp6(2),t.hij(" ",t.lcZ(12,5,n.transaction.balanceBefore)," "),t.xp6(4),t.hij(" ",t.lcZ(16,7,((null==n.transaction.client?null:n.transaction.client.balance)||0)-(n.price||0))," ")}}function E(i,g){if(1&i){const n=t.EpF();t.TgZ(0,"ion-item",40)(1,"ion-label",41)(2,"div",42)(3,"span")(4,"strong"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-grid")(7,"ion-row")(8,"ion-col",43)(9,"div"),t._uU(10," Abono \xa0 \xa0 \xa0 \xa0 \xa0 "),t.qZA(),t.TgZ(11,"div",44)(12,"input",45),t.NdJ("keyup",function(){t.CHM(n);const o=t.oxw().$implicit,a=t.oxw(3);return t.KtG(a.modifySyncronizeTransaction(o))})("ngModelChange",function(o){t.CHM(n);const a=t.oxw().$implicit;return t.KtG(a.price=o)}),t.ALo(13,"COP"),t.qZA()()(),t.TgZ(14,"ion-col",46),t._uU(15," Saldo Actual "),t.TgZ(16,"div",44),t._uU(17),t.ALo(18,"COP"),t.qZA()(),t.TgZ(19,"ion-col",46),t._uU(20," Nuevo Saldo "),t.TgZ(21,"div",44),t._uU(22),t.ALo(23,"COP"),t.qZA()()()()()()}if(2&i){const n=t.oxw().$implicit;t.xp6(5),t.Oqu(null==n.transaction.client?null:n.transaction.client.name),t.xp6(7),t.s9C("placeholder",t.lcZ(13,6,n.price)),t.Q6J("ngClass",t.VKq(12,A,n.isEdited))("ngModel",n.price),t.xp6(5),t.hij(" ",t.lcZ(18,8,null==n.transaction.client?null:n.transaction.client.balance)," "),t.xp6(5),t.hij(" ",t.lcZ(23,10,((null==n.transaction.client?null:n.transaction.client.balance)||0)-(n.price||0))," ")}}function O(i,g){if(1&i&&(t.ynx(0),t.TgZ(1,"ion-col",31),t.YNc(2,M,17,11,"ion-item",32)(3,E,24,14,"ion-item",33),t.qZA(),t.BQk()),2&i){const n=t.oxw(3);t.xp6(2),t.Q6J("ngIf",n.isLandscape),t.xp6(1),t.Q6J("ngIf",!n.isLandscape)}}const z=i=>({"border-radius-1":i});function J(i,g){if(1&i&&(t.TgZ(0,"ion-row",29),t.YNc(1,O,4,2,"ng-container",30),t.qZA()),2&i){const n=g.$implicit,e=t.oxw(2);t.Q6J("@filterAnimation",e.clientsTotal)("ngClass",t.VKq(3,z,!e.isLandscape)),t.xp6(1),t.Q6J("ngForOf",n.transactionsCss)}}const U=i=>({"focused-layer":i}),k=i=>({empty:i});function q(i,g){if(1&i){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",12)(2,"strong",13),t._uU(3,"Fecha de Abono: "),t.qZA(),t._UZ(4,"ion-datetime-button",14)(5,"ion-icon",15),t.TgZ(6,"ion-modal",16),t.YNc(7,w,1,1,"ng-template"),t.qZA()(),t.TgZ(8,"ion-searchbar",17),t.NdJ("ionInput",function(o){t.CHM(n);const a=t.oxw();return t.KtG(a.findClientByName(o))}),t.qZA(),t.YNc(9,D,2,1,"h6",18),t.TgZ(10,"ion-grid",19),t.YNc(11,P,16,0,"ion-row",20)(12,J,2,5,"ion-row",21),t.qZA(),t.BQk()}if(2&i){const n=t.oxw();t.xp6(1),t.Q6J("ngClass",t.VKq(6,U,n.showBackdrop)),t.xp6(3),t.Q6J("ngClass",t.VKq(8,k,!n.depositDate||0==n.depositDate.length)),t.xp6(2),t.Q6J("keepContentsMounted",!0),t.xp6(3),t.Q6J("ngIf",n.datesCssOri.length>0&&n.datesCss&&0==(null==n.datesCss[0].transactionsCss?null:n.datesCss[0].transactionsCss.length)),t.xp6(2),t.Q6J("ngIf",n.isLandscape),t.xp6(1),t.Q6J("ngForOf",n.datesCss)}}function Q(i,g){1&i&&(t.TgZ(0,"ion-list",19)(1,"ion-item")(2,"ion-label"),t._UZ(3,"ion-skeleton-text",47),t.qZA()(),t.TgZ(4,"ion-item")(5,"ion-label"),t._UZ(6,"ion-skeleton-text",47),t.qZA()(),t.TgZ(7,"ion-item")(8,"ion-label"),t._UZ(9,"ion-skeleton-text",48),t.qZA()()()),2&i&&(t.xp6(3),t.Q6J("animated",!0),t.xp6(3),t.Q6J("animated",!0),t.xp6(3),t.Q6J("animated",!0))}const I=[{path:"",component:(()=>{class i{constructor(n,e,o,a,d,u,m){this.navCtrl=n,this.storageService=e,this.screenSizeService=o,this.dialogService=a,this.deliveryService=d,this.redirectService=u,this.apiService=m,this.datesCssOri=[],this.datesCss=[],this.clientsTotal=-1,this.loading=!0,this.isLandscape=!1,this.showBackdrop=!0,this.depositDate=C().format("YYYY-MM-DD"),this.isSmallScreen=!1,this.sortState={field:"date",direction:"desc"}}ngOnInit(){var n=this;return(0,T.Z)(function*(){n.redirectService.routerNameChange("tabs/deposit-edit"),n.userAuth=yield n.storageService.getUserAuth(),n.isLandscape=window.innerWidth>=755,n.isSmallScreen=n.screenSizeService.isSmallScreen,n.screenSizeService.isLandscape$.subscribe(e=>{n.isSmallScreen=e.isSmallScreen,n.isLandscape=e.innerWidth>=620}),yield n.initializeTransactionList(),n.loading=!1})()}initializeTransactionList(){var n=this;return(0,T.Z)(function*(){const e=yield n.storageService.getUserAuth();let o=yield n.storageService.getClients(e);o=o||[];let a=0;const d=yield n.storageService.getTransactionTypes(e);n.transactionType=d.find(s=>s.targetType==y.Lm.Debit&&"Abono"==s.name),n.clientsTotal=o.length,n.clients=o.filter(s=>s.balance||!1).sort((s,c)=>s.balance&&c.balance?c.balance-s.balance:0);for(const s of o)(!s.balance||0===s.balance)&&n.clients.push(s);n.datesCssOri=[{date:n.depositDate,totalPrice:0,transactionsCss:[]}];let m=(new Date).getTime();n.clients.forEach(s=>{m++,a++,n.datesCssOri[0].transactionsCss.push({order:a,transaction:{id:m,client_id:s.id,client:s,balanceAfter:s.balance||0,balanceBefore:s.balance||0,date:n.depositDate,price:0,units:1,user_id:n.userAuth.id,syncRequired:!0,transactionType:n.transactionType,transaction_type_id:n.transactionType?n.transactionType.id:0},isEdited:!1})}),n.datesCss=n.datesCssOri})()}getTransactionCount(){return this.datesCss.reduce((n,e)=>n+e.transactionsCss.length,0)}findClientByName(n){this.clientsTotal=0;const e=[{date:this.depositDate,totalPrice:0,transactionsCss:[]}],o="object"==typeof n?(n.target.value||"").trim().toLowerCase():n||"";this.datesCssOri.forEach(a=>{for(let d of a.transactionsCss)(""==o||d.transaction.client?.name?.toUpperCase().includes(o.toUpperCase()))&&(e[0].transactionsCss.push(d),this.clientsTotal++)}),this.datesCss=e}changeDepositFilterDate(n){const e=n.target;if(e){const o=C(n.detail.value);this.depositDate=C(o.toDate()).format("YYYY-MM-DD");const a=e.parentNode.parentElement;a&&a.dismiss()}}changeDateStart(n){const e=n.target;if(e){C(n.detail.value);const a=e.parentNode.parentElement;a&&a.dismiss()}}changeDateEnd(n){const e=n.target;if(e){C(n.detail.value);const a=e.parentNode.parentElement;a&&a.dismiss()}}presentAlertConfirm(){var n=this;let e=this.getTransactionPending();var o;this.dialogService.showAlert(0==e?{header:"Salir sin cambios",subHeader:"No se ha realizado ning\xfan cambio. Desea salir del registro de abonos?",message:"",buttons:[{text:"Cancelar",cssClass:"alert-button-cancel",role:"cancel",handler:()=>{}},{text:"Confirmar",cssClass:"alert-success-confirm",handler:(o=(0,T.Z)(function*(){yield n.goToDepositList()}),function(){return o.apply(this,arguments)})}]}:{header:"Guardar Transacci\xf3n",subHeader:1==e?"Se guardar\xe1 1 transacci\xf3n":"Se guardar\xe1n "+e+" transacciones",message:"Desea continuar con la transacci\xf3n?",buttons:[{text:"Cancelar",cssClass:"alert-button-cancel",role:"cancel",handler:()=>{}},{text:"Confirmar",cssClass:"alert-success-confirm",handler:()=>{this.onFinish()}}]})}onFinish(){var n=this;return(0,T.Z)(function*(){const e=yield n.dialogService.showLoading(),o=yield n.storageService.getUserAuth(),a=[];for(let s of n.datesCss)for(let c of s.transactionsCss)if(c.isEdited&&c.price&&c.isEdited&&c.transaction.client){const p=c.transaction,f=c.transaction.client;p.balanceBefore=f.balance||0,f.balance=(f.balance||0)-c.price,p.balanceAfter=f.balance,p.price=-c.price,p.date=n.depositDate,p.user_id=n.userAuth?n.userAuth.id:0,a.push(p)}const d={};let u=yield n.apiService.saveTransactions(a).catch(()=>{e.dismiss()});if(u){e.dismiss();for(let s of a)if(u["savetx-"+s.id]){const c=u["savetx-"+s.id],p=s.id,f=c.insert||c.update,v=s.client_id;d[v]=v,s.id=f.id,s.syncRequired=!1,delete s.transactionType,delete s.client,yield n.storageService.pushTransactions(o,s,p),yield n.deliveryService.orderClientTransactions(o,s.client_id)}else alert("Error no encuentra el guardado para la transacci\xf3n")}else for(let s of a)d[s.client_id]=s.client_id,s.syncRequired=!0,yield n.storageService.pushTransactions(o,s,s.id);for(let s in d)yield n.deliveryService.orderClientTransactions(o,parseInt(s));yield n.goToDepositList();const m=yield n.dialogService.showAlert({message:"Abonos registrados exti\xf3samente",buttons:[{text:"Cerrar",cssClass:"alert-success-confirm",handler:()=>{}}]});setTimeout(()=>{m.dismiss()},2e3)})()}getTransactionPending(){let n=0;for(let e of this.datesCss)for(let o of e.transactionsCss)o.isEdited&&n++;return n}modifySyncronizeTransaction(n){n.isEdited=!0}goToDepositList(){this.redirectService.redirectTo("tabs/deposit")}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(r.SH),t.Y36(_.V1),t.Y36(_.O6),t.Y36(_.xA),t.Y36(_.pN),t.Y36(_.VH),t.Y36(_.sM))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-deposit-edit"]],decls:15,vars:5,consts:[[3,"translucent"],[1,"ion-padding-landscape-head"],["slot","start",1,"width-100"],["text","","icon","caret-back","defaultHref","tabs/deposit"],[1,"ion-text-center","width-100"],["slot","end"],["color","medium","fill","solid","size","small",1,"button-new",3,"click"],["color","primary","size","small",1,"button-new",3,"fill","click"],["slot","end","name","add-circle-outline"],["color","light",1,"ion-padding",3,"fullscreen"],[4,"ngIf"],["class","ion-padding-landscape",4,"ngIf"],[1,"display-flex","z-index-999","background-color-light-blue","sticky","padding-08","border-radius-1","ion-padding-landscape",3,"ngClass"],[1,"margin-top-04","margin-left-03","margin-right-05"],["datetime","datetime-new-deposit",3,"ngClass"],["name","calendar-outline",1,"margin-top-04","margin-left-02"],[3,"keepContentsMounted"],["show-clear-button","always","placeholder","Buscar Cliente",1,"ion-padding-landscape",3,"ionInput"],["class","ion-text-center ion-padding-landscape",4,"ngIf"],[1,"ion-padding-landscape"],["class","background-color-light-blue sticky",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],["presentation","date","id","datetime-new-deposit",3,"ngModel","ngModelChange","ionChange"],[1,"ion-text-center","ion-padding-landscape"],[1,"background-color-light-blue","sticky"],["size","4",1,"ion-text-center","margin-bottom-05","margin-top-05"],["size","8",1,"ion-text-center","margin-bottom-05","margin-top-05"],[1,"padding-0"],["size","4",1,"padding-0"],[3,"ngClass"],[4,"ngFor","ngForOf"],["size","12",1,"transaction-body","background-color-white","border-bottom"],["class","font-size-small","lines","none",4,"ngIf"],["lines","none",4,"ngIf"],["lines","none",1,"font-size-small"],["size","4",1,"adjust-txt","ion-text-justify","ellipsis-txt"],["size","8"],[1,"ion-text-end"],["size","4"],["type","number","placeholder","$ 0.000",1,"width-100","padding-left-1","height-2","margin-top--1",3,"ngClass","ngModel","keyup","ngModelChange"],["lines","none"],[1,"margin-bottom-0"],[1,"display-flex","margin-bottom-05","padding-top-05"],["size","12",1,"display-flex","padding-top-05"],[1,"margin-left-1"],["type","number",1,"input-trx-price","margin-bottom-05","margin-top--1","padding-left-1","height-2",3,"ngClass","placeholder","ngModel","keyup","ngModelChange"],["size","12",1,"display-flex","padding-top-05","height-2"],[2,"width","80%",3,"animated"],[2,"width","80%","height","40rem",3,"animated"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t._UZ(3,"ion-back-button",3),t.TgZ(4,"h6",4),t._uU(5,"Registrar Abonos"),t.qZA()(),t.TgZ(6,"ion-buttons",5)(7,"ion-button",6),t.NdJ("click",function(){return o.goToDepositList()}),t._uU(8," Cancelar "),t.qZA(),t.TgZ(9,"ion-button",7),t.NdJ("click",function(){return o.presentAlertConfirm()}),t._uU(10," Aceptar "),t._UZ(11,"ion-icon",8),t.qZA()()()(),t.TgZ(12,"ion-content",9),t.YNc(13,q,13,10,"ng-container",10)(14,Q,10,3,"ion-list",11),t.qZA()),2&e&&(t.Q6J("translucent",!0),t.xp6(9),t.Q6J("fill",0==o.getTransactionPending()?"outline":"solid"),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",o.loading))},dependencies:[x.mk,x.sg,x.O5,h.Fj,h.wV,h.JJ,h.On,r.oU,r.YG,r.Sm,r.wI,r.W2,r.x4,r.Mj,r.jY,r.Gu,r.gu,r.Ie,r.Q$,r.q_,r.Nd,r.VI,r.CK,r.sr,r.ki,r.QI,r.j9,r.cs,S.DA],styles:['@charset "UTF-8";.ion-backdrop-background[_ngcontent-%COMP%]{background-color:#060e6a!important}.z-index-999[_ngcontent-%COMP%]{z-index:999999;position:relative}.font-size-small[_ngcontent-%COMP%]{font-size:90%}.transaction-body[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%], .transaction-body[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0;margin:0}.transaction-body[_ngcontent-%COMP%]   .adjust-txt[_ngcontent-%COMP%]{margin-top:.4rem;padding-left:.5rem}ion-datetime-button[_ngcontent-%COMP%]{z-index:100}.focused-layer[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_focusAnimation;animation-duration:1s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes _ngcontent-%COMP%_focusAnimation{0%{transform:scale(1);opacity:1;box-shadow:0 0 10px #fffc}50%{transform:scale(1.06);opacity:.8;box-shadow:0 0 20px #fff9}to{transform:scale(1);opacity:1;box-shadow:0 0 10px #fffc}}.fullscreen-animation-close[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;z-index:9999;animation-name:_ngcontent-%COMP%_expandAndCenter;animation-duration:.5s;animation-timing-function:ease-out}@keyframes _ngcontent-%COMP%_expandAndCenter{0%{transform:scale(1)}90%{transform:scale(1);height:0rem;transition:transform .5s,opacity .5s}}'],data:{animation:[y.$t,y.sq]}})}return i})()}];let L=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[Z.Bz.forChild(I),Z.Bz]})}return i})();var N=l(8434);let Y=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#n=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[x.ez,h.u5,N.K,r.Pc,L]})}return i})()}}]);