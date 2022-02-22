var listaParticipantes = ["Denise Alves","Miguel Conceição","Theodoro Amorim","Matheus Gunter","Davi de Oliveira",] //Banco de dados da lista de participantes, inscritos e confirmados.
var Palestrante = "Ledir Bortolin" //Palestrante programado para o Evento

let AnoAtual = 2022; //Criado dados de data atual
let MesAtual = 01; //Criado dados de data atual
let DiaAtual = 30; //Criado dados de data atual

let AnoEvento = 2022; //Criando dados do evento marcado
let MesEvento = 02; //Criando dados do evento marcado
let DiaEvento = 10; //Criando dados do evento marcado

let ClassEtaria = 18; //Classificação etária cadastrada do evento
let VagasMax = 100; // Vagas Ofertadas para o evento

//Variavel de armazenamento de dados de preenchimento do candidato a vaga do evento
let AnoPreenchido = 1986;
let DiaPreenchido = 13;
let MesPreenchido = 05;
let CepPreenchido = "94857-550" 
let NomePreenchido = "Maicon Mozer"


let marcador1 = 0; //Variavel de controle.
let marcador2 = 0; //Variavel de controle.

// Comparativo da data por etapas, sempre que a igualdade passa para o proximo, sempre na ordem: Ano, Mes e Dia.
// Comparativo trata os valores tornando verdadeiro ate um dia antes do evento. Mesmo dia ou apos enento, considera encerrado.
if (AnoEvento > AnoAtual){
    marcador1 = 1;
}else if (AnoEvento == AnoAtual){
    if (MesEvento > MesAtual){
        marcador1 = 1;
    }else if (MesEvento == MesAtual){
        if (DiaEvento > DiaAtual){
            marcador1 = 1;
        }else {
            console.log ("Evento encerrado. Confira nossa programação para nova data disponivel.")
        }
    }else {console.log ("Evento encerrado. Confira nossa programação para nova data disponivel.")}
}else{console.log ("Evento encerrado. Confira nossa programação para nova data disponivel.")}


if (marcador1 == 1){
    if (listaParticipantes.length < VagasMax) {
        marcador2 = 1;
        console.log ("Bem vindo ao evento. Para iniciarmos o cadastro, preencha sua data de nascimento") 
        marcador1 = 0;
    } else {
        marcador2 = 0;
        console.log ("Vagas esgotadas, confira nossa programação para nova data disponivel.")}
        marcador1 = 0;
}


if (marcador2 == 1){
    AnoPreenchido = 1986; //simulando dado preenchido
    
    if ((AnoAtual - AnoPreenchido) >= ClassEtaria){ //Se classificação etaria permitida, segue cadastro e confirmação do evento.
        console.log ("Otimo, prossiga com o cadastramento de participação do evento")
        console.log ("")
        console.log ("Confira abaixo seus dadod cadastrados:")
        console.log ("Nome Completo:", NomePreenchido)
        console.log ("Data de nascimento:",DiaPreenchido,"/",MesPreenchido,"/",AnoPreenchido)
        console.log ("CEP Residencial:", CepPreenchido)
        console.log ("")
        console.log ("Obrigado pelas confirmaçoes, cadastro realizado com sucesso!")
        console.log ("Evendo da data:", DiaEvento, "/", MesEvento, "/", AnoEvento, "com o sr. Palestrante", Palestrante, "esta confirmado.")
        console.log ("Lista de participantes:", listaParticipantes, NomePreenchido)
        marcador2 = 0;//reset de variavel

    }else {
        console.log ("Este evento não e permitido para menores de", ClassEtaria, "anos.")
        marcador2 = 0;
    }

}