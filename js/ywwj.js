function get_sec_fl(sjdm){
	
	select_obj=document.getElementById('sec_fl');
	select_len=select_obj.options.length;
	console.log(select_len)
	for(var i=1;i<select_len;i++){
		document.getElementById('sec_fl').options.remove(1);
	}	

	var xmlhttp = new XMLHttpRequest();
	var formd=new FormData();
	formd.append("sjdm",sjdm);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) { 
			console.log(this.responseText)
			re_arr=JSON.parse(this.responseText)
			for(var i=0;i<re_arr.length;i++){
				var option=document.createElement("option");
				option.setAttribute("value",re_arr[i][0]);
				option.appendChild(document.createTextNode(re_arr[i][1]));
				select_obj.appendChild(option);

			}	

		}
	}
	xmlhttp.open("POST", "./get_sec_fl.php", true);
	xmlhttp.withCredentials=true;
	xmlhttp.send(formd); 

}