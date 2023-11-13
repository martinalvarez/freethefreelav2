
import {
    formatCurrency,
    formatDate,
    formatPercentage,
    parseDate
} from "../utils/helpers";
import { BankAccount  } from "../types/BankAccount";
import { BusinessHealth } from "../types/BusinessHealth";
import { CreditCard } from "../types/CreditCard";
import { Loan } from "../types/Loan";
import { fetchDb } from "./dataService";

export async function fetchBanksAccounts()  {
    const data = await fetchDb();
    const banksAccounts: BankAccount[] = data.banksAccounts.map((account)=> {
        return {
            ...account,
            balance: formatCurrency(account.balance),
        }
    });

    return banksAccounts
}

export async function fetchCreditCards() {
    const data = await fetchDb();
    const creditCards: CreditCard[] = data.creditCards.map((card)=> {
        return {
            ...card,
            limit: formatCurrency(card.limit),
            balance: formatCurrency(card.balance),
            interestRate: formatPercentage(card.interestRate),
            minimumPayment: formatCurrency(card.interestRate),
            paymentDate: formatDate(parseDate(card.paymentDate)),
        };
    })

    return creditCards;
}

export async function fetchLoans() {
    const data = await fetchDb();
    const loans: Loan[] = data.loans.map((loan)=> {
        return {
            ...loan,
            monthlyPayment: formatCurrency(loan.monthlyPayment),
            remainingBalance: formatCurrency(loan.remainingBalance),
            paymentDate: formatDate(parseDate(loan.paymentDate)),
        };
    })        

    return loans;
}

export async function fetchUser()  {
    const data = await fetchDb();
    const {firstName, lastName } = data.user;
    return `${firstName} ${lastName}`;
}

export async function fetchAnnualizedRevenue()  {
    const data = await fetchDb();
    return data.annualizedRevenue;
}

export async function fetchDebt()  {
    const data = await fetchDb();
    return formatCurrency(data.totalDebt);
}

export async function fetchPayments()  {
    const data = await fetchDb();
    return formatCurrency(data.totalMinimumMonthlyPayment);
}

export async function fetchBusinessHealth()  {
    const data = await fetchDb();
    const { elegibity, creditScore, monthlyProfit, monthlyRevenue } = data.businessHealth;

    const businessHealth: BusinessHealth = {
        elegibity,
        creditScore,
        monthlyProfit: formatCurrency(monthlyProfit),
        monthlyRevenue: formatCurrency(monthlyRevenue),
    };
    return businessHealth;
}