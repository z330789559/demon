(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"103":function(e,t,n){},"108":function(e,t,n){"use strict";n.r(t),n.d(t,"dispatchFormItemLoad",function(){return c}),n.d(t,"dispatchAddElement",function(){return s}),n.d(t,"dispatchDeleteElement",function(){return u}),n.d(t,"dispatchProjectType",function(){return l}),n.d(t,"dispatchChangeHeader",function(){return p}),n.d(t,"onDispatchPropsChange",function(){return f}),n.d(t,"dispathChangeParent",function(){return d});var r=n(6),o=n(101),a=n(106),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function dispatchFormItemLoad(e){return Object(a.a)({"url":o.c,"type":r.d,"payload":e,"cb":function cb(t){return console.log(t),i({},e,t)}})},s=function dispatchAddElement(e){return function(t){t({"type":r.a,"payload":e})}},u=function dispatchDeleteElement(e){return function(t){t({"type":r.c,"payload":e})}},l=function dispatchProjectType(e){return function(t){t({"type":r.e,"payload":e})}},p=function dispatchChangeHeader(e){return function(t){t({"type":r.b,"payload":{"header":e}})}},f=function onDispatchPropsChange(e){return function(t){t({"type":r.g,"payload":{"defineState":e}})}},d=function dispathChangeParent(e){return function(t){t({"type":r.f,"payload":{"currentParentElement":e.element}})}}},"119":function(e,t,n){},"122":function(e,t,n){"use strict";var r=n(0),o=n(136),a=n(2),i=n(14),c=n(255),s=n(257),u=n(250),l=n(135),p=(n(119),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}n.e(4).then(n.t.bind(null,277,7));var d=function(e){function _TaroComponentClass(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_TaroComponentClass);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_TaroComponentClass.__proto__||Object.getPrototypeOf(_TaroComponentClass)).call(this,e));return t.handleChange=function(e,n){var r=t.props.header;t.setState(_defineProperty({},n,e)),t.props.changeHeader(p({},r,_defineProperty({},n,e)))},t.handleTextAreaChange=function(e,n){var r=t.props.header,o=e.target.value;t.setState(_defineProperty({},n,o)),t.props.changeHeader(p({},r,_defineProperty({},n,o)))},t.uploadPic=function(e){console.log(e)},t.uploadPicOver=function(e){},t.uploadFail=function(e){},t.changeCover=function(){Object(o.a)({"count":1,"success":t.uploadPic.bind(t),"complete":t.uploadPicOver.bind(t),"fail":t.uploadFail.bind(t)}).then(function(e){console.log("res",e)})},t.refs=a.a.createRef(),t.state={"playState":!1,"title":e.header.title,"description":e.header.description,"imageUrl":e.header.imageUrl},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_TaroComponentClass,a["a"].Component),f(_TaroComponentClass,[{"key":"render","value":function render(){var e=this,t=this.props.isPreview,n=this.props.header,o=n.showTitle,a=n.showDes,p=this.state,f=p.title,d=p.description;return r.j.createElement(i.a,{"className":"form-header"},r.j.createElement(c.a,{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333761089&di=dfb31786b68da527407f40899203ce96&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F08%2Fc1%2F17228898_1357627460092.jpg","className":"form-header-image"}),t?"":r.j.createElement(i.a,{"className":"form-header-edit-cover","onClick":this.changeCover.bind(this)},"更换封面"),r.j.createElement(i.a,null),o||a?r.j.createElement(i.a,{"className":"form-header-content"},o?r.j.createElement(i.a,{"className":"form-header-title"},r.j.createElement(s.a,null,r.j.createElement(u.a,{"className":"title","name":"title","type":"text","placeholder":"问卷标题","value":f,"onChange":function onChange(t){return e.handleChange(t,"title")}}))):"",a?r.j.createElement(i.a,{"className":"form-header-desc"},r.j.createElement(l.a,{"className":"description","value":d,"onChange":function onChange(t){return e.handleTextAreaChange(t,"description")},"maxLength":100,"placeholder":"问卷描述不超过100个字."})):""):"")}}]),_TaroComponentClass}();n.d(t,"a",function(){return d})},"135":function(e,t,n){"use strict";var r=n(0),o=n(2),a=n(14),i=(n(10),n(25)),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var u=function(e){function Textarea(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Textarea);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Textarea.__proto__||Object.getPrototypeOf(Textarea)).apply(this,arguments));return e.onChange=e.onChange.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Textarea,r["j"].Component),s(Textarea,[{"key":"onChange","value":function onChange(e){var t=this.props,n=t.onChange,onChange=void 0===n?"":n,r=t.onInput,o=void 0===r?"":r;return Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onChange?onChange&&onChange(e):o?o&&o(e):void 0}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=void 0===t?"":t,o=e.placeholder,a=void 0===o?"":o,s=e.disabled,u=e.maxlength,l=void 0===u?140:u,p=e.autoFocus,f=void 0!==p&&p;return r.j.createElement("textarea",c({},Object(i.a)(this.props,["className","placeholder","disabled","maxlength","onChange","onInput","onFocus","onBlur","autofocus"]),{"className":n,"placeholder":a,"disabled":s,"maxlength":l,"autofocus":f,"onChange":this.onChange,"onFocus":this.onFocus,"onBlur":this.onBlur}))}}]),Textarea}(),l=n(95),p=n.n(l),f=n(4),d=n.n(f),h=n(94),m=n(100);n.d(t,"a",function(){return A});var g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=o.a.getEnv();Object(m.b)();var A=function(e){function AtTextarea(){!function textarea_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtTextarea);var e=function textarea_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtTextarea.__proto__||Object.getPrototypeOf(AtTextarea)).apply(this,arguments));return e.handleInput=function(t){e.props.onChange(t)},e.handleFocus=function(t){e.props.onFocus&&e.props.onFocus(t)},e.handleBlur=function(t){e.props.onBlur&&e.props.onBlur(t)},e.handleConfirm=function(t){e.props.onConfirm&&e.props.onConfirm(t)},e.handleLinechange=function(t){e.props.onLinechange&&e.props.onLinechange(t)},e}return function textarea_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtTextarea,h["a"]),g(AtTextarea,[{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,i=e.value,c=e.cursorSpacing,s=e.placeholder,l=e.placeholderStyle,p=e.placeholderClass,f=e.maxLength,h=e.count,m=e.disabled,g=e.autoFocus,A=e.focus,y=e.showConfirmBar,v=e.selectionStart,C=e.selectionEnd,P=e.fixed,j=e.textOverflowForbidden,w=e.height,E=parseInt(f.toString()),F=function getMaxLength(e,t){return t?e:e+500}(E,j),O=w?"height:"+o.a.pxTransform(Number(w)):"",R=d()("at-textarea","at-textarea--"+b,{"at-textarea--error":E<i.length},n),B=d()("placeholder",p);return r.j.createElement(a.a,{"className":R,"style":t},r.j.createElement(u,{"className":"at-textarea__textarea","style":O,"placeholderStyle":l,"placeholderClass":B,"cursorSpacing":c,"value":i,"maxlength":F,"placeholder":s,"disabled":m,"autoFocus":g,"focus":A,"showConfirmBar":y,"selectionStart":v,"selectionEnd":C,"fixed":P,"onInput":this.handleInput,"onFocus":this.handleFocus,"onBlur":this.handleBlur,"onConfirm":this.handleConfirm,"onLineChange":this.handleLinechange}),h&&r.j.createElement(a.a,{"className":"at-textarea__counter"},i.length,"/",E))}}]),AtTextarea}();A.defaultProps={"customStyle":"","className":"","value":"","cursorSpacing":100,"maxLength":200,"placeholder":"","disabled":!1,"autoFocus":!1,"focus":!1,"showConfirmBar":!1,"selectionStart":-1,"selectionEnd":-1,"count":!0,"fixed":!1,"height":"","textOverflowForbidden":!0,"onLinechange":function onLinechange(){},"onChange":function onChange(){},"onFocus":function onFocus(){},"onBlur":function onBlur(){},"onConfirm":function onConfirm(){}},A.propTypes={"customStyle":p.a.oneOfType([p.a.object,p.a.string]),"className":p.a.oneOfType([p.a.array,p.a.string]),"value":p.a.string.isRequired,"cursorSpacing":p.a.number,"maxLength":p.a.oneOfType([p.a.string,p.a.number]),"placeholderClass":p.a.string,"placeholderStyle":p.a.string,"placeholder":p.a.string,"disabled":p.a.bool,"autoFocus":p.a.bool,"focus":p.a.bool,"showConfirmBar":p.a.bool,"selectionStart":p.a.number,"selectionEnd":p.a.number,"count":p.a.bool,"textOverflowForbidden":p.a.bool,"fixed":p.a.bool,"height":p.a.oneOfType([p.a.string,p.a.number]),"onLinechange":p.a.func,"onChange":p.a.func.isRequired,"onFocus":p.a.func,"onBlur":p.a.func,"onConfirm":p.a.func}},"136":function(e,t,n){"use strict";var r=n(1);t.a=function chooseImage(e){var t=Object(r.k)(e);if(!t.res){var n={"errMsg":"chooseImage"+t.msg};return console.error(n.errMsg),Promise.reject(n)}var o=e.count,a=void 0===o?1:o,i=e.success,c=e.fail,s=e.complete,u=e.imageId,l=void 0===u?"taroChooseImage":u,p=e.sourceType,f=void 0===p?["album","camera"]:p,d={"errMsg":"chooseImage:ok","tempFilePaths":[],"tempFiles":[]},h=f&&f.toString(),m=["user","environment","camera"];if(a&&"number"!=typeof a)return d.errMsg=Object(r.d)({"name":"chooseImage","para":"count","correct":"Number","wrong":a}),console.error(d.errMsg),"function"==typeof c&&c(d),"function"==typeof s&&s(d),Promise.reject(d);var g=document.getElementById(l);if(g)m.indexOf(h)>-1?g.setAttribute("capture",h):g.removeAttribute("capture");else{var b=document.createElement("input");b.setAttribute("type","file"),b.setAttribute("id",l),a>1&&b.setAttribute("multiple","multiple"),m.indexOf(h)>-1&&b.setAttribute("capture",h),b.setAttribute("accept","image/*"),b.setAttribute("style","position: fixed; top: -4000px; left: -3000px; z-index: -300;"),document.body.appendChild(b),g=document.getElementById(l)}var A=void 0,y=new Promise(function(e){A=e}),v=document.createEvent("MouseEvents");return v.initEvent("click",!0,!0),g.dispatchEvent(v),g.onchange=function(e){var t=[].concat(function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.target.files));(t=t.splice(0,a))&&t.forEach(function(e){var t=new Blob([e],{"type":e.type}),n=URL.createObjectURL(t);d.tempFilePaths.push(n),d.tempFiles.push({"path":n,"size":e.size,"type":e.type,"originalFileObj":e})}),"function"==typeof i&&i(d),"function"==typeof s&&s(d),A(d),e.target.value=""},y}},"244":function(e,t,n){},"275":function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n(2),i=n(14),c=n(98),s=n(24),u=n(108),l=n(96),p=n(122),f=n(105),d=n(198),h=n(97),m=(n(244),n(103),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=[{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAADVklEQVRoQ+2aTWjUQBTH/y9RTyqICtJjD3oVVFRQUTYFwU2FijVtvXhQD34LetKTnhT89mA9eLFtWrFgs4LQLIotqKjgVQ891oJKwXpSkyeTNetm3d3Mbja2UwwsCztv3rxf5s28N2+WoPhDituPpgAwM7W1798I8naB0QpGC4AWJhbfTEwfAUyCgs8EWH88OnL/FRFx0heYCCCzu9sg39/LzO0AVtVpzBQRjbCmPcg/6nfr7FsUbwjAMHs2MXuXAN7a6MDRfjRGpJ91nb6X9eqrCyDT0d1KP/zLzNxR70Ay8kQ0zAu1M/nh/gkZeSEjDSDcBZ4/BPAyWeWNydE0dK1T1q2kAAyz6xjgX2WG3phR9fUiggdop1xn4GZcz1iATLbrGuCfiFOUTrt2PZ8bOFlLd00A8eaZ/RvpGCenlUg7XmsmqgIUtkjvyb9ym2o4wp1Y03dWWxMVAcRug+/+m/QXrNwsADSNRdr6SrtTRQDDtB4m3So3rFuL00cPBhZeuXUXr9++k7W2opzYYl3H3lPe+BdAIUj9fJFoNAAD925j5YrlgZpPn7+g68CRpCpBtGBzebCrAGCNMfOWpKO5jh1RYZhWUpUgonHXsSPRPwJQCFbeaOKRAKQBENil622lCzoCYGStXgYXHDfhkxYAEfW6jn04NK8IIFJiw7QmG8gqK6KmBQBgynXsljAVLwI0a/GGNCkCRBbzH4B26wL7fC6h5xS7pwqg0UV3xD4vBiuZAauPmbuVACDqdx27JwqQtZ4yeLsSAKBnbs7eUQ7wnsGr4wDCCBsGqTh52XYR7GQjNoE+uDl7TQQgY+6bAWNx3IClETZOtt526YhN+JZ3BpeUA3wFI/ix1jNHAGbyzuDS+eVChvKL2FR9G1U/kDXnHDBrqYTyyZx4c4Zp3WHmQ3FbqUx7WrlQ1XRaGKX8gSaAyFrPm1G0TWcGaCyfs7eVesD8O9T/XgvqllUCN1K9sBUuaGVLi+EiUbq4G0IoXV4vnQllLziKM6HyFVMRQuVLvtLoJ4pggCduKxMXgYNjIdE4oJ9J/Zq1PIkLbnE8v5PBZgMlySkCOaxrQ7I3kpWSyNhLPpnMM+avBiAmUXOde381kIFLW6YpM5C2kbX0/weYzbcvxv4FTZ/xQhtII2kAAAAASUVORK5CYII=","title":"题目"},{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAyCAYAAAAayliMAAAC70lEQVRoQ+2Zy2sTURTGv3MntU21lWZR1G6atdKFUhcKPmj6sk0saGjaKBTRZRf+F+5cdOFGENGmCcUHSWtom6KIK18rBXcVRFqqGKyavjJzZCKRJE3MDM5MkjKzSeBe7jm/851z7p07hBp/qMb9hw1QaQV1K+D3X3d+21g9QpK81wrnpbRjTbhb3scnJjaL2dMF4PEFBljBPYBbrHA+x8aKJKTh+WjoeaFdzQADo6Mtm2vyEgP7LXY+a25lj7u1vVAJzQB9vpGObeYbVjlPyDSYDmY+lLXpQN2xuZn7b3N90AxgleO5dny+K00pTn3IQpCDziYeh5/VDIDqqMcbiDNzn/pfF4Ca81trcieTaLIi+gJKSmpofB2fvvMl116XN/AEzP26ANRuA4UnrS5YIqQAupaIhUNZCN0AmT6/vvy5Aq0y47MKUdfQ2J5VQjdAlzfYCU6/tCJtStmQCOfmY5G4Oq4bwDMUOMNpflpJACJxMRGbemADVEoFW4HdVwOEnwDChMyvYQ8DTmL4GXDlHQ+MLmIiCuZuLoYRAOgeHO5RgDlzAQQuJKKRh0Y6nl2r2ztyWmEl/4BmtAIg+kqg24BiaAoBwsmsjAFoM1UBMyL/rzXtNrr72qjFOWSnUGEKEWiZBW4R0w8jxSBwI4OvMsNtahcSgs4vRMNRI53/uw/4gicVJf3CVAAIMbYYnbprBsCfyzKeMReAsE6gRzD4LATAyeAhMPIuDuwitveB/yyWUikEchxfjE2+yquXQlvV+1JPSZfzYNv09M31mgMg5hMQFExEw7OFAd9xuVttCqi34tI++jQbCiWLZWbVA5Qrp90H0Dt46Wga22/KkZs5LoDehZnIvBYbOxToHx+v31pa/QjggJYFjJ5DwPf6ZsldKufLFrE6occ3ekpW5Ij1EJQkgcvFuk2pQJX8xKQqoSwlD8uOdLPRUS62HsvSL1dD67vCPl/OdlV/IyvnvDpuA2iJkplzbAXMjK6WtWtegd/mUVVRvuCPtgAAAABJRU5ErkJggg==","title":"排序/复制"},{"src":"data:image/png;base64,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","title":"设置"},{"src":"data:image/png;base64,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","title":"预览/发布"}];t.default=Object(s.b)(function(e){return e.formItem},g({},u))(r=function(e){function _TaroComponentClass(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_TaroComponentClass);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=_TaroComponentClass.__proto__||Object.getPrototypeOf(_TaroComponentClass)).call.apply(e,[this].concat(o))),n.state={"mode":"development"},n.config={"navigationBarTitleText":"创建表单"},n.onAddIssue=function(){a.a.navigateTo({"url":"/pages/issue-lib/issue-lib?projectType=1"})},n.onSort=function(){},n.onSetting=function(){},n.onPreView=function(){a.a.navigateTo({"url":"/pages/sence-preview/sence-preview"})},n.changeCurrentElement=function(e){a.a.navigateTo({"url":"/pages/issue-lib/issue-lib?page=properties&id="+e+"&projectType=1"})},n.changeHeader=function(e){n.props.dispatchChangeHeader(e)},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_TaroComponentClass,a["a"].Component),m(_TaroComponentClass,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.$router.params;e&&e.id&&this.props.dispatchFormItemLoad({"id":e.id})}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.header,r=t.body,a=t.hideWrap,s=t.itemStyles,u=t.defineState,m=t.onDispatchPropsChange,g=h.d.development,A=Object(l.d)(r,"order");return o.j.createElement(i.a,{"className":"form"},o.j.createElement(i.a,{"className":"form-frame"},o.j.createElement(i.a,{"className":"form-frame-content"},o.j.createElement(p.a,{"header":n,"mode":this.state.mode,"changeHeader":this.changeHeader.bind(this),"isPreview":g}),o.j.createElement(i.a,null,A.map(function(t,n){return o.j.createElement(f.a,{"onDispatchPropsChange":m,"element":t,"changeCurrentElement":e.changeCurrentElement,"isPreview":g,"hideWrap":a,"itemStyles":s,"defineState":u})}))),this.state.mode===h.d.development?o.j.createElement(d.a,{"className":"form-add-btn","onClick":this.onAddIssue},"添加题目"):null,this.state.mode===h.d.development?o.j.createElement(c.b,{"className":"form-weui-tabbar__item","onAddIssue":this.onAddIssue,"onSort":this.onSort,"onSetting":this.onSetting,"onPreView":this.onPreView,"data":b}):null))}}]),_TaroComponentClass}())||r}}]);