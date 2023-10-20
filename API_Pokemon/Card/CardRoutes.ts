const axios = require('axios');
import { Request, Response } from 'express';


exports.getCards = async (req: Request, res: Response) => {
    try {

        const response = await axios.get('https://api.pokemontcg.io/v2/cards');
        const data = response.data;        
        console.log(data);
        console.log("Cards : ",data);

    } catch (err) {
        console.error('Erreur lors de la récupération des Cards', err); 
        res.send(err)
    }
};

exports.getCardById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        console.log("--> ID of Card = ",id);
        
        const response = await axios.get('https://api.pokemontcg.io/v2/cards/'+id);
        const data = response.data;        
        console.log("Card of id ("+id+") : ",data);
        res.json(data);

    } catch (err) {
        console.error('Erreur lors de la récupération du Card by id :', err);
        res.send(err)
    }
};


// module.exports = router;
