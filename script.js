$(document).ready( function() {
	$.getJSON("https://raw.githubusercontent.com/pwizla/saucedallas/gh-pages/quotes.json", function(json) {
		console.log('How many quotes in the json file? ', json.contents.quotes.length);
		var whichQuote = Math.floor(Math.random() * (json.contents.quotes.length));
		console.log('whichQuote', whichQuote);
		quote = '"' + json.contents.quotes[whichQuote].quote + '"';
		$(".quote").html(quote);
  getTweetContent();
	});

	$("#getQuote").click(function () {
		$.getJSON("https://raw.githubusercontent.com/pwizla/saucedallas/gh-pages/quotes.json", function(json) {
			console.log('How many quotes in the json file? ', json.contents.quotes.length);
			whichQuote = Math.floor(Math.random() * (json.contents.quotes.length));
			console.log('whichQuote', whichQuote);
			quote = '"' + json.contents.quotes[whichQuote].quote + '"';
			$(".quote").html(quote);
      getTweetContent();
		});
	});

  function getTweetContent () {
    var quoteToTweet = $(".quote").html();
    quoteToTweet = quoteToTweet.replace(/<br>/g, ' ');
    console.log('quoteToTweet: ', quoteToTweet);
    return quoteToTweet;
    if (quoteToTweet.length > 130) {
      console.log("OVER LENGTH");
    }
  };

  $("#tweetButton").click(function() {
    var quoteToTweet = $(".quote").html();
    quoteToTweet = quoteToTweet.replace(/<br>/g, ' ');
    $("#tweetButton").attr("href", "http://twitter.com/intent/tweet?text=" + quoteToTweet + "&via=SurLesBoulettes");
  });


});
