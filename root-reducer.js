import { combineReducers } from "redux";
import { ourTeamReducer } from "./components/ourTeam/OurTeam.Reducer";
import ShopCategoriesReducer from "./components/shopCategories/ShopCategories.reducer";
import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products.reducer";

export const rootReducer = combineReducers({
  teamMembers: ourTeamReducer,
  shopCategories: ShopCategoriesReducer,
  cart: cartReducer,
  products: productsReducer,
});
