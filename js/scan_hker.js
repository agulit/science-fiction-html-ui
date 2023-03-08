window.onload = function () {
	//display_div("bs0");
	//add_css_play('ls1_m_0');
	//add_css_play('button1');
	//add_css_play('button1_text');
	//add_css_play('sl_c1_block');
}
/*-------------------------------------------------------选择性别筛选条件-------------------------------------------------------------*/
function check_sex(sex) {
	if(sex==document.getElementById('select_sex').value){
		document.getElementById('select_sex').value='';
	}else{
		document.getElementById('select_sex').value=sex;
	}
	if(document.getElementById('select_sex').value==1){
		document.getElementById('select_sex_man').classList.add('selected');
		document.getElementById('select_sex_woman').classList.remove('selected');
	}
	if(document.getElementById('select_sex').value==2){
		document.getElementById('select_sex_woman').classList.add('selected');
		document.getElementById('select_sex_man').classList.remove('selected');
	}
	if(document.getElementById('select_sex').value==''){
		document.getElementById('select_sex_woman').classList.remove('selected');
		document.getElementById('select_sex_man').classList.remove('selected');
	}
}
/*-------------------------------------------------------选择重点分类筛选条件-------------------------------------------------------------*/
function check_zdfl(zdfl) {
	zdfl_dm=document.getElementById('select_zd_dm').value;
	if(zdfl_dm==''){
		zdfl_text="";

	}else{
		zdfl_text=document.getElementById('select_zdfl_text').innerHTML;
	}
	if(document.getElementById('select_zd_'+zdfl).value=='0'){		
		document.getElementById('zdfl_'+zdfl).classList.add('selected');
		document.getElementById('select_zd_'+zdfl).value='1';
		zdfl_text=zdfl_text+document.getElementById('zdfl_'+zdfl).innerHTML+'&nbsp;';
		document.getElementById('select_zd_dm').value=zdfl_dm+zdfl+',';
	}else{
		document.getElementById('zdfl_'+zdfl).classList.remove('selected');
		document.getElementById('select_zd_'+zdfl).value='0';	
		document.getElementById('select_zd_dm').value=zdfl_dm.replace(zdfl+',','');
		zdfl_text=zdfl_text.replace(document.getElementById('zdfl_'+zdfl).innerHTML+'&nbsp;','')
	}
	if(document.getElementById('select_zd_dm').value!=''){
		document.getElementById('select_zdfl_text').innerHTML=zdfl_text;
	}else{
		document.getElementById('select_zdfl_text').innerHTML='请选择重点分类标签';
	}
}

