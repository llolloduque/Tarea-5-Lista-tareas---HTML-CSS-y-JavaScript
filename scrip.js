// Esta función Añadir
function agregarTarea(){

  //  primero leemos lo que el usuario nos da 
  //  guardamos ese valor
  //  y en caso de que no escriba nada no guardamos nada
  let entrada = document.getElementById("entradaTarea");
  let texto = entrada.value;
  if(texto === "") return;

  // creamos un nuevo <li> dentro del html con el texto antes guardado
  let elementoLista = document.createElement("li");
  elementoLista.textContent = texto;

  //  creamos el boton de borrar 
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.className = "borrar";

  //  la funcion para que al dar al boton de borrar se borre 
  //  y añadimos el boton al <li> que creamos 
  botonBorrar.onclick = function(){
    elementoLista.remove();
  };
  elementoLista.appendChild(botonBorrar);
  
  // añadimos el <li> que creamos arriba al <ul> que ya tenemos en el html
  document.getElementById("listaTareas").appendChild(elementoLista);

  //  limpiamos el texto que ya nos a dado el usuario 
  entrada.value = "";
}

//el tema del js si que me eh ayudado en la ia porque lo hice antes de que dieras la clase de repaso y 
//de la forma en la que esta se que hace cada cosa y se decirte que hace cada cosa lo unico que me cuesta aqui es sacar el como hacerlo de 0 yo 
