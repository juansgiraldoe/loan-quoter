import { useState } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatoDinero } from './helpers';

function App() {

  const [ cantidad, setCantidad ] = useState(10000);
  const [meses, setMeses] = useState("")

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const svgResta =
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M5 12l14 0" />
  </svg>
  
  const svgSuma =
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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

    <div className="my-10 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className='flex justify-between my-8 '>
        <Button
          operador = {svgResta}
          fn = {handleClickResta}
          />
        <Button
          operador={svgSuma}
          fn = {handleClickSuma}
        />
        
      </div>
      <input
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        type="range"
        name="" 
        id=""
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        onChange={handleChange}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {formatoDinero(cantidad)}
      </p>
      <h2 className='text-2xl font-extrabold text-center text-gray-500'>
        Elige un <span className='text-indigo-600'>plazo</span> para pagar
      </h2>
      <select
      name=""
      id=""
      className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-semibold text-gray-500'
      value={meses}
      onChange={e => setMeses(+e.target.value)}
      >
        <option value="">-- Selecciona un plazo --</option>
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="18">18 Meses</option>
        <option value="24">24 Meses</option>
      </select>
    </div>

  )
}

export default App