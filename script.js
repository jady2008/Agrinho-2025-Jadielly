document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de interatividade: Alerta ao clicar no botão "Saiba Mais"
    const saibaMaisBtn = document.getElementById('saibaMaisBtn');
    if (saibaMaisBtn) {
        saibaMaisBtn.addEventListener('click', () => {
            alert('Explore mais sobre a agricultura sustentável!');
            // Você pode adicionar mais lógica aqui, como rolar para uma seção, etc.
        });
    }

    // Exemplo de conteúdo dinâmico com JavaScript
    const techInfoDiv = document.getElementById('tech-info');
    if (techInfoDiv) {
        const tecnologias = [
            "Drones para monitoramento de lavouras",
            "Sensores de solo para otimização da irrigação",
            "Inteligência Artificial para análise de dados",
            "Maquinário autônomo"
        ];

        let techListHtml = '<h3>Alguns exemplos de tecnologias:</h3><ul>';
        tecnologias.forEach(tech => {
            techListHtml += `<li>${tech}</li>`;
        });
        techListHtml += '</ul>';
        techInfoDiv.innerHTML = techListHtml;
    }

    // Exemplo de mudança de cor do cabeçalho ao rolar a página (opcional)
    // const header = document.querySelector('header');
    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 100) {
    //         header.style.backgroundColor = '#cc0000'; // Um vermelho mais escuro
    //     } else {
    //         header.style.backgroundColor = '#ff0000'; // Vermelho original
    //     }
