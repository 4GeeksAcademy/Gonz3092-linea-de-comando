/*! For license information please see vendors~e5bca7e4.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkspectacle_boilerplate=self.webpackChunkspectacle_boilerplate||[]).push([[434],{2312:(e,n,t)=>{n.__esModule=!0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r=u(t(55533)),i=u(t(96540)),s=u(t(5556)),a=(u(t(30583)),t(52958));function u(e){return e&&e.__esModule?e:{default:e}}s.default.any,s.default.func,s.default.node;var c=function(e){function n(t,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,e.call(this,t,r));return i.performAppear=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillAppear?n.componentWillAppear(i._handleDoneAppearing.bind(i,e,n)):i._handleDoneAppearing(e,n)},i._handleDoneAppearing=function(e,n){n.componentDidAppear&&n.componentDidAppear(),delete i.currentlyTransitioningKeys[e];var t=(0,a.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)||i.performLeave(e,n)},i.performEnter=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillEnter?n.componentWillEnter(i._handleDoneEntering.bind(i,e,n)):i._handleDoneEntering(e,n)},i._handleDoneEntering=function(e,n){n.componentDidEnter&&n.componentDidEnter(),delete i.currentlyTransitioningKeys[e];var t=(0,a.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)||i.performLeave(e,n)},i.performLeave=function(e,n){i.currentlyTransitioningKeys[e]=!0,n.componentWillLeave?n.componentWillLeave(i._handleDoneLeaving.bind(i,e,n)):i._handleDoneLeaving(e,n)},i._handleDoneLeaving=function(e,n){n.componentDidLeave&&n.componentDidLeave(),delete i.currentlyTransitioningKeys[e];var t=(0,a.getChildMapping)(i.props.children);t&&t.hasOwnProperty(e)?i.keysToEnter.push(e):i.setState((function(n){var t=o({},n.children);return delete t[e],{children:t}}))},i.childRefs=Object.create(null),i.state={children:(0,a.getChildMapping)(t.children)},i}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},n.prototype.componentDidMount=function(){var e=this.state.children;for(var n in e)e[n]&&this.performAppear(n,this.childRefs[n])},n.prototype.componentWillReceiveProps=function(e){var n=(0,a.getChildMapping)(e.children),t=this.state.children;for(var o in this.setState({children:(0,a.mergeChildMappings)(t,n)}),n){var r=t&&t.hasOwnProperty(o);!n[o]||r||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(var i in t){var s=n&&n.hasOwnProperty(i);!t[i]||s||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},n.prototype.componentDidUpdate=function(){var e=this,n=this.keysToEnter;this.keysToEnter=[],n.forEach((function(n){return e.performEnter(n,e.childRefs[n])}));var t=this.keysToLeave;this.keysToLeave=[],t.forEach((function(n){return e.performLeave(n,e.childRefs[n])}))},n.prototype.render=function(){var e=this,n=[],t=function(t){var o=e.state.children[t];if(o){var s="string"!=typeof o.ref,a=e.props.childFactory(o),u=function(n){e.childRefs[t]=n};a===o&&s&&(u=(0,r.default)(o.ref,u)),n.push(i.default.cloneElement(a,{key:t,ref:u}))}};for(var s in this.state.children)t(s);var a=o({},this.props);return delete a.transitionLeave,delete a.transitionName,delete a.transitionAppear,delete a.transitionEnter,delete a.childFactory,delete a.transitionLeaveTimeout,delete a.transitionEnterTimeout,delete a.transitionAppearTimeout,delete a.component,i.default.createElement(this.props.component,a,n)},n}(i.default.Component);c.displayName="TransitionGroup",c.propTypes={},c.defaultProps={component:"span",childFactory:function(e){return e}},n.default=c,e.exports=n.default},15287:(e,n,t)=>{var o=t(45228),r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,p=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function C(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}function S(){}function k(e,n,t){this.props=e,this.context=n,this.refs=b,this.updater=t||g}C.prototype.isReactComponent={},C.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,n,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=C.prototype;var w=k.prototype=new S;w.constructor=k,o(w,C.prototype),w.isPureReactComponent=!0;var P={current:null},E=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,t){var o,r={},s=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(s=""+n.key),n)E.call(n,o)&&!O.hasOwnProperty(o)&&(r[o]=n[o]);var u=arguments.length-2;if(1===u)r.children=t;else if(1<u){for(var c=Array(u),p=0;p<u;p++)c[p]=arguments[p+2];r.children=c}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===r[o]&&(r[o]=u[o]);return{$$typeof:i,type:e,key:s,ref:a,props:r,_owner:P.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var R=/\/+/g,x=[];function M(e,n,t,o){if(x.length){var r=x.pop();return r.result=e,r.keyPrefix=n,r.func=t,r.context=o,r.count=0,r}return{result:e,keyPrefix:n,func:t,context:o,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function N(e,n,t,o){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var a=!1;if(null===e)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case s:a=!0}}if(a)return t(o,e,""===n?"."+A(e,0):n),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var c=n+A(r=e[u],u);a+=N(r,c,t,o)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=m&&e[m]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),u=0;!(r=e.next()).done;)a+=N(r=r.value,c=n+A(r,u++),t,o);else if("object"===r)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return a}function j(e,n,t){return null==e?0:N(e,"",n,t)}function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function q(e,n){e.func.call(e.context,n,e.count++)}function K(e,n,t){var o=e.result,r=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?I(e,o,t,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,n){return{$$typeof:i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),o.push(e))}function I(e,n,t,o,r){var i="";null!=t&&(i=(""+t).replace(R,"$&/")+"/"),j(e,K,n=M(n,i,o,r)),D(n)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(v(321));return e}var W={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:o};n.Children={map:function(e,n,t){if(null==e)return e;var o=[];return I(e,o,null,n,t),o},forEach:function(e,n,t){if(null==e)return e;j(e,q,n=M(null,null,n,t)),D(n)},count:function(e){return j(e,(function(){return null}),null)},toArray:function(e){var n=[];return I(e,n,null,(function(e){return e})),n},only:function(e){if(!_(e))throw Error(v(143));return e}},n.Component=C,n.Fragment=a,n.Profiler=c,n.PureComponent=k,n.StrictMode=u,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,n.cloneElement=function(e,n,t){if(null==e)throw Error(v(267,e));var r=o({},e.props),s=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=P.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in n)E.call(n,p)&&!O.hasOwnProperty(p)&&(r[p]=void 0===n[p]&&void 0!==c?c[p]:n[p])}var p=arguments.length-2;if(1===p)r.children=t;else if(1<p){c=Array(p);for(var l=0;l<p;l++)c[l]=arguments[l+2];r.children=c}return{$$typeof:i,type:e.type,key:s,ref:a,props:r,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:l,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},n.createElement=T,n.createFactory=function(e){var n=T.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:f,render:e}},n.isValidElement=_,n.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},n.memo=function(e,n){return{$$typeof:h,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return U().useCallback(e,n)},n.useContext=function(e,n){return U().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return U().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return U().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return U().useLayoutEffect(e,n)},n.useMemo=function(e,n){return U().useMemo(e,n)},n.useReducer=function(e,n,t){return U().useReducer(e,n,t)},n.useRef=function(e){return U().useRef(e)},n.useState=function(e){return U().useState(e)},n.version="16.14.0"},21757:(e,n,t)=>{t.d(n,{Kq:()=>c,Ng:()=>$});var o=t(25540),r=t(96540),i=t(5556),s=t.n(i),a=s().shape({trySubscribe:s().func.isRequired,tryUnsubscribe:s().func.isRequired,notifyNestedSubs:s().func.isRequired,isSubscribed:s().func.isRequired}),u=s().shape({subscribe:s().func.isRequired,dispatch:s().func.isRequired,getState:s().func.isRequired});r.forwardRef;const c=function(e){var n;void 0===e&&(e="store");var t=e+"Subscription",i=function(n){(0,o.A)(s,n);var i=s.prototype;function s(t,o){var r;return(r=n.call(this,t,o)||this)[e]=t.store,r}return i.getChildContext=function(){var n;return(n={})[e]=this[e],n[t]=null,n},i.render=function(){return r.Children.only(this.props.children)},s}(r.Component);return i.propTypes={store:u.isRequired,children:s().element.isRequired},i.childContextTypes=((n={})[e]=u.isRequired,n[t]=a,n),i}();var p=t(9417),l=t(58168),f=t(98587),d=t(4146),h=t.n(d),y=t(20311),m=t.n(y),v=t(44363),g=null,b={notify:function(){}};var C=function(){function e(e,n,t){this.store=e,this.parentSub=n,this.onStateChange=t,this.unsubscribe=null,this.listeners=b}var n=e.prototype;return n.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},n.notifyNestedSubs=function(){this.listeners.notify()},n.isSubscribed=function(){return Boolean(this.unsubscribe)},n.trySubscribe=function(){var e,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],n=[],{clear:function(){n=g,e=g},notify:function(){for(var t=e=n,o=0;o<t.length;o++)t[o]()},get:function(){return n},subscribe:function(t){var o=!0;return n===e&&(n=e.slice()),n.push(t),function(){o&&e!==g&&(o=!1,n===e&&(n=e.slice()),n.splice(n.indexOf(t),1))}}}))},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=b)},e}(),S=void 0!==r.forwardRef,k=0,w={};function P(){}function E(e,n){var t,i;void 0===n&&(n={});var s=n,c=s.getDisplayName,d=void 0===c?function(e){return"ConnectAdvanced("+e+")"}:c,y=s.methodName,g=void 0===y?"connectAdvanced":y,b=s.renderCountProp,E=void 0===b?void 0:b,O=s.shouldHandleStateChanges,T=void 0===O||O,_=s.storeKey,R=void 0===_?"store":_,x=s.withRef,M=void 0!==x&&x,D=(0,f.A)(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),N=R+"Subscription",j=k++,A=((t={})[R]=u,t[N]=a,t),q=((i={})[N]=a,i);return function(n){m()((0,v.isValidElementType)(n),"You must pass a component to the function returned by "+g+". Instead received "+JSON.stringify(n));var t=n.displayName||n.name||"Component",i=d(t),s=(0,l.A)({},D,{getDisplayName:d,methodName:g,renderCountProp:E,shouldHandleStateChanges:T,storeKey:R,withRef:M,displayName:i,wrappedComponentName:t,WrappedComponent:n}),a=function(t){function a(e,n){var o;return(o=t.call(this,e,n)||this).version=j,o.state={},o.renderCount=0,o.store=e[R]||n[R],o.propsMode=Boolean(e[R]),o.setWrappedInstance=o.setWrappedInstance.bind((0,p.A)((0,p.A)(o))),m()(o.store,'Could not find "'+R+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+R+'" as a prop to "'+i+'".'),o.initSelector(),o.initSubscription(),o}(0,o.A)(a,t);var u=a.prototype;return u.getChildContext=function(){var e,n=this.propsMode?null:this.subscription;return(e={})[N]=n||this.context[N],e},u.componentDidMount=function(){T&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},u.componentWillReceiveProps=function(e){this.selector.run(e)},u.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},u.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=P,this.store=null,this.selector.run=P,this.selector.shouldComponentUpdate=!1},u.getWrappedInstance=function(){return m()(M,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+g+"() call."),this.wrappedInstance},u.setWrappedInstance=function(e){this.wrappedInstance=e},u.initSelector=function(){var n=e(this.store.dispatch,s);this.selector=function(e,n){var t={run:function(o){try{var r=e(n.getState(),o);(r!==t.props||t.error)&&(t.shouldComponentUpdate=!0,t.props=r,t.error=null)}catch(e){t.shouldComponentUpdate=!0,t.error=e}}};return t}(n,this.store),this.selector.run(this.props)},u.initSubscription=function(){if(T){var e=(this.propsMode?this.props:this.context)[N];this.subscription=new C(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},u.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(w)):this.notifyNestedSubs()},u.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},u.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},u.addExtraProps=function(e){if(!(M||E||this.propsMode&&this.subscription))return e;var n=(0,l.A)({},e);return M&&(n.ref=this.setWrappedInstance),E&&(n[E]=this.renderCount++),this.propsMode&&this.subscription&&(n[N]=this.subscription),n},u.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return(0,r.createElement)(n,this.addExtraProps(e.props))},a}(r.Component);return S&&(a.prototype.UNSAFE_componentWillReceiveProps=a.prototype.componentWillReceiveProps,delete a.prototype.componentWillReceiveProps),a.WrappedComponent=n,a.displayName=i,a.childContextTypes=q,a.contextTypes=A,a.propTypes=A,h()(a,n)}}var O=Object.prototype.hasOwnProperty;function T(e,n){return e===n?0!==e||0!==n||1/e==1/n:e!=e&&n!=n}function _(e,n){if(T(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(var r=0;r<t.length;r++)if(!O.call(n,t[r])||!T(e[t[r]],n[t[r]]))return!1;return!0}var R=t(17375);function x(e){return function(n,t){var o=e(n,t);function r(){return o}return r.dependsOnOwnProps=!1,r}}function M(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function D(e,n){return function(n,t){t.displayName;var o=function(e,n){return o.dependsOnOwnProps?o.mapToProps(e,n):o.mapToProps(e)};return o.dependsOnOwnProps=!0,o.mapToProps=function(n,t){o.mapToProps=e,o.dependsOnOwnProps=M(e);var r=o(n,t);return"function"==typeof r&&(o.mapToProps=r,o.dependsOnOwnProps=M(r),r=o(n,t)),r},o}}const N=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:x((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?x((function(n){return(0,R.zH)(e,n)})):void 0}];const j=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:x((function(){return{}}))}];function A(e,n,t){return(0,l.A)({},t,e,n)}const q=[function(e){return"function"==typeof e?function(e){return function(n,t){t.displayName;var o,r=t.pure,i=t.areMergedPropsEqual,s=!1;return function(n,t,a){var u=e(n,t,a);return s?r&&i(u,o)||(o=u):(s=!0,o=u),o}}}(e):void 0},function(e){return e?void 0:function(){return A}}];function K(e,n,t,o){return function(r,i){return t(e(r,i),n(o,i),i)}}function I(e,n,t,o,r){var i,s,a,u,c,p=r.areStatesEqual,l=r.areOwnPropsEqual,f=r.areStatePropsEqual,d=!1;function h(r,d){var h,y,m=!l(d,s),v=!p(r,i);return i=r,s=d,m&&v?(a=e(i,s),n.dependsOnOwnProps&&(u=n(o,s)),c=t(a,u,s)):m?(e.dependsOnOwnProps&&(a=e(i,s)),n.dependsOnOwnProps&&(u=n(o,s)),c=t(a,u,s)):v?(h=e(i,s),y=!f(h,a),a=h,y&&(c=t(a,u,s)),c):c}return function(r,p){return d?h(r,p):(a=e(i=r,s=p),u=n(o,s),c=t(a,u,s),d=!0,c)}}function L(e,n){var t=n.initMapStateToProps,o=n.initMapDispatchToProps,r=n.initMergeProps,i=(0,f.A)(n,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=t(e,i),a=o(e,i),u=r(e,i);return(i.pure?I:K)(s,a,u,e,i)}function U(e,n,t){for(var o=n.length-1;o>=0;o--){var r=n[o](e);if(r)return r}return function(n,o){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+o.wrappedComponentName+".")}}function W(e,n){return e===n}const $=(B=(H=void 0===F?{}:F).connectHOC,z=void 0===B?E:B,V=H.mapStateToPropsFactories,G=void 0===V?j:V,Y=H.mapDispatchToPropsFactories,J=void 0===Y?N:Y,X=H.mergePropsFactories,Q=void 0===X?q:X,Z=H.selectorFactory,ee=void 0===Z?L:Z,function(e,n,t,o){void 0===o&&(o={});var r=o,i=r.pure,s=void 0===i||i,a=r.areStatesEqual,u=void 0===a?W:a,c=r.areOwnPropsEqual,p=void 0===c?_:c,d=r.areStatePropsEqual,h=void 0===d?_:d,y=r.areMergedPropsEqual,m=void 0===y?_:y,v=(0,f.A)(r,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=U(e,G,"mapStateToProps"),b=U(n,J,"mapDispatchToProps"),C=U(t,Q,"mergeProps");return z(ee,(0,l.A)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:b,initMergeProps:C,pure:s,areStatesEqual:u,areOwnPropsEqual:p,areStatePropsEqual:h,areMergedPropsEqual:m},v))});var F,H,B,z,V,G,Y,J,X,Q,Z,ee},23933:(e,n,t)=>{var o=i(t(96540)),r=i(t(5556));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var n="";if(e.typography.options.googleFonts)return(n=e.typography.options.googleFonts.map((function(e){var n="";return n+=e.name.split(" ").join("+"),n+=":",n+=e.styles.join(",")})).join("|"))?o.default.createElement("link",{href:"//fonts.googleapis.com/css?family="+n,rel:"stylesheet",type:"text/css"}):null};s.propTypes={typography:r.default.object.isRequired},s.displayName="GoogleFont",e.exports=s},30868:(e,n,t)=>{t.d(n,{KE:()=>R});var o=t(71983),r=(t(75624),t(25723),t(64312),t(65903),t(80405)),i=t.n(r),s=t(60984),a=t.n(s),u=t(96540),c=t(22267),p=t(26598),l=t.n(p),f=t(38249),d=t.n(f),h=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")},y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jsx";return(0,o.highlight)(e,o.languages[n])},m=/^((\t|  )+)/gm,v=/\t/g,g=function(e){return e.replace(m,(function(e,n){return n.replace(v,"  ")}))};function b(e,n){var t=window.getSelection();if(1==arguments.length){if(!t.rangeCount)return;var o={},r=(p=t.getRangeAt(0)).cloneRange();return r.selectNodeContents(e),r.setEnd(p.endContainer,p.endOffset),o.end=r.toString().length,r.setStart(p.startContainer,p.startOffset),o.start=o.end-r.toString().length,o.atStart=0===r.startOffset,o.commonAncestorContainer=r.commonAncestorContainer,o.endContainer=r.endContainer,o.startContainer=r.startContainer,o}for(var i,s,u=n.end&&n.end!==n.start,c=0,p=document.createRange(),l=a()(e).select(Node.TEXT_NODE).revisit(!1),f=n.start>e.textContent.length?e.textContent.length:n.start,d=n.end>e.textContent.length?e.textContent.length:n.end,h=n.atStart;i=l.next();){var y=c;if(c+=i.textContent.length,!s&&(h?c>f:c>=f)&&(s=!0,p.setStart(i,f-y),!u)){p.collapse(!0),C(e,p);break}if(u&&c>=d){p.setEnd(i,d-y),C(e,p);break}}}function C(e,n){var t=window.getSelection();e.focus(),t.removeAllRanges(),t.addRange(n)}var S=function(e,n){var t=e.slice(0,n),o=t.lastIndexOf("\n")+1;return t.slice(o)},k=/^\s+/,w=/^(\t|  )*  $/,P=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},O=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},T=function(e,n){var t={};for(var o in e)n.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},_=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},R=function(e){function n(){var t,o;P(this,n);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return t=o=_(this,e.call.apply(e,[this].concat(s))),o.undoStack=[],o.undoOffset=0,o.undoTimestamp=0,o.compositing=!1,o.state={html:""},o.onRef=function(e){o.ref=e},o.getPlain=function(){if(o._innerHTML===o.ref.innerHTML)return o._plain;var e=function(e){return i()(e.replace(/<br>/gm,"\n").replace(/<\/?[^>]*>/gm,""))}(o.ref.innerHTML.replace("\n","<br>"));return o._plain=e,o._innerHTML=o.ref.innerHTML,o._plain},o.recordChange=function(e,n){if(e!==o.undoStack[o.undoStack.length-1]){o.undoOffset>0&&(o.undoStack=o.undoStack.slice(0,-o.undoOffset),o.undoOffset=0);var t=Date.now(),r={plain:e,selection:n};t-o.undoTimestamp<3e3?o.undoStack[o.undoStack.length-1]=r:(o.undoStack.push(r),o.undoStack.length>50&&o.undoStack.shift()),o.undoTimestamp=t}},o.updateContent=function(e){o.compositing||(o.setState({html:y(e,o.props.language)}),o.props.onChange&&o.props.onChange(e))},o.restoreStackState=function(e){var n=o.undoStack[o.undoStack.length-1-e],t=n.plain,r=n.selection;o.selection=r,o.undoOffset=e,o.updateContent(t)},o.undo=function(){var e=o.undoOffset+1;e>=o.undoStack.length||o.restoreStackState(e)},o.redo=function(){var e=o.undoOffset-1;e<0||o.restoreStackState(e)},o.onKeyDown=function(e){if(o.props.onKeyDown&&o.props.onKeyDown(e),9!==e.keyCode||o.props.ignoreTabKey)if(8===e.keyCode){var n=b(o.ref),t=n.start;if(t!==n.end)return;var r=function(e,n){var t=S(e,n);return w.test(t)?2:0}(o.getPlain(),t);if(r<=0)return;for(var i=0;i<r;i++)document.execCommand("delete",!1);e.preventDefault()}else if(13===e.keyCode){var s=b(o.ref).start,a=function(e,n){var t=S(e,n).match(k);return null===t?"":t[0]||""}(o.getPlain(),s);document.execCommand("insertHTML",!1,"\n"+a),e.preventDefault()}else 90!==e.keyCode||e.metaKey===e.ctrlKey||e.altKey||(e.shiftKey?o.redo():o.undo(),e.preventDefault());else document.execCommand("insertHTML",!1,"  "),e.preventDefault()},o.onKeyUp=function(e){if(o.props.onKeyUp&&o.props.onKeyUp(e),91!==e.keyCode&&93!==e.keyCode&&!e.ctrlKey&&!e.metaKey)if(13===e.keyCode&&(o.undoTimestamp=0),o.selection=b(o.ref),37!==e.keyCode&&38!==e.keyCode&&39!==e.keyCode&&40!==e.keyCode){var n=o.getPlain();o.recordChange(n,o.selection),o.updateContent(n)}else o.undoTimestamp=0},o.onCompositionStart=function(e){o.props.onCompositionStart&&o.props.onCompositionStart(e),o.compositing=!0},o.onCompositionEnd=function(e){o.props.onCompositionEnd&&o.props.onCompositionEnd(e),o.compositing=!1},o.onClick=function(e){o.props.onClick&&o.props.onClick(e),o.undoTimestamp=0,o.selection=b(o.ref)},_(o,t)}return O(n,e),n.prototype.componentWillMount=function(){var e=y(g(this.props.code),this.props.language);this.setState({html:e})},n.prototype.componentDidMount=function(){this.recordChange(this.getPlain()),this.undoTimestamp=0},n.prototype.componentWillReceiveProps=function(e){var n=e.code,t=e.language;if(n!==this.props.code||t!==this.props.language){var o=y(g(n),t);this.setState({html:o})}},n.prototype.componentDidUpdate=function(){var e=this.selection;e&&b(this.ref,e)},n.prototype.render=function(){var e=this.props,n=e.contentEditable,t=e.className,o=e.style,r=(e.code,e.ignoreTabKey,e.language,T(e,["contentEditable","className","style","code","ignoreTabKey","language"])),i=this.state.html;return u.createElement("pre",E({},r,{ref:this.onRef,className:h("prism-code",t),style:o,spellCheck:"false",contentEditable:n,onCompositionEnd:n?this.onCompositionEnd:void 0,onCompositionStart:n?this.onCompositionStart:void 0,onKeyDown:n?this.onKeyDown:void 0,onKeyUp:n?this.onKeyUp:void 0,onClick:n?this.onClick:void 0,dangerouslySetInnerHTML:{__html:i}}))},n}(u.Component);R.defaultProps={contentEditable:!0,language:"jsx"};var x={assign:l()},M={objectAssign:"_poly.assign",transforms:{dangerousForOf:!0,dangerousTaggedTemplateString:!0}},D=function(e){return(0,c.pd)(e,M).code},N=function(e,n){return function(t){function o(){return P(this,o),_(this,t.apply(this,arguments))}return O(o,t),o.prototype.componentDidCatch=function(e){n(e)},o.prototype.render=function(){return"function"==typeof e?u.createElement(e,null):e},o}(u.Component)},j=function(e,n){var t=Object.keys(n),o=t.map((function(e){return n[e]}));return(new(Function.prototype.bind.apply(Function,[null].concat(["_poly","React"],t,[e])))).apply(void 0,[x,u].concat(o))},A=u.createElement("style",{dangerouslySetInnerHTML:{__html:"\n.prism-code {\n  display: block;\n  white-space: pre;\n\n  background-color: #1D1F21;\n  color: #C5C8C6;\n\n  padding: 0.5rem;\n  margin: 0;\n\n  box-sizing: border-box;\n  vertical-align: baseline;\n  outline: none;\n  text-shadow: none;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n  word-wrap: normal;\n  word-break: normal;\n  text-align: left;\n  word-spacing: normal;\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n  tab-size: 2;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: hsl(30, 20%, 50%);\n}\n\n.token.punctuation {\n  opacity: .7;\n}\n\n.namespace {\n  opacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol {\n  color: hsl(350, 40%, 70%);\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: hsl(75, 70%, 60%);\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string,\n.token.variable {\n  color: hsl(40, 90%, 60%);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: hsl(350, 40%, 70%);\n}\n\n.token.regex,\n.token.important {\n  color: #e90;\n}\n\n.token.important,\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n\n.token.entity {\n  cursor: help;\n}\n\n.token.deleted {\n  color: red;\n}\n"}}),q=function(){return A},K=d()("live");(function(e){function n(){var t,o;P(this,n);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=o=_(this,e.call.apply(e,[this].concat(i))),o.onChange=function(e){var n=o.props,t=n.scope,r=n.transformCode,i=n.noInline;o.transpile({code:e,scope:t,transformCode:r,noInline:i})},o.onError=function(e){o.setState({error:e.toString()})},o.transpile=function(e){var n=e.code,t=e.scope,r=e.transformCode,i=e.noInline,s=void 0!==i&&i,a={code:r?r(n):n,scope:t},u=function(e){return o.setState({element:void 0,error:e.toString()})},c=function(e){return o.setState(E({},p,{element:e}))},p={unsafeWrapperError:void 0,error:void 0};try{s?(o.setState(E({},p,{element:null})),function(e,n,t){var o=e.code,r=void 0===o?"":o,i=e.scope,s=void 0===i?{}:i;if(!/render\s*\(/.test(r))return t(new SyntaxError("No-Inline evaluations must call `render`."));j(D(r),E({},s,{render:function(e){n(N(e,t))}}))}(a,c,u)):c(function(e,n){var t=e.code,o=void 0===t?"":t,r=e.scope,i=void 0===r?{}:r,s=o.trim().replace(/;$/,""),a=D("("+s+")").trim();return N(j("return "+a,i),n)}(a,u))}catch(e){o.setState(E({},p,{error:e.toString()}))}},_(o,t)}return O(n,e),n.prototype.componentWillMount=function(){var e=this.props,n=e.code,t=e.scope,o=e.transformCode,r=e.noInline;this.transpile({code:n,scope:t,transformCode:o,noInline:r})},n.prototype.componentWillReceiveProps=function(e){var n=e.code,t=e.scope,o=e.noInline,r=e.transformCode;n===this.props.code&&t===this.props.scope&&o===this.props.noInline&&r===this.props.transformCode||this.transpile({code:n,scope:t,transformCode:r,noInline:o})},n.prototype.render=function(){var e=this.props,n=e.children,t=e.className,o=(e.code,e.mountStylesheet),r=(e.noInline,e.transformCode,e.scope,T(e,["children","className","code","mountStylesheet","noInline","transformCode","scope"]));return u.createElement(K.Provider,{value:E({},this.state,{code:this.props.code,onError:this.onError,onChange:this.onChange})},u.createElement("div",E({className:h("react-live",t)},r),o&&u.createElement(q,null),n))},n}(u.Component)).defaultProps={code:"",mountStylesheet:!0,noInline:!1}},38477:(e,n,t)=>{var o=i(t(96540)),r=i(t(5556));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return o.default.createElement("style",{id:"typography.js",dangerouslySetInnerHTML:{__html:e.typography.toString()}})};s.propTypes={typography:r.default.object.isRequired},s.displayName="TypographyStyle",e.exports=s},52958:(e,n,t)=>{n.__esModule=!0,n.getChildMapping=function(e){if(!e)return e;var n={};return o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=e})),n},n.mergeChildMappings=function(e,n){function t(t){return n.hasOwnProperty(t)?n[t]:e[t]}e=e||{},n=n||{};var o={},r=[];for(var i in e)n.hasOwnProperty(i)?r.length&&(o[i]=r,r=[]):r.push(i);var s=void 0,a={};for(var u in n){if(o.hasOwnProperty(u))for(s=0;s<o[u].length;s++){var c=o[u][s];a[o[u][s]]=t(c)}a[u]=t(u)}for(s=0;s<r.length;s++)a[r[s]]=t(r[s]);return a};var o=t(96540)},67503:(e,n,t)=>{var o=i(t(23933)),r=i(t(38477));function i(e){return e&&e.__esModule?e:{default:e}}e.exports={GoogleFont:o.default,TypographyStyle:r.default}},96540:(e,n,t)=>{e.exports=t(15287)}}]);