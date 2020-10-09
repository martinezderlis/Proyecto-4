let nombre = "";
let email = "";
let confirmacion="";
let mailTo;
let popUp;
const FECHA = new Date();
const HORA = FECHA.getHours();
const DIVCONTENEDOR=document.querySelector(".contenedor");
const URLPRODUCTO = "http://localhost:4200/productos";
const CUPONURL = "http://localhost:4200/cupones";


fetch(URLPRODUCTO).then (function(response){
    return response.json();
}).then(function(productos){
    productos.forEach(function(producto){
        crearProducto(producto);
        
    })                                 
})




if (localStorage.getItem("confirmacion")==null){

    confirmacion = confirm("Desea ingresar Nombre e email?");
    localStorage.setItem("confirmacion", confirmacion);
    if(confirmacion==true){
        inicioUsuario();
       
    }
    }
    if(localStorage.getItem("nombre")){cuponDescuento()}
    //Funciones
    function crearProducto(producto){
    if (producto.discountPrice === undefined ) {
        DIVCONTENEDOR.innerHTML+= `<div class="caja"><img src="${producto.imgUrl}" id="foto1" title="${producto.title}">
        <div class="texto">
        <h5>${producto.title}</h5>
       <div class="descripcion"> ${producto.description}</div><br>
       <div class="stock"> En stock:${producto.inStock} unidades</div><br>
       <div class="precio"> Precio:<strong>${producto.currency} ${producto.price}<strong></div><br>
       
        </div>
        </div>`;  
        
    }else {
        DIVCONTENEDOR.innerHTML+= `<div class="caja"><img src="${producto.imgUrl}" id="foto1" title="${producto.title}">
        <div class="texto">
        <h5>${producto.title}</h5>
       <div class="descripcion"> ${producto.description}</div><br>
       <div class="stock"> En stock:${producto.inStock} unidades</div><br>
       <div class="precio"> Precio Antes:<strike> ${producto.currency} ${producto.price} </strike><br> Precio Ahora:<strong>${producto.currency} ${producto.discountPrice}</strong></div><br>
       </div>
        </div>`;
    }
    }
    
    
    //Inicio de usuario
    function inicioUsuario(){
        nombreValid();
        emailValid();
        saludaHoraInicio();
        
    }
    //Guardar nombre y validarlo
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
            
        }else{alert("Datos invalidos");}
     
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

      

    //Cupones
     
    function cuponDescuento() {
    fetch(CUPONURL)
    .then(function(response){
        return response.json();
    }).then(function(cupones){
      descuento(cupones);
        
    })
}

function descuento(datos){
   datos.forEach(function(dato){
       
       alert(`Con este codigo ${dato.text} tenes un descuento de ${dato.discountPercentage}%`);
   }) 
}