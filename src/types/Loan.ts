export interface LoanBase {
    id: number;
    name: string;
    paymentDate: string;
    type: string;    
}

export interface Loan extends LoanBase {
    monthlyPayment: string;
    remainingBalance: string;
}

export interface LoanData extends LoanBase {
    monthlyPayment: number;
    remainingBalance: number;
}