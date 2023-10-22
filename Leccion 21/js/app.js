const ingresos = [
    new Ingreso('Salario',23000),
    new Ingreso('Venta Coche',50000)
];

const egresos = [
    new Egreso('Renta departamento',500),
    new Egreso('Ropa',400)
];

let cargarApp = ()=>{
    cargarCabecero();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos()- totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
   return  valor.toLocaleString('es-CL',{style:'currency',currency:'CLP',minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('es-CL',{style:'percent',minimumFractionDigits:2});
}