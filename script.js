const bookingForm = document.querySelector(".booking-form");
const note = document.querySelector(".form-note");

bookingForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(bookingForm);
  const name = data.get("name")?.toString().trim() || "고객";

  note.textContent = `${name}님, 문의 내용이 준비되었습니다. 빠른 예약은 1866-0722로 바로 연결해 주세요.`;
  bookingForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
