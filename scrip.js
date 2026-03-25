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
