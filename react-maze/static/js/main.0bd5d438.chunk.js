(this["webpackJsonpreact-job-test"]=this["webpackJsonpreact-job-test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},,,,,,,,function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){},function(e,n,A){"use strict";A.r(n);var t={};A.r(t),A.d(t,"footer",(function(){return u})),A.d(t,"title",(function(){return s})),A.d(t,"win",(function(){return o})),A.d(t,"lose",(function(){return a})),A.d(t,"restartButton",(function(){return g}));var r={};A.r(r),A.d(r,"footer",(function(){return j})),A.d(r,"title",(function(){return d})),A.d(r,"win",(function(){return l})),A.d(r,"lose",(function(){return C})),A.d(r,"restartButton",(function(){return O}));A(1);var c=A(5),i=A.n(c),u=(A(15),A(16),A(17),A(18),"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 10 \u0445\u043e\u0434\u043e\u0432"),s="\u041b\u0430\u0431\u0438\u0440\u0438\u043d\u0442",o="\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!",a="\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438:(",g="\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430",j="Choose position after 10 steps",d="The maze",l="You won!",C="You lose:(",O="Restart",b=A(4),f=A(3),h="GAME_IS_FINISHED",E="GAME_IS_REFRESHED",B="GAME_IS_ANSWERED",M="GAME_NEXT_STEP",w="GAME_DEFINE_CORRECT_ANSWER",S="GAME_COMPARE_ANSWERS",x="MENU_TOGGLE",F="MENU_CHANGE_LANGUAGE",R={isFinished:!1,startPoint:Math.ceil(9*Math.random()),currentStep:0,currentPoint:null,correctAnswer:null,answered:null,isAnswerCorrect:null,directionsArray:[]};var m={showMenu:!1,language:"ru"};var J=Object(b.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h:return Object(f.a)(Object(f.a)({},e),{},{isFinished:!0});case E:return Object(f.a)(Object(f.a)({},R),{},{startPoint:Math.ceil(9*Math.random())});case B:return Object(f.a)(Object(f.a)({},e),{},{answered:n.index+1});case M:return Object(f.a)(Object(f.a)({},e),{},{currentStep:n.nextIndex,currentPoint:n.nextPos,directionsArray:n.newDirectionsArray});case w:return Object(f.a)(Object(f.a)({},e),{},{correctAnswer:n.correctAnswer});case S:return Object(f.a)(Object(f.a)({},e),{},{isAnswerCorrect:n.isAnswerCorrect});default:return Object(f.a)({},e)}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return Object(f.a)(Object(f.a)({},e),{},{showMenu:n.showMenu});case F:return Object(f.a)(Object(f.a)({},e),{},{language:n.language});default:return Object(f.a)({},e)}}}),Q=A(8),k="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):b.c,v=Object(b.d)(J,k(Object(b.a)(Q.a)));var D=function(){var e;switch(v.getState().menu.language){case"ru":e=t;break;case"en":e=r;break;default:e=t}return e},p=A(2),V=A(0);var I=Object(p.b)((function(e){return{language:e.menu.language}}))((function(e){return Object(V.jsx)("div",{className:"HeaderTitle",children:Object(V.jsx)("h3",{children:D().title})})}));A(26);function K(e){return{type:x,showMenu:!e}}A(27);var y=Object(p.b)((function(e){return{language:e.menu.language}}),(function(e){return{changeLanguage:function(n){return e(function(e){return{type:F,language:e}}(n))}}}))((function(e){var n=["HeaderMenuItem"];return e.selector===e.language&&n.push("active"),Object(V.jsx)("img",{src:e.src,alt:e.language,className:n.join(" "),onClick:function(){return e.changeLanguage(e.selector)}})})),P=function(e){return Object(V.jsxs)("div",{className:"HeaderMenu",children:[Object(V.jsx)(y,{src:"data:image/png;base64,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",selector:"ru"}),Object(V.jsx)(y,{src:"data:image/png;base64,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",selector:"en"})]})};A(28);var G=Object(p.b)((function(e){return{language:e.menu.language}}))((function(e){return Object(V.jsx)("div",{className:"HeaderDescription",children:Object(V.jsx)("h3",{children:D().footer})})})),N=function(e){return Object(V.jsxs)("div",{className:"Header",children:[Object(V.jsx)(I,{}),Object(V.jsx)(P,{}),Object(V.jsx)(G,{})]})},U=(A(29),A(30),function(e){return Object(V.jsxs)("div",{className:"RowTableTitle",children:[Object(V.jsx)("span",{children:"A"}),Object(V.jsx)("span",{children:"B"}),Object(V.jsx)("span",{children:"C"})]})}),T=(A(31),function(e){return Object(V.jsxs)("div",{className:"ColumnTableTitle",children:[Object(V.jsx)("span",{children:"1"}),Object(V.jsx)("span",{children:"2"}),Object(V.jsx)("span",{children:"3"})]})}),X=(A(32),A(33),A(10));function H(e){return function(n,A){var t;A().game.isFinished&&!A().game.answered&&(n(function(e){return{type:B,index:e}}(e)),n((t=A().game.answered===A().game.correctAnswer,{type:S,isAnswerCorrect:t})),setTimeout((function(){n(K(A().menu.showMenu))}),2500))}}function L(){return function(e,n){var A=n().game.currentPoint?n().game.currentPoint:n().game.startPoint,t=Object(X.a)(n().game.directionsArray),r=[{up:[1,2,3]},{down:[7,8,9]},{left:[1,4,7]},{right:[3,6,9]}],c=[{up:-3},{down:3},{left:-1},{right:1}],i=(c=c.filter((function(e,n){var t=Object.keys(r[n]);return!r[n][t].includes(A)})))[Math.floor(Math.random()*c.length)],u=Object.keys(i)[0],s=A+i[u],o=n().game.currentStep+1;t.push(u),e(function(e,n,A){return{type:M,nextIndex:e,nextPos:n,newDirectionsArray:A}}(o,s,t)),10===o&&e({type:w,correctAnswer:s})}}function W(){return function(e,n){e(K(n().menu.showMenu)),e({type:E})}}var q=Object(p.b)((function(e){return{correctAnswer:e.game.correctAnswer,answered:e.game.answered,isAnswerCorrect:e.game.isAnswerCorrect}}),(function(e){return{playerClicked:function(n){return e(H(n))}}}))((function(e){var n=null;return e.answered&&(e.isAnswerCorrect?n=e.answered===e.index+1?Object(V.jsx)("span",{children:"\ud83d\udc4d"}):n:(n=e.answered===e.index+1?Object(V.jsx)("span",{children:"\ud83d\udc4e"}):n,n=e.correctAnswer===e.index+1?Object(V.jsx)("span",{children:"*"}):n)),Object(V.jsxs)("div",{className:"FieldCell",onClick:function(){return e.playerClicked(e.index)},children:[e.children,n]})}));var Y=Object(p.b)((function(e){return{startPoint:e.game.startPoint}}))((function(e){var n=new Array(9).fill("");return Object(V.jsx)("div",{className:"Field",children:n.map((function(n,A){return Object(V.jsx)(q,{index:A,children:A+1===e.startPoint?Object(V.jsx)("img",{src:"data:image/png;base64,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",alt:"start"}):null},A)}))})})),Z=function(e){return Object(V.jsxs)("section",{className:"Table",children:[Object(V.jsx)(U,{}),Object(V.jsx)(T,{}),Object(V.jsx)(Y,{})]})};A(34),A(35);var z=Object(p.b)((function(e){return{directionsArray:e.game.directionsArray}}))((function(e){var n=["FooterCell"];return e.index+1===e.currentStep&&n.push("active"),Object(V.jsx)("div",{className:n.join(" "),children:e.index<e.currentStep?Object(V.jsx)("img",{className:e.directionsArray?e.directionsArray[e.index]:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAQAAADbJyoPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBBsREychxGtxAAABiklEQVRo3u3Zv0rDQBzA8W9rxVqHCi4uPoCDQ3EQBXHTSUcfwsVBsOgiDr6Ag6LQSV/BtxB8ASdHB1H6ZzA549g/uUu9NpffIffNloPwSS4kFwKhUCgUCvnVTG5HKrPLEXVeUdInBWu8kdDmhFlpCuzzTUJCxwfOARGJL5w+xgPOIEacM4wR5oxiRDlpjCBHhxHj6DFCHBNGhGPG/JlT0exbZp2qJUWxQck4usAlcE1ke4ZLPBERW2/KeF2mmKwt2mMOO+nW4dSWs0PPESaha8txibHmuMVYclxjrDjuMUZO2e7uzqkaFxynn3EyGKjRpOELBqrM+4JRPPDsB0bR4pyeDxhFiyaf6YHiMUZK8ZgMStGYTIqubbqOnrsxdyza6Vd4cUS5HUfRLRUb7FkvO39Y5TBj0hX3nPE1+QzblbUgj7mhXhQkG1M4xYwRoJgwIhQ9Roiiw4hR0hhByihGlDKMEaYMYsQpfYwHFNjkY1pKfj8y3mlT4ZGr4l6HWZWYE/z0CYVCodB/6Rd0c6a808DMxAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNC0yN1QxNDoxOTozOSswMzowMLKW9VYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDQtMjdUMTQ6MTk6MzkrMDM6MDDDy03qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAABJRU5ErkJggg==",alt:"arrow"}):null})}));var _=Object(p.b)((function(e){return{isFinished:e.game.isFinished,currentStep:e.game.currentStep}}),(function(e){return{gameIsFinished:function(){return e({type:h})},gameMakeStep:function(){return e(L())}}}))((function(e){var n=new Array(10).fill("");return e.isFinished||setTimeout((function(){e.currentStep>9?e.gameIsFinished():e.gameMakeStep()}),1e3),Object(V.jsx)("div",{className:"Footer",children:n.map((function(n,A){return Object(V.jsx)(z,{currentStep:e.currentStep,index:A},A)}))})}));A(36);var $=Object(p.b)((function(e){return{isAnswerCorrect:e.game.isAnswerCorrect,language:e.menu.language}}),(function(e){return{restartGame:function(){return e(W())}}}))((function(e){return Object(V.jsxs)("div",{className:"Menu",children:[Object(V.jsx)("div",{children:e.isAnswerCorrect?D().win:D().lose}),Object(V.jsx)("button",{onClick:e.restartGame,children:D().restartButton})]})}));var ee=Object(p.b)((function(e){return{showMenu:e.menu.showMenu}}))((function(e){var n=Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(Z,{}),Object(V.jsx)(_,{})]});return e.showMenu&&(n=Object(V.jsx)($,{})),Object(V.jsx)("div",{className:"Layout",children:Object(V.jsxs)("main",{className:"Container",children:[Object(V.jsx)(N,{}),n]})})}));var ne=function(){return Object(V.jsx)(ee,{})};i.a.render(Object(V.jsx)(p.a,{store:v,children:Object(V.jsx)(ne,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.0bd5d438.chunk.js.map