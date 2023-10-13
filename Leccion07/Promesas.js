let Discoteque = new Promise((aceptar,rechazar)=>{
    let permiso = 19;
    if(permiso >=18)
        aceptar('Puedes entrar a la Disco');
    else
        rechazar('No tienes la edad suficiente para entrar a la Disco');
});

Discoteque
.then(valor =>console.log(valor))
.catch(error=>console.log(error));

let Bus =  new Promise((subir,bajar)=>{
    let pasaje = false;
    if(pasaje)
        subir('Puede subir al bus');
    else
        bajar('Bajate ctm!');
});

Bus
.then(si=>console.log(si))
.catch(error=>console.log(error));