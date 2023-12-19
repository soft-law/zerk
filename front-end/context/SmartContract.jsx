import React, { useContext, createContext, useMemo } from "react";

const ContratosContext = createContext();

export const ContratosContextProvider = ({ children }) => {
  const value = useMemo(() => {
    return {};
  }, []);

  return (
    <ContratosContext.Provider value={value}>
      {children}
    </ContratosContext.Provider>
  );
};

export const useContratosContext = () => {
  const context = useContext(ContratosContext);

  if (!context)
    throw new Error(
      "useContratosContext must be used within a ContratosContextProvider"
    );
  return context;
};
