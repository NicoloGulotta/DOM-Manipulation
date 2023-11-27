
function modificaH1() {
    let newH1 = document.getElementById("title");
    newH1.innerText = "Comprali tutti!";
}
modificaH1();

function modificaBC() {
    let newBC = document.getElementsByTagName("body")[0];
    newBC.style.backgroundColor = "lightgrey";
}
modificaBC();

function modificaFT() {
    let newFT = document.getElementsByTagName("footer");
    let newFtCh = newFT[0].children[1];
    newFtCh.innerText = "Via Ferdinando II";

}
modificaFT();

function aggiungiCL() {
    let addCl = document.getElementsByClassName("link");
    for (let i = 0; i < addCl.length; i++) {
        addCl[i].classList.add("new");

    }
}
aggiungiCL();

function toggleImg() {
    let removeImage = document.getElementsByTagName("img");
    for (let img = 0; img < removeImage.length; img++) {
        removeImage[img].classList.toggle("disappear");
    }
}
removeImg()// funzione attiva ed img tolte 
removeImg()// reinvocazione per riattivazione toggle e class presenti

function imgSetting() {
    let img = document.getElementsByClassName("disappear");
    for (let index = 0; index < img.length; index++) {
        img[index].style.display = "none"
    }
}
imgSetting()

function randomNumber(limitValue) {
    let randomicNumber = Math.random();
    randomicNumber = randomicNumber * limitValue;
    randomicNumber = math.floor(randomicNumber);
    return randomicNumber;
}
function randomicColor() {
    let limitNum = 256;
    let r = randomNumber(limitNum);
    let g = randomNumber(limitNum);
    let b = randomNumber(limitNum);
    return 'rgb(' + r + ',' + g + ',' + b + ')';

}
function changePriceColor() {
    let price = document.getElementsByClassName("price");
    for (let color = 0; color < price.length; color++){
        price[color].style.color=randomicColor();
    }
}
changePriceColor()