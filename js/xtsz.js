window.onload = function () {
	//display_div("bs0");
	//add_css_play('ls1_m_0');
	//add_css_play('button1');
	//add_css_play('button1_text');
	//add_css_play('sl_c1_block');
}

/*------------------------------清空检索条件---------------------------------*/
/* 把检索条件赋予到隐藏域 */
function clear_condition(){
	document.getElementById('f_name').value='';
	document.getElementById('f_name_p').value='';
	document.getElementById('select_sex_man').classList.remove('selected');
	document.getElementById('select_sex_woman').classList.remove('selected');
	f_sex=document.getElementById('select_sex').value='';
	document.getElementById('select_sex_p').value='';
	f_csrq=document.getElementById('f_csrq').value='';
	document.getElementById('f_csrq_p').value='';
	f_csrq3=document.getElementById('f_csrq3').value='';
	document.getElementById('f_csrq3_p').value='';
	f_hxk=document.getElementById('f_hxk').value='';
	document.getElementById('f_hxk_p').value='';
	f_sfz=document.getElementById('f_sfz').value='';
	document.getElementById('f_sfz_p').value='';
	f_tqhz=document.getElementById('f_tqhz').value='';
	document.getElementById('f_tqhz_p').value='';
	f_qtzj=document.getElementById('f_qtzj').value='';
	document.getElementById('f_qtzj_p').value='';
	f_tel=document.getElementById('f_tel').value='';
	document.getElementById('f_tel_p').value='';
	f_addr=document.getElementById('f_addr').value='';
	document.getElementById('f_addr_p').value='';
	if(document.getElementById('select_zd_dm').value!=''){
		var zddm_arr=document.getElementById('select_zd_dm').value.split(',');
		for (var i=0;i<zddm_arr.length-1;i++){
			document.getElementById('zdfl_'+zddm_arr[i]).classList.remove('selected');
			document.getElementById('select_zd_'+zddm_arr[i]).value='0';	
		}
		document.getElementById('select_zd_dm').value='';
	}
	f_zdfl_1=document.getElementById('select_zd_dm').value;
	document.getElementById('select_zdfl_text').innerHTML='请选择重点分类标签';
	document.getElementById('select_zd_dm_p').value='';
	document.getElementById('select_zdfl_menu').style.height='0vw';
}

