import { useState, useEffect, useReducer, useRef } from "react";

function LoginAPIReducer(state, action) {
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
      };
  }
}

export default LoginAPIReducer;
