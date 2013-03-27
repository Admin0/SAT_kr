function forIE() { //creat html5 element for IE
	if(!/*@cc_on!@*/0) return;
	var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,hgroup,header,mark,menu,meter,nav,output,progress,section,time,video".split(','),i=0,length=e.length;
	while(i<length){
		document.createElement(e[i++]);
	}
}

function prettyprint_class_add() {
	$('code').addClass('prettyprint');
	$('code > xmp').addClass(function(){$(this).parent().removeClass('prettyprint'); return 'prettyprint';});
	$('code > pre').addClass(function(){$(this).parent().removeClass('prettyprint'); return 'prettyprint';});
	$('pre > code').removeClass(function(){$(this).parent().addClass('prettyprint'); return 'prettyprint';});
}

$(function() {
	prettyprint_class_add(); prettyPrint(); //code prettify (.prettyprint)
	$('.ad_article_mobile').remove();
});