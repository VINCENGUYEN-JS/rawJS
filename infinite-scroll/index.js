//Elements
const root = document.querySelector("#root");
const list = document.querySelector("#list");
const listEnd = document.querySelector("#list-end");

//Render articles
let articleCount = 0;
const appendArticle = () => {
  const article = document.createElement("article");
  const textNode =
    document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `);
  article.appendChild(textNode);
  list.appendChild(article);
  articleCount++;
};

//Utility to load articles
const loadArticle = () => {
  for (let i = 0; i < 3; ++i) {
    appendArticle();
  }
};

//Interception
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (articleCount < 10) {
        loadArticle();
      } else {
        observer.unobserve(listEnd);
      }
    }
  });
};

const observer = new IntersectionObserver(callback, {
  threshold: 0,
});

observer.observe(listEnd);

loadArticle();
