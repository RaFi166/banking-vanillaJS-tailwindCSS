let button = document.querySelector('#btn');


button.addEventListener('click', function () {
    let emailValue = document.querySelector('#email').value;
    let passValue = document.querySelector('#password').value;
    console.log(emailValue);
    console.log(passValue);
    if (emailValue == 'rafi' && passValue == 'rafi') {
        window.location.href = "newpage.html";
    } else {
        console.log('login failed');
    }
});

