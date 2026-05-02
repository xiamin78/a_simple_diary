// 这里为什么不直接设置一个Boolean值呢
// 因为如果设置的是boolean，那么在导出导入时是只读状态
// 不可修改
// 所以在这里要设置为一个对象
export let lockFlag = { value: false };
let lockBtn = document.querySelector(".lockBtn");

lockBtn.addEventListener("click", lock);

function lock() {
  lockFlag.value = true;
  // 将其他元素隐藏
  let body = document.querySelector("body");
  body.style.opacity = "0";
}