/*------------------------------显示修改人员信息div---------------------------------*/
function show_edit_user(u_name,kadm,role_id,r_name){	
	console.log(u_name,kadm,role_id,r_name);
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("u_name",u_name);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			show_tip1('edit_js_user_div',u_name,kadm,role_id,r_name);
		}                     
	};
	xmlhttp.open("POST", "./transform_u_name.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}

/*------------------------------显示删除人员信息div---------------------------------*/
function show_delete_user(u_name){	
	console.log(u_name);
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("u_name",u_name);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			show_tip2('delete_js_user_div',u_name);
		}                     
	};
	xmlhttp.open("POST", "./transform_u_name.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}

/*------------------------------显示新增人员信息div---------------------------------*/
function show_add_user(){	
	console.log('add_user');
	//console.log(u_name,kadm,role_id,r_name);
	// var xmlhttp = new XMLHttpRequest();
	// var formd= new FormData();
	// formd.append("u_name",u_name);
	// xmlhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) { 
	// 		show_tip('add_js_user_div');
	// 	}                     
	// };
	// xmlhttp.open("POST", "./transform_u_name.php", true);
	// xmlhttp.withCredentials=true;
	// xmlhttp.send(formd); 
	show_tip('add_js_user_div');
}
/*------------------------------显示新增单位信息div---------------------------------*/
function show_add_dw(){	
	console.log('add_dw');
	show_tip('add_js_dw_div');
}
/*------------------------------显示修改单位信息div---------------------------------*/
function show_edit_dw(dw_mc,dw_dm,dw_sjdw){	
	console.log('edit_dw');
	show_tip3('edit_js_dw_div',dw_mc,dw_dm,dw_sjdw);
	// console.log(u_name,kadm,role_id,r_name);
	// var xmlhttp = new XMLHttpRequest();
	// var formd= new FormData();
	// formd.append("u_name",u_name);
	// xmlhttp.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) { 
	// 		show_tip1('edit_js_dw_div',u_name,kadm,role_id,r_name);
	// 	}                     
	// };
	// xmlhttp.open("POST", "./transform_u_name.php", true);
	// xmlhttp.withCredentials=true;
	// xmlhttp.send(formd); 
}

/*------------------------------显示删除单位信息div---------------------------------*/
function show_delete_dw(dw_mc,dw_dm,dw_sjdw){	
	console.log('delete_dw'+dw_dm);
	show_tip4('delete_js_dw_div',dw_mc,dw_dm);
}

/*------------------------------显示新增角色信息div---------------------------------*/
function show_add_js(){	
	console.log('add_js');
	show_tip('add_js_js_div');
}

/*------------------------------显示修改角色信息div---------------------------------*/
function show_edit_js(js_mc,js_dm,js_sm){	
	console.log('edit_js');
	show_tip5('edit_js_js_div',js_mc,js_dm,js_sm);
}

/*------------------------------显示删除角色信息div---------------------------------*/
function show_delete_js(js_mc,js_dm,js_sm){	
	console.log('delete_js');
	show_tip6('delete_js_js_div',js_mc,js_dm,js_sm);
}

/*------------------------------返回查询页---------------------------------*/
/* 跳转到原查询页面，内容不改变 */
function return_main(){		
	window.parent.document.getElementById('main_page1').classList.remove('play');
	window.parent.document.getElementById('main_page').classList.remove('quit');	
}
/*-----------------------------显示隐藏层--------------------------------*/
function show_tip(id){	
	document.getElementById(id).classList.add('play');
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}

/*-----------------------------显示编辑单位隐藏层--------------------------------*/
function show_tip3(id,dw_mc,dw_dm,dw_sjdw){
	console.log(dw_mc,dw_dm,dw_sjdw);
	document.getElementById(id).classList.add('play');
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
	document.getElementById('dw_mc1').value=dw_mc;
	document.getElementById('dw_dm1').value=dw_dm;
	document.getElementById('dw_sjdw1').value=dw_sjdw;
}

/*-----------------------------显示删除人员隐藏层--------------------------------*/
function show_tip4(id,dw_mc,dw_dm){	
	document.getElementById(id).classList.add('play');
	document.getElementById('dw_mc2').value=dw_mc;
	document.getElementById('dw_dm2').value=dw_dm;
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}

/*-----------------------------显示编辑角色隐藏层--------------------------------*/
function show_tip5(id,js_mc,js_dm,js_sm){	
	document.getElementById(id).classList.add('play');
	document.getElementById('js_mc1').value=js_mc;
	document.getElementById('js_dm1').value=js_dm;
	document.getElementById('js_sm1').value=js_sm;
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}

/*-----------------------------显示删除角色隐藏层--------------------------------*/
function show_tip6(id,js_mc,js_dm,js_sm){	
	document.getElementById(id).classList.add('play');
	document.getElementById('js_mc2').value=js_mc;
	document.getElementById('js_dm2').value=js_dm;
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}

/*-----------------------------显示编辑人员隐藏层--------------------------------*/
function show_tip1(id,u_name,kadm,role_id,r_name){
	document.getElementById(id).classList.add('play');
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
	document.getElementById('user_dw_select1').value=kadm;
	document.getElementById('user_js_select1').value=role_id;
	document.getElementById('r_name1').value=r_name;
	document.getElementById('u_name1').value=u_name;
	document.getElementById('select_reset').value="";
}

/*-----------------------------显示删除人员隐藏层--------------------------------*/
function show_tip2(id,u_name){	
	document.getElementById(id).classList.add('play');
	document.getElementById('u_name2').value=u_name;
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}
function add_css_play(id){
	document.getElementById(id).classList.add('play');
}
function remove_css_play(id){
	document.getElementById(id).classList.remove('play');
}
/*------------设置焦点---------------*/
function set_focus(id){
	document.getElementById(id).focus();
	
}
/*---------------关闭隐藏层-----------------*/
function quit_tip_class2(id){
	document.getElementById(id).classList.remove('play');
	document.getElementById(id).classList.add('quit');
	//document.getElementById(id+'_text').classList.remove('play');
	document.getElementById('overlay').style.height='0%';
	document.getElementById('overlay').style.width='0%';
	setTimeout(function(){
		document.getElementById(id).classList.remove('quit');
			},1000)
}
/*---------------关闭center_div层-----------------*/
function quit_center_div_class1(id){
	if(id =="add_js_user_div"){
		clear_add_user();
	}
	if(id =="sh_tip_div"){
		ajax_jumppage_php('xtsz');
	}
	document.getElementById(id).classList.remove('play');
	document.getElementById('overlay').style.height='0%';
	document.getElementById('overlay').style.width='0%';	
}


/*----------------------------提交删除用户信息--------------------------------*/
function save_delete_user(){
	var u_name = document.getElementById('u_name2').value;
	console.log(u_name);
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("u_name",u_name);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			if(this.responseText=='success'){
				//document.getElementById('grbz_show').innerHTML=bz;
				quit_center_div_class1('delete_js_user_div');
				show_tip('sh_tip_div');
				//ajax_jumppage_php('xtsz');
				//document.location.reload();
			}
		}                     
	};
	xmlhttp.open("POST", "./save_delete_user.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
	
	}

