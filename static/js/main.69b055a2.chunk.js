(this.webpackJsonpdocs=this.webpackJsonpdocs||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),u=a.n(o),l=(a(71),a(23)),c=(a(72),a(53)),i=a.n(c),s=a(136),d=a(128),p=a(130),m=a(98),h=a(134),b=a(131),f=a(132),g=a(139),v=a(133),E=a(137),k=a(39),z=a.n(k);var O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],u=Object(n.useState)(""),c=Object(l.a)(u,2),k=c[0],O=c[1],S=Object(n.useState)(""),j=Object(l.a)(S,2),y=j[0],T=j[1],C=Object(n.useState)(""),q=Object(l.a)(C,2),D=q[0],W=q[1],w=Object(n.useState)(!1),x=Object(l.a)(w,2),_=x[0],A=x[1],H=Object(n.useState)(""),I=Object(l.a)(H,2),B=I[0],G=I[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(s.a,{width:.5},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(m.a,{style:{fontSize:14},color:"textSecondary",gutterBottom:!0},"Import the first 50 product backlog items from Azure DevOps into GitHub"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A(!0),i.a.post("https://azdo2gh.azurewebsites.net/api/migrate",{azureDevOps:{token:a,organization:k,areaPath:y},github:{token:D}}).then((function(e){var t;return"Failed"===(null===(t=e.data)||void 0===t?void 0:t.runtimeStatus)?G("function failed"):G("")})).catch((function(e){return G(e.toString())})).finally((function(){return A(!1)}))}},r.a.createElement(h.a,{label:"organization",id:"azure-devops-organization",value:k,required:!0,fullWidth:!0,onChange:function(e){return O(e.currentTarget.value)}}),r.a.createElement(h.a,{label:"azure devops token",id:"azure-devops-token",value:a,onChange:function(e){return o(e.currentTarget.value)},required:!0,fullWidth:!0,helperText:r.a.createElement("span",null,"scope: Work Item (Read)\xa0",r.a.createElement(b.a,{href:"https://dev.azure.com/"+(""!==k?k+"/_usersSettings/tokens":""),target:"_blank",rel:"noopener noreferrer","data-testid":"azure-devops-token-url"},r.a.createElement(z.a,{style:{fontSize:12}})))}),r.a.createElement(h.a,{label:"area path",id:"azure-devops-areapath",value:y,required:!0,fullWidth:!0,onChange:function(e){return T(e.currentTarget.value)},helperText:"query product backlog items under area path"}),r.a.createElement(h.a,{label:"github token",id:"github-token",value:D,required:!0,fullWidth:!0,onChange:function(e){return W(e.currentTarget.value)},helperText:r.a.createElement("span",null,"scope: public_repo\xa0",r.a.createElement(b.a,{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(z.a,{style:{fontSize:12}})))}),r.a.createElement(f.a,{disabled:_||[a,k,y,D].includes(""),type:"submit"},"Go!"))))),r.a.createElement(g.a,{open:""!==B,autoHideDuration:6e3,onClose:function(){return G("")},"data-testid":"error"},r.a.createElement(E.a,{severity:"error"},B)),r.a.createElement(g.a,{open:_,autoHideDuration:6e3,onClose:function(){return A(!1)},"data-testid":"loading"},r.a.createElement(v.a,null))))};u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.69b055a2.chunk.js.map