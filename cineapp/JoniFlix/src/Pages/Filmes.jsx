import data from "../../artigos.json"

export default function Filmes() {
    console.log(data)
    return (
        <>
        <h1>Filmes</h1>
        {
            data.map(
                filme =>(
                    <>
                    <h1 key={filme.title}>{filme.title}</h1>
                    <img src={filme.image}/>
                    </>
                )
            )
        }
        </> 
    )
}