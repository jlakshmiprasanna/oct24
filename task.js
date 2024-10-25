let cardContainer=document.createElement("div")
let image=document.createElement("img");
let title=document.createElement("p")
let price=document.createElement("span")
let buyNow=document.createElement("button")

image.setAttribute("src","https://fashionmagazine.com/wp-content/uploads/2017/11/DSC01546-480x320-c-top.jpg")
title.innerText="Iphone"
price.textContent=100000;
buyNow.innerText="BUY NOW";

cardContainer.style.border="2px solid black";
cardContainer.style.borderRadius="15px";
cardContainer.style.padding="15px";
cardContainer.style.display="inline-block";
cardContainer.style.backgroundColor="Cyan";
cardContainer.style.textAlign="center"
buyNow.style.backgroundColor="violet"

cardContainer.append(image,title,price,buyNow);
document.body.appendChild(cardContainer);