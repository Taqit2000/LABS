function submitted ()
{
	document.getElementById("bodyId").innerHTML= "Form Submitted"; 
   

}


function time()
{
	document.getElementById("timerP").innerHTML= new Date(); 
	
	 const colors = ["green", "red", "blue"];
    var element = document.getElementById("timerP").innerHTML;
    		var col= Math.floor(Math.random()*1000000);
      
       document.getElementById("timerP").style.color = "#"+col; 
document.getElementById("bodyId").style.color = "#"+col; 
    
    setTimeout("time()",1000);
}