/*----------------------------提交修改单位信息--------------------------------*/
function save_edit_dw(){
	var dw_mc = document.getElementById('dw_mc1').value;
	var dw_dm = document.getElementById('dw_dm1').value;
	var dw_sjdw = document.getElementById('dw_sjdw1').value;
	if(dw_mc==""){
		document.getElementById('sh_edit_dw_tip').innerHTML="请输入单位名称！";
	}else if(dw_dm==""){
		document.getElementById('sh_edit_dw_tip').innerHTML="请输入单位代码！";
	}else if(dw_sjdw==""){
		document.getElementById('sh_edit_dw_tip').innerHTML="请输入上级单位代码！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(dw_dm))){
		document.getElementById('sh_edit_dw_tip').innerHTML="单位代码不能为汉字！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(dw_mc)){
		document.getElementById('sh_edit_dw_tip').innerHTML="单位名称必须为汉字！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(dw_sjdw))){
		document.getElementById('sh_edit_dw_tip').innerHTML="上级单位代码不能为汉字！";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("kamc",dw_mc);
		formd.append("kadm",dw_dm);
		formd.append("sskadm",dw_sjdw);
		formd.append("kfbz",'1');
		formd.append("jtfsdm",'1');
		formd.append("sybj",'1');
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log(this.responseText);
				if(this.responseText=='success'){
					document.getElementById('sh_edit_dw_tip').innerHTML="";
					document.getElementById('dw_dm1').value='';
					document.getElementById('dw_mc1').value='';
					document.getElementById('dw_sjdw1').value='';
					quit_center_div_class1('edit_js_dw_div');
					show_tip('sh_tip_div');
				}
			}                     
		};
		xmlhttp.open("POST", "./save_edit_dw.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);

	}	
	
}

/*----------------------------提交删除单位信息--------------------------------*/
function save_delete_dw(){
	var dw_dm = document.getElementById('dw_dm2').value;
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("kadm",dw_dm);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			if(this.responseText=='success'){
				//document.getElementById('grbz_show').innerHTML=bz;
				quit_center_div_class1('delete_js_dw_div');
				show_tip('sh_tip_div');
				//ajax_jumppage_php('xtsz');
				//document.location.reload();
			}
		}                     
	};
	xmlhttp.open("POST", "./save_delete_dw.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
	
	}

