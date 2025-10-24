const randomcolor= function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let interval
const startcolorchange= function(){
    if(interval==null){
    interval=setInterval(colorchange,1000);
    }

    function colorchange(){document.body.style.backgroundColor=randomcolor();
    }
};
const stopcolorchange= function(){
    clearInterval(interval);
    interval=null;
};
document.querySelector('#start').addEventListener('click',startcolorchange);
document.getElementById('stop').addEventListener('click',stopcolorchange);