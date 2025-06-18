<script>
  const sendButton = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatScroll = document.querySelector(".chat-scroll");

  function appendBubble(text, isUser = false) {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    if (isUser) bubble.style.backgroundColor = "#dcdcdc"; // Optional user styling
    bubble.textContent = text;
    chatScroll.appendChild(bubble);
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendBubble(message, true);
    userInput.value = "";

    try {
      const res = await fetch("/ask-lisa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const reply = data.reply || "Hmm, something went wrong.";
      appendBubble(reply);
    } catch (err) {
      console.error(err);
      appendBubble("Error talking to Lisa 😢");
    }
  }

  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
</script>
