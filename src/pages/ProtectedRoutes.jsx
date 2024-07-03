import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import PokeHeader from '../components/shared/PokeHeader'
const ProtectedRoutes = () => {

    const trainerName = useSelector( store => store.trainerName)

    if (trainerName.length > 2) {
        return (
            <>
            <PokeHeader />
            <Outlet />
            </>
            
        )
    } else {
        return (
            <Navigate to='/' />
        )
    }
}

export default ProtectedRoutes