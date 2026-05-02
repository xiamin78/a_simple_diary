let diaryPosition = document.querySelector(".diaryPosition");
let btns = diaryPosition.children;
let diaryZone = document.querySelector(".diary-zone");

let position = JSON.parse(localStorage.getItem("diaryPosition")) ?? "beMiddle";
if (position) {
  let target = document.querySelector(`.${position}`);
  chPosition(target, position);
}

for (let item of btns) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target;
    position = JSON.stringify(target.classList[0]);
    chPosition(target, position);
  });
}

function chPosition(obj, position) {
  //   图标被选中时的变大效果
  let target = obj;
  if (target.classList.contains("buttonLarge")) {
    return;
  }
  target.classList.add("buttonLarge");
  localStorage.setItem("diaryPosition", JSON.stringify(target.classList[0]));

  for (let item of btns) {
    if (item.classList[0] !== target.classList[0]) {
      item.classList.remove("buttonLarge");
    }
  }

  //   更改位置
  switch (position) {
    case "beLeft": {
      diaryZone.style.alignItems = "start";
      break;
    }
    case "beMiddle": {
      diaryZone.style.alignItems = "center";
      break;
    }
    case "beRight": {
      diaryZone.style.alignItems = "end";
      break;
    }
  }

  //   刷新页面
}
