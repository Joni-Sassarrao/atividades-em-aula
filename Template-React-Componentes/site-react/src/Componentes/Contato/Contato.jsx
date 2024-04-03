function Contact(){
    return(
        <>
            <h2>Entre em Contato</h2>
                <div>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </div>
        </>
    )
}

export default Contact