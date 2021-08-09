

 $(document).ready( ()=>
            
 {  var x=[];
   
  //checking if local storage is available
  if(localStorage)
   { 
    
      //function invoked on clicking submit button
      $("#submit").click(()=>{
    
  
   var date1=$("#date1").val();
   var time1=$("#time1").val();
   var email1=$("#email1").val();
   var OHIP=$("#OHIP").val();
   var phone=$("#phone").val();
 
    //checking for null data entered by user
   if(date1=="")
   {
     alert("Please enter the date for you vaccination");
     return false;
   }
   else if (time1=="") {
     alert("Please enter the time of your vaccination");
     return false;
     
   } else if (email1==""){ 
     alert("Please enter email");
     return false;

     
   }
   else if (OHIP=="") {
     alert("Enter OHIP");
     return false;
     
   } else if(phone=="") {
     alert("Please enter phone number");
     return false;
     
   }
   
else{
  
   x.push( {"date":date1, "time": time1, "email":email1, "OHIP":OHIP, "phone":phone} );  //array of details used to store into local storage
  
   

   var y=JSON.stringify(x);    //converting to string before storing to local storage
   
   

   localStorage.setItem("details",y);
   
   
   $('input').val('');

   
  
  
}

   


  
  
 })

}    
 
 
 
  

 })