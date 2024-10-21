let teclaPresionada;
let Visual = "0";

const display = document.getElementById("display");
const reset = document.getElementById("reset");
const borrar = document.getElementById("borrar");
const pulso = document.querySelectorAll(".tecla");

display.textContent = Visual;

console.log("nueva linea de comando para ver la diferencia");


pulso.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    const teclaPresionada = elemento.textContent;

    if (teclaPresionada == "=") {
      try {
        Visual = eval(Visual);
        display.textContent = Visual;
      } catch (error) {
        display.textContent = "Error!";
        Visual = "0";
      }
      return;
    }

    if (Visual == "0") {
      Visual = teclaPresionada;
      display.textContent = Visual;
      console.log("entramos a if");
    } else {
      Visual += teclaPresionada;
      display.textContent = Visual;
    }
  });
});

reset.addEventListener("click", () => {
  Visual = "0";
  display.textContent = Visual;
});

borrar.addEventListener("click", () => {
  Visual = Visual.slice(0, Visual.length - 1);
  if (Visual == "") {
    Visual = "0";
    display.textContent = Visual;
  } else {
    display.textContent = Visual;
  }
});
