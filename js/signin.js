const signinForm = document.querySelector(".inForm-js");


function handleSubmit(event){
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

function init() {
    signinForm.addEventListener("submit", handleSubmit);
}


init();
