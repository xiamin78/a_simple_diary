import { lockFlag } from "./lockPage.js";
let html = document.querySelector("html");

html.addEventListener("dblclick", unlock);

function unlock() {
  if (lockFlag.value === true) {
    // 修改lockFlag的值
    lockFlag.value = false;

    // 将其他元素隐藏
    let body = document.querySelector("body");
    body.style.opacity = "1";
  }
}
