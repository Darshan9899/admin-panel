require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./router/auth_router');
const connectDB = require('./utils/db');


app.use(express.json());
app.use("/api/auth", router);


connectDB().then(() => {
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    })
});