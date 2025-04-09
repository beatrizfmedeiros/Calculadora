// Aqui a gente pega onde vamos mostrar as coisas
const operacao = document.getElementById('operacao');
const resultado = document.getElementById('resultado');
const hora = document.getElementById('hora');
const data = document.getElementById('data');

// Atualiza hora e data a cada segundo
setInterval(() => {
  const agora = new Date();
  hora.textContent = agora.toLocaleTimeString();
  data.textContent = agora.toLocaleDateString();
}, 1000);

// Função para adicionar valores na tela
function adicionarValor(valor) {
  operacao.textContent += valor;
}

// Função que limpa toda a conta
function limparTudo() {
  operacao.textContent = '';
  resultado.textContent = '0';
}

// Função que apaga o último caractere (como um backspace)
function limparUltimo() {
  operacao.textContent = operacao.textContent.slice(0, -1);
}

// Faz o cálculo quando clica no botão "="
function calcular() {
  try {
    let conta = operacao.textContent.replace('X', '*'); // troca X por *
    resultado.textContent = eval(conta); // calcula
  } catch (erro) {
    resultado.textContent = 'Erro';
  }
}
