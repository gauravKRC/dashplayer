const express = require('express');
const path = require('path');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

const mediaPath = path.join(__dirname, 'videos/OutputVideo');

// Use cors middleware
app.use(cors());

app.get('/dash/:file', (req, res) => {
    const dashFilePath = path.join(mediaPath, req.params.file);
    console.log('Request for:', dashFilePath);
    res.sendFile(dashFilePath);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
