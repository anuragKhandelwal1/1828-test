interface SaleItem {
  id: number;
  name: string;
  tax: number;
  rate: number;
  multipleAllowed: boolean;
}

interface Order {
  id: number;
  items: SaleItem[];
  orderTotal: () => number;
  discountTotal: () => number;
  orderItemDiscountTotal: () => number;
  orderTaxTotal: () => number;
}
