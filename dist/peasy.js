!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.peasy=t():n.peasy=t()}(this,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=6)}([function(n,t,e){var r=e(5);function i(n){return!r.autoPromiseWrap||void 0!==n&&"function"==typeof n.then?n:Promise.resolve(n)}var o={autoWrapInitializationResult:n=>i(n),autoWrapRulesResult:n=>(r.autoPromiseWrap&&(Array.isArray(n)&&(n=Promise.resolve(n)),void 0===n&&(n=Promise.resolve([])),"function"!=typeof n.then&&(n=Promise.resolve(n))),n),autoWrapValidationCompleteResult:n=>i(n),autoWrapValidationResult:n=>i(n),autoWrapRuleValidationCompleteResult:n=>i(n)};n.exports=o},function(n,t,e){var r=e(2),i=e(3),o=e(4),a=e(0),u=function(){"use strict";function n(n,t){return function(e){return new Promise((e,r)=>{n.apply(this,t.concat(function(n,t){if(n)return r(n);e(t)}))})}}var t=function(n){if(n=n||{},!(this instanceof t))return new t(n.onInitialization,n.getRules,n.onValidationSuccess);this._onInitialization||(this._onInitialization=n._onInitialization||function(n,t){return t?t():Promise.resolve()}),this._getRules||(this._getRules=n._getRules||function(n,t){return t?t(null,[]):Promise.resolve([])}),this._onValidationSuccess||(this._onValidationSuccess=n._onValidationSuccess||function(n,t){return t?t():Promise.resolve()})};return t.prototype={constructor:t,getErrors:function(t,e){var r=this,i=r.arguments||{},u=Object.keys(i).map(n=>i[n]).concat([e]),s=r._getRules.bind(r),c=r._onValidationSuccess.bind(r),l=function(n){return new o(n).validate()};t&&(s=n(s,u),c=n(c,u),l=function(n){return new Promise((t,e)=>{new o(n).validate(function(r){if(r)return e(r);t(n)})})});var f=function(){var n=s.apply(r,u);return(n=a.autoWrapRulesResult(n)).then(n=>(Array.isArray(n)||(n=[n]),n))}().then(function(n){return l(n)}).then(function(n){var t=n.filter(function(n){return!n.valid}).map(function(n){return n.errors});return[].concat.apply([],t)}).then(n=>t?t(null,n):n).catch(n=>t?t(n):Promise.reject(n));if(!t)return f},execute:function(t){var e=this,o={},u=e.arguments||{},s=Object.keys(u).map(n=>u[n]).concat([o]),c=e._onInitialization.bind(e),l=e._onValidationSuccess.bind(e),f=function(n){return Promise.resolve(new r(!1,null,n))};t&&(c=n(c,s),l=n(l,s));var d=function(){var n=c.apply(e,s);return a.autoWrapInitializationResult(n)}().then(function(){if(t)return new Promise((n,t)=>{e.getErrors((t,e)=>n(e),o)});return e.getErrors(null,o)}).then(function(n){if(n.length>0)return f(n);try{var t=l.apply(e,s);return(t=a.autoWrapValidationCompleteResult(t)).then(n=>Promise.resolve(new r(!0,n,null))).catch(p)}catch(n){return p(n)}}).then(function(n){return t?t(null,n):n}).catch(n=>t?t(n):Promise.reject(n));if(!t)return d;function p(n){return n instanceof i?Promise.resolve(new r(!1,null,n.errors)):Promise.reject(n)}}},t.extend=function(n){var e=(n=n||{}).params||[],r=n.functions||{},i=function(){var n=this;n.arguments=arguments,e.forEach(function(t,e){n[t]=n.arguments[e]})};return(i.prototype=new t)._onInitialization=r._onInitialization||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null):Promise.resolve()},i.prototype._getRules=r._getRules||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null,[]):Promise.resolve([])},i.prototype._onValidationSuccess=r._onValidationSuccess||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null):Promise.resolve()},i},t.executeAll=function(n,t){Array.isArray(n)||(n=[n]);var e=n.length;if(e<1)return t?t():Promise.resolve();if(!t)return Promise.all(n.map(n=>n.execute()));var r=0,i=[];function o(n,o){if(n)return t(n,i);r++,i.push(o),r===e&&t(null,i)}n.forEach(function(n){n.execute(o)})},t}();n.exports=u},function(n,t){var e=function(){"use strict";var n=function(t,e,r){if(!(this instanceof n))return new n(t,e,r);this.success=t,this.value=e,this.errors=r};return n}();n.exports=e},function(n,t){var e=function(n){this.message=n,this.errors=[]};e.prototype=new Error,n.exports=e},function(n,t){var e=function(){"use strict";var n=function(t){if(!(this instanceof n))return new n(t);this.rules=t};return n.prototype.validate=function(n){var t=this,e=t.rules.map(n=>n.validate.bind(n));n&&(e=e.map(n=>(function(n){return function(){return new Promise((t,e)=>{n(function(n,r){if(n)return e(n);t(r)})})}})(n)));var r=Promise.all(e.map(n=>n())).then(()=>n?n(null,t.rules):Promise.resolve(t.rules)).catch(t=>n?n(t):Promise.reject(t));if(!n)return r},n}();n.exports=e},function(n,t){var e=function(){"use strict";var n=function(n){};return n.autoPromiseWrap=!1,n}();n.exports=e},function(n,t,e){var r=e(7),i=e(1),o=e(2),a=e(8),u=e(3),s=e(5);n.exports={BusinessService:r,Command:i,ExecutionResult:o,Rule:a,ServiceException:u,Configuration:s}},function(n,t,e){var r=e(1),i=e(0),o=function(){"use strict";var n=function(t){if(!(this instanceof n))return new n(t);this.dataProxy=t};return n.extendService=function(t,e){return e.service=t,n.extend(e)},n.extend=function(t){(t=t||{}).params=t.params||["dataProxy"],t.functions=t.functions||{};var e=function(){var e=this;e.arguments=arguments,n.call(this),t.params.forEach(function(n,t){e[n]=e.arguments[t]})},r=t.service||n;e.prototype=new r;var i=Object.keys(n.prototype);return Object.keys(t.functions).forEach(function(n){-1===i.indexOf(n)&&console.warn("The method: '"+n+"' is not an overridable method of BusinessService"),e.prototype[n]=t.functions[n]}),{createCommand:function t(r){return(r=r||{}).service=e,n.createCommand(r),{createCommand:t,service:e}},service:e}},n.createCommand=function(n){function t(n){return n.charAt(0).toUpperCase()+n.slice(1)}if(!(n=n||{}).name)throw new Error("A value for name must be supplied");if(!n.service)throw new Error("A function for the service argument must be supplied");var e=n.name,o="_on"+t(e)+"Initialization",a="_getRulesFor"+t(e),u="_"+e.replace("Command",""),s="_"+e+"Params",c=n.functions||{},l=n.service;return l.prototype[o]=c._onInitialization||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null):Promise.resolve()},l.prototype[a]=c._getRules||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null,[]):Promise.resolve([])},l.prototype[u]=c._onValidationSuccess||function(){var n=arguments[Object.keys(arguments).length-1];return n&&"function"==typeof n?n(null):Promise.resolve()},l.prototype[s]=n.params||[],l.prototype[e]=function(){var n=this,t=arguments,e=new r({_onInitialization:function(){var t=n[o].apply(this,arguments);return i.autoWrapInitializationResult(t)},_getRules:function(){var t=n[a].apply(this,arguments);return i.autoWrapRulesResult(t)},_onValidationSuccess:function(){var t=n[u].apply(this,arguments);return i.autoWrapValidationCompleteResult(t)}});return n[s].forEach(function(n,r){e[n]=t[r]}),Object.keys(n).forEach(t=>{e[t]=n[t]}),e.arguments=arguments,e},l},Object.defineProperty(n.prototype,"constructor",{enumerable:!1,value:n}),n.createCommand({name:"getByIdCommand",service:n,params:["id"],functions:{_onValidationSuccess:function(n,t,e){return e?this.dataProxy.getById(this.id,e):this.dataProxy.getById(this.id)}}}),n.createCommand({name:"getAllCommand",service:n,functions:{_onValidationSuccess:function(n,t){return t?this.dataProxy.getAll(t):this.dataProxy.getAll()}}}),n.createCommand({name:"insertCommand",service:n,params:["data"],functions:{_onValidationSuccess:function(n,t,e){return e?this.dataProxy.insert(n,e):this.dataProxy.insert(n)}}}),n.createCommand({name:"updateCommand",service:n,params:["data"],functions:{_onValidationSuccess:function(n,t,e){return e?this.dataProxy.update(n,e):this.dataProxy.update(n)}}}),n.createCommand({name:"destroyCommand",service:n,params:["id"],functions:{_onValidationSuccess:function(n,t,e){return e?this.dataProxy.destroy(n,e):this.dataProxy.destroy(n)}}}),n}();n.exports=o},function(n,t,e){var r=e(4),i=e(0),o=function(){"use strict";var n=function(t){if(!(this instanceof n))return new n;t=t||{},this.association=t.association||null,this.errors=[],this.ifInvalidThenFn=null,this.ifValidThenFn=null,this.ifValidThenGetRulesFn=null,this.validSuccessors=[],this.invalidSuccessors=[],this.valid=!0};return n.getAllRulesFrom=function(n,t){var e={};return t?function(n,t){Array.isArray(n)||(n=[n]);var r=n.length;if(r<1&&t)return t(null,[]);var i=0,o=[];function a(n,e){if(n)return t(n,o);Array.isArray(e)?e.forEach(function(n){o.push(n)}):o.push(e),++i===r&&t(null,o)}n.forEach(n=>{n._getRules(e,a)})}(n,t):Promise.all(n.map(n=>n._getRules(e))).then(n=>[].concat.apply([],n))},n.ifAllValid=function(t){return{thenGetRules:function(e){var r=new n;return r._onValidate=function(n){return n?n():Promise.resolve()},r.validSuccessors=t,r.ifValidThenGetRulesFn=e,r}}},n.extend=function(t){if((t=t||{}).functions=t.functions||{},"function"!=typeof t.functions._onValidate)throw new Error("An onValidate method needs to be supplied to execute!");t.association=t.association||null,t.params=t.params||[];var e=function(){var e=this;e.arguments=arguments,n.call(e,{association:t.association}),t.params.forEach(function(n,t){e[n]=e.arguments[t]})};return(e.prototype=new n)._onValidate=t.functions._onValidate,e},n.prototype={constructor:n,_invalidate:function(n){var t=this;this.valid=!1,Array.isArray(n)||(n=[n]),n.forEach(function(n){"string"==typeof n?t.errors.push({association:t.association,message:n}):t.errors.push(n)})},_unInvalidate:function(){this.valid=!0,this.errors=[]},_onValidate:function(n){},validate:function(n){var t=this;t.errors=[];var e=t.arguments||{},o=Object.keys(e).map(n=>t.arguments[n]);if(n){return this._onValidate.apply(t,o.concat(t=>{if(t)return n(t);u(n)}))}var a=this._onValidate.apply(t,o);return(a=i.autoWrapValidationResult(a)).then(u);function u(n){if(t.valid){if(t.ifValidThenFn&&t.ifValidThenFn(),t.validSuccessors.length>0)return function(n,t,e){if(e)return s(n,t,()=>{if(n.ifValidThenGetRulesFn)return c(n,t,e);e()});return s(n,t).then(()=>{if(n.ifValidThenGetRulesFn)return c(n,t)})}(t,t.validSuccessors,n);if(t.ifValidThenGetRulesFn)return c(t,t.validSuccessors,n)}else if(t.ifInvalidThenFn&&t.ifInvalidThenFn(),t.invalidSuccessors.length>0)return s(t,t.invalidSuccessors,n);n&&n()}function s(n,t,e){return e?new r(t).validate(function(r){if(r)return e(r);l(n).ifAnyInvalid(t),e()}):new r(t).validate().then(()=>l(n).ifAnyInvalid(t))}function c(n,t,e){return t.filter(function(n){return!n.valid}).length>0?e?e():Promise.resolve():e?n.ifValidThenGetRulesFn(function(t,r){return Array.isArray(r)||(r=[r]),s(n,r,e)}):n.ifValidThenGetRulesFn().then(t=>(Array.isArray(t)||(t=[t]),s(n,t)))}function l(n){return{ifAnyInvalid:function(t){const e=t.filter(function(n){return!n.valid});e.length>0?e.forEach(function(t){n._invalidate(t.errors)}):n._unInvalidate()}}}},ifValidThenValidate:function(n){return Array.isArray(n)||(n=[n]),this.validSuccessors=n,this},ifValidThenExecute:function(n){return this.ifValidThenFn=n,this},ifInvalidThenValidate:function(n){return Array.isArray(n)||(n=[n]),this.invalidSuccessors=n,this},ifInvalidThenExecute:function(n){return this.ifInvalidThenFn=n,this},ifValidThenGetRules:function(n){return this.ifValidThenGetRulesFn=n,this}},n}();n.exports=o}])});