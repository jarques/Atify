/*
*	@tify v1 by Jarques  -  jpretorius.com
*	Follow me @jarques - http://twitter.com/@jarques
*/

$.fn.atify = function(){var html = $(this).html();html = html.replace(/@([^\s@]+)/gi,"<a href=\"http://twitter.com/$1\">@$1</a>");$(this).html(html);}

