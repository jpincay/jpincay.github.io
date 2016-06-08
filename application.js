$(document).ready(function(){
  $("#submit").click(function(){
    var first = $("#info_1").val();
    var response= "<p>New Info:" + first + "</p>";
    $("#cool").append(response);
  });
});
