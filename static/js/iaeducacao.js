

document.querySelector("#negative-side").addEventListener('mouseover', () => {
    document.querySelector("#list1").style.display = "block";
    document.querySelector("#list1").style.opacity = 1;
})

document.querySelector("#negative-side").addEventListener('mouseleave', () => {
    document.querySelector("#list1").style.opacity = 0;
    setTimeout(() => {document.querySelector("#list1").style.display = "none"}, 1000)
})

document.querySelector("#positive-side").addEventListener('mouseover', () => {
    document.querySelector("#list2").style.display = "block";
    document.querySelector("#list2").style.opacity = 1;
})

document.querySelector("#positive-side").addEventListener('mouseleave', () => {
    document.querySelector("#list2").style.opacity = 0;
    setTimeout(() => {document.querySelector("#list2").style.display = "none"}, 1000)
})
