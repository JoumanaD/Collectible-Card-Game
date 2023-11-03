// const axios = require('axios');
// import { Request, Response } from 'express';


exports.getSets = async (req, res) => {
    try {

        const response = await axios.get('https://api.pokemontcg.io/v2/sets');
        const data = response.data;        
        console.log(data);
        res.json(data);

    } catch (err) {
        console.error('Erreur lors de la récupération des Sets : ', err);        
        res.send(err)
    }
};

exports.getSetById = async (req, res) => {
    try {
        const id = req.params.id;

        console.log("--> ID of Set = ",id);
        
        const response = await axios.get('https://api.pokemontcg.io/v2/sets/'+id);
        const data = response.data;        
        console.log("Set of id ("+id+") : ",data);
        res.json(data);

    } catch (err) {
        console.error('Erreur lors de la récupération du Set by id : ', err);
        res.send(err)
    }
};


// module.exports = router;
