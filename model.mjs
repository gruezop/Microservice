// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB collection using Mongoose.');
    }
});


// SCHEMA
const destinationSchema = mongoose.Schema({
	country: { type: String },
	price: { type: Number},

});

// Compile the model from the schema.
const Destination = mongoose.model("Destination", destinationSchema);


// Retrieve based on a filter and return a promise.
const findDestination = async (filter) => {
    const query = Destination.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findDestinationById = async (_id) => {
    const query = Destination.findById(_id);
    return query.exec();
}


// Export our variables for use in the controller file.
export { findDestination, findDestinationById }