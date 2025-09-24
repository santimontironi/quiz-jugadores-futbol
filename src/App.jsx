import Game from "./components/Game"

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-[20px] items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
      <h2 className="h-[100px] text-white bg-black p-[7px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)] flex items-center justify-center text-[40px]">¿Quién es este jugador?</h2>
      <Game/>
    </div>
  )
}

export default App