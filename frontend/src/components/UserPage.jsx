import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import '../styles.css'; 

const usersList = [
    {   
        adress: 1 ,
        balance : 50, 
        pokemonCards: [ 
            {
                "id":"hgss4-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/hgss4/1_hires.png"
            }, 
            {
                "id":"ru1-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/ru1/1_hires.png"
            },
            {
                "id":"base4-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/base4/1_hires.png"
            }
        ]
    },
    {
        adress: 2 , 
        balance : 30,
        pokemonCards:  [ 
            {
                "id":"pl1-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/pl1/1_hires.png"
            },
            {
                "id":"gym1-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/gym1/1_hires.png"
             },
             {
                "id":"pop6-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/pop6/1_hires.png"
             },
        ]
    },
    {
        adress: 3 , 
        balance : 60,
        pokemonCards: [
            {
                "id":"dp3-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/dp3/1_hires.png"
            }, 
            {
                "id":"pl1-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/pl1/1_hires.png"
            }
        ]
    },
    {
        adress: 4 , 
        balance: 44,
        pokemonCards: [ 
            {
                "id":"det1-1",
                "number":"1",
                "image":"https://images.pokemontcg.io/det1/1_hires.png"
            }
        ]
    },
]

function UserPage(){
    const [cards, setCards] = useState(usersList);

    return (
        <Box sx={{ flexGrow: 1 }} className="boxBackground">
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Profile
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default UserPage;