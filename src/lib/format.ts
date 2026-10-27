export function formatPrice(value: number) {
  return `${value.toLocaleString("uk-UA")} ₴`;
}

export function discountPercent(price: number, oldPrice?: number) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round((1 - price / oldPrice) * 100);
}
