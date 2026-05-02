let colors = document.querySelector("#colors");
let body = document.querySelector("body");

colors.addEventListener("change", changeColor);

function changeColor() {
  switch (colors.value) {
    case "blue": {
      ColorCh(
        "rgba(0, 229, 255, 0.4)",
        "rgba(31, 76, 201, 0.4)",
        "rgb(67, 163, 248)",
      );
      break;
    }
    case "orange": {
      ColorCh(
        "rgba(246, 88, 88, 0.4)",
        "rgba(247, 67, 40, 0.4)",
        "rgb(250, 90, 69)",
      );
      break;
    }
    case "purple": {
      ColorCh(
        "rgba(234, 108, 245, 0.4)",
        "rgba(190, 70, 255, 0.4)",
        "rgb(164, 106, 235)",
      );
      break;
    }
    case "green": {
      ColorCh(
        "rgba(194, 248, 146, 0.4)",
        "rgba(0, 176, 9, 0.4)",
        "rgb(89, 209, 78)",
      );
      break;
    }
    case "dark": {
      ColorCh("rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.6)", "rgb(96, 94, 99)");
      break;
    }
  }
}

function ColorCh(out, inner, search) {
  let root = document.documentElement;
  root.style.setProperty("--outsideColor", out);
  root.style.setProperty("--innerColor", inner);
  root.style.setProperty("--searchColor", search);
  if (colors.value === "dark") {
    // body.style.backgroundImage = "url(../img/bg2.jpg)";
    root.style.setProperty("--fontColor", " rgba(255, 255, 255, 0.9)");
    root.style.setProperty("--darkBgChColor", " rgb(50, 50, 50)");
  } else {
    // body.style.backgroundImage = "url(../img/bg1.jpg)";
    root.style.setProperty("--fontColor", "rgba(0, 0, 0, 0.9)");
    root.style.setProperty("--darkBgChColor", " rgb(200, 200, 200)");
  }

  // 存储主题色的数据
  let themeColor = JSON.stringify(colors.value);
  localStorage.setItem("themeColor", themeColor);
}

colors.value = JSON.parse(localStorage.getItem("themeColor")) ?? "blue";
changeColor();
