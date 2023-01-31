import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    data: {}
  },
  reducers: {
    addFromMock: (state, action) => {
      state.data = JSON.parse(action.payload).data;
    },
    addFromExcel: (state, action) => {
      state.data = action.payload;
    }
  }
})

export const { addFromMock, addFromExcel } = counterSlice.actions

export const store = configureStore({
  reducer: counterSlice.reducer
})
