//var nome = `saulo`
//let age, isHuman

//age = 26
//isHuman = true

//console.log(`Olá ${nome} você tem ${age} anos`);

//const person = {
   //name: 'Saulo' ,
  //  age: 25,
    //weight: 90,
  //  isAdmin: true
//}
//console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg e pesa muito`)

//const animals = [
//'Lion',
//"Monkey",
//{
   // nome: 'cat',
 //   age: '3'
//},
//isHuman,
//person
//]
//console.log(animals[2].nome)
//console.log(animals[4].name)
//let contador = 0
//while (contador < 18){
  //  console.log(contador)
    //contador++
//}


//var contador = 17

//while (contador > 0){
    
  //  console.log(contador)
//    contador--
//}

//let contador = 0
//while(contador < 10) {
  //console.log(contador)
  //if (contador === 5){
   // break
 // }
//contador++
//}
//console.log(`O laço foi quebrado e o contador parou com o valor ${contador}`)

//function contarRegressivamente(numero) {
  //while (numero >= 0) {
    //console.log(numero);
      //numero--;
  //}
//}

//let i = 0;
//while (i < 10){
  //console.log(i);
//  i++;
//}
 

//let num = Math.floor(Math.random() * 10) + 1;
//while (true){
  //let ress = parseInt(prompt( "Adivinhe o numero entre 1 e 10:"))
  //if(ress=== num){
    //alert("Parabens! Voce acertou o numero");
    //break
  //}else{
  //  alert( "tente novamente:");
  //}
//}


// Função para simular um caixa eletrônico
//function caixaEletronico() {
 // let saldo = 1000; // Saldo inicial de exemplo

  //while (true) {
      // Exibe o menu de operações
    //  let escolha = prompt(`
      //Bem-vindo ao Caixa Eletrônico!
      //Escolha a operação desejada:
      //1 - Verificar saldo
      //2 - Depositar dinheiro
      //3 - Sacar dinheiro
      //4 - Sair
      //`);

      // Converte a escolha para número inteiro
      //escolha = parseInt(escolha);

      // Verifica a escolha do usuário
      //switch (escolha) {
        //  case 1:
          //    alert(`Seu saldo atual é de R$ ${saldo.toFixed(2)}`);
            //  break;
          //case 2:
            //  let deposito = parseFloat(prompt("Digite o valor que deseja depositar:"));
             // if (isNaN(deposito) || deposito <= 0) {
              //    alert("Valor de depósito inválido.");
              //} else {
                //  saldo += deposito;
                  //alert(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.`);
              //}
              //break;
          //case 3:
            //  let saque = parseFloat(prompt("Digite o valor que deseja sacar:"));
              //if (isNaN(saque) || saque <= 0) {
                //  alert("Valor de saque inválido.");
              //} else if (saque > saldo) {
                //  alert("Saldo insuficiente.");
              //} else {
                //  saldo -= saque;
                  //alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso.`);
              //}
              //break;
          //case 4:
            //  alert("Obrigado por utilizar o Caixa Eletrônico. Volte sempre!");
              //return; // Encerra a função caixaEletronico()
          //default:
            //  alert("Opção inválida. Por favor, escolha uma opção válida.");
      //}
  //}
//}

// Iniciar o caixa eletrônico
//caixaEletronico();

//const frutas = ['Maçã', 'Melancia', 'Banana']

//console.log(frutas[2])
//frutas.push('Abacaxi')// adiciona sempre no final da lista
//frutas.pop()// remove o ultimo item da lista

//frutas.unshift('Pera')// adiciona no começo
//frutas.shift()//remove no começo

//frutas.splice(1, 2, 'Kiwi', 'Açaí', 'Pera') //1°Parametro- indice do que quer removeEventListener, 2° quantos itens da lista querem remover, 3° parametro em diante os itens que querem adicionar
//console.log(todasFrutas)

//const todasFrutas= frutas2.concat(frutas) // junta duas listas em uma so
//console.log(todasFrutas)

//const listaJoin= frutas.join(',')//junta todos itens da lista com o caracter que voces passarem
// FAÇA UMA LISTA DE PESSOAS COM 3, ADICIONE NO FINAL DA LISTA JÕAO, NO COMEÇO DA LISTA KELLY, SUBSTITUA A 3 PESSOA POR OUTRO NOME,
// REMOVA A 2 PESSOA E ADICIONE APÓS ELA 2 PESSOAS DA SUA ESCOLHA.


// const nomes = ['Vitoria', 'Jamily', 'Breno']

// nomes.push('Paulo')//joao
// nomes.unshift('Kelly')
// nomes[2]= 'Debora'
// console.log(nomes)
// nomes.splice(2, 1, 'Italo', 'Abel')
// console.log(nomes)
//CRIE UM LISTA VAZIA DEPOIS FAÇA UM MENU COM AS OPÇÕES DE ADICIONAR UM NOVO USUÁRIO, REMOVER O ULTIMO USUÁRIO DA LISTA ATÉ A PESSOA ESCREVER SAIR PARA PARAR O LOOP.
// const lista= []
// while(true){
// const menu= prompt('digite um nome ou sair para parar')
// if(menu === 'sair'){
//   break
// }
// lista.push(menu)

// }

