(self.webpackChunkkas_ui=self.webpackChunkkas_ui||[]).push([[7920,2556],{12556:function(t,e,n){var r;r=function(t,e,n,r){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},r(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),i=n(6),c=n(1),s=n(3),l=n(7),f=null,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={currentLocation:null},e}return o(e,t),e.getDerivedStateFromProps=function(t,e){var n,r,o,u;return n={location:e.currentLocation,nextLocation:t.location,watchOnlyPathname:t.watchOnlyPathname},r=n.location,o=n.nextLocation,u=n.watchOnlyPathname,null!==r&&o!==r&&(u&&r.pathname===o.pathname||(!l.shouldPrevent(o)||l.hasBeenPrevented(o)?f=a({},r):l.prevent(o))),{currentLocation:t.location}},e.prototype.render=function(){var t=this.props.children;return u.createElement(s.default.Provider,{value:f},t)},e.propTypes={watchOnlyPathname:i.bool,children:i.node.isRequired},e.defaultProps={watchOnlyPathname:!1},e}(u.Component);e.getLastLocation=function(){return f},e.setLastLocation=function(t){f=t},e.default=c.withRouter(p)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0).createContext(null);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(5);e.withLastLocation=r.default;var o=n(2);e.LastLocationProvider=o.default;var a=n(8);e.useLastLocation=a.default;var u=n(9);e.RedirectWithoutLastLocation=u.default},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),a=n(1),u=n(2);e.default=function(t){var e=function(e){return o.createElement(t,r({lastLocation:u.getLastLocation()},e))};return e.displayName="WithLastLocation("+function(t){return t.displayName||t.name||"Component"}(t)+")",a.withRouter(e)}},function(t,e){t.exports=n},function(t,e,n){"use strict";var r=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var o=["key","pathname","search","hash"],a=[];e.prevent=function(t){t.state;var e=r(t,["state"]);a.push(e)},e.hasBeenPrevented=function(t){return a.some((function(e){return n=t,r=e,o.every((function(t){return n[t]===r[t]}));var n,r}))},e.shouldPrevent=function(t){return Boolean(t.state&&t.state.preventLastLocation)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3);e.default=function(){return r.useContext(o.default)}},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)},o=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),u=n(1),i=n(10);e.default=function(t){var e,n=t.to,c=o(t,["to"]);return e="string"==typeof n?i.createLocation(n,{preventLastLocation:!0}):r({},n,{state:r({preventLastLocation:!0},n.state)}),a.createElement(u.Redirect,r({},c,{to:e}))}},function(t,e){t.exports=r}])},t.exports=r(n(75418),n(98068),n(45697),n(37236))}}]);
//# sourceMappingURL=7920.5cec4399.js.map