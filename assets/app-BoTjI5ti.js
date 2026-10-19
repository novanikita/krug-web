import"./modulepreload-polyfill-P2Xu9kJm.js";var e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h={},g=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=Array.isArray;function y(e,t){for(var n in t)e[n]=t[n];return e}function b(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function x(t,n,r){var i,a,o,s={};for(o in n)o==`key`?i=n[o]:o==`ref`?a=n[o]:s[o]=n[o];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):r),typeof t==`function`&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return S(t,s,i,a,null)}function S(e,r,i,a,o){var s={type:e,props:r,key:i,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++n,__i:-1,__u:0};return o==null&&t.vnode!=null&&t.vnode(s),s}function C(e){return e.children}function w(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?T(e):null}function E(e){if(e.__P&&e.__d){var n=e.__v,r=n.__e,i=[],a=[],o=y({},n);o.__v=n.__v+1,t.vnode&&t.vnode(o),ie(e.__P,o,n,e.__n,e.__P.namespaceURI,32&n.__u?[r]:null,i,r??T(n),!!(32&n.__u),a),o.__v=n.__v,o.__.__k[o.__i]=o,oe(i,o,a),n.__e=n.__=null,o.__e!=r&&D(o)}}function D(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),D(e)}function O(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!k.__r++||i!=t.debounceRendering)&&((i=t.debounceRendering)||a)(k)}function k(){try{for(var e,t=1;r.length;)r.length>t&&r.sort(o),e=r.shift(),t=r.length,E(e)}finally{r.length=k.__r=0}}function ee(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,_,v,y=r&&r.__k||g,b=t.length;for(c=A(n,t,y,c,b),d=0;d<b;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&y[p.__i]||h,p.__i=d,v=ie(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&le(f.ref,null,p),u.push(p.ref,p.__c||m,p)),_==null&&m!=null&&(_=m),4&p.__u?(c=j(p,c,e),f.__e&&(f.__e=null)):typeof p.type==`function`&&v!==void 0?c=v:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=_,c}function A(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=S(null,o,null,null,null):v(o)?o=e.__k[a]=S(C,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=S(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=te(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=T(s)),ue(s,s));return r}function j(e,t,n){var r,i;if(typeof e.type==`function`){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=j(r[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=T(e)),t=n.insertBefore(e.__e,t||null));do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function te(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ne(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||_.test(t)?n:n+`px`}function M(e,t,n,r,i){var a,o;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ne(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ne(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(u,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n[l]=r[l]:(n[l]=d,e.addEventListener(t,a?p:f,a)):e.removeEventListener(t,a?p:f,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function re(e){return function(n){if(this.l){var r=this.l[n.type+e];if(n[c]==null)n[c]=d++;else if(n[c]<r[l])return;return r(t.event?t.event(n):n)}}}function ie(e,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,_,x,S,E,D,O,k,A,j,te,ne,M=n.type;if(n.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),o=[c=n.__e=r.__e]),(d=t.__b)&&d(n);n:if(typeof M==`function`){f=s.length;try{if(E=n.props,D=M.prototype&&M.prototype.render,O=(d=M.contextType)&&i[d.__c],k=d?O?O.props.value:d.__:i,r.__c?S=(p=n.__c=r.__c).__=p.__E:(D?n.__c=p=new M(E,k):(n.__c=p=new w(E,k),p.constructor=M,p.render=de),O&&O.sub(p),p.state||(p.state={}),p.__n=i,m=p.__d=!0,p.__h=[],p._sb=[]),D&&p.__s==null&&(p.__s=p.state),D&&M.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=y({},p.__s)),y(p.__s,M.getDerivedStateFromProps(E,p.__s))),h=p.props,_=p.state,p.__v=n,m)D&&M.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),D&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(D&&M.getDerivedStateFromProps==null&&E!==h&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,k),n.__v==r.__v||!p.__e&&p.shouldComponentUpdate!=null&&!1===p.shouldComponentUpdate(E,p.__s,k)){n.__v!=r.__v&&(p.props=E,p.state=p.__s,p.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(e){e&&(e.__=n)}),g.push.apply(p.__h,p._sb),p._sb=[],p.__h.length&&s.push(p),c=T(r);break n}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,k),D&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(h,_,x)})}if(p.context=k,p.props=E,p.__P=e,p.__e=!1,A=t.__r,j=0,D)p.state=p.__s,p.__d=!1,A&&A(n),d=p.render(p.props,p.state,p.context),g.push.apply(p.__h,p._sb),p._sb=[];else do p.__d=!1,A&&A(n),d=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++j<25);p.state=p.__s,p.getChildContext!=null&&(i=y(y({},i),p.getChildContext())),D&&!m&&p.getSnapshotBeforeUpdate!=null&&(x=p.getSnapshotBeforeUpdate(h,_)),te=d!=null&&d.type===C&&d.key==null?se(d.props.children):d,c=ee(e,v(te)?te:[te],n,r,i,a,o,s,c,l,u),p.base=n.__e,n.__u&=-161,p.__h.length&&s.push(p),S&&(p.__E=p.__=null)}catch(e){if(s.length=f,n.__v=null,l||o!=null){if(e.then){for(n.__u|=l?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o!=null&&(o[o.indexOf(c)]=null),n.__e=c}else if(o!=null)for(ne=o.length;ne--;)b(o[ne])}else n.__e=r.__e;n.__k??=r.__k||[],e.then||ae(n),t.__e(e,n,r)}}else o==null&&n.__v==r.__v?(n.__k=r.__k,n.__e=r.__e):c=n.__e=ce(r.__e,n,r,i,a,o,s,l,u);return(d=t.diffed)&&d(n),128&n.__u?void 0:c}function ae(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(ae))}function oe(e,n,r){for(var i=0;i<r.length;i++)le(r[i],r[++i],r[++i]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function se(e){return typeof e!=`object`||!e||e.__b>0?e:v(e)?e.map(se):e.constructor===void 0?y({},e):null}function ce(n,r,i,a,o,s,c,l,u){var d,f,p,m,g,_,y,x=i.props||h,S=r.props,C=r.type;if(C==`svg`?o=`http://www.w3.org/2000/svg`:C==`math`?o=`http://www.w3.org/1998/Math/MathML`:o||=`http://www.w3.org/1999/xhtml`,s!=null){for(d=0;d<s.length;d++)if((g=s[d])&&`setAttribute`in g==!!C&&(C?g.localName==C:g.nodeType==3)){n=g,s[d]=null;break}}if(n==null){if(C==null)return document.createTextNode(S);n=document.createElementNS(o,C,S.is&&S),l&&=(t.__m&&t.__m(r,s),!1),s=null}if(C==null)x===S||l&&n.data==S||(n.data=S);else{if(s=C==`textarea`&&S.defaultValue!=null?null:s&&e.call(n.childNodes),!l&&s!=null)for(x={},d=0;d<n.attributes.length;d++)x[(g=n.attributes[d]).name]=g.value;for(d in x)g=x[d],d==`dangerouslySetInnerHTML`?p=g:d==`children`||d in S||d==`value`&&`defaultValue`in S||d==`checked`&&`defaultChecked`in S||M(n,d,null,g,o);for(d in S)g=S[d],d==`children`?m=g:d==`dangerouslySetInnerHTML`?f=g:d==`value`?_=g:d==`checked`?y=g:l&&typeof g!=`function`||x[d]===g||M(n,d,g,x[d],o);if(f)l||p&&(f.__html==p.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),r.__k=[];else if(p&&(n.innerHTML=``),ee(r.type==`template`?n.content:n,v(m)?m:[m],r,i,a,C==`foreignObject`?`http://www.w3.org/1999/xhtml`:o,s,c,s?s[0]:i.__k&&T(i,0),l,u),s!=null)for(d=s.length;d--;)b(s[d]);l&&C!=`textarea`||(d=`value`,C==`progress`&&_==null?n.removeAttribute(`value`):_!=null&&(_!==n[d]||C==`progress`&&!_||C==`option`&&_!=x[d])&&M(n,d,_,x[d],o),d=`checked`,y!=null&&y!=n[d]&&M(n,d,y,x[d],o))}return n}function le(e,n,r){try{if(typeof e==`function`){var i=typeof e.__u==`function`;i&&e.__u(),i&&n==null||(e.__u=e(n))}else e.current=n}catch(e){t.__e(e,r)}}function ue(e,n,r){var i,a;if(t.unmount&&t.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||le(i,null,n)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=i.__n=null}if(i=e.__k)for(a=0;a<i.length;a++)i[a]&&ue(i[a],n,r||typeof e.type!=`function`);r||b(e.__e),e.__c=e.__=e.__e=void 0}function de(e,t,n){return this.constructor(e,n)}function fe(n,r,i){var a,o,s,c;r==document&&(r=document.documentElement),t.__&&t.__(n,r),o=(a=typeof i==`function`)?null:i&&i.__k||r.__k,s=[],c=[],ie(r,n=(!a&&i||r).__k=x(C,null,[n]),o||h,h,r.namespaceURI,!a&&i?[i]:o?null:r.firstChild?e.call(r.childNodes):null,s,!a&&i?i:o?o.__e:r.firstChild,a,c),oe(s,n,c),n.props.children=null}function pe(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,O(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+m++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}e=g.slice,t={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},n=0,w.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=y({},this.state);typeof e==`function`&&(e=e(y({},n),this.props)),e&&y(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),O(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),O(this))},w.prototype.render=C,r=[],a=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=function(e,t){return e.__v.__b-t.__v.__b},k.__r=0,s=Math.random().toString(8),c=`__d`+s,l=`__a`+s,u=/(PointerCapture)$|Capture$/i,d=0,f=re(!1),p=re(!0),m=0;var N=e=>Array.from(e),P=e=>{let t=0;for(let n of e)t++;return t},me=e=>/^\s$/u.test(e),he=e=>/^[\n\v\f\r\u0085\u2028\u2029]$/u.test(e),ge=e=>/^\p{L}$/u.test(e),_e=e=>/^\p{N}$/u.test(e),ve=e=>/^\p{Lu}$/u.test(e),F=e=>e.replace(/^[\p{Zs}\t]+|[\p{Zs}\t]+$/gu,``),ye=e=>e.trim(),be=e=>e.replace(/\s+$/u,``),xe=e=>e.replace(/^\s+/u,``);function Se(e,t){let n=[],r=``;for(let i of e)t(i)?(r&&n.push(r),r=``):r+=i;return r&&n.push(r),n}function Ce(e,t){if(t.length>e.length)return!1;for(let n=0;n<t.length;n++)if(e[n]!==t[n])return!1;return!0}function we(e,t){return e.length===t.length&&Ce(e,t)}function Te(e,t){for(let n=0;n<Math.min(e.length,t.length);n++)if(e[n]!==t[n])return e[n]-t[n];return e.length-t.length}var Ee=e=>me(e)||e===`,`||e===`-`;function De(e){return Se(I(e.toLowerCase()),Ee)}function I(e){return e.normalize(`NFC`).replaceAll(`ё`,`е`).replaceAll(`Ё`,`Е`)}var Oe=[[`капуста`,`Капуста белокочанная`],[`лук`,`Лук репчатый`],[`рис`,`Рис сухой`],[`гречка`,`Гречка, сухая`],[`греча`,`Гречка, сухая`],[`макароны`,`Макароны, сухие`],[`картофель`,`Картофель`],[`картошка`,`Картофель`],[`морковь`,`Морковь`],[`свёкла`,`Свёкла`],[`свекла`,`Свёкла`],[`помидор`,`Помидор`],[`томат`,`Помидор`],[`огурец`,`Огурец`],[`яблоко`,`Яблоко`],[`банан`,`Банан`],[`апельсин`,`Апельсин`],[`груша`,`Груша`],[`курица`,`Куриная грудка`],[`филе`,`Куриная грудка`],[`говядина`,`Говядина`],[`свинина`,`Свинина`],[`яйцо`,`Яйцо куриное`],[`яйца`,`Яйцо куриное`],[`молоко`,`Молоко 2,5%`],[`кефир`,`Кефир 2,5%`],[`творог`,`Творог 5%`],[`сыр`,`Сыр твёрдый (Российский)`],[`хлеб`,`Хлеб пшеничный`],[`масло`,`Масло сливочное`],[`сахар`,`Сахар`],[`мёд`,`Мёд`],[`мед`,`Мёд`],[`овсянка`,`Овсяные хлопья, сухие`],[`каша`,`Овсянка на воде`],[`кофе`,`Кофе чёрный`],[`капучино`,`Капучино`],[`чай`,`Чай чёрный`],[`лосось`,`Лосось`],[`горбуша`,`Горбуша, сырая`],[`йогурт`,`Йогурт натуральный 3,2%`],[`сметана`,`Сметана 15%`],[`колбаса`,`Колбаса Докторская`],[`сосиски`,`Сосиски`],[`фасоль`,`Фасоль красная, сухая`],[`чечевица`,`Чечевица, сухая`],[`кукуруза`,`Кукуруза, варёная`],[`горошек`,`Горошек зелёный`],[`перец`,`Перец болгарский`],[`шпинат`,`Шпинат`],[`салат`,`Салат листовой`],[`грибы`,`Шампиньоны`],[`шампиньоны`,`Шампиньоны`],[`тунец`,`Тунец консервированный в собственном соку`],[`креветки`,`Креветки, варёные`],[`индейка`,`Индейка филе`],[`печень`,`Печень куриная`],[`лаваш`,`Лаваш тонкий`],[`перловка`,`Перловка, сухая`],[`булгур`,`Булгур, сухой`],[`кускус`,`Кускус, варёный`],[`киноа`,`Киноа, варёная`],[`изюм`,`Изюм`],[`финики`,`Финики`],[`шоколад`,`Шоколад горький 70%`],[`печенье`,`Печенье`],[`орехи`,`Ореховая смесь`],[`миндаль`,`Миндаль`],[`авокадо`,`Авокадо`],[`хлебцы`,`Хлебцы`],[`пельмени`,`Пельмени`],[`сырники`,`Сырники`],[`борщ`,`Борщ`],[`плов`,`Плов`],[`пицца`,`Пицца`],[`бургер`,`Бургер`],[`вино`,`Вино сухое`],[`пиво`,`Пиво`]];function ke(e){let t=De(e);if(t.length!==1||P(t[0])<3)return null;let n=t[0],r=Oe.find(([e])=>I(e)===n);if(r)return r[1];let i=Oe.find(([e])=>{let t=I(e);return t.startsWith(n)||$e(t,n)||Ke(t,n)});return i?i[1]:null}var Ae=class{name;folded;words;length;matchWords;chars;allChars;cooking;constructor(e){this.name=e,this.folded=I(e.toLowerCase()),this.words=Se(this.folded,Ee),this.matchWords=this.words.filter(e=>!je.has(e)),this.chars=this.matchWords.map(N),this.allChars=this.words.map(N),this.cooking=this.chars.map(Fe).filter(e=>e!==null),this.length=P(e)}},je=new Set([`сырой`,`сырая`,`сырое`,`сырые`,`сухой`,`сухая`,`сухое`,`сухие`]),Me=[[`варен`,`отварн`,`сварен`],[`жарен`,`обжарен`,`поджарен`],[`запечен`,`печен`],[`тушен`],[`гриль`],[`копчен`,`сырокопчен`,`варено-копчен`],[`маринован`],[`солен`,`засолен`,`малосол`],[`квашен`],[`сушен`,`вялен`],[`консервирован`],[`заморожен`],[`паров`],[`фри`]],Ne=new Set([``,`ая`,`ый`,`ое`,`ые`,`ой`,`ых`,`ую`,`ым`,`ом`,`ого`,`ей`,`ие`,`ий`]),Pe=Me.map(e=>e.map(N));function Fe(e){let t=Pe.findIndex(t=>t.some(t=>{if(!Ce(e,t))return!1;let n=e.slice(t.length);return n[0]===`н`&&(n=n.slice(1)),Ne.has(n.join(``))}));return t<0?null:t}var Ie=class{text;lastComplete;folded;words;spellings;saysRaw;cooking;constructor(e,t){this.text=e,this.lastComplete=t,this.folded=I(be(e).toLowerCase()),this.words=Se(this.folded,Ee),this.saysRaw=this.words.some(e=>je.has(e)),this.cooking=new Set(this.words.map(e=>Fe(N(e))).filter(e=>e!==null));let n=this.words.map(e=>Xe(e).map(N)),r=this.words[this.words.length-1];if(!t&&r!==void 0&&P(r)>=3&&n.length>0){let e=[...Ye].filter(([e])=>e.startsWith(r)&&e!==r).flatMap(([,e])=>e);n[n.length-1]=n[n.length-1].concat(e.map(N))}this.spellings=n}};function Le(e,t){let n=N(t);if(e.matchWords.includes(t)||Ye.has(t))return!0;if(e.chars.some(e=>e.length>n.length&&Ce(e,n))||[...Ye.keys()].some(e=>P(e)>n.length&&e.startsWith(t)))return!1;let r=Xe(t).map(N);return e.chars.some(e=>He(e,r,1))}function Re(e,t){return Be(e,t)!==null}function ze(e,t){let n=Be(e,t);if(n===null)return!1;for(let t=n;t<e.length;t++)if(e[t]!==`,`&&e[t]!==` `)return!1;return!0}function Be(e,t){let n=0,r=0;for(;r<t.length;){if(n===e.length)return null;if(e[n]===t[r])n++,r++;else if(e[n]===`,`)n++;else if(t[r]===`,`)r++;else return null}return n}function Ve(e,t){if(Re(e.folded,t.folded))return 0;let n=t.spellings,r=t.saysRaw?e.allChars:e.chars;if(n.length===0||n.length>r.length)return null;let i=r.map(()=>!1);levels:for(let e=0;e<=2;e++){i.fill(!1);for(let a=0;a<n.length;a++){let o=n[a],s=a===n.length-1&&!t.lastComplete,c=r.findIndex((t,n)=>!i[n]&&(s?Ue(t,o,e):He(t,o,e)));if(c<0)continue levels;i[c]=!0}return e}return null}function He(e,t,n){let r=Fe(e);return r!==null&&t.some(e=>Fe(e)===r)?!0:t.some(t=>we(e,t)||et(e,t)||n>=1&&qe(e,t)?!0:n>=2&&t.length>=4&&nt(e,t))}function Ue(e,t,n){if(t.some(t=>Ce(e,t)))return!0;let r=Fe(e);if(r!==null&&t.some(e=>Fe(e)===r||Pe[r].some(t=>Ce(t,e))))return!0;let i=t[0];if(et(e,i)||n>=1&&qe(e,i))return!0;if(n<2||i.length<4)return!1;for(let t of[i.length-1,i.length,i.length+1])if(t>0&&t<=e.length&&nt(e.slice(0,t),i))return!0;return!1}function We(e){return Ge(P(e))}function Ge(e){return e<5?e:Math.max(4,Math.ceil(e*.6))}function Ke(e,t){return qe(N(e),N(t))}function qe(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;return n>=4&&n>=Math.min(Ge(e.length),Ge(t.length))&&e.length-n<=4&&t.length-n<=4}var Je={филе:[`грудка`],грудка:[`филе`],филешка:[`грудка`],кура:[`курица`],курочка:[`курица`],курятина:[`курица`],индюшка:[`индейка`],индюшатина:[`индейка`],свининка:[`свинина`],говядинка:[`говядина`],телятина:[`говядина`],крылышки:[`крылья`],крылья:[`крылышки`],бедрышки:[`бедро`],бедрышко:[`бедро`],ножки:[`голень`],сёмга:[`лосось`],семга:[`лосось`],лосось:[`сёмга`],рыбка:[`рыба`],сосиска:[`сосиски`],сарделька:[`сардельки`],котлетка:[`котлета`],греча:[`гречка`],гречечка:[`гречка`],рисик:[`рис`],овсяночка:[`овсянка`],геркулес:[`овсянка`],кашка:[`каша`],пшёнка:[`пшено`],пшенка:[`пшено`],макарошки:[`макароны`],паста:[`макароны`],спагетти:[`макароны`],вермишель:[`макароны`],хлебушек:[`хлеб`],булочка:[`булка`],лавашик:[`лаваш`],картошка:[`картофель`],картофан:[`картофель`],картошечка:[`картофель`],пюрешка:[`пюре`],помидор:[`томат`],томат:[`помидор`],помидорка:[`помидор`],огурчик:[`огурец`],морковка:[`морковь`],свеколка:[`свёкла`],лучок:[`лук`],чесночок:[`чеснок`],перчик:[`перец`],капустка:[`капуста`],кабачок:[`цукини`],цукини:[`кабачок`],грибочки:[`грибы`],шампиньон:[`грибы`],яблочко:[`яблоко`],бананчик:[`банан`],апельсинка:[`апельсин`],мандаринка:[`мандарин`],ягодки:[`ягоды`],яйца:[`яйцо`],яички:[`яйцо`],яичко:[`яйцо`],творожок:[`творог`],кефирчик:[`кефир`],молочко:[`молоко`],сметанка:[`сметана`],сырочек:[`сыр`],йогуртик:[`йогурт`],маслице:[`масло`],сахарок:[`сахар`],медок:[`мёд`],шоколадка:[`шоколад`],печенька:[`печенье`],печеньки:[`печенье`],конфетка:[`конфеты`],мороженка:[`мороженое`],орешки:[`орехи`],чаёк:[`чай`],чаек:[`чай`],кофеёк:[`кофе`],кофеек:[`кофе`],каппучино:[`капучино`],капуччино:[`капучино`],супчик:[`суп`],борщик:[`борщ`],салатик:[`салат`],гамбургер:[`бургер`],сендвич:[`сэндвич`],бутер:[`бутерброд`],пицца:[`пицца`]},Ye=(()=>{let e=new Map;for(let[t,n]of Object.entries(Je)){let r=I(t);e.set(r,(e.get(r)??[]).concat(n.map(I)))}return e})();function Xe(e){return[e,...Ye.get(e)??[]]}var Ze=new Set(`аеёиоуыэюяйь`),Qe=new Set([...Ze,...`мвх`]);function $e(e,t){return et(N(e),N(t))}function et(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;if(n<3)return!1;let r=e.slice(n),i=t.slice(n);if(r.length>3||i.length>3)return!1;let a=e=>e.length===0||Ze.has(e[0])&&e.every(e=>Qe.has(e)),o=Math.min(e.length,t.length);return a(r)&&a(i)&&n>=o-3}function tt(e){return N(e).slice(0,We(e)).join(``)}function nt(e,t){if(we(e,t))return!0;let n=e.length,r=t.length;if(Math.abs(n-r)>1)return!1;let i=0,a=0,o=0;for(;i<n&&a<r;)if(e[i]===t[a])i++,a++;else{if(o++,o>1)return!1;n>r?i++:r>n?a++:i+1<n&&e[i]===t[a+1]&&e[i+1]===t[a]?(i+=2,a+=2):(i++,a++)}return o+=n-i+(r-a),o<=1}var rt=N("qwertyuiop[]asdfghjkl;'zxcvbnm,.`"),it=N(`йцукенгшщзхъфывапролджэячсмитьбюё`),at=e=>/^[A-Za-z]$/.test(e);function ot(e){let t=N(e);if(t.some(e=>it.includes(e.toLowerCase()))||!t.some(at))return null;let n=``;return t.forEach((e,r)=>{let i=e.toLowerCase(),a=rt.indexOf(i),o=!at(e),s=r>0&&at(t[r-1])||r+1<t.length&&at(t[r+1]);if(a>=0&&(!o||s)){let t=it[a];n+=e===i?t:t.toUpperCase()}else n+=e}),n}var st=[`starter`,`off`,`usda`,`user`,`vkusvill`],ct={user:0,starter:1,vkusvill:2,usda:3,off:5},lt={user:.1,starter:.1,vkusvill:.05,usda:0,off:-.15},ut=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],dt=e=>typeof e==`string`&&ut.includes(e),L=class e{kcal;protein;fat;carbs;constructor(e,t,n,r){this.kcal=e,this.protein=t,this.fat=n,this.carbs=r}static zero=new e(0,0,0,0);scaled(t){return new e(this.kcal*t,this.protein*t,this.fat*t,this.carbs*t)}plus(t){return new e(this.kcal+t.kcal,this.protein+t.protein,this.fat+t.fat,this.carbs+t.carbs)}forGrams(e){return this.scaled(e/100)}get isPossiblePer100g(){return[this.protein,this.fat,this.carbs].every(e=>e>=0)&&this.protein+this.fat+this.carbs<=105&&this.kcal>=0&&this.kcal<=1e3}},ft=class{id;source;nameRu;nameEn;brand;externalId;per100g;portions;dishWeight;rare;searchText;ruKey;enKey;brandKey;constructor(e){this.id=e.id,this.source=e.source,this.nameRu=e.nameRu,this.nameEn=e.nameEn,this.brand=e.brand??null,this.externalId=e.externalId??null,this.per100g=e.per100g,this.portions=e.portions??[],this.dishWeight=e.dishWeight??null,this.rare=e.rare??!1,this.searchText=I([this.nameRu,this.nameEn,this.brand].filter(e=>e!==null).join(` `).toLowerCase());let t=e=>{let t=e===null?``:F(e);return t?new Ae(t):null};this.ruKey=t(this.nameRu),this.enKey=t(this.nameEn),this.brandKey=t(this.brand)}get searchRank(){return ct[this.source]+ +!!this.rare}get relevanceWeight(){return lt[this.source]-(this.rare?.2:0)}keys(e){return(e===`en`?[this.enKey,this.ruKey]:[this.ruKey,this.enKey]).filter(e=>e!==null)}searchTextContains(e){return e===``||this.searchText.includes(e)}name(e){let t=this.nameRu===null?null:F(this.nameRu),n=this.nameEn===null?null:F(this.nameEn),[r,i]=e===`ru`?[t,n]:[n,t];return r||i||``}startsWith(e){return this.ruKey?.folded.startsWith(e)===!0||this.enKey?.folded.startsWith(e)===!0}portion(e){return this.portions.find(t=>t.unit===e)}},pt=`{
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
`;function mt(){return(typeof navigator>`u`?`ru`:navigator.languages?.[0]??navigator.language??`ru`).startsWith(`en`)?`en`:`ru`}var ht=mt(),R=()=>ht;function gt(e){ht=e??mt()}var _t=e=>e===`ru`?`ru-RU`:`en-US`,vt=(()=>{let e=JSON.parse(pt),t={ru:new Map,en:new Map};for(let[n,r]of Object.entries(e.strings))for(let e of[`ru`,`en`]){let i=r.localizations?.[e]?.stringUnit?.value;i!==void 0&&t[e].set(n,i)}return t})(),yt={"Нет сети — ищу только на этом устройстве":`Offline — searching this device only`,"Дневник хранится в этом браузере":`The diary is kept in this browser`,"Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.":`Save a copy from the profile: without it, entries can’t move to another browser or device.`,"Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.":`The browser’s storage couldn’t be opened. This session’s entries will be gone when the page closes.`,Раньше:`Earlier`,Позже:`Later`,"Загружаю продукты…":`Loading foods…`,Сводка:`Summary`,"Обновить страницу":`Reload the page`,"Добавьте Круг на экран «Домой»":`Add Krug to your Home Screen`,"Так дневник надёжно хранится на телефоне и открывается как приложение.":`This way the diary is kept safely on the phone and opens like an app.`,"В Safari: «Поделиться» → «На экран „Домой“».":`In Safari: Share → Add to Home Screen.`,Установить:`Install`,"Не сейчас":`Not now`,"Сколько калорий в день?":`How many calories a day?`,Посчитать:`Work it out`,"Знаю цель":`I know mine`,Активность:`Activity`,Мало:`Low`,Средне:`Medium`,Много:`High`,Цель:`Goal`,"Снизить вес":`Lose`,Держать:`Keep`,Набрать:`Gain`,Пропустить:`Skip`,Готово:`Done`,"Посчитано по формуле Миффлина — Сан Жеора. Цели всегда можно поменять в профиле.":`Worked out with the Mifflin — St Jeor formula. The targets can always be changed in the profile.`,"Цели всегда можно поменять в профиле.":`The targets can always be changed in the profile.`,"в день":`a day`,"Нет доступа к камере — разрешите его в настройках браузера":`No camera access — allow it in the browser’s settings`,"Голосовой ввод не работает без сети":`Voice input needs a network`,"Микрофон не найден":`No microphone found`,"Нет доступа к микрофону или распознаванию речи — разрешите в настройках браузера":`No access to the microphone or speech recognition — allow it in the browser’s settings`,"Поиск в сети просит подождать минуту — ищу только на этом устройстве":`Online search asks to wait a minute — searching this device only`};function z(e,t=[],n=ht){let r=vt[n].get(e)??(n===`en`?yt[e]:void 0)??e,i=0;return r.replace(/%(?:(\d+)\$)?(?:@|lld|d)/g,(e,n)=>{let r=n?t[Number(n)-1]:t[i++];return String(r??``)})}var bt=new Map;function xt(e,t){let n=`${e}|${JSON.stringify(t)}`,r=bt.get(n);return r||bt.set(n,r=new Intl.DateTimeFormat(_t(e),t)),r}var St=class e{foods=[];byId=new Map;byBarcode=new Map;constructor(e){this.add(e)}food(e){return this.byId.get(e)}foodByBarcode(e){return this.byBarcode.get(e)}remove(e){let t=this.byId.get(e);t&&(this.byId.delete(e),this.foods=this.foods.filter(t=>t.id!==e),t.externalId!==null&&this.byBarcode.get(t.externalId)?.id===e&&this.byBarcode.delete(t.externalId))}add(e,t=!1){for(let n of e){if(!this.byId.has(n.id))this.foods.push(n),this.byId.set(n.id,n);else if(t){let e=this.foods.findIndex(e=>e.id===n.id);e>=0&&(this.foods[e]=n,this.byId.set(n.id,n))}let e=n.externalId;e!==null&&P(e)>=8&&N(e).every(_e)&&this.byBarcode.set(e,this.byId.get(n.id))}}search(e,{limit:t=30,usage:n=new Map,lang:r=R()}={}){let i=I(F(e.toLowerCase())),a=Se(i,me).map(e=>{let t=Fe(N(e));if(t===null&&P(e)>=3){let n=Me.findIndex(t=>t.some(t=>t.startsWith(e)));t=n<0?null:n}return Xe(e).map(tt).concat(t===null?[]:Me[t])}),o=this.foods.filter(e=>a.every(t=>t.some(t=>e.searchTextContains(t)))),s=ke(i),c=s===null?null:I(s.toLowerCase());if(c!==null&&!o.some(e=>e.ruKey?.folded===c)){let e=this.foods.find(e=>e.ruKey?.folded===c);e&&o.push(e)}return o.map(e=>{let t=n.get(e.id);return{f:e,key:[-(t?.count??0),-Math.trunc((t?.lastUsed??-621355968e5)/1e3),c!==null&&e.ruKey?.folded===c?0:1,+!e.startsWith(i),e.searchRank,e.keys(r)[0]?.length??0]}}).sort((e,t)=>Te(e.key,t.key)).slice(0,t).map(e=>e.f)}static fromBundled(t){return new e([...e.parseStarter(t.starter),...e.parseBundle(t.off),...e.parseBundle(t.usda)])}static parseStarter(e){return Array.isArray(e)?e.flatMap(e=>typeof e!=`object`||!e||typeof e.id!=`string`?[]:[new ft({id:`starter:${e.id}`,source:`starter`,nameRu:typeof e.ru==`string`?e.ru:null,nameEn:typeof e.en==`string`?e.en:null,per100g:wt(e.kcal,e.p,e.f,e.c),portions:Tt(e.portions)})]):[]}static parseBundle(t){if(typeof t!=`object`||!t)return[];let n=t,r=st.find(e=>e===n.source);return r===void 0||!Array.isArray(n.items)?[]:n.items.flatMap(t=>{if(!Array.isArray(t)||t.length<9||typeof t[0]!=`string`)return[];let n=Et(t[1]),i=Et(t[2]),a=Et(t[3]);return[new ft({id:`${r}:${t[0]}`,source:r,nameRu:n,nameEn:i,brand:a,externalId:t[0],per100g:wt(t[4],t[5],t[6],t[7]),portions:Tt(t[8]),rare:t.length>9&&t[9]===!0||r===`off`&&!e.isCaredFor(n??i,a)})]})}static isCaredFor(e,t){if(e===null||e===``||t===null||t===``)return!1;let n=N(e)[0];return(ve(n)||_e(n))&&P(e)<=60}},Ct=e=>typeof e==`number`?e:0;function wt(e,t,n,r){return new L(Ct(e),Ct(t),Ct(n),Ct(r))}function Tt(e){return typeof e!=`object`||!e||Array.isArray(e)?[]:Object.entries(e).flatMap(([e,t])=>dt(e)&&Ct(t)>0?[{unit:e,grams:Ct(t)}]:[]).sort((e,t)=>e.unit<t.unit?-1:+(e.unit>t.unit))}function Et(e){if(typeof e!=`string`)return null;let t=F(e);return t===``?null:t}var Dt=()=>({heightCm:null,weightKg:null,sex:`unset`,birthYear:null,targetKcal:2e3,targetProtein:100,targetFat:70,targetCarbs:250}),Ot=e=>new L(e.targetKcal,e.targetProtein,e.targetFat,e.targetCarbs);function kt(e,t){return Object.keys(e).every(n=>e[n]===t[n])}var At=e=>kt(e,Dt()),jt=()=>({food:[],usage:[],entry:[],dishIngredient:[],profile:null,meta:[]});function Mt(e,t){return{id:e.id,source:e.source,externalId:e.externalId,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,kcal:e.per100g.kcal,protein:e.per100g.protein,fat:e.per100g.fat,carbs:e.per100g.carbs,portions:[...e.portions],createdAt:t,dishWeight:e.dishWeight}}function Nt(e){return new ft({id:e.id,source:e.source,nameRu:e.nameRu,nameEn:e.nameEn,brand:e.brand,externalId:e.externalId,per100g:new L(e.kcal,e.protein,e.fat,e.carbs),portions:e.portions,dishWeight:e.dishWeight})}var Pt=(e,t)=>`${e}\n${t}`,Ft=class e{sink;foodRows=new Map;usageRows=new Map;entryRows=new Map;ingredientRows=new Map;profileRow=Dt();metaRows=new Map;lastCreated=0;constructor(e=jt(),t=null){this.sink=t;for(let t of e.food)this.foodRows.set(t.id,t);for(let t of e.usage)this.usageRows.set(t.foodId,{count:t.count,lastUsed:t.lastUsed});for(let t of e.entry)this.entryRows.set(t.id,{...t});for(let t of e.dishIngredient)this.ingredientRows.set(Pt(t.dishId,t.position),t);e.profile&&(this.profileRow={...Dt(),...e.profile});for(let[t,n]of e.meta)this.metaRows.set(t,n)}static inMemory(){return new e}get persistent(){return this.sink!==null}flushed(){return this.sink?.flushed?.()??Promise.resolve()}commit(e){e.length>0&&this.sink?.write(e)}now(){return this.lastCreated=Math.max(Date.now(),this.lastCreated+1),this.lastCreated}foods(){return[...this.foodRows.values()].map(Nt)}save(e,t){let n=[];for(let r of e)t?n.push(this.upsert(r)):this.foodRows.has(r.id)||n.push(this.putFood(Mt(r,this.now())));this.commit(n)}upsert(e){return this.putFood(Mt(e,this.foodRows.get(e.id)?.createdAt??this.now()))}putFood(e){return this.foodRows.set(e.id,e),{table:`food`,key:e.id,value:e}}ownFoodIds(){return[...this.foodRows.values()].filter(e=>e.source===`user`).sort((e,t)=>t.createdAt-e.createdAt).map(e=>e.id)}ownCreatedAt(){return new Map([...this.foodRows.values()].filter(e=>e.source===`user`).map(e=>[e.id,e.createdAt]))}saveDish(e,t){let n=[this.upsert(e),...this.dropIngredients(e.id)];for(let e of t)n.push(this.putIngredient(e));this.commit(n)}dropIngredients(e){return this.ingredients(e).map(e=>{let t=Pt(e.dishId,e.position);return this.ingredientRows.delete(t),{table:`dishIngredient`,key:t}})}putIngredient(e){let t=Pt(e.dishId,e.position);return this.ingredientRows.set(t,e),{table:`dishIngredient`,key:t,value:e}}deleteFood(e){let t=this.foodRows.get(e);if(!t)return null;let n=this.ingredients(e),r=[...this.entryRows.values()].filter(t=>t.foodId===e),i=[...this.ingredientRows.values()].filter(t=>t.foodId===e&&t.dishId!==e),a={food:Nt(t),createdAt:t.createdAt,ingredients:n,entryIds:r.map(e=>e.id),usedIn:i.map(e=>({dishId:e.dishId,position:e.position}))},o=[];for(let e of r)o.push(this.putEntry({...e,foodId:null}));for(let e of i)o.push(this.putIngredient({...e,foodId:null}));return o.push(...this.dropIngredients(e)),this.foodRows.delete(e),o.push({table:`food`,key:e}),this.commit(o),a}restoreFood(e){let t=[];this.foodRows.has(e.food.id)||t.push(this.putFood(Mt(e.food,e.createdAt)));for(let n of e.ingredients)this.ingredientRows.has(Pt(n.dishId,n.position))||t.push(this.putIngredient(n));for(let n of e.entryIds){let r=this.entryRows.get(n);r&&t.push(this.putEntry({...r,foodId:e.food.id}))}let n=[e.food.name(`ru`),e.food.name(`en`)];for(let{dishId:r,position:i}of e.usedIn){let a=this.ingredientRows.get(Pt(r,i));a&&a.foodId===null&&n.includes(a.name)&&t.push(this.putIngredient({...a,foodId:e.food.id}))}this.commit(t)}usage(){return new Map([...this.usageRows].map(([e,t])=>[e,{...t}]))}saveUsage(e,t){this.commit([this.putUsage(t,e)])}putUsage(e,t){return this.usageRows.set(e,{...t}),{table:`usage`,key:e,value:{foodId:e,count:t.count,lastUsed:t.lastUsed}}}entries(){return[...this.entryRows.values()].map(e=>({...e})).sort((e,t)=>e.loggedAt-t.loggedAt)}saveEntry(e){this.commit([this.putEntry(e)])}putEntry(e){let t={...e};return this.entryRows.set(t.id,t),{table:`entry`,key:t.id,value:t}}deleteEntry(e){this.entryRows.delete(e)&&this.commit([{table:`entry`,key:e}])}profile(){return{...this.profileRow}}saveProfile(e){this.commit([this.putProfile(e)])}putProfile(e){return this.profileRow={...e},{table:`profile`,key:`1`,value:{...e}}}ingredients(e){return[...this.ingredientRows.values()].filter(t=>t.dishId===e).sort((e,t)=>e.position-t.position).map(e=>({...e}))}importBackup(e){let t=[],n=new Set,r=0;for(let r of e.foods)this.foodRows.has(r.id)||(t.push(this.putFood(Mt(r,e.createdAt.get(r.id)??this.now()))),n.add(r.id));for(let r of e.ingredients)n.has(r.dishId)&&!this.ingredientRows.has(Pt(r.dishId,r.position))&&t.push(this.putIngredient(r));for(let n of e.entries)this.entryRows.has(n.id)||(t.push(this.putEntry(n)),r++);for(let[n,r]of e.usage){let e=this.usageRows.get(n);t.push(this.putUsage(n,{count:Math.max(e?.count??0,r.count),lastUsed:Math.max(e?.lastUsed??-1/0,r.lastUsed)}))}return e.profile&&(At(this.profileRow)||e.replaceProfile)&&t.push(this.putProfile(e.profile)),this.commit(t),{entries:r,foods:n.size}}meta(e){return this.metaRows.get(e)??null}setMeta(e,t){this.metaRows.set(e,t),this.commit([{table:`meta`,key:e,value:{key:e,value:t}}])}};function It(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function B(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function Lt(e,t){let n=new Date(e);return n.setMonth(n.getMonth()+t),n}var Rt=(e,t)=>String(e).padStart(t,`0`);function V(e){return`${Rt(e.getFullYear(),4)}-${Rt(e.getMonth()+1,2)}-${Rt(e.getDate(),2)}`}function H(e){let t=zt(e);if(t===null)throw Error(`not a day: ${e}`);return t}function zt(e){let t=e.split(`-`).filter(e=>e!==``).map(e=>/^[+-]?\d+$/.test(e)?Number(e):null);if(t.length!==3||t.some(e=>e===null||!Number.isSafeInteger(e)))return null;let n=new Date(2e3,0,1);return n.setFullYear(t[0],t[1]-1,t[2]),n.setHours(0,0,0,0),Number.isNaN(n.getTime())||V(n)!==e?null:n}function Bt(e,t=new Date){return V(B(It(t),e))}function Vt(e=new Date){return V(e)}function Ht(e,t=new Date,n=R()){switch(e){case Bt(0,t):return z(`Сегодня`,[],n);case Bt(-1,t):return z(`Вчера`,[],n);case Bt(1,t):return z(`Завтра`,[],n);default:return xt(n,{month:`long`,day:`numeric`}).format(H(e))}}var Ut=(e,[t,n])=>e>=t&&e<=n;function Wt(e){let t=It(e);return B(t,-((t.getDay()+6)%7))}function Gt(e){let t=Wt(H(e));return[V(t),V(B(t,6))]}function Kt(e){let t=H(e),n=new Date(t.getFullYear(),t.getMonth(),1),r=B(Lt(n,1),-1);return[V(n),V(r)]}function qt(e,t){if(!Number.isFinite(e))return Number.isNaN(e)?`nan`:e>0?`inf`:`-inf`;let n=e.toFixed(t);if(Math.abs(e)>=1e21)return n;let r=Math.abs(e).toFixed(100).split(`.`)[1];if(r[t]!==`5`||!/^0*$/.test(r.slice(t+1)))return n;let i=BigInt(n.replace(`-`,``).replace(`.`,``));if(i%2n==0n)return n;let a=(i-1n).toString().padStart(t+1,`0`);return(e<0?`-`:``)+(t===0?a:`${a.slice(0,-t)}.${a.slice(-t)}`)}var Jt=e=>qt(e,0);function U(e){return e<10&&e!==Math.round(e)?qt(e,1):qt(e,0)}function Yt(e){return e==null||!(e>=0&&e<1e5)?null:e}function Xt(e){let t=F(e).replaceAll(`,`,`.`);return!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(t)&&!/^[+-]?(nan|inf|infinity)$/i.test(t)?null:/nan/i.test(t)?NaN:/inf/i.test(t)?t.startsWith(`-`)?-1/0:1/0:Number(t)}var Zt=e=>Yt(Xt(e));function Qt(e){if(!Number.isInteger(e)||Math.abs(e)>=0x38d7ea4c68000)return`other`;let t=e%10,n=e%100;return t===1&&n!==11?`one`:t>=2&&t<=4&&!(n>=12&&n<=14)?`few`:`many`}var $t={gram:[`gram`,`grams`],ml:[`ml`,`ml`],piece:[`piece`,`pieces`],pack:[`pack`,`packs`],spoon:[`tbsp`,`tbsp`],teaspoon:[`tsp`,`tsp`],slice:[`slice`,`slices`],cup:[`cup`,`cups`],portion:[`portion`,`portions`]},en={gram:{one:`грамм`,few:`грамма`,many:`грамм`,other:`грамма`},ml:{one:`мл`,few:`мл`,many:`мл`,other:`мл`},piece:{one:`штука`,few:`штуки`,many:`штук`,other:`штуки`},pack:{one:`пачка`,few:`пачки`,many:`пачек`,other:`пачки`},spoon:{one:`ст. ложка`,few:`ст. ложки`,many:`ст. ложек`,other:`ст. ложки`},teaspoon:{one:`ч. ложка`,few:`ч. ложки`,many:`ч. ложек`,other:`ч. ложки`},slice:{one:`ломтик`,few:`ломтика`,many:`ломтиков`,other:`ломтика`},cup:{one:`стакан`,few:`стакана`,many:`стаканов`,other:`стакана`},portion:{one:`порция`,few:`порции`,many:`порций`,other:`порции`}};function tn(e,t,n){return n===`en`?$t[e][t===1?0:1]:en[e][Qt(t)]}function nn(e,t,n=R()){return`${rn(e)} ${tn(t,e,n)}`}function rn(e){if(Number.isInteger(e)&&Math.abs(e)<0x38d7ea4c68000)return String(e);let t=qt(e,2);for(;t.endsWith(`0`);)t=t.slice(0,-1);return t}function an(e){return Number.isInteger(e)?qt(e,0):qt(e,1)}var on=class{term;amount;unit;explicitUnit;constructor(e,t=null,n=null,r=!1){this.term=e,this.amount=t,this.unit=n,this.explicitUnit=r}get hasAmount(){return(this.amount??0)>0}},sn=(()=>{let e=new Map,t=(t,...n)=>n.forEach(n=>e.set(n,t));return t(`gram`,`г`,`гр`,`грамм`,`грамма`,`граммов`,`g`,`gr`,`gram`,`grams`),t(`ml`,`мл`,`ml`),t(`piece`,`шт`,`штук`,`штуки`,`штука`,`pc`,`pcs`,`piece`,`pieces`),t(`pack`,`пачка`,`пачки`,`пачек`,`пач`,`pack`,`packs`),t(`spoon`,`ложка`,`ложки`,`ложек`,`стл`,`tbsp`,`стложка`,`стложки`,`стложек`),t(`teaspoon`,`чл`,`tsp`,`чложка`,`чложки`,`чложек`),t(`slice`,`ломтик`,`ломтика`,`ломтиков`,`slice`,`slices`),t(`cup`,`стакан`,`стакана`,`стаканов`,`cup`,`cups`),t(`portion`,`порция`,`порции`,`порций`,`portion`,`portions`),e})(),cn=/^(.+?)\s+(\d+(?:[.,]\d+)?)\s*([a-zA-Zа-яёА-ЯЁ]*(?:\.\s*[a-zA-Zа-яёА-ЯЁ]+)?)\.?\s*$/u;function ln(e){let t=ye(e),n=cn.exec(t);if(!n)return new on(t);let r=F(n[1]),i=Zt(n[2]);if(!r||i===null||!(i>0))return new on(t);let a=Array.from(n[3].toLowerCase()).filter(e=>e!==`.`&&!me(e)).join(``),o=a===``?`gram`:sn.get(a);return o===void 0?new on(t):new on(r,i,o,a!==``)}var un=class{food;unit;amount;label;text;constructor(e,t,n,r,i){this.food=e,this.unit=t,this.amount=n,this.label=r,this.text=i}get grams(){return this.unit===`gram`?this.amount:this.amount*(this.food.portion(this.unit)?.grams??1)}},dn=[`portion`,`piece`,`pack`,`slice`,`cup`,`spoon`,`teaspoon`],fn=class{text;parsed;key;constructor(e){this.text=xe(e.normalize(`NFC`)),this.parsed=ln(this.text),this.key=new Ie(this.parsed.hasAmount?this.parsed.term:this.text,this.parsed.hasAmount||this.text.endsWith(` `))}};function pn(e,t,n,r,i,a){let o=n===`en`?`en`:`ru`,s=t.text,c=t.parsed,l=t.key.text,u=e.food,d=e.phrase||e.key.name===u.name(a)?Cn(e.key.name,l):null,f=e.phrase?e.key.name:u.name(n);(i||a!==n)&&(d=null);let p=!1;d!==null&&d!==``&&De(d).every(e=>je.has(e))&&(d=``,p=!0);let m=t.key.words[t.key.words.length-1],h;if(h=d!==null&&!p?e.key.name:p||e.tier<=1&&!i&&m!==void 0&&Le(e.key,m)?vn(F(l)):f,c.hasAmount&&c.amount!==null){let e=c.amount,t=c.explicitUnit,n=t?c.unit??`gram`:yn(u,e);if(n!==`gram`&&u.portion(n)===void 0)return null;let r=`${f} ${nn(e,n,o)}`,i;return i=d===null||d!==``?r:t?s:`${be(s)} ${Sn(e,n,o)}`,new un(u,n,e,h,i)}let[g,_]=r(u.id)??xn(u),v=nn(_,g,o),y;return y=d===null?`${f} ${v}`:s.endsWith(` `)&&d===``?`${s}${v}`:`${s}${d} ${v}`,new un(u,g,_,h,y)}function mn(e,t){let n=ke(e.text),r=n===null?null:I(n.toLowerCase()),i=new Map;t.history.forEach((e,t)=>{i.has(e.id)||i.set(e.id,t)});let a=new Set,o=[];for(let n of[...t.history,...t.candidates]){if(a.has(n.id))continue;a.add(n.id);let s=i.get(n.id),c=hn(n,e,{matchLang:t.matchLang,preferred:r,phrases:t.phrases?.get(n.id)??[],logged:s===void 0?null:{count:t.usage.get(n.id)?.count??1,recency:s},pinned:n.id===t.prefer});c&&o.push(c)}return gn(o)}function hn(e,t,n){let r=n.preferred!==null&&e.ruKey?.folded===n.preferred,i=[...(n.phrases??[]).map(e=>[e,!0]),...e.keys(n.matchLang).map(e=>[e,!1])],a=null;for(let[e,n]of i){let r=Ve(e,t);r!==null&&(a===null||r<a[2])&&(a=[e,n,r])}if(a===null)return null;let[o,s,c]=a;if(!s&&!r&&(e.source===`starter`||e.source===`usda`))for(let e of o.cooking){if(t.cooking.has(e))continue;let n=Me[e].map(N);if(!(t.spellings[t.spellings.length-1]?.some(e=>!t.lastComplete&&n.some(t=>Ce(t,e)))??!1))return null}return{food:e,key:o,phrase:s,tier:c,relevance:_n(e,o,t,c,r,n.logged!==null),logged:n.logged,pinned:n.pinned??!1}}function gn(e){let t=e.map((e,t)=>({element:e,offset:t})).filter(({element:e})=>e.logged===null&&!e.pinned).sort((e,t)=>e.element.relevance===t.element.relevance?e.offset-t.offset:t.element.relevance-e.element.relevance).map(({element:e})=>e),n=e.map((e,t)=>({h:e,i:t})).filter(({h:e})=>e.logged!==null||e.pinned).map(({h:e,i:n})=>{let r=e.logged??{count:1,recency:0},i=e.relevance+(r.count>=2?.95:.65),a=t.findIndex(e=>e.relevance<=i);return{slot:e.pinned?0:a<0?t.length:a,key:[+!e.pinned,e.tier,r.count>=2?0:1,r.recency,n],item:e}}).sort((e,t)=>e.slot===t.slot?Te(e.key,t.key):e.slot-t.slot),r=[],i=0;return t.forEach((e,t)=>{for(;i<n.length&&n[i].slot<=t;)r.push(n[i++].item);r.push(e)}),r.concat(n.slice(i).map(e=>e.item))}function _n(e,t,n,r,i,a){let o=n.words,s=t.matchWords,c=[1,.85,.6][Math.min(r,2)],l=o[o.length-1];if(r===0&&!n.lastComplete&&l!==void 0&&!s.includes(l)){let e=s.find(e=>e.startsWith(l));e!==void 0&&(c=.7+.3*P(l)/P(e))}let u=!a&&i,d=c;return u||(d-=.3*Math.max(s.length-o.length,0)),s.length>=o.length&&o.every((e,t)=>e===s[t]||!n.lastComplete&&t===o.length-1&&s[t].startsWith(e))&&(d+=.1),u&&(d+=.3),e.source===`user`&&ze(t.folded,n.folded)&&(d+=.5),!a&&(e.source===`off`||e.source===`vkusvill`)&&!ze(t.folded,n.folded)&&!(e.brandKey?.chars.some(e=>n.spellings.some(t=>t.some(t=>we(e,t)||et(e,t))))??!1)&&--d,d+e.relevanceWeight}function vn(e){let[t,...n]=N(e);return t===void 0?e:t.toUpperCase()+n.join(``)}function yn(e,t){let n={pack:2,cup:3},r=dn.find(t=>e.portion(t)!==void 0);return t<=12&&r!==void 0&&t<=(n[r]??12)?r:e.portion(`ml`)!==void 0&&e.portion(`gram`)===void 0?`ml`:`gram`}function bn(e,t){let n=ln(e);if(!n.hasAmount||n.amount===null)return null;let r=n.explicitUnit?n.unit??`gram`:yn(t,n.amount);return r===`gram`||t.portion(r)!==void 0?[r,n.amount]:null}function xn(e){let t=dn.find(t=>e.portion(t)!==void 0);return t===void 0?e.portion(`ml`)===void 0?[`gram`,100]:[`ml`,250]:[t,1]}function Sn(e,t,n){let r=nn(e,t,n);return r.slice(r.indexOf(` `)+1)}function Cn(e,t){let n=N(e.normalize(`NFC`)),r=N(be(t.normalize(`NFC`))),i=0,a=0;for(;a<r.length;){if(i>=n.length)return null;let e=I(n[i].toLowerCase()),t=I(r[a].toLowerCase());if(e===t)i++,a++;else if(e===`,`)i++;else if(t===`,`)a++;else return null}let o=n.slice(i);if(t.endsWith(` `)){let e=0;for(;e<o.length&&(o[e]===`,`||me(o[e]));)e++;o=o.slice(e)}return o.join(``)}function wn(){if(typeof crypto.randomUUID==`function`)return crypto.randomUUID().toUpperCase();let e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``);return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`.toUpperCase()}var Tn=(e,t=R())=>`${e.name} ${nn(e.amount,e.unit,t)}`,En=e=>({foodId:e.food.id,name:e.label,unit:e.unit,amount:e.amount,grams:e.grams,nutrition:e.food.per100g.forGrams(e.grams)}),Dn=e=>({foodId:e.foodId,name:e.name,unit:e.unit,amount:e.unitAmount,grams:e.grams,nutrition:new L(e.kcal,e.protein,e.fat,e.carbs)}),On=(e,t,n)=>({dishId:t,position:n,foodId:e.foodId,name:e.name,unit:e.unit,unitAmount:e.amount,grams:e.grams,kcal:e.nutrition.kcal,protein:e.nutrition.protein,fat:e.nutrition.fat,carbs:e.nutrition.carbs}),kn=class{total;rawWeight;weight;servings;constructor(e,t,n,r){this.total=e,this.rawWeight=t,this.weight=n,this.servings=r}get per100g(){return this.weight<=0?L.zero:this.total.scaled(100/this.weight)}get servingGrams(){return this.servings<=0?this.weight:this.weight/this.servings}};function An(e,t=null,n=1){let r=e.reduce((e,t)=>e.plus(t.nutrition),L.zero),i=e.reduce((e,t)=>e+t.grams,0);return new kn(r,i,t!==null&&t>0?t:i,Math.max(n,1))}function jn(e,t,n){return Mn({name:t,nutrition:n.per100g,portionGrams:n.servingGrams,id:e,dishWeight:n.weight})}function Mn(e){return new ft({id:e.id??`user:${wn()}`,source:`user`,nameRu:vn(ye(e.name)),nameEn:null,externalId:e.barcode??null,per100g:e.nutrition,portions:(e.portionGrams??0)>0?[{unit:`portion`,grams:e.portionGrams}]:[],dishWeight:e.dishWeight??null})}var Nn=e=>typeof e==`object`&&!!e&&!Array.isArray(e),Pn=`krug-backup`,Fn=[`starter`,`off`,`usda`,`user`,`vkusvill`],In=[`gram`,`ml`,`piece`,`pack`,`spoon`,`teaspoon`,`slice`,`cup`,`portion`],Ln=[`unset`,`female`,`male`],Rn=class extends Error{kind;constructor(e){super(e),this.kind=e}},W=e=>typeof e==`string`?e:null,zn=(e,t)=>typeof t==`number`&&Number.isInteger(t)&&t>=0&&t<e.length?e[t]:null,G=e=>Yt(typeof e==`number`?e:null),Bn=e=>{let t=G(e);return t!==null&&Number.isInteger(t)?t:null};function Vn(e){let t=G(e.kcal),n=G(e.protein),r=G(e.fat),i=G(e.carbs);return t===null||n===null||r===null||i===null?null:new L(t,n,r,i)}function Hn(e,t=new Date){let n;try{n=JSON.parse(e)}catch{throw new Rn(`notABackup`)}if(!Nn(n)||n.format!==`krug-backup`||typeof n.version!=`number`)throw new Rn(`notABackup`);if(n.version>1)throw new Rn(`tooNew`);let r=e=>Array.isArray(n[e])?n[e].filter(Nn):[],i=H(Bt(2,t)).getTime(),a=e=>typeof e==`number`&&e>=0&&e<i?e:null,o={foods:[],ingredients:[],entries:[],usage:new Map,createdAt:new Map,profile:null},s=new Map;for(let e of r(`portions`)){let t=W(e.foodId),n=zn(In,e.unit),r=G(e.grams);t!==null&&n!==null&&r!==null&&s.set(t,[...s.get(t)??[],{unit:n,grams:r}])}for(let e of r(`foods`)){let t=W(e.id),n=zn(Fn,e.source),r=Vn(e);if(t===null||n===null||r===null)continue;o.foods.push(new ft({id:t,source:n,nameRu:W(e.nameRu),nameEn:W(e.nameEn),brand:W(e.brand),externalId:W(e.externalId),per100g:r,portions:s.get(t)??[],dishWeight:G(e.dishWeight)}));let i=a(e.createdAt);i!==null&&o.createdAt.set(t,i);let c=Bn(e.useCount);c!==null&&c>0&&o.usage.set(t,{count:c,lastUsed:a(e.lastUsedAt)??i??-621355968e5})}for(let e of r(`dishIngredients`)){let t=W(e.dishId),n=typeof e.position==`number`&&Number.isInteger(e.position)?e.position:null,r=W(e.name),i=zn(In,e.unit),a=G(e.unitAmount),s=G(e.grams),c=Vn(e);t!==null&&n!==null&&r!==null&&i!==null&&a!==null&&s!==null&&c!==null&&o.ingredients.push({dishId:t,position:n,foodId:W(e.foodId),name:r,unit:i,unitAmount:a,grams:s,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs})}for(let e of r(`entries`)){let t=W(e.id),n=W(e.dayKey),r=n===null?null:zt(n),s=W(e.name),c=a(e.loggedAt),l=zn(In,e.unit),u=G(e.grams),d=G(e.unitAmount),f=Vn(e);t===null||n===null||r===null||r.getTime()<0||r.getTime()>=i||s===null||c===null||l===null||u===null||d===null||f===null||o.entries.push({id:t,dayKey:n,loggedAt:c,foodId:W(e.foodId),name:s,grams:u,unit:l,unitAmount:d,kcal:f.kcal,protein:f.protein,fat:f.fat,carbs:f.carbs,counted:typeof e.counted!=`boolean`||e.counted})}if(Nn(n.profile)){let e=n.profile,t=Dt();t.heightCm=Bn(e.heightCm),t.weightKg=G(e.weightKg),t.sex=zn(Ln,e.sex)??`unset`,t.birthYear=Bn(e.birthYear),t.targetKcal=Bn(e.targetKcal)??t.targetKcal,t.targetProtein=Bn(e.targetProtein)??t.targetProtein,t.targetFat=Bn(e.targetFat)??t.targetFat,t.targetCarbs=Bn(e.targetCarbs)??t.targetCarbs,o.profile=t}return o}function Un(e){let t=(e.now??new Date).getTime(),n=e.ownFoods.flatMap(t=>e.ingredientsOf(t.id)),r=new Map;for(let t of e.ownFoods)r.has(t.id)||r.set(t.id,t);let i=[...e.entries.map(e=>e.foodId),...n.map(e=>e.foodId),...e.usage.keys()].filter(e=>e!==null);for(let t of i){if(r.has(t))continue;let n=e.food(t);n&&r.set(t,n)}let a=[...r.values()].sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));return{format:Pn,version:1,exportedAt:new Date(t).toISOString().replace(/\.\d{3}Z$/,`Z`),foods:a.map(n=>{let r=e.usage.get(n.id);return{id:n.id,source:Fn.indexOf(n.source),externalId:n.externalId,nameRu:n.nameRu,nameEn:n.nameEn,brand:n.brand,searchText:n.searchText,kcal:n.per100g.kcal,protein:n.per100g.protein,fat:n.per100g.fat,carbs:n.per100g.carbs,useCount:r?.count??0,lastUsedAt:r?Math.round(r.lastUsed):null,isFavorite:!1,createdAt:Math.round(e.createdAt.get(n.id)??t),bundled:!1,dishWeight:n.dishWeight}}),portions:a.flatMap(e=>e.portions.map(t=>({foodId:e.id,unit:In.indexOf(t.unit),grams:t.grams}))),dishIngredients:n.map(e=>({dishId:e.dishId,position:e.position,foodId:e.foodId,name:e.name,unit:In.indexOf(e.unit),unitAmount:e.unitAmount,grams:e.grams,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs})),entries:e.entries.map(e=>({id:e.id,dayKey:e.dayKey,loggedAt:Math.round(e.loggedAt),foodId:e.foodId,name:e.name,grams:e.grams,unit:In.indexOf(e.unit),unitAmount:e.unitAmount,kcal:e.kcal,protein:e.protein,fat:e.fat,carbs:e.carbs,counted:e.counted})),profile:{id:1,heightCm:e.profile.heightCm,weightKg:e.profile.weightKg,sex:Ln.indexOf(e.profile.sex),birthYear:e.profile.birthYear,targetKcal:e.profile.targetKcal,targetProtein:e.profile.targetProtein,targetFat:e.profile.targetFat,targetCarbs:e.profile.targetCarbs,localeOverride:null,onboardingDone:!1}}}function Wn(e){return JSON.stringify(e,(e,t)=>Nn(t)?Object.fromEntries(Object.entries(t).sort(([e],[t])=>e<t?-1:1)):t,2)}var Gn=e=>new L(e.kcal,e.protein,e.fat,e.carbs);function Kn(e,t=R()){return e.unitAmount>0?`${e.name} ${nn(e.unitAmount,e.unit,t)}`:e.name}var qn=6e3,Jn=`Krug/0.1 (web; https://novanikita.github.io/krug-web)`,Yn=class extends Error{constructor(){super(`rate limited`)}},Xn=class{perMinute;times=[];pausedUntil=0;constructor(e){this.perMinute=e}take(e=Date.now()){if(this.times=this.times.filter(t=>e-t<6e4),e<this.pausedUntil||this.times.length>=this.perMinute)throw new Yn;return this.times.push(e),()=>{let t=this.times.indexOf(e);t>=0&&this.times.splice(t,1)}}pause(e=Date.now()){this.pausedUntil=e+6e4}},Zn=`code,product_name,product_name_ru,product_name_en,brands,nutriments,serving_quantity,product_quantity`,Qn=class e{fetcher;searches=new Xn(8);reads=new Xn(12);constructor(e=(...e)=>fetch(...e)){this.fetcher=e}async search(t,n=`ru`,r=20){let i=new URL(`https://world.openfoodfacts.org/cgi/search.pl`);i.search=new URLSearchParams({search_terms:t,search_simple:`1`,action:`process`,json:`1`,page_size:String(r),lc:n,fields:Zn}).toString();let a=await this.get(i,this.searches);return a===null?[]:e.parseSearch(a)}async byBarcode(t){let n=new URL(`https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(t)}.json`);n.search=new URLSearchParams({fields:Zn}).toString();let r=await this.get(n,this.reads);return r===null?null:e.parseProduct(r)}async get(e,t){let n=t.take(),r;try{r=await this.fetcher(e,{headers:{"X-User-Agent":Jn},signal:AbortSignal.timeout(qn)})}catch(e){throw $n(e)&&n(),e}if(r.status===429||r.status===503)throw t.pause(),new Yn;return r.status===200?r.text():null}static parseSearch(t){let n=nr(t);return(Nn(n)&&Array.isArray(n.products)?n.products:[]).filter(Nn).flatMap(t=>{let n=e.toFood(t);return n?[n]:[]})}static parseProduct(t){let n=nr(t);return Nn(n)&&Nn(n.product)?e.toFood(n.product):null}static toFood(e){let t=Nn(e.nutriments)?e.nutriments:{},n=rr(t.energy_100g),r=rr(t[`energy-kcal_100g`])??(n===null?null:n/4.184),i=e.code===void 0||e.code===null?``:String(e.code);if(r===null||i===``)return null;let a=t=>{let n=e[t];return(typeof n==`string`?tr(n.trim()):null)||null},o=a(`product_name_ru`),s=a(`product_name_en`),c=a(`product_name`);if((o??s??c)===null)return null;let l=new L(r,rr(t.proteins_100g)??0,rr(t.fat_100g)??0,rr(t.carbohydrates_100g)??0);if(!l.isPossiblePer100g)return null;let u=[],d=Yt(rr(e.serving_quantity));d!==null&&d>0&&u.push({unit:`portion`,grams:d});let f=Yt(rr(e.product_quantity));f!==null&&f>0&&u.push({unit:`pack`,grams:f});let p=typeof e.brands==`string`?e.brands.split(`,`).find(e=>e!==``)?.trim()??null:null;return new ft({id:`off:${i}`,source:`off`,nameRu:o,nameEn:s??c,brand:tr(p),externalId:i,per100g:l,portions:u,rare:!St.isCaredFor(o??s??c,p)})}};function $n(e){return e instanceof TypeError||e instanceof DOMException&&(e.name===`TimeoutError`||e.name===`AbortError`)}var er=[[`&quot;`,`"`],[`&amp;`,`&`],[`&apos;`,`'`],[`&#39;`,`'`],[`&lt;`,`<`],[`&gt;`,`>`],[`&nbsp;`,` `]];function tr(e){if(!e)return e;let t=e;for(let[e,n]of er)t=t.replaceAll(e,n);return t}function nr(e){try{return JSON.parse(e)}catch{return null}}function rr(e){return typeof e==`number`?e:typeof e==`string`?Xt(e):null}var ir=[`и`,`and`];function ar(e){let t=N(e.normalize(`NFC`)),n=[],r=0,i=0,a=(e,n)=>t.slice(e,n).join(``),o=(e,t)=>{n.push(a(r,e)),r=t,i=t},s=e=>ln(a(r,e)).hasAmount,c=e=>e<t.length&&me(t[e]),l=e=>{if(e===0||!c(e-1))return null;for(let n of ir){let r=e+n.length;if(r<=t.length&&a(e,r).toLowerCase()===n&&c(r))return r}return null};for(;i<t.length;){let e=t[i],n=i+1;if(he(e)||e===`;`||(e===`,`||e===`+`)&&!(e===`,`&&i>0&&_e(t[i-1])&&n<t.length&&_e(t[n]))&&s(i)){o(i,n);continue}let r=l(i);r!==null&&s(i)?o(i,r):i=n}let u=r;for(;u<t.length&&me(t[u]);)u++;let d=a(u,t.length);return n.push(d),{foods:n.map(e=>e.trim()).filter(e=>N(e).some(ge)),tail:d}}var or=class e{_entries=[];_usage=new Map;_profile=Object.freeze(Dt());_ownIds=[];lang=R();catalog;db;off;phrasesCache=null;listeners=new Set;quiet=0;_version=0;static cachePerQuery=10;static clearMargin=.15;static clearFloor=.79;constructor(e){this.db=e.db??Ft.inMemory(),this.catalog=e.catalog,this.off=e.off??new Qn,this.catalog.add(this.db.foods()),this.reload()}reload(){this._entries=this.db.entries().map(e=>Object.freeze(e)),this._usage=this.db.usage(),this._profile=Object.freeze(this.db.profile()),this._ownIds=this.db.ownFoodIds()}get persistent(){return this.db.persistent}flushed(){return this.db.flushed()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}get version(){return this._version}changed(){if(this._version++,this.phrasesCache=null,this.quiet===0)for(let e of this.listeners)e()}together(e){this.quiet++;try{return e()}finally{this.quiet--,this.changed()}}get entries(){return this._entries}get usage(){return this._usage}get profile(){return this._profile}get ownFoods(){return this._ownIds.flatMap(e=>this.catalog.food(e)??[])}get loggedDays(){return[...new Set(this._entries.map(e=>e.dayKey))].sort().reverse()}ingredients(e){return this.db.ingredients(e)}entriesOn(e){return this._entries.filter(t=>t.dayKey===e).sort((e,t)=>e.loggedAt-t.loggedAt)}summary(e,t,n=new Date){let r=Vt(n),i=this._entries.filter(n=>n.counted&&Ut(n.dayKey,e)&&(!t||n.dayKey<=r)),a=i.reduce((e,t)=>e.plus(Gn(t)),L.zero);if(!t)return a;let o=new Set(i.map(e=>e.dayKey)).size;return o===0?L.zero:a.scaled(1/o)}get phrases(){if(this.phrasesCache)return this.phrasesCache;let e=new Map,t=new Set;for(let n of[...this._entries].sort((e,t)=>t.loggedAt-e.loggedAt)){if(n.foodId===null)continue;let r=this.catalog.food(n.foodId);if(!r)continue;let i=F(n.name),a=`${n.foodId}\n${i.toLowerCase()}`;i&&i!==r.nameRu&&i!==r.nameEn&&!t.has(a)&&(t.add(a),e.set(n.foodId,[...e.get(n.foodId)??[],new Ae(i)]))}return this.phrasesCache=e,e}history(e=300){return[...this._usage].sort(([,e],[,t])=>t.lastUsed-e.lastUsed).slice(0,e).flatMap(([e])=>this.catalog.food(e)??[])}lastAmount(e){let t=null;for(let n of this._entries)n.foodId===e&&(t===null||n.loggedAt>t.loggedAt)&&(t=n);return t?[t.unit,t.unitAmount]:null}guess(e,t={}){return this.lookup(e,t.remote??[],t.prefer??null,0).guess}candidates(e,t={}){return this.lookup(e,t.remote??[],null,t.limit??8).candidates}guessAndCandidates(e,t={}){let n=this.lookup(e,t.remote??[],t.prefer??null,t.limit??8);return{guess:n.guess,candidates:n.candidates}}clearGuess(e,t={}){let n=this.lookup(e,t.remote??[],null,0);return n.clear?n.guess:null}lookup(e,t,n,r){if(ln(e).term===``)return{guess:null,candidates:[],clear:!1};let i=this.history(),a=n===null?void 0:this.catalog.food(n);a&&!i.some(e=>e.id===n)&&(i=[a,...i]);let o=[],s=null,c=this.pools(e,t),l=this.phrases;for(let[e,t]of c.entries()){o=t.canonical?t.items:[...o,...t.items];let a=new fn(t.query),u=t.canonical?`ru`:this.lang,d=mn(a.key,{history:i,candidates:o,usage:this._usage,matchLang:u,prefer:n,phrases:l});if(d.length===0)continue;let f=pn(d[0],a,this.lang,e=>this.lastAmount(e),t.canonical,u),p=new Set,m=[];for(let e of d){if(m.length>=r)break;let t=e.food.name(this.lang).toLowerCase();p.has(t)||(p.add(t),m.push(e.food))}let h=new Set(o.map(e=>e.id)),g={guess:f,candidates:m,clear:e===0&&this.isClear(d)};if(e===c.length-1||d.some(e=>h.has(e.food.id)))return g;s??=g}return s??{guess:null,candidates:[],clear:!1}}isClear(t){let n=t[0];if(!n||n.tier>=2)return!1;if(n.logged!==null||n.pinned)return!0;if(n.relevance<e.clearFloor)return!1;let r=t.slice(1).filter(e=>e.logged===null);if(r.some(t=>t.tier<n.tier&&n.relevance-t.relevance<e.clearMargin+.3))return!1;let i=e=>{let t=new Set(e.key.matchWords),r=new Set(n.key.matchWords);return t.size===r.size&&[...t].every(e=>r.has(e))},a=r.find(e=>!i(e));return!a||n.relevance-a.relevance>=e.clearMargin}pools(e,t){let n=ln(e).term;if(n===``)return[];let r=(e,t=this.lang)=>this.catalog.search(e,{limit:60,usage:this._usage,lang:t}),i=r(n),a=new Set(i.map(e=>e.id)),o=[{query:e,items:[...i,...t.filter(e=>!a.has(e.id))],canonical:!1}],s=De(n)[0];s!==void 0&&P(s)>=4&&o.push({query:e,items:r(N(s).slice(0,3).join(``)),canonical:!1});let c=this.lang===`ru`?ot(e):null;return c!==null&&o.push({query:c,items:r(ln(c).term,`ru`),canonical:!0}),o}async searchOnline(t){try{let n=await this.off.search(t),r=n.filter(e=>!this.catalog.food(e.id));return this.remember(r.slice(0,e.cachePerQuery)),{term:t,items:n,offline:!1}}catch(e){return{term:t,items:[],offline:$n(e),limited:e instanceof Yn}}}async lookupBarcode(e){let t=this.catalog.foodByBarcode(e);if(t)return{food:t,offline:!1};try{let t=await this.off.byBarcode(e);return t?(this.catalog.add([t],!0),this.db.save([t],!0),{food:t,offline:!1}):{food:null,offline:!1}}catch(e){return{food:null,offline:$n(e)||e instanceof Yn}}}remember(e){e.length!==0&&(this.catalog.add(e),this.db.save(e,!1))}saveOwn(e){this.catalog.add([e],!0),this.db.save([e],!0),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}saveDish(e,t){this.catalog.add([e],!0),this.db.saveDish(e,t.map((t,n)=>On(t,e.id,n))),this._ownIds.includes(e.id)||(this._ownIds=[e.id,...this._ownIds]),this.changed()}deleteOwn(e){let t=this.db.deleteFood(e.id);return t?(this.catalog.remove(e.id),this._ownIds=this._ownIds.filter(t=>t!==e.id),this._entries=this._entries.map(t=>t.foodId===e.id?Object.freeze({...t,foodId:null}):t),this.changed(),t):null}restoreFood(e){this.db.restoreFood(e),this.catalog.add([e.food]),this._ownIds=this.db.ownFoodIds();let t=new Set(e.entryIds);this._entries=this._entries.map(n=>t.has(n.id)?Object.freeze({...n,foodId:e.food.id}):n),this.changed()}log(e,t,n,r,i={}){let a=i.now??new Date,o=i.replacing??null;this.catalog.food(e.id)||this.remember([e]);let s=t===`gram`?n:n*(e.portion(t)?.grams??1),c=e.per100g.forGrams(s);if(this.put({id:o?.id??wn(),dayKey:o?.dayKey??r,loggedAt:i.at??this.loggedAt(r,o,a),foodId:e.id,name:i.name??e.name(this.lang),grams:s,unit:t,unitAmount:n,kcal:c.kcal,protein:c.protein,fat:c.fat,carbs:c.carbs,counted:!0},o),o?.foodId!==e.id){let t={...this._usage.get(e.id)??{count:0,lastUsed:a.getTime()}};t.count+=1,t.lastUsed=a.getTime(),this._usage.set(e.id,t),this.db.saveUsage(t,e.id)}this.changed()}logSuggestion(e,t,n={}){this.log(e.food,e.unit,e.amount,t,{name:e.label,replacing:n.replacing,now:n.now})}logUncounted(e,t,n={}){let r=n.replacing??null,i=ln(e);!i.explicitUnit&&i.amount!==null&&i.amount<=12&&(i=new on(ye(e)));let a=i.amount??0,o=i.unit??`gram`;this.put({id:r?.id??wn(),dayKey:r?.dayKey??t,loggedAt:n.at??this.loggedAt(t,r,n.now??new Date),foodId:null,name:vn(i.term),grams:o===`gram`||o===`ml`?a:0,unit:o,unitAmount:a,kcal:0,protein:0,fat:0,carbs:0,counted:!1},r),this.changed()}logLine(e,t,n={}){let r=n.now??new Date,i=ar(e).foods,a=this.loggedAt(t,n.replacing??null,r);return this.together(()=>i.forEach((e,o)=>{let s=o===i.length-1,c=a+o,l=o===0?n.replacing??null:null,u=s?n.picked??null:null,d=u?bn(e,u):null;if(u&&d){this.log(u,d[0],d[1],t,{replacing:l,now:r,at:c});return}let f=s?this.guess(e,{remote:n.remote,prefer:i.length===1?n.prefer:null}):this.clearGuess(e);f?this.log(f.food,f.unit,f.amount,t,{name:f.label,replacing:l,now:r,at:c}):this.logUncounted(e,t,{replacing:l,now:r,at:c})})),i.length}loggedAt(e,t,n){if(t)return t.loggedAt;if(e===Vt(n))return n.getTime();let r=H(e);return r.setHours(n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),r.getTime()}put(e,t){let n=t?this._entries.findIndex(e=>e.id===t.id):-1,r=Object.freeze(e);this._entries=n>=0?this._entries.map((e,t)=>t===n?r:e):[...this._entries,r],this.db.saveEntry(e)}get onboarded(){return this.db.meta(`onboardingDone`)===`true`}finishOnboarding(e){this.together(()=>{e&&this.updateProfile(e),this.db.setMeta(`onboardingDone`,`true`),this.db.setMeta(`onboardingProfile`,JSON.stringify(this._profile))})}updateProfile(e){let t={...this._profile};e(t),!kt(t,this._profile)&&(this._profile=Object.freeze(t),this.db.saveProfile(t),this.changed())}backupDocument(e=new Date){return Un({entries:this._entries,ownFoods:this.ownFoods,ingredientsOf:e=>this.ingredients(e),food:e=>this.catalog.food(e),usage:this._usage,createdAt:this.db.ownCreatedAt(),profile:this._profile,now:e})}importBackup(e){let t=typeof e==`string`?Hn(e):e,n=t.foods.filter(e=>!this.catalog.food(e.id)),r=new Set(n.map(e=>e.id)),i=e=>e!==null&&(r.has(e)||this.catalog.food(e))?e:null,a=this.db.meta(`onboardingProfile`),o=this.db.importBackup({replaceProfile:a!==null&&kt(JSON.parse(a),this._profile),foods:n,createdAt:t.createdAt,ingredients:t.ingredients.map(e=>({...e,foodId:i(e.foodId)})),entries:t.entries.map(e=>({...e,foodId:i(e.foodId)})),usage:new Map([...t.usage].filter(([e])=>i(e)!==null)),profile:t.profile});return this.catalog.add(n),this.reload(),this.changed(),o}restoreBackup(e){if(!this.persistent)return{message:z(`Дневник сейчас не сохраняется — перенос не выполнен. Перезапустите приложение и попробуйте снова`),done:!1};try{let t=this.importBackup(e);return{message:t.entries===0&&t.foods===0?z(`Всё из этой копии уже есть в дневнике`):z(`Добавлено записей: %lld, продуктов: %lld`,[t.entries,t.foods]),done:!0}}catch(e){return e instanceof Rn&&e.kind===`tooNew`?{message:z(`Эта копия сделана более новой версией Круга — обновите приложение`),done:!1}:e instanceof Rn?{message:z(`Это не файл резервной копии Круга`),done:!1}:{message:z(`Не получилось — попробуйте ещё раз`),done:!1}}}delete(e){this._entries=this._entries.filter(t=>t.id!==e.id),this.db.deleteEntry(e.id),this.changed()}restoreEntry(e){this._entries.some(t=>t.id===e.id)||(this._entries=[...this._entries,Object.freeze({...e})],this.db.saveEntry(e),this.changed())}},sr=1,cr=[`food`,`usage`,`entry`,`dishIngredient`,`profile`,`meta`];async function lr(e=`krug`,t=()=>{}){try{let n=await dr(e);return new Ft(await fr(n),new ur(e,n,t))}catch(e){return t(e),Ft.inMemory()}}var ur=class{name;onError;pending=Promise.resolve();connection;constructor(e,t,n){this.name=e,this.onError=n,this.connection=this.watch(t)}write(e){this.pending=this.pending.then(()=>this.apply(e).catch(this.onError))}flushed(){return this.pending}async apply(e){try{await this.transact(await this.db(),e)}catch(t){if(!(t instanceof DOMException&&(t.name===`InvalidStateError`||t.name===`UnknownError`)))throw t;this.connection=null,await this.transact(await this.db(),e)}}async db(){return this.connection??=this.watch(await dr(this.name))}watch(e){return e.onclose=()=>{this.connection===e&&(this.connection=null)},e.onversionchange=()=>{e.close(),this.connection===e&&(this.connection=null)},e}transact(e,t){let n=e.transaction([...new Set(t.map(e=>e.table))],`readwrite`),r=pr(n);try{for(let e of t){let t=n.objectStore(e.table);e.value===void 0?t.delete(e.key):t.put(e.value,e.key)}}catch(e){throw n.abort(),r.catch(()=>{}),e}return r}};function dr(e){return new Promise((t,n)=>{let r=indexedDB.open(e,sr);r.onupgradeneeded=()=>{for(let e of cr)r.result.objectStoreNames.contains(e)||r.result.createObjectStore(e)},r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error),r.onblocked=()=>n(Error(`blocked`))})}async function fr(e){let t=e.transaction(cr,`readonly`),n=e=>new Promise((n,r)=>{let i=t.objectStore(e).getAll();i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)}),r=jt();return r.food=await n(`food`),r.usage=await n(`usage`),r.entry=await n(`entry`),r.dishIngredient=await n(`dishIngredient`),r.profile=(await n(`profile`))[0]??null,r.meta=(await n(`meta`)).map(e=>[e.key,e.value]),r}function pr(e){return new Promise((t,n)=>{e.oncomplete=()=>t(),e.onerror=()=>n(e.error),e.onabort=()=>n(e.error??new DOMException(`aborted`,`AbortError`))})}var mr,K,hr,gr,_r=0,vr=[],q=t,yr=q.__b,br=q.__r,xr=q.diffed,Sr=q.__c,Cr=q.unmount,wr=q.__;function Tr(e,t){q.__h&&q.__h(K,e,_r||t),_r=0;var n=K.__H||(K.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return _r=1,Er(Ir,e)}function Er(e,t,n){var r=Tr(mr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ir(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=K,!K.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=!1,o=r.__c.props!==e;if(r.__c.__H.__.some(function(e){if(e.__N){i=!0;var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a){var s=a.call(this,e,t,n);return i?s||o:s}return!i||o};K.__f=!0;var a=K.shouldComponentUpdate,o=K.componentWillUpdate;K.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},K.shouldComponentUpdate=i}return r.__N||r.__}function Y(e,t){var n=Tr(mr++,3);!q.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,K.__H.__h.push(n))}function Dr(e,t){var n=Tr(mr++,4);!q.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,K.__h.push(n))}function X(e){return _r=5,Or(function(){return{current:e}},[])}function Or(e,t){var n=Tr(mr++,7);return Fr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function kr(e){var t=K.context[e.__c],n=Tr(mr++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(K)),t.props.value):e.__}function Ar(){for(var e;e=vr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Nr),t.__h.some(Pr),t.__h=[]}catch(n){t.__h=[],q.__e(n,e.__v)}}}q.__b=function(e){K=null,yr&&yr(e)},q.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),wr&&wr(e,t)},q.__r=function(e){br&&br(e),mr=0;var t=(K=e.__c).__H;t&&(hr===K?(t.__h=[],K.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(Nr),t.__h.some(Pr),t.__h=[],mr=0)),hr=K},q.diffed=function(e){xr&&xr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vr.push(t)!==1&&gr===q.requestAnimationFrame||((gr=q.requestAnimationFrame)||Mr)(Ar)),t.__H.__.some(function(e){e.u&&=(e.__H=e.u,void 0)})),hr=K=null},q.__c=function(e,t){t.some(function(e){try{e.__h.some(Nr),e.__h=e.__h.filter(function(e){return!e.__||Pr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],q.__e(n,e.__v)}}),Sr&&Sr(e,t)},q.unmount=function(e){Cr&&Cr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Nr(e)}catch(e){t=e}}),n.__H=void 0,t&&q.__e(t,n.__v))};var jr=typeof requestAnimationFrame==`function`;function Mr(e){var t,n=function(){clearTimeout(r),jr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);jr&&(t=requestAnimationFrame(n))}function Nr(e){var t=K,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),K=t}function Pr(e){var t=K;e.__c=e.__(),K=t}function Fr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function Ir(e,t){return typeof t==`function`?t(e):t}var Lr=pe(null);function Z(){let e=kr(Lr);if(!e)throw Error(`no store`);let[,t]=Er((e,t)=>e+1,0);return Y(()=>e.subscribe(()=>t()),[e]),e}function Rr(e,t,n){let[r,i]=J(()=>{try{let r=localStorage.getItem(e);return n.includes(r)?r:t}catch{return t}});return[r,t=>{i(t);try{localStorage.setItem(e,t)}catch{}}]}function zr(e){let[t,n]=J(()=>matchMedia(e).matches);return Y(()=>{let t=matchMedia(e),r=()=>n(t.matches);return t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var Br=`(min-width: 1024px)`;function Vr(){let[e,t]=J(()=>({online:navigator.onLine,reconnects:0}));return Y(()=>{let e=()=>t(e=>({online:!0,reconnects:e.reconnects+1})),n=()=>t(e=>({...e,online:!1}));return addEventListener(`online`,e),addEventListener(`offline`,n),()=>{removeEventListener(`online`,e),removeEventListener(`offline`,n)}},[]),e}var Hr=0;Array.isArray;function Q(e,n,r,i,a,o){n||={};var s,c,l=n;if(`ref`in l)for(c in l={},n)c==`ref`?s=n[c]:l[c]=n[c];var u={type:e,props:l,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Hr,__i:-1,__u:0,__source:a,__self:o};if(typeof e==`function`&&(s=e.defaultProps))for(c in s)l[c]===void 0&&(l[c]=s[c]);return t.vnode&&t.vnode(u),u}var $=(e,{size:t=22,label:n},r=!1)=>Q(`svg`,{width:t,height:t,viewBox:`0 0 24 24`,fill:r?`currentColor`:`none`,stroke:r?`none`:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,role:n?`img`:void 0,"aria-label":n,"aria-hidden":!n||void 0,children:e}),Ur=e=>$(Q(`path`,{d:`M2.5 5.5h19M2.5 12h19M2.5 18.5h19`}),e),Wr=e=>$(Q(`path`,{"fill-rule":`evenodd`,d:`M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-3.3 5.3a1 1 0 0 0-1.4 1.4L10.6 12l-3.3 3.3a1 1 0 1 0 1.4 1.4L12 13.4l3.3 3.3a1 1 0 0 0 1.4-1.4L13.4 12l3.3-3.3a1 1 0 0 0-1.4-1.4L12 10.6 8.7 7.3Z`}),e,!0),Gr=e=>$(Q(`path`,{d:`m15 18-6-6 6-6`}),e),Kr=e=>$(Q(`path`,{d:`m9 18 6-6-6-6`}),e),qr=e=>$(Q(`path`,{d:`M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.4 0-8 2.4-8 5.3 0 .9.7 1.7 1.6 1.7h12.8c.9 0 1.6-.8 1.6-1.7C20 16.4 16.4 14 12 14Z`}),e,!0),Jr=e=>$(Q(`path`,{d:`M4 13.5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-6Zm6-5c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-11Zm6-4c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v15c0 .8-.7 1.5-1.5 1.5h-1c-.8 0-1.5-.7-1.5-1.5v-15Z`}),e,!0),Yr=e=>$(Q(`path`,{d:`M6.5 2h11c.8 0 1.5.7 1.5 1.5v17.3c0 .8-.9 1.3-1.6.8L12 17.8l-5.4 3.8c-.7.5-1.6 0-1.6-.8V3.5C5 2.7 5.7 2 6.5 2Z`}),e,!0),Xr=e=>$(Q(`path`,{d:`M12 5v14M5 12h14`}),e),Zr=e=>$(Q(`path`,{d:`M12 3v12M8 7l4-4 4 4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),Qr=e=>$(Q(`path`,{d:`M12 3v12M8 11l4 4 4-4M5 12v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7`}),e),$r=e=>$(Q(`path`,{"fill-rule":`evenodd`,d:`M9.2 4h5.6c.6 0 1.1.3 1.4.8L17.4 7H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1.6l1.2-2.2c.3-.5.8-.8 1.4-.8ZM12 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z`}),e,!0),ei=e=>$(Q(C,{children:[Q(`path`,{d:`M12 2a3.5 3.5 0 0 0-3.5 3.5v6a3.5 3.5 0 0 0 7 0v-6A3.5 3.5 0 0 0 12 2Z`}),Q(`path`,{d:`M6 11a1 1 0 0 0-2 0 8 8 0 0 0 7 7.9V21H8.5a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2H13v-2.1A8 8 0 0 0 20 11a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z`})]}),e,!0),ti=e=>$(Q(`path`,{d:`m8 9 4-4 4 4M8 15l4 4 4-4`}),e),ni=`modulepreload`,ri=function(e){return`/krug-web/`+e},ii={},ai=function(e){return e.pathname.endsWith(`.css`)},oi=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},si=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ri(t,n);let r=s(t),i=ai(r);return oi(ii,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:ni,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},ci=[`ean_13`,`ean_8`,`upc_e`],li=null;function ui(){return li??=(async()=>{let e=globalThis.BarcodeDetector;if(e&&(await e.getSupportedFormats().catch(()=>[])).includes(`ean_13`))return new e({formats:ci});let[{BarcodeDetector:t,prepareZXingModule:n},{default:r}]=await Promise.all([si(()=>import(`./ponyfill-DUnUwklG.js`),[]),si(()=>import(`./zxing_reader-DuNp1kbU.js`),[])]);return n({overrides:{locateFile:(e,t)=>e.endsWith(`.wasm`)?r:t+e}}),new t({formats:ci})})(),li.catch(()=>li=null),li}function di({onCode:e,onClose:t}){let n=X(null),[r,i]=J(null);return Y(()=>{let t=null,r=!1,a;return(async()=>{try{t=await navigator.mediaDevices.getUserMedia({video:{facingMode:`environment`,width:{ideal:1280},height:{ideal:720}},audio:!1})}catch(e){let t=e?.name;i(z(t===`NotAllowedError`||t===`SecurityError`?`Нет доступа к камере — разрешите его в настройках браузера`:`Камера недоступна на этом устройстве`));return}if(r)return t.getTracks().forEach(e=>e.stop());let o=n.current;o.srcObject=t,await o.play().catch(()=>{});let s;try{s=await ui()}catch{i(z(`Не получилось — попробуйте ещё раз`));return}let c=0,l=async()=>{if(!r){if(o.readyState>=2){let t=await s.detect(o).then(e=>(c=0,e),()=>(c+=1,[]));if(c>=10){i(z(`Не получилось — попробуйте ещё раз`));return}let n=t[0]?.rawValue;if(n&&!r){r=!0,navigator.vibrate?.(30),e(n);return}}a=setTimeout(l,120)}};l()})(),()=>{r=!0,clearTimeout(a),t?.getTracks().forEach(e=>e.stop())}},[]),Q(`div`,{class:`scanner`,role:`dialog`,"aria-modal":`true`,"aria-label":z(`Сканировать штрихкод`),children:[Q(`video`,{ref:n,playsInline:!0,muted:!0,"aria-hidden":`true`}),Q(`div`,{class:`scanner-frame`,"aria-hidden":`true`}),Q(`button`,{type:`button`,class:`scanner-chip scanner-cancel`,onClick:t,children:z(`Отмена`)}),Q(`p`,{class:`scanner-chip scanner-caption`,role:`status`,children:r??z(`Наведите камеру на штрихкод`)})]})}var fi=globalThis.SpeechRecognition??globalThis.webkitSpeechRecognition,pi=()=>fi!==void 0;function mi(e,t){if(!fi)return t.onProblem(z(`Не получилось — попробуйте ещё раз`)),()=>{};let n=new fi;return n.lang=_t(e),n.interimResults=!0,n.continuous=!1,n.onresult=e=>{let n=Array.from(e.results);t.onText(n.map(e=>e[0].transcript).join(``).trim(),n.length>0&&n.every(e=>e.isFinal))},n.onerror=e=>{e.error!==`no-speech`&&e.error!==`aborted`&&t.onProblem(e.error===`not-allowed`||e.error===`service-not-allowed`?z(`Нет доступа к микрофону или распознаванию речи — разрешите в настройках браузера`):e.error===`network`?z(`Голосовой ввод не работает без сети`):e.error===`audio-capture`?z(`Микрофон не найден`):z(`Не получилось — попробуйте ещё раз`))},n.onend=()=>t.onDone(),n.start(),()=>n.stop()}var hi=[];function gi({options:e,value:t,onChange:n,label:r,segmented:i=!1}){let a=Math.max(0,e.findIndex(e=>e.value===t));return Q(`div`,{class:`pill${i?` segmented`:``}`,role:`radiogroup`,"aria-label":r,style:{"--count":e.length,"--index":a},children:[Q(`span`,{class:`pill-thumb`,"aria-hidden":`true`}),e.map(e=>Q(`button`,{type:`button`,role:`radio`,"aria-checked":e.value===t,"aria-label":e.name,class:e.value===t?`on`:``,onClick:()=>n(e.value),children:e.text},e.value))]})}function _i({value:e,onChange:t,options:n,label:r}){return Q(`span`,{class:`picker`,children:[Q(`span`,{"aria-hidden":`true`,children:n.find(t=>t.value===e)?.text}),Q(ti,{size:15}),Q(`select`,{class:`picker-select`,"aria-label":r,value:e,onChange:e=>t(e.currentTarget.value),children:n.map(e=>Q(`option`,{value:e.value,children:e.text},e.value))})]})}function vi({x:e,y:t,openedAt:n,onClose:r,children:i}){let a=X(null),[o,s]=J({left:e,top:t});return Dr(()=>{let n=a.current.getBoundingClientRect(),r=t+8+n.height<=innerHeight-8;s({left:Math.min(Math.max(8,e-n.width*.1),innerWidth-n.width-8),top:r?t+8:Math.max(8,t-8-n.height)})},[e,t]),Q(`div`,{class:`popover-backdrop`,onClick:()=>Date.now()-n>400&&r(),onContextMenu:e=>(e.preventDefault(),r()),children:Q(`div`,{ref:a,class:`popover`,role:`menu`,style:{left:`${o.left}px`,top:`${o.top}px`},onClick:e=>e.stopPropagation(),children:i})})}function yi(e=4e3){let[t,n]=J([]),r=X();return Y(()=>()=>clearTimeout(r.current),[]),{items:t,add(t){n(e=>[...e,t]),clearTimeout(r.current),r.current=setTimeout(()=>n([]),e)},take(){clearTimeout(r.current);let e=t;return n([]),e}}}function bi({shown:e,onRestore:t}){return e?Q(`div`,{class:`undo`,role:`status`,children:[Q(`span`,{children:z(`Удалено`)}),Q(`button`,{type:`button`,onClick:t,children:z(`Вернуть`)})]}):null}function xi({title:e,onClose:t,closeText:n=z(`Закрыть`),cancel:r=!1,action:i,children:a,dismissible:o=!0}){let s=X(null),c=X({onClose:t,dismissible:o});return c.current={onClose:t,dismissible:o},Y(()=>{let e={};hi.push(e);let t=document.activeElement,n=t=>{t.key===`Escape`&&hi.at(-1)===e&&(t.preventDefault(),c.current.dismissible&&c.current.onClose())};return addEventListener(`keydown`,n),s.current?.contains(document.activeElement)||s.current?.focus(),()=>{hi.splice(hi.indexOf(e),1),removeEventListener(`keydown`,n),t?.focus?.({preventScroll:!0})}},[]),Q(`div`,{class:`sheet-backdrop`,onClick:e=>e.target===e.currentTarget&&o&&t(),children:Q(`div`,{class:`sheet`,role:`dialog`,"aria-modal":`true`,"aria-label":e,ref:s,tabIndex:-1,children:[Q(`div`,{class:`sheet-bar`,children:[Q(`button`,{type:`button`,class:`glass sheet-close${r?` tinted`:``}`,onClick:t,children:n}),Q(`h2`,{class:`sheet-title`,children:e}),Q(`div`,{class:`sheet-action`,children:i})]}),Q(`div`,{class:`sheet-body`,children:a})]})})}var Si=e=>e===void 0?``:String(e);function Ci({request:e,onSave:t,onClose:n}){let[r,i]=J(e.name),[a,o]=J(Si(e.initial?.kcal)),[s,c]=J(Si(e.initial?.protein)),[l,u]=J(Si(e.initial?.fat)),[d,f]=J(Si(e.initial?.carbs)),[p,m]=J(Si(e.existing?.portion(`portion`)?.grams)),h=X(null),g=X(null),_=r.trim()!==``&&(Zt(a)??-1)>=0;Y(()=>{(e.name?g:h).current?.focus()},[]);let v=()=>{let i=Zt(a);_&&i!==null&&(t(Mn({name:r,nutrition:new L(i,Zt(s)??0,Zt(l)??0,Zt(d)??0),portionGrams:Zt(p),id:e.existing?.id,barcode:e.barcode??null})),n())},y=(e,t,n,r,i)=>Q(`label`,{class:`food-number`,children:[Q(`input`,{ref:i,inputMode:`decimal`,placeholder:`0`,value:e,onInput:e=>t(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()}),Q(`span`,{style:{color:`var(--${r})`},children:n})]});return Q(xi,{title:z(`Свой продукт`),onClose:n,closeText:z(`Отмена`),cancel:!0,action:Q(`button`,{type:`button`,class:`glass sheet-confirm`,disabled:!_,onClick:v,children:z(`Сохранить`)}),children:Q(`div`,{class:`food-form`,children:[e.hint&&Q(`p`,{class:`hint`,children:e.hint}),Q(`textarea`,{ref:h,class:`food-name`,rows:1,placeholder:z(`Название`),"aria-label":z(`Название`),value:r,autocapitalize:`sentences`,onInput:e=>i(e.currentTarget.value.replace(/[\r\n]+/g,` `)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g.current?.focus())}}),Q(`div`,{class:`food-per`,children:z(`на 100 г`)}),Q(`div`,{class:`food-numbers`,children:[y(a,o,z(`Ккал`),`kcalInk`,g),y(s,c,z(`Б`),`proteinInk`),y(l,u,z(`Ж`),`fatInk`),y(d,f,z(`У`),`carbsInk`)]}),Q(`label`,{class:`food-portion`,children:[Q(`span`,{children:z(`Вес порции, г`)}),Q(`input`,{inputMode:`decimal`,placeholder:`—`,value:p,onInput:e=>m(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&v()})]})]})})}function wi(e,t){if(!t||!e)return null;let n=N(t),r=N(e);return t.toLowerCase().startsWith(e.toLowerCase())?n.length>r.length?n.slice(r.length).join(``):null:`${e.endsWith(` `)?``:` `}→ ${t}`}function Ti({text:e,onText:t,suggestion:n,onSubmit:r,onGhostTap:i,onFocus:a,onBlur:o,fieldRef:s,placeholder:c=z(`Введите продукт…`),id:l}){let u=wi(e,n),d=X(null),f=e=>{e.value.trim()===``?e.blur():r(e.value)};return Q(`div`,{class:`ghost-field`,children:[Q(`div`,{class:`ghost-layer`,"aria-hidden":`true`,children:[Q(`span`,{class:`ghost-typed`,children:e}),u!==null&&Q(`span`,{class:`ghost-rest`,ref:d,children:u}),`​`]}),Q(`textarea`,{ref:e=>{e?.setAttribute(`autocorrect`,`off`),typeof s==`function`?s(e):s&&(s.current=e)},id:l,rows:1,value:e,placeholder:c,"aria-label":c,"aria-description":n?z(`Подсказка: %@`,[n]):void 0,enterkeyhint:`go`,autocomplete:`off`,spellcheck:!1,autocapitalize:`sentences`,onFocus:a,onBlur:o,onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&!e.isComposing&&(e.preventDefault(),f(e.currentTarget))},onBeforeInput:e=>{(e.inputType===`insertLineBreak`||e.inputType===`insertParagraph`)&&(e.preventDefault(),f(e.currentTarget))},onInput:e=>{let n=e.currentTarget.value;t(/[\r\n]/.test(n)?n.split(/[\r\n]+/).map(e=>e.trim()).filter(Boolean).join(`; `):n)},onClick:e=>{if(!i||!d.current)return;let{clientX:t,clientY:n}=e;[...d.current.getClientRects()].some(e=>t>=e.left-4&&t<=e.right+4&&n>=e.top-4&&n<=e.bottom+4)&&i()}})]})}var Ei=null,Di=new Set;addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),Ei=e;for(let e of Di)e()}),addEventListener(`appinstalled`,()=>{Ei=null;for(let e of Di)e()});var Oi=e=>(Di.add(e),()=>Di.delete(e));function ki(){return matchMedia(`(display-mode: standalone)`).matches||navigator.standalone===!0}var Ai=()=>Ei!==null;async function ji(){let e=Ei;if(e){Ei=null;try{await e.prompt()}catch{}finally{for(let e of Di)e()}}}function Mi(){return/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform===`MacIntel`&&navigator.maxTouchPoints>1}function Ni({show:e}){let[t,n]=Rr(`install.dismissed`,`no`,[`no`,`yes`]),[,r]=Er((e,t)=>e+1,0);return Y(()=>Oi(()=>r()),[]),!e||t===`yes`||ki()||!(Ai()||Mi())?null:Q(`div`,{class:`banner compact`,role:`note`,children:[Q(`b`,{children:z(`Добавьте Круг на экран «Домой»`)}),Q(`p`,{children:Ai()?z(`Так дневник надёжно хранится на телефоне и открывается как приложение.`):z(`В Safari: «Поделиться» → «На экран „Домой“».`)}),Q(`div`,{class:`banner-actions`,children:[Ai()&&Q(`button`,{type:`button`,class:`link strong`,onClick:()=>ji(),children:z(`Установить`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>n(`yes`),children:z(`Не сейчас`)})]})]})}function Pi({items:e,onPick:t}){let n=Z();return Q(`div`,{class:`matches`,role:`listbox`,"aria-label":z(`Другие варианты`),children:[e.map(e=>Q(`button`,{type:`button`,role:`option`,"aria-selected":!1,class:`match`,onPointerDown:e=>e.preventDefault(),onClick:()=>t(e),children:[Q(`span`,{class:`match-name`,children:e.name(n.lang)}),e.brand&&Q(`span`,{class:`match-brand`,children:e.brand}),Q(`span`,{class:`match-num`,children:Jt(e.per100g.kcal)})]},e.id)),e.length===0&&Q(`div`,{class:`status`,children:z(`Других вариантов нет`)})]})}var Fi=e=>F(ln(e).term);function Ii(e,t){return e?.term===Fi(t)?e.items:[]}var Li=600;function Ri(e,t){let n=Vr(),r=X(new Map),i=X(new Set),[,a]=Er((e,t)=>e+1,0),[o,s]=J(0),c=Fi(t),l=r.current.get(c)??null,u=Or(()=>P(c)>=3&&e.clearGuess(t)===null,[t,e.version])&&!(l&&!l.offline&&!l.limited),d=`${c}\n${n.reconnects}\n${o}`;return Y(()=>{if(!u)return;let t=setTimeout(async()=>{let t=await e.searchOnline(c);r.current.set(c,t),i.current.add(d),t.limited&&setTimeout(()=>s(e=>e+1),6e4),a()},Li);return()=>clearTimeout(t)},[d,u]),{remote:l,searching:u&&!i.current.has(d)}}var zi=[`kcal`,`protein`,`fat`,`carbs`],Bi={kcal:`К`,protein:`Б`,fat:`Ж`,carbs:`У`},Vi={kcal:`Калории`,protein:`Белки`,fat:`Жиры`,carbs:`Углеводы`},Hi=e=>z(Bi[e]),Ui=e=>z(Vi[e]),Wi=e=>`var(--${e}Ink)`,Gi=e=>zi[(zi.indexOf(e)+1)%zi.length];function Ki(e,t){return e===`kcal`?Jt(t.kcal):U(t[e])}function qi(e,t){let n=(e,t)=>t>0?e/t:0;return[{progress:n(e.kcal,t.kcal),color:`kcal`},{progress:n(e.protein,t.protein),color:`protein`},{progress:n(e.fat,t.fat),color:`fat`},{progress:n(e.carbs,t.carbs),color:`carbs`}]}function Ji({children:e}){let t=X(null),n=X(null),[r,i]=J(1);return Dr(()=>{let e=()=>{let e=n.current.offsetWidth;i(e>0?Math.max(.5,Math.min(1,t.current.clientWidth/e)):1)};e();let r=new ResizeObserver(e);return r.observe(t.current),r.observe(n.current),()=>r.disconnect()},[]),Q(`div`,{class:`fit-line`,ref:t,children:Q(`div`,{class:`fit-line-inner`,ref:n,style:{transform:`scale(${r})`},children:e})})}function Yi(e,t,n){let r=n,i=n,a=e-n,o=t-n;if(a<=r||o<=i)return``;let s=Math.min(a-r,o-i)/2;return`M ${(r+a)/2} ${i} L ${a-s} ${i} A ${s} ${s} 0 0 1 ${a-s} ${o} L ${r+s} ${o} A ${s} ${s} 0 0 1 ${r+s} ${i} Z`}function Xi({rings:e,stroke:t=13,gap:n=3,label:r,children:i}){let a=X(null),[o,s]=J({w:0,h:0});Dr(()=>{let e=a.current,t=()=>s({w:e.clientWidth,h:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let c=e.length*(t+n)+4;return Q(`div`,{class:`stadium`,ref:a,role:`img`,"aria-label":r,children:[Q(`svg`,{width:o.w,height:o.h,viewBox:`0 0 ${o.w||1} ${o.h||1}`,"aria-hidden":`true`,children:o.w>0&&e.map((e,r)=>{let i=Yi(o.w,o.h,t/2+r*(t+n)),a=Math.max(0,e.progress),s=Math.min(Math.max(a-1,0),.999),c=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,"stroke-linecap":`round`,children:[Q(`path`,{d:i,stroke:c,class:`ring-track`}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${Math.min(a,1)} 1`,opacity:+(a>0)}}),Q(`path`,{d:i,stroke:`var(--ringShadow)`,pathLength:1,class:`ring-fill ring-tip`,style:{strokeDasharray:`0.012 1`,strokeDashoffset:-s,opacity:+(a>1),filter:`blur(${t*.3}px)`}}),Q(`path`,{d:i,stroke:c,pathLength:1,class:`ring-fill`,style:{strokeDasharray:`${s} 1`,opacity:+(a>1)}})]},e.color)})}),Q(`div`,{class:`stadium-content`,style:{padding:`${c}px`},children:i})]})}function Zi({rings:e,stroke:t=8,gap:n=3,children:r}){let i=X(null),[a,o]=J(0);Dr(()=>{let e=i.current,t=()=>o(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[]);let s=a/2;return Q(`div`,{class:`activity`,ref:i,children:[Q(`svg`,{width:a,height:a,viewBox:`0 0 ${a||1} ${a||1}`,"aria-hidden":`true`,children:a>0&&e.map((e,r)=>{let i=s-t/2-r*(t+n);if(i<=0)return null;let a=Math.min(Math.max(e.progress,0),1),o=`var(--${e.color})`;return Q(`g`,{"stroke-width":t,fill:`none`,children:[Q(`circle`,{cx:s,cy:s,r:i,stroke:o,class:`ring-track`}),Q(`circle`,{cx:s,cy:s,r:i,stroke:o,"stroke-linecap":`round`,pathLength:1,transform:`rotate(-90 ${s} ${s})`,class:`ring-fill ring-fill-circle`,style:{strokeDasharray:`${a} 1`,opacity:+(a>0)}})]},e.color)})}),r&&Q(`div`,{class:`activity-content`,children:r})]})}var Qi=()=>[{value:`day`,text:z(`Д`),name:z(`День`)},{value:`week`,text:z(`Н`),name:z(`Неделя`)},{value:`month`,text:z(`М`),name:z(`Месяц`)}];function $i({dayKey:e,period:t,onPeriod:n}){let r=Z(),i=t===`day`?r.summary([e,e],!1):r.summary(t===`week`?Gt(e):Kt(e),!0),a=`${z(`Калории`)} ${Jt(i.kcal)}, ${z(`Белки`)} ${U(i.protein)}, ${z(`Жиры`)} ${U(i.fat)}, ${z(`Углеводы`)} ${U(i.carbs)}`;return Q(`section`,{class:`summary`,"aria-label":z(`Сводка`),children:[Q(gi,{options:Qi(),value:t,onChange:n,label:z(`Период`)}),Q(Xi,{rings:qi(i,Ot(r.profile)),label:a,children:Q(`div`,{class:`summary-numbers`,"aria-hidden":`true`,children:[Q(Ji,{children:[Q(`span`,{class:`ink-kcal`,children:z(`Ккал`)}),` `,Jt(i.kcal)]}),Q(Ji,{children:[Q(`span`,{class:`ink-protein`,children:z(`Б`)}),` `,U(i.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:z(`Ж`)}),` `,U(i.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:z(`У`)}),` `,U(i.carbs)]})]})})]})}var ea=864e5,ta=e=>Math.round((H(e).getTime()-It(new Date).getTime())/ea);function na({wide:e,onMenu:t,showDay:n,onDay:r}){let i=Z(),a=i.lang,[o,s]=J(0),[c,l]=J(null),u=Bt(o),d=i.loggedDays.at(-1),f=Math.min(-365,d?ta(d):0),[p,m]=J(``),[h,g]=J(!1),[_,v]=J(null),[y,b]=Rr(`diary.metric`,`kcal`,zi),[x,S]=J(`day`),C=yi(),[w,T]=J(!1),[E,D]=J(null),[O,k]=J(0),[ee,A]=J(null),[j,te]=J(!1),[ne,M]=J(!1),[re,ie]=J(!1),ae=X(()=>{}),[oe,se]=J(null),ce=X(null),le=ar(p).tail,ue=Fi(le),de=X({text:p,editing:_,dayKey:u});de.current={text:p,editing:_,dayKey:u};let fe=()=>ce.current?.focus({preventScroll:!0}),pe=X(null);Y(()=>{let e=pe.current;O&&e&&(e.classList.remove(`missed`),e.offsetWidth,e.classList.add(`missed`))},[O]);let{remote:N,searching:P}=Ri(i,le),{suggestion:me,matches:he}=Or(()=>{let e=ar(p),t=e.tail;if(t.trim()===``)return{suggestion:null,matches:[]};let n=e.foods.length<=1?_?.foodId??null:null,r=Ii(N,t),a=w?i.guessAndCandidates(t,{remote:r,prefer:n}):{guess:i.guess(t,{remote:r,prefer:n}),candidates:[]},o=p.slice(0,p.length-t.length),s=a.guess,c=s&&(o===``||!(o+s.text).toLowerCase().startsWith(p.toLowerCase())?s.text:o+s.text);return{suggestion:s&&new un(s.food,s.unit,s.amount,s.label,c),matches:a.candidates}},[p,N,w,_,i.version,a]);Y(()=>r(u),[u]),Y(()=>{n&&_e(ta(n.key))},[n]);let ge=X(()=>{});ge.current=e=>{e.altKey&&(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&p===``&&!document.querySelector(`[role=dialog]`)?(e.preventDefault(),ve(e.key===`ArrowLeft`?-1:1)):(document.activeElement===null||document.activeElement===document.body)&&e.key.length===1&&e.key!==` `&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&fe()},Y(()=>{if(!e)return;requestAnimationFrame(fe);let t=e=>ge.current(e);return addEventListener(`keydown`,t),()=>removeEventListener(`keydown`,t)},[e]);function _e(e){let t=Math.min(1,Math.max(f,e));t!==o&&(l(t<o?`back`:`forward`),s(t),v(null),T(!1),_&&m(``))}let ve=e=>_e(o+e);function F(e){let t=e.normalize(`NFC`);m(t),ar(t).tail.trim()===``&&T(!1)}function ye(e){let t=ar(e),n=t.tail,r=Ii(N,n),a=t.foods.length<=1?_?.foodId??null:null;t.foods.length===0||P&&Fi(n)===ue&&i.guess(n,{remote:r,prefer:a})===null?k(e=>e+1):be(()=>i.logLine(e,u,{replacing:_,remote:r,prefer:_?.foodId??null}))}function be(t){re&&ae.current(),t(),v(null),T(!1),m(``),e?fe():ce.current?.blur()}function xe(e){let{text:t,editing:n,dayKey:r}=de.current;T(!1);let o=ar(t).tail;/\p{L}/u.test(o)&&bn(o,e)!==null?be(()=>i.logLine(t,r,{replacing:n,picked:e})):(m(`${t.slice(0,t.length-o.length)}${e.name(a)} `),fe())}function Se(e){e.dayKey===u&&(re&&ae.current(),A(null),v(e),m(Kn(e,a)),fe(),T(!e.counted))}function Ce(){v(null),m(``),T(!1)}function we(e){A(null),_?.id===e.id&&Ce(),i.delete(e),C.add(e)}async function Te(e){M(!1),se(z(`Ищу…`));let t=await i.lookupBarcode(e);se(null),t.food?xe(t.food):D({name:Fi(ar(de.current.text).tail),barcode:e,hint:t.offline?z(`Нет сети — штрихкод не проверить. Можно заполнить продукт сейчас, он запомнится`):z(`Штрихкод пока никому не известен — заполните продукт, и он запомнится`)})}function Ee(){re?ae.current():(se(null),ie(!0),ae.current=mi(a,{onText:(e,t)=>{F(e),t&&fe()},onDone:()=>{ie(!1),ae.current=()=>{}},onProblem:se}))}Y(()=>()=>ae.current(),[]);function De(){g(!1),_&&!E&&!e&&Ce()}let I=i.entriesOn(u),Oe=_===null?-1:I.findIndex(e=>e.id===_.id),ke=le.trim()!==``,Ae=Q(`div`,{class:`input-line`,ref:pe,style:{order:Oe>=0?Oe*2+1:I.length*2},children:[Q(`div`,{class:`input-row`,children:[Q(Ti,{fieldRef:ce,text:p,onText:F,suggestion:me?.text??null,onSubmit:ye,onGhostTap:()=>T(e=>!e&&le.trim()!==``),onFocus:()=>g(!0),onBlur:De}),p!==``&&!re?Q(`button`,{type:`button`,class:`input-tool`,"aria-label":z(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>{m(``),T(!1),fe()},children:Q(Wr,{})}):_===null&&Q(`span`,{class:`input-tools`,children:[Q(`button`,{type:`button`,class:`input-tool`,"aria-label":z(`Сканировать штрихкод`),onClick:()=>(se(null),M(!0)),children:Q($r,{})}),pi()&&Q(`button`,{type:`button`,class:`input-tool${re?` listening`:``}`,"aria-label":z(re?`Остановить диктовку`:`Диктовать`),onClick:Ee,children:Q(ei,{})})]})]}),oe&&Q(`div`,{class:`status`,children:oe}),w&&Q(Pi,{items:he,onPick:xe}),ke&&(P&&!me?Q(`div`,{class:`status`,children:z(`Ищу…`)}):Q(`div`,{class:`status`,children:[!me&&Q(`div`,{children:N?.limited?z(`Поиск в сети просит подождать минуту — ищу только на этом устройстве`):N?.offline?z(`Нет сети — ищу только на этом устройстве`):z(`Ничего не найдено`)}),Q(`button`,{type:`button`,class:`link`,onPointerDown:e=>e.preventDefault(),onClick:()=>D({name:ue}),children:z(`Не нашли? Добавить новый продукт`)})]}))]});return Q(`div`,{class:`diary${h?` typing`:``}`,children:[Q(`div`,{class:`diary-column`,children:[Q(`header`,{class:`diary-header`,children:[Q(`button`,{type:`button`,class:`header-button`,"aria-label":z(`Меню`),onClick:t,children:Q(Ur,{size:26})}),Q(`div`,{class:`header-day`,children:[e&&Q(`button`,{type:`button`,class:`header-chevron`,"aria-label":z(`Раньше`),onClick:()=>ve(-1),disabled:o<=f,children:Q(Gr,{size:18})}),Q(`button`,{type:`button`,class:`header-title`,onClick:()=>_e(0),children:Ht(u,new Date,a)}),e&&Q(`button`,{type:`button`,class:`header-chevron`,"aria-label":z(`Позже`),onClick:()=>ve(1),disabled:o>=1,children:Q(Kr,{size:18})})]}),Q(`button`,{type:`button`,class:`header-button header-metric`,style:{color:Wi(y)},"aria-label":Ui(y),onClick:()=>b(Gi(y)),children:Hi(y)})]}),!i.persistent&&!j&&Q(`div`,{class:`banner`,role:`alert`,children:[Q(`b`,{children:z(`Дневник не сохраняется`)}),Q(`p`,{children:z(`Не удалось открыть хранилище браузера. Записи этого сеанса пропадут, когда страница закроется.`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>te(!0),children:z(`Понятно`)})]}),!e&&Q(Ni,{show:i.entries.length>0&&!h}),Q(ra,{day:u,turn:c,swipeable:!h,onSwipe:ve,onTapBelow:()=>{A(null),fe()},children:[I.map((e,t)=>Q(ia,{entry:e,order:t*2,hidden:_?.id===e.id,metric:y,onEdit:Se,onMenu:(t,n)=>A({entry:e,x:t,y:n,at:Date.now()}),onDelete:we},e.id)),Ae]})]}),(e||!h)&&Q($i,{dayKey:u,period:x,onPeriod:S}),ee&&Q(vi,{x:ee.x,y:ee.y,openedAt:ee.at,onClose:()=>A(null),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>Se(ee.entry),children:z(`Изменить`)}),Q(`button`,{type:`button`,role:`menuitem`,class:`danger`,onClick:()=>we(ee.entry),children:z(`Удалить`)})]}),Q(bi,{shown:C.items.length>0,onRestore:()=>{for(let e of C.take())i.restoreEntry(e)}}),ne&&Q(di,{onCode:Te,onClose:()=>M(!1)}),E&&Q(Ci,{request:E,onClose:()=>{D(null),fe()},onSave:e=>{i.saveOwn(e),xe(e)}})]})}function ra({children:e,day:t,turn:n,swipeable:r,onSwipe:i,onTapBelow:a}){let o=X(null),s=X(null);return Y(()=>{let e=s.current;e&&n&&(e.classList.remove(`turn-back`,`turn-forward`),e.offsetWidth,e.classList.add(`turn-${n}`),e.scrollTop=0)},[t]),Q(`div`,{ref:s,class:`day-page`,onTouchStart:e=>{let t=e.touches[0];o.current=r&&e.touches.length===1?{x:t.clientX,y:t.clientY}:null},onTouchEnd:e=>{let t=o.current;if(o.current=null,!t)return;let n=e.changedTouches[0],r=n.clientX-t.x,a=n.clientY-t.y;Math.abs(r)>60&&Math.abs(r)>Math.abs(a)*1.5&&i(r>0?-1:1)},onClick:e=>{e.target===e.currentTarget&&a()},children:e})}function ia({entry:e,order:t,hidden:n,metric:r,onEdit:i,onMenu:a,onDelete:o}){let s=Z(),c=X(null),l=()=>{c.current&&clearTimeout(c.current.timer)};return Q(`div`,{class:`entry`,style:{order:t},hidden:n,role:`button`,tabIndex:0,"aria-description":z(`Изменить`),onClick:()=>{c.current?.fired?c.current=null:i(e)},onKeyDown:t=>{t.key===`Enter`&&i(e),(t.key===`Delete`||t.key===`Backspace`)&&o(e)},onContextMenu:e=>{e.preventDefault(),a(e.clientX,e.clientY)},onPointerDown:e=>{if(e.pointerType!==`touch`)return;let{clientX:t,clientY:n}=e;c.current={x:t,y:n,fired:!1,timer:setTimeout(()=>{c.current&&(c.current.fired=!0),a(t,n)},500)}},onPointerMove:e=>{let t=c.current;t&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>10&&l()},onPointerUp:l,onPointerCancel:l,children:[Q(`span`,{class:`entry-name`,children:Kn(e,s.lang)}),e.counted?Q(`span`,{class:`entry-num`,style:{color:Wi(r)},"aria-label":`${Ui(r)} ${Ki(r,e)}`,children:Ki(r,e)}):Q(`span`,{class:`entry-q`,"aria-label":z(`Не посчитано`),children:`?`})]})}function aa({onClose:e,onRoute:t,onDay:n,selectedDay:r}){let i=Z(),a=(e,n,r)=>Q(`button`,{type:`button`,class:`row row-link`,onClick:()=>t(r),children:[Q(`span`,{class:`row-icon`,children:n}),e]});return Q(xi,{title:z(`Круг`),onClose:e,children:[Q(`div`,{class:`group`,children:[a(z(`Профиль`),Q(qr,{}),{kind:`profile`}),a(z(`Статистика`),Q(Jr,{}),{kind:`stats`}),a(z(`Мои продукты`),Q(Yr,{}),{kind:`myFoods`})]}),i.loggedDays.length>0&&Q(`div`,{class:`group`,children:i.loggedDays.map(e=>Q(`button`,{type:`button`,class:`row row-link${e===r?` selected`:``}`,onClick:()=>n(e),children:Ht(e,new Date,i.lang)},e))})]})}function oa(){try{let e=localStorage.getItem(`theme`);return e===`light`||e===`dark`?e:`system`}catch{return`system`}}function sa(e){let t=document.documentElement;e===`system`?delete t.dataset.theme:t.dataset.theme=e;try{e===`system`?localStorage.removeItem(`theme`):localStorage.setItem(`theme`,e)}catch{}}function ca({onClose:e}){let t=Z(),n=t.profile,r=new Date().getFullYear(),[i,a]=J(oa()),[o,s]=J(null),[c,l]=J(null),u=async e=>{let{legalHTML:t}=await si(async()=>{let{legalHTML:e}=await import(`./documents-Co0hBUpq.js`);return{legalHTML:e}},[]);l({doc:e,html:t(e).html})},d=X(null),f=e=>{let t=Zt(e);return t!==null&&Number.isInteger(t)?t:null};function p(){try{let e=new Blob([Wn(t.backupDocument())],{type:`application/json`}),n=document.createElement(`a`);n.href=URL.createObjectURL(e),n.download=`krug-backup-${Vt()}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),6e4)}catch{s(z(`Не получилось — попробуйте ещё раз`))}}async function m(e){if(e)try{s(t.restoreBackup(await e.text()).message)}catch{s(z(`Не получилось — попробуйте ещё раз`))}}return Q(xi,{title:z(`Профиль`),onClose:e,children:[Q(`div`,{class:`group`,children:[Q(la,{label:z(`Рост`),stored:n.heightCm===null?``:String(n.heightCm),unit:z(`см`),save:e=>t.updateProfile(t=>t.heightCm=f(e))}),Q(la,{label:z(`Вес`),stored:n.weightKg===null?``:an(n.weightKg),unit:z(`кг`),decimal:!0,save:e=>t.updateProfile(t=>t.weightKg=Zt(e))}),Q(la,{label:z(`Возраст`),stored:n.birthYear===null?``:String(r-n.birthYear),unit:z(`лет`),save:e=>t.updateProfile(t=>t.birthYear=f(e)===null?null:r-f(e))}),Q(`div`,{class:`row`,children:[Q(`span`,{children:z(`Пол`)}),Q(_i,{label:z(`Пол`),value:n.sex,onChange:e=>t.updateProfile(t=>t.sex=e),options:[{value:`unset`,text:z(`Не указан`)},{value:`female`,text:z(`Женский`)},{value:`male`,text:z(`Мужской`)}]})]})]}),Q(`h3`,{class:`group-title`,children:z(`Цели на день`)}),Q(`div`,{class:`group`,children:[Q(la,{label:z(`Калории`),ink:`kcalInk`,stored:String(n.targetKcal),unit:z(`ккал`),save:e=>t.updateProfile(t=>t.targetKcal=f(e)??t.targetKcal)}),Q(la,{label:z(`Белки`),ink:`proteinInk`,stored:String(n.targetProtein),unit:z(`г`),save:e=>t.updateProfile(t=>t.targetProtein=f(e)??t.targetProtein)}),Q(la,{label:z(`Жиры`),ink:`fatInk`,stored:String(n.targetFat),unit:z(`г`),save:e=>t.updateProfile(t=>t.targetFat=f(e)??t.targetFat)}),Q(la,{label:z(`Углеводы`),ink:`carbsInk`,stored:String(n.targetCarbs),unit:z(`г`),save:e=>t.updateProfile(t=>t.targetCarbs=f(e)??t.targetCarbs)})]}),Q(`div`,{class:`group`,children:[Q(`div`,{class:`row`,children:[Q(`span`,{children:z(`Тема`)}),Q(_i,{label:z(`Тема`),value:i,onChange:e=>{a(e),sa(e)},options:[{value:`system`,text:z(`Как в системе`)},{value:`light`,text:z(`Светлая`)},{value:`dark`,text:z(`Тёмная`)}]})]}),Q(`div`,{class:`row`,children:[Q(`span`,{children:z(`Язык`)}),Q(_i,{label:z(`Язык`),value:R(),onChange:e=>{try{localStorage.setItem(`language`,e)}catch{}location.reload()},options:[{value:`ru`,text:`Русский`},{value:`en`,text:`English`}]})]})]}),Q(`h3`,{class:`group-title`,children:z(`Резервная копия`)}),Q(`div`,{class:`group`,children:[Q(`button`,{type:`button`,class:`row row-link accent`,onClick:p,children:[Q(`span`,{class:`row-icon`,children:Q(Zr,{})}),z(`Сохранить копию`)]}),Q(`button`,{type:`button`,class:`row row-link accent`,onClick:()=>d.current?.click(),children:[Q(`span`,{class:`row-icon`,children:Q(Qr,{})}),z(`Восстановить из копии`)]}),Q(`input`,{ref:d,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:e=>{m(e.currentTarget.files?.[0]),e.currentTarget.value=``}})]}),Q(`p`,{class:`group-footer`,children:[z(`Дневник хранится в этом браузере`),`. `,z(`Сохраните копию в профиле: без неё при смене браузера или устройства записи не перенести.`)]}),o&&Q(`p`,{class:`group-footer message`,role:`status`,children:o}),Q(`div`,{class:`legal`,children:[Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`terms`),children:z(`Пользовательское соглашение`)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>u(`privacy`),children:z(`Политика конфиденциальности`)}),Q(`p`,{children:z(`Данные о продуктах: Open Food Facts (ODbL), ВкусВилл, USDA FoodData Central`)})]}),c&&Q(xi,{title:c.doc===`terms`?z(`Пользовательское соглашение`):z(`Политика конфиденциальности`),onClose:()=>l(null),children:Q(`div`,{class:`legal-doc`,dangerouslySetInnerHTML:{__html:c.html}})})]})}function la({label:e,stored:t,unit:n,decimal:r=!1,ink:i,save:a}){let[o,s]=J(t),[c,l]=J(!1);Y(()=>{c||s(t)},[t,c]);let u=X();return u.current={text:o,editing:c,save:a},Y(()=>()=>{let e=u.current;e?.editing&&e.save(e.text)},[]),Q(`label`,{class:`row`,children:[Q(`span`,{style:i?{color:`var(--${i})`}:void 0,children:e}),Q(`input`,{class:`row-number`,inputMode:r?`decimal`:`numeric`,placeholder:`—`,value:o,onFocus:()=>l(!0),onInput:e=>s(e.currentTarget.value),onBlur:()=>{a(o),l(!1)},onKeyDown:e=>e.key===`Enter`&&e.currentTarget.blur()}),Q(`span`,{class:`row-unit`,children:n})]})}var ua=[`day`,`week`,`month`,`halfYear`,`year`],da={day:`День`,week:`Неделя`,month:`Месяц`,halfYear:`Полгода`,year:`Год`},fa={day:`ДН`,week:`НЕД`,month:`МЕС`,halfYear:`6 МЕС`,year:`ГОД`},pa=(e,t=R())=>z(da[e],[],t),ma=(e,t=R())=>z(fa[e],[],t);function ha(e,t=0,n=new Date){let r=It(n),i=new Date(r.getFullYear(),r.getMonth(),1),a,o;switch(e){case`day`:o=B(r,-t),a=o;break;case`week`:o=B(r,-7*t),a=B(o,-6);break;case`month`:a=Lt(i,-t),o=t===0?r:B(Lt(a,1),-1);break;case`halfYear`:case`year`:{let n=e===`halfYear`?6:12,s=Lt(i,-n*t);a=Lt(s,-(n-1)),o=t===0?r:B(Lt(s,1),-1)}}return[V(a),V(o)]}function ga(e){let t=new Map;for(let n of e)n.counted&&t.set(n.dayKey,(t.get(n.dayKey)??L.zero).plus(Gn(n)));return t}function _a(e){return e.size===0?L.zero:[...e.values()].reduce((e,t)=>e.plus(t),L.zero).scaled(1/e.size)}function va(e){let t=new Map;for(let[n,r]of e){let e=n.slice(0,7);t.has(e)||t.set(e,new Map),t.get(e).set(n,r)}return new Map([...t].map(([e,t])=>[e,_a(t)]))}function ya(e,t,n=R(),r=new Date){return e===`day`?Ht(t[0],r,n):z(`В среднем за %@`,[ba(t,n)],n)}function ba([e,t],n=R()){let r=H(e),i=H(t),a=e=>xt(n,e),o=a({day:`numeric`,month:`short`,year:`numeric`}),s=a({day:`numeric`,month:`short`}),c=a({month:`short`,year:`numeric`}),l=a({month:`short`});if(e===t)return o.format(i);let u=r.getFullYear()===i.getFullYear(),d=u&&r.getMonth()===i.getMonth(),f=Math.round((i.getTime()-r.getTime())/864e5);return r.getDate()===1&&!d&&f>40?u?`${l.format(r)} – ${c.format(i)}`:`${c.format(r)} – ${c.format(i)}`:d?`${r.getDate()}–${o.format(i)}`:u?`${s.format(r)} – ${o.format(i)}`:`${o.format(r)} – ${o.format(i)}`}function xa({onClose:e}){let t=Z(),n=t.lang,[r,i]=J(`week`),[a,o]=J(0),s=ha(r,a),c=ga(t.entries.filter(e=>Ut(e.dayKey,s))),l=_a(c),u=Ot(t.profile),d=X(null),f=e=>o(t=>Math.max(0,t+e)),p=(e,t,n)=>Q(`div`,{class:`tile`,children:[Q(`div`,{class:`tile-label`,children:e}),Q(`div`,{class:`tile-value`,style:{color:`var(--${n})`},children:t})]});return Q(xi,{title:z(`Статистика`),onClose:e,children:Q(`div`,{class:`stats`,onTouchStart:e=>d.current={x:e.touches[0].clientX,y:e.touches[0].clientY},onTouchEnd:e=>{let t=d.current;if(!t)return;let n=e.changedTouches[0].clientX-t.x,r=e.changedTouches[0].clientY-t.y;Math.abs(n)>40&&Math.abs(n)>Math.abs(r)*1.5&&f(n>0?1:-1)},children:[Q(gi,{options:ua.map(e=>({value:e,text:ma(e,n),name:pa(e,n)})),value:r,onChange:e=>{i(e),o(0)},label:z(`Период`),segmented:!0}),Q(`div`,{class:`stats-headline`,children:[Q(`div`,{class:`stats-range`,children:[Q(`button`,{type:`button`,"aria-label":z(`Раньше`),onClick:()=>f(1),children:Q(Gr,{size:16})}),Q(`span`,{children:ya(r,s,n)}),Q(`button`,{type:`button`,"aria-label":z(`Позже`),onClick:()=>f(-1),disabled:a===0,children:Q(Kr,{size:16})})]}),Q(`div`,{class:`stats-kcal`,children:[Q(`span`,{class:`stats-kcal-value`,children:Jt(l.kcal)}),Q(`span`,{class:`stats-kcal-unit`,children:z(`ккал`)})]})]}),Q(`div`,{class:`stats-rings`,children:Q(Zi,{rings:qi(l,u),stroke:24,gap:5})}),Q(`div`,{class:`tiles`,children:[p(z(`Калории`),Jt(l.kcal),`kcalInk`),p(z(`Белки`),U(l.protein),`proteinInk`),p(z(`Жиры`),U(l.fat),`fatInk`),p(z(`Углеводы`),U(l.carbs),`carbsInk`)]}),Q(`div`,{class:`stats-days`,children:[r===`week`&&Q(Sa,{days:c,targets:u,from:H(s[0])}),r===`month`&&Q(Ca,{days:c,targets:u,month:H(s[0])}),(r===`halfYear`||r===`year`)&&Q(wa,{days:c,targets:u,from:H(s[0]),to:H(s[1])})]}),c.size===0&&Q(`p`,{class:`stats-empty`,children:z(`Нет записей за этот период`)})]})})}function Sa({days:e,targets:t,from:n}){let r=xt(Z().lang,{weekday:`short`});return Q(`div`,{class:`week-strip`,children:Array.from({length:7},(i,a)=>{let o=B(n,a),s=V(o);return Q(`div`,{class:`week-day`,children:[Q(`span`,{class:`caption`,children:r.format(o)}),Q(Zi,{rings:qi(e.get(s)??L.zero,t),stroke:3.5,gap:1.5}),Q(`span`,{class:`caption day-number${s===Vt()?` today`:``}`,children:o.getDate()})]},s)})})}function Ca({days:e,targets:t,month:n}){let r=Z(),i=new Date(n.getFullYear(),n.getMonth(),1),a=B(Lt(i,1),-1).getDate(),o=(i.getDay()+6)%7,s=new Date,c=i.getFullYear()===s.getFullYear()&&i.getMonth()===s.getMonth()?s.getDate():1/0,l=xt(r.lang,{weekday:`narrow`});return Q(`div`,{class:`month-grid`,children:[Array.from({length:7},(e,t)=>Q(`span`,{class:`caption`,children:l.format(B(i,t-o))},`l${t}`)),Array.from({length:o},(e,t)=>Q(`span`,{},`e${t}`)),Array.from({length:a},(n,r)=>{let a=r+1,o=a>c,s=B(i,r);return Q(Zi,{rings:qi(o?L.zero:e.get(V(s))??L.zero,t),stroke:3,gap:1.5,children:Q(`span`,{class:`caption${a===c?` today`:``}${o?` future`:``}`,children:a})},a)})]})}function wa({days:e,targets:t,from:n,to:r}){let i=Z(),a=va(e),o=new Date(n.getFullYear(),n.getMonth(),1),s=(r.getFullYear()-o.getFullYear())*12+r.getMonth()-o.getMonth()+1,c=xt(i.lang,{month:`short`});return Q(`div`,{class:`months-grid${s>6?` many`:``}`,children:Array.from({length:s},(e,n)=>{let r=Lt(o,n);return Q(`div`,{class:`month`,children:[Q(Zi,{rings:qi(a.get(V(r).slice(0,7))??L.zero,t),stroke:5,gap:2.5}),Q(`span`,{class:`footnote`,children:c.format(r)})]},n)})})}function Ta({dishId:e,onClose:t}){let n=Z(),r=e===null?void 0:n.catalog.food(e),[i,a]=J(()=>r?.name(n.lang)??``),[o,s]=J(()=>e?n.ingredients(e).map(Dn):[]),[c,l]=J(()=>{let e=o.reduce((e,t)=>e+t.grams,0);return r?.dishWeight!=null&&Math.abs(r.dishWeight-e)>.5?U(r.dishWeight):``}),[u,d]=J(()=>{let e=r?.portion(`portion`)?.grams;return r?.dishWeight!=null&&e?String(Math.round(r.dishWeight/e)):`1`}),[f,p]=J(``),[m,h]=J(null),[g,_]=J(!1),v=X(null),y=X(null),b=An(o,Zt(c),Number.parseInt(u.trim(),10)||1),x=i.trim()!==``&&o.length>0,[S]=J(o),C=o.length!==S.length||o.some((e,t)=>e!==S[t]);Y(()=>{e||v.current?.focus()},[]);let{remote:w}=Ri(n,f),{suggestion:T,matches:E}=Or(()=>{if(f.trim()===``)return{suggestion:null,matches:[]};let e=Ii(w,f);if(g){let t=n.guessAndCandidates(f,{remote:e});return{suggestion:t.guess,matches:t.candidates}}return{suggestion:n.guess(f,{remote:e}),matches:[]}},[f,w,g,n.entries]);function D(e){let t=n.guess(e,{remote:Ii(w,e)});if(!t)return;let r=En(t);s(e=>m!==null&&m<e.length?e.map((e,t)=>t===m?r:e):[...e,r]),h(null),_(!1),p(``),y.current?.focus()}function O(e){h(e),p(Tn(o[e],n.lang)),y.current?.focus()}function k(e){m!==null&&(m===e?(h(null),p(``)):m>e&&h(m-1)),s(t=>t.filter((t,n)=>n!==e))}function ee(){x&&(n.saveDish(jn(e??`user:${wn()}`,i,b),o),t())}let A=(e,t)=>Q(`span`,{class:t?`macros large`:`macros`,children:[Q(`span`,{class:`ink-kcal`,children:z(`Ккал`)}),` `,Jt(e.kcal),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-protein`,children:z(`Б`)}),` `,U(e.protein),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:z(`Ж`)}),` `,U(e.fat),Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:z(`У`)}),` `,U(e.carbs)]}),j=b.per100g,te=j.forGrams(b.servingGrams),ne=m??o.length;return Q(xi,{title:z(`Своё блюдо`),onClose:t,dismissible:!(x&&C),action:Q(`button`,{type:`button`,class:`glass sheet-confirm`,disabled:!x,onClick:ee,children:z(`Сохранить`)}),children:Q(`div`,{class:`dish`,children:[Q(`input`,{ref:v,class:`dish-name`,placeholder:z(`Название блюда`),"aria-label":z(`Название блюда`),value:i,autocapitalize:`sentences`,onInput:e=>a(e.currentTarget.value),onKeyDown:e=>e.key===`Enter`&&y.current?.focus()}),Q(`h3`,{class:`caption-title`,children:z(`Ингредиенты`)}),Q(`div`,{class:`dish-lines`,children:[o.map((e,t)=>Q(`div`,{class:`entry`,style:{order:t*2},hidden:m===t,role:`button`,tabIndex:0,onClick:()=>O(t),onKeyDown:e=>(e.key===`Delete`||e.key===`Backspace`)&&k(t),children:[Q(`span`,{class:`entry-name`,children:Tn(e,n.lang)}),Q(`span`,{class:`entry-num ink-kcal`,children:Jt(e.nutrition.kcal)}),Q(`button`,{type:`button`,class:`entry-remove`,"aria-label":z(`Удалить`),onClick:e=>{e.stopPropagation(),k(t)},children:Q(Wr,{size:18})})]},t)),Q(`div`,{class:`input-line`,style:{order:ne*2+(m===null?0:1)},children:[Q(`div`,{class:`input-row`,children:[Q(Ti,{fieldRef:y,text:f,onText:e=>{p(e),e.trim()===``&&_(!1)},suggestion:T?.text??null,onSubmit:D,onGhostTap:()=>_(e=>!e&&f.trim()!==``),onBlur:()=>{m!==null&&(h(null),p(``))}}),f!==``&&Q(`button`,{type:`button`,class:`input-tool`,"aria-label":z(`Очистить`),onPointerDown:e=>e.preventDefault(),onClick:()=>p(``),children:Q(Wr,{})})]}),g&&Q(Pi,{items:E,onPick:e=>{_(!1);let t=ln(f).term,r=F(N(F(f)).slice(N(t).length).join(``));p(`${e.name(n.lang)} ${r}`),y.current?.focus()}})]})]}),o.length===0&&f===``&&Q(`p`,{class:`hint-text`,children:z(`Впишите ингредиент и сколько его пошло — как строку в дневнике: «творог 5% 400», Enter`)}),o.length>0&&Q(`div`,{class:`dish-raw`,children:[Q(`span`,{children:z(`Всего сырого`)}),Q(`span`,{children:z(`%@ г · %@ ккал`,[U(b.rawWeight),Jt(b.total.kcal)])})]}),Q(`h3`,{class:`caption-title`,children:z(`Готовое блюдо`)}),Q(`div`,{class:`group`,children:[Q(`label`,{class:`row`,children:[Q(`span`,{children:z(`Вес после готовки, г`)}),Q(`input`,{class:`row-number`,inputMode:`decimal`,placeholder:U(b.rawWeight),value:c,onInput:e=>l(e.currentTarget.value)})]}),Q(`label`,{class:`row`,children:[Q(`span`,{children:z(`Порций`)}),Q(`input`,{class:`row-number`,inputMode:`numeric`,placeholder:`1`,value:u,onInput:e=>d(e.currentTarget.value)})]})]}),Q(`p`,{class:`group-footer`,children:z(`Суп набирает воду, запеканка теряет: если взвесили готовое — впишите, иначе считаем по сырому.`)}),Q(`div`,{class:`card dish-result`,children:[Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:z(`1 порция`)}),Q(`span`,{children:[U(b.servingGrams),` `,z(`г`)]})]}),A(te,!0),Q(`hr`,{}),Q(`div`,{class:`dish-result-head`,children:[Q(`span`,{children:z(`на 100 г`)}),A(j,!1)]})]})]})})}function Ea({onClose:e}){let t=Z(),n=t.ownFoods,[r,i]=J(!1),[a,o]=J(null),[s,c]=J(void 0),[l,u]=J(null),[d,f]=J(null),p=yi(),m=e=>{if(e.dishWeight!==null){c(e.id);return}let n=e.per100g;o({name:e.name(t.lang),initial:{kcal:n.kcal,protein:n.protein,fat:n.fat,carbs:n.carbs},barcode:e.externalId,existing:e})},h=e=>{u(null);let n=t.deleteOwn(e);n&&p.add(n)};return Q(xi,{title:z(`Мои продукты`),onClose:e,action:Q(`button`,{type:`button`,class:`glass sheet-icon`,"aria-label":z(`Добавить`),"aria-expanded":r,onClick:()=>i(e=>!e),children:Q(Xr,{})}),children:[r&&Q(`div`,{class:`popover popover-inline`,role:`menu`,children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),o({name:``})},children:z(`Продукт`)}),Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>{i(!1),c(null)},children:z(`Блюдо`)})]}),n.length===0&&Q(`p`,{class:`empty`,children:z(`Здесь будут ваши продукты и блюда`)}),n.length>0&&Q(`div`,{class:`list`,children:n.map(e=>Q(Da,{onOpen:()=>m(e),onDelete:()=>u(e),onMenu:(t,n)=>f({food:e,x:t,y:n,at:Date.now()}),children:[Q(`span`,{children:e.name(t.lang)}),e.dishWeight!==null&&Q(`span`,{class:`tag`,children:z(`блюдо`)}),Q(`span`,{class:`list-value`,children:z(`%@ ккал`,[Jt(e.per100g.kcal)])})]},e.id))}),d&&Q(vi,{x:d.x,y:d.y,openedAt:d.at,onClose:()=>f(null),children:[Q(`button`,{type:`button`,role:`menuitem`,onClick:()=>(f(null),m(d.food)),children:z(`Изменить`)}),Q(`button`,{type:`button`,role:`menuitem`,class:`danger`,onClick:()=>(f(null),u(d.food)),children:z(`Удалить`)})]}),l&&Q(`div`,{class:`confirm`,role:`alertdialog`,"aria-label":z(`Удалить`),children:[Q(`p`,{children:z(`Удалить «%@»? Записи в дневнике останутся.`,[l.name(t.lang)])}),Q(`div`,{class:`confirm-actions`,children:[Q(`button`,{type:`button`,onClick:()=>u(null),children:z(`Отмена`)}),Q(`button`,{type:`button`,class:`danger`,onClick:()=>h(l),children:z(`Удалить`)})]})]}),Q(bi,{shown:p.items.length>0,onRestore:()=>{for(let e of p.take())t.restoreFood(e)}}),a&&Q(Ci,{request:a,onClose:()=>o(null),onSave:e=>t.saveOwn(e)}),s!==void 0&&Q(Ta,{dishId:s,onClose:()=>c(void 0)})]})}function Da({children:e,onOpen:t,onDelete:n,onMenu:r}){let[i,a]=J(0),[o,s]=J(!1),c=X(null);return Q(`div`,{class:`list-row`,children:[Q(`button`,{type:`button`,class:`list-delete`,onFocus:()=>a(-88),onBlur:()=>a(0),onClick:()=>(a(0),n()),children:z(`Удалить`)}),Q(`button`,{type:`button`,class:`list-main${o?` dragging`:``}`,style:{transform:`translateX(${i}px)`},onClick:()=>{c.current?.moved||c.current?.pressed||(i?a(0):t())},onContextMenu:e=>{e.preventDefault(),r(e.clientX,e.clientY)},onKeyDown:e=>(e.key===`Delete`||e.key===`Backspace`)&&n(),onTouchStart:e=>{let t=e.touches[0],n=setTimeout(()=>{c.current&&!c.current.moved&&(c.current.pressed=!0,r(t.clientX,t.clientY))},500);c.current={x:t.clientX,y:t.clientY,from:i,moved:!1,press:n}},onTouchMove:e=>{let t=c.current;if(!t)return;let n=e.touches[0].clientX-t.x,r=e.touches[0].clientY-t.y;Math.hypot(n,r)>10&&clearTimeout(t.press),!(!t.moved&&Math.abs(n)<8)&&(!t.moved&&Math.abs(r)>Math.abs(n)?c.current=null:(t.moved=!0,s(!0),a(Math.max(-88,Math.min(0,t.from+n)))))},onTouchEnd:()=>{let e=c.current;e&&(clearTimeout(e.press),s(!1),e.moved&&a(e=>e<-44?-88:0),setTimeout(()=>c.current=null,0))},onTouchCancel:()=>{let e=c.current;e&&clearTimeout(e.press),c.current=null,s(!1),a(e=>e<-44?-88:0)},children:e})]})}var Oa={low:1.2,medium:1.375,high:1.55},ka={lose:.85,keep:1,gain:1.1};function Aa(e){let t=10*e.weightKg+6.25*e.heightCm-5*e.age+(e.sex===`male`?5:-161);return Math.round(t*Oa[e.activity]*ka[e.aim]/10)*10}function ja(e,t=null){if(t===null)return{targetKcal:e,targetProtein:Math.round(e*.2/4),targetFat:Math.round(e*.315/9),targetCarbs:Math.round(e*.5/4)};let n=Math.round(1.6*t),r=Math.round(e*.3/9);return{targetKcal:e,targetProtein:n,targetFat:r,targetCarbs:Math.max(0,Math.round((e-n*4-r*9)/4))}}function Ma({onDone:e}){let t=Z(),n=X(null),[r,i]=J(null),[a,o]=J(`body`),[s,c]=J(`female`),[l,u]=J(``),[d,f]=J(``),[p,m]=J(``),[h,g]=J(`medium`),[_,v]=J(`keep`),[y,b]=J(``),x=(e,t,n)=>{let r=Zt(e);return r!==null&&r>=t&&r<=n?r:null},S=x(l,14,110),w=x(d,100,250),T=x(p,30,300),E=x(y,800,6e3),D=S!==null&&w!==null&&T!==null?Aa({sex:s,age:S,heightCm:w,weightKg:T,activity:h,aim:_}):null,O=a===`known`?E===null?null:Math.round(E):D!==null&&D>=800&&D<=6e3?D:null,k=O===null?null:ja(O,a===`body`?T:null),ee=()=>{k&&(t.finishOnboarding(e=>{Object.assign(e,k),a===`body`&&(e.sex=s,e.heightCm=Math.round(w),e.weightKg=Number(an(T)),e.birthYear=new Date().getFullYear()-Math.round(S))}),e())};async function A(n){if(!n)return;let r=t.restoreBackup(await n.text());r.done?(t.finishOnboarding(),e()):i(r.message)}let j=(e,t,n,r,i=!1)=>Q(`label`,{class:`row`,children:[Q(`span`,{children:e}),Q(`input`,{class:`row-number`,inputMode:i?`decimal`:`numeric`,placeholder:`—`,value:t,onInput:e=>n(e.currentTarget.value)}),Q(`span`,{class:`row-unit`,children:r})]});return Q(`div`,{class:`onboarding`,role:`dialog`,"aria-modal":`true`,"aria-label":z(`Сколько калорий в день?`),children:[Q(`div`,{class:`onboarding-bar`,children:[Q(`button`,{type:`button`,class:`link`,onClick:()=>n.current?.click(),children:z(`Восстановить из копии`)}),Q(`input`,{ref:n,type:`file`,accept:`application/json,.json`,hidden:!0,onChange:e=>(A(e.currentTarget.files?.[0]),e.currentTarget.value=``)}),Q(`button`,{type:`button`,class:`link`,onClick:()=>{t.finishOnboarding(),e()},children:z(`Пропустить`)})]}),r&&Q(`p`,{class:`group-footer message`,role:`status`,children:r}),Q(`div`,{class:`onboarding-body`,children:[Q(`h1`,{children:z(`Сколько калорий в день?`)}),Q(gi,{label:z(`Сколько калорий в день?`),value:a,onChange:o,segmented:!0,options:[{value:`body`,text:z(`Посчитать`),name:z(`Посчитать`)},{value:`known`,text:z(`Знаю цель`),name:z(`Знаю цель`)}]}),a===`body`?Q(C,{children:[Q(`div`,{class:`group`,children:[Q(`div`,{class:`row`,children:[Q(`span`,{children:z(`Пол`)}),Q(`span`,{class:`row-control`,children:Q(gi,{label:z(`Пол`),value:s,onChange:c,segmented:!0,options:[{value:`female`,text:z(`Ж`),name:z(`Женский`)},{value:`male`,text:z(`М`),name:z(`Мужской`)}]})})]}),j(z(`Возраст`),l,u,z(`лет`)),j(z(`Рост`),d,f,z(`см`)),j(z(`Вес`),p,m,z(`кг`),!0)]}),Q(`h3`,{class:`group-title`,children:z(`Активность`)}),Q(`div`,{class:`onboarding-choice`,children:Q(gi,{label:z(`Активность`),value:h,onChange:g,segmented:!0,options:[{value:`low`,text:z(`Мало`),name:z(`Мало`)},{value:`medium`,text:z(`Средне`),name:z(`Средне`)},{value:`high`,text:z(`Много`),name:z(`Много`)}]})}),Q(`h3`,{class:`group-title`,children:z(`Цель`)}),Q(`div`,{class:`onboarding-choice`,children:Q(gi,{label:z(`Цель`),value:_,onChange:v,segmented:!0,options:[{value:`lose`,text:z(`Снизить вес`),name:z(`Снизить вес`)},{value:`keep`,text:z(`Держать`),name:z(`Держать`)},{value:`gain`,text:z(`Набрать`),name:z(`Набрать`)}]})})]}):Q(`div`,{class:`group`,children:j(z(`Калории`),y,b,z(`ккал`))}),Q(`div`,{class:`card onboarding-result`,"aria-live":`polite`,children:[Q(`div`,{class:`onboarding-kcal`,children:[Q(`span`,{class:`ink-kcal`,children:k?k.targetKcal:`—`}),` `,Q(`span`,{class:`onboarding-unit`,children:[z(`ккал`),` `,z(`в день`)]})]}),k&&Q(`div`,{class:`macros`,children:[Q(`span`,{class:`ink-protein`,children:z(`Б`)}),` `,k.targetProtein,Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-fat`,children:z(`Ж`)}),` `,k.targetFat,Q(`span`,{class:`gap`}),Q(`span`,{class:`ink-carbs`,children:z(`У`)}),` `,k.targetCarbs]})]}),Q(`button`,{type:`button`,class:`button-primary`,disabled:!k,onClick:ee,children:z(`Готово`)}),Q(`p`,{class:`group-footer`,children:z(a===`body`?`Посчитано по формуле Миффлина — Сан Жеора. Цели всегда можно поменять в профиле.`:`Цели всегда можно поменять в профиле.`)})]})]})}function Na(){let e=zr(Br),[t,n]=J(!1),[r,i]=J(null),[a,o]=J(null),[s,c]=J(``),l=()=>i(null),u=kr(Lr),[d,f]=J(()=>!u.onboarded&&u.entries.length===0&&At(u.profile));return Q(C,{children:[d&&Q(Ma,{onDone:()=>f(!1)}),Q(`div`,{inert:d,children:Q(na,{wide:e,onMenu:()=>n(!0),showDay:a,onDay:c})}),t&&Q(aa,{selectedDay:s,onClose:()=>n(!1),onRoute:e=>{n(!1),i(e)},onDay:e=>{n(!1),o({key:e,at:Date.now()})}}),r?.kind===`profile`&&Q(ca,{onClose:l}),r?.kind===`stats`&&Q(xa,{onClose:l}),r?.kind===`myFoods`&&Q(Ea,{onClose:l}),r?.kind===`dish`&&Q(Ta,{dishId:r.id,onClose:l})]})}var Pa=document.getElementById(`app`);try{let e=localStorage.getItem(`language`);gt(e===`ru`||e===`en`?e:null)}catch{gt(null)}document.documentElement.lang=R(),Pa.innerHTML=`<p class="loading">${z(`Загружаю продукты…`)}</p>`;var Fa=window.visualViewport;if(Fa){let e=()=>{document.documentElement.style.setProperty(`--vv-height`,`${Fa.height}px`),document.documentElement.style.setProperty(`--vv-top`,`${Fa.offsetTop}px`)};Fa.addEventListener(`resize`,e),Fa.addEventListener(`scroll`,e),e()}async function Ia(){let[e,t,n,r]=await Promise.all([lr(`krug`,e=>console.error(`diary storage:`,e)),si(()=>import(`./starter_foods-B_nVsKLz.js`).then(e=>e.default),[]),si(()=>import(`./off_ru-C_fWxu5_.js`).then(e=>e.default),[]),si(()=>import(`./usda_ru-BcPVADzA.js`).then(e=>e.default),[])]),i=new or({db:e,catalog:St.fromBundled({starter:t,off:n,usda:r})});navigator.storage?.persist?.().catch(()=>{}),Pa.innerHTML=``,fe(Q(Lr.Provider,{value:i,children:Q(Na,{})}),Pa)}Ia().catch(e=>{console.error(e),Pa.innerHTML=``;let t=document.createElement(`p`);t.className=`loading`,t.textContent=z(`Не получилось — попробуйте ещё раз`);let n=document.createElement(`button`);n.className=`link`,n.textContent=z(`Обновить страницу`),n.onclick=()=>location.reload(),t.append(document.createElement(`br`),n),Pa.append(t)});