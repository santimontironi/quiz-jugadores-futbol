import { useState } from "react"

const Form = ({GuessPlayer}) => {

    const[playerInput,setPlayerInput] = useState("")

    function handleFormSubmit(e){
        e.preventDefault()
        GuessPlayer(playerInput)
        setPlayerInput("")
    }

    return (
        <form className="flex flex-col md:flex-row gap-[20px] items-center" onSubmit={(e) => handleFormSubmit(e)}>
            <input placeholder="Escribe el apellido del jugador" className="bg-white w-[260px] p-[10px] rounded-xl" type="text" value={playerInput} onChange={(e) => setPlayerInput(e.target.value)}/>
            <button className="bg-blue-400 text-white p-[10px] border-none rounded-2xl cursor-pointer hover:bg-blue-500" type="submit">Adivinar</button>
        </form>
    )
}

export default Form