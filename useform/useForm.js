import { useState } from "react";


const useForm = ( inicialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( inicialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
    //    setFormState( value => {
    //         const data = {}
    //         Object.keys( value ).forEach( key => {
    //             data[key] = '';
    //         });
           
    //         return data;
    //    } );
        setFormState( inicialForm );
    }

    return {
        formState,
        onInputChange,
        onResetForm,
    }
}


export default useForm;


