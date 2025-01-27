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

// Отримуємо список
const programList = document.querySelector(".first-program");

// Функція для перевірки ширини екрана і клонування елементів
const cloneItemsIfNeeded = () => {
  if (window.innerWidth <= 1024) {
    const items = Array.from(programList.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      programList.appendChild(clone);
    });
  }
};

cloneItemsIfNeeded(); // Клонуємо елементи тільки для мобільної версії

let scrollAmount = 0;

function autoScroll() {
  // Плавна прокрутка
  programList.scrollLeft = scrollAmount;

  // Якщо досягли кінця першого циклу (до клонованого контенту)
  if (scrollAmount >= programList.scrollWidth / 2) {
    scrollAmount = 0; // Повертаємося на початок (не помітно для користувача)
  } else {
    scrollAmount += 1; // Задаємо швидкість прокручування
  }
}

// Запускаємо автопрокрутку кожні 20 мс
setInterval(autoScroll, 20);

// Отримуємо список
const programList2 = document.querySelector(".second-program");

// Функція для перевірки ширини екрана і клонування елементів
const cloneItemsIfNeeded2 = () => {
  if (window.innerWidth <= 1024) {
    const items = Array.from(programList2.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      programList2.appendChild(clone);
    });
  }
};

cloneItemsIfNeeded2(); // Клонуємо елементи тільки для мобільної версії

let scrollAmount2 = 0;

function autoScroll2() {
  // Плавна прокрутка
  programList2.scrollLeft = scrollAmount2;

  // Якщо досягли кінця першого циклу (до клонованого контенту)
  if (scrollAmount2 >= programList2.scrollWidth / 2) {
    scrollAmount2 = 0; // Повертаємося на початок (не помітно для користувача)
  } else {
    scrollAmount2 += 1; // Задаємо швидкість прокручування
  }
}

// Запускаємо автопрокрутку кожні 20 мс
setInterval(autoScroll2, 20);
