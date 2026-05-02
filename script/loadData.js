// 加载日记内容
let diaryData = JSON.parse(localStorage.getItem("diaryData")) ?? {
  diaryId: [],
  time: [],
  diaries: [],
};
let diaryZone = document.querySelector(".diary-zone");

let i = 0;

while (diaryData.time[i]) {
  // 创建日记的唯一标识
  let diaryId = document.createElement("div");
  diaryId.className = "diaryId";
  diaryId.textContent = diaryData.diaryId[i];

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

  // 删除按钮
  let binBtn = document.createElement("button");
  binBtn.className = "delBtn";
  let delIcon = document.createElement("img");
  delIcon.className = "delIcon";
  delIcon.src = "../img/删除.svg";

  binBtn.append(delIcon);
  diary.append(binBtn);

  // 编辑按钮
  let editBtn = document.createElement("button");
  editBtn.className = "editBtn";
  let editIcon = document.createElement("img");
  editIcon.className = "editIcon";
  editIcon.src = "../img/编辑.svg";

  editBtn.append(editIcon);
  diary.append(editBtn);

  // 填充日记内容
  createTime.textContent = diaryData.time[i];
  topic.textContent = diaryData.diaries[i].topic;
  diaryContent.textContent = diaryData.diaries[i].diaryContent;

  // 添加日记结构
  diary.append(diaryId, createTime, diaryBlock);
  diaryBlock.append(topic, diaryContent);
  diaryZone.append(diary);

  i++;
}

// 加载背景图片
let html = document.querySelector("html");
let link = localStorage.getItem("bgPicture");
if (link) {
  link = JSON.parse(link);
  html.style.backgroundImage = `url(${link})`;
}