/*----------------------------提交新增单位信息--------------------------------*/
function save_add_dw(){
	var dw_mc = document.getElementById('dw_mc').value;
	var dw_dm = document.getElementById('dw_dm').value;
	var dw_sjdw = document.getElementById('dw_sjdw').value;
	if(dw_mc==""){
		document.getElementById('sh_add_dw_tip').innerHTML="请输入单位名称！";
	}else if(dw_dm==""){
		document.getElementById('sh_add_dw_tip').innerHTML="请输入单位代码！";
	}else if(dw_sjdw==""){
		document.getElementById('sh_add_dw_tip').innerHTML="请输入上级单位代码！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(dw_dm))){
		document.getElementById('sh_add_dw_tip').innerHTML="单位代码不能为汉字！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(dw_mc)){
		document.getElementById('sh_add_dw_tip').innerHTML="单位名称必须为汉字！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(dw_sjdw))){
		document.getElementById('sh_add_dw_tip').innerHTML="上级单位代码不能为汉字！";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("dw_dm",dw_dm);
		formd.append("dw_mc",dw_mc);
		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				if(this.responseText=='success'){
					submit_add_dw();
				}else{
				document.getElementById('sh_add_dw_tip').innerHTML="单位代码或名称已存在！";
				//document.getElementById('tips_div').setAttribute('class','center_content_css');
			}
			}
		}
		xmlhttp.open("POST", "./check_dw_name.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);

	}	
	
}
function submit_add_dw(){
	var dw_mc = document.getElementById('dw_mc').value;
	var dw_dm = document.getElementById('dw_dm').value;
	var dw_sjdw = document.getElementById('dw_sjdw').value;
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("kamc",dw_mc);
		formd.append("kadm",dw_dm);
		formd.append("sskadm",dw_sjdw);
		formd.append("kfbz",'1');
		formd.append("jtfsdm",'1');
		formd.append("sybj",'1');
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log(this.responseText)
				if(this.responseText=='success'){
					document.getElementById('sh_add_dw_tip').innerHTML="";
					document.getElementById('dw_dm').value='';
					document.getElementById('dw_mc').value='';
					document.getElementById('dw_sjdw').value='';
					quit_center_div_class1('add_js_dw_div');
					show_tip('sh_tip_div');
					//ajax_jumppage_php('xtsz');
				}
			}                     
		};
		xmlhttp.open("POST", "./save_add_dw.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);	
	
}

/*----------------------------提交新增用户信息--------------------------------*/
function save_add_user(){
	document.getElementById('sh_add_user_tip').innerHTML="";
	var r_name = document.getElementById('r_name').value;
	var u_name = document.getElementById('u_name').value;
	if(u_name==""){
		document.getElementById('sh_add_user_tip').innerHTML="请输入用户名！";
	}else if(document.getElementById('user_dw_select').value==""){
		document.getElementById('sh_add_user_tip').innerHTML="请选择用户单位！";
	}else if(document.getElementById('user_js_select').value==""){
		document.getElementById('sh_add_user_tip').innerHTML="请选择用户角色！";
	}else if(r_name==""){
		document.getElementById('sh_add_user_tip').innerHTML="请输入真实姓名！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(u_name))){
		document.getElementById('sh_add_user_tip').innerHTML="用户名不能为汉字！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(r_name)){
		document.getElementById('sh_add_user_tip').innerHTML="真实姓名必须为汉字！";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("u_name",u_name);
		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				console.log(this.responseText);
				if(this.responseText=='success'){
                   submit_add_user();
				}else{
				document.getElementById('sh_add_user_tip').innerHTML="用户名已存在！";
				//document.getElementById('tips_div').setAttribute('class','center_content_css');
			}
			}
		}
		xmlhttp.open("POST", "./check_user_id.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);
	}		
}

