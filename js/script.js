//fucntion  of input values 


function getValue(inputs) {
    const input = document.getElementById(inputs);
    const inputValue = parseFloat(input.value);
    return inputValue
}

//  add even listener of calcualte button

document.getElementById('calc-button').addEventListener('click', function () {
    const incomeInputValue = getValue('income-input');
    const foodInputValue = getValue('food-input');
    const rentInputValue = getValue('rent-input');
    const clothInputValue = getValue('clothe-input')

    // Errors handling All inputs 

    if (foodInputValue < 0 || isNaN(foodInputValue)) {
        const foodError = document.getElementById('food-error');
        foodError.style.display = 'block'
    } else {
        if (foodInputValue >= 0 && rentInputValue >= 0 && clothInputValue >= 0) {
            var totalValues = foodInputValue + rentInputValue + clothInputValue;
        }
        const foodError = document.getElementById('food-error');
        foodError.style.display = 'none'
    }
    if (rentInputValue < 0 || isNaN(rentInputValue)) {
        const foodError = document.getElementById('rent-error');
        foodError.style.display = 'block'
    } else {
        if (foodInputValue >= 0 && rentInputValue >= 0 && clothInputValue >= 0) {
            var totalValues = foodInputValue + rentInputValue + clothInputValue;
        }
        const foodError = document.getElementById('rent-error');
        foodError.style.display = 'none'
    }
    if (clothInputValue < 0 || isNaN(clothInputValue)) {
        const foodError = document.getElementById('cloth-error');
        foodError.style.display = 'block'
    } else {
        if (foodInputValue >= 0 && rentInputValue >= 0 && clothInputValue >= 0) {
            var totalValues = foodInputValue + rentInputValue + clothInputValue;
        }
        const foodError = document.getElementById('cloth-error');
        foodError.style.display = 'none'
    }

    if (incomeInputValue > 0 && totalValues < incomeInputValue) {
        var totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = totalValues;

        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'none'
    } else {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block'
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

            if (getSavingBalance > 0 && getSavingBalance < latestMainBalance) {
                const saveInput = document.getElementById('save-amount');
                saveInput.innerText = getSavingBalance.toFixed(2);
                const lastbalance = latestMainBalance - parseFloat(getSavingBalance)
                const remainingBalance = document.getElementById('remaining-balance');
                remainingBalance.innerText = lastbalance.toFixed(2);
                const eror2 = document.getElementById('error2');
                eror2.style.display = 'none'
                const eror3 = document.getElementById('error3');
                eror3.style.display = 'none'
            } else {
                const eror2 = document.getElementById('error2');
                eror2.style.display = 'block'
            }
        }
    } else {
        const eror3 = document.getElementById('error3');
        eror3.style.display = 'block'
    }
})