function forIE() { //creat html5 element for IE
  if (! /*@cc_on!@*/ 0) return;
  var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,hgroup,header,mark,menu,meter,nav,output,progress,section,time,video".split(','),
    i = 0,
    length = e.length;
  while (i < length) {
    document.createElement(e[i++]);
  }
}

function copy_tooltip() {
  $(".copythis").on("click", function() {
    $(this).prev().fadeIn(400, function() {
      $(this).delay(500).fadeOut();
    });
  });
}

var tag = [
  "수능", "대학수학능력시험", "디데이", "D-day", "열공", "빡공", "대학가면남친생김?", "대학가면여친생김?", "응_아니야",
  "정시파이터", "100일의_전사_가즈아", "노베이스_50일의_전사_가즈앗", "오버워치한판만...", "공부해이것들아", "군대나갈까", "아조씨는08학번이야", "2호선을타자", "한숨자고해볼까", "문송합니다", "이과_죽었으면",
  "대학문은좁지만_우리는날씬하다", "대학가서미팅할래_공장가서미싱할래?", "삼십분더공부하면_남편직업이바뀐다", "10분더공부하면_마누라가바뀐다", "배워서_남_주자", "이거볼시간있으면_영단어를외워", "네_성적에_잠이_오냐?",
  "그얼굴이면_공부라도잘해야지", "엄마가_보고있다", "성적보다_꿈을이루자", "아침을_먹자", "생존", "방_치우기가_제일_제밌어지는_시간", "공부의_신",
  "물수능", "불수능", "끓는물수능", "진진자라", "암욜맨암욜맨그대여", "링딩동링딩동리디기딩디기딩딩딩",
  "인서울", "서연고", "서성한", "중경외시", "지방거점국립대", "취업깡패가되자", "전기_화학_기계", "서울대", "연세대", "고려대",

];

function dice(n, s, b) {
  var out = 0;
  for (i = 0; i < n; i++) {
    out += Math.ceil(Math.random() * s);
  }
  return out + b;
}

function tag_manager() {
  for (var i = 0; i < 7; i++) {
    $(".tag:last-child").after("<span class='tag'> #" + tag[dice(1, tag.length, -1)] + "</span>");
  }
}

$(function() {
  new ClipboardJS('.copythis');
  copy_tooltip();
  tag_manager();
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
