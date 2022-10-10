import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser } from '../../models/IUser'
// import { AppDispatch } from '../store'
// import { userSlice } from './UserSlice'

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching())
//     const responce = await axios.get<IUser[]>(
//       'https://jsonplaceholder.typicode.com/users',
//     )
//     dispatch(userSlice.actions.usersFetchingSuccess(responce.data))
//   } catch (e) {
//     const message = e instanceof Error ? e.message : 'Unknown error.'
//     dispatch(userSlice.actions.usersFetchingError(message))
//   }
// }

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users',
      )
      return responce.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Ну удалось загрузить пользователей')
    }
  },
)
