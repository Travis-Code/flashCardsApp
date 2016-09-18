function loadJSON(){
   //loadJSON(); everything in this function will get called when a user clicks on the button on the html page.

   var data_file = "flashCards.json";
   //data_file gets the json file located on a specific site or directory in this case it is the flashCards.json which holds our json data that holds the answers to our questions.

   var http_request = new XMLHttpRequest();
   http_request.onreadystatechange = function(){

      if (http_request.readyState == 4){
         // Javascript function JSON.parse to parse JSON data
         // refer to link for more info on ".readystate method" http://stackoverflow.com/questions/632774/what-do-the-different-readystates-in-xmlhttprequest-mean-and-how-can-i-use-them
         
         var jsonObj = JSON.parse(http_request.responseText);
         // jsonObj variable now contains the data structure and can
         // be accessed as jsonObj.flashCard1 and jsonObj.flashCard2.

         document.getElementById("flashCard1").innerHTML ="<h2>What is 1 + 1?</h2>" + jsonObj[0].flashCard1;
         document.getElementById("flashCard2").innerHTML = "<h2>What is 2 + 1?</h2>" + jsonObj[0].flashCard2;
         // document.getElementById gets the "flashCard1" and "flashCard2 id's" on the html page.   
         // we then append the values from our jsonObj to these id's<h2> 
      }
   }

   http_request.open("GET", data_file, true);
   http_request.send();
}

