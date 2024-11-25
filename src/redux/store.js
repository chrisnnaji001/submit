import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./recuder/favoriteSlice"

const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    }
})
export default store;