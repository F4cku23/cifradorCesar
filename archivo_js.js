const alfabeto=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal=document.getElementById('input-original');
const cifrador=document.getElementById('cifrador');
const resultado=document.getElementById('resultado');
const rango=document.getElementById('rango');
const botonBorrar = document.getElementById('botonBorrar');

const shifMessage=()=>{
    const wordArray=[...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray);
}

const printChar=(currentLetterIndex, wordArray)=>{
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value=inputOriginal.value.substring(1)
    const spanChar=document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( ()=> {
            const charSinCodificar=wordArray[currentLetterIndex];
            spanChar.innerHTML=alfabeto.includes(charSinCodificar) ? alfabeto[(alfabeto.indexOf(charSinCodificar)  + parseInt(rango.value)) % alfabeto.length] : charSinCodificar;
            printChar(currentLetterIndex + 1, wordArray);
        })
}

const animateChar=spanChar => {
    let cambios_letra=0;
    return new Promise(resolve => {const intervalo = setInterval(() =>{
        spanChar.innerHTML=alfabeto[Math.floor(Math.random() * alfabeto.length)];
        cambios_letra++;
        if(cambios_letra === 3){
            clearInterval(intervalo);
            resolve();
        }
    }, 30);});
}

const submit=e=>{
    e.preventDefault();
    resultado.innerHTML='';
    shifMessage();
}

cifrador.onsubmit=submit;

botonBorrar.addEventListener('click', function() {
    // Borra el contenido del div
    resultado.textContent = '';
  });