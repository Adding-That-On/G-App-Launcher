"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var algBasics=function(){var r,o,a,i,c="undefined"!=typeof globalThis&&globalThis||window,s="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{},u=s.action||s.browserAction||s.pageAction,n="object"===_typeof(s.i18n)&&"function"==typeof s.i18n.getMessage&&s.i18n,l=s.runtime.getURL("PATH").replace("/PATH","").startsWith("moz-extension://"),f="https://www.google.com",d="http://www.w3.org/2000/svg",t="alg-cache-v15-",e=(r=["alg","app_launcher_square","default_blue","default_grey","gsa","gsa_blue_circle","gsa_blue_square","app_launcher_blue","app_launcher","original","original_blue","original_grey","gsa_blue","gsa_grey"],o=["default_grey","app_launcher","original_grey","gsa_grey"],a=["alg","app_launcher","app_launcher_blue","default","default_blue","default_grey"],i=["alg","default","app_launcher_square"],{setActionIcon:function(t,e){var n,r=function(t){var e=webextFlags.custom_action_icons;if(Array.isArray(e)){if(-1!==e.indexOf(t))return t;if(t&&t.startsWith("gsa")&&-1!==e.indexOf("gsa_nobg"))return"gsa_nobg"}return webextFlags.default_action_icon}(t),o="/images/action/"+r+"/"+h(r,e)+"-",e={16:o+"16"+(t=l?".svg":".png"),19:o+"19"+t,32:o+(l&&-1!==a.indexOf(r)?"16":"32")+t,38:o+(l?"19":"38")+t};l?e[48]=o+"16"+t:-1!==i.indexOf(r)&&(e[48]=o+"48"+t,e[72]=o+"72"+t),n=e,u.setIcon({path:n},function(){s.runtime.lastError&&u.setIcon({path:n[32]||n[16]})})},setActionIconUrl:function(t){var o=document.createElement("img");o.addEventListener("load",function(){var t=document.createElement("canvas"),e=t.getContext("2d"),n=o.width,r=o.height;t.width=n,t.height=r,e.drawImage(o,0,0),u.setIcon({imageData:e.getImageData(0,0,n,r)})}),o.src=t},getActionIconVariant:h});function h(t,e){var n=t;return l&&-1<o.indexOf(t)&&(n+="-firefox"),e&&-1<r.indexOf(t)&&(n+="-dark"),n}function g(t,e,n){if(-1===t.indexOf(":"))return g("https://"+t,e,n);try{var r=new URL(t);return!Array.isArray(e)||-1<e.indexOf(r.protocol)||n&&r.origin===c.location.origin?r.href:null}catch(t){return null}}function m(t){for(var e=0;e<t.length;e++){var n=t[e].displayEmail,n=n&&n.split("@")[1];if(-1!==webextFlags.enterprise_domains.indexOf(n))return{account:t[e],domain:n}}}function p(e){if(!e||!e.domain)return"null";var t=["displayEmail","authuser","obfuscatedId"].map(function(t){return e.account[t]});-1===e.toolbarIconUrl.indexOf(".gstatic.com/faviconV2")&&t.push(e.toolbarIconUrl);var n=JSON.stringify(e.config,Object.keys(e.config).sort());return t.push(e.domain,n),t.join("_@-")}function b(r,t){var o={};var a={},i=Array.isArray(t)?t:[],t=Object.keys(o).filter(function(t){var e=o[t],n=-1===i.indexOf(t);return n&&(a[e]=t),n&&-1===r.indexOf(e)});return{temporaryShortcuts:o,masterToTemporary:a,inclusions:t}}function y(r,t,o){var a,t=b(r,t),n=t.inclusions;o&&(a=t.temporaryShortcuts,Object.keys(a).forEach(function(t){var e=a[t],n=o[e];n.masterId=e,-1!==r.indexOf(t)&&-1!==r.indexOf(e)&&r.push(e),o[t]=n})),r.forEach(function(t,e){"string"==typeof t&&t.startsWith("temp-")&&-1===n.indexOf(t)&&r.splice(e,1)});return n.forEach(function(t){-1===r.indexOf(t)&&r.unshift(t)}),[]}var v=-1;function _(t,e,n){var r=n.customIconDataCache,o=t in n.customShortcutsDatabase||(e.gsuiteApp?!e.icon:!t),a=document.createElement("div");a.className="cj-shortcutlist__icon";var i=n.size+"px";a.style.height=i,a.style.width=i;var s,i=function(t){var e=t.badge;if(e){var n=cjgIcons.getGIcon(e);if(n&&"M0,0"!==n){var r=-1!==cjgShortcuts.badgeOnLeftIcons.indexOf(t.icon),o=document.createElementNS(d,"svg");o.setAttribute("xmlns",d),o.setAttribute("viewBox","0 0 48 48"),o.setAttribute("class","cj-shortcutlist__badge");e=document.createElementNS(d,"g");e.setAttribute("transform",r?"translate(1, 27)":"translate(27, 27)"),o.appendChild(e);t=document.createElementNS(d,"path");t.setAttribute("d","M10,21.1421356 C15.5228475,21.1421356 20,16.6649831 20,11.1421356 C20,5.61928813 0,5.61928813 0,11.1421356 C0,16.6649831 4.4771525,21.1421356 10,21.1421356 Z"),t.style.fill="#dadce0",e.appendChild(t);r=document.createElementNS(d,"path");r.setAttribute("d","M20,10 C20,15.5228 15.5228,20 10,20 C4.47715,20 0,15.5228 0,10 C0,4.47715 4.47715,0 10,0 C15.5228,0 20,4.47715 20,10 Z"),r.style.fill="#fafafa",e.appendChild(r);t=document.createElementNS(d,"path");t.style.fill="#677480";r=document.createElementNS(d,"g");return r.setAttribute("transform","translate(2,2) scale(0.66667)"),e.appendChild(r),t.setAttribute("d",n),r.appendChild(t),o}}}(e);return i&&a.appendChild(i),o?(s={size:24,href:s="string"==typeof(s=e.iconUrl)&&s.startsWith("http://")?null:s},t=(s="object"===_typeof(t=r[t]||e.iconData)?t:s).href||f+"/s2/favicons?domain_url="+encodeURIComponent(e.url),a.style.backgroundImage='url("'+t+'")',28<n.size&&s.size<38*c.devicePixelRatio?(a.classList.add("cj-shortcutlist__icon--box"),a.style.backgroundSize="24px"):28<n.size&&a.classList.add("cj-shortcutlist__icon--favicon")):(s=(e.icon||"googleg").replace("__gpi:",""),(e=document.createElementNS(d,"svg")).setAttribute("xmlns",d),e.setAttribute("viewBox","0 0 "+n.sourceSize+" "+n.sourceSize),e.setAttribute("height",n.size),e.setAttribute("width",n.size),e.innerHTML=cjgIcons.getProductIcon(s,n.sourceSize),a.appendChild(e)),a}return{limitAbove:2e3,disallowedlist:["temp-3"],cachePrefix:t,setActionIcon:e.setActionIcon,setActionIconUrl:e.setActionIconUrl,getActionIconVariant:e.getActionIconVariant,getI18nMessage:function(t,e){return t&&n&&n.getMessage(t)||e||""},getCleanCustomUrl:g,cleanCustomShortcutData:function(t){if(!t||"object"!==_typeof(t))return null;var e,n={};return"string"==typeof t.iconUrl&&0<t.iconUrl.length&&((e=g(t.iconUrl,["http:","https:","data:"],!0))&&(n.iconUrl=e)),"string"==typeof t.name&&0<t.name.length&&(n.name=t.name),"string"==typeof t.url&&0<t.url.length&&((t=g(t.url))&&(n.url=t)),n},getEnterpriseData:function(){var r=t+"enterprise-data";return browserStorage.local.getItem(r).then(function(n){return cjgAccounts.list().then(m).then(function(e){e?c.fetch("https://"+e.domain+"/ale-config.json").then(function(t){return t.json()}).catch(function(){return{}}).then(function(t){e.config=t,getUrlIcon("https://"+e.domain,t.customToolbarIconUrl).then(function(t){return t.href}).catch(function(){return null}).then(function(t){t&&(e.toolbarIconUrl=t),p(n)!==p(e)&&browserStorage.local.setItem(r,e).then(function(){setTimeout(function(){c.location.reload()},100)})})}):n&&browserStorage.local.remove(r)}),n})},handleTemporaryShortcuts:y,supportedStorageKeys:["autoListRemoved","customServicesDatabase","customShortcutsDatabase1","customShortcutsDatabase2","customShortcutsDatabase3","displayMarketplaceApps","displayMode","gbwaConfig","hideLabel","hideSuggestions","iconBreak","noFocusTab","noFocusActiveTab","openInCurrentTab","openInNewTabChrome","shortcutIconSize","showLaunchbox","showSettings","toolbarIcon","toolbarIconDarkMode","userList"],splitCustomShortcutsDatabase:function(n,t){var r={},o={},a={};Object.keys(n).sort().forEach(function(t,e){e%=3;0==e?r[t]=n[t]:1==e?o[t]=n[t]:a[t]=n[t]}),t.customShortcutsDatabase1=r,t.customShortcutsDatabase2=o,t.customShortcutsDatabase3=a},joinCustomShortcutsDatabase:function(t){for(var e={},n=["algCustomShortcutsDatabase","customServicesDatabase","customShortcutsDatabase1","customShortcutsDatabase2","customShortcutsDatabase3"],r=0;r<t.length;r++){var o=t[r];if(o&&"object"===_typeof(o))for(var a=0;a<n.length;a++){var i=o[n[a]];if("object"===_typeof(i))for(var s=Object.keys(i),c=0;c<s.length;c++){var u=s[c],l=i[u];e[u]=l}}}return e},createShortcutItem:function(t,e,n){var r=document.createElement("li");return r.className="cj-shortcutlist__item",r.tabIndex=0,n&&(r.dataset.shortcutId=n),e.draggable&&(r.draggable=!0),n=_(n,t,e),r.appendChild(n),t=e.label||t.name,e.hideLabel?r.title=t:((e=document.createElement("div")).className="cj-shortcutlist__label",e.textContent=t||"-",r.appendChild(e)),r},parseUserlist:function(t){if(!t||!Array.isArray(t))return cjgShortcuts.defaultSelection;for(var e=[],n=0;n<t.length;n++){var r=t[n],o=_typeof(r);"string"===o?e.push(r):"number"===o&&e.push(r.toString())}return e},saveUserListWithRemovals:function(t){var e=++v;setTimeout(function(){var o,a;v===e&&(o=t,a=Array.isArray(o)?o:[],browserStorage.sync.get(["userList","autoListRemoved"]).then(function(t){var e=Array.isArray(t.userList)?t.userList:[],n=t.autoListRemoved||[];y(e,n);var r=b(o,n);e.forEach(function(t){-1===a.indexOf(t)&&(-1!==r.inclusions.indexOf(t)&&n.push(t),(t=r.masterToTemporary[t])&&n.push(t))});e=a.filter(function(t,e,n){return n.indexOf(t)===e});browserStorage.sync.set({userList:e,autoListRemoved:n})}))},500)}}}();