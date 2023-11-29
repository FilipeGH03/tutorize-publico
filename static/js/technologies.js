let condition = 2;

let root = document.querySelector("#image-container").clientHeight;
document.querySelector("#button-container .click").style.marginTop = root + "px";


let technologiesText = [
    "Deep Learning ou Aprendizagem Profunda é um subgrupo específico de técnicas de Machine Learning utilizadas para reconhecer características em dados não categorizados. O DL é amplamente utilizado em algoritmos de reconhecimento de voz, detecção de aspectos semelhantes em diferentes imagens, diagnóstico de doenças e muitos outros. A técnicas de DL se mostram muito efetivas entre as técnicas de ML em casos de aprendizagem não supervisionada com grande quantidade de dados  A base do funcionamento de um algoritmo de DL é a utilização de profundas RNAs com uma quantidade massiva de camadas de processamento. O modelo mais utilizado no treinamento com DL são as Redes Neurais Convolucionais, que funcionam dividindo uma representação em amostras através de filtros, mapeando e identificando as principais características (bordas, formas e padrões) e criando um modelo de detecção de padrões.",
    "As Redes Neurais Artificiais (RNAs) possuem dois lados: a arquitetura da rede e o algoritmo de aprendizagem. Elas são compostas por neurônios, que possuem o objetivo de imitar os neurônios humanos. Os componentes dos neurônios são as entradas, os pesos, a lógica e as saídas. Entradas: É o meio inicial em que os dados são inseridos; Pesos: São coeficientes que multiplicados às entradas, alteram as saídas dos neurônios. Estes pesos são alterados a cada geração, onde eles mudam usando a lógica do algoritmo de aprendizagem; Lógica: É um cálculo que é feito com os dados das entradas já multiplicados pelos pesos. Este cálculo gera um valor booleano ativo (1) ou passivo (0); Saídas: Equivale ao meio final onde saem os dados lógicos.",   
    "Um dos algoritmos utilizados na Inteligência Artificial é o Random Forest. Este modelo, baseado nos sistemas  de árvores de decisão, pode ser aplicado como método para classificação, em que a saída é a categoria de um dado, para regressão, em que a saída é um valor numérico, e muitos outros.  Ele pode ser entendido como um agrupamento de árvores de decisões. Trata-se de um algoritmo agregador, pois trabalha gerando diferentes árvores de decisão de maneira aleatória para agregá-las, seguindo a lógica “dividir para conquistar”. Essa proposta traz algumas vantagens significativas, como a vasta aplicação em problemas de previsão, a baixa quantidade de parâmetros a serem ajustados, a capacidade de lidar com dados faltando e a considerável independência em relação ao volume de dados disponíveis na base."
];

let technologiesImages = [
    "static/img/tecnologias/testetec.webp",
    "static/img/tecnologias/RNAs.webp",
    "static/img/tecnologias/Random.jpg"
];

let technologiesTitles = [
    "Deep Learning",
    "Redes Neurais Artificiais",
    "Random Forest"
];

let sm = document.createElement("a");
sm.textContent = "Leia Mais"
sm.classList.add("sm")

function isMobileDevice() {
    return window.matchMedia("(max-width: 440px)").matches;
  };

function changeTechnologies() {
    condition++;
    condition = condition % 3;
    if (isMobileDevice()){ 
        document.querySelector('#container-tecnicas #tec-txt p').textContent = technologiesText[condition].substring(0,497)+ "...";
        document.querySelector('#container-tecnicas #tec-txt p').appendChild(sm)
    }
    else{
        document.querySelector('#container-tecnicas #tec-txt p').textContent = technologiesText[condition];
    };
    technologiesText[condition].substring(0, 427 );
    document.querySelector('#container-tecnicas #image-container #image').style.backgroundImage = `url("${technologiesImages[condition]}")`;
    document.querySelector('#ai-technologies h3').textContent = technologiesTitles[condition];

    let radio = document.querySelectorAll(".radio");

    radio.forEach(e => {
        e.classList.remove("checked");
        e.textContent = "radio_button_unchecked";
    });
    
    radio[condition].classList.add("checked");
    radio[condition].textContent = "radio_button_checked";
}
document.querySelector('#ai-technologies #container-tecnicas #image-container .click', ).addEventListener('click', changeTechnologies);
document.querySelector('#ai-technologies #container-tecnicas #button-container .click', ).addEventListener('click', changeTechnologies);

sm.onclick = function(){
    document.querySelector('#container-tecnicas #tec-txt p').textContent = technologiesText[condition];
};

changeTechnologies()