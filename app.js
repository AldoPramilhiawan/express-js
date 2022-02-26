const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const router = require('./routes');
const log = require('./middleware/logger');

app.use(cors());
app.use(log);
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(router);

const PORT = 3000
app.listen(PORT, () => console.log(`Your App is succesfully listening on port ${PORT}`))