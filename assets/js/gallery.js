var productImg = document.getElementById("productdetail__img");
var smallProductImg = document.getElementsByClassName("img-small");

smallProductImg[0].onclick = function () {
    productImg.src = smallProductImg[0].src;
}
smallProductImg[1].onclick = function () {
    productImg.src = smallProductImg[1].src;
}
smallProductImg[2].onclick = function () {
    productImg.src = smallProductImg[2].src;
}
smallProductImg[3].onclick = function () {
    productImg.src = smallProductImg[3].src;
}