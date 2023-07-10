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

// 유틸리티 타입
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;

// 특정 product에서 일부만 필요한 함수
function displayProductDetail(shoppingItem: ShoppingItem) {
  // ..
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// interface UpdateProduct와 Parital<Product>는 동일한 효과를 기대 가능하다. Product의 타입 모든 것을 Optional 처리하게 된다.
type UpdateProduct = Partial<Product>;

// 3. partial 유틸리티 타입 (특정 상품 정보를 업데이트하는 함수)
function updateProductItem(productItem: UpdateProduct) {
  // ..
}

// 4. 유틸리티 타입 구현 - Partial

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// #1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

// #2
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// };

// #3
// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p];
// };

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};
