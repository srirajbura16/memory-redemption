(this["webpackJsonpmemory-redemption"]=this["webpackJsonpmemory-redemption"]||[]).push([[0],{12:function(e,c,n){"use strict";n.r(c);var t=n(2),a=n.n(t),i=n(6),r=n.n(i),s=n(3),d=(n(5),n(1)),j=[{name:"arthur",img:"arthur.png",id:Object(d.a)()},{name:"charles",img:"charles.png",id:Object(d.a)()},{name:"dutch",img:"dutch.png",id:Object(d.a)()},{name:"hosea",img:"hosea.png",id:Object(d.a)()},{name:"john",img:"john.png",id:Object(d.a)()},{name:"josiah",img:"josiah.png",id:Object(d.a)()},{name:"lenny",img:"lenny.png",id:Object(d.a)()},{name:"micah",img:"micah.png",id:Object(d.a)()},{name:"sadie",img:"sadie.png",id:Object(d.a)()},{name:"sean",img:"sean.png",id:Object(d.a)()},{name:"tilly",img:"tilly.png",id:Object(d.a)()},{name:"uncle",img:"uncle.png",id:Object(d.a)()}],m=n(0),o=function(e){var c,n=e.character,t=e.handleClick,a=n.name,i=n.img,r=n.id;return Object(m.jsxs)("div",{className:"card",id:r,onClick:t,children:[Object(m.jsx)("div",{className:"card-img",id:r,children:Object(m.jsx)("img",{src:window.location.origin+"/assets/".concat(i),id:r})}),Object(m.jsx)("div",{id:r,children:(c=a,c[0].toUpperCase()+c.slice(1))})]})},b=function(e){var c=e.characters,n=e.handleClick;return Object(m.jsx)("div",{className:"Cards",children:c.map((function(e){return Object(m.jsx)(o,{character:e,handleClick:n})}))})},h=function(e){var c=e.currentScore,n=e.bestScore;return Object(m.jsxs)("nav",{children:[Object(m.jsx)("h2",{children:"Memory Redemption"}),Object(m.jsxs)("div",{className:"scoreboard",children:[Object(m.jsxs)("div",{children:["Score: ",c]}),Object(m.jsxs)("div",{children:["Best Score: ",n]})]})]})};var l=function(){var e=Object(t.useState)(j),c=Object(s.a)(e,2),n=c[0],a=c[1],i=Object(t.useState)(0),r=Object(s.a)(i,2),d=r[0],o=r[1],l=Object(t.useState)(0),O=Object(s.a)(l,2),u=O[0],g=O[1],p=Object(t.useState)([]),f=Object(s.a)(p,2),v=f[0],x=f[1];function S(e){for(var c,n,t=e.length;0!==t;)n=Math.floor(Math.random()*t),c=e[t-=1],e[t]=e[n],e[n]=c;return e}return Object(t.useEffect)((function(){d>u&&g(d),a(S(n))})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(h,{currentScore:d,bestScore:u}),Object(m.jsx)(b,{handleClick:function(e){var c,t=(c=e.target.id,n.find((function(e){if(e.id===c)return e})));v.includes(t.name)?(o(0),x([])):(o(d+1),v.push(t.name))},characters:S(n)})]})};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(l,{})}),document.getElementById("root"))},5:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.3007e7eb.chunk.js.map