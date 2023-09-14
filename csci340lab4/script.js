$(document).ready(function() {
    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.thecatapi.com/v1/images/search",
        success: function(results) {
          console.log(results[0]["url"]);
          $('#cat').css("height", "390px")
          $('#cat').attr("src", results[0]["url"]);
          console.log(results[0]["height"]);
    
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
      $.ajax({
        dataType:"json",
        url:"https://meowfacts.herokuapp.com/",
        success: function(results){
          console.log(results["data"][0]);
          var apianswer = results["data"][0];
          document.getElementById("catdescr").innerHTML = apianswer
        },
        error: function(xhr,status,error){
          console.log(error)
        }
      }
      )
    });
    $('#clicker2').click(function(){
      
    });
  });