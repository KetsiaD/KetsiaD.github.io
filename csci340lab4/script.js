$(document).ready(function() {
    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://emojihub.yurace.pro/api/random.json",
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