function submit_add_user(){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("u_name",document.getElementById('u_name').value);
	formd.append("passwd",'1');
	formd.append("dw",document.getElementById('user_dw_select').value);
	formd.append("role",document.getElementById('user_js_select').value);
	formd.append("r_name",document.getElementById('r_name').value);
	formd.append("pwd_csh",'0');
	formd.append("first_time",'0');
	xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			if(this.responseText=='success'){
				document.getElementById('sh_add_user_tip').innerHTML="";
				document.getElementById('user_dw_select').options[0].selected=true;
				document.getElementById('user_js_select').options[0].selected=true;
				document.getElementById('u_name').value='';
				document.getElementById('r_name').value='';
				quit_center_div_class1('add_js_user_div');
				show_tip('sh_tip_div');
				//ajax_jumppage_php('xtsz');
				//document.location.reload();
			}
		}
	}
	xmlhttp.open("POST", "./save_add_user.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd);
}
/*----------------------------清除新增div信息--------------------------------*/
function clear_add_user(){
	document.getElementById('sh_add_user_tip').innerHTML="";
	document.getElementById('user_dw_select').options[0].selected=true;
	document.getElementById('user_js_select').options[0].selected=true;
	document.getElementById('u_name').value='';
	document.getElementById('r_name').value='';
}
/*----------------------------提交编辑用户信息--------------------------------*/
function save_edit_user(){
	var r_name = document.getElementById('r_name1').value;
	console.log(document.getElementById('u_name1').value);
    if(document.getElementById('select_reset').value==""){
    	document.getElementById('sh_edit_user_tip').innerHTML="请选择是否初始化密码！";
    }else if(document.getElementById('user_dw_select1').value==""){
		document.getElementById('sh_edit_user_tip').innerHTML="请选择用户单位！";
	}else if(document.getElementById('user_js_select1').value==""){
		document.getElementById('sh_edit_user_tip').innerHTML="请选择用户角色！";
	}else if(r_name==""){
		document.getElementById('sh_edit_user_tip').innerHTML="请输入真实姓名！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(r_name)){
		document.getElementById('sh_edit_user_tip').innerHTML="真实姓名必须为汉字！";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("u_name",document.getElementById('u_name1').value);
		if (document.getElementById('select_reset').value == "2") {
			console.log("初始化"+document.getElementById('select_reset').value);
			formd.append("passwd",'1');
			formd.append("pwd_csh",'1');
			formd.append("first_time",'0');
		} else{
			formd.append("passwd",'');
			formd.append("pwd_csh",'0');
			formd.append("first_time",'');			
		}		
		formd.append("dw",document.getElementById('user_dw_select1').value);
		formd.append("role",document.getElementById('user_js_select1').value);
		formd.append("r_name",document.getElementById('r_name1').value);

		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				if(this.responseText=='success'){
				document.getElementById('sh_edit_user_tip').innerHTML="";
				document.getElementById('user_dw_select1').options[0].selected=true;
				document.getElementById('user_js_select1').options[0].selected=true;
				document.getElementById('u_name1').value='';
				document.getElementById('r_name1').value='';
				document.getElementById('select_noreset_pw').classList.remove('selected');
				document.getElementById('select_reset_pw').classList.remove('selected');
				quit_center_div_class1('edit_js_user_div');		
				show_tip('sh_tip_div');
				//ajax_jumppage_php('xtsz');
				//document.location.reload();
				}
			}
		}
		xmlhttp.open("POST", "./save_edit_user.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);

	}	
}

/*----------------------------提交新增角色信息--------------------------------*/
function save_add_js(){
	var js_mc = document.getElementById('js_mc').value;
	var js_dm = document.getElementById('js_dm').value;
	var js_sm = document.getElementById('js_sm').value;
	if(js_mc==""){
		document.getElementById('sh_add_js_tip').innerHTML="请输入角色名称！";
	}else if(js_dm==""){
		document.getElementById('sh_add_js_tip').innerHTML="请输入角色代码！";
	}else if(js_sm==""){
		document.getElementById('sh_add_js_tip').innerHTML="请输入角色说明！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(js_dm))){
		document.getElementById('sh_add_js_tip').innerHTML="角色代码不能为汉字！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(js_mc)){
		document.getElementById('sh_add_js_tip').innerHTML="角色名称必须为汉字！";
	}else{
		console.log("role_id"+js_dm+"role_name"+js_mc);
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("role_id",js_dm);
		formd.append("role_name",js_mc);
		xmlhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200){
				if(this.responseText=='success'){
                   check_js_id(js_dm,js_mc);
				}else{
				document.getElementById('sh_add_js_tip').innerHTML="角色名称已存在！";
				//document.getElementById('tips_div').setAttribute('class','center_content_css');
			}
			}
		}
		xmlhttp.open("POST", "./check_js_name.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);
	}	
	
}

