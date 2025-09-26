import Game from "./components/Game"

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-[20px] items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
      <h2 className="titleApp w-[370px] p-[20px] h-[200px] md:w-[700px] md:h-[130px] text-center text-white bg-black md:p-[7px] shadow-[10px_10px_10px_rgba(0,0,0,0.5)] flex items-center justify-center text-[40px]">¿Quién es este jugador?</h2>
      <Game/>
    </div>
  )
}

export default App