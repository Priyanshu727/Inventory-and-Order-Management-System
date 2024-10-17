const express = require('express')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('../config/db');
const routes = require('../routes/userRoutes')
const productRoutes = require('../routes/productRoutes');
const orderRoutes= require('../routes/orderRoutes')


dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api', routes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);



const PORT = process.env.PORT || 8084;

app.get("/", (req, res) => {
    res.send("Hello World!!!!!");
});


app.listen(PORT, (err) => {
    if (err) {
        console.log(err, 'Server Failed to start');
    } else {
        console.log(`Listening on port: http://localhost:${PORT}`);
    }
});