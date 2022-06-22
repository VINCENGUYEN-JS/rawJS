let poll = {
  question: "What's your favorite programming language",
  answer: ["C", "Java", "PHP", "Javascript"],
  pollCount: 20,
  answerWeight: [4, 4, 2, 10],
  selectedAnswer: -1,
};

let pollDOM = {
  question: document.querySelector(".poll .question"),
  answer: document.querySelector(".poll .answers"),
};

pollDOM.question.innerText = poll.question;
const answers = poll.answer
  .map(
    (answer, i) => `<div class="answer" onclick="markAnswer('${i}')">
    ${answer}
    <span class="percentage-bar"></span>
    <span class="percentage-value"></span>
</div>`
  )
  .join("");

// console.log({ answers });

pollDOM.answer.innerHTML = answers;

function markAnswer(i) {
  poll.selectedAnswer = +i;
  try {
    document
      .querySelector(".poll .answers .answer.selected")
      .classList.remove("selected");
  } catch (msg) {}
  document
    .querySelectorAll(".poll .answers .answer")
    [+i].classList.add("selected");
  showResults();
}

function showResults() {
  let answers = document.querySelectorAll(".poll .answers .answer");
  console.log({ poll });
  for (let i = 0; i < answers.length; i++) {
    let percentage = 0;
    if (i === poll.selectedAnswer) {
      percentage = Math.round(
        ((poll.answerWeight[i] + 1) * 100) / (poll.pollCount + 1)
      );
    } else {
      percentage = Math.round(
        (poll.answerWeight[i] * 100) / (poll.pollCount + 1)
      );
    }
    answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
    answers[i].querySelector(".percentage-value").innerText = percentage + "%";
  }
}
