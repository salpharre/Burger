//jQuery version of document.ready, to make sure DOM is fully loaded before attaching handlers
$(function () {
    //Click event to add a new burger to database and reload page once POST request is sent
    $(".submit").on("submit", (e) => {
        e.preventDefault();

        const newBurger = {
            burger_name: $(".text").val().trim(),
            devoured: false
        };

        //Send the object via POST request to be saved to database
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Added new burger!");
            //Reload page to get update list of non-devoured burgers
            location.reload();
        });
    });

    //click event for eating/devouring burger from list
    $(".change-devoured").on("click", (e) => {
        const id = $(this).data("id");

        const updateDevouredState = {
            devoured: true
        };

        //Send PUT request to update burger to devoured=true
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updateDevouredState
        }).then(() => {
            console.log("Changed devoured state to", updateDevouredState);
            //Reload page to get updated list of devourned and non-devoured
            location.reload();
        });
    });
});