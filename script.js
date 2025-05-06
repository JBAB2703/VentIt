// script.js

document.getElementById("openVoid").addEventListener("click", () => {
    document.getElementById("voidSection").classList.remove("hidden");
    document.getElementById("openVoid").style.display = "none";
  });
  
  document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("ventInput");
    if (input.value.trim() !== "") {
      input.value = "";
      document.getElementById("confirmation").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("confirmation").classList.add("hidden");
      }, 3000);
    }
  });
  