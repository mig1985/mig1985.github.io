(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1f2fd353"],{"03ed":function(e,t,i){"use strict";var a=i("c4f4"),r=i.n(a);r.a},"8b24":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("portfolio")],1)},r=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"categories"},e._l(e.categories,function(t){return i("span",{key:t.index,staticClass:"categorie text-grey-7 text-weight-light",class:{active:t.niveau1===e.categorieActive.niveau1},on:{click:function(i){e.categorieActive=t,e.sousCategorieActive=""}}},[e._v(e._s(t.niveau1))])}),0),i("div",{staticClass:"categories"},e._l(e.categorieActive.niveau2,function(t){return i("span",{key:t.index,staticClass:"sous-categorie text-grey-8 text-weight-light",class:{active:t===e.sousCategorieActive},on:{click:function(i){e.sousCategorieActive=t}}},[e._v(e._s(t))])}),0),i("transition-group",{staticClass:"gallery",attrs:{name:"gallerie",tag:"div"}},e._l(e.vignettes,function(t){return i("div",{key:t.fichier,staticClass:"gallery-container",class:{long:t.portrait},on:{click:function(i){return e.afficherDetails(t)}}},[i("q-img",{staticClass:"vignette",attrs:{src:"statics/img/"+t.fichier,contain:""}})],1)}),0),i("q-dialog",{attrs:{maximized:""},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}},[i("q-layout",{staticClass:"bg-white",attrs:{view:"hhh LpR fFr"}},[i("q-header",{staticClass:"bg-transparent text-grey-7"},[i("q-toolbar",[i("q-space"),i("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(t){e.detailsMenu=!e.detailsMenu}}}),i("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"close"},on:{click:function(t){e.details=!1}}})],1)],1),i("q-drawer",{attrs:{side:"right"},model:{value:e.detailsMenu,callback:function(t){e.detailsMenu=t},expression:"detailsMenu"}},[i("q-card",{staticClass:"text-grey-8 q-ma-md q-pa-sm"},[i("div",{staticClass:"text-h5 q-mb-md"},[e._v(e._s(e.vignetteActive.categorie[0]))]),i("div",{staticClass:"text-body1",staticStyle:{height:"50vh"}},[e._v(e._s(e.vignetteActive.description))]),i("q-separator"),i("q-list",[i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"ion-download"}})],1),i("q-item-section",[i("q-item-label",[e._v("Télécharger")])],1)],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"open_in_new"}})],1),i("q-item-section",[i("q-item-label",[e._v("Visiter")])],1)],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"share"}})],1),i("q-item-section",[i("q-item-label",[e._v("Partager")])],1)],1)],1)],1)],1),i("q-page-container",[i("q-img",{staticStyle:{"max-height":"90vh"},attrs:{src:"statics/img/"+e.vignetteActive.fichier,contain:""}})],1)],1)],1)],1)},s=[],n=(i("6762"),i("2fdb"),i("fb32")),c=i("9ec1"),l={name:"Portfolio",data:function(){return{gallerie:n,categories:c,categorieActive:{niveau1:"Tout"},sousCategorieActive:"",vignetteActive:{fichier:"",description:"",categorie:[]},details:!1,detailsMenu:!0}},computed:{vignettes:function(){var e=this,t=[];return"Tout"===this.categorieActive.niveau1?(console.log("gallerie chargé"),t=this.gallerie):(console.log("Filtre 1"),t=this.gallerie.filter(function(t){return t.categorie[0]===e.categorieActive.niveau1})),""!==this.sousCategorieActive&&(console.log("Filtre 2"),t=t.filter(function(t){return t.categorie[1].includes(e.sousCategorieActive)})),t}},methods:{afficherDetails:function(e){this.vignetteActive=e,this.details=!0,this.detailsMenu=!0}}},u=l,g=(i("03ed"),i("2877")),d=Object(g["a"])(u,o,s,!1,null,"573c6533",null),p=d.exports,v={name:"PageHome",components:{portfolio:p}},h=v,f=Object(g["a"])(h,a,r,!1,null,null,null);t["default"]=f.exports},"9ec1":function(e){e.exports=[{niveau1:"Tout"},{niveau1:"Photographie",niveau2:["Personnes","Portrait","Mariage","Edifice"]},{niveau1:"Visualisation",niveau2:["Data","Cartes"]},{niveau1:"Programmation",niveau2:["Sites web","Applications","Jeux videos"]},{niveau1:"Enseignement"}]},c4f4:function(e,t,i){},fb32:function(e){e.exports=[{fichier:"p1.jpg",portrait:!0,description:"Vendeuse de noix qui attend des clients.",categorie:["Photographie",["Personnes"]]},{fichier:"p2.jpg",description:"Jeune vendeuse au marché.",categorie:["Photographie",["Personnes"]]},{fichier:"p3.jpg",description:"Vendeuse qui sert du haricot.",categorie:["Photographie",["Personnes"]]},{fichier:"DSC_0830x.jpg",portrait:!0,description:"Jeune fille au parc.",categorie:["Photographie",["Portrait"]]},{fichier:"DSC_0864x.jpg",portrait:!0,description:"Un homme et une jeune fille en train de rire aux éclats.",categorie:["Photographie",["Portrait"]]},{fichier:"PalaisSport.jpg",description:"Le palais des sports de Yaoundé à la sortie de la remise des palmes académiques le 16 octobre 2017.",categorie:["Photographie",["Edifice"]]},{fichier:"PortraitDamePoumzie.jpg",description:"Une dame à Poumzie.",categorie:["Photographie",["Portrait"]]},{fichier:"PortraitDamePoumzie(6).jpg",description:"Une dame à Poumzie.",portrait:!0,categorie:["Photographie",["Portrait"]]},{fichier:"PortraitDamePoumzie(7).jpg",description:"Une dame à Poumzie.",portrait:!0,categorie:["Photographie",["Portrait"]]}]}}]);