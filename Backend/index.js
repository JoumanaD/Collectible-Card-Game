const express = require('express');
const cors = require('cors')
const app = express();

const {getCards,getCardById, getUserCards} = require('./Card/CardRoutes')
const {getSets,getSetById,getSetCards} = require('./Set/SetRoutes')
const {getTypes,getSubTypes,getSuperTypes,getRarities} = require('./Type/TypeRoutes')
const {getUsers,getUserNFTs} = require('./User/UserRoutes')

app.use(cors());


// Card Routes
app.get('/getCards', getCards);
app.get('/getCard/:id', getCardById); 
app.get('/getUserCards', getUserCards);

// Set Routes
app.get('/getSets', getSets);
app.get('/getSet/:id', getSetById);
app.get('/getSetCards/:id', getSetCards);


// Type Routes
app.get('/getTypes', getTypes);
app.get('/getSubTypes', getSubTypes);
app.get('/getSuperTypes', getSuperTypes);
app.get('/getRarities', getRarities);

// User Routes
app.get('/getUsers', getUsers);
app.get('/getUserNFTs/:id', getUserNFTs);



var port = process.env.PORT || 3030 ;

app.listen(port, console.log(`Server is listening on port ${port}`) )


//---- à faire
// Minter arbitrairement // je recois du front une liste[idCard] & adressUser ==> call function  mint.js n fois.

//obtenir les images qui appartiennent a un certain set depuis l'api 