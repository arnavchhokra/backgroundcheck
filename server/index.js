// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const searchRoutes = require('./Routes/targetRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
