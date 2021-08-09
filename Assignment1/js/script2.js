
$(document).ready(()=>{

    

    
        //Stores data retireved from local storage
        var invout = JSON.parse(localStorage.details);
                            
        $.each(invout, function(i) {
         
          $("ul").append("<h2>Booking number: "+(i+1)+"</h2");
      
         //Appends data to ul and li
          $("ul").append("<li><h3>Date of vaccination is: "+this.date+"</h3></li>");
          $("ul").append("<li><h3>Time of vaccination is:"+this.time+"</h3></li>");
          $("ul").append("<li><h3>OHIP: "+this.OHIP+"</h3></li>");
          $("ul").append("<li><h3>Phone Number: "+this.phone+"</h3></li>");
          $("ul").append("<li><h3>Email is: "+this.email+"</h3></li><br>");
      
        
        })
        
        $("#clear").click(()=>{

          localStorage.clear();
        })
                      
     
})
   

  