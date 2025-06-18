// backend/server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/message', async (req, res) => {
  const userInput = req.body.message;

  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: "claude-3.5-sonnet-20240610",
        max_tokens: 1000,
        messages: [
          { role: "user", content: userInput }
        ]
      },
      {
        headers: {
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        }
      }
    );

    const claudeMessage = response.data?.content?.[0]?.text || "(No response from Claude)";
    res.json({ reply: claudeMessage });

  } catch (error) {
    console.error("Claude API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Something went wrong with Claude." });
  }
});

app.listen(PORT, () => {
  console.log(`⚡️ Server is running on http://localhost:${PORT}`);
});

