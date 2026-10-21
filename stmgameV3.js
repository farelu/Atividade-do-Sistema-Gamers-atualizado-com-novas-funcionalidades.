const prompt = require("prompt-sync")();

let time = [];

let continuar = true;

function mostrarMenu(){
    console.log("............SISTEMA DE GAMERS.................");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar equipe");
    console.log("4 - Calculo da Média da Equipe");
    console.log("5 - Buscar Jogadores");
    console.log("6 - Atualizar pontos");
    console.log("7 - Sair");
    console.log(".............................");
}
function CadastarJogador(){
        let nomejogador = prompt("Digite o nome do jogador: ");
        let funcaodojogador = prompt("Digite a função no time: ");
        let pontuacaodojogador = Number(prompt("Digite a pontuacao: "));
        
        if (isNaN(pontuacaodojogador)){
            console.log("Pontuacao inválida!");
            return;
        }
        else {
            let recruta = {
                nome: nomejogador,
                funcao: funcaodojogador,
                pontuacao: pontuacaodojogador,
            }
            time.push(recruta);
            console.log("Parabéns! O jogador ", nomejogador, "Foi cadastrado com sucesso!")
        } 
}
function Deletar(){
 if(time.length === 0){
        console.log("Não há jogadores para deletar");
        console.log(".............................");
        return;
        }
    let indexdeletado = -1;
    let nomedeletado = prompt("Digite o nome do jogador que deseja deletar: ");
    for(let i = 0; i < time.length; i++){
        if (time[i].nome === nomedeletado){
            indexdeletado = i;
            break;
        }
    }
    if (indexdeletado === -1){
        console.log("Jogador não encontrado");
        return;
    }
     
    time.splice(index, 1);
    console.log("Seu time agora é:", time);
    console.log("...................");
}
function MostrarEquipe(){
    if (time.length === 0){
        console.log("--------------------------");
        console.log("Não há jodares cadastrado!");
        console.log("--------------------------\n");
        return;
    }
     for(i=0; i < time.length; i++){
        let jogador = time[i];
         console.log((i+1) + ". " + jogador.nome + " | Funcao: " + jogador.funcao + " | Pontuacao: " + jogador.pontuacao);
     }  
}
function Sair(){
 //implementei mais coisas que andei pensando ao longo das aulas do curso "e se tiver uma opção de confirmação?"
   
    let vai = true
    while(vai === true){   
        let certeza = prompt("Vc tem certeza que deseja sair? (Sim) ou (Não): ");
        if (certeza === "Sim"){
                vai = false;
                continuar = false;    
            }
            else if (certeza === "Não"){
                return;
            }
        else {
            console.log("Opção inválida");
            continue;
        }
    }
}    
function BuscarJogadores(){
    if(time.length === 0){
        console.log("Não há jogadores cadastrados!");
        return;
    }
    let nomedesejado = prompt("Digite o nome do jogador: ");
    let encontou = false;
        for(i=0; i < time.length; i++){
            let Jogadoratual = time[i];
            if(Jogadoratual.nome === nomedesejado){
                console.log("JOGADOR ENCONTRADO!");
                console.log("Nome" + Jogadoratual.nome + " | Funcao: " + Jogadoratual.funcao + " | Pontuacao: " + Jogadoratual.pontuacao);
                encontrou = true;
                break;
        }
    }
    if(encontrou === false){
        console.log("O jogador: "+ nomedesejado + " não faz parte da nossa equipe");
        return;
    }
}
function CalculodaMédia(){
    if (time.length === 0){
        console.log("Nenhum jogador encontrado");
        return;
    }
    let totalpontos = 0;
    for (let i = 0; i < time.length; i++){
        totalpontos = totalpontos + time[i].pontuacao;
    }
    let mediapontos = totalpontos / time.length;
    console.log("O time possui uma pontuação média de: ", mediapontos);
}
function AtualizarPontos(){
    if (time.length === 0){
        console.log("Nenhum jogador encontrado");
        return;
    }
    let Jogadoratualizado = prompt("A pontuação de qual jogador você deseja alterar?");
    let encontrou = false;
    for (i=0; i < time.length; i++){
        let jogadorAtual = time[i];
        if(jogadorAtual.nome === Jogadoratualizado){
            console.log("jogador: " + jogadorAtual.nome + ", encontrado!"); 
            let Novospontos = Number(prompt("Quantos pontos ele ganhou? "));
            jogadorAtual.pontuacao += Novospontos
            encontrou = true
            break;    
        }
    }
    if (encontrou === false){
       console.log("Jogador não encontrado...");
       return;
    }

}
//diferente do if, ele continua executando ate que a condicao mude.
while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite a opção: ");
    if(opcao === "1"){
        CadastarJogador();
    } 
    else if(opcao === "2"){
        Deletar();
    }
    else if(opcao === "3"){
        MostrarEquipe();
    }
    else if(opcao === "4"){
        CalculodaMédia();
    }
    else if(opcao === "5"){
        BuscarJogadores();
    }
    else if(opcao === "6"){
        AtualizarPontos();
    }
        else if(opcao === "7"){
            Sair();
    }
    else {
        console.log("Opção inválida bestão")
        continue;
    }
}


       