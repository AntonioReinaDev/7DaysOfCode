let valor1, valor2, operacao, operacaoTratada;

function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

do {

    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`).replace('ç', 'c').replace('ã', 'a');
    operacaoTratada = operacao.replace('ç', 'c').replace('ã', 'a');

    while (operacaoTratada != "soma" && operacaoTratada != "subtracao" && operacaoTratada != "multiplicacao" && operacaoTratada != "divisao" && operacaoTratada != "sair") {
        alert(`Operação não reconhecida!`);
        operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
        operacaoTratada = operacao.replace('ç', 'c').replace('ã', 'a');
    }

    if (operacaoTratada === "sair") {
        break;
    }

    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);

    switch (operacaoTratada) {
        case 'soma':
            alert(`O resultado da ${operacaoTratada} é ${soma(valor1, valor2)}`);
            break;
        case 'subtracao':
            alert(`O resultado da ${operacaoTratada} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicacao':
            alert(`O resultado da ${operacaoTratada} é ${multiplicacao(valor1, valor2)}`);
            break;
        case 'divisao':
            alert(`O resultado da ${operacaoTratada} é ${divisao(valor1, valor2)}`);
            break;
    }
} while (operacaoTratada === "soma" || operacaoTratada === "subtracao" || operacaoTratada === "multiplicacao" || operacaoTratada === "divisao")
alert(`Até a próxima!`);