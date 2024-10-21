let Visual = "0";

const display = document.getElementById("display");
const reset = document.getElementById("reset");
const borrar = document.getElementById("borrar");
const pulso = document.querySelectorAll(".tecla");

display.textContent = Visual;

pulso.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    let teclaPresionada = elemento.textContent;

    if (teclaPresionada == "=") {
      display.textContent = eval(Visual);
      Visual = eval(Visual);
      return;
    }

    if (Visual == "0") {
      Visual = teclaPresionada;
      display.textContent = Visual;
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
