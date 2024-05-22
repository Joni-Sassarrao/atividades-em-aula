import Header from "./Componentes/Header"
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <h1>Home</h1>
    </>
  )
}

export default App
