let copyText = document.querySelector(".copy-text");

copyText.querySelector("button").addEventListener("click", () => {
  let input = copyText.querySelector("input");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(() => {
    copyText.classList.remove("active");
  }, 1000);
});
