//jQuery version of document.ready, to make sure DOM is fully loaded before attaching handlers
$(function () {
    //Click event to add a new burger to database and reload page once POST request is sent
    $(".create-form").on("submit", function(e) {
        e.preventDefault();

        const newBurger = {
            burger_name: $("#text").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        //Send the object via POST request to be saved to database
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger!");
            //Reload page to get update list of non-devoured burgers
            location.reload();
        });
    });

    //click event for eating/devouring burger from list
    $(".change-devoured").on("click", function(e) {
        let id = $(this).data("id");
        //let updateDevoured = $(this).data("newdevoured");

        const updateDevouredState = {
            devoured: true
        };

        //Send PUT request to update burger to devoured=true
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateDevouredState
        }).then(function() {
            console.log("Changed devoured state to", updateDevoured);
            //Reload page to get updated list of devourned and non-devoured
            location.reload();
        });
    });
});