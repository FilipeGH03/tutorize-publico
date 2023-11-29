let chatgpt = document.querySelector("#chatGPT");
let chatgpt_title = document.querySelector("#chatGPT-title");
let chatgpt_line = document.querySelector("#chatGPT-line");
let chatgpt_button = document.querySelector("#chatGPT-button");
let chatgpt_text = document.querySelector("#chatGPT-text");

let mid = document.querySelector("#mid");
let mid_title = document.querySelector("#mid-title");
let mid_line = document.querySelector("#mid-line");
let mid_button = document.querySelector("#mid-button");
let mid_text = document.querySelector("#mid-text");

let alexa = document.querySelector("#alexa");
let alexa_title = document.querySelector("#alexa-title");
let alexa_line = document.querySelector("#alexa-line");
let alexa_button = document.querySelector("#alexa-button");
let alexa_text = document.querySelector("#alexa-text");


function openTextChat(){
    if (chatgpt_text.style.display == "block"){
        chatgpt_text.style.display = "none";
        chatgpt_button.innerHTML = "arrow_drop_down";
    }
      else {
        chatgpt_text.style.display = "block";
        chatgpt_button.innerHTML = "arrow_drop_up";
        mid_text.style.display = "none";
        alexa_text.style.display = "none";
}   
}

function openTextMid(){
    if (mid_text.style.display == "block"){
        mid_text.style.display = "none";
        mid_button.innerHTML = "arrow_drop_down";
    }
      else {
        mid_text.style.display = "block";
        mid_button.innerHTML = "arrow_drop_up";
        chatgpt_text.style.display = "none";
        alexa_text.style.display = "none";
}   
}

function openTextAlexa(){
    if (alexa_text.style.display == "block"){
        alexa_text.style.display = "none";
        alexa_button.innerHTML = "arrow_drop_down";
    }
   else{
        alexa_text.style.display = "block";
        alexa_button.innerHTML = "arrow_drop_up";
        chatgpt_text.style.display = "none";
        mid_text.style.display = "none";
}   
}

chatgpt.onclick = openTextChat
mid.onclick = openTextMid
alexa.onclick = openTextAlexa
