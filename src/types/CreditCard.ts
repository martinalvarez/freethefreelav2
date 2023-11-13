export interface CreditCardBase {
    id: number;
    name: string;
    paymentDate: string;
} 

export interface CreditCard extends CreditCardBase {
    balance: string;    
    interestRate: string;
    limit: string;    
    minimumPayment: string;
} 

export interface CreditCardData extends CreditCardBase {
    balance: number;    
    interestRate: number;    
    limit: number;
    minimumPayment: number;
} 