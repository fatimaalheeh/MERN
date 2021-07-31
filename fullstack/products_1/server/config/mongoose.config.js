const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(() => console.log("connection failed", err))