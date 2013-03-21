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
				addTodoData(desc, categoriesList); //runs function to add data from task
			}); 
		});
	
	}; 

	//todo function
	var addTodoData = function(text, cats) {
		taskCounter++; //counts number of tasks 
		  $("#All").append("<div id = task" + taskCounter + ">"); //assigns each task its own div
		  $("#task" + taskCounter).html("<div class = 'text'>" + text + "</div>" + //puts info from task in divs 
		  "<div class = 'cats'>" + cats + "</div>" +
		  "<button type='button' class='delete' id='" + taskCounter + "'>Delete</button>" ); //remove button
		  $(".delete").click(function () { //remove function
            var thisTodo = $(this).attr("id");
            $("#task" + thisTodo).remove();			
		  });
	}; 
	
	var addNewTodo = function() {
		$("#submit").click(function() {
			var text = $("#newText").val();
			var cats = $("#newCats").val();
			addTodoData(text, cats);
		});
	};
	
	

	var initialise = function () {
	
	loadJSON(); 
    setUpClickHandler($(".tabs .tab"));
	addNewTodo();

	};
	
	initialise(); 
};

$(document).ready(main);