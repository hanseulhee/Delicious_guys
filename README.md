### 맛있는 녀석들
#### 성공회대학교 맛집 추천 웹 서비스
##### 웹개발입문 최종 과제물
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
#### Slide
```js

const SHOWING_CN = 'slider_showing';

function changeSlide() {
    const currentSlide = slide.querySelector(`.${SHOWING_CN}`);

    if (currentSlide !== null) {
        currentSlide.classList.remove(SHOWING_CN);
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide.className !== "blank") {
            nextSlide.classList.add(SHOWING_CN);
        } else {
            firstSlide.classList.add(SHOWING_CN);
        }

    } else {
        firstSlide.classList.add(SHOWING_CN);
    }
}
```

