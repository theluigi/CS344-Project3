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
		$getJSON("all.json", function (myTodos) {
			myTodos.forEach(console.log("hi"));
		}); 
	}; 

	var initialise = function () {
	
	loadJSON(); 
    setUpClickHandler($(".tabs .tab"));

	};
	
	initialise(); 
};

$(document).ready(main);