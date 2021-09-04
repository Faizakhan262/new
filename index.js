const btn=document.getElementById('input-btn');
   const inputField=document.getElementById("input-el"); 
   const leadsUl=document.getElementById("leads-links");
   let leads= ['https://linkedin.com/awais', 'https://linkedin.com/amna'];
  
   let lists="";
   btn.addEventListener("click",function(){
    console.log("clicked")
   for(let i=0;  i>leads.length; i++){ 
    leadsUl.innerHTML += "<li>" +leads[index] + "</li>";
   
   }

   



})