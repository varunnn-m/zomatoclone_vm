import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
import globalSlice from './globalSlice'

import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        global: globalSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})