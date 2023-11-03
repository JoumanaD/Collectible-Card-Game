const express = require('express');
const cors = require('cors')
const app = express();

const {getCards,getCardById, getUserCards} = require('./Card/CardRoutes')
const {getSets,getSetById} = require('./Set/SetRoutes')
const {getTypes,getSubTypes,getSuperTypes,getRarities} = require('./Type/TypeRoutes')

app.use(cors());

// Card Routes
app.get('/getCards', getCards);
app.get('/getCard/:id', getCardById); 
// app.get('/getUserCards/:id', getUserCards);

// Set Routes
app.get('/getSets', getSets);
app.get('/getSet/:id', getSetById);

// Type Routes
app.get('/getTypes', getTypes);
app.get('/getSubTypes', getSubTypes);
app.get('/getSuperTypes', getSuperTypes);
app.get('/getRarities', getRarities);



var port = process.env.PORT || 3030 ;

app.listen(port, console.log(`Server is listening on port ${port}`) )


