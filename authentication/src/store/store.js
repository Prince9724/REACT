import {
    configureStore
}
    from "@reduxjs/toolkit"

import userReducer
    from "../feature/userSlice"

const store =
    configureStore({

        reducer: {

            authentication:
                userReducer

        }

    })

export default store