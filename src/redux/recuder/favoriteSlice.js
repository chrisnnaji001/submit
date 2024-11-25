import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {
            //Add a new favorite
            state.push(action.payload);
        },

        removeFavorite: (state, action) => {
          //  Remove a favoriteSlice
          return state.filter(favorite => favorite !== action.payload);
        }
    }
})

//Export action
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

//Export reducer
export default favoriteSlice.reducer;