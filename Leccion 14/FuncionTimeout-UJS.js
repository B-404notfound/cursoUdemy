let reloj = ()=>{
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//setInterval(reloj,1000); // 1 seg


let impar = ()=>{
    let numero = (1*3);
    console.log(numero);
}

setInterval(impar,2000);

