export interface Product {
  title: string;
  price: number;
  retailPrice: number | undefined;
  isSet: boolean;
  qty: number;
  setQty: number | undefined;
  imagePath: string;
  region: string;
}
