const errorMessage = () => {
  const messageContainer = document.createElement("div");
  const messageDescription = document.createElement("p");

  messageContainer.classList.add("error-message", "hidden");
  messageDescription.innerHTML = "Invalid email or phone";
  messageContainer.append(messageDescription);

  return messageContainer;
};

const successMessage = () => {
  const messageContainer = document.createElement("div");
  const messageDescription = document.createElement("p");

  messageContainer.classList.add("success-message", "hidden");
  messageDescription.innerHTML = "You successfully logged in!";
  messageContainer.append(messageDescription);

  return messageContainer;
};

export const showWarning = () => {
  const main = document.querySelector(".main");

  main.append(errorMessage());

  const errors = document.querySelectorAll(".error-message");
  setTimeout(() => {
    errors.forEach((error) => {
      error.classList.remove("hidden");
    });
  }, 50);
  setTimeout(() => {
    errors.forEach((error) => {
      error.remove();
    });
  }, 4500);
};

export const showSuccess = () => {
  const main = document.querySelector(".main");

  main.append(successMessage());

  const succeses = document.querySelectorAll(".success-message");
  setTimeout(() => {
    succeses.forEach((success) => {
      success.classList.remove("hidden");
    });
  }, 50);
  setTimeout(() => {
    succeses.forEach((success) => {
      success.remove();
    });
  }, 4500);
};
