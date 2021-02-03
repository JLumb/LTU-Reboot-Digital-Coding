let fullName = document.querySelector('input[name="full-name"]');

let submitbutton=document.querySelector('input[type=submit]');

submitbutton.addEventListener('click', function(event){

    event.preventDefault();

    console.log(fullName.value);



});