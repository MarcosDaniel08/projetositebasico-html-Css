
document.querySelectorAll(".navi a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    section?.scrollIntoView({ behavior: "smooth" });
  });
});


const titulo = document.querySelector(".divi h1");

titulo.addEventListener("mouseover", () => {
  titulo.textContent = "Front-End Developer";
});

titulo.addEventListener("mouseout", () => {
  titulo.textContent = "Desenvolvedor Web";
});
