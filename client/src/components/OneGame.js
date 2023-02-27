import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const OneGame = (props) => {

    const {id} = props;
    const [game, setGame] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=> {
                console.log(res)
                console.log(res.data)
                setGame(res.data)
            })
    }, [])


return(
    <div>
        <p> {game.name} </p>
        <p> {game.genre} </p>
        <p>  {game.yearReleased} </p>
        <p> <img src={game.image} style={{width:"250px", height:"150px"}} /> </p>
        <p> {game.rating} </p>
        <p> {game.company} </p>
        <p> {game.updatedAt} </p>

        <Link to={`/`}> Home </Link>
        
    </div>
)
}

export default OneGame;