// Obtener los elementos del DOM
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Agregar un evento al formulario cuando se envía
form.addEventListener("submit", function (event) {
  // Evitar que el formulario se envíe automáticamente
  event.preventDefault();

  // Validar el nombre
  if (nameInput.value === "") {
    setErrorFor(nameInput, "rellene este campo");
  } else if (/[\d]/.test(nameInput.value)) {
    setErrorFor(nameInput, "no se permiten caracteres numéricos");
  } else {
    setSuccessFor(nameInput);
  }

  // Validar el email
  if (emailInput.value === "") {
    setErrorFor(emailInput, "rellene este campo");
  } else if (!isEmail(emailInput.value)) {
    setErrorFor(emailInput, "email inválido");
  } else {
    setSuccessFor(emailInput);
  }

  // Validar la contraseña
  if (passwordInput.value === "") {
    setErrorFor(passwordInput, "rellene este campo");
  } else if (passwordInput.value.length < 8) {
    setErrorFor(passwordInput, "mínimo 8 caracteres");
  } else {
    setSuccessFor(passwordInput);
  }

  // Validar la confirmación de la contraseña
  if (confirmPasswordInput.value === "") {
    setErrorFor(confirmPasswordInput, "rellene este campo");
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    setErrorFor(confirmPasswordInput, "las contraseñas no coinciden");
  } else {
    setSuccessFor(confirmPasswordInput);
  }

  // Si todos los campos son válidos, enviar el formulario
  if (isFormValid()) {
    alert("Inscripción correcta!");
    form.submit();
  }
});

// Función para establecer el estilo de error para un campo
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorIcon = formControl.querySelector(".error-icon");
  const successIcon = formControl.querySelector(".success-icon");
  const errorMessage = formControl.querySelector(".error-message");

  // Establecer el estilo de error
  formControl.classList.add("error");
  formControl.classList.remove("success");

  // Mostrar el mensaje de error
  errorMessage.innerText = message;

  // Mostrar el icono de error y ocultar el icono de éxito
  errorIcon.style.display = "block";
  successIcon.style.display = "none";
}

// Función para establecer el estilo de éxito para un campo
function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorIcon = formControl.querySelector(".error-icon");
  const successIcon = formControl.querySelector(".success-icon");
  const errorMessage = formControl.querySelector(".error-message");

  // Establecer el estilo de éxito
  formControl.classList.add("success");
  formControl.classList.remove("error");

  // Ocultar el mensaje de error
  errorMessage.innerText = "";

  // Ocultar el icono de error y mostrar el icono de éxito
  errorIcon.style.display = "none";
  successIcon.style.display = "block";
}

// Función para validar el formato del email
function isEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

// Func
