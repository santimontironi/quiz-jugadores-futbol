import Form from "./Form"
import fetchPlayers from "../services/servicePlayers"
import { useEffect, useState } from "react"
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Game = () => {

    const [players, setPlayers] = useState([])
    const [attempts, setAttempts] = useState(3)
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [score, setScore] = useState(0)
    const [finish, setFinish] = useState(false)

    function loadPlayers() {
        fetchPlayers().then((data) => {
            const shuffled = [...data].sort(() => Math.random() - 0.5)
            setPlayers(shuffled)
        })
    }

    useEffect(() => {
        loadPlayers()
    },[])


    const actualPlayer = players[currentPlayer]

    function handleGuess(player) {

        if (player.trim() === "") {
            toast.error("Escribe el apellido del jugador", {
                autoClose: 800
            })
            return
        }

        if (actualPlayer.name.toString().toLowerCase().includes(player.toLowerCase())) {
            toast.success("Acertaste!", {
                autoClose: 800,
                position: "top-left"
            })

            setScore((prev) => prev + 1)

            if (currentPlayer < players.length - 1) {
                setCurrentPlayer((prev) => prev + 1);
            } else {
                setFinish(true);
            }
        } else {
            toast.error("Jugador incorrecto.", {
                autoClose: 800,
                position: "top-left"
            })
            setAttempts((prev) => prev - 1)
        }
    }

    function handleReset() {
        loadPlayers()
        setAttempts(3)
        setCurrentPlayer(0)
        setScore(0)
        setFinish(false)
    }

    return (
        <div className="flex flex-col gap-[20px] h-auto w-[320px] lg:w-[400px] md:w-[600px] justify-center items-center bg-gradient-to-bl from-blue-100 to-blue-300 rounded-2xl p-[20px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)]">
            {actualPlayer && (
                <div>
                    <figure className="overflow-hidden w-[300px] md:w-[350px] rounded-2xl">
                        <img className="w-full transform hover:scale-110 transition duration-600" src={actualPlayer.silhouette} alt={actualPlayer.name} />
                    </figure>
                </div>
            )}
            <div className="absolute top-[30px] right-[30px] flex flex-row items-center gap-[10px] bg-white rounded-2xl shadow-[10px_10px_10px_rgba(0,0,0,0.5)] p-[10px]">
                <FaHeart color="red" size={30} />
                <span className="text-[20px]">{attempts}</span>
            </div>
            <Form GuessPlayer={handleGuess} />

            <ToastContainer />

            {finish && (
                <div className="fixed inset-0 flex items-center justify-center">

                    <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>


                    <div className="relative w-[320px] lg:w-[400px] md:w-[600px] h-[200px] flex flex-col gap-[20px] items-center justify-center
                    text-white rounded-2xl shadow-[10px_10px_10px_rgba(0,0,0,0.5)] p-[20px] bg-black/50">
                        <h2 className="text-[20px]">Juego finalizado</h2>
                        <p className="text-[20px]">Puntaje: {score}</p>
                        <button onClick={handleReset}>Reiniciar</button>
                    </div>
                </div>
            )}

        </div>

    )
}

export default Game