$(document).ready(function(){
  $("#submit").click(function(){
    var first = $("#info_1").val();
    var response= "New Info:" + first + "";
    $("#cool").append("<p>" + response + "</p>");
  });
});
