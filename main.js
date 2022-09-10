const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click",()=>{
    if(initialPrice.value && quantity.value && currentPrice.value) {
        checkForProfitLoss(Number(initialPrice.value),Number(quantity.value),Number(currentPrice.value));
    } else {
        output.innerHTML = "please insert input!"
        output.style.color = "red";
    }

});

function checkForProfitLoss(init,qty,curr) {
    //for profit
    if(init < curr) {
        let profit = (curr - init) * qty;
        let profitPercentage = (profit/(init*qty))*100;
        profit = profit.toFixed(2);
        profitPercentage = profitPercentage.toFixed(2);
        output.innerHTML = `Congratulations! You are in profit of ${profit} and your profit pecentage is ${profitPercentage}% &#x1F911;`;
        output.style.color = "green";
    } else if (init === curr) {
        output.innerHTML = `No Profit No Loss &#128528;	`;
        output.style.color = "#DCD7C9";
    } else {
        let loss = (init - curr) * qty;
        let lossPercentage = (loss/(init*qty))*100;
        loss = loss.toFixed(2);
        lossPercentage = lossPercentage.toFixed(2);
        output.innerHTML = `Sorry! You are in loss of ${loss} and your loss pecentage is ${lossPercentage}% &#128542;`
        output.style.color = "red";

    }
}