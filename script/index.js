document.getElementById('sign-in-btn').addEventListener('click', function(){
    const userNameInput = document.getElementById('user-name');

    const userName = userNameInput.value;

    const passwordInput = document.getElementById('password');

    const password = passwordInput.value

    if (userName === 'admin' && password === 'admin123') {
        
        alert('You have signed in successfully')

        window.location.assign('./home.html')
    }

    else{
       alert('Wrong Credentials! Please try again.') 
    }

})