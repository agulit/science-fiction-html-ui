window.onload = function () {
	//display_div("bs0");
	//add_css_play('ls1_m_0');
	//add_css_play('button1');
	//add_css_play('button1_text');
	//add_css_play('sl_c1_block');
}

function quit_login(){
	parent.location.href='../login.html';
}
function show_tip(id){	
	document.getElementById(id).classList.add('play');
}

function add_css_play(id){
	document.getElementById(id).classList.add('play');
}
function remove_css_play(id){
	document.getElementById(id).classList.remove('play');
}
