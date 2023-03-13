import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {
    const {user, token} = useStateContext()

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div id="defaultLayout">
            <Outlet />
        </div>
    )
}
