const greeting = "Hola Mundo para prueba en git";
const pressBtn = document.querySelector("#press-btn");
const h2Text = document.querySelector("#text-greeting");

pressBtn.addEventListener("click", function(){
   h2Text.textContent = greeting; 
});
