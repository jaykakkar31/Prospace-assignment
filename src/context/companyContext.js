// src/context/CompanyContext.js
import React, { createContext, useContext, useState } from "react";

const CompanyContext = createContext(null);

const companiesInitialvalues = {
    companies: [],
};

export const CompanyProvider = ({ children }) => {
    const [companies, setCompanies] = useState(companiesInitialvalues);
    return (
        <CompanyContext.Provider
            value={{
                companies,
                setCompanies,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};

export const useCompanyData = () => {
    return useContext(CompanyContext);
};
