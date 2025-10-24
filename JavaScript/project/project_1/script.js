const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        } 
        else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        } 
        else if (e.target.id === 'green') {
            body.style.backgroundColor = 'green';
        } 
        else if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        } 
        else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }
    });
});

  
