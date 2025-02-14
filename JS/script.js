// Obtém o botão de rolagem para o topo
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Esconde o botão ao carregar a página
scrollToTopBtn.style.display = "none";

// Exibe ou oculta o botão conforme a rolagem
window.onscroll = function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Quando clicar no botão, rola para o topo da página
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
