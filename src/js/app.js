function showResult(msg, media, setColor) {
  const result = document.getElementById("result");
  result.style.color = setColor;
  result.innerHTML = msg + media;
}

function notificationError(msg) {
  const msgError = document.getElementById("messageError");
  msgError.classList.add(
    "alert",
    "alert-danger",
    "alert-dismissible",
    "fade",
    "show"
  );
  msgError.setAttribute("role", "alert");
  msgError.innerHTML = msg;

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  msgError.classList.remove("d-none");
  setTimeout(() => {
    msgError.classList.add("d-none");
  }, 3000);
}

function selectRadio(radio) {
  const radioTrimestre = document.getElementById("flexRadioDefault1");
  const radioBimestre = document.getElementById("flexRadioDefault2");
  const nota4 = document.getElementById("nota4");

  radio.addEventListener("click", () => {
    if (radioTrimestre.checked) {
      return nota4.classList.add("d-none");
    } else if (radioBimestre.checked) {
      return nota4.classList.remove("d-none");
    }
  });
}

function calculate() {
  const firstFieldInput = document.querySelector("input[name=nota1]").value;
  const secundFieldInput = document.querySelector("input[name=nota2]").value;
  const thirdFieldInput = document.querySelector("input[name=nota3]").value;
  const fourthFieldInput = document.querySelector("input[name=nota4]").value;

  const radioTrimestre = document.getElementById("flexRadioDefault1");
  const radioBimestre = document.getElementById("flexRadioDefault2");

  const mediaMinima = document.querySelector("input[name=mediaMinima]").value;

  const scrollPage = window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  if (radioBimestre.checked) {
    if (
      !firstFieldInput ||
      !secundFieldInput ||
      !thirdFieldInput ||
      !fourthFieldInput ||
      !mediaMinima ||
      isNaN(Number(firstFieldInput)) ||
      isNaN(Number(secundFieldInput)) ||
      isNaN(Number(thirdFieldInput)) ||
      isNaN(Number(fourthFieldInput)) ||
      isNaN(Number(mediaMinima))
    ) {
      return notificationError("Preencha todos os campos.");
    }
    const mediaBimestre =
      (Number(firstFieldInput) +
        Number(secundFieldInput) +
        Number(thirdFieldInput) +
        Number(fourthFieldInput)) /
      4;

    mediaBimestre >= Number(mediaMinima)
      ? showResult("Aprovado sua média é: ", mediaBimestre.toFixed(1), "green")
      : showResult("Reprovado sua média é: ", mediaBimestre.toFixed(1), "red");
    return scrollPage;
  } else if (radioTrimestre.checked) {
    if (
      !firstFieldInput ||
      !secundFieldInput ||
      !thirdFieldInput ||
      !mediaMinima ||
      isNaN(Number(firstFieldInput)) ||
      isNaN(Number(secundFieldInput)) ||
      isNaN(Number(thirdFieldInput)) ||
      isNaN(Number(mediaMinima))
    ) {
      return notificationError("Preencha todos os campos.");
    }
    const mediaTrimestre =
      (Number(firstFieldInput) +
        Number(secundFieldInput) +
        Number(thirdFieldInput)) /
      3;

    return mediaTrimestre >= Number(mediaMinima)
      ? showResult("Aprovado sua média é: ", mediaTrimestre.toFixed(1), "green")
      : showResult("Reprovado sua média é: ", mediaTrimestre.toFixed(1), "red");
  }
}

function reset() {
  const result = document.getElementById("result");
  clearInput();
  result.innerHTML = "";
}

const clearInput = () => {
  const firstFieldInput = document.querySelector("input[name=nota1]");
  const secundFieldInput = document.querySelector("input[name=nota2]");
  const thirdFieldInput = document.querySelector("input[name=nota3]");
  const fourthFieldInput = document.querySelector("input[name=nota4]");
  const mediaField = document.querySelector("input[name=mediaMinima]");

  if (radioBimestre.checked) {
    firstFieldInput.value = "";
    secundFieldInput.value = "";
    thirdFieldInput.value = "";
    fourthFieldInput.value = "";
    mediaField.value = "";
  } else if (radioTrimestre.checked) {
    firstFieldInput.value = "";
    secundFieldInput.value = "";
    thirdFieldInput.value = "";
    mediaField.value = "";
  }
};
