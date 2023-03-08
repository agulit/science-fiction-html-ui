window.onload = function () {
	display_div("bs0");
	add_css_play('ls1_m_0');
	add_css_play('button1');
	add_css_play('button1_text');
	add_css_play('sl_c1_block');
}

function show_bs(id){
	//console.log('123')
	if(document.getElementById('bs0').style.display=='block'){
		div_quit('bs0');
		remove_css_play('ls1_m_0');
		add_css_play('ls1_m_1');
	}
	if(document.getElementById('bs1').style.display=='block'){
		
		div_quit('bs1');
		remove_css_play('ls1_m_1');
		add_css_play('ls1_m_2');
		setTimeout(function(){
			document.getElementById('button1').onclick=function(){show_bs('bs2');}	
				},10000)
	}
	if(document.getElementById('bs2').style.display=='block'){
		div_quit('bs2');
		
	}
	if(id!='bs2'){
		setTimeout(function(){
			document.getElementById(id).style.display='block';
			document.getElementById(id).style.visibility='visible';
			document.getElementById(id).style.opacity=1;
			},500);
		remove_css_play('button1');
		remove_css_play('button1_text');
		remove_css_play('sl_c1_block');
		setTimeout(function(){
			add_css_play('button1');
			add_css_play('button1_text');
			add_css_play('sl_c1_block');
			},100);
	}else{
		div_quit('bs2');
		div_quit('button1');
		div_quit('sl_c1');
		div_quit('ls1');
		ajax_jumppage_php('main');
	}
}

function add_css_play(id){
	document.getElementById(id).classList.add('play');
}
function remove_css_play(id){
	document.getElementById(id).classList.remove('play');
}
