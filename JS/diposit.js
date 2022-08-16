// step -1 add even listener to  the deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
// step-2 get the deposit amount from the deposit input value
    const dipositField = document.getElementById('deposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);
    // step-3 get the current deposit total
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalStrin = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalStrin);
// step-4 add numbers to set the total depisit
    const currrentDipositTotal = newDipositAmount + previousDipositTotal;
    dipositTotalElement.innerText = currrentDipositTotal;
    
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceElementString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceElementString);

    const addTotalBalance = totalBalance + newDipositAmount;
    totalBalanceElement.innerText = addTotalBalance

// clear the deposit field
    dipositField.value ='';
})