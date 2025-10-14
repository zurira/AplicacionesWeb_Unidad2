const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const apellidoP = document.querySelector(".apellidoP");
const apellidoM = document.querySelector(".apellidoM");
const fechaNac = document.querySelector(".fechaNac");
const dato1 = document.querySelector(".dato1");
const dato2 = document.querySelector(".dato2");
const dato3 = document.querySelector(".dato3");
const dato4 = document.querySelector(".dato4");

const datoGuardado = localStorage.getItem("texto1");
if(datoGuardado!=""){
    dato1.textContent = `Guardado: ${datoGuardado}`;
}

const datoGuardado2 = localStorage.getItem("texto2");
if(datoGuardado!=""){
    dato2.textContent = `Guardado: ${datoGuardado2}`;
}

const datoGuardado3 = localStorage.getItem("texto3");
if(datoGuardado!=""){
    dato3.textContent = `Guardado: ${datoGuardado3}`;
}

const datoGuardado4 = localStorage.getItem("texto4");
if(datoGuardado!=""){
    dato4.textContent = `Guardado: ${datoGuardado4}`;
}

btnGuardar.addEventListener("click", ()=>{
    const texto1 = nombre.value;
    const texto2 = apellidoP.value;
    const texto3 = apellidoM.value;
    const texto4 = fechaNac.value;
    if(texto1!=""){
        localStorage.setItem('texto1', texto1);
        dato1.textContent = `Guardado: ${texto1}`;
        localStorage.setItem('texto2', texto2);
        dato2.textContent = `Guardado: ${texto2}`;
        localStorage.setItem('texto3', texto3);
        dato3.textContent = `Guardado: ${texto3}`;
        localStorage.setItem('texto4', texto4);
        dato4.textContent = `Guardado: ${texto4}`;
    }
});