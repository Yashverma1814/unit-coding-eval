import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Private } from '../components/Private'
import { Cart } from './Cart'
import { Home } from './Home'
import { IndividualItem } from './IndividualItem'
import { Login } from './Login'

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Private><Home /></Private>} />
                <Route path='/login' element={<Login />} />
                <Route path='/product/:id' element={<Private><IndividualItem /></Private>}/>
                <Route path='/cart' element={<Private><Cart /></Private>}/>
            </Routes>
        </div>
    )
}