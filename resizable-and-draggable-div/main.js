const el = document.querySelector(".item");

let isResizing = false;

el.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  if (!isResizing) {
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    // position when the rectangle doesn't move yet
    let prevX = e.clientX; //2
    let prevY = e.clientY; //2

    function mouseMove(e) {
      let newX = e.clientX - prevX; // move el to the right (3) 5-3=2;
      let newY = e.clientY - prevY; // 2 - 2 = 0
      const rect = el.getBoundingClientRect();
      el.style.left = `${rect.left + newX}px`; // 200 + 2 = 200
      el.style.top = `${rect.top + newY}px`;
      prevX = e.clientX;
      prevY = e.clientY;
    }
    function mouseUp(e) {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    }
  }
}

const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mouseDown);
  function mouseDown(e) {
    isResizing = true;

    currentResizer = e.target;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width + (e.clientX - prevX) + "px";
        el.style.height = rect.height + (e.clientY - prevY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width - (e.clientX - prevX) + "px";
        el.style.height = rect.height + (e.clientY - prevY) + "px";
        el.style.left = rect.left + (e.clientX - prevX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width + (e.clientX - prevX) + "px";
        el.style.height = rect.height - (e.clientY - prevY) + "px";
        el.style.top = rect.top + (e.clientY - prevY) + "px";
      } else if (currentResizer.classList.contains("nw")) {
        el.style.width = rect.width - (e.clientX - prevX) + "px";
        el.style.height = rect.height - (e.clientY - prevY) + "px";
        el.style.left = rect.left + (e.clientX - prevX) + "px";
        el.style.top = rect.top + (e.clientY - prevY) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }
    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}
