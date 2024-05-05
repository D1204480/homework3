// let inputEmail = document.getElementById("notion-email-input-2");
// let continueBtn = document.getElementById("continue-btn");
//
// continueBtn.onclick = function () {
//     let Email = document.getElementById("notion-email-input-2").value;
//     alert("Thank you for your Email~~~~~~~~ " + Email);
// }
//

// 彈出視窗
let continueBtn = document.getElementById("continue-btn");

continueBtn.onclick = function () {
    let emailInput = document.getElementById("notion-email-input-2");
    if (emailInput) { // 檢查元素是否存在
        let email = emailInput.value.trim(); // 移除空白
        if (email !== "") { // 檢查是否有輸入
            alert("Hey Hey~ got you!!! " + email);
            emailInput.value= "";    // 清除使用者輸入
        } else {
            alert("Please enter your Email!");
        }
    } else {
        console.error("Element with id 'notion-email-input-2' not found!");
    }
}


