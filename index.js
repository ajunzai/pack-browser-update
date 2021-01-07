function checkVersion(selectVersion, defaultVersion) {
  if (typeof selectVersion === 'boolean') {
    return 0;
  }
  if (selectVersion !== undefined && selectVersion !== '') {
    return selectVersion;
  }
  return defaultVersion;
}

function onShowFn (info) {
  var div = document.createElement('div');
  div.className = 'buorg-model-mask';
  document.body.appendChild(div);
}

function onCloseFn(info) {
  var mask = document.querySelector('.buorg-model-mask');
  document.body.removeChild(mask);
}

function $buo_f() {
  var e = document.createElement("script");
  e.src = "//browser-update.org/update.min.js";
  document.body.appendChild(e);
}

function judgeBrowser(options) {
  var sUsrAg = window.navigator.userAgent;
  var browsers = [{firefox: 'Firefox'}, {opera: 'Opera'}, {opera: 'OPR'}, {ie: 'Trident'}, {edge: 'Edge'}, {chrome: 'Chrome'}, {safari: 'Safair'}, {uc: 'UCBrowser'}];
  var len = browsers.length;
  var _result = false;
  for(var i = 0;i < len; i++) {
    for (var key in browsers[i]) {
      if (typeof options[key] === 'boolean' && !options[key] && sUsrAg.indexOf(browsers[i][key]) > -1) {
        _result = true; 
        break;
      }
    }
    if (_result) break
  }
  return _result;
}

export default function browserUp(
  options
) {
  var browsers = options.required;
  if (browsers.ie === undefined) browsers.ie = false
  var chrome = checkVersion(browsers.chrome, 64);
  var firefox = checkVersion(browsers.firefox, 58);
  var edge = checkVersion(browsers.edge, 42);
  var uc = checkVersion(browsers.uc, 11.8);
  var safari = checkVersion(browsers.safari, 11.1);
  var ie = checkVersion(browsers.ie, 0);
  var opera = checkVersion(browsers.opera, 60);
  var samsung = checkVersion(browsers.samsung, 12.1);
  var yandex = checkVersion(browsers.yandex, 18.9);
  var vivaldi = checkVersion(browsers.vivaldi, 1.95);
  var reminder = options.reminder || 0;
  var reminderClosed = options.reminderClosed || 24;
  var lang = options.lang || 'zh-CN';
  var test = options.test || false;

  var text = options.text || {};
  var msg = text.msg || '您的页面浏览器 ({brow_name}) 版本过低，可能导致无法上课';
  var msgMore = text.msgMore || '';
  var btnUpdatetext = text.btnUpdateText || '更新浏览器';
  var btnIgnore = text.btnIgnore || '忽略';
  var textMerge = typeof text === 'string' 
                ? "'" + text + "'"
                : "{msg:'"+msg+"',msgmore:'"+msgMore+"',bupdate:'"+btnUpdatetext+"',bignore:'"+btnIgnore+"'}";
  
  var noCloseBtn = options.noCloseBtn || false;
  var url = options.url || 'https://browser-update.org/zh-CN/update-browser.html#3.3.26:localhost';

  test = judgeBrowser(browsers);
  
  var insertScript = 
    "var $buoop = {required:{i:"+ie+",f:"+firefox+",e:"+edge+",uc:"+uc+",o:"+opera+",s:"+safari+",c:"+chrome+",y:"+yandex+",v:"+vivaldi+",samsung:"+samsung+"},text:"+textMerge+",reminder:"+reminder+",reminderClosed:"+reminderClosed+",onshow:"+onShowFn+",onclick:"+onCloseFn+",onclose:"+onCloseFn+",l:'"+lang+"',test:"+test+",noclose:"+noCloseBtn+",url:'"+url+"',shift_page_down:false,no_permanent_hide:true,insecure:false,api:2020.12}";
  var script = document.createElement('script');
  script.innerHTML = insertScript;
  document.body.appendChild(script);
  
  try {
    document.addEventListener("DOMContentLoaded", $buo_f,false);
  } catch (error) {
    window.attachEvent("onload", $buo_f);
  }
}