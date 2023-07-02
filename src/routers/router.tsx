import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { PersonalDataLayout } from "../components/Layouts/PersonalDataLayout/Index";
import { AccountTypeLayout } from "../components/Layouts/AccountTypeLayout/Index";
import { AddonsLayout } from "../components/Layouts/AddonsLayout/Index";
import { SummaryLayout } from "../components/Layouts/SummaryLayout/Index";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PersonalDataLayout />}/>
            <Route path="/acc-type" element={<AccountTypeLayout />}/>
            <Route path="/addons" element={<AddonsLayout />}/>
            <Route path="/summary" element={<SummaryLayout />}/>
        </>
    )
) 