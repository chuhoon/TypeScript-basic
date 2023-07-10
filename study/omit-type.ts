interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  //...
}

// 오밋 타입
type OmitShoppingItem = Omit<Product, 'stock' | 'brand'>;

// 특정 product에서 일부만 필요한 함수
function displayProductDetail(shoppingItem: OmitShoppingItem) {
  // ..
}
