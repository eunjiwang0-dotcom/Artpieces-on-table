document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((root) => {
    const imgEl = root.querySelector(".carousel-img");
    const prevBtn = root.querySelector(".prev");
    const nextBtn = root.querySelector(".next");

    const images = (root.dataset.images || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    if (images.length <= 1) {
      // 이미지가 1장뿐이면 버튼 숨김
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      return;
    }

    let i = 0;

    const render = () => {
      imgEl.src = images[i];
    };

    prevBtn.addEventListener("click", () => {
      i = (i - 1 + images.length) % images.length;
      render();
    });

    nextBtn.addEventListener("click", () => {
      i = (i + 1) % images.length;
      render();
    });
  });
});
