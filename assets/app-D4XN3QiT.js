import"./modulepreload-polyfill-P2Xu9kJm.js";var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e),f=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")}),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O={},k=[],ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function A(e,t){for(var n in t)e[n]=t[n];return e}function ne(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function re(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?p.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return ie(e,o,r,i,null)}function ie(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++h,__i:-1,__u:0};return i==null&&m.vnode!=null&&m.vnode(a),a}function j(e){return e.children}function ae(e,t){this.props=e,this.context=t}function oe(e,t){if(t==null)return e.__?oe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?oe(e):null}function se(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=A({},t);a.__v=t.__v+1,m.vnode&&m.vnode(a),ve(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??oe(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,be(r,a,i),t.__e=t.__=null,a.__e!=n&&ce(a)}}function ce(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ce(e)}function le(e){(!e.__d&&(e.__d=!0)&&g.push(e)&&!ue.__r++||_!=m.debounceRendering)&&((_=m.debounceRendering)||v)(ue)}function ue(){try{for(var e,t=1;g.length;)g.length>t&&g.sort(y),e=g.shift(),t=g.length,se(e)}finally{g.length=ue.__r=0}}function de(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_=r&&r.__k||k,v=t.length;for(c=fe(n,t,_,c,v),d=0;d<v;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&_[p.__i]||O,p.__i=d,g=ve(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&Ce(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),4&p.__u?(c=pe(p,c,e),f.__e&&(f.__e=null)):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function fe(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=ie(null,o,null,null,null):te(o)?o=e.__k[a]=ie(j,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=ie(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=me(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=oe(s)),we(s,s));return r}function pe(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=pe(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=oe(e)),t=n.insertBefore(e.__e,t||null));do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function me(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function he(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||ee.test(t)?n:n+`px`}function ge(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||he(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||he(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(C,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[S]=r[S]:(n[S]=w,e.addEventListener(t,a?E:T,a)):e.removeEventListener(t,a?E:T,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function _e(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[x]==null)t[x]=w++;else if(t[x]<n[S])return;return n(m.event?m.event(t):t)}}}function ve(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,h,g,_,v,y,b,x,S,C,w,T,E,D=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=m.__b)&&u(t);n:if(typeof D==`function`){d=o.length;try{if(y=t.props,b=D.prototype&&D.prototype.render,x=(u=D.contextType)&&r[u.__c],S=u?x?x.props.value:u.__:r,n.__c?v=(f=t.__c=n.__c).__=f.__E:(b?t.__c=f=new D(y,S):(t.__c=f=new ae(y,S),f.constructor=D,f.render=Te),x&&x.sub(f),f.state||(f.state={}),f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),b&&f.__s==null&&(f.__s=f.state),b&&D.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=A({},f.__s)),A(f.__s,D.getDerivedStateFromProps(y,f.__s))),h=f.props,g=f.state,f.__v=t,p)b&&D.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),b&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(b&&D.getDerivedStateFromProps==null&&y!==h&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(y,S),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(y,f.__s,S)){t.__v!=n.__v&&(f.props=y,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),k.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&o.push(f),s=oe(n);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(y,f.__s,S),b&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(h,g,_)})}if(f.context=S,f.props=y,f.__P=e,f.__e=!1,C=m.__r,w=0,b)f.state=f.__s,f.__d=!1,C&&C(t),u=f.render(f.props,f.state,f.context),k.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,C&&C(t),u=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++w<25);f.state=f.__s,f.getChildContext!=null&&(r=A(A({},r),f.getChildContext())),b&&!p&&f.getSnapshotBeforeUpdate!=null&&(_=f.getSnapshotBeforeUpdate(h,g)),T=u!=null&&u.type===j&&u.key==null?xe(u.props.children):u,s=de(e,te(T)?T:[T],t,n,r,i,a,o,s,c,l),f.base=t.__e,t.__u&=-161,f.__h.length&&o.push(f),v&&(f.__E=f.__=null)}catch(e){if(o.length=d,t.__v=null,c||a!=null){if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a!=null&&(a[a.indexOf(s)]=null),t.__e=s}else if(a!=null)for(E=a.length;E--;)ne(a[E])}else t.__e=n.__e;t.__k??=n.__k||[],e.then||ye(t),m.__e(e,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Se(n.__e,t,n,r,i,a,o,c,l);return(u=m.diffed)&&u(t),128&t.__u?void 0:s}function ye(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(ye))}function be(e,t,n){for(var r=0;r<n.length;r++)Ce(n[r],n[++r],n[++r]);m.__c&&m.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){m.__e(e,t.__v)}})}function xe(e){return typeof e!=`object`||!e||e.__b>0?e:te(e)?e.map(xe):e.constructor===void 0?A({},e):null}function Se(e,t,n,r,i,a,o,s,c){var l,u,d,f,h,g,_,v=n.props||O,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((h=a[l])&&`setAttribute`in h==!!b&&(b?h.localName==b:h.nodeType==3)){e=h,a[l]=null;break}}if(e==null){if(b==null)return document.createTextNode(y);e=document.createElementNS(i,b,y.is&&y),s&&=(m.__m&&m.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a=b==`textarea`&&y.defaultValue!=null?null:a&&p.call(e.childNodes),!s&&a!=null)for(v={},l=0;l<e.attributes.length;l++)v[(h=e.attributes[l]).name]=h.value;for(l in v)h=v[l],l==`dangerouslySetInnerHTML`?d=h:l==`children`||l in y||l==`value`&&`defaultValue`in y||l==`checked`&&`defaultChecked`in y||ge(e,l,null,h,i);for(l in y)h=y[l],l==`children`?f=h:l==`dangerouslySetInnerHTML`?u=h:l==`value`?g=h:l==`checked`?_=h:s&&typeof h!=`function`||v[l]===h||ge(e,l,h,v[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),de(t.type==`template`?e.content:e,te(f)?f:[f],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&oe(n,0),s,c),a!=null)for(l=a.length;l--;)ne(a[l]);s&&b!=`textarea`||(l=`value`,b==`progress`&&g==null?e.removeAttribute(`value`):g!=null&&(g!==e[l]||b==`progress`&&!g||b==`option`&&g!=v[l])&&ge(e,l,g,v[l],i),l=`checked`,_!=null&&_!=e[l]&&ge(e,l,_,v[l],i))}return e}function Ce(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){m.__e(e,n)}}function we(e,t,n){var r,i;if(m.unmount&&m.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Ce(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){m.__e(e,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&we(r[i],t,n||typeof e.type!=`function`);n||ne(e.__e),e.__c=e.__=e.__e=void 0}function Te(e,t,n){return this.constructor(e,n)}function Ee(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),m.__&&m.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],ve(t,e=(!r&&n||t).__k=re(j,null,[e]),i||O,O,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?p.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),be(a,e,o),e.props.children=null}function De(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,le(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+D++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}p=k.slice,m={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},h=0,ae.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=A({},this.state);typeof e==`function`&&(e=e(A({},n),this.props)),e&&A(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),le(this))},ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),le(this))},ae.prototype.render=j,g=[],v=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y=function(e,t){return e.__v.__b-t.__v.__b},ue.__r=0,b=Math.random().toString(8),x=`__d`+b,S=`__a`+b,C=/(PointerCapture)$|Capture$/i,w=0,T=_e(!1),E=_e(!0),D=0;var M=e=>Array.from(e),N=e=>{let t=0;for(let n of e)t++;return t},Oe=e=>/^\s$/u.test(e),ke=e=>/^[\n\v\f\r\u0085\u2028\u2029]$/u.test(e),Ae=e=>/^\p{L}$/u.test(e),je=e=>/^\p{N}$/u.test(e),Me=e=>/^\p{Lu}$/u.test(e),P=e=>e.replace(/^[\p{Zs}\t]+|[\p{Zs}\t]+$/gu,``),Ne=e=>e.trim(),Pe=e=>e.replace(/\s+$/u,``),Fe=e=>e.replace(/^\s+/u,``);function Ie(e,t){let n=[],r=``;for(let i of e)t(i)?(r&&n.push(r),r=``):r+=i;return r&&n.push(r),n}function Le(e,t){if(t.length>e.length)return!1;for(let n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function Re(e,t){return e.length===t.length&&Le(e,t)}function ze(e,t){for(let n=0;n<Math.min(e.length,t.length);n++)if(e[n]!==t[n])return e[n]-t[n];return e.length-t.length}var Be=e=>Oe(e)||e===`,`||e===`-`;function Ve(e){return Ie(F(e.toLowerCase()),Be)}function F(e){return e.normalize(`NFC`).replaceAll(`ё`,`е`).replaceAll(`Ё`,`Е`)}var He=[[`капуста`,`Капуста белокочанная`],[`лук`,`Лук репчатый`],[`рис`,`Рис сухой`],[`гречка`,`Гречка, сухая`],[`греча`,`Гречка, сухая`],[`макароны`,`Макароны, сухие`],[`картофель`,`Картофель`],[`картошка`,`Картофель`],[`морковь`,`Морковь`],[`свёкла`,`Свёкла`],[`свекла`,`Свёкла`],[`помидор`,`Помидор`],[`томат`,`Помидор`],[`огурец`,`Огурец`],[`яблоко`,`Яблоко`],[`банан`,`Банан`],[`апельсин`,`Апельсин`],[`груша`,`Груша`],[`курица`,`Куриная грудка`],[`филе`,`Куриная грудка`],[`говядина`,`Говядина`],[`свинина`,`Свинина`],[`яйцо`,`Яйцо куриное`],[`яйца`,`Яйцо куриное`],[`молоко`,`Молоко 2,5%`],[`кефир`,`Кефир 2,5%`],[`творог`,`Творог 5%`],[`сыр`,`Сыр твёрдый (Российский)`],[`хлеб`,`Хлеб пшеничный`],[`масло`,`Масло сливочное`],[`сахар`,`Сахар`],[`мёд`,`Мёд`],[`мед`,`Мёд`],[`овсянка`,`Овсяные хлопья, сухие`],[`каша`,`Овсянка на воде`],[`кофе`,`Кофе чёрный`],[`капучино`,`Капучино`],[`чай`,`Чай чёрный`],[`лосось`,`Лосось`],[`горбуша`,`Горбуша, сырая`],[`йогурт`,`Йогурт натуральный 3,2%`],[`сметана`,`Сметана 15%`],[`колбаса`,`Колбаса Докторская`],[`сосиски`,`Сосиски`],[`фасоль`,`Фасоль красная, сухая`],[`чечевица`,`Чечевица, сухая`],[`кукуруза`,`Кукуруза, варёная`],[`горошек`,`Горошек зелёный`],[`перец`,`Перец болгарский`],[`шпинат`,`Шпинат`],[`салат`,`Салат листовой`],[`грибы`,`Шампиньоны`],[`шампиньоны`,`Шампиньоны`],[`тунец`,`Тунец консервированный в собственном соку`],[`креветки`,`Креветки, варёные`],[`индейка`,`Индейка филе`],[`печень`,`Печень куриная`],[`лаваш`,`Лаваш тонкий`],[`перловка`,`Перловка, сухая`],[`булгур`,`Булгур, сухой`],[`кускус`,`Кускус, варёный`],[`киноа`,`Киноа, варёная`],[`изюм`,`Изюм`],[`финики`,`Финики`],[`шоколад`,`Шоколад горький 70%`],[`печенье`,`Печенье`],[`орехи`,`Ореховая смесь`],[`миндаль`,`Миндаль`],[`авокадо`,`Авокадо`],[`хлебцы`,`Хлебцы`],[`пельмени`,`Пельмени`],[`сырники`,`Сырники`],[`борщ`,`Борщ`],[`плов`,`Плов`],[`пицца`,`Пицца`],[`бургер`,`Бургер`],[`вино`,`Вино сухое`],[`пиво`,`Пиво`]];function Ue(e){let t=Ve(e);if(t.length!==1||N(t[0])<3)return null;let n=t[0],r=He.find(([e])=>F(e)===n);if(r)return r[1];let i=He.find(([e])=>{let t=F(e);return t.startsWith(n)||pt(t,n)||ot(t,n)});return i?i[1]:null}var We=class{name;folded;words;length;matchWords;chars;allChars;cooking;constructor(e){this.name=e,this.folded=F(e.toLowerCase()),this.words=Ie(this.folded,Be),this.matchWords=this.words.filter(e=>!Ge.has(e)),this.chars=this.matchWords.map(M),this.allChars=this.words.map(M),this.cooking=this.chars.map(Ye).filter(e=>e!==null),this.length=N(e)}},Ge=new Set([`сырой`,`сырая`,`сырое`,`сырые`,`сухой`,`сухая`,`сухое`,`сухие`]),Ke=[[`варен`,`отварн`,`сварен`],[`жарен`,`обжарен`,`поджарен`],[`запечен`,`печен`],[`тушен`],[`гриль`],[`копчен`,`сырокопчен`,`варено-копчен`],[`маринован`],[`солен`,`засолен`,`малосол`],[`квашен`],[`сушен`,`вялен`],[`консервирован`],[`заморожен`],[`паров`],[`фри`]],qe=new Set([``,`ая`,`ый`,`ое`,`ые`,`ой`,`ых`,`ую`,`ым`,`ом`,`ого`,`ей`,`ие`,`ий`]),Je=Ke.map(e=>e.map(M));function Ye(e){let t=Je.findIndex(t=>t.some(t=>{if(!Le(e,t))return!1;let n=e.slice(t.length);return n[0]===`н`&&(n=n.slice(1)),qe.has(n.join(``))}));return t<0?null:t}var Xe=class{text;lastComplete;folded;words;spellings;saysRaw;cooking;constructor(e,t){this.text=e,this.lastComplete=t,this.folded=F(Pe(e).toLowerCase()),this.words=Ie(this.folded,Be),this.saysRaw=this.words.some(e=>Ge.has(e)),this.cooking=new Set(this.words.map(e=>Ye(M(e))).filter(e=>e!==null));let n=this.words.map(e=>ut(e).map(M)),r=this.words[this.words.length-1];if(!t&&r!==void 0&&N(r)>=3&&n.length>0){let e=[...lt].filter(([e])=>e.startsWith(r)&&e!==r).flatMap(([,e])=>e);n[n.length-1]=n[n.length-1].concat(e.map(M))}this.spellings=n}};function Ze(e,t){let n=M(t);if(e.matchWords.includes(t)||lt.has(t))return!0;if(e.chars.some(e=>e.length>n.length&&Le(e,n))||[...lt.keys()].some(e=>N(e)>n.length&&e.startsWith(t)))return!1;let r=ut(t).map(M);return e.chars.some(e=>nt(e,r,1))}function Qe(e,t){return et(e,t)!==null}function $e(e,t){let n=et(e,t);if(n===null)return!1;for(let t=n;t<e.length;t++)if(e[t]!==`,`&&e[t]!==` `)return!1;return!0}function et(e,t){let n=0,r=0;for(;r<t.length;){if(n===e.length)return null;if(e[n]===t[r])n++,r++;else if(e[n]===`,`)n++;else if(t[r]===`,`)r++;else return null}return n}function tt(e,t){if(Qe(e.folded,t.folded))return 0;let n=t.spellings,r=t.saysRaw?e.allChars:e.chars;if(n.length===0||n.length>r.length)return null;let i=r.map(()=>!1);levels:for(let e=0;e<=2;e++){i.fill(!1);for(let a=0;a<n.length;a++){let o=n[a],s=a===n.length-1&&!t.lastComplete,c=r.findIndex((t,n)=>!i[n]&&(s?rt(t,o,e):nt(t,o,e)));if(c<0)continue levels;i[c]=!0}return e}return null}function nt(e,t,n){let r=Ye(e);return r!==null&&t.some(e=>Ye(e)===r)?!0:t.some(t=>Re(e,t)||mt(e,t)||n>=1&&st(e,t)?!0:n>=2&&t.length>=4&&gt(e,t))}function rt(e,t,n){if(t.some(t=>Le(e,t)))return!0;let r=Ye(e);if(r!==null&&t.some(e=>Ye(e)===r||Je[r].some(t=>Le(t,e))))return!0;let i=t[0];if(mt(e,i)||n>=1&&st(e,i))return!0;if(n<2||i.length<4)return!1;for(let t of[i.length-1,i.length,i.length+1])if(t>0&&t<=e.length&&gt(e.slice(0,t),i))return!0;return!1}function it(e){return at(N(e))}function at(e){return e<5?e:Math.max(4,Math.ceil(e*.6))}function ot(e,t){return st(M(e),M(t))}function st(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;return n>=4&&n>=Math.min(at(e.length),at(t.length))&&e.length-n<=4&&t.length-n<=4}var ct={филе:[`грудка`],грудка:[`филе`],филешка:[`грудка`],кура:[`курица`],курочка:[`курица`],курятина:[`курица`],индюшка:[`индейка`],индюшатина:[`индейка`],свининка:[`свинина`],говядинка:[`говядина`],телятина:[`говядина`],крылышки:[`крылья`],крылья:[`крылышки`],бедрышки:[`бедро`],бедрышко:[`бедро`],ножки:[`голень`],сёмга:[`лосось`],семга:[`лосось`],лосось:[`сёмга`],рыбка:[`рыба`],сосиска:[`сосиски`],сарделька:[`сардельки`],котлетка:[`котлета`],греча:[`гречка`],гречечка:[`гречка`],рисик:[`рис`],овсяночка:[`овсянка`],геркулес:[`овсянка`],кашка:[`каша`],пшёнка:[`пшено`],пшенка:[`пшено`],макарошки:[`макароны`],паста:[`макароны`],спагетти:[`макароны`],вермишель:[`макароны`],хлебушек:[`хлеб`],булочка:[`булка`],лавашик:[`лаваш`],картошка:[`картофель`],картофан:[`картофель`],картошечка:[`картофель`],пюрешка:[`пюре`],помидор:[`томат`],томат:[`помидор`],помидорка:[`помидор`],огурчик:[`огурец`],морковка:[`морковь`],свеколка:[`свёкла`],лучок:[`лук`],чесночок:[`чеснок`],перчик:[`перец`],капустка:[`капуста`],кабачок:[`цукини`],цукини:[`кабачок`],грибочки:[`грибы`],шампиньон:[`грибы`],яблочко:[`яблоко`],бананчик:[`банан`],апельсинка:[`апельсин`],мандаринка:[`мандарин`],ягодки:[`ягоды`],яйца:[`яйцо`],яички:[`яйцо`],яичко:[`яйцо`],творожок:[`творог`],кефирчик:[`кефир`],молочко:[`молоко`],сметанка:[`сметана`],сырочек:[`сыр`],йогуртик:[`йогурт`],маслице:[`масло`],сахарок:[`сахар`],медок:[`мёд`],шоколадка:[`шоколад`],печенька:[`печенье`],печеньки:[`печенье`],конфетка:[`конфеты`],мороженка:[`мороженое`],орешки:[`орехи`],чаёк:[`чай`],чаек:[`чай`],кофеёк:[`кофе`],кофеек:[`кофе`],каппучино:[`капучино`],капуччино:[`капучино`],супчик:[`суп`],борщик:[`борщ`],салатик:[`салат`],гамбургер:[`бургер`],сендвич:[`сэндвич`],бутер:[`бутерброд`],пицца:[`пицца`]},lt=(()=>{let e=new Map;for(let[t,n]of Object.entries(ct)){let r=F(t);e.set(r,(e.get(r)??[]).concat(n.map(F)))}return e})();function ut(e){return[e,...lt.get(e)??[]]}var dt=new Set(`аеёиоуыэюяйь`),ft=new Set([...dt,...`мвх`]);function pt(e,t){return mt(M(e),M(t))}function mt(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;if(n<3)return!1;let r=e.slice(n),i=t.slice(n);if(r.length>3||i.length>3)return!1;let a=e=>e.length===0||dt.has(e[0])&&e.every(e=>ft.has(e)),o=Math.min(e.length,t.length);return a(r)&&a(i)&&n>=o-3}function ht(e){return M(e).slice(0,it(e)).join(``)}function gt(e,t){if(Re(e,t))return!0;let n=e.length,r=t.length;if(Math.abs(n-r)>1)return!1;let i=0,a=0,o=0;for(;i<n&&a<r;)if(e[i]===t[a])i++,a++;else{if(o++,o>1)return!1;n>r?i++:r>n?a++:i+1<n&&e[i]===t[a+1]&&e[i+1]===t[a]?(i+=2,a+=2):(i++,a++)}return o+=n-i+(r-a),o<=1}var _t=M("qwertyuiop[]asdfghjkl;'zxcvbnm,.`"),vt=M(`йцукенгшщзхъфывапролджэячсмитьбюё`),yt=e=>/^[A-Za-z]$/.test(e);function bt(e){let t=M(e);if(t.some(e=>vt.includes(e.toLowerCase()))||!t.some(yt))return null;let n=``;return t.forEach((e,r)=>{let i=e.toLowerCase(),a=_t.indexOf(i),o=!yt(e),s=r>0&&yt(t[r-1])||r+1<t.length&&yt(t[r+1]);if(a>=0&&(!o||s)){let t=vt[a];n+=e===i?t:t.toUpperCase()}else n+=e}),n}var xt=[`starter`,`off`,`usda`,`user`,`vkusvill`],St={user:0,starter:1,vkusvill:2,usda:3,off:5},Ct={user:.1,starter:.1,vkusvill:.05,usda:0,off:-.15},wt=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],Tt=e=>typeof e==`string`&&wt.includes(e),I=class e{kcal;protein;fat;carbs;constructor(e,t,n,r){this.kcal=e,this.protein=t,this.fat=n,this.carbs=r}static zero=new e(0,0,0,0);scaled(t){return new e(this.kcal*t,this.protein*t,this.fat*t,this.carbs*t)}plus(t){return new e(this.kcal+t.kcal,this.protein+t.protein,this.fat+t.fat,this.carbs+t.carbs)}forGrams(e){return this.scaled(e/100)}get isPossiblePer100g(){return[this.protein,this.fat,this.carbs].every(e=>e>=0)&&this.protein+this.fat+this.carbs<=105&&this.kcal>=0&&this.kcal<=1e3}},Et=class{id;source;nameRu;nameEn;brand;externalId;per100g;portions;dishWeight;rare;searchText;ruKey;enKey;brandKey;constructor(e){this.id=e.id,this.source=e.source,this.nameRu=e.nameRu,this.nameEn=e.nameEn,this.brand=e.brand??null,this.externalId=e.externalId??null,this.per100g=e.per100g,this.portions=e.portions??[],this.dishWeight=e.dishWeight??null,this.rare=e.rare??!1,this.searchText=F([this.nameRu,this.nameEn,this.brand].filter(e=>e!==null).join(` `).toLowerCase());let t=e=>{let t=e===null?``:P(e);return t?new We(t):null};this.ruKey=t(this.nameRu),this.enKey=t(this.nameEn),this.brandKey=t(this.brand)}get searchRank(){return St[this.source]+ +!!this.rare}get relevanceWeight(){return Ct[this.source]-(this.rare?.2:0)}keys(e){return(e===`en`?[this.enKey,this.ruKey]:[this.ruKey,this.enKey]).filter(e=>e!==null)}searchTextContains(e){return e===``||this.searchText.includes(e)}name(e){let t=this.nameRu===null?null:P(this.nameRu),n=this.nameEn===null?null:P(this.nameEn),[r,i]=e===`ru`?[t,n]:[n,t];return r||i||``}startsWith(e){return this.ruKey?.folded.startsWith(e)===!0||this.enKey?.folded.startsWith(e)===!0}portion(e){return this.portions.find(t=>t.unit===e)}},Dt=`{
  "sourceLanguage": "ru",
  "version": "1.0",
  "strings": {
    "Сегодня": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Today"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сегодня"
          }
        }
      }
    },
    "Вчера": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Yesterday"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Вчера"
          }
        }
      }
    },
    "Завтра": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Tomorrow"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Завтра"
          }
        }
      }
    },
    "Введите продукт…": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Type a food…"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Введите продукт…"
          }
        }
      }
    },
    "Ищу…": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Searching…"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Ищу…"
          }
        }
      }
    },
    "Ничего не найдено": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Nothing found"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Ничего не найдено"
          }
        }
      }
    },
    "Не посчитано": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Not counted"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не посчитано"
          }
        }
      }
    },
    "Нет сети — ищу только в телефоне": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Offline — searching this phone only"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Нет сети — ищу только в телефоне"
          }
        }
      }
    },
    "Не нашли? Добавить новый продукт": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Not found? Add a new food"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не нашли? Добавить новый продукт"
          }
        }
      }
    },
    "Читаю этикетку…": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Reading the label…"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Читаю этикетку…"
          }
        }
      }
    },
    "Других вариантов нет": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "No other matches"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Других вариантов нет"
          }
        }
      }
    },
    "Другие варианты": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Other matches"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Другие варианты"
          }
        }
      }
    },
    "Подсказка: %@": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Suggestion: %@"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Подсказка: %@"
          }
        }
      }
    },
    "Удалено": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Deleted"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Удалено"
          }
        }
      }
    },
    "Вернуть": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Undo"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Вернуть"
          }
        }
      }
    },
    "Изменить": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Edit"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Изменить"
          }
        }
      }
    },
    "Удалить": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Delete"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Удалить"
          }
        }
      }
    },
    "Отмена": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Cancel"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Отмена"
          }
        }
      }
    },
    "Сохранить": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Save"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сохранить"
          }
        }
      }
    },
    "Закрыть": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Close"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Закрыть"
          }
        }
      }
    },
    "Настройки": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Settings"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Настройки"
          }
        }
      }
    },
    "Понятно": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "OK"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Понятно"
          }
        }
      }
    },
    "Меню": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Menu"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Меню"
          }
        }
      }
    },
    "Очистить": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Clear"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Очистить"
          }
        }
      }
    },
    "Камера": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Camera"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Камера"
          }
        }
      }
    },
    "Добавить": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Add"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Добавить"
          }
        }
      }
    },
    "Диктовать": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Dictate"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Диктовать"
          }
        }
      }
    },
    "Остановить диктовку": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Stop dictation"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Остановить диктовку"
          }
        }
      }
    },
    "Сканировать штрихкод": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Scan a barcode"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сканировать штрихкод"
          }
        }
      }
    },
    "Сфотографировать этикетку": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Photograph the label"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сфотографировать этикетку"
          }
        }
      }
    },
    "Выбрать фото": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Choose a photo"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Выбрать фото"
          }
        }
      }
    },
    "Наведите камеру на штрихкод": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Point the camera at the barcode"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Наведите камеру на штрихкод"
          }
        }
      }
    },
    "Нет доступа к камере — разрешите его в Настройках": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "No camera access — allow it in Settings"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Нет доступа к камере — разрешите его в Настройках"
          }
        }
      }
    },
    "Сканер штрихкодов недоступен на этом устройстве": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The barcode scanner isn't available on this device"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сканер штрихкодов недоступен на этом устройстве"
          }
        }
      }
    },
    "Камера недоступна на этом устройстве": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The camera isn't available on this device"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Камера недоступна на этом устройстве"
          }
        }
      }
    },
    "Нет доступа к микрофону или распознаванию речи — разрешите в Настройках": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "No microphone or speech access — allow it in Settings"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Нет доступа к микрофону или распознаванию речи — разрешите в Настройках"
          }
        }
      }
    },
    "Нет сети — штрихкод не проверить. Можно заполнить продукт сейчас, он запомнится": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Offline — can't look the barcode up. Fill the food in now and it will be remembered"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Нет сети — штрихкод не проверить. Можно заполнить продукт сейчас, он запомнится"
          }
        }
      }
    },
    "Штрихкод пока никому не известен — заполните продукт, и он запомнится": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Nobody knows this barcode yet — fill the food in and it will be remembered"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Штрихкод пока никому не известен — заполните продукт, и он запомнится"
          }
        }
      }
    },
    "Не удалось прочитать этикетку — впишите числа вручную": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Couldn't read the label — type the numbers"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не удалось прочитать этикетку — впишите числа вручную"
          }
        }
      }
    },
    "Дневник не сохраняется": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The diary isn't being saved"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Дневник не сохраняется"
          }
        }
      }
    },
    "Не удалось открыть файл дневника. Записи этого сеанса пропадут после закрытия приложения.": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The diary file couldn't be opened. This session's entries will be gone when the app closes."
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не удалось открыть файл дневника. Записи этого сеанса пропадут после закрытия приложения."
          }
        }
      }
    },
    "К": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "K"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "К"
          }
        }
      }
    },
    "Б": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "P"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Б"
          }
        }
      }
    },
    "Ж": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "F"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Ж"
          }
        }
      }
    },
    "У": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "C"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "У"
          }
        }
      }
    },
    "Д": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "D"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Д"
          }
        }
      }
    },
    "Н": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "W"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Н"
          }
        }
      }
    },
    "М": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "M"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "М"
          }
        }
      }
    },
    "Ккал": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Kcal"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Ккал"
          }
        }
      }
    },
    "ккал": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "kcal"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "ккал"
          }
        }
      }
    },
    "г": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "g"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "г"
          }
        }
      }
    },
    "см": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "cm"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "см"
          }
        }
      }
    },
    "кг": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "kg"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "кг"
          }
        }
      }
    },
    "лет": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "yrs"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "лет"
          }
        }
      }
    },
    "Калории": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Calories"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Калории"
          }
        }
      }
    },
    "Белки": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Protein"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Белки"
          }
        }
      }
    },
    "Жиры": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Fat"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Жиры"
          }
        }
      }
    },
    "Углеводы": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Carbs"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Углеводы"
          }
        }
      }
    },
    "на 100 г": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "per 100 g"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "на 100 г"
          }
        }
      }
    },
    "%@ ккал": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ kcal"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ ккал"
          }
        }
      }
    },
    "Свой продукт": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Own food"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Свой продукт"
          }
        }
      }
    },
    "Название": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Name"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Название"
          }
        }
      }
    },
    "Вес порции, г": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Portion weight, g"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Вес порции, г"
          }
        }
      }
    },
    "Мои продукты": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "My foods"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Мои продукты"
          }
        }
      }
    },
    "Здесь будут ваши продукты и блюда": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Your own foods and dishes will be here"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Здесь будут ваши продукты и блюда"
          }
        }
      }
    },
    "блюдо": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "dish"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "блюдо"
          }
        }
      }
    },
    "Продукт": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Food"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Продукт"
          }
        }
      }
    },
    "Блюдо": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Dish"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Блюдо"
          }
        }
      }
    },
    "Удалить «%@»? Записи в дневнике останутся.": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Delete “%@”? Diary entries stay."
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Удалить «%@»? Записи в дневнике останутся."
          }
        }
      }
    },
    "Своё блюдо": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "My dish"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Своё блюдо"
          }
        }
      }
    },
    "Название блюда": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Dish name"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Название блюда"
          }
        }
      }
    },
    "Порций": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Servings"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Порций"
          }
        }
      }
    },
    "1 порция — %@ г, %@ ккал": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "1 serving — %@ g, %@ kcal"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "1 порция — %@ г, %@ ккал"
          }
        }
      }
    },
    "Круг": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Krug"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Круг"
          }
        }
      }
    },
    "Профиль": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Profile"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Профиль"
          }
        }
      }
    },
    "Статистика": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Statistics"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Статистика"
          }
        }
      }
    },
    "Период": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Period"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Период"
          }
        }
      }
    },
    "ДН": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "D"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "ДН"
          }
        }
      }
    },
    "НЕД": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "W"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "НЕД"
          }
        }
      }
    },
    "МЕС": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "M"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "МЕС"
          }
        }
      }
    },
    "6 МЕС": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "6M"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "6 МЕС"
          }
        }
      }
    },
    "ГОД": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Y"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "ГОД"
          }
        }
      }
    },
    "Нет записей за этот период": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "No entries for this period"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Нет записей за этот период"
          }
        }
      }
    },
    "Рост": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Height"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Рост"
          }
        }
      }
    },
    "Вес": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Weight"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Вес"
          }
        }
      }
    },
    "Возраст": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Age"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Возраст"
          }
        }
      }
    },
    "Пол": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Sex"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Пол"
          }
        }
      }
    },
    "Не указан": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Not set"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не указан"
          }
        }
      }
    },
    "Женский": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Female"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Женский"
          }
        }
      }
    },
    "Мужской": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Male"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Мужской"
          }
        }
      }
    },
    "Цели на день": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Daily targets"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Цели на день"
          }
        }
      }
    },
    "Язык": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Language"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Язык"
          }
        }
      }
    },
    "Резервная копия": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Backup"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Резервная копия"
          }
        }
      }
    },
    "Сохранить копию": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Save a backup"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Сохранить копию"
          }
        }
      }
    },
    "Восстановить из копии": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Restore from a backup"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Восстановить из копии"
          }
        }
      }
    },
    "Дневник, свои продукты и блюда — в одном файле. Сохраните его в Файлы или iCloud Drive: без него при смене телефона данные не перенести.": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Your diary, own foods and dishes in one file. Save it to Files or iCloud Drive — without it, data can't move to a new phone."
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Дневник, свои продукты и блюда — в одном файле. Сохраните его в Файлы или iCloud Drive: без него при смене телефона данные не перенести."
          }
        }
      }
    },
    "Данные о продуктах: Open Food Facts (ODbL), ВкусВилл, USDA FoodData Central": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Food data: Open Food Facts (ODbL), VkusVill, USDA FoodData Central"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Данные о продуктах: Open Food Facts (ODbL), ВкусВилл, USDA FoodData Central"
          }
        }
      }
    },
    "Дневник сейчас не сохраняется — перенос не выполнен. Перезапустите приложение и попробуйте снова": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The diary isn't being saved right now — nothing was restored. Relaunch the app and try again"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Дневник сейчас не сохраняется — перенос не выполнен. Перезапустите приложение и попробуйте снова"
          }
        }
      }
    },
    "Всё из этой копии уже есть в дневнике": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Everything in this backup is already in the diary"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Всё из этой копии уже есть в дневнике"
          }
        }
      }
    },
    "Добавлено записей: %lld, продуктов: %lld": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Added entries: %lld, foods: %lld"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Добавлено записей: %lld, продуктов: %lld"
          }
        }
      }
    },
    "Эта копия сделана более новой версией Круга — обновите приложение": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "This backup was made by a newer Krug — update the app"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Эта копия сделана более новой версией Круга — обновите приложение"
          }
        }
      }
    },
    "Это не файл резервной копии Круга": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "This isn't a Krug backup file"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Это не файл резервной копии Круга"
          }
        }
      }
    },
    "Не получилось — попробуйте ещё раз": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "That didn't work — please try again"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Не получилось — попробуйте ещё раз"
          }
        }
      }
    },
    "Тема": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Тема"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Theme"
          }
        }
      }
    },
    "Как в системе": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Как в системе"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "System"
          }
        }
      }
    },
    "Светлая": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Светлая"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Light"
          }
        }
      }
    },
    "Тёмная": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Тёмная"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Dark"
          }
        }
      }
    },
    "В среднем за %@": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "В среднем за %@"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Average for %@"
          }
        }
      }
    },
    "Раньше": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Раньше"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Earlier"
          }
        }
      }
    },
    "Позже": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Позже"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Later"
          }
        }
      }
    },
    "Ингредиенты": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Ингредиенты"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Ingredients"
          }
        }
      }
    },
    "Готовое блюдо": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Готовое блюдо"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The cooked dish"
          }
        }
      }
    },
    "Вес после готовки, г": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Вес после готовки, г"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Weight after cooking, g"
          }
        }
      }
    },
    "Всего сырого": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Всего сырого"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Raw total"
          }
        }
      }
    },
    "%@ г · %@ ккал": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ г · %@ ккал"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ g · %@ kcal"
          }
        }
      }
    },
    "%@ г": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ г"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "%@ g"
          }
        }
      }
    },
    "1 порция": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "1 порция"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "1 serving"
          }
        }
      }
    },
    "Впишите ингредиент и сколько его пошло — как строку в дневнике: «творог 5% 400», Enter": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Впишите ингредиент и сколько его пошло — как строку в дневнике: «творог 5% 400», Enter"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Type an ingredient and how much went in — like a diary line: “cottage cheese 5% 400”, Enter"
          }
        }
      }
    },
    "Суп набирает воду, запеканка теряет: если взвесили готовое — впишите, иначе считаем по сырому.": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Суп набирает воду, запеканка теряет: если взвесили готовое — впишите, иначе считаем по сырому."
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Soup takes on water, a bake loses it: if you weighed the cooked dish, type it in; otherwise the raw total is used."
          }
        }
      }
    },
    "Пользовательское соглашение": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Пользовательское соглашение"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Terms of use"
          }
        }
      }
    },
    "Политика конфиденциальности": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Политика конфиденциальности"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Privacy policy"
          }
        }
      }
    },
    "Текст документа появится здесь.": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Текст документа появится здесь."
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "The document's text will appear here."
          }
        }
      }
    },
    "День": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "День"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Day"
          }
        }
      }
    },
    "Неделя": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Неделя"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Week"
          }
        }
      }
    },
    "Месяц": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Месяц"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Month"
          }
        }
      }
    },
    "Полгода": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Полгода"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Six months"
          }
        }
      }
    },
    "Год": {
      "localizations": {
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Год"
          }
        },
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Year"
          }
        }
      }
    },
    "Записать": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Log"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Записать"
          }
        }
      }
    },
    "Открывает Круг на строке ввода.": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Opens Krug on the input line."
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Открывает Круг на строке ввода."
          }
        }
      }
    },
    "Круг дня": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Today's rings"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Круг дня"
          }
        }
      }
    },
    "Калории и Б/Ж/У за сегодня.": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Today's calories, protein, fat and carbs."
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Калории и Б/Ж/У за сегодня."
          }
        }
      }
    },
    "Записать в Круг": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Log in Krug"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Записать в Круг"
          }
        }
      }
    },
    "Поиск в сети просит подождать минуту — ищу только в телефоне": {
      "localizations": {
        "en": {
          "stringUnit": {
            "state": "translated",
            "value": "Online search asks to wait a minute — searching the phone only"
          }
        },
        "ru": {
          "stringUnit": {
            "state": "translated",
            "value": "Поиск в сети просит подождать минуту — ищу только в телефоне"
          }
        }
      }
    }
  }
}
`;function Ot(){return(typeof navigator>`u`?`ru`:navigator.languages?.[0]??navigator.language??`ru`).startsWith(`en`)?`en`:`ru`}var kt=Ot(),L=()=>kt;function At(e){kt=e??Ot()}var jt=e=>e===`ru`?`ru-RU`:`en-US`,Mt=(()=>{let e=JSON.parse(Dt),t={ru:new Map,en:new Map};for(let[n,r]of Object.entries(e.strings))for(let e of[`ru`,`en`]){let i=r.localizations?.[e]?.stringUnit?.value;i!==void 0&&t[e].set(n,i)}return t})(),Nt={"Нет сети — ищу только на этом устройстве":`Offline — searching this device only`,"Дневник хранится в этом браузере":`The diary is kept in this browser`,"Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.":`Save a copy from the profile: without it, entries can’t move to another browser or device.`,"Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.":`The browser’s storage couldn’t be opened. This session’s entries will be gone when the page closes.`,Раньше:`Earlier`,Позже:`Later`,"Загружаю продукты…":`Loading foods…`,Сводка:`Summary`,"Обновить страницу":`Reload the page`,"Добавьте Круг на экран «Домой»":`Add Krug to your Home Screen`,"Так дневник надёжно хранится на телефоне и открывается как приложение.":`This way the diary is kept safely on the phone and opens like an app.`,"В Safari: «Поделиться» → «На экран „Домой“».":`In Safari: Share → Add to Home Screen.`,Установить:`Install`,"Не сейчас":`Not now`,"Сколько калорий в день?":`How many calories a day?`,Посчитать:`Work it out`,"Знаю цель":`I know mine`,Активность:`Activity`,Мало:`Low`,Средне:`Medium`,Много:`High`,Цель:`Goal`,"Снизить вес":`Lose`,Держать:`Keep`,Набрать:`Gain`,Пропустить:`Skip`,Готово:`Done`,"Посчитано по формуле Миффлина — Сан Жеора. Цели всегда можно поменять в профиле.":`Worked out with the Mifflin — St Jeor formula. The targets can always be changed in the profile.`,"Цели всегда можно поменять в профиле.":`The targets can always be changed in the profile.`,"в день":`a day`,"Нет доступа к камере — разрешите его в настройках браузера":`No camera access — allow it in the browser’s settings`,"Голосовой ввод не работает без сети":`Voice input needs a network`,"Микрофон не найден":`No microphone found`,"Наведите камеру на таблицу пищевой ценности":`Point the camera at the nutrition table`,Снять:`Take photo`,Дневник:`Diary`,"Число в строке":`Number on each line`,"осталось %@":`%@ left`,"больше на %@":`%@ over`,"в среднем за день":`average a day`,"Предыдущий месяц":`Previous month`,"Следующий месяц":`Next month`,"Отпустите, чтобы прочитать этикетку":`Drop to read the label`,"Отпустите, чтобы восстановить из копии":`Drop to restore from the backup`,"Нет доступа к микрофону или распознаванию речи — разрешите в настройках браузера":`No access to the microphone or speech recognition — allow it in the browser’s settings`,"Поиск в сети просит подождать минуту — ищу только на этом устройстве":`Online search asks to wait a minute — searching this device only`};function R(e,t=[],n=kt){let r=Mt[n].get(e)??(n===`en`?Nt[e]:void 0)??e,i=0;return r.replace(/%(?:(\d+)\$)?(?:@|lld|d)/g,(e,n)=>{let r=n?t[Number(n)-1]:t[i++];return String(r??``)})}var Pt=new Map;function Ft(e,t){let n=`${e}|${JSON.stringify(t)}`,r=Pt.get(n);return r||Pt.set(n,r=new Intl.DateTimeFormat(jt(e),t)),r}var It=class e{foods=[];byId=new Map;byBarcode=new Map;constructor(e){this.add(e)}food(e){return this.byId.get(e)}foodByBarcode(e){return this.byBarcode.get(e)}remove(e){let t=this.byId.get(e);t&&(this.byId.delete(e),this.foods=this.foods.filter(t=>t.id!==e),t.externalId!==null&&this.byBarcode.get(t.externalId)?.id===e&&this.byBarcode.delete(t.externalId))}add(e,t=!1){for(let n of e){if(!this.byId.has(n.id))this.foods.push(n),this.byId.set(n.id,n);else if(t){let e=this.foods.findIndex(e=>e.id===n.id);e>=0&&(this.foods[e]=n,this.byId.set(n.id,n))}let e=n.externalId;e!==null&&N(e)>=8&&M(e).every(je)&&this.byBarcode.set(e,this.byId.get(n.id))}}search(e,{limit:t=30,usage:n=new Map,lang:r=L()}={}){let i=F(P(e.toLowerCase())),a=Ie(i,Oe).map(e=>{let t=Ye(M(e));if(t===null&&N(e)>=3){let n=Ke.findIndex(t=>t.some(t=>t.startsWith(e)));t=n<0?null:n}return ut(e).map(ht).concat(t===null?[]:Ke[t])}),o=this.foods.filter(e=>a.every(t=>t.some(t=>e.searchTextContains(t)))),s=Ue(i),c=s===null?null:F(s.toLowerCase());if(c!==null&&!o.some(e=>e.ruKey?.folded===c)){let e=this.foods.find(e=>e.ruKey?.folded===c);e&&o.push(e)}return o.map(e=>{let t=n.get(e.id);return{f:e,key:[-(t?.count??0),-Math.trunc((t?.lastUsed??-621355968e5)/1e3),c!==null&&e.ruKey?.folded===c?0:1,+!e.startsWith(i),e.searchRank,e.keys(r)[0]?.length??0]}}).sort((e,t)=>ze(e.key,t.key)).slice(0,t).map(e=>e.f)}static fromBundled(t){return new e([...e.parseStarter(t.starter),...e.parseBundle(t.off),...e.parseBundle(t.usda)])}static parseStarter(e){return Array.isArray(e)?e.flatMap(e=>typeof e!=`object`||!e||typeof e.id!=`string`?[]:[new Et({id:`starter:${e.id}`,source:`starter`,nameRu:typeof e.ru==`string`?e.ru:null,nameEn:typeof e.en==`string`?e.en:null,per100g:Rt(e.kcal,e.p,e.f,e.c),portions:zt(e.portions)})]):[]}static parseBundle(t){if(typeof t!=`object`||!t)return[];let n=t,r=xt.find(e=>e===n.source);return r===void 0||!Array.isArray(n.items)?[]:n.items.flatMap(t=>{if(!Array.isArray(t)||t.length<9||typeof t[0]!=`string`)return[];let n=Bt(t[1]),i=Bt(t[2]),a=Bt(t[3]);return[new Et({id:`${r}:${t[0]}`,source:r,nameRu:n,nameEn:i,brand:a,externalId:t[0],per100g:Rt(t[4],t[5],t[6],t[7]),portions:zt(t[8]),rare:t.length>9&&t[9]===!0||r===`off`&&!e.isCaredFor(n??i,a)})]})}static isCaredFor(e,t){if(e===null||e===``||t===null||t===``)return!1;let n=M(e)[0];return(Me(n)||je(n))&&N(e)<=60}},Lt=e=>typeof e==`number`?e:0;function Rt(e,t,n,r){return new I(Lt(e),Lt(t),Lt(n),Lt(r))}function zt(e){return typeof e!=`object`||!e||Array.isArray(e)?[]:Object.entries(e).flatMap(([e,t])=>Tt(e)&&Lt(t)>0?[{unit:e,grams:Lt(t)}]:[]).sort((e,t)=>e.unit<t.unit?-1:+(e.unit>t.unit))}function Bt(e){if(typeof e!=`string`)return null;let t=P(e);return t===``?null:t}var Vt=()=>({heightCm:null,weightKg:null,sex:`unset`,birthYear:null,targetKcal:2e3,targetProtein:100,targetFat:70,targetCarbs:250}),Ht=e=>new I(e.targetKcal,e.targetProtein,e.targetFat,e.targetCarbs);function Ut(e,t){return Object.keys(e).every(n=>e[n]===t[n])}var Wt=e=>Ut(e,Vt()),Gt=()=>({food:[],usage:[],entry:[],dishIngredient:[],profile:null,meta:[]});function Kt(e,t){return{id:e.id,source:e.source,externalId:e.externalId,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,kcal:e.per100g.kcal,protein:e.per100g.protein,fat:e.per100g.fat,carbs:e.per100g.carbs,portions:[...e.portions],createdAt:t,dishWeight:e.dishWeight}}function qt(e){return new Et({id:e.id,source:e.source,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,externalId:e.externalId,per100g:new I(e.kcal,e.protein,e.fat,e.carbs),portions:e.portions,dishWeight:e.dishWeight})}var Jt=(e,t)=>`${e}\n${t}`,Yt=class e{sink;foodRows=new Map;usageRows=new Map;entryRows=new Map;ingredientRows=new Map;profileRow=Vt();metaRows=new Map;lastCreated=0;constructor(e=Gt(),t=null){this.sink=t;for(let t of e.food)this.foodRows.set(t.id,t);for(let t of e.usage)this.usageRows.set(t.foodId,{count:t.count,lastUsed:t.lastUsed});for(let t of e.entry)this.entryRows.set(t.id,{...t});for(let t of e.dishIngredient)this.ingredientRows.set(Jt(t.dishId,t.position),t);e.profile&&(this.profileRow={...Vt(),...e.profile});for(let[t,n]of e.meta)this.metaRows.set(t,n)}static inMemory(){return new e}get persistent(){return this.sink!==null}flushed(){return this.sink?.flushed?.()??Promise.resolve()}commit(e){e.length>0&&this.sink?.write(e)}now(){return this.lastCreated=Math.max(Date.now(),this.lastCreated+1),this.lastCreated}foods(){return[...this.foodRows.values()].map(qt)}save(e,t){let n=[];for(let r of e)t?n.push(this.upsert(r)):this.foodRows.has(r.id)||n.push(this.putFood(Kt(r,this.now())));this.commit(n)}upsert(e){return this.putFood(Kt(e,this.foodRows.get(e.id)?.createdAt??this.now()))}putFood(e){return this.foodRows.set(e.id,e),{table:`food`,key:e.id,value:e}}ownFoodIds(){return[...this.foodRows.values()].filter(e=>e.source===`user`).sort((e,t)=>t.createdAt-e.createdAt).map(e=>e.id)}ownCreatedAt(){return new Map([...this.foodRows.values()].filter(e=>e.source===`user`).map(e=>[e.id,e.createdAt]))}saveDish(e,t){let n=[this.upsert(e),...this.dropIngredients(e.id)];for(let e of t)n.push(this.putIngredient(e));this.commit(n)}dropIngredients(e){return this.ingredients(e).map(e=>{let t=Jt(e.dishId,e.position);return this.ingredientRows.delete(t),{table:`dishIngredient`,key:t}})}putIngredient(e){let t=Jt(e.dishId,e.position);return this.ingredientRows.set(t,e),{table:`dishIngredient`,key:t,value:e}}deleteFood(e){let t=this.foodRows.get(e);if(!t)return null;let n=this.ingredients(e),r=[...this.entryRows.values()].filter(t=>t.foodId===e),i=[...this.ingredientRows.values()].filter(t=>t.foodId===e&&t.dishId!==e),a={food:qt(t),createdAt:t.createdAt,ingredients:n,entryIds:r.map(e=>e.id),usedIn:i.map(e=>({dishId:e.dishId,position:e.position}))},o=[];for(let e of r)o.push(this.putEntry({...e,foodId:null}));for(let e of i)o.push(this.putIngredient({...e,foodId:null}));return o.push(...this.dropIngredients(e)),this.foodRows.delete(e),o.push({table:`food`,key:e}),this.commit(o),a}restoreFood(e){let t=[];this.foodRows.has(e.food.id)||t.push(this.putFood(Kt(e.food,e.createdAt)));for(let n of e.ingredients)this.ingredientRows.has(Jt(n.dishId,n.position))||t.push(this.putIngredient(n));for(let n of e.entryIds){let r=this.entryRows.get(n);r&&t.push(this.putEntry({...r,foodId:e.food.id}))}let n=[e.food.name(`ru`),e.food.name(`en`)];for(let{dishId:r,position:i}of e.usedIn){let a=this.ingredientRows.get(Jt(r,i));a&&a.foodId===null&&n.includes(a.name)&&t.push(this.putIngredient({...a,foodId:e.food.id}))}this.commit(t)}usage(){return new Map([...this.usageRows].map(([e,t])=>[e,{...t}]))}saveUsage(e,t){this.commit([this.putUsage(t,e)])}putUsage(e,t){return this.usageRows.set(e,{...t}),{table:`usage`,key:e,value:{foodId:e,count:t.count,lastUsed:t.lastUsed}}}entries(){return[...this.entryRows.values()].map(e=>({...e})).sort((e,t)=>e.loggedAt-t.loggedAt)}saveEntry(e){this.commit([this.putEntry(e)])}putEntry(e){let t={...e};return this.entryRows.set(t.id,t),{table:`entry`,key:t.id,value:t}}deleteEntry(e){this.entryRows.delete(e)&&this.commit([{table:`entry`,key:e}])}profile(){return{...this.profileRow}}saveProfile(e){this.commit([this.putProfile(e)])}putProfile(e){return this.profileRow={...e},{table:`profile`,key:`1`,value:{...e}}}ingredients(e){return[...this.ingredientRows.values()].filter(t=>t.dishId===e).sort((e,t)=>e.position-t.position).map(e=>({...e}))}importBackup(e){let t=[],n=new Set,r=0;for(let r of e.foods)this.foodRows.has(r.id)||(t.push(this.putFood(Kt(r,e.createdAt.get(r.id)??this.now()))),n.add(r.id));for(let r of e.ingredients)n.has(r.dishId)&&!this.ingredientRows.has(Jt(r.dishId,r.position))&&t.push(this.putIngredient(r));for(let n of e.entries)this.entryRows.has(n.id)||(t.push(this.putEntry(n)),r++);for(let[n,r]of e.usage){let e=this.usageRows.get(n);t.push(this.putUsage(n,{count:Math.max(e?.count??0,r.count),lastUsed:Math.max(e?.lastUsed??-1/0,r.lastUsed)}))}return e.profile&&(Wt(this.profileRow)||e.replaceProfile)&&t.push(this.putProfile(e.profile)),this.commit(t),{entries:r,foods:n.size}}meta(e){return this.metaRows.get(e)??null}setMeta(e,t){this.metaRows.set(e,t),this.commit([{table:`meta`,key:e,value:{key:e,value:t}}])}};function Xt(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function z(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function Zt(e,t){let n=new Date(e);return n.setMonth(n.getMonth()+t),n}var Qt=(e,t)=>String(e).padStart(t,`0`);function B(e){return`${Qt(e.getFullYear(),4)}-${Qt(e.getMonth()+1,2)}-${Qt(e.getDate(),2)}`}function V(e){let t=$t(e);if(t===null)throw Error(`not a day: ${e}`);return t}function $t(e){let t=e.split(`-`).filter(e=>e!==``).map(e=>/^[+-]?\d+$/.test(e)?Number(e):null);if(t.length!==3||t.some(e=>e===null||!Number.isSafeInteger(e)))return null;let n=new Date(2e3,0,1);return n.setFullYear(t[0],t[1]-1,t[2]),n.setHours(0,0,0,0),Number.isNaN(n.getTime())||B(n)!==e?null:n}function H(e,t=new Date){return B(z(Xt(t),e))}function en(e=new Date){return B(e)}function tn(e,t=new Date,n=L()){switch(e){case H(0,t):return R(`Сегодня`,[],n);case H(-1,t):return R(`Вчера`,[],n);case H(1,t):return R(`Завтра`,[],n);default:return Ft(n,{month:`long`,day:`numeric`}).format(V(e))}}var nn=(e,[t,n])=>e>=t&&e<=n;function rn(e){let t=Xt(e);return z(t,-((t.getDay()+6)%7))}function an(e){let t=rn(V(e));return[B(t),B(z(t,6))]}function on(e){let t=V(e),n=new Date(t.getFullYear(),t.getMonth(),1),r=z(Zt(n,1),-1);return[B(n),B(r)]}function sn(e,t){if(!Number.isFinite(e))return Number.isNaN(e)?`nan`:e>0?`inf`:`-inf`;let n=e.toFixed(t);if(Math.abs(e)>=1e21)return n;let r=Math.abs(e).toFixed(100).split(`.`)[1];if(r[t]!==`5`||!/^0*$/.test(r.slice(t+1)))return n;let i=BigInt(n.replace(`-`,``).replace(`.`,``));if(i%2n==0n)return n;let a=(i-1n).toString().padStart(t+1,`0`);return(e<0?`-`:``)+(t===0?a:`${a.slice(0,-t)}.${a.slice(-t)}`)}var cn=e=>sn(e,0);function U(e){return e<10&&e!==Math.round(e)?sn(e,1):sn(e,0)}function ln(e){return e==null||!(e>=0&&e<1e5)?null:e}function un(e){let t=P(e).replaceAll(`,`,`.`);return!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(t)&&!/^[+-]?(nan|inf|infinity)$/i.test(t)?null:/nan/i.test(t)?NaN:/inf/i.test(t)?t.startsWith(`-`)?-1/0:1/0:Number(t)}var dn=e=>ln(un(e));function fn(e){if(!Number.isInteger(e)||Math.abs(e)>=0x38d7ea4c68000)return`other`;let t=e%10,n=e%100;return t===1&&n!==11?`one`:t>=2&&t<=4&&!(n>=12&&n<=14)?`few`:`many`}var pn={gram:[`gram`,`grams`],ml:[`ml`,`ml`],piece:[`piece`,`pieces`],pack:[`pack`,`packs`],spoon:[`tbsp`,`tbsp`],teaspoon:[`tsp`,`tsp`],slice:[`slice`,`slices`],cup:[`cup`,`cups`],portion:[`portion`,`portions`]},mn={gram:{one:`грамм`,few:`грамма`,many:`грамм`,other:`грамма`},ml:{one:`мл`,few:`мл`,many:`мл`,other:`мл`},piece:{one:`штука`,few:`штуки`,many:`штук`,other:`штуки`},pack:{one:`пачка`,few:`пачки`,many:`пачек`,other:`пачки`},spoon:{one:`ст. ложка`,few:`ст. ложки`,many:`ст. ложек`,other:`ст. ложки`},teaspoon:{one:`ч. ложка`,few:`ч. ложки`,many:`ч. ложек`,other:`ч. ложки`},slice:{one:`ломтик`,few:`ломтика`,many:`ломтиков`,other:`ломтика`},cup:{one:`стакан`,few:`стакана`,many:`стаканов`,other:`стакана`},portion:{one:`порция`,few:`порции`,many:`порций`,other:`порции`}};function hn(e,t,n){return n===`en`?pn[e][t===1?0:1]:mn[e][fn(t)]}function gn(e,t,n=L()){return`${_n(e)} ${hn(t,e,n)}`}function _n(e){if(Number.isInteger(e)&&Math.abs(e)<0x38d7ea4c68000)return String(e);let t=sn(e,2);for(;t.endsWith(`0`);)t=t.slice(0,-1);return t}function vn(e){return Number.isInteger(e)?sn(e,0):sn(e,1)}var yn=class{term;amount;unit;explicitUnit;constructor(e,t=null,n=null,r=!1){this.term=e,this.amount=t,this.unit=n,this.explicitUnit=r}get hasAmount(){return(this.amount??0)>0}},bn=(()=>{let e=new Map,t=(t,...n)=>n.forEach(n=>e.set(n,t));return t(`gram`,`г`,`гр`,`грамм`,`грамма`,`граммов`,`g`,`gr`,`gram`,`grams`),t(`ml`,`мл`,`ml`),t(`piece`,`шт`,`штук`,`штуки`,`штука`,`pc`,`pcs`,`piece`,`pieces`),t(`pack`,`пачка`,`пачки`,`пачек`,`пач`,`pack`,`packs`),t(`spoon`,`ложка`,`ложки`,`ложек`,`стл`,`tbsp`,`стложка`,`стложки`,`стложек`),t(`teaspoon`,`чл`,`tsp`,`чложка`,`чложки`,`чложек`),t(`slice`,`ломтик`,`ломтика`,`ломтиков`,`slice`,`slices`),t(`cup`,`стакан`,`стакана`,`стаканов`,`cup`,`cups`),t(`portion`,`порция`,`порции`,`порций`,`portion`,`portions`),e})(),xn=/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*([a-zA-Zа-яёА-ЯЁ]*(?:\.\s*[a-zA-Zа-яёА-ЯЁ]+)?)\.?\s*$/u;function Sn(e){let t=Ne(e),n=xn.exec(t);if(!n)return new yn(t);let r=P(n[1]),i=dn(n[2]);if(!r||i===null||!(i>0))return new yn(t);let a=Array.from(n[3].toLowerCase()).filter(e=>e!==`.`&&!Oe(e)).join(``),o=a===``?`gram`:bn.get(a);return o===void 0?new yn(t):new yn(r,i,o,a!==``)}var Cn=class{food;unit;amount;label;text;constructor(e,t,n,r,i){this.food=e,this.unit=t,this.amount=n,this.label=r,this.text=i}get grams(){return this.unit===`gram`?this.amount:this.amount*(this.food.portion(this.unit)?.grams??1)}},wn=[`portion`,`piece`,`pack`,`slice`,`cup`,`spoon`,`teaspoon`],Tn=class{text;parsed;key;constructor(e){this.text=Fe(e.normalize(`NFC`)),this.parsed=Sn(this.text),this.key=new Xe(this.parsed.hasAmount?this.parsed.term:this.text,this.parsed.hasAmount||this.text.endsWith(` `))}};function En(e,t,n,r,i,a){let o=n===`en`?`en`:`ru`,s=t.text,c=t.parsed,l=t.key.text,u=e.food,d=e.phrase||e.key.name===u.name(a)?In(e.key.name,l):null,f=e.phrase?e.key.name:u.name(n);(i||a!==n)&&(d=null);let p=!1;d!==null&&d!==``&&Ve(d).every(e=>Ge.has(e))&&(d=``,p=!0);let m=t.key.words[t.key.words.length-1],h;if(h=d!==null&&!p?e.key.name:p||e.tier<=1&&!i&&m!==void 0&&Ze(e.key,m)?jn(P(l)):f,c.hasAmount&&c.amount!==null){let e=c.amount,t=c.explicitUnit,n=t?c.unit??`gram`:Mn(u,e);if(n!==`gram`&&u.portion(n)===void 0)return null;let r=`${f} ${gn(e,n,o)}`,i;return i=d===null||d!==``?r:t?s:`${Pe(s)} ${Fn(e,n,o)}`,new Cn(u,n,e,h,i)}let[g,_]=r(u.id)??Pn(u),v=gn(_,g,o),y;return y=d===null?`${f} ${v}`:s.endsWith(` `)&&d===``?`${s}${v}`:`${s}${d} ${v}`,new Cn(u,g,_,h,y)}function Dn(e,t){let n=Ue(e.text),r=n===null?null:F(n.toLowerCase()),i=new Map;t.history.forEach((e,t)=>{i.has(e.id)||i.set(e.id,t)});let a=new Set,o=[];for(let n of[...t.history,...t.candidates]){if(a.has(n.id))continue;a.add(n.id);let s=i.get(n.id),c=On(n,e,{matchLang:t.matchLang,preferred:r,phrases:t.phrases?.get(n.id)??[],logged:s===void 0?null:{count:t.usage.get(n.id)?.count??1,recency:s},pinned:n.id===t.prefer});c&&o.push(c)}return kn(o)}function On(e,t,n){let r=n.preferred!==null&&e.ruKey?.folded===n.preferred,i=[...(n.phrases??[]).map(e=>[e,!0]),...e.keys(n.matchLang).map(e=>[e,!1])],a=null;for(let[e,n]of i){let r=tt(e,t);r!==null&&(a===null||r<a[2])&&(a=[e,n,r])}if(a===null)return null;let[o,s,c]=a;if(!s&&!r&&(e.source===`starter`||e.source===`usda`))for(let e of o.cooking){if(t.cooking.has(e))continue;let n=Ke[e].map(M);if(!(t.spellings[t.spellings.length-1]?.some(e=>!t.lastComplete&&n.some(t=>Le(t,e)))??!1))return null}return{food:e,key:o,phrase:s,tier:c,relevance:An(e,o,t,c,r,n.logged!==null),logged:n.logged,pinned:n.pinned??!1}}function kn(e){let t=e.map((e,t)=>({element:e,offset:t})).filter(({element:e})=>e.logged===null&&!e.pinned).sort((e,t)=>e.element.relevance===t.element.relevance?e.offset-t.offset:t.element.relevance-e.element.relevance).map(({element:e})=>e),n=e.map((e,t)=>({h:e,i:t})).filter(({h:e})=>e.logged!==null||e.pinned).map(({h:e,i:n})=>{let r=e.logged??{count:1,recency:0},i=e.relevance+(r.count>=2?.95:.65),a=t.findIndex(e=>e.relevance<=i);return{slot:e.pinned?0:a<0?t.length:a,key:[+!e.pinned,e.tier,r.count>=2?0:1,r.recency,n],item:e}}).sort((e,t)=>e.slot===t.slot?ze(e.key,t.key):e.slot-t.slot),r=[],i=0;return t.forEach((e,t)=>{for(;i<n.length&&n[i].slot<=t;)r.push(n[i++].item);r.push(e)}),r.concat(n.slice(i).map(e=>e.item))}function An(e,t,n,r,i,a){let o=n.words,s=t.matchWords,c=[1,.85,.6][Math.min(r,2)],l=o[o.length-1];if(r===0&&!n.lastComplete&&l!==void 0&&!s.includes(l)){let e=s.find(e=>e.startsWith(l));e!==void 0&&(c=.7+.3*N(l)/N(e))}let u=!a&&i,d=c;return u||(d-=.3*Math.max(s.length-o.length,0)),s.length>=o.length&&o.every((e,t)=>e===s[t]||!n.lastComplete&&t===o.length-1&&s[t].startsWith(e))&&(d+=.1),u&&(d+=.3),e.source===`user`&&$e(t.folded,n.folded)&&(d+=.5),!a&&(e.source===`off`||e.source===`vkusvill`)&&!$e(t.folded,n.folded)&&!(e.brandKey?.chars.some(e=>n.spellings.some(t=>t.some(t=>Re(e,t)||mt(e,t))))??!1)&&--d,d+e.relevanceWeight}function jn(e){let[t,...n]=M(e);return t===void 0?e:t.toUpperCase()+n.join(``)}function Mn(e,t){let n={pack:2,cup:3},r=wn.find(t=>e.portion(t)!==void 0);return t<=12&&r!==void 0&&t<=(n[r]??12)?r:e.portion(`ml`)!==void 0&&e.portion(`gram`)===void 0?`ml`:`gram`}function Nn(e,t){let n=Sn(e);if(!n.hasAmount||n.amount===null)return null;let r=n.explicitUnit?n.unit??`gram`:Mn(t,n.amount);return r===`gram`||t.portion(r)!==void 0?[r,n.amount]:null}function Pn(e){let t=wn.find(t=>e.portion(t)!==void 0);return t===void 0?e.portion(`ml`)===void 0?[`gram`,100]:[`ml`,250]:[t,1]}function Fn(e,t,n){let r=gn(e,t,n);return r.slice(r.indexOf(` `)+1)}function In(e,t){let n=M(e.normalize(`NFC`)),r=M(Pe(t.normalize(`NFC`))),i=0,a=0;for(;a<r.length;){if(i>=n.length)return null;let e=F(n[i].toLowerCase()),t=F(r[a].toLowerCase());if(e===t)i++,a++;else if(e===`,`)i++;else if(t===`,`)a++;else return null}let o=n.slice(i);if(t.endsWith(` `)){let e=0;for(;e<o.length&&(o[e]===`,`||Oe(o[e]));)e++;o=o.slice(e)}return o.join(``)}function Ln(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID().toUpperCase();let e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`.toUpperCase()}var Rn=(e,t=L())=>`${e.name} ${gn(e.amount,e.unit,t)}`,zn=e=>({foodId:e.food.id,name:e.label,unit:e.unit,amount:e.amount,grams:e.grams,nutrition:e.food.per100g.forGrams(e.grams)}),Bn=e=>({foodId:e.foodId,name:e.name,unit:e.unit,amount:e.unitAmount,grams:e.grams,nutrition:new I(e.kcal,e.protein,e.fat,e.carbs)}),Vn=(e,t,n)=>({dishId:t,position:n,foodId:e.foodId,name:e.name,unit:e.unit,unitAmount:e.amount,grams:e.grams,kcal:e.nutrition.kcal,protein:e.nutrition.protein,fat:e.nutrition.fat,carbs:e.nutrition.carbs}),Hn=class{total;rawWeight;weight;servings;constructor(e,t,n,r){this.total=e,this.rawWeight=t,this.weight=n,this.servings=r}get per100g(){return this.weight<=0?I.zero:this.total.scaled(100/this.weight)}get servingGrams(){return this.servings<=0?this.weight:this.weight/this.servings}};function Un(e,t=null,n=1){let r=e.reduce((e,t)=>e.plus(t.nutrition),I.zero),i=e.reduce((e,t)=>e+t.grams,0);return new Hn(r,i,t!==null&&t>0?t:i,Math.max(n,1))}function Wn(e,t,n){return Gn({name:t,nutrition:n.per100g,portionGrams:n.servingGrams,id:e,dishWeight:n.weight})}function Gn(e){return new Et({id:e.id??`user:${Ln()}`,source:`user`,nameRu:jn(Ne(e.name)),nameEn:null,externalId:e.barcode??null,per100g:e.nutrition,portions:(e.portionGrams??0)>0?[{unit:`portion`,grams:e.portionGrams}]:[],dishWeight:e.dishWeight??null})}var Kn=e=>typeof e==`object`&&!!e&&!Array.isArray(e),qn=`krug-backup`,Jn=[`starter`,`off`,`usda`,`user`,`vkusvill`],Yn=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],Xn=[`unset`,`female`,`male`],Zn=class extends Error{kind;constructor(e){super(e),this.kind=e}},W=e=>typeof e==`string`?e:null,Qn=(e,t)=>typeof t==`number`&&Number.isInteger(t)&&t>=0&&t<e.length?e[t]:null,G=e=>ln(typeof e==`number`?e:null),$n=e=>{let t=G(e);return t!==null&&Number.isInteger(t)?t:null};function er(e){let t=G(e.kcal),n=G(e.protein),r=G(e.fat),i=G(e.carbs);return t===null||n===null||r===null||i===null?null:new I(t,n,r,i)}function tr(e,t=new Date){let n;try{n=JSON.parse(e)}catch{throw new Zn(`notABackup`)}if(!Kn(n)||n.format!==`krug-backup`||typeof n.version!=`number`)throw new Zn(`notABackup`);if(n.version>1)throw new Zn(`tooNew`);let r=e=>Array.isArray(n[e])?n[e].filter(Kn):[],i=V(H(2,t)).getTime(),a=e=>typeof e==`number`&&e>=0&&e<i?e:null,o={foods:[],ingredients:[],entries:[],usage:new Map,createdAt:new Map,profile:null},s=new Map;for(let e of r(`portions`)){let t=W(e.foodId),n=Qn(Yn,e.unit),r=G(e.grams);t!==null&&n!==null&&r!==null&&s.set(t,[...s.get(t)??[],{unit:n,grams:r}])}for(let e of r(`foods`)){let t=W(e.id),n=Qn(Jn,e.source),r=er(e);if(t===null||n===null||r===null)continue;o.foods.push(new Et({id:t,source:n,nameRu:W(e.nameRu),nameEn:W(e.nameEn),brand:W(e.brand),externalId:W(e.externalId),per100g:r,portions:s.get(t)??[],dishWeight:G(e.dishWeight)}));let i=a(e.createdAt);i!==null&&o.createdAt.set(t,i);let c=$n(e.useCount);c!==null&&c>0&&o.usage.set(t,{count:c,lastUsed:a(e.lastUsedAt)??i??-621355968e5})}for(let e of r(`dishIngredients`)){let t=W(e.dishId),n=typeof e.position==`number`&&Number.isInteger(e.position)?e.position:null,r=W(e.name),i=Qn(Yn,e.unit),a=G(e.unitAmount),s=G(e.grams),c=er(e);t!==null&&n!==null&&r!==null&&i!==null&&a!==null&&s!==null&&c!==null&&o.ingredients.push({dishId:t,position:n,foodId:W(e.foodId),name:r,unit:i,unitAmount:a,grams:s,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs})}for(let e of r(`entries`)){let t=W(e.id),n=W(e.dayKey),r=n===null?null:$t(n),s=W(e.name),c=a(e.loggedAt),l=Qn(Yn,e.unit),u=G(e.grams),d=G(e.unitAmount),f=er(e);t===null||n===null||r===null||r.getTime()<0||r.getTime()>=i||s===null||c===null||l===null||u===null||d===null||f===null||o.entries.push({id:t,dayKey:n,loggedAt:c,foodId:W(e.foodId),name:s,grams:u,unit:l,unitAmount:d,kcal:f.kcal,protein:f.protein,fat:f.fat,carbs:f.carbs,counted:typeof e.counted!=`boolean`||e.counted})}if(Kn(n.profile)){let e=n.profile,t=Vt();t.heightCm=$n(e.heightCm),t.weightKg=G(e.weightKg),t.sex=Qn(Xn,e.sex)??`unset`,t.birthYear=$n(e.birthYear),t.targetKcal=$n(e.targetKcal)??t.targetKcal,t.targetProtein=$n(e.targetProtein)??t.targetProtein,t.targetFat=$n(e.targetFat)??t.targetFat,t.targetCarbs=$n(e.targetCarbs)??t.targetCarbs,o.profile=t}return o}function nr(e){let t=(e.now??new Date).getTime(),n=e.ownFoods.flatMap(t=>e.ingredientsOf(t.id)),r=new Map;for(let t of e.ownFoods)r.has(t.id)||r.set(t.id,t);let i=[...e.entries.map(e=>e.foodId),...n.map(e=>e.foodId),...e.usage.keys()].filter(e=>e!==null);for(let t of i){if(r.has(t))continue;let n=e.food(t);n&&r.set(t,n)}let a=[...r.values()].sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));return{format:qn,version:1,exportedAt:new Date(t).toISOString().replace(/\.\d{3}Z$/,`Z`),foods:a.map(n=>{let r=e.usage.get(n.id);return{id:n.id,source:Jn.indexOf(n.source),externalId:n.externalId,nameRu:n.nameRu,nameEn:n.nameEn,brand:n.brand,searchText:n.searchText,kcal:n.per100g.kcal,protein:n.per100g.protein,fat:n.per100g.fat,carbs:n.per100g.carbs,useCount:r?.count??0,lastUsedAt:r?Math.round(r.lastUsed):null,isFavorite:!1,createdAt:Math.round(e.createdAt.get(n.id)??t),bundled:!1,dishWeight:n.dishWeight}}),portions:a.flatMap(e=>e.portions.map(t=>({foodId:e.id,unit:Yn.indexOf(t.unit),grams:t.grams}))),dishIngredients:n.map(e=>({dishId:e.dishId,position:e.position,foodId:e.foodId,name:e.name,unit:Yn.indexOf(e.unit),unitAmount:e.unitAmount,grams:e.grams,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs})),entries:e.entries.map(e=>({id:e.id,dayKey:e.dayKey,loggedAt:Math.round(e.loggedAt),foodId:e.foodId,name:e.name,grams:e.grams,unit:Yn.indexOf(e.unit),unitAmount:e.unitAmount,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs,counted:e.counted})),profile:{id:1,heightCm:e.profile.heightCm,weightKg:e.profile.weightKg,sex:Xn.indexOf(e.profile.sex),birthYear:e.profile.birthYear,targetKcal:e.profile.targetKcal,targetProtein:e.profile.targetProtein,targetFat:e.profile.targetFat,targetCarbs:e.profile.targetCarbs,localeOverride:null,onboardingDone:!1}}}function rr(e){return JSON.stringify(e,(e,t)=>Kn(t)?Object.fromEntries(Object.entries(t).sort(([e],[t])=>e<t?-1:1)):t,2)}var ir=e=>new I(e.kcal,e.protein,e.fat,e.carbs);function ar(e,t=L()){return e.unitAmount>0?`${e.name} ${gn(e.unitAmount,e.unit,t)}`:e.name}var or=6e3,sr=`Krug/0.1 (web; https://novanikita.github.io/krug-web)`,cr=class extends Error{constructor(){super(`rate limited`)}},lr=class extends Error{status;constructor(e){super(`status ${e}`),this.status=e}},ur=class{perMinute;times=[];pausedUntil=0;constructor(e){this.perMinute=e}take(e=performance.now()){if(this.times=this.times.filter(t=>e-t<6e4),e<this.pausedUntil||this.times.length>=this.perMinute)throw new cr;return this.times.push(e),()=>{let t=this.times.indexOf(e);t>=0&&this.times.splice(t,1)}}pause(e=performance.now()){this.pausedUntil=e+6e4}},dr=`code,product_name,product_name_ru,product_name_en,brands,nutriments,serving_quantity,product_quantity`,fr=class e{fetcher;searches=new ur(8);reads=new ur(12);constructor(e=(...e)=>fetch(...e)){this.fetcher=e}async search(t,n=`ru`,r=20){let i=new URL(`https://world.openfoodfacts.org/cgi/search.pl`);i.search=new URLSearchParams({search_terms:t,search_simple:`1`,action:`process`,json:`1`,page_size:String(r),lc:n,fields:dr}).toString();let[a,o]=await this.get(i,this.searches);if(o!==200)throw new lr(o);return e.parseSearch(a)}async byBarcode(t){let n=new URL(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(t)}.json`);n.search=new URLSearchParams({fields:dr}).toString();let[r,i]=await this.get(n,this.reads);return i===200?e.parseProduct(r):null}async get(e,t){let n=t.take(),r;try{r=await this.fetcher(e,{headers:{"X-User-Agent":sr},signal:AbortSignal.timeout(or)})}catch(e){throw e instanceof TypeError&&n(),e}if(r.status===429||r.status===503)throw t.pause(),new cr;return[r.status===200?await r.text():``,r.status]}static parseSearch(t){let n=gr(t);return(Kn(n)&&Array.isArray(n.products)?n.products:[]).filter(Kn).flatMap(t=>{let n=e.toFood(t);return n?[n]:[]})}static parseProduct(t){let n=gr(t);return Kn(n)&&Kn(n.product)?e.toFood(n.product):null}static toFood(e){let t=Kn(e.nutriments)?e.nutriments:{},n=_r(t.energy_100g),r=_r(t[`energy-kcal_100g`])??(n===null?null:n/4.184),i=e.code===void 0||e.code===null?``:String(e.code);if(r===null||i===``)return null;let a=t=>{let n=e[t];return(typeof n==`string`?hr(n.trim()):null)||null},o=a(`product_name_ru`),s=a(`product_name_en`),c=a(`product_name`);if((o??s??c)===null)return null;let l=new I(r,_r(t.proteins_100g)??0,_r(t.fat_100g)??0,_r(t.carbohydrates_100g)??0);if(!l.isPossiblePer100g)return null;let u=[],d=ln(_r(e.serving_quantity));d!==null&&d>0&&u.push({unit:`portion`,grams:d});let f=ln(_r(e.product_quantity));f!==null&&f>0&&u.push({unit:`pack`,grams:f});let p=typeof e.brands==`string`?e.brands.split(`,`).find(e=>e!==``)?.trim()??null:null;return new Et({id:`off:${i}`,source:`off`,nameRu:o,nameEn:s??c,brand:hr(p),externalId:i,per100g:l,portions:u,rare:!It.isCaredFor(o??s??c,p)})}};function pr(e){return e instanceof TypeError||e instanceof DOMException&&(e.name===`TimeoutError`||e.name===`AbortError`)}var mr=[[`&quot;`,`"`],[`&amp;`,`&`],[`&apos;`,`'`],[`&#39;`,`'`],[`&lt;`,`<`],[`&gt;`,`>`],[`&nbsp;`,` `]];function hr(e){if(!e)return e;let t=e;for(let[e,n]of mr)t=t.replaceAll(e,n);return t}function gr(e){try{return JSON.parse(e)}catch{return null}}function _r(e){return typeof e==`number`?e:typeof e==`string`?un(e):null}var vr=[`и`,`and`];function yr(e){let t=M(e.normalize(`NFC`)),n=[],r=0,i=0,a=(e,n)=>t.slice(e,n).join(``),o=(e,t)=>{n.push(a(r,e)),r=t,i=t},s=e=>Sn(a(r,e)).hasAmount,c=e=>e<t.length&&Oe(t[e]),l=e=>{if(e===0||!c(e-1))return null;for(let n of vr){let r=e+n.length;if(r<=t.length&&a(e,r).toLowerCase()===n&&c(r))return r}return null};for(;i<t.length;){let e=t[i],n=i+1;if(ke(e)||e===`;`||(e===`,`||e===`+`)&&!(e===`,`&&i>0&&je(t[i-1])&&n<t.length&&je(t[n]))&&s(i)){o(i,n);continue}let r=l(i);r!==null&&s(i)?o(i,r):i=n}let u=r;for(;u<t.length&&Oe(t[u]);)u++;let d=a(u,t.length);return n.push(d),{foods:n.map(e=>e.trim()).filter(e=>M(e).some(Ae)),tail:d}}var br=200,xr=class e{_entries=[];_usage=new Map;_profile=Object.freeze(Vt());_ownIds=[];lang=L();catalog;db;off;phrasesCache=null;listeners=new Set;quiet=0;_version=0;static cachePerQuery=10;static clearMargin=.15;static clearFloor=.79;constructor(e){this.db=e.db??Yt.inMemory(),this.catalog=e.catalog,this.off=e.off??new fr,this.catalog.add(this.db.foods()),this.reload()}reload(){this._entries=this.db.entries().map(e=>Object.freeze(e)),this._usage=this.db.usage(),this._profile=Object.freeze(this.db.profile()),this._ownIds=this.db.ownFoodIds()}get persistent(){return this.db.persistent}flushed(){return this.db.flushed()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}get version(){return this._version}changed(){if(this._version++,this.phrasesCache=null,this.quiet===0)for(let e of this.listeners)e()}together(e){this.quiet++;try{return e()}finally{this.quiet--,this.changed()}}get entries(){return this._entries}get usage(){return this._usage}get profile(){return this._profile}get ownFoods(){return this._ownIds.flatMap(e=>this.catalog.food(e)??[])}get loggedDays(){return[...new Set(this._entries.map(e=>e.dayKey))].sort().reverse()}ingredients(e){return this.db.ingredients(e)}entriesOn(e){return this._entries.filter(t=>t.dayKey===e).sort((e,t)=>e.loggedAt-t.loggedAt)}summary(e,t,n=new Date){let r=en(n),i=this._entries.filter(n=>n.counted&&nn(n.dayKey,e)&&(!t||n.dayKey<=r)),a=i.reduce((e,t)=>e.plus(ir(t)),I.zero);if(!t)return a;let o=new Set(i.map(e=>e.dayKey)).size;return o===0?I.zero:a.scaled(1/o)}get phrases(){if(this.phrasesCache)return this.phrasesCache;let e=new Map,t=new Set;for(let n of[...this._entries].sort((e,t)=>t.loggedAt-e.loggedAt)){if(n.foodId===null)continue;let r=this.catalog.food(n.foodId);if(!r)continue;let i=P(n.name),a=`${n.foodId}\n${i.toLowerCase()}`;i&&i!==r.nameRu&&i!==r.nameEn&&!t.has(a)&&(t.add(a),e.set(n.foodId,[...e.get(n.foodId)??[],new We(i)]))}return this.phrasesCache=e,e}history(e=300){return[...this._usage].sort(([,e],[,t])=>t.lastUsed-e.lastUsed).slice(0,e).flatMap(([e])=>this.catalog.food(e)??[])}lastAmount(e){let t=null;for(let n of this._entries)n.foodId===e&&(t===null||n.loggedAt>t.loggedAt)&&(t=n);return t?[t.unit,t.unitAmount]:null}guess(e,t={}){return this.lookup(e,t.remote??[],t.prefer??null,0).guess}candidates(e,t={}){return this.lookup(e,t.remote??[],null,t.limit??8).candidates}guessAndCandidates(e,t={}){let n=this.lookup(e,t.remote??[],t.prefer??null,t.limit??8);return{guess:n.guess,candidates:n.candidates}}clearGuess(e,t={}){let n=this.lookup(e,t.remote??[],null,0);return n.clear?n.guess:null}lookup(e,t,n,r){if(Sn(e).term===``)return{guess:null,candidates:[],clear:!1};let i=this.history(),a=n===null?void 0:this.catalog.food(n);a&&!i.some(e=>e.id===n)&&(i=[a,...i]);let o=[],s=null,c=this.pools(e,t),l=this.phrases;for(let[e,t]of c.entries()){o=t.canonical?t.items:[...o,...t.items];let a=new Tn(t.query),u=t.canonical?`ru`:this.lang,d=Dn(a.key,{history:i,candidates:o,usage:this._usage,matchLang:u,prefer:n,phrases:l});if(d.length===0)continue;let f=En(d[0],a,this.lang,e=>this.lastAmount(e),t.canonical,u),p=new Set,m=[];for(let e of d){if(m.length>=r)break;let t=e.food.name(this.lang).toLowerCase();p.has(t)||(p.add(t),m.push(e.food))}let h=new Set(o.map(e=>e.id)),g={guess:f,candidates:m,clear:e===0&&this.isClear(d)};if(e===c.length-1||d.some(e=>h.has(e.food.id)))return g;s??=g}return s??{guess:null,candidates:[],clear:!1}}isClear(t){let n=t[0];if(!n||n.tier>=2)return!1;if(n.logged!==null||n.pinned)return!0;if(n.relevance<e.clearFloor)return!1;let r=t.slice(1).filter(e=>e.logged===null);if(r.some(t=>t.tier<n.tier&&n.relevance-t.relevance<e.clearMargin+.3))return!1;let i=e=>{let t=new Set(e.key.matchWords),r=new Set(n.key.matchWords);return t.size===r.size&&[...t].every(e=>r.has(e))},a=r.find(e=>!i(e));return!a||n.relevance-a.relevance>=e.clearMargin}pools(e,t){let n=Sn(e).term;if(n===``)return[];let r=(e,t=this.lang)=>this.catalog.search(e,{limit:60,usage:this._usage,lang:t}),i=r(n),a=new Set(i.map(e=>e.id)),o=[{query:e,items:[...i,...t.filter(e=>!a.has(e.id))],canonical:!1}],s=Ve(n)[0];s!==void 0&&N(s)>=4&&o.push({query:e,items:r(M(s).slice(0,3).join(``)),canonical:!1});let c=this.lang===`ru`?bt(e):null;return c!==null&&o.push({query:c,items:r(Sn(c).term,`ru`),canonical:!0}),o}async searchOnline(t){let n=this.heardBefore(t);if(n)return n;try{let n=await this.off.search(t),r=n.filter(e=>!this.catalog.food(e.id));this.remember(r.slice(0,e.cachePerQuery));let i=t.toLowerCase();return this.heard.delete(i),this.heard.set(i,n),this.heard.size>br&&this.heard.delete(this.heard.keys().next().value),{term:t,items:n,offline:!1}}catch(e){return{term:t,items:[],offline:pr(e),limited:!pr(e)&&e instanceof cr}}}heardBefore(e){let t=this.heard.get(e.toLowerCase());return t?{term:e,items:t,offline:!1}:null}heard=new Map;async lookupBarcode(e){let t=this.catalog.foodByBarcode(e);if(t)return{food:t,offline:!1};try{let t=await this.off.byBarcode(e);return t?(this.catalog.add([t],!0),this.db.save([t],!0),{food:t,offline:!1}):{food:null,offline:!1}}catch(e){return{food:null,offline:pr(e)||e instanceof cr}}}remember(e){e.length!==0&&(this.catalog.add(e),this.db.save(e,!1))}saveOwn(e){this.catalog.add([e],!0),this.db.save([e],!0),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}saveDish(e,t){this.catalog.add([e],!0),this.db.saveDish(e,t.map((t,n)=>Vn(t,e.id,n))),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}deleteOwn(e){let t=this.db.deleteFood(e.id);return t?(this.catalog.remove(e.id),this._ownIds=this._ownIds.filter(t=>t!==e.id),this._entries=this._entries.map(t=>t.foodId===e.id?Object.freeze({...t,foodId:null}):t),this.changed(),t):null}restoreFood(e){this.db.restoreFood(e),this.catalog.add([e.food]),this._ownIds=this.db.ownFoodIds();let t=new Set(e.entryIds);this._entries=this._entries.map(n=>t.has(n.id)?Object.freeze({...n,foodId:e.food.id}):n),this.changed()}log(e,t,n,r,i={}){let a=i.now??new Date,o=i.replacing??null;this.catalog.food(e.id)||this.remember([e]);let s=t===`gram`?n:n*(e.portion(t)?.grams??1),c=e.per100g.forGrams(s);if(this.put({id:o?.id??Ln(),dayKey:o?.dayKey??r,loggedAt:i.at??this.loggedAt(r,o,a),foodId:e.id,name:i.name??e.name(this.lang),grams:s,unit:t,unitAmount:n,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs,counted:!0},o),o?.foodId!==e.id){let t={...this._usage.get(e.id)??{count:0,lastUsed:a.getTime()}};t.count+=1,t.lastUsed=a.getTime(),this._usage.set(e.id,t),this.db.saveUsage(t,e.id)}this.changed()}logSuggestion(e,t,n={}){this.log(e.food,e.unit,e.amount,t,{name:e.label,replacing:n.replacing,now:n.now})}logUncounted(e,t,n={}){let r=n.replacing??null,i=Sn(e);!i.explicitUnit&&i.amount!==null&&i.amount<=12&&(i=new yn(Ne(e)));let a=i.amount??0,o=i.unit??`gram`;this.put({id:r?.id??Ln(),dayKey:r?.dayKey??t,loggedAt:n.at??this.loggedAt(t,r,n.now??new Date),foodId:null,name:jn(i.term),grams:o===`gram`||o===`ml`?a:0,unit:o,unitAmount:a,kcal:0,protein:0,fat:0,carbs:0,counted:!1},r),this.changed()}logLine(e,t,n={}){let r=n.now??new Date,i=yr(e).foods,a=this.loggedAt(t,n.replacing??null,r);return this.together(()=>i.forEach((e,o)=>{let s=o===i.length-1,c=a+o,l=o===0?n.replacing??null:null,u=s?n.picked??null:null,d=u?Nn(e,u):null;if(u&&d){this.log(u,d[0],d[1],t,{replacing:l,now:r,at:c});return}let f=s?this.guess(e,{remote:n.remote,prefer:i.length===1?n.prefer:null}):this.clearGuess(e);f?this.log(f.food,f.unit,f.amount,t,{name:f.label,replacing:l,now:r,at:c}):this.logUncounted(e,t,{replacing:l,now:r,at:c})})),i.length}loggedAt(e,t,n){if(t)return t.loggedAt;if(e===en(n))return n.getTime();let r=V(e);return r.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),r.getTime()}put(e,t){let n=t?this._entries.findIndex(e=>e.id===t.id):-1,r=Object.freeze(e);this._entries=n>=0?this._entries.map((e,t)=>t===n?r:e):[...this._entries,r],this.db.saveEntry(e)}get onboarded(){return this.db.meta(`onboardingDone`)===`true`}finishOnboarding(e){this.together(()=>{e&&this.updateProfile(e),this.db.setMeta(`onboardingDone`,`true`),this.db.setMeta(`onboardingProfile`,JSON.stringify(this._profile))})}updateProfile(e){let t={...this._profile};e(t),!Ut(t,this._profile)&&(this._profile=Object.freeze(t),this.db.saveProfile(t),this.changed())}backupDocument(e=new Date){return nr({entries:this._entries,ownFoods:this.ownFoods,ingredientsOf:e=>this.ingredients(e),food:e=>this.catalog.food(e),usage:this._usage,createdAt:this.db.ownCreatedAt(),profile:this._profile,now:e})}importBackup(e){let t=typeof e==`string`?tr(e):e,n=t.foods.filter(e=>!this.catalog.food(e.id)),r=new Set(n.map(e=>e.id)),i=e=>e!==null&&(r.has(e)||this.catalog.food(e))?e:null,a=this.db.meta(`onboardingProfile`),o=this.db.importBackup({replaceProfile:a!==null&&Ut(JSON.parse(a),this._profile),foods:n,createdAt:t.createdAt,ingredients:t.ingredients.map(e=>({...e,foodId:i(e.foodId)})),entries:t.entries.map(e=>({...e,foodId:i(e.foodId)})),usage:new Map([...t.usage].filter(([e])=>i(e)!==null)),profile:t.profile});return this.catalog.add(n),this.reload(),this.changed(),o}restoreBackup(e){if(!this.persistent)return{message:R(`Дневник сейчас не сохраняется — перенос не выполнен. Перезапустите приложение и попробуйте снова`),done:!1};try{let t=this.importBackup(e);return{message:t.entries===0&&t.foods===0?R(`Всё из этой копии уже есть в дневнике`):R(`Добавлено записей: %lld, продуктов: %lld`,[t.entries,t.foods]),done:!0}}catch(e){return e instanceof Zn&&e.kind===`tooNew`?{message:R(`Эта копия сделана более новой версией Круга — обновите приложение`),done:!1}:e instanceof Zn?{message:R(`Это не файл резервной копии Круга`),done:!1}:{message:R(`Не получилось — попробуйте ещё раз`),done:!1}}}delete(e){this._entries=this._entries.filter(t=>t.id!==e.id),this.db.deleteEntry(e.id),this.changed()}restoreEntry(e){this._entries.some(t=>t.id===e.id)||(this._entries=[...this._entries,Object.freeze({...e})],this.db.saveEntry(e),this.changed())}},Sr=1,Cr=[`food`,`usage`,`entry`,`dishIngredient`,`profile`,`meta`];async function wr(e=`krug`,t=()=>{}){try{let n=await Er(e);return new Yt(await Dr(n),new Tr(e,n,t))}catch(e){return t(e),Yt.inMemory()}}var Tr=class{name;onError;pending=Promise.resolve();connection;constructor(e,t,n){this.name=e,this.onError=n,this.connection=this.watch(t)}write(e){this.pending=this.pending.then(()=>this.apply(e).catch(this.onError))}flushed(){return this.pending}async apply(e){try{await this.transact(await this.db(),e)}catch(t){if(!(t instanceof DOMException&&(t.name===`InvalidStateError`||t.name===`UnknownError`)))throw t;this.connection=null,await this.transact(await this.db(),e)}}async db(){return this.connection??=this.watch(await Er(this.name))}watch(e){return e.onclose=()=>{this.connection===e&&(this.connection=null)},e.onversionchange=()=>{e.close(),this.connection===e&&(this.connection=null)},e}transact(e,t){let n=e.transaction([...new Set(t.map(e=>e.table))],`readwrite`),r=Or(n);try{for(let e of t){let t=n.objectStore(e.table);e.value===void 0?t.delete(e.key):t.put(e.value,e.key)}}catch(e){throw n.abort(),r.catch(()=>{}),e}return r}};function Er(e){return new Promise((t,n)=>{let r=indexedDB.open(e,Sr);r.onupgradeneeded=()=>{for(let e of Cr)r.result.objectStoreNames.contains(e)||r.result.createObjectStore(e)},r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error),r.onblocked=()=>n(Error(`blocked`))})}async function Dr(e){let t=e.transaction(Cr,`readonly`),n=e=>new Promise((n,r)=>{let i=t.objectStore(e).getAll();i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)}),r=Gt();return r.food=await n(`food`),r.usage=await n(`usage`),r.entry=await n(`entry`),r.dishIngredient=await n(`dishIngredient`),r.profile=(await n(`profile`))[0]??null,r.meta=(await n(`meta`)).map(e=>[e.key,e.value]),r}function Or(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error??new DOMException(`aborted`,`AbortError`))})}var kr,K,Ar,jr,Mr=0,Nr=[],q=m,Pr=q.__b,Fr=q.__r,Ir=q.diffed,Lr=q.__c,Rr=q.unmount,zr=q.__;function Br(e,t){q.__h&&q.__h(K,e,Mr||t),Mr=0;var n=K.__H||(K.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return Mr=1,Vr(Zr,e)}function Vr(e,t,n){var r=Br(kr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Zr(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=K,!K.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};K.__f=!0;var a=K.shouldComponentUpdate,o=K.componentWillUpdate;K.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},K.shouldComponentUpdate=i}return r.__N||r.__}function Y(e,t){var n=Br(kr++,3);!q.__s&&Xr(n.__H,t)&&(n.__=e,n.u=t,K.__H.__h.push(n))}function Hr(e,t){var n=Br(kr++,4);!q.__s&&Xr(n.__H,t)&&(n.__=e,n.u=t,K.__h.push(n))}function X(e){return Mr=5,Ur(function(){return{current:e}},[])}function Ur(e,t){var n=Br(kr++,7);return Xr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Wr(e){var t=K.context[e.__c],n=Br(kr++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(K)),t.props.value):e.__}function Gr(){for(var e;e=Nr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Jr),t.__h.some(Yr),t.__h=[]}catch(n){t.__h=[],q.__e(n,e.__v)}}}q.__b=function(e){K=null,Pr&&Pr(e)},q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),zr&&zr(e,t)},q.__r=function(e){Fr&&Fr(e),kr=0;var t=(K=e.__c).__H;t&&(Ar===K?(t.__h=[],K.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(Jr),t.__h.some(Yr),t.__h=[],kr=0)),Ar=K},q.diffed=function(e){Ir&&Ir(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Nr.push(t)!==1&&jr===q.requestAnimationFrame||((jr=q.requestAnimationFrame)||qr)(Gr)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),Ar=K=null},q.__c=function(e,t){t.some(function(e){try{e.__h.some(Jr),e.__h=e.__h.filter(function(e){return!e.__||Yr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],q.__e(n,e.__v)}}),Lr&&Lr(e,t)},q.unmount=function(e){Rr&&Rr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Jr(e)}catch(e){t=e}}),n.__H=void 0,t&&q.__e(t,n.__v))};var Kr=typeof requestAnimationFrame==`function`;function qr(e){var t,n=function(){clearTimeout(r),Kr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Kr&&(t=requestAnimationFrame(n))}function Jr(e){var t=K,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),K=t}function Yr(e){var t=K;e.__c=e.__(),K=t}function Xr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function Zr(e,t){return typeof t==`function`?t(e):t}var Qr=[`day`,`week`,`month`,`halfYear`,`year`],$r={day:`День`,week:`Неделя`,month:`Месяц`,halfYear:`Полгода`,year:`Год`},ei={day:`ДН`,week:`НЕД`,month:`МЕС`,halfYear:`6 МЕС`,year:`ГОД`},ti=(e,t=L())=>R($r[e],[],t),ni=(e,t=L())=>R(ei[e],[],t);function ri(e,t=0,n=new Date){let r=Xt(n),i=new Date(r.getFullYear(),r.getMonth(),1),a,o;switch(e){case`day`:o=z(r,-t),a=o;break;case`week`:o=z(r,-7*t),a=z(o,-6);break;case`month`:a=Zt(i,-t),o=t===0?r:z(Zt(a,1),-1);break;case`halfYear`:case`year`:{let n=e===`halfYear`?6:12,s=Zt(i,-n*t);a=Zt(s,-(n-1)),o=t===0?r:z(Zt(s,1),-1)}}return[B(a),B(o)]}function ii(e){let t=new Map;for(let n of e)n.counted&&t.set(n.dayKey,(t.get(n.dayKey)??I.zero).plus(ir(n)));return t}function ai(e){return e.size===0?I.zero:[...e.values()].reduce((e,t)=>e.plus(t),I.zero).scaled(1/e.size)}function oi(e){let t=new Map;for(let[n,r]of e){let e=n.slice(0,7);t.has(e)||t.set(e,new Map),t.get(e).set(n,r)}return new Map([...t].map(([e,t])=>[e,ai(t)]))}function si(e,t,n=L(),r=new Date){return e===`day`?tn(t[0],r,n):R(`В среднем за %@`,[ci(t,n)],n)}function ci([e,t],n=L()){let r=V(e),i=V(t),a=e=>Ft(n,e),o=a({day:`numeric`,month:`short`,year:`numeric`}),s=a({day:`numeric`,month:`short`}),c=a({month:`short`,year:`numeric`}),l=a({month:`short`});if(e===t)return o.format(i);let u=r.getFullYear()===i.getFullYear(),d=u&&r.getMonth()===i.getMonth(),f=Math.round((i.getTime()-r.getTime())/864e5);return r.getDate()===1&&!d&&f>40?u?`${l.format(r)} – ${c.format(i)}`:`${c.format(r)} – ${c.format(i)}`:d?`${r.getDate()}–${o.format(i)}`:u?`${s.format(r)} – ${o.format(i)}`:`${o.format(r)} – ${o.format(i)}`}var li=De(null);function Z(){let e=Wr(li);if(!e)throw Error(`no store`);let[,t]=Vr((e,t)=>e+1,0);return Y(()=>e.subscribe(()=>t()),[e]),e}function ui(e,t,n){let[r,i]=J(()=>{try{let r=localStorage.getItem(e);return n.includes(r)?r:t}catch{return t}});return[r,t=>{i(t);try{localStorage.setItem(e,t)}catch{}}]}function di(e){let[t,n]=J(()=>matchMedia(e).matches);return Y(()=>{let t=matchMedia(e),r=()=>n(t.matches);return t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var fi=`(min-width: 1024px)`;function pi(){let[e,t]=J(()=>({online:navigator.onLine,reconnects:0}));return Y(()=>{let e=()=>t(e=>({online:!0,reconnects:e.reconnects+1})),n=()=>t(e=>({...e,online:!1}));return addEventListener(`online`,e),addEventListener(`offline`,n),()=>{removeEventListener(`online`,e),removeEventListener(`offline`,n)}},[]),e}function mi(){let[e,t]=J(()=>H(0));return Y(()=>{let e,n=()=>t(H(0)),r=()=>{let t=new Date;t.setHours(24,0,1,0),e=setTimeout(()=>(n(),r()),t.getTime()-Date.now())},i=()=>document.visibilityState===`visible`&&n();return r(),document.addEventListener(`visibilitychange`,i),()=>{clearTimeout(e),document.removeEventListener(`visibilitychange`,i)}},[]),e}var hi=new WeakMap;function gi(e){let t=hi.get(e);if(t?.version===e.version)return t.days;let n=ii(e.entries);return hi.set(e,{version:e.version,days:n}),n}var _i=0;Array.isArray;function Q(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_i,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return m.vnode&&m.vnode(l),l}var $=(e,{size:t=22,label:n},r=!1)=>Q(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:r?`currentColor`:`none`,stroke:r?`none`:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,role:n?`img`:void 0,"aria-label":n,"aria-hidden":!n||void 0,children:e}),vi=e=>$(Q(`path`,{d:`M2.5 5.5h19M2.5 12h19M2.5 18.5h19`}),e),yi=e=>$(Q(`path`,{"fill-rule":`evenodd`,d:`M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.3 5.3a1 1 0 0 0-1.4 1.4L10.6 12l-3.3 3.3a1 1 0 1 0 1.4 1.4L12 13.4l3.3 3.3a1 1 0 0 0 1.4-1.4L13.4 12l3.3-3.3a1 1 0 0 0-1.4-1.4L12 10.6 8.7 7.3Z`}),e,!0),bi=e=>$(Q(`path`,{d:`m15 18-6-6 6-6`}),e),xi=e=>$(Q(`path`,{d:`m9 18 6-6-6-6`}),e),Si=e=>$(Q(`path`,{d:`M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.4-8 5.3 0 .9.7 1.7 1.6 1.7h12.8c.9 0 1.6-.8 1.6-1.7C20 16.4 16.4 14 12 14Z`}),e,!0),Ci=e=>$(Q(`path`,{d:`M4 13.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-6Zm6-5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-11Zm6-4c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v15c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-15Z`}),e,!0),wi=e=>$(Q(`path`,{d:`M6.5 2h11c.8 0 1.5.7 1.5 1.5v17.3c0 .8-.9 1.3-1.6.8L12 17.8l-5.4 3.8c-.7.5-1.6 0-1.6-.8V3.5C5 2.7 5.7 2 6.5 2Z`}),e,!0),Ti=e=>$(Q(`path`,{d:`M12 5v14M5 12h14`}),e),Ei=e=>$(Q(`path`,{d:`M12 3v12M8 7l4-4 4 4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),Di=e=>$(Q(`path`,{d:`M12 3v12M8 11l4 4 4-4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),Oi=e=>$(Q(`path`,{"fill-rule":`evenodd`,d:`M9.2 4h5.6c.6 0 1.1.3 1.4.8L17.4 7H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1.6l1.2-2.2c.3-.5.8-.8 1.4-.8ZM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z`}),e,!0),ki=e=>$(Q(j,{children:[Q(`path`,{d:`M12 2a3.5 3.5 0 0 0-3.5 3.5v6a3.5 3.5 0 0 0 7 0v-6A3.5 3.5 0 0 0 12 2Z`}),Q(`path`,{d:`M6 11a1 1 0 0 0-2 0 8 8 0 0 0 7 7.9V21H8.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H13v-2.1A8 8 0 0 0 20 11a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z`})]}),e,!0),Ai=e=>$(Q(`path`,{d:`m8 9 4-4 4 4M8 15l4 4 4-4`}),e),ji=e=>$(Q(`path`,{d:`M6 2.5h11.5c.8 0 1.5.7 1.5 1.5v15.5c0 .3-.2.5-.5.5H7a1.5 1.5 0 0 0 0 3h11.5a.5.5 0 0 1 0 1H7a2.5 2.5 0 0 1-2.5-2.5V4c0-.8.7-1.5 1.5-1.5Z`}),e,!0),Mi=`modulepreload`,Ni=function(e){return`/krug-web/`+e},Pi={},Fi=function(e){return e.pathname.endsWith(`.css`)},Ii=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Li=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ni(t,n);let r=s(t),i=Fi(r);return Ii(Pi,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Mi,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ri=[`ean_13`,`ean_8`,`upc_e`],zi=null;function Bi(){return zi??=(async()=>{let e=globalThis.BarcodeDetector;if(e&&(await e.getSupportedFormats().catch(()=>[])).includes(`ean_13`))return new e({formats:Ri});let[{BarcodeDetector:t,prepareZXingModule:n},{default:r}]=await Promise.all([Li(()=>import(`./ponyfill-DUnUwklG.js`),[]),Li(()=>import(`./zxing_reader-DuNp1kbU.js`),[])]);return n({overrides:{locateFile:(e,t)=>e.endsWith(`.wasm`)?r:t+e}}),new t({formats:Ri})})(),zi.catch(()=>zi=null),zi}function Vi({onCode:e,onPhoto:t,onClose:n}){let r=X(null),[i,a]=J(null),[o,s]=J(!1),c=t!==void 0,l=X(!1),u=()=>{let e=r.current;if(!e||!t||e.videoWidth===0||l.current)return;l.current=!0;let n=document.createElement(`canvas`);n.width=e.videoWidth,n.height=e.videoHeight,n.getContext(`2d`).drawImage(e,0,0),n.toBlob(e=>e&&t(e),`image/jpeg`,.92)};return Y(()=>{let t=null,i=!1,o;(async()=>{try{let e=c?{width:{ideal:1920},height:{ideal:1440}}:{width:{ideal:1280},height:{ideal:720}};t=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,...e},audio:!1})}catch(e){let t=e?.name;a(R(t===`NotAllowedError`||t===`SecurityError`?`Нет доступа к камере — разрешите его в настройках браузера`:`Камера недоступна на этом устройстве`));return}if(i)return t.getTracks().forEach(e=>e.stop());let n=r.current;if(n.srcObject=t,await n.play().catch(()=>{}),s(!0),c)return;let l;try{l=await Bi()}catch{a(R(`Не получилось — попробуйте ещё раз`));return}let u=0,d=async()=>{if(!i){if(n.readyState>=2){let t=await l.detect(n).then(e=>(u=0,e),()=>(u+=1,[]));if(u>=10){a(R(`Не получилось — попробуйте ещё раз`));return}let r=t[0]?.rawValue;if(r&&!i){i=!0,navigator.vibrate?.(30),e?.(r);return}}o=setTimeout(d,120)}};d()})();let l=e=>{e.key===`Escape`?n():c&&(e.key===` `||e.key===`Enter`)&&!(document.activeElement instanceof HTMLButtonElement)&&(e.preventDefault(),u())};return addEventListener(`keydown`,l),()=>{i=!0,clearTimeout(o),t?.getTracks().forEach(e=>e.stop()),removeEventListener(`keydown`,l)}},[]),Q(`div`,{class:`scanner`,role:`dialog`,"aria-modal":`true`,"aria-label":R(c?`Сфотографировать этикетку`:`Сканировать штрихкод`),children:[Q(`video`,{ref:r,playsInline:!0,muted:!0,"aria-hidden":`true`}),!c&&Q(`div`,{class:`scanner-frame`,"aria-hidden":`true`}),c&&o&&!i&&Q(`button`,{type:`button`,class:`scanner-shutter`,"aria-label":R(`Снять`),onClick:u}),Q(`button`,{type:`button`,class:`scanner-chip scanner-cancel`,onClick:n,children:R(`Отмена`)}),Q(`p`,{class:`scanner-chip scanner-caption`,role:`status`,children:i??R(c?`Наведите камеру на таблицу пищевой ценности`:`Наведите камеру на штрихкод`)})]})}var Hi=e=>e.kcal===void 0&&e.protein===void 0&&e.fat===void 0&&e.carbs===void 0;function Ui(e){let t=e.map(e=>e.toLowerCase().replaceAll(`,`,`.`)).join(` | `),n={},r=Ki(t),i=Gi(`белк`,t),a=Gi(`жир`,t),o=Gi(`углевод`,t);return r!==void 0&&(n.kcal=r),i!==void 0&&(n.protein=i),a!==void 0&&(n.fat=a),o!==void 0&&(n.carbs=o),n}var Wi=String.raw`(\d+(?:\.\d+)?)`;function Gi(e,t){let n=qi(e+String.raw`[^0-9|]{0,25}(?:\|\s*)?[^0-9]{0,6}`+Wi,t);return n===void 0?void 0:Ji(n)}function Ki(e){let t=qi(Wi+String.raw`\s*(?:\|\s*)?ккал`,e);if(t!==void 0||(t=qi(`калорийност`+String.raw`[^0-9|]{0,30}`+Wi,e),t!==void 0))return Ji(t);t=qi(Wi+String.raw`\s*(?:\|\s*)?кдж`,e);let n=t===void 0?void 0:Ji(t,4e3);return n===void 0?void 0:Math.round(n/4.184*10)/10}function qi(e,t){return new RegExp(e,`u`).exec(t)?.[1]}function Ji(e,t=1e3){let n=Number(e);return Number.isFinite(n)&&n>=0&&n<=t?n:void 0}var Yi=null;function Xi(){return Yi??=(async()=>{let{createWorker:e}=await Li(async()=>{let{createWorker:e}=await import(`./src-DcWjX4PV.js`).then(e=>u(e.default,1));return{createWorker:e}},[]),t=`/krug-web/ocr/7.0.0-7.0.0`;return e([`rus`,`eng`],1,{workerPath:`${t}/worker.min.js`,corePath:`${t}/core`,langPath:`${t}/lang`,gzip:!0,workerBlobURL:!1,cacheMethod:`none`})})(),Yi.catch(()=>Yi=null),Yi}async function Zi(e){try{let t=await createImageBitmap(e),n=await(await Bi()).detect(t);return[...new Set(n.map(e=>e.rawValue))]}catch{return[]}}async function Qi(e){try{let{data:t}=await(await Xi()).recognize(e);return Ui(t.text.split(`
`).map(e=>e.trim()).filter(Boolean))}catch{return{}}}var $i=globalThis.SpeechRecognition??globalThis.webkitSpeechRecognition,ea=()=>$i!==void 0;function ta(e,t){if(!$i)return t.onProblem(R(`Не получилось — попробуйте ещё раз`)),()=>{};let n=new $i;return n.lang=jt(e),n.interimResults=!0,n.continuous=!1,n.onresult=e=>{let n=Array.from(e.results);t.onText(n.map(e=>e[0].transcript).join(``).trim(),n.length>0&&n.every(e=>e.isFinal))},n.onerror=e=>{e.error!==`no-speech`&&e.error!==`aborted`&&t.onProblem(e.error===`not-allowed`||e.error===`service-not-allowed`?R(`Нет доступа к микрофону или распознаванию речи — разрешите в настройках браузера`):e.error===`network`?R(`Голосовой ввод не работает без сети`):e.error===`audio-capture`?R(`Микрофон не найден`):R(`Не получилось — попробуйте ещё раз`))},n.onend=()=>t.onDone(),n.start(),()=>n.stop()}var na=[];function ra({options:e,value:t,onChange:n,label:r,segmented:i=!1}){let a=Math.max(0,e.findIndex(e=>e.value===t));return Q(`div`,{class:`pill${i?` segmented`:``}`,role:`radiogroup`,"aria-label":r,style:{"--count":e.length,"--index":a},children:[Q(`span`,{class:`pill-thumb`,"aria-hidden":`true`}),e.map(e=>Q(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===t,"aria-label":e.name,class:e.value===t?`on`:``,onClick:()=>n(e.value),children:e.text},e.value))]})}function ia({value:e,onChange:t,options:n,label:r}){return Q(`span`,{class:`picker`,children:[Q(`span`,{"aria-hidden":`true`,children:n.find(t=>t.value===e)?.text}),Q(Ai,{size:15}),Q(`select`,{class:`picker-select`,"aria-label":r,value:e,onChange:e=>t(e.currentTarget.value),children:n.map(e=>Q(`option`,{value:e.value,children:e.text},e.value))})]})}function aa({x:e,y:t,openedAt:n,onClose:r,children:i}){let a=X(null),[o,s]=J({left:e,top:t});return Hr(()=>{let n=a.current.getBoundingClientRect(),r=t+8+n.height<=innerHeight-8;s({left:Math.min(Math.max(8,e-n.width*.1),innerWidth-n.width-8),top:r?t+8:Math.max(8,t-8-n.height)})},[e,t]),Q(`div`,{class:`popover-backdrop`,onClick:()=>Date.now()-n>400&&r(),onContextMenu:e=>(e.preventDefault(),r()),children:Q(`div`,{ref:a,class:`popover`,role:`menu`,style:{left:`${o.left}px`,top:`${o.top}px`},onClick:e=>e.stopPropagation(),children:i})})}function oa(e=4e3){let[t,n]=J([]),r=X();return Y(()=>()=>clearTimeout(r.current),[]),{items:t,add(t){n(e=>[...e,t]),clearTimeout(r.current),r.current=setTimeout(()=>n([]),e)},take(){clearTimeout(r.current);let e=t;return n([]),e}}}function sa({shown:e,onRestore:t}){return e?Q(`div`,{class:`undo`,role:`status`,children:[Q(`span`,{children:R(`Удалено`)}),Q(`button`,{type:`button`,onClick:t,children:R(`Вернуть`)})]}):null}function ca({title:e,onClose:t,closeText:n=R(`Закрыть`),cancel:r=!1,action:i,children:a,dismissible:o=!0}){let s=X(null),c=X({onClose:t,dismissible:o});return c.current={onClose:t,dismissible:o},Y(()=>{let e={};na.push(e);let t=document.activeElement,n=t=>{t.key===`Escape`&&na.at(-1)===e&&(t.preventDefault(),c.current.dismissible&&c.current.onClose())};return addEventListener(`keydown`,n),s.current?.contains(document.activeElement)||s.current?.focus(),()=>{na.splice(na.indexOf(e),1),removeEventListener(`keydown`,n),t?.focus?.({preventScroll:!0})}},[]),Q(`div`,{class:`sheet-backdrop`,onClick:e=>e.target===e.currentTarget&&o&&t(),children:Q(`div`,{class:`sheet`,role:`dialog`,"aria-modal":`true`,"aria-label":e,ref:s,tabIndex:-1,children:[Q(`div`,{class:`sheet-bar`,children:[Q(`button`,{type:`button`,class:`glass sheet-close${r?` tinted`:``}`,onClick:t,children:n}),Q(`h2`,{class:`sheet-title`,children:e}),Q(`div`,{class:`sheet-action`,children:i})]}),Q(`div`,{class:`sheet-body`,children:a})]})})}var la=e=>e===void 0?``:String(e);function ua({request:e,onSave:t,onClose:n}){let[r,i]=J(e.name),[a,o]=J(la(e.initial?.kcal)),[s,c]=J(la(e.initial?.protein)),[l,u]=J(la(e.initial?.fat)),[d,f]=J(la(e.initial?.carbs)),[p,m]=J(la(e.existing?.portion(`portion`)?.grams)),h=X(null),g=X(null),_=r.trim()!==``&&(dn(a)??-1)>=0;Y(()=>{(e.name?g:h).current?.focus()},[]);let v=()=>{let i=dn(a);_&&i!==null&&(t(Gn({name:r,nutrition:new I(i,dn(s)??0,dn(l)??0,dn(d)??0),portionGrams:dn(p),id:e.existing?.id,barcode:e.barcode??null})),n())},y=(e,t,n,r,i)=>Q(`label`,{class:`food-number`,children:[Q(`input`,{ref:i,inputMode:`decimal`,placeholder:`0`,value:e,onInput:e=>t(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()}),Q(`span`,{style:{color:`var(--${r})`},children:n})]});return Q(ca,{title:R(`Свой продукт`),onClose:n,closeText:R(`Отмена`),cancel:!0,action:Q(`button`,{type:`button`,class:`glass sheet-confirm`,disabled:!_,onClick:v,children:R(`Сохранить`)}),children:Q(`div`,{class:`food-form`,children:[e.hint&&Q(`p`,{class:`hint`,children:e.hint}),Q(`textarea`,{ref:h,class:`food-name`,rows:1,placeholder:R(`Название`),"aria-label":R(`Название`),value:r,autocapitalize:`sentences`,onInput:e=>i(e.currentTarget.value.replace(/[\r\n]+/g,` `)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g.current?.focus())}}),Q(`div`,{class:`food-per`,children:R(`на 100 г`)}),Q(`div`,{class:`food-numbers`,children:[y(a,o,R(`Ккал`),`kcalInk`,g),y(s,c,R(`Б`),`proteinInk`),y(l,u,R(`Ж`),`fatInk`),y(d,f,R(`У`),`carbsInk`)]}),Q(`label`,{class:`food-portion`,children:[Q(`span`,{children:R(`Вес порции, г`)}),Q(`input`,{inputMode:`decimal`,placeholder:`—`,value:p,onInput:e=>m(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()})]})]})})}var da=864e5,fa=e=>Math.round((V(e).getTime()-Xt(new Date).getTime())/da),pa=e=>Math.min(-365,e?fa(e):0);function ma(e,t){let n=(e,t)=>t>0?e/t:0;return[{progress:n(e.kcal,t.kcal),color:`kcal`},{progress:n(e.protein,t.protein),color:`protein`},{progress:n(e.fat,t.fat),color:`fat`},{progress:n(e.carbs,t.carbs),color:`carbs`}]}function ha({children:e}){let t=X(null),n=X(null),[r,i]=J(1);return Hr(()=>{let e=()=>{let e=n.current.offsetWidth;i(e>0?Math.max(.5,Math.min(1,t.current.clientWidth/e)):1)};e();let r=new ResizeObserver(e);return r.observe(t.current),r.observe(n.current),()=>r.disconnect()},[]),Q(`div`,{class:`fit-line`,ref:t,children:Q(`div`,{class:`fit-line-inner`,ref:n,style:{transform:`scale(${r})`},children:e})})}function ga(e,t,n){let r=n,i=n,a=e-n,o=t-n;if(a<=r||o<=i)return``;let s=Math.min(a-r,o-i)/2;return`M ${(r+a)/2} ${i} L ${a-s} ${i} A ${s} ${s} 0 0 1 ${a-s} ${o} L ${r+s} ${o} A ${s} ${s} 0 0 1 ${r+s} ${i} Z`}function _a({rings:e,stroke:t=13,gap:n=3,label:r,children:i}){let a=X(null),[o,s]=J({w:0,h:0});Hr(()=>{let e=a.current,t=()=>s({w:e.clientWidth,h:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let c=e.length*(t+n)+4;return Q(`div`,{class:`stadium`,ref:a,role:`img`,"aria-label":r,children:[Q(`svg`,{width:o.w,height:o.h,viewBox:`0 0 ${o.w||1} ${o.h||1}`,"aria-hidden":`true`,children:o.w>0&&e.map((e,r)=>{let i=ga(o.w,o.h,t/2+r*(t+n)),a=Math.max(0,e.progress),s=Math.min(Math.max(a-1,0),.999),c=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,"stroke-linecap":`round`,children:[Q(`path`,{d:i,stroke:c,class:`ring-track`}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${Math.min(a,1)} 1`,opacity:+(a>0)}}),Q(`path`,{d:i,stroke:`var(--ringShadow)`,pathLength:1,class:`ring-fill ring-tip`,style:{strokeDasharray:`0.012 1`,strokeDashoffset:-s,opacity:+(a>1),filter:`blur(${t*.3}px)`}}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${s} 1`,opacity:+(a>1)}})]},e.color)})}),Q(`div`,{class:`stadium-content`,style:{padding:`${c}px`},children:i})]})}function va({rings:e,stroke:t=8,gap:n=3,children:r}){let i=X(null),[a,o]=J(0);Hr(()=>{let e=i.current,t=()=>o(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let s=a/2;return Q(`div`,{class:`activity`,ref:i,children:[Q(`svg`,{width:a,height:a,viewBox:`0 0 ${a||1} ${a||1}`,"aria-hidden":`true`,children:a>0&&e.map((e,r)=>{let i=s-t/2-r*(t+n);if(i<=0)return null;let a=Math.min(Math.max(e.progress,0),1),o=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,children:[Q(`circle`,{cx:s,cy:s,r:i,stroke:o,class:`ring-track`}),Q(`circle`,{cx:s,cy:s,r:i,stroke:o,"stroke-linecap":`round`,pathLength:1,transform:`rotate(-90 ${s} ${s})`,class:`ring-fill ring-fill-circle`,style:{strokeDasharray:`${a} 1`,opacity:+(a>0)}})]},e.color)})}),r&&Q(`div`,{class:`activity-content`,children:r})]})}var ya=()=>[{value:`day`,text:R(`Д`),name:R(`День`)},{value:`week`,text:R(`Н`),name:R(`Неделя`)},{value:`month`,text:R(`М`),name:R(`Месяц`)}];function ba(e,t,n){return n===`day`?e.summary([t,t],!1):e.summary(n===`week`?an(t):on(t),!0)}function xa({dayKey:e,period:t,onPeriod:n}){let r=Z(),i=ba(r,e,t),a=`${R(`Калории`)} ${cn(i.kcal)}, ${R(`Белки`)} ${U(i.protein)}, ${R(`Жиры`)} ${U(i.fat)}, ${R(`Углеводы`)} ${U(i.carbs)}`;return Q(`section`,{class:`summary`,"aria-label":R(`Сводка`),children:[Q(ra,{options:ya(),value:t,onChange:n,label:R(`Период`)}),Q(_a,{rings:ma(i,Ht(r.profile)),label:a,children:Q(`div`,{class:`summary-numbers`,"aria-hidden":`true`,children:[Q(ha,{children:[Q(`span`,{class:`ink-kcal`,children:R(`Ккал`)}),` `,cn(i.kcal)]}),Q(ha,{children:[Q(`span`,{class:`ink-protein`,children:R(`Б`)}),` `,U(i.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:R(`Ж`)}),` `,U(i.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:R(`У`)}),` `,U(i.carbs)]})]})})]})}function Sa({month:e,lang:t,class:n,day:r}){let[i,a]=on(B(e)),o=V(i),s=V(a).getDate(),c=(o.getDay()+6)%7,l=Ft(t,{weekday:`narrow`});return Q(`div`,{class:n,children:[Array.from({length:7},(e,t)=>Q(`span`,{class:`caption`,children:l.format(z(o,t-c))},`l${t}`)),Array.from({length:c},(e,t)=>Q(`span`,{},`e${t}`)),Array.from({length:s},(e,t)=>{let n=z(o,t),i=B(n);return Q(j,{children:r(n,i)},i)})]})}function Ca({from:e,lang:t,days:n,targets:r,selected:i,enabled:a=()=>!0,onDay:o,label:s}){let c=Ft(t,{weekday:`short`}),l=en();return Q(`div`,{class:`week-strip`,role:s?`group`:void 0,"aria-label":s,children:Array.from({length:7},(t,s)=>{let u=z(e,s),d=B(u),f=Q(j,{children:[Q(`span`,{class:`caption`,children:c.format(u)}),Q(va,{rings:ma(n.get(d)??I.zero,r),stroke:3.5,gap:1.5}),Q(`span`,{class:`caption day-number${d===l?` today`:``}`,children:u.getDate()})]});return o?Q(`button`,{type:`button`,class:`week-day${d===i?` selected`:``}`,disabled:!a(d),"aria-pressed":d===i,onClick:()=>o(d),children:f},d):Q(`div`,{class:`week-day`,children:f},d)})})}function wa({dayKey:e,period:t,onDay:n}){let r=Z(),i=Ht(r.profile),a=ba(r,e,t),o=(e,n,r,i,a,o)=>{let s=Number(a(r))-Number(a(n));return Q(`div`,{class:`goal-tile`,children:[Q(`div`,{class:`goal-label`,children:e}),Q(`div`,{class:`goal-value`,style:{color:`var(--${i})`},children:[a(n),Q(`span`,{class:`goal-of`,children:[` / `,a(r)]})]}),Q(`div`,{class:`goal-left`,children:t===`day`?s>=0?R(`осталось %@`,[`${a(s)} ${o}`]):R(`больше на %@`,[`${a(-s)} ${o}`]):R(`в среднем за день`)})]})},s=gi(r),c=H(pa(r.loggedDays.at(-1))),l=H(1);return Q(j,{children:[Q(`div`,{class:`goal-tiles`,children:[o(R(`Калории`),a.kcal,i.kcal,`kcalInk`,cn,R(`ккал`)),o(R(`Белки`),a.protein,i.protein,`proteinInk`,U,R(`г`)),o(R(`Жиры`),a.fat,i.fat,`fatInk`,U,R(`г`)),o(R(`Углеводы`),a.carbs,i.carbs,`carbsInk`,U,R(`г`))]}),Q(Ca,{from:rn(V(e)),lang:r.lang,days:s,targets:i,selected:e,enabled:e=>e>=c&&e<=l,onDay:n,label:R(`Неделя`)})]})}function Ta(e,t){if(!t||!e)return null;let n=M(t),r=M(e);return t.toLowerCase().startsWith(e.toLowerCase())?n.length>r.length?n.slice(r.length).join(``):null:`${e.endsWith(` `)?``:` `}→ ${t}`}function Ea({text:e,onText:t,suggestion:n,onSubmit:r,onGhostTap:i,onFocus:a,onBlur:o,fieldRef:s,placeholder:c=R(`Введите продукт…`),id:l}){let u=Ta(e,n),d=X(null),f=e=>{e.value.trim()===``?e.blur():r(e.value)};return Q(`div`,{class:`ghost-field`,children:[Q(`div`,{class:`ghost-layer`,"aria-hidden":`true`,children:[Q(`span`,{class:`ghost-typed`,children:e}),u!==null&&Q(`span`,{class:`ghost-rest`,ref:d,children:u}),`​`]}),Q(`textarea`,{ref:e=>{e?.setAttribute(`autocorrect`,`off`),typeof s==`function`?s(e):s&&(s.current=e)},id:l,rows:1,value:e,placeholder:c,"aria-label":c,"aria-description":n?R(`Подсказка: %@`,[n]):void 0,enterkeyhint:`go`,autocomplete:`off`,spellcheck:!1,autocapitalize:`sentences`,onFocus:a,onBlur:o,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),f(e.currentTarget))},onBeforeInput:e=>{(e.inputType===`insertLineBreak`||e.inputType===`insertParagraph`)&&(e.preventDefault(),f(e.currentTarget))},onInput:e=>{let n=e.currentTarget.value;t(/[\r\n]/.test(n)?n.split(/[\r\n]+/).map(e=>e.trim()).filter(Boolean).join(`; `):n)},onClick:e=>{if(!i||!d.current)return;let{clientX:t,clientY:n}=e;[...d.current.getClientRects()].some(e=>t>=e.left-4&&t<=e.right+4&&n>=e.top-4&&n<=e.bottom+4)&&i()}})]})}var Da=null,Oa=new Set;addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),Da=e;for(let e of Oa)e()}),addEventListener(`appinstalled`,()=>{Da=null;for(let e of Oa)e()});var ka=e=>(Oa.add(e),()=>Oa.delete(e));function Aa(){return matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}var ja=()=>Da!==null;async function Ma(){let e=Da;if(e){Da=null;try{await e.prompt()}catch{}finally{for(let e of Oa)e()}}}function Na(){return/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function Pa({show:e}){let[t,n]=ui(`install.dismissed`,`no`,[`no`,`yes`]),[,r]=Vr((e,t)=>e+1,0);return Y(()=>ka(()=>r()),[]),!e||t===`yes`||Aa()||!(ja()||Na())?null:Q(`div`,{class:`banner compact`,role:`note`,children:[Q(`b`,{children:R(`Добавьте Круг на экран «Домой»`)}),Q(`p`,{children:ja()?R(`Так дневник надёжно хранится на телефоне и открывается как приложение.`):R(`В Safari: «Поделиться» → «На экран „Домой“».`)}),Q(`div`,{class:`banner-actions`,children:[ja()&&Q(`button`,{type:`button`,class:`link strong`,onClick:()=>Ma(),children:R(`Установить`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>n(`yes`),children:R(`Не сейчас`)})]})]})}function Fa({items:e,onPick:t}){let n=Z();return Q(`div`,{class:`matches`,role:`listbox`,"aria-label":R(`Другие варианты`),children:[e.map(e=>Q(`button`,{type:`button`,role:`option`,"aria-selected":!1,class:`match`,onPointerDown:e=>e.preventDefault(),onClick:()=>t(e),children:[Q(`span`,{class:`match-name`,children:e.name(n.lang)}),e.brand&&Q(`span`,{class:`match-brand`,children:e.brand}),Q(`span`,{class:`match-num`,children:cn(e.per100g.kcal)})]},e.id)),e.length===0&&Q(`div`,{class:`status`,children:R(`Других вариантов нет`)})]})}var Ia=e=>P(Sn(e).term);function La(e,t){return e?.term===Ia(t)?e.items:[]}var Ra=600;function za(e,t){let n=pi(),r=X(new Map),i=X(new Set),[,a]=Vr((e,t)=>e+1,0),[o,s]=J(0),c=Ia(t),l=e.heardBefore(c)??r.current.get(c)??null,u=Ur(()=>N(c)>=3&&e.clearGuess(t)===null,[t,e.version])&&!(l&&!l.offline&&!l.limited),d=`${c}\n${n.reconnects}\n${o}`;return Y(()=>{if(!u)return;let t,n=setTimeout(async()=>{let n=await e.searchOnline(c);r.current.set(c,n),i.current.add(d),n.limited&&(t=setTimeout(()=>s(e=>e+1),6e4)),a()},Ra);return()=>{clearTimeout(n),clearTimeout(t)}},[d,u]),{remote:l,searching:u&&!i.current.has(d)}}var Ba=[`kcal`,`protein`,`fat`,`carbs`],Va={kcal:`К`,protein:`Б`,fat:`Ж`,carbs:`У`},Ha={kcal:`Калории`,protein:`Белки`,fat:`Жиры`,carbs:`Углеводы`},Ua=e=>R(Va[e]),Wa=e=>R(Ha[e]),Ga=e=>`var(--${e}Ink)`,Ka=e=>Ba[(Ba.indexOf(e)+1)%Ba.length];function qa(e,t){return e===`kcal`?cn(t.kcal):U(t[e])}function Ja(e,t){let n=V(e);if(tn(e,new Date,t)!==Ft(t,{day:`numeric`,month:`long`}).format(n))return Ft(t,{weekday:`long`,day:`numeric`,month:`long`}).format(n);let r=Ft(t,{weekday:`long`}).format(n);return n.getFullYear()===new Date().getFullYear()?r:`${r}, ${n.getFullYear()}`}function Ya({wide:e,onMenu:t,showDay:n,onDay:r}){let i=Z(),a=i.lang,[o,s]=J(0),[c,l]=J(null),u=H(o),d=pa(i.loggedDays.at(-1)),[f,p]=J(``),[m,h]=J(!1),[g,_]=J(null),[v,y]=ui(`diary.metric`,`kcal`,Ba),[b,x]=J(`day`),S=oa(),[C,w]=J(!1),[T,E]=J(null),[D,O]=J(0),[k,ee]=J(null),[te,A]=J(!1),[ne,re]=J(null),[ie,j]=J(null),[ae,oe]=J(null),se=X(null),[ce,le]=J(!1),ue=X(()=>{}),[de,fe]=J(null),pe=X(null),me=yr(f).tail,he=Ia(me),ge=X({text:f,editing:g,dayKey:u});ge.current={text:f,editing:g,dayKey:u};let _e=()=>pe.current?.focus({preventScroll:!0}),ve=X(null);Y(()=>{let e=ve.current;D&&e&&(e.classList.remove(`missed`),e.offsetWidth,e.classList.add(`missed`))},[D]);let{remote:ye,searching:be}=za(i,me),{suggestion:xe,matches:Se}=Ur(()=>{let e=yr(f),t=e.tail;if(t.trim()===``)return{suggestion:null,matches:[]};let n=e.foods.length<=1?g?.foodId??null:null,r=La(ye,t),a=C?i.guessAndCandidates(t,{remote:r,prefer:n}):{guess:i.guess(t,{remote:r,prefer:n}),candidates:[]},o=f.slice(0,f.length-t.length),s=a.guess,c=s&&(o===``||!(o+s.text).toLowerCase().startsWith(f.toLowerCase())?s.text:o+s.text);return{suggestion:s&&new Cn(s.food,s.unit,s.amount,s.label,c),matches:a.candidates}},[f,ye,C,g,i.version,a]);Y(()=>r(u),[u]),Y(()=>{n&&we(fa(n.key))},[n]);let Ce=X(()=>{});Ce.current=e=>{if(e.altKey&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&f===``&&!document.querySelector(`[role=dialog]`)){e.preventDefault(),Te(e.key===`ArrowLeft`?-1:1);return}let t=document.activeElement;!(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement||t instanceof HTMLInputElement&&![`button`,`checkbox`,`radio`].includes(t.type)||t instanceof HTMLElement&&(t.isContentEditable||t.closest(`[role=dialog], [role=menu], [role=listbox]`)!==null))&&e.key.length===1&&e.key!==` `&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&_e()},Y(()=>{if(!e)return;requestAnimationFrame(_e);let t=e=>Ce.current(e);return addEventListener(`keydown`,t),()=>removeEventListener(`keydown`,t)},[e]);function we(e){let t=Math.min(1,Math.max(d,e));t!==o&&(l(t<o?`back`:`forward`),s(t),_(null),w(!1),g&&p(``))}let Te=e=>we(o+e);function Ee(e){let t=e.normalize(`NFC`);p(t),yr(t).tail.trim()===``&&w(!1)}function De(e){let t=yr(e),n=t.tail,r=La(ye,n),a=t.foods.length<=1?g?.foodId??null:null;t.foods.length===0||be&&Ia(n)===he&&i.guess(n,{remote:r,prefer:a})===null?O(e=>e+1):M(()=>i.logLine(e,u,{replacing:g,remote:r,prefer:g?.foodId??null}))}function M(t){ce&&ue.current(),t(),_(null),w(!1),p(``),e?_e():pe.current?.blur()}function N(e){let{text:t,editing:n,dayKey:r}=ge.current;w(!1);let o=yr(t).tail;/\p{L}/u.test(o)&&Nn(o,e)!==null?M(()=>i.logLine(t,r,{replacing:n,picked:e})):(p(`${t.slice(0,t.length-o.length)}${e.name(a)} `),_e())}function Oe(e){e.dayKey===u&&(ce&&ue.current(),ee(null),_(e),p(ar(e,a)),_e(),w(!e.counted))}function ke(){_(null),p(``),w(!1)}function Ae(e){ee(null),g?.id===e.id&&ke(),i.delete(e),S.add(e)}async function je(e){re(null),fe(R(`Ищу…`));let t=await i.lookupBarcode(e);fe(null),t.food?N(t.food):E({name:Ia(yr(ge.current.text).tail),barcode:e,hint:t.offline?R(`Нет сети — штрихкод не проверить. Можно заполнить продукт сейчас, он запомнится`):R(`Штрихкод пока никому не известен — заполните продукт, и он запомнится`)})}async function Me(e){re(null),fe(R(`Читаю этикетку…`));let t=await Zi(e);for(let e of t){let t=(await i.lookupBarcode(e)).food;if(t){fe(null),N(t);return}}let n=await Qi(e);fe(null),E({name:Ia(yr(ge.current.text).tail),initial:Hi(n)?void 0:n,barcode:t[0]??null,hint:Hi(n)?R(`Не удалось прочитать этикетку — впишите числа вручную`):void 0})}async function P(e){try{fe(i.restoreBackup(await e.text()).message)}catch{fe(R(`Не получилось — попробуйте ещё раз`))}}let Ne=X({readLabel:Me,restoreFile:P});Ne.current={readLabel:Me,restoreFile:P},Y(()=>{let e=e=>e.type.startsWith(`image/`)||/\.(jpe?g|png|heic|heif|webp)$/i.test(e.name),t=e=>e.type===`application/json`||/\.json$/i.test(e.name),n=e=>{let t=[...e.dataTransfer?.items??[]].find(e=>e.kind===`file`);return t?t.type.startsWith(`image/`)?`photo`:t.type===`application/json`?`backup`:null:null},r=e=>[...e.dataTransfer?.items??[]].some(e=>e.kind===`file`),i=0,a=e=>{r(e)&&i++},o=e=>{r(e)&&!document.querySelector(`[role=dialog]`)&&(e.preventDefault(),oe(n(e)))},s=e=>{r(e)&&(i=Math.max(0,i-1),i===0&&oe(null))},c=n=>{i=0,oe(null);let r=n.dataTransfer?.files[0];r&&!document.querySelector(`[role=dialog]`)&&(n.preventDefault(),e(r)?Ne.current.readLabel(r):t(r)&&Ne.current.restoreFile(r))},l=e=>{if(e.clipboardData?.types.includes(`text/plain`))return;let t=[...e.clipboardData?.files??[]].find(e=>e.type.startsWith(`image/`));t&&!document.querySelector(`[role=dialog]`)&&(e.preventDefault(),Ne.current.readLabel(t))};return addEventListener(`dragenter`,a),addEventListener(`dragover`,o),addEventListener(`dragleave`,s),addEventListener(`drop`,c),addEventListener(`paste`,l),()=>{removeEventListener(`dragenter`,a),removeEventListener(`dragover`,o),removeEventListener(`dragleave`,s),removeEventListener(`drop`,c),removeEventListener(`paste`,l)}},[]);let Pe=X(H(0)),[,Fe]=J(0),Ie=X({offset:o,editing:g});Ie.current={offset:o,editing:g},Y(()=>{let e,t=()=>{let e=H(0);if(e===Pe.current)return;let t=fa(Pe.current);Pe.current=e;let{offset:n,editing:r}=Ie.current;(n!==0||r)&&s(e=>e+t),Fe(e=>e+1)},n=()=>{let r=new Date;r.setHours(24,0,1,0),e=setTimeout(()=>(t(),n()),r.getTime()-Date.now())},r=()=>document.visibilityState===`visible`&&t();return n(),document.addEventListener(`visibilitychange`,r),()=>{clearTimeout(e),document.removeEventListener(`visibilitychange`,r)}},[]);function Le(){ce?ue.current():(fe(null),le(!0),ue.current=ta(a,{onText:(e,t)=>{Ee(e),t&&_e()},onDone:()=>{le(!1),ue.current=()=>{}},onProblem:fe}))}Y(()=>()=>ue.current(),[]);function Re(){h(!1),g&&!T&&!e&&ke()}let ze=i.entriesOn(u),Be=g===null?-1:ze.findIndex(e=>e.id===g.id),Ve=me.trim()!==``,F=Q(`div`,{class:`input-line`,ref:ve,style:{order:Be>=0?Be*2+1:ze.length*2},children:[Q(`div`,{class:`input-row`,children:[Q(Ea,{fieldRef:pe,text:f,onText:Ee,suggestion:xe?.text??null,onSubmit:De,onGhostTap:()=>w(e=>!e&&me.trim()!==``),onFocus:()=>h(!0),onBlur:Re}),f!==``&&!ce?Q(`button`,{type:`button`,class:`input-tool`,"aria-label":R(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>{p(``),w(!1),_e()},children:Q(yi,{})}):g===null&&Q(`span`,{class:`input-tools`,children:[Q(`button`,{type:`button`,class:`input-tool`,"aria-label":R(`Камера`),"aria-haspopup":`menu`,onClick:e=>{fe(null);let t=e.currentTarget.getBoundingClientRect();j({x:t.left,y:t.bottom,at:Date.now()})},children:Q(Oi,{})}),ea()&&Q(`button`,{type:`button`,class:`input-tool${ce?` listening`:``}`,"aria-label":R(ce?`Остановить диктовку`:`Диктовать`),onClick:Le,children:Q(ki,{})})]})]}),de&&Q(`div`,{class:`status`,children:de}),C&&Q(Fa,{items:Se,onPick:N}),Ve&&(be&&!xe?Q(`div`,{class:`status`,children:R(`Ищу…`)}):Q(`div`,{class:`status`,children:[!xe&&Q(`div`,{children:ye?.limited?R(`Поиск в сети просит подождать минуту — ищу только на этом устройстве`):ye?.offline?R(`Нет сети — ищу только на этом устройстве`):R(`Ничего не найдено`)}),Q(`button`,{type:`button`,class:`link`,onPointerDown:e=>e.preventDefault(),onClick:()=>E({name:he}),children:R(`Не нашли? Добавить новый продукт`)})]}))]});return Q(`div`,{class:`diary${m?` typing`:``}${e?` studio-diary`:``}`,children:[Q(`div`,{class:`diary-column`,children:[e?Q(`header`,{class:`studio-header`,children:[Q(`div`,{class:`studio-heading`,children:[Q(`h1`,{children:Q(`button`,{type:`button`,class:`studio-title`,onClick:()=>we(0),children:tn(u,new Date,a)})}),Q(`p`,{class:`studio-date`,children:Ja(u,a)})]}),Q(`div`,{class:`studio-tools`,children:[Q(`span`,{class:`studio-arrows`,children:[Q(`button`,{type:`button`,class:`glass sheet-icon`,"aria-label":R(`Раньше`),onClick:()=>Te(-1),disabled:o<=d,children:Q(bi,{size:18})}),Q(`button`,{type:`button`,class:`glass sheet-icon`,"aria-label":R(`Позже`),onClick:()=>Te(1),disabled:o>=1,children:Q(xi,{size:18})})]}),Q(ra,{label:R(`Число в строке`),value:v,onChange:y,options:Ba.map(e=>({value:e,text:Ua(e),name:Wa(e)}))})]})]}):Q(`header`,{class:`diary-header`,children:[Q(`button`,{type:`button`,class:`header-button`,"aria-label":R(`Меню`),onClick:t,children:Q(vi,{size:26})}),Q(`button`,{type:`button`,class:`header-title`,onClick:()=>we(0),children:tn(u,new Date,a)}),Q(`button`,{type:`button`,class:`header-button header-metric`,style:{color:Ga(v)},"aria-label":Wa(v),onClick:()=>y(Ka(v)),children:Ua(v)})]}),!i.persistent&&!te&&Q(`div`,{class:`banner`,role:`alert`,children:[Q(`b`,{children:R(`Дневник не сохраняется`)}),Q(`p`,{children:R(`Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>A(!0),children:R(`Понятно`)})]}),!e&&Q(Pa,{show:i.entries.length>0&&!m}),Q(Xa,{day:u,turn:c,swipeable:!m,onSwipe:Te,onTapBelow:()=>{ee(null),_e()},children:[ze.map((e,t)=>Q(Za,{entry:e,order:t*2,hidden:g?.id===e.id,metric:v,onEdit:Oe,onMenu:(t,n)=>ee({entry:e,x:t,y:n,at:Date.now()}),onDelete:Ae},e.id)),F]})]}),e?Q(`aside`,{class:`studio-side`,children:[Q(xa,{dayKey:u,period:b,onPeriod:x}),Q(wa,{dayKey:u,period:b,onDay:e=>we(fa(e))})]}):!m&&Q(xa,{dayKey:u,period:b,onPeriod:x}),k&&Q(aa,{x:k.x,y:k.y,openedAt:k.at,onClose:()=>ee(null),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>Oe(k.entry),children:R(`Изменить`)}),Q(`button`,{type:`button`,role:`menuitem`,class:`danger`,onClick:()=>Ae(k.entry),children:R(`Удалить`)})]}),Q(sa,{shown:S.items.length>0,onRestore:()=>{for(let e of S.take())i.restoreEntry(e)}}),ie&&Q(aa,{x:ie.x,y:ie.y,openedAt:ie.at,onClose:()=>j(null),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>(j(null),re(`barcode`)),children:R(`Сканировать штрихкод`)}),Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>(j(null),re(`label`)),children:R(`Сфотографировать этикетку`)}),Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>(j(null),se.current?.click()),children:R(`Выбрать фото`)})]}),Q(`input`,{ref:se,type:`file`,accept:`image/*`,hidden:!0,onChange:e=>{let t=e.currentTarget.files?.[0];e.currentTarget.value=``,t&&Me(t)}}),ne===`barcode`&&Q(Vi,{onCode:je,onClose:()=>re(null)}),ne===`label`&&Q(Vi,{onPhoto:Me,onClose:()=>re(null)}),ae&&Q(`div`,{class:`drop-hint`,"aria-hidden":`true`,children:Q(`p`,{children:R(ae===`photo`?`Отпустите, чтобы прочитать этикетку`:`Отпустите, чтобы восстановить из копии`)})}),T&&Q(ua,{request:T,onClose:()=>{E(null),_e()},onSave:e=>{i.saveOwn(e),N(e)}})]})}function Xa({children:e,day:t,turn:n,swipeable:r,onSwipe:i,onTapBelow:a}){let o=X(null),s=X(null);return Y(()=>{let e=s.current;e&&n&&(e.classList.remove(`turn-back`,`turn-forward`),e.offsetWidth,e.classList.add(`turn-${n}`),e.scrollTop=0)},[t]),Q(`div`,{ref:s,class:`day-page`,onTouchStart:e=>{let t=e.touches[0];o.current=r&&e.touches.length===1?{x:t.clientX,y:t.clientY}:null},onTouchEnd:e=>{let t=o.current;if(o.current=null,!t)return;let n=e.changedTouches[0],r=n.clientX-t.x,a=n.clientY-t.y;Math.abs(r)>60&&Math.abs(r)>Math.abs(a)*1.5&&i(r>0?-1:1)},onClick:e=>{e.target===e.currentTarget&&a()},children:e})}function Za({entry:e,order:t,hidden:n,metric:r,onEdit:i,onMenu:a,onDelete:o}){let s=Z(),c=X(null),l=()=>{c.current&&clearTimeout(c.current.timer)};return Q(`div`,{class:`entry`,style:{order:t},hidden:n,role:`button`,tabIndex:0,"aria-description":R(`Изменить`),onClick:()=>{c.current?.fired?c.current=null:i(e)},onKeyDown:t=>{t.key===`Enter`&&i(e),(t.key===`Delete`||t.key===`Backspace`)&&o(e)},onContextMenu:e=>{e.preventDefault(),a(e.clientX,e.clientY)},onPointerDown:e=>{if(e.pointerType!==`touch`)return;let{clientX:t,clientY:n}=e;c.current={x:t,y:n,fired:!1,timer:setTimeout(()=>{c.current&&(c.current.fired=!0),a(t,n)},500)}},onPointerMove:e=>{let t=c.current;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>10&&l()},onPointerUp:l,onPointerCancel:l,children:[Q(`span`,{class:`entry-name`,children:ar(e,s.lang)}),e.counted?Q(`span`,{class:`entry-num`,style:{color:Ga(r)},"aria-label":`${Wa(r)} ${qa(r,e)}`,children:qa(r,e)}):Q(`span`,{class:`entry-q`,"aria-label":R(`Не посчитано`),children:`?`})]})}function Qa({onClose:e,onRoute:t,onDay:n,selectedDay:r}){let i=Z(),a=(e,n,r)=>Q(`button`,{type:`button`,class:`row row-link`,onClick:()=>t(r),children:[Q(`span`,{class:`row-icon`,children:n}),e]});return Q(ca,{title:R(`Круг`),onClose:e,children:[Q(`div`,{class:`group`,children:[a(R(`Профиль`),Q(Si,{}),{kind:`profile`}),a(R(`Статистика`),Q(Ci,{}),{kind:`stats`}),a(R(`Мои продукты`),Q(wi,{}),{kind:`myFoods`})]}),i.loggedDays.length>0&&Q(`div`,{class:`group`,children:i.loggedDays.map(e=>Q(`button`,{type:`button`,class:`row row-link${e===r?` selected`:``}`,onClick:()=>n(e),children:tn(e,new Date,i.lang)},e))})]})}function $a(){try{let e=localStorage.getItem(`theme`);return e===`light`||e===`dark`?e:`system`}catch{return`system`}}function eo(e){let t=document.documentElement;e===`system`?delete t.dataset.theme:t.dataset.theme=e;try{e===`system`?localStorage.removeItem(`theme`):localStorage.setItem(`theme`,e)}catch{}}function to({onClose:e}){let t=Z(),n=t.profile,r=new Date().getFullYear(),[i,a]=J($a()),[o,s]=J(null),[c,l]=J(null),u=async e=>{let{legalHTML:t}=await Li(async()=>{let{legalHTML:e}=await import(`./documents-AysfDTWI.js`);return{legalHTML:e}},[]);l({doc:e,html:t(e).html})},d=X(null),f=e=>{let t=dn(e);return t!==null&&Number.isInteger(t)?t:null};function p(){try{let e=new Blob([rr(t.backupDocument())],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`krug-backup-${en()}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),6e4)}catch{s(R(`Не получилось — попробуйте ещё раз`))}}async function m(e){if(e)try{s(t.restoreBackup(await e.text()).message)}catch{s(R(`Не получилось — попробуйте ещё раз`))}}return Q(ca,{title:R(`Профиль`),onClose:e,children:[Q(`div`,{class:`group`,children:[Q(no,{label:R(`Рост`),stored:n.heightCm===null?``:String(n.heightCm),unit:R(`см`),save:e=>t.updateProfile(t=>t.heightCm=f(e))}),Q(no,{label:R(`Вес`),stored:n.weightKg===null?``:vn(n.weightKg),unit:R(`кг`),decimal:!0,save:e=>t.updateProfile(t=>t.weightKg=dn(e))}),Q(no,{label:R(`Возраст`),stored:n.birthYear===null?``:String(r-n.birthYear),unit:R(`лет`),save:e=>t.updateProfile(t=>t.birthYear=f(e)===null?null:r-f(e))}),Q(`div`,{class:`row`,children:[Q(`span`,{children:R(`Пол`)}),Q(ia,{label:R(`Пол`),value:n.sex,onChange:e=>t.updateProfile(t=>t.sex=e),options:[{value:`unset`,text:R(`Не указан`)},{value:`female`,text:R(`Женский`)},{value:`male`,text:R(`Мужской`)}]})]})]}),Q(`h3`,{class:`group-title`,children:R(`Цели на день`)}),Q(`div`,{class:`group`,children:[Q(no,{label:R(`Калории`),ink:`kcalInk`,stored:String(n.targetKcal),unit:R(`ккал`),save:e=>t.updateProfile(t=>t.targetKcal=f(e)??t.targetKcal)}),Q(no,{label:R(`Белки`),ink:`proteinInk`,stored:String(n.targetProtein),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetProtein=f(e)??t.targetProtein)}),Q(no,{label:R(`Жиры`),ink:`fatInk`,stored:String(n.targetFat),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetFat=f(e)??t.targetFat)}),Q(no,{label:R(`Углеводы`),ink:`carbsInk`,stored:String(n.targetCarbs),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetCarbs=f(e)??t.targetCarbs)})]}),Q(`div`,{class:`group`,children:[Q(`div`,{class:`row`,children:[Q(`span`,{children:R(`Тема`)}),Q(ia,{label:R(`Тема`),value:i,onChange:e=>{a(e),eo(e)},options:[{value:`system`,text:R(`Как в системе`)},{value:`light`,text:R(`Светлая`)},{value:`dark`,text:R(`Тёмная`)}]})]}),Q(`div`,{class:`row`,children:[Q(`span`,{children:R(`Язык`)}),Q(ia,{label:R(`Язык`),value:L(),onChange:e=>{try{localStorage.setItem(`language`,e)}catch{}location.reload()},options:[{value:`ru`,text:`Русский`},{value:`en`,text:`English`}]})]})]}),Q(`h3`,{class:`group-title`,children:R(`Резервная копия`)}),Q(`div`,{class:`group`,children:[Q(`button`,{type:`button`,class:`row row-link accent`,onClick:p,children:[Q(`span`,{class:`row-icon`,children:Q(Ei,{})}),R(`Сохранить копию`)]}),Q(`button`,{type:`button`,class:`row row-link accent`,onClick:()=>d.current?.click(),children:[Q(`span`,{class:`row-icon`,children:Q(Di,{})}),R(`Восстановить из копии`)]}),Q(`input`,{ref:d,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:e=>{m(e.currentTarget.files?.[0]),e.currentTarget.value=``}})]}),Q(`p`,{class:`group-footer`,children:[R(`Дневник хранится в этом браузере`),`. `,R(`Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.`)]}),o&&Q(`p`,{class:`group-footer message`,role:`status`,children:o}),Q(`div`,{class:`legal`,children:[Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`terms`),children:R(`Пользовательское соглашение`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`privacy`),children:R(`Политика конфиденциальности`)}),Q(`p`,{children:R(`Данные о продуктах: Open Food Facts (ODbL), ВкусВилл, USDA FoodData Central`)})]}),c&&Q(ca,{title:c.doc===`terms`?R(`Пользовательское соглашение`):R(`Политика конфиденциальности`),onClose:()=>l(null),children:Q(`div`,{class:`legal-doc`,dangerouslySetInnerHTML:{__html:c.html}})})]})}function no({label:e,stored:t,unit:n,decimal:r=!1,ink:i,save:a}){let[o,s]=J(t),[c,l]=J(!1);Y(()=>{c||s(t)},[t,c]);let u=X();return u.current={text:o,editing:c,save:a},Y(()=>()=>{let e=u.current;e?.editing&&e.save(e.text)},[]),Q(`label`,{class:`row`,children:[Q(`span`,{style:i?{color:`var(--${i})`}:void 0,children:e}),Q(`input`,{class:`row-number`,inputMode:r?`decimal`:`numeric`,placeholder:`—`,value:o,onFocus:()=>l(!0),onInput:e=>s(e.currentTarget.value),onBlur:()=>{a(o),l(!1)},onKeyDown:e=>e.key===`Enter`&&e.currentTarget.blur()}),Q(`span`,{class:`row-unit`,children:n})]})}function ro({onClose:e}){let t=Z(),n=t.lang,[r,i]=J(`week`),[a,o]=J(0),s=ri(r,a),c=ii(t.entries.filter(e=>nn(e.dayKey,s))),l=ai(c),u=Ht(t.profile),d=en(),f=X(null),p=e=>o(t=>Math.max(0,t+e)),m=(e,t,n)=>Q(`div`,{class:`tile`,children:[Q(`div`,{class:`tile-label`,children:e}),Q(`div`,{class:`tile-value`,style:{color:`var(--${n})`},children:t})]});return Q(ca,{title:R(`Статистика`),onClose:e,children:Q(`div`,{class:`stats`,onTouchStart:e=>f.current={x:e.touches[0].clientX,y:e.touches[0].clientY},onTouchEnd:e=>{let t=f.current;if(!t)return;let n=e.changedTouches[0].clientX-t.x,r=e.changedTouches[0].clientY-t.y;Math.abs(n)>40&&Math.abs(n)>Math.abs(r)*1.5&&p(n>0?1:-1)},children:[Q(ra,{options:Qr.map(e=>({value:e,text:ni(e,n),name:ti(e,n)})),value:r,onChange:e=>{i(e),o(0)},label:R(`Период`),segmented:!0}),Q(`div`,{class:`stats-headline`,children:[Q(`div`,{class:`stats-range`,children:[Q(`button`,{type:`button`,"aria-label":R(`Раньше`),onClick:()=>p(1),children:Q(bi,{size:16})}),Q(`span`,{children:si(r,s,n)}),Q(`button`,{type:`button`,"aria-label":R(`Позже`),onClick:()=>p(-1),disabled:a===0,children:Q(xi,{size:16})})]}),Q(`div`,{class:`stats-kcal`,children:[Q(`span`,{class:`stats-kcal-value`,children:cn(l.kcal)}),Q(`span`,{class:`stats-kcal-unit`,children:R(`ккал`)})]})]}),Q(`div`,{class:`stats-rings`,children:Q(va,{rings:ma(l,u),stroke:24,gap:5})}),Q(`div`,{class:`tiles`,children:[m(R(`Калории`),cn(l.kcal),`kcalInk`),m(R(`Белки`),U(l.protein),`proteinInk`),m(R(`Жиры`),U(l.fat),`fatInk`),m(R(`Углеводы`),U(l.carbs),`carbsInk`)]}),Q(`div`,{class:`stats-days`,children:[r===`week`&&Q(Ca,{lang:n,days:c,targets:u,from:V(s[0])}),r===`month`&&Q(Sa,{month:V(s[0]),lang:n,class:`month-grid`,day:(e,t)=>{let n=t>d;return Q(va,{rings:ma(n?I.zero:c.get(t)??I.zero,u),stroke:3,gap:1.5,children:Q(`span`,{class:`caption${t===d?` today`:``}${n?` future`:``}`,children:e.getDate()})})}}),(r===`halfYear`||r===`year`)&&Q(io,{days:c,targets:u,from:V(s[0]),to:V(s[1])})]}),c.size===0&&Q(`p`,{class:`stats-empty`,children:R(`Нет записей за этот период`)})]})})}function io({days:e,targets:t,from:n,to:r}){let i=Z(),a=oi(e),o=new Date(n.getFullYear(),n.getMonth(),1),s=(r.getFullYear()-o.getFullYear())*12+r.getMonth()-o.getMonth()+1,c=Ft(i.lang,{month:`short`});return Q(`div`,{class:`months-grid${s>6?` many`:``}`,children:Array.from({length:s},(e,n)=>{let r=Zt(o,n);return Q(`div`,{class:`month`,children:[Q(va,{rings:ma(a.get(B(r).slice(0,7))??I.zero,t),stroke:5,gap:2.5}),Q(`span`,{class:`footnote`,children:c.format(r)})]},n)})})}function ao({dishId:e,onClose:t}){let n=Z(),r=e===null?void 0:n.catalog.food(e),[i,a]=J(()=>r?.name(n.lang)??``),[o,s]=J(()=>e?n.ingredients(e).map(Bn):[]),[c,l]=J(()=>{let e=o.reduce((e,t)=>e+t.grams,0);return r?.dishWeight!=null&&Math.abs(r.dishWeight-e)>.5?U(r.dishWeight):``}),[u,d]=J(()=>{let e=r?.portion(`portion`)?.grams;return r?.dishWeight!=null&&e?String(Math.round(r.dishWeight/e)):`1`}),[f,p]=J(``),[m,h]=J(null),[g,_]=J(!1),v=X(null),y=X(null),b=Un(o,dn(c),Number.parseInt(u.trim(),10)||1),x=i.trim()!==``&&o.length>0,[S]=J(o),C=o.length!==S.length||o.some((e,t)=>e!==S[t]);Y(()=>{e||v.current?.focus()},[]);let{remote:w}=za(n,f),{suggestion:T,matches:E}=Ur(()=>{if(f.trim()===``)return{suggestion:null,matches:[]};let e=La(w,f);if(g){let t=n.guessAndCandidates(f,{remote:e});return{suggestion:t.guess,matches:t.candidates}}return{suggestion:n.guess(f,{remote:e}),matches:[]}},[f,w,g,n.entries]);function D(e){let t=n.guess(e,{remote:La(w,e)});if(!t)return;let r=zn(t);s(e=>m!==null&&m<e.length?e.map((e,t)=>t===m?r:e):[...e,r]),h(null),_(!1),p(``),y.current?.focus()}function O(e){h(e),p(Rn(o[e],n.lang)),y.current?.focus()}function k(e){m!==null&&(m===e?(h(null),p(``)):m>e&&h(m-1)),s(t=>t.filter((t,n)=>n!==e))}function ee(){x&&(n.saveDish(Wn(e??`user:${Ln()}`,i,b),o),t())}let te=(e,t)=>Q(`span`,{class:t?`macros large`:`macros`,children:[Q(`span`,{class:`ink-kcal`,children:R(`Ккал`)}),` `,cn(e.kcal),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-protein`,children:R(`Б`)}),` `,U(e.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:R(`Ж`)}),` `,U(e.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:R(`У`)}),` `,U(e.carbs)]}),A=b.per100g,ne=A.forGrams(b.servingGrams),re=m??o.length;return Q(ca,{title:R(`Своё блюдо`),onClose:t,dismissible:!(x&&C),action:Q(`button`,{type:`button`,class:`glass sheet-confirm`,disabled:!x,onClick:ee,children:R(`Сохранить`)}),children:Q(`div`,{class:`dish`,children:[Q(`input`,{ref:v,class:`dish-name`,placeholder:R(`Название блюда`),"aria-label":R(`Название блюда`),value:i,autocapitalize:`sentences`,onInput:e=>a(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&y.current?.focus()}),Q(`h3`,{class:`caption-title`,children:R(`Ингредиенты`)}),Q(`div`,{class:`dish-lines`,children:[o.map((e,t)=>Q(`div`,{class:`entry`,style:{order:t*2},hidden:m===t,role:`button`,tabIndex:0,onClick:()=>O(t),onKeyDown:e=>(e.key===`Delete`||e.key===`Backspace`)&&k(t),children:[Q(`span`,{class:`entry-name`,children:Rn(e,n.lang)}),Q(`span`,{class:`entry-num ink-kcal`,children:cn(e.nutrition.kcal)}),Q(`button`,{type:`button`,class:`entry-remove`,"aria-label":R(`Удалить`),onClick:e=>{e.stopPropagation(),k(t)},children:Q(yi,{size:18})})]},t)),Q(`div`,{class:`input-line`,style:{order:re*2+(m===null?0:1)},children:[Q(`div`,{class:`input-row`,children:[Q(Ea,{fieldRef:y,text:f,onText:e=>{p(e),e.trim()===``&&_(!1)},suggestion:T?.text??null,onSubmit:D,onGhostTap:()=>_(e=>!e&&f.trim()!==``),onBlur:()=>{m!==null&&(h(null),p(``))}}),f!==``&&Q(`button`,{type:`button`,class:`input-tool`,"aria-label":R(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>p(``),children:Q(yi,{})})]}),g&&Q(Fa,{items:E,onPick:e=>{_(!1);let t=Sn(f).term,r=P(M(P(f)).slice(M(t).length).join(``));p(`${e.name(n.lang)} ${r}`),y.current?.focus()}})]})]}),o.length===0&&f===``&&Q(`p`,{class:`hint-text`,children:R(`Впишите ингредиент и сколько его пошло — как строку в дневнике: «творог 5% 400», Enter`)}),o.length>0&&Q(`div`,{class:`dish-raw`,children:[Q(`span`,{children:R(`Всего сырого`)}),Q(`span`,{children:R(`%@ г · %@ ккал`,[U(b.rawWeight),cn(b.total.kcal)])})]}),Q(`h3`,{class:`caption-title`,children:R(`Готовое блюдо`)}),Q(`div`,{class:`group`,children:[Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Вес после готовки, г`)}),Q(`input`,{class:`row-number`,inputMode:`decimal`,placeholder:U(b.rawWeight),value:c,onInput:e=>l(e.currentTarget.value)})]}),Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Порций`)}),Q(`input`,{class:`row-number`,inputMode:`numeric`,placeholder:`1`,value:u,onInput:e=>d(e.currentTarget.value)})]})]}),Q(`p`,{class:`group-footer`,children:R(`Суп набирает воду, запеканка теряет: если взвесили готовое — впишите, иначе считаем по сырому.`)}),Q(`div`,{class:`card dish-result`,children:[Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:R(`1 порция`)}),Q(`span`,{children:[U(b.servingGrams),` `,R(`г`)]})]}),te(ne,!0),Q(`hr`,{}),Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:R(`на 100 г`)}),te(A,!1)]})]})]})})}function oo({onClose:e}){let t=Z(),n=t.ownFoods,[r,i]=J(!1),[a,o]=J(null),[s,c]=J(void 0),[l,u]=J(null),[d,f]=J(null),p=oa(),m=e=>{if(e.dishWeight!==null){c(e.id);return}let n=e.per100g;o({name:e.name(t.lang),initial:{kcal:n.kcal,protein:n.protein,fat:n.fat,carbs:n.carbs},barcode:e.externalId,existing:e})},h=e=>{u(null);let n=t.deleteOwn(e);n&&p.add(n)};return Q(ca,{title:R(`Мои продукты`),onClose:e,action:Q(`button`,{type:`button`,class:`glass sheet-icon`,"aria-label":R(`Добавить`),"aria-expanded":r,onClick:()=>i(e=>!e),children:Q(Ti,{})}),children:[r&&Q(`div`,{class:`popover popover-inline`,role:`menu`,children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),o({name:``})},children:R(`Продукт`)}),Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),c(null)},children:R(`Блюдо`)})]}),n.length===0&&Q(`p`,{class:`empty`,children:R(`Здесь будут ваши продукты и блюда`)}),n.length>0&&Q(`div`,{class:`list`,children:n.map(e=>Q(so,{onOpen:()=>m(e),onDelete:()=>u(e),onMenu:(t,n)=>f({food:e,x:t,y:n,at:Date.now()}),children:[Q(`span`,{children:e.name(t.lang)}),e.dishWeight!==null&&Q(`span`,{class:`tag`,children:R(`блюдо`)}),Q(`span`,{class:`list-value`,children:R(`%@ ккал`,[cn(e.per100g.kcal)])})]},e.id))}),d&&Q(aa,{x:d.x,y:d.y,openedAt:d.at,onClose:()=>f(null),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>(f(null),m(d.food)),children:R(`Изменить`)}),Q(`button`,{type:`button`,role:`menuitem`,class:`danger`,onClick:()=>(f(null),u(d.food)),children:R(`Удалить`)})]}),l&&Q(`div`,{class:`confirm`,role:`alertdialog`,"aria-label":R(`Удалить`),children:[Q(`p`,{children:R(`Удалить «%@»? Записи в дневнике останутся.`,[l.name(t.lang)])}),Q(`div`,{class:`confirm-actions`,children:[Q(`button`,{type:`button`,onClick:()=>u(null),children:R(`Отмена`)}),Q(`button`,{type:`button`,class:`danger`,onClick:()=>h(l),children:R(`Удалить`)})]})]}),Q(sa,{shown:p.items.length>0,onRestore:()=>{for(let e of p.take())t.restoreFood(e)}}),a&&Q(ua,{request:a,onClose:()=>o(null),onSave:e=>t.saveOwn(e)}),s!==void 0&&Q(ao,{dishId:s,onClose:()=>c(void 0)})]})}function so({children:e,onOpen:t,onDelete:n,onMenu:r}){let[i,a]=J(0),[o,s]=J(!1),c=X(null);return Q(`div`,{class:`list-row`,children:[Q(`button`,{type:`button`,class:`list-delete`,onFocus:()=>a(-88),onBlur:()=>a(0),onClick:()=>(a(0),n()),children:R(`Удалить`)}),Q(`button`,{type:`button`,class:`list-main${o?` dragging`:``}`,style:{transform:`translateX(${i}px)`},onClick:()=>{c.current?.moved||c.current?.pressed||(i?a(0):t())},onContextMenu:e=>{e.preventDefault(),r(e.clientX,e.clientY)},onKeyDown:e=>(e.key===`Delete`||e.key===`Backspace`)&&n(),onTouchStart:e=>{let t=e.touches[0],n=setTimeout(()=>{c.current&&!c.current.moved&&(c.current.pressed=!0,r(t.clientX,t.clientY))},500);c.current={x:t.clientX,y:t.clientY,from:i,moved:!1,press:n}},onTouchMove:e=>{let t=c.current;if(!t)return;let n=e.touches[0].clientX-t.x,r=e.touches[0].clientY-t.y;Math.hypot(n,r)>10&&clearTimeout(t.press),!(!t.moved&&Math.abs(n)<8)&&(!t.moved&&Math.abs(r)>Math.abs(n)?c.current=null:(t.moved=!0,s(!0),a(Math.max(-88,Math.min(0,t.from+n)))))},onTouchEnd:()=>{let e=c.current;e&&(clearTimeout(e.press),s(!1),e.moved&&a(e=>e<-44?-88:0),setTimeout(()=>c.current=null,0))},onTouchCancel:()=>{let e=c.current;e&&clearTimeout(e.press),c.current=null,s(!1),a(e=>e<-44?-88:0)},children:e})]})}var co={low:1.2,medium:1.375,high:1.55},lo={lose:.85,keep:1,gain:1.1};function uo(e){let t=10*e.weightKg+6.25*e.heightCm-5*e.age+(e.sex===`male`?5:-161);return Math.round(t*co[e.activity]*lo[e.aim]/10)*10}function fo(e,t=null){if(t===null)return{targetKcal:e,targetProtein:Math.round(e*.2/4),targetFat:Math.round(e*.315/9),targetCarbs:Math.round(e*.5/4)};let n=Math.round(1.6*t),r=Math.round(e*.3/9);return{targetKcal:e,targetProtein:n,targetFat:r,targetCarbs:Math.max(0,Math.round((e-n*4-r*9)/4))}}function po({onDone:e}){let t=Z(),n=X(null),[r,i]=J(null),[a,o]=J(`body`),[s,c]=J(`female`),[l,u]=J(``),[d,f]=J(``),[p,m]=J(``),[h,g]=J(`medium`),[_,v]=J(`keep`),[y,b]=J(``),x=(e,t,n)=>{let r=dn(e);return r!==null&&r>=t&&r<=n?r:null},S=x(l,14,110),C=x(d,100,250),w=x(p,30,300),T=x(y,800,6e3),E=S!==null&&C!==null&&w!==null?uo({sex:s,age:S,heightCm:C,weightKg:w,activity:h,aim:_}):null,D=a===`known`?T===null?null:Math.round(T):E!==null&&E>=800&&E<=6e3?E:null,O=D===null?null:fo(D,a===`body`?w:null),k=()=>{O&&(t.finishOnboarding(e=>{Object.assign(e,O),a===`body`&&(e.sex=s,e.heightCm=Math.round(C),e.weightKg=Number(vn(w)),e.birthYear=new Date().getFullYear()-Math.round(S))}),e())};async function ee(n){if(!n)return;let r=t.restoreBackup(await n.text());r.done?(t.finishOnboarding(),e()):i(r.message)}let te=(e,t,n,r,i=!1)=>Q(`label`,{class:`row`,children:[Q(`span`,{children:e}),Q(`input`,{class:`row-number`,inputMode:i?`decimal`:`numeric`,placeholder:`—`,value:t,onInput:e=>n(e.currentTarget.value)}),Q(`span`,{class:`row-unit`,children:r})]});return Q(`div`,{class:`onboarding`,role:`dialog`,"aria-modal":`true`,"aria-label":R(`Сколько калорий в день?`),children:[Q(`div`,{class:`onboarding-bar`,children:[Q(`button`,{type:`button`,class:`link`,onClick:()=>n.current?.click(),children:R(`Восстановить из копии`)}),Q(`input`,{ref:n,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:e=>(ee(e.currentTarget.files?.[0]),e.currentTarget.value=``)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>{t.finishOnboarding(),e()},children:R(`Пропустить`)})]}),r&&Q(`p`,{class:`group-footer message`,role:`status`,children:r}),Q(`div`,{class:`onboarding-body`,children:[Q(`h1`,{children:R(`Сколько калорий в день?`)}),Q(ra,{label:R(`Сколько калорий в день?`),value:a,onChange:o,segmented:!0,options:[{value:`body`,text:R(`Посчитать`),name:R(`Посчитать`)},{value:`known`,text:R(`Знаю цель`),name:R(`Знаю цель`)}]}),a===`body`?Q(j,{children:[Q(`div`,{class:`group`,children:[Q(`div`,{class:`row`,children:[Q(`span`,{children:R(`Пол`)}),Q(`span`,{class:`row-control`,children:Q(ra,{label:R(`Пол`),value:s,onChange:c,segmented:!0,options:[{value:`female`,text:R(`Ж`),name:R(`Женский`)},{value:`male`,text:R(`М`),name:R(`Мужской`)}]})})]}),te(R(`Возраст`),l,u,R(`лет`)),te(R(`Рост`),d,f,R(`см`)),te(R(`Вес`),p,m,R(`кг`),!0)]}),Q(`h3`,{class:`group-title`,children:R(`Активность`)}),Q(`div`,{class:`onboarding-choice`,children:Q(ra,{label:R(`Активность`),value:h,onChange:g,segmented:!0,options:[{value:`low`,text:R(`Мало`),name:R(`Мало`)},{value:`medium`,text:R(`Средне`),name:R(`Средне`)},{value:`high`,text:R(`Много`),name:R(`Много`)}]})}),Q(`h3`,{class:`group-title`,children:R(`Цель`)}),Q(`div`,{class:`onboarding-choice`,children:Q(ra,{label:R(`Цель`),value:_,onChange:v,segmented:!0,options:[{value:`lose`,text:R(`Снизить вес`),name:R(`Снизить вес`)},{value:`keep`,text:R(`Держать`),name:R(`Держать`)},{value:`gain`,text:R(`Набрать`),name:R(`Набрать`)}]})})]}):Q(`div`,{class:`group`,children:te(R(`Калории`),y,b,R(`ккал`))}),Q(`div`,{class:`card onboarding-result`,"aria-live":`polite`,children:[Q(`div`,{class:`onboarding-kcal`,children:[Q(`span`,{class:`ink-kcal`,children:O?O.targetKcal:`—`}),` `,Q(`span`,{class:`onboarding-unit`,children:[R(`ккал`),` `,R(`в день`)]})]}),O&&Q(`div`,{class:`macros`,children:[Q(`span`,{class:`ink-protein`,children:R(`Б`)}),` `,O.targetProtein,Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:R(`Ж`)}),` `,O.targetFat,Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:R(`У`)}),` `,O.targetCarbs]})]}),Q(`button`,{type:`button`,class:`button-primary`,disabled:!O,onClick:k,children:R(`Готово`)}),Q(`p`,{class:`group-footer`,children:R(a===`body`?`Посчитано по формуле Миффлина — Сан Жеора. Цели всегда можно поменять в профиле.`:`Цели всегда можно поменять в профиле.`)})]})]})}function mo({selectedDay:e,onDay:t,onRoute:n}){let r=Z(),i=mi(),[a,o]=J(()=>ho(e||i));Y(()=>{e&&o(ho(e))},[e.slice(0,7)]);let s=gi(r),c=Ht(r.profile),l=`${Ft(r.lang,{month:`long`}).format(a)} ${a.getFullYear()}`,u=Ft(r.lang,{day:`numeric`,month:`long`}),d=H(pa(r.loggedDays.at(-1))),f=B(z(V(i),1)),p=(e,t,n,r=!1)=>Q(`button`,{type:`button`,class:`side-link${r?` current`:``}`,"aria-current":r?`page`:void 0,onClick:n,children:[Q(`span`,{class:`side-icon`,children:t}),e]});return Q(`nav`,{class:`sidebar`,"aria-label":R(`Меню`),children:[Q(`div`,{class:`side-brand`,children:[Q(`img`,{src:`/krug-web/icons/icon-192.png`,alt:``}),Q(`span`,{children:R(`Круг`)})]}),Q(`div`,{class:`side-links`,children:[p(R(`Дневник`),Q(ji,{size:20}),()=>{o(ho(i)),t(i)},!0),p(R(`Статистика`),Q(Ci,{size:20}),()=>n({kind:`stats`})),p(R(`Мои продукты`),Q(wi,{size:20}),()=>n({kind:`myFoods`})),p(R(`Профиль`),Q(Si,{size:20}),()=>n({kind:`profile`}))]}),Q(`section`,{class:`side-calendar`,"aria-label":l,children:[Q(`div`,{class:`side-month`,children:[Q(`span`,{children:l}),Q(`button`,{type:`button`,"aria-label":R(`Предыдущий месяц`),onClick:()=>o(Zt(a,-1)),disabled:B(z(a,-1))<d,children:Q(bi,{size:16})}),Q(`button`,{type:`button`,"aria-label":R(`Следующий месяц`),onClick:()=>o(Zt(a,1)),disabled:B(Zt(a,1))>f,children:Q(xi,{size:16})})]}),Q(Sa,{month:a,lang:r.lang,class:`side-grid`,day:(n,r)=>{let a=r>f;return Q(`button`,{type:`button`,class:`side-day${r===e?` selected`:``}${r===i?` today`:``}`,disabled:a||r<d,"aria-label":u.format(n),"aria-pressed":r===e,onClick:()=>t(r),children:Q(va,{rings:a?[]:ma(s.get(r)??I.zero,c).slice(0,1),stroke:2.5,children:Q(`span`,{children:n.getDate()})})})}})]})]})}var ho=e=>V(on(e)[0]);function go(){let e=di(fi),[t,n]=J(!1),[r,i]=J(null),[a,o]=J(null),[s,c]=J(``),l=()=>i(null),u=Wr(li),[d,f]=J(()=>!u.onboarded&&u.entries.length===0&&Wt(u.profile));return Q(j,{children:[d&&Q(po,{onDone:()=>f(!1)}),Q(`div`,{inert:d,class:e?`studio`:void 0,children:[e&&Q(mo,{selectedDay:s,onDay:e=>o({key:e,at:Date.now()}),onRoute:i}),Q(Ya,{wide:e,onMenu:()=>n(!0),showDay:a,onDay:c})]}),t&&Q(Qa,{selectedDay:s,onClose:()=>n(!1),onRoute:e=>{n(!1),i(e)},onDay:e=>{n(!1),o({key:e,at:Date.now()})}}),r?.kind===`profile`&&Q(to,{onClose:l}),r?.kind===`stats`&&Q(ro,{onClose:l}),r?.kind===`myFoods`&&Q(oo,{onClose:l}),r?.kind===`dish`&&Q(ao,{dishId:r.id,onClose:l})]})}var _o=document.getElementById(`app`);try{let e=localStorage.getItem(`language`);At(e===`ru`||e===`en`?e:null)}catch{At(null)}document.documentElement.lang=L(),_o.innerHTML=`<p class="loading">${R(`Загружаю продукты…`)}</p>`;var vo=window.visualViewport;if(vo){let e=()=>{document.documentElement.style.setProperty(`--vv-height`,`${vo.height}px`),document.documentElement.style.setProperty(`--vv-top`,`${vo.offsetTop}px`)};vo.addEventListener(`resize`,e),vo.addEventListener(`scroll`,e),e()}async function yo(){let[e,t,n,r]=await Promise.all([wr(`krug`,e=>console.error(`diary storage:`,e)),Li(()=>import(`./starter_foods-B_nVsKLz.js`).then(e=>e.default),[]),Li(()=>import(`./off_ru-C_fWxu5_.js`).then(e=>e.default),[]),Li(()=>import(`./usda_ru-BcPVADzA.js`).then(e=>e.default),[])]),i=new xr({db:e,catalog:It.fromBundled({starter:t,off:n,usda:r})});navigator.storage?.persist?.().catch(()=>{}),_o.innerHTML=``,Ee(Q(li.Provider,{value:i,children:Q(go,{})}),_o)}yo().catch(e=>{console.error(e),_o.innerHTML=``;let t=document.createElement(`p`);t.className=`loading`,t.textContent=R(`Не получилось — попробуйте ещё раз`);let n=document.createElement(`button`);n.className=`link`,n.textContent=R(`Обновить страницу`),n.onclick=()=>location.reload(),t.append(document.createElement(`br`),n),_o.append(t)});export{d as a,f as i,o as n,c as r,s as t};