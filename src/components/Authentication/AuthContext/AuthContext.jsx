import React, { useContext, createContext, useReducer } from 'react';

export const AuthContext = createContext();

const InitialState = {
    user: null,
    isLoggedIn: false,
    formData: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isLoggedIn: true };

        case "SIGNUP":
            return { ...state, user: state.formData, isLoggedIn: true }

        case "LOGOUT":
            return { ...state, user: null, isLoggedIn: false }

        case "UPDATE_FORM_DATA":
            return { ...state, formData: { ...state.formData, ...action.payload } }

        default:
            return state
    }

}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, InitialState);

    return(
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                formData: state.formData,
                dispatch

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}