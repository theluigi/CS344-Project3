var main = function () {

	var categoriesList = "" , taskCounter = 0; 
	
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
				myTodo.categories.forEach(function(category) {
					category = " " + category;
					categoriesList = categoriesList + category; //add categories from all.json
				});
				var desc = myTodo.description;
				addTodoData(desc, categoriesList); 
			}); 
		});
	
	}; 

	//todo function
	var addTodoData = function(text, cats) {
		taskCounter++; 
		  $("#All").append("<div id = task" + taskCounter + ">");
		  $("#task" + taskCounter).html("<p>" + text + " /// " + cats + "</p>");
		
	}; 
	
	
	
	

	var initialise = function () {
	
	loadJSON(); 
    setUpClickHandler($(".tabs .tab"));

	};
	
	initialise(); 
};

$(document).ready(main);