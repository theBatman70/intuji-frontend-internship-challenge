// Select all question and answer elements
const faqs = document.querySelectorAll(".faq");
const answers = document.querySelectorAll(".answer");

// Loop through questions and add event listeners
faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    // Hide all answer elements
    answers.forEach((answer) => {
      answer.style.display = "none";
    });

    // Show the answer element associated with the clicked question
    const associatedAnswer = answers[index];
    associatedAnswer.style.display = "block";
  });
});
