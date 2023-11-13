const btn = document.querySelectorAll(".key");
const layar_input = document.querySelector(".layar .input");
const layar_output = document.querySelector(".layar .output");

let input = "";

for (let key of btn) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      layar_input.innerHTML = "";
      layar_output.innerHTML = "";
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      layar_input.innerHTML = input;
    } else if (value == "=") {
      let result = eval(input);

      layar_output.innerHTML = result;
    } else if (value == "brackest") {
      if (
        input.indexOf("(") == -1 ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") != -1 &&
          input.lastIndexOf("(") < input.lastIndexOf(")"))
      ) {
        input += "(";
      } else if (
        (input.indexOf("(") != -1 && input.indexOf(")") == -1) ||
        (input.indexOf("(") != -1 &&
          input.indexOf(")") == -1 &&
          input.charAt.lastIndexOf("(") > input.lastIndexOf(")"))
      ) {
        input += ")";
      }
      layar_input.innerHTML = input;
    } else {
      input += value;
      layar_input.innerHTML = input;
    }
  });
}
