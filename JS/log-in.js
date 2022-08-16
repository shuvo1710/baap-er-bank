document.getElementById('loginButton').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    if(email == 'shontan@gmail.com' && password == 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('sir/mam please inter your valid username and password')
    }
})