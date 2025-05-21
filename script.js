// script.js

// Handle "Open Void" click to show vent section
document.getElementById("openVoid").addEventListener("click", () => {
  document.getElementById("voidSection").classList.remove("hidden");
  document.getElementById("openVoid").style.display = "none";
});

// Handle "Send" button click to submit message
document.getElementById("sendButton").addEventListener("click", () => {
  const input = document.getElementById("ventInput");

  if (input.value.trim() !== "") {
    // Send the message to the backend
    fetch("https://ventit-backend.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: input.value.trim() }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);

        // Clear input and show confirmation
        input.value = "";
        document.getElementById("confirmation").classList.remove("hidden");
        setTimeout(() => {
          document.getElementById("confirmation").classList.add("hidden");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error submitting message:", error);
      });
  }
});
