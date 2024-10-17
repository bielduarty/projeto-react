import { useState } from "react";
function Contador() {
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador(contador + 1)
    }
    const decrementar = () => {
        setContador(contador - 1)
    }
    return (
        <>
            <h2>Contador</h2>
            <p> valor : {contador}</p>
            <button onClick={incrementar}>Incrementear </button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )   
}
export default Contador