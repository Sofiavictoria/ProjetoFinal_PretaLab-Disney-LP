function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a soma entre elas.
  Em seguida, ao invés de mostrar o numero 10, mostre o resultado da operação */
  
  const resultadoSoma = numero1 + numero2 ;
  
  
  
  
  document.getElementById("resultadoSoma").innerHTML = resultadoSoma;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a subtração entre elas.
   Em seguida, ao invés de mostrar o numero 9, mostre o resultado da operação */
  
  
  const resultadoSubtrair = numero1 - numero2;
  
  
  
  document.getElementById("resultadoSub").innerHTML = resultadoSubtrair;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a multiplicação entre elas.
   Em seguida, ao invés de mostrar o numero 5, mostre o resultado da operação */
  
  const resultadomultiplicacao = numero1 * numero2;
  
  
  document.getElementById("resultadoMult").innerHTML = resultadomultiplicacao;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  // evite mexer no código acima!

  /* use as constantes numero 1 e numero 2 e realize a divisão entre elas.
   Em seguida, ao invés de mostrar o numero -89, mostre o resultado da operação */
  
  const resultadodivisao = numero1 / numero2; 
  
  
  
  document.getElementById("resultadoDiv").innerHTML = resultadodivisao;
}
