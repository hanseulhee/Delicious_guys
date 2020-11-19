## 맛있는 녀석들
### 성공회대학교 맛집 추천 웹
##### 웹개발입문 최종 과제
---
### 개발 사항
#### Modal
```js
// forEach를 사용하여 모든 item에 eventListener 부여
const itemList = document.querySelectorAll(".item");

itemList.forEach(function(item) {
    item.addEventListener("click", handleClick);
});
```