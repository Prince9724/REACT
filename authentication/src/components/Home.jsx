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
    const loginUser =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        )
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

                    users.map((user) => {

                        const active =

                            loginUser?.email
                            ===

                            user.email

                        return (

                            <div
                                key={user.id}

                                className={
                                    active?"border p-5 mb-4 shadow bg-primary text-white rounded" :"border p-2 mb-2"
                                }
                            >
                                <h4>
                                    {user.name}
                                </h4>
                                <p>
                                    {user.email}
                                </p>
                                <p>
                                    {user.contact}
                                </p>
                                {
                                    active
                                    &&
                                    <h5>
                                        Current User
                                    </h5>
                                }
                            </div>
                        )
                    })
            }

        </div>

    )
}

export default Home