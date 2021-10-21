import React from "react";
import ShopCategoriesInitialState from "./ShopCategories.InitialState";

export default function ShopCategoriesReducer(
  state = ShopCategoriesInitialState,
  action = {}
) {
  switch (action.type) {
    default:
      return state;
  }
}
