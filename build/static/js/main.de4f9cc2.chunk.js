(this.webpackJsonpdjib_pol_emploi=this.webpackJsonpdjib_pol_emploi||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),i=a.n(r),c=(a(87),a(88),a(55));c.initializeApp({apiKey:"AIzaSyAHk7cRgtftDKrf_Z8eZAo4cjFsb0XJ2gE",authDomain:"expensify-2c9e2.firebaseapp.com",databaseURL:"https://expensify-2c9e2.firebaseio.com",projectId:"expensify-2c9e2",storageBucket:"expensify-2c9e2.appspot.com",messagingSenderId:"994745724382",appId:"1:994745724382:web:2ba71d6eced37c3ce9014f",measurementId:"G-W51K7MZW5M"});var o=c.database(),s=a(161),m=a(40),u=a(71),d=a(59),p=[],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETRIEVE_RESULTS":return Object(d.a)(t.results);default:return e}},f=a(42),b={text:"",jobType:"",published:[],city:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT_BY_TEXT":return Object(f.a)({},e,{text:t.text});case"SORT_BY_JOBTYPE":return Object(f.a)({},e,{jobType:t.jobType});case"SORT_BY_PUBLISHED_DAY":return Object(f.a)({},e,{published:t.published});case"SORT_BY_CITY":return Object(f.a)({},e,{city:t.city});default:return e}},v=JSON.parse(localStorage.getItem("savedJobs"))||[],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_JOB":return[].concat(Object(d.a)(e),[t.job]);case"REMOVE_JOB":return e.filter((function(e){return e.identifier!==t.job.identifier}));default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,j=a(16),O=a(148),S=a(152);a(104);function N(e){return l.a.createElement(O.a,{className:"AppBar",position:"static",elevation:0},l.a.createElement(S.a,null,l.a.createElement("a",{href:"/",className:"link"}," ","Kerja"," ")))}var T=a(30),x=a(18),_=Object(x.a)(),D=a(36),L=a(21),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.jobType,a=void 0===t?"":t;return{type:"SORT_BY_JOBTYPE",jobType:a}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.published,a=void 0===t?[]:t;return{type:"SORT_BY_PUBLISHED_DAY",published:a}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.city,a=void 0===t?"":t;return{type:"SORT_BY_CITY",city:a}},C=a(76),w=a(164),B=a(154),k=a(153),I=(a(105),Object(j.b)()((function(e){var t=Object(n.useState)(""),a=Object(L.a)(t,2),r=a[0],i=a[1];return l.a.createElement("div",{className:"entetePage"},l.a.createElement(k.a,{container:!0,justify:"center",className:"blue"},l.a.createElement(k.a,{item:!0,xs:12,className:"title"},l.a.createElement("h1",null," ",e.title)),l.a.createElement(k.a,{item:!0,xs:10,className:"searchInput"},l.a.createElement(C.a,{component:"form",className:"paper",onSubmit:function(t){t.preventDefault(),e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,a=void 0===t?"":t;return{type:"SORT_BY_TEXT",text:a}}({text:r})),e.onSubmit()}},l.a.createElement(w.a,{className:"input",placeholder:"S\xf6k efter yrke eller stad",onChange:function(e){i(e.target.value)}}),l.a.createElement(B.a,{type:"submit",variant:"contained",className:"btnSearch"}," ","Sok"," ")))))}))),Y=a(75),A=(a(106),function(e){return l.a.createElement(Y.a,{className:"myButton",onClick:e.action}," ",e.text," ")}),q=a(155),M=a(158),H=a(156),K=a(157),U=(a(107),Object(j.b)((function(e){return{results:e.results.slice(Math.max(e.results.length-4,0))}}))((function(e){var t=e.dispatch;Object(n.useEffect)((function(){t((function(e){return o.ref("jobPostList").once("value").then((function(t){var a=[];t.forEach((function(e){a.push(Object(f.a)({identifier:e.key},e.val()))})),e(function(e){return{type:"RETRIEVE_RESULTS",results:e}}(a))}))}))}),[t]);return l.a.createElement(T.a,null,l.a.createElement("div",{className:"landingPage"},l.a.createElement(I,{title:"S\xf6k",onSubmit:function(){e.history.push("/annonser")}}),l.a.createElement(k.a,{container:!0,justify:"center",className:"landingPageWrapper"},l.a.createElement(k.a,{item:!0,xs:12,className:"pageHeader"},l.a.createElement("h1",null," Sista inl\xe4ggen ")),l.a.createElement(k.a,{className:"cardContainer",item:!0,xs:12},l.a.createElement(k.a,{container:!0,justify:"center",spacing:2},e.results.map((function(e){return l.a.createElement(k.a,{key:e.identifier,className:"jobPostCard",item:!0},l.a.createElement(C.a,null,l.a.createElement(q.a,{variant:"outlined"},l.a.createElement(H.a,null,l.a.createElement(K.a,{color:"textSecondary",gutterBottom:!0},"Ny"),l.a.createElement(K.a,{variant:"h5",component:"h2"},e.jobPositionTitle.title),l.a.createElement(K.a,{color:"textSecondary"},"".concat(e.hiringOrg.name," - ").concat(e.jobPositionLocation.city)),l.a.createElement(K.a,{variant:"body2",component:"p"},"Start datum: ".concat(e.postDetail.startDate)),l.a.createElement(K.a,{variant:"body2",component:"p"},"Published: ".concat(e.postDetail.published))),l.a.createElement(M.a,null,l.a.createElement(D.a,{to:"/annonser/".concat(e.identifier)},l.a.createElement(A,{text:"L\xe4s mer"}))))))})))),l.a.createElement(k.a,{item:!0,xs:12,className:"pageHeader"},!e.results[0]&&l.a.createElement("h2",null,"Loading ...")))))}))),W=a(46),F=a.n(W),V=a(49),X=function(e){return{type:"ADD_JOB",job:e}},z=a(159),Z=Object(z.a)((function(e){return{list:{backgroundColor:"#fff",borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"},paper:{width:"90%",margin:"0 auto"},title:{fontSize:14},pos:{marginBottom:12},links:{backgroundColor:"#13377F"},linK:{textDecoration:"none",color:"#fff"}}})),G=Object(j.b)((function(e){return{saved:e.saved}}))((function(e){var t=Z(),a=l.a.useState(!1),n=Object(L.a)(a,2),r=n[0],i=n[1];return l.a.createElement("div",null,l.a.createElement(A,{text:"".concat(e.saved.length," sparade"),action:function(){return i(!0)}}),l.a.createElement(V.a,{show:r,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},l.a.createElement(V.a.Header,null,l.a.createElement(V.a.Title,{id:"contained-modal-title-vcenter"},"Sparade")),l.a.createElement(V.a.Body,null,e.saved[0]&&e.saved.map((function(a){return l.a.createElement(k.a,{key:a.identifier,className:t.paper,item:!0},l.a.createElement(C.a,{className:t.paper},l.a.createElement(q.a,{className:t.root,variant:"outlined"},l.a.createElement(H.a,null,l.a.createElement(K.a,{variant:"h5",component:"h2"},a.jobPositionTitle.title),l.a.createElement(K.a,{className:t.pos,color:"textSecondary"},a.hiringOrg.name," ","-"," ",a.hiringOrgContact.addressLine.split(",").pop()),l.a.createElement(K.a,{component:"h5"},a.jobPositionTitle.title),l.a.createElement(K.a,{component:"p"}," Duration: ".concat(a.classification.duration))),l.a.createElement(M.a,null,l.a.createElement(A,{text:"L\xe4s mer",className:t.links},l.a.createElement(D.a,{to:"/annonser/".concat(a.identifier),className:t.link})),l.a.createElement(A,{text:"Radera",action:function(){e.dispatch({type:"REMOVE_JOB",job:{identifier:a.identifier}});var t=JSON.parse(localStorage.getItem("savedJobs"));t.splice(a,1),localStorage.setItem("savedJobs",JSON.stringify(t)),i(!1)}})))))})),void 0===e.saved[0]&&l.a.createElement("p",null," You have no saved jobs ")),l.a.createElement(V.a.Footer,null,l.a.createElement(A,{text:"St\xe4ng",action:function(){i(!1)}}))))})),Q=Object(j.b)()((function(e){return l.a.createElement(l.a.Fragment,null,e.results.map((function(t){return l.a.createElement(k.a,{key:t.identifier,item:!0},l.a.createElement(C.a,null,l.a.createElement(q.a,{variant:"outlined"},l.a.createElement(H.a,null,l.a.createElement(K.a,{className:"jobTitle",variant:"h5",component:"h2"},t.jobPositionTitle.title),l.a.createElement(K.a,{className:"pos",color:"textSecondary"},t.hiringOrg.name," -"," ",t.jobPositionLocation.city),l.a.createElement(K.a,{component:"h5"},t.jobPositionTitle.title),l.a.createElement(K.a,{component:"p"}," Duration: ".concat(t.classification.duration)),l.a.createElement(K.a,{variant:"body2",component:"p"},"Published: ".concat(F()(t.postDetail.published).format("MMM Do YYYY")))),l.a.createElement(M.a,null,l.a.createElement(D.a,{to:"/annonser/".concat(t.identifier)},l.a.createElement(A,{text:"See more"})),l.a.createElement(A,{text:"Save",action:function(){var a=JSON.parse(localStorage.getItem("savedJobs"));a?void 0===a.find((function(e){return e.identifier===t.identifier}))?(e.dispatch(X(t)),localStorage.setItem("savedJobs",JSON.stringify([t]))):alert("Redan sparade"):(e.dispatch(X(t)),localStorage.setItem("savedJobs",JSON.stringify([t])))}})))))})))})),$=function(e,t){var a=t.text,n=t.jobType,l=t.published,r=t.city;return e.filter((function(e){var t=e.jobPositionLocation.city.toLowerCase().includes(a.toLowerCase()),i=e.jobPositionTitle.title.toLowerCase().includes(a.toLowerCase())||t,c=e.classification.extent.match(n),o=Object(L.a)(l,2),s=o[0],m=o[1],u=e.jobPositionLocation.city.toLowerCase().match(r.toLowerCase()),d=function(){switch(m){case"all":return e;case"today":return e.postDetail.published.match(s);case"last_7_days":case"last_30_days":return new Date(e.postDetail.published).getTime()>=new Date(s).getTime()}};return a?n?i&&c:s?i&&d():r?i&&u:n&&s?i&&c&&d():s&&n&&r?i&&c&&d()&&u:i:n?s?c&&d():a?i&&c:r?c&&u:s&&a?c&&i&&d():s&&a&&r?i&&c&&u&&d():c:s?a?i&&d():n?c&&d():r?d()&&u:a&&n?i&&c&&d():a&&n&&r?i&&c&&u&&d():d():r?a?i&&u:n?c&&u:s?u&&d():a&&n?i&&c&&u:a&&n&&s?i&&c&&d()&&u:u:void 0})).sort((function(e,t){return new Date(e.postDetail.published)<new Date(t.postDetail.published)?1:-1}))},ee=a(160),te=a(165),ae=a(163),ne=a(166),le=Object(z.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:123}}})),re=function(e){var t=le(),a=l.a.useState(!1),n=Object(L.a)(a,2),r=n[0],i=n[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a,{className:t.formControl},l.a.createElement(te.a,{id:"demo-controlled-open-select-label"},e.title),l.a.createElement(ae.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:r,onClose:function(){i(!1)},onOpen:function(){i(!0)},value:e.value,onChange:e.handleChange},e.options.map((function(e,t){return l.a.createElement(ne.a,{key:t,value:e}," ",e," ")})))))},ie=(a(110),Object(j.b)((function(e){return{results:$(e.results,e.filter)}}))((function(e){var t=Object(n.useState)(""),a=Object(L.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(""),o=Object(L.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(L.a)(u,2),p=d[0],E=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(I,{title:"Hittade: ".concat(e.results.length),onSubmit:function(){}}),l.a.createElement(k.a,{container:!0,justify:"center",className:"annonsWrapper"},l.a.createElement(k.a,{item:!0,xs:12},l.a.createElement(k.a,{container:!0,justify:"center",className:"dropdownContainer"},l.a.createElement(k.a,{item:!0,className:"dropdown"},l.a.createElement(re,{title:"Location",value:r,handleChange:function(t){console.log(t.target.value),i(t.target.value),"All"===t.target.value?e.dispatch(P({city:""})):e.dispatch(P({city:t.target.value}))},options:["All","Ume\xe5","G\xe4vle","Stockholm","Trollh\xe4ttan"]})),l.a.createElement(k.a,{className:"dropdown"},l.a.createElement(re,{title:"Job type",value:s,handleChange:function(t){m(t.target.value),"All"===t.target.value?e.dispatch(R({jobType:""})):e.dispatch(R({jobType:t.target.value}))},options:["All","Heltid","Deltid"]})),l.a.createElement(k.a,{className:"dropdown"},l.a.createElement(re,{title:"Published",value:p,handleChange:function(t){if(E(t.target.value),"Today"===t.target.value){var a=F()().format().substr(0,10);e.dispatch(J({published:[a,"today"]}))}else if("Last 7 days"===t.target.value){var n=F()().subtract(7,"days").format().substr(0,10);e.dispatch(J({published:[n,"last_7_days"]}))}else if("Last 30 days"===t.target.value){var l=F()().subtract(30,"days").format().substr(0,10);e.dispatch(J({published:[l,"last_30_days"]}))}else"All"===t.target.value&&e.dispatch(J({published:["","all"]}))},options:["All","Today","Last 7 days","Last 30 days"]})))),l.a.createElement(k.a,{item:!0,xs:12,className:"savedJob"},l.a.createElement(G,null)),l.a.createElement(k.a,{item:!0,xs:12},l.a.createElement(Q,{results:e.results}))))}))),ce=(a(111),Object(j.b)()((function(e){return l.a.createElement("div",{className:"jobPostWrapper"},l.a.createElement(C.a,null,l.a.createElement(q.a,{variant:"outlined"},l.a.createElement(H.a,null,l.a.createElement(K.a,{variant:"h4",component:"h3",className:"boldTitle"},e.jobPositionTitle.title),l.a.createElement(K.a,{variant:"h4",component:"h3"},e.hiringOrg.name),l.a.createElement(K.a,{variant:"h5",component:"h2"},e.jobPositionTitle.title),l.a.createElement(K.a,{style:{margin:"3px"}},"Kommun: ".concat(e.jobPositionLocation.city)),l.a.createElement(K.a,{style:{margin:"3px"}},"Varaktighet: ".concat(e.classification.duration)),l.a.createElement(K.a,null,"Anst\xe4llningsform: ".concat(e.classification.TypeOfEmployment)),l.a.createElement(C.a,{className:"elevatedCard",elevation:3},l.a.createElement(q.a,null,l.a.createElement(H.a,null,l.a.createElement("div",null,l.a.createElement("h2",{className:"boldTitle"}," ","Kvalifikationer"," "),e.qualificationsRequiredSummary.education&&l.a.createElement(K.a,null,"- ".concat(e.qualificationsRequiredSummary.education)," "),e.qualificationsRequiredSummary.hasExperience.type&&l.a.createElement(K.a,null,"- ".concat(e.qualificationsRequiredSummary.hasExperience.type)),e.qualificationsRequiredSummary.hasDriverLicence.category&&l.a.createElement(K.a,null," - Driver licence: ".concat(e.qualificationsRequiredSummary.hasDriverLicence.category||"ingen")))))),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",{className:"boldTitle"},"Om jobbet :"),e.jobPositionPurpose.purpose),l.a.createElement("div",null,l.a.createElement("h2",{className:"boldTitle"}," ","Om anst\xe4llningen :"," "),"L\xf6n: ".concat(e.compensation.salaryType)),l.a.createElement("div",null,l.a.createElement("h2",{className:"boldTitle"}," ","Adress :"," "),e.hiringOrgContact.addressLine),l.a.createElement("div",null,l.a.createElement("h4",{className:"boldTitle"},"Publicerat:"," "),e.postDetail.published))),l.a.createElement(M.a,null,l.a.createElement(A,{text:"Save",action:function(){var t=JSON.parse(localStorage.getItem("savedJobs"));t?void 0===t.find((function(t){return t.identifier===e.identifier}))?(e.dispatch(X(e)),localStorage.setItem("savedJobs",JSON.stringify([e]))):alert("Redan sparade"):(e.dispatch(X(e)),localStorage.setItem("savedJobs",JSON.stringify([e])))}})))))}))),oe=(a(112),Object(j.b)((function(e,t){return{result:e.results.find((function(e){return e.identifier===t.match.params.id}))}}))((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"btnContainer"},l.a.createElement("div",{className:"back"},l.a.createElement(A,{text:"Till resultaten",action:function(){e.history.push("/annonser")}})),l.a.createElement("div",{className:"savedJobs"},l.a.createElement(G,null))),l.a.createElement(ce,e.result))})));function se(){return l.a.createElement(T.b,{history:_},l.a.createElement(T.c,null,l.a.createElement(T.a,{path:"/",exact:!0,component:U}),l.a.createElement(T.a,{exact:!0,path:"/annonser",component:ie}),l.a.createElement(T.a,{path:"/annonser/:id",component:oe})))}var me=a(162),ue=Object(m.e)(Object(m.c)({results:E,filter:h,saved:g}),y(Object(m.a)(u.a))),de=function(){return l.a.createElement(j.a,{store:ue},l.a.createElement(s.a,null),l.a.createElement(me.a,{maxWidth:"lg"},l.a.createElement(N,null),l.a.createElement(se,null)))};i.a.render(l.a.createElement(de,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(113)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.de4f9cc2.chunk.js.map