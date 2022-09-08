const CURRENCY = new Intl.NumberFormat(undefined,{currency : "USD" , style:"currency"})

export function formatCurrency (x : number){
 return CURRENCY.format(x)
}