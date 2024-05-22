import NavBar from "./NavBar"

export default function Header() {
    return (  
        <header className="flex bg-[#014092] text-white p-4 mb-4 justify-between">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao JoniFlix!</h1>
            <NavBar/>
        </header>
    )
}