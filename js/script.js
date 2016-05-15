//menu is hidden. all is seen is three bar button
//user clicks three bar button
//menu is revealed
//user clicks three bar button again
//menu is hidden



function changeBackground(e) {

	e.preventDefault();

	var userInput = $("#city-type").val();


	if (userInput == 'New York City') {
		$("#locations-body").attr("class", "nyc");
	}

	else if (userInput == 'Los Angeles') {
		$("#locations-body").attr("class", "la");
	}

	else if (userInput == 'Chicago') {
		$("#locations-body").attr("class", "chi");
	}

	else if (userInput == 'Atlanta') {
		$("#locations-body").attr("class", "atl");
	}

	else if (userInput == 'Denver') {
		$("#locations-body").attr("class", "den");
	}

	else if (userInput == 'Miami') {
		$("#locations-body").attr("class", "mia");
	}
	
}



$(function() {

$("#city-type").change(changeBackground);

});

