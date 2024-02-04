import { useContext } from "react";
import { GaleryContext } from "../context/PhotoContext";

const Favorites = () => {
  const { fotos, setFotos } = useContext(GaleryContext);

  const favoritos = fotos.filter((foto) => foto.liked === true );

  const changeLiked = (id) =>{
    const newData = fotos.map((imagen) =>{
      if (imagen.id === id) {
        return {...imagen,liked: false,
        };
      } return imagen;
    })
    setFotos(newData)
  }

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="gallery grid-columns-5 p-3">
        {favoritos.map((imagen) => (
          <div className='fotos' key={imagen.id}>
            <img onClick={() => changeLiked (imagen.id)} src={imagen.src.medium} alt="" width="300px" height="300px" />
            <p>{imagen.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
