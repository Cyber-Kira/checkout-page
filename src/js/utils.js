const removeMessage = (id) => {
  document.querySelector(`[data-id="${id}"]`).remove();
};

const removeHidden = (id) => {
  document.querySelector(`[data-id="${id}"]`).classList.remove("hidden");
};

const addFade = (id) => {
  document.querySelector(`[data-id="${id}"]`).classList.add("fade-out");
};

const generateMessageDiv = (text, messageType) => {
  const messageContainer = document.querySelector(".message-wrapper");
  const messageDescription = document.createElement("div");

  const id = Math.random().toString(16).slice(2);
  messageDescription.dataset.id = id;

  messageDescription.classList.add(
    "message",
    `message_${messageType}`,
    "hidden"
  );
  messageDescription.innerHTML = text;
  messageContainer.append(messageDescription);

  return messageDescription;
};

export const showMessage = (message, messageType) => {
  const main = document.querySelector(".message-wrapper");
  const element = generateMessageDiv(message, messageType);

  main.append(element);

  setTimeout(() => removeHidden(element.dataset.id), 10);
  setTimeout(() => addFade(element.dataset.id), 3500);
  setTimeout(() => removeMessage(element.dataset.id), 3800);
};
