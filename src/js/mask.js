function applyMask(input) {
  input.addEventListener("input", (event) => {
    const value = event.target.value;
    const regex = /^(0|[1-9]|10)?$/;

    if (!regex.test(value)) {
      event.target.value = value.slice(0, -1);
    }
  });
}

applyMask(document.querySelector("input[name=nota1]"));
applyMask(document.querySelector("input[name=nota2]"));
applyMask(document.querySelector("input[name=nota3]"));
applyMask(document.querySelector("input[name=nota4]"));
applyMask(window.document.querySelector("input[name=mediaMinima]"));
