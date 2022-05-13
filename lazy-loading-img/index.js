if (!!window.IntersectionObserver) {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -200px 0px" }
  );
  document.querySelectorAll("img").forEach((img) => {
    observer.observe(img);
  });
} else {
  document.querySelector("#warning").style.display = "block";
}
