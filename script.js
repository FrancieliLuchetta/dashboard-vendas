const ctx = document.getElementById('vendasChart').getContext('2d');
const vendasChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [{
      label: 'Vendas Mensais (R$)',
      data: [3500, 4200, 3900, 5000, 3900],
      backgroundColor: [
        '#93c5fd', // Azul claro
        '#a5f3fc', // Azul piscina
        '#c4b5fd', // Lavanda
        '#f9a8d4', // Rosa pastel
        '#bbf7d0'  // Verde pastel
      ],
      borderColor: '#1e3a8a',
      borderWidth: 1.5
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'easeOutBounce'
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#1e3a8a',
          font: { weight: 'bold' }
        }
      },
      x: {
        ticks: {
          color: '#1e3a8a',
          font: { weight: 'bold' }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#1e3a8a',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }
});

const lucroCtx = document.getElementById('lucroChart').getContext('2d');
const lucroChart = new Chart(lucroCtx, {
  type: 'pie',
  data: {
    labels: ['Lucro Bruto', 'Despesas', 'Lucro Líquido'],
    datasets: [{
      label: 'Lucros',
      data: [7300, 2500, 4800],
      backgroundColor: [
        '#a78bfa', // roxo lavanda
        '#60a5fa', // azul claro
        '#f9a8d4'  // rosa pastel
      ],
      borderColor: '#f0f9ff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#1e3a8a',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }
});

function filtrarDados(anoSelecionado) {
    let novosDados;
  
    if (anoSelecionado === "2024") {
      novosDados = [3500, 4200, 3900, 5000, 3900]; // Dados de 2024
    } else if (anoSelecionado === "2025") {
      novosDados = [5200, 4800, 4600, 6100, 5800]; // Dados de 2025
    }
  
    // Atualiza o gráfico de vendas
    vendasChart.data.datasets[0].data = novosDados;
    vendasChart.update();
  }
  
  const metasCtx = document.getElementById('metasChart').getContext('2d');
new Chart(metasCtx, {
  type: 'line',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Meta (R$)',
        data: [4000, 4500, 5000, 5500, 6000],
        borderColor: '#93c5fd',
        backgroundColor: '#93c5fd20',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Realizado (R$)',
        data: [3500, 4200, 3900, 5000, 3900],
        borderColor: '#f472b6',
        backgroundColor: '#f472b620',
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#1e3a8a',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      y: {
        ticks: {
          color: '#1e3a8a',
          font: { weight: 'bold' }
        }
      },
      x: {
        ticks: {
          color: '#1e3a8a',
          font: { weight: 'bold' }
        }
      }
    }
  }
});

const pedidos = [
    { cliente: "Ana Souza", valor: "R$ 350,00", data: "03/05/2024", status: "pago" },
    { cliente: "João Lima", valor: "R$ 790,00", data: "04/05/2024", status: "pendente" },
    { cliente: "Carla Mendes", valor: "R$ 420,00", data: "05/05/2024", status: "cancelado" },
    { cliente: "Bruno Rocha", valor: "R$ 920,00", data: "06/05/2024", status: "pago" },
    { cliente: "Fernanda Reis", valor: "R$ 660,00", data: "07/05/2024", status: "pendente" }
  ];

  function renderizarTabela(filtro = "") {
    const corpoTabela = document.getElementById("tabela-pedidos-body");
    corpoTabela.innerHTML = "";
  
    const pedidosFiltrados = pedidos.filter(pedido =>
      pedido.cliente.toLowerCase().includes(filtro.toLowerCase())
    );
  
    pedidosFiltrados.forEach(pedido => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${pedido.cliente}</td>
        <td>${pedido.valor}</td>
        <td>${pedido.data}</td>
        <td><span class="status ${pedido.status}">${pedido.status.charAt(0).toUpperCase() + pedido.status.slice(1)}</span></td>
      `;
      corpoTabela.appendChild(linha);
    });
  }
  
  // Chamando a função para renderizar ao carregar
  renderizarTabela();
