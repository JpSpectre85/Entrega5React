import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/pokeCard.css'

const PokeCard = ( { url } ) => {

    const [ infoPoke, getInfoPoke ] = useFetch(url)

    useEffect(() =>{
        getInfoPoke()
    }, [])

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(`/pokedex/${infoPoke.id}`)
    }

  return (
    <article className="pokecard"  onClick={handleNavigate}>
            <div className={`pokecard_back ${infoPoke?.types[0].type.name}`}></div>
            <img className="pokecard_img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
        
        
            <h3 className="pokecard_name"> {infoPoke?.name} </h3>
            <ul className="pokecard_types">
                {
                    infoPoke?.types.map(infoType =>(
                        <li className={`slot${infoType.slot}`}  key={infoType.type.url} >{infoType.type.name}</li>
                    ) )
                }
            </ul>
            <span className="pokecard_span" >Type</span>
            <hr className="pokecard_hr" />
            <ul className="pokecard_stats">
                {
                    infoPoke?.stats.map(infoStat => (
                        <li key={infoStat.stat.url}>
                            <span>{infoStat.stat.name}</span>
                            <span>{infoStat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>

        
    </article>
  )
}

export default PokeCard