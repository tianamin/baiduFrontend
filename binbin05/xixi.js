  
  
   
  
   var left_in_btn=document.getElementById("left_in");
     var left_out_btn=document.getElementById("left_out");
     var right_out_btn=document.getElementById("right_out");
     var right_in_btn=document.getElementById("right_in");
     var bubble=document.getElementById("bubble");
     var sub=document.getElementById("random");
     var select_sort=document.getElementById('select_sort');

     var input=document.getElementById("aqi_input");
     var queue=document.getElementById("aqi_output");
     var numbers=[];
    
    var time;

   

        left_in_btn.onclick=function(){

             
          if (parseInt(input.value)>=10 && parseInt(input.value)<=100  && input.value){
                        if (queue.childNodes.length<=60) {
                             var newnode=document.createElement("li");
                               queue.insertBefore(newnode,queue.childNodes[0]);
                               newnode.innerHTML=input.value;
                               newnode.style.height=input.value+"px";
                        }
                        else{
                          alert("超出范围！");
                        }

           }
           else{
            alert("please enter 10-100 number!");
           }
           
        };
 
      
        right_in_btn.onclick=function(){
            if (parseInt(input.value)>=10 && parseInt(input.value)<=100  && input.value){
                       
                       if (queue.childNodes.length<=60) {
                        	   var newnode=document.createElement("li");
                               newnode.innerHTML=input.value;
                               queue.appendChild(newnode);
                               
                               newnode.style.height=input.value+"px";
                        }
                        else{
                        	alert("超出范围！");
                        }
        	 }
        	 else{
        	 	alert("please enter 10-100 number!");
        	 }
    
     };
     left_out_btn.onclick=function(){
           
          // var newnode=document.createElement("li");
           queue.removeChild(queue.firstChild);


     };
     right_out_btn.onclick=function(){
  
          // var newnode=document.createElement("li");
           queue.removeChild(queue.lastChild);
     };

     bubble.onclick=function(){
        var show=queue.getElementsByTagName('li');
        var i=0,j=0; 
         for (var m = 0; m < show.length; m++) {
          numbers[m]=parseInt(show[m].innerHTML);
         } 
       time = setInterval(function() {  
        if (i < numbers.length) {  
            if (j < numbers.length - i) {  
                if (numbers[j] > numbers[j + 1]) {  
                    var temp = numbers[j];  
                    numbers[j] = numbers[j + 1];  
                    numbers[j + 1] = temp;  
                    queue.innerHTML = "";  
                    for (var k = 0; k < numbers.length; k++) {  
                        var textNode = document.createTextNode(numbers[k]);  
                        var divElement = document.createElement("li");  
                        divElement.appendChild(textNode);  
                         
                        divElement.style.height = numbers[k] + "px";  
                 
                        queue.appendChild(divElement);  
                    }  
                }  
                j++;  
            }  
            else{  
                i++;  
                j = 0;  
            }  
        }  
        else {  
            clearInterval(time);   
            return;  
        }  
    }, 100);  
        
   };
    select_sort.onclick=function(){
        var show=queue.getElementsByTagName('li');
        var i=0; 
        for (var m = 0; m < show.length; m++) {
          numbers[m]=parseInt(show[m].innerHTML);
         } 
       time = setInterval(function() {  
        if (i < numbers.length) { 
            var min=i; 
            for (var j=i+1;j < numbers.length ;j++) {  
                if (numbers[min] > numbers[j]) {  
                    min=j;

                    if (min!=i) {
                      var temp = numbers[i];  
                    numbers[i] = numbers[min];  
                    numbers[min] = temp;
                    }
                     

                     
                    queue.innerHTML = "";  
                    for (var k = 0; k < numbers.length; k++) {  
                        var textNode = document.createTextNode(numbers[k]);  
                        var divElement = document.createElement("li");  
                        divElement.appendChild(textNode);  
                        divElement.style.height = numbers[k] + "px";  
                 
                        queue.appendChild(divElement);  
                    }  
                }  
            }
            i++;      
        }  
        else {  
            clearInterval(time);   
            return;  
        }  
    }, 1000);  
        
 };
  

   

 sub.onclick=function(){   
    var numbers = random();   
    var i = 0, j = 0;  
    var time = setInterval(function() {  
        if (i < numbers.length) {  
            if (j < numbers.length - i) {  
                if (numbers[j] > numbers[j + 1]) {  
                    var temp = numbers[j];  
                    numbers[j] = numbers[j + 1];  
                    numbers[j + 1] = temp;  
                    queue.innerHTML = "";  
                    for (var k = 0; k < numbers.length; k++) {  
                        var textNode = document.createTextNode(numbers[k]);  
                        var divElement = document.createElement("li");  
                        divElement.appendChild(textNode);  
                         
                        divElement.style.height = numbers[k] + "px";  
                 
                        queue.appendChild(divElement);  
                    }  
                }  
                j++;  
            }  
            else{  
                i++;  
                j = 0;  
            }  
        }  
        else {  
            clearInterval(time);   
            return;  
        }  
    }, 100);    
} ; 


      
       
   function random(){  
        var numbers = [];  
        for (var i = 0; i < 60; i++) {  
        var number = Math.floor(Math.random() * 90 + 10);  
        numbers.push(number);  
        var divElement = document.createElement("li");  
        var parentElement = document.getElementById("aqi_output");  

        divElement.style.height = number + "px";  
        parentElement.appendChild(divElement);  
        } 
        numbers.unshift(100); 
        return numbers;  
        }  
          
        
         










  
   


      
       
  
        
         





