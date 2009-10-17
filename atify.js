/*
*
*	@tify v1 by Jarques  -  jpretorius.com
*	Follow me @jarques - http://twitter.com/@jarques
*	------------------------------------------------
*	Modified by MeltingIce - meltingice.net
*	Follow me @meltingice - http://twitter.com/meltingice
*
*/

$.fn.atify = function(customOptions){
	var options = $.extend({},$.fn.atify.defaultOptions, customOptions);
	var html = $(this).html();
	html = html.replace(/@([A-Za-z0-9_]+)/gi,"@<a href=\"http://twitter.com/$1\">$1</a>");
	if(options.hashtag){
	    html = html.replace(/#([A-Za-z0-9_-]+)/gi,"<a href=\"http://twitter.com/search?q=%22$1%22\">#$1</a>");
	}
	$(this).html(html);
}
	
$.fn.atify.defaultOptions = {
	'hashtag':false
}