function show_menu(id){
	if(document.getElementById(id).style.height=='0vw'){
		document.getElementById(id).style.height='20vw';
	}else{
		document.getElementById(id).style.height='0vw';
	}
	
}
/*-------------------------------------------------------显示检索结果-------------------------------------------------------------*/
function show_result(f_page){
	//console.log(f_page)
	showloading();
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	
	formd.append("name",document.getElementById('f_name_p').value);
	formd.append("sex",document.getElementById('select_sex_p').value);
	formd.append("csrq",document.getElementById('f_csrq_p').value);
	formd.append("csrq3",document.getElementById('f_csrq3_p').value);
	formd.append("hxk",document.getElementById('f_hxk_p').value);
	formd.append("sfz",document.getElementById('f_sfz_p').value);
	formd.append("tqhz",document.getElementById('f_tqhz_p').value);
	formd.append("qtzj",document.getElementById('f_qtzj_p').value);
	formd.append("tel",document.getElementById('f_tel_p').value);
	formd.append("addr",document.getElementById('f_addr_p').value);
	formd.append("zdfl",document.getElementById('select_zd_dm_p').value);
	formd.append("page",f_page);
	
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			document.getElementById('result_div').innerHTML=this.responseText;	
			quitloading();
		}                     
	};
	xmlhttp.open("POST", "./find_people.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
/*------------------------------开始检索---------------------------------*/
/* 把检索条件赋予到隐藏域 */
function start_find(){
	f_name=document.getElementById('f_name').value;
	document.getElementById('f_name_p').value=document.getElementById('f_name').value;
	f_sex=document.getElementById('select_sex').value;
	document.getElementById('select_sex_p').value=document.getElementById('select_sex').value;
	f_csrq=document.getElementById('f_csrq').value;
	document.getElementById('f_csrq_p').value=document.getElementById('f_csrq').value;
	f_csrq3=document.getElementById('f_csrq3').value;
	document.getElementById('f_csrq3_p').value=document.getElementById('f_csrq3').value;
	f_hxk=document.getElementById('f_hxk').value;
	document.getElementById('f_hxk_p').value=document.getElementById('f_hxk').value;
	f_sfz=document.getElementById('f_sfz').value;
	document.getElementById('f_sfz_p').value=document.getElementById('f_sfz').value;
	f_tqhz=document.getElementById('f_tqhz').value;
	document.getElementById('f_tqhz_p').value=document.getElementById('f_tqhz').value;
	f_qtzj=document.getElementById('f_qtzj').value;
	document.getElementById('f_qtzj_p').value=document.getElementById('f_qtzj').value;
	f_tel=document.getElementById('f_tel').value;
	document.getElementById('f_tel_p').value=document.getElementById('f_tel').value;
	f_addr=document.getElementById('f_addr').value;
	document.getElementById('f_addr_p').value=document.getElementById('f_addr').value;
	f_zdfl_1=document.getElementById('select_zd_dm').value;
	document.getElementById('select_zd_dm_p').value=document.getElementById('select_zd_dm').value;
	document.getElementById('select_zdfl_menu').style.height='0vw';
	document.getElementById('result_div').innerHTML='';
	showloading();
	show_result(1);
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

/*------------------------------获取人员详细信息---------------------------------*/
/* 显示选择理由层 */
function show_select_reason(id){		
	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("hkid",id);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			show_tip('add_js_reason_div');
		}                     
	};
	xmlhttp.open("POST", "./transform_hkid.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
/* 跳转到详情页 */
function get_people_detail(reason){
	console.log(reason);
	document.getElementById('js_reason_select').options[0].selected=true;
	window.parent.document.getElementById('main_page').classList.add('quit');
	quit_tip_class2('add_js_reason_div');
	window.parent.document.getElementById('main_page1').src='./php/people_detail.php';
	setTimeout(function(){
		window.parent.document.getElementById('main_page1').classList.add('play');
		},500);
	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("reason",reason);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log("success")
		}
	}
	xmlhttp.open("POST", "./add_sh_reason.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 

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
	document.getElementById(id).classList.remove('play');
	document.getElementById('overlay').style.height='0%';
	document.getElementById('overlay').style.width='0%';
}

/*-----------------------------提交个人档案信息--------------------------------*/
/*---------------保存个人档案修改-----------------*/
function save_bz(hkid){
	bz=document.getElementById('grbz').value;

	var xmlhttp = new XMLHttpRequest();
	var formd= new FormData();
	formd.append("hkid",hkid);
	formd.append("bz",bz);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log(this.responseText)
			if(this.responseText=='success'){
				document.getElementById('grbz_show').innerHTML=bz;
				quit_center_div_class1('edit_bz');
			}
		}                     
	};
	xmlhttp.open("POST", "./save_people_bz.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 
}
/*---------------不保存个人档案退出-----------------*/
function no_save_bz(){
	console.log(document.getElementById('grbz').value);
	document.getElementById('grbz').value=document.getElementById('grbz_show').innerHTML;

}


