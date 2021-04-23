(this["webpackJsonptest-job-auth"]=this["webpackJsonptest-job-auth"]||[]).push([[0],{46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),i=(n(46),n(11)),s=n(12),u=n(14),l=n(13),j=n(1),d=function(e){return Object(j.jsx)("div",{className:"Layout",children:Object(j.jsx)("main",{children:e.children})})},h=n(3),p=(n(48),function(e){var t=["Button","".concat(e.type)];return Object(j.jsx)("button",{onClick:e.onClick,disabled:e.disabled,className:t.join(" "),children:e.children})});n(49);function b(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&a&&n}var O=function(e){var t=e.type||"text",n=["Input"],a="".concat(t,"-").concat(Math.random());return b(e)&&n.push("invalid"),Object(j.jsxs)("div",{className:n.join("  "),children:[Object(j.jsx)("label",{htmlFor:a,children:e.label}),Object(j.jsx)("input",{type:t,id:a,value:e.value,onChange:e.onChange}),b(e)?Object(j.jsx)("span",{children:e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}):null]})},m=n(38),f=n.n(m),v=n(10),g=n(16),x=n.n(g),C=n(19),y=n(20),k=n.n(y),w="AUTH_SUCCESS",E="AUTH_LOGOUT",I="FETCH_COMPANIES_LIST",P="FETCH_HOUSES_LIST",S="CHANGE_COMPANY_ITEM",_="GET_PAGES_INFO",N="CHANGE_CURRENT_PAGE",T="REMOVE_CURRENT_HOUSES";function A(e){return function(t){setTimeout((function(){t(H())}),e)}}function H(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:E}}function D(e){return{type:w,token:e}}var M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=function(){e.props.auth(e.state.formControls.email.value,e.state.formControls.password.value)},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(h.a)({},e.state.formControls),r=Object(h.a)({},e.state.formControls[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validateControl(r.value,r.validation),a[n]=r;var c=!0;Object.keys(a).forEach((function(e){c=a[e].valid&&c})),e.setState({formControls:a,isFormValid:c})},e}return Object(s.a)(n,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=f.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return Object(j.jsx)(O,{type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,shouldValidate:!!a.validation,errorMessage:a.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}},t+n)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"Auth",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("form",{onSubmit:this.submitHandler,className:"AuthForm",children:[this.renderInputs(),Object(j.jsx)(p,{type:"success",disabled:!this.state.isFormValid,onClick:this.loginHandler,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}}]),n}(r.a.Component);var L=Object(v.b)(null,(function(e){return{auth:function(t,n){return e(function(e,t){return function(){var n=Object(C.a)(x.a.mark((function n(a){var r,c,o,i;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={username:e,password:t},n.next=4,k.a.post("http://test-alpha.reestrdoma.ru/api/login/",r);case 4:c=n.sent,o=c.data.data,console.log(o),i=new Date(o.expiresIn),localStorage.setItem("token",o.token.access),localStorage.setItem("expirationDate",i),a(D(o.token.access)),a(A(new Date(o.expiresIn).getTime()-(new Date).getTime()));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(M),F=n(4),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(j.jsx)(F.a,{to:"/"})}}]),n}(r.a.Component);var V=Object(v.b)(null,(function(e){return{logout:function(){return e(H())}}}))(U),R=(n(74),function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(j.jsxs)("div",{className:"Select",children:[Object(j.jsx)("label",{htmlFor:t,children:e.label}),Object(j.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(j.jsx)("option",{value:e.value,children:e.text},e.value+t)}))})]})});function G(e){return function(){var t=Object(C.a)(x.a.mark((function t(n,a){var r,c,o,i,s,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(q()),e!==a().main.currentCompany&&B(1,n,a),r=a().main.paginationInfo,c=a().main.companies.find((function(t){return t.name===e})),n(X(e)),o="http://test-alpha.reestrdoma.ru/api/reestrdoma/company/houses/".concat(c.id,"/?page=").concat(r.currentPage,"&perPage=").concat(r.elementsPerPage),t.next=8,k.a.get(o,{headers:{Authorization:"Bearer ".concat(a().auth.token)}});case 8:i=t.sent,s=i.data,u=Object(h.a)(Object(h.a)({},r),s.links),n({type:_,paginationInfo:u}),n((l=s.data,{type:P,houses:l}));case 13:case"end":return t.stop()}var l}),t)})));return function(e,n){return t.apply(this,arguments)}}()}function B(e,t,n){var a=Object(h.a)({},n().main.paginationInfo);a.currentPage=e,t(function(e){return{type:N,paginationInfo:e}}(a))}function X(e){return{type:S,currentCompany:e}}function q(){return{type:T}}n(75);var z=function(e){return Object(j.jsx)("div",{style:{textAlign:"center"},children:Object(j.jsxs)("div",{className:"Loader",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})})},J=function(e){var t=e.houses.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{style:{textAlign:"left"},children:e.address}),Object(j.jsx)("td",{children:e.reestrFlatCount}),Object(j.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()})]},t)}));return Object(j.jsx)("div",{className:"Table",children:Object(j.jsx)("table",{children:Object(j.jsxs)("tbody",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"id"}),Object(j.jsx)("th",{children:"\u0410\u0434\u0440\u0435\u0441"}),Object(j.jsx)("th",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0432\u0430\u0440\u0442\u0438\u0440"}),Object(j.jsx)("th",{children:"\u0414\u0430\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f"})]}),t]})})})},Y=n(41),K=(n(76),function(e){var t=e.info.currentPage,n=Math.ceil(e.info.objectsCount/e.info.elementsPerPage),a=n,r=[t-2,t-1,t,t+1,t+2].filter((function(e){return e>1&&e<n})),c=[1].concat(Object(Y.a)(r),[a]).map((function(t,n){return Object(j.jsx)("span",{onClick:e.onChangePage,className:e.info.currentPage===t?"active":"",children:t},n)}));return 1===n&&(c=Object(j.jsx)("span",{onClick:e.onChangePage,className:"active",children:"1"})),Object(j.jsx)("div",{className:"Pagination",children:c})}),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).selectChangeHandler=function(t){e.props.getHouses(t.target.value)},e.changePageHandler=function(t){e.props.changePagPage(Number(t.target.textContent))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getCompanies(this.props.token)}},{key:"render",value:function(){var e=Object(j.jsx)(z,{});return this.props.houses&&(e=this.props.houses.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(J,{houses:this.props.houses}),Object(j.jsx)(K,{info:this.props.paginationInfo,onChangePage:this.changePageHandler})]}):Object(j.jsx)("h1",{children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0434\u043e\u043c\u043e\u0432 \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"})),Object(j.jsxs)("div",{className:"Main",children:[this.props.companies?Object(j.jsx)(R,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044e",onChange:this.selectChangeHandler,value:this.props.currentCompany||this.props.companies[0],options:this.props.companies.map((function(e){return{value:e.name,text:e.name}}))}):null,e]})}}]),n}(r.a.Component);var W=Object(v.b)((function(e){return{token:e.auth.token,companies:e.main.companies,currentCompany:e.main.currentCompany,houses:e.main.houses,paginationInfo:e.main.paginationInfo}}),(function(e){return{getCompanies:function(t){return e(function(e){return function(){var t=Object(C.a)(x.a.mark((function t(n){var a,r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,k.a.get("http://test-alpha.reestrdoma.ru/api/reestrdoma/companies/",{headers:{Authorization:"Bearer ".concat(e)}});case 3:a=t.sent,r=a.data.data,n({type:I,companies:r}),n(G(r[0].name));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},getHouses:function(t){return e(G(t))},changePagPage:function(t){return e((n=t,function(e,t){e(q()),B(n,e,t),e(G(t().main.currentCompany))}));var n}}}))(Q),Z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){var e=Object(j.jsxs)(F.d,{children:[Object(j.jsx)(F.b,{path:"/auth",component:L}),Object(j.jsx)(F.a,{to:"/auth"})]});return this.props.isAuthenticated&&(e=Object(j.jsxs)(F.d,{children:[Object(j.jsx)(F.b,{path:"/logout",component:V}),Object(j.jsx)(F.b,{path:"/",exact:!0,component:W}),Object(j.jsx)(F.a,{to:"/"})]})),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(d,{children:e})})}}]),n}(r.a.Component);var $=Object(F.g)(Object(v.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{autoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=localStorage.getItem("expirationDate");n<=new Date?e(H()):(e(D(t)),e(A(new Date(n).getTime()-(new Date).getTime())))}else e(H())}))}}}))(Z)),ee=n(23),te=n(15),ne={token:null};var ae={companies:null,currentCompany:null,houses:null,loading:!1,paginationInfo:{currentPage:1,elementsPerPage:15}};var re=Object(te.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case w:return Object(h.a)(Object(h.a)({},e),{},{token:t.token});case E:return Object(h.a)(Object(h.a)({},e),{},{token:null})}},main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case I:return Object(h.a)(Object(h.a)({},e),{},{companies:t.companies});case P:return Object(h.a)(Object(h.a)({},e),{},{houses:t.houses});case S:return Object(h.a)(Object(h.a)({},e),{},{currentCompany:t.currentCompany});case _:case N:return Object(h.a)(Object(h.a)({},e),{},{paginationInfo:t.paginationInfo});case T:return Object(h.a)(Object(h.a)({},e),{},{houses:null})}}}),ce=n(40),oe="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):te.d,ie=Object(te.e)(re,oe(Object(te.a)(ce.a)));o.a.render(Object(j.jsx)(v.a,{store:ie,children:Object(j.jsx)(ee.a,{children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)($,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.72fda49f.chunk.js.map