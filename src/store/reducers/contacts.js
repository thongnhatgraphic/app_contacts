import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = contactsSlice.actions



export default contactsSlice.reducer