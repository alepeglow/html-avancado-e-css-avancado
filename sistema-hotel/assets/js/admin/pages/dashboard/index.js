const semanasRotulos = ["semana 1", "semana 2", "semana 3", "semana 4"];
const semanasDados = [10000, 12000, 11000, 13000];
const semanasCores = ["#00796b", "#0288d1", "#fbc02d", "#d32f2f"];

new Chart(document.getElementById("receitaSemanalGrafico"), {
  type: "bar",
  data: {
    labels: semanasRotulos,
    datasets: [
      {
        label: "Receita (R$)",
        data: semanasDados,
        backgroundColor: semanasCores,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const pieLabels = ["Quartos", "Serviços", "Outros"];
const pieData = [70, 20, 10];
new Chart(document.getElementById("receitaGraficoPizza"), {
  type: "pie",
  data: {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
