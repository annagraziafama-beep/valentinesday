document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope-container");
  const letter = document.getElementById("letter-container");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".btn[alt='Yes']");
  const title = document.getElementById("letter-title");
  const catImg = document.getElementById("letter-cat");
  const buttons = document.getElementById("letter-buttons");
  const finalText = document.getElementById("final-text");

  if (!envelope || !letter || !noBtn || !yesBtn) {
    console.error("Required elements not found");
    return;
  }

  envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      document.querySelector(".letter-window")?.classList.add("open");
    }, 50);
  });

  noBtn.addEventListener("mouseover", () => {
    const distance = 200;
    const angle = Math.random() * Math.PI * 2;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  yesBtn.addEventListener("click", () => {
    title.textContent = "Yay 💛 I’m really looking forward to it.";

    catImg.src =
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTc4eTY0NDc5cjdhMGdnbDI0cmNzOHo0Zm1zcGF2Zmx5OWpja2U1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VCPFtFuWvaDa1RdhKZ/giphy.gif";

    document.querySelector(".letter-window")?.classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
  });
});
