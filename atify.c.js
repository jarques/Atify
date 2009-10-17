/*Atify v1 by jpretorius.com*/
$.fn.atify = function(){$(this).html($(this).html().replace(/@([^\s@]+)/gi,"<a href=\"http://twitter.com/$1\">@$1</a>"));}