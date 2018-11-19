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

var tag = {
  list: [
    "수능", "대학수학능력시험", "디데이", "D-day", "열공", "빡공", "대학가면남친생김?", "대학가면여친생김?", "응_아니야",
    "정시파이터", "100일의_전사_가즈아", "노베이스_50일의_전사_가즈앗", "오버워치한판만...", "공부해이것들아", "군대나갈까", "아조씨는08학번이야", "2호선을타자", "한숨자고해볼까", "문송합니다", "이과_죽었으면", "문돌이는답이없다",
    "대학문은좁지만_우리는날씬하다", "대학가서미팅할래_공장가서미싱할래?", "삼십분더공부하면_남편직업이바뀐다", "10분더공부하면_마누라가바뀐다", "배워서_남_주자", "이거볼시간있으면_영단어를외워", "네_성적에_잠이_오냐?", "공부가제일쉬웠어요", "국영수위주로_예습복습철저히",
    "그얼굴이면_공부라도잘해야지", "엄마가_보고있다", "성적보다_꿈을이루자", "아침을_먹자", "생존", "방_치우기가_제일_제밌어지는_시간", "공부의_신", "겁쟁이는_변명도_많다", "인싸가되자", "해시태그추천받음", "만약우리가통속의뇌라면?",
    "물수능", "불수능", "끓는물수능", "진진자라", "암욜맨암욜맨그대여", "링딩동링딩동리디기딩디기딩딩딩",
    "인서울", "서연고", "서성한", "중경외시", "지방거점국립대", "취업깡패가되자", "전기_화학_기계", "서울대", "연세대", "고려대",
    "넌치킨이예쁠때가제일먹어", "광고가끔눌러주세요", "급식충에서학식충으로", "급식먹는_애들한테_학식개그는_좀_이르겠지", "라면먹고갈래?ㅎ", "개복치급체력", "여친만들고싶으면_체크남방부터버려",
    "화공과=육각형잘그림", "공대생=체크남방입고다님", "컴공과=세미콜론집착", "컴공과=사실컴고칠줄잘모름", "컴공과=치킨집사장예약", "의예과=공부잘함", "회화과=초상화잘그림", "경영과=교수주식투자망함", "공예과=앞치마", "철학과=자퇴추천", "회계과=총무의저주", "법학과=TV에과실얘기나오면입꾹다뭄",
    "맥스웰방정식도_모르는_새1끼가_어디서_무선전자장치를_쓰냐", "보석상이_100만원_손해", "외않되?"
  ],
  draw: function() {
    return this.list[dice(1, this.list.length, -1)];
  }
};

function dice(n, s, b) {
  var out = 0;
  for (i = 0; i < n; i++) {
    out += Math.ceil(Math.random() * s);
  }
  return out + b;
}

function tag_manager() {
  for (var i = 0; i < 7; i++) {
    $(".tag:last-child").after("<span class='tag'> #" + tag.draw() + "</span>");
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
