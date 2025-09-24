import Form from "./Form"
import fetchPlayers from "../services/servicePlayers"
import { useEffect, useState } from "react"
import { FaHeart } from "react-icons/fa";

const Game = () => {

    const[players,setPlayers] = useState([])
    const[attempts,setAttempts] = useState(3)
    const[currentPlayer,setCurrentPlayer] = useState(0)
    const[winner,setWinner] = useState(false)

    useEffect(() => {
        fetchPlayers().then((data) => setPlayers(data))
    },[])

    const actualPlayer = players[currentPlayer]

    function handleGuess(player){
        if(player.trim().toLowerCase() === actualPlayer.name.toLowerCase()){
            
        }
    }

    return (
        <div className="flex flex-col gap-[20px] h-auto w-[300px] lg:w-[400px] md:w-[600px] justify-center items-center bg-gradient-to-bl from-blue-100 to-blue-300 rounded-2xl p-[20px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)]">
            {actualPlayer && (
                <div>
                    <figure className="overflow-hidden w-[350px] rounded-2xl">
                        <img className="w-full transform hover:scale-110 transition duration-600" src={actualPlayer.silhouette} alt={actualPlayer.name} />
                    </figure>
                </div>
            )}
            <div className="absolute top-[30px] right-[30px] flex flex-row items-center gap-[10px] bg-white rounded-2xl shadow-[10px_10px_10px_rgba(0,0,0,0.5)] p-[10px]">
                <FaHeart color="red" size={30} /> 
                <span className="text-[20px]">{attempts}</span>
            </div>
            <Form GuessPlayer={handleGuess} />
        </div>
    )
}

export default Game