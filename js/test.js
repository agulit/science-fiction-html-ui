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