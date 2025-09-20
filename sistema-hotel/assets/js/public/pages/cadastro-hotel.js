document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("hotelForm");
    const tbody = document.querySelector("tbody");
  
    function carregarHoteis() {
      const hoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
      tbody.innerHTML = "";
  
      hoteis.forEach(hotel => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${hotel.nome}</td>
          <td>${hotel.cnpj}</td>
          <td>${hotel.telefone}</td>
          <td>${hotel.email}</td>
          <td>${hotel.cidade}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  
    form.addEventListener("submit", e => {
      e.preventDefault();
  
      const hotel = {
        nome: document.getElementById("nomeHotel").value,
        cnpj: document.getElementById("cnpj").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cep: document.getElementById("cep").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
      };
  
      const hoteis = JSON.parse(localStorage.getItem("hoteis")) || [];
      hoteis.push(hotel);
      localStorage.setItem("hoteis", JSON.stringify(hoteis));
  
      form.reset();
      carregarHoteis();
    });
  
    carregarHoteis();
  });