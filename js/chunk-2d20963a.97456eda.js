(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20963a"],{a99e:function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{padding:"30px"}},[i("div",{staticClass:"row d-flex justify-content-center"},[i("div",{staticClass:"list-group col-8"},[t._l(t.cart,(function(e){return i("a",{key:e.id,staticClass:"list-group-item list-group-item-action d-flex justify-content-between align-items-center",attrs:{href:"#"}},[i("img",{attrs:{src:e.imageUrl,alt:"",height:"60",width:"60"}}),i("p",{staticClass:"h4"},[t._v(t._s(e.name))]),i("div",{staticClass:"row"},[i("div",{staticClass:"mr-2"},[i("p",[t._v("Unique Price")]),i("p",[t._v("$"+t._s(e.price))])]),i("div",{staticClass:"mr-2"},[i("p",[t._v("Total Price")]),i("p",[t._v("$"+t._s(e.price*e.quantity))])]),i("div",[i("p",[t._v("Quantity")]),i("p",[t._v(t._s(e.quantity))])])])])})),i("div",{staticClass:"list-group-item list-group-item-action d-flex justify-content-between align-items-center"},[i("p",{staticClass:"h4"},[t._v("Total")]),i("div",[i("p",[t._v("Total Price")]),i("p",[t._v("$"+t._s(t.totalPrice))])])]),i("button",{staticClass:"btn btn-primary btn-lg btn-block mt-4",attrs:{type:"button"},on:{click:function(e){return t.checkout()}}},[t._v("Checkout")])],2)])])},s=[],a=i("2f62"),r={name:"Cart",data(){return{totalPrice:0}},computed:{...Object(a["c"])("product",["cart"]),...Object(a["c"])("account",["user"])},methods:{...Object(a["b"])("product",["removeCart"]),calcPrice(){this.cart.forEach(t=>{this.totalPrice+=t.price*t.quantity})},checkout(){const t=this;setTimeout(()=>{t.removeCart(),alert("Purchase successful!"),t.$router.push("/")},2e3)}},mounted(){this.calcPrice()}},n=r,l=i("2877"),o=Object(l["a"])(n,c,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d20963a.97456eda.js.map