import { showWarning, showSuccess } from "./utils";

const validateEmail = (email) => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    String(email).toLowerCase()
  );
};

const validatePhone = (phone) => {
  return /^\d[\d\(\)\ -]{4,14}\d$/.test(String(phone).toLowerCase());
};

const vadidateFields = (email, phone) => {
  return validateEmail(email) && validatePhone(phone);
};

export const addListeners = () => {
  const submit = document.querySelector('input[type="submit"]');
  const form = document.querySelector(".form");
  const emailValue = form.querySelector('input[name="user_email"]');
  const phoneValue = form.querySelector('input[name="user_phone"]');
  // const phoneValue = form.querySelector('input[name="user_phone"]');
  // const phoneValue = form.querySelector('input[name="user_phone"]');
  // const phoneValue = form.querySelector('input[name="user_phone"]');
  // const phoneValue = form.querySelector('input[name="user_phone"]');
  // const phoneValue = form.querySelector('input[name="user_phone"]');
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (vadidateFields(emailValue, phoneValue)) {
      showSuccess();
    } else {
      showWarning();
    }
  });
};
