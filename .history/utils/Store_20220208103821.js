import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: false,
};

function reducer(state, action) {}

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
}
