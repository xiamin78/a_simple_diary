import addABtn from "./add_script.js";

let editBtns = document.querySelectorAll(".editBtn");

for (let editBtn of editBtns) {
  editBtn.addEventListener("click", (e) => {
    editDiary(e);
  });
}

function editDiary(event) {
  let target = event.target.closest(".editBtn");
  let diary = target.closest(".diary");
  let topic = diary.querySelector(".topic");
  let diaryContent = diary.querySelector(".diaryContent");

  //取文本内容
  let tC = topic.textContent;
  let dCC = diaryContent.textContent;
  // 清空文本内容
  topic.textContent = null;
  diaryContent.textContent = null;
  //添加输入框
  let topicInput = document.createElement("input");
  topicInput.className = "topic";
  topicInput.value = tC;
  let diaryContentInput = document.createElement("textarea");
  diaryContentInput.className = "diaryContent";
  diaryContentInput.value = dCC;

  topic.append(topicInput);
  diaryContent.append(diaryContentInput);
  // 添加按钮
  let btnZone = document.createElement("div");
  btnZone.className = "btnZone";

  let saveBtn = addABtn(btnZone, "保存", "18%", "aSaveBtn");
  saveBtn.addEventListener("click", SaveEdit);
  let delBtn = addABtn(btnZone, "取消", "60%", "aDelBtn");
  delBtn.addEventListener("click", () => DelEdit(tC, dCC));

  diary.append(btnZone);

  // 编辑时让editBtn消失
  target.style.display = "none";

  function SaveEdit() {
    let diaryData = JSON.parse(localStorage.getItem("diaryData"));
    let diaryId = diary.querySelector(".diaryId");
    let index = diaryData.diaryId.indexOf(diaryId.textContent);

    diaryData.diaries[index].topic = topicInput.value;
    diaryData.diaries[index].diaryContent = diaryContentInput.value;

    diaryData = JSON.stringify(diaryData);
    localStorage.setItem("diaryData", diaryData);

    tC = topicInput.value;
    dCC = diaryContentInput.value;
    DelEdit(tC, dCC);
  }

  function DelEdit(tC, dCC) {
    // 恢复文本内容
    topic.textContent = tC;
    diaryContent.textContent = dCC;
    // 去除无关元素
    topicInput.remove();
    diaryContentInput.remove();
    btnZone.remove();

    target.style.display = "block";
  }
}
