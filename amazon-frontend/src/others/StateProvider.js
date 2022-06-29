import React, { createContext, useContext, useReducer } from "react";

// Prepares data layer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the Data layer
export const useStateValue = () => useContext(StateContext);
