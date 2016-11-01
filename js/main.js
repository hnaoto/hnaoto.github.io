
(function() {

	var config = JSON.parse(data);
	var booksUrl = config["BOOK_API_GET_BOOKS"];
	
	_renderBooks(booksUrl);
	

	


})();


function _renderBooks(url) {
	
	$.ajax({
		type: "GET",
		 url: url,
		 dataType:"jsonp",
		 success: function(data){ 
		 
		 	var books = data['items'];
		 	console.log(books.length);
		 	for (var i = 0; i < books.length; i++) {
		 		var book = '<h5>' +  books[i].volumeInfo.title  + '</h5> <img src='  +   books[i].volumeInfo.imageLinks.thumbnail  + '>' ;
		 		$("#reading_now").append(book);
			}
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log("error", textStatus + " (" + errorThrown + ")");
		  }
		});
	
	
	
	
}