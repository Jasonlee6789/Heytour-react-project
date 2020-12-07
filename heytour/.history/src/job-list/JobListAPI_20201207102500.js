import { useState, useEffect, useReducer, useRef } from "react";
import JobData from "./data.json";

function jobAPIReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
  }
}
