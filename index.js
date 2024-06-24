const connectToMongoose = require('./db');
const express = require('express');
var cors = require('cors'); // Ensure cors is correctly imported
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook app listening on port ${port}`);
});

connectToMongoose();
