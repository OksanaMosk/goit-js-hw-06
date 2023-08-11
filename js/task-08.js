const formEl = document.querySelector(".login-form");
const submitHandler = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  const info = {
    email: email.value,
    password: password.value,
  };

  if (password.value == "") {
    alert("Заповни усі поля");
  } else {
    console.log(info);
  }
  formEl.reset();
};
formEl.addEventListener("submit", submitHandler);
