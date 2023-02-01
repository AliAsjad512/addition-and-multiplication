import {add,multiply} from "./math";
const eventHandler = () => {
    const addButton = document.getElementById('add');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');

    const multiplyButton = document.getElementById('multiply');
    const num1 = document.getElementById('number-1');
    const num2 = document.getElementById('number-2');
   
   
    const updateDownWithAddedNumbers = () => {
        result.innerHTML = 
        //parseInt(number1.value,10) + parseInt(number2.value,10);
      add(number1.value,number2.value);
    }

    const updateDownWithMultiplyNumbers = () => {
        result.innerHTML = 
        //parseInt(number1.value,10) + parseInt(number2.value,10);
      multiply(num1.value,num2.value);
    }
    addButton.addEventListener('click',updateDownWithAddedNumbers);
    multiplyButton.addEventListener('click',updateDownWithMultiplyNumbers);
}

export default eventHandler;