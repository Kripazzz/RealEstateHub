const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/realestate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
});

const Listing = mongoose.model('Listing', ListingSchema);

app.get('/listings', async (req, res) => {
    const listings = await Listing.find();
    res.json(listings);
});

app.post('/listings', async (req, res) => {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.json(newListing);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
