import { createContext } from "react";

export const IngredientContext = createContext();

export function IngredientProvider({ children }) {
  let ingredients = [{ name: 'Quantidade', amount: 0 }]

  return (
    <IngredientContext.Provider
      value={{ ingredients }}
    >
      {children}
    </IngredientContext.Provider>
  );
}
