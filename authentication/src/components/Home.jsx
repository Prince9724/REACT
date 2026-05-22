import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../feature/userSlice'

const Home = () => {

    const dispatch = useDispatch()

    const {
        users,
        isloading
    } =
        useSelector(
            (state) =>
                state.authentication
        )

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (

        <div className='container mt-5'>

            <h2>
                User List
            </h2>

            {
                isloading === "pending.."
                    ?

                    <h3>
                        Loading...
                    </h3>

                    :

                    users.map(
                        (user) => (

                            <div
                                key={user.id}
                                className='border p-3 mb-3'
                            >

                                <h5>
                                    {user.name}
                                </h5>

                                <p>
                                    {user.email}
                                </p>

                                <p>
                                    {user.contact}
                                </p>

                            </div>

                        )
                    )
            }

        </div>

    )
}

export default Home