(window["webpackJsonpcaro-viet-nam"]=window["webpackJsonpcaro-viet-nam"]||[]).push([[0],{13:function(e,n,r){},14:function(e,n,r){"use strict";r.r(n);var t=r(0),i=r.n(t),a=r(7),u=r.n(a),l=(r(13),r(1)),s=r(2),o=r(4),c=r(3),j=r(5),f=function(e){return i.a.createElement("button",{className:e.winner?"square square-winner":"square",onClick:function(){return e.onClick()}},e.value)},m=function(e){function n(){return Object(l.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(j.a)(n,e),Object(s.a)(n,[{key:"renderSquare",value:function(e,n){var r=this;return i.a.createElement(f,{key:20*e+n,value:this.props.squares[e][n],winner:this.props.winnerSquares[e][n],onClick:function(){return r.props.handleClick(e,n)}})}},{key:"render",value:function(){var e=this,n=Array(20).fill(null);return i.a.createElement("div",null,n.map((function(r,t){return i.a.createElement("div",{className:"board-row",key:t},n.map((function(n,r){return e.renderSquare(t,r)})))})))}}]),n}(t.Component),v=function(e){function n(e){var r;return Object(l.a)(this,n),(r=Object(o.a)(this,Object(c.a)(n).call(this,e))).state={isAscending:!1},r}return Object(j.a)(n,e),Object(s.a)(n,[{key:"changeSoft",value:function(){this.setState({isAscending:!this.state.isAscending})}},{key:"render",value:function(){var e=this,n=this.state.isAscending,r=this.props,t=r.listHistory,a=r.stepNumber,u=r.jumpTo,l=t.map((function(e,n){var r=n?"value: ".concat(e.value,"; index: (").concat(e.i," : ").concat(e.j,")"):"Go to game start";return i.a.createElement("li",{key:n},i.a.createElement("button",{className:a===n?"btn-active":"",onClick:function(){return u(n)}},r))}));return i.a.createElement("div",null,i.a.createElement("ol",null,n?l:l.reverse()),i.a.createElement("button",{onClick:function(){return e.changeSoft()}},n?"ascending":"decreasing"))}}]),n}(t.Component),h=function(e){function n(e){var r;return Object(l.a)(this,n),(r=Object(o.a)(this,Object(c.a)(n).call(this,e))).state={history:[{value:null,i:null,j:null}],stepNumber:0,xIsNext:!0,winner:null,winnerSquares:Array(20).fill(Array(20).fill(null)),squares:Array(20).fill(Array(20).fill(null))},r}return Object(j.a)(n,e),Object(s.a)(n,[{key:"handleClick",value:function(e,n){var r=this.state,t=r.winner,i=r.history,a=r.stepNumber,u=r.xIsNext,l=r.squares,s=i.slice(0,a+1),o=[];if(l.map((function(e){return o.push(e.slice())})),!t&&!o[e][n]){o[e][n]=u?"X":"O";var c=p(e,n,o);this.setState({history:s.concat({value:u?"X":"O",i:e,j:n}),xIsNext:!u,winner:c[e][n],winnerSquares:c,stepNumber:s.length,squares:o})}}},{key:"jumpTo",value:function(e){var n=this.state.history,r=Array(20).fill(null).map((function(){return Array(20).fill(null)}));if(e>0)for(var t=1;t<=e;t++){var i=n[t];r[i.i][i.j]=i.value}var a=n[e],u=p(a.i||0,a.j||0,r);this.setState({squares:r,stepNumber:e,xIsNext:e%2===0,winner:u[a.i||0][a.j||0],winnerSquares:u})}},{key:"render",value:function(){var e,n=this,r=this.state,t=r.history,a=r.winner,u=r.xIsNext,l=r.squares,s=r.stepNumber,o=r.winnerSquares;return e=a?"Winner: "+a:"Next player: "+(u?"X":"O"),i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(m,{squares:l,winnerSquares:o,handleClick:function(e,r){return n.handleClick(e,r)}})),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null,e),i.a.createElement(v,{listHistory:t,stepNumber:s,jumpTo:function(e){return n.jumpTo(e)}})))}}]),n}(t.Component),p=function(e,n,r){var t=Array(20).fill(null).map((function(){return Array(20).fill(null)})),i=0,a=r[e][n],u={i:e,j:n-4<0?0:n-4};if(!a)return t;for(;u.j<=n;){for(var l={i:u.i,j:u.j};i<5;){if(!b(l)||a!==r[l.i][l.j]){i=0;break}l.j++,i++}if(5===i){var s={i:u.i,j:u.j-1},o={i:u.i,j:u.j+5};if(d(r,s,o,u)){for(;i>0;)t[u.i][u.j]=r[e][n],u.j++,i--;return t}i=0}u.j++}for(u={i:e-4<0?0:e-4,j:n};u.i<=e;){for(var c={i:u.i,j:u.j};i<5;){if(!b(c)||r[e][n]!==r[c.i][c.j]){i=0;break}c.i++,i++}if(5===i){var j={i:u.i-1,j:u.j},f={i:u.i+5,j:u.j};if(d(r,j,f,u)){for(;i>0;)t[u.i][u.j]=r[e][n],u.i++,i--;return t}i=0}u.i++}for(u=19-e<4||n<4?19-e<n?{i:19,j:n-19+e}:{i:e+n,j:0}:{i:e+4,j:n-4};u.j<=n;){for(var m={i:u.i,j:u.j};i<5;){if(!b(m)||r[e][n]!==r[m.i][m.j]){i=0;break}m.i--,m.j++,i++}if(5===i){var v={i:u.i+1,j:u.j-1},h={i:u.i-5,j:u.j+5};if(d(r,v,h,u)){for(;i>0;)t[u.i][u.j]=r[e][n],u.i--,u.j++,i--;return t}i=0}u.i--,u.j++}for(u=e<4||n<4?e<n?{i:0,j:n-e}:{i:e-n,j:0}:{i:e-4,j:n-4};u.j<=n;){for(var p={i:u.i,j:u.j};i<5;){if(!b(p)||r[e][n]!==r[p.i][p.j]){i=0;break}p.i++,p.j++,i++}if(5===i){var y={i:u.i-1,j:u.j-1},k={i:u.i+5,j:u.j+5};if(d(r,y,k,u)){for(;i>0;)t[u.i][u.j]=r[e][n],u.i++,u.j++,i--;return t}i=0}u.i++,u.j++}return t},b=function(e){return e.i>=0&&e.i<20&&e.j>=0&&e.j<20},d=function(e,n,r,t){if(n.i>=0&&n.i<20&&r.i>=0&&n.j<20){var i=e[n.i][n.j],a=e[r.i][r.j],u=e[t.i][t.j];if(i&&a&&u!==i&&u!==a)return!1}return!0};var y=function(){return i.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,n,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ace2ff48.chunk.js.map