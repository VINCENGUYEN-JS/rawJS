let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabHeaderNode = tabs.querySelectorAll(".tab-header > div");
let tabContent = tabs.querySelector(".tab-content");
let tabContentNode = tabs.querySelectorAll(".tab-content > div");

for (let i = 0; i < tabHeaderNode.length; i++) {
  tabHeaderNode[i].addEventListener("click", function () {
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNode[i].classList.add("active");
    tabContent.querySelector(".active").classList.remove("active");
    tabContentNode[i].classList.add("active");
  });
}
