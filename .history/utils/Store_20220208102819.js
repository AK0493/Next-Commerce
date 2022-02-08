import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
  }
}

export function Storeprovider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
}
