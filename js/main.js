function listPosts(data){


	var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

	output +=  '<ul data-role="listview" data-filter="true" data-input="#searchposts">';


	$.each(data.posts, function(key, val){

		// Make temporary DIV to store the excerpt
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;

		// From that temporary DIV remove all links
		$("a", tempDiv).remove();
		var newExcerpt = tempDiv.innerHTML

		// Consult the jQuery Mobile Documentation for this form
		output += '<li>';
		output += '<a href="#blogpost" onclick="showPost(' + val.id + ')">';
		output += (val.thumbnail) ?
			'<img src="' +val.thumbnail + '" alt= "' + val.title + '">':
			'<img src="img/starlogo.png" alt= "Site Logo">';	
		output += '<h3>' + val.title + '</h3>';
	  	output += '<p>' + newExcerpt + '</p>';
		output += '</a>'; 
		output += '</li>'; 
		// output += '</li>'; 

	});   // go through each post

		output += '</ul>';  // finish the list started in the second line...

	// console.log(output);

	$('#postlist').html(output);

}   // listPosts

function showPost(id){
	$.getJSON('http://langaraprm.com/?json=get_post&post_id=' + id + '&callback=?', 
		function(data){

			var output = '<h3>' + data.post.title	 + '</h3>';
			output += data.post.content;
			output += "<img src='" + data.post.thumbnail + "'>";
			
			console.log(output);
			
			$('#mypost').html(output);
		})
}

