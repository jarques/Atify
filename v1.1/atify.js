/*
*
*	@tify v1.1 by Jarques  -  jpretorius.com
*	Follow me @jarques - http://twitter.com/@jarques
*	------------------------------------------------
*	Modified by MeltingIce - meltingice.net
*	Follow me @meltingice - http://twitter.com/meltingice
*
*/

$.fn.atify = function(customOptions){
	var options = $.extend({},$.fn.atify.defaultOptions, customOptions);
	var html = $(this).html();
	if (html) {
		if(options.extras) {
			html = html.replace(/@([A-Za-z0-9_]+)/gi,"@<a href=\"http://twitter.com/$1\">$1</a>(<a class=\"mention\" href=\"http://twitter.com/?status=%40$1\">m</a>,<a class=\"send_dm\" href=\"http://twitter.com/direct_messages/create/$1\">d</a>)");
		} else {
			html = html.replace(/@([A-Za-z0-9_]+)/gi,"@<a href=\"http://twitter.com/$1\">$1</a>");
		}
		if(options.hashtag){
		    html = html.replace(/#([A-Za-z0-9_-]+)/gi,"<a href=\"http://twitter.com/search?q=%22$1%22\">#$1</a>");
		}
		$(this).html(html);
	}
}
	
$.fn.atify.defaultOptions = {
	'hashtag': false,
	'extras': false
}

//http://twitter.com/?status=%40
// 
// 