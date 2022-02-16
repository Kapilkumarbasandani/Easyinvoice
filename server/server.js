import express from 'express';
import connectDB from './config/db.js';
import auth from './routes/api/auth.js';
import profile from './routes/api/profile.js';
import client from './routes/api/client.js';
const app = express();

//connect database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('start');
});

app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/client', client);

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log('server running on port ' + PORT);
});
