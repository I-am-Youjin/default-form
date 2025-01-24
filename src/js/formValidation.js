import IMask from "imask";

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputText = document.getElementById("input-text");
const lableName = document.getElementById("lable-name");
const lableEmail = document.getElementById("lable-email");
const lablePhone = document.getElementById("lable-phone");
const lableText = document.getElementById("lable-text");

IMask(inputPhone, {
  mask: "+{375}(00)000-00-00",
  lazy: true,
  placeholderChar: "+375(__)___-__-__",
});

export let values = {
  name: "",
  email: "",
  phone: "",
  messege: "",
};

const handleChangeValue = (fieldName, value) => {
  switch (fieldName) {
    case "name":
      values.name = value;
      inputName.classList.remove("input-error");
      lableName.classList.remove("lable-error");
      break;
    case "email":
      values.email = value;
      inputEmail.classList.remove("input-error");
      lableEmail.classList.remove("lable-error");
      break;
    case "phone":
      values.phone = value;
      inputPhone.classList.remove("input-error");
      lablePhone.classList.remove("lable-error");
      break;
    case "messege":
      values.messege = value;
      inputText.classList.remove("input-error");
      lableText.classList.remove("lable-error");
      break;
    default:
      break;
  }
};

export const handleValidate = () => {
  let validationStatus = false;

  switch (false) {
    case !!values.name.length:
      inputName.classList.add("input-error");
      lableName.classList.add("lable-error");
      break;
    case !!values.email.length:
      inputEmail.classList.add("input-error");
      lableEmail.classList.add("lable-error");
      break;
    case values.email.includes("@" && ".com"):
      inputEmail.classList.add("input-error");
      lableEmail.classList.add("lable-error");
      break;
    case !!values.phone.length:
      inputPhone.classList.add("input-error");
      lablePhone.classList.add("lable-error");
      break;
    case !!values.messege.length:
      inputText.classList.add("input-error");
      lableText.classList.add("lable-error");
      break;
    default:
      validationStatus = true;
      break;
  }
  return validationStatus;
};

inputName.addEventListener("change", (event) =>
  handleChangeValue("name", event.target.value)
);
inputEmail.addEventListener("change", (event) =>
  handleChangeValue("email", event.target.value)
);
inputPhone.addEventListener("change", (event) =>
  handleChangeValue("phone", event.target.value)
);
inputText.addEventListener("change", (event) =>
  handleChangeValue("messege", event.target.value)
);
