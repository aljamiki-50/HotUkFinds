


"use client";
import { SessionProvider } from "next-auth/react";
import SmoothScroll from "../SmothScroll/smoothscroller";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// import { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { makeStore } from '../lib/store'

const Session = ({ children }) => {
  return (
    <SessionProvider>
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </SessionProvider>
  );
};

export default Session;
