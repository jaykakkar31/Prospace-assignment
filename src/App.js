import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyProvider } from "./context/companyContext";
import { OfficeProvider } from "./context/officeContext";
import OverviewPage from "./pages/OverviewPage/overviewPage";
import OfficePage from "./pages/officePage/officePage";
const App = () => {
    return (
        <BrowserRouter>
            <CompanyProvider>
                <OfficeProvider>
                    {" "}
                    <Routes>
                        <Route path="/" element={<OverviewPage />} />
                        <Route path="/:id" element={<OfficePage />} />
                    </Routes>
                </OfficeProvider>
            </CompanyProvider>
        </BrowserRouter>


    );
};

export default App;
