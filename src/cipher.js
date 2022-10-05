const cipher = {
    encode: (offset,message) => {
      let mensaje= ""; //formula
      let textocodificado=""; //
      if ( offset === '' || message==='' ) throw new TypeError ('Por favor ingresa todos los parámetros')
       if  (offset=== null ||  message=== null) throw new TypeError ("Caracteres no permitidos");
       if  (offset===0 ||  message=== 0) throw new TypeError ("Los valores deben ser distintos a cero");
       
           
      
       for (let i = 0 ; i <message.length; i++){ //Identificar cada letra del string 
        if (message.charCodeAt(i)>=65 && message.charCodeAt(i)<=90) { //Pasar letras a código ASCII
          
          mensaje= ((message.charCodeAt(i)- 65 + parseInt(offset))% 26)+65; //Formula de Cifrado Cesar (número ASCCI + Offset)
        }

        else if(message.charCodeAt(i) === 32) {
          mensaje = 32;

                }

     
        
      textocodificado += String.fromCharCode(mensaje); //Pasar número a letra
       //console.log(textocodificado);   
      }
    return textocodificado;
          
     
    },

    decode: (offset,message) => {
     
     let mensajeclave= ""; //formula
      let textooriginal=""; //resultado
      if ( offset === '' || message==='' ) {throw new TypeError ('Por favor ingresa todos los parámetros');}
      if  (offset=== null ||  message=== null) throw new TypeError ("Caracteres no permitidos");
      if  (offset===0 ||  message=== 0) throw new TypeError ("Los valores deben ser distintos a cero");
      // if (typeof offset!= 'string' || typeof message!= 'string') {throw new TypeError ("Caracteres no permitidos");}
     
     
      for (let i = 0 ; i <message.length; i++){
       if (message.charCodeAt(i)>=65 && message.charCodeAt(i)<=90){
         mensajeclave= ((message.charCodeAt(i)+ 65 - parseInt(offset))% 26)+65;  
        }
        else if (message.charCodeAt(i) === 32) {
          mensajeclave = 32;
        }
        
        
        textooriginal += String.fromCharCode(mensajeclave); 
       
      }
      return textooriginal;}

     
      


};


export default cipher;





