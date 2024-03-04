import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
        accessToken: "",
        userId: "",
    },
    reducers: {
        doLogin: (state, action) => {
            state.isLogin = true
            console.log(action)
            state.accessToken = action.payload["access_token"]
            state.userId = action.payload["user_id"]
        },
        doLogout: (state) => {
            state.isLogin = false
            state.accessToken = ""
        },
    },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { doLogin, doLogout } = authSlice.actions

export default authSlice.reducer