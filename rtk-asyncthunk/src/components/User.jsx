import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../feature/userSlice'
const User = () => {
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
    const dispatch = useDispatch()
    return (
        <div>
            {
                
            }
        </div>
    )
}

export default User