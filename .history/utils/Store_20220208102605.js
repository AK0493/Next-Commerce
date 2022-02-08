import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: false,
};

export function Storeprovider(props) {
  const [state, dispatch] = useReducer(reduce, initialState);
}
