// Esta función se ejecuta cuando haces click en "Añadir"
function agregarTarea(){

  // 1. Cogemos el input (donde escribes)
  let entrada = document.getElementById("entradaTarea");

  // 2. Guardamos el texto que escribió el usuario
  let texto = entrada.value;

  // 3. Si está vacío, no hacemos nada (porque añadir tareas vacías es inútil )
  if(texto === "") return;

  // 4. Creamos un <li> (una tarea nueva en la lista)
  let elementoLista = document.createElement("li");

  // Le ponemos el texto que escribió el usuario
  elementoLista.textContent = texto;

  // 5. Creamos el botón de borrar (la X malvada )
  let botonBorrar = document.createElement("button");

  botonBorrar.textContent = "X";
  botonBorrar.className = "borrar";

  // 6. Cuando haces click en el botón...
  botonBorrar.onclick = function(){
    // ...elimina la tarea completa (adiós)
    elementoLista.remove();
  };

  // 7. Metemos el botón dentro del <li>
  elementoLista.appendChild(botonBorrar);

  // 8. Añadimos el <li> a la lista (ul)
  document.getElementById("listaTareas").appendChild(elementoLista);

  // 9. Limpiamos el input para escribir otra tarea
  entrada.value = "";
}
