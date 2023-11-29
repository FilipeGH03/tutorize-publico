const section = document.querySelector(".news-features-section");
const newsList = [{
    "n": 1,
    "title": "PROBLEMAS DECORRENTES DO USO DA IA",
    "subTitle": "Entenda os problemas que o uso da Inteligência Artificial pode causar no nosso dia a dia e como ela funciona.",
    "img": "../static/img/news/news1.png", //tem que trocar as imagens
    "ref": "" //link da pagina da noticia
},
{
    "n": 2,
    "title": "FERRAMENTAS DE IA PODEM AFETAR O DESENVOLVIMENTO DOS ALUNOS?",
    "subTitle": "Entenda como o chat GPT e outras ferramentas de Inteligência Artificial podem afetar o desenvolvimento dos alunos.",
    "img": "../static/img/news/news2.png", //tem que trocar as imagens 
    "ref": "" //link da pagina da noticia
},
{
    "n": 3,
    "title": "AS LEIS SOBRE A INTERNET SÃO RÍGIDAS O SUFICIENTE?",
    "subTitle": "As leis existentes sobre a internet conseguem dar conta da nossa realidade atual? Deveriam existir leis mais rígidas?",
    "img": "../static/img/news/news3.png", //tem que trocar as imagens 
    "ref": "" //link da pagina da noticia
}];

// function createList() {
//     let list = [];

//     fetch('/receber-noticias')
//     .then(response => response.json())
//     .then(data => data.forEach(n => {
//         list.push({'n': n.id, 'title': n.manchete, 'subTitle': n.descricao, 'img': 'data:image;base64,' + n.imagem, 'ref': '/noticia/' + n.id});
//     }))

//     return list;
// }

// const newsList = createList();

// console.log(newsList);

function createNew(dict){
    let news = document.createElement("div");
    section.appendChild(news);
    news.classList.add("news-features");
    let left = document.createElement("div");
    let right = document.createElement("div");
    news.appendChild(left);
    news.appendChild(right);
    left.classList.add("left");
    right.classList.add("right");
    let nt = document.createElement("p");
    let t = document.createElement("p");
    t.id = "st"
    left.appendChild(nt);
    left.appendChild(t);
    nt.id = "nt";
    nt.textContent = dict["title"];
    t.textContent = dict["subTitle"];
    let a = document.createElement("a");
    left.appendChild(a);
    a.classList.add("more");
    a.textContent = "Saiba Mais";
    let back = dict["img"]
    news.style.backgroundImage = "url(" + back + ")";
    let space = document.createElement("div");
    space.classList.add("space");
    right.appendChild(space);
    let down = document.createElement("div");
    down.classList.add("down");
    right.appendChild(down);
    let ln = document.createElement("div");
    ln.classList.add("ln");
    down.appendChild(ln);
    let line = document.createElement("div");
    let number = document.createElement("div");
    line.classList.add("line");
    number.classList.add("number");
    ln.appendChild(line);
    ln.appendChild(number);
    let text = document.createTextNode("0"+dict["n"]);
    number.appendChild(text);
    let arrows = document.createElement("div");
    down.appendChild(arrows);
    arrows.classList.add("arrows")
    let Aleft = document.createElement("span");
    Aleft.classList.add("material-symbols-outlined");
    arrows.appendChild(Aleft);
    let Aright= document.createElement("span");
    Aright.classList.add("material-symbols-outlined");  
    arrows.appendChild(Aright);
    let arrow_circle_left = document.createTextNode("arrow_circle_left");
    Aleft.appendChild(arrow_circle_left)
    let arrow_circle_right= document.createTextNode("arrow_circle_right");
    Aright.appendChild(arrow_circle_right)
    Aright.id = "Aright";
    Aleft.id = "Aleft";

};

function tradeNew(dict){
    let news = document.querySelector(".news-features");
    let left = document.querySelector(".left");
    let right = document.querySelector(".right");
    let nt = document.querySelector("#nt");
    let t = document.querySelector("#st");    
    let number = document.querySelector(".number");
    t.textContent = dict["subTitle"];
    nt.textContent = dict["title"];
    let back = dict["img"]
    news.style.backgroundImage = "url(" + back + ")"
    number.textContent = "0"+dict["n"];
};

createNew(newsList[0]);
// createNew(newsList[1]);

let buttonL = document.querySelector("#Aleft")
let buttonR = document.querySelector("#Aright")
function backNews(){
    console.log("teste")
    let news = document.querySelector(".news-features");
    // news.style.opacity = 0
    let n = parseInt(document.querySelector(".number").innerHTML)
    if(n <= 1){
        tradeNew(newsList[newsList.length-1])
    }
    else{
        tradeNew(newsList[n-2])
    }
    news.style.opacity = 1;
};

function fowardNews(){
    console.log("teste")
    let n = parseInt(document.querySelector(".number").innerHTML)
    if(n >= newsList.length){
        tradeNew(newsList[0])
    }
    else{
        tradeNew(newsList[n])
    }   
    
};

buttonL.onclick = backNews;
buttonR.onclick = fowardNews;