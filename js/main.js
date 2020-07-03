function forIE() { //creat html5 element for IE
  if (! /*@cc_on!@*/ 0) return;
  var e = "abbr,article,aside,audio,bb,canvas,datagrid,datalist,details,dialog,eventsource,figure,footer,hgroup,header,mark,menu,meter,nav,output,progress,section,time,video".split(','),
    i = 0,
    length = e.length;
  while (i < length) {
    document.createElement(e[i++]);
  }
}

let copythis = document.querySelectorAll(".copythis");
for (i = 0; i < copythis.length; i++) {
  (function(i) {
    let copy_tooltip = document.querySelectorAll(".copy_tooltip")[i];
    copythis[i].addEventListener('click', function() {
      copy_tooltip.style.opacity = 1;
      setTimeout(function() {
        copy_tooltip.style.opacity = 0;
      }, 1000);
    });
  })(i);
}

new ClipboardJS('.copythis');


var tag = [
  "수능", "대학수학능력시험", "디데이", "D-day", "열공", "빡공", "대학가면남친생김?", "대학가면여친생김?", "응_아니야", "넌할수있어",

  "정시파이터", "상남자특_정시지원", "100일의_전사_가즈아", "노베이스_50일의_전사_가즈앗", "오버워치한판만", "공부해이것들아", "군대나갈까", "아조씨는08학번이야", "2호선을타자", "한숨자고해볼까", "문송합니다", "이과_죽었으면", "문돌이는답이없다", "아는것이힘이", "변화외에_불변하는것은_없다", "인내해라", "이루어라",

  "대학문은좁지만_우리는날씬하다", "대학가서미팅할래_공장가서미싱할래?", "삼십분더공부하면_남편직업이바뀐다", "10분더공부하면_마누라가바뀐다", "배워서_남_주자", "이거볼시간있으면_영단어를외워", "네_성적에_잠이_오냐?", "공부가제일쉬웠어요", "국영수위주로_예습복습철저히", "내가꿈을이루면_난다시누군가의꿈이된다", "R=VD", "카르페디엠", "하쿠나마타타", "응원할게", "네가최고다", "믿는다_너니까", "힘들땐_엄마얼굴생각해", "조금쉬어도괜찮아", "꺼지지않는_불꽃처럼", "정신은날카롭게_마음은여유롭게", "고마워얘들아", "공부의고통잠깐_못배운고통평생", "오늘걷지않으면_내일뛰어야한다", "학벌이돈이다_공부가투자다", "고통스러운것_되어간다는증거", "불가능이란_해보지않은자의변명", "인내는쓰지만_그열매는달다", "초심으로",

  "그얼굴이면_공부라도잘해야지", "엄마가_보고있다", "성적보다_꿈을이루자", "아침을_먹자", "생존", "방_치우기가_제일_재밌어지는_시간", "공부의_신", "겁쟁이는_변명도_많다", "인싸가되자", "해시태그추천받음",

  "만약우리가_통속의뇌라면?","만약우리가_통속의뇌가_아니라면?","전기자극을주는_어느미친과학자가_없다면?",

  "물수능", "불수능", "끓는물수능", "진진자라", "암욜맨암욜맨그대여", "링딩동링딩동리디기딩디기딩딩딩", "꿈을꾸느냐_이루느냐",

  "인서울", "서연고", "서성한", "중경외시", "지방거점국립대", "취업깡패가되자", "전기_화학_기계", "서울대", "연세대", "고려대",

  "넌치킨이예쁠때가제일먹어", "광고가끔눌러주세요", "급식충에서학식충으로", "급식먹는_애들한테_학식개그는_좀_이르겠지", "라면먹고갈래?ㅎ", "개복치급체력", "여친만들고싶으면_체크남방부터버려",

  "화공과=육각형잘그림", "공대생=체크남방입고다님", "컴공과=세미콜론집착", "초등교육과=성악설지지함", "컴공과=사실컴고칠줄잘모름", "컴공과=치킨집사장예약", "의예과=공부잘함", "회화과=초상화잘그림", "경영과=교수주식투자망함", "공예과=앞치마", "철학과=자퇴추천", "회계과=총무의저주", "법학과=TV에과실얘기나오면입꾹다뭄", "서울의대랑길가다부딪히면_암설의", "연세의대랑길가다부딪히면_고의아님",
  "맥스웰방정식도_모르는_새1끼가_어디서_무선전자장치를_쓰냐", "보석상이_100만원_손해", "외않되?",

  "수능끝나고_신나게놀기", "수능끝나고_여행가기", "수능끝나고_영화보기", "수능끝나고_드라마보기", "수능끝나고_외식하기", "수능끝나고_게임하기"
];

function dice(n, s, b) {
  var out = 0;
  for (i = 0; i < n; i++) {
    out += Math.ceil(Math.random() * s);
  }
  return out + b;
}

function tag_manager(target, times) {
  var t;
  for (var i = 0; i < times; i++) {
    n = dice(1, tag.length, -1)
    let tag_msg = document.createElement("span");
    tag_msg.classList.add("tag");
    tag_msg.innerHTML = "#" + tag[n];
    target.after(tag_msg);
    // target.after("<span class='tag'> #" + tag[n] + "</span>");
    // console.log(n + "/" + tag.length);
  }
}

tag_manager(document.querySelector(".tag:last-child"), 7);

history.replaceState(null, null, "../SAT_kr/");
