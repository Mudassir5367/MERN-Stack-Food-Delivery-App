import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
switch (action.type){
    case 'ADD':
        return [...state,{id:action.id,name:action.name,qlty:action.qlty,size:action.size,price:action.price,img:action.img}]
        case 'REMOVE':
            const newArr = [...state]
            newArr.splice(action.index,1)
            return newArr;
        case "UPDATE":
            const arr = [...state];
            arr.find((food,index)=>{
                if(food.id === action.id){
                    console.log(food.qlty, parseInt(action.qlty),action.price + food.price);
                    arr[index] = {...food,qlty:parseInt(action.qlty) + food.qlty, price:action.price + food.price}
                }
                return arr 
            })
            return arr
            case 'DROP':
                const emptypArr = []
                return emptypArr 

        default:
            console.log('Error in Reducer');
}
}

export const CartProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer,[]);
    return (
    <CartDispatchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}


export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
