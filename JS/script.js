// Obtém o botão
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Quando o usuário rolar a página para baixo 300px, o botão aparece
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Quando o usuário clicar no botão, ele rolará para o topo da página
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  