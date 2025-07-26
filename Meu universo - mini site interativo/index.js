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
    <div class="card"><img src="https://i.pinimg.com/736x/ba/89/dc/ba89dcfa109e976c9f0cb47ba29158f7.jpg" alt="RM"><h3>RM</h3><p>Líder & Rapper Principal</p></div>
    <div class="card"><img src="https://i.pinimg.com/736x/18/95/d1/1895d1f0efc951faf61bf60809247321.jpg" alt="Jin"><h3>Jin</h3><p>Vocalista & Visual</p></div>
    <div class="card"><img src="https://i.pinimg.com/736x/3f/4c/b9/3f4cb9cd3cf93f4c224f9222b9714ea4.jpg" alt="Suga"><h3>Suga</h3><p>Rapper Principal</p></div>
    <div class="card"><img src="https://i.pinimg.com/1200x/68/d4/f8/68d4f8989c12b4767313d9ff90941127.jpg" alt="J-Hope"><h3>J-Hope</h3><p>Dançarino Principal, Rapper & Vocal de Apoio</p></div>
    <div class="card"><img src="https://i.pinimg.com/736x/aa/26/f1/aa26f1bbedcdc890b352bcd469233f40.jpg" alt="Jimin"><h3>Jimin</h3><p>Dançarino Principal & Vocalista Principal</p></div>
    <div class="card"><img src="https://i.pinimg.com/736x/b2/e0/e9/b2e0e9dd3dd1f213dbe16bb71e34d499.jpg" alt="V"><h3>V</h3><p>Vocalista & Visual</p></div>
    <div class="card"><img src="https://i.pinimg.com/736x/f3/8d/43/f38d43efd38eff61ded48d0daf020e1d.jpg" alt="Jungkook"><h3>Jungkook</h3><p>Vocalista Principal, Dançarino Principal & Maknae</p></div>
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

// Dados de biografia de cada integrante
const bioBTS = {
  RM: "Kim Namjoon - Nascido em 12/09/1994. Líder e Rapper Principal. Hobbies: ler, compor e arte.",
  Jin: "Kim Seokjin - Nascido em 04/12/1992. Vocalista e Visual. Hobbies: cozinhar, jogos e pesca.",
  Suga: "Min Yoongi - Nascido em 09/03/1993. Rapper Principal. Hobbies: produzir músicas e fotografia.",
  "J-Hope": "Jung Hoseok - Nascido em 18/02/1994. Dançarino Principal e Rapper. Hobbies: dança e moda.",
  Jimin: "Park Jimin - Nascido em 13/10/1995. Dançarino Principal e Vocalista Principal. Hobbies: dança e pintura.",
  V: "Kim Taehyung - Nascido em 30/12/1995. Vocalista e Visual. Hobbies: fotografia e cinema.",
  Jungkook: "Jeon Jungkook - Nascido em 01/09/1997. Vocalista Principal e Maknae. Hobbies: esportes, filmagem e canto."
};

// Seleciona elementos do modal
const modal = document.getElementById("modal");
const modalNome = document.getElementById("modal-nome");
const modalInfo = document.getElementById("modal-info");
const fechar = document.getElementById("fechar");

// Evento para fechar modal
fechar.addEventListener("click", () => modal.style.display = "none");

// Fecha modal clicando fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Função que adiciona eventos aos cards depois que aparecem
function ativarModal() {
  document.querySelectorAll(".card h3").forEach(card => {
    card.addEventListener("click", () => {
      const nome = card.textContent;
      modalNome.textContent = nome;
      modalInfo.textContent = bioBTS[nome];
      modal.style.display = "flex";
    });
  });
}
