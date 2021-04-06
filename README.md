# Codesquad-api

> 2021

## todo

### schema

```json
{
  "color": "#000000", // 폰트 색상 (미사용)
  "bg_color": "#ffffff", // 배경 색상 (미사용)
  "_id": "606bd0c6778dac93fcfc0743", // 아이디 (수정, 삭제)
  "title": "first todo", // 제목
  "state": 0, // 0 : Done, 1 : To Do, 2 : Doing, 3 : 삭제
  "author": "json", // 작성자
  "content": "blabla", // 내용
  "created_at": "2021-04-06T05:47:11.254Z", // 작성일
  "updated_at": "2021-04-06T05:47:11.254Z", // 수정일
},
```

### 1. get

**path**

> https://codesquad-2021-api.herokuapp.com/todo/:author

**body**

```json
없음
```

**result**

```
[
  {
    color: "#333",
    bg_color: "#ffffff",
    _id: "606bccdb9612248c0c14b157",
    title: "first todo",
    state: "3",
    author: "json",
    content: "blabla",
    created_at: "2021-04-06T02:52:11.252Z",
    updated_at: "2021-04-06T03:09:31.730Z",
    __v: 0
  },
  ...
]
```

### 2. post

**path**

> https://codesquad-2021-api.herokuapp.com/todo

**body**

```json
{
  "title": "sec todo",
  "state": 0,
  "author": "json",
  "content": "안녕하세요!",
  "color": "#000000",
  "bg_color": "#ffffff"
}
```

**result**

```json
{ "id": "606bd82860adcb424ccd22c3" }
```

### 3. put

**path**

> https://codesquad-2021-api.herokuapp.com/todo/:author/:id

**body**

```json
{
  "title": "sec todo",
  "state": 0
}
```

**result**

```
수정 성공!
```

### 4. delete

**path**

> https://codesquad-2021-api.herokuapp.com/todo/:author/:id

**body**

```json
없음
```

**result**

```
삭제 성공!
```
