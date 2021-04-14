let tabsId = document.getElementById("tabsid");
let tabContent = document.getElementsByClassName("tabContent");
let tabstitle = document.getElementsByClassName("tabstitle");
let tabsIdfortwo = document.getElementById("tabsid-for-two");
let tabContentfortwo = document.getElementsByClassName("tabContent-for-two");
let tabstitlefortwo = document.getElementsByClassName("tabstitle-for-two");

hideTabsContent(1);

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tabstitle[i].classList.remove("whiteborder");
  }
}
tabsId.onclick = function (event) {
  let target = event.target;
  if (target.className == "tabstitle") {
    for (let i = 0; i < tabstitle.length; i++) {
      if (target == tabstitle[i]) {
        showTabsContent(i);
      }
    }
  }
};
function showTabsContent(i) {
  if (tabContent[i].classList.contains("hide")) {
    hideTabsContent(0);
    tabstitle[i].classList.add("whiteborder");
    tabContent[i].classList.remove("hide");
    tabContent[i].classList.add("show");
  }
}

hideTabsContent2(1);

function hideTabsContent2(c) {
  for (let s = c; s < tabContentfortwo.length; s++) {
    tabContentfortwo[s].classList.remove("shows");
    tabContentfortwo[s].classList.add("hides");
    tabstitlefortwo[s].classList.remove("whiteborder-for-two");
  }
}
tabsIdfortwo.onclick = function (ev) {
  let target = ev.target;
  if (target.className == "tabstitle-for-two") {
    for (let s = 0; s < tabstitlefortwo.length; s++) {
      if (target == tabstitlefortwo[s]) {
        showTabsContent2(s);
      }
    }
  }
};
function showTabsContent2(s) {
  if (tabContentfortwo[s].classList.contains("hides")) {
    hideTabsContent2(0);
    tabstitlefortwo[s].classList.add("whiteborder-for-two");
    tabContentfortwo[s].classList.remove("hides");
    tabContentfortwo[s].classList.add("shows");
  }
}

let photos = document.getElementById("photos");
let addcolor = document.getElementsByClassName("div1s");
