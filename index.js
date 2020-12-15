function checkVersion(selectVersion, defaultVersion) {
  if (typeof selectVersion === "boolean") {
    test = true
    return 0
  }
  return typeof selectVersion === "number"
    ? selectVersion
    : defaultVersion;
}

function onShowFn (info) {
  var div = document.createElement('div')
  div.className = 'buorg-model-mask'
  document.body.appendChild(div)
}

function onCloseFn(info) {
  var mask = document.querySelector('.buorg-model-mask')
  document.body.removeChild(mask)
}

function $buo_f() {
  var e = document.createElement("script"); 
  e.src = "//browser-update.org/update.min.js"; 
  document.body.appendChild(e);
}

module.exports = function browserUpdate(
  options
) {  
  var test = options.test || false
  var chrome = checkVersion(options.chrome, -3)
  var firefox = checkVersion(options.firefox, -3)
  var edge = checkVersion(options.edge, -3)
  var uc = checkVersion(options.uc, -3)
  var safari = checkVersion(options.safari, -1)
  var ie = checkVersion(options.ie, -4)
  var opera = checkVersion(options.opera, -3)
  var reminder = options.reminder || 24
  var reminderClosed = options.reminderClosed || 150
  var lang = options.lang || 'zh-CN'

  var text = options.text || {}
  var msg = text.msg || '您的页面浏览器 ({brow_name}) 版本过低，可能导致无法上课'
  var msgMore = text.msgMore || ''
  var btnUpdatetext = text.btnUpdateText || '更新浏览器'
  var btnIgnore = text.btnIgnore || '忽略'
  var textMerge = typeof text === 'string' 
                ? `'${text}'` 
                : "{msg:'"+msg+"',msgmore:'"+msgMore+"',bupdate:'"+btnUpdatetext+"',bignore:'"+btnIgnore+"'}"
  
  var noCloseBtn = options.noCloseBtn || false
  var url = options.url || 'https://browser-update.org/zh-CN/update-browser.html#3.3.26:localhost'
  if (typeof options.ie === 'boolean') {
    test = true
  }
  var insertScript = 
    "var $buoop = {required:{e:"+ie+",f:"+firefox+",e:"+edge+",uc:"+uc+",o:"+opera+",s:"+safari+",c:"+chrome+"},text:"+textMerge+",reminder:"+reminder+",reminderClosed:"+reminderClosed+",onshow:"+onShowFn+",onclick:"+onCloseFn+",onclose:"+onCloseFn+",l:'"+lang+"',test:"+test+",noclose:"+noCloseBtn+",url:'"+url+"',shift_page_down:false,no_permanent_hide:true,insecure:true,api:2020.11}"
  var script = document.createElement('script')
  script.innerHTML = insertScript
  document.body.appendChild(script)
  
  try {
    document.addEventListener("DOMContentLoaded", $buo_f,false)
  } catch (error) {
    window.attachEvent("onload", $buo_f)
  }
}