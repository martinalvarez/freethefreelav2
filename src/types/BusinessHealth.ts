export interface BusinessHealthBase {
    elegibity: number;
    creditScore: number;
}

export interface BusinessHealth extends BusinessHealthBase {
    monthlyProfit: string;
    monthlyRevenue: string;
}

export interface BusinessHealthData extends BusinessHealthBase {
    monthlyProfit: number;
    monthlyRevenue: number;
}
