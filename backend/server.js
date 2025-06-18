import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CLAUDE_API_KEY = process.env["lisa-env"]; // 👈 use the exact key name

app.use(cors());
app.use(express.json());

// Static frontend serving
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

// Claude API route
app.post("/ask-lisa", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-sonnet-20240229",
        max_tokens: 1024,
        temperature: 0.7,
        messages: [{ role: "user", content: message }],
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
    console.error("Claude error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Claude API error" });
  }
});

// Send index.html for all non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`💬 Lisa backend listening on port ${PORT}`);
});

