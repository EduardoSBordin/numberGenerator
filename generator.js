let btnGenerator = document.querySelector('#btnGenerator');
let btnUpdate = document.querySelector('#btnUpdate');
let result = document.querySelector('#result');
let min = document.querySelector('#min');
let max = document.querySelector('#max'); 

btnGenerator.onclick = () => {

    let res;
    if(Number(min.value) === 0 || Number(max.value) === 0){

    result.innerHTML = 'TYPE 2 NUMBERS';

    }else{

    res = Math.floor(Math.random() * (max.value) - (min.value) + (min.value));
    result.innerHTML =  `${res} <br>`;
    }
}

btnUpdate.onclick = () => {

    result.innerHTML = '0';
    min.value = '';
    max.value = '';
}
