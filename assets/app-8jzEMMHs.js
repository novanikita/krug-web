import"./modulepreload-polyfill-P2Xu9kJm.js";var e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h={},g=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function y(e,t){for(var n in t)e[n]=t[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function x(t,n,r){var i,a,o,s={};for(o in n)o==`key`?i=n[o]:o==`ref`?a=n[o]:s[o]=n[o];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):r),typeof t==`function`&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return S(t,s,i,a,null)}function S(e,r,i,a,o){var s={type:e,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++n,__i:-1,__u:0};return o==null&&t.vnode!=null&&t.vnode(s),s}function C(e){return e.children}function ee(e,t){this.props=e,this.context=t}function w(e,t){if(t==null)return e.__?w(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?w(e):null}function T(e){if(e.__P&&e.__d){var n=e.__v,r=n.__e,i=[],a=[],o=y({},n);o.__v=n.__v+1,t.vnode&&t.vnode(o),j(e.__P,o,n,e.__n,e.__P.namespaceURI,32&n.__u?[r]:null,i,r??w(n),!!(32&n.__u),a),o.__v=n.__v,o.__.__k[o.__i]=o,se(i,o,a),n.__e=n.__=null,o.__e!=r&&E(o)}}function E(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),E(e)}function D(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!O.__r++||i!=t.debounceRendering)&&((i=t.debounceRendering)||a)(O)}function O(){try{for(var e,t=1;r.length;)r.length>t&&r.sort(o),e=r.shift(),t=r.length,T(e)}finally{r.length=O.__r=0}}function te(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,_,v,y=r&&r.__k||g,b=t.length;for(c=k(n,t,y,c,b),d=0;d<b;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&y[p.__i]||h,p.__i=d,v=j(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&ue(f.ref,null,p),u.push(p.ref,p.__c||m,p)),_==null&&m!=null&&(_=m),4&p.__u?(c=ne(p,c,e),f.__e&&(f.__e=null)):typeof p.type==`function`&&v!==void 0?c=v:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=_,c}function k(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=S(null,o,null,null,null):v(o)?o=e.__k[a]=S(C,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=S(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=re(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=w(s)),de(s,s));return r}function ne(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ne(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=w(e)),t=n.insertBefore(e.__e,t||null));do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function re(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ie(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||_.test(t)?n:n+`px`}function A(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ie(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ie(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(u,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[l]=r[l]:(n[l]=d,e.addEventListener(t,a?p:f,a)):e.removeEventListener(t,a?p:f,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function ae(e){return function(n){if(this.l){var r=this.l[n.type+e];if(n[c]==null)n[c]=d++;else if(n[c]<r[l])return;return r(t.event?t.event(n):n)}}}function j(e,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,_,x,S,T,E,D,O,k,ne,re,ie,A=n.type;if(n.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),o=[c=n.__e=r.__e]),(d=t.__b)&&d(n);n:if(typeof A==`function`){f=s.length;try{if(T=n.props,E=A.prototype&&A.prototype.render,D=(d=A.contextType)&&i[d.__c],O=d?D?D.props.value:d.__:i,r.__c?S=(p=n.__c=r.__c).__=p.__E:(E?n.__c=p=new A(T,O):(n.__c=p=new ee(T,O),p.constructor=A,p.render=fe),D&&D.sub(p),p.state||(p.state={}),p.__n=i,m=p.__d=!0,p.__h=[],p._sb=[]),E&&p.__s==null&&(p.__s=p.state),E&&A.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=y({},p.__s)),y(p.__s,A.getDerivedStateFromProps(T,p.__s))),h=p.props,_=p.state,p.__v=n,m)E&&A.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),E&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(E&&A.getDerivedStateFromProps==null&&T!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(T,O),n.__v==r.__v||!p.__e&&p.shouldComponentUpdate!=null&&!1===p.shouldComponentUpdate(T,p.__s,O)){n.__v!=r.__v&&(p.props=T,p.state=p.__s,p.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),g.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&s.push(p),c=w(r);break n}p.componentWillUpdate!=null&&p.componentWillUpdate(T,p.__s,O),E&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,_,x)})}if(p.context=O,p.props=T,p.__P=e,p.__e=!1,k=t.__r,ne=0,E)p.state=p.__s,p.__d=!1,k&&k(n),d=p.render(p.props,p.state,p.context),g.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,k&&k(n),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++ne<25);p.state=p.__s,p.getChildContext!=null&&(i=y(y({},i),p.getChildContext())),E&&!m&&p.getSnapshotBeforeUpdate!=null&&(x=p.getSnapshotBeforeUpdate(h,_)),re=d!=null&&d.type===C&&d.key==null?ce(d.props.children):d,c=te(e,v(re)?re:[re],n,r,i,a,o,s,c,l,u),p.base=n.__e,n.__u&=-161,p.__h.length&&s.push(p),S&&(p.__E=p.__=null)}catch(e){if(s.length=f,n.__v=null,l||o!=null){if(e.then){for(n.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o!=null&&(o[o.indexOf(c)]=null),n.__e=c}else if(o!=null)for(ie=o.length;ie--;)b(o[ie])}else n.__e=r.__e;n.__k??=r.__k||[],e.then||oe(n),t.__e(e,n,r)}}else o==null&&n.__v==r.__v?(n.__k=r.__k,n.__e=r.__e):c=n.__e=le(r.__e,n,r,i,a,o,s,l,u);return(d=t.diffed)&&d(n),128&n.__u?void 0:c}function oe(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(oe))}function se(e,n,r){for(var i=0;i<r.length;i++)ue(r[i],r[++i],r[++i]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function ce(e){return typeof e!=`object`||!e||e.__b>0?e:v(e)?e.map(ce):e.constructor===void 0?y({},e):null}function le(n,r,i,a,o,s,c,l,u){var d,f,p,m,g,_,y,x=i.props||h,S=r.props,C=r.type;if(C==`svg`?o=`http://www.w3.org/2000/svg`:C==`math`?o=`http://www.w3.org/1998/Math/MathML`:o||=`http://www.w3.org/1999/xhtml`,s!=null){for(d=0;d<s.length;d++)if((g=s[d])&&`setAttribute`in g==!!C&&(C?g.localName==C:g.nodeType==3)){n=g,s[d]=null;break}}if(n==null){if(C==null)return document.createTextNode(S);n=document.createElementNS(o,C,S.is&&S),l&&=(t.__m&&t.__m(r,s),!1),s=null}if(C==null)x===S||l&&n.data==S||(n.data=S);else{if(s=C==`textarea`&&S.defaultValue!=null?null:s&&e.call(n.childNodes),!l&&s!=null)for(x={},d=0;d<n.attributes.length;d++)x[(g=n.attributes[d]).name]=g.value;for(d in x)g=x[d],d==`dangerouslySetInnerHTML`?p=g:d==`children`||d in S||d==`value`&&`defaultValue`in S||d==`checked`&&`defaultChecked`in S||A(n,d,null,g,o);for(d in S)g=S[d],d==`children`?m=g:d==`dangerouslySetInnerHTML`?f=g:d==`value`?_=g:d==`checked`?y=g:l&&typeof g!=`function`||x[d]===g||A(n,d,g,x[d],o);if(f)l||p&&(f.__html==p.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),r.__k=[];else if(p&&(n.innerHTML=``),te(r.type==`template`?n.content:n,v(m)?m:[m],r,i,a,C==`foreignObject`?`http://www.w3.org/1999/xhtml`:o,s,c,s?s[0]:i.__k&&w(i,0),l,u),s!=null)for(d=s.length;d--;)b(s[d]);l&&C!=`textarea`||(d=`value`,C==`progress`&&_==null?n.removeAttribute(`value`):_!=null&&(_!==n[d]||C==`progress`&&!_||C==`option`&&_!=x[d])&&A(n,d,_,x[d],o),d=`checked`,y!=null&&y!=n[d]&&A(n,d,y,x[d],o))}return n}function ue(e,n,r){try{if(typeof e==`function`){var i=typeof e.__u==`function`;i&&e.__u(),i&&n==null||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,r)}}function de(e,n,r){var i,a;if(t.unmount&&t.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||ue(i,null,n)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=i.__n=null}if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&de(i[a],n,r||typeof e.type!=`function`);r||b(e.__e),e.__c=e.__=e.__e=void 0}function fe(e,t,n){return this.constructor(e,n)}function pe(n,r,i){var a,o,s,c;r==document&&(r=document.documentElement),t.__&&t.__(n,r),o=(a=typeof i==`function`)?null:i&&i.__k||r.__k,s=[],c=[],j(r,n=(!a&&i||r).__k=x(C,null,[n]),o||h,h,r.namespaceURI,!a&&i?[i]:o?null:r.firstChild?e.call(r.childNodes):null,s,!a&&i?i:o?o.__e:r.firstChild,a,c),se(s,n,c),n.props.children=null}function me(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,D(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+m++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}e=g.slice,t={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},n=0,ee.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=y({},this.state);typeof e==`function`&&(e=e(y({},n),this.props)),e&&y(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),D(this))},ee.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),D(this))},ee.prototype.render=C,r=[],a=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0,s=Math.random().toString(8),c=`__d`+s,l=`__a`+s,u=/(PointerCapture)$|Capture$/i,d=0,f=ae(!1),p=ae(!0),m=0;var M=e=>Array.from(e),N=e=>{let t=0;for(let n of e)t++;return t},he=e=>/^\s$/u.test(e),ge=e=>/^[\n\v\f\r\u0085\u2028\u2029]$/u.test(e),_e=e=>/^\p{L}$/u.test(e),ve=e=>/^\p{N}$/u.test(e),ye=e=>/^\p{Lu}$/u.test(e),P=e=>e.replace(/^[\p{Zs}\t]+|[\p{Zs}\t]+$/gu,``),be=e=>e.trim(),xe=e=>e.replace(/\s+$/u,``),Se=e=>e.replace(/^\s+/u,``);function Ce(e,t){let n=[],r=``;for(let i of e)t(i)?(r&&n.push(r),r=``):r+=i;return r&&n.push(r),n}function we(e,t){if(t.length>e.length)return!1;for(let n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function Te(e,t){return e.length===t.length&&we(e,t)}function Ee(e,t){for(let n=0;n<Math.min(e.length,t.length);n++)if(e[n]!==t[n])return e[n]-t[n];return e.length-t.length}var De=e=>he(e)||e===`,`||e===`-`;function Oe(e){return Ce(F(e.toLowerCase()),De)}function F(e){return e.normalize(`NFC`).replaceAll(`ё`,`е`).replaceAll(`Ё`,`Е`)}var ke=[[`капуста`,`Капуста белокочанная`],[`лук`,`Лук репчатый`],[`рис`,`Рис сухой`],[`гречка`,`Гречка, сухая`],[`греча`,`Гречка, сухая`],[`макароны`,`Макароны, сухие`],[`картофель`,`Картофель`],[`картошка`,`Картофель`],[`морковь`,`Морковь`],[`свёкла`,`Свёкла`],[`свекла`,`Свёкла`],[`помидор`,`Помидор`],[`томат`,`Помидор`],[`огурец`,`Огурец`],[`яблоко`,`Яблоко`],[`банан`,`Банан`],[`апельсин`,`Апельсин`],[`груша`,`Груша`],[`курица`,`Куриная грудка`],[`филе`,`Куриная грудка`],[`говядина`,`Говядина`],[`свинина`,`Свинина`],[`яйцо`,`Яйцо куриное`],[`яйца`,`Яйцо куриное`],[`молоко`,`Молоко 2,5%`],[`кефир`,`Кефир 2,5%`],[`творог`,`Творог 5%`],[`сыр`,`Сыр твёрдый (Российский)`],[`хлеб`,`Хлеб пшеничный`],[`масло`,`Масло сливочное`],[`сахар`,`Сахар`],[`мёд`,`Мёд`],[`мед`,`Мёд`],[`овсянка`,`Овсяные хлопья, сухие`],[`каша`,`Овсянка на воде`],[`кофе`,`Кофе чёрный`],[`капучино`,`Капучино`],[`чай`,`Чай чёрный`],[`лосось`,`Лосось`],[`горбуша`,`Горбуша, сырая`],[`йогурт`,`Йогурт натуральный 3,2%`],[`сметана`,`Сметана 15%`],[`колбаса`,`Колбаса Докторская`],[`сосиски`,`Сосиски`],[`фасоль`,`Фасоль красная, сухая`],[`чечевица`,`Чечевица, сухая`],[`кукуруза`,`Кукуруза, варёная`],[`горошек`,`Горошек зелёный`],[`перец`,`Перец болгарский`],[`шпинат`,`Шпинат`],[`салат`,`Салат листовой`],[`грибы`,`Шампиньоны`],[`шампиньоны`,`Шампиньоны`],[`тунец`,`Тунец консервированный в собственном соку`],[`креветки`,`Креветки, варёные`],[`индейка`,`Индейка филе`],[`печень`,`Печень куриная`],[`лаваш`,`Лаваш тонкий`],[`перловка`,`Перловка, сухая`],[`булгур`,`Булгур, сухой`],[`кускус`,`Кускус, варёный`],[`киноа`,`Киноа, варёная`],[`изюм`,`Изюм`],[`финики`,`Финики`],[`шоколад`,`Шоколад горький 70%`],[`печенье`,`Печенье`],[`орехи`,`Ореховая смесь`],[`миндаль`,`Миндаль`],[`авокадо`,`Авокадо`],[`хлебцы`,`Хлебцы`],[`пельмени`,`Пельмени`],[`сырники`,`Сырники`],[`борщ`,`Борщ`],[`плов`,`Плов`],[`пицца`,`Пицца`],[`бургер`,`Бургер`],[`вино`,`Вино сухое`],[`пиво`,`Пиво`]];function Ae(e){let t=Oe(e);if(t.length!==1||N(t[0])<3)return null;let n=t[0],r=ke.find(([e])=>F(e)===n);if(r)return r[1];let i=ke.find(([e])=>{let t=F(e);return t.startsWith(n)||et(t,n)||qe(t,n)});return i?i[1]:null}var je=class{name;folded;words;length;matchWords;chars;allChars;cooking;constructor(e){this.name=e,this.folded=F(e.toLowerCase()),this.words=Ce(this.folded,De),this.matchWords=this.words.filter(e=>!Me.has(e)),this.chars=this.matchWords.map(M),this.allChars=this.words.map(M),this.cooking=this.chars.map(Ie).filter(e=>e!==null),this.length=N(e)}},Me=new Set([`сырой`,`сырая`,`сырое`,`сырые`,`сухой`,`сухая`,`сухое`,`сухие`]),Ne=[[`варен`,`отварн`,`сварен`],[`жарен`,`обжарен`,`поджарен`],[`запечен`,`печен`],[`тушен`],[`гриль`],[`копчен`,`сырокопчен`,`варено-копчен`],[`маринован`],[`солен`,`засолен`,`малосол`],[`квашен`],[`сушен`,`вялен`],[`консервирован`],[`заморожен`],[`паров`],[`фри`]],Pe=new Set([``,`ая`,`ый`,`ое`,`ые`,`ой`,`ых`,`ую`,`ым`,`ом`,`ого`,`ей`,`ие`,`ий`]),Fe=Ne.map(e=>e.map(M));function Ie(e){let t=Fe.findIndex(t=>t.some(t=>{if(!we(e,t))return!1;let n=e.slice(t.length);return n[0]===`н`&&(n=n.slice(1)),Pe.has(n.join(``))}));return t<0?null:t}var Le=class{text;lastComplete;folded;words;spellings;saysRaw;cooking;constructor(e,t){this.text=e,this.lastComplete=t,this.folded=F(xe(e).toLowerCase()),this.words=Ce(this.folded,De),this.saysRaw=this.words.some(e=>Me.has(e)),this.cooking=new Set(this.words.map(e=>Ie(M(e))).filter(e=>e!==null));let n=this.words.map(e=>Ze(e).map(M)),r=this.words[this.words.length-1];if(!t&&r!==void 0&&N(r)>=3&&n.length>0){let e=[...Xe].filter(([e])=>e.startsWith(r)&&e!==r).flatMap(([,e])=>e);n[n.length-1]=n[n.length-1].concat(e.map(M))}this.spellings=n}};function Re(e,t){let n=M(t);if(e.matchWords.includes(t)||Xe.has(t))return!0;if(e.chars.some(e=>e.length>n.length&&we(e,n))||[...Xe.keys()].some(e=>N(e)>n.length&&e.startsWith(t)))return!1;let r=Ze(t).map(M);return e.chars.some(e=>Ue(e,r,1))}function ze(e,t){return Ve(e,t)!==null}function Be(e,t){let n=Ve(e,t);if(n===null)return!1;for(let t=n;t<e.length;t++)if(e[t]!==`,`&&e[t]!==` `)return!1;return!0}function Ve(e,t){let n=0,r=0;for(;r<t.length;){if(n===e.length)return null;if(e[n]===t[r])n++,r++;else if(e[n]===`,`)n++;else if(t[r]===`,`)r++;else return null}return n}function He(e,t){if(ze(e.folded,t.folded))return 0;let n=t.spellings,r=t.saysRaw?e.allChars:e.chars;if(n.length===0||n.length>r.length)return null;let i=r.map(()=>!1);levels:for(let e=0;e<=2;e++){i.fill(!1);for(let a=0;a<n.length;a++){let o=n[a],s=a===n.length-1&&!t.lastComplete,c=r.findIndex((t,n)=>!i[n]&&(s?We(t,o,e):Ue(t,o,e)));if(c<0)continue levels;i[c]=!0}return e}return null}function Ue(e,t,n){let r=Ie(e);return r!==null&&t.some(e=>Ie(e)===r)?!0:t.some(t=>Te(e,t)||tt(e,t)||n>=1&&Je(e,t)?!0:n>=2&&t.length>=4&&rt(e,t))}function We(e,t,n){if(t.some(t=>we(e,t)))return!0;let r=Ie(e);if(r!==null&&t.some(e=>Ie(e)===r||Fe[r].some(t=>we(t,e))))return!0;let i=t[0];if(tt(e,i)||n>=1&&Je(e,i))return!0;if(n<2||i.length<4)return!1;for(let t of[i.length-1,i.length,i.length+1])if(t>0&&t<=e.length&&rt(e.slice(0,t),i))return!0;return!1}function Ge(e){return Ke(N(e))}function Ke(e){return e<5?e:Math.max(4,Math.ceil(e*.6))}function qe(e,t){return Je(M(e),M(t))}function Je(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;return n>=4&&n>=Math.min(Ke(e.length),Ke(t.length))&&e.length-n<=4&&t.length-n<=4}var Ye={филе:[`грудка`],грудка:[`филе`],филешка:[`грудка`],кура:[`курица`],курочка:[`курица`],курятина:[`курица`],индюшка:[`индейка`],индюшатина:[`индейка`],свининка:[`свинина`],говядинка:[`говядина`],телятина:[`говядина`],крылышки:[`крылья`],крылья:[`крылышки`],бедрышки:[`бедро`],бедрышко:[`бедро`],ножки:[`голень`],сёмга:[`лосось`],семга:[`лосось`],лосось:[`сёмга`],рыбка:[`рыба`],сосиска:[`сосиски`],сарделька:[`сардельки`],котлетка:[`котлета`],греча:[`гречка`],гречечка:[`гречка`],рисик:[`рис`],овсяночка:[`овсянка`],геркулес:[`овсянка`],кашка:[`каша`],пшёнка:[`пшено`],пшенка:[`пшено`],макарошки:[`макароны`],паста:[`макароны`],спагетти:[`макароны`],вермишель:[`макароны`],хлебушек:[`хлеб`],булочка:[`булка`],лавашик:[`лаваш`],картошка:[`картофель`],картофан:[`картофель`],картошечка:[`картофель`],пюрешка:[`пюре`],помидор:[`томат`],томат:[`помидор`],помидорка:[`помидор`],огурчик:[`огурец`],морковка:[`морковь`],свеколка:[`свёкла`],лучок:[`лук`],чесночок:[`чеснок`],перчик:[`перец`],капустка:[`капуста`],кабачок:[`цукини`],цукини:[`кабачок`],грибочки:[`грибы`],шампиньон:[`грибы`],яблочко:[`яблоко`],бананчик:[`банан`],апельсинка:[`апельсин`],мандаринка:[`мандарин`],ягодки:[`ягоды`],яйца:[`яйцо`],яички:[`яйцо`],яичко:[`яйцо`],творожок:[`творог`],кефирчик:[`кефир`],молочко:[`молоко`],сметанка:[`сметана`],сырочек:[`сыр`],йогуртик:[`йогурт`],маслице:[`масло`],сахарок:[`сахар`],медок:[`мёд`],шоколадка:[`шоколад`],печенька:[`печенье`],печеньки:[`печенье`],конфетка:[`конфеты`],мороженка:[`мороженое`],орешки:[`орехи`],чаёк:[`чай`],чаек:[`чай`],кофеёк:[`кофе`],кофеек:[`кофе`],каппучино:[`капучино`],капуччино:[`капучино`],супчик:[`суп`],борщик:[`борщ`],салатик:[`салат`],гамбургер:[`бургер`],сендвич:[`сэндвич`],бутер:[`бутерброд`],пицца:[`пицца`]},Xe=(()=>{let e=new Map;for(let[t,n]of Object.entries(Ye)){let r=F(t);e.set(r,(e.get(r)??[]).concat(n.map(F)))}return e})();function Ze(e){return[e,...Xe.get(e)??[]]}var Qe=new Set(`аеёиоуыэюяйь`),$e=new Set([...Qe,...`мвх`]);function et(e,t){return tt(M(e),M(t))}function tt(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;if(n<3)return!1;let r=e.slice(n),i=t.slice(n);if(r.length>3||i.length>3)return!1;let a=e=>e.length===0||Qe.has(e[0])&&e.every(e=>$e.has(e)),o=Math.min(e.length,t.length);return a(r)&&a(i)&&n>=o-3}function nt(e){return M(e).slice(0,Ge(e)).join(``)}function rt(e,t){if(Te(e,t))return!0;let n=e.length,r=t.length;if(Math.abs(n-r)>1)return!1;let i=0,a=0,o=0;for(;i<n&&a<r;)if(e[i]===t[a])i++,a++;else{if(o++,o>1)return!1;n>r?i++:r>n?a++:i+1<n&&e[i]===t[a+1]&&e[i+1]===t[a]?(i+=2,a+=2):(i++,a++)}return o+=n-i+(r-a),o<=1}var it=M("qwertyuiop[]asdfghjkl;'zxcvbnm,.`"),at=M(`йцукенгшщзхъфывапролджэячсмитьбюё`),ot=e=>/^[A-Za-z]$/.test(e);function st(e){let t=M(e);if(t.some(e=>at.includes(e.toLowerCase()))||!t.some(ot))return null;let n=``;return t.forEach((e,r)=>{let i=e.toLowerCase(),a=it.indexOf(i),o=!ot(e),s=r>0&&ot(t[r-1])||r+1<t.length&&ot(t[r+1]);if(a>=0&&(!o||s)){let t=at[a];n+=e===i?t:t.toUpperCase()}else n+=e}),n}var ct=[`starter`,`off`,`usda`,`user`,`vkusvill`],lt={user:0,starter:1,vkusvill:2,usda:3,off:5},ut={user:.1,starter:.1,vkusvill:.05,usda:0,off:-.15},dt=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],ft=e=>typeof e==`string`&&dt.includes(e),I=class e{kcal;protein;fat;carbs;constructor(e,t,n,r){this.kcal=e,this.protein=t,this.fat=n,this.carbs=r}static zero=new e(0,0,0,0);scaled(t){return new e(this.kcal*t,this.protein*t,this.fat*t,this.carbs*t)}plus(t){return new e(this.kcal+t.kcal,this.protein+t.protein,this.fat+t.fat,this.carbs+t.carbs)}forGrams(e){return this.scaled(e/100)}get isPossiblePer100g(){return[this.protein,this.fat,this.carbs].every(e=>e>=0)&&this.protein+this.fat+this.carbs<=105&&this.kcal>=0&&this.kcal<=1e3}},pt=class{id;source;nameRu;nameEn;brand;externalId;per100g;portions;dishWeight;rare;searchText;ruKey;enKey;brandKey;constructor(e){this.id=e.id,this.source=e.source,this.nameRu=e.nameRu,this.nameEn=e.nameEn,this.brand=e.brand??null,this.externalId=e.externalId??null,this.per100g=e.per100g,this.portions=e.portions??[],this.dishWeight=e.dishWeight??null,this.rare=e.rare??!1,this.searchText=F([this.nameRu,this.nameEn,this.brand].filter(e=>e!==null).join(` `).toLowerCase());let t=e=>{let t=e===null?``:P(e);return t?new je(t):null};this.ruKey=t(this.nameRu),this.enKey=t(this.nameEn),this.brandKey=t(this.brand)}get searchRank(){return lt[this.source]+ +!!this.rare}get relevanceWeight(){return ut[this.source]-(this.rare?.2:0)}keys(e){return(e===`en`?[this.enKey,this.ruKey]:[this.ruKey,this.enKey]).filter(e=>e!==null)}searchTextContains(e){return e===``||this.searchText.includes(e)}name(e){let t=this.nameRu===null?null:P(this.nameRu),n=this.nameEn===null?null:P(this.nameEn),[r,i]=e===`ru`?[t,n]:[n,t];return r||i||``}startsWith(e){return this.ruKey?.folded.startsWith(e)===!0||this.enKey?.folded.startsWith(e)===!0}portion(e){return this.portions.find(t=>t.unit===e)}},mt=`{
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
    }
  }
}
`;function ht(){return(typeof navigator>`u`?`ru`:navigator.languages?.[0]??navigator.language??`ru`).startsWith(`en`)?`en`:`ru`}var gt=ht(),L=()=>gt;function _t(e){gt=e??ht()}var vt=e=>e===`ru`?`ru-RU`:`en-US`,yt=(()=>{let e=JSON.parse(mt),t={ru:new Map,en:new Map};for(let[n,r]of Object.entries(e.strings))for(let e of[`ru`,`en`]){let i=r.localizations?.[e]?.stringUnit?.value;i!==void 0&&t[e].set(n,i)}return t})(),bt={"Нет сети — ищу только на этом устройстве":`Offline — searching this device only`,"Дневник хранится в этом браузере":`The diary is kept in this browser`,"Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.":`Save a copy from the profile: without it, entries can’t move to another browser or device.`,"Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.":`The browser’s storage couldn’t be opened. This session’s entries will be gone when the page closes.`,Раньше:`Earlier`,Позже:`Later`,"Загружаю продукты…":`Loading foods…`,Сводка:`Summary`,"Обновить страницу":`Reload the page`,"Добавьте Круг на экран «Домой»":`Add Krug to your Home Screen`,"Так дневник надёжно хранится на телефоне и открывается как приложение.":`This way the diary is kept safely on the phone and opens like an app.`,"В Safari: «Поделиться» → «На экран „Домой“».":`In Safari: Share → Add to Home Screen.`,Установить:`Install`,"Не сейчас":`Not now`,"Поиск в сети просит подождать минуту — ищу только на этом устройстве":`Online search asks to wait a minute — searching this device only`};function R(e,t=[],n=gt){let r=yt[n].get(e)??(n===`en`?bt[e]:void 0)??e,i=0;return r.replace(/%(?:(\d+)\$)?(?:@|lld|d)/g,(e,n)=>{let r=n?t[Number(n)-1]:t[i++];return String(r??``)})}var xt=new Map;function St(e,t){let n=`${e}|${JSON.stringify(t)}`,r=xt.get(n);return r||xt.set(n,r=new Intl.DateTimeFormat(vt(e),t)),r}var Ct=class e{foods=[];byId=new Map;byBarcode=new Map;constructor(e){this.add(e)}food(e){return this.byId.get(e)}foodByBarcode(e){return this.byBarcode.get(e)}remove(e){let t=this.byId.get(e);t&&(this.byId.delete(e),this.foods=this.foods.filter(t=>t.id!==e),t.externalId!==null&&this.byBarcode.get(t.externalId)?.id===e&&this.byBarcode.delete(t.externalId))}add(e,t=!1){for(let n of e){if(!this.byId.has(n.id))this.foods.push(n),this.byId.set(n.id,n);else if(t){let e=this.foods.findIndex(e=>e.id===n.id);e>=0&&(this.foods[e]=n,this.byId.set(n.id,n))}let e=n.externalId;e!==null&&N(e)>=8&&M(e).every(ve)&&this.byBarcode.set(e,this.byId.get(n.id))}}search(e,{limit:t=30,usage:n=new Map,lang:r=L()}={}){let i=F(P(e.toLowerCase())),a=Ce(i,he).map(e=>{let t=Ie(M(e));if(t===null&&N(e)>=3){let n=Ne.findIndex(t=>t.some(t=>t.startsWith(e)));t=n<0?null:n}return Ze(e).map(nt).concat(t===null?[]:Ne[t])}),o=this.foods.filter(e=>a.every(t=>t.some(t=>e.searchTextContains(t)))),s=Ae(i),c=s===null?null:F(s.toLowerCase());if(c!==null&&!o.some(e=>e.ruKey?.folded===c)){let e=this.foods.find(e=>e.ruKey?.folded===c);e&&o.push(e)}return o.map(e=>{let t=n.get(e.id);return{f:e,key:[-(t?.count??0),-Math.trunc((t?.lastUsed??-621355968e5)/1e3),c!==null&&e.ruKey?.folded===c?0:1,+!e.startsWith(i),e.searchRank,e.keys(r)[0]?.length??0]}}).sort((e,t)=>Ee(e.key,t.key)).slice(0,t).map(e=>e.f)}static fromBundled(t){return new e([...e.parseStarter(t.starter),...e.parseBundle(t.off),...e.parseBundle(t.usda)])}static parseStarter(e){return Array.isArray(e)?e.flatMap(e=>typeof e!=`object`||!e||typeof e.id!=`string`?[]:[new pt({id:`starter:${e.id}`,source:`starter`,nameRu:typeof e.ru==`string`?e.ru:null,nameEn:typeof e.en==`string`?e.en:null,per100g:Tt(e.kcal,e.p,e.f,e.c),portions:Et(e.portions)})]):[]}static parseBundle(t){if(typeof t!=`object`||!t)return[];let n=t,r=ct.find(e=>e===n.source);return r===void 0||!Array.isArray(n.items)?[]:n.items.flatMap(t=>{if(!Array.isArray(t)||t.length<9||typeof t[0]!=`string`)return[];let n=Dt(t[1]),i=Dt(t[2]),a=Dt(t[3]);return[new pt({id:`${r}:${t[0]}`,source:r,nameRu:n,nameEn:i,brand:a,externalId:t[0],per100g:Tt(t[4],t[5],t[6],t[7]),portions:Et(t[8]),rare:t.length>9&&t[9]===!0||r===`off`&&!e.isCaredFor(n??i,a)})]})}static isCaredFor(e,t){if(e===null||e===``||t===null||t===``)return!1;let n=M(e)[0];return(ye(n)||ve(n))&&N(e)<=60}},wt=e=>typeof e==`number`?e:0;function Tt(e,t,n,r){return new I(wt(e),wt(t),wt(n),wt(r))}function Et(e){return typeof e!=`object`||!e||Array.isArray(e)?[]:Object.entries(e).flatMap(([e,t])=>ft(e)&&wt(t)>0?[{unit:e,grams:wt(t)}]:[]).sort((e,t)=>e.unit<t.unit?-1:+(e.unit>t.unit))}function Dt(e){if(typeof e!=`string`)return null;let t=P(e);return t===``?null:t}var Ot=()=>({heightCm:null,weightKg:null,sex:`unset`,birthYear:null,targetKcal:2e3,targetProtein:100,targetFat:70,targetCarbs:250}),kt=e=>new I(e.targetKcal,e.targetProtein,e.targetFat,e.targetCarbs);function At(e,t){return Object.keys(e).every(n=>e[n]===t[n])}var jt=e=>At(e,Ot()),Mt=()=>({food:[],usage:[],entry:[],dishIngredient:[],profile:null,meta:[]});function Nt(e,t){return{id:e.id,source:e.source,externalId:e.externalId,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,kcal:e.per100g.kcal,protein:e.per100g.protein,fat:e.per100g.fat,carbs:e.per100g.carbs,portions:[...e.portions],createdAt:t,dishWeight:e.dishWeight}}function Pt(e){return new pt({id:e.id,source:e.source,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,externalId:e.externalId,per100g:new I(e.kcal,e.protein,e.fat,e.carbs),portions:e.portions,dishWeight:e.dishWeight})}var Ft=(e,t)=>`${e}\n${t}`,It=class e{sink;foodRows=new Map;usageRows=new Map;entryRows=new Map;ingredientRows=new Map;profileRow=Ot();metaRows=new Map;lastCreated=0;constructor(e=Mt(),t=null){this.sink=t;for(let t of e.food)this.foodRows.set(t.id,t);for(let t of e.usage)this.usageRows.set(t.foodId,{count:t.count,lastUsed:t.lastUsed});for(let t of e.entry)this.entryRows.set(t.id,{...t});for(let t of e.dishIngredient)this.ingredientRows.set(Ft(t.dishId,t.position),t);e.profile&&(this.profileRow={...Ot(),...e.profile});for(let[t,n]of e.meta)this.metaRows.set(t,n)}static inMemory(){return new e}get persistent(){return this.sink!==null}flushed(){return this.sink?.flushed?.()??Promise.resolve()}commit(e){e.length>0&&this.sink?.write(e)}now(){return this.lastCreated=Math.max(Date.now(),this.lastCreated+1),this.lastCreated}foods(){return[...this.foodRows.values()].map(Pt)}save(e,t){let n=[];for(let r of e)t?n.push(this.upsert(r)):this.foodRows.has(r.id)||n.push(this.putFood(Nt(r,this.now())));this.commit(n)}upsert(e){return this.putFood(Nt(e,this.foodRows.get(e.id)?.createdAt??this.now()))}putFood(e){return this.foodRows.set(e.id,e),{table:`food`,key:e.id,value:e}}ownFoodIds(){return[...this.foodRows.values()].filter(e=>e.source===`user`).sort((e,t)=>t.createdAt-e.createdAt).map(e=>e.id)}ownCreatedAt(){return new Map([...this.foodRows.values()].filter(e=>e.source===`user`).map(e=>[e.id,e.createdAt]))}saveDish(e,t){let n=[this.upsert(e),...this.dropIngredients(e.id)];for(let e of t)n.push(this.putIngredient(e));this.commit(n)}dropIngredients(e){return this.ingredients(e).map(e=>{let t=Ft(e.dishId,e.position);return this.ingredientRows.delete(t),{table:`dishIngredient`,key:t}})}putIngredient(e){let t=Ft(e.dishId,e.position);return this.ingredientRows.set(t,e),{table:`dishIngredient`,key:t,value:e}}deleteFood(e){let t=this.foodRows.get(e);if(!t)return null;let n=this.ingredients(e),r=[...this.entryRows.values()].filter(t=>t.foodId===e),i=[...this.ingredientRows.values()].filter(t=>t.foodId===e&&t.dishId!==e),a={food:Pt(t),createdAt:t.createdAt,ingredients:n,entryIds:r.map(e=>e.id),usedIn:i.map(e=>({dishId:e.dishId,position:e.position}))},o=[];for(let e of r)o.push(this.putEntry({...e,foodId:null}));for(let e of i)o.push(this.putIngredient({...e,foodId:null}));return o.push(...this.dropIngredients(e)),this.foodRows.delete(e),o.push({table:`food`,key:e}),this.commit(o),a}restoreFood(e){let t=[];this.foodRows.has(e.food.id)||t.push(this.putFood(Nt(e.food,e.createdAt)));for(let n of e.ingredients)this.ingredientRows.has(Ft(n.dishId,n.position))||t.push(this.putIngredient(n));for(let n of e.entryIds){let r=this.entryRows.get(n);r&&t.push(this.putEntry({...r,foodId:e.food.id}))}let n=[e.food.name(`ru`),e.food.name(`en`)];for(let{dishId:r,position:i}of e.usedIn){let a=this.ingredientRows.get(Ft(r,i));a&&a.foodId===null&&n.includes(a.name)&&t.push(this.putIngredient({...a,foodId:e.food.id}))}this.commit(t)}usage(){return new Map([...this.usageRows].map(([e,t])=>[e,{...t}]))}saveUsage(e,t){this.commit([this.putUsage(t,e)])}putUsage(e,t){return this.usageRows.set(e,{...t}),{table:`usage`,key:e,value:{foodId:e,count:t.count,lastUsed:t.lastUsed}}}entries(){return[...this.entryRows.values()].map(e=>({...e})).sort((e,t)=>e.loggedAt-t.loggedAt)}saveEntry(e){this.commit([this.putEntry(e)])}putEntry(e){let t={...e};return this.entryRows.set(t.id,t),{table:`entry`,key:t.id,value:t}}deleteEntry(e){this.entryRows.delete(e)&&this.commit([{table:`entry`,key:e}])}profile(){return{...this.profileRow}}saveProfile(e){this.commit([this.putProfile(e)])}putProfile(e){return this.profileRow={...e},{table:`profile`,key:`1`,value:{...e}}}ingredients(e){return[...this.ingredientRows.values()].filter(t=>t.dishId===e).sort((e,t)=>e.position-t.position).map(e=>({...e}))}importBackup(e){let t=[],n=new Set,r=0;for(let r of e.foods)this.foodRows.has(r.id)||(t.push(this.putFood(Nt(r,e.createdAt.get(r.id)??this.now()))),n.add(r.id));for(let r of e.ingredients)n.has(r.dishId)&&!this.ingredientRows.has(Ft(r.dishId,r.position))&&t.push(this.putIngredient(r));for(let n of e.entries)this.entryRows.has(n.id)||(t.push(this.putEntry(n)),r++);for(let[n,r]of e.usage){let e=this.usageRows.get(n);t.push(this.putUsage(n,{count:Math.max(e?.count??0,r.count),lastUsed:Math.max(e?.lastUsed??-1/0,r.lastUsed)}))}return e.profile&&jt(this.profileRow)&&t.push(this.putProfile(e.profile)),this.commit(t),{entries:r,foods:n.size}}meta(e){return this.metaRows.get(e)??null}setMeta(e,t){this.metaRows.set(e,t),this.commit([{table:`meta`,key:e,value:{key:e,value:t}}])}};function Lt(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function z(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function Rt(e,t){let n=new Date(e);return n.setMonth(n.getMonth()+t),n}var zt=(e,t)=>String(e).padStart(t,`0`);function B(e){return`${zt(e.getFullYear(),4)}-${zt(e.getMonth()+1,2)}-${zt(e.getDate(),2)}`}function V(e){let t=Bt(e);if(t===null)throw Error(`not a day: ${e}`);return t}function Bt(e){let t=e.split(`-`).filter(e=>e!==``).map(e=>/^[+-]?\d+$/.test(e)?Number(e):null);if(t.length!==3||t.some(e=>e===null||!Number.isSafeInteger(e)))return null;let n=new Date(2e3,0,1);return n.setFullYear(t[0],t[1]-1,t[2]),n.setHours(0,0,0,0),Number.isNaN(n.getTime())||B(n)!==e?null:n}function Vt(e,t=new Date){return B(z(Lt(t),e))}function Ht(e=new Date){return B(e)}function Ut(e,t=new Date,n=L()){switch(e){case Vt(0,t):return R(`Сегодня`,[],n);case Vt(-1,t):return R(`Вчера`,[],n);case Vt(1,t):return R(`Завтра`,[],n);default:return St(n,{month:`long`,day:`numeric`}).format(V(e))}}var Wt=(e,[t,n])=>e>=t&&e<=n;function Gt(e){let t=Lt(e);return z(t,-((t.getDay()+6)%7))}function Kt(e){let t=Gt(V(e));return[B(t),B(z(t,6))]}function qt(e){let t=V(e),n=new Date(t.getFullYear(),t.getMonth(),1),r=z(Rt(n,1),-1);return[B(n),B(r)]}var Jt=e=>typeof e==`object`&&!!e&&!Array.isArray(e);function Yt(e,t){if(!Number.isFinite(e))return Number.isNaN(e)?`nan`:e>0?`inf`:`-inf`;let n=e.toFixed(t);if(Math.abs(e)>=1e21)return n;let r=Math.abs(e).toFixed(100).split(`.`)[1];if(r[t]!==`5`||!/^0*$/.test(r.slice(t+1)))return n;let i=BigInt(n.replace(`-`,``).replace(`.`,``));if(i%2n==0n)return n;let a=(i-1n).toString().padStart(t+1,`0`);return(e<0?`-`:``)+(t===0?a:`${a.slice(0,-t)}.${a.slice(-t)}`)}var H=e=>Yt(e,0);function U(e){return e<10&&e!==Math.round(e)?Yt(e,1):Yt(e,0)}function Xt(e){return e==null||!(e>=0&&e<1e5)?null:e}function Zt(e){let t=P(e).replaceAll(`,`,`.`);return!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(t)&&!/^[+-]?(nan|inf|infinity)$/i.test(t)?null:/nan/i.test(t)?NaN:/inf/i.test(t)?t.startsWith(`-`)?-1/0:1/0:Number(t)}var Qt=e=>Xt(Zt(e));function $t(e){if(!Number.isInteger(e)||Math.abs(e)>=0x38d7ea4c68000)return`other`;let t=e%10,n=e%100;return t===1&&n!==11?`one`:t>=2&&t<=4&&!(n>=12&&n<=14)?`few`:`many`}var en={gram:[`gram`,`grams`],ml:[`ml`,`ml`],piece:[`piece`,`pieces`],pack:[`pack`,`packs`],spoon:[`tbsp`,`tbsp`],teaspoon:[`tsp`,`tsp`],slice:[`slice`,`slices`],cup:[`cup`,`cups`],portion:[`portion`,`portions`]},tn={gram:{one:`грамм`,few:`грамма`,many:`грамм`,other:`грамма`},ml:{one:`мл`,few:`мл`,many:`мл`,other:`мл`},piece:{one:`штука`,few:`штуки`,many:`штук`,other:`штуки`},pack:{one:`пачка`,few:`пачки`,many:`пачек`,other:`пачки`},spoon:{one:`ст. ложка`,few:`ст. ложки`,many:`ст. ложек`,other:`ст. ложки`},teaspoon:{one:`ч. ложка`,few:`ч. ложки`,many:`ч. ложек`,other:`ч. ложки`},slice:{one:`ломтик`,few:`ломтика`,many:`ломтиков`,other:`ломтика`},cup:{one:`стакан`,few:`стакана`,many:`стаканов`,other:`стакана`},portion:{one:`порция`,few:`порции`,many:`порций`,other:`порции`}};function nn(e,t,n){return n===`en`?en[e][t===1?0:1]:tn[e][$t(t)]}function rn(e,t,n=L()){return`${an(e)} ${nn(t,e,n)}`}function an(e){if(Number.isInteger(e)&&Math.abs(e)<0x38d7ea4c68000)return String(e);let t=Yt(e,2);for(;t.endsWith(`0`);)t=t.slice(0,-1);return t}function on(e){return Number.isInteger(e)?Yt(e,0):Yt(e,1)}var sn=`krug-backup`,cn=[`starter`,`off`,`usda`,`user`,`vkusvill`],ln=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],un=[`unset`,`female`,`male`],dn=class extends Error{kind;constructor(e){super(e),this.kind=e}},W=e=>typeof e==`string`?e:null,fn=(e,t)=>typeof t==`number`&&Number.isInteger(t)&&t>=0&&t<e.length?e[t]:null,G=e=>Xt(typeof e==`number`?e:null),pn=e=>{let t=G(e);return t!==null&&Number.isInteger(t)?t:null};function mn(e){let t=G(e.kcal),n=G(e.protein),r=G(e.fat),i=G(e.carbs);return t===null||n===null||r===null||i===null?null:new I(t,n,r,i)}function hn(e,t=new Date){let n;try{n=JSON.parse(e)}catch{throw new dn(`notABackup`)}if(!Jt(n)||n.format!==`krug-backup`||typeof n.version!=`number`)throw new dn(`notABackup`);if(n.version>1)throw new dn(`tooNew`);let r=e=>Array.isArray(n[e])?n[e].filter(Jt):[],i=V(Vt(2,t)).getTime(),a=e=>typeof e==`number`&&e>=0&&e<i?e:null,o={foods:[],ingredients:[],entries:[],usage:new Map,createdAt:new Map,profile:null},s=new Map;for(let e of r(`portions`)){let t=W(e.foodId),n=fn(ln,e.unit),r=G(e.grams);t!==null&&n!==null&&r!==null&&s.set(t,[...s.get(t)??[],{unit:n,grams:r}])}for(let e of r(`foods`)){let t=W(e.id),n=fn(cn,e.source),r=mn(e);if(t===null||n===null||r===null)continue;o.foods.push(new pt({id:t,source:n,nameRu:W(e.nameRu),nameEn:W(e.nameEn),brand:W(e.brand),externalId:W(e.externalId),per100g:r,portions:s.get(t)??[],dishWeight:G(e.dishWeight)}));let i=a(e.createdAt);i!==null&&o.createdAt.set(t,i);let c=pn(e.useCount);c!==null&&c>0&&o.usage.set(t,{count:c,lastUsed:a(e.lastUsedAt)??i??-621355968e5})}for(let e of r(`dishIngredients`)){let t=W(e.dishId),n=typeof e.position==`number`&&Number.isInteger(e.position)?e.position:null,r=W(e.name),i=fn(ln,e.unit),a=G(e.unitAmount),s=G(e.grams),c=mn(e);t!==null&&n!==null&&r!==null&&i!==null&&a!==null&&s!==null&&c!==null&&o.ingredients.push({dishId:t,position:n,foodId:W(e.foodId),name:r,unit:i,unitAmount:a,grams:s,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs})}for(let e of r(`entries`)){let t=W(e.id),n=W(e.dayKey),r=n===null?null:Bt(n),s=W(e.name),c=a(e.loggedAt),l=fn(ln,e.unit),u=G(e.grams),d=G(e.unitAmount),f=mn(e);t===null||n===null||r===null||r.getTime()<0||r.getTime()>=i||s===null||c===null||l===null||u===null||d===null||f===null||o.entries.push({id:t,dayKey:n,loggedAt:c,foodId:W(e.foodId),name:s,grams:u,unit:l,unitAmount:d,kcal:f.kcal,protein:f.protein,fat:f.fat,carbs:f.carbs,counted:typeof e.counted!=`boolean`||e.counted})}if(Jt(n.profile)){let e=n.profile,t=Ot();t.heightCm=pn(e.heightCm),t.weightKg=G(e.weightKg),t.sex=fn(un,e.sex)??`unset`,t.birthYear=pn(e.birthYear),t.targetKcal=pn(e.targetKcal)??t.targetKcal,t.targetProtein=pn(e.targetProtein)??t.targetProtein,t.targetFat=pn(e.targetFat)??t.targetFat,t.targetCarbs=pn(e.targetCarbs)??t.targetCarbs,o.profile=t}return o}function gn(e){let t=(e.now??new Date).getTime(),n=e.ownFoods.flatMap(t=>e.ingredientsOf(t.id)),r=new Map;for(let t of e.ownFoods)r.has(t.id)||r.set(t.id,t);let i=[...e.entries.map(e=>e.foodId),...n.map(e=>e.foodId),...e.usage.keys()].filter(e=>e!==null);for(let t of i){if(r.has(t))continue;let n=e.food(t);n&&r.set(t,n)}let a=[...r.values()].sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));return{format:sn,version:1,exportedAt:new Date(t).toISOString().replace(/\.\d{3}Z$/,`Z`),foods:a.map(n=>{let r=e.usage.get(n.id);return{id:n.id,source:cn.indexOf(n.source),externalId:n.externalId,nameRu:n.nameRu,nameEn:n.nameEn,brand:n.brand,searchText:n.searchText,kcal:n.per100g.kcal,protein:n.per100g.protein,fat:n.per100g.fat,carbs:n.per100g.carbs,useCount:r?.count??0,lastUsedAt:r?Math.round(r.lastUsed):null,isFavorite:!1,createdAt:Math.round(e.createdAt.get(n.id)??t),bundled:!1,dishWeight:n.dishWeight}}),portions:a.flatMap(e=>e.portions.map(t=>({foodId:e.id,unit:ln.indexOf(t.unit),grams:t.grams}))),dishIngredients:n.map(e=>({dishId:e.dishId,position:e.position,foodId:e.foodId,name:e.name,unit:ln.indexOf(e.unit),unitAmount:e.unitAmount,grams:e.grams,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs})),entries:e.entries.map(e=>({id:e.id,dayKey:e.dayKey,loggedAt:Math.round(e.loggedAt),foodId:e.foodId,name:e.name,grams:e.grams,unit:ln.indexOf(e.unit),unitAmount:e.unitAmount,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs,counted:e.counted})),profile:{id:1,heightCm:e.profile.heightCm,weightKg:e.profile.weightKg,sex:un.indexOf(e.profile.sex),birthYear:e.profile.birthYear,targetKcal:e.profile.targetKcal,targetProtein:e.profile.targetProtein,targetFat:e.profile.targetFat,targetCarbs:e.profile.targetCarbs,localeOverride:null,onboardingDone:!1}}}function _n(e){return JSON.stringify(e,(e,t)=>Jt(t)?Object.fromEntries(Object.entries(t).sort(([e],[t])=>e<t?-1:1)):t,2)}var vn=class{term;amount;unit;explicitUnit;constructor(e,t=null,n=null,r=!1){this.term=e,this.amount=t,this.unit=n,this.explicitUnit=r}get hasAmount(){return(this.amount??0)>0}},yn=(()=>{let e=new Map,t=(t,...n)=>n.forEach(n=>e.set(n,t));return t(`gram`,`г`,`гр`,`грамм`,`грамма`,`граммов`,`g`,`gr`,`gram`,`grams`),t(`ml`,`мл`,`ml`),t(`piece`,`шт`,`штук`,`штуки`,`штука`,`pc`,`pcs`,`piece`,`pieces`),t(`pack`,`пачка`,`пачки`,`пачек`,`пач`,`pack`,`packs`),t(`spoon`,`ложка`,`ложки`,`ложек`,`стл`,`tbsp`,`стложка`,`стложки`,`стложек`),t(`teaspoon`,`чл`,`tsp`,`чложка`,`чложки`,`чложек`),t(`slice`,`ломтик`,`ломтика`,`ломтиков`,`slice`,`slices`),t(`cup`,`стакан`,`стакана`,`стаканов`,`cup`,`cups`),t(`portion`,`порция`,`порции`,`порций`,`portion`,`portions`),e})(),bn=/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*([a-zA-Zа-яёА-ЯЁ]*(?:\.\s*[a-zA-Zа-яёА-ЯЁ]+)?)\.?\s*$/u;function xn(e){let t=be(e),n=bn.exec(t);if(!n)return new vn(t);let r=P(n[1]),i=Qt(n[2]);if(!r||i===null||!(i>0))return new vn(t);let a=Array.from(n[3].toLowerCase()).filter(e=>e!==`.`&&!he(e)).join(``),o=a===``?`gram`:yn.get(a);return o===void 0?new vn(t):new vn(r,i,o,a!==``)}var Sn=class{food;unit;amount;label;text;constructor(e,t,n,r,i){this.food=e,this.unit=t,this.amount=n,this.label=r,this.text=i}get grams(){return this.unit===`gram`?this.amount:this.amount*(this.food.portion(this.unit)?.grams??1)}},Cn=[`portion`,`piece`,`pack`,`slice`,`cup`,`spoon`,`teaspoon`],wn=class{text;parsed;key;constructor(e){this.text=Se(e.normalize(`NFC`)),this.parsed=xn(this.text),this.key=new Le(this.parsed.hasAmount?this.parsed.term:this.text,this.parsed.hasAmount||this.text.endsWith(` `))}};function Tn(e,t,n,r,i,a){let o=n===`en`?`en`:`ru`,s=t.text,c=t.parsed,l=t.key.text,u=e.food,d=e.phrase||e.key.name===u.name(a)?Fn(e.key.name,l):null,f=e.phrase?e.key.name:u.name(n);(i||a!==n)&&(d=null);let p=!1;d!==null&&d!==``&&Oe(d).every(e=>Me.has(e))&&(d=``,p=!0);let m=t.key.words[t.key.words.length-1],h;if(h=d!==null&&!p?e.key.name:p||e.tier<=1&&!i&&m!==void 0&&Re(e.key,m)?An(P(l)):f,c.hasAmount&&c.amount!==null){let e=c.amount,t=c.explicitUnit,n=t?c.unit??`gram`:jn(u,e);if(n!==`gram`&&u.portion(n)===void 0)return null;let r=`${f} ${rn(e,n,o)}`,i;return i=d===null||d!==``?r:t?s:`${xe(s)} ${Pn(e,n,o)}`,new Sn(u,n,e,h,i)}let[g,_]=r(u.id)??Nn(u),v=rn(_,g,o),y;return y=d===null?`${f} ${v}`:s.endsWith(` `)&&d===``?`${s}${v}`:`${s}${d} ${v}`,new Sn(u,g,_,h,y)}function En(e,t){let n=Ae(e.text),r=n===null?null:F(n.toLowerCase()),i=new Map;t.history.forEach((e,t)=>{i.has(e.id)||i.set(e.id,t)});let a=new Set,o=[];for(let n of[...t.history,...t.candidates]){if(a.has(n.id))continue;a.add(n.id);let s=i.get(n.id),c=Dn(n,e,{matchLang:t.matchLang,preferred:r,phrases:t.phrases?.get(n.id)??[],logged:s===void 0?null:{count:t.usage.get(n.id)?.count??1,recency:s},pinned:n.id===t.prefer});c&&o.push(c)}return On(o)}function Dn(e,t,n){let r=n.preferred!==null&&e.ruKey?.folded===n.preferred,i=[...(n.phrases??[]).map(e=>[e,!0]),...e.keys(n.matchLang).map(e=>[e,!1])],a=null;for(let[e,n]of i){let r=He(e,t);r!==null&&(a===null||r<a[2])&&(a=[e,n,r])}if(a===null)return null;let[o,s,c]=a;if(!s&&!r&&(e.source===`starter`||e.source===`usda`))for(let e of o.cooking){if(t.cooking.has(e))continue;let n=Ne[e].map(M);if(!(t.spellings[t.spellings.length-1]?.some(e=>!t.lastComplete&&n.some(t=>we(t,e)))??!1))return null}return{food:e,key:o,phrase:s,tier:c,relevance:kn(e,o,t,c,r,n.logged!==null),logged:n.logged,pinned:n.pinned??!1}}function On(e){let t=e.map((e,t)=>({element:e,offset:t})).filter(({element:e})=>e.logged===null&&!e.pinned).sort((e,t)=>e.element.relevance===t.element.relevance?e.offset-t.offset:t.element.relevance-e.element.relevance).map(({element:e})=>e),n=e.map((e,t)=>({h:e,i:t})).filter(({h:e})=>e.logged!==null||e.pinned).map(({h:e,i:n})=>{let r=e.logged??{count:1,recency:0},i=e.relevance+(r.count>=2?.95:.65),a=t.findIndex(e=>e.relevance<=i);return{slot:e.pinned?0:a<0?t.length:a,key:[+!e.pinned,e.tier,r.count>=2?0:1,r.recency,n],item:e}}).sort((e,t)=>e.slot===t.slot?Ee(e.key,t.key):e.slot-t.slot),r=[],i=0;return t.forEach((e,t)=>{for(;i<n.length&&n[i].slot<=t;)r.push(n[i++].item);r.push(e)}),r.concat(n.slice(i).map(e=>e.item))}function kn(e,t,n,r,i,a){let o=n.words,s=t.matchWords,c=[1,.85,.6][Math.min(r,2)],l=o[o.length-1];if(r===0&&!n.lastComplete&&l!==void 0&&!s.includes(l)){let e=s.find(e=>e.startsWith(l));e!==void 0&&(c=.7+.3*N(l)/N(e))}let u=!a&&i,d=c;return u||(d-=.3*Math.max(s.length-o.length,0)),s.length>=o.length&&o.every((e,t)=>e===s[t]||!n.lastComplete&&t===o.length-1&&s[t].startsWith(e))&&(d+=.1),u&&(d+=.3),e.source===`user`&&Be(t.folded,n.folded)&&(d+=.5),!a&&(e.source===`off`||e.source===`vkusvill`)&&!Be(t.folded,n.folded)&&!(e.brandKey?.chars.some(e=>n.spellings.some(t=>t.some(t=>Te(e,t)||tt(e,t))))??!1)&&--d,d+e.relevanceWeight}function An(e){let[t,...n]=M(e);return t===void 0?e:t.toUpperCase()+n.join(``)}function jn(e,t){let n={pack:2,cup:3},r=Cn.find(t=>e.portion(t)!==void 0);return t<=12&&r!==void 0&&t<=(n[r]??12)?r:e.portion(`ml`)!==void 0&&e.portion(`gram`)===void 0?`ml`:`gram`}function Mn(e,t){let n=xn(e);if(!n.hasAmount||n.amount===null)return null;let r=n.explicitUnit?n.unit??`gram`:jn(t,n.amount);return r===`gram`||t.portion(r)!==void 0?[r,n.amount]:null}function Nn(e){let t=Cn.find(t=>e.portion(t)!==void 0);return t===void 0?e.portion(`ml`)===void 0?[`gram`,100]:[`ml`,250]:[t,1]}function Pn(e,t,n){let r=rn(e,t,n);return r.slice(r.indexOf(` `)+1)}function Fn(e,t){let n=M(e.normalize(`NFC`)),r=M(xe(t.normalize(`NFC`))),i=0,a=0;for(;a<r.length;){if(i>=n.length)return null;let e=F(n[i].toLowerCase()),t=F(r[a].toLowerCase());if(e===t)i++,a++;else if(e===`,`)i++;else if(t===`,`)a++;else return null}let o=n.slice(i);if(t.endsWith(` `)){let e=0;for(;e<o.length&&(o[e]===`,`||he(o[e]));)e++;o=o.slice(e)}return o.join(``)}function In(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID().toUpperCase();let e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`.toUpperCase()}var Ln=(e,t=L())=>`${e.name} ${rn(e.amount,e.unit,t)}`,Rn=e=>({foodId:e.food.id,name:e.label,unit:e.unit,amount:e.amount,grams:e.grams,nutrition:e.food.per100g.forGrams(e.grams)}),zn=e=>({foodId:e.foodId,name:e.name,unit:e.unit,amount:e.unitAmount,grams:e.grams,nutrition:new I(e.kcal,e.protein,e.fat,e.carbs)}),Bn=(e,t,n)=>({dishId:t,position:n,foodId:e.foodId,name:e.name,unit:e.unit,unitAmount:e.amount,grams:e.grams,kcal:e.nutrition.kcal,protein:e.nutrition.protein,fat:e.nutrition.fat,carbs:e.nutrition.carbs}),Vn=class{total;rawWeight;weight;servings;constructor(e,t,n,r){this.total=e,this.rawWeight=t,this.weight=n,this.servings=r}get per100g(){return this.weight<=0?I.zero:this.total.scaled(100/this.weight)}get servingGrams(){return this.servings<=0?this.weight:this.weight/this.servings}};function Hn(e,t=null,n=1){let r=e.reduce((e,t)=>e.plus(t.nutrition),I.zero),i=e.reduce((e,t)=>e+t.grams,0);return new Vn(r,i,t!==null&&t>0?t:i,Math.max(n,1))}function Un(e,t,n){return Wn({name:t,nutrition:n.per100g,portionGrams:n.servingGrams,id:e,dishWeight:n.weight})}function Wn(e){return new pt({id:e.id??`user:${In()}`,source:`user`,nameRu:An(be(e.name)),nameEn:null,externalId:e.barcode??null,per100g:e.nutrition,portions:(e.portionGrams??0)>0?[{unit:`portion`,grams:e.portionGrams}]:[],dishWeight:e.dishWeight??null})}var Gn=e=>new I(e.kcal,e.protein,e.fat,e.carbs);function Kn(e,t=L()){return e.unitAmount>0?`${e.name} ${rn(e.unitAmount,e.unit,t)}`:e.name}var qn=6e3,Jn=`Krug/0.1 (web; https://novanikita.github.io/krug-web)`,Yn=class extends Error{constructor(){super(`rate limited`)}},Xn=class{perMinute;times=[];pausedUntil=0;constructor(e){this.perMinute=e}take(e=Date.now()){if(this.times=this.times.filter(t=>e-t<6e4),e<this.pausedUntil||this.times.length>=this.perMinute)throw new Yn;return this.times.push(e),()=>{let t=this.times.indexOf(e);t>=0&&this.times.splice(t,1)}}pause(e=Date.now()){this.pausedUntil=e+6e4}},Zn=`code,product_name,product_name_ru,product_name_en,brands,nutriments,serving_quantity,product_quantity`,Qn=class e{fetcher;searches=new Xn(8);reads=new Xn(12);constructor(e=(...e)=>fetch(...e)){this.fetcher=e}async search(t,n=`ru`,r=20){let i=new URL(`https://world.openfoodfacts.org/cgi/search.pl`);i.search=new URLSearchParams({search_terms:t,search_simple:`1`,action:`process`,json:`1`,page_size:String(r),lc:n,fields:Zn}).toString();let a=await this.get(i,this.searches);return a===null?[]:e.parseSearch(a)}async byBarcode(t){let n=new URL(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(t)}.json`);n.search=new URLSearchParams({fields:Zn}).toString();let r=await this.get(n,this.reads);return r===null?null:e.parseProduct(r)}async get(e,t){let n=t.take(),r;try{r=await this.fetcher(e,{headers:{"X-User-Agent":Jn},signal:AbortSignal.timeout(qn)})}catch(e){throw $n(e)&&n(),e}if(r.status===429||r.status===503)throw t.pause(),new Yn;return r.status===200?r.text():null}static parseSearch(t){let n=nr(t);return(Jt(n)&&Array.isArray(n.products)?n.products:[]).filter(Jt).flatMap(t=>{let n=e.toFood(t);return n?[n]:[]})}static parseProduct(t){let n=nr(t);return Jt(n)&&Jt(n.product)?e.toFood(n.product):null}static toFood(e){let t=Jt(e.nutriments)?e.nutriments:{},n=rr(t.energy_100g),r=rr(t[`energy-kcal_100g`])??(n===null?null:n/4.184),i=e.code===void 0||e.code===null?``:String(e.code);if(r===null||i===``)return null;let a=t=>{let n=e[t];return(typeof n==`string`?tr(n.trim()):null)||null},o=a(`product_name_ru`),s=a(`product_name_en`),c=a(`product_name`);if((o??s??c)===null)return null;let l=new I(r,rr(t.proteins_100g)??0,rr(t.fat_100g)??0,rr(t.carbohydrates_100g)??0);if(!l.isPossiblePer100g)return null;let u=[],d=Xt(rr(e.serving_quantity));d!==null&&d>0&&u.push({unit:`portion`,grams:d});let f=Xt(rr(e.product_quantity));f!==null&&f>0&&u.push({unit:`pack`,grams:f});let p=typeof e.brands==`string`?e.brands.split(`,`).find(e=>e!==``)?.trim()??null:null;return new pt({id:`off:${i}`,source:`off`,nameRu:o,nameEn:s??c,brand:tr(p),externalId:i,per100g:l,portions:u,rare:!Ct.isCaredFor(o??s??c,p)})}};function $n(e){return e instanceof TypeError||e instanceof DOMException&&(e.name===`TimeoutError`||e.name===`AbortError`)}var er=[[`&quot;`,`"`],[`&amp;`,`&`],[`&apos;`,`'`],[`&#39;`,`'`],[`&lt;`,`<`],[`&gt;`,`>`],[`&nbsp;`,` `]];function tr(e){if(!e)return e;let t=e;for(let[e,n]of er)t=t.replaceAll(e,n);return t}function nr(e){try{return JSON.parse(e)}catch{return null}}function rr(e){return typeof e==`number`?e:typeof e==`string`?Zt(e):null}var ir=[`и`,`and`];function ar(e){let t=M(e.normalize(`NFC`)),n=[],r=0,i=0,a=(e,n)=>t.slice(e,n).join(``),o=(e,t)=>{n.push(a(r,e)),r=t,i=t},s=e=>xn(a(r,e)).hasAmount,c=e=>e<t.length&&he(t[e]),l=e=>{if(e===0||!c(e-1))return null;for(let n of ir){let r=e+n.length;if(r<=t.length&&a(e,r).toLowerCase()===n&&c(r))return r}return null};for(;i<t.length;){let e=t[i],n=i+1;if(ge(e)||e===`;`||(e===`,`||e===`+`)&&!(e===`,`&&i>0&&ve(t[i-1])&&n<t.length&&ve(t[n]))&&s(i)){o(i,n);continue}let r=l(i);r!==null&&s(i)?o(i,r):i=n}let u=r;for(;u<t.length&&he(t[u]);)u++;let d=a(u,t.length);return n.push(d),{foods:n.map(e=>e.trim()).filter(e=>M(e).some(_e)),tail:d}}var or=class e{_entries=[];_usage=new Map;_profile=Object.freeze(Ot());_ownIds=[];lang=L();catalog;db;off;phrasesCache=null;listeners=new Set;quiet=0;_version=0;static cachePerQuery=10;static clearMargin=.15;static clearFloor=.79;constructor(e){this.db=e.db??It.inMemory(),this.catalog=e.catalog,this.off=e.off??new Qn,this.catalog.add(this.db.foods()),this.reload()}reload(){this._entries=this.db.entries().map(e=>Object.freeze(e)),this._usage=this.db.usage(),this._profile=Object.freeze(this.db.profile()),this._ownIds=this.db.ownFoodIds()}get persistent(){return this.db.persistent}flushed(){return this.db.flushed()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}get version(){return this._version}changed(){if(this._version++,this.phrasesCache=null,this.quiet===0)for(let e of this.listeners)e()}together(e){this.quiet++;try{return e()}finally{this.quiet--,this.changed()}}get entries(){return this._entries}get usage(){return this._usage}get profile(){return this._profile}get ownFoods(){return this._ownIds.flatMap(e=>this.catalog.food(e)??[])}get loggedDays(){return[...new Set(this._entries.map(e=>e.dayKey))].sort().reverse()}ingredients(e){return this.db.ingredients(e)}entriesOn(e){return this._entries.filter(t=>t.dayKey===e).sort((e,t)=>e.loggedAt-t.loggedAt)}summary(e,t,n=new Date){let r=Ht(n),i=this._entries.filter(n=>n.counted&&Wt(n.dayKey,e)&&(!t||n.dayKey<=r)),a=i.reduce((e,t)=>e.plus(Gn(t)),I.zero);if(!t)return a;let o=new Set(i.map(e=>e.dayKey)).size;return o===0?I.zero:a.scaled(1/o)}get phrases(){if(this.phrasesCache)return this.phrasesCache;let e=new Map,t=new Set;for(let n of[...this._entries].sort((e,t)=>t.loggedAt-e.loggedAt)){if(n.foodId===null)continue;let r=this.catalog.food(n.foodId);if(!r)continue;let i=P(n.name),a=`${n.foodId}\n${i.toLowerCase()}`;i&&i!==r.nameRu&&i!==r.nameEn&&!t.has(a)&&(t.add(a),e.set(n.foodId,[...e.get(n.foodId)??[],new je(i)]))}return this.phrasesCache=e,e}history(e=300){return[...this._usage].sort(([,e],[,t])=>t.lastUsed-e.lastUsed).slice(0,e).flatMap(([e])=>this.catalog.food(e)??[])}lastAmount(e){let t=null;for(let n of this._entries)n.foodId===e&&(t===null||n.loggedAt>t.loggedAt)&&(t=n);return t?[t.unit,t.unitAmount]:null}guess(e,t={}){return this.lookup(e,t.remote??[],t.prefer??null,0).guess}candidates(e,t={}){return this.lookup(e,t.remote??[],null,t.limit??8).candidates}guessAndCandidates(e,t={}){let n=this.lookup(e,t.remote??[],t.prefer??null,t.limit??8);return{guess:n.guess,candidates:n.candidates}}clearGuess(e,t={}){let n=this.lookup(e,t.remote??[],null,0);return n.clear?n.guess:null}lookup(e,t,n,r){if(xn(e).term===``)return{guess:null,candidates:[],clear:!1};let i=this.history(),a=n===null?void 0:this.catalog.food(n);a&&!i.some(e=>e.id===n)&&(i=[a,...i]);let o=[],s=null,c=this.pools(e,t),l=this.phrases;for(let[e,t]of c.entries()){o=t.canonical?t.items:[...o,...t.items];let a=new wn(t.query),u=t.canonical?`ru`:this.lang,d=En(a.key,{history:i,candidates:o,usage:this._usage,matchLang:u,prefer:n,phrases:l});if(d.length===0)continue;let f=Tn(d[0],a,this.lang,e=>this.lastAmount(e),t.canonical,u),p=new Set,m=[];for(let e of d){if(m.length>=r)break;let t=e.food.name(this.lang).toLowerCase();p.has(t)||(p.add(t),m.push(e.food))}let h=new Set(o.map(e=>e.id)),g={guess:f,candidates:m,clear:e===0&&this.isClear(d)};if(e===c.length-1||d.some(e=>h.has(e.food.id)))return g;s??=g}return s??{guess:null,candidates:[],clear:!1}}isClear(t){let n=t[0];if(!n||n.tier>=2)return!1;if(n.logged!==null||n.pinned)return!0;if(n.relevance<e.clearFloor)return!1;let r=t.slice(1).filter(e=>e.logged===null);if(r.some(t=>t.tier<n.tier&&n.relevance-t.relevance<e.clearMargin+.3))return!1;let i=e=>{let t=new Set(e.key.matchWords),r=new Set(n.key.matchWords);return t.size===r.size&&[...t].every(e=>r.has(e))},a=r.find(e=>!i(e));return!a||n.relevance-a.relevance>=e.clearMargin}pools(e,t){let n=xn(e).term;if(n===``)return[];let r=(e,t=this.lang)=>this.catalog.search(e,{limit:60,usage:this._usage,lang:t}),i=r(n),a=new Set(i.map(e=>e.id)),o=[{query:e,items:[...i,...t.filter(e=>!a.has(e.id))],canonical:!1}],s=Oe(n)[0];s!==void 0&&N(s)>=4&&o.push({query:e,items:r(M(s).slice(0,3).join(``)),canonical:!1});let c=this.lang===`ru`?st(e):null;return c!==null&&o.push({query:c,items:r(xn(c).term,`ru`),canonical:!0}),o}async searchOnline(t){try{let n=await this.off.search(t),r=n.filter(e=>!this.catalog.food(e.id));return this.remember(r.slice(0,e.cachePerQuery)),{term:t,items:n,offline:!1}}catch(e){return{term:t,items:[],offline:$n(e),limited:e instanceof Yn}}}async lookupBarcode(e){let t=this.catalog.foodByBarcode(e);if(t)return{food:t,offline:!1};try{let t=await this.off.byBarcode(e);return t?(this.catalog.add([t],!0),this.db.save([t],!0),{food:t,offline:!1}):{food:null,offline:!1}}catch(e){return{food:null,offline:$n(e)||e instanceof Yn}}}remember(e){e.length!==0&&(this.catalog.add(e),this.db.save(e,!1))}saveOwn(e){this.catalog.add([e],!0),this.db.save([e],!0),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}saveDish(e,t){this.catalog.add([e],!0),this.db.saveDish(e,t.map((t,n)=>Bn(t,e.id,n))),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}deleteOwn(e){let t=this.db.deleteFood(e.id);return t?(this.catalog.remove(e.id),this._ownIds=this._ownIds.filter(t=>t!==e.id),this._entries=this._entries.map(t=>t.foodId===e.id?Object.freeze({...t,foodId:null}):t),this.changed(),t):null}restoreFood(e){this.db.restoreFood(e),this.catalog.add([e.food]),this._ownIds=this.db.ownFoodIds();let t=new Set(e.entryIds);this._entries=this._entries.map(n=>t.has(n.id)?Object.freeze({...n,foodId:e.food.id}):n),this.changed()}log(e,t,n,r,i={}){let a=i.now??new Date,o=i.replacing??null;this.catalog.food(e.id)||this.remember([e]);let s=t===`gram`?n:n*(e.portion(t)?.grams??1),c=e.per100g.forGrams(s);if(this.put({id:o?.id??In(),dayKey:o?.dayKey??r,loggedAt:i.at??this.loggedAt(r,o,a),foodId:e.id,name:i.name??e.name(this.lang),grams:s,unit:t,unitAmount:n,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs,counted:!0},o),o?.foodId!==e.id){let t={...this._usage.get(e.id)??{count:0,lastUsed:a.getTime()}};t.count+=1,t.lastUsed=a.getTime(),this._usage.set(e.id,t),this.db.saveUsage(t,e.id)}this.changed()}logSuggestion(e,t,n={}){this.log(e.food,e.unit,e.amount,t,{name:e.label,replacing:n.replacing,now:n.now})}logUncounted(e,t,n={}){let r=n.replacing??null,i=xn(e);!i.explicitUnit&&i.amount!==null&&i.amount<=12&&(i=new vn(be(e)));let a=i.amount??0,o=i.unit??`gram`;this.put({id:r?.id??In(),dayKey:r?.dayKey??t,loggedAt:n.at??this.loggedAt(t,r,n.now??new Date),foodId:null,name:An(i.term),grams:o===`gram`||o===`ml`?a:0,unit:o,unitAmount:a,kcal:0,protein:0,fat:0,carbs:0,counted:!1},r),this.changed()}logLine(e,t,n={}){let r=n.now??new Date,i=ar(e).foods,a=this.loggedAt(t,n.replacing??null,r);return this.together(()=>i.forEach((e,o)=>{let s=o===i.length-1,c=a+o,l=o===0?n.replacing??null:null,u=s?n.picked??null:null,d=u?Mn(e,u):null;if(u&&d){this.log(u,d[0],d[1],t,{replacing:l,now:r,at:c});return}let f=s?this.guess(e,{remote:n.remote,prefer:i.length===1?n.prefer:null}):this.clearGuess(e);f?this.log(f.food,f.unit,f.amount,t,{name:f.label,replacing:l,now:r,at:c}):this.logUncounted(e,t,{replacing:l,now:r,at:c})})),i.length}loggedAt(e,t,n){if(t)return t.loggedAt;if(e===Ht(n))return n.getTime();let r=V(e);return r.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),r.getTime()}put(e,t){let n=t?this._entries.findIndex(e=>e.id===t.id):-1,r=Object.freeze(e);this._entries=n>=0?this._entries.map((e,t)=>t===n?r:e):[...this._entries,r],this.db.saveEntry(e)}updateProfile(e){let t={...this._profile};e(t),!At(t,this._profile)&&(this._profile=Object.freeze(t),this.db.saveProfile(t),this.changed())}backupDocument(e=new Date){return gn({entries:this._entries,ownFoods:this.ownFoods,ingredientsOf:e=>this.ingredients(e),food:e=>this.catalog.food(e),usage:this._usage,createdAt:this.db.ownCreatedAt(),profile:this._profile,now:e})}importBackup(e){let t=typeof e==`string`?hn(e):e,n=t.foods.filter(e=>!this.catalog.food(e.id)),r=new Set(n.map(e=>e.id)),i=e=>e!==null&&(r.has(e)||this.catalog.food(e))?e:null,a=this.db.importBackup({foods:n,createdAt:t.createdAt,ingredients:t.ingredients.map(e=>({...e,foodId:i(e.foodId)})),entries:t.entries.map(e=>({...e,foodId:i(e.foodId)})),usage:new Map([...t.usage].filter(([e])=>i(e)!==null)),profile:t.profile});return this.catalog.add(n),this.reload(),this.changed(),a}restoreBackup(e){if(!this.persistent)return{message:R(`Дневник сейчас не сохраняется — перенос не выполнен. Перезапустите приложение и попробуйте снова`),done:!1};try{let t=this.importBackup(e);return{message:t.entries===0&&t.foods===0?R(`Всё из этой копии уже есть в дневнике`):R(`Добавлено записей: %lld, продуктов: %lld`,[t.entries,t.foods]),done:!0}}catch(e){return e instanceof dn&&e.kind===`tooNew`?{message:R(`Эта копия сделана более новой версией Круга — обновите приложение`),done:!1}:e instanceof dn?{message:R(`Это не файл резервной копии Круга`),done:!1}:{message:R(`Не получилось — попробуйте ещё раз`),done:!1}}}delete(e){this._entries=this._entries.filter(t=>t.id!==e.id),this.db.deleteEntry(e.id),this.changed()}restoreEntry(e){this._entries.some(t=>t.id===e.id)||(this._entries=[...this._entries,Object.freeze({...e})],this.db.saveEntry(e),this.changed())}},sr=1,cr=[`food`,`usage`,`entry`,`dishIngredient`,`profile`,`meta`];async function lr(e=`krug`,t=()=>{}){try{let n=await dr(e);return new It(await fr(n),new ur(e,n,t))}catch(e){return t(e),It.inMemory()}}var ur=class{name;onError;pending=Promise.resolve();connection;constructor(e,t,n){this.name=e,this.onError=n,this.connection=this.watch(t)}write(e){this.pending=this.pending.then(()=>this.apply(e).catch(this.onError))}flushed(){return this.pending}async apply(e){try{await this.transact(await this.db(),e)}catch(t){if(!(t instanceof DOMException&&(t.name===`InvalidStateError`||t.name===`UnknownError`)))throw t;this.connection=null,await this.transact(await this.db(),e)}}async db(){return this.connection??=this.watch(await dr(this.name))}watch(e){return e.onclose=()=>{this.connection===e&&(this.connection=null)},e.onversionchange=()=>{e.close(),this.connection===e&&(this.connection=null)},e}transact(e,t){let n=e.transaction([...new Set(t.map(e=>e.table))],`readwrite`),r=pr(n);try{for(let e of t){let t=n.objectStore(e.table);e.value===void 0?t.delete(e.key):t.put(e.value,e.key)}}catch(e){throw n.abort(),r.catch(()=>{}),e}return r}};function dr(e){return new Promise((t,n)=>{let r=indexedDB.open(e,sr);r.onupgradeneeded=()=>{for(let e of cr)r.result.objectStoreNames.contains(e)||r.result.createObjectStore(e)},r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error),r.onblocked=()=>n(Error(`blocked`))})}async function fr(e){let t=e.transaction(cr,`readonly`),n=e=>new Promise((n,r)=>{let i=t.objectStore(e).getAll();i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)}),r=Mt();return r.food=await n(`food`),r.usage=await n(`usage`),r.entry=await n(`entry`),r.dishIngredient=await n(`dishIngredient`),r.profile=(await n(`profile`))[0]??null,r.meta=(await n(`meta`)).map(e=>[e.key,e.value]),r}function pr(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error??new DOMException(`aborted`,`AbortError`))})}var mr,K,hr,gr,_r=0,vr=[],q=t,yr=q.__b,br=q.__r,xr=q.diffed,Sr=q.__c,Cr=q.unmount,wr=q.__;function Tr(e,t){q.__h&&q.__h(K,e,_r||t),_r=0;var n=K.__H||(K.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return _r=1,Er(Ir,e)}function Er(e,t,n){var r=Tr(mr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ir(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=K,!K.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};K.__f=!0;var a=K.shouldComponentUpdate,o=K.componentWillUpdate;K.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},K.shouldComponentUpdate=i}return r.__N||r.__}function Y(e,t){var n=Tr(mr++,3);!q.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,K.__H.__h.push(n))}function Dr(e,t){var n=Tr(mr++,4);!q.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,K.__h.push(n))}function X(e){return _r=5,Or(function(){return{current:e}},[])}function Or(e,t){var n=Tr(mr++,7);return Fr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function kr(e){var t=K.context[e.__c],n=Tr(mr++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(K)),t.props.value):e.__}function Ar(){for(var e;e=vr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Nr),t.__h.some(Pr),t.__h=[]}catch(n){t.__h=[],q.__e(n,e.__v)}}}q.__b=function(e){K=null,yr&&yr(e)},q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),wr&&wr(e,t)},q.__r=function(e){br&&br(e),mr=0;var t=(K=e.__c).__H;t&&(hr===K?(t.__h=[],K.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(Nr),t.__h.some(Pr),t.__h=[],mr=0)),hr=K},q.diffed=function(e){xr&&xr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vr.push(t)!==1&&gr===q.requestAnimationFrame||((gr=q.requestAnimationFrame)||Mr)(Ar)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),hr=K=null},q.__c=function(e,t){t.some(function(e){try{e.__h.some(Nr),e.__h=e.__h.filter(function(e){return!e.__||Pr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],q.__e(n,e.__v)}}),Sr&&Sr(e,t)},q.unmount=function(e){Cr&&Cr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Nr(e)}catch(e){t=e}}),n.__H=void 0,t&&q.__e(t,n.__v))};var jr=typeof requestAnimationFrame==`function`;function Mr(e){var t,n=function(){clearTimeout(r),jr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);jr&&(t=requestAnimationFrame(n))}function Nr(e){var t=K,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),K=t}function Pr(e){var t=K;e.__c=e.__(),K=t}function Fr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function Ir(e,t){return typeof t==`function`?t(e):t}var Lr=me(null);function Z(){let e=kr(Lr);if(!e)throw Error(`no store`);let[,t]=Er((e,t)=>e+1,0);return Y(()=>e.subscribe(()=>t()),[e]),e}function Rr(e,t,n){let[r,i]=J(()=>{try{let r=localStorage.getItem(e);return n.includes(r)?r:t}catch{return t}});return[r,t=>{i(t);try{localStorage.setItem(e,t)}catch{}}]}function zr(e){let[t,n]=J(()=>matchMedia(e).matches);return Y(()=>{let t=matchMedia(e),r=()=>n(t.matches);return t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var Br=`(min-width: 1024px)`;function Vr(){let[e,t]=J(()=>({online:navigator.onLine,reconnects:0}));return Y(()=>{let e=()=>t(e=>({online:!0,reconnects:e.reconnects+1})),n=()=>t(e=>({...e,online:!1}));return addEventListener(`online`,e),addEventListener(`offline`,n),()=>{removeEventListener(`online`,e),removeEventListener(`offline`,n)}},[]),e}var Hr=0;Array.isArray;function Q(e,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:e,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Hr,__i:-1,__u:0,__source:a,__self:o};if(typeof e==`function`&&(s=e.defaultProps))for(c in s)l[c]===void 0&&(l[c]=s[c]);return t.vnode&&t.vnode(u),u}var $=(e,{size:t=22,label:n},r=!1)=>Q(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:r?`currentColor`:`none`,stroke:r?`none`:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,role:n?`img`:void 0,"aria-label":n,"aria-hidden":!n||void 0,children:e}),Ur=e=>$(Q(`path`,{d:`M4 6h16M4 12h16M4 18h16`}),e),Wr=e=>$(Q(`path`,{"fill-rule":`evenodd`,d:`M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.3 5.3a1 1 0 0 0-1.4 1.4L10.6 12l-3.3 3.3a1 1 0 1 0 1.4 1.4L12 13.4l3.3 3.3a1 1 0 0 0 1.4-1.4L13.4 12l3.3-3.3a1 1 0 0 0-1.4-1.4L12 10.6 8.7 7.3Z`}),e,!0),Gr=e=>$(Q(`path`,{d:`m15 18-6-6 6-6`}),e),Kr=e=>$(Q(`path`,{d:`m9 18 6-6-6-6`}),e),qr=e=>$(Q(`path`,{d:`M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.4-8 5.3 0 .9.7 1.7 1.6 1.7h12.8c.9 0 1.6-.8 1.6-1.7C20 16.4 16.4 14 12 14Z`}),e,!0),Jr=e=>$(Q(`path`,{d:`M4 13.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-6Zm6-5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-11Zm6-4c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v15c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-15Z`}),e,!0),Yr=e=>$(Q(`path`,{d:`M6.5 2h11c.8 0 1.5.7 1.5 1.5v17.3c0 .8-.9 1.3-1.6.8L12 17.8l-5.4 3.8c-.7.5-1.6 0-1.6-.8V3.5C5 2.7 5.7 2 6.5 2Z`}),e,!0),Xr=e=>$(Q(`path`,{d:`M12 5v14M5 12h14`}),e),Zr=e=>$(Q(`path`,{d:`M4 7h16M10 11v6M14 11v6M6 7l1 12.5c.1.8.8 1.5 1.6 1.5h6.8c.8 0 1.5-.7 1.6-1.5L18 7M9 7V4.5c0-.3.2-.5.5-.5h5c.3 0 .5.2.5.5V7`}),e),Qr=e=>$(Q(`path`,{d:`M12 3v12M8 7l4-4 4 4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),$r=e=>$(Q(`path`,{d:`M12 3v12M8 11l4 4 4-4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),ei=[];function ti({options:e,value:t,onChange:n,label:r}){let i=Math.max(0,e.findIndex(e=>e.value===t));return Q(`div`,{class:`pill`,role:`radiogroup`,"aria-label":r,style:{"--count":e.length,"--index":i},children:[Q(`span`,{class:`pill-thumb`,"aria-hidden":`true`}),e.map(e=>Q(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===t,"aria-label":e.name,class:e.value===t?`on`:``,onClick:()=>n(e.value),children:e.text},e.value))]})}function ni(e=4e3){let[t,n]=J([]),r=X();return Y(()=>()=>clearTimeout(r.current),[]),{items:t,add(t){n(e=>[...e,t]),clearTimeout(r.current),r.current=setTimeout(()=>n([]),e)},take(){clearTimeout(r.current);let e=t;return n([]),e}}}function ri({shown:e,onRestore:t}){return e?Q(`div`,{class:`undo`,role:`status`,children:[Q(`span`,{children:R(`Удалено`)}),Q(`button`,{type:`button`,onClick:t,children:R(`Вернуть`)})]}):null}function ii({title:e,onClose:t,closeText:n=R(`Закрыть`),action:r,children:i,dismissible:a=!0}){let o=X(null),s=X({onClose:t,dismissible:a});return s.current={onClose:t,dismissible:a},Y(()=>{let e={};ei.push(e);let t=document.activeElement,n=t=>{t.key===`Escape`&&ei.at(-1)===e&&(t.preventDefault(),s.current.dismissible&&s.current.onClose())};return addEventListener(`keydown`,n),o.current?.contains(document.activeElement)||o.current?.focus(),()=>{ei.splice(ei.indexOf(e),1),removeEventListener(`keydown`,n),t?.focus?.({preventScroll:!0})}},[]),Q(`div`,{class:`sheet-backdrop`,onClick:e=>e.target===e.currentTarget&&a&&t(),children:Q(`div`,{class:`sheet`,role:`dialog`,"aria-modal":`true`,"aria-label":e,ref:o,tabIndex:-1,children:[Q(`div`,{class:`sheet-bar`,children:[Q(`button`,{type:`button`,class:`sheet-close`,onClick:t,children:n}),Q(`h2`,{class:`sheet-title`,children:e}),Q(`div`,{class:`sheet-action`,children:r})]}),Q(`div`,{class:`sheet-body`,children:i})]})})}var ai=e=>e===void 0?``:String(e);function oi({request:e,onSave:t,onClose:n}){let[r,i]=J(e.name),[a,o]=J(ai(e.initial?.kcal)),[s,c]=J(ai(e.initial?.protein)),[l,u]=J(ai(e.initial?.fat)),[d,f]=J(ai(e.initial?.carbs)),[p,m]=J(ai(e.existing?.portion(`portion`)?.grams)),h=X(null),g=X(null),_=r.trim()!==``&&(Qt(a)??-1)>=0;Y(()=>{(e.name?g:h).current?.focus()},[]);let v=()=>{let i=Qt(a);_&&i!==null&&(t(Wn({name:r,nutrition:new I(i,Qt(s)??0,Qt(l)??0,Qt(d)??0),portionGrams:Qt(p),id:e.existing?.id,barcode:e.barcode??null})),n())},y=(e,t,n,r,i)=>Q(`label`,{class:`food-number`,children:[Q(`input`,{ref:i,inputMode:`decimal`,placeholder:`0`,value:e,onInput:e=>t(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()}),Q(`span`,{style:{color:`var(--${r})`},children:n})]});return Q(ii,{title:R(`Свой продукт`),onClose:n,closeText:R(`Отмена`),action:Q(`button`,{type:`button`,class:`sheet-confirm`,disabled:!_,onClick:v,children:R(`Сохранить`)}),children:Q(`div`,{class:`food-form`,children:[e.hint&&Q(`p`,{class:`hint`,children:e.hint}),Q(`textarea`,{ref:h,class:`food-name`,rows:1,placeholder:R(`Название`),"aria-label":R(`Название`),value:r,autocapitalize:`sentences`,onInput:e=>i(e.currentTarget.value.replace(/[\r\n]+/g,` `)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g.current?.focus())}}),Q(`div`,{class:`food-per`,children:R(`на 100 г`)}),Q(`div`,{class:`food-numbers`,children:[y(a,o,R(`Ккал`),`kcalInk`,g),y(s,c,R(`Б`),`proteinInk`),y(l,u,R(`Ж`),`fatInk`),y(d,f,R(`У`),`carbsInk`)]}),Q(`label`,{class:`food-portion`,children:[Q(`span`,{children:R(`Вес порции, г`)}),Q(`input`,{inputMode:`decimal`,placeholder:`—`,value:p,onInput:e=>m(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()})]})]})})}function si(e,t){if(!t||!e)return null;let n=M(t),r=M(e);return t.toLowerCase().startsWith(e.toLowerCase())?n.length>r.length?n.slice(r.length).join(``):null:`${e.endsWith(` `)?``:` `}→ ${t}`}function ci({text:e,onText:t,suggestion:n,onSubmit:r,onGhostTap:i,onFocus:a,onBlur:o,fieldRef:s,placeholder:c=R(`Введите продукт…`),id:l}){let u=si(e,n),d=X(null),f=e=>{e.value.trim()===``?e.blur():r(e.value)};return Q(`div`,{class:`ghost-field`,children:[Q(`div`,{class:`ghost-layer`,"aria-hidden":`true`,children:[Q(`span`,{class:`ghost-typed`,children:e}),u!==null&&Q(`span`,{class:`ghost-rest`,ref:d,children:u}),`​`]}),Q(`textarea`,{ref:e=>{e?.setAttribute(`autocorrect`,`off`),typeof s==`function`?s(e):s&&(s.current=e)},id:l,rows:1,value:e,placeholder:c,"aria-label":c,"aria-description":n?R(`Подсказка: %@`,[n]):void 0,enterkeyhint:`go`,autocomplete:`off`,spellcheck:!1,autocapitalize:`sentences`,onFocus:a,onBlur:o,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),f(e.currentTarget))},onBeforeInput:e=>{(e.inputType===`insertLineBreak`||e.inputType===`insertParagraph`)&&(e.preventDefault(),f(e.currentTarget))},onInput:e=>{let n=e.currentTarget.value;t(/[\r\n]/.test(n)?n.split(/[\r\n]+/).map(e=>e.trim()).filter(Boolean).join(`; `):n)},onClick:e=>{if(!i||!d.current)return;let{clientX:t,clientY:n}=e;[...d.current.getClientRects()].some(e=>t>=e.left-4&&t<=e.right+4&&n>=e.top-4&&n<=e.bottom+4)&&i()}})]})}var li=null,ui=new Set;addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),li=e;for(let e of ui)e()}),addEventListener(`appinstalled`,()=>{li=null;for(let e of ui)e()});var di=e=>(ui.add(e),()=>ui.delete(e));function fi(){return matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}var pi=()=>li!==null;async function mi(){let e=li;if(e){li=null;try{await e.prompt()}catch{}finally{for(let e of ui)e()}}}function hi(){return/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function gi({show:e}){let[t,n]=Rr(`install.dismissed`,`no`,[`no`,`yes`]),[,r]=Er((e,t)=>e+1,0);return Y(()=>di(()=>r()),[]),!e||t===`yes`||fi()||!(pi()||hi())?null:Q(`div`,{class:`banner`,role:`note`,children:[Q(`b`,{children:R(`Добавьте Круг на экран «Домой»`)}),Q(`p`,{children:[R(`Так дневник надёжно хранится на телефоне и открывается как приложение.`),!pi()&&Q(C,{children:[` `,R(`В Safari: «Поделиться» → «На экран „Домой“».`)]})]}),Q(`div`,{class:`banner-actions`,children:[pi()&&Q(`button`,{type:`button`,class:`link strong`,onClick:()=>mi(),children:R(`Установить`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>n(`yes`),children:R(`Не сейчас`)})]})]})}function _i({items:e,onPick:t}){let n=Z();return Q(`div`,{class:`matches`,role:`listbox`,"aria-label":R(`Другие варианты`),children:[e.map(e=>Q(`button`,{type:`button`,role:`option`,"aria-selected":!1,class:`match`,onPointerDown:e=>e.preventDefault(),onClick:()=>t(e),children:[Q(`span`,{class:`match-name`,children:e.name(n.lang)}),e.brand&&Q(`span`,{class:`match-brand`,children:e.brand}),Q(`span`,{class:`match-num`,children:H(e.per100g.kcal)})]},e.id)),e.length===0&&Q(`div`,{class:`status`,children:R(`Других вариантов нет`)})]})}var vi=e=>P(xn(e).term);function yi(e,t){return e?.term===vi(t)?e.items:[]}var bi=600;function xi(e,t){let n=Vr(),r=X(new Map),i=X(new Set),[,a]=Er((e,t)=>e+1,0),[o,s]=J(0),c=vi(t),l=r.current.get(c)??null,u=Or(()=>N(c)>=3&&e.clearGuess(t)===null,[t,e.version])&&!(l&&!l.offline&&!l.limited),d=`${c}\n${n.reconnects}\n${o}`;return Y(()=>{if(!u)return;let t=setTimeout(async()=>{let t=await e.searchOnline(c);r.current.set(c,t),i.current.add(d),t.limited&&setTimeout(()=>s(e=>e+1),6e4),a()},bi);return()=>clearTimeout(t)},[d,u]),{remote:l,searching:u&&!i.current.has(d)}}var Si=[`kcal`,`protein`,`fat`,`carbs`],Ci={kcal:`К`,protein:`Б`,fat:`Ж`,carbs:`У`},wi={kcal:`Калории`,protein:`Белки`,fat:`Жиры`,carbs:`Углеводы`},Ti=e=>R(Ci[e]),Ei=e=>R(wi[e]),Di=e=>`var(--${e}Ink)`,Oi=e=>Si[(Si.indexOf(e)+1)%Si.length];function ki(e,t){return e===`kcal`?H(t.kcal):U(t[e])}function Ai(e,t){let n=(e,t)=>t>0?e/t:0;return[{progress:n(e.kcal,t.kcal),color:`kcal`},{progress:n(e.protein,t.protein),color:`protein`},{progress:n(e.fat,t.fat),color:`fat`},{progress:n(e.carbs,t.carbs),color:`carbs`}]}function ji({children:e}){let t=X(null),n=X(null),[r,i]=J(1);return Dr(()=>{let e=()=>{let e=n.current.offsetWidth;i(e>0?Math.max(.5,Math.min(1,t.current.clientWidth/e)):1)};e();let r=new ResizeObserver(e);return r.observe(t.current),r.observe(n.current),()=>r.disconnect()},[]),Q(`div`,{class:`fit-line`,ref:t,children:Q(`div`,{class:`fit-line-inner`,ref:n,style:{transform:`scale(${r})`},children:e})})}function Mi(e,t,n){let r=n,i=n,a=e-n,o=t-n;if(a<=r||o<=i)return``;let s=Math.min(a-r,o-i)/2;return`M ${(r+a)/2} ${i} L ${a-s} ${i} A ${s} ${s} 0 0 1 ${a-s} ${o} L ${r+s} ${o} A ${s} ${s} 0 0 1 ${r+s} ${i} Z`}function Ni({rings:e,stroke:t=13,gap:n=3,label:r,children:i}){let a=X(null),[o,s]=J({w:0,h:0});Dr(()=>{let e=a.current,t=()=>s({w:e.clientWidth,h:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let c=e.length*(t+n)+4;return Q(`div`,{class:`stadium`,ref:a,role:`img`,"aria-label":r,children:[Q(`svg`,{width:o.w,height:o.h,viewBox:`0 0 ${o.w||1} ${o.h||1}`,"aria-hidden":`true`,children:o.w>0&&e.map((e,r)=>{let i=Mi(o.w,o.h,t/2+r*(t+n)),a=Math.max(0,e.progress),s=Math.min(Math.max(a-1,0),.999),c=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,"stroke-linecap":`round`,children:[Q(`path`,{d:i,stroke:c,class:`ring-track`}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${Math.min(a,1)} 1`,opacity:+(a>0)}}),Q(`path`,{d:i,stroke:`var(--ringShadow)`,pathLength:1,class:`ring-fill ring-tip`,style:{strokeDasharray:`0.012 1`,strokeDashoffset:-s,opacity:+(a>1),filter:`blur(${t*.3}px)`}}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${s} 1`,opacity:+(a>1)}})]},e.color)})}),Q(`div`,{class:`stadium-content`,style:{padding:`${c}px`},children:i})]})}function Pi({rings:e,stroke:t=8,gap:n=3,children:r}){let i=X(null),[a,o]=J(0);Dr(()=>{let e=i.current,t=()=>o(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let s=a/2;return Q(`div`,{class:`activity`,ref:i,children:[Q(`svg`,{width:a,height:a,viewBox:`0 0 ${a||1} ${a||1}`,"aria-hidden":`true`,children:a>0&&e.map((e,r)=>{let i=s-t/2-r*(t+n);if(i<=0)return null;let a=Math.min(Math.max(e.progress,0),1),o=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,children:[Q(`circle`,{cx:s,cy:s,r:i,stroke:o,class:`ring-track`}),Q(`circle`,{cx:s,cy:s,r:i,stroke:o,"stroke-linecap":`round`,pathLength:1,transform:`rotate(-90 ${s} ${s})`,class:`ring-fill ring-fill-circle`,style:{strokeDasharray:`${a} 1`,opacity:+(a>0)}})]},e.color)})}),r&&Q(`div`,{class:`activity-content`,children:r})]})}var Fi=()=>[{value:`day`,text:R(`Д`),name:R(`День`)},{value:`week`,text:R(`Н`),name:R(`Неделя`)},{value:`month`,text:R(`М`),name:R(`Месяц`)}];function Ii({dayKey:e,period:t,onPeriod:n}){let r=Z(),i=t===`day`?r.summary([e,e],!1):r.summary(t===`week`?Kt(e):qt(e),!0),a=`${R(`Калории`)} ${H(i.kcal)}, ${R(`Белки`)} ${U(i.protein)}, ${R(`Жиры`)} ${U(i.fat)}, ${R(`Углеводы`)} ${U(i.carbs)}`;return Q(`section`,{class:`summary`,"aria-label":R(`Сводка`),children:[Q(ti,{options:Fi(),value:t,onChange:n,label:R(`Период`)}),Q(Ni,{rings:Ai(i,kt(r.profile)),label:a,children:Q(`div`,{class:`summary-numbers`,"aria-hidden":`true`,children:[Q(ji,{children:[Q(`span`,{class:`ink-kcal`,children:R(`Ккал`)}),` `,H(i.kcal)]}),Q(ji,{children:[Q(`span`,{class:`ink-protein`,children:R(`Б`)}),` `,U(i.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:R(`Ж`)}),` `,U(i.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:R(`У`)}),` `,U(i.carbs)]})]})})]})}var Li=864e5,Ri=e=>Math.round((V(e).getTime()-Lt(new Date).getTime())/Li);function zi({wide:e,onMenu:t,showDay:n,onDay:r}){let i=Z(),a=i.lang,[o,s]=J(0),[c,l]=J(null),u=Vt(o),d=i.loggedDays.at(-1),f=Math.min(-365,d?Ri(d):0),[p,m]=J(``),[h,g]=J(!1),[_,v]=J(null),[y,b]=Rr(`diary.metric`,`kcal`,Si),[x,S]=J(`day`),C=ni(),[ee,w]=J(!1),[T,E]=J(null),[D,O]=J(0),[te,k]=J(null),[ne,re]=J(!1),ie=X(null),A=ar(p).tail,ae=vi(A),j=()=>ie.current?.focus({preventScroll:!0}),oe=X(null);Y(()=>{let e=oe.current;D&&e&&(e.classList.remove(`missed`),e.offsetWidth,e.classList.add(`missed`))},[D]);let{remote:se,searching:ce}=xi(i,A),{suggestion:le,matches:ue}=Or(()=>{let e=ar(p),t=e.tail;if(t.trim()===``)return{suggestion:null,matches:[]};let n=e.foods.length<=1?_?.foodId??null:null,r=yi(se,t),a=ee?i.guessAndCandidates(t,{remote:r,prefer:n}):{guess:i.guess(t,{remote:r,prefer:n}),candidates:[]},o=p.slice(0,p.length-t.length),s=a.guess,c=s&&(o===``||!(o+s.text).toLowerCase().startsWith(p.toLowerCase())?s.text:o+s.text);return{suggestion:s&&new Sn(s.food,s.unit,s.amount,s.label,c),matches:a.candidates}},[p,se,ee,_,i.version,a]);Y(()=>r(u),[u]),Y(()=>{n&&fe(Ri(n.key))},[n]);let de=X(()=>{});de.current=e=>{e.altKey&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&p===``&&!document.querySelector(`[role=dialog]`)?(e.preventDefault(),pe(e.key===`ArrowLeft`?-1:1)):(document.activeElement===null||document.activeElement===document.body)&&e.key.length===1&&e.key!==` `&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&j()},Y(()=>{if(!e)return;requestAnimationFrame(j);let t=e=>de.current(e);return addEventListener(`keydown`,t),()=>removeEventListener(`keydown`,t)},[e]);function fe(e){let t=Math.min(1,Math.max(f,e));t!==o&&(l(t<o?`back`:`forward`),s(t),v(null),w(!1),_&&m(``))}let pe=e=>fe(o+e);function me(e){let t=e.normalize(`NFC`);m(t),ar(t).tail.trim()===``&&w(!1)}function M(e){let t=ar(e),n=t.tail,r=yi(se,n),a=t.foods.length<=1?_?.foodId??null:null;t.foods.length===0||ce&&vi(n)===ae&&i.guess(n,{remote:r,prefer:a})===null?O(e=>e+1):N(()=>i.logLine(e,u,{replacing:_,remote:r,prefer:_?.foodId??null}))}function N(t){t(),v(null),w(!1),m(``),e?j():ie.current?.blur()}function he(e){w(!1);let t=ar(p).tail;/\p{L}/u.test(t)&&Mn(t,e)!==null?N(()=>i.logLine(p,u,{replacing:_,picked:e})):(m(`${p.slice(0,p.length-t.length)}${e.name(a)} `),j())}function ge(e){e.dayKey===u&&(k(null),v(e),m(Kn(e,a)),j(),w(!e.counted))}function _e(){v(null),m(``),w(!1)}function ve(e){k(null),_?.id===e.id&&_e(),i.delete(e),C.add(e)}function ye(){g(!1),_&&!T&&!e&&_e()}let P=i.entriesOn(u),be=_===null?-1:P.findIndex(e=>e.id===_.id),xe=A.trim()!==``,Se=Q(`div`,{class:`input-line`,ref:oe,style:{order:be>=0?be*2+1:P.length*2},children:[Q(`div`,{class:`input-row`,children:[Q(ci,{fieldRef:ie,text:p,onText:me,suggestion:le?.text??null,onSubmit:M,onGhostTap:()=>w(e=>!e&&A.trim()!==``),onFocus:()=>g(!0),onBlur:ye}),p!==``&&Q(`button`,{type:`button`,class:`input-tool`,"aria-label":R(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>{m(``),w(!1),j()},children:Q(Wr,{})})]}),ee&&Q(_i,{items:ue,onPick:he}),xe&&(ce&&!le?Q(`div`,{class:`status`,children:R(`Ищу…`)}):Q(`div`,{class:`status`,children:[!le&&Q(`div`,{children:se?.limited?R(`Поиск в сети просит подождать минуту — ищу только на этом устройстве`):se?.offline?R(`Нет сети — ищу только на этом устройстве`):R(`Ничего не найдено`)}),Q(`button`,{type:`button`,class:`link`,onPointerDown:e=>e.preventDefault(),onClick:()=>E({name:ae}),children:R(`Не нашли? Добавить новый продукт`)})]}))]});return Q(`div`,{class:`diary${h?` typing`:``}`,children:[Q(`div`,{class:`diary-column`,children:[Q(`header`,{class:`diary-header`,children:[Q(`button`,{type:`button`,class:`header-button`,"aria-label":R(`Меню`),onClick:t,children:Q(Ur,{})}),Q(`div`,{class:`header-day`,children:[e&&Q(`button`,{type:`button`,class:`header-chevron`,"aria-label":R(`Раньше`),onClick:()=>pe(-1),disabled:o<=f,children:Q(Gr,{size:18})}),Q(`button`,{type:`button`,class:`header-title`,onClick:()=>fe(0),children:Ut(u,new Date,a)}),e&&Q(`button`,{type:`button`,class:`header-chevron`,"aria-label":R(`Позже`),onClick:()=>pe(1),disabled:o>=1,children:Q(Kr,{size:18})})]}),Q(`button`,{type:`button`,class:`header-button header-metric`,style:{color:Di(y)},"aria-label":Ei(y),onClick:()=>b(Oi(y)),children:Ti(y)})]}),!i.persistent&&!ne&&Q(`div`,{class:`banner`,role:`alert`,children:[Q(`b`,{children:R(`Дневник не сохраняется`)}),Q(`p`,{children:R(`Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>re(!0),children:R(`Понятно`)})]}),!e&&Q(gi,{show:i.entries.length>0&&!h}),Q(Bi,{day:u,turn:c,swipeable:!h,onSwipe:pe,onTapBelow:()=>{k(null),j()},children:[P.map((e,t)=>Q(Vi,{entry:e,order:t*2,hidden:_?.id===e.id,metric:y,onEdit:ge,onMenu:(t,n)=>k({entry:e,x:t,y:n,at:Date.now()}),onDelete:ve},e.id)),Se]})]}),(e||!h)&&Q(Ii,{dayKey:u,period:x,onPeriod:S}),te&&Q(`div`,{class:`popover-backdrop`,onClick:()=>Date.now()-te.at>400&&k(null),onContextMenu:e=>(e.preventDefault(),k(null)),children:Q(`div`,{class:`popover`,role:`menu`,style:{left:`${te.x}px`,top:`${te.y}px`},onClick:e=>e.stopPropagation(),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>ge(te.entry),children:R(`Изменить`)}),Q(`button`,{type:`button`,role:`menuitem`,class:`danger`,onClick:()=>ve(te.entry),children:R(`Удалить`)})]})}),Q(ri,{shown:C.items.length>0,onRestore:()=>{for(let e of C.take())i.restoreEntry(e)}}),T&&Q(oi,{request:T,onClose:()=>{E(null),j()},onSave:e=>{i.saveOwn(e),he(e)}})]})}function Bi({children:e,day:t,turn:n,swipeable:r,onSwipe:i,onTapBelow:a}){let o=X(null),s=X(null);return Y(()=>{let e=s.current;e&&n&&(e.classList.remove(`turn-back`,`turn-forward`),e.offsetWidth,e.classList.add(`turn-${n}`),e.scrollTop=0)},[t]),Q(`div`,{ref:s,class:`day-page`,onTouchStart:e=>{let t=e.touches[0];o.current=r&&e.touches.length===1?{x:t.clientX,y:t.clientY}:null},onTouchEnd:e=>{let t=o.current;if(o.current=null,!t)return;let n=e.changedTouches[0],r=n.clientX-t.x,a=n.clientY-t.y;Math.abs(r)>60&&Math.abs(r)>Math.abs(a)*1.5&&i(r>0?-1:1)},onClick:e=>{e.target===e.currentTarget&&a()},children:e})}function Vi({entry:e,order:t,hidden:n,metric:r,onEdit:i,onMenu:a,onDelete:o}){let s=Z(),c=X(null),l=()=>{c.current&&clearTimeout(c.current.timer)};return Q(`div`,{class:`entry`,style:{order:t},hidden:n,role:`button`,tabIndex:0,"aria-description":R(`Изменить`),onClick:()=>{c.current?.fired?c.current=null:i(e)},onKeyDown:t=>{t.key===`Enter`&&i(e),(t.key===`Delete`||t.key===`Backspace`)&&o(e)},onContextMenu:e=>{e.preventDefault(),a(e.clientX,e.clientY)},onPointerDown:e=>{if(e.pointerType!==`touch`)return;let{clientX:t,clientY:n}=e;c.current={x:t,y:n,fired:!1,timer:setTimeout(()=>{c.current&&(c.current.fired=!0),a(t,n)},500)}},onPointerMove:e=>{let t=c.current;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>10&&l()},onPointerUp:l,onPointerCancel:l,children:[Q(`span`,{class:`entry-name`,children:Kn(e,s.lang)}),e.counted?Q(`span`,{class:`entry-num`,style:{color:Di(r)},"aria-label":`${Ei(r)} ${ki(r,e)}`,children:ki(r,e)}):Q(`span`,{class:`entry-q`,"aria-label":R(`Не посчитано`),children:`?`})]})}function Hi({onClose:e,onRoute:t,onDay:n,selectedDay:r}){let i=Z(),a=(e,n,r)=>Q(`button`,{type:`button`,class:`row row-link`,onClick:()=>t(r),children:[Q(`span`,{class:`row-icon`,children:n}),e]});return Q(ii,{title:R(`Круг`),onClose:e,children:[Q(`div`,{class:`group`,children:[a(R(`Профиль`),Q(qr,{}),{kind:`profile`}),a(R(`Статистика`),Q(Jr,{}),{kind:`stats`}),a(R(`Мои продукты`),Q(Yr,{}),{kind:`myFoods`})]}),i.loggedDays.length>0&&Q(`div`,{class:`group`,children:i.loggedDays.map(e=>Q(`button`,{type:`button`,class:`row row-link${e===r?` selected`:``}`,onClick:()=>n(e),children:Ut(e,new Date,i.lang)},e))})]})}function Ui(){try{let e=localStorage.getItem(`theme`);return e===`light`||e===`dark`?e:`system`}catch{return`system`}}function Wi(e){let t=document.documentElement;e===`system`?delete t.dataset.theme:t.dataset.theme=e;try{e===`system`?localStorage.removeItem(`theme`):localStorage.setItem(`theme`,e)}catch{}}var Gi=`modulepreload`,Ki=function(e){return`/krug-web/`+e},qi={},Ji=function(e){return e.pathname.endsWith(`.css`)},Yi=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Xi=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ki(t,n);let r=s(t),i=Ji(r);return Yi(qi,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Gi,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function Zi({onClose:e}){let t=Z(),n=t.profile,r=new Date().getFullYear(),[i,a]=J(Ui()),[o,s]=J(null),[c,l]=J(null),u=async e=>{let{legalHTML:t}=await Xi(async()=>{let{legalHTML:e}=await import(`./documents-Co0hBUpq.js`);return{legalHTML:e}},[]);l({doc:e,html:t(e).html})},d=X(null),f=e=>{let t=Qt(e);return t!==null&&Number.isInteger(t)?t:null};function p(){try{let e=new Blob([_n(t.backupDocument())],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`krug-backup-${Ht()}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),6e4)}catch{s(R(`Не получилось — попробуйте ещё раз`))}}async function m(e){if(e)try{s(t.restoreBackup(await e.text()).message)}catch{s(R(`Не получилось — попробуйте ещё раз`))}}return Q(ii,{title:R(`Профиль`),onClose:e,children:[Q(`div`,{class:`group`,children:[Q(Qi,{label:R(`Рост`),stored:n.heightCm===null?``:String(n.heightCm),unit:R(`см`),save:e=>t.updateProfile(t=>t.heightCm=f(e))}),Q(Qi,{label:R(`Вес`),stored:n.weightKg===null?``:on(n.weightKg),unit:R(`кг`),decimal:!0,save:e=>t.updateProfile(t=>t.weightKg=Qt(e))}),Q(Qi,{label:R(`Возраст`),stored:n.birthYear===null?``:String(r-n.birthYear),unit:R(`лет`),save:e=>t.updateProfile(t=>t.birthYear=f(e)===null?null:r-f(e))}),Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Пол`)}),Q(`select`,{value:n.sex,onChange:e=>t.updateProfile(t=>t.sex=e.currentTarget.value),children:[Q(`option`,{value:`unset`,children:R(`Не указан`)}),Q(`option`,{value:`female`,children:R(`Женский`)}),Q(`option`,{value:`male`,children:R(`Мужской`)})]})]})]}),Q(`h3`,{class:`group-title`,children:R(`Цели на день`)}),Q(`div`,{class:`group`,children:[Q(Qi,{label:R(`Калории`),ink:`kcalInk`,stored:String(n.targetKcal),unit:R(`ккал`),save:e=>t.updateProfile(t=>t.targetKcal=f(e)??t.targetKcal)}),Q(Qi,{label:R(`Белки`),ink:`proteinInk`,stored:String(n.targetProtein),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetProtein=f(e)??t.targetProtein)}),Q(Qi,{label:R(`Жиры`),ink:`fatInk`,stored:String(n.targetFat),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetFat=f(e)??t.targetFat)}),Q(Qi,{label:R(`Углеводы`),ink:`carbsInk`,stored:String(n.targetCarbs),unit:R(`г`),save:e=>t.updateProfile(t=>t.targetCarbs=f(e)??t.targetCarbs)})]}),Q(`div`,{class:`group`,children:[Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Тема`)}),Q(`select`,{value:i,onChange:e=>{let t=e.currentTarget.value;a(t),Wi(t)},children:[Q(`option`,{value:`system`,children:R(`Как в системе`)}),Q(`option`,{value:`light`,children:R(`Светлая`)}),Q(`option`,{value:`dark`,children:R(`Тёмная`)})]})]}),Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Язык`)}),Q(`select`,{value:L(),onChange:e=>{try{localStorage.setItem(`language`,e.currentTarget.value)}catch{}location.reload()},children:[Q(`option`,{value:`ru`,children:`Русский`}),Q(`option`,{value:`en`,children:`English`})]})]})]}),Q(`h3`,{class:`group-title`,children:R(`Резервная копия`)}),Q(`div`,{class:`group`,children:[Q(`button`,{type:`button`,class:`row row-link accent`,onClick:p,children:[Q(`span`,{class:`row-icon`,children:Q(Qr,{})}),R(`Сохранить копию`)]}),Q(`button`,{type:`button`,class:`row row-link accent`,onClick:()=>d.current?.click(),children:[Q(`span`,{class:`row-icon`,children:Q($r,{})}),R(`Восстановить из копии`)]}),Q(`input`,{ref:d,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:e=>{m(e.currentTarget.files?.[0]),e.currentTarget.value=``}})]}),Q(`p`,{class:`group-footer`,children:[R(`Дневник хранится в этом браузере`),`. `,R(`Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.`)]}),o&&Q(`p`,{class:`group-footer message`,role:`status`,children:o}),Q(`div`,{class:`legal`,children:[Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`terms`),children:R(`Пользовательское соглашение`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`privacy`),children:R(`Политика конфиденциальности`)}),Q(`p`,{children:R(`Данные о продуктах: Open Food Facts (ODbL), ВкусВилл, USDA FoodData Central`)})]}),c&&Q(ii,{title:c.doc===`terms`?R(`Пользовательское соглашение`):R(`Политика конфиденциальности`),onClose:()=>l(null),children:Q(`div`,{class:`legal-doc`,dangerouslySetInnerHTML:{__html:c.html}})})]})}function Qi({label:e,stored:t,unit:n,decimal:r=!1,ink:i,save:a}){let[o,s]=J(t),[c,l]=J(!1);Y(()=>{c||s(t)},[t,c]);let u=X();return u.current={text:o,editing:c,save:a},Y(()=>()=>{let e=u.current;e?.editing&&e.save(e.text)},[]),Q(`label`,{class:`row`,children:[Q(`span`,{style:i?{color:`var(--${i})`}:void 0,children:e}),Q(`input`,{class:`row-number`,inputMode:r?`decimal`:`numeric`,placeholder:`—`,value:o,onFocus:()=>l(!0),onInput:e=>s(e.currentTarget.value),onBlur:()=>{a(o),l(!1)},onKeyDown:e=>e.key===`Enter`&&e.currentTarget.blur()}),Q(`span`,{class:`row-unit`,children:n})]})}var $i=[`day`,`week`,`month`,`halfYear`,`year`],ea={day:`День`,week:`Неделя`,month:`Месяц`,halfYear:`Полгода`,year:`Год`},ta={day:`ДН`,week:`НЕД`,month:`МЕС`,halfYear:`6 МЕС`,year:`ГОД`},na=(e,t=L())=>R(ea[e],[],t),ra=(e,t=L())=>R(ta[e],[],t);function ia(e,t=0,n=new Date){let r=Lt(n),i=new Date(r.getFullYear(),r.getMonth(),1),a,o;switch(e){case`day`:o=z(r,-t),a=o;break;case`week`:o=z(r,-7*t),a=z(o,-6);break;case`month`:a=Rt(i,-t),o=t===0?r:z(Rt(a,1),-1);break;case`halfYear`:case`year`:{let n=e===`halfYear`?6:12,s=Rt(i,-n*t);a=Rt(s,-(n-1)),o=t===0?r:z(Rt(s,1),-1)}}return[B(a),B(o)]}function aa(e){let t=new Map;for(let n of e)n.counted&&t.set(n.dayKey,(t.get(n.dayKey)??I.zero).plus(Gn(n)));return t}function oa(e){return e.size===0?I.zero:[...e.values()].reduce((e,t)=>e.plus(t),I.zero).scaled(1/e.size)}function sa(e){let t=new Map;for(let[n,r]of e){let e=n.slice(0,7);t.has(e)||t.set(e,new Map),t.get(e).set(n,r)}return new Map([...t].map(([e,t])=>[e,oa(t)]))}function ca(e,t,n=L(),r=new Date){return e===`day`?Ut(t[0],r,n):R(`В среднем за %@`,[la(t,n)],n)}function la([e,t],n=L()){let r=V(e),i=V(t),a=e=>St(n,e),o=a({day:`numeric`,month:`short`,year:`numeric`}),s=a({day:`numeric`,month:`short`}),c=a({month:`short`,year:`numeric`}),l=a({month:`short`});if(e===t)return o.format(i);let u=r.getFullYear()===i.getFullYear(),d=u&&r.getMonth()===i.getMonth(),f=Math.round((i.getTime()-r.getTime())/864e5);return r.getDate()===1&&!d&&f>40?u?`${l.format(r)} – ${c.format(i)}`:`${c.format(r)} – ${c.format(i)}`:d?`${r.getDate()}–${o.format(i)}`:u?`${s.format(r)} – ${o.format(i)}`:`${o.format(r)} – ${o.format(i)}`}function ua({onClose:e}){let t=Z(),n=t.lang,[r,i]=J(`week`),[a,o]=J(0),s=ia(r,a),c=aa(t.entries.filter(e=>Wt(e.dayKey,s))),l=oa(c),u=kt(t.profile),d=X(null),f=e=>o(t=>Math.max(0,t+e)),p=(e,t,n)=>Q(`div`,{class:`tile`,children:[Q(`div`,{class:`tile-label`,children:e}),Q(`div`,{class:`tile-value`,style:{color:`var(--${n})`},children:t})]});return Q(ii,{title:R(`Статистика`),onClose:e,children:Q(`div`,{class:`stats`,onTouchStart:e=>d.current={x:e.touches[0].clientX,y:e.touches[0].clientY},onTouchEnd:e=>{let t=d.current;if(!t)return;let n=e.changedTouches[0].clientX-t.x,r=e.changedTouches[0].clientY-t.y;Math.abs(n)>40&&Math.abs(n)>Math.abs(r)*1.5&&f(n>0?1:-1)},children:[Q(ti,{options:$i.map(e=>({value:e,text:ra(e,n),name:na(e,n)})),value:r,onChange:e=>{i(e),o(0)},label:R(`Период`)}),Q(`div`,{class:`stats-headline`,children:[Q(`div`,{class:`stats-range`,children:[Q(`button`,{type:`button`,"aria-label":R(`Раньше`),onClick:()=>f(1),children:Q(Gr,{size:16})}),Q(`span`,{children:ca(r,s,n)}),Q(`button`,{type:`button`,"aria-label":R(`Позже`),onClick:()=>f(-1),disabled:a===0,children:Q(Kr,{size:16})})]}),Q(`div`,{class:`stats-kcal`,children:[Q(`span`,{class:`stats-kcal-value`,children:H(l.kcal)}),Q(`span`,{class:`stats-kcal-unit`,children:R(`ккал`)})]})]}),Q(`div`,{class:`stats-rings`,children:Q(Pi,{rings:Ai(l,u),stroke:24,gap:5})}),Q(`div`,{class:`tiles`,children:[p(R(`Калории`),H(l.kcal),`kcalInk`),p(R(`Белки`),U(l.protein),`proteinInk`),p(R(`Жиры`),U(l.fat),`fatInk`),p(R(`Углеводы`),U(l.carbs),`carbsInk`)]}),Q(`div`,{class:`stats-days`,children:[r===`week`&&Q(da,{days:c,targets:u,from:V(s[0])}),r===`month`&&Q(fa,{days:c,targets:u,month:V(s[0])}),(r===`halfYear`||r===`year`)&&Q(pa,{days:c,targets:u,from:V(s[0]),to:V(s[1])})]}),c.size===0&&Q(`p`,{class:`stats-empty`,children:R(`Нет записей за этот период`)})]})})}function da({days:e,targets:t,from:n}){let r=St(Z().lang,{weekday:`short`});return Q(`div`,{class:`week-strip`,children:Array.from({length:7},(i,a)=>{let o=z(n,a),s=B(o);return Q(`div`,{class:`week-day`,children:[Q(`span`,{class:`caption`,children:r.format(o)}),Q(Pi,{rings:Ai(e.get(s)??I.zero,t),stroke:3.5,gap:1.5}),Q(`span`,{class:`caption day-number${s===Ht()?` today`:``}`,children:o.getDate()})]},s)})})}function fa({days:e,targets:t,month:n}){let r=Z(),i=new Date(n.getFullYear(),n.getMonth(),1),a=z(Rt(i,1),-1).getDate(),o=(i.getDay()+6)%7,s=new Date,c=i.getFullYear()===s.getFullYear()&&i.getMonth()===s.getMonth()?s.getDate():1/0,l=St(r.lang,{weekday:`narrow`});return Q(`div`,{class:`month-grid`,children:[Array.from({length:7},(e,t)=>Q(`span`,{class:`caption`,children:l.format(z(i,t-o))},`l${t}`)),Array.from({length:o},(e,t)=>Q(`span`,{},`e${t}`)),Array.from({length:a},(n,r)=>{let a=r+1,o=a>c,s=z(i,r);return Q(Pi,{rings:Ai(o?I.zero:e.get(B(s))??I.zero,t),stroke:3,gap:1.5,children:Q(`span`,{class:`caption${a===c?` today`:``}${o?` future`:``}`,children:a})},a)})]})}function pa({days:e,targets:t,from:n,to:r}){let i=Z(),a=sa(e),o=new Date(n.getFullYear(),n.getMonth(),1),s=(r.getFullYear()-o.getFullYear())*12+r.getMonth()-o.getMonth()+1,c=St(i.lang,{month:`short`});return Q(`div`,{class:`months-grid${s>6?` many`:``}`,children:Array.from({length:s},(e,n)=>{let r=Rt(o,n);return Q(`div`,{class:`month`,children:[Q(Pi,{rings:Ai(a.get(B(r).slice(0,7))??I.zero,t),stroke:5,gap:2.5}),Q(`span`,{class:`footnote`,children:c.format(r)})]},n)})})}function ma({dishId:e,onClose:t}){let n=Z(),r=e===null?void 0:n.catalog.food(e),[i,a]=J(()=>r?.name(n.lang)??``),[o,s]=J(()=>e?n.ingredients(e).map(zn):[]),[c,l]=J(()=>{let e=o.reduce((e,t)=>e+t.grams,0);return r?.dishWeight!=null&&Math.abs(r.dishWeight-e)>.5?U(r.dishWeight):``}),[u,d]=J(()=>{let e=r?.portion(`portion`)?.grams;return r?.dishWeight!=null&&e?String(Math.round(r.dishWeight/e)):`1`}),[f,p]=J(``),[m,h]=J(null),[g,_]=J(!1),v=X(null),y=X(null),b=Hn(o,Qt(c),Number.parseInt(u.trim(),10)||1),x=i.trim()!==``&&o.length>0,[S]=J(o),C=o.length!==S.length||o.some((e,t)=>e!==S[t]);Y(()=>{e||v.current?.focus()},[]);let{remote:ee}=xi(n,f),{suggestion:w,matches:T}=Or(()=>{if(f.trim()===``)return{suggestion:null,matches:[]};let e=yi(ee,f);if(g){let t=n.guessAndCandidates(f,{remote:e});return{suggestion:t.guess,matches:t.candidates}}return{suggestion:n.guess(f,{remote:e}),matches:[]}},[f,ee,g,n.entries]);function E(e){let t=n.guess(e,{remote:yi(ee,e)});if(!t)return;let r=Rn(t);s(e=>m!==null&&m<e.length?e.map((e,t)=>t===m?r:e):[...e,r]),h(null),_(!1),p(``),y.current?.focus()}function D(e){h(e),p(Ln(o[e],n.lang)),y.current?.focus()}function O(e){m!==null&&(m===e?(h(null),p(``)):m>e&&h(m-1)),s(t=>t.filter((t,n)=>n!==e))}function te(){x&&(n.saveDish(Un(e??`user:${In()}`,i,b),o),t())}let k=(e,t)=>Q(`span`,{class:t?`macros large`:`macros`,children:[Q(`span`,{class:`ink-kcal`,children:R(`Ккал`)}),` `,H(e.kcal),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-protein`,children:R(`Б`)}),` `,U(e.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:R(`Ж`)}),` `,U(e.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:R(`У`)}),` `,U(e.carbs)]}),ne=b.per100g,re=ne.forGrams(b.servingGrams),ie=m??o.length;return Q(ii,{title:R(`Своё блюдо`),onClose:t,dismissible:!(x&&C),action:Q(`button`,{type:`button`,class:`sheet-confirm`,disabled:!x,onClick:te,children:R(`Сохранить`)}),children:Q(`div`,{class:`dish`,children:[Q(`input`,{ref:v,class:`dish-name`,placeholder:R(`Название блюда`),"aria-label":R(`Название блюда`),value:i,autocapitalize:`sentences`,onInput:e=>a(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&y.current?.focus()}),Q(`h3`,{class:`caption-title`,children:R(`Ингредиенты`)}),Q(`div`,{class:`dish-lines`,children:[o.map((e,t)=>Q(`div`,{class:`entry`,style:{order:t*2},hidden:m===t,role:`button`,tabIndex:0,onClick:()=>D(t),onKeyDown:e=>(e.key===`Delete`||e.key===`Backspace`)&&O(t),children:[Q(`span`,{class:`entry-name`,children:Ln(e,n.lang)}),Q(`span`,{class:`entry-num ink-kcal`,children:H(e.nutrition.kcal)}),Q(`button`,{type:`button`,class:`entry-remove`,"aria-label":R(`Удалить`),onClick:e=>{e.stopPropagation(),O(t)},children:Q(Wr,{size:18})})]},t)),Q(`div`,{class:`input-line`,style:{order:ie*2+(m===null?0:1)},children:[Q(`div`,{class:`input-row`,children:[Q(ci,{fieldRef:y,text:f,onText:e=>{p(e),e.trim()===``&&_(!1)},suggestion:w?.text??null,onSubmit:E,onGhostTap:()=>_(e=>!e&&f.trim()!==``),onBlur:()=>{m!==null&&(h(null),p(``))}}),f!==``&&Q(`button`,{type:`button`,class:`input-tool`,"aria-label":R(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>p(``),children:Q(Wr,{})})]}),g&&Q(_i,{items:T,onPick:e=>{_(!1);let t=xn(f).term,r=P(M(P(f)).slice(M(t).length).join(``));p(`${e.name(n.lang)} ${r}`),y.current?.focus()}})]})]}),o.length===0&&f===``&&Q(`p`,{class:`hint-text`,children:R(`Впишите ингредиент и сколько его пошло — как строку в дневнике: «творог 5% 400», Enter`)}),o.length>0&&Q(`div`,{class:`dish-raw`,children:[Q(`span`,{children:R(`Всего сырого`)}),Q(`span`,{children:R(`%@ г · %@ ккал`,[U(b.rawWeight),H(b.total.kcal)])})]}),Q(`h3`,{class:`caption-title`,children:R(`Готовое блюдо`)}),Q(`div`,{class:`group`,children:[Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Вес после готовки, г`)}),Q(`input`,{class:`row-number`,inputMode:`decimal`,placeholder:U(b.rawWeight),value:c,onInput:e=>l(e.currentTarget.value)})]}),Q(`label`,{class:`row`,children:[Q(`span`,{children:R(`Порций`)}),Q(`input`,{class:`row-number`,inputMode:`numeric`,placeholder:`1`,value:u,onInput:e=>d(e.currentTarget.value)})]})]}),Q(`p`,{class:`group-footer`,children:R(`Суп набирает воду, запеканка теряет: если взвесили готовое — впишите, иначе считаем по сырому.`)}),Q(`div`,{class:`card dish-result`,children:[Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:R(`1 порция`)}),Q(`span`,{children:[U(b.servingGrams),` `,R(`г`)]})]}),k(re,!0),Q(`hr`,{}),Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:R(`на 100 г`)}),k(ne,!1)]})]})]})})}function ha({onClose:e}){let t=Z(),n=t.ownFoods,[r,i]=J(!1),[a,o]=J(null),[s,c]=J(void 0),[l,u]=J(null),d=ni(),f=e=>{if(e.dishWeight!==null){c(e.id);return}let n=e.per100g;o({name:e.name(t.lang),initial:{kcal:n.kcal,protein:n.protein,fat:n.fat,carbs:n.carbs},barcode:e.externalId,existing:e})},p=e=>{u(null);let n=t.deleteOwn(e);n&&d.add(n)};return Q(ii,{title:R(`Мои продукты`),onClose:e,action:Q(`button`,{type:`button`,class:`sheet-icon`,"aria-label":R(`Добавить`),"aria-expanded":r,onClick:()=>i(e=>!e),children:Q(Xr,{})}),children:[r&&Q(`div`,{class:`popover popover-inline`,role:`menu`,children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),o({name:``})},children:R(`Продукт`)}),Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),c(null)},children:R(`Блюдо`)})]}),n.length===0&&Q(`p`,{class:`empty`,children:R(`Здесь будут ваши продукты и блюда`)}),Q(`div`,{class:`list`,children:n.map(e=>Q(`div`,{class:`list-row`,children:[Q(`button`,{type:`button`,class:`list-main`,onClick:()=>f(e),children:[Q(`span`,{children:e.name(t.lang)}),e.dishWeight!==null&&Q(`span`,{class:`tag`,children:R(`блюдо`)}),Q(`span`,{class:`list-value`,children:R(`%@ ккал`,[H(e.per100g.kcal)])})]}),Q(`button`,{type:`button`,class:`list-delete`,"aria-label":R(`Удалить`),onClick:()=>u(e),children:Q(Zr,{size:18})})]},e.id))}),l&&Q(`div`,{class:`confirm`,role:`alertdialog`,"aria-label":R(`Удалить`),children:[Q(`p`,{children:R(`Удалить «%@»? Записи в дневнике останутся.`,[l.name(t.lang)])}),Q(`div`,{class:`confirm-actions`,children:[Q(`button`,{type:`button`,onClick:()=>u(null),children:R(`Отмена`)}),Q(`button`,{type:`button`,class:`danger`,onClick:()=>p(l),children:R(`Удалить`)})]})]}),Q(ri,{shown:d.items.length>0,onRestore:()=>{for(let e of d.take())t.restoreFood(e)}}),a&&Q(oi,{request:a,onClose:()=>o(null),onSave:e=>t.saveOwn(e)}),s!==void 0&&Q(ma,{dishId:s,onClose:()=>c(void 0)})]})}function ga(){let e=zr(Br),[t,n]=J(!1),[r,i]=J(null),[a,o]=J(null),[s,c]=J(``),l=()=>i(null);return Q(C,{children:[Q(zi,{wide:e,onMenu:()=>n(!0),showDay:a,onDay:c}),t&&Q(Hi,{selectedDay:s,onClose:()=>n(!1),onRoute:e=>{n(!1),i(e)},onDay:e=>{n(!1),o({key:e,at:Date.now()})}}),r?.kind===`profile`&&Q(Zi,{onClose:l}),r?.kind===`stats`&&Q(ua,{onClose:l}),r?.kind===`myFoods`&&Q(ha,{onClose:l}),r?.kind===`dish`&&Q(ma,{dishId:r.id,onClose:l})]})}var _a=document.getElementById(`app`);try{let e=localStorage.getItem(`language`);_t(e===`ru`||e===`en`?e:null)}catch{_t(null)}document.documentElement.lang=L(),_a.innerHTML=`<p class="loading">${R(`Загружаю продукты…`)}</p>`;var va=window.visualViewport;if(va){let e=()=>{document.documentElement.style.setProperty(`--vv-height`,`${va.height}px`),document.documentElement.style.setProperty(`--vv-top`,`${va.offsetTop}px`)};va.addEventListener(`resize`,e),va.addEventListener(`scroll`,e),e()}async function ya(){let[e,t,n,r]=await Promise.all([lr(`krug`,e=>console.error(`diary storage:`,e)),Xi(()=>import(`./starter_foods-B_nVsKLz.js`).then(e=>e.default),[]),Xi(()=>import(`./off_ru-C_fWxu5_.js`).then(e=>e.default),[]),Xi(()=>import(`./usda_ru-BcPVADzA.js`).then(e=>e.default),[])]),i=new or({db:e,catalog:Ct.fromBundled({starter:t,off:n,usda:r})});navigator.storage?.persist?.().catch(()=>{}),_a.innerHTML=``,pe(Q(Lr.Provider,{value:i,children:Q(ga,{})}),_a)}ya().catch(e=>{console.error(e),_a.innerHTML=``;let t=document.createElement(`p`);t.className=`loading`,t.textContent=R(`Не получилось — попробуйте ещё раз`);let n=document.createElement(`button`);n.className=`link`,n.textContent=R(`Обновить страницу`),n.onclick=()=>location.reload(),t.append(document.createElement(`br`),n),_a.append(t)});