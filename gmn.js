$(document).ready(function() {
      var random_num = Math.floor((Math.random() * 100) + 1);
      $("#submit").click(function() {
            var guess =
              $("#guess").val();
            if (guess == random_num) {
              alert("You Got It!!")
              $("#response").html("<p>You Got It!!</p>");
            } else if (guess < random_num) {
                alert("You're close. Guess higher.")
                $("#response").html("<p>You're close. Guess higher.</p>");
            } else {
                  $("#response").html("<p>You're close. Guess higher.</p>");
            }
      });
})
