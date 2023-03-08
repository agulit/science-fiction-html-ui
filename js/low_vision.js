window.onload = function () {
	get_chrome();
}

//检查是否是谷歌浏览器
function get_chrome(){
	if(getChromeVersion()) {
		var version = getChromeVersion();
		if(version < 77) {
			document.getElementById('message_div').innerHTML="您使用的谷歌浏览器版本过低，请将浏览器升级到最新版本！&nbsp;&nbsp;&nbsp;<a href='download/chrome_installer_64.exe'>点击下载Chrome浏览器</a>";
		}else{
			window.location.href='login.html';
		}
	}else{
		document.getElementById('message_div').innerHTML="浏览港综平台以正确使用系统功能！&nbsp;&nbsp;<a href='download/chrome_installer_64.exe'>点击下载Chrome浏览器</a>";
	}
}
//获取chrome版本
function getChromeVersion() {
	var arr = navigator.userAgent.split(' '); 
	var chromeVersion = '';
	for(var i=0;i < arr.length;i++){
		if(/chrome/i.test(arr[i]))
		chromeVersion = arr[i]
	}
	if(chromeVersion){
		return Number(chromeVersion.split('/')[1].split('.')[0]);
	} else {
		return false;
	}
}