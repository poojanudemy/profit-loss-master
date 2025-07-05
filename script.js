const initialPrice = document.querySelector("#initial-price");
const qty = document.querySelector("#qty");
const currentPrice = document.querySelector("#current-price");
const calculateBtn = document.querySelector("#calculateProfitAndLoss");
const outputBox = document.querySelector(".output-box");

calculateBtn.addEventListener("click", checkProfitOrLoss);

function checkProfitOrLoss() {
    let earlyPrice = parseInt(initialPrice.value);
    let stockQty = parseInt(qty.value);
    let presentPrice = parseInt(currentPrice.value);

    if(earlyPrice && stockQty && presentPrice) {
        calculateProfitAndLoss(earlyPrice, stockQty, presentPrice);
    } else {
        showMessage("All the fields are required.😡😡", "#1e293b");
    }
}

function calculateProfitAndLoss(earlyPrice, stockQty, presentPrice) {
    //calculate loss
    if (earlyPrice > presentPrice) {
        let loss = (earlyPrice - presentPrice) * stockQty;
        let lossPercentage = calculatePercentage(loss, earlyPrice * stockQty);
        showMessage(`You are at loss of ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}% 😟😥`, "#dc2626");
    }

    //calculate profit
    if(earlyPrice < presentPrice) {
        let profit = (presentPrice - earlyPrice) * stockQty;
        let profitPercentage = calculatePercentage(profit, earlyPrice * stockQty);
        showMessage(`You have profit of ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}% 🎊🎉`, "#4d7c0f");
    }
    //no loss, no profit
    if (earlyPrice == presentPrice) {
        showMessage(`You are neither at loss nor profit!🥳🥳`, "#701a75");
    }
}

function calculatePercentage(number, total) {
    return (number / total) * 100;
}

function showMessage(msg, color) {
    outputBox.innerHTML = msg;
    outputBox.style.color = color;
}