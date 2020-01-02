(this["webpackJsonpimage-document-search"]=this["webpackJsonpimage-document-search"]||[]).push([[0],{130:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=(n(96),n(33)),u=n(84),s=n(170),l=n(172),g=n(175),h=n(174),m=n(83),d=n(171),f=n(24),p=n(12),v=n(25),b=n(26),S=n(28),E=n(173),w=n(169),j=n(79),y=n.n(j),O=function(e){function t(){var e,n;Object(f.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(v.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={value:n.props.currentRefinement},n.onChange=function(e,t){var a=t.newValue;a||n.props.onSuggestionCleared(),n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.props.refine(t)},n.onSuggestionsClearRequested=function(){n.props.refine()},n}return Object(S.a)(t,e),Object(p.a)(t,[{key:"getSuggestionValue",value:function(e){return e.text}},{key:"renderSuggestion",value:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{height:"25",src:e.url,style:{marginRight:"8px"},alt:e.url}),r.a.createElement(E.a,{attribute:"text",hit:e,tagName:"mark"}))}},{key:"render",value:function(){var e=this.props,t=e.hits,n=e.onSuggestionSelected,a=this.state.value,o={placeholder:"Search for some text...",onChange:this.onChange,value:a};return r.a.createElement(y.a,{suggestions:t,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:n,getSuggestionValue:this.getSuggestionValue,renderSuggestion:this.renderSuggestion,inputProps:o})}}]),t}(a.Component),x=Object(w.a)(O),C=n(5),k=n(49),R=n(50);function P(){var e=Object(k.a)(["\n  overflow: hidden;\n  border-radius: 8px;\n\n  ","\n"]);return P=function(){return e},e}function q(){var e=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n  transition: transform 0.2s ease-in-out;\n"]);return q=function(){return e},e}var I=R.a.img(q()),F=R.a.div(P(),(function(e){return e.withHover?"\n        &:hover {\n          & ".concat(I," {\n            transform: scale(1.05);\n          }\n        }"):null}));var H=function(e){var t=e.src,n=e.alt,a=e.withHover,o=e.style,c=Object(C.a)(e,["src","alt","withHover","style"]);return r.a.createElement(F,{withHover:a,style:o},r.a.createElement(I,Object.assign({src:t,alt:n},c)))},N=n(18),D=n.n(N),V=function(){return D.a.get("https://localhost:3443/getS3Url")},W=function(e,t){return D.a.put(e,t,{headers:{"Content-Type":t.type}})};var B="".concat("https://localhost:3443/","images"),J=function(e){return D.a.post("".concat(B),{image:e})},T=(n(130),n(62)("PT91NQX1UN","8307a3d77b5a9c445fb39839df23f6c4")),U=Object(s.a)((function(){return null}));var z=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=(t[0],t[1]),o=Object(a.useState)(""),c=Object(i.a)(o,2),s=c[0],f=c[1],p=Object(a.useState)(!1),v=Object(i.a)(p,2),b=v[0],S=v[1],E=Object(a.useState)(),w=Object(i.a)(E,2),j=w[0],y=w[1];return r.a.createElement(d.a,{maxWidth:"md"},r.a.createElement(m.a,{open:b,onClose:function(){return S(!1)},center:!0,styles:{overlay:{backdropFilter:"blur(20px)",background:"rgba(0, 0, 0, 0.6)"},modal:{backgroundColor:"white",borderRadius:"8px",display:"flex",flexDirection:"column",maxWidth:"800px",width:"100%",padding:"50px"}}},j),r.a.createElement("h1",null,"Image Document Search"),r.a.createElement(l.a,{indexName:"image-document-search",searchClient:T},r.a.createElement(g.a,{hitsPerPage:5}),r.a.createElement(x,{onSuggestionSelected:function(e,t){var n=t.suggestion;f(n.text)},onSuggestionCleared:function(){f("")}})),r.a.createElement(l.a,{indexName:"image-document-search",searchClient:T},r.a.createElement(U,{defaultRefinement:s}),r.a.createElement(u.a,{onDrop:function(e){var t;n(!0),(t=e[0],new Promise((function(e,n){V().then((function(e){return{imageId:"https://image-document-search.s3.amazonaws.com/"+e.data.key,url:e.data.url}})).then((function(a){var r=a.imageId,o=a.url;W(o,t).then((function(t){200===t.status?e(r):n("Image failed to upload")}))}))}))).then((function(e){return J(e).then(console.log).catch(console.error)})).catch(console.error).finally((function(){n(!1)}))}},(function(e){var t=e.getRootProps,n=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",t(),r.a.createElement("input",n()),r.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))})),r.a.createElement(h.a,{hitComponent:function(e){return r.a.createElement(H,{withHover:!0,style:{cursor:"pointer",margin:"0 2rem 2rem 0"},onClick:function(){y(r.a.createElement(H,{src:e.hit.url,alt:e.hit.url})),S(!0)},height:"150",src:e.hit.url,alt:e.hit.url})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},91:function(e,t,n){e.exports=n(159)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.6eb455bb.chunk.js.map