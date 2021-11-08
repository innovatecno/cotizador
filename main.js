const select= document.querySelector('#select');
const opciones= document.querySelector('#opciones');
const contenidoSelect= document.querySelector('#select .contenido_select');
const hiddenInput = document.querySelector('#inputSelect');
var mother = 0;
var proce = 0;
var ram = 0;
var fp = 0;
var dd = 0;
var tv = 0;
var ca = 0;
var total = 0;


document.querySelectorAll('#opciones > .opcion').forEach((opcion) =>{
    opcion.addEventListener('click', (e) => {
    e.preventDefault();   
    contenidoSelect.innerHTML = e.currentTarget.innerHTML;
    select.classList.toggle('active');
    opciones.classList.toggle('active');
    hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
    console.log(hiddenInput.value);
    
    switch (hiddenInput.value){
        case "H410M H":
            mother = 110;
            break;
        case "H510M H":
            mother = 120;
            break;
        case "B460 - PLUS":
            mother = 160;
            break;
        case "B560 - PLUS":
            mother = 184;
            break;
        case "Z490 - GAMING X AX":
            mother = 380;
            break;
        case "Z590 UD":
            mother = 254;
            break;
        default:
            mother = 0;
    }
    console.log(mother);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_mo').innerHTML = mother;
    document.getElementById('va_total').innerHTML = total;
    });
});
select.addEventListener('click',() => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');

});


// SEGUNDO LISTBOX -----------------------------------------------------------------------------------------------

const segundoselect= document.querySelector('#segundoselect');
const segundoopciones= document.querySelector('#segundoopciones');
const segundocontenidoSelect= document.querySelector('#segundoselect .segundocontenido_select');
const segundohiddenInput = document.querySelector('#segundoinputSelect');
document.querySelectorAll('#segundoopciones > .segundoopcion').forEach((segundoopcion) =>{
    segundoopcion.addEventListener('click', (segundoe) => {
    segundoe.preventDefault();   
    segundocontenidoSelect.innerHTML = segundoe.currentTarget.innerHTML;
    segundoselect.classList.toggle('active');
    segundoopciones.classList.toggle('active');
    segundohiddenInput.value = segundoe.currentTarget.querySelector('.segundotitulo').innerText;
    console.log(segundohiddenInput.value);
    
    switch (segundohiddenInput.value){
        case "Intel Celeron G5920":
            proce = 84;
            break;
        case "Intel Core i3 10100":
            proce = 168;
            break;
        case "Intel Core i5 10400":
            proce = 228;
            break;
        case "Intel Core i7 10700k":
            mother = 430;
            break;
        case "Intel Core i9 10900k":
            proce = 625;
            break;
        default:
            proce = 0;
    }
    console.log(proce);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_pro').innerHTML = proce;
    document.getElementById('va_total').innerHTML = total;

    });
});
segundoselect.addEventListener('click',() => {
    segundoselect.classList.toggle('active');
    segundoopciones.classList.toggle('active');

});

// TERCER LISTBOX ---------------------------------------------------------------------------------------------

const terceroselect= document.querySelector('#terceroselect');
const terceroopciones= document.querySelector('#terceroopciones');
const tercerocontenidoSelect= document.querySelector('#terceroselect .tercerocontenido_select');
const tercerohiddenInput = document.querySelector('#terceroinputSelect');
document.querySelectorAll('#terceroopciones > .terceroopcion').forEach((terceroopcion) =>{
    terceroopcion.addEventListener('click', (terceroe) => {
    terceroe.preventDefault();   
    tercerocontenidoSelect.innerHTML = terceroe.currentTarget.innerHTML;
    terceroselect.classList.toggle('active');
    terceroopciones.classList.toggle('active');
    tercerohiddenInput.value = terceroe.currentTarget.querySelector('.tercerotitulo').innerText;
    console.log(tercerohiddenInput.value);

    switch (terceroinputSelect.value){
        case "Kingston DDR4 8Gb":
            ram = 64;
            break;
        case "Corsair Vengeance LPX DDR4 8Gb":
            ram = 80;
            break;
        case "Corsair Vengeance LPX DDR4 16Gb":
            ram = 125;
            break;
        case "Corsair Vengeance LPX DDR4 32Gb":
            ram = 220;
            break;
        case "Patriot Viper Steel DDR4 8Gb":
            ram = 75;
            break;
        case "Patriot Viper Steel DDR4 16Gb":
            ram = 134;
            break;
        case "Patriot Viper Steel DDR4 32Gb":
            ram = 220;
            break;
        default:
            ram = 0;
    }
    console.log(ram);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_ram').innerHTML = ram;
    document.getElementById('va_total').innerHTML = total;
    });
});
terceroselect.addEventListener('click',() => {
    terceroselect.classList.toggle('active');
    terceroopciones.classList.toggle('active');

});

// cuarto LISTBOX ---------------------------------------------------------------------------------------------


