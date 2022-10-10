import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import { fetchUsers } from './ActionCreators'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  count: number
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state, actions: PayloadAction<IUser[]>) {
    //   state.isLoading = false
    //   state.error = ''
    //   state.users = actions.payload
    // },
    // usersFetchingError(state, actions: PayloadAction<string>) {
    //   state.isLoading = false
    //   state.error = actions.payload
    // },
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchUsers.fulfilled.type]: (state, actions: PayloadAction<IUser[]>) => {
      state.isLoading = false
      state.error = ''
      state.users = actions.payload
    },
    [fetchUsers.rejected.type]: (state, actions: PayloadAction<string>) => {
      state.isLoading = false
      state.error = actions.payload
    },
  },
})

export default userSlice.reducer
