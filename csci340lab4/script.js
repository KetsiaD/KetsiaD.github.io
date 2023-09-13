$(document).ready(function() {
    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.thecatapi.com/v1/images/search",
        success: function(results) {
          console.log(results["url"]);
          $('#dog').attr("src", results["url"]);
    
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
  });