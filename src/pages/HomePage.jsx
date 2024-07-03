import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './styles/homePage.css'

const HomePage = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()) )
        navigate('/pokedex')
    }

  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_img' src="../../public/PokedeX.png" alt="" />
        <h1>Welcome Trainer!</h1>
        <p>To start, please give me your trainer name</p>
        <form onSubmit={handleSubmit}>
            <input ref={inputName} type="text" />
            <button>Catch them all!</button>
        </form>
      </div>
    </div>

  )
}

export default HomePage