let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver('Resolvio correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

miPromesa.then(
    valor => console.log(valor),
    error =>console.log(error)
);

let Almacen = new Promise((abierto,cerrado)=>{
    let horario = false;
    if(horario)
        abierto('Pase a comprar');
    else
        cerrado('Vuelva mañana esta cerrado');
});

Almacen
.then(am=>console.log(am))
.catch(error=>console.log(error));