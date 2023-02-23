import { createContext, useReducer } from "react";

export const CashierContext = createContext()

const AppReducer = (state, payload)=>{
    console.log(payload);
    return{
        ...state,
        isLogin: payload.payload,
        qty: payload.quantity
    }
}

const AppContext = ({children})=>{
    const initialState ={
        isLogin:false,
        qty:0
    }
    const [state,dispatch]=useReducer(AppReducer, initialState)

    const validateLogin = (params)=>{
        dispatch({payload:params, quantity:qty})
    }

    const addQuantity = () =>{
        dispatch({quantity:qty+1, payload: true})
    }

    const {isLogin, qty}=state

    return(
        <CashierContext.Provider
        value={{
            isLogin: isLogin,
            quantity: qty,
            addQuantity,
            validateLogin
        }}>
            {children}
        </CashierContext.Provider>
    )
}
export default AppContext