let buttonPlus = document.querySelector(".plus");
let buttonMinus=document.querySelector(".minus");
let quantity=document.querySelector(".quantity");
let addToCart=document.querySelector(".add-to-cart");
let cartModal=document.getElementById("cart-modal");
let CountButtonPlusClicks = 0;
let CountButtonMinusClicks=0;

buttonPlus.addEventListener("click", function() {
  CountButtonPlusClicks += 1;
  quantity.innerHTML=CountButtonPlusClicks; 
  
});
buttonMinus.addEventListener("click", function(){
    CountButtonMinusClicks +=1;
    if (quantity.innerHTML>=1){
        quantity.innerHTML= quantity.innerHTML-1;
        if (quantity.innerHTML<=0){
            quantity.innerHTML=0;
            CountButtonPlusClicks=0;
        }
    }
    
})
addToCart.addEventListener("click", function(){
    let product=125* quantity.innerHTML;
    let cartProductImage=document.querySelector("#cart-product-image");
    
    cartModal.innerHTML=  "Fall Limited Edition Sneakers" + "<br />" + "$125.00 x" + quantity.innerHTML +  "  $" + product.toFixed(2);
    if (cartModal.innerHTML=  "Fall Limited Edition Sneakers $125.00 x " + quantity.innerHTML + "  $" + product.toFixed(2)){
        cartProductImage.style.display="block";
    }   
    
})

let buttonNext=document.querySelector(".next");
let i=0;
let images=[];
images[0]="images/image-product-1.jpg";
images[1]="images/image-product-2.jpg";
images[2]="images/image-product-3.jpg";
images[3]="images/image-product-4.jpg";

buttonNext.addEventListener("click", function(){
    document.slide.src=images[i];
    if (i<images.length-1){
        i++;
    }else{
        i=0;
    }
})
let bigImage=document.getElementById("bigImage");
let thumbnail1=document.getElementById("thumbnail-1");
let thumbnail2=document.getElementById("thumbnail-2");
let thumbnail3=document.getElementById("thumbnail-3");
let thumbnail4=document.getElementById("thumbnail-4");
thumbnail1.addEventListener("click",function(){
    if( bigImage.src!="images/image-product-1.jpg"){
        bigImage.src="images/image-product-1.jpg";
        thumbnail1.style.opacity="0.5"; 
        thumbnail1.style.border="3px solid hsl(26, 100%, 55%)";
        thumbnail1.style.padding="0";
}
})
thumbnail2.addEventListener("click",function(){
    if(bigImage.src !="images/image-product-2.jpg"){
        bigImage.src="images/image-product-2.jpg";
        thumbnail2.style.opacity="0.5"; 
        thumbnail2.style.border="3px solid hsl(26, 100%, 55%)";
        thumbnail2.style.padding="0";
    }
})
thumbnail3.addEventListener("click",function(){
    if(bigImage.src !="images/image-product-3.jpg"){
        bigImage.src="images/image-product-3.jpg";
        thumbnail3.style.opacity="0.5"; 
        thumbnail3.style.border="3px solid hsl(26, 100%, 55%)";
        thumbnail3.style.padding="0";
    }
})
thumbnail4.addEventListener("click",function(){
    if(bigImage.src !="images/image-product-4.jpg"){
        bigImage.src="images/image-product-4.jpg";
        thumbnail4.style.opacity="0.5"; 
        thumbnail4.style.border="3px solid hsl(26, 100%, 55%)";
        thumbnail4.style.padding="0";
    }
})

