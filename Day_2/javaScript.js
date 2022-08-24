const name = prompt("Qual o seu nome?");
const age = prompt("Quantos anos você tem?");
const programmingLanglage = prompt("Qual linguagem de programação você está estudando?");

alert(`Olá ${name}, você tem ${age} anos e já está aprendento ${programmingLanglage}, excelente!!!`);

const choose = prompt("Você está gostando de aprender? 1 - [SIM]  2 - [NÃO]")

choose == "1" ? alert("Muito bom! Continue estudando e você terá muito sucesso.") :
    alert("Ahh que pena... Tente aprender outras linguagens😉");