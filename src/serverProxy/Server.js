const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 5000;

// Define your SerpApi API key
const apiKey = process.env.REACT_APP_API_KEY;

app.use(express.json());

app.get('/api/search', async (req, res) => {
    try {
        const { query } = req.query;
        const url = `https://serpapi.com/search.json?engine=google_maps&q=${query}&type=search&api_key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
