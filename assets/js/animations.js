document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".first-program > .program-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target); // Знаходимо порядковий номер картки
        const delay = index * 200; // Затримка анімації появи

        setTimeout(() => {
          entry.target.classList.remove("opacity-0"); // Робимо елемент видимим
          entry.target.classList.add("animate-slideInRight");

          // Додаємо клас для фіксації кінцевого стану
          setTimeout(() => {
            entry.target.classList.remove("animate-slideInRight");
            entry.target.classList.add("animation-done"); // Клас для фіксації
          }, 800); // 800ms — тривалість анімації
        }, delay);

        observer.unobserve(entry.target); // Зупиняємо спостереження після запуску анімації
      }
    });
  });

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".second-program > .program-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target); // Знаходимо порядковий номер картки
        const delay = index * 200; // Розраховуємо затримку: 200ms для кожної наступної картки

        setTimeout(() => {
          entry.target.classList.remove("opacity-0", "transform");
          entry.target.classList.add("animate-slideInRight");
        }, delay);

        observer.unobserve(entry.target); // Зупиняємо спостереження після запуску анімації
      }
    });
  });

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".slideInRight");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        const delay = index * 200;

        setTimeout(() => {
          entry.target.classList.remove("slideInRight");
          entry.target.classList.add("animate-slideInRight");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  });

  cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".slideInLeft");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        const delay = index * 200;

        setTimeout(() => {
          entry.target.classList.remove("slideInLeft");
          entry.target.classList.add("animate-slideInLeft");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  });

  cards.forEach((card) => observer.observe(card));
});
