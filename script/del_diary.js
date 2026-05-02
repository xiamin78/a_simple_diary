let delBtns = document.querySelectorAll(".delBtn");

for (let item of delBtns) {
  item.addEventListener("click", showDelConfirm);
}

function showDelConfirm(event) {
  let target = event.target;
  let diary = target.closest(".diary");
  let flag = diary.querySelector(".delConfirm");

  if (flag === null) {
    // 创建需要出现的元素
    let delConfirm = document.createElement("div");
    delConfirm.className = "delConfirm";
    let pCon = document.createElement("p");
    pCon.textContent = "确认要删除吗";
    let delConBtns = document.createElement("div");
    delConBtns.className = "delConBtns";
    let delYes = document.createElement("button");
    delYes.className = "delYes";
    delYes.textContent = "确认";
    let No = document.createElement("button");
    No.className = "No";
    No.textContent = "取消";

    // 整合删除的确认
    delConBtns.append(delYes, No);
    delConfirm.append(pCon, delConBtns);

    // 加入页面中
    diary.append(delConfirm);

    // 删除按钮的响应
    delYes.addEventListener("click", delDiary);

    // 取消按钮的响应
    No.addEventListener("click", function (event) {
      close(event, "delConfirm");
    });
  } else {
    flag.remove();
  }
}

// 删除日记在也页面上的显示
function delDiary(event) {
  let target = event.target;
  let diary = target.closest(".diary");

  // 删除日记的元素
  diary.remove();

  // 删除日记数据
  // 获取日记标识
  let diaryId = diary.querySelector(".diaryId");
  diary.querySelector("diaryId");

  let diaryData = JSON.parse(localStorage.getItem("diaryData"));
  let diaryIndex = diaryData.diaryId.indexOf(diaryId.textContent);

  // 删数据
  diaryData.diaryId.splice(diaryIndex, 1);
  diaryData.time.splice(diaryIndex, 1);
  diaryData.diaries.splice(diaryIndex, 1);

  // 覆盖原有数据
  diaryData = JSON.stringify(diaryData);
  localStorage.setItem("diaryData", diaryData);
}

function close(event, cl) {
  let target = event.target;
  let delObject = target.closest(`.${cl}`);
  delObject.remove();
}
