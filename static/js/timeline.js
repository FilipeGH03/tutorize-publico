let index = [-4,-3,-2,-1];
let ano0 = document.querySelector("#ano01");
let ano1 = document.querySelector("#ano02");
let ano2 = document.querySelector("#ano03");
let ano3 = document.querySelector("#ano04");
let anoC = document.querySelector("#anotimeline");
let p0 = document.querySelector("#p01");
let p1 = document.querySelector("#p02");
let p2 = document.querySelector("#p03");
let p3 = document.querySelector("#p04");
let pC = document.querySelector("#ptimeline");
let indexcel = 0
let back = document.querySelector(".arrow_back_cell");
let forward = document.querySelector(".arrow_forward_cell");
document.addEventListener('DOMContentLoaded', function() {
    var datasT = [
        "A Máquina de Turing foi considerada a fundação daquilo que conhecemos como IA, ela era capaz de executar processos cognitivos. Os passos eram quebrados em etapas e representadas por um algoritmo.",
        "Após a criação da Máquina de Turing e durante a Segunda Guerra Mundial, cientistas colaboraram na busca por um cérebro artificial. Em 1956, formalizou-se o campo da inteligência artificial.",
        "Foi nesse ano que o cientista da computação do MIT, Joseph Weizenbaum, criou o primeiro Chatbot, um programa de computador que interagia com humanos.",
        "Um sistema desenvolvido por Ted Shortliffe da Universidade de Stanford foi capaz de realizar o diagnóstico e tratamento de doenças, deste modo incluindo a IA na área médica.",
        "O Japão começou um investimento em massa na área da tecnologia para modernizar as suas indústrias.",
        "Criação do “NETtalk”, um computador que ganhou voz pela primeira vez.",
        "Um computador venceu um campeão de xadrez humano em uma partida.",
        "O Google desenvolveu seu primeiro protótipo de busca.",
        "A IA em carros avança na indústria automotiva, aprimorando segurança e eficiência, fortalecendo sistemas de assistência e impulsionando carros autônomos.",
        "A Apple criou a assistente virtual, Siri, desenvolvida a partir de inteligência artificial.",
        "A inteligência artificial continua se expandindo para diversas áreas, incluindo medicina, manufatura, finança e outros.",
        "A OpenAI, instituição de pesquisa em inteligência artificial, criou o ChatGPT, uma tecnologia que gera tarefas de forma criativa, oferecendo vantagens como otimização de tempo e assistência virtual."
    ];



    var datasTitle = [ "1936", "1956", "1966", "1972", "1982", "1986", "1997", "1998", "2005", "2011", "2020", "2022"];
    
    function isMobileDevice() {
        return window.matchMedia("(max-width: 1060px)").matches;
    };
    
    forward.onclick = function(){
        tradeForward()
    }
    back.onclick = function(){
        tradeBack()
    }

    function tradeForward(){
        if(isMobileDevice()){
            indexcel = indexcel % 12;
            indexcel ++;
            anoC.innerHTML = datasTitle[indexcel - 1];
            pC.innerHTML = datasT[indexcel - 1];
        }   
        else{
            index = index.map(elemento => elemento + 4)
            if( index[3] >= 12){
                index = index.map(elemento => elemento - 12) 
            };
            ano0.innerHTML = datasTitle[index[0]];
            ano1.innerHTML = datasTitle[index[1]];
            ano2.innerHTML = datasTitle[index[2]];
            ano3.innerHTML = datasTitle[index[3]];
            p0.innerHTML = datasT[index[0]];
            p1.innerHTML = datasT[index[1]];
            p2.innerHTML = datasT[index[2]];
            p3.innerHTML = datasT[index[3]];
        }
    };

    function tradeBack(){
        if(isMobileDevice()){
            indexcel --;
            if(indexcel <= 0){ indexcel += 12}
            anoC.innerHTML = datasTitle[indexcel - 1];
            pC.innerHTML = datasT[indexcel - 1];
        }   
        else{
            index = index.map(elemento => elemento - 4)
            if( index[0] < 0){
                index = index.map(elemento => elemento + 12) 
            };
            ano0.innerHTML = datasTitle[index[0]];
            ano1.innerHTML = datasTitle[index[1]];
            ano2.innerHTML = datasTitle[index[2]];
            ano3.innerHTML = datasTitle[index[3]];
            p0.innerHTML = datasT[index[0]];
            p1.innerHTML = datasT[index[1]];
            p2.innerHTML = datasT[index[2]];
            p3.innerHTML = datasT[index[3]];
        }
    
    }
    tradeForward()

    document.getElementById("arrow_forward_ios").addEventListener('click', tradeForward);
    document.getElementById("arrow_back_ios_new").addEventListener('click', tradeBack);
});








