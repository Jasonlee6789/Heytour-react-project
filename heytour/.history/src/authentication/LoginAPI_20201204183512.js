import { useState, useEffect, useReducer, useRef } from "react";

function authAPIReducer(state, action) {
  switch (action.type) {
    case "AUTH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "AUTH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
}



export default useLogin(initialUser){
    const didMountRef = useRef(false);

    const mockData = {
        user: "admin@gmail.com",
        password: "123456",
    }
};
