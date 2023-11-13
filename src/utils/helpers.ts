export const CURRENCY = 'USD';
export const LOCALE = 'en-US';

const formatters = {
    cent: new Intl.NumberFormat(LOCALE, {
        currency: CURRENCY,
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: 'currency',
    }),
    dollar: new Intl.NumberFormat(LOCALE, {
        currency: CURRENCY,
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
        style: 'currency',
    }),
    number: new Intl.NumberFormat(LOCALE, { style: 'decimal' }),
    number2Decimals: new Intl.NumberFormat(LOCALE, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: 'decimal',
    }),
    percent: new Intl.NumberFormat(LOCALE, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        style: 'percent',
    }),
    wholePercent: new Intl.NumberFormat(LOCALE, {
        maximumFractionDigits: 0,
        style: 'percent',
    }),
};

const defaultFormatterOptions: Record<string, Intl.DateTimeFormatOptions> = {
    date: {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    },
    dateTime: {
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        month: 'short',
        timeZoneName: 'short',
        year: 'numeric',
    },
    weekday: {
        weekday: 'long',
    },
};

export function formatCurrency(value: number, { showCents = true }: { showCents?: boolean; } = {}): string {
    return formatters[showCents ? 'cent' : 'dollar'].format(value);
}

export function formatDate(value: Date, { showYear = true }: { showYear?: boolean; } = {}): string {
    const options = {
        ...defaultFormatterOptions.date,
        ...(showYear ? {} : { year: undefined }),
    };

    return value.toLocaleDateString(LOCALE, options);
}

export function formatPercentage(value: number, { showDecimal = true }: { showDecimal?: boolean; } = {}): string {
    return formatters[showDecimal ? 'percent' : 'wholePercent'].format(value / 100);
}

export function parseDate(date: string): Date {
    const [year, month, day] = date.split('-').map((num) => parseInt(num, 10));

    // Date takes a zero index month so we subtract 1
    return new Date(year, month - 1, day);
}
