const mongoose = require('mongoose');
const Trip = require ('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

//Get /trips
//Must include HTML status Code
// and JSON message

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // Find all trips
        .exec();

        //Uncomment to see the query
        //console.log(q);

    if (!q) 
        {
        return res
                .status(404)
                .json(err);
    } else { //Return trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return 1 trip
        .exec();

        //Uncomment to see the query
        //console.log(q);

    if (!q) 
        {
        return res
                .status(404)
                .json(err);
    } else { //Return trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};