import { useEffect, useState } from "react";
import { createContext } from "react";

export const GaleryContext = createContext()

export default function PhotoContextProvider({children}){

    const [fotos, setFotos] = useState([]);
    
    const obtenerFotos = async() =>{
        const url = '/src/assets/json/photos.json';
        const res = await fetch(url);
        const data = await res.json();
        setFotos(data.photos);
    };
    
    
    useEffect(() =>{
        obtenerFotos()
    },[])


    return(
        <GaleryContext.Provider value={{fotos, setFotos}}>
            {children}
        </GaleryContext.Provider>
    )
}
