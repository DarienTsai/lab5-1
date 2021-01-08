var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
	data.friends.push(
		{
			"name": request.query.name,
			"description": request.query.description,
			"imageURL": "http://lorempixel.com/500/500/people"
		}
	);
	response.render('index', data);
}