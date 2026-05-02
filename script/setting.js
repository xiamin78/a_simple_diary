let settingBtn = document.querySelector(".settingBtn");
let settingPage = document.querySelector(".settingPage");

settingBtn.addEventListener("click", setting);

// 点击设置按钮的响应
function setting() {
  if (settingPage.style.display == "block") {
    settingPage.style.display = "none";
  } else {
    settingPage.style.display = "block";
  }
}

let setCloseBtn = settingPage.querySelector(".No");

setCloseBtn.addEventListener("click", setting);
// 解释一下这里为什么不用close函数
// close是将父元素删除
// 适用于那些即时创建的元素
// 不适用于那些使用display唤出的元素（这里就是这种情况）
