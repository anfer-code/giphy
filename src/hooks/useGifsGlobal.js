import { useContext } from "react";
import { GifContext } from 'context/GifContext'

export default function useGifsGlobal() {
  
  return useContext(GifContext).gifs
};
