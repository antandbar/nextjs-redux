'use client'

import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
  }

const Providers: React.FC<ProvidersProps> =({children}) => {
    return <Provider store={store}>
        {children}
    </Provider>
}

export default Providers;