(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(278)},17:function(e,t,a){e.exports={panel:"Product_panel__3m0lI",image:"Product_image__1kvda",cardContent:"Product_cardContent__2P_y8",description:"Product_description__AOcMm",details:"Product_details__2uwCA",starButton:"Product_starButton__3ftsN",starOn:"Product_starOn__3fejJ",starOff:"Product_starOff__Z2R4A"}},26:function(e,t,a){e.exports={loading:"Products_loading__2yb37",wrapper:"Products_wrapper__1NEG9",refinement:"Products_refinement__3ynAc",filter:"Products_filter__3aN75",resultCount:"Products_resultCount__iWjRe",productList:"Products_productList__2TCkt"}},276:function(e,t,a){},278:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(14),u=a.n(i),s=a(16),o=a(94),l=a(95),c=a(106),m=a(96),d=a(107),p=a(56),f=a.n(p),h=a(57),g=a.n(h),v=a(103),b=a.n(v),_=a(104),y=a.n(_),E=a(97),w=a.n(E),C=a(100),q=a.n(C),N=a(17),P=a.n(N),x=a(101),M=a.n(x),O=a(20),k=a.n(O),L=a(99),A=a.n(L),j=r.a.memo(function(e){var t,a,n=e.product;return r.a.createElement(w.a,{className:P.a.panel},r.a.createElement(A.a,{xsDown:!0},r.a.createElement(q.a,{image:"http://lorempixel.com/300/300/".concat(n.category,"/").concat(n.id%10+1),height:300,width:300,className:P.a.image})),r.a.createElement(M.a,{className:P.a.cardContent},r.a.createElement(k.a,{variant:"h6",color:"primary",gutterBottom:!0},n.name),r.a.createElement(k.a,{variant:"subtitle2",gutterBottom:!0},(a=n.price,"$".concat(a.toFixed(2)))),r.a.createElement(k.a,{variant:"body1",className:P.a.description},n.description),r.a.createElement("div",{className:P.a.details},r.a.createElement(k.a,{variant:"overline",color:"secondary"},n.category),r.a.createElement(k.a,{variant:"overline"},(t=n.date,new Date(t).toLocaleString("en",{year:"numeric",month:"short",day:"numeric"}))),r.a.createElement("button",{className:P.a.starButton,onClick:function(){return n.favorite=!n.favorite}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"24.5",viewBox:"0 0 260 245"},r.a.createElement("path",{className:n.favorite?P.a.starOn:P.a.starOff,d:"m55,237 74-228 74,228L9,96h240"}))))))}),S=a(26),I=a.n(S),Q=a(40),D=a.n(Q),B=a(30),F=a.n(B),J=a(102),U=a.n(J),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filter:"all",searchQuery:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=this.state;if(t.store.loading)return r.a.createElement("div",{className:I.a.loading},r.a.createElement(U.a,null));var n="all"===a.filter?t.store.products:t.store.products.filter(function(e){return e.favorite}),i=a.searchQuery?n.filter(function(e){return e.name.toLowerCase().includes(a.searchQuery.toLowerCase())||e.category.toLowerCase().includes(a.searchQuery.toLowerCase())||e.description.toLowerCase().includes(a.searchQuery.toLowerCase())}):n;return r.a.createElement("div",{className:I.a.wrapper},r.a.createElement(D.a,{className:I.a.refinement},r.a.createElement(F.a,{container:!0,spacing:24,alignItems:"center"},r.a.createElement(F.a,{item:!0,xs:12,md:6},r.a.createElement(b.a,{autoFocus:!0,placeholder:"puppies",fullWidth:!0,variant:"outlined",label:"Search",margin:"normal",InputLabelProps:{shrink:!0},value:a.searchQuery,onChange:function(t){e.setState({searchQuery:t.target.value})}})),r.a.createElement(F.a,{item:!0,xs:12,md:3},r.a.createElement(f.a,{className:I.a.filter,value:a.filter,onChange:function(t){e.setState({filter:t.target.value})}},r.a.createElement(g.a,{value:"all"},"All products"),r.a.createElement(g.a,{value:"favourites"},"Favourite products"))),r.a.createElement(F.a,{item:!0,xs:12,md:3,style:{textAlign:"center"}},r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){n.forEach(function(e){e.favorite=!1})}},"Un-favourite everything")))),r.a.createElement(k.a,{variant:"caption",className:I.a.resultCount},t.store.products.length!==i.length&&r.a.createElement("span",null,"Showing ",i.length," result",1===i.length?"":"s")),i&&i.map(function(e){return r.a.createElement(j,{key:e.id,product:e})}))}}]),t}(r.a.PureComponent),T=Object(s.collect)(z),V=a(58),H=a.n(V),R=a(105),W=function(e){return e[Math.floor(Math.random()*e.length)]},G=["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem tellus, sagittis ac est ac, faucibus finibus mi. Donec scelerisque nibh nibh, accumsan feugiat elit gravida ut. Etiam a condimentum ex. Nunc feugiat varius rhoncus. Proin molestie sollicitudin eros pharetra euismod. Morbi nec dignissim ex, eu egestas quam. Nunc molestie molestie laoreet. Nam metus leo, auctor non sem id, lobortis blandit nisl. Nulla non neque quis elit consectetur vulputate ultrices vel arcu.","Donec ac dignissim lacus. Nulla egestas et ligula vitae tristique. Duis viverra mattis nisi, in vulputate magna consectetur at. Praesent hendrerit nulla eget ante luctus hendrerit. Donec id consequat nibh. Duis at lorem arcu. Mauris iaculis est tortor, sed rutrum eros congue sit amet. Integer fringilla mauris est, at condimentum massa finibus sed. Suspendisse potenti.","Pellentesque et purus lacus. Mauris lobortis quam nec aliquet hendrerit. Mauris lacus erat, aliquam ac augue in, vulputate hendrerit nulla. Maecenas lobortis, arcu ac scelerisque laoreet, ligula sem aliquet turpis, quis tempus odio nulla tempor diam. Aenean ex nulla, ultrices tempus arcu at, pellentesque rhoncus mauris. In aliquam vel ex vel ultrices. Morbi posuere tincidunt vehicula. Ut interdum mauris ut rhoncus vulputate. Vivamus efficitur placerat sem, in elementum turpis eleifend non. Proin sit amet ipsum sit amet augue pretium blandit et non ex. Aenean lacus magna, volutpat id lacinia id, fermentum et velit. Aenean dignissim tortor sit amet volutpat venenatis. Nam dui est, fringilla vitae mollis sit amet, fermentum eget odio. Fusce efficitur luctus odio, ut bibendum lorem dignissim et.","Curabitur vestibulum purus non mollis volutpat. Nunc lorem ex, porta ut vehicula ultricies, facilisis ac tellus. Quisque eu magna neque. Aliquam non justo faucibus, luctus odio at, pharetra massa. Mauris ultricies venenatis enim, pulvinar pharetra justo. Curabitur rutrum venenatis nunc. Suspendisse fringilla eu odio quis posuere. Curabitur semper ligula ac facilisis consectetur. Fusce bibendum consectetur vehicula. Mauris tellus mauris, iaculis volutpat tortor in, molestie iaculis ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Nullam euismod nulla sed congue sagittis. Integer ac imperdiet arcu, laoreet sagittis justo. Vestibulum vestibulum velit sit amet nulla lacinia, at viverra libero malesuada. Vestibulum vitae eleifend nibh. Suspendisse nunc purus, vulputate in scelerisque ut, accumsan id lacus. Ut quis nulla nulla. Fusce efficitur turpis nunc, ut auctor ipsum iaculis vitae. Maecenas volutpat nisi vel elit vulputate, iaculis elementum diam pulvinar. Cras sit amet porttitor lectus. Quisque faucibus mollis orci vitae iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."],Z=["abstract","animals","business","cats","city","food","nightlife","fashion","people","nature","sports","technics","transport"],$=["Pretty","Large","Big","Small","Tall","Short","Long","Handsome","Plain","Quaint","Clean","Elegant","Easy","Angry","Crazy","Helpful","Mushy","Odd","Unsightly","Adorable","Important","Inexpensive","Cheap","Expensive","Fancy"],K=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],X=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],Y=Array(100).fill(null).map(function(e,t){return{id:t,name:"".concat(W($)," ").concat(W(K)," ").concat(W(X)),price:1e3*Math.random(),description:W(G),category:W(Z),date:new Date(Date.now()-1e11*Math.random()),favorite:Math.random()>.8}}),ee=function(){return new Promise(function(e){setTimeout(function(){e(Y)},1e3)})},te=function(){var e=Object(R.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.store.loading=!0,e.next=3,ee("/api/blah");case 3:s.store.products=e.sent,s.store.loading=!1;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),ae=function(){s.store.products.forEach(function(e){Math.random()>.9&&(e.price=e.price*(Math.random()+.5))})};a(276);s.store.loading=!0,u.a.render(r.a.createElement(T,null),document.getElementById("root")),te().then(function(){setInterval(ae,3e3)}),Object(s.afterChange)(function(e){localStorage.store=JSON.stringify(e.store)})}},[[108,2,1]]]);
//# sourceMappingURL=main.c1cb4af1.chunk.js.map