function check_js_id(js_dm,js_mc){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("role_id",js_dm);
	formd.append("role_name",js_mc);
	xmlhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			if(this.responseText=='success'){
				console.log(this.responseText);
				submit_add_js();
			}else{
			document.getElementById('sh_add_js_tip').innerHTML="角色代码已存在！";
			//document.getElementById('tips_div').setAttribute('class','center_content_css');
		}
		}
	}
	xmlhttp.open("POST", "./check_js_id.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd);
}

function submit_add_js(){
	var js_mc = document.getElementById('js_mc').value;
	var js_dm = document.getElementById('js_dm').value;
	var js_sm = document.getElementById('js_sm').value;
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("role_id",js_dm);
		formd.append("role_name",js_mc);
		formd.append("role_gn",js_sm);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log(this.responseText);
				if(this.responseText=='success'){
					document.getElementById('sh_add_js_tip').innerHTML="";
					document.getElementById('js_mc').value='';
					document.getElementById('js_dm').value='';
					document.getElementById('js_sm').value='';
					quit_center_div_class1('add_js_js_div');
					show_tip('sh_tip_div');
					//ajax_jumppage_php('xtsz');
				}
			}                     
		};
		xmlhttp.open("POST", "./save_add_js.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);	
	
}

/*----------------------------提交修改角色信息--------------------------------*/
function save_edit_js(){
	var js_mc = document.getElementById('js_mc1').value;
	var js_dm = document.getElementById('js_dm1').value;
	var js_sm = document.getElementById('js_sm1').value;
	if(js_mc==""){
		document.getElementById('sh_edit_js_tip').innerHTML="请输入角色名称！";
	}else if(js_dm==""){
		document.getElementById('sh_edit_js_tip').innerHTML="请输入角色代码！";
	}else if(js_sm==""){
		document.getElementById('sh_edit_js_tip').innerHTML="请输入角色说明！";
	}else if(!(/[^\u4e00-\u9fa5]+$/i.test(js_dm))){
		document.getElementById('sh_edit_js_tip').innerHTML="角色代码不能为汉字！";
	}else if(/[^\u4e00-\u9fa5]+$/i.test(js_mc)){
		document.getElementById('sh_edit_js_tip').innerHTML="角色名称必须为汉字！";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("role_name",js_mc);
		formd.append("role_id",js_dm);
		formd.append("role_gn",js_sm);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log(this.responseText);
				if(this.responseText=='success'){
					document.getElementById('sh_edit_js_tip').innerHTML="";
					document.getElementById('js_mc1').value='';
					document.getElementById('js_dm1').value='';
					document.getElementById('js_sm1').value='';
					quit_center_div_class1('edit_js_js_div');
					show_tip('sh_tip_div');
				}
			}                     
		};
		xmlhttp.open("POST", "./save_edit_js.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd);

	}	
	
}

/*----------------------------提交删除角色信息--------------------------------*/
function save_delete_js(){
	var js_mc = document.getElementById('js_mc2').value;
	var js_dm = document.getElementById('js_dm2').value;
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("role_id",js_dm);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log(this.responseText);
			if(this.responseText=='success'){
				document.getElementById('js_mc2').value='';
				document.getElementById('js_dm2').value='';
				quit_center_div_class1('delete_js_js_div');
				show_tip('sh_tip_div');
			}
		}                     
	};
	xmlhttp.open("POST", "./save_delete_js.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd);
	
}

