import { configureStore } from '@reduxjs/toolkit'
import contacts from "./reducers/contacts"


export const store = configureStore({
  reducer: {
    contacts: contacts
  },

})