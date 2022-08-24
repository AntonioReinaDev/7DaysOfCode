let especializacao, linguagemPreferida;
do {
    especializacao = prompt("Você quer seguir para área de 'Front-End - [0]' ou de 'Back-End - [1]'? Digite o nome da área:");
    if (especializacao != "0" && especializacao != "1") {
        alert("Você não inseriu uma área válida!");
    }
} while (especializacao != "0" && especializacao != "1")

especializacao == "0" ? especializacao = "Front-End" : especializacao = "Back-End";
linguagemPreferida = prompt("Qual sua linguagem preferira?");
alert(`Que legal, continue estudando ${linguagemPreferida} e terá muito sucesso no ${especializacao}!`)