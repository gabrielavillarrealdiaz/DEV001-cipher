import cipher from './cipher.js';

//Capturar mensaje y offset (numero para cifrar)
document.getElementById("cifrar").addEventListener("click",(e)=>{
    e.preventDefault()

    const message=document.getElementById("mensaje").value;
    const offset=document.getElementById("offset").value;
                
    document.getElementById('textocodificado').innerHTML= cipher.encode(offset,message); 
   
    });

document.getElementById("decifrar").addEventListener("click",(e)=>{
    e.preventDefault()

    const message=document.getElementById("mensaje").value;
    const offset=document.getElementById("offset").value;
     document.getElementById('textooriginal').innerHTML= cipher.decode(offset,message);
    
});


