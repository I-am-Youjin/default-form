import { handleValidate } from "./formValidation";
import { values } from "./formValidation";

const sendBtn = document.getElementById("btn-send");
const popUp = document.getElementById("pop-up");
const popUpMessege = document.getElementById("messege");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputText = document.getElementById("input-text");

const handleClearInputs = () => {
  inputName.value = "";
  inputEmail.value = "";
  inputPhone.value = "";
  inputText.value = "";
  values.name = "";
  values.email = "";
  values.phone = "";
  values.messege = "";
};

const handleSendForm = async () => {
  try {
    const resp = await fetch("example.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const json = await resp.json();
    if (json.status === "success") {
      popUpMessege.innerHTML = json.msg;
    } else {
      popUpMessege.innerHTML = json.fields.inputName;
    }
  } catch (e) {
    popUpMessege.innerHTML = e;
  }
};

const handleClosePopUp = () => {
  popUp.classList.add("pop-up-close");
};
const handleShowPopUp = () => {
  popUp.classList.remove("pop-up-close");
};

sendBtn.addEventListener("click", () => {
  const validationStatus = handleValidate();
  if (validationStatus) {
    handleSendForm();
    handleShowPopUp();
    handleClearInputs();
  }
});

popUp.addEventListener("click", handleClosePopUp);
