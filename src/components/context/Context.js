import { createContext } from "react";


export const MapContext = createContext()

function ContextProvider({children}) {

// ? where do I add context from?
  return ( 
    <MapContext.Provider>{children}</MapContext.Provider>
   );
}

export default ContextProvider;