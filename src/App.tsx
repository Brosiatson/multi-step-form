import { RouterProvider } from 'react-router-dom'
import './scss/App.scss';
import { router } from './routers/router';
import { Context } from './contexts/context';
import { useState } from 'react';
import { PersonalDataType } from './types/PersonalDataType';
import { ContextType } from './types/ContextType';
import { AccountTypeType } from './types/AccountTypeType';
import { AddonsType } from './types/AddonsType';
import { SummaryType } from './types/SummaryType';

function App() {
  const [personalData, setPersonalData] = useState<PersonalDataType>({name: "", surname: "", age: 0, email: "", phoneNumber: ""})
  const [accountType, setAccountType] = useState<AccountTypeType>({type: "Arcade", price: 10})
  const [addons, setAddons] = useState<AddonsType>({onlineService: {active: false, price: 1}, largerStorage: {active: false, price: 2}, customProfile: {active: false, price: 2}})
  const [summary, setSummary] = useState<SummaryType>({totalPrice: 0})

  const value: ContextType = {
    personalData: {
      personalData: personalData,
      setPersonalData: setPersonalData
    },
    accountType: {
      accountType: accountType,
      setAccountType: setAccountType
    },
    addons: {
      addons: addons,
      setAddons: setAddons
    },
    summary: {
      summary: summary,
      setSummary: setSummary
    }
  }

  return (
    <Context.Provider value={value}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}

export default App;
