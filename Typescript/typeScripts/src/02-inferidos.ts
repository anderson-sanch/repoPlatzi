(() => {
  
  // TypeScript adivina automáticamente los tipos de las variables basándose en los valores asignados.

  let myProductName = 'Laptop'; // TypeScript infiere que es de tipo 'string'
  let myProductPrice = 1500;    // TypeScript infiere que es de tipo 'number'

  myProductName = 'change name'; // Correcto
  myProductName = '1234'; // Sigue siendo string

})();
// Esto se llama una funcion anonima auto ejecutable


