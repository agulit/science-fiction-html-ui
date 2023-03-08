//判断浏览器是否是谷歌浏览器，版本号是否满足需求
window.onload = function () {
	//check_chrome();
	del_session();
	document.getElementById('yonghu').focus();
}

function del_session(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
		}                     
	};	
	xmlhttp.open("POST", "./php/del_session.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(); 
}

//确定两个密码是否一致，一致的话进行跳转
function check_csh(ft){
	pwd1=document.getElementById('passwd').value;
	pwd2=document.getElementById('passwd_csh').value;
	console.log(pwd1);
	console.log(pwd2);
	if(pwd1!=pwd2){
		document.getElementById('login_message').innerHTML='密码不一致，请重新输入';
		document.getElementById('passwd').value="";
		document.getElementById('passwd_pos').value="";
		document.getElementById('passwd_csh').value="";
		document.getElementById('passwd_csh_pos').value="";
		document.getElementById('yonghu').value="";
		document.getElementById('input_mm').value="";
	}
	else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("newmm",pwd1);
		document.getElementById('login_message').innerHTML='正在修改密码';
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				if(this.responseText=='success'){
					document.getElementById('login_message').innerHTML='修改成功，正在跳转...';
					//if(ft=='ft'){
						//ajax_jumppage('law','index.html');
					//}else{
						ajax_jumppage('main','index.html');
					//}
									
				}
			}                     
		};
		xmlhttp.open("POST", "./php/csh_mm.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd); 
	}
}
//模拟密码输入框，避免密码记忆
function input_passwd(input_v){
	if(window.event.keyCode==8){
		pos=document.getElementById('input_mm').selectionStart;
		arr=input_v.split("");
		arr_h=document.getElementById('passwd').value.split("");
		passwd='';
		passwd_h='';

		if(document.getElementById('passwd_pos').value!=0){
			for(var i=0;i<arr_h.length;i++){			
				if(i!=pos){
					passwd=passwd+arr_h[i];
					passwd_h=passwd_h+'*';		
				}	
			}
		}else{
			for(var i=0;i<arr_h.length;i++){
				passwd=passwd+arr_h[i];
				passwd_h=passwd_h+'*';			
			}
		}
			
		
		document.getElementById('input_mm').value=passwd_h;
		document.getElementById('passwd').value=passwd;
	}else{
		arr=input_v.split("");
		arr_h=document.getElementById('passwd').value.split("");
		passwd='';
		passwd_h='';
		focus_position=0;
		for(var i=0;i<arr.length;i++){			
			if(arr[i].indexOf('*')==-1){
				passwd=passwd+arr[i];
				focus_position=i+1;
		
			}
			if(arr_h.length>i){
				passwd=passwd+arr_h[i];
			}		
			passwd_h=passwd_h+'*';
		}	
		document.getElementById('input_mm').value=passwd_h;
		document.getElementById('passwd').value=passwd;
		document.getElementById('input_mm').focus();
		if(focus_position!=0){
			document.getElementById('input_mm').setSelectionRange(focus_position,focus_position);
		}
	}
	document.getElementById('passwd_pos').value=document.getElementById('input_mm').selectionStart;
}
//登录成功后，将用户框改为新密码输入框，模拟密码输入框，避免密码记忆
function input_passwd2(input_v){
	if(window.event.keyCode==8){
		pos=document.getElementById('yonghu').selectionStart;
		arr=input_v.split("");
		arr_h=document.getElementById('passwd_csh').value.split("");
		passwd='';
		passwd_h='';

		if(document.getElementById('passwd_csh_pos').value!=0){
			for(var i=0;i<arr_h.length;i++){			
				if(i!=pos){
					passwd=passwd+arr_h[i];
					passwd_h=passwd_h+'*';		
				}	
			}
		}else{
			for(var i=0;i<arr_h.length;i++){
				passwd=passwd+arr_h[i];
				passwd_h=passwd_h+'*';			
			}
		}
			
		
		document.getElementById('yonghu').value=passwd_h;
		document.getElementById('passwd_csh').value=passwd;
	}else{
		arr=input_v.split("");
		arr_h=document.getElementById('passwd_csh').value.split("");
		passwd='';
		passwd_h='';
		focus_position=0;
		for(var i=0;i<arr.length;i++){			
			if(arr[i].indexOf('*')==-1){
				passwd=passwd+arr[i];
				focus_position=i+1;
		
			}
			if(arr_h.length>i){
				passwd=passwd+arr_h[i];
			}		
			passwd_h=passwd_h+'*';
		}	
		document.getElementById('yonghu').value=passwd_h;
		document.getElementById('passwd_csh').value=passwd;
		document.getElementById('yonghu').focus();
		if(focus_position!=0){
			document.getElementById('yonghu').setSelectionRange(focus_position,focus_position);
		}
	}
	document.getElementById('passwd_csh_pos').value=document.getElementById('yonghu').selectionStart;
}

//监听页面回车事件
document.onkeydown = function(event){
	var code = event.keyCode;
	console.log(event.keyCode);
	if (code == 13) {
	   login();
	}	
}

//判断用户名密码是否正确
function login(){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	
	yonghu=document.getElementById('yonghu').value;
	mima=document.getElementById('passwd').value;
	console.log(yonghu);
	console.log(mima);
	formd.append("yonghu",yonghu);
	formd.append("mima",mima);

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			if(this.responseText=='success'){
				document.getElementById('login_message').innerHTML='登录成功，正在跳转...';
				ajax_jumppage('main','index.html');
			}
			else if(this.responseText=='first_time'){
				csh_mm('ft');
			}
			else if(this.responseText=='csh'){
				csh_mm('csh');
			}
			else{
				document.getElementById('login_message').innerHTML='用户名或密码错误';				
			}
		}                     
	};
	xmlhttp.open("POST", "./php/check_login.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
//初始化密码
function csh_mm(ft){
	if(ft=='ft'){
		document.getElementById('login_message').innerHTML='首次登陆，请更改密码';
	}else{
		document.getElementById('login_message').innerHTML='请更改密码';
	}
	document.getElementById('yonghu').setAttribute("onkeyup","input_passwd2(this.value)");
	document.getElementById('yonghu').value='';
	document.getElementById('input_mm').value='';
	document.getElementById('passwd').value='';
	document.getElementById('yonghu').placeholder='请输入密码';
	document.getElementById('input_mm').placeholder='请再次输入密码确认';
	document.getElementById('confirm_button').innerHTML="<a onclick='check_csh(&quot;"+ft+"&quot;)' style='cursor: pointer;'>提&nbsp;&nbsp;&nbsp;&nbsp;交</a>"
}