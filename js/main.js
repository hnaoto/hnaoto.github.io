
(function() {

	var config = JSON.parse(data);
	var readingUrl = config["BOOK_API_READING"];
	var haveReadUrl = config["BOOK_API_HAVE_READ"];
	var toReadUrl = config["BOOK_API_TO_READ"];
				
	
	_renderBooks(readingUrl, "#reading_now");
	_renderBooks(haveReadUrl, "#have_read");
	_renderBooks(toReadUrl, "#to_read");		

    var styles = {
      'background-image' : "none",
    };	
	


	$("#st-pannel-2 .work").mouseover(function(){
		_fs_bg();
  }).mouseout(function() {
   	$('body').css(styles);

  });

})();



function _fs_bg() {
	
    var styles = {
      'background-image' : "url(images/fs_ow_bg.jpg)",
      'background-size': 'cover',
	  'transition': 'all 1.0s ease',
	  
	  
    };	
	
	
	$('body').css(styles);
	
	
}


function _renderBooks(url, div) {
	
	$.ajax({
		type: "GET",
		 url: url,
		 dataType:"jsonp",
		 success: function(data){ 
		 
		 	var books = data['items'];
		 	console.log(books.length);
		 	for (var i = 0; i < books.length; i++) {
				
				//<h5>' +  books[i].volumeInfo.title  + '</h5>
		 		var book = ' <img src='  +   books[i].volumeInfo.imageLinks.thumbnail  + '>' ;
		 		$(div).append(book);
			}
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown){
			console.log("error", textStatus + " (" + errorThrown + ")");
		  }
		});
		

}