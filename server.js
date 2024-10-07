const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.get('/check-file', (req, res) => {
     const filePath = path.join('C:', 'config', 'config.txt');
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('File not found:', err); 
        return res.status(404).json({ message: 'File not found' });
      }
      console.log("File exists");
      res.status(200).json({ message: 'File exists' });
    });
  });
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
