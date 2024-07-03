import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/pokedexPage.css'
import PokePages from '../components/PokedexPage/PokePages'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')

  const [ selectValue ,  setSelectValue] = useState('allpokemons')

  const trainerName = useSelector( store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1305'
  
  const [pokemons, getPokemons , getByTypePokemoms ] = useFetch(url)

  const [page , setPage ] = useState(1)

  useEffect(()=> {
    if(selectValue === 'allpokemons') {
      getPokemons()
    } else{
      getByTypePokemoms(selectValue)
    }
      
  }, [selectValue])

  const inputSearch = useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)

    return nameFiltered
  }
  const quantity = 14
  const total = Math.ceil(pokemons?.results.filter(cbFilter).length / quantity)

  const paginate = () =>{
    
    const end = quantity * page
    const start = end - quantity
    return pokemons?.results.filter(cbFilter).slice(start, end)
  }

  return (
    <div className='pokedex'>
      <h3 className='pokedex_greetings'>Welcome <span> {trainerName} </span>, may you find your favorite <span>Pokemon</span> . Let's go </h3>
      <div className='pokedex_filter'>
        <form onSubmit={handleSubmit}>
          <input ref={inputSearch} />
          <button>Search</button>
        </form>
        <SelectType
        setSelectValue={setSelectValue}
       />
      </div>
      <PokePages 
        page = {page}
        setPage = {setPage}
        total = {total}
      />
      <div className='pokedex_container'>
        {
         paginate()?.map(poke =>(
            <PokeCard 
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
      <PokePages 
        page = {page}
        setPage = {setPage}
        total = {total}
      />
    </div>
  )
}

export default PokedexPage