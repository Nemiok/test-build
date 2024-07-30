import { combineReducers, configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { emptySlice } from '@/store/slices/EmptySlice'

const rootReducer = combineReducers({
  emptySlice: emptySlice.reducer,
})

export const initStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })

export type TRootState = StateFromReducersMapObject<typeof rootReducer>
type TRootStore = ReturnType<typeof initStore>
export type TAppDispatch = TRootStore['dispatch']

export const useAppDispatch = () => useDispatch<TAppDispatch>()
