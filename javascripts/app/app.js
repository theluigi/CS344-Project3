var main = function () {

    var setUpClickHandler = function (anchor) {
        anchor.click(function () {
            var target = $(this).attr("href");

            $(".active").removeClass("active");
            $(this).addClass("active");
            $("#" + target).addClass("active");

            return false;
        });
    };
	
	var loadJSON = function() {
		$.getJSON("all.json", function (myTodos) {
			myTodos.forEach(function (myTodo) {
				myTodo.categories.forEach(console.log(category));
		}); 
	}; 

	var initialise = function () {
	
	loadJSON(); 
    setUpClickHandler($(".tabs .tab"));

	};
	
	initialise(); 
};

$(document).ready(main);