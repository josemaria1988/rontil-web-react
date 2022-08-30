



const PokeApi = () => {

    const [id, setId] = useState(1)

    const [pokemon, setPokemon] = useState(null)

    const handleSiguiente = () => {
        setId(id +1)
    }

    const handleAnterior= () => {
        setId(id-1)
    }


    useEffect (() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then( (resp) => resp.json())
                .then((data) => {
                    setPokemon(data)
                })


    }, [id])
    


    return (
        <div>
            <h2>Poke Api</h2>
            <hr/>

            {
                pokemon ? 
                <>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprite.front_default} alt={pokemon.name}/>
                </>
                : null
            }

            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>

        </div>
    )
}