import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todo-reducer";

const inicialState = [
    // {
    //     id: new Date().getDate(),
    //     descripcion:'recoletar las piedras del alma',
    //     done:false
    // },
];

const init = () => JSON.parse( localStorage.getItem('todos') ) || [];

export const useTodos = () => {
    
        const [ todos , dispatch ] = useReducer( todoReducer, inicialState, init );


        useEffect(() => {
            localStorage.setItem('todos', JSON.stringify( todos ) || [] );
         }, [todos])

        const handleNewTodo = ( newTodo ) => {
            const action = {
                type:'[TODO] Add Todo'.trim(),
                payload: newTodo
            } 
            dispatch( action );   
        }

        const handleDeleteTodo = ( id ) => {
            dispatch({
                type    :   '[TODO] Remove Todo',
                payload :   id
            });
        }

        const handleToggletodo = ( id ) => {
            const action = {
                type: '[Todo] Toggle Todo',
                payload: id
            }
            dispatch( action );
        }

        return {
            todos,
            handleNewTodo,
            handleDeleteTodo,
            handleToggletodo,
            todosCount: todos.length,
            pendingTodosCount: todos.filter( todo => !todo.done ).length
        }
}
