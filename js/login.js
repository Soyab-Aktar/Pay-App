//! step1 = Set Event Handler
document.getElementById('btn-login').addEventListener('click',function(event){

    // ^ Step2 = Prevent Default Behavior
    event.preventDefault();   // this line of code for prevent browser reload after input on form

    // ^ Step3 = Get phone Number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber==='5' && pinNumber==='1234')
    {
        console.log('You are logged in .');
        window.location.href = '/home.html';
    }
    else
    {
        alert('please enter valid pin or phone number !');
    }
})