!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i;function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var s="[data-canvas]",c="[data-canvas-next]",u="[data-score]",l="[data-lines]",h="[data-level]",f="[data-button-play]",v=32,y=37,d=38,b=39,p=40,m=(a(i={},v,(function(t){return o(o({},t),{},{y:t.y+1})})),a(i,y,(function(t){return o(o({},t),{},{x:t.x-1})})),a(i,d,(function(t){for(var e=0;e<t.shape.length;++e)for(var n=0;n<e;++n){var i=[t.shape[e][n],t.shape[n][e]];t.shape[n][e]=i[0],t.shape[e][n]=i[1]}return t.shape.forEach((function(t){return t.reverse()})),t})),a(i,b,(function(t){return o(o({},t),{},{x:t.x+1})})),a(i,p,(function(t){return o(o({},t),{},{y:t.y+1})})),i),x=["cyan","blue","orange","yellow","green","purple","red"],g=[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[2,0,0],[2,2,2],[0,0,0]],[[0,0,3],[3,3,3],[0,0,0]],[[4,4],[4,4]],[[0,5,5],[5,5,0],[0,0,0]],[[0,6,0],[6,6,6],[0,0,0]],[[7,7,0],[0,7,7],[0,0,0]]],w=100,k=300,O=500,P=800,j=1,S=2;function E(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var C=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.spawn()}var e,n,i;return e=t,(n=[{key:"randomizeType",value:function(t){return Math.floor(Math.random()*t)}},{key:"spawn",value:function(){this.typeId=this.randomizeType(x.length-1),this.shape=g[this.typeId],this.color=x[this.typeId],this.x=0,this.y=0}},{key:"setStartPosition",value:function(){this.x=4===this.typeId?4:3}},{key:"draw",value:function(){var t=this;this.ctx.fillStyle=this.color,this.shape.forEach((function(e,n){e.forEach((function(e,i){e&&t.ctx.fillRect(t.x+i,t.y+n,1,1)}))}))}},{key:"move",value:function(t){this.x=t.x,this.y=t.y}}])&&E(e.prototype,n),i&&E(e,i),t}();function N(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.ctxNext=n,this.account=i,this.tetromino=null}var e,n,i;return e=t,(n=[{key:"reset",value:function(){this.grid=this.getEmptyBoard(),this.tetromino=new C(this.ctx),this.tetromino.setStartPosition(),this.getNewPiece()}},{key:"valid",value:function(t){var e=this;return t.shape.every((function(n,i){return n.every((function(n,r){var o=t.x+r,a=t.y+i;return 0===n||e.insideWalls(o)&&e.aboveFloor(a)&&e.notOccupied(o,a)}))}))}},{key:"insideWalls",value:function(t){return t>=0&&t<10}},{key:"aboveFloor",value:function(t){return t<=20}},{key:"notOccupied",value:function(t,e){return this.grid[e]&&0===this.grid[e][t]}},{key:"getEmptyBoard",value:function(){return N(Array(20)).map((function(){return Array(10).fill(0)}))}},{key:"draw",value:function(){this.tetromino.draw(),this.drawBoard()}},{key:"drawBoard",value:function(){var t=this;this.grid.forEach((function(e,n){e.forEach((function(e,i){e&&(t.ctx.fillStyle=x[e-1],t.ctx.fillRect(i,n,1,1))}))}))}},{key:"drop",value:function(){var t=m[p](this.tetromino);if(this.valid(t))this.tetromino.move(t);else{if(this.freeze(),this.clearLines(),0===this.tetromino.y)return!1;this.tetromino=this.next,this.tetromino.ctx=this.ctx,this.tetromino.setStartPosition(),this.getNewPiece()}return!0}},{key:"freeze",value:function(){var t=this;this.tetromino.shape.forEach((function(e,n){e.forEach((function(e,i){e>0&&(t.grid[n+t.tetromino.y][i+t.tetromino.x]=e)}))}))}},{key:"clearLines",value:function(){var t=this,e=0;this.grid.forEach((function(n,i){n.every((function(t){return t>0}))&&(e++,t.grid.splice(i,1),t.grid.unshift(Array(10).fill(0)))})),this.account.values.lines+=e}},{key:"getNewPiece",value:function(){this.next=new C(this.ctxNext),this.ctxNext.clearRect(0,0,this.ctxNext.canvas.width,this.ctxNext.canvas.height),this.next.draw()}}])&&T(e.prototype,n),i&&T(e,i),t}();function q(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var I=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cache(),this.initProxyValues(),this.subscribe("lines",this.onChangeLine.bind(this))}var e,n,i;return e=t,(n=[{key:"cache",value:function(){this.callbacks={score:[],lines:[],level:[]},this.elements={score:document.querySelector(u),lines:document.querySelector(l),level:document.querySelector(h)}}},{key:"initProxyValues",value:function(){var t=this;this.values=new Proxy({score:0,lines:0,level:0},{set:function(e,n,i){var r=e[n];return r!==i&&(e[n]=i,t.elements[n].textContent=i,t.callbacks[n].forEach((function(t){return t(i,r)}))),!0}})}},{key:"reset",value:function(){this.values.score=0,this.values.lines=0,this.values.level=0}},{key:"subscribe",value:function(t,e){this.callbacks[t]&&this.callbacks[t].push(e)}},{key:"getLinesClearPoints",value:function(t){var e=[0,w,k,O,w,P];return(this.values.level+1)*e[t]}},{key:"onChangeLine",value:function(t,e){t>e&&(this.values.score+=this.getLinesClearPoints(t-e)),this.values.lines>=2&&(this.values.level++,this.values.lines-=2)}}])&&q(e.prototype,n),i&&q(e,i),t}();function M(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var R=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.cache(),this.events(),this.initCanvases(),this.account=new I,this.board=new L(this.ctx,this.ctxNext,this.account),this.account.subscribe("level",this.onChangeLevel.bind(this))}var e,n,i;return e=t,(n=[{key:"cache",value:function(){this.canvas=document.querySelector(s),this.canvasNext=document.querySelector(c),this.buttonPlay=document.querySelector(f),this.time={start:0,elapsed:0,level:1e3}}},{key:"events",value:function(){this.buttonPlay.addEventListener("click",this.play.bind(this)),document.addEventListener("keydown",this.moveTetromino.bind(this))}},{key:"initCanvases",value:function(){this.ctx=this.canvas.getContext("2d"),this.ctx.canvas.width=300,this.ctx.canvas.height=600,this.ctx.scale(30,30),this.ctxNext=this.canvasNext.getContext("2d"),this.ctxNext.canvas.width=120,this.ctxNext.canvas.height=120,this.ctxNext.scale(30,30)}},{key:"resetGame",value:function(){this.account.reset(),this.board.reset(),this.board.tetromino=new C(this.ctx),this.board.tetromino.setStartPosition()}},{key:"play",value:function(){this.resetGame(),this.animate()}},{key:"moveTetromino",value:function(t){if(m[t.keyCode]){t.preventDefault();var e=m[t.keyCode](this.board.tetromino);if(t.keyCode===v)for(;this.board.valid(e);)this.account.values.score+=S,this.board.tetromino.move(e),e=m[p](this.board.tetromino);else this.board.valid(e)&&(this.board.tetromino.move(e),t.keyCode===p&&(this.account.values.score+=j))}}},{key:"animate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.time.elapsed=t-this.time.start,this.time.elapsed>this.time.level&&(this.time.start=t,!this.board.drop())?this.gameOver():(this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.board.draw(),this.requestId=requestAnimationFrame(this.animate.bind(this)))}},{key:"onChangeLevel",value:function(){this.time.level=Math.max(this.time.level-100,100)}},{key:"gameOver",value:function(){cancelAnimationFrame(this.requestId),this.ctx.fillStyle="black",this.ctx.fillRect(1,3,8,1.2),this.ctx.font="1px Arial",this.ctx.fillStyle="red",this.ctx.fillText("GAME OVER",1.8,4)}}])&&M(e.prototype,n),i&&M(e,i),t}();window.addEventListener("load",(function(){new R}))}]);
//# sourceMappingURL=main.js.map