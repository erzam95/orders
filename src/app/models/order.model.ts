export interface Order {
  id: string;
  customerId: string;
  items: {
    productId: string,
    quantity: string,
    unitPrice: string,
    total: string
  }[];
  total: string;
  isPlaced?: boolean;
}
