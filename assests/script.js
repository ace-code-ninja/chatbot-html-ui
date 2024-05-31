document.addEventListener("DOMContentLoaded", function () {
  var attachButton = document.getElementById("attachment-button");
  var menuBar = document.getElementById("menu-attachment");
  attachButton.addEventListener("click", function () {
    event.stopPropagation();
    if (menuBar.style.display === "none") {
      menuBar.style.display = "block";
    } else {
      menuBar.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    // Check if the clicked element is outside the menu bar
    if (!menuBar.contains(event.target) && event.target !== attachButton) {
      menuBar.style.display = "none"; // Hide the menu bar
    }
  });

  var inputField = document.getElementById("message-input");
  var sendButton = document.getElementById("send-button");
  sendButton.style.cursor = "not-allowed";

  inputField.addEventListener("input", function () {
    var message = inputField.value;
    if (message.trim() !== "") {
      sendButton.removeAttribute("disabled");
      sendButton.style.cursor = "pointer";
    } else {
      sendButton.setAttribute("disabled", "disabled");
      sendButton.style.cursor = "not-allowed";
    }
  });
});
