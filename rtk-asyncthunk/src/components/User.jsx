import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../feature/userSlice'
const User = () => {
    const {user , status,error} = useSelector(state =>state.user)
//    const dispatch = useDispatch()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    return (
        <div>
            {
               user.map((u , i)=><div key={i}>
                    {u.name};
                   
                </div> )
            }
             {status}
             {error}
        </div>
    )
}

export default User