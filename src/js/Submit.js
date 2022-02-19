import { showMessage } from "./utils";

const validateEmail = (email) => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    String(email).toLowerCase()
  );
};

const validatePhone = (phone) => {
  return /^\d[\d\(\)\ -]{4,14}\d$/.test(String(phone).toLowerCase());
};

const vadidateFields = ({ emailValue, phoneValue }) => {
  return validateEmail(emailValue) && validatePhone(phoneValue);
};

const isFilled = (field) => {
  return field.trim().length !== 0;
};

const checkValues = (fields) => {
  for (const field of fields) {
    if (!isFilled(field)) {
      return false;
    }
  }
  return true;
};

export const addListeners = () => {
  const submit = document.querySelector('input[type="submit"]');
  const form = document.querySelector(".form");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = form.querySelector('input[name="user_email"]').value;
    const phoneValue = form.querySelector('input[name="user_phone"]').value;
    const nameValue = form.querySelector('input[name="user_name"]').value;
    const addressValue = form.querySelector('input[name="user_address"]').value;
    const cityValue = form.querySelector('input[name="user_city"]').value;
    const countries = form.querySelector('select[name="countries"]').value;
    const postalCodeValue = form.querySelector('input[name="user_code"]').value;

    const values = [
      nameValue,
      addressValue,
      cityValue,
      countries,
      postalCodeValue,
    ];
    console.log(checkValues(values));
    if (!checkValues(values)) {
      showMessage("Please Fill All Required Field", "warning");
      return;
    }

    if (vadidateFields({ emailValue, phoneValue })) {
      showMessage("Your request is sent successfully!", "success");
    } else {
      showMessage("Invalid email or phone number!", "error");
    }
  });
};
