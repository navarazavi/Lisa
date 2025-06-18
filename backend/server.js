import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CLAUDE_API_KEY = process.env["lisa-env"]; // ✅ this must match your Render env var

// Basic middleware
app.use(cors());
app.use(express.json());

// Get dirname from ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// 💾 Load inventory data from JSON file
const inventoryDataPath = path.join(__dirname, "inventoryData.json"); // or "data/inventoryData.json"
let inventoryData = [];

try {
  const rawData = fs.readFileSync(inventoryDataPath, "utf-8");
  inventoryData = JSON.parse(rawData);
  console.log(`📦 Loaded ${inventoryData.length} inventory items`);
} catch (err) {
  console.error("Failed to load inventory data:", err.message);
}

// 💬 Claude chat route
app.post("/ask-lisa", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  const personalityIntro = `You are LISA: the Laboratory Inventory and Supply Chain Assistant. You're smart, witty, and designed to help with lab efficiency. Keep responses concise. You have this inventory:\n${inventoryData
    .map((item) => `• ${item.date}: ${item.name} (${item.qty}, ${item.id})`)
    .join("\n")}`;

  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-opus-20240229",
        max_tokens: 1024,
        temperature: 0.7,
        messages: [
          {
            role: "user",
            content: `${personalityIntro}\nUser: ${message}`,
          },
        ],
      },
      {
        headers: {
          "x-api-key": CLAUDE_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );

    res.json({ reply: response.data.content[0].text });
  } catch (err) {
    console.error("Claude API error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Claude API error" });
  }
});

// Catch-all to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`💬 Lisa backend listening on port ${PORT}`);
});

