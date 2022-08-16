document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawFieldString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawFieldString)

    
    withdrawField.value = '';
    if(isNaN(newWithdraw)){
        return;
    }
    
    
    const previousWithdrawAmontElement = document.getElementById('withdraw-amount');
    const previousWithdrawAmontString = previousWithdrawAmontElement.innerText;
    const previousTotallWithdraw = parseFloat(previousWithdrawAmontString);
    
    

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    
    if(newWithdraw > previousTotalBalance){
        alert('baap er bank ato tk nai')
        return;
    }
    const currentWithdrawAmount = previousTotallWithdraw + newWithdraw;
    previousWithdrawAmontElement.innerText = currentWithdrawAmount;

    const newBalanceTotal = previousTotalBalance - newWithdraw;
    totalBalanceElement.innerText = newBalanceTotal;

    


    

    
    

})