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
// function type_writer(msg) {
//   let i = 0;
//   function type(msg) {
//     if (i < msg.length) {
//       document.getElementById('type').innerHTML += msg.charAt(i);
//       // console.log(msg.charAt(i));
//       i++;
//       setTimeout(type, dice(3, 50, 200), msg);
//     } else {
//       setTimeout(() => {
//         // console.log(msg);
//         let i = msg.length;
//         function backspace(msg) {
//           if (i >= 0) {
//             document.getElementById('type').innerHTML = `#수능 #${msg.substring(0, i)}`;
//             i--;
//             setTimeout(backspace, dice(3, 5, 20), msg);
//           } else {
//             setTimeout(() => {
//               type_writer(`${tag[dice(1, tag.length, -1)]}`);
//             }, 500);
//           }
//         }
//         backspace(msg);
//       }, 3000, msg);
//     }
//   }
//   type(msg);
// }

// type_writer(`${tag[dice(1, tag.length, -1)]}`);

document.onmousemove = (event) => {
  if (window.innerWidth > 425) {
    document.querySelectorAll('.pages').forEach(element => {

      const a = 15;
      const x0 = element.getBoundingClientRect().y + element.offsetHeight / 2
      const x = ((x0 - event.pageY) / window.innerHeight) * 2;
      // const x = (.5 - event.pageY / window.innerHeight) * 2; // not using x0
      const y0 = element.getBoundingClientRect().x + element.offsetWidth / 2
      const y = ((event.pageX - y0) / window.innerWidth) * 2;
      // const y = (-.5 + event.pageX / window.innerWidth) * 2; // not using y0
      const z = 0;
      element.style.transform = `rotate3d(${x}, ${y}, ${z}, ${a * (x ** 2 + y ** 2)}deg)`;
      // console.log([event.pageY, x1]);

      // Another code
      // const rotateX = `calc((90deg - 180 * ${event.pageY / window.innerHeight}deg)/5)`;
      // const rotateY = `calc((-90deg + 180 * ${event.pageX / window.innerWidth}deg)/5)`;
      // const rotateZ = 0;
      // element.style.transform = `rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ})`;
    });
  } else {
    document.querySelectorAll('.pages').forEach(element => { element.style.transform = `rotate3d(0, 0, 0, 0)`; });
  }
};

// window.onload = console.table(time);