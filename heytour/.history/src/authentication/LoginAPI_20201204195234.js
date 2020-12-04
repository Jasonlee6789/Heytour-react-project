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

    const mockJsonRes =
    '{"firstName": "Admin", "lastName": "User", "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}';

    const data = JSON.parse(mockJsonRes);

    const [state, dispatch] = useReducer(authAPIReducer, {
        isLoading: false,
        isError: false,
        data:null,
    })

};
