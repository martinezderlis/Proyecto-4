let nombre = "";
let email = "";
let confirmacion="";
let mailTo
const FECHA = new Date();
const HORA = FECHA.getHours();
const POSTURL = "http://localhost:4200/user";
const FORMURL = "http://localhost:4200/contactos";
let arrForm =[];
//Posicionamiento

let inputNombre = document.querySelector("#nombre");
let inputEmail = document.querySelector("#email");
let inputTelefono = document.querySelector("#phone");
let selectTema = document.querySelector("#tema");
let textMensaje = document.querySelector("#Mensaje");
let btnEnviar = document.querySelector("#submit");
let form = document.querySelector("form");

if (localStorage.getItem("confirmacion")==null){
    
    confirmacion = confirm("Desea ingresar Nombre e email?");
    localStorage.setItem("confirmacion", confirmacion);
    if(confirmacion==true){
        inicioUsuario();
        
      }
    }  
    
    let arrUsuario = {
        token: "GRUPOB2020",
    name: localStorage.getItem("nombre"),
    email: localStorage.getItem("email"),
    sendEmail: localStorage.getItem("mail")
}
fetch(POSTURL,{
    method: 'POST',
    body: JSON.stringify(arrUsuario) ,
    headers:{'Content-Type':'application/json'}
}).then(function(response){
    return response.json();
}).then(function(json){
    console.log(json);
});

//Eventos

form.addEventListener("submit",enviarForm);

//Funciones

function enviarForm(){
    event.preventDefault();
    arrForm = {
        name: inputNombre.value,
        email: inputEmail.value,
        phone: inputTelefono.value,
        subject: selectTema.value,
        message: textMensaje.value
    }
    fetch(FORMURL,{
        method: 'POST',
        body: JSON.stringify(arrForm),
        headers:{'Content-Type':'application/json'}
    })
    .then(function(response){
        return response.json();
    }).then(function(contacto){
        console.log(contacto);
        inputNombre.value =""
        inputEmail.value=""
        inputTelefono.value= ""
        selectTema.value= null
        textMensaje.value=""
    });
}


//Inicio de usuario
function inicioUsuario(){
    nombreValid();
    emailValid();
    saludaHoraInicio();
}

//Guardar y validar nombre
function nombreValid(nombre){
    do {
        nombre = prompt("Ingrese su nombre");
        
        if(nombre.trim() == ""){
            alert("Ingrese datos validos");
        }else{return localStorage.setItem("nombre", nombre);}
    } while (nombre=="" || nombre!==undefined);
}

//Guardar y validar email
function guardarEmail(email){

    email = prompt("Ingrese su email");
    let arrEmail = email.split("");
    if(arrEmail.includes("@") && arrEmail.includes(".")){
        localStorage.setItem("email", email);
        enviarMail(mailTo);
    }else{alert("Datos invalidos")}
 
}

function emailValid(email){ 
    do {
        guardarEmail(email);
    } while (localStorage.getItem("email") === null);
 }

 //Preguntar para enviar mail
function enviarMail(mail){
    mail = confirm("Desea recibir mails con novedades?");
     if(mail == true){
         alert("Estaremos enviandole las ultimas novedades a " + localStorage.getItem("email"));
         localStorage.setItem("mail", mail);
         preguntaPopUp(popUp);
        }
 }



//Saluda segun hora
function saludaHoraInicio() {
    if (hora >= 00 && hora <= 06) {
      alert("Buenas madrugadas " + localStorage.getItem("nombre") + ". Difrute la pagina!!!" );
  }
  if (hora >= 07 && hora <= 12) {
    alert("Buen dia " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 13 && hora <= 18) {
    alert("Buenas tardes " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  if (hora >= 19 && hora <= 23) {
    alert("Buenas noches " + localStorage.getItem("nombre") + ". Difrute la pagina!!!");
  }
  }
 