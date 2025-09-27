




const textArea = document.getElementById("cifra_personalizada");
const saida = document.getElementById("cifra_personalizada_resultado");

//atividade 1
function encriptar(stringEncriptada){//parametro do texto que eu irei escrever para encriptografar
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){//i vai percorrer a matriz inteira
        if(stringEncriptada.includes(matrizCodigo[i][0])){//verificar vogais para serem encriptadas
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function btnEncriptar(){
    const textArea = document.getElementById("cifra_personalizada");
    const saida = document.getElementById("cifra_personalizada_resultado");


    const textoEncriptado = encriptar(textArea.value)//colocar o que eu escrever como resultado de criptografar
    saida.innerText = textoEncriptado
    textArea.value = ""
    //document.querySelector(".saida").disabled = true;
    
    //Trocar o textarea por um p dentro de uma div para que ele possa ser copiado e não escrito
    
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    saida.value = textoDesencriptado
    textArea.value = ""
}


function desencriptar(stringDesencriptada){//parametro do texto que eu irei escrever para encriptografar
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){//i vai percorrer a matriz inteira
        if(stringDesencriptada.includes(matrizCodigo[i][1])){//verificar chave encriptografada
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    let copyText = document.getElementById("cifra_personalizada_resultado");
    copyText.select();
    document.execCommand("copy");
    document.querySelector(".btn-copiar").addEventListener("click", copy);
}





//atividade 2 cifra de cesar

function substituir() {
  // Pega o texto e a chave (deslocamento)
  const entrada = document.getElementById("texto_cesar").value;
  const deslocamento = parseInt(document.getElementById("chave_cesar").value, 10); 
  // convertendo string para int
  // Conferir se não foi digitado nada
  if (isNaN(deslocamento)) {
    alert("Digite um número válido para a chave de deslocamento.");
    return;
  }
  let resultado = "";
  for (let i = 0; i < entrada.length; i++) {
    let char = entrada[i];
    let codigo = entrada.charCodeAt(i);
    //pegando o codigo numerico do caractere
    // Percorrem letras maiúsculas (A-Z)
    // FromCharCode pega o codigo numerico dos caracteres da entrada digitada
    if (codigo >= 65 && codigo <= 90) {
      char = String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
    }
    //a % por 26 é para garantir que não ultrapasse 26 letras
    // Letras minúsculas (a-z)
    else if (codigo >= 97 && codigo <= 122) {
      char = String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
    }
    // Caracteres que não são letras ficam iguais
    resultado += char;
  }
  document.getElementById("resultado_cesar").value = resultado;
}


function copiar_cesar(){
    let copyText = document.getElementById("resultado_cesar");
    copyText.select();
    document.execCommand("copy");
    document.querySelector(".btn-copiar").addEventListener("click", copy);
}



//atividade 3
function transposicao() {
  const entrada = document.getElementById("texto_transposicao").value;
  // Array.from evita problemas com caracteres especiais
  const caracteres = Array.from(entrada);  
  const resultado = [];
  // percorrer de 2 em 2
  for (let i = 0; i < caracteres.length; i += 2) {
    const atual = caracteres[i];
    const proximo = caracteres[i + 1];

    if (proximo !== undefined) {
      // se existir o próximo, inverte a ordem
      resultado.push(proximo, atual);
    } else {
      // se não existir (string ímpar), mantém o último
      resultado.push(atual);
    }
  }
  document.getElementById("resultado_transposicao").value = resultado.join("");
}

function copiar_transposicao(){
    let copyText = document.getElementById("resultado_transposicao");
    copyText.select();
    document.execCommand("copy");
    document.querySelector(".btn-copiar").addEventListener("click", copy);
}




//atividade 4 
function avaliarSenha() {
  const senha = document.getElementById('senha').value;
  const barra = document.getElementById('barraForca');
  const mensagem = document.getElementById('mensagemForca');
  let forca = 0;
  if (senha.length > 5) forca++;
  if (senha.match(/[A-Z]/)) forca++;
  if (senha.match(/[0-9]/)) forca++;
  if (senha.match(/[^a-zA-Z0-9]/)) forca++;
  //avaliando a senha por tamanho,numeros,caracteres especiais e letras maiúsculas

  if (forca <= 1) {
    barra.style.backgroundColor = "red";
    mensagem.textContent = "Senha fraca";
  } else if (forca == 2 || forca == 3) {
    barra.style.backgroundColor = "orange";
    mensagem.textContent = "Senha média";
  } else {
    barra.style.backgroundColor = "green";
    mensagem.textContent = "Senha forte";
  }
}



//atividade 5
function forcaSenha(senha){
  let forca = 0;
  if (senha.length > 5) forca++;
  if (senha.match(/[A-Z]/)) forca++;
  if (senha.match(/[0-9]/)) forca++;
  if (senha.match(/[^a-zA-Z0-9]/)) forca++;
  //avaliando a senha por tamanho,numeros,caracteres especiais e letras maiúsculas

  if (forca <= 1) {
    //mensagem_forca = "Senha fraca";
    return forca
  } else if (forca == 2 || forca == 3) {
    //mensagem_forca = "Senha média";
    return forca
  } else {
    //mensagem_forca = "Senha forte";
    return forca
  }
}

function compararSenhas() {
  const senhaA = document.getElementById('senhaA').value;
  const senhaB = document.getElementById('senhaB').value;
  const resultado = document.getElementById('resultado_comparacao');

  forcaSenhaA = forcaSenha(senhaA)
  forcaSenhaB = forcaSenha(senhaB)

  if (forcaSenhaA > forcaSenhaB){
   resultado.textContent = "Senha A parece ser mais forte.";
  }  
  else if (forcaSenhaB > forcaSenhaA){
   resultado.textContent = "Senha B parece ser mais forte.";
  }  
  else{
   resultado.textContent = "As senhas têm forças semelhantes.";
  }  
}


//atividade 6 decifrar conteudo
function verificarMensagem(){
  const tentativa = document.getElementById("tentativa_mensagem");
  const texto_tentativa = tentativa.value;
  const resultado = document.getElementById("resultado_mensagem");

  if (texto_tentativa.toLowerCase() == "saude") {
    resultado.textContent = "Parabéns! Você acertou.";
  } else {
    resultado.textContent = "Tente novamente.";
  }
}


//atividade 7 gerar desafios de criptografia
function gerarDesafio() {
  let mensagens_cesar = ["Dklw txh nrz", "Wxwv qeb zixp", "Khoor zruog","yxacx","dcteq,rag","jui zluhwym","hfijwst","zrephevb","mxlhnkt","aiw uqocmt","lezekvi","hsqbczcuwo","ecejqttq","awt","lxvydcjmxa","rwcnawnc","ifsf","vnozmjdyz","uwtythtqt","yktyux"];

  let mensagens_transposicao = ["uctlrua","iptnrua","unevm","agalixa","opcdsat","anonetnclogoai","niudtsirlazicaoa","icneica","icenam","rcpiotrgfaai","isgnluradidae","abatat","aceldnraoi","rpfosiisnola","lgbolazicaoa","olgnvedidae","evtnlidaro","acimhnoa","iscnorinazaco","erroaginazaco"];

  let msg_cesar = mensagens_cesar[Math.floor(Math.random() * mensagens_cesar.length)];
  document.getElementById("desafio_cesar").innerText = `Mensagem: ${msg_cesar}\n Tipo: Cifra de César`;

  let msg_transposicao = mensagens_transposicao[Math.floor(Math.random() * mensagens_transposicao.length)];
  document.getElementById("desafio_transposicao").innerText = `Mensagem: ${msg_transposicao}\n Tipo: Transposicao`;

}

//atividade 8 Desafio final 

function verificarDesafioFinal(){
  const tentativa = document.getElementById("tentativa_final");
  const texto_tentativa = tentativa.value;
  const resultado = document.getElementById("resultado_final");

  if (texto_tentativa.toLowerCase() == "virtude") {
    resultado.textContent = "Parabéns! Você completou o desafio final!";
    //trocar para página de parabéns
  } else {
    resultado.textContent = "Tente novamente.";
  }
}

//atividade 9 Análise de frequência(grafico de barras)
function analisarFrequencia() {
  let texto = document.getElementById("texto_frequencia").value.toUpperCase();
  let freq = {};
  for (let l of texto) if (l.match(/[A-Z]/)) freq[l] = (freq[l] || 0) + 1;
  let saida = Object.entries(freq).map(([letra, qtd]) => `${letra} : ${qtd}`).join("\n");
  document.getElementById("resultado_frequencia").innerText = saida; 
}

//atividade 10 forca bruta de cesar

function forcaBruta() {
  const entrada = document.getElementById("texto_bruta");
  const resultado = document.getElementById("resultado_bruta");
  // Lê o valor digitado no entrada e remove espaços extras no começo/fim
  const txt = (entrada.value || '').trim();
  // Se o input estiver vazio, mostra uma mensagem e retorna (não faz nada)
  if (!txt) {
    resultado.innerText = 'Insira um texto para testar.';
    return;
  }
  // Array que vai armazenar todas as linhas de saída (uma linha por chave)
  const resultados = [];
  // Testar todas as cifras possíveis (1-25)
  for (let k = 1; k <= 25; k++) {
    // Para cada caractere do texto (Array.from garante Unicode correto)
    const decifrada = Array.from(txt).map(ch => {
      const code = ch.charCodeAt(0);
      // Pega o código ASCII/Unicode do caractere
      // Se for letra maiúscula A-Z
      if (code >= 65 && code <= 90) {
        const base = 65; // Base do alfabeto maiúsculo
        // Deslocamento reverso da cifra, com %26 para "dar a volta" no alfabeto
        const cifrado = ((code - base - k + 26) % 26) + base;
        return String.fromCharCode(cifrado); // Converte de volta para caractere
      }
      // Se for letra minúscula a-z
      if (code >= 97 && code <= 122) {
        const base = 97; // Base do alfabeto minúsculo
        const cifrado = ((code - base - k + 26) % 26) + base;
        return String.fromCharCode(cifrado); // Converte de volta para caractere
      }
      // Se não for letra (número, espaço, pontuação, emoji), retorna sem alteração
      return ch;
    }).join(''); // Junta todos os caracteres decifrados em uma string
    // Adiciona uma linha ao array com a chave e o resultado decifrado
    resultados.push(`Chave ${k}: ${decifrada}`);
  }
  // Junta todas as resultados com quebras de linha e coloca no elemento de saída
  resultado.innerText = resultados.join('\n');
}

