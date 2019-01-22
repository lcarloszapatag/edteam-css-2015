let bar = document.getElementById('bar');
let menu = document.getElementById('menu');
let valor = true;
bar.addEventListener('click',function(e) {   
    if(valor) { 
    menu.style.transition="all .3s";
    document.body.style.transition="all .3s";  
    document.body.style.right="15em";  
    menu.style.right="0"; 
        valor=false;
    } else {
        menu.style.transition="all .3s";
        document.body.style.transition="all .3s";  
        document.body.style.right="0";  
        menu.style.right="-15em"; 
        valor=true;
    }
});