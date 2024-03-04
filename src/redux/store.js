import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reduces/auth.js'


export default configureStore({
    reducer: {
        auth: authReducer,
    },
})