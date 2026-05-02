let addBtn = document.querySelector(".addBtn");
let diaryZone = document.querySelector(".diary-zone");
let diaryData = JSON.parse(localStorage.getItem("diaryData")) ?? {
  diaryId: [],
  time: [],
  diaries: [],
};

addBtn.addEventListener("click", addADiary);

export default function addABtn(btnZone, sentence, position, cl) {
  let btn = document.createElement("button");
  btn.className = `${cl}`;
  btn.style.left = position;
  btn.style.bottom = "0";
  btn.textContent = sentence;
  btnZone.append(btn);
  return btn;
}

function addADiary() {
  // 创建时间对象
  let date = new Date();

  // 创建日记的唯一标识
  let diaryId = document.createElement("div");
  diaryId.className = "diaryId";
  diaryId.textContent = createId(date);

  let diary = document.createElement("div");
  diary.className = "diary";
  let createTime = document.createElement("p");
  createTime.className = "createTime";
  let diaryBlock = document.createElement("div");
  diaryBlock.className = "diaryBlock";
  let topic = document.createElement("p");
  topic.className = "topic";
  let diaryContent = document.createElement("p");
  diaryContent.className = "diaryContent";
  let btnZone = document.createElement("div");
  btnZone.className = "btnZone";

  // 删除按钮
  let binBtn = document.createElement("button");
  binBtn.className = "delBtn";
  let delIcon = document.createElement("img");
  delIcon.className = "delIcon";
  delIcon.src = "/img/删除.svg";

  binBtn.append(delIcon);
  diary.append(binBtn);
  // 先暂时将按钮隐藏起来
  binBtn.style.display = "none";

  // 输入框
  createTime.textContent = `${date.toLocaleDateString()}  ${date.getHours()}:${date.getMinutes()}`;
  let topicInput = document.createElement("input");
  let diaryContentInput = document.createElement("textarea");

  // 添加空白时的提示文字
  function addPlaceHolder(obj, sentence, cl) {
    obj.placeholder = `请输入${sentence}`;
    obj.className = cl;
  }
  addPlaceHolder(topicInput, "标题", "topic");
  addPlaceHolder(diaryContentInput, "日记内容", "diaryContent");

  topic.append(topicInput);
  diaryContent.append(diaryContentInput);

  // 添加按钮
  let saveBtn = addABtn(btnZone, "保存", "18%", "aSaveBtn");
  let delBtn = addABtn(btnZone, "删除", "60%", "aDelBtn");

  // 添加日记结构
  diaryBlock.append(topic, diaryContent);
  diary.append(diaryId, createTime, diaryBlock, btnZone);
  diaryZone.prepend(diary);

  // 添加保存按钮的响应
  saveBtn.addEventListener("click", Save);

  // 保存数据
  function Save() {
    // 第一步，获得数据
    let newDiary = new createDiary(topicInput.value, diaryContentInput.value);
    diaryData.diaryId.unshift(diaryId.textContent);
    diaryData.time.unshift(createTime.textContent);
    diaryData.diaries.unshift(newDiary);

    // 第二步，转换为JSON字符串
    let diaryStr = JSON.stringify(diaryData);

    // 第三步，存放数据
    localStorage.setItem("diaryData", diaryStr);

    // 删去多余的元素，将日记呈现出来
    delInput();

    function delInput() {
      // 删除元素
      topicInput.remove();
      diaryContentInput.remove();
      saveBtn.remove();
      delBtn.remove();

      // 填充日记内容
      createTime.textContent = newDiary.time;
      topic.textContent = newDiary.createTime;
      diaryContent.textContent = newDiary.diaryContent;

      // 显示出删除按钮
      binBtn.style.display = "inline-block";

      // 刷新页面
      location.reload();
    }
  }

  // 构造一个对象存放日记
  function createDiary(topic, diaryContent) {
    this.topic = topic;
    this.diaryContent = diaryContent;
  }

  // 添加删除按钮的响应
  delBtn.addEventListener("click", delData);

  function delData() {
    let allDiary = delBtn.closest(".diary");
    allDiary.remove();
  }

  function createId(date) {
    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;
  }
}
