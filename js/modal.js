const itemList = document.querySelectorAll(".item");
const modal = document.querySelector(".modal");
const modal_overlay = modal.querySelector(".modal_overlay");
const modal_content = modal.querySelector(".modal_content");

const HIDDEN_CN = "hidden";

function handleOverClick() {
    modal.classList.add(HIDDEN_CN);
}

function handleClick(event){
    const clickedItem = event.target;
    const parents = clickedItem.parentNode
    
    console.log(parents);

    modal.classList.remove(HIDDEN_CN); // modal 보이게 함

    const name = modal_content.querySelector("h1");
    const place = modal_content.querySelector(".modal_place");
    const img = modal_content.querySelector("img");
    const explain = modal_content.querySelector(".modal_explain");


    name.innerText = parents.querySelector(".name").innerText;
    place.innerText = parents.querySelector(".place").innerText;
    img.src = parents.querySelector("img").src;
    explain.innerText = parents.querySelector(".explain").innerText;

    modal_overlay.addEventListener("click", handleOverClick);
}

function init(){

    itemList.forEach(function(item) {
        // 이벤트 리스너 속성으로 이벤트를 활용
        item.addEventListener("click", handleClick);
    });
}

init();