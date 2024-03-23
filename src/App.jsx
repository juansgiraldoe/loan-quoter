import { useState } from 'react'
import Header from "./components/Header"

function App() {

  const [ cantidad, setCantidad ] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

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
    
  }

  return (

    <div className="my-10 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className='flex justify-between my-8 '>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 border-none cursor-pointer'
          onClick={handleClickResta}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" stroke-width="5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l14 0" />
          </svg>
        </button>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500 border-none cursor-pointer'
          onClick={handleClickSuma}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M12 5l0 14" />
          <path d="M5 12l14 0" />
          </svg>
        </button>
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
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{cantidad}</p>
    </div>

  )
}

export default App
