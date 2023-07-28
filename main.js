const body = document.querySelector('body');
const form = document.createElement('form');
const labelSelect = document.createElement('label');
const selectCity = document.createElement('select');
const labelNumNight = document.createElement('label');
const inputNumNight = document.createElement('input');
const labelNumDays = document.createElement('label');
const inputDays = document.createElement('input');
const inputBtn = document.createElement('input');
const div = document.createElement('div');
const totalCostH1 = document.createElement('h1')

body.appendChild(form);
body.appendChild(div);
div.appendChild(totalCostH1);
form.appendChild(labelSelect);
form.appendChild(selectCity);
form.appendChild(labelNumNight);
form.appendChild(inputNumNight)
inputNumNight.type = "number";
inputNumNight.min = 1;
form.appendChild(labelNumDays);
form.appendChild(inputDays);
inputDays.type = 'number';
inputDays.min = 1
form.appendChild(inputBtn);
inputBtn.value = "Calcular Coste";
inputBtn.type = "submit"
labelSelect.innerText = 'Ciudad:'
labelNumNight.innerText = 'Numero de Noches:'
labelNumDays.innerText = 'Numero de Dias de alquiler de coche:'
form.style.display = 'flex';
form.style.flexDirection = 'column'
form.style.alignItems = 'center'
form.style.gap = '3em'
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
body.style.backgroundImage ='url("./assets/Back.jpg")'
body.style.backgroundRepeat ='no-repeat'
body.style.backgroundSize='cover'
totalCostH1.style.color = 'red'
labelNumNight.style.color = 'green'
labelSelect.style.color = 'orange'



let options = [
    { value: 90, text: 'Barcelona' },
    { value: 90, text: "Madrid" },
    { value: 50, text: "Sevilla" },
    { value: 40, text: "Valencia" }
];

function addSelect(optionList) {
    for (let i = 0; i < optionList.length; i++) {
        const element = optionList[i];
        let option = document.createElement('option');
        option.setAttribute('value', element.value);
        option.innerText = element.text
        selectCity.appendChild(option)

    }
    return selectCity
}

addSelect(options)




function calcularCoste(e) {
    e.preventDefault();
    let hotelCost = costHotel(inputNumNight.value); 
    let avionCost = costAvion(inputNumNight.value);
    let cocheCost = costCoche(inputDays.value);
    costTotal = +hotelCost + (avionCost - 0) + (cocheCost * 1)// tres maneras de convertir un valor de un input de string a number 
    
    return totalCostH1.innerText = `Your total travel cost is ${costTotal}`
}
form.addEventListener('submit', calcularCoste)

function costHotel(numNight) {
    let costNight = 140 * numNight;    
    return costNight;
}

function costAvion(numNight) {
    let cost = selectCity.value
    if (numNight > 3) {
        return cost * 0.90
    }
    else{
        return cost
    }
}
function costCoche(numDays) {
    let costDay = 40 * numDays;
    if (numDays >= 3 && numDays < 7) {
        costDay -= 20
        return costDay
    }
    else if (numDays >= 7) {
        costDay-=50
        return costDay
    }
    else{
        return costDay
    }
}
