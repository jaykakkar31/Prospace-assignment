// src/context/CompanyContext.js
import React, { createContext, useContext, useState } from "react";

const OfficeContext = createContext(null);

const officeInitialvalues = {};

export const OfficeProvider = ({ children }) => {
    const [offices, setOffices] = useState(officeInitialvalues);
    return (
        <OfficeContext.Provider
            value={{
                offices,
                setOffices,
            }}
        >
            {children}
        </OfficeContext.Provider>
    );
};

export const useOfficeData = () => {
    return useContext(OfficeContext);
};