const cuartoselect= document.querySelector('#cuartoselect');
const cuartoopciones= document.querySelector('#cuartoopciones');
const cuartocontenidoSelect= document.querySelector('#cuartoselect .cuartocontenido_select');
const cuartohiddenInput = document.querySelector('#cuartoinputSelect');
document.querySelectorAll('#cuartoopciones > .cuartoopcion').forEach((cuartoopcion) =>{
    cuartoopcion.addEventListener('click', (cuartoe) => {
    cuartoe.preventDefault();   
    cuartocontenidoSelect.innerHTML = cuartoe.currentTarget.innerHTML;
    cuartoselect.classList.toggle('active');
    cuartoopciones.classList.toggle('active');
    cuartohiddenInput.value = cuartoe.currentTarget.querySelector('.cuartotitulo').innerText;
    console.log(cuartohiddenInput.value);

    switch (cuartoinputSelect.value){
        case "Evga 600w 80plus white":
            fp = 75;
            break;
        case "Evga 850 BQ 80plus bronce":
            fp = 160;
            break;
        case "ThermalTake 600w 80plus white":
            fp = 70;
            break;
        default:
            fp = 0;
    }
    console.log(fp);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_fp').innerHTML = fp;
    document.getElementById('va_total').innerHTML = total;
    });
});
cuartoselect.addEventListener('click',() => {
    cuartoselect.classList.toggle('active');
    cuartoopciones.classList.toggle('active');

});

// quinto LISTBOX ---------------------------------------------------------------------------------------------

const quintoselect= document.querySelector('#quintoselect');
const quintoopciones= document.querySelector('#quintoopciones');
const quintocontenidoSelect= document.querySelector('#quintoselect .quintocontenido_select')
const quintohiddenInput = document.querySelector('#quintoinputSelect')
document.querySelectorAll('#quintoopciones > .quintoopcion').forEach((quintoopcion) =>{
    quintoopcion.addEventListener('click', (quintoe) => {
    quintoe.preventDefault();   
    quintocontenidoSelect.innerHTML = quintoe.currentTarget.innerHTML;
    quintoselect.classList.toggle('active');
    quintoopciones.classList.toggle('active');
    quintohiddenInput.value = quintoe.currentTarget.querySelector('.quintotitulo').innerText;
    console.log(quintohiddenInput.value);

    switch (quintoinputSelect.value){
        case "Seagate 500gb":
            dd = 27;
            break;
        case "Seagate 1Tb":
            dd = 47;
            break;
        case "Western Digital 1Tb":
            dd = 65;
            break;
        case "Kingston ssd 240Gb":
            dd = 43;
            break;
        default:
            dd = 0;
    }
    console.log(dd);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_dd').innerHTML = dd;
    document.getElementById('va_total').innerHTML = total;
    });
});
quintoselect.addEventListener('click',() => {
    quintoselect.classList.toggle('active');
    quintoopciones.classList.toggle('active');

});


// sexto LISTBOX ---------------------------------------------------------------------------------------------

const sextoselect= document.querySelector('#sextoselect');
const sextoopciones= document.querySelector('#sextoopciones');
const sextocontenidoSelect= document.querySelector('#sextoselect .sextocontenido_select');
const sextohiddenInput = document.querySelector('#sextoinputSelect');
document.querySelectorAll('#sextoopciones > .sextoopcion').forEach((sextoopcion) =>{
    sextoopcion.addEventListener('click', (sextoe) => {
    sextoe.preventDefault();   
    sextocontenidoSelect.innerHTML = sextoe.currentTarget.innerHTML;
    sextoselect.classList.toggle('active');
    sextoopciones.classList.toggle('active');
    sextohiddenInput.value = sextoe.currentTarget.querySelector('.sextotitulo').innerText;
    console.log(sextohiddenInput.value);

    switch (sextoinputSelect.value){
        case "Gt 1030":
            tv = 135;
            break;
        case "Gtx 1050 ti":
            tv = 280;
            break;
        case "Gtx 1650 oc":
            tv = 420;
            break;
        case "Gtx 1660 oc":
            tv = 540;
            break;
        case "Rtx 2080 oc":
            tv = 1250;
            break;
        default:
            tv = 0;
    }
    console.log(tv);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_tv').innerHTML = tv;
    document.getElementById('va_total').innerHTML = total;
    });
});
sextoselect.addEventListener('click',() => {
    sextoselect.classList.toggle('active');
    sextoopciones.classList.toggle('active');

});


// septimo LISTBOX ---------------------------------------------------------------------------------------------


const septimoselect= document.querySelector('#septimoselect');
const septimoopciones= document.querySelector('#septimoopciones');
const septimocontenidoSelect= document.querySelector('#septimoselect .septimocontenido_select')
const septimohiddenInput = document.querySelector('#septimoinputSelect')
document.querySelectorAll('#septimoopciones > .septimoopcion').forEach((septimoopcion) =>{
    septimoopcion.addEventListener('click', (septimoe) => {
    septimoe.preventDefault();   
    septimocontenidoSelect.innerHTML = septimoe.currentTarget.innerHTML;
    septimoselect.classList.toggle('active');
    septimoopciones.classList.toggle('active');
    septimohiddenInput.value = septimoe.currentTarget.querySelector('.septimotitulo').innerText;
    console.log(septimohiddenInput.value);

    switch (septimoinputSelect.value){
        case "Case normal":
            ca = 45;
            break;
        case "Case gamer":
            ca = 76;
            break;
        default:
            ca = 0;
    }
    console.log(ca);
    total = mother + proce + ram + fp + dd + tv + ca;
    console.log(total);
    document.getElementById('va_ca').innerHTML = ca;
    document.getElementById('va_total').innerHTML = total;
    });
});
septimoselect.addEventListener('click',() => {
    septimoselect.classList.toggle('active');
    septimoopciones.classList.toggle('active');

});













