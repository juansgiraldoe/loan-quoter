import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatoDinero, calcularPagar } from './helpers';

function App() {

  const [ cantidad, setCantidad ] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0)

  useEffect(() => {
    setTotal(calcularPagar(cantidad, meses));    
  }, [cantidad, meses])
  
  useEffect(() => {  
    //Calcular el pago mensual.
    setPago(total/meses);
  }, [total])
  
  
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const svgResta =
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="16" height="16" viewBox="0 0 24 24" strokeWidth="5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l14 0" />
  </svg>
  
  const svgSuma =
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="16" height="16" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </svg>
  

  function handleChange(e) {
    setCantidad(+e.target.value);
  };

  function handleClickResta() {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert(`Cantidad no valida.`)
      return
    };
    setCantidad(valor)
  };
  
  function handleClickSuma() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert(`Cantidad no valida.`)
      return
    };
    setCantidad(valor)
  };

  return (

    <div className="my-5 max-w-md mx-auto bg-white shadow p-10">
      <Header />
      <hr className='mt-5 mb-5' />
      <div className='flex justify-between items-center mb-3'>
        <Button
          operador = {svgResta}
          fn = {handleClickResta}
          />
        <p className='text-center text-4xl font-extrabold text-indigo-600'>
          {formatoDinero(cantidad)}
        </p>
        <Button
          operador={svgSuma}
          fn = {handleClickSuma}
        />
        
      </div>
      <input
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mb-3"
        type="range"
        name="" 
        id=""
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        onChange={handleChange}
      />
      
      <h2 className='text-2xl font-bold text-center text-gray-500'>
        Elige un <span className='text-indigo-600'>plazo</span> para pagar
      </h2>
      <select
      name=""
      id=""
      className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-lg font-semibold text-gray-500'
      value={meses}
      onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="18">18 Meses</option>
        <option value="24">24 Meses</option>
      </select>
      <div className='my-5 space-y-3 bg-gray-200 p-5 rounded-lg'>
        <h2 className='text-2xl font-bold text-center text-gray-500 mb-5'>
          Resumen <span className='text-indigo-600'>de pagos</span>
        </h2>
        <table>
          <tbody>
            <tr>
              <td className='w-full'>
                <p className='text-xl text-gray-500 font-semibold'>Meses</p>
              </td>
              <td><p className='text-xl text-indigo-600 font-bold'>{meses}</p></td>
            </tr>
            <tr>
              <td className='w-full'>
                <p className='text-xl text-gray-500 font-semibold'>Total a pagar:</p>
              </td>
              <td><p className='text-xl text-indigo-600 font-bold'>{formatoDinero(total)}</p></td>

            </tr>
            <tr>
              <td className='w-full'>
                <p className='text-xl text-gray-500 font-semibold'>Pagos mensuales</p>
              </td>
              <td><p className='text-xl text-indigo-600 font-bold'>{formatoDinero(pago)}</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default App