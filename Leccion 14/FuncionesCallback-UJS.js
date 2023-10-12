miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('funcion 1');
}

function miFuncion2(){
    console.log('funcion 2');
}

// funcion de tipo callback 

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5,3,imprimir);

function nombrePersona(nombre){
    console.log(nombre);
}

function concatena(n1,n2,personaNombre){
    let res = n1 + n2;
    personaNombre(`Resultado: ${res}`);
}

concatena('juan','Palacio',nombrePersona);
