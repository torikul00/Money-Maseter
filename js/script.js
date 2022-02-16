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
// else{
//     alert('input valid numer');   
// }

})

