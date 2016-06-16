$(document).ready( function() {
	$.getJSON("https://raw.githubusercontent.com/pwizla/saucedallas/gh-pages/quotes.json", function(json) {
		console.log('length: ', json.contents.quotes.length);
		var whichQuote = Math.floor(Math.random() * (json.contents.quotes.length));
		console.log('whichQuote', whichQuote);
		quote = '"' + json.contents.quotes[whichQuote].quote + '"';
		$(".quote").html(quote);
	});

	$("#getQuote").click(function () {
		$.getJSON("https://raw.githubusercontent.com/pwizla/saucedallas/gh-pages/quotes.json", function(json) {
			console.log('length: ', json.contents.quotes.length);
			var whichQuote = Math.floor(Math.random() * (json.contents.quotes.length));
			console.log('whichQuote', whichQuote);
			quote = '"' + json.contents.quotes[whichQuote].quote + '"';
			$(".quote").html(quote);
		});
	});
});
