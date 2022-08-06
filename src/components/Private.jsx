import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const Private = ({ children }) => {

    const token = useSelector((state) => state.loginReducer.token);

    if (token == null) {
        return <Navigate to="/login" />
    }


    return children
}