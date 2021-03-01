### 맛있는 녀석들

#### 성공회대학교 맛집 추천 웹 서비스

##### 웹개발입문 최종 과제물

---

### 결과물

#### 정해둔 시간이 지나거나, 클릭 시 slide image가 바뀜

![ezgif com-gif-maker (11)](https://user-images.githubusercontent.com/63100352/109526396-d986d300-7af5-11eb-8129-4020bd11578e.gif)


#### 해당 식당의 정보가 뜨는 modal창 구현

![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/63100352/109523248-7d6e7f80-7af2-11eb-976c-bb0fdff38fb0.gif)


#### review page

<img src="https://user-images.githubusercontent.com/63100352/109517607-cc191b00-7aec-11eb-974a-dab94cbce658.PNG" width="650px">

#### signin page
##### alret 경고창

![ezgif com-gif-maker (9)](https://user-images.githubusercontent.com/63100352/109524740-31bcd580-7af4-11eb-921d-aa4d6c6e704c.gif)

#### signup page

<img src="https://user-images.githubusercontent.com/63100352/109517614-cd4a4800-7aec-11eb-8aa9-8c4146c7d8c7.PNG" width="650px">

#### write page

![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/63100352/109525095-86f8e700-7af4-11eb-8a42-6fba9cb9981e.gif)


#### 배포

Link: [맛있는 녀석들](https://hanseulhee.github.io/Delicious_guys/)

### 개발 사항

#### Modal

```js
// forEach를 사용하여 모든 item에 eventListener 부여
const itemList = document.querySelectorAll(".item");

itemList.forEach(function (item) {
  item.addEventListener("click", handleClick);
});
```

#### Slide

```js
const SHOWING_CN = "slider_showing";

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

#### alert
```js
function handleSubmit(event) {
  const inputId = signinForm.querySelector(".id-js");
  const inputPwd = signinForm.querySelector(".psw-js");
  event.preventDefault();

  // window 객체 제어
  if (inputId.value === "" || inputPwd.value === "") {
    window.alert("빈 칸을 모두 작성해 주세요");
  } else {
    window.location.assign("index.html");
  }
}
```
---