import { createContext, useState } from "react";

export const IngredientContext = createContext();

export function IngredientProvider({ children }) {
  let ingredients = []

  return (
    <IngredientContext.Provider
      value={{ ingredients }}
    >
      {children}
    </IngredientContext.Provider>
  );
}
