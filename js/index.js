const navbar = document.querySelector("nav ul");
const barList = document.querySelector(".bar input");

barList.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});

document.addEventListener("DOMContentLoaded", function () {
  var kirimPesan = document.querySelector(".send");
  var inputPesan = document.getElementById("chat");
  var lihatPesan = document.querySelector(".chat-view");

  kirimPesan.addEventListener("click", function () {
    var kirimText = inputPesan.value;
    if (kirimText.trim() !== "") {
      var buatChat = document.createElement("li");
      buatChat.textContent = kirimText;
      lihatPesan.appendChild(buatChat);
      inputPesan.value = "";
      lihatPesan.scrollTop = lihatPesan.scrollHeight;
      document.querySelector(".infoChat").style.display = "none";
    }
  });
});
