let menu = document.querySelector("#burguer");
let menu_c = document.querySelector(".burguer-click");

// function isMobileDevice() {
//   return window.matchMedia("(max-width: 650px)").matches;
// };

// function toBurguer(){
//   $(".links").css("display","none");
//   $("#burguer").css("display","block");
// };

// function toDefault() {
//   $(".links").css("display","block");
//   $("#burguer").css("display","none");
// }

menu.addEventListener('click', () => {
  if (menu_c.style.display == "block"){
    menu_c.style.display = "none";
}
  else {
    menu_c.style.display = "block";
  }
});

// window.onload = () => {
//   if (isMobileDevice()) {
//     toBurguer();
//   } else {
//     toDefault();
//   }
// }

// window.onresize = () => {
//   if (isMobileDevice()) {
//     toBurguer();
//   } else {
//     toDefault();
//   }
// }  

let nav = document.querySelector(".navBar");
let navbutton = document.querySelector(".navButton span");
let navtop = nav.offsetTop
let navtext = document.querySelector(".navBar .links");
// let navtexttop = navtext.offsetTop

// console.log(navtexttop, navtop )

function topF(){  
  if(window.pageYOffset >= navtop){
    nav.classList.add("topFixed")
  }
  else{
    nav.classList.remove("topFixed")
  }
};

window.addEventListener("scroll", topF);

nav.addEventListener('click', () => {
  if (navtext.style.display == "flex"){
    navtext.style.display = "none";
    navbutton.innerHTML = "arrow_drop_down  "
}
  else {
    navtext.style.display = "flex";
    navbutton.innerHTML = "arrow_drop_up"
  }
});
