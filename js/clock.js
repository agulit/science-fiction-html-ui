var newDate = '';
     getLangDate();
     function dateFilter(date){ //值小于10时，在前面补0
         if(date < 10){
             return "0"+date;
         }
         return date;
     }
 
     function getLangDate(){
         var dateObj = new Date(); //表示当前系统时间的Date对象
         var year = dateObj.getFullYear(); //当前系统时间的完整年份值
         var month = dateObj.getMonth()+1; //当前系统时间的月份值
         var date = dateObj.getDate(); //当前系统时间的月份中的日
         var day = dateObj.getDay(); //当前系统时间中的星期值
         var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
         var week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
         var hour = dateObj.getHours(); //当前系统时间的小时值
         var minute = dateObj.getMinutes(); //当前系统时间的分钟值
         var second = dateObj.getSeconds(); //当前系统时间的秒钟值
         var timeValue = "" +((hour >= 12) ? (hour >= 18) ? "晚上" : "下午" : "上午" ); //当前时间属于上午、晚上还是下午
         newDate =dateFilter(year)+"."+dateFilter(month)+"."+dateFilter(date)+" "+dateFilter(hour)+":"+dateFilter(minute)+":"+dateFilter(second);
         document.getElementById("nowTime").innerHTML = newDate;
         setTimeout(getLangDate,1000);
     }