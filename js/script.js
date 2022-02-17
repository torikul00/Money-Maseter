//fucntion  of input values 
function getValue(inputs) {
    const input = document.getElementById(inputs);
    const inputValue = parseFloat(input.value);
    return inputValue
}
document.getElementById('calc-button').addEventListener('click', function () {

    const incomeInputValue = getValue('income-input');
    const foodInputValue = getValue('food-input');
    const rentInputValue = getValue('rent-input');
    const clothInputValue = getValue('clothe-input')
   if(foodInputValue >= 0 && rentInputValue >= 0 && clothInputValue >= 0){
    var totalValues = foodInputValue + rentInputValue + clothInputValue;
   }
    if (incomeInputValue > 0 && totalValues < incomeInputValue) {
        var totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = totalValues;
    } else {
        alert('input valid numer');
    }
    if (incomeInputValue > 0 && totalValues < incomeInputValue) {
        const remainingBalance = incomeInputValue - totalValues;
        const mainBalance = document.getElementById('main-balance');
        mainBalance.innerText = remainingBalance;
    }
})

// add even listener of Save button

document.getElementById('save-button').addEventListener('click', function () {

    const incomeInputValue = getValue('income-input');
    const mainBalance = document.getElementById('main-balance');
    const latestMainBalance = parseFloat(mainBalance.innerText);
    const parsentInputValue = getValue('parsent-input');

    if (parsentInputValue <= 100 && latestMainBalance != 0) {
        if (mainBalance.innerText > parsentInputValue) {
            const save = parsentInputValue / 100;
            var getSavingBalance = save * incomeInputValue;
        }
       else if (getSavingBalance > 0 && getSavingBalance < latestMainBalance) {
            const saveInput = document.getElementById('save-amount');
            saveInput.innerText = getSavingBalance.toFixed(2);
            const lastbalance = latestMainBalance - parseFloat(getSavingBalance)
            const remainingBalance = document.getElementById('remaining-balance');
            remainingBalance.innerText = lastbalance.toFixed(2);
        }
    }

})