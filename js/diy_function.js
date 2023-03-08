function ajax_getdata(){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	num=0;
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			re_arr=JSON.parse(this.responseText)
			for(var i=0;i<re_arr.length;i++){
				num+=1;
				console.log(re_arr[i])	
			}	
			for(var i=0;i<num;i++){
				console.log(re_arr[i])	
			}	
		}                     
	};

	xmlhttp.open("POST", "./php/md5.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
//检查是否是谷歌浏览器
function check_chrome(){
	if(getChromeVersion()) {
		var version = getChromeVersion();
		if(version < 77) {
			window.location.href='low_vision.html';
		}
	}else{
		window.location.href='low_vision.html';
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
//页面跳转函数_html
function ajax_jumppage(next,page){
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("next",next);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			//console.log(this.responseText);
			if(this.responseText=='success'){
				setInterval("window.location.href='"+page+"'",100);	
			}	
		}                     
	};
	xmlhttp.open("POST", "./php/jump_list.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
//页面跳转函数_php
function ajax_jumppage_php(next){
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("next",next);
	formd.append("php",1);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			//setInterval("location.href='"+this.responseText+"'",1000);
			location.href=this.responseText;
		}                     
	};
	xmlhttp.open("POST", "./jump_list.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}

function ajax_get_success(page){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log(this.responseText)
			if(this.responseText=='success'){
				return 'success';
			}
		}                     
	};
	xmlhttp.open("POST", page, true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(); 
}
//显示层函数
function display_div(id){
	document.getElementById(id).style.display='block';
	document.getElementById(id).style.visibility='visible';
}
//div退出函数
function div_quit(id){
	for(var i=0;i<=10;i++){
		if(i==10){
			setTimeout(function(){
				document.getElementById(id).style.visibility='hidden';
				document.getElementById(id).style.display='none';
				},50*i);
		}else{
			setTimeout(function(){
				document.getElementById(id).style.opacity=document.getElementById(id).style.opacity-0.1;
				},50*i);
		}
	}
	
}
//退出登录函数
function quit_login(){
	parent.location.href='../login.html';
}

function test(){
	alert();
}
