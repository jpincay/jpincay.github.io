$(document).ready(function(){
  $("#submit").click(function(){
    var first = $("#info_1").val();
    var response= "New Info:" + first + "";
    $("#my_list").append("<li>" + response + "</li>");
});
