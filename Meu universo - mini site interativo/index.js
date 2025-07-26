const curiosidades = [
  "Você sabia que o BTS tem mais de 300 músicas?",
  "Um bom livro pode mudar seu dia!",
  "Viajar é colecionar memórias.",
  "Escrever fanfics é uma forma de criar novos mundos."
];

const conteudo = document.getElementById('conteudo');
const curiosidade = document.getElementById('curiosidade');

const secaoBTS = `
  <h2>BTS</h2>
  <p>Conheça os integrantes do BTS!</p>
  <div class="bts-cards">
    <div class="card"><img src="https://i.pinimg.com/736x/ba/89/dc/ba89dcfa109e976c9f0cb47ba29158f7.jpg" alt="RM"><h3>RM</h3></div>
    <div class="card"><img src="https://i.pinimg.com/736x/18/95/d1/1895d1f0efc951faf61bf60809247321.jpg" alt="Jin"><h3>Jin</h3></div>
    <div class="card"><img src="https://i.pinimg.com/736x/3f/4c/b9/3f4cb9cd3cf93f4c224f9222b9714ea4.jpg" alt="Suga"><h3>Suga</h3></div>
    <div class="card"><img src="https://i.pinimg.com/1200x/68/d4/f8/68d4f8989c12b4767313d9ff90941127.jpg" alt="J-Hope"><h3>J-Hope</h3></div>
    <div class="card"><img src="https://i.pinimg.com/736x/aa/26/f1/aa26f1bbedcdc890b352bcd469233f40.jpg" alt="Jimin"><h3>Jimin</h3></div>
    <div class="card"><img src="https://i.pinimg.com/736x/b2/e0/e9/b2e0e9dd3dd1f213dbe16bb71e34d499.jpg" alt="V"><h3>V</h3></div>
    <div class="card"><img src="https://i.pinimg.com/736x/f3/8d/43/f38d43efd38eff61ded48d0daf020e1d.jpg" alt="Jungkook"><h3>Jungkook</h3></div>
  </div>
`;

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    const section = link.getAttribute('data-section');

    // Muda curiosidade aleatória
    const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    curiosidade.textContent = aleatoria;

    // Muda o conteúdo principal
    if (section === "bts") {
      conteudo.innerHTML = secaoBTS;
    } else {
      conteudo.innerHTML = `<h2>${section.charAt(0).toUpperCase() + section.slice(1)}</h2><p>Em breve conteúdo sobre ${section}!</p>`;
    }
  });
});
