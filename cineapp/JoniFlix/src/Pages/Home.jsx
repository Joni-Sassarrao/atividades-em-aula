import data from '../../artigos.json'

export default function Home(){
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
        {
            (data.map)(
                (filme, index) =>(
                    <>
                    <div className='card' key={index}>
                        <h1>{filme.title}</h1>
                        <img src={filme.image}/>
                        <div className='tags'>
                            {
                                filme.tags.map(tag =>(
                                    <span className='bg-blue-800 text-white p-1 m-1' key={tag}>{tag}</span>
                            ))
                            }
                            <div className='texto'>
                                {
                                    filme.text.map(text =>(
                                        <span key={text}>{text}</span>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    </>
                    )
                )
            }
        </div>
    )
}