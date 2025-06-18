const input = document.querySelector("input");
const button = document.querySelector("button");
const messageContainer = document.getElementById("messages");

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
  { date: "8/5/24", name: "5 mL pipettes", qty: "2 cases", id: "IVF STORE 0030127714-MEA" }
];

const messages = [
  {
    role: "system",
    content: "You are LISA, a robotic but witty lab assistant. Always helpful, always deadpan. Keep responses efficient, helpful, and a little too smart for your own good."
  }
];

function markdownToHTML(md) {
  let html = md
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/_(.*?)_/g, "<em>$1</em>");

  html = html.replace(/((?:^[-*]\s.*(?:\n|$))+)/gm, match => {
    const items = match.trim().split(/\n/).map(line =>
      `<li>${line.replace(/^[-*]\s*/, '')}</li>`
    ).join("");
    return `<ul>${items}</ul>`;
  });

  html = html.replace(/\n{2,}/g, "<br><br>").replace(/\n/g, "<br>");

  return html;
}

function renderMessage(sender, text, temporary = false) {
  const bubble = document.createElement("div");
  bubble.className = `message ${sender}`;
  bubble.classList.add("pretty-markdown");

  if (sender === "bot" && !temporary) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    const content = document.createElement("span");
    bubble.appendChild(dot);
    bubble.appendChild(content);
    messageContainer.appendChild(bubble);

    if (!text.includes("*") && !text.includes("_")) {
      typewriterEffect(text, content);
    } else {
      content.innerHTML = markdownToHTML(text);
    }
  } else if (sender === "bot" && temporary) {
    bubble.innerHTML = `<span class="dot"></span>${text}`;
    messageContainer.appendChild(bubble);
  } else {
    bubble.innerText = text;
    messageContainer.appendChild(bubble);
  }

  messageContainer.scrollTop = messageContainer.scrollHeight;
  return bubble;
}

function typewriterEffect(text, targetElement) {
  let i = 0;
  function type() {
    if (i < text.length) {
      targetElement.textContent += text.charAt(i);
      i++;
      targetElement.scrollIntoView({ behavior: "smooth", block: "end" });
      setTimeout(type, 20);
    }
  }
  type();
}

async function sendMessage() {
  const userInput = input.value.trim();
  if (!userInput) return;

  messages.push({ role: "user", content: userInput });
  renderMessage("user", userInput);

  const thinkingBubble = renderMessage("bot", "Thinking...", true);

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, inventory: inventoryData })
    });

    const data = await response.json();
    messageContainer.removeChild(thinkingBubble);

    messages.push({ role: "assistant", content: data.reply });
    renderMessage("bot", data.reply);
  } catch (err) {
    messageContainer.removeChild(thinkingBubble);
    renderMessage("bot", "Even my circuits are fried. Try again later.");
  }

  input.value = "";
}

button.addEventListener("click", sendMessage);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

document.addEventListener("DOMContentLoaded", () => {
  const greetings = [
    "Inventory? Emotions? I'll pretend to care about both.",
    "Welcome back. Did you finally run out of underpads?",
    "Here to overthink supplies again? Let's begin.",
    "Ask me something cold and clinical. Preferably with a lot number."
  ];
  const greetingText = greetings[Math.floor(Math.random() * greetings.length)];

  const bubble = document.createElement("div");
  bubble.className = "message bot";
  bubble.innerHTML = `<span class="dot"></span><span id="typewriterText"></span>`;
  messageContainer.appendChild(bubble);

  let i = 0;
  const typeTarget = document.getElementById("typewriterText");

  function type() {
    if (i < greetingText.length) {
      typeTarget.textContent += greetingText.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
});


