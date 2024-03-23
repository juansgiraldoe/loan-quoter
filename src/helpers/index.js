const formatoDinero = valor =>{
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(valor)
};

const calcularPagar = (cantidad, plazo) =>{
  let total;
  //A mayor cantidad menos interes.
  if ( cantidad < 5000 ) {
    total = cantidad *1.2
  } else if ( cantidad >= 5000 && cantidad < 10000 ){
    total = cantidad *1.1
  } else if ( cantidad >= 10000 && cantidad < 15000 ){
    total = cantidad *1.08
  } else if ( cantidad >= 15000 && cantidad <=20000 ){
    total = cantidad *1.05
  };

  //A mayor plazo mayor interes
  if ( plazo === 6 ) {
    total *= 1.1
  } else if ( plazo === 12 ) {
    total *= 1.15
  } else if ( plazo === 18 ) {
    total *= 1.25
  } else if ( plazo === 24 ){
    total *= 1.4
  };

  return total

};

export {
  formatoDinero,
  calcularPagar
};