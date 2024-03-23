const clearBtn=document.querySelector('button');

const inputs=document.querySelectorAll('input');

function clearInputValue(){
    inputs.forEach(input =>{
        input.value='';
    });
}

clearBtn.addEventListener('click',clearInputValue);