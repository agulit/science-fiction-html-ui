window.onload = function () {
	check_chrome();
	check_session();
	get_page();
	
}

function get_page(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			//console.log(this.responseText);
			document.getElementById('main_page').src=this.responseText;
		}                     
	};	
	xmlhttp.open("POST", "./php/echo_page.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(); 
}

function check_session(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			if(this.responseText!='success'){
				window.location.href='login.html';
			}
		}                     
	};
	xmlhttp.open("POST", "./php/check_session.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(); 	
}