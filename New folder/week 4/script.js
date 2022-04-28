let element= document.getElementById('THEbutton');
let display= document.getElementById('displayarea');
function laugh(){
    return 'ha';
}

element.addEventListener('click', event => {
    alert('DO YOU SEE IT?');
    display.innerText=laugh();
    
});
