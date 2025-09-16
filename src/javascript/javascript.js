  document.getElementById('formulario').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Limpar mensagens anteriores
  document.getElementById('erro-nome').textContent = '';
  document.getElementById('erro-idade').textContent = '';
  document.getElementById('erro-genero').textContent = '';
  document.getElementById('erro-interesses').textContent = '';
  document.getElementById('resultado').textContent = '';
  
  // Captura de dados
  const nome = document.getElementById('nome').value.trim();
  const idade = parseInt(document.getElementById('idade').value.trim());
  const genero = document.querySelector('input[name="genero"]:checked');
  const interesses = Array.from(document.querySelectorAll('input[name="interesses"]:checked'))
  .map(el => el.value);

  let valido = true;

  // Validação
  if (nome === '') {
    document.getElementById('erro-nome').textContent = 'Por favor, insira seu nome.';
    valido = false;
  }

  if (isNaN(idade) || idade <= 0) {
    document.getElementById('erro-idade').textContent = 'Digite uma idade válida.';
    valido = false;
  }

  if (!genero) {
    document.getElementById('erro-genero').textContent = 'Escolha um gênero.';
    valido = false;
  }

  if (interesses.length === 0) {
    document.getElementById('erro-interesses').textContent = 'Selecione pelo menos um interesse.';
    valido = false;
  }

  // Se tudo estiver válido, processa
  if (valido) {
    let sugestao = '';

    // Estrutura de controle para sugestões
    if (interesses.includes('tecnologia')) {
      sugestao += '💻 Produto sugerido: Fone Bluetooth de última geração.\n';
    }
    if (interesses.includes('moda')) {
      sugestao += '👗 Produto sugerido: Assinatura de caixa de moda mensal.\n';
    }
    if (interesses.includes('esportes')) {
      sugestao += '🏀 Produto sugerido: Kit de treino funcional.\n';
    }
    if (interesses.includes('livros')) {
      sugestao += '📚 Produto sugerido: Clube de livros por assinatura.\n';
    }

    document.getElementById('resultado').textContent =
      `Obrigado, ${nome}! Aqui está sua sugestão personalizada:\n\n${sugestao}`;
    
  }
});
