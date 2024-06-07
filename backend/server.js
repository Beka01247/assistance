const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

// app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);

// connect and listen
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
})