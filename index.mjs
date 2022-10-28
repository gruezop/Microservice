import 'dotenv/config';
import express from 'express';
import * as destinations from './model.mjs';
import cors from 'cors'


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors())


// GET destination filtered by country
app.get('/price', (req, res) => {
    let filter = {};
    // filter by country
    if(req.query.country !== undefined){
        filter = { country: req.query.country };
    }
    destinations.findDestination(filter, '', 0)
        .then(destinations => {
            res.send(destinations);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});


// GET data by ID
app.get('/price/:_id', (req, res) => {
    const destinationId = req.params._id;
    destinations.findDestinationById(destinationId)
        .then(destination => { 
            if (destination !== null) {
                res.json(destination);
            } else {
                res.status(404).json({ Error: 'Not found' });
            }         
         })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});