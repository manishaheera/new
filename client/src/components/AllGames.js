import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const AllGames = (props) => {

    const [gameList, setGameList] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8000/api/games")
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setGameList(res.data)
            })
            .catch((err)=> {
                console.log(err);
            })
    }, [])

return(
    <div >
        <h1> GAME BOOK</h1>

            <div className="gameList">
            {
                gameList.map((game, index)=> (
                    <div key={index}>

                        <Link to={`/game/${game._id}`}>
                            <h3> {game.name} </h3> 
                        </Link> 
                        
                        <p> {game.genre} </p>
                        <p>  {game.yearReleased} </p>
                        <p> <img src={game.image} style={{width:"250px", height:"150px"}} /> </p>
                        <p> {game.rating} </p>
                        <p> {game.company} </p>
                        <p> {game.updatedAt} </p>
                    </div>
                ))
            }

        </div>

    </div>
)
}

export default AllGames;