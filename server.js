const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/generate-poster', async (req, res) => {
  const prompt = req.body.prompt; // e.g. "A vibrant event poster with modern design"
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt: prompt,
        n: 1,
        size: "1024x1024"
      },
      {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        }
      }
    );
    const imageUrl = response.data.data[0].url;
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
