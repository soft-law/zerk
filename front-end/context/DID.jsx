"use client";

import { createContext, useContext, useState } from "react";

const DIDContext = createContext({});

export const DIDContextProvider = ({ children }) => {
  return <DIDContext.Provider></DIDContext.Provider>;
};

export const useDIDContext = () => useContext(DIDContext);
