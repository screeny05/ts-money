import { Currency } from './currency';

const rawData = [
    ["USD", 2],
    ["CAD", 2],
    ["EUR", 2],
    ["BTC", 8],
    ["AED", 2],
    ["AFN", 2],
    ["ALL", 2],
    ["AMD", 2],
    ["ARS", 2],
    ["AUD", 2],
    ["AZN", 2],
    ["BAM", 2],
    ["BDT", 2],
    ["BGN", 2],
    ["BHD", 3],
    ["BIF", 0],
    ["BND", 2],
    ["BOB", 2],
    ["BRL", 2],
    ["BWP", 2],
    ["BYR", 0],
    ["BZD", 2],
    ["CDF", 2],
    ["CHF", 2],
    ["CLP", 0],
    ["CNY", 2],
    ["COP", 2],
    ["CRC", 2],
    ["CVE", 2],
    ["CZK", 2],
    ["DJF", 0],
    ["DKK", 2],
    ["DOP", 2],
    ["DZD", 2],
    ["EEK", 2],
    ["EGP", 2],
    ["ERN", 2],
    ["ETB", 2],
    ["GBP", 2],
    ["GEL", 2],
    ["GHS", 2],
    ["GNF", 0],
    ["GTQ", 2],
    ["HKD", 2],
    ["HNL", 2],
    ["HRK", 2],
    ["HUF", 2],
    ["IDR", 2],
    ["ILS", 2],
    ["INR", 2],
    ["IQD", 3],
    ["IRR", 2],
    ["ISK", 0],
    ["JMD", 2],
    ["JOD", 3],
    ["JPY", 0],
    ["KES", 2],
    ["KHR", 2],
    ["KMF", 0],
    ["KRW", 0],
    ["KWD", 3],
    ["KZT", 2],
    ["LAK", 2],
    ["LBP", 2],
    ["LKR", 2],
    ["LTL", 2],
    ["LVL", 2],
    ["LYD", 3],
    ["MAD", 2],
    ["MDL", 2],
    ["MGA", 2],
    ["MKD", 2],
    ["MMK", 2],
    ["MOP", 2],
    ["MUR", 2],
    ["MXN", 2],
    ["MYR", 2],
    ["MZN", 2],
    ["NAD", 2],
    ["NGN", 2],
    ["NIO", 2],
    ["NOK", 2],
    ["NPR", 2],
    ["NZD", 2],
    ["OMR", 3],
    ["PAB", 2],
    ["PEN", 2],
    ["PHP", 2],
    ["PKR", 2],
    ["PLN", 2],
    ["PYG", 0],
    ["QAR", 2],
    ["RON", 2],
    ["RSD", 2],
    ["RUB", 2],
    ["RWF", 0],
    ["SAR", 2],
    ["SDG", 2],
    ["SEK", 2],
    ["SGD", 2],
    ["SOS", 2],
    ["SYP", 2],
    ["THB", 2],
    ["TND", 3],
    ["TOP", 2],
    ["TRY", 2],
    ["TTD", 2],
    ["TWD", 2],
    ["TZS", 2],
    ["UAH", 2],
    ["UGX", 0],
    ["UYU", 2],
    ["UZS", 2],
    ["VEF", 2],
    ["VND", 0],
    ["XAF", 0],
    ["XOF", 0],
    ["YER", 2],
    ["ZAR", 2],
    ["ZMK", 0],
] as const satisfies [code: string, decimal_digits: number][];

type CurrencyCode = typeof rawData[number][0] | (string & {});

// Convert the raw data to a record of Currency objects
export const Currencies: Record<CurrencyCode, Currency> = Object.fromEntries(rawData.map(([code, decimal_digits]) => [code as any, { decimal_digits, code }]));
