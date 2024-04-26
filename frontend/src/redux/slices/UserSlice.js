import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (store, action) => {
            store.user = [ ...store.user, action.payload ]
            // console.log(store.user)
            console.log('Utilisateur enregistré !', store.user)
        },
        removeUser: (store, action) => {
            store.user = []
            console.log('Store réinitialisé !', store.user)
        }
    }
})

export const { addUser, removeUser } = userSlice.actions

export const selectUser = (store) => store.user

export default userSlice.reducer