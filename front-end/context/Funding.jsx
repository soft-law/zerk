"use client";

import { createContext, useContext, useState } from "react";

const FundingContext = createContext({});

export const FundingContextProvider = ({ children }) => {
  return <FundingContext.Provider></FundingContext.Provider>;
};

export const useFundingContext = () => useContext(FundingContext);
