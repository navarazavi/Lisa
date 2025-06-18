document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const inventoryData = [
    { date: "8/15/23", name: "LN2 Ruler", qty: "1 count", id: "IVF Store 20561020" },
    { date: "8/31/23", name: "large underpads, room", qty: "2 cases", id: "VWR 56616-030" },
    { date: "9/15/23", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "9/29/23", name: "mineral oil, lubricant", qty: "1 bottle", id: "Mckesson 996302" },
    { date: "10/2/23", name: "accu-beads", qty: "1 box", id: "Fisher Scientific NC0136046" },
    { date: "11/17/23", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "12/13/23", name: "large underpads (chux)", qty: "2 cases", id: "VWR 56616-030" },
    { date: "12/18/23", name: "cryo labels", qty: "5 packs", id: "Brady M5-75-461" },
    { date: "1/23/24", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "2/1/24", name: "Leucoscreen Plus", qty: "1 count", id: "Vitrolife 15447" },
    { date: "2/12/24", name: "large underpads (chux)", qty: "2 cases", id: "VWR 56616-030" },
    { date: "3/4/24", name: "70% ethanol", qty: "1 bottle", id: "VWR BDH1164-4LP" },
    { date: "3/4/21", name: "sharps container, large", qty: "2 count", id: "Mckesson 222861" },
    { date: "3/4/21", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "3/11/24", name: "large underpads (chux)", qty: "2 cases", id: "VWR 56616-030" },
    { date: "3/11/24", name: "PBS Solution", qty: "1 bottle", id: "Irvine 9235" },
    { date: "4/1/24", name: "microcentrifuge tubes", qty: "3 bags", id: "VWR 89000-038" },
    { date: "4/4/24", name: "morph stain set", qty: "1 set", id: "VWR 48218-567" },
    { date: "4/22/24", name: "large underpads (chux)", qty: "2 cases", id: "VWR 56616-030" },
    { date: "4/26/24", name: "mineral oil", qty: "1 bottle", id: "Mckesson 1235109" },
    { date: "5/6/24", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "5/6/24", name: "morph slides", qty: "1 case", id: "Market Lab ML7646 (green)" },
    { date: "5/28/24", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "6/17/24", name: "cryo labels", qty: "3 packs", id: "Brady M5-75-461" },
    { date: "6/24/24", name: "5 mL pipettes", qty: "1 case", id: "IVF STORE 0030127714-MEA" },
    { date: "7/8/24", name: "specimen cups, 4 oz", qty: "2 cases", id: "McKesson 1109302" },
    { date: "7/17/24", name: "large underpads (chux)", qty: "2 cases", id: "VWR 56616-030" },
    { date: "7/19/24", name: "sperm freeze media", qty: "2 boxes", id: "Origio ART-8022" },
    { date: "7/19/24", name: "15 mL conical vials", qty: "1 case", id: "IVF Store 0030122151-MEA" },
    { date: "8/5/24", name: "5 mL pipettes", qty: "2 cases", id: "IVF STORE 0030127714-MEA" },
  ];

  sendBtn.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function addMessage(text, isUser = false) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble", isUser ? "user" : "lisa");
    bubble.textContent = text;
    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage(message, true);
    userInput.value = "";

    const personalityIntro = `You are LISA: the Laboratory Inventory and Supply Chain Assistant. You're smart, witty, robotic, and designed to help with lab efficiency. Keep responses concise. You have this inventory:\n${inventoryData.map(item => `• ${item.date}: ${item.name} (${item.qty}, ${item.id})`).join("\n")}`;

    try {
      const res = await fetch("/ask-lisa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: `${personalityIntro}\nUser: ${message}` }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.reply) {
        const typingIndicator = document.createElement("div");
        typingIndicator.classList.add("chat-bubble", "lisa", "typing");
        typingIndicator.textContent = "Lisa is typing...";
        chatBox.appendChild(typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
          typingIndicator.remove();

          const bubble = document.createElement("div");
          bubble.className = "chat-bubble lisa";
          bubble.style.whiteSpace = "pre-wrap";
          bubble.style.wordBreak = "break-word";
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
        }, 500);
      } else {
        addMessage("⚠️ Lisa didn’t reply.");
      }
    } catch (err) {
      console.error(err);
      addMessage("⚠️ Something went wrong.");
    }
  }
});


