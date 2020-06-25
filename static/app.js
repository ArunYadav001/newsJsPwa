
 var URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b04653d3cea4423b6e349dc2a6afa45";  
 // fetch(URL, {
 //     mode: 'cors',
 //     headers: {
 //       'Access-Control-Allow-Origin':'*'
 //     }
 //   })
 //     .then(response => response.json())
 //     .then(function(data){
 //         console.log(data);
 
 
 fetch(URL)
   .then(response => response.json())
    .then(function(data){
        console.log(data);
 
   
 
 
     // fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=4b04653d3cea4423b6e349dc2a6afa45')
     // .then(response => response.json())
     // .then(function(data){
     //    console.log(data);
 
      
 
       var home = new Array(30);
       home = data.articles;
       console.log(home);
       console.log("hii");
      
       
       var elements = document.querySelectorAll("h3");
       var element2 = document.querySelectorAll("p");
       
      var clicks = document.querySelectorAll("a");
      var images = document.querySelectorAll("img");
 
     
        
      
     //  for(var i=0 ;i<clicks.length;i++){
     //     clicks[i].addEventListener("click", function(){
           
     //         });
     //  }
     //  console.log(clicks);
       for (var i= 0; i < home.length; i++) {
          
           elements[i].textContent = home[i].title;
           element2[i].textContent = home[i].description;
           clicks[i].href = home[i].url;
           images[i].src = home[i].urlToImage;
          
         
       }
      
       
 //https://newsapi.org/v2/top-headlines?country=in&apiKey=4b04653d3cea4423b6e349dc2a6afa45
 //https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4b04653d3cea4423b6e349dc2a6afa45    
 
     });
    
 
 
 