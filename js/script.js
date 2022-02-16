document.getElementById('calc-button').addEventListener('click' ,function(){
    const incomeInput = document.getElementById('income-input');
    const incomeInputValue = parseFloat( incomeInput.value);
    const foodInput = document.getElementById('food-input');
    const foodInputValue = parseFloat(foodInput.value) ;
    const rentInput = document.getElementById('rent-input');
    const rentInputValue = parseFloat(rentInput.value);
    const clothInput = document.getElementById('clothe-input')
    const clothInputValue = parseFloat( clothInput.value);
    const totalValues = foodInputValue + rentInputValue + clothInputValue;
    if(incomeInputValue > 0 && totalValues < incomeInputValue  ){
        var totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalValues;
    }
    else{
       alert('input valid numer');   
}
if(incomeInput.value > 0 && totalValues < incomeInputValue){
    const remainingBalance = incomeInputValue - totalValues;
const mainBalance = document.getElementById('main-balance');
mainBalance.innerText = remainingBalance;
}
})

// add even listener of Save button

document.getElementById('save-button').addEventListener('click' , function(){
    const mainBalance = document.getElementById('main-balance');  
    const latestMainBalance = parseFloat(mainBalance.innerText);
    const parsentInput = document.getElementById('parsent-input');
    const parsentInputValue = parseFloat( parsentInput.value);
    const save = parsentInputValue /latestMainBalance;
    const getSavingBalance = save * 100 ; 
    const saveInput = document.getElementById('save-amount');
    saveInput.innerText = getSavingBalance;
    const lastbalance = latestMainBalance - parseFloat(getSavingBalance)
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = lastbalance;

})

