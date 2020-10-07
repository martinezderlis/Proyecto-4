
let nombre = "";
let email = "";
let confirmacion = "";
let mailTo;
const fecha = new Date();
const hora = fecha.getHours();
let urlBanner = "https://demo2420474.mockable.io/getHomeBanner"
const postUrl = "https://demo2420474.mockable.io/userData"

 //Posicionamiento
 let divBanner = document.querySelector(".banner")


if (localStorage.getItem("confirmacion")==null){
  
  confirmacion = confirm("Desea ingresar Nombre e email?")
  localStorage.setItem("confirmacion", confirmacion)
  if(confirmacion==true){
    inicioUsuario()
    
  }
}

fetch(urlBanner)
.then(function(response){
  return response.json()
})
.then(function(arrImagen){
  imagenDOM(arrImagen, divBanner)
  })
 
  let arrUsuario = {
    token: "GRUPOB2020",
name: localStorage.getItem("nombre"),
email: localStorage.getItem("email"),
sendEmail: localStorage.getItem("mail")
}
fetch(postUrl,{
method: 'POST',
body: JSON.stringify(arrUsuario) ,
headers:{'Content-Type':'application/json'}
}).then(function(response){
return response.json()
}).then(function(json){
console.log(json)
})
  
  //Funciones

  function imagenDOM(imagen, banner){

    banner.innerHTML += `<a title= "LinkImagen" href= "${imagen.link}"><img src = "${imagen.imgUrl}" title = "${imagen.title}" alt="LinkImagen" ></a>`

  }
 
  //Inicio de usuario
  function inicioUsuario(){
    nombreValid()
    emailValid()
  }
  //Guardar y validar nombre
  function nombreValid(nombre){
      do {
          nombre = prompt("Ingrese su nombre")
          
          if(nombre.trim() == ""){
              alert("Ingrese datos validos")
          }else{return localStorage.setItem("nombre", nombre) }
      } while (nombre=="" || nombre!==undefined);
  }
  //Guardar y validar email
  function guardarEmail(email) {
    email = prompt("Ingrese su email");
    let arrEmail = email.split("");
    if (arrEmail.includes("@") && arrEmail.includes(".")) {
      localStorage.setItem("email", email);
      enviarMail(mailTo);
    } else {
      alert("Datos invalidos");
    }
  }
  
  function emailValid(email) {
    do {
      guardarEmail(email);
    } while (localStorage.getItem("email") === null);
  }

  //Preguntar para enviar mail
  function enviarMail(mail) {
    mail = confirm("Desea recibir mails con novedades?");
    if (mail == true) {
      alert(
        "Estaremos enviandole las ultimas novedades a " +
          localStorage.getItem("email")
      );
      localStorage.setItem("mail", mail);
      
    }
  }
  
  




 





