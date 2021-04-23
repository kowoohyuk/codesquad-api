## sidedish

> 모든 요청은 get을 사용합니다.

> 상품 명과 이미지가 일치하지 않으니 주의 바랍니다...  
> ex) 삼겹살인데 이미지가 두부...

### 스키마 구조

```js
{
  title: String, // 제목
  description: String, // 설명
  main_image: String, // 목록 또는 상세 모달의 메인 이미지
  alt: String, // 이미지 설명 (제목과 일치)
  price: Number, // 기본 가격
  discount: Number, // 할인 비율
  label: Array, // 뱃지
  stock: Number, // 재고, 1 ~ 5 사이
  point: Number, // 적립 포인트
  thumbnail_images: Array, // 상세 모달의 썸네일 이미지 리스트
  delivery_fee: String, // 상세 모달의 배송 요금
  delivery_info: String // 상세 모달의 배송 정보
}
```

### 반환 데이터 예시

```javascript
{
  childs: [
    {
      label: [],
      point: 52,
      thumbnail_images: [
        "https://cdn.pixabay.com/photo/2016/08/10/10/28/vegetable-1582920__340.jpg",
        "https://cdn.pixabay.com/photo/2017/07/27/16/48/toppokki-2545943__340.jpg",
      ],
      _id: "6082343989d7c10f802d4e6a",
      title: "[삼진어묵] 부산 원조 어묵 5종",
      description: "64년 전통으로 빚은 원조 어묵",
      alt: "[삼진어묵] 부산 원조 어묵 5종",
      price: 5200,
      discount: 35,
      delivery_fee: "2,500원 <b>(40,000원 이상 구매 시 무료)</b>",
      delivery_info:
        "서울 경기 새벽배송 / 전국택배 (제주 및 도서산간 불가) [월 · 화 · 수 · 목 · 금 · 토] 수령 가능한 상품입니다",
      __v: 0,
      main_image:
        "https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610865__340.jpg",
      stock: 5,
    },
  ];
  // ...
}
```

### 요청 예시

> id는 개별 상품의 _id입니다. 
> ex) _id: "6082343989d7c10f802d4e6a",

#### **best** - 베스트 리스트 전체 반환

#### path - https://codesquad-2021-api.herokuapp.com/sidedish/best

---

#### main - 메인 리스트 전체 반환

#### path - https://codesquad-2021-api.herokuapp.com/sidedish/main

---

#### detail - 상세 모달용 디테일 반환

#### path - https://codesquad-2021-api.herokuapp.com/sidedish/detail/:id  
> ex) https://codesquad-2021-api.herokuapp.com/sidedish/detail/6082343989d7c10f802d4e6a  

---

#### buy - 구매 버튼 클릭 시 구매 가능 여부 반환

> 구매 가능 여부만 반환하며, 재고는 변경되지 않습니다.

#### path - https://codesquad-2021-api.herokuapp.com/sidedish/buy/:id/:stock  
> ex) https://codesquad-2021-api.herokuapp.com/sidedish/buy/6082343989d7c10f802d4e6a/3

```js
// 구매 가능
{
  result: true
}

// 구매 불가
{
  result: false,
  message: "재고가 부족합니다!"
}
```
