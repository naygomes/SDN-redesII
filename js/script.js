// Selecione o elemento da div "intro" e a navbar
const header = document.getElementById("header");
const navbar = document.querySelector(".navbar");
const botoes = document.getElementsByClassName("botao-nav");

// Adicione um evento de rolagem à página
window.addEventListener("scroll", function () {
	// Verifique se a posição da rolagem atingiu a parte inferior da div "intro"
	if (
		window.scrollY >=
		header.offsetTop + header.offsetHeight - navbar.offsetHeight
	) {
		// Se sim, aplique um estilo diferente à navbar
		navbar.style.backgroundImage = "none";
		navbar.style.backgroundColor = "#FFFFFF";
		navbar.style.boxShadow = "0 1px 2px #AAAAAA";

		for (let i = 0; i < botoes.length; i++) {
			botoes[i].style.color = "#06213f";
			botoes[i].style.textShadow = "none";
		}
	} else {
		// Caso contrário, restaure o estilo original da navbar
		navbar.style.backgroundImage = "url(../assets/header-sdn.jpeg)";
		navbar.style.backgroundColor = "#FFFFFF";
		navbar.style.boxShadow = "none";

		for (let i = 0; i < botoes.length; i++) {
			botoes[i].style.color = "var(--cinza)";
			botoes[i].style.textShadow = "1px 1px 2px #06213f";
		}
	}
});
