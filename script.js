let hidden = document.querySelector('.hidden');
let sign_up_text = document.querySelector('.sign_up_text');
let lds_ring = document.querySelector('.lds-ring');
let button = document.querySelector('.button');

button.onclick = function() {
    sign_up_text.classList.toggle('hidden');
    lds_ring.classList.toggle('hidden');
};	
