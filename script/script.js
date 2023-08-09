//Variables

const questionMark = document.querySelector('.question-mark');
const infoBox = document.querySelector('.information-box');
const btn = document.querySelector('#send-button');
const closeBtn = document.querySelector('.close-button');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const imcEl = document.querySelector('#imc-number');
const colorEl = document.querySelector('.color-imc');

//MouseOver Question Button

questionMark.addEventListener('mouseover', function() {
    infoBox.style.display = 'block';
})

questionMark.addEventListener('mouseout', function(){
    infoBox.style.display = 'none';
})

//IMC Calculation

function getIMC() {
    let weight = weightInput.value;
    let height = heightInput.value;

    let realHeight = (height / 100);
    let imc = (weight / (realHeight ** 2)).toFixed(2);
    let imcEl = document.querySelector('#imc-number');
    imcEl.innerHTML = `${imc}`;
    healthStatus(imc);
}

//IMC Color by risk

function healthStatus(imc) {
    if (imc < 18.5) {
        colorEl.style.color = 'red';
        colorEl.innerHTML = 'abaixo do peso';
    } else if(imc > 18.5 && imc <= 24.9) {
        colorEl.style.color = 'green';
        colorEl.innerHTML = 'normal';
    } else if(imc >= 25 && imc <= 29.9) {
        colorEl.style.color = 'red';
        colorEl.innerHTML = 'sobrepeso';
    } else {
        colorEl.style.color = 'red';
        colorEl.innerHTML = 'obesidade';
    }
}

// Model Opening

const Modal = {
    wrapper: document.querySelector('.modal'),
    
    open() {
        let weight = document.querySelector('#weight').value;
        let height = document.querySelector('#height').value;
        weight === '' || height === '' ? 
        alert('É necessário inserir todas informações.')
        : Modal.wrapper.style.display = 'flex';
    },
    close() {
        Modal.wrapper.style.display = 'none';
    }
}

//Clean Values after Close

function cleanValues() {
    weightInput.value = '';
    heightInput.value = '';
}

//Button Event

btn.addEventListener('click', () => {
    getIMC();
    Modal.open();
});

closeBtn.onclick = () => {
    Modal.close();
    cleanValues();
}
