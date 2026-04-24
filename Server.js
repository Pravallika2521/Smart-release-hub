const express = require('express');
const dotenv = require('dotenv');
const releaseRoutes = require('./routes/releaseRoutes');
 
dotenv.config();
 
const app = express();
 
app.use('/api', releaseRoutes);
 
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
 
