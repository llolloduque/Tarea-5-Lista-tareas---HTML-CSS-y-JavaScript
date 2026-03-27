// Esta función Añadir
function agregarTarea(){

  //  textito
  let entrada = document.getElementById("entradaTarea");
  let texto = entrada.value;
  if(texto === "") return;

  // lista
  let elementoLista = document.createElement("li");
  elementoLista.textContent = texto;

  //  botones
  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.className = "borrar";

  //  eliminar
  botonBorrar.onclick = function(){
    elementoLista.remove();
  };
  elementoLista.appendChild(botonBorrar);
  
  // Añadir a la lista
  document.getElementById("listaTareas").appendChild(elementoLista);

  
  entrada.value = "";
}

//el tema del js si que me eh ayudado en la ia porque lo hice antes de que dieras la clase de repaso y 
//de la forma en la que esta se que hace cada cosa y se decirte que hace cada cosa lo unico que me cuesta aqui es sacar el como hacerlo de 0 yo 
