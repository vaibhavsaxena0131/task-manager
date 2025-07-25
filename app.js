
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

module.exports = app;

