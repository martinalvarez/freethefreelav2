import { AnnualizedRevenue } from "./AnnualizedRevenue";
import { BankAccountData } from "./BankAccount";
import { BusinessHealthData } from "./BusinessHealth";
import { CreditCardData } from "./CreditCard";
import { LoanData } from "./Loan";
import { User } from "./User";

export interface Db {
    annualizedRevenue: AnnualizedRevenue[];
    banksAccounts: BankAccountData[];    
    businessHealth: BusinessHealthData;
    creditCards: CreditCardData[];
    loans: LoanData[];    
    totalDebt: number;
    totalMinimumMonthlyPayment: number;
    user: User;    
}