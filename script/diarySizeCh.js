let settingInput = document.querySelector(".diarySizeForm .settingInput");
let diarySizeBtn = document.querySelector(".diarySizeBtn");
let root = document.documentElement;

diarySizeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeDiarySize(false);
});

function changeDiarySize(first = true) {
  let size = settingInput.value;
  root.style.setProperty("--diarySize", size);

  //存储日记大小的数据
  if (!first) {
    size = JSON.stringify(size);
    localStorage.setItem("diarySize", size);
  }
}

settingInput.value = JSON.parse(localStorage.getItem("diarySize")) ?? "40%";
changeDiarySize();
