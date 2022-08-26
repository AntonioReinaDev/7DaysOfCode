let frutas = [], laticinios = [], doces = [], congelados = [], comida, categoria, adicionarMais = "sim";

while (adicionarMais != "não") {
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") {
        alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }

    if (adicionarMais === "não") {
        break;
    }

    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");

    switch (categoria) {
        case "frutas":
            frutas.push(comida);
            break;
        case "laticinios":
            laticinios.push(comida)
            break
        case "doces":
            doces.push(comida)
            break
        case "congelados":
            congelados.push(comida)
            break
        default:
            alert("Essa categoria não foi pré-definida.");
            break;
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);