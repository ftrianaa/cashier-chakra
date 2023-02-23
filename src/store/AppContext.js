import { createContext, useReducer } from "react";

export const CashierContext = createContext()

const AppReducer = (state, {payload})=>{
    return{
        ...state,
        isLogin: payload
    }
}

const AppContext = ({children})=>{
    const initialState ={
        isLogin:false
    }

    const [state,dispatch]=useReducer(AppReducer, initialState)

    const validateLogin = (params)=>{
        dispatch({payload:params})
    }
    const {isLogin}=state
    
    return(
        <CashierContext.Provider
        value={{
            isLogin: isLogin,
            validateLogin
        }}>
            {children}
        </CashierContext.Provider>
    )
}
export default AppContext