!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({34:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n=t.name,r=t.check;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.actived=!1,this.element=document.getElementById(this.name),r&&(this.check=r)}var t,n,i;return t=e,(n=[{key:"change",value:function(e){!0===e&&!1===this.actived?(this.actived=!0,this.element.removeAttribute("disabled")):!1===e&&!0===this.actived&&(this.actived=!1,this.element.setAttribute("disabled","disabled"))}},{key:"check",value:function(e){return!0}},{key:"process",value:function(e){var t=e.selectedCounter;this.change(null!==t&&this.check(t))}}])&&r(t.prototype,n),i&&r(t,i),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){var n=t.minimal,r=t.name,i=t.initial;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.counter=document.getElementById(r),this.initial=i||0,this.minimal=n||0,this.name=r,this.value=parseInt(localStorage.getItem(this.name))||this.initial,this.bind()}var t,n,r;return t=e,(n=[{key:"bind",value:function(){this.counter&&(this.counter.value=this.value.toString())}},{key:"set",value:function(e){this.value=e,this.save(),this.bind()}},{key:"changeValue",value:function(e){this.set(this.value+e)}},{key:"reset",value:function(){this.set(this.initial)}},{key:"save",value:function(){localStorage.setItem(this.name,this.value.toString())}}])&&a(t.prototype,n),r&&a(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n=t.increaseStateByProduction,r=t.initialState,i=t.minimalProduction,a=t.name;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=a,this.production=new o({minimal:i,name:"production_".concat(a)}),this.state=new o({initial:r||0,name:"state_".concat(a)}),n&&(this.increaseStateByProduction=n)}var t,n,r;return t=e,(n=[{key:"bind",value:function(){this.production.bind(),this.state.bind()}},{key:"increaseStateByProduction",value:function(){this.state.changeValue(this.production.value)}},{key:"reset",value:function(){this.production.reset(),this.state.reset()}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n=t.modifiers,r=t.resources;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modifiers=n,this.resources=r,this.selectedElement=null,this.selectedCounter=null}var t,n,r;return t=e,(n=[{key:"clickChange",value:function(e){var t=parseInt(e.dataset.change);this.selectedCounter.changeValue(t),this.refreshModifiers()}},{key:"clickProduce",value:function(){for(var e=0,t=Object.values(this.resources);e<t.length;e++)t[e].increaseStateByProduction();this.refreshModifiers()}},{key:"clickReset",value:function(){for(var e=0,t=Object.values(this.resources);e<t.length;e++)t[e].reset();this.refreshModifiers()}},{key:"clickResource",value:function(e){null!==this.selectedElement&&this.selectedElement.classList.remove("resource--selectable__outline"),this.selectedElement=e,this.selectedElement.classList.add("resource--selectable__outline");var t=e.dataset,n=t.type,r=t.resource;this.selectedCounter=this.resources[r][n],this.refreshModifiers()}},{key:"refreshModifiers",value:function(){var e,t=s(this.modifiers);try{for(t.s();!(e=t.n()).done;)e.value.process(this)}catch(e){t.e(e)}finally{t.f()}}},{key:"registerHandler",value:function(e,t){var n=this;document.querySelectorAll(e).forEach((function(e){e.addEventListener("click",(function(){return n[t](e)}))}))}}])&&f(t.prototype,n),r&&f(t,r),e}();new Promise((function(e,t){var n=new Image;n.onload=function(){n.width>0&&n.height>0?e():t()},n.onerror=function(){t()},n.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="})).catch((function(){document.body.classList.remove("webp")})),document.addEventListener("DOMContentLoaded",(function(){var e,t,n,r,a,o,u,s=[new i({name:"modifier-plus-ten"}),new i({name:"modifier-plus-five"}),new i({name:"modifier-plus-one"}),new i({name:"modifier-minus-ten",check:function(e){var t=e.minimal;return e.value>=10+t}}),new i({name:"modifier-minus-five",check:function(e){var t=e.minimal;return e.value>=5+t}}),new i({name:"modifier-minus-one",check:function(e){var t=e.minimal;return e.value>=1+t}})],l=(e=new c({name:"points",initialState:20,increaseStateByProduction:function(){return 0}}),t=new c({name:"gold",minimalProduction:-5,increaseStateByProduction:function(){this.state.changeValue(this.production.value+e.state.value)}}),n=new c({name:"steel"}),r=new c({name:"titan"}),a=new c({name:"plant"}),o=new c({name:"heat"}),u=new c({name:"energy",increaseStateByProduction:function(){o.state.changeValue(this.state.value),this.state.set(this.production.value)}}),{points:e,gold:t,steel:n,titan:r,plant:a,energy:u,heat:o}),f=new h({modifiers:s,resources:l});f.registerHandler("[data-resource]","clickResource"),f.registerHandler("[data-produce]","clickProduce"),f.registerHandler("[data-reset]","clickReset"),f.registerHandler("[data-change]","clickChange")}))}});