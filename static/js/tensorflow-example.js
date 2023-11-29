const checkWidthTF = () => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        document.querySelector('#tensorflow-example').style.display = 'none';
    } else {
        document.querySelector('#tensorflow-example').style.display = 'block';
    }
}

window.onresize = checkWidthTF;

window.onload = checkWidthTF;
