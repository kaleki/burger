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
  $(".update-burger").on("submit", function(event) {
    event.preventDefault();
    var id = $(this).attr("value");
    var devouredBurger = $(this).data("devouredBurger");

    var newDevouredBurger = {
      devoured: devouredBurger
    };

    // Send the PUT request.
    console.log(id)
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        console.log("added burger to:", devouredBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })});
