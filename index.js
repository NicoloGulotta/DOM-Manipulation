
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
    let addCl = document.getElementsById("link");
  addCl.classList[0].add("Link");

}
aggiungiCL();