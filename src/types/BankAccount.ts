export interface BankAccountBase {
    account: string;    
    id: number;
    name: string;
}

export interface BankAccount extends BankAccountBase {
    balance: string;
}

export interface BankAccountData extends BankAccountBase {
    balance: number;
}