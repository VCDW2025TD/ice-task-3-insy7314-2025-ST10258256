const mongoose = require('mongoose');
const https = require('https');
const fs = require('fs');
const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`); 
// });

const options = {
  key: fs.readFileSync('./ssl/privatekey.pem'),
  cert: fs.readFileSync('./ssl/certificate.pem')
};

// https.createServer(options, app).listen(PORT, () => {
//   console.log(`Secure API is running at https://localhost:${PORT}`);
// });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  https.createServer(options, app).listen(PORT, () => { 
    console.log(`Secure API is running at https://localhost:${PORT}`);
  });
  console.log("MongoDB connected");
})
.catch(err => {
  console.error("MongoDB connection error:", err);
});
