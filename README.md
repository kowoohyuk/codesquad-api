# Codesquad-api

> 2021

## todo

### 1. get

**path**

> /todo/:author

**body json**

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

> /todo

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

> /todo/:author/:id

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

> /todo/:author/:id

**body json**

```json
없음
```

**result**

```
삭제 성공!
```
