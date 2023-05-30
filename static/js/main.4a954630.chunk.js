(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),r=function(e){var t=e.todos,c=e.isEyeOpenFor,s=e.setDetails,a=e.queryFilter,r=e.statusFilter,d=Object(l.useState)(t),o=Object(n.a)(d,2),j=o[0],u=o[1];return Object(l.useEffect)((function(){var e=a?t.filter((function(e){return e.title.toLocaleLowerCase().includes(a.toLocaleLowerCase())})):t,c="all"!==r?e.filter((function(e){return"completed"===r?!0===e.completed:!1===e.completed})):e;u(c)}),[a,r]),Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:j.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:t}),Object(i.jsx)("td",{className:"is-vcentered",children:n&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-".concat(n?"success":"danger"),children:a})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far ".concat(t===c?"fa-eye-slash":"fa-eye")})})})})]},t)}))})]})},d=function(e){var t=e.setTaskStatusFilter,c=e.setQueryFilter,s=Object(l.useState)(""),a=Object(n.a)(s,2),r=a[0],d=a[1],o=Object(l.useState)("all"),j=Object(n.a)(o,2),u=j[0],b=j[1],h=function(e){d(e),c(e)};return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return c=e.target.value,b(c),void t(c);var c},value:u,children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return h(e.target.value)},value:r}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:r&&Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return h("")}})})]})]})};function o(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(12);var j=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.details,c=e.setDetails,s=Object(l.useState)(),a=Object(n.a)(s,2),r=a[0],d=a[1],u=Object(l.useState)(!0),b=Object(n.a)(u,2),h=b[0],O=b[1],m=t.id,x=t.completed,f=t.title,p=t.userId;return Object(l.useEffect)((function(){(function(e){return o("/users/".concat(e))})(p).then(d).catch((function(e){return e.message})).finally((function(){return O(!1)}))}),[]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),h?Object(i.jsx)(j,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",m]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[x?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]})]})},b=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)("all"),b=Object(n.a)(a,2),h=b[0],O=b[1],m=Object(l.useState)(""),x=Object(n.a)(m,2),f=x[0],p=x[1],v=Object(l.useState)(null),N=Object(n.a)(v,2),y=N[0],g=N[1];return Object(l.useEffect)((function(){o("/todos").then((function(e){return s(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(d,{setTaskStatusFilter:O,setQueryFilter:p})}),Object(i.jsx)("div",{className:"block",children:c.length?Object(i.jsx)(r,{todos:c,isEyeOpenFor:y?y.id:-1,setDetails:g,queryFilter:f,statusFilter:h}):Object(i.jsx)(j,{})})]})})}),y&&Object(i.jsx)(u,{details:y,setDetails:g})]})};a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4a954630.chunk.js.map