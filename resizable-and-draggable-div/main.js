const el = document.querySelector(".item");

el.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
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
