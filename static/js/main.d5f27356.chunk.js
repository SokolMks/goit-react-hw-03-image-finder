(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={image:"ImageItem_image__11ngl"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__3oh16",modal:"Modal_modal__1pTCR"}},14:function(e,t,a){e.exports={container:"Container_container__Nu5mD"}},16:function(e,t,a){e.exports={button:"Button_button__1dXeC"}},18:function(e,t,a){e.exports={imageGallery:"Image_imageGallery__4Or5b",imageGalleryItem:"Image_imageGalleryItem__v1Ysn"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),i=a.n(o),c=(a(23),a(3)),s=a(4),l=a(6),u=a(5),m=a(14),h=a.n(m),g=a(0),d=function(e){var t=e.children;return Object(g.jsx)("div",{className:h.a.container,children:t})},b=a(7),p=a.n(b),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):alert("\u0414\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0443\u0436\u043d\u043e \u0447\u0442\u043e \u0442\u043e \u0432\u0432\u0435\u0441\u0442\u0438")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:p.a.searchbar,children:Object(g.jsxs)("form",{className:p.a.searchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:p.a.buttons,children:Object(g.jsx)("span",{className:p.a.label,children:"Search"})}),Object(g.jsx)("input",{className:p.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.imageName,onChange:this.handleChange})]})})}}]),a}(n.Component);j.defaultProps={imageName:""};var f=a(13),v=a(10),y=a.n(v),O=a(15),_=function(){function e(){Object(c.a)(this,e),this.query="",this.pageNumber=1,this.perPage=12}return Object(s.a)(e,[{key:"fetchImages",value:function(){var e=Object(O.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://pixabay.com","/api/?image_type=photo&orientation=horizontal&q=").concat(this.query,"&page=").concat(this.pageNumber,"&per_page=").concat(this.perPage,"&key=").concat("21930090-2f4bfee534669e28d6350f360"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,this.incrementPage(),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementPage",value:function(){this.pageNumber+=1}},{key:"resetPage",value:function(){this.pageNumber=1}}]),e}(),x=a(2),w=a.n(x),N=a(11),C=a.n(N),k=function(e){var t=e.id,a=e.url,n=e.tags,r=e.largeImage,o=e.toggleModal,i=e.handleLargeImage;return Object(g.jsx)("li",{className:C.a.imageGallery,onClick:function(){return o(),void i(r)},children:Object(g.jsx)("img",{className:C.a.image,src:a,alt:n})},t)};k.propeType={id:w.a.number.isRequired,url:w.a.string.isRequired,tags:w.a.string.isRequired,largeImage:w.a.string.isRequired,toggleModal:w.a.func.isRequired,handleLargeImage:w.a.func.isRequired};var S=k,I=a(12),M=a.n(I),B=document.querySelector("#modal-root"),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).PropTypes={onClose:w.a.func.isRequired},e.handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:M.a.overlay,onClick:this.handleClickBackdrop,children:Object(g.jsx)("div",{className:M.a.modal,children:this.props.children})}),B)}}]),a}(n.Component),F=a(16),L=a.n(F),R=function(e){var t=e.onClick;return Object(g.jsx)("button",{className:L.a.button,type:"button",onClick:t,children:"Load more..."})},P=a(17),G=a.n(P),T=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)(G.a,{type:"Bars",color:"#FF8C00",height:200,width:200,timeout:1e3})}}]),a}(n.Component),E=a(18),A=a.n(E),D=new _,U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],showModal:!1,largeImage:"",error:null,loading:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleLargeImage=function(t){e.setState({largeImage:t})},e.handleBtnClick=function(){e.getImages()},e.getImages=function(){e.setState({loading:!0}),D.fetchImages().then((function(t){var a=t.hits;return e.setState((function(e){return{images:[].concat(Object(f.a)(e.images),Object(f.a)(a))}}))})).catch((function(t){e.setState({error:t})})).finally(e.setState({loading:!1}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.imageName,n=this.props.imageName;a!==n&&(this.setState({images:[]}),D.query=n,D.resetPage(),this.getImages()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showModal,n=t.loading,r=t.images,o=t.largeImage;return Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsx)(q,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:o,alt:"images"})}),Object(g.jsx)("ul",{className:A.a.imageGallery,children:r.map((function(t){var a=t.id,n=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(g.jsx)(S,{url:n,tags:r,largeImage:o,toggleModal:e.toggleModal,handleLargeImage:e.handleLargeImage},a)}))}),r.length>0&&!n&&Object(g.jsx)(R,{onClick:this.handleBtnClick}),n&&Object(g.jsx)(T,{type:"Bars",color:"#FF8C00",height:200,width:200,timeout:1e3})]})}}]),a}(n.Component),z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleFormSubmit=function(t){e.setState({imageName:t})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(d,{children:[Object(g.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(g.jsx)(U,{imageName:this.state.imageName})]})}}]),a}(n.Component);i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"SearchBar_searchbar__z2hh6",searchForm:"SearchBar_searchForm__1XMs5",buttons:"SearchBar_buttons__4n_Cg",button:"SearchBar_button__25_z0",label:"SearchBar_label__1myvW",input:"SearchBar_input__VM0Fj"}}},[[46,1,2]]]);
//# sourceMappingURL=main.d5f27356.chunk.js.map