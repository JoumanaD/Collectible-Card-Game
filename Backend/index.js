const express = require('express');
const app = express();

const {getCards,getCardById, getUserCards} = require('./Card/CardRoutes')
const {getSets,getSetById} = require('./Set/SetRoutes')
const {getTypes,getSubTypes,getSuperTypes,getRarities} = require('./Type/TypeRoutes')
const {getUsers} = require('./User/UserRoutes')



// Card RoutesCard
app.get('/getCards', getCards);
app.get('/getCard/:id', getCardById); 
app.get('/getUserCards', getUserCards);

// Set Routes
app.get('/getSets', getSets);
app.get('/getSet/:id', getSetById);

// Type Routes
app.get('/getTypes', getTypes);
app.get('/getSubTypes', getSubTypes);
app.get('/getSuperTypes', getSuperTypes);
app.get('/getRarities', getRarities);

// User Routes
app.get('/getUsers', getUsers);



var port = process.env.PORT || 3030 ;

app.listen(port, console.log(`Server is listening on port ${port}`) )


// ----------         getNFTsOfOwner();
// owneradress - adress UEr 
// getNFTsOfOwner(owneradress) => ses NFTs dans des objets {{ tokenId: '1', tokenURI: 'http://localhost:3030/getCard/mcd19-3' },}

// -----------           getOwners();
// lise des users

//---- à faire
// Minter arbitrairement // je recois du front une liste[idCard] & adressUser ==> call function  mint.js n fois.

