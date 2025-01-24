import { handleValidate } from "./formValidation";
import { values } from "./formValidation";

const sendBtn = document.getElementById("btn-send");
const popUp = document.getElementById("pop-up");
const popUpMessege = document.getElementById("messege");

const handleSendForm = async () => {
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
  }
});

popUp.addEventListener("click", handleClosePopUp);
