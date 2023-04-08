var isStopped = false;
function stopScroll() {
  isStopped = !isStopped;
  var boxes = document.getElementsByClassName("box");
  for (var i = 0; i < boxes.length; i++) {
    var animation = boxes[i].style.animation;
    if (isStopped) {
      boxes[i].style.animation = 'none';
    } else {
      boxes[i].style.animation = animation;
    }
  }
}

const messages = [
    "ก้าวไกลเท่านั้น เบอร์ 31",
    "ก้าวไกล 2 ใบ",
    "เพื่ออนาคต  "
];

let currentMessageIndex = 0;

setInterval(() => {
    document.getElementById("message").innerHTML = messages[currentMessageIndex];
    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
        currentMessageIndex = 0;
    }
}, 3000);
