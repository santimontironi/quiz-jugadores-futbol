export const fetchPlayers = async () => {
    try{
        const res = await fetch('/data/players.json')
        const data = await res.json()
        return data
    }
    catch(error){
        console.log("Error al cargar los jugadores", error)
    }
}