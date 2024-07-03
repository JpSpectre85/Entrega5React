import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeinfopage.css'

const PokeInfoPage = () => {

  const { id }= useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [ pokemon, getPokemon ] = useFetch(url)

  useEffect (() => {
    getPokemon()
  }, [])

  

  return (
    <div className='pokeinfo'>
      <article className='pokeinfo_img'>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
      </article>
      <ul className='pokeinfo_stats'>
        {
          pokemon?.stats.map(stat => (
            <li className='pokeinfo_stats-item' key={stat.stat.url}>
              <span>{stat.stat.name}</span> <span> {stat.base_stat}/250</span>
              <div className='outerBar'>
                <div className='innerBar' style={{width: `${stat.base_stat/2.5}%`}} ></div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PokeInfoPage