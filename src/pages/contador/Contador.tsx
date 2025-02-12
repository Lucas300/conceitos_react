import { useState } from "react"


function Contador() {
  const[valor, setValor] = useState(0); //valor = 0 (lembra os metodos get e set)

  function zerar(){
    setValor(0);
  }

  function handleClick() {
    setValor(valor + 1); //valor++  
  }

  return (
      <div>
          <h2>Componente Contador</h2>
          <p>O valor atual é: {valor}</p>
          <button onClick={handleClick}>Adicionar 1</button>
          <button onClick={zerar}>Zerar</button>
      </div>
  )
}

export default Contador