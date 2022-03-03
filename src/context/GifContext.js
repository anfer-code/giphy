import { createContext, useState } from "react";

export const GifContext = createContext();

function GifContextProvider({children}) {
  const [gifs, setGifs] = useState([])
  
  return (
    <GifContext.Provider value={{gifs, setGifs}}>
      {children}
    </GifContext.Provider>
  );
}

export { GifContextProvider }