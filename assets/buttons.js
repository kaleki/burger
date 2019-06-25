$(function(){

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burger").val().trim(),
          devoured: false,
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
$(function() {
  $("./{{this.id}}?_method=PUT").on("click", function(event) {
    var id = $(this).data("id");
    var devouredBurger = $(this).data("devouredBurger");

    var newDevouredBurger = {
      devoured: devouredBurger
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredBurger
    }).then(
      function() {
        console.log("added burger to:", devouredBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })});
