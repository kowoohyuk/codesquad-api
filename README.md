## todo v2

### schema

```javascript
// 필수
{
  "author": "json", // 작성자
  "todoColumns": [] // 자유로운 양식!
}
```

```javascript
// todoColumn 예시
{
  "title": "first todo",
  "todoItems": [],
  "color": "#000000", // 폰트 색상 (미사용)
  "bg_color": "#ffffff", // 배경 색상 (미사용)
}

// todoItem 예시
{
  title: "todo 이벤트 만들기",
  content: "3!4!",
}
```

### 1. get

**path**

> https://codesquad-2021-api.herokuapp.com/todo/v2/:author

**body**

```json
없음
```

**result**

```
{
  "author": "luke",
  "todoColumns": [
    {
      "color": "#333",
      "bg_colo": "#ffffff",
      "title": "해야 할 일",
      "todoItems": [
        {
          "title": "설계하기",
          "content": "스키마 및 모델링 토론",
        },
        {
          "title": "정리하기",
          "content": "Wiki 사용!",
        },
        // ...
      ]
    },
    {
      "color": "#333",
      "bg_color": "red",
      "title": "first todo",
      "todoItems": [
        // ...
      ]
    },
    // ...
  ]
}
```

### 2. post

**path**

> https://codesquad-2021-api.herokuapp.com/todo/v2

**body**

```javascript
{
  "author": "eamon",
  // 새로운 column이나 item 추가 시 id값을 전달하지 않으면 새로운 document가 생성됩니다.
  "id": "607400468c55b820600363f5",
  "todoColumns": [
    {
      "color": "#333",
      "bg_colo": "#ffffff",
      "title": "끝낸 일",
      "todoItems": [
        {
          "title": "늦잠자기",
          "content": "10시 직전에 일어나기",
        },
        // ...
      ]
    }
    // ...
  ]
}
```

**result**

```
생성이 완료되었습니다
```

### 3. put

**path**

> https://codesquad-2021-api.herokuapp.com/todo

**body**

```javascript
{
  "author": "luke",
  "id": "607400468c55b820600363f5",
  "todoColumns": [
    {
      "color": "#333",
      "bg_colo": "#ffffff",
      "title": "끝낸 일",
      "todoItems": [
        {
          "title": "늦잠자기",
          "content": "10시 직전에 일어나기",
        },
        // ...
      ]
    }
    // ...
  ]
}
```

**result**

```
수정 성공!
```

### 4. delete

**path**

> https://codesquad-2021-api.herokuapp.com/todo

**body**

```json
{
  "author": "eamon",
  "id": "607400468c55b820600363f5",
  "todoColumns": [
    {
      "color": "#333",
      "bg_colo": "#ffffff",
      "title": "끝낸 일",
      "todoItems": [
        {
          "title": "늦잠자기",
          "content": "10시 직전에 일어나기"
        }
        // ...
      ]
    }
    // ...
  ]
}
```

**result**

```
삭제 성공!
```
