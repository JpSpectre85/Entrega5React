import React from 'react'
import './styles/pokeHeader.css'

const PokeHeader = () => {
  return (
    <div className='pokeheader'>
      <div className='pokeheader_red'>
        <figure className='pokeheader_img'>
          <img src="/PokedeX.png" alt="pokdex img" />
        </figure>
      </div>
      <div className='pokeheader_black'>
        <div className='pokeheader_outerCircle'>
          <div className='pokeheader_innerCircle'></div>
        </div>
      </div>
    </div>
  )
}

export default PokeHeader