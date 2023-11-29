window.onresize = () =>{
    let altura = document.getElementById("container-stis").clientHeight;
    console.log(altura)

    document.getElementsByClassName("line").style.height = altura + "px";
};

