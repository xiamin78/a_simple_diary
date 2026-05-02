let settingInput = document.querySelector(".settingInput");
let bgPicBtn = document.querySelector(".bgPicBtn");
let html = document.querySelector("html");

bgPicBtn.addEventListener("click", (e) => {
  bgPicCh(e);
});

function bgPicCh(event) {
  event.preventDefault();
  // 1,取值
  let link = settingInput.value;
  // 2,设置
  html.style.backgroundImage = `url(${link})`;
  // 3,存储数据
  link = JSON.stringify(link);
  localStorage.setItem("bgPicture", link);
}

settingInput.value = JSON.parse(localStorage.getItem("bgPicture"));
