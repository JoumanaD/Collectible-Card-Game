
const axios = require('axios');
import { Request, Response } from 'express';


// Pour limiter le nombre des cartes à recevoir -> ajout du parametre pageSize
// https://api.pokemontcg.io/v2/cards?pageSize=5


exports.getCards = async (req: Request, res: Response) => {
    try {

        const response = await axios.get('https://api.pokemontcg.io/v2/cards');
        const data = response.data;        
        // console.log("Cards : ",data);

        let REP= [{}];
        REP = []; 
        //Filtrer la reponse
        data.data.forEach((card: any) => {
            REP.push({
                "id": card.id,
                "number": card.number,
                "image": card.images.large
            })
        });

        // console.log(REP);
        
        res.json(REP);


    } catch (err) {
        console.error('Erreur lors de la récupération des Cards', err); 
        res.send(err)
    }
};

exports.getCardById = async (req: Request, res: Response) => {

    try {
        const id = req.params.id;

        // console.log("--> ID = ",id);
        
        const response = await axios.get('https://api.pokemontcg.io/v2/cards/'+id);
        const data = response.data;        
        // console.log("Card of id ("+id+") : ",data);
        // console.log(data.data.number);
        // console.log(data.data.images.large);

        res.json({
            "id": data.data.id,
            "number": data.data.number,
            "image": data.data.images.large
        });

        
        // res.json(data);

    } catch (err) {
        console.error('Erreur lors de la récupération du Card by id :', err);
        res.send(err)
    }
};


// module.exports = router;
