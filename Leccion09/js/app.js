const invitados = [
    new Invitado('Juan','Lopez'),
    new Invitado('Mario','Lara')
];

function mostrarInvitados(){
    console.log('mostrar invitados');
    let texto = '';
    for(let invitado of invitados){
        console.log(invitado);
        texto += `<li> ${invitado.nombre} ${invitado.apellido}</li>`;
    }
    document.getElementById('invitados').innerHTML= texto;
}

function agregarInvitados(){
    const forma = document.forms['forma1'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value!='' && apellido.value !=''){
        const invitado = new Invitado(nombre.value,apellido.value);
        console.log(invitado);
        invitados.push(invitado);
        mostrarInvitados();
    }
    else{
        console.log('no hay informacion que entregar');
    }
}