/*----------------------------审核信息相关--------------------------------*/
/*---------------判断审核结果-----------------*/
function comfirn_sh(){
	if((document.getElementById('s_sh').value==2)&&(document.getElementById('sh_text').value=='')){
		document.getElementById('sh_tip').innerHTML="核查结果异常须输入核查详情";
	}else if(document.getElementById('s_sh').value==""){
		document.getElementById('sh_tip').innerHTML="请选择核查结果";
	}else{
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("state",document.getElementById('s_sh').value);
		formd.append("content",document.getElementById('sh_text').value);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log("success")
			}
			}
		xmlhttp.open("POST", "./add_sh.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd); 
		quit_center_div_class1('add_hcjg_div');
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

/*----------------------------添加标签相关--------------------------------*/
/*---------------判断添加标签结果-----------------*/
function comfirn_bq(){
	if((document.getElementById('s_zdfl').value!='')&&(document.getElementById('zdfl_sm_text').value=='')){
		document.getElementById('bq_tip').innerHTML="添加标签须输入添加理由";
	}else{
		
		if((document.getElementById('s_sffl').value!="")||(document.getElementById('s_zdfl').value!="")){
			var xmlhttp = new XMLHttpRequest();
			var formd=new FormData();
			formd.append("sffl",document.getElementById('s_sffl').value);
			formd.append("zdfl",document.getElementById('s_zdfl').value);
			formd.append("zdflsm",document.getElementById('zdfl_sm_text').value);
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) { 
					clear_select('s_sffl');
					clear_select('s_zdfl');
					clear_text('zdfl_sm_text');
					quit_center_div_class1('add_bq_div');
				}
			}
			xmlhttp.open("POST", "./add_sffl.php", true);
			xmlhttp.withCredentials=true;
			xmlhttp.send(formd); 			
		}
		
	} 
	
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

/*----------------------------补充联系方式相关--------------------------------*/
/*---------------判断审核结果-----------------*/
function add_lxfs(id){
	tel=document.getElementById('add_tel').value;
	addr=document.getElementById('add_addr').value;
	if((tel!='')||(addr!='')){
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("tel",tel);
		formd.append("addr",addr);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log("success")
			}
			}
		xmlhttp.open("POST", "./add_lxfs.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd); 
	}	
	quit_center_div_class1('add_lxfs_div');
}
/*-------------------清空信息----------------------*/
function clear_lxfs_tip(){
	document.getElementById('add_addr').value="";
	document.getElementById('add_tel').value="";
}

/*----------------------------补充多重身份相关--------------------------------*/
/*---------------判断补充结果-----------------*/
function add_dcsf(){
	xm=document.getElementById('add_dcsf_xm').value;
	xb=document.getElementById('s_dcsf_xb').value;
	csrq=document.getElementById('add_dcsf_csrq').value;
	gjdqdm=document.getElementById('s_dcsf_gj').value;
	zjlb=document.getElementById('s_dcsf_zj').value;
	zjhm=document.getElementById('add_dcsf_zjhm').value;
	if((xm!='')&&(xb!='')&&(csrq!='')&&(gjdqdm!='')&&(zjlb!='')&&(zjhm!='')){
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("xm",xm);
		formd.append("xb",xb);
		formd.append("csrq",csrq);
		formd.append("gjdqdm",gjdqdm);
		formd.append("zjlb",zjlb);
		formd.append("zjhm",zjhm);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				clear_dcsf();
				quit_center_div_class1('add_dcsf_div');
				document.getElementById('dcsf_tip').innerHTML='';
				console.log("success")
			}
		}
		xmlhttp.open("POST", "./add_dcsf.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd); 
	}else{
		document.getElementById('dcsf_tip').innerHTML="请补充完整资料";
	}	
	
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

/*----------------------------补充其他证件相关--------------------------------*/
/*---------------提交补充信息-----------------*/
function add_qtzj(){
	zjlb=document.getElementById('s_zj').value;
	zjhm=document.getElementById('add_qtzj').value;

	if((zjlb!='')&&(zjhm!='')){
		var xmlhttp = new XMLHttpRequest();
		var formd=new FormData();
		formd.append("zjlb",zjlb);
		formd.append("zjhm",zjhm);
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) { 
				console.log("success")
				quit_center_div_class1('add_qtzj_div');
				clear_qtzj();
			}
		}
		xmlhttp.open("POST", "./add_qtzj.php", true);
		xmlhttp.withCredentials=true;
		xmlhttp.send(formd); 
	}else{
		document.getElementById('qtzj_tip').innerHTML='请补充完整信息再提交';
	}	
	
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