/*-------------------------------------------------------选择重置密码条件-------------------------------------------------------------*/
function check_reset(reset) {
	if(reset==document.getElementById('select_reset').value){
		document.getElementById('select_reset').value='';
	}else{
		document.getElementById('select_reset').value=reset;
	}
	if(document.getElementById('select_reset').value==2){
		document.getElementById('select_reset_pw').classList.add('selected');
		document.getElementById('select_noreset_pw').classList.remove('selected');
	}
	if(document.getElementById('select_reset').value==1){
		document.getElementById('select_noreset_pw').classList.add('selected');
		document.getElementById('select_reset_pw').classList.remove('selected');
	}
	if(document.getElementById('select_reset').value==''){
		document.getElementById('select_noreset_pw').classList.remove('selected');
		document.getElementById('select_reset_pw').classList.remove('selected');
	}
}
/*-------------------清空提示信息----------------------*/
function clear_sh_tip(){
	document.getElementById('sh_tip').innerHTML="";
}

/*-------------------清空核查结果select----------------------*/
function clear_sh_s(){
	document.getElementById('s_sh').options[0].selected=true;
}

/*-------------------清空提示信息----------------------*/
function clear_sh_tip(){
	document.getElementById('sh_tip').innerHTML="";
}
/*-------------------清空select框----------------------*/
function clear_select(id){
	document.getElementById(id).options[0].selected=true;
}
/*-------------------清空input框----------------------*/
function clear_text(id){
	document.getElementById(id).value='';
}


/*-------------------清空信息----------------------*/
function clear_lxfs_tip(){
	document.getElementById('add_addr').value="";
	document.getElementById('add_tel').value="";
}

/*-------------------清空信息----------------------*/
function clear_dcsf(){
	document.getElementById('add_dcsf_xm').value='';
	document.getElementById('s_dcsf_xb').options[0].selected=true;;
	document.getElementById('add_dcsf_csrq').value='';
	document.getElementById('s_dcsf_gj').options[0].selected=true;;
	document.getElementById('s_dcsf_zj').options[0].selected=true;;
	document.getElementById('add_dcsf_zjhm').value='';
	document.getElementById('dcsf_tip').innerHTML='';
}


/*-------------------------------------------显示违法违规事件详情函数---------------------------------------------*/
function get_wfwg(id){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("sjbh",id);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			document.getElementById('wfwg_detail').innerHTML=this.responseText;
		}
	}
	xmlhttp.open("POST", "./get_wfwgry_sj.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}


/*-------------------------------------------等待界面函数---------------------------------------------*/
function showloading(){
	document.getElementById('scan_hker_div').classList.remove('quit');
	document.getElementById('overlay').style.height='100%';
	document.getElementById('overlay').style.width='100%';
}
function quitloading(){
	document.getElementById('scan_hker_div').classList.add('quit');
	document.getElementById('overlay').style.height='0%';
	document.getElementById('overlay').style.width='0%';
}

/*-------------------------------------------显示标签说明函数---------------------------------------------*/
function show_bqsm(content){
	document.getElementById('bqsm').innerHTML=content;
}
function hide_bqsm(){
	document.getElementById('bqsm').innerHTML='把鼠标移到标签上可查看标签说明';
}
/*-------------------------------------------显示审核详情函数---------------------------------------------*/
function show_sh_detail(id){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("shbh",id);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			document.getElementById('hcjg_detail').innerHTML=this.responseText;
		}
	}
	xmlhttp.open("POST", "./get_sh_detail.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}


/*-------------------清空补充其他证件信息----------------------*/
function clear_qtzj(){
	document.getElementById('s_zj').options[0].selected=true;
	document.getElementById('add_qtzj').value='';
	document.getElementById('qtzj_tip').innerHTML='';
}
/*-------------------------------------------提交数据ajax函数---------------------------------------------*/
function ajax_senddata(send_id,send_value){
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("id",send_id);
	formd.append("value",send_id,send_value);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log("success")
		}
		}
	xmlhttp.open("POST", "./transform_session.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}