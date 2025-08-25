# 자주 사용하는 JavaScript 배열 메서드 정리

JavaScript 개발을 하다 보면 배열을 다루는 일이 정말 많습니다. 이번 글에서는 실무에서 자주 사용하는 배열 메서드들을 예제와 함께 정리해보겠습니다.

## 1. map() - 배열 변환의 핵심

`map()`은 배열의 각 요소를 변환해서 새로운 배열을 만들 때 사용합니다.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 객체 배열 변환
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];

const userNames = users.map((user) => user.name);
console.log(userNames); // ['Alice', 'Bob']
```

## 2. filter() - 조건에 맞는 요소만 선택

`filter()`는 조건을 만족하는 요소들로만 새로운 배열을 만듭니다.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// 복잡한 조건 필터링
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Book", price: 20, category: "Education" },
  { name: "Phone", price: 800, category: "Electronics" },
];

const expensiveElectronics = products.filter(
  (product) => product.category === "Electronics" && product.price > 500
);
```

## 3. reduce() - 배열을 하나의 값으로 축약

`reduce()`는 배열의 모든 요소를 하나의 값으로 축약할 때 사용합니다.

```javascript
// 합계 계산
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 15

// 객체로 그룹화
const fruits = ["apple", "banana", "apple", "orange", "banana"];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); // { apple: 2, banana: 2, orange: 1 }
```

## 4. find()와 findIndex() - 특정 요소 찾기

```javascript
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// 첫 번째 활성 사용자 찾기
const activeUser = users.find((user) => user.active);
console.log(activeUser); // { id: 1, name: 'Alice', active: true }

// 인덱스 찾기
const bobIndex = users.findIndex((user) => user.name === "Bob");
console.log(bobIndex); // 1
```

## 5. some()과 every() - 조건 검사

```javascript
const numbers = [2, 4, 6, 8];

// 모든 요소가 짝수인지 확인
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

// 하나라도 10보다 큰지 확인
const hasLargeNumber = numbers.some((num) => num > 10);
console.log(hasLargeNumber); // false
```

## 6. sort() - 배열 정렬

```javascript
// 숫자 정렬 (주의: 기본 정렬은 문자열 기준)
const numbers = [10, 5, 40, 25, 1000, 1];
const sorted = numbers.sort((a, b) => a - b);
console.log(sorted); // [1, 5, 10, 25, 40, 1000]

// 객체 배열 정렬
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sortedByAge = users.sort((a, b) => a.age - b.age);
console.log(sortedByAge); // Bob(25), Alice(30), Charlie(35) 순
```

## 7. 메서드 체이닝 활용

여러 배열 메서드를 연결해서 사용하면 복잡한 데이터 처리를 간결하게 할 수 있습니다.

```javascript
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", inStock: true },
  { name: "Book", price: 25, category: "Education", inStock: false },
  { name: "Phone", price: 800, category: "Electronics", inStock: true },
  { name: "Tablet", price: 600, category: "Electronics", inStock: true },
];

// 재고가 있는 전자제품의 평균 가격 계산
const averagePrice = products
  .filter((product) => product.category === "Electronics" && product.inStock)
  .map((product) => product.price)
  .reduce((sum, price, _, array) => sum + price / array.length, 0);

console.log(averagePrice); // 866.67 (1200 + 800 + 600) / 3
```

## 8. 실무 활용 예제

### 사용자 데이터 처리

```javascript
const userData = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    role: "admin",
    lastLogin: "2024-01-15",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    role: "user",
    lastLogin: "2024-01-10",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@email.com",
    role: "user",
    lastLogin: "2024-01-20",
  },
];

// 최근 로그인한 사용자들의 이메일 목록 (최근 7일)
const recentActiveUsers = userData
  .filter((user) => {
    const lastLogin = new Date(user.lastLogin);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return lastLogin > weekAgo;
  })
  .map((user) => user.email)
  .sort();

console.log(recentActiveUsers);
```

## 성능 고려사항

### 1. 불필요한 체이닝 피하기

```javascript
// 비효율적
const result = data
  .filter((item) => item.active)
  .map((item) => ({ ...item, processed: true }))
  .filter((item) => item.score > 80);

// 효율적
const result = data
  .filter((item) => item.active && item.score > 80)
  .map((item) => ({ ...item, processed: true }));
```

### 2. 큰 배열 처리시 주의

큰 배열을 처리할 때는 성능을 고려해야 합니다. 필요한 경우 `for` 루프나 다른 최적화 방법을 고려해보세요.

## 마무리

JavaScript 배열 메서드들은 함수형 프로그래밍의 핵심입니다. 이들을 잘 활용하면 더 읽기 쉽고 유지보수하기 좋은 코드를 작성할 수 있습니다.

각 메서드의 특성을 이해하고 적절한 상황에서 사용한다면, 더욱 효율적인 JavaScript 코드를 작성할 수 있을 것입니다!

---

_더 궁금한 배열 메서드가 있다면 댓글로 알려주세요! 📝_
