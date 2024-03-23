const formatoDinero = valor =>{
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(valor)
};

export {
  formatoDinero,
}