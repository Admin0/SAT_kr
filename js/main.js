function forIE() { //creat html5 element for IE
  if (! /*@cc_on!@*/ 0) return;
  var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,hgroup,header,mark,menu,meter,nav,output,progress,section,time,video".split(','),
    i = 0,
    length = e.length;
  while (i < length) {
    document.createElement(e[i++]);
  }
}

$(function() {
  new ClipboardJS('.copythis');
  // $('.ad_article_mobile').remove();
});

// $.ajax({
//   url: "page/SAT19.html",
//   context: document.body
// }).done(function(html) {
//   $("#page_19").html(html);
// });
//
// $.ajax({
//   url: "page/SAT20.html",
//   context: document.body
// }).done(function(html) {
//   $("#page_20").html(html);
// });
//
// $.ajax({
//   url: "page/SAT21.html",
//   context: document.body
// }).done(function(html) {
//   $("#page_21").html(html);
// });
