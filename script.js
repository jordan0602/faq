const faqSections = document.querySelectorAll(".faq_section");

faqSections.forEach((faqSection) => {
  faqSection.addEventListener("click", () => {
    faqSection.classList.toggle("active");
  });
});