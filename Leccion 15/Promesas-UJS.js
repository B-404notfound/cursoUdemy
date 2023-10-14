let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver('Resolvio correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

//miPromesa.then(
 //   valor => console.log(valor),
   // error =>console.log(error)
//);

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

 //async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor=>console.log(valor));


async function salaDeClases(){
    let ingreso = new Promise(resolver=>{
        resolver ('Termino el recreo');
    });

    console.log(await ingreso);
}

salaDeClases();

async function dormir(){
    let descansar = new Promise(solucionar=>{
        solucionar('Se soluciono el problema');
    });

    console.log(await descansar);
}

dormir();

async function hola(){
    let saludar = new Promise(caballero=>{
        caballero('Hola señor como esta ?');
    });
    console.log(await saludar);
}

hola();

// promesas, await, async y seTimeout

async function funcionConPromesaAwaitTomeout(){
    let miPromesa = new Promise(resolver=>{
        setTimeout(()=>resolver('promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);
}

funcionConPromesaAwaitTomeout();

async function Playa(){
    let olita = new Promise(marea=>{
        setTimeout(()=>marea('Ahi viene la Ola'),5000);
    });
    console.log(await olita);
}

Playa();

async function Carrera(){
    let atleta = new Promise(pie=>{
        setTimeout(()=>pie('Corre CTM!!'),2000);
    });
    console.log(await atleta);
}

Carrera();

let MayoDeEdad = new Promise((mayor,menor)=>{
    let aceptar = 15;
    if(aceptar >=18)
        mayor('Eres mayor de edad');
    else
        menor('Eres menor de edad');
});

MayoDeEdad.then(correcto=>console.log(correcto),malo=>console.log(malo));


