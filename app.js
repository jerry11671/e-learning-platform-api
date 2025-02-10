require('dotenv').config()

const express = require('express');
const app = express()

const PORT = process.env.PORT || 3000
const connectDB = require('./db/connect')


app.use(express.json());

const start = async () => {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    })
}



start();