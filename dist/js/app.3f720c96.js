(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0bbf":function(t,e,a){},1337:function(t,e,a){"use strict";var s=a("9709"),i=a.n(s);i.a},4582:function(t,e,a){"use strict";var s=a("94d9"),i=a.n(s);i.a},"4efe":function(t,e,a){"use strict";var s=a("fe9a"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),[a("v-card",{attrs:{height:"50"}},[a("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:"",color:"purple darken-4"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" © "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("M.A.Bunza")])])],1)],1)]],2)},r=[],o={created:function(){this.$store.dispatch("tyrAutoLogging")}},n=o,l=a("2877"),c=a("6544"),u=a.n(c),d=a("b0af"),p=a("62ad"),m=a("553a"),v=Object(l["a"])(n,i,r,!1,null,null,null),h=v.exports;u()(v,{VCard:d["a"],VCol:p["a"],VFooter:m["a"]});var f=a("8c4f"),g=(a("8aa5"),a("ac1f"),a("5319"),a("2f62")),C=a("bc3a"),b=a.n(C),y=b.a.create({baseURL:"https://www.googleapis.com/identitytoolkit/v3/relyingparty"}),_=y;s["a"].use(g["a"]);var w=new g["a"].Store({state:{idToken:null,userId:null,user:null,articles:null},getters:{user:function(t){return t.user},isAuthenticated:function(t){return null!==t.idToken},articles:function(t){return t.articles}},mutations:{authUser:function(t,e){t.idToken=e.token,t.userId=e.userId},storeUser:function(t,e){t.user=e},clearAuthData:function(t){t.idToken=null,t.userId=null,t.user=null},fetchArticles:function(t,e){t.articles=e}},actions:{setLogoutTimer:function(t,e){var a=t.dispatch;setTimeout((function(){a("signout")}),1e3*e)},signup:function(t,e){var a=t.commit,s=t.dispatch;_.post("/signupNewUser?key=AIzaSyAizwKKXANWZp4Exv-LUkDr4ylAldB2Kvo",{email:e.email,password:e.password,returnSecureToken:!0}).then((function(t){console.log(t),a("authUser",{token:t.data.idToken,userId:t.data.localId}),s("storeUser",e),ge.replace("/signin")})).catch((function(t){console.log(t)}))},signin:function(t,e){var a=t.commit,s=t.dispatch;_.post("/verifyPassword?key=AIzaSyAizwKKXANWZp4Exv-LUkDr4ylAldB2Kvo",{email:e.email,password:e.password,returnSecureToken:!0}).then((function(t){console.log(t);var i=new Date,r=new Date(i.getTime()+1e3*t.data.expiresIn);localStorage.setItem("token",t.data.idToken),localStorage.setItem("userId",t.data.localId),localStorage.setItem("expirationDate",r),localStorage.setItem("userEmail",e.email),a("authUser",{token:t.data.idToken,userId:t.data.localId}),ge.replace("/homepage"),s("setLogoutTimer",t.data.expiresIn)})).catch((function(t){console.log(t)}))},tyrAutoLogging:function(t){var e=t.commit,a=localStorage.getItem("token");if(a){var s=localStorage.getItem("expirationDate"),i=new Date;if(!(i>=s)){var r=localStorage.getItem("userId");e("authUser",{token:a,userId:r})}}},signout:function(t){var e=t.commit;e("clearAuthData"),localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userEmail"),ge.replace("/signin")},storeUser:function(t,e){t.commit;var a=t.state;a.idToken&&b.a.post("https://myvuejs-blog.firebaseio.com/users.json?auth="+a.idToken,e).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},fetchUser:function(t){var e=t.commit,a=t.state;a.idToken&&b.a.get("https://myvuejs-blog.firebaseio.com/users.json?auth="+a.idToken).then((function(t){console.log(t);var a=t.data,s={},i=localStorage.getItem("userEmail");for(var r in a){var o=a[r];i==o.email&&(s=o)}console.log(s),e("storeUser",s)})).catch((function(t){console.log(t)}))},storeArticle:function(t,e){var a=t.state;a.idToken&&b.a.post("https://myvuejs-blog.firebaseio.com/posts.json?auth="+a.idToken,e).then((function(t){console.log(t),location.reload()})).catch((function(t){console.log(t)}))},fetchArticles:function(t){var e=t.state,a=t.commit;e.idToken&&b.a.get("https://myvuejs-blog.firebaseio.com/posts.json?auth="+e.idToken).then((function(t){console.log(t);var e=t.data,s=[];for(var i in e){var r=e[i];r.id=i,s.push(r)}console.log(s),a("fetchArticles",s)})).catch((function(t){console.log(t)}))},updateArticle:function(t,e){var a=t.state;if(a.idToken){var s=e.id;console.log(e),b.a.put("https://myvuejs-blog.firebaseio.com/posts/".concat(s,".json")+"?auth="+a.idToken,e).then((function(t){console.log(t),location.reload()})).catch((function(t){console.log(t)}))}},deleteArticle:function(t,e){var a=t.state;if(a.idToken){var s=e;b.a.delete("https://myvuejs-blog.firebaseio.com/posts/".concat(s,".json")+"?auth="+a.idToken).then((function(t){location.reload()})).catch((function(t){console.log(t)}))}}}}),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("app-header"),a("hr"),a("app-contents")],1)},T=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"container mt-3"},[a("nav",{},[a("span",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[t._v("MyVueJs Blog")])],1),a("ul",{staticClass:"float-right"},[a("li",[a("router-link",{attrs:{to:"/signin"}},[t._v("Sign in")])],1),a("li",{staticClass:"create-account"},[a("router-link",{attrs:{to:"/signup"}},[t._v("Create Account")])],1)])])])},$=[],S={computed:{auth:function(){return this.$store.getters.isAuthenticated}}},I=S,A=(a("a6fc"),Object(l["a"])(I,x,$,!1,null,"42d30fad",null)),D=A.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[[a("app-dashboard")]],2)},j=[],F=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 "},[a("div",{staticClass:"container "},[t._m(0),a("div",{staticClass:"row bg-white"},[a("div",{staticClass:"container"},[t._m(1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[[a("v-card",{staticClass:"mx-auto",attrs:{color:"","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("Create a todo app using VueJs")]),a("v-rating",{attrs:{size:"20","background-color":"blue lighten-3",color:"blue"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well. ")]),a("hr"),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Evan You")])],1),a("v-icon",{},[t._v("mdi-heart")]),a("span",{staticClass:"subheading"},[t._v("56")]),a("span",{staticClass:"mx-2"},[t._v("·")]),a("v-icon",{},[t._v("mdi-share-variant")]),a("span",{staticClass:"subheading"},[t._v("4")])],1)],1)],1)]],2),a("div",{staticClass:"col-md"},[[a("v-card",{staticClass:"mx-auto",attrs:{color:"","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("How use Bootstrap Efficiently")]),a("v-rating",{attrs:{size:"20","background-color":"blue lighten-3",color:"blue"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well. ")]),a("hr"),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Mark John")])],1),a("v-icon",{},[t._v("mdi-heart")]),a("span",{staticClass:"subheading"},[t._v("56")]),a("span",{staticClass:"mx-2"},[t._v("·")]),a("v-icon",{},[t._v("mdi-share-variant")]),a("span",{staticClass:"subheading"},[t._v("4")])],1)],1)],1)]],2),a("div",{staticClass:"col-md"},[[a("v-card",{staticClass:"mx-auto",attrs:{color:"","max-width":"400"}},[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[t._v("Learn PHP CRUD App")]),a("v-rating",{attrs:{size:"20","background-color":"blue lighten-3",color:"blue"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),[a("div",{})]],2),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well. ")]),a("hr"),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Jason Startham")])],1),a("v-icon",{},[t._v("mdi-heart")]),a("span",{staticClass:"subheading"},[t._v("56")]),a("span",{staticClass:"mx-2"},[t._v("·")]),a("v-icon",{},[t._v("mdi-share-variant")]),a("span",{staticClass:"subheading"},[t._v("4")])],1)],1)],1)]],2)])])])])])])}),E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md"},[s("div",{staticClass:"jumbotron"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md"},[s("h1",{staticClass:"display-5"},[t._v("Welcome to myBlog!")]),s("p",{staticClass:"lead "},[t._v(" Please feel to signin or signup "),s("span",{staticClass:"text-muted"},[t._v("(if you are new here)")]),t._v(" to post/read amazing articles or get inspiration from the community of like minded. ")]),s("hr",{staticClass:"my-4"})]),s("div",{staticClass:"col-md"},[s("img",{staticClass:"w-100",attrs:{src:a("78e2"),alt:"img"}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[a("p",{staticClass:"lead purple darken-2 text-center"},[t._v(" Articles from the Community ")])])])}],P={data:function(){return{rating:3}}},O=P,L=(a("1337"),a("99d9")),H=a("132d"),B=a("adda"),U=a("da13"),N=a("8270"),z=a("5d23"),W=a("1d4d"),M=Object(l["a"])(O,F,E,!1,null,"8ac49374",null),R=M.exports;u()(M,{VCard:d["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VIcon:H["a"],VImg:B["a"],VListItem:U["a"],VListItemAvatar:N["a"],VListItemContent:z["a"],VListItemTitle:z["b"],VRating:W["a"]});var J={components:{"app-dashboard":R},data:function(){return{contentStatus:!1}},computed:{currentPage:function(){return this.$route.name}}},K=J,X=Object(l["a"])(K,V,j,!1,null,null,null),Y=X.exports,Z={name:"Home",components:{"app-header":D,"app-contents":Y}},q=Z,G=Object(l["a"])(q,k,T,!1,null,null,null),Q=G.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signup"},[a("app-header"),a("hr"),a("app-signup")],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("form",[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.regForm.name,expression:"regForm.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.regForm.name},on:{input:function(e){e.target.composing||t.$set(t.regForm,"name",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.regForm.email,expression:"regForm.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.regForm.email},on:{input:function(e){e.target.composing||t.$set(t.regForm,"email",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"profession"}},[t._v("Profession")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.regForm.profession,expression:"regForm.profession"}],staticClass:"form-control",attrs:{type:"text",id:"profession"},domProps:{value:t.regForm.profession},on:{input:function(e){e.target.composing||t.$set(t.regForm,"profession",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.regForm.password,expression:"regForm.password"}],staticClass:"form-control",attrs:{type:"password",id:"password"},domProps:{value:t.regForm.password},on:{input:function(e){e.target.composing||t.$set(t.regForm,"password",e.target.value)}}})])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.onRegister(e)}}},[t._v("Register")])])])])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"password"}},[t._v("Password "),a("small",[t._v("(must be greater than 6 chars)")])])}],it={data:function(){return{regForm:{name:null,email:null,profession:null,password:null}}},methods:{onRegister:function(){this.$store.dispatch("signup",this.regForm)}}},rt=it,ot=Object(l["a"])(rt,at,st,!1,null,null,null),nt=ot.exports,lt={name:"Signin",components:{"app-header":D,"app-signup":nt}},ct=lt,ut=Object(l["a"])(ct,tt,et,!1,null,null,null),dt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin"},[a("app-header"),a("hr"),a("app-signin")],1)},mt=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("form",[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.loginForm.email},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"email",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"inputPassword4"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword4"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}})])]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("Sign in")])])])])])},ht=[],ft={data:function(){return{loginForm:{email:null,password:null},users:[]}},created:function(){},methods:{signin:function(){this.$store.dispatch("signin",{email:this.loginForm.email,password:this.loginForm.password})}}},gt=ft,Ct=Object(l["a"])(gt,vt,ht,!1,null,null,null),bt=Ct.exports,yt={name:"Signin",components:{"app-header":D,"app-signin":bt}},_t=yt,wt=Object(l["a"])(_t,pt,mt,!1,null,null,null),kt=wt.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("app-header"),a("hr"),a("app-contents")],1)},xt=[],$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"container my-3"},[a("nav",{},[a("span",{staticClass:"logo"},[a("router-link",{attrs:{to:"/homepage"}},[t._v("MyVueJs Blog")])],1),a("ul",{staticClass:"float-right"},[a("li",[a("button",{staticClass:"btn btn-default",on:{click:t.signout}},[t._v("Sign out")])]),a("li",{})])])])},St=[],It={methods:{signout:function(){this.$store.dispatch("signout")}}},At=It,Dt=(a("4efe"),Object(l["a"])(At,$t,St,!1,null,"44e55df0",null)),Vt=Dt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[[a("app-dashboard")]],2)},Ft=[],Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("app-sidebar")],1),a("div",{staticClass:"col-md-9 "},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md"},[a("div",{staticClass:"jumbotron mt-n3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("form",[a("v-col",{attrs:{cols:"12 py-0",md:"12"}},[a("v-text-field",{attrs:{label:"Title of the Article"},model:{value:t.articleData.title,callback:function(e){t.$set(t.articleData,"title",e)},expression:"articleData.title"}})],1),a("v-col",{attrs:{cols:"12 py-0",md:"12"}},[a("v-textarea",{attrs:{label:"Article",counter:"500"},model:{value:t.articleData.article,callback:function(e){t.$set(t.articleData,"article",e)},expression:"articleData.article"}})],1),a("v-col",{attrs:{cols:"12 py-0",md:"12"}},[t.editStatus?a("v-btn",{staticClass:"ma-2",attrs:{type:"submit",outlined:""},on:{click:function(e){return e.preventDefault(),t.updateArticle(e)}}},[t._v("Update")]):a("v-btn",{staticClass:"ma-2",attrs:{type:"submit",outlined:""},on:{click:function(e){return e.preventDefault(),t.postArticle(e)}}},[t._v("Post")])],1)],1)])])])])]),a("div",{staticClass:"row"},t._l(t.posts,(function(e,s){return a("div",{key:s,staticClass:"col-md-4 "},[e.author==t.user.name?[a("v-card",{staticClass:"mx-auto",attrs:{color:"",width:"100%"}},[a("v-card-title",[a("p",{staticClass:"title font-weight-light"},[t._v(t._s(e.title)+" ")]),a("v-rating",{attrs:{size:"18","background-color":"blue lighten-3",color:"blue"},model:{value:e.rating,callback:function(a){t.$set(e,"rating",a)},expression:"post.rating"}})],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(e.article)+" "),a("br"),a("br"),a("a",{staticClass:"btn",on:{click:function(e){return t.editArticle(s)}}},[t._v("Edit")]),a("a",{staticClass:"btn",on:{click:function(a){return t.deleteArticle(e.id)}}},[t._v("Delete")])]),a("hr"),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.author))])],1),a("v-icon",{},[t._v("mdi-heart")]),a("span",{staticClass:"subheading"},[t._v("56")]),a("span",{staticClass:"mx-2"},[t._v("·")]),a("v-icon",{},[t._v("mdi-share-variant")]),a("span",{staticClass:"subheading"},[t._v("4")])],1)],1)],1)]:t._e()],2)})),0)])])])},Pt=[],Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("p",[t._v("Welcome "+t._s(t.user.name)+"!")])]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[a("router-link",{attrs:{to:"/homepage"}},[t._v("Home")])],1),a("li",{staticClass:"list-group-item"},[a("router-link",{attrs:{to:"/all-articles"}},[t._v("All Articles")])],1)])])},Lt=[],Ht={computed:{user:function(){return!!this.$store.getters.user&&this.$store.getters.user}},created:function(){this.$store.dispatch("fetchUser")}},Bt=Ht,Ut=(a("c875"),Object(l["a"])(Bt,Ot,Lt,!1,null,null,null)),Nt=Ut.exports,zt={components:{"app-sidebar":Nt},data:function(){return{updateId:null,editStatus:!1,articleData:{title:null,article:null,rating:0}}},computed:{user:function(){return!!this.$store.getters.user&&this.$store.getters.user},posts:function(){return!!this.$store.getters.articles&&this.$store.getters.articles}},created:function(){this.$store.dispatch("fetchUser"),this.$store.dispatch("fetchArticles")},methods:{postArticle:function(){this.articleData.userId=this.user.id,this.articleData.author=this.user.name,this.$store.dispatch("storeArticle",this.articleData),this.title=null,this.article=null},editArticle:function(t){this.editStatus=!0,this.articleData=this.posts[t]},updateArticle:function(){this.articleData.userId=this.user.id,this.articleData.author=this.user.name,this.$store.dispatch("updateArticle",this.articleData)},deleteArticle:function(t){this.$store.dispatch("deleteArticle",t)}}},Wt=zt,Mt=(a("ca3d"),a("8336")),Rt=a("8654"),Jt=a("a844"),Kt=Object(l["a"])(Wt,Et,Pt,!1,null,"3951542c",null),Xt=Kt.exports;u()(Kt,{VBtn:Mt["a"],VCard:d["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VCol:p["a"],VIcon:H["a"],VImg:B["a"],VListItem:U["a"],VListItemAvatar:N["a"],VListItemContent:z["a"],VListItemTitle:z["b"],VRating:W["a"],VTextField:Rt["a"],VTextarea:Jt["a"]});var Yt={components:{"app-dashboard":Xt}},Zt=Yt,qt=Object(l["a"])(Zt,jt,Ft,!1,null,null,null),Gt=qt.exports,Qt={name:"Home",components:{"app-header":Vt,"app-contents":Gt}},te=Qt,ee=Object(l["a"])(te,Tt,xt,!1,null,null,null),ae=ee.exports,se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("app-header"),a("hr"),a("app-contents")],1)},ie=[],re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("app-sidebar")],1),a("div",{staticClass:"col-md-9 "},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.posts,(function(e,s){return a("div",{key:s,staticClass:"col-md"},[[a("v-card",{staticClass:"mx-auto",attrs:{color:"","max-width":"300"}},[a("v-card-title",[a("p",{staticClass:"title font-weight-light"},[t._v(t._s(e.title))]),a("v-rating",{staticClass:"p-0",attrs:{size:"18","background-color":"blue lighten-3",color:"blue"},model:{value:e.rating,callback:function(a){t.$set(e,"rating",a)},expression:"post.rating"}})],1),a("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(e.article)+" "),a("br"),a("br")]),a("hr"),a("v-card-actions",[a("v-list-item",{staticClass:"grow"},[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.author))])],1),a("v-icon",{},[t._v("mdi-heart")]),a("span",{staticClass:"subheading"},[t._v("56")]),a("span",{staticClass:"mx-2"},[t._v("·")]),a("v-icon",{},[t._v("mdi-share-variant")]),a("span",{staticClass:"subheading"},[t._v("4")])],1)],1)],1)]],2)})),0)])])])},oe=[],ne={components:{"app-sidebar":Nt},data:function(){return{}},computed:{user:function(){return!!this.$store.getters.user&&this.$store.getters.user},posts:function(){return!!this.$store.getters.articles&&this.$store.getters.articles}},created:function(){this.$store.dispatch("fetchUser"),this.$store.dispatch("fetchArticles")},methods:{}},le=ne,ce=(a("4582"),Object(l["a"])(le,re,oe,!1,null,"5cb9c9f6",null)),ue=ce.exports;u()(ce,{VCard:d["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VIcon:H["a"],VImg:B["a"],VListItem:U["a"],VListItemAvatar:N["a"],VListItemContent:z["a"],VListItemTitle:z["b"],VRating:W["a"]});var de={name:"Home",components:{"app-header":Vt,"app-contents":ue}},pe=de,me=Object(l["a"])(pe,se,ie,!1,null,null,null),ve=me.exports;s["a"].use(f["a"]);var he=[{path:"/",name:"Home",component:Q},{path:"/signin",name:"Signin",component:kt},{path:"/signup",name:"Signup",component:dt},{path:"/homepage",name:"Homepage",component:ae},{path:"/all-articles",name:"Articles",component:ve}],fe=new f["a"]({mode:"hash",base:"/",routes:he}),ge=fe,Ce=a("f309"),be=a("fcf4");s["a"].use(Ce["a"]);var ye=new Ce["a"]({theme:{themes:{light:{primary:be["a"].red.darken1,secondary:be["a"].red.lighten4,accent:be["a"].indigo.base}}}});s["a"].config.productionTip=!1,new s["a"]({router:ge,vuetify:ye,store:w,render:function(t){return t(h)}}).$mount("#app")},6413:function(t,e,a){},"78e2":function(t,e,a){t.exports=a.p+"img/img1.354e72c1.svg"},"94d9":function(t,e,a){},9709:function(t,e,a){},"9ca9":function(t,e,a){},a6fc:function(t,e,a){"use strict";var s=a("6413"),i=a.n(s);i.a},c875:function(t,e,a){"use strict";var s=a("0bbf"),i=a.n(s);i.a},ca3d:function(t,e,a){"use strict";var s=a("9ca9"),i=a.n(s);i.a},fe9a:function(t,e,a){}});
//# sourceMappingURL=app.3f720c96.js.map