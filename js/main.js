// v.4 by 짆 --> JinH --> ㅓㅑㅜㅗ --> C3VA

const time = {};
time.start = localStorage.timer || Date.now();

time.log = (msg) => {
  time[msg] = Date.now() - time.start
}

time.log('init');

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
    target.appendChild(tag_msg);
    // target.after(tag_msg);
    // console.log(n + "/" + tag.length);
  }
}

tag_manager(document.querySelector("#inside_page"), 2013);
time.log('set_tags');

// set year for copyright
document.getElementById("year").innerHTML = new Date().getFullYear();

// type tag message
const $target = document.getElementById('type');
$target.addEventListener('th.endType', function (e) {
  setTimeout(() => {
    let i = $target.innerText.length;
    function backspace(msg) {
      if (i > 4) {
        $target.innerText = msg.substring(0, i);
        i--;
        setTimeout(backspace, dice(3, 5, 20), msg);
      } else {
        setTimeout(() => {
          TypeHangul.type("#type", { text: tag[dice(1, tag.length, -1)], append: true, intervalType: 65, humanize: 0.25 });
        }, 500);
      }
    }
    backspace($target.innerText);
  }, 3000);
});
TypeHangul.type("#type", { text: tag[dice(1, tag.length, -1)], append: true, intervalType: 65, humanize: 0.25 });

new stare('.pages');

window.onload = console.table(time);