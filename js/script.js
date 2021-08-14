// Traer botón por id
// document.getElementById('button-equals').addEventListener('click', () => {
//     alert('Clic en igual');
// });


// Otra forma de traer botón por id
// document.querySelector('#button-divide').addEventListener('click', () => {
//     alert('Clic en división');
// });
function suma(a,b);{
    return a + b;
}

const resta = (a, b) => suma (a, -b);

const multiplicar = (a, b) => a * b;

const dividir = (a , b) => a / b;

// Traer todos los botones
const allBtn = document.querySelectorAll('.calc-button');
const logEl = document.getElementById('log')
const logArr = [];

let aux = '';

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (event) => {
        const element = event.target; // Elemento .calc-button que dispara el evento
    
        console.log(`Clic en ${element.textContent}`);

        if (element.textContent == 'C'){
            logEl.innerText = '';
            logArr.length = 1
            aux = '';
        } else if (element.textContent == '='){
                logArr.push(aux);
                aux = '';

                let total = parseInt(logArr[0]);
                for(let i = 0; i < logArr.length; i+=3){
                    const num = parseInt(logArr[i]);
                    const op = logArr[i+2];
                    
                    debugger;

                    if (op == '+'){
                        total += suma(a, b);
                    }else if (op =='-'){
                        total += resta(a , b);
                    }else if (op == 'x'){
                        total += multiplicar(a , b);
                    }else if (op == '%')
                        total += dividir(a , b);
                }
            }
            console.log(total);
            logArr.length = 0;
            aux = '';
            
            if (isNaN(total)) {
                resultEl.value = "Error";
            }else{
                resultEl.value = total;
            } else {
            logEl.innerText = logEl.innerText + element.textContent
            if (isNaN(element.textContent)){
                logArr.push(aux);
                logArr.push(element.textContent);  
                
                aux = '';
            } else {
                aux += element.textContent
            }
            
        }
    });
}