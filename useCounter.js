import { useState } from "react";

const useCounter = ( inicialValue = 10 ) => {

    const [ counter, setCounter ] = useState( inicialValue );

    const increment = ( value  = 1 ) => setCounter( counter + value );
    const reset = () => setCounter( inicialValue );
    const decrement = ( value ) => setCounter( counter - value );

    return {
        counter,
        setCounter,
        increment,
        reset,
        decrement,
    }
}

export default useCounter;