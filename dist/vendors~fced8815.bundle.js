/*! For license information please see vendors~fced8815.bundle.js.LICENSE.txt */
(self.webpackChunkspectacle_boilerplate=self.webpackChunkspectacle_boilerplate||[]).push([[106],{98953:function(r,n,t){var e;r=t.nmd(r),function(){var u=n,a=(r&&r.exports,"object"==typeof t.g&&t.g);a.global!==a&&a.window;var o="A range’s `stop` value must be greater than or equal to the `start` value.",i="Invalid code point value. Code points range from U+000000 to U+10FFFF.",s=55296,f=56319,h=56320,l=57343,c=/\\x00([^0123456789]|$)/g,p={},g=p.hasOwnProperty,v=function(r,n){for(var t=-1,e=r.length;++t<e;)n(r[t],t)},d=p.toString,b=function(r){return"[object Array]"==d.call(r)},m=function(r){return"number"==typeof r||"[object Number]"==d.call(r)},w=function(r,n){var t=String(r);return t.length<n?("0000"+t).slice(-n):t},F=function(r){return Number(r).toString(16).toUpperCase()},S=[].slice,C=function(r,n){for(var t,e,u=0,a=r.length;u<a;){if(t=r[u],e=r[u+1],n>=t&&n<e)return n==t?e==t+1?(r.splice(u,2),r):(r[u]=n+1,r):n==e-1?(r[u+1]=n,r):(r.splice(u,2,t,n,n+1,e),r);u+=2}return r},x=function(r,n,t){if(t<n)throw Error(o);for(var e,u,a=0;a<r.length;){if(e=r[a],u=r[a+1]-1,e>t)return r;if(n<=e&&t>=u)r.splice(a,2);else{if(n>=e&&t<u)return n==e?(r[a]=t+1,r[a+1]=u+1,r):(r.splice(a,2,e,n,t+1,u+1),r);if(n>=e&&n<=u)r[a+1]=n;else if(t>=e&&t<=u)return r[a]=t+1,r;a+=2}}return r},y=function(r,n){var t,e,u=0,a=null,o=r.length;if(n<0||n>1114111)throw RangeError(i);for(;u<o;){if(t=r[u],e=r[u+1],n>=t&&n<e)return r;if(n==t-1)return r[u]=n,r;if(t>n)return r.splice(null!=a?a+2:0,0,n,n+1),r;if(n==e)return n+1==r[u+2]?(r.splice(u,4,t,r[u+3]),r):(r[u+1]=n+1,r);a=u,u+=2}return r.push(n,n+1),r},E=function(r,n){for(var t,e,u=0,a=r.slice(),o=n.length;u<o;)a=(t=n[u])==(e=n[u+1]-1)?y(a,t):R(a,t,e),u+=2;return a},R=function(r,n,t){if(t<n)throw Error(o);if(n<0||n>1114111||t<0||t>1114111)throw RangeError(i);for(var e,u,a=0,s=!1,f=r.length;a<f;){if(e=r[a],u=r[a+1],s){if(e==t+1)return r.splice(a-1,2),r;if(e>t)return r;e>=n&&e<=t&&(u>n&&u-1<=t?(r.splice(a,2),a-=2):(r.splice(a-1,2),a-=2))}else{if(e==t+1||e==t)return r[a]=n,r;if(e>t)return r.splice(a,0,n,t+1),r;if(n>=e&&n<u&&t+1<=u)return r;n>=e&&n<u||u==n?(r[a+1]=t+1,s=!0):n<=e&&t+1>=u&&(r[a]=n,r[a+1]=t+1,s=!0)}a+=2}return s||r.push(n,t+1),r},U=function(r,n){var t=0,e=r.length,u=r[t],a=r[e-1];if(e>=2&&(n<u||n>a))return!1;for(;t<e;){if(u=r[t],a=r[t+1],n>=u&&n<a)return!0;t+=2}return!1},j=function(r){return!r.length},A=function(r){return 2==r.length&&r[0]+1==r[1]},D=function(r){for(var n,t,e=0,u=[],a=r.length;e<a;){for(n=r[e],t=r[e+1];n<t;)u.push(n),++n;e+=2}return u},O=Math.floor,k=function(r){return parseInt(O((r-65536)/1024)+s,10)},I=function(r){return parseInt((r-65536)%1024+h,10)},H=String.fromCharCode,L=function(r){return 9==r?"\\t":10==r?"\\n":12==r?"\\f":13==r?"\\r":45==r?"\\x2D":92==r?"\\\\":36==r||r>=40&&r<=43||46==r||47==r||63==r||r>=91&&r<=94||r>=123&&r<=125?"\\"+H(r):r>=32&&r<=126?H(r):r<=255?"\\x"+w(F(r),2):"\\u"+w(F(r),4)},N=function(r){return r<=65535?L(r):"\\u{"+r.toString(16).toUpperCase()+"}"},$=function(r){var n,t=r.length,e=r.charCodeAt(0);return e>=s&&e<=f&&t>1?(n=r.charCodeAt(1),1024*(e-s)+n-h+65536):e},_=function(r){var n,t,e="",u=0,a=r.length;if(A(r))return L(r[0]);for(;u<a;)e+=(n=r[u])==(t=r[u+1]-1)?L(n):n+1==t?L(n)+L(t):L(n)+"-"+L(t),u+=2;return"["+e+"]"},q=function(r){if(1==r.length)return r;for(var n=-1,t=-1;++n<r.length;){var e=r[n],u=e[1],a=u[0],o=u[1];for(t=n;++t<r.length;){var i=r[t],s=i[1],f=s[0],h=s[1];a==f&&o==h&&2===s.length&&(A(i[0])?e[0]=y(e[0],i[0][0]):e[0]=R(e[0],i[0][0],i[0][1]-1),r.splice(t,1),--t)}}return r},B=function(r){if(!r.length)return[];for(var n,t,e,u,a,o,i=0,s=[],f=r.length;i<f;){n=r[i],t=r[i+1]-1,e=k(n),u=I(n),a=k(t);var c=(o=I(t))==l,p=!1;e==a||u==h&&c?(s.push([[e,a+1],[u,o+1]]),p=!0):s.push([[e,e+1],[u,57344]]),!p&&e+1<a&&(c?(s.push([[e+1,a+1],[h,o+1]]),p=!0):s.push([[e+1,a],[h,57344]])),p||s.push([[a,a+1],[h,o+1]]),i+=2}return function(r){for(var n,t,e,u,a,o,i=[],s=[],f=!1,h=-1,l=r.length;++h<l;)if(n=r[h],t=r[h+1]){for(e=n[0],u=n[1],a=t[0],o=t[1],s=u;a&&e[0]==a[0]&&e[1]==a[1];)s=A(o)?y(s,o[0]):R(s,o[0],o[1]-1),e=(n=r[++h])[0],u=n[1],a=(t=r[h+1])&&t[0],o=t&&t[1],f=!0;i.push([e,f?s:u]),f=!1}else i.push(n);return q(i)}(s)},M=function(r,n,t){if(t)return function(r){var n,t,e="",u=0,a=r.length;if(A(r))return N(r[0]);for(;u<a;)e+=(n=r[u])==(t=r[u+1]-1)?N(n):n+1==t?N(n)+N(t):N(n)+"-"+N(t),u+=2;return"["+e+"]"}(r);var e=[],u=function(r){for(var n,t,e=[],u=[],a=[],o=[],i=0,c=r.length;i<c;)n=r[i],t=r[i+1]-1,n<s?(t<s&&a.push(n,t+1),t>=s&&t<=f&&(a.push(n,s),e.push(s,t+1)),t>=h&&t<=l&&(a.push(n,s),e.push(s,56320),u.push(h,t+1)),t>l&&(a.push(n,s),e.push(s,56320),u.push(h,57344),t<=65535?a.push(57344,t+1):(a.push(57344,65536),o.push(65536,t+1)))):n>=s&&n<=f?(t>=s&&t<=f&&e.push(n,t+1),t>=h&&t<=l&&(e.push(n,56320),u.push(h,t+1)),t>l&&(e.push(n,56320),u.push(h,57344),t<=65535?a.push(57344,t+1):(a.push(57344,65536),o.push(65536,t+1)))):n>=h&&n<=l?(t>=h&&t<=l&&u.push(n,t+1),t>l&&(u.push(n,57344),t<=65535?a.push(57344,t+1):(a.push(57344,65536),o.push(65536,t+1)))):n>l&&n<=65535?t<=65535?a.push(n,t+1):(a.push(n,65536),o.push(65536,t+1)):o.push(n,t+1),i+=2;return{loneHighSurrogates:e,loneLowSurrogates:u,bmp:a,astral:o}}(r),a=u.loneHighSurrogates,o=u.loneLowSurrogates,i=u.bmp,c=u.astral,p=!j(a),g=!j(o),d=B(c);return n&&(i=E(i,a),p=!1,i=E(i,o),g=!1),j(i)||e.push(_(i)),d.length&&e.push(function(r){var n=[];return v(r,(function(r){var t=r[0],e=r[1];n.push(_(t)+_(e))})),n.join("|")}(d)),p&&e.push(_(a)+"(?![\\uDC00-\\uDFFF])"),g&&e.push("(?:[^\\uD800-\\uDBFF]|^)"+_(o)),e.join("|")},P=function(r){return arguments.length>1&&(r=S.call(arguments)),this instanceof P?(this.data=[],r?this.add(r):this):(new P).add(r)};P.version="1.4.2";var z=P.prototype;!function(r,n){var t;for(t in n)g.call(n,t)&&(r[t]=n[t])}(z,{add:function(r){var n=this;return null==r?n:r instanceof P?(n.data=E(n.data,r.data),n):(arguments.length>1&&(r=S.call(arguments)),b(r)?(v(r,(function(r){n.add(r)})),n):(n.data=y(n.data,m(r)?r:$(r)),n))},remove:function(r){var n=this;return null==r?n:r instanceof P?(n.data=function(r,n){for(var t,e,u=0,a=r.slice(),o=n.length;u<o;)a=(t=n[u])==(e=n[u+1]-1)?C(a,t):x(a,t,e),u+=2;return a}(n.data,r.data),n):(arguments.length>1&&(r=S.call(arguments)),b(r)?(v(r,(function(r){n.remove(r)})),n):(n.data=C(n.data,m(r)?r:$(r)),n))},addRange:function(r,n){var t=this;return t.data=R(t.data,m(r)?r:$(r),m(n)?n:$(n)),t},removeRange:function(r,n){var t=this,e=m(r)?r:$(r),u=m(n)?n:$(n);return t.data=x(t.data,e,u),t},intersection:function(r){var n=this,t=r instanceof P?D(r.data):r;return n.data=function(r,n){for(var t,e=0,u=n.length,a=[];e<u;)t=n[e],U(r,t)&&a.push(t),++e;return function(r){for(var n,t=-1,e=r.length,u=e-1,a=[],o=!0,i=0;++t<e;)if(n=r[t],o)a.push(n),i=n,o=!1;else if(n==i+1){if(t!=u){i=n;continue}o=!0,a.push(n+1)}else a.push(i+1,n),i=n;return o||a.push(n+1),a}(a)}(n.data,t),n},contains:function(r){return U(this.data,m(r)?r:$(r))},clone:function(){var r=new P;return r.data=this.data.slice(0),r},toString:function(r){var n=M(this.data,!!r&&r.bmpOnly,!!r&&r.hasUnicodeFlag);return n?n.replace(c,"\\0$1"):"[]"},toRegExp:function(r){var n=this.toString(r&&-1!=r.indexOf("u")?{hasUnicodeFlag:!0}:null);return RegExp(n,r||"")},valueOf:function(){return D(this.data)}}),z.toArray=z.valueOf,void 0===(e=function(){return P}.call(n,t,n,r))||(r.exports=e)}()}}]);