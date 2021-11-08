//VIDEO 1

const video1_select= document.querySelector('#video1_select');
const video1_opciones= document.querySelector('#video1_opciones');
const video1_contenidoSelect= document.querySelector('#video1_select .video1_contenido_select');
document.querySelectorAll('#video1_opciones > .opcion').forEach((video1_opcion) =>{
    video1_opcion.addEventListener('click', (video1_e) => {
    video1_e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    video1_select.classList.toggle('active');
    video1_opciones.classList.toggle('active');
    
    
    });
});

video1_select.addEventListener('click',() => {
    video1_select.classList.toggle('active');
    video1_opciones.classList.toggle('active');

});

//VIDEO 2


const video2_select= document.querySelector('#video2_select');
const video2_opciones= document.querySelector('#video2_opciones');
const video2_contenidoSelect= document.querySelector('#video2_select .video2_contenido_select');
document.querySelectorAll('#video2_opciones > .opcion').forEach((video2_opcion) =>{
    video2_opcion.addEventListener('click', (video2_e) => {
    video2_e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    video2_select.classList.toggle('active');
    video2_opciones.classList.toggle('active');
    
    
    });
});

video2_select.addEventListener('click',() => {
    video2_select.classList.toggle('active');
    video2_opciones.classList.toggle('active');

});

//VIDEO 3

const video3_select= document.querySelector('#video3_select');
const video3_opciones= document.querySelector('#video3_opciones');
const video3_contenidoSelect= document.querySelector('#video3_select .video3_contenido_select');
document.querySelectorAll('#video3_opciones > .opcion').forEach((video3_opcion) =>{
    video3_opcion.addEventListener('click', (video3_e) => {
    video3_e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    video3_select.classList.toggle('active');
    video3_opciones.classList.toggle('active');
    
    
    });
});

video3_select.addEventListener('click',() => {
    video3_select.classList.toggle('active');
    video3_opciones.classList.toggle('active');

});


//VIDEO 4


const video4_select= document.querySelector('#video4_select');
const video4_opciones= document.querySelector('#video4_opciones');
const video4_contenidoSelect= document.querySelector('#video4_select .video4_contenido_select');
document.querySelectorAll('#video4_opciones > .opcion').forEach((video4_opcion) =>{
    video4_opcion.addEventListener('click', (video4_e) => {
    video4_e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    video4_select.classList.toggle('active');
    video4_opciones.classList.toggle('active');
    
    
    });
});

video4_select.addEventListener('click',() => {
    video4_select.classList.toggle('active');
    video4_opciones.classList.toggle('active');

});


//VIDEO 5


const video5_select= document.querySelector('#video5_select');
const video5_opciones= document.querySelector('#video5_opciones');
const video5_contenidoSelect= document.querySelector('#video5_select .video5_contenido_select');
document.querySelectorAll('#video5_opciones > .opcion').forEach((video5_opcion) =>{
    video5_opcion.addEventListener('click', (video5_e) => {
    video5_e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    video5_select.classList.toggle('active');
    video5_opciones.classList.toggle('active');
    
    
    });
});

video5_select.addEventListener('click',() => {
    video5_select.classList.toggle('active');
    video5_opciones.classList.toggle('active');

});






