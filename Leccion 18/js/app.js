console.log('Aplicación Calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) +parseInt(operandoB.value) ;
    if(isNaN (resultado))
        resultado = 'La operacion no tiene numeros';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}


function restar(){
    const sustraccion = document.getElementById('sustraccion');
    let operandoA = sustraccion['operandoA'];
    let operandoB = sustraccion['operandoB'];
    let total = parseInt(operandoA.value)-parseInt(operandoB.value);
    if(isNaN(total))
        total = 'debe colocar un numero.';
    document.getElementById('totalResta').innerHTML = `Resultado: ${total}`;
}

function multiplicar(){
    const multiplicar = document.getElementById('multiplicacion');
    let operandoA = multiplicar['operandoA'];
    let operandoB = multiplicar['operandoB'];
    let total = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(total))
        total = 'debe colocar un numero';
    document.getElementById('totalmulti').innerHTML = `Resultado: ${total}`;
}

function dividir(){
    const dividir = document.getElementById('division');
    let operandoA = dividir['operandoA'];
    let operandoB = dividir['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'debe colocar un numero por favor';
    document.getElementById('totaldiv').innerHTML = `Resultado: ${resultado}`;
}