document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function addMessage(text, isUser = false) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");
    if (isUser) bubble.style.backgroundColor = "#D9D9D9";
    bubble.textContent = text;
    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    console.log("Sending:", message); // 👈 log before sending

    addMessage(message, true); // user msg
    userInput.value = "";

    try {
      const res = await fetch("/ask-lisa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      console.log("Response:", data); // 👈 log backend reply

      if (data.reply) {
        const bubble = document.createElement("div");
        bubble.classList.add("chat-bubble");
        chatBox.appendChild(bubble);

        let i = 0;
        function typeWriter() {
          if (i < data.reply.length) {
            bubble.textContent += data.reply.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
          }
        }
        typeWriter();
      } else {
        addMessage("⚠️ Lisa didn’t reply.");
      }
    } catch (err) {
      console.error(err);
      addMessage("⚠️ Something went wrong.");
    }
  }
});

