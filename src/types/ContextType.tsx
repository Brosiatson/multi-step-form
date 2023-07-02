import { AccountTypeType } from "./AccountTypeType"
import { AddonsType } from "./AddonsType"
import { PersonalDataType } from "./PersonalDataType"
import { SummaryType } from "./SummaryType"

export interface ContextType {
    personalData: {
        personalData: PersonalDataType
        setPersonalData: React.Dispatch<React.SetStateAction<PersonalDataType>>
    }
    accountType: {
        accountType: AccountTypeType
        setAccountType: React.Dispatch<React.SetStateAction<AccountTypeType>>
    }
    addons: {
        addons: AddonsType
        setAddons: React.Dispatch<React.SetStateAction<AddonsType>>
    }
    summary: {
        summary: SummaryType
        setSummary: React.Dispatch<React.SetStateAction<SummaryType>>
    }
}