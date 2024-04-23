import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (store, action) => {
            console.log('Utilisateur enregistré !')
            store.user = [ ...store.user, action.payload ]
            console.log(store.user)
        }
    }
})

export const { addUser } = userSlice.actions

export const selectUser = (store) => store.user

export default userSlice.reducer